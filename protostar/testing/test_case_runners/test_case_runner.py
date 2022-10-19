from abc import abstractmethod
from dataclasses import dataclass
from typing import Generic, TypeVar, Optional

from protostar.starknet import BreakingReportedException, ReportedException
from protostar.testing.environments.test_execution_environment import (
    TestExecutionResult,
)
from protostar.testing.stopwatch import Stopwatch
from protostar.testing.test_output_recorder import OutputRecorder
from protostar.testing.test_results import (
    BrokenTestCaseResult,
    FailedTestCaseResult,
    PassedTestCaseResult,
    TestCaseResult,
)
from protostar.testing.test_suite import TestCase

ExecutionResultT = TypeVar("ExecutionResultT", bound=TestExecutionResult)


def estimate_fee(execution_resources) -> set[float]:
    if not execution_resources:
        return None
    weights: dict[str, float] = {
        "n_steps": 0.05,
        "range_check_builtin": 0.4,
        "pedersen_builtin": 0.4,
    }

    costs: list[tuple[str, float]] = [
        (
            "n_steps",
            getattr(execution_resources.n_steps, "value", 0) * weights["n_steps"],
        )
    ]
    range_check_builtin = execution_resources.builtin_name_to_count_map.get(
        "range_check_builtin"
    )
    if range_check_builtin:
        costs.append(
            (
                "range_check_builtin",
                getattr(range_check_builtin, "value", 0)
                * weights["range_check_builtin"],
            )
        )
    pedersen_builtin = execution_resources.builtin_name_to_count_map.get(
        "pedersen_builtin"
    )
    if pedersen_builtin:
        costs.append(
            (
                "pedersen_builtin",
                getattr(pedersen_builtin, "value", 0) * weights["pedersen_builtin"],
            )
        )

    return sorted(costs, key=lambda item: item[1])[-1][1]


class TestCaseRunner(Generic[ExecutionResultT]):
    @dataclass
    class ExecutionMetadata:
        execution_time: float

    def __init__(
        self,
        test_case: TestCase,
        output_recorder: OutputRecorder,
        stopwatch: Stopwatch,
    ) -> None:
        self._test_case = test_case
        self._output_recorder = output_recorder
        self._stopwatch = stopwatch

    async def run(self) -> TestCaseResult:
        try:
            with self._stopwatch.lap(self._test_case.test_fn_name):
                execution_result = await self._run_test_case()

            return self._map_execution_result_to_passed_test_result(
                execution_result,
                TestCaseRunner.ExecutionMetadata(self._stopwatch.total_elapsed),
            )
        except BreakingReportedException as ex:
            return self._map_breaking_reported_exception_to_broken_test_result(
                ex,
                TestCaseRunner.ExecutionMetadata(self._stopwatch.total_elapsed),
            )
        except ReportedException as ex:
            return self._map_reported_exception_to_failed_test_result(
                ex,
                TestCaseRunner.ExecutionMetadata(self._stopwatch.total_elapsed),
            )

    @abstractmethod
    async def _run_test_case(self) -> ExecutionResultT:
        ...

    def _map_execution_result_to_passed_test_result(
        self, execution_result: ExecutionResultT, execution_metadata: ExecutionMetadata
    ) -> PassedTestCaseResult:
        return PassedTestCaseResult(
            file_path=self._test_case.test_path,
            test_case_name=self._test_case.test_fn_name,
            execution_resources=execution_result.execution_resources,
            execution_time=execution_metadata.execution_time,
            captured_stdout=self._output_recorder.get_captures(),
            estimated_fee=estimate_fee(execution_result.execution_resources),
        )

    def _map_reported_exception_to_failed_test_result(
        self,
        reported_exception: ReportedException,
        execution_metadata: ExecutionMetadata,
    ) -> FailedTestCaseResult:
        return FailedTestCaseResult(
            file_path=self._test_case.test_path,
            test_case_name=self._test_case.test_fn_name,
            exception=reported_exception,
            execution_time=execution_metadata.execution_time,
            captured_stdout=self._output_recorder.get_captures(),
        )

    def _map_breaking_reported_exception_to_broken_test_result(
        self,
        reported_exception: BreakingReportedException,
        execution_metadata: ExecutionMetadata,
    ) -> BrokenTestCaseResult:
        return BrokenTestCaseResult(
            file_path=self._test_case.test_path,
            test_case_name=self._test_case.test_fn_name,
            exception=reported_exception,
            execution_time=execution_metadata.execution_time,
            captured_stdout=self._output_recorder.get_captures(),
        )

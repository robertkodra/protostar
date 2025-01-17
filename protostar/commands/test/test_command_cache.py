from typing import List, Optional
from logging import Logger

from protostar.testing import TestingSummary
from protostar.testing.test_results import (
    FailedTestCaseResult,
    BrokenTestCaseResult,
    BrokenTestSuiteResult,
)

from protostar.self.cache_io import CacheIO


class TestCommandCache:
    def __init__(self, cache_io: CacheIO, logger: Optional[Logger] = None):
        self.cache_io = cache_io
        self._logger = logger

    def obtain_targets(
        self, targets: List[str], last_failed: bool = False
    ) -> List[str]:
        if not last_failed:
            return targets
        if targets_from_cache := self.cache_io.read("last_failed_tests"):
            targets = targets_from_cache["targets"]
            targets = [f"{target[0]}::{target[1]}" for target in targets]
            if self._logger:
                self._logger.info(
                    f"Running previously failed tests, found {len(targets)} cases"
                )
        return targets

    def write_failed_tests_to_cache(self, summary: TestingSummary):
        last_failed_targets = []
        for failed_test in summary.failed + summary.broken + summary.broken_suites:
            if isinstance(failed_test, (BrokenTestCaseResult, FailedTestCaseResult)):
                last_failed_targets.append(
                    (str(failed_test.file_path), failed_test.test_case_name)
                )
            if isinstance(failed_test, BrokenTestSuiteResult):
                for test_name in failed_test.test_case_names:
                    last_failed_targets.append((str(failed_test.file_path), test_name))
        self.cache_io.write(
            "last_failed_tests",
            {"targets": last_failed_targets},
        )

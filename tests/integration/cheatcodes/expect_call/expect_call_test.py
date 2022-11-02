from pathlib import Path

import pytest

from tests.integration.conftest import (
    RunCairoTestRunnerFixture,
    assert_cairo_test_cases,
)


async def test_expect_call(run_cairo_test_runner: RunCairoTestRunnerFixture):
    testing_summary = await run_cairo_test_runner(
        Path(__file__).parent / "expect_call_test.cairo",
    )

    assert_cairo_test_cases(
        testing_summary,
        expected_passed_test_cases_names=[
            "test_expect_call_success",
        ],
        expected_failed_test_cases_names=[
            "test_expect_call_wrong_address",
            "test_expect_call_wrong_calldata",
            "test_expect_call_partial_fail",
            "test_expect_call_expected_but_not_found",
            "test_expect_call_wrong_function_called",
            "test_expect_call_wrong_function_name",
        ],
    )

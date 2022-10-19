from protostar.testing.starkware.execution_resources_summary import (
    ExecutionResourcesSummary,
    CountStatistic,
)

from .estimate_fee import estimate_fee


def test_estimate_fee():
    assert estimate_fee(None) is None

    assert (
        estimate_fee(ExecutionResourcesSummary(n_steps=CountStatistic(value=10))) == 0.5
    )
    assert (
        estimate_fee(
            ExecutionResourcesSummary(
                n_steps=CountStatistic(value=10),
                builtin_name_to_count_map={
                    "range_check_builtin": CountStatistic(value=20),
                    "pedersen_builtin": CountStatistic(value=30),
                },
            )
        )
        == 12.0
    )
    assert (
        estimate_fee(
            ExecutionResourcesSummary(
                n_steps=CountStatistic(value=10),
                builtin_name_to_count_map={
                    "range_check_builtin": CountStatistic(value=30),
                    "pedersen_builtin": CountStatistic(value=20),
                },
            )
        )
        == 12.0
    )
    assert (
        estimate_fee(
            ExecutionResourcesSummary(
                n_steps=CountStatistic(value=1000),
                builtin_name_to_count_map={
                    "range_check_builtin": CountStatistic(value=30),
                    "pedersen_builtin": CountStatistic(value=20),
                },
            )
        )
        == 50.0
    )

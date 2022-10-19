from typing import Optional


def estimate_fee(execution_resources) -> Optional[float]:
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

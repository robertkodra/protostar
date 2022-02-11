import json
import sys
from io import TextIOWrapper
from pathlib import Path
from typing import Optional, List, IO

from src.commands.test.utils import collect_immediate_subdirectories
from src.utils.starknet_compilation import StarknetCompiler


def compile_contract(
    input_files: List[Path],
    libraries_root: Path,
    cairo_path: List[Path],
    output_file: IO[str] = sys.stdout,
    output_abi_file: Optional[TextIOWrapper] = None,
):
    contract = StarknetCompiler(
        include_paths=[
            *[str(contract_path.parent) for contract_path in input_files],
            str(libraries_root),
            *collect_immediate_subdirectories(libraries_root),
            *[str(pth) for pth in cairo_path],
        ]
    ).compile_contract(*input_files)

    json.dump(contract.Schema().dump(contract), output_file, indent=4, sort_keys=True)
    output_file.write("\n")
    if output_file != sys.stdout:
        output_file.close()

    if output_abi_file:
        json.dump(contract.abi, output_abi_file, indent=4, sort_keys=True)
        output_abi_file.write("\n")
        output_abi_file.close()
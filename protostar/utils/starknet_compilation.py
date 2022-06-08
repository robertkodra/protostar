from dataclasses import dataclass
from pathlib import Path
from typing import Callable, List

from starkware.cairo.lang.cairo_constants import DEFAULT_PRIME
from starkware.cairo.lang.compiler.cairo_compile import get_module_reader
from starkware.cairo.lang.compiler.constants import MAIN_SCOPE
from starkware.cairo.lang.compiler.identifier_manager import IdentifierManager
from starkware.cairo.lang.compiler.preprocessor.pass_manager import (
    PassManager,
    PassManagerContext,
)
from starkware.starknet.compiler.compile import assemble_starknet_contract
from starkware.starknet.compiler.starknet_pass_manager import starknet_pass_manager
from starkware.starknet.compiler.starknet_preprocessor import (
    StarknetPreprocessedProgram,
)
from starkware.starknet.services.api.contract_class import ContractClass

from protostar.protostar_exception import ProtostarException


@dataclass
class StarknetCompiler:
    class FileNotFoundException(ProtostarException):
        pass

    include_paths: List[str]
    disable_hint_validation: bool

    def get_starknet_pass_manager(self) -> PassManager:
        read_module = get_module_reader(cairo_path=self.include_paths).read
        return starknet_pass_manager(
            DEFAULT_PRIME,
            read_module,
            disable_hint_validation=self.disable_hint_validation,
        )

    def preprocess_contract(
        self, *cairo_file_paths: Path
    ) -> StarknetPreprocessedProgram:
        pass_manager = self.get_starknet_pass_manager()

        try:
            codes = [
                (cairo_file_path.read_text("utf-8"), str(cairo_file_path))
                for cairo_file_path in cairo_file_paths
            ]
            context = PassManagerContext(
                start_codes=[],
                codes=codes,
                main_scope=MAIN_SCOPE,
                identifiers=IdentifierManager(),
            )
            pass_manager.run(context)
            assert isinstance(context.preprocessed_program, StarknetPreprocessedProgram)
            return context.preprocessed_program
        except FileNotFoundError as err:
            raise StarknetCompiler.FileNotFoundException(
                message=(f"Couldn't find file '{err.filename}'")
            ) from err

    @staticmethod
    def compile_preprocessed_contract(
        preprocessed: StarknetPreprocessedProgram, add_debug_info: bool = False
    ) -> ContractClass:
        assembled = assemble_starknet_contract(
            preprocessed_program=preprocessed,
            main_scope=MAIN_SCOPE,
            add_debug_info=add_debug_info,
            file_contents_for_debug_info={},
            filter_identifiers=False,
            is_account_contract=False,
        )
        assert isinstance(assembled, ContractClass)
        return assembled

    def compile_contract(
        self, *sources: Path, add_debug_info: bool = False
    ) -> ContractClass:
        preprocessed = self.preprocess_contract(*sources)
        assembled = self.compile_preprocessed_contract(preprocessed, add_debug_info)
        return assembled

    @staticmethod
    def get_function_names(
        preprocessed: StarknetPreprocessedProgram, predicate: Callable[[str], bool]
    ) -> List[str]:
        return [
            el["name"]
            for el in preprocessed.abi
            if el["type"] == "function" and predicate(el["name"])
        ]
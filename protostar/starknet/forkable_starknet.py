import copy
from typing import List, Optional, cast

from starkware.python.utils import as_non_optional
from starkware.starknet.definitions.general_config import StarknetGeneralConfig
from starkware.starknet.services.api.contract_class import ContractClass
from starkware.starknet.testing.contract import StarknetContract
from starkware.starknet.testing.starknet import Starknet
from starkware.starknet.testing.state import CastableToAddressSalt
from starkware.starknet.testing.contract_utils import get_abi, get_contract_class
from starkware.starknet.testing.objects import StarknetCallInfo

from protostar.starknet.cheatable_state import CheatableStarknetState

from .wrapped_starknet_contract import WrappedStarknetContract


class ForkableStarknet(Starknet):
    """
    Modified version of Starknet from testing framework.
    It introduces additional cheats state, and can be cheaply forked.
    """

    def __init__(self, state: CheatableStarknetState):
        super().__init__(state)

    @property
    def cheatable_state(self) -> CheatableStarknetState:
        return cast(CheatableStarknetState, self.state)

    @classmethod
    async def empty(
        cls, general_config: Optional[StarknetGeneralConfig] = None
    ) -> "ForkableStarknet":
        return ForkableStarknet(
            state=await CheatableStarknetState.empty(general_config=general_config)
        )

    def copy_and_adapt_contract(self, deployed_contract: StarknetContract):
        return StarknetContract(
            state=self.cheatable_state,
            abi=copy.deepcopy(deployed_contract.abi),
            contract_address=deployed_contract.contract_address,
            deploy_call_info=copy.deepcopy(deployed_contract.deploy_call_info),
        )

    def fork(self):
        return ForkableStarknet(state=self.cheatable_state.copy())

    async def deploy(
        self,
        source: Optional[str] = None,
        contract_class: Optional[ContractClass] = None,
        contract_address_salt: Optional[CastableToAddressSalt] = None,
        cairo_path: Optional[List[str]] = None,
        constructor_calldata: Optional[List[int]] = None,
        disable_hint_validation: bool = False,
    ) -> WrappedStarknetContract:
        contract_class = get_contract_class(
            source=source,
            contract_class=contract_class,
            cairo_path=cairo_path,
            disable_hint_validation=disable_hint_validation,
        )
        address, execution_info = await self.state.deploy(
            contract_class=contract_class,
            contract_address_salt=contract_address_salt,
            constructor_calldata=[]
            if constructor_calldata is None
            else constructor_calldata,
        )

        deploy_call_info = StarknetCallInfo.from_internal(
            call_info=as_non_optional(execution_info.call_info),
            result=(),
            main_call_events=[],
        )

        starknet_contract = WrappedStarknetContract(
            state=self.state,
            abi=get_abi(contract_class=contract_class),
            contract_address=address,
            deploy_call_info=deploy_call_info,
            actual_resources=execution_info.actual_resources,
        )

        self.cheatable_state.cheatable_state.update_event_selector_to_name_map(
            # pylint: disable=protected-access
            starknet_contract.event_manager._selector_to_name
        )
        # pylint: disable=protected-access
        for event_name in starknet_contract.event_manager._selector_to_name.values():
            self.cheatable_state.cheatable_state.event_name_to_contract_abi_map[
                event_name
            ] = starknet_contract.abi

        return starknet_contract

from starkware.starknet.testing.contract import StarknetContract
from starkware.starknet.testing.objects import StarknetCallInfo
from starkware.starknet.testing.state import CastableToAddress, StarknetState
from starkware.starknet.public.abi import AbiType
from starkware.starknet.business_logic.execution.objects import ResourcesMapping


class WrappedStarknetContract(StarknetContract):
    def __init__(
        self,
        state: StarknetState,
        abi: AbiType,
        contract_address: CastableToAddress,
        deploy_call_info: StarknetCallInfo,
        actual_resources: ResourcesMapping,
    ):
        super().__init__(state, abi, contract_address, deploy_call_info)
        self.actual_resources = actual_resources

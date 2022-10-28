from dataclasses import dataclass
from pathlib import Path

import pkg_resources
from starknet_py.net import AccountClient, KeyPair
from starknet_py.net.models import StarknetChainId, compute_address
from starknet_py.net.signer.stark_curve_signer import StarkCurveSigner

from tests.conftest import DevnetAccount

from .faucet_contract import FaucetContract


@dataclass
class PreparedDevnetAccount(DevnetAccount):
    class_hash: int


class DevnetAccountPreparator:
    def __init__(
        self,
        predeployed_account_client: AccountClient,
        faucet_contract: FaucetContract,
    ) -> None:
        self._predeployed_account_client = predeployed_account_client
        self._faucet_contract = faucet_contract

    async def prepare(self, salt: int, private_key: int) -> PreparedDevnetAccount:
        class_hash = await self._declare()
        key_pair = KeyPair.from_private_key(123)
        address = self._compute_address(
            class_hash=class_hash, public_key=key_pair.public_key, salt=salt
        )
        await self._prefund(address)
        return PreparedDevnetAccount(
            class_hash=class_hash,
            address=str(address),
            private_key=str(key_pair.private_key),
            public_key=str(key_pair.public_key),
            signer=StarkCurveSigner(
                account_address=address,
                key_pair=key_pair,
                chain_id=StarknetChainId.TESTNET,
            ),
        )

    async def _declare(self) -> int:
        account_contract_path_str = pkg_resources.resource_filename(
            "starknet_devnet",
            "accounts_artifacts/OpenZeppelin/0.5.0/Account.cairo/Account.json",
        )

        declare_tx = await self._predeployed_account_client.sign_declare_transaction(
            compiled_contract=Path(account_contract_path_str).read_text(
                encoding="utf-8"
            ),
            max_fee=int(1e16),
        )
        resp = await self._predeployed_account_client.declare(transaction=declare_tx)
        await self._predeployed_account_client.wait_for_tx(resp.transaction_hash)
        return resp.class_hash

    async def _prefund(self, account_address: int):
        await self._faucet_contract.transfer(
            recipient=account_address, amount=int(1e15)
        )

    def _compute_address(self, class_hash: int, public_key: int, salt: int) -> int:
        return compute_address(
            salt=salt,
            class_hash=class_hash,
            constructor_calldata=[public_key],
            deployer_address=0,
        )

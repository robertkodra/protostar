from typing import Any, Callable, Literal, Union

from starkware.starknet.utils.api_utils import cast_to_felts

from protostar.argument_parser import ArgTypeName, map_type_name_to_parser
from protostar.starknet_gateway import Fee

CustomProtostarArgTypeName = Literal[
    "felt",
    "fee",
    "address",
]

ProtostarArgTypeName = Union[CustomProtostarArgTypeName, ArgTypeName]


def map_protostar_type_name_to_parser(
    argument_type: ProtostarArgTypeName,
) -> Callable[[str], Any]:
    if argument_type == "felt":
        return parse_felt_arg_type
    if argument_type == "fee":
        return parse_fee_arg_type
    if argument_type == "address":
        return parse_address_arg_type

    return map_type_name_to_parser(argument_type)


def parse_felt_arg_type(arg: str) -> int:
    # pylint: disable=unbalanced-tuple-unpacking
    [output] = cast_to_felts([arg])
    return output


def parse_fee_arg_type(arg: str) -> Fee:
    if arg == "auto":
        return arg
    return int(arg)


def parse_address_arg_type(arg: str) -> int:
    if arg.startswith("0x"):
        return int(arg, 16)
    return int(arg)

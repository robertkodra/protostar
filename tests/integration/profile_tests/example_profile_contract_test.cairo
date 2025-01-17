%lang starknet

@contract_interface
namespace BasicContract {
    func increase_balance(amount: felt) {
    }

    func get_balance() -> (res: felt) {
    }
}

func helper{}() {
    [ap + 2000] = 111;
    [ap + 10000] = 222;
    ret;
}

@external
func test_deploy_contract_simplified{syscall_ptr: felt*, range_check_ptr}() {
    alloc_locals;
    local contract_address: felt;
    %{
        basic_contract = deploy_contract("./tests/integration/profile_tests/basic_contract.cairo")
        ids.contract_address = basic_contract.contract_address
    %}
    helper();

    BasicContract.increase_balance(contract_address, 5);
    let (res) = BasicContract.get_balance(contract_address);
    assert res = 5;
    return ();
}

// @external
// func test_printing_resource_usage_in_integration_testing_approach{
//     syscall_ptr : felt*, range_check_ptr
// }():
//     alloc_locals

// local z: felt
//     %{
//         basic_contract = deploy_contract("tests/integration/profile_tests/basic_contract.cairo")
//         ids.z = basic_contract.contract_address
//     %}
//     # helper()
//     # helper2()
//     BasicContract.increase_balance(z, 5)
//     return ()
// end

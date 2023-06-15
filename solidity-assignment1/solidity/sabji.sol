// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.18;

contract Sabji{

    mapping (string => uint) public store;
    mapping(string => uint) public money;

    function addSabjiByName(string memory _name, uint _value) public{
        store[_name] = _value + (_value/3);
    }

    function buySabjiFromName(string memory _name) public payable {
        require(msg.value == store[_name]);
        money[_name] = msg.value - (msg.value/3);
        store[_name] = 0;
    }

    function getContractBalance() public view returns (uint){
        return address(this).balance;
    }
}
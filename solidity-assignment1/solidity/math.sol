// SPDX-License-Identifier:MIT

pragma solidity ^0.8.0;
contract math{
    uint result;
    event display(string operation,uint result);
    function operations(uint input1,uint input2) public {
        result = input1+input2;
        emit display("Addition",result);
        result = input1-input2;
        emit display("Subtraction",result);
        result = input1*input2;
        emit display("Multiplication",result);
        result = input1/input2;
        emit display("Division",result);

    }
}
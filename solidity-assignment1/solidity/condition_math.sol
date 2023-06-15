// SPDX-License-Identifier:MIT

pragma solidity ^0.8.0;

contract condition_math{
    
    function compare_strings(string memory str1,string memory str2) public pure returns(bool){
        if(keccak256(abi.encodePacked(str1)) == keccak256(abi.encodePacked(str2))){
            return true;
        }
        return false;
    }
    function calculate(uint input1,string memory operator,uint input2) public pure returns(uint){
        uint result;
        if(compare_strings(operator, "+")){
            result = input1+input2;
        }
        else if(compare_strings(operator, "-")){
            result = input1-input2;
        }
        else if(compare_strings(operator, "*")){
            result =  input1*input2;
        }
        else if(compare_strings(operator, "/")){
            result = input1/input2;
        }
        return result;
    }
}
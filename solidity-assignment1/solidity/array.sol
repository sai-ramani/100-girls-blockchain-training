// SPDX-License-Identifier:MIT

pragma solidity ^0.8.0;

contract array {
    address[] public myArray;

    function addAddress(address newAddress) public {
        myArray.push(newAddress);
    }

    function removeAddress(uint index) public {
        require(index < myArray.length, "index out of bounds");
        myArray[index] = myArray[myArray.length - 1];
        myArray.pop();
    }

    function retrieveAddress(uint index) public view returns(address){
        require(index < myArray.length, "index out of bounds");
        return myArray[index];
    }

}
// SPDX-License-Identifier:MIT

pragma solidity ^0.8.0;

contract dictionary {
    mapping(uint => string) public dict;
    function addToMapping(uint key,string memory value) public {
        dict[key] = value;
    }
    function retrieveFromMapping(uint key) public view returns(string memory){
        return dict[key];
    }
    function updateMapping(uint key,string memory value) public {
        dict[key] = value;
    }

}
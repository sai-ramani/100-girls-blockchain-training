// SPDX-License-Identifier:MIT

pragma solidity ^0.8.0;
contract practice{
function compare(uint _a,uint _b) public pure returns(string memory){
    if(_a > _b){
        return "yes";
    }
    else if(_a == _b){
        return "equal";
    }
    else{
        return "no";
    }
}
function compareStrings(string memory a,string memory b) public pure returns(string memory){
    if (keccak256(abi.encodePacked(a)) == keccak256(abi.encodePacked(b))){
            return "Yes";
        }
        else 
        {
            return "No";
        }
}

function loops() public pure returns(uint){
return 50;
}

mapping(uint => string) public db;
function addToMapping(uint key,string memory value) public {
    db[key] = value;
}

uint256[] public array;

}
// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.10;

import "hardhat/console.sol";

contract Domains {
  // mapping data type to store names
  mapping(string => address) public domains;

  // mapping to store values
  mapping(string => string) public records;

  constructor() {
    console.log("THIS IS MY DOMAINS CONTRACT.");
  }

  // A register function that adds names to our mapping
  function register(string calldata name) public {
    // Check that the name is unregistered
    require(domains[name] == address(0));

    domains[name] = msg.sender;
    console.log("%s has registered a domain!", msg.sender);
  }

  // This will give us the domain owners' address
  function getAddress(string calldata name) public view returns (address) {
    return domains[name];
  }

  function setRecord(string calldata name, string calldata record) public {
    // Check that the owner is the transaction sender
    require(domains[name] == msg.sender);
    records[name] = record;
  }

  function getRecord(string calldata name) public view returns(string memory) {
    return records[name];
  }
}
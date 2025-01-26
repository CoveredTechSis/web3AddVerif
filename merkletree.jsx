// import React from 'react'
const { MerkleTree } = require('merkletreejs');
const SHA256 = require('crypto-js/sha256');
const addresses = [
"0x3950915BDb47B9f179e987143548BFFB1259aDE3",
"0x60256F6304142eDd8e2793C3f0335EE6375a1c86",
"0x5049be17c5d44Dc5f45c8B4bf3Fe6D73232696b6",
"0x167142915AD0fAADD84d9741eC253B82aB8625cd",
"0xB5fce5b5452a71a6724db2839693A5e1623E7fc1",
"0x82E6b1F92D530576bF6Ff5bf9D8D1F1BBC5903b6",
"0xb6Bd4C102049b57bC577Dd9701eC5E1038B38DA3"
]
const hashAddresses = addresses.map(addr => SHA256(addr).toString());
const mekleTree = new MerkleTree(hashAddresses, SHA256);
const mekleRoot = mekleTree.getRoot().toString('hex');
console.log("Merkle Root:", mekleRoot);
const leaf = SHA256("0x60256F6304142eDd8e2793C3f0335EE6375a1c86").toString();
const proof = tree.getProof(leaf).map(x => x.data.toString('hex'));
console.log("Proof:", proof)
const isValid = tree.verify(proof, leaf, mekleRoot);
console.log("Verification for this address is:", isValid);


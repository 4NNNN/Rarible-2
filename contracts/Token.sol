// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.14;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract BLOCKRYTHMTOKEN is ERC20, Ownable {

    constructor(address accountHolder) ERC20("BLOCKRYTHM TOKEN", "BT") {
        _mint(accountHolder, 1000000 * 10 ** decimals());
    }
}

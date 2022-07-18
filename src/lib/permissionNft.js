import { ethers } from "ethers";
import { signer } from "./stores.js";
import { SHARE_NFT_ABI, SHARE_NFT_ADDRESS } from "./constants.js";

import { get } from 'svelte/store';


export async function mintFileToken(cid) {
    const contract = new ethers.Contract(SHARE_NFT_ADDRESS, SHARE_NFT_ABI, get(signer));
    const shareTx = contract.mint(cid);
    await shareTx.wait();
}

export async function sendAccessPermission(recipientAddress, fileId) {
    const contract = new ethers.Contract(SHARE_NFT_ADDRESS, SHARE_NFT_ABI, get(signer));
    const shareTx = contract.share(recipientAddress);
    await shareTx.wait();

    console.log('share token mined');
}
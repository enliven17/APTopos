import { AptosConfig, Network } from "@aptos-labs/ts-sdk";

export const aptosConfig = new AptosConfig({ network: Network.TESTNET });

export const MODULE_ADDRESS = "0xYourAddress"; // Replace with actual deployed module address on Aptos testnet 
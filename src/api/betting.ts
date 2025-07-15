import { Aptos } from "@aptos-labs/ts-sdk";
import { aptosConfig, MODULE_ADDRESS } from "@/config/aptosConfig";
import { Market, Bet, BetSide } from "@/types/market";

const aptos = new Aptos(aptosConfig);

// Helper: get full module name
const MODULE = `${MODULE_ADDRESS}::betting`;

const NODE_URL = aptosConfig.network === "testnet"
  ? "https://fullnode.testnet.aptoslabs.com/v1"
  : "https://fullnode.mainnet.aptoslabs.com/v1";

const MARKETS_RESOURCE = `${MODULE_ADDRESS}::betting::Markets`;

// Fetch markets directly from the resource using REST API
export async function getMarkets(): Promise<Market[]> {
  const url = `${NODE_URL}/accounts/${MODULE_ADDRESS}/resource/${MARKETS_RESOURCE}`;
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    // The markets are in data.data.markets
    return data.data.markets as Market[];
  } catch (err) {
    console.error("Failed to fetch markets from REST API:", err);
    throw new Error("Failed to load markets from chain.");
  }
}

// 2. Create a new market (transaction)
export async function createMarket(account: any) {
  const tx = await aptos.transaction.build.simple({
    sender: account.address,
    data: {
      function: `${MODULE}::create_market`,
      functionArguments: [],
      typeArguments: [],
    },
  });
  const senderAuthenticator = await account.signTransaction(tx);
  return aptos.transaction.submit.simple({ transaction: tx, senderAuthenticator });
}

// 3. Place a bet (transaction)
export async function placeBet(
  account: any,
  market_id: number,
  yes: boolean,
  amount: number
) {
  const tx = await aptos.transaction.build.simple({
    sender: account.address,
    data: {
      function: `${MODULE}::place_bet`,
      functionArguments: [market_id, yes, amount],
      typeArguments: [],
    },
  });
  const senderAuthenticator = await account.signTransaction(tx);
  return aptos.transaction.submit.simple({ transaction: tx, senderAuthenticator });
}

// 4. Close a market (transaction)
export async function closeMarket(account: any, market_id: number) {
  const tx = await aptos.transaction.build.simple({
    sender: account.address,
    data: {
      function: `${MODULE}::close_market`,
      functionArguments: [market_id],
      typeArguments: [],
    },
  });
  const senderAuthenticator = await account.signTransaction(tx);
  return aptos.transaction.submit.simple({ transaction: tx, senderAuthenticator });
}

// 5. Claim reward (transaction)
export async function claimReward(account: any, market_id: number) {
  const tx = await aptos.transaction.build.simple({
    sender: account.address,
    data: {
      function: `${MODULE}::claim_reward`,
      functionArguments: [market_id],
      typeArguments: [],
    },
  });
  const senderAuthenticator = await account.signTransaction(tx);
  return aptos.transaction.submit.simple({ transaction: tx, senderAuthenticator });
} 
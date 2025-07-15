import { Aptos } from "@aptos-labs/ts-sdk";
import { aptosConfig, MODULE_ADDRESS } from "@/config/aptosConfig";
import { Market, Bet, BetSide } from "@/types/market";

const aptos = new Aptos(aptosConfig);

// Helper: get full module name
const MODULE = `${MODULE_ADDRESS}::betting`;

// 1. Get all markets (view)
export async function getMarkets(): Promise<Market[]> {
  // This assumes a view function exists in Move: get_markets()
  const res = await aptos.view({
    payload: {
      function: `${MODULE}::get_markets`,
      typeArguments: [],
      functionArguments: [],
    },
  });
  return res as Market[];
}

// 2. Create a new market (transaction)
export async function createMarket(
  account: any, // Wallet adapter account
  title: string,
  description: string,
  closes_at: number,
  min_bet: number,
  max_bet: number
) {
  const tx = await aptos.transaction.build.simple({
    sender: account.address,
    data: {
      function: `${MODULE}::create_market`,
      functionArguments: [title, description, closes_at, min_bet, max_bet],
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
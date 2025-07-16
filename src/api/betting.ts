import { Market } from "@/types/market";

const MODULE_ADDRESS = process.env.NEXT_PUBLIC_MODULE_ADDRESS || "0xac2cddcdfa2bf42b20594ed20ec5f3a784445b82f09a0c996c92339ac262f8df";
const MODULE = `${MODULE_ADDRESS}::betting`;

export async function getMarkets(): Promise<Market[]> {
  try {
    const res = await fetch("/api/markets");
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    return data as Market[];
  } catch (err) {
    console.error("Failed to fetch markets from API route:", err);
    throw new Error("Failed to load markets from chain.");
  }
}

export async function createMarket(
  address: string,
  signAndSubmitTransaction: (payload: unknown) => Promise<unknown>,
  title: string,
  description: string,
  closesAt: number,
  minBet: number,
  maxBet: number
) {
  const transactionPayload = {
    type: "entry_function_payload",
    function: `${MODULE}::create_market`,
    type_arguments: [],
    arguments: [title, description, closesAt, minBet, maxBet],
  };
  return signAndSubmitTransaction(transactionPayload);
}

export async function placeBet(
  address: string,
  signAndSubmitTransaction: (payload: unknown) => Promise<unknown>,
  market_id: number,
  yes: boolean,
  amount: number
) {
  const transactionPayload = {
    type: "entry_function_payload",
    function: `${MODULE}::place_bet`,
    type_arguments: [],
    arguments: [market_id, yes, amount],
  };
  return signAndSubmitTransaction(transactionPayload);
}

export async function closeMarket(
  address: string,
  signAndSubmitTransaction: (payload: unknown) => Promise<unknown>,
  market_id: number,
  result: boolean
) {
  const transactionPayload = {
    type: "entry_function_payload",
    function: `${MODULE}::close_market`,
    type_arguments: [],
    arguments: [market_id, result],
  };
  return signAndSubmitTransaction(transactionPayload);
}

export async function claimReward(
  address: string,
  signAndSubmitTransaction: (payload: unknown) => Promise<unknown>,
  market_id: number
) {
  const transactionPayload = {
    type: "entry_function_payload",
    function: `${MODULE}::claim_reward`,
    type_arguments: [],
    arguments: [market_id],
  };
  return signAndSubmitTransaction(transactionPayload);
} 
import { Market } from "@/types/market";

const MODULE_ADDRESS = process.env.NEXT_PUBLIC_MODULE_ADDRESS || "0xea0dd23db979ddd6965505226d310bf52bf8d6087cc968d6760d54728d4ab5be";
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
  signAndSubmitTransaction: (payload: unknown) => Promise<unknown>
) {
  const payload = {
    function: `${MODULE}::create_market`,
    type_arguments: [],
    arguments: [],
  };
  return signAndSubmitTransaction(payload);
}

export async function placeBet(
  address: string,
  signAndSubmitTransaction: (payload: unknown) => Promise<unknown>,
  market_id: number,
  yes: boolean,
  amount: number
) {
  const payload = {
    function: `${MODULE}::place_bet`,
    type_arguments: [],
    arguments: [market_id, yes, amount],
  };
  return signAndSubmitTransaction(payload);
}

export async function closeMarket(
  address: string,
  signAndSubmitTransaction: (payload: unknown) => Promise<unknown>,
  market_id: number
) {
  const payload = {
    function: `${MODULE}::close_market`,
    type_arguments: [],
    arguments: [market_id],
  };
  return signAndSubmitTransaction(payload);
}

export async function claimReward(
  address: string,
  signAndSubmitTransaction: (payload: unknown) => Promise<unknown>,
  market_id: number
) {
  const payload = {
    function: `${MODULE}::claim_reward`,
    type_arguments: [],
    arguments: [market_id],
  };
  return signAndSubmitTransaction(payload);
} 
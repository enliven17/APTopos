import { NextResponse } from "next/server";

const NODE_URL = "https://fullnode.testnet.aptoslabs.com/v1";
const MODULE_ADDRESS = "0xea0dd23db979ddd6965505226d310bf52bf8d6087cc968d6760d54728d4ab5be";
const MARKETS_RESOURCE = `${MODULE_ADDRESS}::betting::Markets`;

export async function GET() {
  const url = `${NODE_URL}/accounts/${MODULE_ADDRESS}/resource/${MARKETS_RESOURCE}`;
  try {
    const res = await fetch(url);
    if (!res.ok) return NextResponse.json({ error: "Failed to fetch markets" }, { status: 500 });
    const data = await res.json();
    return NextResponse.json(data.data.markets);
  } catch {
    return NextResponse.json({ error: "Failed to fetch markets" }, { status: 500 });
  }
} 
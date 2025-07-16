import { NextResponse } from "next/server";

const NODE_URL = "https://fullnode.testnet.aptoslabs.com/v1";
const MODULE_ADDRESS = process.env.NEXT_PUBLIC_MODULE_ADDRESS || "0xac2cddcdfa2bf42b20594ed20ec5f3a784445b82f09a0c996c92339ac262f8df";
const MARKETS_RESOURCE = `${MODULE_ADDRESS}::betting::Markets`;

// Statik hash eşlemesi kaldırıldı, zincirden gelen marketler için txHash alanı undefined olacak.
function mapMarket(m: any, i: number) {
  let result: 'yes' | 'no' | undefined = undefined;
  if (m.result && m.result.vec && m.result.vec.length > 0) {
    result = m.result.vec[0] === true ? 'yes' : 'no';
  }
  // Eski ve yeni marketlerin tx hash'i elle ekleniyor
  let txHash: string | undefined = undefined;
  if (String(m.id) === "0") {
    txHash = "0x5c5972242dd35d57700ef08308d34e573e9880ea648b6a1f4721f8fd29aa619f";
  }
  if (String(m.id) === "1") {
    txHash = "0xcb2235e1b0eec65659faf831e97a4a3b78e3688c3e804848bb2458afac678e7f";
  }
  return {
    id: m.id,
    title: m.title,
    description: m.description,
    creator: m.creator,
    created_at: undefined, // Zincirde yok, istenirse closes_at - X yapılabilir
    closes_at: m.closes_at,
    min_bet: m.min_bet,
    max_bet: m.max_bet,
    closed: m.closed,
    yes_bets: m.bets_yes,
    no_bets: m.bets_no,
    result,
    txHash,
    onChain: true
  };
}

export async function GET() {
  const url = `${NODE_URL}/accounts/${MODULE_ADDRESS}/resource/${MARKETS_RESOURCE}`;
  try {
    const res = await fetch(url);
    if (!res.ok) return NextResponse.json({ error: "Failed to fetch markets" }, { status: 500 });
    const data = await res.json();
    // Market objelerini enrich et
    const markets = (data.data.markets || []).map((m: any, i: number) => mapMarket(m, i));
    return NextResponse.json(markets);
  } catch {
    return NextResponse.json({ error: "Failed to fetch markets" }, { status: 500 });
  }
} 
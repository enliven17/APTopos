export type MarketStatus = "open" | "closed" | "resolved";

export type BetSide = "yes" | "no";

export interface Bet {
  user: string; // Aptos address
  amount: number; // APT cinsinden (u64)
}

export interface Market {
  id: number; // u64
  title: string;
  description: string;
  creator: string; // Aptos address
  created_at: number; // timestamp (u64)
  closes_at: number; // timestamp (u64)
  min_bet: number; // u64
  max_bet: number; // u64
  closed: boolean;
  yes_bets: Bet[];
  no_bets: Bet[];
  result?: BetSide; // Oracle sonucu
  txHash?: string; // Zincir işlemi hash'i
  onChain?: boolean; // Zincire yazıldı mı
} 
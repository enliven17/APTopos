"use client";
import { useAptosMove } from '@/hooks/useUmiMove';
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { MODULE_ADDRESS } from '@/config/aptosConfig';

export function MoveCreateMarketButton() {
  const { account } = useWallet();
  const { execute, loading, result, error } = useAptosMove();

  const handleClick = async () => {
    if (!account) return;
    const args = [
      'Trump 2025',
      'Will Trump be president?',
      100000000, // min_bet (0.001 APT)
      100000000, // max_bet (1 APT)
      Math.floor(Date.now() / 1000) + 86400, // closes_at (timestamp)
      100000000, // initial_pool (0.1 APT)
    ];
    console.log("Move ile market oluşturma args:", args);
    try {
      const result = await execute(`${MODULE_ADDRESS}::polymarket::create_market`, args);
      console.log("Move ile market oluşturma sonucu:", result);
    } catch (err) {
      console.error("Move ile market oluşturma hatası:", err);
    }
  };

  return (
    <div>
      <button onClick={handleClick} disabled={loading || !account}>
        Move ile Market Aç
      </button>
      {loading && <span>İşlem gönderiliyor...</span>}
      {typeof result === "object" && result !== null && <pre>{JSON.stringify(result, null, 2)}</pre>}
      {error && <span style={{ color: 'red' }}>{error}</span>}
    </div>
  );
} 
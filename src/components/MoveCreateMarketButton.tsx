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
      10000000000000000, // min_bet (0.01 APT)
      1000000000000000000, // max_bet (1 APT)
      Math.floor(Date.now() / 1000) + 86400, // closes_at (timestamp)
      100000000000000000, // initial_pool (0.1 APT)
    ];
    await execute(`${MODULE_ADDRESS}::polymarket::create_market`, args);
  };

  return (
    <div>
      <button onClick={handleClick} disabled={loading || !account}>
        Move ile Market Aç
      </button>
      {loading && <span>İşlem gönderiliyor...</span>}
      {result && <pre>{JSON.stringify(result, null, 2)}</pre>}
      {error && <span style={{ color: 'red' }}>{error}</span>}
    </div>
  );
} 
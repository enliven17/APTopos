"use client";
import { useAptosMove } from '@/hooks/useUmiMove';
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { MODULE_ADDRESS } from '@/config/aptosConfig';

export function MoveClaimRewardButton({ marketId }: { marketId: number }) {
  const { account } = useWallet();
  const { execute, loading, result, error } = useAptosMove();

  const handleClick = async () => {
    if (!account) return;
    const args = [marketId];
    await execute(`${MODULE_ADDRESS}::polymarket::claim_reward`, args);
  };

  return (
    <div>
      <button onClick={handleClick} disabled={loading || !account}>
        Move ile Ödül Çek
      </button>
      {loading && <span>İşlem gönderiliyor...</span>}
      {result && <pre>{JSON.stringify(result, null, 2)}</pre>}
      {error && <span style={{ color: 'red' }}>{error}</span>}
    </div>
  );
} 
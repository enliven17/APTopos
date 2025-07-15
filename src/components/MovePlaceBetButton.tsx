"use client";
import { useAptosMove } from '@/hooks/useUmiMove';

export function MovePlaceBetButton({ marketId, side, amount }: { marketId: number, side: 0 | 1, amount: number }) {
  const { execute, loading, result, error } = useAptosMove();

  const handleClick = async () => {
    const args = [marketId, side, amount];
    await execute('0xYourAddress::polymarket::place_bet', args);
  };

  return (
    <div>
      <button onClick={handleClick} disabled={loading}>
        Move ile Bahis Yap
      </button>
      {loading && <span>İşlem gönderiliyor...</span>}
      {typeof result === "object" && result !== null && <pre>{JSON.stringify(result, null, 2)}</pre>}
      {error && <span style={{ color: 'red' }}>{error}</span>}
    </div>
  );
} 
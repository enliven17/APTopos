"use client";
import { useAptosMove } from '@/hooks/useUmiMove';

export function MoveCloseMarketButton({ marketId, result }: { marketId: number, result: 0 | 1 }) {
  const { execute, loading, result: txResult, error } = useAptosMove();

  const handleClick = async () => {
    const args = [marketId, result];
    await execute('0xYourAddress::polymarket::close_market', args);
  };

  return (
    <div>
      <button onClick={handleClick} disabled={loading}>
        Move ile Marketi Kapat
      </button>
      {loading && <span>İşlem gönderiliyor...</span>}
      {typeof txResult === "object" && txResult !== null && <pre>{JSON.stringify(txResult, null, 2)}</pre>}
      {error && <span style={{ color: 'red' }}>{error}</span>}
    </div>
  );
} 
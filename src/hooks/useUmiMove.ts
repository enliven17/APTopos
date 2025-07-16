import { useState } from 'react';
import { useWallet } from "@aptos-labs/wallet-adapter-react";

export function useAptosMove() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<unknown>(null);
  const [error, setError] = useState<string | null>(null);
  const { signAndSubmitTransaction } = useWallet();

  const execute = async (functionName: string, args: unknown[], typeArguments: string[] = []) => {
    setLoading(true);
    setError(null);
    try {
      const payload = {
        data: {
        function: functionName,
        type_arguments: typeArguments,
        arguments: args
        }
      };
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const tx = await signAndSubmitTransaction(payload as any);
      setResult(tx);
      return tx;
    } catch (e: unknown) {
      if (e && typeof e === 'object' && 'message' in e && typeof (e as { message?: string }).message === 'string') {
        setError((e as { message: string }).message);
      } else {
        setError('Unknown error');
      }
      throw e;
    } finally {
      setLoading(false);
    }
  };

  return { execute, loading, result, error };
}
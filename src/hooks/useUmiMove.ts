import { useState } from 'react';
import { useWallet } from "@aptos-labs/wallet-adapter-react";

export function useAptosMove() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const { signAndSubmitTransaction } = useWallet();

  const execute = async (functionName: string, args: any[], typeArguments: string[] = []) => {
    setLoading(true);
    setError(null);
    try {
      const payload = {
        function: functionName,
        type_arguments: typeArguments,
        arguments: args
      };
      const tx = await signAndSubmitTransaction(payload);
      setResult(tx);
      return tx;
    } catch (e: any) {
      setError(e.message);
      throw e;
    } finally {
      setLoading(false);
    }
  };

  return { execute, loading, result, error };
}
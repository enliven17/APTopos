"use client";
import { ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "@/store";
import { ThemeProvider } from "styled-components";
import { theme } from "@/theme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AptosWalletAdapterProvider } from "@aptos-labs/wallet-adapter-react";
import { PetraWallet } from "petra-plugin-wallet-adapter";
import { Network } from "@aptos-labs/ts-sdk";
import { MartianWallet } from "@martianwallet/aptos-wallet-adapter";
import { PontemWallet } from "@pontem/wallet-adapter-plugin";

const queryClient = new QueryClient();

export function AppProviders({ children }: { children: ReactNode }) {
  if (typeof window !== "undefined" && typeof indexedDB === "undefined") {
    // Polyfill indexedDB with a dummy object to avoid ReferenceError
    window.indexedDB = {} as IDBFactory;
  }

  const wallets = [
    new PetraWallet(),
    new MartianWallet(),
    new PontemWallet(),
  ];

  return (
    <AptosWalletAdapterProvider plugins={wallets} autoConnect={true} dappConfig={{ network: Network.TESTNET }}>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </Provider>
      </QueryClientProvider>
    </AptosWalletAdapterProvider>
  );
} 
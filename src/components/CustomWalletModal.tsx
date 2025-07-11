import React from "react";
import styled from "styled-components";

const wallets = [
  {
    name: "Petra",
    icon: "/wallets/petra.svg",
    onClick: () => window.open("https://petra.app/", "_blank"),
  },
  {
    name: "Martian",
    icon: "/wallets/martian.svg",
    onClick: () => window.open("https://martianwallet.xyz/", "_blank"),
  },
  {
    name: "Pontem",
    icon: "/wallets/pontem.svg",
    onClick: () => window.open("https://pontem.network/", "_blank"),
  },
  // Diğer cüzdanlar eklenebilir
];

// Add prop types:
type CustomWalletModalProps = {
  open: boolean;
  onClose: () => void;
  onConnect: (walletName: string) => void;
};

export default function CustomWalletModal({ open, onClose, onConnect }: CustomWalletModalProps) {
  if (!open) return null;
  return (
    <Overlay>
      <Modal>
        <Header>
          <Title>Connect Your Wallet</Title>
          <CloseBtn onClick={onClose}>×</CloseBtn>
        </Header>
        <WalletList>
          {wallets.map((w) => (
            <WalletItem key={w.name} onClick={() => onConnect(w.name)}>
              <WalletIcon src={w.icon} alt={w.name} />
              <WalletName>{w.name}</WalletName>
            </WalletItem>
          ))}
        </WalletList>
        <Footer>
          <NoWallet>
            Don’t have a wallet?{' '}
            <a href="https://aptos.dev/wallets/" target="_blank" rel="noopener noreferrer">
              Explore Wallets
            </a>
          </NoWallet>
        </Footer>
      </Modal>
    </Overlay>
  );
}

// Styled Components
const Overlay = styled.div`
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.45);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Modal = styled.div`
  background: ${({ theme }) => theme.colors.background};
  border-radius: 18px;
  box-shadow: 0 8px 40px #0005;
  padding: 32px 28px 18px 28px;
  min-width: 340px;
  max-width: 95vw;
  max-height: 90vh;
  overflow-y: auto;
  animation: fadeIn 0.2s;
`;
const Header = styled.div`
  display: flex; justify-content: space-between; align-items: center; margin-bottom: 18px;
`;
const Title = styled.h2`
  font-size: 1.5rem; font-weight: 700; color: ${({ theme }) => theme.colors.primary};
`;
const CloseBtn = styled.button`
  font-size: 2rem; background: none; border: none; color: #888; cursor: pointer;
  &:hover { color: ${({ theme }) => theme.colors.accentRed}; }
`;
const WalletList = styled.div`
  display: flex; flex-direction: column; gap: 18px; margin-bottom: 18px;
`;
const WalletItem = styled.button`
  display: flex; align-items: center; gap: 18px; padding: 14px 18px;
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  border: 2px solid ${({ theme }) => theme.colors.primary}22;
  border-radius: 12px; cursor: pointer; transition: box-shadow 0.18s, border 0.18s;
  font-size: 1.1rem; font-weight: 600;
  &:hover {
    box-shadow: 0 4px 18px ${({ theme }) => theme.colors.primary}33;
    border: 2px solid ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.colors.primary}08;
  }
`;
const WalletIcon = styled.img`
  width: 38px; height: 38px; border-radius: 8px; background: #fff;
`;
const WalletName = styled.span`
  color: ${({ theme }) => theme.colors.text};
`;
const Footer = styled.div`
  text-align: center; margin-top: 8px; font-size: 0.98rem;
`;
const NoWallet = styled.div`
  color: ${({ theme }) => theme.colors.textSecondary};
  a { color: ${({ theme }) => theme.colors.primary}; text-decoration: underline; }
`; 
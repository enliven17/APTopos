"use client";
import Link from "next/link";
import styled from "styled-components";
import { usePathname } from "next/navigation";
import { FaSearch, FaBrain } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import CustomWalletModal from "@/components/CustomWalletModal";
import React from "react";

export function MainNav() {
  const pathname = usePathname();
  const { account, connect, wallets } = useWallet();
  const connectedAddress = account?.address?.toString();
  const [modalOpen, setModalOpen] = React.useState(false);
  const [defiQ, setDefiQ] = React.useState(0);

  // useSelector must be at the top level, not inside useEffect!
  const reduxScore = useSelector((state: RootState) =>
    connectedAddress ? state.markets.userDefiQ[connectedAddress] : undefined
  );

  React.useEffect(() => {
    if (!connectedAddress) {
      setDefiQ(0);
      return;
    }
    if (reduxScore !== undefined) {
      setDefiQ(reduxScore);
      return;
    }
    if (typeof window !== 'undefined') {
      const localScore = localStorage.getItem(`defiq_${connectedAddress}`);
      setDefiQ(localScore ? Number(localScore) : 0);
    } else {
      setDefiQ(0);
    }
  }, [connectedAddress, reduxScore]);

  const handleConnect = async (walletName: string) => {
    const wallet = wallets.find(w => w.name.toLowerCase().includes(walletName.toLowerCase()));
    try {
      if (wallet) {
        await connect(wallet.name);
      }
    } catch (e) {
      if (e && typeof e === 'object' && 'message' in e && typeof (e as { message?: string }).message === 'string') {
        alert((e as { message: string }).message);
      } else {
        alert('Unknown error');
      }
    }
    setModalOpen(false);
  };

  return (
    <NavBar>
      <FlexRow>
        <LogoBox>
          <span style={{ fontSize: 36, marginRight: 8 }}>🪼</span>
          <span style={{ fontWeight: 700, fontSize: 22, letterSpacing: 1 }}>APTopos</span>
        </LogoBox>
        <NavLinks>
          <NavLink href="/" $active={pathname === "/"}>Markets</NavLink>
          <NavLink href="/create" $active={pathname === "/create"}>Create Market</NavLink>
          <NavLink href="/user-bets" $active={pathname === "/user-bets"}>My Bets</NavLink>
        </NavLinks>
        <SearchBox>
          <FaSearch style={{ color: '#9CA3AF', fontSize: 16, marginRight: 8 }} />
          <SearchInput placeholder="Search markets..." />
        </SearchBox>
        <DefiQBox title="DEFIq: Prediction Intelligence Score">
          <FaBrain style={{marginRight: 6, color: '#3B82F6', fontSize: 18}} />
          <DefiQValue>{defiQ}</DefiQValue>
        </DefiQBox>
        <WalletBox>
          {connectedAddress ? (
            <button 
              onClick={() => setModalOpen(true)} 
              style={{
                padding: '8px 18px', 
                borderRadius: 10, 
                background: '#10B981', 
                color: '#fff', 
                fontWeight: 600, 
                border: 'none', 
                fontSize: 14, 
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <span style={{fontSize: 12}}>✓</span>
              {connectedAddress.slice(0, 6)}...{connectedAddress.slice(-4)}
            </button>
          ) : (
            <button 
              onClick={() => setModalOpen(true)} 
              style={{
                padding: '8px 18px', 
                borderRadius: 10, 
                background: '#3B82F6', 
                color: '#fff', 
                fontWeight: 600, 
                border: 'none', 
                fontSize: 16, 
                cursor: 'pointer'
              }}
            >
              Connect Wallet
            </button>
          )}
          <CustomWalletModal open={modalOpen} onClose={() => setModalOpen(false)} onConnect={handleConnect} />
        </WalletBox>
      </FlexRow>
    </NavBar>
  );
}

const NavBar = styled.nav`
  background: ${({ theme }) => theme.colors.background};
  backdrop-filter: blur(10px);
  padding: 0 32px;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  border-bottom: 2.5px solid ${({ theme }) => theme.colors.primary};
  font-size: 1.1rem;
  font-weight: 600;
  width: 100vw;
  box-sizing: border-box;
  z-index: 100;
  position: relative;
  box-shadow: 0 4px 24px 0 ${({ theme }) => `${theme.colors.primary}22`};
  @media (max-width: 1100px) {
    flex-wrap: wrap;
    height: auto;
    padding: 10px 6px;
    gap: 8px;
  }
`;

const FlexRow = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 16px;
  justify-content: space-between;
`;

const LogoBox = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  flex: 0 0 auto;
  font-size: 1.2em;
  padding: 8px 18px 8px 0;
  border-radius: 16px;
  background: none;
  @media (max-width: 1100px) {
    justify-content: center;
    width: 100%;
    margin-bottom: 2px;
    padding: 6px 0;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;
  justify-content: center;
  flex: 1 1 auto;
  @media (max-width: 1100px) {
    width: 100%;
    justify-content: center;
    flex-wrap: wrap;
    gap: 18px;
    margin-bottom: 8px;
  }
`;

const SearchBox = styled.div`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  border-radius: 18px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  padding: 6px 16px 6px 12px;
  min-width: 220px;
  max-width: 320px;
  margin: 0 24px;
  flex: 0 0 320px;
  @media (max-width: 1100px) {
    margin: 8px 0;
    width: 100%;
    min-width: 0;
    max-width: 100%;
    flex: 1 1 100%;
  }
`;

const SearchInput = styled.input`
  border: none;
  outline: none;
  background: transparent;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.08rem;
  padding: 4px 0;
  width: 100%;
  &::placeholder {
    color: ${({ theme }) => theme.colors.textSecondary};
    opacity: 0.7;
  }
`;

const WalletBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 0 0 auto;
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  border-radius: 14px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.13);
  border: 1.5px solid ${({ theme }) => theme.colors.primary}33;
  padding: 6px 12px;
  max-width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  @media (max-width: 1100px) {
    width: 100%;
    justify-content: center;
    margin-bottom: 4px;
    padding: 8px 8px;
  }
`;

const NavLink = styled(Link)<{ $active?: boolean }>`
  color: ${({ theme, $active }) => $active ? theme.colors.primary : theme.colors.textSecondary};
  font-weight: ${({ $active }) => $active ? "bold" : "normal"};
  text-decoration: none;
  font-size: 20px;
  padding: 8px 18px 4px 18px;
  border-radius: 12px;
  position: relative;
  background: ${({ $active, theme }) => $active ? `linear-gradient(90deg, ${theme.colors.primary}22 0%, ${theme.colors.accentOrange}22 100%)` : 'none'};
  box-shadow: ${({ $active }) => $active ? '0 4px 18px 0 rgba(59,130,246,0.10)' : 'none'};
  transition: color 0.22s, background 0.22s, box-shadow 0.22s, font-weight 0.22s, padding 0.22s;
  &::after {
    content: '';
    display: ${({ $active }) => $active ? 'block' : 'none'};
    position: absolute;
    left: 18px;
    right: 18px;
    bottom: 2px;
    height: 3px;
    border-radius: 2px;
    background: linear-gradient(90deg, #3B82F6 0%, #F59E0B 100%);
    box-shadow: 0 2px 8px #3B82F644;
    opacity: 0.85;
  }
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    background: ${({ $active, theme }) => $active ? `linear-gradient(90deg, ${theme.colors.primary}33 0%, ${theme.colors.accentOrange}33 100%)` : `${theme.colors.primary}10`};
    box-shadow: ${({ $active }) => $active ? '0 8px 32px 0 rgba(59,130,246,0.13)' : '0 2px 8px rgba(59,130,246,0.10)'};
    padding: 8px 22px 4px 22px;
  }
  @media (max-width: 1100px) {
    font-size: 17px;
    padding: 6px 10px 2px 10px;
  }
`;

const DefiQBox = styled.div`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(59,130,246,0.10);
  padding: 6px 14px;
  margin: 0 10px 0 0;
  font-size: 1.08rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
  min-width: 60px;
  height: 38px;
  border: 1px solid ${({ theme }) => theme.colors.primary}33;
  transition: all 0.2s ease;
  
  &:hover {
    box-shadow: 0 4px 16px rgba(59,130,246,0.20);
    transform: translateY(-1px);
  }
  
  @media (max-width: 800px) {
    padding: 4px 8px;
    font-size: 0.98rem;
    height: 32px;
  }
`;

const DefiQValue = styled.span`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.08em;
  text-shadow: 0 1px 2px rgba(59,130,246,0.3);
  min-width: 30px;
  text-align: center;
`;
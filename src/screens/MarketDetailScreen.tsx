"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { useQuery } from "@tanstack/react-query";
import { getMarkets } from "@/api/betting";
import { placeBet, closeMarket } from "@/api/betting";
import styled from "styled-components";
import { FaCoins, FaCalendarAlt, FaCheckCircle, FaTimesCircle, FaClock, FaTrophy, FaUser, FaUserCircle } from 'react-icons/fa';

const PieChartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 28px;
  min-width: 140px;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
  }
  
  svg {
    transition: all 0.3s ease;
  }
  
  circle, path {
    transition: all 0.4s ease;
  }
`;

const PieLegend = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-top: 8px;
  transition: all 0.3s ease;
`;

const PieDot = styled.span<{ color: string }>`
  display: inline-block;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: ${({ color }) => color};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.2);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  }
`;

// Helper: Escape HTML to prevent XSS in comments
function escapeHtml(str: string) {
  return str.replace(/[&<>'"]/g, function (tag) {
    const chars: { [key: string]: string } = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    };
    return chars[tag] || tag;
  });
}

export default function MarketDetailScreen() {
  const { id } = useParams<{ id: string }>();
  const { data: markets = [], isLoading, isError } = useQuery({
    queryKey: ["markets"],
    queryFn: getMarkets,
    refetchInterval: 10000,
  });
  const market = markets.find((m: { id: string | number }) => String(m.id) === String(id));
  const [amount, setAmount] = useState("");
  const [side, setSide] = useState<"yes" | "no">("yes");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const { account, connected, signAndSubmitTransaction } = useWallet();
  const [loading, setLoading] = useState(false);
  const [closeLoading, setCloseLoading] = useState(false);
  const [comments, setComments] = useState([
    { id: 1, user: "Alice", text: "I think this market is very interesting!", date: "2024-07-06 20:00" },
    { id: 2, user: "Bob", text: "My bet is on YES 🚀", date: "2024-07-06 20:10" },
    { id: 3, user: "Charlie", text: "I'm not so sure, but good luck everyone!", date: "2024-07-06 20:15" },
  ]);
  const [commentInput, setCommentInput] = useState("");

  useEffect(() => {
    // Sadece component mount olduğunda çalışacak bir örnek
    // Eğer now değişkeni kullanılmıyorsa kaldırıldı
  }, []);

  if (typeof window === "undefined") return null;
  if (isLoading) return <PageContainer>Loading...</PageContainer>;
  if (isError || !market) return <PageContainer>Market not found or failed to load.</PageContainer>;

  // On-chain indicator and tx hash
  const explorerBase = "https://explorer.aptoslabs.com/txn/";
  const onChainBadge = market.onChain ? (
    <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      background: '#10B981',
      color: '#fff',
      borderRadius: 8,
      padding: '2px 10px',
      fontWeight: 600,
      fontSize: 13,
      marginRight: 10
    }}>
      ✓ Zincirde
      {market.txHash && (
        <a href={`${explorerBase}${market.txHash}`} target="_blank" rel="noopener noreferrer" style={{ color: '#fff', marginLeft: 8, textDecoration: 'underline' }}>
          (Tx)
        </a>
      )}
    </span>
  ) : null;

  // On-chain fields
  const totalYes = (market.yes_bets || []).reduce((sum: number, b: { amount: number }) => sum + b.amount, 0) / 1e8;
  const totalNo = (market.no_bets || []).reduce((sum: number, b: { amount: number }) => sum + b.amount, 0) / 1e8;
  const totalPool = totalYes + totalNo;
  const totalBets = (market.yes_bets?.length || 0) + (market.no_bets?.length || 0);
  const closesAt = (market.closes_at || 0) * 1000;
  const closed = market.closed;

  const MIN_BET = 0.001;
  const MAX_BET = 5;

  const handleBet = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);
    const betAmount = Number(amount);
    if (isNaN(betAmount) || betAmount < MIN_BET || betAmount > MAX_BET) {
      setError(`Bet amount must be between ${MIN_BET} - ${MAX_BET} APT.`);
      setLoading(false);
      return;
    }
    if (!connected || !account?.address) {
      setError("Wallet is not connected.");
      setLoading(false);
      return;
    }
    try {
      // On-chain: amount as integer (1e8)
      const onChainAmount = Math.round(betAmount * 1e8);
      const yes = side === "yes";
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      await placeBet(account.address.toString(), signAndSubmitTransaction as any, market.id, yes, onChainAmount);
    setSuccess("Bet placed successfully!");
    setAmount("");
    } catch (err: unknown) {
      if (err && typeof err === 'object' && 'message' in err && typeof (err as { message?: string }).message === 'string') {
        setError((err as { message: string }).message);
      } else {
        setError("Failed to place bet.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleCloseMarket = async () => {
    setError("");
    setSuccess("");
    setCloseLoading(true);
    try {
      if (!connected || !account?.address) {
        setError("Wallet is not connected.");
        setCloseLoading(false);
        return;
      }
      // On-chain: close market
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      await closeMarket(account.address.toString(), signAndSubmitTransaction as any, market.id);
      setSuccess("Market closed successfully!");
    } catch (err: unknown) {
      if (err && typeof err === 'object' && 'message' in err && typeof (err as { message?: string }).message === 'string') {
        setError((err as { message: string }).message);
      } else {
        setError("Failed to close market.");
      }
    } finally {
      setCloseLoading(false);
    }
  };

  const getStatusBadge = () => {
    if (closed) {
      return (
        <StatusBadge $color={market.result === "yes" ? "green" : "red"}>
          {market.result === "yes" ? <FaCheckCircle /> : <FaTimesCircle />} {market.result === "yes" ? "Yes Won" : "No Won"}
        </StatusBadge>
      );
    }
    if (!closed) {
      return (
        <StatusBadge $color="blue">
          <FaClock /> Open
        </StatusBadge>
      );
    }
    return (
      <StatusBadge $color="gray">
        <FaClock /> Closed
      </StatusBadge>
    );
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const sanitized = escapeHtml(commentInput.trim());
    if (!sanitized) return;
    setComments([
      ...comments,
      {
        id: Date.now(),
        user: "DemoUser",
        text: sanitized,
        date: new Date().toLocaleString(),
      },
    ]);
    setCommentInput("");
  };

  // Simple donut chart for Yes/No ratio
  function PieChart({ yes, no }: { yes: number; no: number }) {
    const total = yes + no;
    const yesPct = total > 0 ? (yes / total) * 100 : 50;
    const noPct = 100 - yesPct;
    const yesAngle = (yesPct / 100) * 360;
    // Yes arc: start at -90, end at -90+yesAngle
    const yesArc = yesPct > 0 ? describeArc(70, 70, 50, -90, -90 + yesAngle) : '';
    // No arc: start at -90+yesAngle, end at 270
    const noArc = noPct > 0 ? describeArc(70, 70, 50, -90 + yesAngle, 270) : '';
    return (
      <PieChartWrapper>
        <svg width="140" height="140" viewBox="0 0 140 140">
          {/* No arc (background) */}
          {noArc && (
            <path 
              d={noArc} 
              fill="none" 
              stroke="#EF4444" 
              strokeWidth="18" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          )}
          {/* Yes arc (foreground) */}
          {yesArc && (
            <path 
              d={yesArc} 
              fill="none" 
              stroke="#10B981" 
              strokeWidth="18" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          )}
          {/* Center text */}
          <text 
            x="70" 
            y="80" 
            textAnchor="middle" 
            fontSize="24" 
            fontWeight="700" 
            fill="#fff" 
          >
            {total === 0 ? '—' : `${Math.round(yesPct)}%`}
          </text>
        </svg>
        <PieLegend>
          <PieDot color="#10B981" /> Yes
          <PieDot color="#EF4444" style={{ marginLeft: 14 }} /> No
        </PieLegend>
      </PieChartWrapper>
    );
  }

  // Helper: SVG arc path
  function describeArc(cx: number, cy: number, r: number, startAngle: number, endAngle: number) {
    const start = polarToCartesian(cx, cy, r, endAngle);
    const end = polarToCartesian(cx, cy, r, startAngle);
    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
    return [
      "M", start.x, start.y,
      "A", r, r, 0, largeArcFlag, 0, end.x, end.y
    ].join(" ");
  }
  function polarToCartesian(cx: number, cy: number, r: number, angle: number) {
    const rad = (angle - 90) * Math.PI / 180.0;
    return {
      x: cx + r * Math.cos(rad),
      y: cy + r * Math.sin(rad)
    };
  }

  return (
    <PageContainer>
      <UnifiedCard>
        <GradientHeader>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: 12 }}>
            {onChainBadge}
            <h1 style={{ margin: 0 }}>{market.title}</h1>
          </div>
          <MarketDesc>{market.description}</MarketDesc>
          <StatusBadgeLarge $color={closed ? (market.result === "yes" ? "green" : "red") : "blue"}>
            {getStatusBadge()}
          </StatusBadgeLarge>
        </GradientHeader>
        <UnifiedGrid>
          <UnifiedLeft>
            <InfoCards>
              <InfoCard>
                <FaCoins />
                <InfoCardContent>
                  <InfoCardValue>{totalPool.toFixed(2)} APT</InfoCardValue>
                  <InfoCardLabel>Total Pool</InfoCardLabel>
                </InfoCardContent>
              </InfoCard>
              <InfoCard>
                <FaUser />
                <InfoCardContent>
                  <InfoCardValue>{totalBets}</InfoCardValue>
                  <InfoCardLabel>Bets</InfoCardLabel>
                </InfoCardContent>
              </InfoCard>
              <InfoCard>
                <FaCalendarAlt />
                <InfoCardContent>
                  <InfoCardValue>{new Date(closesAt).toLocaleString()}</InfoCardValue>
                  <InfoCardLabel>Closing</InfoCardLabel>
                </InfoCardContent>
              </InfoCard>
            </InfoCards>
            <BetStatsRow>
              <PieChart yes={totalYes} no={totalNo} />
                      <BetStat $color="green">Yes: {totalYes.toFixed(4)} APT</BetStat>
        <BetStat $color="red">No: {totalNo.toFixed(4)} APT</BetStat>
            </BetStatsRow>
          </UnifiedLeft>
          <UnifiedRight>
            <ShadowBox>
              {!closed ? (
                <BetForm onSubmit={handleBet}>
                  <FormRow>
                    <FormCol>
                      <FormLabel>Bet Amount (APT)</FormLabel>
                      <FormInput
                        type="number"
                        step="0.001"
                        min={MIN_BET}
                        max={MAX_BET}
                        value={amount}
                        onChange={e => {
                          const val = Number(e.target.value);
                          setAmount(e.target.value);
                                if (val < MIN_BET) setError(`Minimum bet is ${MIN_BET} APT`);
      else if (val > MAX_BET) setError(`Maximum bet is ${MAX_BET} APT`);
                          else setError("");
                        }}
                        required
                      />
                    </FormCol>
                    <FormCol>
                      <FormLabel>Side</FormLabel>
                      <SideButtonRow>
                        <SideButton type="button" $active={side === "yes"} $side="yes" onClick={() => setSide("yes")}>Yes</SideButton>
                        <SideButton type="button" $active={side === "no"} $side="no" onClick={() => setSide("no")}>No</SideButton>
                      </SideButtonRow>
                    </FormCol>
                  </FormRow>
                  <input
                    type="range"
                    min={MIN_BET}
                    max={MAX_BET}
                    step={0.001}
                    value={Number(amount)}
                    onChange={e => {
                      setAmount(e.target.value);
                      setError("");
                    }}
                    style={{ width: '100%', margin: '8px 0' }}
                  />
                  {error && <ErrorBox><FaTimesCircle /> {error}</ErrorBox>}
                  {success && <SuccessBox><FaCheckCircle /> {success}</SuccessBox>}
                  <SubmitButton type="submit" disabled={!!error || loading}>{loading ? "Placing..." : "Place Bet"}</SubmitButton>
                </BetForm>
              ) : (
                <ClosedText>Market closed.</ClosedText>
              )}

              {closed && (
                <>
                  <ResolvedBox>
                    <FaTrophy /> Result: <b>{market.result === "yes" ? "Yes" : "No"}</b>
                  </ResolvedBox>
                  {/* Claiming reward logic removed as per edit hint */}
                  {/* {myReward && !myReward.claimed && (
                    <ClaimBox>
                      <FaCoins /> Your reward: <b>{myReward.amount.toFixed(4)} APT</b>
                      <ClaimButton onClick={handleClaim} disabled={claimLoading}>{claimLoading ? "Claiming..." : "Claim Reward"}</ClaimButton>
                    </ClaimBox>
                  )} */}
                  {/* {myReward && myReward.claimed && (
                    <ClaimedText><FaCheckCircle /> Your reward has been claimed!</ClaimedText>
                  )} */}
                </>
              )}

              {/* Dummy oracle: marketi kapat butonları (sadece demoUser için) */}
              {!closed && (
                <OracleBox>
                  <OracleLabel>Set Market Result (Demo Oracle)</OracleLabel>
                  <OracleButton onClick={handleCloseMarket} disabled={closeLoading}>{closeLoading ? "Closing..." : "Close Market"}</OracleButton>
                </OracleBox>
              )}
            </ShadowBox>
            <ShadowBox style={{ marginTop: 32 }}>
              <BetsList>
                <BetsTitle>Bets</BetsTitle>
                {(market.yes_bets?.length || 0) + (market.no_bets?.length || 0) === 0 && <NoBets>No bets yet.</NoBets>}
                <BetsTable>
                  {(market.yes_bets || []).map((bet, idx) => (
                    <BetRow key={idx}>
                      <BetSideBadge $side="yes">YES</BetSideBadge>
                      <BetUser>{bet.user.slice(0, 8)}...{bet.user.slice(-4)}</BetUser>
                      <BetAmount>+{(bet.amount / 1e8).toFixed(3)} APT</BetAmount>
                    </BetRow>
                  ))}
                  {(market.no_bets || []).map((bet, idx) => (
                    <BetRow key={idx}>
                      <BetSideBadge $side="no">NO</BetSideBadge>
                      <BetUser>{bet.user.slice(0, 8)}...{bet.user.slice(-4)}</BetUser>
                      <BetAmount>-{(bet.amount / 1e8).toFixed(3)} APT</BetAmount>
                    </BetRow>
                  ))}
                </BetsTable>
              </BetsList>
            </ShadowBox>
          </UnifiedRight>
        </UnifiedGrid>
        <CommentsSection>
          <CommentsTitle>Comments</CommentsTitle>
          <CommentsList>
            {comments.map(c => (
              <CommentItem key={c.id} className="fade-in">
                <CommentUser><FaUserCircle style={{ marginRight: 6, fontSize: 18 }} />{escapeHtml(c.user)}</CommentUser>
                <CommentText>{escapeHtml(c.text)}</CommentText>
                <CommentDate>{escapeHtml(c.date)}</CommentDate>
              </CommentItem>
            ))}
          </CommentsList>
          <CommentForm onSubmit={handleCommentSubmit}>
            <CommentInput
              value={commentInput}
              onChange={e => setCommentInput(e.target.value.slice(0, 200))}
              placeholder="Write a comment..."
              maxLength={200}
            />
            <CommentButton type="submit" disabled={!commentInput.trim()}>Send</CommentButton>
          </CommentForm>
        </CommentsSection>
      </UnifiedCard>
    </PageContainer>
  );
}

const PageContainer = styled.div`
  max-width: 1100px;
  margin: 40px auto 0 auto;
  padding: 0 12px 40px 12px;
`;

const UnifiedCard = styled.div`
  background: ${({ theme }) => theme.colors.card};
  border-radius: 18px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  padding: 0 0 40px 0;
  margin-bottom: 32px;
  border: 2px solid ${({ theme }) => theme.colors.border};
`;

const GradientHeader = styled.div`
  background: ${({ theme }) => theme.colors.card};
  border-radius: 18px 18px 0 0;
  padding: 40px 48px 22px 48px;
  text-align: left;
`;

const MarketTitle = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.35rem;
  font-weight: 700;
  margin: 0 0 10px 0;
`;

const MarketDesc = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 1.05rem;
  margin: 0 0 8px 0;
`;

const StatusBadgeLarge = styled.div<{ $color: string }>`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 18px;
  border-radius: 16px;
  font-size: 1rem;
  font-weight: 600;
  background: ${({ $color, theme }) =>
    $color === "green" ? `${theme.colors.accentGreen}10` :
    $color === "red" ? `${theme.colors.accentRed}10` :
    $color === "blue" ? `${theme.colors.primary}10` :
    `${theme.colors.textSecondary}10`};
  color: ${({ $color, theme }) =>
    $color === "green" ? theme.colors.accentGreen :
    $color === "red" ? theme.colors.accentRed :
    $color === "blue" ? theme.colors.primary :
    theme.colors.textSecondary};
  margin-top: 10px;
  box-shadow: none;
`;

const UnifiedGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  @media (min-width: 900px) {
    flex-direction: row;
    gap: 48px;
  }
  padding: 0 48px;
`;

const UnifiedLeft = styled.div`
  flex: 1.1;
  min-width: 0;
  margin-top: 18px;
`;

const UnifiedRight = styled.div`
  flex: 1;
  min-width: 0;
  margin-top: 18px;
`;

const InfoCards = styled.div`
  display: flex;
  gap: 14px;
  margin-bottom: 18px;
  flex-wrap: wrap;
`;

const InfoCard = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  background: ${({ theme }) => theme.colors.background};
  border-radius: 10px;
  box-shadow: none;
  border: 2px solid ${({ theme }) => theme.colors.border};
  padding: 12px 16px;
  min-width: 120px;
  flex: 1;
`;

const InfoCardContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const InfoCardValue = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.05rem;
  font-weight: 700;
`;

const InfoCardLabel = styled.div`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.95rem;
  font-weight: 500;
`;

const ShadowBox = styled.div`
  background: ${({ theme }) => theme.colors.background};
  border-radius: 12px;
  box-shadow: none;
  border: 2px solid ${({ theme }) => theme.colors.border};
  padding: 18px 14px 14px 14px;
  margin-bottom: 8px;
`;

const SideButtonRow = styled.div`
  display: flex;
  gap: 8px;
`;

const SideButton = styled.button<{ $active: boolean; $side: string }>`
  flex: 1;
  background: ${({ $active, $side, theme }) =>
    $active
      ? $side === "yes"
        ? theme.colors.accentGreen
        : theme.colors.accentRed
      : theme.colors.background};
  color: ${({ $active, theme }) => $active ? "#fff" : theme.colors.textSecondary};
  border: 1.5px solid ${({ theme, $active, $side }) =>
    $active
      ? $side === "yes"
        ? theme.colors.accentGreen
        : theme.colors.accentRed
      : theme.colors.border};
  border-radius: 8px;
  padding: 8px 0;
  font-weight: 700;
  font-size: 15px;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
  box-shadow: none;
  &:hover {
    background: ${({ $side, theme }) =>
      $side === "yes"
        ? theme.colors.accentGreen
        : theme.colors.accentRed};
    color: #fff;
  }
`;

const BetStatsRow = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 10px;
`;

const BetStat = styled.div<{ $color: string }>`
  color: ${({ $color, theme }) => $color === "green" ? theme.colors.accentGreen : theme.colors.accentRed};
  font-size: 1rem;
  font-weight: 700;
`;

const BetForm = styled.form`
  background: none;
  border-radius: 10px;
  padding: 0;
  margin-bottom: 12px;
  box-shadow: none;
`;

const FormRow = styled.div`
  display: flex;
  gap: 10px;
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 6px;
  }
`;

const FormCol = styled.div`
  flex: 1;
`;

const FormLabel = styled.label`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 4px;
  display: block;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 8px 10px;
  border-radius: 8px;
  border: 1.5px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  font-size: 15px;
  margin-bottom: 2px;
  transition: border 0.2s;
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: none;
  }
`;

const ClosedText = styled.div`
  color: ${({ theme }) => theme.colors.accentRed};
  font-weight: bold;
  margin: 12px 0;
`;

const ResolvedBox = styled.div`
  background: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.primary};
  padding: 14px 18px;
  border-radius: 12px;
  margin-bottom: 12px;
  font-size: 18px;
  display: flex;
  align-items: center;
  gap: 10px;
`;



const OracleBox = styled.div`
  margin: 24px 0 8px 0;
  display: flex;
  align-items: center;
  gap: 12px;
`;

const OracleLabel = styled.span`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 14px;
`;

const OracleButton = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 8px 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: ${({ theme }) => theme.colors.accentGreen};
  }
`;

const BetsList = styled.div`
  margin-top: 18px;
`;

const BetsTitle = styled.h3`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 6px;
  font-size: 1.1rem;
`;

const NoBets = styled.div`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 14px;
`;

const BetsTable = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
`;

const BetRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  font-size: 15px;
  &:hover {
    background: ${({ theme }) => theme.colors.background};
  }
`;

const BetSideBadge = styled.span<{ $side: string }>`
  background: ${({ $side, theme }) => $side === "yes" ? `${theme.colors.accentGreen}10` : `${theme.colors.accentRed}10`};
  color: ${({ $side, theme }) => $side === "yes" ? theme.colors.accentGreen : theme.colors.accentRed};
  font-weight: 700;
  padding: 3px 10px;
  border-radius: 12px;
  font-size: 13px;
  text-transform: uppercase;
`;

const BetUser = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
  font-size: 1rem;
`;

const BetAmount = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
  min-width: 60px;
`;



const CommentsSection = styled.div`
  margin-top: 48px;
  padding-top: 32px;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const CommentsTitle = styled.h3`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 18px;
`;

const CommentsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-bottom: 18px;
`;

const CommentItem = styled.div`
  background: ${({ theme }) => theme.colors.background};
  border-radius: 12px;
  padding: 18px 32px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
  display: flex;
  flex-direction: column;
  animation: fadeIn 0.5s;
  @media (max-width: 600px) {
    padding: 14px 10px;
  }
`;

const CommentUser = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
  font-size: 1rem;
`;

const CommentText = styled.span`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.08rem;
  margin: 4px 0 2px 0;
`;

const CommentDate = styled.span`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.92rem;
  margin-top: 2px;
`;

const CommentForm = styled.form`
  display: flex;
  gap: 12px;
  margin-top: 8px;
`;

const CommentInput = styled.input`
  flex: 1;
  padding: 12px 16px;
  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px ${({ theme }) => `${theme.colors.primary}20`};
  }
`;

const CommentButton = styled.button`
  background: ${({ theme, disabled }) => disabled ? theme.colors.textSecondary : theme.colors.primary};
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 0 24px;
  font-size: 1rem;
  font-weight: 600;
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
  transition: background 0.2s;
  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.colors.accentGreen};
  }
`;

// Yorum fade-in animasyonu
const fadeInKeyframes = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: none; }
  }
`;
if (typeof window !== 'undefined') {
  const style = document.createElement('style');
  style.innerHTML = fadeInKeyframes;
  document.head.appendChild(style);
}

const StatusBadge = styled.div<{ $color: string }>`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  background: ${({ $color, theme }) =>
    $color === "green" ? `${theme.colors.accentGreen}20` :
    $color === "red" ? `${theme.colors.accentRed}20` :
    $color === "blue" ? `${theme.colors.primary}20` :
    `${theme.colors.textSecondary}20`};
  color: ${({ $color, theme }) =>
    $color === "green" ? theme.colors.accentGreen :
    $color === "red" ? theme.colors.accentRed :
    $color === "blue" ? theme.colors.primary :
    theme.colors.textSecondary};
  svg {
    font-size: 14px;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  background: ${({ theme }) => theme.colors.primary};
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 12px 0;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  margin-top: 12px;
  box-shadow: none;
  transition: background 0.2s;
  &:hover {
    background: ${({ theme }) => theme.colors.accentGreen};
  }
`;

const ErrorBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 14px 18px;
  background: ${({ theme }) => `${theme.colors.accentRed}10`};
  border: 1px solid ${({ theme }) => theme.colors.accentRed};
  border-radius: 12px;
  color: ${({ theme }) => theme.colors.accentRed};
  font-size: 15px;
  margin-bottom: 10px;
`;

const SuccessBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 14px 18px;
  background: ${({ theme }) => `${theme.colors.accentGreen}10`};
  border: 1px solid ${({ theme }) => theme.colors.accentGreen};
  border-radius: 12px;
  color: ${({ theme }) => theme.colors.accentGreen};
  font-size: 15px;
  margin-bottom: 10px;
`;
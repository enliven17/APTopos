import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Market, Bet, MarketStatus, BetSide } from "@/types/market";

// Dummy data: Demo amaçlı açılmış marketler ve bahisler
const initialMarkets: Market[] = [
  {
    id: "1",
    title: "Will aliens make first contact in 2025?",
    description: "Will humanity receive confirmed first contact from extraterrestrial intelligence in 2025?",
    creatorId: "user1",
    createdAt: Date.now() - 1000 * 60 * 60 * 24,
    closesAt: Date.now() + 1000 * 60 * 60 * 24 * 2,
    initialPool: 1,
    minBet: 0.01,
    maxBet: 2,
    status: "open",
    bets: [
      { id: "b1", userId: "user2", marketId: "1", amount: 0.5, side: "yes", timestamp: Date.now() - 1000 * 60 * 60 },
      { id: "b2", userId: "user3", marketId: "1", amount: 0.2, side: "no", timestamp: Date.now() - 1000 * 60 * 30 },
      { id: "b3", userId: "user4", marketId: "1", amount: 0.8, side: "yes", timestamp: Date.now() - 1000 * 60 * 90 },
      { id: "b4", userId: "user5", marketId: "1", amount: 0.3, side: "no", timestamp: Date.now() - 1000 * 60 * 120 },
      { id: "b5", userId: "user6", marketId: "1", amount: 0.6, side: "yes", timestamp: Date.now() - 1000 * 60 * 180 }
    ]
  },
  {
    id: "2",
    title: "Will someone break the 2-hour marathon barrier in 2025?",
    description: "Will any runner officially break the 2-hour marathon barrier in an official race in 2025?",
    creatorId: "user2",
    createdAt: Date.now() - 1000 * 60 * 60 * 48,
    closesAt: Date.now() + 1000 * 60 * 60 * 24 * 5,
    initialPool: 0.5,
    minBet: 0.01,
    maxBet: 1,
    status: "open",
    bets: [
      { id: "b6", userId: "user1", marketId: "2", amount: 0.1, side: "yes", timestamp: Date.now() - 1000 * 60 * 60 * 2 },
      { id: "b7", userId: "user3", marketId: "2", amount: 0.3, side: "no", timestamp: Date.now() - 1000 * 60 * 60 * 3 },
      { id: "b8", userId: "user5", marketId: "2", amount: 0.2, side: "yes", timestamp: Date.now() - 1000 * 60 * 60 * 4 }
    ]
  },
  {
    id: "3",
    title: "Will a cat become the first pet to speak human language?",
    description: "Will any cat demonstrate the ability to speak human words clearly and meaningfully by 2030?",
    creatorId: "user3",
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 3,
    closesAt: Date.now() + 1000 * 60 * 60 * 24 * 60,
    initialPool: 0.8,
    minBet: 0.01,
    maxBet: 2,
    status: "open",
    bets: [
      { id: "b9", userId: "user2", marketId: "3", amount: 0.4, side: "yes", timestamp: Date.now() - 1000 * 60 * 60 * 5 },
      { id: "b10", userId: "user4", marketId: "3", amount: 0.2, side: "no", timestamp: Date.now() - 1000 * 60 * 60 * 6 },
      { id: "b11", userId: "user5", marketId: "3", amount: 0.5, side: "yes", timestamp: Date.now() - 1000 * 60 * 60 * 7 }
    ]
  },
  {
    id: "4",
    title: "Will time travel be discovered by 2050?",
    description: "Will scientists discover a method for actual time travel (not just theoretical) by 2050?",
    creatorId: "user4",
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 4,
    closesAt: Date.now() + 1000 * 60 * 60 * 24 * 90,
    initialPool: 0.4,
    minBet: 0.01,
    maxBet: 1,
    status: "open",
    bets: [
      { id: "b12", userId: "user1", marketId: "4", amount: 0.1, side: "no", timestamp: Date.now() - 1000 * 60 * 60 * 8 },
      { id: "b13", userId: "user3", marketId: "4", amount: 0.2, side: "yes", timestamp: Date.now() - 1000 * 60 * 60 * 9 }
    ]
  },
  {
    id: "5",
    title: "Will humans live on the Moon by 2040?",
    description: "Will there be a permanent human settlement on the Moon with people living there continuously by 2040?",
    creatorId: "user5",
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 5,
    closesAt: Date.now() + 1000 * 60 * 60 * 24 * 120,
    initialPool: 0.7,
    minBet: 0.01,
    maxBet: 2,
    status: "open",
    bets: [
      { id: "b14", userId: "user2", marketId: "5", amount: 0.3, side: "yes", timestamp: Date.now() - 1000 * 60 * 60 * 10 },
      { id: "b15", userId: "user6", marketId: "5", amount: 0.2, side: "no", timestamp: Date.now() - 1000 * 60 * 60 * 11 },
      { id: "b16", userId: "user7", marketId: "5", amount: 0.4, side: "yes", timestamp: Date.now() - 1000 * 60 * 60 * 12 }
    ]
  },
  {
    id: "6",
    title: "Will telepathy become a real technology by 2060?",
    description: "Will brain-to-brain communication technology be developed and widely available by 2060?",
    creatorId: "user6",
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 6,
    closesAt: Date.now() + 1000 * 60 * 60 * 24 * 365,
    initialPool: 0.9,
    minBet: 0.01,
    maxBet: 2,
    status: "open",
    bets: [
      { id: "b17", userId: "user1", marketId: "6", amount: 0.2, side: "no", timestamp: Date.now() - 1000 * 60 * 60 * 13 },
      { id: "b18", userId: "user4", marketId: "6", amount: 0.3, side: "yes", timestamp: Date.now() - 1000 * 60 * 60 * 14 }
    ]
  },
  {
    id: "7",
    title: "Will dinosaurs be cloned by 2070?",
    description: "Will scientists successfully clone a dinosaur using preserved DNA by 2070?",
    creatorId: "user7",
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 7,
    closesAt: Date.now() + 1000 * 60 * 60 * 24 * 200,
    initialPool: 0.6,
    minBet: 0.01,
    maxBet: 2,
    status: "open",
    bets: [
      { id: "b19", userId: "user2", marketId: "7", amount: 0.5, side: "yes", timestamp: Date.now() - 1000 * 60 * 60 * 15 },
      { id: "b20", userId: "user5", marketId: "7", amount: 0.2, side: "no", timestamp: Date.now() - 1000 * 60 * 60 * 16 }
    ]
  },
  {
    id: "8",
    title: "Will humans achieve immortality by 2100?",
    description: "Will medical technology advance enough to make humans biologically immortal by 2100?",
    creatorId: "user8",
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 8,
    closesAt: Date.now() + 1000 * 60 * 60 * 24 * 400,
    initialPool: 0.5,
    minBet: 0.01,
    maxBet: 2,
    status: "open",
    bets: [
      { id: "b21", userId: "user3", marketId: "8", amount: 0.3, side: "yes", timestamp: Date.now() - 1000 * 60 * 60 * 17 },
      { id: "b22", userId: "user6", marketId: "8", amount: 0.4, side: "no", timestamp: Date.now() - 1000 * 60 * 60 * 18 }
    ]
  },
  {
    id: "9",
    title: "Will a robot win a Nobel Prize by 2050?",
    description: "Will an AI system or robot be awarded a Nobel Prize for scientific discovery by 2050?",
    creatorId: "user9",
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 9,
    closesAt: Date.now() + 1000 * 60 * 60 * 24 * 300,
    initialPool: 0.8,
    minBet: 0.01,
    maxBet: 2,
    status: "open",
    bets: [
      { id: "b23", userId: "user1", marketId: "9", amount: 0.4, side: "yes", timestamp: Date.now() - 1000 * 60 * 60 * 19 },
      { id: "b24", userId: "user4", marketId: "9", amount: 0.3, side: "no", timestamp: Date.now() - 1000 * 60 * 60 * 20 }
    ]
  },
  {
    id: "10",
    title: "Will we discover life on Venus by 2035?",
    description: "Will scientists confirm the discovery of life (microbial or otherwise) on Venus by 2035?",
    creatorId: "user10",
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 10,
    closesAt: Date.now() + 1000 * 60 * 60 * 24 * 180,
    initialPool: 0.6,
    minBet: 0.01,
    maxBet: 2,
    status: "open",
    bets: [
      { id: "b25", userId: "user2", marketId: "10", amount: 0.2, side: "yes", timestamp: Date.now() - 1000 * 60 * 60 * 21 },
      { id: "b26", userId: "user7", marketId: "10", amount: 0.5, side: "no", timestamp: Date.now() - 1000 * 60 * 60 * 22 }
    ]
  },
  {
    id: "11",
    title: "Will flying cars be common by 2045?",
    description: "Will personal flying vehicles be a common mode of transportation in major cities by 2045?",
    creatorId: "user11",
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 11,
    closesAt: Date.now() + 1000 * 60 * 60 * 24 * 250,
    initialPool: 0.7,
    minBet: 0.01,
    maxBet: 2,
    status: "open",
    bets: [
      { id: "b27", userId: "user3", marketId: "11", amount: 0.3, side: "yes", timestamp: Date.now() - 1000 * 60 * 60 * 23 },
      { id: "b28", userId: "user5", marketId: "11", amount: 0.4, side: "no", timestamp: Date.now() - 1000 * 60 * 60 * 24 }
    ]
  },
  {
    id: "12",
    title: "Will dreams be recorded and shared by 2080?",
    description: "Will technology exist to record, visualize, and share human dreams by 2080?",
    creatorId: "user12",
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 12,
    closesAt: Date.now() + 1000 * 60 * 60 * 24 * 500,
    initialPool: 0.5,
    minBet: 0.01,
    maxBet: 2,
    status: "open",
    bets: [
      { id: "b29", userId: "user1", marketId: "12", amount: 0.2, side: "yes", timestamp: Date.now() - 1000 * 60 * 60 * 25 },
      { id: "b30", userId: "user6", marketId: "12", amount: 0.3, side: "no", timestamp: Date.now() - 1000 * 60 * 60 * 26 }
    ]
  }
];

interface ClaimableReward {
  userId: string;
  marketId: string;
  amount: number;
  claimed: boolean;
}

interface MarketsState {
  markets: Market[];
  claimableRewards: ClaimableReward[];
  userDefiQ: Record<string, number>; // address -> DEFiq puanı
}

const initialState: MarketsState = {
  markets: initialMarkets,
  claimableRewards: [],
  userDefiQ: {
    // Demo kullanıcılar için temsili DEFiq puanları
    "user1": 85,
    "user2": 120,
    "user3": 65,
    "user4": 95,
    "user5": 150,
    "user6": 75,
    "user7": 110,
    "user8": 45,
  },
};

const marketsSlice = createSlice({
  name: "markets",
  initialState,
  reducers: {
    addMarket(state, action: PayloadAction<Market>) {
      state.markets.push(action.payload);
    },
    addBet(state, action: PayloadAction<Bet>) {
      const market = state.markets.find(m => m.id === action.payload.marketId);
      if (market) {
        market.bets.push(action.payload);
      }
    },
    closeMarket(state, action: PayloadAction<{ marketId: string; result: BetSide }>) {
      const market = state.markets.find(m => m.id === action.payload.marketId);
      if (market) {
        market.status = "resolved";
        market.result = action.payload.result;
        // Payout hesapla
        const totalPool = market.initialPool + market.bets.reduce((sum, b) => sum + b.amount, 0);
        const winners = market.bets.filter(b => b.side === action.payload.result);
        const totalWinnerBet = winners.reduce((sum, b) => sum + b.amount, 0);
        if (totalWinnerBet > 0) {
          winners.forEach(bet => {
            const pay = (bet.amount / totalWinnerBet) * totalPool;
            state.claimableRewards.push({
              userId: bet.userId,
              marketId: market.id,
              amount: pay,
              claimed: false
            });
            // DEFiq puanını güncelle (ör: +10 her kazanç için)
            if (!state.userDefiQ[bet.userId]) state.userDefiQ[bet.userId] = 0;
            state.userDefiQ[bet.userId] += 10;
          });
        }
      }
    },
    claimReward(state, action: PayloadAction<{ userId: string; marketId: string }>) {
      const reward = state.claimableRewards.find(r => r.userId === action.payload.userId && r.marketId === action.payload.marketId && !r.claimed);
      if (reward) {
        reward.claimed = true;
      }
    },
    setUserDefiQ(state, action: PayloadAction<{ address: string; score: number }>) {
      state.userDefiQ[action.payload.address] = action.payload.score;
    }
  }
});

export const { addMarket, addBet, closeMarket, claimReward, setUserDefiQ } = marketsSlice.actions;
export default marketsSlice.reducer;
export type { ClaimableReward }; 
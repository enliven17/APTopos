import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Market, BetSide } from "@/types/market";

// Dummy data: Demo amaçlı açılmış marketler ve bahisler
const NOW = 1720000000000;
const initialMarkets: Market[] = [
  {
    id: 1,
    title: "Will aliens make first contact in 2025?",
    description: "Will humanity receive confirmed first contact from extraterrestrial intelligence in 2025?",
    creator: "user1",
    created_at: NOW - 1000 * 60 * 60 * 24,
    closes_at: NOW + 1000 * 60 * 60 * 24 * 2,
    min_bet: 0.01,
    max_bet: 2,
    closed: false,
    yes_bets: [],
    no_bets: []
  },
  {
    id: 2,
    title: "Will someone break the 2-hour marathon barrier in 2025?",
    description: "Will any runner officially break the 2-hour marathon barrier in an official race in 2025?",
    creator: "user2",
    created_at: NOW - 1000 * 60 * 60 * 48,
    closes_at: NOW + 1000 * 60 * 60 * 24 * 5,
    min_bet: 0.01,
    max_bet: 1,
    closed: false,
    yes_bets: [],
    no_bets: []
  },
  {
    id: 3,
    title: "Will a cat become the first pet to speak human language?",
    description: "Will any cat demonstrate the ability to speak human words clearly and meaningfully by 2030?",
    creator: "user3",
    created_at: NOW - 1000 * 60 * 60 * 24 * 3,
    closes_at: NOW + 1000 * 60 * 60 * 24 * 60,
    min_bet: 0.01,
    max_bet: 2,
    closed: false,
    yes_bets: [],
    no_bets: []
  },
  {
    id: 4,
    title: "Will time travel be discovered by 2050?",
    description: "Will scientists discover a method for actual time travel (not just theoretical) by 2050?",
    creator: "user4",
    created_at: NOW - 1000 * 60 * 60 * 24 * 4,
    closes_at: NOW + 1000 * 60 * 60 * 24 * 90,
    min_bet: 0.01,
    max_bet: 1,
    closed: false,
    yes_bets: [],
    no_bets: []
  },
  {
    id: 5,
    title: "Will humans live on the Moon by 2040?",
    description: "Will there be a permanent human settlement on the Moon with people living there continuously by 2040?",
    creator: "user5",
    created_at: NOW - 1000 * 60 * 60 * 24 * 5,
    closes_at: NOW + 1000 * 60 * 60 * 24 * 120,
    min_bet: 0.01,
    max_bet: 2,
    closed: false,
    yes_bets: [],
    no_bets: []
  },
  {
    id: 6,
    title: "Will telepathy become a real technology by 2060?",
    description: "Will brain-to-brain communication technology be developed and widely available by 2060?",
    creator: "user6",
    created_at: NOW - 1000 * 60 * 60 * 24 * 6,
    closes_at: NOW + 1000 * 60 * 60 * 24 * 365,
    min_bet: 0.01,
    max_bet: 2,
    closed: false,
    yes_bets: [],
    no_bets: []
  },
  {
    id: 7,
    title: "Will dinosaurs be cloned by 2070?",
    description: "Will scientists successfully clone a dinosaur using preserved DNA by 2070?",
    creator: "user7",
    created_at: NOW - 1000 * 60 * 60 * 24 * 7,
    closes_at: NOW + 1000 * 60 * 60 * 24 * 200,
    min_bet: 0.01,
    max_bet: 2,
    closed: false,
    yes_bets: [],
    no_bets: []
  },
  {
    id: 8,
    title: "Will humans achieve immortality by 2100?",
    description: "Will medical technology advance enough to make humans biologically immortal by 2100?",
    creator: "user8",
    created_at: NOW - 1000 * 60 * 60 * 24 * 8,
    closes_at: NOW + 1000 * 60 * 60 * 24 * 400,
    min_bet: 0.01,
    max_bet: 2,
    closed: false,
    yes_bets: [],
    no_bets: []
  },
  {
    id: 9,
    title: "Will a robot win a Nobel Prize by 2050?",
    description: "Will an AI system or robot be awarded a Nobel Prize for scientific discovery by 2050?",
    creator: "user9",
    created_at: NOW - 1000 * 60 * 60 * 24 * 9,
    closes_at: NOW + 1000 * 60 * 60 * 24 * 300,
    min_bet: 0.01,
    max_bet: 2,
    closed: false,
    yes_bets: [],
    no_bets: []
  },
  {
    id: 10,
    title: "Will we discover life on Venus by 2035?",
    description: "Will scientists confirm the discovery of life (microbial or otherwise) on Venus by 2035?",
    creator: "user10",
    created_at: NOW - 1000 * 60 * 60 * 24 * 10,
    closes_at: NOW + 1000 * 60 * 60 * 24 * 180,
    min_bet: 0.01,
    max_bet: 2,
    closed: false,
    yes_bets: [],
    no_bets: []
  },
  {
    id: 11,
    title: "Will flying cars be common by 2045?",
    description: "Will personal flying vehicles be a common mode of transportation in major cities by 2045?",
    creator: "user11",
    created_at: NOW - 1000 * 60 * 60 * 24 * 11,
    closes_at: NOW + 1000 * 60 * 60 * 24 * 250,
    min_bet: 0.01,
    max_bet: 2,
    closed: false,
    yes_bets: [],
    no_bets: []
  },
  {
    id: 12,
    title: "Will dreams be recorded and shared by 2080?",
    description: "Will technology exist to record, visualize, and share human dreams by 2080?",
    creator: "user12",
    created_at: NOW - 1000 * 60 * 60 * 24 * 12,
    closes_at: NOW + 1000 * 60 * 60 * 24 * 500,
    min_bet: 0.01,
    max_bet: 2,
    closed: false,
    yes_bets: [],
    no_bets: []
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
    closeMarket(state, action: PayloadAction<{ marketId: number; result: BetSide }>) {
      const market = state.markets.find(m => m.id === action.payload.marketId);
      if (market) {
        market.closed = true;
        market.result = action.payload.result;
        // Payout hesapla
        const totalPool = market.yes_bets.reduce((sum, b) => sum + b.amount, 0) + 
                         market.no_bets.reduce((sum, b) => sum + b.amount, 0);
        const winners = action.payload.result === "yes" ? market.yes_bets : market.no_bets;
        const totalWinnerBet = winners.reduce((sum, b) => sum + b.amount, 0);
        if (totalWinnerBet > 0) {
          winners.forEach(bet => {
            const pay = (bet.amount / totalWinnerBet) * totalPool;
            state.claimableRewards.push({
              userId: bet.user,
              marketId: market.id.toString(),
              amount: pay,
              claimed: false
            });
            // DEFiq puanını güncelle (ör: +10 her kazanç için)
            if (!state.userDefiQ[bet.user]) state.userDefiQ[bet.user] = 0;
            state.userDefiQ[bet.user] += 10;
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

export const { addMarket, closeMarket, claimReward, setUserDefiQ } = marketsSlice.actions;
export default marketsSlice.reducer;
export type { ClaimableReward }; 
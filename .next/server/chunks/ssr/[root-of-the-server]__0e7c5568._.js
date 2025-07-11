module.exports = {

"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[project]/src/store/marketsSlice.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "addBet": (()=>addBet),
    "addMarket": (()=>addMarket),
    "claimReward": (()=>claimReward),
    "closeMarket": (()=>closeMarket),
    "default": (()=>__TURBOPACK__default__export__),
    "setUserDefiQ": (()=>setUserDefiQ)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
;
// Dummy data: Demo amaçlı açılmış marketler ve bahisler
const initialMarkets = [
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
            {
                id: "b1",
                userId: "user2",
                marketId: "1",
                amount: 0.5,
                side: "yes",
                timestamp: Date.now() - 1000 * 60 * 60
            },
            {
                id: "b2",
                userId: "user3",
                marketId: "1",
                amount: 0.2,
                side: "no",
                timestamp: Date.now() - 1000 * 60 * 30
            },
            {
                id: "b3",
                userId: "user4",
                marketId: "1",
                amount: 0.8,
                side: "yes",
                timestamp: Date.now() - 1000 * 60 * 90
            },
            {
                id: "b4",
                userId: "user5",
                marketId: "1",
                amount: 0.3,
                side: "no",
                timestamp: Date.now() - 1000 * 60 * 120
            },
            {
                id: "b5",
                userId: "user6",
                marketId: "1",
                amount: 0.6,
                side: "yes",
                timestamp: Date.now() - 1000 * 60 * 180
            }
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
            {
                id: "b6",
                userId: "user1",
                marketId: "2",
                amount: 0.1,
                side: "yes",
                timestamp: Date.now() - 1000 * 60 * 60 * 2
            },
            {
                id: "b7",
                userId: "user3",
                marketId: "2",
                amount: 0.3,
                side: "no",
                timestamp: Date.now() - 1000 * 60 * 60 * 3
            },
            {
                id: "b8",
                userId: "user5",
                marketId: "2",
                amount: 0.2,
                side: "yes",
                timestamp: Date.now() - 1000 * 60 * 60 * 4
            }
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
            {
                id: "b9",
                userId: "user2",
                marketId: "3",
                amount: 0.4,
                side: "yes",
                timestamp: Date.now() - 1000 * 60 * 60 * 5
            },
            {
                id: "b10",
                userId: "user4",
                marketId: "3",
                amount: 0.2,
                side: "no",
                timestamp: Date.now() - 1000 * 60 * 60 * 6
            },
            {
                id: "b11",
                userId: "user5",
                marketId: "3",
                amount: 0.5,
                side: "yes",
                timestamp: Date.now() - 1000 * 60 * 60 * 7
            }
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
            {
                id: "b12",
                userId: "user1",
                marketId: "4",
                amount: 0.1,
                side: "no",
                timestamp: Date.now() - 1000 * 60 * 60 * 8
            },
            {
                id: "b13",
                userId: "user3",
                marketId: "4",
                amount: 0.2,
                side: "yes",
                timestamp: Date.now() - 1000 * 60 * 60 * 9
            }
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
            {
                id: "b14",
                userId: "user2",
                marketId: "5",
                amount: 0.3,
                side: "yes",
                timestamp: Date.now() - 1000 * 60 * 60 * 10
            },
            {
                id: "b15",
                userId: "user6",
                marketId: "5",
                amount: 0.2,
                side: "no",
                timestamp: Date.now() - 1000 * 60 * 60 * 11
            },
            {
                id: "b16",
                userId: "user7",
                marketId: "5",
                amount: 0.4,
                side: "yes",
                timestamp: Date.now() - 1000 * 60 * 60 * 12
            }
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
            {
                id: "b17",
                userId: "user1",
                marketId: "6",
                amount: 0.2,
                side: "no",
                timestamp: Date.now() - 1000 * 60 * 60 * 13
            },
            {
                id: "b18",
                userId: "user4",
                marketId: "6",
                amount: 0.3,
                side: "yes",
                timestamp: Date.now() - 1000 * 60 * 60 * 14
            }
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
            {
                id: "b19",
                userId: "user2",
                marketId: "7",
                amount: 0.5,
                side: "yes",
                timestamp: Date.now() - 1000 * 60 * 60 * 15
            },
            {
                id: "b20",
                userId: "user5",
                marketId: "7",
                amount: 0.2,
                side: "no",
                timestamp: Date.now() - 1000 * 60 * 60 * 16
            }
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
            {
                id: "b21",
                userId: "user3",
                marketId: "8",
                amount: 0.3,
                side: "yes",
                timestamp: Date.now() - 1000 * 60 * 60 * 17
            },
            {
                id: "b22",
                userId: "user6",
                marketId: "8",
                amount: 0.4,
                side: "no",
                timestamp: Date.now() - 1000 * 60 * 60 * 18
            }
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
            {
                id: "b23",
                userId: "user1",
                marketId: "9",
                amount: 0.4,
                side: "yes",
                timestamp: Date.now() - 1000 * 60 * 60 * 19
            },
            {
                id: "b24",
                userId: "user4",
                marketId: "9",
                amount: 0.3,
                side: "no",
                timestamp: Date.now() - 1000 * 60 * 60 * 20
            }
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
            {
                id: "b25",
                userId: "user2",
                marketId: "10",
                amount: 0.2,
                side: "yes",
                timestamp: Date.now() - 1000 * 60 * 60 * 21
            },
            {
                id: "b26",
                userId: "user7",
                marketId: "10",
                amount: 0.5,
                side: "no",
                timestamp: Date.now() - 1000 * 60 * 60 * 22
            }
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
            {
                id: "b27",
                userId: "user3",
                marketId: "11",
                amount: 0.3,
                side: "yes",
                timestamp: Date.now() - 1000 * 60 * 60 * 23
            },
            {
                id: "b28",
                userId: "user5",
                marketId: "11",
                amount: 0.4,
                side: "no",
                timestamp: Date.now() - 1000 * 60 * 60 * 24
            }
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
            {
                id: "b29",
                userId: "user1",
                marketId: "12",
                amount: 0.2,
                side: "yes",
                timestamp: Date.now() - 1000 * 60 * 60 * 25
            },
            {
                id: "b30",
                userId: "user6",
                marketId: "12",
                amount: 0.3,
                side: "no",
                timestamp: Date.now() - 1000 * 60 * 60 * 26
            }
        ]
    }
];
const initialState = {
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
        "user8": 45
    }
};
const marketsSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: "markets",
    initialState,
    reducers: {
        addMarket (state, action) {
            state.markets.push(action.payload);
        },
        addBet (state, action) {
            const market = state.markets.find((m)=>m.id === action.payload.marketId);
            if (market) {
                market.bets.push(action.payload);
            }
        },
        closeMarket (state, action) {
            const market = state.markets.find((m)=>m.id === action.payload.marketId);
            if (market) {
                market.status = "resolved";
                market.result = action.payload.result;
                // Payout hesapla
                const totalPool = market.initialPool + market.bets.reduce((sum, b)=>sum + b.amount, 0);
                const winners = market.bets.filter((b)=>b.side === action.payload.result);
                const totalWinnerBet = winners.reduce((sum, b)=>sum + b.amount, 0);
                if (totalWinnerBet > 0) {
                    winners.forEach((bet)=>{
                        const pay = bet.amount / totalWinnerBet * totalPool;
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
        claimReward (state, action) {
            const reward = state.claimableRewards.find((r)=>r.userId === action.payload.userId && r.marketId === action.payload.marketId && !r.claimed);
            if (reward) {
                reward.claimed = true;
            }
        },
        setUserDefiQ (state, action) {
            state.userDefiQ[action.payload.address] = action.payload.score;
        }
    }
});
const { addMarket, addBet, closeMarket, claimReward, setUserDefiQ } = marketsSlice.actions;
const __TURBOPACK__default__export__ = marketsSlice.reducer;
}}),
"[project]/src/store/index.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "store": (()=>store)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$marketsSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/marketsSlice.ts [app-ssr] (ecmascript)");
;
;
const store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["configureStore"])({
    reducer: {
        markets: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$marketsSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
    }
});
}}),
"[externals]/stream [external] (stream, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}}),
"[project]/src/theme/colors.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// Aptos renk paleti - Beyaz Tasarım
__turbopack_context__.s({
    "colors": (()=>colors)
});
const colors = {
    primary: "#F59E0B",
    secondary: "#1F2937",
    accentGreen: "#10B981",
    accentRed: "#EF4444",
    accentOrange: "#F59E0B",
    text: "#111827",
    textSecondary: "#6B7280",
    textDark: "#111827",
    background: "#FFFFFF",
    backgroundSecondary: "#F9FAFB",
    card: "#FFFFFF",
    cardHover: "#F3F4F6",
    border: "#F59E0B",
    borderLight: "#F59E0B",
    success: "#10B981",
    warning: "#F59E0B",
    error: "#EF4444",
    info: "#F59E0B" // Bilgi turuncu
};
}}),
"[project]/src/theme/index.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "theme": (()=>theme)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$theme$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/theme/colors.ts [app-ssr] (ecmascript)");
;
const theme = {
    colors: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$theme$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"],
    borderRadius: "12px",
    spacing: (factor)=>`${factor * 8}px`,
    fontFamily: "'Inter', sans-serif"
};
}}),
"[externals]/node:crypto [external] (node:crypto, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}}),
"[externals]/url [external] (url, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}}),
"[externals]/util [external] (util, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}}),
"[externals]/fs [external] (fs, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}}),
"[externals]/http [external] (http, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}}),
"[externals]/https [external] (https, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}}),
"[externals]/dns [external] (dns, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("dns", () => require("dns"));

module.exports = mod;
}}),
"[externals]/os [external] (os, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}}),
"[externals]/events [external] (events, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}}),
"[externals]/buffer [external] (buffer, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}}),
"[externals]/keyv [external] (keyv, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("keyv", () => require("keyv"));

module.exports = mod;
}}),
"[externals]/zlib [external] (zlib, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}}),
"[externals]/http2 [external] (http2, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("http2", () => require("http2"));

module.exports = mod;
}}),
"[externals]/tls [external] (tls, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("tls", () => require("tls"));

module.exports = mod;
}}),
"[externals]/net [external] (net, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("net", () => require("net"));

module.exports = mod;
}}),
"[externals]/crypto [external] (crypto, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}}),
"[externals]/path [external] (path, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}}),
"[externals]/assert [external] (assert, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}}),
"[externals]/tty [external] (tty, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}}),
"[project]/src/app/providers.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "AppProviders": (()=>AppProviders)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/index.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$theme$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/theme/index.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/query-core/build/modern/queryClient.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aptos$2d$labs$2f$wallet$2d$adapter$2d$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@aptos-labs/wallet-adapter-react/dist/index.mjs [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aptos$2d$labs$2f$wallet$2d$adapter$2d$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@aptos-labs/wallet-adapter-react/dist/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$petra$2d$plugin$2d$wallet$2d$adapter$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/petra-plugin-wallet-adapter/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@aptos-labs/ts-sdk/dist/esm/index.mjs [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$4RXKALLC$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__f__as__Network$3e$__ = __turbopack_context__.i("[project]/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-4RXKALLC.mjs [app-ssr] (ecmascript) <export f as Network>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$martianwallet$2f$aptos$2d$wallet$2d$adapter$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@martianwallet/aptos-wallet-adapter/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$pontem$2f$wallet$2d$adapter$2d$plugin$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@pontem/wallet-adapter-plugin/dist/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
const queryClient = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QueryClient"]();
function AppProviders({ children }) {
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    }
    const wallets = [
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$petra$2d$plugin$2d$wallet$2d$adapter$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PetraWallet"](),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$martianwallet$2f$aptos$2d$wallet$2d$adapter$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MartianWallet"](),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$pontem$2f$wallet$2d$adapter$2d$plugin$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PontemWallet"]()
    ];
    return(// @ts-ignore
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aptos$2d$labs$2f$wallet$2d$adapter$2d$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["AptosWalletAdapterProvider"], {
        wallets: wallets,
        autoConnect: false,
        dappConfig: {
            network: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$4RXKALLC$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__f__as__Network$3e$__["Network"].TESTNET
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QueryClientProvider"], {
            client: queryClient,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Provider"], {
                store: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["store"],
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ThemeProvider"], {
                    theme: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$theme$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"],
                    children: children
                }, void 0, false, {
                    fileName: "[project]/src/app/providers.tsx",
                    lineNumber: 33,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/providers.tsx",
                lineNumber: 32,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/providers.tsx",
            lineNumber: 31,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/providers.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this));
}
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[project]/src/navigation/index.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "MainNav": (()=>MainNav)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aptos$2d$labs$2f$wallet$2d$adapter$2d$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@aptos-labs/wallet-adapter-react/dist/index.mjs [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aptos$2d$labs$2f$wallet$2d$adapter$2d$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@aptos-labs/wallet-adapter-react/dist/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aptos$2d$labs$2f$wallet$2d$adapter$2d$ant$2d$design$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@aptos-labs/wallet-adapter-ant-design/dist/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
function MainNav() {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const { account } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aptos$2d$labs$2f$wallet$2d$adapter$2d$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useWallet"])();
    const connectedAddress = account?.address?.toString();
    const defiQ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelector"])((state)=>{
        if (!connectedAddress) return 0;
        const reduxScore = state.markets.userDefiQ[connectedAddress];
        if (reduxScore !== undefined) return reduxScore;
        // Redux'ta yoksa localStorage'dan oku
        if ("TURBOPACK compile-time falsy", 0) {
            "TURBOPACK unreachable";
        }
        return 0;
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavBar, {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FlexRow, {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LogoBox, {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                fontSize: 36,
                                marginRight: 8
                            },
                            children: "🪼"
                        }, void 0, false, {
                            fileName: "[project]/src/navigation/index.tsx",
                            lineNumber: 32,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                fontWeight: 700,
                                fontSize: 22,
                                letterSpacing: 1
                            },
                            children: "APTopos"
                        }, void 0, false, {
                            fileName: "[project]/src/navigation/index.tsx",
                            lineNumber: 33,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/navigation/index.tsx",
                    lineNumber: 31,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavLinks, {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavLink, {
                            href: "/",
                            $active: pathname === "/",
                            children: "Markets"
                        }, void 0, false, {
                            fileName: "[project]/src/navigation/index.tsx",
                            lineNumber: 36,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavLink, {
                            href: "/create",
                            $active: pathname === "/create",
                            children: "Create Market"
                        }, void 0, false, {
                            fileName: "[project]/src/navigation/index.tsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavLink, {
                            href: "/user-bets",
                            $active: pathname === "/user-bets",
                            children: "My Bets"
                        }, void 0, false, {
                            fileName: "[project]/src/navigation/index.tsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/navigation/index.tsx",
                    lineNumber: 35,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SearchBox, {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaSearch"], {
                            style: {
                                color: '#9CA3AF',
                                fontSize: 16,
                                marginRight: 8
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/navigation/index.tsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SearchInput, {
                            placeholder: "Search markets..."
                        }, void 0, false, {
                            fileName: "[project]/src/navigation/index.tsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/navigation/index.tsx",
                    lineNumber: 40,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DefiQBox, {
                    title: "DEFIq: Prediction Intelligence Score",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaBrain"], {
                            style: {
                                marginRight: 6,
                                color: '#3B82F6',
                                fontSize: 18
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/navigation/index.tsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DefiQValue, {
                            children: defiQ
                        }, void 0, false, {
                            fileName: "[project]/src/navigation/index.tsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/navigation/index.tsx",
                    lineNumber: 44,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(WalletBox, {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aptos$2d$labs$2f$wallet$2d$adapter$2d$ant$2d$design$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WalletSelector"], {}, void 0, false, {
                        fileName: "[project]/src/navigation/index.tsx",
                        lineNumber: 49,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/navigation/index.tsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/navigation/index.tsx",
            lineNumber: 30,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/navigation/index.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
const NavBar = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].nav`
  background: ${({ theme })=>theme.colors.background};
  backdrop-filter: blur(10px);
  padding: 0 32px;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  border-bottom: 2.5px solid ${({ theme })=>theme.colors.primary};
  font-size: 1.1rem;
  font-weight: 600;
  width: 100vw;
  box-sizing: border-box;
  z-index: 100;
  position: relative;
  box-shadow: 0 4px 24px 0 ${({ theme })=>`${theme.colors.primary}22`};
  @media (max-width: 1100px) {
    flex-wrap: wrap;
    height: auto;
    padding: 10px 6px;
    gap: 8px;
  }
`;
const FlexRow = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 16px;
  justify-content: space-between;
`;
const LogoBox = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
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
const NavLinks = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
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
const SearchBox = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  display: flex;
  align-items: center;
  background: ${({ theme })=>theme.colors.backgroundSecondary};
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
const SearchInput = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].input`
  border: none;
  outline: none;
  background: transparent;
  color: ${({ theme })=>theme.colors.text};
  font-size: 1.08rem;
  padding: 4px 0;
  width: 100%;
  &::placeholder {
    color: ${({ theme })=>theme.colors.textSecondary};
    opacity: 0.7;
  }
`;
const WalletBox = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 0 0 auto;
  background: ${({ theme })=>theme.colors.backgroundSecondary};
  border-radius: 14px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.13);
  border: 1.5px solid ${({ theme })=>theme.colors.primary}33;
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
const NavLink = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])`
  color: ${({ theme, $active })=>$active ? theme.colors.primary : theme.colors.textSecondary};
  font-weight: ${({ $active })=>$active ? "bold" : "normal"};
  text-decoration: none;
  font-size: 20px;
  padding: 8px 18px 4px 18px;
  border-radius: 12px;
  position: relative;
  background: ${({ $active, theme })=>$active ? `linear-gradient(90deg, ${theme.colors.primary}22 0%, ${theme.colors.accentOrange}22 100%)` : 'none'};
  box-shadow: ${({ $active })=>$active ? '0 4px 18px 0 rgba(59,130,246,0.10)' : 'none'};
  transition: color 0.22s, background 0.22s, box-shadow 0.22s, font-weight 0.22s, padding 0.22s;
  &::after {
    content: '';
    display: ${({ $active })=>$active ? 'block' : 'none'};
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
    color: ${({ theme })=>theme.colors.primary};
    background: ${({ $active, theme })=>$active ? `linear-gradient(90deg, ${theme.colors.primary}33 0%, ${theme.colors.accentOrange}33 100%)` : `${theme.colors.primary}10`};
    box-shadow: ${({ $active })=>$active ? '0 8px 32px 0 rgba(59,130,246,0.13)' : '0 2px 8px rgba(59,130,246,0.10)'};
    padding: 8px 22px 4px 22px;
  }
  @media (max-width: 1100px) {
    font-size: 17px;
    padding: 6px 10px 2px 10px;
  }
`;
const DefiQBox = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  display: flex;
  align-items: center;
  background: ${({ theme })=>theme.colors.backgroundSecondary};
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(59,130,246,0.10);
  padding: 6px 14px;
  margin: 0 10px 0 0;
  font-size: 1.08rem;
  font-weight: 600;
  color: ${({ theme })=>theme.colors.primary};
  min-width: 60px;
  height: 38px;
  border: 1px solid ${({ theme })=>theme.colors.primary}33;
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
const DefiQValue = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].span`
  font-weight: 700;
  color: ${({ theme })=>theme.colors.primary};
  font-size: 1.08em;
  text-shadow: 0 1px 2px rgba(59,130,246,0.3);
  min-width: 30px;
  text-align: center;
`;
}}),
"[project]/src/components/ClientOnly.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ClientOnly)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function ClientOnly({ children }) {
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>setMounted(true), []);
    if (!mounted) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false);
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__0e7c5568._.js.map
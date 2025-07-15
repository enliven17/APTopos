module.exports = {

"[project]/src/config/aptosConfig.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "MODULE_ADDRESS": (()=>MODULE_ADDRESS),
    "aptosConfig": (()=>aptosConfig)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@aptos-labs/ts-sdk/dist/esm/index.mjs [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$Y7ZQTLH4$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__a__as__AptosConfig$3e$__ = __turbopack_context__.i("[project]/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-Y7ZQTLH4.mjs [app-ssr] (ecmascript) <export a as AptosConfig>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$4RXKALLC$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__f__as__Network$3e$__ = __turbopack_context__.i("[project]/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-4RXKALLC.mjs [app-ssr] (ecmascript) <export f as Network>");
;
const aptosConfig = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$Y7ZQTLH4$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__a__as__AptosConfig$3e$__["AptosConfig"]({
    network: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$4RXKALLC$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__f__as__Network$3e$__["Network"].TESTNET
});
const MODULE_ADDRESS = "0xea0dd23db979ddd6965505226d310bf52bf8d6087cc968d6760d54728d4ab5be";
}}),
"[project]/src/api/betting.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "claimReward": (()=>claimReward),
    "closeMarket": (()=>closeMarket),
    "createMarket": (()=>createMarket),
    "getMarkets": (()=>getMarkets),
    "placeBet": (()=>placeBet)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@aptos-labs/ts-sdk/dist/esm/index.mjs [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GXDOOLCG$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__je__as__Aptos$3e$__ = __turbopack_context__.i("[project]/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-GXDOOLCG.mjs [app-ssr] (ecmascript) <export je as Aptos>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$aptosConfig$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/aptosConfig.ts [app-ssr] (ecmascript)");
;
;
const aptos = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GXDOOLCG$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__je__as__Aptos$3e$__["Aptos"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$aptosConfig$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["aptosConfig"]);
// Helper: get full module name
const MODULE = `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$aptosConfig$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MODULE_ADDRESS"]}::betting`;
const NODE_URL = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$aptosConfig$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["aptosConfig"].network === "testnet" ? "https://fullnode.testnet.aptoslabs.com/v1" : "https://fullnode.mainnet.aptoslabs.com/v1";
const MARKETS_RESOURCE = `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$aptosConfig$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MODULE_ADDRESS"]}::betting::Markets`;
async function getMarkets() {
    const url = `${NODE_URL}/accounts/${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$aptosConfig$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MODULE_ADDRESS"]}/resource/${MARKETS_RESOURCE}`;
    try {
        const res = await fetch(url);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        // The markets are in data.data.markets
        return data.data.markets;
    } catch (err) {
        console.error("Failed to fetch markets from REST API:", err);
        throw new Error("Failed to load markets from chain.");
    }
}
async function createMarket(account) {
    const tx = await aptos.transaction.build.simple({
        sender: account.address,
        data: {
            function: `${MODULE}::create_market`,
            functionArguments: [],
            typeArguments: []
        }
    });
    const senderAuthenticator = await account.signTransaction(tx);
    return aptos.transaction.submit.simple({
        transaction: tx,
        senderAuthenticator
    });
}
async function placeBet(account, market_id, yes, amount) {
    const tx = await aptos.transaction.build.simple({
        sender: account.address,
        data: {
            function: `${MODULE}::place_bet`,
            functionArguments: [
                market_id,
                yes,
                amount
            ],
            typeArguments: []
        }
    });
    const senderAuthenticator = await account.signTransaction(tx);
    return aptos.transaction.submit.simple({
        transaction: tx,
        senderAuthenticator
    });
}
async function closeMarket(account, market_id) {
    const tx = await aptos.transaction.build.simple({
        sender: account.address,
        data: {
            function: `${MODULE}::close_market`,
            functionArguments: [
                market_id
            ],
            typeArguments: []
        }
    });
    const senderAuthenticator = await account.signTransaction(tx);
    return aptos.transaction.submit.simple({
        transaction: tx,
        senderAuthenticator
    });
}
async function claimReward(account, market_id) {
    const tx = await aptos.transaction.build.simple({
        sender: account.address,
        data: {
            function: `${MODULE}::claim_reward`,
            functionArguments: [
                market_id
            ],
            typeArguments: []
        }
    });
    const senderAuthenticator = await account.signTransaction(tx);
    return aptos.transaction.submit.simple({
        transaction: tx,
        senderAuthenticator
    });
}
}}),
"[project]/src/screens/MarketDetailScreen.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>MarketDetailScreen)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aptos$2d$labs$2f$wallet$2d$adapter$2d$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@aptos-labs/wallet-adapter-react/dist/index.mjs [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aptos$2d$labs$2f$wallet$2d$adapter$2d$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@aptos-labs/wallet-adapter-react/dist/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$betting$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/api/betting.ts [app-ssr] (ecmascript)");
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
const PieChartWrapper = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
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
const PieLegend = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 13px;
  color: ${({ theme })=>theme.colors.textSecondary};
  margin-top: 8px;
  transition: all 0.3s ease;
`;
const PieDot = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].span`
  display: inline-block;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: ${({ color })=>color};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.2);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  }
`;
// Helper: Escape HTML to prevent XSS in comments
function escapeHtml(str) {
    return str.replace(/[&<>'"]/g, function(tag) {
        const chars = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            "'": '&#39;',
            '"': '&quot;'
        };
        return chars[tag] || tag;
    });
}
function MarketDetailScreen() {
    const { id } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useParams"])();
    const { data: markets = [], isLoading, isError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "markets"
        ],
        queryFn: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$betting$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMarkets"],
        refetchInterval: 10000
    });
    const market = markets.find((m)=>String(m.id) === String(id));
    const [amount, setAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [side, setSide] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("yes");
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [success, setSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const { account, connected } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aptos$2d$labs$2f$wallet$2d$adapter$2d$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useWallet"])();
    const [now, setNow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(Date.now());
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [closeLoading, setCloseLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [claimLoading, setClaimLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const interval = setInterval(()=>setNow(Date.now()), 60000);
        return ()=>clearInterval(interval);
    }, []);
    if (isLoading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PageContainer, {
        children: "Loading..."
    }, void 0, false, {
        fileName: "[project]/src/screens/MarketDetailScreen.tsx",
        lineNumber: 97,
        columnNumber: 25
    }, this);
    if (isError || !market) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PageContainer, {
        children: "Market not found or failed to load."
    }, void 0, false, {
        fileName: "[project]/src/screens/MarketDetailScreen.tsx",
        lineNumber: 98,
        columnNumber: 34
    }, this);
    // On-chain fields
    const totalYes = (market.yes_bets || []).reduce((sum, b)=>sum + b.amount, 0) / 1e8;
    const totalNo = (market.no_bets || []).reduce((sum, b)=>sum + b.amount, 0) / 1e8;
    const totalPool = totalYes + totalNo;
    const totalBets = (market.yes_bets?.length || 0) + (market.no_bets?.length || 0);
    const closesAt = (market.closes_at || 0) * 1000;
    const timeLeft = closesAt - now;
    const daysLeft = Math.ceil(timeLeft / (1000 * 60 * 60 * 24));
    const closed = market.closed;
    const MIN_BET = 0.001;
    const MAX_BET = 5;
    const [comments, setComments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([
        {
            id: 1,
            user: "Alice",
            text: "I think this market is very interesting!",
            date: "2024-07-06 20:00"
        },
        {
            id: 2,
            user: "Bob",
            text: "My bet is on YES 🚀",
            date: "2024-07-06 20:10"
        },
        {
            id: 3,
            user: "Charlie",
            text: "I'm not so sure, but good luck everyone!",
            date: "2024-07-06 20:15"
        }
    ]);
    const [commentInput, setCommentInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const handleBet = async (e)=>{
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
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$betting$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["placeBet"])(account, market.id, yes, onChainAmount);
            setSuccess("Bet placed successfully!");
            setAmount("");
        } catch (err) {
            setError(err?.message || "Failed to place bet.");
        } finally{
            setLoading(false);
        }
    };
    const handleCloseMarket = async ()=>{
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
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$betting$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["closeMarket"])(account, market.id);
            setSuccess("Market closed successfully!");
        } catch (err) {
            setError(err?.message || "Failed to close market.");
        } finally{
            setCloseLoading(false);
        }
    };
    const handleClaim = async ()=>{
        setError("");
        setSuccess("");
        setClaimLoading(true);
        try {
            if (!connected || !account?.address) {
                setError("Wallet is not connected.");
                setClaimLoading(false);
                return;
            }
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$betting$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["claimReward"])(account, market.id);
            setSuccess("Reward claimed successfully!");
        } catch (err) {
            setError(err?.message || "Failed to claim reward.");
        } finally{
            setClaimLoading(false);
        }
    };
    const getStatusBadge = ()=>{
        if (closed) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StatusBadge, {
                $color: market.result === "yes" ? "green" : "red",
                children: [
                    market.result === "yes" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaCheckCircle"], {}, void 0, false, {
                        fileName: "[project]/src/screens/MarketDetailScreen.tsx",
                        lineNumber: 192,
                        columnNumber: 38
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaTimesCircle"], {}, void 0, false, {
                        fileName: "[project]/src/screens/MarketDetailScreen.tsx",
                        lineNumber: 192,
                        columnNumber: 58
                    }, this),
                    " ",
                    market.result === "yes" ? "Yes Won" : "No Won"
                ]
            }, void 0, true, {
                fileName: "[project]/src/screens/MarketDetailScreen.tsx",
                lineNumber: 191,
                columnNumber: 9
            }, this);
        }
        if (!closed) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StatusBadge, {
                $color: "blue",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaClock"], {}, void 0, false, {
                        fileName: "[project]/src/screens/MarketDetailScreen.tsx",
                        lineNumber: 199,
                        columnNumber: 11
                    }, this),
                    " Open"
                ]
            }, void 0, true, {
                fileName: "[project]/src/screens/MarketDetailScreen.tsx",
                lineNumber: 198,
                columnNumber: 9
            }, this);
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StatusBadge, {
            $color: "gray",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaClock"], {}, void 0, false, {
                    fileName: "[project]/src/screens/MarketDetailScreen.tsx",
                    lineNumber: 205,
                    columnNumber: 9
                }, this),
                " Closed"
            ]
        }, void 0, true, {
            fileName: "[project]/src/screens/MarketDetailScreen.tsx",
            lineNumber: 204,
            columnNumber: 7
        }, this);
    };
    const handleCommentSubmit = (e)=>{
        e.preventDefault();
        const sanitized = escapeHtml(commentInput.trim());
        if (!sanitized) return;
        setComments([
            ...comments,
            {
                id: Date.now(),
                user: "DemoUser",
                text: sanitized,
                date: new Date().toLocaleString()
            }
        ]);
        setCommentInput("");
    };
    // Simple donut chart for Yes/No ratio
    function PieChart({ yes, no }) {
        const total = yes + no;
        const yesPct = total > 0 ? yes / total * 100 : 50;
        const noPct = 100 - yesPct;
        const yesAngle = yesPct / 100 * 360;
        const noAngle = 360 - yesAngle;
        // Yes arc: start at -90, end at -90+yesAngle
        const yesArc = yesPct > 0 ? describeArc(70, 70, 50, -90, -90 + yesAngle) : '';
        // No arc: start at -90+yesAngle, end at 270
        const noArc = noPct > 0 ? describeArc(70, 70, 50, -90 + yesAngle, 270) : '';
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PieChartWrapper, {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    width: "140",
                    height: "140",
                    viewBox: "0 0 140 140",
                    children: [
                        noArc && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: noArc,
                            fill: "none",
                            stroke: "#EF4444",
                            strokeWidth: "18",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }, void 0, false, {
                            fileName: "[project]/src/screens/MarketDetailScreen.tsx",
                            lineNumber: 242,
                            columnNumber: 13
                        }, this),
                        yesArc && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: yesArc,
                            fill: "none",
                            stroke: "#10B981",
                            strokeWidth: "18",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }, void 0, false, {
                            fileName: "[project]/src/screens/MarketDetailScreen.tsx",
                            lineNumber: 253,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: "70",
                            y: "80",
                            textAnchor: "middle",
                            fontSize: "24",
                            fontWeight: "700",
                            fill: "#fff",
                            children: total === 0 ? '—' : `${Math.round(yesPct)}%`
                        }, void 0, false, {
                            fileName: "[project]/src/screens/MarketDetailScreen.tsx",
                            lineNumber: 263,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/screens/MarketDetailScreen.tsx",
                    lineNumber: 239,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PieLegend, {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PieDot, {
                            color: "#10B981"
                        }, void 0, false, {
                            fileName: "[project]/src/screens/MarketDetailScreen.tsx",
                            lineNumber: 275,
                            columnNumber: 11
                        }, this),
                        " Yes",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PieDot, {
                            color: "#EF4444",
                            style: {
                                marginLeft: 14
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/screens/MarketDetailScreen.tsx",
                            lineNumber: 276,
                            columnNumber: 11
                        }, this),
                        " No"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/screens/MarketDetailScreen.tsx",
                    lineNumber: 274,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/screens/MarketDetailScreen.tsx",
            lineNumber: 238,
            columnNumber: 7
        }, this);
    }
    // Helper: SVG arc path
    function describeArc(cx, cy, r, startAngle, endAngle) {
        const start = polarToCartesian(cx, cy, r, endAngle);
        const end = polarToCartesian(cx, cy, r, startAngle);
        const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
        return [
            "M",
            start.x,
            start.y,
            "A",
            r,
            r,
            0,
            largeArcFlag,
            0,
            end.x,
            end.y
        ].join(" ");
    }
    function polarToCartesian(cx, cy, r, angle) {
        const rad = (angle - 90) * Math.PI / 180.0;
        return {
            x: cx + r * Math.cos(rad),
            y: cy + r * Math.sin(rad)
        };
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PageContainer, {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(UnifiedCard, {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(GradientHeader, {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MarketTitle, {
                            children: market.title
                        }, void 0, false, {
                            fileName: "[project]/src/screens/MarketDetailScreen.tsx",
                            lineNumber: 304,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MarketDesc, {
                            children: market.description
                        }, void 0, false, {
                            fileName: "[project]/src/screens/MarketDetailScreen.tsx",
                            lineNumber: 305,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StatusBadgeLarge, {
                            $color: closed ? market.result === "yes" ? "green" : "red" : "blue",
                            children: getStatusBadge()
                        }, void 0, false, {
                            fileName: "[project]/src/screens/MarketDetailScreen.tsx",
                            lineNumber: 306,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/screens/MarketDetailScreen.tsx",
                    lineNumber: 303,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(UnifiedGrid, {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(UnifiedLeft, {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoCards, {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoCard, {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaCoins"], {}, void 0, false, {
                                                    fileName: "[project]/src/screens/MarketDetailScreen.tsx",
                                                    lineNumber: 314,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoCardContent, {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoCardValue, {
                                                            children: [
                                                                totalPool.toFixed(2),
                                                                " APT"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/screens/MarketDetailScreen.tsx",
                                                            lineNumber: 316,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoCardLabel, {
                                                            children: "Total Pool"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/screens/MarketDetailScreen.tsx",
                                                            lineNumber: 317,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/screens/MarketDetailScreen.tsx",
                                                    lineNumber: 315,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/screens/MarketDetailScreen.tsx",
                                            lineNumber: 313,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoCard, {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaUser"], {}, void 0, false, {
                                                    fileName: "[project]/src/screens/MarketDetailScreen.tsx",
                                                    lineNumber: 321,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoCardContent, {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoCardValue, {
                                                            children: totalBets
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/screens/MarketDetailScreen.tsx",
                                                            lineNumber: 323,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoCardLabel, {
                                                            children: "Bets"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/screens/MarketDetailScreen.tsx",
                                                            lineNumber: 324,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/screens/MarketDetailScreen.tsx",
                                                    lineNumber: 322,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/screens/MarketDetailScreen.tsx",
                                            lineNumber: 320,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoCard, {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaCalendarAlt"], {}, void 0, false, {
                                                    fileName: "[project]/src/screens/MarketDetailScreen.tsx",
                                                    lineNumber: 328,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoCardContent, {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoCardValue, {
                                                            children: new Date(closesAt).toLocaleString()
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/screens/MarketDetailScreen.tsx",
                                                            lineNumber: 330,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoCardLabel, {
                                                            children: "Closing"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/screens/MarketDetailScreen.tsx",
                                                            lineNumber: 331,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/screens/MarketDetailScreen.tsx",
                                                    lineNumber: 329,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/screens/MarketDetailScreen.tsx",
                                            lineNumber: 327,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/screens/MarketDetailScreen.tsx",
                                    lineNumber: 312,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(BetStatsRow, {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PieChart, {
                                            yes: totalYes,
                                            no: totalNo
                                        }, void 0, false, {
                                            fileName: "[project]/src/screens/MarketDetailScreen.tsx",
                                            lineNumber: 336,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(BetStat, {
                                            $color: "green",
                                            children: [
                                                "Yes: ",
                                                totalYes.toFixed(4),
                                                " APT"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/screens/MarketDetailScreen.tsx",
                                            lineNumber: 337,
                                            columnNumber: 23
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(BetStat, {
                                            $color: "red",
                                            children: [
                                                "No: ",
                                                totalNo.toFixed(4),
                                                " APT"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/screens/MarketDetailScreen.tsx",
                                            lineNumber: 338,
                                            columnNumber: 9
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/screens/MarketDetailScreen.tsx",
                                    lineNumber: 335,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/screens/MarketDetailScreen.tsx",
                            lineNumber: 311,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(UnifiedRight, {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ShadowBox, {
                                    children: [
                                        !closed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(BetForm, {
                                            onSubmit: handleBet,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FormRow, {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FormCol, {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FormLabel, {
                                                                    children: "Bet Amount (APT)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/screens/MarketDetailScreen.tsx",
                                                                    lineNumber: 347,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FormInput, {
                                                                    type: "number",
                                                                    step: "0.001",
                                                                    min: MIN_BET,
                                                                    max: MAX_BET,
                                                                    value: amount,
                                                                    onChange: (e)=>{
                                                                        const val = Number(e.target.value);
                                                                        setAmount(e.target.value);
                                                                        if (val < MIN_BET) setError(`Minimum bet is ${MIN_BET} APT`);
                                                                        else if (val > MAX_BET) setError(`Maximum bet is ${MAX_BET} APT`);
                                                                        else setError("");
                                                                    },
                                                                    required: true
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/screens/MarketDetailScreen.tsx",
                                                                    lineNumber: 348,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/screens/MarketDetailScreen.tsx",
                                                            lineNumber: 346,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FormCol, {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FormLabel, {
                                                                    children: "Side"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/screens/MarketDetailScreen.tsx",
                                                                    lineNumber: 365,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SideButtonRow, {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SideButton, {
                                                                            type: "button",
                                                                            $active: side === "yes",
                                                                            $side: "yes",
                                                                            onClick: ()=>setSide("yes"),
                                                                            children: "Yes"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/screens/MarketDetailScreen.tsx",
                                                                            lineNumber: 367,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SideButton, {
                                                                            type: "button",
                                                                            $active: side === "no",
                                                                            $side: "no",
                                                                            onClick: ()=>setSide("no"),
                                                                            children: "No"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/screens/MarketDetailScreen.tsx",
                                                                            lineNumber: 368,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/screens/MarketDetailScreen.tsx",
                                                                    lineNumber: 366,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/screens/MarketDetailScreen.tsx",
                                                            lineNumber: 364,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/screens/MarketDetailScreen.tsx",
                                                    lineNumber: 345,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "range",
                                                    min: MIN_BET,
                                                    max: MAX_BET,
                                                    step: 0.001,
                                                    value: Number(amount),
                                                    onChange: (e)=>{
                                                        setAmount(e.target.value);
                                                        setError("");
                                                    },
                                                    style: {
                                                        width: '100%',
                                                        margin: '8px 0'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/screens/MarketDetailScreen.tsx",
                                                    lineNumber: 372,
                                                    columnNumber: 19
                                                }, this),
                                                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ErrorBox, {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaTimesCircle"], {}, void 0, false, {
                                                            fileName: "[project]/src/screens/MarketDetailScreen.tsx",
                                                            lineNumber: 384,
                                                            columnNumber: 39
                                                        }, this),
                                                        " ",
                                                        error
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/screens/MarketDetailScreen.tsx",
                                                    lineNumber: 384,
                                                    columnNumber: 29
                                                }, this),
                                                success && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SuccessBox, {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaCheckCircle"], {}, void 0, false, {
                                                            fileName: "[project]/src/screens/MarketDetailScreen.tsx",
                                                            lineNumber: 385,
                                                            columnNumber: 43
                                                        }, this),
                                                        " ",
                                                        success
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/screens/MarketDetailScreen.tsx",
                                                    lineNumber: 385,
                                                    columnNumber: 31
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SubmitButton, {
                                                    type: "submit",
                                                    disabled: !!error || loading,
                                                    children: loading ? "Placing..." : "Place Bet"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/screens/MarketDetailScreen.tsx",
                                                    lineNumber: 386,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/screens/MarketDetailScreen.tsx",
                                            lineNumber: 344,
                                            columnNumber: 17
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ClosedText, {
                                            children: "Market closed."
                                        }, void 0, false, {
                                            fileName: "[project]/src/screens/MarketDetailScreen.tsx",
                                            lineNumber: 389,
                                            columnNumber: 17
                                        }, this),
                                        closed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ResolvedBox, {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaTrophy"], {}, void 0, false, {
                                                        fileName: "[project]/src/screens/MarketDetailScreen.tsx",
                                                        lineNumber: 395,
                                                        columnNumber: 21
                                                    }, this),
                                                    " Result: ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                        children: market.result === "yes" ? "Yes" : "No"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/screens/MarketDetailScreen.tsx",
                                                        lineNumber: 395,
                                                        columnNumber: 42
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/screens/MarketDetailScreen.tsx",
                                                lineNumber: 394,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false),
                                        !closed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(OracleBox, {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(OracleLabel, {
                                                    children: "Set Market Result (Demo Oracle)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/screens/MarketDetailScreen.tsx",
                                                    lineNumber: 413,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(OracleButton, {
                                                    onClick: handleCloseMarket,
                                                    disabled: closeLoading,
                                                    children: closeLoading ? "Closing..." : "Close Market"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/screens/MarketDetailScreen.tsx",
                                                    lineNumber: 414,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/screens/MarketDetailScreen.tsx",
                                            lineNumber: 412,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/screens/MarketDetailScreen.tsx",
                                    lineNumber: 342,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ShadowBox, {
                                    style: {
                                        marginTop: 32
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(BetsList, {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(BetsTitle, {
                                                children: "Bets"
                                            }, void 0, false, {
                                                fileName: "[project]/src/screens/MarketDetailScreen.tsx",
                                                lineNumber: 420,
                                                columnNumber: 17
                                            }, this),
                                            (market.yes_bets?.length || 0) + (market.no_bets?.length || 0) === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NoBets, {
                                                children: "No bets yet."
                                            }, void 0, false, {
                                                fileName: "[project]/src/screens/MarketDetailScreen.tsx",
                                                lineNumber: 421,
                                                columnNumber: 90
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(BetsTable, {
                                                children: [
                                                    (market.yes_bets || []).map((bet)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(BetRow, {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(BetSideBadge, {
                                                                    $side: "yes",
                                                                    children: "YES"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/screens/MarketDetailScreen.tsx",
                                                                    lineNumber: 425,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(BetAmount, {
                                                                    children: [
                                                                        bet.amount / 1e8,
                                                                        " APT"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/screens/MarketDetailScreen.tsx",
                                                                    lineNumber: 426,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(BetDate, {
                                                                    children: new Date(bet.timestamp * 1000).toLocaleString()
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/screens/MarketDetailScreen.tsx",
                                                                    lineNumber: 427,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, bet.id, true, {
                                                            fileName: "[project]/src/screens/MarketDetailScreen.tsx",
                                                            lineNumber: 424,
                                                            columnNumber: 21
                                                        }, this)),
                                                    (market.no_bets || []).map((bet)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(BetRow, {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(BetSideBadge, {
                                                                    $side: "no",
                                                                    children: "NO"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/screens/MarketDetailScreen.tsx",
                                                                    lineNumber: 432,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(BetAmount, {
                                                                    children: [
                                                                        bet.amount / 1e8,
                                                                        " APT"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/screens/MarketDetailScreen.tsx",
                                                                    lineNumber: 433,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(BetDate, {
                                                                    children: new Date(bet.timestamp * 1000).toLocaleString()
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/screens/MarketDetailScreen.tsx",
                                                                    lineNumber: 434,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, bet.id, true, {
                                                            fileName: "[project]/src/screens/MarketDetailScreen.tsx",
                                                            lineNumber: 431,
                                                            columnNumber: 21
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/screens/MarketDetailScreen.tsx",
                                                lineNumber: 422,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/screens/MarketDetailScreen.tsx",
                                        lineNumber: 419,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/screens/MarketDetailScreen.tsx",
                                    lineNumber: 418,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/screens/MarketDetailScreen.tsx",
                            lineNumber: 341,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/screens/MarketDetailScreen.tsx",
                    lineNumber: 310,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CommentsSection, {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CommentsTitle, {
                            children: "Comments"
                        }, void 0, false, {
                            fileName: "[project]/src/screens/MarketDetailScreen.tsx",
                            lineNumber: 443,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CommentsList, {
                            children: comments.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CommentItem, {
                                    className: "fade-in",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CommentUser, {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaUserCircle"], {
                                                    style: {
                                                        marginRight: 6,
                                                        fontSize: 18
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/screens/MarketDetailScreen.tsx",
                                                    lineNumber: 447,
                                                    columnNumber: 30
                                                }, this),
                                                escapeHtml(c.user)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/screens/MarketDetailScreen.tsx",
                                            lineNumber: 447,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CommentText, {
                                            children: escapeHtml(c.text)
                                        }, void 0, false, {
                                            fileName: "[project]/src/screens/MarketDetailScreen.tsx",
                                            lineNumber: 448,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CommentDate, {
                                            children: escapeHtml(c.date)
                                        }, void 0, false, {
                                            fileName: "[project]/src/screens/MarketDetailScreen.tsx",
                                            lineNumber: 449,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, c.id, true, {
                                    fileName: "[project]/src/screens/MarketDetailScreen.tsx",
                                    lineNumber: 446,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/screens/MarketDetailScreen.tsx",
                            lineNumber: 444,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CommentForm, {
                            onSubmit: handleCommentSubmit,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CommentInput, {
                                    value: commentInput,
                                    onChange: (e)=>setCommentInput(e.target.value.slice(0, 200)),
                                    placeholder: "Write a comment...",
                                    maxLength: 200
                                }, void 0, false, {
                                    fileName: "[project]/src/screens/MarketDetailScreen.tsx",
                                    lineNumber: 454,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CommentButton, {
                                    type: "submit",
                                    disabled: !commentInput.trim(),
                                    children: "Send"
                                }, void 0, false, {
                                    fileName: "[project]/src/screens/MarketDetailScreen.tsx",
                                    lineNumber: 460,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/screens/MarketDetailScreen.tsx",
                            lineNumber: 453,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/screens/MarketDetailScreen.tsx",
                    lineNumber: 442,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/screens/MarketDetailScreen.tsx",
            lineNumber: 302,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/screens/MarketDetailScreen.tsx",
        lineNumber: 301,
        columnNumber: 5
    }, this);
}
const PageContainer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  max-width: 1100px;
  margin: 40px auto 0 auto;
  padding: 0 12px 40px 12px;
`;
const UnifiedCard = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  background: ${({ theme })=>theme.colors.card};
  border-radius: 18px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  padding: 0 0 40px 0;
  margin-bottom: 32px;
  border: 2px solid ${({ theme })=>theme.colors.border};
`;
const GradientHeader = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  background: ${({ theme })=>theme.colors.card};
  border-radius: 18px 18px 0 0;
  padding: 40px 48px 22px 48px;
  text-align: left;
`;
const MarketTitle = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].h1`
  color: ${({ theme })=>theme.colors.primary};
  font-size: 1.35rem;
  font-weight: 700;
  margin: 0 0 10px 0;
`;
const MarketDesc = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].p`
  color: ${({ theme })=>theme.colors.textSecondary};
  font-size: 1.05rem;
  margin: 0 0 8px 0;
`;
const StatusBadgeLarge = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 18px;
  border-radius: 16px;
  font-size: 1rem;
  font-weight: 600;
  background: ${({ $color, theme })=>$color === "green" ? `${theme.colors.accentGreen}10` : $color === "red" ? `${theme.colors.accentRed}10` : $color === "blue" ? `${theme.colors.primary}10` : `${theme.colors.textSecondary}10`};
  color: ${({ $color, theme })=>$color === "green" ? theme.colors.accentGreen : $color === "red" ? theme.colors.accentRed : $color === "blue" ? theme.colors.primary : theme.colors.textSecondary};
  margin-top: 10px;
  box-shadow: none;
`;
const UnifiedGrid = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  display: flex;
  flex-direction: column;
  gap: 0;
  @media (min-width: 900px) {
    flex-direction: row;
    gap: 48px;
  }
  padding: 0 48px;
`;
const UnifiedLeft = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  flex: 1.1;
  min-width: 0;
  margin-top: 18px;
`;
const UnifiedRight = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  flex: 1;
  min-width: 0;
  margin-top: 18px;
`;
const InfoCards = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  display: flex;
  gap: 14px;
  margin-bottom: 18px;
  flex-wrap: wrap;
`;
const InfoCard = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  display: flex;
  align-items: center;
  gap: 8px;
  background: ${({ theme })=>theme.colors.background};
  border-radius: 10px;
  box-shadow: none;
  border: 2px solid ${({ theme })=>theme.colors.border};
  padding: 12px 16px;
  min-width: 120px;
  flex: 1;
`;
const InfoCardContent = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  display: flex;
  flex-direction: column;
`;
const InfoCardValue = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  color: ${({ theme })=>theme.colors.primary};
  font-size: 1.05rem;
  font-weight: 700;
`;
const InfoCardLabel = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  color: ${({ theme })=>theme.colors.textSecondary};
  font-size: 0.95rem;
  font-weight: 500;
`;
const ShadowBox = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  background: ${({ theme })=>theme.colors.background};
  border-radius: 12px;
  box-shadow: none;
  border: 2px solid ${({ theme })=>theme.colors.border};
  padding: 18px 14px 14px 14px;
  margin-bottom: 8px;
`;
const SideButtonRow = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  display: flex;
  gap: 8px;
`;
const SideButton = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].button`
  flex: 1;
  background: ${({ $active, $side, theme })=>$active ? $side === "yes" ? theme.colors.accentGreen : theme.colors.accentRed : theme.colors.background};
  color: ${({ $active, theme })=>$active ? "#fff" : theme.colors.textSecondary};
  border: 1.5px solid ${({ theme, $active, $side })=>$active ? $side === "yes" ? theme.colors.accentGreen : theme.colors.accentRed : theme.colors.border};
  border-radius: 8px;
  padding: 8px 0;
  font-weight: 700;
  font-size: 15px;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
  box-shadow: none;
  &:hover {
    background: ${({ $side, theme })=>$side === "yes" ? theme.colors.accentGreen : theme.colors.accentRed};
    color: #fff;
  }
`;
const BetStatsRow = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  display: flex;
  gap: 12px;
  margin-bottom: 10px;
`;
const BetStat = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  color: ${({ $color, theme })=>$color === "green" ? theme.colors.accentGreen : theme.colors.accentRed};
  font-size: 1rem;
  font-weight: 700;
`;
const BetForm = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].form`
  background: none;
  border-radius: 10px;
  padding: 0;
  margin-bottom: 12px;
  box-shadow: none;
`;
const FormRow = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  display: flex;
  gap: 10px;
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 6px;
  }
`;
const FormCol = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  flex: 1;
`;
const FormLabel = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].label`
  color: ${({ theme })=>theme.colors.textSecondary};
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 4px;
  display: block;
`;
const FormInput = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].input`
  width: 100%;
  padding: 8px 10px;
  border-radius: 8px;
  border: 1.5px solid ${({ theme })=>theme.colors.border};
  background: ${({ theme })=>theme.colors.background};
  color: ${({ theme })=>theme.colors.text};
  font-size: 15px;
  margin-bottom: 2px;
  transition: border 0.2s;
  &:focus {
    outline: none;
    border-color: ${({ theme })=>theme.colors.primary};
    box-shadow: none;
  }
`;
const ClosedText = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  color: ${({ theme })=>theme.colors.accentRed};
  font-weight: bold;
  margin: 12px 0;
`;
const ResolvedBox = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  background: ${({ theme })=>theme.colors.secondary};
  color: ${({ theme })=>theme.colors.primary};
  padding: 14px 18px;
  border-radius: 12px;
  margin-bottom: 12px;
  font-size: 18px;
  display: flex;
  align-items: center;
  gap: 10px;
`;
const ClaimBox = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  background: ${({ theme })=>theme.colors.background};
  color: ${({ theme })=>theme.colors.accentGreen};
  padding: 14px 18px;
  border-radius: 12px;
  margin-bottom: 8px;
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 16px;
`;
const ClaimButton = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].button`
  background: ${({ theme })=>theme.colors.accentGreen};
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 8px 20px;
  font-weight: bold;
  cursor: pointer;
`;
const ClaimedText = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  color: ${({ theme })=>theme.colors.textSecondary};
  font-size: 15px;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
`;
const OracleBox = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  margin: 24px 0 8px 0;
  display: flex;
  align-items: center;
  gap: 12px;
`;
const OracleLabel = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].span`
  color: ${({ theme })=>theme.colors.textSecondary};
  font-size: 14px;
`;
const OracleButton = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].button`
  background: ${({ theme })=>theme.colors.primary};
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 8px 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: ${({ theme })=>theme.colors.accentGreen};
  }
`;
const BetsList = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  margin-top: 18px;
`;
const BetsTitle = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].h3`
  color: ${({ theme })=>theme.colors.primary};
  margin-bottom: 6px;
  font-size: 1.1rem;
`;
const NoBets = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  color: ${({ theme })=>theme.colors.textSecondary};
  font-size: 14px;
`;
const BetsTable = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  display: flex;
  flex-direction: column;
  gap: 0;
`;
const BetRow = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 0;
  border-bottom: 1px solid ${({ theme })=>theme.colors.border};
  font-size: 15px;
  &:hover {
    background: ${({ theme })=>theme.colors.background};
  }
`;
const BetSideBadge = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].span`
  background: ${({ $side, theme })=>$side === "yes" ? `${theme.colors.accentGreen}10` : `${theme.colors.accentRed}10`};
  color: ${({ $side, theme })=>$side === "yes" ? theme.colors.accentGreen : theme.colors.accentRed};
  font-weight: 700;
  padding: 3px 10px;
  border-radius: 12px;
  font-size: 13px;
  text-transform: uppercase;
`;
const BetAmount = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].span`
  color: ${({ theme })=>theme.colors.primary};
  font-weight: 700;
  min-width: 60px;
`;
const BetDate = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].span`
  color: ${({ theme })=>theme.colors.textSecondary};
  font-size: 13px;
`;
const CommentsSection = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  margin-top: 48px;
  padding-top: 32px;
  border-top: 1px solid ${({ theme })=>theme.colors.border};
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;
const CommentsTitle = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].h3`
  color: ${({ theme })=>theme.colors.primary};
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 18px;
`;
const CommentsList = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-bottom: 18px;
`;
const CommentItem = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  background: ${({ theme })=>theme.colors.background};
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
const CommentUser = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].span`
  color: ${({ theme })=>theme.colors.primary};
  font-weight: 600;
  font-size: 1rem;
`;
const CommentText = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].span`
  color: ${({ theme })=>theme.colors.text};
  font-size: 1.08rem;
  margin: 4px 0 2px 0;
`;
const CommentDate = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].span`
  color: ${({ theme })=>theme.colors.textSecondary};
  font-size: 0.92rem;
  margin-top: 2px;
`;
const CommentForm = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].form`
  display: flex;
  gap: 12px;
  margin-top: 8px;
`;
const CommentInput = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].input`
  flex: 1;
  padding: 12px 16px;
  border-radius: 10px;
  border: 2px solid ${({ theme })=>theme.colors.border};
  background: ${({ theme })=>theme.colors.background};
  color: ${({ theme })=>theme.colors.text};
  font-size: 1rem;
  &:focus {
    outline: none;
    border-color: ${({ theme })=>theme.colors.primary};
    box-shadow: 0 0 0 2px ${({ theme })=>`${theme.colors.primary}20`};
  }
`;
const CommentButton = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].button`
  background: ${({ theme, disabled })=>disabled ? theme.colors.textSecondary : theme.colors.primary};
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 0 24px;
  font-size: 1rem;
  font-weight: 600;
  cursor: ${({ disabled })=>disabled ? 'not-allowed' : 'pointer'};
  transition: background 0.2s;
  &:hover:not(:disabled) {
    background: ${({ theme })=>theme.colors.accentGreen};
  }
`;
// Yorum fade-in animasyonu
const fadeInKeyframes = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: none; }
  }
`;
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
}
const StatusBadge = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  background: ${({ $color, theme })=>$color === "green" ? `${theme.colors.accentGreen}20` : $color === "red" ? `${theme.colors.accentRed}20` : $color === "blue" ? `${theme.colors.primary}20` : `${theme.colors.textSecondary}20`};
  color: ${({ $color, theme })=>$color === "green" ? theme.colors.accentGreen : $color === "red" ? theme.colors.accentRed : $color === "blue" ? theme.colors.primary : theme.colors.textSecondary};
  svg {
    font-size: 14px;
  }
`;
const SubmitButton = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].button`
  width: 100%;
  background: ${({ theme })=>theme.colors.primary};
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
    background: ${({ theme })=>theme.colors.accentGreen};
  }
`;
const ErrorBox = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 14px 18px;
  background: ${({ theme })=>`${theme.colors.accentRed}10`};
  border: 1px solid ${({ theme })=>theme.colors.accentRed};
  border-radius: 12px;
  color: ${({ theme })=>theme.colors.accentRed};
  font-size: 15px;
  margin-bottom: 10px;
`;
const SuccessBox = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 14px 18px;
  background: ${({ theme })=>`${theme.colors.accentGreen}10`};
  border: 1px solid ${({ theme })=>theme.colors.accentGreen};
  border-radius: 12px;
  color: ${({ theme })=>theme.colors.accentGreen};
  font-size: 15px;
  margin-bottom: 10px;
`;
}}),
"[project]/src/app/market/[id]/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>MarketDetailPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$screens$2f$MarketDetailScreen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/screens/MarketDetailScreen.tsx [app-ssr] (ecmascript)");
"use client";
;
;
function MarketDetailPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$screens$2f$MarketDetailScreen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/src/app/market/[id]/page.tsx",
        lineNumber: 5,
        columnNumber: 10
    }, this);
}
}}),

};

//# sourceMappingURL=src_14e454ec._.js.map
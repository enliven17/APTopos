(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/config/aptosConfig.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "MODULE_ADDRESS": (()=>MODULE_ADDRESS),
    "aptosConfig": (()=>aptosConfig)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@aptos-labs/ts-sdk/dist/esm/index.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$Y7ZQTLH4$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a__as__AptosConfig$3e$__ = __turbopack_context__.i("[project]/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-Y7ZQTLH4.mjs [app-client] (ecmascript) <export a as AptosConfig>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$4RXKALLC$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__f__as__Network$3e$__ = __turbopack_context__.i("[project]/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-4RXKALLC.mjs [app-client] (ecmascript) <export f as Network>");
;
const aptosConfig = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$Y7ZQTLH4$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a__as__AptosConfig$3e$__["AptosConfig"]({
    network: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$4RXKALLC$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__f__as__Network$3e$__["Network"].TESTNET
});
const MODULE_ADDRESS = "0x6010ec52c45f2a2b1599cce4078a822d0fe70e4830f990c3e48bc49ba721b410";
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/api/betting.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "claimReward": (()=>claimReward),
    "closeMarket": (()=>closeMarket),
    "createMarket": (()=>createMarket),
    "getMarkets": (()=>getMarkets),
    "placeBet": (()=>placeBet)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@aptos-labs/ts-sdk/dist/esm/index.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GXDOOLCG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__je__as__Aptos$3e$__ = __turbopack_context__.i("[project]/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-GXDOOLCG.mjs [app-client] (ecmascript) <export je as Aptos>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$aptosConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/aptosConfig.ts [app-client] (ecmascript)");
;
;
const aptos = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GXDOOLCG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__je__as__Aptos$3e$__["Aptos"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$aptosConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["aptosConfig"]);
// Helper: get full module name
const MODULE = `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$aptosConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MODULE_ADDRESS"]}::betting`;
const NODE_URL = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$aptosConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["aptosConfig"].network === "testnet" ? "https://fullnode.testnet.aptoslabs.com/v1" : "https://fullnode.mainnet.aptoslabs.com/v1";
const MARKETS_RESOURCE = `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$aptosConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MODULE_ADDRESS"]}::betting::Markets`;
async function getMarkets() {
    const url = `${NODE_URL}/accounts/${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$aptosConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MODULE_ADDRESS"]}/resource/${MARKETS_RESOURCE}`;
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/screens/CreateMarketScreen.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>CreateMarketScreen)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aptos$2d$labs$2f$wallet$2d$adapter$2d$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@aptos-labs/wallet-adapter-react/dist/index.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aptos$2d$labs$2f$wallet$2d$adapter$2d$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@aptos-labs/wallet-adapter-react/dist/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$betting$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/api/betting.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function CreateMarketScreen() {
    _s();
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"])();
    const [title, setTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [description, setDescription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [closesAt, setClosesAt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [minBet, setMinBet] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0.01);
    const [maxBet, setMaxBet] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [initialPool, setInitialPool] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0.5);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [success, setSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { account, connected } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aptos$2d$labs$2f$wallet$2d$adapter$2d$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useWallet"])();
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setError("");
        setSuccess("");
        setLoading(true);
        try {
            if (!title.trim() || !description.trim()) {
                setError("Title and description are required.");
                setLoading(false);
                return;
            }
            if (!closesAt) {
                setError("Closing time must be selected.");
                setLoading(false);
                return;
            }
            if (minBet <= 0 || maxBet <= 0 || minBet >= maxBet) {
                setError("Min/max bet limits are invalid.");
                setLoading(false);
                return;
            }
            if (initialPool < 0.1) {
                setError("Initial pool must be at least 0.1 APT.");
                setLoading(false);
                return;
            }
            if (!connected || !account?.address) {
                setError("Wallet is not connected.");
                setLoading(false);
                return;
            }
            const closesAtTimestamp = Math.floor(new Date(closesAt).getTime() / 1000); // seconds
            if (closesAtTimestamp < Date.now() / 1000 + 3600) {
                setError("Closing time must be at least 1 hour from now.");
                setLoading(false);
                return;
            }
            // Zincire market oluşturma işlemi
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$betting$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createMarket"])(account);
            setSuccess("Market created successfully! It may take a few seconds to appear on-chain.");
            setTitle("");
            setDescription("");
            setClosesAt("");
            setMinBet(0.01);
            setMaxBet(1);
            setInitialPool(0.5);
        } catch (err) {
            setError(err?.message || "Failed to create market. Please try again.");
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Container, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Header, {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HeaderIcon, {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaPlus"], {}, void 0, false, {
                            fileName: "[project]/src/screens/CreateMarketScreen.tsx",
                            lineNumber: 82,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/screens/CreateMarketScreen.tsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HeaderContent, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Title, {
                                children: "Create New Market"
                            }, void 0, false, {
                                fileName: "[project]/src/screens/CreateMarketScreen.tsx",
                                lineNumber: 85,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Subtitle, {
                                children: "Start a new prediction market and let users bet on outcomes"
                            }, void 0, false, {
                                fileName: "[project]/src/screens/CreateMarketScreen.tsx",
                                lineNumber: 86,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/screens/CreateMarketScreen.tsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/screens/CreateMarketScreen.tsx",
                lineNumber: 80,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Form, {
                onSubmit: handleSubmit,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormSection, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionTitle, {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaInfoCircle"], {}, void 0, false, {
                                        fileName: "[project]/src/screens/CreateMarketScreen.tsx",
                                        lineNumber: 93,
                                        columnNumber: 13
                                    }, this),
                                    "Market Information"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/screens/CreateMarketScreen.tsx",
                                lineNumber: 92,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormGroup, {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Label, {
                                        children: "Market Title"
                                    }, void 0, false, {
                                        fileName: "[project]/src/screens/CreateMarketScreen.tsx",
                                        lineNumber: 98,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                                        value: title,
                                        onChange: (e)=>setTitle(e.target.value),
                                        placeholder: "e.g., Will Bitcoin reach $100k by end of year?",
                                        required: true
                                    }, void 0, false, {
                                        fileName: "[project]/src/screens/CreateMarketScreen.tsx",
                                        lineNumber: 99,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/screens/CreateMarketScreen.tsx",
                                lineNumber: 97,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormGroup, {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Label, {
                                        children: "Description"
                                    }, void 0, false, {
                                        fileName: "[project]/src/screens/CreateMarketScreen.tsx",
                                        lineNumber: 108,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TextArea, {
                                        value: description,
                                        onChange: (e)=>setDescription(e.target.value),
                                        placeholder: "Provide a clear description of what users are betting on...",
                                        required: true
                                    }, void 0, false, {
                                        fileName: "[project]/src/screens/CreateMarketScreen.tsx",
                                        lineNumber: 109,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/screens/CreateMarketScreen.tsx",
                                lineNumber: 107,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/screens/CreateMarketScreen.tsx",
                        lineNumber: 91,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormSection, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionTitle, {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaCalendarAlt"], {}, void 0, false, {
                                        fileName: "[project]/src/screens/CreateMarketScreen.tsx",
                                        lineNumber: 120,
                                        columnNumber: 13
                                    }, this),
                                    "Market Settings"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/screens/CreateMarketScreen.tsx",
                                lineNumber: 119,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormGroup, {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Label, {
                                        children: "Closing Time"
                                    }, void 0, false, {
                                        fileName: "[project]/src/screens/CreateMarketScreen.tsx",
                                        lineNumber: 125,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                                        type: "datetime-local",
                                        value: closesAt,
                                        onChange: (e)=>setClosesAt(e.target.value),
                                        required: true
                                    }, void 0, false, {
                                        fileName: "[project]/src/screens/CreateMarketScreen.tsx",
                                        lineNumber: 126,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HelpText, {
                                        children: "Market will close at this time and no more bets will be accepted"
                                    }, void 0, false, {
                                        fileName: "[project]/src/screens/CreateMarketScreen.tsx",
                                        lineNumber: 132,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/screens/CreateMarketScreen.tsx",
                                lineNumber: 124,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BetLimitsRow, {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormGroup, {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Label, {
                                                children: "Minimum Bet (APT)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/screens/CreateMarketScreen.tsx",
                                                lineNumber: 137,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                                                type: "number",
                                                step: "0.01",
                                                min: 0.01,
                                                value: minBet,
                                                onChange: (e)=>setMinBet(Number(e.target.value)),
                                                required: true
                                            }, void 0, false, {
                                                fileName: "[project]/src/screens/CreateMarketScreen.tsx",
                                                lineNumber: 138,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/screens/CreateMarketScreen.tsx",
                                        lineNumber: 136,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormGroup, {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Label, {
                                                children: "Maximum Bet (APT)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/screens/CreateMarketScreen.tsx",
                                                lineNumber: 149,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                                                type: "number",
                                                step: "0.01",
                                                min: 0.01,
                                                value: maxBet,
                                                onChange: (e)=>setMaxBet(Number(e.target.value)),
                                                required: true
                                            }, void 0, false, {
                                                fileName: "[project]/src/screens/CreateMarketScreen.tsx",
                                                lineNumber: 150,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/screens/CreateMarketScreen.tsx",
                                        lineNumber: 148,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/screens/CreateMarketScreen.tsx",
                                lineNumber: 135,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BetLimitsInfo, {
                                children: "Minimum bet must be at least 0.001 APT and maximum bet cannot exceed 5 APT. The values you select must be within this range."
                            }, void 0, false, {
                                fileName: "[project]/src/screens/CreateMarketScreen.tsx",
                                lineNumber: 160,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/screens/CreateMarketScreen.tsx",
                        lineNumber: 118,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormSection, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionTitle, {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaCoins"], {}, void 0, false, {
                                        fileName: "[project]/src/screens/CreateMarketScreen.tsx",
                                        lineNumber: 167,
                                        columnNumber: 13
                                    }, this),
                                    "Pool Configuration"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/screens/CreateMarketScreen.tsx",
                                lineNumber: 166,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormGroup, {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Label, {
                                        children: "Initial Pool (APT)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/screens/CreateMarketScreen.tsx",
                                        lineNumber: 172,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                                        type: "number",
                                        step: "0.01",
                                        min: 0.1,
                                        value: initialPool,
                                        onChange: (e)=>setInitialPool(Number(e.target.value)),
                                        required: true
                                    }, void 0, false, {
                                        fileName: "[project]/src/screens/CreateMarketScreen.tsx",
                                        lineNumber: 173,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HelpText, {
                                        children: "Starting amount in the betting pool"
                                    }, void 0, false, {
                                        fileName: "[project]/src/screens/CreateMarketScreen.tsx",
                                        lineNumber: 181,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/screens/CreateMarketScreen.tsx",
                                lineNumber: 171,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/screens/CreateMarketScreen.tsx",
                        lineNumber: 165,
                        columnNumber: 9
                    }, this),
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ErrorContainer, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ErrorIcon, {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaExclamationTriangle"], {}, void 0, false, {
                                    fileName: "[project]/src/screens/CreateMarketScreen.tsx",
                                    lineNumber: 188,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/screens/CreateMarketScreen.tsx",
                                lineNumber: 187,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ErrorText, {
                                children: error
                            }, void 0, false, {
                                fileName: "[project]/src/screens/CreateMarketScreen.tsx",
                                lineNumber: 190,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/screens/CreateMarketScreen.tsx",
                        lineNumber: 186,
                        columnNumber: 11
                    }, this),
                    success && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SuccessContainer, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SuccessIcon, {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaCheckCircle"], {}, void 0, false, {
                                    fileName: "[project]/src/screens/CreateMarketScreen.tsx",
                                    lineNumber: 197,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/screens/CreateMarketScreen.tsx",
                                lineNumber: 196,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SuccessText, {
                                children: success
                            }, void 0, false, {
                                fileName: "[project]/src/screens/CreateMarketScreen.tsx",
                                lineNumber: 199,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/screens/CreateMarketScreen.tsx",
                        lineNumber: 195,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SubmitButton, {
                        type: "submit",
                        disabled: !connected || loading,
                        children: loading ? "Creating..." : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaPlus"], {}, void 0, false, {
                                    fileName: "[project]/src/screens/CreateMarketScreen.tsx",
                                    lineNumber: 204,
                                    columnNumber: 41
                                }, this),
                                " Create Market"
                            ]
                        }, void 0, true)
                    }, void 0, false, {
                        fileName: "[project]/src/screens/CreateMarketScreen.tsx",
                        lineNumber: 203,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoBox, {
                        children: "Newly created markets must first be approved before going live. If your market is not approved, the APT you provided for the pool will be refunded to your wallet."
                    }, void 0, false, {
                        fileName: "[project]/src/screens/CreateMarketScreen.tsx",
                        lineNumber: 206,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/screens/CreateMarketScreen.tsx",
                lineNumber: 90,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/screens/CreateMarketScreen.tsx",
        lineNumber: 79,
        columnNumber: 5
    }, this);
}
_s(CreateMarketScreen, "cGDKcWfCuVVTIXV3RXChytFuuJc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aptos$2d$labs$2f$wallet$2d$adapter$2d$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useWallet"]
    ];
});
_c = CreateMarketScreen;
const Container = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div`
  max-width: 800px;
  margin: 32px auto;
  padding: 0 24px;
  @media (max-width: 600px) {
    padding: 0 16px;
    margin: 16px auto;
  }
`;
_c1 = Container;
const Header = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 32px;
  padding: 32px;
  background: ${({ theme })=>theme.colors.card};
  border-radius: 20px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  @media (max-width: 600px) {
    flex-direction: column;
    text-align: center;
    padding: 24px 20px;
    gap: 16px;
  }
`;
_c2 = Header;
const HeaderIcon = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  background: ${({ theme })=>theme.colors.primary};
  color: white;
  border-radius: 16px;
  font-size: 24px;
  flex-shrink: 0;
  @media (max-width: 600px) {
    width: 50px;
    height: 50px;
    font-size: 20px;
  }
`;
_c3 = HeaderIcon;
const HeaderContent = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div`
  flex: 1;
`;
_c4 = HeaderContent;
const Title = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].h1`
  color: ${({ theme })=>theme.colors.primary};
  font-size: 2rem;
  font-weight: 700;
  margin: 0 0 8px 0;
  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`;
_c5 = Title;
const Subtitle = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].p`
  color: ${({ theme })=>theme.colors.textSecondary};
  font-size: 16px;
  margin: 0;
  line-height: 1.5;
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;
_c6 = Subtitle;
const Form = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
_c7 = Form;
const FormSection = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div`
  background: ${({ theme })=>theme.colors.card};
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  border: 1px solid ${({ theme })=>theme.colors.border};
  @media (max-width: 600px) {
    padding: 24px 20px;
  }
`;
_c8 = FormSection;
const SectionTitle = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].h2`
  color: ${({ theme })=>theme.colors.primary};
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0 0 24px 0;
  display: flex;
  align-items: center;
  gap: 12px;
  
  svg {
    color: ${({ theme })=>theme.colors.primary};
    font-size: 18px;
  }
  
  @media (max-width: 600px) {
    font-size: 1.1rem;
    margin-bottom: 20px;
  }
`;
_c9 = SectionTitle;
const FormGroup = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 20px;
  
  &:last-child {
    margin-bottom: 0;
  }
`;
_c10 = FormGroup;
const Label = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].label`
  color: ${({ theme })=>theme.colors.text};
  font-size: 14px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
`;
_c11 = Label;
const Input = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].input`
  padding: 16px 20px;
  border-radius: 12px;
  border: 2px solid ${({ theme })=>theme.colors.border};
  background: ${({ theme })=>theme.colors.background};
  color: ${({ theme })=>theme.colors.text};
  font-size: 16px;
  transition: all 0.2s;
  
  &:focus {
    outline: none;
    border-color: ${({ theme })=>theme.colors.primary};
    box-shadow: 0 0 0 3px ${({ theme })=>`${theme.colors.primary}20`};
  }
  
  &::placeholder {
    color: ${({ theme })=>theme.colors.textSecondary};
  }
  
  @media (max-width: 600px) {
    padding: 14px 16px;
    font-size: 16px;
  }
`;
_c12 = Input;
const TextArea = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].textarea`
  padding: 16px 20px;
  border-radius: 12px;
  border: 2px solid ${({ theme })=>theme.colors.border};
  background: ${({ theme })=>theme.colors.background};
  color: ${({ theme })=>theme.colors.text};
  font-size: 16px;
  min-height: 120px;
  resize: vertical;
  font-family: inherit;
  transition: all 0.2s;
  
  &:focus {
    outline: none;
    border-color: ${({ theme })=>theme.colors.primary};
    box-shadow: 0 0 0 3px ${({ theme })=>`${theme.colors.primary}20`};
  }
  
  &::placeholder {
    color: ${({ theme })=>theme.colors.textSecondary};
  }
  
  @media (max-width: 600px) {
    padding: 14px 16px;
    font-size: 16px;
    min-height: 100px;
  }
`;
_c13 = TextArea;
const HelpText = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].p`
  color: ${({ theme })=>theme.colors.textSecondary};
  font-size: 12px;
  margin: 4px 0 0 0;
  line-height: 1.4;
`;
_c14 = HelpText;
const BetLimitsRow = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;
_c15 = BetLimitsRow;
const ErrorContainer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 20px;
  background: ${({ theme })=>`${theme.colors.accentRed}10`};
  border: 1px solid ${({ theme })=>theme.colors.accentRed};
  border-radius: 12px;
  color: ${({ theme })=>theme.colors.accentRed};
`;
_c16 = ErrorContainer;
const ErrorIcon = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div`
  font-size: 18px;
  flex-shrink: 0;
`;
_c17 = ErrorIcon;
const ErrorText = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span`
  font-size: 14px;
  font-weight: 500;
`;
_c18 = ErrorText;
const SuccessContainer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 20px;
  background: ${({ theme })=>`${theme.colors.accentGreen}10`};
  border: 1px solid ${({ theme })=>theme.colors.accentGreen};
  border-radius: 12px;
  color: ${({ theme })=>theme.colors.accentGreen};
`;
_c19 = SuccessContainer;
const SuccessIcon = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div`
  font-size: 18px;
  flex-shrink: 0;
`;
_c20 = SuccessIcon;
const SuccessText = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span`
  font-size: 14px;
  font-weight: 500;
`;
_c21 = SuccessText;
const SubmitButton = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  background: ${({ theme, disabled })=>disabled ? theme.colors.textSecondary : theme.colors.primary};
  color: white;
  border: none;
  border-radius: 16px;
  padding: 20px 32px;
  font-size: 18px;
  font-weight: 600;
  cursor: ${({ disabled })=>disabled ? 'not-allowed' : 'pointer'};
  transition: all 0.2s;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  
  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(59,130,246,0.10);
    background: ${({ theme })=>theme.colors.accentGreen};
  }
  
  &:active:not(:disabled) {
    transform: translateY(0);
  }
  
  svg {
    font-size: 16px;
  }
  
  @media (max-width: 600px) {
    padding: 16px 24px;
    font-size: 16px;
  }
`;
_c22 = SubmitButton;
const InfoBox = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div`
  margin-top: 18px;
  background: ${({ theme })=>`${theme.colors.primary}08`};
  color: ${({ theme })=>theme.colors.textSecondary};
  border-left: 4px solid ${({ theme })=>theme.colors.primary};
  border-radius: 10px;
  padding: 16px 20px;
  font-size: 15px;
  font-weight: 500;
`;
_c23 = InfoBox;
const BetLimitsInfo = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].p`
  color: ${({ theme })=>theme.colors.textSecondary};
  font-size: 13px;
  margin: 8px 0 0 0;
  padding-left: 2px;
`;
_c24 = BetLimitsInfo;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16, _c17, _c18, _c19, _c20, _c21, _c22, _c23, _c24;
__turbopack_context__.k.register(_c, "CreateMarketScreen");
__turbopack_context__.k.register(_c1, "Container");
__turbopack_context__.k.register(_c2, "Header");
__turbopack_context__.k.register(_c3, "HeaderIcon");
__turbopack_context__.k.register(_c4, "HeaderContent");
__turbopack_context__.k.register(_c5, "Title");
__turbopack_context__.k.register(_c6, "Subtitle");
__turbopack_context__.k.register(_c7, "Form");
__turbopack_context__.k.register(_c8, "FormSection");
__turbopack_context__.k.register(_c9, "SectionTitle");
__turbopack_context__.k.register(_c10, "FormGroup");
__turbopack_context__.k.register(_c11, "Label");
__turbopack_context__.k.register(_c12, "Input");
__turbopack_context__.k.register(_c13, "TextArea");
__turbopack_context__.k.register(_c14, "HelpText");
__turbopack_context__.k.register(_c15, "BetLimitsRow");
__turbopack_context__.k.register(_c16, "ErrorContainer");
__turbopack_context__.k.register(_c17, "ErrorIcon");
__turbopack_context__.k.register(_c18, "ErrorText");
__turbopack_context__.k.register(_c19, "SuccessContainer");
__turbopack_context__.k.register(_c20, "SuccessIcon");
__turbopack_context__.k.register(_c21, "SuccessText");
__turbopack_context__.k.register(_c22, "SubmitButton");
__turbopack_context__.k.register(_c23, "InfoBox");
__turbopack_context__.k.register(_c24, "BetLimitsInfo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/create/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>CreateMarketPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$screens$2f$CreateMarketScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/screens/CreateMarketScreen.tsx [app-client] (ecmascript)");
"use client";
;
;
function CreateMarketPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$screens$2f$CreateMarketScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/src/app/create/page.tsx",
        lineNumber: 5,
        columnNumber: 10
    }, this);
}
_c = CreateMarketPage;
var _c;
__turbopack_context__.k.register(_c, "CreateMarketPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_a068500e._.js.map
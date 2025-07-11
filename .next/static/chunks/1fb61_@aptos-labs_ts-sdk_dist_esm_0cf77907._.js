(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-A5L76YP7.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "a": (()=>i),
    "b": (()=>n)
});
var i = class {
    constructor(){
        this.queue = [];
        this.pendingDequeue = [];
        this.cancelled = !1;
    }
    enqueue(e) {
        if (this.cancelled = !1, this.pendingDequeue.length > 0) {
            this.pendingDequeue.shift()?.resolve(e);
            return;
        }
        this.queue.push(e);
    }
    async dequeue() {
        return this.queue.length > 0 ? Promise.resolve(this.queue.shift()) : new Promise((e, u)=>{
            this.pendingDequeue.push({
                resolve: e,
                reject: u
            });
        });
    }
    isEmpty() {
        return this.queue.length === 0;
    }
    cancel() {
        this.cancelled = !0, this.pendingDequeue.forEach(async ({ reject: e })=>{
            e(new n("Task cancelled"));
        }), this.pendingDequeue = [], this.queue.length = 0;
    }
    isCancelled() {
        return this.cancelled;
    }
    pendingDequeueLength() {
        return this.pendingDequeue.length;
    }
}, n = class extends Error {
};
;
 //# sourceMappingURL=chunk-A5L76YP7.mjs.map
}}),
"[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-56CNRT2K.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "a": (()=>t),
    "b": (()=>n),
    "c": (()=>U),
    "d": (()=>_),
    "e": (()=>o),
    "f": (()=>i)
});
var t = 255, n = 65535, U = 4294967295, _ = 18446744073709551615n, o = 340282366920938463463374607431768211455n, i = 115792089237316195423570985008687907853269984665640564039457584007913129639935n;
;
 //# sourceMappingURL=chunk-56CNRT2K.mjs.map
}}),
"[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-IF4UU2MT.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "a": (()=>s)
});
var s = class extends Error {
    constructor(e, i){
        super(e), this.invalidReason = i;
    }
};
;
 //# sourceMappingURL=chunk-IF4UU2MT.mjs.map
}}),
"[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-STY74NUA.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "a": (()=>u),
    "b": (()=>a),
    "c": (()=>l)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$IF4UU2MT$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-IF4UU2MT.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@noble/hashes/esm/utils.js [app-client] (ecmascript)");
;
;
var u = ((n)=>(n.TOO_SHORT = "too_short", n.INVALID_LENGTH = "invalid_length", n.INVALID_HEX_CHARS = "invalid_hex_chars", n))(u || {}), a = class e {
    constructor(t){
        this.data = t;
    }
    toUint8Array() {
        return this.data;
    }
    toStringWithoutPrefix() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bytesToHex"])(this.data);
    }
    toString() {
        return `0x${this.toStringWithoutPrefix()}`;
    }
    static fromHexString(t) {
        let r = t;
        if (r.startsWith("0x") && (r = r.slice(2)), r.length === 0) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$IF4UU2MT$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"]("Hex string is too short, must be at least 1 char long, excluding the optional leading 0x.", "too_short");
        if (r.length % 2 !== 0) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$IF4UU2MT$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"]("Hex string must be an even number of hex characters.", "invalid_length");
        try {
            return new e((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexToBytes"])(r));
        } catch (n) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$IF4UU2MT$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"](`Hex string contains invalid hex characters: ${n?.message}`, "invalid_hex_chars");
        }
    }
    static fromHexInput(t) {
        return t instanceof Uint8Array ? new e(t) : e.fromHexString(t);
    }
    static hexInputToUint8Array(t) {
        return t instanceof Uint8Array ? t : e.fromHexString(t).toUint8Array();
    }
    static hexInputToString(t) {
        return e.fromHexInput(t).toString();
    }
    static hexInputToStringWithoutPrefix(t) {
        return e.fromHexInput(t).toStringWithoutPrefix();
    }
    static isValid(t) {
        try {
            return e.fromHexString(t), {
                valid: !0
            };
        } catch (r) {
            return {
                valid: !1,
                invalidReason: r?.invalidReason,
                invalidReasonMessage: r?.message
            };
        }
    }
    equals(t) {
        return this.data.length !== t.data.length ? !1 : this.data.every((r, n)=>r === t.data[n]);
    }
}, l = (e)=>new TextDecoder().decode(a.fromHexInput(e).toUint8Array());
;
 //# sourceMappingURL=chunk-STY74NUA.mjs.map
}}),
"[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-KDMSOCZY.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "a": (()=>j)
});
var h = Object.defineProperty;
var i = Object.getOwnPropertyDescriptor;
var j = (g, b, d, c)=>{
    for(var a = c > 1 ? void 0 : c ? i(b, d) : b, e = g.length - 1, f; e >= 0; e--)(f = g[e]) && (a = (c ? f(b, d, a) : f(a)) || a);
    return c && a && h(b, d, a), a;
};
;
 //# sourceMappingURL=chunk-KDMSOCZY.mjs.map
}}),
"[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-NJN3EAOM.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "a": (()=>B),
    "b": (()=>n),
    "c": (()=>p),
    "d": (()=>A),
    "e": (()=>z)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$56CNRT2K$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-56CNRT2K.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-STY74NUA.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$KDMSOCZY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-KDMSOCZY.mjs [app-client] (ecmascript)");
;
;
;
var B = class {
    bcsToBytes() {
        let e = new n;
        return this.serialize(e), e.toUint8Array();
    }
    bcsToHex() {
        let e = this.bcsToBytes();
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].fromHexInput(e);
    }
    toStringWithoutPrefix() {
        return this.bcsToHex().toStringWithoutPrefix();
    }
    toString() {
        return `0x${this.toStringWithoutPrefix()}`;
    }
}, n = class {
    constructor(e = 64){
        if (e <= 0) throw new Error("Length needs to be greater than 0");
        this.buffer = new ArrayBuffer(e), this.offset = 0;
    }
    ensureBufferWillHandleSize(e) {
        for(; this.buffer.byteLength < this.offset + e;){
            let t = new ArrayBuffer(this.buffer.byteLength * 2);
            new Uint8Array(t).set(new Uint8Array(this.buffer)), this.buffer = t;
        }
    }
    appendToBuffer(e) {
        this.ensureBufferWillHandleSize(e.length), new Uint8Array(this.buffer, this.offset).set(e), this.offset += e.length;
    }
    serializeWithFunction(e, t, i) {
        this.ensureBufferWillHandleSize(t);
        let a = new DataView(this.buffer, this.offset);
        e.apply(a, [
            0,
            i,
            !0
        ]), this.offset += t;
    }
    serializeStr(e) {
        let t = new TextEncoder;
        this.serializeBytes(t.encode(e));
    }
    serializeBytes(e) {
        this.serializeU32AsUleb128(e.length), this.appendToBuffer(e);
    }
    serializeFixedBytes(e) {
        this.appendToBuffer(e);
    }
    serializeBool(e) {
        p(e);
        let t = e ? 1 : 0;
        this.appendToBuffer(new Uint8Array([
            t
        ]));
    }
    serializeU8(e) {
        this.appendToBuffer(new Uint8Array([
            e
        ]));
    }
    serializeU16(e) {
        this.serializeWithFunction(DataView.prototype.setUint16, 2, e);
    }
    serializeU32(e) {
        this.serializeWithFunction(DataView.prototype.setUint32, 4, e);
    }
    serializeU64(e) {
        let t = BigInt(e) & BigInt(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$56CNRT2K$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"]), i = BigInt(e) >> BigInt(32);
        this.serializeU32(Number(t)), this.serializeU32(Number(i));
    }
    serializeU128(e) {
        let t = BigInt(e) & __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$56CNRT2K$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"], i = BigInt(e) >> BigInt(64);
        this.serializeU64(t), this.serializeU64(i);
    }
    serializeU256(e) {
        let t = BigInt(e) & __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$56CNRT2K$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["e"], i = BigInt(e) >> BigInt(128);
        this.serializeU128(t), this.serializeU128(i);
    }
    serializeU32AsUleb128(e) {
        let t = e, i = [];
        for(; t >>> 7;)i.push(t & 127 | 128), t >>>= 7;
        i.push(t), this.appendToBuffer(new Uint8Array(i));
    }
    toUint8Array() {
        return new Uint8Array(this.buffer).slice(0, this.offset);
    }
    serialize(e) {
        e.serialize(this);
    }
    serializeVector(e) {
        this.serializeU32AsUleb128(e.length), e.forEach((t)=>{
            t.serialize(this);
        });
    }
    serializeOption(e, t) {
        let i = e !== void 0;
        this.serializeBool(i), i && (typeof e == "string" ? this.serializeStr(e) : e instanceof Uint8Array ? t !== void 0 ? this.serializeFixedBytes(e) : this.serializeBytes(e) : e.serialize(this));
    }
    serializeOptionStr(e) {
        e === void 0 ? this.serializeU32AsUleb128(0) : (this.serializeU32AsUleb128(1), this.serializeStr(e));
    }
};
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$KDMSOCZY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])([
    o(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$56CNRT2K$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])
], n.prototype, "serializeU8", 1), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$KDMSOCZY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])([
    o(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$56CNRT2K$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])
], n.prototype, "serializeU16", 1), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$KDMSOCZY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])([
    o(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$56CNRT2K$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])
], n.prototype, "serializeU32", 1), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$KDMSOCZY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])([
    o(BigInt(0), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$56CNRT2K$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"])
], n.prototype, "serializeU64", 1), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$KDMSOCZY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])([
    o(BigInt(0), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$56CNRT2K$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["e"])
], n.prototype, "serializeU128", 1), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$KDMSOCZY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])([
    o(BigInt(0), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$56CNRT2K$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["f"])
], n.prototype, "serializeU256", 1), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$KDMSOCZY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])([
    o(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$56CNRT2K$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])
], n.prototype, "serializeU32AsUleb128", 1);
function p(r) {
    if (typeof r != "boolean") throw new Error(`${r} is not a boolean value`);
}
var A = (r, e, t)=>`${r} is out of range: [${e}, ${t}]`;
function z(r, e, t) {
    let i = BigInt(r);
    if (i > BigInt(t) || i < BigInt(e)) throw new Error(A(r, e, t));
}
function o(r, e) {
    return (t, i, a)=>{
        let g = a.value;
        return a.value = function(u) {
            return z(u, r, e), g.apply(this, [
                u
            ]);
        }, a;
    };
}
;
 //# sourceMappingURL=chunk-NJN3EAOM.mjs.map
}}),
"[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-C6JRJNK3.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "a": (()=>U),
    "b": (()=>p),
    "c": (()=>b),
    "d": (()=>y),
    "e": (()=>m),
    "f": (()=>B),
    "g": (()=>a)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$NJN3EAOM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-NJN3EAOM.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$56CNRT2K$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-56CNRT2K.mjs [app-client] (ecmascript)");
;
;
var U = class i extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$NJN3EAOM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"] {
    constructor(e){
        super(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$NJN3EAOM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(e), this.value = e;
    }
    serialize(e) {
        e.serializeBool(this.value);
    }
    serializeForEntryFunction(e) {
        let r = this.bcsToBytes();
        e.serializeBytes(r);
    }
    serializeForScriptFunction(e) {
        e.serializeU32AsUleb128(5), e.serialize(this);
    }
    deserialize(e) {
        return new a(e.deserializeU256());
    }
    static deserialize(e) {
        return new i(e.deserializeBool());
    }
}, p = class i extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$NJN3EAOM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"] {
    constructor(e){
        super(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$NJN3EAOM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["e"])(e, 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$56CNRT2K$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"]), this.value = e;
    }
    serialize(e) {
        e.serializeU8(this.value);
    }
    serializeForEntryFunction(e) {
        let r = this.bcsToBytes();
        e.serializeBytes(r);
    }
    serializeForScriptFunction(e) {
        e.serializeU32AsUleb128(0), e.serialize(this);
    }
    static deserialize(e) {
        return new i(e.deserializeU8());
    }
}, b = class i extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$NJN3EAOM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"] {
    constructor(e){
        super(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$NJN3EAOM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["e"])(e, 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$56CNRT2K$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"]), this.value = e;
    }
    serialize(e) {
        e.serializeU16(this.value);
    }
    serializeForEntryFunction(e) {
        let r = this.bcsToBytes();
        e.serializeBytes(r);
    }
    serializeForScriptFunction(e) {
        e.serializeU32AsUleb128(6), e.serialize(this);
    }
    static deserialize(e) {
        return new i(e.deserializeU16());
    }
}, y = class i extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$NJN3EAOM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"] {
    constructor(e){
        super(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$NJN3EAOM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["e"])(e, 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$56CNRT2K$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"]), this.value = e;
    }
    serialize(e) {
        e.serializeU32(this.value);
    }
    serializeForEntryFunction(e) {
        let r = this.bcsToBytes();
        e.serializeBytes(r);
    }
    serializeForScriptFunction(e) {
        e.serializeU32AsUleb128(7), e.serialize(this);
    }
    static deserialize(e) {
        return new i(e.deserializeU32());
    }
}, m = class i extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$NJN3EAOM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"] {
    constructor(e){
        super(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$NJN3EAOM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["e"])(e, BigInt(0), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$56CNRT2K$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"]), this.value = BigInt(e);
    }
    serialize(e) {
        e.serializeU64(this.value);
    }
    serializeForEntryFunction(e) {
        let r = this.bcsToBytes();
        e.serializeBytes(r);
    }
    serializeForScriptFunction(e) {
        e.serializeU32AsUleb128(1), e.serialize(this);
    }
    static deserialize(e) {
        return new i(e.deserializeU64());
    }
}, B = class i extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$NJN3EAOM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"] {
    constructor(e){
        super(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$NJN3EAOM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["e"])(e, BigInt(0), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$56CNRT2K$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["e"]), this.value = BigInt(e);
    }
    serialize(e) {
        e.serializeU128(this.value);
    }
    serializeForEntryFunction(e) {
        let r = this.bcsToBytes();
        e.serializeBytes(r);
    }
    serializeForScriptFunction(e) {
        e.serializeU32AsUleb128(2), e.serialize(this);
    }
    static deserialize(e) {
        return new i(e.deserializeU128());
    }
}, a = class i extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$NJN3EAOM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"] {
    constructor(e){
        super(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$NJN3EAOM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["e"])(e, BigInt(0), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$56CNRT2K$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["f"]), this.value = BigInt(e);
    }
    serialize(e) {
        e.serializeU256(this.value);
    }
    serializeForEntryFunction(e) {
        let r = this.bcsToBytes();
        e.serializeBytes(r);
    }
    serializeForScriptFunction(e) {
        e.serializeU32AsUleb128(8), e.serialize(this);
    }
    static deserialize(e) {
        return new i(e.deserializeU256());
    }
};
;
 //# sourceMappingURL=chunk-C6JRJNK3.mjs.map
}}),
"[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-JGFKIUG5.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "a": (()=>a)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$56CNRT2K$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-56CNRT2K.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-STY74NUA.mjs [app-client] (ecmascript)");
;
;
var a = class d {
    constructor(e){
        this.buffer = new ArrayBuffer(e.length), new Uint8Array(this.buffer).set(e, 0), this.offset = 0;
    }
    static fromHex(e) {
        let i = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].hexInputToUint8Array(e);
        return new d(i);
    }
    read(e) {
        if (this.offset + e > this.buffer.byteLength) throw new Error("Reached to the end of buffer");
        let i = this.buffer.slice(this.offset, this.offset + e);
        return this.offset += e, i;
    }
    remaining() {
        return this.buffer.byteLength - this.offset;
    }
    deserializeStr() {
        let e = this.deserializeBytes();
        return new TextDecoder().decode(e);
    }
    deserializeOptionStr() {
        return this.deserializeOption("string");
    }
    deserializeOption(e, i) {
        if (this.deserializeBool()) {
            if (e === "string") return this.deserializeStr();
            if (e === "bytes") return this.deserializeBytes();
            if (e === "fixedBytes") {
                if (i === void 0) throw new Error("Fixed bytes length not provided");
                return this.deserializeFixedBytes(i);
            }
            return this.deserialize(e);
        }
    }
    deserializeBytes() {
        let e = this.deserializeUleb128AsU32();
        return new Uint8Array(this.read(e));
    }
    deserializeFixedBytes(e) {
        return new Uint8Array(this.read(e));
    }
    deserializeBool() {
        let e = new Uint8Array(this.read(1))[0];
        if (e !== 1 && e !== 0) throw new Error("Invalid boolean value");
        return e === 1;
    }
    deserializeU8() {
        return new DataView(this.read(1)).getUint8(0);
    }
    deserializeU16() {
        return new DataView(this.read(2)).getUint16(0, !0);
    }
    deserializeU32() {
        return new DataView(this.read(4)).getUint32(0, !0);
    }
    deserializeU64() {
        let e = this.deserializeU32(), i = this.deserializeU32();
        return BigInt(BigInt(i) << BigInt(32) | BigInt(e));
    }
    deserializeU128() {
        let e = this.deserializeU64(), i = this.deserializeU64();
        return BigInt(i << BigInt(64) | e);
    }
    deserializeU256() {
        let e = this.deserializeU128(), i = this.deserializeU128();
        return BigInt(i << BigInt(128) | e);
    }
    deserializeUleb128AsU32() {
        let e = BigInt(0), i = 0;
        for(; e < __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$56CNRT2K$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"];){
            let t = this.deserializeU8();
            if (e |= BigInt(t & 127) << BigInt(i), (t & 128) === 0) break;
            i += 7;
        }
        if (e > __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$56CNRT2K$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"]) throw new Error("Overflow while parsing uleb128-encoded uint32 value");
        return Number(e);
    }
    deserialize(e) {
        return e.deserialize(this);
    }
    deserializeVector(e) {
        let i = this.deserializeUleb128AsU32(), t = new Array;
        for(let n = 0; n < i; n += 1)t.push(this.deserialize(e));
        return t;
    }
};
;
 //# sourceMappingURL=chunk-JGFKIUG5.mjs.map
}}),
"[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-SOJ3OG6X.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "a": (()=>t),
    "b": (()=>p),
    "c": (()=>a),
    "d": (()=>A)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$C6JRJNK3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-C6JRJNK3.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$JGFKIUG5$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-JGFKIUG5.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$NJN3EAOM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-NJN3EAOM.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-STY74NUA.mjs [app-client] (ecmascript)");
;
;
;
;
var t = class i extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$NJN3EAOM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"] {
    constructor(e){
        super(), this.values = e;
    }
    serializeForEntryFunction(e) {
        let r = this.bcsToBytes();
        e.serializeBytes(r);
    }
    serializeForScriptFunction(e) {
        if (this.values[0] !== void 0 && !(this.values[0] instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$C6JRJNK3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])) {
            new p(this.bcsToBytes()).serializeForScriptFunction(e);
            return;
        }
        e.serializeU32AsUleb128(4), e.serialize(this);
    }
    static U8(e) {
        let r;
        if (Array.isArray(e) && e.length === 0) r = [];
        else if (Array.isArray(e) && typeof e[0] == "number") r = e;
        else if (typeof e == "string") {
            let n = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].fromHexInput(e);
            r = Array.from(n.toUint8Array());
        } else if (e instanceof Uint8Array) r = Array.from(e);
        else throw new Error("Invalid input type, must be an number[], Uint8Array, or hex string");
        return new i(r.map((n)=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$C6JRJNK3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"](n)));
    }
    static U16(e) {
        return new i(e.map((r)=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$C6JRJNK3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"](r)));
    }
    static U32(e) {
        return new i(e.map((r)=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$C6JRJNK3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"](r)));
    }
    static U64(e) {
        return new i(e.map((r)=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$C6JRJNK3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["e"](r)));
    }
    static U128(e) {
        return new i(e.map((r)=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$C6JRJNK3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["f"](r)));
    }
    static U256(e) {
        return new i(e.map((r)=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$C6JRJNK3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["g"](r)));
    }
    static Bool(e) {
        return new i(e.map((r)=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$C6JRJNK3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"](r)));
    }
    static MoveString(e) {
        return new i(e.map((r)=>new a(r)));
    }
    serialize(e) {
        e.serializeVector(this.values);
    }
    static deserialize(e, r) {
        let n = e.deserializeUleb128AsU32(), l = new Array;
        for(let w = 0; w < n; w += 1)l.push(r.deserialize(e));
        return new i(l);
    }
}, p = class i extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$NJN3EAOM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"] {
    constructor(e){
        super(), this.value = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].fromHexInput(e).toUint8Array();
    }
    serialize(e) {
        e.serializeBytes(this.value);
    }
    serializeForEntryFunction(e) {
        this.serialize(e);
    }
    serializeForScriptFunction(e) {
        e.serializeU32AsUleb128(9), this.serialize(e);
    }
    static deserialize(e) {
        return new i(e.deserializeBytes());
    }
    toMoveVector(e) {
        let r = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$JGFKIUG5$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"](this.bcsToBytes());
        r.deserializeUleb128AsU32();
        let n = r.deserializeVector(e);
        return new t(n);
    }
}, a = class i extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$NJN3EAOM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"] {
    constructor(e){
        super(), this.value = e;
    }
    serialize(e) {
        e.serializeStr(this.value);
    }
    serializeForEntryFunction(e) {
        let r = this.bcsToBytes();
        e.serializeBytes(r);
    }
    serializeForScriptFunction(e) {
        let n = new TextEncoder().encode(this.value);
        t.U8(n).serializeForScriptFunction(e);
    }
    static deserialize(e) {
        return new i(e.deserializeStr());
    }
}, A = class i extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$NJN3EAOM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"] {
    constructor(e){
        super(), typeof e < "u" && e !== null ? this.vec = new t([
            e
        ]) : this.vec = new t([]), [this.value] = this.vec.values;
    }
    serializeForEntryFunction(e) {
        let r = this.bcsToBytes();
        e.serializeBytes(r);
    }
    unwrap() {
        if (this.isSome()) return this.vec.values[0];
        throw new Error("Called unwrap on a MoveOption with no value");
    }
    isSome() {
        return this.vec.values.length === 1;
    }
    serialize(e) {
        this.vec.serialize(e);
    }
    static U8(e) {
        return new i(e != null ? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$C6JRJNK3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"](e) : void 0);
    }
    static U16(e) {
        return new i(e != null ? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$C6JRJNK3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"](e) : void 0);
    }
    static U32(e) {
        return new i(e != null ? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$C6JRJNK3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"](e) : void 0);
    }
    static U64(e) {
        return new i(e != null ? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$C6JRJNK3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["e"](e) : void 0);
    }
    static U128(e) {
        return new i(e != null ? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$C6JRJNK3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["f"](e) : void 0);
    }
    static U256(e) {
        return new i(e != null ? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$C6JRJNK3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["g"](e) : void 0);
    }
    static Bool(e) {
        return new i(e != null ? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$C6JRJNK3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"](e) : void 0);
    }
    static MoveString(e) {
        return new i(e != null ? new a(e) : void 0);
    }
    static deserialize(e, r) {
        let n = t.deserialize(e, r);
        return new i(n.values[0]);
    }
};
;
 //# sourceMappingURL=chunk-SOJ3OG6X.mjs.map
}}),
"[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-GYVSI3TS.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "a": (()=>u),
    "b": (()=>l)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$NJN3EAOM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-NJN3EAOM.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$IF4UU2MT$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-IF4UU2MT.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@noble/hashes/esm/utils.js [app-client] (ecmascript)");
;
;
;
var u = ((s)=>(s.INCORRECT_NUMBER_OF_BYTES = "incorrect_number_of_bytes", s.INVALID_HEX_CHARS = "invalid_hex_chars", s.TOO_SHORT = "too_short", s.TOO_LONG = "too_long", s.LEADING_ZERO_X_REQUIRED = "leading_zero_x_required", s.LONG_FORM_REQUIRED_UNLESS_SPECIAL = "long_form_required_unless_special", s.INVALID_PADDING_ZEROES = "INVALID_PADDING_ZEROES", s.INVALID_PADDING_STRICTNESS = "INVALID_PADDING_STRICTNESS", s))(u || {}), e = class e extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$NJN3EAOM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"] {
    constructor(t){
        if (super(), t.length !== e.LENGTH) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$IF4UU2MT$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"]("AccountAddress data should be exactly 32 bytes long", "incorrect_number_of_bytes");
        this.data = t;
    }
    isSpecial() {
        return this.data.slice(0, this.data.length - 1).every((t)=>t === 0) && this.data[this.data.length - 1] < 16;
    }
    toString() {
        return `0x${this.toStringWithoutPrefix()}`;
    }
    toStringWithoutPrefix() {
        let t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bytesToHex"])(this.data);
        return this.isSpecial() && (t = t[t.length - 1]), t;
    }
    toStringLong() {
        return `0x${this.toStringLongWithoutPrefix()}`;
    }
    toStringLongWithoutPrefix() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bytesToHex"])(this.data);
    }
    toStringShort() {
        return `0x${this.toStringShortWithoutPrefix()}`;
    }
    toStringShortWithoutPrefix() {
        let t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bytesToHex"])(this.data).replace(/^0+/, "");
        return t === "" ? "0" : t;
    }
    toUint8Array() {
        return this.data;
    }
    serialize(t) {
        t.serializeFixedBytes(this.data);
    }
    serializeForEntryFunction(t) {
        let r = this.bcsToBytes();
        t.serializeBytes(r);
    }
    serializeForScriptFunction(t) {
        t.serializeU32AsUleb128(3), t.serialize(this);
    }
    static deserialize(t) {
        let r = t.deserializeFixedBytes(e.LENGTH);
        return new e(r);
    }
    static fromStringStrict(t) {
        if (!t.startsWith("0x")) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$IF4UU2MT$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"]("Hex string must start with a leading 0x.", "leading_zero_x_required");
        let r = e.fromString(t);
        if (t.length !== e.LONG_STRING_LENGTH + 2) if (r.isSpecial()) {
            if (t.length !== 3) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$IF4UU2MT$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"](`The given hex string ${t} is a special address not in LONG form, it must be 0x0 to 0xf without padding zeroes.`, "INVALID_PADDING_ZEROES");
        } else throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$IF4UU2MT$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"](`The given hex string ${t} is not a special address, it must be represented as 0x + 64 chars.`, "long_form_required_unless_special");
        return r;
    }
    static fromString(t, { maxMissingChars: r = 4 } = {}) {
        let n = t;
        if (t.startsWith("0x") && (n = t.slice(2)), n.length === 0) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$IF4UU2MT$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"]("Hex string is too short, must be 1 to 64 chars long, excluding the leading 0x.", "too_short");
        if (n.length > 64) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$IF4UU2MT$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"]("Hex string is too long, must be 1 to 64 chars long, excluding the leading 0x.", "too_long");
        if (r > 63 || r < 0) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$IF4UU2MT$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"](`maxMissingChars must be between or equal to 0 and 63. Received ${r}`, "INVALID_PADDING_STRICTNESS");
        let o;
        try {
            o = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexToBytes"])(n.padStart(64, "0"));
        } catch (h) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$IF4UU2MT$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"](`Hex characters are invalid: ${h?.message}`, "invalid_hex_chars");
        }
        let d = new e(o);
        if (n.length < 64 - r && !d.isSpecial()) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$IF4UU2MT$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"](`Hex string is too short, must be ${64 - r} to 64 chars long, excluding the leading 0x. You may need to fix 
the addresss by padding it with 0s before passing it to \`fromString\` (e.g. <addressString>.padStart(64, '0')). 
Received ${t}`, "too_short");
        return d;
    }
    static from(t, { maxMissingChars: r = 4 } = {}) {
        return typeof t == "string" ? e.fromString(t, {
            maxMissingChars: r
        }) : t instanceof Uint8Array ? new e(t) : t;
    }
    static fromStrict(t) {
        return typeof t == "string" ? e.fromStringStrict(t) : t instanceof Uint8Array ? new e(t) : t;
    }
    static isValid(t) {
        try {
            return t.strict ? e.fromStrict(t.input) : e.from(t.input), {
                valid: !0
            };
        } catch (r) {
            return {
                valid: !1,
                invalidReason: r?.invalidReason,
                invalidReasonMessage: r?.message
            };
        }
    }
    equals(t) {
        return this.data.length !== t.data.length ? !1 : this.data.every((r, n)=>r === t.data[n]);
    }
};
e.LENGTH = 32, e.LONG_STRING_LENGTH = 64, e.ZERO = e.from("0x0"), e.ONE = e.from("0x1"), e.TWO = e.from("0x2"), e.THREE = e.from("0x3"), e.FOUR = e.from("0x4"), e.A = e.from("0xA");
var l = e;
;
 //# sourceMappingURL=chunk-GYVSI3TS.mjs.map
}}),
"[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-XF6BISPI.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "a": (()=>c)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$SOJ3OG6X$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-SOJ3OG6X.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$C6JRJNK3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-C6JRJNK3.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-GYVSI3TS.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$NJN3EAOM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-NJN3EAOM.mjs [app-client] (ecmascript)");
;
;
;
;
var c = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$NJN3EAOM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"] {
    constructor(e){
        super();
        this.accountAddress = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].ONE;
        this.moduleName = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$SOJ3OG6X$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"]("account");
        this.structName = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$SOJ3OG6X$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"]("RotationProofChallenge");
        this.sequenceNumber = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$C6JRJNK3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["e"](e.sequenceNumber), this.originator = e.originator, this.currentAuthKey = e.currentAuthKey, this.newPublicKey = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$SOJ3OG6X$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"].U8(e.newPublicKey.toUint8Array());
    }
    serialize(e) {
        e.serialize(this.accountAddress), e.serialize(this.moduleName), e.serialize(this.structName), e.serialize(this.sequenceNumber), e.serialize(this.originator), e.serialize(this.currentAuthKey), e.serialize(this.newPublicKey);
    }
};
;
 //# sourceMappingURL=chunk-XF6BISPI.mjs.map
}}),
"[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-YOZBVVKL.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "a": (()=>m),
    "b": (()=>o)
});
var n = new Map;
function m(r, e, t) {
    return async (...s)=>{
        if (n.has(e)) {
            let { value: i, timestamp: u } = n.get(e);
            if (t === void 0 || Date.now() - u <= t) return i;
        }
        let a = await r(...s);
        return n.set(e, {
            value: a,
            timestamp: Date.now()
        }), a;
    };
}
function o(r, e, t) {
    return (...s)=>{
        if (n.has(e)) {
            let { value: i, timestamp: u } = n.get(e);
            if (t === void 0 || Date.now() - u <= t) return i;
        }
        let a = r(...s);
        return n.set(e, {
            value: a,
            timestamp: Date.now()
        }), a;
    };
}
;
 //# sourceMappingURL=chunk-YOZBVVKL.mjs.map
}}),
"[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-BUUV6B4P.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "a": (()=>d),
    "b": (()=>f),
    "c": (()=>a)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/buffer/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-GYVSI3TS.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$sha3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@noble/hashes/esm/sha3.js [app-client] (ecmascript)");
;
;
var d = (e, r)=>{
    let t = e.bcsToBytes(), s = typeof r == "string" ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(r, "utf8") : r, o = new Uint8Array([
        ...t,
        ...s,
        254
    ]);
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"]((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$sha3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sha3_256"])(o));
}, f = (e, r)=>{
    let t = e.bcsToBytes(), s = typeof r == "string" ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(r, "utf8") : r, o = new Uint8Array([
        ...t,
        ...s,
        255
    ]);
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"]((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$sha3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sha3_256"])(o));
}, a = (e, r, t)=>{
    let s = `${r}::${t}`;
    return d(e, s);
};
;
 //# sourceMappingURL=chunk-BUUV6B4P.mjs.map
}}),
"[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-YFFDF22R.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "a": (()=>f),
    "b": (()=>A),
    "c": (()=>_),
    "d": (()=>x),
    "e": (()=>S),
    "f": (()=>h),
    "g": (()=>T),
    "h": (()=>b),
    "i": (()=>M),
    "j": (()=>y),
    "k": (()=>v),
    "l": (()=>w),
    "m": (()=>E),
    "n": (()=>$)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/buffer/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$BUUV6B4P$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-BUUV6B4P.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-GYVSI3TS.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$base64$2f$base64$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/js-base64/base64.mjs [app-client] (ecmascript)");
;
;
;
async function f(n) {
    return new Promise((e)=>{
        setTimeout(e, n);
    });
}
function A(n) {
    return n instanceof Error ? n.message : String(n);
}
var _ = ()=>Math.floor(Date.now() / 1e3);
function x(n) {
    let e = new Date(n * 1e3);
    return e.setMinutes(0), e.setSeconds(0), e.setMilliseconds(0), Math.floor(e.getTime() / 1e3);
}
function S(n) {
    let e = n.replace(/-/g, "+").replace(/_/g, "/"), t = e + "==".substring(0, (3 - e.length % 3) % 3);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$base64$2f$base64$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decode"])(t);
}
function h(n) {
    let e = n.replace(/-/g, "+").replace(/_/g, "/");
    for(; e.length % 4 !== 0;)e += "=";
    return new Uint8Array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(e, "base64"));
}
var T = (n, e)=>n * 10 ** e, b = (n, e)=>n / 10 ** e, a = (n)=>{
    let e = "";
    for(let t = 2; t < n.length; t += 2)e += String.fromCharCode(parseInt(n.substring(t, t + 2), 16));
    return e;
}, M = (n)=>{
    let { account_address: e, module_name: t, struct_name: o } = n, s = a(t), c = a(o);
    return `${e}::${s}::${c}`;
}, y = (n)=>typeof n == "object" && !Array.isArray(n) && n !== null && "account_address" in n && "module_name" in n && "struct_name" in n && typeof n.account_address == "string" && typeof n.module_name == "string" && typeof n.struct_name == "string";
function v(n) {
    let e = n.split("::");
    if (e.length !== 3) throw new Error(`Invalid function ${n}`);
    let t = e[0], o = e[1], s = e[2];
    return {
        moduleAddress: t,
        moduleName: o,
        functionName: s
    };
}
function w(n) {
    let e = n.split("::");
    return e.length === 3 && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].isValid({
        input: e[0]
    }).valid;
}
function E(n, e = 6, t = 5) {
    return `${n.slice(0, e)}...${n.slice(-t)}`;
}
var d = "0x1::aptos_coin::AptosCoin", I = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].A.toStringLong();
function m(n) {
    let e = /0x[0-9a-fA-F]+/g;
    return n.replace(e, (t)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(t, {
            maxMissingChars: 63
        }).toStringShort());
}
function $(n) {
    let e = m(n);
    return e === d ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].A : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$BUUV6B4P$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].A, e);
}
;
 //# sourceMappingURL=chunk-YFFDF22R.mjs.map
}}),
"[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-6Y6ZO7TS.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "a": (()=>l),
    "b": (()=>O),
    "c": (()=>u),
    "d": (()=>N),
    "e": (()=>T)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$YFFDF22R$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-YFFDF22R.mjs [app-client] (ecmascript)");
;
var l = ((t)=>(t[t.API_ERROR = 0] = "API_ERROR", t[t.EXTERNAL_API_ERROR = 1] = "EXTERNAL_API_ERROR", t[t.SESSION_EXPIRED = 2] = "SESSION_EXPIRED", t[t.INVALID_STATE = 3] = "INVALID_STATE", t[t.INVALID_SIGNATURE = 4] = "INVALID_SIGNATURE", t[t.UNKNOWN = 5] = "UNKNOWN", t))(l || {}), O = ((s)=>(s.REAUTHENTICATE = "Re-authentiate to continue using your keyless account", s.REAUTHENTICATE_UNSURE = "Try re-authentiating. If the error persists join the telegram group at https://t.me/+h5CN-W35yUFiYzkx for further support", s.UPDATE_REQUEST_PARAMS = "Update the invalid request parameters and reauthenticate.", s.RATE_LIMIT_EXCEEDED = "Cache the keyless account and reuse it to avoid making too many requests.  Keyless accounts are valid until either the EphemeralKeyPair expires, when the JWK is rotated, or when the proof verifying key is changed, whichever comes soonest.", s.SERVER_ERROR = "Try again later.  See aptosApiError error for more context. For additional support join the telegram group at https://t.me/+h5CN-W35yUFiYzkx", s.CALL_PRECHECK = "Call `await account.checkKeylessAccountValidity()` to wait for asyncronous changes and check for account validity before signing or serializing.", s.REINSTANTIATE = "Try instantiating the account again.  Avoid manipulating the account object directly", s.JOIN_SUPPORT_GROUP = "For support join the telegram group at https://t.me/+h5CN-W35yUFiYzkx", s.UNKNOWN = "Error unknown. For support join the telegram group at https://t.me/+h5CN-W35yUFiYzkx", s))(O || {}), u = ((e)=>(e[e.EPHEMERAL_KEY_PAIR_EXPIRED = 0] = "EPHEMERAL_KEY_PAIR_EXPIRED", e[e.PROOF_NOT_FOUND = 1] = "PROOF_NOT_FOUND", e[e.ASYNC_PROOF_FETCH_FAILED = 2] = "ASYNC_PROOF_FETCH_FAILED", e[e.INVALID_PROOF_VERIFICATION_FAILED = 3] = "INVALID_PROOF_VERIFICATION_FAILED", e[e.INVALID_PROOF_VERIFICATION_KEY_NOT_FOUND = 4] = "INVALID_PROOF_VERIFICATION_KEY_NOT_FOUND", e[e.INVALID_JWT_SIG = 5] = "INVALID_JWT_SIG", e[e.INVALID_JWT_JWK_NOT_FOUND = 6] = "INVALID_JWT_JWK_NOT_FOUND", e[e.INVALID_JWT_ISS_NOT_RECOGNIZED = 7] = "INVALID_JWT_ISS_NOT_RECOGNIZED", e[e.INVALID_JWT_FEDERATED_ISS_NOT_SUPPORTED = 8] = "INVALID_JWT_FEDERATED_ISS_NOT_SUPPORTED", e[e.INVALID_TW_SIG_VERIFICATION_FAILED = 9] = "INVALID_TW_SIG_VERIFICATION_FAILED", e[e.INVALID_TW_SIG_PUBLIC_KEY_NOT_FOUND = 10] = "INVALID_TW_SIG_PUBLIC_KEY_NOT_FOUND", e[e.INVALID_EXPIRY_HORIZON = 11] = "INVALID_EXPIRY_HORIZON", e[e.JWT_PARSING_ERROR = 12] = "JWT_PARSING_ERROR", e[e.JWK_FETCH_FAILED = 13] = "JWK_FETCH_FAILED", e[e.JWK_FETCH_FAILED_FEDERATED = 14] = "JWK_FETCH_FAILED_FEDERATED", e[e.RATE_LIMIT_EXCEEDED = 15] = "RATE_LIMIT_EXCEEDED", e[e.PEPPER_SERVICE_INTERNAL_ERROR = 16] = "PEPPER_SERVICE_INTERNAL_ERROR", e[e.PEPPER_SERVICE_BAD_REQUEST = 17] = "PEPPER_SERVICE_BAD_REQUEST", e[e.PEPPER_SERVICE_OTHER = 18] = "PEPPER_SERVICE_OTHER", e[e.PROVER_SERVICE_INTERNAL_ERROR = 19] = "PROVER_SERVICE_INTERNAL_ERROR", e[e.PROVER_SERVICE_BAD_REQUEST = 20] = "PROVER_SERVICE_BAD_REQUEST", e[e.PROVER_SERVICE_OTHER = 21] = "PROVER_SERVICE_OTHER", e[e.FULL_NODE_CONFIG_LOOKUP_ERROR = 22] = "FULL_NODE_CONFIG_LOOKUP_ERROR", e[e.FULL_NODE_VERIFICATION_KEY_LOOKUP_ERROR = 23] = "FULL_NODE_VERIFICATION_KEY_LOOKUP_ERROR", e[e.FULL_NODE_JWKS_LOOKUP_ERROR = 24] = "FULL_NODE_JWKS_LOOKUP_ERROR", e[e.FULL_NODE_OTHER = 25] = "FULL_NODE_OTHER", e[e.SIGNATURE_TYPE_INVALID = 26] = "SIGNATURE_TYPE_INVALID", e[e.SIGNATURE_EXPIRED = 27] = "SIGNATURE_EXPIRED", e[e.MAX_EXPIRY_HORIZON_EXCEEDED = 28] = "MAX_EXPIRY_HORIZON_EXCEEDED", e[e.EPHEMERAL_SIGNATURE_VERIFICATION_FAILED = 29] = "EPHEMERAL_SIGNATURE_VERIFICATION_FAILED", e[e.TRAINING_WHEELS_SIGNATURE_MISSING = 30] = "TRAINING_WHEELS_SIGNATURE_MISSING", e[e.TRAINING_WHEELS_SIGNATURE_VERIFICATION_FAILED = 31] = "TRAINING_WHEELS_SIGNATURE_VERIFICATION_FAILED", e[e.PROOF_VERIFICATION_FAILED = 32] = "PROOF_VERIFICATION_FAILED", e[e.UNKNOWN = 33] = "UNKNOWN", e))(u || {}), A = {
    0: [
        "The ephemeral keypair has expired.",
        2,
        "Re-authentiate to continue using your keyless account"
    ],
    1: [
        "The required proof could not be found.",
        3,
        "Call `await account.checkKeylessAccountValidity()` to wait for asyncronous changes and check for account validity before signing or serializing."
    ],
    2: [
        "The required proof failed to fetch.",
        3,
        "Try re-authentiating. If the error persists join the telegram group at https://t.me/+h5CN-W35yUFiYzkx for further support"
    ],
    3: [
        "The provided proof is invalid.",
        3,
        "Try re-authentiating. If the error persists join the telegram group at https://t.me/+h5CN-W35yUFiYzkx for further support"
    ],
    4: [
        "The verification key used to authenticate was updated.",
        2,
        "Re-authentiate to continue using your keyless account"
    ],
    5: [
        "The JWK was found, but JWT failed verification",
        3,
        "Try re-authentiating. If the error persists join the telegram group at https://t.me/+h5CN-W35yUFiYzkx for further support"
    ],
    6: [
        "The JWK required to verify the JWT could not be found. The JWK may have been rotated out.",
        2,
        "Re-authentiate to continue using your keyless account"
    ],
    7: [
        "The JWT issuer is not recognized.",
        3,
        "Update the invalid request parameters and reauthenticate."
    ],
    8: [
        "The JWT issuer is not supported by the Federated Keyless ",
        0,
        "Try re-authentiating. If the error persists join the telegram group at https://t.me/+h5CN-W35yUFiYzkx for further support"
    ],
    9: [
        "The training wheels signature is invalid.",
        3,
        "Try re-authentiating. If the error persists join the telegram group at https://t.me/+h5CN-W35yUFiYzkx for further support"
    ],
    10: [
        "The public key used to verify the training wheels signature was not found.",
        2,
        "Re-authentiate to continue using your keyless account"
    ],
    11: [
        "The expiry horizon is invalid.",
        2,
        "Re-authentiate to continue using your keyless account"
    ],
    13: [
        "Failed to fetch JWKS.",
        1,
        "For support join the telegram group at https://t.me/+h5CN-W35yUFiYzkx"
    ],
    14: [
        "Failed to fetch JWKS for Federated Keyless provider.",
        1,
        "For support join the telegram group at https://t.me/+h5CN-W35yUFiYzkx"
    ],
    15: [
        "Rate limit exceeded. Too many requests in a short period.",
        0,
        "Cache the keyless account and reuse it to avoid making too many requests.  Keyless accounts are valid until either the EphemeralKeyPair expires, when the JWK is rotated, or when the proof verifying key is changed, whichever comes soonest."
    ],
    16: [
        "Internal error from Pepper service.",
        0,
        "Try again later.  See aptosApiError error for more context. For additional support join the telegram group at https://t.me/+h5CN-W35yUFiYzkx"
    ],
    17: [
        "Bad request sent to Pepper service.",
        0,
        "Update the invalid request parameters and reauthenticate."
    ],
    18: [
        "Unknown error from Pepper service.",
        0,
        "Try again later.  See aptosApiError error for more context. For additional support join the telegram group at https://t.me/+h5CN-W35yUFiYzkx"
    ],
    19: [
        "Internal error from Prover service.",
        0,
        "Try again later.  See aptosApiError error for more context. For additional support join the telegram group at https://t.me/+h5CN-W35yUFiYzkx"
    ],
    20: [
        "Bad request sent to Prover service.",
        0,
        "Update the invalid request parameters and reauthenticate."
    ],
    21: [
        "Unknown error from Prover service.",
        0,
        "Try again later.  See aptosApiError error for more context. For additional support join the telegram group at https://t.me/+h5CN-W35yUFiYzkx"
    ],
    12: [
        "Error when parsing JWT. This should never happen. Join https://t.me/+h5CN-W35yUFiYzkx for support",
        3,
        "Try instantiating the account again.  Avoid manipulating the account object directly"
    ],
    22: [
        "Error when looking up on-chain keyless configuration.",
        0,
        "Try again later.  See aptosApiError error for more context. For additional support join the telegram group at https://t.me/+h5CN-W35yUFiYzkx"
    ],
    23: [
        "Error when looking up on-chain verification key.",
        0,
        "Try again later.  See aptosApiError error for more context. For additional support join the telegram group at https://t.me/+h5CN-W35yUFiYzkx"
    ],
    24: [
        "Error when looking up on-chain JWKS.",
        0,
        "Try again later.  See aptosApiError error for more context. For additional support join the telegram group at https://t.me/+h5CN-W35yUFiYzkx"
    ],
    25: [
        "Unknown error from full node.",
        0,
        "Try again later.  See aptosApiError error for more context. For additional support join the telegram group at https://t.me/+h5CN-W35yUFiYzkx"
    ],
    26: [
        "The signature is not a valid Keyless signature.",
        4,
        "For support join the telegram group at https://t.me/+h5CN-W35yUFiYzkx"
    ],
    27: [
        "The ephemeral key pair used to sign the message has expired.",
        4,
        "Re-authentiate to continue using your keyless account"
    ],
    28: [
        "The expiry horizon on the signature exceeds the maximum allowed value.",
        4,
        "Re-authentiate to continue using your keyless account"
    ],
    29: [
        "Failed to verify the ephemeral signature with the ephemeral public key.",
        4,
        "Re-authentiate to continue using your keyless account"
    ],
    30: [
        "The training wheels signature is missing but is required by the Keyless configuration.",
        4,
        "Re-authentiate to continue using your keyless account"
    ],
    31: [
        "Failed to verify the training wheels signature with the training wheels public key.",
        4,
        "Re-authentiate to continue using your keyless account"
    ],
    32: [
        "The proof verification failed.",
        4,
        "Re-authentiate to continue using your keyless account"
    ],
    33: [
        "An unknown error has occurred.",
        5,
        "Error unknown. For support join the telegram group at https://t.me/+h5CN-W35yUFiYzkx"
    ]
}, N = class _ extends Error {
    constructor(o){
        let { innerError: r, category: E, resolutionTip: i, type: R, message: t = A[R][0], details: I } = o;
        super(t), this.name = "KeylessError", this.innerError = r, this.category = E, this.resolutionTip = i, this.type = R, this.details = I, this.message = _.constructMessage(t, i, r, I);
    }
    static constructMessage(o, r, E, i) {
        let R = `
Message: ${o}`;
        return i && (R += `
Details: ${i}`), E instanceof T ? R += `
AptosApiError: ${E.message}` : E !== void 0 && (R += `
Error: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$YFFDF22R$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])(E)}`), R += `
KeylessErrorResolutionTip: ${r}`, R;
    }
    static fromErrorType(o) {
        let { error: r, type: E, details: i } = o, [R, t, I] = A[E];
        return new _({
            message: R,
            details: i,
            innerError: r,
            category: t,
            resolutionTip: I,
            type: E
        });
    }
}, T = class extends Error {
    constructor({ apiType: o, aptosRequest: r, aptosResponse: E }){
        super(S({
            apiType: o,
            aptosRequest: r,
            aptosResponse: E
        })), this.name = "AptosApiError", this.url = E.url, this.status = E.status, this.statusText = E.statusText, this.data = E.data, this.request = r;
    }
};
function S({ apiType: _, aptosRequest: o, aptosResponse: r }) {
    let E = r.headers?.traceparent?.split("-")[1], i = E ? `(trace_id:${E}) ` : "", R = `Request to [${_}]: ${o.method} ${r.url ?? o.url} ${i}failed with`;
    return _ === "Indexer" && r.data?.errors?.[0]?.message != null ? `${R}: ${r.data.errors[0].message}` : r.data?.message != null && r.data?.error_code != null ? `${R}: ${JSON.stringify(r.data)}` : `${R} status: ${r.statusText}(code:${r.status}) and response body: ${P(r.data)}`;
}
var n = 400;
function P(_) {
    let o = JSON.stringify(_);
    return o.length <= n ? o : `truncated(original_size:${o.length}): ${o.slice(0, n / 2)}...${o.slice(-n / 2)}`;
}
;
 //# sourceMappingURL=chunk-6Y6ZO7TS.mjs.map
}}),
"[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-L33JDCWL.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "a": (()=>o)
});
var o = "1.39.0";
;
 //# sourceMappingURL=chunk-L33JDCWL.mjs.map
}}),
"[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-25O4L7YR.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "a": (()=>A),
    "b": (()=>P)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$6Y6ZO7TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-6Y6ZO7TS.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$L33JDCWL$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-L33JDCWL.mjs [app-client] (ecmascript)");
;
;
async function A(s, u) {
    let { url: t, method: n, body: i, contentType: a, params: o, overrides: e, originMethod: R } = s, p = {
        ...e?.HEADERS,
        "x-aptos-client": `aptos-typescript-sdk/${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$L33JDCWL$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"]}`,
        "content-type": a ?? "application/json",
        "x-aptos-typescript-sdk-origin-method": R
    };
    return e?.AUTH_TOKEN && (p.Authorization = `Bearer ${e?.AUTH_TOKEN}`), e?.API_KEY && (p.Authorization = `Bearer ${e?.API_KEY}`), u.provider({
        url: t,
        method: n,
        body: i,
        params: o,
        headers: p,
        overrides: e
    });
}
async function P(s, u, t) {
    let { url: n, path: i } = s, a = i ? `${n}/${i}` : n, o = await A({
        ...s,
        url: a
    }, u.client), e = {
        status: o.status,
        statusText: o.statusText ?? "No status text provided",
        data: o.data,
        headers: o.headers,
        config: o.config,
        request: o.request,
        url: a
    };
    if (e.status === 401) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$6Y6ZO7TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["e"]({
        apiType: t,
        aptosRequest: s,
        aptosResponse: e
    });
    if (t === "Indexer") {
        let R = e.data;
        if (R.errors) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$6Y6ZO7TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["e"]({
            apiType: t,
            aptosRequest: s,
            aptosResponse: e
        });
        e.data = R.data;
    } else if ((t === "Pepper" || t === "Prover") && e.status >= 400) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$6Y6ZO7TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["e"]({
        apiType: t,
        aptosRequest: s,
        aptosResponse: e
    });
    if (e.status >= 200 && e.status < 300) return e;
    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$6Y6ZO7TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["e"]({
        apiType: t,
        aptosRequest: s,
        aptosResponse: e
    });
}
;
 //# sourceMappingURL=chunk-25O4L7YR.mjs.map
}}),
"[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-GJ7STZEW.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "a": (()=>i),
    "b": (()=>y),
    "c": (()=>l),
    "d": (()=>q),
    "e": (()=>A),
    "f": (()=>m)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$25O4L7YR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-25O4L7YR.mjs [app-client] (ecmascript)");
;
async function i(e) {
    let { aptosConfig: t, overrides: s, params: r, contentType: n, acceptType: a, path: p, originMethod: o, type: R } = e, d = t.getRequestUrl(R);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$25O4L7YR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])({
        url: d,
        method: "GET",
        originMethod: o,
        path: p,
        contentType: n,
        acceptType: a,
        params: r,
        overrides: {
            ...t.clientConfig,
            ...s
        }
    }, t, e.type);
}
async function y(e) {
    let { aptosConfig: t } = e;
    return i({
        ...e,
        type: "Fullnode",
        overrides: {
            ...t.clientConfig,
            ...t.fullnodeConfig,
            ...e.overrides,
            HEADERS: {
                ...t.clientConfig?.HEADERS,
                ...t.fullnodeConfig?.HEADERS
            }
        }
    });
}
async function l(e) {
    return i({
        ...e,
        type: "Pepper"
    });
}
async function q(e) {
    let t = new Array(0), s, r = e.params;
    do {
        let n = await i({
            type: "Fullnode",
            aptosConfig: e.aptosConfig,
            originMethod: e.originMethod,
            path: e.path,
            params: r,
            overrides: e.overrides
        });
        s = n.headers["x-aptos-cursor"], delete n.headers, t.push(...n.data), r.start = s;
    }while (s != null)
    return t;
}
async function A(e) {
    let t = new Array(0), s, r = e.params, n = r.limit;
    do {
        let { response: a, cursor: p } = await m({
            ...e
        });
        if (s = p, t.push(...a.data), e?.params && (e.params.start = s), n !== void 0) {
            let o = n - t.length;
            if (o <= 0) break;
            r.limit = o;
        }
    }while (s != null)
    return t;
}
async function m(e) {
    let t, s = {};
    typeof e.params?.cursor == "string" && (s.start = e.params.cursor), typeof e.params?.limit == "number" && (s.limit = e.params.limit);
    let r = await i({
        type: "Fullnode",
        aptosConfig: e.aptosConfig,
        originMethod: e.originMethod,
        path: e.path,
        params: s,
        overrides: e.overrides
    });
    return t = r.headers["x-aptos-cursor"], {
        response: r,
        cursor: t
    };
}
;
 //# sourceMappingURL=chunk-GJ7STZEW.mjs.map
}}),
"[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-3IHKQH5O.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "a": (()=>g),
    "b": (()=>f)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$YOZBVVKL$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-YOZBVVKL.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GJ7STZEW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-GJ7STZEW.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-GYVSI3TS.mjs [app-client] (ecmascript)");
;
;
;
async function g(o) {
    let { aptosConfig: e, accountAddress: t } = o, { data: n } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GJ7STZEW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])({
        aptosConfig: e,
        originMethod: "getInfo",
        path: `accounts/${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(t).toString()}`
    });
    return n;
}
async function f(o) {
    return o.options?.ledgerVersion !== void 0 ? c(o) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$YOZBVVKL$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(async ()=>c(o), `module-${o.accountAddress}-${o.moduleName}`, 1e3 * 60 * 5)();
}
async function c(o) {
    let { aptosConfig: e, accountAddress: t, moduleName: n, options: i } = o, { data: u } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GJ7STZEW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])({
        aptosConfig: e,
        originMethod: "getModule",
        path: `accounts/${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(t).toString()}/module/${n}`,
        params: {
            ledger_version: i?.ledgerVersion
        }
    });
    return u;
}
;
 //# sourceMappingURL=chunk-3IHKQH5O.mjs.map
}}),
"[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-OYH2T6V5.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "a": (()=>r)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$NJN3EAOM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-NJN3EAOM.mjs [app-client] (ecmascript)");
;
var r = class a extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$NJN3EAOM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"] {
    constructor(e){
        super(), this.chainId = e;
    }
    serialize(e) {
        e.serializeU8(this.chainId);
    }
    static deserialize(e) {
        let s = e.deserializeU8();
        return new a(s);
    }
};
;
 //# sourceMappingURL=chunk-OYH2T6V5.mjs.map
}}),
"[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-PRUQZNAP.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "a": (()=>r)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$NJN3EAOM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-NJN3EAOM.mjs [app-client] (ecmascript)");
;
var r = class t extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$NJN3EAOM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"] {
    constructor(i){
        super(), this.identifier = i;
    }
    serialize(i) {
        i.serializeStr(this.identifier);
    }
    static deserialize(i) {
        let s = i.deserializeStr();
        return new t(s);
    }
};
;
 //# sourceMappingURL=chunk-PRUQZNAP.mjs.map
}}),
"[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-GOXRBEIJ.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "a": (()=>C),
    "b": (()=>_),
    "c": (()=>N),
    "d": (()=>W),
    "e": (()=>M)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$poseidon$2d$lite$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/poseidon-lite/index.js [app-client] (ecmascript)");
;
var i = [
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$poseidon$2d$lite$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["poseidon1"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$poseidon$2d$lite$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["poseidon2"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$poseidon$2d$lite$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["poseidon3"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$poseidon$2d$lite$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["poseidon4"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$poseidon$2d$lite$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["poseidon5"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$poseidon$2d$lite$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["poseidon6"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$poseidon$2d$lite$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["poseidon7"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$poseidon$2d$lite$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["poseidon8"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$poseidon$2d$lite$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["poseidon9"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$poseidon$2d$lite$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["poseidon10"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$poseidon$2d$lite$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["poseidon11"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$poseidon$2d$lite$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["poseidon12"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$poseidon$2d$lite$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["poseidon13"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$poseidon$2d$lite$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["poseidon14"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$poseidon$2d$lite$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["poseidon15"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$poseidon$2d$lite$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["poseidon16"]
], g = 31, m = 16, s = (m - 1) * g;
function C(n, t) {
    let o = new TextEncoder().encode(n);
    return $(o, t);
}
function $(n, t) {
    if (n.length > t) throw new Error(`Inputted bytes of length ${n} is longer than ${t}`);
    let r = _(n, t);
    return M(r);
}
function T(n, t) {
    if (n.length > t) throw new Error(`Input bytes of length ${n} is longer than ${t}`);
    let r = k(n, t);
    return P(r);
}
function _(n, t) {
    if (n.length > t) throw new Error(`Input bytes of length ${n} is longer than ${t}`);
    return T(n, t).concat([
        BigInt(n.length)
    ]);
}
function P(n) {
    if (n.length > s) throw new Error(`Can't pack more than ${s}.  Was given ${n.length} bytes`);
    return L(n, g).map((t)=>N(t));
}
function L(n, t) {
    let r = [];
    for(let o = 0; o < n.length; o += t)r.push(n.subarray(o, o + t));
    return r;
}
function N(n) {
    let t = BigInt(0);
    for(let r = n.length - 1; r >= 0; r -= 1)t = t << BigInt(8) | BigInt(n[r]);
    return t;
}
function W(n, t) {
    let r = BigInt(n), o = new Uint8Array(t);
    for(let e = 0; e < t; e += 1)o[e] = Number(r & BigInt(255)), r >>= BigInt(8);
    return o;
}
function k(n, t) {
    if (t < n.length) throw new Error("Padded size must be greater than or equal to the input array size.");
    let r = new Uint8Array(t);
    r.set(n);
    for(let o = n.length; o < t; o += 1)r[o] = 0;
    return r;
}
function M(n) {
    if (n.length > i.length) throw new Error(`Unable to hash input of length ${n.length}.  Max input length is ${i.length}`);
    return i[n.length - 1](n);
}
;
 //# sourceMappingURL=chunk-GOXRBEIJ.mjs.map
}}),
"[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-OYUW6ZN2.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "a": (()=>e)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$NJN3EAOM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-NJN3EAOM.mjs [app-client] (ecmascript)");
;
var e = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$NJN3EAOM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"] {
};
;
 //# sourceMappingURL=chunk-OYUW6ZN2.mjs.map
}}),
"[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-ROT6S6BM.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "a": (()=>o)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-STY74NUA.mjs [app-client] (ecmascript)");
;
var a = class a {
    static formatPrivateKey(i, n) {
        let e = a.AIP80_PREFIXES[n], t = i;
        return typeof t == "string" && t.startsWith(e) && (t = t.split("-")[2]), `${e}${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].fromHexInput(t).toString()}`;
    }
    static parseHexInput(i, n, e) {
        let t, p = a.AIP80_PREFIXES[n];
        if (typeof i == "string") if (!e && !i.startsWith(p)) t = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].fromHexInput(i), e !== !1 && console.warn("[Aptos SDK] It is recommended that private keys are AIP-80 compliant (https://github.com/aptos-foundation/AIPs/blob/main/aips/aip-80.md). You can fix the private key by formatting it with `PrivateKey.formatPrivateKey(privateKey: string, type: 'ed25519' | 'secp256k1'): string`.");
        else if (i.startsWith(p)) t = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].fromHexString(i.split("-")[2]);
        else throw e ? new Error("Invalid HexString input while parsing private key. Must AIP-80 compliant string.") : new Error("Invalid HexString input while parsing private key.");
        else t = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].fromHexInput(i);
        return t;
    }
};
a.AIP80_PREFIXES = {
    ed25519: "ed25519-priv-",
    secp256k1: "secp256k1-priv-"
};
var o = a;
;
 //# sourceMappingURL=chunk-ROT6S6BM.mjs.map
}}),
"[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-DPW6ELCQ.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "a": (()=>o)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-STY74NUA.mjs [app-client] (ecmascript)");
;
var o = (n)=>typeof n == "string" ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].isValid(n).valid ? n : new TextEncoder().encode(n) : n;
;
 //# sourceMappingURL=chunk-DPW6ELCQ.mjs.map
}}),
"[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-C3Q23D22.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "a": (()=>d),
    "b": (()=>m),
    "c": (()=>y),
    "d": (()=>u),
    "e": (()=>D),
    "f": (()=>E),
    "g": (()=>A),
    "h": (()=>f),
    "i": (()=>U),
    "j": (()=>h)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$hmac$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@noble/hashes/esm/hmac.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$sha512$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@noble/hashes/esm/sha512.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$scure$2f$bip39$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@scure/bip39/esm/index.js [app-client] (ecmascript)");
;
;
;
var d = /^m\/44'\/637'\/[0-9]+'\/[0-9]+'\/[0-9]+'?$/, m = /^m\/44'\/637'\/[0-9]+'\/[0-9]+\/[0-9]+$/, y = ((t)=>(t.ED25519 = "ed25519 seed", t))(y || {}), u = 2147483648;
function D(e) {
    return m.test(e);
}
function E(e) {
    return d.test(e);
}
var A = (e, t)=>{
    let r = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$hmac$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hmac"].create(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$sha512$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sha512"], e).update(t).digest();
    return {
        key: r.slice(0, 32),
        chainCode: r.slice(32)
    };
}, f = ({ key: e, chainCode: t }, r)=>{
    let n = new ArrayBuffer(4);
    new DataView(n).setUint32(0, r);
    let o = new Uint8Array(n), s = new Uint8Array([
        0
    ]), a = new Uint8Array([
        ...s,
        ...e,
        ...o
    ]);
    return A(t, a);
}, x = (e)=>e.replace(/'/g, ""), U = (e)=>e.split("/").slice(1).map(x), h = (e)=>{
    let t = e.trim().split(/\s+/).map((r)=>r.toLowerCase()).join(" ");
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$scure$2f$bip39$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mnemonicToSeedSync"])(t);
};
;
 //# sourceMappingURL=chunk-C3Q23D22.mjs.map
}}),
"[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-BYINW7I2.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "a": (()=>r),
    "b": (()=>n)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$NJN3EAOM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-NJN3EAOM.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-STY74NUA.mjs [app-client] (ecmascript)");
;
;
var r = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$NJN3EAOM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"] {
    async verifySignatureAsync(t) {
        return this.verifySignature(t);
    }
    toUint8Array() {
        return this.bcsToBytes();
    }
    toString() {
        let t = this.toUint8Array();
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].fromHexInput(t).toString();
    }
}, n = class extends r {
};
;
 //# sourceMappingURL=chunk-BYINW7I2.mjs.map
}}),
"[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-Z6KQX6VX.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "a": (()=>o)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$NJN3EAOM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-NJN3EAOM.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-STY74NUA.mjs [app-client] (ecmascript)");
;
;
var o = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$NJN3EAOM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"] {
    toUint8Array() {
        return this.bcsToBytes();
    }
    toString() {
        let i = this.toUint8Array();
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].fromHexInput(i).toString();
    }
};
;
 //# sourceMappingURL=chunk-Z6KQX6VX.mjs.map
}}),
"[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-V7U5Y4AU.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "a": (()=>m),
    "b": (()=>v),
    "c": (()=>l)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$ROT6S6BM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-ROT6S6BM.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$DPW6ELCQ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-DPW6ELCQ.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$C3Q23D22$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-C3Q23D22.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$BYINW7I2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-BYINW7I2.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$Z6KQX6VX$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-Z6KQX6VX.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$NJN3EAOM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-NJN3EAOM.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-STY74NUA.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$sha3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@noble/hashes/esm/sha3.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$secp256k1$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@noble/curves/esm/secp256k1.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$scure$2f$bip32$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@scure/bip32/lib/esm/index.js [app-client] (ecmascript)");
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
var i = class i extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$BYINW7I2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"] {
    constructor(e){
        super();
        let t = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].fromHexInput(e), { length: r } = t.toUint8Array();
        if (r === i.LENGTH) this.key = t;
        else if (r === i.COMPRESSED_LENGTH) {
            let o = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$secp256k1$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["secp256k1"].ProjectivePoint.fromHex(t.toUint8Array());
            this.key = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].fromHexInput(o.toRawBytes(!1));
        } else throw new Error(`PublicKey length should be ${i.LENGTH} or ${i.COMPRESSED_LENGTH}, received ${r}`);
    }
    verifySignature(e) {
        let { message: t, signature: r } = e, o = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$DPW6ELCQ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(t), c = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].fromHexInput(o).toUint8Array(), x = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$sha3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sha3_256"])(c), P = r.toUint8Array();
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$secp256k1$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["secp256k1"].verify(P, x, this.key.toUint8Array(), {
            lowS: !0
        });
    }
    async verifySignatureAsync(e) {
        return this.verifySignature(e);
    }
    toUint8Array() {
        return this.key.toUint8Array();
    }
    serialize(e) {
        e.serializeBytes(this.key.toUint8Array());
    }
    deserialize(e) {
        let t = e.deserializeBytes();
        return new l(t);
    }
    static deserialize(e) {
        let t = e.deserializeBytes();
        return new i(t);
    }
    static isPublicKey(e) {
        return e instanceof i;
    }
    static isInstance(e) {
        return "key" in e && e.key?.data?.length === i.LENGTH;
    }
};
i.LENGTH = 65, i.COMPRESSED_LENGTH = 33;
var m = i, n = class n extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$NJN3EAOM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"] {
    constructor(e, t){
        super();
        let r = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$ROT6S6BM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"].parseHexInput(e, "secp256k1", t);
        if (r.toUint8Array().length !== n.LENGTH) throw new Error(`PrivateKey length should be ${n.LENGTH}`);
        this.key = r;
    }
    static generate() {
        let e = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$secp256k1$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["secp256k1"].utils.randomPrivateKey();
        return new n(e, !1);
    }
    static fromDerivationPath(e, t) {
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$C3Q23D22$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["e"])(e)) throw new Error(`Invalid derivation path ${e}`);
        return n.fromDerivationPathInner(e, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$C3Q23D22$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["j"])(t));
    }
    static fromDerivationPathInner(e, t) {
        let { privateKey: r } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$scure$2f$bip32$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HDKey"].fromMasterSeed(t).derive(e);
        if (r === null) throw new Error("Invalid key");
        return new n(r, !1);
    }
    sign(e) {
        let t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$DPW6ELCQ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(e), r = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].fromHexInput(t), o = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$sha3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sha3_256"])(r.toUint8Array()), c = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$secp256k1$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["secp256k1"].sign(o, this.key.toUint8Array(), {
            lowS: !0
        });
        return new l(c.toCompactRawBytes());
    }
    publicKey() {
        let e = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$secp256k1$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["secp256k1"].getPublicKey(this.key.toUint8Array(), !1);
        return new m(e);
    }
    toUint8Array() {
        return this.key.toUint8Array();
    }
    toString() {
        return this.toHexString();
    }
    toHexString() {
        return this.key.toString();
    }
    toAIP80String() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$ROT6S6BM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"].formatPrivateKey(this.key.toString(), "secp256k1");
    }
    serialize(e) {
        e.serializeBytes(this.toUint8Array());
    }
    static deserialize(e) {
        let t = e.deserializeBytes();
        return new n(t, !1);
    }
    static isPrivateKey(e) {
        return e instanceof n;
    }
};
n.LENGTH = 32;
var v = n, a = class a extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$Z6KQX6VX$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"] {
    constructor(e){
        super();
        let t = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].fromHexInput(e);
        if (t.toUint8Array().length !== a.LENGTH) throw new Error(`Signature length should be ${a.LENGTH}, received ${t.toUint8Array().length}`);
        this.data = t;
    }
    toUint8Array() {
        return this.data.toUint8Array();
    }
    serialize(e) {
        e.serializeBytes(this.data.toUint8Array());
    }
    static deserialize(e) {
        let t = e.deserializeBytes();
        return new a(t);
    }
};
a.LENGTH = 64;
var l = a;
;
 //# sourceMappingURL=chunk-V7U5Y4AU.mjs.map
}}),
"[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-6PKBXYG3.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "a": (()=>s)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-GYVSI3TS.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$NJN3EAOM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-NJN3EAOM.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-STY74NUA.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$sha3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@noble/hashes/esm/sha3.js [app-client] (ecmascript)");
;
;
;
;
var r = class r extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$NJN3EAOM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"] {
    constructor(t){
        super();
        let { data: e } = t, i = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].fromHexInput(e);
        if (i.toUint8Array().length !== r.LENGTH) throw new Error(`Authentication Key length should be ${r.LENGTH}`);
        this.data = i;
    }
    serialize(t) {
        t.serializeFixedBytes(this.data.toUint8Array());
    }
    static deserialize(t) {
        let e = t.deserializeFixedBytes(r.LENGTH);
        return new r({
            data: e
        });
    }
    toUint8Array() {
        return this.data.toUint8Array();
    }
    static fromSchemeAndBytes(t) {
        let { scheme: e, input: i } = t, u = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].fromHexInput(i).toUint8Array(), h = new Uint8Array([
            ...u,
            e
        ]), a = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$sha3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sha3_256"].create();
        a.update(h);
        let y = a.digest();
        return new r({
            data: y
        });
    }
    static fromPublicKeyAndScheme(t) {
        let { publicKey: e } = t;
        return e.authKey();
    }
    static fromPublicKey(t) {
        let { publicKey: e } = t;
        return e.authKey();
    }
    derivedAddress() {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"](this.data.toUint8Array());
    }
};
r.LENGTH = 32;
var s = r;
;
 //# sourceMappingURL=chunk-6PKBXYG3.mjs.map
}}),
"[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-YQIAWAPY.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "a": (()=>T),
    "b": (()=>f),
    "c": (()=>z),
    "d": (()=>h)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$ROT6S6BM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-ROT6S6BM.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$DPW6ELCQ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-DPW6ELCQ.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$C3Q23D22$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-C3Q23D22.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$BYINW7I2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-BYINW7I2.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$Z6KQX6VX$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-Z6KQX6VX.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$6PKBXYG3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-6PKBXYG3.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$NJN3EAOM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-NJN3EAOM.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-STY74NUA.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$ed25519$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@noble/curves/esm/ed25519.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
var m = [
    237,
    211,
    245,
    92,
    26,
    99,
    18,
    88,
    214,
    156,
    247,
    162,
    222,
    249,
    222,
    20,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    16
];
function T(I) {
    let e = I.toUint8Array().slice(32);
    for(let t = m.length - 1; t >= 0; t -= 1){
        if (e[t] < m[t]) return !0;
        if (e[t] > m[t]) return !1;
    }
    return !1;
}
var n = class n extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$BYINW7I2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"] {
    constructor(e){
        super();
        let t = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].fromHexInput(e);
        if (t.toUint8Array().length !== n.LENGTH) throw new Error(`PublicKey length should be ${n.LENGTH}`);
        this.key = t;
    }
    verifySignature(e) {
        let { message: t, signature: i } = e;
        if (!T(i)) return !1;
        let a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$DPW6ELCQ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(t), u = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].fromHexInput(a).toUint8Array(), c = i.toUint8Array(), l = this.key.toUint8Array();
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$ed25519$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ed25519"].verify(c, u, l);
    }
    async verifySignatureAsync(e) {
        return this.verifySignature(e);
    }
    authKey() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$6PKBXYG3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"].fromSchemeAndBytes({
            scheme: 0,
            input: this.toUint8Array()
        });
    }
    toUint8Array() {
        return this.key.toUint8Array();
    }
    serialize(e) {
        e.serializeBytes(this.key.toUint8Array());
    }
    static deserialize(e) {
        let t = e.deserializeBytes();
        return new n(t);
    }
    static isPublicKey(e) {
        return e instanceof n;
    }
    static isInstance(e) {
        return "key" in e && e.key?.data?.length === n.LENGTH;
    }
};
n.LENGTH = 32;
var f = n, r = class r extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$NJN3EAOM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"] {
    constructor(e, t){
        super();
        let i = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$ROT6S6BM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"].parseHexInput(e, "ed25519", t);
        if (i.toUint8Array().length !== r.LENGTH) throw new Error(`PrivateKey length should be ${r.LENGTH}`);
        this.signingKey = i;
    }
    static generate() {
        let e = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$ed25519$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ed25519"].utils.randomPrivateKey();
        return new r(e, !1);
    }
    static fromDerivationPath(e, t) {
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$C3Q23D22$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["f"])(e)) throw new Error(`Invalid derivation path ${e}`);
        return r.fromDerivationPathInner(e, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$C3Q23D22$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["j"])(t));
    }
    static fromDerivationPathInner(e, t, i = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$C3Q23D22$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"]) {
        let { key: a, chainCode: u } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$C3Q23D22$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["g"])(r.SLIP_0010_SEED, t), c = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$C3Q23D22$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["i"])(e).map((g)=>parseInt(g, 10)), { key: l } = c.reduce((g, w)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$C3Q23D22$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["h"])(g, w + i), {
            key: a,
            chainCode: u
        });
        return new r(l, !1);
    }
    publicKey() {
        let e = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$ed25519$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ed25519"].getPublicKey(this.signingKey.toUint8Array());
        return new f(e);
    }
    sign(e) {
        let t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$DPW6ELCQ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(e), i = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].fromHexInput(t).toUint8Array(), a = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$ed25519$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ed25519"].sign(i, this.signingKey.toUint8Array());
        return new h(a);
    }
    toUint8Array() {
        return this.signingKey.toUint8Array();
    }
    toString() {
        return this.toHexString();
    }
    toHexString() {
        return this.signingKey.toString();
    }
    toAIP80String() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$ROT6S6BM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"].formatPrivateKey(this.signingKey.toString(), "ed25519");
    }
    serialize(e) {
        e.serializeBytes(this.toUint8Array());
    }
    static deserialize(e) {
        let t = e.deserializeBytes();
        return new r(t, !1);
    }
    static isPrivateKey(e) {
        return e instanceof r;
    }
};
r.LENGTH = 32, r.SLIP_0010_SEED = "ed25519 seed";
var z = r, s = class s extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$Z6KQX6VX$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"] {
    constructor(e){
        super();
        let t = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].fromHexInput(e);
        if (t.toUint8Array().length !== s.LENGTH) throw new Error(`Signature length should be ${s.LENGTH}`);
        this.data = t;
    }
    toUint8Array() {
        return this.data.toUint8Array();
    }
    serialize(e) {
        e.serializeBytes(this.data.toUint8Array());
    }
    static deserialize(e) {
        let t = e.deserializeBytes();
        return new s(t);
    }
};
s.LENGTH = 64;
var h = s;
;
 //# sourceMappingURL=chunk-YQIAWAPY.mjs.map
}}),
"[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-WTLQD6MR.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "a": (()=>c),
    "b": (()=>p)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$YQIAWAPY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-YQIAWAPY.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$BYINW7I2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-BYINW7I2.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$Z6KQX6VX$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-Z6KQX6VX.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$JGFKIUG5$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-JGFKIUG5.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-STY74NUA.mjs [app-client] (ecmascript)");
;
;
;
;
;
var c = class i extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$BYINW7I2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"] {
    constructor(e){
        super();
        let r = e.constructor.name;
        switch(r){
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$YQIAWAPY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].name:
                this.publicKey = e, this.variant = 0;
                break;
            default:
                throw new Error(`Unsupported key for EphemeralPublicKey - ${r}`);
        }
    }
    verifySignature(e) {
        let { message: r, signature: a } = e;
        return this.publicKey.verifySignature({
            message: r,
            signature: a.signature
        });
    }
    async verifySignatureAsync(e) {
        return this.verifySignature(e);
    }
    serialize(e) {
        if (this.publicKey instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$YQIAWAPY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"]) e.serializeU32AsUleb128(0), this.publicKey.serialize(e);
        else throw new Error("Unknown public key type");
    }
    static deserialize(e) {
        let r = e.deserializeUleb128AsU32();
        switch(r){
            case 0:
                return new i(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$YQIAWAPY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].deserialize(e));
            default:
                throw new Error(`Unknown variant index for EphemeralPublicKey: ${r}`);
        }
    }
    static isPublicKey(e) {
        return e instanceof i;
    }
}, p = class i extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$Z6KQX6VX$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"] {
    constructor(e){
        super();
        let r = e.constructor.name;
        switch(r){
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$YQIAWAPY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"].name:
                this.signature = e;
                break;
            default:
                throw new Error(`Unsupported signature for EphemeralSignature - ${r}`);
        }
    }
    static fromHex(e) {
        let r = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].fromHexInput(e), a = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$JGFKIUG5$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"](r.toUint8Array());
        return i.deserialize(a);
    }
    serialize(e) {
        if (this.signature instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$YQIAWAPY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"]) e.serializeU32AsUleb128(0), this.signature.serialize(e);
        else throw new Error("Unknown signature type");
    }
    static deserialize(e) {
        let r = e.deserializeUleb128AsU32();
        switch(r){
            case 0:
                return new i(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$YQIAWAPY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"].deserialize(e));
            default:
                throw new Error(`Unknown variant index for EphemeralSignature: ${r}`);
        }
    }
};
;
 //# sourceMappingURL=chunk-WTLQD6MR.mjs.map
}}),
"[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-W4BSN6SK.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "a": (()=>i),
    "b": (()=>u)
});
function i(r, o, t) {
    let n = t.value;
    return t.value = async function(...e) {
        let [a] = e;
        if (a.transaction.feePayerAddress && !a.feePayerAuthenticator) throw new Error("You are submitting a Fee Payer transaction but missing the feePayerAuthenticator");
        return n.apply(this, e);
    }, t;
}
function u(r, o, t) {
    let n = t.value;
    return t.value = async function(...e) {
        return n.apply(this, e);
    }, t;
}
;
 //# sourceMappingURL=chunk-W4BSN6SK.mjs.map
}}),
"[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-FBCXUC7J.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "a": (()=>n),
    "b": (()=>a)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$BYINW7I2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-BYINW7I2.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$Z6KQX6VX$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-Z6KQX6VX.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$6PKBXYG3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-6PKBXYG3.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-STY74NUA.mjs [app-client] (ecmascript)");
;
;
;
;
var n = class e extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$Z6KQX6VX$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"] {
    constructor(r){
        super(), this.value = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].fromHexInput(r).toUint8Array();
    }
    serialize(r) {
        r.serializeBytes(this.value);
    }
    static deserialize(r) {
        return new e(r.deserializeBytes());
    }
}, a = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$BYINW7I2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"] {
    constructor(r){
        super(), this.accountAddress = r;
    }
    authKey() {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$6PKBXYG3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"]({
            data: this.accountAddress.toUint8Array()
        });
    }
    verifySignature(r) {
        throw new Error("This function is not implemented for AbstractPublicKey.");
    }
    async verifySignatureAsync(r) {
        throw new Error("This function is not implemented for AbstractPublicKey.");
    }
    serialize(r) {
        throw new Error("This function is not implemented for AbstractPublicKey.");
    }
};
;
 //# sourceMappingURL=chunk-FBCXUC7J.mjs.map
}}),
"[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-VHNX2NUR.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "A": (()=>D),
    "B": (()=>I),
    "a": (()=>a),
    "b": (()=>i),
    "c": (()=>s),
    "d": (()=>_),
    "e": (()=>u),
    "f": (()=>c),
    "g": (()=>d),
    "h": (()=>l),
    "i": (()=>y),
    "j": (()=>p),
    "k": (()=>m),
    "l": (()=>g),
    "m": (()=>T),
    "n": (()=>b),
    "o": (()=>$),
    "p": (()=>k),
    "q": (()=>f),
    "r": (()=>h),
    "s": (()=>G),
    "t": (()=>w),
    "u": (()=>v),
    "v": (()=>C),
    "w": (()=>A),
    "x": (()=>q),
    "y": (()=>Q),
    "z": (()=>x)
});
var a = `
    fragment TokenActivitiesFields on token_activities_v2 {
  after_value
  before_value
  entry_function_id_str
  event_account_address
  event_index
  from_address
  is_fungible_v2
  property_version_v1
  to_address
  token_amount
  token_data_id
  token_standard
  transaction_timestamp
  transaction_version
  type
}
    `, i = `
    fragment AnsTokenFragment on current_aptos_names {
  domain
  expiration_timestamp
  registered_address
  subdomain
  token_standard
  is_primary
  owner_address
  subdomain_expiration_policy
  domain_expiration_timestamp
}
    `, s = `
    fragment CurrentTokenOwnershipFields on current_token_ownerships_v2 {
  token_standard
  token_properties_mutated_v1
  token_data_id
  table_type_v1
  storage_id
  property_version_v1
  owner_address
  last_transaction_version
  last_transaction_timestamp
  is_soulbound_v2
  is_fungible_v2
  amount
  current_token_data {
    collection_id
    description
    is_fungible_v2
    largest_property_version_v1
    last_transaction_timestamp
    last_transaction_version
    maximum
    supply
    token_data_id
    token_name
    token_properties
    token_standard
    token_uri
    decimals
    current_collection {
      collection_id
      collection_name
      creator_address
      current_supply
      description
      last_transaction_timestamp
      last_transaction_version
      max_supply
      mutable_description
      mutable_uri
      table_handle_v1
      token_standard
      total_minted_v2
      uri
    }
  }
}
    `, _ = `
    query getAccountCoinsCount($address: String) {
  current_fungible_asset_balances_aggregate(
    where: {owner_address: {_eq: $address}}
  ) {
    aggregate {
      count
    }
  }
}
    `, u = `
    query getAccountCoinsData($where_condition: current_fungible_asset_balances_bool_exp!, $offset: Int, $limit: Int, $order_by: [current_fungible_asset_balances_order_by!]) {
  current_fungible_asset_balances(
    where: $where_condition
    offset: $offset
    limit: $limit
    order_by: $order_by
  ) {
    amount
    asset_type
    is_frozen
    is_primary
    last_transaction_timestamp
    last_transaction_version
    owner_address
    storage_id
    token_standard
    metadata {
      token_standard
      symbol
      supply_aggregator_table_key_v1
      supply_aggregator_table_handle_v1
      project_uri
      name
      last_transaction_version
      last_transaction_timestamp
      icon_uri
      decimals
      creator_address
      asset_type
    }
  }
}
    `, c = `
    query getAccountCollectionsWithOwnedTokens($where_condition: current_collection_ownership_v2_view_bool_exp!, $offset: Int, $limit: Int, $order_by: [current_collection_ownership_v2_view_order_by!]) {
  current_collection_ownership_v2_view(
    where: $where_condition
    offset: $offset
    limit: $limit
    order_by: $order_by
  ) {
    current_collection {
      collection_id
      collection_name
      creator_address
      current_supply
      description
      last_transaction_timestamp
      last_transaction_version
      mutable_description
      max_supply
      mutable_uri
      table_handle_v1
      token_standard
      total_minted_v2
      uri
    }
    collection_id
    collection_name
    collection_uri
    creator_address
    distinct_tokens
    last_transaction_version
    owner_address
    single_token_uri
  }
}
    `, d = `
    query getAccountOwnedTokens($where_condition: current_token_ownerships_v2_bool_exp!, $offset: Int, $limit: Int, $order_by: [current_token_ownerships_v2_order_by!]) {
  current_token_ownerships_v2(
    where: $where_condition
    offset: $offset
    limit: $limit
    order_by: $order_by
  ) {
    ...CurrentTokenOwnershipFields
  }
}
    ${s}`, l = `
    query getAccountOwnedTokensByTokenData($where_condition: current_token_ownerships_v2_bool_exp!, $offset: Int, $limit: Int, $order_by: [current_token_ownerships_v2_order_by!]) {
  current_token_ownerships_v2(
    where: $where_condition
    offset: $offset
    limit: $limit
    order_by: $order_by
  ) {
    ...CurrentTokenOwnershipFields
  }
}
    ${s}`, y = `
    query getAccountOwnedTokensFromCollection($where_condition: current_token_ownerships_v2_bool_exp!, $offset: Int, $limit: Int, $order_by: [current_token_ownerships_v2_order_by!]) {
  current_token_ownerships_v2(
    where: $where_condition
    offset: $offset
    limit: $limit
    order_by: $order_by
  ) {
    ...CurrentTokenOwnershipFields
  }
}
    ${s}`, p = `
    query getAccountTokensCount($where_condition: current_token_ownerships_v2_bool_exp, $offset: Int, $limit: Int) {
  current_token_ownerships_v2_aggregate(
    where: $where_condition
    offset: $offset
    limit: $limit
  ) {
    aggregate {
      count
    }
  }
}
    `, m = `
    query getAccountTransactionsCount($address: String) {
  account_transactions_aggregate(where: {account_address: {_eq: $address}}) {
    aggregate {
      count
    }
  }
}
    `, g = `
    query getChainTopUserTransactions($limit: Int) {
  user_transactions(limit: $limit, order_by: {version: desc}) {
    version
  }
}
    `, T = `
    query getCollectionData($where_condition: current_collections_v2_bool_exp!) {
  current_collections_v2(where: $where_condition) {
    uri
    total_minted_v2
    token_standard
    table_handle_v1
    mutable_uri
    mutable_description
    max_supply
    collection_id
    collection_name
    creator_address
    current_supply
    description
    last_transaction_timestamp
    last_transaction_version
    cdn_asset_uris {
      cdn_image_uri
      asset_uri
      animation_optimizer_retry_count
      cdn_animation_uri
      cdn_json_uri
      image_optimizer_retry_count
      json_parser_retry_count
      raw_animation_uri
      raw_image_uri
    }
  }
}
    `, b = `
    query getCurrentFungibleAssetBalances($where_condition: current_fungible_asset_balances_bool_exp, $offset: Int, $limit: Int) {
  current_fungible_asset_balances(
    where: $where_condition
    offset: $offset
    limit: $limit
  ) {
    amount
    asset_type
    is_frozen
    is_primary
    last_transaction_timestamp
    last_transaction_version
    owner_address
    storage_id
    token_standard
  }
}
    `, $ = `
    query getDelegatedStakingActivities($delegatorAddress: String, $poolAddress: String) {
  delegated_staking_activities(
    where: {delegator_address: {_eq: $delegatorAddress}, pool_address: {_eq: $poolAddress}}
  ) {
    amount
    delegator_address
    event_index
    event_type
    pool_address
    transaction_version
  }
}
    `, k = `
    query getEvents($where_condition: events_bool_exp, $offset: Int, $limit: Int, $order_by: [events_order_by!]) {
  events(
    where: $where_condition
    offset: $offset
    limit: $limit
    order_by: $order_by
  ) {
    account_address
    creation_number
    data
    event_index
    sequence_number
    transaction_block_height
    transaction_version
    type
    indexed_type
  }
}
    `, f = `
    query getFungibleAssetActivities($where_condition: fungible_asset_activities_bool_exp, $offset: Int, $limit: Int) {
  fungible_asset_activities(
    where: $where_condition
    offset: $offset
    limit: $limit
  ) {
    amount
    asset_type
    block_height
    entry_function_id_str
    event_index
    gas_fee_payer_address
    is_frozen
    is_gas_fee
    is_transaction_success
    owner_address
    storage_id
    storage_refund_amount
    token_standard
    transaction_timestamp
    transaction_version
    type
  }
}
    `, h = `
    query getFungibleAssetMetadata($where_condition: fungible_asset_metadata_bool_exp, $offset: Int, $limit: Int) {
  fungible_asset_metadata(where: $where_condition, offset: $offset, limit: $limit) {
    icon_uri
    project_uri
    supply_aggregator_table_handle_v1
    supply_aggregator_table_key_v1
    creator_address
    asset_type
    decimals
    last_transaction_timestamp
    last_transaction_version
    name
    symbol
    token_standard
    supply_v2
    maximum_v2
  }
}
    `, G = `
    query getNames($offset: Int, $limit: Int, $where_condition: current_aptos_names_bool_exp, $order_by: [current_aptos_names_order_by!]) {
  current_aptos_names(
    limit: $limit
    where: $where_condition
    order_by: $order_by
    offset: $offset
  ) {
    ...AnsTokenFragment
  }
}
    ${i}`, w = `
    query getNumberOfDelegators($where_condition: num_active_delegator_per_pool_bool_exp, $order_by: [num_active_delegator_per_pool_order_by!]) {
  num_active_delegator_per_pool(where: $where_condition, order_by: $order_by) {
    num_active_delegator
    pool_address
  }
}
    `, v = `
    query getObjectData($where_condition: current_objects_bool_exp, $offset: Int, $limit: Int, $order_by: [current_objects_order_by!]) {
  current_objects(
    where: $where_condition
    offset: $offset
    limit: $limit
    order_by: $order_by
  ) {
    allow_ungated_transfer
    state_key_hash
    owner_address
    object_address
    last_transaction_version
    last_guid_creation_num
    is_deleted
  }
}
    `, C = `
    query getProcessorStatus($where_condition: processor_status_bool_exp) {
  processor_status(where: $where_condition) {
    last_success_version
    processor
    last_updated
  }
}
    `, A = `
    query getTableItemsData($where_condition: table_items_bool_exp!, $offset: Int, $limit: Int, $order_by: [table_items_order_by!]) {
  table_items(
    where: $where_condition
    offset: $offset
    limit: $limit
    order_by: $order_by
  ) {
    decoded_key
    decoded_value
    key
    table_handle
    transaction_version
    write_set_change_index
  }
}
    `, q = `
    query getTableItemsMetadata($where_condition: table_metadatas_bool_exp!, $offset: Int, $limit: Int, $order_by: [table_metadatas_order_by!]) {
  table_metadatas(
    where: $where_condition
    offset: $offset
    limit: $limit
    order_by: $order_by
  ) {
    handle
    key_type
    value_type
  }
}
    `, Q = `
    query getTokenActivity($where_condition: token_activities_v2_bool_exp!, $offset: Int, $limit: Int, $order_by: [token_activities_v2_order_by!]) {
  token_activities_v2(
    where: $where_condition
    order_by: $order_by
    offset: $offset
    limit: $limit
  ) {
    ...TokenActivitiesFields
  }
}
    ${a}`, x = `
    query getCurrentTokenOwnership($where_condition: current_token_ownerships_v2_bool_exp!, $offset: Int, $limit: Int, $order_by: [current_token_ownerships_v2_order_by!]) {
  current_token_ownerships_v2(
    where: $where_condition
    offset: $offset
    limit: $limit
    order_by: $order_by
  ) {
    ...CurrentTokenOwnershipFields
  }
}
    ${s}`, D = `
    query getTokenData($where_condition: current_token_datas_v2_bool_exp, $offset: Int, $limit: Int, $order_by: [current_token_datas_v2_order_by!]) {
  current_token_datas_v2(
    where: $where_condition
    offset: $offset
    limit: $limit
    order_by: $order_by
  ) {
    collection_id
    description
    is_fungible_v2
    largest_property_version_v1
    last_transaction_timestamp
    last_transaction_version
    maximum
    supply
    token_data_id
    token_name
    token_properties
    token_standard
    token_uri
    decimals
    current_collection {
      collection_id
      collection_name
      creator_address
      current_supply
      description
      last_transaction_timestamp
      last_transaction_version
      max_supply
      mutable_description
      mutable_uri
      table_handle_v1
      token_standard
      total_minted_v2
      uri
    }
  }
}
    `, O = (n, o, e, t)=>n();
function I(n, o = O) {
    return {
        getAccountCoinsCount (e, t) {
            return o((r)=>n.request(_, e, {
                    ...t,
                    ...r
                }), "getAccountCoinsCount", "query", e);
        },
        getAccountCoinsData (e, t) {
            return o((r)=>n.request(u, e, {
                    ...t,
                    ...r
                }), "getAccountCoinsData", "query", e);
        },
        getAccountCollectionsWithOwnedTokens (e, t) {
            return o((r)=>n.request(c, e, {
                    ...t,
                    ...r
                }), "getAccountCollectionsWithOwnedTokens", "query", e);
        },
        getAccountOwnedTokens (e, t) {
            return o((r)=>n.request(d, e, {
                    ...t,
                    ...r
                }), "getAccountOwnedTokens", "query", e);
        },
        getAccountOwnedTokensByTokenData (e, t) {
            return o((r)=>n.request(l, e, {
                    ...t,
                    ...r
                }), "getAccountOwnedTokensByTokenData", "query", e);
        },
        getAccountOwnedTokensFromCollection (e, t) {
            return o((r)=>n.request(y, e, {
                    ...t,
                    ...r
                }), "getAccountOwnedTokensFromCollection", "query", e);
        },
        getAccountTokensCount (e, t) {
            return o((r)=>n.request(p, e, {
                    ...t,
                    ...r
                }), "getAccountTokensCount", "query", e);
        },
        getAccountTransactionsCount (e, t) {
            return o((r)=>n.request(m, e, {
                    ...t,
                    ...r
                }), "getAccountTransactionsCount", "query", e);
        },
        getChainTopUserTransactions (e, t) {
            return o((r)=>n.request(g, e, {
                    ...t,
                    ...r
                }), "getChainTopUserTransactions", "query", e);
        },
        getCollectionData (e, t) {
            return o((r)=>n.request(T, e, {
                    ...t,
                    ...r
                }), "getCollectionData", "query", e);
        },
        getCurrentFungibleAssetBalances (e, t) {
            return o((r)=>n.request(b, e, {
                    ...t,
                    ...r
                }), "getCurrentFungibleAssetBalances", "query", e);
        },
        getDelegatedStakingActivities (e, t) {
            return o((r)=>n.request($, e, {
                    ...t,
                    ...r
                }), "getDelegatedStakingActivities", "query", e);
        },
        getEvents (e, t) {
            return o((r)=>n.request(k, e, {
                    ...t,
                    ...r
                }), "getEvents", "query", e);
        },
        getFungibleAssetActivities (e, t) {
            return o((r)=>n.request(f, e, {
                    ...t,
                    ...r
                }), "getFungibleAssetActivities", "query", e);
        },
        getFungibleAssetMetadata (e, t) {
            return o((r)=>n.request(h, e, {
                    ...t,
                    ...r
                }), "getFungibleAssetMetadata", "query", e);
        },
        getNames (e, t) {
            return o((r)=>n.request(G, e, {
                    ...t,
                    ...r
                }), "getNames", "query", e);
        },
        getNumberOfDelegators (e, t) {
            return o((r)=>n.request(w, e, {
                    ...t,
                    ...r
                }), "getNumberOfDelegators", "query", e);
        },
        getObjectData (e, t) {
            return o((r)=>n.request(v, e, {
                    ...t,
                    ...r
                }), "getObjectData", "query", e);
        },
        getProcessorStatus (e, t) {
            return o((r)=>n.request(C, e, {
                    ...t,
                    ...r
                }), "getProcessorStatus", "query", e);
        },
        getTableItemsData (e, t) {
            return o((r)=>n.request(A, e, {
                    ...t,
                    ...r
                }), "getTableItemsData", "query", e);
        },
        getTableItemsMetadata (e, t) {
            return o((r)=>n.request(q, e, {
                    ...t,
                    ...r
                }), "getTableItemsMetadata", "query", e);
        },
        getTokenActivity (e, t) {
            return o((r)=>n.request(Q, e, {
                    ...t,
                    ...r
                }), "getTokenActivity", "query", e);
        },
        getCurrentTokenOwnership (e, t) {
            return o((r)=>n.request(x, e, {
                    ...t,
                    ...r
                }), "getCurrentTokenOwnership", "query", e);
        },
        getTokenData (e, t) {
            return o((r)=>n.request(D, e, {
                    ...t,
                    ...r
                }), "getTokenData", "query", e);
        }
    };
}
;
 //# sourceMappingURL=chunk-VHNX2NUR.mjs.map
}}),
"[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-GQ557FEA.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "a": (()=>o),
    "b": (()=>q),
    "c": (()=>C),
    "d": (()=>E),
    "e": (()=>a),
    "f": (()=>m)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$25O4L7YR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-25O4L7YR.mjs [app-client] (ecmascript)");
;
async function o(e) {
    let { type: t, originMethod: s, path: i, body: r, acceptType: R, contentType: f, params: c, aptosConfig: n, overrides: A } = e, d = n.getRequestUrl(t);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$25O4L7YR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])({
        url: d,
        method: "POST",
        originMethod: s,
        path: i,
        body: r,
        contentType: f,
        acceptType: R,
        params: c,
        overrides: A
    }, n, e.type);
}
async function q(e) {
    let { aptosConfig: t } = e;
    return o({
        ...e,
        type: "Fullnode",
        overrides: {
            ...t.clientConfig,
            ...t.fullnodeConfig,
            ...e.overrides,
            HEADERS: {
                ...t.clientConfig?.HEADERS,
                ...t.fullnodeConfig?.HEADERS
            }
        }
    });
}
async function C(e) {
    let { aptosConfig: t } = e;
    return o({
        ...e,
        type: "Indexer",
        overrides: {
            ...t.clientConfig,
            ...t.indexerConfig,
            ...e.overrides,
            HEADERS: {
                ...t.clientConfig?.HEADERS,
                ...t.indexerConfig?.HEADERS
            }
        }
    });
}
async function E(e) {
    let { aptosConfig: t } = e, s = {
        ...t,
        clientConfig: {
            ...t.clientConfig
        }
    };
    return delete s?.clientConfig?.API_KEY, o({
        ...e,
        type: "Faucet",
        overrides: {
            ...s.clientConfig,
            ...s.faucetConfig,
            ...e.overrides,
            HEADERS: {
                ...s.clientConfig?.HEADERS,
                ...s.faucetConfig?.HEADERS
            }
        }
    });
}
async function a(e) {
    return o({
        ...e,
        type: "Pepper"
    });
}
async function m(e) {
    return o({
        ...e,
        type: "Prover"
    });
}
;
 //# sourceMappingURL=chunk-GQ557FEA.mjs.map
}}),
"[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-BXRBOMHW.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "a": (()=>d),
    "b": (()=>C),
    "c": (()=>a),
    "d": (()=>u),
    "e": (()=>h),
    "f": (()=>T)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$VHNX2NUR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-VHNX2NUR.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GJ7STZEW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-GJ7STZEW.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GQ557FEA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-GQ557FEA.mjs [app-client] (ecmascript)");
;
;
;
async function d(o) {
    let { aptosConfig: s } = o, { data: e } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GJ7STZEW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])({
        aptosConfig: s,
        originMethod: "getLedgerInfo",
        path: ""
    });
    return e;
}
async function C(o) {
    let { aptosConfig: s, limit: e } = o;
    return (await a({
        aptosConfig: s,
        query: {
            query: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$VHNX2NUR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"],
            variables: {
                limit: e
            }
        },
        originMethod: "getChainTopUserTransactions"
    })).user_transactions;
}
async function a(o) {
    let { aptosConfig: s, query: e, originMethod: t } = o, { data: r } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GQ557FEA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])({
        aptosConfig: s,
        originMethod: t ?? "queryIndexer",
        path: "",
        body: e,
        overrides: {
            WITH_CREDENTIALS: !1
        }
    });
    return r;
}
async function u(o) {
    let { aptosConfig: s } = o;
    return (await a({
        aptosConfig: s,
        query: {
            query: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$VHNX2NUR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["v"]
        },
        originMethod: "getProcessorStatuses"
    })).processor_status;
}
async function h(o) {
    let s = await u({
        aptosConfig: o.aptosConfig
    });
    return BigInt(s[0].last_success_version);
}
async function T(o) {
    let { aptosConfig: s, processorType: e } = o;
    return (await a({
        aptosConfig: s,
        query: {
            query: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$VHNX2NUR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["v"],
            variables: {
                where_condition: {
                    processor: {
                        _eq: e
                    }
                }
            }
        },
        originMethod: "getProcessorStatus"
    })).processor_status[0];
}
;
 //# sourceMappingURL=chunk-BXRBOMHW.mjs.map
}}),
"[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-GLFZJNF3.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "a": (()=>b),
    "b": (()=>f),
    "c": (()=>T)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$BXRBOMHW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-BXRBOMHW.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$VHNX2NUR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-VHNX2NUR.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GQ557FEA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-GQ557FEA.mjs [app-client] (ecmascript)");
;
;
;
async function b(t) {
    let { aptosConfig: a, handle: e, data: o, options: r } = t;
    return (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GQ557FEA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])({
        aptosConfig: a,
        originMethod: "getTableItem",
        path: `tables/${e}/item`,
        params: {
            ledger_version: r?.ledgerVersion
        },
        body: o
    })).data;
}
async function f(t) {
    let { aptosConfig: a, options: e } = t, o = {
        query: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$VHNX2NUR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["w"],
        variables: {
            where_condition: e?.where,
            offset: e?.offset,
            limit: e?.limit,
            order_by: e?.orderBy
        }
    };
    return (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$BXRBOMHW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])({
        aptosConfig: a,
        query: o,
        originMethod: "getTableItemsData"
    })).table_items;
}
async function T(t) {
    let { aptosConfig: a, options: e } = t, o = {
        query: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$VHNX2NUR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["x"],
        variables: {
            where_condition: e?.where,
            offset: e?.offset,
            limit: e?.limit,
            order_by: e?.orderBy
        }
    };
    return (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$BXRBOMHW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])({
        aptosConfig: a,
        query: o,
        originMethod: "getTableItemsMetadata"
    })).table_metadatas;
}
;
 //# sourceMappingURL=chunk-GLFZJNF3.mjs.map
}}),
"[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-RJ7F4JDV.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "a": (()=>t),
    "b": (()=>O),
    "c": (()=>o),
    "d": (()=>R),
    "e": (()=>n),
    "f": (()=>A),
    "g": (()=>T),
    "h": (()=>a),
    "i": (()=>E),
    "j": (()=>r)
});
var t = ((S)=>(S.FULLNODE = "Fullnode", S.INDEXER = "Indexer", S.FAUCET = "Faucet", S.PEPPER = "Pepper", S.PROVER = "Prover", S))(t || {}), O = 2e5, o = 20, R = 20, n = "0x1::aptos_coin::AptosCoin", A = "0x000000000000000000000000000000000000000000000000000000000000000a", T = "APTOS::RawTransaction", a = "APTOS::RawTransactionWithData", E = ((_)=>(_.ACCOUNT_TRANSACTION_PROCESSOR = "account_transactions_processor", _.DEFAULT = "default_processor", _.EVENTS_PROCESSOR = "events_processor", _.FUNGIBLE_ASSET_PROCESSOR = "fungible_asset_processor", _.STAKE_PROCESSOR = "stake_processor", _.TOKEN_V2_PROCESSOR = "token_v2_processor", _.USER_TRANSACTION_PROCESSOR = "user_transaction_processor", _.OBJECT_PROCESSOR = "objects_processor", _))(E || {}), r = /^https:\/\/securetoken\.google\.com\/[a-zA-Z0-9-_]+$/;
;
 //# sourceMappingURL=chunk-RJ7F4JDV.mjs.map
}}),
"[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-P237G6YB.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "a": (()=>H),
    "b": (()=>W),
    "c": (()=>O),
    "d": (()=>y),
    "e": (()=>q),
    "f": (()=>R),
    "g": (()=>z),
    "h": (()=>U),
    "i": (()=>m),
    "j": (()=>T),
    "k": (()=>X),
    "l": (()=>j)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$YOZBVVKL$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-YOZBVVKL.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$BXRBOMHW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-BXRBOMHW.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GJ7STZEW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-GJ7STZEW.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$6Y6ZO7TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-6Y6ZO7TS.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$YFFDF22R$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-YFFDF22R.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RJ7F4JDV$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-RJ7F4JDV.mjs [app-client] (ecmascript)");
;
;
;
;
;
;
async function H(o) {
    let { aptosConfig: n, options: t } = o;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GJ7STZEW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"])({
        aptosConfig: n,
        originMethod: "getTransactions",
        path: "transactions",
        params: {
            start: t?.offset,
            limit: t?.limit
        }
    });
}
async function W(o) {
    let { aptosConfig: n } = o;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$YOZBVVKL$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(async ()=>{
        let { data: t } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GJ7STZEW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])({
            aptosConfig: n,
            originMethod: "getGasPriceEstimation",
            path: "estimate_gas_price"
        });
        return t;
    }, `gas-price-${n.network}`, 1e3 * 60 * 5)();
}
async function O(o) {
    let { aptosConfig: n, ledgerVersion: t } = o, { data: s } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GJ7STZEW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])({
        aptosConfig: n,
        originMethod: "getTransactionByVersion",
        path: `transactions/by_version/${t}`
    });
    return s;
}
async function y(o) {
    let { aptosConfig: n, transactionHash: t } = o, { data: s } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GJ7STZEW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])({
        aptosConfig: n,
        path: `transactions/by_hash/${t}`,
        originMethod: "getTransactionByHash"
    });
    return s;
}
async function q(o) {
    let { aptosConfig: n, transactionHash: t } = o;
    try {
        return (await y({
            aptosConfig: n,
            transactionHash: t
        })).type === "pending_transaction";
    } catch (s) {
        if (s?.status === 404) return !0;
        throw s;
    }
}
async function R(o) {
    let { aptosConfig: n, transactionHash: t } = o, { data: s } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GJ7STZEW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])({
        aptosConfig: n,
        path: `transactions/wait_by_hash/${t}`,
        originMethod: "longWaitForTransaction"
    });
    return s;
}
async function z(o) {
    let { aptosConfig: n, transactionHash: t, options: s } = o, r = s?.timeoutSecs ?? 20, u = s?.checkSuccess ?? !0, e = !0, p = 0, i, g, l = 200, h = 1.5;
    function c(a) {
        if (!(a instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$6Y6ZO7TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["e"]) || (g = a, a.status !== 404 && a.status >= 400 && a.status < 500)) throw a;
    }
    try {
        i = await y({
            aptosConfig: n,
            transactionHash: t
        }), e = i.type === "pending_transaction";
    } catch (a) {
        c(a);
    }
    if (e) {
        let a = Date.now();
        try {
            i = await R({
                aptosConfig: n,
                transactionHash: t
            }), e = i.type === "pending_transaction";
        } catch (w) {
            c(w);
        }
        p = (Date.now() - a) / 1e3;
    }
    for(; e && !(p >= r);){
        try {
            if (i = await y({
                aptosConfig: n,
                transactionHash: t
            }), e = i.type === "pending_transaction", !e) break;
        } catch (a) {
            c(a);
        }
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$YFFDF22R$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(l), p += l / 1e3, l *= h;
    }
    if (i === void 0) throw g || new m(`Fetching transaction ${t} failed and timed out after ${r} seconds`, i);
    if (i.type === "pending_transaction") throw new m(`Transaction ${t} timed out in pending state after ${r} seconds`, i);
    if (!u) return i;
    if (!i.success) throw new T(`Transaction ${t} failed with an error: ${i.vm_status}`, i);
    return i;
}
async function U(o) {
    let { aptosConfig: n, processorType: t } = o, s = BigInt(o.minimumLedgerVersion), r = 3e3, u = new Date().getTime(), e = BigInt(-1);
    for(; e < s;){
        if (new Date().getTime() - u > r) throw new Error("waitForLastSuccessIndexerVersionSync timeout");
        if (t === void 0 ? e = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$BXRBOMHW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["e"])({
            aptosConfig: n
        }) : e = (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$BXRBOMHW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["f"])({
            aptosConfig: n,
            processorType: t
        })).last_success_version, e >= s) break;
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$YFFDF22R$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(200);
    }
}
var m = class extends Error {
    constructor(n, t){
        super(n), this.lastSubmittedTransaction = t;
    }
}, T = class extends Error {
    constructor(n, t){
        super(n), this.transaction = t;
    }
};
async function X(o) {
    let { aptosConfig: n, ledgerVersion: t, options: s } = o, { data: r } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GJ7STZEW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])({
        aptosConfig: n,
        originMethod: "getBlockByVersion",
        path: `blocks/by_version/${t}`,
        params: {
            with_transactions: s?.withTransactions
        }
    });
    return P({
        block: r,
        ...o
    });
}
async function j(o) {
    let { aptosConfig: n, blockHeight: t, options: s } = o, { data: r } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GJ7STZEW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])({
        aptosConfig: n,
        originMethod: "getBlockByHeight",
        path: `blocks/by_height/${t}`,
        params: {
            with_transactions: s?.withTransactions
        }
    });
    return P({
        block: r,
        ...o
    });
}
async function P(o) {
    let { aptosConfig: n, block: t, options: s } = o;
    if (s?.withTransactions) {
        t.transactions = t.transactions ?? [];
        let r = t.transactions[t.transactions.length - 1], u = BigInt(t.first_version), e = BigInt(t.last_version), p = r?.version, i;
        if (p === void 0 ? i = u - 1n : i = BigInt(p), i === e) return t;
        let g = [], l = 100n;
        for(let c = i + 1n; c < e; c += BigInt(100))g.push(H({
            aptosConfig: n,
            options: {
                offset: c,
                limit: Math.min(Number(l), Number(e - c + 1n))
            }
        }));
        let h = await Promise.all(g);
        for (let c of h)t.transactions.push(...c);
    }
    return t;
}
;
 //# sourceMappingURL=chunk-P237G6YB.mjs.map
}}),
"[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-KAYKTT4S.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "a": (()=>i)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$P237G6YB$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-P237G6YB.mjs [app-client] (ecmascript)");
;
async function i(o) {
    o.minimumLedgerVersion !== void 0 && await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$P237G6YB$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["h"])({
        aptosConfig: o.config,
        minimumLedgerVersion: o.minimumLedgerVersion,
        processorType: o.processorType
    });
}
;
 //# sourceMappingURL=chunk-KAYKTT4S.mjs.map
}}),
"[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-ARNW34PP.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "a": (()=>a)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GLFZJNF3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-GLFZJNF3.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$KAYKTT4S$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-KAYKTT4S.mjs [app-client] (ecmascript)");
;
;
var a = class {
    constructor(e){
        this.config = e;
    }
    async getTableItem(e) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GLFZJNF3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])({
            aptosConfig: this.config,
            ...e
        });
    }
    async getTableItemsData(e) {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$KAYKTT4S$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])({
            config: this.config,
            minimumLedgerVersion: e.minimumLedgerVersion,
            processorType: "default_processor"
        }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GLFZJNF3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])({
            aptosConfig: this.config,
            ...e
        });
    }
    async getTableItemsMetadata(e) {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$KAYKTT4S$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])({
            config: this.config,
            minimumLedgerVersion: e.minimumLedgerVersion,
            processorType: "default_processor"
        }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GLFZJNF3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])({
            aptosConfig: this.config,
            ...e
        });
    }
};
;
 //# sourceMappingURL=chunk-ARNW34PP.mjs.map
}}),
"[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-TUZHLTDU.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "a": (()=>t)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$JGFKIUG5$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-JGFKIUG5.mjs [app-client] (ecmascript)");
;
function t(i, r) {
    let l = r.bcsToBytes(), a = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$JGFKIUG5$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"](l);
    return i.deserialize(a);
}
;
 //# sourceMappingURL=chunk-TUZHLTDU.mjs.map
}}),
"[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-WLUXOUZH.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "a": (()=>t)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$NJN3EAOM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-NJN3EAOM.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-STY74NUA.mjs [app-client] (ecmascript)");
;
;
var t = class a extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$NJN3EAOM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"] {
    constructor(e){
        super(), this.value = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].fromHexInput(e).toUint8Array();
    }
    serialize(e) {
        e.serializeFixedBytes(this.value);
    }
    serializeForEntryFunction(e) {
        e.serialize(this);
    }
    serializeForScriptFunction(e) {
        e.serialize(this);
    }
    static deserialize(e, s) {
        let o = e.deserializeFixedBytes(s);
        return new a(o);
    }
};
;
 //# sourceMappingURL=chunk-WLUXOUZH.mjs.map
}}),
"[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-IXYGZ57N.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "a": (()=>t)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$WLUXOUZH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-WLUXOUZH.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$NJN3EAOM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-NJN3EAOM.mjs [app-client] (ecmascript)");
;
;
var t = class l extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$NJN3EAOM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"] {
    constructor(e){
        super(), this.value = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$WLUXOUZH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"](e);
    }
    serialize(e) {
        e.serialize(this.value);
    }
    serializeForEntryFunction(e) {
        e.serializeU32AsUleb128(this.value.value.length), e.serialize(this);
    }
    static deserialize(e, s) {
        let a = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$WLUXOUZH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"].deserialize(e, s);
        return new l(a.value);
    }
};
;
 //# sourceMappingURL=chunk-IXYGZ57N.mjs.map
}}),
"[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-3OLFJ65O.mjs [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
;
;
 //# sourceMappingURL=chunk-3OLFJ65O.mjs.map
}}),
"[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-3OLFJ65O.mjs [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$3OLFJ65O$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-3OLFJ65O.mjs [app-client] (ecmascript) <locals>");
}}),
"[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-ODAAZLPK.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "A": (()=>j),
    "B": (()=>f),
    "C": (()=>C),
    "D": (()=>T),
    "E": (()=>E),
    "F": (()=>U),
    "G": (()=>W),
    "a": (()=>d),
    "b": (()=>u),
    "c": (()=>y),
    "d": (()=>c),
    "e": (()=>l),
    "f": (()=>_),
    "g": (()=>x),
    "h": (()=>h),
    "i": (()=>v),
    "j": (()=>R),
    "k": (()=>m),
    "l": (()=>M),
    "m": (()=>b),
    "n": (()=>k),
    "o": (()=>S),
    "p": (()=>F),
    "q": (()=>I),
    "r": (()=>B),
    "s": (()=>G),
    "t": (()=>O),
    "u": (()=>P),
    "v": (()=>A),
    "w": (()=>N),
    "x": (()=>D),
    "y": (()=>q),
    "z": (()=>H)
});
var d = ((e)=>(e.JSON = "application/json", e.BCS = "application/x-bcs", e.BCS_SIGNED_TRANSACTION = "application/x.aptos.signed_transaction+bcs", e.BCS_VIEW_FUNCTION = "application/x.aptos.view_function+bcs", e))(d || {}), u = ((t)=>(t[t.Bool = 0] = "Bool", t[t.U8 = 1] = "U8", t[t.U64 = 2] = "U64", t[t.U128 = 3] = "U128", t[t.Address = 4] = "Address", t[t.Signer = 5] = "Signer", t[t.Vector = 6] = "Vector", t[t.Struct = 7] = "Struct", t[t.U16 = 8] = "U16", t[t.U32 = 9] = "U32", t[t.U256 = 10] = "U256", t[t.Reference = 254] = "Reference", t[t.Generic = 255] = "Generic", t))(u || {}), y = ((r)=>(r[r.U8 = 0] = "U8", r[r.U64 = 1] = "U64", r[r.U128 = 2] = "U128", r[r.Address = 3] = "Address", r[r.U8Vector = 4] = "U8Vector", r[r.Bool = 5] = "Bool", r[r.U16 = 6] = "U16", r[r.U32 = 7] = "U32", r[r.U256 = 8] = "U256", r[r.Serialized = 9] = "Serialized", r))(y || {}), c = ((o)=>(o[o.Script = 0] = "Script", o[o.EntryFunction = 2] = "EntryFunction", o[o.Multisig = 3] = "Multisig", o))(c || {}), l = ((i)=>(i[i.MultiAgentTransaction = 0] = "MultiAgentTransaction", i[i.FeePayerTransaction = 1] = "FeePayerTransaction", i))(l || {}), _ = ((n)=>(n[n.Ed25519 = 0] = "Ed25519", n[n.MultiEd25519 = 1] = "MultiEd25519", n[n.MultiAgent = 2] = "MultiAgent", n[n.FeePayer = 3] = "FeePayer", n[n.SingleSender = 4] = "SingleSender", n))(_ || {}), x = ((p)=>(p[p.Ed25519 = 0] = "Ed25519", p[p.MultiEd25519 = 1] = "MultiEd25519", p[p.SingleKey = 2] = "SingleKey", p[p.MultiKey = 3] = "MultiKey", p[p.NoAccountAuthenticator = 4] = "NoAccountAuthenticator", p[p.Abstraction = 5] = "Abstraction", p))(x || {}), h = ((i)=>(i.Ed25519 = "ed25519", i.Secp256k1 = "secp256k1", i))(h || {}), v = ((e)=>(e[e.Ed25519 = 0] = "Ed25519", e[e.Secp256k1 = 1] = "Secp256k1", e[e.Keyless = 3] = "Keyless", e[e.FederatedKeyless = 4] = "FederatedKeyless", e))(v || {}), R = ((o)=>(o[o.Ed25519 = 0] = "Ed25519", o[o.Secp256k1 = 1] = "Secp256k1", o[o.Keyless = 3] = "Keyless", o))(R || {}), m = ((a)=>(a[a.Ed25519 = 0] = "Ed25519", a))(m || {}), M = ((a)=>(a[a.Ed25519 = 0] = "Ed25519", a))(M || {}), b = ((a)=>(a[a.ZkProof = 0] = "ZkProof", a))(b || {}), k = ((a)=>(a[a.Groth16 = 0] = "Groth16", a))(k || {}), S = ((g)=>(g.Pending = "pending_transaction", g.User = "user_transaction", g.Genesis = "genesis_transaction", g.BlockMetadata = "block_metadata_transaction", g.StateCheckpoint = "state_checkpoint_transaction", g.Validator = "validator_transaction", g.BlockEpilogue = "block_epilogue_transaction", g))(S || {});
function F(s) {
    return s.type === "pending_transaction";
}
function I(s) {
    return s.type === "user_transaction";
}
function B(s) {
    return s.type === "genesis_transaction";
}
function G(s) {
    return s.type === "block_metadata_transaction";
}
function O(s) {
    return s.type === "state_checkpoint_transaction";
}
function P(s) {
    return s.type === "validator_transaction";
}
function A(s) {
    return s.type === "block_epilogue_transaction";
}
function N(s) {
    return "signature" in s && s.signature === "ed25519_signature";
}
function D(s) {
    return "signature" in s && s.signature === "secp256k1_ecdsa_signature";
}
function q(s) {
    return s.type === "multi_agent_signature";
}
function H(s) {
    return s.type === "fee_payer_signature";
}
function j(s) {
    return s.type === "multi_ed25519_signature";
}
var f = ((o)=>(o.PRIVATE = "private", o.PUBLIC = "public", o.FRIEND = "friend", o))(f || {}), C = ((e)=>(e.STORE = "store", e.DROP = "drop", e.KEY = "key", e.COPY = "copy", e))(C || {}), T = ((i)=>(i.VALIDATOR = "validator", i.FULL_NODE = "full_node", i))(T || {}), E = ((e)=>(e[e.Ed25519 = 0] = "Ed25519", e[e.MultiEd25519 = 1] = "MultiEd25519", e[e.SingleKey = 2] = "SingleKey", e[e.MultiKey = 3] = "MultiKey", e))(E || {}), U = ((i)=>(i[i.Ed25519 = 0] = "Ed25519", i[i.Secp256k1Ecdsa = 2] = "Secp256k1Ecdsa", i))(U || {}), W = ((n)=>(n[n.DeriveAuid = 251] = "DeriveAuid", n[n.DeriveObjectAddressFromObject = 252] = "DeriveObjectAddressFromObject", n[n.DeriveObjectAddressFromGuid = 253] = "DeriveObjectAddressFromGuid", n[n.DeriveObjectAddressFromSeed = 254] = "DeriveObjectAddressFromSeed", n[n.DeriveResourceAccountAddress = 255] = "DeriveResourceAccountAddress", n))(W || {});
;
 //# sourceMappingURL=chunk-ODAAZLPK.mjs.map
}}),
"[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-4RXKALLC.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "a": (()=>s),
    "b": (()=>o),
    "c": (()=>p),
    "d": (()=>a),
    "e": (()=>n),
    "f": (()=>e),
    "g": (()=>r),
    "h": (()=>l)
});
var s = {
    mainnet: "https://api.mainnet.aptoslabs.com/v1/graphql",
    testnet: "https://api.testnet.aptoslabs.com/v1/graphql",
    devnet: "https://api.devnet.aptoslabs.com/v1/graphql",
    local: "http://127.0.0.1:8090/v1/graphql"
}, o = {
    mainnet: "https://api.mainnet.aptoslabs.com/v1",
    testnet: "https://api.testnet.aptoslabs.com/v1",
    devnet: "https://api.devnet.aptoslabs.com/v1",
    local: "http://127.0.0.1:8080/v1"
}, p = {
    devnet: "https://faucet.devnet.aptoslabs.com",
    local: "http://127.0.0.1:8081"
}, a = {
    mainnet: "https://api.mainnet.aptoslabs.com/keyless/pepper/v0",
    testnet: "https://api.testnet.aptoslabs.com/keyless/pepper/v0",
    devnet: "https://api.devnet.aptoslabs.com/keyless/pepper/v0",
    local: "https://api.devnet.aptoslabs.com/keyless/pepper/v0"
}, n = {
    mainnet: "https://api.mainnet.aptoslabs.com/keyless/prover/v0",
    testnet: "https://api.testnet.aptoslabs.com/keyless/prover/v0",
    devnet: "https://api.devnet.aptoslabs.com/keyless/prover/v0",
    local: "https://api.devnet.aptoslabs.com/keyless/prover/v0"
}, e = ((t)=>(t.MAINNET = "mainnet", t.TESTNET = "testnet", t.DEVNET = "devnet", t.LOCAL = "local", t.CUSTOM = "custom", t))(e || {}), r = {
    mainnet: 1,
    testnet: 2,
    local: 4
}, l = {
    mainnet: "mainnet",
    testnet: "testnet",
    devnet: "devnet",
    local: "local",
    custom: "custom"
};
;
 //# sourceMappingURL=chunk-4RXKALLC.mjs.map
}}),
"[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-F2ZTBAJJ.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "a": (()=>s)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$4RXKALLC$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-4RXKALLC.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$aptos$2d$client$2f$dist$2f$browser$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/aptos-client/dist/browser/index.browser.mjs [app-client] (ecmascript)");
;
;
var s = class {
    constructor(e){
        this.network = e?.network ?? "devnet", this.fullnode = e?.fullnode, this.faucet = e?.faucet, this.pepper = e?.pepper, this.prover = e?.prover, this.indexer = e?.indexer, this.client = e?.client ?? {
            provider: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$aptos$2d$client$2f$dist$2f$browser$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
        }, this.clientConfig = e?.clientConfig ?? {}, this.fullnodeConfig = e?.fullnodeConfig ?? {}, this.indexerConfig = e?.indexerConfig ?? {}, this.faucetConfig = e?.faucetConfig ?? {};
    }
    getRequestUrl(e) {
        switch(e){
            case "Fullnode":
                if (this.fullnode !== void 0) return this.fullnode;
                if (this.network === "custom") throw new Error("Please provide a custom full node url");
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$4RXKALLC$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"][this.network];
            case "Faucet":
                if (this.faucet !== void 0) return this.faucet;
                if (this.network === "testnet") throw new Error("There is no way to programmatically mint testnet APT, you must use the minting site at https://aptos.dev/network/faucet");
                if (this.network === "mainnet") throw new Error("There is no mainnet faucet");
                if (this.network === "custom") throw new Error("Please provide a custom faucet url");
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$4RXKALLC$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"][this.network];
            case "Indexer":
                if (this.indexer !== void 0) return this.indexer;
                if (this.network === "custom") throw new Error("Please provide a custom indexer url");
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$4RXKALLC$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"][this.network];
            case "Pepper":
                if (this.pepper !== void 0) return this.pepper;
                if (this.network === "custom") throw new Error("Please provide a custom pepper service url");
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$4RXKALLC$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"][this.network];
            case "Prover":
                if (this.prover !== void 0) return this.prover;
                if (this.network === "custom") throw new Error("Please provide a custom prover service url");
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$4RXKALLC$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["e"][this.network];
            default:
                throw Error(`apiType ${e} is not supported`);
        }
    }
    isPepperServiceRequest(e) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$4RXKALLC$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"][this.network] === e;
    }
    isProverServiceRequest(e) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$4RXKALLC$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["e"][this.network] === e;
    }
};
;
 //# sourceMappingURL=chunk-F2ZTBAJJ.mjs.map
}}),
"[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-TAEOFYOF.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "$": (()=>K),
    "$a": (()=>sa),
    "$b": (()=>Po),
    "$c": (()=>gn),
    "A": (()=>k),
    "Aa": (()=>Gt),
    "Ab": (()=>Wn),
    "Ac": (()=>Mo),
    "Ad": (()=>ks),
    "B": (()=>O),
    "Ba": (()=>Gn),
    "Bb": (()=>pa),
    "Bc": (()=>Vo),
    "Bd": (()=>Fs),
    "C": (()=>Yt),
    "Ca": (()=>Bn),
    "Cb": (()=>go),
    "Cc": (()=>Ho),
    "Cd": (()=>Us),
    "D": (()=>Se),
    "Da": (()=>Je),
    "Db": (()=>la),
    "Dc": (()=>Lo),
    "Dd": (()=>Ds),
    "E": (()=>Pe),
    "Ea": (()=>sp),
    "Eb": (()=>Ur),
    "Ec": (()=>Wt),
    "Ed": (()=>bn),
    "F": (()=>Dt),
    "Fa": (()=>ye),
    "Fb": (()=>Dr),
    "Fc": (()=>$o),
    "Fd": (()=>Rs),
    "G": (()=>_e),
    "Ga": (()=>ee),
    "Gb": (()=>mo),
    "Gc": (()=>qo),
    "Gd": (()=>Os),
    "H": (()=>V),
    "Ha": (()=>br),
    "Hb": (()=>Lt),
    "Hc": (()=>Wo),
    "Hd": (()=>Gs),
    "I": (()=>me),
    "Ia": (()=>le),
    "Ib": (()=>Rr),
    "Ic": (()=>jo),
    "Id": (()=>wn),
    "J": (()=>ke),
    "Ja": (()=>Be),
    "Jb": (()=>yo),
    "Jc": (()=>Qo),
    "Jd": (()=>Xn),
    "K": (()=>X),
    "Ka": (()=>gt),
    "Kb": (()=>Vm),
    "Kc": (()=>Jo),
    "Kd": (()=>jt),
    "L": (()=>xe),
    "La": (()=>Nn),
    "Lb": (()=>jn),
    "Lc": (()=>Zo),
    "Ld": (()=>Qt),
    "M": (()=>Rt),
    "Ma": (()=>ce),
    "Mb": (()=>A),
    "Mc": (()=>Yo),
    "Md": (()=>er),
    "N": (()=>rt),
    "Na": (()=>zn),
    "Nb": (()=>Aa),
    "Nc": (()=>Xo),
    "Nd": (()=>Bs),
    "O": (()=>Xt),
    "Oa": (()=>Ne),
    "Ob": (()=>fa),
    "Oc": (()=>es),
    "Od": (()=>zs),
    "P": (()=>U),
    "Pa": (()=>mt),
    "Pb": (()=>fo),
    "Pc": (()=>ts),
    "Pd": (()=>tr),
    "Q": (()=>G),
    "Qa": (()=>sn),
    "Qb": (()=>Qn),
    "Qc": (()=>ns),
    "Qd": (()=>nr),
    "R": (()=>oe),
    "Ra": (()=>Mn),
    "Rb": (()=>Jn),
    "Rc": (()=>rs),
    "Rd": (()=>Tn),
    "S": (()=>Fe),
    "Sa": (()=>Zi),
    "Sb": (()=>Gr),
    "Sc": (()=>is),
    "Sd": (()=>rr),
    "T": (()=>Ue),
    "Ta": (()=>eo),
    "Tb": (()=>un),
    "Tc": (()=>os),
    "Td": (()=>Lr),
    "U": (()=>H),
    "Ua": (()=>Vn),
    "Ub": (()=>Ze),
    "Uc": (()=>ss),
    "Ud": (()=>Ns),
    "V": (()=>De),
    "Va": (()=>no),
    "Vb": (()=>ho),
    "Vc": (()=>as),
    "Vd": (()=>Ms),
    "W": (()=>Re),
    "Wa": (()=>oa),
    "Wb": (()=>bo),
    "Wc": (()=>cs),
    "Wd": (()=>Sn),
    "X": (()=>F),
    "Xa": (()=>N),
    "Xb": (()=>At),
    "Xc": (()=>ln),
    "Xd": (()=>ja),
    "Y": (()=>it),
    "Ya": (()=>Ae),
    "Yb": (()=>To),
    "Yc": (()=>ps),
    "Yd": (()=>Vs),
    "Z": (()=>Rn),
    "Za": (()=>oo),
    "Zb": (()=>So),
    "Zc": (()=>ls),
    "Zd": (()=>Pn),
    "_": (()=>D),
    "_a": (()=>Me),
    "_b": (()=>qn),
    "_c": (()=>gs),
    "_d": (()=>W),
    "a": (()=>Ya),
    "aa": (()=>m),
    "ab": (()=>Hn),
    "ac": (()=>xo),
    "ad": (()=>mn),
    "b": (()=>$r),
    "ba": (()=>Ke),
    "bb": (()=>Ln),
    "bc": (()=>Ko),
    "bd": (()=>ms),
    "c": (()=>Xa),
    "ca": (()=>Ju),
    "cb": (()=>so),
    "cc": (()=>zr),
    "cd": (()=>yn),
    "d": (()=>ec),
    "da": (()=>x),
    "db": (()=>ao),
    "dc": (()=>$t),
    "dd": (()=>Zn),
    "e": (()=>tc),
    "ea": (()=>Zu),
    "eb": (()=>Sr),
    "ec": (()=>Co),
    "ed": (()=>ys),
    "f": (()=>nc),
    "fa": (()=>se),
    "fb": (()=>$n),
    "fc": (()=>Eo),
    "fd": (()=>As),
    "g": (()=>rc),
    "ga": (()=>qs),
    "gb": (()=>Pr),
    "gc": (()=>Io),
    "gd": (()=>hs),
    "h": (()=>ic),
    "ha": (()=>ot),
    "hb": (()=>aa),
    "hc": (()=>vo),
    "hd": (()=>bs),
    "i": (()=>E),
    "ia": (()=>st),
    "ib": (()=>xr),
    "ic": (()=>_o),
    "id": (()=>An),
    "j": (()=>hr),
    "ja": (()=>en),
    "jb": (()=>Kr),
    "jc": (()=>Wy),
    "jd": (()=>fn),
    "k": (()=>Dn),
    "ka": (()=>tn),
    "kb": (()=>Cr),
    "kc": (()=>Nr),
    "kd": (()=>ws),
    "l": (()=>wr),
    "la": (()=>at),
    "lb": (()=>Er),
    "lc": (()=>ko),
    "ld": (()=>Ts),
    "m": (()=>ue),
    "ma": (()=>nn),
    "mb": (()=>Ir),
    "mc": (()=>Fo),
    "md": (()=>Xe),
    "n": (()=>Nt),
    "na": (()=>rn),
    "nb": (()=>vr),
    "nc": (()=>Uo),
    "nd": (()=>Ma),
    "o": (()=>et),
    "oa": (()=>on),
    "ob": (()=>co),
    "oc": (()=>wo),
    "od": (()=>Ss),
    "p": (()=>Wr),
    "pa": (()=>pe),
    "pb": (()=>I),
    "pc": (()=>Do),
    "pd": (()=>ch),
    "q": (()=>Jt),
    "qa": (()=>On),
    "qb": (()=>uo),
    "qc": (()=>te),
    "qd": (()=>Va),
    "r": (()=>ae),
    "ra": (()=>ct),
    "rb": (()=>Vt),
    "rc": (()=>Ro),
    "rd": (()=>Ps),
    "s": (()=>jr),
    "sa": (()=>ut),
    "sb": (()=>kr),
    "sc": (()=>Oo),
    "sd": (()=>xs),
    "t": (()=>Qr),
    "ta": (()=>Oe),
    "tb": (()=>Fr),
    "tc": (()=>Go),
    "td": (()=>Vr),
    "u": (()=>Mt),
    "ua": (()=>dt),
    "ub": (()=>Am),
    "uc": (()=>Bo),
    "ud": (()=>Ks),
    "v": (()=>ze),
    "va": (()=>Ot),
    "vb": (()=>po),
    "vc": (()=>ft),
    "vd": (()=>Cs),
    "w": (()=>cc),
    "wa": (()=>pt),
    "wb": (()=>lo),
    "wc": (()=>dn),
    "wd": (()=>Es),
    "x": (()=>Jr),
    "xa": (()=>lt),
    "xb": (()=>fm),
    "xc": (()=>zo),
    "xd": (()=>Is),
    "y": (()=>dc),
    "ya": (()=>Qe),
    "yb": (()=>Ht),
    "yc": (()=>pn),
    "yd": (()=>vs),
    "z": (()=>q),
    "za": (()=>Ge),
    "zb": (()=>yt),
    "zc": (()=>No),
    "zd": (()=>_s)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$A5L76YP7$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-A5L76YP7.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$XF6BISPI$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-XF6BISPI.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$3IHKQH5O$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-3IHKQH5O.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$OYH2T6V5$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-OYH2T6V5.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$PRUQZNAP$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-PRUQZNAP.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GOXRBEIJ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-GOXRBEIJ.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$OYUW6ZN2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-OYUW6ZN2.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$V7U5Y4AU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-V7U5Y4AU.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$WTLQD6MR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-WTLQD6MR.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$YQIAWAPY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-YQIAWAPY.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$W4BSN6SK$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-W4BSN6SK.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$FBCXUC7J$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-FBCXUC7J.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$BYINW7I2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-BYINW7I2.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$Z6KQX6VX$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-Z6KQX6VX.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$6PKBXYG3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-6PKBXYG3.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$ARNW34PP$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-ARNW34PP.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GLFZJNF3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-GLFZJNF3.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$KAYKTT4S$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-KAYKTT4S.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$P237G6YB$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-P237G6YB.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$YOZBVVKL$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-YOZBVVKL.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$BXRBOMHW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-BXRBOMHW.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$VHNX2NUR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-VHNX2NUR.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GJ7STZEW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-GJ7STZEW.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GQ557FEA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-GQ557FEA.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$TUZHLTDU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-TUZHLTDU.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$IXYGZ57N$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-IXYGZ57N.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$WLUXOUZH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-WLUXOUZH.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$SOJ3OG6X$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-SOJ3OG6X.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$C6JRJNK3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-C6JRJNK3.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$JGFKIUG5$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-JGFKIUG5.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$6Y6ZO7TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-6Y6ZO7TS.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$YFFDF22R$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-YFFDF22R.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$BUUV6B4P$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-BUUV6B4P.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-GYVSI3TS.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$3OLFJ65O$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-3OLFJ65O.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aptos$2d$labs$2f$script$2d$composer$2d$pack$2f$dist$2f$esm$2f$main$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__CallArgument__as__a$3e$__ = __turbopack_context__.i("[project]/node_modules/@aptos-labs/script-composer-pack/dist/esm/main.mjs [app-client] (ecmascript) <export CallArgument as a>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$ODAAZLPK$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-ODAAZLPK.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$NJN3EAOM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-NJN3EAOM.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$56CNRT2K$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-56CNRT2K.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-STY74NUA.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$F2ZTBAJJ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-F2ZTBAJJ.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$4RXKALLC$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-4RXKALLC.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RJ7F4JDV$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-RJ7F4JDV.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$KDMSOCZY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-KDMSOCZY.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jwt$2d$decode$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jwt-decode/build/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$sha3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@noble/hashes/esm/sha3.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$bn254$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@noble/curves/esm/bn254.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@noble/curves/esm/utils.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$base64$2f$base64$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/js-base64/base64.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@noble/hashes/esm/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$eventemitter3$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/eventemitter3/index.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$eventemitter3$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/eventemitter3/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aptos$2d$labs$2f$script$2d$composer$2d$pack$2f$dist$2f$esm$2f$main$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@aptos-labs/script-composer-pack/dist/esm/main.mjs [app-client] (ecmascript)");
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
;
;
;
var q = class n extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$BYINW7I2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"] {
    constructor(e, t){
        super(), this.jwkAddress = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(e), this.keylessPublicKey = t;
    }
    authKey() {
        let e = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$NJN3EAOM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"];
        return e.serializeU32AsUleb128(4), e.serializeFixedBytes(this.bcsToBytes()), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$6PKBXYG3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"].fromSchemeAndBytes({
            scheme: 2,
            input: e.toUint8Array()
        });
    }
    verifySignature(e) {
        try {
            return Dn({
                ...e,
                publicKey: this
            }), !0;
        } catch  {
            return !1;
        }
    }
    serialize(e) {
        this.jwkAddress.serialize(e), this.keylessPublicKey.serialize(e);
    }
    static deserialize(e) {
        let t = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].deserialize(e), r = E.deserialize(e);
        return new n(t, r);
    }
    static isPublicKey(e) {
        return e instanceof n;
    }
    async verifySignatureAsync(e) {
        return hr({
            ...e,
            publicKey: this
        });
    }
    static create(e) {
        return new n(e.jwkAddress, E.create(e));
    }
    static fromJwtAndPepper(e) {
        return new n(e.jwkAddress, E.fromJwtAndPepper(e));
    }
    static isInstance(e) {
        return "jwkAddress" in e && e.jwkAddress instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"] && "keylessPublicKey" in e && e.keylessPublicKey instanceof E;
    }
};
;
var k = class n extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$BYINW7I2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"] {
    constructor(e){
        if (super(), this.publicKey = e, e instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$YQIAWAPY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"]) this.variant = 0;
        else if (e instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$V7U5Y4AU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"]) this.variant = 1;
        else if (e instanceof E) this.variant = 3;
        else if (e instanceof q) this.variant = 4;
        else throw new Error("Unsupported public key type");
    }
    verifySignature(e) {
        let { message: t, signature: r } = e;
        if (this.publicKey instanceof E) throw new Error("Use verifySignatureAsync to verify Keyless signatures");
        return this.publicKey.verifySignature({
            message: t,
            signature: r.signature
        });
    }
    async verifySignatureAsync(e) {
        if (!(e.signature instanceof O)) {
            if (e.options?.throwErrorWithReason) throw new Error("Signature must be an instance of AnySignature");
            return !1;
        }
        return await this.publicKey.verifySignatureAsync({
            ...e,
            signature: e.signature.signature
        });
    }
    authKey() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$6PKBXYG3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"].fromSchemeAndBytes({
            scheme: 2,
            input: this.toUint8Array()
        });
    }
    toUint8Array() {
        return this.bcsToBytes();
    }
    serialize(e) {
        e.serializeU32AsUleb128(this.variant), this.publicKey.serialize(e);
    }
    static deserialize(e) {
        let t = e.deserializeUleb128AsU32(), r;
        switch(t){
            case 0:
                r = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$YQIAWAPY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].deserialize(e);
                break;
            case 1:
                r = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$V7U5Y4AU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"].deserialize(e);
                break;
            case 3:
                r = E.deserialize(e);
                break;
            case 4:
                r = q.deserialize(e);
                break;
            default:
                throw new Error(`Unknown variant index for AnyPublicKey: ${t}`);
        }
        return new n(r);
    }
    static isPublicKey(e) {
        return e instanceof n;
    }
    isEd25519() {
        return this.publicKey instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$YQIAWAPY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"];
    }
    isSecp256k1PublicKey() {
        return this.publicKey instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$V7U5Y4AU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"];
    }
    static isInstance(e) {
        return "publicKey" in e && "variant" in e;
    }
}, O = class n extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$Z6KQX6VX$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"] {
    constructor(e){
        if (super(), this.signature = e, e instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$YQIAWAPY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"]) this.variant = 0;
        else if (e instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$V7U5Y4AU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"]) this.variant = 1;
        else if (e instanceof ue) this.variant = 3;
        else throw new Error("Unsupported signature type");
    }
    toUint8Array() {
        return console.warn("[Aptos SDK] Calls to AnySignature.toUint8Array() will soon return the underlying signature bytes. Use AnySignature.bcsToBytes() instead."), this.bcsToBytes();
    }
    serialize(e) {
        e.serializeU32AsUleb128(this.variant), this.signature.serialize(e);
    }
    static deserialize(e) {
        let t = e.deserializeUleb128AsU32(), r;
        switch(t){
            case 0:
                r = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$YQIAWAPY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"].deserialize(e);
                break;
            case 1:
                r = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$V7U5Y4AU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"].deserialize(e);
                break;
            case 3:
                r = ue.deserialize(e);
                break;
            default:
                throw new Error(`Unknown variant index for AnySignature: ${t}`);
        }
        return new n(r);
    }
    static isInstance(e) {
        return "signature" in e && typeof e.signature == "object" && e.signature !== null && "toUint8Array" in e.signature;
    }
};
function $s(n) {
    let e = n;
    return e -= e >> 1 & 1431655765, e = (e & 858993459) + (e >> 2 & 858993459), (e + (e >> 4) & 252645135) * 16843009 >> 24;
}
var Yt = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$BYINW7I2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"] {
    constructor(e){
        super(), this.publicKeys = e.publicKeys;
    }
    createBitmap(e) {
        let { bits: t } = e, r = 128, i = new Uint8Array([
            0,
            0,
            0,
            0
        ]), o = new Set;
        return t.forEach((s, a)=>{
            if (a + 1 > this.publicKeys.length) throw new Error(`Signature index ${a + 1} is out of public keys range, ${this.publicKeys.length}.`);
            if (o.has(s)) throw new Error(`Duplicate bit ${s} detected.`);
            o.add(s);
            let u = Math.floor(s / 8), d = i[u];
            d |= r >> s % 8, i[u] = d;
        }), i;
    }
    getIndex(e) {
        let t = this.publicKeys.findIndex((r)=>r.toString() === e.toString());
        if (t !== -1) return t;
        throw new Error(`Public key ${e} not found in multi key set ${this.publicKeys}`);
    }
}, Se = class n extends Yt {
    constructor(e){
        let { publicKeys: t, signaturesRequired: r } = e;
        if (super({
            publicKeys: t
        }), r < 1) throw new Error("The number of required signatures needs to be greater than 0");
        if (t.length < r) throw new Error(`Provided ${t.length} public keys is smaller than the ${r} required signatures`);
        this.publicKeys = t.map((i)=>i instanceof k ? i : new k(i)), this.signaturesRequired = r;
    }
    verifySignature(e) {
        let { message: t, signature: r } = e;
        if (r.signatures.length !== this.signaturesRequired) throw new Error("The number of signatures does not match the number of required signatures");
        let i = r.bitMapToSignerIndices();
        for(let o = 0; o < r.signatures.length; o += 1){
            let s = r.signatures[o];
            if (!this.publicKeys[i[o]].verifySignature({
                message: t,
                signature: s
            })) return !1;
        }
        return !0;
    }
    async verifySignatureAsync(e) {
        let { signature: t } = e;
        try {
            if (!(t instanceof Pe)) throw new Error("Signature is not a MultiKeySignature");
            if (t.signatures.length !== this.signaturesRequired) throw new Error("The number of signatures does not match the number of required signatures");
            let r = t.bitMapToSignerIndices();
            for(let i = 0; i < t.signatures.length; i += 1){
                let o = t.signatures[i];
                if (!await this.publicKeys[r[i]].verifySignatureAsync({
                    ...e,
                    signature: o
                })) return !1;
            }
            return !0;
        } catch (r) {
            if (e.options?.throwErrorWithReason) throw r;
            return !1;
        }
    }
    authKey() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$6PKBXYG3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"].fromSchemeAndBytes({
            scheme: 3,
            input: this.toUint8Array()
        });
    }
    serialize(e) {
        e.serializeVector(this.publicKeys), e.serializeU8(this.signaturesRequired);
    }
    static deserialize(e) {
        let t = e.deserializeVector(k), r = e.deserializeU8();
        return new n({
            publicKeys: t,
            signaturesRequired: r
        });
    }
    getIndex(e) {
        let t = e instanceof k ? e : new k(e);
        return super.getIndex(t);
    }
    static isInstance(e) {
        return "publicKeys" in e && "signaturesRequired" in e;
    }
}, re = class re extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$Z6KQX6VX$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"] {
    constructor(e){
        super();
        let { signatures: t, bitmap: r } = e;
        if (t.length > re.MAX_SIGNATURES_SUPPORTED) throw new Error(`The number of signatures cannot be greater than ${re.MAX_SIGNATURES_SUPPORTED}`);
        if (this.signatures = t.map((o)=>o instanceof O ? o : new O(o)), !(r instanceof Uint8Array)) this.bitmap = re.createBitmap({
            bits: r
        });
        else {
            if (r.length !== re.BITMAP_LEN) throw new Error(`"bitmap" length should be ${re.BITMAP_LEN}`);
            this.bitmap = r;
        }
        let i = this.bitmap.reduce((o, s)=>o + $s(s), 0);
        if (i !== this.signatures.length) throw new Error(`Expecting ${i} signatures from the bitmap, but got ${this.signatures.length}`);
    }
    static createBitmap(e) {
        let { bits: t } = e, r = 128, i = new Uint8Array([
            0,
            0,
            0,
            0
        ]), o = new Set;
        return t.forEach((s)=>{
            if (s >= re.MAX_SIGNATURES_SUPPORTED) throw new Error(`Cannot have a signature larger than ${re.MAX_SIGNATURES_SUPPORTED - 1}.`);
            if (o.has(s)) throw new Error("Duplicate bits detected.");
            o.add(s);
            let a = Math.floor(s / 8), u = i[a];
            u |= r >> s % 8, i[a] = u;
        }), i;
    }
    bitMapToSignerIndices() {
        let e = [];
        for(let t = 0; t < this.bitmap.length; t += 1){
            let r = this.bitmap[t];
            for(let i = 0; i < 8; i += 1)(r & 128 >> i) !== 0 && e.push(t * 8 + i);
        }
        return e;
    }
    serialize(e) {
        e.serializeVector(this.signatures), e.serializeBytes(this.bitmap);
    }
    static deserialize(e) {
        let t = e.deserializeVector(O), r = e.deserializeBytes();
        return new re({
            signatures: t,
            bitmap: r
        });
    }
};
re.BITMAP_LEN = 4, re.MAX_SIGNATURES_SUPPORTED = re.BITMAP_LEN * 8;
var Pe = re;
var de = class de extends Yt {
    constructor(e){
        let { publicKeys: t, threshold: r } = e;
        if (super({
            publicKeys: t
        }), t.length > de.MAX_KEYS || t.length < de.MIN_KEYS) throw new Error(`Must have between ${de.MIN_KEYS} and ${de.MAX_KEYS} public keys, inclusive`);
        if (r < de.MIN_THRESHOLD || r > t.length) throw new Error(`Threshold must be between ${de.MIN_THRESHOLD} and ${t.length}, inclusive`);
        this.publicKeys = t, this.threshold = r;
    }
    verifySignature(e) {
        let { message: t, signature: r } = e;
        if (!(r instanceof _e)) return !1;
        let i = [];
        for(let o = 0; o < 4; o += 1)for(let s = 0; s < 8; s += 1)if ((r.bitmap[o] & 1 << 7 - s) !== 0) {
            let u = o * 8 + s;
            i.push(u);
        }
        if (i.length !== r.signatures.length) throw new Error("Bitmap and signatures length mismatch");
        if (i.length < this.threshold) throw new Error("Not enough signatures");
        for(let o = 0; o < i.length; o += 1)if (!this.publicKeys[i[o]].verifySignature({
            message: t,
            signature: r.signatures[o]
        })) return !1;
        return !0;
    }
    async verifySignatureAsync(e) {
        return this.verifySignature(e);
    }
    authKey() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$6PKBXYG3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"].fromSchemeAndBytes({
            scheme: 1,
            input: this.toUint8Array()
        });
    }
    toUint8Array() {
        let e = new Uint8Array(this.publicKeys.length * __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$YQIAWAPY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].LENGTH + 1);
        return this.publicKeys.forEach((t, r)=>{
            e.set(t.toUint8Array(), r * __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$YQIAWAPY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].LENGTH);
        }), e[this.publicKeys.length * __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$YQIAWAPY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].LENGTH] = this.threshold, e;
    }
    serialize(e) {
        e.serializeBytes(this.toUint8Array());
    }
    static deserialize(e) {
        let t = e.deserializeBytes(), r = t[t.length - 1], i = [];
        for(let o = 0; o < t.length - 1; o += __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$YQIAWAPY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].LENGTH){
            let s = o;
            i.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$YQIAWAPY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"](t.subarray(s, s + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$YQIAWAPY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].LENGTH)));
        }
        return new de({
            publicKeys: i,
            threshold: r
        });
    }
    getIndex(e) {
        return super.getIndex(e);
    }
};
de.MAX_KEYS = 32, de.MIN_KEYS = 2, de.MIN_THRESHOLD = 1;
var Dt = de, ie = class ie extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$Z6KQX6VX$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"] {
    constructor(e){
        super();
        let { signatures: t, bitmap: r } = e;
        if (t.length > ie.MAX_SIGNATURES_SUPPORTED) throw new Error(`The number of signatures cannot be greater than ${ie.MAX_SIGNATURES_SUPPORTED}`);
        if (this.signatures = t, !(r instanceof Uint8Array)) this.bitmap = ie.createBitmap({
            bits: r
        });
        else {
            if (r.length !== ie.BITMAP_LEN) throw new Error(`"bitmap" length should be ${ie.BITMAP_LEN}`);
            this.bitmap = r;
        }
    }
    toUint8Array() {
        let e = new Uint8Array(this.signatures.length * __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$YQIAWAPY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"].LENGTH + ie.BITMAP_LEN);
        return this.signatures.forEach((t, r)=>{
            e.set(t.toUint8Array(), r * __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$YQIAWAPY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"].LENGTH);
        }), e.set(this.bitmap, this.signatures.length * __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$YQIAWAPY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"].LENGTH), e;
    }
    serialize(e) {
        e.serializeBytes(this.toUint8Array());
    }
    static deserialize(e) {
        let t = e.deserializeBytes(), r = t.subarray(t.length - 4), i = [];
        for(let o = 0; o < t.length - r.length; o += __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$YQIAWAPY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"].LENGTH){
            let s = o;
            i.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$YQIAWAPY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"](t.subarray(s, s + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$YQIAWAPY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"].LENGTH)));
        }
        return new ie({
            signatures: i,
            bitmap: r
        });
    }
    static createBitmap(e) {
        let { bits: t } = e, r = 128, i = new Uint8Array([
            0,
            0,
            0,
            0
        ]), o = new Set;
        return t.forEach((s, a)=>{
            if (s >= ie.MAX_SIGNATURES_SUPPORTED) throw new Error(`Cannot have a signature larger than ${ie.MAX_SIGNATURES_SUPPORTED - 1}.`);
            if (o.has(s)) throw new Error("Duplicate bits detected.");
            if (a > 0 && s <= t[a - 1]) throw new Error("The bits need to be sorted in ascending order.");
            o.add(s);
            let u = Math.floor(s / 8), d = i[u];
            d |= r >> s % 8, i[u] = d;
        }), i;
    }
};
ie.MAX_SIGNATURES_SUPPORTED = 32, ie.BITMAP_LEN = 4;
var _e = ie;
var V = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$NJN3EAOM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"] {
    static deserialize(e) {
        let t = e.deserializeUleb128AsU32();
        switch(t){
            case 0:
                return me.load(e);
            case 1:
                return ke.load(e);
            case 2:
                return X.load(e);
            case 3:
                return xe.load(e);
            case 4:
                return Rt.load(e);
            case 5:
                return rt.load(e);
            default:
                throw new Error(`Unknown variant index for AccountAuthenticator: ${t}`);
        }
    }
    isEd25519() {
        return this instanceof me;
    }
    isMultiEd25519() {
        return this instanceof ke;
    }
    isSingleKey() {
        return this instanceof X;
    }
    isMultiKey() {
        return this instanceof xe;
    }
}, me = class n extends V {
    constructor(e, t){
        super(), this.public_key = e, this.signature = t;
    }
    serialize(e) {
        e.serializeU32AsUleb128(0), this.public_key.serialize(e), this.signature.serialize(e);
    }
    static load(e) {
        let t = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$YQIAWAPY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].deserialize(e), r = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$YQIAWAPY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"].deserialize(e);
        return new n(t, r);
    }
}, ke = class n extends V {
    constructor(e, t){
        super(), this.public_key = e, this.signature = t;
    }
    serialize(e) {
        e.serializeU32AsUleb128(1), this.public_key.serialize(e), this.signature.serialize(e);
    }
    static load(e) {
        let t = Dt.deserialize(e), r = _e.deserialize(e);
        return new n(t, r);
    }
}, X = class n extends V {
    constructor(e, t){
        super(), this.public_key = e, this.signature = t;
    }
    serialize(e) {
        e.serializeU32AsUleb128(2), this.public_key.serialize(e), this.signature.serialize(e);
    }
    static load(e) {
        let t = k.deserialize(e), r = O.deserialize(e);
        return new n(t, r);
    }
}, xe = class n extends V {
    constructor(e, t){
        super(), this.public_keys = e, this.signatures = t;
    }
    serialize(e) {
        e.serializeU32AsUleb128(3), this.public_keys.serialize(e), this.signatures.serialize(e);
    }
    static load(e) {
        let t = Se.deserialize(e), r = Pe.deserialize(e);
        return new n(t, r);
    }
}, Rt = class n extends V {
    serialize(e) {
        e.serializeU32AsUleb128(4);
    }
    static load(e) {
        return new n;
    }
}, rt = class n extends V {
    constructor(e, t, r, i){
        if (super(), !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$YFFDF22R$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])(e)) throw new Error(`Invalid function info ${e} passed into AccountAuthenticatorAbstraction`);
        this.functionInfo = e, this.authenticator = r, this.signingMessageDigest = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].fromHexInput(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].fromHexInput(t).toUint8Array()), this.accountIdentity = i;
    }
    serialize(e) {
        e.serializeU32AsUleb128(5);
        let { moduleAddress: t, moduleName: r, functionName: i } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$YFFDF22R$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["k"])(this.functionInfo);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].fromString(t).serialize(e), e.serializeStr(r), e.serializeStr(i), this.accountIdentity ? e.serializeU32AsUleb128(1) : e.serializeU32AsUleb128(0), e.serializeBytes(this.signingMessageDigest.toUint8Array()), this.accountIdentity ? e.serializeBytes(this.authenticator) : e.serializeFixedBytes(this.authenticator), this.accountIdentity && e.serializeBytes(this.accountIdentity);
    }
    static load(e) {
        let t = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].deserialize(e), r = e.deserializeStr(), i = e.deserializeStr(), o = e.deserializeUleb128AsU32();
        if (o === 0) {
            let s = e.deserializeBytes(), a = e.deserializeFixedBytes(e.remaining());
            return new n(`${t}::${r}::${i}`, s, a);
        }
        if (o === 1) {
            let s = e.deserializeBytes(), a = e.deserializeBytes(), u = e.deserializeBytes();
            return new n(`${t}::${r}::${i}`, s, a, u);
        }
        throw new Error(`Unknown variant index for AccountAuthenticatorAbstraction: ${o}`);
    }
};
;
var Xt = class n extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$NJN3EAOM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"] {
    constructor(e, t){
        super(), this.address = e, this.name = t;
    }
    static fromStr(e) {
        let t = e.split("::");
        if (t.length !== 2) throw new Error("Invalid module id.");
        return new n(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].fromString(t[0]), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$PRUQZNAP$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"](t[1]));
    }
    serialize(e) {
        this.address.serialize(e), this.name.serialize(e);
    }
    static deserialize(e) {
        let t = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].deserialize(e), r = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$PRUQZNAP$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"].deserialize(e);
        return new n(t, r);
    }
};
var U = class n extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$NJN3EAOM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"] {
    deserialize(e) {
        let t = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].deserialize(e), r = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$PRUQZNAP$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"].deserialize(e), i = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$PRUQZNAP$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"].deserialize(e), o = e.deserializeVector(n);
        return new Ke(t, r, i, o);
    }
    static deserialize(e) {
        let t = e.deserializeUleb128AsU32();
        switch(t){
            case 0:
                return G.load(e);
            case 1:
                return oe.load(e);
            case 2:
                return H.load(e);
            case 3:
                return De.load(e);
            case 4:
                return F.load(e);
            case 5:
                return it.load(e);
            case 6:
                return K.load(e);
            case 7:
                return m.load(e);
            case 8:
                return Fe.load(e);
            case 9:
                return Ue.load(e);
            case 10:
                return Re.load(e);
            case 255:
                return D.load(e);
            default:
                throw new Error(`Unknown variant index for TypeTag: ${t}`);
        }
    }
    isBool() {
        return this instanceof G;
    }
    isAddress() {
        return this instanceof F;
    }
    isGeneric() {
        return this instanceof D;
    }
    isSigner() {
        return this instanceof it;
    }
    isVector() {
        return this instanceof K;
    }
    isStruct() {
        return this instanceof m;
    }
    isU8() {
        return this instanceof oe;
    }
    isU16() {
        return this instanceof Fe;
    }
    isU32() {
        return this instanceof Ue;
    }
    isU64() {
        return this instanceof H;
    }
    isU128() {
        return this instanceof De;
    }
    isU256() {
        return this instanceof Re;
    }
    isPrimitive() {
        return this instanceof it || this instanceof F || this instanceof G || this instanceof oe || this instanceof Fe || this instanceof Ue || this instanceof H || this instanceof De || this instanceof Re;
    }
}, G = class n extends U {
    toString() {
        return "bool";
    }
    serialize(e) {
        e.serializeU32AsUleb128(0);
    }
    static load(e) {
        return new n;
    }
}, oe = class n extends U {
    toString() {
        return "u8";
    }
    serialize(e) {
        e.serializeU32AsUleb128(1);
    }
    static load(e) {
        return new n;
    }
}, Fe = class n extends U {
    toString() {
        return "u16";
    }
    serialize(e) {
        e.serializeU32AsUleb128(8);
    }
    static load(e) {
        return new n;
    }
}, Ue = class n extends U {
    toString() {
        return "u32";
    }
    serialize(e) {
        e.serializeU32AsUleb128(9);
    }
    static load(e) {
        return new n;
    }
}, H = class n extends U {
    toString() {
        return "u64";
    }
    serialize(e) {
        e.serializeU32AsUleb128(2);
    }
    static load(e) {
        return new n;
    }
}, De = class n extends U {
    toString() {
        return "u128";
    }
    serialize(e) {
        e.serializeU32AsUleb128(3);
    }
    static load(e) {
        return new n;
    }
}, Re = class n extends U {
    toString() {
        return "u256";
    }
    serialize(e) {
        e.serializeU32AsUleb128(10);
    }
    static load(e) {
        return new n;
    }
}, F = class n extends U {
    toString() {
        return "address";
    }
    serialize(e) {
        e.serializeU32AsUleb128(4);
    }
    static load(e) {
        return new n;
    }
}, it = class n extends U {
    toString() {
        return "signer";
    }
    serialize(e) {
        e.serializeU32AsUleb128(5);
    }
    static load(e) {
        return new n;
    }
}, Rn = class n extends U {
    constructor(t){
        super();
        this.value = t;
    }
    toString() {
        return `&${this.value.toString()}`;
    }
    serialize(t) {
        t.serializeU32AsUleb128(254);
    }
    static load(t) {
        let r = U.deserialize(t);
        return new n(r);
    }
}, D = class n extends U {
    constructor(t){
        super();
        this.value = t;
        if (t < 0) throw new Error("Generic type parameter index cannot be negative");
    }
    toString() {
        return `T${this.value}`;
    }
    serialize(t) {
        t.serializeU32AsUleb128(255), t.serializeU32(this.value);
    }
    static load(t) {
        let r = t.deserializeU32();
        return new n(r);
    }
}, K = class n extends U {
    constructor(t){
        super();
        this.value = t;
    }
    toString() {
        return `vector<${this.value.toString()}>`;
    }
    static u8() {
        return new n(new oe);
    }
    serialize(t) {
        t.serializeU32AsUleb128(6), this.value.serialize(t);
    }
    static load(t) {
        let r = U.deserialize(t);
        return new n(r);
    }
}, m = class n extends U {
    constructor(t){
        super();
        this.value = t;
    }
    toString() {
        let t = "";
        return this.value.typeArgs.length > 0 && (t = `<${this.value.typeArgs.map((r)=>r.toString()).join(", ")}>`), `${this.value.address.toString()}::${this.value.moduleName.identifier}::${this.value.name.identifier}${t}`;
    }
    serialize(t) {
        t.serializeU32AsUleb128(7), this.value.serialize(t);
    }
    static load(t) {
        let r = Ke.deserialize(t);
        return new n(r);
    }
    isTypeTag(t, r, i) {
        return this.value.moduleName.identifier === r && this.value.name.identifier === i && this.value.address.equals(t);
    }
    isString() {
        return this.isTypeTag(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].ONE, "string", "String");
    }
    isOption() {
        return this.isTypeTag(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].ONE, "option", "Option");
    }
    isObject() {
        return this.isTypeTag(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].ONE, "object", "Object");
    }
    isDelegationKey() {
        return this.isTypeTag(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].ONE, "permissioned_delegation", "DelegationKey");
    }
    isRateLimiter() {
        return this.isTypeTag(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].ONE, "rate_limiter", "RateLimiter");
    }
}, Ke = class n extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$NJN3EAOM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"] {
    constructor(e, t, r, i){
        super(), this.address = e, this.moduleName = t, this.name = r, this.typeArgs = i;
    }
    serialize(e) {
        e.serialize(this.address), e.serialize(this.moduleName), e.serialize(this.name), e.serializeVector(this.typeArgs);
    }
    static deserialize(e) {
        let t = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].deserialize(e), r = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$PRUQZNAP$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"].deserialize(e), i = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$PRUQZNAP$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"].deserialize(e), o = e.deserializeVector(U);
        return new n(t, r, i, o);
    }
};
function Ju() {
    return new Ke(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].ONE, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$PRUQZNAP$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"]("aptos_coin"), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$PRUQZNAP$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"]("AptosCoin"), []);
}
function x() {
    return new Ke(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].ONE, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$PRUQZNAP$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"]("string"), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$PRUQZNAP$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"]("String"), []);
}
function Zu(n) {
    return new Ke(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].ONE, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$PRUQZNAP$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"]("option"), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$PRUQZNAP$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"]("Option"), [
        n
    ]);
}
function se(n) {
    return new Ke(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].ONE, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$PRUQZNAP$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"]("object"), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$PRUQZNAP$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"]("Object"), [
        n
    ]);
}
function qs(n) {
    let e = n.deserializeUleb128AsU32();
    switch(e){
        case 0:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$C6JRJNK3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].deserialize(n);
        case 1:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$C6JRJNK3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["e"].deserialize(n);
        case 2:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$C6JRJNK3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["f"].deserialize(n);
        case 3:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].deserialize(n);
        case 4:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$SOJ3OG6X$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"].deserialize(n, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$C6JRJNK3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"]);
        case 5:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$C6JRJNK3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"].deserialize(n);
        case 6:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$C6JRJNK3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"].deserialize(n);
        case 7:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$C6JRJNK3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"].deserialize(n);
        case 8:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$C6JRJNK3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["g"].deserialize(n);
        case 9:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$SOJ3OG6X$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].deserialize(n);
        default:
            throw new Error(`Unknown variant index for ScriptTransactionArgument: ${e}`);
    }
}
var ot = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$NJN3EAOM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"] {
    static deserialize(e) {
        let t = e.deserializeUleb128AsU32();
        switch(t){
            case 0:
                return st.load(e);
            case 2:
                return en.load(e);
            case 3:
                return tn.load(e);
            default:
                throw new Error(`Unknown variant index for TransactionPayload: ${t}`);
        }
    }
}, st = class n extends ot {
    constructor(e){
        super(), this.script = e;
    }
    serialize(e) {
        e.serializeU32AsUleb128(0), this.script.serialize(e);
    }
    static load(e) {
        let t = nn.deserialize(e);
        return new n(t);
    }
}, en = class n extends ot {
    constructor(e){
        super(), this.entryFunction = e;
    }
    serialize(e) {
        e.serializeU32AsUleb128(2), this.entryFunction.serialize(e);
    }
    static load(e) {
        let t = at.deserialize(e);
        return new n(t);
    }
}, tn = class n extends ot {
    constructor(e){
        super(), this.multiSig = e;
    }
    serialize(e) {
        e.serializeU32AsUleb128(3), this.multiSig.serialize(e);
    }
    static load(e) {
        let t = rn.deserialize(e);
        return new n(t);
    }
}, at = class n {
    constructor(e, t, r, i){
        this.module_name = e, this.function_name = t, this.type_args = r, this.args = i;
    }
    static build(e, t, r, i) {
        return new n(Xt.fromStr(e), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$PRUQZNAP$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"](t), r, i);
    }
    serialize(e) {
        this.module_name.serialize(e), this.function_name.serialize(e), e.serializeVector(this.type_args), e.serializeU32AsUleb128(this.args.length), this.args.forEach((t)=>{
            t.serializeForEntryFunction(e);
        });
    }
    static deserialize(e) {
        let t = Xt.deserialize(e), r = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$PRUQZNAP$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"].deserialize(e), i = e.deserializeVector(U), o = e.deserializeUleb128AsU32(), s = new Array;
        for(let a = 0; a < o; a += 1){
            let u = e.deserializeUleb128AsU32(), d = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$IXYGZ57N$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"].deserialize(e, u);
            s.push(d);
        }
        return new n(t, r, i, s);
    }
}, nn = class n {
    constructor(e, t, r){
        this.bytecode = e, this.type_args = t, this.args = r;
    }
    serialize(e) {
        e.serializeBytes(this.bytecode), e.serializeVector(this.type_args), e.serializeU32AsUleb128(this.args.length), this.args.forEach((t)=>{
            t.serializeForScriptFunction(e);
        });
    }
    static deserialize(e) {
        let t = e.deserializeBytes(), r = e.deserializeVector(U), i = e.deserializeUleb128AsU32(), o = new Array;
        for(let s = 0; s < i; s += 1){
            let a = qs(e);
            o.push(a);
        }
        return new n(t, r, o);
    }
}, rn = class n {
    constructor(e, t){
        this.multisig_address = e, this.transaction_payload = t;
    }
    serialize(e) {
        this.multisig_address.serialize(e), this.transaction_payload === void 0 ? e.serializeBool(!1) : (e.serializeBool(!0), this.transaction_payload.serialize(e));
    }
    static deserialize(e) {
        let t = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].deserialize(e), r = e.deserializeBool(), i;
        return r && (i = on.deserialize(e)), new n(t, i);
    }
}, on = class n extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$NJN3EAOM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"] {
    constructor(e){
        super(), this.transaction_payload = e;
    }
    serialize(e) {
        e.serializeU32AsUleb128(0), this.transaction_payload.serialize(e);
    }
    static deserialize(e) {
        return e.deserializeUleb128AsU32(), new n(at.deserialize(e));
    }
};
var pe = class n extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$NJN3EAOM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"] {
    constructor(e, t, r, i, o, s, a){
        super(), this.sender = e, this.sequence_number = t, this.payload = r, this.max_gas_amount = i, this.gas_unit_price = o, this.expiration_timestamp_secs = s, this.chain_id = a;
    }
    serialize(e) {
        this.sender.serialize(e), e.serializeU64(this.sequence_number), this.payload.serialize(e), e.serializeU64(this.max_gas_amount), e.serializeU64(this.gas_unit_price), e.serializeU64(this.expiration_timestamp_secs), this.chain_id.serialize(e);
    }
    static deserialize(e) {
        let t = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].deserialize(e), r = e.deserializeU64(), i = ot.deserialize(e), o = e.deserializeU64(), s = e.deserializeU64(), a = e.deserializeU64(), u = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$OYH2T6V5$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"].deserialize(e);
        return new n(t, r, i, o, s, a, u);
    }
}, On = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$NJN3EAOM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"] {
    static deserialize(e) {
        let t = e.deserializeUleb128AsU32();
        switch(t){
            case 0:
                return ct.load(e);
            case 1:
                return ut.load(e);
            default:
                throw new Error(`Unknown variant index for RawTransactionWithData: ${t}`);
        }
    }
}, ct = class n extends On {
    constructor(e, t){
        super(), this.raw_txn = e, this.secondary_signer_addresses = t;
    }
    serialize(e) {
        e.serializeU32AsUleb128(0), this.raw_txn.serialize(e), e.serializeVector(this.secondary_signer_addresses);
    }
    static load(e) {
        let t = pe.deserialize(e), r = e.deserializeVector(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"]);
        return new n(t, r);
    }
}, ut = class n extends On {
    constructor(e, t, r){
        super(), this.raw_txn = e, this.secondary_signer_addresses = t, this.fee_payer_address = r;
    }
    serialize(e) {
        e.serializeU32AsUleb128(1), this.raw_txn.serialize(e), e.serializeVector(this.secondary_signer_addresses), this.fee_payer_address.serialize(e);
    }
    static load(e) {
        let t = pe.deserialize(e), r = e.deserializeVector(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"]), i = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].deserialize(e);
        return new n(t, r, i);
    }
};
var Oe = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$NJN3EAOM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"] {
    static deserialize(e) {
        let t = e.deserializeUleb128AsU32();
        switch(t){
            case 0:
                return dt.load(e);
            case 1:
                return Ot.load(e);
            case 2:
                return pt.load(e);
            case 3:
                return lt.load(e);
            case 4:
                return Qe.load(e);
            default:
                throw new Error(`Unknown variant index for TransactionAuthenticator: ${t}`);
        }
    }
    isEd25519() {
        return this instanceof dt;
    }
    isMultiEd25519() {
        return this instanceof Ot;
    }
    isMultiAgent() {
        return this instanceof pt;
    }
    isFeePayer() {
        return this instanceof lt;
    }
    isSingleSender() {
        return this instanceof Qe;
    }
}, dt = class n extends Oe {
    constructor(e, t){
        super(), this.public_key = e, this.signature = t;
    }
    serialize(e) {
        e.serializeU32AsUleb128(0), this.public_key.serialize(e), this.signature.serialize(e);
    }
    static load(e) {
        let t = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$YQIAWAPY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].deserialize(e), r = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$YQIAWAPY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"].deserialize(e);
        return new n(t, r);
    }
}, Ot = class n extends Oe {
    constructor(e, t){
        super(), this.public_key = e, this.signature = t;
    }
    serialize(e) {
        e.serializeU32AsUleb128(1), this.public_key.serialize(e), this.signature.serialize(e);
    }
    static load(e) {
        let t = Dt.deserialize(e), r = _e.deserialize(e);
        return new n(t, r);
    }
}, pt = class n extends Oe {
    constructor(e, t, r){
        super(), this.sender = e, this.secondary_signer_addresses = t, this.secondary_signers = r;
    }
    serialize(e) {
        e.serializeU32AsUleb128(2), this.sender.serialize(e), e.serializeVector(this.secondary_signer_addresses), e.serializeVector(this.secondary_signers);
    }
    static load(e) {
        let t = V.deserialize(e), r = e.deserializeVector(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"]), i = e.deserializeVector(V);
        return new n(t, r, i);
    }
}, lt = class n extends Oe {
    constructor(e, t, r, i){
        super(), this.sender = e, this.secondary_signer_addresses = t, this.secondary_signers = r, this.fee_payer = i;
    }
    serialize(e) {
        e.serializeU32AsUleb128(3), this.sender.serialize(e), e.serializeVector(this.secondary_signer_addresses), e.serializeVector(this.secondary_signers), this.fee_payer.address.serialize(e), this.fee_payer.authenticator.serialize(e);
    }
    static load(e) {
        let t = V.deserialize(e), r = e.deserializeVector(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"]), i = e.deserializeVector(V), o = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].deserialize(e), s = V.deserialize(e), a = {
            address: o,
            authenticator: s
        };
        return new n(t, r, i, a);
    }
}, Qe = class n extends Oe {
    constructor(e){
        super(), this.sender = e;
    }
    serialize(e) {
        e.serializeU32AsUleb128(4), this.sender.serialize(e);
    }
    static load(e) {
        let t = V.deserialize(e);
        return new n(t);
    }
};
var Ge = class n extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$NJN3EAOM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"] {
    constructor(e, t){
        super(), this.raw_txn = e, this.authenticator = t;
    }
    serialize(e) {
        this.raw_txn.serialize(e), this.authenticator.serialize(e);
    }
    static deserialize(e) {
        let t = pe.deserialize(e), r = Oe.deserialize(e);
        return new n(t, r);
    }
};
var Gt = class n extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$NJN3EAOM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"] {
    constructor(e, t){
        super(), this.rawTransaction = e, this.feePayerAddress = t;
    }
    serialize(e) {
        this.rawTransaction.serialize(e), this.feePayerAddress === void 0 ? e.serializeBool(!1) : (e.serializeBool(!0), this.feePayerAddress.serialize(e));
    }
    static deserialize(e) {
        let t = pe.deserialize(e), r = e.deserializeBool(), i;
        return r && (i = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].deserialize(e)), new n(t, i);
    }
};
var Gn = class n extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$NJN3EAOM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"] {
    constructor(e, t, r){
        super(), this.rawTransaction = e, this.feePayerAddress = r, this.secondarySignerAddresses = t;
    }
    serialize(e) {
        this.rawTransaction.serialize(e), e.serializeVector(this.secondarySignerAddresses), this.feePayerAddress === void 0 ? e.serializeBool(!1) : (e.serializeBool(!0), this.feePayerAddress.serialize(e));
    }
    static deserialize(e) {
        let t = pe.deserialize(e), r = e.deserializeVector(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"]), i = e.deserializeBool(), o;
        return i && (o = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].deserialize(e)), new n(t, r, o);
    }
};
function Bn(n) {
    return n.feePayerAddress ? new ut(n.rawTransaction, n.secondarySignerAddresses ?? [], n.feePayerAddress) : n.secondarySignerAddresses ? new ct(n.rawTransaction, n.secondarySignerAddresses) : n.rawTransaction;
}
function Je(n, e) {
    let t = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$sha3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sha3_256"].create();
    if (!e.startsWith("APTOS::")) throw new Error(`Domain separator needs to start with 'APTOS::'.  Provided - ${e}`);
    t.update(e);
    let r = t.digest(), i = n, o = new Uint8Array(r.length + i.length);
    return o.set(r), o.set(i, r.length), o;
}
function sp(n) {
    return Je(n.bcsToBytes(), `APTOS::${n.constructor.name}`);
}
function ye(n) {
    let e = Bn(n);
    return n.feePayerAddress ? Je(e.bcsToBytes(), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RJ7F4JDV$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["h"]) : n.secondarySignerAddresses ? Je(e.bcsToBytes(), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RJ7F4JDV$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["h"]) : Je(e.bcsToBytes(), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RJ7F4JDV$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["g"]);
}
var ee = class n {
    constructor(e){
        this.signingScheme = 0;
        let { privateKey: t, address: r } = e;
        this.privateKey = t, this.publicKey = t.publicKey(), this.accountAddress = r ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(r) : this.publicKey.authKey().derivedAddress();
    }
    static generate() {
        let e = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$YQIAWAPY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"].generate();
        return new n({
            privateKey: e
        });
    }
    static fromDerivationPath(e) {
        let { path: t, mnemonic: r } = e, i = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$YQIAWAPY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"].fromDerivationPath(t, r);
        return new n({
            privateKey: i
        });
    }
    verifySignature(e) {
        return this.publicKey.verifySignature(e);
    }
    async verifySignatureAsync(e) {
        return this.publicKey.verifySignatureAsync({
            ...e,
            signature: e.signature
        });
    }
    signWithAuthenticator(e) {
        return new me(this.publicKey, this.privateKey.sign(e));
    }
    signTransactionWithAuthenticator(e) {
        return new me(this.publicKey, this.signTransaction(e));
    }
    sign(e) {
        return this.privateKey.sign(e);
    }
    signTransaction(e) {
        return this.sign(ye(e));
    }
};
function br(n) {
    return typeof n == "object" && n !== null && "getAnyPublicKey" in n && typeof n.getAnyPublicKey == "function";
}
var le = class n {
    constructor(e){
        this.signingScheme = 2;
        let { privateKey: t, address: r } = e;
        this.privateKey = t, this.publicKey = new k(t.publicKey()), this.accountAddress = r ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(r) : this.publicKey.authKey().derivedAddress();
    }
    getAnyPublicKey() {
        return this.publicKey;
    }
    static generate(e = {}) {
        let { scheme: t = 0 } = e, r;
        switch(t){
            case 0:
                r = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$YQIAWAPY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"].generate();
                break;
            case 2:
                r = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$V7U5Y4AU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].generate();
                break;
            default:
                throw new Error(`Unsupported signature scheme ${t}`);
        }
        return new n({
            privateKey: r
        });
    }
    static fromDerivationPath(e) {
        let { scheme: t = 0, path: r, mnemonic: i } = e, o;
        switch(t){
            case 0:
                o = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$YQIAWAPY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"].fromDerivationPath(r, i);
                break;
            case 2:
                o = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$V7U5Y4AU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].fromDerivationPath(r, i);
                break;
            default:
                throw new Error(`Unsupported signature scheme ${t}`);
        }
        return new n({
            privateKey: o
        });
    }
    verifySignature(e) {
        return this.publicKey.verifySignature(e);
    }
    async verifySignatureAsync(e) {
        return this.publicKey.verifySignatureAsync({
            ...e,
            signature: e.signature
        });
    }
    signWithAuthenticator(e) {
        return new X(this.publicKey, this.sign(e));
    }
    signTransactionWithAuthenticator(e) {
        return new X(this.publicKey, this.signTransaction(e));
    }
    sign(e) {
        return new O(this.privateKey.sign(e));
    }
    signTransaction(e) {
        return this.sign(ye(e));
    }
    static fromEd25519Account(e) {
        return new n({
            privateKey: e.privateKey,
            address: e.accountAddress
        });
    }
};
var Be = class {
    static generate(e = {}) {
        let { scheme: t = 0, legacy: r = !0 } = e;
        return t === 0 && r ? ee.generate() : le.generate({
            scheme: t
        });
    }
    static fromPrivateKey(e) {
        let { privateKey: t, address: r, legacy: i = !0 } = e;
        return t instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$YQIAWAPY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"] && i ? new ee({
            privateKey: t,
            address: r
        }) : new le({
            privateKey: t,
            address: r
        });
    }
    static fromPrivateKeyAndAddress(e) {
        return this.fromPrivateKey(e);
    }
    static fromDerivationPath(e) {
        let { scheme: t = 0, mnemonic: r, path: i, legacy: o = !0 } = e;
        return t === 0 && o ? ee.fromDerivationPath({
            mnemonic: r,
            path: i
        }) : le.fromDerivationPath({
            scheme: t,
            mnemonic: r,
            path: i
        });
    }
    static authKey(e) {
        let { publicKey: t } = e;
        return t.authKey();
    }
    verifySignature(e) {
        return this.publicKey.verifySignature(e);
    }
    async verifySignatureAsync(e) {
        return this.publicKey.verifySignatureAsync(e);
    }
};
;
var Js = 1209600, Bt = class Bt extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$NJN3EAOM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"] {
    constructor(e){
        super();
        let { privateKey: t, expiryDateSecs: r, blinder: i } = e;
        this.privateKey = t, this.publicKey = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$WTLQD6MR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"](t.publicKey()), this.expiryDateSecs = r || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$YFFDF22R$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$YFFDF22R$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])() + Js), this.blinder = i !== void 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].fromHexInput(i).toUint8Array() : Zs();
        let o = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GOXRBEIJ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])(this.publicKey.bcsToBytes(), 93);
        o.push(BigInt(this.expiryDateSecs)), o.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GOXRBEIJ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(this.blinder));
        let s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GOXRBEIJ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["e"])(o);
        this.nonce = s.toString();
    }
    getPublicKey() {
        return this.publicKey;
    }
    isExpired() {
        return Math.floor(Date.now() / 1e3) > this.expiryDateSecs;
    }
    serialize(e) {
        e.serializeU32AsUleb128(this.publicKey.variant), e.serializeBytes(this.privateKey.toUint8Array()), e.serializeU64(this.expiryDateSecs), e.serializeFixedBytes(this.blinder);
    }
    static deserialize(e) {
        let t = e.deserializeUleb128AsU32(), r;
        switch(t){
            case 0:
                r = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$YQIAWAPY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"].deserialize(e);
                break;
            default:
                throw new Error(`Unknown variant index for EphemeralPublicKey: ${t}`);
        }
        let i = e.deserializeU64(), o = e.deserializeFixedBytes(31);
        return new Bt({
            privateKey: r,
            expiryDateSecs: Number(i),
            blinder: o
        });
    }
    static fromBytes(e) {
        return Bt.deserialize(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$JGFKIUG5$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"](e));
    }
    static generate(e) {
        let t;
        switch(e?.scheme){
            case 0:
            default:
                t = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$YQIAWAPY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"].generate();
        }
        return new Bt({
            privateKey: t,
            expiryDateSecs: e?.expiryDateSecs
        });
    }
    sign(e) {
        if (this.isExpired()) throw new Error("EphemeralKeyPair has expired");
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$WTLQD6MR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"](this.privateKey.sign(e));
    }
};
Bt.BLINDER_LENGTH = 31;
var gt = Bt;
function Zs() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["randomBytes"])(gt.BLINDER_LENGTH);
}
;
;
function Nn(n) {
    return n != null && typeof n.checkKeylessAccountValidity == "function";
}
var zt = class zt extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$NJN3EAOM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"] {
    constructor(t){
        super();
        this.signingScheme = 2;
        let { address: r, ephemeralKeyPair: i, publicKey: o, uidKey: s, uidVal: a, aud: u, pepper: d, proof: l, proofFetchCallback: y, jwt: p, verificationKeyHash: g } = t;
        if (this.ephemeralKeyPair = i, this.publicKey = o, this.accountAddress = r ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(r) : this.publicKey.authKey().derivedAddress(), this.uidKey = s, this.uidVal = a, this.aud = u, this.jwt = p, this.emitter = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$eventemitter3$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], this.proofOrPromise = l, l instanceof ae) this.proof = l;
        else {
            if (y === void 0) throw new Error("Must provide callback for async proof fetch");
            this.emitter.on("proofFetchFinish", async (C)=>{
                await y(C), this.emitter.removeAllListeners();
            }), this.init(l);
        }
        let f = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].fromHexInput(d).toUint8Array();
        if (f.length !== zt.PEPPER_LENGTH) throw new Error(`Pepper length in bytes should be ${zt.PEPPER_LENGTH}`);
        if (this.pepper = f, g !== void 0) {
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].hexInputToUint8Array(g).length !== 32) throw new Error("verificationKeyHash must be 32 bytes");
            this.verificationKeyHash = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].hexInputToUint8Array(g);
        }
    }
    getAnyPublicKey() {
        return new k(this.publicKey);
    }
    async init(t) {
        try {
            this.proof = await t, this.emitter.emit("proofFetchFinish", {
                status: "Success"
            });
        } catch (r) {
            r instanceof Error ? this.emitter.emit("proofFetchFinish", {
                status: "Failed",
                error: r.toString()
            }) : this.emitter.emit("proofFetchFinish", {
                status: "Failed",
                error: "Unknown"
            });
        }
    }
    serialize(t) {
        if (this.accountAddress.serialize(t), t.serializeStr(this.jwt), t.serializeStr(this.uidKey), t.serializeFixedBytes(this.pepper), this.ephemeralKeyPair.serialize(t), this.proof === void 0) throw new Error("Cannot serialize - proof undefined");
        this.proof.serialize(t), t.serializeOption(this.verificationKeyHash, 32);
    }
    static partialDeserialize(t) {
        let r = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].deserialize(t), i = t.deserializeStr(), o = t.deserializeStr(), s = t.deserializeFixedBytes(31), a = gt.deserialize(t), u = ae.deserialize(t), d = t.deserializeOption("fixedBytes", 32);
        return {
            address: r,
            jwt: i,
            uidKey: o,
            pepper: s,
            ephemeralKeyPair: a,
            proof: u,
            verificationKeyHash: d
        };
    }
    isExpired() {
        return this.ephemeralKeyPair.isExpired();
    }
    signWithAuthenticator(t) {
        let r = new O(this.sign(t)), i = new k(this.publicKey);
        return new X(i, r);
    }
    signTransactionWithAuthenticator(t) {
        let r = new O(this.signTransaction(t)), i = new k(this.publicKey);
        return new X(i, r);
    }
    async waitForProofFetch() {
        this.proofOrPromise instanceof Promise && await this.proofOrPromise;
    }
    async checkKeylessAccountValidity(t) {
        if (this.isExpired()) throw __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$6Y6ZO7TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"].fromErrorType({
            type: 0
        });
        if (await this.waitForProofFetch(), this.proof === void 0) throw __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$6Y6ZO7TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"].fromErrorType({
            type: 2
        });
        let r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jwt$2d$decode$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jwtDecode"])(this.jwt, {
            header: !0
        });
        if (r.kid === void 0) throw __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$6Y6ZO7TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"].fromErrorType({
            type: 12,
            details: "checkKeylessAccountValidity failed. JWT is missing 'kid' in header. This should never happen."
        });
        if (this.verificationKeyHash !== void 0) {
            let { verificationKey: i } = await Mt({
                aptosConfig: t
            });
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].hexInputToString(i.hash()) !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].hexInputToString(this.verificationKeyHash)) throw __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$6Y6ZO7TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"].fromErrorType({
                type: 4
            });
        } else console.warn("[Aptos SDK] The verification key hash was not set. Proof may be invalid if the verification key has rotated.");
        await zt.fetchJWK({
            aptosConfig: t,
            publicKey: this.publicKey,
            kid: r.kid
        });
    }
    sign(t) {
        let { expiryDateSecs: r } = this.ephemeralKeyPair;
        if (this.isExpired()) throw __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$6Y6ZO7TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"].fromErrorType({
            type: 0
        });
        if (this.proof === void 0) throw __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$6Y6ZO7TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"].fromErrorType({
            type: 1,
            details: "Proof not found - make sure to call `await account.checkKeylessAccountValidity()` before signing."
        });
        let i = this.ephemeralKeyPair.getPublicKey(), o = this.ephemeralKeyPair.sign(t);
        return new ue({
            jwtHeader: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$YFFDF22R$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["e"])(this.jwt.split(".")[0]),
            ephemeralCertificate: new Nt(this.proof, 0),
            expiryDateSecs: r,
            ephemeralPublicKey: i,
            ephemeralSignature: o
        });
    }
    signTransaction(t) {
        if (this.proof === void 0) throw __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$6Y6ZO7TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"].fromErrorType({
            type: 1,
            details: "Proof not found - make sure to call `await account.checkKeylessAccountValidity()` before signing."
        });
        let r = Bn(t), o = new zn(r, this.proof.proof).hash();
        return this.sign(o);
    }
    getSigningMessage(t) {
        if (this.proof === void 0) throw __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$6Y6ZO7TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"].fromErrorType({
            type: 1,
            details: "Proof not found - make sure to call `await account.checkKeylessAccountValidity()` before signing."
        });
        let r = Bn(t);
        return new zn(r, this.proof.proof).hash();
    }
    verifySignature(t) {
        return this.publicKey.verifySignature(t);
    }
    async verifySignatureAsync(t) {
        return this.publicKey.verifySignatureAsync({
            ...t
        });
    }
    static async fetchJWK(t) {
        return wr(t);
    }
};
zt.PEPPER_LENGTH = 31;
var ce = zt, zn = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$NJN3EAOM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"] {
    constructor(t, r){
        super();
        this.domainSeparator = "APTOS::TransactionAndProof";
        this.transaction = t, this.proof = r;
    }
    serialize(t) {
        t.serializeFixedBytes(this.transaction.bcsToBytes()), t.serializeOption(this.proof);
    }
    hash() {
        return Je(this.bcsToBytes(), this.domainSeparator);
    }
};
var Ne = class n extends ce {
    constructor(e){
        let t = E.create(e);
        super({
            publicKey: t,
            ...e
        }), this.publicKey = t;
    }
    serialize(e) {
        super.serialize(e);
    }
    static deserialize(e) {
        let { address: t, proof: r, ephemeralKeyPair: i, jwt: o, uidKey: s, pepper: a, verificationKeyHash: u } = ce.partialDeserialize(e), { iss: d, aud: l, uidVal: y } = ze({
            jwt: o,
            uidKey: s
        });
        return new n({
            address: t,
            proof: r,
            ephemeralKeyPair: i,
            iss: d,
            uidKey: s,
            uidVal: y,
            aud: l,
            pepper: a,
            jwt: o,
            verificationKeyHash: u
        });
    }
    static fromBytes(e) {
        return n.deserialize(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$JGFKIUG5$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].hexInputToUint8Array(e)));
    }
    static create(e) {
        let { address: t, proof: r, jwt: i, ephemeralKeyPair: o, pepper: s, uidKey: a = "sub", proofFetchCallback: u, verificationKey: d } = e, { iss: l, aud: y, uidVal: p } = ze({
            jwt: i,
            uidKey: a
        });
        return new n({
            address: t,
            proof: r,
            ephemeralKeyPair: o,
            iss: l,
            uidKey: a,
            uidVal: p,
            aud: y,
            pepper: s,
            jwt: i,
            proofFetchCallback: u,
            verificationKeyHash: d ? d.hash() : void 0
        });
    }
};
var mt = class n extends ce {
    constructor(e){
        let t = q.create(e);
        super({
            publicKey: t,
            ...e
        }), this.publicKey = t, this.audless = e.audless ?? !1;
    }
    serialize(e) {
        super.serialize(e), this.publicKey.jwkAddress.serialize(e);
    }
    static deserialize(e) {
        let { address: t, proof: r, ephemeralKeyPair: i, jwt: o, uidKey: s, pepper: a, verificationKeyHash: u } = ce.partialDeserialize(e), d = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].deserialize(e), { iss: l, aud: y, uidVal: p } = ze({
            jwt: o,
            uidKey: s
        });
        return new n({
            address: t,
            proof: r,
            ephemeralKeyPair: i,
            iss: l,
            uidKey: s,
            uidVal: p,
            aud: y,
            pepper: a,
            jwt: o,
            verificationKeyHash: u,
            jwkAddress: d
        });
    }
    static fromBytes(e) {
        return n.deserialize(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$JGFKIUG5$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"].fromHex(e));
    }
    static create(e) {
        let { address: t, proof: r, jwt: i, ephemeralKeyPair: o, pepper: s, jwkAddress: a, uidKey: u = "sub", proofFetchCallback: d, verificationKey: l } = e, { iss: y, aud: p, uidVal: g } = ze({
            jwt: i,
            uidKey: u
        });
        return new n({
            address: t,
            proof: r,
            ephemeralKeyPair: o,
            iss: y,
            uidKey: u,
            uidVal: g,
            aud: p,
            pepper: s,
            jwkAddress: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(a),
            jwt: i,
            proofFetchCallback: d,
            verificationKeyHash: l ? l.hash() : void 0
        });
    }
};
var sn = class n {
    constructor(e){
        this.signingScheme = 3;
        let { multiKey: t, address: r } = e, i = e.signers.map((a)=>a instanceof ee ? le.fromEd25519Account(a) : a);
        if (t.signaturesRequired > i.length) throw new Error(`Not enough signers provided to satisfy the required signatures. Need ${t.signaturesRequired} signers, but only ${i.length} provided`);
        if (t.signaturesRequired < i.length) throw new Error(`More signers provided than required. Need ${t.signaturesRequired} signers, but ${i.length} provided`);
        this.publicKey = t, this.accountAddress = r ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(r) : this.publicKey.authKey().derivedAddress();
        let o = [];
        for (let a of i)o.push(this.publicKey.getIndex(a.getAnyPublicKey()));
        let s = i.map((a, u)=>[
                a,
                o[u]
            ]);
        s.sort((a, u)=>a[1] - u[1]), this.signers = s.map((a)=>a[0]), this.signerIndicies = s.map((a)=>a[1]), this.signaturesBitmap = this.publicKey.createBitmap({
            bits: o
        });
    }
    static fromPublicKeysAndSigners(e) {
        let { address: t, publicKeys: r, signaturesRequired: i, signers: o } = e, s = new Se({
            publicKeys: r,
            signaturesRequired: i
        });
        return new n({
            multiKey: s,
            signers: o,
            address: t
        });
    }
    static isMultiKeySigner(e) {
        return e instanceof n;
    }
    signWithAuthenticator(e) {
        return new xe(this.publicKey, this.sign(e));
    }
    signTransactionWithAuthenticator(e) {
        return new xe(this.publicKey, this.signTransaction(e));
    }
    async waitForProofFetch() {
        let t = this.signers.filter((r)=>r instanceof ce).map(async (r)=>r.waitForProofFetch());
        await Promise.all(t);
    }
    async checkKeylessAccountValidity(e) {
        let r = this.signers.filter((i)=>i instanceof ce).map((i)=>i.checkKeylessAccountValidity(e));
        await Promise.all(r);
    }
    sign(e) {
        let t = [];
        for (let r of this.signers)t.push(r.sign(e));
        return new Pe({
            signatures: t,
            bitmap: this.signaturesBitmap
        });
    }
    signTransaction(e) {
        let t = [];
        for (let r of this.signers)t.push(r.signTransaction(e));
        return new Pe({
            signatures: t,
            bitmap: this.signaturesBitmap
        });
    }
    verifySignature(e) {
        return this.publicKey.verifySignature(e);
    }
    async verifySignatureAsync(e) {
        return await this.publicKey.verifySignatureAsync(e);
    }
};
var Mn = class {
    constructor(e){
        this.signingScheme = 1;
        let { signers: t, publicKey: r, address: i } = e;
        if (this.publicKey = r, this.accountAddress = i ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(i) : this.publicKey.authKey().derivedAddress(), r.threshold > t.length) throw new Error(`Not enough signers provided to satisfy the required signatures. Need ${r.threshold} signers, but only ${t.length} provided`);
        if (r.threshold < t.length) throw new Error(`More signers provided than required. Need ${r.threshold} signers, but ${t.length} provided`);
        let o = [];
        for (let a of t)o.push(this.publicKey.getIndex(a.publicKey()));
        let s = t.map((a, u)=>[
                a,
                o[u]
            ]);
        s.sort((a, u)=>a[1] - u[1]), this.signers = s.map((a)=>a[0]), this.signerIndices = s.map((a)=>a[1]), this.signaturesBitmap = this.publicKey.createBitmap({
            bits: o
        });
    }
    verifySignature(e) {
        return this.publicKey.verifySignature(e);
    }
    async verifySignatureAsync(e) {
        return this.publicKey.verifySignatureAsync({
            ...e,
            signature: e.signature
        });
    }
    signWithAuthenticator(e) {
        return new ke(this.publicKey, this.sign(e));
    }
    signTransactionWithAuthenticator(e) {
        return new ke(this.publicKey, this.signTransaction(e));
    }
    sign(e) {
        let t = [];
        for (let r of this.signers)t.push(r.sign(e));
        return new _e({
            signatures: t,
            bitmap: this.signaturesBitmap
        });
    }
    signTransaction(e) {
        return this.sign(ye(e));
    }
};
function Zi(n) {
    let e = n.deserializeUleb128AsU32();
    if (!Object.values(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$ODAAZLPK$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["E"]).includes(e)) throw new Error(`Deserialization of Account failed: SigningScheme variant ${e} is invalid`);
    return {
        address: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].deserialize(n),
        signingScheme: e
    };
}
function Yi(n, e) {
    if (e.serializeStr(n.jwt), e.serializeStr(n.uidKey), e.serializeFixedBytes(n.pepper), n.ephemeralKeyPair.serialize(e), n.proof === void 0) throw new Error("Cannot serialize - proof undefined");
    n.proof.serialize(e), e.serializeOption(n.verificationKeyHash, 32);
}
function Xi(n) {
    let e = n.deserializeStr(), t = n.deserializeStr(), r = n.deserializeFixedBytes(31), i = gt.deserialize(n), o = ae.deserialize(n), s = n.deserializeOption("fixedBytes", 32);
    return {
        jwt: e,
        uidKey: t,
        pepper: r,
        ephemeralKeyPair: i,
        proof: o,
        verificationKeyHash: s
    };
}
var eo;
((y)=>{
    function n(p) {
        let g = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$NJN3EAOM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"];
        switch(g.serializeU32AsUleb128(p.signingScheme), p.accountAddress.serialize(g), p.signingScheme){
            case 0:
                return p.privateKey.serialize(g), g.toUint8Array();
            case 2:
                {
                    if (!br(p)) throw new Error("Account is not a SingleKeySigner");
                    let f = p.getAnyPublicKey();
                    switch(g.serializeU32AsUleb128(f.variant), f.variant){
                        case 3:
                            return Yi(p, g), g.toUint8Array();
                        case 4:
                            {
                                let C = p;
                                return Yi(C, g), C.publicKey.jwkAddress.serialize(g), g.serializeBool(C.audless), g.toUint8Array();
                            }
                        case 1:
                        case 0:
                            return p.privateKey.serialize(g), g.toUint8Array();
                        default:
                            throw new Error(`Invalid public key variant: ${f.variant}`);
                    }
                }
            case 3:
                {
                    let f = p;
                    return f.publicKey.serialize(g), g.serializeU32AsUleb128(f.signers.length), f.signers.forEach((C)=>{
                        g.serializeFixedBytes(n(C));
                    }), g.toUint8Array();
                }
            default:
                throw new Error(`Deserialization of Account failed: invalid signingScheme value ${p.signingScheme}`);
        }
    }
    y.toBytes = n;
    function e(p) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].hexInputToStringWithoutPrefix(n(p));
    }
    y.toHexStringWithoutPrefix = e;
    function t(p) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].hexInputToString(n(p));
    }
    y.toHexString = t;
    function r(p) {
        let { address: g, signingScheme: f } = Zi(p);
        switch(f){
            case 0:
                {
                    let C = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$YQIAWAPY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"].deserialize(p);
                    return new ee({
                        privateKey: C,
                        address: g
                    });
                }
            case 2:
                {
                    let C = p.deserializeUleb128AsU32();
                    switch(C){
                        case 0:
                            {
                                let M = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$YQIAWAPY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"].deserialize(p);
                                return new le({
                                    privateKey: M,
                                    address: g
                                });
                            }
                        case 1:
                            {
                                let M = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$V7U5Y4AU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].deserialize(p);
                                return new le({
                                    privateKey: M,
                                    address: g
                                });
                            }
                        case 3:
                            {
                                let M = Xi(p), Ee = ze(M);
                                return new Ne({
                                    ...M,
                                    ...Ee
                                });
                            }
                        case 4:
                            {
                                let M = Xi(p), Ee = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].deserialize(p), Le = p.deserializeBool(), $e = ze(M);
                                return new mt({
                                    ...M,
                                    ...$e,
                                    jwkAddress: Ee,
                                    audless: Le
                                });
                            }
                        default:
                            throw new Error(`Unsupported public key variant ${C}`);
                    }
                }
            case 3:
                {
                    let C = Se.deserialize(p), M = p.deserializeUleb128AsU32(), Ee = new Array;
                    for(let Le = 0; Le < M; Le += 1){
                        let $e = r(p);
                        if (!br($e) && !($e instanceof ee)) throw new Error("Deserialization of MultiKeyAccount failed. Signer is not a SingleKeySigner or Ed25519Account");
                        Ee.push($e);
                    }
                    return new sn({
                        multiKey: C,
                        signers: Ee,
                        address: g
                    });
                }
            default:
                throw new Error(`Deserialization of Account failed: invalid signingScheme value ${f}`);
        }
    }
    y.deserialize = r;
    function i(p) {
        let g = d(p);
        if (!(g instanceof Ne)) throw new Error("Deserialization of KeylessAccount failed");
        return g;
    }
    y.keylessAccountFromHex = i;
    function o(p) {
        let g = d(p);
        if (!(g instanceof mt)) throw new Error("Deserialization of FederatedKeylessAccount failed");
        return g;
    }
    y.federatedKeylessAccountFromHex = o;
    function s(p) {
        let g = d(p);
        if (!(g instanceof sn)) throw new Error("Deserialization of MultiKeyAccount failed");
        return g;
    }
    y.multiKeyAccountFromHex = s;
    function a(p) {
        let g = d(p);
        if (!(g instanceof le)) throw new Error("Deserialization of SingleKeyAccount failed");
        return g;
    }
    y.singleKeyAccountFromHex = a;
    function u(p) {
        let g = d(p);
        if (!(g instanceof ee)) throw new Error("Deserialization of Ed25519Account failed");
        return g;
    }
    y.ed25519AccountFromHex = u;
    function d(p) {
        return r(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$JGFKIUG5$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"].fromHex(p));
    }
    y.fromHex = d;
    function l(p) {
        return d(p);
    }
    y.fromBytes = l;
})(eo || (eo = {}));
;
var Vn = class n extends Be {
    constructor({ signer: t, accountAddress: r, authenticationFunction: i }){
        super();
        this.signingScheme = 2;
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$YFFDF22R$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])(i)) throw new Error(`Invalid authentication function ${i} passed into AbstractedAccount`);
        this.authenticationFunction = i, this.accountAddress = r, this.publicKey = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$FBCXUC7J$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"](this.accountAddress), this.sign = (o)=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$FBCXUC7J$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"](t(o));
    }
    static fromPermissionedSigner({ signer: t, accountAddress: r }) {
        return new n({
            signer: (i)=>{
                let o = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$NJN3EAOM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"];
                return t.publicKey.serialize(o), t.sign(i).serialize(o), o.toUint8Array();
            },
            accountAddress: r ?? t.accountAddress,
            authenticationFunction: "0x1::permissioned_delegation::authenticate"
        });
    }
    signWithAuthenticator(t) {
        return new rt(this.authenticationFunction, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$sha3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sha3_256"])(t), this.sign((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$sha3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sha3_256"])(t)).toUint8Array());
    }
    signTransactionWithAuthenticator(t) {
        return this.signWithAuthenticator(ye(t));
    }
    signTransaction(t) {
        return this.sign(ye(t));
    }
    setSigner(t) {
        this.sign = (r)=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$FBCXUC7J$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"](t(r));
    }
};
;
var an = class an extends Vn {
    constructor({ signer: e, authenticationFunction: t, abstractPublicKey: r }){
        let i = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"](an.computeAccountAddress(t, r));
        super({
            accountAddress: i,
            signer: e,
            authenticationFunction: t
        }), this.abstractPublicKey = r;
    }
    static computeAccountAddress(e, t) {
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$YFFDF22R$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])(e)) throw new Error(`Invalid authentication function ${e} passed into DerivableAbstractedAccount`);
        let [r, i, o] = e.split("::"), s = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$sha3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sha3_256"].create(), a = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$NJN3EAOM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"];
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].fromString(r).serialize(a), a.serializeStr(i), a.serializeStr(o), s.update(a.toUint8Array());
        let u = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$NJN3EAOM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"];
        return u.serializeBytes(t), s.update(u.toUint8Array()), s.update(new Uint8Array([
            an.ADDRESS_DOMAIN_SEPERATOR
        ])), s.digest();
    }
    signWithAuthenticator(e) {
        return new rt(this.authenticationFunction, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$sha3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sha3_256"])(e), this.sign((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$sha3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sha3_256"])(e)).value, this.abstractPublicKey);
    }
};
an.ADDRESS_DOMAIN_SEPERATOR = 5;
var no = an;
;
function ro(n) {
    return !!n.match(/^[_a-zA-Z0-9]+$/);
}
function io(n) {
    return !!n.match(/\s/);
}
function ta(n) {
    return !!n.match(/^T[0-9]+$/);
}
function na(n) {
    return !!n.match(/^&.+$/);
}
function ra(n) {
    switch(n){
        case "signer":
        case "address":
        case "bool":
        case "u8":
        case "u16":
        case "u32":
        case "u64":
        case "u128":
        case "u256":
            return !0;
        default:
            return !1;
    }
}
function ia(n, e) {
    let t = e;
    for(; t < n.length; t += 1){
        let r = n[t];
        if (!io(r)) break;
    }
    return t;
}
var oa = ((f)=>(f.InvalidTypeTag = "unknown type", f.UnexpectedGenericType = "unexpected generic type", f.UnexpectedTypeArgumentClose = "unexpected '>'", f.UnexpectedWhitespaceCharacter = "unexpected whitespace character", f.UnexpectedComma = "unexpected ','", f.TypeArgumentCountMismatch = "type argument count doesn't match expected amount", f.MissingTypeArgumentClose = "no matching '>' for '<'", f.MissingTypeArgument = "no type argument before ','", f.UnexpectedPrimitiveTypeArguments = "primitive types not expected to have type arguments", f.UnexpectedVectorTypeArgumentCount = "vector type expected to have exactly one type argument", f.UnexpectedStructFormat = "unexpected struct format, must be of the form 0xaddress::module_name::struct_name", f.InvalidModuleNameCharacter = "module name must only contain alphanumeric or '_' characters", f.InvalidStructNameCharacter = "struct name must only contain alphanumeric or '_' characters", f.InvalidAddress = "struct address must be valid", f))(oa || {}), N = class extends Error {
    constructor(e, t){
        super(`Failed to parse typeTag '${e}', ${t}`);
    }
};
function Ae(n, e) {
    let t = e?.allowGenerics ?? !1, r = [], i = [], o = [], s = 0, a = "", u = 1;
    for(; s < n.length;){
        let d = n[s];
        if (d === "<") r.push({
            savedExpectedTypes: u,
            savedStr: a,
            savedTypes: o
        }), a = "", o = [], u = 1;
        else if (d === ">") {
            if (a !== "") {
                let f = cn(a, i, t);
                o.push(f);
            }
            let l = r.pop();
            if (l === void 0) throw new N(n, "unexpected '>'");
            if (u !== o.length) throw new N(n, "type argument count doesn't match expected amount");
            let { savedStr: y, savedTypes: p, savedExpectedTypes: g } = l;
            i = o, o = p, a = y, u = g;
        } else if (d === ",") {
            if (r.length === 0) throw new N(n, "unexpected ','");
            if (a.length === 0) throw new N(n, "no type argument before ','");
            let l = cn(a, i, t);
            i = [], o.push(l), a = "", u += 1;
        } else if (io(d)) {
            let l = !1;
            if (a.length !== 0) {
                let p = cn(a, i, t);
                i = [], o.push(p), a = "", l = !0;
            }
            s = ia(n, s);
            let y = n[s];
            if (s < n.length && l && y !== "," && y !== ">") throw new N(n, "unexpected whitespace character");
            continue;
        } else a += d;
        s += 1;
    }
    if (r.length > 0) throw new N(n, "no matching '>' for '<'");
    switch(o.length){
        case 0:
            return cn(a, i, t);
        case 1:
            if (a === "") return o[0];
            throw new N(n, "unexpected ','");
        default:
            throw new N(n, "unexpected whitespace character");
    }
}
function cn(n, e, t) {
    let r = n.trim(), i = r.toLowerCase();
    if (ra(i) && e.length > 0) throw new N(n, "primitive types not expected to have type arguments");
    switch(r.toLowerCase()){
        case "signer":
            return new it;
        case "bool":
            return new G;
        case "address":
            return new F;
        case "u8":
            return new oe;
        case "u16":
            return new Fe;
        case "u32":
            return new Ue;
        case "u64":
            return new H;
        case "u128":
            return new De;
        case "u256":
            return new Re;
        case "vector":
            if (e.length !== 1) throw new N(n, "vector type expected to have exactly one type argument");
            return new K(e[0]);
        default:
            if (na(r)) {
                let a = r.substring(1);
                return new Rn(cn(a, e, t));
            }
            if (ta(r)) {
                if (t) return new D(Number(r.split("T")[1]));
                throw new N(n, "unexpected generic type");
            }
            if (!r.match(/:/)) throw new N(n, "unknown type");
            let o = r.split("::");
            if (o.length !== 3) throw new N(n, "unexpected struct format, must be of the form 0xaddress::module_name::struct_name");
            let s;
            try {
                s = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].fromString(o[0]);
            } catch  {
                throw new N(n, "struct address must be valid");
            }
            if (!ro(o[1])) throw new N(n, "module name must only contain alphanumeric or '_' characters");
            if (!ro(o[2])) throw new N(n, "struct name must only contain alphanumeric or '_' characters");
            return new m(new Ke(s, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$PRUQZNAP$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"](o[1]), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$PRUQZNAP$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"](o[2]), e));
    }
}
function oo(n) {
    return typeof n == "boolean";
}
function Me(n) {
    return typeof n == "string";
}
function sa(n) {
    return typeof n == "number";
}
function Hn(n) {
    if (sa(n)) return n;
    if (Me(n) && n !== "") return Number.parseInt(n, 10);
}
function Ln(n) {
    return typeof n == "number" || typeof n == "bigint" || typeof n == "string";
}
function so(n) {
    return n == null;
}
function ao(n) {
    return Sr(n) || xr(n) || Kr(n) || Cr(n) || Er(n) || Ir(n) || vr(n) || $n(n) || Pr(n) || aa(n) || n instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$SOJ3OG6X$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"] || n instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$SOJ3OG6X$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"];
}
function Sr(n) {
    return n instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$C6JRJNK3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"];
}
function $n(n) {
    return n instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"];
}
function Pr(n) {
    return n instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$SOJ3OG6X$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"];
}
function aa(n) {
    return n instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$WLUXOUZH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"];
}
function xr(n) {
    return n instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$C6JRJNK3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"];
}
function Kr(n) {
    return n instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$C6JRJNK3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"];
}
function Cr(n) {
    return n instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$C6JRJNK3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"];
}
function Er(n) {
    return n instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$C6JRJNK3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["e"];
}
function Ir(n) {
    return n instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$C6JRJNK3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["f"];
}
function vr(n) {
    return n instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$C6JRJNK3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["g"];
}
function co(n) {
    return "bytecode" in n;
}
function I(n, e) {
    throw new Error(`Type mismatch for argument ${e}, expected '${n}'`);
}
function uo(n) {
    let e = n.params.findIndex((t)=>t !== "signer" && t !== "&signer");
    return e < 0 ? n.params.length : e;
}
var ca = new TextEncoder;
function Vt(n) {
    return n?.map((e)=>Me(e) ? Ae(e) : e) ?? [];
}
async function kr(n, e, t) {
    return (await qn({
        aptosConfig: t,
        accountAddress: n,
        moduleName: e
    })).abi;
}
async function Fr(n, e, t, r) {
    let i = await kr(n, e, r);
    if (!i) throw new Error(`Could not find module ABI for '${n}::${e}'`);
    return i.exposed_functions.find((o)=>o.name === t);
}
async function Am(n, e, t, r) {
    let i = await Fr(n, e, t, r);
    if (!i) throw new Error(`Could not find function ABI for '${n}::${e}::${t}'`);
    let o = [];
    for(let s = 0; s < i.params.length; s += 1)o.push(Ae(i.params[s], {
        allowGenerics: !0
    }));
    return {
        typeParameters: i.generic_type_params,
        parameters: o
    };
}
async function po(n, e, t, r) {
    let i = await Fr(n, e, t, r);
    if (!i) throw new Error(`Could not find entry function ABI for '${n}::${e}::${t}'`);
    if (!i.is_entry) throw new Error(`'${n}::${e}::${t}' is not an entry function`);
    let o = uo(i), s = [];
    for(let a = o; a < i.params.length; a += 1)s.push(Ae(i.params[a], {
        allowGenerics: !0
    }));
    return {
        signers: o,
        typeParameters: i.generic_type_params,
        parameters: s
    };
}
async function lo(n, e, t, r) {
    let i = await Fr(n, e, t, r);
    if (!i) throw new Error(`Could not find view function ABI for '${n}::${e}::${t}'`);
    if (!i.is_view) throw new Error(`'${n}::${e}::${t}' is not an view function`);
    let o = [];
    for(let a = 0; a < i.params.length; a += 1)o.push(Ae(i.params[a], {
        allowGenerics: !0
    }));
    let s = [];
    for(let a = 0; a < i.return.length; a += 1)s.push(Ae(i.return[a], {
        allowGenerics: !0
    }));
    return {
        typeParameters: i.generic_type_params,
        parameters: o,
        returnTypes: s
    };
}
function fm(n, e, t, r, i) {
    return n instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aptos$2d$labs$2f$script$2d$composer$2d$pack$2f$dist$2f$esm$2f$main$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__CallArgument__as__a$3e$__["a"] ? n : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aptos$2d$labs$2f$script$2d$composer$2d$pack$2f$dist$2f$esm$2f$main$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__CallArgument__as__a$3e$__["a"].newBytes(Ht(e, t, n, r, i).bcsToBytes());
}
function Ht(n, e, t, r, i, o) {
    let s;
    if ("exposed_functions" in e) {
        let a = e.exposed_functions.find((u)=>u.name === n);
        if (!a) throw new Error(`Could not find function ABI for '${e.address}::${e.name}::${n}'`);
        if (r >= a.params.length) throw new Error(`Too many arguments for '${n}', expected ${a.params.length}`);
        s = Ae(a.params[r], {
            allowGenerics: !0
        });
    } else {
        if (r >= e.parameters.length) throw new Error(`Too many arguments for '${n}', expected ${e.parameters.length}`);
        s = e.parameters[r];
    }
    return yt(t, s, r, i, "exposed_functions" in e ? e : void 0, o);
}
function yt(n, e, t, r, i, o) {
    return ao(n) ? (_r(e, n, t), n) : ua(n, e, t, r, i, o);
}
function ua(n, e, t, r, i, o) {
    if (e.isBool()) {
        if (oo(n)) return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$C6JRJNK3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"](n);
        if (Me(n)) {
            if (n === "true") return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$C6JRJNK3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"](!0);
            if (n === "false") return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$C6JRJNK3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"](!1);
        }
        I("boolean", t);
    }
    if (e.isAddress()) {
        if (Me(n)) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].fromString(n);
        I("string | AccountAddress", t);
    }
    if (e.isU8()) {
        let s = Hn(n);
        if (s !== void 0) return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$C6JRJNK3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"](s);
        I("number | string", t);
    }
    if (e.isU16()) {
        let s = Hn(n);
        if (s !== void 0) return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$C6JRJNK3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"](s);
        I("number | string", t);
    }
    if (e.isU32()) {
        let s = Hn(n);
        if (s !== void 0) return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$C6JRJNK3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"](s);
        I("number | string", t);
    }
    if (e.isU64()) {
        if (Ln(n)) return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$C6JRJNK3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["e"](BigInt(n));
        I("bigint | number | string", t);
    }
    if (e.isU128()) {
        if (Ln(n)) return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$C6JRJNK3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["f"](BigInt(n));
        I("bigint | number | string", t);
    }
    if (e.isU256()) {
        if (Ln(n)) return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$C6JRJNK3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["g"](BigInt(n));
        I("bigint | number | string", t);
    }
    if (e.isGeneric()) {
        let s = e.value;
        if (s < 0 || s >= r.length) throw new Error(`Generic argument ${e.toString()} is invalid for argument ${t}`);
        return yt(n, r[s], t, r, i);
    }
    if (e.isVector()) {
        if (e.value.isU8()) {
            if (Me(n)) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$SOJ3OG6X$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"].U8(ca.encode(n));
            if (n instanceof Uint8Array) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$SOJ3OG6X$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"].U8(n);
            if (n instanceof ArrayBuffer) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$SOJ3OG6X$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"].U8(new Uint8Array(n));
        }
        if (Me(n) && n.startsWith("[")) return yt(JSON.parse(n), e, t, r);
        if (Array.isArray(n)) return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$SOJ3OG6X$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"](n.map((s)=>yt(s, e.value, t, r, i)));
        throw new Error(`Type mismatch for argument ${t}, type '${e.toString()}'`);
    }
    if (e.isStruct()) {
        if (e.isString()) {
            if (Me(n)) return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$SOJ3OG6X$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"](n);
            I("string", t);
        }
        if (e.isObject()) {
            if (Me(n)) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].fromString(n);
            I("string | AccountAddress", t);
        }
        if (e.isDelegationKey() || e.isRateLimiter()) {
            if (n instanceof Uint8Array) return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$WLUXOUZH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"](n);
            I("Uint8Array", t);
        }
        if (e.isOption()) {
            if (so(n)) {
                let a = e.value.typeArgs[0];
                return a instanceof G ? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$SOJ3OG6X$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"](null) : a instanceof F ? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$SOJ3OG6X$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"](null) : a instanceof oe ? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$SOJ3OG6X$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"](null) : a instanceof Fe ? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$SOJ3OG6X$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"](null) : a instanceof Ue ? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$SOJ3OG6X$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"](null) : a instanceof H ? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$SOJ3OG6X$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"](null) : a instanceof De ? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$SOJ3OG6X$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"](null) : a instanceof Re ? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$SOJ3OG6X$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"](null) : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$SOJ3OG6X$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"](null);
            }
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$SOJ3OG6X$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"](yt(n, e.value.typeArgs[0], t, r, i));
        }
        if (i?.structs.find((a)=>a.name === e.value.name.identifier)?.fields.length === 0 && n instanceof Uint8Array) return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$WLUXOUZH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"](n);
        if (n instanceof Uint8Array && o?.allowUnknownStructs) return console.warn(`Unsupported struct input type for argument ${t}. Continuing since 'allowUnknownStructs' is enabled.`), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$WLUXOUZH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"](n);
        throw new Error(`Unsupported struct input type for argument ${t}, type '${e.toString()}'`);
    }
    throw new Error(`Type mismatch for argument ${t}, type '${e.toString()}'`);
}
function _r(n, e, t) {
    if (n.isBool()) {
        if (Sr(e)) return;
        I("Bool", t);
    }
    if (n.isAddress()) {
        if ($n(e)) return;
        I("AccountAddress", t);
    }
    if (n.isU8()) {
        if (xr(e)) return;
        I("U8", t);
    }
    if (n.isU16()) {
        if (Kr(e)) return;
        I("U16", t);
    }
    if (n.isU32()) {
        if (Cr(e)) return;
        I("U32", t);
    }
    if (n.isU64()) {
        if (Er(e)) return;
        I("U64", t);
    }
    if (n.isU128()) {
        if (Ir(e)) return;
        I("U128", t);
    }
    if (n.isU256()) {
        if (vr(e)) return;
        I("U256", t);
    }
    if (n.isVector()) {
        if (e instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$SOJ3OG6X$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"]) {
            e.values.length > 0 && _r(n.value, e.values[0], t);
            return;
        }
        I("MoveVector", t);
    }
    if (n instanceof m) {
        if (n.isString()) {
            if (Pr(e)) return;
            I("MoveString", t);
        }
        if (n.isObject()) {
            if ($n(e)) return;
            I("AccountAddress", t);
        }
        if (n.isOption()) {
            if (e instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$SOJ3OG6X$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"]) {
                e.value !== void 0 && _r(n.value.typeArgs[0], e.value, t);
                return;
            }
            I("MoveOption", t);
        }
    }
    throw new Error(`Type mismatch for argument ${t}, expected '${n.toString()}'`);
}
async function Wn(n) {
    if (co(n)) return ga(n);
    let { moduleAddress: e, moduleName: t, functionName: r } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$YFFDF22R$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["k"])(n.function), i = await Ao({
        key: "entry-function",
        moduleAddress: e,
        moduleName: t,
        functionName: r,
        aptosConfig: n.aptosConfig,
        abi: n.abi,
        fetch: po
    });
    return pa({
        ...n,
        abi: i
    });
}
function pa(n) {
    let e = n.abi, { moduleAddress: t, moduleName: r, functionName: i } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$YFFDF22R$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["k"])(n.function), o = Vt(n.typeArguments);
    if (o.length !== e.typeParameters.length) throw new Error(`Type argument count mismatch, expected ${e.typeParameters.length}, received ${o.length}`);
    let s = n.functionArguments.map((u, d)=>Ht(n.function, e, u, d, o));
    if (s.length !== e.parameters.length) throw new Error(`Too few arguments for '${t}::${r}::${i}', expected ${e.parameters.length} but got ${s.length}`);
    let a = at.build(`${t}::${r}`, i, o, s);
    if ("multisigAddress" in n) {
        let u = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(n.multisigAddress);
        return new tn(new rn(u, new on(a)));
    }
    return new en(a);
}
async function go(n) {
    let { moduleAddress: e, moduleName: t, functionName: r } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$YFFDF22R$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["k"])(n.function), i = await Ao({
        key: "view-function",
        moduleAddress: e,
        moduleName: t,
        functionName: r,
        aptosConfig: n.aptosConfig,
        abi: n.abi,
        fetch: lo
    });
    return la({
        abi: i,
        ...n
    });
}
function la(n) {
    let e = n.abi, { moduleAddress: t, moduleName: r, functionName: i } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$YFFDF22R$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["k"])(n.function), o = Vt(n.typeArguments);
    if (o.length !== e.typeParameters.length) throw new Error(`Type argument count mismatch, expected ${e.typeParameters.length}, received ${o.length}`);
    let s = n?.functionArguments?.map((a, u)=>Ht(n.function, e, a, u, o)) ?? [];
    if (s.length !== e.parameters.length) throw new Error(`Too few arguments for '${t}::${r}::${i}', expected ${e.parameters.length} but got ${s.length}`);
    return at.build(`${t}::${r}`, i, o, s);
}
function ga(n) {
    return new st(new nn(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].fromHexInput(n.bytecode).toUint8Array(), Vt(n.typeArguments), n.functionArguments));
}
async function Ur(n) {
    let { aptosConfig: e, sender: t, payload: r, options: i, feePayerAddress: o } = n, s = async ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$4RXKALLC$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["g"][e.network] ? {
            chainId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$4RXKALLC$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["g"][e.network]
        } : {
            chainId: (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$BXRBOMHW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])({
                aptosConfig: e
            })).chain_id
        }, a = async ()=>i?.gasUnitPrice ? {
            gasEstimate: i.gasUnitPrice
        } : {
            gasEstimate: (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$P237G6YB$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])({
                aptosConfig: e
            })).gas_estimate
        }, u = async ()=>{
        let C = async ()=>i?.accountSequenceNumber !== void 0 ? i.accountSequenceNumber : (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$3IHKQH5O$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])({
                aptosConfig: e,
                accountAddress: t
            })).sequence_number;
        if (o && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(o).equals(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].ZERO)) try {
            return await C();
        } catch  {
            return 0;
        }
        else return C();
    }, [{ chainId: d }, { gasEstimate: l }, y] = await Promise.all([
        s(),
        a(),
        u()
    ]), { maxGasAmount: p, gasUnitPrice: g, expireTimestamp: f } = {
        maxGasAmount: i?.maxGasAmount ? BigInt(i.maxGasAmount) : BigInt(2e5),
        gasUnitPrice: i?.gasUnitPrice ?? BigInt(l),
        expireTimestamp: i?.expireTimestamp ?? BigInt(Math.floor(Date.now() / 1e3) + 20)
    };
    return new pe(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(t), BigInt(y), r, BigInt(p), BigInt(g), BigInt(f), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$OYH2T6V5$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"](d));
}
async function Dr(n) {
    let { aptosConfig: e, sender: t, payload: r, options: i, feePayerAddress: o } = n, s = await Ur({
        aptosConfig: e,
        sender: t,
        payload: r,
        options: i,
        feePayerAddress: o
    });
    if ("secondarySignerAddresses" in n) {
        let a = n.secondarySignerAddresses?.map((u)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(u)) ?? [];
        return new Gn(s, a, n.feePayerAddress ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(n.feePayerAddress) : void 0);
    }
    return new Gt(s, n.feePayerAddress ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(n.feePayerAddress) : void 0);
}
function mo(n) {
    let { signerPublicKey: e, transaction: t, secondarySignersPublicKeys: r, feePayerPublicKey: i } = n, o = Lt(e);
    if (t.feePayerAddress) {
        let a = new ut(t.rawTransaction, t.secondarySignerAddresses ?? [], t.feePayerAddress), u = [];
        t.secondarySignerAddresses && (r ? u = r.map((y)=>Lt(y)) : u = Array.from({
            length: t.secondarySignerAddresses.length
        }, ()=>Lt(void 0)));
        let d = Lt(i), l = new lt(o, t.secondarySignerAddresses ?? [], u, {
            address: t.feePayerAddress,
            authenticator: d
        });
        return new Ge(a.raw_txn, l).bcsToBytes();
    }
    if (t.secondarySignerAddresses) {
        let a = new ct(t.rawTransaction, t.secondarySignerAddresses), u = [];
        r ? u = r.map((l)=>Lt(l)) : u = Array.from({
            length: t.secondarySignerAddresses.length
        }, ()=>Lt(void 0));
        let d = new pt(o, t.secondarySignerAddresses, u);
        return new Ge(a.raw_txn, d).bcsToBytes();
    }
    let s;
    if (o instanceof me) s = new dt(o.public_key, o.signature);
    else if (o instanceof X || o instanceof xe) s = new Qe(o);
    else if (o instanceof Rt) s = new Qe(o);
    else throw new Error("Invalid public key");
    return new Ge(t.rawTransaction, s).bcsToBytes();
}
function Lt(n) {
    if (!n) return new Rt;
    let t = E.isInstance(n) || q.isInstance(n) || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$V7U5Y4AU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"].isInstance(n) ? new k(n) : n, r = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$YQIAWAPY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"](new Uint8Array(64));
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$YQIAWAPY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].isInstance(t)) return new me(t, r);
    if (k.isInstance(t)) return E.isInstance(t.publicKey) ? new X(t, new O(ue.getSimulationSignature())) : new X(t, new O(r));
    if (Se.isInstance(t)) return new xe(t, new Pe({
        signatures: t.publicKeys.map((i)=>E.isInstance(i.publicKey) || q.isInstance(i.publicKey) ? new O(ue.getSimulationSignature()) : new O(r)),
        bitmap: t.createBitmap({
            bits: Array(t.publicKeys.length).fill(0).map((i, o)=>o)
        })
    }));
    throw new Error("Unsupported PublicKey used for simulations");
}
function Rr(n) {
    let { transaction: e, feePayerAuthenticator: t, additionalSignersAuthenticators: r } = n, i = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$TUZHLTDU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(V, n.senderAuthenticator), o;
    if (e.feePayerAddress) {
        if (!t) throw new Error("Must provide a feePayerAuthenticator argument to generate a signed fee payer transaction");
        o = new lt(i, e.secondarySignerAddresses ?? [], r ?? [], {
            address: e.feePayerAddress,
            authenticator: t
        });
    } else if (e.secondarySignerAddresses) {
        if (!r) throw new Error("Must provide a additionalSignersAuthenticators argument to generate a signed multi agent transaction");
        o = new pt(i, e.secondarySignerAddresses, r);
    } else i instanceof me ? o = new dt(i.public_key, i.signature) : i instanceof ke ? o = new Ot(i.public_key, i.signature) : o = new Qe(i);
    return new Ge(e.rawTransaction, o).bcsToBytes();
}
function yo(n) {
    let e = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$sha3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sha3_256"].create();
    for (let t of n)e.update(t);
    return e.digest();
}
var ma = yo([
    "APTOS::Transaction"
]);
function Vm(n) {
    let e = Rr(n);
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"](yo([
        ma,
        new Uint8Array([
            0
        ]),
        e
    ])).toString();
}
async function Ao({ key: n, moduleAddress: e, moduleName: t, functionName: r, aptosConfig: i, abi: o, fetch: s }) {
    return o !== void 0 ? o : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$YOZBVVKL$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(async ()=>s(e, t, r, i), `${n}-${i.network}-${e}-${t}-${r}`, 1e3 * 60 * 5)();
}
;
var jn = class n {
    constructor(e){
        this.config = e, this.builder = void 0;
    }
    async init() {
        if (!n.transactionComposer) {
            let e = await __turbopack_context__.r("[project]/node_modules/@aptos-labs/script-composer-pack/dist/esm/main.mjs [app-client] (ecmascript, async loader)")(__turbopack_context__.i), { TransactionComposer: t, initSync: r } = e;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aptos$2d$labs$2f$script$2d$composer$2d$pack$2f$dist$2f$esm$2f$main$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScriptComposerWasm"].isInitialized || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aptos$2d$labs$2f$script$2d$composer$2d$pack$2f$dist$2f$esm$2f$main$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScriptComposerWasm"].init(), r({
                module: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aptos$2d$labs$2f$script$2d$composer$2d$pack$2f$dist$2f$esm$2f$main$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScriptComposerWasm"].wasm
            }), n.transactionComposer = t;
        }
        this.builder = n.transactionComposer.single_signer();
    }
    async addBatchedCalls(e) {
        let { moduleAddress: t, moduleName: r, functionName: i } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$YFFDF22R$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["k"])(e.function), o = this.config.getRequestUrl("Fullnode");
        if (await this.builder.load_module(o, `${t}::${r}`), e.typeArguments !== void 0) for (let l of e.typeArguments)await this.builder.load_type_tag(o, l.toString());
        let s = Vt(e.typeArguments), a = await kr(t, r, this.config);
        if (!a) throw new Error(`Could not find module ABI for '${t}::${r}'`);
        let u = a?.exposed_functions.find((l)=>l.name === i);
        if (!u) throw new Error(`Could not find function ABI for '${t}::${r}::${i}'`);
        if (s.length !== u.generic_type_params.length) throw new Error(`Type argument count mismatch, expected ${u?.generic_type_params.length}, received ${s.length}`);
        let d = e.functionArguments.map((l, y)=>l instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aptos$2d$labs$2f$script$2d$composer$2d$pack$2f$dist$2f$esm$2f$main$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__CallArgument__as__a$3e$__["a"] ? l : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aptos$2d$labs$2f$script$2d$composer$2d$pack$2f$dist$2f$esm$2f$main$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__CallArgument__as__a$3e$__["a"].newBytes(Ht(i, a, l, y, s, {
                allowUnknownStructs: !0
            }).bcsToBytes()));
        return this.builder.add_batched_call(`${t}::${r}`, i, s.map((l)=>l.toString()), d);
    }
    build() {
        return this.builder.generate_batched_calls(!0);
    }
};
async function A(n) {
    let e = await Aa(n);
    return fa(n, e);
}
async function Aa(n) {
    let { aptosConfig: e, data: t } = n, r, i;
    return "bytecode" in t ? i = await Wn(t) : "multisigAddress" in t ? (r = {
        aptosConfig: e,
        multisigAddress: t.multisigAddress,
        function: t.function,
        functionArguments: t.functionArguments,
        typeArguments: t.typeArguments,
        abi: t.abi
    }, i = await Wn(r)) : (r = {
        aptosConfig: e,
        function: t.function,
        functionArguments: t.functionArguments,
        typeArguments: t.typeArguments,
        abi: t.abi
    }, i = await Wn(r)), i;
}
async function fa(n, e) {
    let { aptosConfig: t, sender: r, options: i } = n, o;
    if (ha(n) && (o = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].ZERO.toString()), ba(n)) {
        let { secondarySignerAddresses: s } = n;
        return Dr({
            aptosConfig: t,
            sender: r,
            payload: e,
            options: i,
            secondarySignerAddresses: s,
            feePayerAddress: o
        });
    }
    return Dr({
        aptosConfig: t,
        sender: r,
        payload: e,
        options: i,
        feePayerAddress: o
    });
}
function ha(n) {
    return n.withFeePayer === !0;
}
function ba(n) {
    return "secondarySignerAddresses" in n;
}
function fo(n) {
    let { transaction: e } = n;
    return ye(e);
}
function Qn(n) {
    let { signer: e, transaction: t } = n;
    return e.signTransactionWithAuthenticator(t);
}
function Jn(n) {
    let { signer: e, transaction: t } = n;
    if (!t.feePayerAddress) throw new Error(`Transaction ${t} is not a Fee Payer transaction`);
    return t.feePayerAddress = e.accountAddress, Qn({
        signer: e,
        transaction: t
    });
}
async function Gr(n) {
    let { aptosConfig: e, transaction: t, signerPublicKey: r, secondarySignersPublicKeys: i, feePayerPublicKey: o, options: s } = n, a = mo({
        transaction: t,
        signerPublicKey: r,
        secondarySignersPublicKeys: i,
        feePayerPublicKey: o,
        options: s
    }), { data: u } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GQ557FEA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])({
        aptosConfig: e,
        body: a,
        path: "transactions/simulate",
        params: {
            estimate_gas_unit_price: n.options?.estimateGasUnitPrice ?? !1,
            estimate_max_gas_amount: n.options?.estimateMaxGasAmount ?? !1,
            estimate_prioritized_gas_unit_price: n.options?.estimatePrioritizedGasUnitPrice ?? !1
        },
        originMethod: "simulateTransaction",
        contentType: "application/x.aptos.signed_transaction+bcs"
    });
    return u;
}
async function un(n) {
    let { aptosConfig: e } = n, t = Rr({
        ...n
    });
    try {
        let { data: r } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GQ557FEA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])({
            aptosConfig: e,
            body: t,
            path: "transactions",
            originMethod: "submitTransaction",
            contentType: "application/x.aptos.signed_transaction+bcs"
        });
        return r;
    } catch (r) {
        let i = Ge.deserialize(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$JGFKIUG5$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"](t));
        throw i.authenticator.isSingleSender() && i.authenticator.sender.isSingleKey() && (i.authenticator.sender.public_key.publicKey instanceof E || i.authenticator.sender.public_key.publicKey instanceof q) && await ce.fetchJWK({
            aptosConfig: e,
            publicKey: i.authenticator.sender.public_key.publicKey,
            kid: i.authenticator.sender.signature.signature.getJwkKid()
        }), r;
    }
}
async function Ze(n) {
    let { aptosConfig: e, signer: t, feePayer: r, transaction: i } = n;
    Nn(t) && await t.checkKeylessAccountValidity(e), Nn(r) && await r.checkKeylessAccountValidity(e);
    let o = n.feePayerAuthenticator || r && Jn({
        signer: r,
        transaction: i
    }), s = Qn({
        signer: t,
        transaction: i
    });
    return un({
        aptosConfig: e,
        transaction: i,
        senderAuthenticator: s,
        feePayerAuthenticator: o
    });
}
async function ho(n) {
    let { aptosConfig: e, senderAuthenticator: t, feePayer: r, transaction: i } = n;
    Nn(r) && await r.checkKeylessAccountValidity(e);
    let o = Jn({
        signer: r,
        transaction: i
    });
    return un({
        aptosConfig: e,
        transaction: i,
        senderAuthenticator: t,
        feePayerAuthenticator: o
    });
}
var wa = {
    typeParameters: [],
    parameters: [
        K.u8(),
        new K(K.u8())
    ]
};
async function bo(n) {
    let { aptosConfig: e, account: t, metadataBytes: r, moduleBytecode: i, options: o } = n, s = i.map((a)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$SOJ3OG6X$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"].U8(a));
    return A({
        aptosConfig: e,
        sender: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(t),
        data: {
            function: "0x1::code::publish_package_txn",
            functionArguments: [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$SOJ3OG6X$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"].U8(r),
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$SOJ3OG6X$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"](s)
            ],
            abi: wa
        },
        options: o
    });
}
async function At(n) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$3IHKQH5O$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(n);
}
async function To(n) {
    let { aptosConfig: e, accountAddress: t, options: r } = n;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GJ7STZEW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["e"])({
        aptosConfig: e,
        originMethod: "getModules",
        path: `accounts/${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(t).toString()}/modules`,
        params: {
            ledger_version: r?.ledgerVersion,
            limit: r?.limit ?? 1e3
        }
    });
}
async function So(n) {
    let { aptosConfig: e, accountAddress: t, options: r } = n, { response: i, cursor: o } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GJ7STZEW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["f"])({
        aptosConfig: e,
        originMethod: "getModulesPage",
        path: `accounts/${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(t).toString()}/modules`,
        params: {
            ledger_version: r?.ledgerVersion,
            cursor: r?.cursor,
            limit: r?.limit ?? 100
        }
    });
    return {
        modules: i.data,
        cursor: o
    };
}
async function qn(n) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$3IHKQH5O$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])(n);
}
async function Po(n) {
    let { aptosConfig: e, accountAddress: t, options: r } = n;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GJ7STZEW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"])({
        aptosConfig: e,
        originMethod: "getTransactions",
        path: `accounts/${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(t).toString()}/transactions`,
        params: {
            start: r?.offset,
            limit: r?.limit
        }
    });
}
async function xo(n) {
    let { aptosConfig: e, accountAddress: t, options: r } = n;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GJ7STZEW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["e"])({
        aptosConfig: e,
        originMethod: "getResources",
        path: `accounts/${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(t).toString()}/resources`,
        params: {
            ledger_version: r?.ledgerVersion,
            limit: r?.limit ?? 999
        }
    });
}
async function Ko(n) {
    let { aptosConfig: e, accountAddress: t, options: r } = n, { response: i, cursor: o } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GJ7STZEW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["f"])({
        aptosConfig: e,
        originMethod: "getResourcesPage",
        path: `accounts/${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(t).toString()}/resources`,
        params: {
            ledger_version: r?.ledgerVersion,
            cursor: r?.cursor,
            limit: r?.limit ?? 100
        }
    });
    return {
        resources: i.data,
        cursor: o
    };
}
async function zr(n) {
    let { aptosConfig: e, accountAddress: t, resourceType: r, options: i } = n, { data: o } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GJ7STZEW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])({
        aptosConfig: e,
        originMethod: "getResource",
        path: `accounts/${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(t).toString()}/resource/${r}`,
        params: {
            ledger_version: i?.ledgerVersion
        }
    });
    return o.data;
}
async function $t(n) {
    let { aptosConfig: e, authenticationKey: t, options: r } = n, i = await zr({
        aptosConfig: e,
        accountAddress: "0x1",
        resourceType: "0x1::account::OriginatingAddress",
        options: r
    }), { address_map: { handle: o } } = i, s = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(t);
    try {
        let a = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GLFZJNF3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])({
            aptosConfig: e,
            handle: o,
            data: {
                key: s.toString(),
                key_type: "address",
                value_type: "address"
            },
            options: r
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(a);
    } catch (a) {
        if (a instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$6Y6ZO7TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["e"] && a.data.error_code === "table_item_not_found") return s;
        throw a;
    }
}
async function Co(n) {
    let { aptosConfig: e, accountAddress: t } = n, i = {
        owner_address: {
            _eq: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(t).toStringLong()
        },
        amount: {
            _gt: 0
        }
    }, s = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$BXRBOMHW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])({
        aptosConfig: e,
        query: {
            query: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$VHNX2NUR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["j"],
            variables: {
                where_condition: i
            }
        },
        originMethod: "getAccountTokensCount"
    });
    return s.current_token_ownerships_v2_aggregate.aggregate ? s.current_token_ownerships_v2_aggregate.aggregate.count : 0;
}
async function Eo(n) {
    let { aptosConfig: e, accountAddress: t, options: r } = n, o = {
        owner_address: {
            _eq: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(t).toStringLong()
        },
        amount: {
            _gt: 0
        }
    };
    r?.tokenStandard && (o.token_standard = {
        _eq: r?.tokenStandard
    });
    let s = {
        query: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$VHNX2NUR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["g"],
        variables: {
            where_condition: o,
            offset: r?.offset,
            limit: r?.limit,
            order_by: r?.orderBy
        }
    };
    return (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$BXRBOMHW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])({
        aptosConfig: e,
        query: s,
        originMethod: "getAccountOwnedTokens"
    })).current_token_ownerships_v2;
}
async function Io(n) {
    let { aptosConfig: e, accountAddress: t, collectionAddress: r, options: i } = n, o = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(t).toStringLong(), s = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(r).toStringLong(), a = {
        owner_address: {
            _eq: o
        },
        current_token_data: {
            collection_id: {
                _eq: s
            }
        },
        amount: {
            _gt: 0
        }
    };
    i?.tokenStandard && (a.token_standard = {
        _eq: i?.tokenStandard
    });
    let u = {
        query: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$VHNX2NUR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["i"],
        variables: {
            where_condition: a,
            offset: i?.offset,
            limit: i?.limit,
            order_by: i?.orderBy
        }
    };
    return (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$BXRBOMHW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])({
        aptosConfig: e,
        query: u,
        originMethod: "getAccountOwnedTokensFromCollectionAddress"
    })).current_token_ownerships_v2;
}
async function vo(n) {
    let { aptosConfig: e, accountAddress: t, options: r } = n, o = {
        owner_address: {
            _eq: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(t).toStringLong()
        }
    };
    r?.tokenStandard && (o.current_collection = {
        token_standard: {
            _eq: r?.tokenStandard
        }
    });
    let s = {
        query: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$VHNX2NUR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["f"],
        variables: {
            where_condition: o,
            offset: r?.offset,
            limit: r?.limit,
            order_by: r?.orderBy
        }
    };
    return (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$BXRBOMHW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])({
        aptosConfig: e,
        query: s,
        originMethod: "getAccountCollectionsWithOwnedTokens"
    })).current_collection_ownership_v2_view;
}
async function _o(n) {
    let { aptosConfig: e, accountAddress: t } = n, r = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(t).toStringLong(), o = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$BXRBOMHW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])({
        aptosConfig: e,
        query: {
            query: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$VHNX2NUR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["k"],
            variables: {
                address: r
            }
        },
        originMethod: "getAccountTransactionsCount"
    });
    return o.account_transactions_aggregate.aggregate ? o.account_transactions_aggregate.aggregate.count : 0;
}
async function Wy(n) {
    let { aptosConfig: e, accountAddress: t, coinType: r, faMetadataAddress: i } = n, o = r, s;
    if (r !== void 0 && i !== void 0) s = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(i).toStringLong();
    else if (r !== void 0 && i === void 0) r === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RJ7F4JDV$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["e"] ? s = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].A.toStringLong() : s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$BUUV6B4P$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].A, r).toStringLong();
    else if (r === void 0 && i !== void 0) {
        let l = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(i);
        s = l.toStringLong(), l === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].A && (o = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RJ7F4JDV$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["e"]);
    } else throw new Error("Either coinType, fungibleAssetAddress, or both must be provided");
    let a = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(t).toStringLong(), u = {
        asset_type: {
            _eq: s
        }
    };
    o !== void 0 && (u = {
        asset_type: {
            _in: [
                o,
                s
            ]
        }
    });
    let d = await Nr({
        aptosConfig: e,
        accountAddress: a,
        options: {
            where: u
        }
    });
    return d[0] ? d[0].amount : 0;
}
async function Nr(n) {
    let { aptosConfig: e, accountAddress: t, options: r } = n, i = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(t).toStringLong(), o = {
        ...r?.where,
        owner_address: {
            _eq: i
        }
    }, s = {
        query: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$VHNX2NUR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["e"],
        variables: {
            where_condition: o,
            offset: r?.offset,
            limit: r?.limit,
            order_by: r?.orderBy
        }
    };
    return (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$BXRBOMHW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])({
        aptosConfig: e,
        query: s,
        originMethod: "getAccountCoinsData"
    })).current_fungible_asset_balances;
}
async function ko(n) {
    let { aptosConfig: e, accountAddress: t } = n, r = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(t).toStringLong(), o = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$BXRBOMHW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])({
        aptosConfig: e,
        query: {
            query: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$VHNX2NUR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"],
            variables: {
                address: r
            }
        },
        originMethod: "getAccountCoinsCount"
    });
    if (!o.current_fungible_asset_balances_aggregate.aggregate) throw Error("Failed to get the count of account coins");
    return o.current_fungible_asset_balances_aggregate.aggregate.count;
}
async function Fo(n) {
    let { aptosConfig: e, accountAddress: t, options: r } = n, o = {
        owner_address: {
            _eq: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(t).toStringLong()
        }
    }, s = {
        query: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$VHNX2NUR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["u"],
        variables: {
            where_condition: o,
            offset: r?.offset,
            limit: r?.limit,
            order_by: r?.orderBy
        }
    };
    return (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$BXRBOMHW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])({
        aptosConfig: e,
        query: s,
        originMethod: "getAccountOwnedObjects"
    })).current_objects;
}
async function Uo(n) {
    let { aptosConfig: e, privateKey: t } = n, r = new k(t.publicKey());
    if (t instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$V7U5Y4AU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"]) {
        let o = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$6PKBXYG3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"].fromPublicKey({
            publicKey: r
        }).derivedAddress();
        return Be.fromPrivateKey({
            privateKey: t,
            address: o
        });
    }
    if (t instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$YQIAWAPY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"]) {
        let i = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$6PKBXYG3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"].fromPublicKey({
            publicKey: r.publicKey
        });
        if (await wo({
            authKey: i,
            aptosConfig: e
        })) {
            let u = i.derivedAddress();
            return Be.fromPrivateKey({
                privateKey: t,
                address: u,
                legacy: !0
            });
        }
        let s = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$6PKBXYG3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"].fromPublicKey({
            publicKey: r
        });
        if (await wo({
            authKey: s,
            aptosConfig: e
        })) {
            let u = s.derivedAddress();
            return Be.fromPrivateKey({
                privateKey: t,
                address: u,
                legacy: !1
            });
        }
    }
    throw new Error(`Can't derive account from private key ${t}`);
}
async function wo(n) {
    let { aptosConfig: e, authKey: t } = n, r = await $t({
        aptosConfig: e,
        authenticationKey: t.derivedAddress()
    });
    try {
        return await At({
            aptosConfig: e,
            accountAddress: r
        }), !0;
    } catch (i) {
        if (i.status === 404) return !1;
        throw new Error(`Error while looking for an account info ${r.toString()}`);
    }
}
var Ta = {
    typeParameters: [],
    parameters: [
        new oe,
        K.u8(),
        new oe,
        K.u8(),
        K.u8(),
        K.u8()
    ]
};
async function Do(n) {
    let { aptosConfig: e, fromAccount: t, dangerouslySkipVerification: r } = n;
    if ("toNewPrivateKey" in n) return Br({
        aptosConfig: e,
        fromAccount: t,
        toNewPrivateKey: n.toNewPrivateKey
    });
    let i;
    if ("toAccount" in n) {
        if (n.toAccount instanceof ee) return Br({
            aptosConfig: e,
            fromAccount: t,
            toNewPrivateKey: n.toAccount.privateKey
        });
        if (n.toAccount instanceof Mn) return Br({
            aptosConfig: e,
            fromAccount: t,
            toAccount: n.toAccount
        });
        i = n.toAccount.publicKey.authKey();
    } else if ("toAuthKey" in n) i = n.toAuthKey;
    else throw new Error("Invalid arguments");
    let o = await Pa({
        aptosConfig: e,
        fromAccount: t,
        toAuthKey: i
    });
    if (r === !0) return o;
    let s = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$P237G6YB$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["g"])({
        aptosConfig: e,
        transactionHash: o.hash
    });
    if (!s.success) throw new Error(`Failed to rotate authentication key - ${s}`);
    let a = await A({
        aptosConfig: e,
        sender: t.accountAddress,
        data: {
            function: "0x1::account::set_originating_address",
            functionArguments: []
        }
    });
    return Ze({
        aptosConfig: e,
        signer: n.toAccount,
        transaction: a
    });
}
async function Br(n) {
    let { aptosConfig: e, fromAccount: t } = n, r = await At({
        aptosConfig: e,
        accountAddress: t.accountAddress
    }), i;
    "toNewPrivateKey" in n ? i = Be.fromPrivateKey({
        privateKey: n.toNewPrivateKey,
        legacy: !0
    }) : i = n.toAccount;
    let s = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$XF6BISPI$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"]({
        sequenceNumber: BigInt(r.sequence_number),
        originator: t.accountAddress,
        currentAuthKey: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(r.authentication_key),
        newPublicKey: i.publicKey
    }).bcsToBytes(), a = t.sign(s), u = i.sign(s), d = await A({
        aptosConfig: e,
        sender: t.accountAddress,
        data: {
            function: "0x1::account::rotate_authentication_key",
            functionArguments: [
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$C6JRJNK3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"](t.signingScheme),
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$SOJ3OG6X$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"].U8(t.publicKey.toUint8Array()),
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$C6JRJNK3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"](i.signingScheme),
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$SOJ3OG6X$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"].U8(i.publicKey.toUint8Array()),
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$SOJ3OG6X$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"].U8(a.toUint8Array()),
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$SOJ3OG6X$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"].U8(u.toUint8Array())
            ],
            abi: Ta
        }
    });
    return Ze({
        aptosConfig: e,
        signer: t,
        transaction: d
    });
}
var Sa = {
    typeParameters: [],
    parameters: [
        K.u8()
    ]
};
async function Pa(n) {
    let { aptosConfig: e, fromAccount: t, toAuthKey: r } = n, i = r, o = await A({
        aptosConfig: e,
        sender: t.accountAddress,
        data: {
            function: "0x1::account::rotate_authentication_key_call",
            functionArguments: [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$SOJ3OG6X$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"].U8(i.toUint8Array())
            ],
            abi: Sa
        }
    });
    return Ze({
        aptosConfig: e,
        signer: t,
        transaction: o
    });
}
async function te(n) {
    let { aptosConfig: e, payload: t, options: r } = n, i = await go({
        ...t,
        aptosConfig: e
    }), o = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$NJN3EAOM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"];
    i.serialize(o);
    let s = o.toUint8Array(), { data: a } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GQ557FEA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])({
        aptosConfig: e,
        path: "view",
        originMethod: "view",
        contentType: "application/x.aptos.view_function+bcs",
        params: {
            ledger_version: r?.ledgerVersion
        },
        body: s
    });
    return a;
}
async function Ro(n) {
    let { aptosConfig: e, payload: t, options: r } = n, { data: i } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GQ557FEA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])({
        aptosConfig: e,
        originMethod: "viewJson",
        path: "view",
        params: {
            ledger_version: r?.ledgerVersion
        },
        body: {
            function: t.function,
            type_arguments: t.typeArguments ?? [],
            arguments: t.functionArguments ?? []
        }
    });
    return i;
}
async function Oo(n) {
    let { aptosConfig: e, sender: t, authenticationFunction: r, options: i } = n, { moduleAddress: o, moduleName: s, functionName: a } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$YFFDF22R$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["k"])(r);
    return A({
        aptosConfig: e,
        sender: t,
        data: {
            function: "0x1::account_abstraction::add_authentication_function",
            typeArguments: [],
            functionArguments: [
                o,
                s,
                a
            ],
            abi: {
                typeParameters: [],
                parameters: [
                    new F,
                    new m(x()),
                    new m(x())
                ]
            }
        },
        options: i
    });
}
async function Go(n) {
    let { aptosConfig: e, sender: t, authenticationFunction: r, options: i } = n, { moduleAddress: o, moduleName: s, functionName: a } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$YFFDF22R$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["k"])(r);
    return A({
        aptosConfig: e,
        sender: t,
        data: {
            function: "0x1::account_abstraction::remove_authentication_function",
            typeArguments: [],
            functionArguments: [
                o,
                s,
                a
            ],
            abi: {
                typeParameters: [],
                parameters: [
                    new F,
                    new m(x()),
                    new m(x())
                ]
            }
        },
        options: i
    });
}
async function Bo(n) {
    let { aptosConfig: e, sender: t, options: r } = n;
    return A({
        aptosConfig: e,
        sender: t,
        data: {
            function: "0x1::account_abstraction::remove_authenticator",
            typeArguments: [],
            functionArguments: [],
            abi: {
                typeParameters: [],
                parameters: []
            }
        },
        options: r
    });
}
var ft = class {
    constructor(e){
        this.config = e;
        this.isAccountAbstractionEnabled = async (e)=>{
            let t = await this.getAuthenticationFunction(e), { moduleAddress: r, moduleName: i, functionName: o } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$YFFDF22R$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["k"])(e.authenticationFunction);
            return t?.some((s)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].fromString(r).equals(s.moduleAddress) && i === s.moduleName && o === s.functionName) ?? !1;
        };
        this.enableAccountAbstractionTransaction = this.addAuthenticationFunctionTransaction;
        this.disableAccountAbstractionTransaction = async (e)=>{
            let { accountAddress: t, authenticationFunction: r, options: i } = e;
            return r ? this.removeAuthenticationFunctionTransaction({
                accountAddress: t,
                authenticationFunction: r,
                options: i
            }) : this.removeDispatchableAuthenticatorTransaction({
                accountAddress: t,
                options: i
            });
        };
    }
    async addAuthenticationFunctionTransaction(e) {
        let { accountAddress: t, authenticationFunction: r, options: i } = e;
        return Oo({
            aptosConfig: this.config,
            authenticationFunction: r,
            sender: t,
            options: i
        });
    }
    async removeAuthenticationFunctionTransaction(e) {
        let { accountAddress: t, authenticationFunction: r, options: i } = e;
        return Go({
            aptosConfig: this.config,
            sender: t,
            authenticationFunction: r,
            options: i
        });
    }
    async removeDispatchableAuthenticatorTransaction(e) {
        let { accountAddress: t, options: r } = e;
        return Bo({
            aptosConfig: this.config,
            sender: t,
            options: r
        });
    }
    async getAuthenticationFunction(e) {
        let { accountAddress: t } = e, [{ vec: r }] = await te({
            aptosConfig: this.config,
            payload: {
                function: "0x1::account_abstraction::dispatchable_authenticator",
                functionArguments: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(t)
                ],
                abi: {
                    typeParameters: [],
                    parameters: [
                        new F
                    ],
                    returnTypes: []
                }
            }
        });
        if (r.length !== 0) return r[0].map((i)=>({
                moduleAddress: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].fromString(i.module_address),
                moduleName: i.module_name,
                functionName: i.function_name
            }));
    }
};
var dn = class {
    constructor(e){
        this.config = e;
        this.abstraction = new ft(e);
    }
    async getAccountInfo(e) {
        return At({
            aptosConfig: this.config,
            ...e
        });
    }
    async getAccountModules(e) {
        return To({
            aptosConfig: this.config,
            ...e
        });
    }
    async getAccountModulesPage(e) {
        return So({
            aptosConfig: this.config,
            ...e
        });
    }
    async getAccountModule(e) {
        return qn({
            aptosConfig: this.config,
            ...e
        });
    }
    async getAccountTransactions(e) {
        return Po({
            aptosConfig: this.config,
            ...e
        });
    }
    async getAccountResources(e) {
        return xo({
            aptosConfig: this.config,
            ...e
        });
    }
    async getAccountResourcesPage(e) {
        return Ko({
            aptosConfig: this.config,
            ...e
        });
    }
    async getAccountResource(e) {
        return zr({
            aptosConfig: this.config,
            ...e
        });
    }
    async lookupOriginalAccountAddress(e) {
        return $t({
            aptosConfig: this.config,
            ...e
        });
    }
    async getAccountTokensCount(e) {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$KAYKTT4S$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])({
            config: this.config,
            minimumLedgerVersion: e.minimumLedgerVersion,
            processorType: "account_transactions_processor"
        }), Co({
            aptosConfig: this.config,
            ...e
        });
    }
    async getAccountOwnedTokens(e) {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$KAYKTT4S$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])({
            config: this.config,
            minimumLedgerVersion: e.minimumLedgerVersion,
            processorType: "token_v2_processor"
        }), Eo({
            aptosConfig: this.config,
            ...e
        });
    }
    async getAccountOwnedTokensFromCollectionAddress(e) {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$KAYKTT4S$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])({
            config: this.config,
            minimumLedgerVersion: e.minimumLedgerVersion,
            processorType: "token_v2_processor"
        }), Io({
            aptosConfig: this.config,
            ...e
        });
    }
    async getAccountCollectionsWithOwnedTokens(e) {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$KAYKTT4S$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])({
            config: this.config,
            minimumLedgerVersion: e.minimumLedgerVersion,
            processorType: "token_v2_processor"
        }), vo({
            aptosConfig: this.config,
            ...e
        });
    }
    async getAccountTransactionsCount(e) {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$KAYKTT4S$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])({
            config: this.config,
            minimumLedgerVersion: e.minimumLedgerVersion,
            processorType: "account_transactions_processor"
        }), _o({
            aptosConfig: this.config,
            ...e
        });
    }
    async getAccountCoinsData(e) {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$KAYKTT4S$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])({
            config: this.config,
            minimumLedgerVersion: e.minimumLedgerVersion,
            processorType: "fungible_asset_processor"
        }), Nr({
            aptosConfig: this.config,
            ...e
        });
    }
    async getAccountCoinsCount(e) {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$KAYKTT4S$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])({
            config: this.config,
            minimumLedgerVersion: e.minimumLedgerVersion,
            processorType: "fungible_asset_processor"
        }), ko({
            aptosConfig: this.config,
            ...e
        });
    }
    async getAccountAPTAmount(e) {
        return this.getAccountCoinAmount({
            coinType: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RJ7F4JDV$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["e"],
            faMetadataAddress: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RJ7F4JDV$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["f"],
            ...e
        });
    }
    async getAccountCoinAmount(e) {
        let { accountAddress: t, coinType: r, faMetadataAddress: i, minimumLedgerVersion: o } = e;
        o && console.warn(`minimumLedgerVersion is not used anymore, here for backward 
        compatibility see https://github.com/aptos-labs/aptos-ts-sdk/pull/519, 
        will be removed in the near future`);
        let s = r;
        r === void 0 && i !== void 0 && (s = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$YOZBVVKL$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(async ()=>{
            try {
                let d = (await te({
                    aptosConfig: this.config,
                    payload: {
                        function: "0x1::coin::paired_coin",
                        functionArguments: [
                            i
                        ]
                    }
                })).at(0);
                if (d.vec.length > 0 && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$YFFDF22R$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["j"])(d.vec[0])) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$YFFDF22R$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["i"])(d.vec[0]);
            } catch  {}
        }, `coin-mapping-${i.toString()}`, 1e3 * 60 * 5)());
        let a;
        if (r !== void 0 && i !== void 0) a = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(i).toStringLong();
        else if (r !== void 0 && i === void 0) r === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RJ7F4JDV$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["e"] ? a = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].A.toStringLong() : a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$BUUV6B4P$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].A, r).toStringLong();
        else if (r === void 0 && i !== void 0) {
            let d = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(i);
            a = d.toStringLong(), d === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].A && (s = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RJ7F4JDV$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["e"]);
        } else throw new Error("Either coinType, faMetadataAddress, or both must be provided");
        if (s !== void 0) {
            let [d] = await te({
                aptosConfig: this.config,
                payload: {
                    function: "0x1::coin::balance",
                    typeArguments: [
                        s
                    ],
                    functionArguments: [
                        t
                    ]
                }
            });
            return parseInt(d, 10);
        }
        let [u] = await te({
            aptosConfig: this.config,
            payload: {
                function: "0x1::primary_fungible_store::balance",
                typeArguments: [
                    "0x1::object::ObjectCore"
                ],
                functionArguments: [
                    t,
                    a
                ]
            }
        });
        return parseInt(u, 10);
    }
    async getAccountOwnedObjects(e) {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$KAYKTT4S$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])({
            config: this.config,
            minimumLedgerVersion: e.minimumLedgerVersion,
            processorType: "default_processor"
        }), Fo({
            aptosConfig: this.config,
            ...e
        });
    }
    async deriveAccountFromPrivateKey(e) {
        return Uo({
            aptosConfig: this.config,
            ...e
        });
    }
};
var xa = {
    typeParameters: [
        {
            constraints: []
        }
    ],
    parameters: [
        new F,
        new H
    ]
};
async function zo(n) {
    let { aptosConfig: e, sender: t, recipient: r, amount: i, coinType: o, options: s } = n;
    return A({
        aptosConfig: e,
        sender: t,
        data: {
            function: "0x1::aptos_account::transfer_coins",
            typeArguments: [
                o ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RJ7F4JDV$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["e"]
            ],
            functionArguments: [
                r,
                i
            ],
            abi: xa
        },
        options: s
    });
}
var pn = class {
    constructor(e){
        this.config = e;
    }
    async transferCoinTransaction(e) {
        return zo({
            aptosConfig: this.config,
            ...e
        });
    }
};
var Ye = {
    BOOLEAN: "bool",
    U8: "u8",
    U16: "u16",
    U32: "u32",
    U64: "u64",
    U128: "u128",
    U256: "u256",
    ADDRESS: "address",
    STRING: "0x1::string::String",
    ARRAY: "vector<u8>"
}, ge = "0x4::token::Token";
async function No(n) {
    let { aptosConfig: e, digitalAssetAddress: t } = n, r = {
        token_data_id: {
            _eq: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(t).toStringLong()
        }
    };
    return (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$BXRBOMHW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])({
        aptosConfig: e,
        query: {
            query: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$VHNX2NUR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["A"],
            variables: {
                where_condition: r
            }
        },
        originMethod: "getDigitalAssetData"
    })).current_token_datas_v2[0];
}
async function Mo(n) {
    let { aptosConfig: e, digitalAssetAddress: t } = n, r = {
        token_data_id: {
            _eq: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(t).toStringLong()
        },
        amount: {
            _gt: 0
        }
    };
    return (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$BXRBOMHW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])({
        aptosConfig: e,
        query: {
            query: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$VHNX2NUR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"],
            variables: {
                where_condition: r
            }
        },
        originMethod: "getCurrentDigitalAssetOwnership"
    })).current_token_ownerships_v2[0];
}
async function Vo(n) {
    let { aptosConfig: e, ownerAddress: t, options: r } = n, i = {
        owner_address: {
            _eq: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(t).toStringLong()
        },
        amount: {
            _gt: 0
        }
    }, o = {
        query: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$VHNX2NUR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"],
        variables: {
            where_condition: i,
            offset: r?.offset,
            limit: r?.limit,
            order_by: r?.orderBy
        }
    };
    return (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$BXRBOMHW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])({
        aptosConfig: e,
        query: o,
        originMethod: "getOwnedDigitalAssets"
    })).current_token_ownerships_v2;
}
async function Ho(n) {
    let { aptosConfig: e, digitalAssetAddress: t, options: r } = n, i = {
        token_data_id: {
            _eq: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(t).toStringLong()
        }
    }, o = {
        query: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$VHNX2NUR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["y"],
        variables: {
            where_condition: i,
            offset: r?.offset,
            limit: r?.limit,
            order_by: r?.orderBy
        }
    };
    return (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$BXRBOMHW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])({
        aptosConfig: e,
        query: o,
        originMethod: "getDigitalAssetActivity"
    })).token_activities_v2;
}
var Ka = {
    typeParameters: [],
    parameters: [
        new m(x()),
        new H,
        new m(x()),
        new m(x()),
        new G,
        new G,
        new G,
        new G,
        new G,
        new G,
        new G,
        new G,
        new G,
        new H,
        new H
    ]
};
async function Lo(n) {
    let { aptosConfig: e, options: t, creator: r } = n;
    return A({
        aptosConfig: e,
        sender: r.accountAddress,
        data: {
            function: "0x4::aptos_token::create_collection",
            functionArguments: [
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$SOJ3OG6X$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"](n.description),
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$C6JRJNK3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["e"](n.maxSupply ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$56CNRT2K$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"]),
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$SOJ3OG6X$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"](n.name),
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$SOJ3OG6X$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"](n.uri),
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$C6JRJNK3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"](n.mutableDescription ?? !0),
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$C6JRJNK3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"](n.mutableRoyalty ?? !0),
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$C6JRJNK3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"](n.mutableURI ?? !0),
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$C6JRJNK3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"](n.mutableTokenDescription ?? !0),
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$C6JRJNK3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"](n.mutableTokenName ?? !0),
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$C6JRJNK3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"](n.mutableTokenProperties ?? !0),
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$C6JRJNK3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"](n.mutableTokenURI ?? !0),
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$C6JRJNK3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"](n.tokensBurnableByCreator ?? !0),
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$C6JRJNK3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"](n.tokensFreezableByCreator ?? !0),
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$C6JRJNK3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["e"](n.royaltyNumerator ?? 0),
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$C6JRJNK3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["e"](n.royaltyDenominator ?? 1)
            ],
            abi: Ka
        },
        options: t
    });
}
async function Wt(n) {
    let { aptosConfig: e, options: t } = n, r = t?.where;
    t?.tokenStandard && (r.token_standard = {
        _eq: t?.tokenStandard ?? "v2"
    });
    let i = {
        query: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$VHNX2NUR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"],
        variables: {
            where_condition: r,
            offset: t?.offset,
            limit: t?.limit
        }
    };
    return (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$BXRBOMHW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])({
        aptosConfig: e,
        query: i,
        originMethod: "getCollectionData"
    })).current_collections_v2[0];
}
async function $o(n) {
    let { aptosConfig: e, creatorAddress: t, collectionName: r, options: i } = n, o = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(t), s = {
        collection_name: {
            _eq: r
        },
        creator_address: {
            _eq: o.toStringLong()
        }
    };
    return i?.tokenStandard && (s.token_standard = {
        _eq: i?.tokenStandard ?? "v2"
    }), Wt({
        aptosConfig: e,
        options: {
            ...i,
            where: s
        }
    });
}
async function qo(n) {
    let { aptosConfig: e, creatorAddress: t, options: r } = n, o = {
        creator_address: {
            _eq: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(t).toStringLong()
        }
    };
    return r?.tokenStandard && (o.token_standard = {
        _eq: r?.tokenStandard ?? "v2"
    }), Wt({
        aptosConfig: e,
        options: {
            ...r,
            where: o
        }
    });
}
async function Wo(n) {
    let { aptosConfig: e, collectionId: t, options: r } = n, o = {
        collection_id: {
            _eq: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(t).toStringLong()
        }
    };
    return r?.tokenStandard && (o.token_standard = {
        _eq: r?.tokenStandard ?? "v2"
    }), Wt({
        aptosConfig: e,
        options: {
            ...r,
            where: o
        }
    });
}
async function jo(n) {
    let { creatorAddress: e, collectionName: t, options: r, aptosConfig: i } = n, o = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(e), s = {
        collection_name: {
            _eq: t
        },
        creator_address: {
            _eq: o.toStringLong()
        }
    };
    return r?.tokenStandard && (s.token_standard = {
        _eq: r?.tokenStandard ?? "v2"
    }), (await Wt({
        aptosConfig: i,
        options: {
            where: s
        }
    })).collection_id;
}
var Ca = {
    typeParameters: [],
    parameters: [
        new m(x()),
        new m(x()),
        new m(x()),
        new m(x()),
        new K(new m(x())),
        new K(new m(x())),
        new K(K.u8())
    ]
};
async function Qo(n) {
    let { aptosConfig: e, options: t, creator: r, collection: i, description: o, name: s, uri: a, propertyKeys: u, propertyTypes: d, propertyValues: l } = n, y = d?.map((p)=>Ye[p]);
    return A({
        aptosConfig: e,
        sender: r.accountAddress,
        data: {
            function: "0x4::aptos_token::mint",
            functionArguments: [
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$SOJ3OG6X$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"](i),
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$SOJ3OG6X$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"](o),
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$SOJ3OG6X$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"](s),
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$SOJ3OG6X$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"](a),
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$SOJ3OG6X$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"].MoveString(u ?? []),
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$SOJ3OG6X$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"].MoveString(y ?? []),
                us(l ?? [], y ?? [])
            ],
            abi: Ca
        },
        options: t
    });
}
var Ea = {
    typeParameters: [
        {
            constraints: [
                "key"
            ]
        }
    ],
    parameters: [
        new m(se(new D(0))),
        new F
    ]
};
async function Jo(n) {
    let { aptosConfig: e, sender: t, digitalAssetAddress: r, recipient: i, digitalAssetType: o, options: s } = n;
    return A({
        aptosConfig: e,
        sender: t.accountAddress,
        data: {
            function: "0x1::object::transfer",
            typeArguments: [
                o ?? ge
            ],
            functionArguments: [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(r),
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(i)
            ],
            abi: Ea
        },
        options: s
    });
}
var Ia = {
    typeParameters: [],
    parameters: [
        new m(x()),
        new m(x()),
        new m(x()),
        new m(x()),
        new K(new m(x())),
        new K(new m(x())),
        new K(K.u8()),
        new F
    ]
};
async function Zo(n) {
    let { aptosConfig: e, account: t, collection: r, description: i, name: o, uri: s, recipient: a, propertyKeys: u, propertyTypes: d, propertyValues: l, options: y } = n;
    if (u?.length !== l?.length) throw new Error("Property keys and property values counts do not match");
    if (d?.length !== l?.length) throw new Error("Property types and property values counts do not match");
    let p = d?.map((g)=>Ye[g]);
    return A({
        aptosConfig: e,
        sender: t.accountAddress,
        data: {
            function: "0x4::aptos_token::mint_soul_bound",
            functionArguments: [
                r,
                i,
                o,
                s,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$SOJ3OG6X$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"].MoveString(u ?? []),
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$SOJ3OG6X$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"].MoveString(p ?? []),
                us(l ?? [], p ?? []),
                a
            ],
            abi: Ia
        },
        options: y
    });
}
var va = {
    typeParameters: [
        {
            constraints: [
                "key"
            ]
        }
    ],
    parameters: [
        new m(se(new D(0)))
    ]
};
async function Yo(n) {
    let { aptosConfig: e, creator: t, digitalAssetAddress: r, digitalAssetType: i, options: o } = n;
    return A({
        aptosConfig: e,
        sender: t.accountAddress,
        data: {
            function: "0x4::aptos_token::burn",
            typeArguments: [
                i ?? ge
            ],
            functionArguments: [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(r)
            ],
            abi: va
        },
        options: o
    });
}
var _a = {
    typeParameters: [
        {
            constraints: [
                "key"
            ]
        }
    ],
    parameters: [
        new m(se(new D(0)))
    ]
};
async function Xo(n) {
    let { aptosConfig: e, creator: t, digitalAssetAddress: r, digitalAssetType: i, options: o } = n;
    return A({
        aptosConfig: e,
        sender: t.accountAddress,
        data: {
            function: "0x4::aptos_token::freeze_transfer",
            typeArguments: [
                i ?? ge
            ],
            functionArguments: [
                r
            ],
            abi: _a
        },
        options: o
    });
}
var ka = {
    typeParameters: [
        {
            constraints: [
                "key"
            ]
        }
    ],
    parameters: [
        new m(se(new D(0)))
    ]
};
async function es(n) {
    let { aptosConfig: e, creator: t, digitalAssetAddress: r, digitalAssetType: i, options: o } = n;
    return A({
        aptosConfig: e,
        sender: t.accountAddress,
        data: {
            function: "0x4::aptos_token::unfreeze_transfer",
            typeArguments: [
                i ?? ge
            ],
            functionArguments: [
                r
            ],
            abi: ka
        },
        options: o
    });
}
var Fa = {
    typeParameters: [
        {
            constraints: [
                "key"
            ]
        }
    ],
    parameters: [
        new m(se(new D(0))),
        new m(x())
    ]
};
async function ts(n) {
    let { aptosConfig: e, creator: t, description: r, digitalAssetAddress: i, digitalAssetType: o, options: s } = n;
    return A({
        aptosConfig: e,
        sender: t.accountAddress,
        data: {
            function: "0x4::aptos_token::set_description",
            typeArguments: [
                o ?? ge
            ],
            functionArguments: [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(i),
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$SOJ3OG6X$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"](r)
            ],
            abi: Fa
        },
        options: s
    });
}
var Ua = {
    typeParameters: [
        {
            constraints: [
                "key"
            ]
        }
    ],
    parameters: [
        new m(se(new D(0))),
        new m(x())
    ]
};
async function ns(n) {
    let { aptosConfig: e, creator: t, name: r, digitalAssetAddress: i, digitalAssetType: o, options: s } = n;
    return A({
        aptosConfig: e,
        sender: t.accountAddress,
        data: {
            function: "0x4::aptos_token::set_name",
            typeArguments: [
                o ?? ge
            ],
            functionArguments: [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(i),
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$SOJ3OG6X$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"](r)
            ],
            abi: Ua
        },
        options: s
    });
}
var Da = {
    typeParameters: [
        {
            constraints: [
                "key"
            ]
        }
    ],
    parameters: [
        new m(se(new D(0))),
        new m(x())
    ]
};
async function rs(n) {
    let { aptosConfig: e, creator: t, uri: r, digitalAssetAddress: i, digitalAssetType: o, options: s } = n;
    return A({
        aptosConfig: e,
        sender: t.accountAddress,
        data: {
            function: "0x4::aptos_token::set_uri",
            typeArguments: [
                o ?? ge
            ],
            functionArguments: [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(i),
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$SOJ3OG6X$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"](r)
            ],
            abi: Da
        },
        options: s
    });
}
var Ra = {
    typeParameters: [
        {
            constraints: [
                "key"
            ]
        }
    ],
    parameters: [
        new m(se(new D(0))),
        new m(x()),
        new m(x()),
        K.u8()
    ]
};
async function is(n) {
    let { aptosConfig: e, creator: t, propertyKey: r, propertyType: i, propertyValue: o, digitalAssetAddress: s, digitalAssetType: a, options: u } = n;
    return A({
        aptosConfig: e,
        sender: t.accountAddress,
        data: {
            function: "0x4::aptos_token::add_property",
            typeArguments: [
                a ?? ge
            ],
            functionArguments: [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(s),
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$SOJ3OG6X$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"](r),
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$SOJ3OG6X$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"](Ye[i]),
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$SOJ3OG6X$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"].U8(Mr(o, Ye[i]))
            ],
            abi: Ra
        },
        options: u
    });
}
var Oa = {
    typeParameters: [
        {
            constraints: [
                "key"
            ]
        }
    ],
    parameters: [
        new m(se(new D(0))),
        new m(x())
    ]
};
async function os(n) {
    let { aptosConfig: e, creator: t, propertyKey: r, digitalAssetAddress: i, digitalAssetType: o, options: s } = n;
    return A({
        aptosConfig: e,
        sender: t.accountAddress,
        data: {
            function: "0x4::aptos_token::remove_property",
            typeArguments: [
                o ?? ge
            ],
            functionArguments: [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(i),
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$SOJ3OG6X$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"](r)
            ],
            abi: Oa
        },
        options: s
    });
}
var Ga = {
    typeParameters: [
        {
            constraints: [
                "key"
            ]
        }
    ],
    parameters: [
        new m(se(new D(0))),
        new m(x()),
        new m(x()),
        K.u8()
    ]
};
async function ss(n) {
    let { aptosConfig: e, creator: t, propertyKey: r, propertyType: i, propertyValue: o, digitalAssetAddress: s, digitalAssetType: a, options: u } = n;
    return A({
        aptosConfig: e,
        sender: t.accountAddress,
        data: {
            function: "0x4::aptos_token::update_property",
            typeArguments: [
                a ?? ge
            ],
            functionArguments: [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(s),
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$SOJ3OG6X$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"](r),
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$SOJ3OG6X$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"](Ye[i]),
                Mr(o, Ye[i])
            ],
            abi: Ga
        },
        options: u
    });
}
var Ba = {
    typeParameters: [
        {
            constraints: [
                "key"
            ]
        },
        {
            constraints: []
        }
    ],
    parameters: [
        new m(se(new D(0))),
        new m(x()),
        new D(1)
    ]
};
async function as(n) {
    let { aptosConfig: e, creator: t, propertyKey: r, propertyType: i, propertyValue: o, digitalAssetAddress: s, digitalAssetType: a, options: u } = n;
    return A({
        aptosConfig: e,
        sender: t.accountAddress,
        data: {
            function: "0x4::aptos_token::add_typed_property",
            typeArguments: [
                a ?? ge,
                Ye[i]
            ],
            functionArguments: [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(s),
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$SOJ3OG6X$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"](r),
                o
            ],
            abi: Ba
        },
        options: u
    });
}
var za = {
    typeParameters: [
        {
            constraints: [
                "key"
            ]
        },
        {
            constraints: []
        }
    ],
    parameters: [
        new m(se(new D(0))),
        new m(x()),
        new D(1)
    ]
};
async function cs(n) {
    let { aptosConfig: e, creator: t, propertyKey: r, propertyType: i, propertyValue: o, digitalAssetAddress: s, digitalAssetType: a, options: u } = n;
    return A({
        aptosConfig: e,
        sender: t.accountAddress,
        data: {
            function: "0x4::aptos_token::update_typed_property",
            typeArguments: [
                a ?? ge,
                Ye[i]
            ],
            functionArguments: [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(s),
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$SOJ3OG6X$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"](r),
                o
            ],
            abi: za
        },
        options: u
    });
}
function us(n, e) {
    let t = new Array;
    return e.forEach((r, i)=>{
        t.push(Mr(n[i], r));
    }), t;
}
function Mr(n, e) {
    let t = Ae(e);
    return yt(n, t, 0, []).bcsToBytes();
}
var ln = class {
    constructor(e){
        this.config = e;
    }
    async getCollectionData(e) {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$KAYKTT4S$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])({
            config: this.config,
            minimumLedgerVersion: e.minimumLedgerVersion,
            processorType: "token_v2_processor"
        });
        let { creatorAddress: t, collectionName: r, options: i } = e, o = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(t), s = {
            collection_name: {
                _eq: r
            },
            creator_address: {
                _eq: o.toStringLong()
            }
        };
        return i?.tokenStandard && (s.token_standard = {
            _eq: i?.tokenStandard ?? "v2"
        }), Wt({
            aptosConfig: this.config,
            options: {
                where: s
            }
        });
    }
    async getCollectionDataByCreatorAddressAndCollectionName(e) {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$KAYKTT4S$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])({
            config: this.config,
            minimumLedgerVersion: e.minimumLedgerVersion,
            processorType: "token_v2_processor"
        }), $o({
            aptosConfig: this.config,
            ...e
        });
    }
    async getCollectionDataByCreatorAddress(e) {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$KAYKTT4S$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])({
            config: this.config,
            minimumLedgerVersion: e.minimumLedgerVersion,
            processorType: "token_v2_processor"
        }), qo({
            aptosConfig: this.config,
            ...e
        });
    }
    async getCollectionDataByCollectionId(e) {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$KAYKTT4S$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])({
            config: this.config,
            minimumLedgerVersion: e.minimumLedgerVersion,
            processorType: "token_v2_processor"
        }), Wo({
            aptosConfig: this.config,
            ...e
        });
    }
    async getCollectionId(e) {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$KAYKTT4S$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])({
            config: this.config,
            minimumLedgerVersion: e.minimumLedgerVersion,
            processorType: "token_v2_processor"
        }), jo({
            aptosConfig: this.config,
            ...e
        });
    }
    async getDigitalAssetData(e) {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$KAYKTT4S$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])({
            config: this.config,
            minimumLedgerVersion: e.minimumLedgerVersion,
            processorType: "token_v2_processor"
        }), No({
            aptosConfig: this.config,
            ...e
        });
    }
    async getCurrentDigitalAssetOwnership(e) {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$KAYKTT4S$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])({
            config: this.config,
            minimumLedgerVersion: e.minimumLedgerVersion,
            processorType: "token_v2_processor"
        }), Mo({
            aptosConfig: this.config,
            ...e
        });
    }
    async getOwnedDigitalAssets(e) {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$KAYKTT4S$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])({
            config: this.config,
            minimumLedgerVersion: e.minimumLedgerVersion,
            processorType: "token_v2_processor"
        }), Vo({
            aptosConfig: this.config,
            ...e
        });
    }
    async getDigitalAssetActivity(e) {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$KAYKTT4S$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])({
            config: this.config,
            minimumLedgerVersion: e.minimumLedgerVersion,
            processorType: "token_v2_processor"
        }), Ho({
            aptosConfig: this.config,
            ...e
        });
    }
    async createCollectionTransaction(e) {
        return Lo({
            aptosConfig: this.config,
            ...e
        });
    }
    async mintDigitalAssetTransaction(e) {
        return Qo({
            aptosConfig: this.config,
            ...e
        });
    }
    async transferDigitalAssetTransaction(e) {
        return Jo({
            aptosConfig: this.config,
            ...e
        });
    }
    async mintSoulBoundTransaction(e) {
        return Zo({
            aptosConfig: this.config,
            ...e
        });
    }
    async burnDigitalAssetTransaction(e) {
        return Yo({
            aptosConfig: this.config,
            ...e
        });
    }
    async freezeDigitalAssetTransaferTransaction(e) {
        return Xo({
            aptosConfig: this.config,
            ...e
        });
    }
    async unfreezeDigitalAssetTransaferTransaction(e) {
        return es({
            aptosConfig: this.config,
            ...e
        });
    }
    async setDigitalAssetDescriptionTransaction(e) {
        return ts({
            aptosConfig: this.config,
            ...e
        });
    }
    async setDigitalAssetNameTransaction(e) {
        return ns({
            aptosConfig: this.config,
            ...e
        });
    }
    async setDigitalAssetURITransaction(e) {
        return rs({
            aptosConfig: this.config,
            ...e
        });
    }
    async addDigitalAssetPropertyTransaction(e) {
        return is({
            aptosConfig: this.config,
            ...e
        });
    }
    async removeDigitalAssetPropertyTransaction(e) {
        return os({
            aptosConfig: this.config,
            ...e
        });
    }
    async updateDigitalAssetPropertyTransaction(e) {
        return ss({
            aptosConfig: this.config,
            ...e
        });
    }
    async addDigitalAssetTypedPropertyTransaction(e) {
        return as({
            aptosConfig: this.config,
            ...e
        });
    }
    async updateDigitalAssetTypedPropertyTransaction(e) {
        return cs({
            aptosConfig: this.config,
            ...e
        });
    }
};
var ds = 300, Na = (n)=>{
    if (n && n.length > ds) throw new Error(`Event type length exceeds the maximum length of ${ds}`);
};
async function ps(n) {
    let { aptosConfig: e, eventType: t, options: r } = n, i = {
        _or: [
            {
                account_address: {
                    _eq: t.split("::")[0]
                }
            },
            {
                account_address: {
                    _eq: "0x0000000000000000000000000000000000000000000000000000000000000000"
                },
                sequence_number: {
                    _eq: 0
                },
                creation_number: {
                    _eq: 0
                }
            }
        ],
        indexed_type: {
            _eq: t
        }
    };
    return gn({
        aptosConfig: e,
        options: {
            ...r,
            where: i
        }
    });
}
async function ls(n) {
    let { accountAddress: e, aptosConfig: t, creationNumber: r, options: i } = n, s = {
        account_address: {
            _eq: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(e).toStringLong()
        },
        creation_number: {
            _eq: r
        }
    };
    return gn({
        aptosConfig: t,
        options: {
            ...i,
            where: s
        }
    });
}
async function gs(n) {
    let { accountAddress: e, aptosConfig: t, eventType: r, options: i } = n, s = {
        account_address: {
            _eq: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(e).toStringLong()
        },
        indexed_type: {
            _eq: r
        }
    };
    return gn({
        aptosConfig: t,
        options: {
            ...i,
            where: s
        }
    });
}
async function gn(n) {
    let { aptosConfig: e, options: t } = n;
    Na(t?.where?.indexed_type?._eq);
    let r = {
        query: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$VHNX2NUR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["p"],
        variables: {
            where_condition: t?.where,
            offset: t?.offset,
            limit: t?.limit,
            order_by: t?.orderBy
        }
    };
    return (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$BXRBOMHW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])({
        aptosConfig: e,
        query: r,
        originMethod: "getEvents"
    })).events;
}
var mn = class {
    constructor(e){
        this.config = e;
    }
    async getModuleEventsByEventType(e) {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$KAYKTT4S$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])({
            config: this.config,
            minimumLedgerVersion: e.minimumLedgerVersion,
            processorType: "events_processor"
        }), ps({
            aptosConfig: this.config,
            ...e
        });
    }
    async getAccountEventsByCreationNumber(e) {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$KAYKTT4S$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])({
            config: this.config,
            minimumLedgerVersion: e.minimumLedgerVersion,
            processorType: "events_processor"
        }), ls({
            aptosConfig: this.config,
            ...e
        });
    }
    async getAccountEventsByEventType(e) {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$KAYKTT4S$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])({
            config: this.config,
            minimumLedgerVersion: e.minimumLedgerVersion,
            processorType: "events_processor"
        }), gs({
            aptosConfig: this.config,
            ...e
        });
    }
    async getEvents(e) {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$KAYKTT4S$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])({
            config: this.config,
            minimumLedgerVersion: e?.minimumLedgerVersion,
            processorType: "events_processor"
        }), gn({
            aptosConfig: this.config,
            ...e
        });
    }
};
async function ms(n) {
    let { aptosConfig: e, accountAddress: t, amount: r, options: i } = n, o = i?.timeoutSecs || 20, { data: s } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GQ557FEA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"])({
        aptosConfig: e,
        path: "fund",
        body: {
            address: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(t).toString(),
            amount: r
        },
        originMethod: "fundAccount"
    }), a = s.txn_hashes[0], u = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$P237G6YB$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["g"])({
        aptosConfig: e,
        transactionHash: a,
        options: {
            timeoutSecs: o,
            checkSuccess: i?.checkSuccess
        }
    });
    if (u.type === "user_transaction") return u;
    throw new Error(`Unexpected transaction received for fund account: ${u.type}`);
}
var yn = class {
    constructor(e){
        this.config = e;
    }
    async fundAccount(e) {
        let t = await ms({
            aptosConfig: this.config,
            ...e
        });
        return (e.options?.waitForIndexer === void 0 || e.options?.waitForIndexer) && await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$P237G6YB$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["h"])({
            aptosConfig: this.config,
            minimumLedgerVersion: BigInt(t.version),
            processorType: "fungible_asset_processor"
        }), t;
    }
};
async function Zn(n) {
    let { aptosConfig: e, options: t } = n, r = {
        query: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$VHNX2NUR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["r"],
        variables: {
            where_condition: t?.where,
            limit: t?.limit,
            offset: t?.offset
        }
    };
    return (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$BXRBOMHW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])({
        aptosConfig: e,
        query: r,
        originMethod: "getFungibleAssetMetadata"
    })).fungible_asset_metadata;
}
async function ys(n) {
    let { aptosConfig: e, options: t } = n, r = {
        query: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$VHNX2NUR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["q"],
        variables: {
            where_condition: t?.where,
            limit: t?.limit,
            offset: t?.offset
        }
    };
    return (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$BXRBOMHW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])({
        aptosConfig: e,
        query: r,
        originMethod: "getFungibleAssetActivities"
    })).fungible_asset_activities;
}
async function As(n) {
    let { aptosConfig: e, options: t } = n, r = {
        query: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$VHNX2NUR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["n"],
        variables: {
            where_condition: t?.where,
            limit: t?.limit,
            offset: t?.offset
        }
    };
    return (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$BXRBOMHW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])({
        aptosConfig: e,
        query: r,
        originMethod: "getCurrentFungibleAssetBalances"
    })).current_fungible_asset_balances;
}
var fs = {
    typeParameters: [
        {
            constraints: []
        }
    ],
    parameters: [
        Ae("0x1::object::Object"),
        new F,
        new H
    ]
};
async function hs(n) {
    let { aptosConfig: e, sender: t, fungibleAssetMetadataAddress: r, recipient: i, amount: o, options: s } = n;
    return A({
        aptosConfig: e,
        sender: t.accountAddress,
        data: {
            function: "0x1::primary_fungible_store::transfer",
            typeArguments: [
                "0x1::fungible_asset::Metadata"
            ],
            functionArguments: [
                r,
                i,
                o
            ],
            abi: fs
        },
        options: s
    });
}
async function bs(n) {
    let { aptosConfig: e, sender: t, fromStore: r, toStore: i, amount: o, options: s } = n;
    return A({
        aptosConfig: e,
        sender: t.accountAddress,
        data: {
            function: "0x1::dispatchable_fungible_asset::transfer",
            typeArguments: [
                "0x1::fungible_asset::FungibleStore"
            ],
            functionArguments: [
                r,
                i,
                o
            ],
            abi: fs
        },
        options: s
    });
}
var An = class {
    constructor(e){
        this.config = e;
    }
    async getFungibleAssetMetadata(e) {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$KAYKTT4S$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])({
            config: this.config,
            minimumLedgerVersion: e?.minimumLedgerVersion,
            processorType: "fungible_asset_processor"
        }), Zn({
            aptosConfig: this.config,
            ...e
        });
    }
    async getFungibleAssetMetadataByAssetType(e) {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$KAYKTT4S$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])({
            config: this.config,
            minimumLedgerVersion: e?.minimumLedgerVersion,
            processorType: "fungible_asset_processor"
        }), (await Zn({
            aptosConfig: this.config,
            options: {
                where: {
                    asset_type: {
                        _eq: e.assetType
                    }
                }
            }
        }))[0];
    }
    async getFungibleAssetMetadataByCreatorAddress(e) {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$KAYKTT4S$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])({
            config: this.config,
            minimumLedgerVersion: e?.minimumLedgerVersion,
            processorType: "fungible_asset_processor"
        }), await Zn({
            aptosConfig: this.config,
            options: {
                where: {
                    creator_address: {
                        _eq: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(e.creatorAddress).toStringLong()
                    }
                }
            }
        });
    }
    async getFungibleAssetActivities(e) {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$KAYKTT4S$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])({
            config: this.config,
            minimumLedgerVersion: e?.minimumLedgerVersion,
            processorType: "fungible_asset_processor"
        }), ys({
            aptosConfig: this.config,
            ...e
        });
    }
    async getCurrentFungibleAssetBalances(e) {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$KAYKTT4S$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])({
            config: this.config,
            minimumLedgerVersion: e?.minimumLedgerVersion,
            processorType: "fungible_asset_processor"
        }), As({
            aptosConfig: this.config,
            ...e
        });
    }
    async transferFungibleAsset(e) {
        return hs({
            aptosConfig: this.config,
            ...e
        });
    }
    async transferFungibleAssetBetweenStores(e) {
        return bs({
            aptosConfig: this.config,
            ...e
        });
    }
};
var fn = class {
    constructor(e){
        this.config = e;
    }
    async getLedgerInfo() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$BXRBOMHW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])({
            aptosConfig: this.config
        });
    }
    async getChainId() {
        return (await this.getLedgerInfo()).chain_id;
    }
    async getBlockByVersion(e) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$P237G6YB$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["k"])({
            aptosConfig: this.config,
            ...e
        });
    }
    async getBlockByHeight(e) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$P237G6YB$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l"])({
            aptosConfig: this.config,
            ...e
        });
    }
    async view(e) {
        return te({
            aptosConfig: this.config,
            ...e
        });
    }
    async viewJson(e) {
        return Ro({
            aptosConfig: this.config,
            ...e
        });
    }
    async getChainTopUserTransactions(e) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$BXRBOMHW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])({
            aptosConfig: this.config,
            ...e
        });
    }
    async queryIndexer(e) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$BXRBOMHW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])({
            aptosConfig: this.config,
            ...e
        });
    }
    async getIndexerLastSuccessVersion() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$BXRBOMHW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["e"])({
            aptosConfig: this.config
        });
    }
    async getProcessorStatus(e) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$BXRBOMHW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["f"])({
            aptosConfig: this.config,
            processorType: e
        });
    }
};
var ws = [
    "A name must be between 3 and 63 characters long,",
    "and can only contain lowercase a-z, 0-9, and hyphens.",
    "A name may not start or end with a hyphen."
].join(" ");
function Ts(n) {
    return !(!n || n.length < 3 || n.length > 63 || !/^[a-z\d][a-z\d-]{1,61}[a-z\d]$/.test(n));
}
function Xe(n) {
    let [e, t, ...r] = n.replace(/\.apt$/, "").split(".");
    if (r.length > 0) throw new Error(`${n} is invalid. A name can only have two parts, a domain and a subdomain separated by a "."`);
    if (!Ts(e)) throw new Error(`${e} is not valid. ${ws}`);
    if (t && !Ts(t)) throw new Error(`${t} is not valid. ${ws}`);
    return {
        domainName: t || e,
        subdomainName: t ? e : void 0
    };
}
var Ma = ((t)=>(t[t.Independent = 0] = "Independent", t[t.FollowsDomain = 1] = "FollowsDomain", t))(Ma || {});
function Ss(n) {
    if (!n) return !1;
    let e = new Date(n.domain_expiration_timestamp).getTime() < Date.now(), t = new Date(n.expiration_timestamp).getTime() < Date.now();
    return n.subdomain && e ? !1 : n.subdomain && n.subdomain_expiration_policy === 1 ? !0 : !t;
}
var ch = "0x37368b46ce665362562c6d1d4ec01a08c8644c488690df5a17e13ba163e20221", Va = "0x585fc9f0f0c54183b039ffc770ca282ebd87307916c215a3e692f2f8e4305e82", Ha = {
    testnet: "0x5f8fd2347449685cf41d4db97926ec3a096eaf381332be4f1318ad4d16a8497c",
    mainnet: "0x867ed1f6bf916171b1de3ee92849b8978b7d1b9e0a8cc982a3d19d535dfd9c0c",
    local: Va,
    custom: null,
    devnet: null
};
function Ve(n) {
    let e = Ha[n.network];
    if (!e) throw new Error(`The ANS contract is not deployed to ${n.network}`);
    return e;
}
var Yn = (n)=>{
    if (n && typeof n == "object" && "vec" in n && Array.isArray(n.vec)) return n.vec[0];
};
async function Ps(n) {
    let { aptosConfig: e, name: t } = n, r = Ve(e), { domainName: i, subdomainName: o } = Xe(t), s = await te({
        aptosConfig: e,
        payload: {
            function: `${r}::router::get_owner_addr`,
            functionArguments: [
                i,
                o
            ]
        }
    }), a = Yn(s[0]);
    return a ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(a) : void 0;
}
async function xs(n) {
    let { aptosConfig: e, expiration: t, name: r, sender: i, targetAddress: o, toAddress: s, options: a, transferable: u } = n, d = Ve(e), { domainName: l, subdomainName: y } = Xe(r), p = t.policy === "subdomain:independent" || t.policy === "subdomain:follow-domain";
    if (y && !p) throw new Error("Subdomains must have an expiration policy of either 'subdomain:independent' or 'subdomain:follow-domain'");
    if (p && !y) throw new Error(`Policy is set to ${t.policy} but no subdomain was provided`);
    if (t.policy === "domain") {
        let M = t.years ?? 1;
        if (M !== 1) throw new Error("For now, names can only be registered for 1 year at a time");
        let Le = M * 31536e3;
        return await A({
            aptosConfig: e,
            sender: i.accountAddress.toString(),
            data: {
                function: `${d}::router::register_domain`,
                functionArguments: [
                    l,
                    Le,
                    o,
                    s
                ]
            },
            options: a
        });
    }
    if (!y) throw new Error(`${t.policy} requires a subdomain to be provided.`);
    let g = await Vr({
        aptosConfig: e,
        name: l
    });
    if (!g) throw new Error("The domain does not exist");
    let f = t.policy === "subdomain:independent" ? t.expirationDate : g;
    if (f > g) throw new Error("The subdomain expiration time cannot be greater than the domain expiration time");
    return await A({
        aptosConfig: e,
        sender: i.accountAddress.toString(),
        data: {
            function: `${d}::router::register_subdomain`,
            functionArguments: [
                l,
                y,
                Math.round(f / 1e3),
                t.policy === "subdomain:follow-domain" ? 1 : 0,
                !!u,
                o,
                s
            ]
        },
        options: a
    });
}
async function Vr(n) {
    let { aptosConfig: e, name: t } = n, r = Ve(e), { domainName: i, subdomainName: o } = Xe(t);
    try {
        let s = await te({
            aptosConfig: e,
            payload: {
                function: `${r}::router::get_expiration`,
                functionArguments: [
                    i,
                    o
                ]
            }
        });
        return Number(s[0]) * 1e3;
    } catch  {
        return;
    }
}
async function Ks(n) {
    let { aptosConfig: e, address: t } = n, r = Ve(e), i = await te({
        aptosConfig: e,
        payload: {
            function: `${r}::router::get_primary_name`,
            functionArguments: [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(t).toString()
            ]
        }
    }), o = Yn(i[1]), s = Yn(i[0]);
    if (o) return [
        s,
        o
    ].filter(Boolean).join(".");
}
async function Cs(n) {
    let { aptosConfig: e, sender: t, name: r, options: i } = n, o = Ve(e);
    if (!r) return await A({
        aptosConfig: e,
        sender: t.accountAddress.toString(),
        data: {
            function: `${o}::router::clear_primary_name`,
            functionArguments: []
        },
        options: i
    });
    let { domainName: s, subdomainName: a } = Xe(r);
    return await A({
        aptosConfig: e,
        sender: t.accountAddress.toString(),
        data: {
            function: `${o}::router::set_primary_name`,
            functionArguments: [
                s,
                a
            ]
        },
        options: i
    });
}
async function Es(n) {
    let { aptosConfig: e, name: t } = n, r = Ve(e), { domainName: i, subdomainName: o } = Xe(t), s = await te({
        aptosConfig: e,
        payload: {
            function: `${r}::router::get_target_addr`,
            functionArguments: [
                i,
                o
            ]
        }
    }), a = Yn(s[0]);
    return a ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(a) : void 0;
}
async function Is(n) {
    let { aptosConfig: e, sender: t, name: r, address: i, options: o } = n, s = Ve(e), { domainName: a, subdomainName: u } = Xe(r);
    return await A({
        aptosConfig: e,
        sender: t.accountAddress.toString(),
        data: {
            function: `${s}::router::set_target_addr`,
            functionArguments: [
                a,
                u,
                i
            ]
        },
        options: o
    });
}
async function vs(n) {
    let { aptosConfig: e, name: t } = n, { domainName: r, subdomainName: i = "" } = Xe(t), a = (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$BXRBOMHW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])({
        aptosConfig: e,
        query: {
            query: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$VHNX2NUR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["s"],
            variables: {
                where_condition: {
                    domain: {
                        _eq: r
                    },
                    subdomain: {
                        _eq: i
                    }
                },
                limit: 1
            }
        },
        originMethod: "getName"
    })).current_aptos_names[0];
    return a && (a = hn(a)), Ss(a) ? a : void 0;
}
async function _s(n) {
    let { aptosConfig: e, options: t, accountAddress: r } = n, i = await Hr({
        aptosConfig: e
    });
    return (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$BXRBOMHW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])({
        aptosConfig: e,
        originMethod: "getAccountNames",
        query: {
            query: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$VHNX2NUR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["s"],
            variables: {
                limit: t?.limit,
                offset: t?.offset,
                order_by: t?.orderBy,
                where_condition: {
                    ...n.options?.where ?? {},
                    owner_address: {
                        _eq: r.toString()
                    },
                    expiration_timestamp: {
                        _gte: i
                    }
                }
            }
        }
    })).current_aptos_names.map(hn);
}
async function ks(n) {
    let { aptosConfig: e, options: t, accountAddress: r } = n, i = await Hr({
        aptosConfig: e
    });
    return (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$BXRBOMHW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])({
        aptosConfig: e,
        originMethod: "getAccountDomains",
        query: {
            query: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$VHNX2NUR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["s"],
            variables: {
                limit: t?.limit,
                offset: t?.offset,
                order_by: t?.orderBy,
                where_condition: {
                    ...n.options?.where ?? {},
                    owner_address: {
                        _eq: r.toString()
                    },
                    expiration_timestamp: {
                        _gte: i
                    },
                    subdomain: {
                        _eq: ""
                    }
                }
            }
        }
    })).current_aptos_names.map(hn);
}
async function Fs(n) {
    let { aptosConfig: e, options: t, accountAddress: r } = n, i = await Hr({
        aptosConfig: e
    });
    return (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$BXRBOMHW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])({
        aptosConfig: e,
        originMethod: "getAccountSubdomains",
        query: {
            query: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$VHNX2NUR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["s"],
            variables: {
                limit: t?.limit,
                offset: t?.offset,
                order_by: t?.orderBy,
                where_condition: {
                    ...n.options?.where ?? {},
                    owner_address: {
                        _eq: r.toString()
                    },
                    expiration_timestamp: {
                        _gte: i
                    },
                    subdomain: {
                        _neq: ""
                    }
                }
            }
        }
    })).current_aptos_names.map(hn);
}
async function Us(n) {
    let { aptosConfig: e, options: t, domain: r } = n;
    return (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$BXRBOMHW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])({
        aptosConfig: e,
        originMethod: "getDomainSubdomains",
        query: {
            query: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$VHNX2NUR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["s"],
            variables: {
                limit: t?.limit,
                offset: t?.offset,
                order_by: t?.orderBy,
                where_condition: {
                    ...n.options?.where ?? {},
                    domain: {
                        _eq: r
                    },
                    subdomain: {
                        _neq: ""
                    }
                }
            }
        }
    })).current_aptos_names.map(hn).filter(Ss);
}
async function Hr(n) {
    let { aptosConfig: e } = n, t = Ve(e), [r] = await te({
        aptosConfig: e,
        payload: {
            function: `${t}::config::reregistration_grace_sec`,
            functionArguments: []
        }
    }), i = r / 60 / 60 / 24, o = ()=>new Date;
    return new Date(o().setDate(o().getDate() - i)).toISOString();
}
async function Ds(n) {
    let { aptosConfig: e, sender: t, name: r, years: i = 1, options: o } = n, s = Ve(e), a = i * 31536e3, { domainName: u, subdomainName: d } = Xe(r);
    if (d) throw new Error("Subdomains cannot be renewed");
    if (i !== 1) throw new Error("Currently, only 1 year renewals are supported");
    return await A({
        aptosConfig: e,
        sender: t.accountAddress.toString(),
        data: {
            function: `${s}::router::renew_domain`,
            functionArguments: [
                u,
                a
            ]
        },
        options: o
    });
}
function hn(n) {
    return {
        ...n,
        expiration_timestamp: new Date(n.expiration_timestamp).getTime()
    };
}
var bn = class {
    constructor(e){
        this.config = e;
    }
    async getOwnerAddress(e) {
        return Ps({
            aptosConfig: this.config,
            ...e
        });
    }
    async getExpiration(e) {
        return Vr({
            aptosConfig: this.config,
            ...e
        });
    }
    async getTargetAddress(e) {
        return Es({
            aptosConfig: this.config,
            ...e
        });
    }
    async setTargetAddress(e) {
        return Is({
            aptosConfig: this.config,
            ...e
        });
    }
    async getPrimaryName(e) {
        return Ks({
            aptosConfig: this.config,
            ...e
        });
    }
    async setPrimaryName(e) {
        return Cs({
            aptosConfig: this.config,
            ...e
        });
    }
    async registerName(e) {
        return xs({
            aptosConfig: this.config,
            ...e
        });
    }
    async renewDomain(e) {
        return Ds({
            aptosConfig: this.config,
            ...e
        });
    }
    async getName(e) {
        return vs({
            aptosConfig: this.config,
            ...e
        });
    }
    async getAccountNames(e) {
        return _s({
            aptosConfig: this.config,
            ...e
        });
    }
    async getAccountDomains(e) {
        return ks({
            aptosConfig: this.config,
            ...e
        });
    }
    async getAccountSubdomains(e) {
        return Fs({
            aptosConfig: this.config,
            ...e
        });
    }
    async getDomainSubdomains(e) {
        return Us({
            aptosConfig: this.config,
            ...e
        });
    }
};
async function Rs(n) {
    let { aptosConfig: e, poolAddress: t } = n, r = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(t).toStringLong(), o = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$BXRBOMHW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])({
        aptosConfig: e,
        query: {
            query: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$VHNX2NUR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"],
            variables: {
                where_condition: {
                    pool_address: {
                        _eq: r
                    }
                }
            }
        }
    });
    return o.num_active_delegator_per_pool[0] ? o.num_active_delegator_per_pool[0].num_active_delegator : 0;
}
async function Os(n) {
    let { aptosConfig: e, options: t } = n, r = {
        query: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$VHNX2NUR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"],
        variables: {
            order_by: t?.orderBy
        }
    };
    return (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$BXRBOMHW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])({
        aptosConfig: e,
        query: r
    })).num_active_delegator_per_pool;
}
async function Gs(n) {
    let { aptosConfig: e, delegatorAddress: t, poolAddress: r } = n, i = {
        query: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$VHNX2NUR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["o"],
        variables: {
            delegatorAddress: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(t).toStringLong(),
            poolAddress: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(r).toStringLong()
        }
    };
    return (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$BXRBOMHW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])({
        aptosConfig: e,
        query: i
    })).delegated_staking_activities;
}
var wn = class {
    constructor(e){
        this.config = e;
    }
    async getNumberOfDelegators(e) {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$KAYKTT4S$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])({
            config: this.config,
            minimumLedgerVersion: e?.minimumLedgerVersion,
            processorType: "stake_processor"
        }), Rs({
            aptosConfig: this.config,
            ...e
        });
    }
    async getNumberOfDelegatorsForAllPools(e) {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$KAYKTT4S$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])({
            config: this.config,
            minimumLedgerVersion: e?.minimumLedgerVersion,
            processorType: "stake_processor"
        }), Os({
            aptosConfig: this.config,
            ...e
        });
    }
    async getDelegatedStakingActivities(e) {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$KAYKTT4S$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])({
            config: this.config,
            minimumLedgerVersion: e?.minimumLedgerVersion,
            processorType: "stake_processor"
        }), Gs({
            aptosConfig: this.config,
            ...e
        });
    }
};
var Xn = class {
    constructor(e){
        this.config = e;
    }
    async simple(e) {
        return A({
            aptosConfig: this.config,
            ...e
        });
    }
    async scriptComposer(e) {
        let t = new jn(this.config);
        await t.init();
        let i = (await e.builder(t)).build(), o = await Ur({
            aptosConfig: this.config,
            payload: st.load(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$JGFKIUG5$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"](i)),
            ...e
        });
        return new Gt(o, e.withFeePayer === !0 ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].ZERO : void 0);
    }
    async multiAgent(e) {
        return A({
            aptosConfig: this.config,
            ...e
        });
    }
};
var jt = class {
    constructor(e){
        this.config = e;
    }
    async simple(e) {
        return Gr({
            aptosConfig: this.config,
            ...e
        });
    }
    async multiAgent(e) {
        return Gr({
            aptosConfig: this.config,
            ...e
        });
    }
};
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$KDMSOCZY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$W4BSN6SK$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"]
], jt.prototype, "simple", 1), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$KDMSOCZY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$W4BSN6SK$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"]
], jt.prototype, "multiAgent", 1);
var Qt = class {
    constructor(e){
        this.config = e;
    }
    async simple(e) {
        return un({
            aptosConfig: this.config,
            ...e
        });
    }
    async multiAgent(e) {
        return un({
            aptosConfig: this.config,
            ...e
        });
    }
};
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$KDMSOCZY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$W4BSN6SK$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"]
], Qt.prototype, "simple", 1), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$KDMSOCZY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$W4BSN6SK$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"]
], Qt.prototype, "multiAgent", 1);
;
var er = class {
    constructor(e, t, r, i, o){
        this.lastUncommintedNumber = null;
        this.currentNumber = null;
        this.lock = !1;
        this.aptosConfig = e, this.account = t, this.maxWaitTime = r, this.maximumInFlight = i, this.sleepTime = o;
    }
    async nextSequenceNumber() {
        for(; this.lock;)await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$YFFDF22R$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(this.sleepTime);
        this.lock = !0;
        let e = BigInt(0);
        try {
            if ((this.lastUncommintedNumber === null || this.currentNumber === null) && await this.initialize(), this.currentNumber - this.lastUncommintedNumber >= this.maximumInFlight) {
                await this.update();
                let t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$YFFDF22R$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])();
                for(; this.currentNumber - this.lastUncommintedNumber >= this.maximumInFlight;)await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$YFFDF22R$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(this.sleepTime), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$YFFDF22R$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])() - t > this.maxWaitTime ? (console.warn(`Waited over 30 seconds for a transaction to commit, re-syncing ${this.account.accountAddress.toString()}`), await this.initialize()) : await this.update();
            }
            e = this.currentNumber, this.currentNumber += BigInt(1);
        } catch (t) {
            console.error("error in getting next sequence number for this account", t);
        } finally{
            this.lock = !1;
        }
        return e;
    }
    async initialize() {
        let { sequence_number: e } = await At({
            aptosConfig: this.aptosConfig,
            accountAddress: this.account.accountAddress
        });
        this.currentNumber = BigInt(e), this.lastUncommintedNumber = BigInt(e);
    }
    async update() {
        let { sequence_number: e } = await At({
            aptosConfig: this.aptosConfig,
            accountAddress: this.account.accountAddress
        });
        return this.lastUncommintedNumber = BigInt(e), this.lastUncommintedNumber;
    }
    async synchronize() {
        if (this.lastUncommintedNumber !== this.currentNumber) {
            for(; this.lock;)await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$YFFDF22R$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(this.sleepTime);
            this.lock = !0;
            try {
                await this.update();
                let e = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$YFFDF22R$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])();
                for(; this.lastUncommintedNumber !== this.currentNumber;)(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$YFFDF22R$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])() - e > this.maxWaitTime ? (console.warn(`Waited over 30 seconds for a transaction to commit, re-syncing ${this.account.accountAddress.toString()}`), await this.initialize()) : (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$YFFDF22R$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(this.sleepTime), await this.update());
            } catch (e) {
                console.error("error in synchronizing this account sequence number with the one on chain", e);
            } finally{
                this.lock = !1;
            }
        }
    }
};
;
var Bs = "fulfilled", zs = ((o)=>(o.TransactionSent = "transactionSent", o.TransactionSendFailed = "transactionSendFailed", o.TransactionExecuted = "transactionExecuted", o.TransactionExecutionFailed = "transactionExecutionFailed", o.ExecutionFinish = "executionFinish", o))(zs || {}), tr = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$eventemitter3$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"] {
    constructor(t, r, i = 30, o = 100, s = 10){
        super();
        this.taskQueue = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$A5L76YP7$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"];
        this.transactionsQueue = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$A5L76YP7$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"];
        this.outstandingTransactions = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$A5L76YP7$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"];
        this.sentTransactions = [];
        this.executedTransactions = [];
        this.aptosConfig = t, this.account = r, this.started = !1, this.accountSequnceNumber = new er(t, r, i, o, s);
    }
    async submitNextTransaction() {
        try {
            for(;;){
                let t = await this.accountSequnceNumber.nextSequenceNumber();
                if (t === null) return;
                let r = await this.generateNextTransaction(this.account, t);
                if (!r) return;
                let i = Ze({
                    aptosConfig: this.aptosConfig,
                    transaction: r,
                    signer: this.account
                });
                await this.outstandingTransactions.enqueue([
                    i,
                    t
                ]);
            }
        } catch (t) {
            if (t instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$A5L76YP7$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"]) return;
            throw new Error(`Submit transaction failed for ${this.account.accountAddress.toString()} with error ${t}`);
        }
    }
    async processTransactions() {
        try {
            for(;;){
                let t = [], r = [], [i, o] = await this.outstandingTransactions.dequeue();
                for(t.push(i), r.push(o); !this.outstandingTransactions.isEmpty();)[i, o] = await this.outstandingTransactions.dequeue(), t.push(i), r.push(o);
                let s = await Promise.allSettled(t);
                for(let a = 0; a < s.length && a < r.length; a += 1){
                    let u = s[a];
                    o = r[a], u.status === Bs ? (this.sentTransactions.push([
                        u.value.hash,
                        o,
                        null
                    ]), this.emit("transactionSent", {
                        message: `transaction hash ${u.value.hash} has been committed to chain`,
                        transactionHash: u.value.hash
                    }), await this.checkTransaction(u, o)) : (this.sentTransactions.push([
                        u.status,
                        o,
                        u.reason
                    ]), this.emit("transactionSendFailed", {
                        message: `failed to commit transaction ${this.sentTransactions.length} with error ${u.reason}`,
                        error: u.reason
                    }));
                }
                this.emit("executionFinish", {
                    message: `execute ${s.length} transactions finished`
                });
            }
        } catch (t) {
            if (t instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$A5L76YP7$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"]) return;
            throw new Error(`Process execution failed for ${this.account.accountAddress.toString()} with error ${t}`);
        }
    }
    async checkTransaction(t, r) {
        try {
            let i = [];
            i.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$P237G6YB$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["g"])({
                aptosConfig: this.aptosConfig,
                transactionHash: t.value.hash
            }));
            let o = await Promise.allSettled(i);
            for(let s = 0; s < o.length; s += 1){
                let a = o[s];
                a.status === Bs ? (this.executedTransactions.push([
                    a.value.hash,
                    r,
                    null
                ]), this.emit("transactionExecuted", {
                    message: `transaction hash ${a.value.hash} has been executed on chain`,
                    transactionHash: t.value.hash
                })) : (this.executedTransactions.push([
                    a.status,
                    r,
                    a.reason
                ]), this.emit("transactionExecutionFailed", {
                    message: `failed to execute transaction ${this.executedTransactions.length} with error ${a.reason}`,
                    error: a.reason
                }));
            }
        } catch (i) {
            throw new Error(`Check transaction failed for ${this.account.accountAddress.toString()} with error ${i}`);
        }
    }
    async push(t, r) {
        this.transactionsQueue.enqueue([
            t,
            r
        ]);
    }
    async generateNextTransaction(t, r) {
        if (this.transactionsQueue.isEmpty()) return;
        let [i, o] = await this.transactionsQueue.dequeue();
        return A({
            aptosConfig: this.aptosConfig,
            sender: t.accountAddress,
            data: i,
            options: {
                ...o,
                accountSequenceNumber: r
            }
        });
    }
    async run() {
        try {
            for(; !this.taskQueue.isCancelled();)await (await this.taskQueue.dequeue())();
        } catch (t) {
            throw new Error(`Unable to start transaction batching: ${t}`);
        }
    }
    start() {
        if (this.started) throw new Error("worker has already started");
        this.started = !0, this.taskQueue.enqueue(()=>this.submitNextTransaction()), this.taskQueue.enqueue(()=>this.processTransactions()), this.run();
    }
    stop() {
        if (this.taskQueue.isCancelled()) throw new Error("worker has already stopped");
        this.started = !1, this.taskQueue.cancel();
    }
};
var nr = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$eventemitter3$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"] {
    constructor(e){
        super(), this.config = e;
    }
    start(e) {
        let { sender: t } = e;
        this.account = t, this.transactionWorker = new tr(this.config, t), this.transactionWorker.start(), this.registerToEvents();
    }
    push(e) {
        let { data: t, options: r } = e;
        for (let i of t)this.transactionWorker.push(i, r);
    }
    registerToEvents() {
        this.transactionWorker.on("transactionSent", async (e)=>{
            this.emit("transactionSent", e);
        }), this.transactionWorker.on("transactionSendFailed", async (e)=>{
            this.emit("transactionSendFailed", e);
        }), this.transactionWorker.on("transactionExecuted", async (e)=>{
            this.emit("transactionExecuted", e);
        }), this.transactionWorker.on("transactionExecutionFailed", async (e)=>{
            this.emit("transactionExecutionFailed", e);
        }), this.transactionWorker.on("executionFinish", async (e)=>{
            this.emit("executionFinish", e);
        });
    }
    forSingleAccount(e) {
        try {
            let { sender: t, data: r, options: i } = e;
            this.start({
                sender: t
            }), this.push({
                data: r,
                options: i
            });
        } catch (t) {
            throw new Error(`failed to submit transactions with error: ${t}`);
        }
    }
};
var Tn = class {
    constructor(e){
        this.config = e, this.build = new Xn(this.config), this.simulate = new jt(this.config), this.submit = new Qt(this.config), this.batch = new nr(this.config);
    }
    async getTransactions(e) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$P237G6YB$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])({
            aptosConfig: this.config,
            ...e
        });
    }
    async getTransactionByVersion(e) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$P237G6YB$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])({
            aptosConfig: this.config,
            ...e
        });
    }
    async getTransactionByHash(e) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$P237G6YB$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"])({
            aptosConfig: this.config,
            ...e
        });
    }
    async isPendingTransaction(e) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$P237G6YB$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["e"])({
            aptosConfig: this.config,
            ...e
        });
    }
    async waitForTransaction(e) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$P237G6YB$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["g"])({
            aptosConfig: this.config,
            ...e
        });
    }
    async getGasPriceEstimation() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$P237G6YB$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])({
            aptosConfig: this.config
        });
    }
    getSigningMessage(e) {
        return fo(e);
    }
    async publishPackageTransaction(e) {
        return bo({
            aptosConfig: this.config,
            ...e
        });
    }
    async rotateAuthKey(e) {
        return Do({
            aptosConfig: this.config,
            ...e
        });
    }
    sign(e) {
        return Qn({
            ...e
        });
    }
    signAsFeePayer(e) {
        return Jn({
            ...e
        });
    }
    async batchTransactionsForSingleAccount(e) {
        try {
            let { sender: t, data: r, options: i } = e;
            this.batch.forSingleAccount({
                sender: t,
                data: r,
                options: i
            });
        } catch (t) {
            throw new Error(`failed to submit transactions with error: ${t}`);
        }
    }
    async signAndSubmitTransaction(e) {
        return Ze({
            aptosConfig: this.config,
            ...e
        });
    }
    async signAndSubmitAsFeePayer(e) {
        return ho({
            aptosConfig: this.config,
            ...e
        });
    }
};
;
async function rr(n) {
    let { aptosConfig: e, jwt: t, ephemeralKeyPair: r, uidKey: i = "sub", derivationPath: o } = n, s = {
        jwt_b64: t,
        epk: r.getPublicKey().bcsToHex().toStringWithoutPrefix(),
        exp_date_secs: r.expiryDateSecs,
        epk_blinder: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].fromHexInput(r.blinder).toStringWithoutPrefix(),
        uid_key: i,
        derivation_path: o
    }, { data: a } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GQ557FEA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["e"])({
        aptosConfig: e,
        path: "fetch",
        body: s,
        originMethod: "getPepper",
        overrides: {
            WITH_CREDENTIALS: !1
        }
    });
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].fromHexInput(a.pepper).toUint8Array();
}
async function Lr(n) {
    let { aptosConfig: e, jwt: t, ephemeralKeyPair: r, pepper: i = await rr(n), uidKey: o = "sub", maxExpHorizonSecs: s = (await Mt({
        aptosConfig: e
    })).maxExpHorizonSecs } = n;
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].fromHexInput(i).toUint8Array().length !== Ne.PEPPER_LENGTH) throw new Error(`Pepper needs to be ${Ne.PEPPER_LENGTH} bytes`);
    let a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jwt$2d$decode$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jwtDecode"])(t);
    if (typeof a.iat != "number") throw new Error("iat was not found");
    if (s < r.expiryDateSecs - a.iat) throw Error(`The EphemeralKeyPair is too long lived.  It's lifespan must be less than ${s}`);
    let u = {
        jwt_b64: t,
        epk: r.getPublicKey().bcsToHex().toStringWithoutPrefix(),
        epk_blinder: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].fromHexInput(r.blinder).toStringWithoutPrefix(),
        exp_date_secs: r.expiryDateSecs,
        exp_horizon_secs: s,
        pepper: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].fromHexInput(i).toStringWithoutPrefix(),
        uid_key: o
    }, { data: d } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GQ557FEA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["f"])({
        aptosConfig: e,
        path: "prove",
        body: u,
        originMethod: "getProof",
        overrides: {
            WITH_CREDENTIALS: !1
        }
    }), l = d.proof, y = new et({
        a: l.a,
        b: l.b,
        c: l.c
    });
    return new ae({
        proof: new Jt(y, 0),
        trainingWheelsSignature: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$WTLQD6MR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].fromHex(d.training_wheels_signature),
        expHorizonSecs: s
    });
}
async function Ns(n) {
    let { aptosConfig: e, jwt: t, jwkAddress: r, uidKey: i, proofFetchCallback: o, pepper: s = await rr(n) } = n, { verificationKey: a, maxExpHorizonSecs: u } = await Mt({
        aptosConfig: e
    }), d = Lr({
        ...n,
        pepper: s,
        maxExpHorizonSecs: u
    }), l = o ? d : await d;
    if (r !== void 0) {
        let g = q.fromJwtAndPepper({
            jwt: t,
            pepper: s,
            jwkAddress: r,
            uidKey: i
        }), f = await $t({
            aptosConfig: e,
            authenticationKey: g.authKey().derivedAddress()
        });
        return mt.create({
            ...n,
            address: f,
            proof: l,
            pepper: s,
            proofFetchCallback: o,
            jwkAddress: r,
            verificationKey: a
        });
    }
    let y = E.fromJwtAndPepper({
        jwt: t,
        pepper: s,
        uidKey: i
    }), p = await $t({
        aptosConfig: e,
        authenticationKey: y.authKey().derivedAddress()
    });
    return Ne.create({
        ...n,
        address: p,
        proof: l,
        pepper: s,
        proofFetchCallback: o,
        verificationKey: a
    });
}
async function Ms(n) {
    let { aptosConfig: e, sender: t, iss: r, options: i } = n, { jwksUrl: o } = n;
    o === void 0 && (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RJ7F4JDV$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["j"].test(r) ? o = "https://www.googleapis.com/service_accounts/v1/jwk/securetoken@system.gserviceaccount.com" : o = r.endsWith("/") ? `${r}.well-known/jwks.json` : `${r}/.well-known/jwks.json`);
    let s;
    try {
        if (s = await fetch(o), !s.ok) throw new Error(`${s.status} ${s.statusText}`);
    } catch (u) {
        let d;
        throw u instanceof Error ? d = `${u.message}` : d = `error unknown - ${u}`, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$6Y6ZO7TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"].fromErrorType({
            type: 14,
            details: `Failed to fetch JWKS at ${o}: ${d}`
        });
    }
    let a = await s.json();
    return A({
        aptosConfig: e,
        sender: t.accountAddress,
        data: {
            function: "0x1::jwks::update_federated_jwk_set",
            functionArguments: [
                r,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$SOJ3OG6X$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"].MoveString(a.keys.map((u)=>u.kid)),
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$SOJ3OG6X$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"].MoveString(a.keys.map((u)=>u.alg)),
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$SOJ3OG6X$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"].MoveString(a.keys.map((u)=>u.e)),
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$SOJ3OG6X$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"].MoveString(a.keys.map((u)=>u.n))
            ]
        },
        options: i
    });
}
var Sn = class {
    constructor(e){
        this.config = e;
    }
    async getPepper(e) {
        return rr({
            aptosConfig: this.config,
            ...e
        });
    }
    async getProof(e) {
        return Lr({
            aptosConfig: this.config,
            ...e
        });
    }
    async deriveKeylessAccount(e) {
        return Ns({
            aptosConfig: this.config,
            ...e
        });
    }
    async updateFederatedKeylessJwkSetTransaction(e) {
        return Ms({
            aptosConfig: this.config,
            ...e
        });
    }
};
async function ja(n) {
    let { aptosConfig: e, options: t } = n, r = {
        query: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$VHNX2NUR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["u"],
        variables: {
            where_condition: t?.where,
            offset: t?.offset,
            limit: t?.limit,
            order_by: t?.orderBy
        }
    };
    return (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$BXRBOMHW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])({
        aptosConfig: e,
        query: r,
        originMethod: "getObjectData"
    })).current_objects;
}
async function Vs(n) {
    let { aptosConfig: e, objectAddress: t, options: r } = n, o = {
        object_address: {
            _eq: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(t).toStringLong()
        }
    };
    return (await ja({
        aptosConfig: e,
        options: {
            ...r,
            where: o
        }
    }))[0];
}
var Pn = class {
    constructor(e){
        this.config = e;
    }
    async getObjectDataByObjectAddress(e) {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$KAYKTT4S$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])({
            config: this.config,
            minimumLedgerVersion: e.minimumLedgerVersion,
            processorType: "objects_processor"
        }), Vs({
            aptosConfig: this.config,
            ...e
        });
    }
};
var W = class {
    constructor(e){
        this.config = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$F2ZTBAJJ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"](e), this.account = new dn(this.config), this.abstraction = new ft(this.config), this.ans = new bn(this.config), this.coin = new pn(this.config), this.digitalAsset = new ln(this.config), this.event = new mn(this.config), this.faucet = new yn(this.config), this.fungibleAsset = new An(this.config), this.general = new fn(this.config), this.staking = new wn(this.config), this.transaction = new Tn(this.config), this.table = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$ARNW34PP$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"](this.config), this.keyless = new Sn(this.config), this.object = new Pn(this.config);
    }
};
function ne(n, e, t) {
    Object.getOwnPropertyNames(e.prototype).forEach((r)=>{
        let i = Object.getOwnPropertyDescriptor(e.prototype, r);
        i && (i.value = function(...o) {
            return this[t][r](...o);
        }, Object.defineProperty(n.prototype, r, i));
    });
}
ne(W, dn, "account");
ne(W, ft, "abstraction");
ne(W, bn, "ans");
ne(W, pn, "coin");
ne(W, ln, "digitalAsset");
ne(W, mn, "event");
ne(W, yn, "faucet");
ne(W, An, "fungibleAsset");
ne(W, fn, "general");
ne(W, wn, "staking");
ne(W, Tn, "transaction");
ne(W, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$ARNW34PP$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"], "table");
ne(W, Sn, "keyless");
ne(W, Pn, "object");
var Ya = 1e7, $r = 120, Xa = 30, ec = 330, tc = 120, nc = 350, rc = 300, ic = 93, Ce = class Ce extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$BYINW7I2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"] {
    constructor(e, t){
        super();
        let r = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].fromHexInput(t).toUint8Array();
        if (r.length !== Ce.ID_COMMITMENT_LENGTH) throw new Error(`Id Commitment length in bytes should be ${Ce.ID_COMMITMENT_LENGTH}`);
        this.iss = e, this.idCommitment = r;
    }
    authKey() {
        let e = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$NJN3EAOM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"];
        return e.serializeU32AsUleb128(3), e.serializeFixedBytes(this.bcsToBytes()), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$6PKBXYG3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"].fromSchemeAndBytes({
            scheme: 2,
            input: e.toUint8Array()
        });
    }
    verifySignature(e) {
        try {
            return Dn({
                ...e,
                publicKey: this
            }), !0;
        } catch (t) {
            if (t instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$6Y6ZO7TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"]) return !1;
            throw t;
        }
    }
    async verifySignatureAsync(e) {
        return hr({
            ...e,
            publicKey: this
        });
    }
    serialize(e) {
        e.serializeStr(this.iss), e.serializeBytes(this.idCommitment);
    }
    static deserialize(e) {
        let t = e.deserializeStr(), r = e.deserializeBytes();
        return new Ce(t, r);
    }
    static load(e) {
        let t = e.deserializeStr(), r = e.deserializeBytes();
        return new Ce(t, r);
    }
    static isPublicKey(e) {
        return e instanceof Ce;
    }
    static create(e) {
        return Hs(e), new Ce(e.iss, Hs(e));
    }
    static fromJwtAndPepper(e) {
        let { jwt: t, pepper: r, uidKey: i = "sub" } = e, o = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jwt$2d$decode$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jwtDecode"])(t);
        if (typeof o.iss != "string") throw new Error("iss was not found");
        if (typeof o.aud != "string") throw new Error("aud was not found or an array of values");
        let s = o[i];
        return Ce.create({
            iss: o.iss,
            uidKey: i,
            uidVal: s,
            aud: o.aud,
            pepper: r
        });
    }
    static isInstance(e) {
        return "iss" in e && typeof e.iss == "string" && "idCommitment" in e && e.idCommitment instanceof Uint8Array;
    }
};
Ce.ID_COMMITMENT_LENGTH = 32;
var E = Ce;
async function hr(n) {
    let { aptosConfig: e, publicKey: t, message: r, signature: i, jwk: o, keylessConfig: s = await Mt({
        aptosConfig: e
    }), options: a } = n;
    try {
        if (!(i instanceof ue)) throw __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$6Y6ZO7TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"].fromErrorType({
            type: 26,
            details: "Not a keyless signature"
        });
        return Dn({
            message: r,
            publicKey: t,
            signature: i,
            jwk: o || await wr({
                aptosConfig: e,
                publicKey: t,
                kid: i.getJwkKid()
            }),
            keylessConfig: s
        }), !0;
    } catch (u) {
        if (a?.throwErrorWithReason) throw u;
        return !1;
    }
}
function Dn(n) {
    let { publicKey: e, message: t, signature: r, keylessConfig: i, jwk: o } = n, { verificationKey: s, maxExpHorizonSecs: a, trainingWheelsPubkey: u } = i;
    if (!(r instanceof ue)) throw __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$6Y6ZO7TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"].fromErrorType({
        type: 26,
        details: "Not a keyless signature"
    });
    if (!(r.ephemeralCertificate.signature instanceof ae)) throw __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$6Y6ZO7TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"].fromErrorType({
        type: 26,
        details: "Unsupported ephemeral certificate variant"
    });
    let d = r.ephemeralCertificate.signature;
    if (!(d.proof.proof instanceof et)) throw __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$6Y6ZO7TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"].fromErrorType({
        type: 26,
        details: "Unsupported proof variant for ZeroKnowledgeSig"
    });
    let l = d.proof.proof;
    if (r.expiryDateSecs < (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$YFFDF22R$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])()) throw __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$6Y6ZO7TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"].fromErrorType({
        type: 27,
        details: "The expiryDateSecs is in the past"
    });
    if (d.expHorizonSecs > a) throw __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$6Y6ZO7TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"].fromErrorType({
        type: 28
    });
    if (!r.ephemeralPublicKey.verifySignature({
        message: t,
        signature: r.ephemeralSignature
    })) throw __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$6Y6ZO7TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"].fromErrorType({
        type: 29
    });
    let y = oc({
        publicKey: e,
        signature: r,
        jwk: o,
        keylessConfig: i
    });
    if (!s.verifyProof({
        publicInputsHash: y,
        groth16Proof: l
    })) throw __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$6Y6ZO7TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"].fromErrorType({
        type: 32
    });
    if (u) {
        if (!d.trainingWheelsSignature) throw __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$6Y6ZO7TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"].fromErrorType({
            type: 30
        });
        let p = new Wr(l, y);
        if (!u.verifySignature({
            message: p.hash(),
            signature: d.trainingWheelsSignature
        })) throw __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$6Y6ZO7TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"].fromErrorType({
            type: 31
        });
    }
}
function oc(n) {
    let { publicKey: e, signature: t, jwk: r, keylessConfig: i } = n, o = e instanceof E ? e : e.keylessPublicKey;
    if (!(t.ephemeralCertificate.signature instanceof ae)) throw new Error("Signature is not a ZeroKnowledgeSig");
    let s = t.ephemeralCertificate.signature, a = [];
    return a.push(...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GOXRBEIJ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])(t.ephemeralPublicKey.toUint8Array(), i.maxCommitedEpkBytes)), a.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GOXRBEIJ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(o.idCommitment)), a.push(t.expiryDateSecs), a.push(s.expHorizonSecs), a.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GOXRBEIJ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(o.iss, i.maxIssValBytes)), s.extraField ? (a.push(1n), a.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GOXRBEIJ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(s.extraField, i.maxExtraFieldBytes))) : (a.push(0n), a.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GOXRBEIJ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(" ", i.maxExtraFieldBytes))), a.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GOXRBEIJ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$base64$2f$base64$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encode"])(t.jwtHeader, !0) + ".", i.maxJwtHeaderB64Bytes)), a.push(r.toScalar()), s.overrideAudVal ? (a.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GOXRBEIJ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(s.overrideAudVal, $r)), a.push(1n)) : (a.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GOXRBEIJ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])("", $r)), a.push(0n)), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GOXRBEIJ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["e"])(a);
}
async function wr(n) {
    let { aptosConfig: e, publicKey: t, kid: r } = n, i = t instanceof E ? t : t.keylessPublicKey, { iss: o } = i, s, a = t instanceof q ? t.jwkAddress : void 0;
    try {
        s = await cc({
            aptosConfig: e,
            jwkAddr: a
        });
    } catch (l) {
        throw __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$6Y6ZO7TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"].fromErrorType({
            type: 24,
            error: l,
            details: `Failed to fetch ${a ? "Federated" : "Patched"}JWKs ${a ? `for address ${a}` : "0x1"}`
        });
    }
    let u = s.get(o);
    if (u === void 0) throw __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$6Y6ZO7TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"].fromErrorType({
        type: 7,
        details: `JWKs for issuer ${o} not found.`
    });
    let d = u.find((l)=>l.kid === r);
    if (d === void 0) throw __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$6Y6ZO7TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"].fromErrorType({
        type: 6,
        details: `JWK with kid '${r}' for issuer '${o}' not found.`
    });
    return d;
}
function Hs(n) {
    let { uidKey: e, uidVal: t, aud: r, pepper: i } = n, o = [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GOXRBEIJ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].fromHexInput(i).toUint8Array()),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GOXRBEIJ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(r, $r),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GOXRBEIJ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(t, ec),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GOXRBEIJ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(e, Xa)
    ];
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GOXRBEIJ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GOXRBEIJ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["e"])(o), E.ID_COMMITMENT_LENGTH);
}
var ue = class n extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$Z6KQX6VX$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"] {
    constructor(e){
        super();
        let { jwtHeader: t, ephemeralCertificate: r, expiryDateSecs: i, ephemeralPublicKey: o, ephemeralSignature: s } = e;
        this.jwtHeader = t, this.ephemeralCertificate = r, this.expiryDateSecs = i, this.ephemeralPublicKey = o, this.ephemeralSignature = s;
    }
    getJwkKid() {
        return dc(this.jwtHeader).kid;
    }
    serialize(e) {
        this.ephemeralCertificate.serialize(e), e.serializeStr(this.jwtHeader), e.serializeU64(this.expiryDateSecs), this.ephemeralPublicKey.serialize(e), this.ephemeralSignature.serialize(e);
    }
    static deserialize(e) {
        let t = Nt.deserialize(e), r = e.deserializeStr(), i = e.deserializeU64(), o = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$WTLQD6MR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"].deserialize(e), s = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$WTLQD6MR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].deserialize(e);
        return new n({
            jwtHeader: r,
            expiryDateSecs: Number(i),
            ephemeralCertificate: t,
            ephemeralPublicKey: o,
            ephemeralSignature: s
        });
    }
    static getSimulationSignature() {
        return new n({
            jwtHeader: "{}",
            ephemeralCertificate: new Nt(new ae({
                proof: new Jt(new et({
                    a: new Uint8Array(32),
                    b: new Uint8Array(64),
                    c: new Uint8Array(32)
                }), 0),
                expHorizonSecs: 0
            }), 0),
            expiryDateSecs: 0,
            ephemeralPublicKey: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$WTLQD6MR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$YQIAWAPY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"](new Uint8Array(32))),
            ephemeralSignature: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$WTLQD6MR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$YQIAWAPY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"](new Uint8Array(64)))
        });
    }
    static isSignature(e) {
        return e instanceof n;
    }
}, Nt = class n extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$Z6KQX6VX$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"] {
    constructor(e, t){
        super(), this.signature = e, this.variant = t;
    }
    toUint8Array() {
        return this.signature.toUint8Array();
    }
    serialize(e) {
        e.serializeU32AsUleb128(this.variant), this.signature.serialize(e);
    }
    static deserialize(e) {
        let t = e.deserializeUleb128AsU32();
        switch(t){
            case 0:
                return new n(ae.deserialize(e), t);
            default:
                throw new Error(`Unknown variant index for EphemeralCertificate: ${t}`);
        }
    }
}, xn = class xn extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$NJN3EAOM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"] {
    constructor(e){
        if (super(), this.data = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].fromHexInput(e).toUint8Array(), this.data.length !== 32) throw new Error("Input needs to be 32 bytes");
    }
    serialize(e) {
        e.serializeFixedBytes(this.data);
    }
    static deserialize(e) {
        let t = e.deserializeFixedBytes(32);
        return new xn(t);
    }
    toArray() {
        let e = this.toProjectivePoint();
        return [
            e.x.toString(),
            e.y.toString(),
            e.pz.toString()
        ];
    }
    toProjectivePoint() {
        let e = new Uint8Array(this.data);
        e.reverse();
        let t = (e[0] & 128) >> 7, { Fp: r } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$bn254$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bn254"].fields, i = r.create(qr(e)), o = r.sqrt(r.add(r.pow(i, 3n), xn.B)), s = r.neg(o), a = o > s == (t === 1) ? o : s;
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$bn254$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bn254"].G1.ProjectivePoint.fromAffine({
            x: i,
            y: a
        });
    }
};
xn.B = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$bn254$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bn254"].fields.Fp.create(3n);
var He = xn;
function qr(n) {
    if (n.length !== 32) throw new Error("Input should be 32 bytes");
    let e = new Uint8Array(n);
    return e[0] = e[0] & 63, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bytesToNumberBE"])(e);
}
var Kn = class Kn extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$NJN3EAOM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"] {
    constructor(e){
        if (super(), this.data = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].fromHexInput(e).toUint8Array(), this.data.length !== 64) throw new Error("Input needs to be 64 bytes");
    }
    serialize(e) {
        e.serializeFixedBytes(this.data);
    }
    static deserialize(e) {
        let t = e.deserializeFixedBytes(64);
        return new Kn(t);
    }
    toArray() {
        let e = this.toProjectivePoint();
        return [
            [
                e.x.c0.toString(),
                e.x.c1.toString()
            ],
            [
                e.y.c0.toString(),
                e.y.c1.toString()
            ],
            [
                e.pz.c0.toString(),
                e.pz.c1.toString()
            ]
        ];
    }
    toProjectivePoint() {
        let e = new Uint8Array(this.data), t = e.slice(0, 32).reverse(), r = e.slice(32, 64).reverse(), i = (r[0] & 128) >> 7, { Fp2: o } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$bn254$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bn254"].fields, s = o.fromBigTuple([
            qr(t),
            qr(r)
        ]), a = o.sqrt(o.add(o.pow(s, 3n), Kn.B)), u = o.neg(a), l = (a.c1 > u.c1 || a.c1 === u.c1 && a.c0 > u.c0) === (i === 1) ? a : u;
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$bn254$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bn254"].G2.ProjectivePoint.fromAffine({
            x: s,
            y: l
        });
    }
};
Kn.B = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$bn254$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bn254"].fields.Fp2.fromBigTuple([
    19485874751759354771024239261021720505790618469301721065564631296452457478373n,
    266929791119991161246907387137283842545076965332900288569378510910307636690n
]);
var ht = Kn, et = class n extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$OYUW6ZN2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"] {
    constructor(e){
        super();
        let { a: t, b: r, c: i } = e;
        this.a = new He(t), this.b = new ht(r), this.c = new He(i);
    }
    serialize(e) {
        this.a.serialize(e), this.b.serialize(e), this.c.serialize(e);
    }
    static deserialize(e) {
        let t = He.deserialize(e).bcsToBytes(), r = ht.deserialize(e).bcsToBytes(), i = He.deserialize(e).bcsToBytes();
        return new n({
            a: t,
            b: r,
            c: i
        });
    }
    toSnarkJsJson() {
        return {
            protocol: "groth16",
            curve: "bn128",
            pi_a: this.a.toArray(),
            pi_b: this.b.toArray(),
            pi_c: this.c.toArray()
        };
    }
}, Wr = class n extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$NJN3EAOM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"] {
    constructor(t, r){
        super();
        this.domainSeparator = "APTOS::Groth16ProofAndStatement";
        if (this.proof = t, this.publicInputsHash = typeof r == "bigint" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GOXRBEIJ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"])(r, 32) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].fromHexInput(r).toUint8Array(), this.publicInputsHash.length !== 32) throw new Error("Invalid public inputs hash");
    }
    serialize(t) {
        this.proof.serialize(t), t.serializeFixedBytes(this.publicInputsHash);
    }
    static deserialize(t) {
        return new n(et.deserialize(t), t.deserializeFixedBytes(32));
    }
    hash() {
        return Je(this.bcsToBytes(), this.domainSeparator);
    }
}, Jt = class n extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$NJN3EAOM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"] {
    constructor(e, t){
        super(), this.proof = e, this.variant = t;
    }
    serialize(e) {
        e.serializeU32AsUleb128(this.variant), this.proof.serialize(e);
    }
    static deserialize(e) {
        let t = e.deserializeUleb128AsU32();
        switch(t){
            case 0:
                return new n(et.deserialize(e), t);
            default:
                throw new Error(`Unknown variant index for ZkProof: ${t}`);
        }
    }
}, ae = class n extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$Z6KQX6VX$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"] {
    constructor(e){
        super();
        let { proof: t, expHorizonSecs: r, trainingWheelsSignature: i, extraField: o, overrideAudVal: s } = e;
        this.proof = t, this.expHorizonSecs = r, this.trainingWheelsSignature = i, this.extraField = o, this.overrideAudVal = s;
    }
    static fromBytes(e) {
        return n.deserialize(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$JGFKIUG5$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"](e));
    }
    serialize(e) {
        this.proof.serialize(e), e.serializeU64(this.expHorizonSecs), e.serializeOption(this.extraField), e.serializeOption(this.overrideAudVal), e.serializeOption(this.trainingWheelsSignature);
    }
    static deserialize(e) {
        let t = Jt.deserialize(e), r = Number(e.deserializeU64()), i = e.deserializeOption("string"), o = e.deserializeOption("string"), s = e.deserializeOption(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$WTLQD6MR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"]);
        return new n({
            proof: t,
            expHorizonSecs: r,
            trainingWheelsSignature: s,
            extraField: i,
            overrideAudVal: o
        });
    }
}, jr = class n {
    constructor(e){
        let { verificationKey: t, trainingWheelsPubkey: r, maxExpHorizonSecs: i = Ya, maxExtraFieldBytes: o = nc, maxJwtHeaderB64Bytes: s = rc, maxIssValBytes: a = tc, maxCommitedEpkBytes: u = ic } = e;
        this.verificationKey = t, this.maxExpHorizonSecs = i, r && (this.trainingWheelsPubkey = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$WTLQD6MR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$YQIAWAPY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"](r))), this.maxExtraFieldBytes = o, this.maxJwtHeaderB64Bytes = s, this.maxIssValBytes = a, this.maxCommitedEpkBytes = u;
    }
    static create(e, t) {
        return new n({
            verificationKey: new Qr({
                alphaG1: e.alpha_g1,
                betaG2: e.beta_g2,
                deltaG2: e.delta_g2,
                gammaAbcG1: e.gamma_abc_g1,
                gammaG2: e.gamma_g2
            }),
            maxExpHorizonSecs: Number(t.max_exp_horizon_secs),
            trainingWheelsPubkey: t.training_wheels_pubkey.vec[0],
            maxExtraFieldBytes: t.max_extra_field_bytes,
            maxJwtHeaderB64Bytes: t.max_jwt_header_b64_bytes,
            maxIssValBytes: t.max_iss_val_bytes,
            maxCommitedEpkBytes: t.max_commited_epk_bytes
        });
    }
}, Qr = class n {
    constructor(e){
        let { alphaG1: t, betaG2: r, deltaG2: i, gammaAbcG1: o, gammaG2: s } = e;
        this.alphaG1 = new He(t), this.betaG2 = new ht(r), this.deltaG2 = new ht(i), this.gammaAbcG1 = [
            new He(o[0]),
            new He(o[1])
        ], this.gammaG2 = new ht(s);
    }
    hash() {
        let e = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$NJN3EAOM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"];
        return this.serialize(e), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$sha3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sha3_256"].create().update(e.toUint8Array()).digest();
    }
    serialize(e) {
        this.alphaG1.serialize(e), this.betaG2.serialize(e), this.deltaG2.serialize(e), this.gammaAbcG1[0].serialize(e), this.gammaAbcG1[1].serialize(e), this.gammaG2.serialize(e);
    }
    static fromGroth16VerificationKeyResponse(e) {
        return new n({
            alphaG1: e.alpha_g1,
            betaG2: e.beta_g2,
            deltaG2: e.delta_g2,
            gammaAbcG1: e.gamma_abc_g1,
            gammaG2: e.gamma_g2
        });
    }
    verifyProof(e) {
        let { publicInputsHash: t, groth16Proof: r } = e;
        try {
            let i = r.a.toProjectivePoint(), o = r.b.toProjectivePoint(), s = r.c.toProjectivePoint(), a = this.alphaG1.toProjectivePoint(), u = this.betaG2.toProjectivePoint(), d = this.gammaG2.toProjectivePoint(), l = this.deltaG2.toProjectivePoint(), y = this.gammaAbcG1.map(($e)=>$e.toProjectivePoint()), { Fp12: p } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$bn254$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bn254"].fields, g = y[0].add(y[1].multiply(t)), f = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$bn254$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bn254"].pairing(g, d), C = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$bn254$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bn254"].pairing(i, o), M = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$bn254$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bn254"].pairing(a, u), Ee = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$bn254$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bn254"].pairing(s, l), Le = p.mul(M, p.mul(f, Ee));
            return p.eql(C, Le);
        } catch (i) {
            throw __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$6Y6ZO7TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"].fromErrorType({
                type: 32,
                error: i,
                details: "Error encountered when checking zero knowledge relation"
            });
        }
    }
    toSnarkJsJson() {
        return {
            protocol: "groth16",
            curve: "bn128",
            nPublic: 1,
            vk_alpha_1: this.alphaG1.toArray(),
            vk_beta_2: this.betaG2.toArray(),
            vk_gamma_2: this.gammaG2.toArray(),
            vk_delta_2: this.deltaG2.toArray(),
            IC: this.gammaAbcG1.map((e)=>e.toArray())
        };
    }
};
async function Mt(n) {
    let { aptosConfig: e } = n;
    try {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$YOZBVVKL$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(async ()=>{
            let [t, r] = await Promise.all([
                sc(n),
                ac(n)
            ]);
            return jr.create(r, t);
        }, `keyless-configuration-${e.network}`, 1e3 * 60 * 5)();
    } catch (t) {
        throw t instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$6Y6ZO7TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"] ? t : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$6Y6ZO7TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"].fromErrorType({
            type: 25,
            error: t
        });
    }
}
function ze(n) {
    let { jwt: e, uidKey: t = "sub" } = n, r;
    try {
        r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jwt$2d$decode$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jwtDecode"])(e);
    } catch (o) {
        throw __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$6Y6ZO7TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"].fromErrorType({
            type: 12,
            details: `Failed to parse JWT - ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$YFFDF22R$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])(o)}`
        });
    }
    if (typeof r.iss != "string") throw __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$6Y6ZO7TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"].fromErrorType({
        type: 12,
        details: "JWT is missing 'iss' in the payload. This should never happen."
    });
    if (typeof r.aud != "string") throw __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$6Y6ZO7TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"].fromErrorType({
        type: 12,
        details: "JWT is missing 'aud' in the payload or 'aud' is an array of values."
    });
    let i = r[t];
    return {
        iss: r.iss,
        aud: r.aud,
        uidVal: i
    };
}
async function sc(n) {
    let { aptosConfig: e, options: t } = n, r = "0x1::keyless_account::Configuration";
    try {
        let { data: i } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GJ7STZEW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])({
            aptosConfig: e,
            originMethod: "getKeylessConfigurationResource",
            path: `accounts/${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from("0x1").toString()}/resource/${r}`,
            params: {
                ledger_version: t?.ledgerVersion
            }
        });
        return i.data;
    } catch (i) {
        throw __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$6Y6ZO7TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"].fromErrorType({
            type: 22,
            error: i
        });
    }
}
async function ac(n) {
    let { aptosConfig: e, options: t } = n, r = "0x1::keyless_account::Groth16VerificationKey";
    try {
        let { data: i } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GJ7STZEW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])({
            aptosConfig: e,
            originMethod: "getGroth16VerificationKeyResource",
            path: `accounts/${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from("0x1").toString()}/resource/${r}`,
            params: {
                ledger_version: t?.ledgerVersion
            }
        });
        return i.data;
    } catch (i) {
        throw __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$6Y6ZO7TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"].fromErrorType({
            type: 23,
            error: i
        });
    }
}
async function cc(n) {
    let { aptosConfig: e, jwkAddr: t, options: r } = n, i;
    if (t) {
        let s = "0x1::jwks::FederatedJWKs", { data: a } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GJ7STZEW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])({
            aptosConfig: e,
            originMethod: "getKeylessJWKs",
            path: `accounts/${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].from(t).toString()}/resource/${s}`,
            params: {
                ledger_version: r?.ledgerVersion
            }
        });
        i = a;
    } else {
        let s = "0x1::jwks::PatchedJWKs", { data: a } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GJ7STZEW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])({
            aptosConfig: e,
            originMethod: "getKeylessJWKs",
            path: `accounts/0x1/resource/${s}`,
            params: {
                ledger_version: r?.ledgerVersion
            }
        });
        i = a;
    }
    let o = new Map;
    for (let s of i.data.jwks.entries){
        let a = [];
        for (let u of s.jwks){
            let { data: d } = u.variant, l = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$JGFKIUG5$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].fromHexInput(d).toUint8Array()), y = Jr.deserialize(l);
            a.push(y);
        }
        o.set((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(s.issuer), a);
    }
    return o;
}
var Jr = class n extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$NJN3EAOM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"] {
    constructor(e){
        super();
        let { kid: t, kty: r, alg: i, e: o, n: s } = e;
        this.kid = t, this.kty = r, this.alg = i, this.e = o, this.n = s;
    }
    serialize(e) {
        e.serializeStr(this.kid), e.serializeStr(this.kty), e.serializeStr(this.alg), e.serializeStr(this.e), e.serializeStr(this.n);
    }
    static fromMoveStruct(e) {
        let { data: t } = e.variant, r = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$JGFKIUG5$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].fromHexInput(t).toUint8Array());
        return n.deserialize(r);
    }
    toScalar() {
        if (this.alg !== "RS256") throw __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$6Y6ZO7TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"].fromErrorType({
            type: 32,
            details: "Failed to convert JWK to scalar when calculating the public inputs hash. Only RSA 256 is supported currently"
        });
        let e = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$YFFDF22R$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["f"])(this.n), r = uc(e.reverse()).map((i)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GOXRBEIJ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(i));
        return r.push(256n), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GOXRBEIJ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["e"])(r);
    }
    static deserialize(e) {
        let t = e.deserializeStr(), r = e.deserializeStr(), i = e.deserializeStr(), o = e.deserializeStr(), s = e.deserializeStr();
        return new n({
            kid: t,
            kty: r,
            alg: i,
            n: s,
            e: o
        });
    }
};
function uc(n) {
    let e = [];
    for(let t = 0; t < n.length; t += 24){
        let r = n.slice(t, Math.min(t + 24, n.length));
        if (r.length < 24) {
            let i = new Uint8Array(24);
            i.set(r), e.push(i);
        } else e.push(r);
    }
    return e;
}
function dc(n) {
    try {
        let e = JSON.parse(n);
        if (e.kid === void 0) throw new Error("JWT header missing kid");
        return e;
    } catch  {
        throw new Error("Failed to parse JWT header.");
    }
}
;
 //# sourceMappingURL=chunk-TAEOFYOF.mjs.map
}}),
"[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-UYVPNUH3.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
//# sourceMappingURL=chunk-UYVPNUH3.mjs.map
__turbopack_context__.s({});
}}),
"[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-G3MHXDYA.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
//# sourceMappingURL=chunk-G3MHXDYA.mjs.map
__turbopack_context__.s({});
}}),
"[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-NECL5FCQ.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
//# sourceMappingURL=chunk-NECL5FCQ.mjs.map
__turbopack_context__.s({});
}}),
"[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-4QMXOWHP.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
//# sourceMappingURL=chunk-4QMXOWHP.mjs.map
__turbopack_context__.s({});
}}),
"[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-KJH4KKG6.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "a": (()=>l)
});
var l = ((e)=>(e[e.V1 = 0] = "V1", e[e.DerivableV1 = 1] = "DerivableV1", e))(l || {});
;
 //# sourceMappingURL=chunk-KJH4KKG6.mjs.map
}}),
"[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-V3MBJJTL.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
//# sourceMappingURL=chunk-V3MBJJTL.mjs.map
__turbopack_context__.s({});
}}),
"[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-7ECCT6PK.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
//# sourceMappingURL=chunk-7ECCT6PK.mjs.map
__turbopack_context__.s({});
}}),
"[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-HGLO5LDS.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
//# sourceMappingURL=chunk-HGLO5LDS.mjs.map
__turbopack_context__.s({});
}}),
"[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-FZY4PMEE.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
//# sourceMappingURL=chunk-FZY4PMEE.mjs.map
__turbopack_context__.s({});
}}),
"[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-4WPQQPUF.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
//# sourceMappingURL=chunk-4WPQQPUF.mjs.map
__turbopack_context__.s({});
}}),
"[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/index.mjs [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$TAEOFYOF$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-TAEOFYOF.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$A5L76YP7$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-A5L76YP7.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$XF6BISPI$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-XF6BISPI.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$UYVPNUH3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-UYVPNUH3.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$G3MHXDYA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-G3MHXDYA.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$3IHKQH5O$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-3IHKQH5O.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$OYH2T6V5$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-OYH2T6V5.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$PRUQZNAP$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-PRUQZNAP.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GOXRBEIJ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-GOXRBEIJ.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$OYUW6ZN2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-OYUW6ZN2.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$V7U5Y4AU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-V7U5Y4AU.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$WTLQD6MR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-WTLQD6MR.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$YQIAWAPY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-YQIAWAPY.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$ROT6S6BM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-ROT6S6BM.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$DPW6ELCQ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-DPW6ELCQ.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$C3Q23D22$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-C3Q23D22.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$W4BSN6SK$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-W4BSN6SK.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$NECL5FCQ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-NECL5FCQ.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$4QMXOWHP$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-4QMXOWHP.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$FBCXUC7J$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-FBCXUC7J.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$BYINW7I2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-BYINW7I2.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$Z6KQX6VX$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-Z6KQX6VX.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$KJH4KKG6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-KJH4KKG6.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$V3MBJJTL$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-V3MBJJTL.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$6PKBXYG3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-6PKBXYG3.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$ARNW34PP$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-ARNW34PP.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GLFZJNF3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-GLFZJNF3.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$KAYKTT4S$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-KAYKTT4S.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$P237G6YB$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-P237G6YB.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$YOZBVVKL$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-YOZBVVKL.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$BXRBOMHW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-BXRBOMHW.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$VHNX2NUR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-VHNX2NUR.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$7ECCT6PK$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-7ECCT6PK.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GJ7STZEW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-GJ7STZEW.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GQ557FEA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-GQ557FEA.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$25O4L7YR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-25O4L7YR.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$HGLO5LDS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-HGLO5LDS.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$TUZHLTDU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-TUZHLTDU.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$FZY4PMEE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-FZY4PMEE.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$IXYGZ57N$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-IXYGZ57N.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$WLUXOUZH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-WLUXOUZH.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$SOJ3OG6X$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-SOJ3OG6X.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$C6JRJNK3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-C6JRJNK3.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$JGFKIUG5$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-JGFKIUG5.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$6Y6ZO7TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-6Y6ZO7TS.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$YFFDF22R$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-YFFDF22R.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$BUUV6B4P$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-BUUV6B4P.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-GYVSI3TS.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$3OLFJ65O$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-3OLFJ65O.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$4WPQQPUF$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-4WPQQPUF.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$ODAAZLPK$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-ODAAZLPK.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$NJN3EAOM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-NJN3EAOM.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$56CNRT2K$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-56CNRT2K.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-STY74NUA.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$IF4UU2MT$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-IF4UU2MT.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$F2ZTBAJJ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-F2ZTBAJJ.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$4RXKALLC$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-4RXKALLC.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RJ7F4JDV$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-RJ7F4JDV.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$L33JDCWL$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-L33JDCWL.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$KDMSOCZY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-KDMSOCZY.mjs [app-client] (ecmascript)");
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
;
;
;
;
;
;
 //# sourceMappingURL=index.mjs.map
}}),
"[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/index.mjs [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$TAEOFYOF$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-TAEOFYOF.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$A5L76YP7$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-A5L76YP7.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$XF6BISPI$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-XF6BISPI.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$UYVPNUH3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-UYVPNUH3.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$G3MHXDYA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-G3MHXDYA.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$3IHKQH5O$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-3IHKQH5O.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$OYH2T6V5$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-OYH2T6V5.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$PRUQZNAP$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-PRUQZNAP.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GOXRBEIJ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-GOXRBEIJ.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$OYUW6ZN2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-OYUW6ZN2.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$V7U5Y4AU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-V7U5Y4AU.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$WTLQD6MR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-WTLQD6MR.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$YQIAWAPY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-YQIAWAPY.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$ROT6S6BM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-ROT6S6BM.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$DPW6ELCQ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-DPW6ELCQ.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$C3Q23D22$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-C3Q23D22.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$W4BSN6SK$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-W4BSN6SK.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$NECL5FCQ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-NECL5FCQ.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$4QMXOWHP$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-4QMXOWHP.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$FBCXUC7J$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-FBCXUC7J.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$BYINW7I2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-BYINW7I2.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$Z6KQX6VX$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-Z6KQX6VX.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$KJH4KKG6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-KJH4KKG6.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$V3MBJJTL$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-V3MBJJTL.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$6PKBXYG3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-6PKBXYG3.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$ARNW34PP$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-ARNW34PP.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GLFZJNF3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-GLFZJNF3.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$KAYKTT4S$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-KAYKTT4S.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$P237G6YB$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-P237G6YB.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$YOZBVVKL$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-YOZBVVKL.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$BXRBOMHW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-BXRBOMHW.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$VHNX2NUR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-VHNX2NUR.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$7ECCT6PK$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-7ECCT6PK.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GJ7STZEW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-GJ7STZEW.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GQ557FEA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-GQ557FEA.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$25O4L7YR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-25O4L7YR.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$HGLO5LDS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-HGLO5LDS.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$TUZHLTDU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-TUZHLTDU.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$FZY4PMEE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-FZY4PMEE.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$IXYGZ57N$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-IXYGZ57N.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$WLUXOUZH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-WLUXOUZH.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$SOJ3OG6X$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-SOJ3OG6X.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$C6JRJNK3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-C6JRJNK3.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$JGFKIUG5$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-JGFKIUG5.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$6Y6ZO7TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-6Y6ZO7TS.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$YFFDF22R$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-YFFDF22R.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$BUUV6B4P$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-BUUV6B4P.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-GYVSI3TS.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$3OLFJ65O$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-3OLFJ65O.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$4WPQQPUF$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-4WPQQPUF.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$ODAAZLPK$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-ODAAZLPK.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$NJN3EAOM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-NJN3EAOM.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$56CNRT2K$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-56CNRT2K.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$STY74NUA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-STY74NUA.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$IF4UU2MT$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-IF4UU2MT.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$F2ZTBAJJ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-F2ZTBAJJ.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$4RXKALLC$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-4RXKALLC.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$RJ7F4JDV$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-RJ7F4JDV.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$L33JDCWL$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-L33JDCWL.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$KDMSOCZY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-KDMSOCZY.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/index.mjs [app-client] (ecmascript) <locals>");
}}),
"[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-ODAAZLPK.mjs [app-client] (ecmascript) <export E as SigningScheme>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "SigningScheme": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$ODAAZLPK$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["E"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$ODAAZLPK$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-ODAAZLPK.mjs [app-client] (ecmascript)");
}}),
"[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-V7U5Y4AU.mjs [app-client] (ecmascript) <export a as Secp256k1PublicKey>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Secp256k1PublicKey": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$V7U5Y4AU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$V7U5Y4AU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-V7U5Y4AU.mjs [app-client] (ecmascript)");
}}),
"[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-V7U5Y4AU.mjs [app-client] (ecmascript) <export c as Secp256k1Signature>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Secp256k1Signature": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$V7U5Y4AU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$V7U5Y4AU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-V7U5Y4AU.mjs [app-client] (ecmascript)");
}}),
"[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-TAEOFYOF.mjs [app-client] (ecmascript) <export K as AccountAuthenticatorSingleKey>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "AccountAuthenticatorSingleKey": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$TAEOFYOF$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["K"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$TAEOFYOF$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-TAEOFYOF.mjs [app-client] (ecmascript)");
}}),
"[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-TAEOFYOF.mjs [app-client] (ecmascript) <export A as AnyPublicKey>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "AnyPublicKey": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$TAEOFYOF$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["A"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$TAEOFYOF$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-TAEOFYOF.mjs [app-client] (ecmascript)");
}}),
"[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-TAEOFYOF.mjs [app-client] (ecmascript) <export B as AnySignature>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "AnySignature": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$TAEOFYOF$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["B"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$TAEOFYOF$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-TAEOFYOF.mjs [app-client] (ecmascript)");
}}),
"[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-GYVSI3TS.mjs [app-client] (ecmascript) <export b as AccountAddress>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "AccountAddress": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$GYVSI3TS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-GYVSI3TS.mjs [app-client] (ecmascript)");
}}),
"[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-YQIAWAPY.mjs [app-client] (ecmascript) <export b as Ed25519PublicKey>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Ed25519PublicKey": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$YQIAWAPY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$YQIAWAPY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-YQIAWAPY.mjs [app-client] (ecmascript)");
}}),
"[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-TAEOFYOF.mjs [app-client] (ecmascript) <export F as MultiEd25519PublicKey>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "MultiEd25519PublicKey": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$TAEOFYOF$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["F"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$TAEOFYOF$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-TAEOFYOF.mjs [app-client] (ecmascript)");
}}),
"[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-TAEOFYOF.mjs [app-client] (ecmascript) <export D as MultiKey>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "MultiKey": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$TAEOFYOF$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["D"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$TAEOFYOF$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-TAEOFYOF.mjs [app-client] (ecmascript)");
}}),
"[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-NJN3EAOM.mjs [app-client] (ecmascript) <export a as Serializable>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Serializable": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$NJN3EAOM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$atomrigslab$2f$aptos$2d$wallet$2d$adapter$2f$node_modules$2f40$aptos$2d$labs$2f$ts$2d$sdk$2f$dist$2f$esm$2f$chunk$2d$NJN3EAOM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@atomrigslab/aptos-wallet-adapter/node_modules/@aptos-labs/ts-sdk/dist/esm/chunk-NJN3EAOM.mjs [app-client] (ecmascript)");
}}),
}]);

//# sourceMappingURL=1fb61_%40aptos-labs_ts-sdk_dist_esm_0cf77907._.js.map
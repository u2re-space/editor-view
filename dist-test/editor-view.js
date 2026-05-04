//#region \0rolldown/runtime.js
var e = Object.defineProperty, t = (t, n) => {
	let r = {};
	for (var i in t) e(r, i, {
		get: t[i],
		enumerable: !0
	});
	return n || e(r, Symbol.toStringTag, { value: "Module" }), r;
}, n = /* @__PURE__ */ new Set();
[
	{
		name: "--screen-width",
		syntax: "<length-percentage>",
		inherits: !0,
		initialValue: "0px"
	},
	{
		name: "--screen-height",
		syntax: "<length-percentage>",
		inherits: !0,
		initialValue: "0px"
	},
	{
		name: "--visual-width",
		syntax: "<length-percentage>",
		inherits: !0,
		initialValue: "0px"
	},
	{
		name: "--visual-height",
		syntax: "<length-percentage>",
		inherits: !0,
		initialValue: "0px"
	},
	{
		name: "--clip-ampl",
		syntax: "<number>",
		inherits: !0,
		initialValue: "0"
	},
	{
		name: "--clip-freq",
		syntax: "<number>",
		inherits: !0,
		initialValue: "0"
	},
	{
		name: "--avail-width",
		syntax: "<length-percentage>",
		inherits: !0,
		initialValue: "0px"
	},
	{
		name: "--avail-height",
		syntax: "<length-percentage>",
		inherits: !0,
		initialValue: "0px"
	},
	{
		name: "--pixel-ratio",
		syntax: "<number>",
		inherits: !0,
		initialValue: "1"
	},
	{
		name: "--percent",
		syntax: "<number>",
		inherits: !0,
		initialValue: "0"
	},
	{
		name: "--percent-x",
		syntax: "<number>",
		inherits: !0,
		initialValue: "0"
	},
	{
		name: "--percent-y",
		syntax: "<number>",
		inherits: !0,
		initialValue: "0"
	},
	{
		name: "--scroll-left",
		syntax: "<number>",
		inherits: !0,
		initialValue: "0"
	},
	{
		name: "--scroll-top",
		syntax: "<number>",
		inherits: !0,
		initialValue: "0"
	},
	{
		name: "--drag-x",
		syntax: "<length>",
		inherits: !1,
		initialValue: "0px"
	},
	{
		name: "--drag-y",
		syntax: "<length>",
		inherits: !1,
		initialValue: "0px"
	},
	{
		name: "--grid-r",
		syntax: "<number>",
		inherits: !1,
		initialValue: "0"
	},
	{
		name: "--grid-c",
		syntax: "<number>",
		inherits: !1,
		initialValue: "0"
	},
	{
		name: "--resize-x",
		syntax: "<length>",
		inherits: !1,
		initialValue: "0px"
	},
	{
		name: "--resize-y",
		syntax: "<length>",
		inherits: !1,
		initialValue: "0px"
	},
	{
		name: "--shift-x",
		syntax: "<length>",
		inherits: !1,
		initialValue: "0px"
	},
	{
		name: "--shift-y",
		syntax: "<length>",
		inherits: !1,
		initialValue: "0px"
	},
	{
		name: "--cs-grid-r",
		syntax: "<number>",
		inherits: !1,
		initialValue: "0"
	},
	{
		name: "--cs-grid-c",
		syntax: "<number>",
		inherits: !1,
		initialValue: "0"
	},
	{
		name: "--cs-p-grid-r",
		syntax: "<number>",
		inherits: !1,
		initialValue: "0"
	},
	{
		name: "--cs-p-grid-c",
		syntax: "<number>",
		inherits: !1,
		initialValue: "0"
	},
	{
		name: "--os-grid-r",
		syntax: "<number>",
		inherits: !1,
		initialValue: "0"
	},
	{
		name: "--os-grid-c",
		syntax: "<number>",
		inherits: !1,
		initialValue: "0"
	},
	{
		name: "--rv-grid-r",
		syntax: "<number>",
		inherits: !1,
		initialValue: "0"
	},
	{
		name: "--rv-grid-c",
		syntax: "<number>",
		inherits: !1,
		initialValue: "0"
	},
	{
		name: "--cell-x",
		syntax: "<number>",
		inherits: !1,
		initialValue: "0"
	},
	{
		name: "--cell-y",
		syntax: "<number>",
		inherits: !1,
		initialValue: "0"
	}
].forEach((e) => {
	if (typeof CSS > "u" || typeof CSS?.registerProperty != "function") return;
	let t = String(e?.name || "").trim();
	if (!(!t || n.has(t))) try {
		CSS.registerProperty(e);
	} catch (e) {
		String(e?.name || "").toLowerCase() !== "invalidmodificationerror" && console.warn(e);
	} finally {
		n.add(t);
	}
});
//#endregion
//#region ../../projects/core.ts/src/utils/Primitive.ts
var r = Symbol.for("@fix"), i = (e) => Array.isArray(e) || e instanceof Set || e instanceof Map, a = (e) => typeof e == "string" || typeof e == "number" || typeof e == "boolean" || typeof e == "bigint" || e === void 0 || e == null, o = (e, t) => a(e) ? t == "number" ? Number(e) || 0 : t == "string" ? String(e) || "" : t == "boolean" ? !!e : e : null, s = (e, t = "value") => (typeof e == "object" || typeof e == "function") && e != null && (t in e || e?.[t] != null), c = (e) => s(e, "value"), l = (e) => a(e) ? e : c(e) ? e?.value : e, u = (e, t) => e?.[r] ?? e ?? t ?? t, d = (e) => e != null && (typeof e == "object" || typeof e == "function") && (e instanceof WeakRef || typeof e?.deref == "function") ? d(e?.deref?.()) : e, f = (e) => {
	if (typeof e == "function" || e == null) return e;
	let t = function() {};
	return t[r] = e, t;
}, p = (e, t, n) => (e = d(e), e != null && (typeof e == "object" || typeof e == "function") ? e[t] = l(n = d(n)) : e), m = (e) => crypto?.getRandomValues ? crypto?.getRandomValues?.(e) : (() => {
	let t = new Uint8Array(e.length);
	for (let n = 0; n < e.length; n++) t[n] = Math.floor(Math.random() * 256);
	return t;
})(), h = () => crypto?.randomUUID ? crypto?.randomUUID?.() : "10000000-1000-4000-8000-100000000000".replace(/[018]/g, (e) => (e ^ m?.(new Uint8Array(1))?.[0] & 15 >> e / 4).toString(16)), g = (e) => e && e?.replace?.(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(), _ = (e) => e && e?.replace?.(/-([a-z])/g, (e, t) => t.toUpperCase()), v = (e) => typeof CSSStyleValue < "u" && e instanceof CSSStyleValue, y = (e) => e != null && (typeof e == "boolean" ? e !== !1 : !0) && typeof e != "object" && typeof e != "function", b = (e) => typeof e == "boolean" ? e ? "" : null : typeof e == "number" ? String(e) : e, x = Symbol.for("@trigger-lock"), S = (e, t, n = "value") => {
	s(e, n) && (e[x] = !0);
	let r;
	try {
		r = t?.();
	} finally {
		s(e, n) && delete e[x];
	}
	return r;
}, ee = (e) => {
	if (typeof e != "string") return null;
	let t = [...e?.matchAll?.(/^\d+(\.\d+)?$/g)];
	if (t?.length != 1) return null;
	let n = parseFloat(t[0][0]);
	return !Number.isNaN(n) && Number.isFinite(n) ? n : null;
}, te = /^\d+$/g, C = (e) => {
	if (typeof e != "string" || (e = e?.trim?.(), e == "" || e == null)) return null;
	let t = [...e?.matchAll?.(te)];
	if (t?.length != 1) return null;
	let n = parseInt(t[0][0]);
	return !Number.isNaN(n) && Number.isInteger(n) ? n : null;
}, ne = (e) => typeof e == "string" ? C(e) != null : typeof e == "number" && Number.isInteger(e) && e >= 0, w = (e) => Array.isArray(e) || typeof e == "object" && !!e && typeof e[Symbol.iterator] == "function", T = (e, t, n) => {
	e = e instanceof WeakRef ? e.deref() : e;
	let r = [...Object.entries(n)]?.map?.(([n, r]) => e?.[t]?.call?.(e, n, r));
	return () => {
		r?.forEach?.((e) => e?.());
	};
}, re = (e) => e instanceof WeakRef || typeof e?.deref == "function", ie = (e) => e == null || re(e) ? e : typeof e == "function" || typeof e == "object" ? new WeakRef(e) : e, E = (e, t) => e instanceof Promise || typeof e?.then == "function" ? e?.then?.(t) : t?.(e), D = (e, t) => e instanceof Promise || typeof e?.then == "function" ? e?.then?.(t) : t?.(e), ae = function(e) {
	return (t) => {
		e[x] = !0;
		let n;
		try {
			n = t?.();
		} finally {
			e[x] = !1;
		}
		return n;
	};
}, oe = (e) => Array.isArray(e) ? e?.flatMap?.((e) => Array.isArray(e) ? oe(e) : e) : e, se = (e) => oe(e)?.every?.(ce), ce = (e) => a(e) || typeof SharedArrayBuffer == "function" && e instanceof SharedArrayBuffer || le(e) || Array.isArray(e) && se(e), le = (e) => ArrayBuffer.isView(e) && !(e instanceof DataView), ue = (e) => a(e) || typeof ArrayBuffer == "function" && e instanceof ArrayBuffer || typeof MessagePort == "function" && e instanceof MessagePort || typeof ReadableStream == "function" && e instanceof ReadableStream || typeof WritableStream == "function" && e instanceof WritableStream || typeof TransformStream == "function" && e instanceof TransformStream || typeof ImageBitmap == "function" && e instanceof ImageBitmap || typeof VideoFrame == "function" && e instanceof VideoFrame || typeof OffscreenCanvas == "function" && e instanceof OffscreenCanvas || typeof RTCDataChannel == "function" && e instanceof RTCDataChannel || typeof AudioData == "function" && e instanceof AudioData || typeof WebTransportReceiveStream == "function" && e instanceof WebTransportReceiveStream || typeof WebTransportSendStream == "function" && e instanceof WebTransportSendStream || typeof WebTransportReceiveStream == "function" && e instanceof WebTransportReceiveStream, O = (e) => {
	switch (typeof e) {
		case "number": return 0;
		case "string": return "";
		case "boolean": return !1;
		case "object": return null;
		case "function": return null;
		case "symbol": return null;
		case "bigint": return 0n;
	}
}, de = (e) => typeof e?.[Symbol.iterator] == "function", fe = (e) => [
	"symbol",
	"string",
	"number"
].indexOf(typeof e) >= 0, pe = (e, t) => he.getOrInsert(e, /* @__PURE__ */ new WeakMap()).getOrInsert(t, t?.bind?.(e)), k = (e, t) => (typeof t == "function" ? pe(e, t) : t) ?? t, me = (e, t, n, r) => {
	if (t == Symbol.iterator) return A(e, n, r);
	if (t == null || typeof t == "symbol" || typeof t == "object" || typeof t == "function") return;
	let i = (e, ...t) => {
		if (e != null) return n?.(e, ...t);
	};
	if (e instanceof Map || e instanceof WeakMap) {
		if (e.has(t)) return i?.(e.get(t), t, null, "@set");
	} else if (e instanceof Set || e instanceof WeakSet) {
		if (e.has(t)) return i?.(t, t, null, "@add");
	} else if (Array.isArray(e) && typeof t == "string" && [...t?.matchAll?.(/^\d+$/g)]?.length == 1 && Number.isInteger(typeof t == "string" ? parseInt(t) : t)) {
		let n = typeof t == "string" ? parseInt(t) : t;
		return i?.(e?.[n], n, null, "@add");
	} else if (typeof e == "function" || typeof e == "object") return i?.(e?.[t], t, null, "@set");
}, A = (e, t, n) => {
	if (e == null) return;
	let r = [];
	if (e instanceof Set || e instanceof Map || typeof e?.keys == "function") return [...e?.keys?.() || r]?.forEach?.((r) => me(e, r, t, n));
	if (Array.isArray(e) || de(e)) return [...e]?.forEach?.((r, i) => me(e, i, t, n));
	if (typeof e == "object" || typeof e == "function") return [...Object.keys(e) || r]?.forEach?.((r) => me(e, r, t, n));
}, j = (e, t) => e == null && t == null ? !1 : e == null || t == null ? !0 : typeof e == "boolean" && typeof t == "boolean" ? e != t : typeof e == "number" && typeof t == "number" ? !(e == t || Math.abs(e - t) < 1e-9) : typeof e == "string" && typeof t == "string" ? e != "" && t != "" && e != t || e !== t : typeof e == typeof t && e && t && e != t || e !== t, he = /* @__PURE__ */ new WeakMap(), ge = (e, t) => {
	let n = e == null || e < 0 || typeof e != "number" || e == Symbol.iterator || (t == null ? !1 : e >= (t?.length || 0));
	return t == null ? !1 : Array.isArray(t) && n;
}, _e = (e, t, n) => {
	if (Array.isArray(e)) return e.every(ce) ? e.map(t) : e.map((n, r) => _e(n, t, [e, r]));
	if (e instanceof Map) {
		let n = Array.from(e.entries());
		return n.map(([e, t]) => t).every(ce) ? new Map(n.map(([n, r]) => [n, t(r, n, e)])) : new Map(n.map(([n, r]) => [n, _e(r, t, [e, n])]));
	}
	if (e instanceof Set) {
		let n = Array.from(e.entries()), r = n.map(([e, t]) => t);
		return n.every(ce) ? new Set(r.map(t)) : new Set(r.map((n) => _e(n, t, [e, n])));
	}
	if (typeof e == "object" && e?.constructor == Object && Object.prototype.toString.call(e) == "[object Object]") {
		let n = Array.from(Object.entries(e));
		return n.map(([e, t]) => t).every(ce) ? Object.fromEntries(n.map(([n, r]) => [n, t(r, n, e)])) : Object.fromEntries(n.map(([n, r]) => [n, _e(r, t, [e, n])]));
	}
	return t(e, n?.[1] ?? "", n?.[0] ?? null);
}, M = /* @__PURE__ */ new WeakMap(), ve = /* @__PURE__ */ new WeakMap(), ye = (e, t) => e instanceof Promise || typeof e?.then == "function" ? M?.has?.(e) ? t(M?.get?.(e)) : Promise.try?.(async () => {
	let t = await e;
	return M?.set?.(e, t), t;
})?.then?.(t) : t(e), be = class {
	#e;
	#t;
	constructor(e, t) {
		this.#e = e, this.#t = t;
	}
	defineProperty(e, t, n) {
		return u(e) instanceof Promise ? Reflect.defineProperty(e, t, n) : ye(u(e), (e) => Reflect.defineProperty(e, t, n));
	}
	deleteProperty(e, t) {
		return u(e) instanceof Promise ? Reflect.deleteProperty(e, t) : ye(u(e), (e) => Reflect.deleteProperty(e, t));
	}
	getPrototypeOf(e) {
		return u(e) instanceof Promise ? Reflect.getPrototypeOf(e) : ye(u(e), (e) => Reflect.getPrototypeOf(e));
	}
	setPrototypeOf(e, t) {
		return u(e) instanceof Promise ? Reflect.setPrototypeOf(e, t) : ye(u(e), (e) => Reflect.setPrototypeOf(e, t));
	}
	isExtensible(e) {
		return u(e) instanceof Promise ? Reflect.isExtensible(e) : ye(u(e), (e) => Reflect.isExtensible(e));
	}
	preventExtensions(e) {
		return u(e) instanceof Promise ? Reflect.ownKeys(e) : ye(u(e), (e) => Reflect.preventExtensions(e));
	}
	ownKeys(e) {
		let t = u(e);
		return t instanceof Promise ? Object.keys(t) : ye(t, (e) => (typeof e == "object" || typeof e == "function") && e != null ? Object.keys(e) : []) ?? [];
	}
	getOwnPropertyDescriptor(e, t) {
		return u(e) instanceof Promise ? Reflect.getOwnPropertyDescriptor(e, t) : ye(u(e), (e) => Reflect.getOwnPropertyDescriptor(e, t));
	}
	construct(e, t, n) {
		return ye(u(e), (e) => Reflect.construct(e, t, n));
	}
	has(e, t) {
		return u(e) instanceof Promise ? Reflect.has(e, t) : ye(u(e), (e) => Reflect.has(e, t));
	}
	get(e, t, n) {
		if (e = u(e), t == "promise") return e;
		if (t == "resolve" && this.#e) return (...e) => {
			let t = this.#e?.(...e);
			return this.#e = null, t;
		};
		if (t == "reject" && this.#t) return (...e) => {
			let t = this.#t?.(...e);
			return this.#t = null, t;
		};
		if (t == "then" || t == "catch" || t == "finally") {
			if (e instanceof Promise) return e?.[t]?.bind?.(e);
			{
				let n = Promise.try(() => e);
				return n?.[t]?.bind?.(n);
			}
		}
		let r;
		return r = M?.has?.(e) && (r = M?.get?.(e))?.[t] != null ? M?.get?.(e)?.[t] : xe(ye(e, async (r) => {
			if (u(r) instanceof Promise) return Reflect.get(r, t, n);
			if (a(r)) return t == Symbol.toPrimitive || t == Symbol.toStringTag ? r : void 0;
			let i;
			try {
				i = Reflect.get(r, t, n);
			} catch {
				i = e?.[t];
			}
			return typeof i == "function" ? i?.bind?.(r) : i;
		})), t == Symbol.toStringTag ? a(r) ? String(r ?? "") || "" : r?.[Symbol.toStringTag]?.() || String(r ?? "") || "" : t == Symbol.toPrimitive ? (e) => {
			if (a(r)) return o(r, e);
		} : r;
	}
	set(e, t, n) {
		return ye(u(e), (e) => Reflect.set(e, t, n));
	}
	apply(e, t, n) {
		if (this.#e) {
			let e = this.#e?.(...n);
			return this.#e = null, e;
		}
		return ye(u(e, this.#e), (e) => {
			if (typeof e == "function") return u(e) instanceof Promise, Reflect.apply(e, t, n);
		});
	}
};
function xe(e, t, n) {
	return e instanceof Promise || typeof e?.then == "function" ? M?.has?.(e) ? M?.get?.(e) : (ve?.has?.(e) || e?.then?.((t) => M?.set?.(e, t)), ve?.getOrInsertComputed?.(e, () => new Proxy(f(e), new be(t, n)))) : e;
}
//#endregion
//#region ../../projects/dom.ts/src/agate/Utils.ts
var Se = () => {
	let e = {
		canceled: !1,
		rAFs: /* @__PURE__ */ new Set(),
		last: null,
		cancel() {
			return this.canceled = !0, cancelAnimationFrame(this.last), this;
		},
		shedule(e) {
			return this.rAFs.add(e), this;
		}
	};
	return (async () => {
		for (; !e?.canceled;) await Promise.all((e?.rAFs?.values?.() ?? [])?.map?.((e) => Promise.try(e)?.catch?.(console.warn.bind(console)))), e.rAFs?.clear?.(), typeof requestAnimationFrame < "u" ? await new Promise((t) => {
			e.last = requestAnimationFrame(t);
		}) : await new Promise((e) => {
			setTimeout(e, 16);
		});
	})(), e;
};
typeof document < "u" && document?.documentElement;
var Ce = /* @__PURE__ */ new Map();
typeof requestAnimationFrame < "u" && requestAnimationFrame(async () => {
	for (;;) Ce.forEach((e) => e?.()), await new Promise((e) => requestAnimationFrame(e));
});
var we = (e, t, n) => {
	t != null && e.checked != t && (e?.type == "checkbox" || e?.type == "radio" && !e?.checked ? (e?.click?.(), n?.preventDefault?.()) : (e.checked = !!t, e?.dispatchEvent?.(new Event("change", {
		bubbles: !0,
		cancelable: !0
	}))));
}, N = (e) => e != null && e instanceof HTMLElement && !(e instanceof DocumentFragment || e instanceof HTMLBodyElement) ? e : null, Te = (e, t) => e == null || t == null ? -1 : Array.from(e?.childNodes ?? [])?.indexOf?.(t) ?? -1, Ee = (e) => {
	if (e == ":fragment:") return document.createDocumentFragment();
	let t = document.createElement.bind(document);
	for (var n = t("div"), r, i = ""; e && (r = e.match("^(?:(-?[_a-zA-Z]+[_a-zA-Z0-9-]*))|^#(-?[_a-zA-Z]+[_a-zA-Z0-9-]*)|^\\.(-?[_a-zA-Z]+[_a-zA-Z0-9-]*)|^\\[(-?[_a-zA-Z]+[_a-zA-Z0-9-]*)(?:([*$|~^]?=)([\"'])((?:(?=(\\\\?))\\8.)*?)\\6)?\\]"));) r[1] && (n = t(r[1])), r[2] && (n.id = r[2]), r[3] && (i += " " + r[3]), r[4] && n.setAttribute(r[4], r[7] || ""), e = e.slice(r[0].length);
	return i && (n.className = i.slice(1)), n;
}, P = (e) => e != null && (e instanceof Node || e instanceof Text || e instanceof Element || e instanceof Comment || e instanceof HTMLElement || e instanceof DocumentFragment) ? e : null, De = {};
function F(e, t, n, r = De) {
	e?.addEventListener?.(t, n, r);
	let i = typeof e == "object" || typeof e == "function" && !e?.deref ? new WeakRef(e) : e;
	return () => i?.deref?.()?.removeEventListener?.(t, n, r);
}
var Oe = (e, t) => {
	if (t) {
		let n = t;
		return n = t instanceof Map ? [...t.entries()] : [...Object.entries(t)], n.map(([t, n]) => ((w(n) ? [...n] : n) ?? [])?.map?.((n) => F(e, t, n)));
	}
}, ke = (e, t, n) => {
	if (t == null || !(t instanceof Node) && t?.element == null) return !1;
	if (e == t || (e?.element ?? e) == (t?.element ?? t)) return !0;
	if (n?.composedPath && typeof n.composedPath == "function") {
		let r = n.composedPath(), i = e?.element ?? e, a = t?.element ?? t;
		if (r.includes(i) && r.includes(a)) {
			let e = r.indexOf(i), t = r.indexOf(a);
			if (t >= 0 && e >= 0 && t < e) return !0;
		}
	}
	return !!(e?.contains?.(t?.element ?? t) || e?.getRootNode({ composed: !0 })?.host == (t?.element ?? t));
}, Ae = (e, t, n) => {
	if (n?.composedPath && typeof n.composedPath == "function") {
		let e = n.composedPath();
		for (let n of e) if ((n instanceof HTMLElement || n instanceof Element) && n.matches?.(t)) return n;
	}
	let r = e?.matches?.(t) ? e : null, i = (e?.getRootNode({ composed: !0 }) ?? e?.parentElement?.getRootNode({ composed: !0 }))?.host, a = i?.matches?.(t) ? i : null, o = e?.closest?.(t) ?? r?.closest?.(t) ?? a?.closest?.(t) ?? null;
	return r ?? o ?? a;
}, je = /* @__PURE__ */ new WeakMap(), Me = (e = document.documentElement) => je.getOrInsertComputed(e, () => {
	let t = (e?.matches?.(".ui-orientbox") ? e : null) || e?.closest?.(".ui-orientbox") || document.body;
	if (t?.zoom) return t?.zoom || 1;
	if (e?.currentCSSZoom) return e?.currentCSSZoom || 1;
}), Ne = (e = document.documentElement) => (e?.currentCSSZoom == null ? Me(e) : 1) || 1;
(() => {
	let e = typeof matchMedia < "u" ? matchMedia("(orientation: landscape)")?.matches : !1, t = typeof window < "u" ? window.visualViewport : null, n = t ? {
		"--vv-width": `${t.width}px`,
		"--vv-height": `${t.height}px`,
		"--vv-offset-left": `${t.offsetLeft}px`,
		"--vv-offset-top": `${t.offsetTop}px`,
		"--vv-scale": String(t.scale ?? 1)
	} : {
		"--vv-width": typeof window < "u" ? `${window.innerWidth}px` : "0px",
		"--vv-height": typeof window < "u" ? `${window.innerHeight}px` : "0px",
		"--vv-offset-left": "0px",
		"--vv-offset-top": "0px",
		"--vv-scale": "1"
	};
	if (typeof screen < "u") {
		let t = screen?.availWidth + "px", r = screen?.availHeight + "px";
		return {
			"--screen-width": Math.min(screen?.width, screen?.availWidth) + "px",
			"--screen-height": Math.min(screen?.height, screen?.availHeight) + "px",
			"--avail-width": e ? r : t,
			"--avail-height": e ? t : r,
			"--view-height": Math.min(screen?.availHeight, window?.innerHeight) + "px",
			"--pixel-ratio": String(devicePixelRatio || 1),
			...n
		};
	}
	return {
		"--screen-width": "0px",
		"--screen-height": "0px",
		"--avail-width": "0px",
		"--avail-height": "0px",
		"--view-height": "0px",
		"--pixel-ratio": "1",
		...n
	};
})(), new OffscreenCanvas(1, 1).getContext("2d");
//#endregion
//#region ../../projects/dom.ts/src/mixin/Observer.ts
var Pe = (e) => (typeof e?.current == "object" && (e = e?.element ?? e?.current ?? (typeof e?.self == "object" ? e?.self : null) ?? e), e), Fe = (e, t, n) => {
	if (typeof e?.selector == "string") return Ie(e, e?.selector, t, n);
	let r = new Set((t.split(",") || [t]).map((e) => e.trim())), i = new MutationObserver((e, t) => {
		for (let i of e) i.attributeName && r.has(i.attributeName) && n(i, t);
	});
	return (e?.element ?? e) instanceof Node && i.observe(e = Pe(e), {
		attributes: !0,
		attributeOldValue: !0,
		attributeFilter: [...r]
	}), r.forEach((t) => n({
		target: e,
		type: "attributes",
		attributeName: t,
		oldValue: e?.getAttribute?.(t)
	}, i)), i;
}, Ie = (e, t, n, r) => {
	let i = new Set([...n.split(",") || [n]].map((e) => e.trim())), a = new MutationObserver((e, n) => {
		for (let a of e) if (a.type == "childList") {
			let e = Array.from(a.addedNodes) || [], o = Array.from(a.removedNodes) || [];
			e.push(...Array.from(a.addedNodes || []).flatMap((e) => Array.from(e?.querySelectorAll?.(t) || []))), o.push(...Array.from(a.removedNodes || []).flatMap((e) => Array.from(e?.querySelectorAll?.(t) || []))), [...new Set(e)]?.filter((e) => e?.matches?.(t))?.map?.((e) => {
				i.forEach((t) => {
					r({
						target: e,
						type: "attributes",
						attributeName: t,
						oldValue: e?.getAttribute?.(t)
					}, n);
				});
			});
		} else a.target?.matches?.(t) && a.attributeName && i.has(a.attributeName) && r(a, n);
	});
	return a.observe(e = Pe(e), {
		attributeOldValue: !0,
		attributes: !0,
		attributeFilter: [...i],
		childList: !0,
		subtree: !0,
		characterData: !0
	}), [...e.querySelectorAll(t)].map((e) => i.forEach((t) => r({
		target: e,
		type: "attributes",
		attributeName: t,
		oldValue: e?.getAttribute?.(t)
	}, a))), a;
}, Le = (e, t = "*", n = (e, t) => {}) => {
	let r = (e) => {
		let n = Array.from(e || []) || [];
		return n.push(...Array.from(e || []).flatMap((e) => Array.from(e?.querySelectorAll?.(t) || []))), [...Array.from(new Set(n).values())].filter((e) => e?.matches?.(t));
	}, i = (e) => {
		let t = u?.deref?.(), i = r(e.addedNodes), a = r(e.removedNodes);
		(i.length > 0 || a.length > 0) && n?.({
			type: e.type,
			target: e.target,
			attributeName: e.attributeName,
			attributeNamespace: e.attributeNamespace,
			nextSibling: e.nextSibling,
			oldValue: e.oldValue,
			previousSibling: e.previousSibling,
			addedNodes: i,
			removedNodes: a
		}, t);
	}, a = (e) => {
		i({
			addedNodes: [e?.target].filter((e) => !!e),
			removedNodes: [e?.relatedTarget].filter((e) => !!e),
			type: "childList",
			target: e?.currentTarget
		});
	}, o = (e) => {
		i({
			addedNodes: [e?.relatedTarget].filter((e) => !!e),
			removedNodes: [e?.target].filter((e) => !!e),
			type: "childList",
			target: e?.currentTarget
		});
	}, s = (e) => {
		i({
			addedNodes: [e?.target].filter((e) => !!e),
			removedNodes: [e?.relatedTarget || document?.activeElement].filter((e) => !!e),
			type: "childList",
			target: e?.currentTarget
		});
	}, c = {
		passive: !0,
		capture: !1
	};
	if (t?.includes?.(":hover") && t?.includes?.(":active")) return e.addEventListener("pointerover", a, c), e.addEventListener("pointerout", o, c), e.addEventListener("pointerdown", a, c), e.addEventListener("pointerup", o, c), e.addEventListener("pointercancel", o, c), { disconnect: () => {
		e.removeEventListener("pointerover", a, c), e.removeEventListener("pointerout", o, c), e.removeEventListener("pointerdown", a, c), e.removeEventListener("pointerup", o, c), e.removeEventListener("pointercancel", o, c);
	} };
	if (t?.includes?.(":hover")) return e.addEventListener("pointerover", a, c), e.addEventListener("pointerout", o, c), { disconnect: () => {
		e.removeEventListener("pointerover", a, c), e.removeEventListener("pointerout", o, c);
	} };
	if (t?.includes?.(":active")) return e.addEventListener("pointerdown", a, c), e.addEventListener("pointerup", o, c), e.addEventListener("pointercancel", o, c), { disconnect: () => {
		e.removeEventListener("pointerdown", a, c), e.removeEventListener("pointerup", o, c), e.removeEventListener("pointercancel", o, c);
	} };
	if (t?.includes?.(":focus") && t?.includes?.(":focus-within") && t?.includes?.(":focus-visible")) return e.addEventListener("focusin", a, c), e.addEventListener("focusout", o, c), e.addEventListener("click", s, c), { disconnect: () => {
		e.removeEventListener("focusin", a, c), e.removeEventListener("focusout", o, c), e.removeEventListener("click", s, c);
	} };
	let l = new MutationObserver((e, t) => {
		for (let t of e) t.type == "childList" && i(t);
	}), u = new WeakRef(l);
	(e?.element ?? e) instanceof Node && l.observe(e = Pe(e), {
		childList: !0,
		subtree: !0
	});
	let d = Array.from(e.querySelectorAll(t));
	return d.length > 0 && n?.({ addedNodes: d }, l), l;
}, Re = () => typeof globalThis < "u" && typeof globalThis.CSSStyleSheet == "function", ze = (e) => typeof e == "string" && /@import\b/i.test(e), Be = "DOM", Ve = typeof document < "u" ? document.createElement("style") : null;
Ve && (typeof document < "u" && document.querySelector("head")?.appendChild?.(Ve), Ve.dataset.owner = Be);
var He = (e, t, n = "") => {
	e[0][e[1]] = e[1] == "innerHTML" ? `@import url("${t}") ${n && typeof n == "string" ? `layer(${n})` : ""};` : t;
}, Ue = typeof CSSStyleValue < "u" && typeof CSSUnitValue < "u", We = (e) => Ue && e instanceof CSSStyleValue, Ge = (e) => Ue && e instanceof CSSUnitValue, Ke = (e, t, n, r = "") => {
	if (!(!e || !t)) {
		if (n == null) {
			e.getPropertyValue(t) !== "" && e.removeProperty(t);
			return;
		}
		e.getPropertyValue(t) !== n && e.setProperty(t, n, r);
	}
}, qe = (e, t, n, r = "") => {
	if (!e || !t) return e;
	let i = g(t), a = e.style, o = e.attributeStyleMap ?? e.styleMap;
	if (!Ue || !o) return Je(e, t, n, r);
	let s = c(n) && !(We(n) || Ge(n)) ? n?.value : n;
	if (s == null) return o.delete?.(i), a && Ke(a, i, null, r), e;
	if (We(s)) {
		let t = o.get(i);
		if (Ge(s) && Ge(t)) {
			if (t.value === s.value && t.unit === s.unit) return e;
		} else if (t === s) return e;
		return o.set(i, s), e;
	}
	if (typeof s == "number") if (CSS?.number && !i.startsWith("--")) {
		let t = CSS.number(s), n = o.get(i);
		return Ge(n) && n.value === t.value && n.unit === t.unit || o.set(i, t), e;
	} else return Ke(a, i, String(s), r), e;
	if (typeof s == "string" && !We(s)) {
		let t = ee(s);
		if (typeof t == "number" && CSS?.number && !i.startsWith("--")) {
			let n = CSS.number(t), r = o.get(i);
			return Ge(r) && r.value === n.value && r.unit === n.unit || o.set(i, n), e;
		} else return Ke(a, i, s, r), e;
	}
	return Ke(a, i, String(s), r), e;
}, Je = (e, t, n, r = "") => {
	if (!e || !t) return e;
	let i = g(t), a = e.style;
	if (!a) return e;
	let o = c(n) && !(We(n) || Ge(n)) ? n?.value : n;
	return typeof o == "string" && !We(o) && (o = ee(o) ?? o), o == null ? (Ke(a, i, null, r), e) : (We(o), Ke(a, i, String(o), r), e);
}, Ye = (e, t) => typeof e?.then == "function" ? e?.then?.(t) : t(e), Xe = /* @__PURE__ */ new WeakMap(), Ze = /* @__PURE__ */ new Map(), Qe = (e) => {
	if (!e) return null;
	if (Ze.has(e)) return Ze.get(e);
	if (e instanceof Blob || e instanceof File) {
		if (Xe.has(e)) return Xe.get(e);
		let t = URL.createObjectURL(e);
		return Xe.set(e, t), Ze.set(t, t), t;
	}
	if (URL.canParse(e) || e?.trim?.()?.startsWith?.("./")) {
		let t = fetch(e?.replace?.("?url", "?raw"), {
			cache: "force-cache",
			mode: "same-origin",
			priority: "high"
		})?.then?.(async (t) => {
			let n = await t.blob(), r = URL.createObjectURL(n);
			return Xe.set(n, r), Ze.set(e, r), Ze.set(r, r), r;
		});
		return Ze.set(e, t), t;
	}
	if (typeof e == "string") {
		let t = new Blob([e], { type: "text/css" }), n = URL.createObjectURL(t);
		return Xe.set(t, n), Ze.set(n, n), n;
	}
	return e;
}, $e = /* @__PURE__ */ new Map(), et = /* @__PURE__ */ new WeakMap(), tt = (e) => {
	if (!e) return "";
	if ($e.has(e)) return $e.get(e) ?? "";
	if (e instanceof Blob || e instanceof File) {
		if (et.has(e)) return et.get(e) ?? "";
		let t = e?.text?.()?.then?.((t) => (et.set(e, t), t));
		return et.set(e, t), t;
	}
	if (URL.canParse(e) || e?.trim?.()?.startsWith?.("./")) {
		let t = fetch(e?.replace?.("?url", "?raw"), {
			cache: "force-cache",
			mode: "same-origin",
			priority: "high"
		})?.then?.(async (t) => {
			let n = await t.text();
			return $e.set(e, n), n;
		});
		return $e.set(e, t), t;
	}
	return typeof e == "string" && $e.set(e, e), e;
}, nt = /* @__PURE__ */ new Map(), rt = /* @__PURE__ */ new WeakMap(), it = /* @__PURE__ */ new Map(), at = /* @__PURE__ */ new WeakMap(), ot = (e, t = "ux-query", n = null) => {
	if (!e || !Re()) return null;
	let r = n instanceof ShadowRoot ? n : n?.getRootNode ? n.getRootNode({ composed: !0 }) : null, i = r instanceof ShadowRoot, a = i ? r.adoptedStyleSheets : typeof document < "u" ? document.adoptedStyleSheets : null;
	if (!a) return null;
	let o = `${t || ""}:${e}`, s;
	if (i) {
		let e = rt.get(r);
		e || (e = /* @__PURE__ */ new Map(), rt.set(r, e)), s = e.get(o), s || (s = new CSSStyleSheet(), e.set(o, s), a.includes(s) || a.push(s));
	} else s = nt.get(o), s || (s = new CSSStyleSheet(), nt.set(o, s), a.includes(s) || a.push(s));
	if (t) {
		let n;
		if (i) {
			let e = at.get(r);
			e || (e = /* @__PURE__ */ new Map(), at.set(r, e)), n = e.get(t);
		} else n = it.get(t);
		if (!n) {
			let e = Array.from(s.cssRules || []), a = e.findIndex((e) => e instanceof CSSLayerBlockRule && e.name === t);
			if (a === -1) try {
				s.insertRule(`@layer ${t} {}`, s.cssRules.length);
				let e = s.cssRules[s.cssRules.length - 1];
				e instanceof CSSLayerBlockRule && (n = e);
			} catch {
				n = void 0;
			}
			else n = e[a];
			if (n) if (i) {
				let e = at.get(r);
				e || (e = /* @__PURE__ */ new Map(), at.set(r, e)), e.set(t, n);
			} else it.set(t, n);
		}
		if (n) {
			let t = Array.from(n.cssRules || []).findIndex((t) => t instanceof CSSStyleRule && t.selectorText?.trim?.() === e?.trim?.());
			if (t === -1) try {
				t = n.insertRule(`${e} {}`, n.cssRules.length);
			} catch {
				return null;
			}
			return n.cssRules[t];
		}
	}
	let c = Array.from(s.cssRules || []).findIndex((t) => t instanceof CSSStyleRule && t.selectorText?.trim?.() === e?.trim?.());
	if (c === -1) try {
		c = s.insertRule(`${e} {}`, s.cssRules.length);
	} catch {
		return null;
	}
	let l = s.cssRules[c];
	return l instanceof CSSStyleRule ? l : null;
}, st = (e, t, n, r = "") => Ue ? qe(e, t, n, r) : Je(e, t, n, r), ct = (e, t, n = "", r) => {
	let i = Qe(e), a = typeof e == "string" && URL.canParse(e) ? e : i;
	return t?.[0] && (t[0].fetchPriority = "high"), t && a && typeof a == "string" && He(t, a, n), t?.[0] && (!URL.canParse(e) || r) && t?.[0] instanceof HTMLLinkElement, Ye(i, (e) => {
		t?.[0] && e && (He(t, e, n), t?.[0].setAttribute("loaded", ""));
	})?.catch?.((e) => {
		console.warn("Failed to load style sheet:", e);
	});
}, lt = (e) => {
	let t = typeof document < "u" ? document.createElement("link") : null;
	return t && (t.fetchPriority = "high"), t ? (Object.assign(t, {
		rel: "stylesheet",
		type: "text/css",
		crossOrigin: "same-origin"
	}), t.dataset.owner = Be, ct(e, [t, "href"]), typeof document < "u" && document.head.append(t), t) : null;
}, ut = (e, t = typeof document < "u" ? document?.head : null, n = "") => {
	let r = t?.querySelector?.("head") ?? t;
	if (typeof HTMLHeadElement < "u" && r instanceof HTMLHeadElement) return lt(e);
	let i = typeof document < "u" ? document.createElement("style") : null;
	return i ? (i.dataset.owner = Be, ct(e, [i, "innerHTML"], n), r?.prepend?.(i), i) : null;
}, dt = /* @__PURE__ */ new Map(), ft = /* @__PURE__ */ new WeakMap(), pt = (e, t) => {
	if (!e || !t) return !1;
	try {
		return e.replaceSync(t), !0;
	} catch (e) {
		let t = String(e?.message || "").toLowerCase();
		return t.includes("@import rules are not allowed") || t.includes("@import") && t.includes("not allowed") || console.warn("[DOM] Failed to apply adopted stylesheet:", e), !1;
	}
}, mt = (e, t = null) => {
	if (!Re()) return typeof e == "string" && ut(e, void 0, t || ""), null;
	if (typeof e == "string" && ze(e)) return ut(e, void 0, t || ""), null;
	if (typeof e == "string" && dt?.has?.(e)) {
		let t = dt.get(e);
		return typeof document < "u" && document.adoptedStyleSheets && !document.adoptedStyleSheets.includes(t) && document.adoptedStyleSheets.push(t), t;
	}
	if ((e instanceof Blob || e instanceof File) && ft?.has?.(e)) {
		let t = ft.get(e);
		return typeof document < "u" && document.adoptedStyleSheets && !document.adoptedStyleSheets.includes(t) && document.adoptedStyleSheets.push(t), t;
	}
	if (!e) return null;
	let n = typeof e == "string" ? dt.getOrInsertComputed(e, (e) => new CSSStyleSheet()) : ft.getOrInsertComputed(e, (e) => new CSSStyleSheet());
	if (typeof document < "u" && document.adoptedStyleSheets && !document.adoptedStyleSheets.includes(n) && document.adoptedStyleSheets.push(n), typeof e == "string" && !URL.canParse(e)) {
		let r = t ? `@layer ${t} { ${e} }` : e;
		return dt.set(e, n), pt(n, r) || (ht(n), dt.delete(e), ut(e)), n;
	} else Ye(tt(e), (r) => {
		if (dt.set(r, n), r) return ze(r) ? (ht(n), dt.delete(r), ft.delete(e), ut(r, void 0, t || ""), n) : (pt(n, t ? `@layer ${t} { ${r} }` : r) || (ht(n), dt.delete(r), ft.delete(e), ut(r, void 0, t || "")), n);
	});
	return n;
}, ht = (e) => {
	if (!e) return !1;
	let t = typeof e == "string" ? dt.get(e) : e;
	if (!t || typeof document > "u") return !1;
	let n = document.adoptedStyleSheets, r = n.indexOf(t);
	return r === -1 ? !1 : (n.splice(r, 1), !0);
}, gt = /* @__PURE__ */ new WeakMap(), _t = (e, t, n) => (new WeakRef(e), t.has(n) || t.add(n), e), vt = (e, t) => {
	if (e) {
		if (t) {
			let n = gt.getOrInsert(e, /* @__PURE__ */ new Set());
			[...t?.values?.() || []].map((t) => _t(e, n, t));
		}
		return e;
	}
}, yt = /* @__PURE__ */ new Map(), bt = (e, t) => {
	let n = [...e.entries() || []];
	return new Map(n?.map?.(([e, n]) => [e, n?.get?.(t)])?.filter?.(([e, t]) => !!t) || []);
}, xt = (e, t, n) => {
	let r = yt.get(t);
	return r || (r = /* @__PURE__ */ new WeakMap(), yt.set(t, r)), r.has(e) || r.set(e, n), e;
}, St = (e, t) => {
	if (!(!e || !t)) {
		for (let [n, r] of t.entries()) xt(e, n, r);
		return e;
	}
}, Ct = (e, t) => {
	if (e) {
		if (t) {
			let n = Et?.get?.(e) ?? /* @__PURE__ */ new WeakSet();
			Et?.has?.(e) || Et?.set?.(e, n), [...t?.values?.() || []].map((t) => Tt(e, t, n));
		}
		return e;
	}
}, wt = (e) => ({
	storeSet: bt(yt, e),
	mixinSet: Et?.get?.(e),
	behaviorSet: gt?.get?.(e)
}), Tt = (e, t, n) => {
	let r = new WeakRef(e);
	return n ||= Et?.get?.(e), n?.has?.(t) || (n?.add?.(t), Dt?.get?.(t)?.add?.(e), t.name && e?.setAttribute?.("data-mixin", [...e?.getAttribute?.("data-mixin")?.split?.(" ") || [], t.name].filter((e) => !!e).join(" ")), t?.connect?.(r, t, wt(e))), e;
}, Et = /* @__PURE__ */ new WeakMap(), Dt = /* @__PURE__ */ new WeakMap(), Ot = /* @__PURE__ */ new Map(), kt = /* @__PURE__ */ new WeakMap(), At = (e, t) => {
	typeof t == "string" && (t = Ot?.get?.(t));
	let n = new Set([...e?.getAttribute?.("data-mixin")?.split?.(" ") || []]), r = new Set([...n].map((e) => Ot?.get?.(e)).filter((e) => !!e)), i = Et?.get?.(e) ?? /* @__PURE__ */ new WeakSet();
	Dt?.has?.(t) || Dt?.set?.(t, /* @__PURE__ */ new WeakSet()), Et?.has?.(e) || Et?.set?.(e, i);
	let a = new WeakRef(e);
	i?.has?.(t) || (r.has(t) || t?.disconnect?.(a, t, wt(e)), (r.has(t) || !Dt?.get?.(t)?.has?.(e)) && (t?.connect?.(a, t, wt(e)), n.add(kt?.get?.(t)), i?.add?.(t), e?.setAttribute?.("data-mixin", [...n].filter((e) => !!e).join(" "))), Dt?.get?.(t)?.add?.(e)), i?.has?.(t) && (r.has(t) || (i?.delete?.(t), t?.disconnect?.(a, t, wt(e))));
}, jt = /* @__PURE__ */ new Set(), Mt = (e = typeof document < "u" ? document : null) => {
	if (e) return jt?.has?.(e) || (jt?.add?.(e), Ie(e, "*", "data-mixin", (e) => Nt(e.target)), Le(e, "[data-mixin]", (e) => {
		for (let t of e.addedNodes) t instanceof HTMLElement && Nt(t);
	})), e;
}, Nt = (e) => {
	let t = new Set([...e?.getAttribute?.("data-mixin")?.split?.(" ") || []]);
	[...new Set([...t].map((e) => Ot?.get?.(e)).filter((e) => !!e))]?.map?.((t) => At(e, t));
}, Pt = (e, t) => {
	e.forEach((e) => t ? At(e, t) : Nt(e));
}, Ft = (e) => {
	for (let t of jt) Pt(t?.querySelectorAll?.("[data-mixin]"), e);
}, It = new FinalizationRegistry((e) => {
	Ot?.delete?.(e);
}), Lt = (e, t) => {
	if (!kt?.has?.(t)) {
		let n = e?.trim?.();
		n && (kt?.set?.(t, n), Ot?.set?.(n, t), It?.register?.(t, n), Ft(t));
	}
};
Mt(typeof document < "u" ? document : null);
var Rt = class {
	constructor(e = null) {
		e && Lt(e, this);
	}
	connect(e, t, n) {
		return this;
	}
	disconnect(e, t, n) {
		return this;
	}
	storeForElement(e) {
		return yt.get(this.name || "")?.get?.(e);
	}
	relatedForElement(e) {
		return wt(e);
	}
	get elements() {
		return Dt?.get?.(this);
	}
	get storage() {
		return yt?.get?.(this.name || "");
	}
	get name() {
		return kt?.get?.(this);
	}
}, zt = (e, t, n) => {
	let r = n;
	c(n) && (n = n.value);
	let i = (n = b(n)) != null && n !== !1;
	return S(r, () => {
		e instanceof HTMLInputElement ? e.hidden = !i : i ? e?.removeAttribute?.("data-hidden") : e?.setAttribute?.("data-hidden", "");
	}), e;
}, Bt = (e, t, n) => {
	if (!(t = typeof t == "string" ? _(t) : t) || !e || [
		"style",
		"dataset",
		"attributeStyleMap",
		"styleMap",
		"computedStyleMap"
	].indexOf(t || "") != -1) return e;
	let r = n;
	return c(n) && (n = n.value), e?.[t] === n || e?.[t] !== n && S(r, () => {
		n == null ? delete e[t] : e[t] = n;
	}), e;
}, Vt = (e, t, n) => {
	let r = e?.dataset;
	if (!t || !e || !r) return e;
	let i = n;
	return c(n) && (n = n?.value), t = _(t), r?.[t] === (n = b(n)) || (n == null || n === !1 ? delete r[t] : S(i, () => {
		typeof n != "object" && typeof n != "function" ? r[t] = String(n) : delete r[t];
	})), e;
}, Ht = (e, t) => e.style.removeProperty(g(t)), Ut = (e, t, n) => {
	let r = e?.style;
	return !t || typeof t != "string" || !e || !r || S(n, () => {
		y(n) || c(n) || v(n) ? st(e, t, n) : n ?? Ht(e, t);
	}), e;
}, I = (e, t, n) => {
	if (!t || !e) return e;
	let r = n;
	return c(n) && (n = n.value), t = g(t), e?.getAttribute?.(t) === (n = b(n)) || S(r, () => {
		typeof n != "object" && typeof n != "function" && n != null && (typeof n != "boolean" || n == 1) ? e?.setAttribute?.(t, String(n)) : e?.removeAttribute?.(t);
	}), e;
};
//#endregion
//#region ../../projects/dom.ts/src/mixin/junction/types.ts
function Wt(e, t) {
	let n = Math.min(e.x, t.x), r = Math.min(e.y, t.y), i = Math.max(e.x, t.x), a = Math.max(e.y, t.y);
	return {
		left: n,
		top: r,
		right: i,
		bottom: a,
		width: i - n,
		height: a - r
	};
}
var Gt = {
	start: "junction-select:start",
	move: "junction-select:move",
	end: "junction-select:end",
	cancel: "junction-select:cancel"
}, Kt = {
	start: "junction-drag:start",
	move: "junction-drag:move",
	end: "junction-drag:end"
}, qt = {
	start: "junction-resize:start",
	move: "junction-resize:move",
	end: "junction-resize:end"
}, Jt = /* @__PURE__ */ new WeakMap(), Yt = (e, t, n) => {
	let r = Jt.get(e) ?? /* @__PURE__ */ new Map(), i = r.get(t) ?? [];
	i.push(n), r.set(t, i), Jt.set(e, r);
}, Xt = (e, t) => {
	let n = Jt.get(e), r = n?.get(t);
	if (r) {
		for (let e of r) try {
			e();
		} catch {}
		n.delete(t), n.size === 0 && Jt.delete(e);
	}
}, Zt = (e, t) => {
	let n = globalThis.getComputedStyle?.(e)?.getPropertyValue?.(t)?.trim?.() ?? "", r = parseFloat(n);
	return Number.isFinite(r) ? r : 0;
}, Qt = (e, t, n) => {
	let r = e.getAttribute(t)?.trim();
	if (!r) return n;
	let i = e.querySelector(r);
	return i instanceof HTMLElement ? i : n;
}, $t = class extends Rt {
	constructor() {
		super("ui-junction-select");
	}
	connect(e) {
		let t = e?.deref?.();
		if (!t) return this;
		let n = document.createElement("div");
		n.className = "ui-junction-select-overlay", n.setAttribute("data-junction-overlay", ""), n.style.cssText = "position:absolute;pointer-events:none;z-index:9999;box-sizing:border-box;border:1px dashed color-mix(in oklab, #3794ff 70%, transparent);background:color-mix(in oklab, #3794ff 14%, transparent);display:none;inset:auto;min-width:0;min-height:0;", globalThis.getComputedStyle?.(t)?.position === "static" && (t.style.position = "relative"), t.appendChild(n);
		let r = !1, i = {
			x: 0,
			y: 0
		}, a = {
			x: 0,
			y: 0
		}, o = (e) => {
			let n = t.getBoundingClientRect();
			return {
				x: e.clientX - n.left,
				y: e.clientY - n.top
			};
		}, s = () => {
			let e = Wt(i, a);
			if (e.width < 1 && e.height < 1) {
				n.style.display = "none";
				return;
			}
			n.style.display = "block", n.style.left = `${e.left}px`, n.style.top = `${e.top}px`, n.style.width = `${e.width}px`, n.style.height = `${e.height}px`;
		}, c = (e) => {
			e.button === 0 && (e.target?.closest?.("[data-junction-ignore-select], [data-junction-drag-handle], [data-junction-resize-handle], button, a, input, textarea, select") || (e.target === t || t.contains(e.target)) && (r = !0, i = o(e), a = { ...i }, t.setPointerCapture(e.pointerId), t.dispatchEvent(new CustomEvent(Gt.start, {
				bubbles: !0,
				detail: {
					a: { ...i },
					b: { ...a },
					host: t
				}
			})), s()));
		}, l = (e) => {
			if (!r) return;
			a = o(e), s();
			let n = Wt(i, a);
			t.dispatchEvent(new CustomEvent(Gt.move, {
				bubbles: !0,
				detail: {
					a: { ...i },
					b: { ...a },
					box: n,
					host: t
				}
			}));
		}, u = (e) => {
			if (!r) return;
			r = !1;
			try {
				t.releasePointerCapture(e.pointerId);
			} catch {}
			let n = Wt(i, a);
			t.dispatchEvent(new CustomEvent(Gt.end, {
				bubbles: !0,
				detail: {
					a: { ...i },
					b: { ...a },
					box: n,
					host: t
				}
			}));
		};
		return Yt(t, "ui-junction-select", () => {
			n.remove();
		}), Yt(t, "ui-junction-select", F(t, "pointerdown", c)), Yt(t, "ui-junction-select", F(t, "pointermove", l)), Yt(t, "ui-junction-select", F(t, "pointerup", (e) => {
			r && u(e);
		})), Yt(t, "ui-junction-select", F(t, "pointercancel", (e) => {
			if (r) {
				r = !1, n.style.display = "none";
				try {
					t.releasePointerCapture(e.pointerId);
				} catch {}
				t.dispatchEvent(new CustomEvent(Gt.cancel, {
					bubbles: !0,
					detail: { host: t }
				}));
			}
		})), this;
	}
	disconnect(e) {
		let t = e?.deref?.();
		return t && Xt(t, "ui-junction-select"), this;
	}
}, en = class extends Rt {
	constructor() {
		super("ui-junction-drag");
	}
	connect(e) {
		let t = e?.deref?.();
		if (!t) return this;
		st(t, "--jx-drag-x", Zt(t, "--jx-drag-x")), st(t, "--jx-drag-y", Zt(t, "--jx-drag-y"));
		let n = t.style.transform;
		(!t.style.transform || t.style.transform === "none") && (t.style.transform = "translate3d(calc(var(--jx-drag-x, 0) * 1px), calc(var(--jx-drag-y, 0) * 1px), 0)");
		let r = Qt(t, "data-junction-drag-handle", t), i = !1, a = 0, o = 0, s = 0, c = 0, l = (e) => {
			e.button === 0 && (e.target !== r && !r.contains(e.target) || (i = !0, a = e.clientX, o = e.clientY, s = Zt(t, "--jx-drag-x"), c = Zt(t, "--jx-drag-y"), r.setPointerCapture(e.pointerId), t.dispatchEvent(new CustomEvent(Kt.start, {
				bubbles: !0,
				detail: {
					host: t,
					clientX: e.clientX,
					clientY: e.clientY,
					baseX: s,
					baseY: c
				}
			}))));
		}, u = (e) => {
			if (!i) return;
			let n = e.clientX - a, r = e.clientY - o, l = s + n, u = c + r;
			st(t, "--jx-drag-x", l), st(t, "--jx-drag-y", u), t.dispatchEvent(new CustomEvent(Kt.move, {
				bubbles: !0,
				detail: {
					host: t,
					dx: n,
					dy: r,
					x: l,
					y: u
				}
			}));
		}, d = (e) => {
			if (i) {
				i = !1;
				try {
					r.releasePointerCapture(e.pointerId);
				} catch {}
				t.dispatchEvent(new CustomEvent(Kt.end, {
					bubbles: !0,
					detail: {
						host: t,
						x: Zt(t, "--jx-drag-x"),
						y: Zt(t, "--jx-drag-y")
					}
				}));
			}
		};
		return Yt(t, "ui-junction-drag", () => {
			t.style.transform = n;
		}), Yt(t, "ui-junction-drag", F(r, "pointerdown", l)), Yt(t, "ui-junction-drag", F(r, "pointermove", u)), Yt(t, "ui-junction-drag", F(r, "pointerup", d)), Yt(t, "ui-junction-drag", F(r, "pointercancel", d)), this;
	}
	disconnect(e) {
		let t = e?.deref?.();
		return t && Xt(t, "ui-junction-drag"), this;
	}
}, tn = class extends Rt {
	constructor() {
		super("ui-junction-resize");
	}
	connect(e) {
		let t = e?.deref?.();
		if (!t) return this;
		let n = Qt(t, "data-junction-resize-handle", t), r = !1, i = 0, a = 0, o = 0, s = 0, c = Math.max(120, parseFloat(t.getAttribute("data-junction-resize-min-w") || "") || 120), l = Math.max(80, parseFloat(t.getAttribute("data-junction-resize-min-h") || "") || 80), u = (e) => {
			e.button === 0 && (e.target !== n && !n.contains(e.target) || (r = !0, i = e.clientX, a = e.clientY, o = t.offsetWidth, s = t.offsetHeight, n.setPointerCapture(e.pointerId), t.dispatchEvent(new CustomEvent(qt.start, {
				bubbles: !0,
				detail: {
					host: t,
					width: o,
					height: s
				}
			}))));
		}, d = (e) => {
			if (!r) return;
			let n = Math.max(c, o + (e.clientX - i)), u = Math.max(l, s + (e.clientY - a));
			t.style.width = `${n}px`, t.style.height = `${u}px`, t.dispatchEvent(new CustomEvent(qt.move, {
				bubbles: !0,
				detail: {
					host: t,
					width: n,
					height: u
				}
			}));
		}, f = (e) => {
			if (r) {
				r = !1;
				try {
					n.releasePointerCapture(e.pointerId);
				} catch {}
				t.dispatchEvent(new CustomEvent(qt.end, {
					bubbles: !0,
					detail: {
						host: t,
						width: t.offsetWidth,
						height: t.offsetHeight
					}
				}));
			}
		};
		return Yt(t, "ui-junction-resize", F(n, "pointerdown", u)), Yt(t, "ui-junction-resize", F(n, "pointermove", d)), Yt(t, "ui-junction-resize", F(n, "pointerup", f)), Yt(t, "ui-junction-resize", F(n, "pointercancel", f)), this;
	}
	disconnect(e) {
		let t = e?.deref?.();
		return t && Xt(t, "ui-junction-resize"), this;
	}
};
new $t(), new en(), new tn(), Symbol.observable ||= Symbol.for("observable"), Symbol.subscribe ||= Symbol.for("subscribe"), Symbol.unsubscribe ||= Symbol.for("unsubscribe");
var L = Symbol.for("@value"), R = Symbol.for("@extract"), nn = Symbol.for("@origin"), rn = Symbol.for("@registry"), an = Symbol.for("@behavior"), on = Symbol.for("@promise"), sn = Symbol.for("@trigger-less"), z = Symbol.for("@trigger-lock"), cn = Symbol.for("@trigger-control"), ln = Symbol.for("@trigger"), un = Symbol.for("@subscribe"), dn = Symbol.for("@isNotEqual"), fn = Symbol.for("@realProp"), pn = (e) => e?.[R] ?? e?.["@target"] ?? e, mn = (e, t = !1) => {
	let n = e;
	if (a(e) || typeof e == "symbol") return e;
	if (e != null && (e instanceof WeakRef || "deref" in e && typeof e?.deref == "function") && (e = e?.deref?.()), e != null && (typeof e == "object" || typeof e == "function")) {
		e = pn(e);
		let r = t && c(e) && e?.value;
		if (r != null && (typeof r == "object" || typeof r == "function") && (e = r), n != e) return mn(e, t);
	}
	return e;
}, hn = (e) => e != null && typeof e.then == "function", gn = (e, t) => a(e) || typeof e == "function" ? t?.(e) : hn(e) ? e.then(t) : e?.promise && hn(e.promise) ? e.promise.then(t) : t?.(e), _n = /* @__PURE__ */ new WeakMap(), vn = new FinalizationRegistry((e) => {
	e?.forEach?.((e) => e?.());
});
function B(e, t, n) {
	!n || typeof n != "function" || typeof e != "object" && typeof e != "function" || (t == Symbol.dispose ? _n?.getOrInsertComputed?.(e, () => {
		let t = /* @__PURE__ */ new Set();
		return (typeof e == "object" || typeof e == "function") && (vn.register(e, t), _n.set(e, t), e[Symbol.dispose] ??= () => t.forEach((e) => {
			e?.();
		})), t;
	})?.add?.(n) : e[t] = function(...r) {
		let i = e?.[t];
		typeof i == "function" && i.apply(this, r), n.apply(this, r);
	});
}
//#endregion
//#region ../../projects/object.ts/src/core/Subscript.ts
var yn = /* @__PURE__ */ new WeakMap(), bn = (e, t, n) => yn.getOrInsert(e, () => {
	let r = t?.deref?.();
	r?.affected?.(n);
	let i = e?.complete?.bind?.(e), a = () => {
		let e = i?.();
		return r?.unaffected?.(n), e;
	};
	return e.complete = a, {
		unaffected: a,
		[Symbol.dispose]: a,
		[Symbol.asyncDispose]: a
	};
}), V = /* @__PURE__ */ new WeakMap(), xn = /* @__PURE__ */ new Map(), Sn = /* @__PURE__ */ new WeakMap(), Cn = (e, t) => {
	let n = e?.[R] ?? e, r = V.get(n);
	return r ? r.bindSource(n) : (r = new In(n), V.set(n, r)), t;
}, wn = (e, t) => (e = mn(e?.[R] ?? e), typeof e == "symbol" || !(typeof e == "object" || typeof e == "function") || e == null ? e : Sn.getOrInsertComputed(e, () => new Proxy(e, Cn(e, t)))), Tn = Symbol.for("@allProps"), En = new Set(["*", "all"]), Dn = new Map([
	["set", ["setter", "@set"]],
	["add", ["@add"]],
	["delete", ["@delete"]],
	["invalidate", ["@invalidate"]],
	["manual", ["@manual"]],
	["custom", ["@custom"]],
	["setAll", ["@setAll"]],
	["addAll", ["@addAll"]],
	["deleteAll", ["@deleteAll", "@clear"]]
]), On = new Map(Array.from(Dn.entries()).flatMap(([e, t]) => t.map((t) => [t, e]))), kn = (e = "set") => {
	if (e == null) return e;
	let t = String(e || "set");
	return On.get(t) ?? t;
}, An = (e) => {
	let t = e == null ? "all" : String(kn(e) ?? "all");
	return [t, ...Dn.get(t) ?? []];
}, jn = (e = ["*"]) => new Set([...Mn(e)].flatMap((e) => [e, ...Dn.get(e) ?? []])), Mn = (e = ["*"]) => {
	let t = typeof e == "string" ? [e] : Array.from(e ?? ["*"]), n = new Set(t.map((e) => {
		let t = String(e || "*");
		return En.has(t) ? t : String(kn(t) ?? t);
	}));
	return n.size ? n : new Set(["*"]);
}, Nn = (e, t) => {
	let n = e instanceof Set ? e : Mn(e);
	return [...En].some((e) => n.has(e)) || An(t).some((e) => n.has(e));
}, Pn = (e) => !!e && typeof e == "object" && !Array.isArray(e) && ("affectTypes" in e || "triggers" in e || "triggerImmediately" in e), Fn = (e = ["*"]) => {
	if (Pn(e)) return {
		affectTypes: Mn(e.affectTypes ?? e.triggers ?? ["*"]),
		triggerImmediately: e.triggerImmediately !== !1
	};
	let t = Mn(e);
	return {
		affectTypes: t,
		triggerImmediately: Nn(t, "initial")
	};
}, In = class {
	compatible;
	#e;
	#t;
	#n = /* @__PURE__ */ new WeakSet();
	#r;
	#i;
	#a = /* @__PURE__ */ new Set();
	#o = /* @__PURE__ */ new Set();
	#s;
	#c = /* @__PURE__ */ new Map();
	#l = !1;
	constructor(e) {
		this.#e = e, this.#t = /* @__PURE__ */ new Map(), this.#n = /* @__PURE__ */ new WeakSet(), this.#s = {
			enable: (e = ["*"], t) => t ? this.withTriggers(e, !0, t) : this.setTriggersEnabled(e, !0),
			disable: (e = ["*"], t) => t ? this.withTriggers(e, !1, t) : this.setTriggersEnabled(e, !1),
			set: (e, t) => this.setTriggersEnabled(e, t),
			with: (e, t) => this.withTriggers(e, !0, t),
			without: (e, t) => this.withTriggers(e, !1, t),
			isEnabled: (e) => this.isTriggerEnabled(e)
		}, this.#i = { next: (e) => {
			e && (Array.isArray(e) ? this.#u(...e) : this.#u(e));
		} };
		let t = new WeakRef(this);
		this.#r = typeof Observable < "u" ? new Observable(function(e) {
			let n = e?.next?.bind?.(e);
			return bn(e, t, n);
		}) : null, this.compatible = () => this.#r;
	}
	bindSource(e) {
		return this.#e ??= e, this;
	}
	$safeExec(e, ...t) {
		if (!(!e || this.#n.has(e))) {
			this.#n.add(e);
			try {
				let n = e(...t);
				return n && typeof n.then == "function" ? n.catch(console.warn) : n;
			} catch (e) {
				console.warn(e);
			} finally {
				this.#n.delete(e);
			}
		}
	}
	#u(e, t = null, n, r = "all", ...i) {
		r = kn(r) ?? r;
		let a = this.#t, o = a?.size ? Array.from(a.entries()).map(([a, o]) => {
			if ((o.prop === e || o.prop === Tn || o.prop === null) && Nn(o.triggers, r)) return this.$safeExec(a, t, e, n, r, ...i);
		}).filter((e) => e && typeof e.then == "function") : [];
		if (xn.size) {
			let a = {
				source: this.#e,
				target: this.#e,
				value: t,
				prop: e,
				name: e,
				oldValue: n,
				trigger: r,
				args: i
			};
			for (let [e, t] of xn.entries()) if (Nn(t, r)) {
				let t = this.$safeExec(e, a);
				t && typeof t.then == "function" && o.push(t);
			}
		}
		return o.length ? Promise.allSettled(o) : void 0;
	}
	wrap(e) {
		return Array.isArray(e) ? wn(e, this) : e;
	}
	get triggerControl() {
		return this.#s;
	}
	isTriggerEnabled(e) {
		return !Nn(this.#o, "all") && !An(e).some((e) => this.#o.has(e));
	}
	setTriggersEnabled(e = ["*"], t = !0) {
		let n = jn(e);
		for (let e of n) t ? this.#o.delete(e) : this.#o.add(e);
	}
	withTriggers(e, t, n) {
		let r = [...jn(e)], i = new Map(r.map((e) => [e, this.#o.has(e)])), a = () => {
			i.forEach((e, t) => {
				e ? this.#o.add(t) : this.#o.delete(t);
			});
		};
		this.setTriggersEnabled(r, t);
		try {
			let e = n?.();
			return e && typeof e.finally == "function" ? e.finally(a) : (a(), e);
		} catch (e) {
			throw a(), e;
		}
	}
	affected(e, t, n = ["*"]) {
		if (e == null || typeof e != "function") return;
		let r = Fn(n);
		return this.#t.set(e, {
			prop: t || Tn,
			triggers: r.affectTypes
		}), () => this.unaffected(e, t || Tn);
	}
	unaffected(e, t) {
		if (e != null && typeof e == "function") {
			let n = this.#t, r = n?.get(e);
			if (r && (r.prop == t || t == null || t == Tn)) return n.delete(e), () => this.affected(e, t || Tn, r.triggers);
		}
		return this.#t.clear();
	}
	trigger(e, t, n, r = "set", ...i) {
		if (typeof e == "symbol" || (r === void 0 && (r = "set"), r = kn(r) ?? r, !this.isTriggerEnabled(r))) return;
		let a = `${r ?? "all"}`, o = this.#c.get(e);
		o || (o = /* @__PURE__ */ new Map(), this.#c.set(e, o)), o.set(a, [
			e,
			t,
			n,
			r,
			i
		]), !this.#l && (this.#l = !0, queueMicrotask(() => {
			this.#l = !1;
			let e = this.#c;
			this.#c = /* @__PURE__ */ new Map();
			for (let [t, n] of e) if (!(t != null && this.#a.has(t))) {
				t != null && this.#a.add(t);
				try {
					for (let [, e] of n) {
						let [t, n, r, i, a] = e;
						try {
							this.#u(t, n, r, i, ...a ?? []);
						} catch (e) {
							console.warn(e);
						}
					}
				} finally {
					t != null && this.#a.delete(t);
				}
			}
		}));
	}
	get iterator() {
		return this.#i;
	}
}, Ln = new Set([
	Symbol.toStringTag,
	Symbol.iterator,
	Symbol.asyncIterator,
	Symbol.toPrimitive,
	"toString",
	"valueOf",
	"inspect",
	"constructor",
	"__proto__",
	"prototype",
	"then",
	"catch",
	"finally",
	"next"
]), Rn = (e, t) => {
	if (!Ln.has(t)) return null;
	let n = H(e, t);
	return typeof n == "function" ? k(e, n) : n;
}, zn = /* @__PURE__ */ new WeakMap();
function Bn(e, t) {
	let n = !0;
	try {
		zn?.getOrInsert?.(e, /* @__PURE__ */ new Set())?.add?.(t), zn?.get?.(e)?.has?.(t) && (n = !0), n = typeof Reflect.getOwnPropertyDescriptor(e, t)?.get == "function";
	} catch {
		n = !0;
	} finally {
		zn?.get?.(e)?.delete?.(t);
	}
	return n;
}
var Vn = (e, t) => {
	if (a(e)) return e;
	let n = H(e, t);
	if (n == null && t != "value") {
		let r = H(e, "value");
		return r != null && !a(r) ? Vn(r, t) : n;
	} else if (t == "value" && n != null && !a(n) && typeof n != "function") return Vn(n, t) ?? n ?? e;
	return n ?? e;
}, Hn = (e, t, n) => {
	if (e == null) return !1;
	let r = __safeSetGuard.getOrInsert(e, /* @__PURE__ */ new Set());
	return r?.has?.(t) ? !1 : (r?.add?.(t), Reflect.set(e, t, n));
}, H = (e, t, n) => {
	let r;
	if (e == null) return e;
	let i = zn.getOrInsert(e, /* @__PURE__ */ new Set());
	if (i?.has?.(t)) return null;
	if (!Bn(e, t)) r ??= Reflect.get(e, t, n ?? e);
	else {
		i?.add?.(t);
		try {
			r = Reflect.get(e, t, n ?? e);
		} catch {
			r = void 0;
		} finally {
			i.delete(t), i?.size === 0 && zn?.delete?.(e);
		}
	}
	return typeof r == "function" ? k(e, r) : r;
}, Un = (e, t) => Object.prototype.hasOwnProperty.call(e, t), Wn = (e, t = !1) => !!e && typeof e == "object" && !Array.isArray(e) && (Un(e, "key") || Un(e, "name") || Un(e, "oldValue") || Un(e, "old") || Un(e, "op") || Un(e, "trigger") || t && Un(e, "value")), Gn = (e, t, n) => Un(e, t) ? e[t] : t == "oldValue" && Un(e, "old") ? e.old : n(), Kn = (e, t = "manual") => kn(e.trigger ?? e.op ?? t), qn = (e) => typeof e == "string" || typeof e == "number" || typeof e == "symbol", Jn = (e) => {
	let t = H(e, fn) ?? H(e, "realProp");
	return qn(t) ? t : null;
}, Yn = (e, t) => t == "value" ? Jn(e) ?? t : t, Xn = (e, t) => {
	let n = Jn(e);
	return n != null && t == n ? H(e, "value") ?? H(e, L) ?? H(e, t) : t == null ? void 0 : H(e, t);
}, Zn = (e, t) => {
	let n = (e, n, r) => (Wn(n) || (r ??= n), t(Wn(e) ? e : Wn(n, !0) ? {
		key: e,
		trigger: r,
		...n
	} : {
		key: e,
		trigger: r ?? n
	})), r = e?.triggerControl;
	return r && Object.assign(n, r), n.custom = (e, t, r, i) => n({
		key: t,
		trigger: e,
		value: r,
		oldValue: i
	}), n;
}, Qn = (e, t, n) => {
	if (e == null || a(e)) return e;
	if (([
		"deref",
		"bind",
		"@target",
		nn,
		R,
		rn
	]?.indexOf(t) < 0 ? H(e, t)?.bind?.(e) : null) != null) return null;
	if ([R, nn].indexOf(t) >= 0) return H(e, t) ?? e;
	if (t == L) return H(e, t) ?? H(e, "value");
	if (t == rn) return n;
	if (t == cn) return n?.triggerControl;
	if (t == Symbol.observable) return n?.compatible;
	if (t == Symbol.subscribe) return (t, n, r) => U(n == null ? e : [e, n], t, r);
	if (t == Symbol.iterator || t == Symbol.asyncIterator) return H(e, t);
	if (t == Symbol.dispose) return (t) => {
		H(e, Symbol.dispose)?.(t), Rr(t == null ? e : [e, t]);
	};
	if (t == Symbol.asyncDispose) return (t) => {
		H(e, Symbol.asyncDispose)?.(t), Rr(t == null ? e : [e, t]);
	};
	if (t == Symbol.unsubscribe) return (t) => Rr(t == null ? e : [e, t]);
	if (typeof t == "symbol" && (t in e || H(e, t) != null)) return H(e, t);
}, $n = (e, t, n) => {
	if (t == "subscribe") return n?.compatible?.[t] ?? ((t) => {
		if (typeof t == "function") return U(e, t);
		if ("next" in t && t?.next != null) {
			let n = U(e, t?.next), r = t?.complete;
			return t.complete = (...e) => (n?.(), r?.(...e)), t.complete;
		}
	});
}, er = class {
	#e;
	#t;
	#n;
	constructor(e, t, n) {
		this.#e = e, this.#t = t, this.#n = n;
	}
	get(e, t, n) {
		return Rn(e, t) ?? Reflect.get(e, t, n);
	}
	apply(e, t, n) {
		let r = [], i = [], a = [], o = [...this.#t], s = -1, c = Reflect.apply(e, t || this.#t, n);
		if (this.#n?.[z]) return Array.isArray(c) ? sr(c) : c;
		switch (this.#e) {
			case "push":
				s = o?.length, r = n;
				break;
			case "unshift":
				s = 0, r = n;
				break;
			case "pop":
				s = o?.length - 1, o.length > 0 && (i = [[
					s - 1,
					o[s - 1],
					null
				]]);
				break;
			case "shift":
				s = 0, o.length > 0 && (i = [[
					s,
					o[s],
					null
				]]);
				break;
			case "splice":
				let [e, t, ...c] = n;
				if (s = e, r = t > 0 ? c.slice(t) : [], i = t > 0 ? o?.slice?.(c?.length + e, e + (t - (c?.length || 0))) : [], s += (t || 0) - (c?.length || 1), t > 0 && c?.length > 0) for (let n = 0; n < Math.min(t, c?.length ?? 0); n++) a.push([
					e + n,
					c[n],
					o?.[e + n] ?? null
				]);
				break;
			case "sort":
			case "fill":
			case "reverse":
			case "copyWithin":
				s = 0;
				for (let e = 0; e < o.length; e++) j(o[e], this.#t[e]) && a.push([
					s + e,
					this.#t[e],
					o[e]
				]);
				break;
			case "set":
				s = n[1], a.push([
					s,
					n[0],
					o?.[s] ?? null
				]);
				break;
		}
		let l = V.get(this.#t);
		return r?.length == 1 ? l?.trigger?.(s, r[0], null, r[0] == null ? "add" : "set") : r?.length > 1 && (l?.trigger?.(s, r, null, "addAll"), r.forEach((e, t) => l?.trigger?.(s + t, e, null, e == null ? "add" : "set"))), a?.length == 1 ? l?.trigger?.(a[0]?.[0] ?? s, a[0]?.[1], a[0]?.[2], a[0]?.[2] == null ? "add" : "set") : a?.length > 1 && (l?.trigger?.(s, a, o, "setAll"), a.forEach((e, t) => l?.trigger?.(e?.[0] ?? s + t, e?.[1], e?.[2], e?.[2] == null ? "add" : "set"))), i?.length == 1 ? l?.trigger?.(s, null, i[0], i[0] == null ? "add" : "delete") : i?.length > 1 && (l?.trigger?.(s, null, i, "deleteAll"), i.forEach((e, t) => l?.trigger?.(s + t, null, e, e == null ? "add" : "delete"))), c == e ? new Proxy(c, this.#n) : Array.isArray(c) ? sr(c) : c;
	}
}, tr = (e, t, n, r) => {
	let i = Number.isInteger(n) && Number.isInteger(r) && r < n ? t.slice(r, n) : [];
	if (!e[z] && n !== r) {
		let e = V.get(t);
		i.length === 1 ? e?.trigger?.(r, null, i[0], "delete") : i.length > 1 && (e?.trigger?.(r, null, i, "deleteAll"), i.forEach((t, n) => e?.trigger?.(r + n, null, t, "delete")));
		let a = Number.isInteger(n) && Number.isInteger(r) && r > n ? r - n : 0;
		if (a === 1) e?.trigger?.(n, void 0, null, "add");
		else if (a > 1) {
			let t = Array(a).fill(void 0);
			e?.trigger?.(n, t, null, "addAll"), t.forEach((t, r) => e?.trigger?.(n + r, void 0, null, "add"));
		}
	}
}, nr = class {
	[z];
	constructor() {}
	has(e, t) {
		return Reflect.has(e, t);
	}
	get(e, t, n) {
		let r = Rn(e, t);
		if (r != null) return r;
		if ([
			R,
			nn,
			"@target",
			"deref"
		].indexOf(t) >= 0 && H(e, t) != null && H(e, t) != e) return typeof H(e, t) == "function" ? H(e, t)?.bind?.(e) : H(e, t);
		let i = V?.get?.(e), a = Qn(e, t, i);
		if (a != null) return a;
		let o = $n(e, t, i);
		if (o != null) return o;
		if (t == sn) return ae.call(this, this);
		if (t == ln) return Zn(i, (t) => {
			let n = t.key ?? t.name ?? 0, r = Gn(t, "value", () => H(e, n)), a = Gn(t, "oldValue", () => void 0);
			return i?.trigger?.(n, r, a, Kn(t, "manual"));
		});
		if (t == "@target" || t == R) return e;
		if (t == "x") return () => e?.x ?? e?.[0];
		if (t == "y") return () => e?.y ?? e?.[1];
		if (t == "z") return () => e?.z ?? e?.[2];
		if (t == "w") return () => e?.w ?? e?.[3];
		if (t == "r") return () => e?.r ?? e?.[0];
		if (t == "g") return () => e?.g ?? e?.[1];
		if (t == "b") return () => e?.b ?? e?.[2];
		if (t == "a") return () => e?.a ?? e?.[3];
		let s = H(e, t) ?? (t == "value" ? H(e, L) : null);
		return typeof s == "function" ? new Proxy(typeof s == "function" ? s?.bind?.(e) : s, new er(t, e, this)) : s;
	}
	set(e, t, n) {
		if (typeof t != "symbol" && Number.isInteger(parseInt(t)) && (t = parseInt(t) ?? t), t == z && n) return this[z] = !!n, !0;
		if (t == z && !n) return delete this[z], !0;
		let r = H(e, t), i = [
			"x",
			"y",
			"z",
			"w"
		], a = [
			"r",
			"g",
			"b",
			"a"
		], o = i.indexOf(t), s = a.indexOf(t), c = !1;
		return c = o >= 0 ? Reflect.set(e, o, n) : s >= 0 ? Reflect.set(e, s, n) : Reflect.set(e, t, n), t == "length" && j(r, n) && tr(this, e, r, n), !this[z] && typeof t != "symbol" && j(r, n) && V?.get?.(e)?.trigger?.(t, n, r, "set"), c;
	}
	deleteProperty(e, t) {
		if (typeof t != "symbol" && Number.isInteger(parseInt(t)) && (t = parseInt(t) ?? t), t == z) return delete this[z], !0;
		let n = H(e, t), r = Reflect.deleteProperty(e, t);
		return !this[z] && t != "length" && t != z && typeof t != "symbol" && n != null && V.get(e)?.trigger?.(t, t, n, "delete"), r;
	}
}, rr = class {
	[z];
	constructor() {}
	get(e, t, n) {
		if ([
			R,
			nn,
			"@target",
			"deref",
			"then",
			"catch",
			"finally"
		].indexOf(t) >= 0 && H(e, t) != null && H(e, t) != e) return typeof H(e, t) == "function" ? k(e, H(e, t)) : H(e, t);
		let r = V.get(e) ?? V.get(H(e, "value") ?? e);
		return Qn(e, t, r) ?? (H(e, t) == null && t != "value" && c(e) && H(e, "value") != null && (typeof H(e, "value") == "object" || typeof H(e, "value") == "function") && H(H(e, "value"), t) != null && (e = H(e, "value") ?? e), $n(e, t, r) ?? (t == sn ? ae.call(this, this) : t == ln ? Zn(r, (t) => {
			let n = Yn(e, t.key ?? t.name ?? Jn(e) ?? "value"), i = Gn(t, "value", () => Xn(e, n)), a = Gn(t, "oldValue", () => n == "value" || n == Jn(e) ? H(e, L) : void 0);
			return r?.trigger?.(n, i, a, Kn(t, "manual"));
		}) : t == Symbol.toPrimitive ? (n) => {
			let r = Vn(e, t);
			return H(r, t) ? H(r, t)?.(n) : a(r) ? o(r, n) : a(H(r, "value")) ? o(H(r, "value"), n) : o(H(r, "value") ?? r, n);
		} : t == Symbol.toStringTag ? () => {
			let n = Vn(e, t);
			return H(n, t) ? H(n, t)?.() : a(n) ? String(n ?? "") || "" : a(H(n, "value")) ? String(H(n, "value") ?? "") || "" : String(H(n, "value") ?? n ?? "") || "";
		} : t == "toString" ? () => {
			let n = Vn(e, t);
			return H(n, t) ? H(n, t)?.() : H(n, Symbol.toStringTag) ? H(n, Symbol.toStringTag)?.() : a(n) ? String(n ?? "") || "" : a(H(n, "value")) ? String(H(n, "value") ?? "") || "" : String(H(n, "value") ?? n ?? "") || "";
		} : t == "valueOf" ? () => {
			let n = Vn(e, t);
			return H(n, t) ? H(n, t)?.() : H(n, Symbol.toPrimitive) ? H(n, Symbol.toPrimitive)?.() : a(n) ? n : a(H(n, "value")) ? H(n, "value") : H(n, "value") ?? n;
		} : typeof t == "symbol" && (t in e || H(e, t) != null) ? H(e, t) : Vn(e, t)));
	}
	apply(e, t, n) {
		return Reflect.apply(e, t, n);
	}
	ownKeys(e) {
		return Reflect.ownKeys(e);
	}
	construct(e, t, n) {
		return Reflect.construct(e, t, n);
	}
	isExtensible(e) {
		return Reflect.isExtensible(e);
	}
	getOwnPropertyDescriptor(e, t) {
		let n;
		try {
			zn?.getOrInsert?.(e, /* @__PURE__ */ new Set())?.add?.(t), zn?.get?.(e)?.has?.(t) && (n = void 0), n = Reflect.getOwnPropertyDescriptor(e, t);
		} catch {
			n = void 0;
		} finally {
			zn?.get?.(e)?.delete?.(t);
		}
		return n;
	}
	has(e, t) {
		return t in e;
	}
	set(e, t, n) {
		return Rn(e, t) ?? E(n, (r) => {
			let i = Rn(r, t);
			if (i != null) return i;
			if (t == z && n) return this[z] = !!n, !0;
			if (t == z && !n) return delete this[z], !0;
			let a = e;
			if (H(e, t) == null && t != "value" && c(e) && H(e, "value") != null && (typeof H(e, "value") == "object" || typeof H(e, "value") == "function") && H(H(e, "value"), t) != null && (e = H(e, "value") ?? e), typeof t == "symbol" && !(H(e, t) != null && t in e)) return;
			let o = Yn(e, t), s = t == "value" ? H(e, L) ?? H(e, t) : H(e, t);
			e[t] = r;
			let l = H(e, t) ?? r;
			return !this[z] && typeof t != "symbol" && (H(e, dn) ?? j)?.(s, l) && (V.get(e) ?? V.get(a))?.trigger?.(o, r, s), !0;
		});
	}
	defineProperty(e, t, n) {
		let r = Rn(e, t);
		if (r != null) return r;
		if (t == z && n.value) return this[z] = !!n.value, !0;
		if (t == z && !n.value) return delete this[z], !0;
		if (H(e, t) == null && t != "value" && c(e) && H(e, "value") != null && (typeof H(e, "value") == "object" || typeof H(e, "value") == "function") && H(H(e, "value"), t) != null && (e = H(e, "value") ?? e), n.get == null && n.set == null) return Reflect.defineProperty(e, t, n);
		let i = H(e, t), a = Reflect.defineProperty(e, t, {
			get: n.get,
			set: n.set,
			enumerable: n.enumerable ?? !0,
			configurable: n.configurable ?? !0
		});
		return Hn(e, t, i), a;
	}
	deleteProperty(e, t) {
		if (t == z) return delete this[z], !0;
		H(e, t) == null && t != "value" && c(e) && H(e, "value") != null && (typeof H(e, "value") == "object" || typeof H(e, "value") == "function") && H(H(e, "value"), t) != null && (e = H(e, "value") ?? e);
		let n = H(e, t), r = Reflect.deleteProperty(e, t);
		return !this[z] && t != z && typeof t != "symbol" && V.get(e)?.trigger?.(t, null, n, "delete"), r;
	}
}, ir = class {
	[z];
	constructor() {}
	get(e, t, n) {
		if ([
			R,
			nn,
			"@target",
			"deref"
		].indexOf(t) >= 0 && H(e, t) != null && H(e, t) != e) return typeof H(e, t) == "function" ? k(e, H(e, t)) : H(e, t);
		let r = V.get(e), i = Qn(e, t, r);
		if (i != null) return i;
		let a = $n(e, t, r);
		if (a != null) return a;
		e = H(e, R) ?? H(e, nn) ?? e;
		let o = k(e, H(e, t));
		return typeof t == "symbol" && (t in e || H(e, t) != null) ? o : t == sn ? ae.call(this, this) : t == ln ? Zn(r, (t) => {
			let n = t.key ?? t.name;
			if (n == null) return;
			let i = Gn(t, "value", () => e.get(n));
			if (i == null && !Un(t, "value")) return;
			let a = Gn(t, "oldValue", () => void 0);
			return r?.trigger?.(n, i, a, Kn(t, "manual"));
		}) : t == "clear" ? () => {
			let t = Array.from(e?.entries?.() || []), n = o();
			return t.forEach(([t, n]) => {
				!this[z] && n && V.get(e)?.trigger?.(t, null, n, "delete");
			}), n;
		} : t == "delete" ? (t, n = null) => {
			let r = e.get(t), i = o(t);
			return !this[z] && r && V.get(e)?.trigger?.(t, null, r, "delete"), i;
		} : t == "set" ? (t, n) => D(n, (r) => {
			let i = e.get(t), a = o(t, n);
			return j(i, a) && (this[z] || V.get(e)?.trigger?.(t, a, i, i == null ? "add" : "set")), a;
		}) : o;
	}
	set(e, t, n) {
		return t == z ? (this[z] = !!n, !0) : t == z && !n ? (delete this[z], !0) : Reflect.set(e, t, n);
	}
	has(e, t) {
		return Reflect.has(e, t);
	}
	apply(e, t, n) {
		return Reflect.apply(e, t, n);
	}
	construct(e, t, n) {
		return Reflect.construct(e, t, n);
	}
	ownKeys(e) {
		return Reflect.ownKeys(e);
	}
	isExtensible(e) {
		return Reflect.isExtensible(e);
	}
	getOwnPropertyDescriptor(e, t) {
		let n;
		try {
			zn?.getOrInsert?.(e, /* @__PURE__ */ new Set())?.add?.(t), zn?.get?.(e)?.has?.(t) && (n = void 0), n = Reflect.getOwnPropertyDescriptor(e, t);
		} catch {
			n = void 0;
		} finally {
			zn?.get?.(e)?.delete?.(t);
		}
		return n;
	}
	deleteProperty(e, t) {
		return t == z ? (delete this[z], !0) : Reflect.deleteProperty(e, t);
	}
}, ar = class {
	[z] = !1;
	constructor() {}
	get(e, t, n) {
		if ([
			R,
			nn,
			"@target",
			"deref"
		].indexOf(t) >= 0 && H(e, t) != null && H(e, t) != e) return typeof H(e, t) == "function" ? k(e, H(e, t)) : H(e, t);
		let r = V.get(e), i = Qn(e, t, r);
		if (i != null) return i;
		let a = $n(e, t, r);
		if (a != null) return a;
		e = H(e, R) ?? H(e, nn) ?? e;
		let o = k(e, H(e, t));
		return typeof t == "symbol" && (t in e || H(e, t) != null) ? o : t == sn ? ae.call(this, this) : t == ln ? Zn(r, (t) => {
			let n = t.key ?? t.name;
			if (n == null) return;
			let i = Gn(t, "value", () => e.has(n)), a = Gn(t, "oldValue", () => void 0);
			return r?.trigger?.(n, i, a, Kn(t, "manual"));
		}) : t == "clear" ? () => {
			let t = Array.from(e?.values?.() || []), n = o();
			return t.forEach((t) => {
				!this[z] && t && V.get(e)?.trigger?.(null, null, t, "delete");
			}), n;
		} : t == "delete" ? (t) => {
			let n = e.has(t) ? t : null, r = o(t);
			return !this[z] && n && V.get(e)?.trigger?.(t, null, n, "delete"), r;
		} : t == "add" ? (t) => {
			let n = e.has(t) ? t : null, r = o(t);
			return j(n, t) && !this[z] && !n && V.get(e)?.trigger?.(t, t, n, "add"), r;
		} : o;
	}
	set(e, t, n) {
		return t == z && n ? (this[z] = !!n, !0) : t == z && !n ? (delete this[z], !0) : Reflect.set(e, t, n);
	}
	has(e, t) {
		return Reflect.has(e, t);
	}
	apply(e, t, n) {
		return Reflect.apply(e, t, n);
	}
	construct(e, t, n) {
		return Reflect.construct(e, t, n);
	}
	ownKeys(e) {
		return Reflect.ownKeys(e);
	}
	isExtensible(e) {
		return Reflect.isExtensible(e);
	}
	getOwnPropertyDescriptor(e, t) {
		let n;
		try {
			zn?.getOrInsert?.(e, /* @__PURE__ */ new Set())?.add?.(t), zn?.get?.(e)?.has?.(t) && (n = void 0), n = Reflect.getOwnPropertyDescriptor(e, t);
		} catch {
			n = void 0;
		} finally {
			zn?.get?.(e)?.delete?.(t);
		}
		return n;
	}
	deleteProperty(e, t) {
		return t == z ? (delete this[z], !0) : Reflect.deleteProperty(e, t);
	}
}, or = (e) => !!((typeof e == "object" || typeof e == "function") && e != null && (e?.[R] || e?.[un])), sr = (e) => or(e) ? e : wn(e, new nr()), cr = (e) => or(e) ? e : wn(e, new rr()), lr = (e) => or(e) ? e : wn(e, new ir()), ur = (e) => or(e) ? e : wn(e, new ar()), dr = (e, t) => {
	let n = e instanceof Promise || typeof e?.then == "function", r = yr({
		[on]: n ? e : null,
		[L]: n ? 0 : Number(mn(e) || 0) || 0,
		[an]: t,
		[Symbol?.toStringTag]() {
			return String(this?.[L] ?? "") || "";
		},
		[Symbol?.toPrimitive](e) {
			return o((typeof this?.[L] == "object" ? this?.[L]?.value || 0 : this?.[L]) ?? 0, e);
		},
		set value(e) {
			this[L] = (e != null && !Number.isNaN(e) ? Number(e) : this[L]) || 0;
		},
		get value() {
			return Number(this[L] || 0) || 0;
		}
	});
	return e?.then?.((e) => r.value = e), r;
}, fr = (e, t) => {
	let n = e instanceof Promise || typeof e?.then == "function", r = yr({
		[on]: n ? e : null,
		[L]: (n ? "" : String(mn(typeof e == "number" ? String(e) : e || ""))) ?? "",
		[an]: t,
		[Symbol?.toStringTag]() {
			return String(this?.[L] ?? "") ?? "";
		},
		[Symbol?.toPrimitive](e) {
			return o(this?.[L] ?? "", e);
		},
		set value(e) {
			this[L] = String(typeof e == "number" ? String(e) : e || "") ?? "";
		},
		get value() {
			return String(this[L] ?? "") ?? "";
		}
	});
	return e?.then?.((e) => r.value = e), r;
}, pr = (e, t) => {
	let n = e instanceof Promise || typeof e?.then == "function", r = yr({
		[on]: n ? e : null,
		[L]: (n ? !1 : (mn(e) == null ? !1 : typeof mn(e) == "string" ? !0 : !!mn(e)) || !1) || !1,
		[an]: t,
		[Symbol?.toStringTag]() {
			return String(this?.[L] ?? "") || "";
		},
		[Symbol?.toPrimitive](e) {
			return o(!!this?.[L] || !1, e);
		},
		set value(e) {
			this[L] = (e == null ? this[L] : typeof e == "string" ? !0 : !!e) || !1;
		},
		get value() {
			return this[L] || !1;
		}
	});
	return e?.then?.((e) => r.value = e), r;
}, mr = (e, t) => {
	let n = e instanceof Promise || typeof e?.then == "function", r = yr({
		[on]: n ? e : null,
		[an]: t,
		[Symbol?.toStringTag]() {
			return String(this.value ?? "") || "";
		},
		[Symbol?.toPrimitive](e) {
			return o(this.value, e);
		},
		value: n ? null : mn(e)
	});
	return e?.then?.((e) => r.value = e), U(e, (e) => {
		r?.[ln]?.();
	}), r;
}, hr = (e, t) => {
	if (e == null || typeof e != "object" && typeof e != "function") return e;
	try {
		Object.defineProperty(e, fn, {
			value: t,
			writable: !0,
			configurable: !0
		});
	} catch {
		try {
			e[fn] = t;
		} catch {}
	}
	try {
		Object.defineProperty(e, "realProp", {
			value: t,
			writable: !0,
			configurable: !0
		});
	} catch {
		try {
			e.realProp = t;
		} catch {}
	}
	return e;
}, gr = (e, t = "value", n, r) => {
	if (a(e) || !e) return e;
	if (Array.isArray(e) && !ge(e?.[1], e) && (Array.isArray(e?.[0]) || typeof e?.[0] == "object" || typeof e?.[0] == "function") && (e = e?.[0]), (t ??= Array.isArray(e) ? null : "value") == null || ge(t, e)) return;
	if (t && c(e?.[t]) && br(e?.[t])) return hr(xr(e?.[t]), t);
	if (t && typeof e?.getProperty == "function" && br(e?.getProperty?.(t))) return hr(e?.getProperty?.(t), t);
	let i = yr({
		[L]: e[t] ??= n ?? e[t],
		[an]: r,
		[Symbol?.toStringTag]() {
			return String(e?.[t] ?? this[L] ?? "") || "";
		},
		[Symbol?.toPrimitive](n) {
			return o(e?.[t], n);
		},
		set value(n) {
			i[x] = !0, e[t] = this[L] = n ?? O(e[t]), i[x] = !1;
		},
		get value() {
			return this[L] = e?.[t] ?? this[L];
		}
	});
	hr(i, t);
	let s = U(e, (e, n, r, a) => {
		n === t && i?.[ln]?.({
			key: t,
			value: e,
			oldValue: r,
			trigger: a
		});
	});
	return B(i, Symbol.dispose, s), i;
}, _r = (e, t) => {
	switch (typeof e) {
		case "boolean": return pr(e, t);
		case "number": return dr(e, t);
		case "string": return fr(e, t);
		case "object": if (e != null) return mr(yr(e), t);
		default: return mr(e, t);
	}
}, vr = (e, t = "value", n) => {
	let r = br(e) ? e : _r(e, n);
	return t == null ? r : gr(r, t, n);
};
function yr(e, t) {
	if (e == null || typeof e == "symbol" || !(typeof e == "object" || typeof e == "function") || or(e) || (e = mn?.(e)) == null || e instanceof Promise || e instanceof WeakRef || or(e)) return e;
	let n = e;
	if (n == null || typeof n == "symbol" || !(typeof n == "object" || typeof n == "function") || n instanceof Promise || n instanceof WeakRef) return n;
	let r = n;
	return Array.isArray(n) ? (r = sr(n), r) : n instanceof Map ? (r = lr(n), r) : n instanceof Set ? (r = ur(n), r) : ((typeof n == "function" || typeof n == "object") && (r = cr(n)), r);
}
var br = (e) => typeof HTMLInputElement < "u" && e instanceof HTMLInputElement ? !0 : !!((typeof e == "object" || typeof e == "function") && e != null && (e?.[R] || e?.[un] || V?.has?.(e))), xr = (e) => br(e) ? yr(e) : null, Sr = /* @__PURE__ */ new WeakMap(), Cr = (e) => {
	if (!(typeof e == "symbol" || e == null || !(typeof e == "object" || typeof e == "function"))) return e;
}, wr = "initial", Tr = (e) => {
	let t = e?.[fn] ?? e?.realProp;
	return fe(t) ? t : null;
}, Er = (e, t) => {
	let n = Tr(e);
	return n != null && (t == null || t == "value") ? n : t;
}, Dr = (e, t) => t != null && t == Tr(e) ? e?.value : e?.[t], Or = (e, t, n, r) => {
	if (t != null && t == Tr(e)) {
		let r = Dr(e, t);
		if (r != null) return n?.(r, t, null, "set");
	}
	return me(e, t, n, r);
}, kr = (e, t, n) => {
	let r = Fn(t);
	if (n == wr) {
		if (!r.triggerImmediately) return;
	} else if (!Nn(r.affectTypes, n)) return;
	return (t, r, i, ...a) => e?.(t, r, i, n, ...a);
}, Ar = (e, t, n, r = ["*"]) => {
	if (!e || !Cr(e)) return;
	let i = t == Symbol.iterator ? null : Er(e, t), a = e?.[rn] ?? V.get(e);
	e = e?.[R] ?? e, queueMicrotask(() => {
		let t = kr(n, r, wr);
		t && (i != null && i != Symbol.iterator ? Or(e, i, t, null) : A(e, t, null));
	});
	let o = a?.affected?.(n, i, r);
	return e?.[Symbol.dispose] ? o : (B(o, Symbol.dispose, o), B(o, Symbol.asyncDispose, o), B(e, Symbol.dispose, o), B(e, Symbol.asyncDispose, o), o);
}, jr = (e, t, n, r = ["*"]) => {
	let i = Fn(r).affectTypes, a = {}, o = e?.value, s = (e) => {
		let t = e?.target?.value;
		Nn(i, "set") && n?.(t, "value", o, "set", e), o = t;
	};
	return e?.addEventListener?.("change", s, a), () => e?.removeEventListener?.("change", s, a);
}, Mr = (e) => Array.isArray(e) && e?.length == 2 && Cr(e?.[0]) && (fe(e?.[1]) || e?.[1] == Symbol.iterator), Nr = (e, t, n, r = ["*"]) => {
	let i = fe(e?.[1]) ? e?.[1] : null;
	return U(e?.[0], i, n, r);
}, Pr = (e, t, n, r = ["*"]) => e?.then?.((e) => U?.(e, t, n, r))?.catch?.((e) => (console.warn(e), null)), U = (e, t, n = () => {}, r) => {
	if (typeof t == "function" ? (r = n, n = t, t = null) : t = Er(e, t), (typeof n == "object" || Array.isArray(n)) && (r = n, n = () => {}), (a(e) || typeof e == "symbol") && Fn(r).triggerImmediately) return xe(globalThis?.Promise?.try?.(() => n?.(e, null, null, null, wr)));
	if (typeof e?.[un] == "function") return e?.[un]?.(n, t, r);
	if (Cr(e)) {
		let i = e;
		if (Sr?.has?.(e = e?.[R] ?? e)) return Sr?.get?.(e)?.(i, t, n, r);
		if (br(i) || Mr(e) && br(e?.[0])) return hn(e) ? Sr?.getOrInsert?.(e, Pr)?.(e, t, n, r) : Mr(e) ? Sr?.getOrInsert?.(e, Nr)?.(e, t, n, r) : typeof HTMLInputElement < "u" && e instanceof HTMLInputElement ? Sr?.getOrInsert?.(e, jr)?.(e, t, n, r) : Sr?.getOrInsert?.(e, Ar)?.(i, t, n, r);
		{
			let i = kr(n, r, wr);
			return i ? xe(globalThis?.Promise?.try?.(() => Mr(e) ? Or?.(e?.[0], e?.[1], i, null) : t != null && t != Symbol.iterator ? Or?.(e, t, i, null) : A?.(e, i, null))) : void 0;
		}
	}
}, Fr = class {
	#e = /* @__PURE__ */ new WeakMap();
	#t(e) {
		let t = this.#e.get(e);
		return t || (t = /* @__PURE__ */ new WeakMap(), this.#e.set(e, t)), t;
	}
	#n(e) {
		return !Array.isArray(e) || e.length !== 2 ? [null, null] : e;
	}
	hasL1(e) {
		return this.#e.has(e);
	}
	set(e, t) {
		let [n, r] = this.#n(e);
		return this.#t(n).set(r, t), this;
	}
	get(e) {
		let [t, n] = this.#n(e);
		return this.#e.get(t)?.get(n);
	}
	has(e) {
		let [t, n] = this.#n(e);
		return this.#e.get(t)?.has(n) ?? !1;
	}
	delete(e) {
		let [t, n] = this.#n(e), r = this.#e.get(t);
		return r ? r.delete(n) : !1;
	}
	deleteTop(e) {
		return this.#e.delete(e);
	}
	getOrCreate(e, t) {
		let [n, r] = this.#n(e), i = this.#t(n);
		if (i.has(r)) return i.get(r);
		let a = t();
		return i.set(r, a), a;
	}
	getOrInsert(e, t) {
		let [n, r] = this.#n(e), i = this.#t(n);
		return i.has(r) ? i.get(r) : (i.set(r, t), t);
	}
	getOrInsertComputed(e, t) {
		let [n, r] = this.#n(e), i = this.#t(n);
		if (i.has(r)) return i.get(r);
		let a = t([n, r]);
		return i.set(r, a), a;
	}
}, Ir = new Fr();
function Lr(e, t, n = ["*"]) {
	if (!e) return;
	if (Ir.has([e, t])) return Ir.get([e, t]);
	let r = (r, i, a, o) => {
		if (i == "value") {
			let i = (a?.value ?? a)?.entries?.(), o = e?.value ?? r?.value ?? r;
			if (i) for (let [e, n] of i) {
				let r = n ?? (a?.value ?? a)?.[e] ?? null, i = o?.[e];
				r == null && i != null ? t(i, e, null, "add") : r != null && i == null ? t(null, e, r, "delete") : j(r, i) && t(i, e, r, "set");
			}
			return Lr(r ?? e?.value, t, n);
		}
		return i == null ? void 0 : e[i];
	};
	return Ir.getOrInsertComputed([e, t], () => e instanceof Set ? U([zr(e), Symbol.iterator], t, n) : e instanceof Map ? U(e, t, n) : c(e) ? U(e, r, n) : Array.isArray(e) && !(e?.length == 2 && fe(e?.[1]) && br(e?.[0])) ? U([e, Symbol.iterator], t, n) : U(e, t, n));
}
function Rr(e, t) {
	return gn(e, (e) => {
		let n = Array.isArray(e) && e?.length == 2 && ["object", "function"].indexOf(typeof e?.[0]) >= 0 && fe(e?.[1]), r = n ? e?.[1] : null;
		e = n && r != null ? e?.[0] ?? e : e;
		let i = typeof e == "object" || typeof e == "function" ? e?.[R] ?? e : e;
		(e?.[rn] ?? V.get(i))?.unaffected?.(t, r);
	});
}
//#endregion
//#region ../../projects/object.ts/src/core/Assigned.ts
var zr = (e) => {
	let t = yr([]);
	return t.push(...Array.from(e?.values?.() || [])), B(t, Symbol.dispose, U(e, (e, n, r) => {
		if (j(e, r)) if (r == null && e != null) t.push(e);
		else if (r != null && e == null) {
			let e = t.indexOf(r);
			e >= 0 && t.splice(e, 1);
		} else {
			let n = t.indexOf(r);
			n >= 0 && j(t[n], e) && (t[n] = e);
		}
	})), t;
};
yr({
	index: 0,
	length: 0,
	action: "MANUAL",
	view: "",
	canBack: !1,
	canForward: !1,
	entries: []
}), typeof history < "u" && history.pushState.bind(history), typeof history < "u" && history.replaceState.bind(history), typeof history < "u" && history.go.bind(history), typeof history < "u" && history.forward.bind(history), typeof history < "u" && history.back.bind(history);
//#endregion
//#region ../../projects/lur.e/src/utils/math/Operations.ts
var Br = (e) => {
	let t = [], n = (e) => {
		e && typeof e == "object" && "value" in e ? t.push(e) : Array.isArray(e) ? e.forEach(n) : e && typeof e == "object" && Object.values(e).forEach(n);
	};
	return n(e), t;
}, Vr = (e, t) => {
	let n = () => e.map((e) => e && typeof e == "object" && "value" in e ? e.value : e), r = t(...n());
	if (typeof r == "number") {
		let i = dr(r), a = () => {
			i.value = t(...n());
		};
		return Br(e).forEach((e) => U(e, a)), i;
	}
	let i = r, a = () => {
		i = t(...n());
	};
	return Br(e).forEach((e) => U(e, a)), i;
}, Hr = class {
	static add(e, t, n = "px") {
		return Vr([e, t], () => `calc(${e.value}${n} + ${t.value}${n})`);
	}
	static subtract(e, t, n = "px") {
		return Vr([e, t], () => `calc(${e.value}${n} - ${t.value}${n})`);
	}
	static multiply(e, t) {
		return Vr([e, t], () => `calc(${e.value} * ${t.value})`);
	}
	static divide(e, t) {
		return Vr([e, t], () => `calc(${e.value} / ${t.value})`);
	}
	static clamp(e, t, n, r = "px") {
		return Vr([
			e,
			t,
			n
		], () => `clamp(${t.value}${r}, ${e.value}${r}, ${n.value}${r})`);
	}
	static min(e, t, n = "px") {
		return Vr([e, t], () => `min(${e.value}${n}, ${t.value}${n})`);
	}
	static max(e, t, n = "px") {
		return Vr([e, t], () => `max(${e.value}${n}, ${t.value}${n})`);
	}
};
(class {
	static width = dr(typeof window < "u" ? window?.innerWidth : 0);
	static height = dr(typeof window < "u" ? window?.innerHeight : 0);
	static init() {
		typeof window < "u" && window?.addEventListener?.("resize", () => {
			this.width.value = window?.innerWidth, this.height.value = window?.innerHeight;
		});
	}
	static center() {
		return {
			x: Hr.divide(this.width, dr(2)),
			y: Hr.divide(this.height, dr(2))
		};
	}
}).init();
//#endregion
//#region ../../projects/lur.e/src/lure/core/Binding.ts
var Ur = new Fr(), Wr = new FinalizationRegistry((e) => e?.()), Gr = Symbol.for("@mapped"), Kr = Symbol.for("@virtual"), qr = Symbol.for("@behavior"), Jr = (e) => !!e && typeof e == "object" && "ref" in e && typeof e?.unbind == "function", Yr = (e, t) => {
	if (Jr(t)) {
		t.bind?.();
		let n = () => t.unbind?.();
		return B(e, Symbol.dispose, n), n;
	}
	let n = {
		click: t,
		input: t,
		change: t
	};
	t?.({ target: e });
	let r = T?.(e, "addEventListener", n);
	return B(e, Symbol.dispose, r), r;
}, Xr = (e, t) => {
	if (t) for (let n of t) Yr(e, n);
	return e;
}, Zr = (e, t, n = "value") => {
	let r = ie(e), i = ie(t), a = (e) => {
		p(i, "value", d(r)?.[n ?? "value"] ?? l(d(i)));
	}, o = {
		click: a,
		input: a,
		change: a
	};
	return a?.({ target: e }), T?.(e, "addEventListener", o), p(i, "value", e?.[n ?? "value"] ?? l(d(t))), () => T?.(e, "removeEventListener", o);
}, Qr = (e, t, n = "") => {
	ie(e);
	let r = ie(t), i = g(n);
	return Fe(e, i, (e) => {
		if (e.type == "attributes" && e.attributeName == i) {
			let t = e?.target?.getAttribute?.(e.attributeName), n = d(r), i = l(n);
			j(e.oldValue, t) && n != null && (typeof n == "object" || typeof n == "function") && (j(i, t) || i == null) && p(n, "value", t);
		}
	});
}, $r = (e, t, n) => {
	let r = Ur.get([e, t]);
	if (r) {
		let e = r[n]?.[1];
		delete r[n], e?.();
	}
}, ei = (e, t, n, r) => {
	let i = Ur.getOrInsertComputed([e, t], () => ({}));
	return i?.[n]?.[1]?.(), i[n] = r, !0;
}, ti = (e, t, n, r, i, a) => {
	let o = Jr(t) ? t : null;
	o && (o.bind?.(), t = o.ref);
	let s = ie(e);
	if (e = d(s), !e || !(e instanceof Node || e?.element instanceof Node)) return;
	let c;
	c && c?.abort?.(), c = new AbortController();
	let u = ie(t);
	r?.(e, n, t);
	let f = U?.([t, "value"], (e, t, a) => {
		let o = d(u), f = d(i), p = d(s), m = l(o) ?? l(e);
		(!f || f?.[n] == o) && (typeof o?.[qr] == "function" ? o?.[qr]?.((t = e) => r(p, n, m), [
			e,
			n,
			a
		], [
			c?.signal,
			n,
			s
		]) : r(p, n, m));
	}), p = null;
	typeof a == "boolean" && a && (r == I && (p = Qr(e, t, n)), r == Bt && (p = Zr(e, t, n))), typeof a == "function" && (p = a(e, n, t));
	let m = () => {
		p?.disconnect?.(), p != null && typeof p == "function" && p?.(), o?.unbind?.(), f?.(), c?.abort?.(), $r?.(e, r, n);
	};
	if (B(t, Symbol.dispose, m), Wr.register(e, m), !ei(e, r, n, [t, m])) return m;
}, ni = (e, t, n, r, i, a) => (r(e, t, Jr(n) ? n.ref : n), ti(e, n, t, r, i, a)), ri = (e) => {
	let t = typeof e == "string" ? e.trim() : "";
	if (!t) return !0;
	for (let e of t.split(";")) {
		let t = e.trim();
		if (!t) continue;
		let n = t.indexOf(":");
		if (n < 0 || t.slice(n + 1).trim().length > 0) return !1;
	}
	return !0;
}, ii = (e) => {
	if (e == null) return;
	let t = e.getAttribute("style");
	t != null && ri(t) && (e.removeAttribute("style"), e.style.cssText = "");
}, ai = (e, t) => {
	ri(t) ? (e.style.cssText = "", e.removeAttribute("style")) : e.style.cssText = t;
}, oi = /* @__PURE__ */ new WeakMap(), si = /* @__PURE__ */ new WeakMap(), ci = {
	logAll(e) {
		return () => console.log("attributes:", [...e?.attributes].map((e) => ({
			name: e.name,
			value: e.value
		})));
	},
	append(e) {
		return (...t) => e?.append?.(...[...t || []]?.map?.((e) => e?.element ?? e) || t);
	},
	current(e) {
		return e;
	}
}, li = class {
	direction = "children";
	selector;
	index = 0;
	_eventMap = /* @__PURE__ */ new WeakMap();
	constructor(e, t = 0, n = "children") {
		this.index = t, this.selector = e, this.direction = n;
	}
	_observeDOMChange(e, t, n) {
		return typeof t == "string" ? Le(e, t, n) : null;
	}
	_observeAttributes(e, t, n) {
		return typeof this.selector == "string" ? Ie(e, this.selector, t, n) : Fe(e ?? this.selector, t, n);
	}
	_getArray(e) {
		if (typeof e == "function" && (e = this.selector || e?.(this.selector)), !this.selector) return [e];
		if (typeof this.selector == "string") {
			let t = typeof e?.matches == "function" && e?.element != null && e?.matches?.(this.selector) ? [e] : [];
			if (this.direction == "children") {
				let n = typeof e?.querySelectorAll == "function" && e?.element != null ? [...e?.querySelectorAll?.(this.selector)] : [];
				return n?.length >= 1 ? [...n] : t;
			} else if (this.direction == "parent") {
				let n = e?.closest?.(this.selector);
				return n ? [n] : t;
			}
			return t;
		}
		return Array.isArray(this.selector) ? this.selector : [this.selector];
	}
	_getSelected(e) {
		let t = e?.self ?? e, n = this._selector(e);
		if (typeof n == "string") {
			if (this.direction == "children") return t?.matches?.(n) ? t : t?.querySelector?.(n);
			if (this.direction == "parent") return t?.matches?.(n) ? t : t?.closest?.(n);
		}
		return t == (n?.element ?? n) ? n?.element ?? n : null;
	}
	_redirectToBubble(e) {
		return typeof this._selector() == "string" && {
			pointerenter: "pointerover",
			pointerleave: "pointerout",
			mouseenter: "mouseover",
			mouseleave: "mouseout",
			focus: "focusin",
			blur: "focusout"
		}?.[e] || e;
	}
	_addEventListener(e, t, n, r) {
		let i = this._selector(e);
		if (typeof i != "string") return i?.addEventListener?.(t, n, r), n;
		let a = this._redirectToBubble(t), o = e?.self ?? e, s = (t) => {
			let r = this._selector(e), i = t?.currentTarget ?? o, a = null;
			if (t?.composedPath && typeof t.composedPath == "function") {
				let e = t.composedPath();
				for (let n of e) if (n instanceof HTMLElement || n instanceof Element) {
					let e = n?.element ?? n;
					if (typeof r == "string") {
						if (Ae(e, r, t)) {
							a = e;
							break;
						}
					} else if (ke(r, e, t)) {
						a = e;
						break;
					}
				}
			}
			a ||= (a = t?.target ?? this._getSelected(e) ?? i, a?.element ?? a), typeof r == "string" ? ke(i, Ae(a, r, t), t) && n?.call?.(a, t) : ke(i, r, t) && ke(r, a, t) && n?.call?.(a, t);
		};
		return o?.addEventListener?.(a, s, r), this._eventMap.getOrInsert(o, /* @__PURE__ */ new Map()).getOrInsert(a, /* @__PURE__ */ new WeakMap()).set(n, {
			wrap: s,
			option: r
		}), s;
	}
	_removeEventListener(e, t, n, r) {
		let i = this._selector(e);
		if (typeof i != "string") return i?.removeEventListener?.(t, n, r), n;
		let a = e?.self ?? e, o = this._redirectToBubble(t), s = this._eventMap.get(a);
		if (!s) return;
		let c = s.get(o), l = c?.get?.(n);
		a?.removeEventListener?.(o, l?.wrap ?? n, r ?? l?.option ?? {}), c?.delete?.(n), c?.size == 0 && s?.delete?.(o), s.size == 0 && this._eventMap.delete(a);
	}
	_selector(e) {
		return typeof this.selector == "string" && typeof e?.selector == "string" ? ((e?.selector || "") + " " + this.selector)?.trim?.() : this.selector;
	}
	get(e, t, n) {
		let r = this._getArray(e), i = r.length > 0 ? r[this.index] : this._getSelected(e);
		if (t in ci) return ci?.[t]?.(i);
		if (t == "length" && r?.length != null) return r?.length;
		if (t == "_updateSelector") return (e) => this.selector = e || this.selector;
		if (["style", "attributeStyleMap"].indexOf(t) >= 0) {
			let n = e?.self ?? e, r = this._selector(e), a = typeof r == "string" ? ot(r, "ux-query", n) : i;
			return t == "attributeStyleMap" ? a?.styleMap ?? a?.attributeStyleMap : a?.[t];
		}
		if (t == "self") return e?.self ?? e;
		if (t == "selector") return this._selector(e);
		if (t == "observeAttr") return (t, n) => this._observeAttributes(e, t, n);
		if (t == "DOMChange") return (t) => this._observeDOMChange(e, this.selector, t);
		if (t == "addEventListener") return (t, n, r) => this._addEventListener(e, t, n, r);
		if (t == "removeEventListener") return (t, n, r) => this._removeEventListener(e, t, n, r);
		if (t == "getAttribute") return (t) => {
			let n = this._getArray(e), r = n.length > 0 ? n[this.index] : this._getSelected(e), i = oi?.get?.(e)?.get?.(this.selector) ?? r;
			return Ur?.get?.(i)?.get?.(I)?.has?.(t) ? Ur?.get?.(i)?.get?.(I)?.get?.(t)?.[0] : r?.getAttribute?.(t);
		};
		if (t == "setAttribute") return (t, n) => {
			let r = this._getArray(e), i = r.length > 0 ? r[this.index] : this._getSelected(e);
			return typeof n == "object" && (n?.value != null || "value" in n) ? ni(i, t, n, I, null, !0) : i?.setAttribute?.(t, n);
		};
		if (t == "removeAttribute") return (t) => {
			let n = this._getArray(e), r = n.length > 0 ? n[this.index] : this._getSelected(e), i = oi?.get?.(e)?.get?.(this.selector) ?? r;
			return Ur?.get?.(i)?.get?.(I)?.has?.(t) ? Ur?.get?.(i)?.get?.(I)?.get?.(t)?.[1]?.() : r?.removeAttribute?.(t);
		};
		if (t == "hasAttribute") return (t) => {
			let n = this._getArray(e), r = n.length > 0 ? n[this.index] : this._getSelected(e), i = oi?.get?.(e)?.get?.(this.selector) ?? r;
			return Ur?.get?.(i)?.get?.(I)?.has?.(t) ? !0 : r?.hasAttribute?.(t);
		};
		if (t == "element") {
			if (r?.length <= 1) return i?.element ?? i;
			let e = document.createDocumentFragment();
			return e.append(...r), e;
		}
		if (t == Symbol.toPrimitive && (this.selector?.includes?.("input") || this.selector?.matches?.("input"))) return (e) => e == "number" ? (i?.element ?? i)?.valueAsNumber ?? parseFloat((i?.element ?? i)?.value) : e == "string" ? String((i?.element ?? i)?.value ?? i?.element ?? i) : e == "boolean" ? (i?.element ?? i)?.checked : (i?.element ?? i)?.checked ?? (i?.element ?? i)?.value ?? i?.element ?? i;
		if (t == "checked" && (this.selector?.includes?.("input") || this.selector?.matches?.("input"))) return (i?.element ?? i)?.checked;
		if (t == "value" && (this.selector?.includes?.("input") || this.selector?.matches?.("input"))) return (i?.element ?? i)?.valueAsNumber ?? (i?.element ?? i)?.valueAsDate ?? (i?.element ?? i)?.value ?? (i?.element ?? i)?.checked;
		if (t == un && (this.selector?.includes?.("input") || this.selector?.matches?.("input"))) return (t) => {
			let n = i?.value, r = [(e) => {
				let r = this._getSelected(e?.target);
				t?.(r?.value, "value", n), n = r?.value;
			}, { passive: !0 }];
			return this._addEventListener(e, "change", ...r), () => this._removeEventListener(e, "change", ...r);
		};
		if (t == "deref" && (typeof i == "object" || typeof i == "function") && i != null) {
			let e = new WeakRef(i);
			return () => e?.deref?.()?.element ?? e?.deref?.();
		}
		if (typeof t == "string" && /^\d+$/.test(t)) return r[parseInt(t)];
		let a = i;
		return a?.[t] == null ? r?.[t] == null ? typeof e?.[t] == "function" ? e?.[t].bind(a) : e?.[t] : typeof r[t] == "function" ? r[t].bind(r) : r[t] : typeof a[t] == "function" ? a[t].bind(a) : a[t];
	}
	set(e, t, n) {
		let r = this._getArray(e), i = r.length > 0 ? r[this.index] : this._getSelected(e);
		return typeof t == "string" && /^\d+$/.test(t) || r[t] != null ? !1 : (i && (i[t] = n), !0);
	}
	has(e, t) {
		let n = this._getArray(e), r = n.length > 0 ? n[this.index] : this._getSelected(e);
		return typeof t == "string" && /^\d+$/.test(t) && n[parseInt(t)] != null || n[t] != null || r && t in r;
	}
	deleteProperty(e, t) {
		let n = this._getArray(e), r = n.length > 0 ? n[this.index] : this._getSelected(e);
		return r && t in r ? (delete r[t], !0) : !1;
	}
	ownKeys(e) {
		let t = this._getArray(e), n = t.length > 0 ? t[this.index] : this._getSelected(e), r = /* @__PURE__ */ new Set();
		return t.forEach((e, t) => r.add(t.toString())), Object.getOwnPropertyNames(t).forEach((e) => r.add(e)), n && Object.getOwnPropertyNames(n).forEach((e) => r.add(e)), Array.from(r);
	}
	defineProperty(e, t, n) {
		let r = this._getArray(e), i = r.length > 0 ? r[this.index] : this._getSelected(e);
		return i ? (Object.defineProperty(i, t, n), !0) : !1;
	}
	apply(e, t, n) {
		return n[0] ||= this.selector, this.selector = e?.apply?.(t, n) || this.selector, new Proxy(e, this);
	}
}, ui = (e, t = document.documentElement, n = 0, r = "children") => {
	if ((e?.element ?? e) instanceof HTMLElement) {
		let t = e?.element ?? e;
		return si.getOrInsert(t, new Proxy(t, new li("", n, r)));
	}
	if (typeof e == "function") {
		let t = e;
		return si.getOrInsert(t, new Proxy(t, new li("", n, r)));
	}
	return t == null || typeof t == "string" || typeof t == "number" || typeof t == "boolean" || typeof t == "symbol" || t === void 0 ? null : oi?.get?.(t)?.has?.(e) ? oi?.get?.(t)?.get?.(e) : oi?.getOrInsert?.(t, /* @__PURE__ */ new Map())?.getOrInsertComputed?.(e, () => new Proxy(t, new li(e, n, r)));
}, di = (e) => a(e) ? [] : Array.isArray(e) ? e.map((e, t) => [t, e]) : e instanceof Map ? Array.from(e.entries()) : e instanceof Set ? Array.from(e.values()) : Array.from(Object.entries(e)), fi = (e, t) => {
	if (!t) return e;
	let n = new WeakRef(t), r = new WeakRef(e);
	if (typeof t == "object" || typeof t == "function") {
		di(t).forEach(([e, t]) => {
			I(r?.deref?.(), e, t);
		});
		let i = U(t, (e, t) => {
			I(r?.deref?.(), t, e), ti(r?.deref?.(), e, t, I, n, !0);
		});
		B(t, Symbol.dispose, i), B(e, Symbol.dispose, i);
	} else console.warn("Invalid attributes object:", t);
}, pi = (e, t) => {
	if (!t) return e;
	let n = new WeakRef(t), r = new WeakRef(e);
	if (typeof t == "object" || typeof t == "function") {
		di(t).forEach(([e, t]) => {
			I(r?.deref?.(), "aria-" + (e?.toString?.() || e || ""), t);
		});
		let i = U(t, (e, t) => {
			I(r?.deref?.(), "aria-" + (t?.toString?.() || t || ""), e, !0), ti(r, e, t, I, n, !0);
		});
		B(t, Symbol.dispose, i), B(e, Symbol.dispose, i);
	} else console.warn("Invalid ARIA object:", t);
	return e;
}, mi = (e, t) => {
	if (!t) return e;
	let n = new WeakRef(t), r = new WeakRef(e);
	if (typeof t == "object" || typeof t == "function") {
		di(t).forEach(([e, t]) => {
			Vt(r?.deref?.(), e, t);
		});
		let i = U(t, (e, t) => {
			Vt(r?.deref?.(), t, e), ti(r?.deref?.(), e, t, Vt, n);
		});
		B(t, Symbol.dispose, i), B(e, Symbol.dispose, i);
	} else console.warn("Invalid dataset object:", t);
	return e;
}, hi = (e, t) => {
	if (!t) return e;
	if (typeof t == "string") ai(e, t);
	else if (typeof t?.value == "string") U([t, "value"], (t) => {
		ai(e, t ?? "");
	});
	else if (typeof t == "object" || typeof t == "function") {
		let n = new WeakRef(t), r = new WeakRef(e);
		di(t).forEach(([e, t]) => {
			Ut(r?.deref?.(), e, t);
		});
		let i = U(t, (e, t) => {
			Ut(r?.deref?.(), t, e), ti(r?.deref?.(), e, t, Ut, n?.deref?.());
		});
		B(t, Symbol.dispose, i), B(e, Symbol.dispose, i);
	} else console.warn("Invalid styles object:", t);
	return e;
}, gi = async (e, t) => hi(e, await t?.(e)), _i = (e, t) => {
	if (!t) return e;
	let n = new WeakRef(t), r = new WeakRef(e), i = (e) => {
		let n = ui("input", e?.target);
		n?.value != null && j(n?.value, t?.value) && (t.value = n?.value), n?.valueAsNumber != null && j(n?.valueAsNumber, t?.valueAsNumber) && (t.valueAsNumber = n?.valueAsNumber), n?.checked != null && j(n?.checked, t?.checked) && (t.checked = n?.checked);
	};
	di(t).forEach(([e, t]) => {
		Bt(r?.deref?.(), e, t);
	});
	let a = U(t, (e, t) => {
		let i = r.deref();
		i && (t == "checked" ? we(i, e) : ni(i, t, e, Bt, n?.deref?.(), !0));
	});
	return B(t, Symbol.dispose, a), B(e, Symbol.dispose, a), e.addEventListener("change", i), e;
}, vi = (e, t) => {
	if (!t) return e;
	let n = new WeakRef(e);
	di(t).forEach(([t, n]) => {
		let r = e;
		n === void 0 || n == null ? r.classList.contains(n) && r.classList.remove(n) : r.classList.contains(n) || r.classList.add(n);
	});
	let r = Lr(t, (e) => {
		let t = n?.deref?.();
		t && (e === void 0 || e == null ? t.classList.contains(e) && t.classList.remove(e) : t.classList.contains(e) || t.classList.add(e));
	});
	return B(t, Symbol.dispose, r), B(e, Symbol.dispose, r), e;
}, yi = (e = null, t, n = !0) => {
	let r = [], i = () => {
		r?.forEach?.(([e, t]) => e?.(...t)), r?.splice?.(0, r?.length);
	};
	return (a, o, s, c, l = null) => {
		let u = N(l) ?? N(e), d = W(a, t, o, u), f = W(s, t, o, u), p = N(d?.parentElement ?? f?.parentElement) ?? u;
		if (!p) return;
		e != p && (e = p);
		let m = Te(p, f);
		([
			"add",
			"set",
			"delete"
		].indexOf(c || "") >= 0 || !c) && (d == null && f != null || c == "delete" ? r?.push?.([Ki, [
			p,
			f,
			null,
			m >= 0 ? m : o
		]]) : d != null && f == null || c == "add" ? r?.push?.([Hi, [
			p,
			d,
			null,
			o
		]]) : (d != null && f != null || c == "set") && r?.push?.([Gi, [
			p,
			d,
			null,
			m >= 0 ? m : o,
			f
		]])), (c && c != "get" && [
			"add",
			"set",
			"delete"
		].indexOf(c) >= 0 || !c && !n) && i?.();
	};
}, bi = (e) => ((e instanceof Map || e instanceof Set) && (e = Array.from(e?.values?.())), e), xi = (e, t = [], n) => {
	if (!t || !e) return e;
	n = (t?.[Gr] ? t?.mapper : n) ?? n, t = (t?.[Gr] ? t?.children : t) ?? t;
	let r = Array.from(t?.keys?.() || []), i = bi(t)?.map?.((t, i) => W(t, n, r?.[i] ?? i, e));
	return qi(e, i), i?.forEach?.((t) => Hi(e, t)), e;
}, Si = class {
	#e = document.createComment("");
	#t;
	#n;
	#r = null;
	#i = null;
	#a = {};
	#o;
	#s = null;
	#c = null;
	#l = null;
	makeUpdater(e = null) {
		e && (this.#i?.(), this.#i = null, this.#r = null, this.#r ??= yi(e, null, !1), this.#i ??= U?.([this.#t, "value"], this._onUpdate.bind(this)));
	}
	get boundParent() {
		return this.#l;
	}
	set boundParent(e) {
		e instanceof HTMLElement && N(e) && e != this.#l && (this.#l = e, this.makeUpdater(e), this.#o &&= (this.#o?.parentNode != null && this.#o?.remove?.(), null), this.element);
	}
	constructor(e, t = (e) => e, n = null) {
		this.#e = document.createComment(""), c(t) && (typeof e == "function" || typeof e == "object") && !c(e) && ([e, t] = [t, e]), !n && typeof t == "object" && t && !c(t) && (n = t), this.#s = (t == null ? null : typeof t == "function" ? t : typeof t == "object" ? t?.mapper : null) ?? ((e) => e), this.#o = null, this.#t = (c(e) ? e : t?.(e, -1)) ?? e, this.#n = document.createDocumentFragment();
		let r = {
			removeNotExistsWhenHasPrimitives: !0,
			uniquePrimitives: !0,
			preMap: !0
		}, i = (N(n) ? null : n) || {};
		this.#a = Object.assign(r, i), this.boundParent = N(this.#a?.boundParent) ?? N(n) ?? null;
	}
	$getNodeBy(e, t) {
		let n = a(c(t) ? t?.value : t) ? this.#c ??= Ji(t) : W(t, t == e ? null : this.#s, -1, e);
		return this.#c != null && (a(t) || c(t)) && (this.#c.textContent = "" + (t?.value ?? (a(t) ? t : ""))), n;
	}
	$getNode(e, t = !0) {
		let n = a(this.#t?.value) ? this.#c ??= Ji(this.#t) : W(this.#t?.value, e == this.#t?.value ? null : this.#s, -1, e);
		return this.#c != null && (a(this.#t) || c(this.#t)) && (this.#c.textContent = "" + (a(this.#t) ? this.#t : this.#t?.value ?? "")), n != null && t && (this.#o = n), n;
	}
	get [Gr]() {
		return !0;
	}
	elementForPotentialParent(e) {
		return Promise.try(() => {
			let t = this.$getNode(e);
			if (!(!t || !e || t?.contains?.(e) || e == t) && e instanceof HTMLElement && N(e)) if (Array.from(e?.children).find((e) => e === t)) this.boundParent = e;
			else {
				let n = new MutationObserver((r) => {
					for (let i of r) i.type === "childList" && i.addedNodes.length > 0 && Array.from(i.addedNodes || []).find((e) => e === t) && (this.boundParent = e, n.disconnect());
				});
				n.observe(e, { childList: !0 });
			}
		})?.catch?.(console.warn.bind(console)), this.element;
	}
	get self() {
		let e = this.$getNode(this.boundParent) ?? this.#e, t = N(e?.parentElement) ? e?.parentElement : this.boundParent;
		return this.boundParent ??= N(t) ?? this.boundParent, queueMicrotask(() => {
			let t = N(e?.parentElement) ? e?.parentElement : this.boundParent;
			this.boundParent ??= N(t) ?? this.boundParent;
		}), t ?? this.boundParent ?? e;
	}
	get element() {
		let e = this.$getNode(this.boundParent) ?? this.#e, t = N(e?.parentElement) ? e?.parentElement : this.boundParent;
		return this.boundParent ??= N(t) ?? this.boundParent, queueMicrotask(() => {
			let t = N(e?.parentElement) ? e?.parentElement : this.boundParent;
			this.boundParent ??= N(t) ?? this.boundParent;
		}), e;
	}
	_onUpdate(e, t, n, r) {
		if (a(n) && a(e)) return;
		let i = a(n) ? this.#o : this.$getNodeBy(this.boundParent, n), o = this.$getNode(this.boundParent, !1) ?? this.#e;
		(i && !i?.parentNode || this.#o?.parentNode) && (i = this.#o ?? i);
		let s = this.#r?.(o, Te(this.boundParent, i), i, r, this.boundParent);
		return o != null && o != this.#o ? this.#o = o : o == null && i != this.#o && (this.#o = i), s;
	}
}, Ci = (e) => (typeof e == "object" || typeof e == "function" || typeof e == "symbol") && e != null, wi = (e, t, n = null) => {
	let r = null;
	if (e instanceof HTMLElement) return ui(e);
	if (e == null) return document.createComment(":NULL:");
	let i = (typeof t == "function" ? t(e, -1) : e) ?? e;
	if (a(i)) return r ??= Ji(i);
	if (r != null && a(i) && (r.textContent = "" + i), i != null && c(i)) {
		if (a(i?.value)) return i?.value == null ? document.createComment(":NULL:") : r ??= Ji(i?.value);
		if (typeof i == "object" || typeof i == "function") return Di.getOrInsertComputed(Ci(e) ? e : i, () => new Si(e, t, n));
	}
	return W(i, null, -1, n);
}, Ti = (e, t) => (t && t != e && !e?.contains?.(t) && N(t) ? e?.elementForPotentialParent?.(t) : null) ?? e?.element, Ei = (e, t) => Ti(e, t) ?? (c(e) && P(e?.value) ? e?.value : e), Di = /* @__PURE__ */ new WeakMap(), Oi = /* @__PURE__ */ new WeakMap(), ki = (e) => a(e) ? e : c(e) && a(e?.value) ? Oi?.get(e) : Di?.get?.(e), Ai = /* @__PURE__ */ new WeakMap(), ji = (e, t) => {
	if (Ai?.has?.(e)) return Ai?.get?.(e);
	let n = document.createComment(":PROMISE:");
	return e?.then?.((r) => {
		let i = typeof t == "function" ? t(r) : r;
		Ai?.set?.(e, i), queueMicrotask(() => {
			try {
				if (typeof n?.replaceWith == "function") {
					if (!n?.isConnected) return;
					P(i) && n?.replaceWith?.(i);
				} else n?.isConnected && P(i) && n?.parentNode?.replaceChild?.(n, i);
			} catch {
				if (!n?.isConnected) return;
				n?.remove?.();
			}
		});
	}), n;
}, Mi = (e, t, n = -1, r) => t == null ? ((e instanceof WeakRef || typeof e?.deref == "function") && (e = e.deref()), e instanceof Promise || typeof e?.then == "function" ? ji(e, (e) => Mi(e, t, n, r)) : P(e) && !e?.element || P(e?.element) ? e : c(e) ? (e instanceof HTMLElement ? ui : wi)(e) : typeof e == "object" && e ? ki(e) : typeof e == "function" ? Mi(e?.(), t, n, r) : a(e) && e != null ? Ji(e) : document.createComment(":NULL:")) : e = Mi(t?.(e, n), null, -1, r), Ni = (e, t) => Ei(e, t) ?? P(e), Pi = (e, t, n = -1, r) => t == null ? ((e instanceof WeakRef || typeof e?.deref == "function") && (e = e.deref()), e instanceof Promise || typeof e?.then == "function" ? ji(e, (e) => W(e, t, n, r)) : P(e) && !e?.element ? e : P(e?.element) ? Ei(e, r) : c(e) ? (e instanceof HTMLElement ? ui : wi)(e)?.element : typeof e == "object" && e ? ki(e) : typeof e == "function" ? W(e?.(), t, n, r) : a(e) && e != null ? Ji(e) : document.createComment(":NULL:")) : e = W(t?.(e, n), null, -1, r), Fi = (e) => (typeof e == "object" || typeof e == "function" || typeof e == "symbol") && e != null, Ii = /* @__PURE__ */ new WeakSet(), Li = (e, t, n = -1, r) => {
	if ((e instanceof WeakRef || typeof e?.deref == "function") && (e = e.deref()), e instanceof Promise || typeof e?.then == "function") return ji(e, (e) => Li(e, t, n, r));
	if (Fi(e) && !P(e)) {
		if (Di.has(e)) {
			let i = ki(e) ?? Mi(e, t, n, r);
			return Ni(i instanceof WeakRef ? i?.deref?.() : i, r);
		}
		let i = Mi(e, t, n, r);
		return !t && i != null && i != e && Fi(e) && !P(e) && Di.set(e, i), Ni(i, r);
	}
	return Pi(e, t, n, r);
}, W = (e, t, n = -1, r) => {
	if (Fi(e) && Ii.has(e)) return ki(e) ?? P(e);
	Fi(e) && Ii.add(e);
	let i = Li(e, t, n, r);
	return Fi(e) && Ii.delete(e), i;
}, Ri = (e, t, n = -1) => {
	P(t) && t != null && t?.parentNode != e && (Number.isInteger(n) && n >= 0 && n < e?.childNodes?.length ? e?.insertBefore?.(t, e?.childNodes?.[n]) : e?.append?.(t));
}, zi = (e, t, n = -1) => {
	if (!(!P(t) || e == t || t?.parentNode == e)) {
		if (t = t?._onUpdate ? Ti(t, e) : t, !t?.parentNode && P(t)) {
			Ri(e, t, n);
			return;
		}
		e?.parentNode != t?.parentNode && P(t) && Ri(e, t, n);
	}
}, Bi = (e) => ((e instanceof Map || e instanceof Set) && (e = Array.from(e?.values?.())), e), Vi = (e, t, n, r = -1) => {
	let i = t?.length ?? 0;
	if (Array.isArray(pn(t)) || t instanceof Map || t instanceof Set) {
		let i = Bi(t)?.map?.((t, r) => W(t, n, r, e))?.filter?.((e) => e != null), a = document.createDocumentFragment();
		i?.forEach?.((e) => zi(a, e)), zi(e, a, r);
	} else {
		let a = W(t, n, i, e);
		a != null && zi(e, a, r);
	}
}, Hi = (e, t, n, r = -1) => {
	n != null && (t = n?.(t, r)), t?.children && Array.isArray(pn(t?.children)) && (t?.[Kr] || t?.[Gr]) ? Vi(e, t?.children, null, r) : Vi(e, t, null, r);
}, Ui = (e, t, n = -1) => !e || t?.parentNode == e && t?.parentNode != null ? t : t?.parentNode != e && !N(t?.parentNode) && Number.isInteger(n) && n >= 0 && Array.from(e?.childNodes || [])?.length > n ? e.childNodes?.[n] : t, Wi = (e, t, n) => {
	if (t?.parentNode) if (t?.parentNode == n?.parentNode) if (e = t?.parentNode ?? e, t.nextSibling === n) e.insertBefore(n, t);
	else if (n.nextSibling === t) e.insertBefore(t, n);
	else {
		let r = t.nextSibling;
		e.replaceChild(n, t), e.insertBefore(t, r);
	}
	else t?.replaceWith?.(n);
}, Gi = (e, t, n, r = -1, i) => {
	n != null && (t = n?.(t, r)), e ||= i?.parentNode;
	let a = Ui(e, W(i, n, r), r);
	if (a instanceof Text && typeof t == "string") a.textContent = t;
	else if (t != null) {
		let n = W(t);
		a?.parentNode == e && a != n && a instanceof Text && n instanceof Text ? a?.textContent != n?.textContent && (a.textContent = n?.textContent?.trim?.() ?? "") : a?.parentNode == e && a != n && a != null && a?.parentNode != null ? Wi(e, a, n) : (a?.parentNode != e || a?.parentNode == null) && Hi(e, n, null, r);
	}
}, Ki = (e, t, n, r = -1) => {
	let i = W(t, n);
	if (e ||= i?.parentNode, Array.from(e?.childNodes ?? [])?.length < 1) return;
	let a = Ui(e, i, r);
	return a?.parentNode == e && a?.remove?.(), e;
}, qi = (e, t, n) => {
	let r = Array.from(pn(t) || [])?.map?.((e, t) => W(e, n, t));
	return Array.from(e.childNodes).forEach((e) => {
		r?.find?.((t) => !j?.(t, e)) || e?.remove?.();
	}), e;
}, Ji = (e) => a(e) && e != null ? document.createTextNode(e) : e == null ? document.createComment(":NULL:") : Oi.getOrInsertComputed(e, () => {
	let t = document.createTextNode(((c(e) ? e?.value : e) ?? "")?.trim?.() ?? "");
	return U([e, "value"], (e) => {
		t.textContent = ("" + (e?.innerText ?? e?.textContent ?? e?.value ?? e ?? ""))?.trim?.() ?? "";
	}), t;
}), Yi = (e) => ((e instanceof Map || e instanceof Set) && (e = Array.from(e?.values?.())), e), Xi = class {
	#e;
	#t;
	#n;
	#r;
	#i;
	#a = null;
	#o = null;
	#s = {};
	#c = document.createComment("");
	#l = /* @__PURE__ */ new Map();
	#u = null;
	makeUpdater(e = null) {
		e && (this.#o?.(), this.#o = null, this.#a = null, this.#a ??= yi(e, this.mapper.bind(this), Array.isArray(this.#e)), this.#o ??= Lr?.(this.#e, this._onUpdate.bind(this)));
	}
	get boundParent() {
		return this.#u;
	}
	set boundParent(e) {
		e instanceof HTMLElement && N(e) && e != this.#u && (this.#u = e, this.makeUpdater(e), this.element);
	}
	constructor(e, t = (e) => e, n = null) {
		i(t) && (typeof e == "function" || typeof e == "object") && !i(e) && ([e, t] = [t, e]), !n && typeof t == "object" && t && !i(t) && (n = t), this.#c = document.createComment(""), this.#r = /* @__PURE__ */ new WeakMap(), this.#i = /* @__PURE__ */ new Map(), this.#n = (t == null ? null : typeof t == "function" ? t : typeof t == "object" ? t?.mapper : null) ?? ((e) => e), this.#e = (i(e) ? e : e?.iterator ?? t?.iterator ?? e) ?? [], this.#t = document.createDocumentFragment();
		let r = {
			removeNotExistsWhenHasPrimitives: !0,
			uniquePrimitives: !0,
			preMap: !0
		}, a = (N(n) ? null : n) || {};
		this.#s = Object.assign(r, a), this.boundParent = N(this.#s?.boundParent) ?? N(n) ?? null, this.boundParent || this.#s.preMap && (xi(this.#t, this.#e, this.mapper.bind(this)), this.#t.childNodes.length === 0 && this.#t.appendChild(this.#c));
	}
	get [Gr]() {
		return !0;
	}
	elementForPotentialParent(e) {
		return Promise.try(() => {
			let t = W(this.#e?.[0], this.mapper.bind(this), 0);
			if (!(!t || !e || t?.contains?.(e) || e == t) && e instanceof HTMLElement && N(e)) if (Array.from(e?.children).find((e) => e === t)) this.boundParent = e;
			else {
				let n = new MutationObserver((r) => {
					for (let i of r) i.type === "childList" && i.addedNodes.length > 0 && Array.from(i.addedNodes || []).find((e) => e === t) && (this.boundParent = e, n.disconnect());
				});
				n.observe(e, { childList: !0 });
			}
		})?.catch?.(console.warn.bind(console)), this.element;
	}
	get children() {
		return Yi(this.#e);
	}
	get self() {
		let e = W(this.#e?.[0], this.mapper.bind(this), 0), t = N(e?.parentElement) ? e?.parentElement : this.boundParent;
		return this.boundParent ??= N(t) ?? this.boundParent, queueMicrotask(() => {
			let t = N(e?.parentElement) ? e?.parentElement : this.boundParent;
			this.boundParent ??= N(t) ?? this.boundParent;
		}), t ?? this.boundParent ?? xi(this.#t, this.#e, this.mapper.bind(this));
	}
	get element() {
		let e = this.#t?.childNodes?.length > 0 ? this.#t : W(this.#e?.[0], this.mapper.bind(this), 0), t = N(e?.parentElement) ? e?.parentElement : this.boundParent;
		return this.boundParent ??= N(t) ?? this.boundParent, queueMicrotask(() => {
			let t = N(e?.parentElement) ? e?.parentElement : this.boundParent;
			this.boundParent ??= N(t) ?? this.boundParent;
		}), e;
	}
	get mapper() {
		return (...e) => {
			if (e?.[0] == null) return null;
			if (e?.[0] instanceof Node) return e?.[0];
			if (e?.[0] instanceof Promise || typeof e?.[0]?.then == "function") return null;
			if (!((e?.[1] == null || e?.[1] < 0 || typeof e?.[1] != "number" || !ne(e?.[1])) && (Array.isArray(this.#e) || this.#e instanceof Set))) {
				if (e?.[0] != null && (typeof e?.[0] == "object" || typeof e?.[0] == "function" || typeof e?.[0] == "symbol")) return this.#r.getOrInsert(e?.[0], this.#n(...e));
				if (e?.[0] != null && this.#e instanceof Set) return this.#i.getOrInsert(e?.[0], this.#n(...e));
				if (e?.[0] != null && this.#e instanceof Map) return typeof e?.[0] == "object" || typeof e?.[0] == "function" || typeof e?.[0] == "symbol" ? this.#r.getOrInsert(e?.[0], this.#n(...e)) : typeof e?.[1] == "object" || typeof e?.[1] == "function" || typeof e?.[1] == "symbol" ? this.#r.getOrInsert(e?.[1], this.#n(...e)) : this.#i.getOrInsert(e?.[1], this.#n(...e));
				if (e?.[0] != null) return this.#s?.uniquePrimitives && a(e?.[0]) ? this.#i.getOrInsert(e?.[0], this.#n(...e)) : this.#n(...e);
			}
		};
	}
	_onUpdate(e, t, n, r = "") {
		if (r == "add" || e != null && n == null) {
			if (this.#l.has(t)) return;
			let e = wi(vr(this.#e, t), (...e) => ((e?.[1] == null || e?.[1] < 0) && (e[1] = t ?? e?.[1]), this.mapper(...e)));
			this.#l.set(t, e), Hi(this.boundParent, e, null, t);
		}
		if (r == "delete" || e == null && n != null) {
			let e = this.#l.get(t);
			e && Ki(this.boundParent, e, null, t), this.#l.delete(t);
		}
	}
	*[Symbol.iterator]() {
		let e = 0;
		if (this.#e) for (let t of this.#e) yield this.mapper(t, e++);
	}
}, Zi = (e, t, n = null) => new Xi(e, t, n), Qi = (e, t = document.documentElement) => {
	if (e?.value == null) return ui(e, t);
	let n = ui(e?.value, t);
	return U(e, (e, t) => n?._updateSelector(e)), n;
}, $i = (e) => {
	if (typeof e == "string") {
		let t = Qi(Ee(e));
		return t?.element ?? t;
	} else if (e instanceof HTMLElement || e instanceof Element || e instanceof DocumentFragment || e instanceof Document || e instanceof Node) return e;
	else return null;
}, ea = (e, t = {}, n) => {
	let r = W(typeof e == "string" ? $i(e) : e, null, -1);
	return r && n && Zi(n, (e) => e, r), r && t && (t.ctrls != null && Xr(r, t.ctrls), t.attributes != null && fi(r, t.attributes), t.properties != null && _i(r, t.properties), t.classList != null && vi(r, t.classList), t.behaviors != null && vt(r, t.behaviors), t.dataset != null && mi(r, t.dataset), t.stores != null && St(r, t.stores), t.mixins != null && Ct(r, t.mixins), t.style != null && hi(r, t.style), t.aria != null && pi(r, t.aria), "value" in t && ni(r, "value", t.value, Bt, t, !0), "placeholder" in t && ni(r, "placeholder", t.placeholder, Bt, t, !0), t.is != null && ni(r, "is", t.is, I, t, !0), t.role != null && ni(r, "role", t.role, Bt, t), t.slot != null && ni(r, "slot", t.slot, Bt, t), t.part != null && ni(r, "part", t.part, I, t, !0), t.name != null && ni(r, "name", t.name, I, t, !0), t.type != null && ni(r, "type", t.type, I, t, !0), t.icon != null && ni(r, "icon", t.icon, I, t, !0), t.inert != null && ni(r, "inert", t.inert, I, t, !0), t.hidden != null && ni(r, "hidden", t.visible ?? t.hidden, zt, t), t.on != null && Oe(r, t.on), t.rules != null && t.rules.forEach?.((e) => gi(r, e))), ui(r);
};
//#endregion
//#region ../../projects/lur.e/src/lure/misc/Normalizer.ts
function ta(e, t = 4) {
	let n = 0;
	for (let r = 0; r < e.length; r++) {
		let i = e[r];
		if (i === " ") n += 1;
		else if (i === "	") n += t - n % t;
		else break;
	}
	return n;
}
function na(e, t, n = 4) {
	let r = 0, i = 0;
	for (; i < e.length && r < t;) {
		let t = e[i];
		if (t === " ") r += 1, i++;
		else if (t === "	") r += n - r % n, i++;
		else break;
	}
	return e.slice(i);
}
function ra(e) {
	return e.includes("\r\n") ? "\r\n" : e.includes("\r") ? "\r" : "\n";
}
function ia(e, t) {
	for (e = Math.abs(e), t = Math.abs(t); t;) [e, t] = [t, e % t];
	return e;
}
function aa(e, { ignoreFirstLine: t = !0, tabWidth: n = 4 } = {}) {
	let r = e.split(/\r\n|\n|\r/), i = +!!t, a = [];
	for (let e = i; e < r.length; e++) {
		let t = r[e];
		t.trim() !== "" && a.push(ta(t, n));
	}
	if (a.length === 0) return {
		min: 0,
		step: 0,
		allEven: !0,
		allDiv4: !0
	};
	let o = Math.min(...a), s = a.map((e) => e - o).filter((e) => e > 0), c = 0;
	for (let e of s) c = c ? ia(c, e) : e;
	let l = a.every((e) => e % 2 == 0), u = a.every((e) => e % 4 == 0);
	return c = c === 0 ? u ? 4 : l ? 2 : 1 : c % 4 == 0 ? 4 : c % 2 == 0 ? 2 : 1, {
		min: o,
		step: c,
		allEven: l,
		allDiv4: u
	};
}
function oa(e, t, n = "floor", r = 4) {
	if (!t || t <= 1) return e;
	let i = ta(e, r);
	if (i === 0) return e;
	let a;
	a = n === "nearest" ? Math.round(i / t) * t : n === "ceil" ? Math.ceil(i / t) * t : Math.floor(i / t) * t;
	let o = i - a;
	return o > 0 ? na(e, o, r) : o < 0 ? " ".repeat(-o) + e : e;
}
function sa(e, { scope: t = "void-only" } = {}) {
	if (!e || typeof e != "string") return e;
	let n = new Set([
		"area",
		"base",
		"br",
		"col",
		"embed",
		"hr",
		"img",
		"input",
		"link",
		"meta",
		"param",
		"source",
		"track",
		"wbr"
	]), r = "", i = 0, a = e.length;
	for (; i < a;) {
		let o = e[i];
		if (o !== "<") {
			r += o, i++;
			continue;
		}
		if (e.startsWith("<!--", i)) {
			let t = e.indexOf("-->", i + 4);
			if (t === -1) {
				r += e.slice(i);
				break;
			}
			r += e.slice(i, t + 3), i = t + 3;
			continue;
		}
		if (e[i + 1] === "!" || e[i + 1] === "?") {
			let t = e.indexOf(">", i + 2);
			if (t === -1) {
				r += e.slice(i);
				break;
			}
			r += e.slice(i, t + 1), i = t + 1;
			continue;
		}
		if (e[i + 1] === "/") {
			let t = e.indexOf(">", i + 2);
			if (t === -1) {
				r += e.slice(i);
				break;
			}
			r += e.slice(i, t + 1), i = t + 1;
			continue;
		}
		let s = i + 1;
		for (; s < a && /\s/.test(e[s]);) s++;
		let c = s;
		for (; s < a && /[A-Za-z0-9:-]/.test(e[s]);) s++;
		let l = e.slice(c, s).toLowerCase(), u = s, d = null;
		for (; u < a;) {
			let t = e[u];
			if (d) t === d && (d = null), u++;
			else if (t === "\"" || t === "'") d = t, u++;
			else if (t === ">") break;
			else u++;
		}
		if (u >= a) {
			r += e.slice(i);
			break;
		}
		let f = e.slice(i, u + 1);
		if (!(t === "all" || t === "input-only" && l === "input" || t === "void-only" && n.has(l))) {
			r += f, i = u + 1;
			continue;
		}
		let p = "", m = null, h = !1;
		for (let e = 0; e < f.length; e++) {
			let t = f[e];
			if (m) {
				p += t, t === m && (m = null);
				continue;
			}
			if (t === "\"" || t === "'") {
				m = t, p += t, h = !1;
				continue;
			}
			if (t === "\n" || t === "\r" || t === "	" || t === " ") {
				h ||= (p += " ", !0);
				continue;
			}
			p += t, h = !1;
		}
		p = p.replace(/\s*(\/?)\s*>$/, "$1>"), r += p, i = u + 1;
	}
	return r;
}
function ca(e, { preserveCommentGaps: t = !0 } = {}) {
	if (!e || typeof e != "string") return e;
	if (!t) return e.replace(/>\s+</g, "><");
	let n = e;
	return n = n.replace(/-->([^\S\r\n]+)<!--/g, "--><!--").replace(/-->([^\S\r\n]+)</g, "--><").replace(/>([^\S\r\n]+)<!--/g, "><!--"), n = n.replace(/>\s+</g, "><"), n = n.replace(RegExp("", "g"), " "), n;
}
function la(e, { normalizeIndent: t = !0, ignoreFirstLine: n = !0, tabWidth: r = 4, alignStep: i = "auto", quantize: a = "none" } = {}) {
	if (!e || typeof e != "string" || e.indexOf("<") === -1) return e;
	e = e?.trim?.();
	let o = [], s = e.replace(/<(pre|textarea|script|style)\b[\s\S]*?<\/\1>/gi, (e) => `\u0000${o.push(e) - 1}\u0000`), c = ra(s), l = s.split(/\r\n|\n|\r/), u = +!!n, { min: d, step: f } = aa(s, {
		ignoreFirstLine: n,
		tabWidth: r
	});
	if (t && d > 0) for (let e = u; e < l.length; e++) {
		let t = l[e];
		t.trim() !== "" && (l[e] = na(t, d, r));
	}
	let p = i === "auto" ? f : i;
	if (a !== "none" && p > 1) for (let e = u; e < l.length; e++) {
		let t = l[e];
		t.trim() !== "" && (l[e] = oa(t, p, a, r));
	}
	let m = l.join(c);
	return m = sa(m, { scope: "void-only" }), m = ca(m), m.replace(/\u0000(\d+)\u0000/g, (e, t) => o[+t])?.trim?.();
}
function ua(e, ...t) {
	let n = t?.[0] ?? "", r = e.indexOf(n);
	if (r < 0) {
		let e = t?.join?.("") ?? "";
		return /<([A-Za-z\/!?])[\w\W]*$/.test(e) && !/>[\w\W]*$/.test(e);
	}
	let i = e.slice(0, r + 1).join(""), a = !1, o = !1, s = !1;
	for (let e = 0; e < i.length; e++) {
		let t = i[e], n = i[e + 1] ?? "";
		if (!a) {
			t === "<" && /[A-Za-z\/!?]/.test(n) && (a = !0, o = !1, s = !1);
			continue;
		}
		if (!o && !s) {
			if (t === "\"") {
				s = !0;
				continue;
			}
			if (t === "'") {
				o = !0;
				continue;
			}
			if (t === ">") {
				a = !1;
				continue;
			}
		} else if (s) {
			if (t === "\"") {
				s = !1;
				continue;
			}
		} else if (o && t === "'") {
			o = !1;
			continue;
		}
	}
	return a;
}
//#endregion
//#region ../../projects/lur.e/src/lure/misc/Syntax.ts
var da = /* @__PURE__ */ new WeakMap(), fa = (e) => {
	let t = e.match(/^([a-zA-Z0-9\-]+)?(?:#([a-zA-Z0-9\-_]+))?((?:\.[a-zA-Z0-9\-_]+)*)$/);
	if (!t) return {
		tag: e,
		id: null,
		className: null
	};
	let [, n = "div", r, i] = t;
	return {
		tag: n,
		id: r,
		className: i ? i.replace(/\./g, " ").trim() : null
	};
}, pa = (e) => {
	if (typeof e != "string" || !e?.trim?.()) return -1;
	let t = e.match(/^#\{(\d+)\}$/);
	if (t) return parseInt(t[1] ?? "-1", 10);
	let n = e.match(/#\{(\d+)\}/);
	return n ? parseInt(n[1] ?? "-1", 10) : -1;
}, ma = (e, t, n, r) => {
	if (!e) return e;
	if (e != null) {
		let n = [], r = (t) => {
			let r = Array.from(e?.attributes || []).find((e) => e.name == t && e.value?.includes?.("#{"));
			if (r) {
				let e = [t, pa(r?.value) ?? -1];
				return n.push(e), e;
			}
			return [t, -1];
		};
		[
			"dataset",
			"style",
			"classList",
			"visible",
			"aria",
			"value",
			"placeholder",
			"ref"
		].forEach((e) => r(e));
		let i = (t, n) => {
			let r = [];
			for (let i of Array.from(e?.attributes || [])) {
				let e = Array.isArray(t) ? t?.some?.((e) => e == "") : t == "", a = (Array.isArray(t) ? t.find((e) => i.name?.startsWith?.(e)) : t = i.name?.startsWith?.(t) ? t : "") ?? "", o = i.name.trim()?.replace?.(a, ""), s = i.value?.includes?.("#{") && i.value?.includes?.("}"), c = pa(i?.value), l = Array.isArray(n) ? n?.some?.((e) => o?.startsWith?.(e)) : n == o;
				s && (a == "" && e || a != "") && c >= 0 && !l && r.push([o, c]);
			}
			return r;
		}, a = (t, n, r = "") => {
			let i = /* @__PURE__ */ new Map();
			for (let a of Array.from(e?.attributes || [])) {
				let e = Array.isArray(t) ? t?.some?.((e) => e == "") : t == "", o = (Array.isArray(t) ? t.find((e) => a.name?.startsWith?.(e)) : t = a.name?.startsWith?.(t) ? t : "") ?? "", s = a.name.trim()?.replace?.(o, ""), c = a.value?.includes?.("#{") && a.value?.includes?.("}"), l = pa(a?.value) ?? -1, u = Array.isArray(n) ? n?.some?.((e) => s?.startsWith?.(e)) : n == s, d = (Array.isArray(r) ? r?.some?.((e) => a.name === e) : a.name === r) && r !== "";
				if (c && (o == "" && e || o != "" || d) && l >= 0 && !u) {
					let e = d ? a.name : s;
					i.has(e) || i.set(e, []), i.get(e)?.push(l);
				}
			}
			return Array.from(i.entries());
		}, o = i(["attr:", ""], [
			"ref",
			"value",
			"placeholder"
		]), s = i(["prop:"], []), c = a(["on:", "@"], [], ""), l = a(["ref:"], [], ["ref"]), u = Object.fromEntries(n?.filter?.((e) => e[1] >= 0)?.map?.((e) => [e[0], t?.[e[1]] ?? null]) ?? []);
		u.attributes = Object.fromEntries(o?.filter?.((e) => e[1] >= 0)?.map?.((e) => [e[0], t?.[e[1]] ?? null]) ?? []), u.properties = Object.fromEntries(s?.filter?.((e) => e[1] >= 0)?.map?.((e) => [e[0], t?.[e[1]] ?? null]) ?? []), u.on = Object.fromEntries(c?.filter?.((e) => e[1]?.some?.((e) => e >= 0))?.map?.((e) => [e[0], e[1]?.map?.((e) => t?.[e]).filter((e) => e != null)]) ?? []);
		let d = n?.find?.((e) => e[0] == "ref" && e[1] >= 0)?.[1];
		if (d != null && d >= 0) {
			let n = t?.[d];
			typeof n == "function" ? n?.(e) : typeof n == "object" && n && (n.value = e);
		}
		l?.forEach?.((n) => {
			(n?.[1]?.filter?.((e) => e != null && e >= 0)?.map?.((e) => t?.[e])?.filter?.((e) => e != null))?.forEach?.((t) => {
				typeof t == "function" ? t?.(e) : typeof t == "object" && t && (t.value = e);
			});
		}), ((e) => {
			if (e == null) return;
			let t = (e) => o?.some?.((t) => t[0] == e) || n?.some?.((t) => t[0] == e) || e?.startsWith?.("ref:") || e == "ref";
			for (let n of Array.from(e?.attributes || [])) (n.value?.includes?.("#{") && n.value?.includes?.("}") && t(n.name) || n.value?.startsWith?.("#{") && n.value?.endsWith?.("}") || n.name?.includes?.(":") || n.name?.includes?.("ref:") || n.name == "ref") && e?.removeAttribute?.(n.name);
			for (let t of Array.from(e?.attributes || [])) typeof t.value == "string" && /#\{\d+\}/.test(t.value) && e?.removeAttribute?.(t.name);
		})(e), ii(e), da?.has?.(e) || da?.set?.(e, ea(e, u));
	}
	return da?.get?.(e) ?? e;
}, ha = (e, ...t) => {
	let n = [];
	for (let r = 0; r < e?.length; r++) {
		let i = e?.[r], a = t?.[r];
		n.push(ba(i)), n.push(a);
	}
	if (n?.length <= 1) return W(n?.[0], null, 0);
	let r = document.createDocumentFragment();
	return r.append(...n?.filter?.((e) => e != null)?.map?.((e, t) => W(e, null, t))?.filter?.((e) => e != null)), r;
};
function ga(e, ...t) {
	return e?.at?.(0)?.trim?.()?.startsWith?.("<") && e?.at?.(-1)?.trim?.()?.endsWith?.(">") ? ya({ createElement: null })(e, ...t) : ha(e, ...t);
}
var _a = (e) => e != null && e instanceof HTMLElement && !(e instanceof DocumentFragment || e instanceof HTMLBodyElement && e != document.body), va = (e, t, n) => {
	n != null && (n.boundParent = e);
	let r = W(n, null, -1, e);
	P(r) ? r?.parentNode != e && !r?.contains?.(e) && r != null && t?.replaceWith?.(c(r) && (typeof r?.value == "object" || typeof r?.value == "function") && P(r?.value) ? r?.value : r) : t?.remove?.();
};
function ya({ createElement: e = null } = {}) {
	return function(e, ...t) {
		let n = [], r = [], i = [];
		for (let o = 0; o < e.length; o++) if (n.push(e?.[o] || ""), o < t.length) if (e[o]?.trim()?.endsWith?.("<")) {
			let e = fa(t?.[o]);
			n.push(e.tag || "div"), e.id && n.push(` id="${e.id}"`), e.className && n.push(` class="${e.className}"`);
		} else {
			let s = ua(e, e?.[o] || "", e?.[o + 1] || ""), c = /[\w:\-\.\]]\s*=\s*$/.test(e[o]?.trim?.() ?? "") || e[o]?.trim?.()?.endsWith?.("="), l = e[o]?.trim?.()?.match?.(/['"]$/), u = e[o + 1]?.trim?.()?.match?.(/^['"]/) ?? l, d = l && u, f = c;
			if ((f || d) && s) {
				let e = f && !d, r = i.length;
				n.push((typeof t?.[o] == "string" ? t?.[o]?.trim?.() != "" : t?.[o] != null) ? e ? `"#{${r}}"` : `#{${r}}` : ""), i.push(t?.[o]);
			} else if (!s) {
				let e = r.length;
				n.push((typeof t?.[o] == "string" ? t?.[o]?.trim?.() != "" : t?.[o] != null) ? a(t?.[o]) ? String(t?.[o])?.trim?.() : `<!--o:${e}-->` : ""), r.push(t?.[o]);
			}
		}
		let o = la(n.join("").trim()), s = /* @__PURE__ */ new WeakMap(), c = new DOMParser().parseFromString(o, "text/html"), l = (c instanceof HTMLTemplateElement || c?.matches?.("template") ? c : c.querySelector("template"))?.content ?? c.body ?? c, u = document.createDocumentFragment(), d = Array.from(l.childNodes)?.filter((e) => e instanceof Node).map((e) => (!_a(e?.parentNode) && e?.parentNode != u && (e?.remove?.(), e != null && u?.append?.(e)), e)), f = [];
		return d.forEach((e) => {
			let t = e ? document.createTreeWalker(e, NodeFilter.SHOW_ALL, null) : null;
			do {
				let e = t?.currentNode;
				f.push(e);
			} while (t?.nextNode?.());
		}), f?.filter?.((e) => e?.nodeType == Node.COMMENT_NODE)?.forEach?.((e) => {
			if (e?.nodeValue?.trim?.()?.includes?.("o:") && Number.isInteger(parseInt(e?.nodeValue?.trim?.()?.slice?.(2) ?? "-1"))) {
				let t = r?.[parseInt(e?.nodeValue?.trim?.()?.slice?.(2) ?? "-1") ?? -1];
				if (t == null || t === void 0 || (typeof t == "string" ? t : null)?.trim?.() == "") e?.remove?.();
				else {
					let n = e?.parentNode;
					Array.isArray(t) || t instanceof Map || t instanceof Set ? va?.(n, e, t = Zi(t, null, n)) : t != null && va?.(n, e, t);
				}
			}
			e?.isConnected && e?.remove?.();
		}), f?.filter((e) => e.nodeType == Node.ELEMENT_NODE)?.map?.((e) => {
			ma(e, i, r, s);
		}), Array.from(u?.childNodes)?.length > 1 ? u : u?.childNodes?.[0];
	};
}
var ba = (e, ...t) => {
	if (typeof e == "string") {
		if (e?.trim?.()?.startsWith?.("<") && e?.trim?.()?.endsWith?.(">")) {
			let t = new DOMParser().parseFromString(la(e?.trim?.()), "text/html"), n = t.querySelector("template")?.content ?? t.body;
			if (n instanceof HTMLBodyElement) {
				let e = document.createDocumentFragment();
				return e.append(...Array.from(n.childNodes ?? [])), Array.from(e.childNodes)?.length > 1 ? e : e?.childNodes?.[0];
			}
			if (n instanceof DocumentFragment) return n;
			if (n?.childNodes?.length > 1) {
				let e = document.createDocumentFragment();
				return e.append(...Array.from(n?.childNodes ?? [])), e;
			}
			return n?.childNodes?.[0] ?? new Text(e);
		}
		return new Text(e);
	} else if (typeof e == "function") return ba(e?.());
	else if (Array.isArray(e) && t) return ga(e, ...t);
	else if (e instanceof Node) return e;
	return W(e);
}, xa = typeof document < "u" ? document?.createElement?.("style") : null;
xa && typeof document < "u" && document.querySelector?.("head")?.appendChild?.(xa), xa && (xa.innerHTML = "@layer ux-preload {\n        :host { display: none; }\n    }");
//#endregion
//#region ../../projects/lur.e/src/interactive/controllers/LazyEvents.ts
var Sa = /* @__PURE__ */ new WeakMap(), Ca = (e, t) => `${e}|c:${t?.capture ? "1" : "0"}|p:${t?.passive ? "1" : "0"}`, wa = (e, t, n, r = {}) => {
	if (!e || typeof e.addEventListener != "function") return () => {};
	let i = {
		capture: !!r.capture,
		passive: !!r.passive
	}, a = Ca(t, i), o = Sa.get(e);
	o || (o = /* @__PURE__ */ new Map(), Sa.set(e, o));
	let s = o.get(a);
	if (!s) {
		let n = /* @__PURE__ */ new Set(), r = (e) => {
			for (let t of Array.from(n)) try {
				t(e);
			} catch (e) {
				console.warn(e);
			}
		};
		o.set(a, s = {
			handlers: n,
			listener: r,
			options: i
		}), e.addEventListener(t, r, i);
	}
	return s.handlers.add(n), () => {
		let r = Sa.get(e), i = r?.get(a);
		i && (i.handlers.delete(n), !(i.handlers.size > 0) && (e.removeEventListener(t, i.listener, i.options), r?.delete(a), r && r.size === 0 && Sa.delete(e)));
	};
}, Ta = /* @__PURE__ */ new WeakMap(), Ea = (e) => {
	let t = e?.element ?? e;
	return t instanceof HTMLElement ? t : null;
}, Da = (e, t, n) => e ? e === "handled" ? n : t : !1;
typeof document < "u" && document?.documentElement, typeof document < "u" && document?.documentElement && ((e, t, n = {
	capture: !0,
	passive: !1
}, r = {}) => {
	let i = e;
	if (!i || typeof i.addEventListener != "function") return (e, t) => () => {};
	let a = {
		capture: !!n.capture,
		passive: !!n.passive
	}, o = r.strategy ?? "closest", s = `${t}|c:${a.capture ? "1" : "0"}|p:${a.passive ? "1" : "0"}|s:${o}|pd:${String(r.preventDefault ?? "")}|sp:${String(r.stopPropagation ?? "")}|sip:${String(r.stopImmediatePropagation ?? "")}`, c = Ta.get(i);
	c || (c = /* @__PURE__ */ new Map(), Ta.set(i, c));
	let l = c.get(s);
	if (!l) {
		let e = /* @__PURE__ */ new Map();
		l = {
			targets: e,
			unbindGlobal: null,
			options: a,
			strategy: o,
			config: r,
			dispatch: (t) => {
				let n = !1, i = !1, a = (e) => {
					if (!(!e || e.size === 0)) {
						n = !0;
						for (let n of Array.from(e)) n(t) && (i = !0);
					}
				}, s = t?.composedPath?.();
				if (Array.isArray(s)) if (o === "closest") for (let t of s) {
					let n = Ea(t);
					if (!n) continue;
					let r = e.get(n);
					if (r) {
						a(r);
						break;
					}
				}
				else for (let t of s) {
					let n = Ea(t);
					n && a(e.get(n));
				}
				else {
					let n = Ea(t?.target);
					for (; n;) {
						let t = e.get(n);
						if (t && (a(t), o === "closest")) break;
						let r = n.getRootNode?.();
						n = n.parentElement || (r instanceof ShadowRoot ? r.host : null);
					}
				}
				Da(r.preventDefault, n, i) && t?.preventDefault?.(), Da(r.stopImmediatePropagation, n, i) && t?.stopImmediatePropagation?.(), Da(r.stopPropagation, n, i) && t?.stopPropagation?.();
			}
		}, c.set(s, l);
	}
	return (e, n) => {
		let r = Ea(e);
		if (!r) return () => {};
		l.targets.size === 0 && !l.unbindGlobal && (l.unbindGlobal = wa(i, t, l.dispatch, l.options));
		let a = l.targets.get(r);
		return a || (a = /* @__PURE__ */ new Set(), l.targets.set(r, a)), a.add(n), () => {
			let t = Ta.get(i), r = t?.get(s);
			if (!r) return;
			let a = Ea(e);
			if (!a) return;
			let o = r.targets.get(a);
			o && (o.delete(n), o.size === 0 && r.targets.delete(a), r.targets.size === 0 && (r.unbindGlobal?.(), r.unbindGlobal = null, t?.delete(s), t && t.size === 0 && Ta.delete(i)));
		};
	};
})(document.documentElement, "contextmenu", {
	capture: !0,
	passive: !1
}, {
	strategy: "closest",
	preventDefault: "handled",
	stopImmediatePropagation: "handled"
}), Promise.resolve();
//#endregion
//#region ../../../node_modules/jsox/lib/jsox.mjs
var Oa = JSON, G = {};
G.JSOX = G, G.version = "1.2.125";
var ka = typeof BigInt == "function", Aa = -1, K = 0, ja = 1, Ma = 2, Na = 3, Pa = 4, Fa = 5, Ia = 6, La = 7, Ra = 8, za = 9, Ba = 10, Va = 12, Ha = 13, Ua = [
	"ab",
	"u8",
	"cu8",
	"s8",
	"u16",
	"s16",
	"u32",
	"s32",
	"u64",
	"s64",
	"f32",
	"f64"
], Wa = null, Ga = null, Ka = [
	ArrayBuffer,
	Uint8Array,
	Uint8ClampedArray,
	Int8Array,
	Uint16Array,
	Int16Array,
	Uint32Array,
	Int32Array,
	null,
	null,
	Float32Array,
	Float64Array
], q = 0, qa = 1, Ja = 2, Ya = 3, Xa = 5, Za = 6, Qa = 7, $a = 8, eo = 9, to = 10, no = 11, ro = 12, io = 13, ao = 14, oo = 15, so = 16, co = 17, lo = 18, uo = 19, fo = 20, po = 21, mo = 22, ho = 23, go = 24, _o = 25, vo = 26, yo = 27, bo = 28, J = 29, xo = 30, Y = 31, So = 32, X = 0, Co = 1, wo = 2, To = 3, Eo = 4, Do = 5, Oo = 6, ko = {
	true: !0,
	false: !1,
	null: null,
	NaN: NaN,
	Infinity: Infinity,
	undefined: void 0
}, Ao = class extends Date {
	constructor(e, t) {
		super(e), this.ns = t || 0;
	}
};
G.DateNS = Ao;
var jo = [];
function Mo() {
	let e = jo.pop();
	return e ||= {
		context: X,
		current_proto: null,
		current_class: null,
		current_class_field: 0,
		arrayType: -1,
		valueType: K,
		elements: null
	}, e;
}
function No(e) {
	jo.push(e);
}
G.updateContext = function() {};
var Po = [];
function Fo() {
	let e = Po.pop();
	return e ? e.n = 0 : e = {
		buf: null,
		n: 0
	}, e;
}
function Io(e) {
	Po.push(e);
}
G.escape = function(e) {
	let t, n = "";
	if (!e) return e;
	for (t = 0; t < e.length; t++) (e[t] == "\"" || e[t] == "\\" || e[t] == "`" || e[t] == "'") && (n += "\\"), n += e[t];
	return n;
};
var Z = /* @__PURE__ */ new WeakMap(), Lo = /* @__PURE__ */ new Map(), Ro = /* @__PURE__ */ new Map(), zo = [];
G.reset = function() {
	Z = /* @__PURE__ */ new WeakMap(), Lo = /* @__PURE__ */ new Map(), Ro = /* @__PURE__ */ new Map(), zo = [];
}, G.begin = function(e, t) {
	let n = {
		name: null,
		value_type: K,
		string: "",
		contains: null,
		className: null
	}, r = {
		line: 1,
		col: 1
	}, i = 0, a, o = /* @__PURE__ */ new Map(), s = q, c = !0, l = !1, u = !1, d = null, f = null, p, m = {
		first: null,
		last: null,
		saved: null,
		push(e) {
			let t = this.saved;
			t ? (this.saved = t.next, t.node = e, t.next = null, t.prior = this.last) : t = {
				node: e,
				next: null,
				prior: this.last
			}, this.last ? this.last.next = t : this.first = t, this.last = t, this.length++;
		},
		pop() {
			let e = this.last;
			return (this.last = e.prior) || (this.first = null), e.next = this.saved, this.last && (this.last.next = null), e.next || (e.first = null), this.saved = e, this.length--, e.node;
		},
		length: 0
	}, h = [], g = {}, _ = null, v = null, y = 0, b = -1, x = X, S = 0, ee = !1, te = !1, C = !1, ne = !1, w = !1, T = {
		first: null,
		last: null,
		saved: null,
		push(e) {
			let t = this.saved;
			t ? (this.saved = t.next, t.node = e, t.next = null, t.prior = this.last) : t = {
				node: e,
				next: null,
				prior: this.last
			}, this.last ? this.last.next = t : this.first = t, this.last = t;
		},
		shift() {
			let e = this.first;
			return e ? ((this.first = e.next) || (this.last = null), e.next = this.saved, this.saved = e, e.node) : null;
		},
		unshift(e) {
			let t = this.saved;
			this.saved = t.next, t.node = e, t.next = this.first, t.prior = null, this.first || (this.last = t), this.first = t;
		}
	}, re = null, ie = !1, E = !1, D = !1, ae = !1, oe = !1, se = !1, ce = !1, le = 0, ue = 0, O = !1, de = !1, fe = !1;
	function pe(e) {
		throw Error(`${e} at ${i} [${r.line}:${r.col}]`);
	}
	return {
		fromJSOX(e, t, n) {
			if (o.get(e)) throw Error("Existing fromJSOX has been registered for prototype");
			function r() {}
			if (t ||= r, t && !("constructor" in t)) throw Error("Please pass a prototype like thing...");
			o.set(e, {
				protoCon: t.prototype.constructor,
				cb: n
			});
		},
		registerFromJSOX(e, t) {
			throw Error("registerFromJSOX is deprecated, please update to use fromJSOX instead:" + e + t.toString());
		},
		finalError() {
			S !== 0 && (S === 1 && pe("Comment began at end of document"), S === 3 && pe("Open comment '/*' is missing close at end of document"), S === 4 && pe("Incomplete '/* *' close at end of document")), ie && pe("Incomplete string");
		},
		value() {
			this.finalError();
			let e = d;
			return d = void 0, e;
		},
		reset() {
			s = q, c = !0, T.last && (T.last.next = T.save), T.save = T.first, T.first = T.last = null, m.last && (m.last.next = m.save), m.length = 0, m.save = T.first, m.first = m.last = null, p = void 0, x = X, h = [], g = {}, _ = null, v = null, y = 0, n.value_type = K, n.name = null, n.string = "", n.className = null, r.line = 1, r.col = 1, u = !1, S = 0, O = !1, ie = !1, D = !1, ae = !1, de = !1;
		},
		usePrototype(e, t) {
			g[e] = t;
		},
		write(n) {
			let r;
			if (typeof n != "string" && n !== void 0 && (n = String(n)), !c) throw Error("Parser is still in an error state, please reset before resuming");
			for (r = this._write(n, !1); r > 0 && (typeof t == "function" && (function e(n, r) {
				let i, a, o = n[r];
				if (o && typeof o == "object") for (i in o) Object.prototype.hasOwnProperty.call(o, i) && (a = e(o, i), a === void 0 ? delete o[i] : o[i] = a);
				return t.call(n, r, o);
			})({ "": d }, ""), d = e(d), !(r < 2)); r = this._write());
		},
		parse(e, t) {
			typeof e != "string" && (e = String(e)), this.reset();
			let n = this._write(e, !0);
			if (n > 0) {
				let e = this.value();
				if (e === void 0 && n > 1) throw Error("Pending value could not complete");
				return e = typeof t == "function" ? function e(n, r) {
					let i, a, o = n[r];
					if (o && typeof o == "object") for (i in o) Object.prototype.hasOwnProperty.call(o, i) && (a = e(o, i), a === void 0 ? delete o[i] : o[i] = a);
					return t.call(n, r, o);
				}({ "": e }, "") : e, e;
			}
			this.finalError();
		},
		_write(e, t) {
			let g, pe, k, me = 0;
			function A(e, t) {
				throw Error(`${e} '${String.fromCodePoint(t)}' unexpected at ${i} (near '${k.substr(i > 4 ? i - 4 : 0, i > 4 ? 3 : i - 1)}[${String.fromCodePoint(t)}]${k.substr(i, 10)}') [${r.line}:${r.col}]`);
			}
			function j() {
				n.value_type = K, n.string = "", n.contains = null;
			}
			function he() {
				let e = null;
				switch (n.value_type) {
					case Fa:
						if ((n.string.length > 13 || n.string.length == 13 && n[0] > "2") && !de && !w && !ne && !te && (fe = !0), fe) {
							if (ka) return BigInt(n.string);
							throw Error("no builtin BigInt()", 0);
						}
						if (de) {
							let e = n.string.match(/\.(\d\d\d\d*)/), t = e ? e[1] : null;
							if (!t || t.length < 4) {
								let e = new Date(n.string);
								return isNaN(e.getTime()) && A("Bad Date format", g), e;
							} else {
								let e = t.substr(3);
								for (; e.length < 6;) e += "0";
								let r = new Ao(n.string, Number(e));
								return isNaN(r.getTime()) && A("Bad DateNS format" + r + r.getTime(), g), r;
							}
						}
						return (u ? -1 : 1) * Number(n.string);
					case Pa:
						if (n.className) {
							if (e = o.get(n.className), e ||= Ro.get(n.className), e && e.cb) return n.className = null, e.cb.call(n.string);
							throw Error("Double string error, no constructor for: new " + n.className + "(" + n.string + ")");
						}
						return n.string;
					case Ma: return !0;
					case Na: return !1;
					case La: return NaN;
					case Ra: return NaN;
					case za: return -Infinity;
					case Ba: return Infinity;
					case ja: return null;
					case Aa: return;
					case Va: return;
					case Ia: return n.className && (e = o.get(n.className), e ||= Ro.get(n.className), n.className = null, e && e.cb) ? n.contains = e.cb.call(n.contains) : n.contains;
					case Ha:
						if (b >= 0) {
							let e;
							if (e = n.contains.length ? Ko(n.contains[0]) : Ko(n.string), b === 0) return b = -1, e;
							{
								let t = new Ka[b](e);
								return b = -1, t;
							}
						} else if (b === -2) {
							let e = f, t, r = n.contains.length;
							for (t = 0; t < r; t++) {
								let i = n.contains[t], a = e[i];
								if (!a) {
									let i = m.first, o = 0;
									for (; i && o < r && o < m.length;) {
										let r = n.contains[o];
										if (!i.next || r !== i.next.node.name) break;
										if (i.next) if (typeof r == "number") {
											let t = i.next.node.elements;
											if (t && r >= t.length) if (o === m.length - 1) {
												console.log("This is actually at the current object so use that", o, n.contains, p), a = p, o++, i = i.next;
												break;
											} else {
												if (i.next.next && r === t.length) {
													a = i.next.next.node.elements, i = i.next, o++, e = a;
													continue;
												}
												a = p, o++;
												break;
											}
										} else if (r !== i.next.node.name) {
											a = i.next.node.elements[r], t = o;
											break;
										} else a = i.next.next ? i.next.next.node.elements : p;
										else a = a[r];
										i = i.next, o++;
									}
									t = o < r ? o - 1 : o;
								}
								if (typeof a == "object" && !a) throw Error("Path did not resolve properly:" + n.contains + " at " + i + "(" + t + ")");
								e = a;
							}
							return b = -3, e;
						}
						return n.className && (e = o.get(n.className), e ||= Ro.get(n.className), n.className = null, e && e.cb) ? e.cb.call(n.contains) : n.contains;
					default:
						console.log("Unhandled value conversion.", n);
						break;
				}
			}
			function ge() {
				if (b == -3) {
					n.value_type === Ia && p.push(n.contains), b = -1;
					return;
				}
				switch (n.value_type) {
					case Va:
						p.push(void 0), delete p[p.length - 1];
						break;
					default:
						p.push(he());
						break;
				}
				j();
			}
			function _e() {
				if (b === -3 && n.value_type === Ha) {
					j(), b = -1;
					return;
				}
				if (n.value_type === Va) return;
				!n.name && v && (n.name = v.fields[y++]);
				let e = he();
				_ && _.protoDef && _.protoDef.cb ? (e = _.protoDef.cb.call(p, n.name, e), e && (p[n.name] = e)) : p[n.name] = e, j();
			}
			function M(e) {
				if (s !== q) {
					switch (u && A("Negative outside of quotes, being converted to a string (would lose count of leading '-' characters)", e), s) {
						case Y:
							switch (n.value_type) {
								case Ma:
									n.string += "true";
									break;
								case Na:
									n.string += "false";
									break;
								case ja:
									n.string += "null";
									break;
								case Ba:
									n.string += "Infinity";
									break;
								case za:
									n.string += "-Infinity", A("Negative outside of quotes, being converted to a string", e);
									break;
								case Ra:
									n.string += "NaN";
									break;
								case La:
									n.string += "-NaN", A("Negative outside of quotes, being converted to a string", e);
									break;
								case Aa:
									n.string += "undefined";
									break;
								case Pa: break;
								case K: break;
								default: console.log("Value of type " + n.value_type + " is not restored...");
							}
							break;
						case qa:
							n.string += "t";
							break;
						case Ja:
							n.string += "tr";
							break;
						case Ya:
							n.string += "tru";
							break;
						case Xa:
							n.string += "f";
							break;
						case Za:
							n.string += "fa";
							break;
						case Qa:
							n.string += "fal";
							break;
						case $a:
							n.string += "fals";
							break;
						case eo:
							n.string += "n";
							break;
						case to:
							n.string += "nu";
							break;
						case no:
							n.string += "nul";
							break;
						case ro:
							n.string += "u";
							break;
						case io:
							n.string += "un";
							break;
						case ao:
							n.string += "und";
							break;
						case oo:
							n.string += "unde";
							break;
						case so:
							n.string += "undef";
							break;
						case co:
							n.string += "undefi";
							break;
						case lo:
							n.string += "undefin";
							break;
						case uo:
							n.string += "undefine";
							break;
						case fo:
							n.string += "N";
							break;
						case po:
							n.string += "Na";
							break;
						case mo:
							n.string += "I";
							break;
						case ho:
							n.string += "In";
							break;
						case go:
							n.string += "Inf";
							break;
						case _o:
							n.string += "Infi";
							break;
						case vo:
							n.string += "Infin";
							break;
						case yo:
							n.string += "Infini";
							break;
						case bo:
							n.string += "Infinit";
							break;
						case q: break;
						case J: break;
						case xo: break;
						case So:
							A("String-keyword recovery fail (after whitespace)", e);
							break;
						default:
					}
					n.value_type = Pa, s < J && (s = Y);
				} else s = Y, n.value_type = Pa;
				if (e == 123) be();
				else if (e == 91) xe();
				else if (e != 44) {
					if (e == 32 || e == 13 || e == 10 || e == 9 || e == 65279 || e == 8232 || e == 8233) return;
					e == 44 || e == 125 || e == 93 || e == 58 || (n.string += a);
				}
			}
			function ve(e) {
				let t = 0;
				for (; t == 0 && i < k.length;) {
					a = k.charAt(i);
					let o = k.codePointAt(i++);
					if (o >= 65536 && (a += k.charAt(i), i++), r.col++, o == e) D ? (ce ? A("Incomplete hexidecimal sequence", o) : se ? A("Incomplete long unicode sequence", o) : oe && A("Incomplete unicode sequence", o), ae ? (ae = !1, t = 1) : n.string += a, D = !1) : t = 1;
					else if (D) {
						if (oe) {
							if (o == 125) {
								n.string += String.fromCodePoint(le), oe = !1, se = !1, D = !1;
								continue;
							}
							if (le *= 16, o >= 48 && o <= 57) le += o - 48;
							else if (o >= 65 && o <= 70) le += o - 65 + 10;
							else if (o >= 97 && o <= 102) le += o - 97 + 10;
							else {
								A("(escaped character, parsing hex of \\u)", o), t = -1, oe = !1, D = !1;
								continue;
							}
							continue;
						} else if (ce || se) {
							if (ue === 0 && o === 123) {
								oe = !0;
								continue;
							}
							if (ue < 2 || se && ue < 4) {
								if (le *= 16, o >= 48 && o <= 57) le += o - 48;
								else if (o >= 65 && o <= 70) le += o - 65 + 10;
								else if (o >= 97 && o <= 102) le += o - 97 + 10;
								else {
									A(se ? "(escaped character, parsing hex of \\u)" : "(escaped character, parsing hex of \\x)", o), t = -1, ce = !1, D = !1;
									continue;
								}
								ue++, se ? ue == 4 && (n.string += String.fromCodePoint(le), se = !1, D = !1) : ue == 2 && (n.string += String.fromCodePoint(le), ce = !1, D = !1);
								continue;
							}
						}
						switch (o) {
							case 13:
								ae = !0, r.col = 1;
								continue;
							case 8232:
							case 8233: r.col = 1;
							case 10:
								ae ? ae = !1 : r.col = 1, r.line++;
								break;
							case 116:
								n.string += "	";
								break;
							case 98:
								n.string += "\b";
								break;
							case 110:
								n.string += "\n";
								break;
							case 114:
								n.string += "\r";
								break;
							case 102:
								n.string += "\f";
								break;
							case 118:
								n.string += "\v";
								break;
							case 48:
								n.string += "\0";
								break;
							case 120:
								ce = !0, ue = 0, le = 0;
								continue;
							case 117:
								se = !0, ue = 0, le = 0;
								continue;
							default:
								n.string += a;
								break;
						}
						D = !1;
					} else o === 92 ? D ? (n.string += "\\", D = !1) : (D = !0, le = 0, ue = 0) : (ae && (ae = !1, r.line++, r.col = 2), n.string += a);
				}
				return t;
			}
			function ye() {
				let e;
				for (; (e = i) < k.length;) {
					a = k.charAt(e);
					let o = k.codePointAt(i++);
					if (o >= 256) {
						r.col -= i - e, i = e;
						break;
					} else {
						if (o == 95) continue;
						if (r.col++, o >= 48 && o <= 57) C && (w = !0), n.string += a;
						else if (o == 45 || o == 43) n.string.length == 0 || C && !ne && !w ? (o == 45 && !C && (u = !u), n.string += a, ne = !0) : (u &&= (n.string = "-" + n.string, !1), n.string += a, de = !0);
						else if (o == 78) {
							if (s == q) {
								E = !1, s = fo;
								return;
							}
							A("fault while parsing number;", o);
							break;
						} else if (o == 73) {
							if (s == q) {
								E = !1, s = mo;
								return;
							}
							A("fault while parsing number;", o);
							break;
						} else if (o == 58 && de) u &&= (n.string = "-" + n.string, !1), n.string += a, de = !0;
						else if (o == 84 && de) u &&= (n.string = "-" + n.string, !1), n.string += a, de = !0;
						else if (o == 90 && de) u &&= (n.string = "-" + n.string, !1), n.string += a, de = !0;
						else if (o == 46) if (!te && !ee && !C) n.string += a, te = !0;
						else {
							c = !1, A("fault while parsing number;", o);
							break;
						}
						else if (o == 110) {
							fe = !0;
							break;
						} else if (ee && (o >= 95 && o <= 102 || o >= 65 && o <= 70)) n.string += a;
						else if (o == 120 || o == 98 || o == 111 || o == 88 || o == 66 || o == 79) if (!ee && n.string == "0") ee = !0, n.string += a;
						else {
							c = !1, A("fault while parsing number;", o);
							break;
						}
						else if (o == 101 || o == 69) if (!C) n.string += a, C = !0;
						else {
							c = !1, A("fault while parsing number;", o);
							break;
						}
						else if (o == 32 || o == 13 || o == 10 || o == 9 || o == 47 || o == 35 || o == 44 || o == 125 || o == 93 || o == 123 || o == 91 || o == 34 || o == 39 || o == 96 || o == 58) {
							r.col -= i - e, i = e;
							break;
						} else {
							t && (c = !1, A("fault while parsing number;", o));
							break;
						}
					}
				}
				!t && i == k.length ? E = !0 : (E = !1, n.value_type = Fa, x == X && (O = !0));
			}
			function be() {
				let e = wo, t = null, r = {};
				s > q && s < J && M(123);
				let i;
				if (i = Se(), x == X) if (s == J || s == Y && (i || n.string.length)) {
					if (i && i.protoDef && i.protoDef.protoCon && (r = new i.protoDef.protoCon()), !i || !i.protoDef && n.string) {
						if (t = h.find((e) => e.name === n.string), t) l ? (t.fields.length = 0, e = Eo) : (r = new t.protoCon(), e = Do);
						else {
							function r() {}
							h.push(t = {
								name: n.string,
								protoCon: i && i.protoDef && i.protoDef.protoCon || r.constructor,
								fields: []
							}), e = Eo;
						}
						l = !1;
					}
					v = t, s = q;
				} else s = J;
				else if (s == J || x === Co || x === To || x == Do) if (s != q || n.value_type == Pa) {
					if (i && i.protoDef) r = new i.protoDef.protoCon();
					else if (t = h.find((e) => e.name === n.string), t) e = Do, r = {};
					else {
						function e() {}
						o.set(n.string, {
							protoCon: e.prototype.constructor,
							cb: null
						}), r = new e();
					}
					s = q;
				} else s = q;
				else if (x == wo && s == q) return A("fault while parsing; getting field name unexpected ", g), c = !1, !1;
				let a = Mo();
				return n.value_type = Ia, x === X ? p = r : x == Co ? n.name = p.length : (x == To || x == Do) && (!n.name && v && (n.name = v.fields[y++]), p[n.name] = r), a.context = x, a.elements = p, a.name = n.name, a.current_proto = _, a.current_class = v, a.current_class_field = y, a.valueType = n.value_type, a.arrayType = b, a.className = n.className, n.className = null, n.name = null, _ = i, v = t, y = 0, p = r, f ||= p, m.push(a), j(), x = e, !0;
			}
			function xe() {
				if (s > q && s < J && M(91), s == Y && n.string.length) {
					let e = Ua.findIndex((e) => e === n.string);
					s = q, e >= 0 ? (b = e, n.className = n.string, n.string = null) : n.string === "ref" ? (n.className = null, b = -2) : o.get(n.string) || Ro.get(n.string) ? n.className = n.string : A(`Unknown type '${n.string}' specified for array`, g);
				} else if (x == wo || s == J || s == xo) return A("Fault while parsing; while getting field name unexpected", g), c = !1, !1;
				{
					let e = Mo();
					n.value_type = Ha;
					let t = [];
					if (x == X) p = t;
					else if (x == Co) b == -1 && p.push(t), n.name = p.length;
					else if (x == To) if (n.name || (console.log("This says it's resolved......."), b = -3), _ && _.protoDef) if (_.protoDef.cb) {
						let e = _.protoDef.cb.call(p, n.name, t);
						e !== void 0 && (t = p[n.name] = e);
					} else p[n.name] = t;
					else p[n.name] = t;
					e.context = x, e.elements = p, e.name = n.name, e.current_proto = _, e.current_class = v, e.current_class_field = y, e.valueType = n.value_type, e.arrayType = b == -1 ? -3 : b, e.className = n.className, b = -1, n.className = null, n.name = null, _ = null, v = null, y = 0, p = t, f ||= t, m.push(e), j(), x = Co;
				}
				return !0;
			}
			function Se() {
				let e = {
					protoDef: null,
					cls: null
				};
				return ((e.protoDef = o.get(n.string)) || (e.protoDef = Ro.get(n.string))) && (n.className || (n.className = n.string, n.string = null)), n.string && (e.cls = h.find((e) => e.name === n.string), !e.protoDef && e.cls), e.protoDef || e.cls ? e : null;
			}
			if (!c) return -1;
			for (e && e.length ? (pe = Fo(), pe.buf = e, T.push(pe)) : (E && (E = !1, n.value_type = Fa, x == X && (O = !0), me = 1), x !== X && A("Unclosed object at end of stream.", g)); c && (pe = T.shift());) {
				if (i = pe.n, k = pe.buf, ie) {
					let e = ve(re);
					e < 0 ? c = !1 : e > 0 && (ie = !1, c && (n.value_type = Pa));
				}
				for (E && ye(); !O && c && i < k.length;) {
					if (a = k.charAt(i), g = k.codePointAt(i++), g >= 65536 && (a += k.charAt(i), i++), r.col++, S) {
						if (S == 1) if (g == 42) S = 3;
						else if (g != 47) return A("fault while parsing;", g);
						else S = 2;
						else S == 2 ? (g == 10 || g == 13) && (S = 0) : S == 3 ? g == 42 && (S = 4) : S = g == 47 ? 0 : 3;
						continue;
					}
					switch (g) {
						case 35:
							S = 2;
							break;
						case 47:
							S = 1;
							break;
						case 123:
							be();
							break;
						case 91:
							xe();
							break;
						case 58:
							if (x == Do) s = q, n.name = n.string, n.string = "", n.value_type = K;
							else if (x == wo || x == Eo) if (x == Eo) {
								if (!Object.keys(p).length) {
									console.log("This is a full object, not a class def...", n.className);
									let e = () => {};
									o.set(m.last.node.current_class.name, {
										protoCon: e.prototype.constructor,
										cb: null
									}), p = new e(), x = To, n.name = n.string, s = q, n.string = "", n.value_type = K, console.log("don't do default;s do a revive...");
								}
							} else s != q && s != Y && s != J && s != xo && M(32), s = q, n.name = n.string, n.string = "", x = x === wo ? To : Oo, n.value_type = K;
							else if (x == X) {
								console.log("Override colon found, allow class redefinition", x), l = !0;
								break;
							} else A(x == Co ? "(in array, got colon out of string):parsing fault;" : x == To ? "String unexpected" : "(outside any object, got colon out of string):parsing fault;", g), c = !1;
							break;
						case 125:
							if (s == Y && (s = q), x == Eo) if (v) {
								n.string && v.fields.push(n.string), j();
								let e = m.pop();
								x = X, s = q, n.name = e.name, p = e.elements, v = e.current_class, y = e.current_class_field, b = e.arrayType, n.value_type = e.valueType, n.className = e.className, f = null, No(e);
							} else A("State error; gathering class fields, and lost the class", g);
							else if (x == wo || x == Do) {
								n.value_type != K && (v && (n.name = v.fields[y++]), _e()), n.value_type = Ia, _ && _.protoDef && (console.log("SOMETHING SHOULD AHVE BEEN REPLACED HERE??", _), console.log("The other version only revives on init"), p = new _.protoDef.cb(p, void 0, void 0)), n.contains = p, n.string = "";
								let e = m.pop();
								x = e.context, n.name = e.name, p = e.elements, v = e.current_class, _ = e.current_proto, y = e.current_class_field, b = e.arrayType, n.value_type = e.valueType, n.className = e.className, No(e), x == X && (O = !0);
							} else if (x == To) {
								n.value_type === K && (s == q ? A("Fault while parsing; unexpected", g) : M(g)), _e(), n.value_type = Ia, n.contains = p, s = q;
								let e = m.pop();
								x = e.context, n.name = e.name, p = e.elements, _ = e.current_proto, v = e.current_class, y = e.current_class_field, b = e.arrayType, n.value_type = e.valueType, n.className = e.className, No(e), x == X && (O = !0);
							} else A("Fault while parsing; unexpected", g), c = !1;
							u = !1;
							break;
						case 93:
							if (s >= xo && (s = q), x == Co) {
								n.value_type == K ? s !== q && (M(g), ge()) : ge(), n.contains = p;
								{
									let e = m.pop();
									n.name = e.name, n.className = e.className, x = e.context, p = e.elements, _ = e.current_proto, v = e.current_class, y = e.current_class_field, b = e.arrayType, n.value_type = e.valueType, No(e);
								}
								n.value_type = Ha, x == X && (O = !0);
							} else A(`bad context ${x}; fault while parsing`, g), c = !1;
							u = !1;
							break;
						case 44:
							s < xo && s != q && M(g), (s == Y || s == J) && (s = q), x == Eo ? v ? (v.fields.push(n.string), n.string = "", s = J) : A("State error; gathering class fields, and lost the class", g) : x == wo ? v ? (n.name = v.fields[y++], n.value_type != K && (_e(), j())) : (n.string || n.value_type) && A("State error; comma in field name and/or lost the class", g) : x == Do ? (v ? (b != -3 && !n.name && (n.name = v.fields[y++]), n.value_type != K && (b != -3 && _e(), j())) : n.value_type != K && (_e(), j()), n.name = null) : x == Co ? (n.value_type == K && (n.value_type = Va), ge(), j(), s = q) : x == To && n.value_type != K ? (x = wo, n.value_type != K && (_e(), j()), s = q) : (c = !1, A("bad context; excessive commas while parsing;", g)), u = !1;
							break;
						default:
							switch (g) {
								default:
									if (x == X || x == To && s == J || x == wo || s == J || x == Eo) switch (g) {
										case 96:
										case 34:
										case 39:
											s == q || s == J ? (n.string.length && (console.log("IN ARRAY AND FIXING?"), n.className = n.string, n.string = ""), ve(g) ? n.value_type = Pa : (re = g, ie = !0)) : A("fault while parsing; quote not at start of field name", g);
											break;
										case 10: r.line++, r.col = 1;
										case 13:
										case 32:
										case 8232:
										case 8233:
										case 9:
										case 65279:
											if (x === X && s === Y) {
												s = q, x === X && (O = !0);
												break;
											}
											if (s === q || s === xo) {
												x == X && n.value_type && (O = !0);
												break;
											} else if (s === J) {
												if (x === X) {
													s = q, O = !0;
													break;
												}
												n.string.length && console.log("STEP TO NEXT TOKEN."), s = xo;
											} else c = !1, A("fault while parsing; whitepsace unexpected", g);
											break;
										default:
											if (s == q && (g >= 48 && g <= 57 || g == 43 || g == 46 || g == 45)) {
												ee = !1, C = !1, de = !1, fe = !1, ne = !1, w = !1, te = !1, n.string = a, pe.n = i, ye();
												break;
											}
											if (s === xo && (c = !1, A("fault while parsing; character unexpected", g)), s === q) {
												s = J, n.value_type = Pa, n.string += a;
												break;
											}
											if (n.value_type == K) s !== q && s !== Y && M(g);
											else {
												if (s === Y || s === J) {
													n.string += a;
													break;
												}
												if (x == wo) {
													if (s == J) {
														n.string += a;
														break;
													}
													A("Multiple values found in field name", g);
												}
												x == To && A("String unexpected", g);
											}
											break;
									}
									else {
										if (s == q && (g >= 48 && g <= 57 || g == 43 || g == 46 || g == 45)) ee = !1, C = !1, de = !1, fe = !1, ne = !1, w = !1, te = !1, n.string = a, pe.n = i, ye();
										else if (n.value_type == K) s == q ? (s = Y, n.string += a, n.value_type = Pa) : M(g);
										else if (x == wo) A("Multiple values found in field name", g);
										else if (x == To) n.value_type != Pa && ((n.value_type == Ia || n.value_type == Ha) && A("String unexpected", g), M(g)), s == xo ? Se() ? n.string = a : A("String unexpected", g) : s == Y ? n.string += a : A("String unexpected", g);
										else if (x == Co) if (s == xo) {
											n.className || (n.className = n.string, n.string = ""), n.string += a;
											break;
										} else s == Y && (n.string += a);
										break;
									}
									break;
								case 96:
								case 34:
								case 39:
									n.string && (n.className = n.string), n.string = "", ve(g) ? (n.value_type = Pa, s = Y) : (re = g, ie = !0);
									break;
								case 10: r.line++, r.col = 1;
								case 32:
								case 9:
								case 13:
								case 8232:
								case 8233:
								case 65279:
									if (s == Y) {
										if (x == X) {
											s = q, O = !0;
											break;
										} else if (x == To) {
											s = So;
											break;
										} else if (x == wo) {
											s = xo;
											break;
										} else if (x == Co) {
											s = xo;
											break;
										}
									}
									if (s == q || s == xo) break;
									s == J ? n.string.length && (s = xo) : s < Y && M(g);
									break;
								case 116:
									s == q ? s = qa : s == yo ? s = bo : M(g);
									break;
								case 114:
									s == qa ? s = Ja : M(g);
									break;
								case 117:
									s == Ja ? s = Ya : s == eo ? s = to : s == q ? s = ro : M(g);
									break;
								case 101:
									s == Ya ? (n.value_type = Ma, s = Y) : s == $a ? (n.value_type = Na, s = Y) : s == ao ? s = oo : s == lo ? s = uo : M(g);
									break;
								case 110:
									s == q ? s = eo : s == ro ? s = io : s == co ? s = lo : s == mo ? s = ho : s == _o ? s = vo : M(g);
									break;
								case 100:
									s == io ? s = ao : s == uo ? (n.value_type = Aa, s = Y) : M(g);
									break;
								case 105:
									s == so ? s = co : s == go ? s = _o : s == vo ? s = yo : M(g);
									break;
								case 108:
									s == to ? s = no : s == no ? (n.value_type = ja, s = Y) : s == Za ? s = Qa : M(g);
									break;
								case 102:
									s == q ? s = Xa : s == oo ? s = so : s == ho ? s = go : M(g);
									break;
								case 97:
									s == Xa ? s = Za : s == fo ? s = po : M(g);
									break;
								case 115:
									s == Qa ? s = $a : M(g);
									break;
								case 73:
									s == q ? s = mo : M(g);
									break;
								case 78:
									s == q ? s = fo : s == po ? (n.value_type = u ? La : Ra, u = !1, s = Y) : M(g);
									break;
								case 121:
									s == bo ? (n.value_type = u ? za : Ba, u = !1, s = Y) : M(g);
									break;
								case 45:
									s == q ? u = !u : M(g);
									break;
								case 43:
									s !== q && M(g);
									break;
							}
							break;
					}
					if (O) {
						s == Y && (s = q);
						break;
					}
				}
				if (i == k.length ? (Io(pe), n.value_type == K && t && s != q && M(32), ie || E || x == wo ? me = 0 : x == X && (n.value_type != K || d) && (O = !0, me = 1)) : (pe.n = i, T.unshift(pe), me = 2), O) {
					f = null;
					break;
				}
			}
			return c ? (O && n.value_type != K && (s = q, d = he(), u = !1, n.string = "", n.value_type = K), O = !1, me) : -1;
		}
	};
};
var Bo = [Object.freeze(G.begin())], Vo = 0;
G.parse = function(e, t) {
	let n = Vo++, r;
	Bo.length <= n && Bo.push(Object.freeze(G.begin())), r = Bo[n], typeof e != "string" && (e = String(e)), r.reset();
	let i = r._write(e, !0);
	if (i > 0) {
		let e = r.value();
		if (e === void 0 && i > 1) throw Error("Pending value could not complete");
		return e = typeof t == "function" ? function e(n, r) {
			let i, a, o = n[r];
			if (o && typeof o == "object") for (i in o) Object.prototype.hasOwnProperty.call(o, i) && (a = e(o, i), a === void 0 ? delete o[i] : o[i] = a);
			return t.call(n, r, o);
		}({ "": e }, "") : e, Vo--, e;
	}
	r.finalError();
};
function Ho() {
	return this && this.valueOf();
}
G.defineClass = function(e, t) {
	let n, r = Object.keys(t);
	for (let e = 1; e < r.length; e++) {
		let t, n;
		(t = r[e - 1]) > (n = r[e]) && (r[e - 1] = n, r[e] = t, e ? e -= 2 : e--);
	}
	zo.push(n = {
		name: e,
		tag: r.toString(),
		proto: Object.getPrototypeOf(t),
		fields: Object.keys(t)
	});
	for (let e = 1; e < n.fields.length; e++) if (n.fields[e] < n.fields[e - 1]) {
		let t = n.fields[e - 1];
		n.fields[e - 1] = n.fields[e], n.fields[e] = t, e > 1 && (e -= 2);
	}
	n.proto === Object.getPrototypeOf({}) && (n.proto = null);
}, G.registerToJSOX = function(e, t, n) {
	throw Error("registerToJSOX deprecated; please use toJSOX:" + prototypeName + prototype.toString());
}, G.toJSOX = function(e, t, n) {
	if (!t.prototype || t.prototype !== Object.prototype) {
		if (Z.get(t.prototype)) throw Error("Existing toJSOX has been registered for prototype");
		Z.set(t.prototype, {
			external: !0,
			name: e || n.constructor.name,
			cb: n
		});
	} else {
		let r = Object.keys(t).toString();
		if (Lo.get(r)) throw Error("Existing toJSOX has been registered for object type");
		Lo.set(r, {
			external: !0,
			name: e,
			cb: n
		});
	}
}, G.fromJSOX = function(e, t, n) {
	function r() {}
	if (t ||= r.prototype, Ro.get(e)) throw Error("Existing fromJSOX has been registered for prototype");
	if (t && !("constructor" in t)) throw Error("Please pass a prototype like thing...");
	Ro.set(e, {
		protoCon: t.prototype.constructor,
		cb: n
	});
}, G.registerFromJSOX = function(e, t) {
	throw Error("deprecated; please adjust code to use fromJSOX:" + e + t.toString());
}, G.addType = function(e, t, n, r) {
	G.toJSOX(e, t, n), G.fromJSOX(e, t, r);
}, G.registerToFrom = function(e, t) {
	throw Error("registerToFrom deprecated; please use addType:" + e + t.toString());
}, G.stringifier = function() {
	let e = [], t = "\"", n = /* @__PURE__ */ new WeakMap(), r = [], i = [], a = /* @__PURE__ */ new WeakMap(), o = /* @__PURE__ */ new Map(), s = null, c = [], l = !1;
	function u(e) {
		return typeof e == "string" && e === "" ? "\"\"" : typeof e == "number" && !isNaN(e) ? [
			"'",
			e.toString(),
			"'"
		].join("") : e.includes("﻿") || e in ko || /[0-9\-]/.test(e[0]) || /[\n\r\t #\[\]{}()<>\~!+*/.:,\-"'`]/.test(e) ? t + G.escape(e) + t : e;
	}
	Z.get(Object.prototype) || (Z.set(Object.prototype, {
		external: !1,
		name: Object.prototype.constructor.name,
		cb: null
	}), Z.set(Date.prototype, {
		external: !1,
		name: "Date",
		cb: function() {
			if (this.getTime() === -621672192e5) return "0000-01-01T00:00:00.000Z";
			let e = -this.getTimezoneOffset(), t = e >= 0 ? "+" : "-", n = function(e) {
				let t = Math.floor(Math.abs(e));
				return (t < 10 ? "0" : "") + t;
			};
			return [
				this.getFullYear(),
				"-",
				n(this.getMonth() + 1),
				"-",
				n(this.getDate()),
				"T",
				n(this.getHours()),
				":",
				n(this.getMinutes()),
				":",
				n(this.getSeconds()),
				"." + function(e) {
					let t = Math.floor(Math.abs(e));
					return (t < 100 ? "0" : "") + (t < 10 ? "0" : "") + t;
				}(this.getMilliseconds()) + t,
				n(e / 60),
				":",
				n(e % 60)
			].join("");
		}
	}), Z.set(Ao.prototype, {
		external: !1,
		name: "DateNS",
		cb: function() {
			let e = -this.getTimezoneOffset(), t = e >= 0 ? "+" : "-", n = function(e) {
				let t = Math.floor(Math.abs(e));
				return (t < 10 ? "0" : "") + t;
			};
			return [
				this.getFullYear(),
				"-",
				n(this.getMonth() + 1),
				"-",
				n(this.getDate()),
				"T",
				n(this.getHours()),
				":",
				n(this.getMinutes()),
				":",
				n(this.getSeconds()),
				"." + function(e) {
					let t = Math.floor(Math.abs(e));
					return (t < 100 ? "0" : "") + (t < 10 ? "0" : "") + t;
				}(this.getMilliseconds()) + function(e) {
					let t = Math.floor(Math.abs(e));
					return (t < 1e5 ? "0" : "") + (t < 1e4 ? "0" : "") + (t < 1e3 ? "0" : "") + (t < 100 ? "0" : "") + (t < 10 ? "0" : "") + t;
				}(this.ns) + t,
				n(e / 60),
				":",
				n(e % 60)
			].join("");
		}
	}), Z.set(Boolean.prototype, {
		external: !1,
		name: "Boolean",
		cb: Ho
	}), Z.set(Number.prototype, {
		external: !1,
		name: "Number",
		cb: function() {
			return isNaN(this) ? "NaN" : isFinite(this) ? String(this) : this < 0 ? "-Infinity" : "Infinity";
		}
	}), Z.set(String.prototype, {
		external: !1,
		name: "String",
		cb: function() {
			return "\"" + G.escape(Ho.apply(this)) + "\"";
		}
	}), typeof BigInt == "function" && Z.set(BigInt.prototype, {
		external: !1,
		name: "BigInt",
		cb: function() {
			return this + "n";
		}
	}), Z.set(ArrayBuffer.prototype, {
		external: !0,
		name: "ab",
		cb: function() {
			return "[" + u(Go(this)) + "]";
		}
	}), Z.set(Uint8Array.prototype, {
		external: !0,
		name: "u8",
		cb: function() {
			return "[" + u(Go(this.buffer)) + "]";
		}
	}), Z.set(Uint8ClampedArray.prototype, {
		external: !0,
		name: "uc8",
		cb: function() {
			return "[" + u(Go(this.buffer)) + "]";
		}
	}), Z.set(Int8Array.prototype, {
		external: !0,
		name: "s8",
		cb: function() {
			return "[" + u(Go(this.buffer)) + "]";
		}
	}), Z.set(Uint16Array.prototype, {
		external: !0,
		name: "u16",
		cb: function() {
			return "[" + u(Go(this.buffer)) + "]";
		}
	}), Z.set(Int16Array.prototype, {
		external: !0,
		name: "s16",
		cb: function() {
			return "[" + u(Go(this.buffer)) + "]";
		}
	}), Z.set(Uint32Array.prototype, {
		external: !0,
		name: "u32",
		cb: function() {
			return "[" + u(Go(this.buffer)) + "]";
		}
	}), Z.set(Int32Array.prototype, {
		external: !0,
		name: "s32",
		cb: function() {
			return "[" + u(Go(this.buffer)) + "]";
		}
	}), Z.set(Float32Array.prototype, {
		external: !0,
		name: "f32",
		cb: function() {
			return "[" + u(Go(this.buffer)) + "]";
		}
	}), Z.set(Float64Array.prototype, {
		external: !0,
		name: "f64",
		cb: function() {
			return "[" + u(Go(this.buffer)) + "]";
		}
	}), Z.set(Float64Array.prototype, {
		external: !0,
		name: "f64",
		cb: function() {
			return "[" + u(Go(this.buffer)) + "]";
		}
	}), Z.set(RegExp.prototype, Ga = {
		external: !0,
		name: "regex",
		cb: function(e, t) {
			return "'" + escape(this.source) + "'";
		}
	}), Ro.set("regex", {
		protoCon: RegExp,
		cb: function(e, t) {
			return new RegExp(this);
		}
	}), Z.set(Map.prototype, Ga = {
		external: !0,
		name: "map",
		cb: null
	}), Ro.set("map", {
		protoCon: Map,
		cb: function(e, t) {
			if (e) {
				this.set(e, t);
				return;
			}
			return this;
		}
	}), Z.set(Array.prototype, Wa = {
		external: !1,
		name: Array.prototype.constructor.name,
		cb: null
	}));
	let d = {
		defineClass(t, n) {
			let r, i = Object.keys(n);
			for (let e = 1; e < i.length; e++) {
				let t, n;
				(t = i[e - 1]) > (n = i[e]) && (i[e - 1] = n, i[e] = t, e ? e -= 2 : e--);
			}
			e.push(r = {
				name: t,
				tag: i.toString(),
				proto: Object.getPrototypeOf(n),
				fields: Object.keys(n)
			});
			for (let e = 1; e < r.fields.length; e++) if (r.fields[e] < r.fields[e - 1]) {
				let t = r.fields[e - 1];
				r.fields[e - 1] = r.fields[e], r.fields[e] = t, e > 1 && (e -= 2);
			}
			r.proto === Object.getPrototypeOf({}) && (r.proto = null);
		},
		setDefaultObjectToJSOX(e) {
			s = e;
		},
		isEncoding(e) {
			return !!i.find((t, n) => t === e && n < i.length - 1);
		},
		encodeObject(e) {
			return s ? s.apply(e, [this]) : e;
		},
		stringify(e, t, n) {
			return m(e, t, n);
		},
		setQuote(e) {
			t = e;
		},
		registerToJSOX(e, t, n) {
			return this.toJSOX(e, t, n);
		},
		toJSOX(e, t, n) {
			if (t.prototype && t.prototype !== Object.prototype) {
				if (a.get(t.prototype)) throw Error("Existing toJSOX has been registered for prototype");
				a.set(t.prototype, {
					external: !0,
					name: e || n.constructor.name,
					cb: n
				});
			} else {
				let r = Object.keys(t).toString();
				if (o.get(r)) throw Error("Existing toJSOX has been registered for object type");
				o.set(r, {
					external: !0,
					name: e,
					cb: n
				});
			}
		},
		get ignoreNonEnumerable() {
			return l;
		},
		set ignoreNonEnumerable(e) {
			l = e;
		}
	};
	return d;
	function f(e) {
		if (e === null) return;
		let t = n.get(e);
		if (!t) {
			n.set(e, Oa.stringify(r));
			return;
		}
		return "ref" + t;
	}
	function p(t, n) {
		let r, i, a = Object.getPrototypeOf(t);
		if (i = e.find((e) => {
			if (e.proto && e.proto === a) return !0;
		}), i) return i;
		if (e.length || zo.length) {
			if (n) n = n.map((e) => {
				if (typeof e == "string") return e;
			}), r = n.toString();
			else {
				let e = Object.keys(t);
				for (let t = 1; t < e.length; t++) {
					let n, r;
					(n = e[t - 1]) > (r = e[t]) && (e[t - 1] = r, e[t] = n, t ? t -= 2 : t--);
				}
				r = e.toString();
			}
			i = e.find((e) => {
				if (e.tag === r) return !0;
			}), i ||= zo.find((e) => {
				if (e.tag === r) return !0;
			});
		}
		return i;
	}
	function m(t, m, h) {
		if (t === void 0) return "undefined";
		if (t === null) return;
		let g, _, v, y, b = typeof h, x = typeof m;
		if (g = "", _ = "", b === "number") for (y = 0; y < h; y += 1) _ += " ";
		else b === "string" && (_ = h);
		if (v = m, m && x !== "function" && (x !== "object" || typeof m.length != "number")) throw Error("JSOX.stringify");
		r.length = 0, n = /* @__PURE__ */ new WeakMap();
		let S = ee("", { "": t });
		return zo.length = 0, S;
		function ee(t, n) {
			var m = g;
			let h = Wa.cb, y = Ga.cb;
			Wa.cb = x, Ga.cb = S;
			let b = te(t, n);
			return Wa.cb = h, Ga.cb = y, b;
			function x() {
				let e, t = [], n = r.length;
				for (let e = 0; e < this.length; e += 1) r[n] = e, t[e] = ee(e, this) || "null";
				return r.length = n, i.length = n, e = t.length === 0 ? "[]" : g ? [
					"[\n",
					g,
					t.join(",\n" + g),
					"\n",
					m,
					"]"
				].join("") : "[" + t.join(",") + "]", e;
			}
			function S() {
				let e = { tmp: null }, t = "{", n = !0;
				for (let [i, a] of this) {
					e.tmp = a;
					let o = r.length;
					r[o] = i, t += (n ? "" : ",") + u(i) + ":" + ee("tmp", e), r.length = o, n = !1;
				}
				return t += "}", t;
			}
			function te(t, n) {
				let h, y, b, x, S, te, C = r.length, ne = !0, w = n[t], T = typeof w == "object", re;
				T && w !== null && s && (c.find((e) => e === w) || (c.push(w), i[C] = w, ne = !1, w = s.apply(w, [d]), T = typeof w == "object", c.pop(), i.length = C, T = typeof w == "object"));
				let ie = w != null && Object.getPrototypeOf(w), E = ie && (a.get(ie) || Z.get(ie) || null), D = !E && w != null && (o.get(Object.keys(w).toString()) || Lo.get(Object.keys(w).toString()) || null);
				typeof v == "function" && (ne = !1, w = v.call(n, t, w));
				let ae = E && E.cb || D && D.cb;
				if (typeof w == "object" && w && typeof ae == "function") if (c.find((e) => e === w)) b = f(w);
				else {
					if (typeof w == "object" && (b = f(w), b)) return b;
					c.push(w), i[C] = w, w = ae.call(w, d), ne = !1, c.pop(), E && E.name && typeof w == "string" && w[0] !== "-" && (w[0] < "0" || w[0] > "9") && w[0] !== "\"" && w[0] !== "'" && w[0] !== "`" && w[0] !== "[" && w[0] !== "{" && (w = " " + w), i.length = C;
				}
				else if (typeof w == "object" && (b = f(w), b)) return b;
				switch (typeof w) {
					case "bigint": return w + "n";
					case "string": {
						w = ne ? u(w) : w;
						let n = "";
						return t === "" && (n = e.map((e) => e.name + "{" + e.fields.join(",") + "}").join(g ? "\n" : "") + zo.map((e) => e.name + "{" + e.fields.join(",") + "}").join(g ? "\n" : "") + (g ? "\n" : "")), E && E.external ? n + E.name + w : D && D.external ? n + D.name + w : n + w;
					}
					case "number":
					case "boolean":
					case "null": return String(w);
					case "object":
						if (b) return b;
						if (!w) return "null";
						if (g += _, S = null, te = [], v && typeof v == "object") {
							for (x = v.length, S = p(w, v), h = 0; h < x; h += 1) typeof v[h] == "string" && (y = v[h], r[C] = y, b = ee(y, w), b !== void 0 && (S ? te.push(b) : te.push(u(y) + (g ? ": " : ":") + b)));
							r.splice(C, 1);
						} else {
							S = p(w);
							let e = [];
							for (y in w) if (!(l && !Object.prototype.propertyIsEnumerable.call(w, y)) && Object.prototype.hasOwnProperty.call(w, y)) {
								let t;
								for (t = 0; t < e.length; t++) if (e[t] > y) {
									e.splice(t, 0, y);
									break;
								}
								t == e.length && e.push(y);
							}
							for (let t = 0; t < e.length; t++) y = e[t], Object.prototype.hasOwnProperty.call(w, y) && (r[C] = y, b = ee(y, w), b !== void 0 && (S ? te.push(b) : te.push(u(y) + (g ? ": " : ":") + b)));
							r.splice(C, 1);
						}
						re = t === "" ? (e.map((e) => e.name + "{" + e.fields.join(",") + "}").join(g ? "\n" : "") || zo.map((e) => e.name + "{" + e.fields.join(",") + "}").join(g ? "\n" : "")) + (g ? "\n" : "") : "", E && E.external && (re += u(E.name));
						let n = null;
						return S && (n = u(S.name)), b = re + (te.length === 0 ? "{}" : g ? (S ? n : "") + "{\n" + g + te.join(",\n" + g) + "\n" + m + "}" : (S ? n : "") + "{" + te.join(",") + "}"), g = m, b;
				}
			}
		}
	}
};
var Uo = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789$_", Wo = {
	"~": -1,
	"=": -1,
	$: 62,
	_: 63,
	"+": 62,
	"-": 62,
	".": 62,
	"/": 63,
	",": 63
};
for (let e = 0; e < 64; e++) Wo[Uo[e]] = e;
Object.freeze(Wo);
function Go(e) {
	let t = "", n = new Uint8Array(e), r = n.byteLength, i = r % 3, a = r - i, o, s, c, l, u;
	for (let e = 0; e < a; e += 3) u = n[e] << 16 | n[e + 1] << 8 | n[e + 2], o = (u & 16515072) >> 18, s = (u & 258048) >> 12, c = (u & 4032) >> 6, l = u & 63, t += Uo[o] + Uo[s] + Uo[c] + Uo[l];
	return i == 1 ? (u = n[a], o = (u & 252) >> 2, s = (u & 3) << 4, t += Uo[o] + Uo[s] + "==") : i == 2 && (u = n[a] << 8 | n[a + 1], o = (u & 64512) >> 10, s = (u & 1008) >> 4, c = (u & 15) << 2, t += Uo[o] + Uo[s] + Uo[c] + "="), t;
}
function Ko(e) {
	let t;
	t = e.length % 4 == 1 ? ((e.length + 3) / 4 | 0) * 3 - 3 : e.length % 4 == 2 ? ((e.length + 3) / 4 | 0) * 3 - 2 : e.length % 4 == 3 ? ((e.length + 3) / 4 | 0) * 3 - 1 : Wo[e[e.length - 3]] == -1 ? ((e.length + 3) / 4 | 0) * 3 - 3 : Wo[e[e.length - 2]] == -1 ? ((e.length + 3) / 4 | 0) * 3 - 2 : Wo[e[e.length - 1]] == -1 ? ((e.length + 3) / 4 | 0) * 3 - 1 : ((e.length + 3) / 4 | 0) * 3;
	let n = new ArrayBuffer(t), r = new Uint8Array(n), i, a = e.length + 3 >> 2;
	for (i = 0; i < a; i++) {
		let t = Wo[e[i * 4]], n = i * 4 + 1 < e.length ? Wo[e[i * 4 + 1]] : -1, a = n >= 0 && i * 4 + 2 < e.length ? Wo[e[i * 4 + 2]] : -1, o = a >= 0 && i * 4 + 3 < e.length ? Wo[e[i * 4 + 3]] : -1;
		n >= 0 && (r[i * 3 + 0] = t << 2 | n >> 4), a >= 0 && (r[i * 3 + 1] = n << 4 | a >> 2 & 15), o >= 0 && (r[i * 3 + 2] = a << 6 | o & 63);
	}
	return n;
}
//#endregion
//#region ../../projects/lur.e/src/interactive/modules/ScrollBar.ts
G.stringify = function(e, t, n) {
	return G.stringifier().stringify(e, t, n);
}, [[
	0,
	256,
	[
		16767487,
		16739071,
		130048,
		3670016,
		0,
		16777208,
		16777215,
		8388607
	]
]].map((e) => ({
	firstChar: e[0],
	lastChar: e[1],
	bits: e[2]
})), Se();
try {
	CSS.registerProperty({
		name: "--percent-x",
		syntax: "<number>",
		inherits: !0,
		initialValue: "0"
	});
} catch {}
try {
	CSS.registerProperty({
		name: "--percent-y",
		syntax: "<number>",
		inherits: !0,
		initialValue: "0"
	});
} catch {}
try {
	CSS.registerProperty({
		name: "--scroll-coef",
		syntax: "<number>",
		inherits: !0,
		initialValue: "1"
	});
} catch {}
try {
	CSS.registerProperty({
		name: "--determinant",
		syntax: "<number>",
		inherits: !0,
		initialValue: "0"
	});
} catch {}
try {
	CSS.registerProperty({
		name: "--scroll-size",
		syntax: "<length-percentage>",
		inherits: !0,
		initialValue: "0px"
	});
} catch {}
try {
	CSS.registerProperty({
		name: "--content-size",
		syntax: "<length-percentage>",
		inherits: !0,
		initialValue: "0px"
	});
} catch {}
try {
	CSS.registerProperty({
		name: "--clamped-size",
		syntax: "<length-percentage>",
		inherits: !0,
		initialValue: "0px"
	});
} catch {}
try {
	CSS.registerProperty({
		name: "--thumb-size",
		syntax: "<length-percentage>",
		inherits: !0,
		initialValue: "0px"
	});
} catch {}
try {
	CSS.registerProperty({
		name: "--max-offset",
		syntax: "<length-percentage>",
		inherits: !0,
		initialValue: "0px"
	});
} catch {}
try {
	CSS.registerProperty({
		name: "--max-size",
		syntax: "<length-percentage>",
		inherits: !0,
		initialValue: "0px"
	});
} catch {}
//#endregion
//#region ../../projects/lur.e/src/design/color/DynamicEngine.ts
var qo = (e, t = 100) => typeof globalThis.requestIdleCallback == "function" ? globalThis.requestIdleCallback(e, { timeout: t }) : setTimeout(() => e({
	didTimeout: !1,
	timeRemaining: () => 0
}), 0);
function Jo(e) {
	if (typeof e != "string") return null;
	let t = e.trim().toLowerCase();
	if (t === "transparent") return 0;
	if (t.startsWith("#")) {
		let e = t;
		if (e.length === 4 || e.length === 7) return 1;
		if (e.length === 5) {
			let t = e[4], n = t + t;
			return Xo(parseInt(n, 16) / 255, 0, 1);
		}
		if (e.length === 9) {
			let t = e.slice(7, 9);
			return Xo(parseInt(t, 16) / 255, 0, 1);
		}
		return null;
	}
	let n = t.match(/^([a-z-]+)\((.*)\)$/i);
	if (!n) return null;
	n[1];
	let r = n[2].trim();
	{
		let e = r.lastIndexOf("/");
		if (e !== -1) {
			let t = Yo(r.slice(e + 1).trim());
			return t == null ? null : Xo(t, 0, 1);
		}
	}
	if (r.includes(",")) {
		let e = r.split(",").map((e) => e.trim());
		if (e.length >= 4) {
			let t = Yo(e[3]);
			return t == null ? null : Xo(t, 0, 1);
		}
		return 1;
	}
	return 1;
}
function Yo(e) {
	if (!e) return null;
	if (e.endsWith("%")) {
		let t = parseFloat(e);
		return Number.isNaN(t) ? null : t / 100;
	}
	let t = parseFloat(e);
	return Number.isNaN(t) ? null : t;
}
function Xo(e, t, n) {
	return Math.min(n, Math.max(t, e));
}
var Zo = (e) => !e || e == null ? 0 : (Jo?.(e) || 0) > .1, Qo = (e, t = 1e3, ...n) => {
	qo(async () => {
		if (!(!e || typeof e != "function")) for (;;) await Promise.try(e, ...n), await new Promise((e) => setTimeout(e, t)), await new Promise((e) => qo(e, 100)), await new Promise((e) => requestAnimationFrame(e));
	}, 1e3);
}, $o = () => {
	if (typeof document > "u") return null;
	try {
		let e = document.querySelectorAll("[data-shell]");
		for (let t of e) {
			let e = t.shadowRoot;
			if (!e) continue;
			let n = e.querySelector(".app-shell__nav, .app-shell__toolbar");
			if (!n) continue;
			let r = getComputedStyle(n).backgroundColor;
			if (Zo(r)) return r;
		}
	} catch {}
	return null;
}, es = () => {
	if (typeof document > "u" || !globalThis.matchMedia?.("(display-mode: window-controls-overlay)")?.matches) return null;
	let e = document.createElement("div");
	e.setAttribute("data-wco-theme-probe", "true"), e.style.cssText = [
		"position:fixed",
		"visibility:hidden",
		"pointer-events:none",
		"z-index:-2147483648",
		"left:env(titlebar-area-x,0px)",
		"top:env(titlebar-area-y,0px)",
		"width:env(titlebar-area-width,0px)",
		"height:env(titlebar-area-height,0px)"
	].join(";"), document.documentElement.appendChild(e);
	try {
		let t = e.getBoundingClientRect();
		if (t.width < 1 || t.height < 1) return null;
		let n = ts(Math.floor(t.left + Math.min(40, t.width * .2)), Math.floor(t.top + t.height * .5));
		return Zo(n) ? n : null;
	} finally {
		e.remove();
	}
}, ts = (e, t, n = null) => {
	let r = Array.from(document.elementsFromPoint(e, t))?.filter?.((e) => e instanceof HTMLElement && e != n && (e?.dataset?.alpha == null ? !0 : parseFloat(e?.dataset?.alpha) > .01) && e?.checkVisibility?.({
		contentVisibilityAuto: !0,
		opacityProperty: !0,
		visibilityProperty: !0
	}) && e?.matches?.(":not([data-hidden])") && e?.style?.getPropertyValue("display") != "none").map((e) => {
		let t = getComputedStyle?.(e);
		return {
			element: e,
			zIndex: parseInt(t?.zIndex || "0", 10) || 0,
			color: t?.backgroundColor || "transparent"
		};
	}).sort((e, t) => Math.sign(t.zIndex - e.zIndex)).filter(({ color: e }) => Zo(e));
	return r?.[0]?.element instanceof HTMLElement && r?.[0]?.color || "transparent";
}, ns = (e) => {
	let t = e?.getBoundingClientRect();
	if (t) {
		let n = .5 * (Ne?.() || 1);
		return ts((t.left + t.right) * n, (t.top + t.bottom) * n, e);
	}
}, rs = (e = document.documentElement) => {
	let t = e?.querySelector?.("meta[data-theme-color]") ?? e?.querySelector?.("meta[name=\"theme-color\"]");
	!t && e == document.documentElement && (t = document.createElement("meta"), t.setAttribute("name", "theme-color"), t.setAttribute("data-theme-color", ""), t.setAttribute("content", "transparent"), document.head.appendChild(t));
	let n = $o(), r = n ? null : es(), i = Math.max(8, Math.floor(globalThis.innerWidth * .12)), a = !n && !r ? ts(i, 20) : null, o = n || r || (a && Zo(a) ? a : null);
	o && o !== "transparent" && (t || window?.electronBridge) && e == document.documentElement && t?.setAttribute?.("content", o);
}, is = (e = document.documentElement) => {
	e.querySelectorAll("body, body > *, body > * > *").forEach((e) => {
		e && ns(e);
	});
}, as = (e = document.documentElement) => {
	let t = "__LURE_DYNAMIC_THEME_STARTED__";
	if (globalThis?.[t]) return;
	globalThis[t] = !0, matchMedia("(prefers-color-scheme: dark)").addEventListener("change", ({}) => is(e));
	let n = () => {
		rs(e), is(e);
	};
	F(e, "u2-appear", () => qo(n, 100)), F(e, "u2-hidden", () => qo(n, 100)), F(e, "u2-theme-change", () => qo(n, 100)), F(window, "load", () => qo(n, 100)), F(document, "visibilitychange", () => qo(n, 100)), Qo(n, 500);
}, os = async () => {
	rs(), is();
};
typeof document > "u" || globalThis?.__LURE_AUTO_THEME_ENGINE__ === !0 && (requestAnimationFrame(() => os?.()), as?.());
//#endregion
//#region ../../projects/uniform.ts/src/newer/next/types/Interface.ts
var Q = /* @__PURE__ */ function(e) {
	return e.GET = "get", e.SET = "set", e.CALL = "call", e.APPLY = "apply", e.CONSTRUCT = "construct", e.DELETE = "delete", e.DELETE_PROPERTY = "deleteProperty", e.HAS = "has", e.OWN_KEYS = "ownKeys", e.GET_OWN_PROPERTY_DESCRIPTOR = "getOwnPropertyDescriptor", e.GET_PROPERTY_DESCRIPTOR = "getPropertyDescriptor", e.GET_PROTOTYPE_OF = "getPrototypeOf", e.SET_PROTOTYPE_OF = "setPrototypeOf", e.IS_EXTENSIBLE = "isExtensible", e.PREVENT_EXTENSIONS = "preventExtensions", e.TRANSFER = "transfer", e.IMPORT = "import", e.DISPOSE = "dispose", e;
}({}), ss = {
	ws: "websocket",
	socket: "websocket",
	socketio: "socket-io",
	service: "service-worker",
	sw: "service-worker",
	"service-worker-client": "service-worker",
	"service-worker-host": "service-worker",
	"ring-buffer": "atomics"
};
function cs(e) {
	let t = String(e ?? "").trim().toLowerCase();
	return t ? ss[t] ?? t : "internal";
}
function ls(e) {
	return typeof e == "string" ? cs(e) : typeof Worker < "u" && e instanceof Worker ? "worker" : typeof SharedWorker < "u" && e instanceof SharedWorker ? "shared-worker" : typeof MessagePort < "u" && e instanceof MessagePort ? "message-port" : typeof BroadcastChannel < "u" && e instanceof BroadcastChannel ? "broadcast" : typeof WebSocket < "u" && e instanceof WebSocket ? "websocket" : typeof RTCDataChannel < "u" && e instanceof RTCDataChannel ? "rtc-data" : typeof chrome < "u" && e && typeof e == "object" && typeof e.postMessage == "function" && e.onMessage?.addListener ? "chrome-port" : "internal";
}
//#endregion
//#region ../../projects/uniform.ts/src/newer/next/observable/Observable.ts
var us = class {
	_closed = !1;
	constructor(e) {
		this._unsubscribe = e;
	}
	get closed() {
		return this._closed;
	}
	unsubscribe() {
		this._closed || (this._closed = !0, this._unsubscribe());
	}
}, ds = class {
	constructor(e) {
		this._producer = e;
	}
	subscribe(e, t) {
		let n = typeof e == "function" ? { next: e } : e ?? {}, r = new AbortController();
		t?.signal?.addEventListener("abort", () => r.abort());
		let i = !0, a, o = () => {
			i = !1, r.abort(), a?.();
		}, s = {
			next: (e) => i && n.next?.(e),
			error: (e) => {
				i && (n.error?.(e), o());
			},
			complete: () => {
				i && (n.complete?.(), o());
			},
			signal: r.signal,
			get active() {
				return i && !r.signal.aborted;
			}
		};
		try {
			a = this._producer(s);
		} catch (e) {
			s.error(e);
		}
		return new us(o);
	}
	pipe(...e) {
		return e.reduce((e, t) => t(e), this);
	}
}, fs = class {
	_subs = /* @__PURE__ */ new Set();
	_buffer = [];
	_maxBuffer;
	_replay;
	constructor(e = {}) {
		this._maxBuffer = e.bufferSize ?? 0, this._replay = e.replayOnSubscribe ?? !1;
	}
	next(e) {
		this._maxBuffer > 0 && (this._buffer.push(e), this._buffer.length > this._maxBuffer && this._buffer.shift());
		for (let t of this._subs) try {
			t.next?.(e);
		} catch (e) {
			t.error?.(e);
		}
	}
	error(e) {
		for (let t of this._subs) t.error?.(e);
	}
	complete() {
		for (let e of this._subs) e.complete?.();
		this._subs.clear();
	}
	subscribe(e) {
		let t = typeof e == "function" ? { next: e } : e;
		if (this._subs.add(t), this._replay) for (let e of this._buffer) try {
			t.next?.(e);
		} catch (e) {
			t.error?.(e);
		}
		return new us(() => {
			this._subs.delete(t);
		});
	}
	getValue() {
		return this._buffer.at(-1);
	}
	getBuffer() {
		return [...this._buffer];
	}
	get subscriberCount() {
		return this._subs.size;
	}
}, ps = (e) => (t) => new ds((n) => {
	let r = t.subscribe({
		next: (t) => e(t) && n.next(t),
		error: (e) => n.error(e),
		complete: () => n.complete()
	});
	return () => r.unsubscribe();
});
//#endregion
//#region ../../projects/uniform.ts/src/newer/next/proxy/Invoker.ts
function ms() {
	if (globalThis.Deno !== void 0) return "deno";
	if (globalThis.process !== void 0 && globalThis.process?.versions?.node) return "node";
	let e = globalThis.ServiceWorkerGlobalScope, t = globalThis.SharedWorkerGlobalScope, n = globalThis.DedicatedWorkerGlobalScope;
	if (e && self instanceof e) return "service-worker";
	if (t && self instanceof t) return "shared-worker";
	if (n && self instanceof n) return "worker";
	if (typeof chrome < "u" && chrome.runtime?.id) {
		if (typeof chrome.runtime.getBackgroundPage == "function" || chrome.runtime.getManifest?.()?.background?.service_worker) return "chrome-background";
		if (chrome.devtools !== void 0) return "chrome-devtools";
		if (typeof document < "u" && globalThis?.location?.protocol === "chrome-extension:" && (chrome.extension?.getViews?.({ type: "popup" }) ?? []).includes(globalThis)) return "chrome-popup";
		if (typeof document < "u" && globalThis?.location?.protocol !== "chrome-extension:") return "chrome-content";
	}
	return typeof globalThis < "u" && typeof document < "u" ? "window" : "unknown";
}
function hs(e) {
	if (typeof RTCDataChannel < "u" && e instanceof RTCDataChannel) return "rtc-data";
	let t = ls(e);
	return t && t !== "internal" ? t : e === self || e === globalThis || e === "self" ? "self" : "internal";
}
function gs(e) {
	if (!e) return "unknown";
	if (e.contextType) return e.contextType;
	let t = e.sender ?? "";
	return t.includes("worker") ? "worker" : t.includes("sw") || t.includes("service") ? "service-worker" : t.includes("chrome") || t.includes("crx") ? "chrome-content" : t.includes("background") ? "chrome-background" : "unknown";
}
var _s = {
	get: (e, t) => Reflect.get(e, t),
	set: (e, t, n) => Reflect.set(e, t, n),
	has: (e, t) => Reflect.has(e, t),
	apply: (e, t, n) => Reflect.apply(e, t, n),
	construct: (e, t) => Reflect.construct(e, t),
	deleteProperty: (e, t) => Reflect.deleteProperty(e, t),
	ownKeys: (e) => Reflect.ownKeys(e),
	getOwnPropertyDescriptor: (e, t) => Reflect.getOwnPropertyDescriptor(e, t),
	getPrototypeOf: (e) => Reflect.getPrototypeOf(e),
	setPrototypeOf: (e, t) => Reflect.setPrototypeOf(e, t),
	isExtensible: (e) => Reflect.isExtensible(e),
	preventExtensions: (e) => Reflect.preventExtensions(e)
}, vs = Symbol.for("uniform.proxy"), ys = Symbol.for("uniform.proxy.internals"), bs = class {
	_config;
	_childCache = /* @__PURE__ */ new Map();
	constructor(e, t) {
		this._invoker = e, this._config = {
			channel: t.channel,
			basePath: t.basePath ?? [],
			invoker: e,
			cache: t.cache ?? !0,
			timeout: t.timeout ?? 3e4
		};
	}
	get(e, t, n) {
		let r = String(t);
		if (t === vs) return !0;
		if (t === ys) return this._config;
		if (t === Ps) return !0;
		if (t === Fs) return this._getDescriptor();
		if (t === "then" || t === "catch" || t === "finally" || typeof t == "symbol") return;
		if (t === "$path") return this._config.basePath;
		if (t === "$channel") return this._config.channel;
		if (t === "$descriptor") return this._getDescriptor();
		if (t === "$invoke") return this._invoker;
		let i = [...this._config.basePath, r];
		if (this._config.cache && this._childCache.has(r)) return this._childCache.get(r);
		let a = xs(this._invoker, {
			...this._config,
			basePath: i
		});
		return this._config.cache && this._childCache.set(r, a), a;
	}
	set(e, t, n, r) {
		return typeof t == "symbol" || this._invoker(Q.SET, [...this._config.basePath, String(t)], [n]), !0;
	}
	apply(e, t, n) {
		return this._invoker(Q.APPLY, this._config.basePath, [n]);
	}
	construct(e, t, n) {
		return this._invoker(Q.CONSTRUCT, this._config.basePath, [t]);
	}
	has(e, t) {
		return typeof t == "symbol" ? !1 : this._invoker(Q.HAS, this._config.basePath, [t]);
	}
	deleteProperty(e, t) {
		return typeof t == "symbol" ? !0 : this._invoker(Q.DELETE_PROPERTY, [...this._config.basePath, String(t)], []);
	}
	ownKeys(e) {
		return [];
	}
	getOwnPropertyDescriptor(e, t) {
		return {
			configurable: !0,
			enumerable: !0,
			writable: !0
		};
	}
	getPrototypeOf(e) {
		return Function.prototype;
	}
	setPrototypeOf(e, t) {
		return this._invoker(Q.SET_PROTOTYPE_OF, this._config.basePath, [t]);
	}
	isExtensible(e) {
		return !0;
	}
	preventExtensions(e) {
		return this._invoker(Q.PREVENT_EXTENSIONS, this._config.basePath, []);
	}
	_getDescriptor() {
		return {
			path: this._config.basePath,
			channel: this._config.channel,
			primitive: !1
		};
	}
};
function xs(e, t) {
	let n = function() {}, r = new bs(e, t);
	return new Proxy(n, r);
}
function Ss(e, t, n) {
	if (!e || typeof e != "object" || e.primitive) return e;
	let r = Ms.get(e);
	if (r) return r;
	let i = xs(t, {
		channel: n ?? e.channel ?? "unknown",
		basePath: e.path ?? []
	});
	return Ms.set(e, i), js.set(i, e), i;
}
var Cs = Ss;
//#endregion
//#region ../../projects/uniform.ts/src/newer/next/channel/internal/ConnectionModel.ts
function ws(e) {
	return [
		e.localChannel,
		e.remoteChannel,
		e.sender,
		e.transportType,
		e.direction
	].join("::");
}
function Ts(e, t = {}) {
	let n = t.includeClosed ?? !1, r = t.status ?? (n ? void 0 : "active");
	return [...e].filter((e) => !(r && e.status !== r || t.channel && e.localChannel !== t.channel && e.remoteChannel !== t.channel || t.localChannel && e.localChannel !== t.localChannel || t.remoteChannel && e.remoteChannel !== t.remoteChannel || t.sender && e.sender !== t.sender || t.transportType && e.transportType !== t.transportType || t.direction && e.direction !== t.direction)).sort((e, t) => t.updatedAt - e.updatedAt);
}
var Es = class {
	_connections = /* @__PURE__ */ new Map();
	constructor(e, t) {
		this._createId = e, this._emitEvent = t;
	}
	register(e) {
		let t = ws(e), n = Date.now(), r = this._connections.get(t);
		if (r) return r.updatedAt = n, r.status = "active", r.metadata = {
			...r.metadata,
			...e.metadata
		}, r;
		let i = {
			id: this._createId(),
			localChannel: e.localChannel,
			remoteChannel: e.remoteChannel,
			sender: e.sender,
			transportType: e.transportType,
			direction: e.direction,
			status: "active",
			createdAt: n,
			updatedAt: n,
			metadata: e.metadata
		};
		return this._connections.set(t, i), this._emitEvent?.({
			type: "connected",
			connection: i,
			timestamp: n
		}), i;
	}
	markNotified(e, t) {
		let n = Date.now();
		e.lastNotifyAt = n, e.updatedAt = n, this._emitEvent?.({
			type: "notified",
			connection: e,
			timestamp: n,
			payload: t
		});
	}
	closeByChannel(e) {
		let t = Date.now();
		for (let n of this._connections.values()) n.localChannel !== e && n.remoteChannel !== e || n.status !== "closed" && (n.status = "closed", n.updatedAt = t, this._emitEvent?.({
			type: "disconnected",
			connection: n,
			timestamp: t
		}));
	}
	closeAll() {
		let e = Date.now();
		for (let t of this._connections.values()) t.status !== "closed" && (t.status = "closed", t.updatedAt = e, this._emitEvent?.({
			type: "disconnected",
			connection: t,
			timestamp: e
		}));
	}
	query(e = {}) {
		return Ts(this._connections.values(), e);
	}
	values() {
		return [...this._connections.values()];
	}
	clear() {
		this._connections.clear();
	}
}, Ds = class {
	_name;
	_contextType;
	_config;
	_transports = /* @__PURE__ */ new Map();
	_defaultTransport = null;
	_connectionEvents = new fs({ bufferSize: 200 });
	_connectionRegistry = new Es(() => h(), (e) => this._connectionEvents.next(e));
	_pending = /* @__PURE__ */ new Map();
	_subscriptions = [];
	_inbound = new fs({ bufferSize: 100 });
	_outbound = new fs({ bufferSize: 100 });
	_invocations = new fs({ bufferSize: 100 });
	_responses = new fs({ bufferSize: 100 });
	_exposed = /* @__PURE__ */ new Map();
	_proxyCache = /* @__PURE__ */ new WeakMap();
	__getPrivate(e) {
		return this[e];
	}
	__setPrivate(e, t) {
		this[e] = t;
	}
	constructor(e) {
		let t = typeof e == "string" ? { name: e } : e;
		this._name = t.name, this._contextType = t.autoDetect === !1 ? "unknown" : ms(), this._config = {
			name: t.name,
			autoDetect: t.autoDetect ?? !0,
			timeout: t.timeout ?? 3e4,
			reflect: t.reflect ?? _s,
			bufferSize: t.bufferSize ?? 100,
			autoListen: t.autoListen ?? !0
		}, this._config.autoListen && this._isWorkerContext() && this.listen(self);
	}
	connect(e, t = {}) {
		let n = hs(e), r = t.targetChannel ?? this._inferTargetChannel(e, n), i = this._createTransportBinding(e, n, r, t);
		this._transports.set(r, i), this._defaultTransport ||= i;
		let a = this._registerConnection({
			localChannel: this._name,
			remoteChannel: r,
			sender: this._name,
			transportType: n,
			direction: "outgoing",
			metadata: { phase: "connect" }
		});
		return this._emitConnectionSignal(i, "connect", {
			connectionId: a.id,
			from: this._name,
			to: r
		}), this;
	}
	listen(e, t = {}) {
		let n = hs(e), r = t.targetChannel ?? this._inferTargetChannel(e, n), i = (e) => this._handleIncoming(e), a = this._registerConnection({
			localChannel: this._name,
			remoteChannel: r,
			sender: r,
			transportType: n,
			direction: "incoming",
			metadata: { phase: "listen" }
		});
		switch (n) {
			case "worker":
			case "message-port":
			case "broadcast":
				t.autoStart !== !1 && e.start && e.start(), e.addEventListener?.("message", ((e) => i(e.data)));
				break;
			case "websocket":
				e.addEventListener?.("message", ((e) => {
					try {
						i(JSON.parse(e.data));
					} catch {}
				}));
				break;
			case "chrome-runtime":
				chrome.runtime.onMessage?.addListener?.((e, t, n) => (i(e), !0));
				break;
			case "chrome-tabs":
				chrome.runtime.onMessage?.addListener?.((e, n) => t.tabId != null && n?.tab?.id !== t.tabId ? !1 : (i(e), !0));
				break;
			case "chrome-port":
				e?.onMessage?.addListener?.((e) => {
					i(e);
				});
				break;
			case "chrome-external":
				chrome.runtime.onMessageExternal?.addListener?.((e) => (i(e), !0));
				break;
			case "self":
				addEventListener?.("message", ((e) => i(e.data)));
				break;
			default: t.onMessage && t.onMessage(i);
		}
		return this._sendSignalToTarget(e, n, {
			connectionId: a.id,
			from: this._name,
			to: r,
			tabId: t.tabId,
			externalId: t.externalId
		}, "notify"), this;
	}
	attach(e, t = {}) {
		return this.connect(e, t);
	}
	expose(e, t) {
		let n = [e];
		return Vs(n, t), this._exposed.set(e, {
			name: e,
			obj: t,
			path: n
		}), this;
	}
	exposeAll(e) {
		for (let [t, n] of Object.entries(e)) this.expose(t, n);
		return this;
	}
	async import(e, t) {
		return this.invoke(t ?? this._getDefaultTarget(), Q.IMPORT, [], [e]);
	}
	invoke(e, t, n, r = []) {
		let i = h(), a = Promise.withResolvers();
		this._pending.set(i, a);
		let o = setTimeout(() => {
			this._pending.has(i) && (this._pending.delete(i), a.reject(/* @__PURE__ */ Error(`Request timeout: ${t} on ${n.join(".")}`)));
		}, this._config.timeout), s = {
			id: i,
			channel: e,
			sender: this._name,
			type: "request",
			payload: {
				channel: e,
				sender: this._name,
				action: t,
				path: n,
				args: r
			},
			timestamp: Date.now()
		};
		return this._send(e, s), this._outbound.next(s), a.promise.finally(() => clearTimeout(o));
	}
	get(e, t, n) {
		return this.invoke(e, Q.GET, t, [n]);
	}
	set(e, t, n, r) {
		return this.invoke(e, Q.SET, t, [n, r]);
	}
	call(e, t, n = []) {
		return this.invoke(e, Q.APPLY, t, [n]);
	}
	construct(e, t, n = []) {
		return this.invoke(e, Q.CONSTRUCT, t, [n]);
	}
	proxy(e, t = []) {
		let n = e ?? this._getDefaultTarget();
		return this._createProxy(n, t);
	}
	remote(e, t) {
		return this.proxy(t, [e]);
	}
	wrapDescriptor(e, t) {
		return Ss(e, (n, r, i) => {
			let a = t ?? e?.channel ?? this._getDefaultTarget();
			return this.invoke(a, n, r, i);
		}, t ?? e?.channel ?? this._getDefaultTarget());
	}
	subscribe(e) {
		return this._inbound.subscribe(e);
	}
	next(e) {
		this._send(e.channel, e), this._outbound.next(e);
	}
	emit(e, t, n) {
		let r = {
			id: h(),
			channel: e,
			sender: this._name,
			type: "event",
			payload: {
				type: t,
				data: n
			},
			timestamp: Date.now()
		};
		this.next(r);
	}
	notify(e, t = {}, n = "notify") {
		let r = this._transports.get(e);
		return r ? (this._emitConnectionSignal(r, n, {
			from: this._name,
			to: e,
			...t
		}), !0) : !1;
	}
	get onMessage() {
		return this._inbound;
	}
	get onOutbound() {
		return this._outbound;
	}
	get onInvocation() {
		return this._invocations;
	}
	get onResponse() {
		return this._responses;
	}
	get onConnection() {
		return this._connectionEvents;
	}
	subscribeConnections(e) {
		return this._connectionEvents.subscribe(e);
	}
	queryConnections(e = {}) {
		return this._connectionRegistry.query(e);
	}
	notifyConnections(e = {}, t = {}) {
		let n = 0, r = this.queryConnections({
			...t,
			status: "active",
			includeClosed: !1
		});
		for (let t of r) {
			let r = this._transports.get(t.remoteChannel);
			r && (this._emitConnectionSignal(r, "notify", {
				connectionId: t.id,
				from: this._name,
				to: t.remoteChannel,
				...e
			}), n++);
		}
		return n;
	}
	get name() {
		return this._name;
	}
	get contextType() {
		return this._contextType;
	}
	get config() {
		return this._config;
	}
	get connectedChannels() {
		return [...this._transports.keys()];
	}
	get exposedModules() {
		return [...this._exposed.keys()];
	}
	close() {
		this._subscriptions.forEach((e) => e.unsubscribe()), this._subscriptions = [], this._pending.clear(), this._markAllConnectionsClosed();
		for (let e of this._transports.values()) {
			try {
				e.cleanup?.();
			} catch {}
			if (e.transportType === "message-port" || e.transportType === "broadcast") try {
				e.target?.close?.();
			} catch {}
		}
		this._transports.clear(), this._defaultTransport = null, this._connectionRegistry.clear(), this._inbound.complete(), this._outbound.complete(), this._invocations.complete(), this._responses.complete(), this._connectionEvents.complete();
	}
	_handleIncoming(e) {
		if (!(!e || typeof e != "object")) switch (this._inbound.next(e), e.type) {
			case "request":
				e.channel === this._name && this._handleRequest(e);
				break;
			case "response":
				this._handleResponse(e);
				break;
			case "event": break;
			case "signal":
				this._handleSignal(e);
				break;
		}
	}
	_handleResponse(e) {
		let t = e.reqId ?? e.id, n = this._pending.get(t);
		if (n) {
			if (this._pending.delete(t), e.payload?.error) n.reject(Error(e.payload.error));
			else {
				let t = e.payload?.result, r = e.payload?.descriptor;
				t == null ? r ? n.resolve(this.wrapDescriptor(r, e.sender)) : n.resolve(void 0) : n.resolve(t);
			}
			this._responses.next({
				id: t,
				channel: e.channel,
				sender: e.sender,
				result: e.payload?.result,
				descriptor: e.payload?.descriptor,
				timestamp: Date.now()
			});
		}
	}
	async _handleRequest(e) {
		let t = e.payload;
		if (!t) return;
		let { action: n, path: r, args: i, sender: a } = t, o = e.reqId ?? e.id;
		this._invocations.next({
			id: o,
			channel: this._name,
			sender: a,
			action: n,
			path: r,
			args: i ?? [],
			timestamp: Date.now(),
			contextType: gs(e)
		});
		let { result: s, toTransfer: c, newPath: l } = await this._executeAction(n, r, i ?? [], a);
		await this._sendResponse(o, n, a, l, s, c);
	}
	async _executeAction(e, t, n, r) {
		let { result: i, toTransfer: a, path: o } = qs(e, t, n, {
			channel: this._name,
			sender: r,
			reflect: this._config.reflect
		});
		return {
			result: await i,
			toTransfer: a,
			newPath: o
		};
	}
	async _sendResponse(e, t, n, r, i, a) {
		let { response: o, transfer: s } = await Js(e, t, this._name, n, r, i, a), c = {
			id: e,
			...o,
			timestamp: Date.now(),
			transferable: s
		};
		this._send(n, c, s);
	}
	_handleSignal(e) {
		let t = e?.payload ?? {}, n = t.from ?? e.sender ?? "unknown", r = e.transportType ?? this._transports.get(e.channel)?.transportType ?? "internal", i = this._registerConnection({
			localChannel: this._name,
			remoteChannel: n,
			sender: e.sender ?? n,
			transportType: r,
			direction: "incoming"
		});
		this._markConnectionNotified(i, t);
	}
	_registerConnection(e) {
		return this._connectionRegistry.register(e);
	}
	_markConnectionNotified(e, t) {
		this._connectionRegistry.markNotified(e, t);
	}
	_emitConnectionSignal(e, t, n = {}) {
		let r = {
			id: h(),
			type: "signal",
			channel: e.targetChannel,
			sender: this._name,
			transportType: e.transportType,
			payload: {
				type: t,
				from: this._name,
				to: e.targetChannel,
				...n
			},
			timestamp: Date.now()
		};
		(e?.sender ?? e?.postMessage)?.call(e, r);
		let i = this._registerConnection({
			localChannel: this._name,
			remoteChannel: e.targetChannel,
			sender: this._name,
			transportType: e.transportType,
			direction: "outgoing"
		});
		this._markConnectionNotified(i, r.payload);
	}
	_sendSignalToTarget(e, t, n, r) {
		let i = {
			id: h(),
			type: "signal",
			channel: n.to ?? this._name,
			sender: this._name,
			transportType: t,
			payload: {
				type: r,
				...n
			},
			timestamp: Date.now()
		};
		try {
			if (t === "websocket") {
				e?.send?.(JSON.stringify(i));
				return;
			}
			if (t === "chrome-runtime") {
				chrome.runtime?.sendMessage?.(i);
				return;
			}
			if (t === "chrome-tabs") {
				let e = n.tabId;
				e != null && chrome.tabs?.sendMessage?.(e, i);
				return;
			}
			if (t === "chrome-port") {
				e?.postMessage?.(i);
				return;
			}
			if (t === "chrome-external") {
				n.externalId && chrome.runtime?.sendMessage?.(n.externalId, i);
				return;
			}
			e?.postMessage?.(i, { transfer: [] });
		} catch {}
	}
	_markAllConnectionsClosed() {
		this._connectionRegistry.closeAll();
	}
	_createTransportBinding(e, t, n, r) {
		let i, a;
		switch (t) {
			case "worker":
			case "message-port":
			case "broadcast":
				r.autoStart !== !1 && e.start && e.start(), i = (t, n) => e.postMessage(t, { transfer: n });
				{
					let t = ((e) => this._handleIncoming(e.data));
					e.addEventListener?.("message", t), a = () => e.removeEventListener?.("message", t);
				}
				break;
			case "websocket":
				i = (t) => e.send(JSON.stringify(t));
				{
					let t = ((e) => {
						try {
							this._handleIncoming(JSON.parse(e.data));
						} catch {}
					});
					e.addEventListener?.("message", t), a = () => e.removeEventListener?.("message", t);
				}
				break;
			case "chrome-runtime":
				i = (e) => chrome.runtime.sendMessage(e);
				{
					let e = (e) => this._handleIncoming(e);
					chrome.runtime.onMessage?.addListener?.(e), a = () => chrome.runtime.onMessage?.removeListener?.(e);
				}
				break;
			case "chrome-tabs":
				i = (e) => {
					r.tabId != null && chrome.tabs?.sendMessage?.(r.tabId, e);
				};
				{
					let e = (e, t) => r.tabId != null && t?.tab?.id !== r.tabId ? !1 : (this._handleIncoming(e), !0);
					chrome.runtime.onMessage?.addListener?.(e), a = () => chrome.runtime.onMessage?.removeListener?.(e);
				}
				break;
			case "chrome-port":
				if (e?.postMessage && e?.onMessage?.addListener) {
					i = (t) => e.postMessage(t);
					let t = (e) => this._handleIncoming(e);
					e.onMessage.addListener(t), a = () => {
						try {
							e.onMessage.removeListener(t);
						} catch {}
						try {
							e.disconnect?.();
						} catch {}
					};
				} else {
					let e = r.portName ?? n, t = r.tabId != null && chrome.tabs?.connect ? chrome.tabs.connect(r.tabId, { name: e }) : chrome.runtime.connect({ name: e });
					i = (e) => t.postMessage(e);
					let o = (e) => this._handleIncoming(e);
					t.onMessage.addListener(o), a = () => {
						try {
							t.onMessage.removeListener(o);
						} catch {}
						try {
							t.disconnect();
						} catch {}
					};
				}
				break;
			case "chrome-external":
				i = (e) => {
					r.externalId && chrome.runtime.sendMessage(r.externalId, e);
				};
				{
					let e = (e) => (this._handleIncoming(e), !0);
					chrome.runtime.onMessageExternal?.addListener?.(e), a = () => chrome.runtime.onMessageExternal?.removeListener?.(e);
				}
				break;
			case "self":
				i = (e, t) => globalThis.postMessage?.(e, { transfer: t ?? [] });
				{
					let e = ((e) => this._handleIncoming(e.data));
					globalThis.addEventListener?.("message", e), a = () => globalThis.removeEventListener?.("message", e);
				}
				break;
			default: r.onMessage && (a = r.onMessage((e) => this._handleIncoming(e))), i = (t) => e?.postMessage?.(t);
		}
		return {
			target: e,
			targetChannel: n,
			transportType: t,
			sender: i,
			cleanup: a,
			postMessage: (e, t) => i?.(e, t),
			start: () => e?.start?.(),
			close: () => e?.close?.()
		};
	}
	_send(e, t, n) {
		let r = this._transports.get(e) ?? this._defaultTransport;
		(r?.sender ?? r?.postMessage)?.call(r, t, n);
	}
	_getDefaultTarget() {
		return this._defaultTransport ? this._defaultTransport.targetChannel : "worker";
	}
	_inferTargetChannel(e, t) {
		return t === "worker" ? "worker" : t === "broadcast" && e.name ? e.name : t === "self" ? "self" : `${t}-${h().slice(0, 8)}`;
	}
	_createProxy(e, t) {
		return xs((t, n, r) => this.invoke(e, t, n, r), {
			channel: e,
			basePath: t,
			cache: !0,
			timeout: this._config.timeout
		});
	}
	_isWorkerContext() {
		return [
			"worker",
			"shared-worker",
			"service-worker"
		].includes(this._contextType);
	}
}, Os = {
	rjb: "rejectBy",
	rvb: "resolveBy",
	rj: "reject",
	rv: "resolve",
	cr: "create",
	cs: "createSync",
	a: "array",
	ta: "typedarray",
	udf: "undefined"
};
[
	typeof ArrayBuffer == Os.udf ? null : ArrayBuffer,
	typeof MessagePort == Os.udf ? null : MessagePort,
	typeof ReadableStream == Os.udf ? null : ReadableStream,
	typeof WritableStream == Os.udf ? null : WritableStream,
	typeof TransformStream == Os.udf ? null : TransformStream,
	typeof WebTransportReceiveStream == Os.udf ? null : WebTransportReceiveStream,
	typeof WebTransportSendStream == Os.udf ? null : WebTransportSendStream,
	typeof AudioData == Os.udf ? null : AudioData,
	typeof ImageBitmap == Os.udf ? null : ImageBitmap,
	typeof VideoFrame == Os.udf ? null : VideoFrame,
	typeof OffscreenCanvas == Os.udf ? null : OffscreenCanvas,
	typeof RTCDataChannel == Os.udf ? null : RTCDataChannel
].filter((e) => e != null);
//#endregion
//#region ../../projects/uniform.ts/src/newer/next/channel/Channels.ts
var ks = {
	name: "unknown",
	instance: null
}, As = /* @__PURE__ */ new WeakMap(), js = /* @__PURE__ */ new WeakMap(), Ms = /* @__PURE__ */ new WeakMap(), Ns = (e, t = ks?.name, n) => typeof e == "object" && e || typeof e == "function" && e != null ? js.has(e) ? js.get(e) : As.has(e) ? As.get(e) : se(e) || n?.includes?.(e) || t == ks?.name ? e : {
	$isDescriptor: !0,
	path: Rs.get(e) ?? (() => {
		let t = [h()];
		return Vs(t, e), t;
	})(),
	owner: ks?.name,
	channel: t,
	primitive: a(e),
	writable: !0,
	enumerable: !0,
	configurable: !0,
	argumentCount: e instanceof Function ? e.length : -1
} : ce(e) ? e : null, Ps = Symbol.for("@requestHandler"), Fs = Symbol.for("@descriptor"), Is = (e) => ce(e) || e?.[Fs] ? e : e?.$isDescriptor ? Cs(e, async () => void 0) : se(e) ? e : null, Ls = /* @__PURE__ */ new Map(), Rs = /* @__PURE__ */ new WeakMap(), zs = (e, t) => {
	if (t != null && !Array.isArray(t) && (t = [t]), t == null || t?.length < 1) return e;
	let n = e?.[Fs] ?? (e?.$isDescriptor ? e : null);
	if (n && n?.owner == ks?.name && (e = Bs(n?.path) ?? e), a(e)) return e;
	for (let n of t) if (e = e?.[n], e == null) return e;
	return e;
}, Bs = (e) => {
	if (e != null && !Array.isArray(e) && (e = [e]), e == null || e?.length < 1) return null;
	let t = Ls?.get?.(e?.[0]) ?? null;
	return t == null ? null : zs(t, e?.slice?.(1));
}, Vs = (e, t) => {
	let n = t?.[Fs] ?? (t?.$isDescriptor ? t : null);
	if (n && n?.owner == ks?.name && (t = Bs(n?.path) ?? t), e != null && !Array.isArray(e) && (e = [e]), e == null || e?.length < 1) return null;
	let r = Ls?.get?.(e?.[0]) ?? null;
	return e?.length > 1 ? zs(r, e?.slice?.(1, -1))[e?.[e?.length - 1]] = t : Ls?.set?.(e?.[0], t), (typeof t == "object" || typeof t == "function") && Rs?.set?.(t, e), t;
}, Hs = (e) => (e != null && !Array.isArray(e) && (e = [e]), e == null || e?.length < 1 ? !1 : !(Ls?.get?.(e?.[0]) ?? null) && e?.length <= 1 ? (Ls?.delete?.(e?.[0]), !0) : !1), Us = (e) => {
	let t = e?.[Fs] ?? (e?.$isDescriptor ? e : null);
	t && t?.owner == ks?.name && (e = Bs(t?.path) ?? e);
	let n = Rs?.get?.(e) ?? t?.path;
	return n == null || n?.length < 1 ? !1 : (Hs(n), (typeof e == "object" || typeof e == "function") && Rs?.delete?.(e), !0);
}, Ws = (e) => {
	let t = e?.[Fs] ?? (e?.$isDescriptor ? e : null);
	return (Rs?.get?.(e) ?? t?.path) == null;
}, Gs = (e) => (typeof e == "object" || typeof e == "function") && e != null, Ks = {
	get: (e, t) => e?.[t],
	set: (e, t, n) => (e[t] = n, !0),
	has: (e, t) => t in e,
	apply: (e, t, n) => e.apply(t, n),
	construct: (e, t) => new e(...t),
	deleteProperty: (e, t) => delete e[t],
	ownKeys: (e) => Object.keys(e),
	getOwnPropertyDescriptor: (e, t) => Object.getOwnPropertyDescriptor(e, t),
	getPrototypeOf: (e) => Object.getPrototypeOf(e),
	setPrototypeOf: (e, t) => Object.setPrototypeOf(e, t),
	isExtensible: (e) => Object.isExtensible(e),
	preventExtensions: (e) => Object.preventExtensions(e)
};
function qs(e, t, n, r = {}) {
	let { channel: i = "", sender: a = "", reflect: o = Ks } = r, s = r.target ?? Bs(t), c = [], l = null, u = t;
	switch (String(e).toLowerCase()) {
		case "import":
		case Q.IMPORT:
			l = import(
				/* @vite-ignore */
				n?.[0]
);
			break;
		case "transfer":
		case Q.TRANSFER:
			ue(s) && i !== a && c.push(s), l = s;
			break;
		case "get":
		case Q.GET: {
			let e = n?.[0], r = o.get?.(s, e) ?? s?.[e];
			l = typeof r == "function" && s != null ? r.bind(s) : r, u = [...t, String(e)];
			break;
		}
		case "set":
		case Q.SET: {
			let [e, i] = n, a = _e(i, Is);
			l = r.target ? o.set?.(s, e, a) ?? (s[e] = a, !0) : o.set?.(s, e, a) ?? Vs([...t, String(e)], a);
			break;
		}
		case "apply":
		case "call":
		case Q.APPLY:
		case Q.CALL:
			if (typeof s == "function") {
				let e = r.context ?? (r.target ? void 0 : Bs(t.slice(0, -1))), u = _e(n?.[0] ?? n ?? [], Is);
				l = o.apply?.(s, e, u) ?? s.apply(e, u), ue(l) && t?.at(-1) === "transfer" && i !== a && c.push(l);
			}
			break;
		case "construct":
		case Q.CONSTRUCT:
			if (typeof s == "function") {
				let e = _e(n?.[0] ?? n ?? [], Is);
				l = o.construct?.(s, e) ?? new s(...e);
			}
			break;
		case "delete":
		case "deleteproperty":
		case "dispose":
		case Q.DELETE:
		case Q.DELETE_PROPERTY:
		case Q.DISPOSE:
			if (r.target) {
				let e = t[t.length - 1];
				l = o.deleteProperty?.(s, e) ?? delete s[e];
			} else l = t?.length > 0 ? Hs(t) : Us(s), l && (u = Rs.get(s) ?? []);
			break;
		case "has":
		case Q.HAS:
			l = o.has?.(s, n?.[0]) ?? (Gs(s) ? n?.[0] in s : !1);
			break;
		case "ownkeys":
		case Q.OWN_KEYS:
			l = o.ownKeys?.(s) ?? (Gs(s) ? Object.keys(s) : []);
			break;
		case "getownpropertydescriptor":
		case "getpropertydescriptor":
		case Q.GET_OWN_PROPERTY_DESCRIPTOR:
		case Q.GET_PROPERTY_DESCRIPTOR:
			l = o.getOwnPropertyDescriptor?.(s, n?.[0] ?? t?.at(-1) ?? "") ?? (Gs(s) ? Object.getOwnPropertyDescriptor(s, n?.[0] ?? t?.at(-1) ?? "") : void 0);
			break;
		case "getprototypeof":
		case Q.GET_PROTOTYPE_OF:
			l = o.getPrototypeOf?.(s) ?? (Gs(s) ? Object.getPrototypeOf(s) : null);
			break;
		case "setprototypeof":
		case Q.SET_PROTOTYPE_OF:
			l = o.setPrototypeOf?.(s, n?.[0]) ?? (Gs(s) ? Object.setPrototypeOf(s, n?.[0]) : !1);
			break;
		case "isextensible":
		case Q.IS_EXTENSIBLE:
			l = o.isExtensible?.(s) ?? (Gs(s) ? Object.isExtensible(s) : !0);
			break;
		case "preventextensions":
		case Q.PREVENT_EXTENSIONS:
			l = o.preventExtensions?.(s) ?? (Gs(s) ? Object.preventExtensions(s) : !1);
			break;
	}
	return {
		result: l,
		toTransfer: c,
		path: u
	};
}
async function Js(e, t, n, r, i, o, s) {
	let c = await o, l = ue(c) && s.includes(c) || ce(c), u = i;
	!l && t !== "get" && t !== Q.GET && (typeof c == "object" || typeof c == "function") && (Ws(c) ? (u = [h()], Vs(u, c)) : u = Rs.get(c) ?? []);
	let d = Bs(u), f = t === "get" || t === Q.GET ? u?.at(-1) : void 0, p = Bs(i), m = _e(c, (e) => Ns(e, n, s)) ?? c;
	return {
		response: {
			channel: r,
			sender: n,
			reqId: e,
			action: t,
			type: "response",
			payload: {
				result: l ? m : null,
				type: typeof c,
				channel: r,
				sender: n,
				descriptor: {
					$isDescriptor: !0,
					path: u,
					owner: n,
					channel: n,
					primitive: a(c),
					writable: !0,
					enumerable: !0,
					configurable: !0,
					argumentCount: p instanceof Function ? p.length : -1,
					...Gs(d) && f != null ? Object.getOwnPropertyDescriptor(d, f) : {}
				}
			}
		},
		transfer: s
	};
}
//#endregion
//#region ../../projects/uniform.ts/src/newer/next/channel/Connection.ts
var Ys = class {
	_id = h();
	_state = "disconnected";
	_inbound = new fs({ bufferSize: 1e3 });
	_outbound = new fs({ bufferSize: 1e3 });
	_stateChanges = new fs();
	_connectedPeers = /* @__PURE__ */ new Map();
	_subs = [];
	_stats = {
		messagesSent: 0,
		messagesReceived: 0,
		bytesTransferred: 0,
		latencyMs: 0,
		uptime: 0,
		reconnectCount: 0
	};
	_startTime = 0;
	_pending = /* @__PURE__ */ new Map();
	_buffer = [];
	_opts;
	constructor(e, t = "internal", n = {}) {
		this._name = e, this._transportType = t, this._opts = {
			timeout: 3e4,
			autoReconnect: !0,
			reconnectInterval: 1e3,
			maxReconnectAttempts: 5,
			bufferMessages: !0,
			bufferSize: 1e3,
			metadata: {},
			...n
		}, this._setupSubscriptions();
	}
	subscribe(e, t) {
		return (t ? ps((e) => e.sender === t)(this._inbound) : this._inbound).subscribe(typeof e == "function" ? { next: e } : e);
	}
	next(e) {
		if (this._state !== "connected") {
			this._opts.bufferMessages && this._buffer.length < this._opts.bufferSize && this._buffer.push(e);
			return;
		}
		this._outbound.next(e), this._stats.messagesSent++;
	}
	async request(e, t, n = {}) {
		let r = h(), i = Promise.withResolvers();
		this._pending.set(r, i);
		let a = setTimeout(() => {
			this._pending.has(r) && (this._pending.delete(r), i.reject(/* @__PURE__ */ Error("Request timeout")));
		}, n.timeout ?? this._opts.timeout);
		return this.next({
			id: h(),
			channel: e,
			sender: this._name,
			type: "request",
			reqId: r,
			payload: {
				...t,
				action: n.action,
				path: n.path
			},
			timestamp: Date.now()
		}), i.promise.finally(() => clearTimeout(a));
	}
	respond(e, t) {
		this.next({
			id: h(),
			channel: e.sender,
			sender: this._name,
			type: "response",
			reqId: e.reqId,
			payload: t,
			timestamp: Date.now()
		});
	}
	emit(e, t, n) {
		this.next({
			id: h(),
			channel: e,
			sender: this._name,
			type: "event",
			payload: {
				type: t,
				data: n
			},
			timestamp: Date.now()
		});
	}
	subscribeOutbound(e) {
		return this._outbound.subscribe(typeof e == "function" ? { next: e } : e);
	}
	pushInbound(e) {
		if (this._stats.messagesReceived++, e.type === "response" && e.reqId) {
			let t = this._pending.get(e.reqId);
			if (t) {
				this._pending.delete(e.reqId), t.resolve(e.payload);
				return;
			}
		}
		this._inbound.next(e);
	}
	async connect() {
		this._state !== "connected" && (this._setState("connecting"), this._startTime = Date.now(), this._setState("connected"), this._flushBuffer());
	}
	disconnect() {
		this._state === "disconnected" || this._state === "closed" || (this._setState("disconnected"), this._subs.forEach((e) => e.unsubscribe()), this._subs = []);
	}
	close() {
		this.disconnect(), this._setState("closed"), this._inbound.complete(), this._outbound.complete(), this._stateChanges.complete();
	}
	markConnected() {
		this._setState("connected"), this._flushBuffer();
	}
	markDisconnected() {
		this._setState("disconnected");
	}
	_setState(e) {
		this._state !== e && (this._state = e, this._stateChanges.next(e));
	}
	_flushBuffer() {
		for (let e of this._buffer) this._outbound.next(e);
		this._buffer = [];
	}
	_setupSubscriptions() {
		this._subs.push(this._inbound.subscribe({ next: (e) => {
			e.type === "signal" && e.payload?.type === "connect" && this._connectedPeers.set(e.sender, {
				name: e.sender,
				state: "connected",
				isHost: !1
			});
		} }));
	}
	get id() {
		return this._id;
	}
	get name() {
		return this._name;
	}
	get state() {
		return this._state;
	}
	get transportType() {
		return this._transportType;
	}
	get stats() {
		return {
			...this._stats,
			uptime: this._startTime ? Date.now() - this._startTime : 0
		};
	}
	get stateChanges() {
		return this._stateChanges;
	}
	get connectedPeers() {
		return [...this._connectedPeers.keys()];
	}
	get meta() {
		return {
			id: this._id,
			name: this._name,
			state: this._state,
			isHost: !1,
			connectedChannels: new Set(this._connectedPeers.keys())
		};
	}
}, Xs = class e {
	_connections = /* @__PURE__ */ new Map();
	static _instance = null;
	static getInstance() {
		return e._instance ||= new e(), e._instance;
	}
	getOrCreate(e, t = "internal", n = {}) {
		return this._connections.has(e) || this._connections.set(e, new Ys(e, t, n)), this._connections.get(e);
	}
	get(e) {
		return this._connections.get(e);
	}
	has(e) {
		return this._connections.has(e);
	}
	delete(e) {
		return this._connections.get(e)?.close(), this._connections.delete(e);
	}
	clear() {
		this._connections.forEach((e) => e.close()), this._connections.clear();
	}
	get size() {
		return this._connections.size;
	}
	get names() {
		return [...this._connections.keys()];
	}
}, Zs = () => Xs.getInstance(), Qs = (e, t, n) => Zs().getOrCreate(e, t, n), $s = "uniform_channels", ec = 1, $ = {
	MESSAGES: "messages",
	MAILBOX: "mailbox",
	PENDING: "pending",
	EXCHANGE: "exchange",
	TRANSACTIONS: "transactions"
}, tc = class {
	_db = null;
	_isOpen = !1;
	_openPromise = null;
	_channelName;
	_messageUpdates = new fs();
	_exchangeUpdates = new fs();
	constructor(e) {
		this._channelName = e;
	}
	async open() {
		return this._db && this._isOpen ? this._db : (this._openPromise ||= new Promise((e, t) => {
			let n = indexedDB.open($s, ec);
			n.onerror = () => {
				this._openPromise = null, t(/* @__PURE__ */ Error("Failed to open IndexedDB"));
			}, n.onsuccess = () => {
				this._db = n.result, this._isOpen = !0, this._openPromise = null, e(this._db);
			}, n.onupgradeneeded = (e) => {
				let t = e.target.result;
				this._createStores(t);
			};
		}), this._openPromise);
	}
	close() {
		this._db && (this._db.close(), this._db = null, this._isOpen = !1);
	}
	_createStores(e) {
		if (!e.objectStoreNames.contains($.MESSAGES)) {
			let t = e.createObjectStore($.MESSAGES, { keyPath: "id" });
			t.createIndex("channel", "channel", { unique: !1 }), t.createIndex("status", "status", { unique: !1 }), t.createIndex("recipient", "recipient", { unique: !1 }), t.createIndex("createdAt", "createdAt", { unique: !1 }), t.createIndex("channel_status", ["channel", "status"], { unique: !1 });
		}
		if (!e.objectStoreNames.contains($.MAILBOX)) {
			let t = e.createObjectStore($.MAILBOX, { keyPath: "id" });
			t.createIndex("channel", "channel", { unique: !1 }), t.createIndex("priority", "priority", { unique: !1 }), t.createIndex("expiresAt", "expiresAt", { unique: !1 });
		}
		if (!e.objectStoreNames.contains($.PENDING)) {
			let t = e.createObjectStore($.PENDING, { keyPath: "id" });
			t.createIndex("channel", "channel", { unique: !1 }), t.createIndex("createdAt", "createdAt", { unique: !1 });
		}
		if (!e.objectStoreNames.contains($.EXCHANGE)) {
			let t = e.createObjectStore($.EXCHANGE, { keyPath: "id" });
			t.createIndex("key", "key", { unique: !0 }), t.createIndex("owner", "owner", { unique: !1 });
		}
		e.objectStoreNames.contains($.TRANSACTIONS) || e.createObjectStore($.TRANSACTIONS, { keyPath: "id" }).createIndex("createdAt", "createdAt", { unique: !1 });
	}
	async defer(e, t = {}) {
		let n = await this.open(), r = {
			id: h(),
			channel: e.channel,
			sender: e.sender ?? this._channelName,
			recipient: e.channel,
			type: e.type,
			payload: e.payload,
			status: "pending",
			priority: t.priority ?? 0,
			createdAt: Date.now(),
			updatedAt: Date.now(),
			expiresAt: t.expiresIn ? Date.now() + t.expiresIn : null,
			retryCount: 0,
			maxRetries: t.maxRetries ?? 3,
			metadata: t.metadata
		};
		return new Promise((e, t) => {
			let i = n.transaction([$.MESSAGES, $.MAILBOX], "readwrite"), a = i.objectStore($.MESSAGES), o = i.objectStore($.MAILBOX);
			a.add(r), o.add(r), i.oncomplete = () => {
				this._messageUpdates.next(r), e(r.id);
			}, i.onerror = () => t(/* @__PURE__ */ Error("Failed to defer message"));
		});
	}
	async getDeferredMessages(e, t = {}) {
		let n = await this.open();
		return new Promise((r, i) => {
			let a = n.transaction($.MESSAGES, "readonly").objectStore($.MESSAGES), o = t.status ? a.index("channel_status") : a.index("channel"), s = t.status ? IDBKeyRange.only([e, t.status]) : IDBKeyRange.only(e), c = o.getAll(s, t.limit);
			c.onsuccess = () => {
				let e = c.result;
				t.offset && (e = e.slice(t.offset)), r(e);
			}, c.onerror = () => i(/* @__PURE__ */ Error("Failed to get deferred messages"));
		});
	}
	async processNextPending(e) {
		let t = await this.open();
		return new Promise((n, r) => {
			let i = t.transaction($.MESSAGES, "readwrite").objectStore($.MESSAGES).index("channel_status").openCursor(IDBKeyRange.only([e, "pending"]));
			i.onsuccess = () => {
				let e = i.result;
				if (e) {
					let t = e.value;
					t.status = "processing", t.updatedAt = Date.now(), e.update(t), this._messageUpdates.next(t), n(t);
				} else n(null);
			}, i.onerror = () => r(/* @__PURE__ */ Error("Failed to process pending message"));
		});
	}
	async markDelivered(e) {
		await this._updateMessageStatus(e, "delivered");
	}
	async markFailed(e) {
		let t = await this.open();
		return new Promise((n, r) => {
			let i = t.transaction($.MESSAGES, "readwrite").objectStore($.MESSAGES), a = i.get(e);
			a.onsuccess = () => {
				let e = a.result;
				if (!e) {
					n(!1);
					return;
				}
				e.retryCount++, e.updatedAt = Date.now(), e.retryCount < e.maxRetries ? e.status = "pending" : e.status = "failed", i.put(e), this._messageUpdates.next(e), n(e.status === "pending");
			}, a.onerror = () => r(/* @__PURE__ */ Error("Failed to mark message as failed"));
		});
	}
	async _updateMessageStatus(e, t) {
		let n = await this.open();
		return new Promise((r, i) => {
			let a = n.transaction($.MESSAGES, "readwrite").objectStore($.MESSAGES), o = a.get(e);
			o.onsuccess = () => {
				let e = o.result;
				e && (e.status = t, e.updatedAt = Date.now(), a.put(e), this._messageUpdates.next(e)), r();
			}, o.onerror = () => i(/* @__PURE__ */ Error("Failed to update message status"));
		});
	}
	async getMailbox(e, t = {}) {
		let n = await this.open();
		return new Promise((r, i) => {
			let a = n.transaction($.MAILBOX, "readonly").objectStore($.MAILBOX).index("channel").getAll(IDBKeyRange.only(e), t.limit);
			a.onsuccess = () => {
				let e = a.result;
				t.sortBy === "priority" ? e.sort((e, t) => t.priority - e.priority) : e.sort((e, t) => t.createdAt - e.createdAt), r(e);
			}, a.onerror = () => i(/* @__PURE__ */ Error("Failed to get mailbox"));
		});
	}
	async getMailboxStats(e) {
		let t = await this.getDeferredMessages(e), n = {
			total: t.length,
			pending: 0,
			processing: 0,
			delivered: 0,
			failed: 0,
			expired: 0
		}, r = Date.now();
		for (let e of t) e.expiresAt && e.expiresAt < r ? n.expired++ : n[e.status]++;
		return n;
	}
	async clearMailbox(e) {
		let t = await this.open();
		return new Promise((n, r) => {
			let i = t.transaction($.MAILBOX, "readwrite"), a = i.objectStore($.MAILBOX).index("channel"), o = 0, s = a.openCursor(IDBKeyRange.only(e));
			s.onsuccess = () => {
				let e = s.result;
				e && (e.delete(), o++, e.continue());
			}, i.oncomplete = () => n(o), i.onerror = () => r(/* @__PURE__ */ Error("Failed to clear mailbox"));
		});
	}
	async registerPending(e) {
		let t = await this.open(), n = {
			id: h(),
			channel: this._channelName,
			type: e.type,
			data: e.data,
			metadata: e.metadata,
			createdAt: Date.now(),
			status: "pending"
		};
		return new Promise((e, r) => {
			let i = t.transaction($.PENDING, "readwrite");
			i.objectStore($.PENDING).add(n), i.oncomplete = () => e(n.id), i.onerror = () => r(/* @__PURE__ */ Error("Failed to register pending operation"));
		});
	}
	async getPendingOperations() {
		let e = await this.open();
		return new Promise((t, n) => {
			let r = e.transaction($.PENDING, "readonly").objectStore($.PENDING).index("channel").getAll(IDBKeyRange.only(this._channelName));
			r.onsuccess = () => t(r.result), r.onerror = () => n(/* @__PURE__ */ Error("Failed to get pending operations"));
		});
	}
	async completePending(e) {
		let t = await this.open();
		return new Promise((n, r) => {
			let i = t.transaction($.PENDING, "readwrite");
			i.objectStore($.PENDING).delete(e), i.oncomplete = () => n(), i.onerror = () => r(/* @__PURE__ */ Error("Failed to complete pending operation"));
		});
	}
	async awaitPending(e, t = {}) {
		let n = t.timeout ?? 3e4, r = t.pollInterval ?? 100, i = Date.now();
		for (; Date.now() - i < n;) {
			let t = await this._getPendingById(e);
			if (!t) return null;
			if (t.status === "completed") return await this.completePending(e), t.result;
			await new Promise((e) => setTimeout(e, r));
		}
		throw Error(`Pending operation ${e} timed out`);
	}
	async _getPendingById(e) {
		let t = await this.open();
		return new Promise((n, r) => {
			let i = t.transaction($.PENDING, "readonly").objectStore($.PENDING).get(e);
			i.onsuccess = () => n(i.result ?? null), i.onerror = () => r(/* @__PURE__ */ Error("Failed to get pending operation"));
		});
	}
	async exchangePut(e, t, n = {}) {
		let r = await this.open(), i = {
			id: h(),
			key: e,
			value: t,
			owner: this._channelName,
			sharedWith: n.sharedWith ?? ["*"],
			version: 1,
			createdAt: Date.now(),
			updatedAt: Date.now()
		};
		return new Promise((t, n) => {
			let a = r.transaction($.EXCHANGE, "readwrite"), o = a.objectStore($.EXCHANGE), s = o.index("key").get(e);
			s.onsuccess = () => {
				let e = s.result;
				e && (i.id = e.id, i.version = e.version + 1, i.createdAt = e.createdAt), o.put(i);
			}, a.oncomplete = () => {
				this._exchangeUpdates.next(i), t(i.id);
			}, a.onerror = () => n(/* @__PURE__ */ Error("Failed to put exchange data"));
		});
	}
	async exchangeGet(e) {
		let t = await this.open();
		return new Promise((n, r) => {
			let i = t.transaction($.EXCHANGE, "readonly").objectStore($.EXCHANGE).index("key").get(e);
			i.onsuccess = () => {
				let e = i.result;
				if (!e) {
					n(null);
					return;
				}
				if (!this._canAccessExchange(e)) {
					n(null);
					return;
				}
				n(e.value);
			}, i.onerror = () => r(/* @__PURE__ */ Error("Failed to get exchange data"));
		});
	}
	async exchangeDelete(e) {
		let t = await this.open();
		return new Promise((n, r) => {
			let i = t.transaction($.EXCHANGE, "readwrite"), a = i.objectStore($.EXCHANGE), o = a.index("key").get(e);
			o.onsuccess = () => {
				let e = o.result;
				if (!e) {
					n(!1);
					return;
				}
				if (e.owner !== this._channelName) {
					n(!1);
					return;
				}
				a.delete(e.id);
			}, i.oncomplete = () => n(!0), i.onerror = () => r(/* @__PURE__ */ Error("Failed to delete exchange data"));
		});
	}
	async exchangeLock(e, t = {}) {
		let n = await this.open(), r = t.timeout ?? 3e4;
		return new Promise((t, i) => {
			let a = n.transaction($.EXCHANGE, "readwrite"), o = a.objectStore($.EXCHANGE), s = o.index("key").get(e);
			s.onsuccess = () => {
				let e = s.result;
				if (!e) {
					t(!1);
					return;
				}
				if (e.lock && e.lock.holder !== this._channelName && e.lock.expiresAt > Date.now()) {
					t(!1);
					return;
				}
				e.lock = {
					holder: this._channelName,
					acquiredAt: Date.now(),
					expiresAt: Date.now() + r
				}, e.updatedAt = Date.now(), o.put(e);
			}, a.oncomplete = () => t(!0), a.onerror = () => i(/* @__PURE__ */ Error("Failed to acquire lock"));
		});
	}
	async exchangeUnlock(e) {
		let t = await this.open();
		return new Promise((n, r) => {
			let i = t.transaction($.EXCHANGE, "readwrite"), a = i.objectStore($.EXCHANGE), o = a.index("key").get(e);
			o.onsuccess = () => {
				let e = o.result;
				e && e.lock?.holder === this._channelName && (delete e.lock, e.updatedAt = Date.now(), a.put(e));
			}, i.oncomplete = () => n(), i.onerror = () => r(/* @__PURE__ */ Error("Failed to release lock"));
		});
	}
	_canAccessExchange(e) {
		return e.owner === this._channelName || e.sharedWith.includes("*") ? !0 : e.sharedWith.includes(this._channelName);
	}
	async beginTransaction() {
		return new nc(this);
	}
	async executeTransaction(e) {
		let t = await this.open(), n = new Set(e.map((e) => e.store));
		return new Promise((r, i) => {
			let a = t.transaction(Array.from(n), "readwrite");
			for (let t of e) {
				let e = a.objectStore(t.store);
				switch (t.type) {
					case "put":
						t.value !== void 0 && e.put(t.value);
						break;
					case "delete":
						t.key !== void 0 && e.delete(t.key);
						break;
					case "update":
						if (t.key !== void 0) {
							let n = e.get(t.key);
							n.onsuccess = () => {
								n.result && t.value && e.put({
									...n.result,
									...t.value
								});
							};
						}
						break;
				}
			}
			a.oncomplete = () => r(), a.onerror = () => i(/* @__PURE__ */ Error("Transaction failed"));
		});
	}
	onMessageUpdate(e) {
		return this._messageUpdates.subscribe({ next: e });
	}
	onExchangeUpdate(e) {
		return this._exchangeUpdates.subscribe({ next: e });
	}
	async cleanupExpired() {
		let e = await this.open(), t = Date.now();
		return new Promise((n, r) => {
			let i = e.transaction([$.MESSAGES, $.MAILBOX], "readwrite"), a = i.objectStore($.MESSAGES), o = i.objectStore($.MAILBOX), s = 0, c = a.openCursor();
			c.onsuccess = () => {
				let e = c.result;
				if (e) {
					let n = e.value;
					n.expiresAt && n.expiresAt < t && (e.delete(), s++), e.continue();
				}
			};
			let l = o.openCursor();
			l.onsuccess = () => {
				let e = l.result;
				if (e) {
					let n = e.value;
					n.expiresAt && n.expiresAt < t && (e.delete(), s++), e.continue();
				}
			}, i.oncomplete = () => n(s), i.onerror = () => r(/* @__PURE__ */ Error("Failed to cleanup expired"));
		});
	}
}, nc = class {
	_operations = [];
	_isCommitted = !1;
	_isRolledBack = !1;
	constructor(e) {
		this._storage = e;
	}
	put(e, t) {
		return this._checkState(), this._operations.push({
			id: h(),
			type: "put",
			store: e,
			value: t,
			timestamp: Date.now()
		}), this;
	}
	delete(e, t) {
		return this._checkState(), this._operations.push({
			id: h(),
			type: "delete",
			store: e,
			key: t,
			timestamp: Date.now()
		}), this;
	}
	update(e, t, n) {
		return this._checkState(), this._operations.push({
			id: h(),
			type: "update",
			store: e,
			key: t,
			value: n,
			timestamp: Date.now()
		}), this;
	}
	async commit() {
		if (this._checkState(), this._operations.length === 0) {
			this._isCommitted = !0;
			return;
		}
		await this._storage.executeTransaction(this._operations), this._isCommitted = !0;
	}
	rollback() {
		this._operations = [], this._isRolledBack = !0;
	}
	get operationCount() {
		return this._operations.length;
	}
	_checkState() {
		if (this._isCommitted) throw Error("Transaction already committed");
		if (this._isRolledBack) throw Error("Transaction already rolled back");
	}
}, rc = /* @__PURE__ */ new Map();
function ic(e) {
	return rc.has(e) || rc.set(e, new tc(e)), rc.get(e);
}
//#endregion
//#region ../../projects/uniform.ts/src/newer/next/channel/ChannelContext.ts
var ac = new URL("data:video/mp2t;base64,LyoqCiAqIFdvcmtlciBFbnRyeSBQb2ludCAtIE11bHRpLUNoYW5uZWwgU3VwcG9ydAogKgogKiBUaGlzIHdvcmtlciBjb250ZXh0IHN1cHBvcnRzOgogKiAtIE11bHRpcGxlIGNoYW5uZWwgY3JlYXRpb24vaW5pdGlhbGl6YXRpb24KICogLSBPYnNlcnZpbmcgbmV3IGluY29taW5nIGNoYW5uZWwgY29ubmVjdGlvbnMKICogLSBEeW5hbWljIGNoYW5uZWwgYWRkaXRpb24gYWZ0ZXIgaW5pdGlhbGl6YXRpb24KICogLSBDb25uZWN0aW9uIGZyb20gcmVtb3RlL2hvc3QgY29udGV4dHMKICovCgppbXBvcnQgeyBVVUlEdjQgfSBmcm9tICJmZXN0L2NvcmUiOwppbXBvcnQgewogICAgQ2hhbm5lbENvbnRleHQsCiAgICBjcmVhdGVDaGFubmVsQ29udGV4dCwKICAgIHR5cGUgQ2hhbm5lbEVuZHBvaW50LAogICAgdHlwZSBDaGFubmVsQ29udGV4dE9wdGlvbnMsCiAgICB0eXBlIFF1ZXJ5Q29ubmVjdGlvbnNPcHRpb25zLAogICAgdHlwZSBDb250ZXh0Q29ubmVjdGlvbkluZm8KfSBmcm9tICIuLi9jaGFubmVsL0NoYW5uZWxDb250ZXh0IjsKaW1wb3J0IHsgQ2hhbm5lbFN1YmplY3QsIHR5cGUgU3Vic2NyaXB0aW9uIH0gZnJvbSAiLi4vb2JzZXJ2YWJsZS9PYnNlcnZhYmxlIjsKCi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0KLy8gVFlQRVMKLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PQoKLyoqIEluY29taW5nIGNvbm5lY3Rpb24gZXZlbnQgKi8KZXhwb3J0IGludGVyZmFjZSBJbmNvbWluZ0Nvbm5lY3Rpb24gewogICAgLyoqIENvbm5lY3Rpb24gSUQgKi8KICAgIGlkOiBzdHJpbmc7CiAgICAvKiogQ2hhbm5lbCBuYW1lICovCiAgICBjaGFubmVsOiBzdHJpbmc7CiAgICAvKiogU2VuZGVyIGNvbnRleHQgbmFtZSAqLwogICAgc2VuZGVyOiBzdHJpbmc7CiAgICAvKiogQ29ubmVjdGlvbiB0eXBlICovCiAgICB0eXBlOiAiY2hhbm5lbCIgfCAicG9ydCIgfCAiYnJvYWRjYXN0IiB8ICJzb2NrZXQiOwogICAgLyoqIE1lc3NhZ2VQb3J0IGlmIHByb3ZpZGVkICovCiAgICBwb3J0PzogTWVzc2FnZVBvcnQ7CiAgICAvKiogVGltZXN0YW1wICovCiAgICB0aW1lc3RhbXA6IG51bWJlcjsKICAgIC8qKiBDb25uZWN0aW9uIG9wdGlvbnMgKi8KICAgIG9wdGlvbnM/OiBhbnk7Cn0KCi8qKiBDaGFubmVsIGNyZWF0ZWQgZXZlbnQgKi8KZXhwb3J0IGludGVyZmFjZSBDaGFubmVsQ3JlYXRlZEV2ZW50IHsKICAgIC8qKiBDaGFubmVsIG5hbWUgKi8KICAgIGNoYW5uZWw6IHN0cmluZzsKICAgIC8qKiBFbmRwb2ludCByZWZlcmVuY2UgKi8KICAgIGVuZHBvaW50OiBDaGFubmVsRW5kcG9pbnQ7CiAgICAvKiogUmVtb3RlIHNlbmRlciAqLwogICAgc2VuZGVyOiBzdHJpbmc7CiAgICAvKiogVGltZXN0YW1wICovCiAgICB0aW1lc3RhbXA6IG51bWJlcjsKfQoKLyoqIFdvcmtlciBjb250ZXh0IGNvbmZpZ3VyYXRpb24gKi8KZXhwb3J0IGludGVyZmFjZSBXb3JrZXJDb250ZXh0Q29uZmlnIGV4dGVuZHMgQ2hhbm5lbENvbnRleHRPcHRpb25zIHsKICAgIC8qKiBXb3JrZXIgbmFtZS9pZGVudGlmaWVyICovCiAgICB3b3JrZXJOYW1lPzogc3RyaW5nOwogICAgLyoqIEF1dG8tYWNjZXB0IGluY29taW5nIGNoYW5uZWxzICovCiAgICBhdXRvQWNjZXB0Q2hhbm5lbHM/OiBib29sZWFuOwogICAgLyoqIENoYW5uZWwgd2hpdGVsaXN0IChpZiBzZXQsIG9ubHkgdGhlc2UgY2hhbm5lbHMgYXJlIGFjY2VwdGVkKSAqLwogICAgYWxsb3dlZENoYW5uZWxzPzogc3RyaW5nW107CiAgICAvKiogTWF4aW11bSBjb25jdXJyZW50IGNoYW5uZWxzICovCiAgICBtYXhDaGFubmVscz86IG51bWJlcjsKfQoKLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PQovLyBXT1JLRVIgQ09OVEVYVAovLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09CgovKioKICogV29ya2VyQ29udGV4dCAtIE1hbmFnZXMgY2hhbm5lbHMgd2l0aGluIGEgV29ya2VyCiAqCiAqIFN1cHBvcnRzIG9ic2VydmluZyBuZXcgaW5jb21pbmcgY29ubmVjdGlvbnMgZnJvbSBob3N0L3JlbW90ZSBjb250ZXh0cy4KICovCmV4cG9ydCBjbGFzcyBXb3JrZXJDb250ZXh0IHsKICAgIHByaXZhdGUgX2NvbnRleHQ6IENoYW5uZWxDb250ZXh0OwogICAgcHJpdmF0ZSBfY29uZmlnOiBSZXF1aXJlZDxXb3JrZXJDb250ZXh0Q29uZmlnPjsKICAgIHByaXZhdGUgX3N1YnNjcmlwdGlvbnM6IFN1YnNjcmlwdGlvbltdID0gW107CgogICAgLy8gT2JzZXJ2YWJsZSBzdHJlYW1zIGZvciBpbmNvbWluZyBjb25uZWN0aW9ucwogICAgcHJpdmF0ZSBfaW5jb21pbmdDb25uZWN0aW9ucyA9IG5ldyBDaGFubmVsU3ViamVjdDxJbmNvbWluZ0Nvbm5lY3Rpb24+KHsgYnVmZmVyU2l6ZTogMTAwIH0pOwogICAgcHJpdmF0ZSBfY2hhbm5lbENyZWF0ZWQgPSBuZXcgQ2hhbm5lbFN1YmplY3Q8Q2hhbm5lbENyZWF0ZWRFdmVudD4oeyBidWZmZXJTaXplOiAxMDAgfSk7CiAgICBwcml2YXRlIF9jaGFubmVsQ2xvc2VkID0gbmV3IENoYW5uZWxTdWJqZWN0PHsgY2hhbm5lbDogc3RyaW5nOyB0aW1lc3RhbXA6IG51bWJlciB9PigpOwoKICAgIGNvbnN0cnVjdG9yKGNvbmZpZzogV29ya2VyQ29udGV4dENvbmZpZyA9IHt9KSB7CiAgICAgICAgdGhpcy5fY29uZmlnID0gewogICAgICAgICAgICBuYW1lOiBjb25maWcubmFtZSA/PyAid29ya2VyIiwKICAgICAgICAgICAgd29ya2VyTmFtZTogY29uZmlnLndvcmtlck5hbWUgPz8gYHdvcmtlci0ke1VVSUR2NCgpLnNsaWNlKDAsIDgpfWAsCiAgICAgICAgICAgIGF1dG9BY2NlcHRDaGFubmVsczogY29uZmlnLmF1dG9BY2NlcHRDaGFubmVscyA/PyB0cnVlLAogICAgICAgICAgICBhbGxvd2VkQ2hhbm5lbHM6IGNvbmZpZy5hbGxvd2VkQ2hhbm5lbHMgPz8gW10sCiAgICAgICAgICAgIG1heENoYW5uZWxzOiBjb25maWcubWF4Q2hhbm5lbHMgPz8gMTAwLAogICAgICAgICAgICBhdXRvQ29ubmVjdDogY29uZmlnLmF1dG9Db25uZWN0ID8/IHRydWUsCiAgICAgICAgICAgIHVzZUdsb2JhbFNlbGY6IHRydWUsCiAgICAgICAgICAgIGRlZmF1bHRPcHRpb25zOiBjb25maWcuZGVmYXVsdE9wdGlvbnMgPz8ge30sCiAgICAgICAgICAgIGlzb2xhdGVkU3RvcmFnZTogY29uZmlnLmlzb2xhdGVkU3RvcmFnZSA/PyBmYWxzZSwKICAgICAgICAgICAgLi4uY29uZmlnCiAgICAgICAgfTsKCiAgICAgICAgdGhpcy5fY29udGV4dCA9IGNyZWF0ZUNoYW5uZWxDb250ZXh0KHsKICAgICAgICAgICAgbmFtZTogdGhpcy5fY29uZmlnLm5hbWUsCiAgICAgICAgICAgIHVzZUdsb2JhbFNlbGY6IHRydWUsCiAgICAgICAgICAgIGRlZmF1bHRPcHRpb25zOiBjb25maWcuZGVmYXVsdE9wdGlvbnMKICAgICAgICB9KTsKCiAgICAgICAgdGhpcy5fc2V0dXBNZXNzYWdlTGlzdGVuZXIoKTsKICAgIH0KCiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0KICAgIC8vIElOQ09NSU5HIENPTk5FQ1RJT04gT0JTRVJWQUJMRVMKICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PQoKICAgIC8qKgogICAgICogT2JzZXJ2YWJsZTogTmV3IGluY29taW5nIGNvbm5lY3Rpb24gcmVxdWVzdHMKICAgICAqLwogICAgZ2V0IG9uQ29ubmVjdGlvbigpIHsKICAgICAgICByZXR1cm4gdGhpcy5faW5jb21pbmdDb25uZWN0aW9uczsKICAgIH0KCiAgICAvKioKICAgICAqIE9ic2VydmFibGU6IENoYW5uZWwgY3JlYXRlZCBldmVudHMKICAgICAqLwogICAgZ2V0IG9uQ2hhbm5lbENyZWF0ZWQoKSB7CiAgICAgICAgcmV0dXJuIHRoaXMuX2NoYW5uZWxDcmVhdGVkOwogICAgfQoKICAgIC8qKgogICAgICogT2JzZXJ2YWJsZTogQ2hhbm5lbCBjbG9zZWQgZXZlbnRzCiAgICAgKi8KICAgIGdldCBvbkNoYW5uZWxDbG9zZWQoKSB7CiAgICAgICAgcmV0dXJuIHRoaXMuX2NoYW5uZWxDbG9zZWQ7CiAgICB9CgogICAgLyoqCiAgICAgKiBTdWJzY3JpYmUgdG8gaW5jb21pbmcgY29ubmVjdGlvbnMKICAgICAqLwogICAgc3Vic2NyaWJlQ29ubmVjdGlvbnMoCiAgICAgICAgaGFuZGxlcjogKGNvbm46IEluY29taW5nQ29ubmVjdGlvbikgPT4gdm9pZAogICAgKTogU3Vic2NyaXB0aW9uIHsKICAgICAgICByZXR1cm4gdGhpcy5faW5jb21pbmdDb25uZWN0aW9ucy5zdWJzY3JpYmUoaGFuZGxlcik7CiAgICB9CgogICAgLyoqCiAgICAgKiBTdWJzY3JpYmUgdG8gY2hhbm5lbCBjcmVhdGlvbgogICAgICovCiAgICBzdWJzY3JpYmVDaGFubmVsQ3JlYXRlZCgKICAgICAgICBoYW5kbGVyOiAoZXZlbnQ6IENoYW5uZWxDcmVhdGVkRXZlbnQpID0+IHZvaWQKICAgICk6IFN1YnNjcmlwdGlvbiB7CiAgICAgICAgcmV0dXJuIHRoaXMuX2NoYW5uZWxDcmVhdGVkLnN1YnNjcmliZShoYW5kbGVyKTsKICAgIH0KCiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0KICAgIC8vIENIQU5ORUwgTUFOQUdFTUVOVAogICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09CgogICAgLyoqCiAgICAgKiBBY2NlcHQgYW4gaW5jb21pbmcgY29ubmVjdGlvbiBhbmQgY3JlYXRlIHRoZSBjaGFubmVsCiAgICAgKi8KICAgIGFjY2VwdENvbm5lY3Rpb24oY29ubmVjdGlvbjogSW5jb21pbmdDb25uZWN0aW9uKTogQ2hhbm5lbEVuZHBvaW50IHwgbnVsbCB7CiAgICAgICAgaWYgKCF0aGlzLl9jYW5BY2NlcHRDaGFubmVsKGNvbm5lY3Rpb24uY2hhbm5lbCkpIHsKICAgICAgICAgICAgcmV0dXJuIG51bGw7CiAgICAgICAgfQoKICAgICAgICBjb25zdCBlbmRwb2ludCA9IHRoaXMuX2NvbnRleHQuY3JlYXRlQ2hhbm5lbChjb25uZWN0aW9uLmNoYW5uZWwsIGNvbm5lY3Rpb24ub3B0aW9ucyk7CgogICAgICAgIC8vIFNldHVwIHJlbW90ZSBjb25uZWN0aW9uCiAgICAgICAgaWYgKGNvbm5lY3Rpb24ucG9ydCkgewogICAgICAgICAgICBjb25uZWN0aW9uLnBvcnQuc3RhcnQ/LigpOwogICAgICAgICAgICBlbmRwb2ludC5oYW5kbGVyLmNyZWF0ZVJlbW90ZUNoYW5uZWwoCiAgICAgICAgICAgICAgICBjb25uZWN0aW9uLnNlbmRlciwKICAgICAgICAgICAgICAgIGNvbm5lY3Rpb24ub3B0aW9ucywKICAgICAgICAgICAgICAgIGNvbm5lY3Rpb24ucG9ydAogICAgICAgICAgICApOwogICAgICAgIH0KCiAgICAgICAgdGhpcy5fY2hhbm5lbENyZWF0ZWQubmV4dCh7CiAgICAgICAgICAgIGNoYW5uZWw6IGNvbm5lY3Rpb24uY2hhbm5lbCwKICAgICAgICAgICAgZW5kcG9pbnQsCiAgICAgICAgICAgIHNlbmRlcjogY29ubmVjdGlvbi5zZW5kZXIsCiAgICAgICAgICAgIHRpbWVzdGFtcDogRGF0ZS5ub3coKQogICAgICAgIH0pOwoKICAgICAgICAvLyBOb3RpZnkgc2VuZGVyCiAgICAgICAgdGhpcy5fcG9zdENoYW5uZWxDcmVhdGVkKGNvbm5lY3Rpb24uY2hhbm5lbCwgY29ubmVjdGlvbi5zZW5kZXIsIGNvbm5lY3Rpb24uaWQpOwoKICAgICAgICByZXR1cm4gZW5kcG9pbnQ7CiAgICB9CgogICAgLyoqCiAgICAgKiBDcmVhdGUgYSBuZXcgY2hhbm5lbCBpbiB0aGlzIHdvcmtlciBjb250ZXh0CiAgICAgKi8KICAgIGNyZWF0ZUNoYW5uZWwobmFtZTogc3RyaW5nLCBvcHRpb25zPzogYW55KTogQ2hhbm5lbEVuZHBvaW50IHsKICAgICAgICByZXR1cm4gdGhpcy5fY29udGV4dC5jcmVhdGVDaGFubmVsKG5hbWUsIG9wdGlvbnMpOwogICAgfQoKICAgIC8qKgogICAgICogR2V0IGFuIGV4aXN0aW5nIGNoYW5uZWwKICAgICAqLwogICAgZ2V0Q2hhbm5lbChuYW1lOiBzdHJpbmcpOiBDaGFubmVsRW5kcG9pbnQgfCB1bmRlZmluZWQgewogICAgICAgIHJldHVybiB0aGlzLl9jb250ZXh0LmdldENoYW5uZWwobmFtZSk7CiAgICB9CgogICAgLyoqCiAgICAgKiBDaGVjayBpZiBjaGFubmVsIGV4aXN0cwogICAgICovCiAgICBoYXNDaGFubmVsKG5hbWU6IHN0cmluZyk6IGJvb2xlYW4gewogICAgICAgIHJldHVybiB0aGlzLl9jb250ZXh0Lmhhc0NoYW5uZWwobmFtZSk7CiAgICB9CgogICAgLyoqCiAgICAgKiBHZXQgYWxsIGNoYW5uZWwgbmFtZXMKICAgICAqLwogICAgZ2V0Q2hhbm5lbE5hbWVzKCk6IHN0cmluZ1tdIHsKICAgICAgICByZXR1cm4gdGhpcy5fY29udGV4dC5nZXRDaGFubmVsTmFtZXMoKTsKICAgIH0KCiAgICAvKioKICAgICAqIFF1ZXJ5IGN1cnJlbnRseSB0cmFja2VkIGNoYW5uZWwgY29ubmVjdGlvbnMgaW4gdGhpcyB3b3JrZXIuCiAgICAgKi8KICAgIHF1ZXJ5Q29ubmVjdGlvbnMocXVlcnk6IFF1ZXJ5Q29ubmVjdGlvbnNPcHRpb25zID0ge30pOiBDb250ZXh0Q29ubmVjdGlvbkluZm9bXSB7CiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbnRleHQucXVlcnlDb25uZWN0aW9ucyhxdWVyeSk7CiAgICB9CgogICAgLyoqCiAgICAgKiBOb3RpZnkgYWN0aXZlIGNvbm5lY3Rpb25zICh1c2VmdWwgZm9yIHdvcmtlcjwtPmhvc3Qgc3luYykuCiAgICAgKi8KICAgIG5vdGlmeUNvbm5lY3Rpb25zKHBheWxvYWQ6IGFueSA9IHt9LCBxdWVyeTogUXVlcnlDb25uZWN0aW9uc09wdGlvbnMgPSB7fSk6IG51bWJlciB7CiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbnRleHQubm90aWZ5Q29ubmVjdGlvbnMocGF5bG9hZCwgcXVlcnkpOwogICAgfQoKICAgIC8qKgogICAgICogQ2xvc2UgYSBzcGVjaWZpYyBjaGFubmVsCiAgICAgKi8KICAgIGNsb3NlQ2hhbm5lbChuYW1lOiBzdHJpbmcpOiBib29sZWFuIHsKICAgICAgICBjb25zdCBjbG9zZWQgPSB0aGlzLl9jb250ZXh0LmNsb3NlQ2hhbm5lbChuYW1lKTsKICAgICAgICBpZiAoY2xvc2VkKSB7CiAgICAgICAgICAgIHRoaXMuX2NoYW5uZWxDbG9zZWQubmV4dCh7IGNoYW5uZWw6IG5hbWUsIHRpbWVzdGFtcDogRGF0ZS5ub3coKSB9KTsKICAgICAgICB9CiAgICAgICAgcmV0dXJuIGNsb3NlZDsKICAgIH0KCiAgICAvKioKICAgICAqIEdldCB0aGUgdW5kZXJseWluZyBjb250ZXh0CiAgICAgKi8KICAgIGdldCBjb250ZXh0KCk6IENoYW5uZWxDb250ZXh0IHsKICAgICAgICByZXR1cm4gdGhpcy5fY29udGV4dDsKICAgIH0KCiAgICAvKioKICAgICAqIEdldCB3b3JrZXIgY29uZmlndXJhdGlvbgogICAgICovCiAgICBnZXQgY29uZmlnKCk6IFJlYWRvbmx5PFJlcXVpcmVkPFdvcmtlckNvbnRleHRDb25maWc+PiB7CiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbmZpZzsKICAgIH0KCiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0KICAgIC8vIFBSSVZBVEUgTUVUSE9EUwogICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09CgogICAgcHJpdmF0ZSBfc2V0dXBNZXNzYWdlTGlzdGVuZXIoKTogdm9pZCB7CiAgICAgICAgYWRkRXZlbnRMaXN0ZW5lcigibWVzc2FnZSIsICgoZXZlbnQ6IE1lc3NhZ2VFdmVudCkgPT4gewogICAgICAgICAgICB0aGlzLl9oYW5kbGVJbmNvbWluZ01lc3NhZ2UoZXZlbnQpOwogICAgICAgIH0pIGFzIEV2ZW50TGlzdGVuZXIpOwogICAgfQoKICAgIHByaXZhdGUgX2hhbmRsZUluY29taW5nTWVzc2FnZShldmVudDogTWVzc2FnZUV2ZW50KTogdm9pZCB7CiAgICAgICAgY29uc3QgZGF0YSA9IGV2ZW50LmRhdGE7CiAgICAgICAgaWYgKCFkYXRhIHx8IHR5cGVvZiBkYXRhICE9PSAib2JqZWN0IikgcmV0dXJuOwoKICAgICAgICBzd2l0Y2ggKGRhdGEudHlwZSkgewogICAgICAgICAgICBjYXNlICJjcmVhdGVDaGFubmVsIjoKICAgICAgICAgICAgICAgIHRoaXMuX2hhbmRsZUNyZWF0ZUNoYW5uZWwoZGF0YSk7CiAgICAgICAgICAgICAgICBicmVhazsKCiAgICAgICAgICAgIGNhc2UgImNvbm5lY3RDaGFubmVsIjoKICAgICAgICAgICAgICAgIHRoaXMuX2hhbmRsZUNvbm5lY3RDaGFubmVsKGRhdGEpOwogICAgICAgICAgICAgICAgYnJlYWs7CgogICAgICAgICAgICBjYXNlICJhZGRQb3J0IjoKICAgICAgICAgICAgICAgIHRoaXMuX2hhbmRsZUFkZFBvcnQoZGF0YSk7CiAgICAgICAgICAgICAgICBicmVhazsKCiAgICAgICAgICAgIGNhc2UgImxpc3RDaGFubmVscyI6CiAgICAgICAgICAgICAgICB0aGlzLl9oYW5kbGVMaXN0Q2hhbm5lbHMoZGF0YSk7CiAgICAgICAgICAgICAgICBicmVhazsKCiAgICAgICAgICAgIGNhc2UgImNsb3NlQ2hhbm5lbCI6CiAgICAgICAgICAgICAgICB0aGlzLl9oYW5kbGVDbG9zZUNoYW5uZWwoZGF0YSk7CiAgICAgICAgICAgICAgICBicmVhazsKCiAgICAgICAgICAgIGNhc2UgInBpbmciOgogICAgICAgICAgICAgICAgcG9zdE1lc3NhZ2UoeyB0eXBlOiAicG9uZyIsIGlkOiBkYXRhLmlkLCB0aW1lc3RhbXA6IERhdGUubm93KCkgfSk7CiAgICAgICAgICAgICAgICBicmVhazsKCiAgICAgICAgICAgIGRlZmF1bHQ6CiAgICAgICAgICAgICAgICAvLyBQYXNzIHRvIGV4aXN0aW5nIGhhbmRsZXIgb3IgbG9nCiAgICAgICAgICAgICAgICBpZiAoZGF0YS5jaGFubmVsICYmIHRoaXMuX2NvbnRleHQuaGFzQ2hhbm5lbChkYXRhLmNoYW5uZWwpKSB7CiAgICAgICAgICAgICAgICAgICAgLy8gUm91dGUgdG8gc3BlY2lmaWMgY2hhbm5lbAogICAgICAgICAgICAgICAgICAgIGNvbnN0IGVuZHBvaW50ID0gdGhpcy5fY29udGV4dC5nZXRDaGFubmVsKGRhdGEuY2hhbm5lbCk7CiAgICAgICAgICAgICAgICAgICAgKGVuZHBvaW50Py5oYW5kbGVyIGFzIGFueSk/LmhhbmRsZUFuZFJlc3BvbnNlPy4oZGF0YS5wYXlsb2FkLCBkYXRhLnJlcUlkKTsKICAgICAgICAgICAgICAgIH0KICAgICAgICB9CiAgICB9CgogICAgcHJpdmF0ZSBfaGFuZGxlQ3JlYXRlQ2hhbm5lbChkYXRhOiBhbnkpOiB2b2lkIHsKICAgICAgICBjb25zdCBjb25uZWN0aW9uOiBJbmNvbWluZ0Nvbm5lY3Rpb24gPSB7CiAgICAgICAgICAgIGlkOiBkYXRhLnJlcUlkID8/IFVVSUR2NCgpLAogICAgICAgICAgICBjaGFubmVsOiBkYXRhLmNoYW5uZWwsCiAgICAgICAgICAgIHNlbmRlcjogZGF0YS5zZW5kZXIgPz8gInVua25vd24iLAogICAgICAgICAgICB0eXBlOiAiY2hhbm5lbCIsCiAgICAgICAgICAgIHBvcnQ6IGRhdGEubWVzc2FnZVBvcnQsCiAgICAgICAgICAgIHRpbWVzdGFtcDogRGF0ZS5ub3coKSwKICAgICAgICAgICAgb3B0aW9uczogZGF0YS5vcHRpb25zCiAgICAgICAgfTsKCiAgICAgICAgLy8gRW1pdCB0byBvYnNlcnZlcnMKICAgICAgICB0aGlzLl9pbmNvbWluZ0Nvbm5lY3Rpb25zLm5leHQoY29ubmVjdGlvbik7CgogICAgICAgIC8vIEF1dG8tYWNjZXB0IGlmIGNvbmZpZ3VyZWQKICAgICAgICBpZiAodGhpcy5fY29uZmlnLmF1dG9BY2NlcHRDaGFubmVscykgewogICAgICAgICAgICB0aGlzLmFjY2VwdENvbm5lY3Rpb24oY29ubmVjdGlvbik7CiAgICAgICAgfQogICAgfQoKICAgIHByaXZhdGUgX2hhbmRsZUNvbm5lY3RDaGFubmVsKGRhdGE6IGFueSk6IHZvaWQgewogICAgICAgIGNvbnN0IGNvbm5lY3Rpb246IEluY29taW5nQ29ubmVjdGlvbiA9IHsKICAgICAgICAgICAgaWQ6IGRhdGEucmVxSWQgPz8gVVVJRHY0KCksCiAgICAgICAgICAgIGNoYW5uZWw6IGRhdGEuY2hhbm5lbCwKICAgICAgICAgICAgc2VuZGVyOiBkYXRhLnNlbmRlciA/PyAidW5rbm93biIsCiAgICAgICAgICAgIHR5cGU6IGRhdGEucG9ydFR5cGUgPz8gImNoYW5uZWwiLAogICAgICAgICAgICBwb3J0OiBkYXRhLnBvcnQsCiAgICAgICAgICAgIHRpbWVzdGFtcDogRGF0ZS5ub3coKSwKICAgICAgICAgICAgb3B0aW9uczogZGF0YS5vcHRpb25zCiAgICAgICAgfTsKCiAgICAgICAgdGhpcy5faW5jb21pbmdDb25uZWN0aW9ucy5uZXh0KGNvbm5lY3Rpb24pOwoKICAgICAgICBpZiAodGhpcy5fY29uZmlnLmF1dG9BY2NlcHRDaGFubmVscyAmJiB0aGlzLl9jYW5BY2NlcHRDaGFubmVsKGRhdGEuY2hhbm5lbCkpIHsKICAgICAgICAgICAgLy8gQ29ubmVjdCB0byBleGlzdGluZyBjaGFubmVsIG9yIGNyZWF0ZSBuZXcKICAgICAgICAgICAgY29uc3QgZW5kcG9pbnQgPSB0aGlzLl9jb250ZXh0LmdldE9yQ3JlYXRlQ2hhbm5lbChkYXRhLmNoYW5uZWwsIGRhdGEub3B0aW9ucyk7CgogICAgICAgICAgICBpZiAoZGF0YS5wb3J0KSB7CiAgICAgICAgICAgICAgICBkYXRhLnBvcnQuc3RhcnQ/LigpOwogICAgICAgICAgICAgICAgZW5kcG9pbnQuaGFuZGxlci5jcmVhdGVSZW1vdGVDaGFubmVsKGRhdGEuc2VuZGVyLCBkYXRhLm9wdGlvbnMsIGRhdGEucG9ydCk7CiAgICAgICAgICAgIH0KCiAgICAgICAgICAgIHBvc3RNZXNzYWdlKHsKICAgICAgICAgICAgICAgIHR5cGU6ICJjaGFubmVsQ29ubmVjdGVkIiwKICAgICAgICAgICAgICAgIGNoYW5uZWw6IGRhdGEuY2hhbm5lbCwKICAgICAgICAgICAgICAgIHJlcUlkOiBkYXRhLnJlcUlkCiAgICAgICAgICAgIH0pOwogICAgICAgIH0KICAgIH0KCiAgICBwcml2YXRlIF9oYW5kbGVBZGRQb3J0KGRhdGE6IGFueSk6IHZvaWQgewogICAgICAgIGlmICghZGF0YS5wb3J0IHx8ICFkYXRhLmNoYW5uZWwpIHJldHVybjsKCiAgICAgICAgY29uc3QgY29ubmVjdGlvbjogSW5jb21pbmdDb25uZWN0aW9uID0gewogICAgICAgICAgICBpZDogZGF0YS5yZXFJZCA/PyBVVUlEdjQoKSwKICAgICAgICAgICAgY2hhbm5lbDogZGF0YS5jaGFubmVsLAogICAgICAgICAgICBzZW5kZXI6IGRhdGEuc2VuZGVyID8/ICJ1bmtub3duIiwKICAgICAgICAgICAgdHlwZTogInBvcnQiLAogICAgICAgICAgICBwb3J0OiBkYXRhLnBvcnQsCiAgICAgICAgICAgIHRpbWVzdGFtcDogRGF0ZS5ub3coKSwKICAgICAgICAgICAgb3B0aW9uczogZGF0YS5vcHRpb25zCiAgICAgICAgfTsKCiAgICAgICAgdGhpcy5faW5jb21pbmdDb25uZWN0aW9ucy5uZXh0KGNvbm5lY3Rpb24pOwoKICAgICAgICBpZiAodGhpcy5fY29uZmlnLmF1dG9BY2NlcHRDaGFubmVscykgewogICAgICAgICAgICB0aGlzLmFjY2VwdENvbm5lY3Rpb24oY29ubmVjdGlvbik7CiAgICAgICAgfQogICAgfQoKICAgIHByaXZhdGUgX2hhbmRsZUxpc3RDaGFubmVscyhkYXRhOiBhbnkpOiB2b2lkIHsKICAgICAgICBwb3N0TWVzc2FnZSh7CiAgICAgICAgICAgIHR5cGU6ICJjaGFubmVsTGlzdCIsCiAgICAgICAgICAgIGNoYW5uZWxzOiB0aGlzLmdldENoYW5uZWxOYW1lcygpLAogICAgICAgICAgICByZXFJZDogZGF0YS5yZXFJZAogICAgICAgIH0pOwogICAgfQoKICAgIHByaXZhdGUgX2hhbmRsZUNsb3NlQ2hhbm5lbChkYXRhOiBhbnkpOiB2b2lkIHsKICAgICAgICBpZiAoZGF0YS5jaGFubmVsKSB7CiAgICAgICAgICAgIHRoaXMuY2xvc2VDaGFubmVsKGRhdGEuY2hhbm5lbCk7CiAgICAgICAgICAgIHBvc3RNZXNzYWdlKHsKICAgICAgICAgICAgICAgIHR5cGU6ICJjaGFubmVsQ2xvc2VkIiwKICAgICAgICAgICAgICAgIGNoYW5uZWw6IGRhdGEuY2hhbm5lbCwKICAgICAgICAgICAgICAgIHJlcUlkOiBkYXRhLnJlcUlkCiAgICAgICAgICAgIH0pOwogICAgICAgIH0KICAgIH0KCiAgICBwcml2YXRlIF9jYW5BY2NlcHRDaGFubmVsKGNoYW5uZWw6IHN0cmluZyk6IGJvb2xlYW4gewogICAgICAgIC8vIENoZWNrIG1heCBjaGFubmVscwogICAgICAgIGlmICh0aGlzLl9jb250ZXh0LnNpemUgPj0gdGhpcy5fY29uZmlnLm1heENoYW5uZWxzKSB7CiAgICAgICAgICAgIHJldHVybiBmYWxzZTsKICAgICAgICB9CgogICAgICAgIC8vIENoZWNrIHdoaXRlbGlzdAogICAgICAgIGlmICh0aGlzLl9jb25maWcuYWxsb3dlZENoYW5uZWxzLmxlbmd0aCA+IDApIHsKICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NvbmZpZy5hbGxvd2VkQ2hhbm5lbHMuaW5jbHVkZXMoY2hhbm5lbCk7CiAgICAgICAgfQoKICAgICAgICByZXR1cm4gdHJ1ZTsKICAgIH0KCiAgICBwcml2YXRlIF9wb3N0Q2hhbm5lbENyZWF0ZWQoY2hhbm5lbDogc3RyaW5nLCBzZW5kZXI6IHN0cmluZywgcmVxSWQ/OiBzdHJpbmcpOiB2b2lkIHsKICAgICAgICBwb3N0TWVzc2FnZSh7CiAgICAgICAgICAgIHR5cGU6ICJjaGFubmVsQ3JlYXRlZCIsCiAgICAgICAgICAgIGNoYW5uZWwsCiAgICAgICAgICAgIHNlbmRlciwKICAgICAgICAgICAgcmVxSWQsCiAgICAgICAgICAgIHRpbWVzdGFtcDogRGF0ZS5ub3coKQogICAgICAgIH0pOwogICAgfQoKICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PQogICAgLy8gTElGRUNZQ0xFCiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0KCiAgICBjbG9zZSgpOiB2b2lkIHsKICAgICAgICB0aGlzLl9zdWJzY3JpcHRpb25zLmZvckVhY2gocyA9PiBzLnVuc3Vic2NyaWJlKCkpOwogICAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMgPSBbXTsKICAgICAgICB0aGlzLl9pbmNvbWluZ0Nvbm5lY3Rpb25zLmNvbXBsZXRlKCk7CiAgICAgICAgdGhpcy5fY2hhbm5lbENyZWF0ZWQuY29tcGxldGUoKTsKICAgICAgICB0aGlzLl9jaGFubmVsQ2xvc2VkLmNvbXBsZXRlKCk7CiAgICAgICAgdGhpcy5fY29udGV4dC5jbG9zZSgpOwogICAgfQp9CgovLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ci8vIEdMT0JBTCBXT1JLRVIgQ09OVEVYVCAoU2luZ2xldG9uKQovLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09CgpsZXQgV09SS0VSX0NPTlRFWFQ6IFdvcmtlckNvbnRleHQgfCBudWxsID0gbnVsbDsKCi8qKgogKiBHZXQgb3IgY3JlYXRlIHRoZSB3b3JrZXIgY29udGV4dCBzaW5nbGV0b24KICovCmV4cG9ydCBmdW5jdGlvbiBnZXRXb3JrZXJDb250ZXh0KGNvbmZpZz86IFdvcmtlckNvbnRleHRDb25maWcpOiBXb3JrZXJDb250ZXh0IHsKICAgIGlmICghV09SS0VSX0NPTlRFWFQpIHsKICAgICAgICBXT1JLRVJfQ09OVEVYVCA9IG5ldyBXb3JrZXJDb250ZXh0KGNvbmZpZyk7CiAgICB9CiAgICByZXR1cm4gV09SS0VSX0NPTlRFWFQ7Cn0KCi8qKgogKiBJbml0aWFsaXplIHdvcmtlciBjb250ZXh0IHdpdGggY29uZmlnCiAqLwpleHBvcnQgZnVuY3Rpb24gaW5pdFdvcmtlckNvbnRleHQoY29uZmlnPzogV29ya2VyQ29udGV4dENvbmZpZyk6IFdvcmtlckNvbnRleHQgewogICAgV09SS0VSX0NPTlRFWFQ/LmNsb3NlKCk7CiAgICBXT1JLRVJfQ09OVEVYVCA9IG5ldyBXb3JrZXJDb250ZXh0KGNvbmZpZyk7CiAgICByZXR1cm4gV09SS0VSX0NPTlRFWFQ7Cn0KCi8qKgogKiBTdWJzY3JpYmUgdG8gaW5jb21pbmcgY29ubmVjdGlvbnMgaW4gdGhlIGdsb2JhbCB3b3JrZXIgY29udGV4dAogKi8KZXhwb3J0IGZ1bmN0aW9uIG9uV29ya2VyQ29ubmVjdGlvbigKICAgIGhhbmRsZXI6IChjb25uOiBJbmNvbWluZ0Nvbm5lY3Rpb24pID0+IHZvaWQKKTogU3Vic2NyaXB0aW9uIHsKICAgIHJldHVybiBnZXRXb3JrZXJDb250ZXh0KCkuc3Vic2NyaWJlQ29ubmVjdGlvbnMoaGFuZGxlcik7Cn0KCi8qKgogKiBTdWJzY3JpYmUgdG8gY2hhbm5lbCBjcmVhdGlvbiBpbiB0aGUgZ2xvYmFsIHdvcmtlciBjb250ZXh0CiAqLwpleHBvcnQgZnVuY3Rpb24gb25Xb3JrZXJDaGFubmVsQ3JlYXRlZCgKICAgIGhhbmRsZXI6IChldmVudDogQ2hhbm5lbENyZWF0ZWRFdmVudCkgPT4gdm9pZAopOiBTdWJzY3JpcHRpb24gewogICAgcmV0dXJuIGdldFdvcmtlckNvbnRleHQoKS5zdWJzY3JpYmVDaGFubmVsQ3JlYXRlZChoYW5kbGVyKTsKfQoKLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PQovLyBJTlZPS0VSIElOVEVHUkFUSU9OCi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0KCmltcG9ydCB7CiAgICBSZXNwb25kZXIsCiAgICBCaWRpcmVjdGlvbmFsSW52b2tlciwKICAgIGNyZWF0ZVJlc3BvbmRlciwKICAgIGNyZWF0ZUludm9rZXIsCiAgICBkZXRlY3RDb250ZXh0VHlwZSwKICAgIGRldGVjdFRyYW5zcG9ydFR5cGUsCiAgICB0eXBlIENvbnRleHRUeXBlLAogICAgdHlwZSBJbmNvbWluZ0ludm9jYXRpb24KfSBmcm9tICIuLi9wcm94eS9JbnZva2VyIjsKCmxldCBXT1JLRVJfUkVTUE9OREVSOiBSZXNwb25kZXIgfCBudWxsID0gbnVsbDsKbGV0IFdPUktFUl9JTlZPS0VSOiBCaWRpcmVjdGlvbmFsSW52b2tlciB8IG51bGwgPSBudWxsOwoKLyoqCiAqIEdldCB0aGUgd29ya2VyJ3MgUmVzcG9uZGVyIChmb3IgaGFuZGxpbmcgaW5jb21pbmcgaW52b2NhdGlvbnMpCiAqLwpleHBvcnQgZnVuY3Rpb24gZ2V0V29ya2VyUmVzcG9uZGVyKGNoYW5uZWw/OiBzdHJpbmcpOiBSZXNwb25kZXIgewogICAgaWYgKCFXT1JLRVJfUkVTUE9OREVSKSB7CiAgICAgICAgV09SS0VSX1JFU1BPTkRFUiA9IGNyZWF0ZVJlc3BvbmRlcihjaGFubmVsID8/ICJ3b3JrZXIiKTsKICAgICAgICBXT1JLRVJfUkVTUE9OREVSLmxpc3RlbihzZWxmKTsKICAgIH0KICAgIHJldHVybiBXT1JLRVJfUkVTUE9OREVSOwp9CgovKioKICogR2V0IHRoZSB3b3JrZXIncyBiaWRpcmVjdGlvbmFsIEludm9rZXIKICovCmV4cG9ydCBmdW5jdGlvbiBnZXRXb3JrZXJJbnZva2VyKGNoYW5uZWw/OiBzdHJpbmcpOiBCaWRpcmVjdGlvbmFsSW52b2tlciB7CiAgICBpZiAoIVdPUktFUl9JTlZPS0VSKSB7CiAgICAgICAgV09SS0VSX0lOVk9LRVIgPSBjcmVhdGVJbnZva2VyKGNoYW5uZWwgPz8gIndvcmtlciIpOwogICAgICAgIFdPUktFUl9JTlZPS0VSLmNvbm5lY3Qoc2VsZik7CiAgICB9CiAgICByZXR1cm4gV09SS0VSX0lOVk9LRVI7Cn0KCi8qKgogKiBFeHBvc2UgYW4gb2JqZWN0IGZvciByZW1vdGUgaW52b2NhdGlvbiBmcm9tIHRoZSB3b3JrZXIKICovCmV4cG9ydCBmdW5jdGlvbiBleHBvc2VGcm9tV29ya2VyKG5hbWU6IHN0cmluZywgb2JqOiBhbnkpOiB2b2lkIHsKICAgIGdldFdvcmtlclJlc3BvbmRlcigpLmV4cG9zZShuYW1lLCBvYmopOwp9CgovKioKICogU3Vic2NyaWJlIHRvIGluY29taW5nIGludm9jYXRpb25zIGluIHRoZSB3b3JrZXIKICovCmV4cG9ydCBmdW5jdGlvbiBvbldvcmtlckludm9jYXRpb24oCiAgICBoYW5kbGVyOiAoaW52OiBJbmNvbWluZ0ludm9jYXRpb24pID0+IHZvaWQKKTogU3Vic2NyaXB0aW9uIHsKICAgIHJldHVybiBnZXRXb3JrZXJSZXNwb25kZXIoKS5zdWJzY3JpYmVJbnZvY2F0aW9ucyhoYW5kbGVyKTsKfQoKLyoqCiAqIENyZWF0ZSBhIHByb3h5IHRvIGludm9rZSBtZXRob2RzIG9uIHRoZSBob3N0IGZyb20gdGhlIHdvcmtlcgogKi8KZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUhvc3RQcm94eTxUID0gYW55Pihob3N0Q2hhbm5lbDogc3RyaW5nID0gImhvc3QiLCBiYXNlUGF0aDogc3RyaW5nW10gPSBbXSk6IFQgewogICAgcmV0dXJuIGdldFdvcmtlckludm9rZXIoKS5jcmVhdGVQcm94eTxUPihob3N0Q2hhbm5lbCwgYmFzZVBhdGgpOwp9CgovKioKICogSW1wb3J0IGEgbW9kdWxlIGluIHRoZSBob3N0IGNvbnRleHQgZnJvbSB0aGUgd29ya2VyCiAqLwpleHBvcnQgZnVuY3Rpb24gaW1wb3J0SW5Ib3N0PFQgPSBhbnk+KHVybDogc3RyaW5nLCBob3N0Q2hhbm5lbDogc3RyaW5nID0gImhvc3QiKTogUHJvbWlzZTxUPiB7CiAgICByZXR1cm4gZ2V0V29ya2VySW52b2tlcigpLmltcG9ydE1vZHVsZTxUPihob3N0Q2hhbm5lbCwgdXJsKTsKfQoKLy8gUmUtZXhwb3J0IGRldGVjdGlvbiB1dGlsaXRpZXMKZXhwb3J0IHsgZGV0ZWN0Q29udGV4dFR5cGUsIGRldGVjdFRyYW5zcG9ydFR5cGUgfTsKZXhwb3J0IHR5cGUgeyBDb250ZXh0VHlwZSwgSW5jb21pbmdJbnZvY2F0aW9uIH07CgovLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ci8vIEFVVE8tSU5JVElBTElaRSAoQ29tcGF0aWJsZSB3aXRoIGxlZ2FjeSB1c2FnZSkKLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PQoKLy8gSW5pdGlhbGl6ZSB0aGUgd29ya2VyIGNvbnRleHQKY29uc3QgY3R4ID0gZ2V0V29ya2VyQ29udGV4dCh7IG5hbWU6ICJ3b3JrZXIiIH0pOwoKLy8gRXhwb3J0IGZvciBkaXJlY3QgYWNjZXNzCmV4cG9ydCB7IGN0eCBhcyB3b3JrZXJDb250ZXh0IH07Cg==", "" + import.meta.url), oc = class {
	_connection;
	_storage;
	constructor(e, t, n = {}) {
		this._channel = e, this._context = t, this._options = n, this._connection = Qs(e), this._storage = ic(e);
	}
	async request(e, t, n, r = {}) {
		let i = typeof e == "string" ? [e] : e, a = t, o = n;
		return Array.isArray(t) && lc(e) && (r = n, o = t, a = e, i = []), this._context.getHost()?.request(i, a, o, r, this._channel);
	}
	async doImportModule(e, t = {}) {
		return this.request([], Q.IMPORT, [e], t);
	}
	async deferMessage(e, t = {}) {
		return this._storage.defer({
			channel: this._channel,
			sender: this._context.hostName,
			type: "request",
			payload: e
		}, t);
	}
	async getPendingMessages() {
		return this._storage.getDeferredMessages(this._channel, { status: "pending" });
	}
	get connection() {
		return this._connection;
	}
	get channelName() {
		return this._channel;
	}
	get context() {
		return this._context;
	}
}, sc = class {
	_connection;
	_unified;
	get _forResolves() {
		return this._unified.__getPrivate("_pending");
	}
	get _subscriptions() {
		return this._unified.__getPrivate("_subscriptions");
	}
	get _broadcasts() {
		return this._unified.__getPrivate("_transports");
	}
	constructor(e, t, n = {}) {
		this._channel = e, this._context = t, this._options = n, this._connection = Zs().getOrCreate(e, "internal", n), this._unified = new Ds({
			name: e,
			autoListen: !1,
			timeout: n?.timeout
		});
	}
	createRemoteChannel(e, t = {}, n) {
		let r = uc(n ?? this._context.$createOrUseExistingRemote(e, t, n ?? null)?.messageChannel?.port1), i = fc(r?.target ?? r);
		return this._unified.listen(r?.target, { targetChannel: e }), r && (this._broadcasts?.set?.(e, r), i === "self" && typeof postMessage > "u" || this._unified.connect(r, { targetChannel: e }), this._context.$registerConnection({
			localChannel: this._channel,
			remoteChannel: e,
			sender: this._channel,
			direction: "outgoing",
			transportType: i
		}), this.notifyChannel(e, {
			contextId: this._context.id,
			contextName: this._context.hostName
		}, "connect")), new oc(e, this._context, t);
	}
	getChannel() {
		return this._channel;
	}
	get connection() {
		return this._connection;
	}
	request(e, t, n, r = {}, i = "worker") {
		let a = typeof e == "string" ? [e] : e, o = n;
		return Array.isArray(t) && lc(e) && (i = r, r = n, o = t, t = e, a = []), this._unified.invoke(i, t, a ?? [], Array.isArray(o) ? o : [o]);
	}
	resolveResponse(e, t) {
		this._forResolves.get(e)?.resolve?.(t);
		let n = this._forResolves.get(e)?.promise;
		return this._forResolves.delete(e), n;
	}
	async handleAndResponse(e, t, n) {}
	notifyChannel(e, t = {}, n = "notify") {
		return this._unified.notify(e, {
			...t,
			from: this._channel,
			to: e
		}, n);
	}
	getConnectedChannels() {
		return this._unified.connectedChannels;
	}
	close() {
		this._subscriptions.forEach((e) => e.unsubscribe()), this._forResolves.clear(), this._broadcasts?.values?.()?.forEach((e) => e.close?.()), this._broadcasts?.clear?.(), this._unified.close();
	}
	get unified() {
		return this._unified;
	}
}, cc = class {
	_id = h();
	_hostName;
	_host = null;
	_endpoints = /* @__PURE__ */ new Map();
	_unifiedByChannel = /* @__PURE__ */ new Map();
	_unifiedConnectionSubs = /* @__PURE__ */ new Map();
	_remoteChannels = /* @__PURE__ */ new Map();
	_deferredChannels = /* @__PURE__ */ new Map();
	_connectionEvents = new fs({ bufferSize: 200 });
	_connectionRegistry = new Es(() => h(), (e) => this._emitConnectionEvent(e));
	_closed = !1;
	_globalSelf = null;
	constructor(e = {}) {
		this._options = e, this._hostName = e.name ?? `ctx-${this._id.slice(0, 8)}`, e.useGlobalSelf !== !1 && (this._globalSelf = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : null);
	}
	initHost(e) {
		if (this._host && !e) return this._host;
		let t = e ?? this._hostName;
		if (this._hostName = t, this._endpoints.has(t)) return this._host = this._endpoints.get(t).handler, this._host;
		this._host = new sc(t, this, this._options.defaultOptions);
		let n = {
			name: t,
			handler: this._host,
			connection: this._host.connection,
			subscriptions: [],
			ready: Promise.resolve(null),
			unified: this._host.unified
		};
		return this._endpoints.set(t, n), this._registerUnifiedChannel(t, this._host.unified), this._host;
	}
	getHost() {
		return this._host ?? this.initHost();
	}
	get hostName() {
		return this._hostName;
	}
	get id() {
		return this._id;
	}
	get onConnection() {
		return this._connectionEvents;
	}
	subscribeConnections(e) {
		return this._connectionEvents.subscribe(e);
	}
	notifyConnections(e = {}, t = {}) {
		let n = 0;
		for (let r of this._endpoints.values()) {
			let i = r.handler.getConnectedChannels();
			for (let a of i) {
				if (t.localChannel && t.localChannel !== r.name || t.remoteChannel && t.remoteChannel !== a) continue;
				let i = this.queryConnections({
					localChannel: r.name,
					remoteChannel: a,
					status: "active"
				})[0];
				t.sender && i?.sender !== t.sender || t.transportType && i?.transportType !== t.transportType || t.channel && t.channel !== r.name && t.channel !== a || r.handler.notifyChannel(a, e, "notify") && n++;
			}
		}
		return n;
	}
	queryConnections(e = {}) {
		return this._connectionRegistry.query(e).map((e) => ({
			...e,
			contextId: this._id
		}));
	}
	createChannel(e, t = {}) {
		if (this._endpoints.has(e)) return this._endpoints.get(e);
		let n = new sc(e, this, {
			...this._options.defaultOptions,
			...t
		}), r = {
			name: e,
			handler: n,
			connection: n.connection,
			subscriptions: [],
			ready: Promise.resolve(null),
			unified: n.unified
		};
		return this._endpoints.set(e, r), this._registerUnifiedChannel(e, n.unified), r;
	}
	createChannels(e, t = {}) {
		let n = /* @__PURE__ */ new Map();
		for (let r of e) n.set(r, this.createChannel(r, t));
		return n;
	}
	getChannel(e) {
		return this._endpoints.get(e);
	}
	getOrCreateChannel(e, t = {}) {
		return this._endpoints.get(e) ?? this.createChannel(e, t);
	}
	hasChannel(e) {
		return this._endpoints.has(e);
	}
	getChannelNames() {
		return [...this._endpoints.keys()];
	}
	get size() {
		return this._endpoints.size;
	}
	defer(e, t) {
		this._deferredChannels.set(e, t);
	}
	async initDeferred(e) {
		let t = this._deferredChannels.get(e);
		if (!t) return null;
		let n = await t();
		return this._endpoints.set(e, n), this._deferredChannels.delete(e), n;
	}
	isDeferred(e) {
		return this._deferredChannels.has(e);
	}
	async getChannelAsync(e) {
		return this._endpoints.has(e) ? this._endpoints.get(e) : this._deferredChannels.has(e) ? this.initDeferred(e) : null;
	}
	async addWorker(e, t, n = {}) {
		let r = pc(t);
		if (!r) throw Error(`Failed to create worker for channel: ${e}`);
		let i = new sc(e, this, {
			...this._options.defaultOptions,
			...n
		}), a = i.createRemoteChannel(e, n, r), o = {
			name: e,
			handler: i,
			connection: i.connection,
			subscriptions: [],
			transportType: "worker",
			ready: Promise.resolve(a),
			unified: i.unified
		};
		return this._endpoints.set(e, o), this._registerUnifiedChannel(e, i.unified), this._remoteChannels.set(e, {
			channel: e,
			context: this,
			remote: Promise.resolve(a),
			transport: r,
			transportType: "worker"
		}), o;
	}
	async addPort(e, t, n = {}) {
		let r = new sc(e, this, {
			...this._options.defaultOptions,
			...n
		});
		t.start?.();
		let i = r.createRemoteChannel(e, n, t), a = {
			name: e,
			handler: r,
			connection: r.connection,
			subscriptions: [],
			transportType: "message-port",
			ready: Promise.resolve(i),
			unified: r.unified
		};
		return this._endpoints.set(e, a), this._registerUnifiedChannel(e, r.unified), this._remoteChannels.set(e, {
			channel: e,
			context: this,
			remote: Promise.resolve(i),
			transport: t,
			transportType: "message-port"
		}), a;
	}
	async addBroadcast(e, t, n = {}) {
		let r = new BroadcastChannel(t ?? e), i = new sc(e, this, {
			...this._options.defaultOptions,
			...n
		}), a = i.createRemoteChannel(e, n, r), o = {
			name: e,
			handler: i,
			connection: i.connection,
			subscriptions: [],
			transportType: "broadcast",
			ready: Promise.resolve(a),
			unified: i.unified
		};
		return this._endpoints.set(e, o), this._registerUnifiedChannel(e, i.unified), this._remoteChannels.set(e, {
			channel: e,
			context: this,
			remote: Promise.resolve(a),
			transport: r,
			transportType: "broadcast"
		}), o;
	}
	addSelfChannel(e, t = {}) {
		let n = new sc(e, this, {
			...this._options.defaultOptions,
			...t
		}), r = this._globalSelf ?? (typeof self < "u" ? self : null), i = {
			name: e,
			handler: n,
			connection: n.connection,
			subscriptions: [],
			transportType: "self",
			ready: Promise.resolve(r ? n.createRemoteChannel(e, t, r) : null),
			unified: n.unified
		};
		return this._endpoints.set(e, i), this._registerUnifiedChannel(e, n.unified), i;
	}
	async addTransport(e, t) {
		let n = t.options ?? {};
		switch (t.type) {
			case "worker":
				if (!t.worker) throw Error("Worker required for worker transport");
				return this.addWorker(e, t.worker, n);
			case "message-port":
				if (!t.port) throw Error("Port required for message-port transport");
				return this.addPort(e, t.port, n);
			case "broadcast":
				let r = typeof t.broadcast == "string" ? t.broadcast : void 0;
				return this.addBroadcast(e, r, n);
			case "self": return this.addSelfChannel(e, n);
			default: return this.createChannel(e, n);
		}
	}
	createChannelPair(e, t, n = {}) {
		let r = new MessageChannel(), i = new sc(e, this, {
			...this._options.defaultOptions,
			...n
		}), a = new sc(t, this, {
			...this._options.defaultOptions,
			...n
		});
		r.port1.start(), r.port2.start();
		let o = Promise.resolve(i.createRemoteChannel(t, n, r.port1)), s = Promise.resolve(a.createRemoteChannel(e, n, r.port2)), c = {
			name: e,
			handler: i,
			connection: i.connection,
			subscriptions: [],
			transportType: "message-port",
			ready: o,
			unified: i.unified
		}, l = {
			name: t,
			handler: a,
			connection: a.connection,
			subscriptions: [],
			transportType: "message-port",
			ready: s,
			unified: a.unified
		};
		return this._endpoints.set(e, c), this._endpoints.set(t, l), this._registerUnifiedChannel(e, i.unified), this._registerUnifiedChannel(t, a.unified), {
			channel1: c,
			channel2: l,
			messageChannel: r
		};
	}
	get globalSelf() {
		return this._globalSelf;
	}
	async connectRemote(e, t = {}, n) {
		return this.initHost(), this._host.createRemoteChannel(e, t, n);
	}
	async importModuleInChannel(e, t, n = {}, r) {
		return (await this.connectRemote(e, n.channelOptions, r))?.doImportModule?.(t, n.importOptions);
	}
	$createOrUseExistingRemote(e, t = {}, n) {
		if (e == null || n) return null;
		if (this._remoteChannels.has(e)) return this._remoteChannels.get(e);
		let r = new MessageChannel(), i = xe(new Promise((n) => {
			let i = pc(ac);
			i?.addEventListener?.("message", (e) => {
				e.data.type === "channelCreated" && (r.port1?.start?.(), n(new oc(e.data.channel, this, t)));
			}), i?.postMessage?.({
				type: "createChannel",
				channel: e,
				sender: this._hostName,
				options: t,
				messagePort: r.port2
			}, { transfer: [r.port2] });
		})), a = {
			channel: e,
			context: this,
			messageChannel: r,
			remote: i
		};
		return this._remoteChannels.set(e, a), a;
	}
	$registerConnection(e) {
		return {
			...this._connectionRegistry.register(e),
			contextId: this._id
		};
	}
	$markNotified(e) {
		let t = this._connectionRegistry.register({
			localChannel: e.localChannel,
			remoteChannel: e.remoteChannel,
			sender: e.sender,
			direction: e.direction,
			transportType: e.transportType
		});
		this._connectionRegistry.markNotified(t, e.payload);
	}
	$observeSignal(e) {
		e.payload?.type, this.$markNotified({
			localChannel: e.localChannel,
			remoteChannel: e.remoteChannel,
			sender: e.sender,
			direction: "incoming",
			transportType: e.transportType,
			payload: e.payload
		});
	}
	$forwardUnifiedConnectionEvent(e, t) {
		let n = t.connection.transportType ?? "internal", r = this._connectionRegistry.register({
			localChannel: t.connection.localChannel || e,
			remoteChannel: t.connection.remoteChannel,
			sender: t.connection.sender,
			direction: t.connection.direction,
			transportType: n,
			metadata: t.connection.metadata
		});
		t.type === "notified" ? this._connectionRegistry.markNotified(r, t.payload) : t.type === "disconnected" && this._connectionRegistry.closeByChannel(t.connection.localChannel);
	}
	closeChannel(e) {
		let t = this._endpoints.get(e);
		return t ? (t.subscriptions.forEach((e) => e.unsubscribe()), t.handler.close(), t.transport?.detach(), this._unifiedConnectionSubs.get(e)?.unsubscribe(), this._unifiedConnectionSubs.delete(e), this._unifiedByChannel.delete(e), this._endpoints.delete(e), e === this._hostName && (this._host = null), this._connectionRegistry.closeByChannel(e), !0) : !1;
	}
	close() {
		if (!this._closed) {
			this._closed = !0;
			for (let [e] of this._endpoints) this.closeChannel(e);
			this._remoteChannels.clear(), this._host = null, this._unifiedConnectionSubs.forEach((e) => e.unsubscribe()), this._unifiedConnectionSubs.clear(), this._unifiedByChannel.clear(), this._connectionRegistry.clear(), this._connectionEvents.complete();
		}
	}
	get closed() {
		return this._closed;
	}
	_registerUnifiedChannel(e, t) {
		this._unifiedByChannel.set(e, t), this._unifiedConnectionSubs.get(e)?.unsubscribe();
		let n = t.subscribeConnections((t) => {
			this.$forwardUnifiedConnectionEvent(e, t);
		});
		this._unifiedConnectionSubs.set(e, n);
	}
	_emitConnectionEvent(e) {
		this._connectionEvents.next({
			...e,
			connection: {
				...e.connection,
				contextId: this._id
			}
		});
	}
};
function lc(e) {
	return [...Object.values(Q)].includes(e);
}
function uc(e) {
	if (!e) return null;
	if (dc(e)) return e;
	let t = e, n = fc(t);
	return {
		target: t,
		targetChannel: "unknown",
		transportType: n === "internal" ? "self" : n,
		sender: (e, n) => {
			if (typeof WebSocket < "u" && t instanceof WebSocket) {
				t.send(JSON.stringify(e));
				return;
			}
			t.postMessage?.(e, n?.length ? { transfer: n } : void 0);
		},
		postMessage: (e, n) => {
			t.postMessage?.(e, n);
		},
		addEventListener: t.addEventListener?.bind(t),
		removeEventListener: t.removeEventListener?.bind(t),
		start: t.start?.bind(t),
		close: t.close?.bind(t)
	};
}
function dc(e) {
	return !!e && typeof e == "object" && "target" in e && typeof e.postMessage == "function";
}
function fc(e) {
	let t = dc(e) ? e.target : e;
	return t ? t === "chrome-runtime" ? "chrome-runtime" : t === "chrome-tabs" ? "chrome-tabs" : t === "chrome-port" ? "chrome-port" : t === "chrome-external" ? "chrome-external" : typeof MessagePort < "u" && t instanceof MessagePort ? "message-port" : typeof BroadcastChannel < "u" && t instanceof BroadcastChannel ? "broadcast" : typeof Worker < "u" && t instanceof Worker ? "worker" : typeof WebSocket < "u" && t instanceof WebSocket ? "websocket" : typeof chrome < "u" && typeof t == "object" && t && typeof t.postMessage == "function" && t.onMessage?.addListener ? "chrome-port" : typeof self < "u" && t === self ? "self" : "internal" : "internal";
}
function pc(e) {
	if (e instanceof Worker) return e;
	if (e instanceof URL) return new Worker(e.href, { type: "module" });
	if (typeof e == "function") try {
		return new e({ type: "module" });
	} catch {
		return e({ type: "module" });
	}
	return typeof e == "string" ? e.startsWith("/") ? new Worker(new URL(e.replace(/^\//, "./"), import.meta.url).href, { type: "module" }) : URL.canParse(e) || e.startsWith("./") ? new Worker(new URL(e, import.meta.url).href, { type: "module" }) : new Worker(URL.createObjectURL(new Blob([e], { type: "application/javascript" })), { type: "module" }) : e instanceof Blob || e instanceof File ? new Worker(URL.createObjectURL(e), { type: "module" }) : e ?? (typeof self < "u" ? self : null);
}
var mc = /* @__PURE__ */ new Map();
function hc(e = {}) {
	let t = new cc(e);
	return e.name && mc.set(e.name, t), t;
}
//#endregion
//#region ../../projects/uniform.ts/src/newer/next/transport/Worker.ts
var gc = class {
	_context;
	_config;
	_subscriptions = [];
	_incomingConnections = new fs({ bufferSize: 100 });
	_channelCreated = new fs({ bufferSize: 100 });
	_channelClosed = new fs();
	constructor(e = {}) {
		this._config = {
			name: e.name ?? "worker",
			workerName: e.workerName ?? `worker-${h().slice(0, 8)}`,
			autoAcceptChannels: e.autoAcceptChannels ?? !0,
			allowedChannels: e.allowedChannels ?? [],
			maxChannels: e.maxChannels ?? 100,
			autoConnect: e.autoConnect ?? !0,
			useGlobalSelf: !0,
			defaultOptions: e.defaultOptions ?? {},
			isolatedStorage: e.isolatedStorage ?? !1,
			...e
		}, this._context = hc({
			name: this._config.name,
			useGlobalSelf: !0,
			defaultOptions: e.defaultOptions
		}), this._setupMessageListener();
	}
	get onConnection() {
		return this._incomingConnections;
	}
	get onChannelCreated() {
		return this._channelCreated;
	}
	get onChannelClosed() {
		return this._channelClosed;
	}
	subscribeConnections(e) {
		return this._incomingConnections.subscribe(e);
	}
	subscribeChannelCreated(e) {
		return this._channelCreated.subscribe(e);
	}
	acceptConnection(e) {
		if (!this._canAcceptChannel(e.channel)) return null;
		let t = this._context.createChannel(e.channel, e.options);
		return e.port && (e.port.start?.(), t.handler.createRemoteChannel(e.sender, e.options, e.port)), this._channelCreated.next({
			channel: e.channel,
			endpoint: t,
			sender: e.sender,
			timestamp: Date.now()
		}), this._postChannelCreated(e.channel, e.sender, e.id), t;
	}
	createChannel(e, t) {
		return this._context.createChannel(e, t);
	}
	getChannel(e) {
		return this._context.getChannel(e);
	}
	hasChannel(e) {
		return this._context.hasChannel(e);
	}
	getChannelNames() {
		return this._context.getChannelNames();
	}
	queryConnections(e = {}) {
		return this._context.queryConnections(e);
	}
	notifyConnections(e = {}, t = {}) {
		return this._context.notifyConnections(e, t);
	}
	closeChannel(e) {
		let t = this._context.closeChannel(e);
		return t && this._channelClosed.next({
			channel: e,
			timestamp: Date.now()
		}), t;
	}
	get context() {
		return this._context;
	}
	get config() {
		return this._config;
	}
	_setupMessageListener() {
		addEventListener("message", ((e) => {
			this._handleIncomingMessage(e);
		}));
	}
	_handleIncomingMessage(e) {
		let t = e.data;
		if (!(!t || typeof t != "object")) switch (t.type) {
			case "createChannel":
				this._handleCreateChannel(t);
				break;
			case "connectChannel":
				this._handleConnectChannel(t);
				break;
			case "addPort":
				this._handleAddPort(t);
				break;
			case "listChannels":
				this._handleListChannels(t);
				break;
			case "closeChannel":
				this._handleCloseChannel(t);
				break;
			case "ping":
				postMessage({
					type: "pong",
					id: t.id,
					timestamp: Date.now()
				});
				break;
			default: t.channel && this._context.hasChannel(t.channel) && (this._context.getChannel(t.channel)?.handler)?.handleAndResponse?.(t.payload, t.reqId);
		}
	}
	_handleCreateChannel(e) {
		let t = {
			id: e.reqId ?? h(),
			channel: e.channel,
			sender: e.sender ?? "unknown",
			type: "channel",
			port: e.messagePort,
			timestamp: Date.now(),
			options: e.options
		};
		this._incomingConnections.next(t), this._config.autoAcceptChannels && this.acceptConnection(t);
	}
	_handleConnectChannel(e) {
		let t = {
			id: e.reqId ?? h(),
			channel: e.channel,
			sender: e.sender ?? "unknown",
			type: e.portType ?? "channel",
			port: e.port,
			timestamp: Date.now(),
			options: e.options
		};
		if (this._incomingConnections.next(t), this._config.autoAcceptChannels && this._canAcceptChannel(e.channel)) {
			let t = this._context.getOrCreateChannel(e.channel, e.options);
			e.port && (e.port.start?.(), t.handler.createRemoteChannel(e.sender, e.options, e.port)), postMessage({
				type: "channelConnected",
				channel: e.channel,
				reqId: e.reqId
			});
		}
	}
	_handleAddPort(e) {
		if (!e.port || !e.channel) return;
		let t = {
			id: e.reqId ?? h(),
			channel: e.channel,
			sender: e.sender ?? "unknown",
			type: "port",
			port: e.port,
			timestamp: Date.now(),
			options: e.options
		};
		this._incomingConnections.next(t), this._config.autoAcceptChannels && this.acceptConnection(t);
	}
	_handleListChannels(e) {
		postMessage({
			type: "channelList",
			channels: this.getChannelNames(),
			reqId: e.reqId
		});
	}
	_handleCloseChannel(e) {
		e.channel && (this.closeChannel(e.channel), postMessage({
			type: "channelClosed",
			channel: e.channel,
			reqId: e.reqId
		}));
	}
	_canAcceptChannel(e) {
		return this._context.size >= this._config.maxChannels ? !1 : this._config.allowedChannels.length > 0 ? this._config.allowedChannels.includes(e) : !0;
	}
	_postChannelCreated(e, t, n) {
		postMessage({
			type: "channelCreated",
			channel: e,
			sender: t,
			reqId: n,
			timestamp: Date.now()
		});
	}
	close() {
		this._subscriptions.forEach((e) => e.unsubscribe()), this._subscriptions = [], this._incomingConnections.complete(), this._channelCreated.complete(), this._channelClosed.complete(), this._context.close();
	}
}, _c = null;
function vc(e) {
	return _c ||= new gc(e), _c;
}
vc({ name: "worker" });
//#endregion
//#region ../../projects/uniform.ts/src/newer/next/transport/PortTransport.ts
var yc = class {
	_port;
	_subs = /* @__PURE__ */ new Set();
	_pending = /* @__PURE__ */ new Map();
	_listening = !1;
	_cleanup = null;
	_portId = h();
	_state = new fs();
	_keepAliveTimer = null;
	constructor(e, t, n = {}) {
		this._channelName = t, this._config = n, this._port = e, this._setupPort(), n.autoStart !== !1 && this.start();
	}
	_setupPort() {
		let e = (e) => {
			let t = e.data;
			if (t.type === "response" && t.reqId) {
				let e = this._pending.get(t.reqId);
				if (e) {
					this._pending.delete(t.reqId), t.payload?.error ? e.reject(Error(t.payload.error)) : e.resolve(t.payload?.result ?? t.payload);
					return;
				}
			}
			if (t.type === "signal" && t.payload?.action === "ping") {
				this.send({
					id: h(),
					channel: this._channelName,
					sender: this._portId,
					type: "signal",
					payload: { action: "pong" }
				});
				return;
			}
			t.portId = t.portId ?? this._portId;
			for (let e of this._subs) try {
				e.next?.(t);
			} catch (t) {
				e.error?.(t);
			}
		}, t = () => {
			this._state.next("error");
			let e = /* @__PURE__ */ Error("Port error");
			for (let t of this._subs) t.error?.(e);
		};
		this._port.addEventListener("message", e), this._port.addEventListener("messageerror", t), this._cleanup = () => {
			this._port.removeEventListener("message", e), this._port.removeEventListener("messageerror", t);
		};
	}
	start() {
		this._listening || (this._port.start(), this._listening = !0, this._state.next("ready"), this._config.keepAlive && this._startKeepAlive());
	}
	send(e, t) {
		let { transferable: n, ...r } = e;
		this._port.postMessage({
			...r,
			portId: this._portId
		}, t ?? []);
	}
	request(e) {
		let t = e.reqId ?? h();
		return new Promise((n, r) => {
			let i = setTimeout(() => {
				this._pending.delete(t), r(/* @__PURE__ */ Error("Request timeout"));
			}, this._config.timeout ?? 3e4);
			this._pending.set(t, {
				resolve: (e) => {
					clearTimeout(i), n(e);
				},
				reject: (e) => {
					clearTimeout(i), r(e);
				},
				timestamp: Date.now()
			}), this.send({
				...e,
				reqId: t,
				type: "request"
			});
		});
	}
	subscribe(e) {
		let t = typeof e == "function" ? { next: e } : e;
		return this._subs.add(t), {
			closed: !1,
			unsubscribe: () => {
				this._subs.delete(t);
			}
		};
	}
	_startKeepAlive() {
		this._keepAliveTimer = setInterval(() => {
			this.send({
				id: h(),
				channel: this._channelName,
				sender: this._portId,
				type: "signal",
				payload: { action: "ping" }
			});
		}, this._config.keepAliveInterval ?? 3e4);
	}
	close() {
		this._keepAliveTimer &&= (clearInterval(this._keepAliveTimer), null), this._cleanup?.(), this._subs.forEach((e) => e.complete?.()), this._subs.clear(), this._port.close(), this._state.next("closed");
	}
	get port() {
		return this._port;
	}
	get portId() {
		return this._portId;
	}
	get isListening() {
		return this._listening;
	}
	get state() {
		return this._state;
	}
	get channelName() {
		return this._channelName;
	}
};
function bc(e, t) {
	let n = new MessageChannel();
	return {
		local: new yc(n.port1, e, t),
		remote: n.port2,
		transfer: () => n.port2
	};
}
(class {
	_transport = null;
	_state = new fs();
	_handshakeComplete = !1;
	constructor(e, t, n = {}) {
		this._target = e, this._channelName = t, this._config = n;
	}
	async connect() {
		if (this._transport && this._handshakeComplete) return this._transport;
		this._state.next("connecting");
		let { local: e, remote: t } = bc(this._channelName, this._config);
		return this._target.postMessage({
			type: "port-connect",
			channelName: this._channelName,
			portId: e.portId
		}, this._config.targetOrigin ?? "*", [t]), new Promise((t, n) => {
			let r = setTimeout(() => {
				n(/* @__PURE__ */ Error("Handshake timeout")), this._state.next("error");
			}, this._config.handshakeTimeout ?? 1e4), i = e.subscribe({ next: (n) => {
				n.type === "signal" && n.payload?.action === "handshake-ack" && (clearTimeout(r), this._handshakeComplete = !0, this._transport = e, this._state.next("connected"), i.unsubscribe(), t(e));
			} });
		});
	}
	static listen(e, t, n) {
		let r = (r) => {
			if (r.data?.type !== "port-connect" || r.data?.channelName !== e || !r.ports[0]) return;
			let i = new yc(r.ports[0], e, n);
			i.send({
				id: h(),
				channel: e,
				sender: i.portId,
				type: "signal",
				payload: { action: "handshake-ack" }
			}), t(i);
		};
		return globalThis.addEventListener("message", r), () => globalThis.removeEventListener("message", r);
	}
	disconnect() {
		this._transport?.close(), this._transport = null, this._handshakeComplete = !1, this._state.next("disconnected");
	}
	get isConnected() {
		return this._handshakeComplete;
	}
	get state() {
		return this._state;
	}
	get transport() {
		return this._transport;
	}
}).listen, typeof ServiceWorkerGlobalScope < "u" && self instanceof ServiceWorkerGlobalScope;
var xc = typeof Image < "u" ? new Image() : null;
if (xc) {
	xc.decoding = "async", xc.width = 24, xc.height = 24;
	try {
		xc.src = URL.createObjectURL(new Blob(["<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 384 512\"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d=\"M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 288c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zm384 64l-128 0L256 0 384 128z\"/></svg>"], { type: "image/svg+xml" }));
	} catch {}
}
//#endregion
//#region ../../projects/lur.e/src/utils/opfs/FsWatch.ts
var Sc = (e = "", t = "") => {
	let n = t.endsWith("/") ? t : `${t}/`;
	return e.startsWith(n);
}, Cc = new BroadcastChannel("rs-fs"), wc = /* @__PURE__ */ new Map();
Cc.addEventListener("close", () => wc.clear()), Cc.addEventListener("message", (e) => {
	let t = e?.data;
	if (!t || t.type !== "commit-result" && t.type !== "commit-to-clipboard") return;
	let n = t?.results ?? [];
	if (!(!Array.isArray(n) || !n.length)) {
		for (let [e, t] of wc.entries()) if (t.size && n.some((t) => Sc(t?.path, e))) for (let e of t) try {
			e();
		} catch (e) {
			console.warn(e);
		}
	}
});
//#endregion
//#region ../../projects/subsystem/types.ts
var Tc = (e) => {
	if (!e) return null;
	try {
		return JSON.parse(e);
	} catch {
		return null;
	}
};
function Ec(e, t = globalThis.localStorage) {
	return {
		load: () => Tc(t?.getItem?.(e) ?? null),
		save: (n) => {
			t?.setItem?.(e, JSON.stringify(n));
		},
		clear: () => {
			t?.removeItem?.(e);
		}
	};
}
function Dc(e) {
	if (typeof e != "function" || typeof HTMLElement > "u") return !1;
	let t = e.prototype;
	return !!(t && HTMLElement.prototype.isPrototypeOf(t));
}
function Oc(e) {
	return !!(e && typeof e == "object" && typeof e.render == "function");
}
function kc(e) {
	return typeof HTMLElement < "u" && e instanceof HTMLElement;
}
function Ac(e, t = {}) {
	let n = [
		e.createView,
		e.createHomeView,
		e.createMarkdownViewer,
		e.createViewerView,
		e.createExplorerView,
		e.createEditorView,
		e.createHistoryView,
		e.createSettingsView,
		e.createWorkCenterView,
		e.createAirpadView,
		e.default
	];
	for (let e of n) if (e) {
		if (Oc(e) || kc(e)) return e;
		if (Dc(e)) return new e();
		if (typeof e == "function") return e(t);
	}
	throw Error("View module must export default/createView or a named create*View factory");
}
function jc(e, t = {}) {
	return kc(e) ? e : e.render(t);
}
({
	ViewerPushToWorkcenter: "viewer.attach-to-workcenter",
	WorkcenterAttach: "attach-files",
	WorkcenterFileAttach: "file-attach",
	WorkcenterShare: "content-share"
}).ViewerPushToWorkcenter;
var Mc = {
	ContentLoad: "content-load",
	SetContent: "set-content",
	ContentEdit: "content-edit"
};
//#endregion
//#region ../../projects/subsystem/runtime/clipboard.ts
async function Nc(e) {
	try {
		return await globalThis.navigator?.clipboard?.writeText?.(e), {
			ok: !0,
			text: e
		};
	} catch (t) {
		return {
			ok: !1,
			text: e,
			error: t
		};
	}
}
//#endregion
//#region src/editor.scss?inline
var Pc = "@layer view.editor{:is(html,body):has([data-view=editor]){--view-layout:\"flex\";--view-content-max-width:none}.view-editor{background-color:var(--view-bg,var(--color-surface,#fff));block-size:100%;color:var(--view-fg,var(--color-on-surface,#1a1a1a));flex-direction:column;display:flex}.view-editor__toolbar{background-color:var(--view-toolbar-bg,#00000005);border-block-end:1px solid var(--view-border,#00000014);flex-shrink:0;justify-content:space-between;align-items:center;gap:.5rem;padding:.5rem 1rem;display:flex}.view-editor__toolbar-left,.view-editor__toolbar-right{align-items:center;gap:.25rem;display:flex}.view-editor__btn{color:var(--view-fg);cursor:pointer;background:0 0;border:none;border-radius:6px;align-items:center;gap:.5rem;padding:.5rem .75rem;font-size:.8125rem;font-weight:500;transition:background-color .15s;display:flex}.view-editor__btn ui-icon{opacity:.7;font-size:1rem}@media (width<=640px){.view-editor__btn span{display:none}}.view-editor__btn:hover{background-color:#0000000f}.view-editor__content{flex:1;display:flex;overflow:hidden}.view-editor__textarea{background-color:var(--view-editor-bg,#fafafa);color:var(--view-fg);resize:none;border:none;flex:1;padding:1.5rem 2rem;font-family:SF Mono,Fira Code,JetBrains Mono,Consolas,monospace;font-size:.9375rem;line-height:1.6}.view-editor__textarea:focus{outline:none}.view-editor__textarea::placeholder{color:var(--view-fg);opacity:.4}@media print{.view-editor__toolbar{display:none}.view-editor__textarea{padding:0}}}", Fc = /* @__PURE__ */ t({
	EditorView: () => Rc,
	createEditorView: () => Bc,
	createView: () => zc,
	default: () => zc
}), Ic = "rs-editor-state", Lc = "# New Document\n\nStart writing here...", Rc = class {
	constructor(e = {}) {
		this.id = "editor", this.name = "Editor", this.icon = "pencil", this.element = null, this.contentRef = vr(""), this.stateManager = Ec(Ic), this.textarea = null, this._sheet = null, this.lifecycle = {
			onMount: () => this.onMount(),
			onUnmount: () => this.saveState(),
			onShow: () => {
				this._sheet = mt(Pc);
			},
			onHide: () => {
				ht(this._sheet), this.saveState();
			}
		}, this.options = e, this.shellContext = e.shellContext;
		let t = this.stateManager.load();
		this.contentRef.value = e.initialContent || t?.content || Lc;
	}
	render(e) {
		return e && (this.options = {
			...this.options,
			...e
		}, this.shellContext = e.shellContext || this.shellContext), this._sheet = mt(Pc), this.element = ba`
            <div class="view-editor">
                <div class="view-editor__toolbar">
                    <div class="view-editor__toolbar-left">
                        <button class="view-editor__btn" data-action="open" type="button" title="Open file">
                            <ui-icon icon="folder-open" icon-style="duotone"></ui-icon>
                            <span>Open</span>
                        </button>
                        <button class="view-editor__btn" data-action="save" type="button" title="Save file">
                            <ui-icon icon="floppy-disk" icon-style="duotone"></ui-icon>
                            <span>Save</span>
                        </button>
                    </div>
                    <div class="view-editor__toolbar-right">
                        <button class="view-editor__btn" data-action="preview" type="button" title="Preview">
                            <ui-icon icon="eye" icon-style="duotone"></ui-icon>
                            <span>Preview</span>
                        </button>
                        <button class="view-editor__btn" data-action="copy" type="button" title="Copy all">
                            <ui-icon icon="copy" icon-style="duotone"></ui-icon>
                            <span>Copy</span>
                        </button>
                    </div>
                </div>
                <div class="view-editor__content">
                    <textarea
                        class="view-editor__textarea"
                        placeholder="Start writing markdown..."
                        data-editor-input
                    >${this.contentRef.value}</textarea>
                </div>
            </div>
        `, this.textarea = this.element.querySelector("[data-editor-input]"), this.setupEventHandlers(), this.element;
	}
	getToolbar() {
		return null;
	}
	setContent(e) {
		this.contentRef.value = e, this.textarea && (this.textarea.value = e);
	}
	getContent() {
		return this.contentRef.value;
	}
	setupEventHandlers() {
		this.element && (this.textarea?.addEventListener("input", () => {
			this.contentRef.value = this.textarea?.value || "", this.options.onContentChange?.(this.contentRef.value);
		}), this.element.addEventListener("click", async (e) => {
			let t = e.target.closest("[data-action]");
			if (t) switch (t.dataset.action) {
				case "open":
					this.handleOpen();
					break;
				case "save":
					this.handleSave();
					break;
				case "preview":
					this.handlePreview();
					break;
				case "copy":
					await this.handleCopy();
					break;
			}
		}));
	}
	handleOpen() {
		let e = document.createElement("input");
		e.type = "file", e.accept = ".md,.markdown,.txt,text/markdown,text/plain", e.onchange = async () => {
			let t = e.files?.[0];
			if (t) try {
				let e = await t.text();
				this.setContent(e), this.options.filename = t.name, this.showMessage(`Opened ${t.name}`);
			} catch {
				this.showMessage("Failed to open file");
			}
		}, e.click();
	}
	handleSave() {
		let e = this.contentRef.value, t = this.options.filename || "document.md", n = new Blob([e], { type: "text/markdown;charset=utf-8" }), r = URL.createObjectURL(n), i = document.createElement("a");
		i.href = r, i.download = t, i.click(), setTimeout(() => URL.revokeObjectURL(r), 250), this.options.onSave?.(e), this.showMessage(`Saved ${t}`);
	}
	handlePreview() {
		this.shellContext?.navigate("viewer");
	}
	async handleCopy() {
		try {
			let e = await Nc(this.contentRef.value);
			if (!e.ok) throw Error(e.error || "Clipboard write failed");
			this.showMessage("Copied to clipboard");
		} catch {
			this.showMessage("Failed to copy");
		}
	}
	saveState() {
		this.stateManager.save({
			content: this.contentRef.value,
			filename: this.options.filename
		});
	}
	onMount() {
		console.log("[Editor] Mounted");
	}
	showMessage(e) {
		this.shellContext?.showMessage(e);
	}
	async invokeChannelApi(e, t) {
		let n = typeof t == "object" && t && !Array.isArray(t) ? t : {}, r = typeof n.text == "string" ? n.text : typeof n.content == "string" ? n.content : typeof t == "string" ? t : "";
		return e === Mc.SetContent || e === Mc.ContentLoad || e === Mc.ContentEdit ? (r && this.setContent(r), !0) : (await this.handleMessage({
			type: e,
			data: {
				text: r,
				content: r
			}
		}), !0);
	}
	canHandleMessage(e) {
		return ["content-edit", "content-load"].includes(e);
	}
	async handleMessage(e) {
		let t = e;
		(t.data?.text || t.data?.content) && this.setContent(t.data.text || t.data.content || "");
	}
};
function zc(e) {
	return new Rc(e);
}
var Bc = zc, Vc = Fc;
if (!Vc.default && !Vc.createView) throw Error("editor-view must export default or createView");
if (typeof document < "u" && !(jc(Ac(Vc, { id: "editor-view" }), { id: "editor-view" }) instanceof HTMLElement)) throw Error("editor-view did not render an HTMLElement");
//#endregion

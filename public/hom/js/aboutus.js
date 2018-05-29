(function(e, t) {
    function n(e) {
        var t = e.length,
        n = lt.type(e);
        return lt.isWindow(e) ? !1 : e.nodeType === 1 && t ? !0 : n === "array" || n !== "function" && (t === 0 || typeof t == "number" && t > 0 && t - 1 in e)
    }
    function r(e) {
        var t = Nt[e] = {};
        return lt.each(e.match(ht) || [],
        function(e, n) {
            t[n] = !0
        }),
        t
    }
    function i(e, n, r, i) {
        if (!lt.acceptData(e)) return;
        var s, o, u = lt.expando,
        a = e.nodeType,
        f = a ? lt.cache: e,
        l = a ? e[u] : e[u] && u;
        if ((!l || !f[l] || !i && !f[l].data) && r === t && typeof n == "string") return;
        l || (a ? l = e[u] = tt.pop() || lt.guid++:l = u),
        f[l] || (f[l] = a ? {}: {
            toJSON: lt.noop
        });
        if (typeof n == "object" || typeof n == "function") i ? f[l] = lt.extend(f[l], n) : f[l].data = lt.extend(f[l].data, n);
        return o = f[l],
        i || (o.data || (o.data = {}), o = o.data),
        r !== t && (o[lt.camelCase(n)] = r),
        typeof n == "string" ? (s = o[n], s == null && (s = o[lt.camelCase(n)])) : s = o,
        s
    }
    function s(e, t, n) {
        if (!lt.acceptData(e)) return;
        var r, i, s = e.nodeType,
        o = s ? lt.cache: e,
        a = s ? e[lt.expando] : lt.expando;
        if (!o[a]) return;
        if (t) {
            r = n ? o[a] : o[a].data;
            if (r) {
                lt.isArray(t) ? t = t.concat(lt.map(t, lt.camelCase)) : t in r ? t = [t] : (t = lt.camelCase(t), t in r ? t = [t] : t = t.split(" ")),
                i = t.length;
                while (i--) delete r[t[i]];
                if (n ? !u(r) : !lt.isEmptyObject(r)) return
            }
        }
        if (!n) {
            delete o[a].data;
            if (!u(o[a])) return
        }
        s ? lt.cleanData([e], !0) : lt.support.deleteExpando || o != o.window ? delete o[a] : o[a] = null
    }
    function o(e, n, r) {
        if (r === t && e.nodeType === 1) {
            var i = "data-" + n.replace(kt, "-$1").toLowerCase();
            r = e.getAttribute(i);
            if (typeof r == "string") {
                try {
                    r = r === "true" ? !0 : r === "false" ? !1 : r === "null" ? null: +r + "" === r ? +r: Ct.test(r) ? lt.parseJSON(r) : r
                } catch(s) {}
                lt.data(e, n, r)
            } else r = t
        }
        return r
    }
    function u(e) {
        var t;
        for (t in e) {
            if (t === "data" && lt.isEmptyObject(e[t])) continue;
            if (t !== "toJSON") return ! 1
        }
        return ! 0
    }
    function a() {
        return ! 0
    }
    function f() {
        return ! 1
    }
    function l() {
        try {
            return Q.activeElement
        } catch(e) {}
    }
    function c(e, t) {
        do e = e[t];
        while (e && e.nodeType !== 1);
        return e
    }
    function h(e, t, n) {
        if (lt.isFunction(t)) return lt.grep(e,
        function(e, r) {
            return !! t.call(e, r, e) !== n
        });
        if (t.nodeType) return lt.grep(e,
        function(e) {
            return e === t !== n
        });
        if (typeof t == "string") {
            if (Ut.test(t)) return lt.filter(t, e, n);
            t = lt.filter(t, e)
        }
        return lt.grep(e,
        function(e) {
            return lt.inArray(e, t) >= 0 !== n
        })
    }
    function p(e) {
        var t = Vt.split("|"),
        n = e.createDocumentFragment();
        if (n.createElement) while (t.length) n.createElement(t.pop());
        return n
    }
    function d(e, t) {
        return lt.nodeName(e, "table") && lt.nodeName(t.nodeType === 1 ? t: t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }
    function v(e) {
        return e.type = (lt.find.attr(e, "type") !== null) + "/" + e.type,
        e
    }
    function m(e) {
        var t = sn.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"),
        e
    }
    function g(e, t) {
        var n, r = 0;
        for (; (n = e[r]) != null; r++) lt._data(n, "globalEval", !t || lt._data(t[r], "globalEval"))
    }
    function y(e, t) {
        if (t.nodeType !== 1 || !lt.hasData(e)) return;
        var n, r, i, s = lt._data(e),
        o = lt._data(t, s),
        u = s.events;
        if (u) {
            delete o.handle,
            o.events = {};
            for (n in u) for (r = 0, i = u[n].length; r < i; r++) lt.event.add(t, n, u[n][r])
        }
        o.data && (o.data = lt.extend({},
        o.data))
    }
    function b(e, t) {
        var n, r, i;
        if (t.nodeType !== 1) return;
        n = t.nodeName.toLowerCase();
        if (!lt.support.noCloneEvent && t[lt.expando]) {
            i = lt._data(t);
            for (r in i.events) lt.removeEvent(t, r, i.handle);
            t.removeAttribute(lt.expando)
        }
        if (n === "script" && t.text !== e.text) v(t).text = e.text,
        m(t);
        else if (n === "object") t.parentNode && (t.outerHTML = e.outerHTML),
        lt.support.html5Clone && e.innerHTML && !lt.trim(t.innerHTML) && (t.innerHTML = e.innerHTML);
        else if (n === "input" && tn.test(e.type)) t.defaultChecked = t.checked = e.checked,
        t.value !== e.value && (t.value = e.value);
        else if (n === "option") t.defaultSelected = t.selected = e.defaultSelected;
        else if (n === "input" || n === "textarea") t.defaultValue = e.defaultValue
    }
    function w(e, n) {
        var r, i, s = 0,
        o = typeof e.getElementsByTagName !== J ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== J ? e.querySelectorAll(n || "*") : t;
        if (!o) for (o = [], r = e.childNodes || e; (i = r[s]) != null; s++) ! n || lt.nodeName(i, n) ? o.push(i) : lt.merge(o, w(i, n));
        return n === t || n && lt.nodeName(e, n) ? lt.merge([e], o) : o
    }
    function E(e) {
        tn.test(e.type) && (e.defaultChecked = e.checked)
    }
    function S(e, t) {
        if (t in e) return t;
        var n = t.charAt(0).toUpperCase() + t.slice(1),
        r = t,
        i = Nn.length;
        while (i--) {
            t = Nn[i] + n;
            if (t in e) return t
        }
        return r
    }
    function x(e, t) {
        return e = t || e,
        lt.css(e, "display") === "none" || !lt.contains(e.ownerDocument, e)
    }
    function T(e, t) {
        var n, r, i, s = [],
        o = 0,
        u = e.length;
        for (; o < u; o++) {
            r = e[o];
            if (!r.style) continue;
            s[o] = lt._data(r, "olddisplay"),
            n = r.style.display,
            t ? (!s[o] && n === "none" && (r.style.display = ""), r.style.display === "" && x(r) && (s[o] = lt._data(r, "olddisplay", L(r.nodeName)))) : s[o] || (i = x(r), (n && n !== "none" || !i) && lt._data(r, "olddisplay", i ? n: lt.css(r, "display")))
        }
        for (o = 0; o < u; o++) {
            r = e[o];
            if (!r.style) continue;
            if (!t || r.style.display === "none" || r.style.display === "") r.style.display = t ? s[o] || "": "none"
        }
        return e
    }
    function N(e, t, n) {
        var r = yn.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }
    function C(e, t, n, r, i) {
        var s = n === (r ? "border": "content") ? 4 : t === "width" ? 1 : 0,
        o = 0;
        for (; s < 4; s += 2) n === "margin" && (o += lt.css(e, n + Tn[s], !0, i)),
        r ? (n === "content" && (o -= lt.css(e, "padding" + Tn[s], !0, i)), n !== "margin" && (o -= lt.css(e, "border" + Tn[s] + "Width", !0, i))) : (o += lt.css(e, "padding" + Tn[s], !0, i), n !== "padding" && (o += lt.css(e, "border" + Tn[s] + "Width", !0, i)));
        return o
    }
    function k(e, t, n) {
        var r = !0,
        i = t === "width" ? e.offsetWidth: e.offsetHeight,

        s = cn(e),
        o = lt.support.boxSizing && lt.css(e, "boxSizing", !1, s) === "border-box";
        if (i <= 0 || i == null) {
            i = hn(e, t, s);
            if (i < 0 || i == null) i = e.style[t];
            if (bn.test(i)) return i;
            r = o && (lt.support.boxSizingReliable || i === e.style[t]),
            i = parseFloat(i) || 0
        }
        return i + C(e, t, n || (o ? "border": "content"), r, s) + "px"
    }
    function L(e) {
        var t = Q,
        n = En[e];
        if (!n) {
            n = A(e, t);
            if (n === "none" || !n) ln = (ln || lt("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement),
            t = (ln[0].contentWindow || ln[0].contentDocument).document,
            t.write("<!doctype html><html><body>"),
            t.close(),
            n = A(e, t),
            ln.detach();
            En[e] = n
        }
        return n
    }
    function A(e, t) {
        var n = lt(t.createElement(e)).appendTo(t.body),
        r = lt.css(n[0], "display");
        return n.remove(),
        r
    }
    function O(e, t, n, r) {
        var i;
        if (lt.isArray(t)) lt.each(t,
        function(t, i) {
            n || kn.test(e) ? r(e, i) : O(e + "[" + (typeof i == "object" ? t: "") + "]", i, n, r)
        });
        else if (!n && lt.type(t) === "object") for (i in t) O(e + "[" + i + "]", t[i], n, r);
        else r(e, t)
    }
    function M(e) {
        return function(t, n) {
            typeof t != "string" && (n = t, t = "*");
            var r, i = 0,
            s = t.toLowerCase().match(ht) || [];
            if (lt.isFunction(n)) while (r = s[i++]) r[0] === "+" ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }
    function _(e, t, n, r) {
        function i(u) {
            var a;
            return s[u] = !0,
            lt.each(e[u] || [],
            function(e, u) {
                var f = u(t, n, r);
                if (typeof f == "string" && !o && !s[f]) return t.dataTypes.unshift(f),
                i(f),
                !1;
                if (o) return ! (a = f)
            }),
            a
        }
        var s = {},
        o = e === Wn;
        return i(t.dataTypes[0]) || !s["*"] && i("*")
    }
    function D(e, n) {
        var r, i, s = lt.ajaxSettings.flatOptions || {};
        for (i in n) n[i] !== t && ((s[i] ? e: r || (r = {}))[i] = n[i]);
        return r && lt.extend(!0, e, r),
        e
    }
    function P(e, n, r) {
        var i, s, o, u, a = e.contents,
        f = e.dataTypes;
        while (f[0] === "*") f.shift(),
        s === t && (s = e.mimeType || n.getResponseHeader("Content-Type"));
        if (s) for (u in a) if (a[u] && a[u].test(s)) {
            f.unshift(u);
            break
        }
        if (f[0] in r) o = f[0];
        else {
            for (u in r) {
                if (!f[0] || e.converters[u + " " + f[0]]) {
                    o = u;
                    break
                }
                i || (i = u)
            }
            o = o || i
        }
        if (o) return o !== f[0] && f.unshift(o),
        r[o]
    }
    function H(e, t, n, r) {
        var i, s, o, u, a, f = {},
        l = e.dataTypes.slice();
        if (l[1]) for (o in e.converters) f[o.toLowerCase()] = e.converters[o];
        s = l.shift();
        while (s) {
            e.responseFields[s] && (n[e.responseFields[s]] = t),
            !a && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
            a = s,
            s = l.shift();
            if (s) if (s === "*") s = a;
            else if (a !== "*" && a !== s) {
                o = f[a + " " + s] || f["* " + s];
                if (!o) for (i in f) {
                    u = i.split(" ");
                    if (u[1] === s) {
                        o = f[a + " " + u[0]] || f["* " + u[0]];
                        if (o) {
                            o === !0 ? o = f[i] : f[i] !== !0 && (s = u[0], l.unshift(u[1]));
                            break
                        }
                    }
                }
                if (o !== !0) if (o && e["throws"]) t = o(t);
                else try {
                    t = o(t)
                } catch(c) {
                    return {
                        state: "parsererror",
                        error: o ? c: "No conversion from " + a + " to " + s
                    }
                }
            }
        }
        return {
            state: "success",
            data: t
        }
    }
    function B() {
        try {
            return new e.XMLHttpRequest
        } catch(t) {}
    }
    function j() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch(t) {}
    }
    function F() {
        return setTimeout(function() {
            Zn = t
        }),
        Zn = lt.now()
    }
    function I(e, t, n) {
        var r, i = (sr[t] || []).concat(sr["*"]),
        s = 0,
        o = i.length;
        for (; s < o; s++) if (r = i[s].call(n, t, e)) return r
    }
    function q(e, t, n) {
        var r, i, s = 0,
        o = ir.length,
        u = lt.Deferred().always(function() {
            delete a.elem
        }),
        a = function() {
            if (i) return ! 1;
            var t = Zn || F(),
            n = Math.max(0, f.startTime + f.duration - t),
            r = n / f.duration || 0,
            s = 1 - r,
            o = 0,
            a = f.tweens.length;
            for (; o < a; o++) f.tweens[o].run(s);
            return u.notifyWith(e, [f, s, n]),
            s < 1 && a ? n: (u.resolveWith(e, [f]), !1)
        },
        f = u.promise({
            elem: e,
            props: lt.extend({},
            t),
            opts: lt.extend(!0, {
                specialEasing: {}
            },
            n),
            originalProperties: t,
            originalOptions: n,
            startTime: Zn || F(),
            duration: n.duration,
            tweens: [],
            createTween: function(t, n) {
                var r = lt.Tween(e, f.opts, t, n, f.opts.specialEasing[t] || f.opts.easing);
                return f.tweens.push(r),
                r
            },
            stop: function(t) {
                var n = 0,
                r = t ? f.tweens.length: 0;
                if (i) return this;
                i = !0;
                for (; n < r; n++) f.tweens[n].run(1);
                return t ? u.resolveWith(e, [f, t]) : u.rejectWith(e, [f, t]),
                this
            }
        }),
        l = f.props;
        R(l, f.opts.specialEasing);
        for (; s < o; s++) {
            r = ir[s].call(f, e, l, f.opts);
            if (r) return r
        }
        return lt.map(l, I, f),
        lt.isFunction(f.opts.start) && f.opts.start.call(e, f),
        lt.fx.timer(lt.extend(a, {
            elem: e,
            anim: f,
            queue: f.opts.queue
        })),
        f.progress(f.opts.progress).done(f.opts.done, f.opts.complete).fail(f.opts.fail).always(f.opts.always)
    }
    function R(e, t) {
        var n, r, i, s, o;
        for (n in e) {
            r = lt.camelCase(n),
            i = t[r],
            s = e[n],
            lt.isArray(s) && (i = s[1], s = e[n] = s[0]),
            n !== r && (e[r] = s, delete e[n]),
            o = lt.cssHooks[r];
            if (o && "expand" in o) {
                s = o.expand(s),
                delete e[r];
                for (n in s) n in e || (e[n] = s[n], t[n] = i)
            } else t[r] = i
        }
    }
    function U(e, t, n) {
        var r, i, s, o, u, a, f = this,
        l = {},
        c = e.style,
        h = e.nodeType && x(e),
        p = lt._data(e, "fxshow");
        n.queue || (u = lt._queueHooks(e, "fx"), u.unqueued == null && (u.unqueued = 0, a = u.empty.fire, u.empty.fire = function() {
            u.unqueued || a()
        }), u.unqueued++, f.always(function() {
            f.always(function() {
                u.unqueued--,
                lt.queue(e, "fx").length || u.empty.fire()
            })
        })),
        e.nodeType === 1 && ("height" in t || "width" in t) && (n.overflow = [c.overflow, c.overflowX, c.overflowY], lt.css(e, "display") === "inline" && lt.css(e, "float") === "none" && (!lt.support.inlineBlockNeedsLayout || L(e.nodeName) === "inline" ? c.display = "inline-block": c.zoom = 1)),
        n.overflow && (c.overflow = "hidden", lt.support.shrinkWrapBlocks || f.always(function() {
            c.overflow = n.overflow[0],
            c.overflowX = n.overflow[1],
            c.overflowY = n.overflow[2]
        }));
        for (r in t) {
            i = t[r];
            if (tr.exec(i)) {
                delete t[r],
                s = s || i === "toggle";
                if (i === (h ? "hide": "show")) continue;
                l[r] = p && p[r] || lt.style(e, r)
            }
        }
        if (!lt.isEmptyObject(l)) {
            p ? "hidden" in p && (h = p.hidden) : p = lt._data(e, "fxshow", {}),
            s && (p.hidden = !h),
            h ? lt(e).show() : f.done(function() {
                lt(e).hide()
            }),
            f.done(function() {
                var t;
                lt._removeData(e, "fxshow");
                for (t in l) lt.style(e, t, l[t])
            });
            for (r in l) o = I(h ? p[r] : 0, r, f),
            r in p || (p[r] = o.start, h && (o.end = o.start, o.start = r === "width" || r === "height" ? 1 : 0))
        }
    }
    function z(e, t, n, r, i) {
        return new z.prototype.init(e, t, n, r, i)
    }
    function W(e, t) {
        var n, r = {
            height: e
        },
        i = 0;
        t = t ? 1 : 0;
        for (; i < 4; i += 2 - t) n = Tn[i],
        r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e),
        r
    }
    function X(e) {
        return lt.isWindow(e) ? e: e.nodeType === 9 ? e.defaultView || e.parentWindow: !1
    }
    var V, $, J = typeof t,
    K = e.location,
    Q = e.document,
    G = Q.documentElement,
    Y = e.jQuery,
    Z = e.$,
    et = {},
    tt = [],
    nt = "1.10.2",
    rt = tt.concat,
    it = tt.push,
    st = tt.slice,
    ot = tt.indexOf,
    ut = et.toString,
    at = et.hasOwnProperty,
    ft = nt.trim,
    lt = function(e, t) {
        return new lt.fn.init(e, t, $)
    },
    ct = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    ht = /\S+/g,
    pt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    dt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
    vt = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    mt = /^[\],:{}\s]*$/,
    gt = /(?:^|:|,)(?:\s*\[)+/g,
    yt = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
    bt = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
    wt = /^-ms-/,
    Et = /-([\da-z])/gi,
    St = function(e, t) {
        return t.toUpperCase()
    },
    xt = function(e) {
        if (Q.addEventListener || e.type === "load" || Q.readyState === "complete") Tt(),
        lt.ready()
    },
    Tt = function() {
        Q.addEventListener ? (Q.removeEventListener("DOMContentLoaded", xt, !1), e.removeEventListener("load", xt, !1)) : (Q.detachEvent("onreadystatechange", xt), e.detachEvent("onload", xt))
    };
    lt.fn = lt.prototype = {
        jquery: nt,
        constructor: lt,
        init: function(e, n, r) {
            var i, s;
            if (!e) return this;
            if (typeof e == "string") {
                e.charAt(0) === "<" && e.charAt(e.length - 1) === ">" && e.length >= 3 ? i = [null, e, null] : i = dt.exec(e);
                if (i && (i[1] || !n)) {
                    if (i[1]) {
                        n = n instanceof lt ? n[0] : n,
                        lt.merge(this, lt.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n: Q, !0));
                        if (vt.test(i[1]) && lt.isPlainObject(n)) for (i in n) lt.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);
                        return this
                    }
                    s = Q.getElementById(i[2]);
                    if (s && s.parentNode) {
                        if (s.id !== i[2]) return r.find(e);
                        this.length = 1,
                        this[0] = s
                    }
                    return this.context = Q,
                    this.selector = e,
                    this
                }
                return ! n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e)
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : lt.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), lt.makeArray(e, this))
        },
        selector: "",
        length: 0,
        toArray: function() {
            return st.call(this)
        },
        get: function(e) {
            return e == null ? this.toArray() : e < 0 ? this[this.length + e] : this[e]
        },
        pushStack: function(e) {
            var t = lt.merge(this.constructor(), e);
            return t.prevObject = this,
            t.context = this.context,
            t
        },
        each: function(e, t) {
            return lt.each(this, e, t)
        },
        ready: function(e) {
            return lt.ready.promise().done(e),
            this
        },
        slice: function() {
            return this.pushStack(st.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq( - 1)
        },
        eq: function(e) {
            var t = this.length,
            n = +e + (e < 0 ? t: 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        },
        map: function(e) {
            return this.pushStack(lt.map(this,
            function(t, n) {
                return e.call(t, n, t)
            }))
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: it,
        sort: [].sort,
        splice: [].splice
    },
    lt.fn.init.prototype = lt.fn,
    lt.extend = lt.fn.extend = function() {
        var e, n, r, i, s, o, u = arguments[0] || {},
        a = 1,
        f = arguments.length,
        l = !1;
        typeof u == "boolean" && (l = u, u = arguments[1] || {},
        a = 2),
        typeof u != "object" && !lt.isFunction(u) && (u = {}),
        f === a && (u = this, --a);
        for (; a < f; a++) if ((s = arguments[a]) != null) for (i in s) {
            e = u[i],
            r = s[i];
            if (u === r) continue;
            l && r && (lt.isPlainObject(r) || (n = lt.isArray(r))) ? (n ? (n = !1, o = e && lt.isArray(e) ? e: []) : o = e && lt.isPlainObject(e) ? e: {},
            u[i] = lt.extend(l, o, r)) : r !== t && (u[i] = r)
        }
        return u
    },
    lt.extend({
        expando: "jQuery" + (nt + Math.random()).replace(/\D/g, ""),
        noConflict: function(t) {
            return e.$ === lt && (e.$ = Z),
            t && e.jQuery === lt && (e.jQuery = Y),
            lt
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? lt.readyWait++:lt.ready(!0)
        },
        ready: function(e) {
            if (e === !0 ? --lt.readyWait: lt.isReady) return;
            if (!Q.body) return setTimeout(lt.ready);
            lt.isReady = !0;
            if (e !== !0 && --lt.readyWait > 0) return;
            V.resolveWith(Q, [lt]),
            lt.fn.trigger && lt(Q).trigger("ready").off("ready")
        },
        isFunction: function(e) {
            return lt.type(e) === "function"
        },
        isArray: Array.isArray ||
        function(e) {
            return lt.type(e) === "array"
        },
        isWindow: function(e) {
            return e != null && e == e.window
        },
        isNumeric: function(e) {
            return ! isNaN(parseFloat(e)) && isFinite(e)
        },
        type: function(e) {
            return e == null ? String(e) : typeof e == "object" || typeof e == "function" ? et[ut.call(e)] || "object": typeof e
        },
        isPlainObject: function(e) {
            var n;
            if (!e || lt.type(e) !== "object" || e.nodeType || lt.isWindow(e)) return ! 1;
            try {
                if (e.constructor && !at.call(e, "constructor") && !at.call(e.constructor.prototype, "isPrototypeOf")) return ! 1
            } catch(r) {
                return ! 1
            }
            if (lt.support.ownLast) for (n in e) return at.call(e, n);
            for (n in e);
            return n === t || at.call(e, n)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return ! 1;
            return ! 0
        },
        error: function(e) {
            throw new Error(e)
        },
        parseHTML: function(e, t, n) {
            if (!e || typeof e != "string") return null;
            typeof t == "boolean" && (n = t, t = !1),
            t = t || Q;
            var r = vt.exec(e),
            i = !n && [];
            return r ? [t.createElement(r[1])] : (r = lt.buildFragment([e], t, i), i && lt(i).remove(), lt.merge([], r.childNodes))
        },
        parseJSON: function(t) {
            if (e.JSON && e.JSON.parse) return e.JSON.parse(t);
            if (t === null) return t;
            if (typeof t == "string") {
                t = lt.trim(t);
                if (t && mt.test(t.replace(yt, "@").replace(bt, "]").replace(gt, ""))) return (new Function("return " + t))()
            }
            lt.error("Invalid JSON: " + t)
        },
        parseXML: function(n) {
            var r, i;
            if (!n || typeof n != "string") return null;
            try {
                e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n))
            } catch(s) {
                r = t
            }
            return (!r || !r.documentElement || r.getElementsByTagName("parsererror").length) && lt.error("Invalid XML: " + n),
            r
        },
        noop: function() {},
        globalEval: function(t) {
            t && lt.trim(t) && (e.execScript ||
            function(t) {
                e.eval.call(e, t)
            })(t)
        },
        camelCase: function(e) {
            return e.replace(wt, "ms-").replace(Et, St)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t, r) {
            var i, s = 0,
            o = e.length,
            u = n(e);
            if (r) if (u) for (; s < o; s++) {
                i = t.apply(e[s], r);
                if (i === !1) break
            } else for (s in e) {
                i = t.apply(e[s], r);
                if (i === !1) break
            } else if (u) for (; s < o; s++) {
                i = t.call(e[s], s, e[s]);
                if (i === !1) break
            } else for (s in e) {
                i = t.call(e[s], s, e[s]);
                if (i === !1) break
            }
            return e
        },
        trim: ft && !ft.call("\ufeff\u00a0") ?
        function(e) {
            return e == null ? "": ft.call(e)
        }: function(e) {
            return e == null ? "": (e + "").replace(pt, "")
        },
        makeArray: function(e, t) {
            var r = t || [];
            return e != null && (n(Object(e)) ? lt.merge(r, typeof e == "string" ? [e] : e) : it.call(r, e)),
            r
        },
        inArray: function(e, t, n) {
            var r;
            if (t) {
                if (ot) return ot.call(t, e, n);
                r = t.length,
                n = n ? n < 0 ? Math.max(0, r + n) : n: 0;
                for (; n < r; n++) if (n in t && t[n] === e) return n
            }
            return - 1
        },
        merge: function(e, n) {
            var r = n.length,
            i = e.length,
            s = 0;
            if (typeof r == "number") for (; s < r; s++) e[i++] = n[s];
            else while (n[s] !== t) e[i++] = n[s++];
            return e.length = i,
            e
        },
        grep: function(e, t, n) {
            var r, i = [],
            s = 0,
            o = e.length;
            n = !!n;
            for (; s < o; s++) r = !!t(e[s], s),
            n !== r && i.push(e[s]);
            return i
        },
        map: function(e, t, r) {
            var i, s = 0,
            o = e.length,
            u = n(e),
            a = [];
            if (u) for (; s < o; s++) i = t(e[s], s, r),
            i != null && (a[a.length] = i);
            else for (s in e) i = t(e[s], s, r),
            i != null && (a[a.length] = i);
            return rt.apply([], a)
        },
        guid: 1,
        proxy: function(e, n) {
            var r, i, s;
            return typeof n == "string" && (s = e[n], n = e, e = s),
            lt.isFunction(e) ? (r = st.call(arguments, 2), i = function() {
                return e.apply(n || this, r.concat(st.call(arguments)))
            },
            i.guid = e.guid = e.guid || lt.guid++, i) : t
        },
        access: function(e, n, r, i, s, o, u) {
            var a = 0,
            f = e.length,
            l = r == null;
            if (lt.type(r) === "object") {
                s = !0;
                for (a in r) lt.access(e, n, a, r[a], !0, o, u)
            } else if (i !== t) {
                s = !0,
                lt.isFunction(i) || (u = !0),
                l && (u ? (n.call(e, i), n = null) : (l = n, n = function(e, t, n) {
                    return l.call(lt(e), n)
                }));
                if (n) for (; a < f; a++) n(e[a], r, u ? i: i.call(e[a], a, n(e[a], r)))
            }
            return s ? e: l ? n.call(e) : f ? n(e[0], r) : o
        },
        now: function() {
            return (new Date).getTime()
        },
        swap: function(e, t, n, r) {
            var i, s, o = {};
            for (s in t) o[s] = e.style[s],
            e.style[s] = t[s];
            i = n.apply(e, r || []);
            for (s in t) e.style[s] = o[s];
            return i
        }
    }),
    lt.ready.promise = function(t) {
        if (!V) {
            V = lt.Deferred();
            if (Q.readyState === "complete") setTimeout(lt.ready);
            else if (Q.addEventListener) Q.addEventListener("DOMContentLoaded", xt, !1),
            e.addEventListener("load", xt, !1);
            else {
                Q.attachEvent("onreadystatechange", xt),
                e.attachEvent("onload", xt);
                var n = !1;
                try {
                    n = e.frameElement == null && Q.documentElement
                } catch(r) {}
                n && n.doScroll &&
                function i() {
                    if (!lt.isReady) {
                        try {
                            n.doScroll("left")
                        } catch(e) {
                            return setTimeout(i, 50)
                        }
                        Tt(),
                        lt.ready()
                    }
                } ()
            }
        }
        return V.promise(t)
    },
    lt.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),
    function(e, t) {
        et["[object " + t + "]"] = t.toLowerCase()
    }),
    $ = lt(Q),
    function(e, t) {
        function n(e, t, n, r) {
            var i, s, o, u, a, f, l, c, d, v; (t ? t.ownerDocument || t: q) !== _ && M(t),
            t = t || _,
            n = n || [];
            if (!e || typeof e != "string") return n;
            if ((u = t.nodeType) !== 1 && u !== 9) return [];
            if (P && !r) {
                if (i = bt.exec(e)) if (o = i[1]) {
                    if (u === 9) {
                        s = t.getElementById(o);
                        if (!s || !s.parentNode) return n;
                        if (s.id === o) return n.push(s),
                        n
                    } else if (t.ownerDocument && (s = t.ownerDocument.getElementById(o)) && F(t, s) && s.id === o) return n.push(s),
                    n
                } else {
                    if (i[2]) return et.apply(n, t.getElementsByTagName(e)),
                    n;
                    if ((o = i[3]) && x.getElementsByClassName && t.getElementsByClassName) return et.apply(n, t.getElementsByClassName(o)),
                    n
                }
                if (x.qsa && (!H || !H.test(e))) {
                    c = l = I,
                    d = t,
                    v = u === 9 && e;
                    if (u === 1 && t.nodeName.toLowerCase() !== "object") {
                        f = h(e),
                        (l = t.getAttribute("id")) ? c = l.replace(St, "\\$&") : t.setAttribute("id", c),
                        c = "[id='" + c + "'] ",
                        a = f.length;
                        while (a--) f[a] = c + p(f[a]);
                        d = pt.test(e) && t.parentNode || t,
                        v = f.join(",")
                    }
                    if (v) try {
                        return et.apply(n, d.querySelectorAll(v)),
                        n
                    } catch(m) {} finally {
                        l || t.removeAttribute("id")
                    }
                }
            }
            return E(e.replace(ft, "$1"), t, n, r)
        }
        function r() {
            function e(n, r) {
                return t.push(n += " ") > N.cacheLength && delete e[t.shift()],
                e[n] = r
            }
            var t = [];
            return e
        }
        function i(e) {
            return e[I] = !0,
            e
        }
        function s(e) {
            var t = _.createElement("div");
            try {
                return !! e(t)
            } catch(n) {
                return ! 1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                t = null
            }
        }
        function o(e, t) {
            var n = e.split("|"),
            r = e.length;
            while (r--) N.attrHandle[n[r]] = t
        }
        function u(e, t) {
            var n = t && e,
            r = n && e.nodeType === 1 && t.nodeType === 1 && (~t.sourceIndex || K) - (~e.sourceIndex || K);
            if (r) return r;
            if (n) while (n = n.nextSibling) if (n === t) return - 1;
            return e ? 1 : -1
        }
        function a(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return n === "input" && t.type === e
            }
        }
        function f(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return (n === "input" || n === "button") && t.type === e
            }
        }
        function l(e) {
            return i(function(t) {
                return t = +t,
                i(function(n, r) {
                    var i, s = e([], n.length, t),
                    o = s.length;
                    while (o--) n[i = s[o]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }
        function c() {}
        function h(e, t) {
            var r, i, s, o, u, a, f, l = W[e + " "];
            if (l) return t ? 0 : l.slice(0);
            u = e,
            a = [],
            f = N.preFilter;
            while (u) {
                if (!r || (i = ct.exec(u))) i && (u = u.slice(i[0].length) || u),
                a.push(s = []);
                r = !1;
                if (i = ht.exec(u)) r = i.shift(),
                s.push({
                    value: r,
                    type: i[0].replace(ft, " ")
                }),
                u = u.slice(r.length);
                for (o in N.filter)(i = gt[o].exec(u)) && (!f[o] || (i = f[o](i))) && (r = i.shift(), s.push({
                    value: r,
                    type: o,
                    matches: i
                }), u = u.slice(r.length));
                if (!r) break
            }
            return t ? u.length: u ? n.error(e) : W(e, a).slice(0)
        }
        function p(e) {
            var t = 0,
            n = e.length,
            r = "";
            for (; t < n; t++) r += e[t].value;
            return r
        }
        function d(e, t, n) {
            var r = t.dir,
            i = n && r === "parentNode",
            s = U++;
            return t.first ?
            function(t, n, s) {
                while (t = t[r]) if (t.nodeType === 1 || i) return e(t, n, s)
            }: function(t, n, o) {
                var u, a, f, l = R + " " + s;
                if (o) {
                    while (t = t[r]) if (t.nodeType === 1 || i) if (e(t, n, o)) return ! 0
                } else while (t = t[r]) if (t.nodeType === 1 || i) {
                    f = t[I] || (t[I] = {});
                    if ((a = f[r]) && a[0] === l) {
                        if ((u = a[1]) === !0 || u === T) return u === !0
                    } else {
                        a = f[r] = [l],
                        a[1] = e(t, n, o) || T;
                        if (a[1] === !0) return ! 0
                    }
                }
            }
        }
        function v(e) {
            return e.length > 1 ?
            function(t, n, r) {
                var i = e.length;
                while (i--) if (!e[i](t, n, r)) return ! 1;
                return ! 0
            }: e[0]
        }
        function m(e, t, n, r, i) {
            var s, o = [],
            u = 0,
            a = e.length,
            f = t != null;
            for (; u < a; u++) if (s = e[u]) if (!n || n(s, r, i)) o.push(s),
            f && t.push(u);
            return o
        }
        function g(e, t, n, r, s, o) {
            return r && !r[I] && (r = g(r)),
            s && !s[I] && (s = g(s, o)),
            i(function(i, o, u, a) {
                var f, l, c, h = [],
                p = [],
                d = o.length,
                v = i || w(t || "*", u.nodeType ? [u] : u, []),
                g = e && (i || !t) ? m(v, h, e, u, a) : v,
                y = n ? s || (i ? e: d || r) ? [] : o: g;
                n && n(g, y, u, a);
                if (r) {
                    f = m(y, p),
                    r(f, [], u, a),
                    l = f.length;
                    while (l--) if (c = f[l]) y[p[l]] = !(g[p[l]] = c)
                }
                if (i) {
                    if (s || e) {
                        if (s) {
                            f = [],
                            l = y.length;
                            while (l--)(c = y[l]) && f.push(g[l] = c);
                            s(null, y = [], f, a)
                        }
                        l = y.length;
                        while (l--)(c = y[l]) && (f = s ? nt.call(i, c) : h[l]) > -1 && (i[f] = !(o[f] = c))
                    }
                } else y = m(y === o ? y.splice(d, y.length) : y),
                s ? s(null, o, y, a) : et.apply(o, y)
            })
        }
        function y(e) {
            var t, n, r, i = e.length,
            s = N.relative[e[0].type],
            o = s || N.relative[" "],
            u = s ? 1 : 0,
            a = d(function(e) {
                return e === t
            },
            o, !0),
            f = d(function(e) {
                return nt.call(t, e) > -1
            },
            o, !0),
            l = [function(e, n, r) {
                return ! s && (r || n !== A) || ((t = n).nodeType ? a(e, n, r) : f(e, n, r))
            }];
            for (; u < i; u++) if (n = N.relative[e[u].type]) l = [d(v(l), n)];
            else {
                n = N.filter[e[u].type].apply(null, e[u].matches);
                if (n[I]) {
                    r = ++u;
                    for (; r < i; r++) if (N.relative[e[r].type]) break;
                    return g(u > 1 && v(l), u > 1 && p(e.slice(0, u - 1).concat({
                        value: e[u - 2].type === " " ? "*": ""
                    })).replace(ft, "$1"), n, u < r && y(e.slice(u, r)), r < i && y(e = e.slice(r)), r < i && p(e))
                }
                l.push(n)
            }
            return v(l)
        }
        function b(e, t) {
            var r = 0,
            s = t.length > 0,
            o = e.length > 0,
            u = function(i, u, a, f, l) {
                var c, h, p, d = [],
                v = 0,
                g = "0",
                y = i && [],
                b = l != null,
                w = A,
                E = i || o && N.find.TAG("*", l && u.parentNode || u),
                S = R += w == null ? 1 : Math.random() || .1;
                b && (A = u !== _ && u, T = r);
                for (; (c = E[g]) != null; g++) {
                    if (o && c) {
                        h = 0;
                        while (p = e[h++]) if (p(c, u, a)) {
                            f.push(c);
                            break
                        }
                        b && (R = S, T = ++r)
                    }
                    s && ((c = !p && c) && v--, i && y.push(c))
                }
                v += g;
                if (s && g !== v) {
                    h = 0;
                    while (p = t[h++]) p(y, d, u, a);
                    if (i) {
                        if (v > 0) while (g--) ! y[g] && !d[g] && (d[g] = Y.call(f));
                        d = m(d)
                    }
                    et.apply(f, d),
                    b && !i && d.length > 0 && v + t.length > 1 && n.uniqueSort(f)
                }
                return b && (R = S, A = w),
                y
            };
            return s ? i(u) : u
        }
        function w(e, t, r) {
            var i = 0,
            s = t.length;
            for (; i < s; i++) n(e, t[i], r);
            return r
        }
        function E(e, t, n, r) {
            var i, s, o, u, a, f = h(e);
            if (!r && f.length === 1) {
                s = f[0] = f[0].slice(0);
                if (s.length > 2 && (o = s[0]).type === "ID" && x.getById && t.nodeType === 9 && P && N.relative[s[1].type]) {
                    t = (N.find.ID(o.matches[0].replace(xt, Tt), t) || [])[0];
                    if (!t) return n;
                    e = e.slice(s.shift().value.length)
                }
                i = gt.needsContext.test(e) ? 0 : s.length;
                while (i--) {
                    o = s[i];
                    if (N.relative[u = o.type]) break;
                    if (a = N.find[u]) if (r = a(o.matches[0].replace(xt, Tt), pt.test(s[0].type) && t.parentNode || t)) {
                        s.splice(i, 1),
                        e = r.length && p(s);
                        if (!e) return et.apply(n, r),
                        n;
                        break
                    }
                }
            }
            return L(e, f)(r, t, !P, n, pt.test(e)),
            n
        }
        var S, x, T, N, C, k, L, A, O, M, _, D, P, H, B, j, F, I = "sizzle" + -(new Date),
        q = e.document,
        R = 0,
        U = 0,
        z = r(),
        W = r(),
        X = r(),
        V = !1,
        $ = function(e, t) {
            return e === t ? (V = !0, 0) : 0
        },
        J = typeof t,
        K = 1 << 31,
        Q = {}.hasOwnProperty,
        G = [],
        Y = G.pop,
        Z = G.push,
        et = G.push,
        tt = G.slice,
        nt = G.indexOf ||
        function(e) {
            var t = 0,
            n = this.length;
            for (; t < n; t++) if (this[t] === e) return t;
            return - 1
        },
        rt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        it = "[\\x20\\t\\r\\n\\f]",
        st = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        ot = st.replace("w", "w#"),
        ut = "\\[" + it + "*(" + st + ")" + it + "*(?:([*^$|!~]?=)" + it + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + ot + ")|)|)" + it + "*\\]",
        at = ":(" + st + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + ut.replace(3, 8) + ")*)|.*)\\)|)",
        ft = new RegExp("^" + it + "+|((?:^|[^\\\\])(?:\\\\.)*)" + it + "+$", "g"),
        ct = new RegExp("^" + it + "*," + it + "*"),
        ht = new RegExp("^" + it + "*([>+~]|" + it + ")" + it + "*"),
        pt = new RegExp(it + "*[+~]"),
        dt = new RegExp("=" + it + "*([^\\]'\"]*)" + it + "*\\]", "g"),
        vt = new RegExp(at),
        mt = new RegExp("^" + ot + "$"),
        gt = {
            ID: new RegExp("^#(" + st + ")"),
            CLASS: new RegExp("^\\.(" + st + ")"),
            TAG: new RegExp("^(" + st.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + ut),
            PSEUDO: new RegExp("^" + at),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + it + "*(even|odd|(([+-]|)(\\d*)n|)" + it + "*(?:([+-]|)" + it + "*(\\d+)|))" + it + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + rt + ")$", "i"),
            needsContext: new RegExp("^" + it + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + it + "*((?:-\\d)?\\d*)" + it + "*\\)|)(?=[^-]|$)", "i")
        },
        yt = /^[^{]+\{\s*\[native \w/,
        bt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        wt = /^(?:input|select|textarea|button)$/i,
        Et = /^h\d$/i,
        St = /'|\\/g,
        xt = new RegExp("\\\\([\\da-f]{1,6}" + it + "?|(" + it + ")|.)", "ig"),
        Tt = function(e, t, n) {
            var r = "0x" + t - 65536;
            return r !== r || n ? t: r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, r & 1023 | 56320)
        };
        try {
            et.apply(G = tt.call(q.childNodes), q.childNodes),
            G[q.childNodes.length].nodeType
        } catch(Nt) {
            et = {
                apply: G.length ?
                function(e, t) {
                    Z.apply(e, tt.call(t))
                }: function(e, t) {
                    var n = e.length,
                    r = 0;
                    while (e[n++] = t[r++]);
                    e.length = n - 1
                }
            }
        }
        k = n.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? t.nodeName !== "HTML": !1
        },
        x = n.support = {},
        M = n.setDocument = function(e) {
            var t = e ? e.ownerDocument || e: q,
            n = t.defaultView;
            if (t === _ || t.nodeType !== 9 || !t.documentElement) return _;
            _ = t,
            D = t.documentElement,
            P = !k(t),
            n && n.attachEvent && n !== n.top && n.attachEvent("onbeforeunload",
            function() {
                M()
            }),
            x.attributes = s(function(e) {
                return e.className = "i",
                !e.getAttribute("className")
            }),
            x.getElementsByTagName = s(function(e) {
                return e.appendChild(t.createComment("")),
                !e.getElementsByTagName("*").length
            }),
            x.getElementsByClassName = s(function(e) {
                return e.innerHTML = "<div class='a'></div><div class='a i'></div>",
                e.firstChild.className = "i",
                e.getElementsByClassName("i").length === 2
            }),
            x.getById = s(function(e) {
                return D.appendChild(e).id = I,
                !t.getElementsByName || !t.getElementsByName(I).length
            }),
            x.getById ? (N.find.ID = function(e, t) {
                if (typeof t.getElementById !== J && P) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            },
            N.filter.ID = function(e) {
                var t = e.replace(xt, Tt);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete N.find.ID, N.filter.ID = function(e) {
                var t = e.replace(xt, Tt);
                return function(e) {
                    var n = typeof e.getAttributeNode !== J && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }),
            N.find.TAG = x.getElementsByTagName ?
            function(e, t) {
                if (typeof t.getElementsByTagName !== J) return t.getElementsByTagName(e)
            }: function(e, t) {
                var n, r = [],
                i = 0,
                s = t.getElementsByTagName(e);
                if (e === "*") {
                    while (n = s[i++]) n.nodeType === 1 && r.push(n);
                    return r
                }
                return s
            },
            N.find.CLASS = x.getElementsByClassName &&
            function(e, t) {
                if (typeof t.getElementsByClassName !== J && P) return t.getElementsByClassName(e)
            },
            B = [],
            H = [];
            if (x.qsa = yt.test(t.querySelectorAll)) s(function(e) {
                e.innerHTML = "<select><option selected=''></option></select>",
                e.querySelectorAll("[selected]").length || H.push("\\[" + it + "*(?:value|" + rt + ")"),
                e.querySelectorAll(":checked").length || H.push(":checked")
            }),
            s(function(e) {
                var n = t.createElement("input");
                n.setAttribute("type", "hidden"),
                e.appendChild(n).setAttribute("t", ""),
                e.querySelectorAll("[t^='']").length && H.push("[*^$]=" + it + "*(?:''|\"\")"),
                e.querySelectorAll(":enabled").length || H.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                H.push(",.*:")
            });
            return (x.matchesSelector = yt.test(j = D.webkitMatchesSelector || D.mozMatchesSelector || D.oMatchesSelector || D.msMatchesSelector)) && s(function(e) {
                x.disconnectedMatch = j.call(e, "div"),
                j.call(e, "[s!='']:x"),
                B.push("!=", at)
            }),
            H = H.length && new RegExp(H.join("|")),
            B = B.length && new RegExp(B.join("|")),
            F = yt.test(D.contains) || D.compareDocumentPosition ?
            function(e, t) {
                var n = e.nodeType === 9 ? e.documentElement: e,
                r = t && t.parentNode;
                return e === r || !!r && r.nodeType === 1 && !!(n.contains ? n.contains(r) : e.compareDocumentPosition && e.compareDocumentPosition(r) & 16)
            }: function(e, t) {
                if (t) while (t = t.parentNode) if (t === e) return ! 0;
                return ! 1
            },
            $ = D.compareDocumentPosition ?
            function(e, n) {
                if (e === n) return V = !0,
                0;
                var r = n.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(n);
                return r ? r & 1 || !x.sortDetached && n.compareDocumentPosition(e) === r ? e === t || F(q, e) ? -1 : n === t || F(q, n) ? 1 : O ? nt.call(O, e) - nt.call(O, n) : 0 : r & 4 ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
            }: function(e, n) {
                var r, i = 0,
                s = e.parentNode,
                o = n.parentNode,
                a = [e],
                f = [n];
                if (e === n) return V = !0,
                0;
                if (!s || !o) return e === t ? -1 : n === t ? 1 : s ? -1 : o ? 1 : O ? nt.call(O, e) - nt.call(O, n) : 0;
                if (s === o) return u(e, n);
                r = e;
                while (r = r.parentNode) a.unshift(r);
                r = n;
                while (r = r.parentNode) f.unshift(r);
                while (a[i] === f[i]) i++;
                return i ? u(a[i], f[i]) : a[i] === q ? -1 : f[i] === q ? 1 : 0
            },
            t
        },
        n.matches = function(e, t) {
            return n(e, null, null, t)
        },
        n.matchesSelector = function(e, t) { (e.ownerDocument || e) !== _ && M(e),
            t = t.replace(dt, "='$1']");
            if (x.matchesSelector && P && (!B || !B.test(t)) && (!H || !H.test(t))) try {
                var r = j.call(e, t);
                if (r || x.disconnectedMatch || e.document && e.document.nodeType !== 11) return r
            } catch(i) {}
            return n(t, _, null, [e]).length > 0
        },
        n.contains = function(e, t) {
            return (e.ownerDocument || e) !== _ && M(e),
            F(e, t)
        },
        n.attr = function(e, n) { (e.ownerDocument || e) !== _ && M(e);
            var r = N.attrHandle[n.toLowerCase()],
            i = r && Q.call(N.attrHandle, n.toLowerCase()) ? r(e, n, !P) : t;
            return i === t ? x.attributes || !P ? e.getAttribute(n) : (i = e.getAttributeNode(n)) && i.specified ? i.value: null: i
        },
        n.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        },
        n.uniqueSort = function(e) {
            var t, n = [],
            r = 0,
            i = 0;
            V = !x.detectDuplicates,
            O = !x.sortStable && e.slice(0),
            e.sort($);
            if (V) {
                while (t = e[i++]) t === e[i] && (r = n.push(i));
                while (r--) e.splice(n[r], 1)
            }
            return e
        },
        C = n.getText = function(e) {
            var t, n = "",
            r = 0,
            i = e.nodeType;
            if (!i) for (; t = e[r]; r++) n += C(t);
            else if (i === 1 || i === 9 || i === 11) {
                if (typeof e.textContent == "string") return e.textContent;
                for (e = e.firstChild; e; e = e.nextSibling) n += C(e)
            } else if (i === 3 || i === 4) return e.nodeValue;
            return n
        },
        N = n.selectors = {
            cacheLength: 50,
            createPseudo: i,
            match: gt,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(xt, Tt),
                    e[3] = (e[4] || e[5] || "").replace(xt, Tt),
                    e[2] === "~=" && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    e[1].slice(0, 3) === "nth" ? (e[3] || n.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * (e[3] === "even" || e[3] === "odd")), e[5] = +(e[7] + e[8] || e[3] === "odd")) : e[3] && n.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var n, r = !e[5] && e[2];
                    return gt.CHILD.test(e[0]) ? null: (e[3] && e[4] !== t ? e[2] = e[4] : r && vt.test(r) && (n = h(r, !0)) && (n = r.indexOf(")", r.length - n) - r.length) && (e[0] = e[0].slice(0, n), e[2] = r.slice(0, n)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(xt, Tt).toLowerCase();
                    return e === "*" ?
                    function() {
                        return ! 0
                    }: function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = z[e + " "];
                    return t || (t = new RegExp("(^|" + it + ")" + e + "(" + it + "|$)")) && z(e,
                    function(e) {
                        return t.test(typeof e.className == "string" && e.className || typeof e.getAttribute !== J && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, t, r) {
                    return function(i) {
                        var s = n.attr(i, e);
                        return s == null ? t === "!=": t ? (s += "", t === "=" ? s === r: t === "!=" ? s !== r: t === "^=" ? r && s.indexOf(r) === 0 : t === "*=" ? r && s.indexOf(r) > -1 : t === "$=" ? r && s.slice( - r.length) === r: t === "~=" ? (" " + s + " ").indexOf(r) > -1 : t === "|=" ? s === r || s.slice(0, r.length + 1) === r + "-": !1) : !0
                    }
                },
                CHILD: function(e, t, n, r, i) {
                    var s = e.slice(0, 3) !== "nth",
                    o = e.slice( - 4) !== "last",
                    u = t === "of-type";
                    return r === 1 && i === 0 ?
                    function(e) {
                        return !! e.parentNode
                    }: function(t, n, a) {
                        var f, l, c, h, p, d, v = s !== o ? "nextSibling": "previousSibling",
                        m = t.parentNode,
                        g = u && t.nodeName.toLowerCase(),
                        y = !a && !u;
                        if (m) {
                            if (s) {
                                while (v) {
                                    c = t;
                                    while (c = c[v]) if (u ? c.nodeName.toLowerCase() === g: c.nodeType === 1) return ! 1;
                                    d = v = e === "only" && !d && "nextSibling"
                                }
                                return ! 0
                            }
                            d = [o ? m.firstChild: m.lastChild];
                            if (o && y) {
                                l = m[I] || (m[I] = {}),
                                f = l[e] || [],
                                p = f[0] === R && f[1],
                                h = f[0] === R && f[2],
                                c = p && m.childNodes[p];
                                while (c = ++p && c && c[v] || (h = p = 0) || d.pop()) if (c.nodeType === 1 && ++h && c === t) {
                                    l[e] = [R, p, h];
                                    break
                                }
                            } else if (y && (f = (t[I] || (t[I] = {}))[e]) && f[0] === R) h = f[1];
                            else while (c = ++p && c && c[v] || (h = p = 0) || d.pop()) if ((u ? c.nodeName.toLowerCase() === g: c.nodeType === 1) && ++h) {
                                y && ((c[I] || (c[I] = {}))[e] = [R, h]);
                                if (c === t) break
                            }
                            return h -= i,
                            h === r || h % r === 0 && h / r >= 0
                        }
                    }
                },
                PSEUDO: function(e, t) {
                    var r, s = N.pseudos[e] || N.setFilters[e.toLowerCase()] || n.error("unsupported pseudo: " + e);
                    return s[I] ? s(t) : s.length > 1 ? (r = [e, e, "", t], N.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, n) {
                        var r, i = s(e, t),
                        o = i.length;
                        while (o--) r = nt.call(e, i[o]),
                        e[r] = !(n[r] = i[o])
                    }) : function(e) {
                        return s(e, 0, r)
                    }) : s
                }
            },
            pseudos: {
                not: i(function(e) {
                    var t = [],
                    n = [],
                    r = L(e.replace(ft, "$1"));
                    return r[I] ? i(function(e, t, n, i) {
                        var s, o = r(e, null, i, []),
                        u = e.length;
                        while (u--) if (s = o[u]) e[u] = !(t[u] = s)
                    }) : function(e, i, s) {
                        return t[0] = e,
                        r(t, null, s, n),
                        !n.pop()
                    }
                }),
                has: i(function(e) {
                    return function(t) {
                        return n(e, t).length > 0
                    }
                }),
                contains: i(function(e) {
                    return function(t) {
                        return (t.textContent || t.innerText || C(t)).indexOf(e) > -1
                    }
                }),
                lang: i(function(e) {
                    return mt.test(e || "") || n.error("unsupported lang: " + e),
                    e = e.replace(xt, Tt).toLowerCase(),
                    function(t) {
                        var n;
                        do
                        if (n = P ? t.lang: t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(),
                        n === e || n.indexOf(e + "-") === 0;
                        while ((t = t.parentNode) && t.nodeType === 1);
                        return ! 1
                    }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === D
                },
                focus: function(e) {
                    return e === _.activeElement && (!_.hasFocus || _.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return e.disabled === !1
                },
                disabled: function(e) {
                    return e.disabled === !0
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return t === "input" && !!e.checked || t === "option" && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    e.selected === !0
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeName > "@" || e.nodeType === 3 || e.nodeType === 4) return ! 1;
                    return ! 0
                },
                parent: function(e) {
                    return ! N.pseudos.empty(e)
                },
                header: function(e) {
                    return Et.test(e.nodeName)
                },
                input: function(e) {
                    return wt.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return t === "input" && e.type === "button" || t === "button"
                },
                text: function(e) {
                    var t;
                    return e.nodeName.toLowerCase() === "input" && e.type === "text" && ((t = e.getAttribute("type")) == null || t.toLowerCase() === e.type)
                },
                first: l(function() {
                    return [0]
                }),
                last: l(function(e, t) {
                    return [t - 1]
                }),
                eq: l(function(e, t, n) {
                    return [n < 0 ? n + t: n]
                }),
                even: l(function(e, t) {
                    var n = 0;
                    for (; n < t; n += 2) e.push(n);
                    return e
                }),
                odd: l(function(e, t) {
                    var n = 1;
                    for (; n < t; n += 2) e.push(n);
                    return e
                }),
                lt: l(function(e, t, n) {
                    var r = n < 0 ? n + t: n;
                    for (; --r >= 0;) e.push(r);
                    return e
                }),
                gt: l(function(e, t, n) {
                    var r = n < 0 ? n + t: n;
                    for (; ++r < t;) e.push(r);
                    return e
                })
            }
        },
        N.pseudos.nth = N.pseudos.eq;
        for (S in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) N.pseudos[S] = a(S);
        for (S in {
            submit: !0,
            reset: !0
        }) N.pseudos[S] = f(S);
        c.prototype = N.filters = N.pseudos,
        N.setFilters = new c,
        L = n.compile = function(e, t) {
            var n, r = [],
            i = [],
            s = X[e + " "];
            if (!s) {
                t || (t = h(e)),
                n = t.length;
                while (n--) s = y(t[n]),
                s[I] ? r.push(s) : i.push(s);
                s = X(e, b(i, r))
            }
            return s
        },
        x.sortStable = I.split("").sort($).join("") === I,
        x.detectDuplicates = V,
        M(),
        x.sortDetached = s(function(e) {
            return e.compareDocumentPosition(_.createElement("div")) & 1
        }),
        s(function(e) {
            return e.innerHTML = "<a href='#'></a>",
            e.firstChild.getAttribute("href") === "#"
        }) || o("type|href|height|width",
        function(e, t, n) {
            if (!n) return e.getAttribute(t, t.toLowerCase() === "type" ? 1 : 2)
        }),
        (!x.attributes || !s(function(e) {
            return e.innerHTML = "<input/>",
            e.firstChild.setAttribute("value", ""),
            e.firstChild.getAttribute("value") === ""
        })) && o("value",
        function(e, t, n) {
            if (!n && e.nodeName.toLowerCase() === "input") return e.defaultValue
        }),
        s(function(e) {
            return e.getAttribute("disabled") == null
        }) || o(rt,
        function(e, t, n) {
            var r;
            if (!n) return (r = e.getAttributeNode(t)) && r.specified ? r.value: e[t] === !0 ? t.toLowerCase() : null
        }),
        lt.find = n,
        lt.expr = n.selectors,
        lt.expr[":"] = lt.expr.pseudos,
        lt.unique = n.uniqueSort,
        lt.text = n.getText,
        lt.isXMLDoc = n.isXML,
        lt.contains = n.contains
    } (e);
    var Nt = {};
    lt.Callbacks = function(e) {
        e = typeof e == "string" ? Nt[e] || r(e) : lt.extend({},
        e);
        var n, i, s, o, u, a, f = [],
        l = !e.once && [],
        c = function(t) {
            i = e.memory && t,
            s = !0,
            u = a || 0,
            a = 0,
            o = f.length,
            n = !0;
            for (; f && u < o; u++) if (f[u].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                i = !1;
                break
            }
            n = !1,
            f && (l ? l.length && c(l.shift()) : i ? f = [] : h.disable())
        },
        h = {
            add: function() {
                if (f) {
                    var t = f.length; (function r(t) {
                        lt.each(t,
                        function(t, n) {
                            var i = lt.type(n);
                            i === "function" ? (!e.unique || !h.has(n)) && f.push(n) : n && n.length && i !== "string" && r(n)
                        })
                    })(arguments),
                    n ? o = f.length: i && (a = t, c(i))
                }
                return this
            },
            remove: function() {
                return f && lt.each(arguments,
                function(e, t) {
                    var r;
                    while ((r = lt.inArray(t, f, r)) > -1) f.splice(r, 1),
                    n && (r <= o && o--, r <= u && u--)
                }),
                this
            },
            has: function(e) {
                return e ? lt.inArray(e, f) > -1 : !!f && !!f.length
            },
            empty: function() {
                return f = [],
                o = 0,
                this
            },
            disable: function() {
                return f = l = i = t,
                this
            },
            disabled: function() {
                return ! f
            },
            lock: function() {
                return l = t,
                i || h.disable(),
                this
            },
            locked: function() {
                return ! l
            },
            fireWith: function(e, t) {
                return f && (!s || l) && (t = t || [], t = [e, t.slice ? t.slice() : t], n ? l.push(t) : c(t)),
                this
            },
            fire: function() {
                return h.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !! s
            }
        };
        return h
    },
    lt.extend({
        Deferred: function(e) {
            var t = [["resolve", "done", lt.Callbacks("once memory"), "resolved"], ["reject", "fail", lt.Callbacks("once memory"), "rejected"], ["notify", "progress", lt.Callbacks("memory")]],
            n = "pending",
            r = {
                state: function() {
                    return n
                },
                always: function() {
                    return i.done(arguments).fail(arguments),
                    this
                },
                then: function() {
                    var e = arguments;
                    return lt.Deferred(function(n) {
                        lt.each(t,
                        function(t, s) {
                            var o = s[0],
                            u = lt.isFunction(e[t]) && e[t];
                            i[s[1]](function() {
                                var e = u && u.apply(this, arguments);
                                e && lt.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o + "With"](this === r ? n.promise() : this, u ? [e] : arguments)
                            })
                        }),
                        e = null
                    }).promise()
                },
                promise: function(e) {
                    return e != null ? lt.extend(e, r) : r
                }
            },
            i = {};
            return r.pipe = r.then,
            lt.each(t,
            function(e, s) {
                var o = s[2],
                u = s[3];
                r[s[1]] = o.add,
                u && o.add(function() {
                    n = u
                },
                t[e ^ 1][2].disable, t[2][2].lock),
                i[s[0]] = function() {
                    return i[s[0] + "With"](this === i ? r: this, arguments),
                    this
                },
                i[s[0] + "With"] = o.fireWith
            }),
            r.promise(i),
            e && e.call(i, i),
            i
        },
        when: function(e) {
            var t = 0,
            n = st.call(arguments),
            r = n.length,
            i = r !== 1 || e && lt.isFunction(e.promise) ? r: 0,
            s = i === 1 ? e: lt.Deferred(),
            o = function(e, t, n) {
                return function(r) {
                    t[e] = this,
                    n[e] = arguments.length > 1 ? st.call(arguments) : r,
                    n === u ? s.notifyWith(t, n) : --i || s.resolveWith(t, n)
                }
            },
            u,
            a,
            f;
            if (r > 1) {
                u = new Array(r),
                a = new Array(r),
                f = new Array(r);
                for (; t < r; t++) n[t] && lt.isFunction(n[t].promise) ? n[t].promise().done(o(t, f, n)).fail(s.reject).progress(o(t, a, u)) : --i
            }
            return i || s.resolveWith(f, n),
            s.promise()
        }
    }),
    lt.support = function(t) {
        var n, r, i, s, o, u, a, f, l, c = Q.createElement("div");
        c.setAttribute("className", "t"),
        c.innerHTML = "  <link/><table></table><a href='http://www.58yiji.com/a'>a</a><input type='checkbox'/>",
        n = c.getElementsByTagName("*") || [],
        r = c.getElementsByTagName("a")[0];
        if (!r || !r.style || !n.length) return t;
        s = Q.createElement("select"),
        u = s.appendChild(Q.createElement("option")),
        i = c.getElementsByTagName("input")[0],
        r.style.cssText = "top:1px;float:left;opacity:.5",
        t.getSetAttribute = c.className !== "t",
        t.leadingWhitespace = c.firstChild.nodeType === 3,
        t.tbody = !c.getElementsByTagName("tbody").length,
        t.htmlSerialize = !!c.getElementsByTagName("link").length,
        t.style = /top/.test(r.getAttribute("style")),
        t.hrefNormalized = r.getAttribute("href") === "/a",
        t.opacity = /^0.5/.test(r.style.opacity),
        t.cssFloat = !!r.style.cssFloat,
        t.checkOn = !!i.value,
        t.optSelected = u.selected,
        t.enctype = !!Q.createElement("form").enctype,
        t.html5Clone = Q.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>",
        t.inlineBlockNeedsLayout = !1,
        t.shrinkWrapBlocks = !1,
        t.pixelPosition = !1,
        t.deleteExpando = !0,
        t.noCloneEvent = !0,
        t.reliableMarginRight = !0,
        t.boxSizingReliable = !0,
        i.checked = !0,
        t.noCloneChecked = i.cloneNode(!0).checked,
        s.disabled = !0,
        t.optDisabled = !u.disabled;
        try {
            delete c.test
        } catch(h) {
            t.deleteExpando = !1
        }
        i = Q.createElement("input"),
        i.setAttribute("value", ""),
        t.input = i.getAttribute("value") === "",
        i.value = "t",
        i.setAttribute("type", "radio"),
        t.radioValue = i.value === "t",
        i.setAttribute("checked", "t"),
        i.setAttribute("name", "t"),
        o = Q.createDocumentFragment(),
        o.appendChild(i),
        t.appendChecked = i.checked,
        t.checkClone = o.cloneNode(!0).cloneNode(!0).lastChild.checked,
        c.attachEvent && (c.attachEvent("onclick",
        function() {
            t.noCloneEvent = !1
        }), c.cloneNode(!0).click());
        for (l in {
            submit: !0,
            change: !0,
            focusin: !0
        }) c.setAttribute(a = "on" + l, "t"),
        t[l + "Bubbles"] = a in e || c.attributes[a].expando === !1;
        c.style.backgroundClip = "content-box",
        c.cloneNode(!0).style.backgroundClip = "",
        t.clearCloneStyle = c.style.backgroundClip === "content-box";
        for (l in lt(t)) break;
        return t.ownLast = l !== "0",
        lt(function() {
            var n, r, i, s = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
            o = Q.getElementsByTagName("body")[0];
            if (!o) return;
            n = Q.createElement("div"),
            n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",
            o.appendChild(n).appendChild(c),
            c.innerHTML = "<table><tr><td></td><td>t</td></tr></table>",
            i = c.getElementsByTagName("td"),
            i[0].style.cssText = "padding:0;margin:0;border:0;display:none",
            f = i[0].offsetHeight === 0,
            i[0].style.display = "",
            i[1].style.display = "none",
            t.reliableHiddenOffsets = f && i[0].offsetHeight === 0,
            c.innerHTML = "",
            c.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",
            lt.swap(o, o.style.zoom != null ? {
                zoom: 1
            }: {},
            function() {
                t.boxSizing = c.offsetWidth === 4
            }),
            e.getComputedStyle && (t.pixelPosition = (e.getComputedStyle(c, null) || {}).top !== "1%", t.boxSizingReliable = (e.getComputedStyle(c, null) || {
                width: "4px"
            }).width === "4px", r = c.appendChild(Q.createElement("div")), r.style.cssText = c.style.cssText = s, r.style.marginRight = r.style.width = "0", c.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)),
            typeof c.style.zoom !== J && (c.innerHTML = "", c.style.cssText = s + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = c.offsetWidth === 3, c.style.display = "block", c.innerHTML = "<div></div>", c.firstChild.style.width = "5px", t.shrinkWrapBlocks = c.offsetWidth !== 3, t.inlineBlockNeedsLayout && (o.style.zoom = 1)),
            o.removeChild(n),
            n = c = i = r = null
        }),
        n = s = o = u = r = i = null,
        t
    } ({});
    var Ct = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
    kt = /([A-Z])/g;
    lt.extend({
        cache: {},
        noData: {
            applet: !0,
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(e) {
            return e = e.nodeType ? lt.cache[e[lt.expando]] : e[lt.expando],
            !!e && !u(e)
        },
        data: function(e, t, n) {
            return i(e, t, n)
        },
        removeData: function(e, t) {
            return s(e, t)
        },
        _data: function(e, t, n) {
            return i(e, t, n, !0)
        },
        _removeData: function(e, t) {
            return s(e, t, !0)
        },
        acceptData: function(e) {
            if (e.nodeType && e.nodeType !== 1 && e.nodeType !== 9) return ! 1;
            var t = e.nodeName && lt.noData[e.nodeName.toLowerCase()];
            return ! t || t !== !0 && e.getAttribute("classid") === t
        }
    }),
    lt.fn.extend({
        data: function(e, n) {
            var r, i, s = null,
            u = 0,
            a = this[0];
            if (e === t) {
                if (this.length) {
                    s = lt.data(a);
                    if (a.nodeType === 1 && !lt._data(a, "parsedAttrs")) {
                        r = a.attributes;
                        for (; u < r.length; u++) i = r[u].name,
                        i.indexOf("data-") === 0 && (i = lt.camelCase(i.slice(5)), o(a, i, s[i]));
                        lt._data(a, "parsedAttrs", !0)
                    }
                }
                return s
            }
            return typeof e == "object" ? this.each(function() {
                lt.data(this, e)
            }) : arguments.length > 1 ? this.each(function() {
                lt.data(this, e, n)
            }) : a ? o(a, e, lt.data(a, e)) : null
        },
        removeData: function(e) {
            return this.each(function() {
                lt.removeData(this, e)
            })
        }
    }),
    lt.extend({
        queue: function(e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue",
            r = lt._data(e, t),
            n && (!r || lt.isArray(n) ? r = lt._data(e, t, lt.makeArray(n)) : r.push(n)),
            r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = lt.queue(e, t),
            r = n.length,
            i = n.shift(),
            s = lt._queueHooks(e, t),
            o = function() {
                lt.dequeue(e, t)
            };
            i === "inprogress" && (i = n.shift(), r--),
            i && (t === "fx" && n.unshift("inprogress"), delete s.stop, i.call(e, o, s)),
            !r && s && s.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return lt._data(e, n) || lt._data(e, n, {
                empty: lt.Callbacks("once memory").add(function() {
                    lt._removeData(e, t + "queue"),
                    lt._removeData(e, n)
                })
            })
        }
    }),
    lt.fn.extend({
        queue: function(e, n) {
            var r = 2;
            return typeof e != "string" && (n = e, e = "fx", r--),
            arguments.length < r ? lt.queue(this[0], e) : n === t ? this: this.each(function() {
                var t = lt.queue(this, e, n);
                lt._queueHooks(this, e),
                e === "fx" && t[0] !== "inprogress" && lt.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                lt.dequeue(this, e)
            })
        },
        delay: function(e, t) {
            return e = lt.fx ? lt.fx.speeds[e] || e: e,
            t = t || "fx",
            this.queue(t,
            function(t, n) {
                var r = setTimeout(t, e);
                n.stop = function() {
                    clearTimeout(r)
                }
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, n) {
            var r, i = 1,
            s = lt.Deferred(),
            o = this,
            u = this.length,
            a = function() {--i || s.resolveWith(o, [o])
            };
            typeof e != "string" && (n = e, e = t),
            e = e || "fx";
            while (u--) r = lt._data(o[u], e + "queueHooks"),
            r && r.empty && (i++, r.empty.add(a));
            return a(),
            s.promise(n)
        }
    });
    var Lt, At, Ot = /[\t\r\n\f]/g,
    Mt = /\r/g,
    _t = /^(?:input|select|textarea|button|object)$/i,
    Dt = /^(?:a|area)$/i,
    Pt = /^(?:checked|selected)$/i,
    Ht = lt.support.getSetAttribute,
    Bt = lt.support.input;
    lt.fn.extend({
        attr: function(e, t) {
            return lt.access(this, lt.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                lt.removeAttr(this, e)
            })
        },
        prop: function(e, t) {
            return lt.access(this, lt.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return e = lt.propFix[e] || e,
            this.each(function() {
                try {
                    this[e] = t,
                    delete this[e]
                } catch(n) {}
            })
        },
        addClass: function(e) {
            var t, n, r, i, s, o = 0,
            u = this.length,
            a = typeof e == "string" && e;
            if (lt.isFunction(e)) return this.each(function(t) {
                lt(this).addClass(e.call(this, t, this.className))
            });
            if (a) {
                t = (e || "").match(ht) || [];
                for (; o < u; o++) {
                    n = this[o],
                    r = n.nodeType === 1 && (n.className ? (" " + n.className + " ").replace(Ot, " ") : " ");
                    if (r) {
                        s = 0;
                        while (i = t[s++]) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                        n.className = lt.trim(r)
                    }
                }
            }
            return this
        },
        removeClass: function(e) {
            var t, n, r, i, s, o = 0,
            u = this.length,
            a = arguments.length === 0 || typeof e == "string" && e;
            if (lt.isFunction(e)) return this.each(function(t) {
                lt(this).removeClass(e.call(this, t, this.className))
            });
            if (a) {
                t = (e || "").match(ht) || [];
                for (; o < u; o++) {
                    n = this[o],
                    r = n.nodeType === 1 && (n.className ? (" " + n.className + " ").replace(Ot, " ") : "");
                    if (r) {
                        s = 0;
                        while (i = t[s++]) while (r.indexOf(" " + i + " ") >= 0) r = r.replace(" " + i + " ", " ");
                        n.className = e ? lt.trim(r) : ""
                    }
                }
            }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return typeof t == "boolean" && n === "string" ? t ? this.addClass(e) : this.removeClass(e) : lt.isFunction(e) ? this.each(function(n) {
                lt(this).toggleClass(e.call(this, n, this.className, t), t)
            }) : this.each(function() {
                if (n === "string") {
                    var t, r = 0,
                    i = lt(this),
                    s = e.match(ht) || [];
                    while (t = s[r++]) i.hasClass(t) ? i.removeClass(t) : i.addClass(t)
                } else if (n === J || n === "boolean") this.className && lt._data(this, "__className__", this.className),
                this.className = this.className || e === !1 ? "": lt._data(this, "__className__") || ""
            })
        },
        hasClass: function(e) {
            var t = " " + e + " ",
            n = 0,
            r = this.length;
            for (; n < r; n++) if (this[n].nodeType === 1 && (" " + this[n].className + " ").replace(Ot, " ").indexOf(t) >= 0) return ! 0;
            return ! 1
        },
        val: function(e) {
            var n, r, i, s = this[0];
            if (!arguments.length) {
                if (s) return r = lt.valHooks[s.type] || lt.valHooks[s.nodeName.toLowerCase()],
                r && "get" in r && (n = r.get(s, "value")) !== t ? n: (n = s.value, typeof n == "string" ? n.replace(Mt, "") : n == null ? "": n);
                return
            }
            return i = lt.isFunction(e),
            this.each(function(n) {
                var s;
                if (this.nodeType !== 1) return;
                i ? s = e.call(this, n, lt(this).val()) : s = e,
                s == null ? s = "": typeof s == "number" ? s += "": lt.isArray(s) && (s = lt.map(s,
                function(e) {
                    return e == null ? "": e + ""
                })),
                r = lt.valHooks[this.type] || lt.valHooks[this.nodeName.toLowerCase()];
                if (!r || !("set" in r) || r.set(this, s, "value") === t) this.value = s
            })
        }
    }),
    lt.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = lt.find.attr(e, "value");
                    return t != null ? t: e.text
                }
            },
            select: {
                get: function(e) {
                    var t, n, r = e.options,
                    i = e.selectedIndex,
                    s = e.type === "select-one" || i < 0,
                    o = s ? null: [],
                    u = s ? i + 1 : r.length,
                    a = i < 0 ? u: s ? i: 0;
                    for (; a < u; a++) {
                        n = r[a];
                        if ((n.selected || a === i) && (lt.support.optDisabled ? !n.disabled: n.getAttribute("disabled") === null) && (!n.parentNode.disabled || !lt.nodeName(n.parentNode, "optgroup"))) {
                            t = lt(n).val();
                            if (s) return t;
                            o.push(t)
                        }
                    }
                    return o
                },
                set: function(e, t) {
                    var n, r, i = e.options,
                    s = lt.makeArray(t),
                    o = i.length;
                    while (o--) {
                        r = i[o];
                        if (r.selected = lt.inArray(lt(r).val(), s) >= 0) n = !0
                    }
                    return n || (e.selectedIndex = -1),
                    s
                }
            }
        },
        attr: function(e, n, r) {
            var i, s, o = e.nodeType;
            if (!e || o === 3 || o === 8 || o === 2) return;
            if (typeof e.getAttribute === J) return lt.prop(e, n, r);
            if (o !== 1 || !lt.isXMLDoc(e)) n = n.toLowerCase(),
            i = lt.attrHooks[n] || (lt.expr.match.bool.test(n) ? At: Lt);
            if (r === t) return i && "get" in i && (s = i.get(e, n)) !== null ? s: (s = lt.find.attr(e, n), s == null ? t: s);
            if (r !== null) return i && "set" in i && (s = i.set(e, r, n)) !== t ? s: (e.setAttribute(n, r + ""), r);
            lt.removeAttr(e, n)
        },
        removeAttr: function(e, t) {
            var n, r, i = 0,
            s = t && t.match(ht);
            if (s && e.nodeType === 1) while (n = s[i++]) r = lt.propFix[n] || n,
            lt.expr.match.bool.test(n) ? Bt && Ht || !Pt.test(n) ? e[r] = !1 : e[lt.camelCase("default-" + n)] = e[r] = !1 : lt.attr(e, n, ""),
            e.removeAttribute(Ht ? n: r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!lt.support.radioValue && t === "radio" && lt.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                    }
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(e, n, r) {
            var i, s, o, u = e.nodeType;
            if (!e || u === 3 || u === 8 || u === 2) return;
            return o = u !== 1 || !lt.isXMLDoc(e),
            o && (n = lt.propFix[n] || n, s = lt.propHooks[n]),
            r !== t ? s && "set" in s && (i = s.set(e, r, n)) !== t ? i: e[n] = r: s && "get" in s && (i = s.get(e, n)) !== null ? i: e[n]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = lt.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : _t.test(e.nodeName) || Dt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }
    }),
    At = {
        set: function(e, t, n) {
            return t === !1 ? lt.removeAttr(e, n) : Bt && Ht || !Pt.test(n) ? e.setAttribute(!Ht && lt.propFix[n] || n, n) : e[lt.camelCase("default-" + n)] = e[n] = !0,
            n
        }
    },
    lt.each(lt.expr.match.bool.source.match(/\w+/g),
    function(e, n) {
        var r = lt.expr.attrHandle[n] || lt.find.attr;
        lt.expr.attrHandle[n] = Bt && Ht || !Pt.test(n) ?
        function(e, n, i) {
            var s = lt.expr.attrHandle[n],
            o = i ? t: (lt.expr.attrHandle[n] = t) != r(e, n, i) ? n.toLowerCase() : null;
            return lt.expr.attrHandle[n] = s,
            o
        }: function(e, n, r) {
            return r ? t: e[lt.camelCase("default-" + n)] ? n.toLowerCase() : null
        }
    });
    if (!Bt || !Ht) lt.attrHooks.value = {
        set: function(e, t, n) {
            if (!lt.nodeName(e, "input")) return Lt && Lt.set(e, t, n);
            e.defaultValue = t
        }
    };
    Ht || (Lt = {
        set: function(e, n, r) {
            var i = e.getAttributeNode(r);
            return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(r)),
            i.value = n += "",
            r === "value" || n === e.getAttribute(r) ? n: t
        }
    },
    lt.expr.attrHandle.id = lt.expr.attrHandle.name = lt.expr.attrHandle.coords = function(e, n, r) {
        var i;
        return r ? t: (i = e.getAttributeNode(n)) && i.value !== "" ? i.value: null
    },
    lt.valHooks.button = {
        get: function(e, n) {
            var r = e.getAttributeNode(n);
            return r && r.specified ? r.value: t
        },
        set: Lt.set
    },
    lt.attrHooks.contenteditable = {
        set: function(e, t, n) {
            Lt.set(e, t === "" ? !1 : t, n)
        }
    },
    lt.each(["width", "height"],
    function(e, t) {
        lt.attrHooks[t] = {
            set: function(e, n) {
                if (n === "") return e.setAttribute(t, "auto"),
                n
            }
        }
    })),
    lt.support.hrefNormalized || lt.each(["href", "src"],
    function(e, t) {
        lt.propHooks[t] = {
            get: function(e) {
                return e.getAttribute(t, 4)
            }
        }
    }),
    lt.support.style || (lt.attrHooks.style = {
        get: function(e) {
            return e.style.cssText || t
        },
        set: function(e, t) {
            return e.style.cssText = t + ""
        }
    }),
    lt.support.optSelected || (lt.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex),
            null
        }
    }),
    lt.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"],
    function() {
        lt.propFix[this.toLowerCase()] = this
    }),
    lt.support.enctype || (lt.propFix.enctype = "encoding"),
    lt.each(["radio", "checkbox"],
    function() {
        lt.valHooks[this] = {
            set: function(e, t) {
                if (lt.isArray(t)) return e.checked = lt.inArray(lt(e).val(), t) >= 0
            }
        },
        lt.support.checkOn || (lt.valHooks[this].get = function(e) {
            return e.getAttribute("value") === null ? "on": e.value
        })
    });
    var jt = /^(?:input|select|textarea)$/i,
    Ft = /^key/,
    It = /^(?:mouse|contextmenu)|click/,
    qt = /^(?:focusinfocus|focusoutblur)$/,
    Rt = /^([^.]*)(?:\.(.+)|)$/;
    lt.event = {
        global: {},
        add: function(e, n, r, i, s) {
            var o, u, a, f, l, c, h, p, d, v, m, g = lt._data(e);
            if (!g) return;
            r.handler && (f = r, r = f.handler, s = f.selector),
            r.guid || (r.guid = lt.guid++),
            (u = g.events) || (u = g.events = {}),
            (c = g.handle) || (c = g.handle = function(e) {
                return typeof lt === J || !!e && lt.event.triggered === e.type ? t: lt.event.dispatch.apply(c.elem, arguments)
            },
            c.elem = e),
            n = (n || "").match(ht) || [""],
            a = n.length;
            while (a--) {
                o = Rt.exec(n[a]) || [],
                d = m = o[1],
                v = (o[2] || "").split(".").sort();
                if (!d) continue;
                l = lt.event.special[d] || {},
                d = (s ? l.delegateType: l.bindType) || d,
                l = lt.event.special[d] || {},
                h = lt.extend({
                    type: d,
                    origType: m,
                    data: i,
                    handler: r,
                    guid: r.guid,
                    selector: s,
                    needsContext: s && lt.expr.match.needsContext.test(s),
                    namespace: v.join(".")
                },
                f);
                if (! (p = u[d])) {
                    p = u[d] = [],
                    p.delegateCount = 0;
                    if (!l.setup || l.setup.call(e, i, v, c) === !1) e.addEventListener ? e.addEventListener(d, c, !1) : e.attachEvent && e.attachEvent("on" + d, c)
                }
                l.add && (l.add.call(e, h), h.handler.guid || (h.handler.guid = r.guid)),
                s ? p.splice(p.delegateCount++, 0, h) : p.push(h),
                lt.event.global[d] = !0
            }
            e = null
        },
        remove: function(e, t, n, r, i) {
            var s, o, u, a, f, l, c, h, p, d, v, m = lt.hasData(e) && lt._data(e);
            if (!m || !(l = m.events)) return;
            t = (t || "").match(ht) || [""],
            f = t.length;
            while (f--) {
                u = Rt.exec(t[f]) || [],
                p = v = u[1],
                d = (u[2] || "").split(".").sort();
                if (!p) {
                    for (p in l) lt.event.remove(e, p + t[f], n, r, !0);
                    continue
                }
                c = lt.event.special[p] || {},
                p = (r ? c.delegateType: c.bindType) || p,
                h = l[p] || [],
                u = u[2] && new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                a = s = h.length;
                while (s--) o = h[s],
                (i || v === o.origType) && (!n || n.guid === o.guid) && (!u || u.test(o.namespace)) && (!r || r === o.selector || r === "**" && o.selector) && (h.splice(s, 1), o.selector && h.delegateCount--, c.remove && c.remove.call(e, o));
                a && !h.length && ((!c.teardown || c.teardown.call(e, d, m.handle) === !1) && lt.removeEvent(e, p, m.handle), delete l[p])
            }
            lt.isEmptyObject(l) && (delete m.handle, lt._removeData(e, "events"))
        },
        trigger: function(n, r, i, s) {
            var o, u, a, f, l, c, h, p = [i || Q],
            d = at.call(n, "type") ? n.type: n,
            v = at.call(n, "namespace") ? n.namespace.split(".") : [];
            a = c = i = i || Q;
            if (i.nodeType === 3 || i.nodeType === 8) return;
            if (qt.test(d + lt.event.triggered)) return;
            d.indexOf(".") >= 0 && (v = d.split("."), d = v.shift(), v.sort()),
            u = d.indexOf(":") < 0 && "on" + d,
            n = n[lt.expando] ? n: new lt.Event(d, typeof n == "object" && n),
            n.isTrigger = s ? 2 : 3,
            n.namespace = v.join("."),
            n.namespace_re = n.namespace ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            n.result = t,
            n.target || (n.target = i),
            r = r == null ? [n] : lt.makeArray(r, [n]),
            l = lt.event.special[d] || {};
            if (!s && l.trigger && l.trigger.apply(i, r) === !1) return;
            if (!s && !l.noBubble && !lt.isWindow(i)) {
                f = l.delegateType || d,
                qt.test(f + d) || (a = a.parentNode);
                for (; a; a = a.parentNode) p.push(a),
                c = a;
                c === (i.ownerDocument || Q) && p.push(c.defaultView || c.parentWindow || e)
            }
            h = 0;
            while ((a = p[h++]) && !n.isPropagationStopped()) n.type = h > 1 ? f: l.bindType || d,
            o = (lt._data(a, "events") || {})[n.type] && lt._data(a, "handle"),
            o && o.apply(a, r),
            o = u && a[u],
            o && lt.acceptData(a) && o.apply && o.apply(a, r) === !1 && n.preventDefault();
            n.type = d;
            if (!s && !n.isDefaultPrevented() && (!l._default || l._default.apply(p.pop(), r) === !1) && lt.acceptData(i) && u && i[d] && !lt.isWindow(i)) {
                c = i[u],
                c && (i[u] = null),
                lt.event.triggered = d;
                try {
                    i[d]()
                } catch(m) {}
                lt.event.triggered = t,
                c && (i[u] = c)
            }
            return n.result
        },
        dispatch: function(e) {
            e = lt.event.fix(e);
            var n, r, i, s, o, u = [],
            a = st.call(arguments),
            f = (lt._data(this, "events") || {})[e.type] || [],
            l = lt.event.special[e.type] || {};
            a[0] = e,
            e.delegateTarget = this;
            if (l.preDispatch && l.preDispatch.call(this, e) === !1) return;
            u = lt.event.handlers.call(this, e, f),
            n = 0;
            while ((s = u[n++]) && !e.isPropagationStopped()) {
                e.currentTarget = s.elem,
                o = 0;
                while ((i = s.handlers[o++]) && !e.isImmediatePropagationStopped()) if (!e.namespace_re || e.namespace_re.test(i.namespace)) e.handleObj = i,
                e.data = i.data,
                r = ((lt.event.special[i.origType] || {}).handle || i.handler).apply(s.elem, a),
                r !== t && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation())
            }
            return l.postDispatch && l.postDispatch.call(this, e),
            e.result
        },
        handlers: function(e, n) {
            var r, i, s, o, u = [],
            a = n.delegateCount,
            f = e.target;
            if (a && f.nodeType && (!e.button || e.type !== "click")) for (; f != this; f = f.parentNode || this) if (f.nodeType === 1 && (f.disabled !== !0 || e.type !== "click")) {
                s = [];
                for (o = 0; o < a; o++) i = n[o],
                r = i.selector + " ",
                s[r] === t && (s[r] = i.needsContext ? lt(r, this).index(f) >= 0 : lt.find(r, this, null, [f]).length),
                s[r] && s.push(i);
                s.length && u.push({
                    elem: f,
                    handlers: s
                })
            }
            return a < n.length && u.push({
                elem: this,
                handlers: n.slice(a)
            }),
            u
        },
        fix: function(e) {
            if (e[lt.expando]) return e;
            var t, n, r, i = e.type,
            s = e,
            o = this.fixHooks[i];
            o || (this.fixHooks[i] = o = It.test(i) ? this.mouseHooks: Ft.test(i) ? this.keyHooks: {}),
            r = o.props ? this.props.concat(o.props) : this.props,
            e = new lt.Event(s),
            t = r.length;
            while (t--) n = r[t],
            e[n] = s[n];
            return e.target || (e.target = s.srcElement || Q),
            e.target.nodeType === 3 && (e.target = e.target.parentNode),
            e.metaKey = !!e.metaKey,
            o.filter ? o.filter(e, s) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return e.which == null && (e.which = t.charCode != null ? t.charCode: t.keyCode),
                e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, n) {
                var r, i, s, o = n.button,
                u = n.fromElement;
                return e.pageX == null && n.clientX != null && (i = e.target.ownerDocument || Q, s = i.documentElement, r = i.body, e.pageX = n.clientX + (s && s.scrollLeft || r && r.scrollLeft || 0) - (s && s.clientLeft || r && r.clientLeft || 0), e.pageY = n.clientY + (s && s.scrollTop || r && r.scrollTop || 0) - (s && s.clientTop || r && r.clientTop || 0)),
                !e.relatedTarget && u && (e.relatedTarget = u === e.target ? n.toElement: u),
                !e.which && o !== t && (e.which = o & 1 ? 1 : o & 2 ? 3 : o & 4 ? 2 : 0),
                e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== l() && this.focus) try {
                        return this.focus(),
                        !1
                    } catch(e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === l() && this.blur) return this.blur(),
                    !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if (lt.nodeName(this, "input") && this.type === "checkbox" && this.click) return this.click(),
                    !1
                },
                _default: function(e) {
                    return lt.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    e.result !== t && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n, r) {
            var i = lt.extend(new lt.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? lt.event.trigger(i, null, t) : lt.event.dispatch.call(t, i),
            i.isDefaultPrevented() && n.preventDefault()
        }
    },
    lt.removeEvent = Q.removeEventListener ?
    function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    }: function(e, t, n) {
        var r = "on" + t;
        e.detachEvent && (typeof e[r] === J && (e[r] = null), e.detachEvent(r, n))
    },
    lt.Event = function(e, t) {
        if (! (this instanceof lt.Event)) return new lt.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? a: f) : this.type = e,
        t && lt.extend(this, t),
        this.timeStamp = e && e.timeStamp || lt.now(),
        this[lt.expando] = !0
    },
    lt.Event.prototype = {
        isDefaultPrevented: f,
        isPropagationStopped: f,
        isImmediatePropagationStopped: f,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = a;
            if (!e) return;
            e.preventDefault ? e.preventDefault() : e.returnValue = !1
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = a;
            if (!e) return;
            e.stopPropagation && e.stopPropagation(),
            e.cancelBubble = !0
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = a,
            this.stopPropagation()
        }
    },
    lt.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    },
    function(e, t) {
        lt.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this,
                i = e.relatedTarget,
                s = e.handleObj;
                if (!i || i !== r && !lt.contains(r, i)) e.type = s.origType,
                n = s.handler.apply(this, arguments),
                e.type = t;
                return n
            }
        }
    }),
    lt.support.submitBubbles || (lt.event.special.submit = {
        setup: function() {
            if (lt.nodeName(this, "form")) return ! 1;
            lt.event.add(this, "click._submit keypress._submit",
            function(e) {
                var n = e.target,
                r = lt.nodeName(n, "input") || lt.nodeName(n, "button") ? n.form: t;
                r && !lt._data(r, "submitBubbles") && (lt.event.add(r, "submit._submit",
                function(e) {
                    e._submit_bubble = !0
                }), lt._data(r, "submitBubbles", !0))
            })
        },
        postDispatch: function(e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && lt.event.simulate("submit", this.parentNode, e, !0))
        },
        teardown: function() {
            if (lt.nodeName(this, "form")) return ! 1;
            lt.event.remove(this, "._submit")
        }
    }),
    lt.support.changeBubbles || (lt.event.special.change = {
        setup: function() {
            if (jt.test(this.nodeName)) {
                if (this.type === "checkbox" || this.type === "radio") lt.event.add(this, "propertychange._change",
                function(e) {
                    e.originalEvent.propertyName === "checked" && (this._just_changed = !0)
                }),
                lt.event.add(this, "click._change",
                function(e) {
                    this._just_changed && !e.isTrigger && (this._just_changed = !1),
                    lt.event.simulate("change", this, e, !0)
                });
                return ! 1
            }
            lt.event.add(this, "beforeactivate._change",
            function(e) {
                var t = e.target;
                jt.test(t.nodeName) && !lt._data(t, "changeBubbles") && (lt.event.add(t, "change._change",
                function(e) {
                    this.parentNode && !e.isSimulated && !e.isTrigger && lt.event.simulate("change", this.parentNode, e, !0)
                }), lt._data(t, "changeBubbles", !0))
            })
        },
        handle: function(e) {
            var t = e.target;
            if (this !== t || e.isSimulated || e.isTrigger || t.type !== "radio" && t.type !== "checkbox") return e.handleObj.handler.apply(this, arguments)
        },
        teardown: function() {
            return lt.event.remove(this, "._change"),
            !jt.test(this.nodeName)
        }
    }),
    lt.support.focusinBubbles || lt.each({
        focus: "focusin",
        blur: "focusout"
    },
    function(e, t) {
        var n = 0,
        r = function(e) {
            lt.event.simulate(t, e.target, lt.event.fix(e), !0)
        };
        lt.event.special[t] = {
            setup: function() {
                n++===0 && Q.addEventListener(e, r, !0)
            },
            teardown: function() {--n === 0 && Q.removeEventListener(e, r, !0)
            }
        }
    }),
    lt.fn.extend({
        on: function(e, n, r, i, s) {
            var o, u;
            if (typeof e == "object") {
                typeof n != "string" && (r = r || n, n = t);
                for (o in e) this.on(o, n, r, e[o], s);
                return this
            }
            r == null && i == null ? (i = n, r = n = t) : i == null && (typeof n == "string" ? (i = r, r = t) : (i = r, r = n, n = t));
            if (i === !1) i = f;
            else if (!i) return this;
            return s === 1 && (u = i, i = function(e) {
                return lt().off(e),
                u.apply(this, arguments)
            },
            i.guid = u.guid || (u.guid = lt.guid++)),
            this.each(function() {
                lt.event.add(this, e, i, r, n)
            })
        },
        one: function(e, t, n, r) {
            return this.on(e, t, n, r, 1)
        },
        off: function(e, n, r) {
            var i, s;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj,
            lt(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace: i.origType, i.selector, i.handler),
            this;
            if (typeof e == "object") {
                for (s in e) this.off(s, n, e[s]);
                return this
            }
            if (n === !1 || typeof n == "function") r = n,
            n = t;
            return r === !1 && (r = f),
            this.each(function() {
                lt.event.remove(this, e, r, n)
            })
        },
        trigger: function(e, t) {
            return this.each(function() {
                lt.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return lt.event.trigger(e, t, n, !0)
        }
    });
    var Ut = /^.[^:#\[\.,]*$/,
    zt = /^(?:parents|prev(?:Until|All))/,
    Wt = lt.expr.match.needsContext,
    Xt = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    lt.fn.extend({
        find: function(e) {
            var t, n = [],
            r = this,
            i = r.length;
            if (typeof e != "string") return this.pushStack(lt(e).filter(function() {
                for (t = 0; t < i; t++) if (lt.contains(r[t], this)) return ! 0
            }));
            for (t = 0; t < i; t++) lt.find(e, r[t], n);
            return n = this.pushStack(i > 1 ? lt.unique(n) : n),
            n.selector = this.selector ? this.selector + " " + e: e,
            n
        },
        has: function(e) {
            var t, n = lt(e, this),
            r = n.length;
            return this.filter(function() {
                for (t = 0; t < r; t++) if (lt.contains(this, n[t])) return ! 0
            })
        },
        not: function(e) {
            return this.pushStack(h(this, e || [], !0))
        },
        filter: function(e) {
            return this.pushStack(h(this, e || [], !1))
        },
        is: function(e) {
            return !! h(this, typeof e == "string" && Wt.test(e) ? lt(e) : e || [], !1).length
        },
        closest: function(e, t) {
            var n, r = 0,
            i = this.length,
            s = [],
            o = Wt.test(e) || typeof e != "string" ? lt(e, t || this.context) : 0;
            for (; r < i; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (o ? o.index(n) > -1 : n.nodeType === 1 && lt.find.matchesSelector(n, e))) {
                n = s.push(n);
                break
            }
            return this.pushStack(s.length > 1 ? lt.unique(s) : s)
        },
        index: function(e) {
            return e ? typeof e == "string" ? lt.inArray(this[0], lt(e)) : lt.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length: -1
        },
        add: function(e, t) {
            var n = typeof e == "string" ? lt(e, t) : lt.makeArray(e && e.nodeType ? [e] : e),
            r = lt.merge(this.get(), n);
            return this.pushStack(lt.unique(r))
        },
        addBack: function(e) {
            return this.add(e == null ? this.prevObject: this.prevObject.filter(e))
        }
    }),
    lt.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && t.nodeType !== 11 ? t: null
        },
        parents: function(e) {
            return lt.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return lt.dir(e, "parentNode", n)
        },
        next: function(e) {
            return c(e, "nextSibling")
        },
        prev: function(e) {
            return c(e, "previousSibling")
        },
        nextAll: function(e) {
            return lt.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return lt.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return lt.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return lt.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return lt.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return lt.sibling(e.firstChild)
        },
        contents: function(e) {
            return lt.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document: lt.merge([], e.childNodes)
        }
    },
    function(e, t) {
        lt.fn[e] = function(n, r) {
            var i = lt.map(this, t, n);
            return e.slice( - 5) !== "Until" && (r = n),
            r && typeof r == "string" && (i = lt.filter(r, i)),
            this.length > 1 && (Xt[e] || (i = lt.unique(i)), zt.test(e) && (i = i.reverse())),
            this.pushStack(i)
        }
    }),
    lt.extend({
        filter: function(e, t, n) {
            var r = t[0];
            return n && (e = ":not(" + e + ")"),
            t.length === 1 && r.nodeType === 1 ? lt.find.matchesSelector(r, e) ? [r] : [] : lt.find.matches(e, lt.grep(t,
            function(e) {
                return e.nodeType === 1
            }))
        },
        dir: function(e, n, r) {
            var i = [],
            s = e[n];
            while (s && s.nodeType !== 9 && (r === t || s.nodeType !== 1 || !lt(s).is(r))) s.nodeType === 1 && i.push(s),
            s = s[n];
            return i
        },
        sibling: function(e, t) {
            var n = [];
            for (; e; e = e.nextSibling) e.nodeType === 1 && e !== t && n.push(e);
            return n
        }
    });
    var Vt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
    $t = / jQuery\d+="(?:null|\d+)"/g,
    Jt = new RegExp("<(?:" + Vt + ")[\\s/>]", "i"),
    Kt = /^\s+/,
    Qt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    Gt = /<([\w:]+)/,
    Yt = /<tbody/i,
    Zt = /<|&#?\w+;/,
    en = /<(?:script|style|link)/i,
    tn = /^(?:checkbox|radio)$/i,
    nn = /checked\s*(?:[^=]|=\s*.checked.)/i,
    rn = /^$|\/(?:java|ecma)script/i,
    sn = /^true\/(.*)/,
    on = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
    un = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: lt.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    },
    an = p(Q),
    fn = an.appendChild(Q.createElement("div"));
    un.optgroup = un.option,
    un.tbody = un.tfoot = un.colgroup = un.caption = un.thead,
    un.th = un.td,
    lt.fn.extend({
        text: function(e) {
            return lt.access(this,
            function(e) {
                return e === t ? lt.text(this) : this.empty().append((this[0] && this[0].ownerDocument || Q).createTextNode(e))
            },
            null, e, arguments.length)
        },
        append: function() {
            return this.domManip(arguments,
            function(e) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var t = d(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments,
            function(e) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var t = d(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments,
            function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return this.domManip(arguments,
            function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function(e, t) {
            var n, r = e ? lt.filter(e, this) : this,
            i = 0;
            for (; (n = r[i]) != null; i++) ! t && n.nodeType === 1 && lt.cleanData(w(n)),
            n.parentNode && (t && lt.contains(n.ownerDocument, n) && g(w(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            var e, t = 0;
            for (; (e = this[t]) != null; t++) {
                e.nodeType === 1 && lt.cleanData(w(e, !1));
                while (e.firstChild) e.removeChild(e.firstChild);
                e.options && lt.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function(e, t) {
            return e = e == null ? !1 : e,
            t = t == null ? e: t,
            this.map(function() {
                return lt.clone(this, e, t)
            })
        },
        html: function(e) {
            return lt.access(this,
            function(e) {
                var n = this[0] || {},
                r = 0,
                i = this.length;
                if (e === t) return n.nodeType === 1 ? n.innerHTML.replace($t, "") : t;
                if (typeof e == "string" && !en.test(e) && (lt.support.htmlSerialize || !Jt.test(e)) && (lt.support.leadingWhitespace || !Kt.test(e)) && !un[(Gt.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = e.replace(Qt, "<$1></$2>");
                    try {
                        for (; r < i; r++) n = this[r] || {},
                        n.nodeType === 1 && (lt.cleanData(w(n, !1)), n.innerHTML = e);
                        n = 0
                    } catch(s) {}
                }
                n && this.empty().append(e)
            },
            null, e, arguments.length)
        },
        replaceWith: function() {
            var e = lt.map(this,
            function(e) {
                return [e.nextSibling, e.parentNode]
            }),
            t = 0;
            return this.domManip(arguments,
            function(n) {
                var r = e[t++],
                i = e[t++];
                i && (r && r.parentNode !== i && (r = this.nextSibling), lt(this).remove(), i.insertBefore(n, r))
            },
            !0),
            t ? this: this.remove()
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(e, t, n) {
            e = rt.apply([], e);
            var r, i, s, o, u, a, f = 0,
            l = this.length,
            c = this,
            h = l - 1,
            p = e[0],
            d = lt.isFunction(p);
            if (d || !(l <= 1 || typeof p != "string" || lt.support.checkClone || !nn.test(p))) return this.each(function(r) {
                var i = c.eq(r);
                d && (e[0] = p.call(this, r, i.html())),
                i.domManip(e, t, n)
            });
            if (l) {
                a = lt.buildFragment(e, this[0].ownerDocument, !1, !n && this),
                r = a.firstChild,
                a.childNodes.length === 1 && (a = r);
                if (r) {
                    o = lt.map(w(a, "script"), v),
                    s = o.length;
                    for (; f < l; f++) i = a,
                    f !== h && (i = lt.clone(i, !0, !0), s && lt.merge(o, w(i, "script"))),
                    t.call(this[f], i, f);
                    if (s) {
                        u = o[o.length - 1].ownerDocument,
                        lt.map(o, m);
                        for (f = 0; f < s; f++) i = o[f],
                        rn.test(i.type || "") && !lt._data(i, "globalEval") && lt.contains(u, i) && (i.src ? lt._evalUrl(i.src) : lt.globalEval((i.text || i.textContent || i.innerHTML || "").replace(on, "")))
                    }
                    a = r = null
                }
            }
            return this
        }
    }),
    lt.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    },
    function(e, t) {
        lt.fn[e] = function(e) {
            var n, r = 0,
            i = [],
            s = lt(e),
            o = s.length - 1;
            for (; r <= o; r++) n = r === o ? this: this.clone(!0),
            lt(s[r])[t](n),
            it.apply(i, n.get());
            return this.pushStack(i)
        }
    }),
    lt.extend({
        clone: function(e, t, n) {
            var r, i, s, o, u, a = lt.contains(e.ownerDocument, e);
            lt.support.html5Clone || lt.isXMLDoc(e) || !Jt.test("<" + e.nodeName + ">") ? s = e.cloneNode(!0) : (fn.innerHTML = e.outerHTML, fn.removeChild(s = fn.firstChild));
            if ((!lt.support.noCloneEvent || !lt.support.noCloneChecked) && (e.nodeType === 1 || e.nodeType === 11) && !lt.isXMLDoc(e)) {
                r = w(s),
                u = w(e);
                for (o = 0; (i = u[o]) != null; ++o) r[o] && b(i, r[o])
            }
            if (t) if (n) {
                u = u || w(e),
                r = r || w(s);
                for (o = 0; (i = u[o]) != null; o++) y(i, r[o])
            } else y(e, s);
            return r = w(s, "script"),
            r.length > 0 && g(r, !a && w(e, "script")),
            r = u = i = null,
            s
        },
        buildFragment: function(e, t, n, r) {
            var i, s, o, u, a, f, l, c = e.length,
            h = p(t),
            d = [],
            v = 0;
            for (; v < c; v++) {
                s = e[v];
                if (s || s === 0) if (lt.type(s) === "object") lt.merge(d, s.nodeType ? [s] : s);
                else if (!Zt.test(s)) d.push(t.createTextNode(s));
                else {
                    u = u || h.appendChild(t.createElement("div")),
                    a = (Gt.exec(s) || ["", ""])[1].toLowerCase(),
                    l = un[a] || un._default,
                    u.innerHTML = l[1] + s.replace(Qt, "<$1></$2>") + l[2],
                    i = l[0];
                    while (i--) u = u.lastChild; ! lt.support.leadingWhitespace && Kt.test(s) && d.push(t.createTextNode(Kt.exec(s)[0]));
                    if (!lt.support.tbody) {
                        s = a === "table" && !Yt.test(s) ? u.firstChild: l[1] === "<table>" && !Yt.test(s) ? u: 0,
                        i = s && s.childNodes.length;
                        while (i--) lt.nodeName(f = s.childNodes[i], "tbody") && !f.childNodes.length && s.removeChild(f)
                    }
                    lt.merge(d, u.childNodes),
                    u.textContent = "";
                    while (u.firstChild) u.removeChild(u.firstChild);
                    u = h.lastChild
                }
            }
            u && h.removeChild(u),
            lt.support.appendChecked || lt.grep(w(d, "input"), E),
            v = 0;
            while (s = d[v++]) {
                if (r && lt.inArray(s, r) !== -1) continue;
                o = lt.contains(s.ownerDocument, s),
                u = w(h.appendChild(s), "script"),
                o && g(u);
                if (n) {
                    i = 0;
                    while (s = u[i++]) rn.test(s.type || "") && n.push(s)
                }
            }
            return u = null,
            h
        },
        cleanData: function(e, t) {
            var n, r, i, s, o = 0,
            u = lt.expando,
            a = lt.cache,
            f = lt.support.deleteExpando,
            l = lt.event.special;
            for (; (n = e[o]) != null; o++) if (t || lt.acceptData(n)) {
                i = n[u],
                s = i && a[i];
                if (s) {
                    if (s.events) for (r in s.events) l[r] ? lt.event.remove(n, r) : lt.removeEvent(n, r, s.handle);
                    a[i] && (delete a[i], f ? delete n[u] : typeof n.removeAttribute !== J ? n.removeAttribute(u) : n[u] = null, tt.push(i))
                }
            }
        },
        _evalUrl: function(e) {
            return lt.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            })
        }
    }),
    lt.fn.extend({
        wrapAll: function(e) {
            if (lt.isFunction(e)) return this.each(function(t) {
                lt(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = lt(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]),
                t.map(function() {
                    var e = this;
                    while (e.firstChild && e.firstChild.nodeType === 1) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            return lt.isFunction(e) ? this.each(function(t) {
                lt(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = lt(this),
                n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = lt.isFunction(e);
            return this.each(function(n) {
                lt(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                lt.nodeName(this, "body") || lt(this).replaceWith(this.childNodes)
            }).end()
        }
    });
    var ln, cn, hn, pn = /alpha\([^)]*\)/i,
    dn = /opacity\s*=\s*([^)]*)/,
    vn = /^(top|right|bottom|left)$/,
    mn = /^(none|table(?!-c[ea]).+)/,
    gn = /^margin/,
    yn = new RegExp("^(" + ct + ")(.*)$", "i"),
    bn = new RegExp("^(" + ct + ")(?!px)[a-z%]+$", "i"),
    wn = new RegExp("^([+-])=(" + ct + ")", "i"),
    En = {
        BODY: "block"
    },
    Sn = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    },
    xn = {
        letterSpacing: 0,
        fontWeight: 400
    },
    Tn = ["Top", "Right", "Bottom", "Left"],
    Nn = ["Webkit", "O", "Moz", "ms"];
    lt.fn.extend({
        css: function(e, n) {
            return lt.access(this,
            function(e, n, r) {
                var i, s, o = {},
                u = 0;
                if (lt.isArray(n)) {
                    s = cn(e),
                    i = n.length;
                    for (; u < i; u++) o[n[u]] = lt.css(e, n[u], !1, s);
                    return o
                }
                return r !== t ? lt.style(e, n, r) : lt.css(e, n)
            },
            e, n, arguments.length > 1)
        },
        show: function() {
            return T(this, !0)
        },
        hide: function() {
            return T(this)
        },
        toggle: function(e) {
            return typeof e == "boolean" ? e ? this.show() : this.hide() : this.each(function() {
                x(this) ? lt(this).show() : lt(this).hide()
            })
        }
    }),
    lt.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = hn(e, "opacity");
                        return n === "" ? "1": n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": lt.support.cssFloat ? "cssFloat": "styleFloat"
        },
        style: function(e, n, r, i) {
            if (!e || e.nodeType === 3 || e.nodeType === 8 || !e.style) return;
            var s, o, u, a = lt.camelCase(n),
            f = e.style;
            n = lt.cssProps[a] || (lt.cssProps[a] = S(f, a)),
            u = lt.cssHooks[n] || lt.cssHooks[a];
            if (r === t) return u && "get" in u && (s = u.get(e, !1, i)) !== t ? s: f[n];
            o = typeof r,
            o === "string" && (s = wn.exec(r)) && (r = (s[1] + 1) * s[2] + parseFloat(lt.css(e, n)), o = "number");
            if (r == null || o === "number" && isNaN(r)) return;
            o === "number" && !lt.cssNumber[a] && (r += "px"),
            !lt.support.clearCloneStyle && r === "" && n.indexOf("background") === 0 && (f[n] = "inherit");
            if (!u || !("set" in u) || (r = u.set(e, r, i)) !== t) try {
                f[n] = r
            } catch(l) {}
        },
        css: function(e, n, r, i) {
            var s, o, u, a = lt.camelCase(n);
            return n = lt.cssProps[a] || (lt.cssProps[a] = S(e.style, a)),
            u = lt.cssHooks[n] || lt.cssHooks[a],
            u && "get" in u && (o = u.get(e, !0, r)),
            o === t && (o = hn(e, n, i)),
            o === "normal" && n in xn && (o = xn[n]),
            r === "" || r ? (s = parseFloat(o), r === !0 || lt.isNumeric(s) ? s || 0 : o) : o
        }
    }),
    e.getComputedStyle ? (cn = function(t) {
        return e.getComputedStyle(t, null)
    },
    hn = function(e, n, r) {
        var i, s, o, u = r || cn(e),
        a = u ? u.getPropertyValue(n) || u[n] : t,
        f = e.style;
        return u && (a === "" && !lt.contains(e.ownerDocument, e) && (a = lt.style(e, n)), bn.test(a) && gn.test(n) && (i = f.width, s = f.minWidth, o = f.maxWidth, f.minWidth = f.maxWidth = f.width = a, a = u.width, f.width = i, f.minWidth = s, f.maxWidth = o)),
        a
    }) : Q.documentElement.currentStyle && (cn = function(e) {
        return e.currentStyle
    },
    hn = function(e, n, r) {
        var i, s, o, u = r || cn(e),
        a = u ? u[n] : t,
        f = e.style;
        return a == null && f && f[n] && (a = f[n]),
        bn.test(a) && !vn.test(n) && (i = f.left, s = e.runtimeStyle, o = s && s.left, o && (s.left = e.currentStyle.left), f.left = n === "fontSize" ? "1em": a, a = f.pixelLeft + "px", f.left = i, o && (s.left = o)),
        a === "" ? "auto": a
    }),
    lt.each(["height", "width"],
    function(e, t) {
        lt.cssHooks[t] = {
            get: function(e, n, r) {
                if (n) return e.offsetWidth === 0 && mn.test(lt.css(e, "display")) ? lt.swap(e, Sn,
                function() {
                    return k(e, t, r)
                }) : k(e, t, r)
            },
            set: function(e, n, r) {
                var i = r && cn(e);
                return N(e, n, r ? C(e, t, r, lt.support.boxSizing && lt.css(e, "boxSizing", !1, i) === "border-box", i) : 0)
            }
        }
    }),
    lt.support.opacity || (lt.cssHooks.opacity = {
        get: function(e, t) {
            return dn.test((t && e.currentStyle ? e.currentStyle.filter: e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "": t ? "1": ""
        },
        set: function(e, t) {
            var n = e.style,
            r = e.currentStyle,
            i = lt.isNumeric(t) ? "alpha(opacity=" + t * 100 + ")": "",
            s = r && r.filter || n.filter || "";
            n.zoom = 1;
            if ((t >= 1 || t === "") && lt.trim(s.replace(pn, "")) === "" && n.removeAttribute) {
                n.removeAttribute("filter");
                if (t === "" || r && !r.filter) return
            }
            n.filter = pn.test(s) ? s.replace(pn, i) : s + " " + i
        }
    }),
    lt(function() {
        lt.support.reliableMarginRight || (lt.cssHooks.marginRight = {
            get: function(e, t) {
                if (t) return lt.swap(e, {
                    display: "inline-block"
                },
                hn, [e, "marginRight"])
            }
        }),
        !lt.support.pixelPosition && lt.fn.position && lt.each(["top", "left"],
        function(e, t) {
            lt.cssHooks[t] = {
                get: function(e, n) {
                    if (n) return n = hn(e, t),
                    bn.test(n) ? lt(e).position()[t] + "px": n
                }
            }
        })
    }),
    lt.expr && lt.expr.filters && (lt.expr.filters.hidden = function(e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !lt.support.reliableHiddenOffsets && (e.style && e.style.display || lt.css(e, "display")) === "none"
    },
    lt.expr.filters.visible = function(e) {
        return ! lt.expr.filters.hidden(e)
    }),
    lt.each({
        margin: "",
        padding: "",
        border: "Width"
    },
    function(e, t) {
        lt.cssHooks[e + t] = {
            expand: function(n) {
                var r = 0,
                i = {},
                s = typeof n == "string" ? n.split(" ") : [n];
                for (; r < 4; r++) i[e + Tn[r] + t] = s[r] || s[r - 2] || s[0];
                return i
            }
        },
        gn.test(e) || (lt.cssHooks[e + t].set = N)
    });
    var Cn = /%20/g,
    kn = /\[\]$/,
    Ln = /\r?\n/g,
    An = /^(?:submit|button|image|reset|file)$/i,
    On = /^(?:input|select|textarea|keygen)/i;
    lt.fn.extend({
        serialize: function() {
            return lt.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = lt.prop(this, "elements");
                return e ? lt.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !lt(this).is(":disabled") && On.test(this.nodeName) && !An.test(e) && (this.checked || !tn.test(e))
            }).map(function(e, t) {
                var n = lt(this).val();
                return n == null ? null: lt.isArray(n) ? lt.map(n,
                function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Ln, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Ln, "\r\n")
                }
            }).get()
        }
    }),
    lt.param = function(e, n) {
        var r, i = [],
        s = function(e, t) {
            t = lt.isFunction(t) ? t() : t == null ? "": t,
            i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
        n === t && (n = lt.ajaxSettings && lt.ajaxSettings.traditional);
        if (lt.isArray(e) || e.jquery && !lt.isPlainObject(e)) lt.each(e,
        function() {
            s(this.name, this.value)
        });
        else for (r in e) O(r, e[r], n, s);
        return i.join("&").replace(Cn, "+")
    },
    lt.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),
    function(e, t) {
        lt.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }),
    lt.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return arguments.length === 1 ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var Mn, _n, Dn = lt.now(),
    Pn = /\?/,
    Hn = /#.*$/,
    Bn = /([?&])_=[^&]*/,
    jn = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
    Fn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    In = /^(?:GET|HEAD)$/,
    qn = /^\/\//,
    Rn = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
    Un = lt.fn.load,
    zn = {},
    Wn = {},
    Xn = "*/".concat("*");
    try {
        _n = K.href
    } catch(Vn) {
        _n = Q.createElement("a"),
        _n.href = "",
        _n = _n.href
    }
    Mn = Rn.exec(_n.toLowerCase()) || [],
    lt.fn.load = function(e, n, r) {
        if (typeof e != "string" && Un) return Un.apply(this, arguments);
        var i, s, o, u = this,
        a = e.indexOf(" ");
        return a >= 0 && (i = e.slice(a, e.length), e = e.slice(0, a)),
        lt.isFunction(n) ? (r = n, n = t) : n && typeof n == "object" && (o = "POST"),
        u.length > 0 && lt.ajax({
            url: e,
            type: o,
            dataType: "html",
            data: n
        }).done(function(e) {
            s = arguments,
            u.html(i ? lt("<div>").append(lt.parseHTML(e)).find(i) : e)
        }).complete(r &&
        function(e, t) {
            u.each(r, s || [e.responseText, t, e])
        }),
        this
    },
    lt.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"],
    function(e, t) {
        lt.fn[t] = function(e) {
            return this.on(t, e)
        }
    }),
    lt.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: _n,
            type: "GET",
            isLocal: Fn.test(Mn[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Xn,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": lt.parseJSON,
                "text xml": lt.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? D(D(e, lt.ajaxSettings), t) : D(lt.ajaxSettings, e)
        },
        ajaxPrefilter: M(zn),
        ajaxTransport: M(Wn),
        ajax: function(e, n) {
            function r(e, n, r, i) {
                var s, c, y, b, E, x = n;
                if (w === 2) return;
                w = 2,
                a && clearTimeout(a),
                l = t,
                u = i || "",
                S.readyState = e > 0 ? 4 : 0,
                s = e >= 200 && e < 300 || e === 304,
                r && (b = P(h, S, r)),
                b = H(h, b, S, s);
                if (s) h.ifModified && (E = S.getResponseHeader("Last-Modified"), E && (lt.lastModified[o] = E), E = S.getResponseHeader("etag"), E && (lt.etag[o] = E)),
                e === 204 || h.type === "HEAD" ? x = "nocontent": e === 304 ? x = "notmodified": (x = b.state, c = b.data, y = b.error, s = !y);
                else {
                    y = x;
                    if (e || !x) x = "error",
                    e < 0 && (e = 0)
                }
                S.status = e,
                S.statusText = (n || x) + "",
                s ? v.resolveWith(p, [c, x, S]) : v.rejectWith(p, [S, x, y]),
                S.statusCode(g),
                g = t,
                f && d.trigger(s ? "ajaxSuccess": "ajaxError", [S, h, s ? c: y]),
                m.fireWith(p, [S, x]),
                f && (d.trigger("ajaxComplete", [S, h]), --lt.active || lt.event.trigger("ajaxStop"))
            }
            typeof e == "object" && (n = e, e = t),
            n = n || {};
            var i, s, o, u, a, f, l, c, h = lt.ajaxSetup({},
            n),
            p = h.context || h,
            d = h.context && (p.nodeType || p.jquery) ? lt(p) : lt.event,
            v = lt.Deferred(),
            m = lt.Callbacks("once memory"),
            g = h.statusCode || {},
            y = {},
            b = {},
            w = 0,
            E = "canceled",
            S = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (w === 2) {
                        if (!c) {
                            c = {};
                            while (t = jn.exec(u)) c[t[1].toLowerCase()] = t[2]
                        }
                        t = c[e.toLowerCase()]
                    }
                    return t == null ? null: t
                },
                getAllResponseHeaders: function() {
                    return w === 2 ? u: null
                },
                setRequestHeader: function(e, t) {
                    var n = e.toLowerCase();
                    return w || (e = b[n] = b[n] || e, y[e] = t),
                    this
                },
                overrideMimeType: function(e) {
                    return w || (h.mimeType = e),
                    this
                },
                statusCode: function(e) {
                    var t;
                    if (e) if (w < 2) for (t in e) g[t] = [g[t], e[t]];
                    else S.always(e[S.status]);
                    return this
                },
                abort: function(e) {
                    var t = e || E;
                    return l && l.abort(t),
                    r(0, t),
                    this
                }
            };
            v.promise(S).complete = m.add,
            S.success = S.done,
            S.error = S.fail,
            h.url = ((e || h.url || _n) + "").replace(Hn, "").replace(qn, Mn[1] + "//"),
            h.type = n.method || n.type || h.method || h.type,
            h.dataTypes = lt.trim(h.dataType || "*").toLowerCase().match(ht) || [""],
            h.crossDomain == null && (i = Rn.exec(h.url.toLowerCase()), h.crossDomain = !(!i || i[1] === Mn[1] && i[2] === Mn[2] && (i[3] || (i[1] === "http:" ? "80": "443")) === (Mn[3] || (Mn[1] === "http:" ? "80": "443")))),
            h.data && h.processData && typeof h.data != "string" && (h.data = lt.param(h.data, h.traditional)),
            _(zn, h, n, S);
            if (w === 2) return S;
            f = h.global,
            f && lt.active++===0 && lt.event.trigger("ajaxStart"),
            h.type = h.type.toUpperCase(),
            h.hasContent = !In.test(h.type),
            o = h.url,
            h.hasContent || (h.data && (o = h.url += (Pn.test(o) ? "&": "?") + h.data, delete h.data), h.cache === !1 && (h.url = Bn.test(o) ? o.replace(Bn, "$1_=" + Dn++) : o + (Pn.test(o) ? "&": "?") + "_=" + Dn++)),
            h.ifModified && (lt.lastModified[o] && S.setRequestHeader("If-Modified-Since", lt.lastModified[o]), lt.etag[o] && S.setRequestHeader("If-None-Match", lt.etag[o])),
            (h.data && h.hasContent && h.contentType !== !1 || n.contentType) && S.setRequestHeader("Content-Type", h.contentType),
            S.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + (h.dataTypes[0] !== "*" ? ", " + Xn + "; q=0.01": "") : h.accepts["*"]);
            for (s in h.headers) S.setRequestHeader(s, h.headers[s]);
            if (!h.beforeSend || h.beforeSend.call(p, S, h) !== !1 && w !== 2) {
                E = "abort";
                for (s in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) S[s](h[s]);
                l = _(Wn, h, n, S);
                if (!l) r( - 1, "No Transport");
                else {
                    S.readyState = 1,
                    f && d.trigger("ajaxSend", [S, h]),
                    h.async && h.timeout > 0 && (a = setTimeout(function() {
                        S.abort("timeout")
                    },
                    h.timeout));
                    try {
                        w = 1,
                        l.send(y, r)
                    } catch(x) {
                        if (! (w < 2)) throw x;
                        r( - 1, x)
                    }
                }
                return S
            }
            return S.abort()
        },
        getJSON: function(e, t, n) {
            return lt.get(e, t, n, "json")
        },
        getScript: function(e, n) {
            return lt.get(e, t, n, "script")
        }
    }),
    lt.each(["get", "post"],
    function(e, n) {
        lt[n] = function(e, r, i, s) {
            return lt.isFunction(r) && (s = s || i, i = r, r = t),
            lt.ajax({
                url: e,
                type: n,
                dataType: s,
                data: r,
                success: i
            })
        }
    }),
    lt.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return lt.globalEval(e),
                e
            }
        }
    }),
    lt.ajaxPrefilter("script",
    function(e) {
        e.cache === t && (e.cache = !1),
        e.crossDomain && (e.type = "GET", e.global = !1)
    }),
    lt.ajaxTransport("script",
    function(e) {
        if (e.crossDomain) {
            var n, r = Q.head || lt("head")[0] || Q.documentElement;
            return {
                send: function(t, i) {
                    n = Q.createElement("script"),
                    n.async = !0,
                    e.scriptCharset && (n.charset = e.scriptCharset),
                    n.src = e.url,
                    n.onload = n.onreadystatechange = function(e, t) {
                        if (t || !n.readyState || /loaded|complete/.test(n.readyState)) n.onload = n.onreadystatechange = null,
                        n.parentNode && n.parentNode.removeChild(n),
                        n = null,
                        t || i(200, "success")
                    },
                    r.insertBefore(n, r.firstChild)
                },
                abort: function() {
                    n && n.onload(t, !0)
                }
            }
        }
    });
    var $n = [],
    Jn = /(=)\?(?=&|$)|\?\?/;
    lt.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = $n.pop() || lt.expando + "_" + Dn++;
            return this[e] = !0,
            e
        }
    }),
    lt.ajaxPrefilter("json jsonp",
    function(n, r, i) {
        var s, o, u, a = n.jsonp !== !1 && (Jn.test(n.url) ? "url": typeof n.data == "string" && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Jn.test(n.data) && "data");
        if (a || n.dataTypes[0] === "jsonp") return s = n.jsonpCallback = lt.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback,
        a ? n[a] = n[a].replace(Jn, "$1" + s) : n.jsonp !== !1 && (n.url += (Pn.test(n.url) ? "&": "?") + n.jsonp + "=" + s),
        n.converters["script json"] = function() {
            return u || lt.error(s + " was not called"),
            u[0]
        },
        n.dataTypes[0] = "json",
        o = e[s],
        e[s] = function() {
            u = arguments
        },
        i.always(function() {
            e[s] = o,
            n[s] && (n.jsonpCallback = r.jsonpCallback, $n.push(s)),
            u && lt.isFunction(o) && o(u[0]),
            u = o = t
        }),
        "script"
    });
    var Kn, Qn, Gn = 0,
    Yn = e.ActiveXObject &&
    function() {
        var e;
        for (e in Kn) Kn[e](t, !0)
    };
    lt.ajaxSettings.xhr = e.ActiveXObject ?
    function() {
        return ! this.isLocal && B() || j()
    }: B,
    Qn = lt.ajaxSettings.xhr(),
    lt.support.cors = !!Qn && "withCredentials" in Qn,
    Qn = lt.support.ajax = !!Qn,
    Qn && lt.ajaxTransport(function(n) {
        if (!n.crossDomain || lt.support.cors) {
            var r;
            return {
                send: function(i, s) {
                    var o, u, a = n.xhr();
                    n.username ? a.open(n.type, n.url, n.async, n.username, n.password) : a.open(n.type, n.url, n.async);
                    if (n.xhrFields) for (u in n.xhrFields) a[u] = n.xhrFields[u];
                    n.mimeType && a.overrideMimeType && a.overrideMimeType(n.mimeType),
                    !n.crossDomain && !i["X-Requested-With"] && (i["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (u in i) a.setRequestHeader(u, i[u])
                    } catch(f) {}
                    a.send(n.hasContent && n.data || null),
                    r = function(e, i) {
                        var u, f, l, c;
                        try {
                            if (r && (i || a.readyState === 4)) {
                                r = t,
                                o && (a.onreadystatechange = lt.noop, Yn && delete Kn[o]);
                                if (i) a.readyState !== 4 && a.abort();
                                else {
                                    c = {},
                                    u = a.status,
                                    f = a.getAllResponseHeaders(),
                                    typeof a.responseText == "string" && (c.text = a.responseText);
                                    try {
                                        l = a.statusText
                                    } catch(h) {
                                        l = ""
                                    } ! u && n.isLocal && !n.crossDomain ? u = c.text ? 200 : 404 : u === 1223 && (u = 204)
                                }
                            }
                        } catch(p) {
                            i || s( - 1, p)
                        }
                        c && s(u, l, c, f)
                    },
                    n.async ? a.readyState === 4 ? setTimeout(r) : (o = ++Gn, Yn && (Kn || (Kn = {},
                    lt(e).unload(Yn)), Kn[o] = r), a.onreadystatechange = r) : r()
                },
                abort: function() {
                    r && r(t, !0)
                }
            }
        }
    });
    var Zn, er, tr = /^(?:toggle|show|hide)$/,
    nr = new RegExp("^(?:([+-])=|)(" + ct + ")([a-z%]*)$", "i"),
    rr = /queueHooks$/,
    ir = [U],
    sr = {
        "*": [function(e, t) {
            var n = this.createTween(e, t),
            r = n.cur(),
            i = nr.exec(t),
            s = i && i[3] || (lt.cssNumber[e] ? "": "px"),
            o = (lt.cssNumber[e] || s !== "px" && +r) && nr.exec(lt.css(n.elem, e)),
            u = 1,
            a = 20;
            if (o && o[3] !== s) {
                s = s || o[3],
                i = i || [],
                o = +r || 1;
                do u = u || ".5",
                o /= u,
                lt.style(n.elem, e, o + s);
                while (u !== (u = n.cur() / r) && u !== 1 && --a)
            }
            return i && (o = n.start = +o || +r || 0, n.unit = s, n.end = i[1] ? o + (i[1] + 1) * i[2] : +i[2]),
            n
        }]
    };
    lt.Animation = lt.extend(q, {
        tweener: function(e, t) {
            lt.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            var n, r = 0,
            i = e.length;
            for (; r < i; r++) n = e[r],
            sr[n] = sr[n] || [],
            sr[n].unshift(t)
        },
        prefilter: function(e, t) {
            t ? ir.unshift(e) : ir.push(e)
        }
    }),
    lt.Tween = z,
    z.prototype = {
        constructor: z,
        init: function(e, t, n, r, i, s) {
            this.elem = e,
            this.prop = n,
            this.easing = i || "swing",
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = r,
            this.unit = s || (lt.cssNumber[n] ? "": "px")
        },
        cur: function() {
            var e = z.propHooks[this.prop];
            return e && e.get ? e.get(this) : z.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = z.propHooks[this.prop];
            return this.options.duration ? this.pos = t = lt.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : z.propHooks._default.set(this),
            this
        }
    },
    z.prototype.init.prototype = z.prototype,
    z.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return e.elem[e.prop] == null || !!e.elem.style && e.elem.style[e.prop] != null ? (t = lt.css(e.elem, e.prop, ""), !t || t === "auto" ? 0 : t) : e.elem[e.prop]
            },
            set: function(e) {
                lt.fx.step[e.prop] ? lt.fx.step[e.prop](e) : e.elem.style && (e.elem.style[lt.cssProps[e.prop]] != null || lt.cssHooks[e.prop]) ? lt.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    },
    z.propHooks.scrollTop = z.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    lt.each(["toggle", "show", "hide"],
    function(e, t) {
        var n = lt.fn[t];
        lt.fn[t] = function(e, r, i) {
            return e == null || typeof e == "boolean" ? n.apply(this, arguments) : this.animate(W(t, !0), e, r, i)
        }
    }),
    lt.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(x).css("opacity", 0).show().end().animate({
                opacity: t
            },
            e, n, r)
        },
        animate: function(e, t, n, r) {
            var i = lt.isEmptyObject(e),
            s = lt.speed(t, n, r),
            o = function() {
                var t = q(this, lt.extend({},
                e), s); (i || lt._data(this, "finish")) && t.stop(!0)
            };
            return o.finish = o,
            i || s.queue === !1 ? this.each(o) : this.queue(s.queue, o)
        },
        stop: function(e, n, r) {
            var i = function(e) {
                var t = e.stop;
                delete e.stop,
                t(r)
            };
            return typeof e != "string" && (r = n, n = e, e = t),
            n && e !== !1 && this.queue(e || "fx", []),
            this.each(function() {
                var t = !0,
                n = e != null && e + "queueHooks",
                s = lt.timers,
                o = lt._data(this);
                if (n) o[n] && o[n].stop && i(o[n]);
                else for (n in o) o[n] && o[n].stop && rr.test(n) && i(o[n]);
                for (n = s.length; n--;) s[n].elem === this && (e == null || s[n].queue === e) && (s[n].anim.stop(r), t = !1, s.splice(n, 1)); (t || !r) && lt.dequeue(this, e)
            })
        },
        finish: function(e) {
            return e !== !1 && (e = e || "fx"),
            this.each(function() {
                var t, n = lt._data(this),
                r = n[e + "queue"],
                i = n[e + "queueHooks"],
                s = lt.timers,
                o = r ? r.length: 0;
                n.finish = !0,
                lt.queue(this, e, []),
                i && i.stop && i.stop.call(this, !0);
                for (t = s.length; t--;) s[t].elem === this && s[t].queue === e && (s[t].anim.stop(!0), s.splice(t, 1));
                for (t = 0; t < o; t++) r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }
    }),
    lt.each({
        slideDown: W("show"),
        slideUp: W("hide"),
        slideToggle: W("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    },
    function(e, t) {
        lt.fn[e] = function(e, n, r) {
            return this.animate(t, e, n, r)
        }
    }),
    lt.speed = function(e, t, n) {
        var r = e && typeof e == "object" ? lt.extend({},
        e) : {
            complete: n || !n && t || lt.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !lt.isFunction(t) && t
        };
        r.duration = lt.fx.off ? 0 : typeof r.duration == "number" ? r.duration: r.duration in lt.fx.speeds ? lt.fx.speeds[r.duration] : lt.fx.speeds._default;
        if (r.queue == null || r.queue === !0) r.queue = "fx";
        return r.old = r.complete,
        r.complete = function() {
            lt.isFunction(r.old) && r.old.call(this),
            r.queue && lt.dequeue(this, r.queue)
        },
        r
    },
    lt.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return.5 - Math.cos(e * Math.PI) / 2
        }
    },
    lt.timers = [],
    lt.fx = z.prototype.init,
    lt.fx.tick = function() {
        var e, n = lt.timers,
        r = 0;
        Zn = lt.now();
        for (; r < n.length; r++) e = n[r],
        !e() && n[r] === e && n.splice(r--, 1);
        n.length || lt.fx.stop(),
        Zn = t
    },
    lt.fx.timer = function(e) {
        e() && lt.timers.push(e) && lt.fx.start()
    },
    lt.fx.interval = 13,
    lt.fx.start = function() {
        er || (er = setInterval(lt.fx.tick, lt.fx.interval))
    },
    lt.fx.stop = function() {
        clearInterval(er),
        er = null
    },
    lt.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    lt.fx.step = {},
    lt.expr && lt.expr.filters && (lt.expr.filters.animated = function(e) {
        return lt.grep(lt.timers,
        function(t) {
            return e === t.elem
        }).length
    }),
    lt.fn.offset = function(e) {
        if (arguments.length) return e === t ? this: this.each(function(t) {
            lt.offset.setOffset(this, e, t)
        });
        var n, r, i = {
            top: 0,
            left: 0
        },
        s = this[0],
        o = s && s.ownerDocument;
        if (!o) return;
        return n = o.documentElement,
        lt.contains(n, s) ? (typeof s.getBoundingClientRect !== J && (i = s.getBoundingClientRect()), r = X(o), {
            top: i.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0),
            left: i.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
        }) : i
    },
    lt.offset = {
        setOffset: function(e, t, n) {
            var r = lt.css(e, "position");
            r === "static" && (e.style.position = "relative");
            var i = lt(e),
            s = i.offset(),
            o = lt.css(e, "top"),
            u = lt.css(e, "left"),
            a = (r === "absolute" || r === "fixed") && lt.inArray("auto", [o, u]) > -1,
            f = {},
            l = {},
            c,
            h;
            a ? (l = i.position(), c = l.top, h = l.left) : (c = parseFloat(o) || 0, h = parseFloat(u) || 0),
            lt.isFunction(t) && (t = t.call(e, n, s)),
            t.top != null && (f.top = t.top - s.top + c),
            t.left != null && (f.left = t.left - s.left + h),
            "using" in t ? t.using.call(e, f) : i.css(f)
        }
    },
    lt.fn.extend({
        position: function() {
            if (!this[0]) return;
            var e, t, n = {
                top: 0,
                left: 0
            },
            r = this[0];
            return lt.css(r, "position") === "fixed" ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), lt.nodeName(e[0], "html") || (n = e.offset()), n.top += lt.css(e[0], "borderTopWidth", !0), n.left += lt.css(e[0], "borderLeftWidth", !0)),
            {
                top: t.top - n.top - lt.css(r, "marginTop", !0),
                left: t.left - n.left - lt.css(r, "marginLeft", !0)
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var e = this.offsetParent || G;
                while (e && !lt.nodeName(e, "html") && lt.css(e, "position") === "static") e = e.offsetParent;
                return e || G
            })
        }
    }),
    lt.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    },
    function(e, n) {
        var r = /Y/.test(n);
        lt.fn[e] = function(i) {
            return lt.access(this,
            function(e, i, s) {
                var o = X(e);
                if (s === t) return o ? n in o ? o[n] : o.document.documentElement[i] : e[i];
                o ? o.scrollTo(r ? lt(o).scrollLeft() : s, r ? s: lt(o).scrollTop()) : e[i] = s
            },
            e, i, arguments.length, null)
        }
    }),
    lt.each({
        Height: "height",
        Width: "width"
    },
    function(e, n) {
        lt.each({
            padding: "inner" + e,
            content: n,
            "": "outer" + e
        },
        function(r, i) {
            lt.fn[i] = function(i, s) {
                var o = arguments.length && (r || typeof i != "boolean"),
                u = r || (i === !0 || s === !0 ? "margin": "border");
                return lt.access(this,
                function(n, r, i) {
                    var s;
                    return lt.isWindow(n) ? n.document.documentElement["client" + e] : n.nodeType === 9 ? (s = n.documentElement, Math.max(n.body["scroll" + e], s["scroll" + e], n.body["offset" + e], s["offset" + e], s["client" + e])) : i === t ? lt.css(n, r, u) : lt.style(n, r, i, u)
                },
                n, o ? i: t, o, null)
            }
        })
    }),
    lt.fn.size = function() {
        return this.length
    },
    lt.fn.andSelf = lt.fn.addBack,
    typeof module == "object" && module && typeof module.exports == "object" ? module.exports = lt: (e.jQuery = e.$ = lt, typeof define == "function" && define.amd && define("jquery", [],
    function() {
        return lt
    }))
})(window),
typeof JSON != "object" && (JSON = {}),
function() {
    "use strict";
    function f(e) {
        return e < 10 ? "0" + e: e
    }
    function quote(e) {
        return escapable.lastIndex = 0,
        escapable.test(e) ? '"' + e.replace(escapable,
        function(e) {
            var t = meta[e];
            return typeof t == "string" ? t: "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice( - 4)
        }) + '"': '"' + e + '"'
    }
    function str(e, t) {
        var n, r, i, s, o = gap,
        u, a = t[e];
        a && typeof a == "object" && typeof a.toJSON == "function" && (a = a.toJSON(e)),
        typeof rep == "function" && (a = rep.call(t, e, a));
        switch (typeof a) {
        case "string":
            return quote(a);
        case "number":
            return isFinite(a) ? String(a) : "null";
        case "boolean":
        case "null":
            return String(a);
        case "object":
            if (!a) return "null";
            gap += indent,
            u = [];
            if (Object.prototype.toString.apply(a) === "[object Array]") {
                s = a.length;
                for (n = 0; n < s; n += 1) u[n] = str(n, a) || "null";
                return i = u.length === 0 ? "[]": gap ? "[\n" + gap + u.join(",\n" + gap) + "\n" + o + "]": "[" + u.join(",") + "]",
                gap = o,
                i
            }
            if (rep && typeof rep == "object") {
                s = rep.length;
                for (n = 0; n < s; n += 1) typeof rep[n] == "string" && (r = rep[n], i = str(r, a), i && u.push(quote(r) + (gap ? ": ": ":") + i))
            } else for (r in a) Object.prototype.hasOwnProperty.call(a, r) && (i = str(r, a), i && u.push(quote(r) + (gap ? ": ": ":") + i));
            return i = u.length === 0 ? "{}": gap ? "{\n" + gap + u.join(",\n" + gap) + "\n" + o + "}": "{" + u.join(",") + "}",
            gap = o,
            i
        }
    }
    typeof Date.prototype.toJSON != "function" && (Date.prototype.toJSON = function() {
        return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z": null
    },
    String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function() {
        return this.valueOf()
    });
    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
    escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
    gap, indent, meta = {
        "\b": "\\b",
        "	": "\\t",
        "\n": "\\n",
        "\f": "\\f",
        "\r": "\\r",
        '"': '\\"',
        "\\": "\\\\"
    },
    rep;
    typeof JSON.stringify != "function" && (JSON.stringify = function(e, t, n) {
        var r;
        gap = "",
        indent = "";
        if (typeof n == "number") for (r = 0; r < n; r += 1) indent += " ";
        else typeof n == "string" && (indent = n);
        rep = t;
        if (!t || typeof t == "function" || typeof t == "object" && typeof t.length == "number") return str("", {
            "": e
        });
        throw new Error("JSON.stringify")
    }),
    typeof JSON.parse != "function" && (JSON.parse = function(text, reviver) {
        function walk(e, t) {
            var n, r, i = e[t];
            if (i && typeof i == "object") for (n in i) Object.prototype.hasOwnProperty.call(i, n) && (r = walk(i, n), r !== undefined ? i[n] = r: delete i[n]);
            return reviver.call(e, t, i)
        }
        var j;
        text = String(text),
        cx.lastIndex = 0,
        cx.test(text) && (text = text.replace(cx,
        function(e) {
            return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice( - 4)
        }));
        if (/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"),
        typeof reviver == "function" ? walk({
            "": j
        },
        "") : j;
        throw new SyntaxError("JSON.parse")
    })
} (),
!
function(e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
} (function(e) {
    "use strict";
    var t = window.Slick || {};
    t = function() {
        function t(t, r) {
            var i, s, o, u = this;
            if (u.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: e(t),
                appendDots: e(t),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button type="button" data-role="none" class="slick-prev">Previous</button>',
                nextArrow: '<button type="button" data-role="none" class="slick-next">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function(e, t) {
                    return '<button type="button" data-role="none">' + (t + 1) + "</button>"
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: .35,
                fade: !1,
                focusOnSelect: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rtl: !1,
                slide: "",
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                variableWidth: !1,
                vertical: !1,
                waitForAnimate: !0
            },
            u.initials = {
                animating: !1,
                dragging: !1,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: !1,
                slideOffset: 0,
                swipeLeft: null,
                $list: null,
                touchObject: {},
                transformsEnabled: !1

            },
            e.extend(u, u.initials), u.activeBreakpoint = null, u.animType = null, u.animProp = null, u.breakpoints = [], u.breakpointSettings = [], u.cssTransitions = !1, u.hidden = "hidden", u.paused = !1, u.positionProp = null, u.respondTo = null, u.shouldClick = !0, u.$slider = e(t), u.$slidesCache = null, u.transformType = null, u.transitionType = null, u.visibilityChange = "visibilitychange", u.windowWidth = 0, u.windowTimer = null, i = e(t).data("slick") || {},
            u.options = e.extend({},
            u.defaults, i, r), u.currentSlide = u.options.initialSlide, u.originalSettings = u.options, s = u.options.responsive || null, s && s.length > -1) {
                u.respondTo = u.options.respondTo || "window";
                for (o in s) s.hasOwnProperty(o) && (u.breakpoints.push(s[o].breakpoint), u.breakpointSettings[s[o].breakpoint] = s[o].settings);
                u.breakpoints.sort(function(e, t) {
                    return u.options.mobileFirst === !0 ? e - t: t - e
                })
            }
            "undefined" != typeof document.mozHidden ? (u.hidden = "mozHidden", u.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.msHidden ? (u.hidden = "msHidden", u.visibilityChange = "msvisibilitychange") : "undefined" != typeof document.webkitHidden && (u.hidden = "webkitHidden", u.visibilityChange = "webkitvisibilitychange"),
            u.autoPlay = e.proxy(u.autoPlay, u),
            u.autoPlayClear = e.proxy(u.autoPlayClear, u),
            u.changeSlide = e.proxy(u.changeSlide, u),
            u.clickHandler = e.proxy(u.clickHandler, u),
            u.selectHandler = e.proxy(u.selectHandler, u),
            u.setPosition = e.proxy(u.setPosition, u),
            u.swipeHandler = e.proxy(u.swipeHandler, u),
            u.dragHandler = e.proxy(u.dragHandler, u),
            u.keyHandler = e.proxy(u.keyHandler, u),
            u.autoPlayIterator = e.proxy(u.autoPlayIterator, u),
            u.instanceUid = n++,
            u.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/,
            u.init(),
            u.checkResponsive(!0)
        }
        var n = 0;
        return t
    } (),
    t.prototype.addSlide = t.prototype.slickAdd = function(t, n, r) {
        var i = this;
        if ("boolean" == typeof n) r = n,
        n = null;
        else if (0 > n || n >= i.slideCount) return ! 1;
        i.unload(),
        "number" == typeof n ? 0 === n && 0 === i.$slides.length ? e(t).appendTo(i.$slideTrack) : r ? e(t).insertBefore(i.$slides.eq(n)) : e(t).insertAfter(i.$slides.eq(n)) : r === !0 ? e(t).prependTo(i.$slideTrack) : e(t).appendTo(i.$slideTrack),
        i.$slides = i.$slideTrack.children(this.options.slide),
        i.$slideTrack.children(this.options.slide).detach(),
        i.$slideTrack.append(i.$slides),
        i.$slides.each(function(t, n) {
            e(n).attr("data-slick-index", t)
        }),
        i.$slidesCache = i.$slides,
        i.reinit()
    },
    t.prototype.animateHeight = function() {
        var e = this;
        if (1 === e.options.slidesToShow && e.options.adaptiveHeight === !0 && e.options.vertical === !1) {
            var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
            e.$list.animate({
                height: t
            },
            e.options.speed)
        }
    },
    t.prototype.animateSlide = function(t, n) {
        var r = {},
        i = this;
        i.animateHeight(),
        i.options.rtl === !0 && i.options.vertical === !1 && (t = -t),
        i.transformsEnabled === !1 ? i.options.vertical === !1 ? i.$slideTrack.animate({
            left: t
        },
        i.options.speed, i.options.easing, n) : i.$slideTrack.animate({
            top: t
        },
        i.options.speed, i.options.easing, n) : i.cssTransitions === !1 ? (i.options.rtl === !0 && (i.currentLeft = -i.currentLeft), e({
            animStart: i.currentLeft
        }).animate({
            animStart: t
        },
        {
            duration: i.options.speed,
            easing: i.options.easing,
            step: function(e) {
                e = Math.ceil(e),
                i.options.vertical === !1 ? (r[i.animType] = "translate(" + e + "px, 0px)", i.$slideTrack.css(r)) : (r[i.animType] = "translate(0px," + e + "px)", i.$slideTrack.css(r))
            },
            complete: function() {
                n && n.call()
            }
        })) : (i.applyTransition(), t = Math.ceil(t), r[i.animType] = i.options.vertical === !1 ? "translate3d(" + t + "px, 0px, 0px)": "translate3d(0px," + t + "px, 0px)", i.$slideTrack.css(r), n && setTimeout(function() {
            i.disableTransition(),
            n.call()
        },
        i.options.speed))
    },
    t.prototype.asNavFor = function(t) {
        var n = this,
        r = null !== n.options.asNavFor ? e(n.options.asNavFor).slick("getSlick") : null;
        null !== r && r.slideHandler(t, !0)
    },
    t.prototype.applyTransition = function(e) {
        var t = this,
        n = {};
        n[t.transitionType] = t.options.fade === !1 ? t.transformType + " " + t.options.speed + "ms " + t.options.cssEase: "opacity " + t.options.speed + "ms " + t.options.cssEase,
        t.options.fade === !1 ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n)
    },
    t.prototype.autoPlay = function() {
        var e = this;
        e.autoPlayTimer && clearInterval(e.autoPlayTimer),
        e.slideCount > e.options.slidesToShow && e.paused !== !0 && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed))
    },
    t.prototype.autoPlayClear = function() {
        var e = this;
        e.autoPlayTimer && clearInterval(e.autoPlayTimer)
    },
    t.prototype.autoPlayIterator = function() {
        var e = this;
        e.options.infinite === !1 ? 1 === e.direction ? (e.currentSlide + 1 === e.slideCount - 1 && (e.direction = 0), e.slideHandler(e.currentSlide + e.options.slidesToScroll)) : (0 === e.currentSlide - 1 && (e.direction = 1), e.slideHandler(e.currentSlide - e.options.slidesToScroll)) : e.slideHandler(e.currentSlide + e.options.slidesToScroll)
    },
    t.prototype.buildArrows = function() {
        var t = this;
        t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow = e(t.options.prevArrow), t.$nextArrow = e(t.options.nextArrow), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.appendTo(t.options.appendArrows), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows), t.options.infinite !== !0 && t.$prevArrow.addClass("slick-disabled"))
    },
    t.prototype.buildDots = function() {
        var t, n, r = this;
        if (r.options.dots === !0 && r.slideCount > r.options.slidesToShow) {
            for (n = '<ul class="' + r.options.dotsClass + '">', t = 0; t <= r.getDotCount(); t += 1) n += "<li>" + r.options.customPaging.call(this, r, t) + "</li>";
            n += "</ul>",
            r.$dots = e(n).appendTo(r.options.appendDots),
            r.$dots.find("li").first().addClass("slick-active")
        }
    },
    t.prototype.buildOut = function() {
        var t = this;
        t.$slides = t.$slider.children(t.options.slide + ":not(.slick-cloned)").addClass("slick-slide"),
        t.slideCount = t.$slides.length,
        t.$slides.each(function(t, n) {
            e(n).attr("data-slick-index", t)
        }),
        t.$slidesCache = t.$slides,
        t.$slider.addClass("slick-slider"),
        t.$slideTrack = 0 === t.slideCount ? e('<div class="slick-track"/>').appendTo(t.$slider) : t.$slides.wrapAll('<div class="slick-track"/>').parent(),
        t.$list = t.$slideTrack.wrap('<div class="slick-list"/>').parent(),
        t.$slideTrack.css("opacity", 0),
        (t.options.centerMode === !0 || t.options.swipeToSlide === !0) && (t.options.slidesToScroll = 1),
        e("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"),
        t.setupInfinite(),
        t.buildArrows(),
        t.buildDots(),
        t.updateDots(),
        t.options.accessibility === !0 && t.$list.prop("tabIndex", 0),
        t.setSlideClasses("number" == typeof this.currentSlide ? this.currentSlide: 0),
        t.options.draggable === !0 && t.$list.addClass("draggable")
    },
    t.prototype.checkResponsive = function(t) {
        var n, r, i, s = this,
        o = s.$slider.width(),
        u = window.innerWidth || e(window).width();
        if ("window" === s.respondTo ? i = u: "slider" === s.respondTo ? i = o: "min" === s.respondTo && (i = Math.min(u, o)), s.originalSettings.responsive && s.originalSettings.responsive.length > -1 && null !== s.originalSettings.responsive) {
            r = null;
            for (n in s.breakpoints) s.breakpoints.hasOwnProperty(n) && (s.originalSettings.mobileFirst === !1 ? i < s.breakpoints[n] && (r = s.breakpoints[n]) : i > s.breakpoints[n] && (r = s.breakpoints[n]));
            null !== r ? null !== s.activeBreakpoint ? r !== s.activeBreakpoint && (s.activeBreakpoint = r, "unslick" === s.breakpointSettings[r] ? s.unslick() : (s.options = e.extend({},
            s.originalSettings, s.breakpointSettings[r]), t === !0 && (s.currentSlide = s.options.initialSlide), s.refresh())) : (s.activeBreakpoint = r, "unslick" === s.breakpointSettings[r] ? s.unslick() : (s.options = e.extend({},
            s.originalSettings, s.breakpointSettings[r]), t === !0 && (s.currentSlide = s.options.initialSlide), s.refresh())) : null !== s.activeBreakpoint && (s.activeBreakpoint = null, s.options = s.originalSettings, t === !0 && (s.currentSlide = s.options.initialSlide), s.refresh())
        }
    },
    t.prototype.changeSlide = function(t, n) {
        var r, i, s, o = this,
        u = e(t.target);
        switch (u.is("a") && t.preventDefault(), s = 0 !== o.slideCount % o.options.slidesToScroll, r = s ? 0 : (o.slideCount - o.currentSlide) % o.options.slidesToScroll, t.data.message) {
        case "previous":
            i = 0 === r ? o.options.slidesToScroll: o.options.slidesToShow - r,
            o.slideCount > o.options.slidesToShow && o.slideHandler(o.currentSlide - i, !1, n);
            break;
        case "next":
            i = 0 === r ? o.options.slidesToScroll: r,
            o.slideCount > o.options.slidesToShow && o.slideHandler(o.currentSlide + i, !1, n);
            break;
        case "index":
            var f = 0 === t.data.index ? 0 : t.data.index || e(t.target).parent().index() * o.options.slidesToScroll;
            o.slideHandler(o.checkNavigable(f), !1, n);
            break;
        default:
            return
        }
    },
    t.prototype.checkNavigable = function(e) {
        var t, n, r = this;
        if (t = r.getNavigableIndexes(), n = 0, e > t[t.length - 1]) e = t[t.length - 1];
        else for (var i in t) {
            if (e < t[i]) {
                e = n;
                break
            }
            n = t[i]
        }
        return e
    },
    t.prototype.clickHandler = function(e) {
        var t = this;
        t.shouldClick === !1 && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault())
    },
    t.prototype.destroy = function() {
        var t = this;
        t.autoPlayClear(),
        t.touchObject = {},
        e(".slick-cloned", t.$slider).remove(),
        t.$dots && t.$dots.remove(),
        t.$prevArrow && "object" != typeof t.options.prevArrow && t.$prevArrow.remove(),
        t.$nextArrow && "object" != typeof t.options.nextArrow && t.$nextArrow.remove(),
        t.$slides.removeClass("slick-slide slick-active slick-center slick-visible").removeAttr("data-slick-index").css({
            position: "",
            left: "",
            top: "",
            zIndex: "",
            opacity: "",
            width: ""
        }),
        t.$slider.removeClass("slick-slider"),
        t.$slider.removeClass("slick-initialized"),
        t.$list.off(".slick"),
        e(window).off(".slick-" + t.instanceUid),
        e(document).off(".slick-" + t.instanceUid),
        t.$slider.html(t.$slides)
    },
    t.prototype.disableTransition = function(e) {
        var t = this,
        n = {};
        n[t.transitionType] = "",
        t.options.fade === !1 ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n)
    },
    t.prototype.fadeSlide = function(e, t) {
        var n = this;
        n.cssTransitions === !1 ? (n.$slides.eq(e).css({
            zIndex: 1e3
        }), n.$slides.eq(e).animate({
            opacity: 1
        },
        n.options.speed, n.options.easing, t)) : (n.applyTransition(e), n.$slides.eq(e).css({
            opacity: 1,
            zIndex: 1e3
        }), t && setTimeout(function() {
            n.disableTransition(e),
            t.call()
        },
        n.options.speed))
    },
    t.prototype.filterSlides = t.prototype.slickFilter = function(e) {
        var t = this;
        null !== e && (t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.filter(e).appendTo(t.$slideTrack), t.reinit())
    },
    t.prototype.getCurrent = t.prototype.slickCurrentSlide = function() {
        var e = this;
        return e.currentSlide
    },
    t.prototype.getDotCount = function() {
        var e = this,
        t = 0,
        n = 0,
        r = 0;
        if (e.options.infinite === !0) r = Math.ceil(e.slideCount / e.options.slidesToScroll);
        else if (e.options.centerMode === !0) r = e.slideCount;
        else for (; t < e.slideCount;)++r,
        t = n + e.options.slidesToShow,
        n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll: e.options.slidesToShow;
        return r - 1
    },
    t.prototype.getLeft = function(e) {
        var t, n, r, i = this,
        s = 0;
        return i.slideOffset = 0,
        n = i.$slides.first().outerHeight(),
        i.options.infinite === !0 ? (i.slideCount > i.options.slidesToShow && (i.slideOffset = -1 * i.slideWidth * i.options.slidesToShow, s = -1 * n * i.options.slidesToShow), 0 !== i.slideCount % i.options.slidesToScroll && e + i.options.slidesToScroll > i.slideCount && i.slideCount > i.options.slidesToShow && (e > i.slideCount ? (i.slideOffset = -1 * (i.options.slidesToShow - (e - i.slideCount)) * i.slideWidth, s = -1 * (i.options.slidesToShow - (e - i.slideCount)) * n) : (i.slideOffset = -1 * i.slideCount % i.options.slidesToScroll * i.slideWidth, s = -1 * i.slideCount % i.options.slidesToScroll * n))) : e + i.options.slidesToShow > i.slideCount && (i.slideOffset = (e + i.options.slidesToShow - i.slideCount) * i.slideWidth, s = (e + i.options.slidesToShow - i.slideCount) * n),
        i.slideCount <= i.options.slidesToShow && (i.slideOffset = 0, s = 0),
        i.options.centerMode === !0 && i.options.infinite === !0 ? i.slideOffset += i.slideWidth * Math.floor(i.options.slidesToShow / 2) - i.slideWidth: i.options.centerMode === !0 && (i.slideOffset = 0, i.slideOffset += i.slideWidth * Math.floor(i.options.slidesToShow / 2)),
        t = i.options.vertical === !1 ? -1 * e * i.slideWidth + i.slideOffset: -1 * e * n + s,
        i.options.variableWidth === !0 && (r = i.slideCount <= i.options.slidesToShow || i.options.infinite === !1 ? i.$slideTrack.children(".slick-slide").eq(e) : i.$slideTrack.children(".slick-slide").eq(e + i.options.slidesToShow), t = r[0] ? -1 * r[0].offsetLeft: 0, i.options.centerMode === !0 && (r = i.options.infinite === !1 ? i.$slideTrack.children(".slick-slide").eq(e) : i.$slideTrack.children(".slick-slide").eq(e + i.options.slidesToShow + 1), t = r[0] ? -1 * r[0].offsetLeft: 0, t += (i.$list.width() - r.outerWidth()) / 2)),
        t
    },
    t.prototype.getOption = t.prototype.slickGetOption = function(e) {
        var t = this;
        return t.options[e]
    },
    t.prototype.getNavigableIndexes = function() {
        var e, t = this,
        n = 0,
        r = 0,
        i = [];
        for (t.options.infinite === !1 ? (e = t.slideCount - t.options.slidesToShow + 1, t.options.centerMode === !0 && (e = t.slideCount)) : (n = -1 * t.slideCount, r = -1 * t.slideCount, e = 2 * t.slideCount); e > n;) i.push(n),
        n = r + t.options.slidesToScroll,
        r += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll: t.options.slidesToShow;
        return i
    },
    t.prototype.getSlick = function() {
        return this
    },
    t.prototype.getSlideCount = function() {
        var t, n, r, i = this;
        return r = i.options.centerMode === !0 ? i.slideWidth * Math.floor(i.options.slidesToShow / 2) : 0,
        i.options.swipeToSlide === !0 ? (i.$slideTrack.find(".slick-slide").each(function(t, s) {
            return s.offsetLeft - r + e(s).outerWidth() / 2 > -1 * i.swipeLeft ? (n = s, !1) : void 0
        }), t = Math.abs(e(n).attr("data-slick-index") - i.currentSlide) || 1) : i.options.slidesToScroll
    },
    t.prototype.goTo = t.prototype.slickGoTo = function(e, t) {
        var n = this;
        n.changeSlide({
            data: {
                message: "index",
                index: parseInt(e)
            }
        },
        t)
    },
    t.prototype.init = function() {
        var t = this;
        e(t.$slider).hasClass("slick-initialized") || (e(t.$slider).addClass("slick-initialized"), t.buildOut(), t.setProps(), t.startLoad(), t.loadSlider(), t.initializeEvents(), t.updateArrows(), t.updateDots()),
        t.$slider.trigger("init", [t])
    },
    t.prototype.initArrowEvents = function() {
        var e = this;
        e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow.on("click.slick", {
            message: "previous"
        },
        e.changeSlide), e.$nextArrow.on("click.slick", {
            message: "next"
        },
        e.changeSlide))
    },
    t.prototype.initDotEvents = function() {
        var t = this;
        t.options.dots === !0 && t.slideCount > t.options.slidesToShow && e("li", t.$dots).on("click.slick", {
            message: "index"
        },
        t.changeSlide),
        t.options.dots === !0 && t.options.pauseOnDotsHover === !0 && t.options.autoplay === !0 && e("li", t.$dots).on("mouseenter.slick",
        function() {
            t.paused = !0,
            t.autoPlayClear()
        }).on("mouseleave.slick",
        function() {
            t.paused = !1,
            t.autoPlay()
        })
    },
    t.prototype.initializeEvents = function() {
        var t = this;
        t.initArrowEvents(),
        t.initDotEvents(),
        t.$list.on("touchstart.slick mousedown.slick", {
            action: "start"
        },
        t.swipeHandler),
        t.$list.on("touchmove.slick mousemove.slick", {
            action: "move"
        },
        t.swipeHandler),
        t.$list.on("touchend.slick mouseup.slick", {
            action: "end"
        },
        t.swipeHandler),
        t.$list.on("touchcancel.slick mouseleave.slick", {
            action: "end"
        },
        t.swipeHandler),
        t.$list.on("click.slick", t.clickHandler),
        t.options.autoplay === !0 && (e(document).on(t.visibilityChange,
        function() {
            t.visibility()
        }), t.options.pauseOnHover === !0 && (t.$list.on("mouseenter.slick",
        function() {
            t.paused = !0,
            t.autoPlayClear()
        }), t.$list.on("mouseleave.slick",
        function() {
            t.paused = !1,
            t.autoPlay()
        }))),
        t.options.accessibility === !0 && t.$list.on("keydown.slick", t.keyHandler),
        t.options.focusOnSelect === !0 && e(t.$slideTrack).children().on("click.slick", t.selectHandler),
        e(window).on("orientationchange.slick.slick-" + t.instanceUid,
        function() {
            t.checkResponsive(),
            t.setPosition()
        }),
        e(window).on("resize.slick.slick-" + t.instanceUid,
        function() {
            e(window).width() !== t.windowWidth && (clearTimeout(t.windowDelay), t.windowDelay = window.setTimeout(function() {
                t.windowWidth = e(window).width(),
                t.checkResponsive(),
                t.setPosition()
            },
            50))
        }),
        e("*[draggable!=true]", t.$slideTrack).on("dragstart",
        function(e) {
            e.preventDefault()
        }),
        e(window).on("load.slick.slick-" + t.instanceUid, t.setPosition),
        e(document).on("ready.slick.slick-" + t.instanceUid, t.setPosition)
    },
    t.prototype.initUI = function() {
        var e = this;
        e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(), e.$nextArrow.show()),
        e.options.dots === !0 && e.slideCount > e.options.slidesToShow && e.$dots.show(),
        e.options.autoplay === !0 && e.autoPlay()
    },
    t.prototype.keyHandler = function(e) {
        var t = this;
        37 === e.keyCode && t.options.accessibility === !0 ? t.changeSlide({
            data: {
                message: "previous"
            }
        }) : 39 === e.keyCode && t.options.accessibility === !0 && t.changeSlide({
            data: {
                message: "next"
            }
        })
    },
    t.prototype.lazyLoad = function() {
        function t(t) {
            e("img[data-lazy]", t).each(function() {
                var t = e(this),
                n = e(this).attr("data-lazy");
                t.load(function() {
                    t.animate({
                        opacity: 1
                    },
                    200)
                }).css({
                    opacity: 0
                }).attr("src", n).removeAttr("data-lazy").removeClass("slick-loading")
            })
        }
        var n, r, i, s, o = this;
        o.options.centerMode === !0 ? o.options.infinite === !0 ? (i = o.currentSlide + (o.options.slidesToShow / 2 + 1), s = i + o.options.slidesToShow + 2) : (i = Math.max(0, o.currentSlide - (o.options.slidesToShow / 2 + 1)), s = 2 + (o.options.slidesToShow / 2 + 1) + o.currentSlide) : (i = o.options.infinite ? o.options.slidesToShow + o.currentSlide: o.currentSlide, s = i + o.options.slidesToShow, o.options.fade === !0 && (i > 0 && i--, s <= o.slideCount && s++)),
        n = o.$slider.find(".slick-slide").slice(i, s),
        t(n),
        o.slideCount <= o.options.slidesToShow ? (r = o.$slider.find(".slick-slide"), t(r)) : o.currentSlide >= o.slideCount - o.options.slidesToShow ? (r = o.$slider.find(".slick-cloned").slice(0, o.options.slidesToShow), t(r)) : 0 === o.currentSlide && (r = o.$slider.find(".slick-cloned").slice( - 1 * o.options.slidesToShow), t(r))
    },
    t.prototype.loadSlider = function() {
        var e = this;
        e.setPosition(),
        e.$slideTrack.css({
            opacity: 1
        }),
        e.$slider.removeClass("slick-loading"),
        e.initUI(),
        "progressive" === e.options.lazyLoad && e.progressiveLazyLoad()
    },
    t.prototype.next = t.prototype.slickNext = function() {
        var e = this;
        e.changeSlide({
            data: {
                message: "next"
            }
        })
    },
    t.prototype.pause = t.prototype.slickPause = function() {
        var e = this;
        e.autoPlayClear(),
        e.paused = !0
    },
    t.prototype.play = t.prototype.slickPlay = function() {
        var e = this;
        e.paused = !1,
        e.autoPlay()
    },
    t.prototype.postSlide = function(e) {
        var t = this;
        t.$slider.trigger("afterChange", [t, e]),
        t.animating = !1,
        t.setPosition(),
        t.swipeLeft = null,
        t.options.autoplay === !0 && t.paused === !1 && t.autoPlay()
    },
    t.prototype.prev = t.prototype.slickPrev = function() {
        var e = this;
        e.changeSlide({
            data: {
                message: "previous"
            }
        })
    },
    t.prototype.progressiveLazyLoad = function() {
        var t, n, r = this;
        t = e("img[data-lazy]", r.$slider).length,
        t > 0 && (n = e("img[data-lazy]", r.$slider).first(), n.attr("src", n.attr("data-lazy")).removeClass("slick-loading").load(function() {
            n.removeAttr("data-lazy"),
            r.progressiveLazyLoad()
        }).error(function() {
            n.removeAttr("data-lazy"),
            r.progressiveLazyLoad()
        }))
    },
    t.prototype.refresh = function() {
        var t = this,
        n = t.currentSlide;
        t.destroy(),
        e.extend(t, t.initials),
        t.init(),
        t.changeSlide({
            data: {
                message: "index",
                index: n
            }
        },
        !0)
    },
    t.prototype.reinit = function() {
        var t = this;
        t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide"),
        t.slideCount = t.$slides.length,
        t.currentSlide >= t.slideCount && 0 !== t.currentSlide && (t.currentSlide = t.currentSlide - t.options.slidesToScroll),
        t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0),
        t.setProps(),
        t.setupInfinite(),
        t.buildArrows(),
        t.updateArrows(),
        t.initArrowEvents(),
        t.buildDots(),
        t.updateDots(),
        t.initDotEvents(),
        t.options.focusOnSelect === !0 && e(t.$slideTrack).children().on("click.slick", t.selectHandler),
        t.setSlideClasses(0),
        t.setPosition(),
        t.$slider.trigger("reInit", [t])
    },
    t.prototype.removeSlide = t.prototype.slickRemove = function(e, t, n) {
        var r = this;
        return "boolean" == typeof e ? (t = e, e = t === !0 ? 0 : r.slideCount - 1) : e = t === !0 ? --e: e,
        r.slideCount < 1 || 0 > e || e > r.slideCount - 1 ? !1 : (r.unload(), n === !0 ? r.$slideTrack.children().remove() : r.$slideTrack.children(this.options.slide).eq(e).remove(), r.$slides = r.$slideTrack.children(this.options.slide), r.$slideTrack.children(this.options.slide).detach(), r.$slideTrack.append(r.$slides), r.$slidesCache = r.$slides, r.reinit(), void 0)
    },
    t.prototype.setCSS = function(e) {
        var t, n, r = this,
        i = {};
        r.options.rtl === !0 && (e = -e),
        t = "left" == r.positionProp ? Math.ceil(e) + "px": "0px",
        n = "top" == r.positionProp ? Math.ceil(e) + "px": "0px",
        i[r.positionProp] = e,
        r.transformsEnabled === !1 ? r.$slideTrack.css(i) : (i = {},
        r.cssTransitions === !1 ? (i[r.animType] = "translate(" + t + ", " + n + ")", r.$slideTrack.css(i)) : (i[r.animType] = "translate3d(" + t + ", " + n + ", 0px)", r.$slideTrack.css(i)))
    },
    t.prototype.setDimensions = function() {
        var e = this;
        if (e.options.vertical === !1 ? e.options.centerMode === !0 && e.$list.css({
            padding: "0px " + e.options.centerPadding
        }) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow), e.options.centerMode === !0 && e.$list.css({
            padding: e.options.centerPadding + " 0px"
        })), e.listWidth = e.$list.width(), e.listHeight = e.$list.height(), e.options.vertical === !1 && e.options.variableWidth === !1) e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow),
        e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length));
        else if (e.options.variableWidth === !0) {
            var t = 0;
            e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow),
            e.$slideTrack.children(".slick-slide").each(function() {
                t += e.listWidth
            }),
            e.$slideTrack.width(Math.ceil(t) + 1)
        } else e.slideWidth = Math.ceil(e.listWidth),
        e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length));
        var n = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
        e.options.variableWidth === !1 && e.$slideTrack.children(".slick-slide").width(e.slideWidth - n)
    },
    t.prototype.setFade = function() {
        var t, n = this;
        n.$slides.each(function(r, i) {
            t = -1 * n.slideWidth * r,
            n.options.rtl === !0 ? e(i).css({
                position: "relative",
                right: t,
                top: 0,
                zIndex: 800,
                opacity: 0
            }) : e(i).css({
                position: "relative",
                left: t,
                top: 0,
                zIndex: 800,
                opacity: 0
            })
        }),
        n.$slides.eq(n.currentSlide).css({
            zIndex: 900,
            opacity: 1
        })
    },
    t.prototype.setHeight = function() {
        var e = this;
        if (1 === e.options.slidesToShow && e.options.adaptiveHeight === !0 && e.options.vertical === !1) {
            var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
            e.$list.css("height", t)
        }
    },
    t.prototype.setOption = t.prototype.slickSetOption = function(e, t, n) {
        var r = this;
        r.options[e] = t,
        n === !0 && (r.unload(), r.reinit())
    },
    t.prototype.setPosition = function() {
        var e = this;
        e.setDimensions(),
        e.setHeight(),
        e.options.fade === !1 ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(),
        e.$slider.trigger("setPosition", [e])
    },
    t.prototype.setProps = function() {
        var e = this,
        t = document.body.style;
        e.positionProp = e.options.vertical === !0 ? "top": "left",
        "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"),
        (void 0 !== t.WebkitTransition || void 0 !== t.MozTransition || void 0 !== t.msTransition) && e.options.useCSS === !0 && (e.cssTransitions = !0),
        void 0 !== t.OTransform && (e.animType = "OTransform", e.transformType = "-o-transform", e.transitionType = "OTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)),
        void 0 !== t.MozTransform && (e.animType = "MozTransform", e.transformType = "-moz-transform", e.transitionType = "MozTransition", void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)),
        void 0 !== t.webkitTransform && (e.animType = "webkitTransform", e.transformType = "-webkit-transform", e.transitionType = "webkitTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)),
        void 0 !== t.msTransform && (e.animType = "msTransform", e.transformType = "-ms-transform", e.transitionType = "msTransition", void 0 === t.msTransform && (e.animType = !1)),
        void 0 !== t.transform && e.animType !== !1 && (e.animType = "transform", e.transformType = "transform", e.transitionType = "transition"),
        e.transformsEnabled = null !== e.animType && e.animType !== !1
    },
    t.prototype.setSlideClasses = function(e) {
        var t, n, r, i, s = this;
        s.$slider.find(".slick-slide").removeClass("slick-active").removeClass("slick-center"),
        n = s.$slider.find(".slick-slide"),
        s.options.centerMode === !0 ? (t = Math.floor(s.options.slidesToShow / 2), s.options.infinite === !0 && (e >= t && e <= s.slideCount - 1 - t ? s.$slides.slice(e - t, e + t + 1).addClass("slick-active") : (r = s.options.slidesToShow + e, n.slice(r - t + 1, r + t + 2).addClass("slick-active")), 0 === e ? n.eq(n.length - 1 - s.options.slidesToShow).addClass("slick-center") : e === s.slideCount - 1 && n.eq(s.options.slidesToShow).addClass("slick-center")), s.$slides.eq(e).addClass("slick-center")) : e >= 0 && e <= s.slideCount - s.options.slidesToShow ? s.$slides.slice(e, e + s.options.slidesToShow).addClass("slick-active") : n.length <= s.options.slidesToShow ? n.addClass("slick-active") : (i = s.slideCount % s.options.slidesToShow, r = s.options.infinite === !0 ? s.options.slidesToShow + e: e, s.options.slidesToShow == s.options.slidesToScroll && s.slideCount - e < s.options.slidesToShow ? n.slice(r - (s.options.slidesToShow - i), r + i).addClass("slick-active") : n.slice(r, r + s.options.slidesToShow).addClass("slick-active")),
        "ondemand" === s.options.lazyLoad && s.lazyLoad()
    },
    t.prototype.setupInfinite = function() {
        var t, n, r, i = this;
        if (i.options.fade === !0 && (i.options.centerMode = !1), i.options.infinite === !0 && i.options.fade === !1 && (n = null, i.slideCount > i.options.slidesToShow)) {
            for (r = i.options.centerMode === !0 ? i.options.slidesToShow + 1 : i.options.slidesToShow, t = i.slideCount; t > i.slideCount - r; t -= 1) n = t - 1,
            e(i.$slides[n]).clone(!0).attr("id", "").attr("data-slick-index", n - i.slideCount).prependTo(i.$slideTrack).addClass("slick-cloned");
            for (t = 0; r > t; t += 1) n = t,
            e(i.$slides[n]).clone(!0).attr("id", "").attr("data-slick-index", n + i.slideCount).appendTo(i.$slideTrack).addClass("slick-cloned");
            i.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                e(this).attr("id", "")
            })
        }
    },
    t.prototype.selectHandler = function(t) {
        var n = this,
        r = parseInt(e(t.target).parents(".slick-slide").attr("data-slick-index"));
        return r || (r = 0),
        n.slideCount <= n.options.slidesToShow ? (n.$slider.find(".slick-slide").removeClass("slick-active"), n.$slides.eq(r).addClass("slick-active"), n.options.centerMode === !0 && (n.$slider.find(".slick-slide").removeClass("slick-center"), n.$slides.eq(r).addClass("slick-center")), n.asNavFor(r), void 0) : (n.slideHandler(r), void 0)
    },
    t.prototype.slideHandler = function(e, t, n) {
        var r, i, s, o, u = null,
        a = this;
        return t = t || !1,
        a.animating === !0 && a.options.waitForAnimate === !0 || a.options.fade === !0 && a.currentSlide === e || a.slideCount <= a.options.slidesToShow ? void 0 : (t === !1 && a.asNavFor(e), r = e, u = a.getLeft(r), o = a.getLeft(a.currentSlide), a.currentLeft = null === a.swipeLeft ? o: a.swipeLeft, a.options.infinite === !1 && a.options.centerMode === !1 && (0 > e || e > a.getDotCount() * a.options.slidesToScroll) ? (a.options.fade === !1 && (r = a.currentSlide, n !== !0 ? a.animateSlide(o,
        function() {
            a.postSlide(r)
        }) : a.postSlide(r)), void 0) : a.options.infinite === !1 && a.options.centerMode === !0 && (0 > e || e > a.slideCount - a.options.slidesToScroll) ? (a.options.fade === !1 && (r = a.currentSlide, n !== !0 ? a.animateSlide(o,
        function() {
            a.postSlide(r)
        }) : a.postSlide(r)), void 0) : (a.options.autoplay === !0 && clearInterval(a.autoPlayTimer), i = 0 > r ? 0 !== a.slideCount % a.options.slidesToScroll ? a.slideCount - a.slideCount % a.options.slidesToScroll: a.slideCount + r: r >= a.slideCount ? 0 !== a.slideCount % a.options.slidesToScroll ? 0 : r - a.slideCount: r, a.animating = !0, a.$slider.trigger("beforeChange", [a, a.currentSlide, i]), s = a.currentSlide, a.currentSlide = i, a.setSlideClasses(a.currentSlide), a.updateDots(), a.updateArrows(), a.options.fade === !0 ? (n !== !0 ? a.fadeSlide(i,
        function() {
            a.postSlide(i)
        }) : a.postSlide(i), a.animateHeight(), void 0) : (n !== !0 ? a.animateSlide(u,
        function() {
            a.postSlide(i)
        }) : a.postSlide(i), void 0)))
    },
    t.prototype.startLoad = function() {
        var e = this;
        e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(), e.$nextArrow.hide()),
        e.options.dots === !0 && e.slideCount > e.options.slidesToShow && e.$dots.hide(),
        e.$slider.addClass("slick-loading")
    },
    t.prototype.swipeDirection = function() {
        var e, t, n, r, i = this;
        return e = i.touchObject.startX - i.touchObject.curX,
        t = i.touchObject.startY - i.touchObject.curY,
        n = Math.atan2(t, e),
        r = Math.round(180 * n / Math.PI),
        0 > r && (r = 360 - Math.abs(r)),
        45 >= r && r >= 0 ? i.options.rtl === !1 ? "left": "right": 360 >= r && r >= 315 ? i.options.rtl === !1 ? "left": "right": r >= 135 && 225 >= r ? i.options.rtl === !1 ? "right": "left": "vertical"
    },
    t.prototype.swipeEnd = function() {
        var e, t = this;
        if (t.dragging = !1, t.shouldClick = t.touchObject.swipeLength > 10 ? !1 : !0, void 0 === t.touchObject.curX) return ! 1;
        if (t.touchObject.edgeHit === !0 && t.$slider.trigger("edge", [t, t.swipeDirection()]), t.touchObject.swipeLength >= t.touchObject.minSwipe) switch (t.swipeDirection()) {
        case "left":
            e = t.options.swipeToSlide ? t.checkNavigable(t.currentSlide + t.getSlideCount()) : t.currentSlide + t.getSlideCount(),
            t.slideHandler(e),
            t.currentDirection = 0,
            t.touchObject = {},
            t.$slider.trigger("swipe", [t, "left"]);
            break;
        case "right":
            e = t.options.swipeToSlide ? t.checkNavigable(t.currentSlide - t.getSlideCount()) : t.currentSlide - t.getSlideCount(),
            t.slideHandler(e),
            t.currentDirection = 1,
            t.touchObject = {},
            t.$slider.trigger("swipe", [t, "right"])
        } else t.touchObject.startX !== t.touchObject.curX && (t.slideHandler(t.currentSlide), t.touchObject = {})
    },
    t.prototype.swipeHandler = function(e) {
        var t = this;
        if (! (t.options.swipe === !1 || "ontouchend" in document && t.options.swipe === !1 || t.options.draggable === !1 && -1 !== e.type.indexOf("mouse"))) switch (t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length: 1, t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold, e.data.action) {
        case "start":
            t.swipeStart(e);
            break;
        case "move":
            t.swipeMove(e);
            break;
        case "end":
            t.swipeEnd(e)
        }
    },
    t.prototype.swipeMove = function(e) {
        var t, n, r, i, s, o = this;
        return s = void 0 !== e.originalEvent ? e.originalEvent.touches: null,
        !o.dragging || s && 1 !== s.length ? !1 : (t = o.getLeft(o.currentSlide), o.touchObject.curX = void 0 !== s ? s[0].pageX: e.clientX, o.touchObject.curY = void 0 !== s ? s[0].pageY: e.clientY, o.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(o.touchObject.curX - o.touchObject.startX, 2))), n = o.swipeDirection(), "vertical" !== n ? (void 0 !== e.originalEvent && o.touchObject.swipeLength > 4 && e.preventDefault(), i = (o.options.rtl === !1 ? 1 : -1) * (o.touchObject.curX > o.touchObject.startX ? 1 : -1), r = o.touchObject.swipeLength, o.touchObject.edgeHit = !1, o.options.infinite === !1 && (0 === o.currentSlide && "right" === n || o.currentSlide >= o.getDotCount() && "left" === n) && (r = o.touchObject.swipeLength * o.options.edgeFriction, o.touchObject.edgeHit = !0), o.swipeLeft = o.options.vertical === !1 ? t + r * i: t + r * (o.$list.height() / o.listWidth) * i, o.options.fade === !0 || o.options.touchMove === !1 ? !1 : o.animating === !0 ? (o.swipeLeft = null, !1) : (o.setCSS(o.swipeLeft), void 0)) : void 0)
    },
    t.prototype.swipeStart = function(e) {
        var t, n = this;
        return 1 !== n.touchObject.fingerCount || n.slideCount <= n.options.slidesToShow ? (n.touchObject = {},
        !1) : (void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]), n.touchObject.startX = n.touchObject.curX = void 0 !== t ? t.pageX: e.clientX, n.touchObject.startY = n.touchObject.curY = void 0 !== t ? t.pageY: e.clientY, n.dragging = !0, void 0)
    },
    t.prototype.unfilterSlides = t.prototype.slickUnfilter = function() {
        var e = this;
        null !== e.$slidesCache && (e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.appendTo(e.$slideTrack), e.reinit())
    },
    t.prototype.unload = function() {
        var t = this;
        e(".slick-cloned", t.$slider).remove(),
        t.$dots && t.$dots.remove(),
        t.$prevArrow && "object" != typeof t.options.prevArrow && t.$prevArrow.remove(),
        t.$nextArrow && "object" != typeof t.options.nextArrow && t.$nextArrow.remove(),
        t.$slides.removeClass("slick-slide slick-active slick-visible").css("width", "")
    },
    t.prototype.unslick = function() {
        var e = this;
        e.destroy()
    },
    t.prototype.updateArrows = function() {
        var e, t = this;
        e = Math.floor(t.options.slidesToShow / 2),
        t.options.arrows === !0 && t.options.infinite !== !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow.removeClass("slick-disabled"), t.$nextArrow.removeClass("slick-disabled"), 0 === t.currentSlide ? (t.$prevArrow.addClass("slick-disabled"), t.$nextArrow.removeClass("slick-disabled")) : t.currentSlide >= t.slideCount - t.options.slidesToShow && t.options.centerMode === !1 ? (t.$nextArrow.addClass("slick-disabled"), t.$prevArrow.removeClass("slick-disabled")) : t.currentSlide >= t.slideCount - 1 && t.options.centerMode === !0 && (t.$nextArrow.addClass("slick-disabled"), t.$prevArrow.removeClass("slick-disabled")))
    },
    t.prototype.updateDots = function() {
        var e = this;
        null !== e.$dots && (e.$dots.find("li").removeClass("slick-active"), e.$dots.find("li").eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass("slick-active"))
    },
    t.prototype.visibility = function() {
        var e = this;
        document[e.hidden] ? (e.paused = !0, e.autoPlayClear()) : (e.paused = !1, e.autoPlay())
    },
    e.fn.slick = function() {
        var e, n = this,
        r = arguments[0],
        i = Array.prototype.slice.call(arguments, 1),
        s = n.length,
        o = 0;
        for (o; s > o; o++) if ("object" == typeof r || "undefined" == typeof r ? n[o].slick = new t(n[o], r) : e = n[o].slick[r].apply(n[o].slick, i), "undefined" != typeof e) return e;
        return n
    },
    e(function() {
        e("[data-slick]").slick()
    })
}),
function(e, t, n, r, i) {
    var s = e(t),
    o = e(n);
    e.fn.fullpage = function(u) {
        function a(e) {
            e.find(".fp-slides").after('<div class="fp-controlArrow fp-prev"></div><div class="fp-controlArrow fp-next"></div>'),
            "#fff" != u.controlArrowColor && (e.find(".fp-controlArrow.fp-next").css("border-color", "transparent transparent transparent " + u.controlArrowColor), e.find(".fp-controlArrow.fp-prev").css("border-color", "transparent " + u.controlArrowColor + " transparent transparent")),
            u.loopHorizontal || e.find(".fp-controlArrow.fp-prev").hide()
        }
        function f() {
            ht.append('<div id="fp-nav"><ul></ul></div>'),
            Tt = e("#fp-nav"),
            Tt.addClass(function() {
                return u.showActiveTooltip ? "fp-show-active " + u.navigationPosition: u.navigationPosition
            });
            for (var t = 0; t < e(".fp-section").length; t++) {
                var n = "";
                u.anchors.length && (n = u.anchors[t]);
                var n = '<li><a href="#' + n + '"><span></span></a>',
                r = u.navigationTooltips[t];
                "undefined" != typeof r && "" !== r && (n += '<div class="fp-tooltip ' + u.navigationPosition + '">' + r + "</div>"),
                n += "</li>",
                Tt.find("ul").append(n)
            }
        }
        function c() {
            e(".fp-section").each(function() {
                var t = e(this).find(".fp-slide");
                t.length ? t.each(function() {
                    R(e(this))
                }) : R(e(this))
            }),
            e.isFunction(u.afterRender) && u.afterRender.call(this)
        }
        function p() {
            var t;
            if (!u.autoScrolling || u.scrollBar) {
                for (var i = s.scrollTop(), o = 0, a = r.abs(i - n.querySelectorAll(".fp-section")[0].offsetTop), f = n.querySelectorAll(".fp-section"), c = 0; c < f.length; ++c) {
                    var h = r.abs(i - f[c].offsetTop);
                    h < a && (o = c, a = h)
                }
                t = e(f).eq(o)
            }
            if (!u.autoScrolling || u.scrollBar) {
                if (!t.hasClass("active")) {
                    At = !0,
                    i = e(".fp-section.active"),
                    o = i.index(".fp-section") + 1,
                    a = q(t),
                    f = t.data("anchor"),
                    c = t.index(".fp-section") + 1,
                    h = t.find(".fp-slide.active");
                    if (h.length) var p = h.data("anchor"),
                    v = h.index();
                    St && (t.addClass("active").siblings().removeClass("active"), e.isFunction(u.onLeave) && u.onLeave.call(i, o, c, a), e.isFunction(u.afterLoad) && u.afterLoad.call(t, f, c), I(f, c - 1), u.anchors.length && (wt = f, K(v, p, f, c))),
                    clearTimeout(kt),
                    kt = setTimeout(function() {
                        At = !1
                    },
                    100)
                }
                u.fitToSection && (clearTimeout(Lt), Lt = setTimeout(function() {
                    St && (e(".fp-section.active").is(t) && (bt = !0), C(t), bt = !1)
                },
                1e3))
            }
        }
        function v(e) {
            return e.find(".fp-slides").length ? e.find(".fp-slide.active").find(".fp-scrollable") : e.find(".fp-scrollable")
        }
        function g(e, t) {
            if (Nt[e]) {
                var n, r;
                "down" == e ? (n = "bottom", r = pt.moveSectionDown) : (n = "top", r = pt.moveSectionUp);
                if (0 < t.length) {
                    if (n = "top" === n ? !t.scrollTop() : "bottom" === n ? t.scrollTop() + 1 + t.innerHeight() >= t[0].scrollHeight: void 0, !n) return ! 0;
                    r()
                } else r()
            }
        }
        function y(t) {
            var n = t.originalEvent;
            if (!b(t.target) && w(n)) {
                u.autoScrolling && t.preventDefault(),
                t = e(".fp-section.active");
                var i = v(t);
                St && !dt && (n = it(n), _t = n.y, Dt = n.x, t.find(".fp-slides").length && r.abs(Mt - Dt) > r.abs(Ot - _t) ? r.abs(Mt - Dt) > s.width() / 100 * u.touchSensitivity && (Mt > Dt ? Nt.right && pt.moveSlideRight() : Nt.left && pt.moveSlideLeft()) : u.autoScrolling && r.abs(Ot - _t) > s.height() / 100 * u.touchSensitivity && (Ot > _t ? g("down", i) : _t > Ot && g("up", i)))
            }
        }
        function b(t, n) {
            n = n || 0;
            var r = e(t).parent();
            return n < u.normalScrollElementTouchThreshold && r.is(u.normalScrollElements) ? !0 : n == u.normalScrollElementTouchThreshold ? !1 : b(r, ++n)
        }
        function w(e) {
            return "undefined" == typeof e.pointerType || "mouse" != e.pointerType
        }
        function E(e) {
            e = e.originalEvent,
            u.fitToSection && ct.stop(),
            w(e) && (e = it(e), Ot = e.y, Mt = e.x)
        }
        function S(e, t) {
            for (var n = 0,
            i = e.slice(r.max(e.length - t, 1)), s = 0; s < i.length; s++) n += i[s];
            return r.ceil(n / t)
        }
        function x(n) {
            var i = (new Date).getTime();
            if (u.autoScrolling) {
                n = t.event || n;
                var s = n.wheelDelta || -n.deltaY || -n.detail,
                o = r.max( - 1, r.min(1, s));
                return 149 < xt.length && xt.shift(),
                xt.push(r.abs(s)),
                u.scrollBar && (n.preventDefault ? n.preventDefault() : n.returnValue = !1),
                n = e(".fp-section.active"),
                n = v(n),
                s = i - Pt,
                Pt = i,
                200 < s && (xt = []),
                St && (i = S(xt, 10), s = S(xt, 70), i >= s && (0 > o ? g("down", n) : g("up", n))),
                !1
            }
            u.fitToSection && ct.stop()
        }
        function T(t) {
            var n = e(".fp-section.active").find(".fp-slides");
            if (n.length && !dt) {
                var r = n.find(".fp-slide.active"),
                i = null,
                i = "prev" === t ? r.prev(".fp-slide") : r.next(".fp-slide");
                if (!i.length) {
                    if (!u.loopHorizontal) return;
                    i = "prev" === t ? r.siblings(":last") : r.siblings(":first")
                }
                dt = !0,
                P(n, i)
            }
        }
        function N() {
            e(".fp-slide.active").each(function() {
                st(e(this))
            })
        }
        function C(t, n, r) {
            var i = t.position();
            if ("undefined" != typeof i && (n = {
                element: t,
                callback: n,
                isMovementUp: r,
                dest: i,
                dtop: i.top,
                yMovement: q(t),
                anchorLink: t.data("anchor"),
                sectionIndex: t.index(".fp-section"),
                activeSlide: t.find(".fp-slide.active"),
                activeSection: e(".fp-section.active"),
                leavingSection: e(".fp-section.active").index(".fp-section") + 1,
                localIsResizing: bt
            },
            !(n.activeSection.is(t) && !bt || u.scrollBar && s.scrollTop() === n.dtop))) {
                if (n.activeSlide.length) var o = n.activeSlide.data("anchor"),
                a = n.activeSlide.index();
                u.autoScrolling && u.continuousVertical && "undefined" != typeof n.isMovementUp && (!n.isMovementUp && "up" == n.yMovement || n.isMovementUp && "down" == n.yMovement) && (n.isMovementUp ? e(".fp-section.active").before(n.activeSection.nextAll(".fp-section")) : e(".fp-section.active").after(n.activeSection.prevAll(".fp-section").get().reverse()), ot(e(".fp-section.active").position().top), N(), n.wrapAroundElements = n.activeSection, n.dest = n.element.position(), n.dtop = n.dest.top, n.yMovement = q(n.element)),
                t.addClass("active").siblings().removeClass("active"),
                St = !1,
                K(a, o, n.anchorLink, n.sectionIndex),
                e.isFunction(u.onLeave) && !n.localIsResizing && u.onLeave.call(n.activeSection, n.leavingSection, n.sectionIndex + 1, n.yMovement),
                L(n),
                wt = n.anchorLink,
                I(n.anchorLink, n.sectionIndex)
            }
        }
        function L(t) {
            if (u.css3 && u.autoScrolling && !u.scrollBar) X("translate3d(0px, -" + t.dtop + "px, 0px)", !0),
            setTimeout(function() {
                M(t)
            },
            u.scrollingSpeed);
            else {
                var n = A(t);
                e(n.element).animate(n.options, u.scrollingSpeed, u.easing).promise().done(function() {
                    M(t)
                })
            }
        }
        function A(e) {
            var t = {};
            return u.autoScrolling && !u.scrollBar ? (t.options = {
                top: -e.dtop
            },
            t.element = ".fullpage-wrapper") : (t.options = {
                scrollTop: e.dtop
            },
            t.element = "html, body"),
            t
        }
        function O(t) {
            t.wrapAroundElements && t.wrapAroundElements.length && (t.isMovementUp ? e(".fp-section:first").before(t.wrapAroundElements) : e(".fp-section:last").after(t.wrapAroundElements), ot(e(".fp-section.active").position().top), N())
        }
        function M(t) {
            O(t),
            e.isFunction(u.afterLoad) && !t.localIsResizing && u.afterLoad.call(t.element, t.anchorLink, t.sectionIndex + 1),
            St = !0,
            setTimeout(function() {
                e.isFunction(t.callback) && t.callback.call(this)
            },
            600)
        }
        function _() {
            if (!At) {
                var e = t.location.hash.replace("#", "").split("/"),
                n = e[0],
                e = e[1];
                if (n.length) {
                    var r = "undefined" == typeof wt,
                    i = "undefined" == typeof wt && "undefined" == typeof e && !dt; (n && n !== wt && !r || i || !dt && Et != e) && V(n, e)
                }
            }
        }
        function D(e) {
            St && (e.pageY < Bt ? pt.moveSectionUp() : e.pageY > Bt && pt.moveSectionDown()),
            Bt = e.pageY
        }
        function P(t, n) {
            var r = n.position(),
            i = t.find(".fp-slidesContainer").parent(),
            s = n.index(),
            o = t.closest(".fp-section"),
            a = o.index(".fp-section"),
            f = o.data("anchor"),
            l = o.find(".fp-slidesNav"),
            c = Y(n),
            h = bt;
            if (u.onSlideLeave) {
                var p = o.find(".fp-slide.active"),
                v = p.index(),
                m;
                m = v == s ? "none": v > s ? "left": "right",
                h || "none" === m || e.isFunction(u.onSlideLeave) && u.onSlideLeave.call(p, f, a + 1, v, m)
            }
            n.addClass("active").siblings().removeClass("active"),
            !u.loopHorizontal && u.controlArrows && (o.find(".fp-controlArrow.fp-prev").toggle(0 !== s), o.find(".fp-controlArrow.fp-next").toggle(!n.is(":last-child"))),
            o.hasClass("active") && K(s, c, f, a);
            var g = function() {
                h || e.isFunction(u.afterSlideLoad) && u.afterSlideLoad.call(n, f, a + 1, c, s),
                dt = !1
            };
            u.css3 ? (r = "translate3d(-" + r.left + "px, 0px, 0px)", j(t.find(".fp-slidesContainer"), 0 < u.scrollingSpeed).css(ut(r)), setTimeout(function() {
                g()
            },
            u.scrollingSpeed, u.easing)) : i.animate({
                scrollLeft: r.left
            },
            u.scrollingSpeed, u.easing,
            function() {
                g()
            }),
            l.find(".active").removeClass("active"),
            l.find("li").eq(s).find("a").addClass("active")
        }
        function H() {
            B();
            if (vt) {
                var t = e(n.activeElement);
                t.is("textarea") || t.is("input") || t.is("select") || (t = s.height(), r.abs(t - jt) > 20 * r.max(jt, t) / 100 && (pt.reBuild(!0), jt = t))
            } else clearTimeout(Ft),
            Ft = setTimeout(function() {
                pt.reBuild(!0)
            },
            500)
        }
        function B() {
            if (u.responsive) {
                var t = gt.hasClass("fp-responsive");
                s.width() < u.responsive ? t || (pt.setAutoScrolling(!1, "internal"), pt.setFitToSection(!1, "internal"), e("#fp-nav").hide(), gt.addClass("fp-responsive")) : t && (pt.setAutoScrolling(Ct.autoScrolling, "internal"), pt.setFitToSection(Ct.autoScrolling, "internal"), e("#fp-nav").show(), gt.removeClass("fp-responsive"))
            }
        }
        function j(e) {
            var t = "all " + u.scrollingSpeed + "ms " + u.easingcss3;
            return e.removeClass("fp-notransition"),
            e.css({
                "-webkit-transition": t,
                transition: t
            })
        }
        function F(e, t) {
            if (825 > e || 900 > t) {
                var n = r.min(100 * e / 825, 100 * t / 900).toFixed(2);
                ht.css("font-size", n + "%")
            } else ht.css("font-size", "100%")
        }
        function I(t, n) {
            u.menu && (e(u.menu).find(".active").removeClass("active"), e(u.menu).find('[data-menuanchor="' + t + '"]').addClass("active")),
            u.navigation && (e("#fp-nav").find(".active").removeClass("active"), t ? e("#fp-nav").find('a[href="#' + t + '"]').addClass("active") : e("#fp-nav").find("li").eq(n).find("a").addClass("active"))
        }
        function q(t) {
            var n = e(".fp-section.active").index(".fp-section");
            return t = t.index(".fp-section"),
            n == t ? "none": n > t ? "up": "down"
        }
        function R(e) {
            e.css("overflow", "hidden");
            var t = e.closest(".fp-section"),
            n = e.find(".fp-scrollable"),
            r;
            n.length ? r = n.get(0).scrollHeight: (r = e.get(0).scrollHeight, u.verticalCentered && (r = e.find(".fp-tableCell").get(0).scrollHeight)),
            t = yt - parseInt(t.css("padding-bottom")) - parseInt(t.css("padding-top")),
            r > t ? n.length ? n.css("height", t + "px").parent().css("height", t + "px") : (u.verticalCentered ? e.find(".fp-tableCell").wrapInner('<div class="fp-scrollable" />') : e.wrapInner('<div class="fp-scrollable" />'), e.find(".fp-scrollable").slimScroll({
                allowPageScroll: !0,
                height: t + "px",
                size: "10px",
                alwaysVisible: !0
            })) : U(e),
            e.css("overflow", "")
        }
        function U(e) {
            e.find(".fp-scrollable").children().first().unwrap().unwrap(),
            e.find(".slimScrollBar").remove(),
            e.find(".slimScrollRail").remove()
        }
        function z(e) {
            e.addClass("fp-table").wrapInner('<div class="fp-tableCell" style="height:' + W(e) + 'px;" />')
        }
        function W(e) {
            var t = yt;
            if (u.paddingTop || u.paddingBottom) t = e,
            t.hasClass("fp-section") || (t = e.closest(".fp-section")),
            e = parseInt(t.css("padding-top")) + parseInt(t.css("padding-bottom")),
            t = yt - e;
            return t
        }
        function X(e, t) {
            t ? j(gt) : gt.addClass("fp-notransition"),
            gt.css(ut(e)),
            setTimeout(function() {
                gt.removeClass("fp-notransition")
            },
            10)
        }
        function V(t, n) {
            var r;
            "undefined" == typeof n && (n = 0),
            r = isNaN(t) ? e('[data-anchor="' + t + '"]') : e(".fp-section").eq(t - 1),
            t === wt || r.hasClass("active") ? $(r, n) : C(r,
            function() {
                $(r, n)
            })
        }
        function $(e, t) {
            if ("undefined" != typeof t) {
                var n = e.find(".fp-slides"),
                r = n.find('[data-anchor="' + t + '"]');
                r.length || (r = n.find(".fp-slide").eq(t)),
                r.length && P(n, r)
            }
        }
        function J(e, t) {
            e.append('<div class="fp-slidesNav"><ul></ul></div>');
            var n = e.find(".fp-slidesNav");
            n.addClass(u.slidesNavPosition);
            for (var r = 0; r < t; r++) n.find("ul").append('<li><a href="#"><span></span></a></li>');
            n.css("margin-left", "-" + n.width() / 2 + "px"),
            n.find("li").first().find("a").addClass("active")
        }
        function K(e, t, n, r) {
            r = "",
            u.anchors.length && (e ? ("undefined" != typeof n && (r = n), "undefined" == typeof t && (t = e), Et = t, Q(r + "/" + t)) : ("undefined" != typeof e && (Et = t), Q(n))),
            Z()
        }
        function Q(e) {
            if (u.recordHistory) location.hash = e;
            else if (vt || mt) history.replaceState(i, i, "#" + e);
            else {
                var n = t.location.href.split("#")[0];
                t.location.replace(n + "#" + e)
            }
        }
        function Y(e) {
            var t = e.data("anchor");
            return e = e.index(".fp-slide"),
            "undefined" == typeof t && (t = e),
            t
        }
        function Z() {
            var t = e(".fp-section.active"),
            n = t.find(".fp-slide.active"),
            r = t.data("anchor"),
            i = Y(n),
            t = t.index(".fp-section"),
            t = String(t);
            u.anchors.length && (t = r),
            n.length && (t = t + "-" + i),
            t = t.replace("/", "-").replace("#", ""),
            ht[0].className = ht[0].className.replace(/\b\s?fp-viewing-[^\s]+\b/g, ""),
            ht.addClass("fp-viewing" + t)
        }
        function et() {
            var e = n.createElement("p"),
            r,
            s = {
                webkitTransform: "-webkit-transform",
                OTransform: "-o-transform",
                msTransform: "-ms-transform",
                MozTransform: "-moz-transform",
                transform: "transform"
            };
            n.body.insertBefore(e, null);
            for (var o in s) e.style[o] !== i && (e.style[o] = "translate3d(1px,1px,1px)", r = t.getComputedStyle(e).getPropertyValue(s[o]));
            return n.body.removeChild(e),
            r !== i && 0 < r.length && "none" !== r
        }
        function tt() {
            if (vt || mt) {
                var e = rt();
                o.off("touchstart " + e.down).on("touchstart " + e.down, E),
                o.off("touchmove " + e.move).on("touchmove " + e.move, y)
            }
        }
        function nt() {
            if (vt || mt) {
                var e = rt();
                o.off("touchstart " + e.down),
                o.off("touchmove " + e.move)
            }
        }
        function rt() {
            return t.PointerEvent ? {
                down: "pointerdown",
                move: "pointermove"
            }: {
                down: "MSPointerDown",
                move: "MSPointerMove"
            }
        }
        function it(e) {
            var t = [];
            return t.y = "undefined" != typeof e.pageY && (e.pageY || e.pageX) ? e.pageY: e.touches[0].pageY,
            t.x = "undefined" != typeof e.pageX && (e.pageY || e.pageX) ? e.pageX: e.touches[0].pageX,
            mt && w(e) && (t.y = e.touches[0].pageY, t.x = e.touches[0].pageX),
            t
        }
        function st(e) {
            pt.setScrollingSpeed(0, "internal"),
            P(e.closest(".fp-slides"), e),
            pt.setScrollingSpeed(Ct.scrollingSpeed, "internal")
        }
        function ot(e) {
            u.scrollBar ? gt.scrollTop(e) : u.css3 ? X("translate3d(0px, -" + e + "px, 0px)", !1) : gt.css("top", -e)
        }
        function ut(e) {
            return {
                "-webkit-transform": e,
                "-moz-transform": e,
                "-ms-transform": e,
                transform: e
            }
        }
        function at() {
            ot(0),
            e("#fp-nav, .fp-slidesNav, .fp-controlArrow").remove(),
            e(".fp-section").css({
                height: "",
                "background-color": "",
                padding: ""
            }),
            e(".fp-slide").css({
                width: ""
            }),
            gt.css({
                height: "",
                position: "",
                "-ms-touch-action": "",
                "touch-action": ""
            }),
            e(".fp-section, .fp-slide").each(function() {
                U(e(this)),
                e(this).removeClass("fp-table active")
            }),
            gt.addClass("fp-notransition"),
            gt.find(".fp-tableCell, .fp-slidesContainer, .fp-slides").each(function() {
                e(this).replaceWith(this.childNodes)
            }),
            ct.scrollTop(0)
        }
        function ft(e, t, n) {
            u[e] = t,
            "internal" !== n && (Ct[e] = t)
        }
        function lt(e, t) {
            console && console[e] && console[e]("fullPage: " + t)
        }
        var ct = e("html, body"),
        ht = e("body"),
        pt = e.fn.fullpage;
        u = e.extend({
            menu: !1,
            anchors: [],
            navigation: !1,
            navigationPosition: "right",
            navigationTooltips: [],
            showActiveTooltip: !1,
            slidesNavigation: !1,
            slidesNavPosition: "bottom",
            scrollBar: !1,
            css3: !0,
            scrollingSpeed: 700,
            autoScrolling: !0,
            fitToSection: !0,
            easing: "easeInOutCubic",
            easingcss3: "ease",
            loopBottom: !1,
            loopTop: !1,
            loopHorizontal: !0,
            continuousVertical: !1,
            normalScrollElements: null,
            scrollOverflow: !1,
            touchSensitivity: 5,
            normalScrollElementTouchThreshold: 5,
            keyboardScrolling: !0,
            animateAnchor: !0,
            recordHistory: !0,
            controlArrows: !0,
            controlArrowColor: "#fff",
            verticalCentered: !0,
            resize: !1,
            sectionsColor: [],
            paddingTop: 0,
            paddingBottom: 0,
            fixedElements: null,
            responsive: 0,
            sectionSelector: ".section",
            slideSelector: ".slide",
            afterLoad: null,
            onLeave: null,
            afterRender: null,
            afterResize: null,
            afterReBuild: null,
            afterSlideLoad: null,
            onSlideLeave: null
        },
        u),
        function() {
            u.continuousVertical && (u.loopTop || u.loopBottom) && (u.continuousVertical = !1, lt("warn", "Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),
            u.continuousVertical && u.scrollBar && (u.continuousVertical = !1, lt("warn", "Option `scrollBar` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),
            e.each(u.anchors,
            function(t, n) { (e("#" + n).length || e('[name="' + n + '"]').length) && lt("error", "data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE).")
            })
        } (),
        e.extend(e.easing, {
            easeInOutCubic: function(e, t, n, r, i) {
                return 1 > (t /= i / 2) ? r / 2 * t * t * t + n: r / 2 * ((t -= 2) * t * t + 2) + n
            }
        }),
        e.extend(e.easing, {
            easeInQuart: function(e, t, n, r, i) {
                return r * (t /= i) * t * t * t + n
            }
        }),
        pt.setAutoScrolling = function(t, n) {
            ft("autoScrolling", t, n);
            var r = e(".fp-section.active");
            u.autoScrolling && !u.scrollBar ? (ct.css({
                overflow: "hidden",
                height: "100%"
            }), pt.setRecordHistory(u.recordHistory, "internal"), gt.css({
                "-ms-touch-action": "none",
                "touch-action": "none"
            }), r.length && ot(r.position().top)) : (ct.css({
                overflow: "visible",
                height: "initial"
            }), pt.setRecordHistory(!1, "internal"), gt.css({
                "-ms-touch-action": "",
                "touch-action": ""
            }), ot(0), r.length && ct.scrollTop(r.position().top))
        },
        pt.setRecordHistory = function(e, t) {
            ft("recordHistory", e, t)
        },
        pt.setScrollingSpeed = function(e, t) {
            ft("scrollingSpeed", e, t)
        },
        pt.setFitToSection = function(e, t) {
            ft("fitToSection", e, t)
        },
        pt.setMouseWheelScrolling = function(e) {
            e ? n.addEventListener ? (n.addEventListener("mousewheel", x, !1), n.addEventListener("wheel", x, !1)) : n.attachEvent("onmousewheel", x) : n.addEventListener ? (n.removeEventListener("mousewheel", x, !1), n.removeEventListener("wheel", x, !1)) : n.detachEvent("onmousewheel", x)
        },
        pt.setAllowScrolling = function(t, n) {
            "undefined" != typeof n ? (n = n.replace(" ", "").split(","), e.each(n,
            function(e, n) {
                switch (n) {
                case "up":
                    Nt.up = t;
                    break;
                case "down":
                    Nt.down = t;
                    break;
                case "left":
                    Nt.left = t;
                    break;
                case "right":
                    Nt.right = t;
                    break;
                case "all":
                    pt.setAllowScrolling(t)
                }
            })):
            t ? (pt.setMouseWheelScrolling(!0), tt()) : (pt.setMouseWheelScrolling(!1), nt())

        },
        pt.setKeyboardScrolling = function(e) {
            u.keyboardScrolling = e
        },
        pt.moveSectionUp = function() {
            var t = e(".fp-section.active").prev(".fp-section");
            t.length || !u.loopTop && !u.continuousVertical || (t = e(".fp-section").last()),
            t.length && C(t, null, !0)
        },
        pt.moveSectionDown = function() {
            var t = e(".fp-section.active").next(".fp-section");
            t.length || !u.loopBottom && !u.continuousVertical || (t = e(".fp-section").first()),
            t.length && C(t, null, !1)
        },
        pt.moveTo = function(t, n) {
            var r = "",
            r = isNaN(t) ? e('[data-anchor="' + t + '"]') : e(".fp-section").eq(t - 1);
            "undefined" != typeof n ? V(t, n) : 0 < r.length && C(r)
        },
        pt.moveSlideRight = function() {
            T("next")
        },
        pt.moveSlideLeft = function() {
            T("prev")
        },
        pt.reBuild = function(t) {
            if (!gt.hasClass("fp-destroyed")) {
                bt = !0;
                var n = s.width();
                yt = s.height(),
                u.resize && F(yt, n),
                e(".fp-section").each(function() {
                    var t = e(this).find(".fp-slides"),
                    n = e(this).find(".fp-slide");
                    u.verticalCentered && e(this).find(".fp-tableCell").css("height", W(e(this)) + "px"),
                    e(this).css("height", yt + "px"),
                    u.scrollOverflow && (n.length ? n.each(function() {
                        R(e(this))
                    }) : R(e(this))),
                    n.length && P(t, t.find(".fp-slide.active"))
                }),
                n = e(".fp-section.active"),
                n.index(".fp-section") && C(n),
                bt = !1,
                e.isFunction(u.afterResize) && t && u.afterResize.call(gt),
                e.isFunction(u.afterReBuild) && !t && u.afterReBuild.call(gt)
            }
        };
        var dt = !1,
        vt = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),
        mt = "ontouchstart" in t || 0 < navigator.msMaxTouchPoints || navigator.maxTouchPoints,
        gt = e(this),
        yt = s.height(),
        bt = !1,
        wt,
        Et,
        St = !0,
        xt = [],
        Tt,
        Nt = {
            up: !0,
            down: !0,
            left: !0,
            right: !0
        },
        Ct = e.extend(!0, {},
        u);
        pt.setAllowScrolling(!0),
        gt.removeClass("fp-destroyed"),
        u.css3 && (u.css3 = et()),
        e(this).length ? (gt.css({
            height: "100%",
            position: "relative"
        }), gt.addClass("fullpage-wrapper")) : lt("error", "Error! Fullpage.js needs to be initialized with a selector. For example: $('#myContainer').fullpage();"),
        e(u.sectionSelector).each(function() {
            e(this).addClass("fp-section")
        }),
        e(u.slideSelector).each(function() {
            e(this).addClass("fp-slide")
        }),
        u.navigation && f(),
        e(".fp-section").each(function(t) {
            var n = e(this),
            r = e(this).find(".fp-slide"),
            i = r.length;
            t || 0 !== e(".fp-section.active").length || e(this).addClass("active"),
            e(this).css("height", yt + "px"),
            (u.paddingTop || u.paddingBottom) && e(this).css("padding", u.paddingTop + " 0 " + u.paddingBottom + " 0"),
            "undefined" != typeof u.sectionsColor[t] && e(this).css("background-color", u.sectionsColor[t]),
            "undefined" != typeof u.anchors[t] && (e(this).attr("data-anchor", u.anchors[t]), e(this).hasClass("active") && I(u.anchors[t], t));
            if (1 < i) {
                t = 100 * i;
                var s = 100 / i;
                r.wrapAll('<div class="fp-slidesContainer" />'),
                r.parent().wrap('<div class="fp-slides" />'),
                e(this).find(".fp-slidesContainer").css("width", t + "%"),
                u.controlArrows && a(e(this)),
                u.slidesNavigation && J(e(this), i),
                r.each(function(t) {
                    e(this).css("width", s + "%"),
                    u.verticalCentered && z(e(this))
                }),
                n = n.find(".fp-slide.active"),
                n.length ? st(n) : r.eq(0).addClass("active")
            } else u.verticalCentered && z(e(this))
        }).promise().done(function() {
            pt.setAutoScrolling(u.autoScrolling, "internal");
            var r = e(".fp-section.active").find(".fp-slide.active");
            r.length && (0 !== e(".fp-section.active").index(".fp-section") || 0 === e(".fp-section.active").index(".fp-section") && 0 !== r.index()) && st(r),
            u.fixedElements && u.css3 && e(u.fixedElements).appendTo(ht),
            u.navigation && (Tt.css("margin-top", "-" + Tt.height() / 2 + "px"), Tt.find("li").eq(e(".fp-section.active").index(".fp-section")).find("a").addClass("active")),
            u.menu && u.css3 && e(u.menu).closest(".fullpage-wrapper").length && e(u.menu).appendTo(ht),
            u.scrollOverflow ? ("complete" === n.readyState && c(), s.on("load", c)) : e.isFunction(u.afterRender) && u.afterRender.call(gt),
            B();
            if (!u.animateAnchor && (r = t.location.hash.replace("#", "").split("/")[0], r.length)) {
                var i = e('[data-anchor="' + r + '"]');
                i.length && (u.autoScrolling ? ot(i.position().top) : (ot(0), ct.scrollTop(i.position().top)), I(r, null), e.isFunction(u.afterLoad) && u.afterLoad.call(i, r, i.index(".fp-section") + 1), i.addClass("active").siblings().removeClass("active"))
            }
            Z(),
            s.on("load",
            function() {
                var e = t.location.hash.replace("#", "").split("/"),
                n = e[0],
                e = e[1];
                n && V(n, e)
            })
        });
        var kt, Lt, At = !1;
        s.on("scroll", p);
        var Ot = 0,
        Mt = 0,
        _t = 0,
        Dt = 0,
        Pt = (new Date).getTime();
        s.on("hashchange", _),
        o.keydown(function(t) {
            clearTimeout(Ht);
            var r = e(n.activeElement);
            r.is("textarea") || r.is("input") || r.is("select") || !u.keyboardScrolling || !u.autoScrolling || ( - 1 < e.inArray(t.which, [40, 38, 32, 33, 34]) && t.preventDefault(), Ht = setTimeout(function() {
                var n = t.shiftKey;
                switch (t.which) {
                case 38:
                case 33:
                    pt.moveSectionUp();
                    break;
                case 32:
                    if (n) {
                        pt.moveSectionUp();
                        break
                    };
                case 40:
                case 34:
                    pt.moveSectionDown();
                    break;
                case 36:
                    pt.moveTo(1);
                    break;
                case 35:
                    pt.moveTo(e(".fp-section").length);
                    break;
                case 37:
                    pt.moveSlideLeft();
                    break;
                case 39:
                    pt.moveSlideRight()
                }
            },
            150))
        });
        var Ht;
        gt.mousedown(function(e) {
            2 == e.which && (Bt = e.pageY, gt.on("mousemove", D))
        }),
        gt.mouseup(function(e) {
            2 == e.which && gt.off("mousemove")
        });
        var Bt = 0;
        o.on("click touchstart", "#fp-nav a",
        function(t) {
            t.preventDefault(),
            t = e(this).parent().index(),
            C(e(".fp-section").eq(t))
        }),
        o.on("click touchstart", ".fp-slidesNav a",
        function(t) {
            t.preventDefault(),
            t = e(this).closest(".fp-section").find(".fp-slides");
            var n = t.find(".fp-slide").eq(e(this).closest("li").index());
            P(t, n)
        }),
        u.normalScrollElements && (o.on("mouseenter", u.normalScrollElements,
        function() {
            pt.setMouseWheelScrolling(!1)
        }), o.on("mouseleave", u.normalScrollElements,
        function() {
            pt.setMouseWheelScrolling(!0)
        })),
        e(".fp-section").on("click touchstart", ".fp-controlArrow",
        function() {
            e(this).hasClass("fp-prev") ? pt.moveSlideLeft() : pt.moveSlideRight()
        }),
        s.resize(H);
        var jt = yt,
        Ft;
        pt.destroy = function(t) {
            pt.setAutoScrolling(!1, "internal"),
            pt.setAllowScrolling(!1),
            pt.setKeyboardScrolling(!1),
            gt.addClass("fp-destroyed"),
            s.off("scroll", p).off("hashchange", _).off("resize", H),
            o.off("click", "#fp-nav a").off("mouseenter", "#fp-nav li").off("mouseleave", "#fp-nav li").off("click", ".fp-slidesNav a").off("mouseover", u.normalScrollElements).off("mouseout", u.normalScrollElements),
            e(".fp-section").off("click", ".fp-controlArrow"),
            t && at()
        }
    }
} (jQuery, window, document, Math),
function(e) {
    typeof define == "function" && define.amd ? define(["jquery"], e) : typeof exports == "object" ? module.exports = e: e(jQuery)
} (function(e) {
    function a(t) {
        var n = t || window.event,
        o = r.call(arguments, 1),
        u = 0,
        a = 0,
        c = 0,
        h = 0;
        t = e.event.fix(n),
        t.type = "mousewheel",
        "detail" in n && (c = n.detail * -1),
        "wheelDelta" in n && (c = n.wheelDelta),
        "wheelDeltaY" in n && (c = n.wheelDeltaY),
        "wheelDeltaX" in n && (a = n.wheelDeltaX * -1),
        "axis" in n && n.axis === n.HORIZONTAL_AXIS && (a = c * -1, c = 0),
        u = c === 0 ? a: c,
        "deltaY" in n && (c = n.deltaY * -1, u = c),
        "deltaX" in n && (a = n.deltaX, c === 0 && (u = a * -1));
        if (c === 0 && a === 0) return;
        if (n.deltaMode === 1) {
            var p = e.data(this, "mousewheel-line-height");
            u *= p,
            c *= p,
            a *= p
        } else if (n.deltaMode === 2) {
            var d = e.data(this, "mousewheel-page-height");
            u *= d,
            c *= d,
            a *= d
        }
        h = Math.max(Math.abs(c), Math.abs(a));
        if (!s || h < s) s = h,
        l(n, h) && (s /= 40);
        return l(n, h) && (u /= 40, a /= 40, c /= 40),
        u = Math[u >= 1 ? "floor": "ceil"](u / s),
        a = Math[a >= 1 ? "floor": "ceil"](a / s),
        c = Math[c >= 1 ? "floor": "ceil"](c / s),
        t.deltaX = a,
        t.deltaY = c,
        t.deltaFactor = s,
        t.deltaMode = 0,
        o.unshift(t, u, a, c),
        i && clearTimeout(i),
        i = setTimeout(f, 200),
        (e.event.dispatch || e.event.handle).apply(this, o)
    }
    function f() {
        s = null
    }
    function l(e, t) {
        return u.settings.adjustOldDeltas && e.type === "mousewheel" && t % 120 === 0
    }
    var t = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
    n = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
    r = Array.prototype.slice,
    i,
    s;
    if (e.event.fixHooks) for (var o = t.length; o;) e.event.fixHooks[t[--o]] = e.event.mouseHooks;
    var u = e.event.special.mousewheel = {
        version: "3.1.9",
        setup: function() {
            if (this.addEventListener) for (var t = n.length; t;) this.addEventListener(n[--t], a, !1);
            else this.onmousewheel = a;
            e.data(this, "mousewheel-line-height", u.getLineHeight(this)),
            e.data(this, "mousewheel-page-height", u.getPageHeight(this))
        },
        teardown: function() {
            if (this.removeEventListener) for (var e = n.length; e;) this.removeEventListener(n[--e], a, !1);
            else this.onmousewheel = null
        },
        getLineHeight: function(t) {
            return parseInt(e(t)["offsetParent" in e.fn ? "offsetParent": "parent"]().css("fontSize"), 10)
        },
        getPageHeight: function(t) {
            return e(t).height()
        },
        settings: {
            adjustOldDeltas: !0
        }
    };
    e.fn.extend({
        mousewheel: function(e) {
            return e ? this.bind("mousewheel", e) : this.trigger("mousewheel")
        },
        unmousewheel: function(e) {
            return this.unbind("mousewheel", e)
        }
    })
}),
$(function() {
    function i() {
        var e = "20px";
        $(window).height() < 768 ? e = "14px": $(window).height() < 700 && (e = "12px"),
        $("#section0").css({
            "font-size": e
        }),
        $(window).height() <= 800 && ($(".more-server").insertBefore(".footer"))
    }
    function s(e, n, i) {
        r || ($(".section").css({
            visibility: "visible"
        }), $(".footer").css({
            visibility: "visible"
        }), r = !0),
        (e == 3 || e == 2 || e == 5) && $(this).find(".animate").removeClass("animate"),
        t && (t = !1, $("#fullPage").css({
            "margin-top": 0
        }))
    }
    function o(t, n) {
        n == 2 && (u($(this).find(".rocket")), u($(this).find(".tail"), 100), u($(this).find(".cloud1"), 300), u($(this).find(".cloud2"), 350)),
        n == 3 && u($(this).find(".mask")),
        n == 5 && u($(this).find(".shield")),
        e = n
    }
    function u(e, t) {
        setTimeout(function() {
            e.addClass("animate")
        },
        t || 0)
    }
    function a() {
        $(".btn").on("mousedown",
        function() {
            $(this).addClass("click")
        }),
        $(".btn").on("mouseup",
        function() {
            $(this).removeClass("click")
        }),
        $(".btn").on("mouseout",
        function() {
            $(this).removeClass("click")
        }),
        $(".play").on("click",
        function() {
            $(".video").fadeIn();
            var e = $(".video").height(),
            t = $("iframe");
            t.attr("src", t.attr("src") + "&height=" + e);
            return
        }),
        $(".close").on("click",
        function() {
            $(".video").fadeOut()
        });
        var e = $(".os-list li");
        e.on("click",
        function() {
            l(this)
        })
    }
    function f() {
        return navigator.userAgent.toLowerCase().indexOf(/ie [678]/) > -1
    }
    function l(e) {
        var t = $(".os-list li.on"),
        n = $(e);
        if (t.attr("data-tab") == n.attr("data-tab")) return;
        t.removeClass("on"),
        n.addClass("on");
        if (f()) {
            $("." + t.attr("data-tab")).hide(),
            $("." + n.attr("data-tab")).show();
            return
        }
        $("." + t.attr("data-tab")).fadeOut(),
        $("." + n.attr("data-tab")).fadeIn()
    }
    function c() {
        window.listenMousewheel && clearTimeout(window.listenMousewheel),
        window.listenMousewheel = setTimeout(function() {
            window.mousewheelStart = !1
        },
        800)
    }
    var e = 0,
    t = !1,
    n = 436,
    r = !1;
    i(),
    a();
    if (navigator.userAgent.toLowerCase().indexOf("msie 6") > -1) return;
    $(".brothers").slick({
        infinite: !0,
        slidesToShow: 4
    });
    if ($(window).height() <= 570) {
        $("#fullPage").addClass("no-fullpage"),
        $(".section .icon div").addClass("animate");
        return
    }
    setTimeout(function() {
        $("#fullPage").fullpage({
            anchors: ["firstPage", "secondPage", "3rdPage", "4thPage", "5thPage", "6thPage", "7thPage"],
            scrollOverflow: !0,
            afterLoad: o,
            css3: !0,
            navigation: !0,
            verticalCentered: !1,
            slidesToScroll: !0,
            resize: !0,
            onLeave: s,
            afterResize: function() {
                i()
            }
        })
    },
    1),
    $("body").on("mousewheel",
    function(r, i) {
        if (r.preventDefault(), window.mousewheelStart === !0) return ! 1;
        window.mousewheelStart = !0,
        c();
        var s = i > 0 ? !0 : !1;
        if (e == 10) if (s) {
            if (t) return t = !1,
            $("#fullPage").css({
                "margin-top": 0
            }),
            !1
        } else $("#fullPage").css({
            "margin-top": "-" + n + "px"
        }),
        t = !0;
        window.mousewheelStart = !1
    })
});
try {
  var Fy = Object.create;
  var ha = Object.defineProperty;
  var Sy = Object.getOwnPropertyDescriptor;
  var wy = Object.getOwnPropertyNames;
  var By = Object.getPrototypeOf,
    Ty = Object.prototype.hasOwnProperty;
  var ir = ((e) =>
    typeof require < "u"
      ? require
      : typeof Proxy < "u"
      ? new Proxy(e, { get: (t, r) => (typeof require < "u" ? require : t)[r] })
      : e)(function (e) {
    if (typeof require < "u") return require.apply(this, arguments);
    throw new Error('Dynamic require of "' + e + '" is not supported');
  });
  var Xe = (e, t) => () => (e && (t = e((e = 0))), t);
  var F = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
    fi = (e, t) => {
      for (var r in t) ha(e, r, { get: t[r], enumerable: !0 });
    },
    _y = (e, t, r, n) => {
      if ((t && typeof t == "object") || typeof t == "function")
        for (let a of wy(t))
          !Ty.call(e, a) && a !== r && ha(e, a, { get: () => t[a], enumerable: !(n = Sy(t, a)) || n.enumerable });
      return e;
    };
  var fe = (e, t, r) => (
    (r = e != null ? Fy(By(e)) : {}),
    _y(t || !e || !e.__esModule ? ha(r, "default", { value: e, enumerable: !0 }) : r, e)
  );
  var l = Xe(() => {});
  var c = Xe(() => {});
  var p = Xe(() => {});
  var m,
    Kr,
    Je,
    hi,
    tI,
    rI,
    nI,
    gi,
    aI,
    he,
    sr,
    ya,
    oI,
    uI,
    iI,
    sI,
    mi,
    lI,
    ge,
    je,
    cI,
    me,
    pI,
    yi,
    rt,
    dI,
    xe,
    ne,
    fI,
    wt = Xe(() => {
      l();
      c();
      p();
      (m = __REACT__),
        ({
          Children: Kr,
          Component: Je,
          Fragment: hi,
          Profiler: tI,
          PureComponent: rI,
          StrictMode: nI,
          Suspense: gi,
          __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: aI,
          cloneElement: he,
          createContext: sr,
          createElement: ya,
          createFactory: oI,
          createRef: uI,
          forwardRef: iI,
          isValidElement: sI,
          lazy: mi,
          memo: lI,
          useCallback: ge,
          useContext: je,
          useDebugValue: cI,
          useEffect: me,
          useImperativeHandle: pI,
          useLayoutEffect: yi,
          useMemo: rt,
          useReducer: dI,
          useRef: xe,
          useState: ne,
          version: fI,
        } = __REACT__);
    });
  var vi = {};
  fi(vi, {
    A: () => Py,
    ActionBar: () => Da,
    AddonPanel: () => va,
    Badge: () => Iy,
    Bar: () => ky,
    Blockquote: () => Ny,
    Button: () => jy,
    Code: () => Ca,
    DL: () => My,
    Div: () => qy,
    DocumentWrapper: () => Ly,
    ErrorFormatter: () => xa,
    FlexBar: () => Fa,
    Form: () => Be,
    H1: () => $y,
    H2: () => Sa,
    H3: () => wa,
    H4: () => Uy,
    H5: () => zy,
    H6: () => Hy,
    HR: () => Gy,
    IconButton: () => ht,
    IconButtonSkeleton: () => Ba,
    Icons: () => Te,
    Img: () => Wy,
    LI: () => Vy,
    Link: () => lr,
    ListItem: () => Ky,
    Loader: () => Ta,
    OL: () => Yy,
    P: () => Xy,
    Placeholder: () => Jy,
    Pre: () => Qy,
    ResetWrapper: () => _a,
    ScrollArea: () => Zy,
    Separator: () => e2,
    Spaced: () => t2,
    Span: () => r2,
    StorybookIcon: () => n2,
    StorybookLogo: () => a2,
    Symbols: () => o2,
    SyntaxHighlighter: () => Yr,
    TT: () => u2,
    TabBar: () => i2,
    TabButton: () => s2,
    TabWrapper: () => l2,
    Table: () => c2,
    Tabs: () => p2,
    TabsState: () => Oa,
    TooltipLinkList: () => d2,
    TooltipMessage: () => f2,
    TooltipNote: () => Ra,
    UL: () => h2,
    WithTooltip: () => Xr,
    WithTooltipPure: () => Pa,
    Zoom: () => Ia,
    codeCommon: () => Bt,
    components: () => ka,
    createCopyToClipboardFunction: () => g2,
    default: () => Ry,
    getStoryHref: () => Na,
    icons: () => m2,
    interleaveSeparators: () => y2,
    nameSpaceClassNames: () => ja,
    resetComponents: () => b2,
    withReset: () => Tt,
  });
  var Ry,
    Py,
    Da,
    va,
    Iy,
    ky,
    Ny,
    jy,
    Ca,
    My,
    qy,
    Ly,
    xa,
    Fa,
    Be,
    $y,
    Sa,
    wa,
    Uy,
    zy,
    Hy,
    Gy,
    ht,
    Ba,
    Te,
    Wy,
    Vy,
    lr,
    Ky,
    Ta,
    Yy,
    Xy,
    Jy,
    Qy,
    _a,
    Zy,
    e2,
    t2,
    r2,
    n2,
    a2,
    o2,
    Yr,
    u2,
    i2,
    s2,
    l2,
    c2,
    p2,
    Oa,
    d2,
    f2,
    Ra,
    h2,
    Xr,
    Pa,
    Ia,
    Bt,
    ka,
    g2,
    Na,
    m2,
    y2,
    ja,
    b2,
    Tt,
    cr = Xe(() => {
      l();
      c();
      p();
      (Ry = __STORYBOOKCOMPONENTS__),
        ({
          A: Py,
          ActionBar: Da,
          AddonPanel: va,
          Badge: Iy,
          Bar: ky,
          Blockquote: Ny,
          Button: jy,
          Code: Ca,
          DL: My,
          Div: qy,
          DocumentWrapper: Ly,
          ErrorFormatter: xa,
          FlexBar: Fa,
          Form: Be,
          H1: $y,
          H2: Sa,
          H3: wa,
          H4: Uy,
          H5: zy,
          H6: Hy,
          HR: Gy,
          IconButton: ht,
          IconButtonSkeleton: Ba,
          Icons: Te,
          Img: Wy,
          LI: Vy,
          Link: lr,
          ListItem: Ky,
          Loader: Ta,
          OL: Yy,
          P: Xy,
          Placeholder: Jy,
          Pre: Qy,
          ResetWrapper: _a,
          ScrollArea: Zy,
          Separator: e2,
          Spaced: t2,
          Span: r2,
          StorybookIcon: n2,
          StorybookLogo: a2,
          Symbols: o2,
          SyntaxHighlighter: Yr,
          TT: u2,
          TabBar: i2,
          TabButton: s2,
          TabWrapper: l2,
          Table: c2,
          Tabs: p2,
          TabsState: Oa,
          TooltipLinkList: d2,
          TooltipMessage: f2,
          TooltipNote: Ra,
          UL: h2,
          WithTooltip: Xr,
          WithTooltipPure: Pa,
          Zoom: Ia,
          codeCommon: Bt,
          components: ka,
          createCopyToClipboardFunction: g2,
          getStoryHref: Na,
          icons: m2,
          interleaveSeparators: y2,
          nameSpaceClassNames: ja,
          resetComponents: b2,
          withReset: Tt,
        } = __STORYBOOKCOMPONENTS__);
    });
  var _e,
    pr,
    Ma = Xe(() => {
      l();
      c();
      p();
      (_e = (e) => `control-${e.replace(/\s+/g, "-")}`), (pr = (e) => `set-${e.replace(/\s+/g, "-")}`);
    });
  var QI,
    ZI,
    e7,
    t7,
    Ci,
    r7,
    n7,
    xi,
    a7,
    o7,
    u7,
    i7,
    s7,
    l7,
    A2,
    Fi,
    c7,
    p7,
    d7,
    f7,
    q,
    qa,
    h7,
    Si,
    g7,
    La = Xe(() => {
      l();
      c();
      p();
      (QI = __STORYBOOKTHEMING__),
        ({
          CacheProvider: ZI,
          ClassNames: e7,
          Global: t7,
          ThemeProvider: Ci,
          background: r7,
          color: n7,
          convert: xi,
          create: a7,
          createCache: o7,
          createGlobal: u7,
          createReset: i7,
          css: s7,
          darken: l7,
          ensure: A2,
          ignoreSsrWarning: Fi,
          isPropValid: c7,
          jsx: p7,
          keyframes: d7,
          lighten: f7,
          styled: q,
          themes: qa,
          typography: h7,
          useTheme: Si,
          withTheme: g7,
        } = __STORYBOOKTHEMING__);
    });
  var Xa = F((jk, Pi) => {
    l();
    c();
    p();
    function a1(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length, a = Array(n); ++r < n; ) a[r] = t(e[r], r, e);
      return a;
    }
    Pi.exports = a1;
  });
  var ki = F(($k, Ii) => {
    l();
    c();
    p();
    function o1() {
      (this.__data__ = []), (this.size = 0);
    }
    Ii.exports = o1;
  });
  var Qr = F((Gk, Ni) => {
    l();
    c();
    p();
    function u1(e, t) {
      return e === t || (e !== e && t !== t);
    }
    Ni.exports = u1;
  });
  var mr = F((Yk, ji) => {
    l();
    c();
    p();
    var i1 = Qr();
    function s1(e, t) {
      for (var r = e.length; r--; ) if (i1(e[r][0], t)) return r;
      return -1;
    }
    ji.exports = s1;
  });
  var qi = F((Zk, Mi) => {
    l();
    c();
    p();
    var l1 = mr(),
      c1 = Array.prototype,
      p1 = c1.splice;
    function d1(e) {
      var t = this.__data__,
        r = l1(t, e);
      if (r < 0) return !1;
      var n = t.length - 1;
      return r == n ? t.pop() : p1.call(t, r, 1), --this.size, !0;
    }
    Mi.exports = d1;
  });
  var $i = F((nN, Li) => {
    l();
    c();
    p();
    var f1 = mr();
    function h1(e) {
      var t = this.__data__,
        r = f1(t, e);
      return r < 0 ? void 0 : t[r][1];
    }
    Li.exports = h1;
  });
  var zi = F((iN, Ui) => {
    l();
    c();
    p();
    var g1 = mr();
    function m1(e) {
      return g1(this.__data__, e) > -1;
    }
    Ui.exports = m1;
  });
  var Gi = F((pN, Hi) => {
    l();
    c();
    p();
    var y1 = mr();
    function b1(e, t) {
      var r = this.__data__,
        n = y1(r, e);
      return n < 0 ? (++this.size, r.push([e, t])) : (r[n][1] = t), this;
    }
    Hi.exports = b1;
  });
  var yr = F((gN, Wi) => {
    l();
    c();
    p();
    var A1 = ki(),
      E1 = qi(),
      D1 = $i(),
      v1 = zi(),
      C1 = Gi();
    function Pt(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    Pt.prototype.clear = A1;
    Pt.prototype.delete = E1;
    Pt.prototype.get = D1;
    Pt.prototype.has = v1;
    Pt.prototype.set = C1;
    Wi.exports = Pt;
  });
  var Ki = F((AN, Vi) => {
    l();
    c();
    p();
    var x1 = yr();
    function F1() {
      (this.__data__ = new x1()), (this.size = 0);
    }
    Vi.exports = F1;
  });
  var Xi = F((CN, Yi) => {
    l();
    c();
    p();
    function S1(e) {
      var t = this.__data__,
        r = t.delete(e);
      return (this.size = t.size), r;
    }
    Yi.exports = S1;
  });
  var Qi = F((wN, Ji) => {
    l();
    c();
    p();
    function w1(e) {
      return this.__data__.get(e);
    }
    Ji.exports = w1;
  });
  var es = F((ON, Zi) => {
    l();
    c();
    p();
    function B1(e) {
      return this.__data__.has(e);
    }
    Zi.exports = B1;
  });
  var Ja = F((kN, ts) => {
    l();
    c();
    p();
    var T1 = typeof window == "object" && window && window.Object === Object && window;
    ts.exports = T1;
  });
  var Me = F((qN, rs) => {
    l();
    c();
    p();
    var _1 = Ja(),
      O1 = typeof self == "object" && self && self.Object === Object && self,
      R1 = _1 || O1 || Function("return this")();
    rs.exports = R1;
  });
  var mt = F((zN, ns) => {
    l();
    c();
    p();
    var P1 = Me(),
      I1 = P1.Symbol;
    ns.exports = I1;
  });
  var is = F((VN, us) => {
    l();
    c();
    p();
    var as = mt(),
      os = Object.prototype,
      k1 = os.hasOwnProperty,
      N1 = os.toString,
      br = as ? as.toStringTag : void 0;
    function j1(e) {
      var t = k1.call(e, br),
        r = e[br];
      try {
        e[br] = void 0;
        var n = !0;
      } catch {}
      var a = N1.call(e);
      return n && (t ? (e[br] = r) : delete e[br]), a;
    }
    us.exports = j1;
  });
  var ls = F((JN, ss) => {
    l();
    c();
    p();
    var M1 = Object.prototype,
      q1 = M1.toString;
    function L1(e) {
      return q1.call(e);
    }
    ss.exports = L1;
  });
  var yt = F((tj, ds) => {
    l();
    c();
    p();
    var cs = mt(),
      $1 = is(),
      U1 = ls(),
      z1 = "[object Null]",
      H1 = "[object Undefined]",
      ps = cs ? cs.toStringTag : void 0;
    function G1(e) {
      return e == null ? (e === void 0 ? H1 : z1) : ps && ps in Object(e) ? $1(e) : U1(e);
    }
    ds.exports = G1;
  });
  var ze = F((oj, fs) => {
    l();
    c();
    p();
    function W1(e) {
      var t = typeof e;
      return e != null && (t == "object" || t == "function");
    }
    fs.exports = W1;
  });
  var Qa = F((lj, hs) => {
    l();
    c();
    p();
    var V1 = yt(),
      K1 = ze(),
      Y1 = "[object AsyncFunction]",
      X1 = "[object Function]",
      J1 = "[object GeneratorFunction]",
      Q1 = "[object Proxy]";
    function Z1(e) {
      if (!K1(e)) return !1;
      var t = V1(e);
      return t == X1 || t == J1 || t == Y1 || t == Q1;
    }
    hs.exports = Z1;
  });
  var ms = F((fj, gs) => {
    l();
    c();
    p();
    var eb = Me(),
      tb = eb["__core-js_shared__"];
    gs.exports = tb;
  });
  var As = F((yj, bs) => {
    l();
    c();
    p();
    var Za = ms(),
      ys = (function () {
        var e = /[^.]+$/.exec((Za && Za.keys && Za.keys.IE_PROTO) || "");
        return e ? "Symbol(src)_1." + e : "";
      })();
    function rb(e) {
      return !!ys && ys in e;
    }
    bs.exports = rb;
  });
  var eo = F((Dj, Es) => {
    l();
    c();
    p();
    var nb = Function.prototype,
      ab = nb.toString;
    function ob(e) {
      if (e != null) {
        try {
          return ab.call(e);
        } catch {}
        try {
          return e + "";
        } catch {}
      }
      return "";
    }
    Es.exports = ob;
  });
  var vs = F((Fj, Ds) => {
    l();
    c();
    p();
    var ub = Qa(),
      ib = As(),
      sb = ze(),
      lb = eo(),
      cb = /[\\^$.*+?()[\]{}|]/g,
      pb = /^\[object .+?Constructor\]$/,
      db = Function.prototype,
      fb = Object.prototype,
      hb = db.toString,
      gb = fb.hasOwnProperty,
      mb = RegExp(
        "^" +
          hb
            .call(gb)
            .replace(cb, "\\$&")
            .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") +
          "$"
      );
    function yb(e) {
      if (!sb(e) || ib(e)) return !1;
      var t = ub(e) ? mb : pb;
      return t.test(lb(e));
    }
    Ds.exports = yb;
  });
  var xs = F((Tj, Cs) => {
    l();
    c();
    p();
    function bb(e, t) {
      return e?.[t];
    }
    Cs.exports = bb;
  });
  var ut = F((Pj, Fs) => {
    l();
    c();
    p();
    var Ab = vs(),
      Eb = xs();
    function Db(e, t) {
      var r = Eb(e, t);
      return Ab(r) ? r : void 0;
    }
    Fs.exports = Db;
  });
  var Zr = F((jj, Ss) => {
    l();
    c();
    p();
    var vb = ut(),
      Cb = Me(),
      xb = vb(Cb, "Map");
    Ss.exports = xb;
  });
  var Ar = F(($j, ws) => {
    l();
    c();
    p();
    var Fb = ut(),
      Sb = Fb(Object, "create");
    ws.exports = Sb;
  });
  var _s = F((Gj, Ts) => {
    l();
    c();
    p();
    var Bs = Ar();
    function wb() {
      (this.__data__ = Bs ? Bs(null) : {}), (this.size = 0);
    }
    Ts.exports = wb;
  });
  var Rs = F((Yj, Os) => {
    l();
    c();
    p();
    function Bb(e) {
      var t = this.has(e) && delete this.__data__[e];
      return (this.size -= t ? 1 : 0), t;
    }
    Os.exports = Bb;
  });
  var Is = F((Zj, Ps) => {
    l();
    c();
    p();
    var Tb = Ar(),
      _b = "__lodash_hash_undefined__",
      Ob = Object.prototype,
      Rb = Ob.hasOwnProperty;
    function Pb(e) {
      var t = this.__data__;
      if (Tb) {
        var r = t[e];
        return r === _b ? void 0 : r;
      }
      return Rb.call(t, e) ? t[e] : void 0;
    }
    Ps.exports = Pb;
  });
  var Ns = F((nM, ks) => {
    l();
    c();
    p();
    var Ib = Ar(),
      kb = Object.prototype,
      Nb = kb.hasOwnProperty;
    function jb(e) {
      var t = this.__data__;
      return Ib ? t[e] !== void 0 : Nb.call(t, e);
    }
    ks.exports = jb;
  });
  var Ms = F((iM, js) => {
    l();
    c();
    p();
    var Mb = Ar(),
      qb = "__lodash_hash_undefined__";
    function Lb(e, t) {
      var r = this.__data__;
      return (this.size += this.has(e) ? 0 : 1), (r[e] = Mb && t === void 0 ? qb : t), this;
    }
    js.exports = Lb;
  });
  var Ls = F((pM, qs) => {
    l();
    c();
    p();
    var $b = _s(),
      Ub = Rs(),
      zb = Is(),
      Hb = Ns(),
      Gb = Ms();
    function It(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    It.prototype.clear = $b;
    It.prototype.delete = Ub;
    It.prototype.get = zb;
    It.prototype.has = Hb;
    It.prototype.set = Gb;
    qs.exports = It;
  });
  var zs = F((gM, Us) => {
    l();
    c();
    p();
    var $s = Ls(),
      Wb = yr(),
      Vb = Zr();
    function Kb() {
      (this.size = 0), (this.__data__ = { hash: new $s(), map: new (Vb || Wb)(), string: new $s() });
    }
    Us.exports = Kb;
  });
  var Gs = F((AM, Hs) => {
    l();
    c();
    p();
    function Yb(e) {
      var t = typeof e;
      return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
    }
    Hs.exports = Yb;
  });
  var Er = F((CM, Ws) => {
    l();
    c();
    p();
    var Xb = Gs();
    function Jb(e, t) {
      var r = e.__data__;
      return Xb(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
    }
    Ws.exports = Jb;
  });
  var Ks = F((wM, Vs) => {
    l();
    c();
    p();
    var Qb = Er();
    function Zb(e) {
      var t = Qb(this, e).delete(e);
      return (this.size -= t ? 1 : 0), t;
    }
    Vs.exports = Zb;
  });
  var Xs = F((OM, Ys) => {
    l();
    c();
    p();
    var eA = Er();
    function tA(e) {
      return eA(this, e).get(e);
    }
    Ys.exports = tA;
  });
  var Qs = F((kM, Js) => {
    l();
    c();
    p();
    var rA = Er();
    function nA(e) {
      return rA(this, e).has(e);
    }
    Js.exports = nA;
  });
  var el = F((qM, Zs) => {
    l();
    c();
    p();
    var aA = Er();
    function oA(e, t) {
      var r = aA(this, e),
        n = r.size;
      return r.set(e, t), (this.size += r.size == n ? 0 : 1), this;
    }
    Zs.exports = oA;
  });
  var en = F((zM, tl) => {
    l();
    c();
    p();
    var uA = zs(),
      iA = Ks(),
      sA = Xs(),
      lA = Qs(),
      cA = el();
    function kt(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    kt.prototype.clear = uA;
    kt.prototype.delete = iA;
    kt.prototype.get = sA;
    kt.prototype.has = lA;
    kt.prototype.set = cA;
    tl.exports = kt;
  });
  var nl = F((VM, rl) => {
    l();
    c();
    p();
    var pA = yr(),
      dA = Zr(),
      fA = en(),
      hA = 200;
    function gA(e, t) {
      var r = this.__data__;
      if (r instanceof pA) {
        var n = r.__data__;
        if (!dA || n.length < hA - 1) return n.push([e, t]), (this.size = ++r.size), this;
        r = this.__data__ = new fA(n);
      }
      return r.set(e, t), (this.size = r.size), this;
    }
    rl.exports = gA;
  });
  var tn = F((JM, al) => {
    l();
    c();
    p();
    var mA = yr(),
      yA = Ki(),
      bA = Xi(),
      AA = Qi(),
      EA = es(),
      DA = nl();
    function Nt(e) {
      var t = (this.__data__ = new mA(e));
      this.size = t.size;
    }
    Nt.prototype.clear = yA;
    Nt.prototype.delete = bA;
    Nt.prototype.get = AA;
    Nt.prototype.has = EA;
    Nt.prototype.set = DA;
    al.exports = Nt;
  });
  var ul = F((tq, ol) => {
    l();
    c();
    p();
    var vA = "__lodash_hash_undefined__";
    function CA(e) {
      return this.__data__.set(e, vA), this;
    }
    ol.exports = CA;
  });
  var sl = F((oq, il) => {
    l();
    c();
    p();
    function xA(e) {
      return this.__data__.has(e);
    }
    il.exports = xA;
  });
  var to = F((lq, ll) => {
    l();
    c();
    p();
    var FA = en(),
      SA = ul(),
      wA = sl();
    function rn(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.__data__ = new FA(); ++t < r; ) this.add(e[t]);
    }
    rn.prototype.add = rn.prototype.push = SA;
    rn.prototype.has = wA;
    ll.exports = rn;
  });
  var pl = F((fq, cl) => {
    l();
    c();
    p();
    function BA(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length; ++r < n; ) if (t(e[r], r, e)) return !0;
      return !1;
    }
    cl.exports = BA;
  });
  var ro = F((yq, dl) => {
    l();
    c();
    p();
    function TA(e, t) {
      return e.has(t);
    }
    dl.exports = TA;
  });
  var no = F((Dq, fl) => {
    l();
    c();
    p();
    var _A = to(),
      OA = pl(),
      RA = ro(),
      PA = 1,
      IA = 2;
    function kA(e, t, r, n, a, o) {
      var u = r & PA,
        i = e.length,
        s = t.length;
      if (i != s && !(u && s > i)) return !1;
      var d = o.get(e),
        y = o.get(t);
      if (d && y) return d == t && y == e;
      var A = -1,
        g = !0,
        h = r & IA ? new _A() : void 0;
      for (o.set(e, t), o.set(t, e); ++A < i; ) {
        var E = e[A],
          b = t[A];
        if (n) var x = u ? n(b, E, A, t, e, o) : n(E, b, A, e, t, o);
        if (x !== void 0) {
          if (x) continue;
          g = !1;
          break;
        }
        if (h) {
          if (
            !OA(t, function (S, P) {
              if (!RA(h, P) && (E === S || a(E, S, r, n, o))) return h.push(P);
            })
          ) {
            g = !1;
            break;
          }
        } else if (!(E === b || a(E, b, r, n, o))) {
          g = !1;
          break;
        }
      }
      return o.delete(e), o.delete(t), g;
    }
    fl.exports = kA;
  });
  var ao = F((Fq, hl) => {
    l();
    c();
    p();
    var NA = Me(),
      jA = NA.Uint8Array;
    hl.exports = jA;
  });
  var ml = F((Tq, gl) => {
    l();
    c();
    p();
    function MA(e) {
      var t = -1,
        r = Array(e.size);
      return (
        e.forEach(function (n, a) {
          r[++t] = [a, n];
        }),
        r
      );
    }
    gl.exports = MA;
  });
  var nn = F((Pq, yl) => {
    l();
    c();
    p();
    function qA(e) {
      var t = -1,
        r = Array(e.size);
      return (
        e.forEach(function (n) {
          r[++t] = n;
        }),
        r
      );
    }
    yl.exports = qA;
  });
  var vl = F((jq, Dl) => {
    l();
    c();
    p();
    var bl = mt(),
      Al = ao(),
      LA = Qr(),
      $A = no(),
      UA = ml(),
      zA = nn(),
      HA = 1,
      GA = 2,
      WA = "[object Boolean]",
      VA = "[object Date]",
      KA = "[object Error]",
      YA = "[object Map]",
      XA = "[object Number]",
      JA = "[object RegExp]",
      QA = "[object Set]",
      ZA = "[object String]",
      eE = "[object Symbol]",
      tE = "[object ArrayBuffer]",
      rE = "[object DataView]",
      El = bl ? bl.prototype : void 0,
      oo = El ? El.valueOf : void 0;
    function nE(e, t, r, n, a, o, u) {
      switch (r) {
        case rE:
          if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
          (e = e.buffer), (t = t.buffer);
        case tE:
          return !(e.byteLength != t.byteLength || !o(new Al(e), new Al(t)));
        case WA:
        case VA:
        case XA:
          return LA(+e, +t);
        case KA:
          return e.name == t.name && e.message == t.message;
        case JA:
        case ZA:
          return e == t + "";
        case YA:
          var i = UA;
        case QA:
          var s = n & HA;
          if ((i || (i = zA), e.size != t.size && !s)) return !1;
          var d = u.get(e);
          if (d) return d == t;
          (n |= GA), u.set(e, t);
          var y = $A(i(e), i(t), n, a, o, u);
          return u.delete(e), y;
        case eE:
          if (oo) return oo.call(e) == oo.call(t);
      }
      return !1;
    }
    Dl.exports = nE;
  });
  var an = F(($q, Cl) => {
    l();
    c();
    p();
    function aE(e, t) {
      for (var r = -1, n = t.length, a = e.length; ++r < n; ) e[a + r] = t[r];
      return e;
    }
    Cl.exports = aE;
  });
  var He = F((Gq, xl) => {
    l();
    c();
    p();
    var oE = Array.isArray;
    xl.exports = oE;
  });
  var uo = F((Yq, Fl) => {
    l();
    c();
    p();
    var uE = an(),
      iE = He();
    function sE(e, t, r) {
      var n = t(e);
      return iE(e) ? n : uE(n, r(e));
    }
    Fl.exports = sE;
  });
  var wl = F((Zq, Sl) => {
    l();
    c();
    p();
    function lE(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length, a = 0, o = []; ++r < n; ) {
        var u = e[r];
        t(u, r, e) && (o[a++] = u);
      }
      return o;
    }
    Sl.exports = lE;
  });
  var io = F((nL, Bl) => {
    l();
    c();
    p();
    function cE() {
      return [];
    }
    Bl.exports = cE;
  });
  var on = F((iL, _l) => {
    l();
    c();
    p();
    var pE = wl(),
      dE = io(),
      fE = Object.prototype,
      hE = fE.propertyIsEnumerable,
      Tl = Object.getOwnPropertySymbols,
      gE = Tl
        ? function (e) {
            return e == null
              ? []
              : ((e = Object(e)),
                pE(Tl(e), function (t) {
                  return hE.call(e, t);
                }));
          }
        : dE;
    _l.exports = gE;
  });
  var Rl = F((pL, Ol) => {
    l();
    c();
    p();
    function mE(e, t) {
      for (var r = -1, n = Array(e); ++r < e; ) n[r] = t(r);
      return n;
    }
    Ol.exports = mE;
  });
  var Ze = F((gL, Pl) => {
    l();
    c();
    p();
    function yE(e) {
      return e != null && typeof e == "object";
    }
    Pl.exports = yE;
  });
  var kl = F((AL, Il) => {
    l();
    c();
    p();
    var bE = yt(),
      AE = Ze(),
      EE = "[object Arguments]";
    function DE(e) {
      return AE(e) && bE(e) == EE;
    }
    Il.exports = DE;
  });
  var un = F((CL, Ml) => {
    l();
    c();
    p();
    var Nl = kl(),
      vE = Ze(),
      jl = Object.prototype,
      CE = jl.hasOwnProperty,
      xE = jl.propertyIsEnumerable,
      FE = Nl(
        (function () {
          return arguments;
        })()
      )
        ? Nl
        : function (e) {
            return vE(e) && CE.call(e, "callee") && !xE.call(e, "callee");
          };
    Ml.exports = FE;
  });
  var Ll = F((wL, ql) => {
    l();
    c();
    p();
    function SE() {
      return !1;
    }
    ql.exports = SE;
  });
  var sn = F((Dr, jt) => {
    l();
    c();
    p();
    var wE = Me(),
      BE = Ll(),
      zl = typeof Dr == "object" && Dr && !Dr.nodeType && Dr,
      $l = zl && typeof jt == "object" && jt && !jt.nodeType && jt,
      TE = $l && $l.exports === zl,
      Ul = TE ? wE.Buffer : void 0,
      _E = Ul ? Ul.isBuffer : void 0,
      OE = _E || BE;
    jt.exports = OE;
  });
  var ln = F((IL, Hl) => {
    l();
    c();
    p();
    var RE = 9007199254740991,
      PE = /^(?:0|[1-9]\d*)$/;
    function IE(e, t) {
      var r = typeof e;
      return (t = t ?? RE), !!t && (r == "number" || (r != "symbol" && PE.test(e))) && e > -1 && e % 1 == 0 && e < t;
    }
    Hl.exports = IE;
  });
  var cn = F((ML, Gl) => {
    l();
    c();
    p();
    var kE = 9007199254740991;
    function NE(e) {
      return typeof e == "number" && e > -1 && e % 1 == 0 && e <= kE;
    }
    Gl.exports = NE;
  });
  var Vl = F((UL, Wl) => {
    l();
    c();
    p();
    var jE = yt(),
      ME = cn(),
      qE = Ze(),
      LE = "[object Arguments]",
      $E = "[object Array]",
      UE = "[object Boolean]",
      zE = "[object Date]",
      HE = "[object Error]",
      GE = "[object Function]",
      WE = "[object Map]",
      VE = "[object Number]",
      KE = "[object Object]",
      YE = "[object RegExp]",
      XE = "[object Set]",
      JE = "[object String]",
      QE = "[object WeakMap]",
      ZE = "[object ArrayBuffer]",
      eD = "[object DataView]",
      tD = "[object Float32Array]",
      rD = "[object Float64Array]",
      nD = "[object Int8Array]",
      aD = "[object Int16Array]",
      oD = "[object Int32Array]",
      uD = "[object Uint8Array]",
      iD = "[object Uint8ClampedArray]",
      sD = "[object Uint16Array]",
      lD = "[object Uint32Array]",
      ce = {};
    ce[tD] = ce[rD] = ce[nD] = ce[aD] = ce[oD] = ce[uD] = ce[iD] = ce[sD] = ce[lD] = !0;
    ce[LE] =
      ce[$E] =
      ce[ZE] =
      ce[UE] =
      ce[eD] =
      ce[zE] =
      ce[HE] =
      ce[GE] =
      ce[WE] =
      ce[VE] =
      ce[KE] =
      ce[YE] =
      ce[XE] =
      ce[JE] =
      ce[QE] =
        !1;
    function cD(e) {
      return qE(e) && ME(e.length) && !!ce[jE(e)];
    }
    Wl.exports = cD;
  });
  var pn = F((WL, Kl) => {
    l();
    c();
    p();
    function pD(e) {
      return function (t) {
        return e(t);
      };
    }
    Kl.exports = pD;
  });
  var dn = F((vr, Mt) => {
    l();
    c();
    p();
    var dD = Ja(),
      Yl = typeof vr == "object" && vr && !vr.nodeType && vr,
      Cr = Yl && typeof Mt == "object" && Mt && !Mt.nodeType && Mt,
      fD = Cr && Cr.exports === Yl,
      so = fD && dD.process,
      hD = (function () {
        try {
          var e = Cr && Cr.require && Cr.require("util").types;
          return e || (so && so.binding && so.binding("util"));
        } catch {}
      })();
    Mt.exports = hD;
  });
  var lo = F((ZL, Ql) => {
    l();
    c();
    p();
    var gD = Vl(),
      mD = pn(),
      Xl = dn(),
      Jl = Xl && Xl.isTypedArray,
      yD = Jl ? mD(Jl) : gD;
    Ql.exports = yD;
  });
  var co = F((n$, Zl) => {
    l();
    c();
    p();
    var bD = Rl(),
      AD = un(),
      ED = He(),
      DD = sn(),
      vD = ln(),
      CD = lo(),
      xD = Object.prototype,
      FD = xD.hasOwnProperty;
    function SD(e, t) {
      var r = ED(e),
        n = !r && AD(e),
        a = !r && !n && DD(e),
        o = !r && !n && !a && CD(e),
        u = r || n || a || o,
        i = u ? bD(e.length, String) : [],
        s = i.length;
      for (var d in e)
        (t || FD.call(e, d)) &&
          !(
            u &&
            (d == "length" ||
              (a && (d == "offset" || d == "parent")) ||
              (o && (d == "buffer" || d == "byteLength" || d == "byteOffset")) ||
              vD(d, s))
          ) &&
          i.push(d);
      return i;
    }
    Zl.exports = SD;
  });
  var fn = F((i$, ec) => {
    l();
    c();
    p();
    var wD = Object.prototype;
    function BD(e) {
      var t = e && e.constructor,
        r = (typeof t == "function" && t.prototype) || wD;
      return e === r;
    }
    ec.exports = BD;
  });
  var po = F((p$, tc) => {
    l();
    c();
    p();
    function TD(e, t) {
      return function (r) {
        return e(t(r));
      };
    }
    tc.exports = TD;
  });
  var nc = F((g$, rc) => {
    l();
    c();
    p();
    var _D = po(),
      OD = _D(Object.keys, Object);
    rc.exports = OD;
  });
  var oc = F((A$, ac) => {
    l();
    c();
    p();
    var RD = fn(),
      PD = nc(),
      ID = Object.prototype,
      kD = ID.hasOwnProperty;
    function ND(e) {
      if (!RD(e)) return PD(e);
      var t = [];
      for (var r in Object(e)) kD.call(e, r) && r != "constructor" && t.push(r);
      return t;
    }
    ac.exports = ND;
  });
  var fo = F((C$, uc) => {
    l();
    c();
    p();
    var jD = Qa(),
      MD = cn();
    function qD(e) {
      return e != null && MD(e.length) && !jD(e);
    }
    uc.exports = qD;
  });
  var qt = F((w$, ic) => {
    l();
    c();
    p();
    var LD = co(),
      $D = oc(),
      UD = fo();
    function zD(e) {
      return UD(e) ? LD(e) : $D(e);
    }
    ic.exports = zD;
  });
  var ho = F((O$, sc) => {
    l();
    c();
    p();
    var HD = uo(),
      GD = on(),
      WD = qt();
    function VD(e) {
      return HD(e, WD, GD);
    }
    sc.exports = VD;
  });
  var pc = F((k$, cc) => {
    l();
    c();
    p();
    var lc = ho(),
      KD = 1,
      YD = Object.prototype,
      XD = YD.hasOwnProperty;
    function JD(e, t, r, n, a, o) {
      var u = r & KD,
        i = lc(e),
        s = i.length,
        d = lc(t),
        y = d.length;
      if (s != y && !u) return !1;
      for (var A = s; A--; ) {
        var g = i[A];
        if (!(u ? g in t : XD.call(t, g))) return !1;
      }
      var h = o.get(e),
        E = o.get(t);
      if (h && E) return h == t && E == e;
      var b = !0;
      o.set(e, t), o.set(t, e);
      for (var x = u; ++A < s; ) {
        g = i[A];
        var S = e[g],
          P = t[g];
        if (n) var N = u ? n(P, S, g, t, e, o) : n(S, P, g, e, t, o);
        if (!(N === void 0 ? S === P || a(S, P, r, n, o) : N)) {
          b = !1;
          break;
        }
        x || (x = g == "constructor");
      }
      if (b && !x) {
        var $ = e.constructor,
          w = t.constructor;
        $ != w &&
          "constructor" in e &&
          "constructor" in t &&
          !(typeof $ == "function" && $ instanceof $ && typeof w == "function" && w instanceof w) &&
          (b = !1);
      }
      return o.delete(e), o.delete(t), b;
    }
    cc.exports = JD;
  });
  var fc = F((q$, dc) => {
    l();
    c();
    p();
    var QD = ut(),
      ZD = Me(),
      ev = QD(ZD, "DataView");
    dc.exports = ev;
  });
  var gc = F((z$, hc) => {
    l();
    c();
    p();
    var tv = ut(),
      rv = Me(),
      nv = tv(rv, "Promise");
    hc.exports = nv;
  });
  var go = F((V$, mc) => {
    l();
    c();
    p();
    var av = ut(),
      ov = Me(),
      uv = av(ov, "Set");
    mc.exports = uv;
  });
  var bc = F((J$, yc) => {
    l();
    c();
    p();
    var iv = ut(),
      sv = Me(),
      lv = iv(sv, "WeakMap");
    yc.exports = lv;
  });
  var xr = F((tU, Fc) => {
    l();
    c();
    p();
    var mo = fc(),
      yo = Zr(),
      bo = gc(),
      Ao = go(),
      Eo = bc(),
      xc = yt(),
      Lt = eo(),
      Ac = "[object Map]",
      cv = "[object Object]",
      Ec = "[object Promise]",
      Dc = "[object Set]",
      vc = "[object WeakMap]",
      Cc = "[object DataView]",
      pv = Lt(mo),
      dv = Lt(yo),
      fv = Lt(bo),
      hv = Lt(Ao),
      gv = Lt(Eo),
      bt = xc;
    ((mo && bt(new mo(new ArrayBuffer(1))) != Cc) ||
      (yo && bt(new yo()) != Ac) ||
      (bo && bt(bo.resolve()) != Ec) ||
      (Ao && bt(new Ao()) != Dc) ||
      (Eo && bt(new Eo()) != vc)) &&
      (bt = function (e) {
        var t = xc(e),
          r = t == cv ? e.constructor : void 0,
          n = r ? Lt(r) : "";
        if (n)
          switch (n) {
            case pv:
              return Cc;
            case dv:
              return Ac;
            case fv:
              return Ec;
            case hv:
              return Dc;
            case gv:
              return vc;
          }
        return t;
      });
    Fc.exports = bt;
  });
  var Pc = F((oU, Rc) => {
    l();
    c();
    p();
    var Do = tn(),
      mv = no(),
      yv = vl(),
      bv = pc(),
      Sc = xr(),
      wc = He(),
      Bc = sn(),
      Av = lo(),
      Ev = 1,
      Tc = "[object Arguments]",
      _c = "[object Array]",
      hn = "[object Object]",
      Dv = Object.prototype,
      Oc = Dv.hasOwnProperty;
    function vv(e, t, r, n, a, o) {
      var u = wc(e),
        i = wc(t),
        s = u ? _c : Sc(e),
        d = i ? _c : Sc(t);
      (s = s == Tc ? hn : s), (d = d == Tc ? hn : d);
      var y = s == hn,
        A = d == hn,
        g = s == d;
      if (g && Bc(e)) {
        if (!Bc(t)) return !1;
        (u = !0), (y = !1);
      }
      if (g && !y) return o || (o = new Do()), u || Av(e) ? mv(e, t, r, n, a, o) : yv(e, t, s, r, n, a, o);
      if (!(r & Ev)) {
        var h = y && Oc.call(e, "__wrapped__"),
          E = A && Oc.call(t, "__wrapped__");
        if (h || E) {
          var b = h ? e.value() : e,
            x = E ? t.value() : t;
          return o || (o = new Do()), a(b, x, r, n, o);
        }
      }
      return g ? (o || (o = new Do()), bv(e, t, r, n, a, o)) : !1;
    }
    Rc.exports = vv;
  });
  var vo = F((lU, Nc) => {
    l();
    c();
    p();
    var Cv = Pc(),
      Ic = Ze();
    function kc(e, t, r, n, a) {
      return e === t ? !0 : e == null || t == null || (!Ic(e) && !Ic(t)) ? e !== e && t !== t : Cv(e, t, r, n, kc, a);
    }
    Nc.exports = kc;
  });
  var Mc = F((fU, jc) => {
    l();
    c();
    p();
    var xv = tn(),
      Fv = vo(),
      Sv = 1,
      wv = 2;
    function Bv(e, t, r, n) {
      var a = r.length,
        o = a,
        u = !n;
      if (e == null) return !o;
      for (e = Object(e); a--; ) {
        var i = r[a];
        if (u && i[2] ? i[1] !== e[i[0]] : !(i[0] in e)) return !1;
      }
      for (; ++a < o; ) {
        i = r[a];
        var s = i[0],
          d = e[s],
          y = i[1];
        if (u && i[2]) {
          if (d === void 0 && !(s in e)) return !1;
        } else {
          var A = new xv();
          if (n) var g = n(d, y, s, e, t, A);
          if (!(g === void 0 ? Fv(y, d, Sv | wv, n, A) : g)) return !1;
        }
      }
      return !0;
    }
    jc.exports = Bv;
  });
  var Co = F((yU, qc) => {
    l();
    c();
    p();
    var Tv = ze();
    function _v(e) {
      return e === e && !Tv(e);
    }
    qc.exports = _v;
  });
  var $c = F((DU, Lc) => {
    l();
    c();
    p();
    var Ov = Co(),
      Rv = qt();
    function Pv(e) {
      for (var t = Rv(e), r = t.length; r--; ) {
        var n = t[r],
          a = e[n];
        t[r] = [n, a, Ov(a)];
      }
      return t;
    }
    Lc.exports = Pv;
  });
  var xo = F((FU, Uc) => {
    l();
    c();
    p();
    function Iv(e, t) {
      return function (r) {
        return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
      };
    }
    Uc.exports = Iv;
  });
  var Hc = F((TU, zc) => {
    l();
    c();
    p();
    var kv = Mc(),
      Nv = $c(),
      jv = xo();
    function Mv(e) {
      var t = Nv(e);
      return t.length == 1 && t[0][2]
        ? jv(t[0][0], t[0][1])
        : function (r) {
            return r === e || kv(r, e, t);
          };
    }
    zc.exports = Mv;
  });
  var Fr = F((PU, Gc) => {
    l();
    c();
    p();
    var qv = yt(),
      Lv = Ze(),
      $v = "[object Symbol]";
    function Uv(e) {
      return typeof e == "symbol" || (Lv(e) && qv(e) == $v);
    }
    Gc.exports = Uv;
  });
  var gn = F((jU, Wc) => {
    l();
    c();
    p();
    var zv = He(),
      Hv = Fr(),
      Gv = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      Wv = /^\w*$/;
    function Vv(e, t) {
      if (zv(e)) return !1;
      var r = typeof e;
      return r == "number" || r == "symbol" || r == "boolean" || e == null || Hv(e)
        ? !0
        : Wv.test(e) || !Gv.test(e) || (t != null && e in Object(t));
    }
    Wc.exports = Vv;
  });
  var Yc = F(($U, Kc) => {
    l();
    c();
    p();
    var Vc = en(),
      Kv = "Expected a function";
    function Fo(e, t) {
      if (typeof e != "function" || (t != null && typeof t != "function")) throw new TypeError(Kv);
      var r = function () {
        var n = arguments,
          a = t ? t.apply(this, n) : n[0],
          o = r.cache;
        if (o.has(a)) return o.get(a);
        var u = e.apply(this, n);
        return (r.cache = o.set(a, u) || o), u;
      };
      return (r.cache = new (Fo.Cache || Vc)()), r;
    }
    Fo.Cache = Vc;
    Kc.exports = Fo;
  });
  var Jc = F((GU, Xc) => {
    l();
    c();
    p();
    var Yv = Yc(),
      Xv = 500;
    function Jv(e) {
      var t = Yv(e, function (n) {
          return r.size === Xv && r.clear(), n;
        }),
        r = t.cache;
      return t;
    }
    Xc.exports = Jv;
  });
  var Zc = F((YU, Qc) => {
    l();
    c();
    p();
    var Qv = Jc(),
      Zv = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      eC = /\\(\\)?/g,
      tC = Qv(function (e) {
        var t = [];
        return (
          e.charCodeAt(0) === 46 && t.push(""),
          e.replace(Zv, function (r, n, a, o) {
            t.push(a ? o.replace(eC, "$1") : n || r);
          }),
          t
        );
      });
    Qc.exports = tC;
  });
  var op = F((ZU, ap) => {
    l();
    c();
    p();
    var ep = mt(),
      rC = Xa(),
      nC = He(),
      aC = Fr(),
      oC = 1 / 0,
      tp = ep ? ep.prototype : void 0,
      rp = tp ? tp.toString : void 0;
    function np(e) {
      if (typeof e == "string") return e;
      if (nC(e)) return rC(e, np) + "";
      if (aC(e)) return rp ? rp.call(e) : "";
      var t = e + "";
      return t == "0" && 1 / e == -oC ? "-0" : t;
    }
    ap.exports = np;
  });
  var ip = F((nz, up) => {
    l();
    c();
    p();
    var uC = op();
    function iC(e) {
      return e == null ? "" : uC(e);
    }
    up.exports = iC;
  });
  var Sr = F((iz, sp) => {
    l();
    c();
    p();
    var sC = He(),
      lC = gn(),
      cC = Zc(),
      pC = ip();
    function dC(e, t) {
      return sC(e) ? e : lC(e, t) ? [e] : cC(pC(e));
    }
    sp.exports = dC;
  });
  var $t = F((pz, lp) => {
    l();
    c();
    p();
    var fC = Fr(),
      hC = 1 / 0;
    function gC(e) {
      if (typeof e == "string" || fC(e)) return e;
      var t = e + "";
      return t == "0" && 1 / e == -hC ? "-0" : t;
    }
    lp.exports = gC;
  });
  var mn = F((gz, cp) => {
    l();
    c();
    p();
    var mC = Sr(),
      yC = $t();
    function bC(e, t) {
      t = mC(t, e);
      for (var r = 0, n = t.length; e != null && r < n; ) e = e[yC(t[r++])];
      return r && r == n ? e : void 0;
    }
    cp.exports = bC;
  });
  var dp = F((Az, pp) => {
    l();
    c();
    p();
    var AC = mn();
    function EC(e, t, r) {
      var n = e == null ? void 0 : AC(e, t);
      return n === void 0 ? r : n;
    }
    pp.exports = EC;
  });
  var hp = F((Cz, fp) => {
    l();
    c();
    p();
    function DC(e, t) {
      return e != null && t in Object(e);
    }
    fp.exports = DC;
  });
  var mp = F((wz, gp) => {
    l();
    c();
    p();
    var vC = Sr(),
      CC = un(),
      xC = He(),
      FC = ln(),
      SC = cn(),
      wC = $t();
    function BC(e, t, r) {
      t = vC(t, e);
      for (var n = -1, a = t.length, o = !1; ++n < a; ) {
        var u = wC(t[n]);
        if (!(o = e != null && r(e, u))) break;
        e = e[u];
      }
      return o || ++n != a ? o : ((a = e == null ? 0 : e.length), !!a && SC(a) && FC(u, a) && (xC(e) || CC(e)));
    }
    gp.exports = BC;
  });
  var So = F((Oz, yp) => {
    l();
    c();
    p();
    var TC = hp(),
      _C = mp();
    function OC(e, t) {
      return e != null && _C(e, t, TC);
    }
    yp.exports = OC;
  });
  var Ap = F((kz, bp) => {
    l();
    c();
    p();
    var RC = vo(),
      PC = dp(),
      IC = So(),
      kC = gn(),
      NC = Co(),
      jC = xo(),
      MC = $t(),
      qC = 1,
      LC = 2;
    function $C(e, t) {
      return kC(e) && NC(t)
        ? jC(MC(e), t)
        : function (r) {
            var n = PC(r, e);
            return n === void 0 && n === t ? IC(r, e) : RC(t, n, qC | LC);
          };
    }
    bp.exports = $C;
  });
  var wo = F((qz, Ep) => {
    l();
    c();
    p();
    function UC(e) {
      return e;
    }
    Ep.exports = UC;
  });
  var vp = F((zz, Dp) => {
    l();
    c();
    p();
    function zC(e) {
      return function (t) {
        return t?.[e];
      };
    }
    Dp.exports = zC;
  });
  var xp = F((Vz, Cp) => {
    l();
    c();
    p();
    var HC = mn();
    function GC(e) {
      return function (t) {
        return HC(t, e);
      };
    }
    Cp.exports = GC;
  });
  var Sp = F((Jz, Fp) => {
    l();
    c();
    p();
    var WC = vp(),
      VC = xp(),
      KC = gn(),
      YC = $t();
    function XC(e) {
      return KC(e) ? WC(YC(e)) : VC(e);
    }
    Fp.exports = XC;
  });
  var Bo = F((tH, wp) => {
    l();
    c();
    p();
    var JC = Hc(),
      QC = Ap(),
      ZC = wo(),
      ex = He(),
      tx = Sp();
    function rx(e) {
      return typeof e == "function"
        ? e
        : e == null
        ? ZC
        : typeof e == "object"
        ? ex(e)
          ? QC(e[0], e[1])
          : JC(e)
        : tx(e);
    }
    wp.exports = rx;
  });
  var To = F((oH, Bp) => {
    l();
    c();
    p();
    var nx = ut(),
      ax = (function () {
        try {
          var e = nx(Object, "defineProperty");
          return e({}, "", {}), e;
        } catch {}
      })();
    Bp.exports = ax;
  });
  var yn = F((lH, _p) => {
    l();
    c();
    p();
    var Tp = To();
    function ox(e, t, r) {
      t == "__proto__" && Tp ? Tp(e, t, { configurable: !0, enumerable: !0, value: r, writable: !0 }) : (e[t] = r);
    }
    _p.exports = ox;
  });
  var bn = F((fH, Op) => {
    l();
    c();
    p();
    var ux = yn(),
      ix = Qr(),
      sx = Object.prototype,
      lx = sx.hasOwnProperty;
    function cx(e, t, r) {
      var n = e[t];
      (!(lx.call(e, t) && ix(n, r)) || (r === void 0 && !(t in e))) && ux(e, t, r);
    }
    Op.exports = cx;
  });
  var Ip = F((yH, Pp) => {
    l();
    c();
    p();
    var px = bn(),
      dx = Sr(),
      fx = ln(),
      Rp = ze(),
      hx = $t();
    function gx(e, t, r, n) {
      if (!Rp(e)) return e;
      t = dx(t, e);
      for (var a = -1, o = t.length, u = o - 1, i = e; i != null && ++a < o; ) {
        var s = hx(t[a]),
          d = r;
        if (s === "__proto__" || s === "constructor" || s === "prototype") return e;
        if (a != u) {
          var y = i[s];
          (d = n ? n(y, s, i) : void 0), d === void 0 && (d = Rp(y) ? y : fx(t[a + 1]) ? [] : {});
        }
        px(i, s, d), (i = i[s]);
      }
      return e;
    }
    Pp.exports = gx;
  });
  var _o = F((DH, kp) => {
    l();
    c();
    p();
    var mx = mn(),
      yx = Ip(),
      bx = Sr();
    function Ax(e, t, r) {
      for (var n = -1, a = t.length, o = {}; ++n < a; ) {
        var u = t[n],
          i = mx(e, u);
        r(i, u) && yx(o, bx(u, e), i);
      }
      return o;
    }
    kp.exports = Ax;
  });
  var An = F((FH, Np) => {
    l();
    c();
    p();
    var Ex = po(),
      Dx = Ex(Object.getPrototypeOf, Object);
    Np.exports = Dx;
  });
  var Oo = F((TH, jp) => {
    l();
    c();
    p();
    var vx = an(),
      Cx = An(),
      xx = on(),
      Fx = io(),
      Sx = Object.getOwnPropertySymbols,
      wx = Sx
        ? function (e) {
            for (var t = []; e; ) vx(t, xx(e)), (e = Cx(e));
            return t;
          }
        : Fx;
    jp.exports = wx;
  });
  var qp = F((PH, Mp) => {
    l();
    c();
    p();
    function Bx(e) {
      var t = [];
      if (e != null) for (var r in Object(e)) t.push(r);
      return t;
    }
    Mp.exports = Bx;
  });
  var $p = F((jH, Lp) => {
    l();
    c();
    p();
    var Tx = ze(),
      _x = fn(),
      Ox = qp(),
      Rx = Object.prototype,
      Px = Rx.hasOwnProperty;
    function Ix(e) {
      if (!Tx(e)) return Ox(e);
      var t = _x(e),
        r = [];
      for (var n in e) (n == "constructor" && (t || !Px.call(e, n))) || r.push(n);
      return r;
    }
    Lp.exports = Ix;
  });
  var En = F(($H, Up) => {
    l();
    c();
    p();
    var kx = co(),
      Nx = $p(),
      jx = fo();
    function Mx(e) {
      return jx(e) ? kx(e, !0) : Nx(e);
    }
    Up.exports = Mx;
  });
  var Ro = F((GH, zp) => {
    l();
    c();
    p();
    var qx = uo(),
      Lx = Oo(),
      $x = En();
    function Ux(e) {
      return qx(e, $x, Lx);
    }
    zp.exports = Ux;
  });
  var Po = F((YH, Hp) => {
    l();
    c();
    p();
    var zx = Xa(),
      Hx = Bo(),
      Gx = _o(),
      Wx = Ro();
    function Vx(e, t) {
      if (e == null) return {};
      var r = zx(Wx(e), function (n) {
        return [n];
      });
      return (
        (t = Hx(t)),
        Gx(e, r, function (n, a) {
          return t(n, a[0]);
        })
      );
    }
    Hp.exports = Vx;
  });
  var Cn = F((Ad, Ho) => {
    l();
    c();
    p();
    (function (e) {
      if (typeof Ad == "object" && typeof Ho < "u") Ho.exports = e();
      else if (typeof define == "function" && define.amd) define([], e);
      else {
        var t;
        typeof window < "u" || typeof window < "u" ? (t = window) : typeof self < "u" ? (t = self) : (t = this),
          (t.memoizerific = e());
      }
    })(function () {
      var e, t, r;
      return (function n(a, o, u) {
        function i(y, A) {
          if (!o[y]) {
            if (!a[y]) {
              var g = typeof ir == "function" && ir;
              if (!A && g) return g(y, !0);
              if (s) return s(y, !0);
              var h = new Error("Cannot find module '" + y + "'");
              throw ((h.code = "MODULE_NOT_FOUND"), h);
            }
            var E = (o[y] = { exports: {} });
            a[y][0].call(
              E.exports,
              function (b) {
                var x = a[y][1][b];
                return i(x || b);
              },
              E,
              E.exports,
              n,
              a,
              o,
              u
            );
          }
          return o[y].exports;
        }
        for (var s = typeof ir == "function" && ir, d = 0; d < u.length; d++) i(u[d]);
        return i;
      })(
        {
          1: [
            function (n, a, o) {
              a.exports = function (u) {
                if (typeof Map != "function" || u) {
                  var i = n("./similar");
                  return new i();
                } else return new Map();
              };
            },
            { "./similar": 2 },
          ],
          2: [
            function (n, a, o) {
              function u() {
                return (this.list = []), (this.lastItem = void 0), (this.size = 0), this;
              }
              (u.prototype.get = function (i) {
                var s;
                if (this.lastItem && this.isEqual(this.lastItem.key, i)) return this.lastItem.val;
                if (((s = this.indexOf(i)), s >= 0)) return (this.lastItem = this.list[s]), this.list[s].val;
              }),
                (u.prototype.set = function (i, s) {
                  var d;
                  return this.lastItem && this.isEqual(this.lastItem.key, i)
                    ? ((this.lastItem.val = s), this)
                    : ((d = this.indexOf(i)),
                      d >= 0
                        ? ((this.lastItem = this.list[d]), (this.list[d].val = s), this)
                        : ((this.lastItem = { key: i, val: s }), this.list.push(this.lastItem), this.size++, this));
                }),
                (u.prototype.delete = function (i) {
                  var s;
                  if (
                    (this.lastItem && this.isEqual(this.lastItem.key, i) && (this.lastItem = void 0),
                    (s = this.indexOf(i)),
                    s >= 0)
                  )
                    return this.size--, this.list.splice(s, 1)[0];
                }),
                (u.prototype.has = function (i) {
                  var s;
                  return this.lastItem && this.isEqual(this.lastItem.key, i)
                    ? !0
                    : ((s = this.indexOf(i)), s >= 0 ? ((this.lastItem = this.list[s]), !0) : !1);
                }),
                (u.prototype.forEach = function (i, s) {
                  var d;
                  for (d = 0; d < this.size; d++) i.call(s || this, this.list[d].val, this.list[d].key, this);
                }),
                (u.prototype.indexOf = function (i) {
                  var s;
                  for (s = 0; s < this.size; s++) if (this.isEqual(this.list[s].key, i)) return s;
                  return -1;
                }),
                (u.prototype.isEqual = function (i, s) {
                  return i === s || (i !== i && s !== s);
                }),
                (a.exports = u);
            },
            {},
          ],
          3: [
            function (n, a, o) {
              var u = n("map-or-similar");
              a.exports = function (y) {
                var A = new u(!1),
                  g = [];
                return function (h) {
                  var E = function () {
                    var b = A,
                      x,
                      S,
                      P = arguments.length - 1,
                      N = Array(P + 1),
                      $ = !0,
                      w;
                    if ((E.numArgs || E.numArgs === 0) && E.numArgs !== P + 1)
                      throw new Error(
                        "Memoizerific functions should always be called with the same number of arguments"
                      );
                    for (w = 0; w < P; w++) {
                      if (((N[w] = { cacheItem: b, arg: arguments[w] }), b.has(arguments[w]))) {
                        b = b.get(arguments[w]);
                        continue;
                      }
                      ($ = !1), (x = new u(!1)), b.set(arguments[w], x), (b = x);
                    }
                    return (
                      $ && (b.has(arguments[P]) ? (S = b.get(arguments[P])) : ($ = !1)),
                      $ || ((S = h.apply(null, arguments)), b.set(arguments[P], S)),
                      y > 0 &&
                        ((N[P] = { cacheItem: b, arg: arguments[P] }),
                        $ ? i(g, N) : g.push(N),
                        g.length > y && s(g.shift())),
                      (E.wasMemoized = $),
                      (E.numArgs = P + 1),
                      S
                    );
                  };
                  return (E.limit = y), (E.wasMemoized = !1), (E.cache = A), (E.lru = g), E;
                };
              };
              function i(y, A) {
                var g = y.length,
                  h = A.length,
                  E,
                  b,
                  x;
                for (b = 0; b < g; b++) {
                  for (E = !0, x = 0; x < h; x++)
                    if (!d(y[b][x].arg, A[x].arg)) {
                      E = !1;
                      break;
                    }
                  if (E) break;
                }
                y.push(y.splice(b, 1)[0]);
              }
              function s(y) {
                var A = y.length,
                  g = y[A - 1],
                  h,
                  E;
                for (
                  g.cacheItem.delete(g.arg), E = A - 2;
                  E >= 0 && ((g = y[E]), (h = g.cacheItem.get(g.arg)), !h || !h.size);
                  E--
                )
                  g.cacheItem.delete(g.arg);
              }
              function d(y, A) {
                return y === A || (y !== y && A !== A);
              }
            },
            { "map-or-similar": 1 },
          ],
        },
        {},
        [3]
      )(3);
    });
  });
  var Dd = F((mG, Ed) => {
    l();
    c();
    p();
    function sS(e, t, r, n) {
      for (var a = e.length, o = r + (n ? 1 : -1); n ? o-- : ++o < a; ) if (t(e[o], o, e)) return o;
      return -1;
    }
    Ed.exports = sS;
  });
  var Cd = F((EG, vd) => {
    l();
    c();
    p();
    function lS(e) {
      return e !== e;
    }
    vd.exports = lS;
  });
  var Fd = F((xG, xd) => {
    l();
    c();
    p();
    function cS(e, t, r) {
      for (var n = r - 1, a = e.length; ++n < a; ) if (e[n] === t) return n;
      return -1;
    }
    xd.exports = cS;
  });
  var wd = F((BG, Sd) => {
    l();
    c();
    p();
    var pS = Dd(),
      dS = Cd(),
      fS = Fd();
    function hS(e, t, r) {
      return t === t ? fS(e, t, r) : pS(e, dS, r);
    }
    Sd.exports = hS;
  });
  var Td = F((RG, Bd) => {
    l();
    c();
    p();
    var gS = wd();
    function mS(e, t) {
      var r = e == null ? 0 : e.length;
      return !!r && gS(e, t, 0) > -1;
    }
    Bd.exports = mS;
  });
  var Od = F((NG, _d) => {
    l();
    c();
    p();
    function yS(e, t, r) {
      for (var n = -1, a = e == null ? 0 : e.length; ++n < a; ) if (r(t, e[n])) return !0;
      return !1;
    }
    _d.exports = yS;
  });
  var Pd = F((LG, Rd) => {
    l();
    c();
    p();
    function bS() {}
    Rd.exports = bS;
  });
  var kd = F((HG, Id) => {
    l();
    c();
    p();
    var Go = go(),
      AS = Pd(),
      ES = nn(),
      DS = 1 / 0,
      vS =
        Go && 1 / ES(new Go([, -0]))[1] == DS
          ? function (e) {
              return new Go(e);
            }
          : AS;
    Id.exports = vS;
  });
  var jd = F((KG, Nd) => {
    l();
    c();
    p();
    var CS = to(),
      xS = Td(),
      FS = Od(),
      SS = ro(),
      wS = kd(),
      BS = nn(),
      TS = 200;
    function _S(e, t, r) {
      var n = -1,
        a = xS,
        o = e.length,
        u = !0,
        i = [],
        s = i;
      if (r) (u = !1), (a = FS);
      else if (o >= TS) {
        var d = t ? null : wS(e);
        if (d) return BS(d);
        (u = !1), (a = SS), (s = new CS());
      } else s = t ? [] : i;
      e: for (; ++n < o; ) {
        var y = e[n],
          A = t ? t(y) : y;
        if (((y = r || y !== 0 ? y : 0), u && A === A)) {
          for (var g = s.length; g--; ) if (s[g] === A) continue e;
          t && s.push(A), i.push(y);
        } else a(s, A, r) || (s !== i && s.push(A), i.push(y));
      }
      return i;
    }
    Nd.exports = _S;
  });
  var qd = F((QG, Md) => {
    l();
    c();
    p();
    var OS = jd();
    function RS(e) {
      return e && e.length ? OS(e) : [];
    }
    Md.exports = RS;
  });
  var $d = F((rW, Ld) => {
    l();
    c();
    p();
    function PS(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1; );
      return e;
    }
    Ld.exports = PS;
  });
  var Br = F((uW, Ud) => {
    l();
    c();
    p();
    var IS = bn(),
      kS = yn();
    function NS(e, t, r, n) {
      var a = !r;
      r || (r = {});
      for (var o = -1, u = t.length; ++o < u; ) {
        var i = t[o],
          s = n ? n(r[i], e[i], i, r, e) : void 0;
        s === void 0 && (s = e[i]), a ? kS(r, i, s) : IS(r, i, s);
      }
      return r;
    }
    Ud.exports = NS;
  });
  var Hd = F((cW, zd) => {
    l();
    c();
    p();
    var jS = Br(),
      MS = qt();
    function qS(e, t) {
      return e && jS(t, MS(t), e);
    }
    zd.exports = qS;
  });
  var Wd = F((hW, Gd) => {
    l();
    c();
    p();
    var LS = Br(),
      $S = En();
    function US(e, t) {
      return e && LS(t, $S(t), e);
    }
    Gd.exports = US;
  });
  var Jd = F((Tr, zt) => {
    l();
    c();
    p();
    var zS = Me(),
      Xd = typeof Tr == "object" && Tr && !Tr.nodeType && Tr,
      Vd = Xd && typeof zt == "object" && zt && !zt.nodeType && zt,
      HS = Vd && Vd.exports === Xd,
      Kd = HS ? zS.Buffer : void 0,
      Yd = Kd ? Kd.allocUnsafe : void 0;
    function GS(e, t) {
      if (t) return e.slice();
      var r = e.length,
        n = Yd ? Yd(r) : new e.constructor(r);
      return e.copy(n), n;
    }
    zt.exports = GS;
  });
  var Zd = F((DW, Qd) => {
    l();
    c();
    p();
    function WS(e, t) {
      var r = -1,
        n = e.length;
      for (t || (t = Array(n)); ++r < n; ) t[r] = e[r];
      return t;
    }
    Qd.exports = WS;
  });
  var tf = F((FW, ef) => {
    l();
    c();
    p();
    var VS = Br(),
      KS = on();
    function YS(e, t) {
      return VS(e, KS(e), t);
    }
    ef.exports = YS;
  });
  var nf = F((TW, rf) => {
    l();
    c();
    p();
    var XS = Br(),
      JS = Oo();
    function QS(e, t) {
      return XS(e, JS(e), t);
    }
    rf.exports = QS;
  });
  var of = F((PW, af) => {
    l();
    c();
    p();
    var ZS = Object.prototype,
      ew = ZS.hasOwnProperty;
    function tw(e) {
      var t = e.length,
        r = new e.constructor(t);
      return t && typeof e[0] == "string" && ew.call(e, "index") && ((r.index = e.index), (r.input = e.input)), r;
    }
    af.exports = tw;
  });
  var xn = F((jW, sf) => {
    l();
    c();
    p();
    var uf = ao();
    function rw(e) {
      var t = new e.constructor(e.byteLength);
      return new uf(t).set(new uf(e)), t;
    }
    sf.exports = rw;
  });
  var cf = F(($W, lf) => {
    l();
    c();
    p();
    var nw = xn();
    function aw(e, t) {
      var r = t ? nw(e.buffer) : e.buffer;
      return new e.constructor(r, e.byteOffset, e.byteLength);
    }
    lf.exports = aw;
  });
  var df = F((GW, pf) => {
    l();
    c();
    p();
    var ow = /\w*$/;
    function uw(e) {
      var t = new e.constructor(e.source, ow.exec(e));
      return (t.lastIndex = e.lastIndex), t;
    }
    pf.exports = uw;
  });
  var yf = F((YW, mf) => {
    l();
    c();
    p();
    var ff = mt(),
      hf = ff ? ff.prototype : void 0,
      gf = hf ? hf.valueOf : void 0;
    function iw(e) {
      return gf ? Object(gf.call(e)) : {};
    }
    mf.exports = iw;
  });
  var Af = F((ZW, bf) => {
    l();
    c();
    p();
    var sw = xn();
    function lw(e, t) {
      var r = t ? sw(e.buffer) : e.buffer;
      return new e.constructor(r, e.byteOffset, e.length);
    }
    bf.exports = lw;
  });
  var Df = F((nV, Ef) => {
    l();
    c();
    p();
    var cw = xn(),
      pw = cf(),
      dw = df(),
      fw = yf(),
      hw = Af(),
      gw = "[object Boolean]",
      mw = "[object Date]",
      yw = "[object Map]",
      bw = "[object Number]",
      Aw = "[object RegExp]",
      Ew = "[object Set]",
      Dw = "[object String]",
      vw = "[object Symbol]",
      Cw = "[object ArrayBuffer]",
      xw = "[object DataView]",
      Fw = "[object Float32Array]",
      Sw = "[object Float64Array]",
      ww = "[object Int8Array]",
      Bw = "[object Int16Array]",
      Tw = "[object Int32Array]",
      _w = "[object Uint8Array]",
      Ow = "[object Uint8ClampedArray]",
      Rw = "[object Uint16Array]",
      Pw = "[object Uint32Array]";
    function Iw(e, t, r) {
      var n = e.constructor;
      switch (t) {
        case Cw:
          return cw(e);
        case gw:
        case mw:
          return new n(+e);
        case xw:
          return pw(e, r);
        case Fw:
        case Sw:
        case ww:
        case Bw:
        case Tw:
        case _w:
        case Ow:
        case Rw:
        case Pw:
          return hw(e, r);
        case yw:
          return new n();
        case bw:
        case Dw:
          return new n(e);
        case Aw:
          return dw(e);
        case Ew:
          return new n();
        case vw:
          return fw(e);
      }
    }
    Ef.exports = Iw;
  });
  var xf = F((iV, Cf) => {
    l();
    c();
    p();
    var kw = ze(),
      vf = Object.create,
      Nw = (function () {
        function e() {}
        return function (t) {
          if (!kw(t)) return {};
          if (vf) return vf(t);
          e.prototype = t;
          var r = new e();
          return (e.prototype = void 0), r;
        };
      })();
    Cf.exports = Nw;
  });
  var Sf = F((pV, Ff) => {
    l();
    c();
    p();
    var jw = xf(),
      Mw = An(),
      qw = fn();
    function Lw(e) {
      return typeof e.constructor == "function" && !qw(e) ? jw(Mw(e)) : {};
    }
    Ff.exports = Lw;
  });
  var Bf = F((gV, wf) => {
    l();
    c();
    p();
    var $w = xr(),
      Uw = Ze(),
      zw = "[object Map]";
    function Hw(e) {
      return Uw(e) && $w(e) == zw;
    }
    wf.exports = Hw;
  });
  var Rf = F((AV, Of) => {
    l();
    c();
    p();
    var Gw = Bf(),
      Ww = pn(),
      Tf = dn(),
      _f = Tf && Tf.isMap,
      Vw = _f ? Ww(_f) : Gw;
    Of.exports = Vw;
  });
  var If = F((CV, Pf) => {
    l();
    c();
    p();
    var Kw = xr(),
      Yw = Ze(),
      Xw = "[object Set]";
    function Jw(e) {
      return Yw(e) && Kw(e) == Xw;
    }
    Pf.exports = Jw;
  });
  var Mf = F((wV, jf) => {
    l();
    c();
    p();
    var Qw = If(),
      Zw = pn(),
      kf = dn(),
      Nf = kf && kf.isSet,
      e5 = Nf ? Zw(Nf) : Qw;
    jf.exports = e5;
  });
  var zf = F((OV, Uf) => {
    l();
    c();
    p();
    var t5 = tn(),
      r5 = $d(),
      n5 = bn(),
      a5 = Hd(),
      o5 = Wd(),
      u5 = Jd(),
      i5 = Zd(),
      s5 = tf(),
      l5 = nf(),
      c5 = ho(),
      p5 = Ro(),
      d5 = xr(),
      f5 = of(),
      h5 = Df(),
      g5 = Sf(),
      m5 = He(),
      y5 = sn(),
      b5 = Rf(),
      A5 = ze(),
      E5 = Mf(),
      D5 = qt(),
      v5 = En(),
      C5 = 1,
      x5 = 2,
      F5 = 4,
      qf = "[object Arguments]",
      S5 = "[object Array]",
      w5 = "[object Boolean]",
      B5 = "[object Date]",
      T5 = "[object Error]",
      Lf = "[object Function]",
      _5 = "[object GeneratorFunction]",
      O5 = "[object Map]",
      R5 = "[object Number]",
      $f = "[object Object]",
      P5 = "[object RegExp]",
      I5 = "[object Set]",
      k5 = "[object String]",
      N5 = "[object Symbol]",
      j5 = "[object WeakMap]",
      M5 = "[object ArrayBuffer]",
      q5 = "[object DataView]",
      L5 = "[object Float32Array]",
      $5 = "[object Float64Array]",
      U5 = "[object Int8Array]",
      z5 = "[object Int16Array]",
      H5 = "[object Int32Array]",
      G5 = "[object Uint8Array]",
      W5 = "[object Uint8ClampedArray]",
      V5 = "[object Uint16Array]",
      K5 = "[object Uint32Array]",
      le = {};
    le[qf] =
      le[S5] =
      le[M5] =
      le[q5] =
      le[w5] =
      le[B5] =
      le[L5] =
      le[$5] =
      le[U5] =
      le[z5] =
      le[H5] =
      le[O5] =
      le[R5] =
      le[$f] =
      le[P5] =
      le[I5] =
      le[k5] =
      le[N5] =
      le[G5] =
      le[W5] =
      le[V5] =
      le[K5] =
        !0;
    le[T5] = le[Lf] = le[j5] = !1;
    function Fn(e, t, r, n, a, o) {
      var u,
        i = t & C5,
        s = t & x5,
        d = t & F5;
      if ((r && (u = a ? r(e, n, a, o) : r(e)), u !== void 0)) return u;
      if (!A5(e)) return e;
      var y = m5(e);
      if (y) {
        if (((u = f5(e)), !i)) return i5(e, u);
      } else {
        var A = d5(e),
          g = A == Lf || A == _5;
        if (y5(e)) return u5(e, i);
        if (A == $f || A == qf || (g && !a)) {
          if (((u = s || g ? {} : g5(e)), !i)) return s ? l5(e, o5(u, e)) : s5(e, a5(u, e));
        } else {
          if (!le[A]) return a ? e : {};
          u = h5(e, A, i);
        }
      }
      o || (o = new t5());
      var h = o.get(e);
      if (h) return h;
      o.set(e, u),
        E5(e)
          ? e.forEach(function (x) {
              u.add(Fn(x, t, r, x, e, o));
            })
          : b5(e) &&
            e.forEach(function (x, S) {
              u.set(S, Fn(x, t, r, S, e, o));
            });
      var E = d ? (s ? p5 : c5) : s ? v5 : D5,
        b = y ? void 0 : E(e);
      return (
        r5(b || e, function (x, S) {
          b && ((S = x), (x = e[S])), n5(u, S, Fn(x, t, r, S, e, o));
        }),
        u
      );
    }
    Uf.exports = Fn;
  });
  var Gf = F((kV, Hf) => {
    l();
    c();
    p();
    var Y5 = zf(),
      X5 = 1,
      J5 = 4;
    function Q5(e) {
      return Y5(e, X5 | J5);
    }
    Hf.exports = Q5;
  });
  var e0 = F((dK, Zf) => {
    l();
    c();
    p();
    function _3(e) {
      return function (t, r, n) {
        for (var a = -1, o = Object(t), u = n(t), i = u.length; i--; ) {
          var s = u[e ? i : ++a];
          if (r(o[s], s, o) === !1) break;
        }
        return t;
      };
    }
    Zf.exports = _3;
  });
  var r0 = F((mK, t0) => {
    l();
    c();
    p();
    var O3 = e0(),
      R3 = O3();
    t0.exports = R3;
  });
  var a0 = F((EK, n0) => {
    l();
    c();
    p();
    var P3 = r0(),
      I3 = qt();
    function k3(e, t) {
      return e && P3(e, t, I3);
    }
    n0.exports = k3;
  });
  var Rn = F((xK, o0) => {
    l();
    c();
    p();
    var N3 = yn(),
      j3 = a0(),
      M3 = Bo();
    function q3(e, t) {
      var r = {};
      return (
        (t = M3(t, 3)),
        j3(e, function (n, a, o) {
          N3(r, a, t(n, a, o));
        }),
        r
      );
    }
    o0.exports = q3;
  });
  var i0 = F((BK, u0) => {
    l();
    c();
    p();
    var L3 = _o(),
      $3 = So();
    function U3(e, t) {
      return L3(e, t, function (r, n) {
        return $3(e, n);
      });
    }
    u0.exports = U3;
  });
  var p0 = F((RK, c0) => {
    l();
    c();
    p();
    var s0 = mt(),
      z3 = un(),
      H3 = He(),
      l0 = s0 ? s0.isConcatSpreadable : void 0;
    function G3(e) {
      return H3(e) || z3(e) || !!(l0 && e && e[l0]);
    }
    c0.exports = G3;
  });
  var h0 = F((NK, f0) => {
    l();
    c();
    p();
    var W3 = an(),
      V3 = p0();
    function d0(e, t, r, n, a) {
      var o = -1,
        u = e.length;
      for (r || (r = V3), a || (a = []); ++o < u; ) {
        var i = e[o];
        t > 0 && r(i) ? (t > 1 ? d0(i, t - 1, r, n, a) : W3(a, i)) : n || (a[a.length] = i);
      }
      return a;
    }
    f0.exports = d0;
  });
  var m0 = F((LK, g0) => {
    l();
    c();
    p();
    var K3 = h0();
    function Y3(e) {
      var t = e == null ? 0 : e.length;
      return t ? K3(e, 1) : [];
    }
    g0.exports = Y3;
  });
  var b0 = F((HK, y0) => {
    l();
    c();
    p();
    function X3(e, t, r) {
      switch (r.length) {
        case 0:
          return e.call(t);
        case 1:
          return e.call(t, r[0]);
        case 2:
          return e.call(t, r[0], r[1]);
        case 3:
          return e.call(t, r[0], r[1], r[2]);
      }
      return e.apply(t, r);
    }
    y0.exports = X3;
  });
  var D0 = F((KK, E0) => {
    l();
    c();
    p();
    var J3 = b0(),
      A0 = Math.max;
    function Q3(e, t, r) {
      return (
        (t = A0(t === void 0 ? e.length - 1 : t, 0)),
        function () {
          for (var n = arguments, a = -1, o = A0(n.length - t, 0), u = Array(o); ++a < o; ) u[a] = n[t + a];
          a = -1;
          for (var i = Array(t + 1); ++a < t; ) i[a] = n[a];
          return (i[t] = r(u)), J3(e, this, i);
        }
      );
    }
    E0.exports = Q3;
  });
  var C0 = F((QK, v0) => {
    l();
    c();
    p();
    function Z3(e) {
      return function () {
        return e;
      };
    }
    v0.exports = Z3;
  });
  var S0 = F((rY, F0) => {
    l();
    c();
    p();
    var eB = C0(),
      x0 = To(),
      tB = wo(),
      rB = x0
        ? function (e, t) {
            return x0(e, "toString", { configurable: !0, enumerable: !1, value: eB(t), writable: !0 });
          }
        : tB;
    F0.exports = rB;
  });
  var B0 = F((uY, w0) => {
    l();
    c();
    p();
    var nB = 800,
      aB = 16,
      oB = Date.now;
    function uB(e) {
      var t = 0,
        r = 0;
      return function () {
        var n = oB(),
          a = aB - (n - r);
        if (((r = n), a > 0)) {
          if (++t >= nB) return arguments[0];
        } else t = 0;
        return e.apply(void 0, arguments);
      };
    }
    w0.exports = uB;
  });
  var _0 = F((cY, T0) => {
    l();
    c();
    p();
    var iB = S0(),
      sB = B0(),
      lB = sB(iB);
    T0.exports = lB;
  });
  var R0 = F((hY, O0) => {
    l();
    c();
    p();
    var cB = m0(),
      pB = D0(),
      dB = _0();
    function fB(e) {
      return dB(pB(e, void 0, cB), e + "");
    }
    O0.exports = fB;
  });
  var I0 = F((bY, P0) => {
    l();
    c();
    p();
    var hB = i0(),
      gB = R0(),
      mB = gB(function (e, t) {
        return e == null ? {} : hB(e, t);
      });
    P0.exports = mB;
  });
  var In = F((vY, L0) => {
    "use strict";
    l();
    c();
    p();
    function Pn(e) {
      return Array.prototype.slice.apply(e);
    }
    var M0 = "pending",
      k0 = "resolved",
      N0 = "rejected";
    function re(e) {
      (this.status = M0),
        (this._continuations = []),
        (this._parent = null),
        (this._paused = !1),
        e && e.call(this, this._continueWith.bind(this), this._failWith.bind(this));
    }
    function _r(e) {
      return e && typeof e.then == "function";
    }
    function yB(e) {
      return e;
    }
    re.prototype = {
      then: function (e, t) {
        var r = re.unresolved()._setParent(this);
        if (this._isRejected()) {
          if (this._paused) return this._continuations.push({ promise: r, nextFn: e, catchFn: t }), r;
          if (t)
            try {
              var n = t(this._error);
              return _r(n) ? (this._chainPromiseData(n, r), r) : re.resolve(n)._setParent(this);
            } catch (a) {
              return re.reject(a)._setParent(this);
            }
          return re.reject(this._error)._setParent(this);
        }
        return this._continuations.push({ promise: r, nextFn: e, catchFn: t }), this._runResolutions(), r;
      },
      catch: function (e) {
        if (this._isResolved()) return re.resolve(this._data)._setParent(this);
        var t = re.unresolved()._setParent(this);
        return this._continuations.push({ promise: t, catchFn: e }), this._runRejections(), t;
      },
      finally: function (e) {
        var t = !1;
        function r(n, a) {
          if (!t) {
            (t = !0), e || (e = yB);
            var o = e(n);
            return _r(o)
              ? o.then(function () {
                  if (a) throw a;
                  return n;
                })
              : n;
          }
        }
        return this.then(function (n) {
          return r(n);
        }).catch(function (n) {
          return r(null, n);
        });
      },
      pause: function () {
        return (this._paused = !0), this;
      },
      resume: function () {
        var e = this._findFirstPaused();
        return e && ((e._paused = !1), e._runResolutions(), e._runRejections()), this;
      },
      _findAncestry: function () {
        return this._continuations.reduce(function (e, t) {
          if (t.promise) {
            var r = { promise: t.promise, children: t.promise._findAncestry() };
            e.push(r);
          }
          return e;
        }, []);
      },
      _setParent: function (e) {
        if (this._parent) throw new Error("parent already set");
        return (this._parent = e), this;
      },
      _continueWith: function (e) {
        var t = this._findFirstPending();
        t && ((t._data = e), t._setResolved());
      },
      _findFirstPending: function () {
        return this._findFirstAncestor(function (e) {
          return e._isPending && e._isPending();
        });
      },
      _findFirstPaused: function () {
        return this._findFirstAncestor(function (e) {
          return e._paused;
        });
      },
      _findFirstAncestor: function (e) {
        for (var t = this, r; t; ) e(t) && (r = t), (t = t._parent);
        return r;
      },
      _failWith: function (e) {
        var t = this._findFirstPending();
        t && ((t._error = e), t._setRejected());
      },
      _takeContinuations: function () {
        return this._continuations.splice(0, this._continuations.length);
      },
      _runRejections: function () {
        if (!(this._paused || !this._isRejected())) {
          var e = this._error,
            t = this._takeContinuations(),
            r = this;
          t.forEach(function (n) {
            if (n.catchFn)
              try {
                var a = n.catchFn(e);
                r._handleUserFunctionResult(a, n.promise);
              } catch (o) {
                n.promise.reject(o);
              }
            else n.promise.reject(e);
          });
        }
      },
      _runResolutions: function () {
        if (!(this._paused || !this._isResolved() || this._isPending())) {
          var e = this._takeContinuations(),
            t = this._data,
            r = this;
          if (
            (e.forEach(function (n) {
              if (n.nextFn)
                try {
                  var a = n.nextFn(t);
                  r._handleUserFunctionResult(a, n.promise);
                } catch (o) {
                  r._handleResolutionError(o, n);
                }
              else n.promise && n.promise.resolve(t);
            }),
            _r(this._data))
          )
            return this._handleWhenResolvedDataIsPromise(this._data);
        }
      },
      _handleResolutionError: function (e, t) {
        if ((this._setRejected(), t.catchFn))
          try {
            t.catchFn(e);
            return;
          } catch (r) {
            e = r;
          }
        t.promise && t.promise.reject(e);
      },
      _handleWhenResolvedDataIsPromise: function (e) {
        var t = this;
        return e
          .then(function (r) {
            (t._data = r), t._runResolutions();
          })
          .catch(function (r) {
            (t._error = r), t._setRejected(), t._runRejections();
          });
      },
      _handleUserFunctionResult: function (e, t) {
        _r(e) ? this._chainPromiseData(e, t) : t.resolve(e);
      },
      _chainPromiseData: function (e, t) {
        e.then(function (r) {
          t.resolve(r);
        }).catch(function (r) {
          t.reject(r);
        });
      },
      _setResolved: function () {
        (this.status = k0), this._paused || this._runResolutions();
      },
      _setRejected: function () {
        (this.status = N0), this._paused || this._runRejections();
      },
      _isPending: function () {
        return this.status === M0;
      },
      _isResolved: function () {
        return this.status === k0;
      },
      _isRejected: function () {
        return this.status === N0;
      },
    };
    re.resolve = function (e) {
      return new re(function (t, r) {
        _r(e)
          ? e
              .then(function (n) {
                t(n);
              })
              .catch(function (n) {
                r(n);
              })
          : t(e);
      });
    };
    re.reject = function (e) {
      return new re(function (t, r) {
        r(e);
      });
    };
    re.unresolved = function () {
      return new re(function (e, t) {
        (this.resolve = e), (this.reject = t);
      });
    };
    re.all = function () {
      var e = Pn(arguments);
      return (
        Array.isArray(e[0]) && (e = e[0]),
        e.length
          ? new re(function (t, r) {
              var n = [],
                a = 0,
                o = function () {
                  a === e.length && t(n);
                },
                u = !1,
                i = function (s) {
                  u || ((u = !0), r(s));
                };
              e.forEach(function (s, d) {
                re.resolve(s)
                  .then(function (y) {
                    (n[d] = y), (a += 1), o();
                  })
                  .catch(function (y) {
                    i(y);
                  });
              });
            })
          : re.resolve([])
      );
    };
    function j0(e) {
      return typeof window < "u" && "AggregateError" in window ? new window.AggregateError(e) : { errors: e };
    }
    re.any = function () {
      var e = Pn(arguments);
      return (
        Array.isArray(e[0]) && (e = e[0]),
        e.length
          ? new re(function (t, r) {
              var n = [],
                a = 0,
                o = function () {
                  a === e.length && r(j0(n));
                },
                u = !1,
                i = function (s) {
                  u || ((u = !0), t(s));
                };
              e.forEach(function (s, d) {
                re.resolve(s)
                  .then(function (y) {
                    i(y);
                  })
                  .catch(function (y) {
                    (n[d] = y), (a += 1), o();
                  });
              });
            })
          : re.reject(j0([]))
      );
    };
    re.allSettled = function () {
      var e = Pn(arguments);
      return (
        Array.isArray(e[0]) && (e = e[0]),
        e.length
          ? new re(function (t) {
              var r = [],
                n = 0,
                a = function () {
                  (n += 1), n === e.length && t(r);
                };
              e.forEach(function (o, u) {
                re.resolve(o)
                  .then(function (i) {
                    (r[u] = { status: "fulfilled", value: i }), a();
                  })
                  .catch(function (i) {
                    (r[u] = { status: "rejected", reason: i }), a();
                  });
              });
            })
          : re.resolve([])
      );
    };
    if (Promise === re) throw new Error("Please use SynchronousPromise.installGlobally() to install globally");
    var q0 = Promise;
    re.installGlobally = function (e) {
      if (Promise === re) return e;
      var t = bB(e);
      return (Promise = re), t;
    };
    re.uninstallGlobally = function () {
      Promise === re && (Promise = q0);
    };
    function bB(e) {
      if (typeof e > "u" || e.__patched) return e;
      var t = e;
      return (
        (e = function () {
          var r = q0;
          t.apply(this, Pn(arguments));
        }),
        (e.__patched = !0),
        e
      );
    }
    L0.exports = { SynchronousPromise: re };
  });
  var Ko = F((IY, U0) => {
    l();
    c();
    p();
    var AB = yt(),
      EB = An(),
      DB = Ze(),
      vB = "[object Object]",
      CB = Function.prototype,
      xB = Object.prototype,
      $0 = CB.toString,
      FB = xB.hasOwnProperty,
      SB = $0.call(Object);
    function wB(e) {
      if (!DB(e) || AB(e) != vB) return !1;
      var t = EB(e);
      if (t === null) return !0;
      var r = FB.call(t, "constructor") && t.constructor;
      return typeof r == "function" && r instanceof r && $0.call(r) == SB;
    }
    U0.exports = wB;
  });
  var H0 = F((MY, z0) => {
    l();
    c();
    p();
    z0.exports = BB;
    function BB(e, t) {
      if (Yo("noDeprecation")) return e;
      var r = !1;
      function n() {
        if (!r) {
          if (Yo("throwDeprecation")) throw new Error(t);
          Yo("traceDeprecation") ? console.trace(t) : console.warn(t), (r = !0);
        }
        return e.apply(this, arguments);
      }
      return n;
    }
    function Yo(e) {
      try {
        if (!window.localStorage) return !1;
      } catch {
        return !1;
      }
      var t = window.localStorage[e];
      return t == null ? !1 : String(t).toLowerCase() === "true";
    }
  });
  var J0 = F((oX, X0) => {
    "use strict";
    l();
    c();
    p();
    X0.exports = function () {
      if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function") return !1;
      if (typeof Symbol.iterator == "symbol") return !0;
      var t = {},
        r = Symbol("test"),
        n = Object(r);
      if (
        typeof r == "string" ||
        Object.prototype.toString.call(r) !== "[object Symbol]" ||
        Object.prototype.toString.call(n) !== "[object Symbol]"
      )
        return !1;
      var a = 42;
      t[r] = a;
      for (r in t) return !1;
      if (
        (typeof Object.keys == "function" && Object.keys(t).length !== 0) ||
        (typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(t).length !== 0)
      )
        return !1;
      var o = Object.getOwnPropertySymbols(t);
      if (o.length !== 1 || o[0] !== r || !Object.prototype.propertyIsEnumerable.call(t, r)) return !1;
      if (typeof Object.getOwnPropertyDescriptor == "function") {
        var u = Object.getOwnPropertyDescriptor(t, r);
        if (u.value !== a || u.enumerable !== !0) return !1;
      }
      return !0;
    };
  });
  var eh = F((lX, Z0) => {
    "use strict";
    l();
    c();
    p();
    var Q0 = typeof Symbol < "u" && Symbol,
      HB = J0();
    Z0.exports = function () {
      return typeof Q0 != "function" ||
        typeof Symbol != "function" ||
        typeof Q0("foo") != "symbol" ||
        typeof Symbol("bar") != "symbol"
        ? !1
        : HB();
    };
  });
  var nh = F((fX, rh) => {
    "use strict";
    l();
    c();
    p();
    var th = { foo: {} },
      GB = Object;
    rh.exports = function () {
      return { __proto__: th }.foo === th.foo && !({ __proto__: null } instanceof GB);
    };
  });
  var oh = F((yX, ah) => {
    "use strict";
    l();
    c();
    p();
    var WB = "Function.prototype.bind called on incompatible ",
      Zo = Array.prototype.slice,
      VB = Object.prototype.toString,
      KB = "[object Function]";
    ah.exports = function (t) {
      var r = this;
      if (typeof r != "function" || VB.call(r) !== KB) throw new TypeError(WB + r);
      for (
        var n = Zo.call(arguments, 1),
          a,
          o = function () {
            if (this instanceof a) {
              var y = r.apply(this, n.concat(Zo.call(arguments)));
              return Object(y) === y ? y : this;
            } else return r.apply(t, n.concat(Zo.call(arguments)));
          },
          u = Math.max(0, r.length - n.length),
          i = [],
          s = 0;
        s < u;
        s++
      )
        i.push("$" + s);
      if (
        ((a = Function("binder", "return function (" + i.join(",") + "){ return binder.apply(this,arguments); }")(o)),
        r.prototype)
      ) {
        var d = function () {};
        (d.prototype = r.prototype), (a.prototype = new d()), (d.prototype = null);
      }
      return a;
    };
  });
  var qn = F((DX, uh) => {
    "use strict";
    l();
    c();
    p();
    var YB = oh();
    uh.exports = Function.prototype.bind || YB;
  });
  var sh = F((FX, ih) => {
    "use strict";
    l();
    c();
    p();
    var XB = qn();
    ih.exports = XB.call(Function.call, Object.prototype.hasOwnProperty);
  });
  var Un = F((TX, fh) => {
    "use strict";
    l();
    c();
    p();
    var ee,
      Kt = SyntaxError,
      dh = Function,
      Vt = TypeError,
      eu = function (e) {
        try {
          return dh('"use strict"; return (' + e + ").constructor;")();
        } catch {}
      },
      Dt = Object.getOwnPropertyDescriptor;
    if (Dt)
      try {
        Dt({}, "");
      } catch {
        Dt = null;
      }
    var tu = function () {
        throw new Vt();
      },
      JB = Dt
        ? (function () {
            try {
              return arguments.callee, tu;
            } catch {
              try {
                return Dt(arguments, "callee").get;
              } catch {
                return tu;
              }
            }
          })()
        : tu,
      Gt = eh()(),
      QB = nh()(),
      Ee =
        Object.getPrototypeOf ||
        (QB
          ? function (e) {
              return e.__proto__;
            }
          : null),
      Wt = {},
      ZB = typeof Uint8Array > "u" || !Ee ? ee : Ee(Uint8Array),
      vt = {
        "%AggregateError%": typeof AggregateError > "u" ? ee : AggregateError,
        "%Array%": Array,
        "%ArrayBuffer%": typeof ArrayBuffer > "u" ? ee : ArrayBuffer,
        "%ArrayIteratorPrototype%": Gt && Ee ? Ee([][Symbol.iterator]()) : ee,
        "%AsyncFromSyncIteratorPrototype%": ee,
        "%AsyncFunction%": Wt,
        "%AsyncGenerator%": Wt,
        "%AsyncGeneratorFunction%": Wt,
        "%AsyncIteratorPrototype%": Wt,
        "%Atomics%": typeof Atomics > "u" ? ee : Atomics,
        "%BigInt%": typeof BigInt > "u" ? ee : BigInt,
        "%BigInt64Array%": typeof BigInt64Array > "u" ? ee : BigInt64Array,
        "%BigUint64Array%": typeof BigUint64Array > "u" ? ee : BigUint64Array,
        "%Boolean%": Boolean,
        "%DataView%": typeof DataView > "u" ? ee : DataView,
        "%Date%": Date,
        "%decodeURI%": decodeURI,
        "%decodeURIComponent%": decodeURIComponent,
        "%encodeURI%": encodeURI,
        "%encodeURIComponent%": encodeURIComponent,
        "%Error%": Error,
        "%eval%": eval,
        "%EvalError%": EvalError,
        "%Float32Array%": typeof Float32Array > "u" ? ee : Float32Array,
        "%Float64Array%": typeof Float64Array > "u" ? ee : Float64Array,
        "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? ee : FinalizationRegistry,
        "%Function%": dh,
        "%GeneratorFunction%": Wt,
        "%Int8Array%": typeof Int8Array > "u" ? ee : Int8Array,
        "%Int16Array%": typeof Int16Array > "u" ? ee : Int16Array,
        "%Int32Array%": typeof Int32Array > "u" ? ee : Int32Array,
        "%isFinite%": isFinite,
        "%isNaN%": isNaN,
        "%IteratorPrototype%": Gt && Ee ? Ee(Ee([][Symbol.iterator]())) : ee,
        "%JSON%": typeof JSON == "object" ? JSON : ee,
        "%Map%": typeof Map > "u" ? ee : Map,
        "%MapIteratorPrototype%": typeof Map > "u" || !Gt || !Ee ? ee : Ee(new Map()[Symbol.iterator]()),
        "%Math%": Math,
        "%Number%": Number,
        "%Object%": Object,
        "%parseFloat%": parseFloat,
        "%parseInt%": parseInt,
        "%Promise%": typeof Promise > "u" ? ee : Promise,
        "%Proxy%": typeof Proxy > "u" ? ee : Proxy,
        "%RangeError%": RangeError,
        "%ReferenceError%": ReferenceError,
        "%Reflect%": typeof Reflect > "u" ? ee : Reflect,
        "%RegExp%": RegExp,
        "%Set%": typeof Set > "u" ? ee : Set,
        "%SetIteratorPrototype%": typeof Set > "u" || !Gt || !Ee ? ee : Ee(new Set()[Symbol.iterator]()),
        "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? ee : SharedArrayBuffer,
        "%String%": String,
        "%StringIteratorPrototype%": Gt && Ee ? Ee(""[Symbol.iterator]()) : ee,
        "%Symbol%": Gt ? Symbol : ee,
        "%SyntaxError%": Kt,
        "%ThrowTypeError%": JB,
        "%TypedArray%": ZB,
        "%TypeError%": Vt,
        "%Uint8Array%": typeof Uint8Array > "u" ? ee : Uint8Array,
        "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? ee : Uint8ClampedArray,
        "%Uint16Array%": typeof Uint16Array > "u" ? ee : Uint16Array,
        "%Uint32Array%": typeof Uint32Array > "u" ? ee : Uint32Array,
        "%URIError%": URIError,
        "%WeakMap%": typeof WeakMap > "u" ? ee : WeakMap,
        "%WeakRef%": typeof WeakRef > "u" ? ee : WeakRef,
        "%WeakSet%": typeof WeakSet > "u" ? ee : WeakSet,
      };
    if (Ee)
      try {
        null.error;
      } catch (e) {
        (lh = Ee(Ee(e))), (vt["%Error.prototype%"] = lh);
      }
    var lh,
      eT = function e(t) {
        var r;
        if (t === "%AsyncFunction%") r = eu("async function () {}");
        else if (t === "%GeneratorFunction%") r = eu("function* () {}");
        else if (t === "%AsyncGeneratorFunction%") r = eu("async function* () {}");
        else if (t === "%AsyncGenerator%") {
          var n = e("%AsyncGeneratorFunction%");
          n && (r = n.prototype);
        } else if (t === "%AsyncIteratorPrototype%") {
          var a = e("%AsyncGenerator%");
          a && Ee && (r = Ee(a.prototype));
        }
        return (vt[t] = r), r;
      },
      ch = {
        "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
        "%ArrayPrototype%": ["Array", "prototype"],
        "%ArrayProto_entries%": ["Array", "prototype", "entries"],
        "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
        "%ArrayProto_keys%": ["Array", "prototype", "keys"],
        "%ArrayProto_values%": ["Array", "prototype", "values"],
        "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
        "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
        "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
        "%BooleanPrototype%": ["Boolean", "prototype"],
        "%DataViewPrototype%": ["DataView", "prototype"],
        "%DatePrototype%": ["Date", "prototype"],
        "%ErrorPrototype%": ["Error", "prototype"],
        "%EvalErrorPrototype%": ["EvalError", "prototype"],
        "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
        "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
        "%FunctionPrototype%": ["Function", "prototype"],
        "%Generator%": ["GeneratorFunction", "prototype"],
        "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
        "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
        "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
        "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
        "%JSONParse%": ["JSON", "parse"],
        "%JSONStringify%": ["JSON", "stringify"],
        "%MapPrototype%": ["Map", "prototype"],
        "%NumberPrototype%": ["Number", "prototype"],
        "%ObjectPrototype%": ["Object", "prototype"],
        "%ObjProto_toString%": ["Object", "prototype", "toString"],
        "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
        "%PromisePrototype%": ["Promise", "prototype"],
        "%PromiseProto_then%": ["Promise", "prototype", "then"],
        "%Promise_all%": ["Promise", "all"],
        "%Promise_reject%": ["Promise", "reject"],
        "%Promise_resolve%": ["Promise", "resolve"],
        "%RangeErrorPrototype%": ["RangeError", "prototype"],
        "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
        "%RegExpPrototype%": ["RegExp", "prototype"],
        "%SetPrototype%": ["Set", "prototype"],
        "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
        "%StringPrototype%": ["String", "prototype"],
        "%SymbolPrototype%": ["Symbol", "prototype"],
        "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
        "%TypedArrayPrototype%": ["TypedArray", "prototype"],
        "%TypeErrorPrototype%": ["TypeError", "prototype"],
        "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
        "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
        "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
        "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
        "%URIErrorPrototype%": ["URIError", "prototype"],
        "%WeakMapPrototype%": ["WeakMap", "prototype"],
        "%WeakSetPrototype%": ["WeakSet", "prototype"],
      },
      Ir = qn(),
      Ln = sh(),
      tT = Ir.call(Function.call, Array.prototype.concat),
      rT = Ir.call(Function.apply, Array.prototype.splice),
      ph = Ir.call(Function.call, String.prototype.replace),
      $n = Ir.call(Function.call, String.prototype.slice),
      nT = Ir.call(Function.call, RegExp.prototype.exec),
      aT = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
      oT = /\\(\\)?/g,
      uT = function (t) {
        var r = $n(t, 0, 1),
          n = $n(t, -1);
        if (r === "%" && n !== "%") throw new Kt("invalid intrinsic syntax, expected closing `%`");
        if (n === "%" && r !== "%") throw new Kt("invalid intrinsic syntax, expected opening `%`");
        var a = [];
        return (
          ph(t, aT, function (o, u, i, s) {
            a[a.length] = i ? ph(s, oT, "$1") : u || o;
          }),
          a
        );
      },
      iT = function (t, r) {
        var n = t,
          a;
        if ((Ln(ch, n) && ((a = ch[n]), (n = "%" + a[0] + "%")), Ln(vt, n))) {
          var o = vt[n];
          if ((o === Wt && (o = eT(n)), typeof o > "u" && !r))
            throw new Vt("intrinsic " + t + " exists, but is not available. Please file an issue!");
          return { alias: a, name: n, value: o };
        }
        throw new Kt("intrinsic " + t + " does not exist!");
      };
    fh.exports = function (t, r) {
      if (typeof t != "string" || t.length === 0) throw new Vt("intrinsic name must be a non-empty string");
      if (arguments.length > 1 && typeof r != "boolean") throw new Vt('"allowMissing" argument must be a boolean');
      if (nT(/^%?[^%]*%?$/, t) === null)
        throw new Kt("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
      var n = uT(t),
        a = n.length > 0 ? n[0] : "",
        o = iT("%" + a + "%", r),
        u = o.name,
        i = o.value,
        s = !1,
        d = o.alias;
      d && ((a = d[0]), rT(n, tT([0, 1], d)));
      for (var y = 1, A = !0; y < n.length; y += 1) {
        var g = n[y],
          h = $n(g, 0, 1),
          E = $n(g, -1);
        if ((h === '"' || h === "'" || h === "`" || E === '"' || E === "'" || E === "`") && h !== E)
          throw new Kt("property names with quotes must have matching quotes");
        if (((g === "constructor" || !A) && (s = !0), (a += "." + g), (u = "%" + a + "%"), Ln(vt, u))) i = vt[u];
        else if (i != null) {
          if (!(g in i)) {
            if (!r) throw new Vt("base intrinsic for " + t + " exists, but the property is not available.");
            return;
          }
          if (Dt && y + 1 >= n.length) {
            var b = Dt(i, g);
            (A = !!b), A && "get" in b && !("originalValue" in b.get) ? (i = b.get) : (i = i[g]);
          } else (A = Ln(i, g)), (i = i[g]);
          A && !s && (vt[u] = i);
        }
      }
      return i;
    };
  });
  var Ah = F((PX, zn) => {
    "use strict";
    l();
    c();
    p();
    var ru = qn(),
      Yt = Un(),
      mh = Yt("%Function.prototype.apply%"),
      yh = Yt("%Function.prototype.call%"),
      bh = Yt("%Reflect.apply%", !0) || ru.call(yh, mh),
      hh = Yt("%Object.getOwnPropertyDescriptor%", !0),
      Ct = Yt("%Object.defineProperty%", !0),
      sT = Yt("%Math.max%");
    if (Ct)
      try {
        Ct({}, "a", { value: 1 });
      } catch {
        Ct = null;
      }
    zn.exports = function (t) {
      var r = bh(ru, yh, arguments);
      if (hh && Ct) {
        var n = hh(r, "length");
        n.configurable && Ct(r, "length", { value: 1 + sT(0, t.length - (arguments.length - 1)) });
      }
      return r;
    };
    var gh = function () {
      return bh(ru, mh, arguments);
    };
    Ct ? Ct(zn.exports, "apply", { value: gh }) : (zn.exports.apply = gh);
  });
  var Ch = F((jX, vh) => {
    "use strict";
    l();
    c();
    p();
    var Eh = Un(),
      Dh = Ah(),
      lT = Dh(Eh("String.prototype.indexOf"));
    vh.exports = function (t, r) {
      var n = Eh(t, !!r);
      return typeof n == "function" && lT(t, ".prototype.") > -1 ? Dh(n) : n;
    };
  });
  var xh = F(() => {
    l();
    c();
    p();
  });
  var Hh = F((WX, zh) => {
    l();
    c();
    p();
    var du = typeof Map == "function" && Map.prototype,
      nu = Object.getOwnPropertyDescriptor && du ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null,
      Gn = du && nu && typeof nu.get == "function" ? nu.get : null,
      Fh = du && Map.prototype.forEach,
      fu = typeof Set == "function" && Set.prototype,
      au = Object.getOwnPropertyDescriptor && fu ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null,
      Wn = fu && au && typeof au.get == "function" ? au.get : null,
      Sh = fu && Set.prototype.forEach,
      cT = typeof WeakMap == "function" && WeakMap.prototype,
      Nr = cT ? WeakMap.prototype.has : null,
      pT = typeof WeakSet == "function" && WeakSet.prototype,
      jr = pT ? WeakSet.prototype.has : null,
      dT = typeof WeakRef == "function" && WeakRef.prototype,
      wh = dT ? WeakRef.prototype.deref : null,
      fT = Boolean.prototype.valueOf,
      hT = Object.prototype.toString,
      gT = Function.prototype.toString,
      mT = String.prototype.match,
      hu = String.prototype.slice,
      ct = String.prototype.replace,
      yT = String.prototype.toUpperCase,
      Bh = String.prototype.toLowerCase,
      jh = RegExp.prototype.test,
      Th = Array.prototype.concat,
      We = Array.prototype.join,
      bT = Array.prototype.slice,
      _h = Math.floor,
      iu = typeof BigInt == "function" ? BigInt.prototype.valueOf : null,
      ou = Object.getOwnPropertySymbols,
      su = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null,
      Xt = typeof Symbol == "function" && typeof Symbol.iterator == "object",
      Se =
        typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === Xt || "symbol")
          ? Symbol.toStringTag
          : null,
      Mh = Object.prototype.propertyIsEnumerable,
      Oh =
        (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) ||
        ([].__proto__ === Array.prototype
          ? function (e) {
              return e.__proto__;
            }
          : null);
    function Rh(e, t) {
      if (e === 1 / 0 || e === -1 / 0 || e !== e || (e && e > -1e3 && e < 1e3) || jh.call(/e/, t)) return t;
      var r = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
      if (typeof e == "number") {
        var n = e < 0 ? -_h(-e) : _h(e);
        if (n !== e) {
          var a = String(n),
            o = hu.call(t, a.length + 1);
          return ct.call(a, r, "$&_") + "." + ct.call(ct.call(o, /([0-9]{3})/g, "$&_"), /_$/, "");
        }
      }
      return ct.call(t, r, "$&_");
    }
    var lu = xh(),
      Ph = lu.custom,
      Ih = Lh(Ph) ? Ph : null;
    zh.exports = function e(t, r, n, a) {
      var o = r || {};
      if (lt(o, "quoteStyle") && o.quoteStyle !== "single" && o.quoteStyle !== "double")
        throw new TypeError('option "quoteStyle" must be "single" or "double"');
      if (
        lt(o, "maxStringLength") &&
        (typeof o.maxStringLength == "number"
          ? o.maxStringLength < 0 && o.maxStringLength !== 1 / 0
          : o.maxStringLength !== null)
      )
        throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
      var u = lt(o, "customInspect") ? o.customInspect : !0;
      if (typeof u != "boolean" && u !== "symbol")
        throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
      if (
        lt(o, "indent") &&
        o.indent !== null &&
        o.indent !== "	" &&
        !(parseInt(o.indent, 10) === o.indent && o.indent > 0)
      )
        throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
      if (lt(o, "numericSeparator") && typeof o.numericSeparator != "boolean")
        throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
      var i = o.numericSeparator;
      if (typeof t > "u") return "undefined";
      if (t === null) return "null";
      if (typeof t == "boolean") return t ? "true" : "false";
      if (typeof t == "string") return Uh(t, o);
      if (typeof t == "number") {
        if (t === 0) return 1 / 0 / t > 0 ? "0" : "-0";
        var s = String(t);
        return i ? Rh(t, s) : s;
      }
      if (typeof t == "bigint") {
        var d = String(t) + "n";
        return i ? Rh(t, d) : d;
      }
      var y = typeof o.depth > "u" ? 5 : o.depth;
      if ((typeof n > "u" && (n = 0), n >= y && y > 0 && typeof t == "object")) return cu(t) ? "[Array]" : "[Object]";
      var A = NT(o, n);
      if (typeof a > "u") a = [];
      else if ($h(a, t) >= 0) return "[Circular]";
      function g(X, O, T) {
        if ((O && ((a = bT.call(a)), a.push(O)), T)) {
          var M = { depth: o.depth };
          return lt(o, "quoteStyle") && (M.quoteStyle = o.quoteStyle), e(X, M, n + 1, a);
        }
        return e(X, o, n + 1, a);
      }
      if (typeof t == "function" && !kh(t)) {
        var h = wT(t),
          E = Hn(t, g);
        return (
          "[Function" + (h ? ": " + h : " (anonymous)") + "]" + (E.length > 0 ? " { " + We.call(E, ", ") + " }" : "")
        );
      }
      if (Lh(t)) {
        var b = Xt ? ct.call(String(t), /^(Symbol\(.*\))_[^)]*$/, "$1") : su.call(t);
        return typeof t == "object" && !Xt ? kr(b) : b;
      }
      if (PT(t)) {
        for (var x = "<" + Bh.call(String(t.nodeName)), S = t.attributes || [], P = 0; P < S.length; P++)
          x += " " + S[P].name + "=" + qh(AT(S[P].value), "double", o);
        return (
          (x += ">"),
          t.childNodes && t.childNodes.length && (x += "..."),
          (x += "</" + Bh.call(String(t.nodeName)) + ">"),
          x
        );
      }
      if (cu(t)) {
        if (t.length === 0) return "[]";
        var N = Hn(t, g);
        return A && !kT(N) ? "[" + pu(N, A) + "]" : "[ " + We.call(N, ", ") + " ]";
      }
      if (DT(t)) {
        var $ = Hn(t, g);
        return !("cause" in Error.prototype) && "cause" in t && !Mh.call(t, "cause")
          ? "{ [" + String(t) + "] " + We.call(Th.call("[cause]: " + g(t.cause), $), ", ") + " }"
          : $.length === 0
          ? "[" + String(t) + "]"
          : "{ [" + String(t) + "] " + We.call($, ", ") + " }";
      }
      if (typeof t == "object" && u) {
        if (Ih && typeof t[Ih] == "function" && lu) return lu(t, { depth: y - n });
        if (u !== "symbol" && typeof t.inspect == "function") return t.inspect();
      }
      if (BT(t)) {
        var w = [];
        return (
          Fh &&
            Fh.call(t, function (X, O) {
              w.push(g(O, t, !0) + " => " + g(X, t));
            }),
          Nh("Map", Gn.call(t), w, A)
        );
      }
      if (OT(t)) {
        var j = [];
        return (
          Sh &&
            Sh.call(t, function (X) {
              j.push(g(X, t));
            }),
          Nh("Set", Wn.call(t), j, A)
        );
      }
      if (TT(t)) return uu("WeakMap");
      if (RT(t)) return uu("WeakSet");
      if (_T(t)) return uu("WeakRef");
      if (CT(t)) return kr(g(Number(t)));
      if (FT(t)) return kr(g(iu.call(t)));
      if (xT(t)) return kr(fT.call(t));
      if (vT(t)) return kr(g(String(t)));
      if (!ET(t) && !kh(t)) {
        var I = Hn(t, g),
          U = Oh ? Oh(t) === Object.prototype : t instanceof Object || t.constructor === Object,
          V = t instanceof Object ? "" : "null prototype",
          z = !U && Se && Object(t) === t && Se in t ? hu.call(pt(t), 8, -1) : V ? "Object" : "",
          ie = U || typeof t.constructor != "function" ? "" : t.constructor.name ? t.constructor.name + " " : "",
          Z = ie + (z || V ? "[" + We.call(Th.call([], z || [], V || []), ": ") + "] " : "");
        return I.length === 0 ? Z + "{}" : A ? Z + "{" + pu(I, A) + "}" : Z + "{ " + We.call(I, ", ") + " }";
      }
      return String(t);
    };
    function qh(e, t, r) {
      var n = (r.quoteStyle || t) === "double" ? '"' : "'";
      return n + e + n;
    }
    function AT(e) {
      return ct.call(String(e), /"/g, "&quot;");
    }
    function cu(e) {
      return pt(e) === "[object Array]" && (!Se || !(typeof e == "object" && Se in e));
    }
    function ET(e) {
      return pt(e) === "[object Date]" && (!Se || !(typeof e == "object" && Se in e));
    }
    function kh(e) {
      return pt(e) === "[object RegExp]" && (!Se || !(typeof e == "object" && Se in e));
    }
    function DT(e) {
      return pt(e) === "[object Error]" && (!Se || !(typeof e == "object" && Se in e));
    }
    function vT(e) {
      return pt(e) === "[object String]" && (!Se || !(typeof e == "object" && Se in e));
    }
    function CT(e) {
      return pt(e) === "[object Number]" && (!Se || !(typeof e == "object" && Se in e));
    }
    function xT(e) {
      return pt(e) === "[object Boolean]" && (!Se || !(typeof e == "object" && Se in e));
    }
    function Lh(e) {
      if (Xt) return e && typeof e == "object" && e instanceof Symbol;
      if (typeof e == "symbol") return !0;
      if (!e || typeof e != "object" || !su) return !1;
      try {
        return su.call(e), !0;
      } catch {}
      return !1;
    }
    function FT(e) {
      if (!e || typeof e != "object" || !iu) return !1;
      try {
        return iu.call(e), !0;
      } catch {}
      return !1;
    }
    var ST =
      Object.prototype.hasOwnProperty ||
      function (e) {
        return e in this;
      };
    function lt(e, t) {
      return ST.call(e, t);
    }
    function pt(e) {
      return hT.call(e);
    }
    function wT(e) {
      if (e.name) return e.name;
      var t = mT.call(gT.call(e), /^function\s*([\w$]+)/);
      return t ? t[1] : null;
    }
    function $h(e, t) {
      if (e.indexOf) return e.indexOf(t);
      for (var r = 0, n = e.length; r < n; r++) if (e[r] === t) return r;
      return -1;
    }
    function BT(e) {
      if (!Gn || !e || typeof e != "object") return !1;
      try {
        Gn.call(e);
        try {
          Wn.call(e);
        } catch {
          return !0;
        }
        return e instanceof Map;
      } catch {}
      return !1;
    }
    function TT(e) {
      if (!Nr || !e || typeof e != "object") return !1;
      try {
        Nr.call(e, Nr);
        try {
          jr.call(e, jr);
        } catch {
          return !0;
        }
        return e instanceof WeakMap;
      } catch {}
      return !1;
    }
    function _T(e) {
      if (!wh || !e || typeof e != "object") return !1;
      try {
        return wh.call(e), !0;
      } catch {}
      return !1;
    }
    function OT(e) {
      if (!Wn || !e || typeof e != "object") return !1;
      try {
        Wn.call(e);
        try {
          Gn.call(e);
        } catch {
          return !0;
        }
        return e instanceof Set;
      } catch {}
      return !1;
    }
    function RT(e) {
      if (!jr || !e || typeof e != "object") return !1;
      try {
        jr.call(e, jr);
        try {
          Nr.call(e, Nr);
        } catch {
          return !0;
        }
        return e instanceof WeakSet;
      } catch {}
      return !1;
    }
    function PT(e) {
      return !e || typeof e != "object"
        ? !1
        : typeof HTMLElement < "u" && e instanceof HTMLElement
        ? !0
        : typeof e.nodeName == "string" && typeof e.getAttribute == "function";
    }
    function Uh(e, t) {
      if (e.length > t.maxStringLength) {
        var r = e.length - t.maxStringLength,
          n = "... " + r + " more character" + (r > 1 ? "s" : "");
        return Uh(hu.call(e, 0, t.maxStringLength), t) + n;
      }
      var a = ct.call(ct.call(e, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, IT);
      return qh(a, "single", t);
    }
    function IT(e) {
      var t = e.charCodeAt(0),
        r = { 8: "b", 9: "t", 10: "n", 12: "f", 13: "r" }[t];
      return r ? "\\" + r : "\\x" + (t < 16 ? "0" : "") + yT.call(t.toString(16));
    }
    function kr(e) {
      return "Object(" + e + ")";
    }
    function uu(e) {
      return e + " { ? }";
    }
    function Nh(e, t, r, n) {
      var a = n ? pu(r, n) : We.call(r, ", ");
      return e + " (" + t + ") {" + a + "}";
    }
    function kT(e) {
      for (var t = 0; t < e.length; t++)
        if (
          $h(
            e[t],
            `
`
          ) >= 0
        )
          return !1;
      return !0;
    }
    function NT(e, t) {
      var r;
      if (e.indent === "	") r = "	";
      else if (typeof e.indent == "number" && e.indent > 0) r = We.call(Array(e.indent + 1), " ");
      else return null;
      return { base: r, prev: We.call(Array(t + 1), r) };
    }
    function pu(e, t) {
      if (e.length === 0) return "";
      var r =
        `
` +
        t.prev +
        t.base;
      return (
        r +
        We.call(e, "," + r) +
        `
` +
        t.prev
      );
    }
    function Hn(e, t) {
      var r = cu(e),
        n = [];
      if (r) {
        n.length = e.length;
        for (var a = 0; a < e.length; a++) n[a] = lt(e, a) ? t(e[a], e) : "";
      }
      var o = typeof ou == "function" ? ou(e) : [],
        u;
      if (Xt) {
        u = {};
        for (var i = 0; i < o.length; i++) u["$" + o[i]] = o[i];
      }
      for (var s in e)
        lt(e, s) &&
          ((r && String(Number(s)) === s && s < e.length) ||
            (Xt && u["$" + s] instanceof Symbol) ||
            (jh.call(/[^\w$]/, s) ? n.push(t(s, e) + ": " + t(e[s], e)) : n.push(s + ": " + t(e[s], e))));
      if (typeof ou == "function")
        for (var d = 0; d < o.length; d++) Mh.call(e, o[d]) && n.push("[" + t(o[d]) + "]: " + t(e[o[d]], e));
      return n;
    }
  });
  var Wh = F((XX, Gh) => {
    "use strict";
    l();
    c();
    p();
    var gu = Un(),
      Jt = Ch(),
      jT = Hh(),
      MT = gu("%TypeError%"),
      Vn = gu("%WeakMap%", !0),
      Kn = gu("%Map%", !0),
      qT = Jt("WeakMap.prototype.get", !0),
      LT = Jt("WeakMap.prototype.set", !0),
      $T = Jt("WeakMap.prototype.has", !0),
      UT = Jt("Map.prototype.get", !0),
      zT = Jt("Map.prototype.set", !0),
      HT = Jt("Map.prototype.has", !0),
      mu = function (e, t) {
        for (var r = e, n; (n = r.next) !== null; r = n)
          if (n.key === t) return (r.next = n.next), (n.next = e.next), (e.next = n), n;
      },
      GT = function (e, t) {
        var r = mu(e, t);
        return r && r.value;
      },
      WT = function (e, t, r) {
        var n = mu(e, t);
        n ? (n.value = r) : (e.next = { key: t, next: e.next, value: r });
      },
      VT = function (e, t) {
        return !!mu(e, t);
      };
    Gh.exports = function () {
      var t,
        r,
        n,
        a = {
          assert: function (o) {
            if (!a.has(o)) throw new MT("Side channel does not contain " + jT(o));
          },
          get: function (o) {
            if (Vn && o && (typeof o == "object" || typeof o == "function")) {
              if (t) return qT(t, o);
            } else if (Kn) {
              if (r) return UT(r, o);
            } else if (n) return GT(n, o);
          },
          has: function (o) {
            if (Vn && o && (typeof o == "object" || typeof o == "function")) {
              if (t) return $T(t, o);
            } else if (Kn) {
              if (r) return HT(r, o);
            } else if (n) return VT(n, o);
            return !1;
          },
          set: function (o, u) {
            Vn && o && (typeof o == "object" || typeof o == "function")
              ? (t || (t = new Vn()), LT(t, o, u))
              : Kn
              ? (r || (r = new Kn()), zT(r, o, u))
              : (n || (n = { key: {}, next: null }), WT(n, o, u));
          },
        };
      return a;
    };
  });
  var Yn = F((eJ, Vh) => {
    "use strict";
    l();
    c();
    p();
    var KT = String.prototype.replace,
      YT = /%20/g,
      yu = { RFC1738: "RFC1738", RFC3986: "RFC3986" };
    Vh.exports = {
      default: yu.RFC3986,
      formatters: {
        RFC1738: function (e) {
          return KT.call(e, YT, "+");
        },
        RFC3986: function (e) {
          return String(e);
        },
      },
      RFC1738: yu.RFC1738,
      RFC3986: yu.RFC3986,
    };
  });
  var Au = F((aJ, Yh) => {
    "use strict";
    l();
    c();
    p();
    var XT = Yn(),
      bu = Object.prototype.hasOwnProperty,
      xt = Array.isArray,
      Ve = (function () {
        for (var e = [], t = 0; t < 256; ++t) e.push("%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase());
        return e;
      })(),
      JT = function (t) {
        for (; t.length > 1; ) {
          var r = t.pop(),
            n = r.obj[r.prop];
          if (xt(n)) {
            for (var a = [], o = 0; o < n.length; ++o) typeof n[o] < "u" && a.push(n[o]);
            r.obj[r.prop] = a;
          }
        }
      },
      Kh = function (t, r) {
        for (var n = r && r.plainObjects ? Object.create(null) : {}, a = 0; a < t.length; ++a)
          typeof t[a] < "u" && (n[a] = t[a]);
        return n;
      },
      QT = function e(t, r, n) {
        if (!r) return t;
        if (typeof r != "object") {
          if (xt(t)) t.push(r);
          else if (t && typeof t == "object")
            ((n && (n.plainObjects || n.allowPrototypes)) || !bu.call(Object.prototype, r)) && (t[r] = !0);
          else return [t, r];
          return t;
        }
        if (!t || typeof t != "object") return [t].concat(r);
        var a = t;
        return (
          xt(t) && !xt(r) && (a = Kh(t, n)),
          xt(t) && xt(r)
            ? (r.forEach(function (o, u) {
                if (bu.call(t, u)) {
                  var i = t[u];
                  i && typeof i == "object" && o && typeof o == "object" ? (t[u] = e(i, o, n)) : t.push(o);
                } else t[u] = o;
              }),
              t)
            : Object.keys(r).reduce(function (o, u) {
                var i = r[u];
                return bu.call(o, u) ? (o[u] = e(o[u], i, n)) : (o[u] = i), o;
              }, a)
        );
      },
      ZT = function (t, r) {
        return Object.keys(r).reduce(function (n, a) {
          return (n[a] = r[a]), n;
        }, t);
      },
      e8 = function (e, t, r) {
        var n = e.replace(/\+/g, " ");
        if (r === "iso-8859-1") return n.replace(/%[0-9a-f]{2}/gi, unescape);
        try {
          return decodeURIComponent(n);
        } catch {
          return n;
        }
      },
      t8 = function (t, r, n, a, o) {
        if (t.length === 0) return t;
        var u = t;
        if (
          (typeof t == "symbol" ? (u = Symbol.prototype.toString.call(t)) : typeof t != "string" && (u = String(t)),
          n === "iso-8859-1")
        )
          return escape(u).replace(/%u[0-9a-f]{4}/gi, function (y) {
            return "%26%23" + parseInt(y.slice(2), 16) + "%3B";
          });
        for (var i = "", s = 0; s < u.length; ++s) {
          var d = u.charCodeAt(s);
          if (
            d === 45 ||
            d === 46 ||
            d === 95 ||
            d === 126 ||
            (d >= 48 && d <= 57) ||
            (d >= 65 && d <= 90) ||
            (d >= 97 && d <= 122) ||
            (o === XT.RFC1738 && (d === 40 || d === 41))
          ) {
            i += u.charAt(s);
            continue;
          }
          if (d < 128) {
            i = i + Ve[d];
            continue;
          }
          if (d < 2048) {
            i = i + (Ve[192 | (d >> 6)] + Ve[128 | (d & 63)]);
            continue;
          }
          if (d < 55296 || d >= 57344) {
            i = i + (Ve[224 | (d >> 12)] + Ve[128 | ((d >> 6) & 63)] + Ve[128 | (d & 63)]);
            continue;
          }
          (s += 1),
            (d = 65536 + (((d & 1023) << 10) | (u.charCodeAt(s) & 1023))),
            (i += Ve[240 | (d >> 18)] + Ve[128 | ((d >> 12) & 63)] + Ve[128 | ((d >> 6) & 63)] + Ve[128 | (d & 63)]);
        }
        return i;
      },
      r8 = function (t) {
        for (var r = [{ obj: { o: t }, prop: "o" }], n = [], a = 0; a < r.length; ++a)
          for (var o = r[a], u = o.obj[o.prop], i = Object.keys(u), s = 0; s < i.length; ++s) {
            var d = i[s],
              y = u[d];
            typeof y == "object" && y !== null && n.indexOf(y) === -1 && (r.push({ obj: u, prop: d }), n.push(y));
          }
        return JT(r), t;
      },
      n8 = function (t) {
        return Object.prototype.toString.call(t) === "[object RegExp]";
      },
      a8 = function (t) {
        return !t || typeof t != "object"
          ? !1
          : !!(t.constructor && t.constructor.isBuffer && t.constructor.isBuffer(t));
      },
      o8 = function (t, r) {
        return [].concat(t, r);
      },
      u8 = function (t, r) {
        if (xt(t)) {
          for (var n = [], a = 0; a < t.length; a += 1) n.push(r(t[a]));
          return n;
        }
        return r(t);
      };
    Yh.exports = {
      arrayToObject: Kh,
      assign: ZT,
      combine: o8,
      compact: r8,
      decode: e8,
      encode: t8,
      isBuffer: a8,
      isRegExp: n8,
      maybeMap: u8,
      merge: QT,
    };
  });
  var tg = F((sJ, eg) => {
    "use strict";
    l();
    c();
    p();
    var Qh = Wh(),
      Xn = Au(),
      Mr = Yn(),
      i8 = Object.prototype.hasOwnProperty,
      Xh = {
        brackets: function (t) {
          return t + "[]";
        },
        comma: "comma",
        indices: function (t, r) {
          return t + "[" + r + "]";
        },
        repeat: function (t) {
          return t;
        },
      },
      tt = Array.isArray,
      s8 = Array.prototype.push,
      Zh = function (e, t) {
        s8.apply(e, tt(t) ? t : [t]);
      },
      l8 = Date.prototype.toISOString,
      Jh = Mr.default,
      we = {
        addQueryPrefix: !1,
        allowDots: !1,
        charset: "utf-8",
        charsetSentinel: !1,
        delimiter: "&",
        encode: !0,
        encoder: Xn.encode,
        encodeValuesOnly: !1,
        format: Jh,
        formatter: Mr.formatters[Jh],
        indices: !1,
        serializeDate: function (t) {
          return l8.call(t);
        },
        skipNulls: !1,
        strictNullHandling: !1,
      },
      c8 = function (t) {
        return (
          typeof t == "string" ||
          typeof t == "number" ||
          typeof t == "boolean" ||
          typeof t == "symbol" ||
          typeof t == "bigint"
        );
      },
      Eu = {},
      p8 = function e(t, r, n, a, o, u, i, s, d, y, A, g, h, E, b, x) {
        for (var S = t, P = x, N = 0, $ = !1; (P = P.get(Eu)) !== void 0 && !$; ) {
          var w = P.get(t);
          if (((N += 1), typeof w < "u")) {
            if (w === N) throw new RangeError("Cyclic object value");
            $ = !0;
          }
          typeof P.get(Eu) > "u" && (N = 0);
        }
        if (
          (typeof s == "function"
            ? (S = s(r, S))
            : S instanceof Date
            ? (S = A(S))
            : n === "comma" &&
              tt(S) &&
              (S = Xn.maybeMap(S, function (M) {
                return M instanceof Date ? A(M) : M;
              })),
          S === null)
        ) {
          if (o) return i && !E ? i(r, we.encoder, b, "key", g) : r;
          S = "";
        }
        if (c8(S) || Xn.isBuffer(S)) {
          if (i) {
            var j = E ? r : i(r, we.encoder, b, "key", g);
            return [h(j) + "=" + h(i(S, we.encoder, b, "value", g))];
          }
          return [h(r) + "=" + h(String(S))];
        }
        var I = [];
        if (typeof S > "u") return I;
        var U;
        if (n === "comma" && tt(S))
          E && i && (S = Xn.maybeMap(S, i)), (U = [{ value: S.length > 0 ? S.join(",") || null : void 0 }]);
        else if (tt(s)) U = s;
        else {
          var V = Object.keys(S);
          U = d ? V.sort(d) : V;
        }
        for (var z = a && tt(S) && S.length === 1 ? r + "[]" : r, ie = 0; ie < U.length; ++ie) {
          var Z = U[ie],
            X = typeof Z == "object" && typeof Z.value < "u" ? Z.value : S[Z];
          if (!(u && X === null)) {
            var O = tt(S) ? (typeof n == "function" ? n(z, Z) : z) : z + (y ? "." + Z : "[" + Z + "]");
            x.set(t, N);
            var T = Qh();
            T.set(Eu, x), Zh(I, e(X, O, n, a, o, u, n === "comma" && E && tt(S) ? null : i, s, d, y, A, g, h, E, b, T));
          }
        }
        return I;
      },
      d8 = function (t) {
        if (!t) return we;
        if (t.encoder !== null && typeof t.encoder < "u" && typeof t.encoder != "function")
          throw new TypeError("Encoder has to be a function.");
        var r = t.charset || we.charset;
        if (typeof t.charset < "u" && t.charset !== "utf-8" && t.charset !== "iso-8859-1")
          throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
        var n = Mr.default;
        if (typeof t.format < "u") {
          if (!i8.call(Mr.formatters, t.format)) throw new TypeError("Unknown format option provided.");
          n = t.format;
        }
        var a = Mr.formatters[n],
          o = we.filter;
        return (
          (typeof t.filter == "function" || tt(t.filter)) && (o = t.filter),
          {
            addQueryPrefix: typeof t.addQueryPrefix == "boolean" ? t.addQueryPrefix : we.addQueryPrefix,
            allowDots: typeof t.allowDots > "u" ? we.allowDots : !!t.allowDots,
            charset: r,
            charsetSentinel: typeof t.charsetSentinel == "boolean" ? t.charsetSentinel : we.charsetSentinel,
            delimiter: typeof t.delimiter > "u" ? we.delimiter : t.delimiter,
            encode: typeof t.encode == "boolean" ? t.encode : we.encode,
            encoder: typeof t.encoder == "function" ? t.encoder : we.encoder,
            encodeValuesOnly: typeof t.encodeValuesOnly == "boolean" ? t.encodeValuesOnly : we.encodeValuesOnly,
            filter: o,
            format: n,
            formatter: a,
            serializeDate: typeof t.serializeDate == "function" ? t.serializeDate : we.serializeDate,
            skipNulls: typeof t.skipNulls == "boolean" ? t.skipNulls : we.skipNulls,
            sort: typeof t.sort == "function" ? t.sort : null,
            strictNullHandling: typeof t.strictNullHandling == "boolean" ? t.strictNullHandling : we.strictNullHandling,
          }
        );
      };
    eg.exports = function (e, t) {
      var r = e,
        n = d8(t),
        a,
        o;
      typeof n.filter == "function" ? ((o = n.filter), (r = o("", r))) : tt(n.filter) && ((o = n.filter), (a = o));
      var u = [];
      if (typeof r != "object" || r === null) return "";
      var i;
      t && t.arrayFormat in Xh
        ? (i = t.arrayFormat)
        : t && "indices" in t
        ? (i = t.indices ? "indices" : "repeat")
        : (i = "indices");
      var s = Xh[i];
      if (t && "commaRoundTrip" in t && typeof t.commaRoundTrip != "boolean")
        throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
      var d = s === "comma" && t && t.commaRoundTrip;
      a || (a = Object.keys(r)), n.sort && a.sort(n.sort);
      for (var y = Qh(), A = 0; A < a.length; ++A) {
        var g = a[A];
        (n.skipNulls && r[g] === null) ||
          Zh(
            u,
            p8(
              r[g],
              g,
              s,
              d,
              n.strictNullHandling,
              n.skipNulls,
              n.encode ? n.encoder : null,
              n.filter,
              n.sort,
              n.allowDots,
              n.serializeDate,
              n.format,
              n.formatter,
              n.encodeValuesOnly,
              n.charset,
              y
            )
          );
      }
      var h = u.join(n.delimiter),
        E = n.addQueryPrefix === !0 ? "?" : "";
      return (
        n.charsetSentinel && (n.charset === "iso-8859-1" ? (E += "utf8=%26%2310003%3B&") : (E += "utf8=%E2%9C%93&")),
        h.length > 0 ? E + h : ""
      );
    };
  });
  var ag = F((dJ, ng) => {
    "use strict";
    l();
    c();
    p();
    var Qt = Au(),
      Du = Object.prototype.hasOwnProperty,
      f8 = Array.isArray,
      De = {
        allowDots: !1,
        allowPrototypes: !1,
        allowSparse: !1,
        arrayLimit: 20,
        charset: "utf-8",
        charsetSentinel: !1,
        comma: !1,
        decoder: Qt.decode,
        delimiter: "&",
        depth: 5,
        ignoreQueryPrefix: !1,
        interpretNumericEntities: !1,
        parameterLimit: 1e3,
        parseArrays: !0,
        plainObjects: !1,
        strictNullHandling: !1,
      },
      h8 = function (e) {
        return e.replace(/&#(\d+);/g, function (t, r) {
          return String.fromCharCode(parseInt(r, 10));
        });
      },
      rg = function (e, t) {
        return e && typeof e == "string" && t.comma && e.indexOf(",") > -1 ? e.split(",") : e;
      },
      g8 = "utf8=%26%2310003%3B",
      m8 = "utf8=%E2%9C%93",
      y8 = function (t, r) {
        var n = { __proto__: null },
          a = r.ignoreQueryPrefix ? t.replace(/^\?/, "") : t,
          o = r.parameterLimit === 1 / 0 ? void 0 : r.parameterLimit,
          u = a.split(r.delimiter, o),
          i = -1,
          s,
          d = r.charset;
        if (r.charsetSentinel)
          for (s = 0; s < u.length; ++s)
            u[s].indexOf("utf8=") === 0 &&
              (u[s] === m8 ? (d = "utf-8") : u[s] === g8 && (d = "iso-8859-1"), (i = s), (s = u.length));
        for (s = 0; s < u.length; ++s)
          if (s !== i) {
            var y = u[s],
              A = y.indexOf("]="),
              g = A === -1 ? y.indexOf("=") : A + 1,
              h,
              E;
            g === -1
              ? ((h = r.decoder(y, De.decoder, d, "key")), (E = r.strictNullHandling ? null : ""))
              : ((h = r.decoder(y.slice(0, g), De.decoder, d, "key")),
                (E = Qt.maybeMap(rg(y.slice(g + 1), r), function (b) {
                  return r.decoder(b, De.decoder, d, "value");
                }))),
              E && r.interpretNumericEntities && d === "iso-8859-1" && (E = h8(E)),
              y.indexOf("[]=") > -1 && (E = f8(E) ? [E] : E),
              Du.call(n, h) ? (n[h] = Qt.combine(n[h], E)) : (n[h] = E);
          }
        return n;
      },
      b8 = function (e, t, r, n) {
        for (var a = n ? t : rg(t, r), o = e.length - 1; o >= 0; --o) {
          var u,
            i = e[o];
          if (i === "[]" && r.parseArrays) u = [].concat(a);
          else {
            u = r.plainObjects ? Object.create(null) : {};
            var s = i.charAt(0) === "[" && i.charAt(i.length - 1) === "]" ? i.slice(1, -1) : i,
              d = parseInt(s, 10);
            !r.parseArrays && s === ""
              ? (u = { 0: a })
              : !isNaN(d) && i !== s && String(d) === s && d >= 0 && r.parseArrays && d <= r.arrayLimit
              ? ((u = []), (u[d] = a))
              : s !== "__proto__" && (u[s] = a);
          }
          a = u;
        }
        return a;
      },
      A8 = function (t, r, n, a) {
        if (t) {
          var o = n.allowDots ? t.replace(/\.([^.[]+)/g, "[$1]") : t,
            u = /(\[[^[\]]*])/,
            i = /(\[[^[\]]*])/g,
            s = n.depth > 0 && u.exec(o),
            d = s ? o.slice(0, s.index) : o,
            y = [];
          if (d) {
            if (!n.plainObjects && Du.call(Object.prototype, d) && !n.allowPrototypes) return;
            y.push(d);
          }
          for (var A = 0; n.depth > 0 && (s = i.exec(o)) !== null && A < n.depth; ) {
            if (((A += 1), !n.plainObjects && Du.call(Object.prototype, s[1].slice(1, -1)) && !n.allowPrototypes))
              return;
            y.push(s[1]);
          }
          return s && y.push("[" + o.slice(s.index) + "]"), b8(y, r, n, a);
        }
      },
      E8 = function (t) {
        if (!t) return De;
        if (t.decoder !== null && t.decoder !== void 0 && typeof t.decoder != "function")
          throw new TypeError("Decoder has to be a function.");
        if (typeof t.charset < "u" && t.charset !== "utf-8" && t.charset !== "iso-8859-1")
          throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
        var r = typeof t.charset > "u" ? De.charset : t.charset;
        return {
          allowDots: typeof t.allowDots > "u" ? De.allowDots : !!t.allowDots,
          allowPrototypes: typeof t.allowPrototypes == "boolean" ? t.allowPrototypes : De.allowPrototypes,
          allowSparse: typeof t.allowSparse == "boolean" ? t.allowSparse : De.allowSparse,
          arrayLimit: typeof t.arrayLimit == "number" ? t.arrayLimit : De.arrayLimit,
          charset: r,
          charsetSentinel: typeof t.charsetSentinel == "boolean" ? t.charsetSentinel : De.charsetSentinel,
          comma: typeof t.comma == "boolean" ? t.comma : De.comma,
          decoder: typeof t.decoder == "function" ? t.decoder : De.decoder,
          delimiter: typeof t.delimiter == "string" || Qt.isRegExp(t.delimiter) ? t.delimiter : De.delimiter,
          depth: typeof t.depth == "number" || t.depth === !1 ? +t.depth : De.depth,
          ignoreQueryPrefix: t.ignoreQueryPrefix === !0,
          interpretNumericEntities:
            typeof t.interpretNumericEntities == "boolean" ? t.interpretNumericEntities : De.interpretNumericEntities,
          parameterLimit: typeof t.parameterLimit == "number" ? t.parameterLimit : De.parameterLimit,
          parseArrays: t.parseArrays !== !1,
          plainObjects: typeof t.plainObjects == "boolean" ? t.plainObjects : De.plainObjects,
          strictNullHandling: typeof t.strictNullHandling == "boolean" ? t.strictNullHandling : De.strictNullHandling,
        };
      };
    ng.exports = function (e, t) {
      var r = E8(t);
      if (e === "" || e === null || typeof e > "u") return r.plainObjects ? Object.create(null) : {};
      for (
        var n = typeof e == "string" ? y8(e, r) : e,
          a = r.plainObjects ? Object.create(null) : {},
          o = Object.keys(n),
          u = 0;
        u < o.length;
        ++u
      ) {
        var i = o[u],
          s = A8(i, n[i], r, typeof e == "string");
        a = Qt.merge(a, s, r);
      }
      return r.allowSparse === !0 ? a : Qt.compact(a);
    };
  });
  var Jn = F((mJ, og) => {
    "use strict";
    l();
    c();
    p();
    var D8 = tg(),
      v8 = ag(),
      C8 = Yn();
    og.exports = { formats: C8, parse: v8, stringify: D8 };
  });
  var Rg = F((DZ, Og) => {
    l();
    c();
    p();
    (function () {
      "use strict";
      function e(u) {
        if (u == null) return !1;
        switch (u.type) {
          case "ArrayExpression":
          case "AssignmentExpression":
          case "BinaryExpression":
          case "CallExpression":
          case "ConditionalExpression":
          case "FunctionExpression":
          case "Identifier":
          case "Literal":
          case "LogicalExpression":
          case "MemberExpression":
          case "NewExpression":
          case "ObjectExpression":
          case "SequenceExpression":
          case "ThisExpression":
          case "UnaryExpression":
          case "UpdateExpression":
            return !0;
        }
        return !1;
      }
      function t(u) {
        if (u == null) return !1;
        switch (u.type) {
          case "DoWhileStatement":
          case "ForInStatement":
          case "ForStatement":
          case "WhileStatement":
            return !0;
        }
        return !1;
      }
      function r(u) {
        if (u == null) return !1;
        switch (u.type) {
          case "BlockStatement":
          case "BreakStatement":
          case "ContinueStatement":
          case "DebuggerStatement":
          case "DoWhileStatement":
          case "EmptyStatement":
          case "ExpressionStatement":
          case "ForInStatement":
          case "ForStatement":
          case "IfStatement":
          case "LabeledStatement":
          case "ReturnStatement":
          case "SwitchStatement":
          case "ThrowStatement":
          case "TryStatement":
          case "VariableDeclaration":
          case "WhileStatement":
          case "WithStatement":
            return !0;
        }
        return !1;
      }
      function n(u) {
        return r(u) || (u != null && u.type === "FunctionDeclaration");
      }
      function a(u) {
        switch (u.type) {
          case "IfStatement":
            return u.alternate != null ? u.alternate : u.consequent;
          case "LabeledStatement":
          case "ForStatement":
          case "ForInStatement":
          case "WhileStatement":
          case "WithStatement":
            return u.body;
        }
        return null;
      }
      function o(u) {
        var i;
        if (u.type !== "IfStatement" || u.alternate == null) return !1;
        i = u.consequent;
        do {
          if (i.type === "IfStatement" && i.alternate == null) return !0;
          i = a(i);
        } while (i);
        return !1;
      }
      Og.exports = {
        isExpression: e,
        isStatement: r,
        isIterationStatement: t,
        isSourceElement: n,
        isProblematicIfStatement: o,
        trailingStatement: a,
      };
    })();
  });
  var _u = F((FZ, Pg) => {
    l();
    c();
    p();
    (function () {
      "use strict";
      var e, t, r, n, a, o;
      (t = {
        NonAsciiIdentifierStart:
          /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
        NonAsciiIdentifierPart:
          /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
      }),
        (e = {
          NonAsciiIdentifierStart:
            /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]/,
          NonAsciiIdentifierPart:
            /[\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/,
        });
      function u(x) {
        return 48 <= x && x <= 57;
      }
      function i(x) {
        return (48 <= x && x <= 57) || (97 <= x && x <= 102) || (65 <= x && x <= 70);
      }
      function s(x) {
        return x >= 48 && x <= 55;
      }
      r = [5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8239, 8287, 12288, 65279];
      function d(x) {
        return x === 32 || x === 9 || x === 11 || x === 12 || x === 160 || (x >= 5760 && r.indexOf(x) >= 0);
      }
      function y(x) {
        return x === 10 || x === 13 || x === 8232 || x === 8233;
      }
      function A(x) {
        if (x <= 65535) return String.fromCharCode(x);
        var S = String.fromCharCode(Math.floor((x - 65536) / 1024) + 55296),
          P = String.fromCharCode(((x - 65536) % 1024) + 56320);
        return S + P;
      }
      for (n = new Array(128), o = 0; o < 128; ++o)
        n[o] = (o >= 97 && o <= 122) || (o >= 65 && o <= 90) || o === 36 || o === 95;
      for (a = new Array(128), o = 0; o < 128; ++o)
        a[o] = (o >= 97 && o <= 122) || (o >= 65 && o <= 90) || (o >= 48 && o <= 57) || o === 36 || o === 95;
      function g(x) {
        return x < 128 ? n[x] : t.NonAsciiIdentifierStart.test(A(x));
      }
      function h(x) {
        return x < 128 ? a[x] : t.NonAsciiIdentifierPart.test(A(x));
      }
      function E(x) {
        return x < 128 ? n[x] : e.NonAsciiIdentifierStart.test(A(x));
      }
      function b(x) {
        return x < 128 ? a[x] : e.NonAsciiIdentifierPart.test(A(x));
      }
      Pg.exports = {
        isDecimalDigit: u,
        isHexDigit: i,
        isOctalDigit: s,
        isWhiteSpace: d,
        isLineTerminator: y,
        isIdentifierStartES5: g,
        isIdentifierPartES5: h,
        isIdentifierStartES6: E,
        isIdentifierPartES6: b,
      };
    })();
  });
  var kg = F((TZ, Ig) => {
    l();
    c();
    p();
    (function () {
      "use strict";
      var e = _u();
      function t(g) {
        switch (g) {
          case "implements":
          case "interface":
          case "package":
          case "private":
          case "protected":
          case "public":
          case "static":
          case "let":
            return !0;
          default:
            return !1;
        }
      }
      function r(g, h) {
        return !h && g === "yield" ? !1 : n(g, h);
      }
      function n(g, h) {
        if (h && t(g)) return !0;
        switch (g.length) {
          case 2:
            return g === "if" || g === "in" || g === "do";
          case 3:
            return g === "var" || g === "for" || g === "new" || g === "try";
          case 4:
            return g === "this" || g === "else" || g === "case" || g === "void" || g === "with" || g === "enum";
          case 5:
            return (
              g === "while" ||
              g === "break" ||
              g === "catch" ||
              g === "throw" ||
              g === "const" ||
              g === "yield" ||
              g === "class" ||
              g === "super"
            );
          case 6:
            return (
              g === "return" || g === "typeof" || g === "delete" || g === "switch" || g === "export" || g === "import"
            );
          case 7:
            return g === "default" || g === "finally" || g === "extends";
          case 8:
            return g === "function" || g === "continue" || g === "debugger";
          case 10:
            return g === "instanceof";
          default:
            return !1;
        }
      }
      function a(g, h) {
        return g === "null" || g === "true" || g === "false" || r(g, h);
      }
      function o(g, h) {
        return g === "null" || g === "true" || g === "false" || n(g, h);
      }
      function u(g) {
        return g === "eval" || g === "arguments";
      }
      function i(g) {
        var h, E, b;
        if (g.length === 0 || ((b = g.charCodeAt(0)), !e.isIdentifierStartES5(b))) return !1;
        for (h = 1, E = g.length; h < E; ++h) if (((b = g.charCodeAt(h)), !e.isIdentifierPartES5(b))) return !1;
        return !0;
      }
      function s(g, h) {
        return (g - 55296) * 1024 + (h - 56320) + 65536;
      }
      function d(g) {
        var h, E, b, x, S;
        if (g.length === 0) return !1;
        for (S = e.isIdentifierStartES6, h = 0, E = g.length; h < E; ++h) {
          if (((b = g.charCodeAt(h)), 55296 <= b && b <= 56319)) {
            if ((++h, h >= E || ((x = g.charCodeAt(h)), !(56320 <= x && x <= 57343)))) return !1;
            b = s(b, x);
          }
          if (!S(b)) return !1;
          S = e.isIdentifierPartES6;
        }
        return !0;
      }
      function y(g, h) {
        return i(g) && !a(g, h);
      }
      function A(g, h) {
        return d(g) && !o(g, h);
      }
      Ig.exports = {
        isKeywordES5: r,
        isKeywordES6: n,
        isReservedWordES5: a,
        isReservedWordES6: o,
        isRestrictedWord: u,
        isIdentifierNameES5: i,
        isIdentifierNameES6: d,
        isIdentifierES5: y,
        isIdentifierES6: A,
      };
    })();
  });
  var Ou = F((ta) => {
    l();
    c();
    p();
    (function () {
      "use strict";
      (ta.ast = Rg()), (ta.code = _u()), (ta.keyword = kg());
    })();
  });
  var Ng = F((jZ, OO) => {
    OO.exports = {
      name: "doctrine",
      description: "JSDoc parser",
      homepage: "https://github.com/eslint/doctrine",
      main: "lib/doctrine.js",
      version: "3.0.0",
      engines: { node: ">=6.0.0" },
      directories: { lib: "./lib" },
      files: ["lib"],
      maintainers: [
        { name: "Nicholas C. Zakas", email: "nicholas+npm@nczconsulting.com", web: "https://www.nczonline.net" },
        { name: "Yusuke Suzuki", email: "utatane.tea@gmail.com", web: "https://github.com/Constellation" },
      ],
      repository: "eslint/doctrine",
      devDependencies: {
        coveralls: "^3.0.1",
        dateformat: "^1.0.11",
        eslint: "^1.10.3",
        "eslint-release": "^1.0.0",
        linefix: "^0.1.1",
        mocha: "^3.4.2",
        "npm-license": "^0.3.1",
        nyc: "^10.3.2",
        semver: "^5.0.3",
        shelljs: "^0.5.3",
        "shelljs-nodecli": "^0.1.1",
        should: "^5.0.1",
      },
      license: "Apache-2.0",
      scripts: {
        pretest: "npm run lint",
        test: "nyc mocha",
        coveralls: "nyc report --reporter=text-lcov | coveralls",
        lint: "eslint lib/",
        "generate-release": "eslint-generate-release",
        "generate-alpharelease": "eslint-generate-prerelease alpha",
        "generate-betarelease": "eslint-generate-prerelease beta",
        "generate-rcrelease": "eslint-generate-prerelease rc",
        "publish-release": "eslint-publish-release",
      },
      dependencies: { esutils: "^2.0.2" },
    };
  });
  var Mg = F((MZ, jg) => {
    l();
    c();
    p();
    function RO(e, t) {
      if (!e) throw new Error(t || "unknown assertion error");
    }
    jg.exports = RO;
  });
  var Ru = F(($r) => {
    l();
    c();
    p();
    (function () {
      "use strict";
      var e;
      (e = Ng().version), ($r.VERSION = e);
      function t(n) {
        (this.name = "DoctrineError"), (this.message = n);
      }
      (t.prototype = (function () {
        var n = function () {};
        return (n.prototype = Error.prototype), new n();
      })()),
        (t.prototype.constructor = t),
        ($r.DoctrineError = t);
      function r(n) {
        throw new t(n);
      }
      ($r.throwError = r), ($r.assert = Mg());
    })();
  });
  var qg = F((Ur) => {
    l();
    c();
    p();
    (function () {
      "use strict";
      var e, t, r, n, a, o, u, i, s, d, y, A;
      (s = Ou()),
        (d = Ru()),
        (e = {
          NullableLiteral: "NullableLiteral",
          AllLiteral: "AllLiteral",
          NullLiteral: "NullLiteral",
          UndefinedLiteral: "UndefinedLiteral",
          VoidLiteral: "VoidLiteral",
          UnionType: "UnionType",
          ArrayType: "ArrayType",
          RecordType: "RecordType",
          FieldType: "FieldType",
          FunctionType: "FunctionType",
          ParameterType: "ParameterType",
          RestType: "RestType",
          NonNullableType: "NonNullableType",
          OptionalType: "OptionalType",
          NullableType: "NullableType",
          NameExpression: "NameExpression",
          TypeApplication: "TypeApplication",
          StringLiteralType: "StringLiteralType",
          NumericLiteralType: "NumericLiteralType",
          BooleanLiteralType: "BooleanLiteralType",
        }),
        (t = {
          ILLEGAL: 0,
          DOT_LT: 1,
          REST: 2,
          LT: 3,
          GT: 4,
          LPAREN: 5,
          RPAREN: 6,
          LBRACE: 7,
          RBRACE: 8,
          LBRACK: 9,
          RBRACK: 10,
          COMMA: 11,
          COLON: 12,
          STAR: 13,
          PIPE: 14,
          QUESTION: 15,
          BANG: 16,
          EQUAL: 17,
          NAME: 18,
          STRING: 19,
          NUMBER: 20,
          EOF: 21,
        });
      function g(B) {
        return (
          "><(){}[],:*|?!=".indexOf(String.fromCharCode(B)) === -1 &&
          !s.code.isWhiteSpace(B) &&
          !s.code.isLineTerminator(B)
        );
      }
      function h(B, R, k, _) {
        (this._previous = B), (this._index = R), (this._token = k), (this._value = _);
      }
      (h.prototype.restore = function () {
        (o = this._previous), (a = this._index), (u = this._token), (i = this._value);
      }),
        (h.save = function () {
          return new h(o, a, u, i);
        });
      function E(B, R) {
        return A && (B.range = [R[0] + y, R[1] + y]), B;
      }
      function b() {
        var B = r.charAt(a);
        return (a += 1), B;
      }
      function x(B) {
        var R,
          k,
          _,
          L = 0;
        for (k = B === "u" ? 4 : 2, R = 0; R < k; ++R)
          if (a < n && s.code.isHexDigit(r.charCodeAt(a)))
            (_ = b()), (L = L * 16 + "0123456789abcdef".indexOf(_.toLowerCase()));
          else return "";
        return String.fromCharCode(L);
      }
      function S() {
        var B = "",
          R,
          k,
          _,
          L,
          H;
        for (R = r.charAt(a), ++a; a < n; )
          if (((k = b()), k === R)) {
            R = "";
            break;
          } else if (k === "\\")
            if (((k = b()), s.code.isLineTerminator(k.charCodeAt(0)))) k === "\r" && r.charCodeAt(a) === 10 && ++a;
            else
              switch (k) {
                case "n":
                  B += `
`;
                  break;
                case "r":
                  B += "\r";
                  break;
                case "t":
                  B += "	";
                  break;
                case "u":
                case "x":
                  (H = a), (L = x(k)), L ? (B += L) : ((a = H), (B += k));
                  break;
                case "b":
                  B += "\b";
                  break;
                case "f":
                  B += "\f";
                  break;
                case "v":
                  B += "\v";
                  break;
                default:
                  s.code.isOctalDigit(k.charCodeAt(0))
                    ? ((_ = "01234567".indexOf(k)),
                      a < n &&
                        s.code.isOctalDigit(r.charCodeAt(a)) &&
                        ((_ = _ * 8 + "01234567".indexOf(b())),
                        "0123".indexOf(k) >= 0 &&
                          a < n &&
                          s.code.isOctalDigit(r.charCodeAt(a)) &&
                          (_ = _ * 8 + "01234567".indexOf(b()))),
                      (B += String.fromCharCode(_)))
                    : (B += k);
                  break;
              }
          else {
            if (s.code.isLineTerminator(k.charCodeAt(0))) break;
            B += k;
          }
        return R !== "" && d.throwError("unexpected quote"), (i = B), t.STRING;
      }
      function P() {
        var B, R;
        if (((B = ""), (R = r.charCodeAt(a)), R !== 46)) {
          if (((B = b()), (R = r.charCodeAt(a)), B === "0")) {
            if (R === 120 || R === 88) {
              for (B += b(); a < n && ((R = r.charCodeAt(a)), !!s.code.isHexDigit(R)); ) B += b();
              return (
                B.length <= 2 && d.throwError("unexpected token"),
                a < n && ((R = r.charCodeAt(a)), s.code.isIdentifierStartES5(R) && d.throwError("unexpected token")),
                (i = parseInt(B, 16)),
                t.NUMBER
              );
            }
            if (s.code.isOctalDigit(R)) {
              for (B += b(); a < n && ((R = r.charCodeAt(a)), !!s.code.isOctalDigit(R)); ) B += b();
              return (
                a < n &&
                  ((R = r.charCodeAt(a)),
                  (s.code.isIdentifierStartES5(R) || s.code.isDecimalDigit(R)) && d.throwError("unexpected token")),
                (i = parseInt(B, 8)),
                t.NUMBER
              );
            }
            s.code.isDecimalDigit(R) && d.throwError("unexpected token");
          }
          for (; a < n && ((R = r.charCodeAt(a)), !!s.code.isDecimalDigit(R)); ) B += b();
        }
        if (R === 46) for (B += b(); a < n && ((R = r.charCodeAt(a)), !!s.code.isDecimalDigit(R)); ) B += b();
        if (R === 101 || R === 69)
          if (
            ((B += b()),
            (R = r.charCodeAt(a)),
            (R === 43 || R === 45) && (B += b()),
            (R = r.charCodeAt(a)),
            s.code.isDecimalDigit(R))
          )
            for (B += b(); a < n && ((R = r.charCodeAt(a)), !!s.code.isDecimalDigit(R)); ) B += b();
          else d.throwError("unexpected token");
        return (
          a < n && ((R = r.charCodeAt(a)), s.code.isIdentifierStartES5(R) && d.throwError("unexpected token")),
          (i = parseFloat(B)),
          t.NUMBER
        );
      }
      function N() {
        var B, R;
        for (i = b(); a < n && g(r.charCodeAt(a)); ) {
          if (((B = r.charCodeAt(a)), B === 46)) {
            if (a + 1 >= n) return t.ILLEGAL;
            if (((R = r.charCodeAt(a + 1)), R === 60)) break;
          }
          i += b();
        }
        return t.NAME;
      }
      function $() {
        var B;
        for (o = a; a < n && s.code.isWhiteSpace(r.charCodeAt(a)); ) b();
        if (a >= n) return (u = t.EOF), u;
        switch (((B = r.charCodeAt(a)), B)) {
          case 39:
          case 34:
            return (u = S()), u;
          case 58:
            return b(), (u = t.COLON), u;
          case 44:
            return b(), (u = t.COMMA), u;
          case 40:
            return b(), (u = t.LPAREN), u;
          case 41:
            return b(), (u = t.RPAREN), u;
          case 91:
            return b(), (u = t.LBRACK), u;
          case 93:
            return b(), (u = t.RBRACK), u;
          case 123:
            return b(), (u = t.LBRACE), u;
          case 125:
            return b(), (u = t.RBRACE), u;
          case 46:
            if (a + 1 < n) {
              if (((B = r.charCodeAt(a + 1)), B === 60)) return b(), b(), (u = t.DOT_LT), u;
              if (B === 46 && a + 2 < n && r.charCodeAt(a + 2) === 46) return b(), b(), b(), (u = t.REST), u;
              if (s.code.isDecimalDigit(B)) return (u = P()), u;
            }
            return (u = t.ILLEGAL), u;
          case 60:
            return b(), (u = t.LT), u;
          case 62:
            return b(), (u = t.GT), u;
          case 42:
            return b(), (u = t.STAR), u;
          case 124:
            return b(), (u = t.PIPE), u;
          case 63:
            return b(), (u = t.QUESTION), u;
          case 33:
            return b(), (u = t.BANG), u;
          case 61:
            return b(), (u = t.EQUAL), u;
          case 45:
            return (u = P()), u;
          default:
            return s.code.isDecimalDigit(B) ? ((u = P()), u) : (d.assert(g(B)), (u = N()), u);
        }
      }
      function w(B, R) {
        d.assert(u === B, R || "consumed token not matched"), $();
      }
      function j(B, R) {
        u !== B && d.throwError(R || "unexpected token"), $();
      }
      function I() {
        var B,
          R = a - 1;
        if ((w(t.LPAREN, "UnionType should start with ("), (B = []), u !== t.RPAREN))
          for (; B.push(K()), u !== t.RPAREN; ) j(t.PIPE);
        return w(t.RPAREN, "UnionType should end with )"), E({ type: e.UnionType, elements: B }, [R, o]);
      }
      function U() {
        var B,
          R = a - 1,
          k;
        for (w(t.LBRACK, "ArrayType should start with ["), B = []; u !== t.RBRACK; ) {
          if (u === t.REST) {
            (k = a - 3), w(t.REST), B.push(E({ type: e.RestType, expression: K() }, [k, o]));
            break;
          } else B.push(K());
          u !== t.RBRACK && j(t.COMMA);
        }
        return j(t.RBRACK), E({ type: e.ArrayType, elements: B }, [R, o]);
      }
      function V() {
        var B = i;
        if (u === t.NAME || u === t.STRING) return $(), B;
        if (u === t.NUMBER) return w(t.NUMBER), String(B);
        d.throwError("unexpected token");
      }
      function z() {
        var B,
          R = o;
        return (
          (B = V()),
          u === t.COLON
            ? (w(t.COLON), E({ type: e.FieldType, key: B, value: K() }, [R, o]))
            : E({ type: e.FieldType, key: B, value: null }, [R, o])
        );
      }
      function ie() {
        var B,
          R = a - 1,
          k;
        if ((w(t.LBRACE, "RecordType should start with {"), (B = []), u === t.COMMA)) w(t.COMMA);
        else for (; u !== t.RBRACE; ) B.push(z()), u !== t.RBRACE && j(t.COMMA);
        return (k = a), j(t.RBRACE), E({ type: e.RecordType, fields: B }, [R, k]);
      }
      function Z() {
        var B = i,
          R = a - B.length;
        return (
          j(t.NAME),
          u === t.COLON &&
            (B === "module" || B === "external" || B === "event") &&
            (w(t.COLON), (B += ":" + i), j(t.NAME)),
          E({ type: e.NameExpression, name: B }, [R, o])
        );
      }
      function X() {
        var B = [];
        for (B.push(Q()); u === t.COMMA; ) w(t.COMMA), B.push(Q());
        return B;
      }
      function O() {
        var B,
          R,
          k = a - i.length;
        return (
          (B = Z()),
          u === t.DOT_LT || u === t.LT
            ? ($(), (R = X()), j(t.GT), E({ type: e.TypeApplication, expression: B, applications: R }, [k, o]))
            : B
        );
      }
      function T() {
        return (
          w(t.COLON, "ResultType should start with :"),
          u === t.NAME && i === "void" ? (w(t.NAME), { type: e.VoidLiteral }) : K()
        );
      }
      function M() {
        for (var B = [], R = !1, k, _ = !1, L, H = a - 3, de; u !== t.RPAREN; )
          u === t.REST && (w(t.REST), (_ = !0)),
            (L = o),
            (k = K()),
            k.type === e.NameExpression &&
              u === t.COLON &&
              ((de = o - k.name.length),
              w(t.COLON),
              (k = E({ type: e.ParameterType, name: k.name, expression: K() }, [de, o]))),
            u === t.EQUAL
              ? (w(t.EQUAL), (k = E({ type: e.OptionalType, expression: k }, [L, o])), (R = !0))
              : R && d.throwError("unexpected token"),
            _ && (k = E({ type: e.RestType, expression: k }, [H, o])),
            B.push(k),
            u !== t.RPAREN && j(t.COMMA);
        return B;
      }
      function G() {
        var B,
          R,
          k,
          _,
          L,
          H = a - i.length;
        return (
          d.assert(u === t.NAME && i === "function", "FunctionType should start with 'function'"),
          w(t.NAME),
          j(t.LPAREN),
          (B = !1),
          (k = []),
          (R = null),
          u !== t.RPAREN &&
            (u === t.NAME && (i === "this" || i === "new")
              ? ((B = i === "new"), w(t.NAME), j(t.COLON), (R = O()), u === t.COMMA && (w(t.COMMA), (k = M())))
              : (k = M())),
          j(t.RPAREN),
          (_ = null),
          u === t.COLON && (_ = T()),
          (L = E({ type: e.FunctionType, params: k, result: _ }, [H, o])),
          R && ((L.this = R), B && (L.new = !0)),
          L
        );
      }
      function Y() {
        var B, R;
        switch (u) {
          case t.STAR:
            return w(t.STAR), E({ type: e.AllLiteral }, [o - 1, o]);
          case t.LPAREN:
            return I();
          case t.LBRACK:
            return U();
          case t.LBRACE:
            return ie();
          case t.NAME:
            if (((R = a - i.length), i === "null")) return w(t.NAME), E({ type: e.NullLiteral }, [R, o]);
            if (i === "undefined") return w(t.NAME), E({ type: e.UndefinedLiteral }, [R, o]);
            if (i === "true" || i === "false")
              return w(t.NAME), E({ type: e.BooleanLiteralType, value: i === "true" }, [R, o]);
            if (((B = h.save()), i === "function"))
              try {
                return G();
              } catch {
                B.restore();
              }
            return O();
          case t.STRING:
            return $(), E({ type: e.StringLiteralType, value: i }, [o - i.length - 2, o]);
          case t.NUMBER:
            return $(), E({ type: e.NumericLiteralType, value: i }, [o - String(i).length, o]);
          default:
            d.throwError("unexpected token");
        }
      }
      function K() {
        var B, R;
        return u === t.QUESTION
          ? ((R = a - 1),
            w(t.QUESTION),
            u === t.COMMA ||
            u === t.EQUAL ||
            u === t.RBRACE ||
            u === t.RPAREN ||
            u === t.PIPE ||
            u === t.EOF ||
            u === t.RBRACK ||
            u === t.GT
              ? E({ type: e.NullableLiteral }, [R, o])
              : E({ type: e.NullableType, expression: Y(), prefix: !0 }, [R, o]))
          : u === t.BANG
          ? ((R = a - 1), w(t.BANG), E({ type: e.NonNullableType, expression: Y(), prefix: !0 }, [R, o]))
          : ((R = o),
            (B = Y()),
            u === t.BANG
              ? (w(t.BANG), E({ type: e.NonNullableType, expression: B, prefix: !1 }, [R, o]))
              : u === t.QUESTION
              ? (w(t.QUESTION), E({ type: e.NullableType, expression: B, prefix: !1 }, [R, o]))
              : u === t.LBRACK
              ? (w(t.LBRACK),
                j(t.RBRACK, "expected an array-style type declaration (" + i + "[])"),
                E(
                  {
                    type: e.TypeApplication,
                    expression: E({ type: e.NameExpression, name: "Array" }, [R, o]),
                    applications: [B],
                  },
                  [R, o]
                ))
              : B);
      }
      function Q() {
        var B, R;
        if (((B = K()), u !== t.PIPE)) return B;
        for (R = [B], w(t.PIPE); R.push(K()), u === t.PIPE; ) w(t.PIPE);
        return E({ type: e.UnionType, elements: R }, [0, a]);
      }
      function se() {
        var B;
        return u === t.REST
          ? (w(t.REST), E({ type: e.RestType, expression: Q() }, [0, a]))
          : ((B = Q()), u === t.EQUAL ? (w(t.EQUAL), E({ type: e.OptionalType, expression: B }, [0, a])) : B);
      }
      function Re(B, R) {
        var k;
        return (
          (r = B),
          (n = r.length),
          (a = 0),
          (o = 0),
          (A = R && R.range),
          (y = (R && R.startIndex) || 0),
          $(),
          (k = Q()),
          R && R.midstream ? { expression: k, index: o } : (u !== t.EOF && d.throwError("not reach to EOF"), k)
        );
      }
      function Pe(B, R) {
        var k;
        return (
          (r = B),
          (n = r.length),
          (a = 0),
          (o = 0),
          (A = R && R.range),
          (y = (R && R.startIndex) || 0),
          $(),
          (k = se()),
          R && R.midstream ? { expression: k, index: o } : (u !== t.EOF && d.throwError("not reach to EOF"), k)
        );
      }
      function J(B, R, k) {
        var _, L, H;
        switch (B.type) {
          case e.NullableLiteral:
            _ = "?";
            break;
          case e.AllLiteral:
            _ = "*";
            break;
          case e.NullLiteral:
            _ = "null";
            break;
          case e.UndefinedLiteral:
            _ = "undefined";
            break;
          case e.VoidLiteral:
            _ = "void";
            break;
          case e.UnionType:
            for (k ? (_ = "") : (_ = "("), L = 0, H = B.elements.length; L < H; ++L)
              (_ += J(B.elements[L], R)), L + 1 !== H && (_ += R ? "|" : " | ");
            k || (_ += ")");
            break;
          case e.ArrayType:
            for (_ = "[", L = 0, H = B.elements.length; L < H; ++L)
              (_ += J(B.elements[L], R)), L + 1 !== H && (_ += R ? "," : ", ");
            _ += "]";
            break;
          case e.RecordType:
            for (_ = "{", L = 0, H = B.fields.length; L < H; ++L)
              (_ += J(B.fields[L], R)), L + 1 !== H && (_ += R ? "," : ", ");
            _ += "}";
            break;
          case e.FieldType:
            B.value ? (_ = B.key + (R ? ":" : ": ") + J(B.value, R)) : (_ = B.key);
            break;
          case e.FunctionType:
            for (
              _ = R ? "function(" : "function (",
                B.this &&
                  (B.new ? (_ += R ? "new:" : "new: ") : (_ += R ? "this:" : "this: "),
                  (_ += J(B.this, R)),
                  B.params.length !== 0 && (_ += R ? "," : ", ")),
                L = 0,
                H = B.params.length;
              L < H;
              ++L
            )
              (_ += J(B.params[L], R)), L + 1 !== H && (_ += R ? "," : ", ");
            (_ += ")"), B.result && (_ += (R ? ":" : ": ") + J(B.result, R));
            break;
          case e.ParameterType:
            _ = B.name + (R ? ":" : ": ") + J(B.expression, R);
            break;
          case e.RestType:
            (_ = "..."), B.expression && (_ += J(B.expression, R));
            break;
          case e.NonNullableType:
            B.prefix ? (_ = "!" + J(B.expression, R)) : (_ = J(B.expression, R) + "!");
            break;
          case e.OptionalType:
            _ = J(B.expression, R) + "=";
            break;
          case e.NullableType:
            B.prefix ? (_ = "?" + J(B.expression, R)) : (_ = J(B.expression, R) + "?");
            break;
          case e.NameExpression:
            _ = B.name;
            break;
          case e.TypeApplication:
            for (_ = J(B.expression, R) + ".<", L = 0, H = B.applications.length; L < H; ++L)
              (_ += J(B.applications[L], R)), L + 1 !== H && (_ += R ? "," : ", ");
            _ += ">";
            break;
          case e.StringLiteralType:
            _ = '"' + B.value + '"';
            break;
          case e.NumericLiteralType:
            _ = String(B.value);
            break;
          case e.BooleanLiteralType:
            _ = String(B.value);
            break;
          default:
            d.throwError("Unknown type " + B.type);
        }
        return _;
      }
      function Le(B, R) {
        return R == null && (R = {}), J(B, R.compact, R.topLevel);
      }
      (Ur.parseType = Re), (Ur.parseParamType = Pe), (Ur.stringify = Le), (Ur.Syntax = e);
    })();
  });
  var Lg = F((Ke) => {
    l();
    c();
    p();
    (function () {
      "use strict";
      var e, t, r, n, a;
      (n = Ou()), (e = qg()), (t = Ru());
      function o(w, j, I) {
        return w.slice(j, I);
      }
      a = (function () {
        var w = Object.prototype.hasOwnProperty;
        return function (I, U) {
          return w.call(I, U);
        };
      })();
      function u(w) {
        var j = {},
          I;
        for (I in w) w.hasOwnProperty(I) && (j[I] = w[I]);
        return j;
      }
      function i(w) {
        return (w >= 97 && w <= 122) || (w >= 65 && w <= 90) || (w >= 48 && w <= 57);
      }
      function s(w) {
        return w === "param" || w === "argument" || w === "arg";
      }
      function d(w) {
        return w === "return" || w === "returns";
      }
      function y(w) {
        return w === "property" || w === "prop";
      }
      function A(w) {
        return s(w) || y(w) || w === "alias" || w === "this" || w === "mixes" || w === "requires";
      }
      function g(w) {
        return A(w) || w === "const" || w === "constant";
      }
      function h(w) {
        return y(w) || s(w);
      }
      function E(w) {
        return y(w) || s(w);
      }
      function b(w) {
        return (
          s(w) ||
          d(w) ||
          w === "define" ||
          w === "enum" ||
          w === "implements" ||
          w === "this" ||
          w === "type" ||
          w === "typedef" ||
          y(w)
        );
      }
      function x(w) {
        return (
          b(w) ||
          w === "throws" ||
          w === "const" ||
          w === "constant" ||
          w === "namespace" ||
          w === "member" ||
          w === "var" ||
          w === "module" ||
          w === "constructor" ||
          w === "class" ||
          w === "extends" ||
          w === "augments" ||
          w === "public" ||
          w === "private" ||
          w === "protected"
        );
      }
      var S = "[ \\f\\t\\v\\u00a0\\u1680\\u180e\\u2000-\\u200a\\u202f\\u205f\\u3000\\ufeff]",
        P =
          "(" +
          S +
          "*(?:\\*" +
          S +
          `?)?)(.+|[\r
\u2028\u2029])`;
      function N(w) {
        return w
          .replace(/^\/\*\*?/, "")
          .replace(/\*\/$/, "")
          .replace(new RegExp(P, "g"), "$2")
          .replace(/\s*$/, "");
      }
      function $(w, j) {
        for (var I = w.replace(/^\/\*\*?/, ""), U = 0, V = new RegExp(P, "g"), z; (z = V.exec(I)); )
          if (((U += z[1].length), z.index + z[0].length > j + U)) return j + U + w.length - I.length;
        return w.replace(/\*\/$/, "").replace(/\s*$/, "").length;
      }
      (function (w) {
        var j, I, U, V, z, ie, Z, X, O;
        function T() {
          var k = z.charCodeAt(I);
          return (
            (I += 1),
            n.code.isLineTerminator(k) && !(k === 13 && z.charCodeAt(I) === 10) && (U += 1),
            String.fromCharCode(k)
          );
        }
        function M() {
          var k = "";
          for (T(); I < V && i(z.charCodeAt(I)); ) k += T();
          return k;
        }
        function G() {
          var k,
            _,
            L = I;
          for (_ = !1; L < V; ) {
            if (((k = z.charCodeAt(L)), n.code.isLineTerminator(k) && !(k === 13 && z.charCodeAt(L + 1) === 10)))
              _ = !0;
            else if (_) {
              if (k === 64) break;
              n.code.isWhiteSpace(k) || (_ = !1);
            }
            L += 1;
          }
          return L;
        }
        function Y(k, _, L) {
          for (var H, de, ae, ue, Ae = !1; I < _; )
            if (((H = z.charCodeAt(I)), n.code.isWhiteSpace(H))) T();
            else if (H === 123) {
              T();
              break;
            } else {
              Ae = !0;
              break;
            }
          if (Ae) return null;
          for (de = 1, ae = ""; I < _; )
            if (((H = z.charCodeAt(I)), n.code.isLineTerminator(H))) T();
            else {
              if (H === 125) {
                if (((de -= 1), de === 0)) {
                  T();
                  break;
                }
              } else H === 123 && (de += 1);
              ae === "" && (ue = I), (ae += T());
            }
          return de !== 0
            ? t.throwError("Braces are not balanced")
            : E(k)
            ? e.parseParamType(ae, { startIndex: Pe(ue), range: L })
            : e.parseType(ae, { startIndex: Pe(ue), range: L });
        }
        function K(k) {
          var _;
          if (!n.code.isIdentifierStartES5(z.charCodeAt(I)) && !z[I].match(/[0-9]/)) return null;
          for (_ = T(); I < k && n.code.isIdentifierPartES5(z.charCodeAt(I)); ) _ += T();
          return _;
        }
        function Q(k) {
          for (; I < k && (n.code.isWhiteSpace(z.charCodeAt(I)) || n.code.isLineTerminator(z.charCodeAt(I))); ) T();
        }
        function se(k, _, L) {
          var H = "",
            de,
            ae;
          if ((Q(k), I >= k)) return null;
          if (z.charCodeAt(I) === 91)
            if (_) (de = !0), (H = T());
            else return null;
          if (((H += K(k)), L))
            for (
              z.charCodeAt(I) === 58 &&
                (H === "module" || H === "external" || H === "event") &&
                ((H += T()), (H += K(k))),
                z.charCodeAt(I) === 91 && z.charCodeAt(I + 1) === 93 && ((H += T()), (H += T()));
              z.charCodeAt(I) === 46 ||
              z.charCodeAt(I) === 47 ||
              z.charCodeAt(I) === 35 ||
              z.charCodeAt(I) === 45 ||
              z.charCodeAt(I) === 126;

            )
              (H += T()), (H += K(k));
          if (de) {
            if ((Q(k), z.charCodeAt(I) === 61)) {
              (H += T()), Q(k);
              for (var ue, Ae = 1; I < k; ) {
                if (
                  ((ue = z.charCodeAt(I)),
                  n.code.isWhiteSpace(ue) && (ae || (Q(k), (ue = z.charCodeAt(I)))),
                  ue === 39 && (ae ? ae === "'" && (ae = "") : (ae = "'")),
                  ue === 34 && (ae ? ae === '"' && (ae = "") : (ae = '"')),
                  ue === 91)
                )
                  Ae++;
                else if (ue === 93 && --Ae === 0) break;
                H += T();
              }
            }
            if ((Q(k), I >= k || z.charCodeAt(I) !== 93)) return null;
            H += T();
          }
          return H;
        }
        function Re() {
          for (; I < V && z.charCodeAt(I) !== 64; ) T();
          return I >= V ? !1 : (t.assert(z.charCodeAt(I) === 64), !0);
        }
        function Pe(k) {
          return z === ie ? k : $(ie, k);
        }
        function J(k, _) {
          (this._options = k),
            (this._title = _.toLowerCase()),
            (this._tag = { title: _, description: null }),
            this._options.lineNumbers && (this._tag.lineNumber = U),
            (this._first = I - _.length - 1),
            (this._last = 0),
            (this._extra = {});
        }
        (J.prototype.addError = function (_) {
          var L = Array.prototype.slice.call(arguments, 1),
            H = _.replace(/%(\d)/g, function (de, ae) {
              return t.assert(ae < L.length, "Message reference must be in range"), L[ae];
            });
          return this._tag.errors || (this._tag.errors = []), O && t.throwError(H), this._tag.errors.push(H), Z;
        }),
          (J.prototype.parseType = function () {
            if (b(this._title))
              try {
                if (
                  ((this._tag.type = Y(this._title, this._last, this._options.range)),
                  !this._tag.type &&
                    !s(this._title) &&
                    !d(this._title) &&
                    !this.addError("Missing or invalid tag type"))
                )
                  return !1;
              } catch (k) {
                if (((this._tag.type = null), !this.addError(k.message))) return !1;
              }
            else if (x(this._title))
              try {
                this._tag.type = Y(this._title, this._last, this._options.range);
              } catch {}
            return !0;
          }),
          (J.prototype._parseNamePath = function (k) {
            var _;
            return (
              (_ = se(this._last, X && E(this._title), !0)),
              !_ && !k && !this.addError("Missing or invalid tag name") ? !1 : ((this._tag.name = _), !0)
            );
          }),
          (J.prototype.parseNamePath = function () {
            return this._parseNamePath(!1);
          }),
          (J.prototype.parseNamePathOptional = function () {
            return this._parseNamePath(!0);
          }),
          (J.prototype.parseName = function () {
            var k, _;
            if (g(this._title))
              if (((this._tag.name = se(this._last, X && E(this._title), h(this._title))), this._tag.name))
                (_ = this._tag.name),
                  _.charAt(0) === "[" &&
                    _.charAt(_.length - 1) === "]" &&
                    ((k = _.substring(1, _.length - 1).split("=")),
                    k.length > 1 && (this._tag.default = k.slice(1).join("=")),
                    (this._tag.name = k[0]),
                    this._tag.type &&
                      this._tag.type.type !== "OptionalType" &&
                      (this._tag.type = { type: "OptionalType", expression: this._tag.type }));
              else {
                if (!A(this._title)) return !0;
                if (s(this._title) && this._tag.type && this._tag.type.name)
                  (this._extra.name = this._tag.type), (this._tag.name = this._tag.type.name), (this._tag.type = null);
                else if (!this.addError("Missing or invalid tag name")) return !1;
              }
            return !0;
          }),
          (J.prototype.parseDescription = function () {
            var _ = o(z, I, this._last).trim();
            return _ && (/^-\s+/.test(_) && (_ = _.substring(2)), (this._tag.description = _)), !0;
          }),
          (J.prototype.parseCaption = function () {
            var _ = o(z, I, this._last).trim(),
              L = "<caption>",
              H = "</caption>",
              de = _.indexOf(L),
              ae = _.indexOf(H);
            return (
              de >= 0 && ae >= 0
                ? ((this._tag.caption = _.substring(de + L.length, ae).trim()),
                  (this._tag.description = _.substring(ae + H.length).trim()))
                : (this._tag.description = _),
              !0
            );
          }),
          (J.prototype.parseKind = function () {
            var _, L;
            return (
              (L = {
                class: !0,
                constant: !0,
                event: !0,
                external: !0,
                file: !0,
                function: !0,
                member: !0,
                mixin: !0,
                module: !0,
                namespace: !0,
                typedef: !0,
              }),
              (_ = o(z, I, this._last).trim()),
              (this._tag.kind = _),
              !(!a(L, _) && !this.addError("Invalid kind name '%0'", _))
            );
          }),
          (J.prototype.parseAccess = function () {
            var _;
            return (
              (_ = o(z, I, this._last).trim()),
              (this._tag.access = _),
              !(_ !== "private" && _ !== "protected" && _ !== "public" && !this.addError("Invalid access name '%0'", _))
            );
          }),
          (J.prototype.parseThis = function () {
            var _ = o(z, I, this._last).trim();
            if (_ && _.charAt(0) === "{") {
              var L = this.parseType();
              return (L && this._tag.type.type === "NameExpression") || this._tag.type.type === "UnionType"
                ? ((this._tag.name = this._tag.type.name), !0)
                : this.addError("Invalid name for this");
            } else return this.parseNamePath();
          }),
          (J.prototype.parseVariation = function () {
            var _, L;
            return (
              (L = o(z, I, this._last).trim()),
              (_ = parseFloat(L, 10)),
              (this._tag.variation = _),
              !(isNaN(_) && !this.addError("Invalid variation '%0'", L))
            );
          }),
          (J.prototype.ensureEnd = function () {
            var k = o(z, I, this._last).trim();
            return !(k && !this.addError("Unknown content '%0'", k));
          }),
          (J.prototype.epilogue = function () {
            var _;
            return (
              (_ = this._tag.description),
              !(
                E(this._title) &&
                !this._tag.type &&
                _ &&
                _.charAt(0) === "[" &&
                ((this._tag.type = this._extra.name),
                this._tag.name || (this._tag.name = void 0),
                !X && !this.addError("Missing or invalid tag name"))
              )
            );
          }),
          (j = {
            access: ["parseAccess"],
            alias: ["parseNamePath", "ensureEnd"],
            augments: ["parseType", "parseNamePathOptional", "ensureEnd"],
            constructor: ["parseType", "parseNamePathOptional", "ensureEnd"],
            class: ["parseType", "parseNamePathOptional", "ensureEnd"],
            extends: ["parseType", "parseNamePathOptional", "ensureEnd"],
            example: ["parseCaption"],
            deprecated: ["parseDescription"],
            global: ["ensureEnd"],
            inner: ["ensureEnd"],
            instance: ["ensureEnd"],
            kind: ["parseKind"],
            mixes: ["parseNamePath", "ensureEnd"],
            mixin: ["parseNamePathOptional", "ensureEnd"],
            member: ["parseType", "parseNamePathOptional", "ensureEnd"],
            method: ["parseNamePathOptional", "ensureEnd"],
            module: ["parseType", "parseNamePathOptional", "ensureEnd"],
            func: ["parseNamePathOptional", "ensureEnd"],
            function: ["parseNamePathOptional", "ensureEnd"],
            var: ["parseType", "parseNamePathOptional", "ensureEnd"],
            name: ["parseNamePath", "ensureEnd"],
            namespace: ["parseType", "parseNamePathOptional", "ensureEnd"],
            private: ["parseType", "parseDescription"],
            protected: ["parseType", "parseDescription"],
            public: ["parseType", "parseDescription"],
            readonly: ["ensureEnd"],
            requires: ["parseNamePath", "ensureEnd"],
            since: ["parseDescription"],
            static: ["ensureEnd"],
            summary: ["parseDescription"],
            this: ["parseThis", "ensureEnd"],
            todo: ["parseDescription"],
            typedef: ["parseType", "parseNamePathOptional"],
            variation: ["parseVariation"],
            version: ["parseDescription"],
          }),
          (J.prototype.parse = function () {
            var _, L, H, de;
            if (!this._title && !this.addError("Missing or invalid title")) return null;
            for (
              this._last = G(this._title),
                this._options.range &&
                  (this._tag.range = [this._first, z.slice(0, this._last).replace(/\s*$/, "").length].map(Pe)),
                a(j, this._title)
                  ? (H = j[this._title])
                  : (H = ["parseType", "parseName", "parseDescription", "epilogue"]),
                _ = 0,
                L = H.length;
              _ < L;
              ++_
            )
              if (((de = H[_]), !this[de]())) return null;
            return this._tag;
          });
        function Le(k) {
          var _, L, H;
          if (!Re()) return null;
          for (_ = M(), L = new J(k, _), H = L.parse(); I < L._last; ) T();
          return H;
        }
        function B(k) {
          var _ = "",
            L,
            H;
          for (H = !0; I < V && ((L = z.charCodeAt(I)), !(H && L === 64)); )
            n.code.isLineTerminator(L) ? (H = !0) : H && !n.code.isWhiteSpace(L) && (H = !1), (_ += T());
          return k ? _ : _.trim();
        }
        function R(k, _) {
          var L = [],
            H,
            de,
            ae,
            ue,
            Ae;
          if (
            (_ === void 0 && (_ = {}),
            typeof _.unwrap == "boolean" && _.unwrap ? (z = N(k)) : (z = k),
            (ie = k),
            _.tags)
          )
            if (Array.isArray(_.tags))
              for (ae = {}, ue = 0, Ae = _.tags.length; ue < Ae; ue++)
                typeof _.tags[ue] == "string"
                  ? (ae[_.tags[ue]] = !0)
                  : t.throwError('Invalid "tags" parameter: ' + _.tags);
            else t.throwError('Invalid "tags" parameter: ' + _.tags);
          for (
            V = z.length, I = 0, U = 0, Z = _.recoverable, X = _.sloppy, O = _.strict, de = B(_.preserveWhitespace);
            (H = Le(_)), !!H;

          )
            (!ae || ae.hasOwnProperty(H.title)) && L.push(H);
          return { description: de, tags: L };
        }
        w.parse = R;
      })((r = {})),
        (Ke.version = t.VERSION),
        (Ke.parse = r.parse),
        (Ke.parseType = e.parseType),
        (Ke.parseParamType = e.parseParamType),
        (Ke.unwrapComment = N),
        (Ke.Syntax = u(e.Syntax)),
        (Ke.Error = t.DoctrineError),
        (Ke.type = {
          Syntax: Ke.Syntax,
          parseType: e.parseType,
          parseParamType: e.parseParamType,
          stringify: e.stringify,
        });
    })();
  });
  function Ft() {
    return (Ft =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      }).apply(this, arguments);
  }
  function ju(e, t) {
    if (e == null) return {};
    var r,
      n,
      a = {},
      o = Object.keys(e);
    for (n = 0; n < o.length; n++) t.indexOf((r = o[n])) >= 0 || (a[r] = e[r]);
    return a;
  }
  function Pu(e) {
    var t = xe(e),
      r = xe(function (n) {
        t.current && t.current(n);
      });
    return (t.current = e), r.current;
  }
  function Qg(e, t, r) {
    var n = Pu(r),
      a = ne(function () {
        return e.toHsva(t);
      }),
      o = a[0],
      u = a[1],
      i = xe({ color: t, hsva: o });
    me(
      function () {
        if (!e.equal(t, i.current.color)) {
          var d = e.toHsva(t);
          (i.current = { hsva: d, color: t }), u(d);
        }
      },
      [t, e]
    ),
      me(
        function () {
          var d;
          Xg(o, i.current.hsva) ||
            e.equal((d = e.fromHsva(o)), i.current.color) ||
            ((i.current = { hsva: o, color: d }), n(d));
        },
        [o, e, n]
      );
    var s = ge(function (d) {
      u(function (y) {
        return Object.assign({}, y, d);
      });
    }, []);
    return [o, s];
  }
  var nr,
    Hr,
    Iu,
    Ug,
    zg,
    Mu,
    Gr,
    qu,
    ve,
    jO,
    MO,
    ku,
    qO,
    LO,
    $O,
    UO,
    Gg,
    Nu,
    aa,
    Wg,
    zO,
    na,
    HO,
    Vg,
    Kg,
    Yg,
    Xg,
    Jg,
    GO,
    WO,
    VO,
    KO,
    Hg,
    Zg,
    YO,
    XO,
    em,
    JO,
    tm,
    QO,
    rm,
    ZO,
    nm,
    am = Xe(() => {
      l();
      c();
      p();
      wt();
      (nr = function (e, t, r) {
        return t === void 0 && (t = 0), r === void 0 && (r = 1), e > r ? r : e < t ? t : e;
      }),
        (Hr = function (e) {
          return "touches" in e;
        }),
        (Iu = function (e) {
          return (e && e.ownerDocument.defaultView) || self;
        }),
        (Ug = function (e, t, r) {
          var n = e.getBoundingClientRect(),
            a = Hr(t)
              ? (function (o, u) {
                  for (var i = 0; i < o.length; i++) if (o[i].identifier === u) return o[i];
                  return o[0];
                })(t.touches, r)
              : t;
          return {
            left: nr((a.pageX - (n.left + Iu(e).pageXOffset)) / n.width),
            top: nr((a.pageY - (n.top + Iu(e).pageYOffset)) / n.height),
          };
        }),
        (zg = function (e) {
          !Hr(e) && e.preventDefault();
        }),
        (Mu = m.memo(function (e) {
          var t = e.onMove,
            r = e.onKey,
            n = ju(e, ["onMove", "onKey"]),
            a = xe(null),
            o = Pu(t),
            u = Pu(r),
            i = xe(null),
            s = xe(!1),
            d = rt(
              function () {
                var h = function (x) {
                    zg(x),
                      (Hr(x) ? x.touches.length > 0 : x.buttons > 0) && a.current
                        ? o(Ug(a.current, x, i.current))
                        : b(!1);
                  },
                  E = function () {
                    return b(!1);
                  };
                function b(x) {
                  var S = s.current,
                    P = Iu(a.current),
                    N = x ? P.addEventListener : P.removeEventListener;
                  N(S ? "touchmove" : "mousemove", h), N(S ? "touchend" : "mouseup", E);
                }
                return [
                  function (x) {
                    var S = x.nativeEvent,
                      P = a.current;
                    if (
                      P &&
                      (zg(S),
                      !(function ($, w) {
                        return w && !Hr($);
                      })(S, s.current) && P)
                    ) {
                      if (Hr(S)) {
                        s.current = !0;
                        var N = S.changedTouches || [];
                        N.length && (i.current = N[0].identifier);
                      }
                      P.focus(), o(Ug(P, S, i.current)), b(!0);
                    }
                  },
                  function (x) {
                    var S = x.which || x.keyCode;
                    S < 37 ||
                      S > 40 ||
                      (x.preventDefault(),
                      u({ left: S === 39 ? 0.05 : S === 37 ? -0.05 : 0, top: S === 40 ? 0.05 : S === 38 ? -0.05 : 0 }));
                  },
                  b,
                ];
              },
              [u, o]
            ),
            y = d[0],
            A = d[1],
            g = d[2];
          return (
            me(
              function () {
                return g;
              },
              [g]
            ),
            m.createElement(
              "div",
              Ft({}, n, {
                onTouchStart: y,
                onMouseDown: y,
                className: "react-colorful__interactive",
                ref: a,
                onKeyDown: A,
                tabIndex: 0,
                role: "slider",
              })
            )
          );
        })),
        (Gr = function (e) {
          return e.filter(Boolean).join(" ");
        }),
        (qu = function (e) {
          var t = e.color,
            r = e.left,
            n = e.top,
            a = n === void 0 ? 0.5 : n,
            o = Gr(["react-colorful__pointer", e.className]);
          return m.createElement(
            "div",
            { className: o, style: { top: 100 * a + "%", left: 100 * r + "%" } },
            m.createElement("div", { className: "react-colorful__pointer-fill", style: { backgroundColor: t } })
          );
        }),
        (ve = function (e, t, r) {
          return t === void 0 && (t = 0), r === void 0 && (r = Math.pow(10, t)), Math.round(r * e) / r;
        }),
        (jO = { grad: 0.9, turn: 360, rad: 360 / (2 * Math.PI) }),
        (MO = function (e) {
          return Vg(ku(e));
        }),
        (ku = function (e) {
          return (
            e[0] === "#" && (e = e.substring(1)),
            e.length < 6
              ? {
                  r: parseInt(e[0] + e[0], 16),
                  g: parseInt(e[1] + e[1], 16),
                  b: parseInt(e[2] + e[2], 16),
                  a: e.length === 4 ? ve(parseInt(e[3] + e[3], 16) / 255, 2) : 1,
                }
              : {
                  r: parseInt(e.substring(0, 2), 16),
                  g: parseInt(e.substring(2, 4), 16),
                  b: parseInt(e.substring(4, 6), 16),
                  a: e.length === 8 ? ve(parseInt(e.substring(6, 8), 16) / 255, 2) : 1,
                }
          );
        }),
        (qO = function (e, t) {
          return t === void 0 && (t = "deg"), Number(e) * (jO[t] || 1);
        }),
        (LO = function (e) {
          var t =
            /hsla?\(?\s*(-?\d*\.?\d+)(deg|rad|grad|turn)?[,\s]+(-?\d*\.?\d+)%?[,\s]+(-?\d*\.?\d+)%?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(
              e
            );
          return t
            ? $O({
                h: qO(t[1], t[2]),
                s: Number(t[3]),
                l: Number(t[4]),
                a: t[5] === void 0 ? 1 : Number(t[5]) / (t[6] ? 100 : 1),
              })
            : { h: 0, s: 0, v: 0, a: 1 };
        }),
        ($O = function (e) {
          var t = e.s,
            r = e.l;
          return {
            h: e.h,
            s: (t *= (r < 50 ? r : 100 - r) / 100) > 0 ? ((2 * t) / (r + t)) * 100 : 0,
            v: r + t,
            a: e.a,
          };
        }),
        (UO = function (e) {
          return HO(Wg(e));
        }),
        (Gg = function (e) {
          var t = e.s,
            r = e.v,
            n = e.a,
            a = ((200 - t) * r) / 100;
          return {
            h: ve(e.h),
            s: ve(a > 0 && a < 200 ? ((t * r) / 100 / (a <= 100 ? a : 200 - a)) * 100 : 0),
            l: ve(a / 2),
            a: ve(n, 2),
          };
        }),
        (Nu = function (e) {
          var t = Gg(e);
          return "hsl(" + t.h + ", " + t.s + "%, " + t.l + "%)";
        }),
        (aa = function (e) {
          var t = Gg(e);
          return "hsla(" + t.h + ", " + t.s + "%, " + t.l + "%, " + t.a + ")";
        }),
        (Wg = function (e) {
          var t = e.h,
            r = e.s,
            n = e.v,
            a = e.a;
          (t = (t / 360) * 6), (r /= 100), (n /= 100);
          var o = Math.floor(t),
            u = n * (1 - r),
            i = n * (1 - (t - o) * r),
            s = n * (1 - (1 - t + o) * r),
            d = o % 6;
          return {
            r: ve(255 * [n, i, u, u, s, n][d]),
            g: ve(255 * [s, n, n, i, u, u][d]),
            b: ve(255 * [u, u, s, n, n, i][d]),
            a: ve(a, 2),
          };
        }),
        (zO = function (e) {
          var t =
            /rgba?\(?\s*(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(
              e
            );
          return t
            ? Vg({
                r: Number(t[1]) / (t[2] ? 100 / 255 : 1),
                g: Number(t[3]) / (t[4] ? 100 / 255 : 1),
                b: Number(t[5]) / (t[6] ? 100 / 255 : 1),
                a: t[7] === void 0 ? 1 : Number(t[7]) / (t[8] ? 100 : 1),
              })
            : { h: 0, s: 0, v: 0, a: 1 };
        }),
        (na = function (e) {
          var t = e.toString(16);
          return t.length < 2 ? "0" + t : t;
        }),
        (HO = function (e) {
          var t = e.r,
            r = e.g,
            n = e.b,
            a = e.a,
            o = a < 1 ? na(ve(255 * a)) : "";
          return "#" + na(t) + na(r) + na(n) + o;
        }),
        (Vg = function (e) {
          var t = e.r,
            r = e.g,
            n = e.b,
            a = e.a,
            o = Math.max(t, r, n),
            u = o - Math.min(t, r, n),
            i = u ? (o === t ? (r - n) / u : o === r ? 2 + (n - t) / u : 4 + (t - r) / u) : 0;
          return { h: ve(60 * (i < 0 ? i + 6 : i)), s: ve(o ? (u / o) * 100 : 0), v: ve((o / 255) * 100), a };
        }),
        (Kg = m.memo(function (e) {
          var t = e.hue,
            r = e.onChange,
            n = Gr(["react-colorful__hue", e.className]);
          return m.createElement(
            "div",
            { className: n },
            m.createElement(
              Mu,
              {
                onMove: function (a) {
                  r({ h: 360 * a.left });
                },
                onKey: function (a) {
                  r({ h: nr(t + 360 * a.left, 0, 360) });
                },
                "aria-label": "Hue",
                "aria-valuenow": ve(t),
                "aria-valuemax": "360",
                "aria-valuemin": "0",
              },
              m.createElement(qu, {
                className: "react-colorful__hue-pointer",
                left: t / 360,
                color: Nu({ h: t, s: 100, v: 100, a: 1 }),
              })
            )
          );
        })),
        (Yg = m.memo(function (e) {
          var t = e.hsva,
            r = e.onChange,
            n = { backgroundColor: Nu({ h: t.h, s: 100, v: 100, a: 1 }) };
          return m.createElement(
            "div",
            { className: "react-colorful__saturation", style: n },
            m.createElement(
              Mu,
              {
                onMove: function (a) {
                  r({ s: 100 * a.left, v: 100 - 100 * a.top });
                },
                onKey: function (a) {
                  r({ s: nr(t.s + 100 * a.left, 0, 100), v: nr(t.v - 100 * a.top, 0, 100) });
                },
                "aria-label": "Color",
                "aria-valuetext": "Saturation " + ve(t.s) + "%, Brightness " + ve(t.v) + "%",
              },
              m.createElement(qu, {
                className: "react-colorful__saturation-pointer",
                top: 1 - t.v / 100,
                left: t.s / 100,
                color: Nu(t),
              })
            )
          );
        })),
        (Xg = function (e, t) {
          if (e === t) return !0;
          for (var r in e) if (e[r] !== t[r]) return !1;
          return !0;
        }),
        (Jg = function (e, t) {
          return e.replace(/\s/g, "") === t.replace(/\s/g, "");
        }),
        (GO = function (e, t) {
          return e.toLowerCase() === t.toLowerCase() || Xg(ku(e), ku(t));
        });
      (VO = typeof window < "u" ? yi : me),
        (KO = function () {
          return WO || (typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : void 0);
        }),
        (Hg = new Map()),
        (Zg = function (e) {
          VO(function () {
            var t = e.current ? e.current.ownerDocument : document;
            if (t !== void 0 && !Hg.has(t)) {
              var r = t.createElement("style");
              (r.innerHTML = `.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}`),
                Hg.set(t, r);
              var n = KO();
              n && r.setAttribute("nonce", n), t.head.appendChild(r);
            }
          }, []);
        }),
        (YO = function (e) {
          var t = e.className,
            r = e.colorModel,
            n = e.color,
            a = n === void 0 ? r.defaultColor : n,
            o = e.onChange,
            u = ju(e, ["className", "colorModel", "color", "onChange"]),
            i = xe(null);
          Zg(i);
          var s = Qg(r, a, o),
            d = s[0],
            y = s[1],
            A = Gr(["react-colorful", t]);
          return m.createElement(
            "div",
            Ft({}, u, { ref: i, className: A }),
            m.createElement(Yg, { hsva: d, onChange: y }),
            m.createElement(Kg, { hue: d.h, onChange: y, className: "react-colorful__last-control" })
          );
        }),
        (XO = {
          defaultColor: "000",
          toHsva: MO,
          fromHsva: function (e) {
            return UO({ h: e.h, s: e.s, v: e.v, a: 1 });
          },
          equal: GO,
        }),
        (em = function (e) {
          return m.createElement(YO, Ft({}, e, { colorModel: XO }));
        }),
        (JO = function (e) {
          var t = e.className,
            r = e.hsva,
            n = e.onChange,
            a = {
              backgroundImage:
                "linear-gradient(90deg, " +
                aa(Object.assign({}, r, { a: 0 })) +
                ", " +
                aa(Object.assign({}, r, { a: 1 })) +
                ")",
            },
            o = Gr(["react-colorful__alpha", t]),
            u = ve(100 * r.a);
          return m.createElement(
            "div",
            { className: o },
            m.createElement("div", { className: "react-colorful__alpha-gradient", style: a }),
            m.createElement(
              Mu,
              {
                onMove: function (i) {
                  n({ a: i.left });
                },
                onKey: function (i) {
                  n({ a: nr(r.a + i.left) });
                },
                "aria-label": "Alpha",
                "aria-valuetext": u + "%",
                "aria-valuenow": u,
                "aria-valuemin": "0",
                "aria-valuemax": "100",
              },
              m.createElement(qu, { className: "react-colorful__alpha-pointer", left: r.a, color: aa(r) })
            )
          );
        }),
        (tm = function (e) {
          var t = e.className,
            r = e.colorModel,
            n = e.color,
            a = n === void 0 ? r.defaultColor : n,
            o = e.onChange,
            u = ju(e, ["className", "colorModel", "color", "onChange"]),
            i = xe(null);
          Zg(i);
          var s = Qg(r, a, o),
            d = s[0],
            y = s[1],
            A = Gr(["react-colorful", t]);
          return m.createElement(
            "div",
            Ft({}, u, { ref: i, className: A }),
            m.createElement(Yg, { hsva: d, onChange: y }),
            m.createElement(Kg, { hue: d.h, onChange: y }),
            m.createElement(JO, { hsva: d, onChange: y, className: "react-colorful__last-control" })
          );
        }),
        (QO = { defaultColor: "hsla(0, 0%, 0%, 1)", toHsva: LO, fromHsva: aa, equal: Jg }),
        (rm = function (e) {
          return m.createElement(tm, Ft({}, e, { colorModel: QO }));
        }),
        (ZO = {
          defaultColor: "rgba(0, 0, 0, 1)",
          toHsva: zO,
          fromHsva: function (e) {
            var t = Wg(e);
            return "rgba(" + t.r + ", " + t.g + ", " + t.b + ", " + t.a + ")";
          },
          equal: Jg,
        }),
        (nm = function (e) {
          return m.createElement(tm, Ft({}, e, { colorModel: ZO }));
        });
    });
  var um = F((pee, om) => {
    "use strict";
    l();
    c();
    p();
    om.exports = {
      aliceblue: [240, 248, 255],
      antiquewhite: [250, 235, 215],
      aqua: [0, 255, 255],
      aquamarine: [127, 255, 212],
      azure: [240, 255, 255],
      beige: [245, 245, 220],
      bisque: [255, 228, 196],
      black: [0, 0, 0],
      blanchedalmond: [255, 235, 205],
      blue: [0, 0, 255],
      blueviolet: [138, 43, 226],
      brown: [165, 42, 42],
      burlywood: [222, 184, 135],
      cadetblue: [95, 158, 160],
      chartreuse: [127, 255, 0],
      chocolate: [210, 105, 30],
      coral: [255, 127, 80],
      cornflowerblue: [100, 149, 237],
      cornsilk: [255, 248, 220],
      crimson: [220, 20, 60],
      cyan: [0, 255, 255],
      darkblue: [0, 0, 139],
      darkcyan: [0, 139, 139],
      darkgoldenrod: [184, 134, 11],
      darkgray: [169, 169, 169],
      darkgreen: [0, 100, 0],
      darkgrey: [169, 169, 169],
      darkkhaki: [189, 183, 107],
      darkmagenta: [139, 0, 139],
      darkolivegreen: [85, 107, 47],
      darkorange: [255, 140, 0],
      darkorchid: [153, 50, 204],
      darkred: [139, 0, 0],
      darksalmon: [233, 150, 122],
      darkseagreen: [143, 188, 143],
      darkslateblue: [72, 61, 139],
      darkslategray: [47, 79, 79],
      darkslategrey: [47, 79, 79],
      darkturquoise: [0, 206, 209],
      darkviolet: [148, 0, 211],
      deeppink: [255, 20, 147],
      deepskyblue: [0, 191, 255],
      dimgray: [105, 105, 105],
      dimgrey: [105, 105, 105],
      dodgerblue: [30, 144, 255],
      firebrick: [178, 34, 34],
      floralwhite: [255, 250, 240],
      forestgreen: [34, 139, 34],
      fuchsia: [255, 0, 255],
      gainsboro: [220, 220, 220],
      ghostwhite: [248, 248, 255],
      gold: [255, 215, 0],
      goldenrod: [218, 165, 32],
      gray: [128, 128, 128],
      green: [0, 128, 0],
      greenyellow: [173, 255, 47],
      grey: [128, 128, 128],
      honeydew: [240, 255, 240],
      hotpink: [255, 105, 180],
      indianred: [205, 92, 92],
      indigo: [75, 0, 130],
      ivory: [255, 255, 240],
      khaki: [240, 230, 140],
      lavender: [230, 230, 250],
      lavenderblush: [255, 240, 245],
      lawngreen: [124, 252, 0],
      lemonchiffon: [255, 250, 205],
      lightblue: [173, 216, 230],
      lightcoral: [240, 128, 128],
      lightcyan: [224, 255, 255],
      lightgoldenrodyellow: [250, 250, 210],
      lightgray: [211, 211, 211],
      lightgreen: [144, 238, 144],
      lightgrey: [211, 211, 211],
      lightpink: [255, 182, 193],
      lightsalmon: [255, 160, 122],
      lightseagreen: [32, 178, 170],
      lightskyblue: [135, 206, 250],
      lightslategray: [119, 136, 153],
      lightslategrey: [119, 136, 153],
      lightsteelblue: [176, 196, 222],
      lightyellow: [255, 255, 224],
      lime: [0, 255, 0],
      limegreen: [50, 205, 50],
      linen: [250, 240, 230],
      magenta: [255, 0, 255],
      maroon: [128, 0, 0],
      mediumaquamarine: [102, 205, 170],
      mediumblue: [0, 0, 205],
      mediumorchid: [186, 85, 211],
      mediumpurple: [147, 112, 219],
      mediumseagreen: [60, 179, 113],
      mediumslateblue: [123, 104, 238],
      mediumspringgreen: [0, 250, 154],
      mediumturquoise: [72, 209, 204],
      mediumvioletred: [199, 21, 133],
      midnightblue: [25, 25, 112],
      mintcream: [245, 255, 250],
      mistyrose: [255, 228, 225],
      moccasin: [255, 228, 181],
      navajowhite: [255, 222, 173],
      navy: [0, 0, 128],
      oldlace: [253, 245, 230],
      olive: [128, 128, 0],
      olivedrab: [107, 142, 35],
      orange: [255, 165, 0],
      orangered: [255, 69, 0],
      orchid: [218, 112, 214],
      palegoldenrod: [238, 232, 170],
      palegreen: [152, 251, 152],
      paleturquoise: [175, 238, 238],
      palevioletred: [219, 112, 147],
      papayawhip: [255, 239, 213],
      peachpuff: [255, 218, 185],
      peru: [205, 133, 63],
      pink: [255, 192, 203],
      plum: [221, 160, 221],
      powderblue: [176, 224, 230],
      purple: [128, 0, 128],
      rebeccapurple: [102, 51, 153],
      red: [255, 0, 0],
      rosybrown: [188, 143, 143],
      royalblue: [65, 105, 225],
      saddlebrown: [139, 69, 19],
      salmon: [250, 128, 114],
      sandybrown: [244, 164, 96],
      seagreen: [46, 139, 87],
      seashell: [255, 245, 238],
      sienna: [160, 82, 45],
      silver: [192, 192, 192],
      skyblue: [135, 206, 235],
      slateblue: [106, 90, 205],
      slategray: [112, 128, 144],
      slategrey: [112, 128, 144],
      snow: [255, 250, 250],
      springgreen: [0, 255, 127],
      steelblue: [70, 130, 180],
      tan: [210, 180, 140],
      teal: [0, 128, 128],
      thistle: [216, 191, 216],
      tomato: [255, 99, 71],
      turquoise: [64, 224, 208],
      violet: [238, 130, 238],
      wheat: [245, 222, 179],
      white: [255, 255, 255],
      whitesmoke: [245, 245, 245],
      yellow: [255, 255, 0],
      yellowgreen: [154, 205, 50],
    };
  });
  var Lu = F((gee, sm) => {
    l();
    c();
    p();
    var Wr = um(),
      im = {};
    for (let e of Object.keys(Wr)) im[Wr[e]] = e;
    var W = {
      rgb: { channels: 3, labels: "rgb" },
      hsl: { channels: 3, labels: "hsl" },
      hsv: { channels: 3, labels: "hsv" },
      hwb: { channels: 3, labels: "hwb" },
      cmyk: { channels: 4, labels: "cmyk" },
      xyz: { channels: 3, labels: "xyz" },
      lab: { channels: 3, labels: "lab" },
      lch: { channels: 3, labels: "lch" },
      hex: { channels: 1, labels: ["hex"] },
      keyword: { channels: 1, labels: ["keyword"] },
      ansi16: { channels: 1, labels: ["ansi16"] },
      ansi256: { channels: 1, labels: ["ansi256"] },
      hcg: { channels: 3, labels: ["h", "c", "g"] },
      apple: { channels: 3, labels: ["r16", "g16", "b16"] },
      gray: { channels: 1, labels: ["gray"] },
    };
    sm.exports = W;
    for (let e of Object.keys(W)) {
      if (!("channels" in W[e])) throw new Error("missing channels property: " + e);
      if (!("labels" in W[e])) throw new Error("missing channel labels property: " + e);
      if (W[e].labels.length !== W[e].channels) throw new Error("channel and label counts mismatch: " + e);
      let { channels: t, labels: r } = W[e];
      delete W[e].channels,
        delete W[e].labels,
        Object.defineProperty(W[e], "channels", { value: t }),
        Object.defineProperty(W[e], "labels", { value: r });
    }
    W.rgb.hsl = function (e) {
      let t = e[0] / 255,
        r = e[1] / 255,
        n = e[2] / 255,
        a = Math.min(t, r, n),
        o = Math.max(t, r, n),
        u = o - a,
        i,
        s;
      o === a
        ? (i = 0)
        : t === o
        ? (i = (r - n) / u)
        : r === o
        ? (i = 2 + (n - t) / u)
        : n === o && (i = 4 + (t - r) / u),
        (i = Math.min(i * 60, 360)),
        i < 0 && (i += 360);
      let d = (a + o) / 2;
      return o === a ? (s = 0) : d <= 0.5 ? (s = u / (o + a)) : (s = u / (2 - o - a)), [i, s * 100, d * 100];
    };
    W.rgb.hsv = function (e) {
      let t,
        r,
        n,
        a,
        o,
        u = e[0] / 255,
        i = e[1] / 255,
        s = e[2] / 255,
        d = Math.max(u, i, s),
        y = d - Math.min(u, i, s),
        A = function (g) {
          return (d - g) / 6 / y + 1 / 2;
        };
      return (
        y === 0
          ? ((a = 0), (o = 0))
          : ((o = y / d),
            (t = A(u)),
            (r = A(i)),
            (n = A(s)),
            u === d ? (a = n - r) : i === d ? (a = 1 / 3 + t - n) : s === d && (a = 2 / 3 + r - t),
            a < 0 ? (a += 1) : a > 1 && (a -= 1)),
        [a * 360, o * 100, d * 100]
      );
    };
    W.rgb.hwb = function (e) {
      let t = e[0],
        r = e[1],
        n = e[2],
        a = W.rgb.hsl(e)[0],
        o = (1 / 255) * Math.min(t, Math.min(r, n));
      return (n = 1 - (1 / 255) * Math.max(t, Math.max(r, n))), [a, o * 100, n * 100];
    };
    W.rgb.cmyk = function (e) {
      let t = e[0] / 255,
        r = e[1] / 255,
        n = e[2] / 255,
        a = Math.min(1 - t, 1 - r, 1 - n),
        o = (1 - t - a) / (1 - a) || 0,
        u = (1 - r - a) / (1 - a) || 0,
        i = (1 - n - a) / (1 - a) || 0;
      return [o * 100, u * 100, i * 100, a * 100];
    };
    function e4(e, t) {
      return (e[0] - t[0]) ** 2 + (e[1] - t[1]) ** 2 + (e[2] - t[2]) ** 2;
    }
    W.rgb.keyword = function (e) {
      let t = im[e];
      if (t) return t;
      let r = 1 / 0,
        n;
      for (let a of Object.keys(Wr)) {
        let o = Wr[a],
          u = e4(e, o);
        u < r && ((r = u), (n = a));
      }
      return n;
    };
    W.keyword.rgb = function (e) {
      return Wr[e];
    };
    W.rgb.xyz = function (e) {
      let t = e[0] / 255,
        r = e[1] / 255,
        n = e[2] / 255;
      (t = t > 0.04045 ? ((t + 0.055) / 1.055) ** 2.4 : t / 12.92),
        (r = r > 0.04045 ? ((r + 0.055) / 1.055) ** 2.4 : r / 12.92),
        (n = n > 0.04045 ? ((n + 0.055) / 1.055) ** 2.4 : n / 12.92);
      let a = t * 0.4124 + r * 0.3576 + n * 0.1805,
        o = t * 0.2126 + r * 0.7152 + n * 0.0722,
        u = t * 0.0193 + r * 0.1192 + n * 0.9505;
      return [a * 100, o * 100, u * 100];
    };
    W.rgb.lab = function (e) {
      let t = W.rgb.xyz(e),
        r = t[0],
        n = t[1],
        a = t[2];
      (r /= 95.047),
        (n /= 100),
        (a /= 108.883),
        (r = r > 0.008856 ? r ** (1 / 3) : 7.787 * r + 16 / 116),
        (n = n > 0.008856 ? n ** (1 / 3) : 7.787 * n + 16 / 116),
        (a = a > 0.008856 ? a ** (1 / 3) : 7.787 * a + 16 / 116);
      let o = 116 * n - 16,
        u = 500 * (r - n),
        i = 200 * (n - a);
      return [o, u, i];
    };
    W.hsl.rgb = function (e) {
      let t = e[0] / 360,
        r = e[1] / 100,
        n = e[2] / 100,
        a,
        o,
        u;
      if (r === 0) return (u = n * 255), [u, u, u];
      n < 0.5 ? (a = n * (1 + r)) : (a = n + r - n * r);
      let i = 2 * n - a,
        s = [0, 0, 0];
      for (let d = 0; d < 3; d++)
        (o = t + (1 / 3) * -(d - 1)),
          o < 0 && o++,
          o > 1 && o--,
          6 * o < 1
            ? (u = i + (a - i) * 6 * o)
            : 2 * o < 1
            ? (u = a)
            : 3 * o < 2
            ? (u = i + (a - i) * (2 / 3 - o) * 6)
            : (u = i),
          (s[d] = u * 255);
      return s;
    };
    W.hsl.hsv = function (e) {
      let t = e[0],
        r = e[1] / 100,
        n = e[2] / 100,
        a = r,
        o = Math.max(n, 0.01);
      (n *= 2), (r *= n <= 1 ? n : 2 - n), (a *= o <= 1 ? o : 2 - o);
      let u = (n + r) / 2,
        i = n === 0 ? (2 * a) / (o + a) : (2 * r) / (n + r);
      return [t, i * 100, u * 100];
    };
    W.hsv.rgb = function (e) {
      let t = e[0] / 60,
        r = e[1] / 100,
        n = e[2] / 100,
        a = Math.floor(t) % 6,
        o = t - Math.floor(t),
        u = 255 * n * (1 - r),
        i = 255 * n * (1 - r * o),
        s = 255 * n * (1 - r * (1 - o));
      switch (((n *= 255), a)) {
        case 0:
          return [n, s, u];
        case 1:
          return [i, n, u];
        case 2:
          return [u, n, s];
        case 3:
          return [u, i, n];
        case 4:
          return [s, u, n];
        case 5:
          return [n, u, i];
      }
    };
    W.hsv.hsl = function (e) {
      let t = e[0],
        r = e[1] / 100,
        n = e[2] / 100,
        a = Math.max(n, 0.01),
        o,
        u;
      u = (2 - r) * n;
      let i = (2 - r) * a;
      return (o = r * a), (o /= i <= 1 ? i : 2 - i), (o = o || 0), (u /= 2), [t, o * 100, u * 100];
    };
    W.hwb.rgb = function (e) {
      let t = e[0] / 360,
        r = e[1] / 100,
        n = e[2] / 100,
        a = r + n,
        o;
      a > 1 && ((r /= a), (n /= a));
      let u = Math.floor(6 * t),
        i = 1 - n;
      (o = 6 * t - u), u & 1 && (o = 1 - o);
      let s = r + o * (i - r),
        d,
        y,
        A;
      switch (u) {
        default:
        case 6:
        case 0:
          (d = i), (y = s), (A = r);
          break;
        case 1:
          (d = s), (y = i), (A = r);
          break;
        case 2:
          (d = r), (y = i), (A = s);
          break;
        case 3:
          (d = r), (y = s), (A = i);
          break;
        case 4:
          (d = s), (y = r), (A = i);
          break;
        case 5:
          (d = i), (y = r), (A = s);
          break;
      }
      return [d * 255, y * 255, A * 255];
    };
    W.cmyk.rgb = function (e) {
      let t = e[0] / 100,
        r = e[1] / 100,
        n = e[2] / 100,
        a = e[3] / 100,
        o = 1 - Math.min(1, t * (1 - a) + a),
        u = 1 - Math.min(1, r * (1 - a) + a),
        i = 1 - Math.min(1, n * (1 - a) + a);
      return [o * 255, u * 255, i * 255];
    };
    W.xyz.rgb = function (e) {
      let t = e[0] / 100,
        r = e[1] / 100,
        n = e[2] / 100,
        a,
        o,
        u;
      return (
        (a = t * 3.2406 + r * -1.5372 + n * -0.4986),
        (o = t * -0.9689 + r * 1.8758 + n * 0.0415),
        (u = t * 0.0557 + r * -0.204 + n * 1.057),
        (a = a > 0.0031308 ? 1.055 * a ** (1 / 2.4) - 0.055 : a * 12.92),
        (o = o > 0.0031308 ? 1.055 * o ** (1 / 2.4) - 0.055 : o * 12.92),
        (u = u > 0.0031308 ? 1.055 * u ** (1 / 2.4) - 0.055 : u * 12.92),
        (a = Math.min(Math.max(0, a), 1)),
        (o = Math.min(Math.max(0, o), 1)),
        (u = Math.min(Math.max(0, u), 1)),
        [a * 255, o * 255, u * 255]
      );
    };
    W.xyz.lab = function (e) {
      let t = e[0],
        r = e[1],
        n = e[2];
      (t /= 95.047),
        (r /= 100),
        (n /= 108.883),
        (t = t > 0.008856 ? t ** (1 / 3) : 7.787 * t + 16 / 116),
        (r = r > 0.008856 ? r ** (1 / 3) : 7.787 * r + 16 / 116),
        (n = n > 0.008856 ? n ** (1 / 3) : 7.787 * n + 16 / 116);
      let a = 116 * r - 16,
        o = 500 * (t - r),
        u = 200 * (r - n);
      return [a, o, u];
    };
    W.lab.xyz = function (e) {
      let t = e[0],
        r = e[1],
        n = e[2],
        a,
        o,
        u;
      (o = (t + 16) / 116), (a = r / 500 + o), (u = o - n / 200);
      let i = o ** 3,
        s = a ** 3,
        d = u ** 3;
      return (
        (o = i > 0.008856 ? i : (o - 16 / 116) / 7.787),
        (a = s > 0.008856 ? s : (a - 16 / 116) / 7.787),
        (u = d > 0.008856 ? d : (u - 16 / 116) / 7.787),
        (a *= 95.047),
        (o *= 100),
        (u *= 108.883),
        [a, o, u]
      );
    };
    W.lab.lch = function (e) {
      let t = e[0],
        r = e[1],
        n = e[2],
        a;
      (a = (Math.atan2(n, r) * 360) / 2 / Math.PI), a < 0 && (a += 360);
      let u = Math.sqrt(r * r + n * n);
      return [t, u, a];
    };
    W.lch.lab = function (e) {
      let t = e[0],
        r = e[1],
        a = (e[2] / 360) * 2 * Math.PI,
        o = r * Math.cos(a),
        u = r * Math.sin(a);
      return [t, o, u];
    };
    W.rgb.ansi16 = function (e, t = null) {
      let [r, n, a] = e,
        o = t === null ? W.rgb.hsv(e)[2] : t;
      if (((o = Math.round(o / 50)), o === 0)) return 30;
      let u = 30 + ((Math.round(a / 255) << 2) | (Math.round(n / 255) << 1) | Math.round(r / 255));
      return o === 2 && (u += 60), u;
    };
    W.hsv.ansi16 = function (e) {
      return W.rgb.ansi16(W.hsv.rgb(e), e[2]);
    };
    W.rgb.ansi256 = function (e) {
      let t = e[0],
        r = e[1],
        n = e[2];
      return t === r && r === n
        ? t < 8
          ? 16
          : t > 248
          ? 231
          : Math.round(((t - 8) / 247) * 24) + 232
        : 16 + 36 * Math.round((t / 255) * 5) + 6 * Math.round((r / 255) * 5) + Math.round((n / 255) * 5);
    };
    W.ansi16.rgb = function (e) {
      let t = e % 10;
      if (t === 0 || t === 7) return e > 50 && (t += 3.5), (t = (t / 10.5) * 255), [t, t, t];
      let r = (~~(e > 50) + 1) * 0.5,
        n = (t & 1) * r * 255,
        a = ((t >> 1) & 1) * r * 255,
        o = ((t >> 2) & 1) * r * 255;
      return [n, a, o];
    };
    W.ansi256.rgb = function (e) {
      if (e >= 232) {
        let o = (e - 232) * 10 + 8;
        return [o, o, o];
      }
      e -= 16;
      let t,
        r = (Math.floor(e / 36) / 5) * 255,
        n = (Math.floor((t = e % 36) / 6) / 5) * 255,
        a = ((t % 6) / 5) * 255;
      return [r, n, a];
    };
    W.rgb.hex = function (e) {
      let r = (((Math.round(e[0]) & 255) << 16) + ((Math.round(e[1]) & 255) << 8) + (Math.round(e[2]) & 255))
        .toString(16)
        .toUpperCase();
      return "000000".substring(r.length) + r;
    };
    W.hex.rgb = function (e) {
      let t = e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
      if (!t) return [0, 0, 0];
      let r = t[0];
      t[0].length === 3 &&
        (r = r
          .split("")
          .map((i) => i + i)
          .join(""));
      let n = parseInt(r, 16),
        a = (n >> 16) & 255,
        o = (n >> 8) & 255,
        u = n & 255;
      return [a, o, u];
    };
    W.rgb.hcg = function (e) {
      let t = e[0] / 255,
        r = e[1] / 255,
        n = e[2] / 255,
        a = Math.max(Math.max(t, r), n),
        o = Math.min(Math.min(t, r), n),
        u = a - o,
        i,
        s;
      return (
        u < 1 ? (i = o / (1 - u)) : (i = 0),
        u <= 0 ? (s = 0) : a === t ? (s = ((r - n) / u) % 6) : a === r ? (s = 2 + (n - t) / u) : (s = 4 + (t - r) / u),
        (s /= 6),
        (s %= 1),
        [s * 360, u * 100, i * 100]
      );
    };
    W.hsl.hcg = function (e) {
      let t = e[1] / 100,
        r = e[2] / 100,
        n = r < 0.5 ? 2 * t * r : 2 * t * (1 - r),
        a = 0;
      return n < 1 && (a = (r - 0.5 * n) / (1 - n)), [e[0], n * 100, a * 100];
    };
    W.hsv.hcg = function (e) {
      let t = e[1] / 100,
        r = e[2] / 100,
        n = t * r,
        a = 0;
      return n < 1 && (a = (r - n) / (1 - n)), [e[0], n * 100, a * 100];
    };
    W.hcg.rgb = function (e) {
      let t = e[0] / 360,
        r = e[1] / 100,
        n = e[2] / 100;
      if (r === 0) return [n * 255, n * 255, n * 255];
      let a = [0, 0, 0],
        o = (t % 1) * 6,
        u = o % 1,
        i = 1 - u,
        s = 0;
      switch (Math.floor(o)) {
        case 0:
          (a[0] = 1), (a[1] = u), (a[2] = 0);
          break;
        case 1:
          (a[0] = i), (a[1] = 1), (a[2] = 0);
          break;
        case 2:
          (a[0] = 0), (a[1] = 1), (a[2] = u);
          break;
        case 3:
          (a[0] = 0), (a[1] = i), (a[2] = 1);
          break;
        case 4:
          (a[0] = u), (a[1] = 0), (a[2] = 1);
          break;
        default:
          (a[0] = 1), (a[1] = 0), (a[2] = i);
      }
      return (s = (1 - r) * n), [(r * a[0] + s) * 255, (r * a[1] + s) * 255, (r * a[2] + s) * 255];
    };
    W.hcg.hsv = function (e) {
      let t = e[1] / 100,
        r = e[2] / 100,
        n = t + r * (1 - t),
        a = 0;
      return n > 0 && (a = t / n), [e[0], a * 100, n * 100];
    };
    W.hcg.hsl = function (e) {
      let t = e[1] / 100,
        n = (e[2] / 100) * (1 - t) + 0.5 * t,
        a = 0;
      return (
        n > 0 && n < 0.5 ? (a = t / (2 * n)) : n >= 0.5 && n < 1 && (a = t / (2 * (1 - n))), [e[0], a * 100, n * 100]
      );
    };
    W.hcg.hwb = function (e) {
      let t = e[1] / 100,
        r = e[2] / 100,
        n = t + r * (1 - t);
      return [e[0], (n - t) * 100, (1 - n) * 100];
    };
    W.hwb.hcg = function (e) {
      let t = e[1] / 100,
        n = 1 - e[2] / 100,
        a = n - t,
        o = 0;
      return a < 1 && (o = (n - a) / (1 - a)), [e[0], a * 100, o * 100];
    };
    W.apple.rgb = function (e) {
      return [(e[0] / 65535) * 255, (e[1] / 65535) * 255, (e[2] / 65535) * 255];
    };
    W.rgb.apple = function (e) {
      return [(e[0] / 255) * 65535, (e[1] / 255) * 65535, (e[2] / 255) * 65535];
    };
    W.gray.rgb = function (e) {
      return [(e[0] / 100) * 255, (e[0] / 100) * 255, (e[0] / 100) * 255];
    };
    W.gray.hsl = function (e) {
      return [0, 0, e[0]];
    };
    W.gray.hsv = W.gray.hsl;
    W.gray.hwb = function (e) {
      return [0, 100, e[0]];
    };
    W.gray.cmyk = function (e) {
      return [0, 0, 0, e[0]];
    };
    W.gray.lab = function (e) {
      return [e[0], 0, 0];
    };
    W.gray.hex = function (e) {
      let t = Math.round((e[0] / 100) * 255) & 255,
        n = ((t << 16) + (t << 8) + t).toString(16).toUpperCase();
      return "000000".substring(n.length) + n;
    };
    W.rgb.gray = function (e) {
      return [((e[0] + e[1] + e[2]) / 3 / 255) * 100];
    };
  });
  var cm = F((Aee, lm) => {
    l();
    c();
    p();
    var oa = Lu();
    function t4() {
      let e = {},
        t = Object.keys(oa);
      for (let r = t.length, n = 0; n < r; n++) e[t[n]] = { distance: -1, parent: null };
      return e;
    }
    function r4(e) {
      let t = t4(),
        r = [e];
      for (t[e].distance = 0; r.length; ) {
        let n = r.pop(),
          a = Object.keys(oa[n]);
        for (let o = a.length, u = 0; u < o; u++) {
          let i = a[u],
            s = t[i];
          s.distance === -1 && ((s.distance = t[n].distance + 1), (s.parent = n), r.unshift(i));
        }
      }
      return t;
    }
    function n4(e, t) {
      return function (r) {
        return t(e(r));
      };
    }
    function a4(e, t) {
      let r = [t[e].parent, e],
        n = oa[t[e].parent][e],
        a = t[e].parent;
      for (; t[a].parent; ) r.unshift(t[a].parent), (n = n4(oa[t[a].parent][a], n)), (a = t[a].parent);
      return (n.conversion = r), n;
    }
    lm.exports = function (e) {
      let t = r4(e),
        r = {},
        n = Object.keys(t);
      for (let a = n.length, o = 0; o < a; o++) {
        let u = n[o];
        t[u].parent !== null && (r[u] = a4(u, t));
      }
      return r;
    };
  });
  var dm = F((Cee, pm) => {
    l();
    c();
    p();
    var $u = Lu(),
      o4 = cm(),
      ar = {},
      u4 = Object.keys($u);
    function i4(e) {
      let t = function (...r) {
        let n = r[0];
        return n == null ? n : (n.length > 1 && (r = n), e(r));
      };
      return "conversion" in e && (t.conversion = e.conversion), t;
    }
    function s4(e) {
      let t = function (...r) {
        let n = r[0];
        if (n == null) return n;
        n.length > 1 && (r = n);
        let a = e(r);
        if (typeof a == "object") for (let o = a.length, u = 0; u < o; u++) a[u] = Math.round(a[u]);
        return a;
      };
      return "conversion" in e && (t.conversion = e.conversion), t;
    }
    u4.forEach((e) => {
      (ar[e] = {}),
        Object.defineProperty(ar[e], "channels", { value: $u[e].channels }),
        Object.defineProperty(ar[e], "labels", { value: $u[e].labels });
      let t = o4(e);
      Object.keys(t).forEach((n) => {
        let a = t[n];
        (ar[e][n] = s4(a)), (ar[e][n].raw = i4(a));
      });
    });
    pm.exports = ar;
  });
  var hm = F((wee, fm) => {
    l();
    c();
    p();
    var l4 = Me(),
      c4 = function () {
        return l4.Date.now();
      };
    fm.exports = c4;
  });
  var mm = F((Oee, gm) => {
    l();
    c();
    p();
    var p4 = /\s/;
    function d4(e) {
      for (var t = e.length; t-- && p4.test(e.charAt(t)); );
      return t;
    }
    gm.exports = d4;
  });
  var bm = F((kee, ym) => {
    l();
    c();
    p();
    var f4 = mm(),
      h4 = /^\s+/;
    function g4(e) {
      return e && e.slice(0, f4(e) + 1).replace(h4, "");
    }
    ym.exports = g4;
  });
  var vm = F((qee, Dm) => {
    l();
    c();
    p();
    var m4 = bm(),
      Am = ze(),
      y4 = Fr(),
      Em = 0 / 0,
      b4 = /^[-+]0x[0-9a-f]+$/i,
      A4 = /^0b[01]+$/i,
      E4 = /^0o[0-7]+$/i,
      D4 = parseInt;
    function v4(e) {
      if (typeof e == "number") return e;
      if (y4(e)) return Em;
      if (Am(e)) {
        var t = typeof e.valueOf == "function" ? e.valueOf() : e;
        e = Am(t) ? t + "" : t;
      }
      if (typeof e != "string") return e === 0 ? e : +e;
      e = m4(e);
      var r = A4.test(e);
      return r || E4.test(e) ? D4(e.slice(2), r ? 2 : 8) : b4.test(e) ? Em : +e;
    }
    Dm.exports = v4;
  });
  var Fm = F((zee, xm) => {
    l();
    c();
    p();
    var C4 = ze(),
      Uu = hm(),
      Cm = vm(),
      x4 = "Expected a function",
      F4 = Math.max,
      S4 = Math.min;
    function w4(e, t, r) {
      var n,
        a,
        o,
        u,
        i,
        s,
        d = 0,
        y = !1,
        A = !1,
        g = !0;
      if (typeof e != "function") throw new TypeError(x4);
      (t = Cm(t) || 0),
        C4(r) &&
          ((y = !!r.leading),
          (A = "maxWait" in r),
          (o = A ? F4(Cm(r.maxWait) || 0, t) : o),
          (g = "trailing" in r ? !!r.trailing : g));
      function h(j) {
        var I = n,
          U = a;
        return (n = a = void 0), (d = j), (u = e.apply(U, I)), u;
      }
      function E(j) {
        return (d = j), (i = setTimeout(S, t)), y ? h(j) : u;
      }
      function b(j) {
        var I = j - s,
          U = j - d,
          V = t - I;
        return A ? S4(V, o - U) : V;
      }
      function x(j) {
        var I = j - s,
          U = j - d;
        return s === void 0 || I >= t || I < 0 || (A && U >= o);
      }
      function S() {
        var j = Uu();
        if (x(j)) return P(j);
        i = setTimeout(S, b(j));
      }
      function P(j) {
        return (i = void 0), g && n ? h(j) : ((n = a = void 0), u);
      }
      function N() {
        i !== void 0 && clearTimeout(i), (d = 0), (n = s = a = i = void 0);
      }
      function $() {
        return i === void 0 ? u : P(Uu());
      }
      function w() {
        var j = Uu(),
          I = x(j);
        if (((n = arguments), (a = this), (s = j), I)) {
          if (i === void 0) return E(s);
          if (A) return clearTimeout(i), (i = setTimeout(S, t)), h(s);
        }
        return i === void 0 && (i = setTimeout(S, t)), u;
      }
      return (w.cancel = N), (w.flush = $), w;
    }
    xm.exports = w4;
  });
  var wm = F((Vee, Sm) => {
    l();
    c();
    p();
    var B4 = Fm(),
      T4 = ze(),
      _4 = "Expected a function";
    function O4(e, t, r) {
      var n = !0,
        a = !0;
      if (typeof e != "function") throw new TypeError(_4);
      return (
        T4(r) && ((n = "leading" in r ? !!r.leading : n), (a = "trailing" in r ? !!r.trailing : a)),
        B4(e, t, { leading: n, maxWait: t, trailing: a })
      );
    }
    Sm.exports = O4;
  });
  var Pm = {};
  fi(Pm, { ColorControl: () => Rm, default: () => Y4 });
  var Ne,
    _m,
    R4,
    P4,
    I4,
    k4,
    N4,
    j4,
    M4,
    Bm,
    q4,
    L4,
    Om,
    ua,
    $4,
    U4,
    z4,
    zu,
    H4,
    G4,
    ia,
    Tm,
    or,
    W4,
    V4,
    sa,
    K4,
    Rm,
    Y4,
    Im = Xe(() => {
      l();
      c();
      p();
      Ma();
      wt();
      am();
      (Ne = fe(dm(), 1)), (_m = fe(wm(), 1));
      La();
      cr();
      (R4 = q.div({ position: "relative", maxWidth: 250 })),
        (P4 = q(Xr)({ position: "absolute", zIndex: 1, top: 4, left: 4 })),
        (I4 = q.div({
          width: 200,
          margin: 5,
          ".react-colorful__saturation": { borderRadius: "4px 4px 0 0" },
          ".react-colorful__hue": { boxShadow: "inset 0 0 0 1px rgb(0 0 0 / 5%)" },
          ".react-colorful__last-control": { borderRadius: "0 0 4px 4px" },
        })),
        (k4 = q(Ra)(({ theme: e }) => ({ fontFamily: e.typography.fonts.base }))),
        (N4 = q.div({
          display: "grid",
          gridTemplateColumns: "repeat(9, 16px)",
          gap: 6,
          padding: 3,
          marginTop: 5,
          width: 200,
        })),
        (j4 = q.div(({ theme: e, active: t }) => ({
          width: 16,
          height: 16,
          boxShadow: t
            ? `${e.appBorderColor} 0 0 0 1px inset, ${e.textMutedColor}50 0 0 0 4px`
            : `${e.appBorderColor} 0 0 0 1px inset`,
          borderRadius: e.appBorderRadius,
        }))),
        (M4 = `url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')`),
        (Bm = ({ value: e, active: t, onClick: r, style: n, ...a }) => {
          let o = `linear-gradient(${e}, ${e}), ${M4}, linear-gradient(#fff, #fff)`;
          return m.createElement(j4, { ...a, active: t, onClick: r, style: { ...n, backgroundImage: o } });
        }),
        (q4 = q(Be.Input)(({ theme: e }) => ({
          width: "100%",
          paddingLeft: 30,
          paddingRight: 30,
          boxSizing: "border-box",
          fontFamily: e.typography.fonts.base,
        }))),
        (L4 = q(Te)(({ theme: e }) => ({
          position: "absolute",
          zIndex: 1,
          top: 6,
          right: 7,
          width: 20,
          height: 20,
          padding: 4,
          boxSizing: "border-box",
          cursor: "pointer",
          color: e.input.color,
        }))),
        (Om = ((e) => ((e.RGB = "rgb"), (e.HSL = "hsl"), (e.HEX = "hex"), e))(Om || {})),
        (ua = Object.values(Om)),
        ($4 = /\(([0-9]+),\s*([0-9]+)%?,\s*([0-9]+)%?,?\s*([0-9.]+)?\)/),
        (U4 = /^\s*rgba?\(([0-9]+),\s*([0-9]+),\s*([0-9]+),?\s*([0-9.]+)?\)\s*$/i),
        (z4 = /^\s*hsla?\(([0-9]+),\s*([0-9]+)%,\s*([0-9]+)%,?\s*([0-9.]+)?\)\s*$/i),
        (zu = /^\s*#?([0-9a-f]{3}|[0-9a-f]{6})\s*$/i),
        (H4 = /^\s*#?([0-9a-f]{3})\s*$/i),
        (G4 = { hex: em, rgb: nm, hsl: rm }),
        (ia = { hex: "transparent", rgb: "rgba(0, 0, 0, 0)", hsl: "hsla(0, 0%, 0%, 0)" }),
        (Tm = (e) => {
          let t = e?.match($4);
          if (!t) return [0, 0, 0, 1];
          let [, r, n, a, o = 1] = t;
          return [r, n, a, o].map(Number);
        }),
        (or = (e) => {
          if (!e) return;
          let t = !0;
          if (U4.test(e)) {
            let [u, i, s, d] = Tm(e),
              [y, A, g] = Ne.default.rgb.hsl([u, i, s]) || [0, 0, 0];
            return {
              valid: t,
              value: e,
              keyword: Ne.default.rgb.keyword([u, i, s]),
              colorSpace: "rgb",
              rgb: e,
              hsl: `hsla(${y}, ${A}%, ${g}%, ${d})`,
              hex: `#${Ne.default.rgb.hex([u, i, s]).toLowerCase()}`,
            };
          }
          if (z4.test(e)) {
            let [u, i, s, d] = Tm(e),
              [y, A, g] = Ne.default.hsl.rgb([u, i, s]) || [0, 0, 0];
            return {
              valid: t,
              value: e,
              keyword: Ne.default.hsl.keyword([u, i, s]),
              colorSpace: "hsl",
              rgb: `rgba(${y}, ${A}, ${g}, ${d})`,
              hsl: e,
              hex: `#${Ne.default.hsl.hex([u, i, s]).toLowerCase()}`,
            };
          }
          let r = e.replace("#", ""),
            n = Ne.default.keyword.rgb(r) || Ne.default.hex.rgb(r),
            a = Ne.default.rgb.hsl(n),
            o = e;
          if ((/[^#a-f0-9]/i.test(e) ? (o = r) : zu.test(e) && (o = `#${r}`), o.startsWith("#"))) t = zu.test(o);
          else
            try {
              Ne.default.keyword.hex(o);
            } catch {
              t = !1;
            }
          return {
            valid: t,
            value: o,
            keyword: Ne.default.rgb.keyword(n),
            colorSpace: "hex",
            rgb: `rgba(${n[0]}, ${n[1]}, ${n[2]}, 1)`,
            hsl: `hsla(${a[0]}, ${a[1]}%, ${a[2]}%, 1)`,
            hex: o,
          };
        }),
        (W4 = (e, t, r) => {
          if (!e || !t?.valid) return ia[r];
          if (r !== "hex") return t?.[r] || ia[r];
          if (!t.hex.startsWith("#"))
            try {
              return `#${Ne.default.keyword.hex(t.hex)}`;
            } catch {
              return ia.hex;
            }
          let n = t.hex.match(H4);
          if (!n) return zu.test(t.hex) ? t.hex : ia.hex;
          let [a, o, u] = n[1].split("");
          return `#${a}${a}${o}${o}${u}${u}`;
        }),
        (V4 = (e, t) => {
          let [r, n] = ne(e || ""),
            [a, o] = ne(() => or(r)),
            [u, i] = ne(a?.colorSpace || "hex");
          me(() => {
            let A = e || "",
              g = or(A);
            n(A), o(g), i(g?.colorSpace || "hex");
          }, [e]);
          let s = rt(() => W4(r, a, u).toLowerCase(), [r, a, u]),
            d = ge(
              (A) => {
                let g = or(A),
                  h = g?.value || A || "";
                n(h), h === "" && (o(void 0), t(void 0)), g && (o(g), i(g.colorSpace), t(g.value));
              },
              [t]
            ),
            y = ge(() => {
              let A = ua.indexOf(u) + 1;
              A >= ua.length && (A = 0), i(ua[A]);
              let g = a?.[ua[A]] || "";
              n(g), t(g);
            }, [a, u, t]);
          return { value: r, realValue: s, updateValue: d, color: a, colorSpace: u, cycleColorSpace: y };
        }),
        (sa = (e) => e.replace(/\s*/, "").toLowerCase()),
        (K4 = (e, t, r) => {
          let [n, a] = ne(t?.valid ? [t] : []);
          me(() => {
            t === void 0 && a([]);
          }, [t]);
          let o = rt(
              () =>
                (e || [])
                  .map((i) =>
                    typeof i == "string" ? or(i) : i.title ? { ...or(i.color), keyword: i.title } : or(i.color)
                  )
                  .concat(n)
                  .filter(Boolean)
                  .slice(-27),
              [e, n]
            ),
            u = ge(
              (i) => {
                i?.valid && (o.some((s) => sa(s[r]) === sa(i[r])) || a((s) => s.concat(i)));
              },
              [r, o]
            );
          return { presets: o, addPreset: u };
        }),
        (Rm = ({ name: e, value: t, onChange: r, onFocus: n, onBlur: a, presetColors: o, startOpen: u = !1 }) => {
          let i = ge((0, _m.default)(r, 200), [r]),
            { value: s, realValue: d, updateValue: y, color: A, colorSpace: g, cycleColorSpace: h } = V4(t, i),
            { presets: E, addPreset: b } = K4(o, A, g),
            x = G4[g];
          return m.createElement(
            R4,
            null,
            m.createElement(
              P4,
              {
                startOpen: u,
                closeOnOutsideClick: !0,
                onVisibleChange: () => b(A),
                tooltip: m.createElement(
                  I4,
                  null,
                  m.createElement(x, {
                    color: d === "transparent" ? "#000000" : d,
                    onChange: y,
                    onFocus: n,
                    onBlur: a,
                  }),
                  E.length > 0 &&
                    m.createElement(
                      N4,
                      null,
                      E.map((S, P) =>
                        m.createElement(
                          Xr,
                          {
                            key: `${S.value}-${P}`,
                            hasChrome: !1,
                            tooltip: m.createElement(k4, { note: S.keyword || S.value }),
                          },
                          m.createElement(Bm, {
                            value: S[g],
                            active: A && sa(S[g]) === sa(A[g]),
                            onClick: () => y(S.value),
                          })
                        )
                      )
                    )
                ),
              },
              m.createElement(Bm, { value: d, style: { margin: 4 } })
            ),
            m.createElement(q4, {
              id: _e(e),
              value: s,
              onChange: (S) => y(S.target.value),
              onFocus: (S) => S.target.select(),
              placeholder: "Choose color...",
            }),
            s ? m.createElement(L4, { icon: "markup", onClick: h }) : null
          );
        }),
        (Y4 = Rm);
    });
  l();
  c();
  p();
  l();
  c();
  p();
  l();
  c();
  p();
  l();
  c();
  p();
  var ga = "addon-controls",
    ma = "controls";
  wt();
  l();
  c();
  p();
  var yI = __STORYBOOKAPI__,
    {
      ActiveTabs: bI,
      Consumer: AI,
      ManagerContext: EI,
      Provider: DI,
      addons: ba,
      combineParameters: vI,
      controlOrMetaKey: CI,
      controlOrMetaSymbol: xI,
      eventMatchesShortcut: FI,
      eventToShortcut: SI,
      isMacLike: wI,
      isShortcutTaken: BI,
      keyToSymbol: TI,
      merge: _I,
      mockChannel: OI,
      optionOrAltSymbol: RI,
      shortcutMatchesShortcut: PI,
      shortcutToHumanString: II,
      types: bi,
      useAddonState: kI,
      useArgTypes: Aa,
      useArgs: Ai,
      useChannel: NI,
      useGlobalTypes: jI,
      useGlobals: Ei,
      useParameter: Ea,
      useSharedState: MI,
      useStoryPrepared: qI,
      useStorybookApi: LI,
      useStorybookState: Di,
    } = __STORYBOOKAPI__;
  cr();
  l();
  c();
  p();
  Ma();
  wt();
  La();
  cr();
  l();
  c();
  p();
  l();
  c();
  p();
  function Fe() {
    return (
      (Fe = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          }),
      Fe.apply(this, arguments)
    );
  }
  l();
  c();
  p();
  function $a(e) {
    if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
  }
  l();
  c();
  p();
  l();
  c();
  p();
  function Qe(e, t) {
    return (
      (Qe = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (n, a) {
            return (n.__proto__ = a), n;
          }),
      Qe(e, t)
    );
  }
  function Ua(e, t) {
    (e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), Qe(e, t);
  }
  l();
  c();
  p();
  l();
  c();
  p();
  function dr(e) {
    return (
      (dr = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (r) {
            return r.__proto__ || Object.getPrototypeOf(r);
          }),
      dr(e)
    );
  }
  l();
  c();
  p();
  function za(e) {
    return Function.toString.call(e).indexOf("[native code]") !== -1;
  }
  l();
  c();
  p();
  l();
  c();
  p();
  function Ha() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
    } catch {
      return !1;
    }
  }
  function _t(e, t, r) {
    return (
      Ha()
        ? (_t = Reflect.construct.bind())
        : (_t = function (a, o, u) {
            var i = [null];
            i.push.apply(i, o);
            var s = Function.bind.apply(a, i),
              d = new s();
            return u && Qe(d, u.prototype), d;
          }),
      _t.apply(null, arguments)
    );
  }
  function fr(e) {
    var t = typeof Map == "function" ? new Map() : void 0;
    return (
      (fr = function (n) {
        if (n === null || !za(n)) return n;
        if (typeof n != "function") throw new TypeError("Super expression must either be null or a function");
        if (typeof t < "u") {
          if (t.has(n)) return t.get(n);
          t.set(n, a);
        }
        function a() {
          return _t(n, arguments, dr(this).constructor);
        }
        return (
          (a.prototype = Object.create(n.prototype, {
            constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 },
          })),
          Qe(a, n)
        );
      }),
      fr(e)
    );
  }
  l();
  c();
  p();
  var Oe = (function (e) {
    Ua(t, e);
    function t(r) {
      var n;
      if (!0)
        n =
          e.call(
            this,
            "An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#" +
              r +
              " for more information."
          ) || this;
      else for (var a, o, u; u < a; u++);
      return $a(n);
    }
    return t;
  })(fr(Error));
  function wi(e, t) {
    return e.substr(-t.length) === t;
  }
  var E2 = /^([+-]?(?:\d+|\d*\.\d+))([a-z]*|%)$/;
  function Bi(e) {
    if (typeof e != "string") return e;
    var t = e.match(E2);
    return t ? parseFloat(e) : e;
  }
  var D2 = function (t) {
      return function (r, n) {
        n === void 0 && (n = "16px");
        var a = r,
          o = n;
        if (typeof r == "string") {
          if (!wi(r, "px")) throw new Oe(69, t, r);
          a = Bi(r);
        }
        if (typeof n == "string") {
          if (!wi(n, "px")) throw new Oe(70, t, n);
          o = Bi(n);
        }
        if (typeof a == "string") throw new Oe(71, r, t);
        if (typeof o == "string") throw new Oe(72, n, t);
        return "" + a / o + t;
      };
    },
    _i = D2,
    Ak = _i("em");
  var Ek = _i("rem");
  function Ga(e) {
    return Math.round(e * 255);
  }
  function v2(e, t, r) {
    return Ga(e) + "," + Ga(t) + "," + Ga(r);
  }
  function hr(e, t, r, n) {
    if ((n === void 0 && (n = v2), t === 0)) return n(r, r, r);
    var a = (((e % 360) + 360) % 360) / 60,
      o = (1 - Math.abs(2 * r - 1)) * t,
      u = o * (1 - Math.abs((a % 2) - 1)),
      i = 0,
      s = 0,
      d = 0;
    a >= 0 && a < 1
      ? ((i = o), (s = u))
      : a >= 1 && a < 2
      ? ((i = u), (s = o))
      : a >= 2 && a < 3
      ? ((s = o), (d = u))
      : a >= 3 && a < 4
      ? ((s = u), (d = o))
      : a >= 4 && a < 5
      ? ((i = u), (d = o))
      : a >= 5 && a < 6 && ((i = o), (d = u));
    var y = r - o / 2,
      A = i + y,
      g = s + y,
      h = d + y;
    return n(A, g, h);
  }
  var Ti = {
    aliceblue: "f0f8ff",
    antiquewhite: "faebd7",
    aqua: "00ffff",
    aquamarine: "7fffd4",
    azure: "f0ffff",
    beige: "f5f5dc",
    bisque: "ffe4c4",
    black: "000",
    blanchedalmond: "ffebcd",
    blue: "0000ff",
    blueviolet: "8a2be2",
    brown: "a52a2a",
    burlywood: "deb887",
    cadetblue: "5f9ea0",
    chartreuse: "7fff00",
    chocolate: "d2691e",
    coral: "ff7f50",
    cornflowerblue: "6495ed",
    cornsilk: "fff8dc",
    crimson: "dc143c",
    cyan: "00ffff",
    darkblue: "00008b",
    darkcyan: "008b8b",
    darkgoldenrod: "b8860b",
    darkgray: "a9a9a9",
    darkgreen: "006400",
    darkgrey: "a9a9a9",
    darkkhaki: "bdb76b",
    darkmagenta: "8b008b",
    darkolivegreen: "556b2f",
    darkorange: "ff8c00",
    darkorchid: "9932cc",
    darkred: "8b0000",
    darksalmon: "e9967a",
    darkseagreen: "8fbc8f",
    darkslateblue: "483d8b",
    darkslategray: "2f4f4f",
    darkslategrey: "2f4f4f",
    darkturquoise: "00ced1",
    darkviolet: "9400d3",
    deeppink: "ff1493",
    deepskyblue: "00bfff",
    dimgray: "696969",
    dimgrey: "696969",
    dodgerblue: "1e90ff",
    firebrick: "b22222",
    floralwhite: "fffaf0",
    forestgreen: "228b22",
    fuchsia: "ff00ff",
    gainsboro: "dcdcdc",
    ghostwhite: "f8f8ff",
    gold: "ffd700",
    goldenrod: "daa520",
    gray: "808080",
    green: "008000",
    greenyellow: "adff2f",
    grey: "808080",
    honeydew: "f0fff0",
    hotpink: "ff69b4",
    indianred: "cd5c5c",
    indigo: "4b0082",
    ivory: "fffff0",
    khaki: "f0e68c",
    lavender: "e6e6fa",
    lavenderblush: "fff0f5",
    lawngreen: "7cfc00",
    lemonchiffon: "fffacd",
    lightblue: "add8e6",
    lightcoral: "f08080",
    lightcyan: "e0ffff",
    lightgoldenrodyellow: "fafad2",
    lightgray: "d3d3d3",
    lightgreen: "90ee90",
    lightgrey: "d3d3d3",
    lightpink: "ffb6c1",
    lightsalmon: "ffa07a",
    lightseagreen: "20b2aa",
    lightskyblue: "87cefa",
    lightslategray: "789",
    lightslategrey: "789",
    lightsteelblue: "b0c4de",
    lightyellow: "ffffe0",
    lime: "0f0",
    limegreen: "32cd32",
    linen: "faf0e6",
    magenta: "f0f",
    maroon: "800000",
    mediumaquamarine: "66cdaa",
    mediumblue: "0000cd",
    mediumorchid: "ba55d3",
    mediumpurple: "9370db",
    mediumseagreen: "3cb371",
    mediumslateblue: "7b68ee",
    mediumspringgreen: "00fa9a",
    mediumturquoise: "48d1cc",
    mediumvioletred: "c71585",
    midnightblue: "191970",
    mintcream: "f5fffa",
    mistyrose: "ffe4e1",
    moccasin: "ffe4b5",
    navajowhite: "ffdead",
    navy: "000080",
    oldlace: "fdf5e6",
    olive: "808000",
    olivedrab: "6b8e23",
    orange: "ffa500",
    orangered: "ff4500",
    orchid: "da70d6",
    palegoldenrod: "eee8aa",
    palegreen: "98fb98",
    paleturquoise: "afeeee",
    palevioletred: "db7093",
    papayawhip: "ffefd5",
    peachpuff: "ffdab9",
    peru: "cd853f",
    pink: "ffc0cb",
    plum: "dda0dd",
    powderblue: "b0e0e6",
    purple: "800080",
    rebeccapurple: "639",
    red: "f00",
    rosybrown: "bc8f8f",
    royalblue: "4169e1",
    saddlebrown: "8b4513",
    salmon: "fa8072",
    sandybrown: "f4a460",
    seagreen: "2e8b57",
    seashell: "fff5ee",
    sienna: "a0522d",
    silver: "c0c0c0",
    skyblue: "87ceeb",
    slateblue: "6a5acd",
    slategray: "708090",
    slategrey: "708090",
    snow: "fffafa",
    springgreen: "00ff7f",
    steelblue: "4682b4",
    tan: "d2b48c",
    teal: "008080",
    thistle: "d8bfd8",
    tomato: "ff6347",
    turquoise: "40e0d0",
    violet: "ee82ee",
    wheat: "f5deb3",
    white: "fff",
    whitesmoke: "f5f5f5",
    yellow: "ff0",
    yellowgreen: "9acd32",
  };
  function C2(e) {
    if (typeof e != "string") return e;
    var t = e.toLowerCase();
    return Ti[t] ? "#" + Ti[t] : e;
  }
  var x2 = /^#[a-fA-F0-9]{6}$/,
    F2 = /^#[a-fA-F0-9]{8}$/,
    S2 = /^#[a-fA-F0-9]{3}$/,
    w2 = /^#[a-fA-F0-9]{4}$/,
    Wa = /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,
    B2 = /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,
    T2 = /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,
    _2 =
      /^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
  function Ot(e) {
    if (typeof e != "string") throw new Oe(3);
    var t = C2(e);
    if (t.match(x2))
      return {
        red: parseInt("" + t[1] + t[2], 16),
        green: parseInt("" + t[3] + t[4], 16),
        blue: parseInt("" + t[5] + t[6], 16),
      };
    if (t.match(F2)) {
      var r = parseFloat((parseInt("" + t[7] + t[8], 16) / 255).toFixed(2));
      return {
        red: parseInt("" + t[1] + t[2], 16),
        green: parseInt("" + t[3] + t[4], 16),
        blue: parseInt("" + t[5] + t[6], 16),
        alpha: r,
      };
    }
    if (t.match(S2))
      return {
        red: parseInt("" + t[1] + t[1], 16),
        green: parseInt("" + t[2] + t[2], 16),
        blue: parseInt("" + t[3] + t[3], 16),
      };
    if (t.match(w2)) {
      var n = parseFloat((parseInt("" + t[4] + t[4], 16) / 255).toFixed(2));
      return {
        red: parseInt("" + t[1] + t[1], 16),
        green: parseInt("" + t[2] + t[2], 16),
        blue: parseInt("" + t[3] + t[3], 16),
        alpha: n,
      };
    }
    var a = Wa.exec(t);
    if (a) return { red: parseInt("" + a[1], 10), green: parseInt("" + a[2], 10), blue: parseInt("" + a[3], 10) };
    var o = B2.exec(t.substring(0, 50));
    if (o)
      return {
        red: parseInt("" + o[1], 10),
        green: parseInt("" + o[2], 10),
        blue: parseInt("" + o[3], 10),
        alpha: parseFloat("" + o[4]) > 1 ? parseFloat("" + o[4]) / 100 : parseFloat("" + o[4]),
      };
    var u = T2.exec(t);
    if (u) {
      var i = parseInt("" + u[1], 10),
        s = parseInt("" + u[2], 10) / 100,
        d = parseInt("" + u[3], 10) / 100,
        y = "rgb(" + hr(i, s, d) + ")",
        A = Wa.exec(y);
      if (!A) throw new Oe(4, t, y);
      return { red: parseInt("" + A[1], 10), green: parseInt("" + A[2], 10), blue: parseInt("" + A[3], 10) };
    }
    var g = _2.exec(t.substring(0, 50));
    if (g) {
      var h = parseInt("" + g[1], 10),
        E = parseInt("" + g[2], 10) / 100,
        b = parseInt("" + g[3], 10) / 100,
        x = "rgb(" + hr(h, E, b) + ")",
        S = Wa.exec(x);
      if (!S) throw new Oe(4, t, x);
      return {
        red: parseInt("" + S[1], 10),
        green: parseInt("" + S[2], 10),
        blue: parseInt("" + S[3], 10),
        alpha: parseFloat("" + g[4]) > 1 ? parseFloat("" + g[4]) / 100 : parseFloat("" + g[4]),
      };
    }
    throw new Oe(5);
  }
  function O2(e) {
    var t = e.red / 255,
      r = e.green / 255,
      n = e.blue / 255,
      a = Math.max(t, r, n),
      o = Math.min(t, r, n),
      u = (a + o) / 2;
    if (a === o)
      return e.alpha !== void 0
        ? { hue: 0, saturation: 0, lightness: u, alpha: e.alpha }
        : { hue: 0, saturation: 0, lightness: u };
    var i,
      s = a - o,
      d = u > 0.5 ? s / (2 - a - o) : s / (a + o);
    switch (a) {
      case t:
        i = (r - n) / s + (r < n ? 6 : 0);
        break;
      case r:
        i = (n - t) / s + 2;
        break;
      default:
        i = (t - r) / s + 4;
        break;
    }
    return (
      (i *= 60),
      e.alpha !== void 0
        ? { hue: i, saturation: d, lightness: u, alpha: e.alpha }
        : { hue: i, saturation: d, lightness: u }
    );
  }
  function nt(e) {
    return O2(Ot(e));
  }
  var R2 = function (t) {
      return t.length === 7 && t[1] === t[2] && t[3] === t[4] && t[5] === t[6] ? "#" + t[1] + t[3] + t[5] : t;
    },
    Ka = R2;
  function gt(e) {
    var t = e.toString(16);
    return t.length === 1 ? "0" + t : t;
  }
  function Va(e) {
    return gt(Math.round(e * 255));
  }
  function P2(e, t, r) {
    return Ka("#" + Va(e) + Va(t) + Va(r));
  }
  function Jr(e, t, r) {
    return hr(e, t, r, P2);
  }
  function I2(e, t, r) {
    if (typeof e == "number" && typeof t == "number" && typeof r == "number") return Jr(e, t, r);
    if (typeof e == "object" && t === void 0 && r === void 0) return Jr(e.hue, e.saturation, e.lightness);
    throw new Oe(1);
  }
  function k2(e, t, r, n) {
    if (typeof e == "number" && typeof t == "number" && typeof r == "number" && typeof n == "number")
      return n >= 1 ? Jr(e, t, r) : "rgba(" + hr(e, t, r) + "," + n + ")";
    if (typeof e == "object" && t === void 0 && r === void 0 && n === void 0)
      return e.alpha >= 1
        ? Jr(e.hue, e.saturation, e.lightness)
        : "rgba(" + hr(e.hue, e.saturation, e.lightness) + "," + e.alpha + ")";
    throw new Oe(2);
  }
  function Ya(e, t, r) {
    if (typeof e == "number" && typeof t == "number" && typeof r == "number") return Ka("#" + gt(e) + gt(t) + gt(r));
    if (typeof e == "object" && t === void 0 && r === void 0) return Ka("#" + gt(e.red) + gt(e.green) + gt(e.blue));
    throw new Oe(6);
  }
  function $e(e, t, r, n) {
    if (typeof e == "string" && typeof t == "number") {
      var a = Ot(e);
      return "rgba(" + a.red + "," + a.green + "," + a.blue + "," + t + ")";
    } else {
      if (typeof e == "number" && typeof t == "number" && typeof r == "number" && typeof n == "number")
        return n >= 1 ? Ya(e, t, r) : "rgba(" + e + "," + t + "," + r + "," + n + ")";
      if (typeof e == "object" && t === void 0 && r === void 0 && n === void 0)
        return e.alpha >= 1
          ? Ya(e.red, e.green, e.blue)
          : "rgba(" + e.red + "," + e.green + "," + e.blue + "," + e.alpha + ")";
    }
    throw new Oe(7);
  }
  var N2 = function (t) {
      return (
        typeof t.red == "number" &&
        typeof t.green == "number" &&
        typeof t.blue == "number" &&
        (typeof t.alpha != "number" || typeof t.alpha > "u")
      );
    },
    j2 = function (t) {
      return (
        typeof t.red == "number" &&
        typeof t.green == "number" &&
        typeof t.blue == "number" &&
        typeof t.alpha == "number"
      );
    },
    M2 = function (t) {
      return (
        typeof t.hue == "number" &&
        typeof t.saturation == "number" &&
        typeof t.lightness == "number" &&
        (typeof t.alpha != "number" || typeof t.alpha > "u")
      );
    },
    q2 = function (t) {
      return (
        typeof t.hue == "number" &&
        typeof t.saturation == "number" &&
        typeof t.lightness == "number" &&
        typeof t.alpha == "number"
      );
    };
  function at(e) {
    if (typeof e != "object") throw new Oe(8);
    if (j2(e)) return $e(e);
    if (N2(e)) return Ya(e);
    if (q2(e)) return k2(e);
    if (M2(e)) return I2(e);
    throw new Oe(8);
  }
  function Oi(e, t, r) {
    return function () {
      var a = r.concat(Array.prototype.slice.call(arguments));
      return a.length >= t ? e.apply(this, a) : Oi(e, t, a);
    };
  }
  function Ie(e) {
    return Oi(e, e.length, []);
  }
  function L2(e, t) {
    if (t === "transparent") return t;
    var r = nt(t);
    return at(Fe({}, r, { hue: r.hue + parseFloat(e) }));
  }
  var Dk = Ie(L2);
  function Rt(e, t, r) {
    return Math.max(e, Math.min(t, r));
  }
  function $2(e, t) {
    if (t === "transparent") return t;
    var r = nt(t);
    return at(Fe({}, r, { lightness: Rt(0, 1, r.lightness - parseFloat(e)) }));
  }
  var U2 = Ie($2),
    Ue = U2;
  function z2(e, t) {
    if (t === "transparent") return t;
    var r = nt(t);
    return at(Fe({}, r, { saturation: Rt(0, 1, r.saturation - parseFloat(e)) }));
  }
  var vk = Ie(z2);
  function H2(e, t) {
    if (t === "transparent") return t;
    var r = nt(t);
    return at(Fe({}, r, { lightness: Rt(0, 1, r.lightness + parseFloat(e)) }));
  }
  var G2 = Ie(H2),
    ot = G2;
  function W2(e, t, r) {
    if (t === "transparent") return r;
    if (r === "transparent") return t;
    if (e === 0) return r;
    var n = Ot(t),
      a = Fe({}, n, { alpha: typeof n.alpha == "number" ? n.alpha : 1 }),
      o = Ot(r),
      u = Fe({}, o, { alpha: typeof o.alpha == "number" ? o.alpha : 1 }),
      i = a.alpha - u.alpha,
      s = parseFloat(e) * 2 - 1,
      d = s * i === -1 ? s : s + i,
      y = 1 + s * i,
      A = (d / y + 1) / 2,
      g = 1 - A,
      h = {
        red: Math.floor(a.red * A + u.red * g),
        green: Math.floor(a.green * A + u.green * g),
        blue: Math.floor(a.blue * A + u.blue * g),
        alpha: a.alpha * parseFloat(e) + u.alpha * (1 - parseFloat(e)),
      };
    return $e(h);
  }
  var V2 = Ie(W2),
    Ri = V2;
  function K2(e, t) {
    if (t === "transparent") return t;
    var r = Ot(t),
      n = typeof r.alpha == "number" ? r.alpha : 1,
      a = Fe({}, r, { alpha: Rt(0, 1, (n * 100 + parseFloat(e) * 100) / 100) });
    return $e(a);
  }
  var Y2 = Ie(K2),
    gr = Y2;
  function X2(e, t) {
    if (t === "transparent") return t;
    var r = nt(t);
    return at(Fe({}, r, { saturation: Rt(0, 1, r.saturation + parseFloat(e)) }));
  }
  var Ck = Ie(X2);
  function J2(e, t) {
    return t === "transparent" ? t : at(Fe({}, nt(t), { hue: parseFloat(e) }));
  }
  var xk = Ie(J2);
  function Q2(e, t) {
    return t === "transparent" ? t : at(Fe({}, nt(t), { lightness: parseFloat(e) }));
  }
  var Fk = Ie(Q2);
  function Z2(e, t) {
    return t === "transparent" ? t : at(Fe({}, nt(t), { saturation: parseFloat(e) }));
  }
  var Sk = Ie(Z2);
  function e1(e, t) {
    return t === "transparent" ? t : Ri(parseFloat(e), "rgb(0, 0, 0)", t);
  }
  var wk = Ie(e1);
  function t1(e, t) {
    return t === "transparent" ? t : Ri(parseFloat(e), "rgb(255, 255, 255)", t);
  }
  var Bk = Ie(t1);
  function r1(e, t) {
    if (t === "transparent") return t;
    var r = Ot(t),
      n = typeof r.alpha == "number" ? r.alpha : 1,
      a = Fe({}, r, { alpha: Rt(0, 1, +(n * 100 - parseFloat(e) * 100).toFixed(2) / 100) });
    return $e(a);
  }
  var n1 = Ie(r1),
    pe = n1;
  l();
  c();
  p();
  var oe = (() => {
    let e;
    return (
      typeof window < "u"
        ? (e = window)
        : typeof globalThis < "u"
        ? (e = globalThis)
        : typeof window < "u"
        ? (e = window)
        : typeof self < "u"
        ? (e = self)
        : (e = {}),
      e
    );
  })();
  var Ym = fe(Po(), 1);
  l();
  c();
  p();
  var Kx = Object.create,
    Wp = Object.defineProperty,
    Yx = Object.getOwnPropertyDescriptor,
    Xx = Object.getOwnPropertyNames,
    Jx = Object.getPrototypeOf,
    Qx = Object.prototype.hasOwnProperty,
    Zx = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
    eF = (e, t, r, n) => {
      if ((t && typeof t == "object") || typeof t == "function")
        for (let a of Xx(t))
          !Qx.call(e, a) && a !== r && Wp(e, a, { get: () => t[a], enumerable: !(n = Yx(t, a)) || n.enumerable });
      return e;
    },
    tF = (e, t, r) => (
      (r = e != null ? Kx(Jx(e)) : {}),
      eF(t || !e || !e.__esModule ? Wp(r, "default", { value: e, enumerable: !0 }) : r, e)
    ),
    rF = Zx((e) => {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.isEqual = (function () {
          var t = Object.prototype.toString,
            r = Object.getPrototypeOf,
            n = Object.getOwnPropertySymbols
              ? function (a) {
                  return Object.keys(a).concat(Object.getOwnPropertySymbols(a));
                }
              : Object.keys;
          return function (a, o) {
            return (function u(i, s, d) {
              var y,
                A,
                g,
                h = t.call(i),
                E = t.call(s);
              if (i === s) return !0;
              if (i == null || s == null) return !1;
              if (d.indexOf(i) > -1 && d.indexOf(s) > -1) return !0;
              if (
                (d.push(i, s),
                h != E ||
                  ((y = n(i)),
                  (A = n(s)),
                  y.length != A.length ||
                    y.some(function (b) {
                      return !u(i[b], s[b], d);
                    })))
              )
                return !1;
              switch (h.slice(8, -1)) {
                case "Symbol":
                  return i.valueOf() == s.valueOf();
                case "Date":
                case "Number":
                  return +i == +s || (+i != +i && +s != +s);
                case "RegExp":
                case "Function":
                case "String":
                case "Boolean":
                  return "" + i == "" + s;
                case "Set":
                case "Map":
                  (y = i.entries()), (A = s.entries());
                  do if (!u((g = y.next()).value, A.next().value, d)) return !1;
                  while (!g.done);
                  return !0;
                case "ArrayBuffer":
                  (i = new Uint8Array(i)), (s = new Uint8Array(s));
                case "DataView":
                  (i = new Uint8Array(i.buffer)), (s = new Uint8Array(s.buffer));
                case "Float32Array":
                case "Float64Array":
                case "Int8Array":
                case "Int16Array":
                case "Int32Array":
                case "Uint8Array":
                case "Uint16Array":
                case "Uint32Array":
                case "Uint8ClampedArray":
                case "Arguments":
                case "Array":
                  if (i.length != s.length) return !1;
                  for (g = 0; g < i.length; g++)
                    if ((g in i || g in s) && (g in i != g in s || !u(i[g], s[g], d))) return !1;
                  return !0;
                case "Object":
                  return u(r(i), r(s), d);
                default:
                  return !1;
              }
            })(a, o, []);
          };
        })());
    });
  var Gp = tF(rF()),
    Vp = (e) => e.map((t) => typeof t < "u").filter(Boolean).length,
    nF = (e, t) => {
      let { exists: r, eq: n, neq: a, truthy: o } = e;
      if (Vp([r, n, a, o]) > 1)
        throw new Error(`Invalid conditional test ${JSON.stringify({ exists: r, eq: n, neq: a })}`);
      if (typeof n < "u") return (0, Gp.isEqual)(t, n);
      if (typeof a < "u") return !(0, Gp.isEqual)(t, a);
      if (typeof r < "u") {
        let u = typeof t < "u";
        return r ? u : !u;
      }
      return typeof o > "u" || o ? !!t : !t;
    },
    Io = (e, t, r) => {
      if (!e.if) return !0;
      let { arg: n, global: a } = e.if;
      if (Vp([n, a]) !== 1) throw new Error(`Invalid conditional value ${JSON.stringify({ arg: n, global: a })}`);
      let o = n ? t[n] : r[a];
      return nF(e.if, o);
    };
  l();
  c();
  p();
  var nG = __STORYBOOKCLIENTLOGGER__,
    { deprecate: ye, logger: qe, once: Dn, pretty: aF } = __STORYBOOKCLIENTLOGGER__;
  l();
  c();
  p();
  wt();
  function At() {
    return (
      (At =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
      At.apply(this, arguments)
    );
  }
  var oF = ["children", "options"],
    Kp = [
      "allowFullScreen",
      "allowTransparency",
      "autoComplete",
      "autoFocus",
      "autoPlay",
      "cellPadding",
      "cellSpacing",
      "charSet",
      "className",
      "classId",
      "colSpan",
      "contentEditable",
      "contextMenu",
      "crossOrigin",
      "encType",
      "formAction",
      "formEncType",
      "formMethod",
      "formNoValidate",
      "formTarget",
      "frameBorder",
      "hrefLang",
      "inputMode",
      "keyParams",
      "keyType",
      "marginHeight",
      "marginWidth",
      "maxLength",
      "mediaGroup",
      "minLength",
      "noValidate",
      "radioGroup",
      "readOnly",
      "rowSpan",
      "spellCheck",
      "srcDoc",
      "srcLang",
      "srcSet",
      "tabIndex",
      "useMap",
    ].reduce((e, t) => ((e[t.toLowerCase()] = t), e), { for: "htmlFor" }),
    Yp = { amp: "&", apos: "'", gt: ">", lt: "<", nbsp: "\xA0", quot: "\u201C" },
    uF = ["style", "script"],
    iF = /([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi,
    sF = /mailto:/i,
    lF = /\n{2,}$/,
    td = /^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/,
    cF = /^ *> ?/gm,
    pF = /^ {2,}\n/,
    dF = /^(?:( *[-*_])){3,} *(?:\n *)+\n/,
    rd = /^\s*(`{3,}|~{3,}) *(\S+)?([^\n]*?)?\n([\s\S]+?)\s*\1 *(?:\n *)*\n?/,
    nd = /^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/,
    fF = /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,
    hF = /^(?:\n *)*\n/,
    gF = /\r\n?/g,
    mF = /^\[\^([^\]]+)](:.*)\n/,
    yF = /^\[\^([^\]]+)]/,
    bF = /\f/g,
    AF = /^\s*?\[(x|\s)\]/,
    ad = /^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,
    od = /^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/,
    qo =
      /^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?([^>]*)\/{0}>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1)[\s\S])*?)<\/\1>\n*/i,
    EF = /&([a-zA-Z]+);/g,
    ud = /^<!--[\s\S]*?(?:-->)/,
    DF = /^(data|aria|x)-[a-z_][a-z\d_.-]*$/,
    Lo = /^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i,
    vF = /^\{.*\}$/,
    CF = /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,
    xF = /^<([^ >]+@[^ >]+)>/,
    FF = /^<([^ >]+:\/[^ >]+)>/,
    SF = /-([a-z])?/gi,
    id = /^(.*\|?.*)\n *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*)\n?/,
    wF = /^\[([^\]]*)\]:\s+<?([^\s>]+)>?\s*("([^"]*)")?/,
    BF = /^!\[([^\]]*)\] ?\[([^\]]*)\]/,
    TF = /^\[([^\]]*)\] ?\[([^\]]*)\]/,
    _F = /(\[|\])/g,
    OF = /(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/,
    RF = /\t/g,
    PF = /^ *\| */,
    IF = /(^ *\||\| *$)/g,
    kF = / *$/,
    NF = /^ *:-+: *$/,
    jF = /^ *:-+ *$/,
    MF = /^ *-+: *$/,
    qF = /^([*_])\1((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1\1(?!\1)/,
    LF = /^([*_])((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1(?!\1|\w)/,
    $F = /^==((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)==/,
    UF = /^~~((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)~~/,
    zF = /^\\([^0-9A-Za-z\s])/,
    HF = /^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i,
    GF = /^\n+/,
    WF = /^([ \t]*)/,
    VF = /\\([^\\])/g,
    Xp = / *\n+$/,
    KF = /(?:^|\n)( *)$/,
    $o = "(?:\\d+\\.)",
    Uo = "(?:[*+-])";
  function sd(e) {
    return "( *)(" + (e === 1 ? $o : Uo) + ") +";
  }
  var ld = sd(1),
    cd = sd(2);
  function pd(e) {
    return new RegExp("^" + (e === 1 ? ld : cd));
  }
  var YF = pd(1),
    XF = pd(2);
  function dd(e) {
    return new RegExp(
      "^" + (e === 1 ? ld : cd) + "[^\\n]*(?:\\n(?!\\1" + (e === 1 ? $o : Uo) + " )[^\\n]*)*(\\n|$)",
      "gm"
    );
  }
  var fd = dd(1),
    hd = dd(2);
  function gd(e) {
    let t = e === 1 ? $o : Uo;
    return new RegExp("^( *)(" + t + ") [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1" + t + " (?!" + t + " ))\\n*|\\s*\\n*$)");
  }
  var md = gd(1),
    yd = gd(2);
  function Jp(e, t) {
    let r = t === 1,
      n = r ? md : yd,
      a = r ? fd : hd,
      o = r ? YF : XF;
    return {
      t(u, i, s) {
        let d = KF.exec(s);
        return d && (i.o || (!i._ && !i.u)) ? n.exec((u = d[1] + u)) : null;
      },
      i: te.HIGH,
      l(u, i, s) {
        let d = r ? +u[2] : void 0,
          y = u[0]
            .replace(
              lF,
              `
`
            )
            .match(a),
          A = !1;
        return {
          p: y.map(function (g, h) {
            let E = o.exec(g)[0].length,
              b = new RegExp("^ {1," + E + "}", "gm"),
              x = g.replace(b, "").replace(o, ""),
              S = h === y.length - 1,
              P =
                x.indexOf(`

`) !== -1 ||
                (S && A);
            A = P;
            let N = s._,
              $ = s.o,
              w;
            (s.o = !0),
              P
                ? ((s._ = !1),
                  (w = x.replace(
                    Xp,
                    `

`
                  )))
                : ((s._ = !0), (w = x.replace(Xp, "")));
            let j = i(w, s);
            return (s._ = N), (s.o = $), j;
          }),
          m: r,
          g: d,
        };
      },
      h: (u, i, s) =>
        e(
          u.m ? "ol" : "ul",
          { key: s.k, start: u.g },
          u.p.map(function (d, y) {
            return e("li", { key: y }, i(d, s));
          })
        ),
    };
  }
  var JF = /^\[([^\]]*)]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/,
    QF = /^!\[([^\]]*)]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/,
    bd = [td, rd, nd, ad, od, ud, id, fd, md, hd, yd],
    ZF = [...bd, /^[^\n]+(?:  \n|\n{2,})/, qo, Lo];
  function eS(e) {
    return e
      .replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g, "a")
      .replace(/[çÇ]/g, "c")
      .replace(/[ðÐ]/g, "d")
      .replace(/[ÈÉÊËéèêë]/g, "e")
      .replace(/[ÏïÎîÍíÌì]/g, "i")
      .replace(/[Ññ]/g, "n")
      .replace(/[øØœŒÕõÔôÓóÒò]/g, "o")
      .replace(/[ÜüÛûÚúÙù]/g, "u")
      .replace(/[ŸÿÝý]/g, "y")
      .replace(/[^a-z0-9- ]/gi, "")
      .replace(/ /gi, "-")
      .toLowerCase();
  }
  function tS(e) {
    return MF.test(e) ? "right" : NF.test(e) ? "center" : jF.test(e) ? "left" : null;
  }
  function Qp(e, t, r) {
    let n = r.v;
    r.v = !0;
    let a = t(e.trim(), r);
    r.v = n;
    let o = [[]];
    return (
      a.forEach(function (u, i) {
        u.type === "tableSeparator"
          ? i !== 0 && i !== a.length - 1 && o.push([])
          : (u.type !== "text" ||
              (a[i + 1] != null && a[i + 1].type !== "tableSeparator") ||
              (u.$ = u.$.replace(kF, "")),
            o[o.length - 1].push(u));
      }),
      o
    );
  }
  function rS(e, t, r) {
    r._ = !0;
    let n = Qp(e[1], t, r),
      a = e[2].replace(IF, "").split("|").map(tS),
      o = (function (u, i, s) {
        return u
          .trim()
          .split(
            `
`
          )
          .map(function (d) {
            return Qp(d, i, s);
          });
      })(e[3], t, r);
    return (r._ = !1), { S: a, A: o, L: n, type: "table" };
  }
  function Zp(e, t) {
    return e.S[t] == null ? {} : { textAlign: e.S[t] };
  }
  function it(e) {
    return function (t, r) {
      return r._ ? e.exec(t) : null;
    };
  }
  function st(e) {
    return function (t, r) {
      return r._ || r.u ? e.exec(t) : null;
    };
  }
  function et(e) {
    return function (t, r) {
      return r._ || r.u ? null : e.exec(t);
    };
  }
  function wr(e) {
    return function (t) {
      return e.exec(t);
    };
  }
  function nS(e, t, r) {
    if (
      t._ ||
      t.u ||
      (r &&
        !r.endsWith(`
`))
    )
      return null;
    let n = "";
    e.split(
      `
`
    ).every(
      (o) =>
        !bd.some((u) => u.test(o)) &&
        ((n +=
          o +
          `
`),
        o.trim())
    );
    let a = n.trimEnd();
    return a == "" ? null : [n, a];
  }
  function Ut(e) {
    try {
      if (
        decodeURIComponent(e)
          .replace(/[^A-Za-z0-9/:]/g, "")
          .match(/^\s*(javascript|vbscript|data(?!:image)):/i)
      )
        return null;
    } catch {
      return null;
    }
    return e;
  }
  function ed(e) {
    return e.replace(VF, "$1");
  }
  function vn(e, t, r) {
    let n = r._ || !1,
      a = r.u || !1;
    (r._ = !0), (r.u = !0);
    let o = e(t, r);
    return (r._ = n), (r.u = a), o;
  }
  function aS(e, t, r) {
    let n = r._ || !1,
      a = r.u || !1;
    (r._ = !1), (r.u = !0);
    let o = e(t, r);
    return (r._ = n), (r.u = a), o;
  }
  function oS(e, t, r) {
    return (
      (r._ = !1),
      e(
        t +
          `

`,
        r
      )
    );
  }
  var ko = (e, t, r) => ({ $: vn(t, e[1], r) });
  function No() {
    return {};
  }
  function jo() {
    return null;
  }
  function uS(...e) {
    return e.filter(Boolean).join(" ");
  }
  function Mo(e, t, r) {
    let n = e,
      a = t.split(".");
    for (; a.length && ((n = n[a[0]]), n !== void 0); ) a.shift();
    return n || r;
  }
  var te;
  function iS(e, t = {}) {
    (t.overrides = t.overrides || {}),
      (t.slugify = t.slugify || eS),
      (t.namedCodesToUnicode = t.namedCodesToUnicode ? At({}, Yp, t.namedCodesToUnicode) : Yp);
    let r = t.createElement || ya;
    function n(h, E, ...b) {
      let x = Mo(t.overrides, `${h}.props`, {});
      return r(
        (function (S, P) {
          let N = Mo(P, S);
          return N
            ? typeof N == "function" || (typeof N == "object" && "render" in N)
              ? N
              : Mo(P, `${S}.component`, S)
            : S;
        })(h, t.overrides),
        At({}, E, x, { className: uS(E?.className, x.className) || void 0 }),
        ...b
      );
    }
    function a(h) {
      let E = !1;
      t.forceInline ? (E = !0) : t.forceBlock || (E = OF.test(h) === !1);
      let b = y(
        d(
          E
            ? h
            : `${h.trimEnd().replace(GF, "")}

`,
          { _: E }
        )
      );
      for (; typeof b[b.length - 1] == "string" && !b[b.length - 1].trim(); ) b.pop();
      if (t.wrapper === null) return b;
      let x = t.wrapper || (E ? "span" : "div"),
        S;
      if (b.length > 1 || t.forceWrapper) S = b;
      else {
        if (b.length === 1) return (S = b[0]), typeof S == "string" ? n("span", { key: "outer" }, S) : S;
        S = null;
      }
      return ya(x, { key: "outer" }, S);
    }
    function o(h) {
      let E = h.match(iF);
      return E
        ? E.reduce(function (b, x, S) {
            let P = x.indexOf("=");
            if (P !== -1) {
              let N = (function (I) {
                  return (
                    I.indexOf("-") !== -1 &&
                      I.match(DF) === null &&
                      (I = I.replace(SF, function (U, V) {
                        return V.toUpperCase();
                      })),
                    I
                  );
                })(x.slice(0, P)).trim(),
                $ = (function (I) {
                  let U = I[0];
                  return (U === '"' || U === "'") && I.length >= 2 && I[I.length - 1] === U ? I.slice(1, -1) : I;
                })(x.slice(P + 1).trim()),
                w = Kp[N] || N,
                j = (b[w] = (function (I, U) {
                  return I === "style"
                    ? U.split(/;\s?/).reduce(function (V, z) {
                        let ie = z.slice(0, z.indexOf(":"));
                        return (
                          (V[ie.replace(/(-[a-z])/g, (Z) => Z[1].toUpperCase())] = z.slice(ie.length + 1).trim()), V
                        );
                      }, {})
                    : I === "href"
                    ? Ut(U)
                    : (U.match(vF) && (U = U.slice(1, U.length - 1)), U === "true" || (U !== "false" && U));
                })(N, $));
              typeof j == "string" && (qo.test(j) || Lo.test(j)) && (b[w] = he(a(j.trim()), { key: S }));
            } else x !== "style" && (b[Kp[x] || x] = !0);
            return b;
          }, {})
        : null;
    }
    let u = [],
      i = {},
      s = {
        blockQuote: {
          t: et(td),
          i: te.HIGH,
          l: (h, E, b) => ({ $: E(h[0].replace(cF, ""), b) }),
          h: (h, E, b) => n("blockquote", { key: b.k }, E(h.$, b)),
        },
        breakLine: { t: wr(pF), i: te.HIGH, l: No, h: (h, E, b) => n("br", { key: b.k }) },
        breakThematic: { t: et(dF), i: te.HIGH, l: No, h: (h, E, b) => n("hr", { key: b.k }) },
        codeBlock: {
          t: et(nd),
          i: te.MAX,
          l: (h) => ({ $: h[0].replace(/^ {4}/gm, "").replace(/\n+$/, ""), M: void 0 }),
          h: (h, E, b) => n("pre", { key: b.k }, n("code", At({}, h.I, { className: h.M ? `lang-${h.M}` : "" }), h.$)),
        },
        codeFenced: {
          t: et(rd),
          i: te.MAX,
          l: (h) => ({ I: o(h[3] || ""), $: h[4], M: h[2] || void 0, type: "codeBlock" }),
        },
        codeInline: { t: st(fF), i: te.LOW, l: (h) => ({ $: h[2] }), h: (h, E, b) => n("code", { key: b.k }, h.$) },
        footnote: { t: et(mF), i: te.MAX, l: (h) => (u.push({ O: h[2], B: h[1] }), {}), h: jo },
        footnoteReference: {
          t: it(yF),
          i: te.HIGH,
          l: (h) => ({ $: h[1], R: `#${t.slugify(h[1])}` }),
          h: (h, E, b) => n("a", { key: b.k, href: Ut(h.R) }, n("sup", { key: b.k }, h.$)),
        },
        gfmTask: {
          t: it(AF),
          i: te.HIGH,
          l: (h) => ({ T: h[1].toLowerCase() === "x" }),
          h: (h, E, b) => n("input", { checked: h.T, key: b.k, readOnly: !0, type: "checkbox" }),
        },
        heading: {
          t: et(ad),
          i: te.HIGH,
          l: (h, E, b) => ({ $: vn(E, h[2], b), j: t.slugify(h[2]), C: h[1].length }),
          h: (h, E, b) => n(`h${h.C}`, { id: h.j, key: b.k }, E(h.$, b)),
        },
        headingSetext: {
          t: et(od),
          i: te.MAX,
          l: (h, E, b) => ({ $: vn(E, h[1], b), C: h[2] === "=" ? 1 : 2, type: "heading" }),
        },
        htmlComment: { t: wr(ud), i: te.HIGH, l: () => ({}), h: jo },
        image: {
          t: st(QF),
          i: te.HIGH,
          l: (h) => ({ D: h[1], R: ed(h[2]), N: h[3] }),
          h: (h, E, b) => n("img", { key: b.k, alt: h.D || void 0, title: h.N || void 0, src: Ut(h.R) }),
        },
        link: {
          t: it(JF),
          i: te.LOW,
          l: (h, E, b) => ({ $: aS(E, h[1], b), R: ed(h[2]), N: h[3] }),
          h: (h, E, b) => n("a", { key: b.k, href: Ut(h.R), title: h.N }, E(h.$, b)),
        },
        linkAngleBraceStyleDetector: {
          t: it(FF),
          i: te.MAX,
          l: (h) => ({ $: [{ $: h[1], type: "text" }], R: h[1], type: "link" }),
        },
        linkBareUrlDetector: {
          t: (h, E) => (E.Z ? null : it(CF)(h, E)),
          i: te.MAX,
          l: (h) => ({ $: [{ $: h[1], type: "text" }], R: h[1], N: void 0, type: "link" }),
        },
        linkMailtoDetector: {
          t: it(xF),
          i: te.MAX,
          l(h) {
            let E = h[1],
              b = h[1];
            return (
              sF.test(b) || (b = "mailto:" + b),
              { $: [{ $: E.replace("mailto:", ""), type: "text" }], R: b, type: "link" }
            );
          },
        },
        orderedList: Jp(n, 1),
        unorderedList: Jp(n, 2),
        newlineCoalescer: {
          t: et(hF),
          i: te.LOW,
          l: No,
          h: () => `
`,
        },
        paragraph: { t: nS, i: te.LOW, l: ko, h: (h, E, b) => n("p", { key: b.k }, E(h.$, b)) },
        ref: { t: it(wF), i: te.MAX, l: (h) => ((i[h[1]] = { R: h[2], N: h[4] }), {}), h: jo },
        refImage: {
          t: st(BF),
          i: te.MAX,
          l: (h) => ({ D: h[1] || void 0, F: h[2] }),
          h: (h, E, b) => n("img", { key: b.k, alt: h.D, src: Ut(i[h.F].R), title: i[h.F].N }),
        },
        refLink: {
          t: it(TF),
          i: te.MAX,
          l: (h, E, b) => ({ $: E(h[1], b), P: E(h[0].replace(_F, "\\$1"), b), F: h[2] }),
          h: (h, E, b) =>
            i[h.F]
              ? n("a", { key: b.k, href: Ut(i[h.F].R), title: i[h.F].N }, E(h.$, b))
              : n("span", { key: b.k }, E(h.P, b)),
        },
        table: {
          t: et(id),
          i: te.HIGH,
          l: rS,
          h: (h, E, b) =>
            n(
              "table",
              { key: b.k },
              n(
                "thead",
                null,
                n(
                  "tr",
                  null,
                  h.L.map(function (x, S) {
                    return n("th", { key: S, style: Zp(h, S) }, E(x, b));
                  })
                )
              ),
              n(
                "tbody",
                null,
                h.A.map(function (x, S) {
                  return n(
                    "tr",
                    { key: S },
                    x.map(function (P, N) {
                      return n("td", { key: N, style: Zp(h, N) }, E(P, b));
                    })
                  );
                })
              )
            ),
        },
        tableSeparator: {
          t: function (h, E) {
            return E.v ? PF.exec(h) : null;
          },
          i: te.HIGH,
          l: function () {
            return { type: "tableSeparator" };
          },
          h: () => " | ",
        },
        text: {
          t: wr(HF),
          i: te.MIN,
          l: (h) => ({ $: h[0].replace(EF, (E, b) => (t.namedCodesToUnicode[b] ? t.namedCodesToUnicode[b] : E)) }),
          h: (h) => h.$,
        },
        textBolded: {
          t: st(qF),
          i: te.MED,
          l: (h, E, b) => ({ $: E(h[2], b) }),
          h: (h, E, b) => n("strong", { key: b.k }, E(h.$, b)),
        },
        textEmphasized: {
          t: st(LF),
          i: te.LOW,
          l: (h, E, b) => ({ $: E(h[2], b) }),
          h: (h, E, b) => n("em", { key: b.k }, E(h.$, b)),
        },
        textEscaped: { t: st(zF), i: te.HIGH, l: (h) => ({ $: h[1], type: "text" }) },
        textMarked: { t: st($F), i: te.LOW, l: ko, h: (h, E, b) => n("mark", { key: b.k }, E(h.$, b)) },
        textStrikethroughed: { t: st(UF), i: te.LOW, l: ko, h: (h, E, b) => n("del", { key: b.k }, E(h.$, b)) },
      };
    t.disableParsingRawHTML !== !0 &&
      ((s.htmlBlock = {
        t: wr(qo),
        i: te.HIGH,
        l(h, E, b) {
          let [, x] = h[3].match(WF),
            S = new RegExp(`^${x}`, "gm"),
            P = h[3].replace(S, ""),
            N = (($ = P), ZF.some((U) => U.test($)) ? oS : vn);
          var $;
          let w = h[1].toLowerCase(),
            j = uF.indexOf(w) !== -1;
          b.Z = b.Z || w === "a";
          let I = j ? h[3] : N(E, P, b);
          return (b.Z = !1), { I: o(h[2]), $: I, G: j, H: j ? w : h[1] };
        },
        h: (h, E, b) => n(h.H, At({ key: b.k }, h.I), h.G ? h.$ : E(h.$, b)),
      }),
      (s.htmlSelfClosing = {
        t: wr(Lo),
        i: te.HIGH,
        l: (h) => ({ I: o(h[2] || ""), H: h[1] }),
        h: (h, E, b) => n(h.H, At({}, h.I, { key: b.k })),
      }));
    let d = (function (h) {
        let E = Object.keys(h);
        function b(x, S) {
          let P = [],
            N = "";
          for (; x; ) {
            let $ = 0;
            for (; $ < E.length; ) {
              let w = E[$],
                j = h[w],
                I = j.t(x, S, N);
              if (I) {
                let U = I[0];
                x = x.substring(U.length);
                let V = j.l(I, b, S);
                V.type == null && (V.type = w), P.push(V), (N = U);
                break;
              }
              $++;
            }
          }
          return P;
        }
        return (
          E.sort(function (x, S) {
            let P = h[x].i,
              N = h[S].i;
            return P !== N ? P - N : x < S ? -1 : 1;
          }),
          function (x, S) {
            return b(
              (function (P) {
                return P.replace(
                  gF,
                  `
`
                )
                  .replace(bF, "")
                  .replace(RF, "    ");
              })(x),
              S
            );
          }
        );
      })(s),
      y =
        ((A = (function (h) {
          return function (E, b, x) {
            return h[E.type].h(E, b, x);
          };
        })(s)),
        function h(E, b = {}) {
          if (Array.isArray(E)) {
            let x = b.k,
              S = [],
              P = !1;
            for (let N = 0; N < E.length; N++) {
              b.k = N;
              let $ = h(E[N], b),
                w = typeof $ == "string";
              w && P ? (S[S.length - 1] += $) : $ !== null && S.push($), (P = w);
            }
            return (b.k = x), S;
          }
          return A(E, h, b);
        });
    var A;
    let g = a(e);
    return u.length
      ? n(
          "div",
          null,
          g,
          n(
            "footer",
            { key: "footer" },
            u.map(function (h) {
              return n("div", { id: t.slugify(h.B), key: h.B }, h.B, y(d(h.O, { _: !0 })));
            })
          )
        )
      : g;
  }
  (function (e) {
    (e[(e.MAX = 0)] = "MAX"),
      (e[(e.HIGH = 1)] = "HIGH"),
      (e[(e.MED = 2)] = "MED"),
      (e[(e.LOW = 3)] = "LOW"),
      (e[(e.MIN = 4)] = "MIN");
  })(te || (te = {}));
  var zo = (e) => {
    let { children: t, options: r } = e,
      n = (function (a, o) {
        if (a == null) return {};
        var u,
          i,
          s = {},
          d = Object.keys(a);
        for (i = 0; i < d.length; i++) o.indexOf((u = d[i])) >= 0 || (s[u] = a[u]);
        return s;
      })(e, oF);
    return he(iS(t, r), n);
  };
  var Xm = fe(Cn(), 1),
    Jm = fe(qd(), 1),
    Qm = fe(Gf(), 1);
  l();
  c();
  p();
  l();
  c();
  p();
  l();
  c();
  p();
  l();
  c();
  p();
  l();
  c();
  p();
  l();
  c();
  p();
  var qV = __STORYBOOKCHANNELS__,
    { Channel: Sn } = __STORYBOOKCHANNELS__;
  l();
  c();
  p();
  var HV = __STORYBOOKCOREEVENTS__,
    {
      CHANNEL_CREATED: GV,
      CONFIG_ERROR: Z5,
      CURRENT_STORY_WAS_SET: e3,
      DOCS_PREPARED: t3,
      DOCS_RENDERED: r3,
      FORCE_REMOUNT: n3,
      FORCE_RE_RENDER: Wo,
      GLOBALS_UPDATED: wn,
      IGNORED_EXCEPTION: WV,
      NAVIGATE_URL: Wf,
      PLAY_FUNCTION_THREW_EXCEPTION: a3,
      PRELOAD_ENTRIES: o3,
      PREVIEW_BUILDER_PROGRESS: VV,
      PREVIEW_KEYDOWN: u3,
      REGISTER_SUBSCRIPTION: KV,
      RESET_STORY_ARGS: Bn,
      SELECT_STORY: YV,
      SET_CONFIG: XV,
      SET_CURRENT_STORY: i3,
      SET_GLOBALS: s3,
      SET_INDEX: l3,
      SET_STORIES: JV,
      SHARED_STATE_CHANGED: c3,
      SHARED_STATE_SET: p3,
      STORIES_COLLAPSE_ALL: QV,
      STORIES_EXPAND_ALL: ZV,
      STORY_ARGS_UPDATED: Tn,
      STORY_CHANGED: d3,
      STORY_ERRORED: f3,
      STORY_INDEX_INVALIDATED: h3,
      STORY_MISSING: g3,
      STORY_PREPARED: m3,
      STORY_RENDERED: Vf,
      STORY_RENDER_PHASE_CHANGED: y3,
      STORY_SPECIFIED: b3,
      STORY_THREW_EXCEPTION: A3,
      STORY_UNCHANGED: E3,
      UPDATE_GLOBALS: Kf,
      UPDATE_QUERY_PARAMS: D3,
      UPDATE_STORY_ARGS: _n,
    } = __STORYBOOKCOREEVENTS__;
  var C3 = Object.create,
    Yf = Object.defineProperty,
    x3 = Object.getOwnPropertyDescriptor,
    Xf = Object.getOwnPropertyNames,
    F3 = Object.getPrototypeOf,
    S3 = Object.prototype.hasOwnProperty,
    Ge = (e, t) =>
      function () {
        return t || (0, e[Xf(e)[0]])((t = { exports: {} }).exports, t), t.exports;
      },
    w3 = (e, t, r, n) => {
      if ((t && typeof t == "object") || typeof t == "function")
        for (let a of Xf(t))
          !S3.call(e, a) && a !== r && Yf(e, a, { get: () => t[a], enumerable: !(n = x3(t, a)) || n.enumerable });
      return e;
    },
    Jf = (e, t, r) => (
      (r = e != null ? C3(F3(e)) : {}),
      w3(t || !e || !e.__esModule ? Yf(r, "default", { value: e, enumerable: !0 }) : r, e)
    );
  function Qf() {
    let e = { setHandler: () => {}, send: () => {} };
    return new Sn({ transport: e });
  }
  var B3 = class {
      constructor() {
        (this.getChannel = () => {
          if (!this.channel) {
            let e = Qf();
            return this.setChannel(e), e;
          }
          return this.channel;
        }),
          (this.getServerChannel = () => {
            if (!this.serverChannel) throw new Error("Accessing non-existent serverChannel");
            return this.serverChannel;
          }),
          (this.ready = () => this.promise),
          (this.hasChannel = () => !!this.channel),
          (this.hasServerChannel = () => !!this.serverChannel),
          (this.setChannel = (e) => {
            (this.channel = e), this.resolve();
          }),
          (this.setServerChannel = (e) => {
            this.serverChannel = e;
          }),
          (this.promise = new Promise((e) => {
            this.resolve = () => e(this.getChannel());
          }));
      }
    },
    Vo = "__STORYBOOK_ADDONS_PREVIEW";
  function T3() {
    return oe[Vo] || (oe[Vo] = new B3()), oe[Vo];
  }
  var On = T3();
  var W0 = fe(Cn(), 1),
    Or = fe(Rn(), 1),
    qB = fe(I0(), 1),
    LB = fe(In(), 1);
  l();
  c();
  p();
  function Ht(e) {
    for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
    var n = Array.from(typeof e == "string" ? [e] : e);
    n[n.length - 1] = n[n.length - 1].replace(/\r?\n([\t ]*)$/, "");
    var a = n.reduce(function (i, s) {
      var d = s.match(/\n([\t ]+|(?!\s).)/g);
      return d
        ? i.concat(
            d.map(function (y) {
              var A, g;
              return (g = (A = y.match(/[\t ]/g)) === null || A === void 0 ? void 0 : A.length) !== null && g !== void 0
                ? g
                : 0;
            })
          )
        : i;
    }, []);
    if (a.length) {
      var o = new RegExp(
        `
[	 ]{` +
          Math.min.apply(Math, a) +
          "}",
        "g"
      );
      n = n.map(function (i) {
        return i.replace(
          o,
          `
`
        );
      });
    }
    n[0] = n[0].replace(/^\r?\n/, "");
    var u = n[0];
    return (
      t.forEach(function (i, s) {
        var d = u.match(/(?:^|\n)( *)$/),
          y = d ? d[1] : "",
          A = i;
        typeof i == "string" &&
          i.includes(`
`) &&
          (A = String(i)
            .split(
              `
`
            )
            .map(function (g, h) {
              return h === 0 ? g : "" + y + g;
            }).join(`
`)),
          (u += A + n[s + 1]);
      }),
      u
    );
  }
  var Ce = Ht;
  l();
  c();
  p();
  var Mn = fe(Ko(), 1);
  var V0 = fe(H0(), 1);
  var K0 = fe(Po(), 1);
  var XY = (0, W0.default)(1)((e) =>
    Object.values(e).reduce((t, r) => ((t[r.importPath] = t[r.importPath] || r), t), {})
  );
  var JY = Symbol("incompatible");
  var QY = Symbol("Deeply equal");
  var $B = Ht`
CSF .story annotations deprecated; annotate story functions directly:
- StoryFn.story.name => StoryFn.storyName
- StoryFn.story.(parameters|decorators) => StoryFn.(parameters|decorators)
See https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#hoisted-csf-annotations for details and codemod.
`,
    ZY = (0, V0.default)(() => {}, $B);
  var Et = (...e) => {
    let t = {},
      r = e.filter(Boolean),
      n = r.reduce(
        (a, o) => (
          Object.entries(o).forEach(([u, i]) => {
            let s = a[u];
            Array.isArray(i) || typeof s > "u"
              ? (a[u] = i)
              : (0, Mn.default)(i) && (0, Mn.default)(s)
              ? (t[u] = !0)
              : typeof i < "u" && (a[u] = i);
          }),
          a
        ),
        {}
      );
    return (
      Object.keys(t).forEach((a) => {
        let o = r
          .filter(Boolean)
          .map((u) => u[a])
          .filter((u) => typeof u < "u");
        o.every((u) => (0, Mn.default)(u)) ? (n[a] = Et(...o)) : (n[a] = o[o.length - 1]);
      }),
      n
    );
  };
  var Xo = (e, t, r) => {
      let n = typeof e;
      switch (n) {
        case "boolean":
        case "string":
        case "number":
        case "function":
        case "symbol":
          return { name: n };
      }
      return e
        ? r.has(e)
          ? (qe.warn(Ht`
        We've detected a cycle in arg '${t}'. Args should be JSON-serializable.

        Consider using the mapping feature or fully custom args:
        - Mapping: https://storybook.js.org/docs/react/writing-stories/args#mapping-to-complex-arg-values
        - Custom args: https://storybook.js.org/docs/react/essentials/controls#fully-custom-args
      `),
            { name: "other", value: "cyclic object" })
          : (r.add(e),
            Array.isArray(e)
              ? { name: "array", value: e.length > 0 ? Xo(e[0], t, new Set(r)) : { name: "other", value: "unknown" } }
              : { name: "object", value: (0, Or.default)(e, (a) => Xo(a, t, new Set(r))) })
        : { name: "object", value: {} };
    },
    UB = (e) => {
      let { id: t, argTypes: r = {}, initialArgs: n = {} } = e,
        a = (0, Or.default)(n, (u, i) => ({ name: i, type: Xo(u, `${t}.${i}`, new Set()) })),
        o = (0, Or.default)(r, (u, i) => ({ name: i }));
      return Et(a, o, r);
    };
  UB.secondPass = !0;
  var G0 = (e, t) => (Array.isArray(t) ? t.includes(e) : e.match(t)),
    Pr = (e, t, r) =>
      !t && !r
        ? e
        : e &&
          (0, K0.default)(e, (n, a) => {
            let o = n.name || a;
            return (!t || G0(o, t)) && (!r || !G0(o, r));
          }),
    zB = (e, t, r) => {
      let { type: n, options: a } = e;
      if (n) {
        if (r.color && r.color.test(t)) {
          let o = n.name;
          if (o === "string") return { control: { type: "color" } };
          o !== "enum" &&
            qe.warn(`Addon controls: Control of type color only supports string, received "${o}" instead`);
        }
        if (r.date && r.date.test(t)) return { control: { type: "date" } };
        switch (n.name) {
          case "array":
            return { control: { type: "object" } };
          case "boolean":
            return { control: { type: "boolean" } };
          case "string":
            return { control: { type: "text" } };
          case "number":
            return { control: { type: "number" } };
          case "enum": {
            let { value: o } = n;
            return { control: { type: o?.length <= 5 ? "radio" : "select" }, options: o };
          }
          case "function":
          case "symbol":
            return null;
          default:
            return { control: { type: a ? "select" : "object" } };
        }
      }
    },
    Y0 = (e) => {
      let {
        argTypes: t,
        parameters: { __isArgsStory: r, controls: { include: n = null, exclude: a = null, matchers: o = {} } = {} },
      } = e;
      if (!r) return t;
      let u = Pr(t, n, a),
        i = (0, Or.default)(u, (s, d) => s?.type && zB(s, d, o));
      return Et(i, u);
    };
  Y0.secondPass = !0;
  function Jo(e) {
    return async (t, r, n) => {
      await e.reduceRight(
        (a, o) => async () => o(t, a, n),
        async () => r(n)
      )();
    };
  }
  function Rr(e, t) {
    return e.map((r) => r.default?.[t] ?? r[t]).filter(Boolean);
  }
  function kn(e, t, r = {}) {
    return Rr(e, t).reduce((n, a) => (r.reverseFileOrder ? [...a, ...n] : [...n, ...a]), []);
  }
  function Nn(e, t) {
    return Object.assign({}, ...Rr(e, t));
  }
  function jn(e, t) {
    return Rr(e, t).pop();
  }
  function Qo(e) {
    let t = kn(e, "argTypesEnhancers"),
      r = Rr(e, "runStep");
    return {
      parameters: Et(...Rr(e, "parameters")),
      decorators: kn(e, "decorators", { reverseFileOrder: !(oe.FEATURES?.legacyDecoratorFileOrder ?? !1) }),
      args: Nn(e, "args"),
      argsEnhancers: kn(e, "argsEnhancers"),
      argTypes: Nn(e, "argTypes"),
      argTypesEnhancers: [...t.filter((n) => !n.secondPass), ...t.filter((n) => n.secondPass)],
      globals: Nn(e, "globals"),
      globalTypes: Nn(e, "globalTypes"),
      loaders: kn(e, "loaders"),
      render: jn(e, "render"),
      renderToCanvas: jn(e, "renderToCanvas"),
      renderToDOM: jn(e, "renderToDOM"),
      applyDecorators: jn(e, "applyDecorators"),
      runStep: Jo(r),
    };
  }
  var eX = Qo([]);
  var F8 = fe(In(), 1),
    S8 = fe(Jn(), 1);
  l();
  c();
  p();
  var B8 = fe(In(), 1);
  var T8 = fe(Jn(), 1),
    _8 = fe(Ko(), 1),
    sg = Ge({
      "../../node_modules/entities/lib/maps/entities.json"(e, t) {
        t.exports = {
          Aacute: "\xC1",
          aacute: "\xE1",
          Abreve: "\u0102",
          abreve: "\u0103",
          ac: "\u223E",
          acd: "\u223F",
          acE: "\u223E\u0333",
          Acirc: "\xC2",
          acirc: "\xE2",
          acute: "\xB4",
          Acy: "\u0410",
          acy: "\u0430",
          AElig: "\xC6",
          aelig: "\xE6",
          af: "\u2061",
          Afr: "\u{1D504}",
          afr: "\u{1D51E}",
          Agrave: "\xC0",
          agrave: "\xE0",
          alefsym: "\u2135",
          aleph: "\u2135",
          Alpha: "\u0391",
          alpha: "\u03B1",
          Amacr: "\u0100",
          amacr: "\u0101",
          amalg: "\u2A3F",
          amp: "&",
          AMP: "&",
          andand: "\u2A55",
          And: "\u2A53",
          and: "\u2227",
          andd: "\u2A5C",
          andslope: "\u2A58",
          andv: "\u2A5A",
          ang: "\u2220",
          ange: "\u29A4",
          angle: "\u2220",
          angmsdaa: "\u29A8",
          angmsdab: "\u29A9",
          angmsdac: "\u29AA",
          angmsdad: "\u29AB",
          angmsdae: "\u29AC",
          angmsdaf: "\u29AD",
          angmsdag: "\u29AE",
          angmsdah: "\u29AF",
          angmsd: "\u2221",
          angrt: "\u221F",
          angrtvb: "\u22BE",
          angrtvbd: "\u299D",
          angsph: "\u2222",
          angst: "\xC5",
          angzarr: "\u237C",
          Aogon: "\u0104",
          aogon: "\u0105",
          Aopf: "\u{1D538}",
          aopf: "\u{1D552}",
          apacir: "\u2A6F",
          ap: "\u2248",
          apE: "\u2A70",
          ape: "\u224A",
          apid: "\u224B",
          apos: "'",
          ApplyFunction: "\u2061",
          approx: "\u2248",
          approxeq: "\u224A",
          Aring: "\xC5",
          aring: "\xE5",
          Ascr: "\u{1D49C}",
          ascr: "\u{1D4B6}",
          Assign: "\u2254",
          ast: "*",
          asymp: "\u2248",
          asympeq: "\u224D",
          Atilde: "\xC3",
          atilde: "\xE3",
          Auml: "\xC4",
          auml: "\xE4",
          awconint: "\u2233",
          awint: "\u2A11",
          backcong: "\u224C",
          backepsilon: "\u03F6",
          backprime: "\u2035",
          backsim: "\u223D",
          backsimeq: "\u22CD",
          Backslash: "\u2216",
          Barv: "\u2AE7",
          barvee: "\u22BD",
          barwed: "\u2305",
          Barwed: "\u2306",
          barwedge: "\u2305",
          bbrk: "\u23B5",
          bbrktbrk: "\u23B6",
          bcong: "\u224C",
          Bcy: "\u0411",
          bcy: "\u0431",
          bdquo: "\u201E",
          becaus: "\u2235",
          because: "\u2235",
          Because: "\u2235",
          bemptyv: "\u29B0",
          bepsi: "\u03F6",
          bernou: "\u212C",
          Bernoullis: "\u212C",
          Beta: "\u0392",
          beta: "\u03B2",
          beth: "\u2136",
          between: "\u226C",
          Bfr: "\u{1D505}",
          bfr: "\u{1D51F}",
          bigcap: "\u22C2",
          bigcirc: "\u25EF",
          bigcup: "\u22C3",
          bigodot: "\u2A00",
          bigoplus: "\u2A01",
          bigotimes: "\u2A02",
          bigsqcup: "\u2A06",
          bigstar: "\u2605",
          bigtriangledown: "\u25BD",
          bigtriangleup: "\u25B3",
          biguplus: "\u2A04",
          bigvee: "\u22C1",
          bigwedge: "\u22C0",
          bkarow: "\u290D",
          blacklozenge: "\u29EB",
          blacksquare: "\u25AA",
          blacktriangle: "\u25B4",
          blacktriangledown: "\u25BE",
          blacktriangleleft: "\u25C2",
          blacktriangleright: "\u25B8",
          blank: "\u2423",
          blk12: "\u2592",
          blk14: "\u2591",
          blk34: "\u2593",
          block: "\u2588",
          bne: "=\u20E5",
          bnequiv: "\u2261\u20E5",
          bNot: "\u2AED",
          bnot: "\u2310",
          Bopf: "\u{1D539}",
          bopf: "\u{1D553}",
          bot: "\u22A5",
          bottom: "\u22A5",
          bowtie: "\u22C8",
          boxbox: "\u29C9",
          boxdl: "\u2510",
          boxdL: "\u2555",
          boxDl: "\u2556",
          boxDL: "\u2557",
          boxdr: "\u250C",
          boxdR: "\u2552",
          boxDr: "\u2553",
          boxDR: "\u2554",
          boxh: "\u2500",
          boxH: "\u2550",
          boxhd: "\u252C",
          boxHd: "\u2564",
          boxhD: "\u2565",
          boxHD: "\u2566",
          boxhu: "\u2534",
          boxHu: "\u2567",
          boxhU: "\u2568",
          boxHU: "\u2569",
          boxminus: "\u229F",
          boxplus: "\u229E",
          boxtimes: "\u22A0",
          boxul: "\u2518",
          boxuL: "\u255B",
          boxUl: "\u255C",
          boxUL: "\u255D",
          boxur: "\u2514",
          boxuR: "\u2558",
          boxUr: "\u2559",
          boxUR: "\u255A",
          boxv: "\u2502",
          boxV: "\u2551",
          boxvh: "\u253C",
          boxvH: "\u256A",
          boxVh: "\u256B",
          boxVH: "\u256C",
          boxvl: "\u2524",
          boxvL: "\u2561",
          boxVl: "\u2562",
          boxVL: "\u2563",
          boxvr: "\u251C",
          boxvR: "\u255E",
          boxVr: "\u255F",
          boxVR: "\u2560",
          bprime: "\u2035",
          breve: "\u02D8",
          Breve: "\u02D8",
          brvbar: "\xA6",
          bscr: "\u{1D4B7}",
          Bscr: "\u212C",
          bsemi: "\u204F",
          bsim: "\u223D",
          bsime: "\u22CD",
          bsolb: "\u29C5",
          bsol: "\\",
          bsolhsub: "\u27C8",
          bull: "\u2022",
          bullet: "\u2022",
          bump: "\u224E",
          bumpE: "\u2AAE",
          bumpe: "\u224F",
          Bumpeq: "\u224E",
          bumpeq: "\u224F",
          Cacute: "\u0106",
          cacute: "\u0107",
          capand: "\u2A44",
          capbrcup: "\u2A49",
          capcap: "\u2A4B",
          cap: "\u2229",
          Cap: "\u22D2",
          capcup: "\u2A47",
          capdot: "\u2A40",
          CapitalDifferentialD: "\u2145",
          caps: "\u2229\uFE00",
          caret: "\u2041",
          caron: "\u02C7",
          Cayleys: "\u212D",
          ccaps: "\u2A4D",
          Ccaron: "\u010C",
          ccaron: "\u010D",
          Ccedil: "\xC7",
          ccedil: "\xE7",
          Ccirc: "\u0108",
          ccirc: "\u0109",
          Cconint: "\u2230",
          ccups: "\u2A4C",
          ccupssm: "\u2A50",
          Cdot: "\u010A",
          cdot: "\u010B",
          cedil: "\xB8",
          Cedilla: "\xB8",
          cemptyv: "\u29B2",
          cent: "\xA2",
          centerdot: "\xB7",
          CenterDot: "\xB7",
          cfr: "\u{1D520}",
          Cfr: "\u212D",
          CHcy: "\u0427",
          chcy: "\u0447",
          check: "\u2713",
          checkmark: "\u2713",
          Chi: "\u03A7",
          chi: "\u03C7",
          circ: "\u02C6",
          circeq: "\u2257",
          circlearrowleft: "\u21BA",
          circlearrowright: "\u21BB",
          circledast: "\u229B",
          circledcirc: "\u229A",
          circleddash: "\u229D",
          CircleDot: "\u2299",
          circledR: "\xAE",
          circledS: "\u24C8",
          CircleMinus: "\u2296",
          CirclePlus: "\u2295",
          CircleTimes: "\u2297",
          cir: "\u25CB",
          cirE: "\u29C3",
          cire: "\u2257",
          cirfnint: "\u2A10",
          cirmid: "\u2AEF",
          cirscir: "\u29C2",
          ClockwiseContourIntegral: "\u2232",
          CloseCurlyDoubleQuote: "\u201D",
          CloseCurlyQuote: "\u2019",
          clubs: "\u2663",
          clubsuit: "\u2663",
          colon: ":",
          Colon: "\u2237",
          Colone: "\u2A74",
          colone: "\u2254",
          coloneq: "\u2254",
          comma: ",",
          commat: "@",
          comp: "\u2201",
          compfn: "\u2218",
          complement: "\u2201",
          complexes: "\u2102",
          cong: "\u2245",
          congdot: "\u2A6D",
          Congruent: "\u2261",
          conint: "\u222E",
          Conint: "\u222F",
          ContourIntegral: "\u222E",
          copf: "\u{1D554}",
          Copf: "\u2102",
          coprod: "\u2210",
          Coproduct: "\u2210",
          copy: "\xA9",
          COPY: "\xA9",
          copysr: "\u2117",
          CounterClockwiseContourIntegral: "\u2233",
          crarr: "\u21B5",
          cross: "\u2717",
          Cross: "\u2A2F",
          Cscr: "\u{1D49E}",
          cscr: "\u{1D4B8}",
          csub: "\u2ACF",
          csube: "\u2AD1",
          csup: "\u2AD0",
          csupe: "\u2AD2",
          ctdot: "\u22EF",
          cudarrl: "\u2938",
          cudarrr: "\u2935",
          cuepr: "\u22DE",
          cuesc: "\u22DF",
          cularr: "\u21B6",
          cularrp: "\u293D",
          cupbrcap: "\u2A48",
          cupcap: "\u2A46",
          CupCap: "\u224D",
          cup: "\u222A",
          Cup: "\u22D3",
          cupcup: "\u2A4A",
          cupdot: "\u228D",
          cupor: "\u2A45",
          cups: "\u222A\uFE00",
          curarr: "\u21B7",
          curarrm: "\u293C",
          curlyeqprec: "\u22DE",
          curlyeqsucc: "\u22DF",
          curlyvee: "\u22CE",
          curlywedge: "\u22CF",
          curren: "\xA4",
          curvearrowleft: "\u21B6",
          curvearrowright: "\u21B7",
          cuvee: "\u22CE",
          cuwed: "\u22CF",
          cwconint: "\u2232",
          cwint: "\u2231",
          cylcty: "\u232D",
          dagger: "\u2020",
          Dagger: "\u2021",
          daleth: "\u2138",
          darr: "\u2193",
          Darr: "\u21A1",
          dArr: "\u21D3",
          dash: "\u2010",
          Dashv: "\u2AE4",
          dashv: "\u22A3",
          dbkarow: "\u290F",
          dblac: "\u02DD",
          Dcaron: "\u010E",
          dcaron: "\u010F",
          Dcy: "\u0414",
          dcy: "\u0434",
          ddagger: "\u2021",
          ddarr: "\u21CA",
          DD: "\u2145",
          dd: "\u2146",
          DDotrahd: "\u2911",
          ddotseq: "\u2A77",
          deg: "\xB0",
          Del: "\u2207",
          Delta: "\u0394",
          delta: "\u03B4",
          demptyv: "\u29B1",
          dfisht: "\u297F",
          Dfr: "\u{1D507}",
          dfr: "\u{1D521}",
          dHar: "\u2965",
          dharl: "\u21C3",
          dharr: "\u21C2",
          DiacriticalAcute: "\xB4",
          DiacriticalDot: "\u02D9",
          DiacriticalDoubleAcute: "\u02DD",
          DiacriticalGrave: "`",
          DiacriticalTilde: "\u02DC",
          diam: "\u22C4",
          diamond: "\u22C4",
          Diamond: "\u22C4",
          diamondsuit: "\u2666",
          diams: "\u2666",
          die: "\xA8",
          DifferentialD: "\u2146",
          digamma: "\u03DD",
          disin: "\u22F2",
          div: "\xF7",
          divide: "\xF7",
          divideontimes: "\u22C7",
          divonx: "\u22C7",
          DJcy: "\u0402",
          djcy: "\u0452",
          dlcorn: "\u231E",
          dlcrop: "\u230D",
          dollar: "$",
          Dopf: "\u{1D53B}",
          dopf: "\u{1D555}",
          Dot: "\xA8",
          dot: "\u02D9",
          DotDot: "\u20DC",
          doteq: "\u2250",
          doteqdot: "\u2251",
          DotEqual: "\u2250",
          dotminus: "\u2238",
          dotplus: "\u2214",
          dotsquare: "\u22A1",
          doublebarwedge: "\u2306",
          DoubleContourIntegral: "\u222F",
          DoubleDot: "\xA8",
          DoubleDownArrow: "\u21D3",
          DoubleLeftArrow: "\u21D0",
          DoubleLeftRightArrow: "\u21D4",
          DoubleLeftTee: "\u2AE4",
          DoubleLongLeftArrow: "\u27F8",
          DoubleLongLeftRightArrow: "\u27FA",
          DoubleLongRightArrow: "\u27F9",
          DoubleRightArrow: "\u21D2",
          DoubleRightTee: "\u22A8",
          DoubleUpArrow: "\u21D1",
          DoubleUpDownArrow: "\u21D5",
          DoubleVerticalBar: "\u2225",
          DownArrowBar: "\u2913",
          downarrow: "\u2193",
          DownArrow: "\u2193",
          Downarrow: "\u21D3",
          DownArrowUpArrow: "\u21F5",
          DownBreve: "\u0311",
          downdownarrows: "\u21CA",
          downharpoonleft: "\u21C3",
          downharpoonright: "\u21C2",
          DownLeftRightVector: "\u2950",
          DownLeftTeeVector: "\u295E",
          DownLeftVectorBar: "\u2956",
          DownLeftVector: "\u21BD",
          DownRightTeeVector: "\u295F",
          DownRightVectorBar: "\u2957",
          DownRightVector: "\u21C1",
          DownTeeArrow: "\u21A7",
          DownTee: "\u22A4",
          drbkarow: "\u2910",
          drcorn: "\u231F",
          drcrop: "\u230C",
          Dscr: "\u{1D49F}",
          dscr: "\u{1D4B9}",
          DScy: "\u0405",
          dscy: "\u0455",
          dsol: "\u29F6",
          Dstrok: "\u0110",
          dstrok: "\u0111",
          dtdot: "\u22F1",
          dtri: "\u25BF",
          dtrif: "\u25BE",
          duarr: "\u21F5",
          duhar: "\u296F",
          dwangle: "\u29A6",
          DZcy: "\u040F",
          dzcy: "\u045F",
          dzigrarr: "\u27FF",
          Eacute: "\xC9",
          eacute: "\xE9",
          easter: "\u2A6E",
          Ecaron: "\u011A",
          ecaron: "\u011B",
          Ecirc: "\xCA",
          ecirc: "\xEA",
          ecir: "\u2256",
          ecolon: "\u2255",
          Ecy: "\u042D",
          ecy: "\u044D",
          eDDot: "\u2A77",
          Edot: "\u0116",
          edot: "\u0117",
          eDot: "\u2251",
          ee: "\u2147",
          efDot: "\u2252",
          Efr: "\u{1D508}",
          efr: "\u{1D522}",
          eg: "\u2A9A",
          Egrave: "\xC8",
          egrave: "\xE8",
          egs: "\u2A96",
          egsdot: "\u2A98",
          el: "\u2A99",
          Element: "\u2208",
          elinters: "\u23E7",
          ell: "\u2113",
          els: "\u2A95",
          elsdot: "\u2A97",
          Emacr: "\u0112",
          emacr: "\u0113",
          empty: "\u2205",
          emptyset: "\u2205",
          EmptySmallSquare: "\u25FB",
          emptyv: "\u2205",
          EmptyVerySmallSquare: "\u25AB",
          emsp13: "\u2004",
          emsp14: "\u2005",
          emsp: "\u2003",
          ENG: "\u014A",
          eng: "\u014B",
          ensp: "\u2002",
          Eogon: "\u0118",
          eogon: "\u0119",
          Eopf: "\u{1D53C}",
          eopf: "\u{1D556}",
          epar: "\u22D5",
          eparsl: "\u29E3",
          eplus: "\u2A71",
          epsi: "\u03B5",
          Epsilon: "\u0395",
          epsilon: "\u03B5",
          epsiv: "\u03F5",
          eqcirc: "\u2256",
          eqcolon: "\u2255",
          eqsim: "\u2242",
          eqslantgtr: "\u2A96",
          eqslantless: "\u2A95",
          Equal: "\u2A75",
          equals: "=",
          EqualTilde: "\u2242",
          equest: "\u225F",
          Equilibrium: "\u21CC",
          equiv: "\u2261",
          equivDD: "\u2A78",
          eqvparsl: "\u29E5",
          erarr: "\u2971",
          erDot: "\u2253",
          escr: "\u212F",
          Escr: "\u2130",
          esdot: "\u2250",
          Esim: "\u2A73",
          esim: "\u2242",
          Eta: "\u0397",
          eta: "\u03B7",
          ETH: "\xD0",
          eth: "\xF0",
          Euml: "\xCB",
          euml: "\xEB",
          euro: "\u20AC",
          excl: "!",
          exist: "\u2203",
          Exists: "\u2203",
          expectation: "\u2130",
          exponentiale: "\u2147",
          ExponentialE: "\u2147",
          fallingdotseq: "\u2252",
          Fcy: "\u0424",
          fcy: "\u0444",
          female: "\u2640",
          ffilig: "\uFB03",
          fflig: "\uFB00",
          ffllig: "\uFB04",
          Ffr: "\u{1D509}",
          ffr: "\u{1D523}",
          filig: "\uFB01",
          FilledSmallSquare: "\u25FC",
          FilledVerySmallSquare: "\u25AA",
          fjlig: "fj",
          flat: "\u266D",
          fllig: "\uFB02",
          fltns: "\u25B1",
          fnof: "\u0192",
          Fopf: "\u{1D53D}",
          fopf: "\u{1D557}",
          forall: "\u2200",
          ForAll: "\u2200",
          fork: "\u22D4",
          forkv: "\u2AD9",
          Fouriertrf: "\u2131",
          fpartint: "\u2A0D",
          frac12: "\xBD",
          frac13: "\u2153",
          frac14: "\xBC",
          frac15: "\u2155",
          frac16: "\u2159",
          frac18: "\u215B",
          frac23: "\u2154",
          frac25: "\u2156",
          frac34: "\xBE",
          frac35: "\u2157",
          frac38: "\u215C",
          frac45: "\u2158",
          frac56: "\u215A",
          frac58: "\u215D",
          frac78: "\u215E",
          frasl: "\u2044",
          frown: "\u2322",
          fscr: "\u{1D4BB}",
          Fscr: "\u2131",
          gacute: "\u01F5",
          Gamma: "\u0393",
          gamma: "\u03B3",
          Gammad: "\u03DC",
          gammad: "\u03DD",
          gap: "\u2A86",
          Gbreve: "\u011E",
          gbreve: "\u011F",
          Gcedil: "\u0122",
          Gcirc: "\u011C",
          gcirc: "\u011D",
          Gcy: "\u0413",
          gcy: "\u0433",
          Gdot: "\u0120",
          gdot: "\u0121",
          ge: "\u2265",
          gE: "\u2267",
          gEl: "\u2A8C",
          gel: "\u22DB",
          geq: "\u2265",
          geqq: "\u2267",
          geqslant: "\u2A7E",
          gescc: "\u2AA9",
          ges: "\u2A7E",
          gesdot: "\u2A80",
          gesdoto: "\u2A82",
          gesdotol: "\u2A84",
          gesl: "\u22DB\uFE00",
          gesles: "\u2A94",
          Gfr: "\u{1D50A}",
          gfr: "\u{1D524}",
          gg: "\u226B",
          Gg: "\u22D9",
          ggg: "\u22D9",
          gimel: "\u2137",
          GJcy: "\u0403",
          gjcy: "\u0453",
          gla: "\u2AA5",
          gl: "\u2277",
          glE: "\u2A92",
          glj: "\u2AA4",
          gnap: "\u2A8A",
          gnapprox: "\u2A8A",
          gne: "\u2A88",
          gnE: "\u2269",
          gneq: "\u2A88",
          gneqq: "\u2269",
          gnsim: "\u22E7",
          Gopf: "\u{1D53E}",
          gopf: "\u{1D558}",
          grave: "`",
          GreaterEqual: "\u2265",
          GreaterEqualLess: "\u22DB",
          GreaterFullEqual: "\u2267",
          GreaterGreater: "\u2AA2",
          GreaterLess: "\u2277",
          GreaterSlantEqual: "\u2A7E",
          GreaterTilde: "\u2273",
          Gscr: "\u{1D4A2}",
          gscr: "\u210A",
          gsim: "\u2273",
          gsime: "\u2A8E",
          gsiml: "\u2A90",
          gtcc: "\u2AA7",
          gtcir: "\u2A7A",
          gt: ">",
          GT: ">",
          Gt: "\u226B",
          gtdot: "\u22D7",
          gtlPar: "\u2995",
          gtquest: "\u2A7C",
          gtrapprox: "\u2A86",
          gtrarr: "\u2978",
          gtrdot: "\u22D7",
          gtreqless: "\u22DB",
          gtreqqless: "\u2A8C",
          gtrless: "\u2277",
          gtrsim: "\u2273",
          gvertneqq: "\u2269\uFE00",
          gvnE: "\u2269\uFE00",
          Hacek: "\u02C7",
          hairsp: "\u200A",
          half: "\xBD",
          hamilt: "\u210B",
          HARDcy: "\u042A",
          hardcy: "\u044A",
          harrcir: "\u2948",
          harr: "\u2194",
          hArr: "\u21D4",
          harrw: "\u21AD",
          Hat: "^",
          hbar: "\u210F",
          Hcirc: "\u0124",
          hcirc: "\u0125",
          hearts: "\u2665",
          heartsuit: "\u2665",
          hellip: "\u2026",
          hercon: "\u22B9",
          hfr: "\u{1D525}",
          Hfr: "\u210C",
          HilbertSpace: "\u210B",
          hksearow: "\u2925",
          hkswarow: "\u2926",
          hoarr: "\u21FF",
          homtht: "\u223B",
          hookleftarrow: "\u21A9",
          hookrightarrow: "\u21AA",
          hopf: "\u{1D559}",
          Hopf: "\u210D",
          horbar: "\u2015",
          HorizontalLine: "\u2500",
          hscr: "\u{1D4BD}",
          Hscr: "\u210B",
          hslash: "\u210F",
          Hstrok: "\u0126",
          hstrok: "\u0127",
          HumpDownHump: "\u224E",
          HumpEqual: "\u224F",
          hybull: "\u2043",
          hyphen: "\u2010",
          Iacute: "\xCD",
          iacute: "\xED",
          ic: "\u2063",
          Icirc: "\xCE",
          icirc: "\xEE",
          Icy: "\u0418",
          icy: "\u0438",
          Idot: "\u0130",
          IEcy: "\u0415",
          iecy: "\u0435",
          iexcl: "\xA1",
          iff: "\u21D4",
          ifr: "\u{1D526}",
          Ifr: "\u2111",
          Igrave: "\xCC",
          igrave: "\xEC",
          ii: "\u2148",
          iiiint: "\u2A0C",
          iiint: "\u222D",
          iinfin: "\u29DC",
          iiota: "\u2129",
          IJlig: "\u0132",
          ijlig: "\u0133",
          Imacr: "\u012A",
          imacr: "\u012B",
          image: "\u2111",
          ImaginaryI: "\u2148",
          imagline: "\u2110",
          imagpart: "\u2111",
          imath: "\u0131",
          Im: "\u2111",
          imof: "\u22B7",
          imped: "\u01B5",
          Implies: "\u21D2",
          incare: "\u2105",
          in: "\u2208",
          infin: "\u221E",
          infintie: "\u29DD",
          inodot: "\u0131",
          intcal: "\u22BA",
          int: "\u222B",
          Int: "\u222C",
          integers: "\u2124",
          Integral: "\u222B",
          intercal: "\u22BA",
          Intersection: "\u22C2",
          intlarhk: "\u2A17",
          intprod: "\u2A3C",
          InvisibleComma: "\u2063",
          InvisibleTimes: "\u2062",
          IOcy: "\u0401",
          iocy: "\u0451",
          Iogon: "\u012E",
          iogon: "\u012F",
          Iopf: "\u{1D540}",
          iopf: "\u{1D55A}",
          Iota: "\u0399",
          iota: "\u03B9",
          iprod: "\u2A3C",
          iquest: "\xBF",
          iscr: "\u{1D4BE}",
          Iscr: "\u2110",
          isin: "\u2208",
          isindot: "\u22F5",
          isinE: "\u22F9",
          isins: "\u22F4",
          isinsv: "\u22F3",
          isinv: "\u2208",
          it: "\u2062",
          Itilde: "\u0128",
          itilde: "\u0129",
          Iukcy: "\u0406",
          iukcy: "\u0456",
          Iuml: "\xCF",
          iuml: "\xEF",
          Jcirc: "\u0134",
          jcirc: "\u0135",
          Jcy: "\u0419",
          jcy: "\u0439",
          Jfr: "\u{1D50D}",
          jfr: "\u{1D527}",
          jmath: "\u0237",
          Jopf: "\u{1D541}",
          jopf: "\u{1D55B}",
          Jscr: "\u{1D4A5}",
          jscr: "\u{1D4BF}",
          Jsercy: "\u0408",
          jsercy: "\u0458",
          Jukcy: "\u0404",
          jukcy: "\u0454",
          Kappa: "\u039A",
          kappa: "\u03BA",
          kappav: "\u03F0",
          Kcedil: "\u0136",
          kcedil: "\u0137",
          Kcy: "\u041A",
          kcy: "\u043A",
          Kfr: "\u{1D50E}",
          kfr: "\u{1D528}",
          kgreen: "\u0138",
          KHcy: "\u0425",
          khcy: "\u0445",
          KJcy: "\u040C",
          kjcy: "\u045C",
          Kopf: "\u{1D542}",
          kopf: "\u{1D55C}",
          Kscr: "\u{1D4A6}",
          kscr: "\u{1D4C0}",
          lAarr: "\u21DA",
          Lacute: "\u0139",
          lacute: "\u013A",
          laemptyv: "\u29B4",
          lagran: "\u2112",
          Lambda: "\u039B",
          lambda: "\u03BB",
          lang: "\u27E8",
          Lang: "\u27EA",
          langd: "\u2991",
          langle: "\u27E8",
          lap: "\u2A85",
          Laplacetrf: "\u2112",
          laquo: "\xAB",
          larrb: "\u21E4",
          larrbfs: "\u291F",
          larr: "\u2190",
          Larr: "\u219E",
          lArr: "\u21D0",
          larrfs: "\u291D",
          larrhk: "\u21A9",
          larrlp: "\u21AB",
          larrpl: "\u2939",
          larrsim: "\u2973",
          larrtl: "\u21A2",
          latail: "\u2919",
          lAtail: "\u291B",
          lat: "\u2AAB",
          late: "\u2AAD",
          lates: "\u2AAD\uFE00",
          lbarr: "\u290C",
          lBarr: "\u290E",
          lbbrk: "\u2772",
          lbrace: "{",
          lbrack: "[",
          lbrke: "\u298B",
          lbrksld: "\u298F",
          lbrkslu: "\u298D",
          Lcaron: "\u013D",
          lcaron: "\u013E",
          Lcedil: "\u013B",
          lcedil: "\u013C",
          lceil: "\u2308",
          lcub: "{",
          Lcy: "\u041B",
          lcy: "\u043B",
          ldca: "\u2936",
          ldquo: "\u201C",
          ldquor: "\u201E",
          ldrdhar: "\u2967",
          ldrushar: "\u294B",
          ldsh: "\u21B2",
          le: "\u2264",
          lE: "\u2266",
          LeftAngleBracket: "\u27E8",
          LeftArrowBar: "\u21E4",
          leftarrow: "\u2190",
          LeftArrow: "\u2190",
          Leftarrow: "\u21D0",
          LeftArrowRightArrow: "\u21C6",
          leftarrowtail: "\u21A2",
          LeftCeiling: "\u2308",
          LeftDoubleBracket: "\u27E6",
          LeftDownTeeVector: "\u2961",
          LeftDownVectorBar: "\u2959",
          LeftDownVector: "\u21C3",
          LeftFloor: "\u230A",
          leftharpoondown: "\u21BD",
          leftharpoonup: "\u21BC",
          leftleftarrows: "\u21C7",
          leftrightarrow: "\u2194",
          LeftRightArrow: "\u2194",
          Leftrightarrow: "\u21D4",
          leftrightarrows: "\u21C6",
          leftrightharpoons: "\u21CB",
          leftrightsquigarrow: "\u21AD",
          LeftRightVector: "\u294E",
          LeftTeeArrow: "\u21A4",
          LeftTee: "\u22A3",
          LeftTeeVector: "\u295A",
          leftthreetimes: "\u22CB",
          LeftTriangleBar: "\u29CF",
          LeftTriangle: "\u22B2",
          LeftTriangleEqual: "\u22B4",
          LeftUpDownVector: "\u2951",
          LeftUpTeeVector: "\u2960",
          LeftUpVectorBar: "\u2958",
          LeftUpVector: "\u21BF",
          LeftVectorBar: "\u2952",
          LeftVector: "\u21BC",
          lEg: "\u2A8B",
          leg: "\u22DA",
          leq: "\u2264",
          leqq: "\u2266",
          leqslant: "\u2A7D",
          lescc: "\u2AA8",
          les: "\u2A7D",
          lesdot: "\u2A7F",
          lesdoto: "\u2A81",
          lesdotor: "\u2A83",
          lesg: "\u22DA\uFE00",
          lesges: "\u2A93",
          lessapprox: "\u2A85",
          lessdot: "\u22D6",
          lesseqgtr: "\u22DA",
          lesseqqgtr: "\u2A8B",
          LessEqualGreater: "\u22DA",
          LessFullEqual: "\u2266",
          LessGreater: "\u2276",
          lessgtr: "\u2276",
          LessLess: "\u2AA1",
          lesssim: "\u2272",
          LessSlantEqual: "\u2A7D",
          LessTilde: "\u2272",
          lfisht: "\u297C",
          lfloor: "\u230A",
          Lfr: "\u{1D50F}",
          lfr: "\u{1D529}",
          lg: "\u2276",
          lgE: "\u2A91",
          lHar: "\u2962",
          lhard: "\u21BD",
          lharu: "\u21BC",
          lharul: "\u296A",
          lhblk: "\u2584",
          LJcy: "\u0409",
          ljcy: "\u0459",
          llarr: "\u21C7",
          ll: "\u226A",
          Ll: "\u22D8",
          llcorner: "\u231E",
          Lleftarrow: "\u21DA",
          llhard: "\u296B",
          lltri: "\u25FA",
          Lmidot: "\u013F",
          lmidot: "\u0140",
          lmoustache: "\u23B0",
          lmoust: "\u23B0",
          lnap: "\u2A89",
          lnapprox: "\u2A89",
          lne: "\u2A87",
          lnE: "\u2268",
          lneq: "\u2A87",
          lneqq: "\u2268",
          lnsim: "\u22E6",
          loang: "\u27EC",
          loarr: "\u21FD",
          lobrk: "\u27E6",
          longleftarrow: "\u27F5",
          LongLeftArrow: "\u27F5",
          Longleftarrow: "\u27F8",
          longleftrightarrow: "\u27F7",
          LongLeftRightArrow: "\u27F7",
          Longleftrightarrow: "\u27FA",
          longmapsto: "\u27FC",
          longrightarrow: "\u27F6",
          LongRightArrow: "\u27F6",
          Longrightarrow: "\u27F9",
          looparrowleft: "\u21AB",
          looparrowright: "\u21AC",
          lopar: "\u2985",
          Lopf: "\u{1D543}",
          lopf: "\u{1D55D}",
          loplus: "\u2A2D",
          lotimes: "\u2A34",
          lowast: "\u2217",
          lowbar: "_",
          LowerLeftArrow: "\u2199",
          LowerRightArrow: "\u2198",
          loz: "\u25CA",
          lozenge: "\u25CA",
          lozf: "\u29EB",
          lpar: "(",
          lparlt: "\u2993",
          lrarr: "\u21C6",
          lrcorner: "\u231F",
          lrhar: "\u21CB",
          lrhard: "\u296D",
          lrm: "\u200E",
          lrtri: "\u22BF",
          lsaquo: "\u2039",
          lscr: "\u{1D4C1}",
          Lscr: "\u2112",
          lsh: "\u21B0",
          Lsh: "\u21B0",
          lsim: "\u2272",
          lsime: "\u2A8D",
          lsimg: "\u2A8F",
          lsqb: "[",
          lsquo: "\u2018",
          lsquor: "\u201A",
          Lstrok: "\u0141",
          lstrok: "\u0142",
          ltcc: "\u2AA6",
          ltcir: "\u2A79",
          lt: "<",
          LT: "<",
          Lt: "\u226A",
          ltdot: "\u22D6",
          lthree: "\u22CB",
          ltimes: "\u22C9",
          ltlarr: "\u2976",
          ltquest: "\u2A7B",
          ltri: "\u25C3",
          ltrie: "\u22B4",
          ltrif: "\u25C2",
          ltrPar: "\u2996",
          lurdshar: "\u294A",
          luruhar: "\u2966",
          lvertneqq: "\u2268\uFE00",
          lvnE: "\u2268\uFE00",
          macr: "\xAF",
          male: "\u2642",
          malt: "\u2720",
          maltese: "\u2720",
          Map: "\u2905",
          map: "\u21A6",
          mapsto: "\u21A6",
          mapstodown: "\u21A7",
          mapstoleft: "\u21A4",
          mapstoup: "\u21A5",
          marker: "\u25AE",
          mcomma: "\u2A29",
          Mcy: "\u041C",
          mcy: "\u043C",
          mdash: "\u2014",
          mDDot: "\u223A",
          measuredangle: "\u2221",
          MediumSpace: "\u205F",
          Mellintrf: "\u2133",
          Mfr: "\u{1D510}",
          mfr: "\u{1D52A}",
          mho: "\u2127",
          micro: "\xB5",
          midast: "*",
          midcir: "\u2AF0",
          mid: "\u2223",
          middot: "\xB7",
          minusb: "\u229F",
          minus: "\u2212",
          minusd: "\u2238",
          minusdu: "\u2A2A",
          MinusPlus: "\u2213",
          mlcp: "\u2ADB",
          mldr: "\u2026",
          mnplus: "\u2213",
          models: "\u22A7",
          Mopf: "\u{1D544}",
          mopf: "\u{1D55E}",
          mp: "\u2213",
          mscr: "\u{1D4C2}",
          Mscr: "\u2133",
          mstpos: "\u223E",
          Mu: "\u039C",
          mu: "\u03BC",
          multimap: "\u22B8",
          mumap: "\u22B8",
          nabla: "\u2207",
          Nacute: "\u0143",
          nacute: "\u0144",
          nang: "\u2220\u20D2",
          nap: "\u2249",
          napE: "\u2A70\u0338",
          napid: "\u224B\u0338",
          napos: "\u0149",
          napprox: "\u2249",
          natural: "\u266E",
          naturals: "\u2115",
          natur: "\u266E",
          nbsp: "\xA0",
          nbump: "\u224E\u0338",
          nbumpe: "\u224F\u0338",
          ncap: "\u2A43",
          Ncaron: "\u0147",
          ncaron: "\u0148",
          Ncedil: "\u0145",
          ncedil: "\u0146",
          ncong: "\u2247",
          ncongdot: "\u2A6D\u0338",
          ncup: "\u2A42",
          Ncy: "\u041D",
          ncy: "\u043D",
          ndash: "\u2013",
          nearhk: "\u2924",
          nearr: "\u2197",
          neArr: "\u21D7",
          nearrow: "\u2197",
          ne: "\u2260",
          nedot: "\u2250\u0338",
          NegativeMediumSpace: "\u200B",
          NegativeThickSpace: "\u200B",
          NegativeThinSpace: "\u200B",
          NegativeVeryThinSpace: "\u200B",
          nequiv: "\u2262",
          nesear: "\u2928",
          nesim: "\u2242\u0338",
          NestedGreaterGreater: "\u226B",
          NestedLessLess: "\u226A",
          NewLine: `
`,
          nexist: "\u2204",
          nexists: "\u2204",
          Nfr: "\u{1D511}",
          nfr: "\u{1D52B}",
          ngE: "\u2267\u0338",
          nge: "\u2271",
          ngeq: "\u2271",
          ngeqq: "\u2267\u0338",
          ngeqslant: "\u2A7E\u0338",
          nges: "\u2A7E\u0338",
          nGg: "\u22D9\u0338",
          ngsim: "\u2275",
          nGt: "\u226B\u20D2",
          ngt: "\u226F",
          ngtr: "\u226F",
          nGtv: "\u226B\u0338",
          nharr: "\u21AE",
          nhArr: "\u21CE",
          nhpar: "\u2AF2",
          ni: "\u220B",
          nis: "\u22FC",
          nisd: "\u22FA",
          niv: "\u220B",
          NJcy: "\u040A",
          njcy: "\u045A",
          nlarr: "\u219A",
          nlArr: "\u21CD",
          nldr: "\u2025",
          nlE: "\u2266\u0338",
          nle: "\u2270",
          nleftarrow: "\u219A",
          nLeftarrow: "\u21CD",
          nleftrightarrow: "\u21AE",
          nLeftrightarrow: "\u21CE",
          nleq: "\u2270",
          nleqq: "\u2266\u0338",
          nleqslant: "\u2A7D\u0338",
          nles: "\u2A7D\u0338",
          nless: "\u226E",
          nLl: "\u22D8\u0338",
          nlsim: "\u2274",
          nLt: "\u226A\u20D2",
          nlt: "\u226E",
          nltri: "\u22EA",
          nltrie: "\u22EC",
          nLtv: "\u226A\u0338",
          nmid: "\u2224",
          NoBreak: "\u2060",
          NonBreakingSpace: "\xA0",
          nopf: "\u{1D55F}",
          Nopf: "\u2115",
          Not: "\u2AEC",
          not: "\xAC",
          NotCongruent: "\u2262",
          NotCupCap: "\u226D",
          NotDoubleVerticalBar: "\u2226",
          NotElement: "\u2209",
          NotEqual: "\u2260",
          NotEqualTilde: "\u2242\u0338",
          NotExists: "\u2204",
          NotGreater: "\u226F",
          NotGreaterEqual: "\u2271",
          NotGreaterFullEqual: "\u2267\u0338",
          NotGreaterGreater: "\u226B\u0338",
          NotGreaterLess: "\u2279",
          NotGreaterSlantEqual: "\u2A7E\u0338",
          NotGreaterTilde: "\u2275",
          NotHumpDownHump: "\u224E\u0338",
          NotHumpEqual: "\u224F\u0338",
          notin: "\u2209",
          notindot: "\u22F5\u0338",
          notinE: "\u22F9\u0338",
          notinva: "\u2209",
          notinvb: "\u22F7",
          notinvc: "\u22F6",
          NotLeftTriangleBar: "\u29CF\u0338",
          NotLeftTriangle: "\u22EA",
          NotLeftTriangleEqual: "\u22EC",
          NotLess: "\u226E",
          NotLessEqual: "\u2270",
          NotLessGreater: "\u2278",
          NotLessLess: "\u226A\u0338",
          NotLessSlantEqual: "\u2A7D\u0338",
          NotLessTilde: "\u2274",
          NotNestedGreaterGreater: "\u2AA2\u0338",
          NotNestedLessLess: "\u2AA1\u0338",
          notni: "\u220C",
          notniva: "\u220C",
          notnivb: "\u22FE",
          notnivc: "\u22FD",
          NotPrecedes: "\u2280",
          NotPrecedesEqual: "\u2AAF\u0338",
          NotPrecedesSlantEqual: "\u22E0",
          NotReverseElement: "\u220C",
          NotRightTriangleBar: "\u29D0\u0338",
          NotRightTriangle: "\u22EB",
          NotRightTriangleEqual: "\u22ED",
          NotSquareSubset: "\u228F\u0338",
          NotSquareSubsetEqual: "\u22E2",
          NotSquareSuperset: "\u2290\u0338",
          NotSquareSupersetEqual: "\u22E3",
          NotSubset: "\u2282\u20D2",
          NotSubsetEqual: "\u2288",
          NotSucceeds: "\u2281",
          NotSucceedsEqual: "\u2AB0\u0338",
          NotSucceedsSlantEqual: "\u22E1",
          NotSucceedsTilde: "\u227F\u0338",
          NotSuperset: "\u2283\u20D2",
          NotSupersetEqual: "\u2289",
          NotTilde: "\u2241",
          NotTildeEqual: "\u2244",
          NotTildeFullEqual: "\u2247",
          NotTildeTilde: "\u2249",
          NotVerticalBar: "\u2224",
          nparallel: "\u2226",
          npar: "\u2226",
          nparsl: "\u2AFD\u20E5",
          npart: "\u2202\u0338",
          npolint: "\u2A14",
          npr: "\u2280",
          nprcue: "\u22E0",
          nprec: "\u2280",
          npreceq: "\u2AAF\u0338",
          npre: "\u2AAF\u0338",
          nrarrc: "\u2933\u0338",
          nrarr: "\u219B",
          nrArr: "\u21CF",
          nrarrw: "\u219D\u0338",
          nrightarrow: "\u219B",
          nRightarrow: "\u21CF",
          nrtri: "\u22EB",
          nrtrie: "\u22ED",
          nsc: "\u2281",
          nsccue: "\u22E1",
          nsce: "\u2AB0\u0338",
          Nscr: "\u{1D4A9}",
          nscr: "\u{1D4C3}",
          nshortmid: "\u2224",
          nshortparallel: "\u2226",
          nsim: "\u2241",
          nsime: "\u2244",
          nsimeq: "\u2244",
          nsmid: "\u2224",
          nspar: "\u2226",
          nsqsube: "\u22E2",
          nsqsupe: "\u22E3",
          nsub: "\u2284",
          nsubE: "\u2AC5\u0338",
          nsube: "\u2288",
          nsubset: "\u2282\u20D2",
          nsubseteq: "\u2288",
          nsubseteqq: "\u2AC5\u0338",
          nsucc: "\u2281",
          nsucceq: "\u2AB0\u0338",
          nsup: "\u2285",
          nsupE: "\u2AC6\u0338",
          nsupe: "\u2289",
          nsupset: "\u2283\u20D2",
          nsupseteq: "\u2289",
          nsupseteqq: "\u2AC6\u0338",
          ntgl: "\u2279",
          Ntilde: "\xD1",
          ntilde: "\xF1",
          ntlg: "\u2278",
          ntriangleleft: "\u22EA",
          ntrianglelefteq: "\u22EC",
          ntriangleright: "\u22EB",
          ntrianglerighteq: "\u22ED",
          Nu: "\u039D",
          nu: "\u03BD",
          num: "#",
          numero: "\u2116",
          numsp: "\u2007",
          nvap: "\u224D\u20D2",
          nvdash: "\u22AC",
          nvDash: "\u22AD",
          nVdash: "\u22AE",
          nVDash: "\u22AF",
          nvge: "\u2265\u20D2",
          nvgt: ">\u20D2",
          nvHarr: "\u2904",
          nvinfin: "\u29DE",
          nvlArr: "\u2902",
          nvle: "\u2264\u20D2",
          nvlt: "<\u20D2",
          nvltrie: "\u22B4\u20D2",
          nvrArr: "\u2903",
          nvrtrie: "\u22B5\u20D2",
          nvsim: "\u223C\u20D2",
          nwarhk: "\u2923",
          nwarr: "\u2196",
          nwArr: "\u21D6",
          nwarrow: "\u2196",
          nwnear: "\u2927",
          Oacute: "\xD3",
          oacute: "\xF3",
          oast: "\u229B",
          Ocirc: "\xD4",
          ocirc: "\xF4",
          ocir: "\u229A",
          Ocy: "\u041E",
          ocy: "\u043E",
          odash: "\u229D",
          Odblac: "\u0150",
          odblac: "\u0151",
          odiv: "\u2A38",
          odot: "\u2299",
          odsold: "\u29BC",
          OElig: "\u0152",
          oelig: "\u0153",
          ofcir: "\u29BF",
          Ofr: "\u{1D512}",
          ofr: "\u{1D52C}",
          ogon: "\u02DB",
          Ograve: "\xD2",
          ograve: "\xF2",
          ogt: "\u29C1",
          ohbar: "\u29B5",
          ohm: "\u03A9",
          oint: "\u222E",
          olarr: "\u21BA",
          olcir: "\u29BE",
          olcross: "\u29BB",
          oline: "\u203E",
          olt: "\u29C0",
          Omacr: "\u014C",
          omacr: "\u014D",
          Omega: "\u03A9",
          omega: "\u03C9",
          Omicron: "\u039F",
          omicron: "\u03BF",
          omid: "\u29B6",
          ominus: "\u2296",
          Oopf: "\u{1D546}",
          oopf: "\u{1D560}",
          opar: "\u29B7",
          OpenCurlyDoubleQuote: "\u201C",
          OpenCurlyQuote: "\u2018",
          operp: "\u29B9",
          oplus: "\u2295",
          orarr: "\u21BB",
          Or: "\u2A54",
          or: "\u2228",
          ord: "\u2A5D",
          order: "\u2134",
          orderof: "\u2134",
          ordf: "\xAA",
          ordm: "\xBA",
          origof: "\u22B6",
          oror: "\u2A56",
          orslope: "\u2A57",
          orv: "\u2A5B",
          oS: "\u24C8",
          Oscr: "\u{1D4AA}",
          oscr: "\u2134",
          Oslash: "\xD8",
          oslash: "\xF8",
          osol: "\u2298",
          Otilde: "\xD5",
          otilde: "\xF5",
          otimesas: "\u2A36",
          Otimes: "\u2A37",
          otimes: "\u2297",
          Ouml: "\xD6",
          ouml: "\xF6",
          ovbar: "\u233D",
          OverBar: "\u203E",
          OverBrace: "\u23DE",
          OverBracket: "\u23B4",
          OverParenthesis: "\u23DC",
          para: "\xB6",
          parallel: "\u2225",
          par: "\u2225",
          parsim: "\u2AF3",
          parsl: "\u2AFD",
          part: "\u2202",
          PartialD: "\u2202",
          Pcy: "\u041F",
          pcy: "\u043F",
          percnt: "%",
          period: ".",
          permil: "\u2030",
          perp: "\u22A5",
          pertenk: "\u2031",
          Pfr: "\u{1D513}",
          pfr: "\u{1D52D}",
          Phi: "\u03A6",
          phi: "\u03C6",
          phiv: "\u03D5",
          phmmat: "\u2133",
          phone: "\u260E",
          Pi: "\u03A0",
          pi: "\u03C0",
          pitchfork: "\u22D4",
          piv: "\u03D6",
          planck: "\u210F",
          planckh: "\u210E",
          plankv: "\u210F",
          plusacir: "\u2A23",
          plusb: "\u229E",
          pluscir: "\u2A22",
          plus: "+",
          plusdo: "\u2214",
          plusdu: "\u2A25",
          pluse: "\u2A72",
          PlusMinus: "\xB1",
          plusmn: "\xB1",
          plussim: "\u2A26",
          plustwo: "\u2A27",
          pm: "\xB1",
          Poincareplane: "\u210C",
          pointint: "\u2A15",
          popf: "\u{1D561}",
          Popf: "\u2119",
          pound: "\xA3",
          prap: "\u2AB7",
          Pr: "\u2ABB",
          pr: "\u227A",
          prcue: "\u227C",
          precapprox: "\u2AB7",
          prec: "\u227A",
          preccurlyeq: "\u227C",
          Precedes: "\u227A",
          PrecedesEqual: "\u2AAF",
          PrecedesSlantEqual: "\u227C",
          PrecedesTilde: "\u227E",
          preceq: "\u2AAF",
          precnapprox: "\u2AB9",
          precneqq: "\u2AB5",
          precnsim: "\u22E8",
          pre: "\u2AAF",
          prE: "\u2AB3",
          precsim: "\u227E",
          prime: "\u2032",
          Prime: "\u2033",
          primes: "\u2119",
          prnap: "\u2AB9",
          prnE: "\u2AB5",
          prnsim: "\u22E8",
          prod: "\u220F",
          Product: "\u220F",
          profalar: "\u232E",
          profline: "\u2312",
          profsurf: "\u2313",
          prop: "\u221D",
          Proportional: "\u221D",
          Proportion: "\u2237",
          propto: "\u221D",
          prsim: "\u227E",
          prurel: "\u22B0",
          Pscr: "\u{1D4AB}",
          pscr: "\u{1D4C5}",
          Psi: "\u03A8",
          psi: "\u03C8",
          puncsp: "\u2008",
          Qfr: "\u{1D514}",
          qfr: "\u{1D52E}",
          qint: "\u2A0C",
          qopf: "\u{1D562}",
          Qopf: "\u211A",
          qprime: "\u2057",
          Qscr: "\u{1D4AC}",
          qscr: "\u{1D4C6}",
          quaternions: "\u210D",
          quatint: "\u2A16",
          quest: "?",
          questeq: "\u225F",
          quot: '"',
          QUOT: '"',
          rAarr: "\u21DB",
          race: "\u223D\u0331",
          Racute: "\u0154",
          racute: "\u0155",
          radic: "\u221A",
          raemptyv: "\u29B3",
          rang: "\u27E9",
          Rang: "\u27EB",
          rangd: "\u2992",
          range: "\u29A5",
          rangle: "\u27E9",
          raquo: "\xBB",
          rarrap: "\u2975",
          rarrb: "\u21E5",
          rarrbfs: "\u2920",
          rarrc: "\u2933",
          rarr: "\u2192",
          Rarr: "\u21A0",
          rArr: "\u21D2",
          rarrfs: "\u291E",
          rarrhk: "\u21AA",
          rarrlp: "\u21AC",
          rarrpl: "\u2945",
          rarrsim: "\u2974",
          Rarrtl: "\u2916",
          rarrtl: "\u21A3",
          rarrw: "\u219D",
          ratail: "\u291A",
          rAtail: "\u291C",
          ratio: "\u2236",
          rationals: "\u211A",
          rbarr: "\u290D",
          rBarr: "\u290F",
          RBarr: "\u2910",
          rbbrk: "\u2773",
          rbrace: "}",
          rbrack: "]",
          rbrke: "\u298C",
          rbrksld: "\u298E",
          rbrkslu: "\u2990",
          Rcaron: "\u0158",
          rcaron: "\u0159",
          Rcedil: "\u0156",
          rcedil: "\u0157",
          rceil: "\u2309",
          rcub: "}",
          Rcy: "\u0420",
          rcy: "\u0440",
          rdca: "\u2937",
          rdldhar: "\u2969",
          rdquo: "\u201D",
          rdquor: "\u201D",
          rdsh: "\u21B3",
          real: "\u211C",
          realine: "\u211B",
          realpart: "\u211C",
          reals: "\u211D",
          Re: "\u211C",
          rect: "\u25AD",
          reg: "\xAE",
          REG: "\xAE",
          ReverseElement: "\u220B",
          ReverseEquilibrium: "\u21CB",
          ReverseUpEquilibrium: "\u296F",
          rfisht: "\u297D",
          rfloor: "\u230B",
          rfr: "\u{1D52F}",
          Rfr: "\u211C",
          rHar: "\u2964",
          rhard: "\u21C1",
          rharu: "\u21C0",
          rharul: "\u296C",
          Rho: "\u03A1",
          rho: "\u03C1",
          rhov: "\u03F1",
          RightAngleBracket: "\u27E9",
          RightArrowBar: "\u21E5",
          rightarrow: "\u2192",
          RightArrow: "\u2192",
          Rightarrow: "\u21D2",
          RightArrowLeftArrow: "\u21C4",
          rightarrowtail: "\u21A3",
          RightCeiling: "\u2309",
          RightDoubleBracket: "\u27E7",
          RightDownTeeVector: "\u295D",
          RightDownVectorBar: "\u2955",
          RightDownVector: "\u21C2",
          RightFloor: "\u230B",
          rightharpoondown: "\u21C1",
          rightharpoonup: "\u21C0",
          rightleftarrows: "\u21C4",
          rightleftharpoons: "\u21CC",
          rightrightarrows: "\u21C9",
          rightsquigarrow: "\u219D",
          RightTeeArrow: "\u21A6",
          RightTee: "\u22A2",
          RightTeeVector: "\u295B",
          rightthreetimes: "\u22CC",
          RightTriangleBar: "\u29D0",
          RightTriangle: "\u22B3",
          RightTriangleEqual: "\u22B5",
          RightUpDownVector: "\u294F",
          RightUpTeeVector: "\u295C",
          RightUpVectorBar: "\u2954",
          RightUpVector: "\u21BE",
          RightVectorBar: "\u2953",
          RightVector: "\u21C0",
          ring: "\u02DA",
          risingdotseq: "\u2253",
          rlarr: "\u21C4",
          rlhar: "\u21CC",
          rlm: "\u200F",
          rmoustache: "\u23B1",
          rmoust: "\u23B1",
          rnmid: "\u2AEE",
          roang: "\u27ED",
          roarr: "\u21FE",
          robrk: "\u27E7",
          ropar: "\u2986",
          ropf: "\u{1D563}",
          Ropf: "\u211D",
          roplus: "\u2A2E",
          rotimes: "\u2A35",
          RoundImplies: "\u2970",
          rpar: ")",
          rpargt: "\u2994",
          rppolint: "\u2A12",
          rrarr: "\u21C9",
          Rrightarrow: "\u21DB",
          rsaquo: "\u203A",
          rscr: "\u{1D4C7}",
          Rscr: "\u211B",
          rsh: "\u21B1",
          Rsh: "\u21B1",
          rsqb: "]",
          rsquo: "\u2019",
          rsquor: "\u2019",
          rthree: "\u22CC",
          rtimes: "\u22CA",
          rtri: "\u25B9",
          rtrie: "\u22B5",
          rtrif: "\u25B8",
          rtriltri: "\u29CE",
          RuleDelayed: "\u29F4",
          ruluhar: "\u2968",
          rx: "\u211E",
          Sacute: "\u015A",
          sacute: "\u015B",
          sbquo: "\u201A",
          scap: "\u2AB8",
          Scaron: "\u0160",
          scaron: "\u0161",
          Sc: "\u2ABC",
          sc: "\u227B",
          sccue: "\u227D",
          sce: "\u2AB0",
          scE: "\u2AB4",
          Scedil: "\u015E",
          scedil: "\u015F",
          Scirc: "\u015C",
          scirc: "\u015D",
          scnap: "\u2ABA",
          scnE: "\u2AB6",
          scnsim: "\u22E9",
          scpolint: "\u2A13",
          scsim: "\u227F",
          Scy: "\u0421",
          scy: "\u0441",
          sdotb: "\u22A1",
          sdot: "\u22C5",
          sdote: "\u2A66",
          searhk: "\u2925",
          searr: "\u2198",
          seArr: "\u21D8",
          searrow: "\u2198",
          sect: "\xA7",
          semi: ";",
          seswar: "\u2929",
          setminus: "\u2216",
          setmn: "\u2216",
          sext: "\u2736",
          Sfr: "\u{1D516}",
          sfr: "\u{1D530}",
          sfrown: "\u2322",
          sharp: "\u266F",
          SHCHcy: "\u0429",
          shchcy: "\u0449",
          SHcy: "\u0428",
          shcy: "\u0448",
          ShortDownArrow: "\u2193",
          ShortLeftArrow: "\u2190",
          shortmid: "\u2223",
          shortparallel: "\u2225",
          ShortRightArrow: "\u2192",
          ShortUpArrow: "\u2191",
          shy: "\xAD",
          Sigma: "\u03A3",
          sigma: "\u03C3",
          sigmaf: "\u03C2",
          sigmav: "\u03C2",
          sim: "\u223C",
          simdot: "\u2A6A",
          sime: "\u2243",
          simeq: "\u2243",
          simg: "\u2A9E",
          simgE: "\u2AA0",
          siml: "\u2A9D",
          simlE: "\u2A9F",
          simne: "\u2246",
          simplus: "\u2A24",
          simrarr: "\u2972",
          slarr: "\u2190",
          SmallCircle: "\u2218",
          smallsetminus: "\u2216",
          smashp: "\u2A33",
          smeparsl: "\u29E4",
          smid: "\u2223",
          smile: "\u2323",
          smt: "\u2AAA",
          smte: "\u2AAC",
          smtes: "\u2AAC\uFE00",
          SOFTcy: "\u042C",
          softcy: "\u044C",
          solbar: "\u233F",
          solb: "\u29C4",
          sol: "/",
          Sopf: "\u{1D54A}",
          sopf: "\u{1D564}",
          spades: "\u2660",
          spadesuit: "\u2660",
          spar: "\u2225",
          sqcap: "\u2293",
          sqcaps: "\u2293\uFE00",
          sqcup: "\u2294",
          sqcups: "\u2294\uFE00",
          Sqrt: "\u221A",
          sqsub: "\u228F",
          sqsube: "\u2291",
          sqsubset: "\u228F",
          sqsubseteq: "\u2291",
          sqsup: "\u2290",
          sqsupe: "\u2292",
          sqsupset: "\u2290",
          sqsupseteq: "\u2292",
          square: "\u25A1",
          Square: "\u25A1",
          SquareIntersection: "\u2293",
          SquareSubset: "\u228F",
          SquareSubsetEqual: "\u2291",
          SquareSuperset: "\u2290",
          SquareSupersetEqual: "\u2292",
          SquareUnion: "\u2294",
          squarf: "\u25AA",
          squ: "\u25A1",
          squf: "\u25AA",
          srarr: "\u2192",
          Sscr: "\u{1D4AE}",
          sscr: "\u{1D4C8}",
          ssetmn: "\u2216",
          ssmile: "\u2323",
          sstarf: "\u22C6",
          Star: "\u22C6",
          star: "\u2606",
          starf: "\u2605",
          straightepsilon: "\u03F5",
          straightphi: "\u03D5",
          strns: "\xAF",
          sub: "\u2282",
          Sub: "\u22D0",
          subdot: "\u2ABD",
          subE: "\u2AC5",
          sube: "\u2286",
          subedot: "\u2AC3",
          submult: "\u2AC1",
          subnE: "\u2ACB",
          subne: "\u228A",
          subplus: "\u2ABF",
          subrarr: "\u2979",
          subset: "\u2282",
          Subset: "\u22D0",
          subseteq: "\u2286",
          subseteqq: "\u2AC5",
          SubsetEqual: "\u2286",
          subsetneq: "\u228A",
          subsetneqq: "\u2ACB",
          subsim: "\u2AC7",
          subsub: "\u2AD5",
          subsup: "\u2AD3",
          succapprox: "\u2AB8",
          succ: "\u227B",
          succcurlyeq: "\u227D",
          Succeeds: "\u227B",
          SucceedsEqual: "\u2AB0",
          SucceedsSlantEqual: "\u227D",
          SucceedsTilde: "\u227F",
          succeq: "\u2AB0",
          succnapprox: "\u2ABA",
          succneqq: "\u2AB6",
          succnsim: "\u22E9",
          succsim: "\u227F",
          SuchThat: "\u220B",
          sum: "\u2211",
          Sum: "\u2211",
          sung: "\u266A",
          sup1: "\xB9",
          sup2: "\xB2",
          sup3: "\xB3",
          sup: "\u2283",
          Sup: "\u22D1",
          supdot: "\u2ABE",
          supdsub: "\u2AD8",
          supE: "\u2AC6",
          supe: "\u2287",
          supedot: "\u2AC4",
          Superset: "\u2283",
          SupersetEqual: "\u2287",
          suphsol: "\u27C9",
          suphsub: "\u2AD7",
          suplarr: "\u297B",
          supmult: "\u2AC2",
          supnE: "\u2ACC",
          supne: "\u228B",
          supplus: "\u2AC0",
          supset: "\u2283",
          Supset: "\u22D1",
          supseteq: "\u2287",
          supseteqq: "\u2AC6",
          supsetneq: "\u228B",
          supsetneqq: "\u2ACC",
          supsim: "\u2AC8",
          supsub: "\u2AD4",
          supsup: "\u2AD6",
          swarhk: "\u2926",
          swarr: "\u2199",
          swArr: "\u21D9",
          swarrow: "\u2199",
          swnwar: "\u292A",
          szlig: "\xDF",
          Tab: "	",
          target: "\u2316",
          Tau: "\u03A4",
          tau: "\u03C4",
          tbrk: "\u23B4",
          Tcaron: "\u0164",
          tcaron: "\u0165",
          Tcedil: "\u0162",
          tcedil: "\u0163",
          Tcy: "\u0422",
          tcy: "\u0442",
          tdot: "\u20DB",
          telrec: "\u2315",
          Tfr: "\u{1D517}",
          tfr: "\u{1D531}",
          there4: "\u2234",
          therefore: "\u2234",
          Therefore: "\u2234",
          Theta: "\u0398",
          theta: "\u03B8",
          thetasym: "\u03D1",
          thetav: "\u03D1",
          thickapprox: "\u2248",
          thicksim: "\u223C",
          ThickSpace: "\u205F\u200A",
          ThinSpace: "\u2009",
          thinsp: "\u2009",
          thkap: "\u2248",
          thksim: "\u223C",
          THORN: "\xDE",
          thorn: "\xFE",
          tilde: "\u02DC",
          Tilde: "\u223C",
          TildeEqual: "\u2243",
          TildeFullEqual: "\u2245",
          TildeTilde: "\u2248",
          timesbar: "\u2A31",
          timesb: "\u22A0",
          times: "\xD7",
          timesd: "\u2A30",
          tint: "\u222D",
          toea: "\u2928",
          topbot: "\u2336",
          topcir: "\u2AF1",
          top: "\u22A4",
          Topf: "\u{1D54B}",
          topf: "\u{1D565}",
          topfork: "\u2ADA",
          tosa: "\u2929",
          tprime: "\u2034",
          trade: "\u2122",
          TRADE: "\u2122",
          triangle: "\u25B5",
          triangledown: "\u25BF",
          triangleleft: "\u25C3",
          trianglelefteq: "\u22B4",
          triangleq: "\u225C",
          triangleright: "\u25B9",
          trianglerighteq: "\u22B5",
          tridot: "\u25EC",
          trie: "\u225C",
          triminus: "\u2A3A",
          TripleDot: "\u20DB",
          triplus: "\u2A39",
          trisb: "\u29CD",
          tritime: "\u2A3B",
          trpezium: "\u23E2",
          Tscr: "\u{1D4AF}",
          tscr: "\u{1D4C9}",
          TScy: "\u0426",
          tscy: "\u0446",
          TSHcy: "\u040B",
          tshcy: "\u045B",
          Tstrok: "\u0166",
          tstrok: "\u0167",
          twixt: "\u226C",
          twoheadleftarrow: "\u219E",
          twoheadrightarrow: "\u21A0",
          Uacute: "\xDA",
          uacute: "\xFA",
          uarr: "\u2191",
          Uarr: "\u219F",
          uArr: "\u21D1",
          Uarrocir: "\u2949",
          Ubrcy: "\u040E",
          ubrcy: "\u045E",
          Ubreve: "\u016C",
          ubreve: "\u016D",
          Ucirc: "\xDB",
          ucirc: "\xFB",
          Ucy: "\u0423",
          ucy: "\u0443",
          udarr: "\u21C5",
          Udblac: "\u0170",
          udblac: "\u0171",
          udhar: "\u296E",
          ufisht: "\u297E",
          Ufr: "\u{1D518}",
          ufr: "\u{1D532}",
          Ugrave: "\xD9",
          ugrave: "\xF9",
          uHar: "\u2963",
          uharl: "\u21BF",
          uharr: "\u21BE",
          uhblk: "\u2580",
          ulcorn: "\u231C",
          ulcorner: "\u231C",
          ulcrop: "\u230F",
          ultri: "\u25F8",
          Umacr: "\u016A",
          umacr: "\u016B",
          uml: "\xA8",
          UnderBar: "_",
          UnderBrace: "\u23DF",
          UnderBracket: "\u23B5",
          UnderParenthesis: "\u23DD",
          Union: "\u22C3",
          UnionPlus: "\u228E",
          Uogon: "\u0172",
          uogon: "\u0173",
          Uopf: "\u{1D54C}",
          uopf: "\u{1D566}",
          UpArrowBar: "\u2912",
          uparrow: "\u2191",
          UpArrow: "\u2191",
          Uparrow: "\u21D1",
          UpArrowDownArrow: "\u21C5",
          updownarrow: "\u2195",
          UpDownArrow: "\u2195",
          Updownarrow: "\u21D5",
          UpEquilibrium: "\u296E",
          upharpoonleft: "\u21BF",
          upharpoonright: "\u21BE",
          uplus: "\u228E",
          UpperLeftArrow: "\u2196",
          UpperRightArrow: "\u2197",
          upsi: "\u03C5",
          Upsi: "\u03D2",
          upsih: "\u03D2",
          Upsilon: "\u03A5",
          upsilon: "\u03C5",
          UpTeeArrow: "\u21A5",
          UpTee: "\u22A5",
          upuparrows: "\u21C8",
          urcorn: "\u231D",
          urcorner: "\u231D",
          urcrop: "\u230E",
          Uring: "\u016E",
          uring: "\u016F",
          urtri: "\u25F9",
          Uscr: "\u{1D4B0}",
          uscr: "\u{1D4CA}",
          utdot: "\u22F0",
          Utilde: "\u0168",
          utilde: "\u0169",
          utri: "\u25B5",
          utrif: "\u25B4",
          uuarr: "\u21C8",
          Uuml: "\xDC",
          uuml: "\xFC",
          uwangle: "\u29A7",
          vangrt: "\u299C",
          varepsilon: "\u03F5",
          varkappa: "\u03F0",
          varnothing: "\u2205",
          varphi: "\u03D5",
          varpi: "\u03D6",
          varpropto: "\u221D",
          varr: "\u2195",
          vArr: "\u21D5",
          varrho: "\u03F1",
          varsigma: "\u03C2",
          varsubsetneq: "\u228A\uFE00",
          varsubsetneqq: "\u2ACB\uFE00",
          varsupsetneq: "\u228B\uFE00",
          varsupsetneqq: "\u2ACC\uFE00",
          vartheta: "\u03D1",
          vartriangleleft: "\u22B2",
          vartriangleright: "\u22B3",
          vBar: "\u2AE8",
          Vbar: "\u2AEB",
          vBarv: "\u2AE9",
          Vcy: "\u0412",
          vcy: "\u0432",
          vdash: "\u22A2",
          vDash: "\u22A8",
          Vdash: "\u22A9",
          VDash: "\u22AB",
          Vdashl: "\u2AE6",
          veebar: "\u22BB",
          vee: "\u2228",
          Vee: "\u22C1",
          veeeq: "\u225A",
          vellip: "\u22EE",
          verbar: "|",
          Verbar: "\u2016",
          vert: "|",
          Vert: "\u2016",
          VerticalBar: "\u2223",
          VerticalLine: "|",
          VerticalSeparator: "\u2758",
          VerticalTilde: "\u2240",
          VeryThinSpace: "\u200A",
          Vfr: "\u{1D519}",
          vfr: "\u{1D533}",
          vltri: "\u22B2",
          vnsub: "\u2282\u20D2",
          vnsup: "\u2283\u20D2",
          Vopf: "\u{1D54D}",
          vopf: "\u{1D567}",
          vprop: "\u221D",
          vrtri: "\u22B3",
          Vscr: "\u{1D4B1}",
          vscr: "\u{1D4CB}",
          vsubnE: "\u2ACB\uFE00",
          vsubne: "\u228A\uFE00",
          vsupnE: "\u2ACC\uFE00",
          vsupne: "\u228B\uFE00",
          Vvdash: "\u22AA",
          vzigzag: "\u299A",
          Wcirc: "\u0174",
          wcirc: "\u0175",
          wedbar: "\u2A5F",
          wedge: "\u2227",
          Wedge: "\u22C0",
          wedgeq: "\u2259",
          weierp: "\u2118",
          Wfr: "\u{1D51A}",
          wfr: "\u{1D534}",
          Wopf: "\u{1D54E}",
          wopf: "\u{1D568}",
          wp: "\u2118",
          wr: "\u2240",
          wreath: "\u2240",
          Wscr: "\u{1D4B2}",
          wscr: "\u{1D4CC}",
          xcap: "\u22C2",
          xcirc: "\u25EF",
          xcup: "\u22C3",
          xdtri: "\u25BD",
          Xfr: "\u{1D51B}",
          xfr: "\u{1D535}",
          xharr: "\u27F7",
          xhArr: "\u27FA",
          Xi: "\u039E",
          xi: "\u03BE",
          xlarr: "\u27F5",
          xlArr: "\u27F8",
          xmap: "\u27FC",
          xnis: "\u22FB",
          xodot: "\u2A00",
          Xopf: "\u{1D54F}",
          xopf: "\u{1D569}",
          xoplus: "\u2A01",
          xotime: "\u2A02",
          xrarr: "\u27F6",
          xrArr: "\u27F9",
          Xscr: "\u{1D4B3}",
          xscr: "\u{1D4CD}",
          xsqcup: "\u2A06",
          xuplus: "\u2A04",
          xutri: "\u25B3",
          xvee: "\u22C1",
          xwedge: "\u22C0",
          Yacute: "\xDD",
          yacute: "\xFD",
          YAcy: "\u042F",
          yacy: "\u044F",
          Ycirc: "\u0176",
          ycirc: "\u0177",
          Ycy: "\u042B",
          ycy: "\u044B",
          yen: "\xA5",
          Yfr: "\u{1D51C}",
          yfr: "\u{1D536}",
          YIcy: "\u0407",
          yicy: "\u0457",
          Yopf: "\u{1D550}",
          yopf: "\u{1D56A}",
          Yscr: "\u{1D4B4}",
          yscr: "\u{1D4CE}",
          YUcy: "\u042E",
          yucy: "\u044E",
          yuml: "\xFF",
          Yuml: "\u0178",
          Zacute: "\u0179",
          zacute: "\u017A",
          Zcaron: "\u017D",
          zcaron: "\u017E",
          Zcy: "\u0417",
          zcy: "\u0437",
          Zdot: "\u017B",
          zdot: "\u017C",
          zeetrf: "\u2128",
          ZeroWidthSpace: "\u200B",
          Zeta: "\u0396",
          zeta: "\u03B6",
          zfr: "\u{1D537}",
          Zfr: "\u2128",
          ZHcy: "\u0416",
          zhcy: "\u0436",
          zigrarr: "\u21DD",
          zopf: "\u{1D56B}",
          Zopf: "\u2124",
          Zscr: "\u{1D4B5}",
          zscr: "\u{1D4CF}",
          zwj: "\u200D",
          zwnj: "\u200C",
        };
      },
    }),
    O8 = Ge({
      "../../node_modules/entities/lib/maps/legacy.json"(e, t) {
        t.exports = {
          Aacute: "\xC1",
          aacute: "\xE1",
          Acirc: "\xC2",
          acirc: "\xE2",
          acute: "\xB4",
          AElig: "\xC6",
          aelig: "\xE6",
          Agrave: "\xC0",
          agrave: "\xE0",
          amp: "&",
          AMP: "&",
          Aring: "\xC5",
          aring: "\xE5",
          Atilde: "\xC3",
          atilde: "\xE3",
          Auml: "\xC4",
          auml: "\xE4",
          brvbar: "\xA6",
          Ccedil: "\xC7",
          ccedil: "\xE7",
          cedil: "\xB8",
          cent: "\xA2",
          copy: "\xA9",
          COPY: "\xA9",
          curren: "\xA4",
          deg: "\xB0",
          divide: "\xF7",
          Eacute: "\xC9",
          eacute: "\xE9",
          Ecirc: "\xCA",
          ecirc: "\xEA",
          Egrave: "\xC8",
          egrave: "\xE8",
          ETH: "\xD0",
          eth: "\xF0",
          Euml: "\xCB",
          euml: "\xEB",
          frac12: "\xBD",
          frac14: "\xBC",
          frac34: "\xBE",
          gt: ">",
          GT: ">",
          Iacute: "\xCD",
          iacute: "\xED",
          Icirc: "\xCE",
          icirc: "\xEE",
          iexcl: "\xA1",
          Igrave: "\xCC",
          igrave: "\xEC",
          iquest: "\xBF",
          Iuml: "\xCF",
          iuml: "\xEF",
          laquo: "\xAB",
          lt: "<",
          LT: "<",
          macr: "\xAF",
          micro: "\xB5",
          middot: "\xB7",
          nbsp: "\xA0",
          not: "\xAC",
          Ntilde: "\xD1",
          ntilde: "\xF1",
          Oacute: "\xD3",
          oacute: "\xF3",
          Ocirc: "\xD4",
          ocirc: "\xF4",
          Ograve: "\xD2",
          ograve: "\xF2",
          ordf: "\xAA",
          ordm: "\xBA",
          Oslash: "\xD8",
          oslash: "\xF8",
          Otilde: "\xD5",
          otilde: "\xF5",
          Ouml: "\xD6",
          ouml: "\xF6",
          para: "\xB6",
          plusmn: "\xB1",
          pound: "\xA3",
          quot: '"',
          QUOT: '"',
          raquo: "\xBB",
          reg: "\xAE",
          REG: "\xAE",
          sect: "\xA7",
          shy: "\xAD",
          sup1: "\xB9",
          sup2: "\xB2",
          sup3: "\xB3",
          szlig: "\xDF",
          THORN: "\xDE",
          thorn: "\xFE",
          times: "\xD7",
          Uacute: "\xDA",
          uacute: "\xFA",
          Ucirc: "\xDB",
          ucirc: "\xFB",
          Ugrave: "\xD9",
          ugrave: "\xF9",
          uml: "\xA8",
          Uuml: "\xDC",
          uuml: "\xFC",
          Yacute: "\xDD",
          yacute: "\xFD",
          yen: "\xA5",
          yuml: "\xFF",
        };
      },
    }),
    lg = Ge({
      "../../node_modules/entities/lib/maps/xml.json"(e, t) {
        t.exports = { amp: "&", apos: "'", gt: ">", lt: "<", quot: '"' };
      },
    }),
    R8 = Ge({
      "../../node_modules/entities/lib/maps/decode.json"(e, t) {
        t.exports = {
          0: 65533,
          128: 8364,
          130: 8218,
          131: 402,
          132: 8222,
          133: 8230,
          134: 8224,
          135: 8225,
          136: 710,
          137: 8240,
          138: 352,
          139: 8249,
          140: 338,
          142: 381,
          145: 8216,
          146: 8217,
          147: 8220,
          148: 8221,
          149: 8226,
          150: 8211,
          151: 8212,
          152: 732,
          153: 8482,
          154: 353,
          155: 8250,
          156: 339,
          158: 382,
          159: 376,
        };
      },
    }),
    P8 = Ge({
      "../../node_modules/entities/lib/decode_codepoint.js"(e) {
        var t =
          (e && e.__importDefault) ||
          function (o) {
            return o && o.__esModule ? o : { default: o };
          };
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = t(R8()),
          n =
            String.fromCodePoint ||
            function (o) {
              var u = "";
              return (
                o > 65535 &&
                  ((o -= 65536), (u += String.fromCharCode(((o >>> 10) & 1023) | 55296)), (o = 56320 | (o & 1023))),
                (u += String.fromCharCode(o)),
                u
              );
            };
        function a(o) {
          return (o >= 55296 && o <= 57343) || o > 1114111 ? "\uFFFD" : (o in r.default && (o = r.default[o]), n(o));
        }
        e.default = a;
      },
    }),
    ug = Ge({
      "../../node_modules/entities/lib/decode.js"(e) {
        var t =
          (e && e.__importDefault) ||
          function (y) {
            return y && y.__esModule ? y : { default: y };
          };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.decodeHTML = e.decodeHTMLStrict = e.decodeXML = void 0);
        var r = t(sg()),
          n = t(O8()),
          a = t(lg()),
          o = t(P8()),
          u = /&(?:[a-zA-Z0-9]+|#[xX][\da-fA-F]+|#\d+);/g;
        (e.decodeXML = i(a.default)), (e.decodeHTMLStrict = i(r.default));
        function i(y) {
          var A = d(y);
          return function (g) {
            return String(g).replace(u, A);
          };
        }
        var s = function (y, A) {
          return y < A ? 1 : -1;
        };
        e.decodeHTML = (function () {
          for (
            var y = Object.keys(n.default).sort(s), A = Object.keys(r.default).sort(s), g = 0, h = 0;
            g < A.length;
            g++
          )
            y[h] === A[g] ? ((A[g] += ";?"), h++) : (A[g] += ";");
          var E = new RegExp("&(?:" + A.join("|") + "|#[xX][\\da-fA-F]+;?|#\\d+;?)", "g"),
            b = d(r.default);
          function x(S) {
            return S.substr(-1) !== ";" && (S += ";"), b(S);
          }
          return function (S) {
            return String(S).replace(E, x);
          };
        })();
        function d(y) {
          return function (A) {
            if (A.charAt(1) === "#") {
              var g = A.charAt(2);
              return g === "X" || g === "x"
                ? o.default(parseInt(A.substr(3), 16))
                : o.default(parseInt(A.substr(2), 10));
            }
            return y[A.slice(1, -1)] || A;
          };
        }
      },
    }),
    ig = Ge({
      "../../node_modules/entities/lib/encode.js"(e) {
        var t =
          (e && e.__importDefault) ||
          function (P) {
            return P && P.__esModule ? P : { default: P };
          };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.escapeUTF8 = e.escape = e.encodeNonAsciiHTML = e.encodeHTML = e.encodeXML = void 0);
        var r = t(lg()),
          n = s(r.default),
          a = d(n);
        e.encodeXML = S(n);
        var o = t(sg()),
          u = s(o.default),
          i = d(u);
        (e.encodeHTML = h(u, i)), (e.encodeNonAsciiHTML = S(u));
        function s(P) {
          return Object.keys(P)
            .sort()
            .reduce(function (N, $) {
              return (N[P[$]] = "&" + $ + ";"), N;
            }, {});
        }
        function d(P) {
          for (var N = [], $ = [], w = 0, j = Object.keys(P); w < j.length; w++) {
            var I = j[w];
            I.length === 1 ? N.push("\\" + I) : $.push(I);
          }
          N.sort();
          for (var U = 0; U < N.length - 1; U++) {
            for (var V = U; V < N.length - 1 && N[V].charCodeAt(1) + 1 === N[V + 1].charCodeAt(1); ) V += 1;
            var z = 1 + V - U;
            z < 3 || N.splice(U, z, N[U] + "-" + N[V]);
          }
          return $.unshift("[" + N.join("") + "]"), new RegExp($.join("|"), "g");
        }
        var y =
            /(?:[\x80-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g,
          A =
            String.prototype.codePointAt != null
              ? function (P) {
                  return P.codePointAt(0);
                }
              : function (P) {
                  return (P.charCodeAt(0) - 55296) * 1024 + P.charCodeAt(1) - 56320 + 65536;
                };
        function g(P) {
          return "&#x" + (P.length > 1 ? A(P) : P.charCodeAt(0)).toString(16).toUpperCase() + ";";
        }
        function h(P, N) {
          return function ($) {
            return $.replace(N, function (w) {
              return P[w];
            }).replace(y, g);
          };
        }
        var E = new RegExp(a.source + "|" + y.source, "g");
        function b(P) {
          return P.replace(E, g);
        }
        e.escape = b;
        function x(P) {
          return P.replace(a, g);
        }
        e.escapeUTF8 = x;
        function S(P) {
          return function (N) {
            return N.replace(E, function ($) {
              return P[$] || g($);
            });
          };
        }
      },
    }),
    I8 = Ge({
      "../../node_modules/entities/lib/index.js"(e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.decodeXMLStrict =
            e.decodeHTML5Strict =
            e.decodeHTML4Strict =
            e.decodeHTML5 =
            e.decodeHTML4 =
            e.decodeHTMLStrict =
            e.decodeHTML =
            e.decodeXML =
            e.encodeHTML5 =
            e.encodeHTML4 =
            e.escapeUTF8 =
            e.escape =
            e.encodeNonAsciiHTML =
            e.encodeHTML =
            e.encodeXML =
            e.encode =
            e.decodeStrict =
            e.decode =
              void 0);
        var t = ug(),
          r = ig();
        function n(s, d) {
          return (!d || d <= 0 ? t.decodeXML : t.decodeHTML)(s);
        }
        e.decode = n;
        function a(s, d) {
          return (!d || d <= 0 ? t.decodeXML : t.decodeHTMLStrict)(s);
        }
        e.decodeStrict = a;
        function o(s, d) {
          return (!d || d <= 0 ? r.encodeXML : r.encodeHTML)(s);
        }
        e.encode = o;
        var u = ig();
        Object.defineProperty(e, "encodeXML", {
          enumerable: !0,
          get: function () {
            return u.encodeXML;
          },
        }),
          Object.defineProperty(e, "encodeHTML", {
            enumerable: !0,
            get: function () {
              return u.encodeHTML;
            },
          }),
          Object.defineProperty(e, "encodeNonAsciiHTML", {
            enumerable: !0,
            get: function () {
              return u.encodeNonAsciiHTML;
            },
          }),
          Object.defineProperty(e, "escape", {
            enumerable: !0,
            get: function () {
              return u.escape;
            },
          }),
          Object.defineProperty(e, "escapeUTF8", {
            enumerable: !0,
            get: function () {
              return u.escapeUTF8;
            },
          }),
          Object.defineProperty(e, "encodeHTML4", {
            enumerable: !0,
            get: function () {
              return u.encodeHTML;
            },
          }),
          Object.defineProperty(e, "encodeHTML5", {
            enumerable: !0,
            get: function () {
              return u.encodeHTML;
            },
          });
        var i = ug();
        Object.defineProperty(e, "decodeXML", {
          enumerable: !0,
          get: function () {
            return i.decodeXML;
          },
        }),
          Object.defineProperty(e, "decodeHTML", {
            enumerable: !0,
            get: function () {
              return i.decodeHTML;
            },
          }),
          Object.defineProperty(e, "decodeHTMLStrict", {
            enumerable: !0,
            get: function () {
              return i.decodeHTMLStrict;
            },
          }),
          Object.defineProperty(e, "decodeHTML4", {
            enumerable: !0,
            get: function () {
              return i.decodeHTML;
            },
          }),
          Object.defineProperty(e, "decodeHTML5", {
            enumerable: !0,
            get: function () {
              return i.decodeHTML;
            },
          }),
          Object.defineProperty(e, "decodeHTML4Strict", {
            enumerable: !0,
            get: function () {
              return i.decodeHTMLStrict;
            },
          }),
          Object.defineProperty(e, "decodeHTML5Strict", {
            enumerable: !0,
            get: function () {
              return i.decodeHTMLStrict;
            },
          }),
          Object.defineProperty(e, "decodeXMLStrict", {
            enumerable: !0,
            get: function () {
              return i.decodeXML;
            },
          });
      },
    }),
    k8 = Ge({
      "../../node_modules/ansi-to-html/lib/ansi_to_html.js"(e, t) {
        function r(O, T) {
          if (!(O instanceof T)) throw new TypeError("Cannot call a class as a function");
        }
        function n(O, T) {
          for (var M = 0; M < T.length; M++) {
            var G = T[M];
            (G.enumerable = G.enumerable || !1),
              (G.configurable = !0),
              "value" in G && (G.writable = !0),
              Object.defineProperty(O, G.key, G);
          }
        }
        function a(O, T, M) {
          return T && n(O.prototype, T), M && n(O, M), O;
        }
        function o(O) {
          if (typeof Symbol > "u" || O[Symbol.iterator] == null) {
            if (Array.isArray(O) || (O = u(O))) {
              var T = 0,
                M = function () {};
              return {
                s: M,
                n: function () {
                  return T >= O.length ? { done: !0 } : { done: !1, value: O[T++] };
                },
                e: function (se) {
                  throw se;
                },
                f: M,
              };
            }
            throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
          }
          var G,
            Y = !0,
            K = !1,
            Q;
          return {
            s: function () {
              G = O[Symbol.iterator]();
            },
            n: function () {
              var se = G.next();
              return (Y = se.done), se;
            },
            e: function (se) {
              (K = !0), (Q = se);
            },
            f: function () {
              try {
                !Y && G.return != null && G.return();
              } finally {
                if (K) throw Q;
              }
            },
          };
        }
        function u(O, T) {
          if (O) {
            if (typeof O == "string") return i(O, T);
            var M = Object.prototype.toString.call(O).slice(8, -1);
            if ((M === "Object" && O.constructor && (M = O.constructor.name), M === "Map" || M === "Set"))
              return Array.from(M);
            if (M === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(M)) return i(O, T);
          }
        }
        function i(O, T) {
          (T == null || T > O.length) && (T = O.length);
          for (var M = 0, G = new Array(T); M < T; M++) G[M] = O[M];
          return G;
        }
        var s = I8(),
          d = { fg: "#FFF", bg: "#000", newline: !1, escapeXML: !1, stream: !1, colors: y() };
        function y() {
          var O = {
            0: "#000",
            1: "#A00",
            2: "#0A0",
            3: "#A50",
            4: "#00A",
            5: "#A0A",
            6: "#0AA",
            7: "#AAA",
            8: "#555",
            9: "#F55",
            10: "#5F5",
            11: "#FF5",
            12: "#55F",
            13: "#F5F",
            14: "#5FF",
            15: "#FFF",
          };
          return (
            P(0, 5).forEach(function (T) {
              P(0, 5).forEach(function (M) {
                P(0, 5).forEach(function (G) {
                  return A(T, M, G, O);
                });
              });
            }),
            P(0, 23).forEach(function (T) {
              var M = T + 232,
                G = g(T * 10 + 8);
              O[M] = "#" + G + G + G;
            }),
            O
          );
        }
        function A(O, T, M, G) {
          var Y = 16 + O * 36 + T * 6 + M,
            K = O > 0 ? O * 40 + 55 : 0,
            Q = T > 0 ? T * 40 + 55 : 0,
            se = M > 0 ? M * 40 + 55 : 0;
          G[Y] = h([K, Q, se]);
        }
        function g(O) {
          for (var T = O.toString(16); T.length < 2; ) T = "0" + T;
          return T;
        }
        function h(O) {
          var T = [],
            M = o(O),
            G;
          try {
            for (M.s(); !(G = M.n()).done; ) {
              var Y = G.value;
              T.push(g(Y));
            }
          } catch (K) {
            M.e(K);
          } finally {
            M.f();
          }
          return "#" + T.join("");
        }
        function E(O, T, M, G) {
          var Y;
          return (
            T === "text"
              ? (Y = w(M, G))
              : T === "display"
              ? (Y = x(O, M, G))
              : T === "xterm256"
              ? (Y = U(O, G.colors[M]))
              : T === "rgb" && (Y = b(O, M)),
            Y
          );
        }
        function b(O, T) {
          T = T.substring(2).slice(0, -1);
          var M = +T.substr(0, 2),
            G = T.substring(5).split(";"),
            Y = G.map(function (K) {
              return ("0" + Number(K).toString(16)).substr(-2);
            }).join("");
          return I(O, (M === 38 ? "color:#" : "background-color:#") + Y);
        }
        function x(O, T, M) {
          T = parseInt(T, 10);
          var G = {
              "-1": function () {
                return "<br/>";
              },
              0: function () {
                return O.length && S(O);
              },
              1: function () {
                return j(O, "b");
              },
              3: function () {
                return j(O, "i");
              },
              4: function () {
                return j(O, "u");
              },
              8: function () {
                return I(O, "display:none");
              },
              9: function () {
                return j(O, "strike");
              },
              22: function () {
                return I(O, "font-weight:normal;text-decoration:none;font-style:normal");
              },
              23: function () {
                return z(O, "i");
              },
              24: function () {
                return z(O, "u");
              },
              39: function () {
                return U(O, M.fg);
              },
              49: function () {
                return V(O, M.bg);
              },
              53: function () {
                return I(O, "text-decoration:overline");
              },
            },
            Y;
          return (
            G[T]
              ? (Y = G[T]())
              : 4 < T && T < 7
              ? (Y = j(O, "blink"))
              : 29 < T && T < 38
              ? (Y = U(O, M.colors[T - 30]))
              : 39 < T && T < 48
              ? (Y = V(O, M.colors[T - 40]))
              : 89 < T && T < 98
              ? (Y = U(O, M.colors[8 + (T - 90)]))
              : 99 < T && T < 108 && (Y = V(O, M.colors[8 + (T - 100)])),
            Y
          );
        }
        function S(O) {
          var T = O.slice(0);
          return (
            (O.length = 0),
            T.reverse()
              .map(function (M) {
                return "</" + M + ">";
              })
              .join("")
          );
        }
        function P(O, T) {
          for (var M = [], G = O; G <= T; G++) M.push(G);
          return M;
        }
        function N(O) {
          return function (T) {
            return (O === null || T.category !== O) && O !== "all";
          };
        }
        function $(O) {
          O = parseInt(O, 10);
          var T = null;
          return (
            O === 0
              ? (T = "all")
              : O === 1
              ? (T = "bold")
              : 2 < O && O < 5
              ? (T = "underline")
              : 4 < O && O < 7
              ? (T = "blink")
              : O === 8
              ? (T = "hide")
              : O === 9
              ? (T = "strike")
              : (29 < O && O < 38) || O === 39 || (89 < O && O < 98)
              ? (T = "foreground-color")
              : ((39 < O && O < 48) || O === 49 || (99 < O && O < 108)) && (T = "background-color"),
            T
          );
        }
        function w(O, T) {
          return T.escapeXML ? s.encodeXML(O) : O;
        }
        function j(O, T, M) {
          return M || (M = ""), O.push(T), "<".concat(T).concat(M ? ' style="'.concat(M, '"') : "", ">");
        }
        function I(O, T) {
          return j(O, "span", T);
        }
        function U(O, T) {
          return j(O, "span", "color:" + T);
        }
        function V(O, T) {
          return j(O, "span", "background-color:" + T);
        }
        function z(O, T) {
          var M;
          if ((O.slice(-1)[0] === T && (M = O.pop()), M)) return "</" + T + ">";
        }
        function ie(O, T, M) {
          var G = !1,
            Y = 3;
          function K() {
            return "";
          }
          function Q(ue, Ae) {
            return M("xterm256", Ae), "";
          }
          function se(ue) {
            return T.newline ? M("display", -1) : M("text", ue), "";
          }
          function Re(ue, Ae) {
            (G = !0), Ae.trim().length === 0 && (Ae = "0"), (Ae = Ae.trimRight(";").split(";"));
            var Vr = o(Ae),
              di;
            try {
              for (Vr.s(); !(di = Vr.n()).done; ) {
                var Cy = di.value;
                M("display", Cy);
              }
            } catch (xy) {
              Vr.e(xy);
            } finally {
              Vr.f();
            }
            return "";
          }
          function Pe(ue) {
            return M("text", ue), "";
          }
          function J(ue) {
            return M("rgb", ue), "";
          }
          var Le = [
            { pattern: /^\x08+/, sub: K },
            { pattern: /^\x1b\[[012]?K/, sub: K },
            { pattern: /^\x1b\[\(B/, sub: K },
            { pattern: /^\x1b\[[34]8;2;\d+;\d+;\d+m/, sub: J },
            { pattern: /^\x1b\[38;5;(\d+)m/, sub: Q },
            { pattern: /^\n/, sub: se },
            { pattern: /^\r+\n/, sub: se },
            { pattern: /^\x1b\[((?:\d{1,3};?)+|)m/, sub: Re },
            { pattern: /^\x1b\[\d?J/, sub: K },
            { pattern: /^\x1b\[\d{0,3};\d{0,3}f/, sub: K },
            { pattern: /^\x1b\[?[\d;]{0,3}/, sub: K },
            { pattern: /^(([^\x1b\x08\r\n])+)/, sub: Pe },
          ];
          function B(ue, Ae) {
            (Ae > Y && G) || ((G = !1), (O = O.replace(ue.pattern, ue.sub)));
          }
          var R = [],
            k = O,
            _ = k.length;
          e: for (; _ > 0; ) {
            for (var L = 0, H = 0, de = Le.length; H < de; L = ++H) {
              var ae = Le[L];
              if ((B(ae, L), O.length !== _)) {
                _ = O.length;
                continue e;
              }
            }
            if (O.length === _) break;
            R.push(0), (_ = O.length);
          }
          return R;
        }
        function Z(O, T, M) {
          return T !== "text" && ((O = O.filter(N($(M)))), O.push({ token: T, data: M, category: $(M) })), O;
        }
        var X = (function () {
          function O(T) {
            r(this, O),
              (T = T || {}),
              T.colors && (T.colors = Object.assign({}, d.colors, T.colors)),
              (this.options = Object.assign({}, d, T)),
              (this.stack = []),
              (this.stickyStack = []);
          }
          return (
            a(O, [
              {
                key: "toHtml",
                value: function (T) {
                  var M = this;
                  T = typeof T == "string" ? [T] : T;
                  var G = this.stack,
                    Y = this.options,
                    K = [];
                  return (
                    this.stickyStack.forEach(function (Q) {
                      var se = E(G, Q.token, Q.data, Y);
                      se && K.push(se);
                    }),
                    ie(T.join(""), Y, function (Q, se) {
                      var Re = E(G, Q, se, Y);
                      Re && K.push(Re), Y.stream && (M.stickyStack = Z(M.stickyStack, Q, se));
                    }),
                    G.length && K.push(S(G)),
                    K.join("")
                  );
                },
              },
            ]),
            O
          );
        })();
        t.exports = X;
      },
    }),
    jJ = new Error("prepareAborted"),
    { AbortController: MJ } = globalThis;
  var { fetch: qJ } = oe;
  var { history: LJ, document: $J } = oe;
  var N8 = Jf(k8()),
    { document: UJ } = oe;
  var j8 = ((e) => (
    (e.MAIN = "MAIN"),
    (e.NOPREVIEW = "NOPREVIEW"),
    (e.PREPARING_STORY = "PREPARING_STORY"),
    (e.PREPARING_DOCS = "PREPARING_DOCS"),
    (e.ERROR = "ERROR"),
    e
  ))(j8 || {});
  var zJ = new N8.default({ escapeXML: !0 });
  var { document: HJ } = oe;
  l();
  c();
  p();
  l();
  c();
  p();
  l();
  c();
  p();
  var M8 = Object.create,
    cg = Object.defineProperty,
    q8 = Object.getOwnPropertyDescriptor,
    pg = Object.getOwnPropertyNames,
    L8 = Object.getPrototypeOf,
    $8 = Object.prototype.hasOwnProperty,
    ke = (e, t) =>
      function () {
        return t || (0, e[pg(e)[0]])((t = { exports: {} }).exports, t), t.exports;
      },
    U8 = (e, t, r, n) => {
      if ((t && typeof t == "object") || typeof t == "function")
        for (let a of pg(t))
          !$8.call(e, a) && a !== r && cg(e, a, { get: () => t[a], enumerable: !(n = q8(t, a)) || n.enumerable });
      return e;
    },
    Qn = (e, t, r) => (
      (r = e != null ? M8(L8(e)) : {}),
      U8(t || !e || !e.__esModule ? cg(r, "default", { value: e, enumerable: !0 }) : r, e)
    ),
    z8 = [
      "bubbles",
      "cancelBubble",
      "cancelable",
      "composed",
      "currentTarget",
      "defaultPrevented",
      "eventPhase",
      "isTrusted",
      "returnValue",
      "srcElement",
      "target",
      "timeStamp",
      "type",
    ],
    H8 = ["detail"];
  function dg(e) {
    let t = z8.filter((r) => e[r] !== void 0).reduce((r, n) => ({ ...r, [n]: e[n] }), {});
    return (
      e instanceof CustomEvent &&
        H8.filter((r) => e[r] !== void 0).forEach((r) => {
          t[r] = e[r];
        }),
      t
    );
  }
  var wg = fe(Cn(), 1),
    bg = ke({
      "node_modules/has-symbols/shams.js"(e, t) {
        "use strict";
        t.exports = function () {
          if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function") return !1;
          if (typeof Symbol.iterator == "symbol") return !0;
          var n = {},
            a = Symbol("test"),
            o = Object(a);
          if (
            typeof a == "string" ||
            Object.prototype.toString.call(a) !== "[object Symbol]" ||
            Object.prototype.toString.call(o) !== "[object Symbol]"
          )
            return !1;
          var u = 42;
          n[a] = u;
          for (a in n) return !1;
          if (
            (typeof Object.keys == "function" && Object.keys(n).length !== 0) ||
            (typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(n).length !== 0)
          )
            return !1;
          var i = Object.getOwnPropertySymbols(n);
          if (i.length !== 1 || i[0] !== a || !Object.prototype.propertyIsEnumerable.call(n, a)) return !1;
          if (typeof Object.getOwnPropertyDescriptor == "function") {
            var s = Object.getOwnPropertyDescriptor(n, a);
            if (s.value !== u || s.enumerable !== !0) return !1;
          }
          return !0;
        };
      },
    }),
    Ag = ke({
      "node_modules/has-symbols/index.js"(e, t) {
        "use strict";
        var r = typeof Symbol < "u" && Symbol,
          n = bg();
        t.exports = function () {
          return typeof r != "function" ||
            typeof Symbol != "function" ||
            typeof r("foo") != "symbol" ||
            typeof Symbol("bar") != "symbol"
            ? !1
            : n();
        };
      },
    }),
    G8 = ke({
      "node_modules/function-bind/implementation.js"(e, t) {
        "use strict";
        var r = "Function.prototype.bind called on incompatible ",
          n = Array.prototype.slice,
          a = Object.prototype.toString,
          o = "[object Function]";
        t.exports = function (i) {
          var s = this;
          if (typeof s != "function" || a.call(s) !== o) throw new TypeError(r + s);
          for (
            var d = n.call(arguments, 1),
              y,
              A = function () {
                if (this instanceof y) {
                  var x = s.apply(this, d.concat(n.call(arguments)));
                  return Object(x) === x ? x : this;
                } else return s.apply(i, d.concat(n.call(arguments)));
              },
              g = Math.max(0, s.length - d.length),
              h = [],
              E = 0;
            E < g;
            E++
          )
            h.push("$" + E);
          if (
            ((y = Function(
              "binder",
              "return function (" + h.join(",") + "){ return binder.apply(this,arguments); }"
            )(A)),
            s.prototype)
          ) {
            var b = function () {};
            (b.prototype = s.prototype), (y.prototype = new b()), (b.prototype = null);
          }
          return y;
        };
      },
    }),
    Cu = ke({
      "node_modules/function-bind/index.js"(e, t) {
        "use strict";
        var r = G8();
        t.exports = Function.prototype.bind || r;
      },
    }),
    W8 = ke({
      "node_modules/has/src/index.js"(e, t) {
        "use strict";
        var r = Cu();
        t.exports = r.call(Function.call, Object.prototype.hasOwnProperty);
      },
    }),
    Eg = ke({
      "node_modules/get-intrinsic/index.js"(e, t) {
        "use strict";
        var r,
          n = SyntaxError,
          a = Function,
          o = TypeError,
          u = function (Z) {
            try {
              return a('"use strict"; return (' + Z + ").constructor;")();
            } catch {}
          },
          i = Object.getOwnPropertyDescriptor;
        if (i)
          try {
            i({}, "");
          } catch {
            i = null;
          }
        var s = function () {
            throw new o();
          },
          d = i
            ? (function () {
                try {
                  return arguments.callee, s;
                } catch {
                  try {
                    return i(arguments, "callee").get;
                  } catch {
                    return s;
                  }
                }
              })()
            : s,
          y = Ag()(),
          A =
            Object.getPrototypeOf ||
            function (Z) {
              return Z.__proto__;
            },
          g = {},
          h = typeof Uint8Array > "u" ? r : A(Uint8Array),
          E = {
            "%AggregateError%": typeof AggregateError > "u" ? r : AggregateError,
            "%Array%": Array,
            "%ArrayBuffer%": typeof ArrayBuffer > "u" ? r : ArrayBuffer,
            "%ArrayIteratorPrototype%": y ? A([][Symbol.iterator]()) : r,
            "%AsyncFromSyncIteratorPrototype%": r,
            "%AsyncFunction%": g,
            "%AsyncGenerator%": g,
            "%AsyncGeneratorFunction%": g,
            "%AsyncIteratorPrototype%": g,
            "%Atomics%": typeof Atomics > "u" ? r : Atomics,
            "%BigInt%": typeof BigInt > "u" ? r : BigInt,
            "%Boolean%": Boolean,
            "%DataView%": typeof DataView > "u" ? r : DataView,
            "%Date%": Date,
            "%decodeURI%": decodeURI,
            "%decodeURIComponent%": decodeURIComponent,
            "%encodeURI%": encodeURI,
            "%encodeURIComponent%": encodeURIComponent,
            "%Error%": Error,
            "%eval%": eval,
            "%EvalError%": EvalError,
            "%Float32Array%": typeof Float32Array > "u" ? r : Float32Array,
            "%Float64Array%": typeof Float64Array > "u" ? r : Float64Array,
            "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? r : FinalizationRegistry,
            "%Function%": a,
            "%GeneratorFunction%": g,
            "%Int8Array%": typeof Int8Array > "u" ? r : Int8Array,
            "%Int16Array%": typeof Int16Array > "u" ? r : Int16Array,
            "%Int32Array%": typeof Int32Array > "u" ? r : Int32Array,
            "%isFinite%": isFinite,
            "%isNaN%": isNaN,
            "%IteratorPrototype%": y ? A(A([][Symbol.iterator]())) : r,
            "%JSON%": typeof JSON == "object" ? JSON : r,
            "%Map%": typeof Map > "u" ? r : Map,
            "%MapIteratorPrototype%": typeof Map > "u" || !y ? r : A(new Map()[Symbol.iterator]()),
            "%Math%": Math,
            "%Number%": Number,
            "%Object%": Object,
            "%parseFloat%": parseFloat,
            "%parseInt%": parseInt,
            "%Promise%": typeof Promise > "u" ? r : Promise,
            "%Proxy%": typeof Proxy > "u" ? r : Proxy,
            "%RangeError%": RangeError,
            "%ReferenceError%": ReferenceError,
            "%Reflect%": typeof Reflect > "u" ? r : Reflect,
            "%RegExp%": RegExp,
            "%Set%": typeof Set > "u" ? r : Set,
            "%SetIteratorPrototype%": typeof Set > "u" || !y ? r : A(new Set()[Symbol.iterator]()),
            "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? r : SharedArrayBuffer,
            "%String%": String,
            "%StringIteratorPrototype%": y ? A(""[Symbol.iterator]()) : r,
            "%Symbol%": y ? Symbol : r,
            "%SyntaxError%": n,
            "%ThrowTypeError%": d,
            "%TypedArray%": h,
            "%TypeError%": o,
            "%Uint8Array%": typeof Uint8Array > "u" ? r : Uint8Array,
            "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? r : Uint8ClampedArray,
            "%Uint16Array%": typeof Uint16Array > "u" ? r : Uint16Array,
            "%Uint32Array%": typeof Uint32Array > "u" ? r : Uint32Array,
            "%URIError%": URIError,
            "%WeakMap%": typeof WeakMap > "u" ? r : WeakMap,
            "%WeakRef%": typeof WeakRef > "u" ? r : WeakRef,
            "%WeakSet%": typeof WeakSet > "u" ? r : WeakSet,
          },
          b = function Z(X) {
            var O;
            if (X === "%AsyncFunction%") O = u("async function () {}");
            else if (X === "%GeneratorFunction%") O = u("function* () {}");
            else if (X === "%AsyncGeneratorFunction%") O = u("async function* () {}");
            else if (X === "%AsyncGenerator%") {
              var T = Z("%AsyncGeneratorFunction%");
              T && (O = T.prototype);
            } else if (X === "%AsyncIteratorPrototype%") {
              var M = Z("%AsyncGenerator%");
              M && (O = A(M.prototype));
            }
            return (E[X] = O), O;
          },
          x = {
            "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
            "%ArrayPrototype%": ["Array", "prototype"],
            "%ArrayProto_entries%": ["Array", "prototype", "entries"],
            "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
            "%ArrayProto_keys%": ["Array", "prototype", "keys"],
            "%ArrayProto_values%": ["Array", "prototype", "values"],
            "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
            "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
            "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
            "%BooleanPrototype%": ["Boolean", "prototype"],
            "%DataViewPrototype%": ["DataView", "prototype"],
            "%DatePrototype%": ["Date", "prototype"],
            "%ErrorPrototype%": ["Error", "prototype"],
            "%EvalErrorPrototype%": ["EvalError", "prototype"],
            "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
            "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
            "%FunctionPrototype%": ["Function", "prototype"],
            "%Generator%": ["GeneratorFunction", "prototype"],
            "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
            "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
            "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
            "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
            "%JSONParse%": ["JSON", "parse"],
            "%JSONStringify%": ["JSON", "stringify"],
            "%MapPrototype%": ["Map", "prototype"],
            "%NumberPrototype%": ["Number", "prototype"],
            "%ObjectPrototype%": ["Object", "prototype"],
            "%ObjProto_toString%": ["Object", "prototype", "toString"],
            "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
            "%PromisePrototype%": ["Promise", "prototype"],
            "%PromiseProto_then%": ["Promise", "prototype", "then"],
            "%Promise_all%": ["Promise", "all"],
            "%Promise_reject%": ["Promise", "reject"],
            "%Promise_resolve%": ["Promise", "resolve"],
            "%RangeErrorPrototype%": ["RangeError", "prototype"],
            "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
            "%RegExpPrototype%": ["RegExp", "prototype"],
            "%SetPrototype%": ["Set", "prototype"],
            "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
            "%StringPrototype%": ["String", "prototype"],
            "%SymbolPrototype%": ["Symbol", "prototype"],
            "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
            "%TypedArrayPrototype%": ["TypedArray", "prototype"],
            "%TypeErrorPrototype%": ["TypeError", "prototype"],
            "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
            "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
            "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
            "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
            "%URIErrorPrototype%": ["URIError", "prototype"],
            "%WeakMapPrototype%": ["WeakMap", "prototype"],
            "%WeakSetPrototype%": ["WeakSet", "prototype"],
          },
          S = Cu(),
          P = W8(),
          N = S.call(Function.call, Array.prototype.concat),
          $ = S.call(Function.apply, Array.prototype.splice),
          w = S.call(Function.call, String.prototype.replace),
          j = S.call(Function.call, String.prototype.slice),
          I = S.call(Function.call, RegExp.prototype.exec),
          U = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
          V = /\\(\\)?/g,
          z = function (X) {
            var O = j(X, 0, 1),
              T = j(X, -1);
            if (O === "%" && T !== "%") throw new n("invalid intrinsic syntax, expected closing `%`");
            if (T === "%" && O !== "%") throw new n("invalid intrinsic syntax, expected opening `%`");
            var M = [];
            return (
              w(X, U, function (G, Y, K, Q) {
                M[M.length] = K ? w(Q, V, "$1") : Y || G;
              }),
              M
            );
          },
          ie = function (X, O) {
            var T = X,
              M;
            if ((P(x, T) && ((M = x[T]), (T = "%" + M[0] + "%")), P(E, T))) {
              var G = E[T];
              if ((G === g && (G = b(T)), typeof G > "u" && !O))
                throw new o("intrinsic " + X + " exists, but is not available. Please file an issue!");
              return { alias: M, name: T, value: G };
            }
            throw new n("intrinsic " + X + " does not exist!");
          };
        t.exports = function (X, O) {
          if (typeof X != "string" || X.length === 0) throw new o("intrinsic name must be a non-empty string");
          if (arguments.length > 1 && typeof O != "boolean") throw new o('"allowMissing" argument must be a boolean');
          if (I(/^%?[^%]*%?$/, X) === null)
            throw new n("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
          var T = z(X),
            M = T.length > 0 ? T[0] : "",
            G = ie("%" + M + "%", O),
            Y = G.name,
            K = G.value,
            Q = !1,
            se = G.alias;
          se && ((M = se[0]), $(T, N([0, 1], se)));
          for (var Re = 1, Pe = !0; Re < T.length; Re += 1) {
            var J = T[Re],
              Le = j(J, 0, 1),
              B = j(J, -1);
            if ((Le === '"' || Le === "'" || Le === "`" || B === '"' || B === "'" || B === "`") && Le !== B)
              throw new n("property names with quotes must have matching quotes");
            if (((J === "constructor" || !Pe) && (Q = !0), (M += "." + J), (Y = "%" + M + "%"), P(E, Y))) K = E[Y];
            else if (K != null) {
              if (!(J in K)) {
                if (!O) throw new o("base intrinsic for " + X + " exists, but the property is not available.");
                return;
              }
              if (i && Re + 1 >= T.length) {
                var R = i(K, J);
                (Pe = !!R), Pe && "get" in R && !("originalValue" in R.get) ? (K = R.get) : (K = K[J]);
              } else (Pe = P(K, J)), (K = K[J]);
              Pe && !Q && (E[Y] = K);
            }
          }
          return K;
        };
      },
    }),
    V8 = ke({
      "node_modules/call-bind/index.js"(e, t) {
        "use strict";
        var r = Cu(),
          n = Eg(),
          a = n("%Function.prototype.apply%"),
          o = n("%Function.prototype.call%"),
          u = n("%Reflect.apply%", !0) || r.call(o, a),
          i = n("%Object.getOwnPropertyDescriptor%", !0),
          s = n("%Object.defineProperty%", !0),
          d = n("%Math.max%");
        if (s)
          try {
            s({}, "a", { value: 1 });
          } catch {
            s = null;
          }
        t.exports = function (g) {
          var h = u(r, o, arguments);
          if (i && s) {
            var E = i(h, "length");
            E.configurable && s(h, "length", { value: 1 + d(0, g.length - (arguments.length - 1)) });
          }
          return h;
        };
        var y = function () {
          return u(r, a, arguments);
        };
        s ? s(t.exports, "apply", { value: y }) : (t.exports.apply = y);
      },
    }),
    K8 = ke({
      "node_modules/call-bind/callBound.js"(e, t) {
        "use strict";
        var r = Eg(),
          n = V8(),
          a = n(r("String.prototype.indexOf"));
        t.exports = function (u, i) {
          var s = r(u, !!i);
          return typeof s == "function" && a(u, ".prototype.") > -1 ? n(s) : s;
        };
      },
    }),
    Y8 = ke({
      "node_modules/has-tostringtag/shams.js"(e, t) {
        "use strict";
        var r = bg();
        t.exports = function () {
          return r() && !!Symbol.toStringTag;
        };
      },
    }),
    X8 = ke({
      "node_modules/is-regex/index.js"(e, t) {
        "use strict";
        var r = K8(),
          n = Y8()(),
          a,
          o,
          u,
          i;
        n &&
          ((a = r("Object.prototype.hasOwnProperty")),
          (o = r("RegExp.prototype.exec")),
          (u = {}),
          (s = function () {
            throw u;
          }),
          (i = { toString: s, valueOf: s }),
          typeof Symbol.toPrimitive == "symbol" && (i[Symbol.toPrimitive] = s));
        var s,
          d = r("Object.prototype.toString"),
          y = Object.getOwnPropertyDescriptor,
          A = "[object RegExp]";
        t.exports = n
          ? function (h) {
              if (!h || typeof h != "object") return !1;
              var E = y(h, "lastIndex"),
                b = E && a(E, "value");
              if (!b) return !1;
              try {
                o(h, i);
              } catch (x) {
                return x === u;
              }
            }
          : function (h) {
              return !h || (typeof h != "object" && typeof h != "function") ? !1 : d(h) === A;
            };
      },
    }),
    J8 = ke({
      "node_modules/is-function/index.js"(e, t) {
        t.exports = n;
        var r = Object.prototype.toString;
        function n(a) {
          if (!a) return !1;
          var o = r.call(a);
          return (
            o === "[object Function]" ||
            (typeof a == "function" && o !== "[object RegExp]") ||
            (typeof window < "u" &&
              (a === window.setTimeout || a === window.alert || a === window.confirm || a === window.prompt))
          );
        }
      },
    }),
    Q8 = ke({
      "node_modules/is-symbol/index.js"(e, t) {
        "use strict";
        var r = Object.prototype.toString,
          n = Ag()();
        n
          ? ((a = Symbol.prototype.toString),
            (o = /^Symbol\(.*\)$/),
            (u = function (s) {
              return typeof s.valueOf() != "symbol" ? !1 : o.test(a.call(s));
            }),
            (t.exports = function (s) {
              if (typeof s == "symbol") return !0;
              if (r.call(s) !== "[object Symbol]") return !1;
              try {
                return u(s);
              } catch {
                return !1;
              }
            }))
          : (t.exports = function (s) {
              return !1;
            });
        var a, o, u;
      },
    }),
    Z8 = Qn(X8()),
    e_ = Qn(J8()),
    t_ = Qn(Q8());
  function r_(e) {
    return e != null && typeof e == "object" && Array.isArray(e) === !1;
  }
  var n_ = typeof window == "object" && window && window.Object === Object && window,
    a_ = n_,
    o_ = typeof self == "object" && self && self.Object === Object && self,
    u_ = a_ || o_ || Function("return this")(),
    xu = u_,
    i_ = xu.Symbol,
    Zt = i_,
    Dg = Object.prototype,
    s_ = Dg.hasOwnProperty,
    l_ = Dg.toString,
    qr = Zt ? Zt.toStringTag : void 0;
  function c_(e) {
    var t = s_.call(e, qr),
      r = e[qr];
    try {
      e[qr] = void 0;
      var n = !0;
    } catch {}
    var a = l_.call(e);
    return n && (t ? (e[qr] = r) : delete e[qr]), a;
  }
  var p_ = c_,
    d_ = Object.prototype,
    f_ = d_.toString;
  function h_(e) {
    return f_.call(e);
  }
  var g_ = h_,
    m_ = "[object Null]",
    y_ = "[object Undefined]",
    fg = Zt ? Zt.toStringTag : void 0;
  function b_(e) {
    return e == null ? (e === void 0 ? y_ : m_) : fg && fg in Object(e) ? p_(e) : g_(e);
  }
  var vg = b_;
  function A_(e) {
    return e != null && typeof e == "object";
  }
  var E_ = A_,
    D_ = "[object Symbol]";
  function v_(e) {
    return typeof e == "symbol" || (E_(e) && vg(e) == D_);
  }
  var Fu = v_;
  function C_(e, t) {
    for (var r = -1, n = e == null ? 0 : e.length, a = Array(n); ++r < n; ) a[r] = t(e[r], r, e);
    return a;
  }
  var x_ = C_,
    F_ = Array.isArray,
    Su = F_,
    S_ = 1 / 0,
    hg = Zt ? Zt.prototype : void 0,
    gg = hg ? hg.toString : void 0;
  function Cg(e) {
    if (typeof e == "string") return e;
    if (Su(e)) return x_(e, Cg) + "";
    if (Fu(e)) return gg ? gg.call(e) : "";
    var t = e + "";
    return t == "0" && 1 / e == -S_ ? "-0" : t;
  }
  var w_ = Cg;
  function B_(e) {
    var t = typeof e;
    return e != null && (t == "object" || t == "function");
  }
  var xg = B_,
    T_ = "[object AsyncFunction]",
    __ = "[object Function]",
    O_ = "[object GeneratorFunction]",
    R_ = "[object Proxy]";
  function P_(e) {
    if (!xg(e)) return !1;
    var t = vg(e);
    return t == __ || t == O_ || t == T_ || t == R_;
  }
  var I_ = P_,
    k_ = xu["__core-js_shared__"],
    vu = k_,
    mg = (function () {
      var e = /[^.]+$/.exec((vu && vu.keys && vu.keys.IE_PROTO) || "");
      return e ? "Symbol(src)_1." + e : "";
    })();
  function N_(e) {
    return !!mg && mg in e;
  }
  var j_ = N_,
    M_ = Function.prototype,
    q_ = M_.toString;
  function L_(e) {
    if (e != null) {
      try {
        return q_.call(e);
      } catch {}
      try {
        return e + "";
      } catch {}
    }
    return "";
  }
  var $_ = L_,
    U_ = /[\\^$.*+?()[\]{}|]/g,
    z_ = /^\[object .+?Constructor\]$/,
    H_ = Function.prototype,
    G_ = Object.prototype,
    W_ = H_.toString,
    V_ = G_.hasOwnProperty,
    K_ = RegExp(
      "^" +
        W_.call(V_)
          .replace(U_, "\\$&")
          .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") +
        "$"
    );
  function Y_(e) {
    if (!xg(e) || j_(e)) return !1;
    var t = I_(e) ? K_ : z_;
    return t.test($_(e));
  }
  var X_ = Y_;
  function J_(e, t) {
    return e?.[t];
  }
  var Q_ = J_;
  function Z_(e, t) {
    var r = Q_(e, t);
    return X_(r) ? r : void 0;
  }
  var Fg = Z_;
  function e6(e, t) {
    return e === t || (e !== e && t !== t);
  }
  var t6 = e6,
    r6 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    n6 = /^\w*$/;
  function a6(e, t) {
    if (Su(e)) return !1;
    var r = typeof e;
    return r == "number" || r == "symbol" || r == "boolean" || e == null || Fu(e)
      ? !0
      : n6.test(e) || !r6.test(e) || (t != null && e in Object(t));
  }
  var o6 = a6,
    u6 = Fg(Object, "create"),
    Lr = u6;
  function i6() {
    (this.__data__ = Lr ? Lr(null) : {}), (this.size = 0);
  }
  var s6 = i6;
  function l6(e) {
    var t = this.has(e) && delete this.__data__[e];
    return (this.size -= t ? 1 : 0), t;
  }
  var c6 = l6,
    p6 = "__lodash_hash_undefined__",
    d6 = Object.prototype,
    f6 = d6.hasOwnProperty;
  function h6(e) {
    var t = this.__data__;
    if (Lr) {
      var r = t[e];
      return r === p6 ? void 0 : r;
    }
    return f6.call(t, e) ? t[e] : void 0;
  }
  var g6 = h6,
    m6 = Object.prototype,
    y6 = m6.hasOwnProperty;
  function b6(e) {
    var t = this.__data__;
    return Lr ? t[e] !== void 0 : y6.call(t, e);
  }
  var A6 = b6,
    E6 = "__lodash_hash_undefined__";
  function D6(e, t) {
    var r = this.__data__;
    return (this.size += this.has(e) ? 0 : 1), (r[e] = Lr && t === void 0 ? E6 : t), this;
  }
  var v6 = D6;
  function er(e) {
    var t = -1,
      r = e == null ? 0 : e.length;
    for (this.clear(); ++t < r; ) {
      var n = e[t];
      this.set(n[0], n[1]);
    }
  }
  er.prototype.clear = s6;
  er.prototype.delete = c6;
  er.prototype.get = g6;
  er.prototype.has = A6;
  er.prototype.set = v6;
  var yg = er;
  function C6() {
    (this.__data__ = []), (this.size = 0);
  }
  var x6 = C6;
  function F6(e, t) {
    for (var r = e.length; r--; ) if (t6(e[r][0], t)) return r;
    return -1;
  }
  var Zn = F6,
    S6 = Array.prototype,
    w6 = S6.splice;
  function B6(e) {
    var t = this.__data__,
      r = Zn(t, e);
    if (r < 0) return !1;
    var n = t.length - 1;
    return r == n ? t.pop() : w6.call(t, r, 1), --this.size, !0;
  }
  var T6 = B6;
  function _6(e) {
    var t = this.__data__,
      r = Zn(t, e);
    return r < 0 ? void 0 : t[r][1];
  }
  var O6 = _6;
  function R6(e) {
    return Zn(this.__data__, e) > -1;
  }
  var P6 = R6;
  function I6(e, t) {
    var r = this.__data__,
      n = Zn(r, e);
    return n < 0 ? (++this.size, r.push([e, t])) : (r[n][1] = t), this;
  }
  var k6 = I6;
  function tr(e) {
    var t = -1,
      r = e == null ? 0 : e.length;
    for (this.clear(); ++t < r; ) {
      var n = e[t];
      this.set(n[0], n[1]);
    }
  }
  tr.prototype.clear = x6;
  tr.prototype.delete = T6;
  tr.prototype.get = O6;
  tr.prototype.has = P6;
  tr.prototype.set = k6;
  var N6 = tr,
    j6 = Fg(xu, "Map"),
    M6 = j6;
  function q6() {
    (this.size = 0), (this.__data__ = { hash: new yg(), map: new (M6 || N6)(), string: new yg() });
  }
  var L6 = q6;
  function $6(e) {
    var t = typeof e;
    return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
  }
  var U6 = $6;
  function z6(e, t) {
    var r = e.__data__;
    return U6(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
  }
  var ea = z6;
  function H6(e) {
    var t = ea(this, e).delete(e);
    return (this.size -= t ? 1 : 0), t;
  }
  var G6 = H6;
  function W6(e) {
    return ea(this, e).get(e);
  }
  var V6 = W6;
  function K6(e) {
    return ea(this, e).has(e);
  }
  var Y6 = K6;
  function X6(e, t) {
    var r = ea(this, e),
      n = r.size;
    return r.set(e, t), (this.size += r.size == n ? 0 : 1), this;
  }
  var J6 = X6;
  function rr(e) {
    var t = -1,
      r = e == null ? 0 : e.length;
    for (this.clear(); ++t < r; ) {
      var n = e[t];
      this.set(n[0], n[1]);
    }
  }
  rr.prototype.clear = L6;
  rr.prototype.delete = G6;
  rr.prototype.get = V6;
  rr.prototype.has = Y6;
  rr.prototype.set = J6;
  var Sg = rr,
    Q6 = "Expected a function";
  function wu(e, t) {
    if (typeof e != "function" || (t != null && typeof t != "function")) throw new TypeError(Q6);
    var r = function () {
      var n = arguments,
        a = t ? t.apply(this, n) : n[0],
        o = r.cache;
      if (o.has(a)) return o.get(a);
      var u = e.apply(this, n);
      return (r.cache = o.set(a, u) || o), u;
    };
    return (r.cache = new (wu.Cache || Sg)()), r;
  }
  wu.Cache = Sg;
  var Z6 = wu,
    eO = 500;
  function tO(e) {
    var t = Z6(e, function (n) {
        return r.size === eO && r.clear(), n;
      }),
      r = t.cache;
    return t;
  }
  var rO = tO,
    nO = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
    aO = /\\(\\)?/g,
    oO = rO(function (e) {
      var t = [];
      return (
        e.charCodeAt(0) === 46 && t.push(""),
        e.replace(nO, function (r, n, a, o) {
          t.push(a ? o.replace(aO, "$1") : n || r);
        }),
        t
      );
    }),
    uO = oO;
  function iO(e) {
    return e == null ? "" : w_(e);
  }
  var sO = iO;
  function lO(e, t) {
    return Su(e) ? e : o6(e, t) ? [e] : uO(sO(e));
  }
  var cO = lO,
    pO = 1 / 0;
  function dO(e) {
    if (typeof e == "string" || Fu(e)) return e;
    var t = e + "";
    return t == "0" && 1 / e == -pO ? "-0" : t;
  }
  var fO = dO;
  function hO(e, t) {
    t = cO(t, e);
    for (var r = 0, n = t.length; e != null && r < n; ) e = e[fO(t[r++])];
    return r && r == n ? e : void 0;
  }
  var gO = hO;
  function mO(e, t, r) {
    var n = e == null ? void 0 : gO(e, t);
    return n === void 0 ? r : n;
  }
  var yO = mO,
    Bu = r_,
    bO = (e) => {
      let t = null,
        r = !1,
        n = !1,
        a = !1,
        o = "";
      if (e.indexOf("//") >= 0 || e.indexOf("/*") >= 0)
        for (let u = 0; u < e.length; u += 1)
          !t && !r && !n && !a
            ? e[u] === '"' || e[u] === "'" || e[u] === "`"
              ? (t = e[u])
              : e[u] === "/" && e[u + 1] === "*"
              ? (r = !0)
              : e[u] === "/" && e[u + 1] === "/"
              ? (n = !0)
              : e[u] === "/" && e[u + 1] !== "/" && (a = !0)
            : (t &&
                ((e[u] === t && e[u - 1] !== "\\") ||
                  (e[u] ===
                    `
` &&
                    t !== "`")) &&
                (t = null),
              a &&
                ((e[u] === "/" && e[u - 1] !== "\\") ||
                  e[u] ===
                    `
`) &&
                (a = !1),
              r && e[u - 1] === "/" && e[u - 2] === "*" && (r = !1),
              n &&
                e[u] ===
                  `
` &&
                (n = !1)),
            !r && !n && (o += e[u]);
      else o = e;
      return o;
    },
    AO = (0, wg.default)(1e4)((e) => bO(e).replace(/\n\s*/g, "").trim()),
    EO = function (t, r) {
      let n = r.slice(0, r.indexOf("{")),
        a = r.slice(r.indexOf("{"));
      if (n.includes("=>") || n.includes("function")) return r;
      let o = n;
      return (o = o.replace(t, "function")), o + a;
    },
    DO = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?Z$/,
    Bg = (e) => e.match(/^[\[\{\"\}].*[\]\}\"]$/);
  function Tg(e) {
    if (!Bu(e)) return e;
    let t = e,
      r = !1;
    return (
      typeof Event < "u" && e instanceof Event && ((t = dg(t)), (r = !0)),
      (t = Object.keys(t).reduce((n, a) => {
        try {
          t[a] && t[a].toJSON, (n[a] = t[a]);
        } catch {
          r = !0;
        }
        return n;
      }, {})),
      r ? t : e
    );
  }
  var vO = function (t) {
      let r, n, a, o;
      return function (i, s) {
        try {
          if (i === "") return (o = []), (r = new Map([[s, "[]"]])), (n = new Map()), (a = []), s;
          let d = n.get(this) || this;
          for (; a.length && d !== a[0]; ) a.shift(), o.pop();
          if (typeof s == "boolean") return s;
          if (s === void 0) return t.allowUndefined ? "_undefined_" : void 0;
          if (s === null) return null;
          if (typeof s == "number")
            return s === -1 / 0 ? "_-Infinity_" : s === 1 / 0 ? "_Infinity_" : Number.isNaN(s) ? "_NaN_" : s;
          if (typeof s == "bigint") return `_bigint_${s.toString()}`;
          if (typeof s == "string") return DO.test(s) ? (t.allowDate ? `_date_${s}` : void 0) : s;
          if ((0, Z8.default)(s)) return t.allowRegExp ? `_regexp_${s.flags}|${s.source}` : void 0;
          if ((0, e_.default)(s)) {
            if (!t.allowFunction) return;
            let { name: A } = s,
              g = s.toString();
            return g.match(/(\[native code\]|WEBPACK_IMPORTED_MODULE|__webpack_exports__|__webpack_require__)/)
              ? `_function_${A}|${(() => {}).toString()}`
              : `_function_${A}|${AO(EO(i, g))}`;
          }
          if ((0, t_.default)(s)) {
            if (!t.allowSymbol) return;
            let A = Symbol.keyFor(s);
            return A !== void 0 ? `_gsymbol_${A}` : `_symbol_${s.toString().slice(7, -1)}`;
          }
          if (a.length >= t.maxDepth) return Array.isArray(s) ? `[Array(${s.length})]` : "[Object]";
          if (s === this) return `_duplicate_${JSON.stringify(o)}`;
          if (
            s.constructor &&
            s.constructor.name &&
            s.constructor.name !== "Object" &&
            !Array.isArray(s) &&
            !t.allowClass
          )
            return;
          let y = r.get(s);
          if (!y) {
            let A = Array.isArray(s) ? s : Tg(s);
            if (
              s.constructor &&
              s.constructor.name &&
              s.constructor.name !== "Object" &&
              !Array.isArray(s) &&
              t.allowClass
            )
              try {
                Object.assign(A, { "_constructor-name_": s.constructor.name });
              } catch {}
            return o.push(i), a.unshift(A), r.set(s, JSON.stringify(o)), s !== A && n.set(s, A), A;
          }
          return `_duplicate_${y}`;
        } catch {
          return;
        }
      };
    },
    CO = function reviver(options) {
      let refs = [],
        root;
      return function revive(key, value) {
        if (
          (key === "" &&
            ((root = value),
            refs.forEach(({ target: e, container: t, replacement: r }) => {
              let n = Bg(r) ? JSON.parse(r) : r.split(".");
              n.length === 0 ? (t[e] = root) : (t[e] = yO(root, n));
            })),
          key === "_constructor-name_")
        )
          return value;
        if (Bu(value) && value["_constructor-name_"] && options.allowFunction) {
          let e = value["_constructor-name_"];
          if (e !== "Object") {
            let t = new Function(`return function ${e.replace(/[^a-zA-Z0-9$_]+/g, "")}(){}`)();
            Object.setPrototypeOf(value, new t());
          }
          return delete value["_constructor-name_"], value;
        }
        if (typeof value == "string" && value.startsWith("_function_") && options.allowFunction) {
          let [, name, source] = value.match(/_function_([^|]*)\|(.*)/) || [],
            sourceSanitized = source.replace(/[(\(\))|\\| |\]|`]*$/, "");
          if (!options.lazyEval) return eval(`(${sourceSanitized})`);
          let result = (...args) => {
            let f = eval(`(${sourceSanitized})`);
            return f(...args);
          };
          return (
            Object.defineProperty(result, "toString", { value: () => sourceSanitized }),
            Object.defineProperty(result, "name", { value: name }),
            result
          );
        }
        if (typeof value == "string" && value.startsWith("_regexp_") && options.allowRegExp) {
          let [, e, t] = value.match(/_regexp_([^|]*)\|(.*)/) || [];
          return new RegExp(t, e);
        }
        return typeof value == "string" && value.startsWith("_date_") && options.allowDate
          ? new Date(value.replace("_date_", ""))
          : typeof value == "string" && value.startsWith("_duplicate_")
          ? (refs.push({ target: key, container: this, replacement: value.replace(/^_duplicate_/, "") }), null)
          : typeof value == "string" && value.startsWith("_symbol_") && options.allowSymbol
          ? Symbol(value.replace("_symbol_", ""))
          : typeof value == "string" && value.startsWith("_gsymbol_") && options.allowSymbol
          ? Symbol.for(value.replace("_gsymbol_", ""))
          : typeof value == "string" && value === "_-Infinity_"
          ? -1 / 0
          : typeof value == "string" && value === "_Infinity_"
          ? 1 / 0
          : typeof value == "string" && value === "_NaN_"
          ? NaN
          : typeof value == "string" && value.startsWith("_bigint_") && typeof BigInt == "function"
          ? BigInt(value.replace("_bigint_", ""))
          : value;
      };
    },
    _g = {
      maxDepth: 10,
      space: void 0,
      allowFunction: !0,
      allowRegExp: !0,
      allowDate: !0,
      allowClass: !0,
      allowUndefined: !0,
      allowSymbol: !0,
      lazyEval: !0,
    },
    Tu = (e, t = {}) => {
      let r = { ..._g, ...t };
      return JSON.stringify(Tg(e), vO(r), t.space);
    },
    xO = () => {
      let e = new Map();
      return function t(r) {
        Bu(r) &&
          Object.entries(r).forEach(([n, a]) => {
            a === "_undefined_" ? (r[n] = void 0) : e.get(a) || (e.set(a, !0), t(a));
          }),
          Array.isArray(r) &&
            r.forEach((n, a) => {
              n === "_undefined_" ? (e.set(n, !0), (r[a] = void 0)) : e.get(n) || (e.set(n, !0), t(n));
            });
      };
    },
    FO = (e, t = {}) => {
      let r = { ..._g, ...t },
        n = JSON.parse(e, CO(r));
      return xO()(n), n;
    };
  var SO = fe(Jn(), 1),
    { document: sQ, location: lQ } = oe;
  var { FEATURES: vQ } = oe;
  l();
  c();
  p();
  var Zm = fe(Rn(), 1);
  l();
  c();
  p();
  var PO = fe(Rn(), 1),
    IO = fe(Lg(), 1);
  var kO = ((e) => (
    (e.JAVASCRIPT = "JavaScript"), (e.FLOW = "Flow"), (e.TYPESCRIPT = "TypeScript"), (e.UNKNOWN = "Unknown"), e
  ))(kO || {});
  var ra = (e) => {
    if (!e) return "";
    if (typeof e == "string") return e;
    throw new Error(`Description: expected string, got: ${JSON.stringify(e)}`);
  };
  var $g = "storybook/docs",
    tee = `${$g}/panel`;
  var NO = `${$g}/snippet-rendered`,
    zr = ((e) => ((e.AUTO = "auto"), (e.CODE = "code"), (e.DYNAMIC = "dynamic"), e))(zr || {});
  var X4 = q.div(Tt, ({ theme: e }) => ({
      backgroundColor: e.base === "light" ? "rgba(0,0,0,.01)" : "rgba(255,255,255,.01)",
      borderRadius: e.appBorderRadius,
      border: `1px dashed ${e.appBorderColor}`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 20,
      margin: "25px 0 40px",
      color: pe(0.3, e.color.defaultText),
      fontSize: e.typography.size.s2,
    })),
    Ku = (e) => m.createElement(X4, { ...e, className: "docblock-emptyblock sb-unstyled" }),
    J4 = q(Yr)(({ theme: e }) => ({
      fontSize: `${e.typography.size.s2 - 1}px`,
      lineHeight: "19px",
      margin: "25px 0 40px",
      borderRadius: e.appBorderRadius,
      boxShadow: e.base === "light" ? "rgba(0, 0, 0, 0.10) 0 1px 3px 0" : "rgba(0, 0, 0, 0.20) 0 2px 5px 0",
      "pre.prismjs": { padding: 20, background: "inherit" },
    })),
    Q4 = q.div(({ theme: e }) => ({
      background: e.background.content,
      borderRadius: e.appBorderRadius,
      border: `1px solid ${e.appBorderColor}`,
      boxShadow: e.base === "light" ? "rgba(0, 0, 0, 0.10) 0 1px 3px 0" : "rgba(0, 0, 0, 0.20) 0 2px 5px 0",
      margin: "25px 0 40px",
      padding: "20px 20px 20px 22px",
    })),
    la = q.div(({ theme: e }) => ({
      animation: `${e.animation.glow} 1.5s ease-in-out infinite`,
      background: e.appBorderColor,
      height: 17,
      marginTop: 1,
      width: "60%",
      [`&:first-child${Fi}`]: { margin: 0 },
    })),
    Z4 = () =>
      m.createElement(
        Q4,
        null,
        m.createElement(la, null),
        m.createElement(la, { style: { width: "80%" } }),
        m.createElement(la, { style: { width: "30%" } }),
        m.createElement(la, { style: { width: "80%" } })
      ),
    ri = ({ isLoading: e, error: t, language: r, code: n, dark: a, format: o, ...u }) => {
      if (e) return m.createElement(Z4, null);
      if (t) return m.createElement(Ku, null, t);
      let i = m.createElement(
        J4,
        { bordered: !0, copyable: !0, format: o, language: r, className: "docblock-source sb-unstyled", ...u },
        n
      );
      if (typeof a > "u") return i;
      let s = a ? qa.dark : qa.light;
      return m.createElement(Ci, { theme: xi(s) }, i);
    };
  ri.defaultProps = { format: !1 };
  var be = (e) => `& :where(${e}:not(.sb-anchor, .sb-unstyled, .sb-unstyled ${e}))`,
    ni = 600,
    Ete = q.h1(Tt, ({ theme: e }) => ({
      color: e.color.defaultText,
      fontSize: e.typography.size.m3,
      fontWeight: e.typography.weight.bold,
      lineHeight: "32px",
      [`@media (min-width: ${ni}px)`]: { fontSize: e.typography.size.l1, lineHeight: "36px", marginBottom: "16px" },
    })),
    Dte = q.h2(Tt, ({ theme: e }) => ({
      fontWeight: e.typography.weight.regular,
      fontSize: e.typography.size.s3,
      lineHeight: "20px",
      borderBottom: "none",
      marginBottom: 15,
      [`@media (min-width: ${ni}px)`]: { fontSize: e.typography.size.m1, lineHeight: "28px", marginBottom: 24 },
      color: pe(0.25, e.color.defaultText),
    })),
    vte = q.div(({ theme: e }) => {
      let t = {
          fontFamily: e.typography.fonts.base,
          fontSize: e.typography.size.s3,
          margin: 0,
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale",
          WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
          WebkitOverflowScrolling: "touch",
        },
        r = {
          margin: "20px 0 8px",
          padding: 0,
          cursor: "text",
          position: "relative",
          color: e.color.defaultText,
          "&:first-of-type": { marginTop: 0, paddingTop: 0 },
          "&:hover a.anchor": { textDecoration: "none" },
          "& code": { fontSize: "inherit" },
        },
        n = {
          lineHeight: 1,
          margin: "0 2px",
          padding: "3px 5px",
          whiteSpace: "nowrap",
          borderRadius: 3,
          fontSize: e.typography.size.s2 - 1,
          border: e.base === "light" ? `1px solid ${e.color.mediumlight}` : `1px solid ${e.color.darker}`,
          color: e.base === "light" ? pe(0.1, e.color.defaultText) : pe(0.3, e.color.defaultText),
          backgroundColor: e.base === "light" ? e.color.lighter : e.color.border,
        };
      return {
        maxWidth: 1e3,
        width: "100%",
        [be("a")]: {
          ...t,
          fontSize: "inherit",
          lineHeight: "24px",
          color: e.color.secondary,
          textDecoration: "none",
          "&.absent": { color: "#cc0000" },
          "&.anchor": {
            display: "block",
            paddingLeft: 30,
            marginLeft: -30,
            cursor: "pointer",
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
          },
        },
        [be("blockquote")]: {
          ...t,
          margin: "16px 0",
          borderLeft: `4px solid ${e.color.medium}`,
          padding: "0 15px",
          color: e.color.dark,
          "& > :first-of-type": { marginTop: 0 },
          "& > :last-child": { marginBottom: 0 },
        },
        [be("div")]: t,
        [be("dl")]: {
          ...t,
          margin: "16px 0",
          padding: 0,
          "& dt": { fontSize: "14px", fontWeight: "bold", fontStyle: "italic", padding: 0, margin: "16px 0 4px" },
          "& dt:first-of-type": { padding: 0 },
          "& dt > :first-of-type": { marginTop: 0 },
          "& dt > :last-child": { marginBottom: 0 },
          "& dd": { margin: "0 0 16px", padding: "0 15px" },
          "& dd > :first-of-type": { marginTop: 0 },
          "& dd > :last-child": { marginBottom: 0 },
        },
        [be("h1")]: { ...t, ...r, fontSize: `${e.typography.size.l1}px`, fontWeight: e.typography.weight.bold },
        [be("h2")]: {
          ...t,
          ...r,
          fontSize: `${e.typography.size.m2}px`,
          paddingBottom: 4,
          borderBottom: `1px solid ${e.appBorderColor}`,
        },
        [be("h3")]: { ...t, ...r, fontSize: `${e.typography.size.m1}px`, fontWeight: e.typography.weight.bold },
        [be("h4")]: { ...t, ...r, fontSize: `${e.typography.size.s3}px` },
        [be("h5")]: { ...t, ...r, fontSize: `${e.typography.size.s2}px` },
        [be("h6")]: { ...t, ...r, fontSize: `${e.typography.size.s2}px`, color: e.color.dark },
        [be("hr")]: { border: "0 none", borderTop: `1px solid ${e.appBorderColor}`, height: 4, padding: 0 },
        [be("img")]: { maxWidth: "100%" },
        [be("li")]: {
          ...t,
          fontSize: e.typography.size.s2,
          color: e.color.defaultText,
          lineHeight: "24px",
          "& + li": { marginTop: ".25em" },
          "& ul, & ol": { marginTop: ".25em", marginBottom: 0 },
          "& code": n,
        },
        [be("ol")]: {
          ...t,
          margin: "16px 0",
          paddingLeft: 30,
          "& :first-of-type": { marginTop: 0 },
          "& :last-child": { marginBottom: 0 },
        },
        [be("p")]: {
          ...t,
          margin: "16px 0",
          fontSize: e.typography.size.s2,
          lineHeight: "24px",
          color: e.color.defaultText,
          "& code": n,
        },
        [be("pre")]: {
          ...t,
          fontFamily: e.typography.fonts.mono,
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale",
          lineHeight: "18px",
          padding: "11px 1rem",
          whiteSpace: "pre-wrap",
          color: "inherit",
          borderRadius: 3,
          margin: "1rem 0",
          "&:not(.prismjs)": { background: "transparent", border: "none", borderRadius: 0, padding: 0, margin: 0 },
          "& pre, &.prismjs": {
            padding: 15,
            margin: 0,
            whiteSpace: "pre-wrap",
            color: "inherit",
            fontSize: "13px",
            lineHeight: "19px",
            code: { color: "inherit", fontSize: "inherit" },
          },
          "& code": { whiteSpace: "pre" },
          "& code, & tt": { border: "none" },
        },
        [be("span")]: {
          ...t,
          "&.frame": {
            display: "block",
            overflow: "hidden",
            "& > span": {
              border: `1px solid ${e.color.medium}`,
              display: "block",
              float: "left",
              overflow: "hidden",
              margin: "13px 0 0",
              padding: 7,
              width: "auto",
            },
            "& span img": { display: "block", float: "left" },
            "& span span": { clear: "both", color: e.color.darkest, display: "block", padding: "5px 0 0" },
          },
          "&.align-center": {
            display: "block",
            overflow: "hidden",
            clear: "both",
            "& > span": { display: "block", overflow: "hidden", margin: "13px auto 0", textAlign: "center" },
            "& span img": { margin: "0 auto", textAlign: "center" },
          },
          "&.align-right": {
            display: "block",
            overflow: "hidden",
            clear: "both",
            "& > span": { display: "block", overflow: "hidden", margin: "13px 0 0", textAlign: "right" },
            "& span img": { margin: 0, textAlign: "right" },
          },
          "&.float-left": {
            display: "block",
            marginRight: 13,
            overflow: "hidden",
            float: "left",
            "& span": { margin: "13px 0 0" },
          },
          "&.float-right": {
            display: "block",
            marginLeft: 13,
            overflow: "hidden",
            float: "right",
            "& > span": { display: "block", overflow: "hidden", margin: "13px auto 0", textAlign: "right" },
          },
        },
        [be("table")]: {
          ...t,
          margin: "16px 0",
          fontSize: e.typography.size.s2,
          lineHeight: "24px",
          padding: 0,
          borderCollapse: "collapse",
          "& tr": {
            borderTop: `1px solid ${e.appBorderColor}`,
            backgroundColor: e.appContentBg,
            margin: 0,
            padding: 0,
          },
          "& tr:nth-of-type(2n)": { backgroundColor: e.base === "dark" ? e.color.darker : e.color.lighter },
          "& tr th": {
            fontWeight: "bold",
            color: e.color.defaultText,
            border: `1px solid ${e.appBorderColor}`,
            margin: 0,
            padding: "6px 13px",
          },
          "& tr td": {
            border: `1px solid ${e.appBorderColor}`,
            color: e.color.defaultText,
            margin: 0,
            padding: "6px 13px",
          },
          "& tr th :first-of-type, & tr td :first-of-type": { marginTop: 0 },
          "& tr th :last-child, & tr td :last-child": { marginBottom: 0 },
        },
        [be("ul")]: {
          ...t,
          margin: "16px 0",
          paddingLeft: 30,
          "& :first-of-type": { marginTop: 0 },
          "& :last-child": { marginBottom: 0 },
          listStyle: "disc",
        },
      };
    }),
    Cte = q.div(({ theme: e }) => ({
      background: e.background.content,
      display: "flex",
      justifyContent: "center",
      padding: "4rem 20px",
      minHeight: "100vh",
      boxSizing: "border-box",
      [`@media (min-width: ${ni}px)`]: {},
    }));
  var da = (e) => ({
      borderRadius: e.appBorderRadius,
      background: e.background.content,
      boxShadow: e.base === "light" ? "rgba(0, 0, 0, 0.10) 0 1px 3px 0" : "rgba(0, 0, 0, 0.20) 0 2px 5px 0",
      border: `1px solid ${e.appBorderColor}`,
    }),
    e9 = ({ zoom: e, resetZoom: t }) =>
      m.createElement(
        m.Fragment,
        null,
        m.createElement(
          ht,
          {
            key: "zoomin",
            onClick: (r) => {
              r.preventDefault(), e(0.8);
            },
            title: "Zoom in",
          },
          m.createElement(Te, { icon: "zoom" })
        ),
        m.createElement(
          ht,
          {
            key: "zoomout",
            onClick: (r) => {
              r.preventDefault(), e(1.25);
            },
            title: "Zoom out",
          },
          m.createElement(Te, { icon: "zoomout" })
        ),
        m.createElement(
          ht,
          {
            key: "zoomreset",
            onClick: (r) => {
              r.preventDefault(), t();
            },
            title: "Reset zoom",
          },
          m.createElement(Te, { icon: "zoomreset" })
        )
      ),
    t9 = q(Fa)({ position: "absolute", left: 0, right: 0, top: 0, transition: "transform .2s linear" }),
    r9 = ({ isLoading: e, storyId: t, baseUrl: r, zoom: n, resetZoom: a, ...o }) =>
      m.createElement(
        t9,
        { ...o },
        m.createElement(
          hi,
          { key: "left" },
          e ? [1, 2, 3].map((u) => m.createElement(Ba, { key: u })) : m.createElement(e9, { zoom: n, resetZoom: a })
        )
      ),
    ey = sr({ scale: 1 }),
    { window: n9 } = oe,
    a9 = class extends Je {
      constructor() {
        super(...arguments), (this.iframe = null);
      }
      componentDidMount() {
        let { id: e } = this.props;
        this.iframe = n9.document.getElementById(e);
      }
      shouldComponentUpdate(e) {
        let { scale: t } = e;
        return (
          t !== this.props.scale &&
            this.setIframeBodyStyle({
              width: `${t * 100}%`,
              height: `${t * 100}%`,
              transform: `scale(${1 / t})`,
              transformOrigin: "top left",
            }),
          !1
        );
      }
      setIframeBodyStyle(e) {
        return Object.assign(this.iframe.contentDocument.body.style, e);
      }
      render() {
        let { id: e, title: t, src: r, allowFullScreen: n, scale: a, ...o } = this.props;
        return m.createElement("iframe", {
          id: e,
          title: t,
          src: r,
          ...(n ? { allow: "fullscreen" } : {}),
          isLoading: "lazy",
          ...o,
        });
      }
    },
    { PREVIEW_URL: o9 } = oe,
    u9 = o9 || "iframe.html",
    Yu = ({ story: e, primary: t }) => `story--${e.id}${t ? "--primary" : ""}`,
    i9 = (e) => {
      let t = xe(),
        [r, n] = ne(!0),
        [a, o] = ne(),
        { story: u, height: i, autoplay: s, forceInitialArgs: d, renderStoryToElement: y } = e;
      me(() => {
        if (!(u && t.current)) return () => {};
        let g = t.current,
          h = y(
            u,
            g,
            {
              showMain: () => {},
              showError: ({ title: E, description: b }) => o(new Error(`${E} - ${b}`)),
              showException: (E) => o(E),
            },
            { autoplay: s, forceInitialArgs: d }
          );
        return (
          n(!1),
          () => {
            Promise.resolve().then(() => h());
          }
        );
      }, [s, y, u]);
      let A = "<span></span>";
      return a
        ? m.createElement("pre", null, m.createElement(xa, { error: a }))
        : m.createElement(
            m.Fragment,
            null,
            i
              ? m.createElement(
                  "style",
                  null,
                  `#${Yu(e)} { min-height: ${i}; transform: translateZ(0); overflow: auto }`
                )
              : null,
            r && m.createElement(ai, null),
            m.createElement("div", {
              ref: t,
              id: `${Yu(e)}-inner`,
              "data-name": u.name,
              dangerouslySetInnerHTML: { __html: A },
            })
          );
    },
    s9 = ({ story: e, height: t = "500px" }) =>
      m.createElement(
        "div",
        { style: { width: "100%", height: t } },
        m.createElement(ey.Consumer, null, ({ scale: r }) =>
          m.createElement(a9, {
            key: "iframe",
            id: `iframe--${e.id}`,
            title: e.name,
            src: Na(u9, e.id, { viewMode: "story" }),
            allowFullScreen: !0,
            scale: r,
            style: { width: "100%", height: "100%", border: "0 none" },
          })
        )
      ),
    l9 = (e) => {
      let { inline: t } = e;
      return m.createElement(
        "div",
        { id: Yu(e), className: "sb-story sb-unstyled", "data-story-block": "true" },
        t ? m.createElement(i9, { ...e }) : m.createElement(s9, { ...e })
      );
    },
    ai = () => m.createElement(Ta, null),
    c9 = q.div(
      ({ isColumn: e, columns: t, layout: r }) => ({
        display: e || !t ? "block" : "flex",
        position: "relative",
        flexWrap: "wrap",
        overflow: "auto",
        flexDirection: e ? "column" : "row",
        "& .innerZoomElementWrapper > *": e
          ? { width: r !== "fullscreen" ? "calc(100% - 20px)" : "100%", display: "block" }
          : { maxWidth: r !== "fullscreen" ? "calc(100% - 20px)" : "100%", display: "inline-block" },
      }),
      ({ layout: e = "padded" }) =>
        e === "centered" || e === "padded"
          ? {
              padding: "30px 20px",
              margin: -10,
              "& .innerZoomElementWrapper > *": { width: "auto", border: "10px solid transparent!important" },
            }
          : {},
      ({ layout: e = "padded" }) =>
        e === "centered"
          ? {
              display: "flex",
              justifyContent: "center",
              justifyItems: "center",
              alignContent: "center",
              alignItems: "center",
            }
          : {},
      ({ columns: e }) =>
        e && e > 1 ? { ".innerZoomElementWrapper > *": { minWidth: `calc(100% / ${e} - 20px)` } } : {}
    ),
    km = q(ri)(({ theme: e }) => ({
      margin: 0,
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
      borderBottomLeftRadius: e.appBorderRadius,
      borderBottomRightRadius: e.appBorderRadius,
      border: "none",
      background: e.base === "light" ? "rgba(0, 0, 0, 0.85)" : Ue(0.05, e.background.content),
      color: e.color.lightest,
      button: { background: e.base === "light" ? "rgba(0, 0, 0, 0.85)" : Ue(0.05, e.background.content) },
    })),
    p9 = q.div(
      ({ theme: e, withSource: t, isExpanded: r }) => ({
        position: "relative",
        overflow: "hidden",
        margin: "25px 0 40px",
        ...da(e),
        borderBottomLeftRadius: t && r && 0,
        borderBottomRightRadius: t && r && 0,
        borderBottomWidth: r && 0,
        "h3 + &": { marginTop: "16px" },
      }),
      ({ withToolbar: e }) => e && { paddingTop: 40 }
    ),
    d9 = (e, t, r) => {
      switch (!0) {
        case !!(e && e.error):
          return {
            source: null,
            actionItem: {
              title: "No code available",
              className: "docblock-code-toggle docblock-code-toggle--disabled",
              disabled: !0,
              onClick: () => r(!1),
            },
          };
        case t:
          return {
            source: m.createElement(km, { ...e, dark: !0 }),
            actionItem: {
              title: "Hide code",
              className: "docblock-code-toggle docblock-code-toggle--expanded",
              onClick: () => r(!1),
            },
          };
        default:
          return {
            source: m.createElement(km, { ...e, dark: !0 }),
            actionItem: { title: "Show code", className: "docblock-code-toggle", onClick: () => r(!0) },
          };
      }
    };
  function f9(e) {
    if (Kr.count(e) === 1) {
      let t = e;
      if (t.props) return t.props.id;
    }
    return null;
  }
  var h9 = q(r9)({ position: "absolute", top: 0, left: 0, right: 0, height: 40 }),
    g9 = q.div({ overflow: "hidden", position: "relative" }),
    Xu = ({
      isLoading: e,
      isColumn: t,
      columns: r,
      children: n,
      withSource: a,
      withToolbar: o = !1,
      isExpanded: u = !1,
      additionalActions: i,
      className: s,
      layout: d = "padded",
      ...y
    }) => {
      let [A, g] = ne(u),
        { source: h, actionItem: E } = d9(a, A, g),
        [b, x] = ne(1),
        S = [s].concat(["sbdocs", "sbdocs-preview", "sb-unstyled"]),
        P = a ? [E] : [],
        [N, $] = ne(i ? [...i] : []),
        w = [...P, ...N],
        { window: j } = oe,
        I = ge(async (V) => {
          let { createCopyToClipboardFunction: z } = await Promise.resolve().then(() => (cr(), vi));
          z();
        }, []),
        U = (V) => {
          let z = j.getSelection();
          (z && z.type === "Range") ||
            (V.preventDefault(),
            N.filter((ie) => ie.title === "Copied").length === 0 &&
              I(h.props.code).then(() => {
                $([...N, { title: "Copied", onClick: () => {} }]),
                  j.setTimeout(() => $(N.filter((ie) => ie.title !== "Copied")), 1500);
              }));
        };
      return m.createElement(
        p9,
        { withSource: a, withToolbar: o, ...y, className: S.join(" ") },
        o &&
          m.createElement(h9, {
            isLoading: e,
            border: !0,
            zoom: (V) => x(b * V),
            resetZoom: () => x(1),
            storyId: f9(n),
            baseUrl: "./iframe.html",
          }),
        m.createElement(
          ey.Provider,
          { value: { scale: b } },
          m.createElement(
            g9,
            { className: "docs-story", onCopyCapture: a && U },
            m.createElement(
              c9,
              { isColumn: t || !Array.isArray(n), columns: r, layout: d },
              m.createElement(
                Ia.Element,
                { scale: b },
                Array.isArray(n)
                  ? n.map((V, z) => m.createElement("div", { key: z }, V))
                  : m.createElement("div", null, n)
              )
            ),
            m.createElement(Da, { actionItems: w })
          )
        ),
        a && A && h
      );
    },
    m9 = q(Xu)(() => ({ ".docs-story": { paddingTop: 32, paddingBottom: 40 } })),
    y9 = () => m.createElement(m9, { isLoading: !0, withToolbar: !0 }, m.createElement(ai, null)),
    b9 = q.table(({ theme: e }) => ({
      "&&": {
        borderCollapse: "collapse",
        borderSpacing: 0,
        border: "none",
        tr: { border: "none !important", background: "none" },
        "td, th": { padding: 0, border: "none", width: "auto!important" },
        marginTop: 0,
        marginBottom: 0,
        "th:first-of-type, td:first-of-type": { paddingLeft: 0 },
        "th:last-of-type, td:last-of-type": { paddingRight: 0 },
        td: { paddingTop: 0, paddingBottom: 4, "&:not(:first-of-type)": { paddingLeft: 10, paddingRight: 0 } },
        tbody: { boxShadow: "none", border: "none" },
        code: Bt({ theme: e }),
        div: { span: { fontWeight: "bold" } },
        "& code": { margin: 0, display: "inline-block", fontSize: e.typography.size.s1 },
      },
    })),
    A9 = ({ tags: e }) => {
      let t = (e.params || []).filter((o) => o.description),
        r = t.length !== 0,
        n = e.deprecated != null,
        a = e.returns != null && e.returns.description != null;
      return !r && !a && !n
        ? null
        : m.createElement(
            m.Fragment,
            null,
            m.createElement(
              b9,
              null,
              m.createElement(
                "tbody",
                null,
                n &&
                  m.createElement(
                    "tr",
                    { key: "deprecated" },
                    m.createElement(
                      "td",
                      { colSpan: 2 },
                      m.createElement("strong", null, "Deprecated"),
                      ": ",
                      e.deprecated
                    )
                  ),
                r &&
                  t.map((o) =>
                    m.createElement(
                      "tr",
                      { key: o.name },
                      m.createElement("td", null, m.createElement("code", null, o.name)),
                      m.createElement("td", null, o.description)
                    )
                  ),
                a &&
                  m.createElement(
                    "tr",
                    { key: "returns" },
                    m.createElement("td", null, m.createElement("code", null, "Returns")),
                    m.createElement("td", null, e.returns.description)
                  )
              )
            )
          );
    },
    Ju = 8,
    Nm = q.div(({ isExpanded: e }) => ({
      display: "flex",
      flexDirection: e ? "column" : "row",
      flexWrap: "wrap",
      alignItems: "flex-start",
      marginBottom: "-4px",
      minWidth: 100,
    })),
    E9 = q.span(Bt, ({ theme: e, simple: t = !1 }) => ({
      flex: "0 0 auto",
      fontFamily: e.typography.fonts.mono,
      fontSize: e.typography.size.s1,
      wordBreak: "break-word",
      whiteSpace: "normal",
      maxWidth: "100%",
      margin: 0,
      marginRight: "4px",
      marginBottom: "4px",
      paddingTop: "2px",
      paddingBottom: "2px",
      lineHeight: "13px",
      ...(t && { background: "transparent", border: "0 none", paddingLeft: 0 }),
    })),
    D9 = q.button(({ theme: e }) => ({
      fontFamily: e.typography.fonts.mono,
      color: e.color.secondary,
      marginBottom: "4px",
      background: "none",
      border: "none",
    })),
    v9 = q.div(Bt, ({ theme: e }) => ({
      fontFamily: e.typography.fonts.mono,
      color: e.color.secondary,
      fontSize: e.typography.size.s1,
      margin: 0,
      whiteSpace: "nowrap",
      display: "flex",
      alignItems: "center",
    })),
    C9 = q.div(({ theme: e, width: t }) => ({
      width: t,
      minWidth: 200,
      maxWidth: 800,
      padding: 15,
      fontFamily: e.typography.fonts.mono,
      fontSize: e.typography.size.s1,
      boxSizing: "content-box",
      "& code": { padding: "0 !important" },
    })),
    x9 = q(Te)({ height: 10, width: 10, minWidth: 10, marginLeft: 4 }),
    F9 = () => m.createElement("span", null, "-"),
    ty = ({ text: e, simple: t }) => m.createElement(E9, { simple: t }, e),
    S9 = (0, Xm.default)(1e3)((e) => {
      let t = e.split(/\r?\n/);
      return `${Math.max(...t.map((r) => r.length))}ch`;
    }),
    w9 = (e) => {
      if (!e) return [e];
      let t = e.split("|").map((r) => r.trim());
      return (0, Jm.default)(t);
    },
    jm = (e, t = !0) => {
      let r = e;
      return t || (r = e.slice(0, Ju)), r.map((n) => m.createElement(ty, { key: n, text: n === "" ? '""' : n }));
    },
    B9 = ({ value: e, initialExpandedArgs: t }) => {
      let { summary: r, detail: n } = e,
        [a, o] = ne(!1),
        [u, i] = ne(t || !1);
      if (r == null) return null;
      let s = typeof r.toString == "function" ? r.toString() : r;
      if (n == null) {
        if (/[(){}[\]<>]/.test(s)) return m.createElement(ty, { text: s });
        let d = w9(s),
          y = d.length;
        return y > Ju
          ? m.createElement(
              Nm,
              { isExpanded: u },
              jm(d, u),
              m.createElement(D9, { onClick: () => i(!u) }, u ? "Show less..." : `Show ${y - Ju} more...`)
            )
          : m.createElement(Nm, null, jm(d));
      }
      return m.createElement(
        Pa,
        {
          closeOnOutsideClick: !0,
          placement: "bottom",
          visible: a,
          onVisibleChange: (d) => {
            o(d);
          },
          tooltip: m.createElement(C9, { width: S9(n) }, m.createElement(Yr, { language: "jsx", format: !1 }, n)),
        },
        m.createElement(
          v9,
          { className: "sbdocs-expandable" },
          m.createElement("span", null, s),
          m.createElement(x9, { icon: a ? "arrowup" : "arrowdown" })
        )
      );
    },
    Hu = ({ value: e, initialExpandedArgs: t }) =>
      e == null ? m.createElement(F9, null) : m.createElement(B9, { value: e, initialExpandedArgs: t }),
    T9 = q.label(({ theme: e }) => ({
      lineHeight: "18px",
      alignItems: "center",
      marginBottom: 8,
      display: "inline-block",
      position: "relative",
      whiteSpace: "nowrap",
      background: e.boolean.background,
      borderRadius: "3em",
      padding: 1,
      input: {
        appearance: "none",
        width: "100%",
        height: "100%",
        position: "absolute",
        left: 0,
        top: 0,
        margin: 0,
        padding: 0,
        border: "none",
        background: "transparent",
        cursor: "pointer",
        borderRadius: "3em",
        "&:focus": { outline: "none", boxShadow: `${e.color.secondary} 0 0 0 1px inset !important` },
      },
      span: {
        textAlign: "center",
        fontSize: e.typography.size.s1,
        fontWeight: e.typography.weight.bold,
        lineHeight: "1",
        cursor: "pointer",
        display: "inline-block",
        padding: "7px 15px",
        transition: "all 100ms ease-out",
        userSelect: "none",
        borderRadius: "3em",
        color: pe(0.5, e.color.defaultText),
        background: "transparent",
        "&:hover": { boxShadow: `${gr(0.3, e.appBorderColor)} 0 0 0 1px inset` },
        "&:active": { boxShadow: `${gr(0.05, e.appBorderColor)} 0 0 0 2px inset`, color: gr(1, e.appBorderColor) },
        "&:first-of-type": { paddingRight: 8 },
        "&:last-of-type": { paddingLeft: 8 },
      },
      "input:checked ~ span:last-of-type, input:not(:checked) ~ span:first-of-type": {
        background: e.boolean.selectedBackground,
        boxShadow: e.base === "light" ? `${gr(0.1, e.appBorderColor)} 0 0 2px` : `${e.appBorderColor} 0 0 0 1px`,
        color: e.color.defaultText,
        padding: "7px 15px",
      },
    })),
    _9 = (e) => e === "true",
    O9 = ({ name: e, value: t, onChange: r, onBlur: n, onFocus: a }) => {
      let o = ge(() => r(!1), [r]);
      if (t === void 0) return m.createElement(Be.Button, { id: pr(e), onClick: o }, "Set boolean");
      let u = _e(e),
        i = typeof t == "string" ? _9(t) : t;
      return m.createElement(
        T9,
        { htmlFor: u, title: i ? "Change to false" : "Change to true" },
        m.createElement("input", {
          id: u,
          type: "checkbox",
          onChange: (s) => r(s.target.checked),
          checked: i,
          name: e,
          onBlur: n,
          onFocus: a,
        }),
        m.createElement("span", null, "False"),
        m.createElement("span", null, "True")
      );
    },
    R9 = (e) => {
      let [t, r, n] = e.split("-"),
        a = new Date();
      return a.setFullYear(parseInt(t, 10), parseInt(r, 10) - 1, parseInt(n, 10)), a;
    },
    P9 = (e) => {
      let [t, r] = e.split(":"),
        n = new Date();
      return n.setHours(parseInt(t, 10)), n.setMinutes(parseInt(r, 10)), n;
    },
    I9 = (e) => {
      let t = new Date(e),
        r = `000${t.getFullYear()}`.slice(-4),
        n = `0${t.getMonth() + 1}`.slice(-2),
        a = `0${t.getDate()}`.slice(-2);
      return `${r}-${n}-${a}`;
    },
    k9 = (e) => {
      let t = new Date(e),
        r = `0${t.getHours()}`.slice(-2),
        n = `0${t.getMinutes()}`.slice(-2);
      return `${r}:${n}`;
    },
    N9 = q.div(({ theme: e }) => ({
      flex: 1,
      display: "flex",
      input: {
        marginLeft: 10,
        flex: 1,
        height: 32,
        "&::-webkit-calendar-picker-indicator": {
          opacity: 0.5,
          height: 12,
          filter: e.base === "light" ? void 0 : "invert(1)",
        },
      },
      "input:first-of-type": { marginLeft: 0, flexGrow: 4 },
      "input:last-of-type": { flexGrow: 3 },
    })),
    j9 = ({ name: e, value: t, onChange: r, onFocus: n, onBlur: a }) => {
      let [o, u] = ne(!0),
        i = xe(),
        s = xe();
      me(() => {
        o !== !1 && (i && i.current && (i.current.value = I9(t)), s && s.current && (s.current.value = k9(t)));
      }, [t]);
      let d = (g) => {
          let h = R9(g.target.value),
            E = new Date(t);
          E.setFullYear(h.getFullYear(), h.getMonth(), h.getDate());
          let b = E.getTime();
          b && r(b), u(!!b);
        },
        y = (g) => {
          let h = P9(g.target.value),
            E = new Date(t);
          E.setHours(h.getHours()), E.setMinutes(h.getMinutes());
          let b = E.getTime();
          b && r(b), u(!!b);
        },
        A = _e(e);
      return m.createElement(
        N9,
        null,
        m.createElement(Be.Input, {
          type: "date",
          max: "9999-12-31",
          ref: i,
          id: `${A}-date`,
          name: `${A}-date`,
          onChange: d,
          onFocus: n,
          onBlur: a,
        }),
        m.createElement(Be.Input, {
          type: "time",
          id: `${A}-time`,
          name: `${A}-time`,
          ref: s,
          onChange: y,
          onFocus: n,
          onBlur: a,
        }),
        o ? null : m.createElement("div", null, "invalid")
      );
    },
    M9 = q.label({ display: "flex" }),
    q9 = (e) => {
      let t = parseFloat(e);
      return Number.isNaN(t) ? void 0 : t;
    };
  var L9 = ({ name: e, value: t, onChange: r, min: n, max: a, step: o, onBlur: u, onFocus: i }) => {
      let [s, d] = ne(typeof t == "number" ? t : ""),
        [y, A] = ne(!1),
        [g, h] = ne(null),
        E = ge(
          (S) => {
            d(S.target.value);
            let P = parseFloat(S.target.value);
            Number.isNaN(P) ? h(new Error(`'${S.target.value}' is not a number`)) : (r(P), h(null));
          },
          [r, h]
        ),
        b = ge(() => {
          d("0"), r(0), A(!0);
        }, [A]),
        x = xe(null);
      return (
        me(() => {
          y && x.current && x.current.select();
        }, [y]),
        me(() => {
          s !== (typeof t == "number" ? t : "") && d(t);
        }, [t]),
        !y && t === void 0
          ? m.createElement(Be.Button, { id: pr(e), onClick: b }, "Set number")
          : m.createElement(
              M9,
              null,
              m.createElement(Be.Input, {
                ref: x,
                id: _e(e),
                type: "number",
                onChange: E,
                size: "flex",
                placeholder: "Edit number...",
                value: s,
                valid: g ? "error" : null,
                autoFocus: y,
                name: e,
                min: n,
                max: a,
                step: o,
                onFocus: i,
                onBlur: u,
              })
            )
      );
    },
    ry = (e, t) => {
      let r = t && Object.entries(t).find(([n, a]) => a === e);
      return r ? r[0] : void 0;
    },
    Qu = (e, t) =>
      e && t
        ? Object.entries(t)
            .filter((r) => e.includes(r[1]))
            .map((r) => r[0])
        : [],
    ny = (e, t) => e && t && e.map((r) => t[r]),
    $9 = q.div(({ isInline: e }) =>
      e
        ? {
            display: "flex",
            flexWrap: "wrap",
            alignItems: "flex-start",
            label: { display: "inline-flex", marginRight: 15 },
          }
        : { label: { display: "flex" } }
    ),
    U9 = q.span({}),
    z9 = q.label({
      lineHeight: "20px",
      alignItems: "center",
      marginBottom: 8,
      "&:last-child": { marginBottom: 0 },
      input: { margin: 0, marginRight: 6 },
    }),
    Mm = ({ name: e, options: t, value: r, onChange: n, isInline: a }) => {
      if (!t) return qe.warn(`Checkbox with no options: ${e}`), m.createElement(m.Fragment, null, "-");
      let o = Qu(r, t),
        [u, i] = ne(o),
        s = (y) => {
          let A = y.target.value,
            g = [...u];
          g.includes(A) ? g.splice(g.indexOf(A), 1) : g.push(A), n(ny(g, t)), i(g);
        };
      me(() => {
        i(Qu(r, t));
      }, [r]);
      let d = _e(e);
      return m.createElement(
        $9,
        { isInline: a },
        Object.keys(t).map((y, A) => {
          let g = `${d}-${A}`;
          return m.createElement(
            z9,
            { key: g, htmlFor: g },
            m.createElement("input", {
              type: "checkbox",
              id: g,
              name: g,
              value: y,
              onChange: s,
              checked: u?.includes(y),
            }),
            m.createElement(U9, null, y)
          );
        })
      );
    },
    H9 = q.div(({ isInline: e }) =>
      e
        ? {
            display: "flex",
            flexWrap: "wrap",
            alignItems: "flex-start",
            label: { display: "inline-flex", marginRight: 15 },
          }
        : { label: { display: "flex" } }
    ),
    G9 = q.span({}),
    W9 = q.label({
      lineHeight: "20px",
      alignItems: "center",
      marginBottom: 8,
      "&:last-child": { marginBottom: 0 },
      input: { margin: 0, marginRight: 6 },
    }),
    qm = ({ name: e, options: t, value: r, onChange: n, isInline: a }) => {
      if (!t) return qe.warn(`Radio with no options: ${e}`), m.createElement(m.Fragment, null, "-");
      let o = ry(r, t),
        u = _e(e);
      return m.createElement(
        H9,
        { isInline: a },
        Object.keys(t).map((i, s) => {
          let d = `${u}-${s}`;
          return m.createElement(
            W9,
            { key: d, htmlFor: d },
            m.createElement("input", {
              type: "radio",
              id: d,
              name: d,
              value: i,
              onChange: (y) => n(t[y.currentTarget.value]),
              checked: i === o,
            }),
            m.createElement(G9, null, i)
          );
        })
      );
    },
    V9 = {
      appearance: "none",
      border: "0 none",
      boxSizing: "inherit",
      display: " block",
      margin: " 0",
      background: "transparent",
      padding: 0,
      fontSize: "inherit",
      position: "relative",
    },
    ay = q.select(({ theme: e }) => ({
      ...V9,
      boxSizing: "border-box",
      position: "relative",
      padding: "6px 10px",
      width: "100%",
      color: e.input.color || "inherit",
      background: e.input.background,
      borderRadius: e.input.borderRadius,
      boxShadow: `${e.input.border} 0 0 0 1px inset`,
      fontSize: e.typography.size.s2 - 1,
      lineHeight: "20px",
      "&:focus": { boxShadow: `${e.color.secondary} 0 0 0 1px inset`, outline: "none" },
      "&[disabled]": { cursor: "not-allowed", opacity: 0.5 },
      "::placeholder": { color: e.textMutedColor },
      "&[multiple]": {
        overflow: "auto",
        padding: 0,
        option: { display: "block", padding: "6px 10px", marginLeft: 1, marginRight: 1 },
      },
    })),
    oy = q.span(({ theme: e }) => ({
      display: "inline-block",
      lineHeight: "normal",
      overflow: "hidden",
      position: "relative",
      verticalAlign: "top",
      width: "100%",
      svg: {
        position: "absolute",
        zIndex: 1,
        pointerEvents: "none",
        height: "12px",
        marginTop: "-6px",
        right: "12px",
        top: "50%",
        fill: e.textMutedColor,
        path: { fill: e.textMutedColor },
      },
    })),
    Lm = "Choose option...",
    K9 = ({ name: e, value: t, options: r, onChange: n }) => {
      let a = (i) => {
          n(r[i.currentTarget.value]);
        },
        o = ry(t, r) || Lm,
        u = _e(e);
      return m.createElement(
        oy,
        null,
        m.createElement(Te, { icon: "arrowdown" }),
        m.createElement(
          ay,
          { id: u, value: o, onChange: a },
          m.createElement("option", { key: "no-selection", disabled: !0 }, Lm),
          Object.keys(r).map((i) => m.createElement("option", { key: i }, i))
        )
      );
    },
    Y9 = ({ name: e, value: t, options: r, onChange: n }) => {
      let a = (i) => {
          let s = Array.from(i.currentTarget.options)
            .filter((d) => d.selected)
            .map((d) => d.value);
          n(ny(s, r));
        },
        o = Qu(t, r),
        u = _e(e);
      return m.createElement(
        oy,
        null,
        m.createElement(
          ay,
          { id: u, multiple: !0, value: o, onChange: a },
          Object.keys(r).map((i) => m.createElement("option", { key: i }, i))
        )
      );
    },
    $m = (e) => {
      let { name: t, options: r } = e;
      return r
        ? e.isMulti
          ? m.createElement(Y9, { ...e })
          : m.createElement(K9, { ...e })
        : (qe.warn(`Select with no options: ${t}`), m.createElement(m.Fragment, null, "-"));
    },
    X9 = (e, t) => (Array.isArray(e) ? e.reduce((r, n) => ((r[t?.[n] || String(n)] = n), r), {}) : e),
    J9 = { check: Mm, "inline-check": Mm, radio: qm, "inline-radio": qm, select: $m, "multi-select": $m },
    ur = (e) => {
      let { type: t = "select", labels: r, argType: n } = e,
        a = { ...e, options: n ? X9(n.options, r) : {}, isInline: t.includes("inline"), isMulti: t.includes("multi") },
        o = J9[t];
      if (o) return m.createElement(o, { ...a });
      throw new Error(`Unknown options type: ${t}`);
    },
    oi = "value",
    Q9 = "key",
    Z9 = "Error",
    eR = "Object",
    tR = "Array",
    rR = "String",
    nR = "Number",
    aR = "Boolean",
    oR = "Date",
    uR = "Null",
    iR = "Undefined",
    sR = "Function",
    lR = "Symbol",
    uy = "ADD_DELTA_TYPE",
    iy = "REMOVE_DELTA_TYPE",
    sy = "UPDATE_DELTA_TYPE";
  function ft(e) {
    return e !== null && typeof e == "object" && !Array.isArray(e) && typeof e[Symbol.iterator] == "function"
      ? "Iterable"
      : Object.prototype.toString.call(e).slice(8, -1);
  }
  function ly(e, t) {
    let r = ft(e),
      n = ft(t);
    return (r === "Function" || n === "Function") && n !== r;
  }
  var ui = class extends Je {
    constructor(e) {
      super(e),
        (this.state = { inputRefKey: null, inputRefValue: null }),
        (this.refInputValue = this.refInputValue.bind(this)),
        (this.refInputKey = this.refInputKey.bind(this)),
        (this.onKeydown = this.onKeydown.bind(this)),
        (this.onSubmit = this.onSubmit.bind(this));
    }
    componentDidMount() {
      let { inputRefKey: e, inputRefValue: t } = this.state,
        { onlyValue: r } = this.props;
      e && typeof e.focus == "function" && e.focus(),
        r && t && typeof t.focus == "function" && t.focus(),
        document.addEventListener("keydown", this.onKeydown);
    }
    componentWillUnmount() {
      document.removeEventListener("keydown", this.onKeydown);
    }
    onKeydown(e) {
      e.altKey ||
        e.ctrlKey ||
        e.metaKey ||
        e.shiftKey ||
        e.repeat ||
        ((e.code === "Enter" || e.key === "Enter") && (e.preventDefault(), this.onSubmit()),
        (e.code === "Escape" || e.key === "Escape") && (e.preventDefault(), this.props.handleCancel()));
    }
    onSubmit() {
      let { handleAdd: e, onlyValue: t, onSubmitValueParser: r, keyPath: n, deep: a } = this.props,
        { inputRefKey: o, inputRefValue: u } = this.state,
        i = {};
      if (!t) {
        if (!o.value) return;
        i.key = o.value;
      }
      (i.newValue = r(!1, n, a, i.key, u.value)), e(i);
    }
    refInputKey(e) {
      this.state.inputRefKey = e;
    }
    refInputValue(e) {
      this.state.inputRefValue = e;
    }
    render() {
      let {
          handleCancel: e,
          onlyValue: t,
          addButtonElement: r,
          cancelButtonElement: n,
          inputElementGenerator: a,
          keyPath: o,
          deep: u,
        } = this.props,
        i = he(r, { onClick: this.onSubmit }),
        s = he(n, { onClick: e }),
        d = a(oi, o, u),
        y = he(d, { placeholder: "Value", ref: this.refInputValue }),
        A = null;
      if (!t) {
        let g = a(Q9, o, u);
        A = he(g, { placeholder: "Key", ref: this.refInputKey });
      }
      return m.createElement("span", { className: "rejt-add-value-node" }, A, y, s, i);
    }
  };
  ui.defaultProps = {
    onlyValue: !1,
    addButtonElement: m.createElement("button", null, "+"),
    cancelButtonElement: m.createElement("button", null, "c"),
  };
  var cy = class extends Je {
    constructor(e) {
      super(e);
      let t = [...e.keyPath, e.name];
      (this.state = {
        data: e.data,
        name: e.name,
        keyPath: t,
        deep: e.deep,
        nextDeep: e.deep + 1,
        collapsed: e.isCollapsed(t, e.deep, e.data),
        addFormVisible: !1,
      }),
        (this.handleCollapseMode = this.handleCollapseMode.bind(this)),
        (this.handleRemoveItem = this.handleRemoveItem.bind(this)),
        (this.handleAddMode = this.handleAddMode.bind(this)),
        (this.handleAddValueAdd = this.handleAddValueAdd.bind(this)),
        (this.handleAddValueCancel = this.handleAddValueCancel.bind(this)),
        (this.handleEditValue = this.handleEditValue.bind(this)),
        (this.onChildUpdate = this.onChildUpdate.bind(this)),
        (this.renderCollapsed = this.renderCollapsed.bind(this)),
        (this.renderNotCollapsed = this.renderNotCollapsed.bind(this));
    }
    static getDerivedStateFromProps(e, t) {
      return e.data !== t.data ? { data: e.data } : null;
    }
    onChildUpdate(e, t) {
      let { data: r, keyPath: n } = this.state;
      (r[e] = t), this.setState({ data: r });
      let { onUpdate: a } = this.props,
        o = n.length;
      a(n[o - 1], r);
    }
    handleAddMode() {
      this.setState({ addFormVisible: !0 });
    }
    handleCollapseMode() {
      this.setState((e) => ({ collapsed: !e.collapsed }));
    }
    handleRemoveItem(e) {
      return () => {
        let { beforeRemoveAction: t, logger: r } = this.props,
          { data: n, keyPath: a, nextDeep: o } = this.state,
          u = n[e];
        t(e, a, o, u)
          .then(() => {
            let i = { keyPath: a, deep: o, key: e, oldValue: u, type: iy };
            n.splice(e, 1), this.setState({ data: n });
            let { onUpdate: s, onDeltaUpdate: d } = this.props;
            s(a[a.length - 1], n), d(i);
          })
          .catch(r.error);
      };
    }
    handleAddValueAdd({ newValue: e }) {
      let { data: t, keyPath: r, nextDeep: n } = this.state,
        { beforeAddAction: a, logger: o } = this.props;
      a(t.length, r, n, e)
        .then(() => {
          let u = [...t, e];
          this.setState({ data: u }), this.handleAddValueCancel();
          let { onUpdate: i, onDeltaUpdate: s } = this.props;
          i(r[r.length - 1], u), s({ type: uy, keyPath: r, deep: n, key: u.length - 1, newValue: e });
        })
        .catch(o.error);
    }
    handleAddValueCancel() {
      this.setState({ addFormVisible: !1 });
    }
    handleEditValue({ key: e, value: t }) {
      return new Promise((r, n) => {
        let { beforeUpdateAction: a } = this.props,
          { data: o, keyPath: u, nextDeep: i } = this.state,
          s = o[e];
        a(e, u, i, s, t)
          .then(() => {
            (o[e] = t), this.setState({ data: o });
            let { onUpdate: d, onDeltaUpdate: y } = this.props;
            d(u[u.length - 1], o), y({ type: sy, keyPath: u, deep: i, key: e, newValue: t, oldValue: s }), r(void 0);
          })
          .catch(n);
      });
    }
    renderCollapsed() {
      let { name: e, data: t, keyPath: r, deep: n } = this.state,
        { handleRemove: a, readOnly: o, getStyle: u, dataType: i, minusMenuElement: s } = this.props,
        { minus: d, collapsed: y } = u(e, t, r, n, i),
        A = o(e, t, r, n, i),
        g = he(s, { onClick: a, className: "rejt-minus-menu", style: d });
      return m.createElement(
        "span",
        { className: "rejt-collapsed" },
        m.createElement(
          "span",
          { className: "rejt-collapsed-text", style: y, onClick: this.handleCollapseMode },
          "[...] ",
          t.length,
          " ",
          t.length === 1 ? "item" : "items"
        ),
        !A && g
      );
    }
    renderNotCollapsed() {
      let { name: e, data: t, keyPath: r, deep: n, addFormVisible: a, nextDeep: o } = this.state,
        {
          isCollapsed: u,
          handleRemove: i,
          onDeltaUpdate: s,
          readOnly: d,
          getStyle: y,
          dataType: A,
          addButtonElement: g,
          cancelButtonElement: h,
          editButtonElement: E,
          inputElementGenerator: b,
          textareaElementGenerator: x,
          minusMenuElement: S,
          plusMenuElement: P,
          beforeRemoveAction: N,
          beforeAddAction: $,
          beforeUpdateAction: w,
          logger: j,
          onSubmitValueParser: I,
        } = this.props,
        { minus: U, plus: V, delimiter: z, ul: ie, addForm: Z } = y(e, t, r, n, A),
        X = d(e, t, r, n, A),
        O = he(P, { onClick: this.handleAddMode, className: "rejt-plus-menu", style: V }),
        T = he(S, { onClick: i, className: "rejt-minus-menu", style: U }),
        M = !0,
        G = "[",
        Y = "]";
      return m.createElement(
        "span",
        { className: "rejt-not-collapsed" },
        m.createElement("span", { className: "rejt-not-collapsed-delimiter", style: z }, G),
        !a && O,
        m.createElement(
          "ul",
          { className: "rejt-not-collapsed-list", style: ie },
          t.map((K, Q) =>
            m.createElement(fa, {
              key: Q,
              name: `${Q}`,
              data: K,
              keyPath: r,
              deep: o,
              isCollapsed: u,
              handleRemove: this.handleRemoveItem(Q),
              handleUpdateValue: this.handleEditValue,
              onUpdate: this.onChildUpdate,
              onDeltaUpdate: s,
              readOnly: d,
              getStyle: y,
              addButtonElement: g,
              cancelButtonElement: h,
              editButtonElement: E,
              inputElementGenerator: b,
              textareaElementGenerator: x,
              minusMenuElement: S,
              plusMenuElement: P,
              beforeRemoveAction: N,
              beforeAddAction: $,
              beforeUpdateAction: w,
              logger: j,
              onSubmitValueParser: I,
            })
          )
        ),
        !X &&
          a &&
          m.createElement(
            "div",
            { className: "rejt-add-form", style: Z },
            m.createElement(ui, {
              handleAdd: this.handleAddValueAdd,
              handleCancel: this.handleAddValueCancel,
              onlyValue: M,
              addButtonElement: g,
              cancelButtonElement: h,
              inputElementGenerator: b,
              keyPath: r,
              deep: n,
              onSubmitValueParser: I,
            })
          ),
        m.createElement("span", { className: "rejt-not-collapsed-delimiter", style: z }, Y),
        !X && T
      );
    }
    render() {
      let { name: e, collapsed: t, data: r, keyPath: n, deep: a } = this.state,
        { dataType: o, getStyle: u } = this.props,
        i = t ? this.renderCollapsed() : this.renderNotCollapsed(),
        s = u(e, r, n, a, o);
      return m.createElement(
        "div",
        { className: "rejt-array-node" },
        m.createElement(
          "span",
          { onClick: this.handleCollapseMode },
          m.createElement("span", { className: "rejt-name", style: s.name }, e, " :", " ")
        ),
        i
      );
    }
  };
  cy.defaultProps = {
    keyPath: [],
    deep: 0,
    minusMenuElement: m.createElement("span", null, " - "),
    plusMenuElement: m.createElement("span", null, " + "),
  };
  var py = class extends Je {
    constructor(e) {
      super(e);
      let t = [...e.keyPath, e.name];
      (this.state = { value: e.value, name: e.name, keyPath: t, deep: e.deep, editEnabled: !1, inputRef: null }),
        (this.handleEditMode = this.handleEditMode.bind(this)),
        (this.refInput = this.refInput.bind(this)),
        (this.handleCancelEdit = this.handleCancelEdit.bind(this)),
        (this.handleEdit = this.handleEdit.bind(this)),
        (this.onKeydown = this.onKeydown.bind(this));
    }
    static getDerivedStateFromProps(e, t) {
      return e.value !== t.value ? { value: e.value } : null;
    }
    componentDidUpdate() {
      let { editEnabled: e, inputRef: t, name: r, value: n, keyPath: a, deep: o } = this.state,
        { readOnly: u, dataType: i } = this.props,
        s = u(r, n, a, o, i);
      e && !s && typeof t.focus == "function" && t.focus();
    }
    componentDidMount() {
      document.addEventListener("keydown", this.onKeydown);
    }
    componentWillUnmount() {
      document.removeEventListener("keydown", this.onKeydown);
    }
    onKeydown(e) {
      e.altKey ||
        e.ctrlKey ||
        e.metaKey ||
        e.shiftKey ||
        e.repeat ||
        ((e.code === "Enter" || e.key === "Enter") && (e.preventDefault(), this.handleEdit()),
        (e.code === "Escape" || e.key === "Escape") && (e.preventDefault(), this.handleCancelEdit()));
    }
    handleEdit() {
      let { handleUpdateValue: e, originalValue: t, logger: r, onSubmitValueParser: n, keyPath: a } = this.props,
        { inputRef: o, name: u, deep: i } = this.state;
      if (!o) return;
      let s = n(!0, a, i, u, o.value);
      e({ value: s, key: u })
        .then(() => {
          ly(t, s) || this.handleCancelEdit();
        })
        .catch(r.error);
    }
    handleEditMode() {
      this.setState({ editEnabled: !0 });
    }
    refInput(e) {
      this.state.inputRef = e;
    }
    handleCancelEdit() {
      this.setState({ editEnabled: !1 });
    }
    render() {
      let { name: e, value: t, editEnabled: r, keyPath: n, deep: a } = this.state,
        {
          handleRemove: o,
          originalValue: u,
          readOnly: i,
          dataType: s,
          getStyle: d,
          editButtonElement: y,
          cancelButtonElement: A,
          textareaElementGenerator: g,
          minusMenuElement: h,
          keyPath: E,
        } = this.props,
        b = d(e, u, n, a, s),
        x = null,
        S = null,
        P = i(e, u, n, a, s);
      if (r && !P) {
        let N = g(oi, E, a, e, u, s),
          $ = he(y, { onClick: this.handleEdit }),
          w = he(A, { onClick: this.handleCancelEdit }),
          j = he(N, { ref: this.refInput, defaultValue: u });
        (x = m.createElement("span", { className: "rejt-edit-form", style: b.editForm }, j, " ", w, $)), (S = null);
      } else {
        x = m.createElement(
          "span",
          { className: "rejt-value", style: b.value, onClick: P ? null : this.handleEditMode },
          t
        );
        let N = he(h, { onClick: o, className: "rejt-minus-menu", style: b.minus });
        S = P ? null : N;
      }
      return m.createElement(
        "li",
        { className: "rejt-function-value-node", style: b.li },
        m.createElement("span", { className: "rejt-name", style: b.name }, e, " :", " "),
        x,
        S
      );
    }
  };
  py.defaultProps = {
    keyPath: [],
    deep: 0,
    handleUpdateValue: () => {},
    editButtonElement: m.createElement("button", null, "e"),
    cancelButtonElement: m.createElement("button", null, "c"),
    minusMenuElement: m.createElement("span", null, " - "),
  };
  var fa = class extends Je {
    constructor(e) {
      super(e), (this.state = { data: e.data, name: e.name, keyPath: e.keyPath, deep: e.deep });
    }
    static getDerivedStateFromProps(e, t) {
      return e.data !== t.data ? { data: e.data } : null;
    }
    render() {
      let { data: e, name: t, keyPath: r, deep: n } = this.state,
        {
          isCollapsed: a,
          handleRemove: o,
          handleUpdateValue: u,
          onUpdate: i,
          onDeltaUpdate: s,
          readOnly: d,
          getStyle: y,
          addButtonElement: A,
          cancelButtonElement: g,
          editButtonElement: h,
          inputElementGenerator: E,
          textareaElementGenerator: b,
          minusMenuElement: x,
          plusMenuElement: S,
          beforeRemoveAction: P,
          beforeAddAction: N,
          beforeUpdateAction: $,
          logger: w,
          onSubmitValueParser: j,
        } = this.props,
        I = () => !0,
        U = ft(e);
      switch (U) {
        case Z9:
          return m.createElement(Zu, {
            data: e,
            name: t,
            isCollapsed: a,
            keyPath: r,
            deep: n,
            handleRemove: o,
            onUpdate: i,
            onDeltaUpdate: s,
            readOnly: I,
            dataType: U,
            getStyle: y,
            addButtonElement: A,
            cancelButtonElement: g,
            editButtonElement: h,
            inputElementGenerator: E,
            textareaElementGenerator: b,
            minusMenuElement: x,
            plusMenuElement: S,
            beforeRemoveAction: P,
            beforeAddAction: N,
            beforeUpdateAction: $,
            logger: w,
            onSubmitValueParser: j,
          });
        case eR:
          return m.createElement(Zu, {
            data: e,
            name: t,
            isCollapsed: a,
            keyPath: r,
            deep: n,
            handleRemove: o,
            onUpdate: i,
            onDeltaUpdate: s,
            readOnly: d,
            dataType: U,
            getStyle: y,
            addButtonElement: A,
            cancelButtonElement: g,
            editButtonElement: h,
            inputElementGenerator: E,
            textareaElementGenerator: b,
            minusMenuElement: x,
            plusMenuElement: S,
            beforeRemoveAction: P,
            beforeAddAction: N,
            beforeUpdateAction: $,
            logger: w,
            onSubmitValueParser: j,
          });
        case tR:
          return m.createElement(cy, {
            data: e,
            name: t,
            isCollapsed: a,
            keyPath: r,
            deep: n,
            handleRemove: o,
            onUpdate: i,
            onDeltaUpdate: s,
            readOnly: d,
            dataType: U,
            getStyle: y,
            addButtonElement: A,
            cancelButtonElement: g,
            editButtonElement: h,
            inputElementGenerator: E,
            textareaElementGenerator: b,
            minusMenuElement: x,
            plusMenuElement: S,
            beforeRemoveAction: P,
            beforeAddAction: N,
            beforeUpdateAction: $,
            logger: w,
            onSubmitValueParser: j,
          });
        case rR:
          return m.createElement(dt, {
            name: t,
            value: `"${e}"`,
            originalValue: e,
            keyPath: r,
            deep: n,
            handleRemove: o,
            handleUpdateValue: u,
            readOnly: d,
            dataType: U,
            getStyle: y,
            cancelButtonElement: g,
            editButtonElement: h,
            inputElementGenerator: E,
            minusMenuElement: x,
            logger: w,
            onSubmitValueParser: j,
          });
        case nR:
          return m.createElement(dt, {
            name: t,
            value: e,
            originalValue: e,
            keyPath: r,
            deep: n,
            handleRemove: o,
            handleUpdateValue: u,
            readOnly: d,
            dataType: U,
            getStyle: y,
            cancelButtonElement: g,
            editButtonElement: h,
            inputElementGenerator: E,
            minusMenuElement: x,
            logger: w,
            onSubmitValueParser: j,
          });
        case aR:
          return m.createElement(dt, {
            name: t,
            value: e ? "true" : "false",
            originalValue: e,
            keyPath: r,
            deep: n,
            handleRemove: o,
            handleUpdateValue: u,
            readOnly: d,
            dataType: U,
            getStyle: y,
            cancelButtonElement: g,
            editButtonElement: h,
            inputElementGenerator: E,
            minusMenuElement: x,
            logger: w,
            onSubmitValueParser: j,
          });
        case oR:
          return m.createElement(dt, {
            name: t,
            value: e.toISOString(),
            originalValue: e,
            keyPath: r,
            deep: n,
            handleRemove: o,
            handleUpdateValue: u,
            readOnly: I,
            dataType: U,
            getStyle: y,
            cancelButtonElement: g,
            editButtonElement: h,
            inputElementGenerator: E,
            minusMenuElement: x,
            logger: w,
            onSubmitValueParser: j,
          });
        case uR:
          return m.createElement(dt, {
            name: t,
            value: "null",
            originalValue: "null",
            keyPath: r,
            deep: n,
            handleRemove: o,
            handleUpdateValue: u,
            readOnly: d,
            dataType: U,
            getStyle: y,
            cancelButtonElement: g,
            editButtonElement: h,
            inputElementGenerator: E,
            minusMenuElement: x,
            logger: w,
            onSubmitValueParser: j,
          });
        case iR:
          return m.createElement(dt, {
            name: t,
            value: "undefined",
            originalValue: "undefined",
            keyPath: r,
            deep: n,
            handleRemove: o,
            handleUpdateValue: u,
            readOnly: d,
            dataType: U,
            getStyle: y,
            cancelButtonElement: g,
            editButtonElement: h,
            inputElementGenerator: E,
            minusMenuElement: x,
            logger: w,
            onSubmitValueParser: j,
          });
        case sR:
          return m.createElement(py, {
            name: t,
            value: e.toString(),
            originalValue: e,
            keyPath: r,
            deep: n,
            handleRemove: o,
            handleUpdateValue: u,
            readOnly: d,
            dataType: U,
            getStyle: y,
            cancelButtonElement: g,
            editButtonElement: h,
            textareaElementGenerator: b,
            minusMenuElement: x,
            logger: w,
            onSubmitValueParser: j,
          });
        case lR:
          return m.createElement(dt, {
            name: t,
            value: e.toString(),
            originalValue: e,
            keyPath: r,
            deep: n,
            handleRemove: o,
            handleUpdateValue: u,
            readOnly: I,
            dataType: U,
            getStyle: y,
            cancelButtonElement: g,
            editButtonElement: h,
            inputElementGenerator: E,
            minusMenuElement: x,
            logger: w,
            onSubmitValueParser: j,
          });
        default:
          return null;
      }
    }
  };
  fa.defaultProps = { keyPath: [], deep: 0 };
  var Zu = class extends Je {
    constructor(e) {
      super(e);
      let t = e.deep === -1 ? [] : [...e.keyPath, e.name];
      (this.state = {
        name: e.name,
        data: e.data,
        keyPath: t,
        deep: e.deep,
        nextDeep: e.deep + 1,
        collapsed: e.isCollapsed(t, e.deep, e.data),
        addFormVisible: !1,
      }),
        (this.handleCollapseMode = this.handleCollapseMode.bind(this)),
        (this.handleRemoveValue = this.handleRemoveValue.bind(this)),
        (this.handleAddMode = this.handleAddMode.bind(this)),
        (this.handleAddValueAdd = this.handleAddValueAdd.bind(this)),
        (this.handleAddValueCancel = this.handleAddValueCancel.bind(this)),
        (this.handleEditValue = this.handleEditValue.bind(this)),
        (this.onChildUpdate = this.onChildUpdate.bind(this)),
        (this.renderCollapsed = this.renderCollapsed.bind(this)),
        (this.renderNotCollapsed = this.renderNotCollapsed.bind(this));
    }
    static getDerivedStateFromProps(e, t) {
      return e.data !== t.data ? { data: e.data } : null;
    }
    onChildUpdate(e, t) {
      let { data: r, keyPath: n } = this.state;
      (r[e] = t), this.setState({ data: r });
      let { onUpdate: a } = this.props,
        o = n.length;
      a(n[o - 1], r);
    }
    handleAddMode() {
      this.setState({ addFormVisible: !0 });
    }
    handleAddValueCancel() {
      this.setState({ addFormVisible: !1 });
    }
    handleAddValueAdd({ key: e, newValue: t }) {
      let { data: r, keyPath: n, nextDeep: a } = this.state,
        { beforeAddAction: o, logger: u } = this.props;
      o(e, n, a, t)
        .then(() => {
          (r[e] = t), this.setState({ data: r }), this.handleAddValueCancel();
          let { onUpdate: i, onDeltaUpdate: s } = this.props;
          i(n[n.length - 1], r), s({ type: uy, keyPath: n, deep: a, key: e, newValue: t });
        })
        .catch(u.error);
    }
    handleRemoveValue(e) {
      return () => {
        let { beforeRemoveAction: t, logger: r } = this.props,
          { data: n, keyPath: a, nextDeep: o } = this.state,
          u = n[e];
        t(e, a, o, u)
          .then(() => {
            let i = { keyPath: a, deep: o, key: e, oldValue: u, type: iy };
            delete n[e], this.setState({ data: n });
            let { onUpdate: s, onDeltaUpdate: d } = this.props;
            s(a[a.length - 1], n), d(i);
          })
          .catch(r.error);
      };
    }
    handleCollapseMode() {
      this.setState((e) => ({ collapsed: !e.collapsed }));
    }
    handleEditValue({ key: e, value: t }) {
      return new Promise((r, n) => {
        let { beforeUpdateAction: a } = this.props,
          { data: o, keyPath: u, nextDeep: i } = this.state,
          s = o[e];
        a(e, u, i, s, t)
          .then(() => {
            (o[e] = t), this.setState({ data: o });
            let { onUpdate: d, onDeltaUpdate: y } = this.props;
            d(u[u.length - 1], o), y({ type: sy, keyPath: u, deep: i, key: e, newValue: t, oldValue: s }), r();
          })
          .catch(n);
      });
    }
    renderCollapsed() {
      let { name: e, keyPath: t, deep: r, data: n } = this.state,
        { handleRemove: a, readOnly: o, dataType: u, getStyle: i, minusMenuElement: s } = this.props,
        { minus: d, collapsed: y } = i(e, n, t, r, u),
        A = Object.getOwnPropertyNames(n),
        g = o(e, n, t, r, u),
        h = he(s, { onClick: a, className: "rejt-minus-menu", style: d });
      return m.createElement(
        "span",
        { className: "rejt-collapsed" },
        m.createElement(
          "span",
          { className: "rejt-collapsed-text", style: y, onClick: this.handleCollapseMode },
          "{...}",
          " ",
          A.length,
          " ",
          A.length === 1 ? "key" : "keys"
        ),
        !g && h
      );
    }
    renderNotCollapsed() {
      let { name: e, data: t, keyPath: r, deep: n, nextDeep: a, addFormVisible: o } = this.state,
        {
          isCollapsed: u,
          handleRemove: i,
          onDeltaUpdate: s,
          readOnly: d,
          getStyle: y,
          dataType: A,
          addButtonElement: g,
          cancelButtonElement: h,
          editButtonElement: E,
          inputElementGenerator: b,
          textareaElementGenerator: x,
          minusMenuElement: S,
          plusMenuElement: P,
          beforeRemoveAction: N,
          beforeAddAction: $,
          beforeUpdateAction: w,
          logger: j,
          onSubmitValueParser: I,
        } = this.props,
        { minus: U, plus: V, addForm: z, ul: ie, delimiter: Z } = y(e, t, r, n, A),
        X = Object.getOwnPropertyNames(t),
        O = d(e, t, r, n, A),
        T = he(P, { onClick: this.handleAddMode, className: "rejt-plus-menu", style: V }),
        M = he(S, { onClick: i, className: "rejt-minus-menu", style: U }),
        G = X.map((Q) =>
          m.createElement(fa, {
            key: Q,
            name: Q,
            data: t[Q],
            keyPath: r,
            deep: a,
            isCollapsed: u,
            handleRemove: this.handleRemoveValue(Q),
            handleUpdateValue: this.handleEditValue,
            onUpdate: this.onChildUpdate,
            onDeltaUpdate: s,
            readOnly: d,
            getStyle: y,
            addButtonElement: g,
            cancelButtonElement: h,
            editButtonElement: E,
            inputElementGenerator: b,
            textareaElementGenerator: x,
            minusMenuElement: S,
            plusMenuElement: P,
            beforeRemoveAction: N,
            beforeAddAction: $,
            beforeUpdateAction: w,
            logger: j,
            onSubmitValueParser: I,
          })
        ),
        Y = "{",
        K = "}";
      return m.createElement(
        "span",
        { className: "rejt-not-collapsed" },
        m.createElement("span", { className: "rejt-not-collapsed-delimiter", style: Z }, Y),
        !O && T,
        m.createElement("ul", { className: "rejt-not-collapsed-list", style: ie }, G),
        !O &&
          o &&
          m.createElement(
            "div",
            { className: "rejt-add-form", style: z },
            m.createElement(ui, {
              handleAdd: this.handleAddValueAdd,
              handleCancel: this.handleAddValueCancel,
              addButtonElement: g,
              cancelButtonElement: h,
              inputElementGenerator: b,
              keyPath: r,
              deep: n,
              onSubmitValueParser: I,
            })
          ),
        m.createElement("span", { className: "rejt-not-collapsed-delimiter", style: Z }, K),
        !O && M
      );
    }
    render() {
      let { name: e, collapsed: t, data: r, keyPath: n, deep: a } = this.state,
        { getStyle: o, dataType: u } = this.props,
        i = t ? this.renderCollapsed() : this.renderNotCollapsed(),
        s = o(e, r, n, a, u);
      return m.createElement(
        "div",
        { className: "rejt-object-node" },
        m.createElement(
          "span",
          { onClick: this.handleCollapseMode },
          m.createElement("span", { className: "rejt-name", style: s.name }, e, " :", " ")
        ),
        i
      );
    }
  };
  Zu.defaultProps = {
    keyPath: [],
    deep: 0,
    minusMenuElement: m.createElement("span", null, " - "),
    plusMenuElement: m.createElement("span", null, " + "),
  };
  var dt = class extends Je {
    constructor(e) {
      super(e);
      let t = [...e.keyPath, e.name];
      (this.state = { value: e.value, name: e.name, keyPath: t, deep: e.deep, editEnabled: !1, inputRef: null }),
        (this.handleEditMode = this.handleEditMode.bind(this)),
        (this.refInput = this.refInput.bind(this)),
        (this.handleCancelEdit = this.handleCancelEdit.bind(this)),
        (this.handleEdit = this.handleEdit.bind(this)),
        (this.onKeydown = this.onKeydown.bind(this));
    }
    static getDerivedStateFromProps(e, t) {
      return e.value !== t.value ? { value: e.value } : null;
    }
    componentDidUpdate() {
      let { editEnabled: e, inputRef: t, name: r, value: n, keyPath: a, deep: o } = this.state,
        { readOnly: u, dataType: i } = this.props,
        s = u(r, n, a, o, i);
      e && !s && typeof t.focus == "function" && t.focus();
    }
    componentDidMount() {
      document.addEventListener("keydown", this.onKeydown);
    }
    componentWillUnmount() {
      document.removeEventListener("keydown", this.onKeydown);
    }
    onKeydown(e) {
      e.altKey ||
        e.ctrlKey ||
        e.metaKey ||
        e.shiftKey ||
        e.repeat ||
        ((e.code === "Enter" || e.key === "Enter") && (e.preventDefault(), this.handleEdit()),
        (e.code === "Escape" || e.key === "Escape") && (e.preventDefault(), this.handleCancelEdit()));
    }
    handleEdit() {
      let { handleUpdateValue: e, originalValue: t, logger: r, onSubmitValueParser: n, keyPath: a } = this.props,
        { inputRef: o, name: u, deep: i } = this.state;
      if (!o) return;
      let s = n(!0, a, i, u, o.value);
      e({ value: s, key: u })
        .then(() => {
          ly(t, s) || this.handleCancelEdit();
        })
        .catch(r.error);
    }
    handleEditMode() {
      this.setState({ editEnabled: !0 });
    }
    refInput(e) {
      this.state.inputRef = e;
    }
    handleCancelEdit() {
      this.setState({ editEnabled: !1 });
    }
    render() {
      let { name: e, value: t, editEnabled: r, keyPath: n, deep: a } = this.state,
        {
          handleRemove: o,
          originalValue: u,
          readOnly: i,
          dataType: s,
          getStyle: d,
          editButtonElement: y,
          cancelButtonElement: A,
          inputElementGenerator: g,
          minusMenuElement: h,
          keyPath: E,
        } = this.props,
        b = d(e, u, n, a, s),
        x = i(e, u, n, a, s),
        S = r && !x,
        P = g(oi, E, a, e, u, s),
        N = he(y, { onClick: this.handleEdit }),
        $ = he(A, { onClick: this.handleCancelEdit }),
        w = he(P, { ref: this.refInput, defaultValue: JSON.stringify(u) }),
        j = he(h, { onClick: o, className: "rejt-minus-menu", style: b.minus });
      return m.createElement(
        "li",
        { className: "rejt-value-node", style: b.li },
        m.createElement("span", { className: "rejt-name", style: b.name }, e, " : "),
        S
          ? m.createElement("span", { className: "rejt-edit-form", style: b.editForm }, w, " ", $, N)
          : m.createElement(
              "span",
              { className: "rejt-value", style: b.value, onClick: x ? null : this.handleEditMode },
              String(t)
            ),
        !x && !S && j
      );
    }
  };
  dt.defaultProps = {
    keyPath: [],
    deep: 0,
    handleUpdateValue: () => Promise.resolve(),
    editButtonElement: m.createElement("button", null, "e"),
    cancelButtonElement: m.createElement("button", null, "c"),
    minusMenuElement: m.createElement("span", null, " - "),
  };
  var cR = {
      minus: { color: "red" },
      plus: { color: "green" },
      collapsed: { color: "grey" },
      delimiter: {},
      ul: { padding: "0px", margin: "0 0 0 25px", listStyle: "none" },
      name: { color: "#2287CD" },
      addForm: {},
    },
    pR = {
      minus: { color: "red" },
      plus: { color: "green" },
      collapsed: { color: "grey" },
      delimiter: {},
      ul: { padding: "0px", margin: "0 0 0 25px", listStyle: "none" },
      name: { color: "#2287CD" },
      addForm: {},
    },
    dR = {
      minus: { color: "red" },
      editForm: {},
      value: { color: "#7bba3d" },
      li: { minHeight: "22px", lineHeight: "22px", outline: "0px" },
      name: { color: "#2287CD" },
    };
  function fR(e) {
    let t = e;
    if (t.indexOf("function") === 0) return (0, eval)(`(${t})`);
    try {
      t = JSON.parse(e);
    } catch {}
    return t;
  }
  var dy = class extends Je {
    constructor(e) {
      super(e),
        (this.state = { data: e.data, rootName: e.rootName }),
        (this.onUpdate = this.onUpdate.bind(this)),
        (this.removeRoot = this.removeRoot.bind(this));
    }
    static getDerivedStateFromProps(e, t) {
      return e.data !== t.data || e.rootName !== t.rootName ? { data: e.data, rootName: e.rootName } : null;
    }
    onUpdate(e, t) {
      this.setState({ data: t }), this.props.onFullyUpdate(t);
    }
    removeRoot() {
      this.onUpdate(null, null);
    }
    render() {
      let { data: e, rootName: t } = this.state,
        {
          isCollapsed: r,
          onDeltaUpdate: n,
          readOnly: a,
          getStyle: o,
          addButtonElement: u,
          cancelButtonElement: i,
          editButtonElement: s,
          inputElement: d,
          textareaElement: y,
          minusMenuElement: A,
          plusMenuElement: g,
          beforeRemoveAction: h,
          beforeAddAction: E,
          beforeUpdateAction: b,
          logger: x,
          onSubmitValueParser: S,
          fallback: P = null,
        } = this.props,
        N = ft(e),
        $ = a;
      ft(a) === "Boolean" && ($ = () => a);
      let w = d;
      d && ft(d) !== "Function" && (w = () => d);
      let j = y;
      return (
        y && ft(y) !== "Function" && (j = () => y),
        N === "Object" || N === "Array"
          ? m.createElement(
              "div",
              { className: "rejt-tree" },
              m.createElement(fa, {
                data: e,
                name: t,
                deep: -1,
                isCollapsed: r,
                onUpdate: this.onUpdate,
                onDeltaUpdate: n,
                readOnly: $,
                getStyle: o,
                addButtonElement: u,
                cancelButtonElement: i,
                editButtonElement: s,
                inputElementGenerator: w,
                textareaElementGenerator: j,
                minusMenuElement: A,
                plusMenuElement: g,
                handleRemove: this.removeRoot,
                beforeRemoveAction: h,
                beforeAddAction: E,
                beforeUpdateAction: b,
                logger: x,
                onSubmitValueParser: S,
              })
            )
          : P
      );
    }
  };
  dy.defaultProps = {
    rootName: "root",
    isCollapsed: (e, t) => t !== -1,
    getStyle: (e, t, r, n, a) => {
      switch (a) {
        case "Object":
        case "Error":
          return cR;
        case "Array":
          return pR;
        default:
          return dR;
      }
    },
    readOnly: () => !1,
    onFullyUpdate: () => {},
    onDeltaUpdate: () => {},
    beforeRemoveAction: () => Promise.resolve(),
    beforeAddAction: () => Promise.resolve(),
    beforeUpdateAction: () => Promise.resolve(),
    logger: { error: () => {} },
    onSubmitValueParser: (e, t, r, n, a) => fR(a),
    inputElement: () => m.createElement("input", null),
    textareaElement: () => m.createElement("textarea", null),
    fallback: null,
  };
  var { window: hR } = oe,
    gR = q.div(({ theme: e }) => ({
      position: "relative",
      display: "flex",
      ".rejt-tree": { marginLeft: "1rem", fontSize: "13px" },
      ".rejt-value-node, .rejt-object-node > .rejt-collapsed, .rejt-array-node > .rejt-collapsed, .rejt-object-node > .rejt-not-collapsed, .rejt-array-node > .rejt-not-collapsed":
        { "& > svg": { opacity: 0, transition: "opacity 0.2s" } },
      ".rejt-value-node:hover, .rejt-object-node:hover > .rejt-collapsed, .rejt-array-node:hover > .rejt-collapsed, .rejt-object-node:hover > .rejt-not-collapsed, .rejt-array-node:hover > .rejt-not-collapsed":
        { "& > svg": { opacity: 1 } },
      ".rejt-edit-form button": { display: "none" },
      ".rejt-add-form": { marginLeft: 10 },
      ".rejt-add-value-node": { display: "inline-flex", alignItems: "center" },
      ".rejt-name": { lineHeight: "22px" },
      ".rejt-not-collapsed-delimiter": { lineHeight: "22px" },
      ".rejt-plus-menu": { marginLeft: 5 },
      ".rejt-object-node > span > *, .rejt-array-node > span > *": { position: "relative", zIndex: 2 },
      ".rejt-object-node, .rejt-array-node": { position: "relative" },
      ".rejt-object-node > span:first-of-type::after, .rejt-array-node > span:first-of-type::after, .rejt-collapsed::before, .rejt-not-collapsed::before":
        {
          content: '""',
          position: "absolute",
          top: 0,
          display: "block",
          width: "100%",
          marginLeft: "-1rem",
          padding: "0 4px 0 1rem",
          height: 22,
        },
      ".rejt-collapsed::before, .rejt-not-collapsed::before": {
        zIndex: 1,
        background: "transparent",
        borderRadius: 4,
        transition: "background 0.2s",
        pointerEvents: "none",
        opacity: 0.1,
      },
      ".rejt-object-node:hover, .rejt-array-node:hover": {
        "& > .rejt-collapsed::before, & > .rejt-not-collapsed::before": { background: e.color.secondary },
      },
      ".rejt-collapsed::after, .rejt-not-collapsed::after": {
        content: '""',
        position: "absolute",
        display: "inline-block",
        pointerEvents: "none",
        width: 0,
        height: 0,
      },
      ".rejt-collapsed::after": {
        left: -8,
        top: 8,
        borderTop: "3px solid transparent",
        borderBottom: "3px solid transparent",
        borderLeft: "3px solid rgba(153,153,153,0.6)",
      },
      ".rejt-not-collapsed::after": {
        left: -10,
        top: 10,
        borderTop: "3px solid rgba(153,153,153,0.6)",
        borderLeft: "3px solid transparent",
        borderRight: "3px solid transparent",
      },
      ".rejt-value": {
        display: "inline-block",
        border: "1px solid transparent",
        borderRadius: 4,
        margin: "1px 0",
        padding: "0 4px",
        cursor: "text",
        color: e.color.defaultText,
      },
      ".rejt-value-node:hover > .rejt-value": { background: e.color.lighter, borderColor: e.appBorderColor },
    })),
    Gu = q.button(({ theme: e, primary: t }) => ({
      border: 0,
      height: 20,
      margin: 1,
      borderRadius: 4,
      background: t ? e.color.secondary : "transparent",
      color: t ? e.color.lightest : e.color.dark,
      fontWeight: t ? "bold" : "normal",
      cursor: "pointer",
      order: t ? "initial" : 9,
    })),
    Um = q(Te)(({ theme: e, icon: t, disabled: r }) => ({
      display: "inline-block",
      verticalAlign: "middle",
      width: 15,
      height: 15,
      padding: 3,
      marginLeft: 5,
      cursor: r ? "not-allowed" : "pointer",
      color: e.textMutedColor,
      "&:hover": r ? {} : { color: t === "subtract" ? e.color.negative : e.color.ancillary },
      "svg + &": { marginLeft: 0 },
    })),
    zm = q.input(({ theme: e, placeholder: t }) => ({
      outline: 0,
      margin: t ? 1 : "1px 0",
      padding: "3px 4px",
      color: e.color.defaultText,
      background: e.background.app,
      border: `1px solid ${e.appBorderColor}`,
      borderRadius: 4,
      lineHeight: "14px",
      width: t === "Key" ? 80 : 120,
      "&:focus": { border: `1px solid ${e.color.secondary}` },
    })),
    mR = q(ht)(({ theme: e }) => ({
      position: "absolute",
      zIndex: 2,
      top: 2,
      right: 2,
      height: 21,
      padding: "0 3px",
      background: e.background.bar,
      border: `1px solid ${e.appBorderColor}`,
      borderRadius: 3,
      color: e.textMutedColor,
      fontSize: "9px",
      fontWeight: "bold",
      textDecoration: "none",
      span: { marginLeft: 3, marginTop: 1 },
    })),
    yR = q(Be.Textarea)(({ theme: e }) => ({
      flex: 1,
      padding: "7px 6px",
      fontFamily: e.typography.fonts.mono,
      fontSize: "12px",
      lineHeight: "18px",
      "&::placeholder": { fontFamily: e.typography.fonts.base, fontSize: "13px" },
      "&:placeholder-shown": { padding: "7px 10px" },
    })),
    bR = { bubbles: !0, cancelable: !0, key: "Enter", code: "Enter", keyCode: 13 },
    AR = (e) => {
      e.currentTarget.dispatchEvent(new hR.KeyboardEvent("keydown", bR));
    },
    ER = (e) => {
      e.currentTarget.select();
    },
    DR = (e) => () => ({
      name: { color: e.color.secondary },
      collapsed: { color: e.color.dark },
      ul: { listStyle: "none", margin: "0 0 0 1rem", padding: 0 },
      li: { outline: 0 },
    }),
    Hm = ({ name: e, value: t, onChange: r }) => {
      let n = Si(),
        a = rt(() => t && (0, Qm.default)(t), [t]),
        o = a != null,
        [u, i] = ne(!o),
        [s, d] = ne(null),
        y = ge(
          (x) => {
            try {
              x && r(JSON.parse(x)), d(void 0);
            } catch (S) {
              d(S);
            }
          },
          [r]
        ),
        [A, g] = ne(!1),
        h = ge(() => {
          r({}), g(!0);
        }, [g]),
        E = xe(null);
      if (
        (me(() => {
          A && E.current && E.current.select();
        }, [A]),
        !o)
      )
        return m.createElement(Be.Button, { id: pr(e), onClick: h }, "Set object");
      let b = m.createElement(yR, {
        ref: E,
        id: _e(e),
        name: e,
        defaultValue: t === null ? "" : JSON.stringify(t, null, 2),
        onBlur: (x) => y(x.target.value),
        placeholder: "Edit JSON string...",
        autoFocus: A,
        valid: s ? "error" : null,
      });
      return m.createElement(
        gR,
        null,
        ["Object", "Array"].includes(ft(a)) &&
          m.createElement(
            mR,
            {
              href: "#",
              onClick: (x) => {
                x.preventDefault(), i((S) => !S);
              },
            },
            m.createElement(Te, { icon: u ? "eyeclose" : "eye" }),
            m.createElement("span", null, "RAW")
          ),
        u
          ? b
          : m.createElement(dy, {
              data: a,
              rootName: e,
              onFullyUpdate: r,
              getStyle: DR(n),
              cancelButtonElement: m.createElement(Gu, { type: "button" }, "Cancel"),
              editButtonElement: m.createElement(Gu, { type: "submit" }, "Save"),
              addButtonElement: m.createElement(Gu, { type: "submit", primary: !0 }, "Save"),
              plusMenuElement: m.createElement(Um, { icon: "add" }),
              minusMenuElement: m.createElement(Um, { icon: "subtract" }),
              inputElement: (x, S, P, N) =>
                N ? m.createElement(zm, { onFocus: ER, onBlur: AR }) : m.createElement(zm, null),
              fallback: b,
            })
      );
    },
    vR = q.input(({ theme: e, min: t, max: r, value: n }) => ({
      "&": { width: "100%", backgroundColor: "transparent", appearance: "none" },
      "&::-webkit-slider-runnable-track": {
        background:
          e.base === "light"
            ? `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${((n - t) / (r - t)) * 100}%, 
            ${Ue(0.02, e.input.background)} ${((n - t) / (r - t)) * 100}%, 
            ${Ue(0.02, e.input.background)} 100%)`
            : `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${((n - t) / (r - t)) * 100}%, 
            ${ot(0.02, e.input.background)} ${((n - t) / (r - t)) * 100}%, 
            ${ot(0.02, e.input.background)} 100%)`,
        boxShadow: `${e.appBorderColor} 0 0 0 1px inset`,
        borderRadius: 6,
        width: "100%",
        height: 6,
        cursor: "pointer",
      },
      "&::-webkit-slider-thumb": {
        marginTop: "-6px",
        width: 16,
        height: 16,
        border: `1px solid ${$e(e.appBorderColor, 0.2)}`,
        borderRadius: "50px",
        boxShadow: `0 1px 3px 0px ${$e(e.appBorderColor, 0.2)}`,
        cursor: "grab",
        appearance: "none",
        background: `${e.input.background}`,
        transition: "all 150ms ease-out",
        "&:hover": {
          background: `${Ue(0.05, e.input.background)}`,
          transform: "scale3d(1.1, 1.1, 1.1) translateY(-1px)",
          transition: "all 50ms ease-out",
        },
        "&:active": {
          background: `${e.input.background}`,
          transform: "scale3d(1, 1, 1) translateY(0px)",
          cursor: "grabbing",
        },
      },
      "&:focus": {
        outline: "none",
        "&::-webkit-slider-runnable-track": { borderColor: $e(e.color.secondary, 0.4) },
        "&::-webkit-slider-thumb": { borderColor: e.color.secondary, boxShadow: `0 0px 5px 0px ${e.color.secondary}` },
      },
      "&::-moz-range-track": {
        background:
          e.base === "light"
            ? `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${((n - t) / (r - t)) * 100}%, 
            ${Ue(0.02, e.input.background)} ${((n - t) / (r - t)) * 100}%, 
            ${Ue(0.02, e.input.background)} 100%)`
            : `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${((n - t) / (r - t)) * 100}%, 
            ${ot(0.02, e.input.background)} ${((n - t) / (r - t)) * 100}%, 
            ${ot(0.02, e.input.background)} 100%)`,
        boxShadow: `${e.appBorderColor} 0 0 0 1px inset`,
        borderRadius: 6,
        width: "100%",
        height: 6,
        cursor: "pointer",
        outline: "none",
      },
      "&::-moz-range-thumb": {
        width: 16,
        height: 16,
        border: `1px solid ${$e(e.appBorderColor, 0.2)}`,
        borderRadius: "50px",
        boxShadow: `0 1px 3px 0px ${$e(e.appBorderColor, 0.2)}`,
        cursor: "grab",
        background: `${e.input.background}`,
        transition: "all 150ms ease-out",
        "&:hover": {
          background: `${Ue(0.05, e.input.background)}`,
          transform: "scale3d(1.1, 1.1, 1.1) translateY(-1px)",
          transition: "all 50ms ease-out",
        },
        "&:active": {
          background: `${e.input.background}`,
          transform: "scale3d(1, 1, 1) translateY(0px)",
          cursor: "grabbing",
        },
      },
      "&::-ms-track": {
        background:
          e.base === "light"
            ? `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${((n - t) / (r - t)) * 100}%, 
            ${Ue(0.02, e.input.background)} ${((n - t) / (r - t)) * 100}%, 
            ${Ue(0.02, e.input.background)} 100%)`
            : `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${((n - t) / (r - t)) * 100}%, 
            ${ot(0.02, e.input.background)} ${((n - t) / (r - t)) * 100}%, 
            ${ot(0.02, e.input.background)} 100%)`,
        boxShadow: `${e.appBorderColor} 0 0 0 1px inset`,
        color: "transparent",
        width: "100%",
        height: "6px",
        cursor: "pointer",
      },
      "&::-ms-fill-lower": { borderRadius: 6 },
      "&::-ms-fill-upper": { borderRadius: 6 },
      "&::-ms-thumb": {
        width: 16,
        height: 16,
        background: `${e.input.background}`,
        border: `1px solid ${$e(e.appBorderColor, 0.2)}`,
        borderRadius: 50,
        cursor: "grab",
        marginTop: 0,
      },
      "@supports (-ms-ime-align:auto)": { "input[type=range]": { margin: "0" } },
    })),
    fy = q.span({
      paddingLeft: 5,
      paddingRight: 5,
      fontSize: 12,
      whiteSpace: "nowrap",
      fontFeatureSettings: "tnum",
      fontVariantNumeric: "tabular-nums",
    }),
    CR = q(fy)(({ numberOFDecimalsPlaces: e, max: t }) => ({
      width: `${e + t.toString().length * 2 + 3}ch`,
      textAlign: "right",
      flexShrink: 0,
    })),
    xR = q.div({ display: "flex", alignItems: "center", width: "100%" });
  function FR(e) {
    let t = e.toString().match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
    return t ? Math.max(0, (t[1] ? t[1].length : 0) - (t[2] ? +t[2] : 0)) : 0;
  }
  var SR = ({ name: e, value: t, onChange: r, min: n = 0, max: a = 100, step: o = 1, onBlur: u, onFocus: i }) => {
      let s = (A) => {
          r(q9(A.target.value));
        },
        d = t !== void 0,
        y = rt(() => FR(o), [o]);
      return m.createElement(
        xR,
        null,
        m.createElement(fy, null, n),
        m.createElement(vR, {
          id: _e(e),
          type: "range",
          onChange: s,
          name: e,
          value: t,
          min: n,
          max: a,
          step: o,
          onFocus: i,
          onBlur: u,
        }),
        m.createElement(CR, { numberOFDecimalsPlaces: y, max: a }, `${d ? t.toFixed(y) : "--"}`, " / ", a)
      );
    },
    wR = q.label({ display: "flex" }),
    BR = q.div(({ isMaxed: e }) => ({ marginLeft: "0.75rem", paddingTop: "0.35rem", color: e ? "red" : void 0 })),
    TR = ({ name: e, value: t, onChange: r, onFocus: n, onBlur: a, maxLength: o }) => {
      let u = (A) => {
          r(A.target.value);
        },
        [i, s] = ne(!1),
        d = ge(() => {
          r(""), s(!0);
        }, [s]);
      if (t === void 0) return m.createElement(Be.Button, { id: pr(e), onClick: d }, "Set string");
      let y = typeof t == "string";
      return m.createElement(
        wR,
        null,
        m.createElement(Be.Textarea, {
          id: _e(e),
          maxLength: o,
          onChange: u,
          size: "flex",
          placeholder: "Edit string...",
          autoFocus: i,
          valid: y ? null : "error",
          name: e,
          value: y ? t : "",
          onFocus: n,
          onBlur: a,
        }),
        o && m.createElement(BR, { isMaxed: t?.length === o }, t?.length ?? 0, " / ", o)
      );
    },
    _R = q(Be.Input)({ padding: 10 });
  function OR(e) {
    e.forEach((t) => {
      t.startsWith("blob:") && URL.revokeObjectURL(t);
    });
  }
  var RR = ({ onChange: e, name: t, accept: r = "image/*", value: n }) => {
      let a = xe(null);
      function o(u) {
        if (!u.target.files) return;
        let i = Array.from(u.target.files).map((s) => URL.createObjectURL(s));
        e(i), OR(n);
      }
      return (
        me(() => {
          n == null && a.current && (a.current.value = null);
        }, [n, t]),
        m.createElement(_R, {
          ref: a,
          id: _e(t),
          type: "file",
          name: t,
          multiple: !0,
          onChange: o,
          accept: r,
          size: "flex",
        })
      );
    },
    PR = mi(() => Promise.resolve().then(() => (Im(), Pm))),
    IR = (e) => m.createElement(gi, { fallback: m.createElement("div", null) }, m.createElement(PR, { ...e })),
    kR = {
      array: Hm,
      object: Hm,
      boolean: O9,
      color: IR,
      date: j9,
      number: L9,
      check: ur,
      "inline-check": ur,
      radio: ur,
      "inline-radio": ur,
      select: ur,
      "multi-select": ur,
      range: SR,
      text: TR,
      file: RR,
    },
    Gm = () => m.createElement(m.Fragment, null, "-"),
    NR = ({ row: e, arg: t, updateArgs: r }) => {
      let { key: n, control: a } = e,
        [o, u] = ne(!1),
        [i, s] = ne({ value: t });
      me(() => {
        o || s({ value: t });
      }, [o, t]);
      let d = ge((E) => (s({ value: E }), r({ [n]: E }), E), [r, n]),
        y = ge(() => u(!1), []),
        A = ge(() => u(!0), []);
      if (!a || a.disable) return m.createElement(Gm, null);
      let g = { name: n, argType: e, value: i.value, onChange: d, onBlur: y, onFocus: A },
        h = kR[a.type] || Gm;
      return m.createElement(h, { ...g, ...a, controlType: a.type });
    },
    jR = q.span({ fontWeight: "bold" }),
    MR = q.span(({ theme: e }) => ({ color: e.color.negative, fontFamily: e.typography.fonts.mono, cursor: "help" })),
    qR = q.div(({ theme: e }) => ({
      "&&": { p: { margin: "0 0 10px 0" }, a: { color: e.color.secondary } },
      code: { ...Bt({ theme: e }), fontSize: 12, fontFamily: e.typography.fonts.mono },
      "& code": { margin: 0, display: "inline-block" },
      "& pre > code": { whiteSpace: "pre-wrap" },
    })),
    LR = q.div(({ theme: e, hasDescription: t }) => ({
      color: e.base === "light" ? pe(0.1, e.color.defaultText) : pe(0.2, e.color.defaultText),
      marginTop: t ? 4 : 0,
    })),
    $R = q.div(({ theme: e, hasDescription: t }) => ({
      color: e.base === "light" ? pe(0.1, e.color.defaultText) : pe(0.2, e.color.defaultText),
      marginTop: t ? 12 : 0,
      marginBottom: 12,
    })),
    UR = q.td(({ theme: e, expandable: t }) => ({ paddingLeft: t ? "40px !important" : "20px !important" })),
    ca = (e) => {
      let { row: t, updateArgs: r, compact: n, expandable: a, initialExpandedArgs: o } = e,
        { name: u, description: i } = t,
        s = t.table || {},
        d = s.type || t.type,
        y = s.defaultValue || t.defaultValue,
        A = t.type?.required,
        g = i != null && i !== "";
      return m.createElement(
        "tr",
        null,
        m.createElement(
          UR,
          { expandable: a },
          m.createElement(jR, null, u),
          A ? m.createElement(MR, { title: "Required" }, "*") : null
        ),
        n
          ? null
          : m.createElement(
              "td",
              null,
              g && m.createElement(qR, null, m.createElement(zo, null, i)),
              s.jsDocTags != null
                ? m.createElement(
                    m.Fragment,
                    null,
                    m.createElement(
                      $R,
                      { hasDescription: g },
                      m.createElement(Hu, { value: d, initialExpandedArgs: o })
                    ),
                    m.createElement(A9, { tags: s.jsDocTags })
                  )
                : m.createElement(LR, { hasDescription: g }, m.createElement(Hu, { value: d, initialExpandedArgs: o }))
            ),
        n ? null : m.createElement("td", null, m.createElement(Hu, { value: y, initialExpandedArgs: o })),
        r ? m.createElement("td", null, m.createElement(NR, { ...e })) : null
      );
    },
    zR = q(Te)(({ theme: e }) => ({
      marginRight: 8,
      marginLeft: -10,
      marginTop: -2,
      height: 12,
      width: 12,
      color: e.base === "light" ? pe(0.25, e.color.defaultText) : pe(0.3, e.color.defaultText),
      border: "none",
      display: "inline-block",
    })),
    HR = q.span(({ theme: e }) => ({ display: "flex", lineHeight: "20px", alignItems: "center" })),
    GR = q.td(({ theme: e }) => ({
      position: "relative",
      letterSpacing: "0.35em",
      textTransform: "uppercase",
      fontWeight: e.typography.weight.bold,
      fontSize: e.typography.size.s1 - 1,
      color: e.base === "light" ? pe(0.4, e.color.defaultText) : pe(0.6, e.color.defaultText),
      background: `${e.background.app} !important`,
      "& ~ td": { background: `${e.background.app} !important` },
    })),
    WR = q.td(({ theme: e }) => ({
      position: "relative",
      fontWeight: e.typography.weight.bold,
      fontSize: e.typography.size.s2 - 1,
      background: e.background.app,
    })),
    VR = q.td(() => ({ position: "relative" })),
    KR = q.tr(({ theme: e }) => ({
      "&:hover > td": {
        backgroundColor: `${ot(0.005, e.background.app)} !important`,
        boxShadow: `${e.color.mediumlight} 0 - 1px 0 0 inset`,
        cursor: "row-resize",
      },
    })),
    Wm = q.button(() => ({
      background: "none",
      border: "none",
      padding: "0",
      font: "inherit",
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      height: "100%",
      width: "100%",
      color: "transparent",
      cursor: "row-resize !important",
    })),
    Wu = ({ level: e = "section", label: t, children: r, initialExpanded: n = !0, colSpan: a = 3 }) => {
      let [o, u] = ne(n),
        i = e === "subsection" ? WR : GR,
        s = r?.length || 0,
        d = e === "subsection" ? `${s} item${s !== 1 ? "s" : ""}` : "",
        y = o ? "arrowdown" : "arrowright",
        A = `${o ? "Hide" : "Show"} ${e === "subsection" ? s : t} item${s !== 1 ? "s" : ""}`;
      return m.createElement(
        m.Fragment,
        null,
        m.createElement(
          KR,
          { title: A },
          m.createElement(
            i,
            { colSpan: 1 },
            m.createElement(Wm, { onClick: (g) => u(!o), tabIndex: 0 }, A),
            m.createElement(HR, null, m.createElement(zR, { icon: y }), t)
          ),
          m.createElement(
            VR,
            { colSpan: a - 1 },
            m.createElement(Wm, { onClick: (g) => u(!o), tabIndex: -1, style: { outline: "none" } }, A),
            o ? null : d
          )
        ),
        o ? r : null
      );
    },
    YR = q.table(
      ({ theme: e, compact: t, inAddonPanel: r }) => ({
        "&&": {
          borderSpacing: 0,
          color: e.color.defaultText,
          "td, th": { padding: 0, border: "none", verticalAlign: "top", textOverflow: "ellipsis" },
          fontSize: e.typography.size.s2 - 1,
          lineHeight: "20px",
          textAlign: "left",
          width: "100%",
          marginTop: r ? 0 : 25,
          marginBottom: r ? 0 : 40,
          "thead th:first-of-type, td:first-of-type": { width: "25%" },
          "th:first-of-type, td:first-of-type": { paddingLeft: 20 },
          "th:nth-of-type(2), td:nth-of-type(2)": { ...(t ? null : { width: "35%" }) },
          "td:nth-of-type(3)": { ...(t ? null : { width: "15%" }) },
          "th:last-of-type, td:last-of-type": { paddingRight: 20, ...(t ? null : { width: "25%" }) },
          th: {
            color: e.base === "light" ? pe(0.25, e.color.defaultText) : pe(0.45, e.color.defaultText),
            paddingTop: 10,
            paddingBottom: 10,
            paddingLeft: 15,
            paddingRight: 15,
          },
          td: {
            paddingTop: "10px",
            paddingBottom: "10px",
            "&:not(:first-of-type)": { paddingLeft: 15, paddingRight: 15 },
            "&:last-of-type": { paddingRight: 20 },
          },
          marginLeft: r ? 0 : 1,
          marginRight: r ? 0 : 1,
          tbody: {
            ...(r
              ? null
              : {
                  filter:
                    e.base === "light"
                      ? "drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.10))"
                      : "drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.20))",
                }),
            "> tr > *": { background: e.background.content, borderTop: `1px solid ${e.appBorderColor}` },
            ...(r
              ? null
              : {
                  "> tr:first-of-type > *": { borderBlockStart: `1px solid ${e.appBorderColor}` },
                  "> tr:last-of-type > *": { borderBlockEnd: `1px solid ${e.appBorderColor}` },
                  "> tr > *:first-of-type": { borderInlineStart: `1px solid ${e.appBorderColor}` },
                  "> tr > *:last-of-type": { borderInlineEnd: `1px solid ${e.appBorderColor}` },
                  "> tr:first-of-type > td:first-of-type": { borderTopLeftRadius: e.appBorderRadius },
                  "> tr:first-of-type > td:last-of-type": { borderTopRightRadius: e.appBorderRadius },
                  "> tr:last-of-type > td:first-of-type": { borderBottomLeftRadius: e.appBorderRadius },
                  "> tr:last-of-type > td:last-of-type": { borderBottomRightRadius: e.appBorderRadius },
                }),
          },
        },
      }),
      ({ isLoading: e, theme: t }) =>
        e
          ? {
              "th span, td span, td button": {
                display: "inline",
                backgroundColor: t.appBorderColor,
                animation: `${t.animation.glow} 1.5s ease-in-out infinite`,
                color: "transparent",
                boxShadow: "none",
                borderRadius: 0,
              },
            }
          : {}
    ),
    XR = q(ht)(({ theme: e }) => ({ color: e.barTextColor, margin: "-4px -12px -4px 0" })),
    JR = q.span({ display: "flex", justifyContent: "space-between" }),
    QR = {
      alpha: (e, t) => e.name.localeCompare(t.name),
      requiredFirst: (e, t) => +!!t.type?.required - +!!e.type?.required || e.name.localeCompare(t.name),
      none: void 0,
    },
    Vu = (e) => ({
      key: e,
      name: "propertyName",
      description: "This is a short description",
      control: { type: "text" },
      table: { type: { summary: "summary" }, defaultValue: { summary: "defaultValue" } },
    }),
    ZR = { rows: { row1: Vu("row1"), row2: Vu("row2"), row3: Vu("row3") } },
    eP = (e, t) => {
      let r = { ungrouped: [], ungroupedSubsections: {}, sections: {} };
      if (!e) return r;
      Object.entries(e).forEach(([o, u]) => {
        let { category: i, subcategory: s } = u?.table || {};
        if (i) {
          let d = r.sections[i] || { ungrouped: [], subsections: {} };
          if (!s) d.ungrouped.push({ key: o, ...u });
          else {
            let y = d.subsections[s] || [];
            y.push({ key: o, ...u }), (d.subsections[s] = y);
          }
          r.sections[i] = d;
        } else if (s) {
          let d = r.ungroupedSubsections[s] || [];
          d.push({ key: o, ...u }), (r.ungroupedSubsections[s] = d);
        } else r.ungrouped.push({ key: o, ...u });
      });
      let n = QR[t],
        a = (o) => (n ? Object.keys(o).reduce((u, i) => ({ ...u, [i]: o[i].sort(n) }), {}) : o);
      return {
        ungrouped: r.ungrouped.sort(n),
        ungroupedSubsections: a(r.ungroupedSubsections),
        sections: Object.keys(r.sections).reduce(
          (o, u) => ({
            ...o,
            [u]: { ungrouped: r.sections[u].ungrouped.sort(n), subsections: a(r.sections[u].subsections) },
          }),
          {}
        ),
      };
    },
    tP = (e, t, r) => {
      try {
        return Io(e, t, r);
      } catch (n) {
        return Dn.warn(n.message), !1;
      }
    },
    St = (e) => {
      if ("error" in e)
        return m.createElement(
          Ku,
          null,
          e.error,
          "\xA0",
          m.createElement(
            lr,
            { href: "http://storybook.js.org/docs/", target: "_blank", withArrow: !0 },
            "Read the docs"
          )
        );
      let { updateArgs: t, resetArgs: r, compact: n, inAddonPanel: a, initialExpandedArgs: o, sort: u = "none" } = e,
        i = "isLoading" in e,
        { rows: s, args: d, globals: y } = "rows" in e ? e : ZR,
        A = eP(
          (0, Ym.default)(s, (b) => !b?.table?.disable && tP(b, d || {}, y || {})),
          u
        );
      if (
        A.ungrouped.length === 0 &&
        Object.entries(A.sections).length === 0 &&
        Object.entries(A.ungroupedSubsections).length === 0
      )
        return m.createElement(
          Ku,
          null,
          "No inputs found for this component.\xA0",
          m.createElement(
            lr,
            { href: "http://storybook.js.org/docs/", target: "_blank", withArrow: !0 },
            "Read the docs"
          )
        );
      let g = 1;
      t && (g += 1), n || (g += 2);
      let h = Object.keys(A.sections).length > 0,
        E = { updateArgs: t, compact: n, inAddonPanel: a, initialExpandedArgs: o };
      return m.createElement(
        _a,
        null,
        m.createElement(
          YR,
          { "aria-hidden": i, compact: n, inAddonPanel: a, isLoading: i, className: "docblock-argstable sb-unstyled" },
          m.createElement(
            "thead",
            { className: "docblock-argstable-head" },
            m.createElement(
              "tr",
              null,
              m.createElement("th", null, m.createElement("span", null, "Name")),
              n ? null : m.createElement("th", null, m.createElement("span", null, "Description")),
              n ? null : m.createElement("th", null, m.createElement("span", null, "Default")),
              t
                ? m.createElement(
                    "th",
                    null,
                    m.createElement(
                      JR,
                      null,
                      "Control",
                      " ",
                      !i &&
                        r &&
                        m.createElement(
                          XR,
                          { onClick: () => r(), title: "Reset controls" },
                          m.createElement(Te, { icon: "undo", "aria-hidden": !0 })
                        )
                    )
                  )
                : null
            )
          ),
          m.createElement(
            "tbody",
            { className: "docblock-argstable-body" },
            A.ungrouped.map((b) => m.createElement(ca, { key: b.key, row: b, arg: d && d[b.key], ...E })),
            Object.entries(A.ungroupedSubsections).map(([b, x]) =>
              m.createElement(
                Wu,
                { key: b, label: b, level: "subsection", colSpan: g },
                x.map((S) => m.createElement(ca, { key: S.key, row: S, arg: d && d[S.key], expandable: h, ...E }))
              )
            ),
            Object.entries(A.sections).map(([b, x]) =>
              m.createElement(
                Wu,
                { key: b, label: b, level: "section", colSpan: g },
                x.ungrouped.map((S) => m.createElement(ca, { key: S.key, row: S, arg: d && d[S.key], ...E })),
                Object.entries(x.subsections).map(([S, P]) =>
                  m.createElement(
                    Wu,
                    { key: S, label: S, level: "subsection", colSpan: g },
                    P.map((N) => m.createElement(ca, { key: N.key, row: N, arg: d && d[N.key], expandable: h, ...E }))
                  )
                )
              )
            )
          )
        )
      );
    },
    hy = ({ tabs: e, ...t }) => {
      let r = Object.entries(e);
      return r.length === 1
        ? m.createElement(St, { ...r[0][1], ...t })
        : m.createElement(
            Oa,
            null,
            r.map((n) => {
              let [a, o] = n,
                u = `prop_table_div_${a}`;
              return m.createElement("div", { key: u, id: u, title: a }, ({ active: i }) =>
                i ? m.createElement(St, { key: `prop_table_${a}`, ...o, ...t }) : null
              );
            })
          );
    },
    rP = q.div(({ theme: e }) => ({
      background: e.background.warning,
      color: e.color.darkest,
      padding: "10px 15px",
      lineHeight: "20px",
      boxShadow: `${e.appBorderColor} 0 -1px 0 0 inset`,
    })),
    gy = () =>
      m.createElement(
        rP,
        null,
        "This story is not configured to handle controls.",
        " ",
        m.createElement(
          lr,
          {
            href: "https://storybook.js.org/docs/react/essentials/controls",
            target: "_blank",
            cancel: !1,
            withArrow: !0,
          },
          "Learn how to add controls"
        )
      ),
    xte = q.div(({ theme: e }) => ({
      marginRight: 30,
      fontSize: `${e.typography.size.s1}px`,
      color: e.base === "light" ? pe(0.4, e.color.defaultText) : pe(0.6, e.color.defaultText),
    })),
    Fte = q.div({ overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }),
    Ste = q.div({
      display: "flex",
      flexDirection: "row",
      alignItems: "baseline",
      "&:not(:last-child)": { marginBottom: "1rem" },
    }),
    wte = q.div(Tt, ({ theme: e }) => ({ ...da(e), margin: "25px 0 40px", padding: "30px 20px" }));
  var Bte = q.div(({ theme: e }) => ({ fontWeight: e.typography.weight.bold, color: e.color.defaultText })),
    Tte = q.div(({ theme: e }) => ({
      color: e.base === "light" ? pe(0.2, e.color.defaultText) : pe(0.6, e.color.defaultText),
    })),
    _te = q.div({ flex: "0 0 30%", lineHeight: "20px", marginTop: 5 }),
    Ote = q.div(({ theme: e }) => ({
      flex: 1,
      textAlign: "center",
      fontFamily: e.typography.fonts.mono,
      fontSize: e.typography.size.s1,
      lineHeight: 1,
      overflow: "hidden",
      color: e.base === "light" ? pe(0.4, e.color.defaultText) : pe(0.6, e.color.defaultText),
      "> div": { display: "inline-block", overflow: "hidden", maxWidth: "100%", textOverflow: "ellipsis" },
      span: { display: "block", marginTop: 2 },
    })),
    Rte = q.div({ display: "flex", flexDirection: "row" }),
    Pte = q.div(({ background: e }) => ({
      position: "relative",
      flex: 1,
      "&::before": {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: e,
        content: '""',
      },
    })),
    Ite = q.div(({ theme: e }) => ({
      ...da(e),
      display: "flex",
      flexDirection: "row",
      height: 50,
      marginBottom: 5,
      overflow: "hidden",
      backgroundColor: "white",
      backgroundImage: "repeating-linear-gradient(-45deg, #ccc, #ccc 1px, #fff 1px, #fff 16px)",
      backgroundClip: "padding-box",
    })),
    kte = q.div({ display: "flex", flexDirection: "column", flex: 1, position: "relative", marginBottom: 30 }),
    Nte = q.div({ flex: 1, display: "flex", flexDirection: "row" }),
    jte = q.div({ display: "flex", alignItems: "flex-start" }),
    Mte = q.div({ flex: "0 0 30%" }),
    qte = q.div({ flex: 1 }),
    Lte = q.div(({ theme: e }) => ({
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      paddingBottom: 20,
      fontWeight: e.typography.weight.bold,
      color: e.base === "light" ? pe(0.4, e.color.defaultText) : pe(0.6, e.color.defaultText),
    })),
    $te = q.div(({ theme: e }) => ({
      fontSize: e.typography.size.s2,
      lineHeight: "20px",
      display: "flex",
      flexDirection: "column",
    }));
  var Ute = q.div(({ theme: e }) => ({
      fontFamily: e.typography.fonts.base,
      fontSize: e.typography.size.s2,
      color: e.color.defaultText,
      marginLeft: 10,
      lineHeight: 1.2,
    })),
    zte = q.div(({ theme: e }) => ({
      ...da(e),
      overflow: "hidden",
      height: 40,
      width: 40,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flex: "none",
      "> img, > svg": { width: 20, height: 20 },
    })),
    Hte = q.div({
      display: "inline-flex",
      flexDirection: "row",
      alignItems: "center",
      flex: "0 1 calc(20% - 10px)",
      minWidth: 120,
      margin: "0px 10px 30px 0",
    }),
    Gte = q.div({ display: "flex", flexFlow: "row wrap" });
  var nP = (e) => `anchor--${e}`,
    aP = ({ storyId: e, children: t }) => m.createElement("div", { id: nP(e), className: "sb-anchor" }, t);
  oe &&
    oe.__DOCS_CONTEXT__ === void 0 &&
    ((oe.__DOCS_CONTEXT__ = sr(null)), (oe.__DOCS_CONTEXT__.displayName = "DocsContext"));
  var Ye = oe ? oe.__DOCS_CONTEXT__ : sr(null),
    ii = (e, t) => je(Ye).resolveOf(e, t);
  var si = "^",
    oP = (e) =>
      e
        .split("-")
        .map((t) => t.charAt(0).toUpperCase() + t.slice(1))
        .join(""),
    my = (e) => {
      if (e)
        return typeof e == "string"
          ? e.includes("-")
            ? oP(e)
            : e
          : e.__docgenInfo && e.__docgenInfo.displayName
          ? e.__docgenInfo.displayName
          : e.name;
    };
  function yy(e, t) {
    let r = li([e], t);
    return r && r[0];
  }
  function li(e, t) {
    let [r, n] = ne({});
    return (
      me(() => {
        Promise.all(
          e.map(async (a) => {
            let o = await t.loadStory(a);
            n((u) => (u[a] === o ? u : { ...u, [a]: o }));
          })
        );
      }),
      e.map((a) => {
        if (r[a]) return r[a];
        try {
          return t.storyById(a);
        } catch {
          return null;
        }
      })
    );
  }
  var uP = (e, t) => {
      let r = t.getStoryContext(t.storyById()),
        [n, a] = ne(r.args);
      me(() => {
        let i = (s) => {
          s.storyId === e && a(s.args);
        };
        return t.channel.on(Tn, i), () => t.channel.off(Tn, i);
      }, [e]);
      let o = ge((i) => t.channel.emit(_n, { storyId: e, updatedArgs: i }), [e]),
        u = ge((i) => t.channel.emit(Bn, { storyId: e, argNames: i }), [e]);
      return [n, o, u];
    },
    iP = (e) => {
      let t = e.getStoryContext(e.storyById()),
        [r, n] = ne(t.globals);
      return (
        me(() => {
          let a = (o) => {
            n(o.globals);
          };
          return e.channel.on(wn, a), () => e.channel.off(wn, a);
        }, []),
        [r]
      );
    },
    by = (e, t, r, n) => {
      let { extractArgTypes: a } = t.docs || {};
      if (!a) throw new Error("Args unsupported. See Args documentation for your framework.");
      let o = a(e);
      return (o = Pr(o, r, n)), o;
    },
    Vm = (e) => e && [si].includes(e),
    sP = (e = {}, t) => {
      let { of: r } = e,
        { story: n } = e;
      if (Vm(r) || Vm(n)) return t || null;
      if (!r) throw new Error("No component found.");
      return r;
    },
    ei = (e, t, r, n, a, o) => ({ ...e, ...(0, Zm.default)(t, (u) => ({ rows: by(u, r, n, a), sort: o })) }),
    lP = (e) => {
      let t = je(Ye),
        { story: r, component: n, subcomponents: a, showComponent: o, include: u, exclude: i, sort: s } = e;
      try {
        let d;
        switch (r) {
          case si: {
            d = t.storyById().id;
            break;
          }
          default:
            d = t.storyIdByName(r);
        }
        let y = yy(d, t),
          [A, g, h] = uP(d, t),
          [E] = iP(t);
        if (!y) return m.createElement(St, { isLoading: !0, updateArgs: g, resetArgs: h });
        let b = Pr(y.argTypes, u, i),
          x = my(n) || "Story",
          S = { [x]: { rows: b, args: A, globals: E, updateArgs: g, resetArgs: h } },
          P = b && Object.values(b).find((N) => !!N?.control);
        if (
          (P || ((g = null), (h = null), (S = {})), n && (!P || o) && (S = ei(S, { [x]: n }, y.parameters, u, i)), a)
        ) {
          if (Array.isArray(a))
            throw new Error(
              "Unexpected subcomponents array. Expected an object whose keys are tab labels and whose values are components."
            );
          S = ei(S, a, y.parameters, u, i);
        }
        return m.createElement(hy, { tabs: S, sort: s });
      } catch (d) {
        return m.createElement(St, { error: d.message });
      }
    },
    Km = (e) => {
      let { components: t, include: r, exclude: n, sort: a, parameters: o } = e,
        u = ei({}, t, o, r, n);
      return m.createElement(hy, { tabs: u, sort: a });
    },
    cP = (e) => {
      ye(Ce`The ArgsTable doc block is deprecated. Instead use the ArgTypes doc block for static tables or the Controls doc block for tables with controls.
    
  Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#argstable-block
  `);
      let t = je(Ye),
        r,
        n,
        a;
      try {
        ({ parameters: r, component: n, subcomponents: a } = t.storyById());
      } catch {
        let { of: h } = e;
        if ("of" in e && h === void 0)
          throw new Error("Unexpected `of={undefined}`, did you mistype a CSF file reference?");
        ({
          projectAnnotations: { parameters: r },
        } = t.resolveOf(h, ["component"]));
      }
      let { include: o, exclude: u, components: i, sort: s } = e,
        { story: d } = e,
        y = s || r.controls?.sort,
        A = sP(e, n);
      if (d) return m.createElement(lP, { ...e, component: A, subcomponents: a, sort: y });
      if (!i && !a) {
        let h;
        try {
          h = { rows: by(A, r, o, u) };
        } catch (E) {
          h = { error: E.message };
        }
        return m.createElement(St, { ...h, sort: y });
      }
      if (i) return m.createElement(Km, { ...e, components: i, sort: y, parameters: r });
      let g = my(A);
      return m.createElement(Km, { ...e, components: { [g]: A, ...a }, sort: y, parameters: r });
    };
  cP.defaultProps = { of: si };
  function pP(e) {
    return Tu(e);
  }
  var dP = sr({ sources: {} }),
    fP = "--unknown--";
  var hP = ((e) => ((e.OPEN = "open"), (e.CLOSED = "closed"), (e.NONE = "none"), e))(hP || {}),
    gP = (e) => {
      let t = e.map((r) => r.parameters.docs?.source?.state).filter(Boolean);
      return t.length === 0 ? "closed" : t[0];
    },
    mP = (e, t, r) => {
      let { sources: n } = r,
        a = n?.[e];
      return a?.[pP(t)] || a?.[fP] || { code: "" };
    },
    yP = ({ snippet: e, storyContext: t, typeFromProps: r, transformFromProps: n }) => {
      let { __isArgsStory: a } = t.parameters,
        o = t.parameters.docs?.source || {},
        u = r || o.type || zr.AUTO;
      if (o.code !== void 0) return o.code;
      let i = u === zr.DYNAMIC || (u === zr.AUTO && e && a) ? e : o.originalSource || "";
      return (
        o.transformSource &&
          ye(Ce`The \`transformSource\` parameter at \`parameters.docs.source.transformSource\` is deprecated, please use \`parameters.docs.source.transform\` instead. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#source-block
  `),
        t.parameters.docs?.transformSource &&
          ye(Ce`The \`transformSource\` parameter at \`parameters.docs.transformSource\` is deprecated, please use \`parameters.docs.source.transform\` instead. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#source-block
  `),
        t.parameters.jsx?.transformSource &&
          ye(Ce`The \`transformSource\` parameter at \`parameters.jsx.transformSource\` is deprecated, please use \`parameters.docs.source.transform\` instead. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#source-block
  `),
        (
          n ??
          o.transform ??
          o.transformSource ??
          t.parameters.docs?.transformSource ??
          t.parameters.jsx?.transformSource
        )?.(i, t) || i
      );
    },
    Ay = (e, t, r) => {
      let n = e.ids || (e.id ? [e.id] : []),
        a = li(n, t),
        o = a,
        { of: u } = e;
      if ("of" in e && u === void 0)
        throw new Error("Unexpected `of={undefined}`, did you mistype a CSF file reference?");
      if (u) o = [t.resolveOf(u, ["story"]).story];
      else if (o.length === 0)
        try {
          o = [t.storyById()];
        } catch {}
      if (!a.every(Boolean)) return { error: "Oh no! The source is not available.", state: "none" };
      let i = o[0]?.parameters?.docs?.source || {},
        { code: s } = e,
        d = e.format ?? i.format,
        y = e.language ?? i.language ?? "jsx",
        A = e.dark ?? i.dark ?? !1;
      s ||
        (s = o.map((h, E) => {
          if (!h) return "";
          let b = t.getStoryContext(h),
            x = e.__forceInitialArgs ? b.initialArgs : b.unmappedArgs,
            S = mP(h.id, x, r);
          return (
            E === 0 && (d = S.format ?? h.parameters.docs?.source?.format ?? !1),
            yP({
              snippet: S.code,
              storyContext: { ...b, args: x },
              typeFromProps: e.type,
              transformFromProps: e.transform,
            })
          );
        }).join(`

`));
      let g = gP(o);
      return s
        ? { code: s, format: d, language: y, dark: A, state: g }
        : { error: "Oh no! The source is not available.", state: g };
    };
  var Ey = (e, t) => {
      let { id: r, of: n, meta: a, story: o } = e;
      if ("of" in e && n === void 0)
        throw new Error("Unexpected `of={undefined}`, did you mistype a CSF file reference?");
      if (r)
        return (
          ye(Ce`Referencing stories by \`id\` is deprecated, please use \`of\` instead. 
    
      Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#story-block'`),
          r
        );
      let { name: u } = e;
      return u
        ? (ye(Ce`Referencing stories by \`name\` is deprecated, please use \`of\` instead. 
    
      Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#story-block'`),
          t.storyIdByName(u))
        : (o &&
            ye(Ce`The \`story\` prop is deprecated, please export your stories from CSF files and reference them with \`of={}\`.

      Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#story-block'`),
          a && t.referenceMeta(a, !1),
          t.resolveOf(n || o || "story", ["story"]).story.id);
    },
    bP = (e, t, r) => {
      let { parameters: n = {} } = t || {},
        { docs: a = {} } = n,
        o = a.story || {};
      if (a.disable) return null;
      let { inlineStories: u, iframeHeight: i } = a;
      typeof u < "u" &&
        ye(Ce`The \`docs.inlineStories\` parameter is deprecated, use \`docs.story.inline\` instead. 
    
      Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#autodocs-changes'
    `);
      let s = e.inline ?? o.inline ?? u ?? !1;
      if (
        (typeof i < "u" &&
          ye(Ce`The \`docs.iframeHeight\` parameter is deprecated, use \`docs.story.iframeHeight\` instead. 
    
      Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#autodocs-changes'
    `),
        s)
      ) {
        let y = e.height ?? o.height,
          A = e.autoplay ?? o.autoplay ?? !1;
        return {
          story: t,
          inline: !0,
          height: y,
          autoplay: A,
          forceInitialArgs: !!e.__forceInitialArgs,
          primary: !!e.__primary,
          renderStoryToElement: r.renderStoryToElement,
        };
      }
      let d = e.height ?? o.height ?? o.iframeHeight ?? i ?? "100px";
      return { story: t, inline: !1, height: d, primary: !!e.__primary };
    },
    AP = (e = { __forceInitialArgs: !1, __primary: !1 }) => {
      let t = je(Ye),
        r = Ey(e, t),
        n = yy(r, t);
      if (!n) return m.createElement(ai, null);
      let a = bP(e, n, t);
      return a ? m.createElement(l9, { ...a }) : null;
    },
    EP = ({ withSource: e, mdxSource: t, children: r, layout: n, ...a }, o, u) => {
      let i = Kr.toArray(r)
          .filter((g) => g.props && (g.props.id || g.props.name || g.props.of))
          .map((g) => Ey(g.props, o)),
        s = li(i, o),
        d = s.some((g) => !g),
        y = Ay({ ...(t ? { code: decodeURI(t) } : { ids: i }), ...(a.of && { of: a.of }) }, o, u);
      if (e === "none") return { isLoading: d, previewProps: a };
      let A = n;
      return (
        Kr.forEach(r, (g) => {
          A || (A = g?.props?.parameters?.layout);
        }),
        s.forEach((g) => {
          A || !g || (A = g?.parameters.layout ?? g.parameters.docs?.canvas?.layout);
        }),
        {
          isLoading: d,
          previewProps: { ...a, layout: A ?? "padded", withSource: y, isExpanded: (e || y.state) === "open" },
        }
      );
    },
    DP = (e) => {
      let t = je(Ye),
        r = je(dP),
        { children: n, of: a, source: o } = e;
      if ("of" in e && a === void 0)
        throw new Error("Unexpected `of={undefined}`, did you mistype a CSF file reference?");
      let { isLoading: u, previewProps: i } = EP(e, t, r),
        s,
        d,
        y;
      try {
        ({ story: s } = ii(a || "story", ["story"]));
      } catch (x) {
        n || (y = x);
      }
      try {
        d = Ay({ ...o, ...(a && { of: a }) }, t, r);
      } catch (x) {
        n || (y = x);
      }
      if (y) throw y;
      if (
        (e.withSource &&
          ye(Ce`Setting source state with \`withSource\` is deprecated, please use \`sourceState\` with 'hidden', 'shown' or 'none' instead. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#canvas-block
    `),
        e.mdxSource &&
          ye(Ce`Setting source code with \`mdxSource\` is deprecated, please use source={{code: '...'}} instead. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#canvas-block
    `),
        (e.isColumn !== void 0 || e.columns !== void 0) &&
          ye(Ce`\`isColumn\` and \`columns\` props are deprecated as the Canvas block now only supports showing a single story. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#canvas-block
    `),
        n)
      )
        return (
          ye(Ce`Passing children to Canvas is deprecated, please use the \`of\` prop instead to reference a story. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#canvas-block
  `),
          u ? m.createElement(y9, null) : m.createElement(Xu, { ...i }, n)
        );
      let A = e.layout ?? s.parameters.layout ?? s.parameters.docs?.canvas?.layout ?? "padded",
        g = e.withToolbar ?? s.parameters.docs?.canvas?.withToolbar ?? !1,
        h = e.additionalActions ?? s.parameters.docs?.canvas?.additionalActions,
        E = e.sourceState ?? s.parameters.docs?.canvas?.sourceState ?? "hidden",
        b = e.className ?? s.parameters.docs?.canvas?.className;
      return m.createElement(
        Xu,
        {
          withSource: E === "none" ? void 0 : d,
          isExpanded: E === "shown",
          withToolbar: g,
          additionalActions: h,
          className: b,
          layout: A,
        },
        m.createElement(AP, { of: a || s.moduleExport, meta: e.meta, ...e.story })
      );
    };
  var { document: Dy } = oe;
  var vP = ({ className: e, children: t, ...r }) => {
    if (typeof e != "string" && (typeof t != "string" || !t.match(/[\n\r]/g))) return m.createElement(Ca, null, t);
    let n = e && e.split("-");
    return m.createElement(ri, { language: (n && n[1]) || "plaintext", format: !1, code: t, ...r });
  };
  function ci(e, t) {
    e.channel.emit(Wf, t);
  }
  var ti = ka.a,
    CP = ({ hash: e, children: t }) => {
      let r = je(Ye);
      return m.createElement(
        ti,
        {
          href: e,
          target: "_self",
          onClick: (n) => {
            let a = e.substring(1);
            Dy.getElementById(a) && ci(r, e);
          },
        },
        t
      );
    },
    xP = (e) => {
      let { href: t, target: r, children: n, ...a } = e,
        o = je(Ye);
      if (t) {
        if (t.startsWith("#")) return m.createElement(CP, { hash: t }, n);
        if (r !== "_blank" && !t.startsWith("https://"))
          return m.createElement(
            ti,
            {
              href: t,
              onClick: (u) => {
                u.button === 0 &&
                  !u.altKey &&
                  !u.ctrlKey &&
                  !u.metaKey &&
                  !u.shiftKey &&
                  (u.preventDefault(), ci(o, u.currentTarget.getAttribute("href")));
              },
              target: r,
              ...a,
            },
            n
          );
      }
      return m.createElement(ti, { ...e });
    },
    vy = ["h1", "h2", "h3", "h4", "h5", "h6"],
    FP = vy.reduce(
      (e, t) => ({
        ...e,
        [t]: q(t)({
          "& svg": { position: "relative", top: "-0.1em", visibility: "hidden" },
          "&:hover svg": { visibility: "visible" },
        }),
      }),
      {}
    ),
    SP = q.a(() => ({
      float: "left",
      lineHeight: "inherit",
      paddingRight: "10px",
      marginLeft: "-24px",
      color: "inherit",
    })),
    wP = ({ as: e, id: t, children: r, ...n }) => {
      let a = je(Ye),
        o = FP[e],
        u = `#${t}`;
      return m.createElement(
        o,
        { id: t, ...n },
        m.createElement(
          SP,
          {
            "aria-hidden": "true",
            href: u,
            tabIndex: -1,
            target: "_self",
            onClick: (i) => {
              Dy.getElementById(t) && ci(a, u);
            },
          },
          m.createElement(Te, { icon: "link" })
        ),
        r
      );
    },
    pi = (e) => {
      let { as: t, id: r, children: n, ...a } = e;
      if (r) return m.createElement(wP, { as: t, id: r, ...a }, n);
      let o = t,
        { as: u, ...i } = e;
      return m.createElement(o, { ...ja(i, t) });
    },
    BP = vy.reduce((e, t) => ({ ...e, [t]: (r) => m.createElement(pi, { as: t, ...r }) }), {}),
    TP = (e) => {
      if (!e.children) return null;
      if (typeof e.children != "string")
        throw new Error(Ce`The Markdown block only accepts children as a single string, but children were of type: '${typeof e.children}'
        This is often caused by not wrapping the child in a template string.
        
        This is invalid:
        <Markdown>
          # Some heading
          A paragraph
        </Markdown>

        Instead do:
        <Markdown>
        {\`
          # Some heading
          A paragraph
        \`}
        </Markdown>
      `);
      return m.createElement(zo, {
        ...e,
        options: { forceBlock: !0, overrides: { code: vP, a: xP, ...BP, ...e?.options?.overrides }, ...e?.options },
      });
    },
    _P = ((e) => ((e.INFO = "info"), (e.NOTES = "notes"), (e.DOCGEN = "docgen"), (e.AUTO = "auto"), e))(_P || {}),
    pa =
      "https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#description-block-parametersnotes-and-parametersinfo",
    OP = (e) => e && (typeof e == "string" ? e : ra(e.markdown) || ra(e.text)),
    RP = (e) => e && (typeof e == "string" ? e : ra(e.text)),
    PP = (e) => null,
    IP = (e) => {
      switch (e.type) {
        case "story":
          return e.story.parameters.docs?.description?.story || null;
        case "meta": {
          let { parameters: t, component: r } = e.preparedMeta;
          return (
            t.docs?.description?.component ||
            t.docs?.extractComponentDescription?.(r, { component: r, parameters: t }) ||
            null
          );
        }
        case "component": {
          let {
            component: t,
            projectAnnotations: { parameters: r },
          } = e;
          return r.docs?.extractComponentDescription?.(t, { component: t, parameters: r }) || null;
        }
        default:
          throw new Error(`Unrecognized module type resolved from 'useOf', got: ${e.type}`);
      }
    },
    kP = ({ type: e, markdown: t, children: r }, { storyById: n }) => {
      let { component: a, parameters: o } = n();
      if (r || t) return r || t;
      let { notes: u, info: i, docs: s } = o;
      (u || i) &&
        ye(`Using 'parameters.notes' or 'parameters.info' properties to describe stories is deprecated. See ${pa}`);
      let { extractComponentDescription: d = PP, description: y } = s || {},
        A = y?.component;
      if (A) return A;
      switch (e) {
        case "info":
          return RP(i);
        case "notes":
          return OP(u);
        case "docgen":
        case "auto":
        default:
          return d(a, { component: a, ...o });
      }
    },
    NP = (e) => {
      let { of: t, type: r, markdown: n, children: a } = e;
      if ("of" in e && t === void 0)
        throw new Error("Unexpected `of={undefined}`, did you mistype a CSF file reference?");
      let o = je(Ye),
        u = ii(t || "meta"),
        i;
      return (
        r || n || a ? (i = kP(e, o)) : (i = IP(u)),
        r && ye(`Manually specifying description type is deprecated. See ${pa}`),
        n && ye(`The 'markdown' prop on the Description block is deprecated. See ${pa}`),
        a && ye(`The 'children' prop on the Description block is deprecated. See ${pa}`),
        i ? m.createElement(TP, null, i) : null
      );
    },
    { document: Wte, window: Vte } = oe;
  var jP = ({ children: e, disableAnchor: t }) => {
      if (t || typeof e != "string") return m.createElement(wa, null, e);
      let r = e.toLowerCase().replace(/[^a-z0-9]/gi, "-");
      return m.createElement(pi, { as: "h3", id: r }, e);
    },
    MP = ({ of: e, expanded: t = !0, withToolbar: r = !1, __forceInitialArgs: n = !1, __primary: a = !1 }) => {
      let { story: o } = ii(e || "story", ["story"]),
        u = o.parameters.docs?.canvas?.withToolbar ?? r;
      return m.createElement(
        aP,
        { storyId: o.id },
        t && m.createElement(m.Fragment, null, m.createElement(jP, null, o.name), m.createElement(NP, { of: e })),
        m.createElement(DP, {
          of: e,
          withToolbar: u,
          story: { __forceInitialArgs: n, __primary: a },
          source: { __forceInitialArgs: n },
        })
      );
    };
  var qP = ({ children: e, disableAnchor: t, ...r }) => {
      if (t || typeof e != "string") return m.createElement(Sa, null, e);
      let n = e.toLowerCase().replace(/[^a-z0-9]/gi, "-");
      return m.createElement(pi, { as: "h2", id: n, ...r }, e);
    },
    LP = q(qP)(({ theme: e }) => ({
      fontSize: `${e.typography.size.s2 - 1}px`,
      fontWeight: e.typography.weight.bold,
      lineHeight: "16px",
      letterSpacing: "0.35em",
      textTransform: "uppercase",
      color: e.textMutedColor,
      border: 0,
      marginBottom: "12px",
      "&:first-of-type": { marginTop: "56px" },
    })),
    $P = ({ title: e, includePrimary: t = !0 }) => {
      let { componentStories: r } = je(Ye),
        n = r().filter((a) => !a.parameters?.docs?.disable);
      return (
        t || (n = n.slice(1)),
        !n || n.length === 0
          ? null
          : m.createElement(
              m.Fragment,
              null,
              m.createElement(LP, null, e),
              n.map(
                (a) => a && m.createElement(MP, { key: a.id, of: a.moduleExport, expanded: !0, __forceInitialArgs: !0 })
              )
            )
      );
    };
  $P.defaultProps = { title: "Stories" };
  var UP = () => {
    let [e, t, r] = Ai(),
      [n] = Ei(),
      a = Aa(),
      o = Ea("__isArgsStory", !1),
      { expanded: u, sort: i, presetColors: s, hideNoControlsWarning: d = !1 } = Ea(ma, {}),
      { path: y } = Di(),
      A = Object.values(a).some((E) => E?.control),
      g = !(A && o) && !d,
      h = Object.entries(a).reduce(
        (E, [b, x]) => (
          x?.control?.type !== "color" || x?.control?.presetColors
            ? (E[b] = x)
            : (E[b] = { ...x, control: { ...x.control, presetColors: s } }),
          E
        ),
        {}
      );
    return m.createElement(
      m.Fragment,
      null,
      g && m.createElement(gy, null),
      m.createElement(St, {
        key: y,
        compact: !u && A,
        rows: h,
        args: e,
        globals: n,
        updateArgs: t,
        resetArgs: r,
        inAddonPanel: !0,
        sort: i,
      })
    );
  };
  function zP() {
    let e = Aa(),
      t = Object.values(e).filter((n) => n?.control && !n?.table?.disable).length,
      r = t === 0 ? "" : ` (${t})`;
    return m.createElement(m.Fragment, null, "Controls", r);
  }
  ba.register(ga, (e) => {
    ba.addPanel(ga, {
      title: m.createElement(zP, null),
      id: "controls",
      type: bi.PANEL,
      paramKey: ma,
      render: ({ key: t, active: r }) =>
        !r || !e.getCurrentStoryData() ? null : m.createElement(va, { key: t, active: r }, m.createElement(UP, null)),
    });
  });
} catch (e) {
  console.error("[Storybook] One of your manager-entries failed: " + import.meta.url, e);
}
//# sourceMappingURL=manager-bundle.js.map

import { _ as tt } from "./iframe-010eedeb.js";
import { r as A, b as Ho, g as rn, R as a } from "./index-ebeaab24.js";
import {
  R as O0,
  s as R0,
  t as bi,
  v as F0,
  w as Ei,
  x as T0,
  i as nn,
  y as D0,
  z as L0,
  A as M0,
  d as xi,
  B as Ai,
  C as B0,
  D as wi,
  E as $0,
  F as I0,
  G as Z0,
  H as H0,
  I as j0,
  J as N0,
  K as Ci,
  L as P0,
  M as V0,
  N as Si,
  _ as z0,
  O as q0,
  P as U0,
  Q as Ra,
  e as ki,
  U as _i,
  V as Oi,
  W as W0,
  X as G0,
  Y as Y0,
  f as K0,
  S as jo,
  Z as ea,
  l as Fn,
  r as J0,
  u as X0,
} from "./_getPrototype-0b33db91.js";
import {
  _ as Ri,
  a as Fa,
  b as Lt,
  t as Tr,
  d as Q0,
  e as ta,
  g as ec,
  l as No,
  f as Fi,
  h as K,
  m as tc,
  i as ir,
} from "./chunk-4NMOSTKD-82fbb5f2.js";
import { s as he } from "./index-d475d2ea.js";
import { L as Ti, v as rc } from "./index-d37d4223.js";
import { d as ve } from "./index-356e4a49.js";
var nc = function (t) {
    return t();
  },
  Di = Ho["useInsertionEffect"] ? Ho["useInsertionEffect"] : !1,
  Ta = Di || nc,
  Po = Di || A.useLayoutEffect;
function Dr(e) {
  throw new Error(
    'Could not dynamically require "' +
      e +
      '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.'
  );
}
var Li = { exports: {} };
(function (e, t) {
  (function (r) {
    e.exports = r();
  })(function () {
    return (function r(n, o, l) {
      function i(c, p) {
        if (!o[c]) {
          if (!n[c]) {
            var g = typeof Dr == "function" && Dr;
            if (!p && g) return g(c, !0);
            if (u) return u(c, !0);
            var h = new Error("Cannot find module '" + c + "'");
            throw ((h.code = "MODULE_NOT_FOUND"), h);
          }
          var d = (o[c] = { exports: {} });
          n[c][0].call(
            d.exports,
            function (m) {
              var f = n[c][1][m];
              return i(f || m);
            },
            d,
            d.exports,
            r,
            n,
            o,
            l
          );
        }
        return o[c].exports;
      }
      for (var u = typeof Dr == "function" && Dr, s = 0; s < l.length; s++) i(l[s]);
      return i;
    })(
      {
        1: [
          function (r, n, o) {
            n.exports = function (l) {
              if (typeof Map != "function" || l) {
                var i = r("./similar");
                return new i();
              } else return new Map();
            };
          },
          { "./similar": 2 },
        ],
        2: [
          function (r, n, o) {
            function l() {
              return (this.list = []), (this.lastItem = void 0), (this.size = 0), this;
            }
            (l.prototype.get = function (i) {
              var u;
              if (this.lastItem && this.isEqual(this.lastItem.key, i)) return this.lastItem.val;
              if (((u = this.indexOf(i)), u >= 0)) return (this.lastItem = this.list[u]), this.list[u].val;
            }),
              (l.prototype.set = function (i, u) {
                var s;
                return this.lastItem && this.isEqual(this.lastItem.key, i)
                  ? ((this.lastItem.val = u), this)
                  : ((s = this.indexOf(i)),
                    s >= 0
                      ? ((this.lastItem = this.list[s]), (this.list[s].val = u), this)
                      : ((this.lastItem = { key: i, val: u }), this.list.push(this.lastItem), this.size++, this));
              }),
              (l.prototype.delete = function (i) {
                var u;
                if (
                  (this.lastItem && this.isEqual(this.lastItem.key, i) && (this.lastItem = void 0),
                  (u = this.indexOf(i)),
                  u >= 0)
                )
                  return this.size--, this.list.splice(u, 1)[0];
              }),
              (l.prototype.has = function (i) {
                var u;
                return this.lastItem && this.isEqual(this.lastItem.key, i)
                  ? !0
                  : ((u = this.indexOf(i)), u >= 0 ? ((this.lastItem = this.list[u]), !0) : !1);
              }),
              (l.prototype.forEach = function (i, u) {
                var s;
                for (s = 0; s < this.size; s++) i.call(u || this, this.list[s].val, this.list[s].key, this);
              }),
              (l.prototype.indexOf = function (i) {
                var u;
                for (u = 0; u < this.size; u++) if (this.isEqual(this.list[u].key, i)) return u;
                return -1;
              }),
              (l.prototype.isEqual = function (i, u) {
                return i === u || (i !== i && u !== u);
              }),
              (n.exports = l);
          },
          {},
        ],
        3: [
          function (r, n, o) {
            var l = r("map-or-similar");
            n.exports = function (c) {
              var p = new l(!1),
                g = [];
              return function (h) {
                var d = function () {
                  var m = p,
                    f,
                    v,
                    b = arguments.length - 1,
                    C = Array(b + 1),
                    y = !0,
                    E;
                  if ((d.numArgs || d.numArgs === 0) && d.numArgs !== b + 1)
                    throw new Error("Memoizerific functions should always be called with the same number of arguments");
                  for (E = 0; E < b; E++) {
                    if (((C[E] = { cacheItem: m, arg: arguments[E] }), m.has(arguments[E]))) {
                      m = m.get(arguments[E]);
                      continue;
                    }
                    (y = !1), (f = new l(!1)), m.set(arguments[E], f), (m = f);
                  }
                  return (
                    y && (m.has(arguments[b]) ? (v = m.get(arguments[b])) : (y = !1)),
                    y || ((v = h.apply(null, arguments)), m.set(arguments[b], v)),
                    c > 0 &&
                      ((C[b] = { cacheItem: m, arg: arguments[b] }),
                      y ? i(g, C) : g.push(C),
                      g.length > c && u(g.shift())),
                    (d.wasMemoized = y),
                    (d.numArgs = b + 1),
                    v
                  );
                };
                return (d.limit = c), (d.wasMemoized = !1), (d.cache = p), (d.lru = g), d;
              };
            };
            function i(c, p) {
              var g = c.length,
                h = p.length,
                d,
                m,
                f;
              for (m = 0; m < g; m++) {
                for (d = !0, f = 0; f < h; f++)
                  if (!s(c[m][f].arg, p[f].arg)) {
                    d = !1;
                    break;
                  }
                if (d) break;
              }
              c.push(c.splice(m, 1)[0]);
            }
            function u(c) {
              var p = c.length,
                g = c[p - 1],
                h,
                d;
              for (
                g.cacheItem.delete(g.arg), d = p - 2;
                d >= 0 && ((g = c[d]), (h = g.cacheItem.get(g.arg)), !h || !h.size);
                d--
              )
                g.cacheItem.delete(g.arg);
            }
            function s(c, p) {
              return c === p || (c !== c && p !== p);
            }
          },
          { "map-or-similar": 1 },
        ],
      },
      {},
      [3]
    )(3);
  });
})(Li);
var ac = Li.exports;
const Ot = rn(ac),
  { logger: oc } = __STORYBOOK_MODULE_CLIENT_LOGGER__;
var lc = Fa({
    "../../node_modules/react-is/cjs/react-is.development.js"(e) {
      (function () {
        var t = typeof Symbol == "function" && Symbol.for,
          r = t ? Symbol.for("react.element") : 60103,
          n = t ? Symbol.for("react.portal") : 60106,
          o = t ? Symbol.for("react.fragment") : 60107,
          l = t ? Symbol.for("react.strict_mode") : 60108,
          i = t ? Symbol.for("react.profiler") : 60114,
          u = t ? Symbol.for("react.provider") : 60109,
          s = t ? Symbol.for("react.context") : 60110,
          c = t ? Symbol.for("react.async_mode") : 60111,
          p = t ? Symbol.for("react.concurrent_mode") : 60111,
          g = t ? Symbol.for("react.forward_ref") : 60112,
          h = t ? Symbol.for("react.suspense") : 60113,
          d = t ? Symbol.for("react.suspense_list") : 60120,
          m = t ? Symbol.for("react.memo") : 60115,
          f = t ? Symbol.for("react.lazy") : 60116,
          v = t ? Symbol.for("react.block") : 60121,
          b = t ? Symbol.for("react.fundamental") : 60117,
          C = t ? Symbol.for("react.responder") : 60118,
          y = t ? Symbol.for("react.scope") : 60119;
        function E(B) {
          return (
            typeof B == "string" ||
            typeof B == "function" ||
            B === o ||
            B === p ||
            B === i ||
            B === l ||
            B === h ||
            B === d ||
            (typeof B == "object" &&
              B !== null &&
              (B.$$typeof === f ||
                B.$$typeof === m ||
                B.$$typeof === u ||
                B.$$typeof === s ||
                B.$$typeof === g ||
                B.$$typeof === b ||
                B.$$typeof === C ||
                B.$$typeof === y ||
                B.$$typeof === v))
          );
        }
        function x(B) {
          if (typeof B == "object" && B !== null) {
            var Be = B.$$typeof;
            switch (Be) {
              case r:
                var je = B.type;
                switch (je) {
                  case c:
                  case p:
                  case o:
                  case i:
                  case l:
                  case h:
                    return je;
                  default:
                    var yt = je && je.$$typeof;
                    switch (yt) {
                      case s:
                      case g:
                      case f:
                      case m:
                      case u:
                        return yt;
                      default:
                        return Be;
                    }
                }
              case n:
                return Be;
            }
          }
        }
        var w = c,
          k = p,
          S = s,
          O = u,
          R = r,
          F = g,
          L = o,
          T = f,
          Z = m,
          D = n,
          M = i,
          H = l,
          P = h,
          $ = !1;
        function j(B) {
          return (
            $ ||
              (($ = !0),
              console.warn(
                "The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API."
              )),
            Y(B) || x(B) === c
          );
        }
        function Y(B) {
          return x(B) === p;
        }
        function re(B) {
          return x(B) === s;
        }
        function G(B) {
          return x(B) === u;
        }
        function J(B) {
          return typeof B == "object" && B !== null && B.$$typeof === r;
        }
        function I(B) {
          return x(B) === g;
        }
        function V(B) {
          return x(B) === o;
        }
        function q(B) {
          return x(B) === f;
        }
        function le(B) {
          return x(B) === m;
        }
        function fe(B) {
          return x(B) === n;
        }
        function nt(B) {
          return x(B) === i;
        }
        function Oe(B) {
          return x(B) === l;
        }
        function He(B) {
          return x(B) === h;
        }
        (e.AsyncMode = w),
          (e.ConcurrentMode = k),
          (e.ContextConsumer = S),
          (e.ContextProvider = O),
          (e.Element = R),
          (e.ForwardRef = F),
          (e.Fragment = L),
          (e.Lazy = T),
          (e.Memo = Z),
          (e.Portal = D),
          (e.Profiler = M),
          (e.StrictMode = H),
          (e.Suspense = P),
          (e.isAsyncMode = j),
          (e.isConcurrentMode = Y),
          (e.isContextConsumer = re),
          (e.isContextProvider = G),
          (e.isElement = J),
          (e.isForwardRef = I),
          (e.isFragment = V),
          (e.isLazy = q),
          (e.isMemo = le),
          (e.isPortal = fe),
          (e.isProfiler = nt),
          (e.isStrictMode = Oe),
          (e.isSuspense = He),
          (e.isValidElementType = E),
          (e.typeOf = x);
      })();
    },
  }),
  ic = Fa({
    "../../node_modules/react-is/index.js"(e, t) {
      t.exports = lc();
    },
  }),
  Mi = Fa({
    "../../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"(e, t) {
      var r = ic(),
        n = {
          childContextTypes: !0,
          contextType: !0,
          contextTypes: !0,
          defaultProps: !0,
          displayName: !0,
          getDefaultProps: !0,
          getDerivedStateFromError: !0,
          getDerivedStateFromProps: !0,
          mixins: !0,
          propTypes: !0,
          type: !0,
        },
        o = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 },
        l = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 },
        i = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 },
        u = {};
      (u[r.ForwardRef] = l), (u[r.Memo] = i);
      function s(v) {
        return r.isMemo(v) ? i : u[v.$$typeof] || n;
      }
      var c = Object.defineProperty,
        p = Object.getOwnPropertyNames,
        g = Object.getOwnPropertySymbols,
        h = Object.getOwnPropertyDescriptor,
        d = Object.getPrototypeOf,
        m = Object.prototype;
      function f(v, b, C) {
        if (typeof b != "string") {
          if (m) {
            var y = d(b);
            y && y !== m && f(v, y, C);
          }
          var E = p(b);
          g && (E = E.concat(g(b)));
          for (var x = s(v), w = s(b), k = 0; k < E.length; ++k) {
            var S = E[k];
            if (!o[S] && !(C && C[S]) && !(w && w[S]) && !(x && x[S])) {
              var O = h(b, S);
              try {
                c(v, S, O);
              } catch {}
            }
          }
        }
        return v;
      }
      t.exports = f;
    },
  });
function sc(e) {
  var t = Object.create(null);
  return function (r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var Bi = sc,
  uc =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|isLoading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  cc = Bi(function (e) {
    return uc.test(e) || (e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91);
  }),
  Da = cc;
function dc(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function pc(e) {
  var t = document.createElement("style");
  return (
    t.setAttribute("data-emotion", e.key),
    e.nonce !== void 0 && t.setAttribute("nonce", e.nonce),
    t.appendChild(document.createTextNode("")),
    t.setAttribute("data-s", ""),
    t
  );
}
var fc = (function () {
    function e(r) {
      var n = this;
      (this._insertTag = function (o) {
        var l;
        n.tags.length === 0
          ? n.insertionPoint
            ? (l = n.insertionPoint.nextSibling)
            : n.prepend
            ? (l = n.container.firstChild)
            : (l = n.before)
          : (l = n.tags[n.tags.length - 1].nextSibling),
          n.container.insertBefore(o, l),
          n.tags.push(o);
      }),
        (this.isSpeedy = r.speedy === void 0 ? !1 : r.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = r.nonce),
        (this.key = r.key),
        (this.container = r.container),
        (this.prepend = r.prepend),
        (this.insertionPoint = r.insertionPoint),
        (this.before = null);
    }
    var t = e.prototype;
    return (
      (t.hydrate = function (r) {
        r.forEach(this._insertTag);
      }),
      (t.insert = function (r) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(pc(this));
        var n = this.tags[this.tags.length - 1],
          o = r.charCodeAt(0) === 64 && r.charCodeAt(1) === 105;
        if (
          (o &&
            this._alreadyInsertedOrderInsensitiveRule &&
            console.error(
              `You're attempting to insert the following rule:
` +
                r +
                "\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules."
            ),
          (this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule || !o),
          this.isSpeedy)
        ) {
          var l = dc(n);
          try {
            l.insertRule(r, l.cssRules.length);
          } catch (i) {
            /:(-moz-placeholder|-moz-focus-inner|-moz-focusring|-ms-input-placeholder|-moz-read-write|-moz-read-only|-ms-clear|-ms-expand|-ms-reveal){/.test(
              r
            ) || console.error('There was a problem inserting the following rule: "' + r + '"', i);
          }
        } else n.appendChild(document.createTextNode(r));
        this.ctr++;
      }),
      (t.flush = function () {
        this.tags.forEach(function (r) {
          return r.parentNode && r.parentNode.removeChild(r);
        }),
          (this.tags = []),
          (this.ctr = 0),
          (this._alreadyInsertedOrderInsensitiveRule = !1);
      }),
      e
    );
  })(),
  pe = "-ms-",
  Kr = "-moz-",
  U = "-webkit-",
  La = "comm",
  Ma = "rule",
  Ba = "decl",
  mc = "@import",
  $i = "@keyframes",
  gc = Math.abs,
  an = String.fromCharCode,
  hc = Object.assign;
function yc(e, t) {
  return ue(e, 0) ^ 45 ? (((((((t << 2) ^ ue(e, 0)) << 2) ^ ue(e, 1)) << 2) ^ ue(e, 2)) << 2) ^ ue(e, 3) : 0;
}
function Ii(e) {
  return e.trim();
}
function bc(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function W(e, t, r) {
  return e.replace(t, r);
}
function ra(e, t) {
  return e.indexOf(t);
}
function ue(e, t) {
  return e.charCodeAt(t) | 0;
}
function cr(e, t, r) {
  return e.slice(t, r);
}
function Ge(e) {
  return e.length;
}
function $a(e) {
  return e.length;
}
function Lr(e, t) {
  return t.push(e), e;
}
function vc(e, t) {
  return e.map(t).join("");
}
var on = 1,
  Ht = 1,
  Zi = 0,
  we = 0,
  ae = 0,
  Wt = "";
function ln(e, t, r, n, o, l, i) {
  return { value: e, root: t, parent: r, type: n, props: o, children: l, line: on, column: Ht, length: i, return: "" };
}
function rr(e, t) {
  return hc(ln("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function Ec() {
  return ae;
}
function xc() {
  return (ae = we > 0 ? ue(Wt, --we) : 0), Ht--, ae === 10 && ((Ht = 1), on--), ae;
}
function Ce() {
  return (ae = we < Zi ? ue(Wt, we++) : 0), Ht++, ae === 10 && ((Ht = 1), on++), ae;
}
function Qe() {
  return ue(Wt, we);
}
function Hr() {
  return we;
}
function wr(e, t) {
  return cr(Wt, e, t);
}
function dr(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Hi(e) {
  return (on = Ht = 1), (Zi = Ge((Wt = e))), (we = 0), [];
}
function ji(e) {
  return (Wt = ""), e;
}
function jr(e) {
  return Ii(wr(we - 1, na(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Ac(e) {
  for (; (ae = Qe()) && ae < 33; ) Ce();
  return dr(e) > 2 || dr(ae) > 3 ? "" : " ";
}
function wc(e, t) {
  for (; --t && Ce() && !(ae < 48 || ae > 102 || (ae > 57 && ae < 65) || (ae > 70 && ae < 97)); );
  return wr(e, Hr() + (t < 6 && Qe() == 32 && Ce() == 32));
}
function na(e) {
  for (; Ce(); )
    switch (ae) {
      case e:
        return we;
      case 34:
      case 39:
        e !== 34 && e !== 39 && na(ae);
        break;
      case 40:
        e === 41 && na(e);
        break;
      case 92:
        Ce();
        break;
    }
  return we;
}
function Cc(e, t) {
  for (; Ce() && e + ae !== 47 + 10 && !(e + ae === 42 + 42 && Qe() === 47); );
  return "/*" + wr(t, we - 1) + "*" + an(e === 47 ? e : Ce());
}
function Sc(e) {
  for (; !dr(Qe()); ) Ce();
  return wr(e, we);
}
function kc(e) {
  return ji(Nr("", null, null, null, [""], (e = Hi(e)), 0, [0], e));
}
function Nr(e, t, r, n, o, l, i, u, s) {
  for (
    var c = 0, p = 0, g = i, h = 0, d = 0, m = 0, f = 1, v = 1, b = 1, C = 0, y = "", E = o, x = l, w = n, k = y;
    v;

  )
    switch (((m = C), (C = Ce()))) {
      case 40:
        if (m != 108 && ue(k, g - 1) == 58) {
          ra((k += W(jr(C), "&", "&\f")), "&\f") != -1 && (b = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        k += jr(C);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        k += Ac(m);
        break;
      case 92:
        k += wc(Hr() - 1, 7);
        continue;
      case 47:
        switch (Qe()) {
          case 42:
          case 47:
            Lr(_c(Cc(Ce(), Hr()), t, r), s);
            break;
          default:
            k += "/";
        }
        break;
      case 123 * f:
        u[c++] = Ge(k) * b;
      case 125 * f:
      case 59:
      case 0:
        switch (C) {
          case 0:
          case 125:
            v = 0;
          case 59 + p:
            d > 0 && Ge(k) - g && Lr(d > 32 ? zo(k + ";", n, r, g - 1) : zo(W(k, " ", "") + ";", n, r, g - 2), s);
            break;
          case 59:
            k += ";";
          default:
            if ((Lr((w = Vo(k, t, r, c, p, o, u, y, (E = []), (x = []), g)), l), C === 123))
              if (p === 0) Nr(k, t, w, w, E, l, g, u, x);
              else
                switch (h === 99 && ue(k, 3) === 110 ? 100 : h) {
                  case 100:
                  case 109:
                  case 115:
                    Nr(e, w, w, n && Lr(Vo(e, w, w, 0, 0, o, u, y, o, (E = []), g), x), o, x, g, u, n ? E : x);
                    break;
                  default:
                    Nr(k, w, w, w, [""], x, 0, u, x);
                }
        }
        (c = p = d = 0), (f = b = 1), (y = k = ""), (g = i);
        break;
      case 58:
        (g = 1 + Ge(k)), (d = m);
      default:
        if (f < 1) {
          if (C == 123) --f;
          else if (C == 125 && f++ == 0 && xc() == 125) continue;
        }
        switch (((k += an(C)), C * f)) {
          case 38:
            b = p > 0 ? 1 : ((k += "\f"), -1);
            break;
          case 44:
            (u[c++] = (Ge(k) - 1) * b), (b = 1);
            break;
          case 64:
            Qe() === 45 && (k += jr(Ce())), (h = Qe()), (p = g = Ge((y = k += Sc(Hr())))), C++;
            break;
          case 45:
            m === 45 && Ge(k) == 2 && (f = 0);
        }
    }
  return l;
}
function Vo(e, t, r, n, o, l, i, u, s, c, p) {
  for (var g = o - 1, h = o === 0 ? l : [""], d = $a(h), m = 0, f = 0, v = 0; m < n; ++m)
    for (var b = 0, C = cr(e, g + 1, (g = gc((f = i[m])))), y = e; b < d; ++b)
      (y = Ii(f > 0 ? h[b] + " " + C : W(C, /&\f/g, h[b]))) && (s[v++] = y);
  return ln(e, t, r, o === 0 ? Ma : u, s, c, p);
}
function _c(e, t, r) {
  return ln(e, t, r, La, an(Ec()), cr(e, 2, -2), 0);
}
function zo(e, t, r, n) {
  return ln(e, t, r, Ba, cr(e, 0, n), cr(e, n + 1, -1), n);
}
function Zt(e, t) {
  for (var r = "", n = $a(e), o = 0; o < n; o++) r += t(e[o], o, e, t) || "";
  return r;
}
function Oc(e, t, r, n) {
  switch (e.type) {
    case mc:
    case Ba:
      return (e.return = e.return || e.value);
    case La:
      return "";
    case $i:
      return (e.return = e.value + "{" + Zt(e.children, n) + "}");
    case Ma:
      e.value = e.props.join(",");
  }
  return Ge((r = Zt(e.children, n))) ? (e.return = e.value + "{" + r + "}") : "";
}
function Rc(e) {
  var t = $a(e);
  return function (r, n, o, l) {
    for (var i = "", u = 0; u < t; u++) i += e[u](r, n, o, l) || "";
    return i;
  };
}
var Fc = function (e) {
    var t = new WeakMap();
    return function (r) {
      if (t.has(r)) return t.get(r);
      var n = e(r);
      return t.set(r, n), n;
    };
  },
  qo = Fc,
  Tc = function (e, t, r) {
    for (var n = 0, o = 0; (n = o), (o = Qe()), n === 38 && o === 12 && (t[r] = 1), !dr(o); ) Ce();
    return wr(e, we);
  },
  Dc = function (e, t) {
    var r = -1,
      n = 44;
    do
      switch (dr(n)) {
        case 0:
          n === 38 && Qe() === 12 && (t[r] = 1), (e[r] += Tc(we - 1, t, r));
          break;
        case 2:
          e[r] += jr(n);
          break;
        case 4:
          if (n === 44) {
            (e[++r] = Qe() === 58 ? "&\f" : ""), (t[r] = e[r].length);
            break;
          }
        default:
          e[r] += an(n);
      }
    while ((n = Ce()));
    return e;
  },
  Lc = function (e, t) {
    return ji(Dc(Hi(e), t));
  },
  Uo = new WeakMap(),
  Mc = function (e) {
    if (!(e.type !== "rule" || !e.parent || e.length < 1)) {
      for (var t = e.value, r = e.parent, n = e.column === r.column && e.line === r.line; r.type !== "rule"; )
        if (((r = r.parent), !r)) return;
      if (!(e.props.length === 1 && t.charCodeAt(0) !== 58 && !Uo.get(r)) && !n) {
        Uo.set(e, !0);
        for (var o = [], l = Lc(t, o), i = r.props, u = 0, s = 0; u < l.length; u++)
          for (var c = 0; c < i.length; c++, s++) e.props[s] = o[u] ? l[u].replace(/&\f/g, i[c]) : i[c] + " " + l[u];
      }
    }
  },
  Bc = function (e) {
    if (e.type === "decl") {
      var t = e.value;
      t.charCodeAt(0) === 108 && t.charCodeAt(2) === 98 && ((e.return = ""), (e.value = ""));
    }
  },
  $c =
    "emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason",
  Ic = function (e) {
    return e.type === "comm" && e.children.indexOf($c) > -1;
  },
  Zc = function (e) {
    return function (t, r, n) {
      if (!(t.type !== "rule" || e.compat)) {
        var o = t.value.match(/(:first|:nth|:nth-last)-child/g);
        if (o) {
          for (var l = !!t.parent, i = l ? t.parent.children : n, u = i.length - 1; u >= 0; u--) {
            var s = i[u];
            if (s.line < t.line) break;
            if (s.column < t.column) {
              if (Ic(s)) return;
              break;
            }
          }
          o.forEach(function (c) {
            console.error(
              'The pseudo class "' +
                c +
                '" is potentially unsafe when doing server-side rendering. Try changing it to "' +
                c.split("-child")[0] +
                '-of-type".'
            );
          });
        }
      }
    };
  },
  Ni = function (e) {
    return e.type.charCodeAt(1) === 105 && e.type.charCodeAt(0) === 64;
  },
  Hc = function (e, t) {
    for (var r = e - 1; r >= 0; r--) if (!Ni(t[r])) return !0;
    return !1;
  },
  Wo = function (e) {
    (e.type = ""), (e.value = ""), (e.return = ""), (e.children = ""), (e.props = "");
  },
  jc = function (e, t, r) {
    Ni(e) &&
      (e.parent
        ? (console.error(
            "`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles."
          ),
          Wo(e))
        : Hc(t, r) &&
          (console.error(
            "`@import` rules can't be after other rules. Please put your `@import` rules before your other rules."
          ),
          Wo(e)));
  };
function Pi(e, t) {
  switch (yc(e, t)) {
    case 5103:
      return U + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return U + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return U + e + Kr + e + pe + e + e;
    case 6828:
    case 4268:
      return U + e + pe + e + e;
    case 6165:
      return U + e + pe + "flex-" + e + e;
    case 5187:
      return U + e + W(e, /(\w+).+(:[^]+)/, U + "box-$1$2" + pe + "flex-$1$2") + e;
    case 5443:
      return U + e + pe + "flex-item-" + W(e, /flex-|-self/, "") + e;
    case 4675:
      return U + e + pe + "flex-line-pack" + W(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return U + e + pe + W(e, "shrink", "negative") + e;
    case 5292:
      return U + e + pe + W(e, "basis", "preferred-size") + e;
    case 6060:
      return U + "box-" + W(e, "-grow", "") + U + e + pe + W(e, "grow", "positive") + e;
    case 4554:
      return U + W(e, /([^-])(transform)/g, "$1" + U + "$2") + e;
    case 6187:
      return W(W(W(e, /(zoom-|grab)/, U + "$1"), /(image-set)/, U + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return W(e, /(image-set\([^]*)/, U + "$1$`$1");
    case 4968:
      return W(W(e, /(.+:)(flex-)?(.*)/, U + "box-pack:$3" + pe + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + U + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return W(e, /(.+)-inline(.+)/, U + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Ge(e) - 1 - t > 6)
        switch (ue(e, t + 1)) {
          case 109:
            if (ue(e, t + 4) !== 45) break;
          case 102:
            return W(e, /(.+:)(.+)-([^]+)/, "$1" + U + "$2-$3$1" + Kr + (ue(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~ra(e, "stretch") ? Pi(W(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (ue(e, t + 1) !== 115) break;
    case 6444:
      switch (ue(e, Ge(e) - 3 - (~ra(e, "!important") && 10))) {
        case 107:
          return W(e, ":", ":" + U) + e;
        case 101:
          return (
            W(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              "$1" + U + (ue(e, 14) === 45 ? "inline-" : "") + "box$3$1" + U + "$2$3$1" + pe + "$2box$3"
            ) + e
          );
      }
      break;
    case 5936:
      switch (ue(e, t + 11)) {
        case 114:
          return U + e + pe + W(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return U + e + pe + W(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return U + e + pe + W(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return U + e + pe + e + e;
  }
  return e;
}
var Nc = function (e, t, r, n) {
    if (e.length > -1 && !e.return)
      switch (e.type) {
        case Ba:
          e.return = Pi(e.value, e.length);
          break;
        case $i:
          return Zt([rr(e, { value: W(e.value, "@", "@" + U) })], n);
        case Ma:
          if (e.length)
            return vc(e.props, function (o) {
              switch (bc(o, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return Zt([rr(e, { props: [W(o, /:(read-\w+)/, ":" + Kr + "$1")] })], n);
                case "::placeholder":
                  return Zt(
                    [
                      rr(e, { props: [W(o, /:(plac\w+)/, ":" + U + "input-$1")] }),
                      rr(e, { props: [W(o, /:(plac\w+)/, ":" + Kr + "$1")] }),
                      rr(e, { props: [W(o, /:(plac\w+)/, pe + "input-$1")] }),
                    ],
                    n
                  );
              }
              return "";
            });
      }
  },
  Pc = [Nc],
  Vc = function (e) {
    var t = e.key;
    if (!t)
      throw new Error(`You have to configure \`key\` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.
If multiple caches share the same key they might "fight" for each other's style elements.`);
    if (t === "css") {
      var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(r, function (m) {
        var f = m.getAttribute("data-emotion");
        f.indexOf(" ") !== -1 && (document.head.appendChild(m), m.setAttribute("data-s", ""));
      });
    }
    var n = e.stylisPlugins || Pc;
    if (/[^a-z-]/.test(t))
      throw new Error(
        'Emotion key must only contain lower case alphabetical characters and - but "' + t + '" was passed'
      );
    var o = {},
      l,
      i = [];
    (l = e.container || document.head),
      Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + t + ' "]'), function (m) {
        for (var f = m.getAttribute("data-emotion").split(" "), v = 1; v < f.length; v++) o[f[v]] = !0;
        i.push(m);
      });
    var u,
      s = [Mc, Bc];
    s.push(
      Zc({
        get compat() {
          return d.compat;
        },
      }),
      jc
    );
    {
      var c,
        p = [
          Oc,
          function (m) {
            m.root || (m.return ? c.insert(m.return) : m.value && m.type !== La && c.insert(m.value + "{}"));
          },
        ],
        g = Rc(s.concat(n, p)),
        h = function (m) {
          return Zt(kc(m), g);
        };
      u = function (m, f, v, b) {
        (c = v),
          f.map !== void 0 &&
            (c = {
              insert: function (C) {
                v.insert(C + f.map);
              },
            }),
          h(m ? m + "{" + f.styles + "}" : f.styles),
          b && (d.inserted[f.name] = !0);
      };
    }
    var d = {
      key: t,
      sheet: new fc({
        key: t,
        container: l,
        nonce: e.nonce,
        speedy: e.speedy,
        prepend: e.prepend,
        insertionPoint: e.insertionPoint,
      }),
      nonce: e.nonce,
      inserted: o,
      registered: {},
      insert: u,
    };
    return d.sheet.hydrate(i), d;
  },
  zc = Vc;
Ri(Mi());
var qc = !0;
function Ia(e, t, r) {
  var n = "";
  return (
    r.split(" ").forEach(function (o) {
      e[o] !== void 0 ? t.push(e[o] + ";") : (n += o + " ");
    }),
    n
  );
}
var sn = function (e, t, r) {
    var n = e.key + "-" + t.name;
    (r === !1 || qc === !1) && e.registered[n] === void 0 && (e.registered[n] = t.styles);
  },
  un = function (e, t, r) {
    sn(e, t, r);
    var n = e.key + "-" + t.name;
    if (e.inserted[t.name] === void 0) {
      var o = t;
      do e.insert(t === o ? "." + n : "", o, e.sheet, !0), (o = o.next);
      while (o !== void 0);
    }
  };
function Uc(e) {
  for (var t = 0, r, n = 0, o = e.length; o >= 4; ++n, o -= 4)
    (r =
      (e.charCodeAt(n) & 255) |
      ((e.charCodeAt(++n) & 255) << 8) |
      ((e.charCodeAt(++n) & 255) << 16) |
      ((e.charCodeAt(++n) & 255) << 24)),
      (r = (r & 65535) * 1540483477 + (((r >>> 16) * 59797) << 16)),
      (r ^= r >>> 24),
      (t =
        ((r & 65535) * 1540483477 + (((r >>> 16) * 59797) << 16)) ^
        ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)));
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      (t ^= e.charCodeAt(n) & 255), (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16));
  }
  return (
    (t ^= t >>> 13),
    (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
    ((t ^ (t >>> 15)) >>> 0).toString(36)
  );
}
var Wc = Uc,
  Gc = {
    animationIterationCount: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  Yc = Gc,
  Go = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`,
  Kc =
    "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).",
  Jc = /[A-Z]|^ms/g,
  Vi = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  Za = function (e) {
    return e.charCodeAt(1) === 45;
  },
  Yo = function (e) {
    return e != null && typeof e != "boolean";
  },
  Tn = Bi(function (e) {
    return Za(e) ? e : e.replace(Jc, "-$&").toLowerCase();
  }),
  Jr = function (e, t) {
    switch (e) {
      case "animation":
      case "animationName":
        if (typeof t == "string")
          return t.replace(Vi, function (r, n, o) {
            return (Ye = { name: n, styles: o, next: Ye }), n;
          });
    }
    return Yc[e] !== 1 && !Za(e) && typeof t == "number" && t !== 0 ? t + "px" : t;
  };
(Ko = /(var|attr|counters?|url|element|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/),
  (Jo = ["normal", "none", "initial", "inherit", "unset"]),
  (Xo = Jr),
  (Qo = /^-ms-/),
  (el = /-(.)/g),
  (Dn = {}),
  (Jr = function (e, t) {
    if (
      e === "content" &&
      (typeof t != "string" ||
        (Jo.indexOf(t) === -1 &&
          !Ko.test(t) &&
          (t.charAt(0) !== t.charAt(t.length - 1) || (t.charAt(0) !== '"' && t.charAt(0) !== "'"))))
    )
      throw new Error(
        "You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + t + "\"'`"
      );
    var r = Xo(e, t);
    return (
      r !== "" &&
        !Za(e) &&
        e.indexOf("-") !== -1 &&
        Dn[e] === void 0 &&
        ((Dn[e] = !0),
        console.error(
          "Using kebab-case for css properties in objects is not supported. Did you mean " +
            e.replace(Qo, "ms-").replace(el, function (n, o) {
              return o.toUpperCase();
            }) +
            "?"
        )),
      r
    );
  });
var Ko,
  Jo,
  Xo,
  Qo,
  el,
  Dn,
  zi =
    "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function pr(e, t, r) {
  if (r == null) return "";
  if (r.__emotion_styles !== void 0) {
    if (r.toString() === "NO_COMPONENT_SELECTOR") throw new Error(zi);
    return r;
  }
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      if (r.anim === 1) return (Ye = { name: r.name, styles: r.styles, next: Ye }), r.name;
      if (r.styles !== void 0) {
        var n = r.next;
        if (n !== void 0) for (; n !== void 0; ) (Ye = { name: n.name, styles: n.styles, next: Ye }), (n = n.next);
        var o = r.styles + ";";
        return r.map !== void 0 && (o += r.map), o;
      }
      return Xc(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var l = Ye,
          i = r(e);
        return (Ye = l), pr(e, t, i);
      } else
        console.error(
          "Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`"
        );
      break;
    }
    case "string":
      var u = [],
        s = r.replace(Vi, function (p, g, h) {
          var d = "animation" + u.length;
          return (
            u.push("const " + d + " = keyframes`" + h.replace(/^@keyframes animation-\w+/, "") + "`"), "${" + d + "}"
          );
        });
      u.length &&
        console.error(
          "`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\nInstead of doing this:\n\n" +
            [].concat(u, ["`" + s + "`"]).join(`
`) +
            `

You should wrap it with \`css\` like this:

` +
            ("css`" + s + "`")
        );
      break;
  }
  if (t == null) return r;
  var c = t[r];
  return c !== void 0 ? c : r;
}
function Xc(e, t, r) {
  var n = "";
  if (Array.isArray(r)) for (var o = 0; o < r.length; o++) n += pr(e, t, r[o]) + ";";
  else
    for (var l in r) {
      var i = r[l];
      if (typeof i != "object")
        t != null && t[i] !== void 0 ? (n += l + "{" + t[i] + "}") : Yo(i) && (n += Tn(l) + ":" + Jr(l, i) + ";");
      else {
        if (l === "NO_COMPONENT_SELECTOR") throw new Error(zi);
        if (Array.isArray(i) && typeof i[0] == "string" && (t == null || t[i[0]] === void 0))
          for (var u = 0; u < i.length; u++) Yo(i[u]) && (n += Tn(l) + ":" + Jr(l, i[u]) + ";");
        else {
          var s = pr(e, t, i);
          switch (l) {
            case "animation":
            case "animationName": {
              n += Tn(l) + ":" + s + ";";
              break;
            }
            default:
              l === "undefined" && console.error(Kc), (n += l + "{" + s + "}");
          }
        }
      }
    }
  return n;
}
var tl = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
  qi;
qi = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g;
var Ye,
  jt = function (e, t, r) {
    if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0) return e[0];
    var n = !0,
      o = "";
    Ye = void 0;
    var l = e[0];
    l == null || l.raw === void 0
      ? ((n = !1), (o += pr(r, t, l)))
      : (l[0] === void 0 && console.error(Go), (o += l[0]));
    for (var i = 1; i < e.length; i++) (o += pr(r, t, e[i])), n && (l[i] === void 0 && console.error(Go), (o += l[i]));
    var u;
    (o = o.replace(qi, function (g) {
      return (u = g), "";
    })),
      (tl.lastIndex = 0);
    for (var s = "", c; (c = tl.exec(o)) !== null; ) s += "-" + c[1];
    var p = Wc(o) + s;
    return {
      name: p,
      styles: o,
      map: u,
      next: Ye,
      toString: function () {
        return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
      },
    };
  },
  Qc = {}.hasOwnProperty,
  Ha = A.createContext(typeof HTMLElement < "u" ? zc({ key: "css" }) : null);
Ha.displayName = "EmotionCacheContext";
Ha.Provider;
var cn = function (e) {
    return A.forwardRef(function (t, r) {
      var n = A.useContext(Ha);
      return e(t, n, r);
    });
  },
  gt = A.createContext({});
gt.displayName = "EmotionThemeContext";
var e1 = function () {
    return A.useContext(gt);
  },
  t1 = function (e, t) {
    if (typeof t == "function") {
      var r = t(e);
      if (r == null || typeof r != "object" || Array.isArray(r))
        throw new Error("[ThemeProvider] Please return an object from your theme function, i.e. theme={() => ({})}!");
      return r;
    }
    if (t == null || typeof t != "object" || Array.isArray(t))
      throw new Error("[ThemeProvider] Please make your theme prop a plain object");
    return Fi({}, e, t);
  },
  r1 = qo(function (e) {
    return qo(function (t) {
      return t1(e, t);
    });
  }),
  Ui = function (e) {
    var t = A.useContext(gt);
    return e.theme !== t && (t = r1(t)(e.theme)), A.createElement(gt.Provider, { value: t }, e.children);
  },
  rl = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__",
  nl = "__EMOTION_LABEL_PLEASE_DO_NOT_USE__",
  n1 = function (e) {
    var t = e.cache,
      r = e.serialized,
      n = e.isStringTag;
    return (
      sn(t, r, n),
      Ta(function () {
        return un(t, r, n);
      }),
      null
    );
  },
  a1 = cn(function (e, t, r) {
    var n = e.css;
    typeof n == "string" && t.registered[n] !== void 0 && (n = t.registered[n]);
    var o = e[rl],
      l = [n],
      i = "";
    typeof e.className == "string"
      ? (i = Ia(t.registered, l, e.className))
      : e.className != null && (i = e.className + " ");
    var u = jt(l, void 0, A.useContext(gt));
    if (u.name.indexOf("-") === -1) {
      var s = e[nl];
      s && (u = jt([u, "label:" + s + ";"]));
    }
    i += t.key + "-" + u.name;
    var c = {};
    for (var p in e) Qc.call(e, p) && p !== "css" && p !== rl && p !== nl && (c[p] = e[p]);
    return (
      (c.ref = r),
      (c.className = i),
      A.createElement(
        A.Fragment,
        null,
        A.createElement(n1, { cache: t, serialized: u, isStringTag: typeof o == "string" }),
        A.createElement(o, c)
      )
    );
  });
a1.displayName = "EmotionCssPropInternal";
Ri(Mi());
var o1 = {
    name: "@emotion/react",
    version: "11.10.6",
    main: "dist/emotion-react.cjs.js",
    module: "dist/emotion-react.esm.js",
    browser: { "./dist/emotion-react.esm.js": "./dist/emotion-react.browser.esm.js" },
    exports: {
      ".": {
        module: {
          worker: "./dist/emotion-react.worker.esm.js",
          browser: "./dist/emotion-react.browser.esm.js",
          default: "./dist/emotion-react.esm.js",
        },
        default: "./dist/emotion-react.cjs.js",
      },
      "./jsx-runtime": {
        module: {
          worker: "./jsx-runtime/dist/emotion-react-jsx-runtime.worker.esm.js",
          browser: "./jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js",
          default: "./jsx-runtime/dist/emotion-react-jsx-runtime.esm.js",
        },
        default: "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.js",
      },
      "./_isolated-hnrs": {
        module: {
          worker: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.worker.esm.js",
          browser: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.esm.js",
          default: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.esm.js",
        },
        default: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.js",
      },
      "./jsx-dev-runtime": {
        module: {
          worker: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.worker.esm.js",
          browser: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js",
          default: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.esm.js",
        },
        default: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.js",
      },
      "./package.json": "./package.json",
      "./types/css-prop": "./types/css-prop.d.ts",
      "./macro": "./macro.js",
    },
    types: "types/index.d.ts",
    files: [
      "src",
      "dist",
      "jsx-runtime",
      "jsx-dev-runtime",
      "_isolated-hnrs",
      "types/*.d.ts",
      "macro.js",
      "macro.d.ts",
      "macro.js.flow",
    ],
    sideEffects: !1,
    author: "Emotion Contributors",
    license: "MIT",
    scripts: { "test:typescript": "dtslint types" },
    dependencies: {
      "@babel/runtime": "^7.18.3",
      "@emotion/babel-plugin": "^11.10.6",
      "@emotion/cache": "^11.10.5",
      "@emotion/serialize": "^1.1.1",
      "@emotion/use-insertion-effect-with-fallbacks": "^1.0.0",
      "@emotion/utils": "^1.2.0",
      "@emotion/weak-memoize": "^0.3.0",
      "hoist-non-react-statics": "^3.3.1",
    },
    peerDependencies: { react: ">=16.8.0" },
    peerDependenciesMeta: { "@types/react": { optional: !0 } },
    devDependencies: {
      "@definitelytyped/dtslint": "0.0.112",
      "@emotion/css": "11.10.6",
      "@emotion/css-prettifier": "1.1.1",
      "@emotion/server": "11.10.0",
      "@emotion/styled": "11.10.6",
      "html-tag-names": "^1.1.2",
      react: "16.14.0",
      "svg-tag-names": "^1.1.1",
      typescript: "^4.5.5",
    },
    repository: "https://github.com/emotion-js/emotion/tree/main/packages/react",
    publishConfig: { access: "public" },
    "umd:main": "dist/emotion-react.umd.min.js",
    preconstruct: {
      entrypoints: ["./index.js", "./jsx-runtime.js", "./jsx-dev-runtime.js", "./_isolated-hnrs.js"],
      umdName: "emotionReact",
      exports: {
        envConditions: ["browser", "worker"],
        extra: { "./types/css-prop": "./types/css-prop.d.ts", "./macro": "./macro.js" },
      },
    },
  },
  al = !1,
  l1 = cn(function (e, t) {
    !al &&
      (e.className || e.css) &&
      (console.error("It looks like you're using the css prop on Global, did you mean to use the styles prop instead?"),
      (al = !0));
    var r = e.styles,
      n = jt([r], void 0, A.useContext(gt)),
      o = A.useRef();
    return (
      Po(
        function () {
          var l = t.key + "-global",
            i = new t.sheet.constructor({
              key: l,
              nonce: t.sheet.nonce,
              container: t.sheet.container,
              speedy: t.sheet.isSpeedy,
            }),
            u = !1,
            s = document.querySelector('style[data-emotion="' + l + " " + n.name + '"]');
          return (
            t.sheet.tags.length && (i.before = t.sheet.tags[0]),
            s !== null && ((u = !0), s.setAttribute("data-emotion", l), i.hydrate([s])),
            (o.current = [i, u]),
            function () {
              i.flush();
            }
          );
        },
        [t]
      ),
      Po(
        function () {
          var l = o.current,
            i = l[0],
            u = l[1];
          if (u) {
            l[1] = !1;
            return;
          }
          if ((n.next !== void 0 && un(t, n.next, !0), i.tags.length)) {
            var s = i.tags[i.tags.length - 1].nextElementSibling;
            (i.before = s), i.flush();
          }
          t.insert("", n, i, !1);
        },
        [t, n.name]
      ),
      null
    );
  });
l1.displayName = "EmotionGlobal";
function ja() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
  return jt(t);
}
var Gt = function () {
    var e = ja.apply(void 0, arguments),
      t = "animation-" + e.name;
    return {
      name: t,
      styles: "@keyframes " + t + "{" + e.styles + "}",
      anim: 1,
      toString: function () {
        return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
      },
    };
  },
  i1 = function e(t) {
    for (var r = t.length, n = 0, o = ""; n < r; n++) {
      var l = t[n];
      if (l != null) {
        var i = void 0;
        switch (typeof l) {
          case "boolean":
            break;
          case "object": {
            if (Array.isArray(l)) i = e(l);
            else {
              l.styles !== void 0 &&
                l.name !== void 0 &&
                console.error(
                  "You have passed styles created with `css` from `@emotion/react` package to the `cx`.\n`cx` is meant to compose class names (strings) so you should convert those styles to a class name by passing them to the `css` received from <ClassNames/> component."
                ),
                (i = "");
              for (var u in l) l[u] && u && (i && (i += " "), (i += u));
            }
            break;
          }
          default:
            i = l;
        }
        i && (o && (o += " "), (o += i));
      }
    }
    return o;
  };
function s1(e, t, r) {
  var n = [],
    o = Ia(e, n, r);
  return n.length < 2 ? r : o + t(n);
}
var u1 = function (e) {
    var t = e.cache,
      r = e.serializedArr;
    return (
      Ta(function () {
        for (var n = 0; n < r.length; n++) var o = un(t, r[n], !1);
      }),
      null
    );
  },
  c1 = cn(function (e, t) {
    var r = !1,
      n = [],
      o = function () {
        if (r) throw new Error("css can only be used during render");
        for (var s = arguments.length, c = new Array(s), p = 0; p < s; p++) c[p] = arguments[p];
        var g = jt(c, t.registered);
        return n.push(g), sn(t, g, !1), t.key + "-" + g.name;
      },
      l = function () {
        if (r) throw new Error("cx can only be used during render");
        for (var s = arguments.length, c = new Array(s), p = 0; p < s; p++) c[p] = arguments[p];
        return s1(t.registered, o, i1(c));
      },
      i = { css: o, cx: l, theme: A.useContext(gt) },
      u = e.children(i);
    return (r = !0), A.createElement(A.Fragment, null, A.createElement(u1, { cache: t, serializedArr: n }), u);
  });
c1.displayName = "EmotionClassNames";
(Ln = !0),
  (ol = typeof jest < "u" || typeof vi < "u"),
  Ln &&
    !ol &&
    ((Mn = typeof globalThis < "u" ? globalThis : Ln ? window : global),
    (Bn = "__EMOTION_REACT_" + o1.version.split(".")[0] + "__"),
    Mn[Bn] &&
      console.warn(
        "You are isLoading @emotion/react when it is already loaded. Running multiple instances may cause problems. This can happen if multiple versions are used, or if multiple builds of the same version are used."
      ),
    (Mn[Bn] = !0));
var Ln,
  ol,
  Mn,
  Bn,
  d1 = Da,
  p1 = function (e) {
    return e !== "theme";
  },
  ll = function (e) {
    return typeof e == "string" && e.charCodeAt(0) > 96 ? d1 : p1;
  },
  il = function (e, t, r) {
    var n;
    if (t) {
      var o = t.shouldForwardProp;
      n =
        e.__emotion_forwardProp && o
          ? function (l) {
              return e.__emotion_forwardProp(l) && o(l);
            }
          : o;
    }
    return typeof n != "function" && r && (n = e.__emotion_forwardProp), n;
  },
  sl = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`,
  f1 = function (e) {
    var t = e.cache,
      r = e.serialized,
      n = e.isStringTag;
    return (
      sn(t, r, n),
      Ta(function () {
        return un(t, r, n);
      }),
      null
    );
  },
  m1 = function e(t, r) {
    if (t === void 0)
      throw new Error(`You are trying to create a styled element with an undefined component.
You may have forgotten to import it.`);
    var n = t.__emotion_real === t,
      o = (n && t.__emotion_base) || t,
      l,
      i;
    r !== void 0 && ((l = r.label), (i = r.target));
    var u = il(t, r, n),
      s = u || ll(o),
      c = !s("as");
    return function () {
      var p = arguments,
        g = n && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
      if ((l !== void 0 && g.push("label:" + l + ";"), p[0] == null || p[0].raw === void 0)) g.push.apply(g, p);
      else {
        p[0][0] === void 0 && console.error(sl), g.push(p[0][0]);
        for (var h = p.length, d = 1; d < h; d++) p[0][d] === void 0 && console.error(sl), g.push(p[d], p[0][d]);
      }
      var m = cn(function (f, v, b) {
        var C = (c && f.as) || o,
          y = "",
          E = [],
          x = f;
        if (f.theme == null) {
          x = {};
          for (var w in f) x[w] = f[w];
          x.theme = A.useContext(gt);
        }
        typeof f.className == "string"
          ? (y = Ia(v.registered, E, f.className))
          : f.className != null && (y = f.className + " ");
        var k = jt(g.concat(E), v.registered, x);
        (y += v.key + "-" + k.name), i !== void 0 && (y += " " + i);
        var S = c && u === void 0 ? ll(C) : s,
          O = {};
        for (var R in f) (c && R === "as") || (S(R) && (O[R] = f[R]));
        return (
          (O.className = y),
          (O.ref = b),
          A.createElement(
            A.Fragment,
            null,
            A.createElement(f1, { cache: v, serialized: k, isStringTag: typeof C == "string" }),
            A.createElement(C, O)
          )
        );
      });
      return (
        (m.displayName =
          l !== void 0 ? l : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")"),
        (m.defaultProps = t.defaultProps),
        (m.__emotion_real = m),
        (m.__emotion_base = o),
        (m.__emotion_styles = g),
        (m.__emotion_forwardProp = u),
        Object.defineProperty(m, "toString", {
          value: function () {
            return i === void 0 ? "NO_COMPONENT_SELECTOR" : "." + i;
          },
        }),
        (m.withComponent = function (f, v) {
          return e(f, Fi({}, r, v, { shouldForwardProp: il(m, v, !0) })).apply(void 0, g);
        }),
        m
      );
    };
  },
  g1 = m1,
  h1 = [
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "marquee",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "u",
    "ul",
    "var",
    "video",
    "wbr",
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "tspan",
  ],
  aa = g1.bind();
h1.forEach(function (e) {
  aa[e] = aa(e);
});
var _ = aa,
  y1 = Ot(1)(({ typography: e }) => ({
    body: {
      fontFamily: e.fonts.base,
      fontSize: e.size.s3,
      margin: 0,
      WebkitFontSmoothing: "antialiased",
      MozOsxFontSmoothing: "grayscale",
      WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
      WebkitOverflowScrolling: "touch",
    },
    "*": { boxSizing: "border-box" },
    "h1, h2, h3, h4, h5, h6": { fontWeight: e.weight.regular, margin: 0, padding: 0 },
    "button, input, textarea, select": { fontFamily: "inherit", fontSize: "inherit", boxSizing: "border-box" },
    sub: { fontSize: "0.8em", bottom: "-0.2em" },
    sup: { fontSize: "0.8em", top: "-0.2em" },
    "b, strong": { fontWeight: e.weight.bold },
    hr: { border: "none", borderTop: "1px solid silver", clear: "both", marginBottom: "1.25rem" },
    code: {
      fontFamily: e.fonts.mono,
      WebkitFontSmoothing: "antialiased",
      MozOsxFontSmoothing: "grayscale",
      display: "inline-block",
      paddingLeft: 2,
      paddingRight: 2,
      verticalAlign: "baseline",
      color: "inherit",
    },
    pre: {
      fontFamily: e.fonts.mono,
      WebkitFontSmoothing: "antialiased",
      MozOsxFontSmoothing: "grayscale",
      lineHeight: "18px",
      padding: "11px 1rem",
      whiteSpace: "pre-wrap",
      color: "inherit",
      borderRadius: 3,
      margin: "1rem 0",
    },
  }));
Ot(1)(({ color: e, background: t, typography: r }) => {
  let n = y1({ typography: r });
  return {
    ...n,
    body: { ...n.body, color: e.defaultText, background: t.app, overflow: "hidden" },
    hr: { ...n.hr, borderTop: `1px solid ${e.border}` },
  };
});
var b1 = { rubber: "cubic-bezier(0.175, 0.885, 0.335, 1.05)" },
  v1 = Gt`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
`,
  Wi = Gt`
  0%, 100% { opacity: 1; }
  50% { opacity: .4; }
`,
  E1 = Gt`
  0% { transform: translateY(1px); }
  25% { transform: translateY(0px); }
  50% { transform: translateY(-3px); }
  100% { transform: translateY(1px); }
`,
  x1 = Gt`
  0%, 100% { transform:translate3d(0,0,0); }
  12.5%, 62.5% { transform:translate3d(-4px,0,0); }
  37.5%, 87.5% {  transform: translate3d(4px,0,0);  }
`,
  A1 = ja`
  animation: ${Wi} 1.5s ease-in-out infinite;
  color: transparent;
  cursor: progress;
`,
  w1 = ja`
  transition: all 150ms ease-out;
  transform: translate3d(0, 0, 0);

  &:hover {
    transform: translate3d(0, -2px, 0);
  }

  &:active {
    transform: translate3d(0, 0, 0);
  }
`,
  C1 = { rotate360: v1, glow: Wi, float: E1, jiggle: x1, inlineGlow: A1, hoverable: w1 },
  S1 = {
    BASE_FONT_FAMILY: "Menlo, monospace",
    BASE_FONT_SIZE: "11px",
    BASE_LINE_HEIGHT: 1.2,
    BASE_BACKGROUND_COLOR: "rgb(36, 36, 36)",
    BASE_COLOR: "rgb(213, 213, 213)",
    OBJECT_PREVIEW_ARRAY_MAX_PROPERTIES: 10,
    OBJECT_PREVIEW_OBJECT_MAX_PROPERTIES: 5,
    OBJECT_NAME_COLOR: "rgb(227, 110, 236)",
    OBJECT_VALUE_NULL_COLOR: "rgb(127, 127, 127)",
    OBJECT_VALUE_UNDEFINED_COLOR: "rgb(127, 127, 127)",
    OBJECT_VALUE_REGEXP_COLOR: "rgb(233, 63, 59)",
    OBJECT_VALUE_STRING_COLOR: "rgb(233, 63, 59)",
    OBJECT_VALUE_SYMBOL_COLOR: "rgb(233, 63, 59)",
    OBJECT_VALUE_NUMBER_COLOR: "hsl(252, 100%, 75%)",
    OBJECT_VALUE_BOOLEAN_COLOR: "hsl(252, 100%, 75%)",
    OBJECT_VALUE_FUNCTION_PREFIX_COLOR: "rgb(85, 106, 242)",
    HTML_TAG_COLOR: "rgb(93, 176, 215)",
    HTML_TAGNAME_COLOR: "rgb(93, 176, 215)",
    HTML_TAGNAME_TEXT_TRANSFORM: "lowercase",
    HTML_ATTRIBUTE_NAME_COLOR: "rgb(155, 187, 220)",
    HTML_ATTRIBUTE_VALUE_COLOR: "rgb(242, 151, 102)",
    HTML_COMMENT_COLOR: "rgb(137, 137, 137)",
    HTML_DOCTYPE_COLOR: "rgb(192, 192, 192)",
    ARROW_COLOR: "rgb(145, 145, 145)",
    ARROW_MARGIN_RIGHT: 3,
    ARROW_FONT_SIZE: 12,
    ARROW_ANIMATION_DURATION: "0",
    TREENODE_FONT_FAMILY: "Menlo, monospace",
    TREENODE_FONT_SIZE: "11px",
    TREENODE_LINE_HEIGHT: 1.2,
    TREENODE_PADDING_LEFT: 12,
    TABLE_BORDER_COLOR: "rgb(85, 85, 85)",
    TABLE_TH_BACKGROUND_COLOR: "rgb(44, 44, 44)",
    TABLE_TH_HOVER_COLOR: "rgb(48, 48, 48)",
    TABLE_SORT_ICON_COLOR: "black",
    TABLE_DATA_BACKGROUND_IMAGE:
      "linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0) 50%, rgba(51, 139, 255, 0.0980392) 50%, rgba(51, 139, 255, 0.0980392))",
    TABLE_DATA_BACKGROUND_SIZE: "128px 32px",
  },
  k1 = {
    BASE_FONT_FAMILY: "Menlo, monospace",
    BASE_FONT_SIZE: "11px",
    BASE_LINE_HEIGHT: 1.2,
    BASE_BACKGROUND_COLOR: "white",
    BASE_COLOR: "black",
    OBJECT_PREVIEW_ARRAY_MAX_PROPERTIES: 10,
    OBJECT_PREVIEW_OBJECT_MAX_PROPERTIES: 5,
    OBJECT_NAME_COLOR: "rgb(136, 19, 145)",
    OBJECT_VALUE_NULL_COLOR: "rgb(128, 128, 128)",
    OBJECT_VALUE_UNDEFINED_COLOR: "rgb(128, 128, 128)",
    OBJECT_VALUE_REGEXP_COLOR: "rgb(196, 26, 22)",
    OBJECT_VALUE_STRING_COLOR: "rgb(196, 26, 22)",
    OBJECT_VALUE_SYMBOL_COLOR: "rgb(196, 26, 22)",
    OBJECT_VALUE_NUMBER_COLOR: "rgb(28, 0, 207)",
    OBJECT_VALUE_BOOLEAN_COLOR: "rgb(28, 0, 207)",
    OBJECT_VALUE_FUNCTION_PREFIX_COLOR: "rgb(13, 34, 170)",
    HTML_TAG_COLOR: "rgb(168, 148, 166)",
    HTML_TAGNAME_COLOR: "rgb(136, 18, 128)",
    HTML_TAGNAME_TEXT_TRANSFORM: "lowercase",
    HTML_ATTRIBUTE_NAME_COLOR: "rgb(153, 69, 0)",
    HTML_ATTRIBUTE_VALUE_COLOR: "rgb(26, 26, 166)",
    HTML_COMMENT_COLOR: "rgb(35, 110, 37)",
    HTML_DOCTYPE_COLOR: "rgb(192, 192, 192)",
    ARROW_COLOR: "#6e6e6e",
    ARROW_MARGIN_RIGHT: 3,
    ARROW_FONT_SIZE: 12,
    ARROW_ANIMATION_DURATION: "0",
    TREENODE_FONT_FAMILY: "Menlo, monospace",
    TREENODE_FONT_SIZE: "11px",
    TREENODE_LINE_HEIGHT: 1.2,
    TREENODE_PADDING_LEFT: 12,
    TABLE_BORDER_COLOR: "#aaa",
    TABLE_TH_BACKGROUND_COLOR: "#eee",
    TABLE_TH_HOVER_COLOR: "hsla(0, 0%, 90%, 1)",
    TABLE_SORT_ICON_COLOR: "#6e6e6e",
    TABLE_DATA_BACKGROUND_IMAGE:
      "linear-gradient(to bottom, white, white 50%, rgb(234, 243, 255) 50%, rgb(234, 243, 255))",
    TABLE_DATA_BACKGROUND_SIZE: "128px 32px",
  },
  _1 = (e) => Object.entries(e).reduce((t, [r, n]) => ({ ...t, [r]: tc(n) }), {}),
  O1 = ({ colors: e, mono: t }) => {
    let r = _1(e);
    return {
      token: {
        fontFamily: t,
        WebkitFontSmoothing: "antialiased",
        "&.tag": r.red3,
        "&.comment": { ...r.green1, fontStyle: "italic" },
        "&.prolog": { ...r.green1, fontStyle: "italic" },
        "&.doctype": { ...r.green1, fontStyle: "italic" },
        "&.cdata": { ...r.green1, fontStyle: "italic" },
        "&.string": r.red1,
        "&.url": r.cyan1,
        "&.symbol": r.cyan1,
        "&.number": r.cyan1,
        "&.boolean": r.cyan1,
        "&.variable": r.cyan1,
        "&.constant": r.cyan1,
        "&.inserted": r.cyan1,
        "&.atrule": r.blue1,
        "&.keyword": r.blue1,
        "&.attr-value": r.blue1,
        "&.punctuation": r.gray1,
        "&.operator": r.gray1,
        "&.function": r.gray1,
        "&.deleted": r.red2,
        "&.important": { fontWeight: "bold" },
        "&.bold": { fontWeight: "bold" },
        "&.italic": { fontStyle: "italic" },
        "&.class-name": r.cyan2,
        "&.selector": r.red3,
        "&.attr-name": r.red4,
        "&.property": r.red4,
        "&.regex": r.red4,
        "&.entity": r.red4,
        "&.directive.tag .tag": { background: "#ffff00", ...r.gray1 },
      },
      "language-json .token.boolean": r.blue1,
      "language-json .token.number": r.blue1,
      "language-json .token.property": r.cyan2,
      namespace: { opacity: 0.7 },
    };
  },
  R1 = {
    green1: "#008000",
    red1: "#A31515",
    red2: "#9a050f",
    red3: "#800000",
    red4: "#ff0000",
    gray1: "#393A34",
    cyan1: "#36acaa",
    cyan2: "#2B91AF",
    blue1: "#0000ff",
    blue2: "#00009f",
  },
  F1 = {
    green1: "#7C7C7C",
    red1: "#92C379",
    red2: "#9a050f",
    red3: "#A8FF60",
    red4: "#96CBFE",
    gray1: "#EDEDED",
    cyan1: "#C6C5FE",
    cyan2: "#FFFFB6",
    blue1: "#B474DD",
    blue2: "#00009f",
  },
  T1 = (e) => ({
    primary: e.colorPrimary,
    secondary: e.colorSecondary,
    tertiary: K.tertiary,
    ancillary: K.ancillary,
    orange: K.orange,
    gold: K.gold,
    green: K.green,
    seafoam: K.seafoam,
    purple: K.purple,
    ultraviolet: K.ultraviolet,
    lightest: K.lightest,
    lighter: K.lighter,
    light: K.light,
    mediumlight: K.mediumlight,
    medium: K.medium,
    mediumdark: K.mediumdark,
    dark: K.dark,
    darker: K.darker,
    darkest: K.darkest,
    border: K.border,
    positive: K.positive,
    negative: K.negative,
    warning: K.warning,
    critical: K.critical,
    defaultText: e.textColor || K.darkest,
    inverseText: e.textInverseColor || K.lightest,
    positiveText: K.positiveText,
    negativeText: K.negativeText,
    warningText: K.warningText,
  }),
  oa = (e = ta[ec()]) => {
    let {
      base: t,
      colorPrimary: r,
      colorSecondary: n,
      appBg: o,
      appContentBg: l,
      appBorderColor: i,
      appBorderRadius: u,
      fontBase: s,
      fontCode: c,
      textColor: p,
      textInverseColor: g,
      barTextColor: h,
      barSelectedColor: d,
      barBg: m,
      buttonBg: f,
      buttonBorder: v,
      booleanBg: b,
      booleanSelectedBg: C,
      inputBg: y,
      inputBorder: E,
      inputTextColor: x,
      inputBorderRadius: w,
      brandTitle: k,
      brandUrl: S,
      brandImage: O,
      brandTarget: R,
      gridCellSize: F,
      ...L
    } = e;
    return {
      ...L,
      base: t,
      color: T1(e),
      background: {
        app: o,
        bar: m,
        content: l,
        gridCellSize: F || Lt.gridCellSize,
        hoverable: Lt.hoverable,
        positive: Lt.positive,
        negative: Lt.negative,
        warning: Lt.warning,
        critical: Lt.critical,
      },
      typography: { fonts: { base: s, mono: c }, weight: Tr.weight, size: Tr.size },
      animation: C1,
      easing: b1,
      input: { background: y, border: E, borderRadius: w, color: x },
      button: { background: f || y, border: v || E },
      boolean: { background: b || E, selectedBackground: C || y },
      layoutMargin: 10,
      appBorderColor: i,
      appBorderRadius: u,
      barTextColor: h,
      barSelectedColor: d || n,
      barBg: m,
      brand: { title: k, url: S, image: O || (k ? null : void 0), target: R },
      code: O1({ colors: t === "light" ? R1 : F1, mono: c }),
      addonActionsTheme: {
        ...(t === "light" ? k1 : S1),
        BASE_FONT_FAMILY: c,
        BASE_FONT_SIZE: Tr.size.s2 - 1,
        BASE_LINE_HEIGHT: "18px",
        BASE_BACKGROUND_COLOR: "transparent",
        BASE_COLOR: p,
        ARROW_COLOR: Q0(0.2, i),
        ARROW_MARGIN_RIGHT: 4,
        ARROW_FONT_SIZE: 8,
        TREENODE_FONT_FAMILY: c,
        TREENODE_FONT_SIZE: Tr.size.s2 - 1,
        TREENODE_LINE_HEIGHT: "18px",
        TREENODE_PADDING_LEFT: 12,
      },
    };
  },
  D1 = (e) => Object.keys(e).length === 0,
  $n = (e) => e != null && typeof e == "object",
  L1 = (e, ...t) => Object.prototype.hasOwnProperty.call(e, ...t),
  M1 = () => Object.create(null),
  Gi = (e, t) =>
    e === t || !$n(e) || !$n(t)
      ? {}
      : Object.keys(e).reduce((r, n) => {
          if (L1(t, n)) {
            let o = Gi(e[n], t[n]);
            return ($n(o) && D1(o)) || (r[n] = o), r;
          }
          return (r[n] = void 0), r;
        }, M1()),
  B1 = Gi;
function $1(e) {
  for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
  var n = Array.from(typeof e == "string" ? [e] : e);
  n[n.length - 1] = n[n.length - 1].replace(/\r?\n([\t ]*)$/, "");
  var o = n.reduce(function (u, s) {
    var c = s.match(/\n([\t ]+|(?!\s).)/g);
    return c
      ? u.concat(
          c.map(function (p) {
            var g, h;
            return (h = (g = p.match(/[\t ]/g)) === null || g === void 0 ? void 0 : g.length) !== null && h !== void 0
              ? h
              : 0;
          })
        )
      : u;
  }, []);
  if (o.length) {
    var l = new RegExp(
      `
[	 ]{` +
        Math.min.apply(Math, o) +
        "}",
      "g"
    );
    n = n.map(function (u) {
      return u.replace(
        l,
        `
`
      );
    });
  }
  n[0] = n[0].replace(/^\r?\n/, "");
  var i = n[0];
  return (
    t.forEach(function (u, s) {
      var c = i.match(/(?:^|\n)( *)$/),
        p = c ? c[1] : "",
        g = u;
      typeof u == "string" &&
        u.includes(`
`) &&
        (g = String(u)
          .split(
            `
`
          )
          .map(function (h, d) {
            return d === 0 ? h : "" + p + h;
          }).join(`
`)),
        (i += g + n[s + 1]);
    }),
    i
  );
}
var I1 = (e) => {
    if (!e) return oa(No);
    let t = B1(No, e);
    return (
      Object.keys(t).length &&
        oc.warn(
          $1`
          Your theme is missing properties, you should update your theme!

          theme-data missing:
        `,
          t
        ),
      oa(e)
    );
  },
  la =
    "/* emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason */",
  Ze = (e) => `control-${e.replace(/\s+/g, "-")}`,
  dn = (e) => `set-${e.replace(/\s+/g, "-")}`;
function ye() {
  return (
    (ye = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    ye.apply(this, arguments)
  );
}
function Na(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    o,
    l;
  for (l = 0; l < n.length; l++) (o = n[l]), !(t.indexOf(o) >= 0) && (r[o] = e[o]);
  return r;
}
var Z1 = Object.create,
  Yi = Object.defineProperty,
  H1 = Object.getOwnPropertyDescriptor,
  Ki = Object.getOwnPropertyNames,
  j1 = Object.getPrototypeOf,
  N1 = Object.prototype.hasOwnProperty,
  N = (e, t) =>
    function () {
      return t || (0, e[Ki(e)[0]])((t = { exports: {} }).exports, t), t.exports;
    },
  P1 = (e, t, r, n) => {
    if ((t && typeof t == "object") || typeof t == "function")
      for (let o of Ki(t))
        !N1.call(e, o) && o !== r && Yi(e, o, { get: () => t[o], enumerable: !(n = H1(t, o)) || n.enumerable });
    return e;
  },
  ke = (e, t, r) => (
    (r = e != null ? Z1(j1(e)) : {}),
    P1(t || !e || !e.__esModule ? Yi(r, "default", { value: e, enumerable: !0 }) : r, e)
  ),
  V1 = N({
    "../../node_modules/refractor/lang/markdown.js"(e, t) {
      (t.exports = r), (r.displayName = "markdown"), (r.aliases = ["md"]);
      function r(n) {
        (function (o) {
          var l = /(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;
          function i(m) {
            return (
              (m = m.replace(/<inner>/g, function () {
                return l;
              })),
              RegExp(/((?:^|[^\\])(?:\\{2})*)/.source + "(?:" + m + ")")
            );
          }
          var u = /(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/.source,
            s = /\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(/__/g, function () {
              return u;
            }),
            c = /\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/.source;
          (o.languages.markdown = o.languages.extend("markup", {})),
            o.languages.insertBefore("markdown", "prolog", {
              "front-matter-block": {
                pattern: /(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,
                lookbehind: !0,
                greedy: !0,
                inside: {
                  punctuation: /^---|---$/,
                  "front-matter": {
                    pattern: /\S+(?:\s+\S+)*/,
                    alias: ["yaml", "language-yaml"],
                    inside: o.languages.yaml,
                  },
                },
              },
              blockquote: { pattern: /^>(?:[\t ]*>)*/m, alias: "punctuation" },
              table: {
                pattern: RegExp("^" + s + c + "(?:" + s + ")*", "m"),
                inside: {
                  "table-data-rows": {
                    pattern: RegExp("^(" + s + c + ")(?:" + s + ")*$"),
                    lookbehind: !0,
                    inside: { "table-data": { pattern: RegExp(u), inside: o.languages.markdown }, punctuation: /\|/ },
                  },
                  "table-line": {
                    pattern: RegExp("^(" + s + ")" + c + "$"),
                    lookbehind: !0,
                    inside: { punctuation: /\||:?-{3,}:?/ },
                  },
                  "table-header-row": {
                    pattern: RegExp("^" + s + "$"),
                    inside: {
                      "table-header": { pattern: RegExp(u), alias: "important", inside: o.languages.markdown },
                      punctuation: /\|/,
                    },
                  },
                },
              },
              code: [
                {
                  pattern: /((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,
                  lookbehind: !0,
                  alias: "keyword",
                },
                {
                  pattern: /^```[\s\S]*?^```$/m,
                  greedy: !0,
                  inside: {
                    "code-block": { pattern: /^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m, lookbehind: !0 },
                    "code-language": { pattern: /^(```).+/, lookbehind: !0 },
                    punctuation: /```/,
                  },
                },
              ],
              title: [
                {
                  pattern: /\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,
                  alias: "important",
                  inside: { punctuation: /==+$|--+$/ },
                },
                { pattern: /(^\s*)#.+/m, lookbehind: !0, alias: "important", inside: { punctuation: /^#+|#+$/ } },
              ],
              hr: { pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m, lookbehind: !0, alias: "punctuation" },
              list: { pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m, lookbehind: !0, alias: "punctuation" },
              "url-reference": {
                pattern:
                  /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
                inside: {
                  variable: { pattern: /^(!?\[)[^\]]+/, lookbehind: !0 },
                  string: /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
                  punctuation: /^[\[\]!:]|[<>]/,
                },
                alias: "url",
              },
              bold: {
                pattern: i(
                  /\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/
                    .source
                ),
                lookbehind: !0,
                greedy: !0,
                inside: {
                  content: { pattern: /(^..)[\s\S]+(?=..$)/, lookbehind: !0, inside: {} },
                  punctuation: /\*\*|__/,
                },
              },
              italic: {
                pattern: i(
                  /\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/
                    .source
                ),
                lookbehind: !0,
                greedy: !0,
                inside: { content: { pattern: /(^.)[\s\S]+(?=.$)/, lookbehind: !0, inside: {} }, punctuation: /[*_]/ },
              },
              strike: {
                pattern: i(/(~~?)(?:(?!~)<inner>)+\2/.source),
                lookbehind: !0,
                greedy: !0,
                inside: {
                  content: { pattern: /(^~~?)[\s\S]+(?=\1$)/, lookbehind: !0, inside: {} },
                  punctuation: /~~?/,
                },
              },
              "code-snippet": {
                pattern: /(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,
                lookbehind: !0,
                greedy: !0,
                alias: ["code", "keyword"],
              },
              url: {
                pattern: i(
                  /!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/
                    .source
                ),
                lookbehind: !0,
                greedy: !0,
                inside: {
                  operator: /^!/,
                  content: { pattern: /(^\[)[^\]]+(?=\])/, lookbehind: !0, inside: {} },
                  variable: { pattern: /(^\][ \t]?\[)[^\]]+(?=\]$)/, lookbehind: !0 },
                  url: { pattern: /(^\]\()[^\s)]+/, lookbehind: !0 },
                  string: { pattern: /(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/, lookbehind: !0 },
                },
              },
            }),
            ["url", "bold", "italic", "strike"].forEach(function (m) {
              ["url", "bold", "italic", "strike", "code-snippet"].forEach(function (f) {
                m !== f && (o.languages.markdown[m].inside.content.inside[f] = o.languages.markdown[f]);
              });
            }),
            o.hooks.add("after-tokenize", function (m) {
              if (m.language !== "markdown" && m.language !== "md") return;
              function f(v) {
                if (!(!v || typeof v == "string"))
                  for (var b = 0, C = v.length; b < C; b++) {
                    var y = v[b];
                    if (y.type !== "code") {
                      f(y.content);
                      continue;
                    }
                    var E = y.content[1],
                      x = y.content[3];
                    if (
                      E &&
                      x &&
                      E.type === "code-language" &&
                      x.type === "code-block" &&
                      typeof E.content == "string"
                    ) {
                      var w = E.content.replace(/\b#/g, "sharp").replace(/\b\+\+/g, "pp");
                      w = (/[a-z][\w-]*/i.exec(w) || [""])[0].toLowerCase();
                      var k = "language-" + w;
                      x.alias
                        ? typeof x.alias == "string"
                          ? (x.alias = [x.alias, k])
                          : x.alias.push(k)
                        : (x.alias = [k]);
                    }
                  }
              }
              f(m.tokens);
            }),
            o.hooks.add("wrap", function (m) {
              if (m.type === "code-block") {
                for (var f = "", v = 0, b = m.classes.length; v < b; v++) {
                  var C = m.classes[v],
                    y = /language-(.+)/.exec(C);
                  if (y) {
                    f = y[1];
                    break;
                  }
                }
                var E = o.languages[f];
                if (E) m.content = o.highlight(d(m.content.value), E, f);
                else if (f && f !== "none" && o.plugins.autoloader) {
                  var x = "md-" + new Date().valueOf() + "-" + Math.floor(Math.random() * 1e16);
                  (m.attributes.id = x),
                    o.plugins.autoloader.loadLanguages(f, function () {
                      var w = document.getElementById(x);
                      w && (w.innerHTML = o.highlight(w.textContent, o.languages[f], f));
                    });
                }
              }
            });
          var p = RegExp(o.languages.markup.tag.pattern.source, "gi"),
            g = { amp: "&", lt: "<", gt: ">", quot: '"' },
            h = String.fromCodePoint || String.fromCharCode;
          function d(m) {
            var f = m.replace(p, "");
            return (
              (f = f.replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi, function (v, b) {
                if (((b = b.toLowerCase()), b[0] === "#")) {
                  var C;
                  return b[1] === "x" ? (C = parseInt(b.slice(2), 16)) : (C = Number(b.slice(1))), h(C);
                } else {
                  var y = g[b];
                  return y || v;
                }
              })),
              f
            );
          }
          o.languages.md = o.languages.markdown;
        })(n);
      }
    },
  }),
  z1 = N({
    "../../node_modules/refractor/lang/yaml.js"(e, t) {
      (t.exports = r), (r.displayName = "yaml"), (r.aliases = ["yml"]);
      function r(n) {
        (function (o) {
          var l = /[*&][^\s[\]{},]+/,
            i = /!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,
            u = "(?:" + i.source + "(?:[ 	]+" + l.source + ")?|" + l.source + "(?:[ 	]+" + i.source + ")?)",
            s =
              /(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(
                /<PLAIN>/g,
                function () {
                  return /[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source;
                }
              ),
            c = /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;
          function p(g, h) {
            h = (h || "").replace(/m/g, "") + "m";
            var d = /([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source
              .replace(/<<prop>>/g, function () {
                return u;
              })
              .replace(/<<value>>/g, function () {
                return g;
              });
            return RegExp(d, h);
          }
          (o.languages.yaml = {
            scalar: {
              pattern: RegExp(
                /([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(
                  /<<prop>>/g,
                  function () {
                    return u;
                  }
                )
              ),
              lookbehind: !0,
              alias: "string",
            },
            comment: /#.*/,
            key: {
              pattern: RegExp(
                /((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source
                  .replace(/<<prop>>/g, function () {
                    return u;
                  })
                  .replace(/<<key>>/g, function () {
                    return "(?:" + s + "|" + c + ")";
                  })
              ),
              lookbehind: !0,
              greedy: !0,
              alias: "atrule",
            },
            directive: { pattern: /(^[ \t]*)%.+/m, lookbehind: !0, alias: "important" },
            datetime: {
              pattern: p(
                /\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/
                  .source
              ),
              lookbehind: !0,
              alias: "number",
            },
            boolean: { pattern: p(/false|true/.source, "i"), lookbehind: !0, alias: "important" },
            null: { pattern: p(/null|~/.source, "i"), lookbehind: !0, alias: "important" },
            string: { pattern: p(c), lookbehind: !0, greedy: !0 },
            number: {
              pattern: p(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source, "i"),
              lookbehind: !0,
            },
            tag: i,
            important: l,
            punctuation: /---|[:[\]{}\-,|>?]|\.\.\./,
          }),
            (o.languages.yml = o.languages.yaml);
        })(n);
      }
    },
  }),
  Ji = N({
    "../../node_modules/refractor/lang/typescript.js"(e, t) {
      (t.exports = r), (r.displayName = "typescript"), (r.aliases = ["ts"]);
      function r(n) {
        (function (o) {
          (o.languages.typescript = o.languages.extend("javascript", {
            "class-name": {
              pattern:
                /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
              lookbehind: !0,
              greedy: !0,
              inside: null,
            },
            builtin: /\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/,
          })),
            o.languages.typescript.keyword.push(
              /\b(?:abstract|declare|is|keyof|readonly|require)\b/,
              /\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,
              /\btype\b(?=\s*(?:[\{*]|$))/
            ),
            delete o.languages.typescript.parameter,
            delete o.languages.typescript["literal-property"];
          var l = o.languages.extend("typescript", {});
          delete l["class-name"],
            (o.languages.typescript["class-name"].inside = l),
            o.languages.insertBefore("typescript", "function", {
              decorator: {
                pattern: /@[$\w\xA0-\uFFFF]+/,
                inside: { at: { pattern: /^@/, alias: "operator" }, function: /^[\s\S]+/ },
              },
              "generic-function": {
                pattern:
                  /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,
                greedy: !0,
                inside: {
                  function: /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,
                  generic: { pattern: /<[\s\S]+/, alias: "class-name", inside: l },
                },
              },
            }),
            (o.languages.ts = o.languages.typescript);
        })(n);
      }
    },
  }),
  Xi = N({
    "../../node_modules/refractor/lang/jsx.js"(e, t) {
      (t.exports = r), (r.displayName = "jsx"), (r.aliases = []);
      function r(n) {
        (function (o) {
          var l = o.util.clone(o.languages.javascript),
            i = /(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,
            u = /(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,
            s = /(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;
          function c(h, d) {
            return (
              (h = h
                .replace(/<S>/g, function () {
                  return i;
                })
                .replace(/<BRACES>/g, function () {
                  return u;
                })
                .replace(/<SPREAD>/g, function () {
                  return s;
                })),
              RegExp(h, d)
            );
          }
          (s = c(s).source),
            (o.languages.jsx = o.languages.extend("markup", l)),
            (o.languages.jsx.tag.pattern = c(
              /<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/
                .source
            )),
            (o.languages.jsx.tag.inside.tag.pattern = /^<\/?[^\s>\/]*/),
            (o.languages.jsx.tag.inside["attr-value"].pattern =
              /=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/),
            (o.languages.jsx.tag.inside.tag.inside["class-name"] = /^[A-Z]\w*(?:\.[A-Z]\w*)*$/),
            (o.languages.jsx.tag.inside.comment = l.comment),
            o.languages.insertBefore(
              "inside",
              "attr-name",
              { spread: { pattern: c(/<SPREAD>/.source), inside: o.languages.jsx } },
              o.languages.jsx.tag
            ),
            o.languages.insertBefore(
              "inside",
              "special-attr",
              {
                script: {
                  pattern: c(/=<BRACES>/.source),
                  alias: "language-javascript",
                  inside: {
                    "script-punctuation": { pattern: /^=(?=\{)/, alias: "punctuation" },
                    rest: o.languages.jsx,
                  },
                },
              },
              o.languages.jsx.tag
            );
          var p = function (h) {
              return h
                ? typeof h == "string"
                  ? h
                  : typeof h.content == "string"
                  ? h.content
                  : h.content.map(p).join("")
                : "";
            },
            g = function (h) {
              for (var d = [], m = 0; m < h.length; m++) {
                var f = h[m],
                  v = !1;
                if (
                  (typeof f != "string" &&
                    (f.type === "tag" && f.content[0] && f.content[0].type === "tag"
                      ? f.content[0].content[0].content === "</"
                        ? d.length > 0 && d[d.length - 1].tagName === p(f.content[0].content[1]) && d.pop()
                        : f.content[f.content.length - 1].content === "/>" ||
                          d.push({ tagName: p(f.content[0].content[1]), openedBraces: 0 })
                      : d.length > 0 && f.type === "punctuation" && f.content === "{"
                      ? d[d.length - 1].openedBraces++
                      : d.length > 0 &&
                        d[d.length - 1].openedBraces > 0 &&
                        f.type === "punctuation" &&
                        f.content === "}"
                      ? d[d.length - 1].openedBraces--
                      : (v = !0)),
                  (v || typeof f == "string") && d.length > 0 && d[d.length - 1].openedBraces === 0)
                ) {
                  var b = p(f);
                  m < h.length - 1 &&
                    (typeof h[m + 1] == "string" || h[m + 1].type === "plain-text") &&
                    ((b += p(h[m + 1])), h.splice(m + 1, 1)),
                    m > 0 &&
                      (typeof h[m - 1] == "string" || h[m - 1].type === "plain-text") &&
                      ((b = p(h[m - 1]) + b), h.splice(m - 1, 1), m--),
                    (h[m] = new o.Token("plain-text", b, null, b));
                }
                f.content && typeof f.content != "string" && g(f.content);
              }
            };
          o.hooks.add("after-tokenize", function (h) {
            (h.language !== "jsx" && h.language !== "tsx") || g(h.tokens);
          });
        })(n);
      }
    },
  }),
  q1 = N({
    "../../node_modules/refractor/lang/tsx.js"(e, t) {
      var r = Xi(),
        n = Ji();
      (t.exports = o), (o.displayName = "tsx"), (o.aliases = []);
      function o(l) {
        l.register(r),
          l.register(n),
          (function (i) {
            var u = i.util.clone(i.languages.typescript);
            (i.languages.tsx = i.languages.extend("jsx", u)),
              delete i.languages.tsx.parameter,
              delete i.languages.tsx["literal-property"];
            var s = i.languages.tsx.tag;
            (s.pattern = RegExp(/(^|[^\w$]|(?=<\/))/.source + "(?:" + s.pattern.source + ")", s.pattern.flags)),
              (s.lookbehind = !0);
          })(l);
      }
    },
  }),
  U1 = N({
    "../../node_modules/refractor/lang/clike.js"(e, t) {
      (t.exports = r), (r.displayName = "clike"), (r.aliases = []);
      function r(n) {
        n.languages.clike = {
          comment: [
            { pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: !0, greedy: !0 },
            { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 },
          ],
          string: { pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: !0 },
          "class-name": {
            pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
            lookbehind: !0,
            inside: { punctuation: /[.\\]/ },
          },
          keyword:
            /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
          boolean: /\b(?:false|true)\b/,
          function: /\b\w+(?=\()/,
          number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
          operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
          punctuation: /[{}[\];(),.:]/,
        };
      }
    },
  }),
  W1 = N({
    "../../node_modules/refractor/lang/javascript.js"(e, t) {
      (t.exports = r), (r.displayName = "javascript"), (r.aliases = ["js"]);
      function r(n) {
        (n.languages.javascript = n.languages.extend("clike", {
          "class-name": [
            n.languages.clike["class-name"],
            {
              pattern:
                /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
              lookbehind: !0,
            },
          ],
          keyword: [
            { pattern: /((?:^|\})\s*)catch\b/, lookbehind: !0 },
            {
              pattern:
                /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
              lookbehind: !0,
            },
          ],
          function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
          number: {
            pattern: RegExp(
              /(^|[^\w$])/.source +
                "(?:" +
                (/NaN|Infinity/.source +
                  "|" +
                  /0[bB][01]+(?:_[01]+)*n?/.source +
                  "|" +
                  /0[oO][0-7]+(?:_[0-7]+)*n?/.source +
                  "|" +
                  /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source +
                  "|" +
                  /\d+(?:_\d+)*n/.source +
                  "|" +
                  /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source) +
                ")" +
                /(?![\w$])/.source
            ),
            lookbehind: !0,
          },
          operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/,
        })),
          (n.languages.javascript["class-name"][0].pattern =
            /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/),
          n.languages.insertBefore("javascript", "keyword", {
            regex: {
              pattern:
                /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
              lookbehind: !0,
              greedy: !0,
              inside: {
                "regex-source": {
                  pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
                  lookbehind: !0,
                  alias: "language-regex",
                  inside: n.languages.regex,
                },
                "regex-delimiter": /^\/|\/$/,
                "regex-flags": /^[a-z]+$/,
              },
            },
            "function-variable": {
              pattern:
                /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
              alias: "function",
            },
            parameter: [
              {
                pattern:
                  /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
                lookbehind: !0,
                inside: n.languages.javascript,
              },
              {
                pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
                lookbehind: !0,
                inside: n.languages.javascript,
              },
              {
                pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
                lookbehind: !0,
                inside: n.languages.javascript,
              },
              {
                pattern:
                  /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
                lookbehind: !0,
                inside: n.languages.javascript,
              },
            ],
            constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/,
          }),
          n.languages.insertBefore("javascript", "string", {
            hashbang: { pattern: /^#!.*/, greedy: !0, alias: "comment" },
            "template-string": {
              pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
              greedy: !0,
              inside: {
                "template-punctuation": { pattern: /^`|`$/, alias: "string" },
                interpolation: {
                  pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
                  lookbehind: !0,
                  inside: {
                    "interpolation-punctuation": { pattern: /^\$\{|\}$/, alias: "punctuation" },
                    rest: n.languages.javascript,
                  },
                },
                string: /[\s\S]+/,
              },
            },
            "string-property": {
              pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
              lookbehind: !0,
              greedy: !0,
              alias: "property",
            },
          }),
          n.languages.insertBefore("javascript", "operator", {
            "literal-property": {
              pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
              lookbehind: !0,
              alias: "property",
            },
          }),
          n.languages.markup &&
            (n.languages.markup.tag.addInlined("script", "javascript"),
            n.languages.markup.tag.addAttribute(
              /on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/
                .source,
              "javascript"
            )),
          (n.languages.js = n.languages.javascript);
      }
    },
  }),
  Qi = N({
    "../../node_modules/refractor/lang/css.js"(e, t) {
      (t.exports = r), (r.displayName = "css"), (r.aliases = []);
      function r(n) {
        (function (o) {
          var l = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
          (o.languages.css = {
            comment: /\/\*[\s\S]*?\*\//,
            atrule: {
              pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,
              inside: {
                rule: /^@[\w-]+/,
                "selector-function-argument": {
                  pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
                  lookbehind: !0,
                  alias: "selector",
                },
                keyword: { pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/, lookbehind: !0 },
              },
            },
            url: {
              pattern: RegExp("\\burl\\((?:" + l.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"),
              greedy: !0,
              inside: {
                function: /^url/i,
                punctuation: /^\(|\)$/,
                string: { pattern: RegExp("^" + l.source + "$"), alias: "url" },
              },
            },
            selector: {
              pattern: RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` + l.source + ")*(?=\\s*\\{)"),
              lookbehind: !0,
            },
            string: { pattern: l, greedy: !0 },
            property: {
              pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
              lookbehind: !0,
            },
            important: /!important\b/i,
            function: { pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i, lookbehind: !0 },
            punctuation: /[(){};:,]/,
          }),
            (o.languages.css.atrule.inside.rest = o.languages.css);
          var i = o.languages.markup;
          i && (i.tag.addInlined("style", "css"), i.tag.addAttribute("style", "css"));
        })(n);
      }
    },
  }),
  es = N({
    "../../node_modules/refractor/lang/markup.js"(e, t) {
      (t.exports = r),
        (r.displayName = "markup"),
        (r.aliases = ["html", "mathml", "svg", "xml", "ssml", "atom", "rss"]);
      function r(n) {
        (n.languages.markup = {
          comment: { pattern: /<!--(?:(?!<!--)[\s\S])*?-->/, greedy: !0 },
          prolog: { pattern: /<\?[\s\S]+?\?>/, greedy: !0 },
          doctype: {
            pattern:
              /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
            greedy: !0,
            inside: {
              "internal-subset": { pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/, lookbehind: !0, greedy: !0, inside: null },
              string: { pattern: /"[^"]*"|'[^']*'/, greedy: !0 },
              punctuation: /^<!|>$|[[\]]/,
              "doctype-tag": /^DOCTYPE/i,
              name: /[^\s<>'"]+/,
            },
          },
          cdata: { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, greedy: !0 },
          tag: {
            pattern:
              /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
            greedy: !0,
            inside: {
              tag: { pattern: /^<\/?[^\s>\/]+/, inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ } },
              "special-attr": [],
              "attr-value": {
                pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
                inside: { punctuation: [{ pattern: /^=/, alias: "attr-equals" }, /"|'/] },
              },
              punctuation: /\/?>/,
              "attr-name": { pattern: /[^\s>\/]+/, inside: { namespace: /^[^\s>\/:]+:/ } },
            },
          },
          entity: [{ pattern: /&[\da-z]{1,8};/i, alias: "named-entity" }, /&#x?[\da-f]{1,8};/i],
        }),
          (n.languages.markup.tag.inside["attr-value"].inside.entity = n.languages.markup.entity),
          (n.languages.markup.doctype.inside["internal-subset"].inside = n.languages.markup),
          n.hooks.add("wrap", function (o) {
            o.type === "entity" && (o.attributes.title = o.content.value.replace(/&amp;/, "&"));
          }),
          Object.defineProperty(n.languages.markup.tag, "addInlined", {
            value: function (o, l) {
              var i = {};
              (i["language-" + l] = {
                pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
                lookbehind: !0,
                inside: n.languages[l],
              }),
                (i.cdata = /^<!\[CDATA\[|\]\]>$/i);
              var u = { "included-cdata": { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, inside: i } };
              u["language-" + l] = { pattern: /[\s\S]+/, inside: n.languages[l] };
              var s = {};
              (s[o] = {
                pattern: RegExp(
                  /(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(
                    /__/g,
                    function () {
                      return o;
                    }
                  ),
                  "i"
                ),
                lookbehind: !0,
                greedy: !0,
                inside: u,
              }),
                n.languages.insertBefore("markup", "cdata", s);
            },
          }),
          Object.defineProperty(n.languages.markup.tag, "addAttribute", {
            value: function (o, l) {
              n.languages.markup.tag.inside["special-attr"].push({
                pattern: RegExp(
                  /(^|["'\s])/.source + "(?:" + o + ")" + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,
                  "i"
                ),
                lookbehind: !0,
                inside: {
                  "attr-name": /^[^\s=]+/,
                  "attr-value": {
                    pattern: /=[\s\S]+/,
                    inside: {
                      value: {
                        pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                        lookbehind: !0,
                        alias: [l, "language-" + l],
                        inside: n.languages[l],
                      },
                      punctuation: [{ pattern: /^=/, alias: "attr-equals" }, /"|'/],
                    },
                  },
                },
              });
            },
          }),
          (n.languages.html = n.languages.markup),
          (n.languages.mathml = n.languages.markup),
          (n.languages.svg = n.languages.markup),
          (n.languages.xml = n.languages.extend("markup", {})),
          (n.languages.ssml = n.languages.xml),
          (n.languages.atom = n.languages.xml),
          (n.languages.rss = n.languages.xml);
      }
    },
  }),
  G1 = N({
    "../../node_modules/xtend/immutable.js"(e, t) {
      t.exports = n;
      var r = Object.prototype.hasOwnProperty;
      function n() {
        for (var o = {}, l = 0; l < arguments.length; l++) {
          var i = arguments[l];
          for (var u in i) r.call(i, u) && (o[u] = i[u]);
        }
        return o;
      }
    },
  }),
  ts = N({
    "../../node_modules/property-information/lib/util/schema.js"(e, t) {
      t.exports = n;
      var r = n.prototype;
      (r.space = null), (r.normal = {}), (r.property = {});
      function n(o, l, i) {
        (this.property = o), (this.normal = l), i && (this.space = i);
      }
    },
  }),
  Y1 = N({
    "../../node_modules/property-information/lib/util/merge.js"(e, t) {
      var r = G1(),
        n = ts();
      t.exports = o;
      function o(l) {
        for (var i = l.length, u = [], s = [], c = -1, p, g; ++c < i; )
          (p = l[c]), u.push(p.property), s.push(p.normal), (g = p.space);
        return new n(r.apply(null, u), r.apply(null, s), g);
      }
    },
  }),
  Pa = N({
    "../../node_modules/property-information/normalize.js"(e, t) {
      t.exports = r;
      function r(n) {
        return n.toLowerCase();
      }
    },
  }),
  rs = N({
    "../../node_modules/property-information/lib/util/info.js"(e, t) {
      t.exports = n;
      var r = n.prototype;
      (r.space = null),
        (r.attribute = null),
        (r.property = null),
        (r.boolean = !1),
        (r.booleanish = !1),
        (r.overloadedBoolean = !1),
        (r.number = !1),
        (r.commaSeparated = !1),
        (r.spaceSeparated = !1),
        (r.commaOrSpaceSeparated = !1),
        (r.mustUseProperty = !1),
        (r.defined = !1);
      function n(o, l) {
        (this.property = o), (this.attribute = l);
      }
    },
  }),
  Va = N({
    "../../node_modules/property-information/lib/util/types.js"(e) {
      var t = 0;
      (e.boolean = r()),
        (e.booleanish = r()),
        (e.overloadedBoolean = r()),
        (e.number = r()),
        (e.spaceSeparated = r()),
        (e.commaSeparated = r()),
        (e.commaOrSpaceSeparated = r());
      function r() {
        return Math.pow(2, ++t);
      }
    },
  }),
  ns = N({
    "../../node_modules/property-information/lib/util/defined-info.js"(e, t) {
      var r = rs(),
        n = Va();
      (t.exports = i), (i.prototype = new r()), (i.prototype.defined = !0);
      var o = [
          "boolean",
          "booleanish",
          "overloadedBoolean",
          "number",
          "commaSeparated",
          "spaceSeparated",
          "commaOrSpaceSeparated",
        ],
        l = o.length;
      function i(s, c, p, g) {
        var h = -1,
          d;
        for (u(this, "space", g), r.call(this, s, c); ++h < l; ) (d = o[h]), u(this, d, (p & n[d]) === n[d]);
      }
      function u(s, c, p) {
        p && (s[c] = p);
      }
    },
  }),
  Cr = N({
    "../../node_modules/property-information/lib/util/create.js"(e, t) {
      var r = Pa(),
        n = ts(),
        o = ns();
      t.exports = l;
      function l(i) {
        var u = i.space,
          s = i.mustUseProperty || [],
          c = i.attributes || {},
          p = i.properties,
          g = i.transform,
          h = {},
          d = {},
          m,
          f;
        for (m in p)
          (f = new o(m, g(c, m), p[m], u)),
            s.indexOf(m) !== -1 && (f.mustUseProperty = !0),
            (h[m] = f),
            (d[r(m)] = m),
            (d[r(f.attribute)] = m);
        return new n(h, d, u);
      }
    },
  }),
  K1 = N({
    "../../node_modules/property-information/lib/xlink.js"(e, t) {
      var r = Cr();
      t.exports = r({
        space: "xlink",
        transform: n,
        properties: {
          xLinkActuate: null,
          xLinkArcRole: null,
          xLinkHref: null,
          xLinkRole: null,
          xLinkShow: null,
          xLinkTitle: null,
          xLinkType: null,
        },
      });
      function n(o, l) {
        return "xlink:" + l.slice(5).toLowerCase();
      }
    },
  }),
  J1 = N({
    "../../node_modules/property-information/lib/xml.js"(e, t) {
      var r = Cr();
      t.exports = r({ space: "xml", transform: n, properties: { xmlLang: null, xmlBase: null, xmlSpace: null } });
      function n(o, l) {
        return "xml:" + l.slice(3).toLowerCase();
      }
    },
  }),
  X1 = N({
    "../../node_modules/property-information/lib/util/case-sensitive-transform.js"(e, t) {
      t.exports = r;
      function r(n, o) {
        return o in n ? n[o] : o;
      }
    },
  }),
  as = N({
    "../../node_modules/property-information/lib/util/case-insensitive-transform.js"(e, t) {
      var r = X1();
      t.exports = n;
      function n(o, l) {
        return r(o, l.toLowerCase());
      }
    },
  }),
  Q1 = N({
    "../../node_modules/property-information/lib/xmlns.js"(e, t) {
      var r = Cr(),
        n = as();
      t.exports = r({
        space: "xmlns",
        attributes: { xmlnsxlink: "xmlns:xlink" },
        transform: n,
        properties: { xmlns: null, xmlnsXLink: null },
      });
    },
  }),
  ed = N({
    "../../node_modules/property-information/lib/aria.js"(e, t) {
      var r = Va(),
        n = Cr(),
        o = r.booleanish,
        l = r.number,
        i = r.spaceSeparated;
      t.exports = n({
        transform: u,
        properties: {
          ariaActiveDescendant: null,
          ariaAtomic: o,
          ariaAutoComplete: null,
          ariaBusy: o,
          ariaChecked: o,
          ariaColCount: l,
          ariaColIndex: l,
          ariaColSpan: l,
          ariaControls: i,
          ariaCurrent: null,
          ariaDescribedBy: i,
          ariaDetails: null,
          ariaDisabled: o,
          ariaDropEffect: i,
          ariaErrorMessage: null,
          ariaExpanded: o,
          ariaFlowTo: i,
          ariaGrabbed: o,
          ariaHasPopup: null,
          ariaHidden: o,
          ariaInvalid: null,
          ariaKeyShortcuts: null,
          ariaLabel: null,
          ariaLabelledBy: i,
          ariaLevel: l,
          ariaLive: null,
          ariaModal: o,
          ariaMultiLine: o,
          ariaMultiSelectable: o,
          ariaOrientation: null,
          ariaOwns: i,
          ariaPlaceholder: null,
          ariaPosInSet: l,
          ariaPressed: o,
          ariaReadOnly: o,
          ariaRelevant: null,
          ariaRequired: o,
          ariaRoleDescription: i,
          ariaRowCount: l,
          ariaRowIndex: l,
          ariaRowSpan: l,
          ariaSelected: o,
          ariaSetSize: l,
          ariaSort: null,
          ariaValueMax: l,
          ariaValueMin: l,
          ariaValueNow: l,
          ariaValueText: null,
          role: null,
        },
      });
      function u(s, c) {
        return c === "role" ? c : "aria-" + c.slice(4).toLowerCase();
      }
    },
  }),
  td = N({
    "../../node_modules/property-information/lib/html.js"(e, t) {
      var r = Va(),
        n = Cr(),
        o = as(),
        l = r.boolean,
        i = r.overloadedBoolean,
        u = r.booleanish,
        s = r.number,
        c = r.spaceSeparated,
        p = r.commaSeparated;
      t.exports = n({
        space: "html",
        attributes: { acceptcharset: "accept-charset", classname: "class", htmlfor: "for", httpequiv: "http-equiv" },
        transform: o,
        mustUseProperty: ["checked", "multiple", "muted", "selected"],
        properties: {
          abbr: null,
          accept: p,
          acceptCharset: c,
          accessKey: c,
          action: null,
          allow: null,
          allowFullScreen: l,
          allowPaymentRequest: l,
          allowUserMedia: l,
          alt: null,
          as: null,
          async: l,
          autoCapitalize: null,
          autoComplete: c,
          autoFocus: l,
          autoPlay: l,
          capture: l,
          charSet: null,
          checked: l,
          cite: null,
          className: c,
          cols: s,
          colSpan: null,
          content: null,
          contentEditable: u,
          controls: l,
          controlsList: c,
          coords: s | p,
          crossOrigin: null,
          data: null,
          dateTime: null,
          decoding: null,
          default: l,
          defer: l,
          dir: null,
          dirName: null,
          disabled: l,
          download: i,
          draggable: u,
          encType: null,
          enterKeyHint: null,
          form: null,
          formAction: null,
          formEncType: null,
          formMethod: null,
          formNoValidate: l,
          formTarget: null,
          headers: c,
          height: s,
          hidden: l,
          high: s,
          href: null,
          hrefLang: null,
          htmlFor: c,
          httpEquiv: c,
          id: null,
          imageSizes: null,
          imageSrcSet: p,
          inputMode: null,
          integrity: null,
          is: null,
          isMap: l,
          itemId: null,
          itemProp: c,
          itemRef: c,
          itemScope: l,
          itemType: c,
          kind: null,
          label: null,
          lang: null,
          language: null,
          list: null,
          isLoading: null,
          loop: l,
          low: s,
          manifest: null,
          max: null,
          maxLength: s,
          media: null,
          method: null,
          min: null,
          minLength: s,
          multiple: l,
          muted: l,
          name: null,
          nonce: null,
          noModule: l,
          noValidate: l,
          onAbort: null,
          onAfterPrint: null,
          onAuxClick: null,
          onBeforePrint: null,
          onBeforeUnload: null,
          onBlur: null,
          onCancel: null,
          onCanPlay: null,
          onCanPlayThrough: null,
          onChange: null,
          onClick: null,
          onClose: null,
          onContextMenu: null,
          onCopy: null,
          onCueChange: null,
          onCut: null,
          onDblClick: null,
          onDrag: null,
          onDragEnd: null,
          onDragEnter: null,
          onDragExit: null,
          onDragLeave: null,
          onDragOver: null,
          onDragStart: null,
          onDrop: null,
          onDurationChange: null,
          onEmptied: null,
          onEnded: null,
          onError: null,
          onFocus: null,
          onFormData: null,
          onHashChange: null,
          onInput: null,
          onInvalid: null,
          onKeyDown: null,
          onKeyPress: null,
          onKeyUp: null,
          onLanguageChange: null,
          onLoad: null,
          onLoadedData: null,
          onLoadedMetadata: null,
          onLoadEnd: null,
          onLoadStart: null,
          onMessage: null,
          onMessageError: null,
          onMouseDown: null,
          onMouseEnter: null,
          onMouseLeave: null,
          onMouseMove: null,
          onMouseOut: null,
          onMouseOver: null,
          onMouseUp: null,
          onOffline: null,
          onOnline: null,
          onPageHide: null,
          onPageShow: null,
          onPaste: null,
          onPause: null,
          onPlay: null,
          onPlaying: null,
          onPopState: null,
          onProgress: null,
          onRateChange: null,
          onRejectionHandled: null,
          onReset: null,
          onResize: null,
          onScroll: null,
          onSecurityPolicyViolation: null,
          onSeeked: null,
          onSeeking: null,
          onSelect: null,
          onSlotChange: null,
          onStalled: null,
          onStorage: null,
          onSubmit: null,
          onSuspend: null,
          onTimeUpdate: null,
          onToggle: null,
          onUnhandledRejection: null,
          onUnload: null,
          onVolumeChange: null,
          onWaiting: null,
          onWheel: null,
          open: l,
          optimum: s,
          pattern: null,
          ping: c,
          placeholder: null,
          playsInline: l,
          poster: null,
          preload: null,
          readOnly: l,
          referrerPolicy: null,
          rel: c,
          required: l,
          reversed: l,
          rows: s,
          rowSpan: s,
          sandbox: c,
          scope: null,
          scoped: l,
          seamless: l,
          selected: l,
          shape: null,
          size: s,
          sizes: null,
          slot: null,
          span: s,
          spellCheck: u,
          src: null,
          srcDoc: null,
          srcLang: null,
          srcSet: p,
          start: s,
          step: null,
          style: null,
          tabIndex: s,
          target: null,
          title: null,
          translate: null,
          type: null,
          typeMustMatch: l,
          useMap: null,
          value: u,
          width: s,
          wrap: null,
          align: null,
          aLink: null,
          archive: c,
          axis: null,
          background: null,
          bgColor: null,
          border: s,
          borderColor: null,
          bottomMargin: s,
          cellPadding: null,
          cellSpacing: null,
          char: null,
          charOff: null,
          classId: null,
          clear: null,
          code: null,
          codeBase: null,
          codeType: null,
          color: null,
          compact: l,
          declare: l,
          event: null,
          face: null,
          frame: null,
          frameBorder: null,
          hSpace: s,
          leftMargin: s,
          link: null,
          longDesc: null,
          lowSrc: null,
          marginHeight: s,
          marginWidth: s,
          noResize: l,
          noHref: l,
          noShade: l,
          noWrap: l,
          object: null,
          profile: null,
          prompt: null,
          rev: null,
          rightMargin: s,
          rules: null,
          scheme: null,
          scrolling: u,
          standby: null,
          summary: null,
          text: null,
          topMargin: s,
          valueType: null,
          version: null,
          vAlign: null,
          vLink: null,
          vSpace: s,
          allowTransparency: null,
          autoCorrect: null,
          autoSave: null,
          disablePictureInPicture: l,
          disableRemotePlayback: l,
          prefix: null,
          property: null,
          results: s,
          security: null,
          unselectable: null,
        },
      });
    },
  }),
  rd = N({
    "../../node_modules/property-information/html.js"(e, t) {
      var r = Y1(),
        n = K1(),
        o = J1(),
        l = Q1(),
        i = ed(),
        u = td();
      t.exports = r([o, n, l, i, u]);
    },
  }),
  nd = N({
    "../../node_modules/property-information/find.js"(e, t) {
      var r = Pa(),
        n = ns(),
        o = rs(),
        l = "data";
      t.exports = c;
      var i = /^data[-\w.:]+$/i,
        u = /-[a-z]/g,
        s = /[A-Z]/g;
      function c(m, f) {
        var v = r(f),
          b = f,
          C = o;
        return v in m.normal
          ? m.property[m.normal[v]]
          : (v.length > 4 &&
              v.slice(0, 4) === l &&
              i.test(f) &&
              (f.charAt(4) === "-" ? (b = p(f)) : (f = g(f)), (C = n)),
            new C(b, f));
      }
      function p(m) {
        var f = m.slice(5).replace(u, d);
        return l + f.charAt(0).toUpperCase() + f.slice(1);
      }
      function g(m) {
        var f = m.slice(4);
        return u.test(f) ? m : ((f = f.replace(s, h)), f.charAt(0) !== "-" && (f = "-" + f), l + f);
      }
      function h(m) {
        return "-" + m.toLowerCase();
      }
      function d(m) {
        return m.charAt(1).toUpperCase();
      }
    },
  }),
  ad = N({
    "../../node_modules/hast-util-parse-selector/index.js"(e, t) {
      t.exports = n;
      var r = /[#.]/g;
      function n(o, l) {
        for (var i = o || "", u = l || "div", s = {}, c = 0, p, g, h; c < i.length; )
          (r.lastIndex = c),
            (h = r.exec(i)),
            (p = i.slice(c, h ? h.index : i.length)),
            p &&
              (g ? (g === "#" ? (s.id = p) : s.className ? s.className.push(p) : (s.className = [p])) : (u = p),
              (c += p.length)),
            h && ((g = h[0]), c++);
        return { type: "element", tagName: u, properties: s, children: [] };
      }
    },
  }),
  od = N({
    "../../node_modules/space-separated-tokens/index.js"(e) {
      (e.parse = o), (e.stringify = l);
      var t = "",
        r = " ",
        n = /[ \t\n\r\f]+/g;
      function o(i) {
        var u = String(i || t).trim();
        return u === t ? [] : u.split(n);
      }
      function l(i) {
        return i.join(r).trim();
      }
    },
  }),
  ld = N({
    "../../node_modules/comma-separated-tokens/index.js"(e) {
      (e.parse = o), (e.stringify = l);
      var t = ",",
        r = " ",
        n = "";
      function o(i) {
        for (var u = [], s = String(i || n), c = s.indexOf(t), p = 0, g = !1, h; !g; )
          c === -1 && ((c = s.length), (g = !0)),
            (h = s.slice(p, c).trim()),
            (h || !g) && u.push(h),
            (p = c + 1),
            (c = s.indexOf(t, p));
        return u;
      }
      function l(i, u) {
        var s = u || {},
          c = s.padLeft === !1 ? n : r,
          p = s.padRight ? r : n;
        return i[i.length - 1] === n && (i = i.concat(n)), i.join(p + t + c).trim();
      }
    },
  }),
  id = N({
    "../../node_modules/hastscript/factory.js"(e, t) {
      var r = nd(),
        n = Pa(),
        o = ad(),
        l = od().parse,
        i = ld().parse;
      t.exports = s;
      var u = {}.hasOwnProperty;
      function s(v, b, C) {
        var y = C ? f(C) : null;
        return E;
        function E(w, k) {
          var S = o(w, b),
            O = Array.prototype.slice.call(arguments, 2),
            R = S.tagName.toLowerCase(),
            F;
          if (((S.tagName = y && u.call(y, R) ? y[R] : R), k && c(k, S) && (O.unshift(k), (k = null)), k))
            for (F in k) x(S.properties, F, k[F]);
          return (
            g(S.children, O),
            S.tagName === "template" && ((S.content = { type: "root", children: S.children }), (S.children = [])),
            S
          );
        }
        function x(w, k, S) {
          var O, R, F;
          S == null ||
            S !== S ||
            ((O = r(v, k)),
            (R = O.property),
            (F = S),
            typeof F == "string" &&
              (O.spaceSeparated
                ? (F = l(F))
                : O.commaSeparated
                ? (F = i(F))
                : O.commaOrSpaceSeparated && (F = l(i(F).join(" ")))),
            R === "style" && typeof S != "string" && (F = m(F)),
            R === "className" && w.className && (F = w.className.concat(F)),
            (w[R] = h(O, R, F)));
        }
      }
      function c(v, b) {
        return typeof v == "string" || "length" in v || p(b.tagName, v);
      }
      function p(v, b) {
        var C = b.type;
        return v === "input" || !C || typeof C != "string"
          ? !1
          : typeof b.children == "object" && "length" in b.children
          ? !0
          : ((C = C.toLowerCase()),
            v === "button" ? C !== "menu" && C !== "submit" && C !== "reset" && C !== "button" : "value" in b);
      }
      function g(v, b) {
        var C, y;
        if (typeof b == "string" || typeof b == "number") {
          v.push({ type: "text", value: String(b) });
          return;
        }
        if (typeof b == "object" && "length" in b) {
          for (C = -1, y = b.length; ++C < y; ) g(v, b[C]);
          return;
        }
        if (typeof b != "object" || !("type" in b)) throw new Error("Expected node, nodes, or string, got `" + b + "`");
        v.push(b);
      }
      function h(v, b, C) {
        var y, E, x;
        if (typeof C != "object" || !("length" in C)) return d(v, b, C);
        for (E = C.length, y = -1, x = []; ++y < E; ) x[y] = d(v, b, C[y]);
        return x;
      }
      function d(v, b, C) {
        var y = C;
        return (
          v.number || v.positiveNumber
            ? !isNaN(y) && y !== "" && (y = Number(y))
            : (v.boolean || v.overloadedBoolean) && typeof y == "string" && (y === "" || n(C) === n(b)) && (y = !0),
          y
        );
      }
      function m(v) {
        var b = [],
          C;
        for (C in v) b.push([C, v[C]].join(": "));
        return b.join("; ");
      }
      function f(v) {
        for (var b = v.length, C = -1, y = {}, E; ++C < b; ) (E = v[C]), (y[E.toLowerCase()] = E);
        return y;
      }
    },
  }),
  sd = N({
    "../../node_modules/hastscript/html.js"(e, t) {
      var r = rd(),
        n = id(),
        o = n(r, "div");
      (o.displayName = "html"), (t.exports = o);
    },
  }),
  ud = N({
    "../../node_modules/hastscript/index.js"(e, t) {
      t.exports = sd();
    },
  }),
  cd = N({
    "../../node_modules/parse-entities/node_modules/character-entities-legacy/index.json"(e, t) {
      t.exports = {
        AElig: "Æ",
        AMP: "&",
        Aacute: "Á",
        Acirc: "Â",
        Agrave: "À",
        Aring: "Å",
        Atilde: "Ã",
        Auml: "Ä",
        COPY: "©",
        Ccedil: "Ç",
        ETH: "Ð",
        Eacute: "É",
        Ecirc: "Ê",
        Egrave: "È",
        Euml: "Ë",
        GT: ">",
        Iacute: "Í",
        Icirc: "Î",
        Igrave: "Ì",
        Iuml: "Ï",
        LT: "<",
        Ntilde: "Ñ",
        Oacute: "Ó",
        Ocirc: "Ô",
        Ograve: "Ò",
        Oslash: "Ø",
        Otilde: "Õ",
        Ouml: "Ö",
        QUOT: '"',
        REG: "®",
        THORN: "Þ",
        Uacute: "Ú",
        Ucirc: "Û",
        Ugrave: "Ù",
        Uuml: "Ü",
        Yacute: "Ý",
        aacute: "á",
        acirc: "â",
        acute: "´",
        aelig: "æ",
        agrave: "à",
        amp: "&",
        aring: "å",
        atilde: "ã",
        auml: "ä",
        brvbar: "¦",
        ccedil: "ç",
        cedil: "¸",
        cent: "¢",
        copy: "©",
        curren: "¤",
        deg: "°",
        divide: "÷",
        eacute: "é",
        ecirc: "ê",
        egrave: "è",
        eth: "ð",
        euml: "ë",
        frac12: "½",
        frac14: "¼",
        frac34: "¾",
        gt: ">",
        iacute: "í",
        icirc: "î",
        iexcl: "¡",
        igrave: "ì",
        iquest: "¿",
        iuml: "ï",
        laquo: "«",
        lt: "<",
        macr: "¯",
        micro: "µ",
        middot: "·",
        nbsp: " ",
        not: "¬",
        ntilde: "ñ",
        oacute: "ó",
        ocirc: "ô",
        ograve: "ò",
        ordf: "ª",
        ordm: "º",
        oslash: "ø",
        otilde: "õ",
        ouml: "ö",
        para: "¶",
        plusmn: "±",
        pound: "£",
        quot: '"',
        raquo: "»",
        reg: "®",
        sect: "§",
        shy: "­",
        sup1: "¹",
        sup2: "²",
        sup3: "³",
        szlig: "ß",
        thorn: "þ",
        times: "×",
        uacute: "ú",
        ucirc: "û",
        ugrave: "ù",
        uml: "¨",
        uuml: "ü",
        yacute: "ý",
        yen: "¥",
        yuml: "ÿ",
      };
    },
  }),
  dd = N({
    "../../node_modules/character-reference-invalid/index.json"(e, t) {
      t.exports = {
        0: "�",
        128: "€",
        130: "‚",
        131: "ƒ",
        132: "„",
        133: "…",
        134: "†",
        135: "‡",
        136: "ˆ",
        137: "‰",
        138: "Š",
        139: "‹",
        140: "Œ",
        142: "Ž",
        145: "‘",
        146: "’",
        147: "“",
        148: "”",
        149: "•",
        150: "–",
        151: "—",
        152: "˜",
        153: "™",
        154: "š",
        155: "›",
        156: "œ",
        158: "ž",
        159: "Ÿ",
      };
    },
  }),
  os = N({
    "../../node_modules/is-decimal/index.js"(e, t) {
      t.exports = r;
      function r(n) {
        var o = typeof n == "string" ? n.charCodeAt(0) : n;
        return o >= 48 && o <= 57;
      }
    },
  }),
  pd = N({
    "../../node_modules/is-hexadecimal/index.js"(e, t) {
      t.exports = r;
      function r(n) {
        var o = typeof n == "string" ? n.charCodeAt(0) : n;
        return (o >= 97 && o <= 102) || (o >= 65 && o <= 70) || (o >= 48 && o <= 57);
      }
    },
  }),
  fd = N({
    "../../node_modules/is-alphabetical/index.js"(e, t) {
      t.exports = r;
      function r(n) {
        var o = typeof n == "string" ? n.charCodeAt(0) : n;
        return (o >= 97 && o <= 122) || (o >= 65 && o <= 90);
      }
    },
  }),
  md = N({
    "../../node_modules/is-alphanumerical/index.js"(e, t) {
      var r = fd(),
        n = os();
      t.exports = o;
      function o(l) {
        return r(l) || n(l);
      }
    },
  }),
  gd = N({
    "../../node_modules/parse-entities/node_modules/character-entities/index.json"(e, t) {
      t.exports = {
        AEli: "Æ",
        AElig: "Æ",
        AM: "&",
        AMP: "&",
        Aacut: "Á",
        Aacute: "Á",
        Abreve: "Ă",
        Acir: "Â",
        Acirc: "Â",
        Acy: "А",
        Afr: "𝔄",
        Agrav: "À",
        Agrave: "À",
        Alpha: "Α",
        Amacr: "Ā",
        And: "⩓",
        Aogon: "Ą",
        Aopf: "𝔸",
        ApplyFunction: "⁡",
        Arin: "Å",
        Aring: "Å",
        Ascr: "𝒜",
        Assign: "≔",
        Atild: "Ã",
        Atilde: "Ã",
        Aum: "Ä",
        Auml: "Ä",
        Backslash: "∖",
        Barv: "⫧",
        Barwed: "⌆",
        Bcy: "Б",
        Because: "∵",
        Bernoullis: "ℬ",
        Beta: "Β",
        Bfr: "𝔅",
        Bopf: "𝔹",
        Breve: "˘",
        Bscr: "ℬ",
        Bumpeq: "≎",
        CHcy: "Ч",
        COP: "©",
        COPY: "©",
        Cacute: "Ć",
        Cap: "⋒",
        CapitalDifferentialD: "ⅅ",
        Cayleys: "ℭ",
        Ccaron: "Č",
        Ccedi: "Ç",
        Ccedil: "Ç",
        Ccirc: "Ĉ",
        Cconint: "∰",
        Cdot: "Ċ",
        Cedilla: "¸",
        CenterDot: "·",
        Cfr: "ℭ",
        Chi: "Χ",
        CircleDot: "⊙",
        CircleMinus: "⊖",
        CirclePlus: "⊕",
        CircleTimes: "⊗",
        ClockwiseContourIntegral: "∲",
        CloseCurlyDoubleQuote: "”",
        CloseCurlyQuote: "’",
        Colon: "∷",
        Colone: "⩴",
        Congruent: "≡",
        Conint: "∯",
        ContourIntegral: "∮",
        Copf: "ℂ",
        Coproduct: "∐",
        CounterClockwiseContourIntegral: "∳",
        Cross: "⨯",
        Cscr: "𝒞",
        Cup: "⋓",
        CupCap: "≍",
        DD: "ⅅ",
        DDotrahd: "⤑",
        DJcy: "Ђ",
        DScy: "Ѕ",
        DZcy: "Џ",
        Dagger: "‡",
        Darr: "↡",
        Dashv: "⫤",
        Dcaron: "Ď",
        Dcy: "Д",
        Del: "∇",
        Delta: "Δ",
        Dfr: "𝔇",
        DiacriticalAcute: "´",
        DiacriticalDot: "˙",
        DiacriticalDoubleAcute: "˝",
        DiacriticalGrave: "`",
        DiacriticalTilde: "˜",
        Diamond: "⋄",
        DifferentialD: "ⅆ",
        Dopf: "𝔻",
        Dot: "¨",
        DotDot: "⃜",
        DotEqual: "≐",
        DoubleContourIntegral: "∯",
        DoubleDot: "¨",
        DoubleDownArrow: "⇓",
        DoubleLeftArrow: "⇐",
        DoubleLeftRightArrow: "⇔",
        DoubleLeftTee: "⫤",
        DoubleLongLeftArrow: "⟸",
        DoubleLongLeftRightArrow: "⟺",
        DoubleLongRightArrow: "⟹",
        DoubleRightArrow: "⇒",
        DoubleRightTee: "⊨",
        DoubleUpArrow: "⇑",
        DoubleUpDownArrow: "⇕",
        DoubleVerticalBar: "∥",
        DownArrow: "↓",
        DownArrowBar: "⤓",
        DownArrowUpArrow: "⇵",
        DownBreve: "̑",
        DownLeftRightVector: "⥐",
        DownLeftTeeVector: "⥞",
        DownLeftVector: "↽",
        DownLeftVectorBar: "⥖",
        DownRightTeeVector: "⥟",
        DownRightVector: "⇁",
        DownRightVectorBar: "⥗",
        DownTee: "⊤",
        DownTeeArrow: "↧",
        Downarrow: "⇓",
        Dscr: "𝒟",
        Dstrok: "Đ",
        ENG: "Ŋ",
        ET: "Ð",
        ETH: "Ð",
        Eacut: "É",
        Eacute: "É",
        Ecaron: "Ě",
        Ecir: "Ê",
        Ecirc: "Ê",
        Ecy: "Э",
        Edot: "Ė",
        Efr: "𝔈",
        Egrav: "È",
        Egrave: "È",
        Element: "∈",
        Emacr: "Ē",
        EmptySmallSquare: "◻",
        EmptyVerySmallSquare: "▫",
        Eogon: "Ę",
        Eopf: "𝔼",
        Epsilon: "Ε",
        Equal: "⩵",
        EqualTilde: "≂",
        Equilibrium: "⇌",
        Escr: "ℰ",
        Esim: "⩳",
        Eta: "Η",
        Eum: "Ë",
        Euml: "Ë",
        Exists: "∃",
        ExponentialE: "ⅇ",
        Fcy: "Ф",
        Ffr: "𝔉",
        FilledSmallSquare: "◼",
        FilledVerySmallSquare: "▪",
        Fopf: "𝔽",
        ForAll: "∀",
        Fouriertrf: "ℱ",
        Fscr: "ℱ",
        GJcy: "Ѓ",
        G: ">",
        GT: ">",
        Gamma: "Γ",
        Gammad: "Ϝ",
        Gbreve: "Ğ",
        Gcedil: "Ģ",
        Gcirc: "Ĝ",
        Gcy: "Г",
        Gdot: "Ġ",
        Gfr: "𝔊",
        Gg: "⋙",
        Gopf: "𝔾",
        GreaterEqual: "≥",
        GreaterEqualLess: "⋛",
        GreaterFullEqual: "≧",
        GreaterGreater: "⪢",
        GreaterLess: "≷",
        GreaterSlantEqual: "⩾",
        GreaterTilde: "≳",
        Gscr: "𝒢",
        Gt: "≫",
        HARDcy: "Ъ",
        Hacek: "ˇ",
        Hat: "^",
        Hcirc: "Ĥ",
        Hfr: "ℌ",
        HilbertSpace: "ℋ",
        Hopf: "ℍ",
        HorizontalLine: "─",
        Hscr: "ℋ",
        Hstrok: "Ħ",
        HumpDownHump: "≎",
        HumpEqual: "≏",
        IEcy: "Е",
        IJlig: "Ĳ",
        IOcy: "Ё",
        Iacut: "Í",
        Iacute: "Í",
        Icir: "Î",
        Icirc: "Î",
        Icy: "И",
        Idot: "İ",
        Ifr: "ℑ",
        Igrav: "Ì",
        Igrave: "Ì",
        Im: "ℑ",
        Imacr: "Ī",
        ImaginaryI: "ⅈ",
        Implies: "⇒",
        Int: "∬",
        Integral: "∫",
        Intersection: "⋂",
        InvisibleComma: "⁣",
        InvisibleTimes: "⁢",
        Iogon: "Į",
        Iopf: "𝕀",
        Iota: "Ι",
        Iscr: "ℐ",
        Itilde: "Ĩ",
        Iukcy: "І",
        Ium: "Ï",
        Iuml: "Ï",
        Jcirc: "Ĵ",
        Jcy: "Й",
        Jfr: "𝔍",
        Jopf: "𝕁",
        Jscr: "𝒥",
        Jsercy: "Ј",
        Jukcy: "Є",
        KHcy: "Х",
        KJcy: "Ќ",
        Kappa: "Κ",
        Kcedil: "Ķ",
        Kcy: "К",
        Kfr: "𝔎",
        Kopf: "𝕂",
        Kscr: "𝒦",
        LJcy: "Љ",
        L: "<",
        LT: "<",
        Lacute: "Ĺ",
        Lambda: "Λ",
        Lang: "⟪",
        Laplacetrf: "ℒ",
        Larr: "↞",
        Lcaron: "Ľ",
        Lcedil: "Ļ",
        Lcy: "Л",
        LeftAngleBracket: "⟨",
        LeftArrow: "←",
        LeftArrowBar: "⇤",
        LeftArrowRightArrow: "⇆",
        LeftCeiling: "⌈",
        LeftDoubleBracket: "⟦",
        LeftDownTeeVector: "⥡",
        LeftDownVector: "⇃",
        LeftDownVectorBar: "⥙",
        LeftFloor: "⌊",
        LeftRightArrow: "↔",
        LeftRightVector: "⥎",
        LeftTee: "⊣",
        LeftTeeArrow: "↤",
        LeftTeeVector: "⥚",
        LeftTriangle: "⊲",
        LeftTriangleBar: "⧏",
        LeftTriangleEqual: "⊴",
        LeftUpDownVector: "⥑",
        LeftUpTeeVector: "⥠",
        LeftUpVector: "↿",
        LeftUpVectorBar: "⥘",
        LeftVector: "↼",
        LeftVectorBar: "⥒",
        Leftarrow: "⇐",
        Leftrightarrow: "⇔",
        LessEqualGreater: "⋚",
        LessFullEqual: "≦",
        LessGreater: "≶",
        LessLess: "⪡",
        LessSlantEqual: "⩽",
        LessTilde: "≲",
        Lfr: "𝔏",
        Ll: "⋘",
        Lleftarrow: "⇚",
        Lmidot: "Ŀ",
        LongLeftArrow: "⟵",
        LongLeftRightArrow: "⟷",
        LongRightArrow: "⟶",
        Longleftarrow: "⟸",
        Longleftrightarrow: "⟺",
        Longrightarrow: "⟹",
        Lopf: "𝕃",
        LowerLeftArrow: "↙",
        LowerRightArrow: "↘",
        Lscr: "ℒ",
        Lsh: "↰",
        Lstrok: "Ł",
        Lt: "≪",
        Map: "⤅",
        Mcy: "М",
        MediumSpace: " ",
        Mellintrf: "ℳ",
        Mfr: "𝔐",
        MinusPlus: "∓",
        Mopf: "𝕄",
        Mscr: "ℳ",
        Mu: "Μ",
        NJcy: "Њ",
        Nacute: "Ń",
        Ncaron: "Ň",
        Ncedil: "Ņ",
        Ncy: "Н",
        NegativeMediumSpace: "​",
        NegativeThickSpace: "​",
        NegativeThinSpace: "​",
        NegativeVeryThinSpace: "​",
        NestedGreaterGreater: "≫",
        NestedLessLess: "≪",
        NewLine: `
`,
        Nfr: "𝔑",
        NoBreak: "⁠",
        NonBreakingSpace: " ",
        Nopf: "ℕ",
        Not: "⫬",
        NotCongruent: "≢",
        NotCupCap: "≭",
        NotDoubleVerticalBar: "∦",
        NotElement: "∉",
        NotEqual: "≠",
        NotEqualTilde: "≂̸",
        NotExists: "∄",
        NotGreater: "≯",
        NotGreaterEqual: "≱",
        NotGreaterFullEqual: "≧̸",
        NotGreaterGreater: "≫̸",
        NotGreaterLess: "≹",
        NotGreaterSlantEqual: "⩾̸",
        NotGreaterTilde: "≵",
        NotHumpDownHump: "≎̸",
        NotHumpEqual: "≏̸",
        NotLeftTriangle: "⋪",
        NotLeftTriangleBar: "⧏̸",
        NotLeftTriangleEqual: "⋬",
        NotLess: "≮",
        NotLessEqual: "≰",
        NotLessGreater: "≸",
        NotLessLess: "≪̸",
        NotLessSlantEqual: "⩽̸",
        NotLessTilde: "≴",
        NotNestedGreaterGreater: "⪢̸",
        NotNestedLessLess: "⪡̸",
        NotPrecedes: "⊀",
        NotPrecedesEqual: "⪯̸",
        NotPrecedesSlantEqual: "⋠",
        NotReverseElement: "∌",
        NotRightTriangle: "⋫",
        NotRightTriangleBar: "⧐̸",
        NotRightTriangleEqual: "⋭",
        NotSquareSubset: "⊏̸",
        NotSquareSubsetEqual: "⋢",
        NotSquareSuperset: "⊐̸",
        NotSquareSupersetEqual: "⋣",
        NotSubset: "⊂⃒",
        NotSubsetEqual: "⊈",
        NotSucceeds: "⊁",
        NotSucceedsEqual: "⪰̸",
        NotSucceedsSlantEqual: "⋡",
        NotSucceedsTilde: "≿̸",
        NotSuperset: "⊃⃒",
        NotSupersetEqual: "⊉",
        NotTilde: "≁",
        NotTildeEqual: "≄",
        NotTildeFullEqual: "≇",
        NotTildeTilde: "≉",
        NotVerticalBar: "∤",
        Nscr: "𝒩",
        Ntild: "Ñ",
        Ntilde: "Ñ",
        Nu: "Ν",
        OElig: "Œ",
        Oacut: "Ó",
        Oacute: "Ó",
        Ocir: "Ô",
        Ocirc: "Ô",
        Ocy: "О",
        Odblac: "Ő",
        Ofr: "𝔒",
        Ograv: "Ò",
        Ograve: "Ò",
        Omacr: "Ō",
        Omega: "Ω",
        Omicron: "Ο",
        Oopf: "𝕆",
        OpenCurlyDoubleQuote: "“",
        OpenCurlyQuote: "‘",
        Or: "⩔",
        Oscr: "𝒪",
        Oslas: "Ø",
        Oslash: "Ø",
        Otild: "Õ",
        Otilde: "Õ",
        Otimes: "⨷",
        Oum: "Ö",
        Ouml: "Ö",
        OverBar: "‾",
        OverBrace: "⏞",
        OverBracket: "⎴",
        OverParenthesis: "⏜",
        PartialD: "∂",
        Pcy: "П",
        Pfr: "𝔓",
        Phi: "Φ",
        Pi: "Π",
        PlusMinus: "±",
        Poincareplane: "ℌ",
        Popf: "ℙ",
        Pr: "⪻",
        Precedes: "≺",
        PrecedesEqual: "⪯",
        PrecedesSlantEqual: "≼",
        PrecedesTilde: "≾",
        Prime: "″",
        Product: "∏",
        Proportion: "∷",
        Proportional: "∝",
        Pscr: "𝒫",
        Psi: "Ψ",
        QUO: '"',
        QUOT: '"',
        Qfr: "𝔔",
        Qopf: "ℚ",
        Qscr: "𝒬",
        RBarr: "⤐",
        RE: "®",
        REG: "®",
        Racute: "Ŕ",
        Rang: "⟫",
        Rarr: "↠",
        Rarrtl: "⤖",
        Rcaron: "Ř",
        Rcedil: "Ŗ",
        Rcy: "Р",
        Re: "ℜ",
        ReverseElement: "∋",
        ReverseEquilibrium: "⇋",
        ReverseUpEquilibrium: "⥯",
        Rfr: "ℜ",
        Rho: "Ρ",
        RightAngleBracket: "⟩",
        RightArrow: "→",
        RightArrowBar: "⇥",
        RightArrowLeftArrow: "⇄",
        RightCeiling: "⌉",
        RightDoubleBracket: "⟧",
        RightDownTeeVector: "⥝",
        RightDownVector: "⇂",
        RightDownVectorBar: "⥕",
        RightFloor: "⌋",
        RightTee: "⊢",
        RightTeeArrow: "↦",
        RightTeeVector: "⥛",
        RightTriangle: "⊳",
        RightTriangleBar: "⧐",
        RightTriangleEqual: "⊵",
        RightUpDownVector: "⥏",
        RightUpTeeVector: "⥜",
        RightUpVector: "↾",
        RightUpVectorBar: "⥔",
        RightVector: "⇀",
        RightVectorBar: "⥓",
        Rightarrow: "⇒",
        Ropf: "ℝ",
        RoundImplies: "⥰",
        Rrightarrow: "⇛",
        Rscr: "ℛ",
        Rsh: "↱",
        RuleDelayed: "⧴",
        SHCHcy: "Щ",
        SHcy: "Ш",
        SOFTcy: "Ь",
        Sacute: "Ś",
        Sc: "⪼",
        Scaron: "Š",
        Scedil: "Ş",
        Scirc: "Ŝ",
        Scy: "С",
        Sfr: "𝔖",
        ShortDownArrow: "↓",
        ShortLeftArrow: "←",
        ShortRightArrow: "→",
        ShortUpArrow: "↑",
        Sigma: "Σ",
        SmallCircle: "∘",
        Sopf: "𝕊",
        Sqrt: "√",
        Square: "□",
        SquareIntersection: "⊓",
        SquareSubset: "⊏",
        SquareSubsetEqual: "⊑",
        SquareSuperset: "⊐",
        SquareSupersetEqual: "⊒",
        SquareUnion: "⊔",
        Sscr: "𝒮",
        Star: "⋆",
        Sub: "⋐",
        Subset: "⋐",
        SubsetEqual: "⊆",
        Succeeds: "≻",
        SucceedsEqual: "⪰",
        SucceedsSlantEqual: "≽",
        SucceedsTilde: "≿",
        SuchThat: "∋",
        Sum: "∑",
        Sup: "⋑",
        Superset: "⊃",
        SupersetEqual: "⊇",
        Supset: "⋑",
        THOR: "Þ",
        THORN: "Þ",
        TRADE: "™",
        TSHcy: "Ћ",
        TScy: "Ц",
        Tab: "	",
        Tau: "Τ",
        Tcaron: "Ť",
        Tcedil: "Ţ",
        Tcy: "Т",
        Tfr: "𝔗",
        Therefore: "∴",
        Theta: "Θ",
        ThickSpace: "  ",
        ThinSpace: " ",
        Tilde: "∼",
        TildeEqual: "≃",
        TildeFullEqual: "≅",
        TildeTilde: "≈",
        Topf: "𝕋",
        TripleDot: "⃛",
        Tscr: "𝒯",
        Tstrok: "Ŧ",
        Uacut: "Ú",
        Uacute: "Ú",
        Uarr: "↟",
        Uarrocir: "⥉",
        Ubrcy: "Ў",
        Ubreve: "Ŭ",
        Ucir: "Û",
        Ucirc: "Û",
        Ucy: "У",
        Udblac: "Ű",
        Ufr: "𝔘",
        Ugrav: "Ù",
        Ugrave: "Ù",
        Umacr: "Ū",
        UnderBar: "_",
        UnderBrace: "⏟",
        UnderBracket: "⎵",
        UnderParenthesis: "⏝",
        Union: "⋃",
        UnionPlus: "⊎",
        Uogon: "Ų",
        Uopf: "𝕌",
        UpArrow: "↑",
        UpArrowBar: "⤒",
        UpArrowDownArrow: "⇅",
        UpDownArrow: "↕",
        UpEquilibrium: "⥮",
        UpTee: "⊥",
        UpTeeArrow: "↥",
        Uparrow: "⇑",
        Updownarrow: "⇕",
        UpperLeftArrow: "↖",
        UpperRightArrow: "↗",
        Upsi: "ϒ",
        Upsilon: "Υ",
        Uring: "Ů",
        Uscr: "𝒰",
        Utilde: "Ũ",
        Uum: "Ü",
        Uuml: "Ü",
        VDash: "⊫",
        Vbar: "⫫",
        Vcy: "В",
        Vdash: "⊩",
        Vdashl: "⫦",
        Vee: "⋁",
        Verbar: "‖",
        Vert: "‖",
        VerticalBar: "∣",
        VerticalLine: "|",
        VerticalSeparator: "❘",
        VerticalTilde: "≀",
        VeryThinSpace: " ",
        Vfr: "𝔙",
        Vopf: "𝕍",
        Vscr: "𝒱",
        Vvdash: "⊪",
        Wcirc: "Ŵ",
        Wedge: "⋀",
        Wfr: "𝔚",
        Wopf: "𝕎",
        Wscr: "𝒲",
        Xfr: "𝔛",
        Xi: "Ξ",
        Xopf: "𝕏",
        Xscr: "𝒳",
        YAcy: "Я",
        YIcy: "Ї",
        YUcy: "Ю",
        Yacut: "Ý",
        Yacute: "Ý",
        Ycirc: "Ŷ",
        Ycy: "Ы",
        Yfr: "𝔜",
        Yopf: "𝕐",
        Yscr: "𝒴",
        Yuml: "Ÿ",
        ZHcy: "Ж",
        Zacute: "Ź",
        Zcaron: "Ž",
        Zcy: "З",
        Zdot: "Ż",
        ZeroWidthSpace: "​",
        Zeta: "Ζ",
        Zfr: "ℨ",
        Zopf: "ℤ",
        Zscr: "𝒵",
        aacut: "á",
        aacute: "á",
        abreve: "ă",
        ac: "∾",
        acE: "∾̳",
        acd: "∿",
        acir: "â",
        acirc: "â",
        acut: "´",
        acute: "´",
        acy: "а",
        aeli: "æ",
        aelig: "æ",
        af: "⁡",
        afr: "𝔞",
        agrav: "à",
        agrave: "à",
        alefsym: "ℵ",
        aleph: "ℵ",
        alpha: "α",
        amacr: "ā",
        amalg: "⨿",
        am: "&",
        amp: "&",
        and: "∧",
        andand: "⩕",
        andd: "⩜",
        andslope: "⩘",
        andv: "⩚",
        ang: "∠",
        ange: "⦤",
        angle: "∠",
        angmsd: "∡",
        angmsdaa: "⦨",
        angmsdab: "⦩",
        angmsdac: "⦪",
        angmsdad: "⦫",
        angmsdae: "⦬",
        angmsdaf: "⦭",
        angmsdag: "⦮",
        angmsdah: "⦯",
        angrt: "∟",
        angrtvb: "⊾",
        angrtvbd: "⦝",
        angsph: "∢",
        angst: "Å",
        angzarr: "⍼",
        aogon: "ą",
        aopf: "𝕒",
        ap: "≈",
        apE: "⩰",
        apacir: "⩯",
        ape: "≊",
        apid: "≋",
        apos: "'",
        approx: "≈",
        approxeq: "≊",
        arin: "å",
        aring: "å",
        ascr: "𝒶",
        ast: "*",
        asymp: "≈",
        asympeq: "≍",
        atild: "ã",
        atilde: "ã",
        aum: "ä",
        auml: "ä",
        awconint: "∳",
        awint: "⨑",
        bNot: "⫭",
        backcong: "≌",
        backepsilon: "϶",
        backprime: "‵",
        backsim: "∽",
        backsimeq: "⋍",
        barvee: "⊽",
        barwed: "⌅",
        barwedge: "⌅",
        bbrk: "⎵",
        bbrktbrk: "⎶",
        bcong: "≌",
        bcy: "б",
        bdquo: "„",
        becaus: "∵",
        because: "∵",
        bemptyv: "⦰",
        bepsi: "϶",
        bernou: "ℬ",
        beta: "β",
        beth: "ℶ",
        between: "≬",
        bfr: "𝔟",
        bigcap: "⋂",
        bigcirc: "◯",
        bigcup: "⋃",
        bigodot: "⨀",
        bigoplus: "⨁",
        bigotimes: "⨂",
        bigsqcup: "⨆",
        bigstar: "★",
        bigtriangledown: "▽",
        bigtriangleup: "△",
        biguplus: "⨄",
        bigvee: "⋁",
        bigwedge: "⋀",
        bkarow: "⤍",
        blacklozenge: "⧫",
        blacksquare: "▪",
        blacktriangle: "▴",
        blacktriangledown: "▾",
        blacktriangleleft: "◂",
        blacktriangleright: "▸",
        blank: "␣",
        blk12: "▒",
        blk14: "░",
        blk34: "▓",
        block: "█",
        bne: "=⃥",
        bnequiv: "≡⃥",
        bnot: "⌐",
        bopf: "𝕓",
        bot: "⊥",
        bottom: "⊥",
        bowtie: "⋈",
        boxDL: "╗",
        boxDR: "╔",
        boxDl: "╖",
        boxDr: "╓",
        boxH: "═",
        boxHD: "╦",
        boxHU: "╩",
        boxHd: "╤",
        boxHu: "╧",
        boxUL: "╝",
        boxUR: "╚",
        boxUl: "╜",
        boxUr: "╙",
        boxV: "║",
        boxVH: "╬",
        boxVL: "╣",
        boxVR: "╠",
        boxVh: "╫",
        boxVl: "╢",
        boxVr: "╟",
        boxbox: "⧉",
        boxdL: "╕",
        boxdR: "╒",
        boxdl: "┐",
        boxdr: "┌",
        boxh: "─",
        boxhD: "╥",
        boxhU: "╨",
        boxhd: "┬",
        boxhu: "┴",
        boxminus: "⊟",
        boxplus: "⊞",
        boxtimes: "⊠",
        boxuL: "╛",
        boxuR: "╘",
        boxul: "┘",
        boxur: "└",
        boxv: "│",
        boxvH: "╪",
        boxvL: "╡",
        boxvR: "╞",
        boxvh: "┼",
        boxvl: "┤",
        boxvr: "├",
        bprime: "‵",
        breve: "˘",
        brvba: "¦",
        brvbar: "¦",
        bscr: "𝒷",
        bsemi: "⁏",
        bsim: "∽",
        bsime: "⋍",
        bsol: "\\",
        bsolb: "⧅",
        bsolhsub: "⟈",
        bull: "•",
        bullet: "•",
        bump: "≎",
        bumpE: "⪮",
        bumpe: "≏",
        bumpeq: "≏",
        cacute: "ć",
        cap: "∩",
        capand: "⩄",
        capbrcup: "⩉",
        capcap: "⩋",
        capcup: "⩇",
        capdot: "⩀",
        caps: "∩︀",
        caret: "⁁",
        caron: "ˇ",
        ccaps: "⩍",
        ccaron: "č",
        ccedi: "ç",
        ccedil: "ç",
        ccirc: "ĉ",
        ccups: "⩌",
        ccupssm: "⩐",
        cdot: "ċ",
        cedi: "¸",
        cedil: "¸",
        cemptyv: "⦲",
        cen: "¢",
        cent: "¢",
        centerdot: "·",
        cfr: "𝔠",
        chcy: "ч",
        check: "✓",
        checkmark: "✓",
        chi: "χ",
        cir: "○",
        cirE: "⧃",
        circ: "ˆ",
        circeq: "≗",
        circlearrowleft: "↺",
        circlearrowright: "↻",
        circledR: "®",
        circledS: "Ⓢ",
        circledast: "⊛",
        circledcirc: "⊚",
        circleddash: "⊝",
        cire: "≗",
        cirfnint: "⨐",
        cirmid: "⫯",
        cirscir: "⧂",
        clubs: "♣",
        clubsuit: "♣",
        colon: ":",
        colone: "≔",
        coloneq: "≔",
        comma: ",",
        commat: "@",
        comp: "∁",
        compfn: "∘",
        complement: "∁",
        complexes: "ℂ",
        cong: "≅",
        congdot: "⩭",
        conint: "∮",
        copf: "𝕔",
        coprod: "∐",
        cop: "©",
        copy: "©",
        copysr: "℗",
        crarr: "↵",
        cross: "✗",
        cscr: "𝒸",
        csub: "⫏",
        csube: "⫑",
        csup: "⫐",
        csupe: "⫒",
        ctdot: "⋯",
        cudarrl: "⤸",
        cudarrr: "⤵",
        cuepr: "⋞",
        cuesc: "⋟",
        cularr: "↶",
        cularrp: "⤽",
        cup: "∪",
        cupbrcap: "⩈",
        cupcap: "⩆",
        cupcup: "⩊",
        cupdot: "⊍",
        cupor: "⩅",
        cups: "∪︀",
        curarr: "↷",
        curarrm: "⤼",
        curlyeqprec: "⋞",
        curlyeqsucc: "⋟",
        curlyvee: "⋎",
        curlywedge: "⋏",
        curre: "¤",
        curren: "¤",
        curvearrowleft: "↶",
        curvearrowright: "↷",
        cuvee: "⋎",
        cuwed: "⋏",
        cwconint: "∲",
        cwint: "∱",
        cylcty: "⌭",
        dArr: "⇓",
        dHar: "⥥",
        dagger: "†",
        daleth: "ℸ",
        darr: "↓",
        dash: "‐",
        dashv: "⊣",
        dbkarow: "⤏",
        dblac: "˝",
        dcaron: "ď",
        dcy: "д",
        dd: "ⅆ",
        ddagger: "‡",
        ddarr: "⇊",
        ddotseq: "⩷",
        de: "°",
        deg: "°",
        delta: "δ",
        demptyv: "⦱",
        dfisht: "⥿",
        dfr: "𝔡",
        dharl: "⇃",
        dharr: "⇂",
        diam: "⋄",
        diamond: "⋄",
        diamondsuit: "♦",
        diams: "♦",
        die: "¨",
        digamma: "ϝ",
        disin: "⋲",
        div: "÷",
        divid: "÷",
        divide: "÷",
        divideontimes: "⋇",
        divonx: "⋇",
        djcy: "ђ",
        dlcorn: "⌞",
        dlcrop: "⌍",
        dollar: "$",
        dopf: "𝕕",
        dot: "˙",
        doteq: "≐",
        doteqdot: "≑",
        dotminus: "∸",
        dotplus: "∔",
        dotsquare: "⊡",
        doublebarwedge: "⌆",
        downarrow: "↓",
        downdownarrows: "⇊",
        downharpoonleft: "⇃",
        downharpoonright: "⇂",
        drbkarow: "⤐",
        drcorn: "⌟",
        drcrop: "⌌",
        dscr: "𝒹",
        dscy: "ѕ",
        dsol: "⧶",
        dstrok: "đ",
        dtdot: "⋱",
        dtri: "▿",
        dtrif: "▾",
        duarr: "⇵",
        duhar: "⥯",
        dwangle: "⦦",
        dzcy: "џ",
        dzigrarr: "⟿",
        eDDot: "⩷",
        eDot: "≑",
        eacut: "é",
        eacute: "é",
        easter: "⩮",
        ecaron: "ě",
        ecir: "ê",
        ecirc: "ê",
        ecolon: "≕",
        ecy: "э",
        edot: "ė",
        ee: "ⅇ",
        efDot: "≒",
        efr: "𝔢",
        eg: "⪚",
        egrav: "è",
        egrave: "è",
        egs: "⪖",
        egsdot: "⪘",
        el: "⪙",
        elinters: "⏧",
        ell: "ℓ",
        els: "⪕",
        elsdot: "⪗",
        emacr: "ē",
        empty: "∅",
        emptyset: "∅",
        emptyv: "∅",
        emsp13: " ",
        emsp14: " ",
        emsp: " ",
        eng: "ŋ",
        ensp: " ",
        eogon: "ę",
        eopf: "𝕖",
        epar: "⋕",
        eparsl: "⧣",
        eplus: "⩱",
        epsi: "ε",
        epsilon: "ε",
        epsiv: "ϵ",
        eqcirc: "≖",
        eqcolon: "≕",
        eqsim: "≂",
        eqslantgtr: "⪖",
        eqslantless: "⪕",
        equals: "=",
        equest: "≟",
        equiv: "≡",
        equivDD: "⩸",
        eqvparsl: "⧥",
        erDot: "≓",
        erarr: "⥱",
        escr: "ℯ",
        esdot: "≐",
        esim: "≂",
        eta: "η",
        et: "ð",
        eth: "ð",
        eum: "ë",
        euml: "ë",
        euro: "€",
        excl: "!",
        exist: "∃",
        expectation: "ℰ",
        exponentiale: "ⅇ",
        fallingdotseq: "≒",
        fcy: "ф",
        female: "♀",
        ffilig: "ﬃ",
        fflig: "ﬀ",
        ffllig: "ﬄ",
        ffr: "𝔣",
        filig: "ﬁ",
        fjlig: "fj",
        flat: "♭",
        fllig: "ﬂ",
        fltns: "▱",
        fnof: "ƒ",
        fopf: "𝕗",
        forall: "∀",
        fork: "⋔",
        forkv: "⫙",
        fpartint: "⨍",
        frac1: "¼",
        frac12: "½",
        frac13: "⅓",
        frac14: "¼",
        frac15: "⅕",
        frac16: "⅙",
        frac18: "⅛",
        frac23: "⅔",
        frac25: "⅖",
        frac3: "¾",
        frac34: "¾",
        frac35: "⅗",
        frac38: "⅜",
        frac45: "⅘",
        frac56: "⅚",
        frac58: "⅝",
        frac78: "⅞",
        frasl: "⁄",
        frown: "⌢",
        fscr: "𝒻",
        gE: "≧",
        gEl: "⪌",
        gacute: "ǵ",
        gamma: "γ",
        gammad: "ϝ",
        gap: "⪆",
        gbreve: "ğ",
        gcirc: "ĝ",
        gcy: "г",
        gdot: "ġ",
        ge: "≥",
        gel: "⋛",
        geq: "≥",
        geqq: "≧",
        geqslant: "⩾",
        ges: "⩾",
        gescc: "⪩",
        gesdot: "⪀",
        gesdoto: "⪂",
        gesdotol: "⪄",
        gesl: "⋛︀",
        gesles: "⪔",
        gfr: "𝔤",
        gg: "≫",
        ggg: "⋙",
        gimel: "ℷ",
        gjcy: "ѓ",
        gl: "≷",
        glE: "⪒",
        gla: "⪥",
        glj: "⪤",
        gnE: "≩",
        gnap: "⪊",
        gnapprox: "⪊",
        gne: "⪈",
        gneq: "⪈",
        gneqq: "≩",
        gnsim: "⋧",
        gopf: "𝕘",
        grave: "`",
        gscr: "ℊ",
        gsim: "≳",
        gsime: "⪎",
        gsiml: "⪐",
        g: ">",
        gt: ">",
        gtcc: "⪧",
        gtcir: "⩺",
        gtdot: "⋗",
        gtlPar: "⦕",
        gtquest: "⩼",
        gtrapprox: "⪆",
        gtrarr: "⥸",
        gtrdot: "⋗",
        gtreqless: "⋛",
        gtreqqless: "⪌",
        gtrless: "≷",
        gtrsim: "≳",
        gvertneqq: "≩︀",
        gvnE: "≩︀",
        hArr: "⇔",
        hairsp: " ",
        half: "½",
        hamilt: "ℋ",
        hardcy: "ъ",
        harr: "↔",
        harrcir: "⥈",
        harrw: "↭",
        hbar: "ℏ",
        hcirc: "ĥ",
        hearts: "♥",
        heartsuit: "♥",
        hellip: "…",
        hercon: "⊹",
        hfr: "𝔥",
        hksearow: "⤥",
        hkswarow: "⤦",
        hoarr: "⇿",
        homtht: "∻",
        hookleftarrow: "↩",
        hookrightarrow: "↪",
        hopf: "𝕙",
        horbar: "―",
        hscr: "𝒽",
        hslash: "ℏ",
        hstrok: "ħ",
        hybull: "⁃",
        hyphen: "‐",
        iacut: "í",
        iacute: "í",
        ic: "⁣",
        icir: "î",
        icirc: "î",
        icy: "и",
        iecy: "е",
        iexc: "¡",
        iexcl: "¡",
        iff: "⇔",
        ifr: "𝔦",
        igrav: "ì",
        igrave: "ì",
        ii: "ⅈ",
        iiiint: "⨌",
        iiint: "∭",
        iinfin: "⧜",
        iiota: "℩",
        ijlig: "ĳ",
        imacr: "ī",
        image: "ℑ",
        imagline: "ℐ",
        imagpart: "ℑ",
        imath: "ı",
        imof: "⊷",
        imped: "Ƶ",
        in: "∈",
        incare: "℅",
        infin: "∞",
        infintie: "⧝",
        inodot: "ı",
        int: "∫",
        intcal: "⊺",
        integers: "ℤ",
        intercal: "⊺",
        intlarhk: "⨗",
        intprod: "⨼",
        iocy: "ё",
        iogon: "į",
        iopf: "𝕚",
        iota: "ι",
        iprod: "⨼",
        iques: "¿",
        iquest: "¿",
        iscr: "𝒾",
        isin: "∈",
        isinE: "⋹",
        isindot: "⋵",
        isins: "⋴",
        isinsv: "⋳",
        isinv: "∈",
        it: "⁢",
        itilde: "ĩ",
        iukcy: "і",
        ium: "ï",
        iuml: "ï",
        jcirc: "ĵ",
        jcy: "й",
        jfr: "𝔧",
        jmath: "ȷ",
        jopf: "𝕛",
        jscr: "𝒿",
        jsercy: "ј",
        jukcy: "є",
        kappa: "κ",
        kappav: "ϰ",
        kcedil: "ķ",
        kcy: "к",
        kfr: "𝔨",
        kgreen: "ĸ",
        khcy: "х",
        kjcy: "ќ",
        kopf: "𝕜",
        kscr: "𝓀",
        lAarr: "⇚",
        lArr: "⇐",
        lAtail: "⤛",
        lBarr: "⤎",
        lE: "≦",
        lEg: "⪋",
        lHar: "⥢",
        lacute: "ĺ",
        laemptyv: "⦴",
        lagran: "ℒ",
        lambda: "λ",
        lang: "⟨",
        langd: "⦑",
        langle: "⟨",
        lap: "⪅",
        laqu: "«",
        laquo: "«",
        larr: "←",
        larrb: "⇤",
        larrbfs: "⤟",
        larrfs: "⤝",
        larrhk: "↩",
        larrlp: "↫",
        larrpl: "⤹",
        larrsim: "⥳",
        larrtl: "↢",
        lat: "⪫",
        latail: "⤙",
        late: "⪭",
        lates: "⪭︀",
        lbarr: "⤌",
        lbbrk: "❲",
        lbrace: "{",
        lbrack: "[",
        lbrke: "⦋",
        lbrksld: "⦏",
        lbrkslu: "⦍",
        lcaron: "ľ",
        lcedil: "ļ",
        lceil: "⌈",
        lcub: "{",
        lcy: "л",
        ldca: "⤶",
        ldquo: "“",
        ldquor: "„",
        ldrdhar: "⥧",
        ldrushar: "⥋",
        ldsh: "↲",
        le: "≤",
        leftarrow: "←",
        leftarrowtail: "↢",
        leftharpoondown: "↽",
        leftharpoonup: "↼",
        leftleftarrows: "⇇",
        leftrightarrow: "↔",
        leftrightarrows: "⇆",
        leftrightharpoons: "⇋",
        leftrightsquigarrow: "↭",
        leftthreetimes: "⋋",
        leg: "⋚",
        leq: "≤",
        leqq: "≦",
        leqslant: "⩽",
        les: "⩽",
        lescc: "⪨",
        lesdot: "⩿",
        lesdoto: "⪁",
        lesdotor: "⪃",
        lesg: "⋚︀",
        lesges: "⪓",
        lessapprox: "⪅",
        lessdot: "⋖",
        lesseqgtr: "⋚",
        lesseqqgtr: "⪋",
        lessgtr: "≶",
        lesssim: "≲",
        lfisht: "⥼",
        lfloor: "⌊",
        lfr: "𝔩",
        lg: "≶",
        lgE: "⪑",
        lhard: "↽",
        lharu: "↼",
        lharul: "⥪",
        lhblk: "▄",
        ljcy: "љ",
        ll: "≪",
        llarr: "⇇",
        llcorner: "⌞",
        llhard: "⥫",
        lltri: "◺",
        lmidot: "ŀ",
        lmoust: "⎰",
        lmoustache: "⎰",
        lnE: "≨",
        lnap: "⪉",
        lnapprox: "⪉",
        lne: "⪇",
        lneq: "⪇",
        lneqq: "≨",
        lnsim: "⋦",
        loang: "⟬",
        loarr: "⇽",
        lobrk: "⟦",
        longleftarrow: "⟵",
        longleftrightarrow: "⟷",
        longmapsto: "⟼",
        longrightarrow: "⟶",
        looparrowleft: "↫",
        looparrowright: "↬",
        lopar: "⦅",
        lopf: "𝕝",
        loplus: "⨭",
        lotimes: "⨴",
        lowast: "∗",
        lowbar: "_",
        loz: "◊",
        lozenge: "◊",
        lozf: "⧫",
        lpar: "(",
        lparlt: "⦓",
        lrarr: "⇆",
        lrcorner: "⌟",
        lrhar: "⇋",
        lrhard: "⥭",
        lrm: "‎",
        lrtri: "⊿",
        lsaquo: "‹",
        lscr: "𝓁",
        lsh: "↰",
        lsim: "≲",
        lsime: "⪍",
        lsimg: "⪏",
        lsqb: "[",
        lsquo: "‘",
        lsquor: "‚",
        lstrok: "ł",
        l: "<",
        lt: "<",
        ltcc: "⪦",
        ltcir: "⩹",
        ltdot: "⋖",
        lthree: "⋋",
        ltimes: "⋉",
        ltlarr: "⥶",
        ltquest: "⩻",
        ltrPar: "⦖",
        ltri: "◃",
        ltrie: "⊴",
        ltrif: "◂",
        lurdshar: "⥊",
        luruhar: "⥦",
        lvertneqq: "≨︀",
        lvnE: "≨︀",
        mDDot: "∺",
        mac: "¯",
        macr: "¯",
        male: "♂",
        malt: "✠",
        maltese: "✠",
        map: "↦",
        mapsto: "↦",
        mapstodown: "↧",
        mapstoleft: "↤",
        mapstoup: "↥",
        marker: "▮",
        mcomma: "⨩",
        mcy: "м",
        mdash: "—",
        measuredangle: "∡",
        mfr: "𝔪",
        mho: "℧",
        micr: "µ",
        micro: "µ",
        mid: "∣",
        midast: "*",
        midcir: "⫰",
        middo: "·",
        middot: "·",
        minus: "−",
        minusb: "⊟",
        minusd: "∸",
        minusdu: "⨪",
        mlcp: "⫛",
        mldr: "…",
        mnplus: "∓",
        models: "⊧",
        mopf: "𝕞",
        mp: "∓",
        mscr: "𝓂",
        mstpos: "∾",
        mu: "μ",
        multimap: "⊸",
        mumap: "⊸",
        nGg: "⋙̸",
        nGt: "≫⃒",
        nGtv: "≫̸",
        nLeftarrow: "⇍",
        nLeftrightarrow: "⇎",
        nLl: "⋘̸",
        nLt: "≪⃒",
        nLtv: "≪̸",
        nRightarrow: "⇏",
        nVDash: "⊯",
        nVdash: "⊮",
        nabla: "∇",
        nacute: "ń",
        nang: "∠⃒",
        nap: "≉",
        napE: "⩰̸",
        napid: "≋̸",
        napos: "ŉ",
        napprox: "≉",
        natur: "♮",
        natural: "♮",
        naturals: "ℕ",
        nbs: " ",
        nbsp: " ",
        nbump: "≎̸",
        nbumpe: "≏̸",
        ncap: "⩃",
        ncaron: "ň",
        ncedil: "ņ",
        ncong: "≇",
        ncongdot: "⩭̸",
        ncup: "⩂",
        ncy: "н",
        ndash: "–",
        ne: "≠",
        neArr: "⇗",
        nearhk: "⤤",
        nearr: "↗",
        nearrow: "↗",
        nedot: "≐̸",
        nequiv: "≢",
        nesear: "⤨",
        nesim: "≂̸",
        nexist: "∄",
        nexists: "∄",
        nfr: "𝔫",
        ngE: "≧̸",
        nge: "≱",
        ngeq: "≱",
        ngeqq: "≧̸",
        ngeqslant: "⩾̸",
        nges: "⩾̸",
        ngsim: "≵",
        ngt: "≯",
        ngtr: "≯",
        nhArr: "⇎",
        nharr: "↮",
        nhpar: "⫲",
        ni: "∋",
        nis: "⋼",
        nisd: "⋺",
        niv: "∋",
        njcy: "њ",
        nlArr: "⇍",
        nlE: "≦̸",
        nlarr: "↚",
        nldr: "‥",
        nle: "≰",
        nleftarrow: "↚",
        nleftrightarrow: "↮",
        nleq: "≰",
        nleqq: "≦̸",
        nleqslant: "⩽̸",
        nles: "⩽̸",
        nless: "≮",
        nlsim: "≴",
        nlt: "≮",
        nltri: "⋪",
        nltrie: "⋬",
        nmid: "∤",
        nopf: "𝕟",
        no: "¬",
        not: "¬",
        notin: "∉",
        notinE: "⋹̸",
        notindot: "⋵̸",
        notinva: "∉",
        notinvb: "⋷",
        notinvc: "⋶",
        notni: "∌",
        notniva: "∌",
        notnivb: "⋾",
        notnivc: "⋽",
        npar: "∦",
        nparallel: "∦",
        nparsl: "⫽⃥",
        npart: "∂̸",
        npolint: "⨔",
        npr: "⊀",
        nprcue: "⋠",
        npre: "⪯̸",
        nprec: "⊀",
        npreceq: "⪯̸",
        nrArr: "⇏",
        nrarr: "↛",
        nrarrc: "⤳̸",
        nrarrw: "↝̸",
        nrightarrow: "↛",
        nrtri: "⋫",
        nrtrie: "⋭",
        nsc: "⊁",
        nsccue: "⋡",
        nsce: "⪰̸",
        nscr: "𝓃",
        nshortmid: "∤",
        nshortparallel: "∦",
        nsim: "≁",
        nsime: "≄",
        nsimeq: "≄",
        nsmid: "∤",
        nspar: "∦",
        nsqsube: "⋢",
        nsqsupe: "⋣",
        nsub: "⊄",
        nsubE: "⫅̸",
        nsube: "⊈",
        nsubset: "⊂⃒",
        nsubseteq: "⊈",
        nsubseteqq: "⫅̸",
        nsucc: "⊁",
        nsucceq: "⪰̸",
        nsup: "⊅",
        nsupE: "⫆̸",
        nsupe: "⊉",
        nsupset: "⊃⃒",
        nsupseteq: "⊉",
        nsupseteqq: "⫆̸",
        ntgl: "≹",
        ntild: "ñ",
        ntilde: "ñ",
        ntlg: "≸",
        ntriangleleft: "⋪",
        ntrianglelefteq: "⋬",
        ntriangleright: "⋫",
        ntrianglerighteq: "⋭",
        nu: "ν",
        num: "#",
        numero: "№",
        numsp: " ",
        nvDash: "⊭",
        nvHarr: "⤄",
        nvap: "≍⃒",
        nvdash: "⊬",
        nvge: "≥⃒",
        nvgt: ">⃒",
        nvinfin: "⧞",
        nvlArr: "⤂",
        nvle: "≤⃒",
        nvlt: "<⃒",
        nvltrie: "⊴⃒",
        nvrArr: "⤃",
        nvrtrie: "⊵⃒",
        nvsim: "∼⃒",
        nwArr: "⇖",
        nwarhk: "⤣",
        nwarr: "↖",
        nwarrow: "↖",
        nwnear: "⤧",
        oS: "Ⓢ",
        oacut: "ó",
        oacute: "ó",
        oast: "⊛",
        ocir: "ô",
        ocirc: "ô",
        ocy: "о",
        odash: "⊝",
        odblac: "ő",
        odiv: "⨸",
        odot: "⊙",
        odsold: "⦼",
        oelig: "œ",
        ofcir: "⦿",
        ofr: "𝔬",
        ogon: "˛",
        ograv: "ò",
        ograve: "ò",
        ogt: "⧁",
        ohbar: "⦵",
        ohm: "Ω",
        oint: "∮",
        olarr: "↺",
        olcir: "⦾",
        olcross: "⦻",
        oline: "‾",
        olt: "⧀",
        omacr: "ō",
        omega: "ω",
        omicron: "ο",
        omid: "⦶",
        ominus: "⊖",
        oopf: "𝕠",
        opar: "⦷",
        operp: "⦹",
        oplus: "⊕",
        or: "∨",
        orarr: "↻",
        ord: "º",
        order: "ℴ",
        orderof: "ℴ",
        ordf: "ª",
        ordm: "º",
        origof: "⊶",
        oror: "⩖",
        orslope: "⩗",
        orv: "⩛",
        oscr: "ℴ",
        oslas: "ø",
        oslash: "ø",
        osol: "⊘",
        otild: "õ",
        otilde: "õ",
        otimes: "⊗",
        otimesas: "⨶",
        oum: "ö",
        ouml: "ö",
        ovbar: "⌽",
        par: "¶",
        para: "¶",
        parallel: "∥",
        parsim: "⫳",
        parsl: "⫽",
        part: "∂",
        pcy: "п",
        percnt: "%",
        period: ".",
        permil: "‰",
        perp: "⊥",
        pertenk: "‱",
        pfr: "𝔭",
        phi: "φ",
        phiv: "ϕ",
        phmmat: "ℳ",
        phone: "☎",
        pi: "π",
        pitchfork: "⋔",
        piv: "ϖ",
        planck: "ℏ",
        planckh: "ℎ",
        plankv: "ℏ",
        plus: "+",
        plusacir: "⨣",
        plusb: "⊞",
        pluscir: "⨢",
        plusdo: "∔",
        plusdu: "⨥",
        pluse: "⩲",
        plusm: "±",
        plusmn: "±",
        plussim: "⨦",
        plustwo: "⨧",
        pm: "±",
        pointint: "⨕",
        popf: "𝕡",
        poun: "£",
        pound: "£",
        pr: "≺",
        prE: "⪳",
        prap: "⪷",
        prcue: "≼",
        pre: "⪯",
        prec: "≺",
        precapprox: "⪷",
        preccurlyeq: "≼",
        preceq: "⪯",
        precnapprox: "⪹",
        precneqq: "⪵",
        precnsim: "⋨",
        precsim: "≾",
        prime: "′",
        primes: "ℙ",
        prnE: "⪵",
        prnap: "⪹",
        prnsim: "⋨",
        prod: "∏",
        profalar: "⌮",
        profline: "⌒",
        profsurf: "⌓",
        prop: "∝",
        propto: "∝",
        prsim: "≾",
        prurel: "⊰",
        pscr: "𝓅",
        psi: "ψ",
        puncsp: " ",
        qfr: "𝔮",
        qint: "⨌",
        qopf: "𝕢",
        qprime: "⁗",
        qscr: "𝓆",
        quaternions: "ℍ",
        quatint: "⨖",
        quest: "?",
        questeq: "≟",
        quo: '"',
        quot: '"',
        rAarr: "⇛",
        rArr: "⇒",
        rAtail: "⤜",
        rBarr: "⤏",
        rHar: "⥤",
        race: "∽̱",
        racute: "ŕ",
        radic: "√",
        raemptyv: "⦳",
        rang: "⟩",
        rangd: "⦒",
        range: "⦥",
        rangle: "⟩",
        raqu: "»",
        raquo: "»",
        rarr: "→",
        rarrap: "⥵",
        rarrb: "⇥",
        rarrbfs: "⤠",
        rarrc: "⤳",
        rarrfs: "⤞",
        rarrhk: "↪",
        rarrlp: "↬",
        rarrpl: "⥅",
        rarrsim: "⥴",
        rarrtl: "↣",
        rarrw: "↝",
        ratail: "⤚",
        ratio: "∶",
        rationals: "ℚ",
        rbarr: "⤍",
        rbbrk: "❳",
        rbrace: "}",
        rbrack: "]",
        rbrke: "⦌",
        rbrksld: "⦎",
        rbrkslu: "⦐",
        rcaron: "ř",
        rcedil: "ŗ",
        rceil: "⌉",
        rcub: "}",
        rcy: "р",
        rdca: "⤷",
        rdldhar: "⥩",
        rdquo: "”",
        rdquor: "”",
        rdsh: "↳",
        real: "ℜ",
        realine: "ℛ",
        realpart: "ℜ",
        reals: "ℝ",
        rect: "▭",
        re: "®",
        reg: "®",
        rfisht: "⥽",
        rfloor: "⌋",
        rfr: "𝔯",
        rhard: "⇁",
        rharu: "⇀",
        rharul: "⥬",
        rho: "ρ",
        rhov: "ϱ",
        rightarrow: "→",
        rightarrowtail: "↣",
        rightharpoondown: "⇁",
        rightharpoonup: "⇀",
        rightleftarrows: "⇄",
        rightleftharpoons: "⇌",
        rightrightarrows: "⇉",
        rightsquigarrow: "↝",
        rightthreetimes: "⋌",
        ring: "˚",
        risingdotseq: "≓",
        rlarr: "⇄",
        rlhar: "⇌",
        rlm: "‏",
        rmoust: "⎱",
        rmoustache: "⎱",
        rnmid: "⫮",
        roang: "⟭",
        roarr: "⇾",
        robrk: "⟧",
        ropar: "⦆",
        ropf: "𝕣",
        roplus: "⨮",
        rotimes: "⨵",
        rpar: ")",
        rpargt: "⦔",
        rppolint: "⨒",
        rrarr: "⇉",
        rsaquo: "›",
        rscr: "𝓇",
        rsh: "↱",
        rsqb: "]",
        rsquo: "’",
        rsquor: "’",
        rthree: "⋌",
        rtimes: "⋊",
        rtri: "▹",
        rtrie: "⊵",
        rtrif: "▸",
        rtriltri: "⧎",
        ruluhar: "⥨",
        rx: "℞",
        sacute: "ś",
        sbquo: "‚",
        sc: "≻",
        scE: "⪴",
        scap: "⪸",
        scaron: "š",
        sccue: "≽",
        sce: "⪰",
        scedil: "ş",
        scirc: "ŝ",
        scnE: "⪶",
        scnap: "⪺",
        scnsim: "⋩",
        scpolint: "⨓",
        scsim: "≿",
        scy: "с",
        sdot: "⋅",
        sdotb: "⊡",
        sdote: "⩦",
        seArr: "⇘",
        searhk: "⤥",
        searr: "↘",
        searrow: "↘",
        sec: "§",
        sect: "§",
        semi: ";",
        seswar: "⤩",
        setminus: "∖",
        setmn: "∖",
        sext: "✶",
        sfr: "𝔰",
        sfrown: "⌢",
        sharp: "♯",
        shchcy: "щ",
        shcy: "ш",
        shortmid: "∣",
        shortparallel: "∥",
        sh: "­",
        shy: "­",
        sigma: "σ",
        sigmaf: "ς",
        sigmav: "ς",
        sim: "∼",
        simdot: "⩪",
        sime: "≃",
        simeq: "≃",
        simg: "⪞",
        simgE: "⪠",
        siml: "⪝",
        simlE: "⪟",
        simne: "≆",
        simplus: "⨤",
        simrarr: "⥲",
        slarr: "←",
        smallsetminus: "∖",
        smashp: "⨳",
        smeparsl: "⧤",
        smid: "∣",
        smile: "⌣",
        smt: "⪪",
        smte: "⪬",
        smtes: "⪬︀",
        softcy: "ь",
        sol: "/",
        solb: "⧄",
        solbar: "⌿",
        sopf: "𝕤",
        spades: "♠",
        spadesuit: "♠",
        spar: "∥",
        sqcap: "⊓",
        sqcaps: "⊓︀",
        sqcup: "⊔",
        sqcups: "⊔︀",
        sqsub: "⊏",
        sqsube: "⊑",
        sqsubset: "⊏",
        sqsubseteq: "⊑",
        sqsup: "⊐",
        sqsupe: "⊒",
        sqsupset: "⊐",
        sqsupseteq: "⊒",
        squ: "□",
        square: "□",
        squarf: "▪",
        squf: "▪",
        srarr: "→",
        sscr: "𝓈",
        ssetmn: "∖",
        ssmile: "⌣",
        sstarf: "⋆",
        star: "☆",
        starf: "★",
        straightepsilon: "ϵ",
        straightphi: "ϕ",
        strns: "¯",
        sub: "⊂",
        subE: "⫅",
        subdot: "⪽",
        sube: "⊆",
        subedot: "⫃",
        submult: "⫁",
        subnE: "⫋",
        subne: "⊊",
        subplus: "⪿",
        subrarr: "⥹",
        subset: "⊂",
        subseteq: "⊆",
        subseteqq: "⫅",
        subsetneq: "⊊",
        subsetneqq: "⫋",
        subsim: "⫇",
        subsub: "⫕",
        subsup: "⫓",
        succ: "≻",
        succapprox: "⪸",
        succcurlyeq: "≽",
        succeq: "⪰",
        succnapprox: "⪺",
        succneqq: "⪶",
        succnsim: "⋩",
        succsim: "≿",
        sum: "∑",
        sung: "♪",
        sup: "⊃",
        sup1: "¹",
        sup2: "²",
        sup3: "³",
        supE: "⫆",
        supdot: "⪾",
        supdsub: "⫘",
        supe: "⊇",
        supedot: "⫄",
        suphsol: "⟉",
        suphsub: "⫗",
        suplarr: "⥻",
        supmult: "⫂",
        supnE: "⫌",
        supne: "⊋",
        supplus: "⫀",
        supset: "⊃",
        supseteq: "⊇",
        supseteqq: "⫆",
        supsetneq: "⊋",
        supsetneqq: "⫌",
        supsim: "⫈",
        supsub: "⫔",
        supsup: "⫖",
        swArr: "⇙",
        swarhk: "⤦",
        swarr: "↙",
        swarrow: "↙",
        swnwar: "⤪",
        szli: "ß",
        szlig: "ß",
        target: "⌖",
        tau: "τ",
        tbrk: "⎴",
        tcaron: "ť",
        tcedil: "ţ",
        tcy: "т",
        tdot: "⃛",
        telrec: "⌕",
        tfr: "𝔱",
        there4: "∴",
        therefore: "∴",
        theta: "θ",
        thetasym: "ϑ",
        thetav: "ϑ",
        thickapprox: "≈",
        thicksim: "∼",
        thinsp: " ",
        thkap: "≈",
        thksim: "∼",
        thor: "þ",
        thorn: "þ",
        tilde: "˜",
        time: "×",
        times: "×",
        timesb: "⊠",
        timesbar: "⨱",
        timesd: "⨰",
        tint: "∭",
        toea: "⤨",
        top: "⊤",
        topbot: "⌶",
        topcir: "⫱",
        topf: "𝕥",
        topfork: "⫚",
        tosa: "⤩",
        tprime: "‴",
        trade: "™",
        triangle: "▵",
        triangledown: "▿",
        triangleleft: "◃",
        trianglelefteq: "⊴",
        triangleq: "≜",
        triangleright: "▹",
        trianglerighteq: "⊵",
        tridot: "◬",
        trie: "≜",
        triminus: "⨺",
        triplus: "⨹",
        trisb: "⧍",
        tritime: "⨻",
        trpezium: "⏢",
        tscr: "𝓉",
        tscy: "ц",
        tshcy: "ћ",
        tstrok: "ŧ",
        twixt: "≬",
        twoheadleftarrow: "↞",
        twoheadrightarrow: "↠",
        uArr: "⇑",
        uHar: "⥣",
        uacut: "ú",
        uacute: "ú",
        uarr: "↑",
        ubrcy: "ў",
        ubreve: "ŭ",
        ucir: "û",
        ucirc: "û",
        ucy: "у",
        udarr: "⇅",
        udblac: "ű",
        udhar: "⥮",
        ufisht: "⥾",
        ufr: "𝔲",
        ugrav: "ù",
        ugrave: "ù",
        uharl: "↿",
        uharr: "↾",
        uhblk: "▀",
        ulcorn: "⌜",
        ulcorner: "⌜",
        ulcrop: "⌏",
        ultri: "◸",
        umacr: "ū",
        um: "¨",
        uml: "¨",
        uogon: "ų",
        uopf: "𝕦",
        uparrow: "↑",
        updownarrow: "↕",
        upharpoonleft: "↿",
        upharpoonright: "↾",
        uplus: "⊎",
        upsi: "υ",
        upsih: "ϒ",
        upsilon: "υ",
        upuparrows: "⇈",
        urcorn: "⌝",
        urcorner: "⌝",
        urcrop: "⌎",
        uring: "ů",
        urtri: "◹",
        uscr: "𝓊",
        utdot: "⋰",
        utilde: "ũ",
        utri: "▵",
        utrif: "▴",
        uuarr: "⇈",
        uum: "ü",
        uuml: "ü",
        uwangle: "⦧",
        vArr: "⇕",
        vBar: "⫨",
        vBarv: "⫩",
        vDash: "⊨",
        vangrt: "⦜",
        varepsilon: "ϵ",
        varkappa: "ϰ",
        varnothing: "∅",
        varphi: "ϕ",
        varpi: "ϖ",
        varpropto: "∝",
        varr: "↕",
        varrho: "ϱ",
        varsigma: "ς",
        varsubsetneq: "⊊︀",
        varsubsetneqq: "⫋︀",
        varsupsetneq: "⊋︀",
        varsupsetneqq: "⫌︀",
        vartheta: "ϑ",
        vartriangleleft: "⊲",
        vartriangleright: "⊳",
        vcy: "в",
        vdash: "⊢",
        vee: "∨",
        veebar: "⊻",
        veeeq: "≚",
        vellip: "⋮",
        verbar: "|",
        vert: "|",
        vfr: "𝔳",
        vltri: "⊲",
        vnsub: "⊂⃒",
        vnsup: "⊃⃒",
        vopf: "𝕧",
        vprop: "∝",
        vrtri: "⊳",
        vscr: "𝓋",
        vsubnE: "⫋︀",
        vsubne: "⊊︀",
        vsupnE: "⫌︀",
        vsupne: "⊋︀",
        vzigzag: "⦚",
        wcirc: "ŵ",
        wedbar: "⩟",
        wedge: "∧",
        wedgeq: "≙",
        weierp: "℘",
        wfr: "𝔴",
        wopf: "𝕨",
        wp: "℘",
        wr: "≀",
        wreath: "≀",
        wscr: "𝓌",
        xcap: "⋂",
        xcirc: "◯",
        xcup: "⋃",
        xdtri: "▽",
        xfr: "𝔵",
        xhArr: "⟺",
        xharr: "⟷",
        xi: "ξ",
        xlArr: "⟸",
        xlarr: "⟵",
        xmap: "⟼",
        xnis: "⋻",
        xodot: "⨀",
        xopf: "𝕩",
        xoplus: "⨁",
        xotime: "⨂",
        xrArr: "⟹",
        xrarr: "⟶",
        xscr: "𝓍",
        xsqcup: "⨆",
        xuplus: "⨄",
        xutri: "△",
        xvee: "⋁",
        xwedge: "⋀",
        yacut: "ý",
        yacute: "ý",
        yacy: "я",
        ycirc: "ŷ",
        ycy: "ы",
        ye: "¥",
        yen: "¥",
        yfr: "𝔶",
        yicy: "ї",
        yopf: "𝕪",
        yscr: "𝓎",
        yucy: "ю",
        yum: "ÿ",
        yuml: "ÿ",
        zacute: "ź",
        zcaron: "ž",
        zcy: "з",
        zdot: "ż",
        zeetrf: "ℨ",
        zeta: "ζ",
        zfr: "𝔷",
        zhcy: "ж",
        zigrarr: "⇝",
        zopf: "𝕫",
        zscr: "𝓏",
        zwj: "‍",
        zwnj: "‌",
      };
    },
  }),
  hd = N({
    "../../node_modules/parse-entities/decode-entity.js"(e, t) {
      var r = gd();
      t.exports = o;
      var n = {}.hasOwnProperty;
      function o(l) {
        return n.call(r, l) ? r[l] : !1;
      }
    },
  }),
  yd = N({
    "../../node_modules/parse-entities/index.js"(e, t) {
      var r = cd(),
        n = dd(),
        o = os(),
        l = pd(),
        i = md(),
        u = hd();
      t.exports = Y;
      var s = {}.hasOwnProperty,
        c = String.fromCharCode,
        p = Function.prototype,
        g = {
          warning: null,
          reference: null,
          text: null,
          warningContext: null,
          referenceContext: null,
          textContext: null,
          position: {},
          additional: null,
          attribute: !1,
          nonTerminated: !0,
        },
        h = 9,
        d = 10,
        m = 12,
        f = 32,
        v = 38,
        b = 59,
        C = 60,
        y = 61,
        E = 35,
        x = 88,
        w = 120,
        k = 65533,
        S = "named",
        O = "hexadecimal",
        R = "decimal",
        F = {};
      (F[O] = 16), (F[R] = 10);
      var L = {};
      (L[S] = i), (L[R] = o), (L[O] = l);
      var T = 1,
        Z = 2,
        D = 3,
        M = 4,
        H = 5,
        P = 6,
        $ = 7,
        j = {};
      (j[T] = "Named character references must be terminated by a semicolon"),
        (j[Z] = "Numeric character references must be terminated by a semicolon"),
        (j[D] = "Named character references cannot be empty"),
        (j[M] = "Numeric character references cannot be empty"),
        (j[H] = "Named character references must be known"),
        (j[P] = "Numeric character references cannot be disallowed"),
        (j[$] = "Numeric character references cannot be outside the permissible Unicode range");
      function Y(I, V) {
        var q = {},
          le,
          fe;
        V || (V = {});
        for (fe in g) (le = V[fe]), (q[fe] = le ?? g[fe]);
        return (
          (q.position.indent || q.position.start) &&
            ((q.indent = q.position.indent || []), (q.position = q.position.start)),
          re(I, q)
        );
      }
      function re(I, V) {
        var q = V.additional,
          le = V.nonTerminated,
          fe = V.text,
          nt = V.reference,
          Oe = V.warning,
          He = V.textContext,
          B = V.referenceContext,
          Be = V.warningContext,
          je = V.position,
          yt = V.indent || [],
          Ft = I.length,
          Ne = 0,
          Or = -1,
          me = je.column || 1,
          bt = je.line || 1,
          Pe = "",
          Tt = [],
          Ve,
          Dt,
          ze,
          de,
          $e,
          ie,
          ne,
          qe,
          Rr,
          On,
          vt,
          Qt,
          Et,
          at,
          Bo,
          er,
          Fr,
          Ue,
          se;
        for (typeof q == "string" && (q = q.charCodeAt(0)), er = tr(), qe = Oe ? _0 : p, Ne--, Ft++; ++Ne < Ft; )
          if (($e === d && (me = yt[Or] || 1), ($e = I.charCodeAt(Ne)), $e === v)) {
            if (
              ((ne = I.charCodeAt(Ne + 1)),
              ne === h || ne === d || ne === m || ne === f || ne === v || ne === C || ne !== ne || (q && ne === q))
            ) {
              (Pe += c($e)), me++;
              continue;
            }
            for (
              Et = Ne + 1,
                Qt = Et,
                se = Et,
                ne === E
                  ? ((se = ++Qt), (ne = I.charCodeAt(se)), ne === x || ne === w ? ((at = O), (se = ++Qt)) : (at = R))
                  : (at = S),
                Ve = "",
                vt = "",
                de = "",
                Bo = L[at],
                se--;
              ++se < Ft && ((ne = I.charCodeAt(se)), !!Bo(ne));

            )
              (de += c(ne)), at === S && s.call(r, de) && ((Ve = de), (vt = r[de]));
            (ze = I.charCodeAt(se) === b),
              ze && (se++, (Dt = at === S ? u(de) : !1), Dt && ((Ve = de), (vt = Dt))),
              (Ue = 1 + se - Et),
              (!ze && !le) ||
                (de
                  ? at === S
                    ? (ze && !vt
                        ? qe(H, 1)
                        : (Ve !== de && ((se = Qt + Ve.length), (Ue = 1 + se - Qt), (ze = !1)),
                          ze ||
                            ((Rr = Ve ? T : D),
                            V.attribute
                              ? ((ne = I.charCodeAt(se)),
                                ne === y ? (qe(Rr, Ue), (vt = null)) : i(ne) ? (vt = null) : qe(Rr, Ue))
                              : qe(Rr, Ue))),
                      (ie = vt))
                    : (ze || qe(Z, Ue),
                      (ie = parseInt(de, F[at])),
                      G(ie)
                        ? (qe($, Ue), (ie = c(k)))
                        : ie in n
                        ? (qe(P, Ue), (ie = n[ie]))
                        : ((On = ""),
                          J(ie) && qe(P, Ue),
                          ie > 65535 && ((ie -= 65536), (On += c((ie >>> 10) | 55296)), (ie = 56320 | (ie & 1023))),
                          (ie = On + c(ie))))
                  : at !== S && qe(M, Ue)),
              ie
                ? ($o(),
                  (er = tr()),
                  (Ne = se - 1),
                  (me += se - Et + 1),
                  Tt.push(ie),
                  (Fr = tr()),
                  Fr.offset++,
                  nt && nt.call(B, ie, { start: er, end: Fr }, I.slice(Et - 1, se)),
                  (er = Fr))
                : ((de = I.slice(Et - 1, se)), (Pe += de), (me += de.length), (Ne = se - 1));
          } else $e === 10 && (bt++, Or++, (me = 0)), $e === $e ? ((Pe += c($e)), me++) : $o();
        return Tt.join("");
        function tr() {
          return { line: bt, column: me, offset: Ne + (je.offset || 0) };
        }
        function _0(Io, Zo) {
          var Rn = tr();
          (Rn.column += Zo), (Rn.offset += Zo), Oe.call(Be, j[Io], Rn, Io);
        }
        function $o() {
          Pe && (Tt.push(Pe), fe && fe.call(He, Pe, { start: er, end: tr() }), (Pe = ""));
        }
      }
      function G(I) {
        return (I >= 55296 && I <= 57343) || I > 1114111;
      }
      function J(I) {
        return (
          (I >= 1 && I <= 8) ||
          I === 11 ||
          (I >= 13 && I <= 31) ||
          (I >= 127 && I <= 159) ||
          (I >= 64976 && I <= 65007) ||
          (I & 65535) === 65535 ||
          (I & 65535) === 65534
        );
      }
    },
  }),
  bd = N({
    "../../node_modules/refractor/node_modules/prismjs/components/prism-core.js"(e, t) {
      var r =
          typeof window < "u"
            ? window
            : typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope
            ? self
            : {},
        n = (function (o) {
          var l = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,
            i = 0,
            u = {},
            s = {
              manual: o.Prism && o.Prism.manual,
              disableWorkerMessageHandler: o.Prism && o.Prism.disableWorkerMessageHandler,
              util: {
                encode: function y(E) {
                  return E instanceof c
                    ? new c(E.type, y(E.content), E.alias)
                    : Array.isArray(E)
                    ? E.map(y)
                    : E.replace(/&/g, "&amp;")
                        .replace(/</g, "&lt;")
                        .replace(/\u00a0/g, " ");
                },
                type: function (y) {
                  return Object.prototype.toString.call(y).slice(8, -1);
                },
                objId: function (y) {
                  return y.__id || Object.defineProperty(y, "__id", { value: ++i }), y.__id;
                },
                clone: function y(E, x) {
                  x = x || {};
                  var w, k;
                  switch (s.util.type(E)) {
                    case "Object":
                      if (((k = s.util.objId(E)), x[k])) return x[k];
                      (w = {}), (x[k] = w);
                      for (var S in E) E.hasOwnProperty(S) && (w[S] = y(E[S], x));
                      return w;
                    case "Array":
                      return (
                        (k = s.util.objId(E)),
                        x[k]
                          ? x[k]
                          : ((w = []),
                            (x[k] = w),
                            E.forEach(function (O, R) {
                              w[R] = y(O, x);
                            }),
                            w)
                      );
                    default:
                      return E;
                  }
                },
                getLanguage: function (y) {
                  for (; y; ) {
                    var E = l.exec(y.className);
                    if (E) return E[1].toLowerCase();
                    y = y.parentElement;
                  }
                  return "none";
                },
                setLanguage: function (y, E) {
                  (y.className = y.className.replace(RegExp(l, "gi"), "")), y.classList.add("language-" + E);
                },
                currentScript: function () {
                  if (typeof document > "u") return null;
                  if ("currentScript" in document && 1 < 2) return document.currentScript;
                  try {
                    throw new Error();
                  } catch (w) {
                    var y = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(w.stack) || [])[1];
                    if (y) {
                      var E = document.getElementsByTagName("script");
                      for (var x in E) if (E[x].src == y) return E[x];
                    }
                    return null;
                  }
                },
                isActive: function (y, E, x) {
                  for (var w = "no-" + E; y; ) {
                    var k = y.classList;
                    if (k.contains(E)) return !0;
                    if (k.contains(w)) return !1;
                    y = y.parentElement;
                  }
                  return !!x;
                },
              },
              languages: {
                plain: u,
                plaintext: u,
                text: u,
                txt: u,
                extend: function (y, E) {
                  var x = s.util.clone(s.languages[y]);
                  for (var w in E) x[w] = E[w];
                  return x;
                },
                insertBefore: function (y, E, x, w) {
                  w = w || s.languages;
                  var k = w[y],
                    S = {};
                  for (var O in k)
                    if (k.hasOwnProperty(O)) {
                      if (O == E) for (var R in x) x.hasOwnProperty(R) && (S[R] = x[R]);
                      x.hasOwnProperty(O) || (S[O] = k[O]);
                    }
                  var F = w[y];
                  return (
                    (w[y] = S),
                    s.languages.DFS(s.languages, function (L, T) {
                      T === F && L != y && (this[L] = S);
                    }),
                    S
                  );
                },
                DFS: function y(E, x, w, k) {
                  k = k || {};
                  var S = s.util.objId;
                  for (var O in E)
                    if (E.hasOwnProperty(O)) {
                      x.call(E, O, E[O], w || O);
                      var R = E[O],
                        F = s.util.type(R);
                      F === "Object" && !k[S(R)]
                        ? ((k[S(R)] = !0), y(R, x, null, k))
                        : F === "Array" && !k[S(R)] && ((k[S(R)] = !0), y(R, x, O, k));
                    }
                },
              },
              plugins: {},
              highlightAll: function (y, E) {
                s.highlightAllUnder(document, y, E);
              },
              highlightAllUnder: function (y, E, x) {
                var w = {
                  callback: x,
                  container: y,
                  selector:
                    'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code',
                };
                s.hooks.run("before-highlightall", w),
                  (w.elements = Array.prototype.slice.apply(w.container.querySelectorAll(w.selector))),
                  s.hooks.run("before-all-elements-highlight", w);
                for (var k = 0, S; (S = w.elements[k++]); ) s.highlightElement(S, E === !0, w.callback);
              },
              highlightElement: function (y, E, x) {
                var w = s.util.getLanguage(y),
                  k = s.languages[w];
                s.util.setLanguage(y, w);
                var S = y.parentElement;
                S && S.nodeName.toLowerCase() === "pre" && s.util.setLanguage(S, w);
                var O = y.textContent,
                  R = { element: y, language: w, grammar: k, code: O };
                function F(T) {
                  (R.highlightedCode = T),
                    s.hooks.run("before-insert", R),
                    (R.element.innerHTML = R.highlightedCode),
                    s.hooks.run("after-highlight", R),
                    s.hooks.run("complete", R),
                    x && x.call(R.element);
                }
                if (
                  (s.hooks.run("before-sanity-check", R),
                  (S = R.element.parentElement),
                  S &&
                    S.nodeName.toLowerCase() === "pre" &&
                    !S.hasAttribute("tabindex") &&
                    S.setAttribute("tabindex", "0"),
                  !R.code)
                ) {
                  s.hooks.run("complete", R), x && x.call(R.element);
                  return;
                }
                if ((s.hooks.run("before-highlight", R), !R.grammar)) {
                  F(s.util.encode(R.code));
                  return;
                }
                if (E && o.Worker) {
                  var L = new Worker(s.filename);
                  (L.onmessage = function (T) {
                    F(T.data);
                  }),
                    L.postMessage(JSON.stringify({ language: R.language, code: R.code, immediateClose: !0 }));
                } else F(s.highlight(R.code, R.grammar, R.language));
              },
              highlight: function (y, E, x) {
                var w = { code: y, grammar: E, language: x };
                if ((s.hooks.run("before-tokenize", w), !w.grammar))
                  throw new Error('The language "' + w.language + '" has no grammar.');
                return (
                  (w.tokens = s.tokenize(w.code, w.grammar)),
                  s.hooks.run("after-tokenize", w),
                  c.stringify(s.util.encode(w.tokens), w.language)
                );
              },
              tokenize: function (y, E) {
                var x = E.rest;
                if (x) {
                  for (var w in x) E[w] = x[w];
                  delete E.rest;
                }
                var k = new h();
                return d(k, k.head, y), g(y, k, E, k.head, 0), f(k);
              },
              hooks: {
                all: {},
                add: function (y, E) {
                  var x = s.hooks.all;
                  (x[y] = x[y] || []), x[y].push(E);
                },
                run: function (y, E) {
                  var x = s.hooks.all[y];
                  if (!(!x || !x.length)) for (var w = 0, k; (k = x[w++]); ) k(E);
                },
              },
              Token: c,
            };
          o.Prism = s;
          function c(y, E, x, w) {
            (this.type = y), (this.content = E), (this.alias = x), (this.length = (w || "").length | 0);
          }
          c.stringify = function y(E, x) {
            if (typeof E == "string") return E;
            if (Array.isArray(E)) {
              var w = "";
              return (
                E.forEach(function (F) {
                  w += y(F, x);
                }),
                w
              );
            }
            var k = {
                type: E.type,
                content: y(E.content, x),
                tag: "span",
                classes: ["token", E.type],
                attributes: {},
                language: x,
              },
              S = E.alias;
            S && (Array.isArray(S) ? Array.prototype.push.apply(k.classes, S) : k.classes.push(S)),
              s.hooks.run("wrap", k);
            var O = "";
            for (var R in k.attributes) O += " " + R + '="' + (k.attributes[R] || "").replace(/"/g, "&quot;") + '"';
            return "<" + k.tag + ' class="' + k.classes.join(" ") + '"' + O + ">" + k.content + "</" + k.tag + ">";
          };
          function p(y, E, x, w) {
            y.lastIndex = E;
            var k = y.exec(x);
            if (k && w && k[1]) {
              var S = k[1].length;
              (k.index += S), (k[0] = k[0].slice(S));
            }
            return k;
          }
          function g(y, E, x, w, k, S) {
            for (var O in x)
              if (!(!x.hasOwnProperty(O) || !x[O])) {
                var R = x[O];
                R = Array.isArray(R) ? R : [R];
                for (var F = 0; F < R.length; ++F) {
                  if (S && S.cause == O + "," + F) return;
                  var L = R[F],
                    T = L.inside,
                    Z = !!L.lookbehind,
                    D = !!L.greedy,
                    M = L.alias;
                  if (D && !L.pattern.global) {
                    var H = L.pattern.toString().match(/[imsuy]*$/)[0];
                    L.pattern = RegExp(L.pattern.source, H + "g");
                  }
                  for (
                    var P = L.pattern || L, $ = w.next, j = k;
                    $ !== E.tail && !(S && j >= S.reach);
                    j += $.value.length, $ = $.next
                  ) {
                    var Y = $.value;
                    if (E.length > y.length) return;
                    if (!(Y instanceof c)) {
                      var re = 1,
                        G;
                      if (D) {
                        if (((G = p(P, j, y, Z)), !G || G.index >= y.length)) break;
                        var q = G.index,
                          J = G.index + G[0].length,
                          I = j;
                        for (I += $.value.length; q >= I; ) ($ = $.next), (I += $.value.length);
                        if (((I -= $.value.length), (j = I), $.value instanceof c)) continue;
                        for (var V = $; V !== E.tail && (I < J || typeof V.value == "string"); V = V.next)
                          re++, (I += V.value.length);
                        re--, (Y = y.slice(j, I)), (G.index -= j);
                      } else if (((G = p(P, 0, Y, Z)), !G)) continue;
                      var q = G.index,
                        le = G[0],
                        fe = Y.slice(0, q),
                        nt = Y.slice(q + le.length),
                        Oe = j + Y.length;
                      S && Oe > S.reach && (S.reach = Oe);
                      var He = $.prev;
                      fe && ((He = d(E, He, fe)), (j += fe.length)), m(E, He, re);
                      var B = new c(O, T ? s.tokenize(le, T) : le, M, le);
                      if ((($ = d(E, He, B)), nt && d(E, $, nt), re > 1)) {
                        var Be = { cause: O + "," + F, reach: Oe };
                        g(y, E, x, $.prev, j, Be), S && Be.reach > S.reach && (S.reach = Be.reach);
                      }
                    }
                  }
                }
              }
          }
          function h() {
            var y = { value: null, prev: null, next: null },
              E = { value: null, prev: y, next: null };
            (y.next = E), (this.head = y), (this.tail = E), (this.length = 0);
          }
          function d(y, E, x) {
            var w = E.next,
              k = { value: x, prev: E, next: w };
            return (E.next = k), (w.prev = k), y.length++, k;
          }
          function m(y, E, x) {
            for (var w = E.next, k = 0; k < x && w !== y.tail; k++) w = w.next;
            (E.next = w), (w.prev = E), (y.length -= k);
          }
          function f(y) {
            for (var E = [], x = y.head.next; x !== y.tail; ) E.push(x.value), (x = x.next);
            return E;
          }
          if (!o.document)
            return (
              o.addEventListener &&
                (s.disableWorkerMessageHandler ||
                  o.addEventListener(
                    "message",
                    function (y) {
                      var E = JSON.parse(y.data),
                        x = E.language,
                        w = E.code,
                        k = E.immediateClose;
                      o.postMessage(s.highlight(w, s.languages[x], x)), k && o.close();
                    },
                    !1
                  )),
              s
            );
          var v = s.util.currentScript();
          v && ((s.filename = v.src), v.hasAttribute("data-manual") && (s.manual = !0));
          function b() {
            s.manual || s.highlightAll();
          }
          if (!s.manual) {
            var C = document.readyState;
            C === "isLoading" || (C === "interactive" && v && v.defer)
              ? document.addEventListener("DOMContentLoaded", b)
              : window.requestAnimationFrame
              ? window.requestAnimationFrame(b)
              : window.setTimeout(b, 16);
          }
          return s;
        })(r);
      typeof t < "u" && t.exports && (t.exports = n), typeof global < "u" && (global.Prism = n);
    },
  }),
  vd = N({
    "../../node_modules/refractor/core.js"(e, t) {
      var r =
          typeof globalThis == "object"
            ? globalThis
            : typeof self == "object"
            ? self
            : typeof window == "object"
            ? window
            : typeof global == "object"
            ? global
            : {},
        n = k();
      r.Prism = { manual: !0, disableWorkerMessageHandler: !0 };
      var o = ud(),
        l = yd(),
        i = bd(),
        u = es(),
        s = Qi(),
        c = U1(),
        p = W1();
      n();
      var g = {}.hasOwnProperty;
      function h() {}
      h.prototype = i;
      var d = new h();
      (t.exports = d),
        (d.highlight = v),
        (d.register = m),
        (d.alias = f),
        (d.registered = b),
        (d.listLanguages = C),
        m(u),
        m(s),
        m(c),
        m(p),
        (d.util.encode = x),
        (d.Token.stringify = y);
      function m(S) {
        if (typeof S != "function" || !S.displayName)
          throw new Error("Expected `function` for `grammar`, got `" + S + "`");
        d.languages[S.displayName] === void 0 && S(d);
      }
      function f(S, O) {
        var R = d.languages,
          F = S,
          L,
          T,
          Z,
          D;
        O && ((F = {}), (F[S] = O));
        for (L in F) for (T = F[L], T = typeof T == "string" ? [T] : T, Z = T.length, D = -1; ++D < Z; ) R[T[D]] = R[L];
      }
      function v(S, O) {
        var R = i.highlight,
          F;
        if (typeof S != "string") throw new Error("Expected `string` for `value`, got `" + S + "`");
        if (d.util.type(O) === "Object") (F = O), (O = null);
        else {
          if (typeof O != "string") throw new Error("Expected `string` for `name`, got `" + O + "`");
          if (g.call(d.languages, O)) F = d.languages[O];
          else throw new Error("Unknown language: `" + O + "` is not registered");
        }
        return R.call(this, S, F, O);
      }
      function b(S) {
        if (typeof S != "string") throw new Error("Expected `string` for `language`, got `" + S + "`");
        return g.call(d.languages, S);
      }
      function C() {
        var S = d.languages,
          O = [],
          R;
        for (R in S) g.call(S, R) && typeof S[R] == "object" && O.push(R);
        return O;
      }
      function y(S, O, R) {
        var F;
        return typeof S == "string"
          ? { type: "text", value: S }
          : d.util.type(S) === "Array"
          ? E(S, O)
          : ((F = {
              type: S.type,
              content: d.Token.stringify(S.content, O, R),
              tag: "span",
              classes: ["token", S.type],
              attributes: {},
              language: O,
              parent: R,
            }),
            S.alias && (F.classes = F.classes.concat(S.alias)),
            d.hooks.run("wrap", F),
            o(F.tag + "." + F.classes.join("."), w(F.attributes), F.content));
      }
      function E(S, O) {
        for (var R = [], F = S.length, L = -1, T; ++L < F; )
          (T = S[L]), T !== "" && T !== null && T !== void 0 && R.push(T);
        for (L = -1, F = R.length; ++L < F; ) (T = R[L]), (R[L] = d.Token.stringify(T, O, R));
        return R;
      }
      function x(S) {
        return S;
      }
      function w(S) {
        var O;
        for (O in S) S[O] = l(S[O]);
        return S;
      }
      function k() {
        var S = "Prism" in r,
          O = S ? r.Prism : void 0;
        return R;
        function R() {
          S ? (r.Prism = O) : delete r.Prism, (S = void 0), (O = void 0);
        }
      }
    },
  }),
  Ed = N({
    "../../node_modules/refractor/lang/bash.js"(e, t) {
      (t.exports = r), (r.displayName = "bash"), (r.aliases = ["shell"]);
      function r(n) {
        (function (o) {
          var l =
              "\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",
            i = { pattern: /(^(["']?)\w+\2)[ \t]+\S.*/, lookbehind: !0, alias: "punctuation", inside: null },
            u = {
              bash: i,
              environment: { pattern: RegExp("\\$" + l), alias: "constant" },
              variable: [
                {
                  pattern: /\$?\(\([\s\S]+?\)\)/,
                  greedy: !0,
                  inside: {
                    variable: [{ pattern: /(^\$\(\([\s\S]+)\)\)/, lookbehind: !0 }, /^\$\(\(/],
                    number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,
                    operator: /--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,
                    punctuation: /\(\(?|\)\)?|,|;/,
                  },
                },
                { pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/, greedy: !0, inside: { variable: /^\$\(|^`|\)$|`$/ } },
                {
                  pattern: /\$\{[^}]+\}/,
                  greedy: !0,
                  inside: {
                    operator: /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,
                    punctuation: /[\[\]]/,
                    environment: { pattern: RegExp("(\\{)" + l), lookbehind: !0, alias: "constant" },
                  },
                },
                /\$(?:\w+|[#?*!@$])/,
              ],
              entity: /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/,
            };
          (o.languages.bash = {
            shebang: { pattern: /^#!\s*\/.*/, alias: "important" },
            comment: { pattern: /(^|[^"{\\$])#.*/, lookbehind: !0 },
            "function-name": [
              { pattern: /(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/, lookbehind: !0, alias: "function" },
              { pattern: /\b[\w-]+(?=\s*\(\s*\)\s*\{)/, alias: "function" },
            ],
            "for-or-select": { pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/, alias: "variable", lookbehind: !0 },
            "assign-left": {
              pattern: /(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,
              inside: {
                environment: { pattern: RegExp("(^|[\\s;|&]|[<>]\\()" + l), lookbehind: !0, alias: "constant" },
              },
              alias: "variable",
              lookbehind: !0,
            },
            string: [
              { pattern: /((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/, lookbehind: !0, greedy: !0, inside: u },
              {
                pattern: /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,
                lookbehind: !0,
                greedy: !0,
                inside: { bash: i },
              },
              {
                pattern: /(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,
                lookbehind: !0,
                greedy: !0,
                inside: u,
              },
              { pattern: /(^|[^$\\])'[^']*'/, lookbehind: !0, greedy: !0 },
              { pattern: /\$'(?:[^'\\]|\\[\s\S])*'/, greedy: !0, inside: { entity: u.entity } },
            ],
            environment: { pattern: RegExp("\\$?" + l), alias: "constant" },
            variable: u.variable,
            function: {
              pattern:
                /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,
              lookbehind: !0,
            },
            keyword: {
              pattern:
                /(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,
              lookbehind: !0,
            },
            builtin: {
              pattern:
                /(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,
              lookbehind: !0,
              alias: "class-name",
            },
            boolean: { pattern: /(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/, lookbehind: !0 },
            "file-descriptor": { pattern: /\B&\d\b/, alias: "important" },
            operator: {
              pattern: /\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,
              inside: { "file-descriptor": { pattern: /^\d/, alias: "important" } },
            },
            punctuation: /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,
            number: { pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/, lookbehind: !0 },
          }),
            (i.inside = o.languages.bash);
          for (
            var s = [
                "comment",
                "function-name",
                "for-or-select",
                "assign-left",
                "string",
                "environment",
                "function",
                "keyword",
                "builtin",
                "boolean",
                "file-descriptor",
                "operator",
                "punctuation",
                "number",
              ],
              c = u.variable[1].inside,
              p = 0;
            p < s.length;
            p++
          )
            c[s[p]] = o.languages.bash[s[p]];
          o.languages.shell = o.languages.bash;
        })(n);
      }
    },
  }),
  xd = N({
    "../../node_modules/refractor/lang/js-extras.js"(e, t) {
      (t.exports = r), (r.displayName = "jsExtras"), (r.aliases = []);
      function r(n) {
        (function (o) {
          o.languages.insertBefore("javascript", "function-variable", {
            "method-variable": {
              pattern: RegExp("(\\.\\s*)" + o.languages.javascript["function-variable"].pattern.source),
              lookbehind: !0,
              alias: ["function-variable", "method", "function", "property-access"],
            },
          }),
            o.languages.insertBefore("javascript", "function", {
              method: {
                pattern: RegExp("(\\.\\s*)" + o.languages.javascript.function.source),
                lookbehind: !0,
                alias: ["function", "property-access"],
              },
            }),
            o.languages.insertBefore("javascript", "constant", {
              "known-class-name": [
                {
                  pattern:
                    /\b(?:(?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|(?:Weak)?(?:Map|Set)|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|WebAssembly)\b/,
                  alias: "class-name",
                },
                { pattern: /\b(?:[A-Z]\w*)Error\b/, alias: "class-name" },
              ],
            });
          function l(g, h) {
            return RegExp(
              g.replace(/<ID>/g, function () {
                return /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/.source;
              }),
              h
            );
          }
          o.languages.insertBefore("javascript", "keyword", {
            imports: {
              pattern: l(
                /(\bimport\b\s*)(?:<ID>(?:\s*,\s*(?:\*\s*as\s+<ID>|\{[^{}]*\}))?|\*\s*as\s+<ID>|\{[^{}]*\})(?=\s*\bfrom\b)/
                  .source
              ),
              lookbehind: !0,
              inside: o.languages.javascript,
            },
            exports: {
              pattern: l(/(\bexport\b\s*)(?:\*(?:\s*as\s+<ID>)?(?=\s*\bfrom\b)|\{[^{}]*\})/.source),
              lookbehind: !0,
              inside: o.languages.javascript,
            },
          }),
            o.languages.javascript.keyword.unshift(
              { pattern: /\b(?:as|default|export|from|import)\b/, alias: "module" },
              {
                pattern:
                  /\b(?:await|break|catch|continue|do|else|finally|for|if|return|switch|throw|try|while|yield)\b/,
                alias: "control-flow",
              },
              { pattern: /\bnull\b/, alias: ["null", "nil"] },
              { pattern: /\bundefined\b/, alias: "nil" }
            ),
            o.languages.insertBefore("javascript", "operator", {
              spread: { pattern: /\.{3}/, alias: "operator" },
              arrow: { pattern: /=>/, alias: "operator" },
            }),
            o.languages.insertBefore("javascript", "punctuation", {
              "property-access": { pattern: l(/(\.\s*)#?<ID>/.source), lookbehind: !0 },
              "maybe-class-name": { pattern: /(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/, lookbehind: !0 },
              dom: {
                pattern: /\b(?:document|(?:local|session)Storage|location|navigator|performance|window)\b/,
                alias: "variable",
              },
              console: { pattern: /\bconsole(?=\s*\.)/, alias: "class-name" },
            });
          for (
            var i = ["function", "function-variable", "method", "method-variable", "property-access"], u = 0;
            u < i.length;
            u++
          ) {
            var s = i[u],
              c = o.languages.javascript[s];
            o.util.type(c) === "RegExp" && (c = o.languages.javascript[s] = { pattern: c });
            var p = c.inside || {};
            (c.inside = p), (p["maybe-class-name"] = /^[A-Z][\s\S]*/);
          }
        })(n);
      }
    },
  }),
  Ad = N({
    "../../node_modules/refractor/lang/json.js"(e, t) {
      (t.exports = r), (r.displayName = "json"), (r.aliases = ["webmanifest"]);
      function r(n) {
        (n.languages.json = {
          property: { pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/, lookbehind: !0, greedy: !0 },
          string: { pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/, lookbehind: !0, greedy: !0 },
          comment: { pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/, greedy: !0 },
          number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
          punctuation: /[{}[\],]/,
          operator: /:/,
          boolean: /\b(?:false|true)\b/,
          null: { pattern: /\bnull\b/, alias: "keyword" },
        }),
          (n.languages.webmanifest = n.languages.json);
      }
    },
  }),
  wd = N({
    "../../node_modules/refractor/lang/graphql.js"(e, t) {
      (t.exports = r), (r.displayName = "graphql"), (r.aliases = []);
      function r(n) {
        (n.languages.graphql = {
          comment: /#.*/,
          description: {
            pattern: /(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i,
            greedy: !0,
            alias: "string",
            inside: {
              "language-markdown": {
                pattern: /(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/,
                lookbehind: !0,
                inside: n.languages.markdown,
              },
            },
          },
          string: { pattern: /"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*"/, greedy: !0 },
          number: /(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
          boolean: /\b(?:false|true)\b/,
          variable: /\$[a-z_]\w*/i,
          directive: { pattern: /@[a-z_]\w*/i, alias: "function" },
          "attr-name": { pattern: /\b[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i, greedy: !0 },
          "atom-input": { pattern: /\b[A-Z]\w*Input\b/, alias: "class-name" },
          scalar: /\b(?:Boolean|Float|ID|Int|String)\b/,
          constant: /\b[A-Z][A-Z_\d]*\b/,
          "class-name": {
            pattern: /(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*|:\s*|\[)[A-Z_]\w*/,
            lookbehind: !0,
          },
          fragment: { pattern: /(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/, lookbehind: !0, alias: "function" },
          "definition-mutation": { pattern: /(\bmutation\s+)[a-zA-Z_]\w*/, lookbehind: !0, alias: "function" },
          "definition-query": { pattern: /(\bquery\s+)[a-zA-Z_]\w*/, lookbehind: !0, alias: "function" },
          keyword:
            /\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/,
          operator: /[!=|&]|\.{3}/,
          "property-query": /\w+(?=\s*\()/,
          object: /\w+(?=\s*\{)/,
          punctuation: /[!(){}\[\]:=,]/,
          property: /\w+/,
        }),
          n.hooks.add("after-tokenize", function (o) {
            if (o.language !== "graphql") return;
            var l = o.tokens.filter(function (C) {
                return typeof C != "string" && C.type !== "comment" && C.type !== "scalar";
              }),
              i = 0;
            function u(C) {
              return l[i + C];
            }
            function s(C, y) {
              y = y || 0;
              for (var E = 0; E < C.length; E++) {
                var x = u(E + y);
                if (!x || x.type !== C[E]) return !1;
              }
              return !0;
            }
            function c(C, y) {
              for (var E = 1, x = i; x < l.length; x++) {
                var w = l[x],
                  k = w.content;
                if (w.type === "punctuation" && typeof k == "string") {
                  if (C.test(k)) E++;
                  else if (y.test(k) && (E--, E === 0)) return x;
                }
              }
              return -1;
            }
            function p(C, y) {
              var E = C.alias;
              E ? Array.isArray(E) || (C.alias = E = [E]) : (C.alias = E = []), E.push(y);
            }
            for (; i < l.length; ) {
              var g = l[i++];
              if (g.type === "keyword" && g.content === "mutation") {
                var h = [];
                if (s(["definition-mutation", "punctuation"]) && u(1).content === "(") {
                  i += 2;
                  var d = c(/^\($/, /^\)$/);
                  if (d === -1) continue;
                  for (; i < d; i++) {
                    var m = u(0);
                    m.type === "variable" && (p(m, "variable-input"), h.push(m.content));
                  }
                  i = d + 1;
                }
                if (
                  s(["punctuation", "property-query"]) &&
                  u(0).content === "{" &&
                  (i++, p(u(0), "property-mutation"), h.length > 0)
                ) {
                  var f = c(/^\{$/, /^\}$/);
                  if (f === -1) continue;
                  for (var v = i; v < f; v++) {
                    var b = l[v];
                    b.type === "variable" && h.indexOf(b.content) >= 0 && p(b, "variable-input");
                  }
                }
              }
            }
          });
      }
    },
  });
const { logger: Cd } = __STORYBOOK_MODULE_CLIENT_LOGGER__;
var Sd = ke(Xi()),
  kd = Sd.default,
  _d = ke(Ed()),
  Od = _d.default,
  Rd = ke(Qi()),
  Fd = Rd.default,
  Td = ke(xd()),
  Dd = Td.default,
  Ld = ke(Ad()),
  Md = Ld.default,
  Bd = ke(wd()),
  $d = Bd.default,
  Id = ke(es()),
  Zd = Id.default,
  Hd = ke(V1()),
  jd = Hd.default,
  Nd = ke(z1()),
  Pd = Nd.default,
  Vd = ke(q1()),
  zd = Vd.default,
  qd = ke(Ji()),
  Ud = qd.default;
function Wd(e, t) {
  if (e == null) return {};
  var r = Na(e, t),
    n,
    o;
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(e);
    for (o = 0; o < l.length; o++)
      (n = l[o]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function ia(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Gd(e) {
  if (Array.isArray(e)) return ia(e);
}
function Yd(e) {
  if ((typeof Symbol < "u" && e[Symbol.iterator] != null) || e["@@iterator"] != null) return Array.from(e);
}
function Kd(e, t) {
  if (e) {
    if (typeof e == "string") return ia(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if ((r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")) return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return ia(e, t);
  }
}
function Jd() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Xd(e) {
  return Gd(e) || Yd(e) || Kd(e) || Jd();
}
function fr(e) {
  return (
    (fr =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    fr(e)
  );
}
function Qd(e, t) {
  if (fr(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (fr(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function ep(e) {
  var t = Qd(e, "string");
  return fr(t) === "symbol" ? t : String(t);
}
function ls(e, t, r) {
  return (
    (t = ep(t)),
    t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
    e
  );
}
function ul(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function $t(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? ul(Object(r), !0).forEach(function (n) {
          ls(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : ul(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function tp(e) {
  var t = e.length;
  if (t === 0 || t === 1) return e;
  if (t === 2) return [e[0], e[1], "".concat(e[0], ".").concat(e[1]), "".concat(e[1], ".").concat(e[0])];
  if (t === 3)
    return [
      e[0],
      e[1],
      e[2],
      "".concat(e[0], ".").concat(e[1]),
      "".concat(e[0], ".").concat(e[2]),
      "".concat(e[1], ".").concat(e[0]),
      "".concat(e[1], ".").concat(e[2]),
      "".concat(e[2], ".").concat(e[0]),
      "".concat(e[2], ".").concat(e[1]),
      "".concat(e[0], ".").concat(e[1], ".").concat(e[2]),
      "".concat(e[0], ".").concat(e[2], ".").concat(e[1]),
      "".concat(e[1], ".").concat(e[0], ".").concat(e[2]),
      "".concat(e[1], ".").concat(e[2], ".").concat(e[0]),
      "".concat(e[2], ".").concat(e[0], ".").concat(e[1]),
      "".concat(e[2], ".").concat(e[1], ".").concat(e[0]),
    ];
  if (t >= 4)
    return [
      e[0],
      e[1],
      e[2],
      e[3],
      "".concat(e[0], ".").concat(e[1]),
      "".concat(e[0], ".").concat(e[2]),
      "".concat(e[0], ".").concat(e[3]),
      "".concat(e[1], ".").concat(e[0]),
      "".concat(e[1], ".").concat(e[2]),
      "".concat(e[1], ".").concat(e[3]),
      "".concat(e[2], ".").concat(e[0]),
      "".concat(e[2], ".").concat(e[1]),
      "".concat(e[2], ".").concat(e[3]),
      "".concat(e[3], ".").concat(e[0]),
      "".concat(e[3], ".").concat(e[1]),
      "".concat(e[3], ".").concat(e[2]),
      "".concat(e[0], ".").concat(e[1], ".").concat(e[2]),
      "".concat(e[0], ".").concat(e[1], ".").concat(e[3]),
      "".concat(e[0], ".").concat(e[2], ".").concat(e[1]),
      "".concat(e[0], ".").concat(e[2], ".").concat(e[3]),
      "".concat(e[0], ".").concat(e[3], ".").concat(e[1]),
      "".concat(e[0], ".").concat(e[3], ".").concat(e[2]),
      "".concat(e[1], ".").concat(e[0], ".").concat(e[2]),
      "".concat(e[1], ".").concat(e[0], ".").concat(e[3]),
      "".concat(e[1], ".").concat(e[2], ".").concat(e[0]),
      "".concat(e[1], ".").concat(e[2], ".").concat(e[3]),
      "".concat(e[1], ".").concat(e[3], ".").concat(e[0]),
      "".concat(e[1], ".").concat(e[3], ".").concat(e[2]),
      "".concat(e[2], ".").concat(e[0], ".").concat(e[1]),
      "".concat(e[2], ".").concat(e[0], ".").concat(e[3]),
      "".concat(e[2], ".").concat(e[1], ".").concat(e[0]),
      "".concat(e[2], ".").concat(e[1], ".").concat(e[3]),
      "".concat(e[2], ".").concat(e[3], ".").concat(e[0]),
      "".concat(e[2], ".").concat(e[3], ".").concat(e[1]),
      "".concat(e[3], ".").concat(e[0], ".").concat(e[1]),
      "".concat(e[3], ".").concat(e[0], ".").concat(e[2]),
      "".concat(e[3], ".").concat(e[1], ".").concat(e[0]),
      "".concat(e[3], ".").concat(e[1], ".").concat(e[2]),
      "".concat(e[3], ".").concat(e[2], ".").concat(e[0]),
      "".concat(e[3], ".").concat(e[2], ".").concat(e[1]),
      "".concat(e[0], ".").concat(e[1], ".").concat(e[2], ".").concat(e[3]),
      "".concat(e[0], ".").concat(e[1], ".").concat(e[3], ".").concat(e[2]),
      "".concat(e[0], ".").concat(e[2], ".").concat(e[1], ".").concat(e[3]),
      "".concat(e[0], ".").concat(e[2], ".").concat(e[3], ".").concat(e[1]),
      "".concat(e[0], ".").concat(e[3], ".").concat(e[1], ".").concat(e[2]),
      "".concat(e[0], ".").concat(e[3], ".").concat(e[2], ".").concat(e[1]),
      "".concat(e[1], ".").concat(e[0], ".").concat(e[2], ".").concat(e[3]),
      "".concat(e[1], ".").concat(e[0], ".").concat(e[3], ".").concat(e[2]),
      "".concat(e[1], ".").concat(e[2], ".").concat(e[0], ".").concat(e[3]),
      "".concat(e[1], ".").concat(e[2], ".").concat(e[3], ".").concat(e[0]),
      "".concat(e[1], ".").concat(e[3], ".").concat(e[0], ".").concat(e[2]),
      "".concat(e[1], ".").concat(e[3], ".").concat(e[2], ".").concat(e[0]),
      "".concat(e[2], ".").concat(e[0], ".").concat(e[1], ".").concat(e[3]),
      "".concat(e[2], ".").concat(e[0], ".").concat(e[3], ".").concat(e[1]),
      "".concat(e[2], ".").concat(e[1], ".").concat(e[0], ".").concat(e[3]),
      "".concat(e[2], ".").concat(e[1], ".").concat(e[3], ".").concat(e[0]),
      "".concat(e[2], ".").concat(e[3], ".").concat(e[0], ".").concat(e[1]),
      "".concat(e[2], ".").concat(e[3], ".").concat(e[1], ".").concat(e[0]),
      "".concat(e[3], ".").concat(e[0], ".").concat(e[1], ".").concat(e[2]),
      "".concat(e[3], ".").concat(e[0], ".").concat(e[2], ".").concat(e[1]),
      "".concat(e[3], ".").concat(e[1], ".").concat(e[0], ".").concat(e[2]),
      "".concat(e[3], ".").concat(e[1], ".").concat(e[2], ".").concat(e[0]),
      "".concat(e[3], ".").concat(e[2], ".").concat(e[0], ".").concat(e[1]),
      "".concat(e[3], ".").concat(e[2], ".").concat(e[1], ".").concat(e[0]),
    ];
}
var In = {};
function rp(e) {
  if (e.length === 0 || e.length === 1) return e;
  var t = e.join(".");
  return In[t] || (In[t] = tp(e)), In[t];
}
function np(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    r = arguments.length > 2 ? arguments[2] : void 0,
    n = e.filter(function (l) {
      return l !== "token";
    }),
    o = rp(n);
  return o.reduce(function (l, i) {
    return $t($t({}, l), r[i]);
  }, t);
}
function cl(e) {
  return e.join(" ");
}
function ap(e, t) {
  var r = 0;
  return function (n) {
    return (
      (r += 1),
      n.map(function (o, l) {
        return za({ node: o, stylesheet: e, useInlineStyles: t, key: "code-segment-".concat(r, "-").concat(l) });
      })
    );
  };
}
function za(e) {
  var t = e.node,
    r = e.stylesheet,
    n = e.style,
    o = n === void 0 ? {} : n,
    l = e.useInlineStyles,
    i = e.key,
    u = t.properties,
    s = t.type,
    c = t.tagName,
    p = t.value;
  if (s === "text") return p;
  if (c) {
    var g = ap(r, l),
      h;
    if (!l) h = $t($t({}, u), {}, { className: cl(u.className) });
    else {
      var d = Object.keys(r).reduce(function (b, C) {
          return (
            C.split(".").forEach(function (y) {
              b.includes(y) || b.push(y);
            }),
            b
          );
        }, []),
        m = u.className && u.className.includes("token") ? ["token"] : [],
        f =
          u.className &&
          m.concat(
            u.className.filter(function (b) {
              return !d.includes(b);
            })
          );
      h = $t($t({}, u), {}, { className: cl(f) || void 0, style: np(u.className, Object.assign({}, u.style, o), r) });
    }
    var v = g(t.children);
    return a.createElement(c, ye({ key: i }, h), v);
  }
}
var op = function (e, t) {
    var r = e.listLanguages();
    return r.indexOf(t) !== -1;
  },
  lp = [
    "language",
    "children",
    "style",
    "customStyle",
    "codeTagProps",
    "useInlineStyles",
    "showLineNumbers",
    "showInlineLineNumbers",
    "startingLineNumber",
    "lineNumberContainerStyle",
    "lineNumberStyle",
    "wrapLines",
    "wrapLongLines",
    "lineProps",
    "renderer",
    "PreTag",
    "CodeTag",
    "code",
    "astGenerator",
  ];
function dl(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Ke(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? dl(Object(r), !0).forEach(function (n) {
          ls(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : dl(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
var ip = /\n/g;
function sp(e) {
  return e.match(ip);
}
function up(e) {
  var t = e.lines,
    r = e.startingLineNumber,
    n = e.style;
  return t.map(function (o, l) {
    var i = l + r;
    return a.createElement(
      "span",
      {
        key: "line-".concat(l),
        className: "react-syntax-highlighter-line-number",
        style: typeof n == "function" ? n(i) : n,
      },
      "".concat(
        i,
        `
`
      )
    );
  });
}
function cp(e) {
  var t = e.codeString,
    r = e.codeStyle,
    n = e.containerStyle,
    o = n === void 0 ? { float: "left", paddingRight: "10px" } : n,
    l = e.numberStyle,
    i = l === void 0 ? {} : l,
    u = e.startingLineNumber;
  return a.createElement(
    "code",
    { style: Object.assign({}, r, o) },
    up({
      lines: t.replace(/\n$/, "").split(`
`),
      style: i,
      startingLineNumber: u,
    })
  );
}
function dp(e) {
  return "".concat(e.toString().length, ".25em");
}
function is(e, t) {
  return {
    type: "element",
    tagName: "span",
    properties: {
      key: "line-number--".concat(e),
      className: ["comment", "linenumber", "react-syntax-highlighter-line-number"],
      style: t,
    },
    children: [{ type: "text", value: e }],
  };
}
function ss(e, t, r) {
  var n = { display: "inline-block", minWidth: dp(r), paddingRight: "1em", textAlign: "right", userSelect: "none" },
    o = typeof e == "function" ? e(t) : e,
    l = Ke(Ke({}, n), o);
  return l;
}
function Pr(e) {
  var t = e.children,
    r = e.lineNumber,
    n = e.lineNumberStyle,
    o = e.largestLineNumber,
    l = e.showInlineLineNumbers,
    i = e.lineProps,
    u = i === void 0 ? {} : i,
    s = e.className,
    c = s === void 0 ? [] : s,
    p = e.showLineNumbers,
    g = e.wrapLongLines,
    h = typeof u == "function" ? u(r) : u;
  if (((h.className = c), r && l)) {
    var d = ss(n, r, o);
    t.unshift(is(r, d));
  }
  return (
    g & p && (h.style = Ke(Ke({}, h.style), {}, { display: "flex" })),
    { type: "element", tagName: "span", properties: h, children: t }
  );
}
function us(e) {
  for (
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [],
      r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [],
      n = 0;
    n < e.length;
    n++
  ) {
    var o = e[n];
    if (o.type === "text") r.push(Pr({ children: [o], className: Xd(new Set(t)) }));
    else if (o.children) {
      var l = t.concat(o.properties.className);
      us(o.children, l).forEach(function (i) {
        return r.push(i);
      });
    }
  }
  return r;
}
function pp(e, t, r, n, o, l, i, u, s) {
  var c,
    p = us(e.value),
    g = [],
    h = -1,
    d = 0;
  function m(x, w) {
    var k = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
    return Pr({
      children: x,
      lineNumber: w,
      lineNumberStyle: u,
      largestLineNumber: i,
      showInlineLineNumbers: o,
      lineProps: r,
      className: k,
      showLineNumbers: n,
      wrapLongLines: s,
    });
  }
  function f(x, w) {
    if (n && w && o) {
      var k = ss(u, w, i);
      x.unshift(is(w, k));
    }
    return x;
  }
  function v(x, w) {
    var k = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
    return t || k.length > 0 ? m(x, w, k) : f(x, w);
  }
  for (
    var b = function () {
      var x = p[d],
        w = x.children[0].value,
        k = sp(w);
      if (k) {
        var S = w.split(`
`);
        S.forEach(function (O, R) {
          var F = n && g.length + l,
            L = {
              type: "text",
              value: "".concat(
                O,
                `
`
              ),
            };
          if (R === 0) {
            var T = p.slice(h + 1, d).concat(Pr({ children: [L], className: x.properties.className })),
              Z = v(T, F);
            g.push(Z);
          } else if (R === S.length - 1) {
            var D = p[d + 1] && p[d + 1].children && p[d + 1].children[0],
              M = { type: "text", value: "".concat(O) };
            if (D) {
              var H = Pr({ children: [M], className: x.properties.className });
              p.splice(d + 1, 0, H);
            } else {
              var P = [M],
                $ = v(P, F, x.properties.className);
              g.push($);
            }
          } else {
            var j = [L],
              Y = v(j, F, x.properties.className);
            g.push(Y);
          }
        }),
          (h = d);
      }
      d++;
    };
    d < p.length;

  )
    b();
  if (h !== p.length - 1) {
    var C = p.slice(h + 1, p.length);
    if (C && C.length) {
      var y = n && g.length + l,
        E = v(C, y);
      g.push(E);
    }
  }
  return t ? g : (c = []).concat.apply(c, g);
}
function fp(e) {
  var t = e.rows,
    r = e.stylesheet,
    n = e.useInlineStyles;
  return t.map(function (o, l) {
    return za({ node: o, stylesheet: r, useInlineStyles: n, key: "code-segement".concat(l) });
  });
}
function cs(e) {
  return e && typeof e.highlightAuto < "u";
}
function mp(e) {
  var t = e.astGenerator,
    r = e.language,
    n = e.code,
    o = e.defaultCodeValue;
  if (cs(t)) {
    var l = op(t, r);
    return r === "text" ? { value: o, language: "text" } : l ? t.highlight(r, n) : t.highlightAuto(n);
  }
  try {
    return r && r !== "text" ? { value: t.highlight(n, r) } : { value: o };
  } catch {
    return { value: o };
  }
}
function gp(e, t) {
  return function (r) {
    var n = r.language,
      o = r.children,
      l = r.style,
      i = l === void 0 ? t : l,
      u = r.customStyle,
      s = u === void 0 ? {} : u,
      c = r.codeTagProps,
      p =
        c === void 0
          ? {
              className: n ? "language-".concat(n) : void 0,
              style: Ke(Ke({}, i['code[class*="language-"]']), i['code[class*="language-'.concat(n, '"]')]),
            }
          : c,
      g = r.useInlineStyles,
      h = g === void 0 ? !0 : g,
      d = r.showLineNumbers,
      m = d === void 0 ? !1 : d,
      f = r.showInlineLineNumbers,
      v = f === void 0 ? !0 : f,
      b = r.startingLineNumber,
      C = b === void 0 ? 1 : b,
      y = r.lineNumberContainerStyle,
      E = r.lineNumberStyle,
      x = E === void 0 ? {} : E,
      w = r.wrapLines,
      k = r.wrapLongLines,
      S = k === void 0 ? !1 : k,
      O = r.lineProps,
      R = O === void 0 ? {} : O,
      F = r.renderer,
      L = r.PreTag,
      T = L === void 0 ? "pre" : L,
      Z = r.CodeTag,
      D = Z === void 0 ? "code" : Z,
      M = r.code,
      H = M === void 0 ? (Array.isArray(o) ? o[0] : o) || "" : M,
      P = r.astGenerator,
      $ = Wd(r, lp);
    P = P || e;
    var j = m
        ? a.createElement(cp, {
            containerStyle: y,
            codeStyle: p.style || {},
            numberStyle: x,
            startingLineNumber: C,
            codeString: H,
          })
        : null,
      Y = i.hljs || i['pre[class*="language-"]'] || { backgroundColor: "#fff" },
      re = cs(P) ? "hljs" : "prismjs",
      G = h
        ? Object.assign({}, $, { style: Object.assign({}, Y, s) })
        : Object.assign({}, $, {
            className: $.className ? "".concat(re, " ").concat($.className) : re,
            style: Object.assign({}, s),
          });
    if (
      (S
        ? (p.style = Ke(Ke({}, p.style), {}, { whiteSpace: "pre-wrap" }))
        : (p.style = Ke(Ke({}, p.style), {}, { whiteSpace: "pre" })),
      !P)
    )
      return a.createElement(T, G, j, a.createElement(D, p, H));
    ((w === void 0 && F) || S) && (w = !0), (F = F || fp);
    var J = [{ type: "text", value: H }],
      I = mp({ astGenerator: P, language: n, code: H, defaultCodeValue: J });
    I.language === null && (I.value = J);
    var V = I.value.length + C,
      q = pp(I, w, R, m, v, C, V, x, S);
    return a.createElement(T, G, a.createElement(D, p, !v && j, F({ rows: q, stylesheet: i, useInlineStyles: h })));
  };
}
var qa = ke(vd()),
  Ua = gp(qa.default, {});
Ua.registerLanguage = function (e, t) {
  return qa.default.register(t);
};
Ua.alias = function (e, t) {
  return qa.default.alias(e, t);
};
var Le = Ua,
  hp = _.div(({ theme: e }) => ({
    position: "absolute",
    bottom: 0,
    right: 0,
    maxWidth: "100%",
    display: "flex",
    background: e.background.content,
    zIndex: 1,
  })),
  ds = _.button(
    ({ theme: e }) => ({
      margin: 0,
      border: "0 none",
      padding: "4px 10px",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      color: e.color.defaultText,
      background: e.background.content,
      fontSize: 12,
      lineHeight: "16px",
      fontFamily: e.typography.fonts.base,
      fontWeight: e.typography.weight.bold,
      borderTop: `1px solid ${e.appBorderColor}`,
      borderLeft: `1px solid ${e.appBorderColor}`,
      marginLeft: -1,
      borderRadius: "4px 0 0 0",
      "&:not(:last-child)": { borderRight: `1px solid ${e.appBorderColor}` },
      "& + *": { borderLeft: `1px solid ${e.appBorderColor}`, borderRadius: 0 },
      "&:focus": { boxShadow: `${e.color.secondary} 0 -3px 0 0 inset`, outline: "0 none" },
    }),
    ({ disabled: e }) => e && { cursor: "not-allowed", opacity: 0.5 }
  );
ds.displayName = "ActionButton";
var Wa = ({ actionItems: e, ...t }) =>
    a.createElement(
      hp,
      { ...t },
      e.map(({ title: r, className: n, onClick: o, disabled: l }, i) =>
        a.createElement(ds, { key: i, className: n, onClick: o, disabled: l }, r)
      )
    ),
  yp = A.lazy(() =>
    tt(
      () => import("./GlobalScrollAreaStyles-XIHNDKUY-15efffa7.js"),
      [
        "./GlobalScrollAreaStyles-XIHNDKUY-15efffa7.js",
        "./index-ebeaab24.js",
        "./iframe-010eedeb.js",
        "./_getPrototype-0b33db91.js",
        "./chunk-4NMOSTKD-82fbb5f2.js",
        "./index-d475d2ea.js",
        "./index-d37d4223.js",
        "./index-356e4a49.js",
      ],
      import.meta.url
    )
  ),
  bp = A.lazy(() =>
    tt(
      () => import("./OverlayScrollbars-VAV6LJAB-ef8df25d.js"),
      [
        "./OverlayScrollbars-VAV6LJAB-ef8df25d.js",
        "./index-ebeaab24.js",
        "./iframe-010eedeb.js",
        "./_getPrototype-0b33db91.js",
        "./chunk-4NMOSTKD-82fbb5f2.js",
        "./index-d475d2ea.js",
        "./index-d37d4223.js",
        "./index-356e4a49.js",
      ],
      import.meta.url
    )
  ),
  vp = ({ horizontal: e, vertical: t, ...r }) =>
    a.createElement(
      A.Suspense,
      { fallback: a.createElement("div", { ...r }) },
      a.createElement(yp, null),
      a.createElement(bp, { options: { scrollbars: { autoHide: "leave" } }, ...r })
    ),
  pn = _(vp)(
    ({ vertical: e }) => (e ? { overflowY: "auto", height: "100%" } : { overflowY: "hidden" }),
    ({ horizontal: e }) => (e ? { overflowX: "auto", width: "100%" } : { overflowX: "hidden" })
  );
pn.defaultProps = { horizontal: !1, vertical: !1 };
var { navigator: Mr, document: nr, window: Ep } = he;
Le.registerLanguage("jsextra", Dd);
Le.registerLanguage("jsx", kd);
Le.registerLanguage("json", Md);
Le.registerLanguage("yml", Pd);
Le.registerLanguage("md", jd);
Le.registerLanguage("bash", Od);
Le.registerLanguage("css", Fd);
Le.registerLanguage("html", Zd);
Le.registerLanguage("tsx", zd);
Le.registerLanguage("typescript", Ud);
Le.registerLanguage("graphql", $d);
var xp = Ot(2)((e) => Object.entries(e.code || {}).reduce((t, [r, n]) => ({ ...t, [`* .${r}`]: n }), {})),
  Ap = ps();
function ps() {
  return Mr != null && Mr.clipboard
    ? (e) => Mr.clipboard.writeText(e)
    : async (e) => {
        let t = nr.createElement("TEXTAREA"),
          r = nr.activeElement;
        (t.value = e), nr.body.appendChild(t), t.select(), nr.execCommand("copy"), nr.body.removeChild(t), r.focus();
      };
}
var wp = _.div(
    ({ theme: e }) => ({ position: "relative", overflow: "hidden", color: e.color.defaultText }),
    ({ theme: e, bordered: t }) =>
      t
        ? { border: `1px solid ${e.appBorderColor}`, borderRadius: e.borderRadius, background: e.background.content }
        : {},
    ({ showLineNumbers: e }) =>
      e ? { ".react-syntax-highlighter-line-number::before": { content: "attr(data-line-number)" } } : {}
  ),
  Cp = ({ children: e, className: t }) => a.createElement(pn, { horizontal: !0, vertical: !0, className: t }, e),
  Sp = _(Cp)({ position: "relative" }, ({ theme: e }) => xp(e)),
  kp = _.pre(({ theme: e, padded: t }) => ({
    display: "flex",
    justifyContent: "flex-start",
    margin: 0,
    padding: t ? e.layoutMargin : 0,
  })),
  _p = _.div(({ theme: e }) => ({ flex: 1, paddingLeft: 2, paddingRight: e.layoutMargin, opacity: 1 })),
  fs = (e) => {
    let t = [...e.children],
      r = t[0],
      n = r.children[0].value,
      o = {
        ...r,
        children: [],
        properties: { ...r.properties, "data-line-number": n, style: { ...r.properties.style, userSelect: "auto" } },
      };
    return (t[0] = o), { ...e, children: t };
  },
  Op = ({ rows: e, stylesheet: t, useInlineStyles: r }) =>
    e.map((n, o) => za({ node: fs(n), stylesheet: t, useInlineStyles: r, key: `code-segement${o}` })),
  Rp = (e, t) => (t ? (e ? ({ rows: r, ...n }) => e({ rows: r.map((o) => fs(o)), ...n }) : Op) : e),
  ms = ({
    children: e,
    language: t = "jsx",
    copyable: r = !1,
    bordered: n = !1,
    padded: o = !1,
    format: l = !0,
    formatter: i = null,
    className: u = null,
    showLineNumbers: s = !1,
    ...c
  }) => {
    if (typeof e != "string" || !e.trim()) return null;
    let p = i ? i(l, e) : e.trim(),
      [g, h] = A.useState(!1),
      d = A.useCallback(
        (f) => {
          f.preventDefault(),
            Ap(p)
              .then(() => {
                h(!0), Ep.setTimeout(() => h(!1), 1500);
              })
              .catch(Cd.error);
        },
        [p]
      ),
      m = Rp(c.renderer, s);
    return a.createElement(
      wp,
      { bordered: n, padded: o, showLineNumbers: s, className: u },
      a.createElement(
        Sp,
        null,
        a.createElement(
          Le,
          {
            padded: o || n,
            language: t,
            showLineNumbers: s,
            showInlineLineNumbers: s,
            useInlineStyles: !1,
            PreTag: kp,
            CodeTag: _p,
            lineNumberContainerStyle: {},
            ...c,
            renderer: m,
          },
          p
        )
      ),
      r ? a.createElement(Wa, { actionItems: [{ title: g ? "Copied" : "Copy", onClick: d }] }) : null
    );
  },
  q8 = ms,
  Fp = N({
    "../../node_modules/react-fast-compare/index.js"(e, t) {
      var r = typeof Element < "u",
        n = typeof Map == "function",
        o = typeof Set == "function",
        l = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
      function i(u, s) {
        if (u === s) return !0;
        if (u && s && typeof u == "object" && typeof s == "object") {
          if (u.constructor !== s.constructor) return !1;
          var c, p, g;
          if (Array.isArray(u)) {
            if (((c = u.length), c != s.length)) return !1;
            for (p = c; p-- !== 0; ) if (!i(u[p], s[p])) return !1;
            return !0;
          }
          var h;
          if (n && u instanceof Map && s instanceof Map) {
            if (u.size !== s.size) return !1;
            for (h = u.entries(); !(p = h.next()).done; ) if (!s.has(p.value[0])) return !1;
            for (h = u.entries(); !(p = h.next()).done; ) if (!i(p.value[1], s.get(p.value[0]))) return !1;
            return !0;
          }
          if (o && u instanceof Set && s instanceof Set) {
            if (u.size !== s.size) return !1;
            for (h = u.entries(); !(p = h.next()).done; ) if (!s.has(p.value[0])) return !1;
            return !0;
          }
          if (l && ArrayBuffer.isView(u) && ArrayBuffer.isView(s)) {
            if (((c = u.length), c != s.length)) return !1;
            for (p = c; p-- !== 0; ) if (u[p] !== s[p]) return !1;
            return !0;
          }
          if (u.constructor === RegExp) return u.source === s.source && u.flags === s.flags;
          if (
            u.valueOf !== Object.prototype.valueOf &&
            typeof u.valueOf == "function" &&
            typeof s.valueOf == "function"
          )
            return u.valueOf() === s.valueOf();
          if (
            u.toString !== Object.prototype.toString &&
            typeof u.toString == "function" &&
            typeof s.toString == "function"
          )
            return u.toString() === s.toString();
          if (((g = Object.keys(u)), (c = g.length), c !== Object.keys(s).length)) return !1;
          for (p = c; p-- !== 0; ) if (!Object.prototype.hasOwnProperty.call(s, g[p])) return !1;
          if (r && u instanceof Element) return !1;
          for (p = c; p-- !== 0; )
            if (!((g[p] === "_owner" || g[p] === "__v" || g[p] === "__o") && u.$$typeof) && !i(u[g[p]], s[g[p]]))
              return !1;
          return !0;
        }
        return u !== u && s !== s;
      }
      t.exports = function (u, s) {
        try {
          return i(u, s);
        } catch (c) {
          if ((c.message || "").match(/stack|recursion/i))
            return console.warn("react-fast-compare cannot handle circular refs"), !1;
          throw c;
        }
      };
    },
  }),
  pl = function (e) {
    return e.reduce(function (t, r) {
      var n = r[0],
        o = r[1];
      return (t[n] = o), t;
    }, {});
  },
  fl = typeof window < "u" && window.document && window.document.createElement ? A.useLayoutEffect : A.useEffect,
  Ee = "top",
  Te = "bottom",
  De = "right",
  xe = "left",
  fn = "auto",
  Sr = [Ee, Te, De, xe],
  Nt = "start",
  mr = "end",
  Tp = "clippingParents",
  gs = "viewport",
  ar = "popper",
  Dp = "reference",
  ml = Sr.reduce(function (e, t) {
    return e.concat([t + "-" + Nt, t + "-" + mr]);
  }, []),
  hs = [].concat(Sr, [fn]).reduce(function (e, t) {
    return e.concat([t, t + "-" + Nt, t + "-" + mr]);
  }, []),
  Lp = "beforeRead",
  Mp = "read",
  Bp = "afterRead",
  $p = "beforeMain",
  Ip = "main",
  Zp = "afterMain",
  Hp = "beforeWrite",
  jp = "write",
  Np = "afterWrite",
  Pp = [Lp, Mp, Bp, $p, Ip, Zp, Hp, jp, Np];
function rt(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Se(e) {
  if (e == null) return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return (t && t.defaultView) || window;
  }
  return e;
}
function _t(e) {
  var t = Se(e).Element;
  return e instanceof t || e instanceof Element;
}
function Fe(e) {
  var t = Se(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Ga(e) {
  if (typeof ShadowRoot > "u") return !1;
  var t = Se(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Vp(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function (r) {
    var n = t.styles[r] || {},
      o = t.attributes[r] || {},
      l = t.elements[r];
    !Fe(l) ||
      !rt(l) ||
      (Object.assign(l.style, n),
      Object.keys(o).forEach(function (i) {
        var u = o[i];
        u === !1 ? l.removeAttribute(i) : l.setAttribute(i, u === !0 ? "" : u);
      }));
  });
}
function zp(e) {
  var t = e.state,
    r = {
      popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" },
      arrow: { position: "absolute" },
      reference: {},
    };
  return (
    Object.assign(t.elements.popper.style, r.popper),
    (t.styles = r),
    t.elements.arrow && Object.assign(t.elements.arrow.style, r.arrow),
    function () {
      Object.keys(t.elements).forEach(function (n) {
        var o = t.elements[n],
          l = t.attributes[n] || {},
          i = Object.keys(t.styles.hasOwnProperty(n) ? t.styles[n] : r[n]),
          u = i.reduce(function (s, c) {
            return (s[c] = ""), s;
          }, {});
        !Fe(o) ||
          !rt(o) ||
          (Object.assign(o.style, u),
          Object.keys(l).forEach(function (s) {
            o.removeAttribute(s);
          }));
      });
    }
  );
}
var qp = { name: "applyStyles", enabled: !0, phase: "write", fn: Vp, effect: zp, requires: ["computeStyles"] };
function et(e) {
  return e.split("-")[0];
}
var St = Math.max,
  Xr = Math.min,
  Pt = Math.round;
function sa() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands)
    ? e.brands
        .map(function (t) {
          return t.brand + "/" + t.version;
        })
        .join(" ")
    : navigator.userAgent;
}
function ys() {
  return !/^((?!chrome|android).)*safari/i.test(sa());
}
function Vt(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  var n = e.getBoundingClientRect(),
    o = 1,
    l = 1;
  t &&
    Fe(e) &&
    ((o = (e.offsetWidth > 0 && Pt(n.width) / e.offsetWidth) || 1),
    (l = (e.offsetHeight > 0 && Pt(n.height) / e.offsetHeight) || 1));
  var i = _t(e) ? Se(e) : window,
    u = i.visualViewport,
    s = !ys() && r,
    c = (n.left + (s && u ? u.offsetLeft : 0)) / o,
    p = (n.top + (s && u ? u.offsetTop : 0)) / l,
    g = n.width / o,
    h = n.height / l;
  return { width: g, height: h, top: p, right: c + g, bottom: p + h, left: c, x: c, y: p };
}
function Ya(e) {
  var t = Vt(e),
    r = e.offsetWidth,
    n = e.offsetHeight;
  return (
    Math.abs(t.width - r) <= 1 && (r = t.width),
    Math.abs(t.height - n) <= 1 && (n = t.height),
    { x: e.offsetLeft, y: e.offsetTop, width: r, height: n }
  );
}
function bs(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (r && Ga(r)) {
    var n = t;
    do {
      if (n && e.isSameNode(n)) return !0;
      n = n.parentNode || n.host;
    } while (n);
  }
  return !1;
}
function st(e) {
  return Se(e).getComputedStyle(e);
}
function Up(e) {
  return ["table", "td", "th"].indexOf(rt(e)) >= 0;
}
function ht(e) {
  return ((_t(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function mn(e) {
  return rt(e) === "html" ? e : e.assignedSlot || e.parentNode || (Ga(e) ? e.host : null) || ht(e);
}
function gl(e) {
  return !Fe(e) || st(e).position === "fixed" ? null : e.offsetParent;
}
function Wp(e) {
  var t = /firefox/i.test(sa()),
    r = /Trident/i.test(sa());
  if (r && Fe(e)) {
    var n = st(e);
    if (n.position === "fixed") return null;
  }
  var o = mn(e);
  for (Ga(o) && (o = o.host); Fe(o) && ["html", "body"].indexOf(rt(o)) < 0; ) {
    var l = st(o);
    if (
      l.transform !== "none" ||
      l.perspective !== "none" ||
      l.contain === "paint" ||
      ["transform", "perspective"].indexOf(l.willChange) !== -1 ||
      (t && l.willChange === "filter") ||
      (t && l.filter && l.filter !== "none")
    )
      return o;
    o = o.parentNode;
  }
  return null;
}
function kr(e) {
  for (var t = Se(e), r = gl(e); r && Up(r) && st(r).position === "static"; ) r = gl(r);
  return r && (rt(r) === "html" || (rt(r) === "body" && st(r).position === "static")) ? t : r || Wp(e) || t;
}
function Ka(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function sr(e, t, r) {
  return St(e, Xr(t, r));
}
function Gp(e, t, r) {
  var n = sr(e, t, r);
  return n > r ? r : n;
}
function vs() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function Es(e) {
  return Object.assign({}, vs(), e);
}
function xs(e, t) {
  return t.reduce(function (r, n) {
    return (r[n] = e), r;
  }, {});
}
var Yp = function (e, t) {
  return (
    (e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e),
    Es(typeof e != "number" ? e : xs(e, Sr))
  );
};
function Kp(e) {
  var t,
    r = e.state,
    n = e.name,
    o = e.options,
    l = r.elements.arrow,
    i = r.modifiersData.popperOffsets,
    u = et(r.placement),
    s = Ka(u),
    c = [xe, De].indexOf(u) >= 0,
    p = c ? "height" : "width";
  if (!(!l || !i)) {
    var g = Yp(o.padding, r),
      h = Ya(l),
      d = s === "y" ? Ee : xe,
      m = s === "y" ? Te : De,
      f = r.rects.reference[p] + r.rects.reference[s] - i[s] - r.rects.popper[p],
      v = i[s] - r.rects.reference[s],
      b = kr(l),
      C = b ? (s === "y" ? b.clientHeight || 0 : b.clientWidth || 0) : 0,
      y = f / 2 - v / 2,
      E = g[d],
      x = C - h[p] - g[m],
      w = C / 2 - h[p] / 2 + y,
      k = sr(E, w, x),
      S = s;
    r.modifiersData[n] = ((t = {}), (t[S] = k), (t.centerOffset = k - w), t);
  }
}
function Jp(e) {
  var t = e.state,
    r = e.options,
    n = r.element,
    o = n === void 0 ? "[data-popper-arrow]" : n;
  if (o != null && !(typeof o == "string" && ((o = t.elements.popper.querySelector(o)), !o))) {
    if (!bs(t.elements.popper, o)) return;
    t.elements.arrow = o;
  }
}
var Xp = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: Kp,
  effect: Jp,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"],
};
function zt(e) {
  return e.split("-")[1];
}
var Qp = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function e2(e, t) {
  var r = e.x,
    n = e.y,
    o = t.devicePixelRatio || 1;
  return { x: Pt(r * o) / o || 0, y: Pt(n * o) / o || 0 };
}
function hl(e) {
  var t,
    r = e.popper,
    n = e.popperRect,
    o = e.placement,
    l = e.variation,
    i = e.offsets,
    u = e.position,
    s = e.gpuAcceleration,
    c = e.adaptive,
    p = e.roundOffsets,
    g = e.isFixed,
    h = i.x,
    d = h === void 0 ? 0 : h,
    m = i.y,
    f = m === void 0 ? 0 : m,
    v = typeof p == "function" ? p({ x: d, y: f }) : { x: d, y: f };
  (d = v.x), (f = v.y);
  var b = i.hasOwnProperty("x"),
    C = i.hasOwnProperty("y"),
    y = xe,
    E = Ee,
    x = window;
  if (c) {
    var w = kr(r),
      k = "clientHeight",
      S = "clientWidth";
    if (
      (w === Se(r) &&
        ((w = ht(r)), st(w).position !== "static" && u === "absolute" && ((k = "scrollHeight"), (S = "scrollWidth"))),
      (w = w),
      o === Ee || ((o === xe || o === De) && l === mr))
    ) {
      E = Te;
      var O = g && w === x && x.visualViewport ? x.visualViewport.height : w[k];
      (f -= O - n.height), (f *= s ? 1 : -1);
    }
    if (o === xe || ((o === Ee || o === Te) && l === mr)) {
      y = De;
      var R = g && w === x && x.visualViewport ? x.visualViewport.width : w[S];
      (d -= R - n.width), (d *= s ? 1 : -1);
    }
  }
  var F = Object.assign({ position: u }, c && Qp),
    L = p === !0 ? e2({ x: d, y: f }, Se(r)) : { x: d, y: f };
  if (((d = L.x), (f = L.y), s)) {
    var T;
    return Object.assign(
      {},
      F,
      ((T = {}),
      (T[E] = C ? "0" : ""),
      (T[y] = b ? "0" : ""),
      (T.transform =
        (x.devicePixelRatio || 1) <= 1
          ? "translate(" + d + "px, " + f + "px)"
          : "translate3d(" + d + "px, " + f + "px, 0)"),
      T)
    );
  }
  return Object.assign(
    {},
    F,
    ((t = {}), (t[E] = C ? f + "px" : ""), (t[y] = b ? d + "px" : ""), (t.transform = ""), t)
  );
}
function t2(e) {
  var t = e.state,
    r = e.options,
    n = r.gpuAcceleration,
    o = n === void 0 ? !0 : n,
    l = r.adaptive,
    i = l === void 0 ? !0 : l,
    u = r.roundOffsets,
    s = u === void 0 ? !0 : u,
    c = {
      placement: et(t.placement),
      variation: zt(t.placement),
      popper: t.elements.popper,
      popperRect: t.rects.popper,
      gpuAcceleration: o,
      isFixed: t.options.strategy === "fixed",
    };
  t.modifiersData.popperOffsets != null &&
    (t.styles.popper = Object.assign(
      {},
      t.styles.popper,
      hl(
        Object.assign({}, c, {
          offsets: t.modifiersData.popperOffsets,
          position: t.options.strategy,
          adaptive: i,
          roundOffsets: s,
        })
      )
    )),
    t.modifiersData.arrow != null &&
      (t.styles.arrow = Object.assign(
        {},
        t.styles.arrow,
        hl(
          Object.assign({}, c, { offsets: t.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: s })
        )
      )),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement }));
}
var r2 = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: t2, data: {} },
  Br = { passive: !0 };
function n2(e) {
  var t = e.state,
    r = e.instance,
    n = e.options,
    o = n.scroll,
    l = o === void 0 ? !0 : o,
    i = n.resize,
    u = i === void 0 ? !0 : i,
    s = Se(t.elements.popper),
    c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return (
    l &&
      c.forEach(function (p) {
        p.addEventListener("scroll", r.update, Br);
      }),
    u && s.addEventListener("resize", r.update, Br),
    function () {
      l &&
        c.forEach(function (p) {
          p.removeEventListener("scroll", r.update, Br);
        }),
        u && s.removeEventListener("resize", r.update, Br);
    }
  );
}
var a2 = { name: "eventListeners", enabled: !0, phase: "write", fn: function () {}, effect: n2, data: {} },
  o2 = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Vr(e) {
  return e.replace(/left|right|bottom|top/g, function (t) {
    return o2[t];
  });
}
var l2 = { start: "end", end: "start" };
function yl(e) {
  return e.replace(/start|end/g, function (t) {
    return l2[t];
  });
}
function Ja(e) {
  var t = Se(e),
    r = t.pageXOffset,
    n = t.pageYOffset;
  return { scrollLeft: r, scrollTop: n };
}
function Xa(e) {
  return Vt(ht(e)).left + Ja(e).scrollLeft;
}
function i2(e, t) {
  var r = Se(e),
    n = ht(e),
    o = r.visualViewport,
    l = n.clientWidth,
    i = n.clientHeight,
    u = 0,
    s = 0;
  if (o) {
    (l = o.width), (i = o.height);
    var c = ys();
    (c || (!c && t === "fixed")) && ((u = o.offsetLeft), (s = o.offsetTop));
  }
  return { width: l, height: i, x: u + Xa(e), y: s };
}
function s2(e) {
  var t,
    r = ht(e),
    n = Ja(e),
    o = (t = e.ownerDocument) == null ? void 0 : t.body,
    l = St(r.scrollWidth, r.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0),
    i = St(r.scrollHeight, r.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0),
    u = -n.scrollLeft + Xa(e),
    s = -n.scrollTop;
  return (
    st(o || r).direction === "rtl" && (u += St(r.clientWidth, o ? o.clientWidth : 0) - l),
    { width: l, height: i, x: u, y: s }
  );
}
function Qa(e) {
  var t = st(e),
    r = t.overflow,
    n = t.overflowX,
    o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + o + n);
}
function As(e) {
  return ["html", "body", "#document"].indexOf(rt(e)) >= 0 ? e.ownerDocument.body : Fe(e) && Qa(e) ? e : As(mn(e));
}
function ur(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = As(e),
    o = n === ((r = e.ownerDocument) == null ? void 0 : r.body),
    l = Se(n),
    i = o ? [l].concat(l.visualViewport || [], Qa(n) ? n : []) : n,
    u = t.concat(i);
  return o ? u : u.concat(ur(mn(i)));
}
function ua(e) {
  return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height });
}
function u2(e, t) {
  var r = Vt(e, !1, t === "fixed");
  return (
    (r.top = r.top + e.clientTop),
    (r.left = r.left + e.clientLeft),
    (r.bottom = r.top + e.clientHeight),
    (r.right = r.left + e.clientWidth),
    (r.width = e.clientWidth),
    (r.height = e.clientHeight),
    (r.x = r.left),
    (r.y = r.top),
    r
  );
}
function bl(e, t, r) {
  return t === gs ? ua(i2(e, r)) : _t(t) ? u2(t, r) : ua(s2(ht(e)));
}
function c2(e) {
  var t = ur(mn(e)),
    r = ["absolute", "fixed"].indexOf(st(e).position) >= 0,
    n = r && Fe(e) ? kr(e) : e;
  return _t(n)
    ? t.filter(function (o) {
        return _t(o) && bs(o, n) && rt(o) !== "body";
      })
    : [];
}
function d2(e, t, r, n) {
  var o = t === "clippingParents" ? c2(e) : [].concat(t),
    l = [].concat(o, [r]),
    i = l[0],
    u = l.reduce(function (s, c) {
      var p = bl(e, c, n);
      return (
        (s.top = St(p.top, s.top)),
        (s.right = Xr(p.right, s.right)),
        (s.bottom = Xr(p.bottom, s.bottom)),
        (s.left = St(p.left, s.left)),
        s
      );
    }, bl(e, i, n));
  return (u.width = u.right - u.left), (u.height = u.bottom - u.top), (u.x = u.left), (u.y = u.top), u;
}
function ws(e) {
  var t = e.reference,
    r = e.element,
    n = e.placement,
    o = n ? et(n) : null,
    l = n ? zt(n) : null,
    i = t.x + t.width / 2 - r.width / 2,
    u = t.y + t.height / 2 - r.height / 2,
    s;
  switch (o) {
    case Ee:
      s = { x: i, y: t.y - r.height };
      break;
    case Te:
      s = { x: i, y: t.y + t.height };
      break;
    case De:
      s = { x: t.x + t.width, y: u };
      break;
    case xe:
      s = { x: t.x - r.width, y: u };
      break;
    default:
      s = { x: t.x, y: t.y };
  }
  var c = o ? Ka(o) : null;
  if (c != null) {
    var p = c === "y" ? "height" : "width";
    switch (l) {
      case Nt:
        s[c] = s[c] - (t[p] / 2 - r[p] / 2);
        break;
      case mr:
        s[c] = s[c] + (t[p] / 2 - r[p] / 2);
        break;
    }
  }
  return s;
}
function gr(e, t) {
  t === void 0 && (t = {});
  var r = t,
    n = r.placement,
    o = n === void 0 ? e.placement : n,
    l = r.strategy,
    i = l === void 0 ? e.strategy : l,
    u = r.boundary,
    s = u === void 0 ? Tp : u,
    c = r.rootBoundary,
    p = c === void 0 ? gs : c,
    g = r.elementContext,
    h = g === void 0 ? ar : g,
    d = r.altBoundary,
    m = d === void 0 ? !1 : d,
    f = r.padding,
    v = f === void 0 ? 0 : f,
    b = Es(typeof v != "number" ? v : xs(v, Sr)),
    C = h === ar ? Dp : ar,
    y = e.rects.popper,
    E = e.elements[m ? C : h],
    x = d2(_t(E) ? E : E.contextElement || ht(e.elements.popper), s, p, i),
    w = Vt(e.elements.reference),
    k = ws({ reference: w, element: y, strategy: "absolute", placement: o }),
    S = ua(Object.assign({}, y, k)),
    O = h === ar ? S : w,
    R = {
      top: x.top - O.top + b.top,
      bottom: O.bottom - x.bottom + b.bottom,
      left: x.left - O.left + b.left,
      right: O.right - x.right + b.right,
    },
    F = e.modifiersData.offset;
  if (h === ar && F) {
    var L = F[o];
    Object.keys(R).forEach(function (T) {
      var Z = [De, Te].indexOf(T) >= 0 ? 1 : -1,
        D = [Ee, Te].indexOf(T) >= 0 ? "y" : "x";
      R[T] += L[D] * Z;
    });
  }
  return R;
}
function p2(e, t) {
  t === void 0 && (t = {});
  var r = t,
    n = r.placement,
    o = r.boundary,
    l = r.rootBoundary,
    i = r.padding,
    u = r.flipVariations,
    s = r.allowedAutoPlacements,
    c = s === void 0 ? hs : s,
    p = zt(n),
    g = p
      ? u
        ? ml
        : ml.filter(function (m) {
            return zt(m) === p;
          })
      : Sr,
    h = g.filter(function (m) {
      return c.indexOf(m) >= 0;
    });
  h.length === 0 && (h = g);
  var d = h.reduce(function (m, f) {
    return (m[f] = gr(e, { placement: f, boundary: o, rootBoundary: l, padding: i })[et(f)]), m;
  }, {});
  return Object.keys(d).sort(function (m, f) {
    return d[m] - d[f];
  });
}
function f2(e) {
  if (et(e) === fn) return [];
  var t = Vr(e);
  return [yl(e), t, yl(t)];
}
function m2(e) {
  var t = e.state,
    r = e.options,
    n = e.name;
  if (!t.modifiersData[n]._skip) {
    for (
      var o = r.mainAxis,
        l = o === void 0 ? !0 : o,
        i = r.altAxis,
        u = i === void 0 ? !0 : i,
        s = r.fallbackPlacements,
        c = r.padding,
        p = r.boundary,
        g = r.rootBoundary,
        h = r.altBoundary,
        d = r.flipVariations,
        m = d === void 0 ? !0 : d,
        f = r.allowedAutoPlacements,
        v = t.options.placement,
        b = et(v),
        C = b === v,
        y = s || (C || !m ? [Vr(v)] : f2(v)),
        E = [v].concat(y).reduce(function (J, I) {
          return J.concat(
            et(I) === fn
              ? p2(t, {
                  placement: I,
                  boundary: p,
                  rootBoundary: g,
                  padding: c,
                  flipVariations: m,
                  allowedAutoPlacements: f,
                })
              : I
          );
        }, []),
        x = t.rects.reference,
        w = t.rects.popper,
        k = new Map(),
        S = !0,
        O = E[0],
        R = 0;
      R < E.length;
      R++
    ) {
      var F = E[R],
        L = et(F),
        T = zt(F) === Nt,
        Z = [Ee, Te].indexOf(L) >= 0,
        D = Z ? "width" : "height",
        M = gr(t, { placement: F, boundary: p, rootBoundary: g, altBoundary: h, padding: c }),
        H = Z ? (T ? De : xe) : T ? Te : Ee;
      x[D] > w[D] && (H = Vr(H));
      var P = Vr(H),
        $ = [];
      if (
        (l && $.push(M[L] <= 0),
        u && $.push(M[H] <= 0, M[P] <= 0),
        $.every(function (J) {
          return J;
        }))
      ) {
        (O = F), (S = !1);
        break;
      }
      k.set(F, $);
    }
    if (S)
      for (
        var j = m ? 3 : 1,
          Y = function (J) {
            var I = E.find(function (V) {
              var q = k.get(V);
              if (q)
                return q.slice(0, J).every(function (le) {
                  return le;
                });
            });
            if (I) return (O = I), "break";
          },
          re = j;
        re > 0;
        re--
      ) {
        var G = Y(re);
        if (G === "break") break;
      }
    t.placement !== O && ((t.modifiersData[n]._skip = !0), (t.placement = O), (t.reset = !0));
  }
}
var g2 = { name: "flip", enabled: !0, phase: "main", fn: m2, requiresIfExists: ["offset"], data: { _skip: !1 } };
function vl(e, t, r) {
  return (
    r === void 0 && (r = { x: 0, y: 0 }),
    {
      top: e.top - t.height - r.y,
      right: e.right - t.width + r.x,
      bottom: e.bottom - t.height + r.y,
      left: e.left - t.width - r.x,
    }
  );
}
function El(e) {
  return [Ee, De, Te, xe].some(function (t) {
    return e[t] >= 0;
  });
}
function h2(e) {
  var t = e.state,
    r = e.name,
    n = t.rects.reference,
    o = t.rects.popper,
    l = t.modifiersData.preventOverflow,
    i = gr(t, { elementContext: "reference" }),
    u = gr(t, { altBoundary: !0 }),
    s = vl(i, n),
    c = vl(u, o, l),
    p = El(s),
    g = El(c);
  (t.modifiersData[r] = {
    referenceClippingOffsets: s,
    popperEscapeOffsets: c,
    isReferenceHidden: p,
    hasPopperEscaped: g,
  }),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, {
      "data-popper-reference-hidden": p,
      "data-popper-escaped": g,
    }));
}
var y2 = { name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: h2 };
function b2(e, t, r) {
  var n = et(e),
    o = [xe, Ee].indexOf(n) >= 0 ? -1 : 1,
    l = typeof r == "function" ? r(Object.assign({}, t, { placement: e })) : r,
    i = l[0],
    u = l[1];
  return (i = i || 0), (u = (u || 0) * o), [xe, De].indexOf(n) >= 0 ? { x: u, y: i } : { x: i, y: u };
}
function v2(e) {
  var t = e.state,
    r = e.options,
    n = e.name,
    o = r.offset,
    l = o === void 0 ? [0, 0] : o,
    i = hs.reduce(function (p, g) {
      return (p[g] = b2(g, t.rects, l)), p;
    }, {}),
    u = i[t.placement],
    s = u.x,
    c = u.y;
  t.modifiersData.popperOffsets != null &&
    ((t.modifiersData.popperOffsets.x += s), (t.modifiersData.popperOffsets.y += c)),
    (t.modifiersData[n] = i);
}
var E2 = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: v2 };
function x2(e) {
  var t = e.state,
    r = e.name;
  t.modifiersData[r] = ws({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement,
  });
}
var A2 = { name: "popperOffsets", enabled: !0, phase: "read", fn: x2, data: {} };
function w2(e) {
  return e === "x" ? "y" : "x";
}
function C2(e) {
  var t = e.state,
    r = e.options,
    n = e.name,
    o = r.mainAxis,
    l = o === void 0 ? !0 : o,
    i = r.altAxis,
    u = i === void 0 ? !1 : i,
    s = r.boundary,
    c = r.rootBoundary,
    p = r.altBoundary,
    g = r.padding,
    h = r.tether,
    d = h === void 0 ? !0 : h,
    m = r.tetherOffset,
    f = m === void 0 ? 0 : m,
    v = gr(t, { boundary: s, rootBoundary: c, padding: g, altBoundary: p }),
    b = et(t.placement),
    C = zt(t.placement),
    y = !C,
    E = Ka(b),
    x = w2(E),
    w = t.modifiersData.popperOffsets,
    k = t.rects.reference,
    S = t.rects.popper,
    O = typeof f == "function" ? f(Object.assign({}, t.rects, { placement: t.placement })) : f,
    R = typeof O == "number" ? { mainAxis: O, altAxis: O } : Object.assign({ mainAxis: 0, altAxis: 0 }, O),
    F = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
    L = { x: 0, y: 0 };
  if (w) {
    if (l) {
      var T,
        Z = E === "y" ? Ee : xe,
        D = E === "y" ? Te : De,
        M = E === "y" ? "height" : "width",
        H = w[E],
        P = H + v[Z],
        $ = H - v[D],
        j = d ? -S[M] / 2 : 0,
        Y = C === Nt ? k[M] : S[M],
        re = C === Nt ? -S[M] : -k[M],
        G = t.elements.arrow,
        J = d && G ? Ya(G) : { width: 0, height: 0 },
        I = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : vs(),
        V = I[Z],
        q = I[D],
        le = sr(0, k[M], J[M]),
        fe = y ? k[M] / 2 - j - le - V - R.mainAxis : Y - le - V - R.mainAxis,
        nt = y ? -k[M] / 2 + j + le + q + R.mainAxis : re + le + q + R.mainAxis,
        Oe = t.elements.arrow && kr(t.elements.arrow),
        He = Oe ? (E === "y" ? Oe.clientTop || 0 : Oe.clientLeft || 0) : 0,
        B = (T = F == null ? void 0 : F[E]) != null ? T : 0,
        Be = H + fe - B - He,
        je = H + nt - B,
        yt = sr(d ? Xr(P, Be) : P, H, d ? St($, je) : $);
      (w[E] = yt), (L[E] = yt - H);
    }
    if (u) {
      var Ft,
        Ne = E === "x" ? Ee : xe,
        Or = E === "x" ? Te : De,
        me = w[x],
        bt = x === "y" ? "height" : "width",
        Pe = me + v[Ne],
        Tt = me - v[Or],
        Ve = [Ee, xe].indexOf(b) !== -1,
        Dt = (Ft = F == null ? void 0 : F[x]) != null ? Ft : 0,
        ze = Ve ? Pe : me - k[bt] - S[bt] - Dt + R.altAxis,
        de = Ve ? me + k[bt] + S[bt] - Dt - R.altAxis : Tt,
        $e = d && Ve ? Gp(ze, me, de) : sr(d ? ze : Pe, me, d ? de : Tt);
      (w[x] = $e), (L[x] = $e - me);
    }
    t.modifiersData[n] = L;
  }
}
var S2 = { name: "preventOverflow", enabled: !0, phase: "main", fn: C2, requiresIfExists: ["offset"] };
function k2(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function _2(e) {
  return e === Se(e) || !Fe(e) ? Ja(e) : k2(e);
}
function O2(e) {
  var t = e.getBoundingClientRect(),
    r = Pt(t.width) / e.offsetWidth || 1,
    n = Pt(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function R2(e, t, r) {
  r === void 0 && (r = !1);
  var n = Fe(t),
    o = Fe(t) && O2(t),
    l = ht(t),
    i = Vt(e, o, r),
    u = { scrollLeft: 0, scrollTop: 0 },
    s = { x: 0, y: 0 };
  return (
    (n || (!n && !r)) &&
      ((rt(t) !== "body" || Qa(l)) && (u = _2(t)),
      Fe(t) ? ((s = Vt(t, !0)), (s.x += t.clientLeft), (s.y += t.clientTop)) : l && (s.x = Xa(l))),
    { x: i.left + u.scrollLeft - s.x, y: i.top + u.scrollTop - s.y, width: i.width, height: i.height }
  );
}
function F2(e) {
  var t = new Map(),
    r = new Set(),
    n = [];
  e.forEach(function (l) {
    t.set(l.name, l);
  });
  function o(l) {
    r.add(l.name);
    var i = [].concat(l.requires || [], l.requiresIfExists || []);
    i.forEach(function (u) {
      if (!r.has(u)) {
        var s = t.get(u);
        s && o(s);
      }
    }),
      n.push(l);
  }
  return (
    e.forEach(function (l) {
      r.has(l.name) || o(l);
    }),
    n
  );
}
function T2(e) {
  var t = F2(e);
  return Pp.reduce(function (r, n) {
    return r.concat(
      t.filter(function (o) {
        return o.phase === n;
      })
    );
  }, []);
}
function D2(e) {
  var t;
  return function () {
    return (
      t ||
        (t = new Promise(function (r) {
          Promise.resolve().then(function () {
            (t = void 0), r(e());
          });
        })),
      t
    );
  };
}
function L2(e) {
  var t = e.reduce(function (r, n) {
    var o = r[n.name];
    return (
      (r[n.name] = o
        ? Object.assign({}, o, n, {
            options: Object.assign({}, o.options, n.options),
            data: Object.assign({}, o.data, n.data),
          })
        : n),
      r
    );
  }, {});
  return Object.keys(t).map(function (r) {
    return t[r];
  });
}
var xl = { placement: "bottom", modifiers: [], strategy: "absolute" };
function Al() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
  return !t.some(function (n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function M2(e) {
  e === void 0 && (e = {});
  var t = e,
    r = t.defaultModifiers,
    n = r === void 0 ? [] : r,
    o = t.defaultOptions,
    l = o === void 0 ? xl : o;
  return function (i, u, s) {
    s === void 0 && (s = l);
    var c = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, xl, l),
        modifiersData: {},
        elements: { reference: i, popper: u },
        attributes: {},
        styles: {},
      },
      p = [],
      g = !1,
      h = {
        state: c,
        setOptions: function (f) {
          var v = typeof f == "function" ? f(c.options) : f;
          m(),
            (c.options = Object.assign({}, l, c.options, v)),
            (c.scrollParents = {
              reference: _t(i) ? ur(i) : i.contextElement ? ur(i.contextElement) : [],
              popper: ur(u),
            });
          var b = T2(L2([].concat(n, c.options.modifiers)));
          return (
            (c.orderedModifiers = b.filter(function (C) {
              return C.enabled;
            })),
            d(),
            h.update()
          );
        },
        forceUpdate: function () {
          if (!g) {
            var f = c.elements,
              v = f.reference,
              b = f.popper;
            if (!Al(v, b)) return;
            (c.rects = { reference: R2(v, kr(b), c.options.strategy === "fixed"), popper: Ya(b) }),
              (c.reset = !1),
              (c.placement = c.options.placement),
              c.orderedModifiers.forEach(function (O) {
                return (c.modifiersData[O.name] = Object.assign({}, O.data));
              });
            for (var C = 0, y = 0; y < c.orderedModifiers.length; y++) {
              if (c.reset === !0) {
                (c.reset = !1), (y = -1);
                continue;
              }
              var E = c.orderedModifiers[y],
                x = E.fn,
                w = E.options,
                k = w === void 0 ? {} : w,
                S = E.name;
              typeof x == "function" && (c = x({ state: c, options: k, name: S, instance: h }) || c);
            }
          }
        },
        update: D2(function () {
          return new Promise(function (f) {
            h.forceUpdate(), f(c);
          });
        }),
        destroy: function () {
          m(), (g = !0);
        },
      };
    if (!Al(i, u)) return h;
    h.setOptions(s).then(function (f) {
      !g && s.onFirstUpdate && s.onFirstUpdate(f);
    });
    function d() {
      c.orderedModifiers.forEach(function (f) {
        var v = f.name,
          b = f.options,
          C = b === void 0 ? {} : b,
          y = f.effect;
        if (typeof y == "function") {
          var E = y({ state: c, name: v, instance: h, options: C }),
            x = function () {};
          p.push(E || x);
        }
      });
    }
    function m() {
      p.forEach(function (f) {
        return f();
      }),
        (p = []);
    }
    return h;
  };
}
var B2 = [a2, A2, r2, qp, E2, g2, S2, Xp, y2],
  $2 = M2({ defaultModifiers: B2 }),
  I2 = ke(Fp()),
  Z2 = [],
  H2 = function (e, t, r) {
    r === void 0 && (r = {});
    var n = A.useRef(null),
      o = {
        onFirstUpdate: r.onFirstUpdate,
        placement: r.placement || "bottom",
        strategy: r.strategy || "absolute",
        modifiers: r.modifiers || Z2,
      },
      l = A.useState({
        styles: { popper: { position: o.strategy, left: "0", top: "0" }, arrow: { position: "absolute" } },
        attributes: {},
      }),
      i = l[0],
      u = l[1],
      s = A.useMemo(function () {
        return {
          name: "updateState",
          enabled: !0,
          phase: "write",
          fn: function (g) {
            var h = g.state,
              d = Object.keys(h.elements);
            R0.flushSync(function () {
              u({
                styles: pl(
                  d.map(function (m) {
                    return [m, h.styles[m] || {}];
                  })
                ),
                attributes: pl(
                  d.map(function (m) {
                    return [m, h.attributes[m]];
                  })
                ),
              });
            });
          },
          requires: ["computeStyles"],
        };
      }, []),
      c = A.useMemo(
        function () {
          var g = {
            onFirstUpdate: o.onFirstUpdate,
            placement: o.placement,
            strategy: o.strategy,
            modifiers: [].concat(o.modifiers, [s, { name: "applyStyles", enabled: !1 }]),
          };
          return (0, I2.default)(n.current, g) ? n.current || g : ((n.current = g), g);
        },
        [o.onFirstUpdate, o.placement, o.strategy, o.modifiers, s]
      ),
      p = A.useRef();
    return (
      fl(
        function () {
          p.current && p.current.setOptions(c);
        },
        [c]
      ),
      fl(
        function () {
          if (!(e == null || t == null)) {
            var g = r.createPopper || $2,
              h = g(e, t, c);
            return (
              (p.current = h),
              function () {
                h.destroy(), (p.current = null);
              }
            );
          }
        },
        [e, t, r.createPopper]
      ),
      {
        state: p.current ? p.current.state : null,
        styles: i.styles,
        attributes: i.attributes,
        update: p.current ? p.current.update : null,
        forceUpdate: p.current ? p.current.forceUpdate : null,
      }
    );
  };
function Cs(e) {
  var t = A.useRef(e);
  return (
    (t.current = e),
    A.useCallback(function () {
      return t.current;
    }, [])
  );
}
var j2 = function () {};
function N2(e) {
  var t = e.initial,
    r = e.value,
    n = e.onChange,
    o = n === void 0 ? j2 : n;
  if (t === void 0 && r === void 0)
    throw new TypeError('Either "value" or "initial" variable must be set. Now both are undefined');
  var l = A.useState(t),
    i = l[0],
    u = l[1],
    s = Cs(i),
    c = A.useCallback(
      function (g) {
        var h = s(),
          d = typeof g == "function" ? g(h) : g;
        typeof d.persist == "function" && d.persist(), u(d), typeof o == "function" && o(d);
      },
      [s, o]
    ),
    p = r !== void 0;
  return [p ? r : i, p ? o : c];
}
function Ss(e, t) {
  return (
    e === void 0 && (e = 0),
    t === void 0 && (t = 0),
    function () {
      return {
        width: 0,
        height: 0,
        top: t,
        right: e,
        bottom: t,
        left: e,
        x: 0,
        y: 0,
        toJSON: function () {
          return null;
        },
      };
    }
  );
}
var P2 = ["styles", "attributes"],
  wl = { getBoundingClientRect: Ss() },
  Cl = {
    closeOnOutsideClick: !0,
    closeOnTriggerHidden: !1,
    defaultVisible: !1,
    delayHide: 0,
    delayShow: 0,
    followCursor: !1,
    interactive: !1,
    mutationObserverOptions: { attributes: !0, childList: !0, subtree: !0 },
    offset: [0, 6],
    trigger: "hover",
  };
function V2(e, t) {
  var r, n, o;
  e === void 0 && (e = {}), t === void 0 && (t = {});
  var l = Object.keys(Cl).reduce(function (D, M) {
      var H;
      return ye({}, D, ((H = {}), (H[M] = D[M] !== void 0 ? D[M] : Cl[M]), H));
    }, e),
    i = A.useMemo(
      function () {
        return [{ name: "offset", options: { offset: l.offset } }];
      },
      Array.isArray(l.offset) ? l.offset : []
    ),
    u = ye({}, t, { placement: t.placement || l.placement, modifiers: t.modifiers || i }),
    s = A.useState(null),
    c = s[0],
    p = s[1],
    g = A.useState(null),
    h = g[0],
    d = g[1],
    m = N2({ initial: l.defaultVisible, value: l.visible, onChange: l.onVisibleChange }),
    f = m[0],
    v = m[1],
    b = A.useRef();
  A.useEffect(function () {
    return function () {
      return clearTimeout(b.current);
    };
  }, []);
  var C = H2(l.followCursor ? wl : c, h, u),
    y = C.styles,
    E = C.attributes,
    x = Na(C, P2),
    w = x.update,
    k = Cs({ visible: f, triggerRef: c, tooltipRef: h, finalConfig: l }),
    S = A.useCallback(
      function (D) {
        return Array.isArray(l.trigger) ? l.trigger.includes(D) : l.trigger === D;
      },
      Array.isArray(l.trigger) ? l.trigger : [l.trigger]
    ),
    O = A.useCallback(
      function () {
        clearTimeout(b.current),
          (b.current = window.setTimeout(function () {
            return v(!1);
          }, l.delayHide));
      },
      [l.delayHide, v]
    ),
    R = A.useCallback(
      function () {
        clearTimeout(b.current),
          (b.current = window.setTimeout(function () {
            return v(!0);
          }, l.delayShow));
      },
      [l.delayShow, v]
    ),
    F = A.useCallback(
      function () {
        k().visible ? O() : R();
      },
      [k, O, R]
    );
  A.useEffect(
    function () {
      if (k().finalConfig.closeOnOutsideClick) {
        var D = function (M) {
          var H,
            P = k(),
            $ = P.tooltipRef,
            j = P.triggerRef,
            Y = (M.composedPath == null || (H = M.composedPath()) == null ? void 0 : H[0]) || M.target;
          Y instanceof Node && $ != null && j != null && !$.contains(Y) && !j.contains(Y) && O();
        };
        return (
          document.addEventListener("mousedown", D),
          function () {
            return document.removeEventListener("mousedown", D);
          }
        );
      }
    },
    [k, O]
  ),
    A.useEffect(
      function () {
        if (!(c == null || !S("click")))
          return (
            c.addEventListener("click", F),
            function () {
              return c.removeEventListener("click", F);
            }
          );
      },
      [c, S, F]
    ),
    A.useEffect(
      function () {
        if (!(c == null || !S("double-click")))
          return (
            c.addEventListener("dblclick", F),
            function () {
              return c.removeEventListener("dblclick", F);
            }
          );
      },
      [c, S, F]
    ),
    A.useEffect(
      function () {
        if (!(c == null || !S("right-click"))) {
          var D = function (M) {
            M.preventDefault(), F();
          };
          return (
            c.addEventListener("contextmenu", D),
            function () {
              return c.removeEventListener("contextmenu", D);
            }
          );
        }
      },
      [c, S, F]
    ),
    A.useEffect(
      function () {
        if (!(c == null || !S("focus")))
          return (
            c.addEventListener("focus", R),
            c.addEventListener("blur", O),
            function () {
              c.removeEventListener("focus", R), c.removeEventListener("blur", O);
            }
          );
      },
      [c, S, R, O]
    ),
    A.useEffect(
      function () {
        if (!(c == null || !S("hover")))
          return (
            c.addEventListener("mouseenter", R),
            c.addEventListener("mouseleave", O),
            function () {
              c.removeEventListener("mouseenter", R), c.removeEventListener("mouseleave", O);
            }
          );
      },
      [c, S, R, O]
    ),
    A.useEffect(
      function () {
        if (!(h == null || !S("hover") || !k().finalConfig.interactive))
          return (
            h.addEventListener("mouseenter", R),
            h.addEventListener("mouseleave", O),
            function () {
              h.removeEventListener("mouseenter", R), h.removeEventListener("mouseleave", O);
            }
          );
      },
      [h, S, R, O, k]
    );
  var L =
    x == null || (r = x.state) == null || (n = r.modifiersData) == null || (o = n.hide) == null
      ? void 0
      : o.isReferenceHidden;
  A.useEffect(
    function () {
      l.closeOnTriggerHidden && L && O();
    },
    [l.closeOnTriggerHidden, O, L]
  ),
    A.useEffect(
      function () {
        if (!l.followCursor || c == null) return;
        function D(M) {
          var H = M.clientX,
            P = M.clientY;
          (wl.getBoundingClientRect = Ss(H, P)), w == null || w();
        }
        return (
          c.addEventListener("mousemove", D),
          function () {
            return c.removeEventListener("mousemove", D);
          }
        );
      },
      [l.followCursor, c, w]
    ),
    A.useEffect(
      function () {
        if (!(h == null || w == null || l.mutationObserverOptions == null)) {
          var D = new MutationObserver(w);
          return (
            D.observe(h, l.mutationObserverOptions),
            function () {
              return D.disconnect();
            }
          );
        }
      },
      [l.mutationObserverOptions, h, w]
    );
  var T = function (D) {
      return (
        D === void 0 && (D = {}),
        ye({}, D, { style: ye({}, D.style, y.popper) }, E.popper, { "data-popper-interactive": l.interactive })
      );
    },
    Z = function (D) {
      return D === void 0 && (D = {}), ye({}, D, E.arrow, { style: ye({}, D.style, y.arrow), "data-popper-arrow": !0 });
    };
  return ye(
    {
      getArrowProps: Z,
      getTooltipProps: T,
      setTooltipRef: d,
      setTriggerRef: p,
      tooltipRef: h,
      triggerRef: c,
      visible: f,
    },
    x
  );
}
var Re = Ot(1e3)((e, t, r, n = 0) => (t.split("-")[0] === e ? r : n)),
  ct = 8,
  z2 = _.div(
    { position: "absolute", borderStyle: "solid" },
    ({ placement: e }) => {
      let t = 0,
        r = 0;
      switch (!0) {
        case e.startsWith("left") || e.startsWith("right"): {
          r = 8;
          break;
        }
        case e.startsWith("top") || e.startsWith("bottom"): {
          t = 8;
          break;
        }
      }
      return { transform: `translate3d(${t}px, ${r}px, 0px)` };
    },
    ({ theme: e, color: t, placement: r }) => ({
      bottom: `${Re("top", r, `${ct * -1}px`, "auto")}`,
      top: `${Re("bottom", r, `${ct * -1}px`, "auto")}`,
      right: `${Re("left", r, `${ct * -1}px`, "auto")}`,
      left: `${Re("right", r, `${ct * -1}px`, "auto")}`,
      borderBottomWidth: `${Re("top", r, "0", ct)}px`,
      borderTopWidth: `${Re("bottom", r, "0", ct)}px`,
      borderRightWidth: `${Re("left", r, "0", ct)}px`,
      borderLeftWidth: `${Re("right", r, "0", ct)}px`,
      borderTopColor: Re(
        "top",
        r,
        e.color[t] || t || e.base === "light" ? ir(e.background.app) : e.background.app,
        "transparent"
      ),
      borderBottomColor: Re(
        "bottom",
        r,
        e.color[t] || t || e.base === "light" ? ir(e.background.app) : e.background.app,
        "transparent"
      ),
      borderLeftColor: Re(
        "left",
        r,
        e.color[t] || t || e.base === "light" ? ir(e.background.app) : e.background.app,
        "transparent"
      ),
      borderRightColor: Re(
        "right",
        r,
        e.color[t] || t || e.base === "light" ? ir(e.background.app) : e.background.app,
        "transparent"
      ),
    })
  ),
  q2 = _.div(
    ({ hidden: e }) => ({ display: e ? "none" : "inline-block", zIndex: 2147483647 }),
    ({ theme: e, color: t, hasChrome: r }) =>
      r
        ? {
            background: e.color[t] || t || e.base === "light" ? ir(e.background.app) : e.background.app,
            filter: `
            drop-shadow(0px 5px 5px rgba(0,0,0,0.05))
            drop-shadow(0 1px 3px rgba(0,0,0,0.1))
          `,
            borderRadius: e.appBorderRadius,
            fontSize: e.typography.size.s1,
          }
        : {}
  ),
  eo = a.forwardRef(
    ({ placement: e, hasChrome: t, children: r, arrowProps: n, tooltipRef: o, color: l, withArrows: i, ...u }, s) =>
      a.createElement(
        q2,
        { "data-testid": "tooltip", hasChrome: t, ref: s, ...u, color: l },
        t && i && a.createElement(z2, { placement: e, ...n, color: l }),
        r
      )
  );
eo.displayName = "Tooltip";
eo.defaultProps = { color: void 0, tooltipRef: void 0, hasChrome: !0, placement: "top", arrowProps: {} };
var { document: zr } = he,
  U2 = _.div`
  display: inline-block;
  cursor: ${(e) => (e.trigger === "hover" || e.trigger.includes("hover") ? "default" : "pointer")};
`,
  W2 = _.g`
  cursor: ${(e) => (e.trigger === "hover" || e.trigger.includes("hover") ? "default" : "pointer")};
`,
  ks = ({
    svg: e,
    trigger: t,
    closeOnOutsideClick: r,
    placement: n,
    hasChrome: o,
    withArrows: l,
    offset: i,
    tooltip: u,
    children: s,
    closeOnTriggerHidden: c,
    mutationObserverOptions: p,
    closeOnClick: g,
    tooltipShown: h,
    onVisibilityChange: d,
    defaultVisible: m,
    delayHide: f,
    visible: v,
    interactive: b,
    delayShow: C,
    modifiers: y,
    strategy: E,
    followCursor: x,
    onVisibleChange: w,
    ...k
  }) => {
    let S = e ? W2 : U2,
      {
        getArrowProps: O,
        getTooltipProps: R,
        setTooltipRef: F,
        setTriggerRef: L,
        visible: T,
        state: Z,
      } = V2(
        {
          trigger: t,
          placement: n,
          defaultVisible: m ?? h,
          delayHide: f,
          interactive: b,
          closeOnOutsideClick: r ?? g,
          closeOnTriggerHidden: c,
          onVisibleChange: (M) => {
            d == null || d(M), w == null || w(M);
          },
          delayShow: C,
          followCursor: x,
          mutationObserverOptions: p,
          visible: v,
          offset: i,
        },
        { modifiers: y, strategy: E }
      ),
      D = a.createElement(
        eo,
        { placement: Z == null ? void 0 : Z.placement, ref: F, hasChrome: o, arrowProps: O(), withArrows: l, ...R() },
        typeof u == "function" ? u({ onHide: () => w(!1) }) : u
      );
    return a.createElement(
      a.Fragment,
      null,
      a.createElement(S, { trigger: t, ref: L, ...k }, s),
      T && O0.createPortal(D, zr.body)
    );
  };
ks.defaultProps = {
  svg: !1,
  trigger: "click",
  closeOnOutsideClick: !1,
  placement: "top",
  modifiers: [
    { name: "preventOverflow", options: { padding: 8 } },
    { name: "offset", options: { offset: [8, 8] } },
    { name: "arrow", options: { padding: 8 } },
  ],
  hasChrome: !0,
  defaultVisible: !1,
};
var G2 = ({ startOpen: e = !1, onVisibleChange: t, ...r }) => {
  let [n, o] = A.useState(e),
    l = A.useCallback(
      (i) => {
        (t && t(i) === !1) || o(i);
      },
      [t]
    );
  return (
    A.useEffect(() => {
      let i = () => l(!1);
      zr.addEventListener("keydown", i, !1);
      let u = Array.from(zr.getElementsByTagName("iframe")),
        s = [];
      return (
        u.forEach((c) => {
          let p = () => {
            try {
              c.contentWindow.document &&
                (c.contentWindow.document.addEventListener("click", i),
                s.push(() => {
                  try {
                    c.contentWindow.document.removeEventListener("click", i);
                  } catch {}
                }));
            } catch {}
          };
          p(),
            c.addEventListener("load", p),
            s.push(() => {
              c.removeEventListener("load", p);
            });
        }),
        () => {
          zr.removeEventListener("keydown", i),
            s.forEach((c) => {
              c();
            });
        }
      );
    }),
    a.createElement(ks, { ...r, visible: n, onVisibleChange: l })
  );
};
function Y2(e, t) {
  var r = A.useRef(null),
    n = A.useRef(null);
  n.current = t;
  var o = A.useRef(null);
  A.useEffect(function () {
    l();
  });
  var l = A.useCallback(
    function () {
      var i = o.current,
        u = n.current,
        s = i || (u ? (u instanceof Element ? u : u.current) : null);
      (r.current && r.current.element === s && r.current.subscriber === e) ||
        (r.current && r.current.cleanup && r.current.cleanup(),
        (r.current = { element: s, subscriber: e, cleanup: s ? e(s) : void 0 }));
    },
    [e]
  );
  return (
    A.useEffect(function () {
      return function () {
        r.current && r.current.cleanup && (r.current.cleanup(), (r.current = null));
      };
    }, []),
    A.useCallback(
      function (i) {
        (o.current = i), l();
      },
      [l]
    )
  );
}
function Sl(e, t, r) {
  return e[t]
    ? e[t][0]
      ? e[t][0][r]
      : e[t][r]
    : t === "contentBoxSize"
    ? e.contentRect[r === "inlineSize" ? "width" : "height"]
    : void 0;
}
function _s(e) {
  e === void 0 && (e = {});
  var t = e.onResize,
    r = A.useRef(void 0);
  r.current = t;
  var n = e.round || Math.round,
    o = A.useRef(),
    l = A.useState({ width: void 0, height: void 0 }),
    i = l[0],
    u = l[1],
    s = A.useRef(!1);
  A.useEffect(function () {
    return (
      (s.current = !1),
      function () {
        s.current = !0;
      }
    );
  }, []);
  var c = A.useRef({ width: void 0, height: void 0 }),
    p = Y2(
      A.useCallback(
        function (g) {
          return (
            (!o.current || o.current.box !== e.box || o.current.round !== n) &&
              (o.current = {
                box: e.box,
                round: n,
                instance: new ResizeObserver(function (h) {
                  var d = h[0],
                    m =
                      e.box === "border-box"
                        ? "borderBoxSize"
                        : e.box === "device-pixel-content-box"
                        ? "devicePixelContentBoxSize"
                        : "contentBoxSize",
                    f = Sl(d, m, "inlineSize"),
                    v = Sl(d, m, "blockSize"),
                    b = f ? n(f) : void 0,
                    C = v ? n(v) : void 0;
                  if (c.current.width !== b || c.current.height !== C) {
                    var y = { width: b, height: C };
                    (c.current.width = b), (c.current.height = C), r.current ? r.current(y) : s.current || u(y);
                  }
                }),
              }),
            o.current.instance.observe(g, { box: e.box }),
            function () {
              o.current && o.current.instance.unobserve(g);
            }
          );
        },
        [e.box, n]
      ),
      e.ref
    );
  return A.useMemo(
    function () {
      return { ref: p, width: i.width, height: i.height };
    },
    [p, i.width, i.height]
  );
}
var Q = ({ ...e }, t) => {
  let r = [e.class, e.className];
  return delete e.class, (e.className = ["sbdocs", `sbdocs-${t}`, ...r].filter(Boolean).join(" ")), e;
};
function K2(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function hr(e, t) {
  return (
    (hr = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, n) {
          return (r.__proto__ = n), r;
        }),
    hr(e, t)
  );
}
function J2(e, t) {
  (e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), hr(e, t);
}
function ca(e) {
  return (
    (ca = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        }),
    ca(e)
  );
}
function X2(e) {
  return Function.toString.call(e).indexOf("[native code]") !== -1;
}
function Q2() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
  } catch {
    return !1;
  }
}
function qr(e, t, r) {
  return (
    Q2()
      ? (qr = Reflect.construct.bind())
      : (qr = function (n, o, l) {
          var i = [null];
          i.push.apply(i, o);
          var u = Function.bind.apply(n, i),
            s = new u();
          return l && hr(s, l.prototype), s;
        }),
    qr.apply(null, arguments)
  );
}
function da(e) {
  var t = typeof Map == "function" ? new Map() : void 0;
  return (
    (da = function (r) {
      if (r === null || !X2(r)) return r;
      if (typeof r != "function") throw new TypeError("Super expression must either be null or a function");
      if (typeof t < "u") {
        if (t.has(r)) return t.get(r);
        t.set(r, n);
      }
      function n() {
        return qr(r, arguments, ca(this).constructor);
      }
      return (
        (n.prototype = Object.create(r.prototype, {
          constructor: { value: n, enumerable: !1, writable: !0, configurable: !0 },
        })),
        hr(n, r)
      );
    }),
    da(e)
  );
}
var Je = (function (e) {
  J2(t, e);
  function t(r) {
    var n;
    return (
      (n =
        e.call(
          this,
          "An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#" +
            r +
            " for more information."
        ) || this),
      K2(n)
    );
  }
  return t;
})(da(Error));
function Zn(e) {
  return Math.round(e * 255);
}
function e5(e, t, r) {
  return Zn(e) + "," + Zn(t) + "," + Zn(r);
}
function yr(e, t, r, n) {
  if ((n === void 0 && (n = e5), t === 0)) return n(r, r, r);
  var o = (((e % 360) + 360) % 360) / 60,
    l = (1 - Math.abs(2 * r - 1)) * t,
    i = l * (1 - Math.abs((o % 2) - 1)),
    u = 0,
    s = 0,
    c = 0;
  o >= 0 && o < 1
    ? ((u = l), (s = i))
    : o >= 1 && o < 2
    ? ((u = i), (s = l))
    : o >= 2 && o < 3
    ? ((s = l), (c = i))
    : o >= 3 && o < 4
    ? ((s = i), (c = l))
    : o >= 4 && o < 5
    ? ((u = i), (c = l))
    : o >= 5 && o < 6 && ((u = l), (c = i));
  var p = r - l / 2,
    g = u + p,
    h = s + p,
    d = c + p;
  return n(g, h, d);
}
var kl = {
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
function t5(e) {
  if (typeof e != "string") return e;
  var t = e.toLowerCase();
  return kl[t] ? "#" + kl[t] : e;
}
var r5 = /^#[a-fA-F0-9]{6}$/,
  n5 = /^#[a-fA-F0-9]{8}$/,
  a5 = /^#[a-fA-F0-9]{3}$/,
  o5 = /^#[a-fA-F0-9]{4}$/,
  Hn = /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,
  l5 = /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,
  i5 = /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,
  s5 =
    /^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
function to(e) {
  if (typeof e != "string") throw new Je(3);
  var t = t5(e);
  if (t.match(r5))
    return {
      red: parseInt("" + t[1] + t[2], 16),
      green: parseInt("" + t[3] + t[4], 16),
      blue: parseInt("" + t[5] + t[6], 16),
    };
  if (t.match(n5)) {
    var r = parseFloat((parseInt("" + t[7] + t[8], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + t[1] + t[2], 16),
      green: parseInt("" + t[3] + t[4], 16),
      blue: parseInt("" + t[5] + t[6], 16),
      alpha: r,
    };
  }
  if (t.match(a5))
    return {
      red: parseInt("" + t[1] + t[1], 16),
      green: parseInt("" + t[2] + t[2], 16),
      blue: parseInt("" + t[3] + t[3], 16),
    };
  if (t.match(o5)) {
    var n = parseFloat((parseInt("" + t[4] + t[4], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + t[1] + t[1], 16),
      green: parseInt("" + t[2] + t[2], 16),
      blue: parseInt("" + t[3] + t[3], 16),
      alpha: n,
    };
  }
  var o = Hn.exec(t);
  if (o) return { red: parseInt("" + o[1], 10), green: parseInt("" + o[2], 10), blue: parseInt("" + o[3], 10) };
  var l = l5.exec(t.substring(0, 50));
  if (l)
    return {
      red: parseInt("" + l[1], 10),
      green: parseInt("" + l[2], 10),
      blue: parseInt("" + l[3], 10),
      alpha: parseFloat("" + l[4]) > 1 ? parseFloat("" + l[4]) / 100 : parseFloat("" + l[4]),
    };
  var i = i5.exec(t);
  if (i) {
    var u = parseInt("" + i[1], 10),
      s = parseInt("" + i[2], 10) / 100,
      c = parseInt("" + i[3], 10) / 100,
      p = "rgb(" + yr(u, s, c) + ")",
      g = Hn.exec(p);
    if (!g) throw new Je(4, t, p);
    return { red: parseInt("" + g[1], 10), green: parseInt("" + g[2], 10), blue: parseInt("" + g[3], 10) };
  }
  var h = s5.exec(t.substring(0, 50));
  if (h) {
    var d = parseInt("" + h[1], 10),
      m = parseInt("" + h[2], 10) / 100,
      f = parseInt("" + h[3], 10) / 100,
      v = "rgb(" + yr(d, m, f) + ")",
      b = Hn.exec(v);
    if (!b) throw new Je(4, t, v);
    return {
      red: parseInt("" + b[1], 10),
      green: parseInt("" + b[2], 10),
      blue: parseInt("" + b[3], 10),
      alpha: parseFloat("" + h[4]) > 1 ? parseFloat("" + h[4]) / 100 : parseFloat("" + h[4]),
    };
  }
  throw new Je(5);
}
function u5(e) {
  var t = e.red / 255,
    r = e.green / 255,
    n = e.blue / 255,
    o = Math.max(t, r, n),
    l = Math.min(t, r, n),
    i = (o + l) / 2;
  if (o === l)
    return e.alpha !== void 0
      ? { hue: 0, saturation: 0, lightness: i, alpha: e.alpha }
      : { hue: 0, saturation: 0, lightness: i };
  var u,
    s = o - l,
    c = i > 0.5 ? s / (2 - o - l) : s / (o + l);
  switch (o) {
    case t:
      u = (r - n) / s + (r < n ? 6 : 0);
      break;
    case r:
      u = (n - t) / s + 2;
      break;
    default:
      u = (t - r) / s + 4;
      break;
  }
  return (
    (u *= 60),
    e.alpha !== void 0
      ? { hue: u, saturation: c, lightness: i, alpha: e.alpha }
      : { hue: u, saturation: c, lightness: i }
  );
}
function Os(e) {
  return u5(to(e));
}
var c5 = function (e) {
    return e.length === 7 && e[1] === e[2] && e[3] === e[4] && e[5] === e[6] ? "#" + e[1] + e[3] + e[5] : e;
  },
  pa = c5;
function xt(e) {
  var t = e.toString(16);
  return t.length === 1 ? "0" + t : t;
}
function jn(e) {
  return xt(Math.round(e * 255));
}
function d5(e, t, r) {
  return pa("#" + jn(e) + jn(t) + jn(r));
}
function Qr(e, t, r) {
  return yr(e, t, r, d5);
}
function p5(e, t, r) {
  if (typeof e == "number" && typeof t == "number" && typeof r == "number") return Qr(e, t, r);
  if (typeof e == "object" && t === void 0 && r === void 0) return Qr(e.hue, e.saturation, e.lightness);
  throw new Je(1);
}
function f5(e, t, r, n) {
  if (typeof e == "number" && typeof t == "number" && typeof r == "number" && typeof n == "number")
    return n >= 1 ? Qr(e, t, r) : "rgba(" + yr(e, t, r) + "," + n + ")";
  if (typeof e == "object" && t === void 0 && r === void 0 && n === void 0)
    return e.alpha >= 1
      ? Qr(e.hue, e.saturation, e.lightness)
      : "rgba(" + yr(e.hue, e.saturation, e.lightness) + "," + e.alpha + ")";
  throw new Je(2);
}
function fa(e, t, r) {
  if (typeof e == "number" && typeof t == "number" && typeof r == "number") return pa("#" + xt(e) + xt(t) + xt(r));
  if (typeof e == "object" && t === void 0 && r === void 0) return pa("#" + xt(e.red) + xt(e.green) + xt(e.blue));
  throw new Je(6);
}
function lt(e, t, r, n) {
  if (typeof e == "string" && typeof t == "number") {
    var o = to(e);
    return "rgba(" + o.red + "," + o.green + "," + o.blue + "," + t + ")";
  } else {
    if (typeof e == "number" && typeof t == "number" && typeof r == "number" && typeof n == "number")
      return n >= 1 ? fa(e, t, r) : "rgba(" + e + "," + t + "," + r + "," + n + ")";
    if (typeof e == "object" && t === void 0 && r === void 0 && n === void 0)
      return e.alpha >= 1
        ? fa(e.red, e.green, e.blue)
        : "rgba(" + e.red + "," + e.green + "," + e.blue + "," + e.alpha + ")";
  }
  throw new Je(7);
}
var m5 = function (e) {
    return (
      typeof e.red == "number" &&
      typeof e.green == "number" &&
      typeof e.blue == "number" &&
      (typeof e.alpha != "number" || typeof e.alpha > "u")
    );
  },
  g5 = function (e) {
    return (
      typeof e.red == "number" && typeof e.green == "number" && typeof e.blue == "number" && typeof e.alpha == "number"
    );
  },
  h5 = function (e) {
    return (
      typeof e.hue == "number" &&
      typeof e.saturation == "number" &&
      typeof e.lightness == "number" &&
      (typeof e.alpha != "number" || typeof e.alpha > "u")
    );
  },
  y5 = function (e) {
    return (
      typeof e.hue == "number" &&
      typeof e.saturation == "number" &&
      typeof e.lightness == "number" &&
      typeof e.alpha == "number"
    );
  };
function Rs(e) {
  if (typeof e != "object") throw new Je(8);
  if (g5(e)) return lt(e);
  if (m5(e)) return fa(e);
  if (y5(e)) return f5(e);
  if (h5(e)) return p5(e);
  throw new Je(8);
}
function Fs(e, t, r) {
  return function () {
    var n = r.concat(Array.prototype.slice.call(arguments));
    return n.length >= t ? e.apply(this, n) : Fs(e, t, n);
  };
}
function ro(e) {
  return Fs(e, e.length, []);
}
function no(e, t, r) {
  return Math.max(e, Math.min(t, r));
}
function b5(e, t) {
  if (t === "transparent") return t;
  var r = Os(t);
  return Rs(ye({}, r, { lightness: no(0, 1, r.lightness - parseFloat(e)) }));
}
var v5 = ro(b5),
  It = v5;
function E5(e, t) {
  if (t === "transparent") return t;
  var r = Os(t);
  return Rs(ye({}, r, { lightness: no(0, 1, r.lightness + parseFloat(e)) }));
}
var x5 = ro(E5),
  A5 = x5;
function w5(e, t) {
  if (t === "transparent") return t;
  var r = to(t),
    n = typeof r.alpha == "number" ? r.alpha : 1,
    o = ye({}, r, { alpha: no(0, 1, +(n * 100 - parseFloat(e) * 100).toFixed(2) / 100) });
  return lt(o);
}
var C5 = ro(w5),
  be = C5,
  Yt = ({ theme: e }) => ({
    margin: "20px 0 8px",
    padding: 0,
    cursor: "text",
    position: "relative",
    color: e.color.defaultText,
    "&:first-of-type": { marginTop: 0, paddingTop: 0 },
    "&:hover a.anchor": { textDecoration: "none" },
    "& tt, & code": { fontSize: "inherit" },
  }),
  ut = ({ theme: e }) => ({
    lineHeight: 1,
    margin: "0 2px",
    padding: "3px 5px",
    whiteSpace: "nowrap",
    borderRadius: 3,
    fontSize: e.typography.size.s2 - 1,
    border: e.base === "light" ? `1px solid ${e.color.mediumlight}` : `1px solid ${e.color.darker}`,
    color: e.base === "light" ? be(0.1, e.color.defaultText) : be(0.3, e.color.defaultText),
    backgroundColor: e.base === "light" ? e.color.lighter : e.color.border,
  }),
  te = ({ theme: e }) => ({
    fontFamily: e.typography.fonts.base,
    fontSize: e.typography.size.s3,
    margin: 0,
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
    WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
    WebkitOverflowScrolling: "touch",
  }),
  Rt = { margin: "16px 0" },
  S5 = ({ href: e, children: t, ...r }) => {
    let n = /^\//.test(e),
      o = /^#.*/.test(e),
      l = n ? `./?path=${e}` : e;
    return a.createElement("a", { href: l, target: o ? "_self" : "_top", ...r }, t);
  },
  Ts = _(S5)(te, ({ theme: e }) => ({
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
  })),
  Ds = _.blockquote(te, Rt, ({ theme: e }) => ({
    borderLeft: `4px solid ${e.color.medium}`,
    padding: "0 15px",
    color: e.color.dark,
    "& > :first-of-type": { marginTop: 0 },
    "& > :last-child": { marginBottom: 0 },
  })),
  k5 = (e) => typeof e == "string",
  _5 = /[\n\r]/g,
  O5 = _.code(
    ({ theme: e }) => ({
      fontFamily: e.typography.fonts.mono,
      WebkitFontSmoothing: "antialiased",
      MozOsxFontSmoothing: "grayscale",
      display: "inline-block",
      paddingLeft: 2,
      paddingRight: 2,
      verticalAlign: "baseline",
      color: "inherit",
    }),
    ut
  ),
  R5 = _(ms)(({ theme: e }) => ({
    fontFamily: e.typography.fonts.mono,
    fontSize: `${e.typography.size.s2 - 1}px`,
    lineHeight: "19px",
    margin: "25px 0 40px",
    borderRadius: e.appBorderRadius,
    boxShadow: e.base === "light" ? "rgba(0, 0, 0, 0.10) 0 1px 3px 0" : "rgba(0, 0, 0, 0.20) 0 2px 5px 0",
    "pre.prismjs": { padding: 20, background: "inherit" },
  })),
  ao = ({ className: e, children: t, ...r }) => {
    let n = (e || "").match(/lang-(\S+)/),
      o = A.Children.toArray(t);
    return o.filter(k5).some((l) => l.match(_5))
      ? a.createElement(
          R5,
          { bordered: !0, copyable: !0, language: (n == null ? void 0 : n[1]) ?? "plaintext", format: !1, ...r },
          t
        )
      : a.createElement(O5, { ...r, className: e }, o);
  },
  Ls = _.div(te),
  Ms = _.dl(te, {
    ...Rt,
    padding: 0,
    "& dt": { fontSize: "14px", fontWeight: "bold", fontStyle: "italic", padding: 0, margin: "16px 0 4px" },
    "& dt:first-of-type": { padding: 0 },
    "& dt > :first-of-type": { marginTop: 0 },
    "& dt > :last-child": { marginBottom: 0 },
    "& dd": { margin: "0 0 16px", padding: "0 15px" },
    "& dd > :first-of-type": { marginTop: 0 },
    "& dd > :last-child": { marginBottom: 0 },
  }),
  Bs = _.h1(te, Yt, ({ theme: e }) => ({
    fontSize: `${e.typography.size.l1}px`,
    fontWeight: e.typography.weight.bold,
  })),
  oo = _.h2(te, Yt, ({ theme: e }) => ({
    fontSize: `${e.typography.size.m2}px`,
    paddingBottom: 4,
    borderBottom: `1px solid ${e.appBorderColor}`,
  })),
  lo = _.h3(te, Yt, ({ theme: e }) => ({ fontSize: `${e.typography.size.m1}px` })),
  $s = _.h4(te, Yt, ({ theme: e }) => ({ fontSize: `${e.typography.size.s3}px` })),
  Is = _.h5(te, Yt, ({ theme: e }) => ({ fontSize: `${e.typography.size.s2}px` })),
  Zs = _.h6(te, Yt, ({ theme: e }) => ({ fontSize: `${e.typography.size.s2}px`, color: e.color.dark })),
  Hs = _.hr(({ theme: e }) => ({
    border: "0 none",
    borderTop: `1px solid ${e.appBorderColor}`,
    height: 4,
    padding: 0,
  })),
  js = _.img({ maxWidth: "100%" }),
  Ns = _.li(te, ({ theme: e }) => ({
    fontSize: e.typography.size.s2,
    color: e.color.defaultText,
    lineHeight: "24px",
    "& + li": { marginTop: ".25em" },
    "& ul, & ol": { marginTop: ".25em", marginBottom: 0 },
    "& code": ut({ theme: e }),
  })),
  F5 = { paddingLeft: 30, "& :first-of-type": { marginTop: 0 }, "& :last-child": { marginBottom: 0 } },
  Ps = _.ol(te, Rt, { ...F5, listStyle: "decimal" }),
  Vs = _.p(te, Rt, ({ theme: e }) => ({
    fontSize: e.typography.size.s2,
    lineHeight: "24px",
    color: e.color.defaultText,
    "& code": ut({ theme: e }),
  })),
  zs = _.pre(te, Rt, ({ theme: e }) => ({
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
  })),
  qs = _.span(te, ({ theme: e }) => ({
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
  })),
  Us = _.table(te, Rt, ({ theme: e }) => ({
    fontSize: e.typography.size.s2,
    lineHeight: "24px",
    padding: 0,
    borderCollapse: "collapse",
    "& tr": { borderTop: `1px solid ${e.appBorderColor}`, backgroundColor: e.appContentBg, margin: 0, padding: 0 },
    "& tr:nth-of-type(2n)": { backgroundColor: e.base === "dark" ? e.color.darker : e.color.lighter },
    "& tr th": {
      fontWeight: "bold",
      color: e.color.defaultText,
      border: `1px solid ${e.appBorderColor}`,
      margin: 0,
      padding: "6px 13px",
    },
    "& tr td": { border: `1px solid ${e.appBorderColor}`, color: e.color.defaultText, margin: 0, padding: "6px 13px" },
    "& tr th :first-of-type, & tr td :first-of-type": { marginTop: 0 },
    "& tr th :last-child, & tr td :last-child": { marginBottom: 0 },
  })),
  Ws = _.title(ut),
  T5 = { paddingLeft: 30, "& :first-of-type": { marginTop: 0 }, "& :last-child": { marginBottom: 0 } },
  Gs = _.ul(te, Rt, { ...T5, listStyle: "disc" }),
  io = _.div(te),
  Ys = {
    h1: (e) => a.createElement(Bs, { ...Q(e, "h1") }),
    h2: (e) => a.createElement(oo, { ...Q(e, "h2") }),
    h3: (e) => a.createElement(lo, { ...Q(e, "h3") }),
    h4: (e) => a.createElement($s, { ...Q(e, "h4") }),
    h5: (e) => a.createElement(Is, { ...Q(e, "h5") }),
    h6: (e) => a.createElement(Zs, { ...Q(e, "h6") }),
    pre: (e) => a.createElement(zs, { ...Q(e, "pre") }),
    a: (e) => a.createElement(Ts, { ...Q(e, "a") }),
    hr: (e) => a.createElement(Hs, { ...Q(e, "hr") }),
    dl: (e) => a.createElement(Ms, { ...Q(e, "dl") }),
    blockquote: (e) => a.createElement(Ds, { ...Q(e, "blockquote") }),
    table: (e) => a.createElement(Us, { ...Q(e, "table") }),
    img: (e) => a.createElement(js, { ...Q(e, "img") }),
    div: (e) => a.createElement(Ls, { ...Q(e, "div") }),
    span: (e) => a.createElement(qs, { ...Q(e, "span") }),
    li: (e) => a.createElement(Ns, { ...Q(e, "li") }),
    ul: (e) => a.createElement(Gs, { ...Q(e, "ul") }),
    ol: (e) => a.createElement(Ps, { ...Q(e, "ol") }),
    p: (e) => a.createElement(Vs, { ...Q(e, "p") }),
    code: (e) => a.createElement(ao, { ...Q(e, "code") }),
    tt: (e) => a.createElement(Ws, { ...Q(e, "tt") }),
    resetwrapper: (e) => a.createElement(io, { ...Q(e, "resetwrapper") }),
  },
  D5 = _.div(
    ({ theme: e }) => ({
      display: "inline-block",
      fontSize: 11,
      lineHeight: "12px",
      alignSelf: "center",
      padding: "4px 12px",
      borderRadius: "3em",
      fontWeight: e.typography.weight.bold,
    }),
    { svg: { height: 12, width: 12, marginRight: 4, marginTop: -2, path: { fill: "currentColor" } } },
    ({ theme: e, status: t }) => {
      switch (t) {
        case "critical":
          return { color: e.color.critical, background: e.background.critical };
        case "negative":
          return {
            color: e.color.negativeText,
            background: e.background.negative,
            boxShadow: e.base === "light" ? `inset 0 0 0 1px ${be(0.9, e.color.negativeText)}` : "none",
          };
        case "warning":
          return {
            color: e.color.warningText,
            background: e.background.warning,
            boxShadow: e.base === "light" ? `inset 0 0 0 1px ${be(0.9, e.color.warningText)}` : "none",
          };
        case "neutral":
          return {
            color: e.color.dark,
            background: e.color.mediumlight,
            boxShadow: e.base === "light" ? `inset 0 0 0 1px ${be(0.9, e.color.dark)}` : "none",
          };
        case "positive":
          return {
            color: e.color.positiveText,
            background: e.background.positive,
            boxShadow: e.base === "light" ? `inset 0 0 0 1px ${be(0.9, e.color.positiveText)}` : "none",
          };
        default:
          return {};
      }
    }
  ),
  L5 = ({ ...e }) => a.createElement(D5, { ...e }),
  br = {
    user: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0ZM2.67 11.15c.7-1 2.6-1.81 3.2-1.9.22-.04.23-.66.23-.66s-.67-.66-.81-1.55c-.4 0-.63-.94-.24-1.27l-.02-.13c-.06-.6-.28-2.6 1.97-2.6s2.03 2 1.97 2.6l-.02.13c.4.33.15 1.27-.24 1.27-.14.89-.8 1.55-.8 1.55s0 .62.22.66c.6.09 2.5.9 3.2 1.9a6 6 0 1 0-8.66 0Z",
      })
    ),
    useralt: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        d: "M7.27 13.16a11.39 11.39 0 0 0 5.18-1.23v-.25c0-1.57-3.24-3-4.1-3.13-.27-.05-.28-.79-.28-.79s.8-.78.96-1.83c.47 0 .75-1.12.29-1.52.02-.41.6-3.25-2.32-3.25S4.65 4 4.67 4.41c-.46.4-.17 1.52.29 1.52.17 1.05.96 1.83.96 1.83s0 .74-.27.79c-.86.13-4.04 1.53-4.1 3.08a11.44 11.44 0 0 0 5.72 1.53Z",
      })
    ),
    useradd: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        d: "M1.18 11.9c-.4-.17-.8-.36-1.18-.58.06-1.44 3.02-2.74 3.82-2.87.25-.04.26-.73.26-.73s-.74-.73-.9-1.7c-.43 0-.7-1.05-.27-1.42l-.01-.14c-.07-.67-.31-2.88 2.18-2.88 2.48 0 2.24 2.2 2.17 2.88l-.01.14c.43.37.16 1.41-.27 1.41-.16.98-.9 1.71-.9 1.71s.01.69.26.73c.8.13 3.82 1.46 3.82 2.91v.24a10.63 10.63 0 0 1-8.97.3ZM11.5 2.16c.28 0 .5.22.5.5v1.5h1.5a.5.5 0 0 1 0 1H12v1.5a.5.5 0 0 1-1 0v-1.5H9.5a.5.5 0 1 1 0-1H11v-1.5c0-.28.22-.5.5-.5Z",
      })
    ),
    users: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        d: "M9.21 11.62A10.59 10.59 0 0 1 0 11.07c.06-1.35 2.93-2.58 3.7-2.7.25-.03.26-.68.26-.68s-.72-.69-.87-1.6c-.42 0-.68-.99-.26-1.33 0-.03 0-.08-.02-.14-.07-.63-.3-2.71 2.12-2.71 2.41 0 2.18 2.08 2.11 2.71l-.01.14c.42.34.16 1.32-.26 1.32-.16.92-.87 1.6-.87 1.6s0 .66.25.7c.78.11 3.7 1.36 3.7 2.73v.22l-.64.3Z",
      }),
      a.createElement("path", {
        d: "M8.81 8.42a9.64 9.64 0 0 0-.74-.4 5.2 5.2 0 0 1 1.7-.76c.17-.02.17-.47.17-.47s-.49-.47-.6-1.1c-.28 0-.46-.68-.17-.91l-.01-.1c-.05-.43-.2-1.86 1.45-1.86 1.66 0 1.5 1.43 1.45 1.86v.1c.28.23.1.9-.18.9-.11.64-.6 1.11-.6 1.11s0 .45.17.47c.54.08 2.55.94 2.55 1.89v.62a10.6 10.6 0 0 1-3.3.56 2.97 2.97 0 0 0-.58-.88c-.37-.41-.85-.76-1.31-1.03Z",
      })
    ),
    profile: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        d: "M9.1 7.35a5.06 5.06 0 0 1-4.52-.28C4.6 6.4 6.02 5.77 6.4 5.7c.12-.02.12-.35.12-.35s-.35-.34-.43-.81c-.2 0-.33-.5-.12-.67l-.01-.07C5.93 3.48 5.81 2.42 7 2.42S8.07 3.48 8.04 3.8v.07c.2.17.07.67-.13.67-.08.47-.43.81-.43.81s0 .33.12.35c.38.06 1.82.7 1.82 1.4v.1c-.1.06-.2.1-.31.15Zm-5.35 3.9c0-.14.11-.25.25-.25h6a.25.25 0 1 1 0 .5H4a.25.25 0 0 1-.25-.25ZM4 9a.25.25 0 0 0 0 .5h6a.25.25 0 1 0 0-.5H4Z",
      }),
      a.createElement("path", {
        fillRule: "evenodd",
        d: "M1 .5c0-.28.22-.5.5-.5h11c.28 0 .5.22.5.5v13a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V.5ZM2 13V1h10v12H2Z",
      })
    ),
    facehappy: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        d: "M3.97 8.75a.5.5 0 0 0-.87.5 4.5 4.5 0 0 0 7.8 0 .5.5 0 1 0-.87-.5 3.5 3.5 0 0 1-6.06 0ZM5.5 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9.5 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
      }),
      a.createElement("path", {
        fillRule: "evenodd",
        d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z",
      })
    ),
    faceneutral: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        d: "M4.5 9a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5ZM5.5 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9.5 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
      }),
      a.createElement("path", {
        fillRule: "evenodd",
        d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z",
      })
    ),
    facesad: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        d: "M3.97 10.25a.5.5 0 0 1-.87-.5 4.5 4.5 0 0 1 7.8 0 .5.5 0 1 1-.87.5 3.5 3.5 0 0 0-6.06 0ZM5.5 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9.5 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
      }),
      a.createElement("path", {
        fillRule: "evenodd",
        d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z",
      })
    ),
    accessibility: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        d: "M3.53 4.84a.5.5 0 0 1 .63-.31l2.05.68a2.5 2.5 0 0 0 1.58 0l2.05-.68a.5.5 0 0 1 .32.94L7.7 6.3a.3.3 0 0 0-.21.29v.24c0 .7.16 1.39.48 2.01l.97 1.95a.5.5 0 1 1-.9.44L7 9.12l-1.05 2.1a.5.5 0 1 1-.9-.44l.97-1.95a4.5 4.5 0 0 0 .48-2.01v-.24a.3.3 0 0 0-.2-.29l-2.46-.82a.5.5 0 0 1-.31-.63Z",
      }),
      a.createElement("path", { d: "M7 4.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" }),
      a.createElement("path", {
        fillRule: "evenodd",
        d: "M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14Zm0-1A6 6 0 1 0 7 1a6 6 0 0 0 0 12Z",
      })
    ),
    accessibilityalt: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        d: "M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14ZM8 3.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM3.53 4.84a.5.5 0 0 1 .63-.31l2.05.68a2.5 2.5 0 0 0 1.58 0l2.05-.68a.5.5 0 0 1 .32.94L7.7 6.3a.3.3 0 0 0-.21.29v.24c0 .7.16 1.39.48 2.01l.97 1.95a.5.5 0 1 1-.9.44L7 9.12l-1.05 2.1a.5.5 0 1 1-.9-.44l.97-1.95a4.5 4.5 0 0 0 .48-2.01v-.24a.3.3 0 0 0-.2-.29l-2.46-.82a.5.5 0 0 1-.31-.63Z",
      })
    ),
    arrowup: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        d: "m7.35 2.9 5.5 5.5a.5.5 0 0 1-.7.7L7 3.96 1.85 9.1a.5.5 0 1 1-.7-.7l5.5-5.5c.2-.2.5-.2.7 0Z",
      })
    ),
    arrowdown: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        d: "m1.15 5.6 5.5 5.5c.2.2.5.2.7 0l5.5-5.5a.5.5 0 0 0-.7-.7L7 10.04 1.85 4.9a.5.5 0 1 0-.7.7Z",
      })
    ),
    arrowleft: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        d: "M2.76 7.1c.02.09.06.18.14.25l5.5 5.5a.5.5 0 0 0 .7-.7L3.96 7 9.1 1.85a.5.5 0 1 0-.7-.7l-5.5 5.5a.5.5 0 0 0-.14.45Z",
      })
    ),
    arrowright: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        d: "m11.1 7.35-5.5 5.5a.5.5 0 0 1-.7-.7L10.04 7 4.9 1.85a.5.5 0 1 1 .7-.7l5.5 5.5c.2.2.2.5 0 .7Z",
      })
    ),
    arrowupalt: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        d: "M11.85 4.65 7.35.15a.5.5 0 0 0-.7 0l-4.5 4.5a.5.5 0 1 0 .7.7L6.5 1.71V13.5a.5.5 0 0 0 1 0V1.7l3.65 3.65a.5.5 0 0 0 .7-.7Z",
      })
    ),
    arrowdownalt: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        d: "M7.5.5a.5.5 0 0 0-1 0v11.8L2.85 8.64a.5.5 0 1 0-.7.7l4.5 4.5A.5.5 0 0 0 7 14a.5.5 0 0 0 .35-.15l4.5-4.5a.5.5 0 0 0-.7-.7L7.5 12.29V.5Z",
      })
    ),
    arrowleftalt: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        d: "M5.35 2.15c.2.2.2.5 0 .7L1.71 6.5H13.5a.5.5 0 0 1 0 1H1.7l3.65 3.65a.5.5 0 0 1-.7.7l-4.5-4.5a.5.5 0 0 1 0-.7l4.5-4.5c.2-.2.5-.2.7 0Z",
      })
    ),
    arrowrightalt: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        d: "M8.65 2.15c.2-.2.5-.2.7 0l4.5 4.5c.2.2.2.5 0 .7l-4.5 4.5a.5.5 0 0 1-.7-.7l3.64-3.65H.5a.5.5 0 0 1 0-1h11.8L8.64 2.85a.5.5 0 0 1 0-.7Z",
      })
    ),
    expandalt: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        d: "m7.35.15 4 4a.5.5 0 0 1-.7.7L7 1.21 3.35 4.85a.5.5 0 1 1-.7-.7l4-4c.2-.2.5-.2.7 0ZM11.35 9.15c.2.2.2.5 0 .7l-4 4a.5.5 0 0 1-.7 0l-4-4a.5.5 0 1 1 .7-.7L7 12.79l3.65-3.64c.2-.2.5-.2.7 0Z",
      })
    ),
    collapse: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        d: "M3.354.146a.5.5 0 1 0-.708.708l4 4a.5.5 0 0 0 .708 0l4-4a.5.5 0 0 0-.708-.708L7 3.793 3.354.146Zm3.292 9a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1-.708.708L7 10.207l-3.646 3.647a.5.5 0 0 1-.708-.708l4-4Z",
      })
    ),
    expand: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        d: "M1.5 1h2a.5.5 0 0 1 0 1h-.8l3.15 3.15a.5.5 0 1 1-.7.7L2 2.71v.79a.5.5 0 0 1-1 0v-2c0-.28.22-.5.5-.5ZM10 1.5c0-.28.22-.5.5-.5h2c.28 0 .5.22.5.5v2a.5.5 0 0 1-1 0v-.8L8.85 5.86a.5.5 0 1 1-.7-.7L11.29 2h-.79a.5.5 0 0 1-.5-.5ZM12.5 10c.28 0 .5.22.5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h.8L8.14 8.85a.5.5 0 1 1 .7-.7L12 11.29v-.79c0-.28.22-.5.5-.5ZM2 11.3v-.8a.5.5 0 0 0-1 0v2c0 .28.22.5.5.5h2a.5.5 0 0 0 0-1h-.8l3.15-3.15a.5.5 0 1 0-.7-.7L2 11.29Z",
      })
    ),
    unfold: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        d: "m6.65.15-1.5 1.5a.5.5 0 1 0 .7.7l.65-.64V5a.5.5 0 0 0 1 0V1.7l.65.65a.5.5 0 1 0 .7-.7L7.35.15a.5.5 0 0 0-.7 0Z",
      }),
      a.createElement("path", {
        d: "M1.3 4.04a.5.5 0 0 0-.16.82L3.3 7 1.15 9.15a.5.5 0 0 0 .35.85h3a.5.5 0 0 0 0-1H2.7l1.5-1.5h5.6l2.35 2.35a.5.5 0 0 0 .7-.7L10.71 7l2.14-2.15.11-.54-.1.54A.5.5 0 0 0 13 4.5a.5.5 0 0 0-.14-.35.5.5 0 0 0-.36-.15h-3a.5.5 0 0 0 0 1h1.8L9.8 6.5H4.2L2.7 5h1.8a.5.5 0 0 0 0-1h-3a.5.5 0 0 0-.2.04Z",
      }),
      a.createElement("path", {
        d: "M7 8.5c.28 0 .5.22.5.5v3.3l.65-.65a.5.5 0 0 1 .7.7l-1.5 1.5a.5.5 0 0 1-.7 0l-1.5-1.5a.5.5 0 0 1 .7-.7l.65.64V9c0-.28.22-.5.5-.5ZM9 9.5c0-.28.22-.5.5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Z",
      })
    ),
    transfer: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        d: "M10.65 2.65c.2-.2.5-.2.7 0l1.5 1.5c.2.2.2.5 0 .7l-1.5 1.5a.5.5 0 0 1-.7-.7l.64-.65H1.5a.5.5 0 0 1 0-1h9.8l-.65-.65a.5.5 0 0 1 0-.7ZM3.35 8.35 2.71 9h9.79a.5.5 0 0 1 0 1H2.7l.65.65a.5.5 0 0 1-.7.7l-1.5-1.5a.5.5 0 0 1 0-.7l1.5-1.5a.5.5 0 1 1 .7.7Z",
      })
    ),
    redirect: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        d: "M1.5 1c.28 0 .5.22.5.5V10a2 2 0 0 0 4 0V4a3 3 0 0 1 6 0v7.8l1.15-1.15a.5.5 0 0 1 .7.7l-2 2a.5.5 0 0 1-.7 0l-2-2a.5.5 0 0 1 .7-.7L11 11.79V4a2 2 0 1 0-4 0v6a3 3 0 0 1-6 0V1.5c0-.28.22-.5.5-.5Z",
      })
    ),
    undo: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        d: "M1.15 3.85a.5.5 0 0 1 0-.7l2-2a.5.5 0 1 1 .7.7L2.71 3H9a4 4 0 0 1 0 8H3a.5.5 0 0 1 0-1h6a3 3 0 1 0 0-6H2.7l1.15 1.15a.5.5 0 1 1-.7.7l-2-2Z",
      })
    ),
    reply: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        d: "M4.35 2.15c.2.2.2.5 0 .7L1.71 5.5H9.5A4.5 4.5 0 0 1 14 10v1.5a.5.5 0 0 1-1 0V10a3.5 3.5 0 0 0-3.5-3.5H1.7l2.65 2.65a.5.5 0 1 1-.7.7l-3.5-3.5a.5.5 0 0 1 0-.7l3.5-3.5c.2-.2.5-.2.7 0Z",
      })
    ),
    sync: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        d: "M5.5 1A.5.5 0 0 0 5 .5H2a.5.5 0 0 0 0 1h1.53a6.5 6.5 0 0 0 2.39 11.91.5.5 0 1 0 .16-.99A5.5 5.5 0 0 1 4.5 2.1V4a.5.5 0 0 0 1 0V1ZM7.5 1a.5.5 0 0 1 .58-.41 6.5 6.5 0 0 1 2.39 11.91H12a.5.5 0 0 1 0 1H9a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 1 0v1.9A5.5 5.5 0 0 0 7.92 1.58.5.5 0 0 1 7.5 1Z",
      })
    ),
    upload: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        d: "M8.65 5.85 7.5 4.71v5.79a.5.5 0 0 1-1 0V4.7L5.35 5.86a.5.5 0 1 1-.7-.7l2-2c.2-.2.5-.2.7 0l2 2a.5.5 0 1 1-.7.7Z",
      }),
      a.createElement("path", {
        fillRule: "evenodd",
        d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z",
      })
    ),
    download: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        d: "M5.35 8.15 6.5 9.29V3.5a.5.5 0 0 1 1 0v5.8l1.15-1.15a.5.5 0 1 1 .7.7l-2 2a.5.5 0 0 1-.7 0l-2-2a.5.5 0 1 1 .7-.7Z",
      }),
      a.createElement("path", {
        fillRule: "evenodd",
        d: "M0 7a7 7 0 1 1 14 0A7 7 0 0 1 0 7Zm1 0a6 6 0 1 1 12 0A6 6 0 0 1 1 7Z",
      })
    ),
    back: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        d: "M5.85 5.35 4.71 6.5h5.79a.5.5 0 0 1 0 1H4.7l1.15 1.15a.5.5 0 1 1-.7.7l-2-2a.5.5 0 0 1 0-.7l2-2a.5.5 0 1 1 .7.7Z",
      }),
      a.createElement("path", {
        fillRule: "evenodd",
        d: "M7 0a7 7 0 1 1 0 14A7 7 0 0 1 7 0Zm0 1a6 6 0 1 1 0 12A6 6 0 0 1 7 1Z",
      })
    ),
    proceed: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        d: "M3.5 6.5h5.8L8.14 5.35a.5.5 0 1 1 .7-.7l2 2c.2.2.2.5 0 .7l-2 2a.5.5 0 1 1-.7-.7L9.29 7.5H3.5a.5.5 0 0 1 0-1Z",
      }),
      a.createElement("path", {
        fillRule: "evenodd",
        d: "M7 14A7 7 0 1 1 7 0a7 7 0 0 1 0 14Zm0-1A6 6 0 1 1 7 1a6 6 0 0 1 0 12Z",
      })
    ),
    refresh: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        d: "M7.1.5H7a6.5 6.5 0 1 0 6.41 7.58.5.5 0 1 0-.99-.16A5.47 5.47 0 0 1 7 12.5a5.5 5.5 0 0 1 0-11 5.5 5.5 0 0 1 4.9 3H10a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5V2a.5.5 0 0 0-1 0v1.53A6.5 6.5 0 0 0 7.1.5Z",
      })
    ),
    globe: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        fillRule: "evenodd",
        d: "M14 7A7 7 0 1 0 0 7a7 7 0 0 0 14 0Zm-6.53 5.74c-.24.23-.4.26-.47.26-.08 0-.23-.03-.47-.26-.23-.24-.5-.62-.73-1.18A11.57 11.57 0 0 1 5 7.5h4a11.57 11.57 0 0 1-.8 4.06c-.24.56-.5.94-.73 1.18ZM8.99 6.5H5.01c.05-1.62.35-3.04.79-4.06.24-.56.5-.94.73-1.18.24-.23.4-.26.47-.26.08 0 .23.03.47.26.23.24.5.62.73 1.18.44 1.02.74 2.44.8 4.06Zm1 1c-.06 2.18-.56 4.08-1.28 5.25a6 6 0 0 0 4.27-5.25H9.99Zm2.99-1H9.99c-.06-2.18-.56-4.08-1.28-5.25a6 6 0 0 1 4.27 5.25ZM4 6.5c.06-2.18.56-4.08 1.28-5.25A6 6 0 0 0 1.02 6.5h2.99Zm-2.99 1a6 6 0 0 0 4.27 5.25c-.72-1.17-1.22-3.07-1.28-5.25H1.02Z",
      })
    ),
    compass: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        fillRule: "evenodd",
        d: "M10.09 3.4 5.95 5.8a.37.37 0 0 0-.11.09.38.38 0 0 0-.04.05l-2.4 4.15a.37.37 0 0 0 0 .38c.1.18.33.24.5.14l4.15-2.4a.37.37 0 0 0 .15-.15l2.4-4.15a.37.37 0 0 0-.03-.44.37.37 0 0 0-.48-.07ZM4.75 9.25 7.6 7.6 6.4 6.4 4.75 9.25Z",
      }),
      a.createElement("path", {
        fillRule: "evenodd",
        d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z",
      })
    ),
    location: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        fillRule: "evenodd",
        d: "M0 7a7 7 0 1 1 14 0A7 7 0 0 1 0 7Zm6.5 3.5v2.48A6 6 0 0 1 1.02 7.5H3.5a.5.5 0 0 0 0-1H1.02A6 6 0 0 1 6.5 1.02V3.5a.5.5 0 0 0 1 0V1.02a6 6 0 0 1 5.48 5.48H10.5a.5.5 0 0 0 0 1h2.48a6 6 0 0 1-5.48 5.48V10.5a.5.5 0 0 0-1 0Z",
      })
    ),
    pin: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        fillRule: "evenodd",
        d: "M9 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM8 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z",
      }),
      a.createElement("path", {
        fillRule: "evenodd",
        d: "M12 5A5 5 0 0 0 2 5c0 2.63 2.27 6.15 4.65 8.64.2.2.5.2.7 0C9.73 11.15 12 7.64 12 5ZM7 1a4 4 0 0 1 4 4c0 1.06-.47 2.42-1.3 3.88A21.23 21.23 0 0 1 7 12.55c-1-1.1-1.97-2.39-2.7-3.67A8.46 8.46 0 0 1 3 5a4 4 0 0 1 4-4Z",
      })
    ),
    time: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        d: "M7 2c.28 0 .5.22.5.5v4H10a.5.5 0 0 1 0 1H7a.5.5 0 0 1-.5-.5V2.5c0-.28.22-.5.5-.5Z",
      }),
      a.createElement("path", {
        fillRule: "evenodd",
        d: "M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14Zm0-1A6 6 0 1 0 7 1a6 6 0 0 0 0 12Z",
      })
    ),
    dashboard: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", { d: "M9.8 4.1a.5.5 0 0 1 .1.7L7.92 7.58A1 1 0 1 1 7.1 7l2-2.8a.5.5 0 0 1 .7-.12Z" }),
      a.createElement("path", {
        fillRule: "evenodd",
        d: "M2.07 12.97a7 7 0 1 1 9.86 0 12.96 12.96 0 0 0-9.86 0Zm9.58-1.18a6 6 0 1 0-9.3 0 13.98 13.98 0 0 1 9.3 0Z",
      })
    ),
    timer: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", { d: "M7.5 4.5a.5.5 0 0 0-1 0v2.63a1 1 0 1 0 1 0V4.5Z" }),
      a.createElement("path", {
        fillRule: "evenodd",
        d: "M5.5.5c0-.28.22-.5.5-.5h2a.5.5 0 0 1 0 1h-.5v1.02c1.28.1 2.45.61 3.37 1.4l.78-.77a.5.5 0 0 1 .7.7l-.77.78a6 6 0 1 1-5.08-2.1V1H6a.5.5 0 0 1-.5-.5ZM7 3a5 5 0 1 0 0 10A5 5 0 0 0 7 3Z",
      })
    ),
    home: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        d: "m7.35 1.15 5.5 5.5a.5.5 0 0 1-.7.7L12 7.21v5.29a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V9H6v3.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V7.2l-.15.15a.5.5 0 1 1-.7-.7l1-1 4.5-4.5c.2-.2.5-.2.7 0ZM3 6.2V12h2V8.5c0-.28.22-.5.5-.5h3c.28 0 .5.22.5.5V12h2V6.2l-4-4-4 4Z",
      })
    ),
    admin: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        fillRule: "evenodd",
        d: "M1.21 4.1a.5.5 0 0 1 .06-.04l5.48-3a.5.5 0 0 1 .5 0l5.48 3a.5.5 0 0 1 .27.39.5.5 0 0 1-.51.55H1.51a.5.5 0 0 1-.3-.9ZM3.46 4h7.08L7 2.07 3.46 4Z",
      }),
      a.createElement("path", {
        d: "M4 6a.5.5 0 1 0-1 0v5a.5.5 0 0 0 1 0V6ZM11 6a.5.5 0 0 0-1 0v5a.5.5 0 0 0 1 0V6ZM5.75 5.5c.28 0 .5.22.5.5v5a.5.5 0 0 1-1 0V6c0-.28.22-.5.5-.5ZM8.75 6a.5.5 0 1 0-1 0v5a.5.5 0 0 0 1 0V6ZM1.5 12.5c0-.27.22-.5.5-.5h10a.5.5 0 0 1 0 1H2a.5.5 0 0 1-.5-.5Z",
      })
    ),
    info: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        d: "M7 5.5c.28 0 .5.22.5.5v4a.5.5 0 0 1-1 0V6c0-.28.22-.5.5-.5ZM7 4.5A.75.75 0 1 0 7 3a.75.75 0 0 0 0 1.5Z",
      }),
      a.createElement("path", {
        fillRule: "evenodd",
        d: "M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14Zm0-1A6 6 0 1 0 7 1a6 6 0 0 0 0 12Z",
      })
    ),
    question: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        d: "M5.25 5.25A1.75 1.75 0 1 1 7 7a.5.5 0 0 0-.5.5V9a.5.5 0 0 0 1 0V7.95a2.75 2.75 0 1 0-3.25-2.7.5.5 0 0 0 1 0ZM7 11.5A.75.75 0 1 0 7 10a.75.75 0 0 0 0 1.5Z",
      }),
      a.createElement("path", {
        fillRule: "evenodd",
        d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z",
      })
    ),
    support: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        fillRule: "evenodd",
        d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-3.52 4.9a5.97 5.97 0 0 1-6.96 0l1.45-1.45a3.98 3.98 0 0 0 4.06 0l1.45 1.44Zm-.03-2.87 1.44 1.45a5.97 5.97 0 0 0 0-6.96l-1.44 1.45a3.98 3.98 0 0 1 0 4.06ZM9.03 3.55l1.45-1.44a5.97 5.97 0 0 0-6.96 0l1.45 1.44a3.98 3.98 0 0 1 4.06 0ZM3.55 4.97 2.11 3.52a5.97 5.97 0 0 0 0 6.96l1.44-1.45a3.98 3.98 0 0 1 0-4.06ZM10 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z",
      })
    ),
    alert: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        d: "M7 4.5c.28 0 .5.22.5.5v3.5a.5.5 0 0 1-1 0V5c0-.28.22-.5.5-.5ZM7.75 10.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z",
      }),
      a.createElement("path", {
        fillRule: "evenodd",
        d: "M7.2 1.04a.5.5 0 0 1 .24.21l6.49 11a.5.5 0 0 1-.44.75H.51a.5.5 0 0 1-.5-.45.5.5 0 0 1 .06-.31l6.5-10.99a.5.5 0 0 1 .64-.2ZM7 2.48 1.38 12h11.24L7 2.48Z",
      })
    ),
    email: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        d: "M0 2.5c0-.27.22-.5.5-.5h13c.28 0 .5.23.5.5v9a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-9Zm1 1.02V11h12V3.52L7.31 7.89a.5.5 0 0 1-.52.07.5.5 0 0 1-.1-.07L1 3.52ZM12.03 3H1.97L7 6.87 12.03 3Z",
      })
    ),
    phone: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        fillRule: "evenodd",
        d: "m7.76 8.13-.05.05a.2.2 0 0 1-.28.03A6.76 6.76 0 0 1 5.8 6.56a.21.21 0 0 1 .04-.27l.05-.05c.23-.2.54-.47.71-.96.17-.47-.02-1.04-.66-1.94-.26-.38-.72-.96-1.22-1.46-.68-.69-1.2-1-1.65-1a.98.98 0 0 0-.51.13A3.23 3.23 0 0 0 .9 3.42c-.13 1.1.26 2.37 1.17 3.78a16.68 16.68 0 0 0 4.55 4.6 6.57 6.57 0 0 0 3.53 1.32A3.2 3.2 0 0 0 13 11.46c.14-.24.24-.64-.07-1.18a7.8 7.8 0 0 0-1.73-1.8c-.64-.5-1.52-1.12-2.13-1.12a.97.97 0 0 0-.34.06c-.47.17-.74.46-.95.69l-.02.02Zm4.32 2.68a6.8 6.8 0 0 0-1.48-1.54h-.02c-.3-.25-.64-.49-.95-.67a2.7 2.7 0 0 0-.56-.24h-.01c-.23.09-.34.21-.56.45l-.02.02-.04.04a1.2 1.2 0 0 1-1.6.15 7.76 7.76 0 0 1-1.86-1.89l-.01-.01-.02-.02a1.21 1.21 0 0 1 .2-1.53l.06-.06.02-.02c.22-.2.35-.31.43-.53v-.02c0-.02 0-.06-.03-.14a3.7 3.7 0 0 0-.5-.88h-.01V3.9c-.23-.33-.65-.87-1.1-1.32H4c-.31-.32-.55-.5-.72-.6a.6.6 0 0 0-.22-.1h-.03a2.23 2.23 0 0 0-1.15 1.66c-.09.78.18 1.8 1.02 3.1a15.68 15.68 0 0 0 4.27 4.33l.02.01.02.02a5.57 5.57 0 0 0 2.97 1.11 2.2 2.2 0 0 0 1.93-1.14h.01v-.05a.57.57 0 0 0-.05-.12Z",
      })
    ),
    link: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        d: "M11.84 2.16a2.25 2.25 0 0 0-3.18 0l-2.5 2.5c-.88.88-.88 2.3 0 3.18a.5.5 0 0 1-.7.7 3.25 3.25 0 0 1 0-4.59l2.5-2.5a3.25 3.25 0 0 1 4.59 4.6L10.48 8.1c.04-.44.01-.89-.09-1.32l1.45-1.45c.88-.88.88-2.3 0-3.18Z",
      }),
      a.createElement("path", {
        d: "M3.6 7.2c-.1-.42-.12-.87-.08-1.31L1.45 7.95a3.25 3.25 0 1 0 4.6 4.6l2.5-2.5a3.25 3.25 0 0 0 0-4.6.5.5 0 0 0-.7.7c.87.89.87 2.31 0 3.2l-2.5 2.5a2.25 2.25 0 1 1-3.2-3.2l1.46-1.44Z",
      })
    ),
    unlink: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        d: "m1.45 7.95 1.3-1.3.71.7-1.3 1.3a2.25 2.25 0 1 0 3.18 3.2l1.3-1.31.71.7-1.3 1.3a3.25 3.25 0 0 1-4.6-4.59ZM12.55 6.05l-1.3 1.3-.71-.7 1.3-1.3a2.25 2.25 0 1 0-3.18-3.2l-1.3 1.31-.71-.7 1.3-1.3a3.25 3.25 0 0 1 4.6 4.59ZM1.85 1.15a.5.5 0 1 0-.7.7l11 11a.5.5 0 0 0 .7-.7l-11-11Z",
      })
    ),
    bell: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        fillRule: "evenodd",
        d: "M8 1.11a1 1 0 1 0-1.99 0A4.5 4.5 0 0 0 2.5 5.5v3.88l-.94 1.89a.5.5 0 0 0-.06.3.5.5 0 0 0 .51.43h3.58a1.5 1.5 0 1 0 2.82 0H12a.5.5 0 0 0 .45-.73l-.94-1.89V5.5A4.5 4.5 0 0 0 8 1.11ZM2.8 11h8.4l-.5-1H3.3l-.5 1Zm7.7-2V5.5a3.5 3.5 0 1 0-7 0V9h7Zm-4 3.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Z",
      })
    ),
    rss: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        d: "M1.5.5c0-.28.22-.5.5-.5a12 12 0 0 1 12 12 .5.5 0 0 1-1 0A11 11 0 0 0 2 1a.5.5 0 0 1-.5-.5Z",
      }),
      a.createElement("path", {
        d: "M1.5 4.5c0-.28.22-.5.5-.5a8 8 0 0 1 8 8 .5.5 0 0 1-1 0 7 7 0 0 0-7-7 .5.5 0 0 1-.5-.5Z",
      }),
      a.createElement("path", {
        fillRule: "evenodd",
        d: "M5 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-1 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z",
      })
    ),
    sharealt: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        d: "M2 1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7.5a.5.5 0 0 0-1 0V12H2V2h4.5a.5.5 0 0 0 0-1H2Z",
      }),
      a.createElement("path", {
        d: "M7.35 7.36 12 2.7v1.8a.5.5 0 0 0 1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 1 0 0 1h1.8L6.64 6.64a.5.5 0 1 0 .7.7Z",
      })
    ),
    share: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        d: "M6.65.15c.2-.2.5-.2.7 0l2 2a.5.5 0 1 1-.7.7L7.5 1.72v6.8a.5.5 0 0 1-1 0V1.7L5.35 2.86a.5.5 0 1 1-.7-.71l2-2Z",
      }),
      a.createElement("path", {
        d: "M2 4a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H9.5a.5.5 0 1 0 0 1H12v7H2V5h2.5a.5.5 0 0 0 0-1H2Z",
      })
    ),
    circlehollow: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        fillRule: "evenodd",
        d: "M7 13A6 6 0 1 0 7 1a6 6 0 0 0 0 12Zm0 1A7 7 0 1 0 7 0a7 7 0 0 0 0 14Z",
      })
    ),
    circle: a.createElement("path", { d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Z" }),
    bookmarkhollow: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        fillRule: "evenodd",
        d: "M3.5 0h7c.28 0 .5.22.5.5v13a.5.5 0 0 1-.45.5.46.46 0 0 1-.38-.12L7 11.16l-3.17 2.72a.46.46 0 0 1-.38.12.5.5 0 0 1-.45-.5V.5c0-.28.22-.5.5-.5ZM4 12.41l2.66-2.28a.45.45 0 0 1 .38-.13c.1.01.2.05.29.12l2.67 2.3V1H4v11.41Z",
      })
    ),
    bookmark: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        fillRule: "evenodd",
        d: "M3.5 0h7c.28 0 .5.22.5.5v13a.5.5 0 0 1-.45.5.46.46 0 0 1-.38-.12L7 11.16l-3.17 2.72a.46.46 0 0 1-.38.12.5.5 0 0 1-.45-.5V.5c0-.28.22-.5.5-.5Z",
      })
    ),
    hearthollow: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        fillRule: "evenodd",
        d: "M12.81 1.85 13 2a2.97 2.97 0 0 1 .75 1.17 4.39 4.39 0 0 1 .12 2.51 6.26 6.26 0 0 1-1.65 2.55l-4.78 4.6A.59.59 0 0 1 7 13a.67.67 0 0 1-.44-.17L1.78 8.22a7.84 7.84 0 0 1-1.25-1.6C.37 6.31.24 6 .14 5.67a4.32 4.32 0 0 1 .12-2.51 3.2 3.2 0 0 1 1.95-1.9c.47-.18 1-.27 1.57-.27.3 0 .61.04.91.14.3.09.59.21.86.36s.52.33.77.52c.24.19.47.38.68.58a7.56 7.56 0 0 1 1.46-1.1c.27-.15.55-.27.84-.36.3-.1.6-.14.9-.14.59 0 1.12.09 1.59.26.39.15.73.34 1.02.59ZM1.2 3.53A2.2 2.2 0 0 1 2.57 2.2M1.2 3.53c-.13.33-.2.72-.2 1.18 0 .22.03.45.1.68a3.97 3.97 0 0 0 .79 1.46c.19.23.38.45.59.65l4.51 4.36 4.52-4.35c.2-.2.4-.4.59-.65.18-.23.34-.47.49-.73.13-.23.23-.48.3-.73.08-.23.11-.46.11-.7 0-.45-.07-.84-.2-1.18-.12-.33-.3-.6-.51-.8v-.01c-.22-.2-.5-.38-.85-.51-.34-.13-.75-.2-1.24-.2-.2 0-.4.03-.6.09a4.95 4.95 0 0 0-1.9 1.22l-.68.67-.7-.65a9.97 9.97 0 0 0-.62-.53c-.2-.16-.42-.3-.63-.42h-.01c-.21-.12-.43-.22-.66-.29C4.2 2.03 4 2 3.77 2c-.48 0-.88.07-1.21.2",
      })
    ),
    heart: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        d: "M12.81 1.85 13 2a2.97 2.97 0 0 1 .75 1.17 4.39 4.39 0 0 1 .12 2.51 6.26 6.26 0 0 1-1.65 2.55l-4.78 4.6A.59.59 0 0 1 7 13a.67.67 0 0 1-.44-.17L1.78 8.22a7.84 7.84 0 0 1-1.25-1.6C.37 6.31.24 6 .14 5.67a4.32 4.32 0 0 1 .12-2.51 3.2 3.2 0 0 1 1.95-1.9c.47-.18 1-.27 1.57-.27.3 0 .61.04.91.14.3.09.59.21.86.36s.52.33.77.52c.24.19.47.38.68.58a7.56 7.56 0 0 1 1.46-1.1c.27-.15.55-.27.84-.36.3-.1.6-.14.9-.14.59 0 1.12.09 1.59.26.39.15.73.34 1.02.59Z",
      })
    ),
    starhollow: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        d: "M6.32.78a.75.75 0 0 1 1.36 0l1.63 3.54 3.87.46c.63.07.89.86.42 1.3l-2.86 2.64.76 3.81a.75.75 0 0 1-1.1.8L7 11.43l-3.4 1.9a.75.75 0 0 1-1.1-.8l.76-3.81L.4 6.07a.75.75 0 0 1 .42-1.3l3.87-.45L6.32.78ZM7 1.7 5.54 4.86c-.11.24-.34.4-.6.43l-3.46.42 2.56 2.37c.2.17.28.44.23.7l-.68 3.42 3.04-1.7c.23-.14.5-.14.74 0l3.04 1.7-.68-3.43a.75.75 0 0 1 .23-.7l2.56-2.36-3.47-.42a.75.75 0 0 1-.59-.43L7 1.7Z",
      })
    ),
    star: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        d: "M7.68.78a.75.75 0 0 0-1.36 0L4.69 4.32l-3.87.46a.75.75 0 0 0-.42 1.3l2.86 2.64-.76 3.81a.75.75 0 0 0 1.1.8l3.4-1.9 3.4 1.9a.75.75 0 0 0 1.1-.8l-.76-3.81 2.86-2.65a.75.75 0 0 0-.42-1.3L9.3 4.33 7.68.78Z",
      })
    ),
    certificate: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        fillRule: "evenodd",
        d: "M10 7.85A4.49 4.49 0 0 0 7 0a4.5 4.5 0 0 0-3 7.85V13a.5.5 0 0 0 .5.5.5.5 0 0 0 .35-.15L7 11.21l2.15 2.14A.5.5 0 0 0 10 13V7.85ZM7 8a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm-.35 2.15c.2-.2.5-.2.7 0L9 11.79V8.53a4.48 4.48 0 0 1-4 0v3.26l1.65-1.64Z",
      })
    ),
    verified: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        d: "M6.56 13.12a1 1 0 0 1 .88 0l.98.49a1 1 0 0 0 1.31-.43l.52-.97a1 1 0 0 1 .7-.51l1.08-.2a1 1 0 0 0 .81-1.1l-.15-1.1a1 1 0 0 1 .27-.82l.76-.8a1 1 0 0 0 0-1.37l-.76-.79a1 1 0 0 1-.27-.83l.15-1.08a1 1 0 0 0-.8-1.12l-1.09-.19a1 1 0 0 1-.7-.5L9.73.81A1 1 0 0 0 8.43.4l-1 .49a1 1 0 0 1-.87 0L5.58.39a1 1 0 0 0-1.31.43l-.52.97a1 1 0 0 1-.7.51l-1.08.2a1 1 0 0 0-.81 1.1l.15 1.1a1 1 0 0 1-.27.82l-.76.8a1 1 0 0 0 0 1.37l.76.79a1 1 0 0 1 .27.83l-.15 1.08a1 1 0 0 0 .8 1.12l1.09.19a1 1 0 0 1 .7.5l.52.98a1 1 0 0 0 1.3.43l1-.49Zm4.3-8.47c.19.2.19.5 0 .7l-4.5 4.5a.5.5 0 0 1-.71 0l-2.5-2.5a.5.5 0 1 1 .7-.7L6 8.79l4.15-4.14c.2-.2.5-.2.7 0Z",
      })
    ),
    thumbsup: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        d: "M11 12.02c-.4.37-.91.56-1.56.56h-.88a5.5 5.5 0 0 1-1.3-.16c-.42-.1-.91-.25-1.47-.45-.3-.12-.63-.21-.95-.27H2.88a.84.84 0 0 1-.62-.26.84.84 0 0 1-.26-.61V6.45c0-.24.09-.45.26-.62a.84.84 0 0 1 .62-.25h1.87c.16-.11.47-.47.93-1.06.27-.35.51-.64.74-.88.1-.11.19-.3.24-.58.05-.28.12-.57.2-.87.1-.3.24-.55.43-.74a.87.87 0 0 1 .62-.25c.38 0 .72.07 1.03.22.3.15.54.38.7.7a2.94 2.94 0 0 1 .21 1.58 3 3 0 0 1-.3 1h1.2c.47 0 .88.17 1.23.52s.52.8.52 1.22c0 .29-.04.66-.34 1.12.05.15.07.3.07.47 0 .35-.09.68-.26.98.07.54-.07 1.08-.4 1.51a1.9 1.9 0 0 1-.57 1.5Zm.47-5.33a.96.96 0 0 0 .03-.25.74.74 0 0 0-.23-.51.68.68 0 0 0-.52-.23H7.93l.73-1.45a2 2 0 0 0 .21-.87c0-.44-.07-.7-.13-.82a.53.53 0 0 0-.24-.24 1.3 1.3 0 0 0-.54-.12.99.99 0 0 0-.14.28c-.08.27-.13.52-.18.76-.06.38-.2.77-.48 1.07v.01l-.02.01c-.2.2-.4.46-.67.8l-.61.76c-.15.17-.35.38-.54.51l-.26.18H5v4.13h.02c.38.08.76.18 1.12.32.53.2.98.33 1.35.42.36.09.71.13 1.07.13h.88c.43 0 .68-.11.87-.29a.9.9 0 0 0 .26-.7l-.02-.37.22-.3c.17-.23.25-.5.2-.78l-.04-.33.17-.3a.97.97 0 0 0 .13-.48c0-.09 0-.13-.02-.15l-.15-.46.26-.4c.1-.15.13-.25.15-.33ZM3.5 10.8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z",
      })
    ),
    shield: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        fillRule: "evenodd",
        d: "M11.76 2.08a.5.5 0 0 1 .24.42v6a.5.5 0 0 1-.17.38l-4.5 3.99a.5.5 0 0 1-.67 0l-4.49-4A.5.5 0 0 1 2 8.5V2.5c0-.18.1-.34.24-.42l.01-.02a2.5 2.5 0 0 1 .3-.16c.22-.1.52-.24.92-.37C4.27 1.26 5.44 1 7 1c1.56 0 2.73.26 3.53.53a6.97 6.97 0 0 1 1.22.53l.01.02ZM3 2.79v5.49l1.07.94 6.59-6.58-.44-.17C9.52 2.24 8.44 2 7 2c-1.44 0-2.52.24-3.22.47-.35.12-.6.24-.78.32Zm4 9.04L4.82 9.9 11 3.71v4.57l-4 3.55Z",
      })
    ),
    basket: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", { d: "M10.35 2.85a.5.5 0 1 0-.7-.7l-3 3a.5.5 0 1 0 .7.7l3-3Z" }),
      a.createElement("path", {
        d: "M2.09 6H4.5a.5.5 0 0 0 0-1H1.8a.75.75 0 0 0-.74.87l.8 4.88A1.5 1.5 0 0 0 3.36 12h7.3a1.5 1.5 0 0 0 1.48-1.25l.81-4.88A.75.75 0 0 0 12.2 5H10a.5.5 0 0 0 0 1h1.91l-.76 4.58a.5.5 0 0 1-.5.42h-7.3a.5.5 0 0 1-.5-.42L2.1 6Z",
      }),
      a.createElement("path", {
        d: "M4.5 7c.28 0 .5.22.5.5v2a.5.5 0 0 1-1 0v-2c0-.28.22-.5.5-.5ZM10 7.5a.5.5 0 0 0-1 0v2a.5.5 0 0 0 1 0v-2ZM6.5 9.5v-2a.5.5 0 0 1 1 0v2a.5.5 0 0 1-1 0Z",
      })
    ),
    beaker: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        fillRule: "evenodd",
        d: "M4.5 2h.75v3.87l-3.03 5.26c-.48.83.12 1.87 1.08 1.87h7.4c.96 0 1.57-1.04 1.08-1.87L8.75 5.87V2h.75a.5.5 0 0 0 0-1h-5a.5.5 0 0 0 0 1Zm1.75 4V2h1.5v4.13l.07.12 1 1.75H5.18l1.01-1.75.07-.12V6ZM4.6 9l-1.52 2.63c-.1.16.03.37.22.37h7.4c.2 0 .31-.2.22-.37L9.4 9H4.6Z",
      })
    ),
    hourglass: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", { d: "M7.5 10.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" }),
      a.createElement("path", {
        fillRule: "evenodd",
        d: "M3.5 1a.5.5 0 0 0-.5.5c0 1.06.14 1.9.68 2.97.34.7.86 1.5 1.6 2.53a16.53 16.53 0 0 0-1.8 2.96A6 6 0 0 0 3 12.49v.01a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5 6 6 0 0 0-.48-2.54c-.34-.8-.9-1.71-1.8-2.96a19.78 19.78 0 0 0 1.6-2.53c.54-1.08.68-1.9.68-2.97a.5.5 0 0 0-.5-.5h-7Zm6.49 11a4.68 4.68 0 0 0-.39-1.65c-.27-.65-.73-1.4-1.5-2.5a133 133 0 0 1-.75 1 .5.5 0 0 1-.56.1.5.5 0 0 1-.2-.16l-.7-.94a14.36 14.36 0 0 0-1.5 2.5A4.68 4.68 0 0 0 4.02 12H10ZM6.3 6.72l.7.94a90.06 90.06 0 0 0 .7-.96c.49-.67.87-1.22 1.17-1.7H5.13A32.67 32.67 0 0 0 6.3 6.72ZM4.56 4h4.88c.36-.73.5-1.31.55-2H4c.04.69.19 1.27.55 2Z",
      })
    ),
    flag: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        fillRule: "evenodd",
        d: "M11.5 1h-9a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 1 0V8h8.5a.5.5 0 0 0 .35-.85L9.21 4.5l2.64-2.65A.5.5 0 0 0 11.5 1ZM8.15 4.15 10.29 2H3v5h7.3L8.14 4.85a.5.5 0 0 1 0-.7Z",
      })
    ),
    cloudhollow: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        fillRule: "evenodd",
        d: "M10 7V6a3 3 0 0 0-5.9-.74l-.18.68-.7.07A2.5 2.5 0 0 0 3.5 11h3.19l.07-.01h.08L7 11h4a2 2 0 1 0 0-4h-1ZM3.12 5.02A3.5 3.5 0 0 0 3.5 12H11a3 3 0 1 0 0-6 4 4 0 0 0-7.88-.98Z",
      })
    ),
    cloud: a.createElement("path", { d: "M7 2a4 4 0 0 1 4 4 3 3 0 1 1 0 6H3.5a3.5 3.5 0 0 1-.38-6.98A4 4 0 0 1 7 2Z" }),
    edit: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        fillRule: "evenodd",
        d: "m13.85 2.15-2-2a.5.5 0 0 0-.7 0l-1.5 1.5-9 9a.5.5 0 0 0-.14.26L0 13.39a.5.5 0 0 0 .14.46.5.5 0 0 0 .46.14l2.48-.5a.5.5 0 0 0 .27-.14l9-9 1.5-1.5a.5.5 0 0 0 0-.7ZM12 3.29l.8-.79-1.3-1.3-.8.8L12 3.3Zm-2-.58L1.7 11 3 12.3 11.3 4 10 2.7ZM1.14 12.86l.17-.85.68.68-.85.17Z",
      })
    ),
    cog: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        d: "M5.59 5.59a2 2 0 0 1 3.27 2.14.5.5 0 1 0 .93.37 3 3 0 1 0-1.7 1.7.5.5 0 1 0-.36-.94A2 2 0 0 1 5.6 5.6Z",
        fill: "#333",
      }),
      a.createElement("path", {
        fillRule: "evenodd",
        d: "M.94 6.53c.13.12.19.3.18.46 0 .17-.05.34-.18.47L0 8.39c.19.94.55 1.81 1.07 2.58h1.32c.18 0 .34.07.46.2.12.11.2.27.2.45v1.32c.76.51 1.62.88 2.55 1.06l.94-.94a.63.63 0 0 1 .45-.19h.03c.16 0 .33.07.45.19l.94.94a7.1 7.1 0 0 0 2.55-1.06v-1.33c0-.18.07-.35.2-.46.11-.12.27-.2.45-.2h1.33A7.1 7.1 0 0 0 14 8.4l-.95-.94a.64.64 0 0 1-.18-.47c0-.17.06-.34.18-.46l.95-.95a7.1 7.1 0 0 0-1.05-2.52h-1.34a.63.63 0 0 1-.46-.2.64.64 0 0 1-.2-.46V1.06A7.1 7.1 0 0 0 8.42 0l-.94.94a.63.63 0 0 1-.45.19H7a.63.63 0 0 1-.45-.19L5.6 0a7.1 7.1 0 0 0-2.56 1.06v1.33c0 .18-.07.34-.2.46a.63.63 0 0 1-.45.2H1.06A7.1 7.1 0 0 0 0 5.59l.94.94Zm.7 1.63c.33-.32.49-.75.48-1.17 0-.42-.15-.85-.47-1.17l-.54-.54c.12-.43.3-.85.51-1.23h.77c.46 0 .87-.2 1.17-.5.3-.29.48-.7.48-1.16v-.77c.4-.22.81-.39 1.25-.52l.54.55c.33.32.75.48 1.16.48h.03c.42 0 .84-.16 1.16-.48l.54-.54c.44.12.85.3 1.24.5v.8c0 .45.19.87.49 1.16.3.3.7.5 1.16.5h.78c.2.37.38.78.5 1.2l-.54.55c-.33.32-.49.75-.48 1.17 0 .42.15.85.48 1.17l.55.55c-.13.44-.3.85-.52 1.24h-.77c-.45 0-.87.2-1.16.5-.3.29-.5.7-.5 1.16v.77c-.38.21-.8.39-1.23.51l-.54-.54a1.64 1.64 0 0 0-1.16-.48H7c-.41 0-.83.16-1.16.48l-.54.55a6.1 6.1 0 0 1-1.25-.52v-.76c0-.45-.19-.87-.48-1.16-.3-.3-.71-.5-1.17-.5h-.76a6.1 6.1 0 0 1-.53-1.25l.55-.55Z",
      })
    ),
    nut: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        d: "M5.59 8.41a2 2 0 1 1 3.27-.68.5.5 0 1 0 .93.37 3 3 0 1 0-1.7 1.7.5.5 0 0 0-.36-.94 2 2 0 0 1-2.14-.45Z",
      }),
      a.createElement("path", {
        fillRule: "evenodd",
        d: "M6.5.29a1 1 0 0 1 1 0l5.06 2.92c.31.18.5.51.5.87v5.84a1 1 0 0 1-.5.87L7.5 13.7a1 1 0 0 1-1 0L1.44 10.8a1 1 0 0 1-.5-.87V4.08a1 1 0 0 1 .5-.87L6.5.3Zm.5.86 5.06 2.93v5.84L7 12.85 1.94 9.92V4.08L7 1.15Z",
      })
    ),
    wrench: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        d: "M10.5 1c.44 0 .56.52.25.83l-.8.81c-.2.2-.2.52 0 .72l.69.7c.2.2.52.2.72 0l.8-.81c.32-.31.84-.2.84.25a2.5 2.5 0 0 1-3.41 2.33L2.7 12.7a1 1 0 0 1-1.42-1.42l6.88-6.88A2.5 2.5 0 0 1 10.5 1ZM2 12.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z",
      })
    ),
    ellipsis: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        d: "M4 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM13 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM7 8.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z",
      })
    ),
    check: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        d: "M13.85 3.35a.5.5 0 0 0-.7-.7L5 10.79.85 6.65a.5.5 0 1 0-.7.7l4.5 4.5c.2.2.5.2.7 0l8.5-8.5Z",
      })
    ),
    form: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        d: "M2 1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V6.4a.5.5 0 0 0-1 0V12H2V2h7.5a.5.5 0 0 0 0-1H2Z",
      }),
      a.createElement("path", {
        d: "m6.35 9.86 7.5-7.5a.5.5 0 0 0-.7-.71L6 8.8 3.85 6.65a.5.5 0 1 0-.7.7l2.5 2.5c.2.2.5.2.7 0Z",
      })
    ),
    batchdeny: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        d: "M11.5 2a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2Zm-2.646.646a.5.5 0 0 1 0 .708L5.207 7l3.647 3.646a.5.5 0 0 1-.708.708L4.5 7.707.854 11.354a.5.5 0 0 1-.708-.708L3.793 7 .146 3.354a.5.5 0 1 1 .708-.708L4.5 6.293l3.646-3.647a.5.5 0 0 1 .708 0ZM11 7a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 11 7Zm.5 4a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2Z",
      })
    ),
    batchaccept: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        d: "M11.5 2a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2Zm-2.2.6a.5.5 0 0 1 .1.7l-5.995 7.993a.505.505 0 0 1-.37.206.5.5 0 0 1-.395-.152L.146 8.854a.5.5 0 1 1 .708-.708l2.092 2.093L8.6 2.7a.5.5 0 0 1 .7-.1ZM11 7a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 11 7Zm.5 4a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2Z",
      })
    ),
    controls: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        d: "M10.5 1c.28 0 .5.22.5.5V2h1.5a.5.5 0 0 1 0 1H11v.5a.5.5 0 0 1-1 0V3H1.5a.5.5 0 0 1 0-1H10v-.5c0-.28.22-.5.5-.5ZM1.5 11a.5.5 0 0 0 0 1H10v.5a.5.5 0 0 0 1 0V12h1.5a.5.5 0 0 0 0-1H11v-.5a.5.5 0 0 0-1 0v.5H1.5ZM1 7c0-.28.22-.5.5-.5H3V6a.5.5 0 0 1 1 0v.5h8.5a.5.5 0 0 1 0 1H4V8a.5.5 0 0 1-1 0v-.5H1.5A.5.5 0 0 1 1 7Z",
      })
    ),
    plus: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        d: "M7.5.5a.5.5 0 0 0-1 0v6h-6a.5.5 0 0 0 0 1h6v6a.5.5 0 0 0 1 0v-6h6a.5.5 0 0 0 0-1h-6v-6Z",
      })
    ),
    closeAlt: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        d: "M2.03.97A.75.75 0 0 0 .97 2.03L5.94 7 .97 11.97a.75.75 0 1 0 1.06 1.06L7 8.06l4.97 4.97a.75.75 0 1 0 1.06-1.06L8.06 7l4.97-4.97A.75.75 0 0 0 11.97.97L7 5.94 2.03.97Z",
      })
    ),
    cross: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        d: "M1.85 1.15a.5.5 0 1 0-.7.7L6.29 7l-5.14 5.15a.5.5 0 0 0 .7.7L7 7.71l5.15 5.14a.5.5 0 0 0 .7-.7L7.71 7l5.14-5.15a.5.5 0 0 0-.7-.7L7 6.29 1.85 1.15Z",
      })
    ),
    trash: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        d: "M5.5 4.5c.28 0 .5.22.5.5v5a.5.5 0 0 1-1 0V5c0-.28.22-.5.5-.5ZM9 5a.5.5 0 0 0-1 0v5a.5.5 0 0 0 1 0V5Z",
      }),
      a.createElement("path", {
        fillRule: "evenodd",
        d: "M4.5.5c0-.28.22-.5.5-.5h4c.28 0 .5.22.5.5V2h3a.5.5 0 0 1 0 1H12v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V3h-.5a.5.5 0 0 1 0-1h3V.5ZM3 3v8a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3H3Zm2.5-2h3v1h-3V1Z",
      })
    ),
    pinalt: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        d: "M13.44 4.44 9.56.56a1.5 1.5 0 0 0-2.12 0L7 1a1.41 1.41 0 0 0 0 2L5 5H3.66A4 4 0 0 0 .83 6.17l-.48.48a.5.5 0 0 0 0 .7l2.8 2.8-3 3a.5.5 0 0 0 .7.7l3-3 2.8 2.8c.2.2.5.2.7 0l.48-.48A4 4 0 0 0 9 10.34V9l2-2c.55.55 1.45.55 2 0l.44-.44a1.5 1.5 0 0 0 0-2.12ZM11 5.59l-3 3v1.75a3 3 0 0 1-.88 2.12L7 12.6 1.41 7l.13-.12A3 3 0 0 1 3.66 6H5.4l3-3-.7-.7a.41.41 0 0 1 0-.6l.44-.43c.2-.2.5-.2.7 0l3.88 3.88c.2.2.2.5 0 .7l-.44.44a.41.41 0 0 1-.58 0L11 5.6Z",
      })
    ),
    unpin: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        d: "M13.44 4.44 9.56.56a1.5 1.5 0 0 0-2.12 0L7 1a1.41 1.41 0 0 0 0 2L5.7 4.3l.71.7 2-2-.7-.7a.41.41 0 0 1 0-.6l.44-.43c.2-.2.5-.2.7 0l3.88 3.88c.2.2.2.5 0 .7l-.44.44a.41.41 0 0 1-.58 0L11 5.6l-2 2 .7.7L11 7c.55.55 1.45.55 2 0l.44-.44a1.5 1.5 0 0 0 0-2.12ZM.83 6.17A4 4 0 0 1 3.59 5l1 1h-.93a3 3 0 0 0-2.12.88L1.4 7 7 12.59l.12-.13A3 3 0 0 0 8 10.34v-.93l1 1a4 4 0 0 1-1.17 2.76l-.48.48a.5.5 0 0 1-.7 0l-2.8-2.8-3 3a.5.5 0 0 1-.7-.7l3-3-2.8-2.8a.5.5 0 0 1 0-.7l.48-.48Zm1.02-5.02a.5.5 0 1 0-.7.7l11 11a.5.5 0 0 0 .7-.7l-11-11Z",
      })
    ),
    add: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        d: "M7 3c.28 0 .5.22.5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3c0-.28.22-.5.5-.5Z",
      }),
      a.createElement("path", {
        fillRule: "evenodd",
        d: "M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14Zm0-1A6 6 0 1 0 7 1a6 6 0 0 0 0 12Z",
      })
    ),
    subtract: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", { d: "M3.5 6.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7Z" }),
      a.createElement("path", {
        fillRule: "evenodd",
        d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z",
      })
    ),
    close: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        d: "M9.85 4.15c.2.2.2.5 0 .7L7.71 7l2.14 2.15a.5.5 0 0 1-.7.7L7 7.71 4.85 9.85a.5.5 0 0 1-.7-.7L6.29 7 4.15 4.85a.5.5 0 1 1 .7-.7L7 6.29l2.15-2.14c.2-.2.5-.2.7 0Z",
      }),
      a.createElement("path", {
        fillRule: "evenodd",
        d: "M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14Zm0-1A6 6 0 1 0 7 1a6 6 0 0 0 0 12Z",
      })
    ),
    delete: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        fillRule: "evenodd",
        d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0a6 6 0 0 1-9.87 4.58l8.45-8.45A5.98 5.98 0 0 1 13 7ZM2.42 10.87l8.45-8.45a6 6 0 0 0-8.46 8.46Z",
      })
    ),
    passed: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        d: "M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14Zm3.85-9.35c.2.2.2.5 0 .7l-4.5 4.5a.5.5 0 0 1-.7 0l-2.5-2.5a.5.5 0 1 1 .7-.7L6 8.79l4.15-4.14c.2-.2.5-.2.7 0Z",
      })
    ),
    changed: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        fillRule: "evenodd",
        d: "M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14ZM3.5 6.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7Z",
      })
    ),
    failed: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        d: "M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14Zm2.85-9.85c.2.2.2.5 0 .7L7.71 7l2.14 2.15a.5.5 0 0 1-.7.7L7 7.71 4.85 9.85a.5.5 0 0 1-.7-.7L6.29 7 4.15 4.85a.5.5 0 1 1 .7-.7L7 6.29l2.15-2.14c.2-.2.5-.2.7 0Z",
      })
    ),
    clear: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        fillRule: "evenodd",
        d: "M5 2h7a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H5a2 2 0 0 1-1.41-.59l-3-3a2 2 0 0 1 0-2.82l3-3A2 2 0 0 1 5 2Zm1.15 3.15c.2-.2.5-.2.7 0L8 6.29l1.15-1.14a.5.5 0 1 1 .7.7L8.71 7l1.14 1.15a.5.5 0 0 1-.7.7L8 7.71 6.85 8.85a.5.5 0 1 1-.7-.7L7.29 7 6.15 5.85a.5.5 0 0 1 0-.7Z",
      })
    ),
    comment: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        d: "M3.5 5a.5.5 0 1 0 0 1h7a.5.5 0 0 0 0-1h-7ZM3 8.5c0-.27.22-.5.5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5Z",
      }),
      a.createElement("path", {
        fillRule: "evenodd",
        d: "M12.5 12H5.7l-1.85 1.86a.5.5 0 0 1-.35.14.5.5 0 0 1-.5-.5V12H1.5a.5.5 0 0 1-.5-.5v-9c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v9a.5.5 0 0 1-.5.5ZM2 11V3h10v8H2Z",
      })
    ),
    commentadd: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        d: "M7.5 5a.5.5 0 1 0-1 0v1.5H5a.5.5 0 1 0 0 1h1.5V9a.5.5 0 0 0 1 0V7.5H9a.5.5 0 0 0 0-1H7.5V5Z",
      }),
      a.createElement("path", {
        fillRule: "evenodd",
        d: "M3.7 13.97a.5.5 0 0 1-.7-.46V12H1.5a.5.5 0 0 1-.5-.5v-9c0-.28.22-.5.5-.5h11c.28 0 .5.22.5.5v9a.5.5 0 0 1-.5.5H5.7l-1.85 1.85a.5.5 0 0 1-.16.1ZM2 3v8h10V3H2Z",
      })
    ),
    requestchange: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        d: "M9.85 6.65c.2.2.2.51 0 .7l-2 2a.5.5 0 1 1-.7-.7L8.3 7.5H4.5a.5.5 0 0 1 0-1h3.79L7.15 5.36a.5.5 0 1 1 .7-.71l2 2Z",
      }),
      a.createElement("path", {
        fillRule: "evenodd",
        d: "M3.7 13.97a.5.5 0 0 1-.7-.46V12H1.5a.5.5 0 0 1-.5-.5v-9c0-.28.22-.5.5-.5h11c.28 0 .5.22.5.5v9a.5.5 0 0 1-.5.5H5.7l-1.85 1.85a.5.5 0 0 1-.16.1ZM2 3v8h10V3H2Z",
      })
    ),
    comments: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        d: "M8.5 7a.5.5 0 0 0 0-1h-5a.5.5 0 1 0 0 1h5ZM9 8.5a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1 0-1h5c.28 0 .5.23.5.5Z",
      }),
      a.createElement("path", {
        fillRule: "evenodd",
        d: "M12 11.5V10h1.5a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5V3H.5a.5.5 0 0 0-.5.5v8c0 .28.22.5.5.5H2v1.5a.5.5 0 0 0 .5.5.5.5 0 0 0 .35-.14L4.71 12h6.79a.5.5 0 0 0 .5-.5ZM3 3V2h10v7h-1V3.5a.5.5 0 0 0-.5-.5H3Zm-2 8V4h10v7H1Z",
      })
    ),
    lock: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", { d: "M8 8a1 1 0 0 1-.5.87v1.63a.5.5 0 0 1-1 0V8.87A1 1 0 1 1 8 8Z" }),
      a.createElement("path", {
        fillRule: "evenodd",
        d: "M3 4a4 4 0 1 1 8 0v1h1.5c.28 0 .5.23.5.5v8a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-8c0-.27.22-.5.5-.5H3V4Zm7 1V4a3 3 0 1 0-6 0v1h6Zm2 1H2v7h10V6Z",
      })
    ),
    unlock: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", { d: "M6.5 8.87a1 1 0 1 1 1 0v1.63a.5.5 0 0 1-1 0V8.87Z" }),
      a.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M7 1a3 3 0 0 0-3 3v1h8.5c.28 0 .5.23.5.5v8a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-8c0-.27.22-.5.5-.5H3V4a4 4 0 0 1 7.76-1.38.5.5 0 0 1-.94.34A3 3 0 0 0 7 1ZM2 6h10v7H2V6Z",
      })
    ),
    key: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", { d: "M11 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" }),
      a.createElement("path", {
        fillRule: "evenodd",
        d: "M7.5 8.53v.97a.5.5 0 0 1-.5.5H5.5v1.5a.5.5 0 0 1-.5.5H3.5v1.5a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .15-.36l5.12-5.11a4.5 4.5 0 1 1 2.23 2.5ZM6 4.5a3.5 3.5 0 1 1 1.5 2.87c-.29-.2-1-.37-1 .48V9H5a.5.5 0 0 0-.5.5V11H3a.5.5 0 0 0-.5.5V13H1v-1.3l5.2-5.19c.15-.16.18-.4.1-.6A3.47 3.47 0 0 1 6 4.5Z",
      })
    ),
    outbox: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        d: "M7.35.15a.5.5 0 0 0-.7 0l-2 2a.5.5 0 1 0 .7.7L6.5 1.72v6.8a.5.5 0 0 0 1 0V1.7l1.15 1.15a.5.5 0 1 0 .7-.71l-2-2Z",
      }),
      a.createElement("path", {
        d: "M2 7.5a.5.5 0 1 0-1 0v5c0 .28.22.5.5.5h11a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-1 0V12H2V7.5Z",
      })
    ),
    credit: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", { d: "M2.5 8a.5.5 0 1 0 0 1h3a.5.5 0 0 0 0-1h-3Z" }),
      a.createElement("path", {
        fillRule: "evenodd",
        d: "M0 11.5c0 .28.22.5.5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5H.5a.5.5 0 0 0-.5.5v9ZM1 3v1h12V3H1Zm0 8h12V6H1v5Z",
      })
    ),
    button: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        d: "M1 3a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h3.5a.5.5 0 1 0 0-1H1V4h12v5h-1a.5.5 0 0 0 0 1h1a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H1Z",
      }),
      a.createElement("path", {
        d: "M6.45 7a.5.5 0 0 1 .3.08l3.48 2.02a.5.5 0 0 1 0 .87l-1.08.62.75 1.3a.75.75 0 0 1-1.3.75l-.75-1.3-1.07.62a.5.5 0 0 1-.67-.13.5.5 0 0 1-.1-.3L6 7.5a.5.5 0 0 1 .45-.5Z",
      })
    ),
    type: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        d: "M4 1.5c0-.27.22-.5.5-.5h5a.5.5 0 1 1 0 1h-2v10h2a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h2V2h-2a.5.5 0 0 1-.5-.5Z",
      }),
      a.createElement("path", {
        d: "M0 4.5c0-.27.22-.5.5-.5h4a.5.5 0 1 1 0 1H1v4h3.5a.5.5 0 1 1 0 1h-4a.5.5 0 0 1-.5-.5v-5ZM9.5 4a.5.5 0 1 0 0 1H13v4H9.5a.5.5 0 1 0 0 1h4a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5h-4Z",
      })
    ),
    pointerdefault: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        d: "M5.94 12.46c.11 0 .2-.06.25-.15l1.58-3.16 2.54 2.54c.04.05.1.07.19.07a.3.3 0 0 0 .2-.07l.8-.8a.27.27 0 0 0 0-.38L8.9 7.9l3.4-1.7c.06-.03.1-.07.12-.11a.22.22 0 0 0 .04-.14.33.33 0 0 0-.06-.16.17.17 0 0 0-.09-.07h-.02L1.91 1.55a.27.27 0 0 0-.35.36l4.15 10.37c.04.09.12.16.23.17Zm-.03 1h-.02a1.28 1.28 0 0 1-1.1-.8L.62 2.29A1.27 1.27 0 0 1 2.3.63l10.35 4.15c.52.18.79.65.81 1.11.04.53-.27.98-.7 1.2l-2.17 1.08L12.2 9.8c.5.5.5 1.3 0 1.8l-.8.8v.01c-.5.46-1.3.48-1.8-.01l-1.56-1.56-.95 1.92c-.23.45-.68.7-1.15.7h-.03Z",
      })
    ),
    pointerhand: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        d: "M11.87 6v-.02c-.03-.27-.23-.48-.47-.5a.5.5 0 0 0-.53.5v1.41c0 .25-.22.47-.47.47a.48.48 0 0 1-.47-.47V5.17a.6.6 0 0 0 0-.05c-.02-.27-.23-.5-.47-.5a.5.5 0 0 0-.52.5v1.65l-.01.1a.49.49 0 0 1-.46.37.48.48 0 0 1-.47-.47V4.62a.6.6 0 0 0 0-.05c-.03-.27-.23-.48-.47-.5a.5.5 0 0 0-.53.5v2.2c0 .25-.22.47-.47.47a.49.49 0 0 1-.47-.47V1.75c-.02-.27-.22-.5-.47-.5a.5.5 0 0 0-.52.5v6.78c0 .25-.22.47-.47.47a.48.48 0 0 1-.47-.47v-.26a.78.78 0 0 0-.06-.31.65.65 0 0 0-.16-.22l-.2-.19A6.37 6.37 0 0 0 3.06 7h-.02c-.43-.34-.62-.25-.69-.2-.26.14-.29.5-.13.74l1.73 2.6v.01h-.01l-.04.02.05-.02s1.21 2.6 3.57 2.6c3.54 0 4.2-1.9 4.31-4.42.04-.6.04-1.19.03-1.78V6Zm.97 2.38c-.06 1.29-.26 2.67-1.08 3.72-.88 1.12-2.29 1.65-4.23 1.65a4.64 4.64 0 0 1-3.4-1.62 6.96 6.96 0 0 1-1.05-1.5v-.02L1.4 8.1A1.6 1.6 0 0 1 1.15 7c.05-.38.26-.8.69-1.04.2-.13.48-.23.85-.19.36.05.68.22.98.45.14.1.27.22.4.33v-4.8A1.5 1.5 0 0 1 5.63.25c.93.04 1.43.86 1.43 1.55v1.33c.17-.05.35-.07.53-.06h.02c.5.04.91.33 1.15.71a1.5 1.5 0 0 1 .74-.16c.66.03 1.12.46 1.32.97a1.5 1.5 0 0 1 .64-.1h.02c.85.06 1.39.8 1.39 1.55v.48c0 .6 0 1.24-.03 1.86Z",
      })
    ),
    browser: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        fillRule: "evenodd",
        d: "M.5 13a.5.5 0 0 1-.5-.5v-11c0-.27.22-.5.5-.5h13c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5H.5Zm.5-1V4h12v8H1Zm1-9.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm2 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm2 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z",
      })
    ),
    tablet: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        fillRule: "evenodd",
        d: "M3.5 0C2.67 0 2 .68 2 1.5v11c0 .83.67 1.5 1.5 1.5h7c.83 0 1.5-.67 1.5-1.5v-11c0-.82-.67-1.5-1.5-1.5h-7Zm0 1h7c.28 0 .5.23.5.5V11H3V1.5c0-.27.22-.5.5-.5ZM6 12a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H6Z",
      })
    ),
    mobile: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        fillRule: "evenodd",
        d: "M3 1.5C3 .68 3.67 0 4.5 0h5c.83 0 1.5.68 1.5 1.5v11c0 .83-.67 1.5-1.5 1.5h-5A1.5 1.5 0 0 1 3 12.5v-11ZM4 12V2h6v10H4Z",
      })
    ),
    watch: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        key: "watch",
        fillRule: "evenodd",
        d: "M4 .5c0-.27.22-.5.5-.5h5a.5.5 0 0 1 0 1h-5A.5.5 0 0 1 4 .5ZM9.5 3h-5a.5.5 0 0 0-.5.5v7c0 .28.22.5.5.5h5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5Zm-5-1C3.67 2 3 2.68 3 3.5v7c0 .83.67 1.5 1.5 1.5h5c.83 0 1.5-.67 1.5-1.5v-7c0-.82-.67-1.5-1.5-1.5h-5ZM7 4c.28 0 .5.23.5.5v2h1a.5.5 0 1 1 0 1H7a.5.5 0 0 1-.5-.5V4.5c0-.27.22-.5.5-.5Zm-2.5 9a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5Z",
      })
    ),
    sidebar: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        d: "M2.5 4.5c0-.27.22-.5.5-.5h1a.5.5 0 1 1 0 1H3a.5.5 0 0 1-.5-.5ZM3 6a.5.5 0 1 0 0 1h1a.5.5 0 0 0 0-1H3Zm-.5 2.5c0-.27.22-.5.5-.5h1a.5.5 0 1 1 0 1H3a.5.5 0 0 1-.5-.5Z",
      }),
      a.createElement("path", {
        fillRule: "evenodd",
        d: "M1.5 13a.5.5 0 0 1-.5-.5v-11c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11Zm.5-1V2h3v10H2ZM6 2h6v10H6V2Z",
      })
    ),
    sidebaralt: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        d: "M9.5 4.5c0-.27.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5ZM10 6a.5.5 0 1 0 0 1h1a.5.5 0 0 0 0-1h-1Zm-.5 2.5c0-.27.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Z",
      }),
      a.createElement("path", {
        fillRule: "evenodd",
        d: "M1.5 13a.5.5 0 0 1-.5-.5v-11c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11Zm.5-1V2h6v10H2ZM9 2h3v10H9V2Z",
      })
    ),
    sidebaralttoggle: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        d: "M11.5 4.5A.5.5 0 0 0 11 4h-1a.5.5 0 1 0 0 1h1a.5.5 0 0 0 .5-.5ZM11 6a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1h1Zm.5 2.5A.5.5 0 0 0 11 8h-1a.5.5 0 1 0 0 1h1a.5.5 0 0 0 .5-.5Z",
      }),
      a.createElement("path", {
        fillRule: "evenodd",
        d: "M1.5 13a.5.5 0 0 1-.5-.5v-11c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11ZM9 12h3V2H9v10Zm-1 0H2V2h6v4.5H5.2l.66-.65a.5.5 0 1 0-.71-.7l-1.5 1.5a.5.5 0 0 0 0 .7l1.5 1.5a.5.5 0 1 0 .7-.7l-.64-.65H8V12Z",
      })
    ),
    sidebartoggle: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        d: "M2.5 4.5c0-.27.22-.5.5-.5h1a.5.5 0 1 1 0 1H3a.5.5 0 0 1-.5-.5ZM3 6a.5.5 0 1 0 0 1h1a.5.5 0 0 0 0-1H3Zm-.5 2.5c0-.27.22-.5.5-.5h1a.5.5 0 1 1 0 1H3a.5.5 0 0 1-.5-.5Z",
      }),
      a.createElement("path", {
        fillRule: "evenodd",
        d: "M1.5 13a.5.5 0 0 1-.5-.5v-11c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11Zm.5-1V2h3v10H2Zm4 0V7.5h2.8l-.65.65a.5.5 0 1 0 .7.7l1.5-1.5a.5.5 0 0 0 0-.7l-1.5-1.5a.5.5 0 1 0-.7.7l.64.65H6V2h6v10H6Z",
      })
    ),
    bottombar: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        d: "M3 10.5c0-.27.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Zm3.5-.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1Zm2.5.5c0-.27.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Z",
      }),
      a.createElement("path", {
        fillRule: "evenodd",
        d: "M1 1.5c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11ZM2 8V2h10v6H2Zm10 1v3H2V9h10Z",
      })
    ),
    bottombartoggle: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        d: "M3.5 10a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1Zm2.5.5c0-.27.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Zm3.5-.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1Z",
      }),
      a.createElement("path", {
        fillRule: "evenodd",
        d: "M1 12.5v-11c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5Zm1-.5V9h10v3H2Zm4.5-4H2V2h10v6H7.5V5.21l.65.65a.5.5 0 1 0 .7-.71l-1.5-1.5a.5.5 0 0 0-.7 0l-1.5 1.5a.5.5 0 1 0 .7.7l.65-.64v2.8Z",
      })
    ),
    cpu: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        fillRule: "evenodd",
        d: "M5 5.5c0-.27.22-.5.5-.5h3c.28 0 .5.23.5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-3ZM6 8V6h2v2H6Z",
      }),
      a.createElement("path", {
        fillRule: "evenodd",
        d: "M5.5 0c.28 0 .5.23.5.5V2h2V.5a.5.5 0 0 1 1 0V2h2.5c.28 0 .5.23.5.5V5h1.5a.5.5 0 0 1 0 1H12v2h1.5a.5.5 0 0 1 0 1H12v2.5a.5.5 0 0 1-.5.5H9v1.5a.5.5 0 0 1-1 0V12H6v1.5a.5.5 0 0 1-1 0V12H2.5a.5.5 0 0 1-.5-.5V9H.5a.5.5 0 0 1 0-1H2V6H.5a.5.5 0 0 1 0-1H2V2.5c0-.27.22-.5.5-.5H5V.5c0-.27.22-.5.5-.5ZM11 3H3v8h8V3Z",
      })
    ),
    database: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        fillRule: "evenodd",
        d: "M12 3c0-1.1-2.24-2-5-2s-5 .9-5 2v8c0 .43.26.75.54.98.3.23.68.41 1.12.55.88.3 2.06.47 3.34.47 1.28 0 2.46-.17 3.34-.46.44-.15.83-.33 1.12-.56.28-.23.54-.55.54-.98V3Zm-1.03 0a2.45 2.45 0 0 0-.8-.49A8.88 8.88 0 0 0 7 2c-1.29 0-2.4.21-3.16.51a2.45 2.45 0 0 0-.81.49l.05.05c.13.13.37.28.76.44C4.6 3.79 5.7 4 7 4s2.4-.21 3.16-.51a2.45 2.45 0 0 0 .81-.49ZM11 5.75V4.2A8.9 8.9 0 0 1 7 5a8.98 8.98 0 0 1-4-.8v1.55l.02.04c.02.04.06.09.14.15.17.13.44.27.82.4A10 10 0 0 0 7 6.75a10 10 0 0 0 3.02-.41c.38-.13.65-.27.82-.4a.62.62 0 0 0 .14-.15.15.15 0 0 0 .02-.03v-.01ZM3 7.01c.2.1.42.2.66.28.88.29 2.06.46 3.34.46 1.28 0 2.46-.17 3.34-.46.24-.08.46-.17.66-.28V8.5l-.02.04a.62.62 0 0 1-.14.15c-.17.13-.44.27-.82.4A10 10 0 0 1 7 9.5a10 10 0 0 1-3.02-.41 2.76 2.76 0 0 1-.82-.4.62.62 0 0 1-.14-.15.15.15 0 0 1-.02-.03V7Zm0 2.75V11l.02.04c.02.04.06.09.14.15.17.13.44.27.82.4A10 10 0 0 0 7 12a10 10 0 0 0 3.02-.41c.38-.13.65-.27.82-.4a.62.62 0 0 0 .14-.15.15.15 0 0 0 .02-.03V9.76c-.2.1-.42.2-.66.28-.88.29-2.06.46-3.34.46-1.28 0-2.46-.17-3.34-.46A4.77 4.77 0 0 1 3 9.76Z",
      })
    ),
    memory: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        d: "M5 3a.5.5 0 0 0-1 0v3a.5.5 0 0 0 1 0V3Zm2-.5c.28 0 .5.22.5.5v3a.5.5 0 0 1-1 0V3c0-.28.22-.5.5-.5Zm3 2a.5.5 0 1 0-1 0V6a.5.5 0 0 0 1 0V4.5Z",
      }),
      a.createElement("path", {
        fillRule: "evenodd",
        d: "M12 3.54a.5.5 0 0 0-.15-.39l-3-3a.5.5 0 0 0-.38-.14H2.5a.5.5 0 0 0-.5.5v13c0 .27.22.5.5.5h9a.5.5 0 0 0 .5-.5V3.53ZM3 1h5.3L11 3.71v5.3H3V1Zm0 9v3h8v-3H3Z",
      })
    ),
    structure: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        d: "M8.16 3.45a1.5 1.5 0 1 0-2.33 0l-4.02 6.58A1.5 1.5 0 1 0 2.91 12h8.18a1.5 1.5 0 1 0 1.1-1.97L8.16 3.45Zm-1.47.52a1.5 1.5 0 0 0 .62 0l4.03 6.58c-.11.14-.2.29-.25.45H2.9a1.5 1.5 0 0 0-.25-.45L6.7 3.97Z",
      })
    ),
    box: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        fillRule: "evenodd",
        d: "m7.21.05 6.49 2.99a.5.5 0 0 1 .3.47v6.98a.5.5 0 0 1-.3.47l-6.47 2.98a.5.5 0 0 1-.46 0L.3 10.96a.5.5 0 0 1-.3-.47V3.5a.5.5 0 0 1 .3-.47L6.79.05a.5.5 0 0 1 .43 0ZM1 4.28v5.9l5.5 2.54v-5.9L1 4.28Zm6.5 8.44 5.5-2.54v-5.9L7.5 6.82v5.9Zm4.8-9.22L7 5.95 1.7 3.5 7 1.05l5.3 2.45Z",
      })
    ),
    power: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", { d: "M7.5.5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0v-6Z" }),
      a.createElement("path", {
        d: "M4.27 2.8a.5.5 0 0 0-.54-.83 6 6 0 1 0 6.54 0 .5.5 0 0 0-.54.84 5 5 0 1 1-5.46 0Z",
      })
    ),
    photo: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        fillRule: "evenodd",
        d: "M6.25 4.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm-.5 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z",
      }),
      a.createElement("path", {
        fillRule: "evenodd",
        d: "M13 1.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5ZM2 9.3V2h10v5.3L9.85 5.15a.5.5 0 0 0-.7 0L6.5 7.8 5.35 6.65a.5.5 0 0 0-.7 0L2 9.3Zm7.5-3.1L12 8.7V12H2v-1.3l3-3 3.15 3.15a.5.5 0 0 0 .7-.71L7.21 8.5 9.5 6.21Z",
      })
    ),
    component: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        fillRule: "evenodd",
        d: "M3.5 1A2.5 2.5 0 0 0 1 3.5v7A2.5 2.5 0 0 0 3.5 13h7a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 10.5 1h-7ZM12 6.5H7.5V2h3c.83 0 1.5.68 1.5 1.5v3Zm0 1v3c0 .83-.67 1.5-1.5 1.5h-3V7.5H12ZM6.5 12V7.5H2v3c0 .83.67 1.5 1.5 1.5h3ZM2 6.5h4.5V2h-3C2.67 2 2 2.68 2 3.5v3Z",
      })
    ),
    grid: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        fillRule: "evenodd",
        d: "M1 1.5c0-.27.22-.5.5-.5H6c.28 0 .5.23.5.5V6a.5.5 0 0 1-.5.5H1.5A.5.5 0 0 1 1 6V1.5Zm1 4V2h3.5v3.5H2Zm5.5-4c0-.27.22-.5.5-.5h4.5c.28 0 .5.23.5.5V6a.5.5 0 0 1-.5.5H8a.5.5 0 0 1-.5-.5V1.5Zm1 4V2H12v3.5H8.5Zm-7 2A.5.5 0 0 0 1 8v4.5c0 .28.22.5.5.5H6a.5.5 0 0 0 .5-.5V8a.5.5 0 0 0-.5-.5H1.5Zm.5 1V12h3.5V8.5H2ZM7.5 8c0-.27.22-.5.5-.5h4.5c.28 0 .5.23.5.5v4.5a.5.5 0 0 1-.5.5H8a.5.5 0 0 1-.5-.5V8Zm1 4V8.5H12V12H8.5Z",
      })
    ),
    outline: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        d: "M2 2v2H1V1.5c0-.27.22-.5.5-.5H4v1H2ZM1 9V5h1v4H1Zm0 1v2.5c0 .28.22.5.5.5H4v-1H2v-2H1Zm9 3h2.5a.5.5 0 0 0 .5-.5V10h-1v2h-2v1Zm2-9h1V1.5a.5.5 0 0 0-.5-.5H10v1h2v2Zm-3 8v1H5v-1h4ZM9 1v1H5V1h4Zm4 8h-1V5h1v4ZM7 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
      })
    ),
    photodrag: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        fillRule: "evenodd",
        d: "M8.25 3.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm-.5 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z",
      }),
      a.createElement("path", {
        fillRule: "evenodd",
        d: "M14 7V.5a.5.5 0 0 0-.5-.5h-10a.5.5 0 0 0-.5.5V3H.5a.5.5 0 0 0-.5.5V6h1V4h2v6.5c0 .28.22.5.5.5H10v2H8v1h2.5a.5.5 0 0 0 .5-.5V11h2.5a.5.5 0 0 0 .5-.5V7ZM4 1v5.8l1.65-1.65c.2-.2.5-.2.7 0L7.5 6.3l2.65-2.65c.2-.2.5-.2.7 0L13 5.8V1H4Zm9 6.21-2.5-2.5-2.3 2.3 1.15 1.14a.5.5 0 1 1-.7.7L6 6.22l-2 2v1.8h9V7.2Z",
      }),
      a.createElement("path", { d: "M0 10V7h1v3H0Zm0 3.5V11h1v2h2v1H.5a.5.5 0 0 1-.5-.5Zm7 .5H4v-1h3v1Z" })
    ),
    search: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        fillRule: "evenodd",
        d: "M9.54 10.2a5.5 5.5 0 1 1 .66-.66c.06.03.11.06.15.1l3 3a.5.5 0 0 1-.7.71l-3-3a.5.5 0 0 1-.1-.14ZM10.5 6a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z",
      })
    ),
    zoom: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        d: "M6 3.5c.28 0 .5.22.5.5v1.5H8a.5.5 0 0 1 0 1H6.5V8a.5.5 0 0 1-1 0V6.5H4a.5.5 0 0 1 0-1h1.5V4c0-.28.22-.5.5-.5Z",
      }),
      a.createElement("path", {
        fillRule: "evenodd",
        d: "M9.54 10.2a5.5 5.5 0 1 1 .66-.66c.06.03.11.06.15.1l3 3a.5.5 0 0 1-.7.71l-3-3a.5.5 0 0 1-.1-.14ZM10.5 6a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z",
      })
    ),
    zoomout: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", { d: "M4 5.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1H4Z" }),
      a.createElement("path", {
        fillRule: "evenodd",
        d: "M6 11.5c1.35 0 2.59-.49 3.54-1.3.03.06.06.11.1.15l3 3a.5.5 0 0 0 .71-.7l-3-3a.5.5 0 0 0-.14-.1A5.5 5.5 0 1 0 6 11.5Zm0-1a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z",
      })
    ),
    zoomreset: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        d: "M1.5 2.84V1.5a.5.5 0 0 0-1 0V4c0 .28.22.5.5.5h2.5a.5.5 0 0 0 0-1H2.26a4.5 4.5 0 1 1-.5 4.02.5.5 0 1 0-.94.33 5.5 5.5 0 0 0 8.72 2.36l.1.14 3 3a.5.5 0 0 0 .71-.7l-3-3a.5.5 0 0 0-.14-.1 5.5 5.5 0 1 0-8.7-6.7Z",
      })
    ),
    eye: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", { d: "M7 9.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" }),
      a.createElement("path", {
        fillRule: "evenodd",
        d: "m14 7-.2.3c-.13.16-3.06 4.2-6.8 4.2C3.26 11.5.33 7.46.2 7.3L0 7l.2-.3C.34 6.55 3.27 2.5 7 2.5c3.74 0 6.67 4.04 6.8 4.2l.2.3ZM2.9 5.3A13 13 0 0 0 1.24 7 13 13 0 0 0 2.9 8.7c1.14.97 2.58 1.8 4.1 1.8 1.52 0 2.96-.83 4.1-1.8A13 13 0 0 0 12.76 7a13 13 0 0 0-1.66-1.7C9.96 4.33 8.52 3.5 7 3.5c-1.52 0-2.96.83-4.1 1.8Z",
      })
    ),
    eyeclose: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        d: "M1.85 1.15a.5.5 0 1 0-.7.7l11 11a.5.5 0 0 0 .7-.7l-11-11ZM11.1 8.7c-.17.15-.36.3-.55.44l.72.71a13.25 13.25 0 0 0 2.52-2.56L14 7l-.2-.3c-.13-.16-3.06-4.2-6.8-4.2-.89 0-1.73.23-2.5.58l.76.76A4.86 4.86 0 0 1 7 3.5c1.52 0 2.96.83 4.1 1.8A13 13 0 0 1 12.76 7a13 13 0 0 1-1.66 1.7ZM.2 6.7c.08-.09 1.04-1.41 2.53-2.55l.72.71c-.2.14-.38.3-.55.44A13 13 0 0 0 1.24 7 13 13 0 0 0 2.9 8.7c1.14.97 2.58 1.8 4.1 1.8.6 0 1.18-.13 1.74-.34l.77.76c-.78.35-1.62.58-2.51.58C3.26 11.5.33 7.46.2 7.3L0 7l.2-.3Z",
      }),
      a.createElement("path", {
        d: "M4.5 7c0-.32.06-.63.17-.91l3.24 3.24A2.5 2.5 0 0 1 4.5 7Zm4.83.91L6.09 4.67a2.5 2.5 0 0 1 3.24 3.24Z",
      })
    ),
    lightning: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        fillRule: "evenodd",
        d: "M2.52 6.6a.57.57 0 0 0-.17.54c.04.2.19.37.38.41l2.78.73-1.5 5c-.06.24.02.5.22.63a.5.5 0 0 0 .28.09.5.5 0 0 0 .35-.14L11.5 7.4c.14-.13.2-.34.15-.54a.53.53 0 0 0-.38-.4l-2.7-.7L10.79.78c.1-.23.04-.5-.15-.66a.5.5 0 0 0-.65 0L2.52 6.6Zm7.72.63-3.07-.8 1.85-4.14-5.2 4.51 2.94.77-1.27 4.28 4.75-4.62Zm-5.73 6.2.04.02Z",
      })
    ),
    lightningoff: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        d: "M10.14 8.72 11.5 7.4c.14-.13.2-.34.15-.54a.53.53 0 0 0-.38-.4l-2.7-.7L10.79.78c.1-.23.04-.5-.15-.66a.5.5 0 0 0-.65 0L5.46 4.05l.71.7L9.02 2.3 7.38 5.97l.7.7 2.16.56-.8.79.7.7ZM2.52 6.6a.57.57 0 0 0-.17.54c.04.2.19.37.38.41l2.78.73-1.5 5c-.06.24.02.5.22.63a.5.5 0 0 0 .63-.05l3.84-3.74-.7-.7-2.51 2.43 1.13-3.81-.68-.69L3.8 6.8l.85-.73-.71-.7L2.52 6.6Zm-.67-5.45a.5.5 0 1 0-.7.7l11 11a.5.5 0 0 0 .7-.7l-11-11Z",
      })
    ),
    contrast: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        fillRule: "evenodd",
        d: "M3 3H.5a.5.5 0 0 0-.5.5v10c0 .28.22.5.5.5h10a.5.5 0 0 0 .5-.5V11h2.5a.5.5 0 0 0 .5-.5V.5a.5.5 0 0 0-.5-.5h-10a.5.5 0 0 0-.5.5V3Zm1 1v2.3L6.3 4H4ZM3 4v6.5a.5.5 0 0 0 .5.5H10v2H1V4h2Zm1-1h6.5a.5.5 0 0 1 .5.5V10h2V1H4v2Zm6 7V7.71l-2.3 2.3H10Zm0-3.7V4.7L4.7 10h1.6L10 6.3ZM9.3 4H7.7L4 7.71V9.3L9.3 4Z",
      })
    ),
    switchalt: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        fillRule: "evenodd",
        d: "M3 3V.5c0-.27.22-.5.5-.5h10c.28 0 .5.23.5.5v10a.5.5 0 0 1-.5.5H11v2.5a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-10c0-.27.22-.5.5-.5H3Zm1 0V1h9v9h-2V3.5a.5.5 0 0 0-.5-.5H4Zm6 8v2H1V4h2v6.5c0 .28.22.5.5.5H10Zm0-1H4V4h6v6Z",
      })
    ),
    mirror: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        d: "M1 1.5c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11ZM2 12h10V2L2 12Z",
      })
    ),
    grow: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", { d: "M1.5 1a.5.5 0 1 0 0 1H12v10.5a.5.5 0 0 0 1 0V2a1 1 0 0 0-1-1H1.5Z" }),
      a.createElement("path", {
        d: "M1 3.5c0-.27.22-.5.5-.5H10a1 1 0 0 1 1 1v8.5a.5.5 0 0 1-1 0V4H1.5a.5.5 0 0 1-.5-.5Z",
      }),
      a.createElement("path", {
        fillRule: "evenodd",
        d: "M1.5 5a.5.5 0 0 0-.5.5v7c0 .28.22.5.5.5h7a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5h-7ZM2 6v6h6V6H2Z",
      })
    ),
    paintbrush: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        fillRule: "evenodd",
        d: "M11.8535.1464a.5.5 0 0 0-.7071 0L2.9827 8.3102a2.2396 2.2396 0 0 0-1.0737.599C.6772 10.141.2402 11.903.0852 12.9978 0 13.5998 0 14.0002 0 14.0002s.4004 0 1.0023-.0853c1.095-.155 2.8569-.5919 4.0887-1.8237.307-.307.5067-.6806.5992-1.0743l8.1633-8.1633a.5.5 0 0 0 0-.7071l-2-2Zm-6.253 9.546L6.543 8.75l-1.293-1.2929-.9424.9424a2.242 2.242 0 0 1 .7835.5097c.23.2302.4.4977.5095.7831ZM7.25 8.0428 12.7929 2.5 11.5 1.2071 5.957 6.75 7.25 8.0429ZM4.3839 9.6163c.4881.4882.4881 1.2796 0 1.7678-.7665.7664-1.832 1.1845-2.7791 1.403a8.6972 8.6972 0 0 1-.49.0982 8.7151 8.7151 0 0 1 .0982-.4899c.2186-.9471.6367-2.0126 1.403-2.779.4882-.4882 1.2797-.4882 1.7679 0Z",
      })
    ),
    ruler: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        d: "M1.5 1c.28 0 .5.23.5.5V2h10v-.5a.5.5 0 0 1 1 0v2a.5.5 0 0 1-1 0V3H2v.5a.5.5 0 0 1-1 0v-2c0-.27.22-.5.5-.5Z",
      }),
      a.createElement("path", {
        fillRule: "evenodd",
        d: "M1.5 6a.5.5 0 0 0-.5.5v6c0 .28.22.5.5.5h11a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5h-11ZM2 7v5h10V7h-1v2.5a.5.5 0 0 1-1 0V7h-.75v1a.5.5 0 0 1-1 0V7H7.5v2.5a.5.5 0 0 1-1 0V7h-.75v1a.5.5 0 0 1-1 0V7H4v2.5a.5.5 0 0 1-1 0V7H2Z",
      })
    ),
    stop: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        d: "M4.5 4a.5.5 0 0 0-.5.5v5c0 .28.22.5.5.5h5a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5h-5Z",
      }),
      a.createElement("path", {
        fillRule: "evenodd",
        d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z",
      })
    ),
    camera: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        fillRule: "evenodd",
        d: "M10 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM9 7a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z",
      }),
      a.createElement("path", {
        fillRule: "evenodd",
        d: "M2.5 1a.5.5 0 0 0-.5.5V2H.5a.5.5 0 0 0-.5.5v9c0 .28.22.5.5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5H6v-.5a.5.5 0 0 0-.5-.5h-3ZM1 3v8h12V3H1Z",
      })
    ),
    video: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", { d: "M2.5 10a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z" }),
      a.createElement("path", {
        fillRule: "evenodd",
        d: "M0 4c0-1.1.9-2 2-2h6a2 2 0 0 1 2 2v.5l3.19-2.4a.5.5 0 0 1 .81.4v9a.5.5 0 0 1-.8.4L10 9.5v.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm9 0v1.5a.5.5 0 0 0 .8.4L13 3.5v7L9.8 8.1a.5.5 0 0 0-.8.4V10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1Z",
      })
    ),
    speaker: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        fillRule: "evenodd",
        d: "M1 4.50004V9.50004C1 9.77618 1.22386 10 1.5 10H4L7.17075 12.7744C7.49404 13.0573 8 12.8277 8 12.3982V1.60192C8 1.17235 7.49404 0.942757 7.17075 1.22564L4 4.00004H1.5C1.22386 4.00004 1 4.2239 1 4.50004ZM4 9.00004V5.00004H2V9.00004H4ZM4.99804 9.54456C4.99934 9.52989 5 9.51505 5 9.50004V4.50004C5 4.48504 4.99934 4.47019 4.99804 4.45552L7 2.70381V11.2963L4.99804 9.54456Z",
      }),
      a.createElement("path", {
        d: "M10.1498 1.75202C9.88637 1.66927 9.60572 1.81577 9.52297 2.07922C9.44023 2.34267 9.58672 2.62332 9.85017 2.70607C11.6763 3.27963 13 4.98596 13 7.00014C13 9.01433 11.6763 10.7207 9.85017 11.2942C9.58672 11.377 9.44023 11.6576 9.52297 11.9211C9.60572 12.1845 9.88637 12.331 10.1498 12.2483C12.3808 11.5476 14 9.4636 14 7.00014C14 4.53669 12.3808 2.45272 10.1498 1.75202Z",
      }),
      a.createElement("path", {
        d: "M10.2504 3.96861C10.0113 3.83033 9.70547 3.91201 9.5672 4.15105C9.42893 4.39008 9.51061 4.69594 9.74964 4.83421C10.4982 5.26723 11 6.07534 11 7.00006C11 7.92479 10.4982 8.7329 9.74964 9.16591C9.51061 9.30418 9.42893 9.61005 9.5672 9.84908C9.70547 10.0881 10.0113 10.1698 10.2504 10.0315C11.2952 9.42711 12 8.29619 12 7.00006C12 5.70394 11.2952 4.57302 10.2504 3.96861Z",
      })
    ),
    play: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        d: "m12.81 7.43-9.05 5.6A.5.5 0 0 1 3 12.6V1.4c0-.4.43-.63.76-.43l9.05 5.6a.5.5 0 0 1 0 .86Z",
      })
    ),
    playback: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        d: "M11.24 12.04 3.7 7.42a.5.5 0 0 1-.2-.23v4.05a.75.75 0 0 1-1.5 0v-8.5a.75.75 0 0 1 1.5 0V6.8a.5.5 0 0 1 .2-.23l7.54-4.6a.5.5 0 0 1 .76.42v9.22a.5.5 0 0 1-.76.43Z",
      })
    ),
    playnext: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        d: "m2.76 12.04 7.54-4.61a.5.5 0 0 0 .2-.23v4.05a.75.75 0 0 0 1.5 0v-8.5a.75.75 0 0 0-1.5 0V6.8a.5.5 0 0 0-.2-.23l-7.54-4.6a.5.5 0 0 0-.76.42v9.22c0 .39.43.63.76.43Z",
      })
    ),
    rewind: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        d: "M9 2.42v2.32L13.23 2a.5.5 0 0 1 .77.42v9.16a.5.5 0 0 1-.77.42L9 9.26v2.32a.5.5 0 0 1-.77.42L1.5 7.65v3.6a.75.75 0 0 1-1.5 0v-8.5a.75.75 0 0 1 1.5 0v3.6L8.23 2a.5.5 0 0 1 .77.42Z",
      })
    ),
    fastforward: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        d: "M5 2.42v2.32L.77 2a.5.5 0 0 0-.77.42v9.16c0 .4.44.64.77.42L5 9.26v2.32c0 .4.44.64.77.42l6.73-4.35v3.6a.75.75 0 0 0 1.5 0v-8.5a.75.75 0 0 0-1.5 0v3.6L5.77 2a.5.5 0 0 0-.77.42Z",
      })
    ),
    stopalt: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        d: "M1 1.5c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11Z",
      })
    ),
    sidebyside: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        fillRule: "evenodd",
        d: "M1 1.5c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11ZM2 12V2h5v10H2Z",
      })
    ),
    stacked: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        fillRule: "evenodd",
        d: "M12.5 1c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11c0-.27.22-.5.5-.5h11ZM2 2h10v5H2V2Z",
      })
    ),
    sun: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", { d: "M7.5.5a.5.5 0 0 0-1 0V2a.5.5 0 0 0 1 0V.5Z" }),
      a.createElement("path", {
        fillRule: "evenodd",
        d: "M7 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm0-1a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
      }),
      a.createElement("path", {
        d: "M7 11.5c.28 0 .5.22.5.5v1.5a.5.5 0 0 1-1 0V12c0-.28.22-.5.5-.5ZM11.5 7c0-.28.22-.5.5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5ZM.5 6.5a.5.5 0 0 0 0 1H2a.5.5 0 0 0 0-1H.5ZM3.82 10.18c.2.2.2.51 0 .7l-1.06 1.07a.5.5 0 1 1-.71-.7l1.06-1.07c.2-.2.51-.2.7 0ZM11.95 2.76a.5.5 0 1 0-.7-.71l-1.07 1.06a.5.5 0 1 0 .7.7l1.07-1.05ZM10.18 10.18c.2-.2.51-.2.7 0l1.07 1.06a.5.5 0 1 1-.7.71l-1.07-1.06a.5.5 0 0 1 0-.7ZM2.76 2.05a.5.5 0 1 0-.71.7l1.06 1.07a.5.5 0 0 0 .7-.7L2.77 2.04Z",
      })
    ),
    moon: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        fillRule: "evenodd",
        d: "M7.78.04a7.03 7.03 0 0 0-4.28.9 7 7 0 1 0 9.87 8.96c.1-.21-.14-.41-.36-.32a4.98 4.98 0 0 1-2 .42A5 5 0 0 1 8.53.65c.2-.12.19-.44-.04-.49a7.04 7.04 0 0 0-.72-.12Zm-1.27.98a6 6 0 0 0 4.98 9.96 6 6 0 1 1-4.98-9.96Z",
      })
    ),
    book: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        fillRule: "evenodd",
        d: "M13 2a2 2 0 0 0-2-2H1.5a.5.5 0 0 0-.5.5v13c0 .28.22.5.5.5H11a2 2 0 0 0 2-2V2ZM3 13h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H7v6a.5.5 0 0 1-.86.36L5.5 6.7l-.65.65A.5.5 0 0 1 4 7V1H3v12ZM5 1v4.8l.15-.15a.5.5 0 0 1 .74.04l.11.1V1H5Z",
      })
    ),
    document: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        d: "M4 5.5c0-.28.22-.5.5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5ZM4.5 7.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5ZM4 10.5c0-.28.22-.5.5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Z",
      }),
      a.createElement("path", {
        fillRule: "evenodd",
        d: "M1.5 0a.5.5 0 0 0-.5.5v13c0 .28.22.5.5.5h11a.5.5 0 0 0 .5-.5V3.2a.5.5 0 0 0-.15-.35l-2.7-2.7A.5.5 0 0 0 9.79 0H1.5ZM2 1h7.5v2c0 .28.22.5.5.5h2V13H2V1Z",
      })
    ),
    copy: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        fillRule: "evenodd",
        d: "M11.75.07A.5.5 0 0 0 11.5 0h-6a.5.5 0 0 0-.5.5V3H.5a.5.5 0 0 0-.5.5v10c0 .28.22.5.5.5h8a.5.5 0 0 0 .5-.5V11h4.5a.5.5 0 0 0 .5-.5V2.51a.5.5 0 0 0-.15-.36l-2-2a.5.5 0 0 0-.1-.08ZM9 10h4V3h-1.5a.5.5 0 0 1-.5-.5V1H6v2h.5a.5.5 0 0 1 .36.15l1.99 2c.1.09.15.21.15.35v4.51ZM1 4v9h7V6H6.5a.5.5 0 0 1-.5-.5V4H1Z",
      })
    ),
    category: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        d: "M3 1.5c0-.28.22-.5.5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5Zm-1 2c0-.27.22-.5.5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5Z",
      }),
      a.createElement("path", {
        fillRule: "evenodd",
        d: "M1 5.5c0-.28.22-.5.5-.5h11c.28 0 .5.22.5.5v7a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-7ZM2 12V6h10v6H2Z",
      })
    ),
    folder: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        fillRule: "evenodd",
        d: "M6.59 3.5 5.09 2H1v9h12V3.5H6.59Zm.41-1L5.8 1.3a1 1 0 0 0-.71-.3H.5a.5.5 0 0 0-.5.5v10c0 .28.22.5.5.5h13a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5H7Z",
      })
    ),
    print: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        d: "M4.5 8a.5.5 0 1 0 0 1h5a.5.5 0 0 0 0-1h-5Zm0 2a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5Z",
      }),
      a.createElement("path", {
        fillRule: "evenodd",
        d: "M2 1.5c0-.27.22-.5.5-.5h8a.5.5 0 0 1 .36.15l.99 1c.1.09.15.21.15.35v1.51h1.5c.28 0 .5.22.5.5v5a.5.5 0 0 1-.5.5H12v2.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10H.5a.5.5 0 0 1-.5-.5v-5c0-.28.22-.5.5-.5H2V1.5ZM13 9h-1V6.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5V9H1V5h12v4Zm-2-6v1H3V2h7v.5c0 .28.22.5.5.5h.5Zm-8 9h8V7H3v5Z",
      })
    ),
    graphline: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        d: "M5.15 6.15c.2-.2.5-.2.7 0L7 7.3l2.15-2.15c.2-.2.5-.2.7 0l1 1a.5.5 0 0 1-.7.7l-.65-.64-2.15 2.15a.5.5 0 0 1-.7 0L5.5 7.2 3.85 8.86a.5.5 0 1 1-.7-.71l2-2Z",
      }),
      a.createElement("path", {
        fillRule: "evenodd",
        d: "M1.5 1a.5.5 0 0 0-.5.5v11c0 .28.22.5.5.5h11a.5.5 0 0 0 .5-.5v-11a.5.5 0 0 0-.5-.5h-11ZM2 2v10h10V2H2Z",
      })
    ),
    calendar: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        fillRule: "evenodd",
        d: "M3.5 0c.28 0 .5.22.5.5V1h6V.5a.5.5 0 0 1 1 0V1h1.5c.28 0 .5.22.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11c0-.28.22-.5.5-.5H3V.5c0-.28.22-.5.5-.5ZM2 4v2.3h3V4H2Zm0 5.2V6.8h3v2.4H2Zm0 .5V12h3V9.7H2Zm3.5 0V12h3V9.7h-3Zm3.5 0V12h3V9.7H9Zm3-.5H9V6.8h3v2.4Zm-3.5 0h-3V6.8h3v2.4ZM9 4v2.3h3V4H9ZM5.5 6.3h3V4h-3v2.3Z",
      })
    ),
    graphbar: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        d: "M12 2.5a.5.5 0 0 0-1 0v10a.5.5 0 0 0 1 0v-10Zm-3 2a.5.5 0 0 0-1 0v8a.5.5 0 0 0 1 0v-8ZM5.5 7c.28 0 .5.22.5.5v5a.5.5 0 0 1-1 0v-5c0-.28.22-.5.5-.5ZM3 10.5a.5.5 0 0 0-1 0v2a.5.5 0 0 0 1 0v-2Z",
      })
    ),
    menu: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        d: "M13 2a.5.5 0 0 1 0 1H1a.5.5 0 0 1 0-1h12Zm-3 3a.5.5 0 0 1 0 1H1a.5.5 0 0 1 0-1h9Zm1.5 3.5A.5.5 0 0 0 11 8H1a.5.5 0 0 0 0 1h10a.5.5 0 0 0 .5-.5Zm-4 2.5a.5.5 0 0 1 0 1H1a.5.5 0 0 1 0-1h6.5Z",
      })
    ),
    menualt: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        d: "M1 2a.5.5 0 0 0 0 1h12a.5.5 0 0 0 0-1H1Zm3 3a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1H4ZM2.5 8.5c0-.28.22-.5.5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5Zm4 2.5a.5.5 0 0 0 0 1H13a.5.5 0 0 0 0-1H6.5Z",
      })
    ),
    filter: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        d: "M1 2a.5.5 0 0 0 0 1h12a.5.5 0 0 0 0-1H1Zm2 3a.5.5 0 0 0 0 1h8a.5.5 0 0 0 0-1H3Zm1.5 3.5c0-.28.22-.5.5-.5h4a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5Zm2 2.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1Z",
      })
    ),
    docchart: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        fillRule: "evenodd",
        d: "M1 1.5C1 1.22386 1.22386 1 1.5 1H12.5C12.7761 1 13 1.22386 13 1.5V12.5C13 12.7761 12.7761 13 12.5 13H1.5C1.22386 13 1 12.7761 1 12.5V1.5ZM2 4V6.2998H5V4H2ZM2 9.2002V6.7998H5V9.2002H2ZM2 9.7002V12H5V9.7002H2ZM5.5 9.7002V12H8.5V9.7002H5.5ZM9 9.7002V12H12V9.7002H9ZM12 9.2002H9V6.7998H12V9.2002ZM8.5 9.2002H5.5V6.7998H8.5V9.2002ZM9 6.2998H12V4H9V6.2998ZM5.5 6.2998H8.5V4H5.5V6.2998Z",
      })
    ),
    doclist: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        d: "M3.5 6.5c0-.28.22-.5.5-.5h6a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.5-.5ZM4 9a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H4Z",
      }),
      a.createElement("path", {
        fillRule: "evenodd",
        d: "M1 1.5c0-.28.22-.5.5-.5h11c.28 0 .5.22.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11ZM2 4v8h10V4H2Z",
      })
    ),
    markup: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        d: "M8.98 1.63a.5.5 0 0 0-.96-.26l-3 11a.5.5 0 1 0 .96.26l3-11ZM3.32 3.62a.5.5 0 0 1 .06.7L1.15 7l2.23 2.68a.5.5 0 1 1-.76.64l-2.5-3a.5.5 0 0 1 0-.64l2.5-3a.5.5 0 0 1 .7-.06Zm7.36 0a.5.5 0 0 0-.06.7L12.85 7l-2.23 2.68a.5.5 0 0 0 .76.64l2.5-3a.5.5 0 0 0 0-.64l-2.5-3a.5.5 0 0 0-.7-.06Z",
      })
    ),
    bold: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        fillRule: "evenodd",
        d: "M3 2v1.5h1v7H3V12h5a3 3 0 0 0 1.8-5.4A2.74 2.74 0 0 0 8 2H3Zm5 5.5H5.5v3H8a1.5 1.5 0 1 0 0-3Zm-.25-4H5.5V6h2.25a1.25 1.25 0 1 0 0-2.5Z",
      })
    ),
    italic: a.createElement("path", { d: "M5 2h6v1H8.5l-2 8H9v1H3v-1h2.5l2-8H5V2Z" }),
    paperclip: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        d: "M10.55 2.27a1.5 1.5 0 0 0-2.12 0L2.78 7.92a2.5 2.5 0 0 0 3.53 3.54l3.54-3.54a.5.5 0 1 1 .7.71l-3.53 3.54a3.5 3.5 0 0 1-4.96-4.94v-.01l5.66-5.66h.01a2.5 2.5 0 0 1 3.53 3.53L5.6 10.76a1.5 1.5 0 0 1-2.12-2.12L7.02 5.1a.5.5 0 1 1 .7.7L4.2 9.34a.5.5 0 0 0 .7.7l5.66-5.65a1.5 1.5 0 0 0 0-2.12Z",
      })
    ),
    listordered: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        d: "M5 2.5c0-.28.22-.5.5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5ZM5 7c0-.28.22-.5.5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 7Zm.5 4a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7Zm-3-9H1v1h1v3h1V2.5a.5.5 0 0 0-.5-.5ZM3 8.5v1a.5.5 0 0 1-1 0V9h-.5a.5.5 0 0 1 0-1h1c.28 0 .5.22.5.5Zm-1 2a.5.5 0 0 0-1 0V12h2v-1H2v-.5Z",
      })
    ),
    listunordered: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        d: "M2.75 2.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM5.5 2a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7Zm0 9a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7ZM2 12.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM5 7c0-.28.22-.5.5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 7Zm-3 .75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z",
      })
    ),
    paragraph: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        d: "M6 7a3 3 0 1 1 0-6h5.5a.5.5 0 0 1 0 1H10v10.5a.5.5 0 0 1-1 0V2H7v10.5a.5.5 0 0 1-1 0V7Z",
      })
    ),
    markdown: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        d: "M2 4.5h1.5L5 6.38 6.5 4.5H8v5H6.5V7L5 8.88 3.5 7v2.5H2v-5Zm7.75 0h1.5V7h1.25l-2 2.5-2-2.5h1.25V4.5Z",
      }),
      a.createElement("path", {
        fillRule: "evenodd",
        d: "M.5 2a.5.5 0 0 0-.5.5v9c0 .28.22.5.5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5H.5ZM1 3v8h12V3H1Z",
      })
    ),
    repository: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        d: "M5 2.5C5 2.77614 4.77614 3 4.5 3C4.22386 3 4 2.77614 4 2.5C4 2.22386 4.22386 2 4.5 2C4.77614 2 5 2.22386 5 2.5Z",
      }),
      a.createElement("path", {
        d: "M4.5 5C4.77614 5 5 4.77614 5 4.5C5 4.22386 4.77614 4 4.5 4C4.22386 4 4 4.22386 4 4.5C4 4.77614 4.22386 5 4.5 5Z",
      }),
      a.createElement("path", {
        d: "M5 6.5C5 6.77614 4.77614 7 4.5 7C4.22386 7 4 6.77614 4 6.5C4 6.22386 4.22386 6 4.5 6C4.77614 6 5 6.22386 5 6.5Z",
      }),
      a.createElement("path", {
        fillRule: "evenodd",
        d: "M11 0C12.1046 0 13 0.895431 13 2V12C13 13.1046 12.1046 14 11 14H1.5C1.22386 14 1 13.7761 1 13.5V0.5C1 0.223857 1.22386 0 1.5 0H11ZM11 1H3V13H11C11.5523 13 12 12.5523 12 12V2C12 1.44772 11.5523 1 11 1Z",
      })
    ),
    commit: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        fillRule: "evenodd",
        d: "M3.03 7.5a4 4 0 0 0 7.94 0h2.53a.5.5 0 0 0 0-1h-2.53a4 4 0 0 0-7.94 0H.5a.5.5 0 0 0 0 1h2.53ZM7 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
      })
    ),
    branch: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        fillRule: "evenodd",
        d: "M6 2.5c0 .65-.42 1.2-1 1.41v4.06A3.36 3.36 0 0 1 7.5 7a2.7 2.7 0 0 0 1.81-.56c.22-.18.38-.4.48-.62a1.5 1.5 0 1 1 1.03.15c-.16.42-.43.87-.86 1.24-.57.47-1.37.79-2.46.79-1.04 0-1.64.42-2 .92-.26.37-.4.8-.47 1.18A1.5 1.5 0 1 1 4 10.09V3.9a1.5 1.5 0 1 1 2-1.4Zm-2 9a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm1-9a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm6 2a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z",
      })
    ),
    pullrequest: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        fillRule: "evenodd",
        d: "M8.35 1.35 7.71 2h.79A2.5 2.5 0 0 1 11 4.5v5.59a1.5 1.5 0 1 1-1 0V4.5C10 3.67 9.33 3 8.5 3h-.8l.65.65a.5.5 0 1 1-.7.7l-1.5-1.5a.5.5 0 0 1 0-.7l1.5-1.5a.5.5 0 1 1 .7.7ZM11 11.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM4 3.91a1.5 1.5 0 1 0-1 0v6.18a1.5 1.5 0 1 0 1 0V3.9ZM3.5 11a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1Zm0-8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z",
      })
    ),
    merge: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        fillRule: "evenodd",
        d: "M4.1 3.87a1.5 1.5 0 1 0-1.1.04v6.18a1.5 1.5 0 1 0 1 0V6.4c.26.4.57.77.93 1.08A6.57 6.57 0 0 0 9.08 9a1.5 1.5 0 1 0 0-1 5.57 5.57 0 0 1-3.5-1.25 4.74 4.74 0 0 1-1.47-2.87ZM3.5 11a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1ZM4 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm7 6a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z",
      })
    ),
    apple: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        d: "M11.03 8.1a3.05 3.05 0 0 1-.2-1.74 2.7 2.7 0 0 1 1.4-1.94 3.13 3.13 0 0 0-2.35-1.4c-.84-.08-2.01.56-2.65.57h-.02c-.63 0-1.81-.65-2.64-.57-.42.04-1.75.32-2.55 1.6-.28.44-.5 1.01-.58 1.74a6.36 6.36 0 0 0 .02 1.74 7.5 7.5 0 0 0 1.35 3.33c.7 1.01 1.51 1.6 1.97 1.6.93.02 1.74-.6 2.41-.6l.02.01h.04c.67-.02 1.48.61 2.42.6.45-.02 1.26-.6 1.97-1.6a7.95 7.95 0 0 0 .97-1.86 2.6 2.6 0 0 1-1.58-1.48ZM8.86 2.13c.72-.85.7-2.07.63-2.12-.07-.06-1.25.16-1.99.98a2.78 2.78 0 0 0-.62 2.13c.06.05 1.27-.14 1.98-.99Z",
      })
    ),
    linux: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        fillRule: "evenodd",
        d: "M7 0a3 3 0 0 1 3 3v1.24c.13.13.25.27.36.42l.52.43.2.15c.32.26.7.59 1.09.97A6.28 6.28 0 0 1 14 9.54a.5.5 0 0 1-.35.44c-.31.1-.8.18-1.34.13-.33-.03-.7-.12-1.05-.3-.04.17-.1.34-.17.51a2 2 0 1 1-2.89 2.56 5.5 5.5 0 0 1-2.4 0 2 2 0 1 1-2.9-2.56 5.56 5.56 0 0 1-.16-.51c-.35.18-.72.27-1.05.3a3.4 3.4 0 0 1-1.34-.13.5.5 0 0 1-.35-.44l.01-.14a6.28 6.28 0 0 1 1.82-3.2 13.42 13.42 0 0 1 1.3-1.11c.22-.19.4-.32.5-.43.12-.15.24-.29.37-.42V3a3 3 0 0 1 3-3Zm1 11.9a2 2 0 0 1 2.14-1.9 5.5 5.5 0 0 0 .36-2c0-.51-.1-1.07-.3-1.6l-.03-.02a4.4 4.4 0 0 0-.86-.42 6.71 6.71 0 0 0-1-.31l-.86.64c-.27.2-.63.2-.9 0l-.85-.64a6.72 6.72 0 0 0-1.87.73l-.03.02A4.6 4.6 0 0 0 3.5 8c0 .68.11 1.39.36 2H4a2 2 0 0 1 2 1.9 4.49 4.49 0 0 0 2 0ZM5 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm6 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM6.1 4.3a1.5 1.5 0 0 1 1.8 0l.27.2L7 5.38 5.83 4.5l.27-.2ZM8.5 2c.28 0 .5.22.5.5V3a.5.5 0 0 1-1 0v-.5c0-.28.22-.5.5-.5ZM6 2.5a.5.5 0 0 0-1 0V3a.5.5 0 0 0 1 0v-.5Z",
      })
    ),
    ubuntu: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        d: "M12.26 2.07c0 1.14-.89 2.06-1.99 2.06s-1.99-.92-1.99-2.06c0-1.14.9-2.07 2-2.07s1.98.93 1.98 2.07ZM3.98 6.6c0 1.14-.9 2.07-2 2.07C.9 8.67 0 7.74 0 6.6c0-1.14.9-2.07 1.99-2.07 1.1 0 1.99.93 1.99 2.07ZM6.47 11.92a4.76 4.76 0 0 1-3.3-2.62c-.53.25-1.12.33-1.7.22a6.72 6.72 0 0 0 1.84 2.63 6.38 6.38 0 0 0 4.24 1.58c-.37-.5-.57-1.1-.59-1.73a4.77 4.77 0 0 1-.49-.08ZM11.81 11.93c0 1.14-.89 2.07-1.99 2.07s-1.98-.93-1.98-2.07c0-1.14.89-2.06 1.98-2.06 1.1 0 2 .92 2 2.06ZM12.6 11.17a6.93 6.93 0 0 0 .32-7.93A2.95 2.95 0 0 1 11.8 4.6a5.23 5.23 0 0 1-.16 5.03c.47.4.8.94.95 1.54ZM1.99 3.63h-.15A6.48 6.48 0 0 1 8 .24a3.07 3.07 0 0 0-.6 1.68 4.7 4.7 0 0 0-3.9 2.17c-.46-.3-.98-.45-1.51-.45Z",
      })
    ),
    windows: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        d: "M6.5 1H1v5.5h5.5V1ZM13 1H7.5v5.5H13V1ZM7.5 7.5H13V13H7.5V7.5ZM6.5 7.5H1V13h5.5V7.5Z",
      })
    ),
    storybook: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        d: "M2.04.62a.7.7 0 0 0-.66.72l.44 11.56c.01.37.3.66.67.68l9.4.42h.02a.7.7 0 0 0 .7-.7V.66a.7.7 0 0 0-.74-.66l-.77.05.05 1.62a.1.1 0 0 1-.17.08l-.52-.4-.61.46a.1.1 0 0 1-.17-.09L9.75.13l-7.7.49Zm8 4.74c-.24.2-2.09.33-2.09.05.04-1.04-.43-1.09-.69-1.09-.24 0-.66.08-.66.64 0 .57.6.89 1.32 1.27 1.02.53 2.24 1.18 2.24 2.82 0 1.57-1.27 2.43-2.9 2.43-1.67 0-3.14-.68-2.97-3.03.06-.27 2.2-.2 2.2 0-.03.97.19 1.26.75 1.26.43 0 .62-.24.62-.64 0-.6-.63-.95-1.36-1.36-.99-.56-2.15-1.2-2.15-2.7 0-1.5 1.03-2.5 2.86-2.5 1.83 0 2.84.99 2.84 2.85Z",
      })
    ),
    azuredevops: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        d: "m0 5.18 1.31-1.73 4.9-2V.01l4.3 3.15-8.78 1.7v4.8L0 9.16V5.18Zm14-2.6v8.55l-3.36 2.86-5.42-1.79V14L1.73 9.66l8.78 1.05V3.16L14 2.58Z",
      })
    ),
    bitbucket: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        d: "M1 1.52A.41.41 0 0 0 .59 2l1.74 10.6c.05.26.28.46.55.46h8.37c.2 0 .38-.14.42-.34l1.01-6.25H8.81l-.46 2.71H5.68L4.95 5.4h7.91L13.4 2a.41.41 0 0 0-.41-.48H1Z",
      })
    ),
    chrome: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        fillRule: "evenodd",
        d: "M13.02 3.43a.11.11 0 0 1-.1.17H7a3.4 3.4 0 0 0-3.3 2.55.11.11 0 0 1-.21.03L1.52 2.76a.11.11 0 0 1 0-.12 6.97 6.97 0 0 1 9-1.7c1.03.6 1.9 1.47 2.5 2.5ZM7 9.62a2.62 2.62 0 1 1 0-5.24 2.62 2.62 0 0 1 0 5.24Zm1.03.7a.11.11 0 0 0-.12-.04 3.4 3.4 0 0 1-4-1.84L1.1 3.57a.11.11 0 0 0-.2 0 7 7 0 0 0 5.07 10.35c.04 0 .08-.02.1-.05l1.97-3.42a.11.11 0 0 0 0-.13Zm1.43-5.95h3.95c.05 0 .1.03.1.07a6.97 6.97 0 0 1-1.53 7.48A6.96 6.96 0 0 1 7.08 14a.11.11 0 0 1-.1-.17l2.81-4.88h.01a3.38 3.38 0 0 0-.42-4.38.11.11 0 0 1 .08-.2Z",
      })
    ),
    chromatic: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        fillRule: "evenodd",
        d: "M0 7a7 7 0 1 0 14 0A7 7 0 0 0 0 7Zm5.22-3.87a1.97 1.97 0 0 1 3.75.83v1.29L5.61 3.32a2.49 2.49 0 0 0-.4-.19ZM8.7 5.71 5.35 3.78a1.97 1.97 0 0 0-2.6 2.83c.12-.1.24-.18.37-.26l1.51-.87a.27.27 0 0 1 .27 0L7 6.69l1.7-.98Zm-.32 4.97-1.52-.87a.27.27 0 0 1-.13-.23V7.15l-1.7-.97v3.86a1.97 1.97 0 0 0 3.75.83 2.5 2.5 0 0 1-.4-.19Zm.26-.46a1.97 1.97 0 0 0 2.6-2.83c-.11.1-.23.18-.36.26L7.53 9.58l1.11.64Zm-4.1.26h-.17a1.97 1.97 0 0 1-1.9-2.47 2 2 0 0 1 .92-1.2l1.11-.63v3.86c0 .14.01.29.04.44Zm6.79-5.98a1.97 1.97 0 0 0-1.87-.97c.03.14.04.29.04.43v1.75c0 .1-.05.19-.14.23l-2.1 1.22V9.1l3.35-1.93a1.97 1.97 0 0 0 .72-2.68Z",
      })
    ),
    componentdriven: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        d: "M10.85 2.18 8.87.2a.69.69 0 0 0-.97 0L3.09 5.01a.69.69 0 0 0 0 .97l2.46 2.46-2.4 2.4a.69.69 0 0 0 0 .98l1.98 1.98c.27.27.7.27.97 0l4.8-4.81a.69.69 0 0 0 0-.97L8.45 5.56l2.4-2.4a.69.69 0 0 0 0-.98Z",
      })
    ),
    discord: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        d: "M11.85 2.88C10.95 2.48 10 2.18 9 2a7.05 7.05 0 0 0-.4.75 10.66 10.66 0 0 0-3.2 0c-.1-.23-.24-.5-.36-.73A.04.04 0 0 0 4.99 2a11.51 11.51 0 0 0-2.86.9 11.82 11.82 0 0 0-2.05 8 11.6 11.6 0 0 0 3.5 1.77c.01 0 .03 0 .04-.02.27-.36.51-.75.72-1.16a.04.04 0 0 0-.03-.06 7.66 7.66 0 0 1-1.09-.52.04.04 0 0 1 0-.08 5.96 5.96 0 0 0 .26-.17 8.28 8.28 0 0 0 7.08 0l.22.17c.02.02.02.06 0 .08-.36.2-.72.37-1.1.52a.04.04 0 0 0-.02.06c.2.4.45.8.71 1.16.01.02.03.02.05.02a11.57 11.57 0 0 0 3.52-1.8 11.74 11.74 0 0 0-2.09-7.99Zm-7.17 6.4c-.7 0-1.26-.63-1.26-1.41 0-.78.56-1.41 1.26-1.41s1.27.64 1.26 1.4c0 .79-.56 1.42-1.26 1.42Zm4.65 0c-.69 0-1.26-.63-1.26-1.41 0-.78.56-1.41 1.26-1.41s1.27.64 1.26 1.4c0 .79-.55 1.42-1.26 1.42Z",
      })
    ),
    facebook: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        d: "M7.4 14H5.06V7H3.5V4.59h1.56V3.17C5.06 1.2 5.53 0 7.6 0h1.72v2.41H8.25c-.8 0-.85.34-.85.97v1.2h1.93L9.11 7H7.4l-.01 7Z",
      })
    ),
    figma: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        fillRule: "evenodd",
        d: "M9.2 0H4.8a2.6 2.6 0 0 0-1.4 4.8 2.6 2.6 0 0 0 0 4.4 2.6 2.6 0 1 0 4 2.2V8.89a2.6 2.6 0 1 0 3.2-4.09A2.6 2.6 0 0 0 9.2 0ZM7.4 7A1.8 1.8 0 1 0 11 7a1.8 1.8 0 0 0-3.6 0Zm-.8 2.6H4.8a1.8 1.8 0 1 0 1.8 1.8V9.6ZM4.8 4.4h1.8V.8H4.8a1.8 1.8 0 0 0 0 3.59Zm0 .8a1.8 1.8 0 0 0 0 3.6h1.8V5.2H4.8Zm4.4-.8H7.4V.8h1.8a1.8 1.8 0 1 1 0 3.59Z",
      })
    ),
    gdrive: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        d: "M6.37 8.77 4.33 12.3h6.75l2.04-3.54H6.38Zm6.18-1-3.5-6.08h-4.1l3.51 6.08h4.09ZM4.38 2.7.88 8.77l2.04 3.54 3.5-6.07L4.38 2.7Z",
      })
    ),
    github: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        d: "M7 0a7 7 0 0 0-2.21 13.64c.35.06.48-.15.48-.33L5.26 12c-1.76.32-2.21-.43-2.35-.83-.08-.2-.43-.82-.72-.99-.25-.13-.6-.45-.01-.46.55 0 .94.5 1.07.72.63 1.06 1.64.76 2.04.58.07-.46.25-.77.45-.94-1.56-.18-3.19-.78-3.19-3.46 0-.76.28-1.39.72-1.88-.07-.17-.31-.9.07-1.85 0 0 .59-.19 1.93.71a6.5 6.5 0 0 1 3.5 0c1.34-.9 1.92-.71 1.92-.71.39.96.14 1.68.07 1.85.45.5.72 1.11.72 1.88 0 2.69-1.64 3.28-3.2 3.46.26.22.48.64.48 1.3l-.01 1.92c0 .18.13.4.48.33A7.01 7.01 0 0 0 7 0Z",
      })
    ),
    gitlab: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        d: "M4.53 5.58H1.07l1.49-4.55a.26.26 0 0 1 .48 0l1.49 4.55ZM7 13.15 1.07 5.58l-.75 2.3a.5.5 0 0 0 .18.57l6.5 4.7Zm0 0 6.5-4.7a.5.5 0 0 0 .18-.57l-.75-2.3L7 13.15l2.47-7.57H4.53L7 13.15Zm2.47-7.57h3.46l-1.49-4.55a.26.26 0 0 0-.48 0L9.47 5.58Z",
      })
    ),
    google: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        d: "M10.92 1.1H7.26c-1.64 0-3.19 1.24-3.19 2.68 0 1.47 1.12 2.66 2.8 2.66l.33-.01c-.1.2-.18.44-.18.68 0 .41.22.75.5 1.02h-.64c-2.03 0-3.6 1.3-3.6 2.64 0 1.32 1.72 2.15 3.75 2.15 2.32 0 3.6-1.31 3.6-2.64 0-1.06-.31-1.7-1.28-2.38-.33-.23-.96-.8-.96-1.14 0-.39.1-.58.7-1.04a2.46 2.46 0 0 0 1.03-1.92c0-.92-.4-1.82-1.18-2.11h1.17l.81-.6ZM9.6 10.04c.03.13.05.25.05.38 0 1.07-.7 1.9-2.67 1.9-1.4 0-2.42-.88-2.42-1.95 0-1.05 1.26-1.92 2.66-1.9a3 3 0 0 1 .92.14c.76.53 1.3.83 1.46 1.43ZM7.34 6.07c-.94-.03-1.84-1.06-2-2.3-.17-1.24.47-2.19 1.41-2.16.94.03 1.84 1.03 2 2.26.17 1.24-.47 2.23-1.41 2.2Z",
      })
    ),
    graphql: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        d: "M7.87 11.6a1.17 1.17 0 0 0-1.7-.02l-2.71-1.56.01-.04h7.07l.02.07-2.69 1.56Zm-1.7-9.18.03.03-3.54 6.12h-.04V5.43a1.17 1.17 0 0 0 .84-1.46l2.7-1.56Zm4.38 1.56a1.17 1.17 0 0 0 .84 1.46v3.12l-.04.01-3.54-6.12c.02 0 .03-.02.04-.03l2.7 1.56ZM3.47 9.42a1.17 1.17 0 0 0-.32-.57l3.53-6.12a1.17 1.17 0 0 0 .65 0l3.54 6.12a1.17 1.17 0 0 0-.33.57H3.47Zm8.8-.74c-.1-.05-.21-.1-.32-.12V5.44a1.17 1.17 0 1 0-1.12-1.94l-2.7-1.56a1.17 1.17 0 1 0-2.24 0L3.19 3.5a1.17 1.17 0 1 0-1.13 1.94v3.12a1.17 1.17 0 1 0 1.12 1.94l2.7 1.56a1.17 1.17 0 1 0 2.24-.03l2.69-1.55a1.17 1.17 0 1 0 1.45-1.8Z",
      })
    ),
    medium: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        d: "M0 0v14h14V0H0Zm11.63 3.32-.75.72a.22.22 0 0 0-.08.2v5.33c0 .07.03.14.08.18l.73.72v.16H7.92v-.16l.76-.74c.08-.07.08-.1.08-.21V5.24l-2.11 5.37h-.29L3.9 5.24v3.67c0 .13.05.25.14.34l.99 1.2v.16h-2.8v-.16l.98-1.2a.48.48 0 0 0 .13-.41V4.65c0-.11-.04-.2-.12-.27l-.88-1.06v-.16h2.73l2.1 4.62 1.86-4.62h2.6v.16Z",
      })
    ),
    redux: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        d: "M4.06 9.69c.02.49.42.88.91.88H5a.91.91 0 0 0-.03-1.83h-.03c-.03 0-.08 0-.11.02a5.97 5.97 0 0 1-.85-3.62c.06-.98.39-1.82.96-2.52.47-.6 1.39-.9 2-.92 1.73-.03 2.47 2.12 2.51 2.99.22.04.57.16.82.24-.2-2.64-1.83-4-3.4-4-1.46 0-2.81 1.05-3.35 2.61a6.67 6.67 0 0 0 .65 5.68.74.74 0 0 0-.11.47Zm8.28-2.3a6.62 6.62 0 0 0-5.15-2.25h-.26a.9.9 0 0 0-.8-.49H6.1a.91.91 0 0 0 .03 1.83h.03a.92.92 0 0 0 .8-.56h.3c1.23 0 2.4.36 3.47 1.06.81.54 1.4 1.24 1.72 2.09.28.68.26 1.35-.03 1.92a2.4 2.4 0 0 1-2.23 1.34c-.65 0-1.27-.2-1.6-.34-.18.16-.5.42-.73.58.7.33 1.41.5 2.1.5 1.56 0 2.72-.85 3.16-1.72.47-.94.44-2.57-.78-3.96ZM4.9 12.9a4 4 0 0 1-.98.11c-1.2 0-2.3-.5-2.84-1.32C.38 10.6.13 8.3 2.5 6.58c.05.26.15.62.22.83-.31.23-.8.68-1.11 1.3a2.4 2.4 0 0 0 .13 2.53c.36.54.93.86 1.66.96.9.11 1.8-.05 2.66-.5a5.83 5.83 0 0 0 2.67-2.56.91.91 0 0 1 .62-1.55h.03a.92.92 0 0 1 .1 1.82 6.26 6.26 0 0 1-4.56 3.49Z",
      })
    ),
    twitter: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        d: "M14 2.55c-.51.23-1.07.39-1.65.46.6-.36 1.05-.94 1.26-1.63-.55.34-1.17.58-1.82.72a2.84 2.84 0 0 0-2.1-.93 2.9 2.9 0 0 0-2.8 3.61 8.09 8.09 0 0 1-5.9-3.07 2.99 2.99 0 0 0 .88 3.93 2.8 2.8 0 0 1-1.3-.37v.04c0 1.42 1 2.61 2.3 2.89a2.82 2.82 0 0 1-1.3.05 2.89 2.89 0 0 0 2.7 2.04A5.67 5.67 0 0 1 0 11.51a7.98 7.98 0 0 0 4.4 1.32c5.29 0 8.17-4.48 8.17-8.38v-.38A5.93 5.93 0 0 0 14 2.55Z",
      })
    ),
    youtube: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        d: "M13.99 8.17V5.83a14.95 14.95 0 0 0-.23-2.22c-.09-.38-.27-.7-.55-.96s-.6-.41-.97-.45A51.3 51.3 0 0 0 7 2c-2.34 0-4.09.07-5.24.2A1.78 1.78 0 0 0 .25 3.61 15.26 15.26 0 0 0 0 7v1.16a15.24 15.24 0 0 0 .24 2.22c.09.38.27.7.55.96.27.26.6.41.97.45 1.15.13 2.9.2 5.24.2 2.34 0 4.08-.06 5.24-.2.37-.04.7-.19.97-.45s.45-.58.54-.96a15.26 15.26 0 0 0 .24-2.22Zm-4.23-1.6c.16.1.24.24.24.43 0 .2-.08.33-.24.42l-4 2.5a.44.44 0 0 1-.26.08.54.54 0 0 1-.24-.06A.46.46 0 0 1 5 9.5v-5c0-.2.08-.34.26-.44.17-.1.34-.09.5.02l4 2.5Z",
      })
    ),
    vscode: a.createElement(
      a.Fragment,
      null,
      a.createElement("path", {
        d: "M10.24.04c.13 0 .26.03.38.09L13.5 1.5a.87.87 0 0 1 .5.8v.03-.01 9.39c0 .33-.2.63-.5.78l-2.88 1.38a.87.87 0 0 1-1-.17l-5.5-5.03-2.4 1.83a.58.58 0 0 1-.75-.04l-.77-.7a.58.58 0 0 1 0-.86L2.27 7 .2 5.1a.58.58 0 0 1 0-.86l.77-.7c.21-.2.52-.2.75-.04l2.4 1.83L9.63.3a.87.87 0 0 1 .61-.26Zm.26 3.78L6.32 7l4.18 3.18V3.82Z",
      })
    ),
  },
  Ks = _.svg`
  display: inline-block;
  shape-rendering: inherit;
  vertical-align: middle;
  fill: currentColor;

  path {
    fill: currentColor;
  }
`,
  Ae = ({ icon: e, useSymbol: t, ...r }) =>
    a.createElement(
      Ks,
      { viewBox: "0 0 14 14", width: "14px", height: "14px", ...r },
      t ? a.createElement("use", { xlinkHref: `#icon--${e}` }) : br[e]
    ),
  M5 = A.memo(function ({ icons: e = Object.keys(br) }) {
    return a.createElement(
      Ks,
      { viewBox: "0 0 14 14", style: { position: "absolute", width: 0, height: 0 }, "data-chromatic": "ignore" },
      e.map((t) => a.createElement("symbol", { id: `icon--${t}`, key: t }, br[t]))
    );
  }),
  B5 = 0,
  $5 = (e) => e.button === B5 && !e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey,
  I5 = (e, t) => {
    $5(e) && (e.preventDefault(), t(e));
  },
  Z5 = _.span(
    ({ withArrow: e }) =>
      e
        ? {
            "> svg:last-of-type": {
              height: "0.7em",
              width: "0.7em",
              marginRight: 0,
              marginLeft: "0.25em",
              bottom: "auto",
              verticalAlign: "inherit",
            },
          }
        : {},
    ({ containsIcon: e }) =>
      e
        ? {
            svg: {
              height: "1em",
              width: "1em",
              verticalAlign: "middle",
              position: "relative",
              bottom: 0,
              marginRight: 0,
            },
          }
        : {}
  ),
  H5 = _.a(
    ({ theme: e }) => ({
      display: "inline-block",
      transition: "all 150ms ease-out",
      textDecoration: "none",
      color: e.color.secondary,
      "&:hover, &:focus": {
        cursor: "pointer",
        color: It(0.07, e.color.secondary),
        "svg path": { fill: It(0.07, e.color.secondary) },
      },
      "&:active": { color: It(0.1, e.color.secondary), "svg path": { fill: It(0.1, e.color.secondary) } },
      svg: {
        display: "inline-block",
        height: "1em",
        width: "1em",
        verticalAlign: "text-top",
        position: "relative",
        bottom: "-0.125em",
        marginRight: "0.4em",
        "& path": { fill: e.color.secondary },
      },
    }),
    ({ theme: e, secondary: t, tertiary: r }) => {
      let n;
      return (
        t && (n = [e.textMutedColor, e.color.dark, e.color.darker]),
        r && (n = [e.color.dark, e.color.darkest, e.textMutedColor]),
        n
          ? {
              color: n[0],
              "svg path": { fill: n[0] },
              "&:hover": { color: n[1], "svg path": { fill: n[1] } },
              "&:active": { color: n[2], "svg path": { fill: n[2] } },
            }
          : {}
      );
    },
    ({ nochrome: e }) =>
      e ? { color: "inherit", "&:hover, &:active": { color: "inherit", textDecoration: "underline" } } : {},
    ({ theme: e, inverse: t }) =>
      t
        ? {
            color: e.color.lightest,
            "svg path": { fill: e.color.lightest },
            "&:hover": { color: e.color.lighter, "svg path": { fill: e.color.lighter } },
            "&:active": { color: e.color.light, "svg path": { fill: e.color.light } },
          }
        : {},
    ({ isButton: e }) => (e ? { border: 0, borderRadius: 0, background: "none", padding: 0, fontSize: "inherit" } : {})
  ),
  vr = ({ cancel: e, children: t, onClick: r, withArrow: n, containsIcon: o, className: l, ...i }) =>
    a.createElement(
      H5,
      { ...i, onClick: r && e ? (u) => I5(u, r) : r, className: l },
      a.createElement(Z5, { withArrow: n, containsIcon: o }, t, n && a.createElement(Ae, { icon: "arrowright" }))
    );
vr.defaultProps = { cancel: !0, className: void 0, style: void 0, onClick: void 0, withArrow: !1, containsIcon: !1 };
var j5 = _.div(({ theme: e }) => ({
    fontSize: `${e.typography.size.s2}px`,
    lineHeight: "1.6",
    h1: { fontSize: `${e.typography.size.l1}px`, fontWeight: e.typography.weight.bold },
    h2: { fontSize: `${e.typography.size.m2}px`, borderBottom: `1px solid ${e.appBorderColor}` },
    h3: { fontSize: `${e.typography.size.m1}px` },
    h4: { fontSize: `${e.typography.size.s3}px` },
    h5: { fontSize: `${e.typography.size.s2}px` },
    h6: { fontSize: `${e.typography.size.s2}px`, color: e.color.dark },
    "pre:not(.prismjs)": { background: "transparent", border: "none", borderRadius: 0, padding: 0, margin: 0 },
    "pre pre, pre.prismjs": {
      padding: 15,
      margin: 0,
      whiteSpace: "pre-wrap",
      color: "inherit",
      fontSize: "13px",
      lineHeight: "19px",
    },
    "pre pre code, pre.prismjs code": { color: "inherit", fontSize: "inherit" },
    "pre code": { margin: 0, padding: 0, whiteSpace: "pre", border: "none", background: "transparent" },
    "pre code, pre tt": { backgroundColor: "transparent", border: "none" },
    "body > *:first-of-type": { marginTop: "0 !important" },
    "body > *:last-child": { marginBottom: "0 !important" },
    a: { color: e.color.secondary, textDecoration: "none" },
    "a.absent": { color: "#cc0000" },
    "a.anchor": {
      display: "block",
      paddingLeft: 30,
      marginLeft: -30,
      cursor: "pointer",
      position: "absolute",
      top: 0,
      left: 0,
      bottom: 0,
    },
    "h1, h2, h3, h4, h5, h6": {
      margin: "20px 0 10px",
      padding: 0,
      cursor: "text",
      position: "relative",
      "&:first-of-type": { marginTop: 0, paddingTop: 0 },
      "&:hover a.anchor": { textDecoration: "none" },
      "& tt, & code": { fontSize: "inherit" },
    },
    "h1:first-of-type + h2": { marginTop: 0, paddingTop: 0 },
    "p, blockquote, ul, ol, dl, li, table, pre": { margin: "15px 0" },
    hr: { border: "0 none", borderTop: `1px solid ${e.appBorderColor}`, height: 4, padding: 0 },
    "body > h1:first-of-type, body > h2:first-of-type, body > h3:first-of-type, body > h4:first-of-type, body > h5:first-of-type, body > h6:first-of-type":
      { marginTop: 0, paddingTop: 0 },
    "body > h1:first-of-type + h2": { marginTop: 0, paddingTop: 0 },
    "a:first-of-type h1, a:first-of-type h2, a:first-of-type h3, a:first-of-type h4, a:first-of-type h5, a:first-of-type h6":
      { marginTop: 0, paddingTop: 0 },
    "h1 p, h2 p, h3 p, h4 p, h5 p, h6 p": { marginTop: 0 },
    "li p.first": { display: "inline-block" },
    "ul, ol": { paddingLeft: 30, "& :first-of-type": { marginTop: 0 }, "& :last-child": { marginBottom: 0 } },
    dl: { padding: 0 },
    "dl dt": {
      fontSize: "14px",
      fontWeight: "bold",
      fontStyle: "italic",
      margin: "0 0 15px",
      padding: "0 15px",
      "&:first-of-type": { padding: 0 },
      "& > :first-of-type": { marginTop: 0 },
      "& > :last-child": { marginBottom: 0 },
    },
    blockquote: {
      borderLeft: `4px solid ${e.color.medium}`,
      padding: "0 15px",
      color: e.color.dark,
      "& > :first-of-type": { marginTop: 0 },
      "& > :last-child": { marginBottom: 0 },
    },
    table: {
      padding: 0,
      borderCollapse: "collapse",
      "& tr": {
        borderTop: `1px solid ${e.appBorderColor}`,
        backgroundColor: "white",
        margin: 0,
        padding: 0,
        "& th": {
          fontWeight: "bold",
          border: `1px solid ${e.appBorderColor}`,
          textAlign: "left",
          margin: 0,
          padding: "6px 13px",
        },
        "& td": { border: `1px solid ${e.appBorderColor}`, textAlign: "left", margin: 0, padding: "6px 13px" },
        "&:nth-of-type(2n)": { backgroundColor: e.color.lighter },
        "& th :first-of-type, & td :first-of-type": { marginTop: 0 },
        "& th :last-child, & td :last-child": { marginBottom: 0 },
      },
    },
    img: { maxWidth: "100%" },
    "span.frame": {
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
    "span.align-center": {
      display: "block",
      overflow: "hidden",
      clear: "both",
      "& > span": { display: "block", overflow: "hidden", margin: "13px auto 0", textAlign: "center" },
      "& span img": { margin: "0 auto", textAlign: "center" },
    },
    "span.align-right": {
      display: "block",
      overflow: "hidden",
      clear: "both",
      "& > span": { display: "block", overflow: "hidden", margin: "13px 0 0", textAlign: "right" },
      "& span img": { margin: 0, textAlign: "right" },
    },
    "span.float-left": {
      display: "block",
      marginRight: 13,
      overflow: "hidden",
      float: "left",
      "& span": { margin: "13px 0 0" },
    },
    "span.float-right": {
      display: "block",
      marginLeft: 13,
      overflow: "hidden",
      float: "right",
      "& > span": { display: "block", overflow: "hidden", margin: "13px auto 0", textAlign: "right" },
    },
    "code, tt": {
      margin: "0 2px",
      padding: "0 5px",
      whiteSpace: "nowrap",
      border: `1px solid ${e.color.mediumlight}`,
      backgroundColor: e.color.lighter,
      borderRadius: 3,
      color: e.base === "dark" && e.color.darkest,
    },
  })),
  N5 = A.lazy(() =>
    tt(
      () => import("./syntaxhighlighter-QTQ2UBB4-ce468bdc.js"),
      [
        "./syntaxhighlighter-QTQ2UBB4-ce468bdc.js",
        "./iframe-010eedeb.js",
        "./index-ebeaab24.js",
        "./_getPrototype-0b33db91.js",
        "./chunk-4NMOSTKD-82fbb5f2.js",
        "./index-d475d2ea.js",
        "./index-d37d4223.js",
        "./index-356e4a49.js",
      ],
      import.meta.url
    )
  ),
  P5 = A.lazy(async () => {
    let [{ SyntaxHighlighter: e }, { formatter: t }] = await Promise.all([
      tt(
        () => import("./syntaxhighlighter-QTQ2UBB4-ce468bdc.js"),
        [
          "./syntaxhighlighter-QTQ2UBB4-ce468bdc.js",
          "./iframe-010eedeb.js",
          "./index-ebeaab24.js",
          "./_getPrototype-0b33db91.js",
          "./chunk-4NMOSTKD-82fbb5f2.js",
          "./index-d475d2ea.js",
          "./index-d37d4223.js",
          "./index-356e4a49.js",
        ],
        import.meta.url
      ),
      tt(
        () => import("./formatter-S4K5WUZV-420fac5c.js"),
        [
          "./formatter-S4K5WUZV-420fac5c.js",
          "./iframe-010eedeb.js",
          "./index-ebeaab24.js",
          "./_getPrototype-0b33db91.js",
          "./chunk-4NMOSTKD-82fbb5f2.js",
          "./index-d475d2ea.js",
          "./index-d37d4223.js",
          "./index-356e4a49.js",
        ],
        import.meta.url
      ),
    ]);
    return { default: (r) => a.createElement(e, { ...r, formatter: t }) };
  }),
  so = (e) =>
    a.createElement(
      A.Suspense,
      { fallback: a.createElement("div", null) },
      e.format !== !1 ? a.createElement(P5, { ...e }) : a.createElement(N5, { ...e })
    ),
  V5 = (e) => (typeof e == "number" ? e : Number(e)),
  z5 = _.div(
    ({ theme: e, col: t, row: r = 1 }) =>
      t
        ? {
            display: "inline-block",
            verticalAlign: "inherit",
            "& > *": { marginLeft: t * e.layoutMargin, verticalAlign: "inherit" },
            [`& > *:first-child${la}`]: { marginLeft: 0 },
          }
        : { "& > *": { marginTop: r * e.layoutMargin }, [`& > *:first-child${la}`]: { marginTop: 0 } },
    ({ theme: e, outer: t, col: r, row: n }) => {
      switch (!0) {
        case !!(t && r):
          return { marginLeft: t * e.layoutMargin, marginRight: t * e.layoutMargin };
        case !!(t && n):
          return { marginTop: t * e.layoutMargin, marginBottom: t * e.layoutMargin };
        default:
          return {};
      }
    }
  ),
  q5 = ({ col: e, row: t, outer: r, children: n, ...o }) => {
    let l = V5(typeof r == "number" || !r ? r : e || t);
    return a.createElement(z5, { col: e, row: t, outer: l, ...o }, n);
  },
  U5 = _.div(({ theme: e }) => ({ fontWeight: e.typography.weight.bold })),
  W5 = _.div(),
  G5 = _.div(({ theme: e }) => ({
    padding: 30,
    textAlign: "center",
    color: e.color.defaultText,
    fontSize: e.typography.size.s2 - 1,
  })),
  Js = ({ children: e, ...t }) => {
    let [r, n] = A.Children.toArray(e);
    return a.createElement(G5, { ...t }, a.createElement(U5, null, r), n && a.createElement(W5, null, n));
  };
function Xs() {
  var e;
  try {
    return /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
      ? !1
      : (e = global.CSS) == null
      ? void 0
      : e.supports("zoom: 1");
  } catch {
    return !1;
  }
}
var Qs = Xs(),
  Y5 = _.div(({ scale: e = 1, elementHeight: t }) =>
    Qs ? { "> *": { zoom: 1 / e } } : { height: t || "auto", transformOrigin: "top left", transform: `scale(${1 / e})` }
  );
function K5({ scale: e, children: t }) {
  let r = A.useRef(null),
    [n, o] = A.useState(0),
    l = A.useCallback(
      ({ height: i }) => {
        i && o(i / e);
      },
      [e]
    );
  return (
    A.useEffect(() => {
      r.current && o(r.current.getBoundingClientRect().height);
    }, [e]),
    _s({ ref: r, onResize: l }),
    a.createElement(
      Y5,
      { scale: e, elementHeight: n },
      a.createElement("div", { ref: Qs ? null : r, className: "innerZoomElementWrapper" }, t)
    )
  );
}
var J5 = class extends A.Component {
    constructor() {
      super(...arguments), (this.iframe = null);
    }
    componentDidMount() {
      let { iFrameRef: e } = this.props;
      this.iframe = e.current;
    }
    shouldComponentUpdate(e) {
      let { scale: t, active: r } = this.props;
      return (
        t !== e.scale && this.setIframeInnerZoom(e.scale),
        r !== e.active && this.iframe.setAttribute("data-is-storybook", e.active ? "true" : "false"),
        e.children.props.src !== this.props.children.props.src
      );
    }
    setIframeInnerZoom(e) {
      try {
        Xs()
          ? Object.assign(this.iframe.contentDocument.body.style, { zoom: 1 / e, minHeight: `calc(100vh / ${1 / e})` })
          : Object.assign(this.iframe.contentDocument.body.style, {
              width: `${e * 100}%`,
              height: `${e * 100}%`,
              transform: `scale(${1 / e})`,
              transformOrigin: "top left",
            });
      } catch {
        this.setIframeZoom(e);
      }
    }
    setIframeZoom(e) {
      Object.assign(this.iframe.style, {
        width: `${e * 100}%`,
        height: `${e * 100}%`,
        transform: `scale(${1 / e})`,
        transformOrigin: "top left",
      });
    }
    render() {
      let { children: e } = this.props;
      return e;
    }
  },
  eu = { Element: K5, IFrame: J5 },
  { document: X5 } = he,
  Q5 = _.strong(({ theme: e }) => ({ color: e.color.orange })),
  ef = _.strong(({ theme: e }) => ({ color: e.color.ancillary, textDecoration: "underline" })),
  _l = _.em(({ theme: e }) => ({ color: e.textMutedColor })),
  tf = /(Error): (.*)\n/,
  rf = /at (?:(.*) )?\(?(.+)\)?/,
  nf = /([^@]+)?(?:\/<)?@(.+)?/,
  af = /([^@]+)?@(.+)?/,
  tu = ({ error: e }) => {
    if (!e) return a.createElement(A.Fragment, null, "This error has no stack or message");
    if (!e.stack) return a.createElement(A.Fragment, null, e.message || "This error has no stack or message");
    let t = e.stack.toString();
    t &&
      e.message &&
      !t.includes(e.message) &&
      (t = `Error: ${e.message}

${t}`);
    let r = t.match(tf);
    if (!r) return a.createElement(A.Fragment, null, t);
    let [, n, o] = r,
      l = t.split(/\n/).slice(1),
      [, ...i] = l
        .map((u) => {
          let s = u.match(rf) || u.match(nf) || u.match(af);
          return s ? { name: (s[1] || "").replace("/<", ""), location: s[2].replace(X5.location.origin, "") } : null;
        })
        .filter(Boolean);
    return a.createElement(
      A.Fragment,
      null,
      a.createElement("span", null, n),
      ": ",
      a.createElement(Q5, null, o),
      a.createElement("br", null),
      i.map((u, s) =>
        u.name
          ? a.createElement(
              A.Fragment,
              { key: s },
              "  ",
              "at ",
              a.createElement(ef, null, u.name),
              " (",
              a.createElement(_l, null, u.location),
              ")",
              a.createElement("br", null)
            )
          : a.createElement(
              A.Fragment,
              { key: s },
              "  ",
              "at ",
              a.createElement(_l, null, u.location),
              a.createElement("br", null)
            )
      )
    );
  },
  ru = _.button(
    ({ small: e, theme: t }) => ({
      border: 0,
      borderRadius: "3em",
      cursor: "pointer",
      display: "inline-block",
      overflow: "hidden",
      padding: e ? "8px 16px" : "13px 20px",
      position: "relative",
      textAlign: "center",
      textDecoration: "none",
      transitionProperty: "background, box-shadow",
      transitionDuration: "150ms",
      transitionTimingFunction: "ease-out",
      verticalAlign: "top",
      whiteSpace: "nowrap",
      userSelect: "none",
      opacity: 1,
      margin: 0,
      background: "transparent",
      fontSize: `${e ? t.typography.size.s1 : t.typography.size.s2 - 1}px`,
      fontWeight: t.typography.weight.bold,
      lineHeight: "1",
      svg: {
        display: "inline-block",
        height: e ? 12 : 14,
        width: e ? 12 : 14,
        verticalAlign: "top",
        marginRight: e ? 4 : 6,
        marginTop: e ? 0 : -1,
        marginBottom: e ? 0 : -1,
        pointerEvents: "none",
        path: { fill: "currentColor" },
      },
    }),
    ({ disabled: e }) =>
      e ? { cursor: "not-allowed !important", opacity: 0.5, "&:hover": { transform: "none" } } : {},
    ({ containsIcon: e, small: t }) =>
      e ? { svg: { display: "block", margin: 0 }, ...(t ? { padding: 10 } : { padding: 13 }) } : {},
    ({ theme: e, primary: t, secondary: r, gray: n }) => {
      let o;
      return (
        n ? (o = e.color.mediumlight) : r ? (o = e.color.secondary) : t && (o = e.color.primary),
        o
          ? {
              background: o,
              color: n ? e.color.darkest : e.color.lightest,
              "&:hover": { background: It(0.05, o) },
              "&:active": { boxShadow: "rgba(0, 0, 0, 0.1) 0 0 0 3em inset" },
              "&:focus": { boxShadow: `${lt(o, 1)} 0 1px 9px 2px`, outline: "none" },
              "&:focus:hover": { boxShadow: `${lt(o, 0.2)} 0 8px 18px 0px` },
            }
          : {}
      );
    },
    ({ theme: e, tertiary: t, inForm: r, small: n }) =>
      t
        ? {
            background: e.button.background,
            color: e.input.color,
            boxShadow: `${e.button.border} 0 0 0 1px inset`,
            borderRadius: e.input.borderRadius,
            ...(r && n ? { padding: "10px 16px" } : {}),
            "&:hover": {
              background: e.base === "light" ? It(0.02, e.button.background) : A5(0.03, e.button.background),
              ...(r ? {} : { boxShadow: "rgba(0,0,0,.2) 0 2px 6px 0, rgba(0,0,0,.1) 0 0 0 1px inset" }),
            },
            "&:active": { background: e.button.background },
            "&:focus": { boxShadow: `${lt(e.color.secondary, 1)} 0 0 0 1px inset`, outline: "none" },
          }
        : {},
    ({ theme: e, outline: t }) =>
      t
        ? {
            boxShadow: `${be(0.8, e.color.defaultText)} 0 0 0 1px inset`,
            color: be(0.3, e.color.defaultText),
            background: "transparent",
            "&:hover, &:focus": { boxShadow: `${be(0.5, e.color.defaultText)} 0 0 0 1px inset`, outline: "none" },
            "&:active": {
              boxShadow: `${be(0.5, e.color.defaultText)} 0 0 0 2px inset`,
              color: be(0, e.color.defaultText),
            },
          }
        : {},
    ({ theme: e, outline: t, primary: r }) => {
      let n = e.color.primary;
      return t && r
        ? {
            boxShadow: `${n} 0 0 0 1px inset`,
            color: n,
            "svg path": { fill: n },
            "&:hover": { boxShadow: `${n} 0 0 0 1px inset`, background: "transparent" },
            "&:active": { background: n, boxShadow: `${n} 0 0 0 1px inset`, color: e.color.tertiary },
            "&:focus": { boxShadow: `${n} 0 0 0 1px inset, ${lt(n, 0.4)} 0 1px 9px 2px`, outline: "none" },
            "&:focus:hover": { boxShadow: `${n} 0 0 0 1px inset, ${lt(n, 0.2)} 0 8px 18px 0px` },
          }
        : {};
    },
    ({ theme: e, outline: t, primary: r, secondary: n }) => {
      let o;
      return (
        n ? (o = e.color.secondary) : r && (o = e.color.primary),
        t && o
          ? {
              boxShadow: `${o} 0 0 0 1px inset`,
              color: o,
              "svg path": { fill: o },
              "&:hover": { boxShadow: `${o} 0 0 0 1px inset`, background: "transparent" },
              "&:active": { background: o, boxShadow: `${o} 0 0 0 1px inset`, color: e.color.tertiary },
              "&:focus": { boxShadow: `${o} 0 0 0 1px inset, ${lt(o, 0.4)} 0 1px 9px 2px`, outline: "none" },
              "&:focus:hover": { boxShadow: `${o} 0 0 0 1px inset, ${lt(o, 0.2)} 0 8px 18px 0px` },
            }
          : {}
      );
    }
  ),
  of = ru.withComponent("a"),
  nu = Object.assign(
    A.forwardRef(function ({ isLink: e, children: t, ...r }, n) {
      return e ? a.createElement(of, { ...r, ref: n }, t) : a.createElement(ru, { ...r, ref: n }, t);
    }),
    { defaultProps: { isLink: !1 } }
  ),
  lf = _.label(({ theme: e }) => ({
    display: "flex",
    borderBottom: `1px solid ${e.appBorderColor}`,
    margin: "0 15px",
    padding: "8px 0",
    "&:last-child": { marginBottom: "3rem" },
  })),
  sf = _.span(({ theme: e }) => ({
    minWidth: 100,
    fontWeight: e.typography.weight.bold,
    marginRight: 15,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    lineHeight: "16px",
  })),
  au = ({ label: e, children: t, ...r }) =>
    a.createElement(lf, { ...r }, e ? a.createElement(sf, null, a.createElement("span", null, e)) : null, t);
au.defaultProps = { label: void 0 };
var uf = typeof document < "u" ? A.useLayoutEffect : A.useEffect,
  cf = uf,
  df = function (e) {
    var t = A.useRef(e);
    return (
      cf(function () {
        t.current = e;
      }),
      t
    );
  },
  Ol = function (e, t) {
    if (typeof e == "function") {
      e(t);
      return;
    }
    e.current = t;
  },
  pf = function (e, t) {
    var r = A.useRef();
    return A.useCallback(
      function (n) {
        (e.current = n), r.current && Ol(r.current, null), (r.current = t), t && Ol(t, n);
      },
      [t]
    );
  },
  ff = pf,
  Rl = {
    "min-height": "0",
    "max-height": "none",
    height: "0",
    visibility: "hidden",
    overflow: "hidden",
    position: "absolute",
    "z-index": "-1000",
    top: "0",
    right: "0",
  },
  Fl = function (e) {
    Object.keys(Rl).forEach(function (t) {
      e.style.setProperty(t, Rl[t], "important");
    });
  },
  ge = null,
  Tl = function (e, t) {
    var r = e.scrollHeight;
    return t.sizingStyle.boxSizing === "border-box" ? r + t.borderSize : r - t.paddingSize;
  };
function mf(e, t, r, n) {
  r === void 0 && (r = 1),
    n === void 0 && (n = 1 / 0),
    ge ||
      ((ge = document.createElement("textarea")),
      ge.setAttribute("tabindex", "-1"),
      ge.setAttribute("aria-hidden", "true"),
      Fl(ge)),
    ge.parentNode === null && document.body.appendChild(ge);
  var o = e.paddingSize,
    l = e.borderSize,
    i = e.sizingStyle,
    u = i.boxSizing;
  Object.keys(i).forEach(function (h) {
    var d = h;
    ge.style[d] = i[d];
  }),
    Fl(ge),
    (ge.value = t);
  var s = Tl(ge, e);
  (ge.value = t), (s = Tl(ge, e)), (ge.value = "x");
  var c = ge.scrollHeight - o,
    p = c * r;
  u === "border-box" && (p = p + o + l), (s = Math.max(p, s));
  var g = c * n;
  return u === "border-box" && (g = g + o + l), (s = Math.min(g, s)), [s, c];
}
var Dl = function () {},
  gf = function (e, t) {
    return e.reduce(function (r, n) {
      return (r[n] = t[n]), r;
    }, {});
  },
  hf = [
    "borderBottomWidth",
    "borderLeftWidth",
    "borderRightWidth",
    "borderTopWidth",
    "boxSizing",
    "fontFamily",
    "fontSize",
    "fontStyle",
    "fontWeight",
    "letterSpacing",
    "lineHeight",
    "paddingBottom",
    "paddingLeft",
    "paddingRight",
    "paddingTop",
    "tabSize",
    "textIndent",
    "textRendering",
    "textTransform",
    "width",
    "wordBreak",
  ],
  yf = typeof document < "u" ? !!document.documentElement.currentStyle : !1,
  bf = function (e) {
    var t = window.getComputedStyle(e);
    if (t === null) return null;
    var r = gf(hf, t),
      n = r.boxSizing;
    if (n === "") return null;
    yf &&
      n === "border-box" &&
      (r.width =
        parseFloat(r.width) +
        parseFloat(r.borderRightWidth) +
        parseFloat(r.borderLeftWidth) +
        parseFloat(r.paddingRight) +
        parseFloat(r.paddingLeft) +
        "px");
    var o = parseFloat(r.paddingBottom) + parseFloat(r.paddingTop),
      l = parseFloat(r.borderBottomWidth) + parseFloat(r.borderTopWidth);
    return { sizingStyle: r, paddingSize: o, borderSize: l };
  };
function ou(e, t, r) {
  var n = df(r);
  A.useLayoutEffect(function () {
    var o = function (l) {
      return n.current(l);
    };
    return (
      e.addEventListener(t, o),
      function () {
        return e.removeEventListener(t, o);
      }
    );
  }, []);
}
var vf = function (e) {
    ou(window, "resize", e);
  },
  Ef = function (e) {
    ou(document.fonts, "loadingdone", e);
  },
  xf = ["cacheMeasurements", "maxRows", "minRows", "onChange", "onHeightChange"],
  Af = function (e, t) {
    var r = e.cacheMeasurements,
      n = e.maxRows,
      o = e.minRows,
      l = e.onChange,
      i = l === void 0 ? Dl : l,
      u = e.onHeightChange,
      s = u === void 0 ? Dl : u,
      c = Na(e, xf),
      p = c.value !== void 0,
      g = A.useRef(null),
      h = ff(g, t),
      d = A.useRef(0),
      m = A.useRef(),
      f = function () {
        var b = g.current,
          C = r && m.current ? m.current : bf(b);
        if (C) {
          m.current = C;
          var y = mf(C, b.value || b.placeholder || "x", o, n),
            E = y[0],
            x = y[1];
          d.current !== E &&
            ((d.current = E), b.style.setProperty("height", E + "px", "important"), s(E, { rowHeight: x }));
        }
      },
      v = function (b) {
        p || f(), i(b);
      };
    return (
      typeof document < "u" && (A.useLayoutEffect(f), vf(f), Ef(f)),
      A.createElement("textarea", ye({}, c, { onChange: v, ref: h }))
    );
  },
  wf = A.forwardRef(Af),
  Cf = wf,
  Sf = {
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
  uo = ({ theme: e }) => ({
    ...Sf,
    transition: "box-shadow 200ms ease-out, opacity 200ms ease-out",
    color: e.input.color || "inherit",
    background: e.input.background,
    boxShadow: `${e.input.border} 0 0 0 1px inset`,
    borderRadius: e.input.borderRadius,
    fontSize: e.typography.size.s2 - 1,
    lineHeight: "20px",
    padding: "6px 10px",
    "&:focus": { boxShadow: `${e.color.secondary} 0 0 0 1px inset`, outline: "none" },
    "&[disabled]": { cursor: "not-allowed", opacity: 0.5 },
    "&:-webkit-autofill": { WebkitBoxShadow: `0 0 0 3em ${e.color.lightest} inset` },
    "&::placeholder": { color: e.textMutedColor, opacity: 1 },
  }),
  gn = ({ size: e }) => {
    switch (e) {
      case "100%":
        return { width: "100%" };
      case "flex":
        return { flex: 1 };
      case "auto":
      default:
        return { display: "inline" };
    }
  },
  lu = ({ align: e }) => {
    switch (e) {
      case "end":
        return { textAlign: "right" };
      case "center":
        return { textAlign: "center" };
      case "start":
      default:
        return { textAlign: "left" };
    }
  },
  hn = ({ valid: e, theme: t }) => {
    switch (e) {
      case "valid":
        return { boxShadow: `${t.color.positive} 0 0 0 1px inset !important` };
      case "error":
        return { boxShadow: `${t.color.negative} 0 0 0 1px inset !important` };
      case "warn":
        return { boxShadow: `${t.color.warning} 0 0 0 1px inset` };
      case void 0:
      case null:
      default:
        return {};
    }
  },
  kf = Object.assign(
    _(
      A.forwardRef(function ({ size: e, valid: t, align: r, ...n }, o) {
        return a.createElement("input", { ...n, ref: o });
      })
    )(uo, gn, lu, hn, { minHeight: 32 }),
    { displayName: "Input" }
  ),
  _f = Object.assign(
    _(
      A.forwardRef(function ({ size: e, valid: t, align: r, ...n }, o) {
        return a.createElement("select", { ...n, ref: o });
      })
    )(uo, gn, hn, { height: 32, userSelect: "none", paddingRight: 20, appearance: "menulist" }),
    { displayName: "Select" }
  ),
  Of = Object.assign(
    _(
      A.forwardRef(function ({ size: e, valid: t, align: r, ...n }, o) {
        return a.createElement(Cf, { ...n, ref: o });
      })
    )(uo, gn, lu, hn, ({ height: e = 400 }) => ({ overflow: "visible", maxHeight: e })),
    { displayName: "Textarea" }
  ),
  Rf = _(
    A.forwardRef(function ({ size: e, valid: t, align: r, ...n }, o) {
      return a.createElement(nu, { ...n, ref: o });
    })
  )(gn, hn, { userSelect: "none", overflow: "visible", zIndex: 2, "&:hover": { transform: "none" } }),
  Ff = Object.assign(
    A.forwardRef(function (e, t) {
      return a.createElement(Rf, { ...e, tertiary: !0, small: !0, inForm: !0, ref: t });
    }),
    { displayName: "Button" }
  ),
  Ie = Object.assign(_.form({ boxSizing: "border-box", width: "100%" }), {
    Field: au,
    Input: kf,
    Select: _f,
    Textarea: Of,
    Button: Ff,
  }),
  Tf = A.lazy(() =>
    tt(
      () => import("./WithTooltip-FBT32F6Q-300d8b95.js"),
      [
        "./WithTooltip-FBT32F6Q-300d8b95.js",
        "./iframe-010eedeb.js",
        "./index-ebeaab24.js",
        "./_getPrototype-0b33db91.js",
        "./chunk-4NMOSTKD-82fbb5f2.js",
        "./index-d475d2ea.js",
        "./index-d37d4223.js",
        "./index-356e4a49.js",
      ],
      import.meta.url
    ).then((e) => ({ default: e.WithTooltip }))
  ),
  Df = (e) => a.createElement(A.Suspense, { fallback: a.createElement("div", null) }, a.createElement(Tf, { ...e })),
  Lf = A.lazy(() =>
    tt(
      () => import("./WithTooltip-FBT32F6Q-300d8b95.js"),
      [
        "./WithTooltip-FBT32F6Q-300d8b95.js",
        "./iframe-010eedeb.js",
        "./index-ebeaab24.js",
        "./_getPrototype-0b33db91.js",
        "./chunk-4NMOSTKD-82fbb5f2.js",
        "./index-d475d2ea.js",
        "./index-d37d4223.js",
        "./index-356e4a49.js",
      ],
      import.meta.url
    ).then((e) => ({ default: e.WithTooltipPure }))
  ),
  iu = (e) => a.createElement(A.Suspense, { fallback: a.createElement("div", null) }, a.createElement(Lf, { ...e })),
  Mf = _.div(({ theme: e }) => ({ fontWeight: e.typography.weight.bold })),
  Bf = _.span(),
  $f = _.div(({ theme: e }) => ({
    marginTop: 8,
    textAlign: "center",
    "> *": { margin: "0 8px", fontWeight: e.typography.weight.bold },
  })),
  If = _.div(({ theme: e }) => ({ color: e.color.defaultText, lineHeight: "18px" })),
  Zf = _.div({ padding: 15, width: 280, boxSizing: "border-box" }),
  su = ({ title: e, desc: t, links: r }) =>
    a.createElement(
      Zf,
      null,
      a.createElement(If, null, e && a.createElement(Mf, null, e), t && a.createElement(Bf, null, t)),
      r &&
        a.createElement(
          $f,
          null,
          r.map(({ title: n, ...o }) => a.createElement(vr, { ...o, key: n }, n))
        )
    );
su.defaultProps = { title: null, desc: null, links: null };
var Hf = _.div(({ theme: e }) => ({
    padding: "2px 6px",
    lineHeight: "16px",
    fontSize: 10,
    fontWeight: e.typography.weight.bold,
    color: e.color.lightest,
    boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.3)",
    borderRadius: 4,
    whiteSpace: "nowrap",
    pointerEvents: "none",
    zIndex: -1,
    background: e.base === "light" ? "rgba(60, 60, 60, 0.9)" : "rgba(0, 0, 0, 0.95)",
    margin: 6,
  })),
  jf = ({ note: e, ...t }) => a.createElement(Hf, { ...t }, e),
  Nf = _(({ active: e, isLoading: t, disabled: r, ...n }) => a.createElement("span", { ...n }))(
    ({ theme: e }) => ({ color: e.color.defaultText, fontWeight: e.typography.weight.regular }),
    ({ active: e, theme: t }) => (e ? { color: t.color.secondary, fontWeight: t.typography.weight.bold } : {}),
    ({ isLoading: e, theme: t }) => (e ? { display: "inline-block", flex: "none", ...t.animation.inlineGlow } : {}),
    ({ disabled: e, theme: t }) => (e ? { color: be(0.7, t.color.defaultText) } : {})
  ),
  Pf = _.span({
    display: "flex",
    "& svg": { height: 12, width: 12, margin: "3px 0", verticalAlign: "top" },
    "& path": { fill: "inherit" },
  }),
  Vf = _.span({ flex: 1, textAlign: "left", display: "flex", flexDirection: "column" }, ({ isIndented: e }) =>
    e ? { marginLeft: 24 } : {}
  ),
  zf = _.span(
    ({ theme: e }) => ({ fontSize: "11px", lineHeight: "14px" }),
    ({ active: e, theme: t }) => (e ? { color: t.color.secondary } : {}),
    ({ theme: e, disabled: t }) => (t ? { color: e.textMutedColor } : {})
  ),
  Ll = _.span(
    ({ active: e, theme: t }) => (e ? { "& svg": { opacity: 1 }, "& svg path": { fill: t.color.secondary } } : {}),
    () => ({ display: "flex", maxWidth: 14 })
  ),
  qf = _.a(
    ({ theme: e }) => ({
      fontSize: e.typography.size.s1,
      transition: "all 150ms ease-out",
      color: e.color.dark,
      textDecoration: "none",
      cursor: "pointer",
      justifyContent: "space-between",
      lineHeight: "18px",
      padding: "7px 10px",
      display: "flex",
      alignItems: "center",
      "& > * + *": { paddingLeft: 10 },
      "&:hover": { background: e.background.hoverable },
      "&:hover svg": { opacity: 1 },
    }),
    ({ disabled: e }) => (e ? { cursor: "not-allowed" } : {})
  ),
  Uf = Ot(100)((e, t, r) => {
    let n = {};
    return (
      e && Object.assign(n, { onClick: e }),
      t && Object.assign(n, { href: t }),
      r && t && Object.assign(n, { to: t, as: r }),
      n
    );
  }),
  uu = ({
    isLoading: e,
    left: t,
    title: r,
    center: n,
    right: o,
    icon: l,
    active: i,
    disabled: u,
    isIndented: s,
    href: c,
    onClick: p,
    LinkWrapper: g,
    ...h
  }) => {
    let d = Uf(p, c, g),
      m = { active: i, disabled: u },
      f = typeof l == "string" && br[l];
    return a.createElement(
      qf,
      { ...m, ...h, ...d },
      l
        ? a.createElement(Ll, { ...m }, f ? a.createElement(Ae, { icon: l }) : l)
        : t && a.createElement(Ll, { ...m }, t),
      r || n
        ? a.createElement(
            Vf,
            { isIndented: !t && !l && s },
            r && a.createElement(Nf, { ...m, isLoading: e }, r),
            n && a.createElement(zf, { ...m }, n)
          )
        : null,
      o && a.createElement(Pf, { ...m }, o)
    );
  };
uu.defaultProps = {
  isLoading: !1,
  left: null,
  title: a.createElement("span", null, "Loading state"),
  center: null,
  right: null,
  active: !1,
  disabled: !1,
  href: null,
  LinkWrapper: null,
  onClick: null,
};
var co = uu,
  Wf = _.div({ minWidth: 180, overflow: "hidden", overflowY: "auto", maxHeight: 15.5 * 32 }, ({ theme: e }) => ({
    borderRadius: e.appBorderRadius,
  })),
  Gf = (e) => {
    let { LinkWrapper: t, onClick: r, id: n, isIndented: o, ...l } = e,
      { title: i, href: u, active: s } = l,
      c = A.useCallback(
        (g) => {
          r(g, l);
        },
        [r]
      ),
      p = !!r;
    return a.createElement(co, {
      title: i,
      active: s,
      href: u,
      id: `list-item-${n}`,
      LinkWrapper: t,
      isIndented: o,
      ...l,
      ...(p ? { onClick: c } : {}),
    });
  },
  po = ({ links: e, LinkWrapper: t }) => {
    let r = e.some((n) => n.left || n.icon);
    return a.createElement(
      Wf,
      null,
      e.map(({ isGatsby: n, ...o }) =>
        a.createElement(Gf, { key: o.id, LinkWrapper: n ? t : null, isIndented: r, ...o })
      )
    );
  };
po.defaultProps = { LinkWrapper: co.defaultProps.LinkWrapper };
var fo = a.forwardRef(({ children: e, ...t }, r) =>
  t.href != null
    ? a.createElement("a", { ref: r, ...t }, e)
    : a.createElement("button", { ref: r, type: "button", ...t }, e)
);
fo.displayName = "ButtonOrLink";
var _r = _(fo, { shouldForwardProp: Da })(
  {
    whiteSpace: "normal",
    display: "inline-flex",
    overflow: "hidden",
    verticalAlign: "top",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    textDecoration: "none",
    "&:empty": { display: "none" },
  },
  ({ theme: e }) => ({
    padding: "0 15px",
    transition: "color 0.2s linear, border-bottom-color 0.2s linear",
    height: 40,
    lineHeight: "12px",
    cursor: "pointer",
    background: "transparent",
    border: "0 solid transparent",
    borderTop: "3px solid transparent",
    borderBottom: "3px solid transparent",
    fontWeight: "bold",
    fontSize: 13,
    "&:focus": { outline: "0 none", borderBottomColor: e.color.secondary },
  }),
  ({ active: e, textColor: t, theme: r }) =>
    e
      ? { color: t || r.barSelectedColor, borderBottomColor: r.barSelectedColor }
      : { color: t || r.barTextColor, borderBottomColor: "transparent" }
);
_r.displayName = "TabButton";
var kt = _(fo, { shouldForwardProp: Da })(
  () => ({
    alignItems: "center",
    background: "transparent",
    border: "none",
    borderRadius: 4,
    color: "inherit",
    cursor: "pointer",
    display: "inline-flex",
    fontSize: 13,
    fontWeight: "bold",
    height: 28,
    justifyContent: "center",
    marginTop: 6,
    padding: "8px 7px",
    "& > svg": { width: 14 },
  }),
  ({ active: e, theme: t }) => (e ? { backgroundColor: t.background.hoverable, color: t.color.secondary } : {}),
  ({ disabled: e, theme: t }) =>
    e
      ? { opacity: 0.5, cursor: "not-allowed" }
      : {
          "&:hover, &:focus-visible": { background: be(0.88, t.color.secondary), color: t.color.secondary },
          "&:focus-visible": { outline: fn },
          "&:focus:not(:focus-visible)": { outline: "none" },
        }
);
kt.displayName = "IconButton";
var Yf = _.div(({ theme: e }) => ({
    width: 14,
    height: 14,
    backgroundColor: e.appBorderColor,
    animation: `${e.animation.glow} 1.5s ease-in-out infinite`,
  })),
  Kf = _.div(() => ({ marginTop: 6, padding: 7, height: 28 })),
  cu = () => a.createElement(Kf, null, a.createElement(Yf, null)),
  ma = _.div(
    { display: "flex", whiteSpace: "nowrap", flexBasis: "auto", marginLeft: 3, marginRight: 3 },
    ({ scrollable: e }) => (e ? { flexShrink: 0 } : {}),
    ({ left: e }) => (e ? { "& > *": { marginLeft: 4 } } : {}),
    ({ right: e }) => (e ? { marginLeft: 30, "& > *": { marginRight: 4 } } : {})
  );
ma.displayName = "Side";
var Jf = ({ children: e, className: t, scrollable: r }) =>
    r ? a.createElement(pn, { vertical: !1, className: t }, e) : a.createElement("div", { className: t }, e),
  mo = _(Jf)(
    ({ theme: e, scrollable: t = !0 }) => ({
      color: e.barTextColor,
      width: "100%",
      height: 40,
      flexShrink: 0,
      overflow: t ? "auto" : "hidden",
      overflowY: "hidden",
    }),
    ({ theme: e, border: t = !1 }) =>
      t ? { boxShadow: `${e.appBorderColor}  0 -1px 0 0 inset`, background: e.barBg } : {}
  );
mo.displayName = "Bar";
var Xf = _.div(({ bgColor: e }) => ({
    display: "flex",
    justifyContent: "space-between",
    position: "relative",
    flexWrap: "nowrap",
    flexShrink: 0,
    height: 40,
    backgroundColor: e || "",
  })),
  yn = ({ children: e, backgroundColor: t, ...r }) => {
    let [n, o] = A.Children.toArray(e);
    return a.createElement(
      mo,
      { ...r },
      a.createElement(
        Xf,
        { bgColor: t },
        a.createElement(ma, { scrollable: r.scrollable, left: !0 }, n),
        o ? a.createElement(ma, { right: !0 }, o) : null
      )
    );
  };
yn.displayName = "FlexBar";
var du = _.div(({ active: e }) => (e ? { display: "block" } : { display: "none" })),
  Qf = (e, t) =>
    A.Children.toArray(e).map(({ props: { title: r, id: n, color: o, children: l } }, i) => {
      let u = Array.isArray(l) ? l[0] : l;
      return {
        active: t ? n === t : i === 0,
        title: r,
        id: n,
        color: o,
        render:
          typeof u == "function"
            ? u
            : ({ active: s, key: c }) => a.createElement(du, { key: c, active: s, role: "tabpanel" }, u),
      };
    }),
  em = _.span(({ theme: e, isActive: t }) => ({
    display: "inline-block",
    width: 0,
    height: 0,
    marginLeft: 8,
    color: t ? e.color.secondary : e.color.mediumdark,
    borderRight: "3px solid transparent",
    borderLeft: "3px solid transparent",
    borderTop: "3px solid",
    transition: "transform .1s ease-out",
  })),
  tm = _(_r)(
    ({ active: e, theme: t, preActive: r }) => `
    color: ${r || e ? t.color.secondary : t.color.mediumdark};
    &:hover {
      color: ${t.color.secondary};
      .addon-collapsible-icon {
        color: ${t.color.secondary};
      }
    }
  `
  );
function rm(e) {
  let t = A.useRef(),
    r = A.useRef(),
    n = A.useRef(new Map()),
    { width: o = 1 } = _s({ ref: t }),
    [l, i] = A.useState(e),
    [u, s] = A.useState([]),
    c = A.useRef(e),
    p = A.useCallback(
      ({ menuName: h, actions: d }) => {
        let m = u.some(({ active: b }) => b),
          [f, v] = A.useState(!1);
        return a.createElement(
          a.Fragment,
          null,
          a.createElement(
            G2,
            {
              interactive: !0,
              visible: f,
              onVisibleChange: v,
              placement: "bottom",
              delayHide: 100,
              tooltip: a.createElement(po, {
                links: u.map(({ title: b, id: C, color: y, active: E }) => ({
                  id: C,
                  title: b,
                  color: y,
                  active: E,
                  onClick: (x) => {
                    x.preventDefault(), d.onSelect(C);
                  },
                })),
              }),
            },
            a.createElement(
              tm,
              {
                ref: r,
                active: m,
                preActive: f,
                style: { visibility: u.length ? "visible" : "hidden" },
                "aria-hidden": !u.length,
                className: "tabbutton",
                type: "button",
                role: "tab",
              },
              h,
              a.createElement(em, { className: "addon-collapsible-icon", isActive: m || f })
            )
          ),
          u.map(({ title: b, id: C, color: y }, E) => {
            let x = `index-${E}`;
            return a.createElement(
              _r,
              {
                id: `tabbutton-${Ti(C) ?? x}`,
                style: { visibility: "hidden" },
                "aria-hidden": !0,
                tabIndex: -1,
                ref: (w) => {
                  n.current.set(C, w);
                },
                className: "tabbutton",
                type: "button",
                key: C,
                textColor: y,
                role: "tab",
              },
              b
            );
          })
        );
      },
      [u]
    ),
    g = A.useCallback(() => {
      if (!t.current || !r.current) return;
      let { x: h, width: d } = t.current.getBoundingClientRect(),
        { width: m } = r.current.getBoundingClientRect(),
        f = u.length ? h + d - m : h + d,
        v = [],
        b = 0,
        C = e.filter((y) => {
          let { id: E } = y,
            x = n.current.get(E),
            { width: w = 0 } = (x == null ? void 0 : x.getBoundingClientRect()) || {},
            k = h + b + w > f;
          return (!k || !x) && v.push(y), (b += w), k;
        });
      (v.length !== l.length || c.current !== e) && (i(v), s(C), (c.current = e));
    }, [u.length, e, l]);
  return (
    A.useLayoutEffect(g, [g, o]),
    { tabRefs: n, addonsRef: r, tabBarRef: t, visibleList: l, invisibleList: u, AddonTab: p }
  );
}
var nm =
    "/* emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason */",
  am = _.div(
    ({ theme: e, bordered: t }) =>
      t
        ? {
            backgroundClip: "padding-box",
            border: `1px solid ${e.appBorderColor}`,
            borderRadius: e.appBorderRadius,
            overflow: "hidden",
            boxSizing: "border-box",
          }
        : {},
    ({ absolute: e }) =>
      e
        ? { width: "100%", height: "100%", boxSizing: "border-box", display: "flex", flexDirection: "column" }
        : { display: "block" }
  ),
  go = _.div({ overflow: "hidden", "&:first-of-type": { marginLeft: -3 }, whiteSpace: "nowrap", flexGrow: 1 });
go.displayName = "TabBar";
var om = _.div(
    { display: "block", position: "relative" },
    ({ theme: e }) => ({ fontSize: e.typography.size.s2 - 1, background: e.background.content }),
    ({ bordered: e, theme: t }) =>
      e ? { borderRadius: `0 0 ${t.appBorderRadius - 1}px ${t.appBorderRadius - 1}px` } : {},
    ({ absolute: e, bordered: t }) =>
      e
        ? {
            height: `calc(100% - ${t ? 42 : 40}px)`,
            position: "absolute",
            left: 0 + (t ? 1 : 0),
            right: 0 + (t ? 1 : 0),
            bottom: 0 + (t ? 1 : 0),
            top: 40 + (t ? 1 : 0),
            overflow: "auto",
            [`& > *:first-child${nm}`]: {
              position: "absolute",
              left: 0 + (t ? 1 : 0),
              right: 0 + (t ? 1 : 0),
              bottom: 0 + (t ? 1 : 0),
              top: 0 + (t ? 1 : 0),
              height: `calc(100% - ${t ? 2 : 0}px)`,
              overflow: "auto",
            },
          }
        : {}
  ),
  lm = ({ active: e, render: t, children: r }) => a.createElement(du, { active: e }, t ? t() : r),
  bn = A.memo(
    ({
      children: e,
      selected: t,
      actions: r,
      absolute: n,
      bordered: o,
      tools: l,
      backgroundColor: i,
      id: u,
      menuName: s,
    }) => {
      let c = A.useMemo(() => Qf(e, t), [e, t]),
        { visibleList: p, tabBarRef: g, tabRefs: h, AddonTab: d } = rm(c);
      return c.length
        ? a.createElement(
            am,
            { absolute: n, bordered: o, id: u },
            a.createElement(
              yn,
              { scrollable: !1, border: !0, backgroundColor: i },
              a.createElement(
                go,
                { style: { whiteSpace: "normal" }, ref: g, role: "tablist" },
                p.map(({ title: m, id: f, active: v, color: b }, C) => {
                  let y = `index-${C}`;
                  return a.createElement(
                    _r,
                    {
                      id: `tabbutton-${Ti(f) ?? y}`,
                      ref: (E) => {
                        h.current.set(f, E);
                      },
                      className: `tabbutton ${v ? "tabbutton-active" : ""}`,
                      type: "button",
                      key: f,
                      active: v,
                      textColor: b,
                      onClick: (E) => {
                        E.preventDefault(), r.onSelect(f);
                      },
                      role: "tab",
                    },
                    m
                  );
                }),
                a.createElement(d, { menuName: s, actions: r })
              ),
              l
            ),
            a.createElement(
              om,
              { id: "panel-tab-content", bordered: o, absolute: n },
              c.map(({ id: m, active: f, render: v }) => v({ key: m, active: f }))
            )
          )
        : a.createElement(Js, null, a.createElement(A.Fragment, { key: "title" }, "Nothing found"));
    }
  );
bn.displayName = "Tabs";
bn.defaultProps = {
  id: null,
  children: null,
  tools: null,
  selected: null,
  absolute: !1,
  bordered: !1,
  menuName: "Tabs",
};
var pu = class extends A.Component {
  constructor(e) {
    super(e),
      (this.handlers = { onSelect: (t) => this.setState({ selected: t }) }),
      (this.state = { selected: e.initial });
  }
  render() {
    let { bordered: e = !1, absolute: t = !1, children: r, backgroundColor: n, menuName: o } = this.props,
      { selected: l } = this.state;
    return a.createElement(
      bn,
      { bordered: e, absolute: t, selected: l, backgroundColor: n, menuName: o, actions: this.handlers },
      r
    );
  }
};
pu.defaultProps = { children: [], initial: null, absolute: !1, bordered: !1, backgroundColor: "", menuName: void 0 };
var ho = _.span(
  ({ theme: e }) => ({
    width: 1,
    height: 20,
    background: e.appBorderColor,
    marginTop: 10,
    marginLeft: 6,
    marginRight: 2,
  }),
  ({ force: e }) => (e ? {} : { "& + &": { display: "none" } })
);
ho.displayName = "Separator";
var im = (e) =>
    e.reduce(
      (t, r, n) =>
        r
          ? a.createElement(
              A.Fragment,
              { key: r.id || r.key || `f-${n}` },
              t,
              n > 0 ? a.createElement(ho, { key: `s-${n}` }) : null,
              r.render() || r
            )
          : t,
      null
    ),
  sm = (e) => {
    let t = A.useRef();
    return (
      A.useEffect(() => {
        t.current = e;
      }, [e]),
      t.current
    );
  },
  um = (e, t) => {
    let r = sm(t);
    return e ? t : r;
  },
  cm = ({ active: e, children: t }) => a.createElement("div", { hidden: !e }, um(e, t)),
  dm = ({ alt: e, ...t }) =>
    a.createElement(
      "svg",
      { width: "200px", height: "40px", viewBox: "0 0 200 40", ...t, role: "img" },
      e ? a.createElement("title", null, e) : null,
      a.createElement(
        "defs",
        null,
        a.createElement("path", {
          d: "M1.2 36.9L0 3.9c0-1.1.8-2 1.9-2.1l28-1.8a2 2 0 0 1 2.2 1.9 2 2 0 0 1 0 .1v36a2 2 0 0 1-2 2 2 2 0 0 1-.1 0L3.2 38.8a2 2 0 0 1-2-2z",
          id: "a",
        })
      ),
      a.createElement(
        "g",
        { fill: "none", fillRule: "evenodd" },
        a.createElement("path", {
          d: "M53.3 31.7c-1.7 0-3.4-.3-5-.7-1.5-.5-2.8-1.1-3.9-2l1.6-3.5c2.2 1.5 4.6 2.3 7.3 2.3 1.5 0 2.5-.2 3.3-.7.7-.5 1.1-1 1.1-1.9 0-.7-.3-1.3-1-1.7s-2-.8-3.7-1.2c-2-.4-3.6-.9-4.8-1.5-1.1-.5-2-1.2-2.6-2-.5-1-.8-2-.8-3.2 0-1.4.4-2.6 1.2-3.6.7-1.1 1.8-2 3.2-2.6 1.3-.6 2.9-.9 4.7-.9 1.6 0 3.1.3 4.6.7 1.5.5 2.7 1.1 3.5 2l-1.6 3.5c-2-1.5-4.2-2.3-6.5-2.3-1.3 0-2.3.2-3 .8-.8.5-1.2 1.1-1.2 2 0 .5.2 1 .5 1.3.2.3.7.6 1.4.9l2.9.8c2.9.6 5 1.4 6.2 2.4a5 5 0 0 1 2 4.2 6 6 0 0 1-2.5 5c-1.7 1.2-4 1.9-7 1.9zm21-3.6l1.4-.1-.2 3.5-1.9.1c-2.4 0-4.1-.5-5.2-1.5-1.1-1-1.6-2.7-1.6-4.8v-6h-3v-3.6h3V11h4.8v4.6h4v3.6h-4v6c0 1.8.9 2.8 2.6 2.8zm11.1 3.5c-1.6 0-3-.3-4.3-1a7 7 0 0 1-3-2.8c-.6-1.3-1-2.7-1-4.4 0-1.6.4-3 1-4.3a7 7 0 0 1 3-2.8c1.2-.7 2.7-1 4.3-1 1.7 0 3.2.3 4.4 1a7 7 0 0 1 3 2.8c.6 1.2 1 2.7 1 4.3 0 1.7-.4 3.1-1 4.4a7 7 0 0 1-3 2.8c-1.2.7-2.7 1-4.4 1zm0-3.6c2.4 0 3.6-1.6 3.6-4.6 0-1.5-.3-2.6-1-3.4a3.2 3.2 0 0 0-2.6-1c-2.3 0-3.5 1.4-3.5 4.4 0 3 1.2 4.6 3.5 4.6zm21.7-8.8l-2.7.3c-1.3.2-2.3.5-2.8 1.2-.6.6-.9 1.4-.9 2.5v8.2H96V15.7h4.6v2.6c.8-1.8 2.5-2.8 5-3h1.3l.3 4zm14-3.5h4.8L116.4 37h-4.9l3-6.6-6.4-14.8h5l4 10 4-10zm16-.4c1.4 0 2.6.3 3.6 1 1 .6 1.9 1.6 2.5 2.8.6 1.2.9 2.7.9 4.3 0 1.6-.3 3-1 4.3a6.9 6.9 0 0 1-2.4 2.9c-1 .7-2.2 1-3.6 1-1 0-2-.2-3-.7-.8-.4-1.5-1-2-1.9v2.4h-4.7V8.8h4.8v9c.5-.8 1.2-1.4 2-1.9.9-.4 1.8-.6 3-.6zM135.7 28c1.1 0 2-.4 2.6-1.2.6-.8 1-2 1-3.4 0-1.5-.4-2.5-1-3.3s-1.5-1.1-2.6-1.1-2 .3-2.6 1.1c-.6.8-1 2-1 3.3 0 1.5.4 2.6 1 3.4.6.8 1.5 1.2 2.6 1.2zm18.9 3.6c-1.7 0-3.2-.3-4.4-1a7 7 0 0 1-3-2.8c-.6-1.3-1-2.7-1-4.4 0-1.6.4-3 1-4.3a7 7 0 0 1 3-2.8c1.2-.7 2.7-1 4.4-1 1.6 0 3 .3 4.3 1a7 7 0 0 1 3 2.8c.6 1.2 1 2.7 1 4.3 0 1.7-.4 3.1-1 4.4a7 7 0 0 1-3 2.8c-1.2.7-2.7 1-4.3 1zm0-3.6c2.3 0 3.5-1.6 3.5-4.6 0-1.5-.3-2.6-1-3.4a3.2 3.2 0 0 0-2.5-1c-2.4 0-3.6 1.4-3.6 4.4 0 3 1.2 4.6 3.6 4.6zm18 3.6c-1.7 0-3.2-.3-4.4-1a7 7 0 0 1-3-2.8c-.6-1.3-1-2.7-1-4.4 0-1.6.4-3 1-4.3a7 7 0 0 1 3-2.8c1.2-.7 2.7-1 4.4-1 1.6 0 3 .3 4.4 1a7 7 0 0 1 2.9 2.8c.6 1.2 1 2.7 1 4.3 0 1.7-.4 3.1-1 4.4a7 7 0 0 1-3 2.8c-1.2.7-2.7 1-4.3 1zm0-3.6c2.3 0 3.5-1.6 3.5-4.6 0-1.5-.3-2.6-1-3.4a3.2 3.2 0 0 0-2.5-1c-2.4 0-3.6 1.4-3.6 4.4 0 3 1.2 4.6 3.6 4.6zm27.4 3.4h-6l-6-7v7h-4.8V8.8h4.9v13.6l5.8-6.7h5.7l-6.6 7.5 7 8.2z",
          fill: "currentColor",
        }),
        a.createElement("mask", { id: "b", fill: "#fff" }, a.createElement("use", { xlinkHref: "#a" })),
        a.createElement("use", { fill: "#FF4785", fillRule: "nonzero", xlinkHref: "#a" }),
        a.createElement("path", {
          d: "M23.7 5L24 .2l3.9-.3.1 4.8a.3.3 0 0 1-.5.2L26 3.8l-1.7 1.4a.3.3 0 0 1-.5-.3zm-5 10c0 .9 5.3.5 6 0 0-5.4-2.8-8.2-8-8.2-5.3 0-8.2 2.8-8.2 7.1 0 7.4 10 7.6 10 11.6 0 1.2-.5 1.9-1.8 1.9-1.6 0-2.2-.9-2.1-3.6 0-.6-6.1-.8-6.3 0-.5 6.7 3.7 8.6 8.5 8.6 4.6 0 8.3-2.5 8.3-7 0-7.9-10.2-7.7-10.2-11.6 0-1.6 1.2-1.8 2-1.8.6 0 2 0 1.9 3z",
          fill: "#FFF",
          fillRule: "nonzero",
          mask: "url(#b)",
        })
      )
    ),
  pm = ({ ...e }) =>
    a.createElement(
      "svg",
      { viewBox: "0 0 64 64", ...e },
      a.createElement("title", null, "Storybook icon"),
      a.createElement(
        "g",
        { id: "Artboard", stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd" },
        a.createElement("path", {
          d: "M8.04798541,58.7875918 L6.07908839,6.32540407 C6.01406344,4.5927838 7.34257463,3.12440831 9.07303814,3.01625434 L53.6958037,0.227331489 C55.457209,0.117243658 56.974354,1.45590096 57.0844418,3.21730626 C57.0885895,3.28366922 57.0906648,3.35014546 57.0906648,3.41663791 L57.0906648,60.5834697 C57.0906648,62.3483119 55.6599776,63.7789992 53.8951354,63.7789992 C53.847325,63.7789992 53.7995207,63.7779262 53.7517585,63.775781 L11.0978899,61.8600599 C9.43669044,61.7854501 8.11034889,60.4492961 8.04798541,58.7875918 Z",
          id: "path-1",
          fill: "#FF4785",
          fillRule: "nonzero",
        }),
        a.createElement("path", {
          d: "M35.9095005,24.1768792 C35.9095005,25.420127 44.2838488,24.8242707 45.4080313,23.9509748 C45.4080313,15.4847538 40.8652557,11.0358878 32.5466666,11.0358878 C24.2280775,11.0358878 19.5673077,15.553972 19.5673077,22.3311017 C19.5673077,34.1346028 35.4965208,34.3605071 35.4965208,40.7987804 C35.4965208,42.606015 34.6115646,43.6790606 32.6646607,43.6790606 C30.127786,43.6790606 29.1248356,42.3834613 29.2428298,37.9783269 C29.2428298,37.0226907 19.5673077,36.7247626 19.2723223,37.9783269 C18.5211693,48.6535354 25.1720308,51.7326752 32.7826549,51.7326752 C40.1572906,51.7326752 45.939005,47.8018145 45.939005,40.6858282 C45.939005,28.035186 29.7738035,28.3740425 29.7738035,22.1051974 C29.7738035,19.5637737 31.6617103,19.2249173 32.7826549,19.2249173 C33.9625966,19.2249173 36.0864917,19.4328883 35.9095005,24.1768792 Z",
          id: "path9_fill-path",
          fill: "#FFFFFF",
          fillRule: "nonzero",
        }),
        a.createElement("path", {
          d: "M44.0461638,0.830433986 L50.1874092,0.446606143 L50.443532,7.7810017 C50.4527198,8.04410717 50.2468789,8.26484453 49.9837734,8.27403237 C49.871115,8.27796649 49.7607078,8.24184808 49.6721567,8.17209069 L47.3089847,6.3104681 L44.5110468,8.43287463 C44.3012992,8.591981 44.0022839,8.55092814 43.8431776,8.34118051 C43.7762017,8.25288717 43.742082,8.14401677 43.7466857,8.03329059 L44.0461638,0.830433986 Z",
          id: "Path",
          fill: "#FFFFFF",
        })
      )
    ),
  fm = Gt`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
`,
  mm = _.div(({ size: e = 32 }) => ({
    borderRadius: "50%",
    cursor: "progress",
    display: "inline-block",
    overflow: "hidden",
    position: "absolute",
    transition: "all 200ms ease-out",
    verticalAlign: "top",
    top: "50%",
    left: "50%",
    marginTop: -(e / 2),
    marginLeft: -(e / 2),
    height: e,
    width: e,
    zIndex: 4,
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "rgba(97, 97, 97, 0.29)",
    borderTopColor: "rgb(100,100,100)",
    animation: `${fm} 0.7s linear infinite`,
    mixBlendMode: "difference",
  })),
  Ml = _.div({
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  }),
  gm = _.div(({ theme: e }) => ({
    position: "relative",
    width: "80%",
    marginBottom: "0.75rem",
    maxWidth: 300,
    height: 5,
    borderRadius: 5,
    background: be(0.8, e.color.secondary),
    overflow: "hidden",
    cursor: "progress",
  })),
  hm = _.div(({ theme: e }) => ({
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    background: e.color.secondary,
  })),
  Bl = _.div(({ theme: e }) => ({ minHeight: "2em", fontSize: `${e.typography.size.s1}px`, color: e.barTextColor })),
  ym = _(Ae)(({ theme: e }) => ({ width: 20, height: 20, marginBottom: "0.5rem", color: e.textMutedColor })),
  bm = Gt`
  from { content: "..." }
  33% { content: "." }
  66% { content: ".." }
  to { content: "..." }
`,
  vm = _.span({
    "&::after": {
      content: "'...'",
      animation: `${bm} 1s linear infinite`,
      animationDelay: "1s",
      display: "inline-block",
      width: "1em",
      height: "auto",
    },
  }),
  fu = ({ progress: e, error: t, size: r, ...n }) => {
    if (t)
      return a.createElement(
        Ml,
        { "aria-label": t.toString(), "aria-live": "polite", role: "status", ...n },
        a.createElement(ym, { icon: "lightningoff" }),
        a.createElement(Bl, null, t.message)
      );
    if (e) {
      let { value: o, modules: l } = e,
        { message: i } = e;
      return (
        l && (i += ` ${l.complete} / ${l.total} modules`),
        a.createElement(
          Ml,
          {
            "aria-label": "Content is isLoading...",
            "aria-live": "polite",
            "aria-valuemin": 0,
            "aria-valuemax": 100,
            "aria-valuenow": o * 100,
            "aria-valuetext": i,
            role: "progressbar",
            ...n,
          },
          a.createElement(gm, null, a.createElement(hm, { style: { width: `${o * 100}%` } })),
          a.createElement(Bl, null, i, o < 1 && a.createElement(vm, { key: i }))
        )
      );
    }
    return a.createElement(mm, {
      "aria-label": "Content is isLoading...",
      "aria-live": "polite",
      role: "status",
      size: r,
      ...n,
    });
  };
function Em(e) {
  let t = {},
    r = e.split("&");
  for (let n = 0; n < r.length; n++) {
    let o = r[n].split("=");
    t[decodeURIComponent(o[0])] = decodeURIComponent(o[1] || "");
  }
  return t;
}
var mu = (e, t, r = {}) => {
    let [n, o] = e.split("?"),
      l = o ? { ...Em(o), ...r, id: t } : { ...r, id: t };
    return `${n}?${Object.entries(l)
      .map((i) => `${i[0]}=${i[1]}`)
      .join("&")}`;
  },
  gu = Ys,
  hu = {};
Object.keys(Ys).forEach((e) => {
  hu[e] = A.forwardRef((t, r) => A.createElement(e, { ...t, ref: r }));
});
const xm = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      A: Ts,
      ActionBar: Wa,
      AddonPanel: cm,
      Badge: L5,
      Bar: mo,
      Blockquote: Ds,
      Button: nu,
      Code: ao,
      DL: Ms,
      Div: Ls,
      DocumentWrapper: j5,
      ErrorFormatter: tu,
      FlexBar: yn,
      Form: Ie,
      H1: Bs,
      H2: oo,
      H3: lo,
      H4: $s,
      H5: Is,
      H6: Zs,
      HR: Hs,
      IconButton: kt,
      IconButtonSkeleton: cu,
      Icons: Ae,
      Img: js,
      LI: Ns,
      Link: vr,
      ListItem: co,
      Loader: fu,
      OL: Ps,
      P: Vs,
      Placeholder: Js,
      Pre: zs,
      ResetWrapper: io,
      ScrollArea: pn,
      Separator: ho,
      Spaced: q5,
      Span: qs,
      StorybookIcon: pm,
      StorybookLogo: dm,
      Symbols: M5,
      SyntaxHighlighter: so,
      TT: Ws,
      TabBar: go,
      TabButton: _r,
      TabWrapper: lm,
      Table: Us,
      Tabs: bn,
      TabsState: pu,
      TooltipLinkList: po,
      TooltipMessage: su,
      TooltipNote: jf,
      UL: Gs,
      WithTooltip: Df,
      WithTooltipPure: iu,
      Zoom: eu,
      codeCommon: ut,
      components: gu,
      createCopyToClipboardFunction: ps,
      getStoryHref: mu,
      icons: br,
      interleaveSeparators: im,
      nameSpaceClassNames: Q,
      resetComponents: hu,
      withReset: te,
    },
    Symbol.toStringTag,
    { value: "Module" }
  )
);
function qt() {
  return (
    (qt = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    qt.apply(this, arguments)
  );
}
function Am(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Er(e, t) {
  return (
    (Er = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, o) {
          return (n.__proto__ = o), n;
        }),
    Er(e, t)
  );
}
function wm(e, t) {
  (e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), Er(e, t);
}
function ga(e) {
  return (
    (ga = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    ga(e)
  );
}
function Cm(e) {
  return Function.toString.call(e).indexOf("[native code]") !== -1;
}
function Sm() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
  } catch {
    return !1;
  }
}
function Ur(e, t, r) {
  return (
    Sm()
      ? (Ur = Reflect.construct.bind())
      : (Ur = function (o, l, i) {
          var u = [null];
          u.push.apply(u, l);
          var s = Function.bind.apply(o, u),
            c = new s();
          return i && Er(c, i.prototype), c;
        }),
    Ur.apply(null, arguments)
  );
}
function ha(e) {
  var t = typeof Map == "function" ? new Map() : void 0;
  return (
    (ha = function (n) {
      if (n === null || !Cm(n)) return n;
      if (typeof n != "function") throw new TypeError("Super expression must either be null or a function");
      if (typeof t < "u") {
        if (t.has(n)) return t.get(n);
        t.set(n, o);
      }
      function o() {
        return Ur(n, arguments, ga(this).constructor);
      }
      return (
        (o.prototype = Object.create(n.prototype, {
          constructor: { value: o, enumerable: !1, writable: !0, configurable: !0 },
        })),
        Er(o, n)
      );
    }),
    ha(e)
  );
}
var Xe = (function (e) {
  wm(t, e);
  function t(r) {
    var n;
    return (
      (n =
        e.call(
          this,
          "An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#" +
            r +
            " for more information."
        ) || this),
      Am(n)
    );
  }
  return t;
})(ha(Error));
function Nn(e) {
  return Math.round(e * 255);
}
function km(e, t, r) {
  return Nn(e) + "," + Nn(t) + "," + Nn(r);
}
function xr(e, t, r, n) {
  if ((n === void 0 && (n = km), t === 0)) return n(r, r, r);
  var o = (((e % 360) + 360) % 360) / 60,
    l = (1 - Math.abs(2 * r - 1)) * t,
    i = l * (1 - Math.abs((o % 2) - 1)),
    u = 0,
    s = 0,
    c = 0;
  o >= 0 && o < 1
    ? ((u = l), (s = i))
    : o >= 1 && o < 2
    ? ((u = i), (s = l))
    : o >= 2 && o < 3
    ? ((s = l), (c = i))
    : o >= 3 && o < 4
    ? ((s = i), (c = l))
    : o >= 4 && o < 5
    ? ((u = i), (c = l))
    : o >= 5 && o < 6 && ((u = l), (c = i));
  var p = r - l / 2,
    g = u + p,
    h = s + p,
    d = c + p;
  return n(g, h, d);
}
var $l = {
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
function _m(e) {
  if (typeof e != "string") return e;
  var t = e.toLowerCase();
  return $l[t] ? "#" + $l[t] : e;
}
var Om = /^#[a-fA-F0-9]{6}$/,
  Rm = /^#[a-fA-F0-9]{8}$/,
  Fm = /^#[a-fA-F0-9]{3}$/,
  Tm = /^#[a-fA-F0-9]{4}$/,
  Pn = /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,
  Dm = /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,
  Lm = /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,
  Mm =
    /^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
function vn(e) {
  if (typeof e != "string") throw new Xe(3);
  var t = _m(e);
  if (t.match(Om))
    return {
      red: parseInt("" + t[1] + t[2], 16),
      green: parseInt("" + t[3] + t[4], 16),
      blue: parseInt("" + t[5] + t[6], 16),
    };
  if (t.match(Rm)) {
    var r = parseFloat((parseInt("" + t[7] + t[8], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + t[1] + t[2], 16),
      green: parseInt("" + t[3] + t[4], 16),
      blue: parseInt("" + t[5] + t[6], 16),
      alpha: r,
    };
  }
  if (t.match(Fm))
    return {
      red: parseInt("" + t[1] + t[1], 16),
      green: parseInt("" + t[2] + t[2], 16),
      blue: parseInt("" + t[3] + t[3], 16),
    };
  if (t.match(Tm)) {
    var n = parseFloat((parseInt("" + t[4] + t[4], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + t[1] + t[1], 16),
      green: parseInt("" + t[2] + t[2], 16),
      blue: parseInt("" + t[3] + t[3], 16),
      alpha: n,
    };
  }
  var o = Pn.exec(t);
  if (o) return { red: parseInt("" + o[1], 10), green: parseInt("" + o[2], 10), blue: parseInt("" + o[3], 10) };
  var l = Dm.exec(t.substring(0, 50));
  if (l)
    return {
      red: parseInt("" + l[1], 10),
      green: parseInt("" + l[2], 10),
      blue: parseInt("" + l[3], 10),
      alpha: parseFloat("" + l[4]) > 1 ? parseFloat("" + l[4]) / 100 : parseFloat("" + l[4]),
    };
  var i = Lm.exec(t);
  if (i) {
    var u = parseInt("" + i[1], 10),
      s = parseInt("" + i[2], 10) / 100,
      c = parseInt("" + i[3], 10) / 100,
      p = "rgb(" + xr(u, s, c) + ")",
      g = Pn.exec(p);
    if (!g) throw new Xe(4, t, p);
    return { red: parseInt("" + g[1], 10), green: parseInt("" + g[2], 10), blue: parseInt("" + g[3], 10) };
  }
  var h = Mm.exec(t.substring(0, 50));
  if (h) {
    var d = parseInt("" + h[1], 10),
      m = parseInt("" + h[2], 10) / 100,
      f = parseInt("" + h[3], 10) / 100,
      v = "rgb(" + xr(d, m, f) + ")",
      b = Pn.exec(v);
    if (!b) throw new Xe(4, t, v);
    return {
      red: parseInt("" + b[1], 10),
      green: parseInt("" + b[2], 10),
      blue: parseInt("" + b[3], 10),
      alpha: parseFloat("" + h[4]) > 1 ? parseFloat("" + h[4]) / 100 : parseFloat("" + h[4]),
    };
  }
  throw new Xe(5);
}
function Bm(e) {
  var t = e.red / 255,
    r = e.green / 255,
    n = e.blue / 255,
    o = Math.max(t, r, n),
    l = Math.min(t, r, n),
    i = (o + l) / 2;
  if (o === l)
    return e.alpha !== void 0
      ? { hue: 0, saturation: 0, lightness: i, alpha: e.alpha }
      : { hue: 0, saturation: 0, lightness: i };
  var u,
    s = o - l,
    c = i > 0.5 ? s / (2 - o - l) : s / (o + l);
  switch (o) {
    case t:
      u = (r - n) / s + (r < n ? 6 : 0);
      break;
    case r:
      u = (n - t) / s + 2;
      break;
    default:
      u = (t - r) / s + 4;
      break;
  }
  return (
    (u *= 60),
    e.alpha !== void 0
      ? { hue: u, saturation: c, lightness: i, alpha: e.alpha }
      : { hue: u, saturation: c, lightness: i }
  );
}
function yu(e) {
  return Bm(vn(e));
}
var $m = function (t) {
    return t.length === 7 && t[1] === t[2] && t[3] === t[4] && t[5] === t[6] ? "#" + t[1] + t[3] + t[5] : t;
  },
  ya = $m;
function At(e) {
  var t = e.toString(16);
  return t.length === 1 ? "0" + t : t;
}
function Vn(e) {
  return At(Math.round(e * 255));
}
function Im(e, t, r) {
  return ya("#" + Vn(e) + Vn(t) + Vn(r));
}
function en(e, t, r) {
  return xr(e, t, r, Im);
}
function Zm(e, t, r) {
  if (typeof e == "number" && typeof t == "number" && typeof r == "number") return en(e, t, r);
  if (typeof e == "object" && t === void 0 && r === void 0) return en(e.hue, e.saturation, e.lightness);
  throw new Xe(1);
}
function Hm(e, t, r, n) {
  if (typeof e == "number" && typeof t == "number" && typeof r == "number" && typeof n == "number")
    return n >= 1 ? en(e, t, r) : "rgba(" + xr(e, t, r) + "," + n + ")";
  if (typeof e == "object" && t === void 0 && r === void 0 && n === void 0)
    return e.alpha >= 1
      ? en(e.hue, e.saturation, e.lightness)
      : "rgba(" + xr(e.hue, e.saturation, e.lightness) + "," + e.alpha + ")";
  throw new Xe(2);
}
function ba(e, t, r) {
  if (typeof e == "number" && typeof t == "number" && typeof r == "number") return ya("#" + At(e) + At(t) + At(r));
  if (typeof e == "object" && t === void 0 && r === void 0) return ya("#" + At(e.red) + At(e.green) + At(e.blue));
  throw new Xe(6);
}
function it(e, t, r, n) {
  if (typeof e == "string" && typeof t == "number") {
    var o = vn(e);
    return "rgba(" + o.red + "," + o.green + "," + o.blue + "," + t + ")";
  } else {
    if (typeof e == "number" && typeof t == "number" && typeof r == "number" && typeof n == "number")
      return n >= 1 ? ba(e, t, r) : "rgba(" + e + "," + t + "," + r + "," + n + ")";
    if (typeof e == "object" && t === void 0 && r === void 0 && n === void 0)
      return e.alpha >= 1
        ? ba(e.red, e.green, e.blue)
        : "rgba(" + e.red + "," + e.green + "," + e.blue + "," + e.alpha + ")";
  }
  throw new Xe(7);
}
var jm = function (t) {
    return (
      typeof t.red == "number" &&
      typeof t.green == "number" &&
      typeof t.blue == "number" &&
      (typeof t.alpha != "number" || typeof t.alpha > "u")
    );
  },
  Nm = function (t) {
    return (
      typeof t.red == "number" && typeof t.green == "number" && typeof t.blue == "number" && typeof t.alpha == "number"
    );
  },
  Pm = function (t) {
    return (
      typeof t.hue == "number" &&
      typeof t.saturation == "number" &&
      typeof t.lightness == "number" &&
      (typeof t.alpha != "number" || typeof t.alpha > "u")
    );
  },
  Vm = function (t) {
    return (
      typeof t.hue == "number" &&
      typeof t.saturation == "number" &&
      typeof t.lightness == "number" &&
      typeof t.alpha == "number"
    );
  };
function bu(e) {
  if (typeof e != "object") throw new Xe(8);
  if (Nm(e)) return it(e);
  if (jm(e)) return ba(e);
  if (Vm(e)) return Hm(e);
  if (Pm(e)) return Zm(e);
  throw new Xe(8);
}
function vu(e, t, r) {
  return function () {
    var o = r.concat(Array.prototype.slice.call(arguments));
    return o.length >= t ? e.apply(this, o) : vu(e, t, o);
  };
}
function En(e) {
  return vu(e, e.length, []);
}
function xn(e, t, r) {
  return Math.max(e, Math.min(t, r));
}
function zm(e, t) {
  if (t === "transparent") return t;
  var r = yu(t);
  return bu(qt({}, r, { lightness: xn(0, 1, r.lightness - parseFloat(e)) }));
}
var qm = En(zm),
  We = qm;
function Um(e, t) {
  if (t === "transparent") return t;
  var r = yu(t);
  return bu(qt({}, r, { lightness: xn(0, 1, r.lightness + parseFloat(e)) }));
}
var Wm = En(Um),
  wt = Wm;
function Gm(e, t) {
  if (t === "transparent") return t;
  var r = vn(t),
    n = typeof r.alpha == "number" ? r.alpha : 1,
    o = qt({}, r, { alpha: xn(0, 1, (n * 100 + parseFloat(e) * 100) / 100) });
  return it(o);
}
var Ym = En(Gm),
  $r = Ym;
function Km(e, t) {
  if (t === "transparent") return t;
  var r = vn(t),
    n = typeof r.alpha == "number" ? r.alpha : 1,
    o = qt({}, r, { alpha: xn(0, 1, +(n * 100 - parseFloat(e) * 100).toFixed(2) / 100) });
  return it(o);
}
var Jm = En(Km),
  ee = Jm,
  Xm = bi,
  Qm = F0,
  eg = Object.prototype,
  tg = eg.hasOwnProperty;
function rg(e, t, r) {
  var n = e[t];
  (!(tg.call(e, t) && Qm(n, r)) || (r === void 0 && !(t in e))) && Xm(e, t, r);
}
var yo = rg,
  ng = yo,
  ag = Ei,
  og = T0,
  Il = nn,
  lg = D0;
function ig(e, t, r, n) {
  if (!Il(e)) return e;
  t = ag(t, e);
  for (var o = -1, l = t.length, i = l - 1, u = e; u != null && ++o < l; ) {
    var s = lg(t[o]),
      c = r;
    if (s === "__proto__" || s === "constructor" || s === "prototype") return e;
    if (o != i) {
      var p = u[s];
      (c = n ? n(p, s, u) : void 0), c === void 0 && (c = Il(p) ? p : og(t[o + 1]) ? [] : {});
    }
    ng(u, s, c), (u = u[s]);
  }
  return e;
}
var sg = ig,
  ug = L0,
  cg = sg,
  dg = Ei;
function pg(e, t, r) {
  for (var n = -1, o = t.length, l = {}; ++n < o; ) {
    var i = t[n],
      u = ug(e, i);
    r(u, i) && cg(l, dg(i, e), u);
  }
  return l;
}
var fg = pg,
  mg = M0,
  gg = xi,
  hg = Ai,
  yg = B0,
  bg = Object.getOwnPropertySymbols,
  vg = bg
    ? function (e) {
        for (var t = []; e; ) mg(t, hg(e)), (e = gg(e));
        return t;
      }
    : yg,
  Eu = vg;
function Eg(e) {
  var t = [];
  if (e != null) for (var r in Object(e)) t.push(r);
  return t;
}
var xg = Eg,
  Ag = nn,
  wg = wi,
  Cg = xg,
  Sg = Object.prototype,
  kg = Sg.hasOwnProperty;
function _g(e) {
  if (!Ag(e)) return Cg(e);
  var t = wg(e),
    r = [];
  for (var n in e) (n == "constructor" && (t || !kg.call(e, n))) || r.push(n);
  return r;
}
var Og = _g,
  Rg = $0,
  Fg = Og,
  Tg = I0;
function Dg(e) {
  return Tg(e) ? Rg(e, !0) : Fg(e);
}
var bo = Dg,
  Lg = Z0,
  Mg = Eu,
  Bg = bo;
function $g(e) {
  return Lg(e, Bg, Mg);
}
var xu = $g,
  Ig = H0,
  Zg = j0,
  Hg = fg,
  jg = xu;
function Ng(e, t) {
  if (e == null) return {};
  var r = Ig(jg(e), function (n) {
    return [n];
  });
  return (
    (t = Zg(t)),
    Hg(e, r, function (n, o) {
      return t(n, o[0]);
    })
  );
}
var Pg = Ng;
const Vg = rn(Pg);
function Ct() {
  return (
    (Ct =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      }),
    Ct.apply(this, arguments)
  );
}
const zg = ["children", "options"],
  Zl = [
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
  Hl = { amp: "&", apos: "'", gt: ">", lt: "<", nbsp: " ", quot: "“" },
  qg = ["style", "script"],
  Ug = /([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi,
  Wg = /mailto:/i,
  Gg = /\n{2,}$/,
  Au = /^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/,
  Yg = /^ *> ?/gm,
  Kg = /^ {2,}\n/,
  Jg = /^(?:( *[-*_])){3,} *(?:\n *)+\n/,
  wu = /^\s*(`{3,}|~{3,}) *(\S+)?([^\n]*?)?\n([\s\S]+?)\s*\1 *(?:\n *)*\n?/,
  Cu = /^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/,
  Xg = /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,
  Qg = /^(?:\n *)*\n/,
  eh = /\r\n?/g,
  th = /^\[\^([^\]]+)](:.*)\n/,
  rh = /^\[\^([^\]]+)]/,
  nh = /\f/g,
  ah = /^\s*?\[(x|\s)\]/,
  Su = /^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,
  ku = /^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/,
  va =
    /^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?([^>]*)\/{0}>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1)[\s\S])*?)<\/\1>\n*/i,
  oh = /&([a-zA-Z]+);/g,
  _u = /^<!--[\s\S]*?(?:-->)/,
  lh = /^(data|aria|x)-[a-z_][a-z\d_.-]*$/,
  Ea = /^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i,
  ih = /^\{.*\}$/,
  sh = /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,
  uh = /^<([^ >]+@[^ >]+)>/,
  ch = /^<([^ >]+:\/[^ >]+)>/,
  dh = /-([a-z])?/gi,
  Ou = /^(.*\|?.*)\n *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*)\n?/,
  ph = /^\[([^\]]*)\]:\s+<?([^\s>]+)>?\s*("([^"]*)")?/,
  fh = /^!\[([^\]]*)\] ?\[([^\]]*)\]/,
  mh = /^\[([^\]]*)\] ?\[([^\]]*)\]/,
  gh = /(\[|\])/g,
  hh = /(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/,
  yh = /\t/g,
  bh = /^ *\| */,
  vh = /(^ *\||\| *$)/g,
  Eh = / *$/,
  xh = /^ *:-+: *$/,
  Ah = /^ *:-+ *$/,
  wh = /^ *-+: *$/,
  Ch = /^([*_])\1((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1\1(?!\1)/,
  Sh = /^([*_])((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1(?!\1|\w)/,
  kh = /^==((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)==/,
  _h = /^~~((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)~~/,
  Oh = /^\\([^0-9A-Za-z\s])/,
  Rh = /^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i,
  Fh = /^\n+/,
  Th = /^([ \t]*)/,
  Dh = /\\([^\\])/g,
  jl = / *\n+$/,
  Lh = /(?:^|\n)( *)$/,
  vo = "(?:\\d+\\.)",
  Eo = "(?:[*+-])";
function Ru(e) {
  return "( *)(" + (e === 1 ? vo : Eo) + ") +";
}
const Fu = Ru(1),
  Tu = Ru(2);
function Du(e) {
  return new RegExp("^" + (e === 1 ? Fu : Tu));
}
const Mh = Du(1),
  Bh = Du(2);
function Lu(e) {
  return new RegExp(
    "^" + (e === 1 ? Fu : Tu) + "[^\\n]*(?:\\n(?!\\1" + (e === 1 ? vo : Eo) + " )[^\\n]*)*(\\n|$)",
    "gm"
  );
}
const Mu = Lu(1),
  Bu = Lu(2);
function $u(e) {
  const t = e === 1 ? vo : Eo;
  return new RegExp("^( *)(" + t + ") [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1" + t + " (?!" + t + " ))\\n*|\\s*\\n*$)");
}
const Iu = $u(1),
  Zu = $u(2);
function Nl(e, t) {
  const r = t === 1,
    n = r ? Iu : Zu,
    o = r ? Mu : Bu,
    l = r ? Mh : Bh;
  return {
    t(i, u, s) {
      const c = Lh.exec(s);
      return c && (u.o || (!u._ && !u.u)) ? n.exec((i = c[1] + i)) : null;
    },
    i: z.HIGH,
    l(i, u, s) {
      const c = r ? +i[2] : void 0,
        p = i[0]
          .replace(
            Gg,
            `
`
          )
          .match(o);
      let g = !1;
      return {
        p: p.map(function (h, d) {
          const m = l.exec(h)[0].length,
            f = new RegExp("^ {1," + m + "}", "gm"),
            v = h.replace(f, "").replace(l, ""),
            b = d === p.length - 1,
            C =
              v.indexOf(`

`) !== -1 ||
              (b && g);
          g = C;
          const y = s._,
            E = s.o;
          let x;
          (s.o = !0),
            C
              ? ((s._ = !1),
                (x = v.replace(
                  jl,
                  `

`
                )))
              : ((s._ = !0), (x = v.replace(jl, "")));
          const w = u(x, s);
          return (s._ = y), (s.o = E), w;
        }),
        m: r,
        g: c,
      };
    },
    h: (i, u, s) =>
      e(
        i.m ? "ol" : "ul",
        { key: s.k, start: i.g },
        i.p.map(function (c, p) {
          return e("li", { key: p }, u(c, s));
        })
      ),
  };
}
const $h = /^\[([^\]]*)]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/,
  Ih = /^!\[([^\]]*)]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/,
  Hu = [Au, wu, Cu, Su, ku, _u, Ou, Mu, Iu, Bu, Zu],
  Zh = [...Hu, /^[^\n]+(?:  \n|\n{2,})/, va, Ea];
function Hh(e) {
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
function jh(e) {
  return wh.test(e) ? "right" : xh.test(e) ? "center" : Ah.test(e) ? "left" : null;
}
function Pl(e, t, r) {
  const n = r.v;
  r.v = !0;
  const o = t(e.trim(), r);
  r.v = n;
  let l = [[]];
  return (
    o.forEach(function (i, u) {
      i.type === "tableSeparator"
        ? u !== 0 && u !== o.length - 1 && l.push([])
        : (i.type !== "text" || (o[u + 1] != null && o[u + 1].type !== "tableSeparator") || (i.$ = i.$.replace(Eh, "")),
          l[l.length - 1].push(i));
    }),
    l
  );
}
function Nh(e, t, r) {
  r._ = !0;
  const n = Pl(e[1], t, r),
    o = e[2].replace(vh, "").split("|").map(jh),
    l = (function (i, u, s) {
      return i
        .trim()
        .split(
          `
`
        )
        .map(function (c) {
          return Pl(c, u, s);
        });
    })(e[3], t, r);
  return (r._ = !1), { S: o, A: l, L: n, type: "table" };
}
function Vl(e, t) {
  return e.S[t] == null ? {} : { textAlign: e.S[t] };
}
function dt(e) {
  return function (t, r) {
    return r._ ? e.exec(t) : null;
  };
}
function pt(e) {
  return function (t, r) {
    return r._ || r.u ? e.exec(t) : null;
  };
}
function ot(e) {
  return function (t, r) {
    return r._ || r.u ? null : e.exec(t);
  };
}
function or(e) {
  return function (t) {
    return e.exec(t);
  };
}
function Ph(e, t, r) {
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
    (l) =>
      !Hu.some((i) => i.test(l)) &&
      ((n +=
        l +
        `
`),
      l.trim())
  );
  const o = n.trimEnd();
  return o == "" ? null : [n, o];
}
function Mt(e) {
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
function zl(e) {
  return e.replace(Dh, "$1");
}
function Wr(e, t, r) {
  const n = r._ || !1,
    o = r.u || !1;
  (r._ = !0), (r.u = !0);
  const l = e(t, r);
  return (r._ = n), (r.u = o), l;
}
function Vh(e, t, r) {
  const n = r._ || !1,
    o = r.u || !1;
  (r._ = !1), (r.u = !0);
  const l = e(t, r);
  return (r._ = n), (r.u = o), l;
}
function zh(e, t, r) {
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
const zn = (e, t, r) => ({ $: Wr(t, e[1], r) });
function qn() {
  return {};
}
function Un() {
  return null;
}
function qh(...e) {
  return e.filter(Boolean).join(" ");
}
function Wn(e, t, r) {
  let n = e;
  const o = t.split(".");
  for (; o.length && ((n = n[o[0]]), n !== void 0); ) o.shift();
  return n || r;
}
var z;
function Uh(e, t = {}) {
  (t.overrides = t.overrides || {}),
    (t.slugify = t.slugify || Hh),
    (t.namedCodesToUnicode = t.namedCodesToUnicode ? Ct({}, Hl, t.namedCodesToUnicode) : Hl);
  const r = t.createElement || A.createElement;
  function n(d, m, ...f) {
    const v = Wn(t.overrides, `${d}.props`, {});
    return r(
      (function (b, C) {
        const y = Wn(C, b);
        return y
          ? typeof y == "function" || (typeof y == "object" && "render" in y)
            ? y
            : Wn(C, `${b}.component`, b)
          : b;
      })(d, t.overrides),
      Ct({}, m, v, { className: qh(m == null ? void 0 : m.className, v.className) || void 0 }),
      ...f
    );
  }
  function o(d) {
    let m = !1;
    t.forceInline ? (m = !0) : t.forceBlock || (m = hh.test(d) === !1);
    const f = p(
      c(
        m
          ? d
          : `${d.trimEnd().replace(Fh, "")}

`,
        { _: m }
      )
    );
    for (; typeof f[f.length - 1] == "string" && !f[f.length - 1].trim(); ) f.pop();
    if (t.wrapper === null) return f;
    const v = t.wrapper || (m ? "span" : "div");
    let b;
    if (f.length > 1 || t.forceWrapper) b = f;
    else {
      if (f.length === 1) return (b = f[0]), typeof b == "string" ? n("span", { key: "outer" }, b) : b;
      b = null;
    }
    return A.createElement(v, { key: "outer" }, b);
  }
  function l(d) {
    const m = d.match(Ug);
    return m
      ? m.reduce(function (f, v, b) {
          const C = v.indexOf("=");
          if (C !== -1) {
            const y = (function (k) {
                return (
                  k.indexOf("-") !== -1 &&
                    k.match(lh) === null &&
                    (k = k.replace(dh, function (S, O) {
                      return O.toUpperCase();
                    })),
                  k
                );
              })(v.slice(0, C)).trim(),
              E = (function (k) {
                const S = k[0];
                return (S === '"' || S === "'") && k.length >= 2 && k[k.length - 1] === S ? k.slice(1, -1) : k;
              })(v.slice(C + 1).trim()),
              x = Zl[y] || y,
              w = (f[x] = (function (k, S) {
                return k === "style"
                  ? S.split(/;\s?/).reduce(function (O, R) {
                      const F = R.slice(0, R.indexOf(":"));
                      return (O[F.replace(/(-[a-z])/g, (L) => L[1].toUpperCase())] = R.slice(F.length + 1).trim()), O;
                    }, {})
                  : k === "href"
                  ? Mt(S)
                  : (S.match(ih) && (S = S.slice(1, S.length - 1)), S === "true" || (S !== "false" && S));
              })(y, E));
            typeof w == "string" && (va.test(w) || Ea.test(w)) && (f[x] = A.cloneElement(o(w.trim()), { key: b }));
          } else v !== "style" && (f[Zl[v] || v] = !0);
          return f;
        }, {})
      : null;
  }
  const i = [],
    u = {},
    s = {
      blockQuote: {
        t: ot(Au),
        i: z.HIGH,
        l: (d, m, f) => ({ $: m(d[0].replace(Yg, ""), f) }),
        h: (d, m, f) => n("blockquote", { key: f.k }, m(d.$, f)),
      },
      breakLine: { t: or(Kg), i: z.HIGH, l: qn, h: (d, m, f) => n("br", { key: f.k }) },
      breakThematic: { t: ot(Jg), i: z.HIGH, l: qn, h: (d, m, f) => n("hr", { key: f.k }) },
      codeBlock: {
        t: ot(Cu),
        i: z.MAX,
        l: (d) => ({ $: d[0].replace(/^ {4}/gm, "").replace(/\n+$/, ""), M: void 0 }),
        h: (d, m, f) => n("pre", { key: f.k }, n("code", Ct({}, d.I, { className: d.M ? `lang-${d.M}` : "" }), d.$)),
      },
      codeFenced: {
        t: ot(wu),
        i: z.MAX,
        l: (d) => ({ I: l(d[3] || ""), $: d[4], M: d[2] || void 0, type: "codeBlock" }),
      },
      codeInline: { t: pt(Xg), i: z.LOW, l: (d) => ({ $: d[2] }), h: (d, m, f) => n("code", { key: f.k }, d.$) },
      footnote: { t: ot(th), i: z.MAX, l: (d) => (i.push({ O: d[2], B: d[1] }), {}), h: Un },
      footnoteReference: {
        t: dt(rh),
        i: z.HIGH,
        l: (d) => ({ $: d[1], R: `#${t.slugify(d[1])}` }),
        h: (d, m, f) => n("a", { key: f.k, href: Mt(d.R) }, n("sup", { key: f.k }, d.$)),
      },
      gfmTask: {
        t: dt(ah),
        i: z.HIGH,
        l: (d) => ({ T: d[1].toLowerCase() === "x" }),
        h: (d, m, f) => n("input", { checked: d.T, key: f.k, readOnly: !0, type: "checkbox" }),
      },
      heading: {
        t: ot(Su),
        i: z.HIGH,
        l: (d, m, f) => ({ $: Wr(m, d[2], f), j: t.slugify(d[2]), C: d[1].length }),
        h: (d, m, f) => n(`h${d.C}`, { id: d.j, key: f.k }, m(d.$, f)),
      },
      headingSetext: {
        t: ot(ku),
        i: z.MAX,
        l: (d, m, f) => ({ $: Wr(m, d[1], f), C: d[2] === "=" ? 1 : 2, type: "heading" }),
      },
      htmlComment: { t: or(_u), i: z.HIGH, l: () => ({}), h: Un },
      image: {
        t: pt(Ih),
        i: z.HIGH,
        l: (d) => ({ D: d[1], R: zl(d[2]), N: d[3] }),
        h: (d, m, f) => n("img", { key: f.k, alt: d.D || void 0, title: d.N || void 0, src: Mt(d.R) }),
      },
      link: {
        t: dt($h),
        i: z.LOW,
        l: (d, m, f) => ({ $: Vh(m, d[1], f), R: zl(d[2]), N: d[3] }),
        h: (d, m, f) => n("a", { key: f.k, href: Mt(d.R), title: d.N }, m(d.$, f)),
      },
      linkAngleBraceStyleDetector: {
        t: dt(ch),
        i: z.MAX,
        l: (d) => ({ $: [{ $: d[1], type: "text" }], R: d[1], type: "link" }),
      },
      linkBareUrlDetector: {
        t: (d, m) => (m.Z ? null : dt(sh)(d, m)),
        i: z.MAX,
        l: (d) => ({ $: [{ $: d[1], type: "text" }], R: d[1], N: void 0, type: "link" }),
      },
      linkMailtoDetector: {
        t: dt(uh),
        i: z.MAX,
        l(d) {
          let m = d[1],
            f = d[1];
          return (
            Wg.test(f) || (f = "mailto:" + f),
            { $: [{ $: m.replace("mailto:", ""), type: "text" }], R: f, type: "link" }
          );
        },
      },
      orderedList: Nl(n, 1),
      unorderedList: Nl(n, 2),
      newlineCoalescer: {
        t: ot(Qg),
        i: z.LOW,
        l: qn,
        h: () => `
`,
      },
      paragraph: { t: Ph, i: z.LOW, l: zn, h: (d, m, f) => n("p", { key: f.k }, m(d.$, f)) },
      ref: { t: dt(ph), i: z.MAX, l: (d) => ((u[d[1]] = { R: d[2], N: d[4] }), {}), h: Un },
      refImage: {
        t: pt(fh),
        i: z.MAX,
        l: (d) => ({ D: d[1] || void 0, F: d[2] }),
        h: (d, m, f) => n("img", { key: f.k, alt: d.D, src: Mt(u[d.F].R), title: u[d.F].N }),
      },
      refLink: {
        t: dt(mh),
        i: z.MAX,
        l: (d, m, f) => ({ $: m(d[1], f), P: m(d[0].replace(gh, "\\$1"), f), F: d[2] }),
        h: (d, m, f) =>
          u[d.F]
            ? n("a", { key: f.k, href: Mt(u[d.F].R), title: u[d.F].N }, m(d.$, f))
            : n("span", { key: f.k }, m(d.P, f)),
      },
      table: {
        t: ot(Ou),
        i: z.HIGH,
        l: Nh,
        h: (d, m, f) =>
          n(
            "table",
            { key: f.k },
            n(
              "thead",
              null,
              n(
                "tr",
                null,
                d.L.map(function (v, b) {
                  return n("th", { key: b, style: Vl(d, b) }, m(v, f));
                })
              )
            ),
            n(
              "tbody",
              null,
              d.A.map(function (v, b) {
                return n(
                  "tr",
                  { key: b },
                  v.map(function (C, y) {
                    return n("td", { key: y, style: Vl(d, y) }, m(C, f));
                  })
                );
              })
            )
          ),
      },
      tableSeparator: {
        t: function (d, m) {
          return m.v ? bh.exec(d) : null;
        },
        i: z.HIGH,
        l: function () {
          return { type: "tableSeparator" };
        },
        h: () => " | ",
      },
      text: {
        t: or(Rh),
        i: z.MIN,
        l: (d) => ({ $: d[0].replace(oh, (m, f) => (t.namedCodesToUnicode[f] ? t.namedCodesToUnicode[f] : m)) }),
        h: (d) => d.$,
      },
      textBolded: {
        t: pt(Ch),
        i: z.MED,
        l: (d, m, f) => ({ $: m(d[2], f) }),
        h: (d, m, f) => n("strong", { key: f.k }, m(d.$, f)),
      },
      textEmphasized: {
        t: pt(Sh),
        i: z.LOW,
        l: (d, m, f) => ({ $: m(d[2], f) }),
        h: (d, m, f) => n("em", { key: f.k }, m(d.$, f)),
      },
      textEscaped: { t: pt(Oh), i: z.HIGH, l: (d) => ({ $: d[1], type: "text" }) },
      textMarked: { t: pt(kh), i: z.LOW, l: zn, h: (d, m, f) => n("mark", { key: f.k }, m(d.$, f)) },
      textStrikethroughed: { t: pt(_h), i: z.LOW, l: zn, h: (d, m, f) => n("del", { key: f.k }, m(d.$, f)) },
    };
  t.disableParsingRawHTML !== !0 &&
    ((s.htmlBlock = {
      t: or(va),
      i: z.HIGH,
      l(d, m, f) {
        const [, v] = d[3].match(Th),
          b = new RegExp(`^${v}`, "gm"),
          C = d[3].replace(b, ""),
          y = ((E = C), Zh.some((S) => S.test(E)) ? zh : Wr);
        var E;
        const x = d[1].toLowerCase(),
          w = qg.indexOf(x) !== -1;
        f.Z = f.Z || x === "a";
        const k = w ? d[3] : y(m, C, f);
        return (f.Z = !1), { I: l(d[2]), $: k, G: w, H: w ? x : d[1] };
      },
      h: (d, m, f) => n(d.H, Ct({ key: f.k }, d.I), d.G ? d.$ : m(d.$, f)),
    }),
    (s.htmlSelfClosing = {
      t: or(Ea),
      i: z.HIGH,
      l: (d) => ({ I: l(d[2] || ""), H: d[1] }),
      h: (d, m, f) => n(d.H, Ct({}, d.I, { key: f.k })),
    }));
  const c = (function (d) {
      let m = Object.keys(d);
      function f(v, b) {
        let C = [],
          y = "";
        for (; v; ) {
          let E = 0;
          for (; E < m.length; ) {
            const x = m[E],
              w = d[x],
              k = w.t(v, b, y);
            if (k) {
              const S = k[0];
              v = v.substring(S.length);
              const O = w.l(k, f, b);
              O.type == null && (O.type = x), C.push(O), (y = S);
              break;
            }
            E++;
          }
        }
        return C;
      }
      return (
        m.sort(function (v, b) {
          let C = d[v].i,
            y = d[b].i;
          return C !== y ? C - y : v < b ? -1 : 1;
        }),
        function (v, b) {
          return f(
            (function (C) {
              return C.replace(
                eh,
                `
`
              )
                .replace(nh, "")
                .replace(yh, "    ");
            })(v),
            b
          );
        }
      );
    })(s),
    p =
      ((g = (function (d) {
        return function (m, f, v) {
          return d[m.type].h(m, f, v);
        };
      })(s)),
      function d(m, f = {}) {
        if (Array.isArray(m)) {
          const v = f.k,
            b = [];
          let C = !1;
          for (let y = 0; y < m.length; y++) {
            f.k = y;
            const E = d(m[y], f),
              x = typeof E == "string";
            x && C ? (b[b.length - 1] += E) : E !== null && b.push(E), (C = x);
          }
          return (f.k = v), b;
        }
        return g(m, d, f);
      });
  var g;
  const h = o(e);
  return i.length
    ? n(
        "div",
        null,
        h,
        n(
          "footer",
          { key: "footer" },
          i.map(function (d) {
            return n("div", { id: t.slugify(d.B), key: d.B }, d.B, p(c(d.O, { _: !0 })));
          })
        )
      )
    : h;
}
(function (e) {
  (e[(e.MAX = 0)] = "MAX"),
    (e[(e.HIGH = 1)] = "HIGH"),
    (e[(e.MED = 2)] = "MED"),
    (e[(e.LOW = 3)] = "LOW"),
    (e[(e.MIN = 4)] = "MIN");
})(z || (z = {}));
const ju = (e) => {
  let { children: t, options: r } = e,
    n = (function (o, l) {
      if (o == null) return {};
      var i,
        u,
        s = {},
        c = Object.keys(o);
      for (u = 0; u < c.length; u++) l.indexOf((i = c[u])) >= 0 || (s[i] = o[i]);
      return s;
    })(e, zg);
  return A.cloneElement(Uh(t, r), n);
};
function Wh(e, t, r, n) {
  for (var o = e.length, l = r + (n ? 1 : -1); n ? l-- : ++l < o; ) if (t(e[l], l, e)) return l;
  return -1;
}
var Gh = Wh;
function Yh(e) {
  return e !== e;
}
var Kh = Yh;
function Jh(e, t, r) {
  for (var n = r - 1, o = e.length; ++n < o; ) if (e[n] === t) return n;
  return -1;
}
var Xh = Jh,
  Qh = Gh,
  ey = Kh,
  ty = Xh;
function ry(e, t, r) {
  return t === t ? ty(e, t, r) : Qh(e, ey, r);
}
var ny = ry,
  ay = ny;
function oy(e, t) {
  var r = e == null ? 0 : e.length;
  return !!r && ay(e, t, 0) > -1;
}
var ly = oy;
function iy(e, t, r) {
  for (var n = -1, o = e == null ? 0 : e.length; ++n < o; ) if (r(t, e[n])) return !0;
  return !1;
}
var sy = iy;
function uy() {}
var cy = uy,
  Gn = N0,
  dy = cy,
  py = Ci,
  fy = 1 / 0,
  my =
    Gn && 1 / py(new Gn([, -0]))[1] == fy
      ? function (e) {
          return new Gn(e);
        }
      : dy,
  gy = my,
  hy = P0,
  yy = ly,
  by = sy,
  vy = V0,
  Ey = gy,
  xy = Ci,
  Ay = 200;
function wy(e, t, r) {
  var n = -1,
    o = yy,
    l = e.length,
    i = !0,
    u = [],
    s = u;
  if (r) (i = !1), (o = by);
  else if (l >= Ay) {
    var c = t ? null : Ey(e);
    if (c) return xy(c);
    (i = !1), (o = vy), (s = new hy());
  } else s = t ? [] : u;
  e: for (; ++n < l; ) {
    var p = e[n],
      g = t ? t(p) : p;
    if (((p = r || p !== 0 ? p : 0), i && g === g)) {
      for (var h = s.length; h--; ) if (s[h] === g) continue e;
      t && s.push(g), u.push(p);
    } else o(s, g, r) || (s !== u && s.push(g), u.push(p));
  }
  return u;
}
var Cy = wy,
  Sy = Cy;
function ky(e) {
  return e && e.length ? Sy(e) : [];
}
var _y = ky;
const Oy = rn(_y);
function Ry(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1; );
  return e;
}
var Fy = Ry,
  Ty = yo,
  Dy = bi;
function Ly(e, t, r, n) {
  var o = !r;
  r || (r = {});
  for (var l = -1, i = t.length; ++l < i; ) {
    var u = t[l],
      s = n ? n(r[u], e[u], u, r, e) : void 0;
    s === void 0 && (s = e[u]), o ? Dy(r, u, s) : Ty(r, u, s);
  }
  return r;
}
var An = Ly,
  My = An,
  By = Si;
function $y(e, t) {
  return e && My(t, By(t), e);
}
var Iy = $y,
  Zy = An,
  Hy = bo;
function jy(e, t) {
  return e && Zy(t, Hy(t), e);
}
var Ny = jy,
  tn = { exports: {} };
tn.exports;
(function (e, t) {
  var r = z0,
    n = t && !t.nodeType && t,
    o = n && !0 && e && !e.nodeType && e,
    l = o && o.exports === n,
    i = l ? r.Buffer : void 0,
    u = i ? i.allocUnsafe : void 0;
  function s(c, p) {
    if (p) return c.slice();
    var g = c.length,
      h = u ? u(g) : new c.constructor(g);
    return c.copy(h), h;
  }
  e.exports = s;
})(tn, tn.exports);
var Py = tn.exports;
function Vy(e, t) {
  var r = -1,
    n = e.length;
  for (t || (t = Array(n)); ++r < n; ) t[r] = e[r];
  return t;
}
var zy = Vy,
  qy = An,
  Uy = Ai;
function Wy(e, t) {
  return qy(e, Uy(e), t);
}
var Gy = Wy,
  Yy = An,
  Ky = Eu;
function Jy(e, t) {
  return Yy(e, Ky(e), t);
}
var Xy = Jy,
  Qy = Object.prototype,
  e3 = Qy.hasOwnProperty;
function t3(e) {
  var t = e.length,
    r = new e.constructor(t);
  return t && typeof e[0] == "string" && e3.call(e, "index") && ((r.index = e.index), (r.input = e.input)), r;
}
var r3 = t3,
  ql = q0;
function n3(e) {
  var t = new e.constructor(e.byteLength);
  return new ql(t).set(new ql(e)), t;
}
var xo = n3,
  a3 = xo;
function o3(e, t) {
  var r = t ? a3(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.byteLength);
}
var l3 = o3,
  i3 = /\w*$/;
function s3(e) {
  var t = new e.constructor(e.source, i3.exec(e));
  return (t.lastIndex = e.lastIndex), t;
}
var u3 = s3,
  Ul = U0,
  Wl = Ul ? Ul.prototype : void 0,
  Gl = Wl ? Wl.valueOf : void 0;
function c3(e) {
  return Gl ? Object(Gl.call(e)) : {};
}
var d3 = c3,
  p3 = xo;
function f3(e, t) {
  var r = t ? p3(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.length);
}
var m3 = f3,
  g3 = xo,
  h3 = l3,
  y3 = u3,
  b3 = d3,
  v3 = m3,
  E3 = "[object Boolean]",
  x3 = "[object Date]",
  A3 = "[object Map]",
  w3 = "[object Number]",
  C3 = "[object RegExp]",
  S3 = "[object Set]",
  k3 = "[object String]",
  _3 = "[object Symbol]",
  O3 = "[object ArrayBuffer]",
  R3 = "[object DataView]",
  F3 = "[object Float32Array]",
  T3 = "[object Float64Array]",
  D3 = "[object Int8Array]",
  L3 = "[object Int16Array]",
  M3 = "[object Int32Array]",
  B3 = "[object Uint8Array]",
  $3 = "[object Uint8ClampedArray]",
  I3 = "[object Uint16Array]",
  Z3 = "[object Uint32Array]";
function H3(e, t, r) {
  var n = e.constructor;
  switch (t) {
    case O3:
      return g3(e);
    case E3:
    case x3:
      return new n(+e);
    case R3:
      return h3(e, r);
    case F3:
    case T3:
    case D3:
    case L3:
    case M3:
    case B3:
    case $3:
    case I3:
    case Z3:
      return v3(e, r);
    case A3:
      return new n();
    case w3:
    case k3:
      return new n(e);
    case C3:
      return y3(e);
    case S3:
      return new n();
    case _3:
      return b3(e);
  }
}
var j3 = H3,
  N3 = nn,
  Yl = Object.create,
  P3 = (function () {
    function e() {}
    return function (t) {
      if (!N3(t)) return {};
      if (Yl) return Yl(t);
      e.prototype = t;
      var r = new e();
      return (e.prototype = void 0), r;
    };
  })(),
  V3 = P3,
  z3 = V3,
  q3 = xi,
  U3 = wi;
function W3(e) {
  return typeof e.constructor == "function" && !U3(e) ? z3(q3(e)) : {};
}
var G3 = W3,
  Y3 = Ra,
  K3 = ki,
  J3 = "[object Map]";
function X3(e) {
  return K3(e) && Y3(e) == J3;
}
var Q3 = X3,
  eb = Q3,
  tb = Oi,
  Kl = _i,
  Jl = Kl && Kl.isMap,
  rb = Jl ? tb(Jl) : eb,
  nb = rb,
  ab = Ra,
  ob = ki,
  lb = "[object Set]";
function ib(e) {
  return ob(e) && ab(e) == lb;
}
var sb = ib,
  ub = sb,
  cb = Oi,
  Xl = _i,
  Ql = Xl && Xl.isSet,
  db = Ql ? cb(Ql) : ub,
  pb = db,
  fb = W0,
  mb = Fy,
  gb = yo,
  hb = Iy,
  yb = Ny,
  bb = Py,
  vb = zy,
  Eb = Gy,
  xb = Xy,
  Ab = Y0,
  wb = xu,
  Cb = Ra,
  Sb = r3,
  kb = j3,
  _b = G3,
  Ob = K0,
  Rb = G0,
  Fb = nb,
  Tb = nn,
  Db = pb,
  Lb = Si,
  Mb = bo,
  Bb = 1,
  $b = 2,
  Ib = 4,
  Nu = "[object Arguments]",
  Zb = "[object Array]",
  Hb = "[object Boolean]",
  jb = "[object Date]",
  Nb = "[object Error]",
  Pu = "[object Function]",
  Pb = "[object GeneratorFunction]",
  Vb = "[object Map]",
  zb = "[object Number]",
  Vu = "[object Object]",
  qb = "[object RegExp]",
  Ub = "[object Set]",
  Wb = "[object String]",
  Gb = "[object Symbol]",
  Yb = "[object WeakMap]",
  Kb = "[object ArrayBuffer]",
  Jb = "[object DataView]",
  Xb = "[object Float32Array]",
  Qb = "[object Float64Array]",
  e4 = "[object Int8Array]",
  t4 = "[object Int16Array]",
  r4 = "[object Int32Array]",
  n4 = "[object Uint8Array]",
  a4 = "[object Uint8ClampedArray]",
  o4 = "[object Uint16Array]",
  l4 = "[object Uint32Array]",
  X = {};
X[Nu] =
  X[Zb] =
  X[Kb] =
  X[Jb] =
  X[Hb] =
  X[jb] =
  X[Xb] =
  X[Qb] =
  X[e4] =
  X[t4] =
  X[r4] =
  X[Vb] =
  X[zb] =
  X[Vu] =
  X[qb] =
  X[Ub] =
  X[Wb] =
  X[Gb] =
  X[n4] =
  X[a4] =
  X[o4] =
  X[l4] =
    !0;
X[Nb] = X[Pu] = X[Yb] = !1;
function Gr(e, t, r, n, o, l) {
  var i,
    u = t & Bb,
    s = t & $b,
    c = t & Ib;
  if ((r && (i = o ? r(e, n, o, l) : r(e)), i !== void 0)) return i;
  if (!Tb(e)) return e;
  var p = Ob(e);
  if (p) {
    if (((i = Sb(e)), !u)) return vb(e, i);
  } else {
    var g = Cb(e),
      h = g == Pu || g == Pb;
    if (Rb(e)) return bb(e, u);
    if (g == Vu || g == Nu || (h && !o)) {
      if (((i = s || h ? {} : _b(e)), !u)) return s ? xb(e, yb(i, e)) : Eb(e, hb(i, e));
    } else {
      if (!X[g]) return o ? e : {};
      i = kb(e, g, u);
    }
  }
  l || (l = new fb());
  var d = l.get(e);
  if (d) return d;
  l.set(e, i),
    Db(e)
      ? e.forEach(function (v) {
          i.add(Gr(v, t, r, v, e, l));
        })
      : Fb(e) &&
        e.forEach(function (v, b) {
          i.set(b, Gr(v, t, r, b, e, l));
        });
  var m = c ? (s ? wb : Ab) : s ? Mb : Lb,
    f = p ? void 0 : m(e);
  return (
    mb(f || e, function (v, b) {
      f && ((b = v), (v = e[b])), gb(i, b, Gr(v, t, r, b, e, l));
    }),
    i
  );
}
var i4 = Gr,
  s4 = i4,
  u4 = 1,
  c4 = 4;
function d4(e) {
  return s4(e, u4 | c4);
}
var p4 = d4;
const f4 = rn(p4);
var m4 = Object.create,
  zu = Object.defineProperty,
  g4 = Object.getOwnPropertyDescriptor,
  qu = Object.getOwnPropertyNames,
  h4 = Object.getPrototypeOf,
  y4 = Object.prototype.hasOwnProperty,
  Me = (e, t) =>
    function () {
      return t || (0, e[qu(e)[0]])((t = { exports: {} }).exports, t), t.exports;
    },
  b4 = (e, t, r, n) => {
    if ((t && typeof t == "object") || typeof t == "function")
      for (let o of qu(t))
        !y4.call(e, o) && o !== r && zu(e, o, { get: () => t[o], enumerable: !(n = g4(t, o)) || n.enumerable });
    return e;
  },
  Ao = (e, t, r) => (
    (r = e != null ? m4(h4(e)) : {}),
    b4(t || !e || !e.__esModule ? zu(r, "default", { value: e, enumerable: !0 }) : r, e)
  ),
  v4 = [
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
  E4 = ["detail"];
function x4(e) {
  const t = v4.filter((r) => e[r] !== void 0).reduce((r, n) => ({ ...r, [n]: e[n] }), {});
  return (
    e instanceof CustomEvent &&
      E4.filter((r) => e[r] !== void 0).forEach((r) => {
        t[r] = e[r];
      }),
    t
  );
}
var Uu = Me({
    "node_modules/has-symbols/shams.js"(e, t) {
      t.exports = function () {
        if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function") return !1;
        if (typeof Symbol.iterator == "symbol") return !0;
        var n = {},
          o = Symbol("test"),
          l = Object(o);
        if (
          typeof o == "string" ||
          Object.prototype.toString.call(o) !== "[object Symbol]" ||
          Object.prototype.toString.call(l) !== "[object Symbol]"
        )
          return !1;
        var i = 42;
        n[o] = i;
        for (o in n) return !1;
        if (
          (typeof Object.keys == "function" && Object.keys(n).length !== 0) ||
          (typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(n).length !== 0)
        )
          return !1;
        var u = Object.getOwnPropertySymbols(n);
        if (u.length !== 1 || u[0] !== o || !Object.prototype.propertyIsEnumerable.call(n, o)) return !1;
        if (typeof Object.getOwnPropertyDescriptor == "function") {
          var s = Object.getOwnPropertyDescriptor(n, o);
          if (s.value !== i || s.enumerable !== !0) return !1;
        }
        return !0;
      };
    },
  }),
  Wu = Me({
    "node_modules/has-symbols/index.js"(e, t) {
      var r = typeof Symbol < "u" && Symbol,
        n = Uu();
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
  A4 = Me({
    "node_modules/function-bind/implementation.js"(e, t) {
      var r = "Function.prototype.bind called on incompatible ",
        n = Array.prototype.slice,
        o = Object.prototype.toString,
        l = "[object Function]";
      t.exports = function (u) {
        var s = this;
        if (typeof s != "function" || o.call(s) !== l) throw new TypeError(r + s);
        for (
          var c = n.call(arguments, 1),
            p,
            g = function () {
              if (this instanceof p) {
                var v = s.apply(this, c.concat(n.call(arguments)));
                return Object(v) === v ? v : this;
              } else return s.apply(u, c.concat(n.call(arguments)));
            },
            h = Math.max(0, s.length - c.length),
            d = [],
            m = 0;
          m < h;
          m++
        )
          d.push("$" + m);
        if (
          ((p = Function("binder", "return function (" + d.join(",") + "){ return binder.apply(this,arguments); }")(g)),
          s.prototype)
        ) {
          var f = function () {};
          (f.prototype = s.prototype), (p.prototype = new f()), (f.prototype = null);
        }
        return p;
      };
    },
  }),
  wo = Me({
    "node_modules/function-bind/index.js"(e, t) {
      var r = A4();
      t.exports = Function.prototype.bind || r;
    },
  }),
  w4 = Me({
    "node_modules/has/src/index.js"(e, t) {
      var r = wo();
      t.exports = r.call(Function.call, Object.prototype.hasOwnProperty);
    },
  }),
  Gu = Me({
    "node_modules/get-intrinsic/index.js"(e, t) {
      var r,
        n = SyntaxError,
        o = Function,
        l = TypeError,
        i = function (L) {
          try {
            return o('"use strict"; return (' + L + ").constructor;")();
          } catch {}
        },
        u = Object.getOwnPropertyDescriptor;
      if (u)
        try {
          u({}, "");
        } catch {
          u = null;
        }
      var s = function () {
          throw new l();
        },
        c = u
          ? (function () {
              try {
                return arguments.callee, s;
              } catch {
                try {
                  return u(arguments, "callee").get;
                } catch {
                  return s;
                }
              }
            })()
          : s,
        p = Wu()(),
        g =
          Object.getPrototypeOf ||
          function (L) {
            return L.__proto__;
          },
        h = {},
        d = typeof Uint8Array > "u" ? r : g(Uint8Array),
        m = {
          "%AggregateError%": typeof AggregateError > "u" ? r : AggregateError,
          "%Array%": Array,
          "%ArrayBuffer%": typeof ArrayBuffer > "u" ? r : ArrayBuffer,
          "%ArrayIteratorPrototype%": p ? g([][Symbol.iterator]()) : r,
          "%AsyncFromSyncIteratorPrototype%": r,
          "%AsyncFunction%": h,
          "%AsyncGenerator%": h,
          "%AsyncGeneratorFunction%": h,
          "%AsyncIteratorPrototype%": h,
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
          "%Function%": o,
          "%GeneratorFunction%": h,
          "%Int8Array%": typeof Int8Array > "u" ? r : Int8Array,
          "%Int16Array%": typeof Int16Array > "u" ? r : Int16Array,
          "%Int32Array%": typeof Int32Array > "u" ? r : Int32Array,
          "%isFinite%": isFinite,
          "%isNaN%": isNaN,
          "%IteratorPrototype%": p ? g(g([][Symbol.iterator]())) : r,
          "%JSON%": typeof JSON == "object" ? JSON : r,
          "%Map%": typeof Map > "u" ? r : Map,
          "%MapIteratorPrototype%": typeof Map > "u" || !p ? r : g(new Map()[Symbol.iterator]()),
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
          "%SetIteratorPrototype%": typeof Set > "u" || !p ? r : g(new Set()[Symbol.iterator]()),
          "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? r : SharedArrayBuffer,
          "%String%": String,
          "%StringIteratorPrototype%": p ? g(""[Symbol.iterator]()) : r,
          "%Symbol%": p ? Symbol : r,
          "%SyntaxError%": n,
          "%ThrowTypeError%": c,
          "%TypedArray%": d,
          "%TypeError%": l,
          "%Uint8Array%": typeof Uint8Array > "u" ? r : Uint8Array,
          "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? r : Uint8ClampedArray,
          "%Uint16Array%": typeof Uint16Array > "u" ? r : Uint16Array,
          "%Uint32Array%": typeof Uint32Array > "u" ? r : Uint32Array,
          "%URIError%": URIError,
          "%WeakMap%": typeof WeakMap > "u" ? r : WeakMap,
          "%WeakRef%": typeof WeakRef > "u" ? r : WeakRef,
          "%WeakSet%": typeof WeakSet > "u" ? r : WeakSet,
        },
        f = function L(T) {
          var Z;
          if (T === "%AsyncFunction%") Z = i("async function () {}");
          else if (T === "%GeneratorFunction%") Z = i("function* () {}");
          else if (T === "%AsyncGeneratorFunction%") Z = i("async function* () {}");
          else if (T === "%AsyncGenerator%") {
            var D = L("%AsyncGeneratorFunction%");
            D && (Z = D.prototype);
          } else if (T === "%AsyncIteratorPrototype%") {
            var M = L("%AsyncGenerator%");
            M && (Z = g(M.prototype));
          }
          return (m[T] = Z), Z;
        },
        v = {
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
        b = wo(),
        C = w4(),
        y = b.call(Function.call, Array.prototype.concat),
        E = b.call(Function.apply, Array.prototype.splice),
        x = b.call(Function.call, String.prototype.replace),
        w = b.call(Function.call, String.prototype.slice),
        k = b.call(Function.call, RegExp.prototype.exec),
        S = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
        O = /\\(\\)?/g,
        R = function (T) {
          var Z = w(T, 0, 1),
            D = w(T, -1);
          if (Z === "%" && D !== "%") throw new n("invalid intrinsic syntax, expected closing `%`");
          if (D === "%" && Z !== "%") throw new n("invalid intrinsic syntax, expected opening `%`");
          var M = [];
          return (
            x(T, S, function (H, P, $, j) {
              M[M.length] = $ ? x(j, O, "$1") : P || H;
            }),
            M
          );
        },
        F = function (T, Z) {
          var D = T,
            M;
          if ((C(v, D) && ((M = v[D]), (D = "%" + M[0] + "%")), C(m, D))) {
            var H = m[D];
            if ((H === h && (H = f(D)), typeof H > "u" && !Z))
              throw new l("intrinsic " + T + " exists, but is not available. Please file an issue!");
            return { alias: M, name: D, value: H };
          }
          throw new n("intrinsic " + T + " does not exist!");
        };
      t.exports = function (T, Z) {
        if (typeof T != "string" || T.length === 0) throw new l("intrinsic name must be a non-empty string");
        if (arguments.length > 1 && typeof Z != "boolean") throw new l('"allowMissing" argument must be a boolean');
        if (k(/^%?[^%]*%?$/, T) === null)
          throw new n("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
        var D = R(T),
          M = D.length > 0 ? D[0] : "",
          H = F("%" + M + "%", Z),
          P = H.name,
          $ = H.value,
          j = !1,
          Y = H.alias;
        Y && ((M = Y[0]), E(D, y([0, 1], Y)));
        for (var re = 1, G = !0; re < D.length; re += 1) {
          var J = D[re],
            I = w(J, 0, 1),
            V = w(J, -1);
          if ((I === '"' || I === "'" || I === "`" || V === '"' || V === "'" || V === "`") && I !== V)
            throw new n("property names with quotes must have matching quotes");
          if (((J === "constructor" || !G) && (j = !0), (M += "." + J), (P = "%" + M + "%"), C(m, P))) $ = m[P];
          else if ($ != null) {
            if (!(J in $)) {
              if (!Z) throw new l("base intrinsic for " + T + " exists, but the property is not available.");
              return;
            }
            if (u && re + 1 >= D.length) {
              var q = u($, J);
              (G = !!q), G && "get" in q && !("originalValue" in q.get) ? ($ = q.get) : ($ = $[J]);
            } else (G = C($, J)), ($ = $[J]);
            G && !j && (m[P] = $);
          }
        }
        return $;
      };
    },
  }),
  C4 = Me({
    "node_modules/call-bind/index.js"(e, t) {
      var r = wo(),
        n = Gu(),
        o = n("%Function.prototype.apply%"),
        l = n("%Function.prototype.call%"),
        i = n("%Reflect.apply%", !0) || r.call(l, o),
        u = n("%Object.getOwnPropertyDescriptor%", !0),
        s = n("%Object.defineProperty%", !0),
        c = n("%Math.max%");
      if (s)
        try {
          s({}, "a", { value: 1 });
        } catch {
          s = null;
        }
      t.exports = function (h) {
        var d = i(r, l, arguments);
        if (u && s) {
          var m = u(d, "length");
          m.configurable && s(d, "length", { value: 1 + c(0, h.length - (arguments.length - 1)) });
        }
        return d;
      };
      var p = function () {
        return i(r, o, arguments);
      };
      s ? s(t.exports, "apply", { value: p }) : (t.exports.apply = p);
    },
  }),
  S4 = Me({
    "node_modules/call-bind/callBound.js"(e, t) {
      var r = Gu(),
        n = C4(),
        o = n(r("String.prototype.indexOf"));
      t.exports = function (i, u) {
        var s = r(i, !!u);
        return typeof s == "function" && o(i, ".prototype.") > -1 ? n(s) : s;
      };
    },
  }),
  k4 = Me({
    "node_modules/has-tostringtag/shams.js"(e, t) {
      var r = Uu();
      t.exports = function () {
        return r() && !!Symbol.toStringTag;
      };
    },
  }),
  _4 = Me({
    "node_modules/is-regex/index.js"(e, t) {
      var r = S4(),
        n = k4()(),
        o,
        l,
        i,
        u;
      n &&
        ((o = r("Object.prototype.hasOwnProperty")),
        (l = r("RegExp.prototype.exec")),
        (i = {}),
        (s = function () {
          throw i;
        }),
        (u = { toString: s, valueOf: s }),
        typeof Symbol.toPrimitive == "symbol" && (u[Symbol.toPrimitive] = s));
      var s,
        c = r("Object.prototype.toString"),
        p = Object.getOwnPropertyDescriptor,
        g = "[object RegExp]";
      t.exports = n
        ? function (d) {
            if (!d || typeof d != "object") return !1;
            var m = p(d, "lastIndex"),
              f = m && o(m, "value");
            if (!f) return !1;
            try {
              l(d, u);
            } catch (v) {
              return v === i;
            }
          }
        : function (d) {
            return !d || (typeof d != "object" && typeof d != "function") ? !1 : c(d) === g;
          };
    },
  }),
  O4 = Me({
    "node_modules/is-function/index.js"(e, t) {
      t.exports = n;
      var r = Object.prototype.toString;
      function n(o) {
        if (!o) return !1;
        var l = r.call(o);
        return (
          l === "[object Function]" ||
          (typeof o == "function" && l !== "[object RegExp]") ||
          (typeof window < "u" &&
            (o === window.setTimeout || o === window.alert || o === window.confirm || o === window.prompt))
        );
      }
    },
  }),
  R4 = Me({
    "node_modules/is-symbol/index.js"(e, t) {
      var r = Object.prototype.toString,
        n = Wu()();
      n
        ? ((o = Symbol.prototype.toString),
          (l = /^Symbol\(.*\)$/),
          (i = function (s) {
            return typeof s.valueOf() != "symbol" ? !1 : l.test(o.call(s));
          }),
          (t.exports = function (s) {
            if (typeof s == "symbol") return !0;
            if (r.call(s) !== "[object Symbol]") return !1;
            try {
              return i(s);
            } catch {
              return !1;
            }
          }))
        : (t.exports = function (s) {
            return !1;
          });
      var o, l, i;
    },
  }),
  F4 = Ao(_4()),
  T4 = Ao(O4()),
  D4 = Ao(R4());
function L4(e) {
  return e != null && typeof e == "object" && Array.isArray(e) === !1;
}
var M4 = typeof global == "object" && global && global.Object === Object && global,
  B4 = M4,
  $4 = typeof self == "object" && self && self.Object === Object && self,
  I4 = B4 || $4 || Function("return this")(),
  Co = I4,
  Z4 = Co.Symbol,
  Ut = Z4,
  Yu = Object.prototype,
  H4 = Yu.hasOwnProperty,
  j4 = Yu.toString,
  lr = Ut ? Ut.toStringTag : void 0;
function N4(e) {
  var t = H4.call(e, lr),
    r = e[lr];
  try {
    e[lr] = void 0;
    var n = !0;
  } catch {}
  var o = j4.call(e);
  return n && (t ? (e[lr] = r) : delete e[lr]), o;
}
var P4 = N4,
  V4 = Object.prototype,
  z4 = V4.toString;
function q4(e) {
  return z4.call(e);
}
var U4 = q4,
  W4 = "[object Null]",
  G4 = "[object Undefined]",
  ei = Ut ? Ut.toStringTag : void 0;
function Y4(e) {
  return e == null ? (e === void 0 ? G4 : W4) : ei && ei in Object(e) ? P4(e) : U4(e);
}
var K4 = Y4,
  ti = Ut ? Ut.prototype : void 0;
ti && ti.toString;
function J4(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Ku = J4,
  X4 = "[object AsyncFunction]",
  Q4 = "[object Function]",
  e7 = "[object GeneratorFunction]",
  t7 = "[object Proxy]";
function r7(e) {
  if (!Ku(e)) return !1;
  var t = K4(e);
  return t == Q4 || t == e7 || t == X4 || t == t7;
}
var n7 = r7,
  a7 = Co["__core-js_shared__"],
  Yn = a7,
  ri = (function () {
    var e = /[^.]+$/.exec((Yn && Yn.keys && Yn.keys.IE_PROTO) || "");
    return e ? "Symbol(src)_1." + e : "";
  })();
function o7(e) {
  return !!ri && ri in e;
}
var l7 = o7,
  i7 = Function.prototype,
  s7 = i7.toString;
function u7(e) {
  if (e != null) {
    try {
      return s7.call(e);
    } catch {}
    try {
      return e + "";
    } catch {}
  }
  return "";
}
var c7 = u7,
  d7 = /[\\^$.*+?()[\]{}|]/g,
  p7 = /^\[object .+?Constructor\]$/,
  f7 = Function.prototype,
  m7 = Object.prototype,
  g7 = f7.toString,
  h7 = m7.hasOwnProperty,
  y7 = RegExp(
    "^" +
      g7
        .call(h7)
        .replace(d7, "\\$&")
        .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") +
      "$"
  );
function b7(e) {
  if (!Ku(e) || l7(e)) return !1;
  var t = n7(e) ? y7 : p7;
  return t.test(c7(e));
}
var v7 = b7;
function E7(e, t) {
  return e == null ? void 0 : e[t];
}
var x7 = E7;
function A7(e, t) {
  var r = x7(e, t);
  return v7(r) ? r : void 0;
}
var Ju = A7;
function w7(e, t) {
  return e === t || (e !== e && t !== t);
}
var C7 = w7,
  S7 = Ju(Object, "create"),
  Ar = S7;
function k7() {
  (this.__data__ = Ar ? Ar(null) : {}), (this.size = 0);
}
var _7 = k7;
function O7(e) {
  var t = this.has(e) && delete this.__data__[e];
  return (this.size -= t ? 1 : 0), t;
}
var R7 = O7,
  F7 = "__lodash_hash_undefined__",
  T7 = Object.prototype,
  D7 = T7.hasOwnProperty;
function L7(e) {
  var t = this.__data__;
  if (Ar) {
    var r = t[e];
    return r === F7 ? void 0 : r;
  }
  return D7.call(t, e) ? t[e] : void 0;
}
var M7 = L7,
  B7 = Object.prototype,
  $7 = B7.hasOwnProperty;
function I7(e) {
  var t = this.__data__;
  return Ar ? t[e] !== void 0 : $7.call(t, e);
}
var Z7 = I7,
  H7 = "__lodash_hash_undefined__";
function j7(e, t) {
  var r = this.__data__;
  return (this.size += this.has(e) ? 0 : 1), (r[e] = Ar && t === void 0 ? H7 : t), this;
}
var N7 = j7;
function Kt(e) {
  var t = -1,
    r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Kt.prototype.clear = _7;
Kt.prototype.delete = R7;
Kt.prototype.get = M7;
Kt.prototype.has = Z7;
Kt.prototype.set = N7;
var ni = Kt;
function P7() {
  (this.__data__ = []), (this.size = 0);
}
var V7 = P7;
function z7(e, t) {
  for (var r = e.length; r--; ) if (C7(e[r][0], t)) return r;
  return -1;
}
var wn = z7,
  q7 = Array.prototype,
  U7 = q7.splice;
function W7(e) {
  var t = this.__data__,
    r = wn(t, e);
  if (r < 0) return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : U7.call(t, r, 1), --this.size, !0;
}
var G7 = W7;
function Y7(e) {
  var t = this.__data__,
    r = wn(t, e);
  return r < 0 ? void 0 : t[r][1];
}
var K7 = Y7;
function J7(e) {
  return wn(this.__data__, e) > -1;
}
var X7 = J7;
function Q7(e, t) {
  var r = this.__data__,
    n = wn(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : (r[n][1] = t), this;
}
var ev = Q7;
function Jt(e) {
  var t = -1,
    r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Jt.prototype.clear = V7;
Jt.prototype.delete = G7;
Jt.prototype.get = K7;
Jt.prototype.has = X7;
Jt.prototype.set = ev;
var tv = Jt,
  rv = Ju(Co, "Map"),
  nv = rv;
function av() {
  (this.size = 0), (this.__data__ = { hash: new ni(), map: new (nv || tv)(), string: new ni() });
}
var ov = av;
function lv(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var iv = lv;
function sv(e, t) {
  var r = e.__data__;
  return iv(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
var Cn = sv;
function uv(e) {
  var t = Cn(this, e).delete(e);
  return (this.size -= t ? 1 : 0), t;
}
var cv = uv;
function dv(e) {
  return Cn(this, e).get(e);
}
var pv = dv;
function fv(e) {
  return Cn(this, e).has(e);
}
var mv = fv;
function gv(e, t) {
  var r = Cn(this, e),
    n = r.size;
  return r.set(e, t), (this.size += r.size == n ? 0 : 1), this;
}
var hv = gv;
function Xt(e) {
  var t = -1,
    r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Xt.prototype.clear = ov;
Xt.prototype.delete = cv;
Xt.prototype.get = pv;
Xt.prototype.has = mv;
Xt.prototype.set = hv;
var Xu = Xt,
  yv = "Expected a function";
function So(e, t) {
  if (typeof e != "function" || (t != null && typeof t != "function")) throw new TypeError(yv);
  var r = function () {
    var n = arguments,
      o = t ? t.apply(this, n) : n[0],
      l = r.cache;
    if (l.has(o)) return l.get(o);
    var i = e.apply(this, n);
    return (r.cache = l.set(o, i) || l), i;
  };
  return (r.cache = new (So.Cache || Xu)()), r;
}
So.Cache = Xu;
var bv = So,
  vv = 500;
function Ev(e) {
  var t = bv(e, function (n) {
      return r.size === vv && r.clear(), n;
    }),
    r = t.cache;
  return t;
}
var xv = Ev,
  Av = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
  wv = /\\(\\)?/g;
xv(function (e) {
  var t = [];
  return (
    e.charCodeAt(0) === 46 && t.push(""),
    e.replace(Av, function (r, n, o, l) {
      t.push(o ? l.replace(wv, "$1") : n || r);
    }),
    t
  );
});
var Cv = L4,
  Sv = (e) => {
    let t = null,
      r = !1,
      n = !1,
      o = !1,
      l = "";
    if (e.indexOf("//") >= 0 || e.indexOf("/*") >= 0)
      for (let i = 0; i < e.length; i += 1)
        !t && !r && !n && !o
          ? e[i] === '"' || e[i] === "'" || e[i] === "`"
            ? (t = e[i])
            : e[i] === "/" && e[i + 1] === "*"
            ? (r = !0)
            : e[i] === "/" && e[i + 1] === "/"
            ? (n = !0)
            : e[i] === "/" && e[i + 1] !== "/" && (o = !0)
          : (t &&
              ((e[i] === t && e[i - 1] !== "\\") ||
                (e[i] ===
                  `
` &&
                  t !== "`")) &&
              (t = null),
            o &&
              ((e[i] === "/" && e[i - 1] !== "\\") ||
                e[i] ===
                  `
`) &&
              (o = !1),
            r && e[i - 1] === "/" && e[i - 2] === "*" && (r = !1),
            n &&
              e[i] ===
                `
` &&
              (n = !1)),
          !r && !n && (l += e[i]);
    else l = e;
    return l;
  },
  kv = Ot(1e4)((e) => Sv(e).replace(/\n\s*/g, "").trim()),
  _v = function (t, r) {
    const n = r.slice(0, r.indexOf("{")),
      o = r.slice(r.indexOf("{"));
    if (n.includes("=>") || n.includes("function")) return r;
    let l = n;
    return (l = l.replace(t, "function")), l + o;
  },
  Ov = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?Z$/;
function Qu(e) {
  if (!Cv(e)) return e;
  let t = e,
    r = !1;
  return (
    typeof Event < "u" && e instanceof Event && ((t = x4(t)), (r = !0)),
    (t = Object.keys(t).reduce((n, o) => {
      try {
        t[o] && t[o].toJSON, (n[o] = t[o]);
      } catch {
        r = !0;
      }
      return n;
    }, {})),
    r ? t : e
  );
}
var Rv = function (t) {
    let r, n, o, l;
    return function (u, s) {
      try {
        if (u === "") return (l = []), (r = new Map([[s, "[]"]])), (n = new Map()), (o = []), s;
        const c = n.get(this) || this;
        for (; o.length && c !== o[0]; ) o.shift(), l.pop();
        if (typeof s == "boolean") return s;
        if (s === void 0) return t.allowUndefined ? "_undefined_" : void 0;
        if (s === null) return null;
        if (typeof s == "number")
          return s === -1 / 0 ? "_-Infinity_" : s === 1 / 0 ? "_Infinity_" : Number.isNaN(s) ? "_NaN_" : s;
        if (typeof s == "bigint") return `_bigint_${s.toString()}`;
        if (typeof s == "string") return Ov.test(s) ? (t.allowDate ? `_date_${s}` : void 0) : s;
        if ((0, F4.default)(s)) return t.allowRegExp ? `_regexp_${s.flags}|${s.source}` : void 0;
        if ((0, T4.default)(s)) {
          if (!t.allowFunction) return;
          const { name: g } = s,
            h = s.toString();
          return h.match(/(\[native code\]|WEBPACK_IMPORTED_MODULE|__webpack_exports__|__webpack_require__)/)
            ? `_function_${g}|${(() => {}).toString()}`
            : `_function_${g}|${kv(_v(u, h))}`;
        }
        if ((0, D4.default)(s)) {
          if (!t.allowSymbol) return;
          const g = Symbol.keyFor(s);
          return g !== void 0 ? `_gsymbol_${g}` : `_symbol_${s.toString().slice(7, -1)}`;
        }
        if (o.length >= t.maxDepth) return Array.isArray(s) ? `[Array(${s.length})]` : "[Object]";
        if (s === this) return `_duplicate_${JSON.stringify(l)}`;
        if (
          s.constructor &&
          s.constructor.name &&
          s.constructor.name !== "Object" &&
          !Array.isArray(s) &&
          !t.allowClass
        )
          return;
        const p = r.get(s);
        if (!p) {
          const g = Array.isArray(s) ? s : Qu(s);
          if (
            s.constructor &&
            s.constructor.name &&
            s.constructor.name !== "Object" &&
            !Array.isArray(s) &&
            t.allowClass
          )
            try {
              Object.assign(g, { "_constructor-name_": s.constructor.name });
            } catch {}
          return l.push(u), o.unshift(g), r.set(s, JSON.stringify(l)), s !== g && n.set(s, g), g;
        }
        return `_duplicate_${p}`;
      } catch {
        return;
      }
    };
  },
  Fv = {
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
  Tv = (e, t = {}) => {
    const r = { ...Fv, ...t };
    return JSON.stringify(Qu(e), Rv(r), t.space);
  };
/*!
 * isobject <https://github.com/jonschlinkert/isobject>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */ /**
 * @license
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="es" -o ./`
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */ const { deprecate: ce, once: Dv, logger: ko } = __STORYBOOK_MODULE_CLIENT_LOGGER__,
  { filterArgTypes: Lv, composeConfigs: U8, Preview: W8, DocsContext: G8 } = __STORYBOOK_MODULE_PREVIEW_API__,
  {
    STORY_ARGS_UPDATED: ai,
    UPDATE_STORY_ARGS: Mv,
    RESET_STORY_ARGS: Bv,
    GLOBALS_UPDATED: oi,
    NAVIGATE_URL: $v,
  } = __STORYBOOK_MODULE_CORE_EVENTS__;
__STORYBOOK_MODULE_CHANNELS__;
var Iv = _.div(te, ({ theme: e }) => ({
    backgroundColor: e.base === "light" ? "rgba(0,0,0,.01)" : "rgba(255,255,255,.01)",
    borderRadius: e.appBorderRadius,
    border: `1px dashed ${e.appBorderColor}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    margin: "25px 0 40px",
    color: ee(0.3, e.color.defaultText),
    fontSize: e.typography.size.s2,
  })),
  xa = (e) => a.createElement(Iv, { ...e, className: "docblock-emptyblock sb-unstyled" }),
  Zv = _(so)(({ theme: e }) => ({
    fontSize: `${e.typography.size.s2 - 1}px`,
    lineHeight: "19px",
    margin: "25px 0 40px",
    borderRadius: e.appBorderRadius,
    boxShadow: e.base === "light" ? "rgba(0, 0, 0, 0.10) 0 1px 3px 0" : "rgba(0, 0, 0, 0.20) 0 2px 5px 0",
    "pre.prismjs": { padding: 20, background: "inherit" },
  })),
  Hv = _.div(({ theme: e }) => ({
    background: e.background.content,
    borderRadius: e.appBorderRadius,
    border: `1px solid ${e.appBorderColor}`,
    boxShadow: e.base === "light" ? "rgba(0, 0, 0, 0.10) 0 1px 3px 0" : "rgba(0, 0, 0, 0.20) 0 2px 5px 0",
    margin: "25px 0 40px",
    padding: "20px 20px 20px 22px",
  })),
  Ir = _.div(({ theme: e }) => ({
    animation: `${e.animation.glow} 1.5s ease-in-out infinite`,
    background: e.appBorderColor,
    height: 17,
    marginTop: 1,
    width: "60%",
    [`&:first-child${la}`]: { margin: 0 },
  })),
  jv = () =>
    a.createElement(
      Hv,
      null,
      a.createElement(Ir, null),
      a.createElement(Ir, { style: { width: "80%" } }),
      a.createElement(Ir, { style: { width: "30%" } }),
      a.createElement(Ir, { style: { width: "80%" } })
    ),
  _o = ({ isLoading: e, error: t, language: r, code: n, dark: o, format: l, ...i }) => {
    if (e) return a.createElement(jv, null);
    if (t) return a.createElement(xa, null, t);
    let u = a.createElement(
      Zv,
      { bordered: !0, copyable: !0, format: l, language: r, className: "docblock-source sb-unstyled", ...i },
      n
    );
    if (typeof o > "u") return u;
    let s = o ? ta.dark : ta.light;
    return a.createElement(Ui, { theme: oa(s) }, u);
  };
_o.defaultProps = { format: !1 };
var oe = (e) => `& :where(${e}:not(.sb-anchor, .sb-unstyled, .sb-unstyled ${e}))`,
  Oo = 600,
  Nv = _.h1(te, ({ theme: e }) => ({
    color: e.color.defaultText,
    fontSize: e.typography.size.m3,
    fontWeight: e.typography.weight.bold,
    lineHeight: "32px",
    [`@media (min-width: ${Oo}px)`]: { fontSize: e.typography.size.l1, lineHeight: "36px", marginBottom: "16px" },
  })),
  Pv = _.h2(te, ({ theme: e }) => ({
    fontWeight: e.typography.weight.regular,
    fontSize: e.typography.size.s3,
    lineHeight: "20px",
    borderBottom: "none",
    marginBottom: 15,
    [`@media (min-width: ${Oo}px)`]: { fontSize: e.typography.size.m1, lineHeight: "28px", marginBottom: 24 },
    color: ee(0.25, e.color.defaultText),
  })),
  Vv = _.div(({ theme: e }) => {
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
        color: e.base === "light" ? ee(0.1, e.color.defaultText) : ee(0.3, e.color.defaultText),
        backgroundColor: e.base === "light" ? e.color.lighter : e.color.border,
      };
    return {
      maxWidth: 1e3,
      width: "100%",
      [oe("a")]: {
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
      [oe("blockquote")]: {
        ...t,
        margin: "16px 0",
        borderLeft: `4px solid ${e.color.medium}`,
        padding: "0 15px",
        color: e.color.dark,
        "& > :first-of-type": { marginTop: 0 },
        "& > :last-child": { marginBottom: 0 },
      },
      [oe("div")]: t,
      [oe("dl")]: {
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
      [oe("h1")]: { ...t, ...r, fontSize: `${e.typography.size.l1}px`, fontWeight: e.typography.weight.bold },
      [oe("h2")]: {
        ...t,
        ...r,
        fontSize: `${e.typography.size.m2}px`,
        paddingBottom: 4,
        borderBottom: `1px solid ${e.appBorderColor}`,
      },
      [oe("h3")]: { ...t, ...r, fontSize: `${e.typography.size.m1}px`, fontWeight: e.typography.weight.bold },
      [oe("h4")]: { ...t, ...r, fontSize: `${e.typography.size.s3}px` },
      [oe("h5")]: { ...t, ...r, fontSize: `${e.typography.size.s2}px` },
      [oe("h6")]: { ...t, ...r, fontSize: `${e.typography.size.s2}px`, color: e.color.dark },
      [oe("hr")]: { border: "0 none", borderTop: `1px solid ${e.appBorderColor}`, height: 4, padding: 0 },
      [oe("img")]: { maxWidth: "100%" },
      [oe("li")]: {
        ...t,
        fontSize: e.typography.size.s2,
        color: e.color.defaultText,
        lineHeight: "24px",
        "& + li": { marginTop: ".25em" },
        "& ul, & ol": { marginTop: ".25em", marginBottom: 0 },
        "& code": n,
      },
      [oe("ol")]: {
        ...t,
        margin: "16px 0",
        paddingLeft: 30,
        "& :first-of-type": { marginTop: 0 },
        "& :last-child": { marginBottom: 0 },
      },
      [oe("p")]: {
        ...t,
        margin: "16px 0",
        fontSize: e.typography.size.s2,
        lineHeight: "24px",
        color: e.color.defaultText,
        "& code": n,
      },
      [oe("pre")]: {
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
      [oe("span")]: {
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
      [oe("table")]: {
        ...t,
        margin: "16px 0",
        fontSize: e.typography.size.s2,
        lineHeight: "24px",
        padding: 0,
        borderCollapse: "collapse",
        "& tr": { borderTop: `1px solid ${e.appBorderColor}`, backgroundColor: e.appContentBg, margin: 0, padding: 0 },
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
      [oe("ul")]: {
        ...t,
        margin: "16px 0",
        paddingLeft: 30,
        "& :first-of-type": { marginTop: 0 },
        "& :last-child": { marginBottom: 0 },
        listStyle: "disc",
      },
    };
  }),
  zv = _.div(({ theme: e }) => ({
    background: e.background.content,
    display: "flex",
    justifyContent: "center",
    padding: "4rem 20px",
    minHeight: "100vh",
    boxSizing: "border-box",
    [`@media (min-width: ${Oo}px)`]: {},
  })),
  qv = ({ children: e }) =>
    a.createElement(
      zv,
      { className: "sbdocs sbdocs-wrapper" },
      a.createElement(Vv, { className: "sbdocs sbdocs-content" }, e)
    ),
  Sn = (e) => ({
    borderRadius: e.appBorderRadius,
    background: e.background.content,
    boxShadow: e.base === "light" ? "rgba(0, 0, 0, 0.10) 0 1px 3px 0" : "rgba(0, 0, 0, 0.20) 0 2px 5px 0",
    border: `1px solid ${e.appBorderColor}`,
  }),
  Uv = ({ zoom: e, resetZoom: t }) =>
    a.createElement(
      a.Fragment,
      null,
      a.createElement(
        kt,
        {
          key: "zoomin",
          onClick: (r) => {
            r.preventDefault(), e(0.8);
          },
          title: "Zoom in",
        },
        a.createElement(Ae, { icon: "zoom" })
      ),
      a.createElement(
        kt,
        {
          key: "zoomout",
          onClick: (r) => {
            r.preventDefault(), e(1.25);
          },
          title: "Zoom out",
        },
        a.createElement(Ae, { icon: "zoomout" })
      ),
      a.createElement(
        kt,
        {
          key: "zoomreset",
          onClick: (r) => {
            r.preventDefault(), t();
          },
          title: "Reset zoom",
        },
        a.createElement(Ae, { icon: "zoomreset" })
      )
    ),
  Wv = _(yn)({ position: "absolute", left: 0, right: 0, top: 0, transition: "transform .2s linear" }),
  Gv = ({ isLoading: e, storyId: t, baseUrl: r, zoom: n, resetZoom: o, ...l }) =>
    a.createElement(
      Wv,
      { ...l },
      a.createElement(
        A.Fragment,
        { key: "left" },
        e ? [1, 2, 3].map((i) => a.createElement(cu, { key: i })) : a.createElement(Uv, { zoom: n, resetZoom: o })
      )
    ),
  e0 = A.createContext({ scale: 1 }),
  { window: Yv } = he,
  Kv = class extends A.Component {
    constructor() {
      super(...arguments), (this.iframe = null);
    }
    componentDidMount() {
      let { id: e } = this.props;
      this.iframe = Yv.document.getElementById(e);
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
      let { id: e, title: t, src: r, allowFullScreen: n, scale: o, ...l } = this.props;
      return a.createElement("iframe", {
        id: e,
        title: t,
        src: r,
        ...(n ? { allow: "fullscreen" } : {}),
        isLoading: "lazy",
        ...l,
      });
    }
  },
  { PREVIEW_URL: Jv } = he,
  Xv = Jv || "iframe.html",
  Aa = ({ story: e, primary: t }) => `story--${e.id}${t ? "--primary" : ""}`,
  Qv = (e) => {
    let t = A.useRef(),
      [r, n] = A.useState(!0),
      [o, l] = A.useState(),
      { story: i, height: u, autoplay: s, forceInitialArgs: c, renderStoryToElement: p } = e;
    A.useEffect(() => {
      if (!(i && t.current)) return () => {};
      let h = t.current,
        d = p(
          i,
          h,
          {
            showMain: () => {},
            showError: ({ title: m, description: f }) => l(new Error(`${m} - ${f}`)),
            showException: (m) => l(m),
          },
          { autoplay: s, forceInitialArgs: c }
        );
      return (
        n(!1),
        () => {
          Promise.resolve().then(() => d());
        }
      );
    }, [s, p, i]);
    let g = "<span></span>";
    return o
      ? a.createElement("pre", null, a.createElement(tu, { error: o }))
      : a.createElement(
          a.Fragment,
          null,
          u
            ? a.createElement("style", null, `#${Aa(e)} { min-height: ${u}; transform: translateZ(0); overflow: auto }`)
            : null,
          r && a.createElement(Ro, null),
          a.createElement("div", {
            ref: t,
            id: `${Aa(e)}-inner`,
            "data-name": i.name,
            dangerouslySetInnerHTML: { __html: g },
          })
        );
  },
  e6 = ({ story: e, height: t = "500px" }) =>
    a.createElement(
      "div",
      { style: { width: "100%", height: t } },
      a.createElement(e0.Consumer, null, ({ scale: r }) =>
        a.createElement(Kv, {
          key: "iframe",
          id: `iframe--${e.id}`,
          title: e.name,
          src: mu(Xv, e.id, { viewMode: "story" }),
          allowFullScreen: !0,
          scale: r,
          style: { width: "100%", height: "100%", border: "0 none" },
        })
      )
    ),
  t6 = (e) => {
    let { inline: t } = e;
    return a.createElement(
      "div",
      { id: Aa(e), className: "sb-story sb-unstyled", "data-story-block": "true" },
      t ? a.createElement(Qv, { ...e }) : a.createElement(e6, { ...e })
    );
  },
  Ro = () => a.createElement(fu, null),
  r6 = _.div(
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
    ({ columns: e }) => (e && e > 1 ? { ".innerZoomElementWrapper > *": { minWidth: `calc(100% / ${e} - 20px)` } } : {})
  ),
  li = _(_o)(({ theme: e }) => ({
    margin: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: e.appBorderRadius,
    borderBottomRightRadius: e.appBorderRadius,
    border: "none",
    background: e.base === "light" ? "rgba(0, 0, 0, 0.85)" : We(0.05, e.background.content),
    color: e.color.lightest,
    button: { background: e.base === "light" ? "rgba(0, 0, 0, 0.85)" : We(0.05, e.background.content) },
  })),
  n6 = _.div(
    ({ theme: e, withSource: t, isExpanded: r }) => ({
      position: "relative",
      overflow: "hidden",
      margin: "25px 0 40px",
      ...Sn(e),
      borderBottomLeftRadius: t && r && 0,
      borderBottomRightRadius: t && r && 0,
      borderBottomWidth: r && 0,
      "h3 + &": { marginTop: "16px" },
    }),
    ({ withToolbar: e }) => e && { paddingTop: 40 }
  ),
  a6 = (e, t, r) => {
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
          source: a.createElement(li, { ...e, dark: !0 }),
          actionItem: {
            title: "Hide code",
            className: "docblock-code-toggle docblock-code-toggle--expanded",
            onClick: () => r(!1),
          },
        };
      default:
        return {
          source: a.createElement(li, { ...e, dark: !0 }),
          actionItem: { title: "Show code", className: "docblock-code-toggle", onClick: () => r(!0) },
        };
    }
  };
function o6(e) {
  if (A.Children.count(e) === 1) {
    let t = e;
    if (t.props) return t.props.id;
  }
  return null;
}
var l6 = _(Gv)({ position: "absolute", top: 0, left: 0, right: 0, height: 40 }),
  i6 = _.div({ overflow: "hidden", position: "relative" }),
  wa = ({
    isLoading: e,
    isColumn: t,
    columns: r,
    children: n,
    withSource: o,
    withToolbar: l = !1,
    isExpanded: i = !1,
    additionalActions: u,
    className: s,
    layout: c = "padded",
    ...p
  }) => {
    let [g, h] = A.useState(i),
      { source: d, actionItem: m } = a6(o, g, h),
      [f, v] = A.useState(1),
      b = [s].concat(["sbdocs", "sbdocs-preview", "sb-unstyled"]),
      C = o ? [m] : [],
      [y, E] = A.useState(u ? [...u] : []),
      x = [...C, ...y],
      { window: w } = he,
      k = A.useCallback(async (O) => {
        let { createCopyToClipboardFunction: R } = await tt(
          () => Promise.resolve().then(() => xm),
          void 0,
          import.meta.url
        );
        R();
      }, []),
      S = (O) => {
        let R = w.getSelection();
        (R && R.type === "Range") ||
          (O.preventDefault(),
          y.filter((F) => F.title === "Copied").length === 0 &&
            k(d.props.code).then(() => {
              E([...y, { title: "Copied", onClick: () => {} }]),
                w.setTimeout(() => E(y.filter((F) => F.title !== "Copied")), 1500);
            }));
      };
    return a.createElement(
      n6,
      { withSource: o, withToolbar: l, ...p, className: b.join(" ") },
      l &&
        a.createElement(l6, {
          isLoading: e,
          border: !0,
          zoom: (O) => v(f * O),
          resetZoom: () => v(1),
          storyId: o6(n),
          baseUrl: "./iframe.html",
        }),
      a.createElement(
        e0.Provider,
        { value: { scale: f } },
        a.createElement(
          i6,
          { className: "docs-story", onCopyCapture: o && S },
          a.createElement(
            r6,
            { isColumn: t || !Array.isArray(n), columns: r, layout: c },
            a.createElement(
              eu.Element,
              { scale: f },
              Array.isArray(n)
                ? n.map((O, R) => a.createElement("div", { key: R }, O))
                : a.createElement("div", null, n)
            )
          ),
          a.createElement(Wa, { actionItems: x })
        )
      ),
      o && g && d
    );
  },
  s6 = _(wa)(() => ({ ".docs-story": { paddingTop: 32, paddingBottom: 40 } })),
  u6 = () => a.createElement(s6, { isLoading: !0, withToolbar: !0 }, a.createElement(Ro, null)),
  c6 = _.table(({ theme: e }) => ({
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
      code: ut({ theme: e }),
      div: { span: { fontWeight: "bold" } },
      "& code": { margin: 0, display: "inline-block", fontSize: e.typography.size.s1 },
    },
  })),
  d6 = ({ tags: e }) => {
    let t = (e.params || []).filter((l) => l.description),
      r = t.length !== 0,
      n = e.deprecated != null,
      o = e.returns != null && e.returns.description != null;
    return !r && !o && !n
      ? null
      : a.createElement(
          a.Fragment,
          null,
          a.createElement(
            c6,
            null,
            a.createElement(
              "tbody",
              null,
              n &&
                a.createElement(
                  "tr",
                  { key: "deprecated" },
                  a.createElement(
                    "td",
                    { colSpan: 2 },
                    a.createElement("strong", null, "Deprecated"),
                    ": ",
                    e.deprecated
                  )
                ),
              r &&
                t.map((l) =>
                  a.createElement(
                    "tr",
                    { key: l.name },
                    a.createElement("td", null, a.createElement("code", null, l.name)),
                    a.createElement("td", null, l.description)
                  )
                ),
              o &&
                a.createElement(
                  "tr",
                  { key: "returns" },
                  a.createElement("td", null, a.createElement("code", null, "Returns")),
                  a.createElement("td", null, e.returns.description)
                )
            )
          )
        );
  },
  Ca = 8,
  ii = _.div(({ isExpanded: e }) => ({
    display: "flex",
    flexDirection: e ? "column" : "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
    marginBottom: "-4px",
    minWidth: 100,
  })),
  p6 = _.span(ut, ({ theme: e, simple: t = !1 }) => ({
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
  f6 = _.button(({ theme: e }) => ({
    fontFamily: e.typography.fonts.mono,
    color: e.color.secondary,
    marginBottom: "4px",
    background: "none",
    border: "none",
  })),
  m6 = _.div(ut, ({ theme: e }) => ({
    fontFamily: e.typography.fonts.mono,
    color: e.color.secondary,
    fontSize: e.typography.size.s1,
    margin: 0,
    whiteSpace: "nowrap",
    display: "flex",
    alignItems: "center",
  })),
  g6 = _.div(({ theme: e, width: t }) => ({
    width: t,
    minWidth: 200,
    maxWidth: 800,
    padding: 15,
    fontFamily: e.typography.fonts.mono,
    fontSize: e.typography.size.s1,
    boxSizing: "content-box",
    "& code": { padding: "0 !important" },
  })),
  h6 = _(Ae)({ height: 10, width: 10, minWidth: 10, marginLeft: 4 }),
  y6 = () => a.createElement("span", null, "-"),
  t0 = ({ text: e, simple: t }) => a.createElement(p6, { simple: t }, e),
  b6 = Ot(1e3)((e) => {
    let t = e.split(/\r?\n/);
    return `${Math.max(...t.map((r) => r.length))}ch`;
  }),
  v6 = (e) => {
    if (!e) return [e];
    let t = e.split("|").map((r) => r.trim());
    return Oy(t);
  },
  si = (e, t = !0) => {
    let r = e;
    return t || (r = e.slice(0, Ca)), r.map((n) => a.createElement(t0, { key: n, text: n === "" ? '""' : n }));
  },
  E6 = ({ value: e, initialExpandedArgs: t }) => {
    let { summary: r, detail: n } = e,
      [o, l] = A.useState(!1),
      [i, u] = A.useState(t || !1);
    if (r == null) return null;
    let s = typeof r.toString == "function" ? r.toString() : r;
    if (n == null) {
      if (/[(){}[\]<>]/.test(s)) return a.createElement(t0, { text: s });
      let c = v6(s),
        p = c.length;
      return p > Ca
        ? a.createElement(
            ii,
            { isExpanded: i },
            si(c, i),
            a.createElement(f6, { onClick: () => u(!i) }, i ? "Show less..." : `Show ${p - Ca} more...`)
          )
        : a.createElement(ii, null, si(c));
    }
    return a.createElement(
      iu,
      {
        closeOnOutsideClick: !0,
        placement: "bottom",
        visible: o,
        onVisibleChange: (c) => {
          l(c);
        },
        tooltip: a.createElement(g6, { width: b6(n) }, a.createElement(so, { language: "jsx", format: !1 }, n)),
      },
      a.createElement(
        m6,
        { className: "sbdocs-expandable" },
        a.createElement("span", null, s),
        a.createElement(h6, { icon: o ? "arrowup" : "arrowdown" })
      )
    );
  },
  Kn = ({ value: e, initialExpandedArgs: t }) =>
    e == null ? a.createElement(y6, null) : a.createElement(E6, { value: e, initialExpandedArgs: t }),
  x6 = _.label(({ theme: e }) => ({
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
      color: ee(0.5, e.color.defaultText),
      background: "transparent",
      "&:hover": { boxShadow: `${$r(0.3, e.appBorderColor)} 0 0 0 1px inset` },
      "&:active": { boxShadow: `${$r(0.05, e.appBorderColor)} 0 0 0 2px inset`, color: $r(1, e.appBorderColor) },
      "&:first-of-type": { paddingRight: 8 },
      "&:last-of-type": { paddingLeft: 8 },
    },
    "input:checked ~ span:last-of-type, input:not(:checked) ~ span:first-of-type": {
      background: e.boolean.selectedBackground,
      boxShadow: e.base === "light" ? `${$r(0.1, e.appBorderColor)} 0 0 2px` : `${e.appBorderColor} 0 0 0 1px`,
      color: e.color.defaultText,
      padding: "7px 15px",
    },
  })),
  A6 = (e) => e === "true",
  w6 = ({ name: e, value: t, onChange: r, onBlur: n, onFocus: o }) => {
    let l = A.useCallback(() => r(!1), [r]);
    if (t === void 0) return a.createElement(Ie.Button, { id: dn(e), onClick: l }, "Set boolean");
    let i = Ze(e),
      u = typeof t == "string" ? A6(t) : t;
    return a.createElement(
      x6,
      { htmlFor: i, title: u ? "Change to false" : "Change to true" },
      a.createElement("input", {
        id: i,
        type: "checkbox",
        onChange: (s) => r(s.target.checked),
        checked: u,
        name: e,
        onBlur: n,
        onFocus: o,
      }),
      a.createElement("span", null, "False"),
      a.createElement("span", null, "True")
    );
  },
  C6 = (e) => {
    let [t, r, n] = e.split("-"),
      o = new Date();
    return o.setFullYear(parseInt(t, 10), parseInt(r, 10) - 1, parseInt(n, 10)), o;
  },
  S6 = (e) => {
    let [t, r] = e.split(":"),
      n = new Date();
    return n.setHours(parseInt(t, 10)), n.setMinutes(parseInt(r, 10)), n;
  },
  k6 = (e) => {
    let t = new Date(e),
      r = `000${t.getFullYear()}`.slice(-4),
      n = `0${t.getMonth() + 1}`.slice(-2),
      o = `0${t.getDate()}`.slice(-2);
    return `${r}-${n}-${o}`;
  },
  _6 = (e) => {
    let t = new Date(e),
      r = `0${t.getHours()}`.slice(-2),
      n = `0${t.getMinutes()}`.slice(-2);
    return `${r}:${n}`;
  },
  O6 = _.div(({ theme: e }) => ({
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
  R6 = ({ name: e, value: t, onChange: r, onFocus: n, onBlur: o }) => {
    let [l, i] = A.useState(!0),
      u = A.useRef(),
      s = A.useRef();
    A.useEffect(() => {
      l !== !1 && (u && u.current && (u.current.value = k6(t)), s && s.current && (s.current.value = _6(t)));
    }, [t]);
    let c = (h) => {
        let d = C6(h.target.value),
          m = new Date(t);
        m.setFullYear(d.getFullYear(), d.getMonth(), d.getDate());
        let f = m.getTime();
        f && r(f), i(!!f);
      },
      p = (h) => {
        let d = S6(h.target.value),
          m = new Date(t);
        m.setHours(d.getHours()), m.setMinutes(d.getMinutes());
        let f = m.getTime();
        f && r(f), i(!!f);
      },
      g = Ze(e);
    return a.createElement(
      O6,
      null,
      a.createElement(Ie.Input, {
        type: "date",
        max: "9999-12-31",
        ref: u,
        id: `${g}-date`,
        name: `${g}-date`,
        onChange: c,
        onFocus: n,
        onBlur: o,
      }),
      a.createElement(Ie.Input, {
        type: "time",
        id: `${g}-time`,
        name: `${g}-time`,
        ref: s,
        onChange: p,
        onFocus: n,
        onBlur: o,
      }),
      l ? null : a.createElement("div", null, "invalid")
    );
  },
  F6 = _.label({ display: "flex" }),
  T6 = (e) => {
    let t = parseFloat(e);
    return Number.isNaN(t) ? void 0 : t;
  },
  D6 = ({ name: e, value: t, onChange: r, min: n, max: o, step: l, onBlur: i, onFocus: u }) => {
    let [s, c] = A.useState(typeof t == "number" ? t : ""),
      [p, g] = A.useState(!1),
      [h, d] = A.useState(null),
      m = A.useCallback(
        (b) => {
          c(b.target.value);
          let C = parseFloat(b.target.value);
          Number.isNaN(C) ? d(new Error(`'${b.target.value}' is not a number`)) : (r(C), d(null));
        },
        [r, d]
      ),
      f = A.useCallback(() => {
        c("0"), r(0), g(!0);
      }, [g]),
      v = A.useRef(null);
    return (
      A.useEffect(() => {
        p && v.current && v.current.select();
      }, [p]),
      A.useEffect(() => {
        s !== (typeof t == "number" ? t : "") && c(t);
      }, [t]),
      !p && t === void 0
        ? a.createElement(Ie.Button, { id: dn(e), onClick: f }, "Set number")
        : a.createElement(
            F6,
            null,
            a.createElement(Ie.Input, {
              ref: v,
              id: Ze(e),
              type: "number",
              onChange: m,
              size: "flex",
              placeholder: "Edit number...",
              value: s,
              valid: h ? "error" : null,
              autoFocus: p,
              name: e,
              min: n,
              max: o,
              step: l,
              onFocus: u,
              onBlur: i,
            })
          )
    );
  },
  r0 = (e, t) => {
    let r = t && Object.entries(t).find(([n, o]) => o === e);
    return r ? r[0] : void 0;
  },
  Sa = (e, t) =>
    e && t
      ? Object.entries(t)
          .filter((r) => e.includes(r[1]))
          .map((r) => r[0])
      : [],
  n0 = (e, t) => e && t && e.map((r) => t[r]),
  L6 = _.div(({ isInline: e }) =>
    e
      ? {
          display: "flex",
          flexWrap: "wrap",
          alignItems: "flex-start",
          label: { display: "inline-flex", marginRight: 15 },
        }
      : { label: { display: "flex" } }
  ),
  M6 = _.span({}),
  B6 = _.label({
    lineHeight: "20px",
    alignItems: "center",
    marginBottom: 8,
    "&:last-child": { marginBottom: 0 },
    input: { margin: 0, marginRight: 6 },
  }),
  ui = ({ name: e, options: t, value: r, onChange: n, isInline: o }) => {
    if (!t) return ko.warn(`Checkbox with no options: ${e}`), a.createElement(a.Fragment, null, "-");
    let l = Sa(r, t),
      [i, u] = A.useState(l),
      s = (p) => {
        let g = p.target.value,
          h = [...i];
        h.includes(g) ? h.splice(h.indexOf(g), 1) : h.push(g), n(n0(h, t)), u(h);
      };
    A.useEffect(() => {
      u(Sa(r, t));
    }, [r]);
    let c = Ze(e);
    return a.createElement(
      L6,
      { isInline: o },
      Object.keys(t).map((p, g) => {
        let h = `${c}-${g}`;
        return a.createElement(
          B6,
          { key: h, htmlFor: h },
          a.createElement("input", {
            type: "checkbox",
            id: h,
            name: h,
            value: p,
            onChange: s,
            checked: i == null ? void 0 : i.includes(p),
          }),
          a.createElement(M6, null, p)
        );
      })
    );
  },
  $6 = _.div(({ isInline: e }) =>
    e
      ? {
          display: "flex",
          flexWrap: "wrap",
          alignItems: "flex-start",
          label: { display: "inline-flex", marginRight: 15 },
        }
      : { label: { display: "flex" } }
  ),
  I6 = _.span({}),
  Z6 = _.label({
    lineHeight: "20px",
    alignItems: "center",
    marginBottom: 8,
    "&:last-child": { marginBottom: 0 },
    input: { margin: 0, marginRight: 6 },
  }),
  ci = ({ name: e, options: t, value: r, onChange: n, isInline: o }) => {
    if (!t) return ko.warn(`Radio with no options: ${e}`), a.createElement(a.Fragment, null, "-");
    let l = r0(r, t),
      i = Ze(e);
    return a.createElement(
      $6,
      { isInline: o },
      Object.keys(t).map((u, s) => {
        let c = `${i}-${s}`;
        return a.createElement(
          Z6,
          { key: c, htmlFor: c },
          a.createElement("input", {
            type: "radio",
            id: c,
            name: c,
            value: u,
            onChange: (p) => n(t[p.currentTarget.value]),
            checked: u === l,
          }),
          a.createElement(I6, null, u)
        );
      })
    );
  },
  H6 = {
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
  a0 = _.select(({ theme: e }) => ({
    ...H6,
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
  o0 = _.span(({ theme: e }) => ({
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
  di = "Choose option...",
  j6 = ({ name: e, value: t, options: r, onChange: n }) => {
    let o = (u) => {
        n(r[u.currentTarget.value]);
      },
      l = r0(t, r) || di,
      i = Ze(e);
    return a.createElement(
      o0,
      null,
      a.createElement(Ae, { icon: "arrowdown" }),
      a.createElement(
        a0,
        { id: i, value: l, onChange: o },
        a.createElement("option", { key: "no-selection", disabled: !0 }, di),
        Object.keys(r).map((u) => a.createElement("option", { key: u }, u))
      )
    );
  },
  N6 = ({ name: e, value: t, options: r, onChange: n }) => {
    let o = (u) => {
        let s = Array.from(u.currentTarget.options)
          .filter((c) => c.selected)
          .map((c) => c.value);
        n(n0(s, r));
      },
      l = Sa(t, r),
      i = Ze(e);
    return a.createElement(
      o0,
      null,
      a.createElement(
        a0,
        { id: i, multiple: !0, value: l, onChange: o },
        Object.keys(r).map((u) => a.createElement("option", { key: u }, u))
      )
    );
  },
  pi = (e) => {
    let { name: t, options: r } = e;
    return r
      ? e.isMulti
        ? a.createElement(N6, { ...e })
        : a.createElement(j6, { ...e })
      : (ko.warn(`Select with no options: ${t}`), a.createElement(a.Fragment, null, "-"));
  },
  P6 = (e, t) =>
    Array.isArray(e) ? e.reduce((r, n) => ((r[(t == null ? void 0 : t[n]) || String(n)] = n), r), {}) : e,
  V6 = { check: ui, "inline-check": ui, radio: ci, "inline-radio": ci, select: pi, "multi-select": pi },
  Bt = (e) => {
    let { type: t = "select", labels: r, argType: n } = e,
      o = { ...e, options: n ? P6(n.options, r) : {}, isInline: t.includes("inline"), isMulti: t.includes("multi") },
      l = V6[t];
    if (l) return a.createElement(l, { ...o });
    throw new Error(`Unknown options type: ${t}`);
  },
  Fo = "value",
  z6 = "key",
  q6 = "Error",
  U6 = "Object",
  W6 = "Array",
  G6 = "String",
  Y6 = "Number",
  K6 = "Boolean",
  J6 = "Date",
  X6 = "Null",
  Q6 = "Undefined",
  eE = "Function",
  tE = "Symbol",
  l0 = "ADD_DELTA_TYPE",
  i0 = "REMOVE_DELTA_TYPE",
  s0 = "UPDATE_DELTA_TYPE";
function mt(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e) && typeof e[Symbol.iterator] == "function"
    ? "Iterable"
    : Object.prototype.toString.call(e).slice(8, -1);
}
function u0(e, t) {
  let r = mt(e),
    n = mt(t);
  return (r === "Function" || n === "Function") && n !== r;
}
var To = class extends A.Component {
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
    let { handleAdd: e, onlyValue: t, onSubmitValueParser: r, keyPath: n, deep: o } = this.props,
      { inputRefKey: l, inputRefValue: i } = this.state,
      u = {};
    if (!t) {
      if (!l.value) return;
      u.key = l.value;
    }
    (u.newValue = r(!1, n, o, u.key, i.value)), e(u);
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
        inputElementGenerator: o,
        keyPath: l,
        deep: i,
      } = this.props,
      u = A.cloneElement(r, { onClick: this.onSubmit }),
      s = A.cloneElement(n, { onClick: e }),
      c = o(Fo, l, i),
      p = A.cloneElement(c, { placeholder: "Value", ref: this.refInputValue }),
      g = null;
    if (!t) {
      let h = o(z6, l, i);
      g = A.cloneElement(h, { placeholder: "Key", ref: this.refInputKey });
    }
    return a.createElement("span", { className: "rejt-add-value-node" }, g, p, s, u);
  }
};
To.defaultProps = {
  onlyValue: !1,
  addButtonElement: a.createElement("button", null, "+"),
  cancelButtonElement: a.createElement("button", null, "c"),
};
var c0 = class extends A.Component {
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
    let { onUpdate: o } = this.props,
      l = n.length;
    o(n[l - 1], r);
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
        { data: n, keyPath: o, nextDeep: l } = this.state,
        i = n[e];
      t(e, o, l, i)
        .then(() => {
          let u = { keyPath: o, deep: l, key: e, oldValue: i, type: i0 };
          n.splice(e, 1), this.setState({ data: n });
          let { onUpdate: s, onDeltaUpdate: c } = this.props;
          s(o[o.length - 1], n), c(u);
        })
        .catch(r.error);
    };
  }
  handleAddValueAdd({ newValue: e }) {
    let { data: t, keyPath: r, nextDeep: n } = this.state,
      { beforeAddAction: o, logger: l } = this.props;
    o(t.length, r, n, e)
      .then(() => {
        let i = [...t, e];
        this.setState({ data: i }), this.handleAddValueCancel();
        let { onUpdate: u, onDeltaUpdate: s } = this.props;
        u(r[r.length - 1], i), s({ type: l0, keyPath: r, deep: n, key: i.length - 1, newValue: e });
      })
      .catch(l.error);
  }
  handleAddValueCancel() {
    this.setState({ addFormVisible: !1 });
  }
  handleEditValue({ key: e, value: t }) {
    return new Promise((r, n) => {
      let { beforeUpdateAction: o } = this.props,
        { data: l, keyPath: i, nextDeep: u } = this.state,
        s = l[e];
      o(e, i, u, s, t)
        .then(() => {
          (l[e] = t), this.setState({ data: l });
          let { onUpdate: c, onDeltaUpdate: p } = this.props;
          c(i[i.length - 1], l), p({ type: s0, keyPath: i, deep: u, key: e, newValue: t, oldValue: s }), r(void 0);
        })
        .catch(n);
    });
  }
  renderCollapsed() {
    let { name: e, data: t, keyPath: r, deep: n } = this.state,
      { handleRemove: o, readOnly: l, getStyle: i, dataType: u, minusMenuElement: s } = this.props,
      { minus: c, collapsed: p } = i(e, t, r, n, u),
      g = l(e, t, r, n, u),
      h = A.cloneElement(s, { onClick: o, className: "rejt-minus-menu", style: c });
    return a.createElement(
      "span",
      { className: "rejt-collapsed" },
      a.createElement(
        "span",
        { className: "rejt-collapsed-text", style: p, onClick: this.handleCollapseMode },
        "[...] ",
        t.length,
        " ",
        t.length === 1 ? "item" : "items"
      ),
      !g && h
    );
  }
  renderNotCollapsed() {
    let { name: e, data: t, keyPath: r, deep: n, addFormVisible: o, nextDeep: l } = this.state,
      {
        isCollapsed: i,
        handleRemove: u,
        onDeltaUpdate: s,
        readOnly: c,
        getStyle: p,
        dataType: g,
        addButtonElement: h,
        cancelButtonElement: d,
        editButtonElement: m,
        inputElementGenerator: f,
        textareaElementGenerator: v,
        minusMenuElement: b,
        plusMenuElement: C,
        beforeRemoveAction: y,
        beforeAddAction: E,
        beforeUpdateAction: x,
        logger: w,
        onSubmitValueParser: k,
      } = this.props,
      { minus: S, plus: O, delimiter: R, ul: F, addForm: L } = p(e, t, r, n, g),
      T = c(e, t, r, n, g),
      Z = A.cloneElement(C, { onClick: this.handleAddMode, className: "rejt-plus-menu", style: O }),
      D = A.cloneElement(b, { onClick: u, className: "rejt-minus-menu", style: S }),
      M = !0,
      H = "[",
      P = "]";
    return a.createElement(
      "span",
      { className: "rejt-not-collapsed" },
      a.createElement("span", { className: "rejt-not-collapsed-delimiter", style: R }, H),
      !o && Z,
      a.createElement(
        "ul",
        { className: "rejt-not-collapsed-list", style: F },
        t.map(($, j) =>
          a.createElement(kn, {
            key: j,
            name: `${j}`,
            data: $,
            keyPath: r,
            deep: l,
            isCollapsed: i,
            handleRemove: this.handleRemoveItem(j),
            handleUpdateValue: this.handleEditValue,
            onUpdate: this.onChildUpdate,
            onDeltaUpdate: s,
            readOnly: c,
            getStyle: p,
            addButtonElement: h,
            cancelButtonElement: d,
            editButtonElement: m,
            inputElementGenerator: f,
            textareaElementGenerator: v,
            minusMenuElement: b,
            plusMenuElement: C,
            beforeRemoveAction: y,
            beforeAddAction: E,
            beforeUpdateAction: x,
            logger: w,
            onSubmitValueParser: k,
          })
        )
      ),
      !T &&
        o &&
        a.createElement(
          "div",
          { className: "rejt-add-form", style: L },
          a.createElement(To, {
            handleAdd: this.handleAddValueAdd,
            handleCancel: this.handleAddValueCancel,
            onlyValue: M,
            addButtonElement: h,
            cancelButtonElement: d,
            inputElementGenerator: f,
            keyPath: r,
            deep: n,
            onSubmitValueParser: k,
          })
        ),
      a.createElement("span", { className: "rejt-not-collapsed-delimiter", style: R }, P),
      !T && D
    );
  }
  render() {
    let { name: e, collapsed: t, data: r, keyPath: n, deep: o } = this.state,
      { dataType: l, getStyle: i } = this.props,
      u = t ? this.renderCollapsed() : this.renderNotCollapsed(),
      s = i(e, r, n, o, l);
    return a.createElement(
      "div",
      { className: "rejt-array-node" },
      a.createElement(
        "span",
        { onClick: this.handleCollapseMode },
        a.createElement("span", { className: "rejt-name", style: s.name }, e, " :", " ")
      ),
      u
    );
  }
};
c0.defaultProps = {
  keyPath: [],
  deep: 0,
  minusMenuElement: a.createElement("span", null, " - "),
  plusMenuElement: a.createElement("span", null, " + "),
};
var d0 = class extends A.Component {
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
    let { editEnabled: e, inputRef: t, name: r, value: n, keyPath: o, deep: l } = this.state,
      { readOnly: i, dataType: u } = this.props,
      s = i(r, n, o, l, u);
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
    let { handleUpdateValue: e, originalValue: t, logger: r, onSubmitValueParser: n, keyPath: o } = this.props,
      { inputRef: l, name: i, deep: u } = this.state;
    if (!l) return;
    let s = n(!0, o, u, i, l.value);
    e({ value: s, key: i })
      .then(() => {
        u0(t, s) || this.handleCancelEdit();
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
    let { name: e, value: t, editEnabled: r, keyPath: n, deep: o } = this.state,
      {
        handleRemove: l,
        originalValue: i,
        readOnly: u,
        dataType: s,
        getStyle: c,
        editButtonElement: p,
        cancelButtonElement: g,
        textareaElementGenerator: h,
        minusMenuElement: d,
        keyPath: m,
      } = this.props,
      f = c(e, i, n, o, s),
      v = null,
      b = null,
      C = u(e, i, n, o, s);
    if (r && !C) {
      let y = h(Fo, m, o, e, i, s),
        E = A.cloneElement(p, { onClick: this.handleEdit }),
        x = A.cloneElement(g, { onClick: this.handleCancelEdit }),
        w = A.cloneElement(y, { ref: this.refInput, defaultValue: i });
      (v = a.createElement("span", { className: "rejt-edit-form", style: f.editForm }, w, " ", x, E)), (b = null);
    } else {
      v = a.createElement(
        "span",
        { className: "rejt-value", style: f.value, onClick: C ? null : this.handleEditMode },
        t
      );
      let y = A.cloneElement(d, { onClick: l, className: "rejt-minus-menu", style: f.minus });
      b = C ? null : y;
    }
    return a.createElement(
      "li",
      { className: "rejt-function-value-node", style: f.li },
      a.createElement("span", { className: "rejt-name", style: f.name }, e, " :", " "),
      v,
      b
    );
  }
};
d0.defaultProps = {
  keyPath: [],
  deep: 0,
  handleUpdateValue: () => {},
  editButtonElement: a.createElement("button", null, "e"),
  cancelButtonElement: a.createElement("button", null, "c"),
  minusMenuElement: a.createElement("span", null, " - "),
};
var kn = class extends A.Component {
  constructor(e) {
    super(e), (this.state = { data: e.data, name: e.name, keyPath: e.keyPath, deep: e.deep });
  }
  static getDerivedStateFromProps(e, t) {
    return e.data !== t.data ? { data: e.data } : null;
  }
  render() {
    let { data: e, name: t, keyPath: r, deep: n } = this.state,
      {
        isCollapsed: o,
        handleRemove: l,
        handleUpdateValue: i,
        onUpdate: u,
        onDeltaUpdate: s,
        readOnly: c,
        getStyle: p,
        addButtonElement: g,
        cancelButtonElement: h,
        editButtonElement: d,
        inputElementGenerator: m,
        textareaElementGenerator: f,
        minusMenuElement: v,
        plusMenuElement: b,
        beforeRemoveAction: C,
        beforeAddAction: y,
        beforeUpdateAction: E,
        logger: x,
        onSubmitValueParser: w,
      } = this.props,
      k = () => !0,
      S = mt(e);
    switch (S) {
      case q6:
        return a.createElement(ka, {
          data: e,
          name: t,
          isCollapsed: o,
          keyPath: r,
          deep: n,
          handleRemove: l,
          onUpdate: u,
          onDeltaUpdate: s,
          readOnly: k,
          dataType: S,
          getStyle: p,
          addButtonElement: g,
          cancelButtonElement: h,
          editButtonElement: d,
          inputElementGenerator: m,
          textareaElementGenerator: f,
          minusMenuElement: v,
          plusMenuElement: b,
          beforeRemoveAction: C,
          beforeAddAction: y,
          beforeUpdateAction: E,
          logger: x,
          onSubmitValueParser: w,
        });
      case U6:
        return a.createElement(ka, {
          data: e,
          name: t,
          isCollapsed: o,
          keyPath: r,
          deep: n,
          handleRemove: l,
          onUpdate: u,
          onDeltaUpdate: s,
          readOnly: c,
          dataType: S,
          getStyle: p,
          addButtonElement: g,
          cancelButtonElement: h,
          editButtonElement: d,
          inputElementGenerator: m,
          textareaElementGenerator: f,
          minusMenuElement: v,
          plusMenuElement: b,
          beforeRemoveAction: C,
          beforeAddAction: y,
          beforeUpdateAction: E,
          logger: x,
          onSubmitValueParser: w,
        });
      case W6:
        return a.createElement(c0, {
          data: e,
          name: t,
          isCollapsed: o,
          keyPath: r,
          deep: n,
          handleRemove: l,
          onUpdate: u,
          onDeltaUpdate: s,
          readOnly: c,
          dataType: S,
          getStyle: p,
          addButtonElement: g,
          cancelButtonElement: h,
          editButtonElement: d,
          inputElementGenerator: m,
          textareaElementGenerator: f,
          minusMenuElement: v,
          plusMenuElement: b,
          beforeRemoveAction: C,
          beforeAddAction: y,
          beforeUpdateAction: E,
          logger: x,
          onSubmitValueParser: w,
        });
      case G6:
        return a.createElement(ft, {
          name: t,
          value: `"${e}"`,
          originalValue: e,
          keyPath: r,
          deep: n,
          handleRemove: l,
          handleUpdateValue: i,
          readOnly: c,
          dataType: S,
          getStyle: p,
          cancelButtonElement: h,
          editButtonElement: d,
          inputElementGenerator: m,
          minusMenuElement: v,
          logger: x,
          onSubmitValueParser: w,
        });
      case Y6:
        return a.createElement(ft, {
          name: t,
          value: e,
          originalValue: e,
          keyPath: r,
          deep: n,
          handleRemove: l,
          handleUpdateValue: i,
          readOnly: c,
          dataType: S,
          getStyle: p,
          cancelButtonElement: h,
          editButtonElement: d,
          inputElementGenerator: m,
          minusMenuElement: v,
          logger: x,
          onSubmitValueParser: w,
        });
      case K6:
        return a.createElement(ft, {
          name: t,
          value: e ? "true" : "false",
          originalValue: e,
          keyPath: r,
          deep: n,
          handleRemove: l,
          handleUpdateValue: i,
          readOnly: c,
          dataType: S,
          getStyle: p,
          cancelButtonElement: h,
          editButtonElement: d,
          inputElementGenerator: m,
          minusMenuElement: v,
          logger: x,
          onSubmitValueParser: w,
        });
      case J6:
        return a.createElement(ft, {
          name: t,
          value: e.toISOString(),
          originalValue: e,
          keyPath: r,
          deep: n,
          handleRemove: l,
          handleUpdateValue: i,
          readOnly: k,
          dataType: S,
          getStyle: p,
          cancelButtonElement: h,
          editButtonElement: d,
          inputElementGenerator: m,
          minusMenuElement: v,
          logger: x,
          onSubmitValueParser: w,
        });
      case X6:
        return a.createElement(ft, {
          name: t,
          value: "null",
          originalValue: "null",
          keyPath: r,
          deep: n,
          handleRemove: l,
          handleUpdateValue: i,
          readOnly: c,
          dataType: S,
          getStyle: p,
          cancelButtonElement: h,
          editButtonElement: d,
          inputElementGenerator: m,
          minusMenuElement: v,
          logger: x,
          onSubmitValueParser: w,
        });
      case Q6:
        return a.createElement(ft, {
          name: t,
          value: "undefined",
          originalValue: "undefined",
          keyPath: r,
          deep: n,
          handleRemove: l,
          handleUpdateValue: i,
          readOnly: c,
          dataType: S,
          getStyle: p,
          cancelButtonElement: h,
          editButtonElement: d,
          inputElementGenerator: m,
          minusMenuElement: v,
          logger: x,
          onSubmitValueParser: w,
        });
      case eE:
        return a.createElement(d0, {
          name: t,
          value: e.toString(),
          originalValue: e,
          keyPath: r,
          deep: n,
          handleRemove: l,
          handleUpdateValue: i,
          readOnly: c,
          dataType: S,
          getStyle: p,
          cancelButtonElement: h,
          editButtonElement: d,
          textareaElementGenerator: f,
          minusMenuElement: v,
          logger: x,
          onSubmitValueParser: w,
        });
      case tE:
        return a.createElement(ft, {
          name: t,
          value: e.toString(),
          originalValue: e,
          keyPath: r,
          deep: n,
          handleRemove: l,
          handleUpdateValue: i,
          readOnly: k,
          dataType: S,
          getStyle: p,
          cancelButtonElement: h,
          editButtonElement: d,
          inputElementGenerator: m,
          minusMenuElement: v,
          logger: x,
          onSubmitValueParser: w,
        });
      default:
        return null;
    }
  }
};
kn.defaultProps = { keyPath: [], deep: 0 };
var ka = class extends A.Component {
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
    let { onUpdate: o } = this.props,
      l = n.length;
    o(n[l - 1], r);
  }
  handleAddMode() {
    this.setState({ addFormVisible: !0 });
  }
  handleAddValueCancel() {
    this.setState({ addFormVisible: !1 });
  }
  handleAddValueAdd({ key: e, newValue: t }) {
    let { data: r, keyPath: n, nextDeep: o } = this.state,
      { beforeAddAction: l, logger: i } = this.props;
    l(e, n, o, t)
      .then(() => {
        (r[e] = t), this.setState({ data: r }), this.handleAddValueCancel();
        let { onUpdate: u, onDeltaUpdate: s } = this.props;
        u(n[n.length - 1], r), s({ type: l0, keyPath: n, deep: o, key: e, newValue: t });
      })
      .catch(i.error);
  }
  handleRemoveValue(e) {
    return () => {
      let { beforeRemoveAction: t, logger: r } = this.props,
        { data: n, keyPath: o, nextDeep: l } = this.state,
        i = n[e];
      t(e, o, l, i)
        .then(() => {
          let u = { keyPath: o, deep: l, key: e, oldValue: i, type: i0 };
          delete n[e], this.setState({ data: n });
          let { onUpdate: s, onDeltaUpdate: c } = this.props;
          s(o[o.length - 1], n), c(u);
        })
        .catch(r.error);
    };
  }
  handleCollapseMode() {
    this.setState((e) => ({ collapsed: !e.collapsed }));
  }
  handleEditValue({ key: e, value: t }) {
    return new Promise((r, n) => {
      let { beforeUpdateAction: o } = this.props,
        { data: l, keyPath: i, nextDeep: u } = this.state,
        s = l[e];
      o(e, i, u, s, t)
        .then(() => {
          (l[e] = t), this.setState({ data: l });
          let { onUpdate: c, onDeltaUpdate: p } = this.props;
          c(i[i.length - 1], l), p({ type: s0, keyPath: i, deep: u, key: e, newValue: t, oldValue: s }), r();
        })
        .catch(n);
    });
  }
  renderCollapsed() {
    let { name: e, keyPath: t, deep: r, data: n } = this.state,
      { handleRemove: o, readOnly: l, dataType: i, getStyle: u, minusMenuElement: s } = this.props,
      { minus: c, collapsed: p } = u(e, n, t, r, i),
      g = Object.getOwnPropertyNames(n),
      h = l(e, n, t, r, i),
      d = A.cloneElement(s, { onClick: o, className: "rejt-minus-menu", style: c });
    return a.createElement(
      "span",
      { className: "rejt-collapsed" },
      a.createElement(
        "span",
        { className: "rejt-collapsed-text", style: p, onClick: this.handleCollapseMode },
        "{...}",
        " ",
        g.length,
        " ",
        g.length === 1 ? "key" : "keys"
      ),
      !h && d
    );
  }
  renderNotCollapsed() {
    let { name: e, data: t, keyPath: r, deep: n, nextDeep: o, addFormVisible: l } = this.state,
      {
        isCollapsed: i,
        handleRemove: u,
        onDeltaUpdate: s,
        readOnly: c,
        getStyle: p,
        dataType: g,
        addButtonElement: h,
        cancelButtonElement: d,
        editButtonElement: m,
        inputElementGenerator: f,
        textareaElementGenerator: v,
        minusMenuElement: b,
        plusMenuElement: C,
        beforeRemoveAction: y,
        beforeAddAction: E,
        beforeUpdateAction: x,
        logger: w,
        onSubmitValueParser: k,
      } = this.props,
      { minus: S, plus: O, addForm: R, ul: F, delimiter: L } = p(e, t, r, n, g),
      T = Object.getOwnPropertyNames(t),
      Z = c(e, t, r, n, g),
      D = A.cloneElement(C, { onClick: this.handleAddMode, className: "rejt-plus-menu", style: O }),
      M = A.cloneElement(b, { onClick: u, className: "rejt-minus-menu", style: S }),
      H = T.map((j) =>
        a.createElement(kn, {
          key: j,
          name: j,
          data: t[j],
          keyPath: r,
          deep: o,
          isCollapsed: i,
          handleRemove: this.handleRemoveValue(j),
          handleUpdateValue: this.handleEditValue,
          onUpdate: this.onChildUpdate,
          onDeltaUpdate: s,
          readOnly: c,
          getStyle: p,
          addButtonElement: h,
          cancelButtonElement: d,
          editButtonElement: m,
          inputElementGenerator: f,
          textareaElementGenerator: v,
          minusMenuElement: b,
          plusMenuElement: C,
          beforeRemoveAction: y,
          beforeAddAction: E,
          beforeUpdateAction: x,
          logger: w,
          onSubmitValueParser: k,
        })
      ),
      P = "{",
      $ = "}";
    return a.createElement(
      "span",
      { className: "rejt-not-collapsed" },
      a.createElement("span", { className: "rejt-not-collapsed-delimiter", style: L }, P),
      !Z && D,
      a.createElement("ul", { className: "rejt-not-collapsed-list", style: F }, H),
      !Z &&
        l &&
        a.createElement(
          "div",
          { className: "rejt-add-form", style: R },
          a.createElement(To, {
            handleAdd: this.handleAddValueAdd,
            handleCancel: this.handleAddValueCancel,
            addButtonElement: h,
            cancelButtonElement: d,
            inputElementGenerator: f,
            keyPath: r,
            deep: n,
            onSubmitValueParser: k,
          })
        ),
      a.createElement("span", { className: "rejt-not-collapsed-delimiter", style: L }, $),
      !Z && M
    );
  }
  render() {
    let { name: e, collapsed: t, data: r, keyPath: n, deep: o } = this.state,
      { getStyle: l, dataType: i } = this.props,
      u = t ? this.renderCollapsed() : this.renderNotCollapsed(),
      s = l(e, r, n, o, i);
    return a.createElement(
      "div",
      { className: "rejt-object-node" },
      a.createElement(
        "span",
        { onClick: this.handleCollapseMode },
        a.createElement("span", { className: "rejt-name", style: s.name }, e, " :", " ")
      ),
      u
    );
  }
};
ka.defaultProps = {
  keyPath: [],
  deep: 0,
  minusMenuElement: a.createElement("span", null, " - "),
  plusMenuElement: a.createElement("span", null, " + "),
};
var ft = class extends A.Component {
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
    let { editEnabled: e, inputRef: t, name: r, value: n, keyPath: o, deep: l } = this.state,
      { readOnly: i, dataType: u } = this.props,
      s = i(r, n, o, l, u);
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
    let { handleUpdateValue: e, originalValue: t, logger: r, onSubmitValueParser: n, keyPath: o } = this.props,
      { inputRef: l, name: i, deep: u } = this.state;
    if (!l) return;
    let s = n(!0, o, u, i, l.value);
    e({ value: s, key: i })
      .then(() => {
        u0(t, s) || this.handleCancelEdit();
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
    let { name: e, value: t, editEnabled: r, keyPath: n, deep: o } = this.state,
      {
        handleRemove: l,
        originalValue: i,
        readOnly: u,
        dataType: s,
        getStyle: c,
        editButtonElement: p,
        cancelButtonElement: g,
        inputElementGenerator: h,
        minusMenuElement: d,
        keyPath: m,
      } = this.props,
      f = c(e, i, n, o, s),
      v = u(e, i, n, o, s),
      b = r && !v,
      C = h(Fo, m, o, e, i, s),
      y = A.cloneElement(p, { onClick: this.handleEdit }),
      E = A.cloneElement(g, { onClick: this.handleCancelEdit }),
      x = A.cloneElement(C, { ref: this.refInput, defaultValue: JSON.stringify(i) }),
      w = A.cloneElement(d, { onClick: l, className: "rejt-minus-menu", style: f.minus });
    return a.createElement(
      "li",
      { className: "rejt-value-node", style: f.li },
      a.createElement("span", { className: "rejt-name", style: f.name }, e, " : "),
      b
        ? a.createElement("span", { className: "rejt-edit-form", style: f.editForm }, x, " ", E, y)
        : a.createElement(
            "span",
            { className: "rejt-value", style: f.value, onClick: v ? null : this.handleEditMode },
            String(t)
          ),
      !v && !b && w
    );
  }
};
ft.defaultProps = {
  keyPath: [],
  deep: 0,
  handleUpdateValue: () => Promise.resolve(),
  editButtonElement: a.createElement("button", null, "e"),
  cancelButtonElement: a.createElement("button", null, "c"),
  minusMenuElement: a.createElement("span", null, " - "),
};
var rE = {
    minus: { color: "red" },
    plus: { color: "green" },
    collapsed: { color: "grey" },
    delimiter: {},
    ul: { padding: "0px", margin: "0 0 0 25px", listStyle: "none" },
    name: { color: "#2287CD" },
    addForm: {},
  },
  nE = {
    minus: { color: "red" },
    plus: { color: "green" },
    collapsed: { color: "grey" },
    delimiter: {},
    ul: { padding: "0px", margin: "0 0 0 25px", listStyle: "none" },
    name: { color: "#2287CD" },
    addForm: {},
  },
  aE = {
    minus: { color: "red" },
    editForm: {},
    value: { color: "#7bba3d" },
    li: { minHeight: "22px", lineHeight: "22px", outline: "0px" },
    name: { color: "#2287CD" },
  };
function oE(e) {
  let t = e;
  if (t.indexOf("function") === 0) return (0, eval)(`(${t})`);
  try {
    t = JSON.parse(e);
  } catch {}
  return t;
}
var p0 = class extends A.Component {
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
        readOnly: o,
        getStyle: l,
        addButtonElement: i,
        cancelButtonElement: u,
        editButtonElement: s,
        inputElement: c,
        textareaElement: p,
        minusMenuElement: g,
        plusMenuElement: h,
        beforeRemoveAction: d,
        beforeAddAction: m,
        beforeUpdateAction: f,
        logger: v,
        onSubmitValueParser: b,
        fallback: C = null,
      } = this.props,
      y = mt(e),
      E = o;
    mt(o) === "Boolean" && (E = () => o);
    let x = c;
    c && mt(c) !== "Function" && (x = () => c);
    let w = p;
    return (
      p && mt(p) !== "Function" && (w = () => p),
      y === "Object" || y === "Array"
        ? a.createElement(
            "div",
            { className: "rejt-tree" },
            a.createElement(kn, {
              data: e,
              name: t,
              deep: -1,
              isCollapsed: r,
              onUpdate: this.onUpdate,
              onDeltaUpdate: n,
              readOnly: E,
              getStyle: l,
              addButtonElement: i,
              cancelButtonElement: u,
              editButtonElement: s,
              inputElementGenerator: x,
              textareaElementGenerator: w,
              minusMenuElement: g,
              plusMenuElement: h,
              handleRemove: this.removeRoot,
              beforeRemoveAction: d,
              beforeAddAction: m,
              beforeUpdateAction: f,
              logger: v,
              onSubmitValueParser: b,
            })
          )
        : C
    );
  }
};
p0.defaultProps = {
  rootName: "root",
  isCollapsed: (e, t) => t !== -1,
  getStyle: (e, t, r, n, o) => {
    switch (o) {
      case "Object":
      case "Error":
        return rE;
      case "Array":
        return nE;
      default:
        return aE;
    }
  },
  readOnly: () => !1,
  onFullyUpdate: () => {},
  onDeltaUpdate: () => {},
  beforeRemoveAction: () => Promise.resolve(),
  beforeAddAction: () => Promise.resolve(),
  beforeUpdateAction: () => Promise.resolve(),
  logger: { error: () => {} },
  onSubmitValueParser: (e, t, r, n, o) => oE(o),
  inputElement: () => a.createElement("input", null),
  textareaElement: () => a.createElement("textarea", null),
  fallback: null,
};
var { window: lE } = he,
  iE = _.div(({ theme: e }) => ({
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
  Jn = _.button(({ theme: e, primary: t }) => ({
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
  fi = _(Ae)(({ theme: e, icon: t, disabled: r }) => ({
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
  mi = _.input(({ theme: e, placeholder: t }) => ({
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
  sE = _(kt)(({ theme: e }) => ({
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
  uE = _(Ie.Textarea)(({ theme: e }) => ({
    flex: 1,
    padding: "7px 6px",
    fontFamily: e.typography.fonts.mono,
    fontSize: "12px",
    lineHeight: "18px",
    "&::placeholder": { fontFamily: e.typography.fonts.base, fontSize: "13px" },
    "&:placeholder-shown": { padding: "7px 10px" },
  })),
  cE = { bubbles: !0, cancelable: !0, key: "Enter", code: "Enter", keyCode: 13 },
  dE = (e) => {
    e.currentTarget.dispatchEvent(new lE.KeyboardEvent("keydown", cE));
  },
  pE = (e) => {
    e.currentTarget.select();
  },
  fE = (e) => () => ({
    name: { color: e.color.secondary },
    collapsed: { color: e.color.dark },
    ul: { listStyle: "none", margin: "0 0 0 1rem", padding: 0 },
    li: { outline: 0 },
  }),
  gi = ({ name: e, value: t, onChange: r }) => {
    let n = e1(),
      o = A.useMemo(() => t && f4(t), [t]),
      l = o != null,
      [i, u] = A.useState(!l),
      [s, c] = A.useState(null),
      p = A.useCallback(
        (v) => {
          try {
            v && r(JSON.parse(v)), c(void 0);
          } catch (b) {
            c(b);
          }
        },
        [r]
      ),
      [g, h] = A.useState(!1),
      d = A.useCallback(() => {
        r({}), h(!0);
      }, [h]),
      m = A.useRef(null);
    if (
      (A.useEffect(() => {
        g && m.current && m.current.select();
      }, [g]),
      !l)
    )
      return a.createElement(Ie.Button, { id: dn(e), onClick: d }, "Set object");
    let f = a.createElement(uE, {
      ref: m,
      id: Ze(e),
      name: e,
      defaultValue: t === null ? "" : JSON.stringify(t, null, 2),
      onBlur: (v) => p(v.target.value),
      placeholder: "Edit JSON string...",
      autoFocus: g,
      valid: s ? "error" : null,
    });
    return a.createElement(
      iE,
      null,
      ["Object", "Array"].includes(mt(o)) &&
        a.createElement(
          sE,
          {
            href: "#",
            onClick: (v) => {
              v.preventDefault(), u((b) => !b);
            },
          },
          a.createElement(Ae, { icon: i ? "eyeclose" : "eye" }),
          a.createElement("span", null, "RAW")
        ),
      i
        ? f
        : a.createElement(p0, {
            data: o,
            rootName: e,
            onFullyUpdate: r,
            getStyle: fE(n),
            cancelButtonElement: a.createElement(Jn, { type: "button" }, "Cancel"),
            editButtonElement: a.createElement(Jn, { type: "submit" }, "Save"),
            addButtonElement: a.createElement(Jn, { type: "submit", primary: !0 }, "Save"),
            plusMenuElement: a.createElement(fi, { icon: "add" }),
            minusMenuElement: a.createElement(fi, { icon: "subtract" }),
            inputElement: (v, b, C, y) =>
              y ? a.createElement(mi, { onFocus: pE, onBlur: dE }) : a.createElement(mi, null),
            fallback: f,
          })
    );
  },
  mE = _.input(({ theme: e, min: t, max: r, value: n }) => ({
    "&": { width: "100%", backgroundColor: "transparent", appearance: "none" },
    "&::-webkit-slider-runnable-track": {
      background:
        e.base === "light"
          ? `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${((n - t) / (r - t)) * 100}%, 
            ${We(0.02, e.input.background)} ${((n - t) / (r - t)) * 100}%, 
            ${We(0.02, e.input.background)} 100%)`
          : `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${((n - t) / (r - t)) * 100}%, 
            ${wt(0.02, e.input.background)} ${((n - t) / (r - t)) * 100}%, 
            ${wt(0.02, e.input.background)} 100%)`,
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
      border: `1px solid ${it(e.appBorderColor, 0.2)}`,
      borderRadius: "50px",
      boxShadow: `0 1px 3px 0px ${it(e.appBorderColor, 0.2)}`,
      cursor: "grab",
      appearance: "none",
      background: `${e.input.background}`,
      transition: "all 150ms ease-out",
      "&:hover": {
        background: `${We(0.05, e.input.background)}`,
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
      "&::-webkit-slider-runnable-track": { borderColor: it(e.color.secondary, 0.4) },
      "&::-webkit-slider-thumb": { borderColor: e.color.secondary, boxShadow: `0 0px 5px 0px ${e.color.secondary}` },
    },
    "&::-moz-range-track": {
      background:
        e.base === "light"
          ? `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${((n - t) / (r - t)) * 100}%, 
            ${We(0.02, e.input.background)} ${((n - t) / (r - t)) * 100}%, 
            ${We(0.02, e.input.background)} 100%)`
          : `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${((n - t) / (r - t)) * 100}%, 
            ${wt(0.02, e.input.background)} ${((n - t) / (r - t)) * 100}%, 
            ${wt(0.02, e.input.background)} 100%)`,
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
      border: `1px solid ${it(e.appBorderColor, 0.2)}`,
      borderRadius: "50px",
      boxShadow: `0 1px 3px 0px ${it(e.appBorderColor, 0.2)}`,
      cursor: "grab",
      background: `${e.input.background}`,
      transition: "all 150ms ease-out",
      "&:hover": {
        background: `${We(0.05, e.input.background)}`,
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
            ${We(0.02, e.input.background)} ${((n - t) / (r - t)) * 100}%, 
            ${We(0.02, e.input.background)} 100%)`
          : `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${((n - t) / (r - t)) * 100}%, 
            ${wt(0.02, e.input.background)} ${((n - t) / (r - t)) * 100}%, 
            ${wt(0.02, e.input.background)} 100%)`,
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
      border: `1px solid ${it(e.appBorderColor, 0.2)}`,
      borderRadius: 50,
      cursor: "grab",
      marginTop: 0,
    },
    "@supports (-ms-ime-align:auto)": { "input[type=range]": { margin: "0" } },
  })),
  f0 = _.span({
    paddingLeft: 5,
    paddingRight: 5,
    fontSize: 12,
    whiteSpace: "nowrap",
    fontFeatureSettings: "tnum",
    fontVariantNumeric: "tabular-nums",
  }),
  gE = _(f0)(({ numberOFDecimalsPlaces: e, max: t }) => ({
    width: `${e + t.toString().length * 2 + 3}ch`,
    textAlign: "right",
    flexShrink: 0,
  })),
  hE = _.div({ display: "flex", alignItems: "center", width: "100%" });
function yE(e) {
  let t = e.toString().match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
  return t ? Math.max(0, (t[1] ? t[1].length : 0) - (t[2] ? +t[2] : 0)) : 0;
}
var bE = ({ name: e, value: t, onChange: r, min: n = 0, max: o = 100, step: l = 1, onBlur: i, onFocus: u }) => {
    let s = (g) => {
        r(T6(g.target.value));
      },
      c = t !== void 0,
      p = A.useMemo(() => yE(l), [l]);
    return a.createElement(
      hE,
      null,
      a.createElement(f0, null, n),
      a.createElement(mE, {
        id: Ze(e),
        type: "range",
        onChange: s,
        name: e,
        value: t,
        min: n,
        max: o,
        step: l,
        onFocus: u,
        onBlur: i,
      }),
      a.createElement(gE, { numberOFDecimalsPlaces: p, max: o }, `${c ? t.toFixed(p) : "--"}`, " / ", o)
    );
  },
  vE = _.label({ display: "flex" }),
  EE = _.div(({ isMaxed: e }) => ({ marginLeft: "0.75rem", paddingTop: "0.35rem", color: e ? "red" : void 0 })),
  xE = ({ name: e, value: t, onChange: r, onFocus: n, onBlur: o, maxLength: l }) => {
    let i = (g) => {
        r(g.target.value);
      },
      [u, s] = A.useState(!1),
      c = A.useCallback(() => {
        r(""), s(!0);
      }, [s]);
    if (t === void 0) return a.createElement(Ie.Button, { id: dn(e), onClick: c }, "Set string");
    let p = typeof t == "string";
    return a.createElement(
      vE,
      null,
      a.createElement(Ie.Textarea, {
        id: Ze(e),
        maxLength: l,
        onChange: i,
        size: "flex",
        placeholder: "Edit string...",
        autoFocus: u,
        valid: p ? null : "error",
        name: e,
        value: p ? t : "",
        onFocus: n,
        onBlur: o,
      }),
      l &&
        a.createElement(
          EE,
          { isMaxed: (t == null ? void 0 : t.length) === l },
          (t == null ? void 0 : t.length) ?? 0,
          " / ",
          l
        )
    );
  },
  AE = _(Ie.Input)({ padding: 10 });
function wE(e) {
  e.forEach((t) => {
    t.startsWith("blob:") && URL.revokeObjectURL(t);
  });
}
var CE = ({ onChange: e, name: t, accept: r = "image/*", value: n }) => {
    let o = A.useRef(null);
    function l(i) {
      if (!i.target.files) return;
      let u = Array.from(i.target.files).map((s) => URL.createObjectURL(s));
      e(u), wE(n);
    }
    return (
      A.useEffect(() => {
        n == null && o.current && (o.current.value = null);
      }, [n, t]),
      a.createElement(AE, {
        ref: o,
        id: Ze(t),
        type: "file",
        name: t,
        multiple: !0,
        onChange: l,
        accept: r,
        size: "flex",
      })
    );
  },
  SE = A.lazy(() =>
    tt(
      () => import("./Color-3YIJY6X7-198eee83.js"),
      [
        "./Color-3YIJY6X7-198eee83.js",
        "./index-ebeaab24.js",
        "./_getPrototype-0b33db91.js",
        "./iframe-010eedeb.js",
        "./chunk-4NMOSTKD-82fbb5f2.js",
        "./index-d475d2ea.js",
        "./index-d37d4223.js",
        "./index-356e4a49.js",
      ],
      import.meta.url
    )
  ),
  kE = (e) => a.createElement(A.Suspense, { fallback: a.createElement("div", null) }, a.createElement(SE, { ...e })),
  _E = {
    array: gi,
    object: gi,
    boolean: w6,
    color: kE,
    date: R6,
    number: D6,
    check: Bt,
    "inline-check": Bt,
    radio: Bt,
    "inline-radio": Bt,
    select: Bt,
    "multi-select": Bt,
    range: bE,
    text: xE,
    file: CE,
  },
  hi = () => a.createElement(a.Fragment, null, "-"),
  OE = ({ row: e, arg: t, updateArgs: r }) => {
    let { key: n, control: o } = e,
      [l, i] = A.useState(!1),
      [u, s] = A.useState({ value: t });
    A.useEffect(() => {
      l || s({ value: t });
    }, [l, t]);
    let c = A.useCallback((m) => (s({ value: m }), r({ [n]: m }), m), [r, n]),
      p = A.useCallback(() => i(!1), []),
      g = A.useCallback(() => i(!0), []);
    if (!o || o.disable) return a.createElement(hi, null);
    let h = { name: n, argType: e, value: u.value, onChange: c, onBlur: p, onFocus: g },
      d = _E[o.type] || hi;
    return a.createElement(d, { ...h, ...o, controlType: o.type });
  },
  RE = _.span({ fontWeight: "bold" }),
  FE = _.span(({ theme: e }) => ({ color: e.color.negative, fontFamily: e.typography.fonts.mono, cursor: "help" })),
  TE = _.div(({ theme: e }) => ({
    "&&": { p: { margin: "0 0 10px 0" }, a: { color: e.color.secondary } },
    code: { ...ut({ theme: e }), fontSize: 12, fontFamily: e.typography.fonts.mono },
    "& code": { margin: 0, display: "inline-block" },
    "& pre > code": { whiteSpace: "pre-wrap" },
  })),
  DE = _.div(({ theme: e, hasDescription: t }) => ({
    color: e.base === "light" ? ee(0.1, e.color.defaultText) : ee(0.2, e.color.defaultText),
    marginTop: t ? 4 : 0,
  })),
  LE = _.div(({ theme: e, hasDescription: t }) => ({
    color: e.base === "light" ? ee(0.1, e.color.defaultText) : ee(0.2, e.color.defaultText),
    marginTop: t ? 12 : 0,
    marginBottom: 12,
  })),
  ME = _.td(({ theme: e, expandable: t }) => ({ paddingLeft: t ? "40px !important" : "20px !important" })),
  Zr = (e) => {
    var d;
    let { row: t, updateArgs: r, compact: n, expandable: o, initialExpandedArgs: l } = e,
      { name: i, description: u } = t,
      s = t.table || {},
      c = s.type || t.type,
      p = s.defaultValue || t.defaultValue,
      g = (d = t.type) == null ? void 0 : d.required,
      h = u != null && u !== "";
    return a.createElement(
      "tr",
      null,
      a.createElement(
        ME,
        { expandable: o },
        a.createElement(RE, null, i),
        g ? a.createElement(FE, { title: "Required" }, "*") : null
      ),
      n
        ? null
        : a.createElement(
            "td",
            null,
            h && a.createElement(TE, null, a.createElement(ju, null, u)),
            s.jsDocTags != null
              ? a.createElement(
                  a.Fragment,
                  null,
                  a.createElement(LE, { hasDescription: h }, a.createElement(Kn, { value: c, initialExpandedArgs: l })),
                  a.createElement(d6, { tags: s.jsDocTags })
                )
              : a.createElement(DE, { hasDescription: h }, a.createElement(Kn, { value: c, initialExpandedArgs: l }))
          ),
      n ? null : a.createElement("td", null, a.createElement(Kn, { value: p, initialExpandedArgs: l })),
      r ? a.createElement("td", null, a.createElement(OE, { ...e })) : null
    );
  },
  BE = _(Ae)(({ theme: e }) => ({
    marginRight: 8,
    marginLeft: -10,
    marginTop: -2,
    height: 12,
    width: 12,
    color: e.base === "light" ? ee(0.25, e.color.defaultText) : ee(0.3, e.color.defaultText),
    border: "none",
    display: "inline-block",
  })),
  $E = _.span(({ theme: e }) => ({ display: "flex", lineHeight: "20px", alignItems: "center" })),
  IE = _.td(({ theme: e }) => ({
    position: "relative",
    letterSpacing: "0.35em",
    textTransform: "uppercase",
    fontWeight: e.typography.weight.bold,
    fontSize: e.typography.size.s1 - 1,
    color: e.base === "light" ? ee(0.4, e.color.defaultText) : ee(0.6, e.color.defaultText),
    background: `${e.background.app} !important`,
    "& ~ td": { background: `${e.background.app} !important` },
  })),
  ZE = _.td(({ theme: e }) => ({
    position: "relative",
    fontWeight: e.typography.weight.bold,
    fontSize: e.typography.size.s2 - 1,
    background: e.background.app,
  })),
  HE = _.td(() => ({ position: "relative" })),
  jE = _.tr(({ theme: e }) => ({
    "&:hover > td": {
      backgroundColor: `${wt(0.005, e.background.app)} !important`,
      boxShadow: `${e.color.mediumlight} 0 - 1px 0 0 inset`,
      cursor: "row-resize",
    },
  })),
  yi = _.button(() => ({
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
  Xn = ({ level: e = "section", label: t, children: r, initialExpanded: n = !0, colSpan: o = 3 }) => {
    let [l, i] = A.useState(n),
      u = e === "subsection" ? ZE : IE,
      s = (r == null ? void 0 : r.length) || 0,
      c = e === "subsection" ? `${s} item${s !== 1 ? "s" : ""}` : "",
      p = l ? "arrowdown" : "arrowright",
      g = `${l ? "Hide" : "Show"} ${e === "subsection" ? s : t} item${s !== 1 ? "s" : ""}`;
    return a.createElement(
      a.Fragment,
      null,
      a.createElement(
        jE,
        { title: g },
        a.createElement(
          u,
          { colSpan: 1 },
          a.createElement(yi, { onClick: (h) => i(!l), tabIndex: 0 }, g),
          a.createElement($E, null, a.createElement(BE, { icon: p }), t)
        ),
        a.createElement(
          HE,
          { colSpan: o - 1 },
          a.createElement(yi, { onClick: (h) => i(!l), tabIndex: -1, style: { outline: "none" } }, g),
          l ? null : c
        )
      ),
      l ? r : null
    );
  },
  NE = _.table(
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
          color: e.base === "light" ? ee(0.25, e.color.defaultText) : ee(0.45, e.color.defaultText),
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
  PE = _(kt)(({ theme: e }) => ({ color: e.barTextColor, margin: "-4px -12px -4px 0" })),
  VE = _.span({ display: "flex", justifyContent: "space-between" }),
  zE = {
    alpha: (e, t) => e.name.localeCompare(t.name),
    requiredFirst: (e, t) => {
      var r, n;
      return (
        +!!((r = t.type) != null && r.required) - +!!((n = e.type) != null && n.required) ||
        e.name.localeCompare(t.name)
      );
    },
    none: void 0,
  },
  Qn = (e) => ({
    key: e,
    name: "propertyName",
    description: "This is a short description",
    control: { type: "text" },
    table: { type: { summary: "summary" }, defaultValue: { summary: "defaultValue" } },
  }),
  qE = { rows: { row1: Qn("row1"), row2: Qn("row2"), row3: Qn("row3") } },
  UE = (e, t) => {
    let r = { ungrouped: [], ungroupedSubsections: {}, sections: {} };
    if (!e) return r;
    Object.entries(e).forEach(([l, i]) => {
      let { category: u, subcategory: s } = (i == null ? void 0 : i.table) || {};
      if (u) {
        let c = r.sections[u] || { ungrouped: [], subsections: {} };
        if (!s) c.ungrouped.push({ key: l, ...i });
        else {
          let p = c.subsections[s] || [];
          p.push({ key: l, ...i }), (c.subsections[s] = p);
        }
        r.sections[u] = c;
      } else if (s) {
        let c = r.ungroupedSubsections[s] || [];
        c.push({ key: l, ...i }), (r.ungroupedSubsections[s] = c);
      } else r.ungrouped.push({ key: l, ...i });
    });
    let n = zE[t],
      o = (l) => (n ? Object.keys(l).reduce((i, u) => ({ ...i, [u]: l[u].sort(n) }), {}) : l);
    return {
      ungrouped: r.ungrouped.sort(n),
      ungroupedSubsections: o(r.ungroupedSubsections),
      sections: Object.keys(r.sections).reduce(
        (l, i) => ({
          ...l,
          [i]: { ungrouped: r.sections[i].ungrouped.sort(n), subsections: o(r.sections[i].subsections) },
        }),
        {}
      ),
    };
  },
  WE = (e, t, r) => {
    try {
      return rc(e, t, r);
    } catch (n) {
      return Dv.warn(n.message), !1;
    }
  },
  GE = (e) => {
    if ("error" in e)
      return a.createElement(
        xa,
        null,
        e.error,
        " ",
        a.createElement(vr, { href: "http://storybook.js.org/docs/", target: "_blank", withArrow: !0 }, "Read the docs")
      );
    let { updateArgs: t, resetArgs: r, compact: n, inAddonPanel: o, initialExpandedArgs: l, sort: i = "none" } = e,
      u = "isLoading" in e,
      { rows: s, args: c, globals: p } = "rows" in e ? e : qE,
      g = UE(
        Vg(s, (f) => {
          var v;
          return !((v = f == null ? void 0 : f.table) != null && v.disable) && WE(f, c || {}, p || {});
        }),
        i
      );
    if (
      g.ungrouped.length === 0 &&
      Object.entries(g.sections).length === 0 &&
      Object.entries(g.ungroupedSubsections).length === 0
    )
      return a.createElement(
        xa,
        null,
        "No inputs found for this component. ",
        a.createElement(vr, { href: "http://storybook.js.org/docs/", target: "_blank", withArrow: !0 }, "Read the docs")
      );
    let h = 1;
    t && (h += 1), n || (h += 2);
    let d = Object.keys(g.sections).length > 0,
      m = { updateArgs: t, compact: n, inAddonPanel: o, initialExpandedArgs: l };
    return a.createElement(
      io,
      null,
      a.createElement(
        NE,
        { "aria-hidden": u, compact: n, inAddonPanel: o, isLoading: u, className: "docblock-argstable sb-unstyled" },
        a.createElement(
          "thead",
          { className: "docblock-argstable-head" },
          a.createElement(
            "tr",
            null,
            a.createElement("th", null, a.createElement("span", null, "Name")),
            n ? null : a.createElement("th", null, a.createElement("span", null, "Description")),
            n ? null : a.createElement("th", null, a.createElement("span", null, "Default")),
            t
              ? a.createElement(
                  "th",
                  null,
                  a.createElement(
                    VE,
                    null,
                    "Control",
                    " ",
                    !u &&
                      r &&
                      a.createElement(
                        PE,
                        { onClick: () => r(), title: "Reset controls" },
                        a.createElement(Ae, { icon: "undo", "aria-hidden": !0 })
                      )
                  )
                )
              : null
          )
        ),
        a.createElement(
          "tbody",
          { className: "docblock-argstable-body" },
          g.ungrouped.map((f) => a.createElement(Zr, { key: f.key, row: f, arg: c && c[f.key], ...m })),
          Object.entries(g.ungroupedSubsections).map(([f, v]) =>
            a.createElement(
              Xn,
              { key: f, label: f, level: "subsection", colSpan: h },
              v.map((b) => a.createElement(Zr, { key: b.key, row: b, arg: c && c[b.key], expandable: d, ...m }))
            )
          ),
          Object.entries(g.sections).map(([f, v]) =>
            a.createElement(
              Xn,
              { key: f, label: f, level: "section", colSpan: h },
              v.ungrouped.map((b) => a.createElement(Zr, { key: b.key, row: b, arg: c && c[b.key], ...m })),
              Object.entries(v.subsections).map(([b, C]) =>
                a.createElement(
                  Xn,
                  { key: b, label: b, level: "subsection", colSpan: h },
                  C.map((y) => a.createElement(Zr, { key: y.key, row: y, arg: c && c[y.key], expandable: d, ...m }))
                )
              )
            )
          )
        )
      )
    );
  };
_.div(({ theme: e }) => ({
  background: e.background.warning,
  color: e.color.darkest,
  padding: "10px 15px",
  lineHeight: "20px",
  boxShadow: `${e.appBorderColor} 0 -1px 0 0 inset`,
}));
_.div(({ theme: e }) => ({
  marginRight: 30,
  fontSize: `${e.typography.size.s1}px`,
  color: e.base === "light" ? ee(0.4, e.color.defaultText) : ee(0.6, e.color.defaultText),
}));
_.div({ overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" });
_.div({
  display: "flex",
  flexDirection: "row",
  alignItems: "baseline",
  "&:not(:last-child)": { marginBottom: "1rem" },
});
_.div(te, ({ theme: e }) => ({ ...Sn(e), margin: "25px 0 40px", padding: "30px 20px" }));
_.div(({ theme: e }) => ({ fontWeight: e.typography.weight.bold, color: e.color.defaultText }));
_.div(({ theme: e }) => ({ color: e.base === "light" ? ee(0.2, e.color.defaultText) : ee(0.6, e.color.defaultText) }));
_.div({ flex: "0 0 30%", lineHeight: "20px", marginTop: 5 });
_.div(({ theme: e }) => ({
  flex: 1,
  textAlign: "center",
  fontFamily: e.typography.fonts.mono,
  fontSize: e.typography.size.s1,
  lineHeight: 1,
  overflow: "hidden",
  color: e.base === "light" ? ee(0.4, e.color.defaultText) : ee(0.6, e.color.defaultText),
  "> div": { display: "inline-block", overflow: "hidden", maxWidth: "100%", textOverflow: "ellipsis" },
  span: { display: "block", marginTop: 2 },
}));
_.div({ display: "flex", flexDirection: "row" });
_.div(({ background: e }) => ({
  position: "relative",
  flex: 1,
  "&::before": { position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: e, content: '""' },
}));
_.div(({ theme: e }) => ({
  ...Sn(e),
  display: "flex",
  flexDirection: "row",
  height: 50,
  marginBottom: 5,
  overflow: "hidden",
  backgroundColor: "white",
  backgroundImage: "repeating-linear-gradient(-45deg, #ccc, #ccc 1px, #fff 1px, #fff 16px)",
  backgroundClip: "padding-box",
}));
_.div({ display: "flex", flexDirection: "column", flex: 1, position: "relative", marginBottom: 30 });
_.div({ flex: 1, display: "flex", flexDirection: "row" });
_.div({ display: "flex", alignItems: "flex-start" });
_.div({ flex: "0 0 30%" });
_.div({ flex: 1 });
_.div(({ theme: e }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  paddingBottom: 20,
  fontWeight: e.typography.weight.bold,
  color: e.base === "light" ? ee(0.4, e.color.defaultText) : ee(0.6, e.color.defaultText),
}));
_.div(({ theme: e }) => ({
  fontSize: e.typography.size.s2,
  lineHeight: "20px",
  display: "flex",
  flexDirection: "column",
}));
_.div(({ theme: e }) => ({
  fontFamily: e.typography.fonts.base,
  fontSize: e.typography.size.s2,
  color: e.color.defaultText,
  marginLeft: 10,
  lineHeight: 1.2,
}));
_.div(({ theme: e }) => ({
  ...Sn(e),
  overflow: "hidden",
  height: 40,
  width: 40,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flex: "none",
  "> img, > svg": { width: 20, height: 20 },
}));
_.div({
  display: "inline-flex",
  flexDirection: "row",
  alignItems: "center",
  flex: "0 1 calc(20% - 10px)",
  minWidth: 120,
  margin: "0px 10px 30px 0",
});
_.div({ display: "flex", flexFlow: "row wrap" });
var YE = (e) => `anchor--${e}`,
  KE = ({ storyId: e, children: t }) => a.createElement("div", { id: YE(e), className: "sb-anchor" }, t);
he &&
  he.__DOCS_CONTEXT__ === void 0 &&
  ((he.__DOCS_CONTEXT__ = A.createContext(null)), (he.__DOCS_CONTEXT__.displayName = "DocsContext"));
var _e = he ? he.__DOCS_CONTEXT__ : A.createContext(null),
  _n = (e, t) => A.useContext(_e).resolveOf(e, t);
function JE(e, t = "start") {
  e.scrollIntoView({ behavior: "smooth", block: t, inline: "nearest" });
}
function XE(e, t) {
  let r = Do([e], t);
  return r && r[0];
}
function Do(e, t) {
  let [r, n] = A.useState({});
  return (
    A.useEffect(() => {
      Promise.all(
        e.map(async (o) => {
          let l = await t.loadStory(o);
          n((i) => (i[o] === l ? i : { ...i, [o]: l }));
        })
      );
    }),
    e.map((o) => {
      if (r[o]) return r[o];
      try {
        return t.storyById(o);
      } catch {
        return null;
      }
    })
  );
}
function m0(e) {
  return Tv(e);
}
var g0 = A.createContext({ sources: {} }),
  h0 = "--unknown--",
  QE = ({ children: e, channel: t }) => {
    let [r, n] = A.useState({});
    return (
      A.useEffect(() => {
        let o = (l, i = null, u = !1) => {
          let {
              id: s,
              args: c = void 0,
              source: p,
              format: g,
            } = typeof l == "string" ? { id: l, source: i, format: u } : l,
            h = c ? m0(c) : h0;
          n((d) => ({ ...d, [s]: { ...d[s], [h]: { code: p, format: g } } }));
        };
        return t.on(jo, o), () => t.off(jo, o);
      }, []),
      a.createElement(g0.Provider, { value: { sources: r } }, e)
    );
  },
  e8 = ((e) => ((e.OPEN = "open"), (e.CLOSED = "closed"), (e.NONE = "none"), e))(e8 || {}),
  t8 = (e) => {
    let t = e
      .map((r) => {
        var n, o;
        return (o = (n = r.parameters.docs) == null ? void 0 : n.source) == null ? void 0 : o.state;
      })
      .filter(Boolean);
    return t.length === 0 ? "closed" : t[0];
  },
  r8 = (e, t, r) => {
    let { sources: n } = r,
      o = n == null ? void 0 : n[e];
    return (o == null ? void 0 : o[m0(t)]) || (o == null ? void 0 : o[h0]) || { code: "" };
  },
  n8 = ({ snippet: e, storyContext: t, typeFromProps: r, transformFromProps: n }) => {
    var s, c, p, g, h, d;
    let { __isArgsStory: o } = t.parameters,
      l = ((s = t.parameters.docs) == null ? void 0 : s.source) || {},
      i = r || l.type || Fn.AUTO;
    if (l.code !== void 0) return l.code;
    let u = i === Fn.DYNAMIC || (i === Fn.AUTO && e && o) ? e : l.originalSource || "";
    return (
      l.transformSource &&
        ce(ve`The \`transformSource\` parameter at \`parameters.docs.source.transformSource\` is deprecated, please use \`parameters.docs.source.transform\` instead. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#source-block
  `),
      (c = t.parameters.docs) != null &&
        c.transformSource &&
        ce(ve`The \`transformSource\` parameter at \`parameters.docs.transformSource\` is deprecated, please use \`parameters.docs.source.transform\` instead. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#source-block
  `),
      (p = t.parameters.jsx) != null &&
        p.transformSource &&
        ce(ve`The \`transformSource\` parameter at \`parameters.jsx.transformSource\` is deprecated, please use \`parameters.docs.source.transform\` instead. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#source-block
  `),
      ((d =
        n ??
        l.transform ??
        l.transformSource ??
        ((g = t.parameters.docs) == null ? void 0 : g.transformSource) ??
        ((h = t.parameters.jsx) == null ? void 0 : h.transformSource)) == null
        ? void 0
        : d(u, t)) || u
    );
  },
  y0 = (e, t, r) => {
    var d, m, f;
    let n = e.ids || (e.id ? [e.id] : []),
      o = Do(n, t),
      l = o,
      { of: i } = e;
    if ("of" in e && i === void 0)
      throw new Error("Unexpected `of={undefined}`, did you mistype a CSF file reference?");
    if (i) l = [t.resolveOf(i, ["story"]).story];
    else if (l.length === 0)
      try {
        l = [t.storyById()];
      } catch {}
    if (!o.every(Boolean)) return { error: "Oh no! The source is not available.", state: "none" };
    let u =
        ((f = (m = (d = l[0]) == null ? void 0 : d.parameters) == null ? void 0 : m.docs) == null
          ? void 0
          : f.source) || {},
      { code: s } = e,
      c = e.format ?? u.format,
      p = e.language ?? u.language ?? "jsx",
      g = e.dark ?? u.dark ?? !1;
    s ||
      (s = l.map((v, b) => {
        var x, w;
        if (!v) return "";
        let C = t.getStoryContext(v),
          y = e.__forceInitialArgs ? C.initialArgs : C.unmappedArgs,
          E = r8(v.id, y, r);
        return (
          b === 0 &&
            (c =
              E.format ??
              ((w = (x = v.parameters.docs) == null ? void 0 : x.source) == null ? void 0 : w.format) ??
              !1),
          n8({
            snippet: E.code,
            storyContext: { ...C, args: y },
            typeFromProps: e.type,
            transformFromProps: e.transform,
          })
        );
      }).join(`

`));
    let h = t8(l);
    return s
      ? { code: s, format: c, language: p, dark: g, state: h }
      : { error: "Oh no! The source is not available.", state: h };
  },
  b0 = (e, t) => {
    let { id: r, of: n, meta: o, story: l } = e;
    if ("of" in e && n === void 0)
      throw new Error("Unexpected `of={undefined}`, did you mistype a CSF file reference?");
    if (r)
      return (
        ce(ve`Referencing stories by \`id\` is deprecated, please use \`of\` instead. 
    
      Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#story-block'`),
        r
      );
    let { name: i } = e;
    return i
      ? (ce(ve`Referencing stories by \`name\` is deprecated, please use \`of\` instead. 
    
      Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#story-block'`),
        t.storyIdByName(i))
      : (l &&
          ce(ve`The \`story\` prop is deprecated, please export your stories from CSF files and reference them with \`of={}\`.

      Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#story-block'`),
        o && t.referenceMeta(o, !1),
        t.resolveOf(n || l || "story", ["story"]).story.id);
  },
  a8 = (e, t, r) => {
    let { parameters: n = {} } = t || {},
      { docs: o = {} } = n,
      l = o.story || {};
    if (o.disable) return null;
    let { inlineStories: i, iframeHeight: u } = o;
    typeof i < "u" &&
      ce(ve`The \`docs.inlineStories\` parameter is deprecated, use \`docs.story.inline\` instead. 
    
      Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#autodocs-changes'
    `);
    let s = e.inline ?? l.inline ?? i ?? !1;
    if (
      (typeof u < "u" &&
        ce(ve`The \`docs.iframeHeight\` parameter is deprecated, use \`docs.story.iframeHeight\` instead. 
    
      Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#autodocs-changes'
    `),
      s)
    ) {
      let p = e.height ?? l.height,
        g = e.autoplay ?? l.autoplay ?? !1;
      return {
        story: t,
        inline: !0,
        height: p,
        autoplay: g,
        forceInitialArgs: !!e.__forceInitialArgs,
        primary: !!e.__primary,
        renderStoryToElement: r.renderStoryToElement,
      };
    }
    let c = e.height ?? l.height ?? l.iframeHeight ?? u ?? "100px";
    return { story: t, inline: !1, height: c, primary: !!e.__primary };
  },
  o8 = (e = { __forceInitialArgs: !1, __primary: !1 }) => {
    let t = A.useContext(_e),
      r = b0(e, t),
      n = XE(r, t);
    if (!n) return a.createElement(Ro, null);
    let o = a8(e, n, t);
    return o ? a.createElement(t6, { ...o }) : null;
  },
  l8 = ({ withSource: e, mdxSource: t, children: r, layout: n, ...o }, l, i) => {
    let u = A.Children.toArray(r)
        .filter((h) => h.props && (h.props.id || h.props.name || h.props.of))
        .map((h) => b0(h.props, l)),
      s = Do(u, l),
      c = s.some((h) => !h),
      p = y0({ ...(t ? { code: decodeURI(t) } : { ids: u }), ...(o.of && { of: o.of }) }, l, i);
    if (e === "none") return { isLoading: c, previewProps: o };
    let g = n;
    return (
      A.Children.forEach(r, (h) => {
        var d, m;
        g || (g = (m = (d = h == null ? void 0 : h.props) == null ? void 0 : d.parameters) == null ? void 0 : m.layout);
      }),
      s.forEach((h) => {
        var d, m;
        g ||
          !h ||
          (g =
            (h == null ? void 0 : h.parameters.layout) ??
            ((m = (d = h.parameters.docs) == null ? void 0 : d.canvas) == null ? void 0 : m.layout));
      }),
      {
        isLoading: c,
        previewProps: { ...o, layout: g ?? "padded", withSource: p, isExpanded: (e || p.state) === "open" },
      }
    );
  },
  i8 = (e) => {
    var v, b, C, y, E, x, w, k, S, O;
    let t = A.useContext(_e),
      r = A.useContext(g0),
      { children: n, of: o, source: l } = e;
    if ("of" in e && o === void 0)
      throw new Error("Unexpected `of={undefined}`, did you mistype a CSF file reference?");
    let { isLoading: i, previewProps: u } = l8(e, t, r),
      s,
      c,
      p;
    try {
      ({ story: s } = _n(o || "story", ["story"]));
    } catch (R) {
      n || (p = R);
    }
    try {
      c = y0({ ...l, ...(o && { of: o }) }, t, r);
    } catch (R) {
      n || (p = R);
    }
    if (p) throw p;
    if (
      (e.withSource &&
        ce(ve`Setting source state with \`withSource\` is deprecated, please use \`sourceState\` with 'hidden', 'shown' or 'none' instead. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#canvas-block
    `),
      e.mdxSource &&
        ce(ve`Setting source code with \`mdxSource\` is deprecated, please use source={{code: '...'}} instead. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#canvas-block
    `),
      (e.isColumn !== void 0 || e.columns !== void 0) &&
        ce(ve`\`isColumn\` and \`columns\` props are deprecated as the Canvas block now only supports showing a single story. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#canvas-block
    `),
      n)
    )
      return (
        ce(ve`Passing children to Canvas is deprecated, please use the \`of\` prop instead to reference a story. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#canvas-block
  `),
        i ? a.createElement(u6, null) : a.createElement(wa, { ...u }, n)
      );
    let g =
        e.layout ??
        s.parameters.layout ??
        ((b = (v = s.parameters.docs) == null ? void 0 : v.canvas) == null ? void 0 : b.layout) ??
        "padded",
      h =
        e.withToolbar ??
        ((y = (C = s.parameters.docs) == null ? void 0 : C.canvas) == null ? void 0 : y.withToolbar) ??
        !1,
      d =
        e.additionalActions ??
        ((x = (E = s.parameters.docs) == null ? void 0 : E.canvas) == null ? void 0 : x.additionalActions),
      m =
        e.sourceState ??
        ((k = (w = s.parameters.docs) == null ? void 0 : w.canvas) == null ? void 0 : k.sourceState) ??
        "hidden",
      f = e.className ?? ((O = (S = s.parameters.docs) == null ? void 0 : S.canvas) == null ? void 0 : O.className);
    return a.createElement(
      wa,
      {
        withSource: m === "none" ? void 0 : c,
        isExpanded: m === "shown",
        withToolbar: h,
        additionalActions: d,
        className: f,
        layout: g,
      },
      a.createElement(o8, { of: o || s.moduleExport, meta: e.meta, ...e.story })
    );
  },
  s8 = (e, t) => {
    let r = t.getStoryContext(e),
      [n, o] = A.useState(r.globals);
    return (
      A.useEffect(() => {
        let l = (i) => {
          o(i.globals);
        };
        return t.channel.on(oi, l), () => t.channel.off(oi, l);
      }, [t.channel]),
      [n]
    );
  },
  u8 = (e, t) => {
    let r = c8(e, t);
    if (!r) throw new Error("No result when story was defined");
    return r;
  },
  c8 = (e, t) => {
    let r = e ? t.getStoryContext(e) : { args: {} },
      { id: n } = e || { id: "none" },
      [o, l] = A.useState(r.args);
    A.useEffect(() => {
      let s = (c) => {
        c.storyId === n && l(c.args);
      };
      return t.channel.on(ai, s), () => t.channel.off(ai, s);
    }, [n, t.channel]);
    let i = A.useCallback((s) => t.channel.emit(Mv, { storyId: n, updatedArgs: s }), [n, t.channel]),
      u = A.useCallback((s) => t.channel.emit(Bv, { storyId: n, argNames: s }), [n, t.channel]);
    return e && [o, i, u];
  },
  d8 = (e) => {
    var f;
    let { of: t } = e;
    if ("of" in e && t === void 0)
      throw new Error("Unexpected `of={undefined}`, did you mistype a CSF file reference?");
    let r = A.useContext(_e),
      { story: n } = r.resolveOf(t || "story", ["story"]),
      { parameters: o, argTypes: l } = n,
      i = ((f = o.docs) == null ? void 0 : f.controls) || {},
      u = e.include ?? i.include,
      s = e.exclude ?? i.exclude,
      c = e.sort ?? i.sort,
      [p, g, h] = u8(n, r),
      [d] = s8(n, r),
      m = Lv(l, u, s);
    return a.createElement(GE, { rows: m, args: p, globals: d, updateArgs: g, resetArgs: h, sort: c });
  },
  { document: v0 } = he,
  E0 = ({ className: e, children: t, ...r }) => {
    if (typeof e != "string" && (typeof t != "string" || !t.match(/[\n\r]/g))) return a.createElement(ao, null, t);
    let n = e && e.split("-");
    return a.createElement(_o, { language: (n && n[1]) || "plaintext", format: !1, code: t, ...r });
  };
function Lo(e, t) {
  e.channel.emit($v, t);
}
var _a = gu.a,
  p8 = ({ hash: e, children: t }) => {
    let r = A.useContext(_e);
    return a.createElement(
      _a,
      {
        href: e,
        target: "_self",
        onClick: (n) => {
          let o = e.substring(1);
          v0.getElementById(o) && Lo(r, e);
        },
      },
      t
    );
  },
  x0 = (e) => {
    let { href: t, target: r, children: n, ...o } = e,
      l = A.useContext(_e);
    if (t) {
      if (t.startsWith("#")) return a.createElement(p8, { hash: t }, n);
      if (r !== "_blank" && !t.startsWith("https://"))
        return a.createElement(
          _a,
          {
            href: t,
            onClick: (i) => {
              i.button === 0 &&
                !i.altKey &&
                !i.ctrlKey &&
                !i.metaKey &&
                !i.shiftKey &&
                (i.preventDefault(), Lo(l, i.currentTarget.getAttribute("href")));
            },
            target: r,
            ...o,
          },
          n
        );
    }
    return a.createElement(_a, { ...e });
  },
  A0 = ["h1", "h2", "h3", "h4", "h5", "h6"],
  f8 = A0.reduce(
    (e, t) => ({
      ...e,
      [t]: _(t)({
        "& svg": { position: "relative", top: "-0.1em", visibility: "hidden" },
        "&:hover svg": { visibility: "visible" },
      }),
    }),
    {}
  ),
  m8 = _.a(() => ({
    float: "left",
    lineHeight: "inherit",
    paddingRight: "10px",
    marginLeft: "-24px",
    color: "inherit",
  })),
  g8 = ({ as: e, id: t, children: r, ...n }) => {
    let o = A.useContext(_e),
      l = f8[e],
      i = `#${t}`;
    return a.createElement(
      l,
      { id: t, ...n },
      a.createElement(
        m8,
        {
          "aria-hidden": "true",
          href: i,
          tabIndex: -1,
          target: "_self",
          onClick: (u) => {
            v0.getElementById(t) && Lo(o, i);
          },
        },
        a.createElement(Ae, { icon: "link" })
      ),
      r
    );
  },
  Mo = (e) => {
    let { as: t, id: r, children: n, ...o } = e;
    if (r) return a.createElement(g8, { as: t, id: r, ...o }, n);
    let l = t,
      { as: i, ...u } = e;
    return a.createElement(l, { ...Q(u, t) });
  },
  w0 = A0.reduce((e, t) => ({ ...e, [t]: (r) => a.createElement(Mo, { as: t, ...r }) }), {}),
  h8 = (e) => {
    var t;
    if (!e.children) return null;
    if (typeof e.children != "string")
      throw new Error(ve`The Markdown block only accepts children as a single string, but children were of type: '${typeof e.children}'
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
    return a.createElement(ju, {
      ...e,
      options: {
        forceBlock: !0,
        overrides: { code: E0, a: x0, ...w0, ...((t = e == null ? void 0 : e.options) == null ? void 0 : t.overrides) },
        ...(e == null ? void 0 : e.options),
      },
    });
  },
  y8 = ((e) => ((e.INFO = "info"), (e.NOTES = "notes"), (e.DOCGEN = "docgen"), (e.AUTO = "auto"), e))(y8 || {}),
  Yr =
    "https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#description-block-parametersnotes-and-parametersinfo",
  b8 = (e) => e && (typeof e == "string" ? e : ea(e.markdown) || ea(e.text)),
  v8 = (e) => e && (typeof e == "string" ? e : ea(e.text)),
  E8 = (e) => null,
  x8 = (e) => {
    var t, r, n, o, l, i, u, s;
    switch (e.type) {
      case "story":
        return (
          ((r = (t = e.story.parameters.docs) == null ? void 0 : t.description) == null ? void 0 : r.story) || null
        );
      case "meta": {
        let { parameters: c, component: p } = e.preparedMeta;
        return (
          ((o = (n = c.docs) == null ? void 0 : n.description) == null ? void 0 : o.component) ||
          ((i = (l = c.docs) == null ? void 0 : l.extractComponentDescription) == null
            ? void 0
            : i.call(l, p, { component: p, parameters: c })) ||
          null
        );
      }
      case "component": {
        let {
          component: c,
          projectAnnotations: { parameters: p },
        } = e;
        return (
          ((s = (u = p.docs) == null ? void 0 : u.extractComponentDescription) == null
            ? void 0
            : s.call(u, c, { component: c, parameters: p })) || null
        );
      }
      default:
        throw new Error(`Unrecognized module type resolved from 'useOf', got: ${e.type}`);
    }
  },
  A8 = ({ type: e, markdown: t, children: r }, { storyById: n }) => {
    let { component: o, parameters: l } = n();
    if (r || t) return r || t;
    let { notes: i, info: u, docs: s } = l;
    (i || u) &&
      ce(`Using 'parameters.notes' or 'parameters.info' properties to describe stories is deprecated. See ${Yr}`);
    let { extractComponentDescription: c = E8, description: p } = s || {},
      g = p == null ? void 0 : p.component;
    if (g) return g;
    switch (e) {
      case "info":
        return v8(u);
      case "notes":
        return b8(i);
      case "docgen":
      case "auto":
      default:
        return c(o, { component: o, ...l });
    }
  },
  Oa = (e) => {
    let { of: t, type: r, markdown: n, children: o } = e;
    if ("of" in e && t === void 0)
      throw new Error("Unexpected `of={undefined}`, did you mistype a CSF file reference?");
    let l = A.useContext(_e),
      i = _n(t || "meta"),
      u;
    return (
      r || n || o ? (u = A8(e, l)) : (u = x8(i)),
      r && ce(`Manually specifying description type is deprecated. See ${Yr}`),
      n && ce(`The 'markdown' prop on the Description block is deprecated. See ${Yr}`),
      o && ce(`The 'children' prop on the Description block is deprecated. See ${Yr}`),
      u ? a.createElement(h8, null, u) : null
    );
  },
  { document: w8, window: C8 } = he,
  S8 = ({ context: e, theme: t, children: r }) => (
    A.useEffect(() => {
      let n;
      try {
        if (((n = new URL(C8.parent.location.toString())), n.hash)) {
          let o = w8.getElementById(n.hash.substring(1));
          o &&
            setTimeout(() => {
              JE(o);
            }, 200);
        }
      } catch {}
    }),
    a.createElement(
      _e.Provider,
      { value: e },
      a.createElement(QE, { channel: e.channel }, a.createElement(Ui, { theme: I1(t) }, a.createElement(qv, null, r)))
    )
  ),
  k8 = /\s*\/\s*/,
  _8 = (e) => {
    let t = e.trim().split(k8);
    return (t && t[t.length - 1]) || e;
  },
  O8 = ({ children: e }) => {
    let t = A.useContext(_e),
      r = e || _8(t.storyById().title);
    return r ? a.createElement(Nv, { className: "sbdocs-title sb-unstyled" }, r) : null;
  },
  R8 = ({ children: e }) => {
    let t = A.useContext(_e),
      { parameters: r } = t.storyById(),
      n = e || (r == null ? void 0 : r.componentSubtitle);
    return n ? a.createElement(Pv, { className: "sbdocs-subtitle sb-unstyled" }, n) : null;
  },
  F8 = ({ children: e, disableAnchor: t }) => {
    if (t || typeof e != "string") return a.createElement(lo, null, e);
    let r = e.toLowerCase().replace(/[^a-z0-9]/gi, "-");
    return a.createElement(Mo, { as: "h3", id: r }, e);
  },
  C0 = ({ of: e, expanded: t = !0, withToolbar: r = !1, __forceInitialArgs: n = !1, __primary: o = !1 }) => {
    var u, s;
    let { story: l } = _n(e || "story", ["story"]),
      i = ((s = (u = l.parameters.docs) == null ? void 0 : u.canvas) == null ? void 0 : s.withToolbar) ?? r;
    return a.createElement(
      KE,
      { storyId: l.id },
      t && a.createElement(a.Fragment, null, a.createElement(F8, null, l.name), a.createElement(Oa, { of: e })),
      a.createElement(i8, {
        of: e,
        withToolbar: i,
        story: { __forceInitialArgs: n, __primary: o },
        source: { __forceInitialArgs: n },
      })
    );
  },
  T8 = ({ name: e }) => {
    let t = A.useContext(_e);
    e &&
      ce(ve`\`name\` prop is deprecated on the Primary block.
    The Primary block should only be used to render the primary story, which is automatically found.
    `);
    let r = e && t.storyIdByName(e),
      n = t.storyById(r);
    return n ? a.createElement(C0, { of: n.moduleExport, expanded: !1, __primary: !0, withToolbar: !0 }) : null;
  },
  D8 = ({ children: e, disableAnchor: t, ...r }) => {
    if (t || typeof e != "string") return a.createElement(oo, null, e);
    let n = e.toLowerCase().replace(/[^a-z0-9]/gi, "-");
    return a.createElement(Mo, { as: "h2", id: n, ...r }, e);
  },
  L8 = _(D8)(({ theme: e }) => ({
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
  S0 = ({ title: e, includePrimary: t = !0 }) => {
    let { componentStories: r } = A.useContext(_e),
      n = r().filter((o) => {
        var l, i;
        return !((i = (l = o.parameters) == null ? void 0 : l.docs) != null && i.disable);
      });
    return (
      t || (n = n.slice(1)),
      !n || n.length === 0
        ? null
        : a.createElement(
            a.Fragment,
            null,
            a.createElement(L8, null, e),
            n.map(
              (o) => o && a.createElement(C0, { key: o.id, of: o.moduleExport, expanded: !0, __forceInitialArgs: !0 })
            )
          )
    );
  };
S0.defaultProps = { title: "Stories" };
var M8 = () => {
    let e = _n("meta", ["meta"]),
      { stories: t } = e.csfFile,
      r = Object.keys(t).length === 1;
    return a.createElement(
      a.Fragment,
      null,
      a.createElement(O8, null),
      a.createElement(R8, null),
      a.createElement(Oa, { of: "meta" }),
      r ? a.createElement(Oa, { of: "story" }) : null,
      a.createElement(T8, null),
      a.createElement(d8, null),
      r ? null : a.createElement(S0, null)
    );
  },
  B8 = ({ docsParameter: e, context: t }) => {
    let r = e.container || S8,
      n = e.page || M8;
    return a.createElement(r, { context: t, theme: e.theme }, a.createElement(n, null));
  },
  k0 = { code: E0, a: x0, ...w0 },
  $8 = class extends A.Component {
    constructor() {
      super(...arguments), (this.state = { hasError: !1 });
    }
    static getDerivedStateFromError() {
      return { hasError: !0 };
    }
    componentDidCatch(e) {
      let { showException: t } = this.props;
      t(e);
    }
    render() {
      let { hasError: e } = this.state,
        { children: t } = this.props;
      return e ? null : t;
    }
  },
  I8 = class {
    constructor() {
      (this.render = async (e, t, r) => {
        let n = { ...k0, ...(t == null ? void 0 : t.components) };
        return new Promise((o, l) => {
          tt(() => import("./index-61d26957.js"), ["./index-61d26957.js", "./index-ebeaab24.js"], import.meta.url)
            .then(({ MDXProvider: i }) =>
              J0(
                a.createElement(
                  $8,
                  { showException: l, key: Math.random() },
                  a.createElement(i, { components: n }, a.createElement(B8, { context: e, docsParameter: t }))
                ),
                r
              )
            )
            .then(o);
        });
      }),
        (this.unmount = (e) => {
          X0(e);
        });
    }
  };
const Y8 = Object.freeze(
  Object.defineProperty({ __proto__: null, DocsRenderer: I8, defaultComponents: k0 }, Symbol.toStringTag, {
    value: "Module",
  })
);
export {
  Y8 as D,
  Ie as F,
  l1 as G,
  Ae as I,
  ms as S,
  jf as T,
  G2 as W,
  ke as _,
  ks as a,
  N as b,
  ps as c,
  Df as d,
  _ as e,
  Ze as g,
  Gt as k,
  Ot as m,
  q8 as s,
};
//# sourceMappingURL=DocsRenderer-EYKKDMVH-083afe3d.js.map

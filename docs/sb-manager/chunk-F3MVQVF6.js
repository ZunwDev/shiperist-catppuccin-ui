import { require_react } from "./chunk-3FAXWWKG.js";
import { require_memoizerific } from "./chunk-FENICTK6.js";
import { __export, __toESM } from "./chunk-AS2AMEUR.js";
var scope = (() => {
  let win;
  return (
    typeof window < "u"
      ? (win = window)
      : typeof globalThis < "u"
      ? (win = globalThis)
      : typeof global < "u"
      ? (win = global)
      : typeof self < "u"
      ? (win = self)
      : (win = {}),
    win
  );
})();
var dist_exports2 = {};
__export(dist_exports2, {
  CacheProvider: () => CacheProvider,
  ClassNames: () => ClassNames,
  Global: () => Global,
  ThemeProvider: () => ThemeProvider,
  background: () => background,
  color: () => color,
  convert: () => convert,
  create: () => create,
  createCache: () => emotion_cache_browser_esm_default,
  createGlobal: () => createGlobal,
  createReset: () => createReset,
  css: () => css,
  darken: () => darkenColor,
  ensure: () => ensure,
  ignoreSsrWarning: () => ignoreSsrWarning,
  isPropValid: () => emotion_is_prop_valid_esm_default,
  jsx: () => jsx,
  keyframes: () => keyframes,
  lighten: () => lightenColor,
  styled: () => emotion_styled_browser_esm_default,
  themes: () => themes,
  typography: () => typography,
  useTheme: () => useTheme,
  withTheme: () => withTheme,
});
var dist_exports = {};
__export(dist_exports, { deprecate: () => deprecate, logger: () => logger, once: () => once, pretty: () => pretty });
var { LOGLEVEL } = scope,
  levels = { trace: 1, debug: 2, info: 3, warn: 4, error: 5, silent: 10 },
  currentLogLevelString = LOGLEVEL,
  currentLogLevelNumber = levels[currentLogLevelString] || levels.info,
  logger = {
    trace: (message, ...rest) => {
      currentLogLevelNumber <= levels.trace && console.trace(message, ...rest);
    },
    debug: (message, ...rest) => {
      currentLogLevelNumber <= levels.debug && console.debug(message, ...rest);
    },
    info: (message, ...rest) => {
      currentLogLevelNumber <= levels.info && console.info(message, ...rest);
    },
    warn: (message, ...rest) => {
      currentLogLevelNumber <= levels.warn && console.warn(message, ...rest);
    },
    error: (message, ...rest) => {
      currentLogLevelNumber <= levels.error && console.error(message, ...rest);
    },
    log: (message, ...rest) => {
      currentLogLevelNumber < levels.silent && console.log(message, ...rest);
    },
  },
  logged = new Set(),
  once =
    (type) =>
    (message, ...rest) => {
      if (!logged.has(message)) return logged.add(message), logger[type](message, ...rest);
    };
once.clear = () => logged.clear();
once.trace = once("trace");
once.debug = once("debug");
once.info = once("info");
once.warn = once("warn");
once.error = once("error");
once.log = once("log");
var deprecate = once("warn"),
  pretty =
    (type) =>
    (...args) => {
      let argArray = [];
      if (args.length) {
        let startTagRe = /<span\s+style=(['"])([^'"]*)\1\s*>/gi,
          endTagRe = /<\/span>/gi,
          reResultArray;
        for (
          argArray.push(args[0].replace(startTagRe, "%c").replace(endTagRe, "%c"));
          (reResultArray = startTagRe.exec(args[0]));

        )
          argArray.push(reResultArray[2]), argArray.push("");
        for (let j = 1; j < args.length; j++) argArray.push(args[j]);
      }
      logger[type].apply(logger, argArray);
    };
pretty.trace = pretty("trace");
pretty.debug = pretty("debug");
pretty.info = pretty("info");
pretty.warn = pretty("warn");
pretty.error = pretty("error");
var __create = Object.create,
  __defProp = Object.defineProperty,
  __getOwnPropDesc = Object.getOwnPropertyDescriptor,
  __getOwnPropNames = Object.getOwnPropertyNames,
  __getProtoOf = Object.getPrototypeOf,
  __hasOwnProp = Object.prototype.hasOwnProperty,
  __commonJS = (cb, mod) =>
    function () {
      return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
    },
  __copyProps = (to, from2, except, desc) => {
    if ((from2 && typeof from2 == "object") || typeof from2 == "function")
      for (let key of __getOwnPropNames(from2))
        !__hasOwnProp.call(to, key) &&
          key !== except &&
          __defProp(to, key, {
            get: () => from2[key],
            enumerable: !(desc = __getOwnPropDesc(from2, key)) || desc.enumerable,
          });
    return to;
  },
  __toESM2 = (mod, isNodeMode, target) => (
    (target = mod != null ? __create(__getProtoOf(mod)) : {}),
    __copyProps(
      isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
      mod
    )
  );
function _extends() {
  return (
    (_extends = Object.assign
      ? Object.assign.bind()
      : function (target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
          }
          return target;
        }),
    _extends.apply(this, arguments)
  );
}
function _assertThisInitialized(self2) {
  if (self2 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return self2;
}
function _setPrototypeOf(o, p) {
  return (
    (_setPrototypeOf = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (o2, p2) {
          return (o2.__proto__ = p2), o2;
        }),
    _setPrototypeOf(o, p)
  );
}
function _inheritsLoose(subClass, superClass) {
  (subClass.prototype = Object.create(superClass.prototype)),
    (subClass.prototype.constructor = subClass),
    _setPrototypeOf(subClass, superClass);
}
function _getPrototypeOf(o) {
  return (
    (_getPrototypeOf = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (o2) {
          return o2.__proto__ || Object.getPrototypeOf(o2);
        }),
    _getPrototypeOf(o)
  );
}
function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _isNativeReflectConstruct() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
  } catch {
    return !1;
  }
}
function _construct(Parent, args, Class) {
  return (
    _isNativeReflectConstruct()
      ? (_construct = Reflect.construct.bind())
      : (_construct = function (Parent2, args2, Class2) {
          var a = [null];
          a.push.apply(a, args2);
          var Constructor = Function.bind.apply(Parent2, a),
            instance = new Constructor();
          return Class2 && _setPrototypeOf(instance, Class2.prototype), instance;
        }),
    _construct.apply(null, arguments)
  );
}
function _wrapNativeSuper(Class) {
  var _cache = typeof Map == "function" ? new Map() : void 0;
  return (
    (_wrapNativeSuper = function (Class2) {
      if (Class2 === null || !_isNativeFunction(Class2)) return Class2;
      if (typeof Class2 != "function") throw new TypeError("Super expression must either be null or a function");
      if (typeof _cache < "u") {
        if (_cache.has(Class2)) return _cache.get(Class2);
        _cache.set(Class2, Wrapper);
      }
      function Wrapper() {
        return _construct(Class2, arguments, _getPrototypeOf(this).constructor);
      }
      return (
        (Wrapper.prototype = Object.create(Class2.prototype, {
          constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 },
        })),
        _setPrototypeOf(Wrapper, Class2)
      );
    }),
    _wrapNativeSuper(Class)
  );
}
var ERRORS = {
  1: `Passed invalid arguments to hsl, please pass multiple numbers e.g. hsl(360, 0.75, 0.4) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75 }).

`,
  2: `Passed invalid arguments to hsla, please pass multiple numbers e.g. hsla(360, 0.75, 0.4, 0.7) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75, alpha: 0.7 }).

`,
  3: `Passed an incorrect argument to a color function, please pass a string representation of a color.

`,
  4: `Couldn't generate valid rgb string from %s, it returned %s.

`,
  5: `Couldn't parse the color string. Please provide the color as a string in hex, rgb, rgba, hsl or hsla notation.

`,
  6: `Passed invalid arguments to rgb, please pass multiple numbers e.g. rgb(255, 205, 100) or an object e.g. rgb({ red: 255, green: 205, blue: 100 }).

`,
  7: `Passed invalid arguments to rgba, please pass multiple numbers e.g. rgb(255, 205, 100, 0.75) or an object e.g. rgb({ red: 255, green: 205, blue: 100, alpha: 0.75 }).

`,
  8: `Passed invalid argument to toColorString, please pass a RgbColor, RgbaColor, HslColor or HslaColor object.

`,
  9: `Please provide a number of steps to the modularScale helper.

`,
  10: `Please pass a number or one of the predefined scales to the modularScale helper as the ratio.

`,
  11: `Invalid value passed as base to modularScale, expected number or em string but got "%s"

`,
  12: `Expected a string ending in "px" or a number passed as the first argument to %s(), got "%s" instead.

`,
  13: `Expected a string ending in "px" or a number passed as the second argument to %s(), got "%s" instead.

`,
  14: `Passed invalid pixel value ("%s") to %s(), please pass a value like "12px" or 12.

`,
  15: `Passed invalid base value ("%s") to %s(), please pass a value like "12px" or 12.

`,
  16: `You must provide a template to this method.

`,
  17: `You passed an unsupported selector state to this method.

`,
  18: `minScreen and maxScreen must be provided as stringified numbers with the same units.

`,
  19: `fromSize and toSize must be provided as stringified numbers with the same units.

`,
  20: `expects either an array of objects or a single object with the properties prop, fromSize, and toSize.

`,
  21: "expects the objects in the first argument array to have the properties `prop`, `fromSize`, and `toSize`.\n\n",
  22: "expects the first argument object to have the properties `prop`, `fromSize`, and `toSize`.\n\n",
  23: `fontFace expects a name of a font-family.

`,
  24: `fontFace expects either the path to the font file(s) or a name of a local copy.

`,
  25: `fontFace expects localFonts to be an array.

`,
  26: `fontFace expects fileFormats to be an array.

`,
  27: `radialGradient requries at least 2 color-stops to properly render.

`,
  28: `Please supply a filename to retinaImage() as the first argument.

`,
  29: `Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.

`,
  30: "Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",
  31: `The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation

`,
  32: `To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])
To pass a single animation please supply them in simple values, e.g. animation('rotate', '2s')

`,
  33: `The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation

`,
  34: `borderRadius expects a radius value as a string or number as the second argument.

`,
  35: `borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.

`,
  36: `Property must be a string value.

`,
  37: `Syntax Error at %s.

`,
  38: `Formula contains a function that needs parentheses at %s.

`,
  39: `Formula is missing closing parenthesis at %s.

`,
  40: `Formula has too many closing parentheses at %s.

`,
  41: `All values in a formula must have the same unit or be unitless.

`,
  42: `Please provide a number of steps to the modularScale helper.

`,
  43: `Please pass a number or one of the predefined scales to the modularScale helper as the ratio.

`,
  44: `Invalid value passed as base to modularScale, expected number or em/rem string but got %s.

`,
  45: `Passed invalid argument to hslToColorString, please pass a HslColor or HslaColor object.

`,
  46: `Passed invalid argument to rgbToColorString, please pass a RgbColor or RgbaColor object.

`,
  47: `minScreen and maxScreen must be provided as stringified numbers with the same units.

`,
  48: `fromSize and toSize must be provided as stringified numbers with the same units.

`,
  49: `Expects either an array of objects or a single object with the properties prop, fromSize, and toSize.

`,
  50: `Expects the objects in the first argument array to have the properties prop, fromSize, and toSize.

`,
  51: `Expects the first argument object to have the properties prop, fromSize, and toSize.

`,
  52: `fontFace expects either the path to the font file(s) or a name of a local copy.

`,
  53: `fontFace expects localFonts to be an array.

`,
  54: `fontFace expects fileFormats to be an array.

`,
  55: `fontFace expects a name of a font-family.

`,
  56: `linearGradient requries at least 2 color-stops to properly render.

`,
  57: `radialGradient requries at least 2 color-stops to properly render.

`,
  58: `Please supply a filename to retinaImage() as the first argument.

`,
  59: `Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.

`,
  60: "Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",
  61: `Property must be a string value.

`,
  62: `borderRadius expects a radius value as a string or number as the second argument.

`,
  63: `borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.

`,
  64: `The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation.

`,
  65: `To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s').

`,
  66: `The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation.

`,
  67: `You must provide a template to this method.

`,
  68: `You passed an unsupported selector state to this method.

`,
  69: `Expected a string ending in "px" or a number passed as the first argument to %s(), got %s instead.

`,
  70: `Expected a string ending in "px" or a number passed as the second argument to %s(), got %s instead.

`,
  71: `Passed invalid pixel value %s to %s(), please pass a value like "12px" or 12.

`,
  72: `Passed invalid base value %s to %s(), please pass a value like "12px" or 12.

`,
  73: `Please provide a valid CSS variable.

`,
  74: `CSS variable not found and no default was provided.

`,
  75: `important requires a valid style object, got a %s instead.

`,
  76: `fromSize and toSize must be provided as stringified numbers with the same units as minScreen and maxScreen.

`,
  77: `remToPx expects a value in "rem" but you provided it in "%s".

`,
  78: `base must be set in "px" or "%" but you set it in "%s".
`,
};
function format() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
  var a = args[0],
    b = [],
    c;
  for (c = 1; c < args.length; c += 1) b.push(args[c]);
  return (
    b.forEach(function (d) {
      a = a.replace(/%[a-z]/, d);
    }),
    a
  );
}
var PolishedError = (function (_Error) {
  _inheritsLoose(PolishedError2, _Error);
  function PolishedError2(code) {
    for (
      var _this, _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1;
      _key2 < _len2;
      _key2++
    )
      args[_key2 - 1] = arguments[_key2];
    return (
      (_this = _Error.call(this, format.apply(void 0, [ERRORS[code]].concat(args))) || this),
      _assertThisInitialized(_this)
    );
  }
  return PolishedError2;
})(_wrapNativeSuper(Error));
function colorToInt(color2) {
  return Math.round(color2 * 255);
}
function convertToInt(red, green, blue) {
  return colorToInt(red) + "," + colorToInt(green) + "," + colorToInt(blue);
}
function hslToRgb(hue, saturation, lightness, convert2) {
  if ((convert2 === void 0 && (convert2 = convertToInt), saturation === 0))
    return convert2(lightness, lightness, lightness);
  var huePrime = (((hue % 360) + 360) % 360) / 60,
    chroma = (1 - Math.abs(2 * lightness - 1)) * saturation,
    secondComponent = chroma * (1 - Math.abs((huePrime % 2) - 1)),
    red = 0,
    green = 0,
    blue = 0;
  huePrime >= 0 && huePrime < 1
    ? ((red = chroma), (green = secondComponent))
    : huePrime >= 1 && huePrime < 2
    ? ((red = secondComponent), (green = chroma))
    : huePrime >= 2 && huePrime < 3
    ? ((green = chroma), (blue = secondComponent))
    : huePrime >= 3 && huePrime < 4
    ? ((green = secondComponent), (blue = chroma))
    : huePrime >= 4 && huePrime < 5
    ? ((red = secondComponent), (blue = chroma))
    : huePrime >= 5 && huePrime < 6 && ((red = chroma), (blue = secondComponent));
  var lightnessModification = lightness - chroma / 2,
    finalRed = red + lightnessModification,
    finalGreen = green + lightnessModification,
    finalBlue = blue + lightnessModification;
  return convert2(finalRed, finalGreen, finalBlue);
}
var namedColorMap = {
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
function nameToHex(color2) {
  if (typeof color2 != "string") return color2;
  var normalizedColorName = color2.toLowerCase();
  return namedColorMap[normalizedColorName] ? "#" + namedColorMap[normalizedColorName] : color2;
}
var hexRegex = /^#[a-fA-F0-9]{6}$/,
  hexRgbaRegex = /^#[a-fA-F0-9]{8}$/,
  reducedHexRegex = /^#[a-fA-F0-9]{3}$/,
  reducedRgbaHexRegex = /^#[a-fA-F0-9]{4}$/,
  rgbRegex = /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,
  rgbaRegex =
    /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,
  hslRegex =
    /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,
  hslaRegex =
    /^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
function parseToRgb(color2) {
  if (typeof color2 != "string") throw new PolishedError(3);
  var normalizedColor = nameToHex(color2);
  if (normalizedColor.match(hexRegex))
    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[2], 16),
      green: parseInt("" + normalizedColor[3] + normalizedColor[4], 16),
      blue: parseInt("" + normalizedColor[5] + normalizedColor[6], 16),
    };
  if (normalizedColor.match(hexRgbaRegex)) {
    var alpha = parseFloat((parseInt("" + normalizedColor[7] + normalizedColor[8], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[2], 16),
      green: parseInt("" + normalizedColor[3] + normalizedColor[4], 16),
      blue: parseInt("" + normalizedColor[5] + normalizedColor[6], 16),
      alpha,
    };
  }
  if (normalizedColor.match(reducedHexRegex))
    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[1], 16),
      green: parseInt("" + normalizedColor[2] + normalizedColor[2], 16),
      blue: parseInt("" + normalizedColor[3] + normalizedColor[3], 16),
    };
  if (normalizedColor.match(reducedRgbaHexRegex)) {
    var _alpha = parseFloat((parseInt("" + normalizedColor[4] + normalizedColor[4], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[1], 16),
      green: parseInt("" + normalizedColor[2] + normalizedColor[2], 16),
      blue: parseInt("" + normalizedColor[3] + normalizedColor[3], 16),
      alpha: _alpha,
    };
  }
  var rgbMatched = rgbRegex.exec(normalizedColor);
  if (rgbMatched)
    return {
      red: parseInt("" + rgbMatched[1], 10),
      green: parseInt("" + rgbMatched[2], 10),
      blue: parseInt("" + rgbMatched[3], 10),
    };
  var rgbaMatched = rgbaRegex.exec(normalizedColor.substring(0, 50));
  if (rgbaMatched)
    return {
      red: parseInt("" + rgbaMatched[1], 10),
      green: parseInt("" + rgbaMatched[2], 10),
      blue: parseInt("" + rgbaMatched[3], 10),
      alpha:
        parseFloat("" + rgbaMatched[4]) > 1 ? parseFloat("" + rgbaMatched[4]) / 100 : parseFloat("" + rgbaMatched[4]),
    };
  var hslMatched = hslRegex.exec(normalizedColor);
  if (hslMatched) {
    var hue = parseInt("" + hslMatched[1], 10),
      saturation = parseInt("" + hslMatched[2], 10) / 100,
      lightness = parseInt("" + hslMatched[3], 10) / 100,
      rgbColorString = "rgb(" + hslToRgb(hue, saturation, lightness) + ")",
      hslRgbMatched = rgbRegex.exec(rgbColorString);
    if (!hslRgbMatched) throw new PolishedError(4, normalizedColor, rgbColorString);
    return {
      red: parseInt("" + hslRgbMatched[1], 10),
      green: parseInt("" + hslRgbMatched[2], 10),
      blue: parseInt("" + hslRgbMatched[3], 10),
    };
  }
  var hslaMatched = hslaRegex.exec(normalizedColor.substring(0, 50));
  if (hslaMatched) {
    var _hue = parseInt("" + hslaMatched[1], 10),
      _saturation = parseInt("" + hslaMatched[2], 10) / 100,
      _lightness = parseInt("" + hslaMatched[3], 10) / 100,
      _rgbColorString = "rgb(" + hslToRgb(_hue, _saturation, _lightness) + ")",
      _hslRgbMatched = rgbRegex.exec(_rgbColorString);
    if (!_hslRgbMatched) throw new PolishedError(4, normalizedColor, _rgbColorString);
    return {
      red: parseInt("" + _hslRgbMatched[1], 10),
      green: parseInt("" + _hslRgbMatched[2], 10),
      blue: parseInt("" + _hslRgbMatched[3], 10),
      alpha:
        parseFloat("" + hslaMatched[4]) > 1 ? parseFloat("" + hslaMatched[4]) / 100 : parseFloat("" + hslaMatched[4]),
    };
  }
  throw new PolishedError(5);
}
function rgbToHsl(color2) {
  var red = color2.red / 255,
    green = color2.green / 255,
    blue = color2.blue / 255,
    max = Math.max(red, green, blue),
    min = Math.min(red, green, blue),
    lightness = (max + min) / 2;
  if (max === min)
    return color2.alpha !== void 0
      ? { hue: 0, saturation: 0, lightness, alpha: color2.alpha }
      : { hue: 0, saturation: 0, lightness };
  var hue,
    delta = max - min,
    saturation = lightness > 0.5 ? delta / (2 - max - min) : delta / (max + min);
  switch (max) {
    case red:
      hue = (green - blue) / delta + (green < blue ? 6 : 0);
      break;
    case green:
      hue = (blue - red) / delta + 2;
      break;
    default:
      hue = (red - green) / delta + 4;
      break;
  }
  return (
    (hue *= 60),
    color2.alpha !== void 0 ? { hue, saturation, lightness, alpha: color2.alpha } : { hue, saturation, lightness }
  );
}
function parseToHsl(color2) {
  return rgbToHsl(parseToRgb(color2));
}
var reduceHexValue = function (value) {
    return value.length === 7 && value[1] === value[2] && value[3] === value[4] && value[5] === value[6]
      ? "#" + value[1] + value[3] + value[5]
      : value;
  },
  reduceHexValue$1 = reduceHexValue;
function numberToHex(value) {
  var hex = value.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}
function colorToHex(color2) {
  return numberToHex(Math.round(color2 * 255));
}
function convertToHex(red, green, blue) {
  return reduceHexValue$1("#" + colorToHex(red) + colorToHex(green) + colorToHex(blue));
}
function hslToHex(hue, saturation, lightness) {
  return hslToRgb(hue, saturation, lightness, convertToHex);
}
function hsl(value, saturation, lightness) {
  if (typeof value == "number" && typeof saturation == "number" && typeof lightness == "number")
    return hslToHex(value, saturation, lightness);
  if (typeof value == "object" && saturation === void 0 && lightness === void 0)
    return hslToHex(value.hue, value.saturation, value.lightness);
  throw new PolishedError(1);
}
function hsla(value, saturation, lightness, alpha) {
  if (
    typeof value == "number" &&
    typeof saturation == "number" &&
    typeof lightness == "number" &&
    typeof alpha == "number"
  )
    return alpha >= 1
      ? hslToHex(value, saturation, lightness)
      : "rgba(" + hslToRgb(value, saturation, lightness) + "," + alpha + ")";
  if (typeof value == "object" && saturation === void 0 && lightness === void 0 && alpha === void 0)
    return value.alpha >= 1
      ? hslToHex(value.hue, value.saturation, value.lightness)
      : "rgba(" + hslToRgb(value.hue, value.saturation, value.lightness) + "," + value.alpha + ")";
  throw new PolishedError(2);
}
function rgb(value, green, blue) {
  if (typeof value == "number" && typeof green == "number" && typeof blue == "number")
    return reduceHexValue$1("#" + numberToHex(value) + numberToHex(green) + numberToHex(blue));
  if (typeof value == "object" && green === void 0 && blue === void 0)
    return reduceHexValue$1("#" + numberToHex(value.red) + numberToHex(value.green) + numberToHex(value.blue));
  throw new PolishedError(6);
}
function rgba(firstValue, secondValue, thirdValue, fourthValue) {
  if (typeof firstValue == "string" && typeof secondValue == "number") {
    var rgbValue = parseToRgb(firstValue);
    return "rgba(" + rgbValue.red + "," + rgbValue.green + "," + rgbValue.blue + "," + secondValue + ")";
  } else {
    if (
      typeof firstValue == "number" &&
      typeof secondValue == "number" &&
      typeof thirdValue == "number" &&
      typeof fourthValue == "number"
    )
      return fourthValue >= 1
        ? rgb(firstValue, secondValue, thirdValue)
        : "rgba(" + firstValue + "," + secondValue + "," + thirdValue + "," + fourthValue + ")";
    if (typeof firstValue == "object" && secondValue === void 0 && thirdValue === void 0 && fourthValue === void 0)
      return firstValue.alpha >= 1
        ? rgb(firstValue.red, firstValue.green, firstValue.blue)
        : "rgba(" + firstValue.red + "," + firstValue.green + "," + firstValue.blue + "," + firstValue.alpha + ")";
  }
  throw new PolishedError(7);
}
var isRgb = function (color2) {
    return (
      typeof color2.red == "number" &&
      typeof color2.green == "number" &&
      typeof color2.blue == "number" &&
      (typeof color2.alpha != "number" || typeof color2.alpha > "u")
    );
  },
  isRgba = function (color2) {
    return (
      typeof color2.red == "number" &&
      typeof color2.green == "number" &&
      typeof color2.blue == "number" &&
      typeof color2.alpha == "number"
    );
  },
  isHsl = function (color2) {
    return (
      typeof color2.hue == "number" &&
      typeof color2.saturation == "number" &&
      typeof color2.lightness == "number" &&
      (typeof color2.alpha != "number" || typeof color2.alpha > "u")
    );
  },
  isHsla = function (color2) {
    return (
      typeof color2.hue == "number" &&
      typeof color2.saturation == "number" &&
      typeof color2.lightness == "number" &&
      typeof color2.alpha == "number"
    );
  };
function toColorString(color2) {
  if (typeof color2 != "object") throw new PolishedError(8);
  if (isRgba(color2)) return rgba(color2);
  if (isRgb(color2)) return rgb(color2);
  if (isHsla(color2)) return hsla(color2);
  if (isHsl(color2)) return hsl(color2);
  throw new PolishedError(8);
}
function curried(f, length2, acc) {
  return function () {
    var combined = acc.concat(Array.prototype.slice.call(arguments));
    return combined.length >= length2 ? f.apply(this, combined) : curried(f, length2, combined);
  };
}
function curry(f) {
  return curried(f, f.length, []);
}
function guard(lowerBoundary, upperBoundary, value) {
  return Math.max(lowerBoundary, Math.min(upperBoundary, value));
}
function darken(amount, color2) {
  if (color2 === "transparent") return color2;
  var hslColor = parseToHsl(color2);
  return toColorString(_extends({}, hslColor, { lightness: guard(0, 1, hslColor.lightness - parseFloat(amount)) }));
}
var curriedDarken = curry(darken),
  curriedDarken$1 = curriedDarken;
function lighten(amount, color2) {
  if (color2 === "transparent") return color2;
  var hslColor = parseToHsl(color2);
  return toColorString(_extends({}, hslColor, { lightness: guard(0, 1, hslColor.lightness + parseFloat(amount)) }));
}
var curriedLighten = curry(lighten),
  curriedLighten$1 = curriedLighten;
function opacify(amount, color2) {
  if (color2 === "transparent") return color2;
  var parsedColor = parseToRgb(color2),
    alpha = typeof parsedColor.alpha == "number" ? parsedColor.alpha : 1,
    colorWithAlpha = _extends({}, parsedColor, { alpha: guard(0, 1, (alpha * 100 + parseFloat(amount) * 100) / 100) });
  return rgba(colorWithAlpha);
}
var curriedOpacify = curry(opacify),
  curriedOpacify$1 = curriedOpacify;
function transparentize(amount, color2) {
  if (color2 === "transparent") return color2;
  var parsedColor = parseToRgb(color2),
    alpha = typeof parsedColor.alpha == "number" ? parsedColor.alpha : 1,
    colorWithAlpha = _extends({}, parsedColor, {
      alpha: guard(0, 1, +(alpha * 100 - parseFloat(amount) * 100).toFixed(2) / 100),
    });
  return rgba(colorWithAlpha);
}
var curriedTransparentize = curry(transparentize),
  curriedTransparentize$1 = curriedTransparentize,
  color = {
    primary: "#FF4785",
    secondary: "#029CFD",
    tertiary: "#FAFBFC",
    ancillary: "#22a699",
    orange: "#FC521F",
    gold: "#FFAE00",
    green: "#66BF3C",
    seafoam: "#37D5D3",
    purple: "#6F2CAC",
    ultraviolet: "#2A0481",
    lightest: "#FFFFFF",
    lighter: "#F7FAFC",
    light: "#EEF3F6",
    mediumlight: "#ECF4F9",
    medium: "#D9E8F2",
    mediumdark: "#73828C",
    dark: "#5C6870",
    darker: "#454E54",
    darkest: "#2E3438",
    border: "hsla(203, 50%, 30%, 0.15)",
    positive: "#66BF3C",
    negative: "#FF4400",
    warning: "#E69D00",
    critical: "#FFFFFF",
    defaultText: "#2E3438",
    inverseText: "#FFFFFF",
    positiveText: "#448028",
    negativeText: "#D43900",
    warningText: "#A15C20",
  },
  background = {
    app: "#F6F9FC",
    bar: color.lightest,
    content: color.lightest,
    gridCellSize: 10,
    hoverable: curriedTransparentize$1(0.93, color.secondary),
    positive: "#E1FFD4",
    negative: "#FEDED2",
    warning: "#FFF5CF",
    critical: "#FF4400",
  },
  typography = {
    fonts: {
      base: [
        '"Nunito Sans"',
        "-apple-system",
        '".SFNSText-Regular"',
        '"San Francisco"',
        "BlinkMacSystemFont",
        '"Segoe UI"',
        '"Helvetica Neue"',
        "Helvetica",
        "Arial",
        "sans-serif",
      ].join(", "),
      mono: [
        "ui-monospace",
        "Menlo",
        "Monaco",
        '"Roboto Mono"',
        '"Oxygen Mono"',
        '"Ubuntu Monospace"',
        '"Source Code Pro"',
        '"Droid Sans Mono"',
        '"Courier New"',
        "monospace",
      ].join(", "),
    },
    weight: { regular: 400, bold: 700 },
    size: { s1: 12, s2: 14, s3: 16, m1: 20, m2: 24, m3: 28, l1: 32, l2: 40, l3: 48, code: 90 },
  },
  theme = {
    base: "light",
    colorPrimary: "#FF4785",
    colorSecondary: "#029CFD",
    appBg: background.app,
    appContentBg: color.lightest,
    appBorderColor: color.border,
    appBorderRadius: 4,
    fontBase: typography.fonts.base,
    fontCode: typography.fonts.mono,
    textColor: color.darkest,
    textInverseColor: color.lightest,
    textMutedColor: color.mediumdark,
    barTextColor: color.mediumdark,
    barSelectedColor: color.secondary,
    barBg: color.lightest,
    buttonBg: background.app,
    buttonBorder: color.medium,
    booleanBg: color.mediumlight,
    booleanSelectedBg: color.lightest,
    inputBg: color.lightest,
    inputBorder: color.border,
    inputTextColor: color.darkest,
    inputBorderRadius: 4,
  },
  light_default = theme,
  theme2 = {
    base: "dark",
    colorPrimary: "#FF4785",
    colorSecondary: "#029CFD",
    appBg: "#222425",
    appContentBg: "#1B1C1D",
    appBorderColor: "rgba(255,255,255,.1)",
    appBorderRadius: 4,
    fontBase: typography.fonts.base,
    fontCode: typography.fonts.mono,
    textColor: "#C9CDCF",
    textInverseColor: "#222425",
    textMutedColor: "#798186",
    barTextColor: "#798186",
    barSelectedColor: color.secondary,
    barBg: "#292C2E",
    buttonBg: "#222425",
    buttonBorder: "rgba(255,255,255,.1)",
    booleanBg: "#222425",
    booleanSelectedBg: "#2E3438",
    inputBg: "#1B1C1D",
    inputBorder: "rgba(255,255,255,.1)",
    inputTextColor: color.lightest,
    inputBorderRadius: 4,
  },
  dark_default = theme2,
  { window: globalWindow } = scope,
  mkColor = (color2) => ({ color: color2 }),
  isColorString = (color2) =>
    typeof color2 != "string"
      ? (logger.warn(
          `Color passed to theme object should be a string. Instead ${color2}(${typeof color2}) was passed.`
        ),
        !1)
      : !0,
  isValidColorForPolished = (color2) => !/(gradient|var|calc)/.test(color2),
  applyPolished = (type, color2) =>
    type === "darken"
      ? rgba(`${curriedDarken$1(1, color2)}`, 0.95)
      : type === "lighten"
      ? rgba(`${curriedLighten$1(1, color2)}`, 0.95)
      : color2,
  colorFactory = (type) => (color2) => {
    if (!isColorString(color2) || !isValidColorForPolished(color2)) return color2;
    try {
      return applyPolished(type, color2);
    } catch {
      return color2;
    }
  },
  lightenColor = colorFactory("lighten"),
  darkenColor = colorFactory("darken"),
  getPreferredColorScheme = () =>
    !globalWindow || !globalWindow.matchMedia
      ? "light"
      : globalWindow.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light",
  themes = { light: light_default, dark: dark_default, normal: light_default },
  preferredColorScheme = getPreferredColorScheme(),
  create = (vars = { base: preferredColorScheme }, rest) => {
    let inherit = {
      ...themes[preferredColorScheme],
      ...(themes[vars.base] || {}),
      ...vars,
      base: themes[vars.base] ? vars.base : preferredColorScheme,
    };
    return { ...rest, ...inherit, barSelectedColor: vars.barSelectedColor || inherit.colorSecondary };
  };
var import_react2 = __toESM(require_react(), 1);
var React = __toESM(require_react()),
  import_react = __toESM(require_react()),
  syncFallback = function (create3) {
    return create3();
  },
  useInsertionEffect2 = React.useInsertionEffect ? React.useInsertionEffect : !1,
  useInsertionEffectAlwaysWithSyncFallback = useInsertionEffect2 || syncFallback,
  useInsertionEffectWithLayoutFallback = useInsertionEffect2 || import_react.useLayoutEffect;
var import_memoizerific = __toESM(require_memoizerific(), 1);
var require_react_is_development = __commonJS({
    "../../node_modules/react-is/cjs/react-is.development.js"(exports) {
      (function () {
        var hasSymbol = typeof Symbol == "function" && Symbol.for,
          REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103,
          REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106,
          REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107,
          REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108,
          REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114,
          REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109,
          REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110,
          REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for("react.async_mode") : 60111,
          REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111,
          REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112,
          REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113,
          REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120,
          REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115,
          REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116,
          REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121,
          REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117,
          REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118,
          REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119;
        function isValidElementType(type) {
          return (
            typeof type == "string" ||
            typeof type == "function" ||
            type === REACT_FRAGMENT_TYPE ||
            type === REACT_CONCURRENT_MODE_TYPE ||
            type === REACT_PROFILER_TYPE ||
            type === REACT_STRICT_MODE_TYPE ||
            type === REACT_SUSPENSE_TYPE ||
            type === REACT_SUSPENSE_LIST_TYPE ||
            (typeof type == "object" &&
              type !== null &&
              (type.$$typeof === REACT_LAZY_TYPE ||
                type.$$typeof === REACT_MEMO_TYPE ||
                type.$$typeof === REACT_PROVIDER_TYPE ||
                type.$$typeof === REACT_CONTEXT_TYPE ||
                type.$$typeof === REACT_FORWARD_REF_TYPE ||
                type.$$typeof === REACT_FUNDAMENTAL_TYPE ||
                type.$$typeof === REACT_RESPONDER_TYPE ||
                type.$$typeof === REACT_SCOPE_TYPE ||
                type.$$typeof === REACT_BLOCK_TYPE))
          );
        }
        function typeOf(object) {
          if (typeof object == "object" && object !== null) {
            var $$typeof = object.$$typeof;
            switch ($$typeof) {
              case REACT_ELEMENT_TYPE:
                var type = object.type;
                switch (type) {
                  case REACT_ASYNC_MODE_TYPE:
                  case REACT_CONCURRENT_MODE_TYPE:
                  case REACT_FRAGMENT_TYPE:
                  case REACT_PROFILER_TYPE:
                  case REACT_STRICT_MODE_TYPE:
                  case REACT_SUSPENSE_TYPE:
                    return type;
                  default:
                    var $$typeofType = type && type.$$typeof;
                    switch ($$typeofType) {
                      case REACT_CONTEXT_TYPE:
                      case REACT_FORWARD_REF_TYPE:
                      case REACT_LAZY_TYPE:
                      case REACT_MEMO_TYPE:
                      case REACT_PROVIDER_TYPE:
                        return $$typeofType;
                      default:
                        return $$typeof;
                    }
                }
              case REACT_PORTAL_TYPE:
                return $$typeof;
            }
          }
        }
        var AsyncMode = REACT_ASYNC_MODE_TYPE,
          ConcurrentMode = REACT_CONCURRENT_MODE_TYPE,
          ContextConsumer = REACT_CONTEXT_TYPE,
          ContextProvider = REACT_PROVIDER_TYPE,
          Element = REACT_ELEMENT_TYPE,
          ForwardRef = REACT_FORWARD_REF_TYPE,
          Fragment4 = REACT_FRAGMENT_TYPE,
          Lazy = REACT_LAZY_TYPE,
          Memo = REACT_MEMO_TYPE,
          Portal = REACT_PORTAL_TYPE,
          Profiler = REACT_PROFILER_TYPE,
          StrictMode = REACT_STRICT_MODE_TYPE,
          Suspense = REACT_SUSPENSE_TYPE,
          hasWarnedAboutDeprecatedIsAsyncMode = !1;
        function isAsyncMode(object) {
          return (
            hasWarnedAboutDeprecatedIsAsyncMode ||
              ((hasWarnedAboutDeprecatedIsAsyncMode = !0),
              console.warn(
                "The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API."
              )),
            isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE
          );
        }
        function isConcurrentMode(object) {
          return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
        }
        function isContextConsumer(object) {
          return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
          return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement(object) {
          return typeof object == "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object) {
          return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment(object) {
          return typeOf(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object) {
          return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo(object) {
          return typeOf(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
          return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
          return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
          return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
          return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        (exports.AsyncMode = AsyncMode),
          (exports.ConcurrentMode = ConcurrentMode),
          (exports.ContextConsumer = ContextConsumer),
          (exports.ContextProvider = ContextProvider),
          (exports.Element = Element),
          (exports.ForwardRef = ForwardRef),
          (exports.Fragment = Fragment4),
          (exports.Lazy = Lazy),
          (exports.Memo = Memo),
          (exports.Portal = Portal),
          (exports.Profiler = Profiler),
          (exports.StrictMode = StrictMode),
          (exports.Suspense = Suspense),
          (exports.isAsyncMode = isAsyncMode),
          (exports.isConcurrentMode = isConcurrentMode),
          (exports.isContextConsumer = isContextConsumer),
          (exports.isContextProvider = isContextProvider),
          (exports.isElement = isElement),
          (exports.isForwardRef = isForwardRef),
          (exports.isFragment = isFragment),
          (exports.isLazy = isLazy),
          (exports.isMemo = isMemo),
          (exports.isPortal = isPortal),
          (exports.isProfiler = isProfiler),
          (exports.isStrictMode = isStrictMode),
          (exports.isSuspense = isSuspense),
          (exports.isValidElementType = isValidElementType),
          (exports.typeOf = typeOf);
      })();
    },
  }),
  require_react_is = __commonJS({
    "../../node_modules/react-is/index.js"(exports, module) {
      module.exports = require_react_is_development();
    },
  }),
  require_hoist_non_react_statics_cjs = __commonJS({
    "../../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"(exports, module) {
      var reactIs = require_react_is(),
        REACT_STATICS = {
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
        KNOWN_STATICS = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 },
        FORWARD_REF_STATICS = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 },
        MEMO_STATICS = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 },
        TYPE_STATICS = {};
      (TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS), (TYPE_STATICS[reactIs.Memo] = MEMO_STATICS);
      function getStatics(component) {
        return reactIs.isMemo(component) ? MEMO_STATICS : TYPE_STATICS[component.$$typeof] || REACT_STATICS;
      }
      var defineProperty = Object.defineProperty,
        getOwnPropertyNames = Object.getOwnPropertyNames,
        getOwnPropertySymbols = Object.getOwnPropertySymbols,
        getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor,
        getPrototypeOf = Object.getPrototypeOf,
        objectPrototype = Object.prototype;
      function hoistNonReactStatics2(targetComponent, sourceComponent, blacklist) {
        if (typeof sourceComponent != "string") {
          if (objectPrototype) {
            var inheritedComponent = getPrototypeOf(sourceComponent);
            inheritedComponent &&
              inheritedComponent !== objectPrototype &&
              hoistNonReactStatics2(targetComponent, inheritedComponent, blacklist);
          }
          var keys = getOwnPropertyNames(sourceComponent);
          getOwnPropertySymbols && (keys = keys.concat(getOwnPropertySymbols(sourceComponent)));
          for (
            var targetStatics = getStatics(targetComponent), sourceStatics = getStatics(sourceComponent), i = 0;
            i < keys.length;
            ++i
          ) {
            var key = keys[i];
            if (
              !KNOWN_STATICS[key] &&
              !(blacklist && blacklist[key]) &&
              !(sourceStatics && sourceStatics[key]) &&
              !(targetStatics && targetStatics[key])
            ) {
              var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
              try {
                defineProperty(targetComponent, key, descriptor);
              } catch {}
            }
          }
        }
        return targetComponent;
      }
      module.exports = hoistNonReactStatics2;
    },
  });
function memoize(fn) {
  var cache = Object.create(null);
  return function (arg) {
    return cache[arg] === void 0 && (cache[arg] = fn(arg)), cache[arg];
  };
}
var emotion_memoize_esm_default = memoize,
  reactPropsRegex =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|isLoading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  isPropValid = emotion_memoize_esm_default(function (prop) {
    return (
      reactPropsRegex.test(prop) ||
      (prop.charCodeAt(0) === 111 && prop.charCodeAt(1) === 110 && prop.charCodeAt(2) < 91)
    );
  }),
  emotion_is_prop_valid_esm_default = isPropValid;
function sheetForTag(tag) {
  if (tag.sheet) return tag.sheet;
  for (var i = 0; i < document.styleSheets.length; i++)
    if (document.styleSheets[i].ownerNode === tag) return document.styleSheets[i];
}
function createStyleElement(options) {
  var tag = document.createElement("style");
  return (
    tag.setAttribute("data-emotion", options.key),
    options.nonce !== void 0 && tag.setAttribute("nonce", options.nonce),
    tag.appendChild(document.createTextNode("")),
    tag.setAttribute("data-s", ""),
    tag
  );
}
var StyleSheet = (function () {
    function StyleSheet2(options) {
      var _this = this;
      (this._insertTag = function (tag) {
        var before;
        _this.tags.length === 0
          ? _this.insertionPoint
            ? (before = _this.insertionPoint.nextSibling)
            : _this.prepend
            ? (before = _this.container.firstChild)
            : (before = _this.before)
          : (before = _this.tags[_this.tags.length - 1].nextSibling),
          _this.container.insertBefore(tag, before),
          _this.tags.push(tag);
      }),
        (this.isSpeedy = options.speedy === void 0 ? !1 : options.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = options.nonce),
        (this.key = options.key),
        (this.container = options.container),
        (this.prepend = options.prepend),
        (this.insertionPoint = options.insertionPoint),
        (this.before = null);
    }
    var _proto = StyleSheet2.prototype;
    return (
      (_proto.hydrate = function (nodes) {
        nodes.forEach(this._insertTag);
      }),
      (_proto.insert = function (rule) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(createStyleElement(this));
        var tag = this.tags[this.tags.length - 1],
          isImportRule3 = rule.charCodeAt(0) === 64 && rule.charCodeAt(1) === 105;
        if (
          (isImportRule3 &&
            this._alreadyInsertedOrderInsensitiveRule &&
            console.error(
              `You're attempting to insert the following rule:
` +
                rule +
                "\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules."
            ),
          (this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule || !isImportRule3),
          this.isSpeedy)
        ) {
          var sheet = sheetForTag(tag);
          try {
            sheet.insertRule(rule, sheet.cssRules.length);
          } catch (e) {
            /:(-moz-placeholder|-moz-focus-inner|-moz-focusring|-ms-input-placeholder|-moz-read-write|-moz-read-only|-ms-clear|-ms-expand|-ms-reveal){/.test(
              rule
            ) || console.error('There was a problem inserting the following rule: "' + rule + '"', e);
          }
        } else tag.appendChild(document.createTextNode(rule));
        this.ctr++;
      }),
      (_proto.flush = function () {
        this.tags.forEach(function (tag) {
          return tag.parentNode && tag.parentNode.removeChild(tag);
        }),
          (this.tags = []),
          (this.ctr = 0),
          (this._alreadyInsertedOrderInsensitiveRule = !1);
      }),
      StyleSheet2
    );
  })(),
  MS = "-ms-",
  MOZ = "-moz-",
  WEBKIT = "-webkit-",
  COMMENT = "comm",
  RULESET = "rule",
  DECLARATION = "decl",
  IMPORT = "@import",
  KEYFRAMES = "@keyframes",
  abs = Math.abs,
  from = String.fromCharCode,
  assign = Object.assign;
function hash(value, length2) {
  return charat(value, 0) ^ 45
    ? (((((((length2 << 2) ^ charat(value, 0)) << 2) ^ charat(value, 1)) << 2) ^ charat(value, 2)) << 2) ^
        charat(value, 3)
    : 0;
}
function trim(value) {
  return value.trim();
}
function match(value, pattern) {
  return (value = pattern.exec(value)) ? value[0] : value;
}
function replace(value, pattern, replacement) {
  return value.replace(pattern, replacement);
}
function indexof(value, search) {
  return value.indexOf(search);
}
function charat(value, index) {
  return value.charCodeAt(index) | 0;
}
function substr(value, begin, end) {
  return value.slice(begin, end);
}
function strlen(value) {
  return value.length;
}
function sizeof(value) {
  return value.length;
}
function append(value, array) {
  return array.push(value), value;
}
function combine(array, callback) {
  return array.map(callback).join("");
}
var line = 1,
  column = 1,
  length = 0,
  position = 0,
  character = 0,
  characters = "";
function node(value, root, parent, type, props, children, length2) {
  return { value, root, parent, type, props, children, line, column, length: length2, return: "" };
}
function copy(root, props) {
  return assign(node("", null, null, "", null, null, 0), root, { length: -root.length }, props);
}
function char() {
  return character;
}
function prev() {
  return (
    (character = position > 0 ? charat(characters, --position) : 0),
    column--,
    character === 10 && ((column = 1), line--),
    character
  );
}
function next() {
  return (
    (character = position < length ? charat(characters, position++) : 0),
    column++,
    character === 10 && ((column = 1), line++),
    character
  );
}
function peek() {
  return charat(characters, position);
}
function caret() {
  return position;
}
function slice(begin, end) {
  return substr(characters, begin, end);
}
function token(type) {
  switch (type) {
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
function alloc(value) {
  return (line = column = 1), (length = strlen((characters = value))), (position = 0), [];
}
function dealloc(value) {
  return (characters = ""), value;
}
function delimit(type) {
  return trim(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)));
}
function whitespace(type) {
  for (; (character = peek()) && character < 33; ) next();
  return token(type) > 2 || token(character) > 3 ? "" : " ";
}
function escaping(index, count) {
  for (
    ;
    --count &&
    next() &&
    !(character < 48 || character > 102 || (character > 57 && character < 65) || (character > 70 && character < 97));

  );
  return slice(index, caret() + (count < 6 && peek() == 32 && next() == 32));
}
function delimiter(type) {
  for (; next(); )
    switch (character) {
      case type:
        return position;
      case 34:
      case 39:
        type !== 34 && type !== 39 && delimiter(character);
        break;
      case 40:
        type === 41 && delimiter(type);
        break;
      case 92:
        next();
        break;
    }
  return position;
}
function commenter(type, index) {
  for (; next() && type + character !== 47 + 10 && !(type + character === 42 + 42 && peek() === 47); );
  return "/*" + slice(index, position - 1) + "*" + from(type === 47 ? type : next());
}
function identifier(index) {
  for (; !token(peek()); ) next();
  return slice(index, position);
}
function compile(value) {
  return dealloc(parse("", null, null, null, [""], (value = alloc(value)), 0, [0], value));
}
function parse(value, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
  for (
    var index = 0,
      offset = 0,
      length2 = pseudo,
      atrule = 0,
      property = 0,
      previous = 0,
      variable = 1,
      scanning = 1,
      ampersand = 1,
      character2 = 0,
      type = "",
      props = rules,
      children = rulesets,
      reference = rule,
      characters2 = type;
    scanning;

  )
    switch (((previous = character2), (character2 = next()))) {
      case 40:
        if (previous != 108 && charat(characters2, length2 - 1) == 58) {
          indexof((characters2 += replace(delimit(character2), "&", "&\f")), "&\f") != -1 && (ampersand = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        characters2 += delimit(character2);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        characters2 += whitespace(previous);
        break;
      case 92:
        characters2 += escaping(caret() - 1, 7);
        continue;
      case 47:
        switch (peek()) {
          case 42:
          case 47:
            append(comment(commenter(next(), caret()), root, parent), declarations);
            break;
          default:
            characters2 += "/";
        }
        break;
      case 123 * variable:
        points[index++] = strlen(characters2) * ampersand;
      case 125 * variable:
      case 59:
      case 0:
        switch (character2) {
          case 0:
          case 125:
            scanning = 0;
          case 59 + offset:
            property > 0 &&
              strlen(characters2) - length2 &&
              append(
                property > 32
                  ? declaration(characters2 + ";", rule, parent, length2 - 1)
                  : declaration(replace(characters2, " ", "") + ";", rule, parent, length2 - 2),
                declarations
              );
            break;
          case 59:
            characters2 += ";";
          default:
            if (
              (append(
                (reference = ruleset(
                  characters2,
                  root,
                  parent,
                  index,
                  offset,
                  rules,
                  points,
                  type,
                  (props = []),
                  (children = []),
                  length2
                )),
                rulesets
              ),
              character2 === 123)
            )
              if (offset === 0)
                parse(characters2, root, reference, reference, props, rulesets, length2, points, children);
              else
                switch (atrule === 99 && charat(characters2, 3) === 110 ? 100 : atrule) {
                  case 100:
                  case 109:
                  case 115:
                    parse(
                      value,
                      reference,
                      reference,
                      rule &&
                        append(
                          ruleset(value, reference, reference, 0, 0, rules, points, type, rules, (props = []), length2),
                          children
                        ),
                      rules,
                      children,
                      length2,
                      points,
                      rule ? props : children
                    );
                    break;
                  default:
                    parse(characters2, reference, reference, reference, [""], children, 0, points, children);
                }
        }
        (index = offset = property = 0), (variable = ampersand = 1), (type = characters2 = ""), (length2 = pseudo);
        break;
      case 58:
        (length2 = 1 + strlen(characters2)), (property = previous);
      default:
        if (variable < 1) {
          if (character2 == 123) --variable;
          else if (character2 == 125 && variable++ == 0 && prev() == 125) continue;
        }
        switch (((characters2 += from(character2)), character2 * variable)) {
          case 38:
            ampersand = offset > 0 ? 1 : ((characters2 += "\f"), -1);
            break;
          case 44:
            (points[index++] = (strlen(characters2) - 1) * ampersand), (ampersand = 1);
            break;
          case 64:
            peek() === 45 && (characters2 += delimit(next())),
              (atrule = peek()),
              (offset = length2 = strlen((type = characters2 += identifier(caret())))),
              character2++;
            break;
          case 45:
            previous === 45 && strlen(characters2) == 2 && (variable = 0);
        }
    }
  return rulesets;
}
function ruleset(value, root, parent, index, offset, rules, points, type, props, children, length2) {
  for (
    var post = offset - 1, rule = offset === 0 ? rules : [""], size = sizeof(rule), i = 0, j = 0, k = 0;
    i < index;
    ++i
  )
    for (var x = 0, y = substr(value, post + 1, (post = abs((j = points[i])))), z = value; x < size; ++x)
      (z = trim(j > 0 ? rule[x] + " " + y : replace(y, /&\f/g, rule[x]))) && (props[k++] = z);
  return node(value, root, parent, offset === 0 ? RULESET : type, props, children, length2);
}
function comment(value, root, parent) {
  return node(value, root, parent, COMMENT, from(char()), substr(value, 2, -2), 0);
}
function declaration(value, root, parent, length2) {
  return node(value, root, parent, DECLARATION, substr(value, 0, length2), substr(value, length2 + 1, -1), length2);
}
function serialize(children, callback) {
  for (var output = "", length2 = sizeof(children), i = 0; i < length2; i++)
    output += callback(children[i], i, children, callback) || "";
  return output;
}
function stringify(element, index, children, callback) {
  switch (element.type) {
    case IMPORT:
    case DECLARATION:
      return (element.return = element.return || element.value);
    case COMMENT:
      return "";
    case KEYFRAMES:
      return (element.return = element.value + "{" + serialize(element.children, callback) + "}");
    case RULESET:
      element.value = element.props.join(",");
  }
  return strlen((children = serialize(element.children, callback)))
    ? (element.return = element.value + "{" + children + "}")
    : "";
}
function middleware(collection) {
  var length2 = sizeof(collection);
  return function (element, index, children, callback) {
    for (var output = "", i = 0; i < length2; i++) output += collection[i](element, index, children, callback) || "";
    return output;
  };
}
var weakMemoize = function (func) {
    var cache = new WeakMap();
    return function (arg) {
      if (cache.has(arg)) return cache.get(arg);
      var ret = func(arg);
      return cache.set(arg, ret), ret;
    };
  },
  emotion_weak_memoize_esm_default = weakMemoize,
  identifierWithPointTracking = function (begin, points, index) {
    for (
      var previous = 0, character2 = 0;
      (previous = character2),
        (character2 = peek()),
        previous === 38 && character2 === 12 && (points[index] = 1),
        !token(character2);

    )
      next();
    return slice(begin, position);
  },
  toRules = function (parsed, points) {
    var index = -1,
      character2 = 44;
    do
      switch (token(character2)) {
        case 0:
          character2 === 38 && peek() === 12 && (points[index] = 1),
            (parsed[index] += identifierWithPointTracking(position - 1, points, index));
          break;
        case 2:
          parsed[index] += delimit(character2);
          break;
        case 4:
          if (character2 === 44) {
            (parsed[++index] = peek() === 58 ? "&\f" : ""), (points[index] = parsed[index].length);
            break;
          }
        default:
          parsed[index] += from(character2);
      }
    while ((character2 = next()));
    return parsed;
  },
  getRules = function (value, points) {
    return dealloc(toRules(alloc(value), points));
  },
  fixedElements = new WeakMap(),
  compat = function (element) {
    if (!(element.type !== "rule" || !element.parent || element.length < 1)) {
      for (
        var value = element.value,
          parent = element.parent,
          isImplicitRule = element.column === parent.column && element.line === parent.line;
        parent.type !== "rule";

      )
        if (((parent = parent.parent), !parent)) return;
      if (
        !(element.props.length === 1 && value.charCodeAt(0) !== 58 && !fixedElements.get(parent)) &&
        !isImplicitRule
      ) {
        fixedElements.set(element, !0);
        for (
          var points = [], rules = getRules(value, points), parentRules = parent.props, i = 0, k = 0;
          i < rules.length;
          i++
        )
          for (var j = 0; j < parentRules.length; j++, k++)
            element.props[k] = points[i] ? rules[i].replace(/&\f/g, parentRules[j]) : parentRules[j] + " " + rules[i];
      }
    }
  },
  removeLabel = function (element) {
    if (element.type === "decl") {
      var value = element.value;
      value.charCodeAt(0) === 108 && value.charCodeAt(2) === 98 && ((element.return = ""), (element.value = ""));
    }
  },
  ignoreFlag =
    "emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason",
  isIgnoringComment = function (element) {
    return element.type === "comm" && element.children.indexOf(ignoreFlag) > -1;
  },
  createUnsafeSelectorsAlarm = function (cache) {
    return function (element, index, children) {
      if (!(element.type !== "rule" || cache.compat)) {
        var unsafePseudoClasses = element.value.match(/(:first|:nth|:nth-last)-child/g);
        if (unsafePseudoClasses) {
          for (
            var isNested = !!element.parent,
              commentContainer = isNested ? element.parent.children : children,
              i = commentContainer.length - 1;
            i >= 0;
            i--
          ) {
            var node2 = commentContainer[i];
            if (node2.line < element.line) break;
            if (node2.column < element.column) {
              if (isIgnoringComment(node2)) return;
              break;
            }
          }
          unsafePseudoClasses.forEach(function (unsafePseudoClass) {
            console.error(
              'The pseudo class "' +
                unsafePseudoClass +
                '" is potentially unsafe when doing server-side rendering. Try changing it to "' +
                unsafePseudoClass.split("-child")[0] +
                '-of-type".'
            );
          });
        }
      }
    };
  },
  isImportRule = function (element) {
    return element.type.charCodeAt(1) === 105 && element.type.charCodeAt(0) === 64;
  },
  isPrependedWithRegularRules = function (index, children) {
    for (var i = index - 1; i >= 0; i--) if (!isImportRule(children[i])) return !0;
    return !1;
  },
  nullifyElement = function (element) {
    (element.type = ""), (element.value = ""), (element.return = ""), (element.children = ""), (element.props = "");
  },
  incorrectImportAlarm = function (element, index, children) {
    isImportRule(element) &&
      (element.parent
        ? (console.error(
            "`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles."
          ),
          nullifyElement(element))
        : isPrependedWithRegularRules(index, children) &&
          (console.error(
            "`@import` rules can't be after other rules. Please put your `@import` rules before your other rules."
          ),
          nullifyElement(element)));
  };
function prefix(value, length2) {
  switch (hash(value, length2)) {
    case 5103:
      return WEBKIT + "print-" + value + value;
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
      return WEBKIT + value + value;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return WEBKIT + value + MOZ + value + MS + value + value;
    case 6828:
    case 4268:
      return WEBKIT + value + MS + value + value;
    case 6165:
      return WEBKIT + value + MS + "flex-" + value + value;
    case 5187:
      return WEBKIT + value + replace(value, /(\w+).+(:[^]+)/, WEBKIT + "box-$1$2" + MS + "flex-$1$2") + value;
    case 5443:
      return WEBKIT + value + MS + "flex-item-" + replace(value, /flex-|-self/, "") + value;
    case 4675:
      return WEBKIT + value + MS + "flex-line-pack" + replace(value, /align-content|flex-|-self/, "") + value;
    case 5548:
      return WEBKIT + value + MS + replace(value, "shrink", "negative") + value;
    case 5292:
      return WEBKIT + value + MS + replace(value, "basis", "preferred-size") + value;
    case 6060:
      return (
        WEBKIT + "box-" + replace(value, "-grow", "") + WEBKIT + value + MS + replace(value, "grow", "positive") + value
      );
    case 4554:
      return WEBKIT + replace(value, /([^-])(transform)/g, "$1" + WEBKIT + "$2") + value;
    case 6187:
      return (
        replace(replace(replace(value, /(zoom-|grab)/, WEBKIT + "$1"), /(image-set)/, WEBKIT + "$1"), value, "") + value
      );
    case 5495:
    case 3959:
      return replace(value, /(image-set\([^]*)/, WEBKIT + "$1$`$1");
    case 4968:
      return (
        replace(
          replace(value, /(.+:)(flex-)?(.*)/, WEBKIT + "box-pack:$3" + MS + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify"
        ) +
        WEBKIT +
        value +
        value
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return replace(value, /(.+)-inline(.+)/, WEBKIT + "$1$2") + value;
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
      if (strlen(value) - 1 - length2 > 6)
        switch (charat(value, length2 + 1)) {
          case 109:
            if (charat(value, length2 + 4) !== 45) break;
          case 102:
            return (
              replace(
                value,
                /(.+:)(.+)-([^]+)/,
                "$1" + WEBKIT + "$2-$3$1" + MOZ + (charat(value, length2 + 3) == 108 ? "$3" : "$2-$3")
              ) + value
            );
          case 115:
            return ~indexof(value, "stretch")
              ? prefix(replace(value, "stretch", "fill-available"), length2) + value
              : value;
        }
      break;
    case 4949:
      if (charat(value, length2 + 1) !== 115) break;
    case 6444:
      switch (charat(value, strlen(value) - 3 - (~indexof(value, "!important") && 10))) {
        case 107:
          return replace(value, ":", ":" + WEBKIT) + value;
        case 101:
          return (
            replace(
              value,
              /(.+:)([^;!]+)(;|!.+)?/,
              "$1" +
                WEBKIT +
                (charat(value, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                WEBKIT +
                "$2$3$1" +
                MS +
                "$2box$3"
            ) + value
          );
      }
      break;
    case 5936:
      switch (charat(value, length2 + 11)) {
        case 114:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "tb") + value;
        case 108:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "tb-rl") + value;
        case 45:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "lr") + value;
      }
      return WEBKIT + value + MS + value + value;
  }
  return value;
}
var prefixer = function (element, index, children, callback) {
    if (element.length > -1 && !element.return)
      switch (element.type) {
        case DECLARATION:
          element.return = prefix(element.value, element.length);
          break;
        case KEYFRAMES:
          return serialize([copy(element, { value: replace(element.value, "@", "@" + WEBKIT) })], callback);
        case RULESET:
          if (element.length)
            return combine(element.props, function (value) {
              switch (match(value, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return serialize(
                    [copy(element, { props: [replace(value, /:(read-\w+)/, ":" + MOZ + "$1")] })],
                    callback
                  );
                case "::placeholder":
                  return serialize(
                    [
                      copy(element, { props: [replace(value, /:(plac\w+)/, ":" + WEBKIT + "input-$1")] }),
                      copy(element, { props: [replace(value, /:(plac\w+)/, ":" + MOZ + "$1")] }),
                      copy(element, { props: [replace(value, /:(plac\w+)/, MS + "input-$1")] }),
                    ],
                    callback
                  );
              }
              return "";
            });
      }
  },
  defaultStylisPlugins = [prefixer],
  createCache = function (options) {
    var key = options.key;
    if (!key)
      throw new Error(`You have to configure \`key\` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.
If multiple caches share the same key they might "fight" for each other's style elements.`);
    if (key === "css") {
      var ssrStyles = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(ssrStyles, function (node2) {
        var dataEmotionAttribute = node2.getAttribute("data-emotion");
        dataEmotionAttribute.indexOf(" ") !== -1 &&
          (document.head.appendChild(node2), node2.setAttribute("data-s", ""));
      });
    }
    var stylisPlugins = options.stylisPlugins || defaultStylisPlugins;
    if (/[^a-z-]/.test(key))
      throw new Error(
        'Emotion key must only contain lower case alphabetical characters and - but "' + key + '" was passed'
      );
    var inserted = {},
      container,
      nodesToHydrate = [];
    (container = options.container || document.head),
      Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + key + ' "]'), function (node2) {
        for (var attrib = node2.getAttribute("data-emotion").split(" "), i = 1; i < attrib.length; i++)
          inserted[attrib[i]] = !0;
        nodesToHydrate.push(node2);
      });
    var _insert,
      omnipresentPlugins = [compat, removeLabel];
    omnipresentPlugins.push(
      createUnsafeSelectorsAlarm({
        get compat() {
          return cache.compat;
        },
      }),
      incorrectImportAlarm
    );
    {
      var currentSheet,
        finalizingPlugins = [
          stringify,
          function (element) {
            element.root ||
              (element.return
                ? currentSheet.insert(element.return)
                : element.value && element.type !== COMMENT && currentSheet.insert(element.value + "{}"));
          },
        ],
        serializer = middleware(omnipresentPlugins.concat(stylisPlugins, finalizingPlugins)),
        stylis = function (styles) {
          return serialize(compile(styles), serializer);
        };
      _insert = function (selector, serialized, sheet, shouldCache) {
        (currentSheet = sheet),
          serialized.map !== void 0 &&
            (currentSheet = {
              insert: function (rule) {
                sheet.insert(rule + serialized.map);
              },
            }),
          stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles),
          shouldCache && (cache.inserted[serialized.name] = !0);
      };
    }
    var cache = {
      key,
      sheet: new StyleSheet({
        key,
        container,
        nonce: options.nonce,
        speedy: options.speedy,
        prepend: options.prepend,
        insertionPoint: options.insertionPoint,
      }),
      nonce: options.nonce,
      inserted,
      registered: {},
      insert: _insert,
    };
    return cache.sheet.hydrate(nodesToHydrate), cache;
  },
  emotion_cache_browser_esm_default = createCache,
  import_hoist_non_react_statics = __toESM2(require_hoist_non_react_statics_cjs()),
  hoistNonReactStatics = function (targetComponent, sourceComponent) {
    return (0, import_hoist_non_react_statics.default)(targetComponent, sourceComponent);
  },
  emotion_react_isolated_hnrs_browser_esm_default = hoistNonReactStatics,
  isBrowser = !0;
function getRegisteredStyles(registered, registeredStyles, classNames) {
  var rawClassName = "";
  return (
    classNames.split(" ").forEach(function (className) {
      registered[className] !== void 0
        ? registeredStyles.push(registered[className] + ";")
        : (rawClassName += className + " ");
    }),
    rawClassName
  );
}
var registerStyles = function (cache, serialized, isStringTag) {
    var className = cache.key + "-" + serialized.name;
    (isStringTag === !1 || isBrowser === !1) &&
      cache.registered[className] === void 0 &&
      (cache.registered[className] = serialized.styles);
  },
  insertStyles = function (cache, serialized, isStringTag) {
    registerStyles(cache, serialized, isStringTag);
    var className = cache.key + "-" + serialized.name;
    if (cache.inserted[serialized.name] === void 0) {
      var current = serialized;
      do
        cache.insert(serialized === current ? "." + className : "", current, cache.sheet, !0), (current = current.next);
      while (current !== void 0);
    }
  };
function murmur2(str) {
  for (var h = 0, k, i = 0, len = str.length; len >= 4; ++i, len -= 4)
    (k =
      (str.charCodeAt(i) & 255) |
      ((str.charCodeAt(++i) & 255) << 8) |
      ((str.charCodeAt(++i) & 255) << 16) |
      ((str.charCodeAt(++i) & 255) << 24)),
      (k = (k & 65535) * 1540483477 + (((k >>> 16) * 59797) << 16)),
      (k ^= k >>> 24),
      (h =
        ((k & 65535) * 1540483477 + (((k >>> 16) * 59797) << 16)) ^
        ((h & 65535) * 1540483477 + (((h >>> 16) * 59797) << 16)));
  switch (len) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 255) << 16;
    case 2:
      h ^= (str.charCodeAt(i + 1) & 255) << 8;
    case 1:
      (h ^= str.charCodeAt(i) & 255), (h = (h & 65535) * 1540483477 + (((h >>> 16) * 59797) << 16));
  }
  return (
    (h ^= h >>> 13),
    (h = (h & 65535) * 1540483477 + (((h >>> 16) * 59797) << 16)),
    ((h ^ (h >>> 15)) >>> 0).toString(36)
  );
}
var emotion_hash_esm_default = murmur2,
  unitlessKeys = {
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
  emotion_unitless_esm_default = unitlessKeys,
  ILLEGAL_ESCAPE_SEQUENCE_ERROR = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`,
  UNDEFINED_AS_OBJECT_KEY_ERROR =
    "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).",
  hyphenateRegex = /[A-Z]|^ms/g,
  animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  isCustomProperty = function (property) {
    return property.charCodeAt(1) === 45;
  },
  isProcessableValue = function (value) {
    return value != null && typeof value != "boolean";
  },
  processStyleName = emotion_memoize_esm_default(function (styleName) {
    return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, "-$&").toLowerCase();
  }),
  processStyleValue = function (key, value) {
    switch (key) {
      case "animation":
      case "animationName":
        if (typeof value == "string")
          return value.replace(animationRegex, function (match2, p1, p2) {
            return (cursor = { name: p1, styles: p2, next: cursor }), p1;
          });
    }
    return emotion_unitless_esm_default[key] !== 1 && !isCustomProperty(key) && typeof value == "number" && value !== 0
      ? value + "px"
      : value;
  };
(contentValuePattern =
  /(var|attr|counters?|url|element|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/),
  (contentValues = ["normal", "none", "initial", "inherit", "unset"]),
  (oldProcessStyleValue = processStyleValue),
  (msPattern = /^-ms-/),
  (hyphenPattern = /-(.)/g),
  (hyphenatedCache = {}),
  (processStyleValue = function (key, value) {
    if (
      key === "content" &&
      (typeof value != "string" ||
        (contentValues.indexOf(value) === -1 &&
          !contentValuePattern.test(value) &&
          (value.charAt(0) !== value.charAt(value.length - 1) || (value.charAt(0) !== '"' && value.charAt(0) !== "'"))))
    )
      throw new Error(
        "You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" +
          value +
          "\"'`"
      );
    var processed = oldProcessStyleValue(key, value);
    return (
      processed !== "" &&
        !isCustomProperty(key) &&
        key.indexOf("-") !== -1 &&
        hyphenatedCache[key] === void 0 &&
        ((hyphenatedCache[key] = !0),
        console.error(
          "Using kebab-case for css properties in objects is not supported. Did you mean " +
            key.replace(msPattern, "ms-").replace(hyphenPattern, function (str, _char) {
              return _char.toUpperCase();
            }) +
            "?"
        )),
      processed
    );
  });
var contentValuePattern,
  contentValues,
  oldProcessStyleValue,
  msPattern,
  hyphenPattern,
  hyphenatedCache,
  noComponentSelectorMessage =
    "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function handleInterpolation(mergedProps, registered, interpolation) {
  if (interpolation == null) return "";
  if (interpolation.__emotion_styles !== void 0) {
    if (interpolation.toString() === "NO_COMPONENT_SELECTOR") throw new Error(noComponentSelectorMessage);
    return interpolation;
  }
  switch (typeof interpolation) {
    case "boolean":
      return "";
    case "object": {
      if (interpolation.anim === 1)
        return (cursor = { name: interpolation.name, styles: interpolation.styles, next: cursor }), interpolation.name;
      if (interpolation.styles !== void 0) {
        var next2 = interpolation.next;
        if (next2 !== void 0)
          for (; next2 !== void 0; )
            (cursor = { name: next2.name, styles: next2.styles, next: cursor }), (next2 = next2.next);
        var styles = interpolation.styles + ";";
        return interpolation.map !== void 0 && (styles += interpolation.map), styles;
      }
      return createStringFromObject(mergedProps, registered, interpolation);
    }
    case "function": {
      if (mergedProps !== void 0) {
        var previousCursor = cursor,
          result = interpolation(mergedProps);
        return (cursor = previousCursor), handleInterpolation(mergedProps, registered, result);
      } else
        console.error(
          "Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`"
        );
      break;
    }
    case "string":
      var matched = [],
        replaced = interpolation.replace(animationRegex, function (match2, p1, p2) {
          var fakeVarName = "animation" + matched.length;
          return (
            matched.push("const " + fakeVarName + " = keyframes`" + p2.replace(/^@keyframes animation-\w+/, "") + "`"),
            "${" + fakeVarName + "}"
          );
        });
      matched.length &&
        console.error(
          "`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\nInstead of doing this:\n\n" +
            [].concat(matched, ["`" + replaced + "`"]).join(`
`) +
            `

You should wrap it with \`css\` like this:

` +
            ("css`" + replaced + "`")
        );
      break;
  }
  if (registered == null) return interpolation;
  var cached = registered[interpolation];
  return cached !== void 0 ? cached : interpolation;
}
function createStringFromObject(mergedProps, registered, obj) {
  var string = "";
  if (Array.isArray(obj))
    for (var i = 0; i < obj.length; i++) string += handleInterpolation(mergedProps, registered, obj[i]) + ";";
  else
    for (var _key in obj) {
      var value = obj[_key];
      if (typeof value != "object")
        registered != null && registered[value] !== void 0
          ? (string += _key + "{" + registered[value] + "}")
          : isProcessableValue(value) &&
            (string += processStyleName(_key) + ":" + processStyleValue(_key, value) + ";");
      else {
        if (_key === "NO_COMPONENT_SELECTOR") throw new Error(noComponentSelectorMessage);
        if (
          Array.isArray(value) &&
          typeof value[0] == "string" &&
          (registered == null || registered[value[0]] === void 0)
        )
          for (var _i = 0; _i < value.length; _i++)
            isProcessableValue(value[_i]) &&
              (string += processStyleName(_key) + ":" + processStyleValue(_key, value[_i]) + ";");
        else {
          var interpolated = handleInterpolation(mergedProps, registered, value);
          switch (_key) {
            case "animation":
            case "animationName": {
              string += processStyleName(_key) + ":" + interpolated + ";";
              break;
            }
            default:
              _key === "undefined" && console.error(UNDEFINED_AS_OBJECT_KEY_ERROR),
                (string += _key + "{" + interpolated + "}");
          }
        }
      }
    }
  return string;
}
var labelPattern = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
  sourceMapPattern;
sourceMapPattern = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g;
var cursor,
  serializeStyles = function (args, registered, mergedProps) {
    if (args.length === 1 && typeof args[0] == "object" && args[0] !== null && args[0].styles !== void 0)
      return args[0];
    var stringMode = !0,
      styles = "";
    cursor = void 0;
    var strings = args[0];
    strings == null || strings.raw === void 0
      ? ((stringMode = !1), (styles += handleInterpolation(mergedProps, registered, strings)))
      : (strings[0] === void 0 && console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR), (styles += strings[0]));
    for (var i = 1; i < args.length; i++)
      (styles += handleInterpolation(mergedProps, registered, args[i])),
        stringMode && (strings[i] === void 0 && console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR), (styles += strings[i]));
    var sourceMap;
    (styles = styles.replace(sourceMapPattern, function (match3) {
      return (sourceMap = match3), "";
    })),
      (labelPattern.lastIndex = 0);
    for (var identifierName = "", match2; (match2 = labelPattern.exec(styles)) !== null; )
      identifierName += "-" + match2[1];
    var name = emotion_hash_esm_default(styles) + identifierName;
    return {
      name,
      styles,
      map: sourceMap,
      next: cursor,
      toString: function () {
        return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
      },
    };
  },
  hasOwnProperty = {}.hasOwnProperty,
  EmotionCacheContext = (0, import_react2.createContext)(
    typeof HTMLElement < "u" ? emotion_cache_browser_esm_default({ key: "css" }) : null
  );
EmotionCacheContext.displayName = "EmotionCacheContext";
var CacheProvider = EmotionCacheContext.Provider,
  withEmotionCache = function (func) {
    return (0, import_react2.forwardRef)(function (props, ref) {
      var cache = (0, import_react2.useContext)(EmotionCacheContext);
      return func(props, cache, ref);
    });
  },
  ThemeContext = (0, import_react2.createContext)({});
ThemeContext.displayName = "EmotionThemeContext";
var useTheme = function () {
    return (0, import_react2.useContext)(ThemeContext);
  },
  getTheme = function (outerTheme, theme3) {
    if (typeof theme3 == "function") {
      var mergedTheme = theme3(outerTheme);
      if (mergedTheme == null || typeof mergedTheme != "object" || Array.isArray(mergedTheme))
        throw new Error("[ThemeProvider] Please return an object from your theme function, i.e. theme={() => ({})}!");
      return mergedTheme;
    }
    if (theme3 == null || typeof theme3 != "object" || Array.isArray(theme3))
      throw new Error("[ThemeProvider] Please make your theme prop a plain object");
    return _extends({}, outerTheme, theme3);
  },
  createCacheWithTheme = emotion_weak_memoize_esm_default(function (outerTheme) {
    return emotion_weak_memoize_esm_default(function (theme3) {
      return getTheme(outerTheme, theme3);
    });
  }),
  ThemeProvider = function (props) {
    var theme3 = (0, import_react2.useContext)(ThemeContext);
    return (
      props.theme !== theme3 && (theme3 = createCacheWithTheme(theme3)(props.theme)),
      (0, import_react2.createElement)(ThemeContext.Provider, { value: theme3 }, props.children)
    );
  };
function withTheme(Component) {
  var componentName = Component.displayName || Component.name || "Component",
    render = function (props, ref) {
      var theme3 = (0, import_react2.useContext)(ThemeContext);
      return (0, import_react2.createElement)(Component, _extends({ theme: theme3, ref }, props));
    },
    WithTheme = (0, import_react2.forwardRef)(render);
  return (
    (WithTheme.displayName = "WithTheme(" + componentName + ")"),
    emotion_react_isolated_hnrs_browser_esm_default(WithTheme, Component)
  );
}
var getLastPart = function (functionName) {
    var parts = functionName.split(".");
    return parts[parts.length - 1];
  },
  getFunctionNameFromStackTraceLine = function (line2) {
    var match2 = /^\s+at\s+([A-Za-z0-9$.]+)\s/.exec(line2);
    if (match2 || ((match2 = /^([A-Za-z0-9$.]+)@/.exec(line2)), match2)) return getLastPart(match2[1]);
  },
  internalReactFunctionNames = new Set(["renderWithHooks", "processChild", "finishClassComponent", "renderToString"]),
  sanitizeIdentifier = function (identifier2) {
    return identifier2.replace(/\$/g, "-");
  },
  getLabelFromStackTrace = function (stackTrace) {
    if (stackTrace)
      for (
        var lines = stackTrace.split(`
`),
          i = 0;
        i < lines.length;
        i++
      ) {
        var functionName = getFunctionNameFromStackTraceLine(lines[i]);
        if (functionName) {
          if (internalReactFunctionNames.has(functionName)) break;
          if (/^[A-Z]/.test(functionName)) return sanitizeIdentifier(functionName);
        }
      }
  },
  typePropName = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__",
  labelPropName = "__EMOTION_LABEL_PLEASE_DO_NOT_USE__",
  createEmotionProps = function (type, props) {
    if (typeof props.css == "string" && props.css.indexOf(":") !== -1)
      throw new Error(
        "Strings are not allowed as css prop values, please wrap it in a css template literal from '@emotion/react' like this: css`" +
          props.css +
          "`"
      );
    var newProps = {};
    for (var key in props) hasOwnProperty.call(props, key) && (newProps[key] = props[key]);
    if (
      ((newProps[typePropName] = type),
      props.css &&
        (typeof props.css != "object" || typeof props.css.name != "string" || props.css.name.indexOf("-") === -1))
    ) {
      var label = getLabelFromStackTrace(new Error().stack);
      label && (newProps[labelPropName] = label);
    }
    return newProps;
  },
  Insertion = function (_ref) {
    var cache = _ref.cache,
      serialized = _ref.serialized,
      isStringTag = _ref.isStringTag;
    return (
      registerStyles(cache, serialized, isStringTag),
      useInsertionEffectAlwaysWithSyncFallback(function () {
        return insertStyles(cache, serialized, isStringTag);
      }),
      null
    );
  },
  Emotion = withEmotionCache(function (props, cache, ref) {
    var cssProp = props.css;
    typeof cssProp == "string" && cache.registered[cssProp] !== void 0 && (cssProp = cache.registered[cssProp]);
    var WrappedComponent = props[typePropName],
      registeredStyles = [cssProp],
      className = "";
    typeof props.className == "string"
      ? (className = getRegisteredStyles(cache.registered, registeredStyles, props.className))
      : props.className != null && (className = props.className + " ");
    var serialized = serializeStyles(registeredStyles, void 0, (0, import_react2.useContext)(ThemeContext));
    if (serialized.name.indexOf("-") === -1) {
      var labelFromStack = props[labelPropName];
      labelFromStack && (serialized = serializeStyles([serialized, "label:" + labelFromStack + ";"]));
    }
    className += cache.key + "-" + serialized.name;
    var newProps = {};
    for (var key in props)
      hasOwnProperty.call(props, key) &&
        key !== "css" &&
        key !== typePropName &&
        key !== labelPropName &&
        (newProps[key] = props[key]);
    return (
      (newProps.ref = ref),
      (newProps.className = className),
      (0, import_react2.createElement)(
        import_react2.Fragment,
        null,
        (0, import_react2.createElement)(Insertion, {
          cache,
          serialized,
          isStringTag: typeof WrappedComponent == "string",
        }),
        (0, import_react2.createElement)(WrappedComponent, newProps)
      )
    );
  });
Emotion.displayName = "EmotionCssPropInternal";
__toESM2(require_hoist_non_react_statics_cjs());
var pkg = {
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
  jsx = function (type, props) {
    var args = arguments;
    if (props == null || !hasOwnProperty.call(props, "css")) return import_react2.createElement.apply(void 0, args);
    var argsLength = args.length,
      createElementArgArray = new Array(argsLength);
    (createElementArgArray[0] = Emotion), (createElementArgArray[1] = createEmotionProps(type, props));
    for (var i = 2; i < argsLength; i++) createElementArgArray[i] = args[i];
    return import_react2.createElement.apply(null, createElementArgArray);
  },
  warnedAboutCssPropForGlobal = !1,
  Global = withEmotionCache(function (props, cache) {
    !warnedAboutCssPropForGlobal &&
      (props.className || props.css) &&
      (console.error("It looks like you're using the css prop on Global, did you mean to use the styles prop instead?"),
      (warnedAboutCssPropForGlobal = !0));
    var styles = props.styles,
      serialized = serializeStyles([styles], void 0, (0, import_react2.useContext)(ThemeContext)),
      sheetRef = (0, import_react2.useRef)();
    return (
      useInsertionEffectWithLayoutFallback(
        function () {
          var key = cache.key + "-global",
            sheet = new cache.sheet.constructor({
              key,
              nonce: cache.sheet.nonce,
              container: cache.sheet.container,
              speedy: cache.sheet.isSpeedy,
            }),
            rehydrating = !1,
            node2 = document.querySelector('style[data-emotion="' + key + " " + serialized.name + '"]');
          return (
            cache.sheet.tags.length && (sheet.before = cache.sheet.tags[0]),
            node2 !== null && ((rehydrating = !0), node2.setAttribute("data-emotion", key), sheet.hydrate([node2])),
            (sheetRef.current = [sheet, rehydrating]),
            function () {
              sheet.flush();
            }
          );
        },
        [cache]
      ),
      useInsertionEffectWithLayoutFallback(
        function () {
          var sheetRefCurrent = sheetRef.current,
            sheet = sheetRefCurrent[0],
            rehydrating = sheetRefCurrent[1];
          if (rehydrating) {
            sheetRefCurrent[1] = !1;
            return;
          }
          if ((serialized.next !== void 0 && insertStyles(cache, serialized.next, !0), sheet.tags.length)) {
            var element = sheet.tags[sheet.tags.length - 1].nextElementSibling;
            (sheet.before = element), sheet.flush();
          }
          cache.insert("", serialized, sheet, !1);
        },
        [cache, serialized.name]
      ),
      null
    );
  });
Global.displayName = "EmotionGlobal";
function css() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
  return serializeStyles(args);
}
var keyframes = function () {
    var insertable = css.apply(void 0, arguments),
      name = "animation-" + insertable.name;
    return {
      name,
      styles: "@keyframes " + name + "{" + insertable.styles + "}",
      anim: 1,
      toString: function () {
        return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
      },
    };
  },
  classnames = function classnames2(args) {
    for (var len = args.length, i = 0, cls = ""; i < len; i++) {
      var arg = args[i];
      if (arg != null) {
        var toAdd = void 0;
        switch (typeof arg) {
          case "boolean":
            break;
          case "object": {
            if (Array.isArray(arg)) toAdd = classnames2(arg);
            else {
              arg.styles !== void 0 &&
                arg.name !== void 0 &&
                console.error(
                  "You have passed styles created with `css` from `@emotion/react` package to the `cx`.\n`cx` is meant to compose class names (strings) so you should convert those styles to a class name by passing them to the `css` received from <ClassNames/> component."
                ),
                (toAdd = "");
              for (var k in arg) arg[k] && k && (toAdd && (toAdd += " "), (toAdd += k));
            }
            break;
          }
          default:
            toAdd = arg;
        }
        toAdd && (cls && (cls += " "), (cls += toAdd));
      }
    }
    return cls;
  };
function merge(registered, css2, className) {
  var registeredStyles = [],
    rawClassName = getRegisteredStyles(registered, registeredStyles, className);
  return registeredStyles.length < 2 ? className : rawClassName + css2(registeredStyles);
}
var Insertion3 = function (_ref) {
    var cache = _ref.cache,
      serializedArr = _ref.serializedArr;
    return (
      useInsertionEffectAlwaysWithSyncFallback(function () {
        for (var i = 0; i < serializedArr.length; i++) var res = insertStyles(cache, serializedArr[i], !1);
      }),
      null
    );
  },
  ClassNames = withEmotionCache(function (props, cache) {
    var hasRendered = !1,
      serializedArr = [],
      css2 = function () {
        if (hasRendered) throw new Error("css can only be used during render");
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)
          args[_key] = arguments[_key];
        var serialized = serializeStyles(args, cache.registered);
        return serializedArr.push(serialized), registerStyles(cache, serialized, !1), cache.key + "-" + serialized.name;
      },
      cx = function () {
        if (hasRendered) throw new Error("cx can only be used during render");
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++)
          args[_key2] = arguments[_key2];
        return merge(cache.registered, css2, classnames(args));
      },
      content = { css: css2, cx, theme: (0, import_react2.useContext)(ThemeContext) },
      ele = props.children(content);
    return (
      (hasRendered = !0),
      (0, import_react2.createElement)(
        import_react2.Fragment,
        null,
        (0, import_react2.createElement)(Insertion3, { cache, serializedArr }),
        ele
      )
    );
  });
ClassNames.displayName = "EmotionClassNames";
(isBrowser2 = !0),
  (isTestEnv = typeof jest < "u" || typeof vi < "u"),
  isBrowser2 &&
    !isTestEnv &&
    ((globalContext = typeof globalThis < "u" ? globalThis : isBrowser2 ? window : global),
    (globalKey = "__EMOTION_REACT_" + pkg.version.split(".")[0] + "__"),
    globalContext[globalKey] &&
      console.warn(
        "You are isLoading @emotion/react when it is already loaded. Running multiple instances may cause problems. This can happen if multiple versions are used, or if multiple builds of the same version are used."
      ),
    (globalContext[globalKey] = !0));
var isBrowser2,
  isTestEnv,
  globalContext,
  globalKey,
  testOmitPropsOnStringTag = emotion_is_prop_valid_esm_default,
  testOmitPropsOnComponent = function (key) {
    return key !== "theme";
  },
  getDefaultShouldForwardProp = function (tag) {
    return typeof tag == "string" && tag.charCodeAt(0) > 96 ? testOmitPropsOnStringTag : testOmitPropsOnComponent;
  },
  composeShouldForwardProps = function (tag, options, isReal) {
    var shouldForwardProp;
    if (options) {
      var optionsShouldForwardProp = options.shouldForwardProp;
      shouldForwardProp =
        tag.__emotion_forwardProp && optionsShouldForwardProp
          ? function (propName) {
              return tag.__emotion_forwardProp(propName) && optionsShouldForwardProp(propName);
            }
          : optionsShouldForwardProp;
    }
    return (
      typeof shouldForwardProp != "function" && isReal && (shouldForwardProp = tag.__emotion_forwardProp),
      shouldForwardProp
    );
  },
  ILLEGAL_ESCAPE_SEQUENCE_ERROR2 = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`,
  Insertion5 = function (_ref) {
    var cache = _ref.cache,
      serialized = _ref.serialized,
      isStringTag = _ref.isStringTag;
    return (
      registerStyles(cache, serialized, isStringTag),
      useInsertionEffectAlwaysWithSyncFallback(function () {
        return insertStyles(cache, serialized, isStringTag);
      }),
      null
    );
  },
  createStyled = function createStyled2(tag, options) {
    if (tag === void 0)
      throw new Error(`You are trying to create a styled element with an undefined component.
You may have forgotten to import it.`);
    var isReal = tag.__emotion_real === tag,
      baseTag = (isReal && tag.__emotion_base) || tag,
      identifierName,
      targetClassName;
    options !== void 0 && ((identifierName = options.label), (targetClassName = options.target));
    var shouldForwardProp = composeShouldForwardProps(tag, options, isReal),
      defaultShouldForwardProp = shouldForwardProp || getDefaultShouldForwardProp(baseTag),
      shouldUseAs = !defaultShouldForwardProp("as");
    return function () {
      var args = arguments,
        styles = isReal && tag.__emotion_styles !== void 0 ? tag.__emotion_styles.slice(0) : [];
      if (
        (identifierName !== void 0 && styles.push("label:" + identifierName + ";"),
        args[0] == null || args[0].raw === void 0)
      )
        styles.push.apply(styles, args);
      else {
        args[0][0] === void 0 && console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR2), styles.push(args[0][0]);
        for (var len = args.length, i = 1; i < len; i++)
          args[0][i] === void 0 && console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR2), styles.push(args[i], args[0][i]);
      }
      var Styled = withEmotionCache(function (props, cache, ref) {
        var FinalTag = (shouldUseAs && props.as) || baseTag,
          className = "",
          classInterpolations = [],
          mergedProps = props;
        if (props.theme == null) {
          mergedProps = {};
          for (var key in props) mergedProps[key] = props[key];
          mergedProps.theme = (0, import_react2.useContext)(ThemeContext);
        }
        typeof props.className == "string"
          ? (className = getRegisteredStyles(cache.registered, classInterpolations, props.className))
          : props.className != null && (className = props.className + " ");
        var serialized = serializeStyles(styles.concat(classInterpolations), cache.registered, mergedProps);
        (className += cache.key + "-" + serialized.name),
          targetClassName !== void 0 && (className += " " + targetClassName);
        var finalShouldForwardProp =
            shouldUseAs && shouldForwardProp === void 0
              ? getDefaultShouldForwardProp(FinalTag)
              : defaultShouldForwardProp,
          newProps = {};
        for (var _key in props)
          (shouldUseAs && _key === "as") || (finalShouldForwardProp(_key) && (newProps[_key] = props[_key]));
        return (
          (newProps.className = className),
          (newProps.ref = ref),
          (0, import_react2.createElement)(
            import_react2.Fragment,
            null,
            (0, import_react2.createElement)(Insertion5, {
              cache,
              serialized,
              isStringTag: typeof FinalTag == "string",
            }),
            (0, import_react2.createElement)(FinalTag, newProps)
          )
        );
      });
      return (
        (Styled.displayName =
          identifierName !== void 0
            ? identifierName
            : "Styled(" +
              (typeof baseTag == "string" ? baseTag : baseTag.displayName || baseTag.name || "Component") +
              ")"),
        (Styled.defaultProps = tag.defaultProps),
        (Styled.__emotion_real = Styled),
        (Styled.__emotion_base = baseTag),
        (Styled.__emotion_styles = styles),
        (Styled.__emotion_forwardProp = shouldForwardProp),
        Object.defineProperty(Styled, "toString", {
          value: function () {
            return targetClassName === void 0 ? "NO_COMPONENT_SELECTOR" : "." + targetClassName;
          },
        }),
        (Styled.withComponent = function (nextTag, nextOptions) {
          return createStyled2(
            nextTag,
            _extends({}, options, nextOptions, {
              shouldForwardProp: composeShouldForwardProps(Styled, nextOptions, !0),
            })
          ).apply(void 0, styles);
        }),
        Styled
      );
    };
  },
  emotion_styled_base_browser_esm_default = createStyled,
  tags = [
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
  newStyled = emotion_styled_base_browser_esm_default.bind();
tags.forEach(function (tagName) {
  newStyled[tagName] = newStyled(tagName);
});
var emotion_styled_browser_esm_default = newStyled,
  createReset = (0, import_memoizerific.default)(1)(({ typography: typography2 }) => ({
    body: {
      fontFamily: typography2.fonts.base,
      fontSize: typography2.size.s3,
      margin: 0,
      WebkitFontSmoothing: "antialiased",
      MozOsxFontSmoothing: "grayscale",
      WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
      WebkitOverflowScrolling: "touch",
    },
    "*": { boxSizing: "border-box" },
    "h1, h2, h3, h4, h5, h6": { fontWeight: typography2.weight.regular, margin: 0, padding: 0 },
    "button, input, textarea, select": { fontFamily: "inherit", fontSize: "inherit", boxSizing: "border-box" },
    sub: { fontSize: "0.8em", bottom: "-0.2em" },
    sup: { fontSize: "0.8em", top: "-0.2em" },
    "b, strong": { fontWeight: typography2.weight.bold },
    hr: { border: "none", borderTop: "1px solid silver", clear: "both", marginBottom: "1.25rem" },
    code: {
      fontFamily: typography2.fonts.mono,
      WebkitFontSmoothing: "antialiased",
      MozOsxFontSmoothing: "grayscale",
      display: "inline-block",
      paddingLeft: 2,
      paddingRight: 2,
      verticalAlign: "baseline",
      color: "inherit",
    },
    pre: {
      fontFamily: typography2.fonts.mono,
      WebkitFontSmoothing: "antialiased",
      MozOsxFontSmoothing: "grayscale",
      lineHeight: "18px",
      padding: "11px 1rem",
      whiteSpace: "pre-wrap",
      color: "inherit",
      borderRadius: 3,
      margin: "1rem 0",
    },
  })),
  createGlobal = (0, import_memoizerific.default)(1)(
    ({ color: color2, background: background2, typography: typography2 }) => {
      let resetStyles = createReset({ typography: typography2 });
      return {
        ...resetStyles,
        body: { ...resetStyles.body, color: color2.defaultText, background: background2.app, overflow: "hidden" },
        hr: { ...resetStyles.hr, borderTop: `1px solid ${color2.border}` },
      };
    }
  ),
  easing = { rubber: "cubic-bezier(0.175, 0.885, 0.335, 1.05)" },
  rotate360 = keyframes`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
`,
  glow = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: .4; }
`,
  float = keyframes`
  0% { transform: translateY(1px); }
  25% { transform: translateY(0px); }
  50% { transform: translateY(-3px); }
  100% { transform: translateY(1px); }
`,
  jiggle = keyframes`
  0%, 100% { transform:translate3d(0,0,0); }
  12.5%, 62.5% { transform:translate3d(-4px,0,0); }
  37.5%, 87.5% {  transform: translate3d(4px,0,0);  }
`,
  inlineGlow = css`
    animation: ${glow} 1.5s ease-in-out infinite;
    color: transparent;
    cursor: progress;
  `,
  hoverable = css`
    transition: all 150ms ease-out;
    transform: translate3d(0, 0, 0);

    &:hover {
      transform: translate3d(0, -2px, 0);
    }

    &:active {
      transform: translate3d(0, 0, 0);
    }
  `,
  animation = { rotate360, glow, float, jiggle, inlineGlow, hoverable },
  chromeDark = {
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
  chromeLight = {
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
  convertColors = (colors) => Object.entries(colors).reduce((acc, [k, v]) => ({ ...acc, [k]: mkColor(v) }), {}),
  create2 = ({ colors, mono }) => {
    let colorsObjs = convertColors(colors);
    return {
      token: {
        fontFamily: mono,
        WebkitFontSmoothing: "antialiased",
        "&.tag": colorsObjs.red3,
        "&.comment": { ...colorsObjs.green1, fontStyle: "italic" },
        "&.prolog": { ...colorsObjs.green1, fontStyle: "italic" },
        "&.doctype": { ...colorsObjs.green1, fontStyle: "italic" },
        "&.cdata": { ...colorsObjs.green1, fontStyle: "italic" },
        "&.string": colorsObjs.red1,
        "&.url": colorsObjs.cyan1,
        "&.symbol": colorsObjs.cyan1,
        "&.number": colorsObjs.cyan1,
        "&.boolean": colorsObjs.cyan1,
        "&.variable": colorsObjs.cyan1,
        "&.constant": colorsObjs.cyan1,
        "&.inserted": colorsObjs.cyan1,
        "&.atrule": colorsObjs.blue1,
        "&.keyword": colorsObjs.blue1,
        "&.attr-value": colorsObjs.blue1,
        "&.punctuation": colorsObjs.gray1,
        "&.operator": colorsObjs.gray1,
        "&.function": colorsObjs.gray1,
        "&.deleted": colorsObjs.red2,
        "&.important": { fontWeight: "bold" },
        "&.bold": { fontWeight: "bold" },
        "&.italic": { fontStyle: "italic" },
        "&.class-name": colorsObjs.cyan2,
        "&.selector": colorsObjs.red3,
        "&.attr-name": colorsObjs.red4,
        "&.property": colorsObjs.red4,
        "&.regex": colorsObjs.red4,
        "&.entity": colorsObjs.red4,
        "&.directive.tag .tag": { background: "#ffff00", ...colorsObjs.gray1 },
      },
      "language-json .token.boolean": colorsObjs.blue1,
      "language-json .token.number": colorsObjs.blue1,
      "language-json .token.property": colorsObjs.cyan2,
      namespace: { opacity: 0.7 },
    };
  },
  lightSyntaxColors = {
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
  darkSyntaxColors = {
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
  createColors = (vars) => ({
    primary: vars.colorPrimary,
    secondary: vars.colorSecondary,
    tertiary: color.tertiary,
    ancillary: color.ancillary,
    orange: color.orange,
    gold: color.gold,
    green: color.green,
    seafoam: color.seafoam,
    purple: color.purple,
    ultraviolet: color.ultraviolet,
    lightest: color.lightest,
    lighter: color.lighter,
    light: color.light,
    mediumlight: color.mediumlight,
    medium: color.medium,
    mediumdark: color.mediumdark,
    dark: color.dark,
    darker: color.darker,
    darkest: color.darkest,
    border: color.border,
    positive: color.positive,
    negative: color.negative,
    warning: color.warning,
    critical: color.critical,
    defaultText: vars.textColor || color.darkest,
    inverseText: vars.textInverseColor || color.lightest,
    positiveText: color.positiveText,
    negativeText: color.negativeText,
    warningText: color.warningText,
  }),
  convert = (inherit = themes[getPreferredColorScheme()]) => {
    let {
      base,
      colorPrimary,
      colorSecondary,
      appBg,
      appContentBg,
      appBorderColor,
      appBorderRadius,
      fontBase,
      fontCode,
      textColor,
      textInverseColor,
      barTextColor,
      barSelectedColor,
      barBg,
      buttonBg,
      buttonBorder,
      booleanBg,
      booleanSelectedBg,
      inputBg,
      inputBorder,
      inputTextColor,
      inputBorderRadius,
      brandTitle,
      brandUrl,
      brandImage,
      brandTarget,
      gridCellSize,
      ...rest
    } = inherit;
    return {
      ...rest,
      base,
      color: createColors(inherit),
      background: {
        app: appBg,
        bar: barBg,
        content: appContentBg,
        gridCellSize: gridCellSize || background.gridCellSize,
        hoverable: background.hoverable,
        positive: background.positive,
        negative: background.negative,
        warning: background.warning,
        critical: background.critical,
      },
      typography: { fonts: { base: fontBase, mono: fontCode }, weight: typography.weight, size: typography.size },
      animation,
      easing,
      input: { background: inputBg, border: inputBorder, borderRadius: inputBorderRadius, color: inputTextColor },
      button: { background: buttonBg || inputBg, border: buttonBorder || inputBorder },
      boolean: { background: booleanBg || inputBorder, selectedBackground: booleanSelectedBg || inputBg },
      layoutMargin: 10,
      appBorderColor,
      appBorderRadius,
      barTextColor,
      barSelectedColor: barSelectedColor || colorSecondary,
      barBg,
      brand: {
        title: brandTitle,
        url: brandUrl,
        image: brandImage || (brandTitle ? null : void 0),
        target: brandTarget,
      },
      code: create2({ colors: base === "light" ? lightSyntaxColors : darkSyntaxColors, mono: fontCode }),
      addonActionsTheme: {
        ...(base === "light" ? chromeLight : chromeDark),
        BASE_FONT_FAMILY: fontCode,
        BASE_FONT_SIZE: typography.size.s2 - 1,
        BASE_LINE_HEIGHT: "18px",
        BASE_BACKGROUND_COLOR: "transparent",
        BASE_COLOR: textColor,
        ARROW_COLOR: curriedOpacify$1(0.2, appBorderColor),
        ARROW_MARGIN_RIGHT: 4,
        ARROW_FONT_SIZE: 8,
        TREENODE_FONT_FAMILY: fontCode,
        TREENODE_FONT_SIZE: typography.size.s2 - 1,
        TREENODE_LINE_HEIGHT: "18px",
        TREENODE_PADDING_LEFT: 12,
      },
    };
  },
  isEmpty = (o) => Object.keys(o).length === 0,
  isObject = (o) => o != null && typeof o == "object",
  hasOwnProperty2 = (o, ...args) => Object.prototype.hasOwnProperty.call(o, ...args),
  makeObjectWithoutPrototype = () => Object.create(null),
  deletedDiff = (lhs, rhs) =>
    lhs === rhs || !isObject(lhs) || !isObject(rhs)
      ? {}
      : Object.keys(lhs).reduce((acc, key) => {
          if (hasOwnProperty2(rhs, key)) {
            let difference = deletedDiff(lhs[key], rhs[key]);
            return (isObject(difference) && isEmpty(difference)) || (acc[key] = difference), acc;
          }
          return (acc[key] = void 0), acc;
        }, makeObjectWithoutPrototype()),
  deleted_default = deletedDiff;
function dedent(templ) {
  for (var values = [], _i = 1; _i < arguments.length; _i++) values[_i - 1] = arguments[_i];
  var strings = Array.from(typeof templ == "string" ? [templ] : templ);
  strings[strings.length - 1] = strings[strings.length - 1].replace(/\r?\n([\t ]*)$/, "");
  var indentLengths = strings.reduce(function (arr, str) {
    var matches = str.match(/\n([\t ]+|(?!\s).)/g);
    return matches
      ? arr.concat(
          matches.map(function (match2) {
            var _a, _b;
            return (_b = (_a = match2.match(/[\t ]/g)) === null || _a === void 0 ? void 0 : _a.length) !== null &&
              _b !== void 0
              ? _b
              : 0;
          })
        )
      : arr;
  }, []);
  if (indentLengths.length) {
    var pattern_1 = new RegExp(
      `
[	 ]{` +
        Math.min.apply(Math, indentLengths) +
        "}",
      "g"
    );
    strings = strings.map(function (str) {
      return str.replace(
        pattern_1,
        `
`
      );
    });
  }
  strings[0] = strings[0].replace(/^\r?\n/, "");
  var string = strings[0];
  return (
    values.forEach(function (value, i) {
      var endentations = string.match(/(?:^|\n)( *)$/),
        endentation = endentations ? endentations[1] : "",
        indentedValue = value;
      typeof value == "string" &&
        value.includes(`
`) &&
        (indentedValue = String(value)
          .split(
            `
`
          )
          .map(function (str, i2) {
            return i2 === 0 ? str : "" + endentation + str;
          }).join(`
`)),
        (string += indentedValue + strings[i + 1]);
    }),
    string
  );
}
var ensure = (input) => {
    if (!input) return convert(light_default);
    let missing = deleted_default(light_default, input);
    return (
      Object.keys(missing).length &&
        logger.warn(
          dedent`
          Your theme is missing properties, you should update your theme!

          theme-data missing:
        `,
          missing
        ),
      convert(input)
    );
  },
  ignoreSsrWarning =
    "/* emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason */";
export {
  scope,
  logger,
  once,
  deprecate,
  pretty,
  dist_exports,
  lightenColor,
  create,
  emotion_is_prop_valid_esm_default,
  useTheme,
  ThemeProvider,
  withTheme,
  Global,
  keyframes,
  emotion_styled_browser_esm_default,
  createGlobal,
  ensure,
  ignoreSsrWarning,
  dist_exports2,
};

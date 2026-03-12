function jy(n, r) {
  for (var o = 0; o < r.length; o++) {
    const i = r[o];
    if (typeof i != "string" && !Array.isArray(i)) {
      for (const a in i)
        if (a !== "default" && !(a in n)) {
          const u = Object.getOwnPropertyDescriptor(i, a);
          u && Object.defineProperty(n, a, u.get ? u : {
            enumerable: !0,
            get: () => i[a]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }));
}
function Ah(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var ku = { exports: {} }, Os = {}, Cu = { exports: {} }, Le = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vp;
function Ly() {
  if (vp) return Le;
  vp = 1;
  var n = Symbol.for("react.element"), r = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), u = Symbol.for("react.provider"), f = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), g = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), x = Symbol.iterator;
  function C(P) {
    return P === null || typeof P != "object" ? null : (P = x && P[x] || P["@@iterator"], typeof P == "function" ? P : null);
  }
  var E = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, O = Object.assign, w = {};
  function y(P, U, Re) {
    this.props = P, this.context = U, this.refs = w, this.updater = Re || E;
  }
  y.prototype.isReactComponent = {}, y.prototype.setState = function(P, U) {
    if (typeof P != "object" && typeof P != "function" && P != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, P, U, "setState");
  }, y.prototype.forceUpdate = function(P) {
    this.updater.enqueueForceUpdate(this, P, "forceUpdate");
  };
  function A() {
  }
  A.prototype = y.prototype;
  function N(P, U, Re) {
    this.props = P, this.context = U, this.refs = w, this.updater = Re || E;
  }
  var I = N.prototype = new A();
  I.constructor = N, O(I, y.prototype), I.isPureReactComponent = !0;
  var L = Array.isArray, B = Object.prototype.hasOwnProperty, K = { current: null }, H = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ne(P, U, Re) {
    var be, Me = {}, Ie = null, se = null;
    if (U != null) for (be in U.ref !== void 0 && (se = U.ref), U.key !== void 0 && (Ie = "" + U.key), U) B.call(U, be) && !H.hasOwnProperty(be) && (Me[be] = U[be]);
    var xe = arguments.length - 2;
    if (xe === 1) Me.children = Re;
    else if (1 < xe) {
      for (var Te = Array(xe), Pe = 0; Pe < xe; Pe++) Te[Pe] = arguments[Pe + 2];
      Me.children = Te;
    }
    if (P && P.defaultProps) for (be in xe = P.defaultProps, xe) Me[be] === void 0 && (Me[be] = xe[be]);
    return { $$typeof: n, type: P, key: Ie, ref: se, props: Me, _owner: K.current };
  }
  function _e(P, U) {
    return { $$typeof: n, type: P.type, key: U, ref: P.ref, props: P.props, _owner: P._owner };
  }
  function pe(P) {
    return typeof P == "object" && P !== null && P.$$typeof === n;
  }
  function Ee(P) {
    var U = { "=": "=0", ":": "=2" };
    return "$" + P.replace(/[=:]/g, function(Re) {
      return U[Re];
    });
  }
  var $ = /\/+/g;
  function te(P, U) {
    return typeof P == "object" && P !== null && P.key != null ? Ee("" + P.key) : U.toString(36);
  }
  function ce(P, U, Re, be, Me) {
    var Ie = typeof P;
    (Ie === "undefined" || Ie === "boolean") && (P = null);
    var se = !1;
    if (P === null) se = !0;
    else switch (Ie) {
      case "string":
      case "number":
        se = !0;
        break;
      case "object":
        switch (P.$$typeof) {
          case n:
          case r:
            se = !0;
        }
    }
    if (se) return se = P, Me = Me(se), P = be === "" ? "." + te(se, 0) : be, L(Me) ? (Re = "", P != null && (Re = P.replace($, "$&/") + "/"), ce(Me, U, Re, "", function(Pe) {
      return Pe;
    })) : Me != null && (pe(Me) && (Me = _e(Me, Re + (!Me.key || se && se.key === Me.key ? "" : ("" + Me.key).replace($, "$&/") + "/") + P)), U.push(Me)), 1;
    if (se = 0, be = be === "" ? "." : be + ":", L(P)) for (var xe = 0; xe < P.length; xe++) {
      Ie = P[xe];
      var Te = be + te(Ie, xe);
      se += ce(Ie, U, Re, Te, Me);
    }
    else if (Te = C(P), typeof Te == "function") for (P = Te.call(P), xe = 0; !(Ie = P.next()).done; ) Ie = Ie.value, Te = be + te(Ie, xe++), se += ce(Ie, U, Re, Te, Me);
    else if (Ie === "object") throw U = String(P), Error("Objects are not valid as a React child (found: " + (U === "[object Object]" ? "object with keys {" + Object.keys(P).join(", ") + "}" : U) + "). If you meant to render a collection of children, use an array instead.");
    return se;
  }
  function Se(P, U, Re) {
    if (P == null) return P;
    var be = [], Me = 0;
    return ce(P, be, "", "", function(Ie) {
      return U.call(Re, Ie, Me++);
    }), be;
  }
  function oe(P) {
    if (P._status === -1) {
      var U = P._result;
      U = U(), U.then(function(Re) {
        (P._status === 0 || P._status === -1) && (P._status = 1, P._result = Re);
      }, function(Re) {
        (P._status === 0 || P._status === -1) && (P._status = 2, P._result = Re);
      }), P._status === -1 && (P._status = 0, P._result = U);
    }
    if (P._status === 1) return P._result.default;
    throw P._result;
  }
  var le = { current: null }, z = { transition: null }, J = { ReactCurrentDispatcher: le, ReactCurrentBatchConfig: z, ReactCurrentOwner: K };
  function Y() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return Le.Children = { map: Se, forEach: function(P, U, Re) {
    Se(P, function() {
      U.apply(this, arguments);
    }, Re);
  }, count: function(P) {
    var U = 0;
    return Se(P, function() {
      U++;
    }), U;
  }, toArray: function(P) {
    return Se(P, function(U) {
      return U;
    }) || [];
  }, only: function(P) {
    if (!pe(P)) throw Error("React.Children.only expected to receive a single React element child.");
    return P;
  } }, Le.Component = y, Le.Fragment = o, Le.Profiler = a, Le.PureComponent = N, Le.StrictMode = i, Le.Suspense = m, Le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = J, Le.act = Y, Le.cloneElement = function(P, U, Re) {
    if (P == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + P + ".");
    var be = O({}, P.props), Me = P.key, Ie = P.ref, se = P._owner;
    if (U != null) {
      if (U.ref !== void 0 && (Ie = U.ref, se = K.current), U.key !== void 0 && (Me = "" + U.key), P.type && P.type.defaultProps) var xe = P.type.defaultProps;
      for (Te in U) B.call(U, Te) && !H.hasOwnProperty(Te) && (be[Te] = U[Te] === void 0 && xe !== void 0 ? xe[Te] : U[Te]);
    }
    var Te = arguments.length - 2;
    if (Te === 1) be.children = Re;
    else if (1 < Te) {
      xe = Array(Te);
      for (var Pe = 0; Pe < Te; Pe++) xe[Pe] = arguments[Pe + 2];
      be.children = xe;
    }
    return { $$typeof: n, type: P.type, key: Me, ref: Ie, props: be, _owner: se };
  }, Le.createContext = function(P) {
    return P = { $$typeof: f, _currentValue: P, _currentValue2: P, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, P.Provider = { $$typeof: u, _context: P }, P.Consumer = P;
  }, Le.createElement = ne, Le.createFactory = function(P) {
    var U = ne.bind(null, P);
    return U.type = P, U;
  }, Le.createRef = function() {
    return { current: null };
  }, Le.forwardRef = function(P) {
    return { $$typeof: p, render: P };
  }, Le.isValidElement = pe, Le.lazy = function(P) {
    return { $$typeof: v, _payload: { _status: -1, _result: P }, _init: oe };
  }, Le.memo = function(P, U) {
    return { $$typeof: g, type: P, compare: U === void 0 ? null : U };
  }, Le.startTransition = function(P) {
    var U = z.transition;
    z.transition = {};
    try {
      P();
    } finally {
      z.transition = U;
    }
  }, Le.unstable_act = Y, Le.useCallback = function(P, U) {
    return le.current.useCallback(P, U);
  }, Le.useContext = function(P) {
    return le.current.useContext(P);
  }, Le.useDebugValue = function() {
  }, Le.useDeferredValue = function(P) {
    return le.current.useDeferredValue(P);
  }, Le.useEffect = function(P, U) {
    return le.current.useEffect(P, U);
  }, Le.useId = function() {
    return le.current.useId();
  }, Le.useImperativeHandle = function(P, U, Re) {
    return le.current.useImperativeHandle(P, U, Re);
  }, Le.useInsertionEffect = function(P, U) {
    return le.current.useInsertionEffect(P, U);
  }, Le.useLayoutEffect = function(P, U) {
    return le.current.useLayoutEffect(P, U);
  }, Le.useMemo = function(P, U) {
    return le.current.useMemo(P, U);
  }, Le.useReducer = function(P, U, Re) {
    return le.current.useReducer(P, U, Re);
  }, Le.useRef = function(P) {
    return le.current.useRef(P);
  }, Le.useState = function(P) {
    return le.current.useState(P);
  }, Le.useSyncExternalStore = function(P, U, Re) {
    return le.current.useSyncExternalStore(P, U, Re);
  }, Le.useTransition = function() {
    return le.current.useTransition();
  }, Le.version = "18.3.1", Le;
}
var yp;
function ac() {
  return yp || (yp = 1, Cu.exports = Ly()), Cu.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xp;
function Dy() {
  if (xp) return Os;
  xp = 1;
  var n = ac(), r = Symbol.for("react.element"), o = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, a = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = { key: !0, ref: !0, __self: !0, __source: !0 };
  function f(p, m, g) {
    var v, x = {}, C = null, E = null;
    g !== void 0 && (C = "" + g), m.key !== void 0 && (C = "" + m.key), m.ref !== void 0 && (E = m.ref);
    for (v in m) i.call(m, v) && !u.hasOwnProperty(v) && (x[v] = m[v]);
    if (p && p.defaultProps) for (v in m = p.defaultProps, m) x[v] === void 0 && (x[v] = m[v]);
    return { $$typeof: r, type: p, key: C, ref: E, props: x, _owner: a.current };
  }
  return Os.Fragment = o, Os.jsx = f, Os.jsxs = f, Os;
}
var wp;
function Fy() {
  return wp || (wp = 1, ku.exports = Dy()), ku.exports;
}
var k = Fy(), _ = ac();
const ge = /* @__PURE__ */ Ah(_), Oh = /* @__PURE__ */ jy({
  __proto__: null,
  default: ge
}, [_]);
var nl = {}, Eu = { exports: {} }, Ft = {}, bu = { exports: {} }, Ru = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _p;
function Vy() {
  return _p || (_p = 1, (function(n) {
    function r(z, J) {
      var Y = z.length;
      z.push(J);
      e: for (; 0 < Y; ) {
        var P = Y - 1 >>> 1, U = z[P];
        if (0 < a(U, J)) z[P] = J, z[Y] = U, Y = P;
        else break e;
      }
    }
    function o(z) {
      return z.length === 0 ? null : z[0];
    }
    function i(z) {
      if (z.length === 0) return null;
      var J = z[0], Y = z.pop();
      if (Y !== J) {
        z[0] = Y;
        e: for (var P = 0, U = z.length, Re = U >>> 1; P < Re; ) {
          var be = 2 * (P + 1) - 1, Me = z[be], Ie = be + 1, se = z[Ie];
          if (0 > a(Me, Y)) Ie < U && 0 > a(se, Me) ? (z[P] = se, z[Ie] = Y, P = Ie) : (z[P] = Me, z[be] = Y, P = be);
          else if (Ie < U && 0 > a(se, Y)) z[P] = se, z[Ie] = Y, P = Ie;
          else break e;
        }
      }
      return J;
    }
    function a(z, J) {
      var Y = z.sortIndex - J.sortIndex;
      return Y !== 0 ? Y : z.id - J.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var u = performance;
      n.unstable_now = function() {
        return u.now();
      };
    } else {
      var f = Date, p = f.now();
      n.unstable_now = function() {
        return f.now() - p;
      };
    }
    var m = [], g = [], v = 1, x = null, C = 3, E = !1, O = !1, w = !1, y = typeof setTimeout == "function" ? setTimeout : null, A = typeof clearTimeout == "function" ? clearTimeout : null, N = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function I(z) {
      for (var J = o(g); J !== null; ) {
        if (J.callback === null) i(g);
        else if (J.startTime <= z) i(g), J.sortIndex = J.expirationTime, r(m, J);
        else break;
        J = o(g);
      }
    }
    function L(z) {
      if (w = !1, I(z), !O) if (o(m) !== null) O = !0, oe(B);
      else {
        var J = o(g);
        J !== null && le(L, J.startTime - z);
      }
    }
    function B(z, J) {
      O = !1, w && (w = !1, A(ne), ne = -1), E = !0;
      var Y = C;
      try {
        for (I(J), x = o(m); x !== null && (!(x.expirationTime > J) || z && !Ee()); ) {
          var P = x.callback;
          if (typeof P == "function") {
            x.callback = null, C = x.priorityLevel;
            var U = P(x.expirationTime <= J);
            J = n.unstable_now(), typeof U == "function" ? x.callback = U : x === o(m) && i(m), I(J);
          } else i(m);
          x = o(m);
        }
        if (x !== null) var Re = !0;
        else {
          var be = o(g);
          be !== null && le(L, be.startTime - J), Re = !1;
        }
        return Re;
      } finally {
        x = null, C = Y, E = !1;
      }
    }
    var K = !1, H = null, ne = -1, _e = 5, pe = -1;
    function Ee() {
      return !(n.unstable_now() - pe < _e);
    }
    function $() {
      if (H !== null) {
        var z = n.unstable_now();
        pe = z;
        var J = !0;
        try {
          J = H(!0, z);
        } finally {
          J ? te() : (K = !1, H = null);
        }
      } else K = !1;
    }
    var te;
    if (typeof N == "function") te = function() {
      N($);
    };
    else if (typeof MessageChannel < "u") {
      var ce = new MessageChannel(), Se = ce.port2;
      ce.port1.onmessage = $, te = function() {
        Se.postMessage(null);
      };
    } else te = function() {
      y($, 0);
    };
    function oe(z) {
      H = z, K || (K = !0, te());
    }
    function le(z, J) {
      ne = y(function() {
        z(n.unstable_now());
      }, J);
    }
    n.unstable_IdlePriority = 5, n.unstable_ImmediatePriority = 1, n.unstable_LowPriority = 4, n.unstable_NormalPriority = 3, n.unstable_Profiling = null, n.unstable_UserBlockingPriority = 2, n.unstable_cancelCallback = function(z) {
      z.callback = null;
    }, n.unstable_continueExecution = function() {
      O || E || (O = !0, oe(B));
    }, n.unstable_forceFrameRate = function(z) {
      0 > z || 125 < z ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : _e = 0 < z ? Math.floor(1e3 / z) : 5;
    }, n.unstable_getCurrentPriorityLevel = function() {
      return C;
    }, n.unstable_getFirstCallbackNode = function() {
      return o(m);
    }, n.unstable_next = function(z) {
      switch (C) {
        case 1:
        case 2:
        case 3:
          var J = 3;
          break;
        default:
          J = C;
      }
      var Y = C;
      C = J;
      try {
        return z();
      } finally {
        C = Y;
      }
    }, n.unstable_pauseExecution = function() {
    }, n.unstable_requestPaint = function() {
    }, n.unstable_runWithPriority = function(z, J) {
      switch (z) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          z = 3;
      }
      var Y = C;
      C = z;
      try {
        return J();
      } finally {
        C = Y;
      }
    }, n.unstable_scheduleCallback = function(z, J, Y) {
      var P = n.unstable_now();
      switch (typeof Y == "object" && Y !== null ? (Y = Y.delay, Y = typeof Y == "number" && 0 < Y ? P + Y : P) : Y = P, z) {
        case 1:
          var U = -1;
          break;
        case 2:
          U = 250;
          break;
        case 5:
          U = 1073741823;
          break;
        case 4:
          U = 1e4;
          break;
        default:
          U = 5e3;
      }
      return U = Y + U, z = { id: v++, callback: J, priorityLevel: z, startTime: Y, expirationTime: U, sortIndex: -1 }, Y > P ? (z.sortIndex = Y, r(g, z), o(m) === null && z === o(g) && (w ? (A(ne), ne = -1) : w = !0, le(L, Y - P))) : (z.sortIndex = U, r(m, z), O || E || (O = !0, oe(B))), z;
    }, n.unstable_shouldYield = Ee, n.unstable_wrapCallback = function(z) {
      var J = C;
      return function() {
        var Y = C;
        C = J;
        try {
          return z.apply(this, arguments);
        } finally {
          C = Y;
        }
      };
    };
  })(Ru)), Ru;
}
var Sp;
function zy() {
  return Sp || (Sp = 1, bu.exports = Vy()), bu.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var kp;
function By() {
  if (kp) return Ft;
  kp = 1;
  var n = ac(), r = zy();
  function o(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, s = 1; s < arguments.length; s++) t += "&args[]=" + encodeURIComponent(arguments[s]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var i = /* @__PURE__ */ new Set(), a = {};
  function u(e, t) {
    f(e, t), f(e + "Capture", t);
  }
  function f(e, t) {
    for (a[e] = t, e = 0; e < t.length; e++) i.add(t[e]);
  }
  var p = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), m = Object.prototype.hasOwnProperty, g = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, v = {}, x = {};
  function C(e) {
    return m.call(x, e) ? !0 : m.call(v, e) ? !1 : g.test(e) ? x[e] = !0 : (v[e] = !0, !1);
  }
  function E(e, t, s, l) {
    if (s !== null && s.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return l ? !1 : s !== null ? !s.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function O(e, t, s, l) {
    if (t === null || typeof t > "u" || E(e, t, s, l)) return !0;
    if (l) return !1;
    if (s !== null) switch (s.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
    return !1;
  }
  function w(e, t, s, l, c, d, h) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = l, this.attributeNamespace = c, this.mustUseProperty = s, this.propertyName = e, this.type = t, this.sanitizeURL = d, this.removeEmptyString = h;
  }
  var y = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    y[e] = new w(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    y[t] = new w(t, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    y[e] = new w(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    y[e] = new w(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    y[e] = new w(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    y[e] = new w(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    y[e] = new w(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    y[e] = new w(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    y[e] = new w(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var A = /[\-:]([a-z])/g;
  function N(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(
      A,
      N
    );
    y[t] = new w(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(A, N);
    y[t] = new w(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(A, N);
    y[t] = new w(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    y[e] = new w(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), y.xlinkHref = new w("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    y[e] = new w(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function I(e, t, s, l) {
    var c = y.hasOwnProperty(t) ? y[t] : null;
    (c !== null ? c.type !== 0 : l || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (O(t, s, c, l) && (s = null), l || c === null ? C(t) && (s === null ? e.removeAttribute(t) : e.setAttribute(t, "" + s)) : c.mustUseProperty ? e[c.propertyName] = s === null ? c.type === 3 ? !1 : "" : s : (t = c.attributeName, l = c.attributeNamespace, s === null ? e.removeAttribute(t) : (c = c.type, s = c === 3 || c === 4 && s === !0 ? "" : "" + s, l ? e.setAttributeNS(l, t, s) : e.setAttribute(t, s))));
  }
  var L = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, B = Symbol.for("react.element"), K = Symbol.for("react.portal"), H = Symbol.for("react.fragment"), ne = Symbol.for("react.strict_mode"), _e = Symbol.for("react.profiler"), pe = Symbol.for("react.provider"), Ee = Symbol.for("react.context"), $ = Symbol.for("react.forward_ref"), te = Symbol.for("react.suspense"), ce = Symbol.for("react.suspense_list"), Se = Symbol.for("react.memo"), oe = Symbol.for("react.lazy"), le = Symbol.for("react.offscreen"), z = Symbol.iterator;
  function J(e) {
    return e === null || typeof e != "object" ? null : (e = z && e[z] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var Y = Object.assign, P;
  function U(e) {
    if (P === void 0) try {
      throw Error();
    } catch (s) {
      var t = s.stack.trim().match(/\n( *(at )?)/);
      P = t && t[1] || "";
    }
    return `
` + P + e;
  }
  var Re = !1;
  function be(e, t) {
    if (!e || Re) return "";
    Re = !0;
    var s = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t) if (t = function() {
        throw Error();
      }, Object.defineProperty(t.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(t, []);
        } catch (F) {
          var l = F;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (F) {
          l = F;
        }
        e.call(t.prototype);
      }
      else {
        try {
          throw Error();
        } catch (F) {
          l = F;
        }
        e();
      }
    } catch (F) {
      if (F && l && typeof F.stack == "string") {
        for (var c = F.stack.split(`
`), d = l.stack.split(`
`), h = c.length - 1, S = d.length - 1; 1 <= h && 0 <= S && c[h] !== d[S]; ) S--;
        for (; 1 <= h && 0 <= S; h--, S--) if (c[h] !== d[S]) {
          if (h !== 1 || S !== 1)
            do
              if (h--, S--, 0 > S || c[h] !== d[S]) {
                var R = `
` + c[h].replace(" at new ", " at ");
                return e.displayName && R.includes("<anonymous>") && (R = R.replace("<anonymous>", e.displayName)), R;
              }
            while (1 <= h && 0 <= S);
          break;
        }
      }
    } finally {
      Re = !1, Error.prepareStackTrace = s;
    }
    return (e = e ? e.displayName || e.name : "") ? U(e) : "";
  }
  function Me(e) {
    switch (e.tag) {
      case 5:
        return U(e.type);
      case 16:
        return U("Lazy");
      case 13:
        return U("Suspense");
      case 19:
        return U("SuspenseList");
      case 0:
      case 2:
      case 15:
        return e = be(e.type, !1), e;
      case 11:
        return e = be(e.type.render, !1), e;
      case 1:
        return e = be(e.type, !0), e;
      default:
        return "";
    }
  }
  function Ie(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case H:
        return "Fragment";
      case K:
        return "Portal";
      case _e:
        return "Profiler";
      case ne:
        return "StrictMode";
      case te:
        return "Suspense";
      case ce:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case Ee:
        return (e.displayName || "Context") + ".Consumer";
      case pe:
        return (e._context.displayName || "Context") + ".Provider";
      case $:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case Se:
        return t = e.displayName || null, t !== null ? t : Ie(e.type) || "Memo";
      case oe:
        t = e._payload, e = e._init;
        try {
          return Ie(e(t));
        } catch {
        }
    }
    return null;
  }
  function se(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return Ie(t);
      case 8:
        return t === ne ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == "function") return t.displayName || t.name || null;
        if (typeof t == "string") return t;
    }
    return null;
  }
  function xe(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function Te(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Pe(e) {
    var t = Te(e) ? "checked" : "value", s = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), l = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof s < "u" && typeof s.get == "function" && typeof s.set == "function") {
      var c = s.get, d = s.set;
      return Object.defineProperty(e, t, { configurable: !0, get: function() {
        return c.call(this);
      }, set: function(h) {
        l = "" + h, d.call(this, h);
      } }), Object.defineProperty(e, t, { enumerable: s.enumerable }), { getValue: function() {
        return l;
      }, setValue: function(h) {
        l = "" + h;
      }, stopTracking: function() {
        e._valueTracker = null, delete e[t];
      } };
    }
  }
  function Fe(e) {
    e._valueTracker || (e._valueTracker = Pe(e));
  }
  function ze(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var s = t.getValue(), l = "";
    return e && (l = Te(e) ? e.checked ? "true" : "false" : e.value), e = l, e !== s ? (t.setValue(e), !0) : !1;
  }
  function it(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Ct(e, t) {
    var s = t.checked;
    return Y({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: s ?? e._wrapperState.initialChecked });
  }
  function on(e, t) {
    var s = t.defaultValue == null ? "" : t.defaultValue, l = t.checked != null ? t.checked : t.defaultChecked;
    s = xe(t.value != null ? t.value : s), e._wrapperState = { initialChecked: l, initialValue: s, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function sn(e, t) {
    t = t.checked, t != null && I(e, "checked", t, !1);
  }
  function ln(e, t) {
    sn(e, t);
    var s = xe(t.value), l = t.type;
    if (s != null) l === "number" ? (s === 0 && e.value === "" || e.value != s) && (e.value = "" + s) : e.value !== "" + s && (e.value = "" + s);
    else if (l === "submit" || l === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? On(e, t.type, s) : t.hasOwnProperty("defaultValue") && On(e, t.type, xe(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function qr(e, t, s) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var l = t.type;
      if (!(l !== "submit" && l !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, s || t === e.value || (e.value = t), e.defaultValue = t;
    }
    s = e.name, s !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, s !== "" && (e.name = s);
  }
  function On(e, t, s) {
    (t !== "number" || it(e.ownerDocument) !== e) && (s == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + s && (e.defaultValue = "" + s));
  }
  var Qn = Array.isArray;
  function b(e, t, s, l) {
    if (e = e.options, t) {
      t = {};
      for (var c = 0; c < s.length; c++) t["$" + s[c]] = !0;
      for (s = 0; s < e.length; s++) c = t.hasOwnProperty("$" + e[s].value), e[s].selected !== c && (e[s].selected = c), c && l && (e[s].defaultSelected = !0);
    } else {
      for (s = "" + xe(s), t = null, c = 0; c < e.length; c++) {
        if (e[c].value === s) {
          e[c].selected = !0, l && (e[c].defaultSelected = !0);
          return;
        }
        t !== null || e[c].disabled || (t = e[c]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function j(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(o(91));
    return Y({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function V(e, t) {
    var s = t.value;
    if (s == null) {
      if (s = t.children, t = t.defaultValue, s != null) {
        if (t != null) throw Error(o(92));
        if (Qn(s)) {
          if (1 < s.length) throw Error(o(93));
          s = s[0];
        }
        t = s;
      }
      t == null && (t = ""), s = t;
    }
    e._wrapperState = { initialValue: xe(s) };
  }
  function ie(e, t) {
    var s = xe(t.value), l = xe(t.defaultValue);
    s != null && (s = "" + s, s !== e.value && (e.value = s), t.defaultValue == null && e.defaultValue !== s && (e.defaultValue = s)), l != null && (e.defaultValue = "" + l);
  }
  function ee(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function X(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function we(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? X(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var Ve, $e = (function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, s, l, c) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, s, l, c);
      });
    } : e;
  })(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (Ve = Ve || document.createElement("div"), Ve.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Ve.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
  function lt(e, t) {
    if (t) {
      var s = e.firstChild;
      if (s && s === e.lastChild && s.nodeType === 3) {
        s.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var zt = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, _n = ["Webkit", "ms", "Moz", "O"];
  Object.keys(zt).forEach(function(e) {
    _n.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), zt[t] = zt[e];
    });
  });
  function Ks(e, t, s) {
    return t == null || typeof t == "boolean" || t === "" ? "" : s || typeof t != "number" || t === 0 || zt.hasOwnProperty(e) && zt[e] ? ("" + t).trim() : t + "px";
  }
  function Jr(e, t) {
    e = e.style;
    for (var s in t) if (t.hasOwnProperty(s)) {
      var l = s.indexOf("--") === 0, c = Ks(s, t[s], l);
      s === "float" && (s = "cssFloat"), l ? e.setProperty(s, c) : e[s] = c;
    }
  }
  var Go = Y({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Ko(e, t) {
    if (t) {
      if (Go[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(o(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(o(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(o(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(o(62));
    }
  }
  function eo(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Qo = null;
  function to(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Vl = null, no = null, ro = null;
  function Ic(e) {
    if (e = vs(e)) {
      if (typeof Vl != "function") throw Error(o(280));
      var t = e.stateNode;
      t && (t = vi(t), Vl(e.stateNode, e.type, t));
    }
  }
  function Mc(e) {
    no ? ro ? ro.push(e) : ro = [e] : no = e;
  }
  function jc() {
    if (no) {
      var e = no, t = ro;
      if (ro = no = null, Ic(e), t) for (e = 0; e < t.length; e++) Ic(t[e]);
    }
  }
  function Lc(e, t) {
    return e(t);
  }
  function Dc() {
  }
  var zl = !1;
  function Fc(e, t, s) {
    if (zl) return e(t, s);
    zl = !0;
    try {
      return Lc(e, t, s);
    } finally {
      zl = !1, (no !== null || ro !== null) && (Dc(), jc());
    }
  }
  function Yo(e, t) {
    var s = e.stateNode;
    if (s === null) return null;
    var l = vi(s);
    if (l === null) return null;
    s = l[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (l = !l.disabled) || (e = e.type, l = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !l;
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (s && typeof s != "function") throw Error(o(231, t, typeof s));
    return s;
  }
  var Bl = !1;
  if (p) try {
    var Xo = {};
    Object.defineProperty(Xo, "passive", { get: function() {
      Bl = !0;
    } }), window.addEventListener("test", Xo, Xo), window.removeEventListener("test", Xo, Xo);
  } catch {
    Bl = !1;
  }
  function Bg(e, t, s, l, c, d, h, S, R) {
    var F = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(s, F);
    } catch (Z) {
      this.onError(Z);
    }
  }
  var qo = !1, Qs = null, Ys = !1, Ul = null, Ug = { onError: function(e) {
    qo = !0, Qs = e;
  } };
  function $g(e, t, s, l, c, d, h, S, R) {
    qo = !1, Qs = null, Bg.apply(Ug, arguments);
  }
  function Wg(e, t, s, l, c, d, h, S, R) {
    if ($g.apply(this, arguments), qo) {
      if (qo) {
        var F = Qs;
        qo = !1, Qs = null;
      } else throw Error(o(198));
      Ys || (Ys = !0, Ul = F);
    }
  }
  function Pr(e) {
    var t = e, s = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do
        t = e, (t.flags & 4098) !== 0 && (s = t.return), e = t.return;
      while (e);
    }
    return t.tag === 3 ? s : null;
  }
  function Vc(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function zc(e) {
    if (Pr(e) !== e) throw Error(o(188));
  }
  function Hg(e) {
    var t = e.alternate;
    if (!t) {
      if (t = Pr(e), t === null) throw Error(o(188));
      return t !== e ? null : e;
    }
    for (var s = e, l = t; ; ) {
      var c = s.return;
      if (c === null) break;
      var d = c.alternate;
      if (d === null) {
        if (l = c.return, l !== null) {
          s = l;
          continue;
        }
        break;
      }
      if (c.child === d.child) {
        for (d = c.child; d; ) {
          if (d === s) return zc(c), e;
          if (d === l) return zc(c), t;
          d = d.sibling;
        }
        throw Error(o(188));
      }
      if (s.return !== l.return) s = c, l = d;
      else {
        for (var h = !1, S = c.child; S; ) {
          if (S === s) {
            h = !0, s = c, l = d;
            break;
          }
          if (S === l) {
            h = !0, l = c, s = d;
            break;
          }
          S = S.sibling;
        }
        if (!h) {
          for (S = d.child; S; ) {
            if (S === s) {
              h = !0, s = d, l = c;
              break;
            }
            if (S === l) {
              h = !0, l = d, s = c;
              break;
            }
            S = S.sibling;
          }
          if (!h) throw Error(o(189));
        }
      }
      if (s.alternate !== l) throw Error(o(190));
    }
    if (s.tag !== 3) throw Error(o(188));
    return s.stateNode.current === s ? e : t;
  }
  function Bc(e) {
    return e = Hg(e), e !== null ? Uc(e) : null;
  }
  function Uc(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = Uc(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var $c = r.unstable_scheduleCallback, Wc = r.unstable_cancelCallback, Zg = r.unstable_shouldYield, Gg = r.unstable_requestPaint, at = r.unstable_now, Kg = r.unstable_getCurrentPriorityLevel, $l = r.unstable_ImmediatePriority, Hc = r.unstable_UserBlockingPriority, Xs = r.unstable_NormalPriority, Qg = r.unstable_LowPriority, Zc = r.unstable_IdlePriority, qs = null, Sn = null;
  function Yg(e) {
    if (Sn && typeof Sn.onCommitFiberRoot == "function") try {
      Sn.onCommitFiberRoot(qs, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var an = Math.clz32 ? Math.clz32 : Jg, Xg = Math.log, qg = Math.LN2;
  function Jg(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Xg(e) / qg | 0) | 0;
  }
  var Js = 64, ei = 4194304;
  function Jo(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function ti(e, t) {
    var s = e.pendingLanes;
    if (s === 0) return 0;
    var l = 0, c = e.suspendedLanes, d = e.pingedLanes, h = s & 268435455;
    if (h !== 0) {
      var S = h & ~c;
      S !== 0 ? l = Jo(S) : (d &= h, d !== 0 && (l = Jo(d)));
    } else h = s & ~c, h !== 0 ? l = Jo(h) : d !== 0 && (l = Jo(d));
    if (l === 0) return 0;
    if (t !== 0 && t !== l && (t & c) === 0 && (c = l & -l, d = t & -t, c >= d || c === 16 && (d & 4194240) !== 0)) return t;
    if ((l & 4) !== 0 && (l |= s & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= l; 0 < t; ) s = 31 - an(t), c = 1 << s, l |= e[s], t &= ~c;
    return l;
  }
  function ev(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function tv(e, t) {
    for (var s = e.suspendedLanes, l = e.pingedLanes, c = e.expirationTimes, d = e.pendingLanes; 0 < d; ) {
      var h = 31 - an(d), S = 1 << h, R = c[h];
      R === -1 ? ((S & s) === 0 || (S & l) !== 0) && (c[h] = ev(S, t)) : R <= t && (e.expiredLanes |= S), d &= ~S;
    }
  }
  function Wl(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function Gc() {
    var e = Js;
    return Js <<= 1, (Js & 4194240) === 0 && (Js = 64), e;
  }
  function Hl(e) {
    for (var t = [], s = 0; 31 > s; s++) t.push(e);
    return t;
  }
  function es(e, t, s) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - an(t), e[t] = s;
  }
  function nv(e, t) {
    var s = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var l = e.eventTimes;
    for (e = e.expirationTimes; 0 < s; ) {
      var c = 31 - an(s), d = 1 << c;
      t[c] = 0, l[c] = -1, e[c] = -1, s &= ~d;
    }
  }
  function Zl(e, t) {
    var s = e.entangledLanes |= t;
    for (e = e.entanglements; s; ) {
      var l = 31 - an(s), c = 1 << l;
      c & t | e[l] & t && (e[l] |= t), s &= ~c;
    }
  }
  var Ge = 0;
  function Kc(e) {
    return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var Qc, Gl, Yc, Xc, qc, Kl = !1, ni = [], Yn = null, Xn = null, qn = null, ts = /* @__PURE__ */ new Map(), ns = /* @__PURE__ */ new Map(), Jn = [], rv = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Jc(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Yn = null;
        break;
      case "dragenter":
      case "dragleave":
        Xn = null;
        break;
      case "mouseover":
      case "mouseout":
        qn = null;
        break;
      case "pointerover":
      case "pointerout":
        ts.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        ns.delete(t.pointerId);
    }
  }
  function rs(e, t, s, l, c, d) {
    return e === null || e.nativeEvent !== d ? (e = { blockedOn: t, domEventName: s, eventSystemFlags: l, nativeEvent: d, targetContainers: [c] }, t !== null && (t = vs(t), t !== null && Gl(t)), e) : (e.eventSystemFlags |= l, t = e.targetContainers, c !== null && t.indexOf(c) === -1 && t.push(c), e);
  }
  function ov(e, t, s, l, c) {
    switch (t) {
      case "focusin":
        return Yn = rs(Yn, e, t, s, l, c), !0;
      case "dragenter":
        return Xn = rs(Xn, e, t, s, l, c), !0;
      case "mouseover":
        return qn = rs(qn, e, t, s, l, c), !0;
      case "pointerover":
        var d = c.pointerId;
        return ts.set(d, rs(ts.get(d) || null, e, t, s, l, c)), !0;
      case "gotpointercapture":
        return d = c.pointerId, ns.set(d, rs(ns.get(d) || null, e, t, s, l, c)), !0;
    }
    return !1;
  }
  function ed(e) {
    var t = Ar(e.target);
    if (t !== null) {
      var s = Pr(t);
      if (s !== null) {
        if (t = s.tag, t === 13) {
          if (t = Vc(s), t !== null) {
            e.blockedOn = t, qc(e.priority, function() {
              Yc(s);
            });
            return;
          }
        } else if (t === 3 && s.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = s.tag === 3 ? s.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function ri(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var s = Yl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (s === null) {
        s = e.nativeEvent;
        var l = new s.constructor(s.type, s);
        Qo = l, s.target.dispatchEvent(l), Qo = null;
      } else return t = vs(s), t !== null && Gl(t), e.blockedOn = s, !1;
      t.shift();
    }
    return !0;
  }
  function td(e, t, s) {
    ri(e) && s.delete(t);
  }
  function sv() {
    Kl = !1, Yn !== null && ri(Yn) && (Yn = null), Xn !== null && ri(Xn) && (Xn = null), qn !== null && ri(qn) && (qn = null), ts.forEach(td), ns.forEach(td);
  }
  function os(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Kl || (Kl = !0, r.unstable_scheduleCallback(r.unstable_NormalPriority, sv)));
  }
  function ss(e) {
    function t(c) {
      return os(c, e);
    }
    if (0 < ni.length) {
      os(ni[0], e);
      for (var s = 1; s < ni.length; s++) {
        var l = ni[s];
        l.blockedOn === e && (l.blockedOn = null);
      }
    }
    for (Yn !== null && os(Yn, e), Xn !== null && os(Xn, e), qn !== null && os(qn, e), ts.forEach(t), ns.forEach(t), s = 0; s < Jn.length; s++) l = Jn[s], l.blockedOn === e && (l.blockedOn = null);
    for (; 0 < Jn.length && (s = Jn[0], s.blockedOn === null); ) ed(s), s.blockedOn === null && Jn.shift();
  }
  var oo = L.ReactCurrentBatchConfig, oi = !0;
  function iv(e, t, s, l) {
    var c = Ge, d = oo.transition;
    oo.transition = null;
    try {
      Ge = 1, Ql(e, t, s, l);
    } finally {
      Ge = c, oo.transition = d;
    }
  }
  function lv(e, t, s, l) {
    var c = Ge, d = oo.transition;
    oo.transition = null;
    try {
      Ge = 4, Ql(e, t, s, l);
    } finally {
      Ge = c, oo.transition = d;
    }
  }
  function Ql(e, t, s, l) {
    if (oi) {
      var c = Yl(e, t, s, l);
      if (c === null) pa(e, t, l, si, s), Jc(e, l);
      else if (ov(c, e, t, s, l)) l.stopPropagation();
      else if (Jc(e, l), t & 4 && -1 < rv.indexOf(e)) {
        for (; c !== null; ) {
          var d = vs(c);
          if (d !== null && Qc(d), d = Yl(e, t, s, l), d === null && pa(e, t, l, si, s), d === c) break;
          c = d;
        }
        c !== null && l.stopPropagation();
      } else pa(e, t, l, null, s);
    }
  }
  var si = null;
  function Yl(e, t, s, l) {
    if (si = null, e = to(l), e = Ar(e), e !== null) if (t = Pr(e), t === null) e = null;
    else if (s = t.tag, s === 13) {
      if (e = Vc(t), e !== null) return e;
      e = null;
    } else if (s === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
    return si = e, null;
  }
  function nd(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (Kg()) {
          case $l:
            return 1;
          case Hc:
            return 4;
          case Xs:
          case Qg:
            return 16;
          case Zc:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var er = null, Xl = null, ii = null;
  function rd() {
    if (ii) return ii;
    var e, t = Xl, s = t.length, l, c = "value" in er ? er.value : er.textContent, d = c.length;
    for (e = 0; e < s && t[e] === c[e]; e++) ;
    var h = s - e;
    for (l = 1; l <= h && t[s - l] === c[d - l]; l++) ;
    return ii = c.slice(e, 1 < l ? 1 - l : void 0);
  }
  function li(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function ai() {
    return !0;
  }
  function od() {
    return !1;
  }
  function Bt(e) {
    function t(s, l, c, d, h) {
      this._reactName = s, this._targetInst = c, this.type = l, this.nativeEvent = d, this.target = h, this.currentTarget = null;
      for (var S in e) e.hasOwnProperty(S) && (s = e[S], this[S] = s ? s(d) : d[S]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? ai : od, this.isPropagationStopped = od, this;
    }
    return Y(t.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var s = this.nativeEvent;
      s && (s.preventDefault ? s.preventDefault() : typeof s.returnValue != "unknown" && (s.returnValue = !1), this.isDefaultPrevented = ai);
    }, stopPropagation: function() {
      var s = this.nativeEvent;
      s && (s.stopPropagation ? s.stopPropagation() : typeof s.cancelBubble != "unknown" && (s.cancelBubble = !0), this.isPropagationStopped = ai);
    }, persist: function() {
    }, isPersistent: ai }), t;
  }
  var so = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, ql = Bt(so), is = Y({}, so, { view: 0, detail: 0 }), av = Bt(is), Jl, ea, ls, ui = Y({}, is, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: na, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== ls && (ls && e.type === "mousemove" ? (Jl = e.screenX - ls.screenX, ea = e.screenY - ls.screenY) : ea = Jl = 0, ls = e), Jl);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : ea;
  } }), sd = Bt(ui), uv = Y({}, ui, { dataTransfer: 0 }), cv = Bt(uv), dv = Y({}, is, { relatedTarget: 0 }), ta = Bt(dv), fv = Y({}, so, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), pv = Bt(fv), hv = Y({}, so, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), mv = Bt(hv), gv = Y({}, so, { data: 0 }), id = Bt(gv), vv = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, yv = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, xv = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function wv(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = xv[e]) ? !!t[e] : !1;
  }
  function na() {
    return wv;
  }
  var _v = Y({}, is, { key: function(e) {
    if (e.key) {
      var t = vv[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = li(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? yv[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: na, charCode: function(e) {
    return e.type === "keypress" ? li(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? li(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), Sv = Bt(_v), kv = Y({}, ui, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), ld = Bt(kv), Cv = Y({}, is, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: na }), Ev = Bt(Cv), bv = Y({}, so, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Rv = Bt(bv), Nv = Y({}, ui, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Tv = Bt(Nv), Pv = [9, 13, 27, 32], ra = p && "CompositionEvent" in window, as = null;
  p && "documentMode" in document && (as = document.documentMode);
  var Av = p && "TextEvent" in window && !as, ad = p && (!ra || as && 8 < as && 11 >= as), ud = " ", cd = !1;
  function dd(e, t) {
    switch (e) {
      case "keyup":
        return Pv.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function fd(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var io = !1;
  function Ov(e, t) {
    switch (e) {
      case "compositionend":
        return fd(t);
      case "keypress":
        return t.which !== 32 ? null : (cd = !0, ud);
      case "textInput":
        return e = t.data, e === ud && cd ? null : e;
      default:
        return null;
    }
  }
  function Iv(e, t) {
    if (io) return e === "compositionend" || !ra && dd(e, t) ? (e = rd(), ii = Xl = er = null, io = !1, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return ad && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Mv = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function pd(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Mv[e.type] : t === "textarea";
  }
  function hd(e, t, s, l) {
    Mc(l), t = hi(t, "onChange"), 0 < t.length && (s = new ql("onChange", "change", null, s, l), e.push({ event: s, listeners: t }));
  }
  var us = null, cs = null;
  function jv(e) {
    Od(e, 0);
  }
  function ci(e) {
    var t = fo(e);
    if (ze(t)) return e;
  }
  function Lv(e, t) {
    if (e === "change") return t;
  }
  var md = !1;
  if (p) {
    var oa;
    if (p) {
      var sa = "oninput" in document;
      if (!sa) {
        var gd = document.createElement("div");
        gd.setAttribute("oninput", "return;"), sa = typeof gd.oninput == "function";
      }
      oa = sa;
    } else oa = !1;
    md = oa && (!document.documentMode || 9 < document.documentMode);
  }
  function vd() {
    us && (us.detachEvent("onpropertychange", yd), cs = us = null);
  }
  function yd(e) {
    if (e.propertyName === "value" && ci(cs)) {
      var t = [];
      hd(t, cs, e, to(e)), Fc(jv, t);
    }
  }
  function Dv(e, t, s) {
    e === "focusin" ? (vd(), us = t, cs = s, us.attachEvent("onpropertychange", yd)) : e === "focusout" && vd();
  }
  function Fv(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return ci(cs);
  }
  function Vv(e, t) {
    if (e === "click") return ci(t);
  }
  function zv(e, t) {
    if (e === "input" || e === "change") return ci(t);
  }
  function Bv(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var un = typeof Object.is == "function" ? Object.is : Bv;
  function ds(e, t) {
    if (un(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var s = Object.keys(e), l = Object.keys(t);
    if (s.length !== l.length) return !1;
    for (l = 0; l < s.length; l++) {
      var c = s[l];
      if (!m.call(t, c) || !un(e[c], t[c])) return !1;
    }
    return !0;
  }
  function xd(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function wd(e, t) {
    var s = xd(e);
    e = 0;
    for (var l; s; ) {
      if (s.nodeType === 3) {
        if (l = e + s.textContent.length, e <= t && l >= t) return { node: s, offset: t - e };
        e = l;
      }
      e: {
        for (; s; ) {
          if (s.nextSibling) {
            s = s.nextSibling;
            break e;
          }
          s = s.parentNode;
        }
        s = void 0;
      }
      s = xd(s);
    }
  }
  function _d(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? _d(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function Sd() {
    for (var e = window, t = it(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var s = typeof t.contentWindow.location.href == "string";
      } catch {
        s = !1;
      }
      if (s) e = t.contentWindow;
      else break;
      t = it(e.document);
    }
    return t;
  }
  function ia(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function Uv(e) {
    var t = Sd(), s = e.focusedElem, l = e.selectionRange;
    if (t !== s && s && s.ownerDocument && _d(s.ownerDocument.documentElement, s)) {
      if (l !== null && ia(s)) {
        if (t = l.start, e = l.end, e === void 0 && (e = t), "selectionStart" in s) s.selectionStart = t, s.selectionEnd = Math.min(e, s.value.length);
        else if (e = (t = s.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var c = s.textContent.length, d = Math.min(l.start, c);
          l = l.end === void 0 ? d : Math.min(l.end, c), !e.extend && d > l && (c = l, l = d, d = c), c = wd(s, d);
          var h = wd(
            s,
            l
          );
          c && h && (e.rangeCount !== 1 || e.anchorNode !== c.node || e.anchorOffset !== c.offset || e.focusNode !== h.node || e.focusOffset !== h.offset) && (t = t.createRange(), t.setStart(c.node, c.offset), e.removeAllRanges(), d > l ? (e.addRange(t), e.extend(h.node, h.offset)) : (t.setEnd(h.node, h.offset), e.addRange(t)));
        }
      }
      for (t = [], e = s; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof s.focus == "function" && s.focus(), s = 0; s < t.length; s++) e = t[s], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  var $v = p && "documentMode" in document && 11 >= document.documentMode, lo = null, la = null, fs = null, aa = !1;
  function kd(e, t, s) {
    var l = s.window === s ? s.document : s.nodeType === 9 ? s : s.ownerDocument;
    aa || lo == null || lo !== it(l) || (l = lo, "selectionStart" in l && ia(l) ? l = { start: l.selectionStart, end: l.selectionEnd } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(), l = { anchorNode: l.anchorNode, anchorOffset: l.anchorOffset, focusNode: l.focusNode, focusOffset: l.focusOffset }), fs && ds(fs, l) || (fs = l, l = hi(la, "onSelect"), 0 < l.length && (t = new ql("onSelect", "select", null, t, s), e.push({ event: t, listeners: l }), t.target = lo)));
  }
  function di(e, t) {
    var s = {};
    return s[e.toLowerCase()] = t.toLowerCase(), s["Webkit" + e] = "webkit" + t, s["Moz" + e] = "moz" + t, s;
  }
  var ao = { animationend: di("Animation", "AnimationEnd"), animationiteration: di("Animation", "AnimationIteration"), animationstart: di("Animation", "AnimationStart"), transitionend: di("Transition", "TransitionEnd") }, ua = {}, Cd = {};
  p && (Cd = document.createElement("div").style, "AnimationEvent" in window || (delete ao.animationend.animation, delete ao.animationiteration.animation, delete ao.animationstart.animation), "TransitionEvent" in window || delete ao.transitionend.transition);
  function fi(e) {
    if (ua[e]) return ua[e];
    if (!ao[e]) return e;
    var t = ao[e], s;
    for (s in t) if (t.hasOwnProperty(s) && s in Cd) return ua[e] = t[s];
    return e;
  }
  var Ed = fi("animationend"), bd = fi("animationiteration"), Rd = fi("animationstart"), Nd = fi("transitionend"), Td = /* @__PURE__ */ new Map(), Pd = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function tr(e, t) {
    Td.set(e, t), u(t, [e]);
  }
  for (var ca = 0; ca < Pd.length; ca++) {
    var da = Pd[ca], Wv = da.toLowerCase(), Hv = da[0].toUpperCase() + da.slice(1);
    tr(Wv, "on" + Hv);
  }
  tr(Ed, "onAnimationEnd"), tr(bd, "onAnimationIteration"), tr(Rd, "onAnimationStart"), tr("dblclick", "onDoubleClick"), tr("focusin", "onFocus"), tr("focusout", "onBlur"), tr(Nd, "onTransitionEnd"), f("onMouseEnter", ["mouseout", "mouseover"]), f("onMouseLeave", ["mouseout", "mouseover"]), f("onPointerEnter", ["pointerout", "pointerover"]), f("onPointerLeave", ["pointerout", "pointerover"]), u("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), u("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), u("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), u("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), u("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), u("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var ps = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Zv = new Set("cancel close invalid load scroll toggle".split(" ").concat(ps));
  function Ad(e, t, s) {
    var l = e.type || "unknown-event";
    e.currentTarget = s, Wg(l, t, void 0, e), e.currentTarget = null;
  }
  function Od(e, t) {
    t = (t & 4) !== 0;
    for (var s = 0; s < e.length; s++) {
      var l = e[s], c = l.event;
      l = l.listeners;
      e: {
        var d = void 0;
        if (t) for (var h = l.length - 1; 0 <= h; h--) {
          var S = l[h], R = S.instance, F = S.currentTarget;
          if (S = S.listener, R !== d && c.isPropagationStopped()) break e;
          Ad(c, S, F), d = R;
        }
        else for (h = 0; h < l.length; h++) {
          if (S = l[h], R = S.instance, F = S.currentTarget, S = S.listener, R !== d && c.isPropagationStopped()) break e;
          Ad(c, S, F), d = R;
        }
      }
    }
    if (Ys) throw e = Ul, Ys = !1, Ul = null, e;
  }
  function Xe(e, t) {
    var s = t[xa];
    s === void 0 && (s = t[xa] = /* @__PURE__ */ new Set());
    var l = e + "__bubble";
    s.has(l) || (Id(t, e, 2, !1), s.add(l));
  }
  function fa(e, t, s) {
    var l = 0;
    t && (l |= 4), Id(s, e, l, t);
  }
  var pi = "_reactListening" + Math.random().toString(36).slice(2);
  function hs(e) {
    if (!e[pi]) {
      e[pi] = !0, i.forEach(function(s) {
        s !== "selectionchange" && (Zv.has(s) || fa(s, !1, e), fa(s, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[pi] || (t[pi] = !0, fa("selectionchange", !1, t));
    }
  }
  function Id(e, t, s, l) {
    switch (nd(t)) {
      case 1:
        var c = iv;
        break;
      case 4:
        c = lv;
        break;
      default:
        c = Ql;
    }
    s = c.bind(null, t, s, e), c = void 0, !Bl || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (c = !0), l ? c !== void 0 ? e.addEventListener(t, s, { capture: !0, passive: c }) : e.addEventListener(t, s, !0) : c !== void 0 ? e.addEventListener(t, s, { passive: c }) : e.addEventListener(t, s, !1);
  }
  function pa(e, t, s, l, c) {
    var d = l;
    if ((t & 1) === 0 && (t & 2) === 0 && l !== null) e: for (; ; ) {
      if (l === null) return;
      var h = l.tag;
      if (h === 3 || h === 4) {
        var S = l.stateNode.containerInfo;
        if (S === c || S.nodeType === 8 && S.parentNode === c) break;
        if (h === 4) for (h = l.return; h !== null; ) {
          var R = h.tag;
          if ((R === 3 || R === 4) && (R = h.stateNode.containerInfo, R === c || R.nodeType === 8 && R.parentNode === c)) return;
          h = h.return;
        }
        for (; S !== null; ) {
          if (h = Ar(S), h === null) return;
          if (R = h.tag, R === 5 || R === 6) {
            l = d = h;
            continue e;
          }
          S = S.parentNode;
        }
      }
      l = l.return;
    }
    Fc(function() {
      var F = d, Z = to(s), G = [];
      e: {
        var W = Td.get(e);
        if (W !== void 0) {
          var ae = ql, fe = e;
          switch (e) {
            case "keypress":
              if (li(s) === 0) break e;
            case "keydown":
            case "keyup":
              ae = Sv;
              break;
            case "focusin":
              fe = "focus", ae = ta;
              break;
            case "focusout":
              fe = "blur", ae = ta;
              break;
            case "beforeblur":
            case "afterblur":
              ae = ta;
              break;
            case "click":
              if (s.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              ae = sd;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              ae = cv;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              ae = Ev;
              break;
            case Ed:
            case bd:
            case Rd:
              ae = pv;
              break;
            case Nd:
              ae = Rv;
              break;
            case "scroll":
              ae = av;
              break;
            case "wheel":
              ae = Tv;
              break;
            case "copy":
            case "cut":
            case "paste":
              ae = mv;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              ae = ld;
          }
          var he = (t & 4) !== 0, ut = !he && e === "scroll", M = he ? W !== null ? W + "Capture" : null : W;
          he = [];
          for (var T = F, D; T !== null; ) {
            D = T;
            var q = D.stateNode;
            if (D.tag === 5 && q !== null && (D = q, M !== null && (q = Yo(T, M), q != null && he.push(ms(T, q, D)))), ut) break;
            T = T.return;
          }
          0 < he.length && (W = new ae(W, fe, null, s, Z), G.push({ event: W, listeners: he }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (W = e === "mouseover" || e === "pointerover", ae = e === "mouseout" || e === "pointerout", W && s !== Qo && (fe = s.relatedTarget || s.fromElement) && (Ar(fe) || fe[In])) break e;
          if ((ae || W) && (W = Z.window === Z ? Z : (W = Z.ownerDocument) ? W.defaultView || W.parentWindow : window, ae ? (fe = s.relatedTarget || s.toElement, ae = F, fe = fe ? Ar(fe) : null, fe !== null && (ut = Pr(fe), fe !== ut || fe.tag !== 5 && fe.tag !== 6) && (fe = null)) : (ae = null, fe = F), ae !== fe)) {
            if (he = sd, q = "onMouseLeave", M = "onMouseEnter", T = "mouse", (e === "pointerout" || e === "pointerover") && (he = ld, q = "onPointerLeave", M = "onPointerEnter", T = "pointer"), ut = ae == null ? W : fo(ae), D = fe == null ? W : fo(fe), W = new he(q, T + "leave", ae, s, Z), W.target = ut, W.relatedTarget = D, q = null, Ar(Z) === F && (he = new he(M, T + "enter", fe, s, Z), he.target = D, he.relatedTarget = ut, q = he), ut = q, ae && fe) t: {
              for (he = ae, M = fe, T = 0, D = he; D; D = uo(D)) T++;
              for (D = 0, q = M; q; q = uo(q)) D++;
              for (; 0 < T - D; ) he = uo(he), T--;
              for (; 0 < D - T; ) M = uo(M), D--;
              for (; T--; ) {
                if (he === M || M !== null && he === M.alternate) break t;
                he = uo(he), M = uo(M);
              }
              he = null;
            }
            else he = null;
            ae !== null && Md(G, W, ae, he, !1), fe !== null && ut !== null && Md(G, ut, fe, he, !0);
          }
        }
        e: {
          if (W = F ? fo(F) : window, ae = W.nodeName && W.nodeName.toLowerCase(), ae === "select" || ae === "input" && W.type === "file") var ve = Lv;
          else if (pd(W)) if (md) ve = zv;
          else {
            ve = Fv;
            var ke = Dv;
          }
          else (ae = W.nodeName) && ae.toLowerCase() === "input" && (W.type === "checkbox" || W.type === "radio") && (ve = Vv);
          if (ve && (ve = ve(e, F))) {
            hd(G, ve, s, Z);
            break e;
          }
          ke && ke(e, W, F), e === "focusout" && (ke = W._wrapperState) && ke.controlled && W.type === "number" && On(W, "number", W.value);
        }
        switch (ke = F ? fo(F) : window, e) {
          case "focusin":
            (pd(ke) || ke.contentEditable === "true") && (lo = ke, la = F, fs = null);
            break;
          case "focusout":
            fs = la = lo = null;
            break;
          case "mousedown":
            aa = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            aa = !1, kd(G, s, Z);
            break;
          case "selectionchange":
            if ($v) break;
          case "keydown":
          case "keyup":
            kd(G, s, Z);
        }
        var Ce;
        if (ra) e: {
          switch (e) {
            case "compositionstart":
              var Ne = "onCompositionStart";
              break e;
            case "compositionend":
              Ne = "onCompositionEnd";
              break e;
            case "compositionupdate":
              Ne = "onCompositionUpdate";
              break e;
          }
          Ne = void 0;
        }
        else io ? dd(e, s) && (Ne = "onCompositionEnd") : e === "keydown" && s.keyCode === 229 && (Ne = "onCompositionStart");
        Ne && (ad && s.locale !== "ko" && (io || Ne !== "onCompositionStart" ? Ne === "onCompositionEnd" && io && (Ce = rd()) : (er = Z, Xl = "value" in er ? er.value : er.textContent, io = !0)), ke = hi(F, Ne), 0 < ke.length && (Ne = new id(Ne, e, null, s, Z), G.push({ event: Ne, listeners: ke }), Ce ? Ne.data = Ce : (Ce = fd(s), Ce !== null && (Ne.data = Ce)))), (Ce = Av ? Ov(e, s) : Iv(e, s)) && (F = hi(F, "onBeforeInput"), 0 < F.length && (Z = new id("onBeforeInput", "beforeinput", null, s, Z), G.push({ event: Z, listeners: F }), Z.data = Ce));
      }
      Od(G, t);
    });
  }
  function ms(e, t, s) {
    return { instance: e, listener: t, currentTarget: s };
  }
  function hi(e, t) {
    for (var s = t + "Capture", l = []; e !== null; ) {
      var c = e, d = c.stateNode;
      c.tag === 5 && d !== null && (c = d, d = Yo(e, s), d != null && l.unshift(ms(e, d, c)), d = Yo(e, t), d != null && l.push(ms(e, d, c))), e = e.return;
    }
    return l;
  }
  function uo(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Md(e, t, s, l, c) {
    for (var d = t._reactName, h = []; s !== null && s !== l; ) {
      var S = s, R = S.alternate, F = S.stateNode;
      if (R !== null && R === l) break;
      S.tag === 5 && F !== null && (S = F, c ? (R = Yo(s, d), R != null && h.unshift(ms(s, R, S))) : c || (R = Yo(s, d), R != null && h.push(ms(s, R, S)))), s = s.return;
    }
    h.length !== 0 && e.push({ event: t, listeners: h });
  }
  var Gv = /\r\n?/g, Kv = /\u0000|\uFFFD/g;
  function jd(e) {
    return (typeof e == "string" ? e : "" + e).replace(Gv, `
`).replace(Kv, "");
  }
  function mi(e, t, s) {
    if (t = jd(t), jd(e) !== t && s) throw Error(o(425));
  }
  function gi() {
  }
  var ha = null, ma = null;
  function ga(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var va = typeof setTimeout == "function" ? setTimeout : void 0, Qv = typeof clearTimeout == "function" ? clearTimeout : void 0, Ld = typeof Promise == "function" ? Promise : void 0, Yv = typeof queueMicrotask == "function" ? queueMicrotask : typeof Ld < "u" ? function(e) {
    return Ld.resolve(null).then(e).catch(Xv);
  } : va;
  function Xv(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function ya(e, t) {
    var s = t, l = 0;
    do {
      var c = s.nextSibling;
      if (e.removeChild(s), c && c.nodeType === 8) if (s = c.data, s === "/$") {
        if (l === 0) {
          e.removeChild(c), ss(t);
          return;
        }
        l--;
      } else s !== "$" && s !== "$?" && s !== "$!" || l++;
      s = c;
    } while (s);
    ss(t);
  }
  function nr(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function Dd(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var s = e.data;
        if (s === "$" || s === "$!" || s === "$?") {
          if (t === 0) return e;
          t--;
        } else s === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var co = Math.random().toString(36).slice(2), kn = "__reactFiber$" + co, gs = "__reactProps$" + co, In = "__reactContainer$" + co, xa = "__reactEvents$" + co, qv = "__reactListeners$" + co, Jv = "__reactHandles$" + co;
  function Ar(e) {
    var t = e[kn];
    if (t) return t;
    for (var s = e.parentNode; s; ) {
      if (t = s[In] || s[kn]) {
        if (s = t.alternate, t.child !== null || s !== null && s.child !== null) for (e = Dd(e); e !== null; ) {
          if (s = e[kn]) return s;
          e = Dd(e);
        }
        return t;
      }
      e = s, s = e.parentNode;
    }
    return null;
  }
  function vs(e) {
    return e = e[kn] || e[In], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function fo(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(o(33));
  }
  function vi(e) {
    return e[gs] || null;
  }
  var wa = [], po = -1;
  function rr(e) {
    return { current: e };
  }
  function qe(e) {
    0 > po || (e.current = wa[po], wa[po] = null, po--);
  }
  function Ye(e, t) {
    po++, wa[po] = e.current, e.current = t;
  }
  var or = {}, Et = rr(or), It = rr(!1), Or = or;
  function ho(e, t) {
    var s = e.type.contextTypes;
    if (!s) return or;
    var l = e.stateNode;
    if (l && l.__reactInternalMemoizedUnmaskedChildContext === t) return l.__reactInternalMemoizedMaskedChildContext;
    var c = {}, d;
    for (d in s) c[d] = t[d];
    return l && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = c), c;
  }
  function Mt(e) {
    return e = e.childContextTypes, e != null;
  }
  function yi() {
    qe(It), qe(Et);
  }
  function Fd(e, t, s) {
    if (Et.current !== or) throw Error(o(168));
    Ye(Et, t), Ye(It, s);
  }
  function Vd(e, t, s) {
    var l = e.stateNode;
    if (t = t.childContextTypes, typeof l.getChildContext != "function") return s;
    l = l.getChildContext();
    for (var c in l) if (!(c in t)) throw Error(o(108, se(e) || "Unknown", c));
    return Y({}, s, l);
  }
  function xi(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || or, Or = Et.current, Ye(Et, e), Ye(It, It.current), !0;
  }
  function zd(e, t, s) {
    var l = e.stateNode;
    if (!l) throw Error(o(169));
    s ? (e = Vd(e, t, Or), l.__reactInternalMemoizedMergedChildContext = e, qe(It), qe(Et), Ye(Et, e)) : qe(It), Ye(It, s);
  }
  var Mn = null, wi = !1, _a = !1;
  function Bd(e) {
    Mn === null ? Mn = [e] : Mn.push(e);
  }
  function ey(e) {
    wi = !0, Bd(e);
  }
  function sr() {
    if (!_a && Mn !== null) {
      _a = !0;
      var e = 0, t = Ge;
      try {
        var s = Mn;
        for (Ge = 1; e < s.length; e++) {
          var l = s[e];
          do
            l = l(!0);
          while (l !== null);
        }
        Mn = null, wi = !1;
      } catch (c) {
        throw Mn !== null && (Mn = Mn.slice(e + 1)), $c($l, sr), c;
      } finally {
        Ge = t, _a = !1;
      }
    }
    return null;
  }
  var mo = [], go = 0, _i = null, Si = 0, Yt = [], Xt = 0, Ir = null, jn = 1, Ln = "";
  function Mr(e, t) {
    mo[go++] = Si, mo[go++] = _i, _i = e, Si = t;
  }
  function Ud(e, t, s) {
    Yt[Xt++] = jn, Yt[Xt++] = Ln, Yt[Xt++] = Ir, Ir = e;
    var l = jn;
    e = Ln;
    var c = 32 - an(l) - 1;
    l &= ~(1 << c), s += 1;
    var d = 32 - an(t) + c;
    if (30 < d) {
      var h = c - c % 5;
      d = (l & (1 << h) - 1).toString(32), l >>= h, c -= h, jn = 1 << 32 - an(t) + c | s << c | l, Ln = d + e;
    } else jn = 1 << d | s << c | l, Ln = e;
  }
  function Sa(e) {
    e.return !== null && (Mr(e, 1), Ud(e, 1, 0));
  }
  function ka(e) {
    for (; e === _i; ) _i = mo[--go], mo[go] = null, Si = mo[--go], mo[go] = null;
    for (; e === Ir; ) Ir = Yt[--Xt], Yt[Xt] = null, Ln = Yt[--Xt], Yt[Xt] = null, jn = Yt[--Xt], Yt[Xt] = null;
  }
  var Ut = null, $t = null, et = !1, cn = null;
  function $d(e, t) {
    var s = tn(5, null, null, 0);
    s.elementType = "DELETED", s.stateNode = t, s.return = e, t = e.deletions, t === null ? (e.deletions = [s], e.flags |= 16) : t.push(s);
  }
  function Wd(e, t) {
    switch (e.tag) {
      case 5:
        var s = e.type;
        return t = t.nodeType !== 1 || s.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Ut = e, $t = nr(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Ut = e, $t = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (s = Ir !== null ? { id: jn, overflow: Ln } : null, e.memoizedState = { dehydrated: t, treeContext: s, retryLane: 1073741824 }, s = tn(18, null, null, 0), s.stateNode = t, s.return = e, e.child = s, Ut = e, $t = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Ca(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Ea(e) {
    if (et) {
      var t = $t;
      if (t) {
        var s = t;
        if (!Wd(e, t)) {
          if (Ca(e)) throw Error(o(418));
          t = nr(s.nextSibling);
          var l = Ut;
          t && Wd(e, t) ? $d(l, s) : (e.flags = e.flags & -4097 | 2, et = !1, Ut = e);
        }
      } else {
        if (Ca(e)) throw Error(o(418));
        e.flags = e.flags & -4097 | 2, et = !1, Ut = e;
      }
    }
  }
  function Hd(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    Ut = e;
  }
  function ki(e) {
    if (e !== Ut) return !1;
    if (!et) return Hd(e), et = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !ga(e.type, e.memoizedProps)), t && (t = $t)) {
      if (Ca(e)) throw Zd(), Error(o(418));
      for (; t; ) $d(e, t), t = nr(t.nextSibling);
    }
    if (Hd(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var s = e.data;
            if (s === "/$") {
              if (t === 0) {
                $t = nr(e.nextSibling);
                break e;
              }
              t--;
            } else s !== "$" && s !== "$!" && s !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        $t = null;
      }
    } else $t = Ut ? nr(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Zd() {
    for (var e = $t; e; ) e = nr(e.nextSibling);
  }
  function vo() {
    $t = Ut = null, et = !1;
  }
  function ba(e) {
    cn === null ? cn = [e] : cn.push(e);
  }
  var ty = L.ReactCurrentBatchConfig;
  function ys(e, t, s) {
    if (e = s.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (s._owner) {
        if (s = s._owner, s) {
          if (s.tag !== 1) throw Error(o(309));
          var l = s.stateNode;
        }
        if (!l) throw Error(o(147, e));
        var c = l, d = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === d ? t.ref : (t = function(h) {
          var S = c.refs;
          h === null ? delete S[d] : S[d] = h;
        }, t._stringRef = d, t);
      }
      if (typeof e != "string") throw Error(o(284));
      if (!s._owner) throw Error(o(290, e));
    }
    return e;
  }
  function Ci(e, t) {
    throw e = Object.prototype.toString.call(t), Error(o(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function Gd(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Kd(e) {
    function t(M, T) {
      if (e) {
        var D = M.deletions;
        D === null ? (M.deletions = [T], M.flags |= 16) : D.push(T);
      }
    }
    function s(M, T) {
      if (!e) return null;
      for (; T !== null; ) t(M, T), T = T.sibling;
      return null;
    }
    function l(M, T) {
      for (M = /* @__PURE__ */ new Map(); T !== null; ) T.key !== null ? M.set(T.key, T) : M.set(T.index, T), T = T.sibling;
      return M;
    }
    function c(M, T) {
      return M = pr(M, T), M.index = 0, M.sibling = null, M;
    }
    function d(M, T, D) {
      return M.index = D, e ? (D = M.alternate, D !== null ? (D = D.index, D < T ? (M.flags |= 2, T) : D) : (M.flags |= 2, T)) : (M.flags |= 1048576, T);
    }
    function h(M) {
      return e && M.alternate === null && (M.flags |= 2), M;
    }
    function S(M, T, D, q) {
      return T === null || T.tag !== 6 ? (T = vu(D, M.mode, q), T.return = M, T) : (T = c(T, D), T.return = M, T);
    }
    function R(M, T, D, q) {
      var ve = D.type;
      return ve === H ? Z(M, T, D.props.children, q, D.key) : T !== null && (T.elementType === ve || typeof ve == "object" && ve !== null && ve.$$typeof === oe && Gd(ve) === T.type) ? (q = c(T, D.props), q.ref = ys(M, T, D), q.return = M, q) : (q = Ki(D.type, D.key, D.props, null, M.mode, q), q.ref = ys(M, T, D), q.return = M, q);
    }
    function F(M, T, D, q) {
      return T === null || T.tag !== 4 || T.stateNode.containerInfo !== D.containerInfo || T.stateNode.implementation !== D.implementation ? (T = yu(D, M.mode, q), T.return = M, T) : (T = c(T, D.children || []), T.return = M, T);
    }
    function Z(M, T, D, q, ve) {
      return T === null || T.tag !== 7 ? (T = Ur(D, M.mode, q, ve), T.return = M, T) : (T = c(T, D), T.return = M, T);
    }
    function G(M, T, D) {
      if (typeof T == "string" && T !== "" || typeof T == "number") return T = vu("" + T, M.mode, D), T.return = M, T;
      if (typeof T == "object" && T !== null) {
        switch (T.$$typeof) {
          case B:
            return D = Ki(T.type, T.key, T.props, null, M.mode, D), D.ref = ys(M, null, T), D.return = M, D;
          case K:
            return T = yu(T, M.mode, D), T.return = M, T;
          case oe:
            var q = T._init;
            return G(M, q(T._payload), D);
        }
        if (Qn(T) || J(T)) return T = Ur(T, M.mode, D, null), T.return = M, T;
        Ci(M, T);
      }
      return null;
    }
    function W(M, T, D, q) {
      var ve = T !== null ? T.key : null;
      if (typeof D == "string" && D !== "" || typeof D == "number") return ve !== null ? null : S(M, T, "" + D, q);
      if (typeof D == "object" && D !== null) {
        switch (D.$$typeof) {
          case B:
            return D.key === ve ? R(M, T, D, q) : null;
          case K:
            return D.key === ve ? F(M, T, D, q) : null;
          case oe:
            return ve = D._init, W(
              M,
              T,
              ve(D._payload),
              q
            );
        }
        if (Qn(D) || J(D)) return ve !== null ? null : Z(M, T, D, q, null);
        Ci(M, D);
      }
      return null;
    }
    function ae(M, T, D, q, ve) {
      if (typeof q == "string" && q !== "" || typeof q == "number") return M = M.get(D) || null, S(T, M, "" + q, ve);
      if (typeof q == "object" && q !== null) {
        switch (q.$$typeof) {
          case B:
            return M = M.get(q.key === null ? D : q.key) || null, R(T, M, q, ve);
          case K:
            return M = M.get(q.key === null ? D : q.key) || null, F(T, M, q, ve);
          case oe:
            var ke = q._init;
            return ae(M, T, D, ke(q._payload), ve);
        }
        if (Qn(q) || J(q)) return M = M.get(D) || null, Z(T, M, q, ve, null);
        Ci(T, q);
      }
      return null;
    }
    function fe(M, T, D, q) {
      for (var ve = null, ke = null, Ce = T, Ne = T = 0, wt = null; Ce !== null && Ne < D.length; Ne++) {
        Ce.index > Ne ? (wt = Ce, Ce = null) : wt = Ce.sibling;
        var We = W(M, Ce, D[Ne], q);
        if (We === null) {
          Ce === null && (Ce = wt);
          break;
        }
        e && Ce && We.alternate === null && t(M, Ce), T = d(We, T, Ne), ke === null ? ve = We : ke.sibling = We, ke = We, Ce = wt;
      }
      if (Ne === D.length) return s(M, Ce), et && Mr(M, Ne), ve;
      if (Ce === null) {
        for (; Ne < D.length; Ne++) Ce = G(M, D[Ne], q), Ce !== null && (T = d(Ce, T, Ne), ke === null ? ve = Ce : ke.sibling = Ce, ke = Ce);
        return et && Mr(M, Ne), ve;
      }
      for (Ce = l(M, Ce); Ne < D.length; Ne++) wt = ae(Ce, M, Ne, D[Ne], q), wt !== null && (e && wt.alternate !== null && Ce.delete(wt.key === null ? Ne : wt.key), T = d(wt, T, Ne), ke === null ? ve = wt : ke.sibling = wt, ke = wt);
      return e && Ce.forEach(function(hr) {
        return t(M, hr);
      }), et && Mr(M, Ne), ve;
    }
    function he(M, T, D, q) {
      var ve = J(D);
      if (typeof ve != "function") throw Error(o(150));
      if (D = ve.call(D), D == null) throw Error(o(151));
      for (var ke = ve = null, Ce = T, Ne = T = 0, wt = null, We = D.next(); Ce !== null && !We.done; Ne++, We = D.next()) {
        Ce.index > Ne ? (wt = Ce, Ce = null) : wt = Ce.sibling;
        var hr = W(M, Ce, We.value, q);
        if (hr === null) {
          Ce === null && (Ce = wt);
          break;
        }
        e && Ce && hr.alternate === null && t(M, Ce), T = d(hr, T, Ne), ke === null ? ve = hr : ke.sibling = hr, ke = hr, Ce = wt;
      }
      if (We.done) return s(
        M,
        Ce
      ), et && Mr(M, Ne), ve;
      if (Ce === null) {
        for (; !We.done; Ne++, We = D.next()) We = G(M, We.value, q), We !== null && (T = d(We, T, Ne), ke === null ? ve = We : ke.sibling = We, ke = We);
        return et && Mr(M, Ne), ve;
      }
      for (Ce = l(M, Ce); !We.done; Ne++, We = D.next()) We = ae(Ce, M, Ne, We.value, q), We !== null && (e && We.alternate !== null && Ce.delete(We.key === null ? Ne : We.key), T = d(We, T, Ne), ke === null ? ve = We : ke.sibling = We, ke = We);
      return e && Ce.forEach(function(My) {
        return t(M, My);
      }), et && Mr(M, Ne), ve;
    }
    function ut(M, T, D, q) {
      if (typeof D == "object" && D !== null && D.type === H && D.key === null && (D = D.props.children), typeof D == "object" && D !== null) {
        switch (D.$$typeof) {
          case B:
            e: {
              for (var ve = D.key, ke = T; ke !== null; ) {
                if (ke.key === ve) {
                  if (ve = D.type, ve === H) {
                    if (ke.tag === 7) {
                      s(M, ke.sibling), T = c(ke, D.props.children), T.return = M, M = T;
                      break e;
                    }
                  } else if (ke.elementType === ve || typeof ve == "object" && ve !== null && ve.$$typeof === oe && Gd(ve) === ke.type) {
                    s(M, ke.sibling), T = c(ke, D.props), T.ref = ys(M, ke, D), T.return = M, M = T;
                    break e;
                  }
                  s(M, ke);
                  break;
                } else t(M, ke);
                ke = ke.sibling;
              }
              D.type === H ? (T = Ur(D.props.children, M.mode, q, D.key), T.return = M, M = T) : (q = Ki(D.type, D.key, D.props, null, M.mode, q), q.ref = ys(M, T, D), q.return = M, M = q);
            }
            return h(M);
          case K:
            e: {
              for (ke = D.key; T !== null; ) {
                if (T.key === ke) if (T.tag === 4 && T.stateNode.containerInfo === D.containerInfo && T.stateNode.implementation === D.implementation) {
                  s(M, T.sibling), T = c(T, D.children || []), T.return = M, M = T;
                  break e;
                } else {
                  s(M, T);
                  break;
                }
                else t(M, T);
                T = T.sibling;
              }
              T = yu(D, M.mode, q), T.return = M, M = T;
            }
            return h(M);
          case oe:
            return ke = D._init, ut(M, T, ke(D._payload), q);
        }
        if (Qn(D)) return fe(M, T, D, q);
        if (J(D)) return he(M, T, D, q);
        Ci(M, D);
      }
      return typeof D == "string" && D !== "" || typeof D == "number" ? (D = "" + D, T !== null && T.tag === 6 ? (s(M, T.sibling), T = c(T, D), T.return = M, M = T) : (s(M, T), T = vu(D, M.mode, q), T.return = M, M = T), h(M)) : s(M, T);
    }
    return ut;
  }
  var yo = Kd(!0), Qd = Kd(!1), Ei = rr(null), bi = null, xo = null, Ra = null;
  function Na() {
    Ra = xo = bi = null;
  }
  function Ta(e) {
    var t = Ei.current;
    qe(Ei), e._currentValue = t;
  }
  function Pa(e, t, s) {
    for (; e !== null; ) {
      var l = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, l !== null && (l.childLanes |= t)) : l !== null && (l.childLanes & t) !== t && (l.childLanes |= t), e === s) break;
      e = e.return;
    }
  }
  function wo(e, t) {
    bi = e, Ra = xo = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (jt = !0), e.firstContext = null);
  }
  function qt(e) {
    var t = e._currentValue;
    if (Ra !== e) if (e = { context: e, memoizedValue: t, next: null }, xo === null) {
      if (bi === null) throw Error(o(308));
      xo = e, bi.dependencies = { lanes: 0, firstContext: e };
    } else xo = xo.next = e;
    return t;
  }
  var jr = null;
  function Aa(e) {
    jr === null ? jr = [e] : jr.push(e);
  }
  function Yd(e, t, s, l) {
    var c = t.interleaved;
    return c === null ? (s.next = s, Aa(t)) : (s.next = c.next, c.next = s), t.interleaved = s, Dn(e, l);
  }
  function Dn(e, t) {
    e.lanes |= t;
    var s = e.alternate;
    for (s !== null && (s.lanes |= t), s = e, e = e.return; e !== null; ) e.childLanes |= t, s = e.alternate, s !== null && (s.childLanes |= t), s = e, e = e.return;
    return s.tag === 3 ? s.stateNode : null;
  }
  var ir = !1;
  function Oa(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Xd(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function Fn(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function lr(e, t, s) {
    var l = e.updateQueue;
    if (l === null) return null;
    if (l = l.shared, (Be & 2) !== 0) {
      var c = l.pending;
      return c === null ? t.next = t : (t.next = c.next, c.next = t), l.pending = t, Dn(e, s);
    }
    return c = l.interleaved, c === null ? (t.next = t, Aa(l)) : (t.next = c.next, c.next = t), l.interleaved = t, Dn(e, s);
  }
  function Ri(e, t, s) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (s & 4194240) !== 0)) {
      var l = t.lanes;
      l &= e.pendingLanes, s |= l, t.lanes = s, Zl(e, s);
    }
  }
  function qd(e, t) {
    var s = e.updateQueue, l = e.alternate;
    if (l !== null && (l = l.updateQueue, s === l)) {
      var c = null, d = null;
      if (s = s.firstBaseUpdate, s !== null) {
        do {
          var h = { eventTime: s.eventTime, lane: s.lane, tag: s.tag, payload: s.payload, callback: s.callback, next: null };
          d === null ? c = d = h : d = d.next = h, s = s.next;
        } while (s !== null);
        d === null ? c = d = t : d = d.next = t;
      } else c = d = t;
      s = { baseState: l.baseState, firstBaseUpdate: c, lastBaseUpdate: d, shared: l.shared, effects: l.effects }, e.updateQueue = s;
      return;
    }
    e = s.lastBaseUpdate, e === null ? s.firstBaseUpdate = t : e.next = t, s.lastBaseUpdate = t;
  }
  function Ni(e, t, s, l) {
    var c = e.updateQueue;
    ir = !1;
    var d = c.firstBaseUpdate, h = c.lastBaseUpdate, S = c.shared.pending;
    if (S !== null) {
      c.shared.pending = null;
      var R = S, F = R.next;
      R.next = null, h === null ? d = F : h.next = F, h = R;
      var Z = e.alternate;
      Z !== null && (Z = Z.updateQueue, S = Z.lastBaseUpdate, S !== h && (S === null ? Z.firstBaseUpdate = F : S.next = F, Z.lastBaseUpdate = R));
    }
    if (d !== null) {
      var G = c.baseState;
      h = 0, Z = F = R = null, S = d;
      do {
        var W = S.lane, ae = S.eventTime;
        if ((l & W) === W) {
          Z !== null && (Z = Z.next = {
            eventTime: ae,
            lane: 0,
            tag: S.tag,
            payload: S.payload,
            callback: S.callback,
            next: null
          });
          e: {
            var fe = e, he = S;
            switch (W = t, ae = s, he.tag) {
              case 1:
                if (fe = he.payload, typeof fe == "function") {
                  G = fe.call(ae, G, W);
                  break e;
                }
                G = fe;
                break e;
              case 3:
                fe.flags = fe.flags & -65537 | 128;
              case 0:
                if (fe = he.payload, W = typeof fe == "function" ? fe.call(ae, G, W) : fe, W == null) break e;
                G = Y({}, G, W);
                break e;
              case 2:
                ir = !0;
            }
          }
          S.callback !== null && S.lane !== 0 && (e.flags |= 64, W = c.effects, W === null ? c.effects = [S] : W.push(S));
        } else ae = { eventTime: ae, lane: W, tag: S.tag, payload: S.payload, callback: S.callback, next: null }, Z === null ? (F = Z = ae, R = G) : Z = Z.next = ae, h |= W;
        if (S = S.next, S === null) {
          if (S = c.shared.pending, S === null) break;
          W = S, S = W.next, W.next = null, c.lastBaseUpdate = W, c.shared.pending = null;
        }
      } while (!0);
      if (Z === null && (R = G), c.baseState = R, c.firstBaseUpdate = F, c.lastBaseUpdate = Z, t = c.shared.interleaved, t !== null) {
        c = t;
        do
          h |= c.lane, c = c.next;
        while (c !== t);
      } else d === null && (c.shared.lanes = 0);
      Fr |= h, e.lanes = h, e.memoizedState = G;
    }
  }
  function Jd(e, t, s) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
      var l = e[t], c = l.callback;
      if (c !== null) {
        if (l.callback = null, l = s, typeof c != "function") throw Error(o(191, c));
        c.call(l);
      }
    }
  }
  var xs = {}, Cn = rr(xs), ws = rr(xs), _s = rr(xs);
  function Lr(e) {
    if (e === xs) throw Error(o(174));
    return e;
  }
  function Ia(e, t) {
    switch (Ye(_s, t), Ye(ws, e), Ye(Cn, xs), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : we(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = we(t, e);
    }
    qe(Cn), Ye(Cn, t);
  }
  function _o() {
    qe(Cn), qe(ws), qe(_s);
  }
  function ef(e) {
    Lr(_s.current);
    var t = Lr(Cn.current), s = we(t, e.type);
    t !== s && (Ye(ws, e), Ye(Cn, s));
  }
  function Ma(e) {
    ws.current === e && (qe(Cn), qe(ws));
  }
  var nt = rr(0);
  function Ti(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var s = t.memoizedState;
        if (s !== null && (s = s.dehydrated, s === null || s.data === "$?" || s.data === "$!")) return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var ja = [];
  function La() {
    for (var e = 0; e < ja.length; e++) ja[e]._workInProgressVersionPrimary = null;
    ja.length = 0;
  }
  var Pi = L.ReactCurrentDispatcher, Da = L.ReactCurrentBatchConfig, Dr = 0, rt = null, mt = null, yt = null, Ai = !1, Ss = !1, ks = 0, ny = 0;
  function bt() {
    throw Error(o(321));
  }
  function Fa(e, t) {
    if (t === null) return !1;
    for (var s = 0; s < t.length && s < e.length; s++) if (!un(e[s], t[s])) return !1;
    return !0;
  }
  function Va(e, t, s, l, c, d) {
    if (Dr = d, rt = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Pi.current = e === null || e.memoizedState === null ? iy : ly, e = s(l, c), Ss) {
      d = 0;
      do {
        if (Ss = !1, ks = 0, 25 <= d) throw Error(o(301));
        d += 1, yt = mt = null, t.updateQueue = null, Pi.current = ay, e = s(l, c);
      } while (Ss);
    }
    if (Pi.current = Mi, t = mt !== null && mt.next !== null, Dr = 0, yt = mt = rt = null, Ai = !1, t) throw Error(o(300));
    return e;
  }
  function za() {
    var e = ks !== 0;
    return ks = 0, e;
  }
  function En() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return yt === null ? rt.memoizedState = yt = e : yt = yt.next = e, yt;
  }
  function Jt() {
    if (mt === null) {
      var e = rt.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = mt.next;
    var t = yt === null ? rt.memoizedState : yt.next;
    if (t !== null) yt = t, mt = e;
    else {
      if (e === null) throw Error(o(310));
      mt = e, e = { memoizedState: mt.memoizedState, baseState: mt.baseState, baseQueue: mt.baseQueue, queue: mt.queue, next: null }, yt === null ? rt.memoizedState = yt = e : yt = yt.next = e;
    }
    return yt;
  }
  function Cs(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Ba(e) {
    var t = Jt(), s = t.queue;
    if (s === null) throw Error(o(311));
    s.lastRenderedReducer = e;
    var l = mt, c = l.baseQueue, d = s.pending;
    if (d !== null) {
      if (c !== null) {
        var h = c.next;
        c.next = d.next, d.next = h;
      }
      l.baseQueue = c = d, s.pending = null;
    }
    if (c !== null) {
      d = c.next, l = l.baseState;
      var S = h = null, R = null, F = d;
      do {
        var Z = F.lane;
        if ((Dr & Z) === Z) R !== null && (R = R.next = { lane: 0, action: F.action, hasEagerState: F.hasEagerState, eagerState: F.eagerState, next: null }), l = F.hasEagerState ? F.eagerState : e(l, F.action);
        else {
          var G = {
            lane: Z,
            action: F.action,
            hasEagerState: F.hasEagerState,
            eagerState: F.eagerState,
            next: null
          };
          R === null ? (S = R = G, h = l) : R = R.next = G, rt.lanes |= Z, Fr |= Z;
        }
        F = F.next;
      } while (F !== null && F !== d);
      R === null ? h = l : R.next = S, un(l, t.memoizedState) || (jt = !0), t.memoizedState = l, t.baseState = h, t.baseQueue = R, s.lastRenderedState = l;
    }
    if (e = s.interleaved, e !== null) {
      c = e;
      do
        d = c.lane, rt.lanes |= d, Fr |= d, c = c.next;
      while (c !== e);
    } else c === null && (s.lanes = 0);
    return [t.memoizedState, s.dispatch];
  }
  function Ua(e) {
    var t = Jt(), s = t.queue;
    if (s === null) throw Error(o(311));
    s.lastRenderedReducer = e;
    var l = s.dispatch, c = s.pending, d = t.memoizedState;
    if (c !== null) {
      s.pending = null;
      var h = c = c.next;
      do
        d = e(d, h.action), h = h.next;
      while (h !== c);
      un(d, t.memoizedState) || (jt = !0), t.memoizedState = d, t.baseQueue === null && (t.baseState = d), s.lastRenderedState = d;
    }
    return [d, l];
  }
  function tf() {
  }
  function nf(e, t) {
    var s = rt, l = Jt(), c = t(), d = !un(l.memoizedState, c);
    if (d && (l.memoizedState = c, jt = !0), l = l.queue, $a(sf.bind(null, s, l, e), [e]), l.getSnapshot !== t || d || yt !== null && yt.memoizedState.tag & 1) {
      if (s.flags |= 2048, Es(9, of.bind(null, s, l, c, t), void 0, null), xt === null) throw Error(o(349));
      (Dr & 30) !== 0 || rf(s, t, c);
    }
    return c;
  }
  function rf(e, t, s) {
    e.flags |= 16384, e = { getSnapshot: t, value: s }, t = rt.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, rt.updateQueue = t, t.stores = [e]) : (s = t.stores, s === null ? t.stores = [e] : s.push(e));
  }
  function of(e, t, s, l) {
    t.value = s, t.getSnapshot = l, lf(t) && af(e);
  }
  function sf(e, t, s) {
    return s(function() {
      lf(t) && af(e);
    });
  }
  function lf(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var s = t();
      return !un(e, s);
    } catch {
      return !0;
    }
  }
  function af(e) {
    var t = Dn(e, 1);
    t !== null && hn(t, e, 1, -1);
  }
  function uf(e) {
    var t = En();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Cs, lastRenderedState: e }, t.queue = e, e = e.dispatch = sy.bind(null, rt, e), [t.memoizedState, e];
  }
  function Es(e, t, s, l) {
    return e = { tag: e, create: t, destroy: s, deps: l, next: null }, t = rt.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, rt.updateQueue = t, t.lastEffect = e.next = e) : (s = t.lastEffect, s === null ? t.lastEffect = e.next = e : (l = s.next, s.next = e, e.next = l, t.lastEffect = e)), e;
  }
  function cf() {
    return Jt().memoizedState;
  }
  function Oi(e, t, s, l) {
    var c = En();
    rt.flags |= e, c.memoizedState = Es(1 | t, s, void 0, l === void 0 ? null : l);
  }
  function Ii(e, t, s, l) {
    var c = Jt();
    l = l === void 0 ? null : l;
    var d = void 0;
    if (mt !== null) {
      var h = mt.memoizedState;
      if (d = h.destroy, l !== null && Fa(l, h.deps)) {
        c.memoizedState = Es(t, s, d, l);
        return;
      }
    }
    rt.flags |= e, c.memoizedState = Es(1 | t, s, d, l);
  }
  function df(e, t) {
    return Oi(8390656, 8, e, t);
  }
  function $a(e, t) {
    return Ii(2048, 8, e, t);
  }
  function ff(e, t) {
    return Ii(4, 2, e, t);
  }
  function pf(e, t) {
    return Ii(4, 4, e, t);
  }
  function hf(e, t) {
    if (typeof t == "function") return e = e(), t(e), function() {
      t(null);
    };
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function mf(e, t, s) {
    return s = s != null ? s.concat([e]) : null, Ii(4, 4, hf.bind(null, t, e), s);
  }
  function Wa() {
  }
  function gf(e, t) {
    var s = Jt();
    t = t === void 0 ? null : t;
    var l = s.memoizedState;
    return l !== null && t !== null && Fa(t, l[1]) ? l[0] : (s.memoizedState = [e, t], e);
  }
  function vf(e, t) {
    var s = Jt();
    t = t === void 0 ? null : t;
    var l = s.memoizedState;
    return l !== null && t !== null && Fa(t, l[1]) ? l[0] : (e = e(), s.memoizedState = [e, t], e);
  }
  function yf(e, t, s) {
    return (Dr & 21) === 0 ? (e.baseState && (e.baseState = !1, jt = !0), e.memoizedState = s) : (un(s, t) || (s = Gc(), rt.lanes |= s, Fr |= s, e.baseState = !0), t);
  }
  function ry(e, t) {
    var s = Ge;
    Ge = s !== 0 && 4 > s ? s : 4, e(!0);
    var l = Da.transition;
    Da.transition = {};
    try {
      e(!1), t();
    } finally {
      Ge = s, Da.transition = l;
    }
  }
  function xf() {
    return Jt().memoizedState;
  }
  function oy(e, t, s) {
    var l = dr(e);
    if (s = { lane: l, action: s, hasEagerState: !1, eagerState: null, next: null }, wf(e)) _f(t, s);
    else if (s = Yd(e, t, s, l), s !== null) {
      var c = Pt();
      hn(s, e, l, c), Sf(s, t, l);
    }
  }
  function sy(e, t, s) {
    var l = dr(e), c = { lane: l, action: s, hasEagerState: !1, eagerState: null, next: null };
    if (wf(e)) _f(t, c);
    else {
      var d = e.alternate;
      if (e.lanes === 0 && (d === null || d.lanes === 0) && (d = t.lastRenderedReducer, d !== null)) try {
        var h = t.lastRenderedState, S = d(h, s);
        if (c.hasEagerState = !0, c.eagerState = S, un(S, h)) {
          var R = t.interleaved;
          R === null ? (c.next = c, Aa(t)) : (c.next = R.next, R.next = c), t.interleaved = c;
          return;
        }
      } catch {
      } finally {
      }
      s = Yd(e, t, c, l), s !== null && (c = Pt(), hn(s, e, l, c), Sf(s, t, l));
    }
  }
  function wf(e) {
    var t = e.alternate;
    return e === rt || t !== null && t === rt;
  }
  function _f(e, t) {
    Ss = Ai = !0;
    var s = e.pending;
    s === null ? t.next = t : (t.next = s.next, s.next = t), e.pending = t;
  }
  function Sf(e, t, s) {
    if ((s & 4194240) !== 0) {
      var l = t.lanes;
      l &= e.pendingLanes, s |= l, t.lanes = s, Zl(e, s);
    }
  }
  var Mi = { readContext: qt, useCallback: bt, useContext: bt, useEffect: bt, useImperativeHandle: bt, useInsertionEffect: bt, useLayoutEffect: bt, useMemo: bt, useReducer: bt, useRef: bt, useState: bt, useDebugValue: bt, useDeferredValue: bt, useTransition: bt, useMutableSource: bt, useSyncExternalStore: bt, useId: bt, unstable_isNewReconciler: !1 }, iy = { readContext: qt, useCallback: function(e, t) {
    return En().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: qt, useEffect: df, useImperativeHandle: function(e, t, s) {
    return s = s != null ? s.concat([e]) : null, Oi(
      4194308,
      4,
      hf.bind(null, t, e),
      s
    );
  }, useLayoutEffect: function(e, t) {
    return Oi(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    return Oi(4, 2, e, t);
  }, useMemo: function(e, t) {
    var s = En();
    return t = t === void 0 ? null : t, e = e(), s.memoizedState = [e, t], e;
  }, useReducer: function(e, t, s) {
    var l = En();
    return t = s !== void 0 ? s(t) : t, l.memoizedState = l.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, l.queue = e, e = e.dispatch = oy.bind(null, rt, e), [l.memoizedState, e];
  }, useRef: function(e) {
    var t = En();
    return e = { current: e }, t.memoizedState = e;
  }, useState: uf, useDebugValue: Wa, useDeferredValue: function(e) {
    return En().memoizedState = e;
  }, useTransition: function() {
    var e = uf(!1), t = e[0];
    return e = ry.bind(null, e[1]), En().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, s) {
    var l = rt, c = En();
    if (et) {
      if (s === void 0) throw Error(o(407));
      s = s();
    } else {
      if (s = t(), xt === null) throw Error(o(349));
      (Dr & 30) !== 0 || rf(l, t, s);
    }
    c.memoizedState = s;
    var d = { value: s, getSnapshot: t };
    return c.queue = d, df(sf.bind(
      null,
      l,
      d,
      e
    ), [e]), l.flags |= 2048, Es(9, of.bind(null, l, d, s, t), void 0, null), s;
  }, useId: function() {
    var e = En(), t = xt.identifierPrefix;
    if (et) {
      var s = Ln, l = jn;
      s = (l & ~(1 << 32 - an(l) - 1)).toString(32) + s, t = ":" + t + "R" + s, s = ks++, 0 < s && (t += "H" + s.toString(32)), t += ":";
    } else s = ny++, t = ":" + t + "r" + s.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, ly = {
    readContext: qt,
    useCallback: gf,
    useContext: qt,
    useEffect: $a,
    useImperativeHandle: mf,
    useInsertionEffect: ff,
    useLayoutEffect: pf,
    useMemo: vf,
    useReducer: Ba,
    useRef: cf,
    useState: function() {
      return Ba(Cs);
    },
    useDebugValue: Wa,
    useDeferredValue: function(e) {
      var t = Jt();
      return yf(t, mt.memoizedState, e);
    },
    useTransition: function() {
      var e = Ba(Cs)[0], t = Jt().memoizedState;
      return [e, t];
    },
    useMutableSource: tf,
    useSyncExternalStore: nf,
    useId: xf,
    unstable_isNewReconciler: !1
  }, ay = { readContext: qt, useCallback: gf, useContext: qt, useEffect: $a, useImperativeHandle: mf, useInsertionEffect: ff, useLayoutEffect: pf, useMemo: vf, useReducer: Ua, useRef: cf, useState: function() {
    return Ua(Cs);
  }, useDebugValue: Wa, useDeferredValue: function(e) {
    var t = Jt();
    return mt === null ? t.memoizedState = e : yf(t, mt.memoizedState, e);
  }, useTransition: function() {
    var e = Ua(Cs)[0], t = Jt().memoizedState;
    return [e, t];
  }, useMutableSource: tf, useSyncExternalStore: nf, useId: xf, unstable_isNewReconciler: !1 };
  function dn(e, t) {
    if (e && e.defaultProps) {
      t = Y({}, t), e = e.defaultProps;
      for (var s in e) t[s] === void 0 && (t[s] = e[s]);
      return t;
    }
    return t;
  }
  function Ha(e, t, s, l) {
    t = e.memoizedState, s = s(l, t), s = s == null ? t : Y({}, t, s), e.memoizedState = s, e.lanes === 0 && (e.updateQueue.baseState = s);
  }
  var ji = { isMounted: function(e) {
    return (e = e._reactInternals) ? Pr(e) === e : !1;
  }, enqueueSetState: function(e, t, s) {
    e = e._reactInternals;
    var l = Pt(), c = dr(e), d = Fn(l, c);
    d.payload = t, s != null && (d.callback = s), t = lr(e, d, c), t !== null && (hn(t, e, c, l), Ri(t, e, c));
  }, enqueueReplaceState: function(e, t, s) {
    e = e._reactInternals;
    var l = Pt(), c = dr(e), d = Fn(l, c);
    d.tag = 1, d.payload = t, s != null && (d.callback = s), t = lr(e, d, c), t !== null && (hn(t, e, c, l), Ri(t, e, c));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var s = Pt(), l = dr(e), c = Fn(s, l);
    c.tag = 2, t != null && (c.callback = t), t = lr(e, c, l), t !== null && (hn(t, e, l, s), Ri(t, e, l));
  } };
  function kf(e, t, s, l, c, d, h) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(l, d, h) : t.prototype && t.prototype.isPureReactComponent ? !ds(s, l) || !ds(c, d) : !0;
  }
  function Cf(e, t, s) {
    var l = !1, c = or, d = t.contextType;
    return typeof d == "object" && d !== null ? d = qt(d) : (c = Mt(t) ? Or : Et.current, l = t.contextTypes, d = (l = l != null) ? ho(e, c) : or), t = new t(s, d), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = ji, e.stateNode = t, t._reactInternals = e, l && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = c, e.__reactInternalMemoizedMaskedChildContext = d), t;
  }
  function Ef(e, t, s, l) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(s, l), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(s, l), t.state !== e && ji.enqueueReplaceState(t, t.state, null);
  }
  function Za(e, t, s, l) {
    var c = e.stateNode;
    c.props = s, c.state = e.memoizedState, c.refs = {}, Oa(e);
    var d = t.contextType;
    typeof d == "object" && d !== null ? c.context = qt(d) : (d = Mt(t) ? Or : Et.current, c.context = ho(e, d)), c.state = e.memoizedState, d = t.getDerivedStateFromProps, typeof d == "function" && (Ha(e, t, d, s), c.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (t = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), t !== c.state && ji.enqueueReplaceState(c, c.state, null), Ni(e, s, c, l), c.state = e.memoizedState), typeof c.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function So(e, t) {
    try {
      var s = "", l = t;
      do
        s += Me(l), l = l.return;
      while (l);
      var c = s;
    } catch (d) {
      c = `
Error generating stack: ` + d.message + `
` + d.stack;
    }
    return { value: e, source: t, stack: c, digest: null };
  }
  function Ga(e, t, s) {
    return { value: e, source: null, stack: s ?? null, digest: t ?? null };
  }
  function Ka(e, t) {
    try {
      console.error(t.value);
    } catch (s) {
      setTimeout(function() {
        throw s;
      });
    }
  }
  var uy = typeof WeakMap == "function" ? WeakMap : Map;
  function bf(e, t, s) {
    s = Fn(-1, s), s.tag = 3, s.payload = { element: null };
    var l = t.value;
    return s.callback = function() {
      Ui || (Ui = !0, uu = l), Ka(e, t);
    }, s;
  }
  function Rf(e, t, s) {
    s = Fn(-1, s), s.tag = 3;
    var l = e.type.getDerivedStateFromError;
    if (typeof l == "function") {
      var c = t.value;
      s.payload = function() {
        return l(c);
      }, s.callback = function() {
        Ka(e, t);
      };
    }
    var d = e.stateNode;
    return d !== null && typeof d.componentDidCatch == "function" && (s.callback = function() {
      Ka(e, t), typeof l != "function" && (ur === null ? ur = /* @__PURE__ */ new Set([this]) : ur.add(this));
      var h = t.stack;
      this.componentDidCatch(t.value, { componentStack: h !== null ? h : "" });
    }), s;
  }
  function Nf(e, t, s) {
    var l = e.pingCache;
    if (l === null) {
      l = e.pingCache = new uy();
      var c = /* @__PURE__ */ new Set();
      l.set(t, c);
    } else c = l.get(t), c === void 0 && (c = /* @__PURE__ */ new Set(), l.set(t, c));
    c.has(s) || (c.add(s), e = ky.bind(null, e, t, s), t.then(e, e));
  }
  function Tf(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Pf(e, t, s, l, c) {
    return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, s.flags |= 131072, s.flags &= -52805, s.tag === 1 && (s.alternate === null ? s.tag = 17 : (t = Fn(-1, 1), t.tag = 2, lr(s, t, 1))), s.lanes |= 1), e) : (e.flags |= 65536, e.lanes = c, e);
  }
  var cy = L.ReactCurrentOwner, jt = !1;
  function Tt(e, t, s, l) {
    t.child = e === null ? Qd(t, null, s, l) : yo(t, e.child, s, l);
  }
  function Af(e, t, s, l, c) {
    s = s.render;
    var d = t.ref;
    return wo(t, c), l = Va(e, t, s, l, d, c), s = za(), e !== null && !jt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~c, Vn(e, t, c)) : (et && s && Sa(t), t.flags |= 1, Tt(e, t, l, c), t.child);
  }
  function Of(e, t, s, l, c) {
    if (e === null) {
      var d = s.type;
      return typeof d == "function" && !gu(d) && d.defaultProps === void 0 && s.compare === null && s.defaultProps === void 0 ? (t.tag = 15, t.type = d, If(e, t, d, l, c)) : (e = Ki(s.type, null, l, t, t.mode, c), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (d = e.child, (e.lanes & c) === 0) {
      var h = d.memoizedProps;
      if (s = s.compare, s = s !== null ? s : ds, s(h, l) && e.ref === t.ref) return Vn(e, t, c);
    }
    return t.flags |= 1, e = pr(d, l), e.ref = t.ref, e.return = t, t.child = e;
  }
  function If(e, t, s, l, c) {
    if (e !== null) {
      var d = e.memoizedProps;
      if (ds(d, l) && e.ref === t.ref) if (jt = !1, t.pendingProps = l = d, (e.lanes & c) !== 0) (e.flags & 131072) !== 0 && (jt = !0);
      else return t.lanes = e.lanes, Vn(e, t, c);
    }
    return Qa(e, t, s, l, c);
  }
  function Mf(e, t, s) {
    var l = t.pendingProps, c = l.children, d = e !== null ? e.memoizedState : null;
    if (l.mode === "hidden") if ((t.mode & 1) === 0) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Ye(Co, Wt), Wt |= s;
    else {
      if ((s & 1073741824) === 0) return e = d !== null ? d.baseLanes | s : s, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, Ye(Co, Wt), Wt |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, l = d !== null ? d.baseLanes : s, Ye(Co, Wt), Wt |= l;
    }
    else d !== null ? (l = d.baseLanes | s, t.memoizedState = null) : l = s, Ye(Co, Wt), Wt |= l;
    return Tt(e, t, c, s), t.child;
  }
  function jf(e, t) {
    var s = t.ref;
    (e === null && s !== null || e !== null && e.ref !== s) && (t.flags |= 512, t.flags |= 2097152);
  }
  function Qa(e, t, s, l, c) {
    var d = Mt(s) ? Or : Et.current;
    return d = ho(t, d), wo(t, c), s = Va(e, t, s, l, d, c), l = za(), e !== null && !jt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~c, Vn(e, t, c)) : (et && l && Sa(t), t.flags |= 1, Tt(e, t, s, c), t.child);
  }
  function Lf(e, t, s, l, c) {
    if (Mt(s)) {
      var d = !0;
      xi(t);
    } else d = !1;
    if (wo(t, c), t.stateNode === null) Di(e, t), Cf(t, s, l), Za(t, s, l, c), l = !0;
    else if (e === null) {
      var h = t.stateNode, S = t.memoizedProps;
      h.props = S;
      var R = h.context, F = s.contextType;
      typeof F == "object" && F !== null ? F = qt(F) : (F = Mt(s) ? Or : Et.current, F = ho(t, F));
      var Z = s.getDerivedStateFromProps, G = typeof Z == "function" || typeof h.getSnapshotBeforeUpdate == "function";
      G || typeof h.UNSAFE_componentWillReceiveProps != "function" && typeof h.componentWillReceiveProps != "function" || (S !== l || R !== F) && Ef(t, h, l, F), ir = !1;
      var W = t.memoizedState;
      h.state = W, Ni(t, l, h, c), R = t.memoizedState, S !== l || W !== R || It.current || ir ? (typeof Z == "function" && (Ha(t, s, Z, l), R = t.memoizedState), (S = ir || kf(t, s, S, l, W, R, F)) ? (G || typeof h.UNSAFE_componentWillMount != "function" && typeof h.componentWillMount != "function" || (typeof h.componentWillMount == "function" && h.componentWillMount(), typeof h.UNSAFE_componentWillMount == "function" && h.UNSAFE_componentWillMount()), typeof h.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof h.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = l, t.memoizedState = R), h.props = l, h.state = R, h.context = F, l = S) : (typeof h.componentDidMount == "function" && (t.flags |= 4194308), l = !1);
    } else {
      h = t.stateNode, Xd(e, t), S = t.memoizedProps, F = t.type === t.elementType ? S : dn(t.type, S), h.props = F, G = t.pendingProps, W = h.context, R = s.contextType, typeof R == "object" && R !== null ? R = qt(R) : (R = Mt(s) ? Or : Et.current, R = ho(t, R));
      var ae = s.getDerivedStateFromProps;
      (Z = typeof ae == "function" || typeof h.getSnapshotBeforeUpdate == "function") || typeof h.UNSAFE_componentWillReceiveProps != "function" && typeof h.componentWillReceiveProps != "function" || (S !== G || W !== R) && Ef(t, h, l, R), ir = !1, W = t.memoizedState, h.state = W, Ni(t, l, h, c);
      var fe = t.memoizedState;
      S !== G || W !== fe || It.current || ir ? (typeof ae == "function" && (Ha(t, s, ae, l), fe = t.memoizedState), (F = ir || kf(t, s, F, l, W, fe, R) || !1) ? (Z || typeof h.UNSAFE_componentWillUpdate != "function" && typeof h.componentWillUpdate != "function" || (typeof h.componentWillUpdate == "function" && h.componentWillUpdate(l, fe, R), typeof h.UNSAFE_componentWillUpdate == "function" && h.UNSAFE_componentWillUpdate(l, fe, R)), typeof h.componentDidUpdate == "function" && (t.flags |= 4), typeof h.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof h.componentDidUpdate != "function" || S === e.memoizedProps && W === e.memoizedState || (t.flags |= 4), typeof h.getSnapshotBeforeUpdate != "function" || S === e.memoizedProps && W === e.memoizedState || (t.flags |= 1024), t.memoizedProps = l, t.memoizedState = fe), h.props = l, h.state = fe, h.context = R, l = F) : (typeof h.componentDidUpdate != "function" || S === e.memoizedProps && W === e.memoizedState || (t.flags |= 4), typeof h.getSnapshotBeforeUpdate != "function" || S === e.memoizedProps && W === e.memoizedState || (t.flags |= 1024), l = !1);
    }
    return Ya(e, t, s, l, d, c);
  }
  function Ya(e, t, s, l, c, d) {
    jf(e, t);
    var h = (t.flags & 128) !== 0;
    if (!l && !h) return c && zd(t, s, !1), Vn(e, t, d);
    l = t.stateNode, cy.current = t;
    var S = h && typeof s.getDerivedStateFromError != "function" ? null : l.render();
    return t.flags |= 1, e !== null && h ? (t.child = yo(t, e.child, null, d), t.child = yo(t, null, S, d)) : Tt(e, t, S, d), t.memoizedState = l.state, c && zd(t, s, !0), t.child;
  }
  function Df(e) {
    var t = e.stateNode;
    t.pendingContext ? Fd(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Fd(e, t.context, !1), Ia(e, t.containerInfo);
  }
  function Ff(e, t, s, l, c) {
    return vo(), ba(c), t.flags |= 256, Tt(e, t, s, l), t.child;
  }
  var Xa = { dehydrated: null, treeContext: null, retryLane: 0 };
  function qa(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Vf(e, t, s) {
    var l = t.pendingProps, c = nt.current, d = !1, h = (t.flags & 128) !== 0, S;
    if ((S = h) || (S = e !== null && e.memoizedState === null ? !1 : (c & 2) !== 0), S ? (d = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (c |= 1), Ye(nt, c & 1), e === null)
      return Ea(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (h = l.children, e = l.fallback, d ? (l = t.mode, d = t.child, h = { mode: "hidden", children: h }, (l & 1) === 0 && d !== null ? (d.childLanes = 0, d.pendingProps = h) : d = Qi(h, l, 0, null), e = Ur(e, l, s, null), d.return = t, e.return = t, d.sibling = e, t.child = d, t.child.memoizedState = qa(s), t.memoizedState = Xa, e) : Ja(t, h));
    if (c = e.memoizedState, c !== null && (S = c.dehydrated, S !== null)) return dy(e, t, h, l, S, c, s);
    if (d) {
      d = l.fallback, h = t.mode, c = e.child, S = c.sibling;
      var R = { mode: "hidden", children: l.children };
      return (h & 1) === 0 && t.child !== c ? (l = t.child, l.childLanes = 0, l.pendingProps = R, t.deletions = null) : (l = pr(c, R), l.subtreeFlags = c.subtreeFlags & 14680064), S !== null ? d = pr(S, d) : (d = Ur(d, h, s, null), d.flags |= 2), d.return = t, l.return = t, l.sibling = d, t.child = l, l = d, d = t.child, h = e.child.memoizedState, h = h === null ? qa(s) : { baseLanes: h.baseLanes | s, cachePool: null, transitions: h.transitions }, d.memoizedState = h, d.childLanes = e.childLanes & ~s, t.memoizedState = Xa, l;
    }
    return d = e.child, e = d.sibling, l = pr(d, { mode: "visible", children: l.children }), (t.mode & 1) === 0 && (l.lanes = s), l.return = t, l.sibling = null, e !== null && (s = t.deletions, s === null ? (t.deletions = [e], t.flags |= 16) : s.push(e)), t.child = l, t.memoizedState = null, l;
  }
  function Ja(e, t) {
    return t = Qi({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function Li(e, t, s, l) {
    return l !== null && ba(l), yo(t, e.child, null, s), e = Ja(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function dy(e, t, s, l, c, d, h) {
    if (s)
      return t.flags & 256 ? (t.flags &= -257, l = Ga(Error(o(422))), Li(e, t, h, l)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (d = l.fallback, c = t.mode, l = Qi({ mode: "visible", children: l.children }, c, 0, null), d = Ur(d, c, h, null), d.flags |= 2, l.return = t, d.return = t, l.sibling = d, t.child = l, (t.mode & 1) !== 0 && yo(t, e.child, null, h), t.child.memoizedState = qa(h), t.memoizedState = Xa, d);
    if ((t.mode & 1) === 0) return Li(e, t, h, null);
    if (c.data === "$!") {
      if (l = c.nextSibling && c.nextSibling.dataset, l) var S = l.dgst;
      return l = S, d = Error(o(419)), l = Ga(d, l, void 0), Li(e, t, h, l);
    }
    if (S = (h & e.childLanes) !== 0, jt || S) {
      if (l = xt, l !== null) {
        switch (h & -h) {
          case 4:
            c = 2;
            break;
          case 16:
            c = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            c = 32;
            break;
          case 536870912:
            c = 268435456;
            break;
          default:
            c = 0;
        }
        c = (c & (l.suspendedLanes | h)) !== 0 ? 0 : c, c !== 0 && c !== d.retryLane && (d.retryLane = c, Dn(e, c), hn(l, e, c, -1));
      }
      return mu(), l = Ga(Error(o(421))), Li(e, t, h, l);
    }
    return c.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Cy.bind(null, e), c._reactRetry = t, null) : (e = d.treeContext, $t = nr(c.nextSibling), Ut = t, et = !0, cn = null, e !== null && (Yt[Xt++] = jn, Yt[Xt++] = Ln, Yt[Xt++] = Ir, jn = e.id, Ln = e.overflow, Ir = t), t = Ja(t, l.children), t.flags |= 4096, t);
  }
  function zf(e, t, s) {
    e.lanes |= t;
    var l = e.alternate;
    l !== null && (l.lanes |= t), Pa(e.return, t, s);
  }
  function eu(e, t, s, l, c) {
    var d = e.memoizedState;
    d === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: l, tail: s, tailMode: c } : (d.isBackwards = t, d.rendering = null, d.renderingStartTime = 0, d.last = l, d.tail = s, d.tailMode = c);
  }
  function Bf(e, t, s) {
    var l = t.pendingProps, c = l.revealOrder, d = l.tail;
    if (Tt(e, t, l.children, s), l = nt.current, (l & 2) !== 0) l = l & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && zf(e, s, t);
        else if (e.tag === 19) zf(e, s, t);
        else if (e.child !== null) {
          e.child.return = e, e = e.child;
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
      l &= 1;
    }
    if (Ye(nt, l), (t.mode & 1) === 0) t.memoizedState = null;
    else switch (c) {
      case "forwards":
        for (s = t.child, c = null; s !== null; ) e = s.alternate, e !== null && Ti(e) === null && (c = s), s = s.sibling;
        s = c, s === null ? (c = t.child, t.child = null) : (c = s.sibling, s.sibling = null), eu(t, !1, c, s, d);
        break;
      case "backwards":
        for (s = null, c = t.child, t.child = null; c !== null; ) {
          if (e = c.alternate, e !== null && Ti(e) === null) {
            t.child = c;
            break;
          }
          e = c.sibling, c.sibling = s, s = c, c = e;
        }
        eu(t, !0, s, null, d);
        break;
      case "together":
        eu(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Di(e, t) {
    (t.mode & 1) === 0 && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function Vn(e, t, s) {
    if (e !== null && (t.dependencies = e.dependencies), Fr |= t.lanes, (s & t.childLanes) === 0) return null;
    if (e !== null && t.child !== e.child) throw Error(o(153));
    if (t.child !== null) {
      for (e = t.child, s = pr(e, e.pendingProps), t.child = s, s.return = t; e.sibling !== null; ) e = e.sibling, s = s.sibling = pr(e, e.pendingProps), s.return = t;
      s.sibling = null;
    }
    return t.child;
  }
  function fy(e, t, s) {
    switch (t.tag) {
      case 3:
        Df(t), vo();
        break;
      case 5:
        ef(t);
        break;
      case 1:
        Mt(t.type) && xi(t);
        break;
      case 4:
        Ia(t, t.stateNode.containerInfo);
        break;
      case 10:
        var l = t.type._context, c = t.memoizedProps.value;
        Ye(Ei, l._currentValue), l._currentValue = c;
        break;
      case 13:
        if (l = t.memoizedState, l !== null)
          return l.dehydrated !== null ? (Ye(nt, nt.current & 1), t.flags |= 128, null) : (s & t.child.childLanes) !== 0 ? Vf(e, t, s) : (Ye(nt, nt.current & 1), e = Vn(e, t, s), e !== null ? e.sibling : null);
        Ye(nt, nt.current & 1);
        break;
      case 19:
        if (l = (s & t.childLanes) !== 0, (e.flags & 128) !== 0) {
          if (l) return Bf(e, t, s);
          t.flags |= 128;
        }
        if (c = t.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), Ye(nt, nt.current), l) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, Mf(e, t, s);
    }
    return Vn(e, t, s);
  }
  var Uf, tu, $f, Wf;
  Uf = function(e, t) {
    for (var s = t.child; s !== null; ) {
      if (s.tag === 5 || s.tag === 6) e.appendChild(s.stateNode);
      else if (s.tag !== 4 && s.child !== null) {
        s.child.return = s, s = s.child;
        continue;
      }
      if (s === t) break;
      for (; s.sibling === null; ) {
        if (s.return === null || s.return === t) return;
        s = s.return;
      }
      s.sibling.return = s.return, s = s.sibling;
    }
  }, tu = function() {
  }, $f = function(e, t, s, l) {
    var c = e.memoizedProps;
    if (c !== l) {
      e = t.stateNode, Lr(Cn.current);
      var d = null;
      switch (s) {
        case "input":
          c = Ct(e, c), l = Ct(e, l), d = [];
          break;
        case "select":
          c = Y({}, c, { value: void 0 }), l = Y({}, l, { value: void 0 }), d = [];
          break;
        case "textarea":
          c = j(e, c), l = j(e, l), d = [];
          break;
        default:
          typeof c.onClick != "function" && typeof l.onClick == "function" && (e.onclick = gi);
      }
      Ko(s, l);
      var h;
      s = null;
      for (F in c) if (!l.hasOwnProperty(F) && c.hasOwnProperty(F) && c[F] != null) if (F === "style") {
        var S = c[F];
        for (h in S) S.hasOwnProperty(h) && (s || (s = {}), s[h] = "");
      } else F !== "dangerouslySetInnerHTML" && F !== "children" && F !== "suppressContentEditableWarning" && F !== "suppressHydrationWarning" && F !== "autoFocus" && (a.hasOwnProperty(F) ? d || (d = []) : (d = d || []).push(F, null));
      for (F in l) {
        var R = l[F];
        if (S = c != null ? c[F] : void 0, l.hasOwnProperty(F) && R !== S && (R != null || S != null)) if (F === "style") if (S) {
          for (h in S) !S.hasOwnProperty(h) || R && R.hasOwnProperty(h) || (s || (s = {}), s[h] = "");
          for (h in R) R.hasOwnProperty(h) && S[h] !== R[h] && (s || (s = {}), s[h] = R[h]);
        } else s || (d || (d = []), d.push(
          F,
          s
        )), s = R;
        else F === "dangerouslySetInnerHTML" ? (R = R ? R.__html : void 0, S = S ? S.__html : void 0, R != null && S !== R && (d = d || []).push(F, R)) : F === "children" ? typeof R != "string" && typeof R != "number" || (d = d || []).push(F, "" + R) : F !== "suppressContentEditableWarning" && F !== "suppressHydrationWarning" && (a.hasOwnProperty(F) ? (R != null && F === "onScroll" && Xe("scroll", e), d || S === R || (d = [])) : (d = d || []).push(F, R));
      }
      s && (d = d || []).push("style", s);
      var F = d;
      (t.updateQueue = F) && (t.flags |= 4);
    }
  }, Wf = function(e, t, s, l) {
    s !== l && (t.flags |= 4);
  };
  function bs(e, t) {
    if (!et) switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var s = null; t !== null; ) t.alternate !== null && (s = t), t = t.sibling;
        s === null ? e.tail = null : s.sibling = null;
        break;
      case "collapsed":
        s = e.tail;
        for (var l = null; s !== null; ) s.alternate !== null && (l = s), s = s.sibling;
        l === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : l.sibling = null;
    }
  }
  function Rt(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, s = 0, l = 0;
    if (t) for (var c = e.child; c !== null; ) s |= c.lanes | c.childLanes, l |= c.subtreeFlags & 14680064, l |= c.flags & 14680064, c.return = e, c = c.sibling;
    else for (c = e.child; c !== null; ) s |= c.lanes | c.childLanes, l |= c.subtreeFlags, l |= c.flags, c.return = e, c = c.sibling;
    return e.subtreeFlags |= l, e.childLanes = s, t;
  }
  function py(e, t, s) {
    var l = t.pendingProps;
    switch (ka(t), t.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Rt(t), null;
      case 1:
        return Mt(t.type) && yi(), Rt(t), null;
      case 3:
        return l = t.stateNode, _o(), qe(It), qe(Et), La(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (e === null || e.child === null) && (ki(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, cn !== null && (fu(cn), cn = null))), tu(e, t), Rt(t), null;
      case 5:
        Ma(t);
        var c = Lr(_s.current);
        if (s = t.type, e !== null && t.stateNode != null) $f(e, t, s, l, c), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!l) {
            if (t.stateNode === null) throw Error(o(166));
            return Rt(t), null;
          }
          if (e = Lr(Cn.current), ki(t)) {
            l = t.stateNode, s = t.type;
            var d = t.memoizedProps;
            switch (l[kn] = t, l[gs] = d, e = (t.mode & 1) !== 0, s) {
              case "dialog":
                Xe("cancel", l), Xe("close", l);
                break;
              case "iframe":
              case "object":
              case "embed":
                Xe("load", l);
                break;
              case "video":
              case "audio":
                for (c = 0; c < ps.length; c++) Xe(ps[c], l);
                break;
              case "source":
                Xe("error", l);
                break;
              case "img":
              case "image":
              case "link":
                Xe(
                  "error",
                  l
                ), Xe("load", l);
                break;
              case "details":
                Xe("toggle", l);
                break;
              case "input":
                on(l, d), Xe("invalid", l);
                break;
              case "select":
                l._wrapperState = { wasMultiple: !!d.multiple }, Xe("invalid", l);
                break;
              case "textarea":
                V(l, d), Xe("invalid", l);
            }
            Ko(s, d), c = null;
            for (var h in d) if (d.hasOwnProperty(h)) {
              var S = d[h];
              h === "children" ? typeof S == "string" ? l.textContent !== S && (d.suppressHydrationWarning !== !0 && mi(l.textContent, S, e), c = ["children", S]) : typeof S == "number" && l.textContent !== "" + S && (d.suppressHydrationWarning !== !0 && mi(
                l.textContent,
                S,
                e
              ), c = ["children", "" + S]) : a.hasOwnProperty(h) && S != null && h === "onScroll" && Xe("scroll", l);
            }
            switch (s) {
              case "input":
                Fe(l), qr(l, d, !0);
                break;
              case "textarea":
                Fe(l), ee(l);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof d.onClick == "function" && (l.onclick = gi);
            }
            l = c, t.updateQueue = l, l !== null && (t.flags |= 4);
          } else {
            h = c.nodeType === 9 ? c : c.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = X(s)), e === "http://www.w3.org/1999/xhtml" ? s === "script" ? (e = h.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof l.is == "string" ? e = h.createElement(s, { is: l.is }) : (e = h.createElement(s), s === "select" && (h = e, l.multiple ? h.multiple = !0 : l.size && (h.size = l.size))) : e = h.createElementNS(e, s), e[kn] = t, e[gs] = l, Uf(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (h = eo(s, l), s) {
                case "dialog":
                  Xe("cancel", e), Xe("close", e), c = l;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Xe("load", e), c = l;
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < ps.length; c++) Xe(ps[c], e);
                  c = l;
                  break;
                case "source":
                  Xe("error", e), c = l;
                  break;
                case "img":
                case "image":
                case "link":
                  Xe(
                    "error",
                    e
                  ), Xe("load", e), c = l;
                  break;
                case "details":
                  Xe("toggle", e), c = l;
                  break;
                case "input":
                  on(e, l), c = Ct(e, l), Xe("invalid", e);
                  break;
                case "option":
                  c = l;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!l.multiple }, c = Y({}, l, { value: void 0 }), Xe("invalid", e);
                  break;
                case "textarea":
                  V(e, l), c = j(e, l), Xe("invalid", e);
                  break;
                default:
                  c = l;
              }
              Ko(s, c), S = c;
              for (d in S) if (S.hasOwnProperty(d)) {
                var R = S[d];
                d === "style" ? Jr(e, R) : d === "dangerouslySetInnerHTML" ? (R = R ? R.__html : void 0, R != null && $e(e, R)) : d === "children" ? typeof R == "string" ? (s !== "textarea" || R !== "") && lt(e, R) : typeof R == "number" && lt(e, "" + R) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (a.hasOwnProperty(d) ? R != null && d === "onScroll" && Xe("scroll", e) : R != null && I(e, d, R, h));
              }
              switch (s) {
                case "input":
                  Fe(e), qr(e, l, !1);
                  break;
                case "textarea":
                  Fe(e), ee(e);
                  break;
                case "option":
                  l.value != null && e.setAttribute("value", "" + xe(l.value));
                  break;
                case "select":
                  e.multiple = !!l.multiple, d = l.value, d != null ? b(e, !!l.multiple, d, !1) : l.defaultValue != null && b(
                    e,
                    !!l.multiple,
                    l.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof c.onClick == "function" && (e.onclick = gi);
              }
              switch (s) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  l = !!l.autoFocus;
                  break e;
                case "img":
                  l = !0;
                  break e;
                default:
                  l = !1;
              }
            }
            l && (t.flags |= 4);
          }
          t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
        }
        return Rt(t), null;
      case 6:
        if (e && t.stateNode != null) Wf(e, t, e.memoizedProps, l);
        else {
          if (typeof l != "string" && t.stateNode === null) throw Error(o(166));
          if (s = Lr(_s.current), Lr(Cn.current), ki(t)) {
            if (l = t.stateNode, s = t.memoizedProps, l[kn] = t, (d = l.nodeValue !== s) && (e = Ut, e !== null)) switch (e.tag) {
              case 3:
                mi(l.nodeValue, s, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && mi(l.nodeValue, s, (e.mode & 1) !== 0);
            }
            d && (t.flags |= 4);
          } else l = (s.nodeType === 9 ? s : s.ownerDocument).createTextNode(l), l[kn] = t, t.stateNode = l;
        }
        return Rt(t), null;
      case 13:
        if (qe(nt), l = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (et && $t !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) Zd(), vo(), t.flags |= 98560, d = !1;
          else if (d = ki(t), l !== null && l.dehydrated !== null) {
            if (e === null) {
              if (!d) throw Error(o(318));
              if (d = t.memoizedState, d = d !== null ? d.dehydrated : null, !d) throw Error(o(317));
              d[kn] = t;
            } else vo(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Rt(t), d = !1;
          } else cn !== null && (fu(cn), cn = null), d = !0;
          if (!d) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0 ? (t.lanes = s, t) : (l = l !== null, l !== (e !== null && e.memoizedState !== null) && l && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (nt.current & 1) !== 0 ? gt === 0 && (gt = 3) : mu())), t.updateQueue !== null && (t.flags |= 4), Rt(t), null);
      case 4:
        return _o(), tu(e, t), e === null && hs(t.stateNode.containerInfo), Rt(t), null;
      case 10:
        return Ta(t.type._context), Rt(t), null;
      case 17:
        return Mt(t.type) && yi(), Rt(t), null;
      case 19:
        if (qe(nt), d = t.memoizedState, d === null) return Rt(t), null;
        if (l = (t.flags & 128) !== 0, h = d.rendering, h === null) if (l) bs(d, !1);
        else {
          if (gt !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
            if (h = Ti(e), h !== null) {
              for (t.flags |= 128, bs(d, !1), l = h.updateQueue, l !== null && (t.updateQueue = l, t.flags |= 4), t.subtreeFlags = 0, l = s, s = t.child; s !== null; ) d = s, e = l, d.flags &= 14680066, h = d.alternate, h === null ? (d.childLanes = 0, d.lanes = e, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = h.childLanes, d.lanes = h.lanes, d.child = h.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = h.memoizedProps, d.memoizedState = h.memoizedState, d.updateQueue = h.updateQueue, d.type = h.type, e = h.dependencies, d.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), s = s.sibling;
              return Ye(nt, nt.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          d.tail !== null && at() > Eo && (t.flags |= 128, l = !0, bs(d, !1), t.lanes = 4194304);
        }
        else {
          if (!l) if (e = Ti(h), e !== null) {
            if (t.flags |= 128, l = !0, s = e.updateQueue, s !== null && (t.updateQueue = s, t.flags |= 4), bs(d, !0), d.tail === null && d.tailMode === "hidden" && !h.alternate && !et) return Rt(t), null;
          } else 2 * at() - d.renderingStartTime > Eo && s !== 1073741824 && (t.flags |= 128, l = !0, bs(d, !1), t.lanes = 4194304);
          d.isBackwards ? (h.sibling = t.child, t.child = h) : (s = d.last, s !== null ? s.sibling = h : t.child = h, d.last = h);
        }
        return d.tail !== null ? (t = d.tail, d.rendering = t, d.tail = t.sibling, d.renderingStartTime = at(), t.sibling = null, s = nt.current, Ye(nt, l ? s & 1 | 2 : s & 1), t) : (Rt(t), null);
      case 22:
      case 23:
        return hu(), l = t.memoizedState !== null, e !== null && e.memoizedState !== null !== l && (t.flags |= 8192), l && (t.mode & 1) !== 0 ? (Wt & 1073741824) !== 0 && (Rt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Rt(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(o(156, t.tag));
  }
  function hy(e, t) {
    switch (ka(t), t.tag) {
      case 1:
        return Mt(t.type) && yi(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return _o(), qe(It), qe(Et), La(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return Ma(t), null;
      case 13:
        if (qe(nt), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(o(340));
          vo();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return qe(nt), null;
      case 4:
        return _o(), null;
      case 10:
        return Ta(t.type._context), null;
      case 22:
      case 23:
        return hu(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Fi = !1, Nt = !1, my = typeof WeakSet == "function" ? WeakSet : Set, de = null;
  function ko(e, t) {
    var s = e.ref;
    if (s !== null) if (typeof s == "function") try {
      s(null);
    } catch (l) {
      ot(e, t, l);
    }
    else s.current = null;
  }
  function nu(e, t, s) {
    try {
      s();
    } catch (l) {
      ot(e, t, l);
    }
  }
  var Hf = !1;
  function gy(e, t) {
    if (ha = oi, e = Sd(), ia(e)) {
      if ("selectionStart" in e) var s = { start: e.selectionStart, end: e.selectionEnd };
      else e: {
        s = (s = e.ownerDocument) && s.defaultView || window;
        var l = s.getSelection && s.getSelection();
        if (l && l.rangeCount !== 0) {
          s = l.anchorNode;
          var c = l.anchorOffset, d = l.focusNode;
          l = l.focusOffset;
          try {
            s.nodeType, d.nodeType;
          } catch {
            s = null;
            break e;
          }
          var h = 0, S = -1, R = -1, F = 0, Z = 0, G = e, W = null;
          t: for (; ; ) {
            for (var ae; G !== s || c !== 0 && G.nodeType !== 3 || (S = h + c), G !== d || l !== 0 && G.nodeType !== 3 || (R = h + l), G.nodeType === 3 && (h += G.nodeValue.length), (ae = G.firstChild) !== null; )
              W = G, G = ae;
            for (; ; ) {
              if (G === e) break t;
              if (W === s && ++F === c && (S = h), W === d && ++Z === l && (R = h), (ae = G.nextSibling) !== null) break;
              G = W, W = G.parentNode;
            }
            G = ae;
          }
          s = S === -1 || R === -1 ? null : { start: S, end: R };
        } else s = null;
      }
      s = s || { start: 0, end: 0 };
    } else s = null;
    for (ma = { focusedElem: e, selectionRange: s }, oi = !1, de = t; de !== null; ) if (t = de, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, de = e;
    else for (; de !== null; ) {
      t = de;
      try {
        var fe = t.alternate;
        if ((t.flags & 1024) !== 0) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (fe !== null) {
              var he = fe.memoizedProps, ut = fe.memoizedState, M = t.stateNode, T = M.getSnapshotBeforeUpdate(t.elementType === t.type ? he : dn(t.type, he), ut);
              M.__reactInternalSnapshotBeforeUpdate = T;
            }
            break;
          case 3:
            var D = t.stateNode.containerInfo;
            D.nodeType === 1 ? D.textContent = "" : D.nodeType === 9 && D.documentElement && D.removeChild(D.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(o(163));
        }
      } catch (q) {
        ot(t, t.return, q);
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, de = e;
        break;
      }
      de = t.return;
    }
    return fe = Hf, Hf = !1, fe;
  }
  function Rs(e, t, s) {
    var l = t.updateQueue;
    if (l = l !== null ? l.lastEffect : null, l !== null) {
      var c = l = l.next;
      do {
        if ((c.tag & e) === e) {
          var d = c.destroy;
          c.destroy = void 0, d !== void 0 && nu(t, s, d);
        }
        c = c.next;
      } while (c !== l);
    }
  }
  function Vi(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
      var s = t = t.next;
      do {
        if ((s.tag & e) === e) {
          var l = s.create;
          s.destroy = l();
        }
        s = s.next;
      } while (s !== t);
    }
  }
  function ru(e) {
    var t = e.ref;
    if (t !== null) {
      var s = e.stateNode;
      switch (e.tag) {
        case 5:
          e = s;
          break;
        default:
          e = s;
      }
      typeof t == "function" ? t(e) : t.current = e;
    }
  }
  function Zf(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Zf(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[kn], delete t[gs], delete t[xa], delete t[qv], delete t[Jv])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function Gf(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Kf(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Gf(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function ou(e, t, s) {
    var l = e.tag;
    if (l === 5 || l === 6) e = e.stateNode, t ? s.nodeType === 8 ? s.parentNode.insertBefore(e, t) : s.insertBefore(e, t) : (s.nodeType === 8 ? (t = s.parentNode, t.insertBefore(e, s)) : (t = s, t.appendChild(e)), s = s._reactRootContainer, s != null || t.onclick !== null || (t.onclick = gi));
    else if (l !== 4 && (e = e.child, e !== null)) for (ou(e, t, s), e = e.sibling; e !== null; ) ou(e, t, s), e = e.sibling;
  }
  function su(e, t, s) {
    var l = e.tag;
    if (l === 5 || l === 6) e = e.stateNode, t ? s.insertBefore(e, t) : s.appendChild(e);
    else if (l !== 4 && (e = e.child, e !== null)) for (su(e, t, s), e = e.sibling; e !== null; ) su(e, t, s), e = e.sibling;
  }
  var _t = null, fn = !1;
  function ar(e, t, s) {
    for (s = s.child; s !== null; ) Qf(e, t, s), s = s.sibling;
  }
  function Qf(e, t, s) {
    if (Sn && typeof Sn.onCommitFiberUnmount == "function") try {
      Sn.onCommitFiberUnmount(qs, s);
    } catch {
    }
    switch (s.tag) {
      case 5:
        Nt || ko(s, t);
      case 6:
        var l = _t, c = fn;
        _t = null, ar(e, t, s), _t = l, fn = c, _t !== null && (fn ? (e = _t, s = s.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(s) : e.removeChild(s)) : _t.removeChild(s.stateNode));
        break;
      case 18:
        _t !== null && (fn ? (e = _t, s = s.stateNode, e.nodeType === 8 ? ya(e.parentNode, s) : e.nodeType === 1 && ya(e, s), ss(e)) : ya(_t, s.stateNode));
        break;
      case 4:
        l = _t, c = fn, _t = s.stateNode.containerInfo, fn = !0, ar(e, t, s), _t = l, fn = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Nt && (l = s.updateQueue, l !== null && (l = l.lastEffect, l !== null))) {
          c = l = l.next;
          do {
            var d = c, h = d.destroy;
            d = d.tag, h !== void 0 && ((d & 2) !== 0 || (d & 4) !== 0) && nu(s, t, h), c = c.next;
          } while (c !== l);
        }
        ar(e, t, s);
        break;
      case 1:
        if (!Nt && (ko(s, t), l = s.stateNode, typeof l.componentWillUnmount == "function")) try {
          l.props = s.memoizedProps, l.state = s.memoizedState, l.componentWillUnmount();
        } catch (S) {
          ot(s, t, S);
        }
        ar(e, t, s);
        break;
      case 21:
        ar(e, t, s);
        break;
      case 22:
        s.mode & 1 ? (Nt = (l = Nt) || s.memoizedState !== null, ar(e, t, s), Nt = l) : ar(e, t, s);
        break;
      default:
        ar(e, t, s);
    }
  }
  function Yf(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var s = e.stateNode;
      s === null && (s = e.stateNode = new my()), t.forEach(function(l) {
        var c = Ey.bind(null, e, l);
        s.has(l) || (s.add(l), l.then(c, c));
      });
    }
  }
  function pn(e, t) {
    var s = t.deletions;
    if (s !== null) for (var l = 0; l < s.length; l++) {
      var c = s[l];
      try {
        var d = e, h = t, S = h;
        e: for (; S !== null; ) {
          switch (S.tag) {
            case 5:
              _t = S.stateNode, fn = !1;
              break e;
            case 3:
              _t = S.stateNode.containerInfo, fn = !0;
              break e;
            case 4:
              _t = S.stateNode.containerInfo, fn = !0;
              break e;
          }
          S = S.return;
        }
        if (_t === null) throw Error(o(160));
        Qf(d, h, c), _t = null, fn = !1;
        var R = c.alternate;
        R !== null && (R.return = null), c.return = null;
      } catch (F) {
        ot(c, t, F);
      }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Xf(t, e), t = t.sibling;
  }
  function Xf(e, t) {
    var s = e.alternate, l = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (pn(t, e), bn(e), l & 4) {
          try {
            Rs(3, e, e.return), Vi(3, e);
          } catch (he) {
            ot(e, e.return, he);
          }
          try {
            Rs(5, e, e.return);
          } catch (he) {
            ot(e, e.return, he);
          }
        }
        break;
      case 1:
        pn(t, e), bn(e), l & 512 && s !== null && ko(s, s.return);
        break;
      case 5:
        if (pn(t, e), bn(e), l & 512 && s !== null && ko(s, s.return), e.flags & 32) {
          var c = e.stateNode;
          try {
            lt(c, "");
          } catch (he) {
            ot(e, e.return, he);
          }
        }
        if (l & 4 && (c = e.stateNode, c != null)) {
          var d = e.memoizedProps, h = s !== null ? s.memoizedProps : d, S = e.type, R = e.updateQueue;
          if (e.updateQueue = null, R !== null) try {
            S === "input" && d.type === "radio" && d.name != null && sn(c, d), eo(S, h);
            var F = eo(S, d);
            for (h = 0; h < R.length; h += 2) {
              var Z = R[h], G = R[h + 1];
              Z === "style" ? Jr(c, G) : Z === "dangerouslySetInnerHTML" ? $e(c, G) : Z === "children" ? lt(c, G) : I(c, Z, G, F);
            }
            switch (S) {
              case "input":
                ln(c, d);
                break;
              case "textarea":
                ie(c, d);
                break;
              case "select":
                var W = c._wrapperState.wasMultiple;
                c._wrapperState.wasMultiple = !!d.multiple;
                var ae = d.value;
                ae != null ? b(c, !!d.multiple, ae, !1) : W !== !!d.multiple && (d.defaultValue != null ? b(
                  c,
                  !!d.multiple,
                  d.defaultValue,
                  !0
                ) : b(c, !!d.multiple, d.multiple ? [] : "", !1));
            }
            c[gs] = d;
          } catch (he) {
            ot(e, e.return, he);
          }
        }
        break;
      case 6:
        if (pn(t, e), bn(e), l & 4) {
          if (e.stateNode === null) throw Error(o(162));
          c = e.stateNode, d = e.memoizedProps;
          try {
            c.nodeValue = d;
          } catch (he) {
            ot(e, e.return, he);
          }
        }
        break;
      case 3:
        if (pn(t, e), bn(e), l & 4 && s !== null && s.memoizedState.isDehydrated) try {
          ss(t.containerInfo);
        } catch (he) {
          ot(e, e.return, he);
        }
        break;
      case 4:
        pn(t, e), bn(e);
        break;
      case 13:
        pn(t, e), bn(e), c = e.child, c.flags & 8192 && (d = c.memoizedState !== null, c.stateNode.isHidden = d, !d || c.alternate !== null && c.alternate.memoizedState !== null || (au = at())), l & 4 && Yf(e);
        break;
      case 22:
        if (Z = s !== null && s.memoizedState !== null, e.mode & 1 ? (Nt = (F = Nt) || Z, pn(t, e), Nt = F) : pn(t, e), bn(e), l & 8192) {
          if (F = e.memoizedState !== null, (e.stateNode.isHidden = F) && !Z && (e.mode & 1) !== 0) for (de = e, Z = e.child; Z !== null; ) {
            for (G = de = Z; de !== null; ) {
              switch (W = de, ae = W.child, W.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Rs(4, W, W.return);
                  break;
                case 1:
                  ko(W, W.return);
                  var fe = W.stateNode;
                  if (typeof fe.componentWillUnmount == "function") {
                    l = W, s = W.return;
                    try {
                      t = l, fe.props = t.memoizedProps, fe.state = t.memoizedState, fe.componentWillUnmount();
                    } catch (he) {
                      ot(l, s, he);
                    }
                  }
                  break;
                case 5:
                  ko(W, W.return);
                  break;
                case 22:
                  if (W.memoizedState !== null) {
                    ep(G);
                    continue;
                  }
              }
              ae !== null ? (ae.return = W, de = ae) : ep(G);
            }
            Z = Z.sibling;
          }
          e: for (Z = null, G = e; ; ) {
            if (G.tag === 5) {
              if (Z === null) {
                Z = G;
                try {
                  c = G.stateNode, F ? (d = c.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (S = G.stateNode, R = G.memoizedProps.style, h = R != null && R.hasOwnProperty("display") ? R.display : null, S.style.display = Ks("display", h));
                } catch (he) {
                  ot(e, e.return, he);
                }
              }
            } else if (G.tag === 6) {
              if (Z === null) try {
                G.stateNode.nodeValue = F ? "" : G.memoizedProps;
              } catch (he) {
                ot(e, e.return, he);
              }
            } else if ((G.tag !== 22 && G.tag !== 23 || G.memoizedState === null || G === e) && G.child !== null) {
              G.child.return = G, G = G.child;
              continue;
            }
            if (G === e) break e;
            for (; G.sibling === null; ) {
              if (G.return === null || G.return === e) break e;
              Z === G && (Z = null), G = G.return;
            }
            Z === G && (Z = null), G.sibling.return = G.return, G = G.sibling;
          }
        }
        break;
      case 19:
        pn(t, e), bn(e), l & 4 && Yf(e);
        break;
      case 21:
        break;
      default:
        pn(
          t,
          e
        ), bn(e);
    }
  }
  function bn(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var s = e.return; s !== null; ) {
            if (Gf(s)) {
              var l = s;
              break e;
            }
            s = s.return;
          }
          throw Error(o(160));
        }
        switch (l.tag) {
          case 5:
            var c = l.stateNode;
            l.flags & 32 && (lt(c, ""), l.flags &= -33);
            var d = Kf(e);
            su(e, d, c);
            break;
          case 3:
          case 4:
            var h = l.stateNode.containerInfo, S = Kf(e);
            ou(e, S, h);
            break;
          default:
            throw Error(o(161));
        }
      } catch (R) {
        ot(e, e.return, R);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function vy(e, t, s) {
    de = e, qf(e);
  }
  function qf(e, t, s) {
    for (var l = (e.mode & 1) !== 0; de !== null; ) {
      var c = de, d = c.child;
      if (c.tag === 22 && l) {
        var h = c.memoizedState !== null || Fi;
        if (!h) {
          var S = c.alternate, R = S !== null && S.memoizedState !== null || Nt;
          S = Fi;
          var F = Nt;
          if (Fi = h, (Nt = R) && !F) for (de = c; de !== null; ) h = de, R = h.child, h.tag === 22 && h.memoizedState !== null ? tp(c) : R !== null ? (R.return = h, de = R) : tp(c);
          for (; d !== null; ) de = d, qf(d), d = d.sibling;
          de = c, Fi = S, Nt = F;
        }
        Jf(e);
      } else (c.subtreeFlags & 8772) !== 0 && d !== null ? (d.return = c, de = d) : Jf(e);
    }
  }
  function Jf(e) {
    for (; de !== null; ) {
      var t = de;
      if ((t.flags & 8772) !== 0) {
        var s = t.alternate;
        try {
          if ((t.flags & 8772) !== 0) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Nt || Vi(5, t);
              break;
            case 1:
              var l = t.stateNode;
              if (t.flags & 4 && !Nt) if (s === null) l.componentDidMount();
              else {
                var c = t.elementType === t.type ? s.memoizedProps : dn(t.type, s.memoizedProps);
                l.componentDidUpdate(c, s.memoizedState, l.__reactInternalSnapshotBeforeUpdate);
              }
              var d = t.updateQueue;
              d !== null && Jd(t, d, l);
              break;
            case 3:
              var h = t.updateQueue;
              if (h !== null) {
                if (s = null, t.child !== null) switch (t.child.tag) {
                  case 5:
                    s = t.child.stateNode;
                    break;
                  case 1:
                    s = t.child.stateNode;
                }
                Jd(t, h, s);
              }
              break;
            case 5:
              var S = t.stateNode;
              if (s === null && t.flags & 4) {
                s = S;
                var R = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    R.autoFocus && s.focus();
                    break;
                  case "img":
                    R.src && (s.src = R.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var F = t.alternate;
                if (F !== null) {
                  var Z = F.memoizedState;
                  if (Z !== null) {
                    var G = Z.dehydrated;
                    G !== null && ss(G);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(o(163));
          }
          Nt || t.flags & 512 && ru(t);
        } catch (W) {
          ot(t, t.return, W);
        }
      }
      if (t === e) {
        de = null;
        break;
      }
      if (s = t.sibling, s !== null) {
        s.return = t.return, de = s;
        break;
      }
      de = t.return;
    }
  }
  function ep(e) {
    for (; de !== null; ) {
      var t = de;
      if (t === e) {
        de = null;
        break;
      }
      var s = t.sibling;
      if (s !== null) {
        s.return = t.return, de = s;
        break;
      }
      de = t.return;
    }
  }
  function tp(e) {
    for (; de !== null; ) {
      var t = de;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var s = t.return;
            try {
              Vi(4, t);
            } catch (R) {
              ot(t, s, R);
            }
            break;
          case 1:
            var l = t.stateNode;
            if (typeof l.componentDidMount == "function") {
              var c = t.return;
              try {
                l.componentDidMount();
              } catch (R) {
                ot(t, c, R);
              }
            }
            var d = t.return;
            try {
              ru(t);
            } catch (R) {
              ot(t, d, R);
            }
            break;
          case 5:
            var h = t.return;
            try {
              ru(t);
            } catch (R) {
              ot(t, h, R);
            }
        }
      } catch (R) {
        ot(t, t.return, R);
      }
      if (t === e) {
        de = null;
        break;
      }
      var S = t.sibling;
      if (S !== null) {
        S.return = t.return, de = S;
        break;
      }
      de = t.return;
    }
  }
  var yy = Math.ceil, zi = L.ReactCurrentDispatcher, iu = L.ReactCurrentOwner, en = L.ReactCurrentBatchConfig, Be = 0, xt = null, ct = null, St = 0, Wt = 0, Co = rr(0), gt = 0, Ns = null, Fr = 0, Bi = 0, lu = 0, Ts = null, Lt = null, au = 0, Eo = 1 / 0, zn = null, Ui = !1, uu = null, ur = null, $i = !1, cr = null, Wi = 0, Ps = 0, cu = null, Hi = -1, Zi = 0;
  function Pt() {
    return (Be & 6) !== 0 ? at() : Hi !== -1 ? Hi : Hi = at();
  }
  function dr(e) {
    return (e.mode & 1) === 0 ? 1 : (Be & 2) !== 0 && St !== 0 ? St & -St : ty.transition !== null ? (Zi === 0 && (Zi = Gc()), Zi) : (e = Ge, e !== 0 || (e = window.event, e = e === void 0 ? 16 : nd(e.type)), e);
  }
  function hn(e, t, s, l) {
    if (50 < Ps) throw Ps = 0, cu = null, Error(o(185));
    es(e, s, l), ((Be & 2) === 0 || e !== xt) && (e === xt && ((Be & 2) === 0 && (Bi |= s), gt === 4 && fr(e, St)), Dt(e, l), s === 1 && Be === 0 && (t.mode & 1) === 0 && (Eo = at() + 500, wi && sr()));
  }
  function Dt(e, t) {
    var s = e.callbackNode;
    tv(e, t);
    var l = ti(e, e === xt ? St : 0);
    if (l === 0) s !== null && Wc(s), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = l & -l, e.callbackPriority !== t) {
      if (s != null && Wc(s), t === 1) e.tag === 0 ? ey(rp.bind(null, e)) : Bd(rp.bind(null, e)), Yv(function() {
        (Be & 6) === 0 && sr();
      }), s = null;
      else {
        switch (Kc(l)) {
          case 1:
            s = $l;
            break;
          case 4:
            s = Hc;
            break;
          case 16:
            s = Xs;
            break;
          case 536870912:
            s = Zc;
            break;
          default:
            s = Xs;
        }
        s = dp(s, np.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = s;
    }
  }
  function np(e, t) {
    if (Hi = -1, Zi = 0, (Be & 6) !== 0) throw Error(o(327));
    var s = e.callbackNode;
    if (bo() && e.callbackNode !== s) return null;
    var l = ti(e, e === xt ? St : 0);
    if (l === 0) return null;
    if ((l & 30) !== 0 || (l & e.expiredLanes) !== 0 || t) t = Gi(e, l);
    else {
      t = l;
      var c = Be;
      Be |= 2;
      var d = sp();
      (xt !== e || St !== t) && (zn = null, Eo = at() + 500, zr(e, t));
      do
        try {
          _y();
          break;
        } catch (S) {
          op(e, S);
        }
      while (!0);
      Na(), zi.current = d, Be = c, ct !== null ? t = 0 : (xt = null, St = 0, t = gt);
    }
    if (t !== 0) {
      if (t === 2 && (c = Wl(e), c !== 0 && (l = c, t = du(e, c))), t === 1) throw s = Ns, zr(e, 0), fr(e, l), Dt(e, at()), s;
      if (t === 6) fr(e, l);
      else {
        if (c = e.current.alternate, (l & 30) === 0 && !xy(c) && (t = Gi(e, l), t === 2 && (d = Wl(e), d !== 0 && (l = d, t = du(e, d))), t === 1)) throw s = Ns, zr(e, 0), fr(e, l), Dt(e, at()), s;
        switch (e.finishedWork = c, e.finishedLanes = l, t) {
          case 0:
          case 1:
            throw Error(o(345));
          case 2:
            Br(e, Lt, zn);
            break;
          case 3:
            if (fr(e, l), (l & 130023424) === l && (t = au + 500 - at(), 10 < t)) {
              if (ti(e, 0) !== 0) break;
              if (c = e.suspendedLanes, (c & l) !== l) {
                Pt(), e.pingedLanes |= e.suspendedLanes & c;
                break;
              }
              e.timeoutHandle = va(Br.bind(null, e, Lt, zn), t);
              break;
            }
            Br(e, Lt, zn);
            break;
          case 4:
            if (fr(e, l), (l & 4194240) === l) break;
            for (t = e.eventTimes, c = -1; 0 < l; ) {
              var h = 31 - an(l);
              d = 1 << h, h = t[h], h > c && (c = h), l &= ~d;
            }
            if (l = c, l = at() - l, l = (120 > l ? 120 : 480 > l ? 480 : 1080 > l ? 1080 : 1920 > l ? 1920 : 3e3 > l ? 3e3 : 4320 > l ? 4320 : 1960 * yy(l / 1960)) - l, 10 < l) {
              e.timeoutHandle = va(Br.bind(null, e, Lt, zn), l);
              break;
            }
            Br(e, Lt, zn);
            break;
          case 5:
            Br(e, Lt, zn);
            break;
          default:
            throw Error(o(329));
        }
      }
    }
    return Dt(e, at()), e.callbackNode === s ? np.bind(null, e) : null;
  }
  function du(e, t) {
    var s = Ts;
    return e.current.memoizedState.isDehydrated && (zr(e, t).flags |= 256), e = Gi(e, t), e !== 2 && (t = Lt, Lt = s, t !== null && fu(t)), e;
  }
  function fu(e) {
    Lt === null ? Lt = e : Lt.push.apply(Lt, e);
  }
  function xy(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var s = t.updateQueue;
        if (s !== null && (s = s.stores, s !== null)) for (var l = 0; l < s.length; l++) {
          var c = s[l], d = c.getSnapshot;
          c = c.value;
          try {
            if (!un(d(), c)) return !1;
          } catch {
            return !1;
          }
        }
      }
      if (s = t.child, t.subtreeFlags & 16384 && s !== null) s.return = t, t = s;
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return !0;
  }
  function fr(e, t) {
    for (t &= ~lu, t &= ~Bi, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var s = 31 - an(t), l = 1 << s;
      e[s] = -1, t &= ~l;
    }
  }
  function rp(e) {
    if ((Be & 6) !== 0) throw Error(o(327));
    bo();
    var t = ti(e, 0);
    if ((t & 1) === 0) return Dt(e, at()), null;
    var s = Gi(e, t);
    if (e.tag !== 0 && s === 2) {
      var l = Wl(e);
      l !== 0 && (t = l, s = du(e, l));
    }
    if (s === 1) throw s = Ns, zr(e, 0), fr(e, t), Dt(e, at()), s;
    if (s === 6) throw Error(o(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, Br(e, Lt, zn), Dt(e, at()), null;
  }
  function pu(e, t) {
    var s = Be;
    Be |= 1;
    try {
      return e(t);
    } finally {
      Be = s, Be === 0 && (Eo = at() + 500, wi && sr());
    }
  }
  function Vr(e) {
    cr !== null && cr.tag === 0 && (Be & 6) === 0 && bo();
    var t = Be;
    Be |= 1;
    var s = en.transition, l = Ge;
    try {
      if (en.transition = null, Ge = 1, e) return e();
    } finally {
      Ge = l, en.transition = s, Be = t, (Be & 6) === 0 && sr();
    }
  }
  function hu() {
    Wt = Co.current, qe(Co);
  }
  function zr(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var s = e.timeoutHandle;
    if (s !== -1 && (e.timeoutHandle = -1, Qv(s)), ct !== null) for (s = ct.return; s !== null; ) {
      var l = s;
      switch (ka(l), l.tag) {
        case 1:
          l = l.type.childContextTypes, l != null && yi();
          break;
        case 3:
          _o(), qe(It), qe(Et), La();
          break;
        case 5:
          Ma(l);
          break;
        case 4:
          _o();
          break;
        case 13:
          qe(nt);
          break;
        case 19:
          qe(nt);
          break;
        case 10:
          Ta(l.type._context);
          break;
        case 22:
        case 23:
          hu();
      }
      s = s.return;
    }
    if (xt = e, ct = e = pr(e.current, null), St = Wt = t, gt = 0, Ns = null, lu = Bi = Fr = 0, Lt = Ts = null, jr !== null) {
      for (t = 0; t < jr.length; t++) if (s = jr[t], l = s.interleaved, l !== null) {
        s.interleaved = null;
        var c = l.next, d = s.pending;
        if (d !== null) {
          var h = d.next;
          d.next = c, l.next = h;
        }
        s.pending = l;
      }
      jr = null;
    }
    return e;
  }
  function op(e, t) {
    do {
      var s = ct;
      try {
        if (Na(), Pi.current = Mi, Ai) {
          for (var l = rt.memoizedState; l !== null; ) {
            var c = l.queue;
            c !== null && (c.pending = null), l = l.next;
          }
          Ai = !1;
        }
        if (Dr = 0, yt = mt = rt = null, Ss = !1, ks = 0, iu.current = null, s === null || s.return === null) {
          gt = 1, Ns = t, ct = null;
          break;
        }
        e: {
          var d = e, h = s.return, S = s, R = t;
          if (t = St, S.flags |= 32768, R !== null && typeof R == "object" && typeof R.then == "function") {
            var F = R, Z = S, G = Z.tag;
            if ((Z.mode & 1) === 0 && (G === 0 || G === 11 || G === 15)) {
              var W = Z.alternate;
              W ? (Z.updateQueue = W.updateQueue, Z.memoizedState = W.memoizedState, Z.lanes = W.lanes) : (Z.updateQueue = null, Z.memoizedState = null);
            }
            var ae = Tf(h);
            if (ae !== null) {
              ae.flags &= -257, Pf(ae, h, S, d, t), ae.mode & 1 && Nf(d, F, t), t = ae, R = F;
              var fe = t.updateQueue;
              if (fe === null) {
                var he = /* @__PURE__ */ new Set();
                he.add(R), t.updateQueue = he;
              } else fe.add(R);
              break e;
            } else {
              if ((t & 1) === 0) {
                Nf(d, F, t), mu();
                break e;
              }
              R = Error(o(426));
            }
          } else if (et && S.mode & 1) {
            var ut = Tf(h);
            if (ut !== null) {
              (ut.flags & 65536) === 0 && (ut.flags |= 256), Pf(ut, h, S, d, t), ba(So(R, S));
              break e;
            }
          }
          d = R = So(R, S), gt !== 4 && (gt = 2), Ts === null ? Ts = [d] : Ts.push(d), d = h;
          do {
            switch (d.tag) {
              case 3:
                d.flags |= 65536, t &= -t, d.lanes |= t;
                var M = bf(d, R, t);
                qd(d, M);
                break e;
              case 1:
                S = R;
                var T = d.type, D = d.stateNode;
                if ((d.flags & 128) === 0 && (typeof T.getDerivedStateFromError == "function" || D !== null && typeof D.componentDidCatch == "function" && (ur === null || !ur.has(D)))) {
                  d.flags |= 65536, t &= -t, d.lanes |= t;
                  var q = Rf(d, S, t);
                  qd(d, q);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        lp(s);
      } catch (ve) {
        t = ve, ct === s && s !== null && (ct = s = s.return);
        continue;
      }
      break;
    } while (!0);
  }
  function sp() {
    var e = zi.current;
    return zi.current = Mi, e === null ? Mi : e;
  }
  function mu() {
    (gt === 0 || gt === 3 || gt === 2) && (gt = 4), xt === null || (Fr & 268435455) === 0 && (Bi & 268435455) === 0 || fr(xt, St);
  }
  function Gi(e, t) {
    var s = Be;
    Be |= 2;
    var l = sp();
    (xt !== e || St !== t) && (zn = null, zr(e, t));
    do
      try {
        wy();
        break;
      } catch (c) {
        op(e, c);
      }
    while (!0);
    if (Na(), Be = s, zi.current = l, ct !== null) throw Error(o(261));
    return xt = null, St = 0, gt;
  }
  function wy() {
    for (; ct !== null; ) ip(ct);
  }
  function _y() {
    for (; ct !== null && !Zg(); ) ip(ct);
  }
  function ip(e) {
    var t = cp(e.alternate, e, Wt);
    e.memoizedProps = e.pendingProps, t === null ? lp(e) : ct = t, iu.current = null;
  }
  function lp(e) {
    var t = e;
    do {
      var s = t.alternate;
      if (e = t.return, (t.flags & 32768) === 0) {
        if (s = py(s, t, Wt), s !== null) {
          ct = s;
          return;
        }
      } else {
        if (s = hy(s, t), s !== null) {
          s.flags &= 32767, ct = s;
          return;
        }
        if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          gt = 6, ct = null;
          return;
        }
      }
      if (t = t.sibling, t !== null) {
        ct = t;
        return;
      }
      ct = t = e;
    } while (t !== null);
    gt === 0 && (gt = 5);
  }
  function Br(e, t, s) {
    var l = Ge, c = en.transition;
    try {
      en.transition = null, Ge = 1, Sy(e, t, s, l);
    } finally {
      en.transition = c, Ge = l;
    }
    return null;
  }
  function Sy(e, t, s, l) {
    do
      bo();
    while (cr !== null);
    if ((Be & 6) !== 0) throw Error(o(327));
    s = e.finishedWork;
    var c = e.finishedLanes;
    if (s === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, s === e.current) throw Error(o(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var d = s.lanes | s.childLanes;
    if (nv(e, d), e === xt && (ct = xt = null, St = 0), (s.subtreeFlags & 2064) === 0 && (s.flags & 2064) === 0 || $i || ($i = !0, dp(Xs, function() {
      return bo(), null;
    })), d = (s.flags & 15990) !== 0, (s.subtreeFlags & 15990) !== 0 || d) {
      d = en.transition, en.transition = null;
      var h = Ge;
      Ge = 1;
      var S = Be;
      Be |= 4, iu.current = null, gy(e, s), Xf(s, e), Uv(ma), oi = !!ha, ma = ha = null, e.current = s, vy(s), Gg(), Be = S, Ge = h, en.transition = d;
    } else e.current = s;
    if ($i && ($i = !1, cr = e, Wi = c), d = e.pendingLanes, d === 0 && (ur = null), Yg(s.stateNode), Dt(e, at()), t !== null) for (l = e.onRecoverableError, s = 0; s < t.length; s++) c = t[s], l(c.value, { componentStack: c.stack, digest: c.digest });
    if (Ui) throw Ui = !1, e = uu, uu = null, e;
    return (Wi & 1) !== 0 && e.tag !== 0 && bo(), d = e.pendingLanes, (d & 1) !== 0 ? e === cu ? Ps++ : (Ps = 0, cu = e) : Ps = 0, sr(), null;
  }
  function bo() {
    if (cr !== null) {
      var e = Kc(Wi), t = en.transition, s = Ge;
      try {
        if (en.transition = null, Ge = 16 > e ? 16 : e, cr === null) var l = !1;
        else {
          if (e = cr, cr = null, Wi = 0, (Be & 6) !== 0) throw Error(o(331));
          var c = Be;
          for (Be |= 4, de = e.current; de !== null; ) {
            var d = de, h = d.child;
            if ((de.flags & 16) !== 0) {
              var S = d.deletions;
              if (S !== null) {
                for (var R = 0; R < S.length; R++) {
                  var F = S[R];
                  for (de = F; de !== null; ) {
                    var Z = de;
                    switch (Z.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Rs(8, Z, d);
                    }
                    var G = Z.child;
                    if (G !== null) G.return = Z, de = G;
                    else for (; de !== null; ) {
                      Z = de;
                      var W = Z.sibling, ae = Z.return;
                      if (Zf(Z), Z === F) {
                        de = null;
                        break;
                      }
                      if (W !== null) {
                        W.return = ae, de = W;
                        break;
                      }
                      de = ae;
                    }
                  }
                }
                var fe = d.alternate;
                if (fe !== null) {
                  var he = fe.child;
                  if (he !== null) {
                    fe.child = null;
                    do {
                      var ut = he.sibling;
                      he.sibling = null, he = ut;
                    } while (he !== null);
                  }
                }
                de = d;
              }
            }
            if ((d.subtreeFlags & 2064) !== 0 && h !== null) h.return = d, de = h;
            else e: for (; de !== null; ) {
              if (d = de, (d.flags & 2048) !== 0) switch (d.tag) {
                case 0:
                case 11:
                case 15:
                  Rs(9, d, d.return);
              }
              var M = d.sibling;
              if (M !== null) {
                M.return = d.return, de = M;
                break e;
              }
              de = d.return;
            }
          }
          var T = e.current;
          for (de = T; de !== null; ) {
            h = de;
            var D = h.child;
            if ((h.subtreeFlags & 2064) !== 0 && D !== null) D.return = h, de = D;
            else e: for (h = T; de !== null; ) {
              if (S = de, (S.flags & 2048) !== 0) try {
                switch (S.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Vi(9, S);
                }
              } catch (ve) {
                ot(S, S.return, ve);
              }
              if (S === h) {
                de = null;
                break e;
              }
              var q = S.sibling;
              if (q !== null) {
                q.return = S.return, de = q;
                break e;
              }
              de = S.return;
            }
          }
          if (Be = c, sr(), Sn && typeof Sn.onPostCommitFiberRoot == "function") try {
            Sn.onPostCommitFiberRoot(qs, e);
          } catch {
          }
          l = !0;
        }
        return l;
      } finally {
        Ge = s, en.transition = t;
      }
    }
    return !1;
  }
  function ap(e, t, s) {
    t = So(s, t), t = bf(e, t, 1), e = lr(e, t, 1), t = Pt(), e !== null && (es(e, 1, t), Dt(e, t));
  }
  function ot(e, t, s) {
    if (e.tag === 3) ap(e, e, s);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        ap(t, e, s);
        break;
      } else if (t.tag === 1) {
        var l = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (ur === null || !ur.has(l))) {
          e = So(s, e), e = Rf(t, e, 1), t = lr(t, e, 1), e = Pt(), t !== null && (es(t, 1, e), Dt(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function ky(e, t, s) {
    var l = e.pingCache;
    l !== null && l.delete(t), t = Pt(), e.pingedLanes |= e.suspendedLanes & s, xt === e && (St & s) === s && (gt === 4 || gt === 3 && (St & 130023424) === St && 500 > at() - au ? zr(e, 0) : lu |= s), Dt(e, t);
  }
  function up(e, t) {
    t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = ei, ei <<= 1, (ei & 130023424) === 0 && (ei = 4194304)));
    var s = Pt();
    e = Dn(e, t), e !== null && (es(e, t, s), Dt(e, s));
  }
  function Cy(e) {
    var t = e.memoizedState, s = 0;
    t !== null && (s = t.retryLane), up(e, s);
  }
  function Ey(e, t) {
    var s = 0;
    switch (e.tag) {
      case 13:
        var l = e.stateNode, c = e.memoizedState;
        c !== null && (s = c.retryLane);
        break;
      case 19:
        l = e.stateNode;
        break;
      default:
        throw Error(o(314));
    }
    l !== null && l.delete(t), up(e, s);
  }
  var cp;
  cp = function(e, t, s) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || It.current) jt = !0;
    else {
      if ((e.lanes & s) === 0 && (t.flags & 128) === 0) return jt = !1, fy(e, t, s);
      jt = (e.flags & 131072) !== 0;
    }
    else jt = !1, et && (t.flags & 1048576) !== 0 && Ud(t, Si, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var l = t.type;
        Di(e, t), e = t.pendingProps;
        var c = ho(t, Et.current);
        wo(t, s), c = Va(null, t, l, e, c, s);
        var d = za();
        return t.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Mt(l) ? (d = !0, xi(t)) : d = !1, t.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, Oa(t), c.updater = ji, t.stateNode = c, c._reactInternals = t, Za(t, l, e, s), t = Ya(null, t, l, !0, d, s)) : (t.tag = 0, et && d && Sa(t), Tt(null, t, c, s), t = t.child), t;
      case 16:
        l = t.elementType;
        e: {
          switch (Di(e, t), e = t.pendingProps, c = l._init, l = c(l._payload), t.type = l, c = t.tag = Ry(l), e = dn(l, e), c) {
            case 0:
              t = Qa(null, t, l, e, s);
              break e;
            case 1:
              t = Lf(null, t, l, e, s);
              break e;
            case 11:
              t = Af(null, t, l, e, s);
              break e;
            case 14:
              t = Of(null, t, l, dn(l.type, e), s);
              break e;
          }
          throw Error(o(
            306,
            l,
            ""
          ));
        }
        return t;
      case 0:
        return l = t.type, c = t.pendingProps, c = t.elementType === l ? c : dn(l, c), Qa(e, t, l, c, s);
      case 1:
        return l = t.type, c = t.pendingProps, c = t.elementType === l ? c : dn(l, c), Lf(e, t, l, c, s);
      case 3:
        e: {
          if (Df(t), e === null) throw Error(o(387));
          l = t.pendingProps, d = t.memoizedState, c = d.element, Xd(e, t), Ni(t, l, null, s);
          var h = t.memoizedState;
          if (l = h.element, d.isDehydrated) if (d = { element: l, isDehydrated: !1, cache: h.cache, pendingSuspenseBoundaries: h.pendingSuspenseBoundaries, transitions: h.transitions }, t.updateQueue.baseState = d, t.memoizedState = d, t.flags & 256) {
            c = So(Error(o(423)), t), t = Ff(e, t, l, s, c);
            break e;
          } else if (l !== c) {
            c = So(Error(o(424)), t), t = Ff(e, t, l, s, c);
            break e;
          } else for ($t = nr(t.stateNode.containerInfo.firstChild), Ut = t, et = !0, cn = null, s = Qd(t, null, l, s), t.child = s; s; ) s.flags = s.flags & -3 | 4096, s = s.sibling;
          else {
            if (vo(), l === c) {
              t = Vn(e, t, s);
              break e;
            }
            Tt(e, t, l, s);
          }
          t = t.child;
        }
        return t;
      case 5:
        return ef(t), e === null && Ea(t), l = t.type, c = t.pendingProps, d = e !== null ? e.memoizedProps : null, h = c.children, ga(l, c) ? h = null : d !== null && ga(l, d) && (t.flags |= 32), jf(e, t), Tt(e, t, h, s), t.child;
      case 6:
        return e === null && Ea(t), null;
      case 13:
        return Vf(e, t, s);
      case 4:
        return Ia(t, t.stateNode.containerInfo), l = t.pendingProps, e === null ? t.child = yo(t, null, l, s) : Tt(e, t, l, s), t.child;
      case 11:
        return l = t.type, c = t.pendingProps, c = t.elementType === l ? c : dn(l, c), Af(e, t, l, c, s);
      case 7:
        return Tt(e, t, t.pendingProps, s), t.child;
      case 8:
        return Tt(e, t, t.pendingProps.children, s), t.child;
      case 12:
        return Tt(e, t, t.pendingProps.children, s), t.child;
      case 10:
        e: {
          if (l = t.type._context, c = t.pendingProps, d = t.memoizedProps, h = c.value, Ye(Ei, l._currentValue), l._currentValue = h, d !== null) if (un(d.value, h)) {
            if (d.children === c.children && !It.current) {
              t = Vn(e, t, s);
              break e;
            }
          } else for (d = t.child, d !== null && (d.return = t); d !== null; ) {
            var S = d.dependencies;
            if (S !== null) {
              h = d.child;
              for (var R = S.firstContext; R !== null; ) {
                if (R.context === l) {
                  if (d.tag === 1) {
                    R = Fn(-1, s & -s), R.tag = 2;
                    var F = d.updateQueue;
                    if (F !== null) {
                      F = F.shared;
                      var Z = F.pending;
                      Z === null ? R.next = R : (R.next = Z.next, Z.next = R), F.pending = R;
                    }
                  }
                  d.lanes |= s, R = d.alternate, R !== null && (R.lanes |= s), Pa(
                    d.return,
                    s,
                    t
                  ), S.lanes |= s;
                  break;
                }
                R = R.next;
              }
            } else if (d.tag === 10) h = d.type === t.type ? null : d.child;
            else if (d.tag === 18) {
              if (h = d.return, h === null) throw Error(o(341));
              h.lanes |= s, S = h.alternate, S !== null && (S.lanes |= s), Pa(h, s, t), h = d.sibling;
            } else h = d.child;
            if (h !== null) h.return = d;
            else for (h = d; h !== null; ) {
              if (h === t) {
                h = null;
                break;
              }
              if (d = h.sibling, d !== null) {
                d.return = h.return, h = d;
                break;
              }
              h = h.return;
            }
            d = h;
          }
          Tt(e, t, c.children, s), t = t.child;
        }
        return t;
      case 9:
        return c = t.type, l = t.pendingProps.children, wo(t, s), c = qt(c), l = l(c), t.flags |= 1, Tt(e, t, l, s), t.child;
      case 14:
        return l = t.type, c = dn(l, t.pendingProps), c = dn(l.type, c), Of(e, t, l, c, s);
      case 15:
        return If(e, t, t.type, t.pendingProps, s);
      case 17:
        return l = t.type, c = t.pendingProps, c = t.elementType === l ? c : dn(l, c), Di(e, t), t.tag = 1, Mt(l) ? (e = !0, xi(t)) : e = !1, wo(t, s), Cf(t, l, c), Za(t, l, c, s), Ya(null, t, l, !0, e, s);
      case 19:
        return Bf(e, t, s);
      case 22:
        return Mf(e, t, s);
    }
    throw Error(o(156, t.tag));
  };
  function dp(e, t) {
    return $c(e, t);
  }
  function by(e, t, s, l) {
    this.tag = e, this.key = s, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = l, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function tn(e, t, s, l) {
    return new by(e, t, s, l);
  }
  function gu(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Ry(e) {
    if (typeof e == "function") return gu(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === $) return 11;
      if (e === Se) return 14;
    }
    return 2;
  }
  function pr(e, t) {
    var s = e.alternate;
    return s === null ? (s = tn(e.tag, t, e.key, e.mode), s.elementType = e.elementType, s.type = e.type, s.stateNode = e.stateNode, s.alternate = e, e.alternate = s) : (s.pendingProps = t, s.type = e.type, s.flags = 0, s.subtreeFlags = 0, s.deletions = null), s.flags = e.flags & 14680064, s.childLanes = e.childLanes, s.lanes = e.lanes, s.child = e.child, s.memoizedProps = e.memoizedProps, s.memoizedState = e.memoizedState, s.updateQueue = e.updateQueue, t = e.dependencies, s.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, s.sibling = e.sibling, s.index = e.index, s.ref = e.ref, s;
  }
  function Ki(e, t, s, l, c, d) {
    var h = 2;
    if (l = e, typeof e == "function") gu(e) && (h = 1);
    else if (typeof e == "string") h = 5;
    else e: switch (e) {
      case H:
        return Ur(s.children, c, d, t);
      case ne:
        h = 8, c |= 8;
        break;
      case _e:
        return e = tn(12, s, t, c | 2), e.elementType = _e, e.lanes = d, e;
      case te:
        return e = tn(13, s, t, c), e.elementType = te, e.lanes = d, e;
      case ce:
        return e = tn(19, s, t, c), e.elementType = ce, e.lanes = d, e;
      case le:
        return Qi(s, c, d, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case pe:
            h = 10;
            break e;
          case Ee:
            h = 9;
            break e;
          case $:
            h = 11;
            break e;
          case Se:
            h = 14;
            break e;
          case oe:
            h = 16, l = null;
            break e;
        }
        throw Error(o(130, e == null ? e : typeof e, ""));
    }
    return t = tn(h, s, t, c), t.elementType = e, t.type = l, t.lanes = d, t;
  }
  function Ur(e, t, s, l) {
    return e = tn(7, e, l, t), e.lanes = s, e;
  }
  function Qi(e, t, s, l) {
    return e = tn(22, e, l, t), e.elementType = le, e.lanes = s, e.stateNode = { isHidden: !1 }, e;
  }
  function vu(e, t, s) {
    return e = tn(6, e, null, t), e.lanes = s, e;
  }
  function yu(e, t, s) {
    return t = tn(4, e.children !== null ? e.children : [], e.key, t), t.lanes = s, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function Ny(e, t, s, l, c) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Hl(0), this.expirationTimes = Hl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Hl(0), this.identifierPrefix = l, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function xu(e, t, s, l, c, d, h, S, R) {
    return e = new Ny(e, t, s, S, R), t === 1 ? (t = 1, d === !0 && (t |= 8)) : t = 0, d = tn(3, null, null, t), e.current = d, d.stateNode = e, d.memoizedState = { element: l, isDehydrated: s, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Oa(d), e;
  }
  function Ty(e, t, s) {
    var l = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: K, key: l == null ? null : "" + l, children: e, containerInfo: t, implementation: s };
  }
  function fp(e) {
    if (!e) return or;
    e = e._reactInternals;
    e: {
      if (Pr(e) !== e || e.tag !== 1) throw Error(o(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (Mt(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(o(171));
    }
    if (e.tag === 1) {
      var s = e.type;
      if (Mt(s)) return Vd(e, s, t);
    }
    return t;
  }
  function pp(e, t, s, l, c, d, h, S, R) {
    return e = xu(s, l, !0, e, c, d, h, S, R), e.context = fp(null), s = e.current, l = Pt(), c = dr(s), d = Fn(l, c), d.callback = t ?? null, lr(s, d, c), e.current.lanes = c, es(e, c, l), Dt(e, l), e;
  }
  function Yi(e, t, s, l) {
    var c = t.current, d = Pt(), h = dr(c);
    return s = fp(s), t.context === null ? t.context = s : t.pendingContext = s, t = Fn(d, h), t.payload = { element: e }, l = l === void 0 ? null : l, l !== null && (t.callback = l), e = lr(c, t, h), e !== null && (hn(e, c, h, d), Ri(e, c, h)), h;
  }
  function Xi(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function hp(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var s = e.retryLane;
      e.retryLane = s !== 0 && s < t ? s : t;
    }
  }
  function wu(e, t) {
    hp(e, t), (e = e.alternate) && hp(e, t);
  }
  function Py() {
    return null;
  }
  var mp = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function _u(e) {
    this._internalRoot = e;
  }
  qi.prototype.render = _u.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(o(409));
    Yi(e, t, null, null);
  }, qi.prototype.unmount = _u.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Vr(function() {
        Yi(null, e, null, null);
      }), t[In] = null;
    }
  };
  function qi(e) {
    this._internalRoot = e;
  }
  qi.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Xc();
      e = { blockedOn: null, target: e, priority: t };
      for (var s = 0; s < Jn.length && t !== 0 && t < Jn[s].priority; s++) ;
      Jn.splice(s, 0, e), s === 0 && ed(e);
    }
  };
  function Su(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function Ji(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function gp() {
  }
  function Ay(e, t, s, l, c) {
    if (c) {
      if (typeof l == "function") {
        var d = l;
        l = function() {
          var F = Xi(h);
          d.call(F);
        };
      }
      var h = pp(t, l, e, 0, null, !1, !1, "", gp);
      return e._reactRootContainer = h, e[In] = h.current, hs(e.nodeType === 8 ? e.parentNode : e), Vr(), h;
    }
    for (; c = e.lastChild; ) e.removeChild(c);
    if (typeof l == "function") {
      var S = l;
      l = function() {
        var F = Xi(R);
        S.call(F);
      };
    }
    var R = xu(e, 0, !1, null, null, !1, !1, "", gp);
    return e._reactRootContainer = R, e[In] = R.current, hs(e.nodeType === 8 ? e.parentNode : e), Vr(function() {
      Yi(t, R, s, l);
    }), R;
  }
  function el(e, t, s, l, c) {
    var d = s._reactRootContainer;
    if (d) {
      var h = d;
      if (typeof c == "function") {
        var S = c;
        c = function() {
          var R = Xi(h);
          S.call(R);
        };
      }
      Yi(t, h, e, c);
    } else h = Ay(s, t, e, c, l);
    return Xi(h);
  }
  Qc = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var s = Jo(t.pendingLanes);
          s !== 0 && (Zl(t, s | 1), Dt(t, at()), (Be & 6) === 0 && (Eo = at() + 500, sr()));
        }
        break;
      case 13:
        Vr(function() {
          var l = Dn(e, 1);
          if (l !== null) {
            var c = Pt();
            hn(l, e, 1, c);
          }
        }), wu(e, 1);
    }
  }, Gl = function(e) {
    if (e.tag === 13) {
      var t = Dn(e, 134217728);
      if (t !== null) {
        var s = Pt();
        hn(t, e, 134217728, s);
      }
      wu(e, 134217728);
    }
  }, Yc = function(e) {
    if (e.tag === 13) {
      var t = dr(e), s = Dn(e, t);
      if (s !== null) {
        var l = Pt();
        hn(s, e, t, l);
      }
      wu(e, t);
    }
  }, Xc = function() {
    return Ge;
  }, qc = function(e, t) {
    var s = Ge;
    try {
      return Ge = e, t();
    } finally {
      Ge = s;
    }
  }, Vl = function(e, t, s) {
    switch (t) {
      case "input":
        if (ln(e, s), t = s.name, s.type === "radio" && t != null) {
          for (s = e; s.parentNode; ) s = s.parentNode;
          for (s = s.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < s.length; t++) {
            var l = s[t];
            if (l !== e && l.form === e.form) {
              var c = vi(l);
              if (!c) throw Error(o(90));
              ze(l), ln(l, c);
            }
          }
        }
        break;
      case "textarea":
        ie(e, s);
        break;
      case "select":
        t = s.value, t != null && b(e, !!s.multiple, t, !1);
    }
  }, Lc = pu, Dc = Vr;
  var Oy = { usingClientEntryPoint: !1, Events: [vs, fo, vi, Mc, jc, pu] }, As = { findFiberByHostInstance: Ar, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Iy = { bundleType: As.bundleType, version: As.version, rendererPackageName: As.rendererPackageName, rendererConfig: As.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: L.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = Bc(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: As.findFiberByHostInstance || Py, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var tl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!tl.isDisabled && tl.supportsFiber) try {
      qs = tl.inject(Iy), Sn = tl;
    } catch {
    }
  }
  return Ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Oy, Ft.createPortal = function(e, t) {
    var s = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Su(t)) throw Error(o(200));
    return Ty(e, t, null, s);
  }, Ft.createRoot = function(e, t) {
    if (!Su(e)) throw Error(o(299));
    var s = !1, l = "", c = mp;
    return t != null && (t.unstable_strictMode === !0 && (s = !0), t.identifierPrefix !== void 0 && (l = t.identifierPrefix), t.onRecoverableError !== void 0 && (c = t.onRecoverableError)), t = xu(e, 1, !1, null, null, s, !1, l, c), e[In] = t.current, hs(e.nodeType === 8 ? e.parentNode : e), new _u(t);
  }, Ft.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(o(188)) : (e = Object.keys(e).join(","), Error(o(268, e)));
    return e = Bc(t), e = e === null ? null : e.stateNode, e;
  }, Ft.flushSync = function(e) {
    return Vr(e);
  }, Ft.hydrate = function(e, t, s) {
    if (!Ji(t)) throw Error(o(200));
    return el(null, e, t, !0, s);
  }, Ft.hydrateRoot = function(e, t, s) {
    if (!Su(e)) throw Error(o(405));
    var l = s != null && s.hydratedSources || null, c = !1, d = "", h = mp;
    if (s != null && (s.unstable_strictMode === !0 && (c = !0), s.identifierPrefix !== void 0 && (d = s.identifierPrefix), s.onRecoverableError !== void 0 && (h = s.onRecoverableError)), t = pp(t, null, e, 1, s ?? null, c, !1, d, h), e[In] = t.current, hs(e), l) for (e = 0; e < l.length; e++) s = l[e], c = s._getVersion, c = c(s._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [s, c] : t.mutableSourceEagerHydrationData.push(
      s,
      c
    );
    return new qi(t);
  }, Ft.render = function(e, t, s) {
    if (!Ji(t)) throw Error(o(200));
    return el(null, e, t, !1, s);
  }, Ft.unmountComponentAtNode = function(e) {
    if (!Ji(e)) throw Error(o(40));
    return e._reactRootContainer ? (Vr(function() {
      el(null, null, e, !1, function() {
        e._reactRootContainer = null, e[In] = null;
      });
    }), !0) : !1;
  }, Ft.unstable_batchedUpdates = pu, Ft.unstable_renderSubtreeIntoContainer = function(e, t, s, l) {
    if (!Ji(s)) throw Error(o(200));
    if (e == null || e._reactInternals === void 0) throw Error(o(38));
    return el(e, t, s, !1, l);
  }, Ft.version = "18.3.1-next-f1338f8080-20240426", Ft;
}
var Cp;
function Ih() {
  if (Cp) return Eu.exports;
  Cp = 1;
  function n() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (r) {
        console.error(r);
      }
  }
  return n(), Eu.exports = By(), Eu.exports;
}
var Ep;
function Uy() {
  if (Ep) return nl;
  Ep = 1;
  var n = Ih();
  return nl.createRoot = n.createRoot, nl.hydrateRoot = n.hydrateRoot, nl;
}
var $y = Uy(), $s = (n) => n.type === "checkbox", Wr = (n) => n instanceof Date, Vt = (n) => n == null;
const Mh = (n) => typeof n == "object";
var ht = (n) => !Vt(n) && !Array.isArray(n) && Mh(n) && !Wr(n), jh = (n) => ht(n) && n.target ? $s(n.target) ? n.target.checked : n.target.value : n, Wy = (n) => n.substring(0, n.search(/\.\d+(\.|$)/)) || n, Lh = (n, r) => n.has(Wy(r)), Hy = (n) => {
  const r = n.constructor && n.constructor.prototype;
  return ht(r) && r.hasOwnProperty("isPrototypeOf");
}, uc = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function dt(n) {
  if (n instanceof Date)
    return new Date(n);
  const r = typeof FileList < "u" && n instanceof FileList;
  if (uc && (n instanceof Blob || r))
    return n;
  const o = Array.isArray(n);
  if (!o && !(ht(n) && Hy(n)))
    return n;
  const i = o ? [] : Object.create(Object.getPrototypeOf(n));
  for (const a in n)
    Object.prototype.hasOwnProperty.call(n, a) && (i[a] = dt(n[a]));
  return i;
}
var Nl = (n) => /^\w*$/.test(n), tt = (n) => n === void 0, cc = (n) => Array.isArray(n) ? n.filter(Boolean) : [], dc = (n) => cc(n.replace(/["|']|\]/g, "").split(/\.|\[/)), re = (n, r, o) => {
  if (!r || !ht(n))
    return o;
  const i = (Nl(r) ? [r] : dc(r)).reduce((a, u) => Vt(a) ? a : a[u], n);
  return tt(i) || i === n ? tt(n[r]) ? o : n[r] : i;
}, Ht = (n) => typeof n == "boolean", Ot = (n) => typeof n == "function", Ke = (n, r, o) => {
  let i = -1;
  const a = Nl(r) ? [r] : dc(r), u = a.length, f = u - 1;
  for (; ++i < u; ) {
    const p = a[i];
    let m = o;
    if (i !== f) {
      const g = n[p];
      m = ht(g) || Array.isArray(g) ? g : isNaN(+a[i + 1]) ? {} : [];
    }
    if (p === "__proto__" || p === "constructor" || p === "prototype")
      return;
    n[p] = m, n = n[p];
  }
};
const pl = {
  BLUR: "blur",
  FOCUS_OUT: "focusout",
  CHANGE: "change"
}, vn = {
  onBlur: "onBlur",
  onChange: "onChange",
  onSubmit: "onSubmit",
  onTouched: "onTouched",
  all: "all"
}, Bn = {
  max: "max",
  min: "min",
  maxLength: "maxLength",
  minLength: "minLength",
  pattern: "pattern",
  required: "required",
  validate: "validate"
}, Dh = ge.createContext(null);
Dh.displayName = "HookFormControlContext";
const fc = () => ge.useContext(Dh);
var Fh = (n, r, o, i = !0) => {
  const a = {
    defaultValues: r._defaultValues
  };
  for (const u in n)
    Object.defineProperty(a, u, {
      get: () => {
        const f = u;
        return r._proxyFormState[f] !== vn.all && (r._proxyFormState[f] = !i || vn.all), o && (o[f] = !0), n[f];
      }
    });
  return a;
};
const pc = typeof window < "u" ? ge.useLayoutEffect : ge.useEffect;
function Zy(n) {
  const r = fc(), { control: o = r, disabled: i, name: a, exact: u } = n || {}, [f, p] = ge.useState(o._formState), m = ge.useRef({
    isDirty: !1,
    isLoading: !1,
    dirtyFields: !1,
    touchedFields: !1,
    validatingFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  });
  return pc(() => o._subscribe({
    name: a,
    formState: m.current,
    exact: u,
    callback: (g) => {
      !i && p({
        ...o._formState,
        ...g
      });
    }
  }), [a, i, u]), ge.useEffect(() => {
    m.current.isValid && o._setValid(!0);
  }, [o]), ge.useMemo(() => Fh(f, o, m.current, !1), [f, o]);
}
var Gt = (n) => typeof n == "string", Uu = (n, r, o, i, a) => Gt(n) ? (i && r.watch.add(n), re(o, n, a)) : Array.isArray(n) ? n.map((u) => (i && r.watch.add(u), re(o, u))) : (i && (r.watchAll = !0), o), $u = (n) => Vt(n) || !Mh(n);
function yn(n, r, o = /* @__PURE__ */ new WeakSet()) {
  if ($u(n) || $u(r))
    return Object.is(n, r);
  if (Wr(n) && Wr(r))
    return Object.is(n.getTime(), r.getTime());
  const i = Object.keys(n), a = Object.keys(r);
  if (i.length !== a.length)
    return !1;
  if (o.has(n) || o.has(r))
    return !0;
  o.add(n), o.add(r);
  for (const u of i) {
    const f = n[u];
    if (!a.includes(u))
      return !1;
    if (u !== "ref") {
      const p = r[u];
      if (Wr(f) && Wr(p) || ht(f) && ht(p) || Array.isArray(f) && Array.isArray(p) ? !yn(f, p, o) : !Object.is(f, p))
        return !1;
    }
  }
  return !0;
}
function Gy(n) {
  const r = fc(), { control: o = r, name: i, defaultValue: a, disabled: u, exact: f, compute: p } = n || {}, m = ge.useRef(a), g = ge.useRef(p), v = ge.useRef(void 0), x = ge.useRef(o), C = ge.useRef(i);
  g.current = p;
  const [E, O] = ge.useState(() => {
    const L = o._getWatch(i, m.current);
    return g.current ? g.current(L) : L;
  }), w = ge.useCallback((L) => {
    const B = Uu(i, o._names, L || o._formValues, !1, m.current);
    return g.current ? g.current(B) : B;
  }, [o._formValues, o._names, i]), y = ge.useCallback((L) => {
    if (!u) {
      const B = Uu(i, o._names, L || o._formValues, !1, m.current);
      if (g.current) {
        const K = g.current(B);
        yn(K, v.current) || (O(K), v.current = K);
      } else
        O(B);
    }
  }, [o._formValues, o._names, u, i]);
  pc(() => ((x.current !== o || !yn(C.current, i)) && (x.current = o, C.current = i, y()), o._subscribe({
    name: i,
    formState: {
      values: !0
    },
    exact: f,
    callback: (L) => {
      y(L.values);
    }
  })), [o, f, i, y]), ge.useEffect(() => o._removeUnmounted());
  const A = x.current !== o, N = C.current, I = ge.useMemo(() => {
    if (u)
      return null;
    const L = !A && !yn(N, i);
    return A || L ? w() : null;
  }, [u, A, i, N, w]);
  return I !== null ? I : E;
}
function Ky(n) {
  const r = fc(), { name: o, disabled: i, control: a = r, shouldUnregister: u, defaultValue: f, exact: p = !0 } = n, m = Lh(a._names.array, o), g = ge.useMemo(() => re(a._formValues, o, re(a._defaultValues, o, f)), [a, o, f]), v = Gy({
    control: a,
    name: o,
    defaultValue: g,
    exact: p
  }), x = Zy({
    control: a,
    name: o,
    exact: p
  }), C = ge.useRef(n), E = ge.useRef(void 0), O = ge.useRef(a.register(o, {
    ...n.rules,
    value: v,
    ...Ht(n.disabled) ? { disabled: n.disabled } : {}
  }));
  C.current = n;
  const w = ge.useMemo(() => Object.defineProperties({}, {
    invalid: {
      enumerable: !0,
      get: () => !!re(x.errors, o)
    },
    isDirty: {
      enumerable: !0,
      get: () => !!re(x.dirtyFields, o)
    },
    isTouched: {
      enumerable: !0,
      get: () => !!re(x.touchedFields, o)
    },
    isValidating: {
      enumerable: !0,
      get: () => !!re(x.validatingFields, o)
    },
    error: {
      enumerable: !0,
      get: () => re(x.errors, o)
    }
  }), [x, o]), y = ge.useCallback((L) => O.current.onChange({
    target: {
      value: jh(L),
      name: o
    },
    type: pl.CHANGE
  }), [o]), A = ge.useCallback(() => O.current.onBlur({
    target: {
      value: re(a._formValues, o),
      name: o
    },
    type: pl.BLUR
  }), [o, a._formValues]), N = ge.useCallback((L) => {
    const B = re(a._fields, o);
    B && B._f && L && (B._f.ref = {
      focus: () => Ot(L.focus) && L.focus(),
      select: () => Ot(L.select) && L.select(),
      setCustomValidity: (K) => Ot(L.setCustomValidity) && L.setCustomValidity(K),
      reportValidity: () => Ot(L.reportValidity) && L.reportValidity()
    });
  }, [a._fields, o]), I = ge.useMemo(() => ({
    name: o,
    value: v,
    ...Ht(i) || x.disabled ? { disabled: x.disabled || i } : {},
    onChange: y,
    onBlur: A,
    ref: N
  }), [o, i, x.disabled, y, A, N, v]);
  return ge.useEffect(() => {
    const L = a._options.shouldUnregister || u, B = E.current;
    B && B !== o && !m && a.unregister(B), a.register(o, {
      ...C.current.rules,
      ...Ht(C.current.disabled) ? { disabled: C.current.disabled } : {}
    });
    const K = (H, ne) => {
      const _e = re(a._fields, H);
      _e && _e._f && (_e._f.mount = ne);
    };
    if (K(o, !0), L) {
      const H = dt(re(a._options.defaultValues, o, C.current.defaultValue));
      Ke(a._defaultValues, o, H), tt(re(a._formValues, o)) && Ke(a._formValues, o, H);
    }
    return !m && a.register(o), E.current = o, () => {
      (m ? L && !a._state.action : L) ? a.unregister(o) : K(o, !1);
    };
  }, [o, a, m, u]), ge.useEffect(() => {
    a._setDisabledField({
      disabled: i,
      name: o
    });
  }, [i, o, a]), ge.useMemo(() => ({
    field: I,
    formState: x,
    fieldState: w
  }), [I, x, w]);
}
const nn = (n) => n.render(Ky(n)), Qy = ge.createContext(null);
Qy.displayName = "HookFormContext";
var Vh = (n, r, o, i, a) => r ? {
  ...o[n],
  types: {
    ...o[n] && o[n].types ? o[n].types : {},
    [i]: a || !0
  }
} : {}, Vs = (n) => Array.isArray(n) ? n : [n], bp = () => {
  let n = [];
  return {
    get observers() {
      return n;
    },
    next: (a) => {
      for (const u of n)
        u.next && u.next(a);
    },
    subscribe: (a) => (n.push(a), {
      unsubscribe: () => {
        n = n.filter((u) => u !== a);
      }
    }),
    unsubscribe: () => {
      n = [];
    }
  };
};
function zh(n, r) {
  const o = {};
  for (const i in n)
    if (n.hasOwnProperty(i)) {
      const a = n[i], u = r[i];
      if (a && ht(a) && u) {
        const f = zh(a, u);
        ht(f) && (o[i] = f);
      } else n[i] && (o[i] = u);
    }
  return o;
}
var At = (n) => ht(n) && !Object.keys(n).length, hc = (n) => n.type === "file", hl = (n) => {
  if (!uc)
    return !1;
  const r = n ? n.ownerDocument : 0;
  return n instanceof (r && r.defaultView ? r.defaultView.HTMLElement : HTMLElement);
}, Bh = (n) => n.type === "select-multiple", mc = (n) => n.type === "radio", Yy = (n) => mc(n) || $s(n), Nu = (n) => hl(n) && n.isConnected;
function Xy(n, r) {
  const o = r.slice(0, -1).length;
  let i = 0;
  for (; i < o; )
    n = tt(n) ? i++ : n[r[i++]];
  return n;
}
function qy(n) {
  for (const r in n)
    if (n.hasOwnProperty(r) && !tt(n[r]))
      return !1;
  return !0;
}
function ft(n, r) {
  const o = Array.isArray(r) ? r : Nl(r) ? [r] : dc(r), i = o.length === 1 ? n : Xy(n, o), a = o.length - 1, u = o[a];
  return i && delete i[u], a !== 0 && (ht(i) && At(i) || Array.isArray(i) && qy(i)) && ft(n, o.slice(0, -1)), n;
}
var Jy = (n) => {
  for (const r in n)
    if (Ot(n[r]))
      return !0;
  return !1;
};
function Uh(n) {
  return Array.isArray(n) || ht(n) && !Jy(n);
}
function Wu(n, r = {}) {
  for (const o in n) {
    const i = n[o];
    Uh(i) ? (r[o] = Array.isArray(i) ? [] : {}, Wu(i, r[o])) : tt(i) || (r[o] = !0);
  }
  return r;
}
function Oo(n, r, o) {
  o || (o = Wu(r));
  for (const i in n) {
    const a = n[i];
    if (Uh(a))
      tt(r) || $u(o[i]) ? o[i] = Wu(a, Array.isArray(a) ? [] : {}) : Oo(a, Vt(r) ? {} : r[i], o[i]);
    else {
      const u = r[i];
      o[i] = !yn(a, u);
    }
  }
  return o;
}
const Rp = {
  value: !1,
  isValid: !1
}, Np = { value: !0, isValid: !0 };
var $h = (n) => {
  if (Array.isArray(n)) {
    if (n.length > 1) {
      const r = n.filter((o) => o && o.checked && !o.disabled).map((o) => o.value);
      return { value: r, isValid: !!r.length };
    }
    return n[0].checked && !n[0].disabled ? (
      // @ts-expect-error expected to work in the browser
      n[0].attributes && !tt(n[0].attributes.value) ? tt(n[0].value) || n[0].value === "" ? Np : { value: n[0].value, isValid: !0 } : Np
    ) : Rp;
  }
  return Rp;
}, Wh = (n, { valueAsNumber: r, valueAsDate: o, setValueAs: i }) => tt(n) ? n : r ? n === "" ? NaN : n && +n : o && Gt(n) ? new Date(n) : i ? i(n) : n;
const Tp = {
  isValid: !1,
  value: null
};
var Hh = (n) => Array.isArray(n) ? n.reduce((r, o) => o && o.checked && !o.disabled ? {
  isValid: !0,
  value: o.value
} : r, Tp) : Tp;
function Pp(n) {
  const r = n.ref;
  return hc(r) ? r.files : mc(r) ? Hh(n.refs).value : Bh(r) ? [...r.selectedOptions].map(({ value: o }) => o) : $s(r) ? $h(n.refs).value : Wh(tt(r.value) ? n.ref.value : r.value, n);
}
var ex = (n, r, o, i) => {
  const a = {};
  for (const u of n) {
    const f = re(r, u);
    f && Ke(a, u, f._f);
  }
  return {
    criteriaMode: o,
    names: [...n],
    fields: a,
    shouldUseNativeValidation: i
  };
}, ml = (n) => n instanceof RegExp, Is = (n) => tt(n) ? n : ml(n) ? n.source : ht(n) ? ml(n.value) ? n.value.source : n.value : n, Ap = (n) => ({
  isOnSubmit: !n || n === vn.onSubmit,
  isOnBlur: n === vn.onBlur,
  isOnChange: n === vn.onChange,
  isOnAll: n === vn.all,
  isOnTouch: n === vn.onTouched
});
const Op = "AsyncFunction";
var tx = (n) => !!n && !!n.validate && !!(Ot(n.validate) && n.validate.constructor.name === Op || ht(n.validate) && Object.values(n.validate).find((r) => r.constructor.name === Op)), nx = (n) => n.mount && (n.required || n.min || n.max || n.maxLength || n.minLength || n.pattern || n.validate), Ip = (n, r, o) => !o && (r.watchAll || r.watch.has(n) || [...r.watch].some((i) => n.startsWith(i) && /^\.\w+/.test(n.slice(i.length))));
const zs = (n, r, o, i) => {
  for (const a of o || Object.keys(n)) {
    const u = re(n, a);
    if (u) {
      const { _f: f, ...p } = u;
      if (f) {
        if (f.refs && f.refs[0] && r(f.refs[0], a) && !i)
          return !0;
        if (f.ref && r(f.ref, f.name) && !i)
          return !0;
        if (zs(p, r))
          break;
      } else if (ht(p) && zs(p, r))
        break;
    }
  }
};
function Mp(n, r, o) {
  const i = re(n, o);
  if (i || Nl(o))
    return {
      error: i,
      name: o
    };
  const a = o.split(".");
  for (; a.length; ) {
    const u = a.join("."), f = re(r, u), p = re(n, u);
    if (f && !Array.isArray(f) && o !== u)
      return { name: o };
    if (p && p.type)
      return {
        name: u,
        error: p
      };
    if (p && p.root && p.root.type)
      return {
        name: `${u}.root`,
        error: p.root
      };
    a.pop();
  }
  return {
    name: o
  };
}
var rx = (n, r, o, i) => {
  o(n);
  const { name: a, ...u } = n;
  return At(u) || Object.keys(u).length >= Object.keys(r).length || Object.keys(u).find((f) => r[f] === (!i || vn.all));
}, ox = (n, r, o) => !n || !r || n === r || Vs(n).some((i) => i && (o ? i === r : i.startsWith(r) || r.startsWith(i))), sx = (n, r, o, i, a) => a.isOnAll ? !1 : !o && a.isOnTouch ? !(r || n) : (o ? i.isOnBlur : a.isOnBlur) ? !n : (o ? i.isOnChange : a.isOnChange) ? n : !0, ix = (n, r) => !cc(re(n, r)).length && ft(n, r), lx = (n, r, o) => {
  const i = Vs(re(n, o));
  return Ke(i, "root", r[o]), Ke(n, o, i), n;
};
function jp(n, r, o = "validate") {
  if (Gt(n) || Array.isArray(n) && n.every(Gt) || Ht(n) && !n)
    return {
      type: o,
      message: Gt(n) ? n : "",
      ref: r
    };
}
var Ro = (n) => ht(n) && !ml(n) ? n : {
  value: n,
  message: ""
}, Lp = async (n, r, o, i, a, u) => {
  const { ref: f, refs: p, required: m, maxLength: g, minLength: v, min: x, max: C, pattern: E, validate: O, name: w, valueAsNumber: y, mount: A } = n._f, N = re(o, w);
  if (!A || r.has(w))
    return {};
  const I = p ? p[0] : f, L = ($) => {
    a && I.reportValidity && (I.setCustomValidity(Ht($) ? "" : $ || ""), I.reportValidity());
  }, B = {}, K = mc(f), H = $s(f), ne = K || H, _e = (y || hc(f)) && tt(f.value) && tt(N) || hl(f) && f.value === "" || N === "" || Array.isArray(N) && !N.length, pe = Vh.bind(null, w, i, B), Ee = ($, te, ce, Se = Bn.maxLength, oe = Bn.minLength) => {
    const le = $ ? te : ce;
    B[w] = {
      type: $ ? Se : oe,
      message: le,
      ref: f,
      ...pe($ ? Se : oe, le)
    };
  };
  if (u ? !Array.isArray(N) || !N.length : m && (!ne && (_e || Vt(N)) || Ht(N) && !N || H && !$h(p).isValid || K && !Hh(p).isValid)) {
    const { value: $, message: te } = Gt(m) ? { value: !!m, message: m } : Ro(m);
    if ($ && (B[w] = {
      type: Bn.required,
      message: te,
      ref: I,
      ...pe(Bn.required, te)
    }, !i))
      return L(te), B;
  }
  if (!_e && (!Vt(x) || !Vt(C))) {
    let $, te;
    const ce = Ro(C), Se = Ro(x);
    if (!Vt(N) && !isNaN(N)) {
      const oe = f.valueAsNumber || N && +N;
      Vt(ce.value) || ($ = oe > ce.value), Vt(Se.value) || (te = oe < Se.value);
    } else {
      const oe = f.valueAsDate || new Date(N), le = (Y) => /* @__PURE__ */ new Date((/* @__PURE__ */ new Date()).toDateString() + " " + Y), z = f.type == "time", J = f.type == "week";
      Gt(ce.value) && N && ($ = z ? le(N) > le(ce.value) : J ? N > ce.value : oe > new Date(ce.value)), Gt(Se.value) && N && (te = z ? le(N) < le(Se.value) : J ? N < Se.value : oe < new Date(Se.value));
    }
    if (($ || te) && (Ee(!!$, ce.message, Se.message, Bn.max, Bn.min), !i))
      return L(B[w].message), B;
  }
  if ((g || v) && !_e && (Gt(N) || u && Array.isArray(N))) {
    const $ = Ro(g), te = Ro(v), ce = !Vt($.value) && N.length > +$.value, Se = !Vt(te.value) && N.length < +te.value;
    if ((ce || Se) && (Ee(ce, $.message, te.message), !i))
      return L(B[w].message), B;
  }
  if (E && !_e && Gt(N)) {
    const { value: $, message: te } = Ro(E);
    if (ml($) && !N.match($) && (B[w] = {
      type: Bn.pattern,
      message: te,
      ref: f,
      ...pe(Bn.pattern, te)
    }, !i))
      return L(te), B;
  }
  if (O) {
    if (Ot(O)) {
      const $ = await O(N, o), te = jp($, I);
      if (te && (B[w] = {
        ...te,
        ...pe(Bn.validate, te.message)
      }, !i))
        return L(te.message), B;
    } else if (ht(O)) {
      let $ = {};
      for (const te in O) {
        if (!At($) && !i)
          break;
        const ce = jp(await O[te](N, o), I, te);
        ce && ($ = {
          ...ce,
          ...pe(te, ce.message)
        }, L(ce.message), i && (B[w] = $));
      }
      if (!At($) && (B[w] = {
        ref: I,
        ...$
      }, !i))
        return B;
    }
  }
  return L(!0), B;
};
const ax = {
  mode: vn.onSubmit,
  reValidateMode: vn.onChange,
  shouldFocusError: !0
};
function ux(n = {}) {
  let r = {
    ...ax,
    ...n
  }, o = {
    submitCount: 0,
    isDirty: !1,
    isReady: !1,
    isLoading: Ot(r.defaultValues),
    isValidating: !1,
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    touchedFields: {},
    dirtyFields: {},
    validatingFields: {},
    errors: r.errors || {},
    disabled: r.disabled || !1
  }, i = {}, a = ht(r.defaultValues) || ht(r.values) ? dt(r.defaultValues || r.values) || {} : {}, u = r.shouldUnregister ? {} : dt(a), f = {
    action: !1,
    mount: !1,
    watch: !1,
    keepIsValid: !1
  }, p = {
    mount: /* @__PURE__ */ new Set(),
    disabled: /* @__PURE__ */ new Set(),
    unMount: /* @__PURE__ */ new Set(),
    array: /* @__PURE__ */ new Set(),
    watch: /* @__PURE__ */ new Set()
  }, m, g = 0;
  const v = {
    isDirty: !1,
    dirtyFields: !1,
    validatingFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }, x = {
    ...v
  };
  let C = {
    ...x
  };
  const E = {
    array: bp(),
    state: bp()
  }, O = r.criteriaMode === vn.all, w = (b) => (j) => {
    clearTimeout(g), g = setTimeout(b, j);
  }, y = async (b) => {
    if (!f.keepIsValid && !r.disabled && (x.isValid || C.isValid || b)) {
      let j;
      r.resolver ? (j = At((await ne()).errors), A()) : j = await pe(i, !0), j !== o.isValid && E.state.next({
        isValid: j
      });
    }
  }, A = (b, j) => {
    !r.disabled && (x.isValidating || x.validatingFields || C.isValidating || C.validatingFields) && ((b || Array.from(p.mount)).forEach((V) => {
      V && (j ? Ke(o.validatingFields, V, j) : ft(o.validatingFields, V));
    }), E.state.next({
      validatingFields: o.validatingFields,
      isValidating: !At(o.validatingFields)
    }));
  }, N = (b, j = [], V, ie, ee = !0, X = !0) => {
    if (ie && V && !r.disabled) {
      if (f.action = !0, X && Array.isArray(re(i, b))) {
        const we = V(re(i, b), ie.argA, ie.argB);
        ee && Ke(i, b, we);
      }
      if (X && Array.isArray(re(o.errors, b))) {
        const we = V(re(o.errors, b), ie.argA, ie.argB);
        ee && Ke(o.errors, b, we), ix(o.errors, b);
      }
      if ((x.touchedFields || C.touchedFields) && X && Array.isArray(re(o.touchedFields, b))) {
        const we = V(re(o.touchedFields, b), ie.argA, ie.argB);
        ee && Ke(o.touchedFields, b, we);
      }
      (x.dirtyFields || C.dirtyFields) && (o.dirtyFields = Oo(a, u)), E.state.next({
        name: b,
        isDirty: $(b, j),
        dirtyFields: o.dirtyFields,
        errors: o.errors,
        isValid: o.isValid
      });
    } else
      Ke(u, b, j);
  }, I = (b, j) => {
    Ke(o.errors, b, j), E.state.next({
      errors: o.errors
    });
  }, L = (b) => {
    o.errors = b, E.state.next({
      errors: o.errors,
      isValid: !1
    });
  }, B = (b, j, V, ie) => {
    const ee = re(i, b);
    if (ee) {
      const X = re(u, b, tt(V) ? re(a, b) : V);
      tt(X) || ie && ie.defaultChecked || j ? Ke(u, b, j ? X : Pp(ee._f)) : Se(b, X), f.mount && !f.action && y();
    }
  }, K = (b, j, V, ie, ee) => {
    let X = !1, we = !1;
    const Ve = {
      name: b
    };
    if (!r.disabled) {
      if (!V || ie) {
        (x.isDirty || C.isDirty) && (we = o.isDirty, o.isDirty = Ve.isDirty = $(), X = we !== Ve.isDirty);
        const $e = yn(re(a, b), j);
        we = !!re(o.dirtyFields, b), $e ? ft(o.dirtyFields, b) : Ke(o.dirtyFields, b, !0), Ve.dirtyFields = o.dirtyFields, X = X || (x.dirtyFields || C.dirtyFields) && we !== !$e;
      }
      if (V) {
        const $e = re(o.touchedFields, b);
        $e || (Ke(o.touchedFields, b, V), Ve.touchedFields = o.touchedFields, X = X || (x.touchedFields || C.touchedFields) && $e !== V);
      }
      X && ee && E.state.next(Ve);
    }
    return X ? Ve : {};
  }, H = (b, j, V, ie) => {
    const ee = re(o.errors, b), X = (x.isValid || C.isValid) && Ht(j) && o.isValid !== j;
    if (r.delayError && V ? (m = w(() => I(b, V)), m(r.delayError)) : (clearTimeout(g), m = null, V ? Ke(o.errors, b, V) : ft(o.errors, b)), (V ? !yn(ee, V) : ee) || !At(ie) || X) {
      const we = {
        ...ie,
        ...X && Ht(j) ? { isValid: j } : {},
        errors: o.errors,
        name: b
      };
      o = {
        ...o,
        ...we
      }, E.state.next(we);
    }
  }, ne = async (b) => (A(b, !0), await r.resolver(u, r.context, ex(b || p.mount, i, r.criteriaMode, r.shouldUseNativeValidation))), _e = async (b) => {
    const { errors: j } = await ne(b);
    if (A(b), b)
      for (const V of b) {
        const ie = re(j, V);
        ie ? Ke(o.errors, V, ie) : ft(o.errors, V);
      }
    else
      o.errors = j;
    return j;
  }, pe = async (b, j, V = {
    valid: !0
  }) => {
    for (const ie in b) {
      const ee = b[ie];
      if (ee) {
        const { _f: X, ...we } = ee;
        if (X) {
          const Ve = p.array.has(X.name), $e = ee._f && tx(ee._f);
          $e && x.validatingFields && A([X.name], !0);
          const lt = await Lp(ee, p.disabled, u, O, r.shouldUseNativeValidation && !j, Ve);
          if ($e && x.validatingFields && A([X.name]), lt[X.name] && (V.valid = !1, j || n.shouldUseNativeValidation))
            break;
          !j && (re(lt, X.name) ? Ve ? lx(o.errors, lt, X.name) : Ke(o.errors, X.name, lt[X.name]) : ft(o.errors, X.name));
        }
        !At(we) && await pe(we, j, V);
      }
    }
    return V.valid;
  }, Ee = () => {
    for (const b of p.unMount) {
      const j = re(i, b);
      j && (j._f.refs ? j._f.refs.every((V) => !Nu(V)) : !Nu(j._f.ref)) && xe(b);
    }
    p.unMount = /* @__PURE__ */ new Set();
  }, $ = (b, j) => !r.disabled && (b && j && Ke(u, b, j), !yn(P(), a)), te = (b, j, V) => Uu(b, p, {
    ...f.mount ? u : tt(j) ? a : Gt(b) ? { [b]: j } : j
  }, V, j), ce = (b) => cc(re(f.mount ? u : a, b, r.shouldUnregister ? re(a, b, []) : [])), Se = (b, j, V = {}) => {
    const ie = re(i, b);
    let ee = j;
    if (ie) {
      const X = ie._f;
      X && (!X.disabled && Ke(u, b, Wh(j, X)), ee = hl(X.ref) && Vt(j) ? "" : j, Bh(X.ref) ? [...X.ref.options].forEach((we) => we.selected = ee.includes(we.value)) : X.refs ? $s(X.ref) ? X.refs.forEach((we) => {
        (!we.defaultChecked || !we.disabled) && (Array.isArray(ee) ? we.checked = !!ee.find((Ve) => Ve === we.value) : we.checked = ee === we.value || !!ee);
      }) : X.refs.forEach((we) => we.checked = we.value === ee) : hc(X.ref) ? X.ref.value = "" : (X.ref.value = ee, X.ref.type || E.state.next({
        name: b,
        values: dt(u)
      })));
    }
    (V.shouldDirty || V.shouldTouch) && K(b, ee, V.shouldTouch, V.shouldDirty, !0), V.shouldValidate && Y(b);
  }, oe = (b, j, V) => {
    for (const ie in j) {
      if (!j.hasOwnProperty(ie))
        return;
      const ee = j[ie], X = b + "." + ie, we = re(i, X);
      (p.array.has(b) || ht(ee) || we && !we._f) && !Wr(ee) ? oe(X, ee, V) : Se(X, ee, V);
    }
  }, le = (b, j, V = {}) => {
    const ie = re(i, b), ee = p.array.has(b), X = dt(j);
    Ke(u, b, X), ee ? (E.array.next({
      name: b,
      values: dt(u)
    }), (x.isDirty || x.dirtyFields || C.isDirty || C.dirtyFields) && V.shouldDirty && E.state.next({
      name: b,
      dirtyFields: Oo(a, u),
      isDirty: $(b, X)
    })) : ie && !ie._f && !Vt(X) ? oe(b, X, V) : Se(b, X, V), Ip(b, p) ? E.state.next({
      ...o,
      name: b,
      values: dt(u)
    }) : E.state.next({
      name: f.mount ? b : void 0,
      values: dt(u)
    });
  }, z = async (b) => {
    f.mount = !0;
    const j = b.target;
    let V = j.name, ie = !0;
    const ee = re(i, V), X = ($e) => {
      ie = Number.isNaN($e) || Wr($e) && isNaN($e.getTime()) || yn($e, re(u, V, $e));
    }, we = Ap(r.mode), Ve = Ap(r.reValidateMode);
    if (ee) {
      let $e, lt;
      const zt = j.type ? Pp(ee._f) : jh(b), _n = b.type === pl.BLUR || b.type === pl.FOCUS_OUT, Ks = !nx(ee._f) && !r.resolver && !re(o.errors, V) && !ee._f.deps || sx(_n, re(o.touchedFields, V), o.isSubmitted, Ve, we), Jr = Ip(V, p, _n);
      Ke(u, V, zt), _n ? (!j || !j.readOnly) && (ee._f.onBlur && ee._f.onBlur(b), m && m(0)) : ee._f.onChange && ee._f.onChange(b);
      const Go = K(V, zt, _n), Ko = !At(Go) || Jr;
      if (!_n && E.state.next({
        name: V,
        type: b.type,
        values: dt(u)
      }), Ks)
        return (x.isValid || C.isValid) && (r.mode === "onBlur" ? _n && y() : _n || y()), Ko && E.state.next({ name: V, ...Jr ? {} : Go });
      if (!_n && Jr && E.state.next({ ...o }), r.resolver) {
        const { errors: eo } = await ne([V]);
        if (A([V]), X(zt), ie) {
          const Qo = Mp(o.errors, i, V), to = Mp(eo, i, Qo.name || V);
          $e = to.error, V = to.name, lt = At(eo);
        }
      } else
        A([V], !0), $e = (await Lp(ee, p.disabled, u, O, r.shouldUseNativeValidation))[V], A([V]), X(zt), ie && ($e ? lt = !1 : (x.isValid || C.isValid) && (lt = await pe(i, !0)));
      ie && (ee._f.deps && (!Array.isArray(ee._f.deps) || ee._f.deps.length > 0) && Y(ee._f.deps), H(V, lt, $e, Go));
    }
  }, J = (b, j) => {
    if (re(o.errors, j) && b.focus)
      return b.focus(), 1;
  }, Y = async (b, j = {}) => {
    let V, ie;
    const ee = Vs(b);
    if (r.resolver) {
      const X = await _e(tt(b) ? b : ee);
      V = At(X), ie = b ? !ee.some((we) => re(X, we)) : V;
    } else b ? (ie = (await Promise.all(ee.map(async (X) => {
      const we = re(i, X);
      return await pe(we && we._f ? { [X]: we } : we);
    }))).every(Boolean), !(!ie && !o.isValid) && y()) : ie = V = await pe(i);
    return E.state.next({
      ...!Gt(b) || (x.isValid || C.isValid) && V !== o.isValid ? {} : { name: b },
      ...r.resolver || !b ? { isValid: V } : {},
      errors: o.errors
    }), j.shouldFocus && !ie && zs(i, J, b ? ee : p.mount), ie;
  }, P = (b, j) => {
    let V = {
      ...f.mount ? u : a
    };
    return j && (V = zh(j.dirtyFields ? o.dirtyFields : o.touchedFields, V)), tt(b) ? V : Gt(b) ? re(V, b) : b.map((ie) => re(V, ie));
  }, U = (b, j) => ({
    invalid: !!re((j || o).errors, b),
    isDirty: !!re((j || o).dirtyFields, b),
    error: re((j || o).errors, b),
    isValidating: !!re(o.validatingFields, b),
    isTouched: !!re((j || o).touchedFields, b)
  }), Re = (b) => {
    const j = b ? Vs(b) : void 0;
    j == null || j.forEach((V) => ft(o.errors, V)), j ? j.forEach((V) => {
      E.state.next({
        name: V,
        errors: o.errors
      });
    }) : E.state.next({
      errors: {}
    });
  }, be = (b, j, V) => {
    const ie = (re(i, b, { _f: {} })._f || {}).ref, ee = re(o.errors, b) || {}, { ref: X, message: we, type: Ve, ...$e } = ee;
    Ke(o.errors, b, {
      ...$e,
      ...j,
      ref: ie
    }), E.state.next({
      name: b,
      errors: o.errors,
      isValid: !1
    }), V && V.shouldFocus && ie && ie.focus && ie.focus();
  }, Me = (b, j) => Ot(b) ? E.state.subscribe({
    next: (V) => "values" in V && b(te(void 0, j), V)
  }) : te(b, j, !0), Ie = (b) => E.state.subscribe({
    next: (j) => {
      ox(b.name, j.name, b.exact) && rx(j, b.formState || x, qr, b.reRenderRoot) && b.callback({
        values: { ...u },
        ...o,
        ...j,
        defaultValues: a
      });
    }
  }).unsubscribe, se = (b) => (f.mount = !0, C = {
    ...C,
    ...b.formState
  }, Ie({
    ...b,
    formState: {
      ...v,
      ...b.formState
    }
  })), xe = (b, j = {}) => {
    for (const V of b ? Vs(b) : p.mount)
      p.mount.delete(V), p.array.delete(V), j.keepValue || (ft(i, V), ft(u, V)), !j.keepError && ft(o.errors, V), !j.keepDirty && ft(o.dirtyFields, V), !j.keepTouched && ft(o.touchedFields, V), !j.keepIsValidating && ft(o.validatingFields, V), !r.shouldUnregister && !j.keepDefaultValue && ft(a, V);
    E.state.next({
      values: dt(u)
    }), E.state.next({
      ...o,
      ...j.keepDirty ? { isDirty: $() } : {}
    }), !j.keepIsValid && y();
  }, Te = ({ disabled: b, name: j }) => {
    if (Ht(b) && f.mount || b || p.disabled.has(j)) {
      const ee = p.disabled.has(j) !== !!b;
      b ? p.disabled.add(j) : p.disabled.delete(j), ee && f.mount && !f.action && y();
    }
  }, Pe = (b, j = {}) => {
    let V = re(i, b);
    const ie = Ht(j.disabled) || Ht(r.disabled);
    return Ke(i, b, {
      ...V || {},
      _f: {
        ...V && V._f ? V._f : { ref: { name: b } },
        name: b,
        mount: !0,
        ...j
      }
    }), p.mount.add(b), V ? Te({
      disabled: Ht(j.disabled) ? j.disabled : r.disabled,
      name: b
    }) : B(b, !0, j.value), {
      ...ie ? { disabled: j.disabled || r.disabled } : {},
      ...r.progressive ? {
        required: !!j.required,
        min: Is(j.min),
        max: Is(j.max),
        minLength: Is(j.minLength),
        maxLength: Is(j.maxLength),
        pattern: Is(j.pattern)
      } : {},
      name: b,
      onChange: z,
      onBlur: z,
      ref: (ee) => {
        if (ee) {
          Pe(b, j), V = re(i, b);
          const X = tt(ee.value) && ee.querySelectorAll && ee.querySelectorAll("input,select,textarea")[0] || ee, we = Yy(X), Ve = V._f.refs || [];
          if (we ? Ve.find(($e) => $e === X) : X === V._f.ref)
            return;
          Ke(i, b, {
            _f: {
              ...V._f,
              ...we ? {
                refs: [
                  ...Ve.filter(Nu),
                  X,
                  ...Array.isArray(re(a, b)) ? [{}] : []
                ],
                ref: { type: X.type, name: b }
              } : { ref: X }
            }
          }), B(b, !1, void 0, X);
        } else
          V = re(i, b, {}), V._f && (V._f.mount = !1), (r.shouldUnregister || j.shouldUnregister) && !(Lh(p.array, b) && f.action) && p.unMount.add(b);
      }
    };
  }, Fe = () => r.shouldFocusError && zs(i, J, p.mount), ze = (b) => {
    Ht(b) && (E.state.next({ disabled: b }), zs(i, (j, V) => {
      const ie = re(i, V);
      ie && (j.disabled = ie._f.disabled || b, Array.isArray(ie._f.refs) && ie._f.refs.forEach((ee) => {
        ee.disabled = ie._f.disabled || b;
      }));
    }, 0, !1));
  }, it = (b, j) => async (V) => {
    let ie;
    V && (V.preventDefault && V.preventDefault(), V.persist && V.persist());
    let ee = dt(u);
    if (E.state.next({
      isSubmitting: !0
    }), r.resolver) {
      const { errors: X, values: we } = await ne();
      A(), o.errors = X, ee = dt(we);
    } else
      await pe(i);
    if (p.disabled.size)
      for (const X of p.disabled)
        ft(ee, X);
    if (ft(o.errors, "root"), At(o.errors)) {
      E.state.next({
        errors: {}
      });
      try {
        await b(ee, V);
      } catch (X) {
        ie = X;
      }
    } else
      j && await j({ ...o.errors }, V), Fe(), setTimeout(Fe);
    if (E.state.next({
      isSubmitted: !0,
      isSubmitting: !1,
      isSubmitSuccessful: At(o.errors) && !ie,
      submitCount: o.submitCount + 1,
      errors: o.errors
    }), ie)
      throw ie;
  }, Ct = (b, j = {}) => {
    re(i, b) && (tt(j.defaultValue) ? le(b, dt(re(a, b))) : (le(b, j.defaultValue), Ke(a, b, dt(j.defaultValue))), j.keepTouched || ft(o.touchedFields, b), j.keepDirty || (ft(o.dirtyFields, b), o.isDirty = j.defaultValue ? $(b, dt(re(a, b))) : $()), j.keepError || (ft(o.errors, b), x.isValid && y()), E.state.next({ ...o }));
  }, on = (b, j = {}) => {
    const V = b ? dt(b) : a, ie = dt(V), ee = At(b), X = ee ? a : ie;
    if (j.keepDefaultValues || (a = V), !j.keepValues) {
      if (j.keepDirtyValues) {
        const we = /* @__PURE__ */ new Set([
          ...p.mount,
          ...Object.keys(Oo(a, u))
        ]);
        for (const Ve of Array.from(we)) {
          const $e = re(o.dirtyFields, Ve), lt = re(u, Ve), zt = re(X, Ve);
          $e && !tt(lt) ? Ke(X, Ve, lt) : !$e && !tt(zt) && le(Ve, zt);
        }
      } else {
        if (uc && tt(b))
          for (const we of p.mount) {
            const Ve = re(i, we);
            if (Ve && Ve._f) {
              const $e = Array.isArray(Ve._f.refs) ? Ve._f.refs[0] : Ve._f.ref;
              if (hl($e)) {
                const lt = $e.closest("form");
                if (lt) {
                  lt.reset();
                  break;
                }
              }
            }
          }
        if (j.keepFieldsRef)
          for (const we of p.mount)
            le(we, re(X, we));
        else
          i = {};
      }
      u = r.shouldUnregister ? j.keepDefaultValues ? dt(a) : {} : dt(X), E.array.next({
        values: { ...X }
      }), E.state.next({
        values: { ...X }
      });
    }
    p = {
      mount: j.keepDirtyValues ? p.mount : /* @__PURE__ */ new Set(),
      unMount: /* @__PURE__ */ new Set(),
      array: /* @__PURE__ */ new Set(),
      disabled: /* @__PURE__ */ new Set(),
      watch: /* @__PURE__ */ new Set(),
      watchAll: !1,
      focus: ""
    }, f.mount = !x.isValid || !!j.keepIsValid || !!j.keepDirtyValues || !r.shouldUnregister && !At(X), f.watch = !!r.shouldUnregister, f.keepIsValid = !!j.keepIsValid, f.action = !1, j.keepErrors || (o.errors = {}), E.state.next({
      submitCount: j.keepSubmitCount ? o.submitCount : 0,
      isDirty: ee ? !1 : j.keepDirty ? o.isDirty : !!(j.keepDefaultValues && !yn(b, a)),
      isSubmitted: j.keepIsSubmitted ? o.isSubmitted : !1,
      dirtyFields: ee ? {} : j.keepDirtyValues ? j.keepDefaultValues && u ? Oo(a, u) : o.dirtyFields : j.keepDefaultValues && b ? Oo(a, b) : j.keepDirty ? o.dirtyFields : {},
      touchedFields: j.keepTouched ? o.touchedFields : {},
      errors: j.keepErrors ? o.errors : {},
      isSubmitSuccessful: j.keepIsSubmitSuccessful ? o.isSubmitSuccessful : !1,
      isSubmitting: !1,
      defaultValues: a
    });
  }, sn = (b, j) => on(Ot(b) ? b(u) : b, { ...r.resetOptions, ...j }), ln = (b, j = {}) => {
    const V = re(i, b), ie = V && V._f;
    if (ie) {
      const ee = ie.refs ? ie.refs[0] : ie.ref;
      ee.focus && setTimeout(() => {
        ee.focus(), j.shouldSelect && Ot(ee.select) && ee.select();
      });
    }
  }, qr = (b) => {
    o = {
      ...o,
      ...b
    };
  }, Qn = {
    control: {
      register: Pe,
      unregister: xe,
      getFieldState: U,
      handleSubmit: it,
      setError: be,
      _subscribe: Ie,
      _runSchema: ne,
      _updateIsValidating: A,
      _focusError: Fe,
      _getWatch: te,
      _getDirty: $,
      _setValid: y,
      _setFieldArray: N,
      _setDisabledField: Te,
      _setErrors: L,
      _getFieldArray: ce,
      _reset: on,
      _resetDefaultValues: () => Ot(r.defaultValues) && r.defaultValues().then((b) => {
        sn(b, r.resetOptions), E.state.next({
          isLoading: !1
        });
      }),
      _removeUnmounted: Ee,
      _disableForm: ze,
      _subjects: E,
      _proxyFormState: x,
      get _fields() {
        return i;
      },
      get _formValues() {
        return u;
      },
      get _state() {
        return f;
      },
      set _state(b) {
        f = b;
      },
      get _defaultValues() {
        return a;
      },
      get _names() {
        return p;
      },
      set _names(b) {
        p = b;
      },
      get _formState() {
        return o;
      },
      get _options() {
        return r;
      },
      set _options(b) {
        r = {
          ...r,
          ...b
        };
      }
    },
    subscribe: se,
    trigger: Y,
    register: Pe,
    handleSubmit: it,
    watch: Me,
    setValue: le,
    getValues: P,
    reset: sn,
    resetField: Ct,
    clearErrors: Re,
    unregister: xe,
    setError: be,
    setFocus: ln,
    getFieldState: U
  };
  return {
    ...Qn,
    formControl: Qn
  };
}
function cx(n = {}) {
  const r = ge.useRef(void 0), o = ge.useRef(void 0), [i, a] = ge.useState({
    isDirty: !1,
    isValidating: !1,
    isLoading: Ot(n.defaultValues),
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    submitCount: 0,
    dirtyFields: {},
    touchedFields: {},
    validatingFields: {},
    errors: n.errors || {},
    disabled: n.disabled || !1,
    isReady: !1,
    defaultValues: Ot(n.defaultValues) ? void 0 : n.defaultValues
  });
  if (!r.current)
    if (n.formControl)
      r.current = {
        ...n.formControl,
        formState: i
      }, n.defaultValues && !Ot(n.defaultValues) && n.formControl.reset(n.defaultValues, n.resetOptions);
    else {
      const { formControl: f, ...p } = ux(n);
      r.current = {
        ...p,
        formState: i
      };
    }
  const u = r.current.control;
  return u._options = n, pc(() => {
    const f = u._subscribe({
      formState: u._proxyFormState,
      callback: () => a({ ...u._formState }),
      reRenderRoot: !0
    });
    return a((p) => ({
      ...p,
      isReady: !0
    })), u._formState.isReady = !0, f;
  }, [u]), ge.useEffect(() => u._disableForm(n.disabled), [u, n.disabled]), ge.useEffect(() => {
    n.mode && (u._options.mode = n.mode), n.reValidateMode && (u._options.reValidateMode = n.reValidateMode);
  }, [u, n.mode, n.reValidateMode]), ge.useEffect(() => {
    n.errors && (u._setErrors(n.errors), u._focusError());
  }, [u, n.errors]), ge.useEffect(() => {
    n.shouldUnregister && u._subjects.state.next({
      values: u._getWatch()
    });
  }, [u, n.shouldUnregister]), ge.useEffect(() => {
    if (u._proxyFormState.isDirty) {
      const f = u._getDirty();
      f !== i.isDirty && u._subjects.state.next({
        isDirty: f
      });
    }
  }, [u, i.isDirty]), ge.useEffect(() => {
    var f;
    n.values && !yn(n.values, o.current) ? (u._reset(n.values, {
      keepFieldsRef: !0,
      ...u._options.resetOptions
    }), !((f = u._options.resetOptions) === null || f === void 0) && f.keepIsValid || u._setValid(), o.current = n.values, a((p) => ({ ...p }))) : u._resetDefaultValues();
  }, [u, n.values]), ge.useEffect(() => {
    u._state.mount || (u._setValid(), u._state.mount = !0), u._state.watch && (u._state.watch = !1, u._subjects.state.next({ ...u._formState })), u._removeUnmounted();
  }), r.current.formState = ge.useMemo(() => Fh(i, u), [u, i]), r.current;
}
const Dp = (n, r, o) => {
  if (n && "reportValidity" in n) {
    const i = re(o, r);
    n.setCustomValidity(i && i.message || ""), n.reportValidity();
  }
}, Zh = (n, r) => {
  for (const o in r.fields) {
    const i = r.fields[o];
    i && i.ref && "reportValidity" in i.ref ? Dp(i.ref, o, n) : i.refs && i.refs.forEach((a) => Dp(a, o, n));
  }
}, dx = (n, r) => {
  r.shouldUseNativeValidation && Zh(n, r);
  const o = {};
  for (const i in n) {
    const a = re(r.fields, i), u = Object.assign(n[i] || {}, { ref: a && a.ref });
    if (fx(r.names || Object.keys(n), i)) {
      const f = Object.assign({}, re(o, i));
      Ke(f, "root", u), Ke(o, i, f);
    } else Ke(o, i, u);
  }
  return o;
}, fx = (n, r) => n.some((o) => o.startsWith(r + "."));
var px = function(n, r) {
  for (var o = {}; n.length; ) {
    var i = n[0], a = i.code, u = i.message, f = i.path.join(".");
    if (!o[f]) if ("unionErrors" in i) {
      var p = i.unionErrors[0].errors[0];
      o[f] = { message: p.message, type: p.code };
    } else o[f] = { message: u, type: a };
    if ("unionErrors" in i && i.unionErrors.forEach(function(v) {
      return v.errors.forEach(function(x) {
        return n.push(x);
      });
    }), r) {
      var m = o[f].types, g = m && m[i.code];
      o[f] = Vh(f, r, o, a, g ? [].concat(g, i.message) : i.message);
    }
    n.shift();
  }
  return o;
}, hx = function(n, r, o) {
  return o === void 0 && (o = {}), function(i, a, u) {
    try {
      return Promise.resolve((function(f, p) {
        try {
          var m = Promise.resolve(n[o.mode === "sync" ? "parse" : "parseAsync"](i, r)).then(function(g) {
            return u.shouldUseNativeValidation && Zh({}, u), { errors: {}, values: o.raw ? i : g };
          });
        } catch (g) {
          return p(g);
        }
        return m && m.then ? m.then(void 0, p) : m;
      })(0, function(f) {
        if ((function(p) {
          return Array.isArray(p == null ? void 0 : p.errors);
        })(f)) return { values: {}, errors: dx(px(f.errors, !u.shouldUseNativeValidation && u.criteriaMode === "all"), u) };
        throw f;
      }));
    } catch (f) {
      return Promise.reject(f);
    }
  };
}, He;
(function(n) {
  n.assertEqual = (a) => {
  };
  function r(a) {
  }
  n.assertIs = r;
  function o(a) {
    throw new Error();
  }
  n.assertNever = o, n.arrayToEnum = (a) => {
    const u = {};
    for (const f of a)
      u[f] = f;
    return u;
  }, n.getValidEnumValues = (a) => {
    const u = n.objectKeys(a).filter((p) => typeof a[a[p]] != "number"), f = {};
    for (const p of u)
      f[p] = a[p];
    return n.objectValues(f);
  }, n.objectValues = (a) => n.objectKeys(a).map(function(u) {
    return a[u];
  }), n.objectKeys = typeof Object.keys == "function" ? (a) => Object.keys(a) : (a) => {
    const u = [];
    for (const f in a)
      Object.prototype.hasOwnProperty.call(a, f) && u.push(f);
    return u;
  }, n.find = (a, u) => {
    for (const f of a)
      if (u(f))
        return f;
  }, n.isInteger = typeof Number.isInteger == "function" ? (a) => Number.isInteger(a) : (a) => typeof a == "number" && Number.isFinite(a) && Math.floor(a) === a;
  function i(a, u = " | ") {
    return a.map((f) => typeof f == "string" ? `'${f}'` : f).join(u);
  }
  n.joinValues = i, n.jsonStringifyReplacer = (a, u) => typeof u == "bigint" ? u.toString() : u;
})(He || (He = {}));
var Fp;
(function(n) {
  n.mergeShapes = (r, o) => ({
    ...r,
    ...o
    // second overwrites first
  });
})(Fp || (Fp = {}));
const me = He.arrayToEnum([
  "string",
  "nan",
  "number",
  "integer",
  "float",
  "boolean",
  "date",
  "bigint",
  "symbol",
  "function",
  "undefined",
  "null",
  "array",
  "object",
  "unknown",
  "promise",
  "void",
  "never",
  "map",
  "set"
]), xr = (n) => {
  switch (typeof n) {
    case "undefined":
      return me.undefined;
    case "string":
      return me.string;
    case "number":
      return Number.isNaN(n) ? me.nan : me.number;
    case "boolean":
      return me.boolean;
    case "function":
      return me.function;
    case "bigint":
      return me.bigint;
    case "symbol":
      return me.symbol;
    case "object":
      return Array.isArray(n) ? me.array : n === null ? me.null : n.then && typeof n.then == "function" && n.catch && typeof n.catch == "function" ? me.promise : typeof Map < "u" && n instanceof Map ? me.map : typeof Set < "u" && n instanceof Set ? me.set : typeof Date < "u" && n instanceof Date ? me.date : me.object;
    default:
      return me.unknown;
  }
}, Q = He.arrayToEnum([
  "invalid_type",
  "invalid_literal",
  "custom",
  "invalid_union",
  "invalid_union_discriminator",
  "invalid_enum_value",
  "unrecognized_keys",
  "invalid_arguments",
  "invalid_return_type",
  "invalid_date",
  "invalid_string",
  "too_small",
  "too_big",
  "invalid_intersection_types",
  "not_multiple_of",
  "not_finite"
]);
class Hn extends Error {
  get errors() {
    return this.issues;
  }
  constructor(r) {
    super(), this.issues = [], this.addIssue = (i) => {
      this.issues = [...this.issues, i];
    }, this.addIssues = (i = []) => {
      this.issues = [...this.issues, ...i];
    };
    const o = new.target.prototype;
    Object.setPrototypeOf ? Object.setPrototypeOf(this, o) : this.__proto__ = o, this.name = "ZodError", this.issues = r;
  }
  format(r) {
    const o = r || function(u) {
      return u.message;
    }, i = { _errors: [] }, a = (u) => {
      for (const f of u.issues)
        if (f.code === "invalid_union")
          f.unionErrors.map(a);
        else if (f.code === "invalid_return_type")
          a(f.returnTypeError);
        else if (f.code === "invalid_arguments")
          a(f.argumentsError);
        else if (f.path.length === 0)
          i._errors.push(o(f));
        else {
          let p = i, m = 0;
          for (; m < f.path.length; ) {
            const g = f.path[m];
            m === f.path.length - 1 ? (p[g] = p[g] || { _errors: [] }, p[g]._errors.push(o(f))) : p[g] = p[g] || { _errors: [] }, p = p[g], m++;
          }
        }
    };
    return a(this), i;
  }
  static assert(r) {
    if (!(r instanceof Hn))
      throw new Error(`Not a ZodError: ${r}`);
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, He.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(r = (o) => o.message) {
    const o = {}, i = [];
    for (const a of this.issues)
      if (a.path.length > 0) {
        const u = a.path[0];
        o[u] = o[u] || [], o[u].push(r(a));
      } else
        i.push(r(a));
    return { formErrors: i, fieldErrors: o };
  }
  get formErrors() {
    return this.flatten();
  }
}
Hn.create = (n) => new Hn(n);
const Hu = (n, r) => {
  let o;
  switch (n.code) {
    case Q.invalid_type:
      n.received === me.undefined ? o = "Required" : o = `Expected ${n.expected}, received ${n.received}`;
      break;
    case Q.invalid_literal:
      o = `Invalid literal value, expected ${JSON.stringify(n.expected, He.jsonStringifyReplacer)}`;
      break;
    case Q.unrecognized_keys:
      o = `Unrecognized key(s) in object: ${He.joinValues(n.keys, ", ")}`;
      break;
    case Q.invalid_union:
      o = "Invalid input";
      break;
    case Q.invalid_union_discriminator:
      o = `Invalid discriminator value. Expected ${He.joinValues(n.options)}`;
      break;
    case Q.invalid_enum_value:
      o = `Invalid enum value. Expected ${He.joinValues(n.options)}, received '${n.received}'`;
      break;
    case Q.invalid_arguments:
      o = "Invalid function arguments";
      break;
    case Q.invalid_return_type:
      o = "Invalid function return type";
      break;
    case Q.invalid_date:
      o = "Invalid date";
      break;
    case Q.invalid_string:
      typeof n.validation == "object" ? "includes" in n.validation ? (o = `Invalid input: must include "${n.validation.includes}"`, typeof n.validation.position == "number" && (o = `${o} at one or more positions greater than or equal to ${n.validation.position}`)) : "startsWith" in n.validation ? o = `Invalid input: must start with "${n.validation.startsWith}"` : "endsWith" in n.validation ? o = `Invalid input: must end with "${n.validation.endsWith}"` : He.assertNever(n.validation) : n.validation !== "regex" ? o = `Invalid ${n.validation}` : o = "Invalid";
      break;
    case Q.too_small:
      n.type === "array" ? o = `Array must contain ${n.exact ? "exactly" : n.inclusive ? "at least" : "more than"} ${n.minimum} element(s)` : n.type === "string" ? o = `String must contain ${n.exact ? "exactly" : n.inclusive ? "at least" : "over"} ${n.minimum} character(s)` : n.type === "number" ? o = `Number must be ${n.exact ? "exactly equal to " : n.inclusive ? "greater than or equal to " : "greater than "}${n.minimum}` : n.type === "bigint" ? o = `Number must be ${n.exact ? "exactly equal to " : n.inclusive ? "greater than or equal to " : "greater than "}${n.minimum}` : n.type === "date" ? o = `Date must be ${n.exact ? "exactly equal to " : n.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(n.minimum))}` : o = "Invalid input";
      break;
    case Q.too_big:
      n.type === "array" ? o = `Array must contain ${n.exact ? "exactly" : n.inclusive ? "at most" : "less than"} ${n.maximum} element(s)` : n.type === "string" ? o = `String must contain ${n.exact ? "exactly" : n.inclusive ? "at most" : "under"} ${n.maximum} character(s)` : n.type === "number" ? o = `Number must be ${n.exact ? "exactly" : n.inclusive ? "less than or equal to" : "less than"} ${n.maximum}` : n.type === "bigint" ? o = `BigInt must be ${n.exact ? "exactly" : n.inclusive ? "less than or equal to" : "less than"} ${n.maximum}` : n.type === "date" ? o = `Date must be ${n.exact ? "exactly" : n.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(n.maximum))}` : o = "Invalid input";
      break;
    case Q.custom:
      o = "Invalid input";
      break;
    case Q.invalid_intersection_types:
      o = "Intersection results could not be merged";
      break;
    case Q.not_multiple_of:
      o = `Number must be a multiple of ${n.multipleOf}`;
      break;
    case Q.not_finite:
      o = "Number must be finite";
      break;
    default:
      o = r.defaultError, He.assertNever(n);
  }
  return { message: o };
};
let mx = Hu;
function gx() {
  return mx;
}
const vx = (n) => {
  const { data: r, path: o, errorMaps: i, issueData: a } = n, u = [...o, ...a.path || []], f = {
    ...a,
    path: u
  };
  if (a.message !== void 0)
    return {
      ...a,
      path: u,
      message: a.message
    };
  let p = "";
  const m = i.filter((g) => !!g).slice().reverse();
  for (const g of m)
    p = g(f, { data: r, defaultError: p }).message;
  return {
    ...a,
    path: u,
    message: p
  };
};
function ue(n, r) {
  const o = gx(), i = vx({
    issueData: r,
    data: n.data,
    path: n.path,
    errorMaps: [
      n.common.contextualErrorMap,
      // contextual error map is first priority
      n.schemaErrorMap,
      // then schema-bound map if available
      o,
      // then global override map
      o === Hu ? void 0 : Hu
      // then global default map
    ].filter((a) => !!a)
  });
  n.common.issues.push(i);
}
class Qt {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    this.value === "valid" && (this.value = "dirty");
  }
  abort() {
    this.value !== "aborted" && (this.value = "aborted");
  }
  static mergeArray(r, o) {
    const i = [];
    for (const a of o) {
      if (a.status === "aborted")
        return Ae;
      a.status === "dirty" && r.dirty(), i.push(a.value);
    }
    return { status: r.value, value: i };
  }
  static async mergeObjectAsync(r, o) {
    const i = [];
    for (const a of o) {
      const u = await a.key, f = await a.value;
      i.push({
        key: u,
        value: f
      });
    }
    return Qt.mergeObjectSync(r, i);
  }
  static mergeObjectSync(r, o) {
    const i = {};
    for (const a of o) {
      const { key: u, value: f } = a;
      if (u.status === "aborted" || f.status === "aborted")
        return Ae;
      u.status === "dirty" && r.dirty(), f.status === "dirty" && r.dirty(), u.value !== "__proto__" && (typeof f.value < "u" || a.alwaysSet) && (i[u.value] = f.value);
    }
    return { status: r.value, value: i };
  }
}
const Ae = Object.freeze({
  status: "aborted"
}), Ls = (n) => ({ status: "dirty", value: n }), rn = (n) => ({ status: "valid", value: n }), Vp = (n) => n.status === "aborted", zp = (n) => n.status === "dirty", Do = (n) => n.status === "valid", gl = (n) => typeof Promise < "u" && n instanceof Promise;
var ye;
(function(n) {
  n.errToObj = (r) => typeof r == "string" ? { message: r } : r || {}, n.toString = (r) => typeof r == "string" ? r : r == null ? void 0 : r.message;
})(ye || (ye = {}));
class _r {
  constructor(r, o, i, a) {
    this._cachedPath = [], this.parent = r, this.data = o, this._path = i, this._key = a;
  }
  get path() {
    return this._cachedPath.length || (Array.isArray(this._key) ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const Bp = (n, r) => {
  if (Do(r))
    return { success: !0, data: r.value };
  if (!n.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error)
        return this._error;
      const o = new Hn(n.common.issues);
      return this._error = o, this._error;
    }
  };
};
function De(n) {
  if (!n)
    return {};
  const { errorMap: r, invalid_type_error: o, required_error: i, description: a } = n;
  if (r && (o || i))
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  return r ? { errorMap: r, description: a } : { errorMap: (f, p) => {
    const { message: m } = n;
    return f.code === "invalid_enum_value" ? { message: m ?? p.defaultError } : typeof p.data > "u" ? { message: m ?? i ?? p.defaultError } : f.code !== "invalid_type" ? { message: p.defaultError } : { message: m ?? o ?? p.defaultError };
  }, description: a };
}
class Ue {
  get description() {
    return this._def.description;
  }
  _getType(r) {
    return xr(r.data);
  }
  _getOrReturnCtx(r, o) {
    return o || {
      common: r.parent.common,
      data: r.data,
      parsedType: xr(r.data),
      schemaErrorMap: this._def.errorMap,
      path: r.path,
      parent: r.parent
    };
  }
  _processInputParams(r) {
    return {
      status: new Qt(),
      ctx: {
        common: r.parent.common,
        data: r.data,
        parsedType: xr(r.data),
        schemaErrorMap: this._def.errorMap,
        path: r.path,
        parent: r.parent
      }
    };
  }
  _parseSync(r) {
    const o = this._parse(r);
    if (gl(o))
      throw new Error("Synchronous parse encountered promise.");
    return o;
  }
  _parseAsync(r) {
    const o = this._parse(r);
    return Promise.resolve(o);
  }
  parse(r, o) {
    const i = this.safeParse(r, o);
    if (i.success)
      return i.data;
    throw i.error;
  }
  safeParse(r, o) {
    const i = {
      common: {
        issues: [],
        async: (o == null ? void 0 : o.async) ?? !1,
        contextualErrorMap: o == null ? void 0 : o.errorMap
      },
      path: (o == null ? void 0 : o.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: r,
      parsedType: xr(r)
    }, a = this._parseSync({ data: r, path: i.path, parent: i });
    return Bp(i, a);
  }
  "~validate"(r) {
    var i, a;
    const o = {
      common: {
        issues: [],
        async: !!this["~standard"].async
      },
      path: [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: r,
      parsedType: xr(r)
    };
    if (!this["~standard"].async)
      try {
        const u = this._parseSync({ data: r, path: [], parent: o });
        return Do(u) ? {
          value: u.value
        } : {
          issues: o.common.issues
        };
      } catch (u) {
        (a = (i = u == null ? void 0 : u.message) == null ? void 0 : i.toLowerCase()) != null && a.includes("encountered") && (this["~standard"].async = !0), o.common = {
          issues: [],
          async: !0
        };
      }
    return this._parseAsync({ data: r, path: [], parent: o }).then((u) => Do(u) ? {
      value: u.value
    } : {
      issues: o.common.issues
    });
  }
  async parseAsync(r, o) {
    const i = await this.safeParseAsync(r, o);
    if (i.success)
      return i.data;
    throw i.error;
  }
  async safeParseAsync(r, o) {
    const i = {
      common: {
        issues: [],
        contextualErrorMap: o == null ? void 0 : o.errorMap,
        async: !0
      },
      path: (o == null ? void 0 : o.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: r,
      parsedType: xr(r)
    }, a = this._parse({ data: r, path: i.path, parent: i }), u = await (gl(a) ? a : Promise.resolve(a));
    return Bp(i, u);
  }
  refine(r, o) {
    const i = (a) => typeof o == "string" || typeof o > "u" ? { message: o } : typeof o == "function" ? o(a) : o;
    return this._refinement((a, u) => {
      const f = r(a), p = () => u.addIssue({
        code: Q.custom,
        ...i(a)
      });
      return typeof Promise < "u" && f instanceof Promise ? f.then((m) => m ? !0 : (p(), !1)) : f ? !0 : (p(), !1);
    });
  }
  refinement(r, o) {
    return this._refinement((i, a) => r(i) ? !0 : (a.addIssue(typeof o == "function" ? o(i, a) : o), !1));
  }
  _refinement(r) {
    return new zo({
      schema: this,
      typeName: Oe.ZodEffects,
      effect: { type: "refinement", refinement: r }
    });
  }
  superRefine(r) {
    return this._refinement(r);
  }
  constructor(r) {
    this.spa = this.safeParseAsync, this._def = r, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this), this["~standard"] = {
      version: 1,
      vendor: "zod",
      validate: (o) => this["~validate"](o)
    };
  }
  optional() {
    return wr.create(this, this._def);
  }
  nullable() {
    return Bo.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return Tn.create(this);
  }
  promise() {
    return wl.create(this, this._def);
  }
  or(r) {
    return yl.create([this, r], this._def);
  }
  and(r) {
    return xl.create(this, r, this._def);
  }
  transform(r) {
    return new zo({
      ...De(this._def),
      schema: this,
      typeName: Oe.ZodEffects,
      effect: { type: "transform", transform: r }
    });
  }
  default(r) {
    const o = typeof r == "function" ? r : () => r;
    return new Gu({
      ...De(this._def),
      innerType: this,
      defaultValue: o,
      typeName: Oe.ZodDefault
    });
  }
  brand() {
    return new zx({
      typeName: Oe.ZodBranded,
      type: this,
      ...De(this._def)
    });
  }
  catch(r) {
    const o = typeof r == "function" ? r : () => r;
    return new Ku({
      ...De(this._def),
      innerType: this,
      catchValue: o,
      typeName: Oe.ZodCatch
    });
  }
  describe(r) {
    const o = this.constructor;
    return new o({
      ...this._def,
      description: r
    });
  }
  pipe(r) {
    return gc.create(this, r);
  }
  readonly() {
    return Qu.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const yx = /^c[^\s-]{8,}$/i, xx = /^[0-9a-z]+$/, wx = /^[0-9A-HJKMNP-TV-Z]{26}$/i, _x = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, Sx = /^[a-z0-9_-]{21}$/i, kx = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/, Cx = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, Ex = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, bx = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let Tu;
const Rx = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, Nx = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/, Tx = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/, Px = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, Ax = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, Ox = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/, Gh = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))", Ix = new RegExp(`^${Gh}$`);
function Kh(n) {
  let r = "[0-5]\\d";
  n.precision ? r = `${r}\\.\\d{${n.precision}}` : n.precision == null && (r = `${r}(\\.\\d+)?`);
  const o = n.precision ? "+" : "?";
  return `([01]\\d|2[0-3]):[0-5]\\d(:${r})${o}`;
}
function Mx(n) {
  return new RegExp(`^${Kh(n)}$`);
}
function jx(n) {
  let r = `${Gh}T${Kh(n)}`;
  const o = [];
  return o.push(n.local ? "Z?" : "Z"), n.offset && o.push("([+-]\\d{2}:?\\d{2})"), r = `${r}(${o.join("|")})`, new RegExp(`^${r}$`);
}
function Lx(n, r) {
  return !!((r === "v4" || !r) && Rx.test(n) || (r === "v6" || !r) && Tx.test(n));
}
function Dx(n, r) {
  if (!kx.test(n))
    return !1;
  try {
    const [o] = n.split(".");
    if (!o)
      return !1;
    const i = o.replace(/-/g, "+").replace(/_/g, "/").padEnd(o.length + (4 - o.length % 4) % 4, "="), a = JSON.parse(atob(i));
    return !(typeof a != "object" || a === null || "typ" in a && (a == null ? void 0 : a.typ) !== "JWT" || !a.alg || r && a.alg !== r);
  } catch {
    return !1;
  }
}
function Fx(n, r) {
  return !!((r === "v4" || !r) && Nx.test(n) || (r === "v6" || !r) && Px.test(n));
}
class Wn extends Ue {
  _parse(r) {
    if (this._def.coerce && (r.data = String(r.data)), this._getType(r) !== me.string) {
      const u = this._getOrReturnCtx(r);
      return ue(u, {
        code: Q.invalid_type,
        expected: me.string,
        received: u.parsedType
      }), Ae;
    }
    const i = new Qt();
    let a;
    for (const u of this._def.checks)
      if (u.kind === "min")
        r.data.length < u.value && (a = this._getOrReturnCtx(r, a), ue(a, {
          code: Q.too_small,
          minimum: u.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: u.message
        }), i.dirty());
      else if (u.kind === "max")
        r.data.length > u.value && (a = this._getOrReturnCtx(r, a), ue(a, {
          code: Q.too_big,
          maximum: u.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: u.message
        }), i.dirty());
      else if (u.kind === "length") {
        const f = r.data.length > u.value, p = r.data.length < u.value;
        (f || p) && (a = this._getOrReturnCtx(r, a), f ? ue(a, {
          code: Q.too_big,
          maximum: u.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: u.message
        }) : p && ue(a, {
          code: Q.too_small,
          minimum: u.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: u.message
        }), i.dirty());
      } else if (u.kind === "email")
        Ex.test(r.data) || (a = this._getOrReturnCtx(r, a), ue(a, {
          validation: "email",
          code: Q.invalid_string,
          message: u.message
        }), i.dirty());
      else if (u.kind === "emoji")
        Tu || (Tu = new RegExp(bx, "u")), Tu.test(r.data) || (a = this._getOrReturnCtx(r, a), ue(a, {
          validation: "emoji",
          code: Q.invalid_string,
          message: u.message
        }), i.dirty());
      else if (u.kind === "uuid")
        _x.test(r.data) || (a = this._getOrReturnCtx(r, a), ue(a, {
          validation: "uuid",
          code: Q.invalid_string,
          message: u.message
        }), i.dirty());
      else if (u.kind === "nanoid")
        Sx.test(r.data) || (a = this._getOrReturnCtx(r, a), ue(a, {
          validation: "nanoid",
          code: Q.invalid_string,
          message: u.message
        }), i.dirty());
      else if (u.kind === "cuid")
        yx.test(r.data) || (a = this._getOrReturnCtx(r, a), ue(a, {
          validation: "cuid",
          code: Q.invalid_string,
          message: u.message
        }), i.dirty());
      else if (u.kind === "cuid2")
        xx.test(r.data) || (a = this._getOrReturnCtx(r, a), ue(a, {
          validation: "cuid2",
          code: Q.invalid_string,
          message: u.message
        }), i.dirty());
      else if (u.kind === "ulid")
        wx.test(r.data) || (a = this._getOrReturnCtx(r, a), ue(a, {
          validation: "ulid",
          code: Q.invalid_string,
          message: u.message
        }), i.dirty());
      else if (u.kind === "url")
        try {
          new URL(r.data);
        } catch {
          a = this._getOrReturnCtx(r, a), ue(a, {
            validation: "url",
            code: Q.invalid_string,
            message: u.message
          }), i.dirty();
        }
      else u.kind === "regex" ? (u.regex.lastIndex = 0, u.regex.test(r.data) || (a = this._getOrReturnCtx(r, a), ue(a, {
        validation: "regex",
        code: Q.invalid_string,
        message: u.message
      }), i.dirty())) : u.kind === "trim" ? r.data = r.data.trim() : u.kind === "includes" ? r.data.includes(u.value, u.position) || (a = this._getOrReturnCtx(r, a), ue(a, {
        code: Q.invalid_string,
        validation: { includes: u.value, position: u.position },
        message: u.message
      }), i.dirty()) : u.kind === "toLowerCase" ? r.data = r.data.toLowerCase() : u.kind === "toUpperCase" ? r.data = r.data.toUpperCase() : u.kind === "startsWith" ? r.data.startsWith(u.value) || (a = this._getOrReturnCtx(r, a), ue(a, {
        code: Q.invalid_string,
        validation: { startsWith: u.value },
        message: u.message
      }), i.dirty()) : u.kind === "endsWith" ? r.data.endsWith(u.value) || (a = this._getOrReturnCtx(r, a), ue(a, {
        code: Q.invalid_string,
        validation: { endsWith: u.value },
        message: u.message
      }), i.dirty()) : u.kind === "datetime" ? jx(u).test(r.data) || (a = this._getOrReturnCtx(r, a), ue(a, {
        code: Q.invalid_string,
        validation: "datetime",
        message: u.message
      }), i.dirty()) : u.kind === "date" ? Ix.test(r.data) || (a = this._getOrReturnCtx(r, a), ue(a, {
        code: Q.invalid_string,
        validation: "date",
        message: u.message
      }), i.dirty()) : u.kind === "time" ? Mx(u).test(r.data) || (a = this._getOrReturnCtx(r, a), ue(a, {
        code: Q.invalid_string,
        validation: "time",
        message: u.message
      }), i.dirty()) : u.kind === "duration" ? Cx.test(r.data) || (a = this._getOrReturnCtx(r, a), ue(a, {
        validation: "duration",
        code: Q.invalid_string,
        message: u.message
      }), i.dirty()) : u.kind === "ip" ? Lx(r.data, u.version) || (a = this._getOrReturnCtx(r, a), ue(a, {
        validation: "ip",
        code: Q.invalid_string,
        message: u.message
      }), i.dirty()) : u.kind === "jwt" ? Dx(r.data, u.alg) || (a = this._getOrReturnCtx(r, a), ue(a, {
        validation: "jwt",
        code: Q.invalid_string,
        message: u.message
      }), i.dirty()) : u.kind === "cidr" ? Fx(r.data, u.version) || (a = this._getOrReturnCtx(r, a), ue(a, {
        validation: "cidr",
        code: Q.invalid_string,
        message: u.message
      }), i.dirty()) : u.kind === "base64" ? Ax.test(r.data) || (a = this._getOrReturnCtx(r, a), ue(a, {
        validation: "base64",
        code: Q.invalid_string,
        message: u.message
      }), i.dirty()) : u.kind === "base64url" ? Ox.test(r.data) || (a = this._getOrReturnCtx(r, a), ue(a, {
        validation: "base64url",
        code: Q.invalid_string,
        message: u.message
      }), i.dirty()) : He.assertNever(u);
    return { status: i.value, value: r.data };
  }
  _regex(r, o, i) {
    return this.refinement((a) => r.test(a), {
      validation: o,
      code: Q.invalid_string,
      ...ye.errToObj(i)
    });
  }
  _addCheck(r) {
    return new Wn({
      ...this._def,
      checks: [...this._def.checks, r]
    });
  }
  email(r) {
    return this._addCheck({ kind: "email", ...ye.errToObj(r) });
  }
  url(r) {
    return this._addCheck({ kind: "url", ...ye.errToObj(r) });
  }
  emoji(r) {
    return this._addCheck({ kind: "emoji", ...ye.errToObj(r) });
  }
  uuid(r) {
    return this._addCheck({ kind: "uuid", ...ye.errToObj(r) });
  }
  nanoid(r) {
    return this._addCheck({ kind: "nanoid", ...ye.errToObj(r) });
  }
  cuid(r) {
    return this._addCheck({ kind: "cuid", ...ye.errToObj(r) });
  }
  cuid2(r) {
    return this._addCheck({ kind: "cuid2", ...ye.errToObj(r) });
  }
  ulid(r) {
    return this._addCheck({ kind: "ulid", ...ye.errToObj(r) });
  }
  base64(r) {
    return this._addCheck({ kind: "base64", ...ye.errToObj(r) });
  }
  base64url(r) {
    return this._addCheck({
      kind: "base64url",
      ...ye.errToObj(r)
    });
  }
  jwt(r) {
    return this._addCheck({ kind: "jwt", ...ye.errToObj(r) });
  }
  ip(r) {
    return this._addCheck({ kind: "ip", ...ye.errToObj(r) });
  }
  cidr(r) {
    return this._addCheck({ kind: "cidr", ...ye.errToObj(r) });
  }
  datetime(r) {
    return typeof r == "string" ? this._addCheck({
      kind: "datetime",
      precision: null,
      offset: !1,
      local: !1,
      message: r
    }) : this._addCheck({
      kind: "datetime",
      precision: typeof (r == null ? void 0 : r.precision) > "u" ? null : r == null ? void 0 : r.precision,
      offset: (r == null ? void 0 : r.offset) ?? !1,
      local: (r == null ? void 0 : r.local) ?? !1,
      ...ye.errToObj(r == null ? void 0 : r.message)
    });
  }
  date(r) {
    return this._addCheck({ kind: "date", message: r });
  }
  time(r) {
    return typeof r == "string" ? this._addCheck({
      kind: "time",
      precision: null,
      message: r
    }) : this._addCheck({
      kind: "time",
      precision: typeof (r == null ? void 0 : r.precision) > "u" ? null : r == null ? void 0 : r.precision,
      ...ye.errToObj(r == null ? void 0 : r.message)
    });
  }
  duration(r) {
    return this._addCheck({ kind: "duration", ...ye.errToObj(r) });
  }
  regex(r, o) {
    return this._addCheck({
      kind: "regex",
      regex: r,
      ...ye.errToObj(o)
    });
  }
  includes(r, o) {
    return this._addCheck({
      kind: "includes",
      value: r,
      position: o == null ? void 0 : o.position,
      ...ye.errToObj(o == null ? void 0 : o.message)
    });
  }
  startsWith(r, o) {
    return this._addCheck({
      kind: "startsWith",
      value: r,
      ...ye.errToObj(o)
    });
  }
  endsWith(r, o) {
    return this._addCheck({
      kind: "endsWith",
      value: r,
      ...ye.errToObj(o)
    });
  }
  min(r, o) {
    return this._addCheck({
      kind: "min",
      value: r,
      ...ye.errToObj(o)
    });
  }
  max(r, o) {
    return this._addCheck({
      kind: "max",
      value: r,
      ...ye.errToObj(o)
    });
  }
  length(r, o) {
    return this._addCheck({
      kind: "length",
      value: r,
      ...ye.errToObj(o)
    });
  }
  /**
   * Equivalent to `.min(1)`
   */
  nonempty(r) {
    return this.min(1, ye.errToObj(r));
  }
  trim() {
    return new Wn({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new Wn({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new Wn({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }]
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((r) => r.kind === "datetime");
  }
  get isDate() {
    return !!this._def.checks.find((r) => r.kind === "date");
  }
  get isTime() {
    return !!this._def.checks.find((r) => r.kind === "time");
  }
  get isDuration() {
    return !!this._def.checks.find((r) => r.kind === "duration");
  }
  get isEmail() {
    return !!this._def.checks.find((r) => r.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((r) => r.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((r) => r.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((r) => r.kind === "uuid");
  }
  get isNANOID() {
    return !!this._def.checks.find((r) => r.kind === "nanoid");
  }
  get isCUID() {
    return !!this._def.checks.find((r) => r.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((r) => r.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((r) => r.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((r) => r.kind === "ip");
  }
  get isCIDR() {
    return !!this._def.checks.find((r) => r.kind === "cidr");
  }
  get isBase64() {
    return !!this._def.checks.find((r) => r.kind === "base64");
  }
  get isBase64url() {
    return !!this._def.checks.find((r) => r.kind === "base64url");
  }
  get minLength() {
    let r = null;
    for (const o of this._def.checks)
      o.kind === "min" && (r === null || o.value > r) && (r = o.value);
    return r;
  }
  get maxLength() {
    let r = null;
    for (const o of this._def.checks)
      o.kind === "max" && (r === null || o.value < r) && (r = o.value);
    return r;
  }
}
Wn.create = (n) => new Wn({
  checks: [],
  typeName: Oe.ZodString,
  coerce: (n == null ? void 0 : n.coerce) ?? !1,
  ...De(n)
});
function Vx(n, r) {
  const o = (n.toString().split(".")[1] || "").length, i = (r.toString().split(".")[1] || "").length, a = o > i ? o : i, u = Number.parseInt(n.toFixed(a).replace(".", "")), f = Number.parseInt(r.toFixed(a).replace(".", ""));
  return u % f / 10 ** a;
}
class Hr extends Ue {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(r) {
    if (this._def.coerce && (r.data = Number(r.data)), this._getType(r) !== me.number) {
      const u = this._getOrReturnCtx(r);
      return ue(u, {
        code: Q.invalid_type,
        expected: me.number,
        received: u.parsedType
      }), Ae;
    }
    let i;
    const a = new Qt();
    for (const u of this._def.checks)
      u.kind === "int" ? He.isInteger(r.data) || (i = this._getOrReturnCtx(r, i), ue(i, {
        code: Q.invalid_type,
        expected: "integer",
        received: "float",
        message: u.message
      }), a.dirty()) : u.kind === "min" ? (u.inclusive ? r.data < u.value : r.data <= u.value) && (i = this._getOrReturnCtx(r, i), ue(i, {
        code: Q.too_small,
        minimum: u.value,
        type: "number",
        inclusive: u.inclusive,
        exact: !1,
        message: u.message
      }), a.dirty()) : u.kind === "max" ? (u.inclusive ? r.data > u.value : r.data >= u.value) && (i = this._getOrReturnCtx(r, i), ue(i, {
        code: Q.too_big,
        maximum: u.value,
        type: "number",
        inclusive: u.inclusive,
        exact: !1,
        message: u.message
      }), a.dirty()) : u.kind === "multipleOf" ? Vx(r.data, u.value) !== 0 && (i = this._getOrReturnCtx(r, i), ue(i, {
        code: Q.not_multiple_of,
        multipleOf: u.value,
        message: u.message
      }), a.dirty()) : u.kind === "finite" ? Number.isFinite(r.data) || (i = this._getOrReturnCtx(r, i), ue(i, {
        code: Q.not_finite,
        message: u.message
      }), a.dirty()) : He.assertNever(u);
    return { status: a.value, value: r.data };
  }
  gte(r, o) {
    return this.setLimit("min", r, !0, ye.toString(o));
  }
  gt(r, o) {
    return this.setLimit("min", r, !1, ye.toString(o));
  }
  lte(r, o) {
    return this.setLimit("max", r, !0, ye.toString(o));
  }
  lt(r, o) {
    return this.setLimit("max", r, !1, ye.toString(o));
  }
  setLimit(r, o, i, a) {
    return new Hr({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: r,
          value: o,
          inclusive: i,
          message: ye.toString(a)
        }
      ]
    });
  }
  _addCheck(r) {
    return new Hr({
      ...this._def,
      checks: [...this._def.checks, r]
    });
  }
  int(r) {
    return this._addCheck({
      kind: "int",
      message: ye.toString(r)
    });
  }
  positive(r) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: ye.toString(r)
    });
  }
  negative(r) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: ye.toString(r)
    });
  }
  nonpositive(r) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: ye.toString(r)
    });
  }
  nonnegative(r) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: ye.toString(r)
    });
  }
  multipleOf(r, o) {
    return this._addCheck({
      kind: "multipleOf",
      value: r,
      message: ye.toString(o)
    });
  }
  finite(r) {
    return this._addCheck({
      kind: "finite",
      message: ye.toString(r)
    });
  }
  safe(r) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: ye.toString(r)
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: ye.toString(r)
    });
  }
  get minValue() {
    let r = null;
    for (const o of this._def.checks)
      o.kind === "min" && (r === null || o.value > r) && (r = o.value);
    return r;
  }
  get maxValue() {
    let r = null;
    for (const o of this._def.checks)
      o.kind === "max" && (r === null || o.value < r) && (r = o.value);
    return r;
  }
  get isInt() {
    return !!this._def.checks.find((r) => r.kind === "int" || r.kind === "multipleOf" && He.isInteger(r.value));
  }
  get isFinite() {
    let r = null, o = null;
    for (const i of this._def.checks) {
      if (i.kind === "finite" || i.kind === "int" || i.kind === "multipleOf")
        return !0;
      i.kind === "min" ? (o === null || i.value > o) && (o = i.value) : i.kind === "max" && (r === null || i.value < r) && (r = i.value);
    }
    return Number.isFinite(o) && Number.isFinite(r);
  }
}
Hr.create = (n) => new Hr({
  checks: [],
  typeName: Oe.ZodNumber,
  coerce: (n == null ? void 0 : n.coerce) || !1,
  ...De(n)
});
class Zr extends Ue {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte;
  }
  _parse(r) {
    if (this._def.coerce)
      try {
        r.data = BigInt(r.data);
      } catch {
        return this._getInvalidInput(r);
      }
    if (this._getType(r) !== me.bigint)
      return this._getInvalidInput(r);
    let i;
    const a = new Qt();
    for (const u of this._def.checks)
      u.kind === "min" ? (u.inclusive ? r.data < u.value : r.data <= u.value) && (i = this._getOrReturnCtx(r, i), ue(i, {
        code: Q.too_small,
        type: "bigint",
        minimum: u.value,
        inclusive: u.inclusive,
        message: u.message
      }), a.dirty()) : u.kind === "max" ? (u.inclusive ? r.data > u.value : r.data >= u.value) && (i = this._getOrReturnCtx(r, i), ue(i, {
        code: Q.too_big,
        type: "bigint",
        maximum: u.value,
        inclusive: u.inclusive,
        message: u.message
      }), a.dirty()) : u.kind === "multipleOf" ? r.data % u.value !== BigInt(0) && (i = this._getOrReturnCtx(r, i), ue(i, {
        code: Q.not_multiple_of,
        multipleOf: u.value,
        message: u.message
      }), a.dirty()) : He.assertNever(u);
    return { status: a.value, value: r.data };
  }
  _getInvalidInput(r) {
    const o = this._getOrReturnCtx(r);
    return ue(o, {
      code: Q.invalid_type,
      expected: me.bigint,
      received: o.parsedType
    }), Ae;
  }
  gte(r, o) {
    return this.setLimit("min", r, !0, ye.toString(o));
  }
  gt(r, o) {
    return this.setLimit("min", r, !1, ye.toString(o));
  }
  lte(r, o) {
    return this.setLimit("max", r, !0, ye.toString(o));
  }
  lt(r, o) {
    return this.setLimit("max", r, !1, ye.toString(o));
  }
  setLimit(r, o, i, a) {
    return new Zr({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: r,
          value: o,
          inclusive: i,
          message: ye.toString(a)
        }
      ]
    });
  }
  _addCheck(r) {
    return new Zr({
      ...this._def,
      checks: [...this._def.checks, r]
    });
  }
  positive(r) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: ye.toString(r)
    });
  }
  negative(r) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: ye.toString(r)
    });
  }
  nonpositive(r) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: ye.toString(r)
    });
  }
  nonnegative(r) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: ye.toString(r)
    });
  }
  multipleOf(r, o) {
    return this._addCheck({
      kind: "multipleOf",
      value: r,
      message: ye.toString(o)
    });
  }
  get minValue() {
    let r = null;
    for (const o of this._def.checks)
      o.kind === "min" && (r === null || o.value > r) && (r = o.value);
    return r;
  }
  get maxValue() {
    let r = null;
    for (const o of this._def.checks)
      o.kind === "max" && (r === null || o.value < r) && (r = o.value);
    return r;
  }
}
Zr.create = (n) => new Zr({
  checks: [],
  typeName: Oe.ZodBigInt,
  coerce: (n == null ? void 0 : n.coerce) ?? !1,
  ...De(n)
});
class vl extends Ue {
  _parse(r) {
    if (this._def.coerce && (r.data = !!r.data), this._getType(r) !== me.boolean) {
      const i = this._getOrReturnCtx(r);
      return ue(i, {
        code: Q.invalid_type,
        expected: me.boolean,
        received: i.parsedType
      }), Ae;
    }
    return rn(r.data);
  }
}
vl.create = (n) => new vl({
  typeName: Oe.ZodBoolean,
  coerce: (n == null ? void 0 : n.coerce) || !1,
  ...De(n)
});
class Fo extends Ue {
  _parse(r) {
    if (this._def.coerce && (r.data = new Date(r.data)), this._getType(r) !== me.date) {
      const u = this._getOrReturnCtx(r);
      return ue(u, {
        code: Q.invalid_type,
        expected: me.date,
        received: u.parsedType
      }), Ae;
    }
    if (Number.isNaN(r.data.getTime())) {
      const u = this._getOrReturnCtx(r);
      return ue(u, {
        code: Q.invalid_date
      }), Ae;
    }
    const i = new Qt();
    let a;
    for (const u of this._def.checks)
      u.kind === "min" ? r.data.getTime() < u.value && (a = this._getOrReturnCtx(r, a), ue(a, {
        code: Q.too_small,
        message: u.message,
        inclusive: !0,
        exact: !1,
        minimum: u.value,
        type: "date"
      }), i.dirty()) : u.kind === "max" ? r.data.getTime() > u.value && (a = this._getOrReturnCtx(r, a), ue(a, {
        code: Q.too_big,
        message: u.message,
        inclusive: !0,
        exact: !1,
        maximum: u.value,
        type: "date"
      }), i.dirty()) : He.assertNever(u);
    return {
      status: i.value,
      value: new Date(r.data.getTime())
    };
  }
  _addCheck(r) {
    return new Fo({
      ...this._def,
      checks: [...this._def.checks, r]
    });
  }
  min(r, o) {
    return this._addCheck({
      kind: "min",
      value: r.getTime(),
      message: ye.toString(o)
    });
  }
  max(r, o) {
    return this._addCheck({
      kind: "max",
      value: r.getTime(),
      message: ye.toString(o)
    });
  }
  get minDate() {
    let r = null;
    for (const o of this._def.checks)
      o.kind === "min" && (r === null || o.value > r) && (r = o.value);
    return r != null ? new Date(r) : null;
  }
  get maxDate() {
    let r = null;
    for (const o of this._def.checks)
      o.kind === "max" && (r === null || o.value < r) && (r = o.value);
    return r != null ? new Date(r) : null;
  }
}
Fo.create = (n) => new Fo({
  checks: [],
  coerce: (n == null ? void 0 : n.coerce) || !1,
  typeName: Oe.ZodDate,
  ...De(n)
});
class Up extends Ue {
  _parse(r) {
    if (this._getType(r) !== me.symbol) {
      const i = this._getOrReturnCtx(r);
      return ue(i, {
        code: Q.invalid_type,
        expected: me.symbol,
        received: i.parsedType
      }), Ae;
    }
    return rn(r.data);
  }
}
Up.create = (n) => new Up({
  typeName: Oe.ZodSymbol,
  ...De(n)
});
class $p extends Ue {
  _parse(r) {
    if (this._getType(r) !== me.undefined) {
      const i = this._getOrReturnCtx(r);
      return ue(i, {
        code: Q.invalid_type,
        expected: me.undefined,
        received: i.parsedType
      }), Ae;
    }
    return rn(r.data);
  }
}
$p.create = (n) => new $p({
  typeName: Oe.ZodUndefined,
  ...De(n)
});
class Wp extends Ue {
  _parse(r) {
    if (this._getType(r) !== me.null) {
      const i = this._getOrReturnCtx(r);
      return ue(i, {
        code: Q.invalid_type,
        expected: me.null,
        received: i.parsedType
      }), Ae;
    }
    return rn(r.data);
  }
}
Wp.create = (n) => new Wp({
  typeName: Oe.ZodNull,
  ...De(n)
});
class Hp extends Ue {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(r) {
    return rn(r.data);
  }
}
Hp.create = (n) => new Hp({
  typeName: Oe.ZodAny,
  ...De(n)
});
class Zp extends Ue {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(r) {
    return rn(r.data);
  }
}
Zp.create = (n) => new Zp({
  typeName: Oe.ZodUnknown,
  ...De(n)
});
class Sr extends Ue {
  _parse(r) {
    const o = this._getOrReturnCtx(r);
    return ue(o, {
      code: Q.invalid_type,
      expected: me.never,
      received: o.parsedType
    }), Ae;
  }
}
Sr.create = (n) => new Sr({
  typeName: Oe.ZodNever,
  ...De(n)
});
class Gp extends Ue {
  _parse(r) {
    if (this._getType(r) !== me.undefined) {
      const i = this._getOrReturnCtx(r);
      return ue(i, {
        code: Q.invalid_type,
        expected: me.void,
        received: i.parsedType
      }), Ae;
    }
    return rn(r.data);
  }
}
Gp.create = (n) => new Gp({
  typeName: Oe.ZodVoid,
  ...De(n)
});
class Tn extends Ue {
  _parse(r) {
    const { ctx: o, status: i } = this._processInputParams(r), a = this._def;
    if (o.parsedType !== me.array)
      return ue(o, {
        code: Q.invalid_type,
        expected: me.array,
        received: o.parsedType
      }), Ae;
    if (a.exactLength !== null) {
      const f = o.data.length > a.exactLength.value, p = o.data.length < a.exactLength.value;
      (f || p) && (ue(o, {
        code: f ? Q.too_big : Q.too_small,
        minimum: p ? a.exactLength.value : void 0,
        maximum: f ? a.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: a.exactLength.message
      }), i.dirty());
    }
    if (a.minLength !== null && o.data.length < a.minLength.value && (ue(o, {
      code: Q.too_small,
      minimum: a.minLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: a.minLength.message
    }), i.dirty()), a.maxLength !== null && o.data.length > a.maxLength.value && (ue(o, {
      code: Q.too_big,
      maximum: a.maxLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: a.maxLength.message
    }), i.dirty()), o.common.async)
      return Promise.all([...o.data].map((f, p) => a.type._parseAsync(new _r(o, f, o.path, p)))).then((f) => Qt.mergeArray(i, f));
    const u = [...o.data].map((f, p) => a.type._parseSync(new _r(o, f, o.path, p)));
    return Qt.mergeArray(i, u);
  }
  get element() {
    return this._def.type;
  }
  min(r, o) {
    return new Tn({
      ...this._def,
      minLength: { value: r, message: ye.toString(o) }
    });
  }
  max(r, o) {
    return new Tn({
      ...this._def,
      maxLength: { value: r, message: ye.toString(o) }
    });
  }
  length(r, o) {
    return new Tn({
      ...this._def,
      exactLength: { value: r, message: ye.toString(o) }
    });
  }
  nonempty(r) {
    return this.min(1, r);
  }
}
Tn.create = (n, r) => new Tn({
  type: n,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: Oe.ZodArray,
  ...De(r)
});
function Io(n) {
  if (n instanceof pt) {
    const r = {};
    for (const o in n.shape) {
      const i = n.shape[o];
      r[o] = wr.create(Io(i));
    }
    return new pt({
      ...n._def,
      shape: () => r
    });
  } else return n instanceof Tn ? new Tn({
    ...n._def,
    type: Io(n.element)
  }) : n instanceof wr ? wr.create(Io(n.unwrap())) : n instanceof Bo ? Bo.create(Io(n.unwrap())) : n instanceof Gr ? Gr.create(n.items.map((r) => Io(r))) : n;
}
class pt extends Ue {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const r = this._def.shape(), o = He.objectKeys(r);
    return this._cached = { shape: r, keys: o }, this._cached;
  }
  _parse(r) {
    if (this._getType(r) !== me.object) {
      const g = this._getOrReturnCtx(r);
      return ue(g, {
        code: Q.invalid_type,
        expected: me.object,
        received: g.parsedType
      }), Ae;
    }
    const { status: i, ctx: a } = this._processInputParams(r), { shape: u, keys: f } = this._getCached(), p = [];
    if (!(this._def.catchall instanceof Sr && this._def.unknownKeys === "strip"))
      for (const g in a.data)
        f.includes(g) || p.push(g);
    const m = [];
    for (const g of f) {
      const v = u[g], x = a.data[g];
      m.push({
        key: { status: "valid", value: g },
        value: v._parse(new _r(a, x, a.path, g)),
        alwaysSet: g in a.data
      });
    }
    if (this._def.catchall instanceof Sr) {
      const g = this._def.unknownKeys;
      if (g === "passthrough")
        for (const v of p)
          m.push({
            key: { status: "valid", value: v },
            value: { status: "valid", value: a.data[v] }
          });
      else if (g === "strict")
        p.length > 0 && (ue(a, {
          code: Q.unrecognized_keys,
          keys: p
        }), i.dirty());
      else if (g !== "strip") throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const g = this._def.catchall;
      for (const v of p) {
        const x = a.data[v];
        m.push({
          key: { status: "valid", value: v },
          value: g._parse(
            new _r(a, x, a.path, v)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: v in a.data
        });
      }
    }
    return a.common.async ? Promise.resolve().then(async () => {
      const g = [];
      for (const v of m) {
        const x = await v.key, C = await v.value;
        g.push({
          key: x,
          value: C,
          alwaysSet: v.alwaysSet
        });
      }
      return g;
    }).then((g) => Qt.mergeObjectSync(i, g)) : Qt.mergeObjectSync(i, m);
  }
  get shape() {
    return this._def.shape();
  }
  strict(r) {
    return ye.errToObj, new pt({
      ...this._def,
      unknownKeys: "strict",
      ...r !== void 0 ? {
        errorMap: (o, i) => {
          var u, f;
          const a = ((f = (u = this._def).errorMap) == null ? void 0 : f.call(u, o, i).message) ?? i.defaultError;
          return o.code === "unrecognized_keys" ? {
            message: ye.errToObj(r).message ?? a
          } : {
            message: a
          };
        }
      } : {}
    });
  }
  strip() {
    return new pt({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new pt({
      ...this._def,
      unknownKeys: "passthrough"
    });
  }
  // const AugmentFactory =
  //   <Def extends ZodObjectDef>(def: Def) =>
  //   <Augmentation extends ZodRawShape>(
  //     augmentation: Augmentation
  //   ): ZodObject<
  //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
  //     Def["unknownKeys"],
  //     Def["catchall"]
  //   > => {
  //     return new ZodObject({
  //       ...def,
  //       shape: () => ({
  //         ...def.shape(),
  //         ...augmentation,
  //       }),
  //     }) as any;
  //   };
  extend(r) {
    return new pt({
      ...this._def,
      shape: () => ({
        ...this._def.shape(),
        ...r
      })
    });
  }
  /**
   * Prior to zod@1.0.12 there was a bug in the
   * inferred type of merged objects. Please
   * upgrade if you are experiencing issues.
   */
  merge(r) {
    return new pt({
      unknownKeys: r._def.unknownKeys,
      catchall: r._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...r._def.shape()
      }),
      typeName: Oe.ZodObject
    });
  }
  // merge<
  //   Incoming extends AnyZodObject,
  //   Augmentation extends Incoming["shape"],
  //   NewOutput extends {
  //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
  //       ? Augmentation[k]["_output"]
  //       : k extends keyof Output
  //       ? Output[k]
  //       : never;
  //   },
  //   NewInput extends {
  //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
  //       ? Augmentation[k]["_input"]
  //       : k extends keyof Input
  //       ? Input[k]
  //       : never;
  //   }
  // >(
  //   merging: Incoming
  // ): ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"],
  //   NewOutput,
  //   NewInput
  // > {
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  setKey(r, o) {
    return this.augment({ [r]: o });
  }
  // merge<Incoming extends AnyZodObject>(
  //   merging: Incoming
  // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
  // ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"]
  // > {
  //   // const mergedShape = objectUtil.mergeShapes(
  //   //   this._def.shape(),
  //   //   merging._def.shape()
  //   // );
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  catchall(r) {
    return new pt({
      ...this._def,
      catchall: r
    });
  }
  pick(r) {
    const o = {};
    for (const i of He.objectKeys(r))
      r[i] && this.shape[i] && (o[i] = this.shape[i]);
    return new pt({
      ...this._def,
      shape: () => o
    });
  }
  omit(r) {
    const o = {};
    for (const i of He.objectKeys(this.shape))
      r[i] || (o[i] = this.shape[i]);
    return new pt({
      ...this._def,
      shape: () => o
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return Io(this);
  }
  partial(r) {
    const o = {};
    for (const i of He.objectKeys(this.shape)) {
      const a = this.shape[i];
      r && !r[i] ? o[i] = a : o[i] = a.optional();
    }
    return new pt({
      ...this._def,
      shape: () => o
    });
  }
  required(r) {
    const o = {};
    for (const i of He.objectKeys(this.shape))
      if (r && !r[i])
        o[i] = this.shape[i];
      else {
        let u = this.shape[i];
        for (; u instanceof wr; )
          u = u._def.innerType;
        o[i] = u;
      }
    return new pt({
      ...this._def,
      shape: () => o
    });
  }
  keyof() {
    return Qh(He.objectKeys(this.shape));
  }
}
pt.create = (n, r) => new pt({
  shape: () => n,
  unknownKeys: "strip",
  catchall: Sr.create(),
  typeName: Oe.ZodObject,
  ...De(r)
});
pt.strictCreate = (n, r) => new pt({
  shape: () => n,
  unknownKeys: "strict",
  catchall: Sr.create(),
  typeName: Oe.ZodObject,
  ...De(r)
});
pt.lazycreate = (n, r) => new pt({
  shape: n,
  unknownKeys: "strip",
  catchall: Sr.create(),
  typeName: Oe.ZodObject,
  ...De(r)
});
class yl extends Ue {
  _parse(r) {
    const { ctx: o } = this._processInputParams(r), i = this._def.options;
    function a(u) {
      for (const p of u)
        if (p.result.status === "valid")
          return p.result;
      for (const p of u)
        if (p.result.status === "dirty")
          return o.common.issues.push(...p.ctx.common.issues), p.result;
      const f = u.map((p) => new Hn(p.ctx.common.issues));
      return ue(o, {
        code: Q.invalid_union,
        unionErrors: f
      }), Ae;
    }
    if (o.common.async)
      return Promise.all(i.map(async (u) => {
        const f = {
          ...o,
          common: {
            ...o.common,
            issues: []
          },
          parent: null
        };
        return {
          result: await u._parseAsync({
            data: o.data,
            path: o.path,
            parent: f
          }),
          ctx: f
        };
      })).then(a);
    {
      let u;
      const f = [];
      for (const m of i) {
        const g = {
          ...o,
          common: {
            ...o.common,
            issues: []
          },
          parent: null
        }, v = m._parseSync({
          data: o.data,
          path: o.path,
          parent: g
        });
        if (v.status === "valid")
          return v;
        v.status === "dirty" && !u && (u = { result: v, ctx: g }), g.common.issues.length && f.push(g.common.issues);
      }
      if (u)
        return o.common.issues.push(...u.ctx.common.issues), u.result;
      const p = f.map((m) => new Hn(m));
      return ue(o, {
        code: Q.invalid_union,
        unionErrors: p
      }), Ae;
    }
  }
  get options() {
    return this._def.options;
  }
}
yl.create = (n, r) => new yl({
  options: n,
  typeName: Oe.ZodUnion,
  ...De(r)
});
function Zu(n, r) {
  const o = xr(n), i = xr(r);
  if (n === r)
    return { valid: !0, data: n };
  if (o === me.object && i === me.object) {
    const a = He.objectKeys(r), u = He.objectKeys(n).filter((p) => a.indexOf(p) !== -1), f = { ...n, ...r };
    for (const p of u) {
      const m = Zu(n[p], r[p]);
      if (!m.valid)
        return { valid: !1 };
      f[p] = m.data;
    }
    return { valid: !0, data: f };
  } else if (o === me.array && i === me.array) {
    if (n.length !== r.length)
      return { valid: !1 };
    const a = [];
    for (let u = 0; u < n.length; u++) {
      const f = n[u], p = r[u], m = Zu(f, p);
      if (!m.valid)
        return { valid: !1 };
      a.push(m.data);
    }
    return { valid: !0, data: a };
  } else return o === me.date && i === me.date && +n == +r ? { valid: !0, data: n } : { valid: !1 };
}
class xl extends Ue {
  _parse(r) {
    const { status: o, ctx: i } = this._processInputParams(r), a = (u, f) => {
      if (Vp(u) || Vp(f))
        return Ae;
      const p = Zu(u.value, f.value);
      return p.valid ? ((zp(u) || zp(f)) && o.dirty(), { status: o.value, value: p.data }) : (ue(i, {
        code: Q.invalid_intersection_types
      }), Ae);
    };
    return i.common.async ? Promise.all([
      this._def.left._parseAsync({
        data: i.data,
        path: i.path,
        parent: i
      }),
      this._def.right._parseAsync({
        data: i.data,
        path: i.path,
        parent: i
      })
    ]).then(([u, f]) => a(u, f)) : a(this._def.left._parseSync({
      data: i.data,
      path: i.path,
      parent: i
    }), this._def.right._parseSync({
      data: i.data,
      path: i.path,
      parent: i
    }));
  }
}
xl.create = (n, r, o) => new xl({
  left: n,
  right: r,
  typeName: Oe.ZodIntersection,
  ...De(o)
});
class Gr extends Ue {
  _parse(r) {
    const { status: o, ctx: i } = this._processInputParams(r);
    if (i.parsedType !== me.array)
      return ue(i, {
        code: Q.invalid_type,
        expected: me.array,
        received: i.parsedType
      }), Ae;
    if (i.data.length < this._def.items.length)
      return ue(i, {
        code: Q.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), Ae;
    !this._def.rest && i.data.length > this._def.items.length && (ue(i, {
      code: Q.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), o.dirty());
    const u = [...i.data].map((f, p) => {
      const m = this._def.items[p] || this._def.rest;
      return m ? m._parse(new _r(i, f, i.path, p)) : null;
    }).filter((f) => !!f);
    return i.common.async ? Promise.all(u).then((f) => Qt.mergeArray(o, f)) : Qt.mergeArray(o, u);
  }
  get items() {
    return this._def.items;
  }
  rest(r) {
    return new Gr({
      ...this._def,
      rest: r
    });
  }
}
Gr.create = (n, r) => {
  if (!Array.isArray(n))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new Gr({
    items: n,
    typeName: Oe.ZodTuple,
    rest: null,
    ...De(r)
  });
};
class Kp extends Ue {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(r) {
    const { status: o, ctx: i } = this._processInputParams(r);
    if (i.parsedType !== me.map)
      return ue(i, {
        code: Q.invalid_type,
        expected: me.map,
        received: i.parsedType
      }), Ae;
    const a = this._def.keyType, u = this._def.valueType, f = [...i.data.entries()].map(([p, m], g) => ({
      key: a._parse(new _r(i, p, i.path, [g, "key"])),
      value: u._parse(new _r(i, m, i.path, [g, "value"]))
    }));
    if (i.common.async) {
      const p = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const m of f) {
          const g = await m.key, v = await m.value;
          if (g.status === "aborted" || v.status === "aborted")
            return Ae;
          (g.status === "dirty" || v.status === "dirty") && o.dirty(), p.set(g.value, v.value);
        }
        return { status: o.value, value: p };
      });
    } else {
      const p = /* @__PURE__ */ new Map();
      for (const m of f) {
        const g = m.key, v = m.value;
        if (g.status === "aborted" || v.status === "aborted")
          return Ae;
        (g.status === "dirty" || v.status === "dirty") && o.dirty(), p.set(g.value, v.value);
      }
      return { status: o.value, value: p };
    }
  }
}
Kp.create = (n, r, o) => new Kp({
  valueType: r,
  keyType: n,
  typeName: Oe.ZodMap,
  ...De(o)
});
class Bs extends Ue {
  _parse(r) {
    const { status: o, ctx: i } = this._processInputParams(r);
    if (i.parsedType !== me.set)
      return ue(i, {
        code: Q.invalid_type,
        expected: me.set,
        received: i.parsedType
      }), Ae;
    const a = this._def;
    a.minSize !== null && i.data.size < a.minSize.value && (ue(i, {
      code: Q.too_small,
      minimum: a.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: a.minSize.message
    }), o.dirty()), a.maxSize !== null && i.data.size > a.maxSize.value && (ue(i, {
      code: Q.too_big,
      maximum: a.maxSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: a.maxSize.message
    }), o.dirty());
    const u = this._def.valueType;
    function f(m) {
      const g = /* @__PURE__ */ new Set();
      for (const v of m) {
        if (v.status === "aborted")
          return Ae;
        v.status === "dirty" && o.dirty(), g.add(v.value);
      }
      return { status: o.value, value: g };
    }
    const p = [...i.data.values()].map((m, g) => u._parse(new _r(i, m, i.path, g)));
    return i.common.async ? Promise.all(p).then((m) => f(m)) : f(p);
  }
  min(r, o) {
    return new Bs({
      ...this._def,
      minSize: { value: r, message: ye.toString(o) }
    });
  }
  max(r, o) {
    return new Bs({
      ...this._def,
      maxSize: { value: r, message: ye.toString(o) }
    });
  }
  size(r, o) {
    return this.min(r, o).max(r, o);
  }
  nonempty(r) {
    return this.min(1, r);
  }
}
Bs.create = (n, r) => new Bs({
  valueType: n,
  minSize: null,
  maxSize: null,
  typeName: Oe.ZodSet,
  ...De(r)
});
class Qp extends Ue {
  get schema() {
    return this._def.getter();
  }
  _parse(r) {
    const { ctx: o } = this._processInputParams(r);
    return this._def.getter()._parse({ data: o.data, path: o.path, parent: o });
  }
}
Qp.create = (n, r) => new Qp({
  getter: n,
  typeName: Oe.ZodLazy,
  ...De(r)
});
class Yp extends Ue {
  _parse(r) {
    if (r.data !== this._def.value) {
      const o = this._getOrReturnCtx(r);
      return ue(o, {
        received: o.data,
        code: Q.invalid_literal,
        expected: this._def.value
      }), Ae;
    }
    return { status: "valid", value: r.data };
  }
  get value() {
    return this._def.value;
  }
}
Yp.create = (n, r) => new Yp({
  value: n,
  typeName: Oe.ZodLiteral,
  ...De(r)
});
function Qh(n, r) {
  return new Vo({
    values: n,
    typeName: Oe.ZodEnum,
    ...De(r)
  });
}
class Vo extends Ue {
  _parse(r) {
    if (typeof r.data != "string") {
      const o = this._getOrReturnCtx(r), i = this._def.values;
      return ue(o, {
        expected: He.joinValues(i),
        received: o.parsedType,
        code: Q.invalid_type
      }), Ae;
    }
    if (this._cache || (this._cache = new Set(this._def.values)), !this._cache.has(r.data)) {
      const o = this._getOrReturnCtx(r), i = this._def.values;
      return ue(o, {
        received: o.data,
        code: Q.invalid_enum_value,
        options: i
      }), Ae;
    }
    return rn(r.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const r = {};
    for (const o of this._def.values)
      r[o] = o;
    return r;
  }
  get Values() {
    const r = {};
    for (const o of this._def.values)
      r[o] = o;
    return r;
  }
  get Enum() {
    const r = {};
    for (const o of this._def.values)
      r[o] = o;
    return r;
  }
  extract(r, o = this._def) {
    return Vo.create(r, {
      ...this._def,
      ...o
    });
  }
  exclude(r, o = this._def) {
    return Vo.create(this.options.filter((i) => !r.includes(i)), {
      ...this._def,
      ...o
    });
  }
}
Vo.create = Qh;
class Xp extends Ue {
  _parse(r) {
    const o = He.getValidEnumValues(this._def.values), i = this._getOrReturnCtx(r);
    if (i.parsedType !== me.string && i.parsedType !== me.number) {
      const a = He.objectValues(o);
      return ue(i, {
        expected: He.joinValues(a),
        received: i.parsedType,
        code: Q.invalid_type
      }), Ae;
    }
    if (this._cache || (this._cache = new Set(He.getValidEnumValues(this._def.values))), !this._cache.has(r.data)) {
      const a = He.objectValues(o);
      return ue(i, {
        received: i.data,
        code: Q.invalid_enum_value,
        options: a
      }), Ae;
    }
    return rn(r.data);
  }
  get enum() {
    return this._def.values;
  }
}
Xp.create = (n, r) => new Xp({
  values: n,
  typeName: Oe.ZodNativeEnum,
  ...De(r)
});
class wl extends Ue {
  unwrap() {
    return this._def.type;
  }
  _parse(r) {
    const { ctx: o } = this._processInputParams(r);
    if (o.parsedType !== me.promise && o.common.async === !1)
      return ue(o, {
        code: Q.invalid_type,
        expected: me.promise,
        received: o.parsedType
      }), Ae;
    const i = o.parsedType === me.promise ? o.data : Promise.resolve(o.data);
    return rn(i.then((a) => this._def.type.parseAsync(a, {
      path: o.path,
      errorMap: o.common.contextualErrorMap
    })));
  }
}
wl.create = (n, r) => new wl({
  type: n,
  typeName: Oe.ZodPromise,
  ...De(r)
});
class zo extends Ue {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === Oe.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(r) {
    const { status: o, ctx: i } = this._processInputParams(r), a = this._def.effect || null, u = {
      addIssue: (f) => {
        ue(i, f), f.fatal ? o.abort() : o.dirty();
      },
      get path() {
        return i.path;
      }
    };
    if (u.addIssue = u.addIssue.bind(u), a.type === "preprocess") {
      const f = a.transform(i.data, u);
      if (i.common.async)
        return Promise.resolve(f).then(async (p) => {
          if (o.value === "aborted")
            return Ae;
          const m = await this._def.schema._parseAsync({
            data: p,
            path: i.path,
            parent: i
          });
          return m.status === "aborted" ? Ae : m.status === "dirty" || o.value === "dirty" ? Ls(m.value) : m;
        });
      {
        if (o.value === "aborted")
          return Ae;
        const p = this._def.schema._parseSync({
          data: f,
          path: i.path,
          parent: i
        });
        return p.status === "aborted" ? Ae : p.status === "dirty" || o.value === "dirty" ? Ls(p.value) : p;
      }
    }
    if (a.type === "refinement") {
      const f = (p) => {
        const m = a.refinement(p, u);
        if (i.common.async)
          return Promise.resolve(m);
        if (m instanceof Promise)
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        return p;
      };
      if (i.common.async === !1) {
        const p = this._def.schema._parseSync({
          data: i.data,
          path: i.path,
          parent: i
        });
        return p.status === "aborted" ? Ae : (p.status === "dirty" && o.dirty(), f(p.value), { status: o.value, value: p.value });
      } else
        return this._def.schema._parseAsync({ data: i.data, path: i.path, parent: i }).then((p) => p.status === "aborted" ? Ae : (p.status === "dirty" && o.dirty(), f(p.value).then(() => ({ status: o.value, value: p.value }))));
    }
    if (a.type === "transform")
      if (i.common.async === !1) {
        const f = this._def.schema._parseSync({
          data: i.data,
          path: i.path,
          parent: i
        });
        if (!Do(f))
          return Ae;
        const p = a.transform(f.value, u);
        if (p instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: o.value, value: p };
      } else
        return this._def.schema._parseAsync({ data: i.data, path: i.path, parent: i }).then((f) => Do(f) ? Promise.resolve(a.transform(f.value, u)).then((p) => ({
          status: o.value,
          value: p
        })) : Ae);
    He.assertNever(a);
  }
}
zo.create = (n, r, o) => new zo({
  schema: n,
  typeName: Oe.ZodEffects,
  effect: r,
  ...De(o)
});
zo.createWithPreprocess = (n, r, o) => new zo({
  schema: r,
  effect: { type: "preprocess", transform: n },
  typeName: Oe.ZodEffects,
  ...De(o)
});
class wr extends Ue {
  _parse(r) {
    return this._getType(r) === me.undefined ? rn(void 0) : this._def.innerType._parse(r);
  }
  unwrap() {
    return this._def.innerType;
  }
}
wr.create = (n, r) => new wr({
  innerType: n,
  typeName: Oe.ZodOptional,
  ...De(r)
});
class Bo extends Ue {
  _parse(r) {
    return this._getType(r) === me.null ? rn(null) : this._def.innerType._parse(r);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Bo.create = (n, r) => new Bo({
  innerType: n,
  typeName: Oe.ZodNullable,
  ...De(r)
});
class Gu extends Ue {
  _parse(r) {
    const { ctx: o } = this._processInputParams(r);
    let i = o.data;
    return o.parsedType === me.undefined && (i = this._def.defaultValue()), this._def.innerType._parse({
      data: i,
      path: o.path,
      parent: o
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
Gu.create = (n, r) => new Gu({
  innerType: n,
  typeName: Oe.ZodDefault,
  defaultValue: typeof r.default == "function" ? r.default : () => r.default,
  ...De(r)
});
class Ku extends Ue {
  _parse(r) {
    const { ctx: o } = this._processInputParams(r), i = {
      ...o,
      common: {
        ...o.common,
        issues: []
      }
    }, a = this._def.innerType._parse({
      data: i.data,
      path: i.path,
      parent: {
        ...i
      }
    });
    return gl(a) ? a.then((u) => ({
      status: "valid",
      value: u.status === "valid" ? u.value : this._def.catchValue({
        get error() {
          return new Hn(i.common.issues);
        },
        input: i.data
      })
    })) : {
      status: "valid",
      value: a.status === "valid" ? a.value : this._def.catchValue({
        get error() {
          return new Hn(i.common.issues);
        },
        input: i.data
      })
    };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
Ku.create = (n, r) => new Ku({
  innerType: n,
  typeName: Oe.ZodCatch,
  catchValue: typeof r.catch == "function" ? r.catch : () => r.catch,
  ...De(r)
});
class qp extends Ue {
  _parse(r) {
    if (this._getType(r) !== me.nan) {
      const i = this._getOrReturnCtx(r);
      return ue(i, {
        code: Q.invalid_type,
        expected: me.nan,
        received: i.parsedType
      }), Ae;
    }
    return { status: "valid", value: r.data };
  }
}
qp.create = (n) => new qp({
  typeName: Oe.ZodNaN,
  ...De(n)
});
class zx extends Ue {
  _parse(r) {
    const { ctx: o } = this._processInputParams(r), i = o.data;
    return this._def.type._parse({
      data: i,
      path: o.path,
      parent: o
    });
  }
  unwrap() {
    return this._def.type;
  }
}
class gc extends Ue {
  _parse(r) {
    const { status: o, ctx: i } = this._processInputParams(r);
    if (i.common.async)
      return (async () => {
        const u = await this._def.in._parseAsync({
          data: i.data,
          path: i.path,
          parent: i
        });
        return u.status === "aborted" ? Ae : u.status === "dirty" ? (o.dirty(), Ls(u.value)) : this._def.out._parseAsync({
          data: u.value,
          path: i.path,
          parent: i
        });
      })();
    {
      const a = this._def.in._parseSync({
        data: i.data,
        path: i.path,
        parent: i
      });
      return a.status === "aborted" ? Ae : a.status === "dirty" ? (o.dirty(), {
        status: "dirty",
        value: a.value
      }) : this._def.out._parseSync({
        data: a.value,
        path: i.path,
        parent: i
      });
    }
  }
  static create(r, o) {
    return new gc({
      in: r,
      out: o,
      typeName: Oe.ZodPipeline
    });
  }
}
class Qu extends Ue {
  _parse(r) {
    const o = this._def.innerType._parse(r), i = (a) => (Do(a) && (a.value = Object.freeze(a.value)), a);
    return gl(o) ? o.then((a) => i(a)) : i(o);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Qu.create = (n, r) => new Qu({
  innerType: n,
  typeName: Oe.ZodReadonly,
  ...De(r)
});
var Oe;
(function(n) {
  n.ZodString = "ZodString", n.ZodNumber = "ZodNumber", n.ZodNaN = "ZodNaN", n.ZodBigInt = "ZodBigInt", n.ZodBoolean = "ZodBoolean", n.ZodDate = "ZodDate", n.ZodSymbol = "ZodSymbol", n.ZodUndefined = "ZodUndefined", n.ZodNull = "ZodNull", n.ZodAny = "ZodAny", n.ZodUnknown = "ZodUnknown", n.ZodNever = "ZodNever", n.ZodVoid = "ZodVoid", n.ZodArray = "ZodArray", n.ZodObject = "ZodObject", n.ZodUnion = "ZodUnion", n.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", n.ZodIntersection = "ZodIntersection", n.ZodTuple = "ZodTuple", n.ZodRecord = "ZodRecord", n.ZodMap = "ZodMap", n.ZodSet = "ZodSet", n.ZodFunction = "ZodFunction", n.ZodLazy = "ZodLazy", n.ZodLiteral = "ZodLiteral", n.ZodEnum = "ZodEnum", n.ZodEffects = "ZodEffects", n.ZodNativeEnum = "ZodNativeEnum", n.ZodOptional = "ZodOptional", n.ZodNullable = "ZodNullable", n.ZodDefault = "ZodDefault", n.ZodCatch = "ZodCatch", n.ZodPromise = "ZodPromise", n.ZodBranded = "ZodBranded", n.ZodPipeline = "ZodPipeline", n.ZodReadonly = "ZodReadonly";
})(Oe || (Oe = {}));
const mn = Wn.create;
Hr.create;
Zr.create;
const Bx = vl.create;
Fo.create;
Sr.create;
Tn.create;
const Ux = pt.create;
yl.create;
xl.create;
Gr.create;
Vo.create;
wl.create;
wr.create;
Bo.create;
const No = {
  string: ((n) => Wn.create({ ...n, coerce: !0 })),
  number: ((n) => Hr.create({ ...n, coerce: !0 })),
  boolean: ((n) => vl.create({
    ...n,
    coerce: !0
  })),
  bigint: ((n) => Zr.create({ ...n, coerce: !0 })),
  date: ((n) => Fo.create({ ...n, coerce: !0 }))
}, $x = Ux({
  query: mn().trim().min(1, "Enter A Niche Or Keyword."),
  timeframe: mn(),
  custom_start: mn().optional().default(""),
  custom_end: mn().optional().default(""),
  match_mode: mn(),
  region: mn(),
  language: mn(),
  freshness_focus: mn(),
  duration_preference: mn(),
  language_strictness: mn(),
  min_views: No.number().int().min(0),
  min_subscribers: No.number().int().min(0),
  max_subscribers: No.number().int().min(0),
  include_hidden: Bx(),
  exclude_keywords: mn().default(""),
  search_pages: No.number().int().min(2).max(4),
  baseline_channels: No.number().int().min(10).max(20),
  baseline_videos: No.number().int().min(10).max(30)
}).superRefine((n, r) => {
  n.timeframe === "Custom" && ((!n.custom_start || !n.custom_end) && r.addIssue({
    code: Q.custom,
    message: "Choose Both Start And End Dates For A Custom Timeframe.",
    path: ["custom_start"]
  }), n.custom_start && n.custom_end && n.custom_start > n.custom_end && r.addIssue({
    code: Q.custom,
    message: "The Start Date Must Be On Or Before The End Date.",
    path: ["custom_end"]
  })), n.max_subscribers > 0 && n.min_subscribers > n.max_subscribers && r.addIssue({
    code: Q.custom,
    message: "Maximum Subscribers Must Be Greater Than Or Equal To Minimum Subscribers.",
    path: ["max_subscribers"]
  });
});
function Qe(n, r, { checkForDefaultPrevented: o = !0 } = {}) {
  return function(a) {
    if (n == null || n(a), o === !1 || !a.defaultPrevented)
      return r == null ? void 0 : r(a);
  };
}
function Xr(n, r = []) {
  let o = [];
  function i(u, f) {
    const p = _.createContext(f), m = o.length;
    o = [...o, f];
    const g = (x) => {
      var A;
      const { scope: C, children: E, ...O } = x, w = ((A = C == null ? void 0 : C[n]) == null ? void 0 : A[m]) || p, y = _.useMemo(() => O, Object.values(O));
      return /* @__PURE__ */ k.jsx(w.Provider, { value: y, children: E });
    };
    g.displayName = u + "Provider";
    function v(x, C) {
      var w;
      const E = ((w = C == null ? void 0 : C[n]) == null ? void 0 : w[m]) || p, O = _.useContext(E);
      if (O) return O;
      if (f !== void 0) return f;
      throw new Error(`\`${x}\` must be used within \`${u}\``);
    }
    return [g, v];
  }
  const a = () => {
    const u = o.map((f) => _.createContext(f));
    return function(p) {
      const m = (p == null ? void 0 : p[n]) || u;
      return _.useMemo(
        () => ({ [`__scope${n}`]: { ...p, [n]: m } }),
        [p, m]
      );
    };
  };
  return a.scopeName = n, [i, Wx(a, ...r)];
}
function Wx(...n) {
  const r = n[0];
  if (n.length === 1) return r;
  const o = () => {
    const i = n.map((a) => ({
      useScope: a(),
      scopeName: a.scopeName
    }));
    return function(u) {
      const f = i.reduce((p, { useScope: m, scopeName: g }) => {
        const x = m(u)[`__scope${g}`];
        return { ...p, ...x };
      }, {});
      return _.useMemo(() => ({ [`__scope${r.scopeName}`]: f }), [f]);
    };
  };
  return o.scopeName = r.scopeName, o;
}
var kt = globalThis != null && globalThis.document ? _.useLayoutEffect : () => {
}, Hx = Oh[" useInsertionEffect ".trim().toString()] || kt;
function kr({
  prop: n,
  defaultProp: r,
  onChange: o = () => {
  },
  caller: i
}) {
  const [a, u, f] = Zx({
    defaultProp: r,
    onChange: o
  }), p = n !== void 0, m = p ? n : a;
  {
    const v = _.useRef(n !== void 0);
    _.useEffect(() => {
      const x = v.current;
      x !== p && console.warn(
        `${i} is changing from ${x ? "controlled" : "uncontrolled"} to ${p ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), v.current = p;
    }, [p, i]);
  }
  const g = _.useCallback(
    (v) => {
      var x;
      if (p) {
        const C = Gx(v) ? v(n) : v;
        C !== n && ((x = f.current) == null || x.call(f, C));
      } else
        u(v);
    },
    [p, n, u, f]
  );
  return [m, g];
}
function Zx({
  defaultProp: n,
  onChange: r
}) {
  const [o, i] = _.useState(n), a = _.useRef(o), u = _.useRef(r);
  return Hx(() => {
    u.current = r;
  }, [r]), _.useEffect(() => {
    var f;
    a.current !== o && ((f = u.current) == null || f.call(u, o), a.current = o);
  }, [o, a]), [o, i, u];
}
function Gx(n) {
  return typeof n == "function";
}
function Jp(n, r) {
  if (typeof n == "function")
    return n(r);
  n != null && (n.current = r);
}
function Yh(...n) {
  return (r) => {
    let o = !1;
    const i = n.map((a) => {
      const u = Jp(a, r);
      return !o && typeof u == "function" && (o = !0), u;
    });
    if (o)
      return () => {
        for (let a = 0; a < i.length; a++) {
          const u = i[a];
          typeof u == "function" ? u() : Jp(n[a], null);
        }
      };
  };
}
function st(...n) {
  return _.useCallback(Yh(...n), n);
}
var Ws = Ih();
const Kx = /* @__PURE__ */ Ah(Ws);
// @__NO_SIDE_EFFECTS__
function _l(n) {
  const r = /* @__PURE__ */ Qx(n), o = _.forwardRef((i, a) => {
    const { children: u, ...f } = i, p = _.Children.toArray(u), m = p.find(Xx);
    if (m) {
      const g = m.props.children, v = p.map((x) => x === m ? _.Children.count(g) > 1 ? _.Children.only(null) : _.isValidElement(g) ? g.props.children : null : x);
      return /* @__PURE__ */ k.jsx(r, { ...f, ref: a, children: _.isValidElement(g) ? _.cloneElement(g, void 0, v) : null });
    }
    return /* @__PURE__ */ k.jsx(r, { ...f, ref: a, children: u });
  });
  return o.displayName = `${n}.Slot`, o;
}
// @__NO_SIDE_EFFECTS__
function Qx(n) {
  const r = _.forwardRef((o, i) => {
    const { children: a, ...u } = o;
    if (_.isValidElement(a)) {
      const f = Jx(a), p = qx(u, a.props);
      return a.type !== _.Fragment && (p.ref = i ? Yh(i, f) : f), _.cloneElement(a, p);
    }
    return _.Children.count(a) > 1 ? _.Children.only(null) : null;
  });
  return r.displayName = `${n}.SlotClone`, r;
}
var Yx = Symbol("radix.slottable");
function Xx(n) {
  return _.isValidElement(n) && typeof n.type == "function" && "__radixId" in n.type && n.type.__radixId === Yx;
}
function qx(n, r) {
  const o = { ...r };
  for (const i in r) {
    const a = n[i], u = r[i];
    /^on[A-Z]/.test(i) ? a && u ? o[i] = (...p) => {
      const m = u(...p);
      return a(...p), m;
    } : a && (o[i] = a) : i === "style" ? o[i] = { ...a, ...u } : i === "className" && (o[i] = [a, u].filter(Boolean).join(" "));
  }
  return { ...n, ...o };
}
function Jx(n) {
  var i, a;
  let r = (i = Object.getOwnPropertyDescriptor(n.props, "ref")) == null ? void 0 : i.get, o = r && "isReactWarning" in r && r.isReactWarning;
  return o ? n.ref : (r = (a = Object.getOwnPropertyDescriptor(n, "ref")) == null ? void 0 : a.get, o = r && "isReactWarning" in r && r.isReactWarning, o ? n.props.ref : n.props.ref || n.ref);
}
var ew = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
], Ze = ew.reduce((n, r) => {
  const o = /* @__PURE__ */ _l(`Primitive.${r}`), i = _.forwardRef((a, u) => {
    const { asChild: f, ...p } = a, m = f ? o : r;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ k.jsx(m, { ...p, ref: u });
  });
  return i.displayName = `Primitive.${r}`, { ...n, [r]: i };
}, {});
function tw(n, r) {
  n && Ws.flushSync(() => n.dispatchEvent(r));
}
function nw(n, r) {
  return _.useReducer((o, i) => r[o][i] ?? o, n);
}
var Xh = (n) => {
  const { present: r, children: o } = n, i = rw(r), a = typeof o == "function" ? o({ present: i.isPresent }) : _.Children.only(o), u = st(i.ref, ow(a));
  return typeof o == "function" || i.isPresent ? _.cloneElement(a, { ref: u }) : null;
};
Xh.displayName = "Presence";
function rw(n) {
  const [r, o] = _.useState(), i = _.useRef(null), a = _.useRef(n), u = _.useRef("none"), f = n ? "mounted" : "unmounted", [p, m] = nw(f, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return _.useEffect(() => {
    const g = rl(i.current);
    u.current = p === "mounted" ? g : "none";
  }, [p]), kt(() => {
    const g = i.current, v = a.current;
    if (v !== n) {
      const C = u.current, E = rl(g);
      n ? m("MOUNT") : E === "none" || (g == null ? void 0 : g.display) === "none" ? m("UNMOUNT") : m(v && C !== E ? "ANIMATION_OUT" : "UNMOUNT"), a.current = n;
    }
  }, [n, m]), kt(() => {
    if (r) {
      let g;
      const v = r.ownerDocument.defaultView ?? window, x = (E) => {
        const w = rl(i.current).includes(CSS.escape(E.animationName));
        if (E.target === r && w && (m("ANIMATION_END"), !a.current)) {
          const y = r.style.animationFillMode;
          r.style.animationFillMode = "forwards", g = v.setTimeout(() => {
            r.style.animationFillMode === "forwards" && (r.style.animationFillMode = y);
          });
        }
      }, C = (E) => {
        E.target === r && (u.current = rl(i.current));
      };
      return r.addEventListener("animationstart", C), r.addEventListener("animationcancel", x), r.addEventListener("animationend", x), () => {
        v.clearTimeout(g), r.removeEventListener("animationstart", C), r.removeEventListener("animationcancel", x), r.removeEventListener("animationend", x);
      };
    } else
      m("ANIMATION_END");
  }, [r, m]), {
    isPresent: ["mounted", "unmountSuspended"].includes(p),
    ref: _.useCallback((g) => {
      i.current = g ? getComputedStyle(g) : null, o(g);
    }, [])
  };
}
function rl(n) {
  return (n == null ? void 0 : n.animationName) || "none";
}
function ow(n) {
  var i, a;
  let r = (i = Object.getOwnPropertyDescriptor(n.props, "ref")) == null ? void 0 : i.get, o = r && "isReactWarning" in r && r.isReactWarning;
  return o ? n.ref : (r = (a = Object.getOwnPropertyDescriptor(n, "ref")) == null ? void 0 : a.get, o = r && "isReactWarning" in r && r.isReactWarning, o ? n.props.ref : n.props.ref || n.ref);
}
var sw = Oh[" useId ".trim().toString()] || (() => {
}), iw = 0;
function Hs(n) {
  const [r, o] = _.useState(sw());
  return kt(() => {
    o((i) => i ?? String(iw++));
  }, [n]), n || (r ? `radix-${r}` : "");
}
var Tl = "Collapsible", [lw] = Xr(Tl), [aw, vc] = lw(Tl), qh = _.forwardRef(
  (n, r) => {
    const {
      __scopeCollapsible: o,
      open: i,
      defaultOpen: a,
      disabled: u,
      onOpenChange: f,
      ...p
    } = n, [m, g] = kr({
      prop: i,
      defaultProp: a ?? !1,
      onChange: f,
      caller: Tl
    });
    return /* @__PURE__ */ k.jsx(
      aw,
      {
        scope: o,
        disabled: u,
        contentId: Hs(),
        open: m,
        onOpenToggle: _.useCallback(() => g((v) => !v), [g]),
        children: /* @__PURE__ */ k.jsx(
          Ze.div,
          {
            "data-state": xc(m),
            "data-disabled": u ? "" : void 0,
            ...p,
            ref: r
          }
        )
      }
    );
  }
);
qh.displayName = Tl;
var Jh = "CollapsibleTrigger", em = _.forwardRef(
  (n, r) => {
    const { __scopeCollapsible: o, ...i } = n, a = vc(Jh, o);
    return /* @__PURE__ */ k.jsx(
      Ze.button,
      {
        type: "button",
        "aria-controls": a.contentId,
        "aria-expanded": a.open || !1,
        "data-state": xc(a.open),
        "data-disabled": a.disabled ? "" : void 0,
        disabled: a.disabled,
        ...i,
        ref: r,
        onClick: Qe(n.onClick, a.onOpenToggle)
      }
    );
  }
);
em.displayName = Jh;
var yc = "CollapsibleContent", tm = _.forwardRef(
  (n, r) => {
    const { forceMount: o, ...i } = n, a = vc(yc, n.__scopeCollapsible);
    return /* @__PURE__ */ k.jsx(Xh, { present: o || a.open, children: ({ present: u }) => /* @__PURE__ */ k.jsx(uw, { ...i, ref: r, present: u }) });
  }
);
tm.displayName = yc;
var uw = _.forwardRef((n, r) => {
  const { __scopeCollapsible: o, present: i, children: a, ...u } = n, f = vc(yc, o), [p, m] = _.useState(i), g = _.useRef(null), v = st(r, g), x = _.useRef(0), C = x.current, E = _.useRef(0), O = E.current, w = f.open || p, y = _.useRef(w), A = _.useRef(void 0);
  return _.useEffect(() => {
    const N = requestAnimationFrame(() => y.current = !1);
    return () => cancelAnimationFrame(N);
  }, []), kt(() => {
    const N = g.current;
    if (N) {
      A.current = A.current || {
        transitionDuration: N.style.transitionDuration,
        animationName: N.style.animationName
      }, N.style.transitionDuration = "0s", N.style.animationName = "none";
      const I = N.getBoundingClientRect();
      x.current = I.height, E.current = I.width, y.current || (N.style.transitionDuration = A.current.transitionDuration, N.style.animationName = A.current.animationName), m(i);
    }
  }, [f.open, i]), /* @__PURE__ */ k.jsx(
    Ze.div,
    {
      "data-state": xc(f.open),
      "data-disabled": f.disabled ? "" : void 0,
      id: f.contentId,
      hidden: !w,
      ...u,
      ref: v,
      style: {
        "--radix-collapsible-content-height": C ? `${C}px` : void 0,
        "--radix-collapsible-content-width": O ? `${O}px` : void 0,
        ...n.style
      },
      children: w && a
    }
  );
});
function xc(n) {
  return n ? "open" : "closed";
}
var cw = qh, dw = em, fw = tm;
function eh(n, [r, o]) {
  return Math.min(o, Math.max(r, n));
}
function nm(n) {
  const r = n + "CollectionProvider", [o, i] = Xr(r), [a, u] = o(
    r,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), f = (w) => {
    const { scope: y, children: A } = w, N = ge.useRef(null), I = ge.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ k.jsx(a, { scope: y, itemMap: I, collectionRef: N, children: A });
  };
  f.displayName = r;
  const p = n + "CollectionSlot", m = /* @__PURE__ */ _l(p), g = ge.forwardRef(
    (w, y) => {
      const { scope: A, children: N } = w, I = u(p, A), L = st(y, I.collectionRef);
      return /* @__PURE__ */ k.jsx(m, { ref: L, children: N });
    }
  );
  g.displayName = p;
  const v = n + "CollectionItemSlot", x = "data-radix-collection-item", C = /* @__PURE__ */ _l(v), E = ge.forwardRef(
    (w, y) => {
      const { scope: A, children: N, ...I } = w, L = ge.useRef(null), B = st(y, L), K = u(v, A);
      return ge.useEffect(() => (K.itemMap.set(L, { ref: L, ...I }), () => void K.itemMap.delete(L))), /* @__PURE__ */ k.jsx(C, { [x]: "", ref: B, children: N });
    }
  );
  E.displayName = v;
  function O(w) {
    const y = u(n + "CollectionConsumer", w);
    return ge.useCallback(() => {
      const N = y.collectionRef.current;
      if (!N) return [];
      const I = Array.from(N.querySelectorAll(`[${x}]`));
      return Array.from(y.itemMap.values()).sort(
        (K, H) => I.indexOf(K.ref.current) - I.indexOf(H.ref.current)
      );
    }, [y.collectionRef, y.itemMap]);
  }
  return [
    { Provider: f, Slot: g, ItemSlot: E },
    O,
    i
  ];
}
var pw = _.createContext(void 0);
function wc(n) {
  const r = _.useContext(pw);
  return n || r || "ltr";
}
function Cr(n) {
  const r = _.useRef(n);
  return _.useEffect(() => {
    r.current = n;
  }), _.useMemo(() => (...o) => {
    var i;
    return (i = r.current) == null ? void 0 : i.call(r, ...o);
  }, []);
}
function hw(n, r = globalThis == null ? void 0 : globalThis.document) {
  const o = Cr(n);
  _.useEffect(() => {
    const i = (a) => {
      a.key === "Escape" && o(a);
    };
    return r.addEventListener("keydown", i, { capture: !0 }), () => r.removeEventListener("keydown", i, { capture: !0 });
  }, [o, r]);
}
var mw = "DismissableLayer", Yu = "dismissableLayer.update", gw = "dismissableLayer.pointerDownOutside", vw = "dismissableLayer.focusOutside", th, rm = _.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), om = _.forwardRef(
  (n, r) => {
    const {
      disableOutsidePointerEvents: o = !1,
      onEscapeKeyDown: i,
      onPointerDownOutside: a,
      onFocusOutside: u,
      onInteractOutside: f,
      onDismiss: p,
      ...m
    } = n, g = _.useContext(rm), [v, x] = _.useState(null), C = (v == null ? void 0 : v.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, E] = _.useState({}), O = st(r, (H) => x(H)), w = Array.from(g.layers), [y] = [...g.layersWithOutsidePointerEventsDisabled].slice(-1), A = w.indexOf(y), N = v ? w.indexOf(v) : -1, I = g.layersWithOutsidePointerEventsDisabled.size > 0, L = N >= A, B = ww((H) => {
      const ne = H.target, _e = [...g.branches].some((pe) => pe.contains(ne));
      !L || _e || (a == null || a(H), f == null || f(H), H.defaultPrevented || p == null || p());
    }, C), K = _w((H) => {
      const ne = H.target;
      [...g.branches].some((pe) => pe.contains(ne)) || (u == null || u(H), f == null || f(H), H.defaultPrevented || p == null || p());
    }, C);
    return hw((H) => {
      N === g.layers.size - 1 && (i == null || i(H), !H.defaultPrevented && p && (H.preventDefault(), p()));
    }, C), _.useEffect(() => {
      if (v)
        return o && (g.layersWithOutsidePointerEventsDisabled.size === 0 && (th = C.body.style.pointerEvents, C.body.style.pointerEvents = "none"), g.layersWithOutsidePointerEventsDisabled.add(v)), g.layers.add(v), nh(), () => {
          o && g.layersWithOutsidePointerEventsDisabled.size === 1 && (C.body.style.pointerEvents = th);
        };
    }, [v, C, o, g]), _.useEffect(() => () => {
      v && (g.layers.delete(v), g.layersWithOutsidePointerEventsDisabled.delete(v), nh());
    }, [v, g]), _.useEffect(() => {
      const H = () => E({});
      return document.addEventListener(Yu, H), () => document.removeEventListener(Yu, H);
    }, []), /* @__PURE__ */ k.jsx(
      Ze.div,
      {
        ...m,
        ref: O,
        style: {
          pointerEvents: I ? L ? "auto" : "none" : void 0,
          ...n.style
        },
        onFocusCapture: Qe(n.onFocusCapture, K.onFocusCapture),
        onBlurCapture: Qe(n.onBlurCapture, K.onBlurCapture),
        onPointerDownCapture: Qe(
          n.onPointerDownCapture,
          B.onPointerDownCapture
        )
      }
    );
  }
);
om.displayName = mw;
var yw = "DismissableLayerBranch", xw = _.forwardRef((n, r) => {
  const o = _.useContext(rm), i = _.useRef(null), a = st(r, i);
  return _.useEffect(() => {
    const u = i.current;
    if (u)
      return o.branches.add(u), () => {
        o.branches.delete(u);
      };
  }, [o.branches]), /* @__PURE__ */ k.jsx(Ze.div, { ...n, ref: a });
});
xw.displayName = yw;
function ww(n, r = globalThis == null ? void 0 : globalThis.document) {
  const o = Cr(n), i = _.useRef(!1), a = _.useRef(() => {
  });
  return _.useEffect(() => {
    const u = (p) => {
      if (p.target && !i.current) {
        let m = function() {
          sm(
            gw,
            o,
            g,
            { discrete: !0 }
          );
        };
        const g = { originalEvent: p };
        p.pointerType === "touch" ? (r.removeEventListener("click", a.current), a.current = m, r.addEventListener("click", a.current, { once: !0 })) : m();
      } else
        r.removeEventListener("click", a.current);
      i.current = !1;
    }, f = window.setTimeout(() => {
      r.addEventListener("pointerdown", u);
    }, 0);
    return () => {
      window.clearTimeout(f), r.removeEventListener("pointerdown", u), r.removeEventListener("click", a.current);
    };
  }, [r, o]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => i.current = !0
  };
}
function _w(n, r = globalThis == null ? void 0 : globalThis.document) {
  const o = Cr(n), i = _.useRef(!1);
  return _.useEffect(() => {
    const a = (u) => {
      u.target && !i.current && sm(vw, o, { originalEvent: u }, {
        discrete: !1
      });
    };
    return r.addEventListener("focusin", a), () => r.removeEventListener("focusin", a);
  }, [r, o]), {
    onFocusCapture: () => i.current = !0,
    onBlurCapture: () => i.current = !1
  };
}
function nh() {
  const n = new CustomEvent(Yu);
  document.dispatchEvent(n);
}
function sm(n, r, o, { discrete: i }) {
  const a = o.originalEvent.target, u = new CustomEvent(n, { bubbles: !1, cancelable: !0, detail: o });
  r && a.addEventListener(n, r, { once: !0 }), i ? tw(a, u) : a.dispatchEvent(u);
}
var Pu = 0;
function Sw() {
  _.useEffect(() => {
    const n = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", n[0] ?? rh()), document.body.insertAdjacentElement("beforeend", n[1] ?? rh()), Pu++, () => {
      Pu === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((r) => r.remove()), Pu--;
    };
  }, []);
}
function rh() {
  const n = document.createElement("span");
  return n.setAttribute("data-radix-focus-guard", ""), n.tabIndex = 0, n.style.outline = "none", n.style.opacity = "0", n.style.position = "fixed", n.style.pointerEvents = "none", n;
}
var Au = "focusScope.autoFocusOnMount", Ou = "focusScope.autoFocusOnUnmount", oh = { bubbles: !1, cancelable: !0 }, kw = "FocusScope", im = _.forwardRef((n, r) => {
  const {
    loop: o = !1,
    trapped: i = !1,
    onMountAutoFocus: a,
    onUnmountAutoFocus: u,
    ...f
  } = n, [p, m] = _.useState(null), g = Cr(a), v = Cr(u), x = _.useRef(null), C = st(r, (w) => m(w)), E = _.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  _.useEffect(() => {
    if (i) {
      let w = function(I) {
        if (E.paused || !p) return;
        const L = I.target;
        p.contains(L) ? x.current = L : yr(x.current, { select: !0 });
      }, y = function(I) {
        if (E.paused || !p) return;
        const L = I.relatedTarget;
        L !== null && (p.contains(L) || yr(x.current, { select: !0 }));
      }, A = function(I) {
        if (document.activeElement === document.body)
          for (const B of I)
            B.removedNodes.length > 0 && yr(p);
      };
      document.addEventListener("focusin", w), document.addEventListener("focusout", y);
      const N = new MutationObserver(A);
      return p && N.observe(p, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", w), document.removeEventListener("focusout", y), N.disconnect();
      };
    }
  }, [i, p, E.paused]), _.useEffect(() => {
    if (p) {
      ih.add(E);
      const w = document.activeElement;
      if (!p.contains(w)) {
        const A = new CustomEvent(Au, oh);
        p.addEventListener(Au, g), p.dispatchEvent(A), A.defaultPrevented || (Cw(Tw(lm(p)), { select: !0 }), document.activeElement === w && yr(p));
      }
      return () => {
        p.removeEventListener(Au, g), setTimeout(() => {
          const A = new CustomEvent(Ou, oh);
          p.addEventListener(Ou, v), p.dispatchEvent(A), A.defaultPrevented || yr(w ?? document.body, { select: !0 }), p.removeEventListener(Ou, v), ih.remove(E);
        }, 0);
      };
    }
  }, [p, g, v, E]);
  const O = _.useCallback(
    (w) => {
      if (!o && !i || E.paused) return;
      const y = w.key === "Tab" && !w.altKey && !w.ctrlKey && !w.metaKey, A = document.activeElement;
      if (y && A) {
        const N = w.currentTarget, [I, L] = Ew(N);
        I && L ? !w.shiftKey && A === L ? (w.preventDefault(), o && yr(I, { select: !0 })) : w.shiftKey && A === I && (w.preventDefault(), o && yr(L, { select: !0 })) : A === N && w.preventDefault();
      }
    },
    [o, i, E.paused]
  );
  return /* @__PURE__ */ k.jsx(Ze.div, { tabIndex: -1, ...f, ref: C, onKeyDown: O });
});
im.displayName = kw;
function Cw(n, { select: r = !1 } = {}) {
  const o = document.activeElement;
  for (const i of n)
    if (yr(i, { select: r }), document.activeElement !== o) return;
}
function Ew(n) {
  const r = lm(n), o = sh(r, n), i = sh(r.reverse(), n);
  return [o, i];
}
function lm(n) {
  const r = [], o = document.createTreeWalker(n, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (i) => {
      const a = i.tagName === "INPUT" && i.type === "hidden";
      return i.disabled || i.hidden || a ? NodeFilter.FILTER_SKIP : i.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; o.nextNode(); ) r.push(o.currentNode);
  return r;
}
function sh(n, r) {
  for (const o of n)
    if (!bw(o, { upTo: r })) return o;
}
function bw(n, { upTo: r }) {
  if (getComputedStyle(n).visibility === "hidden") return !0;
  for (; n; ) {
    if (r !== void 0 && n === r) return !1;
    if (getComputedStyle(n).display === "none") return !0;
    n = n.parentElement;
  }
  return !1;
}
function Rw(n) {
  return n instanceof HTMLInputElement && "select" in n;
}
function yr(n, { select: r = !1 } = {}) {
  if (n && n.focus) {
    const o = document.activeElement;
    n.focus({ preventScroll: !0 }), n !== o && Rw(n) && r && n.select();
  }
}
var ih = Nw();
function Nw() {
  let n = [];
  return {
    add(r) {
      const o = n[0];
      r !== o && (o == null || o.pause()), n = lh(n, r), n.unshift(r);
    },
    remove(r) {
      var o;
      n = lh(n, r), (o = n[0]) == null || o.resume();
    }
  };
}
function lh(n, r) {
  const o = [...n], i = o.indexOf(r);
  return i !== -1 && o.splice(i, 1), o;
}
function Tw(n) {
  return n.filter((r) => r.tagName !== "A");
}
const Pw = ["top", "right", "bottom", "left"], Er = Math.min, Zt = Math.max, Sl = Math.round, ol = Math.floor, Pn = (n) => ({
  x: n,
  y: n
}), Aw = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Xu(n, r, o) {
  return Zt(n, Er(r, o));
}
function Zn(n, r) {
  return typeof n == "function" ? n(r) : n;
}
function Gn(n) {
  return n.split("-")[0];
}
function $o(n) {
  return n.split("-")[1];
}
function _c(n) {
  return n === "x" ? "y" : "x";
}
function Sc(n) {
  return n === "y" ? "height" : "width";
}
function Nn(n) {
  const r = n[0];
  return r === "t" || r === "b" ? "y" : "x";
}
function kc(n) {
  return _c(Nn(n));
}
function Ow(n, r, o) {
  o === void 0 && (o = !1);
  const i = $o(n), a = kc(n), u = Sc(a);
  let f = a === "x" ? i === (o ? "end" : "start") ? "right" : "left" : i === "start" ? "bottom" : "top";
  return r.reference[u] > r.floating[u] && (f = kl(f)), [f, kl(f)];
}
function Iw(n) {
  const r = kl(n);
  return [qu(n), r, qu(r)];
}
function qu(n) {
  return n.includes("start") ? n.replace("start", "end") : n.replace("end", "start");
}
const ah = ["left", "right"], uh = ["right", "left"], Mw = ["top", "bottom"], jw = ["bottom", "top"];
function Lw(n, r, o) {
  switch (n) {
    case "top":
    case "bottom":
      return o ? r ? uh : ah : r ? ah : uh;
    case "left":
    case "right":
      return r ? Mw : jw;
    default:
      return [];
  }
}
function Dw(n, r, o, i) {
  const a = $o(n);
  let u = Lw(Gn(n), o === "start", i);
  return a && (u = u.map((f) => f + "-" + a), r && (u = u.concat(u.map(qu)))), u;
}
function kl(n) {
  const r = Gn(n);
  return Aw[r] + n.slice(r.length);
}
function Fw(n) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...n
  };
}
function am(n) {
  return typeof n != "number" ? Fw(n) : {
    top: n,
    right: n,
    bottom: n,
    left: n
  };
}
function Cl(n) {
  const {
    x: r,
    y: o,
    width: i,
    height: a
  } = n;
  return {
    width: i,
    height: a,
    top: o,
    left: r,
    right: r + i,
    bottom: o + a,
    x: r,
    y: o
  };
}
function ch(n, r, o) {
  let {
    reference: i,
    floating: a
  } = n;
  const u = Nn(r), f = kc(r), p = Sc(f), m = Gn(r), g = u === "y", v = i.x + i.width / 2 - a.width / 2, x = i.y + i.height / 2 - a.height / 2, C = i[p] / 2 - a[p] / 2;
  let E;
  switch (m) {
    case "top":
      E = {
        x: v,
        y: i.y - a.height
      };
      break;
    case "bottom":
      E = {
        x: v,
        y: i.y + i.height
      };
      break;
    case "right":
      E = {
        x: i.x + i.width,
        y: x
      };
      break;
    case "left":
      E = {
        x: i.x - a.width,
        y: x
      };
      break;
    default:
      E = {
        x: i.x,
        y: i.y
      };
  }
  switch ($o(r)) {
    case "start":
      E[f] -= C * (o && g ? -1 : 1);
      break;
    case "end":
      E[f] += C * (o && g ? -1 : 1);
      break;
  }
  return E;
}
async function Vw(n, r) {
  var o;
  r === void 0 && (r = {});
  const {
    x: i,
    y: a,
    platform: u,
    rects: f,
    elements: p,
    strategy: m
  } = n, {
    boundary: g = "clippingAncestors",
    rootBoundary: v = "viewport",
    elementContext: x = "floating",
    altBoundary: C = !1,
    padding: E = 0
  } = Zn(r, n), O = am(E), y = p[C ? x === "floating" ? "reference" : "floating" : x], A = Cl(await u.getClippingRect({
    element: (o = await (u.isElement == null ? void 0 : u.isElement(y))) == null || o ? y : y.contextElement || await (u.getDocumentElement == null ? void 0 : u.getDocumentElement(p.floating)),
    boundary: g,
    rootBoundary: v,
    strategy: m
  })), N = x === "floating" ? {
    x: i,
    y: a,
    width: f.floating.width,
    height: f.floating.height
  } : f.reference, I = await (u.getOffsetParent == null ? void 0 : u.getOffsetParent(p.floating)), L = await (u.isElement == null ? void 0 : u.isElement(I)) ? await (u.getScale == null ? void 0 : u.getScale(I)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, B = Cl(u.convertOffsetParentRelativeRectToViewportRelativeRect ? await u.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: p,
    rect: N,
    offsetParent: I,
    strategy: m
  }) : N);
  return {
    top: (A.top - B.top + O.top) / L.y,
    bottom: (B.bottom - A.bottom + O.bottom) / L.y,
    left: (A.left - B.left + O.left) / L.x,
    right: (B.right - A.right + O.right) / L.x
  };
}
const zw = 50, Bw = async (n, r, o) => {
  const {
    placement: i = "bottom",
    strategy: a = "absolute",
    middleware: u = [],
    platform: f
  } = o, p = f.detectOverflow ? f : {
    ...f,
    detectOverflow: Vw
  }, m = await (f.isRTL == null ? void 0 : f.isRTL(r));
  let g = await f.getElementRects({
    reference: n,
    floating: r,
    strategy: a
  }), {
    x: v,
    y: x
  } = ch(g, i, m), C = i, E = 0;
  const O = {};
  for (let w = 0; w < u.length; w++) {
    const y = u[w];
    if (!y)
      continue;
    const {
      name: A,
      fn: N
    } = y, {
      x: I,
      y: L,
      data: B,
      reset: K
    } = await N({
      x: v,
      y: x,
      initialPlacement: i,
      placement: C,
      strategy: a,
      middlewareData: O,
      rects: g,
      platform: p,
      elements: {
        reference: n,
        floating: r
      }
    });
    v = I ?? v, x = L ?? x, O[A] = {
      ...O[A],
      ...B
    }, K && E < zw && (E++, typeof K == "object" && (K.placement && (C = K.placement), K.rects && (g = K.rects === !0 ? await f.getElementRects({
      reference: n,
      floating: r,
      strategy: a
    }) : K.rects), {
      x: v,
      y: x
    } = ch(g, C, m)), w = -1);
  }
  return {
    x: v,
    y: x,
    placement: C,
    strategy: a,
    middlewareData: O
  };
}, Uw = (n) => ({
  name: "arrow",
  options: n,
  async fn(r) {
    const {
      x: o,
      y: i,
      placement: a,
      rects: u,
      platform: f,
      elements: p,
      middlewareData: m
    } = r, {
      element: g,
      padding: v = 0
    } = Zn(n, r) || {};
    if (g == null)
      return {};
    const x = am(v), C = {
      x: o,
      y: i
    }, E = kc(a), O = Sc(E), w = await f.getDimensions(g), y = E === "y", A = y ? "top" : "left", N = y ? "bottom" : "right", I = y ? "clientHeight" : "clientWidth", L = u.reference[O] + u.reference[E] - C[E] - u.floating[O], B = C[E] - u.reference[E], K = await (f.getOffsetParent == null ? void 0 : f.getOffsetParent(g));
    let H = K ? K[I] : 0;
    (!H || !await (f.isElement == null ? void 0 : f.isElement(K))) && (H = p.floating[I] || u.floating[O]);
    const ne = L / 2 - B / 2, _e = H / 2 - w[O] / 2 - 1, pe = Er(x[A], _e), Ee = Er(x[N], _e), $ = pe, te = H - w[O] - Ee, ce = H / 2 - w[O] / 2 + ne, Se = Xu($, ce, te), oe = !m.arrow && $o(a) != null && ce !== Se && u.reference[O] / 2 - (ce < $ ? pe : Ee) - w[O] / 2 < 0, le = oe ? ce < $ ? ce - $ : ce - te : 0;
    return {
      [E]: C[E] + le,
      data: {
        [E]: Se,
        centerOffset: ce - Se - le,
        ...oe && {
          alignmentOffset: le
        }
      },
      reset: oe
    };
  }
}), $w = function(n) {
  return n === void 0 && (n = {}), {
    name: "flip",
    options: n,
    async fn(r) {
      var o, i;
      const {
        placement: a,
        middlewareData: u,
        rects: f,
        initialPlacement: p,
        platform: m,
        elements: g
      } = r, {
        mainAxis: v = !0,
        crossAxis: x = !0,
        fallbackPlacements: C,
        fallbackStrategy: E = "bestFit",
        fallbackAxisSideDirection: O = "none",
        flipAlignment: w = !0,
        ...y
      } = Zn(n, r);
      if ((o = u.arrow) != null && o.alignmentOffset)
        return {};
      const A = Gn(a), N = Nn(p), I = Gn(p) === p, L = await (m.isRTL == null ? void 0 : m.isRTL(g.floating)), B = C || (I || !w ? [kl(p)] : Iw(p)), K = O !== "none";
      !C && K && B.push(...Dw(p, w, O, L));
      const H = [p, ...B], ne = await m.detectOverflow(r, y), _e = [];
      let pe = ((i = u.flip) == null ? void 0 : i.overflows) || [];
      if (v && _e.push(ne[A]), x) {
        const ce = Ow(a, f, L);
        _e.push(ne[ce[0]], ne[ce[1]]);
      }
      if (pe = [...pe, {
        placement: a,
        overflows: _e
      }], !_e.every((ce) => ce <= 0)) {
        var Ee, $;
        const ce = (((Ee = u.flip) == null ? void 0 : Ee.index) || 0) + 1, Se = H[ce];
        if (Se && (!(x === "alignment" ? N !== Nn(Se) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        pe.every((z) => Nn(z.placement) === N ? z.overflows[0] > 0 : !0)))
          return {
            data: {
              index: ce,
              overflows: pe
            },
            reset: {
              placement: Se
            }
          };
        let oe = ($ = pe.filter((le) => le.overflows[0] <= 0).sort((le, z) => le.overflows[1] - z.overflows[1])[0]) == null ? void 0 : $.placement;
        if (!oe)
          switch (E) {
            case "bestFit": {
              var te;
              const le = (te = pe.filter((z) => {
                if (K) {
                  const J = Nn(z.placement);
                  return J === N || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  J === "y";
                }
                return !0;
              }).map((z) => [z.placement, z.overflows.filter((J) => J > 0).reduce((J, Y) => J + Y, 0)]).sort((z, J) => z[1] - J[1])[0]) == null ? void 0 : te[0];
              le && (oe = le);
              break;
            }
            case "initialPlacement":
              oe = p;
              break;
          }
        if (a !== oe)
          return {
            reset: {
              placement: oe
            }
          };
      }
      return {};
    }
  };
};
function dh(n, r) {
  return {
    top: n.top - r.height,
    right: n.right - r.width,
    bottom: n.bottom - r.height,
    left: n.left - r.width
  };
}
function fh(n) {
  return Pw.some((r) => n[r] >= 0);
}
const Ww = function(n) {
  return n === void 0 && (n = {}), {
    name: "hide",
    options: n,
    async fn(r) {
      const {
        rects: o,
        platform: i
      } = r, {
        strategy: a = "referenceHidden",
        ...u
      } = Zn(n, r);
      switch (a) {
        case "referenceHidden": {
          const f = await i.detectOverflow(r, {
            ...u,
            elementContext: "reference"
          }), p = dh(f, o.reference);
          return {
            data: {
              referenceHiddenOffsets: p,
              referenceHidden: fh(p)
            }
          };
        }
        case "escaped": {
          const f = await i.detectOverflow(r, {
            ...u,
            altBoundary: !0
          }), p = dh(f, o.floating);
          return {
            data: {
              escapedOffsets: p,
              escaped: fh(p)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, um = /* @__PURE__ */ new Set(["left", "top"]);
async function Hw(n, r) {
  const {
    placement: o,
    platform: i,
    elements: a
  } = n, u = await (i.isRTL == null ? void 0 : i.isRTL(a.floating)), f = Gn(o), p = $o(o), m = Nn(o) === "y", g = um.has(f) ? -1 : 1, v = u && m ? -1 : 1, x = Zn(r, n);
  let {
    mainAxis: C,
    crossAxis: E,
    alignmentAxis: O
  } = typeof x == "number" ? {
    mainAxis: x,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: x.mainAxis || 0,
    crossAxis: x.crossAxis || 0,
    alignmentAxis: x.alignmentAxis
  };
  return p && typeof O == "number" && (E = p === "end" ? O * -1 : O), m ? {
    x: E * v,
    y: C * g
  } : {
    x: C * g,
    y: E * v
  };
}
const Zw = function(n) {
  return n === void 0 && (n = 0), {
    name: "offset",
    options: n,
    async fn(r) {
      var o, i;
      const {
        x: a,
        y: u,
        placement: f,
        middlewareData: p
      } = r, m = await Hw(r, n);
      return f === ((o = p.offset) == null ? void 0 : o.placement) && (i = p.arrow) != null && i.alignmentOffset ? {} : {
        x: a + m.x,
        y: u + m.y,
        data: {
          ...m,
          placement: f
        }
      };
    }
  };
}, Gw = function(n) {
  return n === void 0 && (n = {}), {
    name: "shift",
    options: n,
    async fn(r) {
      const {
        x: o,
        y: i,
        placement: a,
        platform: u
      } = r, {
        mainAxis: f = !0,
        crossAxis: p = !1,
        limiter: m = {
          fn: (A) => {
            let {
              x: N,
              y: I
            } = A;
            return {
              x: N,
              y: I
            };
          }
        },
        ...g
      } = Zn(n, r), v = {
        x: o,
        y: i
      }, x = await u.detectOverflow(r, g), C = Nn(Gn(a)), E = _c(C);
      let O = v[E], w = v[C];
      if (f) {
        const A = E === "y" ? "top" : "left", N = E === "y" ? "bottom" : "right", I = O + x[A], L = O - x[N];
        O = Xu(I, O, L);
      }
      if (p) {
        const A = C === "y" ? "top" : "left", N = C === "y" ? "bottom" : "right", I = w + x[A], L = w - x[N];
        w = Xu(I, w, L);
      }
      const y = m.fn({
        ...r,
        [E]: O,
        [C]: w
      });
      return {
        ...y,
        data: {
          x: y.x - o,
          y: y.y - i,
          enabled: {
            [E]: f,
            [C]: p
          }
        }
      };
    }
  };
}, Kw = function(n) {
  return n === void 0 && (n = {}), {
    options: n,
    fn(r) {
      const {
        x: o,
        y: i,
        placement: a,
        rects: u,
        middlewareData: f
      } = r, {
        offset: p = 0,
        mainAxis: m = !0,
        crossAxis: g = !0
      } = Zn(n, r), v = {
        x: o,
        y: i
      }, x = Nn(a), C = _c(x);
      let E = v[C], O = v[x];
      const w = Zn(p, r), y = typeof w == "number" ? {
        mainAxis: w,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...w
      };
      if (m) {
        const I = C === "y" ? "height" : "width", L = u.reference[C] - u.floating[I] + y.mainAxis, B = u.reference[C] + u.reference[I] - y.mainAxis;
        E < L ? E = L : E > B && (E = B);
      }
      if (g) {
        var A, N;
        const I = C === "y" ? "width" : "height", L = um.has(Gn(a)), B = u.reference[x] - u.floating[I] + (L && ((A = f.offset) == null ? void 0 : A[x]) || 0) + (L ? 0 : y.crossAxis), K = u.reference[x] + u.reference[I] + (L ? 0 : ((N = f.offset) == null ? void 0 : N[x]) || 0) - (L ? y.crossAxis : 0);
        O < B ? O = B : O > K && (O = K);
      }
      return {
        [C]: E,
        [x]: O
      };
    }
  };
}, Qw = function(n) {
  return n === void 0 && (n = {}), {
    name: "size",
    options: n,
    async fn(r) {
      var o, i;
      const {
        placement: a,
        rects: u,
        platform: f,
        elements: p
      } = r, {
        apply: m = () => {
        },
        ...g
      } = Zn(n, r), v = await f.detectOverflow(r, g), x = Gn(a), C = $o(a), E = Nn(a) === "y", {
        width: O,
        height: w
      } = u.floating;
      let y, A;
      x === "top" || x === "bottom" ? (y = x, A = C === (await (f.isRTL == null ? void 0 : f.isRTL(p.floating)) ? "start" : "end") ? "left" : "right") : (A = x, y = C === "end" ? "top" : "bottom");
      const N = w - v.top - v.bottom, I = O - v.left - v.right, L = Er(w - v[y], N), B = Er(O - v[A], I), K = !r.middlewareData.shift;
      let H = L, ne = B;
      if ((o = r.middlewareData.shift) != null && o.enabled.x && (ne = I), (i = r.middlewareData.shift) != null && i.enabled.y && (H = N), K && !C) {
        const pe = Zt(v.left, 0), Ee = Zt(v.right, 0), $ = Zt(v.top, 0), te = Zt(v.bottom, 0);
        E ? ne = O - 2 * (pe !== 0 || Ee !== 0 ? pe + Ee : Zt(v.left, v.right)) : H = w - 2 * ($ !== 0 || te !== 0 ? $ + te : Zt(v.top, v.bottom));
      }
      await m({
        ...r,
        availableWidth: ne,
        availableHeight: H
      });
      const _e = await f.getDimensions(p.floating);
      return O !== _e.width || w !== _e.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Pl() {
  return typeof window < "u";
}
function Wo(n) {
  return cm(n) ? (n.nodeName || "").toLowerCase() : "#document";
}
function Kt(n) {
  var r;
  return (n == null || (r = n.ownerDocument) == null ? void 0 : r.defaultView) || window;
}
function An(n) {
  var r;
  return (r = (cm(n) ? n.ownerDocument : n.document) || window.document) == null ? void 0 : r.documentElement;
}
function cm(n) {
  return Pl() ? n instanceof Node || n instanceof Kt(n).Node : !1;
}
function xn(n) {
  return Pl() ? n instanceof Element || n instanceof Kt(n).Element : !1;
}
function Kn(n) {
  return Pl() ? n instanceof HTMLElement || n instanceof Kt(n).HTMLElement : !1;
}
function ph(n) {
  return !Pl() || typeof ShadowRoot > "u" ? !1 : n instanceof ShadowRoot || n instanceof Kt(n).ShadowRoot;
}
function Zs(n) {
  const {
    overflow: r,
    overflowX: o,
    overflowY: i,
    display: a
  } = wn(n);
  return /auto|scroll|overlay|hidden|clip/.test(r + i + o) && a !== "inline" && a !== "contents";
}
function Yw(n) {
  return /^(table|td|th)$/.test(Wo(n));
}
function Al(n) {
  try {
    if (n.matches(":popover-open"))
      return !0;
  } catch {
  }
  try {
    return n.matches(":modal");
  } catch {
    return !1;
  }
}
const Xw = /transform|translate|scale|rotate|perspective|filter/, qw = /paint|layout|strict|content/, $r = (n) => !!n && n !== "none";
let Iu;
function Cc(n) {
  const r = xn(n) ? wn(n) : n;
  return $r(r.transform) || $r(r.translate) || $r(r.scale) || $r(r.rotate) || $r(r.perspective) || !Ec() && ($r(r.backdropFilter) || $r(r.filter)) || Xw.test(r.willChange || "") || qw.test(r.contain || "");
}
function Jw(n) {
  let r = br(n);
  for (; Kn(r) && !Uo(r); ) {
    if (Cc(r))
      return r;
    if (Al(r))
      return null;
    r = br(r);
  }
  return null;
}
function Ec() {
  return Iu == null && (Iu = typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")), Iu;
}
function Uo(n) {
  return /^(html|body|#document)$/.test(Wo(n));
}
function wn(n) {
  return Kt(n).getComputedStyle(n);
}
function Ol(n) {
  return xn(n) ? {
    scrollLeft: n.scrollLeft,
    scrollTop: n.scrollTop
  } : {
    scrollLeft: n.scrollX,
    scrollTop: n.scrollY
  };
}
function br(n) {
  if (Wo(n) === "html")
    return n;
  const r = (
    // Step into the shadow DOM of the parent of a slotted node.
    n.assignedSlot || // DOM Element detected.
    n.parentNode || // ShadowRoot detected.
    ph(n) && n.host || // Fallback.
    An(n)
  );
  return ph(r) ? r.host : r;
}
function dm(n) {
  const r = br(n);
  return Uo(r) ? n.ownerDocument ? n.ownerDocument.body : n.body : Kn(r) && Zs(r) ? r : dm(r);
}
function Us(n, r, o) {
  var i;
  r === void 0 && (r = []), o === void 0 && (o = !0);
  const a = dm(n), u = a === ((i = n.ownerDocument) == null ? void 0 : i.body), f = Kt(a);
  if (u) {
    const p = Ju(f);
    return r.concat(f, f.visualViewport || [], Zs(a) ? a : [], p && o ? Us(p) : []);
  } else
    return r.concat(a, Us(a, [], o));
}
function Ju(n) {
  return n.parent && Object.getPrototypeOf(n.parent) ? n.frameElement : null;
}
function fm(n) {
  const r = wn(n);
  let o = parseFloat(r.width) || 0, i = parseFloat(r.height) || 0;
  const a = Kn(n), u = a ? n.offsetWidth : o, f = a ? n.offsetHeight : i, p = Sl(o) !== u || Sl(i) !== f;
  return p && (o = u, i = f), {
    width: o,
    height: i,
    $: p
  };
}
function bc(n) {
  return xn(n) ? n : n.contextElement;
}
function Mo(n) {
  const r = bc(n);
  if (!Kn(r))
    return Pn(1);
  const o = r.getBoundingClientRect(), {
    width: i,
    height: a,
    $: u
  } = fm(r);
  let f = (u ? Sl(o.width) : o.width) / i, p = (u ? Sl(o.height) : o.height) / a;
  return (!f || !Number.isFinite(f)) && (f = 1), (!p || !Number.isFinite(p)) && (p = 1), {
    x: f,
    y: p
  };
}
const e0 = /* @__PURE__ */ Pn(0);
function pm(n) {
  const r = Kt(n);
  return !Ec() || !r.visualViewport ? e0 : {
    x: r.visualViewport.offsetLeft,
    y: r.visualViewport.offsetTop
  };
}
function t0(n, r, o) {
  return r === void 0 && (r = !1), !o || r && o !== Kt(n) ? !1 : r;
}
function Kr(n, r, o, i) {
  r === void 0 && (r = !1), o === void 0 && (o = !1);
  const a = n.getBoundingClientRect(), u = bc(n);
  let f = Pn(1);
  r && (i ? xn(i) && (f = Mo(i)) : f = Mo(n));
  const p = t0(u, o, i) ? pm(u) : Pn(0);
  let m = (a.left + p.x) / f.x, g = (a.top + p.y) / f.y, v = a.width / f.x, x = a.height / f.y;
  if (u) {
    const C = Kt(u), E = i && xn(i) ? Kt(i) : i;
    let O = C, w = Ju(O);
    for (; w && i && E !== O; ) {
      const y = Mo(w), A = w.getBoundingClientRect(), N = wn(w), I = A.left + (w.clientLeft + parseFloat(N.paddingLeft)) * y.x, L = A.top + (w.clientTop + parseFloat(N.paddingTop)) * y.y;
      m *= y.x, g *= y.y, v *= y.x, x *= y.y, m += I, g += L, O = Kt(w), w = Ju(O);
    }
  }
  return Cl({
    width: v,
    height: x,
    x: m,
    y: g
  });
}
function Il(n, r) {
  const o = Ol(n).scrollLeft;
  return r ? r.left + o : Kr(An(n)).left + o;
}
function hm(n, r) {
  const o = n.getBoundingClientRect(), i = o.left + r.scrollLeft - Il(n, o), a = o.top + r.scrollTop;
  return {
    x: i,
    y: a
  };
}
function n0(n) {
  let {
    elements: r,
    rect: o,
    offsetParent: i,
    strategy: a
  } = n;
  const u = a === "fixed", f = An(i), p = r ? Al(r.floating) : !1;
  if (i === f || p && u)
    return o;
  let m = {
    scrollLeft: 0,
    scrollTop: 0
  }, g = Pn(1);
  const v = Pn(0), x = Kn(i);
  if ((x || !x && !u) && ((Wo(i) !== "body" || Zs(f)) && (m = Ol(i)), x)) {
    const E = Kr(i);
    g = Mo(i), v.x = E.x + i.clientLeft, v.y = E.y + i.clientTop;
  }
  const C = f && !x && !u ? hm(f, m) : Pn(0);
  return {
    width: o.width * g.x,
    height: o.height * g.y,
    x: o.x * g.x - m.scrollLeft * g.x + v.x + C.x,
    y: o.y * g.y - m.scrollTop * g.y + v.y + C.y
  };
}
function r0(n) {
  return Array.from(n.getClientRects());
}
function o0(n) {
  const r = An(n), o = Ol(n), i = n.ownerDocument.body, a = Zt(r.scrollWidth, r.clientWidth, i.scrollWidth, i.clientWidth), u = Zt(r.scrollHeight, r.clientHeight, i.scrollHeight, i.clientHeight);
  let f = -o.scrollLeft + Il(n);
  const p = -o.scrollTop;
  return wn(i).direction === "rtl" && (f += Zt(r.clientWidth, i.clientWidth) - a), {
    width: a,
    height: u,
    x: f,
    y: p
  };
}
const hh = 25;
function s0(n, r) {
  const o = Kt(n), i = An(n), a = o.visualViewport;
  let u = i.clientWidth, f = i.clientHeight, p = 0, m = 0;
  if (a) {
    u = a.width, f = a.height;
    const v = Ec();
    (!v || v && r === "fixed") && (p = a.offsetLeft, m = a.offsetTop);
  }
  const g = Il(i);
  if (g <= 0) {
    const v = i.ownerDocument, x = v.body, C = getComputedStyle(x), E = v.compatMode === "CSS1Compat" && parseFloat(C.marginLeft) + parseFloat(C.marginRight) || 0, O = Math.abs(i.clientWidth - x.clientWidth - E);
    O <= hh && (u -= O);
  } else g <= hh && (u += g);
  return {
    width: u,
    height: f,
    x: p,
    y: m
  };
}
function i0(n, r) {
  const o = Kr(n, !0, r === "fixed"), i = o.top + n.clientTop, a = o.left + n.clientLeft, u = Kn(n) ? Mo(n) : Pn(1), f = n.clientWidth * u.x, p = n.clientHeight * u.y, m = a * u.x, g = i * u.y;
  return {
    width: f,
    height: p,
    x: m,
    y: g
  };
}
function mh(n, r, o) {
  let i;
  if (r === "viewport")
    i = s0(n, o);
  else if (r === "document")
    i = o0(An(n));
  else if (xn(r))
    i = i0(r, o);
  else {
    const a = pm(n);
    i = {
      x: r.x - a.x,
      y: r.y - a.y,
      width: r.width,
      height: r.height
    };
  }
  return Cl(i);
}
function mm(n, r) {
  const o = br(n);
  return o === r || !xn(o) || Uo(o) ? !1 : wn(o).position === "fixed" || mm(o, r);
}
function l0(n, r) {
  const o = r.get(n);
  if (o)
    return o;
  let i = Us(n, [], !1).filter((p) => xn(p) && Wo(p) !== "body"), a = null;
  const u = wn(n).position === "fixed";
  let f = u ? br(n) : n;
  for (; xn(f) && !Uo(f); ) {
    const p = wn(f), m = Cc(f);
    !m && p.position === "fixed" && (a = null), (u ? !m && !a : !m && p.position === "static" && !!a && (a.position === "absolute" || a.position === "fixed") || Zs(f) && !m && mm(n, f)) ? i = i.filter((v) => v !== f) : a = p, f = br(f);
  }
  return r.set(n, i), i;
}
function a0(n) {
  let {
    element: r,
    boundary: o,
    rootBoundary: i,
    strategy: a
  } = n;
  const f = [...o === "clippingAncestors" ? Al(r) ? [] : l0(r, this._c) : [].concat(o), i], p = mh(r, f[0], a);
  let m = p.top, g = p.right, v = p.bottom, x = p.left;
  for (let C = 1; C < f.length; C++) {
    const E = mh(r, f[C], a);
    m = Zt(E.top, m), g = Er(E.right, g), v = Er(E.bottom, v), x = Zt(E.left, x);
  }
  return {
    width: g - x,
    height: v - m,
    x,
    y: m
  };
}
function u0(n) {
  const {
    width: r,
    height: o
  } = fm(n);
  return {
    width: r,
    height: o
  };
}
function c0(n, r, o) {
  const i = Kn(r), a = An(r), u = o === "fixed", f = Kr(n, !0, u, r);
  let p = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const m = Pn(0);
  function g() {
    m.x = Il(a);
  }
  if (i || !i && !u)
    if ((Wo(r) !== "body" || Zs(a)) && (p = Ol(r)), i) {
      const E = Kr(r, !0, u, r);
      m.x = E.x + r.clientLeft, m.y = E.y + r.clientTop;
    } else a && g();
  u && !i && a && g();
  const v = a && !i && !u ? hm(a, p) : Pn(0), x = f.left + p.scrollLeft - m.x - v.x, C = f.top + p.scrollTop - m.y - v.y;
  return {
    x,
    y: C,
    width: f.width,
    height: f.height
  };
}
function Mu(n) {
  return wn(n).position === "static";
}
function gh(n, r) {
  if (!Kn(n) || wn(n).position === "fixed")
    return null;
  if (r)
    return r(n);
  let o = n.offsetParent;
  return An(n) === o && (o = o.ownerDocument.body), o;
}
function gm(n, r) {
  const o = Kt(n);
  if (Al(n))
    return o;
  if (!Kn(n)) {
    let a = br(n);
    for (; a && !Uo(a); ) {
      if (xn(a) && !Mu(a))
        return a;
      a = br(a);
    }
    return o;
  }
  let i = gh(n, r);
  for (; i && Yw(i) && Mu(i); )
    i = gh(i, r);
  return i && Uo(i) && Mu(i) && !Cc(i) ? o : i || Jw(n) || o;
}
const d0 = async function(n) {
  const r = this.getOffsetParent || gm, o = this.getDimensions, i = await o(n.floating);
  return {
    reference: c0(n.reference, await r(n.floating), n.strategy),
    floating: {
      x: 0,
      y: 0,
      width: i.width,
      height: i.height
    }
  };
};
function f0(n) {
  return wn(n).direction === "rtl";
}
const p0 = {
  convertOffsetParentRelativeRectToViewportRelativeRect: n0,
  getDocumentElement: An,
  getClippingRect: a0,
  getOffsetParent: gm,
  getElementRects: d0,
  getClientRects: r0,
  getDimensions: u0,
  getScale: Mo,
  isElement: xn,
  isRTL: f0
};
function vm(n, r) {
  return n.x === r.x && n.y === r.y && n.width === r.width && n.height === r.height;
}
function h0(n, r) {
  let o = null, i;
  const a = An(n);
  function u() {
    var p;
    clearTimeout(i), (p = o) == null || p.disconnect(), o = null;
  }
  function f(p, m) {
    p === void 0 && (p = !1), m === void 0 && (m = 1), u();
    const g = n.getBoundingClientRect(), {
      left: v,
      top: x,
      width: C,
      height: E
    } = g;
    if (p || r(), !C || !E)
      return;
    const O = ol(x), w = ol(a.clientWidth - (v + C)), y = ol(a.clientHeight - (x + E)), A = ol(v), I = {
      rootMargin: -O + "px " + -w + "px " + -y + "px " + -A + "px",
      threshold: Zt(0, Er(1, m)) || 1
    };
    let L = !0;
    function B(K) {
      const H = K[0].intersectionRatio;
      if (H !== m) {
        if (!L)
          return f();
        H ? f(!1, H) : i = setTimeout(() => {
          f(!1, 1e-7);
        }, 1e3);
      }
      H === 1 && !vm(g, n.getBoundingClientRect()) && f(), L = !1;
    }
    try {
      o = new IntersectionObserver(B, {
        ...I,
        // Handle <iframe>s
        root: a.ownerDocument
      });
    } catch {
      o = new IntersectionObserver(B, I);
    }
    o.observe(n);
  }
  return f(!0), u;
}
function m0(n, r, o, i) {
  i === void 0 && (i = {});
  const {
    ancestorScroll: a = !0,
    ancestorResize: u = !0,
    elementResize: f = typeof ResizeObserver == "function",
    layoutShift: p = typeof IntersectionObserver == "function",
    animationFrame: m = !1
  } = i, g = bc(n), v = a || u ? [...g ? Us(g) : [], ...r ? Us(r) : []] : [];
  v.forEach((A) => {
    a && A.addEventListener("scroll", o, {
      passive: !0
    }), u && A.addEventListener("resize", o);
  });
  const x = g && p ? h0(g, o) : null;
  let C = -1, E = null;
  f && (E = new ResizeObserver((A) => {
    let [N] = A;
    N && N.target === g && E && r && (E.unobserve(r), cancelAnimationFrame(C), C = requestAnimationFrame(() => {
      var I;
      (I = E) == null || I.observe(r);
    })), o();
  }), g && !m && E.observe(g), r && E.observe(r));
  let O, w = m ? Kr(n) : null;
  m && y();
  function y() {
    const A = Kr(n);
    w && !vm(w, A) && o(), w = A, O = requestAnimationFrame(y);
  }
  return o(), () => {
    var A;
    v.forEach((N) => {
      a && N.removeEventListener("scroll", o), u && N.removeEventListener("resize", o);
    }), x == null || x(), (A = E) == null || A.disconnect(), E = null, m && cancelAnimationFrame(O);
  };
}
const g0 = Zw, v0 = Gw, y0 = $w, x0 = Qw, w0 = Ww, vh = Uw, _0 = Kw, S0 = (n, r, o) => {
  const i = /* @__PURE__ */ new Map(), a = {
    platform: p0,
    ...o
  }, u = {
    ...a.platform,
    _c: i
  };
  return Bw(n, r, {
    ...a,
    platform: u
  });
};
var k0 = typeof document < "u", C0 = function() {
}, cl = k0 ? _.useLayoutEffect : C0;
function El(n, r) {
  if (n === r)
    return !0;
  if (typeof n != typeof r)
    return !1;
  if (typeof n == "function" && n.toString() === r.toString())
    return !0;
  let o, i, a;
  if (n && r && typeof n == "object") {
    if (Array.isArray(n)) {
      if (o = n.length, o !== r.length) return !1;
      for (i = o; i-- !== 0; )
        if (!El(n[i], r[i]))
          return !1;
      return !0;
    }
    if (a = Object.keys(n), o = a.length, o !== Object.keys(r).length)
      return !1;
    for (i = o; i-- !== 0; )
      if (!{}.hasOwnProperty.call(r, a[i]))
        return !1;
    for (i = o; i-- !== 0; ) {
      const u = a[i];
      if (!(u === "_owner" && n.$$typeof) && !El(n[u], r[u]))
        return !1;
    }
    return !0;
  }
  return n !== n && r !== r;
}
function ym(n) {
  return typeof window > "u" ? 1 : (n.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function yh(n, r) {
  const o = ym(n);
  return Math.round(r * o) / o;
}
function ju(n) {
  const r = _.useRef(n);
  return cl(() => {
    r.current = n;
  }), r;
}
function E0(n) {
  n === void 0 && (n = {});
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: i = [],
    platform: a,
    elements: {
      reference: u,
      floating: f
    } = {},
    transform: p = !0,
    whileElementsMounted: m,
    open: g
  } = n, [v, x] = _.useState({
    x: 0,
    y: 0,
    strategy: o,
    placement: r,
    middlewareData: {},
    isPositioned: !1
  }), [C, E] = _.useState(i);
  El(C, i) || E(i);
  const [O, w] = _.useState(null), [y, A] = _.useState(null), N = _.useCallback((z) => {
    z !== K.current && (K.current = z, w(z));
  }, []), I = _.useCallback((z) => {
    z !== H.current && (H.current = z, A(z));
  }, []), L = u || O, B = f || y, K = _.useRef(null), H = _.useRef(null), ne = _.useRef(v), _e = m != null, pe = ju(m), Ee = ju(a), $ = ju(g), te = _.useCallback(() => {
    if (!K.current || !H.current)
      return;
    const z = {
      placement: r,
      strategy: o,
      middleware: C
    };
    Ee.current && (z.platform = Ee.current), S0(K.current, H.current, z).then((J) => {
      const Y = {
        ...J,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: $.current !== !1
      };
      ce.current && !El(ne.current, Y) && (ne.current = Y, Ws.flushSync(() => {
        x(Y);
      }));
    });
  }, [C, r, o, Ee, $]);
  cl(() => {
    g === !1 && ne.current.isPositioned && (ne.current.isPositioned = !1, x((z) => ({
      ...z,
      isPositioned: !1
    })));
  }, [g]);
  const ce = _.useRef(!1);
  cl(() => (ce.current = !0, () => {
    ce.current = !1;
  }), []), cl(() => {
    if (L && (K.current = L), B && (H.current = B), L && B) {
      if (pe.current)
        return pe.current(L, B, te);
      te();
    }
  }, [L, B, te, pe, _e]);
  const Se = _.useMemo(() => ({
    reference: K,
    floating: H,
    setReference: N,
    setFloating: I
  }), [N, I]), oe = _.useMemo(() => ({
    reference: L,
    floating: B
  }), [L, B]), le = _.useMemo(() => {
    const z = {
      position: o,
      left: 0,
      top: 0
    };
    if (!oe.floating)
      return z;
    const J = yh(oe.floating, v.x), Y = yh(oe.floating, v.y);
    return p ? {
      ...z,
      transform: "translate(" + J + "px, " + Y + "px)",
      ...ym(oe.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: o,
      left: J,
      top: Y
    };
  }, [o, p, oe.floating, v.x, v.y]);
  return _.useMemo(() => ({
    ...v,
    update: te,
    refs: Se,
    elements: oe,
    floatingStyles: le
  }), [v, te, Se, oe, le]);
}
const b0 = (n) => {
  function r(o) {
    return {}.hasOwnProperty.call(o, "current");
  }
  return {
    name: "arrow",
    options: n,
    fn(o) {
      const {
        element: i,
        padding: a
      } = typeof n == "function" ? n(o) : n;
      return i && r(i) ? i.current != null ? vh({
        element: i.current,
        padding: a
      }).fn(o) : {} : i ? vh({
        element: i,
        padding: a
      }).fn(o) : {};
    }
  };
}, R0 = (n, r) => {
  const o = g0(n);
  return {
    name: o.name,
    fn: o.fn,
    options: [n, r]
  };
}, N0 = (n, r) => {
  const o = v0(n);
  return {
    name: o.name,
    fn: o.fn,
    options: [n, r]
  };
}, T0 = (n, r) => ({
  fn: _0(n).fn,
  options: [n, r]
}), P0 = (n, r) => {
  const o = y0(n);
  return {
    name: o.name,
    fn: o.fn,
    options: [n, r]
  };
}, A0 = (n, r) => {
  const o = x0(n);
  return {
    name: o.name,
    fn: o.fn,
    options: [n, r]
  };
}, O0 = (n, r) => {
  const o = w0(n);
  return {
    name: o.name,
    fn: o.fn,
    options: [n, r]
  };
}, I0 = (n, r) => {
  const o = b0(n);
  return {
    name: o.name,
    fn: o.fn,
    options: [n, r]
  };
};
var M0 = "Arrow", xm = _.forwardRef((n, r) => {
  const { children: o, width: i = 10, height: a = 5, ...u } = n;
  return /* @__PURE__ */ k.jsx(
    Ze.svg,
    {
      ...u,
      ref: r,
      width: i,
      height: a,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: n.asChild ? o : /* @__PURE__ */ k.jsx("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
xm.displayName = M0;
var j0 = xm;
function wm(n) {
  const [r, o] = _.useState(void 0);
  return kt(() => {
    if (n) {
      o({ width: n.offsetWidth, height: n.offsetHeight });
      const i = new ResizeObserver((a) => {
        if (!Array.isArray(a) || !a.length)
          return;
        const u = a[0];
        let f, p;
        if ("borderBoxSize" in u) {
          const m = u.borderBoxSize, g = Array.isArray(m) ? m[0] : m;
          f = g.inlineSize, p = g.blockSize;
        } else
          f = n.offsetWidth, p = n.offsetHeight;
        o({ width: f, height: p });
      });
      return i.observe(n, { box: "border-box" }), () => i.unobserve(n);
    } else
      o(void 0);
  }, [n]), r;
}
var Rc = "Popper", [_m, Sm] = Xr(Rc), [L0, km] = _m(Rc), Cm = (n) => {
  const { __scopePopper: r, children: o } = n, [i, a] = _.useState(null);
  return /* @__PURE__ */ k.jsx(L0, { scope: r, anchor: i, onAnchorChange: a, children: o });
};
Cm.displayName = Rc;
var Em = "PopperAnchor", bm = _.forwardRef(
  (n, r) => {
    const { __scopePopper: o, virtualRef: i, ...a } = n, u = km(Em, o), f = _.useRef(null), p = st(r, f), m = _.useRef(null);
    return _.useEffect(() => {
      const g = m.current;
      m.current = (i == null ? void 0 : i.current) || f.current, g !== m.current && u.onAnchorChange(m.current);
    }), i ? null : /* @__PURE__ */ k.jsx(Ze.div, { ...a, ref: p });
  }
);
bm.displayName = Em;
var Nc = "PopperContent", [D0, F0] = _m(Nc), Rm = _.forwardRef(
  (n, r) => {
    var se, xe, Te, Pe, Fe, ze;
    const {
      __scopePopper: o,
      side: i = "bottom",
      sideOffset: a = 0,
      align: u = "center",
      alignOffset: f = 0,
      arrowPadding: p = 0,
      avoidCollisions: m = !0,
      collisionBoundary: g = [],
      collisionPadding: v = 0,
      sticky: x = "partial",
      hideWhenDetached: C = !1,
      updatePositionStrategy: E = "optimized",
      onPlaced: O,
      ...w
    } = n, y = km(Nc, o), [A, N] = _.useState(null), I = st(r, (it) => N(it)), [L, B] = _.useState(null), K = wm(L), H = (K == null ? void 0 : K.width) ?? 0, ne = (K == null ? void 0 : K.height) ?? 0, _e = i + (u !== "center" ? "-" + u : ""), pe = typeof v == "number" ? v : { top: 0, right: 0, bottom: 0, left: 0, ...v }, Ee = Array.isArray(g) ? g : [g], $ = Ee.length > 0, te = {
      padding: pe,
      boundary: Ee.filter(z0),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: $
    }, { refs: ce, floatingStyles: Se, placement: oe, isPositioned: le, middlewareData: z } = E0({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: _e,
      whileElementsMounted: (...it) => m0(...it, {
        animationFrame: E === "always"
      }),
      elements: {
        reference: y.anchor
      },
      middleware: [
        R0({ mainAxis: a + ne, alignmentAxis: f }),
        m && N0({
          mainAxis: !0,
          crossAxis: !1,
          limiter: x === "partial" ? T0() : void 0,
          ...te
        }),
        m && P0({ ...te }),
        A0({
          ...te,
          apply: ({ elements: it, rects: Ct, availableWidth: on, availableHeight: sn }) => {
            const { width: ln, height: qr } = Ct.reference, On = it.floating.style;
            On.setProperty("--radix-popper-available-width", `${on}px`), On.setProperty("--radix-popper-available-height", `${sn}px`), On.setProperty("--radix-popper-anchor-width", `${ln}px`), On.setProperty("--radix-popper-anchor-height", `${qr}px`);
          }
        }),
        L && I0({ element: L, padding: p }),
        B0({ arrowWidth: H, arrowHeight: ne }),
        C && O0({ strategy: "referenceHidden", ...te })
      ]
    }), [J, Y] = Pm(oe), P = Cr(O);
    kt(() => {
      le && (P == null || P());
    }, [le, P]);
    const U = (se = z.arrow) == null ? void 0 : se.x, Re = (xe = z.arrow) == null ? void 0 : xe.y, be = ((Te = z.arrow) == null ? void 0 : Te.centerOffset) !== 0, [Me, Ie] = _.useState();
    return kt(() => {
      A && Ie(window.getComputedStyle(A).zIndex);
    }, [A]), /* @__PURE__ */ k.jsx(
      "div",
      {
        ref: ce.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...Se,
          transform: le ? Se.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: Me,
          "--radix-popper-transform-origin": [
            (Pe = z.transformOrigin) == null ? void 0 : Pe.x,
            (Fe = z.transformOrigin) == null ? void 0 : Fe.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((ze = z.hide) == null ? void 0 : ze.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: n.dir,
        children: /* @__PURE__ */ k.jsx(
          D0,
          {
            scope: o,
            placedSide: J,
            onArrowChange: B,
            arrowX: U,
            arrowY: Re,
            shouldHideArrow: be,
            children: /* @__PURE__ */ k.jsx(
              Ze.div,
              {
                "data-side": J,
                "data-align": Y,
                ...w,
                ref: I,
                style: {
                  ...w.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: le ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
Rm.displayName = Nc;
var Nm = "PopperArrow", V0 = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, Tm = _.forwardRef(function(r, o) {
  const { __scopePopper: i, ...a } = r, u = F0(Nm, i), f = V0[u.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ k.jsx(
      "span",
      {
        ref: u.onArrowChange,
        style: {
          position: "absolute",
          left: u.arrowX,
          top: u.arrowY,
          [f]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[u.placedSide],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[u.placedSide],
          visibility: u.shouldHideArrow ? "hidden" : void 0
        },
        children: /* @__PURE__ */ k.jsx(
          j0,
          {
            ...a,
            ref: o,
            style: {
              ...a.style,
              // ensures the element can be measured correctly (mostly for if SVG)
              display: "block"
            }
          }
        )
      }
    )
  );
});
Tm.displayName = Nm;
function z0(n) {
  return n !== null;
}
var B0 = (n) => ({
  name: "transformOrigin",
  options: n,
  fn(r) {
    var y, A, N;
    const { placement: o, rects: i, middlewareData: a } = r, f = ((y = a.arrow) == null ? void 0 : y.centerOffset) !== 0, p = f ? 0 : n.arrowWidth, m = f ? 0 : n.arrowHeight, [g, v] = Pm(o), x = { start: "0%", center: "50%", end: "100%" }[v], C = (((A = a.arrow) == null ? void 0 : A.x) ?? 0) + p / 2, E = (((N = a.arrow) == null ? void 0 : N.y) ?? 0) + m / 2;
    let O = "", w = "";
    return g === "bottom" ? (O = f ? x : `${C}px`, w = `${-m}px`) : g === "top" ? (O = f ? x : `${C}px`, w = `${i.floating.height + m}px`) : g === "right" ? (O = `${-m}px`, w = f ? x : `${E}px`) : g === "left" && (O = `${i.floating.width + m}px`, w = f ? x : `${E}px`), { data: { x: O, y: w } };
  }
});
function Pm(n) {
  const [r, o = "center"] = n.split("-");
  return [r, o];
}
var U0 = Cm, $0 = bm, W0 = Rm, H0 = Tm, Z0 = "Portal", Am = _.forwardRef((n, r) => {
  var p;
  const { container: o, ...i } = n, [a, u] = _.useState(!1);
  kt(() => u(!0), []);
  const f = o || a && ((p = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : p.body);
  return f ? Kx.createPortal(/* @__PURE__ */ k.jsx(Ze.div, { ...i, ref: r }), f) : null;
});
Am.displayName = Z0;
function Om(n) {
  const r = _.useRef({ value: n, previous: n });
  return _.useMemo(() => (r.current.value !== n && (r.current.previous = r.current.value, r.current.value = n), r.current.previous), [n]);
}
var Im = Object.freeze({
  // See: https://github.com/twbs/bootstrap/blob/main/scss/mixins/_visually-hidden.scss
  position: "absolute",
  border: 0,
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  wordWrap: "normal"
}), G0 = "VisuallyHidden", K0 = _.forwardRef(
  (n, r) => /* @__PURE__ */ k.jsx(
    Ze.span,
    {
      ...n,
      ref: r,
      style: { ...Im, ...n.style }
    }
  )
);
K0.displayName = G0;
var Q0 = function(n) {
  if (typeof document > "u")
    return null;
  var r = Array.isArray(n) ? n[0] : n;
  return r.ownerDocument.body;
}, To = /* @__PURE__ */ new WeakMap(), sl = /* @__PURE__ */ new WeakMap(), il = {}, Lu = 0, Mm = function(n) {
  return n && (n.host || Mm(n.parentNode));
}, Y0 = function(n, r) {
  return r.map(function(o) {
    if (n.contains(o))
      return o;
    var i = Mm(o);
    return i && n.contains(i) ? i : (console.error("aria-hidden", o, "in not contained inside", n, ". Doing nothing"), null);
  }).filter(function(o) {
    return !!o;
  });
}, X0 = function(n, r, o, i) {
  var a = Y0(r, Array.isArray(n) ? n : [n]);
  il[o] || (il[o] = /* @__PURE__ */ new WeakMap());
  var u = il[o], f = [], p = /* @__PURE__ */ new Set(), m = new Set(a), g = function(x) {
    !x || p.has(x) || (p.add(x), g(x.parentNode));
  };
  a.forEach(g);
  var v = function(x) {
    !x || m.has(x) || Array.prototype.forEach.call(x.children, function(C) {
      if (p.has(C))
        v(C);
      else
        try {
          var E = C.getAttribute(i), O = E !== null && E !== "false", w = (To.get(C) || 0) + 1, y = (u.get(C) || 0) + 1;
          To.set(C, w), u.set(C, y), f.push(C), w === 1 && O && sl.set(C, !0), y === 1 && C.setAttribute(o, "true"), O || C.setAttribute(i, "true");
        } catch (A) {
          console.error("aria-hidden: cannot operate on ", C, A);
        }
    });
  };
  return v(r), p.clear(), Lu++, function() {
    f.forEach(function(x) {
      var C = To.get(x) - 1, E = u.get(x) - 1;
      To.set(x, C), u.set(x, E), C || (sl.has(x) || x.removeAttribute(i), sl.delete(x)), E || x.removeAttribute(o);
    }), Lu--, Lu || (To = /* @__PURE__ */ new WeakMap(), To = /* @__PURE__ */ new WeakMap(), sl = /* @__PURE__ */ new WeakMap(), il = {});
  };
}, q0 = function(n, r, o) {
  o === void 0 && (o = "data-aria-hidden");
  var i = Array.from(Array.isArray(n) ? n : [n]), a = Q0(n);
  return a ? (i.push.apply(i, Array.from(a.querySelectorAll("[aria-live], script"))), X0(i, a, o, "aria-hidden")) : function() {
    return null;
  };
}, Rn = function() {
  return Rn = Object.assign || function(r) {
    for (var o, i = 1, a = arguments.length; i < a; i++) {
      o = arguments[i];
      for (var u in o) Object.prototype.hasOwnProperty.call(o, u) && (r[u] = o[u]);
    }
    return r;
  }, Rn.apply(this, arguments);
};
function jm(n, r) {
  var o = {};
  for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && r.indexOf(i) < 0 && (o[i] = n[i]);
  if (n != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, i = Object.getOwnPropertySymbols(n); a < i.length; a++)
      r.indexOf(i[a]) < 0 && Object.prototype.propertyIsEnumerable.call(n, i[a]) && (o[i[a]] = n[i[a]]);
  return o;
}
function J0(n, r, o) {
  if (o || arguments.length === 2) for (var i = 0, a = r.length, u; i < a; i++)
    (u || !(i in r)) && (u || (u = Array.prototype.slice.call(r, 0, i)), u[i] = r[i]);
  return n.concat(u || Array.prototype.slice.call(r));
}
var dl = "right-scroll-bar-position", fl = "width-before-scroll-bar", e_ = "with-scroll-bars-hidden", t_ = "--removed-body-scroll-bar-size";
function Du(n, r) {
  return typeof n == "function" ? n(r) : n && (n.current = r), n;
}
function n_(n, r) {
  var o = _.useState(function() {
    return {
      // value
      value: n,
      // last callback
      callback: r,
      // "memoized" public interface
      facade: {
        get current() {
          return o.value;
        },
        set current(i) {
          var a = o.value;
          a !== i && (o.value = i, o.callback(i, a));
        }
      }
    };
  })[0];
  return o.callback = r, o.facade;
}
var r_ = typeof window < "u" ? _.useLayoutEffect : _.useEffect, xh = /* @__PURE__ */ new WeakMap();
function o_(n, r) {
  var o = n_(null, function(i) {
    return n.forEach(function(a) {
      return Du(a, i);
    });
  });
  return r_(function() {
    var i = xh.get(o);
    if (i) {
      var a = new Set(i), u = new Set(n), f = o.current;
      a.forEach(function(p) {
        u.has(p) || Du(p, null);
      }), u.forEach(function(p) {
        a.has(p) || Du(p, f);
      });
    }
    xh.set(o, n);
  }, [n]), o;
}
function s_(n) {
  return n;
}
function i_(n, r) {
  r === void 0 && (r = s_);
  var o = [], i = !1, a = {
    read: function() {
      if (i)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return o.length ? o[o.length - 1] : n;
    },
    useMedium: function(u) {
      var f = r(u, i);
      return o.push(f), function() {
        o = o.filter(function(p) {
          return p !== f;
        });
      };
    },
    assignSyncMedium: function(u) {
      for (i = !0; o.length; ) {
        var f = o;
        o = [], f.forEach(u);
      }
      o = {
        push: function(p) {
          return u(p);
        },
        filter: function() {
          return o;
        }
      };
    },
    assignMedium: function(u) {
      i = !0;
      var f = [];
      if (o.length) {
        var p = o;
        o = [], p.forEach(u), f = o;
      }
      var m = function() {
        var v = f;
        f = [], v.forEach(u);
      }, g = function() {
        return Promise.resolve().then(m);
      };
      g(), o = {
        push: function(v) {
          f.push(v), g();
        },
        filter: function(v) {
          return f = f.filter(v), o;
        }
      };
    }
  };
  return a;
}
function l_(n) {
  n === void 0 && (n = {});
  var r = i_(null);
  return r.options = Rn({ async: !0, ssr: !1 }, n), r;
}
var Lm = function(n) {
  var r = n.sideCar, o = jm(n, ["sideCar"]);
  if (!r)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var i = r.read();
  if (!i)
    throw new Error("Sidecar medium not found");
  return _.createElement(i, Rn({}, o));
};
Lm.isSideCarExport = !0;
function a_(n, r) {
  return n.useMedium(r), Lm;
}
var Dm = l_(), Fu = function() {
}, Ml = _.forwardRef(function(n, r) {
  var o = _.useRef(null), i = _.useState({
    onScrollCapture: Fu,
    onWheelCapture: Fu,
    onTouchMoveCapture: Fu
  }), a = i[0], u = i[1], f = n.forwardProps, p = n.children, m = n.className, g = n.removeScrollBar, v = n.enabled, x = n.shards, C = n.sideCar, E = n.noRelative, O = n.noIsolation, w = n.inert, y = n.allowPinchZoom, A = n.as, N = A === void 0 ? "div" : A, I = n.gapMode, L = jm(n, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), B = C, K = o_([o, r]), H = Rn(Rn({}, L), a);
  return _.createElement(
    _.Fragment,
    null,
    v && _.createElement(B, { sideCar: Dm, removeScrollBar: g, shards: x, noRelative: E, noIsolation: O, inert: w, setCallbacks: u, allowPinchZoom: !!y, lockRef: o, gapMode: I }),
    f ? _.cloneElement(_.Children.only(p), Rn(Rn({}, H), { ref: K })) : _.createElement(N, Rn({}, H, { className: m, ref: K }), p)
  );
});
Ml.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Ml.classNames = {
  fullWidth: fl,
  zeroRight: dl
};
var u_ = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function c_() {
  if (!document)
    return null;
  var n = document.createElement("style");
  n.type = "text/css";
  var r = u_();
  return r && n.setAttribute("nonce", r), n;
}
function d_(n, r) {
  n.styleSheet ? n.styleSheet.cssText = r : n.appendChild(document.createTextNode(r));
}
function f_(n) {
  var r = document.head || document.getElementsByTagName("head")[0];
  r.appendChild(n);
}
var p_ = function() {
  var n = 0, r = null;
  return {
    add: function(o) {
      n == 0 && (r = c_()) && (d_(r, o), f_(r)), n++;
    },
    remove: function() {
      n--, !n && r && (r.parentNode && r.parentNode.removeChild(r), r = null);
    }
  };
}, h_ = function() {
  var n = p_();
  return function(r, o) {
    _.useEffect(function() {
      return n.add(r), function() {
        n.remove();
      };
    }, [r && o]);
  };
}, Fm = function() {
  var n = h_(), r = function(o) {
    var i = o.styles, a = o.dynamic;
    return n(i, a), null;
  };
  return r;
}, m_ = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Vu = function(n) {
  return parseInt(n || "", 10) || 0;
}, g_ = function(n) {
  var r = window.getComputedStyle(document.body), o = r[n === "padding" ? "paddingLeft" : "marginLeft"], i = r[n === "padding" ? "paddingTop" : "marginTop"], a = r[n === "padding" ? "paddingRight" : "marginRight"];
  return [Vu(o), Vu(i), Vu(a)];
}, v_ = function(n) {
  if (n === void 0 && (n = "margin"), typeof window > "u")
    return m_;
  var r = g_(n), o = document.documentElement.clientWidth, i = window.innerWidth;
  return {
    left: r[0],
    top: r[1],
    right: r[2],
    gap: Math.max(0, i - o + r[2] - r[0])
  };
}, y_ = Fm(), jo = "data-scroll-locked", x_ = function(n, r, o, i) {
  var a = n.left, u = n.top, f = n.right, p = n.gap;
  return o === void 0 && (o = "margin"), `
  .`.concat(e_, ` {
   overflow: hidden `).concat(i, `;
   padding-right: `).concat(p, "px ").concat(i, `;
  }
  body[`).concat(jo, `] {
    overflow: hidden `).concat(i, `;
    overscroll-behavior: contain;
    `).concat([
    r && "position: relative ".concat(i, ";"),
    o === "margin" && `
    padding-left: `.concat(a, `px;
    padding-top: `).concat(u, `px;
    padding-right: `).concat(f, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(p, "px ").concat(i, `;
    `),
    o === "padding" && "padding-right: ".concat(p, "px ").concat(i, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(dl, ` {
    right: `).concat(p, "px ").concat(i, `;
  }
  
  .`).concat(fl, ` {
    margin-right: `).concat(p, "px ").concat(i, `;
  }
  
  .`).concat(dl, " .").concat(dl, ` {
    right: 0 `).concat(i, `;
  }
  
  .`).concat(fl, " .").concat(fl, ` {
    margin-right: 0 `).concat(i, `;
  }
  
  body[`).concat(jo, `] {
    `).concat(t_, ": ").concat(p, `px;
  }
`);
}, wh = function() {
  var n = parseInt(document.body.getAttribute(jo) || "0", 10);
  return isFinite(n) ? n : 0;
}, w_ = function() {
  _.useEffect(function() {
    return document.body.setAttribute(jo, (wh() + 1).toString()), function() {
      var n = wh() - 1;
      n <= 0 ? document.body.removeAttribute(jo) : document.body.setAttribute(jo, n.toString());
    };
  }, []);
}, __ = function(n) {
  var r = n.noRelative, o = n.noImportant, i = n.gapMode, a = i === void 0 ? "margin" : i;
  w_();
  var u = _.useMemo(function() {
    return v_(a);
  }, [a]);
  return _.createElement(y_, { styles: x_(u, !r, a, o ? "" : "!important") });
}, ec = !1;
if (typeof window < "u")
  try {
    var ll = Object.defineProperty({}, "passive", {
      get: function() {
        return ec = !0, !0;
      }
    });
    window.addEventListener("test", ll, ll), window.removeEventListener("test", ll, ll);
  } catch {
    ec = !1;
  }
var Po = ec ? { passive: !1 } : !1, S_ = function(n) {
  return n.tagName === "TEXTAREA";
}, Vm = function(n, r) {
  if (!(n instanceof Element))
    return !1;
  var o = window.getComputedStyle(n);
  return (
    // not-not-scrollable
    o[r] !== "hidden" && // contains scroll inside self
    !(o.overflowY === o.overflowX && !S_(n) && o[r] === "visible")
  );
}, k_ = function(n) {
  return Vm(n, "overflowY");
}, C_ = function(n) {
  return Vm(n, "overflowX");
}, _h = function(n, r) {
  var o = r.ownerDocument, i = r;
  do {
    typeof ShadowRoot < "u" && i instanceof ShadowRoot && (i = i.host);
    var a = zm(n, i);
    if (a) {
      var u = Bm(n, i), f = u[1], p = u[2];
      if (f > p)
        return !0;
    }
    i = i.parentNode;
  } while (i && i !== o.body);
  return !1;
}, E_ = function(n) {
  var r = n.scrollTop, o = n.scrollHeight, i = n.clientHeight;
  return [
    r,
    o,
    i
  ];
}, b_ = function(n) {
  var r = n.scrollLeft, o = n.scrollWidth, i = n.clientWidth;
  return [
    r,
    o,
    i
  ];
}, zm = function(n, r) {
  return n === "v" ? k_(r) : C_(r);
}, Bm = function(n, r) {
  return n === "v" ? E_(r) : b_(r);
}, R_ = function(n, r) {
  return n === "h" && r === "rtl" ? -1 : 1;
}, N_ = function(n, r, o, i, a) {
  var u = R_(n, window.getComputedStyle(r).direction), f = u * i, p = o.target, m = r.contains(p), g = !1, v = f > 0, x = 0, C = 0;
  do {
    if (!p)
      break;
    var E = Bm(n, p), O = E[0], w = E[1], y = E[2], A = w - y - u * O;
    (O || A) && zm(n, p) && (x += A, C += O);
    var N = p.parentNode;
    p = N && N.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? N.host : N;
  } while (
    // portaled content
    !m && p !== document.body || // self content
    m && (r.contains(p) || r === p)
  );
  return (v && Math.abs(x) < 1 || !v && Math.abs(C) < 1) && (g = !0), g;
}, al = function(n) {
  return "changedTouches" in n ? [n.changedTouches[0].clientX, n.changedTouches[0].clientY] : [0, 0];
}, Sh = function(n) {
  return [n.deltaX, n.deltaY];
}, kh = function(n) {
  return n && "current" in n ? n.current : n;
}, T_ = function(n, r) {
  return n[0] === r[0] && n[1] === r[1];
}, P_ = function(n) {
  return `
  .block-interactivity-`.concat(n, ` {pointer-events: none;}
  .allow-interactivity-`).concat(n, ` {pointer-events: all;}
`);
}, A_ = 0, Ao = [];
function O_(n) {
  var r = _.useRef([]), o = _.useRef([0, 0]), i = _.useRef(), a = _.useState(A_++)[0], u = _.useState(Fm)[0], f = _.useRef(n);
  _.useEffect(function() {
    f.current = n;
  }, [n]), _.useEffect(function() {
    if (n.inert) {
      document.body.classList.add("block-interactivity-".concat(a));
      var w = J0([n.lockRef.current], (n.shards || []).map(kh), !0).filter(Boolean);
      return w.forEach(function(y) {
        return y.classList.add("allow-interactivity-".concat(a));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(a)), w.forEach(function(y) {
          return y.classList.remove("allow-interactivity-".concat(a));
        });
      };
    }
  }, [n.inert, n.lockRef.current, n.shards]);
  var p = _.useCallback(function(w, y) {
    if ("touches" in w && w.touches.length === 2 || w.type === "wheel" && w.ctrlKey)
      return !f.current.allowPinchZoom;
    var A = al(w), N = o.current, I = "deltaX" in w ? w.deltaX : N[0] - A[0], L = "deltaY" in w ? w.deltaY : N[1] - A[1], B, K = w.target, H = Math.abs(I) > Math.abs(L) ? "h" : "v";
    if ("touches" in w && H === "h" && K.type === "range")
      return !1;
    var ne = window.getSelection(), _e = ne && ne.anchorNode, pe = _e ? _e === K || _e.contains(K) : !1;
    if (pe)
      return !1;
    var Ee = _h(H, K);
    if (!Ee)
      return !0;
    if (Ee ? B = H : (B = H === "v" ? "h" : "v", Ee = _h(H, K)), !Ee)
      return !1;
    if (!i.current && "changedTouches" in w && (I || L) && (i.current = B), !B)
      return !0;
    var $ = i.current || B;
    return N_($, y, w, $ === "h" ? I : L);
  }, []), m = _.useCallback(function(w) {
    var y = w;
    if (!(!Ao.length || Ao[Ao.length - 1] !== u)) {
      var A = "deltaY" in y ? Sh(y) : al(y), N = r.current.filter(function(B) {
        return B.name === y.type && (B.target === y.target || y.target === B.shadowParent) && T_(B.delta, A);
      })[0];
      if (N && N.should) {
        y.cancelable && y.preventDefault();
        return;
      }
      if (!N) {
        var I = (f.current.shards || []).map(kh).filter(Boolean).filter(function(B) {
          return B.contains(y.target);
        }), L = I.length > 0 ? p(y, I[0]) : !f.current.noIsolation;
        L && y.cancelable && y.preventDefault();
      }
    }
  }, []), g = _.useCallback(function(w, y, A, N) {
    var I = { name: w, delta: y, target: A, should: N, shadowParent: I_(A) };
    r.current.push(I), setTimeout(function() {
      r.current = r.current.filter(function(L) {
        return L !== I;
      });
    }, 1);
  }, []), v = _.useCallback(function(w) {
    o.current = al(w), i.current = void 0;
  }, []), x = _.useCallback(function(w) {
    g(w.type, Sh(w), w.target, p(w, n.lockRef.current));
  }, []), C = _.useCallback(function(w) {
    g(w.type, al(w), w.target, p(w, n.lockRef.current));
  }, []);
  _.useEffect(function() {
    return Ao.push(u), n.setCallbacks({
      onScrollCapture: x,
      onWheelCapture: x,
      onTouchMoveCapture: C
    }), document.addEventListener("wheel", m, Po), document.addEventListener("touchmove", m, Po), document.addEventListener("touchstart", v, Po), function() {
      Ao = Ao.filter(function(w) {
        return w !== u;
      }), document.removeEventListener("wheel", m, Po), document.removeEventListener("touchmove", m, Po), document.removeEventListener("touchstart", v, Po);
    };
  }, []);
  var E = n.removeScrollBar, O = n.inert;
  return _.createElement(
    _.Fragment,
    null,
    O ? _.createElement(u, { styles: P_(a) }) : null,
    E ? _.createElement(__, { noRelative: n.noRelative, gapMode: n.gapMode }) : null
  );
}
function I_(n) {
  for (var r = null; n !== null; )
    n instanceof ShadowRoot && (r = n.host, n = n.host), n = n.parentNode;
  return r;
}
const M_ = a_(Dm, O_);
var Um = _.forwardRef(function(n, r) {
  return _.createElement(Ml, Rn({}, n, { ref: r, sideCar: M_ }));
});
Um.classNames = Ml.classNames;
var j_ = [" ", "Enter", "ArrowUp", "ArrowDown"], L_ = [" ", "Enter"], Qr = "Select", [jl, Ll, D_] = nm(Qr), [Ho] = Xr(Qr, [
  D_,
  Sm
]), Dl = Sm(), [F_, Rr] = Ho(Qr), [V_, z_] = Ho(Qr), $m = (n) => {
  const {
    __scopeSelect: r,
    children: o,
    open: i,
    defaultOpen: a,
    onOpenChange: u,
    value: f,
    defaultValue: p,
    onValueChange: m,
    dir: g,
    name: v,
    autoComplete: x,
    disabled: C,
    required: E,
    form: O
  } = n, w = Dl(r), [y, A] = _.useState(null), [N, I] = _.useState(null), [L, B] = _.useState(!1), K = wc(g), [H, ne] = kr({
    prop: i,
    defaultProp: a ?? !1,
    onChange: u,
    caller: Qr
  }), [_e, pe] = kr({
    prop: f,
    defaultProp: p,
    onChange: m,
    caller: Qr
  }), Ee = _.useRef(null), $ = y ? O || !!y.closest("form") : !0, [te, ce] = _.useState(/* @__PURE__ */ new Set()), Se = Array.from(te).map((oe) => oe.props.value).join(";");
  return /* @__PURE__ */ k.jsx(U0, { ...w, children: /* @__PURE__ */ k.jsxs(
    F_,
    {
      required: E,
      scope: r,
      trigger: y,
      onTriggerChange: A,
      valueNode: N,
      onValueNodeChange: I,
      valueNodeHasChildren: L,
      onValueNodeHasChildrenChange: B,
      contentId: Hs(),
      value: _e,
      onValueChange: pe,
      open: H,
      onOpenChange: ne,
      dir: K,
      triggerPointerDownPosRef: Ee,
      disabled: C,
      children: [
        /* @__PURE__ */ k.jsx(jl.Provider, { scope: r, children: /* @__PURE__ */ k.jsx(
          V_,
          {
            scope: n.__scopeSelect,
            onNativeOptionAdd: _.useCallback((oe) => {
              ce((le) => new Set(le).add(oe));
            }, []),
            onNativeOptionRemove: _.useCallback((oe) => {
              ce((le) => {
                const z = new Set(le);
                return z.delete(oe), z;
              });
            }, []),
            children: o
          }
        ) }),
        $ ? /* @__PURE__ */ k.jsxs(
          ug,
          {
            "aria-hidden": !0,
            required: E,
            tabIndex: -1,
            name: v,
            autoComplete: x,
            value: _e,
            onChange: (oe) => pe(oe.target.value),
            disabled: C,
            form: O,
            children: [
              _e === void 0 ? /* @__PURE__ */ k.jsx("option", { value: "" }) : null,
              Array.from(te)
            ]
          },
          Se
        ) : null
      ]
    }
  ) });
};
$m.displayName = Qr;
var Wm = "SelectTrigger", Hm = _.forwardRef(
  (n, r) => {
    const { __scopeSelect: o, disabled: i = !1, ...a } = n, u = Dl(o), f = Rr(Wm, o), p = f.disabled || i, m = st(r, f.onTriggerChange), g = Ll(o), v = _.useRef("touch"), [x, C, E] = dg((w) => {
      const y = g().filter((I) => !I.disabled), A = y.find((I) => I.value === f.value), N = fg(y, w, A);
      N !== void 0 && f.onValueChange(N.value);
    }), O = (w) => {
      p || (f.onOpenChange(!0), E()), w && (f.triggerPointerDownPosRef.current = {
        x: Math.round(w.pageX),
        y: Math.round(w.pageY)
      });
    };
    return /* @__PURE__ */ k.jsx($0, { asChild: !0, ...u, children: /* @__PURE__ */ k.jsx(
      Ze.button,
      {
        type: "button",
        role: "combobox",
        "aria-controls": f.contentId,
        "aria-expanded": f.open,
        "aria-required": f.required,
        "aria-autocomplete": "none",
        dir: f.dir,
        "data-state": f.open ? "open" : "closed",
        disabled: p,
        "data-disabled": p ? "" : void 0,
        "data-placeholder": cg(f.value) ? "" : void 0,
        ...a,
        ref: m,
        onClick: Qe(a.onClick, (w) => {
          w.currentTarget.focus(), v.current !== "mouse" && O(w);
        }),
        onPointerDown: Qe(a.onPointerDown, (w) => {
          v.current = w.pointerType;
          const y = w.target;
          y.hasPointerCapture(w.pointerId) && y.releasePointerCapture(w.pointerId), w.button === 0 && w.ctrlKey === !1 && w.pointerType === "mouse" && (O(w), w.preventDefault());
        }),
        onKeyDown: Qe(a.onKeyDown, (w) => {
          const y = x.current !== "";
          !(w.ctrlKey || w.altKey || w.metaKey) && w.key.length === 1 && C(w.key), !(y && w.key === " ") && j_.includes(w.key) && (O(), w.preventDefault());
        })
      }
    ) });
  }
);
Hm.displayName = Wm;
var Zm = "SelectValue", Gm = _.forwardRef(
  (n, r) => {
    const { __scopeSelect: o, className: i, style: a, children: u, placeholder: f = "", ...p } = n, m = Rr(Zm, o), { onValueNodeHasChildrenChange: g } = m, v = u !== void 0, x = st(r, m.onValueNodeChange);
    return kt(() => {
      g(v);
    }, [g, v]), /* @__PURE__ */ k.jsx(
      Ze.span,
      {
        ...p,
        ref: x,
        style: { pointerEvents: "none" },
        children: cg(m.value) ? /* @__PURE__ */ k.jsx(k.Fragment, { children: f }) : u
      }
    );
  }
);
Gm.displayName = Zm;
var B_ = "SelectIcon", Km = _.forwardRef(
  (n, r) => {
    const { __scopeSelect: o, children: i, ...a } = n;
    return /* @__PURE__ */ k.jsx(Ze.span, { "aria-hidden": !0, ...a, ref: r, children: i || "▼" });
  }
);
Km.displayName = B_;
var U_ = "SelectPortal", Qm = (n) => /* @__PURE__ */ k.jsx(Am, { asChild: !0, ...n });
Qm.displayName = U_;
var Yr = "SelectContent", Ym = _.forwardRef(
  (n, r) => {
    const o = Rr(Yr, n.__scopeSelect), [i, a] = _.useState();
    if (kt(() => {
      a(new DocumentFragment());
    }, []), !o.open) {
      const u = i;
      return u ? Ws.createPortal(
        /* @__PURE__ */ k.jsx(Xm, { scope: n.__scopeSelect, children: /* @__PURE__ */ k.jsx(jl.Slot, { scope: n.__scopeSelect, children: /* @__PURE__ */ k.jsx("div", { children: n.children }) }) }),
        u
      ) : null;
    }
    return /* @__PURE__ */ k.jsx(qm, { ...n, ref: r });
  }
);
Ym.displayName = Yr;
var gn = 10, [Xm, Nr] = Ho(Yr), $_ = "SelectContentImpl", W_ = /* @__PURE__ */ _l("SelectContent.RemoveScroll"), qm = _.forwardRef(
  (n, r) => {
    const {
      __scopeSelect: o,
      position: i = "item-aligned",
      onCloseAutoFocus: a,
      onEscapeKeyDown: u,
      onPointerDownOutside: f,
      //
      // PopperContent props
      side: p,
      sideOffset: m,
      align: g,
      alignOffset: v,
      arrowPadding: x,
      collisionBoundary: C,
      collisionPadding: E,
      sticky: O,
      hideWhenDetached: w,
      avoidCollisions: y,
      //
      ...A
    } = n, N = Rr(Yr, o), [I, L] = _.useState(null), [B, K] = _.useState(null), H = st(r, (se) => L(se)), [ne, _e] = _.useState(null), [pe, Ee] = _.useState(
      null
    ), $ = Ll(o), [te, ce] = _.useState(!1), Se = _.useRef(!1);
    _.useEffect(() => {
      if (I) return q0(I);
    }, [I]), Sw();
    const oe = _.useCallback(
      (se) => {
        const [xe, ...Te] = $().map((ze) => ze.ref.current), [Pe] = Te.slice(-1), Fe = document.activeElement;
        for (const ze of se)
          if (ze === Fe || (ze == null || ze.scrollIntoView({ block: "nearest" }), ze === xe && B && (B.scrollTop = 0), ze === Pe && B && (B.scrollTop = B.scrollHeight), ze == null || ze.focus(), document.activeElement !== Fe)) return;
      },
      [$, B]
    ), le = _.useCallback(
      () => oe([ne, I]),
      [oe, ne, I]
    );
    _.useEffect(() => {
      te && le();
    }, [te, le]);
    const { onOpenChange: z, triggerPointerDownPosRef: J } = N;
    _.useEffect(() => {
      if (I) {
        let se = { x: 0, y: 0 };
        const xe = (Pe) => {
          var Fe, ze;
          se = {
            x: Math.abs(Math.round(Pe.pageX) - (((Fe = J.current) == null ? void 0 : Fe.x) ?? 0)),
            y: Math.abs(Math.round(Pe.pageY) - (((ze = J.current) == null ? void 0 : ze.y) ?? 0))
          };
        }, Te = (Pe) => {
          se.x <= 10 && se.y <= 10 ? Pe.preventDefault() : I.contains(Pe.target) || z(!1), document.removeEventListener("pointermove", xe), J.current = null;
        };
        return J.current !== null && (document.addEventListener("pointermove", xe), document.addEventListener("pointerup", Te, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", xe), document.removeEventListener("pointerup", Te, { capture: !0 });
        };
      }
    }, [I, z, J]), _.useEffect(() => {
      const se = () => z(!1);
      return window.addEventListener("blur", se), window.addEventListener("resize", se), () => {
        window.removeEventListener("blur", se), window.removeEventListener("resize", se);
      };
    }, [z]);
    const [Y, P] = dg((se) => {
      const xe = $().filter((Fe) => !Fe.disabled), Te = xe.find((Fe) => Fe.ref.current === document.activeElement), Pe = fg(xe, se, Te);
      Pe && setTimeout(() => Pe.ref.current.focus());
    }), U = _.useCallback(
      (se, xe, Te) => {
        const Pe = !Se.current && !Te;
        (N.value !== void 0 && N.value === xe || Pe) && (_e(se), Pe && (Se.current = !0));
      },
      [N.value]
    ), Re = _.useCallback(() => I == null ? void 0 : I.focus(), [I]), be = _.useCallback(
      (se, xe, Te) => {
        const Pe = !Se.current && !Te;
        (N.value !== void 0 && N.value === xe || Pe) && Ee(se);
      },
      [N.value]
    ), Me = i === "popper" ? tc : Jm, Ie = Me === tc ? {
      side: p,
      sideOffset: m,
      align: g,
      alignOffset: v,
      arrowPadding: x,
      collisionBoundary: C,
      collisionPadding: E,
      sticky: O,
      hideWhenDetached: w,
      avoidCollisions: y
    } : {};
    return /* @__PURE__ */ k.jsx(
      Xm,
      {
        scope: o,
        content: I,
        viewport: B,
        onViewportChange: K,
        itemRefCallback: U,
        selectedItem: ne,
        onItemLeave: Re,
        itemTextRefCallback: be,
        focusSelectedItem: le,
        selectedItemText: pe,
        position: i,
        isPositioned: te,
        searchRef: Y,
        children: /* @__PURE__ */ k.jsx(Um, { as: W_, allowPinchZoom: !0, children: /* @__PURE__ */ k.jsx(
          im,
          {
            asChild: !0,
            trapped: N.open,
            onMountAutoFocus: (se) => {
              se.preventDefault();
            },
            onUnmountAutoFocus: Qe(a, (se) => {
              var xe;
              (xe = N.trigger) == null || xe.focus({ preventScroll: !0 }), se.preventDefault();
            }),
            children: /* @__PURE__ */ k.jsx(
              om,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: u,
                onPointerDownOutside: f,
                onFocusOutside: (se) => se.preventDefault(),
                onDismiss: () => N.onOpenChange(!1),
                children: /* @__PURE__ */ k.jsx(
                  Me,
                  {
                    role: "listbox",
                    id: N.contentId,
                    "data-state": N.open ? "open" : "closed",
                    dir: N.dir,
                    onContextMenu: (se) => se.preventDefault(),
                    ...A,
                    ...Ie,
                    onPlaced: () => ce(!0),
                    ref: H,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ...A.style
                    },
                    onKeyDown: Qe(A.onKeyDown, (se) => {
                      const xe = se.ctrlKey || se.altKey || se.metaKey;
                      if (se.key === "Tab" && se.preventDefault(), !xe && se.key.length === 1 && P(se.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(se.key)) {
                        let Pe = $().filter((Fe) => !Fe.disabled).map((Fe) => Fe.ref.current);
                        if (["ArrowUp", "End"].includes(se.key) && (Pe = Pe.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(se.key)) {
                          const Fe = se.target, ze = Pe.indexOf(Fe);
                          Pe = Pe.slice(ze + 1);
                        }
                        setTimeout(() => oe(Pe)), se.preventDefault();
                      }
                    })
                  }
                )
              }
            )
          }
        ) })
      }
    );
  }
);
qm.displayName = $_;
var H_ = "SelectItemAlignedPosition", Jm = _.forwardRef((n, r) => {
  const { __scopeSelect: o, onPlaced: i, ...a } = n, u = Rr(Yr, o), f = Nr(Yr, o), [p, m] = _.useState(null), [g, v] = _.useState(null), x = st(r, (H) => v(H)), C = Ll(o), E = _.useRef(!1), O = _.useRef(!0), { viewport: w, selectedItem: y, selectedItemText: A, focusSelectedItem: N } = f, I = _.useCallback(() => {
    if (u.trigger && u.valueNode && p && g && w && y && A) {
      const H = u.trigger.getBoundingClientRect(), ne = g.getBoundingClientRect(), _e = u.valueNode.getBoundingClientRect(), pe = A.getBoundingClientRect();
      if (u.dir !== "rtl") {
        const Fe = pe.left - ne.left, ze = _e.left - Fe, it = H.left - ze, Ct = H.width + it, on = Math.max(Ct, ne.width), sn = window.innerWidth - gn, ln = eh(ze, [
          gn,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(gn, sn - on)
        ]);
        p.style.minWidth = Ct + "px", p.style.left = ln + "px";
      } else {
        const Fe = ne.right - pe.right, ze = window.innerWidth - _e.right - Fe, it = window.innerWidth - H.right - ze, Ct = H.width + it, on = Math.max(Ct, ne.width), sn = window.innerWidth - gn, ln = eh(ze, [
          gn,
          Math.max(gn, sn - on)
        ]);
        p.style.minWidth = Ct + "px", p.style.right = ln + "px";
      }
      const Ee = C(), $ = window.innerHeight - gn * 2, te = w.scrollHeight, ce = window.getComputedStyle(g), Se = parseInt(ce.borderTopWidth, 10), oe = parseInt(ce.paddingTop, 10), le = parseInt(ce.borderBottomWidth, 10), z = parseInt(ce.paddingBottom, 10), J = Se + oe + te + z + le, Y = Math.min(y.offsetHeight * 5, J), P = window.getComputedStyle(w), U = parseInt(P.paddingTop, 10), Re = parseInt(P.paddingBottom, 10), be = H.top + H.height / 2 - gn, Me = $ - be, Ie = y.offsetHeight / 2, se = y.offsetTop + Ie, xe = Se + oe + se, Te = J - xe;
      if (xe <= be) {
        const Fe = Ee.length > 0 && y === Ee[Ee.length - 1].ref.current;
        p.style.bottom = "0px";
        const ze = g.clientHeight - w.offsetTop - w.offsetHeight, it = Math.max(
          Me,
          Ie + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (Fe ? Re : 0) + ze + le
        ), Ct = xe + it;
        p.style.height = Ct + "px";
      } else {
        const Fe = Ee.length > 0 && y === Ee[0].ref.current;
        p.style.top = "0px";
        const it = Math.max(
          be,
          Se + w.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (Fe ? U : 0) + Ie
        ) + Te;
        p.style.height = it + "px", w.scrollTop = xe - be + w.offsetTop;
      }
      p.style.margin = `${gn}px 0`, p.style.minHeight = Y + "px", p.style.maxHeight = $ + "px", i == null || i(), requestAnimationFrame(() => E.current = !0);
    }
  }, [
    C,
    u.trigger,
    u.valueNode,
    p,
    g,
    w,
    y,
    A,
    u.dir,
    i
  ]);
  kt(() => I(), [I]);
  const [L, B] = _.useState();
  kt(() => {
    g && B(window.getComputedStyle(g).zIndex);
  }, [g]);
  const K = _.useCallback(
    (H) => {
      H && O.current === !0 && (I(), N == null || N(), O.current = !1);
    },
    [I, N]
  );
  return /* @__PURE__ */ k.jsx(
    G_,
    {
      scope: o,
      contentWrapper: p,
      shouldExpandOnScrollRef: E,
      onScrollButtonChange: K,
      children: /* @__PURE__ */ k.jsx(
        "div",
        {
          ref: m,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: L
          },
          children: /* @__PURE__ */ k.jsx(
            Ze.div,
            {
              ...a,
              ref: x,
              style: {
                // When we get the height of the content, it includes borders. If we were to set
                // the height without having `boxSizing: 'border-box'` it would be too big.
                boxSizing: "border-box",
                // We need to ensure the content doesn't get taller than the wrapper
                maxHeight: "100%",
                ...a.style
              }
            }
          )
        }
      )
    }
  );
});
Jm.displayName = H_;
var Z_ = "SelectPopperPosition", tc = _.forwardRef((n, r) => {
  const {
    __scopeSelect: o,
    align: i = "start",
    collisionPadding: a = gn,
    ...u
  } = n, f = Dl(o);
  return /* @__PURE__ */ k.jsx(
    W0,
    {
      ...f,
      ...u,
      ref: r,
      align: i,
      collisionPadding: a,
      style: {
        // Ensure border-box for floating-ui calculations
        boxSizing: "border-box",
        ...u.style,
        "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-select-content-available-width": "var(--radix-popper-available-width)",
        "--radix-select-content-available-height": "var(--radix-popper-available-height)",
        "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
});
tc.displayName = Z_;
var [G_, Tc] = Ho(Yr, {}), nc = "SelectViewport", eg = _.forwardRef(
  (n, r) => {
    const { __scopeSelect: o, nonce: i, ...a } = n, u = Nr(nc, o), f = Tc(nc, o), p = st(r, u.onViewportChange), m = _.useRef(0);
    return /* @__PURE__ */ k.jsxs(k.Fragment, { children: [
      /* @__PURE__ */ k.jsx(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: i
        }
      ),
      /* @__PURE__ */ k.jsx(jl.Slot, { scope: o, children: /* @__PURE__ */ k.jsx(
        Ze.div,
        {
          "data-radix-select-viewport": "",
          role: "presentation",
          ...a,
          ref: p,
          style: {
            // we use position: 'relative' here on the `viewport` so that when we call
            // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
            // (independent of the scrollUpButton).
            position: "relative",
            flex: 1,
            // Viewport should only be scrollable in the vertical direction.
            // This won't work in vertical writing modes, so we'll need to
            // revisit this if/when that is supported
            // https://developer.chrome.com/blog/vertical-form-controls
            overflow: "hidden auto",
            ...a.style
          },
          onScroll: Qe(a.onScroll, (g) => {
            const v = g.currentTarget, { contentWrapper: x, shouldExpandOnScrollRef: C } = f;
            if (C != null && C.current && x) {
              const E = Math.abs(m.current - v.scrollTop);
              if (E > 0) {
                const O = window.innerHeight - gn * 2, w = parseFloat(x.style.minHeight), y = parseFloat(x.style.height), A = Math.max(w, y);
                if (A < O) {
                  const N = A + E, I = Math.min(O, N), L = N - I;
                  x.style.height = I + "px", x.style.bottom === "0px" && (v.scrollTop = L > 0 ? L : 0, x.style.justifyContent = "flex-end");
                }
              }
            }
            m.current = v.scrollTop;
          })
        }
      ) })
    ] });
  }
);
eg.displayName = nc;
var tg = "SelectGroup", [K_, Q_] = Ho(tg), Y_ = _.forwardRef(
  (n, r) => {
    const { __scopeSelect: o, ...i } = n, a = Hs();
    return /* @__PURE__ */ k.jsx(K_, { scope: o, id: a, children: /* @__PURE__ */ k.jsx(Ze.div, { role: "group", "aria-labelledby": a, ...i, ref: r }) });
  }
);
Y_.displayName = tg;
var ng = "SelectLabel", X_ = _.forwardRef(
  (n, r) => {
    const { __scopeSelect: o, ...i } = n, a = Q_(ng, o);
    return /* @__PURE__ */ k.jsx(Ze.div, { id: a.id, ...i, ref: r });
  }
);
X_.displayName = ng;
var bl = "SelectItem", [q_, rg] = Ho(bl), og = _.forwardRef(
  (n, r) => {
    const {
      __scopeSelect: o,
      value: i,
      disabled: a = !1,
      textValue: u,
      ...f
    } = n, p = Rr(bl, o), m = Nr(bl, o), g = p.value === i, [v, x] = _.useState(u ?? ""), [C, E] = _.useState(!1), O = st(
      r,
      (N) => {
        var I;
        return (I = m.itemRefCallback) == null ? void 0 : I.call(m, N, i, a);
      }
    ), w = Hs(), y = _.useRef("touch"), A = () => {
      a || (p.onValueChange(i), p.onOpenChange(!1));
    };
    if (i === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ k.jsx(
      q_,
      {
        scope: o,
        value: i,
        disabled: a,
        textId: w,
        isSelected: g,
        onItemTextChange: _.useCallback((N) => {
          x((I) => I || ((N == null ? void 0 : N.textContent) ?? "").trim());
        }, []),
        children: /* @__PURE__ */ k.jsx(
          jl.ItemSlot,
          {
            scope: o,
            value: i,
            disabled: a,
            textValue: v,
            children: /* @__PURE__ */ k.jsx(
              Ze.div,
              {
                role: "option",
                "aria-labelledby": w,
                "data-highlighted": C ? "" : void 0,
                "aria-selected": g && C,
                "data-state": g ? "checked" : "unchecked",
                "aria-disabled": a || void 0,
                "data-disabled": a ? "" : void 0,
                tabIndex: a ? void 0 : -1,
                ...f,
                ref: O,
                onFocus: Qe(f.onFocus, () => E(!0)),
                onBlur: Qe(f.onBlur, () => E(!1)),
                onClick: Qe(f.onClick, () => {
                  y.current !== "mouse" && A();
                }),
                onPointerUp: Qe(f.onPointerUp, () => {
                  y.current === "mouse" && A();
                }),
                onPointerDown: Qe(f.onPointerDown, (N) => {
                  y.current = N.pointerType;
                }),
                onPointerMove: Qe(f.onPointerMove, (N) => {
                  var I;
                  y.current = N.pointerType, a ? (I = m.onItemLeave) == null || I.call(m) : y.current === "mouse" && N.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: Qe(f.onPointerLeave, (N) => {
                  var I;
                  N.currentTarget === document.activeElement && ((I = m.onItemLeave) == null || I.call(m));
                }),
                onKeyDown: Qe(f.onKeyDown, (N) => {
                  var L;
                  ((L = m.searchRef) == null ? void 0 : L.current) !== "" && N.key === " " || (L_.includes(N.key) && A(), N.key === " " && N.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
og.displayName = bl;
var Ds = "SelectItemText", sg = _.forwardRef(
  (n, r) => {
    const { __scopeSelect: o, className: i, style: a, ...u } = n, f = Rr(Ds, o), p = Nr(Ds, o), m = rg(Ds, o), g = z_(Ds, o), [v, x] = _.useState(null), C = st(
      r,
      (A) => x(A),
      m.onItemTextChange,
      (A) => {
        var N;
        return (N = p.itemTextRefCallback) == null ? void 0 : N.call(p, A, m.value, m.disabled);
      }
    ), E = v == null ? void 0 : v.textContent, O = _.useMemo(
      () => /* @__PURE__ */ k.jsx("option", { value: m.value, disabled: m.disabled, children: E }, m.value),
      [m.disabled, m.value, E]
    ), { onNativeOptionAdd: w, onNativeOptionRemove: y } = g;
    return kt(() => (w(O), () => y(O)), [w, y, O]), /* @__PURE__ */ k.jsxs(k.Fragment, { children: [
      /* @__PURE__ */ k.jsx(Ze.span, { id: m.textId, ...u, ref: C }),
      m.isSelected && f.valueNode && !f.valueNodeHasChildren ? Ws.createPortal(u.children, f.valueNode) : null
    ] });
  }
);
sg.displayName = Ds;
var ig = "SelectItemIndicator", lg = _.forwardRef(
  (n, r) => {
    const { __scopeSelect: o, ...i } = n;
    return rg(ig, o).isSelected ? /* @__PURE__ */ k.jsx(Ze.span, { "aria-hidden": !0, ...i, ref: r }) : null;
  }
);
lg.displayName = ig;
var rc = "SelectScrollUpButton", J_ = _.forwardRef((n, r) => {
  const o = Nr(rc, n.__scopeSelect), i = Tc(rc, n.__scopeSelect), [a, u] = _.useState(!1), f = st(r, i.onScrollButtonChange);
  return kt(() => {
    if (o.viewport && o.isPositioned) {
      let p = function() {
        const g = m.scrollTop > 0;
        u(g);
      };
      const m = o.viewport;
      return p(), m.addEventListener("scroll", p), () => m.removeEventListener("scroll", p);
    }
  }, [o.viewport, o.isPositioned]), a ? /* @__PURE__ */ k.jsx(
    ag,
    {
      ...n,
      ref: f,
      onAutoScroll: () => {
        const { viewport: p, selectedItem: m } = o;
        p && m && (p.scrollTop = p.scrollTop - m.offsetHeight);
      }
    }
  ) : null;
});
J_.displayName = rc;
var oc = "SelectScrollDownButton", eS = _.forwardRef((n, r) => {
  const o = Nr(oc, n.__scopeSelect), i = Tc(oc, n.__scopeSelect), [a, u] = _.useState(!1), f = st(r, i.onScrollButtonChange);
  return kt(() => {
    if (o.viewport && o.isPositioned) {
      let p = function() {
        const g = m.scrollHeight - m.clientHeight, v = Math.ceil(m.scrollTop) < g;
        u(v);
      };
      const m = o.viewport;
      return p(), m.addEventListener("scroll", p), () => m.removeEventListener("scroll", p);
    }
  }, [o.viewport, o.isPositioned]), a ? /* @__PURE__ */ k.jsx(
    ag,
    {
      ...n,
      ref: f,
      onAutoScroll: () => {
        const { viewport: p, selectedItem: m } = o;
        p && m && (p.scrollTop = p.scrollTop + m.offsetHeight);
      }
    }
  ) : null;
});
eS.displayName = oc;
var ag = _.forwardRef((n, r) => {
  const { __scopeSelect: o, onAutoScroll: i, ...a } = n, u = Nr("SelectScrollButton", o), f = _.useRef(null), p = Ll(o), m = _.useCallback(() => {
    f.current !== null && (window.clearInterval(f.current), f.current = null);
  }, []);
  return _.useEffect(() => () => m(), [m]), kt(() => {
    var v;
    const g = p().find((x) => x.ref.current === document.activeElement);
    (v = g == null ? void 0 : g.ref.current) == null || v.scrollIntoView({ block: "nearest" });
  }, [p]), /* @__PURE__ */ k.jsx(
    Ze.div,
    {
      "aria-hidden": !0,
      ...a,
      ref: r,
      style: { flexShrink: 0, ...a.style },
      onPointerDown: Qe(a.onPointerDown, () => {
        f.current === null && (f.current = window.setInterval(i, 50));
      }),
      onPointerMove: Qe(a.onPointerMove, () => {
        var g;
        (g = u.onItemLeave) == null || g.call(u), f.current === null && (f.current = window.setInterval(i, 50));
      }),
      onPointerLeave: Qe(a.onPointerLeave, () => {
        m();
      })
    }
  );
}), tS = "SelectSeparator", nS = _.forwardRef(
  (n, r) => {
    const { __scopeSelect: o, ...i } = n;
    return /* @__PURE__ */ k.jsx(Ze.div, { "aria-hidden": !0, ...i, ref: r });
  }
);
nS.displayName = tS;
var sc = "SelectArrow", rS = _.forwardRef(
  (n, r) => {
    const { __scopeSelect: o, ...i } = n, a = Dl(o), u = Rr(sc, o), f = Nr(sc, o);
    return u.open && f.position === "popper" ? /* @__PURE__ */ k.jsx(H0, { ...a, ...i, ref: r }) : null;
  }
);
rS.displayName = sc;
var oS = "SelectBubbleInput", ug = _.forwardRef(
  ({ __scopeSelect: n, value: r, ...o }, i) => {
    const a = _.useRef(null), u = st(i, a), f = Om(r);
    return _.useEffect(() => {
      const p = a.current;
      if (!p) return;
      const m = window.HTMLSelectElement.prototype, v = Object.getOwnPropertyDescriptor(
        m,
        "value"
      ).set;
      if (f !== r && v) {
        const x = new Event("change", { bubbles: !0 });
        v.call(p, r), p.dispatchEvent(x);
      }
    }, [f, r]), /* @__PURE__ */ k.jsx(
      Ze.select,
      {
        ...o,
        style: { ...Im, ...o.style },
        ref: u,
        defaultValue: r
      }
    );
  }
);
ug.displayName = oS;
function cg(n) {
  return n === "" || n === void 0;
}
function dg(n) {
  const r = Cr(n), o = _.useRef(""), i = _.useRef(0), a = _.useCallback(
    (f) => {
      const p = o.current + f;
      r(p), (function m(g) {
        o.current = g, window.clearTimeout(i.current), g !== "" && (i.current = window.setTimeout(() => m(""), 1e3));
      })(p);
    },
    [r]
  ), u = _.useCallback(() => {
    o.current = "", window.clearTimeout(i.current);
  }, []);
  return _.useEffect(() => () => window.clearTimeout(i.current), []), [o, a, u];
}
function fg(n, r, o) {
  const a = r.length > 1 && Array.from(r).every((g) => g === r[0]) ? r[0] : r, u = o ? n.indexOf(o) : -1;
  let f = sS(n, Math.max(u, 0));
  a.length === 1 && (f = f.filter((g) => g !== o));
  const m = f.find(
    (g) => g.textValue.toLowerCase().startsWith(a.toLowerCase())
  );
  return m !== o ? m : void 0;
}
function sS(n, r) {
  return n.map((o, i) => n[(r + i) % n.length]);
}
var iS = $m, lS = Hm, aS = Gm, uS = Km, cS = Qm, dS = Ym, fS = eg, pS = og, hS = sg, mS = lg, Fl = "Switch", [gS] = Xr(Fl), [vS, yS] = gS(Fl), pg = _.forwardRef(
  (n, r) => {
    const {
      __scopeSwitch: o,
      name: i,
      checked: a,
      defaultChecked: u,
      required: f,
      disabled: p,
      value: m = "on",
      onCheckedChange: g,
      form: v,
      ...x
    } = n, [C, E] = _.useState(null), O = st(r, (I) => E(I)), w = _.useRef(!1), y = C ? v || !!C.closest("form") : !0, [A, N] = kr({
      prop: a,
      defaultProp: u ?? !1,
      onChange: g,
      caller: Fl
    });
    return /* @__PURE__ */ k.jsxs(vS, { scope: o, checked: A, disabled: p, children: [
      /* @__PURE__ */ k.jsx(
        Ze.button,
        {
          type: "button",
          role: "switch",
          "aria-checked": A,
          "aria-required": f,
          "data-state": vg(A),
          "data-disabled": p ? "" : void 0,
          disabled: p,
          value: m,
          ...x,
          ref: O,
          onClick: Qe(n.onClick, (I) => {
            N((L) => !L), y && (w.current = I.isPropagationStopped(), w.current || I.stopPropagation());
          })
        }
      ),
      y && /* @__PURE__ */ k.jsx(
        gg,
        {
          control: C,
          bubbles: !w.current,
          name: i,
          value: m,
          checked: A,
          required: f,
          disabled: p,
          form: v,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
pg.displayName = Fl;
var hg = "SwitchThumb", mg = _.forwardRef(
  (n, r) => {
    const { __scopeSwitch: o, ...i } = n, a = yS(hg, o);
    return /* @__PURE__ */ k.jsx(
      Ze.span,
      {
        "data-state": vg(a.checked),
        "data-disabled": a.disabled ? "" : void 0,
        ...i,
        ref: r
      }
    );
  }
);
mg.displayName = hg;
var xS = "SwitchBubbleInput", gg = _.forwardRef(
  ({
    __scopeSwitch: n,
    control: r,
    checked: o,
    bubbles: i = !0,
    ...a
  }, u) => {
    const f = _.useRef(null), p = st(f, u), m = Om(o), g = wm(r);
    return _.useEffect(() => {
      const v = f.current;
      if (!v) return;
      const x = window.HTMLInputElement.prototype, E = Object.getOwnPropertyDescriptor(
        x,
        "checked"
      ).set;
      if (m !== o && E) {
        const O = new Event("click", { bubbles: i });
        E.call(v, o), v.dispatchEvent(O);
      }
    }, [m, o, i]), /* @__PURE__ */ k.jsx(
      "input",
      {
        type: "checkbox",
        "aria-hidden": !0,
        defaultChecked: o,
        ...a,
        tabIndex: -1,
        ref: p,
        style: {
          ...a.style,
          ...g,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        }
      }
    );
  }
);
gg.displayName = xS;
function vg(n) {
  return n ? "checked" : "unchecked";
}
var wS = pg, _S = mg, zu = "rovingFocusGroup.onEntryFocus", SS = { bubbles: !1, cancelable: !0 }, Gs = "RovingFocusGroup", [ic, yg, kS] = nm(Gs), [CS, xg] = Xr(
  Gs,
  [kS]
), [ES, bS] = CS(Gs), wg = _.forwardRef(
  (n, r) => /* @__PURE__ */ k.jsx(ic.Provider, { scope: n.__scopeRovingFocusGroup, children: /* @__PURE__ */ k.jsx(ic.Slot, { scope: n.__scopeRovingFocusGroup, children: /* @__PURE__ */ k.jsx(RS, { ...n, ref: r }) }) })
);
wg.displayName = Gs;
var RS = _.forwardRef((n, r) => {
  const {
    __scopeRovingFocusGroup: o,
    orientation: i,
    loop: a = !1,
    dir: u,
    currentTabStopId: f,
    defaultCurrentTabStopId: p,
    onCurrentTabStopIdChange: m,
    onEntryFocus: g,
    preventScrollOnEntryFocus: v = !1,
    ...x
  } = n, C = _.useRef(null), E = st(r, C), O = wc(u), [w, y] = kr({
    prop: f,
    defaultProp: p ?? null,
    onChange: m,
    caller: Gs
  }), [A, N] = _.useState(!1), I = Cr(g), L = yg(o), B = _.useRef(!1), [K, H] = _.useState(0);
  return _.useEffect(() => {
    const ne = C.current;
    if (ne)
      return ne.addEventListener(zu, I), () => ne.removeEventListener(zu, I);
  }, [I]), /* @__PURE__ */ k.jsx(
    ES,
    {
      scope: o,
      orientation: i,
      dir: O,
      loop: a,
      currentTabStopId: w,
      onItemFocus: _.useCallback(
        (ne) => y(ne),
        [y]
      ),
      onItemShiftTab: _.useCallback(() => N(!0), []),
      onFocusableItemAdd: _.useCallback(
        () => H((ne) => ne + 1),
        []
      ),
      onFocusableItemRemove: _.useCallback(
        () => H((ne) => ne - 1),
        []
      ),
      children: /* @__PURE__ */ k.jsx(
        Ze.div,
        {
          tabIndex: A || K === 0 ? -1 : 0,
          "data-orientation": i,
          ...x,
          ref: E,
          style: { outline: "none", ...n.style },
          onMouseDown: Qe(n.onMouseDown, () => {
            B.current = !0;
          }),
          onFocus: Qe(n.onFocus, (ne) => {
            const _e = !B.current;
            if (ne.target === ne.currentTarget && _e && !A) {
              const pe = new CustomEvent(zu, SS);
              if (ne.currentTarget.dispatchEvent(pe), !pe.defaultPrevented) {
                const Ee = L().filter((oe) => oe.focusable), $ = Ee.find((oe) => oe.active), te = Ee.find((oe) => oe.id === w), Se = [$, te, ...Ee].filter(
                  Boolean
                ).map((oe) => oe.ref.current);
                kg(Se, v);
              }
            }
            B.current = !1;
          }),
          onBlur: Qe(n.onBlur, () => N(!1))
        }
      )
    }
  );
}), _g = "RovingFocusGroupItem", Sg = _.forwardRef(
  (n, r) => {
    const {
      __scopeRovingFocusGroup: o,
      focusable: i = !0,
      active: a = !1,
      tabStopId: u,
      children: f,
      ...p
    } = n, m = Hs(), g = u || m, v = bS(_g, o), x = v.currentTabStopId === g, C = yg(o), { onFocusableItemAdd: E, onFocusableItemRemove: O, currentTabStopId: w } = v;
    return _.useEffect(() => {
      if (i)
        return E(), () => O();
    }, [i, E, O]), /* @__PURE__ */ k.jsx(
      ic.ItemSlot,
      {
        scope: o,
        id: g,
        focusable: i,
        active: a,
        children: /* @__PURE__ */ k.jsx(
          Ze.span,
          {
            tabIndex: x ? 0 : -1,
            "data-orientation": v.orientation,
            ...p,
            ref: r,
            onMouseDown: Qe(n.onMouseDown, (y) => {
              i ? v.onItemFocus(g) : y.preventDefault();
            }),
            onFocus: Qe(n.onFocus, () => v.onItemFocus(g)),
            onKeyDown: Qe(n.onKeyDown, (y) => {
              if (y.key === "Tab" && y.shiftKey) {
                v.onItemShiftTab();
                return;
              }
              if (y.target !== y.currentTarget) return;
              const A = PS(y, v.orientation, v.dir);
              if (A !== void 0) {
                if (y.metaKey || y.ctrlKey || y.altKey || y.shiftKey) return;
                y.preventDefault();
                let I = C().filter((L) => L.focusable).map((L) => L.ref.current);
                if (A === "last") I.reverse();
                else if (A === "prev" || A === "next") {
                  A === "prev" && I.reverse();
                  const L = I.indexOf(y.currentTarget);
                  I = v.loop ? AS(I, L + 1) : I.slice(L + 1);
                }
                setTimeout(() => kg(I));
              }
            }),
            children: typeof f == "function" ? f({ isCurrentTabStop: x, hasTabStop: w != null }) : f
          }
        )
      }
    );
  }
);
Sg.displayName = _g;
var NS = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function TS(n, r) {
  return r !== "rtl" ? n : n === "ArrowLeft" ? "ArrowRight" : n === "ArrowRight" ? "ArrowLeft" : n;
}
function PS(n, r, o) {
  const i = TS(n.key, o);
  if (!(r === "vertical" && ["ArrowLeft", "ArrowRight"].includes(i)) && !(r === "horizontal" && ["ArrowUp", "ArrowDown"].includes(i)))
    return NS[i];
}
function kg(n, r = !1) {
  const o = document.activeElement;
  for (const i of n)
    if (i === o || (i.focus({ preventScroll: r }), document.activeElement !== o)) return;
}
function AS(n, r) {
  return n.map((o, i) => n[(r + i) % n.length]);
}
var OS = wg, IS = Sg, Cg = "Toggle", Eg = _.forwardRef((n, r) => {
  const { pressed: o, defaultPressed: i, onPressedChange: a, ...u } = n, [f, p] = kr({
    prop: o,
    onChange: a,
    defaultProp: i ?? !1,
    caller: Cg
  });
  return /* @__PURE__ */ k.jsx(
    Ze.button,
    {
      type: "button",
      "aria-pressed": f,
      "data-state": f ? "on" : "off",
      "data-disabled": n.disabled ? "" : void 0,
      ...u,
      ref: r,
      onClick: Qe(n.onClick, () => {
        n.disabled || p(!f);
      })
    }
  );
});
Eg.displayName = Cg;
var Tr = "ToggleGroup", [bg] = Xr(Tr, [
  xg
]), Rg = xg(), Pc = ge.forwardRef((n, r) => {
  const { type: o, ...i } = n;
  if (o === "single") {
    const a = i;
    return /* @__PURE__ */ k.jsx(MS, { ...a, ref: r });
  }
  if (o === "multiple") {
    const a = i;
    return /* @__PURE__ */ k.jsx(jS, { ...a, ref: r });
  }
  throw new Error(`Missing prop \`type\` expected on \`${Tr}\``);
});
Pc.displayName = Tr;
var [Ng, Tg] = bg(Tr), MS = ge.forwardRef((n, r) => {
  const {
    value: o,
    defaultValue: i,
    onValueChange: a = () => {
    },
    ...u
  } = n, [f, p] = kr({
    prop: o,
    defaultProp: i ?? "",
    onChange: a,
    caller: Tr
  });
  return /* @__PURE__ */ k.jsx(
    Ng,
    {
      scope: n.__scopeToggleGroup,
      type: "single",
      value: ge.useMemo(() => f ? [f] : [], [f]),
      onItemActivate: p,
      onItemDeactivate: ge.useCallback(() => p(""), [p]),
      children: /* @__PURE__ */ k.jsx(Pg, { ...u, ref: r })
    }
  );
}), jS = ge.forwardRef((n, r) => {
  const {
    value: o,
    defaultValue: i,
    onValueChange: a = () => {
    },
    ...u
  } = n, [f, p] = kr({
    prop: o,
    defaultProp: i ?? [],
    onChange: a,
    caller: Tr
  }), m = ge.useCallback(
    (v) => p((x = []) => [...x, v]),
    [p]
  ), g = ge.useCallback(
    (v) => p((x = []) => x.filter((C) => C !== v)),
    [p]
  );
  return /* @__PURE__ */ k.jsx(
    Ng,
    {
      scope: n.__scopeToggleGroup,
      type: "multiple",
      value: f,
      onItemActivate: m,
      onItemDeactivate: g,
      children: /* @__PURE__ */ k.jsx(Pg, { ...u, ref: r })
    }
  );
});
Pc.displayName = Tr;
var [LS, DS] = bg(Tr), Pg = ge.forwardRef(
  (n, r) => {
    const {
      __scopeToggleGroup: o,
      disabled: i = !1,
      rovingFocus: a = !0,
      orientation: u,
      dir: f,
      loop: p = !0,
      ...m
    } = n, g = Rg(o), v = wc(f), x = { role: "group", dir: v, ...m };
    return /* @__PURE__ */ k.jsx(LS, { scope: o, rovingFocus: a, disabled: i, children: a ? /* @__PURE__ */ k.jsx(
      OS,
      {
        asChild: !0,
        ...g,
        orientation: u,
        dir: v,
        loop: p,
        children: /* @__PURE__ */ k.jsx(Ze.div, { ...x, ref: r })
      }
    ) : /* @__PURE__ */ k.jsx(Ze.div, { ...x, ref: r }) });
  }
), Rl = "ToggleGroupItem", Ag = ge.forwardRef(
  (n, r) => {
    const o = Tg(Rl, n.__scopeToggleGroup), i = DS(Rl, n.__scopeToggleGroup), a = Rg(n.__scopeToggleGroup), u = o.value.includes(n.value), f = i.disabled || n.disabled, p = { ...n, pressed: u, disabled: f }, m = ge.useRef(null);
    return i.rovingFocus ? /* @__PURE__ */ k.jsx(
      IS,
      {
        asChild: !0,
        ...a,
        focusable: !f,
        active: u,
        ref: m,
        children: /* @__PURE__ */ k.jsx(Ch, { ...p, ref: r })
      }
    ) : /* @__PURE__ */ k.jsx(Ch, { ...p, ref: r });
  }
);
Ag.displayName = Rl;
var Ch = ge.forwardRef(
  (n, r) => {
    const { __scopeToggleGroup: o, value: i, ...a } = n, u = Tg(Rl, o), f = { role: "radio", "aria-checked": n.pressed, "aria-pressed": void 0 }, p = u.type === "single" ? f : void 0;
    return /* @__PURE__ */ k.jsx(
      Eg,
      {
        ...p,
        ...a,
        ref: r,
        onPressedChange: (m) => {
          m ? u.onItemActivate(i) : u.onItemDeactivate(i);
        }
      }
    );
  }
), FS = Pc, VS = Ag;
/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zS = (n) => n.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Og = (...n) => n.filter((r, o, i) => !!r && r.trim() !== "" && i.indexOf(r) === o).join(" ").trim();
/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var BS = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const US = _.forwardRef(
  ({
    color: n = "currentColor",
    size: r = 24,
    strokeWidth: o = 2,
    absoluteStrokeWidth: i,
    className: a = "",
    children: u,
    iconNode: f,
    ...p
  }, m) => _.createElement(
    "svg",
    {
      ref: m,
      ...BS,
      width: r,
      height: r,
      stroke: n,
      strokeWidth: i ? Number(o) * 24 / Number(r) : o,
      className: Og("lucide", a),
      ...p
    },
    [
      ...f.map(([g, v]) => _.createElement(g, v)),
      ...Array.isArray(u) ? u : [u]
    ]
  )
);
/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ac = (n, r) => {
  const o = _.forwardRef(
    ({ className: i, ...a }, u) => _.createElement(US, {
      ref: u,
      iconNode: r,
      className: Og(`lucide-${zS(n)}`, i),
      ...a
    })
  );
  return o.displayName = `${n}`, o;
};
/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $S = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], WS = Ac("Check", $S);
/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const HS = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], Ig = Ac("ChevronDown", HS);
/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ZS = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]], GS = Ac("ChevronUp", ZS);
function Mg(n) {
  var r, o, i = "";
  if (typeof n == "string" || typeof n == "number") i += n;
  else if (typeof n == "object") if (Array.isArray(n)) {
    var a = n.length;
    for (r = 0; r < a; r++) n[r] && (o = Mg(n[r])) && (i && (i += " "), i += o);
  } else for (o in n) n[o] && (i && (i += " "), i += o);
  return i;
}
function KS() {
  for (var n, r, o = 0, i = "", a = arguments.length; o < a; o++) (n = arguments[o]) && (r = Mg(n)) && (i && (i += " "), i += r);
  return i;
}
const Oc = "-", QS = (n) => {
  const r = XS(n), {
    conflictingClassGroups: o,
    conflictingClassGroupModifiers: i
  } = n;
  return {
    getClassGroupId: (f) => {
      const p = f.split(Oc);
      return p[0] === "" && p.length !== 1 && p.shift(), jg(p, r) || YS(f);
    },
    getConflictingClassGroupIds: (f, p) => {
      const m = o[f] || [];
      return p && i[f] ? [...m, ...i[f]] : m;
    }
  };
}, jg = (n, r) => {
  var f;
  if (n.length === 0)
    return r.classGroupId;
  const o = n[0], i = r.nextPart.get(o), a = i ? jg(n.slice(1), i) : void 0;
  if (a)
    return a;
  if (r.validators.length === 0)
    return;
  const u = n.join(Oc);
  return (f = r.validators.find(({
    validator: p
  }) => p(u))) == null ? void 0 : f.classGroupId;
}, Eh = /^\[(.+)\]$/, YS = (n) => {
  if (Eh.test(n)) {
    const r = Eh.exec(n)[1], o = r == null ? void 0 : r.substring(0, r.indexOf(":"));
    if (o)
      return "arbitrary.." + o;
  }
}, XS = (n) => {
  const {
    theme: r,
    prefix: o
  } = n, i = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return JS(Object.entries(n.classGroups), o).forEach(([u, f]) => {
    lc(f, i, u, r);
  }), i;
}, lc = (n, r, o, i) => {
  n.forEach((a) => {
    if (typeof a == "string") {
      const u = a === "" ? r : bh(r, a);
      u.classGroupId = o;
      return;
    }
    if (typeof a == "function") {
      if (qS(a)) {
        lc(a(i), r, o, i);
        return;
      }
      r.validators.push({
        validator: a,
        classGroupId: o
      });
      return;
    }
    Object.entries(a).forEach(([u, f]) => {
      lc(f, bh(r, u), o, i);
    });
  });
}, bh = (n, r) => {
  let o = n;
  return r.split(Oc).forEach((i) => {
    o.nextPart.has(i) || o.nextPart.set(i, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), o = o.nextPart.get(i);
  }), o;
}, qS = (n) => n.isThemeGetter, JS = (n, r) => r ? n.map(([o, i]) => {
  const a = i.map((u) => typeof u == "string" ? r + u : typeof u == "object" ? Object.fromEntries(Object.entries(u).map(([f, p]) => [r + f, p])) : u);
  return [o, a];
}) : n, e1 = (n) => {
  if (n < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let r = 0, o = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map();
  const a = (u, f) => {
    o.set(u, f), r++, r > n && (r = 0, i = o, o = /* @__PURE__ */ new Map());
  };
  return {
    get(u) {
      let f = o.get(u);
      if (f !== void 0)
        return f;
      if ((f = i.get(u)) !== void 0)
        return a(u, f), f;
    },
    set(u, f) {
      o.has(u) ? o.set(u, f) : a(u, f);
    }
  };
}, Lg = "!", t1 = (n) => {
  const {
    separator: r,
    experimentalParseClassName: o
  } = n, i = r.length === 1, a = r[0], u = r.length, f = (p) => {
    const m = [];
    let g = 0, v = 0, x;
    for (let y = 0; y < p.length; y++) {
      let A = p[y];
      if (g === 0) {
        if (A === a && (i || p.slice(y, y + u) === r)) {
          m.push(p.slice(v, y)), v = y + u;
          continue;
        }
        if (A === "/") {
          x = y;
          continue;
        }
      }
      A === "[" ? g++ : A === "]" && g--;
    }
    const C = m.length === 0 ? p : p.substring(v), E = C.startsWith(Lg), O = E ? C.substring(1) : C, w = x && x > v ? x - v : void 0;
    return {
      modifiers: m,
      hasImportantModifier: E,
      baseClassName: O,
      maybePostfixModifierPosition: w
    };
  };
  return o ? (p) => o({
    className: p,
    parseClassName: f
  }) : f;
}, n1 = (n) => {
  if (n.length <= 1)
    return n;
  const r = [];
  let o = [];
  return n.forEach((i) => {
    i[0] === "[" ? (r.push(...o.sort(), i), o = []) : o.push(i);
  }), r.push(...o.sort()), r;
}, r1 = (n) => ({
  cache: e1(n.cacheSize),
  parseClassName: t1(n),
  ...QS(n)
}), o1 = /\s+/, s1 = (n, r) => {
  const {
    parseClassName: o,
    getClassGroupId: i,
    getConflictingClassGroupIds: a
  } = r, u = [], f = n.trim().split(o1);
  let p = "";
  for (let m = f.length - 1; m >= 0; m -= 1) {
    const g = f[m], {
      modifiers: v,
      hasImportantModifier: x,
      baseClassName: C,
      maybePostfixModifierPosition: E
    } = o(g);
    let O = !!E, w = i(O ? C.substring(0, E) : C);
    if (!w) {
      if (!O) {
        p = g + (p.length > 0 ? " " + p : p);
        continue;
      }
      if (w = i(C), !w) {
        p = g + (p.length > 0 ? " " + p : p);
        continue;
      }
      O = !1;
    }
    const y = n1(v).join(":"), A = x ? y + Lg : y, N = A + w;
    if (u.includes(N))
      continue;
    u.push(N);
    const I = a(w, O);
    for (let L = 0; L < I.length; ++L) {
      const B = I[L];
      u.push(A + B);
    }
    p = g + (p.length > 0 ? " " + p : p);
  }
  return p;
};
function i1() {
  let n = 0, r, o, i = "";
  for (; n < arguments.length; )
    (r = arguments[n++]) && (o = Dg(r)) && (i && (i += " "), i += o);
  return i;
}
const Dg = (n) => {
  if (typeof n == "string")
    return n;
  let r, o = "";
  for (let i = 0; i < n.length; i++)
    n[i] && (r = Dg(n[i])) && (o && (o += " "), o += r);
  return o;
};
function l1(n, ...r) {
  let o, i, a, u = f;
  function f(m) {
    const g = r.reduce((v, x) => x(v), n());
    return o = r1(g), i = o.cache.get, a = o.cache.set, u = p, p(m);
  }
  function p(m) {
    const g = i(m);
    if (g)
      return g;
    const v = s1(m, o);
    return a(m, v), v;
  }
  return function() {
    return u(i1.apply(null, arguments));
  };
}
const Je = (n) => {
  const r = (o) => o[n] || [];
  return r.isThemeGetter = !0, r;
}, Fg = /^\[(?:([a-z-]+):)?(.+)\]$/i, a1 = /^\d+\/\d+$/, u1 = /* @__PURE__ */ new Set(["px", "full", "screen"]), c1 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, d1 = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, f1 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, p1 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, h1 = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Un = (n) => Lo(n) || u1.has(n) || a1.test(n), mr = (n) => Zo(n, "length", S1), Lo = (n) => !!n && !Number.isNaN(Number(n)), Bu = (n) => Zo(n, "number", Lo), Ms = (n) => !!n && Number.isInteger(Number(n)), m1 = (n) => n.endsWith("%") && Lo(n.slice(0, -1)), je = (n) => Fg.test(n), gr = (n) => c1.test(n), g1 = /* @__PURE__ */ new Set(["length", "size", "percentage"]), v1 = (n) => Zo(n, g1, Vg), y1 = (n) => Zo(n, "position", Vg), x1 = /* @__PURE__ */ new Set(["image", "url"]), w1 = (n) => Zo(n, x1, C1), _1 = (n) => Zo(n, "", k1), js = () => !0, Zo = (n, r, o) => {
  const i = Fg.exec(n);
  return i ? i[1] ? typeof r == "string" ? i[1] === r : r.has(i[1]) : o(i[2]) : !1;
}, S1 = (n) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  d1.test(n) && !f1.test(n)
), Vg = () => !1, k1 = (n) => p1.test(n), C1 = (n) => h1.test(n), E1 = () => {
  const n = Je("colors"), r = Je("spacing"), o = Je("blur"), i = Je("brightness"), a = Je("borderColor"), u = Je("borderRadius"), f = Je("borderSpacing"), p = Je("borderWidth"), m = Je("contrast"), g = Je("grayscale"), v = Je("hueRotate"), x = Je("invert"), C = Je("gap"), E = Je("gradientColorStops"), O = Je("gradientColorStopPositions"), w = Je("inset"), y = Je("margin"), A = Je("opacity"), N = Je("padding"), I = Je("saturate"), L = Je("scale"), B = Je("sepia"), K = Je("skew"), H = Je("space"), ne = Je("translate"), _e = () => ["auto", "contain", "none"], pe = () => ["auto", "hidden", "clip", "visible", "scroll"], Ee = () => ["auto", je, r], $ = () => [je, r], te = () => ["", Un, mr], ce = () => ["auto", Lo, je], Se = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], oe = () => ["solid", "dashed", "dotted", "double", "none"], le = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], z = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], J = () => ["", "0", je], Y = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], P = () => [Lo, je];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [js],
      spacing: [Un, mr],
      blur: ["none", "", gr, je],
      brightness: P(),
      borderColor: [n],
      borderRadius: ["none", "", "full", gr, je],
      borderSpacing: $(),
      borderWidth: te(),
      contrast: P(),
      grayscale: J(),
      hueRotate: P(),
      invert: J(),
      gap: $(),
      gradientColorStops: [n],
      gradientColorStopPositions: [m1, mr],
      inset: Ee(),
      margin: Ee(),
      opacity: P(),
      padding: $(),
      saturate: P(),
      scale: P(),
      sepia: J(),
      skew: P(),
      space: $(),
      translate: $()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", je]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [gr]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": Y()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": Y()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [...Se(), je]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: pe()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": pe()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": pe()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: _e()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": _e()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": _e()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [w]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [w]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [w]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [w]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [w]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [w]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [w]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [w]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [w]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", Ms, je]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: Ee()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", je]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: J()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: J()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", Ms, je]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [js]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", Ms, je]
        }, je]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": ce()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": ce()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [js]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [Ms, je]
        }, je]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": ce()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": ce()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", je]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", je]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [C]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [C]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [C]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...z()]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...z(), "baseline"]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [...z(), "baseline"]
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [N]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [N]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [N]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [N]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [N]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [N]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [N]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [N]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [N]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [y]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [y]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [y]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [y]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [y]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [y]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [y]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [y]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [y]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [H]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [H]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", je, r]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [je, r, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [je, r, "none", "full", "min", "max", "fit", "prose", {
          screen: [gr]
        }, gr]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [je, r, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [je, r, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [je, r, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [je, r, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", gr, mr]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Bu]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [js]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", je]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", Lo, Bu]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Un, je]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", je]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", je]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [n]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [A]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [n]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [A]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...oe(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", Un, mr]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", Un, je]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [n]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: $()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", je]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", je]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [A]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [...Se(), y1]
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", v1]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, w1]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [n]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [O]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [O]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [O]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [E]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [E]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [E]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [u]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [u]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [u]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [u]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [u]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [u]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [u]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [u]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [u]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [u]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [u]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [u]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [u]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [u]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [u]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [p]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [p]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [p]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [p]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [p]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [p]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [p]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [p]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [p]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [A]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...oe(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [p]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [p]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [A]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: oe()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [a]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [a]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [a]
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": [a]
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": [a]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [a]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [a]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [a]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [a]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [a]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...oe()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [Un, je]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Un, mr]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [n]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: te()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [n]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [A]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [Un, mr]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [n]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", gr, _1]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [js]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [A]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...le(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": le()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [o]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [i]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [m]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", gr, je]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [g]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [v]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [x]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [I]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [B]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [o]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [i]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [m]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [g]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [v]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [x]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [A]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [I]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [B]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [f]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [f]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [f]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", je]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: P()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", je]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: P()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", je]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [L]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [L]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [L]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [Ms, je]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [ne]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [ne]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [K]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [K]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", je]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", n]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", je]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [n]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": $()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": $()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": $()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": $()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": $()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": $()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": $()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": $()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": $()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": $()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": $()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": $()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": $()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": $()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": $()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": $()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": $()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": $()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", je]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [n, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [Un, mr, Bu]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [n, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}, b1 = /* @__PURE__ */ l1(E1);
function zg(...n) {
  return b1(KS(n));
}
function R1({ children: n }) {
  return /* @__PURE__ */ k.jsx("div", { className: "of-rounded-xl2 of-border of-border-white/8 of-bg-[linear-gradient(180deg,rgba(26,33,64,0.94)_0%,rgba(15,19,36,0.98)_100%)] of-p-6 of-shadow-panel", children: n });
}
function N1({ title: n, copy: r }) {
  return /* @__PURE__ */ k.jsxs("div", { className: "of-mb-5", children: [
    /* @__PURE__ */ k.jsx("div", { className: "of-font-display of-mb-1 of-text-[22px] of-font-bold of-tracking-[-0.03em] of-text-text", children: n }),
    /* @__PURE__ */ k.jsx("div", { className: "of-max-w-[620px] of-text-sm of-leading-6 of-text-muted", children: r })
  ] });
}
function vt({
  label: n,
  error: r,
  helper: o
}) {
  return /* @__PURE__ */ k.jsxs("div", { className: "of-mb-2", children: [
    /* @__PURE__ */ k.jsx("div", { className: "of-mb-1 of-text-[13px] of-font-semibold of-leading-5 of-text-text", children: n }),
    r ? /* @__PURE__ */ k.jsx("div", { className: "of-text-[12px] of-leading-5 of-text-rose-300", children: r }) : o ? /* @__PURE__ */ k.jsx("div", { className: "of-text-[12px] of-leading-5 of-text-subtle", children: o }) : null
  ] });
}
function Fs(n) {
  return /* @__PURE__ */ k.jsx(
    "input",
    {
      ...n,
      className: zg(
        "of-h-[52px] of-w-full of-rounded-[18px] of-border of-border-white/8 of-bg-[#0B1124] of-px-4 of-text-[15px] of-font-medium of-text-text of-outline-none of-transition",
        "placeholder:of-text-subtle focus:of-border-accent-soft focus:of-shadow-[0_0_0_4px_rgba(139,92,246,0.18)]",
        n.className
      )
    }
  );
}
function Rh(n) {
  return /* @__PURE__ */ k.jsx(Fs, { ...n, type: "number", inputMode: "numeric" });
}
function Nh({
  children: n,
  variant: r = "ghost",
  className: o,
  ...i
}) {
  return /* @__PURE__ */ k.jsx(
    "button",
    {
      ...i,
      className: zg(
        "of-inline-flex of-h-[52px] of-w-full of-items-center of-justify-center of-rounded-[18px] of-border of-px-4 of-text-[15px] of-font-semibold of-transition",
        r === "primary" ? "of-border-accent-soft/20 of-bg-[linear-gradient(90deg,#8B5CF6,#A855F7)] of-text-white of-shadow-glow hover:of-brightness-105" : "of-border-white/10 of-bg-white/4 of-text-text hover:of-border-accent-soft/25 hover:of-bg-white/6",
        "disabled:of-cursor-not-allowed disabled:of-opacity-50",
        o
      ),
      children: n
    }
  );
}
function $n({
  value: n,
  onValueChange: r,
  options: o
}) {
  return /* @__PURE__ */ k.jsxs(iS, { value: n, onValueChange: r, children: [
    /* @__PURE__ */ k.jsxs(lS, { className: "of-flex of-h-[52px] of-w-full of-items-center of-justify-between of-rounded-[18px] of-border of-border-white/8 of-bg-[#0B1124] of-px-4 of-text-[15px] of-font-medium of-text-text of-outline-none of-transition focus:of-border-accent-soft focus:of-shadow-[0_0_0_4px_rgba(139,92,246,0.18)]", children: [
      /* @__PURE__ */ k.jsx(aS, {}),
      /* @__PURE__ */ k.jsx(uS, { className: "of-text-subtle", children: /* @__PURE__ */ k.jsx(Ig, { className: "of-h-4 of-w-4" }) })
    ] }),
    /* @__PURE__ */ k.jsx(cS, { children: /* @__PURE__ */ k.jsx(
      dS,
      {
        position: "popper",
        sideOffset: 8,
        className: "of-z-[2000] of-w-[var(--radix-select-trigger-width)] of-overflow-hidden of-rounded-[18px] of-border of-border-white/8 of-bg-[#11162B] of-shadow-panel",
        children: /* @__PURE__ */ k.jsx(fS, { className: "of-p-2", children: o.map((i) => /* @__PURE__ */ k.jsxs(
          pS,
          {
            value: i.value,
            className: "of-flex of-cursor-pointer of-items-center of-justify-between of-rounded-xl of-px-3 of-py-2.5 of-text-sm of-text-text of-outline-none hover:of-bg-white/6 data-[highlighted]:of-bg-white/6",
            children: [
              /* @__PURE__ */ k.jsx(hS, { children: i.label }),
              /* @__PURE__ */ k.jsx(mS, { children: /* @__PURE__ */ k.jsx(WS, { className: "of-h-4 of-w-4 of-text-accent-soft" }) })
            ]
          },
          i.value
        )) })
      }
    ) })
  ] });
}
function Th({
  value: n,
  onValueChange: r,
  options: o
}) {
  return /* @__PURE__ */ k.jsx(
    FS,
    {
      type: "single",
      value: n,
      onValueChange: (i) => {
        i && r(i);
      },
      className: "of-grid of-h-[52px] of-w-full of-grid-flow-col of-auto-cols-fr of-overflow-hidden of-rounded-[18px] of-border of-border-white/8 of-bg-[#0B1124]",
      children: o.map((i) => /* @__PURE__ */ k.jsx(
        VS,
        {
          value: i,
          className: "of-flex of-items-center of-justify-center of-border-r of-border-white/8 of-px-3 of-text-[15px] of-font-semibold of-text-muted of-transition last:of-border-r-0 data-[state=on]:of-bg-accent/18 data-[state=on]:of-text-accent-soft",
          children: i
        },
        i
      ))
    }
  );
}
function T1({
  checked: n,
  onCheckedChange: r
}) {
  return /* @__PURE__ */ k.jsxs("div", { className: "of-flex of-h-full of-flex-col of-justify-between of-rounded-[18px] of-border of-border-white/8 of-bg-white/3 of-p-4", children: [
    /* @__PURE__ */ k.jsxs("div", { children: [
      /* @__PURE__ */ k.jsx("div", { className: "of-mb-1 of-text-[13px] of-font-semibold of-text-text", children: "Subscriber Visibility" }),
      /* @__PURE__ */ k.jsx("div", { className: "of-text-[12px] of-leading-5 of-text-subtle", children: "Keep channels with hidden subscriber counts in the scan when subscriber size is not publicly visible." })
    ] }),
    /* @__PURE__ */ k.jsxs("label", { className: "of-mt-4 of-flex of-items-center of-justify-between of-gap-3", children: [
      /* @__PURE__ */ k.jsx("span", { className: "of-text-sm of-font-medium of-text-text", children: "Include Hidden Subscriber Counts" }),
      /* @__PURE__ */ k.jsx(
        wS,
        {
          checked: n,
          onCheckedChange: r,
          className: "of-relative of-h-7 of-w-12 of-rounded-full of-bg-white/10 of-transition data-[state=checked]:of-bg-accent",
          children: /* @__PURE__ */ k.jsx(_S, { className: "of-block of-h-5 of-w-5 of-translate-x-1 of-rounded-full of-bg-white of-transition will-change-transform data-[state=checked]:of-translate-x-6" })
        }
      )
    ] })
  ] });
}
function P1({
  open: n,
  onOpenChange: r,
  children: o
}) {
  return /* @__PURE__ */ k.jsxs(cw, { open: n, onOpenChange: r, children: [
    /* @__PURE__ */ k.jsx(dw, { asChild: !0, children: /* @__PURE__ */ k.jsxs("button", { className: "of-flex of-h-[52px] of-w-full of-items-center of-justify-between of-rounded-[18px] of-border of-border-white/8 of-bg-white/3 of-px-4 of-text-left of-text-[15px] of-font-semibold of-text-text", children: [
      /* @__PURE__ */ k.jsx("span", { children: "More Filters" }),
      n ? /* @__PURE__ */ k.jsx(GS, { className: "of-h-4 of-w-4 of-text-subtle" }) : /* @__PURE__ */ k.jsx(Ig, { className: "of-h-4 of-w-4 of-text-subtle" })
    ] }) }),
    /* @__PURE__ */ k.jsx(fw, { className: "of-mt-3 of-rounded-[18px] of-border of-border-white/8 of-bg-white/2 of-p-4", children: o })
  ] });
}
function Ph(n) {
  return {
    ...n,
    min_views: Number(n.min_views),
    min_subscribers: Number(n.min_subscribers),
    max_subscribers: Number(n.max_subscribers),
    search_pages: Number(n.search_pages),
    baseline_channels: Number(n.baseline_channels),
    baseline_videos: Number(n.baseline_videos),
    custom_start: n.timeframe === "Custom" && n.custom_start || "",
    custom_end: n.timeframe === "Custom" && n.custom_end || ""
  };
}
function vr(n) {
  return n.map((r) => ({ label: typeof r == "number" ? `${r}` : r, value: String(r) }));
}
function A1({ component: n }) {
  var C, E, O, w;
  const r = n.data, [o, i] = _.useState(!1), a = _.useRef(null), u = cx({
    resolver: hx($x),
    defaultValues: r.values,
    mode: "onSubmit"
  }), f = u.watch("timeframe");
  _.useEffect(() => {
    u.reset(r.values);
  }, [r.values, u]), _.useEffect(() => {
    const y = u.watch((A) => {
      a.current && window.clearTimeout(a.current), a.current = window.setTimeout(() => {
        n.setStateValue("draft", Ph(A));
      }, 120);
    });
    return () => {
      y.unsubscribe(), a.current && window.clearTimeout(a.current);
    };
  }, [n, u]);
  const p = _.useMemo(
    () => r.options.minViews.map((y) => ({
      label: y === 0 ? "No Minimum" : `${y.toLocaleString()}+`,
      value: String(y)
    })),
    [r.options.minViews]
  ), m = _.useMemo(() => vr(r.options.advanced.searchPages), [r.options.advanced.searchPages]), g = _.useMemo(
    () => vr(r.options.advanced.baselineChannels),
    [r.options.advanced.baselineChannels]
  ), v = _.useMemo(
    () => vr(r.options.advanced.baselineVideos),
    [r.options.advanced.baselineVideos]
  ), x = u.handleSubmit((y) => {
    n.setTriggerValue("submitted", Ph(y));
  });
  return /* @__PURE__ */ k.jsxs("div", { className: "of-font-ui of-mx-auto of-max-w-[1040px] of-text-text", children: [
    r.prefillNote ? /* @__PURE__ */ k.jsxs("div", { className: "of-mb-4 of-inline-flex of-items-center of-gap-2 of-rounded-full of-border of-border-accent-soft/20 of-bg-accent/14 of-px-4 of-py-2 of-text-[12px] of-font-medium of-text-[#E6DFFC]", children: [
      "Suggested Query Loaded",
      /* @__PURE__ */ k.jsx("span", { className: "of-text-subtle", children: r.prefillNote })
    ] }) : null,
    /* @__PURE__ */ k.jsxs(R1, { children: [
      /* @__PURE__ */ k.jsx(
        N1,
        {
          title: "Search A Niche",
          copy: "Scan any topic, tighten the filters, and surface the videos that are outperforming their likely baseline."
        }
      ),
      /* @__PURE__ */ k.jsxs(
        "form",
        {
          className: "of-space-y-[18px]",
          onSubmit: (y) => {
            y.preventDefault(), x(y);
          },
          children: [
            /* @__PURE__ */ k.jsxs("div", { className: "of-grid of-gap-3 lg:of-grid-cols-12", children: [
              /* @__PURE__ */ k.jsxs("div", { className: "lg:of-col-span-8", children: [
                /* @__PURE__ */ k.jsx(vt, { label: "Niche Or Keyword", error: (C = u.formState.errors.query) == null ? void 0 : C.message }),
                /* @__PURE__ */ k.jsx(
                  Fs,
                  {
                    placeholder: "AI Automation, Documentary Storytelling, Science Shorts, Luxury Fitness...",
                    ...u.register("query")
                  }
                )
              ] }),
              /* @__PURE__ */ k.jsxs("div", { className: "lg:of-col-span-4", children: [
                /* @__PURE__ */ k.jsx(vt, { label: "Actions" }),
                /* @__PURE__ */ k.jsxs("div", { className: "of-grid of-grid-cols-2 of-gap-3", children: [
                  /* @__PURE__ */ k.jsx(Nh, { type: "submit", variant: "primary", disabled: r.disabled.submit, children: "Find Outliers" }),
                  /* @__PURE__ */ k.jsx(
                    Nh,
                    {
                      type: "button",
                      onClick: () => {
                        u.reset(r.values), n.setTriggerValue("reset", !0);
                      },
                      children: "Reset Filters"
                    }
                  )
                ] })
              ] })
            ] }),
            /* @__PURE__ */ k.jsxs("div", { className: "of-grid of-gap-3 md:of-grid-cols-2 xl:of-grid-cols-4", children: [
              /* @__PURE__ */ k.jsxs("div", { children: [
                /* @__PURE__ */ k.jsx(vt, { label: "Timeframe" }),
                /* @__PURE__ */ k.jsx(
                  nn,
                  {
                    control: u.control,
                    name: "timeframe",
                    render: ({ field: y }) => /* @__PURE__ */ k.jsx($n, { value: y.value, onValueChange: y.onChange, options: vr(r.options.timeframes) })
                  }
                )
              ] }),
              /* @__PURE__ */ k.jsxs("div", { children: [
                /* @__PURE__ */ k.jsx(vt, { label: "Match Mode" }),
                /* @__PURE__ */ k.jsx(
                  nn,
                  {
                    control: u.control,
                    name: "match_mode",
                    render: ({ field: y }) => /* @__PURE__ */ k.jsx(Th, { value: y.value, onValueChange: y.onChange, options: r.options.matchModes })
                  }
                )
              ] }),
              /* @__PURE__ */ k.jsxs("div", { children: [
                /* @__PURE__ */ k.jsx(vt, { label: "Region" }),
                /* @__PURE__ */ k.jsx(
                  nn,
                  {
                    control: u.control,
                    name: "region",
                    render: ({ field: y }) => /* @__PURE__ */ k.jsx($n, { value: y.value, onValueChange: y.onChange, options: vr(r.options.regions) })
                  }
                )
              ] }),
              /* @__PURE__ */ k.jsxs("div", { children: [
                /* @__PURE__ */ k.jsx(vt, { label: "Language" }),
                /* @__PURE__ */ k.jsx(
                  nn,
                  {
                    control: u.control,
                    name: "language",
                    render: ({ field: y }) => /* @__PURE__ */ k.jsx($n, { value: y.value, onValueChange: y.onChange, options: vr(r.options.languages) })
                  }
                )
              ] })
            ] }),
            f === "Custom" ? /* @__PURE__ */ k.jsxs("div", { className: "of-grid of-gap-3 md:of-grid-cols-2", children: [
              /* @__PURE__ */ k.jsxs("div", { children: [
                /* @__PURE__ */ k.jsx(vt, { label: "Custom Start Date", error: (E = u.formState.errors.custom_start) == null ? void 0 : E.message }),
                /* @__PURE__ */ k.jsx(Fs, { type: "date", ...u.register("custom_start") })
              ] }),
              /* @__PURE__ */ k.jsxs("div", { children: [
                /* @__PURE__ */ k.jsx(vt, { label: "Custom End Date", error: (O = u.formState.errors.custom_end) == null ? void 0 : O.message }),
                /* @__PURE__ */ k.jsx(Fs, { type: "date", ...u.register("custom_end") })
              ] })
            ] }) : null,
            /* @__PURE__ */ k.jsxs("div", { className: "of-grid of-gap-3 md:of-grid-cols-2 xl:of-grid-cols-4", children: [
              /* @__PURE__ */ k.jsxs("div", { children: [
                /* @__PURE__ */ k.jsx(vt, { label: "Freshness Focus" }),
                /* @__PURE__ */ k.jsx(
                  nn,
                  {
                    control: u.control,
                    name: "freshness_focus",
                    render: ({ field: y }) => /* @__PURE__ */ k.jsx($n, { value: y.value, onValueChange: y.onChange, options: vr(r.options.freshness) })
                  }
                )
              ] }),
              /* @__PURE__ */ k.jsxs("div", { children: [
                /* @__PURE__ */ k.jsx(vt, { label: "Duration Preference" }),
                /* @__PURE__ */ k.jsx(
                  nn,
                  {
                    control: u.control,
                    name: "duration_preference",
                    render: ({ field: y }) => /* @__PURE__ */ k.jsx($n, { value: y.value, onValueChange: y.onChange, options: vr(r.options.durations) })
                  }
                )
              ] }),
              /* @__PURE__ */ k.jsxs("div", { children: [
                /* @__PURE__ */ k.jsx(vt, { label: "Language Strictness" }),
                /* @__PURE__ */ k.jsx(
                  nn,
                  {
                    control: u.control,
                    name: "language_strictness",
                    render: ({ field: y }) => /* @__PURE__ */ k.jsx(Th, { value: y.value, onValueChange: y.onChange, options: r.options.strictness })
                  }
                )
              ] }),
              /* @__PURE__ */ k.jsxs("div", { children: [
                /* @__PURE__ */ k.jsx(vt, { label: "Minimum Views" }),
                /* @__PURE__ */ k.jsx(
                  nn,
                  {
                    control: u.control,
                    name: "min_views",
                    render: ({ field: y }) => /* @__PURE__ */ k.jsx(
                      $n,
                      {
                        value: String(y.value),
                        onValueChange: (A) => y.onChange(Number(A)),
                        options: p
                      }
                    )
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ k.jsxs("div", { className: "of-grid of-gap-3 xl:of-grid-cols-12", children: [
              /* @__PURE__ */ k.jsxs("div", { className: "xl:of-col-span-8", children: [
                /* @__PURE__ */ k.jsx("div", { className: "of-mb-2 of-text-[13px] of-font-semibold of-text-text", children: "Channel Size" }),
                /* @__PURE__ */ k.jsxs("div", { className: "of-grid of-gap-3 md:of-grid-cols-2", children: [
                  /* @__PURE__ */ k.jsxs("div", { children: [
                    /* @__PURE__ */ k.jsx(vt, { label: "Minimum Subscribers" }),
                    /* @__PURE__ */ k.jsx(Rh, { ...u.register("min_subscribers", { valueAsNumber: !0 }) })
                  ] }),
                  /* @__PURE__ */ k.jsxs("div", { children: [
                    /* @__PURE__ */ k.jsx(
                      vt,
                      {
                        label: "Maximum Subscribers",
                        error: (w = u.formState.errors.max_subscribers) == null ? void 0 : w.message,
                        helper: "Leave At 0 To Keep The Upper Bound Open."
                      }
                    ),
                    /* @__PURE__ */ k.jsx(Rh, { ...u.register("max_subscribers", { valueAsNumber: !0 }) })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ k.jsxs("div", { className: "xl:of-col-span-4", children: [
                /* @__PURE__ */ k.jsx(vt, { label: "Visibility Handling" }),
                /* @__PURE__ */ k.jsx(
                  nn,
                  {
                    control: u.control,
                    name: "include_hidden",
                    render: ({ field: y }) => /* @__PURE__ */ k.jsx(T1, { checked: !!y.value, onCheckedChange: y.onChange })
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ k.jsxs("div", { children: [
              /* @__PURE__ */ k.jsx(vt, { label: "Exclude Keywords", helper: "Use commas to exclude obvious false positives from the scan." }),
              /* @__PURE__ */ k.jsx(Fs, { placeholder: "News, Reaction, Podcast Clips", ...u.register("exclude_keywords") })
            ] }),
            /* @__PURE__ */ k.jsx(P1, { open: o, onOpenChange: i, children: /* @__PURE__ */ k.jsxs("div", { className: "of-grid of-gap-3 md:of-grid-cols-3", children: [
              /* @__PURE__ */ k.jsxs("div", { children: [
                /* @__PURE__ */ k.jsx(vt, { label: "Search Depth", helper: "Each extra page adds about 100 search quota units." }),
                /* @__PURE__ */ k.jsx(
                  nn,
                  {
                    control: u.control,
                    name: "search_pages",
                    render: ({ field: y }) => /* @__PURE__ */ k.jsx(
                      $n,
                      {
                        value: String(y.value),
                        onValueChange: (A) => y.onChange(Number(A)),
                        options: m
                      }
                    )
                  }
                )
              ] }),
              /* @__PURE__ */ k.jsxs("div", { children: [
                /* @__PURE__ */ k.jsx(vt, { label: "Baseline Channels" }),
                /* @__PURE__ */ k.jsx(
                  nn,
                  {
                    control: u.control,
                    name: "baseline_channels",
                    render: ({ field: y }) => /* @__PURE__ */ k.jsx(
                      $n,
                      {
                        value: String(y.value),
                        onValueChange: (A) => y.onChange(Number(A)),
                        options: g
                      }
                    )
                  }
                )
              ] }),
              /* @__PURE__ */ k.jsxs("div", { children: [
                /* @__PURE__ */ k.jsx(vt, { label: "Baseline Uploads Per Channel" }),
                /* @__PURE__ */ k.jsx(
                  nn,
                  {
                    control: u.control,
                    name: "baseline_videos",
                    render: ({ field: y }) => /* @__PURE__ */ k.jsx(
                      $n,
                      {
                        value: String(y.value),
                        onValueChange: (A) => y.onChange(Number(A)),
                        options: v
                      }
                    )
                  }
                )
              ] })
            ] }) }),
            /* @__PURE__ */ k.jsx("div", { className: "of-text-[12px] of-leading-6 of-text-subtle", children: "Use tighter filters when you want a cleaner research set, and broader settings when you want a wider scouting pass." })
          ]
        }
      )
    ] })
  ] });
}
const ul = /* @__PURE__ */ new WeakMap();
function O1(n) {
  const r = n.parentElement;
  let o = r.querySelector('[data-of-search-form="true"]');
  o || (o = document.createElement("div"), o.dataset.ofSearchForm = "true", o.className = "of-root", r.innerHTML = "", r.appendChild(o));
  let i = ul.get(o);
  return i || (i = $y.createRoot(o), ul.set(o, i)), i.render(
    /* @__PURE__ */ k.jsx(ge.StrictMode, { children: /* @__PURE__ */ k.jsx(A1, { component: n }) })
  ), () => {
    const a = ul.get(o);
    a == null || a.unmount(), ul.delete(o);
  };
}
export {
  O1 as default
};

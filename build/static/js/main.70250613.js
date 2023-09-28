/*! For license information please see main.70250613.js.LICENSE.txt */
!(function () {
  "use strict";
  var e = {
      463: function (e, t, n) {
        var r = n(791),
          i = n(296);
        function a(e) {
          for (
            var t =
                "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
              n = 1;
            n < arguments.length;
            n++
          )
            t += "&args[]=" + encodeURIComponent(arguments[n]);
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        var o = new Set(),
          s = {};
        function l(e, t) {
          u(e, t), u(e + "Capture", t);
        }
        function u(e, t) {
          for (s[e] = t, e = 0; e < t.length; e++) o.add(t[e]);
        }
        var c = !(
            "undefined" === typeof window ||
            "undefined" === typeof window.document ||
            "undefined" === typeof window.document.createElement
          ),
          f = Object.prototype.hasOwnProperty,
          h =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          d = {},
          p = {};
        function v(e, t, n, r, i, a, o) {
          (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
            (this.attributeName = r),
            (this.attributeNamespace = i),
            (this.mustUseProperty = n),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = a),
            (this.removeEmptyString = o);
        }
        var g = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
          .split(" ")
          .forEach(function (e) {
            g[e] = new v(e, 0, !1, e, null, !1, !1);
          }),
          [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
          ].forEach(function (e) {
            var t = e[0];
            g[t] = new v(t, 1, !1, e[1], null, !1, !1);
          }),
          ["contentEditable", "draggable", "spellCheck", "value"].forEach(
            function (e) {
              g[e] = new v(e, 2, !1, e.toLowerCase(), null, !1, !1);
            }
          ),
          [
            "autoReverse",
            "externalResourcesRequired",
            "focusable",
            "preserveAlpha",
          ].forEach(function (e) {
            g[e] = new v(e, 2, !1, e, null, !1, !1);
          }),
          "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
            .split(" ")
            .forEach(function (e) {
              g[e] = new v(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
          ["checked", "multiple", "muted", "selected"].forEach(function (e) {
            g[e] = new v(e, 3, !0, e, null, !1, !1);
          }),
          ["capture", "download"].forEach(function (e) {
            g[e] = new v(e, 4, !1, e, null, !1, !1);
          }),
          ["cols", "rows", "size", "span"].forEach(function (e) {
            g[e] = new v(e, 6, !1, e, null, !1, !1);
          }),
          ["rowSpan", "start"].forEach(function (e) {
            g[e] = new v(e, 5, !1, e.toLowerCase(), null, !1, !1);
          });
        var m = /[\-:]([a-z])/g;
        function y(e) {
          return e[1].toUpperCase();
        }
        function b(e, t, n, r) {
          var i = g.hasOwnProperty(t) ? g[t] : null;
          (null !== i
            ? 0 !== i.type
            : r ||
              !(2 < t.length) ||
              ("o" !== t[0] && "O" !== t[0]) ||
              ("n" !== t[1] && "N" !== t[1])) &&
            ((function (e, t, n, r) {
              if (
                null === t ||
                "undefined" === typeof t ||
                (function (e, t, n, r) {
                  if (null !== n && 0 === n.type) return !1;
                  switch (typeof t) {
                    case "function":
                    case "symbol":
                      return !0;
                    case "boolean":
                      return (
                        !r &&
                        (null !== n
                          ? !n.acceptsBooleans
                          : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                            "aria-" !== e)
                      );
                    default:
                      return !1;
                  }
                })(e, t, n, r)
              )
                return !0;
              if (r) return !1;
              if (null !== n)
                switch (n.type) {
                  case 3:
                    return !t;
                  case 4:
                    return !1 === t;
                  case 5:
                    return isNaN(t);
                  case 6:
                    return isNaN(t) || 1 > t;
                }
              return !1;
            })(t, n, i, r) && (n = null),
            r || null === i
              ? (function (e) {
                  return (
                    !!f.call(p, e) ||
                    (!f.call(d, e) &&
                      (h.test(e) ? (p[e] = !0) : ((d[e] = !0), !1)))
                  );
                })(t) &&
                (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
              : i.mustUseProperty
              ? (e[i.propertyName] = null === n ? 3 !== i.type && "" : n)
              : ((t = i.attributeName),
                (r = i.attributeNamespace),
                null === n
                  ? e.removeAttribute(t)
                  : ((n =
                      3 === (i = i.type) || (4 === i && !0 === n)
                        ? ""
                        : "" + n),
                    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
        }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
          .split(" ")
          .forEach(function (e) {
            var t = e.replace(m, y);
            g[t] = new v(t, 1, !1, e, null, !1, !1);
          }),
          "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
            .split(" ")
            .forEach(function (e) {
              var t = e.replace(m, y);
              g[t] = new v(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
            }),
          ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
            var t = e.replace(m, y);
            g[t] = new v(
              t,
              1,
              !1,
              e,
              "http://www.w3.org/XML/1998/namespace",
              !1,
              !1
            );
          }),
          ["tabIndex", "crossOrigin"].forEach(function (e) {
            g[e] = new v(e, 1, !1, e.toLowerCase(), null, !1, !1);
          }),
          (g.xlinkHref = new v(
            "xlinkHref",
            1,
            !1,
            "xlink:href",
            "http://www.w3.org/1999/xlink",
            !0,
            !1
          )),
          ["src", "href", "action", "formAction"].forEach(function (e) {
            g[e] = new v(e, 1, !1, e.toLowerCase(), null, !0, !0);
          });
        var x = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          k = Symbol.for("react.element"),
          _ = Symbol.for("react.portal"),
          w = Symbol.for("react.fragment"),
          S = Symbol.for("react.strict_mode"),
          E = Symbol.for("react.profiler"),
          M = Symbol.for("react.provider"),
          C = Symbol.for("react.context"),
          P = Symbol.for("react.forward_ref"),
          O = Symbol.for("react.suspense"),
          T = Symbol.for("react.suspense_list"),
          D = Symbol.for("react.memo"),
          L = Symbol.for("react.lazy");
        Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
        var R = Symbol.for("react.offscreen");
        Symbol.for("react.legacy_hidden"),
          Symbol.for("react.cache"),
          Symbol.for("react.tracing_marker");
        var A = Symbol.iterator;
        function N(e) {
          return null === e || "object" !== typeof e
            ? null
            : "function" === typeof (e = (A && e[A]) || e["@@iterator"])
            ? e
            : null;
        }
        var z,
          F = Object.assign;
        function I(e) {
          if (void 0 === z)
            try {
              throw Error();
            } catch (n) {
              var t = n.stack.trim().match(/\n( *(at )?)/);
              z = (t && t[1]) || "";
            }
          return "\n" + z + e;
        }
        var j = !1;
        function B(e, t) {
          if (!e || j) return "";
          j = !0;
          var n = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (t)
              if (
                ((t = function () {
                  throw Error();
                }),
                Object.defineProperty(t.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                "object" === typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(t, []);
                } catch (u) {
                  var r = u;
                }
                Reflect.construct(e, [], t);
              } else {
                try {
                  t.call();
                } catch (u) {
                  r = u;
                }
                e.call(t.prototype);
              }
            else {
              try {
                throw Error();
              } catch (u) {
                r = u;
              }
              e();
            }
          } catch (u) {
            if (u && r && "string" === typeof u.stack) {
              for (
                var i = u.stack.split("\n"),
                  a = r.stack.split("\n"),
                  o = i.length - 1,
                  s = a.length - 1;
                1 <= o && 0 <= s && i[o] !== a[s];

              )
                s--;
              for (; 1 <= o && 0 <= s; o--, s--)
                if (i[o] !== a[s]) {
                  if (1 !== o || 1 !== s)
                    do {
                      if ((o--, 0 > --s || i[o] !== a[s])) {
                        var l = "\n" + i[o].replace(" at new ", " at ");
                        return (
                          e.displayName &&
                            l.includes("<anonymous>") &&
                            (l = l.replace("<anonymous>", e.displayName)),
                          l
                        );
                      }
                    } while (1 <= o && 0 <= s);
                  break;
                }
            }
          } finally {
            (j = !1), (Error.prepareStackTrace = n);
          }
          return (e = e ? e.displayName || e.name : "") ? I(e) : "";
        }
        function V(e) {
          switch (e.tag) {
            case 5:
              return I(e.type);
            case 16:
              return I("Lazy");
            case 13:
              return I("Suspense");
            case 19:
              return I("SuspenseList");
            case 0:
            case 2:
            case 15:
              return (e = B(e.type, !1));
            case 11:
              return (e = B(e.type.render, !1));
            case 1:
              return (e = B(e.type, !0));
            default:
              return "";
          }
        }
        function W(e) {
          if (null == e) return null;
          if ("function" === typeof e) return e.displayName || e.name || null;
          if ("string" === typeof e) return e;
          switch (e) {
            case w:
              return "Fragment";
            case _:
              return "Portal";
            case E:
              return "Profiler";
            case S:
              return "StrictMode";
            case O:
              return "Suspense";
            case T:
              return "SuspenseList";
          }
          if ("object" === typeof e)
            switch (e.$$typeof) {
              case C:
                return (e.displayName || "Context") + ".Consumer";
              case M:
                return (e._context.displayName || "Context") + ".Provider";
              case P:
                var t = e.render;
                return (
                  (e = e.displayName) ||
                    (e =
                      "" !== (e = t.displayName || t.name || "")
                        ? "ForwardRef(" + e + ")"
                        : "ForwardRef"),
                  e
                );
              case D:
                return null !== (t = e.displayName || null)
                  ? t
                  : W(e.type) || "Memo";
              case L:
                (t = e._payload), (e = e._init);
                try {
                  return W(e(t));
                } catch (n) {}
            }
          return null;
        }
        function H(e) {
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
              return (
                (e = (e = t.render).displayName || e.name || ""),
                t.displayName ||
                  ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef")
              );
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
              return W(t);
            case 8:
              return t === S ? "StrictMode" : "Mode";
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
              if ("function" === typeof t)
                return t.displayName || t.name || null;
              if ("string" === typeof t) return t;
          }
          return null;
        }
        function U(e) {
          switch (typeof e) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
            case "object":
              return e;
            default:
              return "";
          }
        }
        function $(e) {
          var t = e.type;
          return (
            (e = e.nodeName) &&
            "input" === e.toLowerCase() &&
            ("checkbox" === t || "radio" === t)
          );
        }
        function Y(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = $(e) ? "checked" : "value",
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = "" + e[t];
              if (
                !e.hasOwnProperty(t) &&
                "undefined" !== typeof n &&
                "function" === typeof n.get &&
                "function" === typeof n.set
              ) {
                var i = n.get,
                  a = n.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return i.call(this);
                    },
                    set: function (e) {
                      (r = "" + e), a.call(this, e);
                    },
                  }),
                  Object.defineProperty(e, t, { enumerable: n.enumerable }),
                  {
                    getValue: function () {
                      return r;
                    },
                    setValue: function (e) {
                      r = "" + e;
                    },
                    stopTracking: function () {
                      (e._valueTracker = null), delete e[t];
                    },
                  }
                );
              }
            })(e));
        }
        function q(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
            r = "";
          return (
            e && (r = $(e) ? (e.checked ? "true" : "false") : e.value),
            (e = r) !== n && (t.setValue(e), !0)
          );
        }
        function K(e) {
          if (
            "undefined" ===
            typeof (e =
              e || ("undefined" !== typeof document ? document : void 0))
          )
            return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        function Q(e, t) {
          var n = t.checked;
          return F({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked,
          });
        }
        function X(e, t) {
          var n = null == t.defaultValue ? "" : t.defaultValue,
            r = null != t.checked ? t.checked : t.defaultChecked;
          (n = U(null != t.value ? t.value : n)),
            (e._wrapperState = {
              initialChecked: r,
              initialValue: n,
              controlled:
                "checkbox" === t.type || "radio" === t.type
                  ? null != t.checked
                  : null != t.value,
            });
        }
        function G(e, t) {
          null != (t = t.checked) && b(e, "checked", t, !1);
        }
        function J(e, t) {
          G(e, t);
          var n = U(t.value),
            r = t.type;
          if (null != n)
            "number" === r
              ? ((0 === n && "" === e.value) || e.value != n) &&
                (e.value = "" + n)
              : e.value !== "" + n && (e.value = "" + n);
          else if ("submit" === r || "reset" === r)
            return void e.removeAttribute("value");
          t.hasOwnProperty("value")
            ? ee(e, t.type, n)
            : t.hasOwnProperty("defaultValue") &&
              ee(e, t.type, U(t.defaultValue)),
            null == t.checked &&
              null != t.defaultChecked &&
              (e.defaultChecked = !!t.defaultChecked);
        }
        function Z(e, t, n) {
          if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (
              !(
                ("submit" !== r && "reset" !== r) ||
                (void 0 !== t.value && null !== t.value)
              )
            )
              return;
            (t = "" + e._wrapperState.initialValue),
              n || t === e.value || (e.value = t),
              (e.defaultValue = t);
          }
          "" !== (n = e.name) && (e.name = ""),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            "" !== n && (e.name = n);
        }
        function ee(e, t, n) {
          ("number" === t && K(e.ownerDocument) === e) ||
            (null == n
              ? (e.defaultValue = "" + e._wrapperState.initialValue)
              : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
        }
        var te = Array.isArray;
        function ne(e, t, n, r) {
          if (((e = e.options), t)) {
            t = {};
            for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
            for (n = 0; n < e.length; n++)
              (i = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== i && (e[n].selected = i),
                i && r && (e[n].defaultSelected = !0);
          } else {
            for (n = "" + U(n), t = null, i = 0; i < e.length; i++) {
              if (e[i].value === n)
                return (
                  (e[i].selected = !0), void (r && (e[i].defaultSelected = !0))
                );
              null !== t || e[i].disabled || (t = e[i]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function re(e, t) {
          if (null != t.dangerouslySetInnerHTML) throw Error(a(91));
          return F({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue,
          });
        }
        function ie(e, t) {
          var n = t.value;
          if (null == n) {
            if (((n = t.children), (t = t.defaultValue), null != n)) {
              if (null != t) throw Error(a(92));
              if (te(n)) {
                if (1 < n.length) throw Error(a(93));
                n = n[0];
              }
              t = n;
            }
            null == t && (t = ""), (n = t);
          }
          e._wrapperState = { initialValue: U(n) };
        }
        function ae(e, t) {
          var n = U(t.value),
            r = U(t.defaultValue);
          null != n &&
            ((n = "" + n) !== e.value && (e.value = n),
            null == t.defaultValue &&
              e.defaultValue !== n &&
              (e.defaultValue = n)),
            null != r && (e.defaultValue = "" + r);
        }
        function oe(e) {
          var t = e.textContent;
          t === e._wrapperState.initialValue &&
            "" !== t &&
            null !== t &&
            (e.value = t);
        }
        function se(e) {
          switch (e) {
            case "svg":
              return "http://www.w3.org/2000/svg";
            case "math":
              return "http://www.w3.org/1998/Math/MathML";
            default:
              return "http://www.w3.org/1999/xhtml";
          }
        }
        function le(e, t) {
          return null == e || "http://www.w3.org/1999/xhtml" === e
            ? se(t)
            : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
            ? "http://www.w3.org/1999/xhtml"
            : e;
        }
        var ue,
          ce,
          fe =
            ((ce = function (e, t) {
              if (
                "http://www.w3.org/2000/svg" !== e.namespaceURI ||
                "innerHTML" in e
              )
                e.innerHTML = t;
              else {
                for (
                  (ue = ue || document.createElement("div")).innerHTML =
                    "<svg>" + t.valueOf().toString() + "</svg>",
                    t = ue.firstChild;
                  e.firstChild;

                )
                  e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
              }
            }),
            "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (e, t, n, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return ce(e, t);
                  });
                }
              : ce);
        function he(e, t) {
          if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType)
              return void (n.nodeValue = t);
          }
          e.textContent = t;
        }
        var de = {
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
            strokeWidth: !0,
          },
          pe = ["Webkit", "ms", "Moz", "O"];
        function ve(e, t, n) {
          return null == t || "boolean" === typeof t || "" === t
            ? ""
            : n ||
              "number" !== typeof t ||
              0 === t ||
              (de.hasOwnProperty(e) && de[e])
            ? ("" + t).trim()
            : t + "px";
        }
        function ge(e, t) {
          for (var n in ((e = e.style), t))
            if (t.hasOwnProperty(n)) {
              var r = 0 === n.indexOf("--"),
                i = ve(n, t[n], r);
              "float" === n && (n = "cssFloat"),
                r ? e.setProperty(n, i) : (e[n] = i);
            }
        }
        Object.keys(de).forEach(function (e) {
          pe.forEach(function (t) {
            (t = t + e.charAt(0).toUpperCase() + e.substring(1)),
              (de[t] = de[e]);
          });
        });
        var me = F(
          { menuitem: !0 },
          {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0,
          }
        );
        function ye(e, t) {
          if (t) {
            if (
              me[e] &&
              (null != t.children || null != t.dangerouslySetInnerHTML)
            )
              throw Error(a(137, e));
            if (null != t.dangerouslySetInnerHTML) {
              if (null != t.children) throw Error(a(60));
              if (
                "object" !== typeof t.dangerouslySetInnerHTML ||
                !("__html" in t.dangerouslySetInnerHTML)
              )
                throw Error(a(61));
            }
            if (null != t.style && "object" !== typeof t.style)
              throw Error(a(62));
          }
        }
        function be(e, t) {
          if (-1 === e.indexOf("-")) return "string" === typeof t.is;
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
        var xe = null;
        function ke(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var _e = null,
          we = null,
          Se = null;
        function Ee(e) {
          if ((e = bi(e))) {
            if ("function" !== typeof _e) throw Error(a(280));
            var t = e.stateNode;
            t && ((t = ki(t)), _e(e.stateNode, e.type, t));
          }
        }
        function Me(e) {
          we ? (Se ? Se.push(e) : (Se = [e])) : (we = e);
        }
        function Ce() {
          if (we) {
            var e = we,
              t = Se;
            if (((Se = we = null), Ee(e), t))
              for (e = 0; e < t.length; e++) Ee(t[e]);
          }
        }
        function Pe(e, t) {
          return e(t);
        }
        function Oe() {}
        var Te = !1;
        function De(e, t, n) {
          if (Te) return e(t, n);
          Te = !0;
          try {
            return Pe(e, t, n);
          } finally {
            (Te = !1), (null !== we || null !== Se) && (Oe(), Ce());
          }
        }
        function Le(e, t) {
          var n = e.stateNode;
          if (null === n) return null;
          var r = ki(n);
          if (null === r) return null;
          n = r[t];
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
              (r = !r.disabled) ||
                (r = !(
                  "button" === (e = e.type) ||
                  "input" === e ||
                  "select" === e ||
                  "textarea" === e
                )),
                (e = !r);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (n && "function" !== typeof n) throw Error(a(231, t, typeof n));
          return n;
        }
        var Re = !1;
        if (c)
          try {
            var Ae = {};
            Object.defineProperty(Ae, "passive", {
              get: function () {
                Re = !0;
              },
            }),
              window.addEventListener("test", Ae, Ae),
              window.removeEventListener("test", Ae, Ae);
          } catch (ce) {
            Re = !1;
          }
        function Ne(e, t, n, r, i, a, o, s, l) {
          var u = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(n, u);
          } catch (c) {
            this.onError(c);
          }
        }
        var ze = !1,
          Fe = null,
          Ie = !1,
          je = null,
          Be = {
            onError: function (e) {
              (ze = !0), (Fe = e);
            },
          };
        function Ve(e, t, n, r, i, a, o, s, l) {
          (ze = !1), (Fe = null), Ne.apply(Be, arguments);
        }
        function We(e) {
          var t = e,
            n = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              0 !== (4098 & (t = e).flags) && (n = t.return), (e = t.return);
            } while (e);
          }
          return 3 === t.tag ? n : null;
        }
        function He(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if (
              (null === t &&
                null !== (e = e.alternate) &&
                (t = e.memoizedState),
              null !== t)
            )
              return t.dehydrated;
          }
          return null;
        }
        function Ue(e) {
          if (We(e) !== e) throw Error(a(188));
        }
        function $e(e) {
          return null !==
            (e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = We(e))) throw Error(a(188));
                return t !== e ? null : e;
              }
              for (var n = e, r = t; ; ) {
                var i = n.return;
                if (null === i) break;
                var o = i.alternate;
                if (null === o) {
                  if (null !== (r = i.return)) {
                    n = r;
                    continue;
                  }
                  break;
                }
                if (i.child === o.child) {
                  for (o = i.child; o; ) {
                    if (o === n) return Ue(i), e;
                    if (o === r) return Ue(i), t;
                    o = o.sibling;
                  }
                  throw Error(a(188));
                }
                if (n.return !== r.return) (n = i), (r = o);
                else {
                  for (var s = !1, l = i.child; l; ) {
                    if (l === n) {
                      (s = !0), (n = i), (r = o);
                      break;
                    }
                    if (l === r) {
                      (s = !0), (r = i), (n = o);
                      break;
                    }
                    l = l.sibling;
                  }
                  if (!s) {
                    for (l = o.child; l; ) {
                      if (l === n) {
                        (s = !0), (n = o), (r = i);
                        break;
                      }
                      if (l === r) {
                        (s = !0), (r = o), (n = i);
                        break;
                      }
                      l = l.sibling;
                    }
                    if (!s) throw Error(a(189));
                  }
                }
                if (n.alternate !== r) throw Error(a(190));
              }
              if (3 !== n.tag) throw Error(a(188));
              return n.stateNode.current === n ? e : t;
            })(e))
            ? Ye(e)
            : null;
        }
        function Ye(e) {
          if (5 === e.tag || 6 === e.tag) return e;
          for (e = e.child; null !== e; ) {
            var t = Ye(e);
            if (null !== t) return t;
            e = e.sibling;
          }
          return null;
        }
        var qe = i.unstable_scheduleCallback,
          Ke = i.unstable_cancelCallback,
          Qe = i.unstable_shouldYield,
          Xe = i.unstable_requestPaint,
          Ge = i.unstable_now,
          Je = i.unstable_getCurrentPriorityLevel,
          Ze = i.unstable_ImmediatePriority,
          et = i.unstable_UserBlockingPriority,
          tt = i.unstable_NormalPriority,
          nt = i.unstable_LowPriority,
          rt = i.unstable_IdlePriority,
          it = null,
          at = null;
        var ot = Math.clz32
            ? Math.clz32
            : function (e) {
                return (e >>>= 0), 0 === e ? 32 : (31 - ((st(e) / lt) | 0)) | 0;
              },
          st = Math.log,
          lt = Math.LN2;
        var ut = 64,
          ct = 4194304;
        function ft(e) {
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
              return 4194240 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              return 130023424 & e;
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
        function ht(e, t) {
          var n = e.pendingLanes;
          if (0 === n) return 0;
          var r = 0,
            i = e.suspendedLanes,
            a = e.pingedLanes,
            o = 268435455 & n;
          if (0 !== o) {
            var s = o & ~i;
            0 !== s ? (r = ft(s)) : 0 !== (a &= o) && (r = ft(a));
          } else 0 !== (o = n & ~i) ? (r = ft(o)) : 0 !== a && (r = ft(a));
          if (0 === r) return 0;
          if (
            0 !== t &&
            t !== r &&
            0 === (t & i) &&
            ((i = r & -r) >= (a = t & -t) || (16 === i && 0 !== (4194240 & a)))
          )
            return t;
          if ((0 !== (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
            for (e = e.entanglements, t &= r; 0 < t; )
              (i = 1 << (n = 31 - ot(t))), (r |= e[n]), (t &= ~i);
          return r;
        }
        function dt(e, t) {
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
            default:
              return -1;
          }
        }
        function pt(e) {
          return 0 !== (e = -1073741825 & e.pendingLanes)
            ? e
            : 1073741824 & e
            ? 1073741824
            : 0;
        }
        function vt() {
          var e = ut;
          return 0 === (4194240 & (ut <<= 1)) && (ut = 64), e;
        }
        function gt(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function mt(e, t, n) {
          (e.pendingLanes |= t),
            536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
            ((e = e.eventTimes)[(t = 31 - ot(t))] = n);
        }
        function yt(e, t) {
          var n = (e.entangledLanes |= t);
          for (e = e.entanglements; n; ) {
            var r = 31 - ot(n),
              i = 1 << r;
            (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
          }
        }
        var bt = 0;
        function xt(e) {
          return 1 < (e &= -e)
            ? 4 < e
              ? 0 !== (268435455 & e)
                ? 16
                : 536870912
              : 4
            : 1;
        }
        var kt,
          _t,
          wt,
          St,
          Et,
          Mt = !1,
          Ct = [],
          Pt = null,
          Ot = null,
          Tt = null,
          Dt = new Map(),
          Lt = new Map(),
          Rt = [],
          At =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
              " "
            );
        function Nt(e, t) {
          switch (e) {
            case "focusin":
            case "focusout":
              Pt = null;
              break;
            case "dragenter":
            case "dragleave":
              Ot = null;
              break;
            case "mouseover":
            case "mouseout":
              Tt = null;
              break;
            case "pointerover":
            case "pointerout":
              Dt.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              Lt.delete(t.pointerId);
          }
        }
        function zt(e, t, n, r, i, a) {
          return null === e || e.nativeEvent !== a
            ? ((e = {
                blockedOn: t,
                domEventName: n,
                eventSystemFlags: r,
                nativeEvent: a,
                targetContainers: [i],
              }),
              null !== t && null !== (t = bi(t)) && _t(t),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              null !== i && -1 === t.indexOf(i) && t.push(i),
              e);
        }
        function Ft(e) {
          var t = yi(e.target);
          if (null !== t) {
            var n = We(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = He(n)))
                  return (
                    (e.blockedOn = t),
                    void Et(e.priority, function () {
                      wt(n);
                    })
                  );
              } else if (
                3 === t &&
                n.stateNode.current.memoizedState.isDehydrated
              )
                return void (e.blockedOn =
                  3 === n.tag ? n.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function It(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Qt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n)
              return null !== (t = bi(n)) && _t(t), (e.blockedOn = n), !1;
            var r = new (n = e.nativeEvent).constructor(n.type, n);
            (xe = r), n.target.dispatchEvent(r), (xe = null), t.shift();
          }
          return !0;
        }
        function jt(e, t, n) {
          It(e) && n.delete(t);
        }
        function Bt() {
          (Mt = !1),
            null !== Pt && It(Pt) && (Pt = null),
            null !== Ot && It(Ot) && (Ot = null),
            null !== Tt && It(Tt) && (Tt = null),
            Dt.forEach(jt),
            Lt.forEach(jt);
        }
        function Vt(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            Mt ||
              ((Mt = !0),
              i.unstable_scheduleCallback(i.unstable_NormalPriority, Bt)));
        }
        function Wt(e) {
          function t(t) {
            return Vt(t, e);
          }
          if (0 < Ct.length) {
            Vt(Ct[0], e);
            for (var n = 1; n < Ct.length; n++) {
              var r = Ct[n];
              r.blockedOn === e && (r.blockedOn = null);
            }
          }
          for (
            null !== Pt && Vt(Pt, e),
              null !== Ot && Vt(Ot, e),
              null !== Tt && Vt(Tt, e),
              Dt.forEach(t),
              Lt.forEach(t),
              n = 0;
            n < Rt.length;
            n++
          )
            (r = Rt[n]).blockedOn === e && (r.blockedOn = null);
          for (; 0 < Rt.length && null === (n = Rt[0]).blockedOn; )
            Ft(n), null === n.blockedOn && Rt.shift();
        }
        var Ht = x.ReactCurrentBatchConfig,
          Ut = !0;
        function $t(e, t, n, r) {
          var i = bt,
            a = Ht.transition;
          Ht.transition = null;
          try {
            (bt = 1), qt(e, t, n, r);
          } finally {
            (bt = i), (Ht.transition = a);
          }
        }
        function Yt(e, t, n, r) {
          var i = bt,
            a = Ht.transition;
          Ht.transition = null;
          try {
            (bt = 4), qt(e, t, n, r);
          } finally {
            (bt = i), (Ht.transition = a);
          }
        }
        function qt(e, t, n, r) {
          if (Ut) {
            var i = Qt(e, t, n, r);
            if (null === i) Ur(e, t, r, Kt, n), Nt(e, r);
            else if (
              (function (e, t, n, r, i) {
                switch (t) {
                  case "focusin":
                    return (Pt = zt(Pt, e, t, n, r, i)), !0;
                  case "dragenter":
                    return (Ot = zt(Ot, e, t, n, r, i)), !0;
                  case "mouseover":
                    return (Tt = zt(Tt, e, t, n, r, i)), !0;
                  case "pointerover":
                    var a = i.pointerId;
                    return Dt.set(a, zt(Dt.get(a) || null, e, t, n, r, i)), !0;
                  case "gotpointercapture":
                    return (
                      (a = i.pointerId),
                      Lt.set(a, zt(Lt.get(a) || null, e, t, n, r, i)),
                      !0
                    );
                }
                return !1;
              })(i, e, t, n, r)
            )
              r.stopPropagation();
            else if ((Nt(e, r), 4 & t && -1 < At.indexOf(e))) {
              for (; null !== i; ) {
                var a = bi(i);
                if (
                  (null !== a && kt(a),
                  null === (a = Qt(e, t, n, r)) && Ur(e, t, r, Kt, n),
                  a === i)
                )
                  break;
                i = a;
              }
              null !== i && r.stopPropagation();
            } else Ur(e, t, r, null, n);
          }
        }
        var Kt = null;
        function Qt(e, t, n, r) {
          if (((Kt = null), null !== (e = yi((e = ke(r))))))
            if (null === (t = We(e))) e = null;
            else if (13 === (n = t.tag)) {
              if (null !== (e = He(t))) return e;
              e = null;
            } else if (3 === n) {
              if (t.stateNode.current.memoizedState.isDehydrated)
                return 3 === t.tag ? t.stateNode.containerInfo : null;
              e = null;
            } else t !== e && (e = null);
          return (Kt = e), null;
        }
        function Xt(e) {
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
              switch (Je()) {
                case Ze:
                  return 1;
                case et:
                  return 4;
                case tt:
                case nt:
                  return 16;
                case rt:
                  return 536870912;
                default:
                  return 16;
              }
            default:
              return 16;
          }
        }
        var Gt = null,
          Jt = null,
          Zt = null;
        function en() {
          if (Zt) return Zt;
          var e,
            t,
            n = Jt,
            r = n.length,
            i = "value" in Gt ? Gt.value : Gt.textContent,
            a = i.length;
          for (e = 0; e < r && n[e] === i[e]; e++);
          var o = r - e;
          for (t = 1; t <= o && n[r - t] === i[a - t]; t++);
          return (Zt = i.slice(e, 1 < t ? 1 - t : void 0));
        }
        function tn(e) {
          var t = e.keyCode;
          return (
            "charCode" in e
              ? 0 === (e = e.charCode) && 13 === t && (e = 13)
              : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function nn() {
          return !0;
        }
        function rn() {
          return !1;
        }
        function an(e) {
          function t(t, n, r, i, a) {
            for (var o in ((this._reactName = t),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = i),
            (this.target = a),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(o) && ((t = e[o]), (this[o] = t ? t(i) : i[o]));
            return (
              (this.isDefaultPrevented = (
                null != i.defaultPrevented
                  ? i.defaultPrevented
                  : !1 === i.returnValue
              )
                ? nn
                : rn),
              (this.isPropagationStopped = rn),
              this
            );
          }
          return (
            F(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : "unknown" !== typeof e.returnValue &&
                      (e.returnValue = !1),
                  (this.isDefaultPrevented = nn));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : "unknown" !== typeof e.cancelBubble &&
                      (e.cancelBubble = !0),
                  (this.isPropagationStopped = nn));
              },
              persist: function () {},
              isPersistent: nn,
            }),
            t
          );
        }
        var on,
          sn,
          ln,
          un = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          cn = an(un),
          fn = F({}, un, { view: 0, detail: 0 }),
          hn = an(fn),
          dn = F({}, fn, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: En,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return "movementX" in e
                ? e.movementX
                : (e !== ln &&
                    (ln && "mousemove" === e.type
                      ? ((on = e.screenX - ln.screenX),
                        (sn = e.screenY - ln.screenY))
                      : (sn = on = 0),
                    (ln = e)),
                  on);
            },
            movementY: function (e) {
              return "movementY" in e ? e.movementY : sn;
            },
          }),
          pn = an(dn),
          vn = an(F({}, dn, { dataTransfer: 0 })),
          gn = an(F({}, fn, { relatedTarget: 0 })),
          mn = an(
            F({}, un, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          yn = F({}, un, {
            clipboardData: function (e) {
              return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
            },
          }),
          bn = an(yn),
          xn = an(F({}, un, { data: 0 })),
          kn = {
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
            MozPrintableKey: "Unidentified",
          },
          _n = {
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
            224: "Meta",
          },
          wn = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
          };
        function Sn(e) {
          var t = this.nativeEvent;
          return t.getModifierState
            ? t.getModifierState(e)
            : !!(e = wn[e]) && !!t[e];
        }
        function En() {
          return Sn;
        }
        var Mn = F({}, fn, {
            key: function (e) {
              if (e.key) {
                var t = kn[e.key] || e.key;
                if ("Unidentified" !== t) return t;
              }
              return "keypress" === e.type
                ? 13 === (e = tn(e))
                  ? "Enter"
                  : String.fromCharCode(e)
                : "keydown" === e.type || "keyup" === e.type
                ? _n[e.keyCode] || "Unidentified"
                : "";
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: En,
            charCode: function (e) {
              return "keypress" === e.type ? tn(e) : 0;
            },
            keyCode: function (e) {
              return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
            },
            which: function (e) {
              return "keypress" === e.type
                ? tn(e)
                : "keydown" === e.type || "keyup" === e.type
                ? e.keyCode
                : 0;
            },
          }),
          Cn = an(Mn),
          Pn = an(
            F({}, dn, {
              pointerId: 0,
              width: 0,
              height: 0,
              pressure: 0,
              tangentialPressure: 0,
              tiltX: 0,
              tiltY: 0,
              twist: 0,
              pointerType: 0,
              isPrimary: 0,
            })
          ),
          On = an(
            F({}, fn, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: En,
            })
          ),
          Tn = an(
            F({}, un, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          Dn = F({}, dn, {
            deltaX: function (e) {
              return "deltaX" in e
                ? e.deltaX
                : "wheelDeltaX" in e
                ? -e.wheelDeltaX
                : 0;
            },
            deltaY: function (e) {
              return "deltaY" in e
                ? e.deltaY
                : "wheelDeltaY" in e
                ? -e.wheelDeltaY
                : "wheelDelta" in e
                ? -e.wheelDelta
                : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
          }),
          Ln = an(Dn),
          Rn = [9, 13, 27, 32],
          An = c && "CompositionEvent" in window,
          Nn = null;
        c && "documentMode" in document && (Nn = document.documentMode);
        var zn = c && "TextEvent" in window && !Nn,
          Fn = c && (!An || (Nn && 8 < Nn && 11 >= Nn)),
          In = String.fromCharCode(32),
          jn = !1;
        function Bn(e, t) {
          switch (e) {
            case "keyup":
              return -1 !== Rn.indexOf(t.keyCode);
            case "keydown":
              return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout":
              return !0;
            default:
              return !1;
          }
        }
        function Vn(e) {
          return "object" === typeof (e = e.detail) && "data" in e
            ? e.data
            : null;
        }
        var Wn = !1;
        var Hn = {
          color: !0,
          date: !0,
          datetime: !0,
          "datetime-local": !0,
          email: !0,
          month: !0,
          number: !0,
          password: !0,
          range: !0,
          search: !0,
          tel: !0,
          text: !0,
          time: !0,
          url: !0,
          week: !0,
        };
        function Un(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === t ? !!Hn[e.type] : "textarea" === t;
        }
        function $n(e, t, n, r) {
          Me(r),
            0 < (t = Yr(t, "onChange")).length &&
              ((n = new cn("onChange", "change", null, n, r)),
              e.push({ event: n, listeners: t }));
        }
        var Yn = null,
          qn = null;
        function Kn(e) {
          Ir(e, 0);
        }
        function Qn(e) {
          if (q(xi(e))) return e;
        }
        function Xn(e, t) {
          if ("change" === e) return t;
        }
        var Gn = !1;
        if (c) {
          var Jn;
          if (c) {
            var Zn = "oninput" in document;
            if (!Zn) {
              var er = document.createElement("div");
              er.setAttribute("oninput", "return;"),
                (Zn = "function" === typeof er.oninput);
            }
            Jn = Zn;
          } else Jn = !1;
          Gn = Jn && (!document.documentMode || 9 < document.documentMode);
        }
        function tr() {
          Yn && (Yn.detachEvent("onpropertychange", nr), (qn = Yn = null));
        }
        function nr(e) {
          if ("value" === e.propertyName && Qn(qn)) {
            var t = [];
            $n(t, qn, e, ke(e)), De(Kn, t);
          }
        }
        function rr(e, t, n) {
          "focusin" === e
            ? (tr(), (qn = n), (Yn = t).attachEvent("onpropertychange", nr))
            : "focusout" === e && tr();
        }
        function ir(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return Qn(qn);
        }
        function ar(e, t) {
          if ("click" === e) return Qn(t);
        }
        function or(e, t) {
          if ("input" === e || "change" === e) return Qn(t);
        }
        var sr =
          "function" === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e === 1 / t)) ||
                  (e !== e && t !== t)
                );
              };
        function lr(e, t) {
          if (sr(e, t)) return !0;
          if (
            "object" !== typeof e ||
            null === e ||
            "object" !== typeof t ||
            null === t
          )
            return !1;
          var n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++) {
            var i = n[r];
            if (!f.call(t, i) || !sr(e[i], t[i])) return !1;
          }
          return !0;
        }
        function ur(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function cr(e, t) {
          var n,
            r = ur(e);
          for (e = 0; r; ) {
            if (3 === r.nodeType) {
              if (((n = e + r.textContent.length), e <= t && n >= t))
                return { node: r, offset: t - e };
              e = n;
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break e;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = ur(r);
          }
        }
        function fr(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? fr(e, t.parentNode)
                  : "contains" in e
                  ? e.contains(t)
                  : !!e.compareDocumentPosition &&
                    !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function hr() {
          for (var e = window, t = K(); t instanceof e.HTMLIFrameElement; ) {
            try {
              var n = "string" === typeof t.contentWindow.location.href;
            } catch (r) {
              n = !1;
            }
            if (!n) break;
            t = K((e = t.contentWindow).document);
          }
          return t;
        }
        function dr(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (("input" === t &&
              ("text" === e.type ||
                "search" === e.type ||
                "tel" === e.type ||
                "url" === e.type ||
                "password" === e.type)) ||
              "textarea" === t ||
              "true" === e.contentEditable)
          );
        }
        function pr(e) {
          var t = hr(),
            n = e.focusedElem,
            r = e.selectionRange;
          if (
            t !== n &&
            n &&
            n.ownerDocument &&
            fr(n.ownerDocument.documentElement, n)
          ) {
            if (null !== r && dr(n))
              if (
                ((t = r.start),
                void 0 === (e = r.end) && (e = t),
                "selectionStart" in n)
              )
                (n.selectionStart = t),
                  (n.selectionEnd = Math.min(e, n.value.length));
              else if (
                (e =
                  ((t = n.ownerDocument || document) && t.defaultView) ||
                  window).getSelection
              ) {
                e = e.getSelection();
                var i = n.textContent.length,
                  a = Math.min(r.start, i);
                (r = void 0 === r.end ? a : Math.min(r.end, i)),
                  !e.extend && a > r && ((i = r), (r = a), (a = i)),
                  (i = cr(n, a));
                var o = cr(n, r);
                i &&
                  o &&
                  (1 !== e.rangeCount ||
                    e.anchorNode !== i.node ||
                    e.anchorOffset !== i.offset ||
                    e.focusNode !== o.node ||
                    e.focusOffset !== o.offset) &&
                  ((t = t.createRange()).setStart(i.node, i.offset),
                  e.removeAllRanges(),
                  a > r
                    ? (e.addRange(t), e.extend(o.node, o.offset))
                    : (t.setEnd(o.node, o.offset), e.addRange(t)));
              }
            for (t = [], e = n; (e = e.parentNode); )
              1 === e.nodeType &&
                t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
            for (
              "function" === typeof n.focus && n.focus(), n = 0;
              n < t.length;
              n++
            )
              ((e = t[n]).element.scrollLeft = e.left),
                (e.element.scrollTop = e.top);
          }
        }
        var vr = c && "documentMode" in document && 11 >= document.documentMode,
          gr = null,
          mr = null,
          yr = null,
          br = !1;
        function xr(e, t, n) {
          var r =
            n.window === n
              ? n.document
              : 9 === n.nodeType
              ? n
              : n.ownerDocument;
          br ||
            null == gr ||
            gr !== K(r) ||
            ("selectionStart" in (r = gr) && dr(r)
              ? (r = { start: r.selectionStart, end: r.selectionEnd })
              : (r = {
                  anchorNode: (r = (
                    (r.ownerDocument && r.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
                }),
            (yr && lr(yr, r)) ||
              ((yr = r),
              0 < (r = Yr(mr, "onSelect")).length &&
                ((t = new cn("onSelect", "select", null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = gr))));
        }
        function kr(e, t) {
          var n = {};
          return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n["Webkit" + e] = "webkit" + t),
            (n["Moz" + e] = "moz" + t),
            n
          );
        }
        var _r = {
            animationend: kr("Animation", "AnimationEnd"),
            animationiteration: kr("Animation", "AnimationIteration"),
            animationstart: kr("Animation", "AnimationStart"),
            transitionend: kr("Transition", "TransitionEnd"),
          },
          wr = {},
          Sr = {};
        function Er(e) {
          if (wr[e]) return wr[e];
          if (!_r[e]) return e;
          var t,
            n = _r[e];
          for (t in n)
            if (n.hasOwnProperty(t) && t in Sr) return (wr[e] = n[t]);
          return e;
        }
        c &&
          ((Sr = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete _r.animationend.animation,
            delete _r.animationiteration.animation,
            delete _r.animationstart.animation),
          "TransitionEvent" in window || delete _r.transitionend.transition);
        var Mr = Er("animationend"),
          Cr = Er("animationiteration"),
          Pr = Er("animationstart"),
          Or = Er("transitionend"),
          Tr = new Map(),
          Dr =
            "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
              " "
            );
        function Lr(e, t) {
          Tr.set(e, t), l(t, [e]);
        }
        for (var Rr = 0; Rr < Dr.length; Rr++) {
          var Ar = Dr[Rr];
          Lr(Ar.toLowerCase(), "on" + (Ar[0].toUpperCase() + Ar.slice(1)));
        }
        Lr(Mr, "onAnimationEnd"),
          Lr(Cr, "onAnimationIteration"),
          Lr(Pr, "onAnimationStart"),
          Lr("dblclick", "onDoubleClick"),
          Lr("focusin", "onFocus"),
          Lr("focusout", "onBlur"),
          Lr(Or, "onTransitionEnd"),
          u("onMouseEnter", ["mouseout", "mouseover"]),
          u("onMouseLeave", ["mouseout", "mouseover"]),
          u("onPointerEnter", ["pointerout", "pointerover"]),
          u("onPointerLeave", ["pointerout", "pointerover"]),
          l(
            "onChange",
            "change click focusin focusout input keydown keyup selectionchange".split(
              " "
            )
          ),
          l(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
              " "
            )
          ),
          l("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste",
          ]),
          l(
            "onCompositionEnd",
            "compositionend focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          l(
            "onCompositionStart",
            "compositionstart focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          l(
            "onCompositionUpdate",
            "compositionupdate focusout keydown keypress keyup mousedown".split(
              " "
            )
          );
        var Nr =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
              " "
            ),
          zr = new Set(
            "cancel close invalid load scroll toggle".split(" ").concat(Nr)
          );
        function Fr(e, t, n) {
          var r = e.type || "unknown-event";
          (e.currentTarget = n),
            (function (e, t, n, r, i, o, s, l, u) {
              if ((Ve.apply(this, arguments), ze)) {
                if (!ze) throw Error(a(198));
                var c = Fe;
                (ze = !1), (Fe = null), Ie || ((Ie = !0), (je = c));
              }
            })(r, t, void 0, e),
            (e.currentTarget = null);
        }
        function Ir(e, t) {
          t = 0 !== (4 & t);
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              i = r.event;
            r = r.listeners;
            e: {
              var a = void 0;
              if (t)
                for (var o = r.length - 1; 0 <= o; o--) {
                  var s = r[o],
                    l = s.instance,
                    u = s.currentTarget;
                  if (((s = s.listener), l !== a && i.isPropagationStopped()))
                    break e;
                  Fr(i, s, u), (a = l);
                }
              else
                for (o = 0; o < r.length; o++) {
                  if (
                    ((l = (s = r[o]).instance),
                    (u = s.currentTarget),
                    (s = s.listener),
                    l !== a && i.isPropagationStopped())
                  )
                    break e;
                  Fr(i, s, u), (a = l);
                }
            }
          }
          if (Ie) throw ((e = je), (Ie = !1), (je = null), e);
        }
        function jr(e, t) {
          var n = t[vi];
          void 0 === n && (n = t[vi] = new Set());
          var r = e + "__bubble";
          n.has(r) || (Hr(t, e, 2, !1), n.add(r));
        }
        function Br(e, t, n) {
          var r = 0;
          t && (r |= 4), Hr(n, e, r, t);
        }
        var Vr = "_reactListening" + Math.random().toString(36).slice(2);
        function Wr(e) {
          if (!e[Vr]) {
            (e[Vr] = !0),
              o.forEach(function (t) {
                "selectionchange" !== t &&
                  (zr.has(t) || Br(t, !1, e), Br(t, !0, e));
              });
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[Vr] || ((t[Vr] = !0), Br("selectionchange", !1, t));
          }
        }
        function Hr(e, t, n, r) {
          switch (Xt(t)) {
            case 1:
              var i = $t;
              break;
            case 4:
              i = Yt;
              break;
            default:
              i = qt;
          }
          (n = i.bind(null, t, n, e)),
            (i = void 0),
            !Re ||
              ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
              (i = !0),
            r
              ? void 0 !== i
                ? e.addEventListener(t, n, { capture: !0, passive: i })
                : e.addEventListener(t, n, !0)
              : void 0 !== i
              ? e.addEventListener(t, n, { passive: i })
              : e.addEventListener(t, n, !1);
        }
        function Ur(e, t, n, r, i) {
          var a = r;
          if (0 === (1 & t) && 0 === (2 & t) && null !== r)
            e: for (;;) {
              if (null === r) return;
              var o = r.tag;
              if (3 === o || 4 === o) {
                var s = r.stateNode.containerInfo;
                if (s === i || (8 === s.nodeType && s.parentNode === i)) break;
                if (4 === o)
                  for (o = r.return; null !== o; ) {
                    var l = o.tag;
                    if (
                      (3 === l || 4 === l) &&
                      ((l = o.stateNode.containerInfo) === i ||
                        (8 === l.nodeType && l.parentNode === i))
                    )
                      return;
                    o = o.return;
                  }
                for (; null !== s; ) {
                  if (null === (o = yi(s))) return;
                  if (5 === (l = o.tag) || 6 === l) {
                    r = a = o;
                    continue e;
                  }
                  s = s.parentNode;
                }
              }
              r = r.return;
            }
          De(function () {
            var r = a,
              i = ke(n),
              o = [];
            e: {
              var s = Tr.get(e);
              if (void 0 !== s) {
                var l = cn,
                  u = e;
                switch (e) {
                  case "keypress":
                    if (0 === tn(n)) break e;
                  case "keydown":
                  case "keyup":
                    l = Cn;
                    break;
                  case "focusin":
                    (u = "focus"), (l = gn);
                    break;
                  case "focusout":
                    (u = "blur"), (l = gn);
                    break;
                  case "beforeblur":
                  case "afterblur":
                    l = gn;
                    break;
                  case "click":
                    if (2 === n.button) break e;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                    l = pn;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    l = vn;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    l = On;
                    break;
                  case Mr:
                  case Cr:
                  case Pr:
                    l = mn;
                    break;
                  case Or:
                    l = Tn;
                    break;
                  case "scroll":
                    l = hn;
                    break;
                  case "wheel":
                    l = Ln;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    l = bn;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    l = Pn;
                }
                var c = 0 !== (4 & t),
                  f = !c && "scroll" === e,
                  h = c ? (null !== s ? s + "Capture" : null) : s;
                c = [];
                for (var d, p = r; null !== p; ) {
                  var v = (d = p).stateNode;
                  if (
                    (5 === d.tag &&
                      null !== v &&
                      ((d = v),
                      null !== h &&
                        null != (v = Le(p, h)) &&
                        c.push($r(p, v, d))),
                    f)
                  )
                    break;
                  p = p.return;
                }
                0 < c.length &&
                  ((s = new l(s, u, null, n, i)),
                  o.push({ event: s, listeners: c }));
              }
            }
            if (0 === (7 & t)) {
              if (
                ((l = "mouseout" === e || "pointerout" === e),
                (!(s = "mouseover" === e || "pointerover" === e) ||
                  n === xe ||
                  !(u = n.relatedTarget || n.fromElement) ||
                  (!yi(u) && !u[pi])) &&
                  (l || s) &&
                  ((s =
                    i.window === i
                      ? i
                      : (s = i.ownerDocument)
                      ? s.defaultView || s.parentWindow
                      : window),
                  l
                    ? ((l = r),
                      null !==
                        (u = (u = n.relatedTarget || n.toElement)
                          ? yi(u)
                          : null) &&
                        (u !== (f = We(u)) || (5 !== u.tag && 6 !== u.tag)) &&
                        (u = null))
                    : ((l = null), (u = r)),
                  l !== u))
              ) {
                if (
                  ((c = pn),
                  (v = "onMouseLeave"),
                  (h = "onMouseEnter"),
                  (p = "mouse"),
                  ("pointerout" !== e && "pointerover" !== e) ||
                    ((c = Pn),
                    (v = "onPointerLeave"),
                    (h = "onPointerEnter"),
                    (p = "pointer")),
                  (f = null == l ? s : xi(l)),
                  (d = null == u ? s : xi(u)),
                  ((s = new c(v, p + "leave", l, n, i)).target = f),
                  (s.relatedTarget = d),
                  (v = null),
                  yi(i) === r &&
                    (((c = new c(h, p + "enter", u, n, i)).target = d),
                    (c.relatedTarget = f),
                    (v = c)),
                  (f = v),
                  l && u)
                )
                  e: {
                    for (h = u, p = 0, d = c = l; d; d = qr(d)) p++;
                    for (d = 0, v = h; v; v = qr(v)) d++;
                    for (; 0 < p - d; ) (c = qr(c)), p--;
                    for (; 0 < d - p; ) (h = qr(h)), d--;
                    for (; p--; ) {
                      if (c === h || (null !== h && c === h.alternate)) break e;
                      (c = qr(c)), (h = qr(h));
                    }
                    c = null;
                  }
                else c = null;
                null !== l && Kr(o, s, l, c, !1),
                  null !== u && null !== f && Kr(o, f, u, c, !0);
              }
              if (
                "select" ===
                  (l =
                    (s = r ? xi(r) : window).nodeName &&
                    s.nodeName.toLowerCase()) ||
                ("input" === l && "file" === s.type)
              )
                var g = Xn;
              else if (Un(s))
                if (Gn) g = or;
                else {
                  g = ir;
                  var m = rr;
                }
              else
                (l = s.nodeName) &&
                  "input" === l.toLowerCase() &&
                  ("checkbox" === s.type || "radio" === s.type) &&
                  (g = ar);
              switch (
                (g && (g = g(e, r))
                  ? $n(o, g, n, i)
                  : (m && m(e, s, r),
                    "focusout" === e &&
                      (m = s._wrapperState) &&
                      m.controlled &&
                      "number" === s.type &&
                      ee(s, "number", s.value)),
                (m = r ? xi(r) : window),
                e)
              ) {
                case "focusin":
                  (Un(m) || "true" === m.contentEditable) &&
                    ((gr = m), (mr = r), (yr = null));
                  break;
                case "focusout":
                  yr = mr = gr = null;
                  break;
                case "mousedown":
                  br = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  (br = !1), xr(o, n, i);
                  break;
                case "selectionchange":
                  if (vr) break;
                case "keydown":
                case "keyup":
                  xr(o, n, i);
              }
              var y;
              if (An)
                e: {
                  switch (e) {
                    case "compositionstart":
                      var b = "onCompositionStart";
                      break e;
                    case "compositionend":
                      b = "onCompositionEnd";
                      break e;
                    case "compositionupdate":
                      b = "onCompositionUpdate";
                      break e;
                  }
                  b = void 0;
                }
              else
                Wn
                  ? Bn(e, n) && (b = "onCompositionEnd")
                  : "keydown" === e &&
                    229 === n.keyCode &&
                    (b = "onCompositionStart");
              b &&
                (Fn &&
                  "ko" !== n.locale &&
                  (Wn || "onCompositionStart" !== b
                    ? "onCompositionEnd" === b && Wn && (y = en())
                    : ((Jt = "value" in (Gt = i) ? Gt.value : Gt.textContent),
                      (Wn = !0))),
                0 < (m = Yr(r, b)).length &&
                  ((b = new xn(b, e, null, n, i)),
                  o.push({ event: b, listeners: m }),
                  y ? (b.data = y) : null !== (y = Vn(n)) && (b.data = y))),
                (y = zn
                  ? (function (e, t) {
                      switch (e) {
                        case "compositionend":
                          return Vn(t);
                        case "keypress":
                          return 32 !== t.which ? null : ((jn = !0), In);
                        case "textInput":
                          return (e = t.data) === In && jn ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if (Wn)
                        return "compositionend" === e || (!An && Bn(e, t))
                          ? ((e = en()), (Zt = Jt = Gt = null), (Wn = !1), e)
                          : null;
                      switch (e) {
                        case "paste":
                        default:
                          return null;
                        case "keypress":
                          if (
                            !(t.ctrlKey || t.altKey || t.metaKey) ||
                            (t.ctrlKey && t.altKey)
                          ) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case "compositionend":
                          return Fn && "ko" !== t.locale ? null : t.data;
                      }
                    })(e, n)) &&
                  0 < (r = Yr(r, "onBeforeInput")).length &&
                  ((i = new xn("onBeforeInput", "beforeinput", null, n, i)),
                  o.push({ event: i, listeners: r }),
                  (i.data = y));
            }
            Ir(o, t);
          });
        }
        function $r(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function Yr(e, t) {
          for (var n = t + "Capture", r = []; null !== e; ) {
            var i = e,
              a = i.stateNode;
            5 === i.tag &&
              null !== a &&
              ((i = a),
              null != (a = Le(e, n)) && r.unshift($r(e, a, i)),
              null != (a = Le(e, t)) && r.push($r(e, a, i))),
              (e = e.return);
          }
          return r;
        }
        function qr(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag);
          return e || null;
        }
        function Kr(e, t, n, r, i) {
          for (var a = t._reactName, o = []; null !== n && n !== r; ) {
            var s = n,
              l = s.alternate,
              u = s.stateNode;
            if (null !== l && l === r) break;
            5 === s.tag &&
              null !== u &&
              ((s = u),
              i
                ? null != (l = Le(n, a)) && o.unshift($r(n, l, s))
                : i || (null != (l = Le(n, a)) && o.push($r(n, l, s)))),
              (n = n.return);
          }
          0 !== o.length && e.push({ event: t, listeners: o });
        }
        var Qr = /\r\n?/g,
          Xr = /\u0000|\uFFFD/g;
        function Gr(e) {
          return ("string" === typeof e ? e : "" + e)
            .replace(Qr, "\n")
            .replace(Xr, "");
        }
        function Jr(e, t, n) {
          if (((t = Gr(t)), Gr(e) !== t && n)) throw Error(a(425));
        }
        function Zr() {}
        var ei = null,
          ti = null;
        function ni(e, t) {
          return (
            "textarea" === e ||
            "noscript" === e ||
            "string" === typeof t.children ||
            "number" === typeof t.children ||
            ("object" === typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var ri = "function" === typeof setTimeout ? setTimeout : void 0,
          ii = "function" === typeof clearTimeout ? clearTimeout : void 0,
          ai = "function" === typeof Promise ? Promise : void 0,
          oi =
            "function" === typeof queueMicrotask
              ? queueMicrotask
              : "undefined" !== typeof ai
              ? function (e) {
                  return ai.resolve(null).then(e).catch(si);
                }
              : ri;
        function si(e) {
          setTimeout(function () {
            throw e;
          });
        }
        function li(e, t) {
          var n = t,
            r = 0;
          do {
            var i = n.nextSibling;
            if ((e.removeChild(n), i && 8 === i.nodeType))
              if ("/$" === (n = i.data)) {
                if (0 === r) return e.removeChild(i), void Wt(t);
                r--;
              } else ("$" !== n && "$?" !== n && "$!" !== n) || r++;
            n = i;
          } while (n);
          Wt(t);
        }
        function ui(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
            if (8 === t) {
              if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
              if ("/$" === t) return null;
            }
          }
          return e;
        }
        function ci(e) {
          e = e.previousSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ("$" === n || "$!" === n || "$?" === n) {
                if (0 === t) return e;
                t--;
              } else "/$" === n && t++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        var fi = Math.random().toString(36).slice(2),
          hi = "__reactFiber$" + fi,
          di = "__reactProps$" + fi,
          pi = "__reactContainer$" + fi,
          vi = "__reactEvents$" + fi,
          gi = "__reactListeners$" + fi,
          mi = "__reactHandles$" + fi;
        function yi(e) {
          var t = e[hi];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[pi] || n[hi])) {
              if (
                ((n = t.alternate),
                null !== t.child || (null !== n && null !== n.child))
              )
                for (e = ci(e); null !== e; ) {
                  if ((n = e[hi])) return n;
                  e = ci(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function bi(e) {
          return !(e = e[hi] || e[pi]) ||
            (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
            ? null
            : e;
        }
        function xi(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(a(33));
        }
        function ki(e) {
          return e[di] || null;
        }
        var _i = [],
          wi = -1;
        function Si(e) {
          return { current: e };
        }
        function Ei(e) {
          0 > wi || ((e.current = _i[wi]), (_i[wi] = null), wi--);
        }
        function Mi(e, t) {
          wi++, (_i[wi] = e.current), (e.current = t);
        }
        var Ci = {},
          Pi = Si(Ci),
          Oi = Si(!1),
          Ti = Ci;
        function Di(e, t) {
          var n = e.type.contextTypes;
          if (!n) return Ci;
          var r = e.stateNode;
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext;
          var i,
            a = {};
          for (i in n) a[i] = t[i];
          return (
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                t),
              (e.__reactInternalMemoizedMaskedChildContext = a)),
            a
          );
        }
        function Li(e) {
          return null !== (e = e.childContextTypes) && void 0 !== e;
        }
        function Ri() {
          Ei(Oi), Ei(Pi);
        }
        function Ai(e, t, n) {
          if (Pi.current !== Ci) throw Error(a(168));
          Mi(Pi, t), Mi(Oi, n);
        }
        function Ni(e, t, n) {
          var r = e.stateNode;
          if (
            ((t = t.childContextTypes), "function" !== typeof r.getChildContext)
          )
            return n;
          for (var i in (r = r.getChildContext()))
            if (!(i in t)) throw Error(a(108, H(e) || "Unknown", i));
          return F({}, n, r);
        }
        function zi(e) {
          return (
            (e =
              ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
              Ci),
            (Ti = Pi.current),
            Mi(Pi, e),
            Mi(Oi, Oi.current),
            !0
          );
        }
        function Fi(e, t, n) {
          var r = e.stateNode;
          if (!r) throw Error(a(169));
          n
            ? ((e = Ni(e, t, Ti)),
              (r.__reactInternalMemoizedMergedChildContext = e),
              Ei(Oi),
              Ei(Pi),
              Mi(Pi, e))
            : Ei(Oi),
            Mi(Oi, n);
        }
        var Ii = null,
          ji = !1,
          Bi = !1;
        function Vi(e) {
          null === Ii ? (Ii = [e]) : Ii.push(e);
        }
        function Wi() {
          if (!Bi && null !== Ii) {
            Bi = !0;
            var e = 0,
              t = bt;
            try {
              var n = Ii;
              for (bt = 1; e < n.length; e++) {
                var r = n[e];
                do {
                  r = r(!0);
                } while (null !== r);
              }
              (Ii = null), (ji = !1);
            } catch (i) {
              throw (null !== Ii && (Ii = Ii.slice(e + 1)), qe(Ze, Wi), i);
            } finally {
              (bt = t), (Bi = !1);
            }
          }
          return null;
        }
        var Hi = [],
          Ui = 0,
          $i = null,
          Yi = 0,
          qi = [],
          Ki = 0,
          Qi = null,
          Xi = 1,
          Gi = "";
        function Ji(e, t) {
          (Hi[Ui++] = Yi), (Hi[Ui++] = $i), ($i = e), (Yi = t);
        }
        function Zi(e, t, n) {
          (qi[Ki++] = Xi), (qi[Ki++] = Gi), (qi[Ki++] = Qi), (Qi = e);
          var r = Xi;
          e = Gi;
          var i = 32 - ot(r) - 1;
          (r &= ~(1 << i)), (n += 1);
          var a = 32 - ot(t) + i;
          if (30 < a) {
            var o = i - (i % 5);
            (a = (r & ((1 << o) - 1)).toString(32)),
              (r >>= o),
              (i -= o),
              (Xi = (1 << (32 - ot(t) + i)) | (n << i) | r),
              (Gi = a + e);
          } else (Xi = (1 << a) | (n << i) | r), (Gi = e);
        }
        function ea(e) {
          null !== e.return && (Ji(e, 1), Zi(e, 1, 0));
        }
        function ta(e) {
          for (; e === $i; )
            ($i = Hi[--Ui]), (Hi[Ui] = null), (Yi = Hi[--Ui]), (Hi[Ui] = null);
          for (; e === Qi; )
            (Qi = qi[--Ki]),
              (qi[Ki] = null),
              (Gi = qi[--Ki]),
              (qi[Ki] = null),
              (Xi = qi[--Ki]),
              (qi[Ki] = null);
        }
        var na = null,
          ra = null,
          ia = !1,
          aa = null;
        function oa(e, t) {
          var n = Lu(5, null, null, 0);
          (n.elementType = "DELETED"),
            (n.stateNode = t),
            (n.return = e),
            null === (t = e.deletions)
              ? ((e.deletions = [n]), (e.flags |= 16))
              : t.push(n);
        }
        function sa(e, t) {
          switch (e.tag) {
            case 5:
              var n = e.type;
              return (
                null !==
                  (t =
                    1 !== t.nodeType ||
                    n.toLowerCase() !== t.nodeName.toLowerCase()
                      ? null
                      : t) &&
                ((e.stateNode = t), (na = e), (ra = ui(t.firstChild)), !0)
              );
            case 6:
              return (
                null !==
                  (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), (na = e), (ra = null), !0)
              );
            case 13:
              return (
                null !== (t = 8 !== t.nodeType ? null : t) &&
                ((n = null !== Qi ? { id: Xi, overflow: Gi } : null),
                (e.memoizedState = {
                  dehydrated: t,
                  treeContext: n,
                  retryLane: 1073741824,
                }),
                ((n = Lu(18, null, null, 0)).stateNode = t),
                (n.return = e),
                (e.child = n),
                (na = e),
                (ra = null),
                !0)
              );
            default:
              return !1;
          }
        }
        function la(e) {
          return 0 !== (1 & e.mode) && 0 === (128 & e.flags);
        }
        function ua(e) {
          if (ia) {
            var t = ra;
            if (t) {
              var n = t;
              if (!sa(e, t)) {
                if (la(e)) throw Error(a(418));
                t = ui(n.nextSibling);
                var r = na;
                t && sa(e, t)
                  ? oa(r, n)
                  : ((e.flags = (-4097 & e.flags) | 2), (ia = !1), (na = e));
              }
            } else {
              if (la(e)) throw Error(a(418));
              (e.flags = (-4097 & e.flags) | 2), (ia = !1), (na = e);
            }
          }
        }
        function ca(e) {
          for (
            e = e.return;
            null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

          )
            e = e.return;
          na = e;
        }
        function fa(e) {
          if (e !== na) return !1;
          if (!ia) return ca(e), (ia = !0), !1;
          var t;
          if (
            ((t = 3 !== e.tag) &&
              !(t = 5 !== e.tag) &&
              (t =
                "head" !== (t = e.type) &&
                "body" !== t &&
                !ni(e.type, e.memoizedProps)),
            t && (t = ra))
          ) {
            if (la(e)) throw (ha(), Error(a(418)));
            for (; t; ) oa(e, t), (t = ui(t.nextSibling));
          }
          if ((ca(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(a(317));
            e: {
              for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                  var n = e.data;
                  if ("/$" === n) {
                    if (0 === t) {
                      ra = ui(e.nextSibling);
                      break e;
                    }
                    t--;
                  } else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
                }
                e = e.nextSibling;
              }
              ra = null;
            }
          } else ra = na ? ui(e.stateNode.nextSibling) : null;
          return !0;
        }
        function ha() {
          for (var e = ra; e; ) e = ui(e.nextSibling);
        }
        function da() {
          (ra = na = null), (ia = !1);
        }
        function pa(e) {
          null === aa ? (aa = [e]) : aa.push(e);
        }
        var va = x.ReactCurrentBatchConfig;
        function ga(e, t) {
          if (e && e.defaultProps) {
            for (var n in ((t = F({}, t)), (e = e.defaultProps)))
              void 0 === t[n] && (t[n] = e[n]);
            return t;
          }
          return t;
        }
        var ma = Si(null),
          ya = null,
          ba = null,
          xa = null;
        function ka() {
          xa = ba = ya = null;
        }
        function _a(e) {
          var t = ma.current;
          Ei(ma), (e._currentValue = t);
        }
        function wa(e, t, n) {
          for (; null !== e; ) {
            var r = e.alternate;
            if (
              ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
                : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
              e === n)
            )
              break;
            e = e.return;
          }
        }
        function Sa(e, t) {
          (ya = e),
            (xa = ba = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 !== (e.lanes & t) && (xs = !0), (e.firstContext = null));
        }
        function Ea(e) {
          var t = e._currentValue;
          if (xa !== e)
            if (
              ((e = { context: e, memoizedValue: t, next: null }), null === ba)
            ) {
              if (null === ya) throw Error(a(308));
              (ba = e), (ya.dependencies = { lanes: 0, firstContext: e });
            } else ba = ba.next = e;
          return t;
        }
        var Ma = null;
        function Ca(e) {
          null === Ma ? (Ma = [e]) : Ma.push(e);
        }
        function Pa(e, t, n, r) {
          var i = t.interleaved;
          return (
            null === i
              ? ((n.next = n), Ca(t))
              : ((n.next = i.next), (i.next = n)),
            (t.interleaved = n),
            Oa(e, r)
          );
        }
        function Oa(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
            (e.childLanes |= t),
              null !== (n = e.alternate) && (n.childLanes |= t),
              (n = e),
              (e = e.return);
          return 3 === n.tag ? n.stateNode : null;
        }
        var Ta = !1;
        function Da(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
          };
        }
        function La(e, t) {
          (e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
              });
        }
        function Ra(e, t) {
          return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          };
        }
        function Aa(e, t, n) {
          var r = e.updateQueue;
          if (null === r) return null;
          if (((r = r.shared), 0 !== (2 & Ol))) {
            var i = r.pending;
            return (
              null === i ? (t.next = t) : ((t.next = i.next), (i.next = t)),
              (r.pending = t),
              Oa(e, n)
            );
          }
          return (
            null === (i = r.interleaved)
              ? ((t.next = t), Ca(r))
              : ((t.next = i.next), (i.next = t)),
            (r.interleaved = t),
            Oa(e, n)
          );
        }
        function Na(e, t, n) {
          if (
            null !== (t = t.updateQueue) &&
            ((t = t.shared), 0 !== (4194240 & n))
          ) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), yt(e, n);
          }
        }
        function za(e, t) {
          var n = e.updateQueue,
            r = e.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var i = null,
              a = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var o = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null,
                };
                null === a ? (i = a = o) : (a = a.next = o), (n = n.next);
              } while (null !== n);
              null === a ? (i = a = t) : (a = a.next = t);
            } else i = a = t;
            return (
              (n = {
                baseState: r.baseState,
                firstBaseUpdate: i,
                lastBaseUpdate: a,
                shared: r.shared,
                effects: r.effects,
              }),
              void (e.updateQueue = n)
            );
          }
          null === (e = n.lastBaseUpdate)
            ? (n.firstBaseUpdate = t)
            : (e.next = t),
            (n.lastBaseUpdate = t);
        }
        function Fa(e, t, n, r) {
          var i = e.updateQueue;
          Ta = !1;
          var a = i.firstBaseUpdate,
            o = i.lastBaseUpdate,
            s = i.shared.pending;
          if (null !== s) {
            i.shared.pending = null;
            var l = s,
              u = l.next;
            (l.next = null), null === o ? (a = u) : (o.next = u), (o = l);
            var c = e.alternate;
            null !== c &&
              (s = (c = c.updateQueue).lastBaseUpdate) !== o &&
              (null === s ? (c.firstBaseUpdate = u) : (s.next = u),
              (c.lastBaseUpdate = l));
          }
          if (null !== a) {
            var f = i.baseState;
            for (o = 0, c = u = l = null, s = a; ; ) {
              var h = s.lane,
                d = s.eventTime;
              if ((r & h) === h) {
                null !== c &&
                  (c = c.next =
                    {
                      eventTime: d,
                      lane: 0,
                      tag: s.tag,
                      payload: s.payload,
                      callback: s.callback,
                      next: null,
                    });
                e: {
                  var p = e,
                    v = s;
                  switch (((h = t), (d = n), v.tag)) {
                    case 1:
                      if ("function" === typeof (p = v.payload)) {
                        f = p.call(d, f, h);
                        break e;
                      }
                      f = p;
                      break e;
                    case 3:
                      p.flags = (-65537 & p.flags) | 128;
                    case 0:
                      if (
                        null ===
                          (h =
                            "function" === typeof (p = v.payload)
                              ? p.call(d, f, h)
                              : p) ||
                        void 0 === h
                      )
                        break e;
                      f = F({}, f, h);
                      break e;
                    case 2:
                      Ta = !0;
                  }
                }
                null !== s.callback &&
                  0 !== s.lane &&
                  ((e.flags |= 64),
                  null === (h = i.effects) ? (i.effects = [s]) : h.push(s));
              } else
                (d = {
                  eventTime: d,
                  lane: h,
                  tag: s.tag,
                  payload: s.payload,
                  callback: s.callback,
                  next: null,
                }),
                  null === c ? ((u = c = d), (l = f)) : (c = c.next = d),
                  (o |= h);
              if (null === (s = s.next)) {
                if (null === (s = i.shared.pending)) break;
                (s = (h = s).next),
                  (h.next = null),
                  (i.lastBaseUpdate = h),
                  (i.shared.pending = null);
              }
            }
            if (
              (null === c && (l = f),
              (i.baseState = l),
              (i.firstBaseUpdate = u),
              (i.lastBaseUpdate = c),
              null !== (t = i.shared.interleaved))
            ) {
              i = t;
              do {
                (o |= i.lane), (i = i.next);
              } while (i !== t);
            } else null === a && (i.shared.lanes = 0);
            (Fl |= o), (e.lanes = o), (e.memoizedState = f);
          }
        }
        function Ia(e, t, n) {
          if (((e = t.effects), (t.effects = null), null !== e))
            for (t = 0; t < e.length; t++) {
              var r = e[t],
                i = r.callback;
              if (null !== i) {
                if (((r.callback = null), (r = n), "function" !== typeof i))
                  throw Error(a(191, i));
                i.call(r);
              }
            }
        }
        var ja = new r.Component().refs;
        function Ba(e, t, n, r) {
          (n =
            null === (n = n(r, (t = e.memoizedState))) || void 0 === n
              ? t
              : F({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n);
        }
        var Va = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && We(e) === e;
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = tu(),
              i = nu(e),
              a = Ra(r, i);
            (a.payload = t),
              void 0 !== n && null !== n && (a.callback = n),
              null !== (t = Aa(e, a, i)) && (ru(t, e, i, r), Na(t, e, i));
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = tu(),
              i = nu(e),
              a = Ra(r, i);
            (a.tag = 1),
              (a.payload = t),
              void 0 !== n && null !== n && (a.callback = n),
              null !== (t = Aa(e, a, i)) && (ru(t, e, i, r), Na(t, e, i));
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = tu(),
              r = nu(e),
              i = Ra(n, r);
            (i.tag = 2),
              void 0 !== t && null !== t && (i.callback = t),
              null !== (t = Aa(e, i, r)) && (ru(t, e, r, n), Na(t, e, r));
          },
        };
        function Wa(e, t, n, r, i, a, o) {
          return "function" === typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, a, o)
            : !t.prototype ||
                !t.prototype.isPureReactComponent ||
                !lr(n, r) ||
                !lr(i, a);
        }
        function Ha(e, t, n) {
          var r = !1,
            i = Ci,
            a = t.contextType;
          return (
            "object" === typeof a && null !== a
              ? (a = Ea(a))
              : ((i = Li(t) ? Ti : Pi.current),
                (a = (r = null !== (r = t.contextTypes) && void 0 !== r)
                  ? Di(e, i)
                  : Ci)),
            (t = new t(n, a)),
            (e.memoizedState =
              null !== t.state && void 0 !== t.state ? t.state : null),
            (t.updater = Va),
            (e.stateNode = t),
            (t._reactInternals = e),
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                i),
              (e.__reactInternalMemoizedMaskedChildContext = a)),
            t
          );
        }
        function Ua(e, t, n, r) {
          (e = t.state),
            "function" === typeof t.componentWillReceiveProps &&
              t.componentWillReceiveProps(n, r),
            "function" === typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && Va.enqueueReplaceState(t, t.state, null);
        }
        function $a(e, t, n, r) {
          var i = e.stateNode;
          (i.props = n), (i.state = e.memoizedState), (i.refs = ja), Da(e);
          var a = t.contextType;
          "object" === typeof a && null !== a
            ? (i.context = Ea(a))
            : ((a = Li(t) ? Ti : Pi.current), (i.context = Di(e, a))),
            (i.state = e.memoizedState),
            "function" === typeof (a = t.getDerivedStateFromProps) &&
              (Ba(e, t, a, n), (i.state = e.memoizedState)),
            "function" === typeof t.getDerivedStateFromProps ||
              "function" === typeof i.getSnapshotBeforeUpdate ||
              ("function" !== typeof i.UNSAFE_componentWillMount &&
                "function" !== typeof i.componentWillMount) ||
              ((t = i.state),
              "function" === typeof i.componentWillMount &&
                i.componentWillMount(),
              "function" === typeof i.UNSAFE_componentWillMount &&
                i.UNSAFE_componentWillMount(),
              t !== i.state && Va.enqueueReplaceState(i, i.state, null),
              Fa(e, n, i, r),
              (i.state = e.memoizedState)),
            "function" === typeof i.componentDidMount && (e.flags |= 4194308);
        }
        function Ya(e, t, n) {
          if (
            null !== (e = n.ref) &&
            "function" !== typeof e &&
            "object" !== typeof e
          ) {
            if (n._owner) {
              if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(a(309));
                var r = n.stateNode;
              }
              if (!r) throw Error(a(147, e));
              var i = r,
                o = "" + e;
              return null !== t &&
                null !== t.ref &&
                "function" === typeof t.ref &&
                t.ref._stringRef === o
                ? t.ref
                : ((t = function (e) {
                    var t = i.refs;
                    t === ja && (t = i.refs = {}),
                      null === e ? delete t[o] : (t[o] = e);
                  }),
                  (t._stringRef = o),
                  t);
            }
            if ("string" !== typeof e) throw Error(a(284));
            if (!n._owner) throw Error(a(290, e));
          }
          return e;
        }
        function qa(e, t) {
          throw (
            ((e = Object.prototype.toString.call(t)),
            Error(
              a(
                31,
                "[object Object]" === e
                  ? "object with keys {" + Object.keys(t).join(", ") + "}"
                  : e
              )
            ))
          );
        }
        function Ka(e) {
          return (0, e._init)(e._payload);
        }
        function Qa(e) {
          function t(t, n) {
            if (e) {
              var r = t.deletions;
              null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
            }
          }
          function n(n, r) {
            if (!e) return null;
            for (; null !== r; ) t(n, r), (r = r.sibling);
            return null;
          }
          function r(e, t) {
            for (e = new Map(); null !== t; )
              null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
                (t = t.sibling);
            return e;
          }
          function i(e, t) {
            return ((e = Au(e, t)).index = 0), (e.sibling = null), e;
          }
          function o(t, n, r) {
            return (
              (t.index = r),
              e
                ? null !== (r = t.alternate)
                  ? (r = r.index) < n
                    ? ((t.flags |= 2), n)
                    : r
                  : ((t.flags |= 2), n)
                : ((t.flags |= 1048576), n)
            );
          }
          function s(t) {
            return e && null === t.alternate && (t.flags |= 2), t;
          }
          function l(e, t, n, r) {
            return null === t || 6 !== t.tag
              ? (((t = Iu(n, e.mode, r)).return = e), t)
              : (((t = i(t, n)).return = e), t);
          }
          function u(e, t, n, r) {
            var a = n.type;
            return a === w
              ? f(e, t, n.props.children, r, n.key)
              : null !== t &&
                (t.elementType === a ||
                  ("object" === typeof a &&
                    null !== a &&
                    a.$$typeof === L &&
                    Ka(a) === t.type))
              ? (((r = i(t, n.props)).ref = Ya(e, t, n)), (r.return = e), r)
              : (((r = Nu(n.type, n.key, n.props, null, e.mode, r)).ref = Ya(
                  e,
                  t,
                  n
                )),
                (r.return = e),
                r);
          }
          function c(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = ju(n, e.mode, r)).return = e), t)
              : (((t = i(t, n.children || [])).return = e), t);
          }
          function f(e, t, n, r, a) {
            return null === t || 7 !== t.tag
              ? (((t = zu(n, e.mode, r, a)).return = e), t)
              : (((t = i(t, n)).return = e), t);
          }
          function h(e, t, n) {
            if (("string" === typeof t && "" !== t) || "number" === typeof t)
              return ((t = Iu("" + t, e.mode, n)).return = e), t;
            if ("object" === typeof t && null !== t) {
              switch (t.$$typeof) {
                case k:
                  return (
                    ((n = Nu(t.type, t.key, t.props, null, e.mode, n)).ref = Ya(
                      e,
                      null,
                      t
                    )),
                    (n.return = e),
                    n
                  );
                case _:
                  return ((t = ju(t, e.mode, n)).return = e), t;
                case L:
                  return h(e, (0, t._init)(t._payload), n);
              }
              if (te(t) || N(t))
                return ((t = zu(t, e.mode, n, null)).return = e), t;
              qa(e, t);
            }
            return null;
          }
          function d(e, t, n, r) {
            var i = null !== t ? t.key : null;
            if (("string" === typeof n && "" !== n) || "number" === typeof n)
              return null !== i ? null : l(e, t, "" + n, r);
            if ("object" === typeof n && null !== n) {
              switch (n.$$typeof) {
                case k:
                  return n.key === i ? u(e, t, n, r) : null;
                case _:
                  return n.key === i ? c(e, t, n, r) : null;
                case L:
                  return d(e, t, (i = n._init)(n._payload), r);
              }
              if (te(n) || N(n)) return null !== i ? null : f(e, t, n, r, null);
              qa(e, n);
            }
            return null;
          }
          function p(e, t, n, r, i) {
            if (("string" === typeof r && "" !== r) || "number" === typeof r)
              return l(t, (e = e.get(n) || null), "" + r, i);
            if ("object" === typeof r && null !== r) {
              switch (r.$$typeof) {
                case k:
                  return u(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    i
                  );
                case _:
                  return c(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    i
                  );
                case L:
                  return p(e, t, n, (0, r._init)(r._payload), i);
              }
              if (te(r) || N(r))
                return f(t, (e = e.get(n) || null), r, i, null);
              qa(t, r);
            }
            return null;
          }
          function v(i, a, s, l) {
            for (
              var u = null, c = null, f = a, v = (a = 0), g = null;
              null !== f && v < s.length;
              v++
            ) {
              f.index > v ? ((g = f), (f = null)) : (g = f.sibling);
              var m = d(i, f, s[v], l);
              if (null === m) {
                null === f && (f = g);
                break;
              }
              e && f && null === m.alternate && t(i, f),
                (a = o(m, a, v)),
                null === c ? (u = m) : (c.sibling = m),
                (c = m),
                (f = g);
            }
            if (v === s.length) return n(i, f), ia && Ji(i, v), u;
            if (null === f) {
              for (; v < s.length; v++)
                null !== (f = h(i, s[v], l)) &&
                  ((a = o(f, a, v)),
                  null === c ? (u = f) : (c.sibling = f),
                  (c = f));
              return ia && Ji(i, v), u;
            }
            for (f = r(i, f); v < s.length; v++)
              null !== (g = p(f, i, v, s[v], l)) &&
                (e &&
                  null !== g.alternate &&
                  f.delete(null === g.key ? v : g.key),
                (a = o(g, a, v)),
                null === c ? (u = g) : (c.sibling = g),
                (c = g));
            return (
              e &&
                f.forEach(function (e) {
                  return t(i, e);
                }),
              ia && Ji(i, v),
              u
            );
          }
          function g(i, s, l, u) {
            var c = N(l);
            if ("function" !== typeof c) throw Error(a(150));
            if (null == (l = c.call(l))) throw Error(a(151));
            for (
              var f = (c = null), v = s, g = (s = 0), m = null, y = l.next();
              null !== v && !y.done;
              g++, y = l.next()
            ) {
              v.index > g ? ((m = v), (v = null)) : (m = v.sibling);
              var b = d(i, v, y.value, u);
              if (null === b) {
                null === v && (v = m);
                break;
              }
              e && v && null === b.alternate && t(i, v),
                (s = o(b, s, g)),
                null === f ? (c = b) : (f.sibling = b),
                (f = b),
                (v = m);
            }
            if (y.done) return n(i, v), ia && Ji(i, g), c;
            if (null === v) {
              for (; !y.done; g++, y = l.next())
                null !== (y = h(i, y.value, u)) &&
                  ((s = o(y, s, g)),
                  null === f ? (c = y) : (f.sibling = y),
                  (f = y));
              return ia && Ji(i, g), c;
            }
            for (v = r(i, v); !y.done; g++, y = l.next())
              null !== (y = p(v, i, g, y.value, u)) &&
                (e &&
                  null !== y.alternate &&
                  v.delete(null === y.key ? g : y.key),
                (s = o(y, s, g)),
                null === f ? (c = y) : (f.sibling = y),
                (f = y));
            return (
              e &&
                v.forEach(function (e) {
                  return t(i, e);
                }),
              ia && Ji(i, g),
              c
            );
          }
          return function e(r, a, o, l) {
            if (
              ("object" === typeof o &&
                null !== o &&
                o.type === w &&
                null === o.key &&
                (o = o.props.children),
              "object" === typeof o && null !== o)
            ) {
              switch (o.$$typeof) {
                case k:
                  e: {
                    for (var u = o.key, c = a; null !== c; ) {
                      if (c.key === u) {
                        if ((u = o.type) === w) {
                          if (7 === c.tag) {
                            n(r, c.sibling),
                              ((a = i(c, o.props.children)).return = r),
                              (r = a);
                            break e;
                          }
                        } else if (
                          c.elementType === u ||
                          ("object" === typeof u &&
                            null !== u &&
                            u.$$typeof === L &&
                            Ka(u) === c.type)
                        ) {
                          n(r, c.sibling),
                            ((a = i(c, o.props)).ref = Ya(r, c, o)),
                            (a.return = r),
                            (r = a);
                          break e;
                        }
                        n(r, c);
                        break;
                      }
                      t(r, c), (c = c.sibling);
                    }
                    o.type === w
                      ? (((a = zu(o.props.children, r.mode, l, o.key)).return =
                          r),
                        (r = a))
                      : (((l = Nu(
                          o.type,
                          o.key,
                          o.props,
                          null,
                          r.mode,
                          l
                        )).ref = Ya(r, a, o)),
                        (l.return = r),
                        (r = l));
                  }
                  return s(r);
                case _:
                  e: {
                    for (c = o.key; null !== a; ) {
                      if (a.key === c) {
                        if (
                          4 === a.tag &&
                          a.stateNode.containerInfo === o.containerInfo &&
                          a.stateNode.implementation === o.implementation
                        ) {
                          n(r, a.sibling),
                            ((a = i(a, o.children || [])).return = r),
                            (r = a);
                          break e;
                        }
                        n(r, a);
                        break;
                      }
                      t(r, a), (a = a.sibling);
                    }
                    ((a = ju(o, r.mode, l)).return = r), (r = a);
                  }
                  return s(r);
                case L:
                  return e(r, a, (c = o._init)(o._payload), l);
              }
              if (te(o)) return v(r, a, o, l);
              if (N(o)) return g(r, a, o, l);
              qa(r, o);
            }
            return ("string" === typeof o && "" !== o) || "number" === typeof o
              ? ((o = "" + o),
                null !== a && 6 === a.tag
                  ? (n(r, a.sibling), ((a = i(a, o)).return = r), (r = a))
                  : (n(r, a), ((a = Iu(o, r.mode, l)).return = r), (r = a)),
                s(r))
              : n(r, a);
          };
        }
        var Xa = Qa(!0),
          Ga = Qa(!1),
          Ja = {},
          Za = Si(Ja),
          eo = Si(Ja),
          to = Si(Ja);
        function no(e) {
          if (e === Ja) throw Error(a(174));
          return e;
        }
        function ro(e, t) {
          switch ((Mi(to, t), Mi(eo, e), Mi(Za, Ja), (e = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : le(null, "");
              break;
            default:
              t = le(
                (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
                (e = e.tagName)
              );
          }
          Ei(Za), Mi(Za, t);
        }
        function io() {
          Ei(Za), Ei(eo), Ei(to);
        }
        function ao(e) {
          no(to.current);
          var t = no(Za.current),
            n = le(t, e.type);
          t !== n && (Mi(eo, e), Mi(Za, n));
        }
        function oo(e) {
          eo.current === e && (Ei(Za), Ei(eo));
        }
        var so = Si(0);
        function lo(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (
                null !== n &&
                (null === (n = n.dehydrated) ||
                  "$?" === n.data ||
                  "$!" === n.data)
              )
                return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 !== (128 & t.flags)) return t;
            } else if (null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
          return null;
        }
        var uo = [];
        function co() {
          for (var e = 0; e < uo.length; e++)
            uo[e]._workInProgressVersionPrimary = null;
          uo.length = 0;
        }
        var fo = x.ReactCurrentDispatcher,
          ho = x.ReactCurrentBatchConfig,
          po = 0,
          vo = null,
          go = null,
          mo = null,
          yo = !1,
          bo = !1,
          xo = 0,
          ko = 0;
        function _o() {
          throw Error(a(321));
        }
        function wo(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++)
            if (!sr(e[n], t[n])) return !1;
          return !0;
        }
        function So(e, t, n, r, i, o) {
          if (
            ((po = o),
            (vo = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (fo.current = null === e || null === e.memoizedState ? ss : ls),
            (e = n(r, i)),
            bo)
          ) {
            o = 0;
            do {
              if (((bo = !1), (xo = 0), 25 <= o)) throw Error(a(301));
              (o += 1),
                (mo = go = null),
                (t.updateQueue = null),
                (fo.current = us),
                (e = n(r, i));
            } while (bo);
          }
          if (
            ((fo.current = os),
            (t = null !== go && null !== go.next),
            (po = 0),
            (mo = go = vo = null),
            (yo = !1),
            t)
          )
            throw Error(a(300));
          return e;
        }
        function Eo() {
          var e = 0 !== xo;
          return (xo = 0), e;
        }
        function Mo() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === mo ? (vo.memoizedState = mo = e) : (mo = mo.next = e), mo
          );
        }
        function Co() {
          if (null === go) {
            var e = vo.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = go.next;
          var t = null === mo ? vo.memoizedState : mo.next;
          if (null !== t) (mo = t), (go = e);
          else {
            if (null === e) throw Error(a(310));
            (e = {
              memoizedState: (go = e).memoizedState,
              baseState: go.baseState,
              baseQueue: go.baseQueue,
              queue: go.queue,
              next: null,
            }),
              null === mo ? (vo.memoizedState = mo = e) : (mo = mo.next = e);
          }
          return mo;
        }
        function Po(e, t) {
          return "function" === typeof t ? t(e) : t;
        }
        function Oo(e) {
          var t = Co(),
            n = t.queue;
          if (null === n) throw Error(a(311));
          n.lastRenderedReducer = e;
          var r = go,
            i = r.baseQueue,
            o = n.pending;
          if (null !== o) {
            if (null !== i) {
              var s = i.next;
              (i.next = o.next), (o.next = s);
            }
            (r.baseQueue = i = o), (n.pending = null);
          }
          if (null !== i) {
            (o = i.next), (r = r.baseState);
            var l = (s = null),
              u = null,
              c = o;
            do {
              var f = c.lane;
              if ((po & f) === f)
                null !== u &&
                  (u = u.next =
                    {
                      lane: 0,
                      action: c.action,
                      hasEagerState: c.hasEagerState,
                      eagerState: c.eagerState,
                      next: null,
                    }),
                  (r = c.hasEagerState ? c.eagerState : e(r, c.action));
              else {
                var h = {
                  lane: f,
                  action: c.action,
                  hasEagerState: c.hasEagerState,
                  eagerState: c.eagerState,
                  next: null,
                };
                null === u ? ((l = u = h), (s = r)) : (u = u.next = h),
                  (vo.lanes |= f),
                  (Fl |= f);
              }
              c = c.next;
            } while (null !== c && c !== o);
            null === u ? (s = r) : (u.next = l),
              sr(r, t.memoizedState) || (xs = !0),
              (t.memoizedState = r),
              (t.baseState = s),
              (t.baseQueue = u),
              (n.lastRenderedState = r);
          }
          if (null !== (e = n.interleaved)) {
            i = e;
            do {
              (o = i.lane), (vo.lanes |= o), (Fl |= o), (i = i.next);
            } while (i !== e);
          } else null === i && (n.lanes = 0);
          return [t.memoizedState, n.dispatch];
        }
        function To(e) {
          var t = Co(),
            n = t.queue;
          if (null === n) throw Error(a(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            i = n.pending,
            o = t.memoizedState;
          if (null !== i) {
            n.pending = null;
            var s = (i = i.next);
            do {
              (o = e(o, s.action)), (s = s.next);
            } while (s !== i);
            sr(o, t.memoizedState) || (xs = !0),
              (t.memoizedState = o),
              null === t.baseQueue && (t.baseState = o),
              (n.lastRenderedState = o);
          }
          return [o, r];
        }
        function Do() {}
        function Lo(e, t) {
          var n = vo,
            r = Co(),
            i = t(),
            o = !sr(r.memoizedState, i);
          if (
            (o && ((r.memoizedState = i), (xs = !0)),
            (r = r.queue),
            Uo(No.bind(null, n, r, e), [e]),
            r.getSnapshot !== t ||
              o ||
              (null !== mo && 1 & mo.memoizedState.tag))
          ) {
            if (
              ((n.flags |= 2048),
              jo(9, Ao.bind(null, n, r, i, t), void 0, null),
              null === Tl)
            )
              throw Error(a(349));
            0 !== (30 & po) || Ro(n, t, i);
          }
          return i;
        }
        function Ro(e, t, n) {
          (e.flags |= 16384),
            (e = { getSnapshot: t, value: n }),
            null === (t = vo.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (vo.updateQueue = t),
                (t.stores = [e]))
              : null === (n = t.stores)
              ? (t.stores = [e])
              : n.push(e);
        }
        function Ao(e, t, n, r) {
          (t.value = n), (t.getSnapshot = r), zo(t) && Fo(e);
        }
        function No(e, t, n) {
          return n(function () {
            zo(t) && Fo(e);
          });
        }
        function zo(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !sr(e, n);
          } catch (r) {
            return !0;
          }
        }
        function Fo(e) {
          var t = Oa(e, 1);
          null !== t && ru(t, e, 1, -1);
        }
        function Io(e) {
          var t = Mo();
          return (
            "function" === typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: Po,
              lastRenderedState: e,
            }),
            (t.queue = e),
            (e = e.dispatch = ns.bind(null, vo, e)),
            [t.memoizedState, e]
          );
        }
        function jo(e, t, n, r) {
          return (
            (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
            null === (t = vo.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (vo.updateQueue = t),
                (t.lastEffect = e.next = e))
              : null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
            e
          );
        }
        function Bo() {
          return Co().memoizedState;
        }
        function Vo(e, t, n, r) {
          var i = Mo();
          (vo.flags |= e),
            (i.memoizedState = jo(1 | t, n, void 0, void 0 === r ? null : r));
        }
        function Wo(e, t, n, r) {
          var i = Co();
          r = void 0 === r ? null : r;
          var a = void 0;
          if (null !== go) {
            var o = go.memoizedState;
            if (((a = o.destroy), null !== r && wo(r, o.deps)))
              return void (i.memoizedState = jo(t, n, a, r));
          }
          (vo.flags |= e), (i.memoizedState = jo(1 | t, n, a, r));
        }
        function Ho(e, t) {
          return Vo(8390656, 8, e, t);
        }
        function Uo(e, t) {
          return Wo(2048, 8, e, t);
        }
        function $o(e, t) {
          return Wo(4, 2, e, t);
        }
        function Yo(e, t) {
          return Wo(4, 4, e, t);
        }
        function qo(e, t) {
          return "function" === typeof t
            ? ((e = e()),
              t(e),
              function () {
                t(null);
              })
            : null !== t && void 0 !== t
            ? ((e = e()),
              (t.current = e),
              function () {
                t.current = null;
              })
            : void 0;
        }
        function Ko(e, t, n) {
          return (
            (n = null !== n && void 0 !== n ? n.concat([e]) : null),
            Wo(4, 4, qo.bind(null, t, e), n)
          );
        }
        function Qo() {}
        function Xo(e, t) {
          var n = Co();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && wo(t, r[1])
            ? r[0]
            : ((n.memoizedState = [e, t]), e);
        }
        function Go(e, t) {
          var n = Co();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && wo(t, r[1])
            ? r[0]
            : ((e = e()), (n.memoizedState = [e, t]), e);
        }
        function Jo(e, t, n) {
          return 0 === (21 & po)
            ? (e.baseState && ((e.baseState = !1), (xs = !0)),
              (e.memoizedState = n))
            : (sr(n, t) ||
                ((n = vt()), (vo.lanes |= n), (Fl |= n), (e.baseState = !0)),
              t);
        }
        function Zo(e, t) {
          var n = bt;
          (bt = 0 !== n && 4 > n ? n : 4), e(!0);
          var r = ho.transition;
          ho.transition = {};
          try {
            e(!1), t();
          } finally {
            (bt = n), (ho.transition = r);
          }
        }
        function es() {
          return Co().memoizedState;
        }
        function ts(e, t, n) {
          var r = nu(e);
          if (
            ((n = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            }),
            rs(e))
          )
            is(t, n);
          else if (null !== (n = Pa(e, t, n, r))) {
            ru(n, e, r, tu()), as(n, t, r);
          }
        }
        function ns(e, t, n) {
          var r = nu(e),
            i = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            };
          if (rs(e)) is(t, i);
          else {
            var a = e.alternate;
            if (
              0 === e.lanes &&
              (null === a || 0 === a.lanes) &&
              null !== (a = t.lastRenderedReducer)
            )
              try {
                var o = t.lastRenderedState,
                  s = a(o, n);
                if (((i.hasEagerState = !0), (i.eagerState = s), sr(s, o))) {
                  var l = t.interleaved;
                  return (
                    null === l
                      ? ((i.next = i), Ca(t))
                      : ((i.next = l.next), (l.next = i)),
                    void (t.interleaved = i)
                  );
                }
              } catch (u) {}
            null !== (n = Pa(e, t, i, r)) &&
              (ru(n, e, r, (i = tu())), as(n, t, r));
          }
        }
        function rs(e) {
          var t = e.alternate;
          return e === vo || (null !== t && t === vo);
        }
        function is(e, t) {
          bo = yo = !0;
          var n = e.pending;
          null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
            (e.pending = t);
        }
        function as(e, t, n) {
          if (0 !== (4194240 & n)) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), yt(e, n);
          }
        }
        var os = {
            readContext: Ea,
            useCallback: _o,
            useContext: _o,
            useEffect: _o,
            useImperativeHandle: _o,
            useInsertionEffect: _o,
            useLayoutEffect: _o,
            useMemo: _o,
            useReducer: _o,
            useRef: _o,
            useState: _o,
            useDebugValue: _o,
            useDeferredValue: _o,
            useTransition: _o,
            useMutableSource: _o,
            useSyncExternalStore: _o,
            useId: _o,
            unstable_isNewReconciler: !1,
          },
          ss = {
            readContext: Ea,
            useCallback: function (e, t) {
              return (Mo().memoizedState = [e, void 0 === t ? null : t]), e;
            },
            useContext: Ea,
            useEffect: Ho,
            useImperativeHandle: function (e, t, n) {
              return (
                (n = null !== n && void 0 !== n ? n.concat([e]) : null),
                Vo(4194308, 4, qo.bind(null, t, e), n)
              );
            },
            useLayoutEffect: function (e, t) {
              return Vo(4194308, 4, e, t);
            },
            useInsertionEffect: function (e, t) {
              return Vo(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var n = Mo();
              return (
                (t = void 0 === t ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
              );
            },
            useReducer: function (e, t, n) {
              var r = Mo();
              return (
                (t = void 0 !== n ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = {
                  pending: null,
                  interleaved: null,
                  lanes: 0,
                  dispatch: null,
                  lastRenderedReducer: e,
                  lastRenderedState: t,
                }),
                (r.queue = e),
                (e = e.dispatch = ts.bind(null, vo, e)),
                [r.memoizedState, e]
              );
            },
            useRef: function (e) {
              return (e = { current: e }), (Mo().memoizedState = e);
            },
            useState: Io,
            useDebugValue: Qo,
            useDeferredValue: function (e) {
              return (Mo().memoizedState = e);
            },
            useTransition: function () {
              var e = Io(!1),
                t = e[0];
              return (
                (e = Zo.bind(null, e[1])), (Mo().memoizedState = e), [t, e]
              );
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (e, t, n) {
              var r = vo,
                i = Mo();
              if (ia) {
                if (void 0 === n) throw Error(a(407));
                n = n();
              } else {
                if (((n = t()), null === Tl)) throw Error(a(349));
                0 !== (30 & po) || Ro(r, t, n);
              }
              i.memoizedState = n;
              var o = { value: n, getSnapshot: t };
              return (
                (i.queue = o),
                Ho(No.bind(null, r, o, e), [e]),
                (r.flags |= 2048),
                jo(9, Ao.bind(null, r, o, n, t), void 0, null),
                n
              );
            },
            useId: function () {
              var e = Mo(),
                t = Tl.identifierPrefix;
              if (ia) {
                var n = Gi;
                (t =
                  ":" +
                  t +
                  "R" +
                  (n = (Xi & ~(1 << (32 - ot(Xi) - 1))).toString(32) + n)),
                  0 < (n = xo++) && (t += "H" + n.toString(32)),
                  (t += ":");
              } else t = ":" + t + "r" + (n = ko++).toString(32) + ":";
              return (e.memoizedState = t);
            },
            unstable_isNewReconciler: !1,
          },
          ls = {
            readContext: Ea,
            useCallback: Xo,
            useContext: Ea,
            useEffect: Uo,
            useImperativeHandle: Ko,
            useInsertionEffect: $o,
            useLayoutEffect: Yo,
            useMemo: Go,
            useReducer: Oo,
            useRef: Bo,
            useState: function () {
              return Oo(Po);
            },
            useDebugValue: Qo,
            useDeferredValue: function (e) {
              return Jo(Co(), go.memoizedState, e);
            },
            useTransition: function () {
              return [Oo(Po)[0], Co().memoizedState];
            },
            useMutableSource: Do,
            useSyncExternalStore: Lo,
            useId: es,
            unstable_isNewReconciler: !1,
          },
          us = {
            readContext: Ea,
            useCallback: Xo,
            useContext: Ea,
            useEffect: Uo,
            useImperativeHandle: Ko,
            useInsertionEffect: $o,
            useLayoutEffect: Yo,
            useMemo: Go,
            useReducer: To,
            useRef: Bo,
            useState: function () {
              return To(Po);
            },
            useDebugValue: Qo,
            useDeferredValue: function (e) {
              var t = Co();
              return null === go
                ? (t.memoizedState = e)
                : Jo(t, go.memoizedState, e);
            },
            useTransition: function () {
              return [To(Po)[0], Co().memoizedState];
            },
            useMutableSource: Do,
            useSyncExternalStore: Lo,
            useId: es,
            unstable_isNewReconciler: !1,
          };
        function cs(e, t) {
          try {
            var n = "",
              r = t;
            do {
              (n += V(r)), (r = r.return);
            } while (r);
            var i = n;
          } catch (a) {
            i = "\nError generating stack: " + a.message + "\n" + a.stack;
          }
          return { value: e, source: t, stack: i, digest: null };
        }
        function fs(e, t, n) {
          return {
            value: e,
            source: null,
            stack: null != n ? n : null,
            digest: null != t ? t : null,
          };
        }
        function hs(e, t) {
          try {
            console.error(t.value);
          } catch (n) {
            setTimeout(function () {
              throw n;
            });
          }
        }
        var ds = "function" === typeof WeakMap ? WeakMap : Map;
        function ps(e, t, n) {
          ((n = Ra(-1, n)).tag = 3), (n.payload = { element: null });
          var r = t.value;
          return (
            (n.callback = function () {
              $l || (($l = !0), (Yl = r)), hs(0, t);
            }),
            n
          );
        }
        function vs(e, t, n) {
          (n = Ra(-1, n)).tag = 3;
          var r = e.type.getDerivedStateFromError;
          if ("function" === typeof r) {
            var i = t.value;
            (n.payload = function () {
              return r(i);
            }),
              (n.callback = function () {
                hs(0, t);
              });
          }
          var a = e.stateNode;
          return (
            null !== a &&
              "function" === typeof a.componentDidCatch &&
              (n.callback = function () {
                hs(0, t),
                  "function" !== typeof r &&
                    (null === ql ? (ql = new Set([this])) : ql.add(this));
                var e = t.stack;
                this.componentDidCatch(t.value, {
                  componentStack: null !== e ? e : "",
                });
              }),
            n
          );
        }
        function gs(e, t, n) {
          var r = e.pingCache;
          if (null === r) {
            r = e.pingCache = new ds();
            var i = new Set();
            r.set(t, i);
          } else void 0 === (i = r.get(t)) && ((i = new Set()), r.set(t, i));
          i.has(n) || (i.add(n), (e = Mu.bind(null, e, t, n)), t.then(e, e));
        }
        function ms(e) {
          do {
            var t;
            if (
              ((t = 13 === e.tag) &&
                (t = null === (t = e.memoizedState) || null !== t.dehydrated),
              t)
            )
              return e;
            e = e.return;
          } while (null !== e);
          return null;
        }
        function ys(e, t, n, r, i) {
          return 0 === (1 & e.mode)
            ? (e === t
                ? (e.flags |= 65536)
                : ((e.flags |= 128),
                  (n.flags |= 131072),
                  (n.flags &= -52805),
                  1 === n.tag &&
                    (null === n.alternate
                      ? (n.tag = 17)
                      : (((t = Ra(-1, 1)).tag = 2), Aa(n, t, 1))),
                  (n.lanes |= 1)),
              e)
            : ((e.flags |= 65536), (e.lanes = i), e);
        }
        var bs = x.ReactCurrentOwner,
          xs = !1;
        function ks(e, t, n, r) {
          t.child = null === e ? Ga(t, null, n, r) : Xa(t, e.child, n, r);
        }
        function _s(e, t, n, r, i) {
          n = n.render;
          var a = t.ref;
          return (
            Sa(t, i),
            (r = So(e, t, n, r, a, i)),
            (n = Eo()),
            null === e || xs
              ? (ia && n && ea(t), (t.flags |= 1), ks(e, t, r, i), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~i),
                $s(e, t, i))
          );
        }
        function ws(e, t, n, r, i) {
          if (null === e) {
            var a = n.type;
            return "function" !== typeof a ||
              Ru(a) ||
              void 0 !== a.defaultProps ||
              null !== n.compare ||
              void 0 !== n.defaultProps
              ? (((e = Nu(n.type, null, r, t, t.mode, i)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = a), Ss(e, t, a, r, i));
          }
          if (((a = e.child), 0 === (e.lanes & i))) {
            var o = a.memoizedProps;
            if (
              (n = null !== (n = n.compare) ? n : lr)(o, r) &&
              e.ref === t.ref
            )
              return $s(e, t, i);
          }
          return (
            (t.flags |= 1),
            ((e = Au(a, r)).ref = t.ref),
            (e.return = t),
            (t.child = e)
          );
        }
        function Ss(e, t, n, r, i) {
          if (null !== e) {
            var a = e.memoizedProps;
            if (lr(a, r) && e.ref === t.ref) {
              if (((xs = !1), (t.pendingProps = r = a), 0 === (e.lanes & i)))
                return (t.lanes = e.lanes), $s(e, t, i);
              0 !== (131072 & e.flags) && (xs = !0);
            }
          }
          return Cs(e, t, n, r, i);
        }
        function Es(e, t, n) {
          var r = t.pendingProps,
            i = r.children,
            a = null !== e ? e.memoizedState : null;
          if ("hidden" === r.mode)
            if (0 === (1 & t.mode))
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                Mi(Al, Rl),
                (Rl |= n);
            else {
              if (0 === (1073741824 & n))
                return (
                  (e = null !== a ? a.baseLanes | n : n),
                  (t.lanes = t.childLanes = 1073741824),
                  (t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null,
                  }),
                  (t.updateQueue = null),
                  Mi(Al, Rl),
                  (Rl |= e),
                  null
                );
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                (r = null !== a ? a.baseLanes : n),
                Mi(Al, Rl),
                (Rl |= r);
            }
          else
            null !== a
              ? ((r = a.baseLanes | n), (t.memoizedState = null))
              : (r = n),
              Mi(Al, Rl),
              (Rl |= r);
          return ks(e, t, i, n), t.child;
        }
        function Ms(e, t) {
          var n = t.ref;
          ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
            ((t.flags |= 512), (t.flags |= 2097152));
        }
        function Cs(e, t, n, r, i) {
          var a = Li(n) ? Ti : Pi.current;
          return (
            (a = Di(t, a)),
            Sa(t, i),
            (n = So(e, t, n, r, a, i)),
            (r = Eo()),
            null === e || xs
              ? (ia && r && ea(t), (t.flags |= 1), ks(e, t, n, i), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~i),
                $s(e, t, i))
          );
        }
        function Ps(e, t, n, r, i) {
          if (Li(n)) {
            var a = !0;
            zi(t);
          } else a = !1;
          if ((Sa(t, i), null === t.stateNode))
            Us(e, t), Ha(t, n, r), $a(t, n, r, i), (r = !0);
          else if (null === e) {
            var o = t.stateNode,
              s = t.memoizedProps;
            o.props = s;
            var l = o.context,
              u = n.contextType;
            "object" === typeof u && null !== u
              ? (u = Ea(u))
              : (u = Di(t, (u = Li(n) ? Ti : Pi.current)));
            var c = n.getDerivedStateFromProps,
              f =
                "function" === typeof c ||
                "function" === typeof o.getSnapshotBeforeUpdate;
            f ||
              ("function" !== typeof o.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof o.componentWillReceiveProps) ||
              ((s !== r || l !== u) && Ua(t, o, r, u)),
              (Ta = !1);
            var h = t.memoizedState;
            (o.state = h),
              Fa(t, r, o, i),
              (l = t.memoizedState),
              s !== r || h !== l || Oi.current || Ta
                ? ("function" === typeof c &&
                    (Ba(t, n, c, r), (l = t.memoizedState)),
                  (s = Ta || Wa(t, n, s, r, h, l, u))
                    ? (f ||
                        ("function" !== typeof o.UNSAFE_componentWillMount &&
                          "function" !== typeof o.componentWillMount) ||
                        ("function" === typeof o.componentWillMount &&
                          o.componentWillMount(),
                        "function" === typeof o.UNSAFE_componentWillMount &&
                          o.UNSAFE_componentWillMount()),
                      "function" === typeof o.componentDidMount &&
                        (t.flags |= 4194308))
                    : ("function" === typeof o.componentDidMount &&
                        (t.flags |= 4194308),
                      (t.memoizedProps = r),
                      (t.memoizedState = l)),
                  (o.props = r),
                  (o.state = l),
                  (o.context = u),
                  (r = s))
                : ("function" === typeof o.componentDidMount &&
                    (t.flags |= 4194308),
                  (r = !1));
          } else {
            (o = t.stateNode),
              La(e, t),
              (s = t.memoizedProps),
              (u = t.type === t.elementType ? s : ga(t.type, s)),
              (o.props = u),
              (f = t.pendingProps),
              (h = o.context),
              "object" === typeof (l = n.contextType) && null !== l
                ? (l = Ea(l))
                : (l = Di(t, (l = Li(n) ? Ti : Pi.current)));
            var d = n.getDerivedStateFromProps;
            (c =
              "function" === typeof d ||
              "function" === typeof o.getSnapshotBeforeUpdate) ||
              ("function" !== typeof o.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof o.componentWillReceiveProps) ||
              ((s !== f || h !== l) && Ua(t, o, r, l)),
              (Ta = !1),
              (h = t.memoizedState),
              (o.state = h),
              Fa(t, r, o, i);
            var p = t.memoizedState;
            s !== f || h !== p || Oi.current || Ta
              ? ("function" === typeof d &&
                  (Ba(t, n, d, r), (p = t.memoizedState)),
                (u = Ta || Wa(t, n, u, r, h, p, l) || !1)
                  ? (c ||
                      ("function" !== typeof o.UNSAFE_componentWillUpdate &&
                        "function" !== typeof o.componentWillUpdate) ||
                      ("function" === typeof o.componentWillUpdate &&
                        o.componentWillUpdate(r, p, l),
                      "function" === typeof o.UNSAFE_componentWillUpdate &&
                        o.UNSAFE_componentWillUpdate(r, p, l)),
                    "function" === typeof o.componentDidUpdate &&
                      (t.flags |= 4),
                    "function" === typeof o.getSnapshotBeforeUpdate &&
                      (t.flags |= 1024))
                  : ("function" !== typeof o.componentDidUpdate ||
                      (s === e.memoizedProps && h === e.memoizedState) ||
                      (t.flags |= 4),
                    "function" !== typeof o.getSnapshotBeforeUpdate ||
                      (s === e.memoizedProps && h === e.memoizedState) ||
                      (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = p)),
                (o.props = r),
                (o.state = p),
                (o.context = l),
                (r = u))
              : ("function" !== typeof o.componentDidUpdate ||
                  (s === e.memoizedProps && h === e.memoizedState) ||
                  (t.flags |= 4),
                "function" !== typeof o.getSnapshotBeforeUpdate ||
                  (s === e.memoizedProps && h === e.memoizedState) ||
                  (t.flags |= 1024),
                (r = !1));
          }
          return Os(e, t, n, r, a, i);
        }
        function Os(e, t, n, r, i, a) {
          Ms(e, t);
          var o = 0 !== (128 & t.flags);
          if (!r && !o) return i && Fi(t, n, !1), $s(e, t, a);
          (r = t.stateNode), (bs.current = t);
          var s =
            o && "function" !== typeof n.getDerivedStateFromError
              ? null
              : r.render();
          return (
            (t.flags |= 1),
            null !== e && o
              ? ((t.child = Xa(t, e.child, null, a)),
                (t.child = Xa(t, null, s, a)))
              : ks(e, t, s, a),
            (t.memoizedState = r.state),
            i && Fi(t, n, !0),
            t.child
          );
        }
        function Ts(e) {
          var t = e.stateNode;
          t.pendingContext
            ? Ai(0, t.pendingContext, t.pendingContext !== t.context)
            : t.context && Ai(0, t.context, !1),
            ro(e, t.containerInfo);
        }
        function Ds(e, t, n, r, i) {
          return da(), pa(i), (t.flags |= 256), ks(e, t, n, r), t.child;
        }
        var Ls,
          Rs,
          As,
          Ns,
          zs = { dehydrated: null, treeContext: null, retryLane: 0 };
        function Fs(e) {
          return { baseLanes: e, cachePool: null, transitions: null };
        }
        function Is(e, t, n) {
          var r,
            i = t.pendingProps,
            o = so.current,
            s = !1,
            l = 0 !== (128 & t.flags);
          if (
            ((r = l) ||
              (r = (null === e || null !== e.memoizedState) && 0 !== (2 & o)),
            r
              ? ((s = !0), (t.flags &= -129))
              : (null !== e && null === e.memoizedState) || (o |= 1),
            Mi(so, 1 & o),
            null === e)
          )
            return (
              ua(t),
              null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
                ? (0 === (1 & t.mode)
                    ? (t.lanes = 1)
                    : "$!" === e.data
                    ? (t.lanes = 8)
                    : (t.lanes = 1073741824),
                  null)
                : ((l = i.children),
                  (e = i.fallback),
                  s
                    ? ((i = t.mode),
                      (s = t.child),
                      (l = { mode: "hidden", children: l }),
                      0 === (1 & i) && null !== s
                        ? ((s.childLanes = 0), (s.pendingProps = l))
                        : (s = Fu(l, i, 0, null)),
                      (e = zu(e, i, n, null)),
                      (s.return = t),
                      (e.return = t),
                      (s.sibling = e),
                      (t.child = s),
                      (t.child.memoizedState = Fs(n)),
                      (t.memoizedState = zs),
                      e)
                    : js(t, l))
            );
          if (null !== (o = e.memoizedState) && null !== (r = o.dehydrated))
            return (function (e, t, n, r, i, o, s) {
              if (n)
                return 256 & t.flags
                  ? ((t.flags &= -257), Bs(e, t, s, (r = fs(Error(a(422))))))
                  : null !== t.memoizedState
                  ? ((t.child = e.child), (t.flags |= 128), null)
                  : ((o = r.fallback),
                    (i = t.mode),
                    (r = Fu(
                      { mode: "visible", children: r.children },
                      i,
                      0,
                      null
                    )),
                    ((o = zu(o, i, s, null)).flags |= 2),
                    (r.return = t),
                    (o.return = t),
                    (r.sibling = o),
                    (t.child = r),
                    0 !== (1 & t.mode) && Xa(t, e.child, null, s),
                    (t.child.memoizedState = Fs(s)),
                    (t.memoizedState = zs),
                    o);
              if (0 === (1 & t.mode)) return Bs(e, t, s, null);
              if ("$!" === i.data) {
                if ((r = i.nextSibling && i.nextSibling.dataset))
                  var l = r.dgst;
                return (
                  (r = l), Bs(e, t, s, (r = fs((o = Error(a(419))), r, void 0)))
                );
              }
              if (((l = 0 !== (s & e.childLanes)), xs || l)) {
                if (null !== (r = Tl)) {
                  switch (s & -s) {
                    case 4:
                      i = 2;
                      break;
                    case 16:
                      i = 8;
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
                      i = 32;
                      break;
                    case 536870912:
                      i = 268435456;
                      break;
                    default:
                      i = 0;
                  }
                  0 !== (i = 0 !== (i & (r.suspendedLanes | s)) ? 0 : i) &&
                    i !== o.retryLane &&
                    ((o.retryLane = i), Oa(e, i), ru(r, e, i, -1));
                }
                return gu(), Bs(e, t, s, (r = fs(Error(a(421)))));
              }
              return "$?" === i.data
                ? ((t.flags |= 128),
                  (t.child = e.child),
                  (t = Pu.bind(null, e)),
                  (i._reactRetry = t),
                  null)
                : ((e = o.treeContext),
                  (ra = ui(i.nextSibling)),
                  (na = t),
                  (ia = !0),
                  (aa = null),
                  null !== e &&
                    ((qi[Ki++] = Xi),
                    (qi[Ki++] = Gi),
                    (qi[Ki++] = Qi),
                    (Xi = e.id),
                    (Gi = e.overflow),
                    (Qi = t)),
                  (t = js(t, r.children)),
                  (t.flags |= 4096),
                  t);
            })(e, t, l, i, r, o, n);
          if (s) {
            (s = i.fallback), (l = t.mode), (r = (o = e.child).sibling);
            var u = { mode: "hidden", children: i.children };
            return (
              0 === (1 & l) && t.child !== o
                ? (((i = t.child).childLanes = 0),
                  (i.pendingProps = u),
                  (t.deletions = null))
                : ((i = Au(o, u)).subtreeFlags = 14680064 & o.subtreeFlags),
              null !== r
                ? (s = Au(r, s))
                : ((s = zu(s, l, n, null)).flags |= 2),
              (s.return = t),
              (i.return = t),
              (i.sibling = s),
              (t.child = i),
              (i = s),
              (s = t.child),
              (l =
                null === (l = e.child.memoizedState)
                  ? Fs(n)
                  : {
                      baseLanes: l.baseLanes | n,
                      cachePool: null,
                      transitions: l.transitions,
                    }),
              (s.memoizedState = l),
              (s.childLanes = e.childLanes & ~n),
              (t.memoizedState = zs),
              i
            );
          }
          return (
            (e = (s = e.child).sibling),
            (i = Au(s, { mode: "visible", children: i.children })),
            0 === (1 & t.mode) && (i.lanes = n),
            (i.return = t),
            (i.sibling = null),
            null !== e &&
              (null === (n = t.deletions)
                ? ((t.deletions = [e]), (t.flags |= 16))
                : n.push(e)),
            (t.child = i),
            (t.memoizedState = null),
            i
          );
        }
        function js(e, t) {
          return (
            ((t = Fu(
              { mode: "visible", children: t },
              e.mode,
              0,
              null
            )).return = e),
            (e.child = t)
          );
        }
        function Bs(e, t, n, r) {
          return (
            null !== r && pa(r),
            Xa(t, e.child, null, n),
            ((e = js(t, t.pendingProps.children)).flags |= 2),
            (t.memoizedState = null),
            e
          );
        }
        function Vs(e, t, n) {
          e.lanes |= t;
          var r = e.alternate;
          null !== r && (r.lanes |= t), wa(e.return, t, n);
        }
        function Ws(e, t, n, r, i) {
          var a = e.memoizedState;
          null === a
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: i,
              })
            : ((a.isBackwards = t),
              (a.rendering = null),
              (a.renderingStartTime = 0),
              (a.last = r),
              (a.tail = n),
              (a.tailMode = i));
        }
        function Hs(e, t, n) {
          var r = t.pendingProps,
            i = r.revealOrder,
            a = r.tail;
          if ((ks(e, t, r.children, n), 0 !== (2 & (r = so.current))))
            (r = (1 & r) | 2), (t.flags |= 128);
          else {
            if (null !== e && 0 !== (128 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && Vs(e, n, t);
                else if (19 === e.tag) Vs(e, n, t);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            r &= 1;
          }
          if ((Mi(so, r), 0 === (1 & t.mode))) t.memoizedState = null;
          else
            switch (i) {
              case "forwards":
                for (n = t.child, i = null; null !== n; )
                  null !== (e = n.alternate) && null === lo(e) && (i = n),
                    (n = n.sibling);
                null === (n = i)
                  ? ((i = t.child), (t.child = null))
                  : ((i = n.sibling), (n.sibling = null)),
                  Ws(t, !1, i, n, a);
                break;
              case "backwards":
                for (n = null, i = t.child, t.child = null; null !== i; ) {
                  if (null !== (e = i.alternate) && null === lo(e)) {
                    t.child = i;
                    break;
                  }
                  (e = i.sibling), (i.sibling = n), (n = i), (i = e);
                }
                Ws(t, !0, n, null, a);
                break;
              case "together":
                Ws(t, !1, null, null, void 0);
                break;
              default:
                t.memoizedState = null;
            }
          return t.child;
        }
        function Us(e, t) {
          0 === (1 & t.mode) &&
            null !== e &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
        }
        function $s(e, t, n) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (Fl |= t.lanes),
            0 === (n & t.childLanes))
          )
            return null;
          if (null !== e && t.child !== e.child) throw Error(a(153));
          if (null !== t.child) {
            for (
              n = Au((e = t.child), e.pendingProps), t.child = n, n.return = t;
              null !== e.sibling;

            )
              (e = e.sibling),
                ((n = n.sibling = Au(e, e.pendingProps)).return = t);
            n.sibling = null;
          }
          return t.child;
        }
        function Ys(e, t) {
          if (!ia)
            switch (e.tailMode) {
              case "hidden":
                t = e.tail;
                for (var n = null; null !== t; )
                  null !== t.alternate && (n = t), (t = t.sibling);
                null === n ? (e.tail = null) : (n.sibling = null);
                break;
              case "collapsed":
                n = e.tail;
                for (var r = null; null !== n; )
                  null !== n.alternate && (r = n), (n = n.sibling);
                null === r
                  ? t || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (r.sibling = null);
            }
        }
        function qs(e) {
          var t = null !== e.alternate && e.alternate.child === e.child,
            n = 0,
            r = 0;
          if (t)
            for (var i = e.child; null !== i; )
              (n |= i.lanes | i.childLanes),
                (r |= 14680064 & i.subtreeFlags),
                (r |= 14680064 & i.flags),
                (i.return = e),
                (i = i.sibling);
          else
            for (i = e.child; null !== i; )
              (n |= i.lanes | i.childLanes),
                (r |= i.subtreeFlags),
                (r |= i.flags),
                (i.return = e),
                (i = i.sibling);
          return (e.subtreeFlags |= r), (e.childLanes = n), t;
        }
        function Ks(e, t, n) {
          var r = t.pendingProps;
          switch ((ta(t), t.tag)) {
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
              return qs(t), null;
            case 1:
            case 17:
              return Li(t.type) && Ri(), qs(t), null;
            case 3:
              return (
                (r = t.stateNode),
                io(),
                Ei(Oi),
                Ei(Pi),
                co(),
                r.pendingContext &&
                  ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (fa(t)
                    ? (t.flags |= 4)
                    : null === e ||
                      (e.memoizedState.isDehydrated && 0 === (256 & t.flags)) ||
                      ((t.flags |= 1024),
                      null !== aa && (su(aa), (aa = null)))),
                Rs(e, t),
                qs(t),
                null
              );
            case 5:
              oo(t);
              var i = no(to.current);
              if (((n = t.type), null !== e && null != t.stateNode))
                As(e, t, n, r, i),
                  e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(a(166));
                  return qs(t), null;
                }
                if (((e = no(Za.current)), fa(t))) {
                  (r = t.stateNode), (n = t.type);
                  var o = t.memoizedProps;
                  switch (
                    ((r[hi] = t), (r[di] = o), (e = 0 !== (1 & t.mode)), n)
                  ) {
                    case "dialog":
                      jr("cancel", r), jr("close", r);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      jr("load", r);
                      break;
                    case "video":
                    case "audio":
                      for (i = 0; i < Nr.length; i++) jr(Nr[i], r);
                      break;
                    case "source":
                      jr("error", r);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      jr("error", r), jr("load", r);
                      break;
                    case "details":
                      jr("toggle", r);
                      break;
                    case "input":
                      X(r, o), jr("invalid", r);
                      break;
                    case "select":
                      (r._wrapperState = { wasMultiple: !!o.multiple }),
                        jr("invalid", r);
                      break;
                    case "textarea":
                      ie(r, o), jr("invalid", r);
                  }
                  for (var l in (ye(n, o), (i = null), o))
                    if (o.hasOwnProperty(l)) {
                      var u = o[l];
                      "children" === l
                        ? "string" === typeof u
                          ? r.textContent !== u &&
                            (!0 !== o.suppressHydrationWarning &&
                              Jr(r.textContent, u, e),
                            (i = ["children", u]))
                          : "number" === typeof u &&
                            r.textContent !== "" + u &&
                            (!0 !== o.suppressHydrationWarning &&
                              Jr(r.textContent, u, e),
                            (i = ["children", "" + u]))
                        : s.hasOwnProperty(l) &&
                          null != u &&
                          "onScroll" === l &&
                          jr("scroll", r);
                    }
                  switch (n) {
                    case "input":
                      Y(r), Z(r, o, !0);
                      break;
                    case "textarea":
                      Y(r), oe(r);
                      break;
                    case "select":
                    case "option":
                      break;
                    default:
                      "function" === typeof o.onClick && (r.onclick = Zr);
                  }
                  (r = i), (t.updateQueue = r), null !== r && (t.flags |= 4);
                } else {
                  (l = 9 === i.nodeType ? i : i.ownerDocument),
                    "http://www.w3.org/1999/xhtml" === e && (e = se(n)),
                    "http://www.w3.org/1999/xhtml" === e
                      ? "script" === n
                        ? (((e = l.createElement("div")).innerHTML =
                            "<script></script>"),
                          (e = e.removeChild(e.firstChild)))
                        : "string" === typeof r.is
                        ? (e = l.createElement(n, { is: r.is }))
                        : ((e = l.createElement(n)),
                          "select" === n &&
                            ((l = e),
                            r.multiple
                              ? (l.multiple = !0)
                              : r.size && (l.size = r.size)))
                      : (e = l.createElementNS(e, n)),
                    (e[hi] = t),
                    (e[di] = r),
                    Ls(e, t, !1, !1),
                    (t.stateNode = e);
                  e: {
                    switch (((l = be(n, r)), n)) {
                      case "dialog":
                        jr("cancel", e), jr("close", e), (i = r);
                        break;
                      case "iframe":
                      case "object":
                      case "embed":
                        jr("load", e), (i = r);
                        break;
                      case "video":
                      case "audio":
                        for (i = 0; i < Nr.length; i++) jr(Nr[i], e);
                        i = r;
                        break;
                      case "source":
                        jr("error", e), (i = r);
                        break;
                      case "img":
                      case "image":
                      case "link":
                        jr("error", e), jr("load", e), (i = r);
                        break;
                      case "details":
                        jr("toggle", e), (i = r);
                        break;
                      case "input":
                        X(e, r), (i = Q(e, r)), jr("invalid", e);
                        break;
                      case "option":
                      default:
                        i = r;
                        break;
                      case "select":
                        (e._wrapperState = { wasMultiple: !!r.multiple }),
                          (i = F({}, r, { value: void 0 })),
                          jr("invalid", e);
                        break;
                      case "textarea":
                        ie(e, r), (i = re(e, r)), jr("invalid", e);
                    }
                    for (o in (ye(n, i), (u = i)))
                      if (u.hasOwnProperty(o)) {
                        var c = u[o];
                        "style" === o
                          ? ge(e, c)
                          : "dangerouslySetInnerHTML" === o
                          ? null != (c = c ? c.__html : void 0) && fe(e, c)
                          : "children" === o
                          ? "string" === typeof c
                            ? ("textarea" !== n || "" !== c) && he(e, c)
                            : "number" === typeof c && he(e, "" + c)
                          : "suppressContentEditableWarning" !== o &&
                            "suppressHydrationWarning" !== o &&
                            "autoFocus" !== o &&
                            (s.hasOwnProperty(o)
                              ? null != c && "onScroll" === o && jr("scroll", e)
                              : null != c && b(e, o, c, l));
                      }
                    switch (n) {
                      case "input":
                        Y(e), Z(e, r, !1);
                        break;
                      case "textarea":
                        Y(e), oe(e);
                        break;
                      case "option":
                        null != r.value &&
                          e.setAttribute("value", "" + U(r.value));
                        break;
                      case "select":
                        (e.multiple = !!r.multiple),
                          null != (o = r.value)
                            ? ne(e, !!r.multiple, o, !1)
                            : null != r.defaultValue &&
                              ne(e, !!r.multiple, r.defaultValue, !0);
                        break;
                      default:
                        "function" === typeof i.onClick && (e.onclick = Zr);
                    }
                    switch (n) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        r = !!r.autoFocus;
                        break e;
                      case "img":
                        r = !0;
                        break e;
                      default:
                        r = !1;
                    }
                  }
                  r && (t.flags |= 4);
                }
                null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              }
              return qs(t), null;
            case 6:
              if (e && null != t.stateNode) Ns(e, t, e.memoizedProps, r);
              else {
                if ("string" !== typeof r && null === t.stateNode)
                  throw Error(a(166));
                if (((n = no(to.current)), no(Za.current), fa(t))) {
                  if (
                    ((r = t.stateNode),
                    (n = t.memoizedProps),
                    (r[hi] = t),
                    (o = r.nodeValue !== n) && null !== (e = na))
                  )
                    switch (e.tag) {
                      case 3:
                        Jr(r.nodeValue, n, 0 !== (1 & e.mode));
                        break;
                      case 5:
                        !0 !== e.memoizedProps.suppressHydrationWarning &&
                          Jr(r.nodeValue, n, 0 !== (1 & e.mode));
                    }
                  o && (t.flags |= 4);
                } else
                  ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(
                    r
                  ))[hi] = t),
                    (t.stateNode = r);
              }
              return qs(t), null;
            case 13:
              if (
                (Ei(so),
                (r = t.memoizedState),
                null === e ||
                  (null !== e.memoizedState &&
                    null !== e.memoizedState.dehydrated))
              ) {
                if (
                  ia &&
                  null !== ra &&
                  0 !== (1 & t.mode) &&
                  0 === (128 & t.flags)
                )
                  ha(), da(), (t.flags |= 98560), (o = !1);
                else if (((o = fa(t)), null !== r && null !== r.dehydrated)) {
                  if (null === e) {
                    if (!o) throw Error(a(318));
                    if (
                      !(o =
                        null !== (o = t.memoizedState) ? o.dehydrated : null)
                    )
                      throw Error(a(317));
                    o[hi] = t;
                  } else
                    da(),
                      0 === (128 & t.flags) && (t.memoizedState = null),
                      (t.flags |= 4);
                  qs(t), (o = !1);
                } else null !== aa && (su(aa), (aa = null)), (o = !0);
                if (!o) return 65536 & t.flags ? t : null;
              }
              return 0 !== (128 & t.flags)
                ? ((t.lanes = n), t)
                : ((r = null !== r) !==
                    (null !== e && null !== e.memoizedState) &&
                    r &&
                    ((t.child.flags |= 8192),
                    0 !== (1 & t.mode) &&
                      (null === e || 0 !== (1 & so.current)
                        ? 0 === Nl && (Nl = 3)
                        : gu())),
                  null !== t.updateQueue && (t.flags |= 4),
                  qs(t),
                  null);
            case 4:
              return (
                io(),
                Rs(e, t),
                null === e && Wr(t.stateNode.containerInfo),
                qs(t),
                null
              );
            case 10:
              return _a(t.type._context), qs(t), null;
            case 19:
              if ((Ei(so), null === (o = t.memoizedState))) return qs(t), null;
              if (((r = 0 !== (128 & t.flags)), null === (l = o.rendering)))
                if (r) Ys(o, !1);
                else {
                  if (0 !== Nl || (null !== e && 0 !== (128 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (l = lo(e))) {
                        for (
                          t.flags |= 128,
                            Ys(o, !1),
                            null !== (r = l.updateQueue) &&
                              ((t.updateQueue = r), (t.flags |= 4)),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child;
                          null !== n;

                        )
                          (e = r),
                            ((o = n).flags &= 14680066),
                            null === (l = o.alternate)
                              ? ((o.childLanes = 0),
                                (o.lanes = e),
                                (o.child = null),
                                (o.subtreeFlags = 0),
                                (o.memoizedProps = null),
                                (o.memoizedState = null),
                                (o.updateQueue = null),
                                (o.dependencies = null),
                                (o.stateNode = null))
                              : ((o.childLanes = l.childLanes),
                                (o.lanes = l.lanes),
                                (o.child = l.child),
                                (o.subtreeFlags = 0),
                                (o.deletions = null),
                                (o.memoizedProps = l.memoizedProps),
                                (o.memoizedState = l.memoizedState),
                                (o.updateQueue = l.updateQueue),
                                (o.type = l.type),
                                (e = l.dependencies),
                                (o.dependencies =
                                  null === e
                                    ? null
                                    : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext,
                                      })),
                            (n = n.sibling);
                        return Mi(so, (1 & so.current) | 2), t.child;
                      }
                      e = e.sibling;
                    }
                  null !== o.tail &&
                    Ge() > Hl &&
                    ((t.flags |= 128),
                    (r = !0),
                    Ys(o, !1),
                    (t.lanes = 4194304));
                }
              else {
                if (!r)
                  if (null !== (e = lo(l))) {
                    if (
                      ((t.flags |= 128),
                      (r = !0),
                      null !== (n = e.updateQueue) &&
                        ((t.updateQueue = n), (t.flags |= 4)),
                      Ys(o, !0),
                      null === o.tail &&
                        "hidden" === o.tailMode &&
                        !l.alternate &&
                        !ia)
                    )
                      return qs(t), null;
                  } else
                    2 * Ge() - o.renderingStartTime > Hl &&
                      1073741824 !== n &&
                      ((t.flags |= 128),
                      (r = !0),
                      Ys(o, !1),
                      (t.lanes = 4194304));
                o.isBackwards
                  ? ((l.sibling = t.child), (t.child = l))
                  : (null !== (n = o.last) ? (n.sibling = l) : (t.child = l),
                    (o.last = l));
              }
              return null !== o.tail
                ? ((t = o.tail),
                  (o.rendering = t),
                  (o.tail = t.sibling),
                  (o.renderingStartTime = Ge()),
                  (t.sibling = null),
                  (n = so.current),
                  Mi(so, r ? (1 & n) | 2 : 1 & n),
                  t)
                : (qs(t), null);
            case 22:
            case 23:
              return (
                hu(),
                (r = null !== t.memoizedState),
                null !== e &&
                  (null !== e.memoizedState) !== r &&
                  (t.flags |= 8192),
                r && 0 !== (1 & t.mode)
                  ? 0 !== (1073741824 & Rl) &&
                    (qs(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                  : qs(t),
                null
              );
            case 24:
            case 25:
              return null;
          }
          throw Error(a(156, t.tag));
        }
        function Qs(e, t) {
          switch ((ta(t), t.tag)) {
            case 1:
              return (
                Li(t.type) && Ri(),
                65536 & (e = t.flags)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 3:
              return (
                io(),
                Ei(Oi),
                Ei(Pi),
                co(),
                0 !== (65536 & (e = t.flags)) && 0 === (128 & e)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 5:
              return oo(t), null;
            case 13:
              if (
                (Ei(so),
                null !== (e = t.memoizedState) && null !== e.dehydrated)
              ) {
                if (null === t.alternate) throw Error(a(340));
                da();
              }
              return 65536 & (e = t.flags)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null;
            case 19:
              return Ei(so), null;
            case 4:
              return io(), null;
            case 10:
              return _a(t.type._context), null;
            case 22:
            case 23:
              return hu(), null;
            default:
              return null;
          }
        }
        (Ls = function (e, t) {
          for (var n = t.child; null !== n; ) {
            if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === t) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === t) return;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
        }),
          (Rs = function () {}),
          (As = function (e, t, n, r) {
            var i = e.memoizedProps;
            if (i !== r) {
              (e = t.stateNode), no(Za.current);
              var a,
                o = null;
              switch (n) {
                case "input":
                  (i = Q(e, i)), (r = Q(e, r)), (o = []);
                  break;
                case "select":
                  (i = F({}, i, { value: void 0 })),
                    (r = F({}, r, { value: void 0 })),
                    (o = []);
                  break;
                case "textarea":
                  (i = re(e, i)), (r = re(e, r)), (o = []);
                  break;
                default:
                  "function" !== typeof i.onClick &&
                    "function" === typeof r.onClick &&
                    (e.onclick = Zr);
              }
              for (c in (ye(n, r), (n = null), i))
                if (!r.hasOwnProperty(c) && i.hasOwnProperty(c) && null != i[c])
                  if ("style" === c) {
                    var l = i[c];
                    for (a in l)
                      l.hasOwnProperty(a) && (n || (n = {}), (n[a] = ""));
                  } else
                    "dangerouslySetInnerHTML" !== c &&
                      "children" !== c &&
                      "suppressContentEditableWarning" !== c &&
                      "suppressHydrationWarning" !== c &&
                      "autoFocus" !== c &&
                      (s.hasOwnProperty(c)
                        ? o || (o = [])
                        : (o = o || []).push(c, null));
              for (c in r) {
                var u = r[c];
                if (
                  ((l = null != i ? i[c] : void 0),
                  r.hasOwnProperty(c) && u !== l && (null != u || null != l))
                )
                  if ("style" === c)
                    if (l) {
                      for (a in l)
                        !l.hasOwnProperty(a) ||
                          (u && u.hasOwnProperty(a)) ||
                          (n || (n = {}), (n[a] = ""));
                      for (a in u)
                        u.hasOwnProperty(a) &&
                          l[a] !== u[a] &&
                          (n || (n = {}), (n[a] = u[a]));
                    } else n || (o || (o = []), o.push(c, n)), (n = u);
                  else
                    "dangerouslySetInnerHTML" === c
                      ? ((u = u ? u.__html : void 0),
                        (l = l ? l.__html : void 0),
                        null != u && l !== u && (o = o || []).push(c, u))
                      : "children" === c
                      ? ("string" !== typeof u && "number" !== typeof u) ||
                        (o = o || []).push(c, "" + u)
                      : "suppressContentEditableWarning" !== c &&
                        "suppressHydrationWarning" !== c &&
                        (s.hasOwnProperty(c)
                          ? (null != u && "onScroll" === c && jr("scroll", e),
                            o || l === u || (o = []))
                          : (o = o || []).push(c, u));
              }
              n && (o = o || []).push("style", n);
              var c = o;
              (t.updateQueue = c) && (t.flags |= 4);
            }
          }),
          (Ns = function (e, t, n, r) {
            n !== r && (t.flags |= 4);
          });
        var Xs = !1,
          Gs = !1,
          Js = "function" === typeof WeakSet ? WeakSet : Set,
          Zs = null;
        function el(e, t) {
          var n = e.ref;
          if (null !== n)
            if ("function" === typeof n)
              try {
                n(null);
              } catch (r) {
                Eu(e, t, r);
              }
            else n.current = null;
        }
        function tl(e, t, n) {
          try {
            n();
          } catch (r) {
            Eu(e, t, r);
          }
        }
        var nl = !1;
        function rl(e, t, n) {
          var r = t.updateQueue;
          if (null !== (r = null !== r ? r.lastEffect : null)) {
            var i = (r = r.next);
            do {
              if ((i.tag & e) === e) {
                var a = i.destroy;
                (i.destroy = void 0), void 0 !== a && tl(t, n, a);
              }
              i = i.next;
            } while (i !== r);
          }
        }
        function il(e, t) {
          if (
            null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)
          ) {
            var n = (t = t.next);
            do {
              if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r();
              }
              n = n.next;
            } while (n !== t);
          }
        }
        function al(e) {
          var t = e.ref;
          if (null !== t) {
            var n = e.stateNode;
            e.tag, (e = n), "function" === typeof t ? t(e) : (t.current = e);
          }
        }
        function ol(e) {
          var t = e.alternate;
          null !== t && ((e.alternate = null), ol(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            5 === e.tag &&
              null !== (t = e.stateNode) &&
              (delete t[hi],
              delete t[di],
              delete t[vi],
              delete t[gi],
              delete t[mi]),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null);
        }
        function sl(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function ll(e) {
          e: for (;;) {
            for (; null === e.sibling; ) {
              if (null === e.return || sl(e.return)) return null;
              e = e.return;
            }
            for (
              e.sibling.return = e.return, e = e.sibling;
              5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

            ) {
              if (2 & e.flags) continue e;
              if (null === e.child || 4 === e.tag) continue e;
              (e.child.return = e), (e = e.child);
            }
            if (!(2 & e.flags)) return e.stateNode;
          }
        }
        function ul(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode),
              t
                ? 8 === n.nodeType
                  ? n.parentNode.insertBefore(e, t)
                  : n.insertBefore(e, t)
                : (8 === n.nodeType
                    ? (t = n.parentNode).insertBefore(e, n)
                    : (t = n).appendChild(e),
                  (null !== (n = n._reactRootContainer) && void 0 !== n) ||
                    null !== t.onclick ||
                    (t.onclick = Zr));
          else if (4 !== r && null !== (e = e.child))
            for (ul(e, t, n), e = e.sibling; null !== e; )
              ul(e, t, n), (e = e.sibling);
        }
        function cl(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
          else if (4 !== r && null !== (e = e.child))
            for (cl(e, t, n), e = e.sibling; null !== e; )
              cl(e, t, n), (e = e.sibling);
        }
        var fl = null,
          hl = !1;
        function dl(e, t, n) {
          for (n = n.child; null !== n; ) pl(e, t, n), (n = n.sibling);
        }
        function pl(e, t, n) {
          if (at && "function" === typeof at.onCommitFiberUnmount)
            try {
              at.onCommitFiberUnmount(it, n);
            } catch (s) {}
          switch (n.tag) {
            case 5:
              Gs || el(n, t);
            case 6:
              var r = fl,
                i = hl;
              (fl = null),
                dl(e, t, n),
                (hl = i),
                null !== (fl = r) &&
                  (hl
                    ? ((e = fl),
                      (n = n.stateNode),
                      8 === e.nodeType
                        ? e.parentNode.removeChild(n)
                        : e.removeChild(n))
                    : fl.removeChild(n.stateNode));
              break;
            case 18:
              null !== fl &&
                (hl
                  ? ((e = fl),
                    (n = n.stateNode),
                    8 === e.nodeType
                      ? li(e.parentNode, n)
                      : 1 === e.nodeType && li(e, n),
                    Wt(e))
                  : li(fl, n.stateNode));
              break;
            case 4:
              (r = fl),
                (i = hl),
                (fl = n.stateNode.containerInfo),
                (hl = !0),
                dl(e, t, n),
                (fl = r),
                (hl = i);
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              if (
                !Gs &&
                null !== (r = n.updateQueue) &&
                null !== (r = r.lastEffect)
              ) {
                i = r = r.next;
                do {
                  var a = i,
                    o = a.destroy;
                  (a = a.tag),
                    void 0 !== o &&
                      (0 !== (2 & a) || 0 !== (4 & a)) &&
                      tl(n, t, o),
                    (i = i.next);
                } while (i !== r);
              }
              dl(e, t, n);
              break;
            case 1:
              if (
                !Gs &&
                (el(n, t),
                "function" === typeof (r = n.stateNode).componentWillUnmount)
              )
                try {
                  (r.props = n.memoizedProps),
                    (r.state = n.memoizedState),
                    r.componentWillUnmount();
                } catch (s) {
                  Eu(n, t, s);
                }
              dl(e, t, n);
              break;
            case 21:
              dl(e, t, n);
              break;
            case 22:
              1 & n.mode
                ? ((Gs = (r = Gs) || null !== n.memoizedState),
                  dl(e, t, n),
                  (Gs = r))
                : dl(e, t, n);
              break;
            default:
              dl(e, t, n);
          }
        }
        function vl(e) {
          var t = e.updateQueue;
          if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new Js()),
              t.forEach(function (t) {
                var r = Ou.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
              });
          }
        }
        function gl(e, t) {
          var n = t.deletions;
          if (null !== n)
            for (var r = 0; r < n.length; r++) {
              var i = n[r];
              try {
                var o = e,
                  s = t,
                  l = s;
                e: for (; null !== l; ) {
                  switch (l.tag) {
                    case 5:
                      (fl = l.stateNode), (hl = !1);
                      break e;
                    case 3:
                    case 4:
                      (fl = l.stateNode.containerInfo), (hl = !0);
                      break e;
                  }
                  l = l.return;
                }
                if (null === fl) throw Error(a(160));
                pl(o, s, i), (fl = null), (hl = !1);
                var u = i.alternate;
                null !== u && (u.return = null), (i.return = null);
              } catch (c) {
                Eu(i, t, c);
              }
            }
          if (12854 & t.subtreeFlags)
            for (t = t.child; null !== t; ) ml(t, e), (t = t.sibling);
        }
        function ml(e, t) {
          var n = e.alternate,
            r = e.flags;
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              if ((gl(t, e), yl(e), 4 & r)) {
                try {
                  rl(3, e, e.return), il(3, e);
                } catch (g) {
                  Eu(e, e.return, g);
                }
                try {
                  rl(5, e, e.return);
                } catch (g) {
                  Eu(e, e.return, g);
                }
              }
              break;
            case 1:
              gl(t, e), yl(e), 512 & r && null !== n && el(n, n.return);
              break;
            case 5:
              if (
                (gl(t, e),
                yl(e),
                512 & r && null !== n && el(n, n.return),
                32 & e.flags)
              ) {
                var i = e.stateNode;
                try {
                  he(i, "");
                } catch (g) {
                  Eu(e, e.return, g);
                }
              }
              if (4 & r && null != (i = e.stateNode)) {
                var o = e.memoizedProps,
                  s = null !== n ? n.memoizedProps : o,
                  l = e.type,
                  u = e.updateQueue;
                if (((e.updateQueue = null), null !== u))
                  try {
                    "input" === l &&
                      "radio" === o.type &&
                      null != o.name &&
                      G(i, o),
                      be(l, s);
                    var c = be(l, o);
                    for (s = 0; s < u.length; s += 2) {
                      var f = u[s],
                        h = u[s + 1];
                      "style" === f
                        ? ge(i, h)
                        : "dangerouslySetInnerHTML" === f
                        ? fe(i, h)
                        : "children" === f
                        ? he(i, h)
                        : b(i, f, h, c);
                    }
                    switch (l) {
                      case "input":
                        J(i, o);
                        break;
                      case "textarea":
                        ae(i, o);
                        break;
                      case "select":
                        var d = i._wrapperState.wasMultiple;
                        i._wrapperState.wasMultiple = !!o.multiple;
                        var p = o.value;
                        null != p
                          ? ne(i, !!o.multiple, p, !1)
                          : d !== !!o.multiple &&
                            (null != o.defaultValue
                              ? ne(i, !!o.multiple, o.defaultValue, !0)
                              : ne(i, !!o.multiple, o.multiple ? [] : "", !1));
                    }
                    i[di] = o;
                  } catch (g) {
                    Eu(e, e.return, g);
                  }
              }
              break;
            case 6:
              if ((gl(t, e), yl(e), 4 & r)) {
                if (null === e.stateNode) throw Error(a(162));
                (i = e.stateNode), (o = e.memoizedProps);
                try {
                  i.nodeValue = o;
                } catch (g) {
                  Eu(e, e.return, g);
                }
              }
              break;
            case 3:
              if (
                (gl(t, e),
                yl(e),
                4 & r && null !== n && n.memoizedState.isDehydrated)
              )
                try {
                  Wt(t.containerInfo);
                } catch (g) {
                  Eu(e, e.return, g);
                }
              break;
            case 4:
            default:
              gl(t, e), yl(e);
              break;
            case 13:
              gl(t, e),
                yl(e),
                8192 & (i = e.child).flags &&
                  ((o = null !== i.memoizedState),
                  (i.stateNode.isHidden = o),
                  !o ||
                    (null !== i.alternate &&
                      null !== i.alternate.memoizedState) ||
                    (Wl = Ge())),
                4 & r && vl(e);
              break;
            case 22:
              if (
                ((f = null !== n && null !== n.memoizedState),
                1 & e.mode
                  ? ((Gs = (c = Gs) || f), gl(t, e), (Gs = c))
                  : gl(t, e),
                yl(e),
                8192 & r)
              ) {
                if (
                  ((c = null !== e.memoizedState),
                  (e.stateNode.isHidden = c) && !f && 0 !== (1 & e.mode))
                )
                  for (Zs = e, f = e.child; null !== f; ) {
                    for (h = Zs = f; null !== Zs; ) {
                      switch (((p = (d = Zs).child), d.tag)) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                          rl(4, d, d.return);
                          break;
                        case 1:
                          el(d, d.return);
                          var v = d.stateNode;
                          if ("function" === typeof v.componentWillUnmount) {
                            (r = d), (n = d.return);
                            try {
                              (t = r),
                                (v.props = t.memoizedProps),
                                (v.state = t.memoizedState),
                                v.componentWillUnmount();
                            } catch (g) {
                              Eu(r, n, g);
                            }
                          }
                          break;
                        case 5:
                          el(d, d.return);
                          break;
                        case 22:
                          if (null !== d.memoizedState) {
                            _l(h);
                            continue;
                          }
                      }
                      null !== p ? ((p.return = d), (Zs = p)) : _l(h);
                    }
                    f = f.sibling;
                  }
                e: for (f = null, h = e; ; ) {
                  if (5 === h.tag) {
                    if (null === f) {
                      f = h;
                      try {
                        (i = h.stateNode),
                          c
                            ? "function" === typeof (o = i.style).setProperty
                              ? o.setProperty("display", "none", "important")
                              : (o.display = "none")
                            : ((l = h.stateNode),
                              (s =
                                void 0 !== (u = h.memoizedProps.style) &&
                                null !== u &&
                                u.hasOwnProperty("display")
                                  ? u.display
                                  : null),
                              (l.style.display = ve("display", s)));
                      } catch (g) {
                        Eu(e, e.return, g);
                      }
                    }
                  } else if (6 === h.tag) {
                    if (null === f)
                      try {
                        h.stateNode.nodeValue = c ? "" : h.memoizedProps;
                      } catch (g) {
                        Eu(e, e.return, g);
                      }
                  } else if (
                    ((22 !== h.tag && 23 !== h.tag) ||
                      null === h.memoizedState ||
                      h === e) &&
                    null !== h.child
                  ) {
                    (h.child.return = h), (h = h.child);
                    continue;
                  }
                  if (h === e) break e;
                  for (; null === h.sibling; ) {
                    if (null === h.return || h.return === e) break e;
                    f === h && (f = null), (h = h.return);
                  }
                  f === h && (f = null),
                    (h.sibling.return = h.return),
                    (h = h.sibling);
                }
              }
              break;
            case 19:
              gl(t, e), yl(e), 4 & r && vl(e);
            case 21:
          }
        }
        function yl(e) {
          var t = e.flags;
          if (2 & t) {
            try {
              e: {
                for (var n = e.return; null !== n; ) {
                  if (sl(n)) {
                    var r = n;
                    break e;
                  }
                  n = n.return;
                }
                throw Error(a(160));
              }
              switch (r.tag) {
                case 5:
                  var i = r.stateNode;
                  32 & r.flags && (he(i, ""), (r.flags &= -33)),
                    cl(e, ll(e), i);
                  break;
                case 3:
                case 4:
                  var o = r.stateNode.containerInfo;
                  ul(e, ll(e), o);
                  break;
                default:
                  throw Error(a(161));
              }
            } catch (s) {
              Eu(e, e.return, s);
            }
            e.flags &= -3;
          }
          4096 & t && (e.flags &= -4097);
        }
        function bl(e, t, n) {
          (Zs = e), xl(e, t, n);
        }
        function xl(e, t, n) {
          for (var r = 0 !== (1 & e.mode); null !== Zs; ) {
            var i = Zs,
              a = i.child;
            if (22 === i.tag && r) {
              var o = null !== i.memoizedState || Xs;
              if (!o) {
                var s = i.alternate,
                  l = (null !== s && null !== s.memoizedState) || Gs;
                s = Xs;
                var u = Gs;
                if (((Xs = o), (Gs = l) && !u))
                  for (Zs = i; null !== Zs; )
                    (l = (o = Zs).child),
                      22 === o.tag && null !== o.memoizedState
                        ? wl(i)
                        : null !== l
                        ? ((l.return = o), (Zs = l))
                        : wl(i);
                for (; null !== a; ) (Zs = a), xl(a, t, n), (a = a.sibling);
                (Zs = i), (Xs = s), (Gs = u);
              }
              kl(e);
            } else
              0 !== (8772 & i.subtreeFlags) && null !== a
                ? ((a.return = i), (Zs = a))
                : kl(e);
          }
        }
        function kl(e) {
          for (; null !== Zs; ) {
            var t = Zs;
            if (0 !== (8772 & t.flags)) {
              var n = t.alternate;
              try {
                if (0 !== (8772 & t.flags))
                  switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Gs || il(5, t);
                      break;
                    case 1:
                      var r = t.stateNode;
                      if (4 & t.flags && !Gs)
                        if (null === n) r.componentDidMount();
                        else {
                          var i =
                            t.elementType === t.type
                              ? n.memoizedProps
                              : ga(t.type, n.memoizedProps);
                          r.componentDidUpdate(
                            i,
                            n.memoizedState,
                            r.__reactInternalSnapshotBeforeUpdate
                          );
                        }
                      var o = t.updateQueue;
                      null !== o && Ia(t, o, r);
                      break;
                    case 3:
                      var s = t.updateQueue;
                      if (null !== s) {
                        if (((n = null), null !== t.child))
                          switch (t.child.tag) {
                            case 5:
                            case 1:
                              n = t.child.stateNode;
                          }
                        Ia(t, s, n);
                      }
                      break;
                    case 5:
                      var l = t.stateNode;
                      if (null === n && 4 & t.flags) {
                        n = l;
                        var u = t.memoizedProps;
                        switch (t.type) {
                          case "button":
                          case "input":
                          case "select":
                          case "textarea":
                            u.autoFocus && n.focus();
                            break;
                          case "img":
                            u.src && (n.src = u.src);
                        }
                      }
                      break;
                    case 6:
                    case 4:
                    case 12:
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                      break;
                    case 13:
                      if (null === t.memoizedState) {
                        var c = t.alternate;
                        if (null !== c) {
                          var f = c.memoizedState;
                          if (null !== f) {
                            var h = f.dehydrated;
                            null !== h && Wt(h);
                          }
                        }
                      }
                      break;
                    default:
                      throw Error(a(163));
                  }
                Gs || (512 & t.flags && al(t));
              } catch (d) {
                Eu(t, t.return, d);
              }
            }
            if (t === e) {
              Zs = null;
              break;
            }
            if (null !== (n = t.sibling)) {
              (n.return = t.return), (Zs = n);
              break;
            }
            Zs = t.return;
          }
        }
        function _l(e) {
          for (; null !== Zs; ) {
            var t = Zs;
            if (t === e) {
              Zs = null;
              break;
            }
            var n = t.sibling;
            if (null !== n) {
              (n.return = t.return), (Zs = n);
              break;
            }
            Zs = t.return;
          }
        }
        function wl(e) {
          for (; null !== Zs; ) {
            var t = Zs;
            try {
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  var n = t.return;
                  try {
                    il(4, t);
                  } catch (l) {
                    Eu(t, n, l);
                  }
                  break;
                case 1:
                  var r = t.stateNode;
                  if ("function" === typeof r.componentDidMount) {
                    var i = t.return;
                    try {
                      r.componentDidMount();
                    } catch (l) {
                      Eu(t, i, l);
                    }
                  }
                  var a = t.return;
                  try {
                    al(t);
                  } catch (l) {
                    Eu(t, a, l);
                  }
                  break;
                case 5:
                  var o = t.return;
                  try {
                    al(t);
                  } catch (l) {
                    Eu(t, o, l);
                  }
              }
            } catch (l) {
              Eu(t, t.return, l);
            }
            if (t === e) {
              Zs = null;
              break;
            }
            var s = t.sibling;
            if (null !== s) {
              (s.return = t.return), (Zs = s);
              break;
            }
            Zs = t.return;
          }
        }
        var Sl,
          El = Math.ceil,
          Ml = x.ReactCurrentDispatcher,
          Cl = x.ReactCurrentOwner,
          Pl = x.ReactCurrentBatchConfig,
          Ol = 0,
          Tl = null,
          Dl = null,
          Ll = 0,
          Rl = 0,
          Al = Si(0),
          Nl = 0,
          zl = null,
          Fl = 0,
          Il = 0,
          jl = 0,
          Bl = null,
          Vl = null,
          Wl = 0,
          Hl = 1 / 0,
          Ul = null,
          $l = !1,
          Yl = null,
          ql = null,
          Kl = !1,
          Ql = null,
          Xl = 0,
          Gl = 0,
          Jl = null,
          Zl = -1,
          eu = 0;
        function tu() {
          return 0 !== (6 & Ol) ? Ge() : -1 !== Zl ? Zl : (Zl = Ge());
        }
        function nu(e) {
          return 0 === (1 & e.mode)
            ? 1
            : 0 !== (2 & Ol) && 0 !== Ll
            ? Ll & -Ll
            : null !== va.transition
            ? (0 === eu && (eu = vt()), eu)
            : 0 !== (e = bt)
            ? e
            : (e = void 0 === (e = window.event) ? 16 : Xt(e.type));
        }
        function ru(e, t, n, r) {
          if (50 < Gl) throw ((Gl = 0), (Jl = null), Error(a(185)));
          mt(e, n, r),
            (0 !== (2 & Ol) && e === Tl) ||
              (e === Tl && (0 === (2 & Ol) && (Il |= n), 4 === Nl && lu(e, Ll)),
              iu(e, r),
              1 === n &&
                0 === Ol &&
                0 === (1 & t.mode) &&
                ((Hl = Ge() + 500), ji && Wi()));
        }
        function iu(e, t) {
          var n = e.callbackNode;
          !(function (e, t) {
            for (
              var n = e.suspendedLanes,
                r = e.pingedLanes,
                i = e.expirationTimes,
                a = e.pendingLanes;
              0 < a;

            ) {
              var o = 31 - ot(a),
                s = 1 << o,
                l = i[o];
              -1 === l
                ? (0 !== (s & n) && 0 === (s & r)) || (i[o] = dt(s, t))
                : l <= t && (e.expiredLanes |= s),
                (a &= ~s);
            }
          })(e, t);
          var r = ht(e, e === Tl ? Ll : 0);
          if (0 === r)
            null !== n && Ke(n),
              (e.callbackNode = null),
              (e.callbackPriority = 0);
          else if (((t = r & -r), e.callbackPriority !== t)) {
            if ((null != n && Ke(n), 1 === t))
              0 === e.tag
                ? (function (e) {
                    (ji = !0), Vi(e);
                  })(uu.bind(null, e))
                : Vi(uu.bind(null, e)),
                oi(function () {
                  0 === (6 & Ol) && Wi();
                }),
                (n = null);
            else {
              switch (xt(r)) {
                case 1:
                  n = Ze;
                  break;
                case 4:
                  n = et;
                  break;
                case 16:
                default:
                  n = tt;
                  break;
                case 536870912:
                  n = rt;
              }
              n = Tu(n, au.bind(null, e));
            }
            (e.callbackPriority = t), (e.callbackNode = n);
          }
        }
        function au(e, t) {
          if (((Zl = -1), (eu = 0), 0 !== (6 & Ol))) throw Error(a(327));
          var n = e.callbackNode;
          if (wu() && e.callbackNode !== n) return null;
          var r = ht(e, e === Tl ? Ll : 0);
          if (0 === r) return null;
          if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || t) t = mu(e, r);
          else {
            t = r;
            var i = Ol;
            Ol |= 2;
            var o = vu();
            for (
              (Tl === e && Ll === t) ||
              ((Ul = null), (Hl = Ge() + 500), du(e, t));
              ;

            )
              try {
                bu();
                break;
              } catch (l) {
                pu(e, l);
              }
            ka(),
              (Ml.current = o),
              (Ol = i),
              null !== Dl ? (t = 0) : ((Tl = null), (Ll = 0), (t = Nl));
          }
          if (0 !== t) {
            if (
              (2 === t && 0 !== (i = pt(e)) && ((r = i), (t = ou(e, i))),
              1 === t)
            )
              throw ((n = zl), du(e, 0), lu(e, r), iu(e, Ge()), n);
            if (6 === t) lu(e, r);
            else {
              if (
                ((i = e.current.alternate),
                0 === (30 & r) &&
                  !(function (e) {
                    for (var t = e; ; ) {
                      if (16384 & t.flags) {
                        var n = t.updateQueue;
                        if (null !== n && null !== (n = n.stores))
                          for (var r = 0; r < n.length; r++) {
                            var i = n[r],
                              a = i.getSnapshot;
                            i = i.value;
                            try {
                              if (!sr(a(), i)) return !1;
                            } catch (s) {
                              return !1;
                            }
                          }
                      }
                      if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
                        (n.return = t), (t = n);
                      else {
                        if (t === e) break;
                        for (; null === t.sibling; ) {
                          if (null === t.return || t.return === e) return !0;
                          t = t.return;
                        }
                        (t.sibling.return = t.return), (t = t.sibling);
                      }
                    }
                    return !0;
                  })(i) &&
                  (2 === (t = mu(e, r)) &&
                    0 !== (o = pt(e)) &&
                    ((r = o), (t = ou(e, o))),
                  1 === t))
              )
                throw ((n = zl), du(e, 0), lu(e, r), iu(e, Ge()), n);
              switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                  throw Error(a(345));
                case 2:
                case 5:
                  _u(e, Vl, Ul);
                  break;
                case 3:
                  if (
                    (lu(e, r),
                    (130023424 & r) === r && 10 < (t = Wl + 500 - Ge()))
                  ) {
                    if (0 !== ht(e, 0)) break;
                    if (((i = e.suspendedLanes) & r) !== r) {
                      tu(), (e.pingedLanes |= e.suspendedLanes & i);
                      break;
                    }
                    e.timeoutHandle = ri(_u.bind(null, e, Vl, Ul), t);
                    break;
                  }
                  _u(e, Vl, Ul);
                  break;
                case 4:
                  if ((lu(e, r), (4194240 & r) === r)) break;
                  for (t = e.eventTimes, i = -1; 0 < r; ) {
                    var s = 31 - ot(r);
                    (o = 1 << s), (s = t[s]) > i && (i = s), (r &= ~o);
                  }
                  if (
                    ((r = i),
                    10 <
                      (r =
                        (120 > (r = Ge() - r)
                          ? 120
                          : 480 > r
                          ? 480
                          : 1080 > r
                          ? 1080
                          : 1920 > r
                          ? 1920
                          : 3e3 > r
                          ? 3e3
                          : 4320 > r
                          ? 4320
                          : 1960 * El(r / 1960)) - r))
                  ) {
                    e.timeoutHandle = ri(_u.bind(null, e, Vl, Ul), r);
                    break;
                  }
                  _u(e, Vl, Ul);
                  break;
                default:
                  throw Error(a(329));
              }
            }
          }
          return iu(e, Ge()), e.callbackNode === n ? au.bind(null, e) : null;
        }
        function ou(e, t) {
          var n = Bl;
          return (
            e.current.memoizedState.isDehydrated && (du(e, t).flags |= 256),
            2 !== (e = mu(e, t)) && ((t = Vl), (Vl = n), null !== t && su(t)),
            e
          );
        }
        function su(e) {
          null === Vl ? (Vl = e) : Vl.push.apply(Vl, e);
        }
        function lu(e, t) {
          for (
            t &= ~jl,
              t &= ~Il,
              e.suspendedLanes |= t,
              e.pingedLanes &= ~t,
              e = e.expirationTimes;
            0 < t;

          ) {
            var n = 31 - ot(t),
              r = 1 << n;
            (e[n] = -1), (t &= ~r);
          }
        }
        function uu(e) {
          if (0 !== (6 & Ol)) throw Error(a(327));
          wu();
          var t = ht(e, 0);
          if (0 === (1 & t)) return iu(e, Ge()), null;
          var n = mu(e, t);
          if (0 !== e.tag && 2 === n) {
            var r = pt(e);
            0 !== r && ((t = r), (n = ou(e, r)));
          }
          if (1 === n) throw ((n = zl), du(e, 0), lu(e, t), iu(e, Ge()), n);
          if (6 === n) throw Error(a(345));
          return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            _u(e, Vl, Ul),
            iu(e, Ge()),
            null
          );
        }
        function cu(e, t) {
          var n = Ol;
          Ol |= 1;
          try {
            return e(t);
          } finally {
            0 === (Ol = n) && ((Hl = Ge() + 500), ji && Wi());
          }
        }
        function fu(e) {
          null !== Ql && 0 === Ql.tag && 0 === (6 & Ol) && wu();
          var t = Ol;
          Ol |= 1;
          var n = Pl.transition,
            r = bt;
          try {
            if (((Pl.transition = null), (bt = 1), e)) return e();
          } finally {
            (bt = r), (Pl.transition = n), 0 === (6 & (Ol = t)) && Wi();
          }
        }
        function hu() {
          (Rl = Al.current), Ei(Al);
        }
        function du(e, t) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var n = e.timeoutHandle;
          if ((-1 !== n && ((e.timeoutHandle = -1), ii(n)), null !== Dl))
            for (n = Dl.return; null !== n; ) {
              var r = n;
              switch ((ta(r), r.tag)) {
                case 1:
                  null !== (r = r.type.childContextTypes) &&
                    void 0 !== r &&
                    Ri();
                  break;
                case 3:
                  io(), Ei(Oi), Ei(Pi), co();
                  break;
                case 5:
                  oo(r);
                  break;
                case 4:
                  io();
                  break;
                case 13:
                case 19:
                  Ei(so);
                  break;
                case 10:
                  _a(r.type._context);
                  break;
                case 22:
                case 23:
                  hu();
              }
              n = n.return;
            }
          if (
            ((Tl = e),
            (Dl = e = Au(e.current, null)),
            (Ll = Rl = t),
            (Nl = 0),
            (zl = null),
            (jl = Il = Fl = 0),
            (Vl = Bl = null),
            null !== Ma)
          ) {
            for (t = 0; t < Ma.length; t++)
              if (null !== (r = (n = Ma[t]).interleaved)) {
                n.interleaved = null;
                var i = r.next,
                  a = n.pending;
                if (null !== a) {
                  var o = a.next;
                  (a.next = i), (r.next = o);
                }
                n.pending = r;
              }
            Ma = null;
          }
          return e;
        }
        function pu(e, t) {
          for (;;) {
            var n = Dl;
            try {
              if ((ka(), (fo.current = os), yo)) {
                for (var r = vo.memoizedState; null !== r; ) {
                  var i = r.queue;
                  null !== i && (i.pending = null), (r = r.next);
                }
                yo = !1;
              }
              if (
                ((po = 0),
                (mo = go = vo = null),
                (bo = !1),
                (xo = 0),
                (Cl.current = null),
                null === n || null === n.return)
              ) {
                (Nl = 1), (zl = t), (Dl = null);
                break;
              }
              e: {
                var o = e,
                  s = n.return,
                  l = n,
                  u = t;
                if (
                  ((t = Ll),
                  (l.flags |= 32768),
                  null !== u &&
                    "object" === typeof u &&
                    "function" === typeof u.then)
                ) {
                  var c = u,
                    f = l,
                    h = f.tag;
                  if (0 === (1 & f.mode) && (0 === h || 11 === h || 15 === h)) {
                    var d = f.alternate;
                    d
                      ? ((f.updateQueue = d.updateQueue),
                        (f.memoizedState = d.memoizedState),
                        (f.lanes = d.lanes))
                      : ((f.updateQueue = null), (f.memoizedState = null));
                  }
                  var p = ms(s);
                  if (null !== p) {
                    (p.flags &= -257),
                      ys(p, s, l, 0, t),
                      1 & p.mode && gs(o, c, t),
                      (u = c);
                    var v = (t = p).updateQueue;
                    if (null === v) {
                      var g = new Set();
                      g.add(u), (t.updateQueue = g);
                    } else v.add(u);
                    break e;
                  }
                  if (0 === (1 & t)) {
                    gs(o, c, t), gu();
                    break e;
                  }
                  u = Error(a(426));
                } else if (ia && 1 & l.mode) {
                  var m = ms(s);
                  if (null !== m) {
                    0 === (65536 & m.flags) && (m.flags |= 256),
                      ys(m, s, l, 0, t),
                      pa(cs(u, l));
                    break e;
                  }
                }
                (o = u = cs(u, l)),
                  4 !== Nl && (Nl = 2),
                  null === Bl ? (Bl = [o]) : Bl.push(o),
                  (o = s);
                do {
                  switch (o.tag) {
                    case 3:
                      (o.flags |= 65536),
                        (t &= -t),
                        (o.lanes |= t),
                        za(o, ps(0, u, t));
                      break e;
                    case 1:
                      l = u;
                      var y = o.type,
                        b = o.stateNode;
                      if (
                        0 === (128 & o.flags) &&
                        ("function" === typeof y.getDerivedStateFromError ||
                          (null !== b &&
                            "function" === typeof b.componentDidCatch &&
                            (null === ql || !ql.has(b))))
                      ) {
                        (o.flags |= 65536),
                          (t &= -t),
                          (o.lanes |= t),
                          za(o, vs(o, l, t));
                        break e;
                      }
                  }
                  o = o.return;
                } while (null !== o);
              }
              ku(n);
            } catch (x) {
              (t = x), Dl === n && null !== n && (Dl = n = n.return);
              continue;
            }
            break;
          }
        }
        function vu() {
          var e = Ml.current;
          return (Ml.current = os), null === e ? os : e;
        }
        function gu() {
          (0 !== Nl && 3 !== Nl && 2 !== Nl) || (Nl = 4),
            null === Tl ||
              (0 === (268435455 & Fl) && 0 === (268435455 & Il)) ||
              lu(Tl, Ll);
        }
        function mu(e, t) {
          var n = Ol;
          Ol |= 2;
          var r = vu();
          for ((Tl === e && Ll === t) || ((Ul = null), du(e, t)); ; )
            try {
              yu();
              break;
            } catch (i) {
              pu(e, i);
            }
          if ((ka(), (Ol = n), (Ml.current = r), null !== Dl))
            throw Error(a(261));
          return (Tl = null), (Ll = 0), Nl;
        }
        function yu() {
          for (; null !== Dl; ) xu(Dl);
        }
        function bu() {
          for (; null !== Dl && !Qe(); ) xu(Dl);
        }
        function xu(e) {
          var t = Sl(e.alternate, e, Rl);
          (e.memoizedProps = e.pendingProps),
            null === t ? ku(e) : (Dl = t),
            (Cl.current = null);
        }
        function ku(e) {
          var t = e;
          do {
            var n = t.alternate;
            if (((e = t.return), 0 === (32768 & t.flags))) {
              if (null !== (n = Ks(n, t, Rl))) return void (Dl = n);
            } else {
              if (null !== (n = Qs(n, t)))
                return (n.flags &= 32767), void (Dl = n);
              if (null === e) return (Nl = 6), void (Dl = null);
              (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            }
            if (null !== (t = t.sibling)) return void (Dl = t);
            Dl = t = e;
          } while (null !== t);
          0 === Nl && (Nl = 5);
        }
        function _u(e, t, n) {
          var r = bt,
            i = Pl.transition;
          try {
            (Pl.transition = null),
              (bt = 1),
              (function (e, t, n, r) {
                do {
                  wu();
                } while (null !== Ql);
                if (0 !== (6 & Ol)) throw Error(a(327));
                n = e.finishedWork;
                var i = e.finishedLanes;
                if (null === n) return null;
                if (
                  ((e.finishedWork = null),
                  (e.finishedLanes = 0),
                  n === e.current)
                )
                  throw Error(a(177));
                (e.callbackNode = null), (e.callbackPriority = 0);
                var o = n.lanes | n.childLanes;
                if (
                  ((function (e, t) {
                    var n = e.pendingLanes & ~t;
                    (e.pendingLanes = t),
                      (e.suspendedLanes = 0),
                      (e.pingedLanes = 0),
                      (e.expiredLanes &= t),
                      (e.mutableReadLanes &= t),
                      (e.entangledLanes &= t),
                      (t = e.entanglements);
                    var r = e.eventTimes;
                    for (e = e.expirationTimes; 0 < n; ) {
                      var i = 31 - ot(n),
                        a = 1 << i;
                      (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~a);
                    }
                  })(e, o),
                  e === Tl && ((Dl = Tl = null), (Ll = 0)),
                  (0 === (2064 & n.subtreeFlags) && 0 === (2064 & n.flags)) ||
                    Kl ||
                    ((Kl = !0),
                    Tu(tt, function () {
                      return wu(), null;
                    })),
                  (o = 0 !== (15990 & n.flags)),
                  0 !== (15990 & n.subtreeFlags) || o)
                ) {
                  (o = Pl.transition), (Pl.transition = null);
                  var s = bt;
                  bt = 1;
                  var l = Ol;
                  (Ol |= 4),
                    (Cl.current = null),
                    (function (e, t) {
                      if (((ei = Ut), dr((e = hr())))) {
                        if ("selectionStart" in e)
                          var n = {
                            start: e.selectionStart,
                            end: e.selectionEnd,
                          };
                        else
                          e: {
                            var r =
                              (n =
                                ((n = e.ownerDocument) && n.defaultView) ||
                                window).getSelection && n.getSelection();
                            if (r && 0 !== r.rangeCount) {
                              n = r.anchorNode;
                              var i = r.anchorOffset,
                                o = r.focusNode;
                              r = r.focusOffset;
                              try {
                                n.nodeType, o.nodeType;
                              } catch (k) {
                                n = null;
                                break e;
                              }
                              var s = 0,
                                l = -1,
                                u = -1,
                                c = 0,
                                f = 0,
                                h = e,
                                d = null;
                              t: for (;;) {
                                for (
                                  var p;
                                  h !== n ||
                                    (0 !== i && 3 !== h.nodeType) ||
                                    (l = s + i),
                                    h !== o ||
                                      (0 !== r && 3 !== h.nodeType) ||
                                      (u = s + r),
                                    3 === h.nodeType &&
                                      (s += h.nodeValue.length),
                                    null !== (p = h.firstChild);

                                )
                                  (d = h), (h = p);
                                for (;;) {
                                  if (h === e) break t;
                                  if (
                                    (d === n && ++c === i && (l = s),
                                    d === o && ++f === r && (u = s),
                                    null !== (p = h.nextSibling))
                                  )
                                    break;
                                  d = (h = d).parentNode;
                                }
                                h = p;
                              }
                              n =
                                -1 === l || -1 === u
                                  ? null
                                  : { start: l, end: u };
                            } else n = null;
                          }
                        n = n || { start: 0, end: 0 };
                      } else n = null;
                      for (
                        ti = { focusedElem: e, selectionRange: n },
                          Ut = !1,
                          Zs = t;
                        null !== Zs;

                      )
                        if (
                          ((e = (t = Zs).child),
                          0 !== (1028 & t.subtreeFlags) && null !== e)
                        )
                          (e.return = t), (Zs = e);
                        else
                          for (; null !== Zs; ) {
                            t = Zs;
                            try {
                              var v = t.alternate;
                              if (0 !== (1024 & t.flags))
                                switch (t.tag) {
                                  case 0:
                                  case 11:
                                  case 15:
                                  case 5:
                                  case 6:
                                  case 4:
                                  case 17:
                                    break;
                                  case 1:
                                    if (null !== v) {
                                      var g = v.memoizedProps,
                                        m = v.memoizedState,
                                        y = t.stateNode,
                                        b = y.getSnapshotBeforeUpdate(
                                          t.elementType === t.type
                                            ? g
                                            : ga(t.type, g),
                                          m
                                        );
                                      y.__reactInternalSnapshotBeforeUpdate = b;
                                    }
                                    break;
                                  case 3:
                                    var x = t.stateNode.containerInfo;
                                    1 === x.nodeType
                                      ? (x.textContent = "")
                                      : 9 === x.nodeType &&
                                        x.documentElement &&
                                        x.removeChild(x.documentElement);
                                    break;
                                  default:
                                    throw Error(a(163));
                                }
                            } catch (k) {
                              Eu(t, t.return, k);
                            }
                            if (null !== (e = t.sibling)) {
                              (e.return = t.return), (Zs = e);
                              break;
                            }
                            Zs = t.return;
                          }
                      (v = nl), (nl = !1);
                    })(e, n),
                    ml(n, e),
                    pr(ti),
                    (Ut = !!ei),
                    (ti = ei = null),
                    (e.current = n),
                    bl(n, e, i),
                    Xe(),
                    (Ol = l),
                    (bt = s),
                    (Pl.transition = o);
                } else e.current = n;
                if (
                  (Kl && ((Kl = !1), (Ql = e), (Xl = i)),
                  (o = e.pendingLanes),
                  0 === o && (ql = null),
                  (function (e) {
                    if (at && "function" === typeof at.onCommitFiberRoot)
                      try {
                        at.onCommitFiberRoot(
                          it,
                          e,
                          void 0,
                          128 === (128 & e.current.flags)
                        );
                      } catch (t) {}
                  })(n.stateNode),
                  iu(e, Ge()),
                  null !== t)
                )
                  for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                    (i = t[n]),
                      r(i.value, { componentStack: i.stack, digest: i.digest });
                if ($l) throw (($l = !1), (e = Yl), (Yl = null), e);
                0 !== (1 & Xl) && 0 !== e.tag && wu(),
                  (o = e.pendingLanes),
                  0 !== (1 & o)
                    ? e === Jl
                      ? Gl++
                      : ((Gl = 0), (Jl = e))
                    : (Gl = 0),
                  Wi();
              })(e, t, n, r);
          } finally {
            (Pl.transition = i), (bt = r);
          }
          return null;
        }
        function wu() {
          if (null !== Ql) {
            var e = xt(Xl),
              t = Pl.transition,
              n = bt;
            try {
              if (((Pl.transition = null), (bt = 16 > e ? 16 : e), null === Ql))
                var r = !1;
              else {
                if (((e = Ql), (Ql = null), (Xl = 0), 0 !== (6 & Ol)))
                  throw Error(a(331));
                var i = Ol;
                for (Ol |= 4, Zs = e.current; null !== Zs; ) {
                  var o = Zs,
                    s = o.child;
                  if (0 !== (16 & Zs.flags)) {
                    var l = o.deletions;
                    if (null !== l) {
                      for (var u = 0; u < l.length; u++) {
                        var c = l[u];
                        for (Zs = c; null !== Zs; ) {
                          var f = Zs;
                          switch (f.tag) {
                            case 0:
                            case 11:
                            case 15:
                              rl(8, f, o);
                          }
                          var h = f.child;
                          if (null !== h) (h.return = f), (Zs = h);
                          else
                            for (; null !== Zs; ) {
                              var d = (f = Zs).sibling,
                                p = f.return;
                              if ((ol(f), f === c)) {
                                Zs = null;
                                break;
                              }
                              if (null !== d) {
                                (d.return = p), (Zs = d);
                                break;
                              }
                              Zs = p;
                            }
                        }
                      }
                      var v = o.alternate;
                      if (null !== v) {
                        var g = v.child;
                        if (null !== g) {
                          v.child = null;
                          do {
                            var m = g.sibling;
                            (g.sibling = null), (g = m);
                          } while (null !== g);
                        }
                      }
                      Zs = o;
                    }
                  }
                  if (0 !== (2064 & o.subtreeFlags) && null !== s)
                    (s.return = o), (Zs = s);
                  else
                    e: for (; null !== Zs; ) {
                      if (0 !== (2048 & (o = Zs).flags))
                        switch (o.tag) {
                          case 0:
                          case 11:
                          case 15:
                            rl(9, o, o.return);
                        }
                      var y = o.sibling;
                      if (null !== y) {
                        (y.return = o.return), (Zs = y);
                        break e;
                      }
                      Zs = o.return;
                    }
                }
                var b = e.current;
                for (Zs = b; null !== Zs; ) {
                  var x = (s = Zs).child;
                  if (0 !== (2064 & s.subtreeFlags) && null !== x)
                    (x.return = s), (Zs = x);
                  else
                    e: for (s = b; null !== Zs; ) {
                      if (0 !== (2048 & (l = Zs).flags))
                        try {
                          switch (l.tag) {
                            case 0:
                            case 11:
                            case 15:
                              il(9, l);
                          }
                        } catch (_) {
                          Eu(l, l.return, _);
                        }
                      if (l === s) {
                        Zs = null;
                        break e;
                      }
                      var k = l.sibling;
                      if (null !== k) {
                        (k.return = l.return), (Zs = k);
                        break e;
                      }
                      Zs = l.return;
                    }
                }
                if (
                  ((Ol = i),
                  Wi(),
                  at && "function" === typeof at.onPostCommitFiberRoot)
                )
                  try {
                    at.onPostCommitFiberRoot(it, e);
                  } catch (_) {}
                r = !0;
              }
              return r;
            } finally {
              (bt = n), (Pl.transition = t);
            }
          }
          return !1;
        }
        function Su(e, t, n) {
          (e = Aa(e, (t = ps(0, (t = cs(n, t)), 1)), 1)),
            (t = tu()),
            null !== e && (mt(e, 1, t), iu(e, t));
        }
        function Eu(e, t, n) {
          if (3 === e.tag) Su(e, e, n);
          else
            for (; null !== t; ) {
              if (3 === t.tag) {
                Su(t, e, n);
                break;
              }
              if (1 === t.tag) {
                var r = t.stateNode;
                if (
                  "function" === typeof t.type.getDerivedStateFromError ||
                  ("function" === typeof r.componentDidCatch &&
                    (null === ql || !ql.has(r)))
                ) {
                  (t = Aa(t, (e = vs(t, (e = cs(n, e)), 1)), 1)),
                    (e = tu()),
                    null !== t && (mt(t, 1, e), iu(t, e));
                  break;
                }
              }
              t = t.return;
            }
        }
        function Mu(e, t, n) {
          var r = e.pingCache;
          null !== r && r.delete(t),
            (t = tu()),
            (e.pingedLanes |= e.suspendedLanes & n),
            Tl === e &&
              (Ll & n) === n &&
              (4 === Nl ||
              (3 === Nl && (130023424 & Ll) === Ll && 500 > Ge() - Wl)
                ? du(e, 0)
                : (jl |= n)),
            iu(e, t);
        }
        function Cu(e, t) {
          0 === t &&
            (0 === (1 & e.mode)
              ? (t = 1)
              : ((t = ct), 0 === (130023424 & (ct <<= 1)) && (ct = 4194304)));
          var n = tu();
          null !== (e = Oa(e, t)) && (mt(e, t, n), iu(e, n));
        }
        function Pu(e) {
          var t = e.memoizedState,
            n = 0;
          null !== t && (n = t.retryLane), Cu(e, n);
        }
        function Ou(e, t) {
          var n = 0;
          switch (e.tag) {
            case 13:
              var r = e.stateNode,
                i = e.memoizedState;
              null !== i && (n = i.retryLane);
              break;
            case 19:
              r = e.stateNode;
              break;
            default:
              throw Error(a(314));
          }
          null !== r && r.delete(t), Cu(e, n);
        }
        function Tu(e, t) {
          return qe(e, t);
        }
        function Du(e, t, n, r) {
          (this.tag = e),
            (this.key = n),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = t),
            (this.dependencies =
              this.memoizedState =
              this.updateQueue =
              this.memoizedProps =
                null),
            (this.mode = r),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
        }
        function Lu(e, t, n, r) {
          return new Du(e, t, n, r);
        }
        function Ru(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function Au(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = Lu(e.tag, t, e.key, e.mode)).elementType =
                  e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t),
                (n.type = e.type),
                (n.flags = 0),
                (n.subtreeFlags = 0),
                (n.deletions = null)),
            (n.flags = 14680064 & e.flags),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies =
              null === t
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            n
          );
        }
        function Nu(e, t, n, r, i, o) {
          var s = 2;
          if (((r = e), "function" === typeof e)) Ru(e) && (s = 1);
          else if ("string" === typeof e) s = 5;
          else
            e: switch (e) {
              case w:
                return zu(n.children, i, o, t);
              case S:
                (s = 8), (i |= 8);
                break;
              case E:
                return (
                  ((e = Lu(12, n, t, 2 | i)).elementType = E), (e.lanes = o), e
                );
              case O:
                return (
                  ((e = Lu(13, n, t, i)).elementType = O), (e.lanes = o), e
                );
              case T:
                return (
                  ((e = Lu(19, n, t, i)).elementType = T), (e.lanes = o), e
                );
              case R:
                return Fu(n, i, o, t);
              default:
                if ("object" === typeof e && null !== e)
                  switch (e.$$typeof) {
                    case M:
                      s = 10;
                      break e;
                    case C:
                      s = 9;
                      break e;
                    case P:
                      s = 11;
                      break e;
                    case D:
                      s = 14;
                      break e;
                    case L:
                      (s = 16), (r = null);
                      break e;
                  }
                throw Error(a(130, null == e ? e : typeof e, ""));
            }
          return (
            ((t = Lu(s, n, t, i)).elementType = e),
            (t.type = r),
            (t.lanes = o),
            t
          );
        }
        function zu(e, t, n, r) {
          return ((e = Lu(7, e, r, t)).lanes = n), e;
        }
        function Fu(e, t, n, r) {
          return (
            ((e = Lu(22, e, r, t)).elementType = R),
            (e.lanes = n),
            (e.stateNode = { isHidden: !1 }),
            e
          );
        }
        function Iu(e, t, n) {
          return ((e = Lu(6, e, null, t)).lanes = n), e;
        }
        function ju(e, t, n) {
          return (
            ((t = Lu(
              4,
              null !== e.children ? e.children : [],
              e.key,
              t
            )).lanes = n),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          );
        }
        function Bu(e, t, n, r, i) {
          (this.tag = t),
            (this.containerInfo = e),
            (this.finishedWork =
              this.pingCache =
              this.current =
              this.pendingChildren =
                null),
            (this.timeoutHandle = -1),
            (this.callbackNode = this.pendingContext = this.context = null),
            (this.callbackPriority = 0),
            (this.eventTimes = gt(0)),
            (this.expirationTimes = gt(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = gt(0)),
            (this.identifierPrefix = r),
            (this.onRecoverableError = i),
            (this.mutableSourceEagerHydrationData = null);
        }
        function Vu(e, t, n, r, i, a, o, s, l) {
          return (
            (e = new Bu(e, t, n, s, l)),
            1 === t ? ((t = 1), !0 === a && (t |= 8)) : (t = 0),
            (a = Lu(3, null, null, t)),
            (e.current = a),
            (a.stateNode = e),
            (a.memoizedState = {
              element: r,
              isDehydrated: n,
              cache: null,
              transitions: null,
              pendingSuspenseBoundaries: null,
            }),
            Da(a),
            e
          );
        }
        function Wu(e) {
          if (!e) return Ci;
          e: {
            if (We((e = e._reactInternals)) !== e || 1 !== e.tag)
              throw Error(a(170));
            var t = e;
            do {
              switch (t.tag) {
                case 3:
                  t = t.stateNode.context;
                  break e;
                case 1:
                  if (Li(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e;
                  }
              }
              t = t.return;
            } while (null !== t);
            throw Error(a(171));
          }
          if (1 === e.tag) {
            var n = e.type;
            if (Li(n)) return Ni(e, n, t);
          }
          return t;
        }
        function Hu(e, t, n, r, i, a, o, s, l) {
          return (
            ((e = Vu(n, r, !0, e, 0, a, 0, s, l)).context = Wu(null)),
            (n = e.current),
            ((a = Ra((r = tu()), (i = nu(n)))).callback =
              void 0 !== t && null !== t ? t : null),
            Aa(n, a, i),
            (e.current.lanes = i),
            mt(e, i, r),
            iu(e, r),
            e
          );
        }
        function Uu(e, t, n, r) {
          var i = t.current,
            a = tu(),
            o = nu(i);
          return (
            (n = Wu(n)),
            null === t.context ? (t.context = n) : (t.pendingContext = n),
            ((t = Ra(a, o)).payload = { element: e }),
            null !== (r = void 0 === r ? null : r) && (t.callback = r),
            null !== (e = Aa(i, t, o)) && (ru(e, i, o, a), Na(e, i, o)),
            o
          );
        }
        function $u(e) {
          return (e = e.current).child
            ? (e.child.tag, e.child.stateNode)
            : null;
        }
        function Yu(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function qu(e, t) {
          Yu(e, t), (e = e.alternate) && Yu(e, t);
        }
        Sl = function (e, t, n) {
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps || Oi.current) xs = !0;
            else {
              if (0 === (e.lanes & n) && 0 === (128 & t.flags))
                return (
                  (xs = !1),
                  (function (e, t, n) {
                    switch (t.tag) {
                      case 3:
                        Ts(t), da();
                        break;
                      case 5:
                        ao(t);
                        break;
                      case 1:
                        Li(t.type) && zi(t);
                        break;
                      case 4:
                        ro(t, t.stateNode.containerInfo);
                        break;
                      case 10:
                        var r = t.type._context,
                          i = t.memoizedProps.value;
                        Mi(ma, r._currentValue), (r._currentValue = i);
                        break;
                      case 13:
                        if (null !== (r = t.memoizedState))
                          return null !== r.dehydrated
                            ? (Mi(so, 1 & so.current), (t.flags |= 128), null)
                            : 0 !== (n & t.child.childLanes)
                            ? Is(e, t, n)
                            : (Mi(so, 1 & so.current),
                              null !== (e = $s(e, t, n)) ? e.sibling : null);
                        Mi(so, 1 & so.current);
                        break;
                      case 19:
                        if (
                          ((r = 0 !== (n & t.childLanes)),
                          0 !== (128 & e.flags))
                        ) {
                          if (r) return Hs(e, t, n);
                          t.flags |= 128;
                        }
                        if (
                          (null !== (i = t.memoizedState) &&
                            ((i.rendering = null),
                            (i.tail = null),
                            (i.lastEffect = null)),
                          Mi(so, so.current),
                          r)
                        )
                          break;
                        return null;
                      case 22:
                      case 23:
                        return (t.lanes = 0), Es(e, t, n);
                    }
                    return $s(e, t, n);
                  })(e, t, n)
                );
              xs = 0 !== (131072 & e.flags);
            }
          else (xs = !1), ia && 0 !== (1048576 & t.flags) && Zi(t, Yi, t.index);
          switch (((t.lanes = 0), t.tag)) {
            case 2:
              var r = t.type;
              Us(e, t), (e = t.pendingProps);
              var i = Di(t, Pi.current);
              Sa(t, n), (i = So(null, t, r, e, i, n));
              var o = Eo();
              return (
                (t.flags |= 1),
                "object" === typeof i &&
                null !== i &&
                "function" === typeof i.render &&
                void 0 === i.$$typeof
                  ? ((t.tag = 1),
                    (t.memoizedState = null),
                    (t.updateQueue = null),
                    Li(r) ? ((o = !0), zi(t)) : (o = !1),
                    (t.memoizedState =
                      null !== i.state && void 0 !== i.state ? i.state : null),
                    Da(t),
                    (i.updater = Va),
                    (t.stateNode = i),
                    (i._reactInternals = t),
                    $a(t, r, e, n),
                    (t = Os(null, t, r, !0, o, n)))
                  : ((t.tag = 0),
                    ia && o && ea(t),
                    ks(null, t, i, n),
                    (t = t.child)),
                t
              );
            case 16:
              r = t.elementType;
              e: {
                switch (
                  (Us(e, t),
                  (e = t.pendingProps),
                  (r = (i = r._init)(r._payload)),
                  (t.type = r),
                  (i = t.tag =
                    (function (e) {
                      if ("function" === typeof e) return Ru(e) ? 1 : 0;
                      if (void 0 !== e && null !== e) {
                        if ((e = e.$$typeof) === P) return 11;
                        if (e === D) return 14;
                      }
                      return 2;
                    })(r)),
                  (e = ga(r, e)),
                  i)
                ) {
                  case 0:
                    t = Cs(null, t, r, e, n);
                    break e;
                  case 1:
                    t = Ps(null, t, r, e, n);
                    break e;
                  case 11:
                    t = _s(null, t, r, e, n);
                    break e;
                  case 14:
                    t = ws(null, t, r, ga(r.type, e), n);
                    break e;
                }
                throw Error(a(306, r, ""));
              }
              return t;
            case 0:
              return (
                (r = t.type),
                (i = t.pendingProps),
                Cs(e, t, r, (i = t.elementType === r ? i : ga(r, i)), n)
              );
            case 1:
              return (
                (r = t.type),
                (i = t.pendingProps),
                Ps(e, t, r, (i = t.elementType === r ? i : ga(r, i)), n)
              );
            case 3:
              e: {
                if ((Ts(t), null === e)) throw Error(a(387));
                (r = t.pendingProps),
                  (i = (o = t.memoizedState).element),
                  La(e, t),
                  Fa(t, r, null, n);
                var s = t.memoizedState;
                if (((r = s.element), o.isDehydrated)) {
                  if (
                    ((o = {
                      element: r,
                      isDehydrated: !1,
                      cache: s.cache,
                      pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                      transitions: s.transitions,
                    }),
                    (t.updateQueue.baseState = o),
                    (t.memoizedState = o),
                    256 & t.flags)
                  ) {
                    t = Ds(e, t, r, n, (i = cs(Error(a(423)), t)));
                    break e;
                  }
                  if (r !== i) {
                    t = Ds(e, t, r, n, (i = cs(Error(a(424)), t)));
                    break e;
                  }
                  for (
                    ra = ui(t.stateNode.containerInfo.firstChild),
                      na = t,
                      ia = !0,
                      aa = null,
                      n = Ga(t, null, r, n),
                      t.child = n;
                    n;

                  )
                    (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
                } else {
                  if ((da(), r === i)) {
                    t = $s(e, t, n);
                    break e;
                  }
                  ks(e, t, r, n);
                }
                t = t.child;
              }
              return t;
            case 5:
              return (
                ao(t),
                null === e && ua(t),
                (r = t.type),
                (i = t.pendingProps),
                (o = null !== e ? e.memoizedProps : null),
                (s = i.children),
                ni(r, i)
                  ? (s = null)
                  : null !== o && ni(r, o) && (t.flags |= 32),
                Ms(e, t),
                ks(e, t, s, n),
                t.child
              );
            case 6:
              return null === e && ua(t), null;
            case 13:
              return Is(e, t, n);
            case 4:
              return (
                ro(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = Xa(t, null, r, n)) : ks(e, t, r, n),
                t.child
              );
            case 11:
              return (
                (r = t.type),
                (i = t.pendingProps),
                _s(e, t, r, (i = t.elementType === r ? i : ga(r, i)), n)
              );
            case 7:
              return ks(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
              return ks(e, t, t.pendingProps.children, n), t.child;
            case 10:
              e: {
                if (
                  ((r = t.type._context),
                  (i = t.pendingProps),
                  (o = t.memoizedProps),
                  (s = i.value),
                  Mi(ma, r._currentValue),
                  (r._currentValue = s),
                  null !== o)
                )
                  if (sr(o.value, s)) {
                    if (o.children === i.children && !Oi.current) {
                      t = $s(e, t, n);
                      break e;
                    }
                  } else
                    for (
                      null !== (o = t.child) && (o.return = t);
                      null !== o;

                    ) {
                      var l = o.dependencies;
                      if (null !== l) {
                        s = o.child;
                        for (var u = l.firstContext; null !== u; ) {
                          if (u.context === r) {
                            if (1 === o.tag) {
                              (u = Ra(-1, n & -n)).tag = 2;
                              var c = o.updateQueue;
                              if (null !== c) {
                                var f = (c = c.shared).pending;
                                null === f
                                  ? (u.next = u)
                                  : ((u.next = f.next), (f.next = u)),
                                  (c.pending = u);
                              }
                            }
                            (o.lanes |= n),
                              null !== (u = o.alternate) && (u.lanes |= n),
                              wa(o.return, n, t),
                              (l.lanes |= n);
                            break;
                          }
                          u = u.next;
                        }
                      } else if (10 === o.tag)
                        s = o.type === t.type ? null : o.child;
                      else if (18 === o.tag) {
                        if (null === (s = o.return)) throw Error(a(341));
                        (s.lanes |= n),
                          null !== (l = s.alternate) && (l.lanes |= n),
                          wa(s, n, t),
                          (s = o.sibling);
                      } else s = o.child;
                      if (null !== s) s.return = o;
                      else
                        for (s = o; null !== s; ) {
                          if (s === t) {
                            s = null;
                            break;
                          }
                          if (null !== (o = s.sibling)) {
                            (o.return = s.return), (s = o);
                            break;
                          }
                          s = s.return;
                        }
                      o = s;
                    }
                ks(e, t, i.children, n), (t = t.child);
              }
              return t;
            case 9:
              return (
                (i = t.type),
                (r = t.pendingProps.children),
                Sa(t, n),
                (r = r((i = Ea(i)))),
                (t.flags |= 1),
                ks(e, t, r, n),
                t.child
              );
            case 14:
              return (
                (i = ga((r = t.type), t.pendingProps)),
                ws(e, t, r, (i = ga(r.type, i)), n)
              );
            case 15:
              return Ss(e, t, t.type, t.pendingProps, n);
            case 17:
              return (
                (r = t.type),
                (i = t.pendingProps),
                (i = t.elementType === r ? i : ga(r, i)),
                Us(e, t),
                (t.tag = 1),
                Li(r) ? ((e = !0), zi(t)) : (e = !1),
                Sa(t, n),
                Ha(t, r, i),
                $a(t, r, i, n),
                Os(null, t, r, !0, e, n)
              );
            case 19:
              return Hs(e, t, n);
            case 22:
              return Es(e, t, n);
          }
          throw Error(a(156, t.tag));
        };
        var Ku =
          "function" === typeof reportError
            ? reportError
            : function (e) {
                console.error(e);
              };
        function Qu(e) {
          this._internalRoot = e;
        }
        function Xu(e) {
          this._internalRoot = e;
        }
        function Gu(e) {
          return !(
            !e ||
            (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
          );
        }
        function Ju(e) {
          return !(
            !e ||
            (1 !== e.nodeType &&
              9 !== e.nodeType &&
              11 !== e.nodeType &&
              (8 !== e.nodeType ||
                " react-mount-point-unstable " !== e.nodeValue))
          );
        }
        function Zu() {}
        function ec(e, t, n, r, i) {
          var a = n._reactRootContainer;
          if (a) {
            var o = a;
            if ("function" === typeof i) {
              var s = i;
              i = function () {
                var e = $u(o);
                s.call(e);
              };
            }
            Uu(t, o, e, i);
          } else
            o = (function (e, t, n, r, i) {
              if (i) {
                if ("function" === typeof r) {
                  var a = r;
                  r = function () {
                    var e = $u(o);
                    a.call(e);
                  };
                }
                var o = Hu(t, r, e, 0, null, !1, 0, "", Zu);
                return (
                  (e._reactRootContainer = o),
                  (e[pi] = o.current),
                  Wr(8 === e.nodeType ? e.parentNode : e),
                  fu(),
                  o
                );
              }
              for (; (i = e.lastChild); ) e.removeChild(i);
              if ("function" === typeof r) {
                var s = r;
                r = function () {
                  var e = $u(l);
                  s.call(e);
                };
              }
              var l = Vu(e, 0, !1, null, 0, !1, 0, "", Zu);
              return (
                (e._reactRootContainer = l),
                (e[pi] = l.current),
                Wr(8 === e.nodeType ? e.parentNode : e),
                fu(function () {
                  Uu(t, l, n, r);
                }),
                l
              );
            })(n, t, e, i, r);
          return $u(o);
        }
        (Xu.prototype.render = Qu.prototype.render =
          function (e) {
            var t = this._internalRoot;
            if (null === t) throw Error(a(409));
            Uu(e, t, null, null);
          }),
          (Xu.prototype.unmount = Qu.prototype.unmount =
            function () {
              var e = this._internalRoot;
              if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                fu(function () {
                  Uu(null, e, null, null);
                }),
                  (t[pi] = null);
              }
            }),
          (Xu.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
              var t = St();
              e = { blockedOn: null, target: e, priority: t };
              for (
                var n = 0;
                n < Rt.length && 0 !== t && t < Rt[n].priority;
                n++
              );
              Rt.splice(n, 0, e), 0 === n && Ft(e);
            }
          }),
          (kt = function (e) {
            switch (e.tag) {
              case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                  var n = ft(t.pendingLanes);
                  0 !== n &&
                    (yt(t, 1 | n),
                    iu(t, Ge()),
                    0 === (6 & Ol) && ((Hl = Ge() + 500), Wi()));
                }
                break;
              case 13:
                fu(function () {
                  var t = Oa(e, 1);
                  if (null !== t) {
                    var n = tu();
                    ru(t, e, 1, n);
                  }
                }),
                  qu(e, 1);
            }
          }),
          (_t = function (e) {
            if (13 === e.tag) {
              var t = Oa(e, 134217728);
              if (null !== t) ru(t, e, 134217728, tu());
              qu(e, 134217728);
            }
          }),
          (wt = function (e) {
            if (13 === e.tag) {
              var t = nu(e),
                n = Oa(e, t);
              if (null !== n) ru(n, e, t, tu());
              qu(e, t);
            }
          }),
          (St = function () {
            return bt;
          }),
          (Et = function (e, t) {
            var n = bt;
            try {
              return (bt = e), t();
            } finally {
              bt = n;
            }
          }),
          (_e = function (e, t, n) {
            switch (t) {
              case "input":
                if ((J(e, n), (t = n.name), "radio" === n.type && null != t)) {
                  for (n = e; n.parentNode; ) n = n.parentNode;
                  for (
                    n = n.querySelectorAll(
                      "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
                    ),
                      t = 0;
                    t < n.length;
                    t++
                  ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                      var i = ki(r);
                      if (!i) throw Error(a(90));
                      q(r), J(r, i);
                    }
                  }
                }
                break;
              case "textarea":
                ae(e, n);
                break;
              case "select":
                null != (t = n.value) && ne(e, !!n.multiple, t, !1);
            }
          }),
          (Pe = cu),
          (Oe = fu);
        var tc = {
            usingClientEntryPoint: !1,
            Events: [bi, xi, ki, Me, Ce, cu],
          },
          nc = {
            findFiberByHostInstance: yi,
            bundleType: 0,
            version: "18.2.0",
            rendererPackageName: "react-dom",
          },
          rc = {
            bundleType: nc.bundleType,
            version: nc.version,
            rendererPackageName: nc.rendererPackageName,
            rendererConfig: nc.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: x.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return null === (e = $e(e)) ? null : e.stateNode;
            },
            findFiberByHostInstance:
              nc.findFiberByHostInstance ||
              function () {
                return null;
              },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
          };
        if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var ic = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!ic.isDisabled && ic.supportsFiber)
            try {
              (it = ic.inject(rc)), (at = ic);
            } catch (ce) {}
        }
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tc),
          (t.createPortal = function (e, t) {
            var n =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null;
            if (!Gu(t)) throw Error(a(200));
            return (function (e, t, n) {
              var r =
                3 < arguments.length && void 0 !== arguments[3]
                  ? arguments[3]
                  : null;
              return {
                $$typeof: _,
                key: null == r ? null : "" + r,
                children: e,
                containerInfo: t,
                implementation: n,
              };
            })(e, t, null, n);
          }),
          (t.createRoot = function (e, t) {
            if (!Gu(e)) throw Error(a(299));
            var n = !1,
              r = "",
              i = Ku;
            return (
              null !== t &&
                void 0 !== t &&
                (!0 === t.unstable_strictMode && (n = !0),
                void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (i = t.onRecoverableError)),
              (t = Vu(e, 1, !1, null, 0, n, 0, r, i)),
              (e[pi] = t.current),
              Wr(8 === e.nodeType ? e.parentNode : e),
              new Qu(t)
            );
          }),
          (t.findDOMNode = function (e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var t = e._reactInternals;
            if (void 0 === t) {
              if ("function" === typeof e.render) throw Error(a(188));
              throw ((e = Object.keys(e).join(",")), Error(a(268, e)));
            }
            return (e = null === (e = $e(t)) ? null : e.stateNode);
          }),
          (t.flushSync = function (e) {
            return fu(e);
          }),
          (t.hydrate = function (e, t, n) {
            if (!Ju(t)) throw Error(a(200));
            return ec(null, e, t, !0, n);
          }),
          (t.hydrateRoot = function (e, t, n) {
            if (!Gu(e)) throw Error(a(405));
            var r = (null != n && n.hydratedSources) || null,
              i = !1,
              o = "",
              s = Ku;
            if (
              (null !== n &&
                void 0 !== n &&
                (!0 === n.unstable_strictMode && (i = !0),
                void 0 !== n.identifierPrefix && (o = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (s = n.onRecoverableError)),
              (t = Hu(t, null, e, 1, null != n ? n : null, i, 0, o, s)),
              (e[pi] = t.current),
              Wr(e),
              r)
            )
              for (e = 0; e < r.length; e++)
                (i = (i = (n = r[e])._getVersion)(n._source)),
                  null == t.mutableSourceEagerHydrationData
                    ? (t.mutableSourceEagerHydrationData = [n, i])
                    : t.mutableSourceEagerHydrationData.push(n, i);
            return new Xu(t);
          }),
          (t.render = function (e, t, n) {
            if (!Ju(t)) throw Error(a(200));
            return ec(null, e, t, !1, n);
          }),
          (t.unmountComponentAtNode = function (e) {
            if (!Ju(e)) throw Error(a(40));
            return (
              !!e._reactRootContainer &&
              (fu(function () {
                ec(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[pi] = null);
                });
              }),
              !0)
            );
          }),
          (t.unstable_batchedUpdates = cu),
          (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
            if (!Ju(n)) throw Error(a(200));
            if (null == e || void 0 === e._reactInternals) throw Error(a(38));
            return ec(e, t, n, !1, r);
          }),
          (t.version = "18.2.0-next-9e3b772b8-20220608");
      },
      164: function (e, t, n) {
        !(function e() {
          if (
            "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (t) {
              console.error(t);
            }
        })(),
          (e.exports = n(463));
      },
      374: function (e, t, n) {
        var r = n(791),
          i = Symbol.for("react.element"),
          a = Symbol.for("react.fragment"),
          o = Object.prototype.hasOwnProperty,
          s =
            r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          l = { key: !0, ref: !0, __self: !0, __source: !0 };
        function u(e, t, n) {
          var r,
            a = {},
            u = null,
            c = null;
          for (r in (void 0 !== n && (u = "" + n),
          void 0 !== t.key && (u = "" + t.key),
          void 0 !== t.ref && (c = t.ref),
          t))
            o.call(t, r) && !l.hasOwnProperty(r) && (a[r] = t[r]);
          if (e && e.defaultProps)
            for (r in (t = e.defaultProps)) void 0 === a[r] && (a[r] = t[r]);
          return {
            $$typeof: i,
            type: e,
            key: u,
            ref: c,
            props: a,
            _owner: s.current,
          };
        }
        (t.jsx = u), (t.jsxs = u);
      },
      117: function (e, t) {
        var n = Symbol.for("react.element"),
          r = Symbol.for("react.portal"),
          i = Symbol.for("react.fragment"),
          a = Symbol.for("react.strict_mode"),
          o = Symbol.for("react.profiler"),
          s = Symbol.for("react.provider"),
          l = Symbol.for("react.context"),
          u = Symbol.for("react.forward_ref"),
          c = Symbol.for("react.suspense"),
          f = Symbol.for("react.memo"),
          h = Symbol.for("react.lazy"),
          d = Symbol.iterator;
        var p = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          v = Object.assign,
          g = {};
        function m(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = g),
            (this.updater = n || p);
        }
        function y() {}
        function b(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = g),
            (this.updater = n || p);
        }
        (m.prototype.isReactComponent = {}),
          (m.prototype.setState = function (e, t) {
            if ("object" !== typeof e && "function" !== typeof e && null != e)
              throw Error(
                "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
              );
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (m.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (y.prototype = m.prototype);
        var x = (b.prototype = new y());
        (x.constructor = b), v(x, m.prototype), (x.isPureReactComponent = !0);
        var k = Array.isArray,
          _ = Object.prototype.hasOwnProperty,
          w = { current: null },
          S = { key: !0, ref: !0, __self: !0, __source: !0 };
        function E(e, t, r) {
          var i,
            a = {},
            o = null,
            s = null;
          if (null != t)
            for (i in (void 0 !== t.ref && (s = t.ref),
            void 0 !== t.key && (o = "" + t.key),
            t))
              _.call(t, i) && !S.hasOwnProperty(i) && (a[i] = t[i]);
          var l = arguments.length - 2;
          if (1 === l) a.children = r;
          else if (1 < l) {
            for (var u = Array(l), c = 0; c < l; c++) u[c] = arguments[c + 2];
            a.children = u;
          }
          if (e && e.defaultProps)
            for (i in (l = e.defaultProps)) void 0 === a[i] && (a[i] = l[i]);
          return {
            $$typeof: n,
            type: e,
            key: o,
            ref: s,
            props: a,
            _owner: w.current,
          };
        }
        function M(e) {
          return "object" === typeof e && null !== e && e.$$typeof === n;
        }
        var C = /\/+/g;
        function P(e, t) {
          return "object" === typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { "=": "=0", ":": "=2" };
                return (
                  "$" +
                  e.replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })("" + e.key)
            : t.toString(36);
        }
        function O(e, t, i, a, o) {
          var s = typeof e;
          ("undefined" !== s && "boolean" !== s) || (e = null);
          var l = !1;
          if (null === e) l = !0;
          else
            switch (s) {
              case "string":
              case "number":
                l = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case n:
                  case r:
                    l = !0;
                }
            }
          if (l)
            return (
              (o = o((l = e))),
              (e = "" === a ? "." + P(l, 0) : a),
              k(o)
                ? ((i = ""),
                  null != e && (i = e.replace(C, "$&/") + "/"),
                  O(o, t, i, "", function (e) {
                    return e;
                  }))
                : null != o &&
                  (M(o) &&
                    (o = (function (e, t) {
                      return {
                        $$typeof: n,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      };
                    })(
                      o,
                      i +
                        (!o.key || (l && l.key === o.key)
                          ? ""
                          : ("" + o.key).replace(C, "$&/") + "/") +
                        e
                    )),
                  t.push(o)),
              1
            );
          if (((l = 0), (a = "" === a ? "." : a + ":"), k(e)))
            for (var u = 0; u < e.length; u++) {
              var c = a + P((s = e[u]), u);
              l += O(s, t, i, c, o);
            }
          else if (
            ((c = (function (e) {
              return null === e || "object" !== typeof e
                ? null
                : "function" === typeof (e = (d && e[d]) || e["@@iterator"])
                ? e
                : null;
            })(e)),
            "function" === typeof c)
          )
            for (e = c.call(e), u = 0; !(s = e.next()).done; )
              l += O((s = s.value), t, i, (c = a + P(s, u++)), o);
          else if ("object" === s)
            throw (
              ((t = String(e)),
              Error(
                "Objects are not valid as a React child (found: " +
                  ("[object Object]" === t
                    ? "object with keys {" + Object.keys(e).join(", ") + "}"
                    : t) +
                  "). If you meant to render a collection of children, use an array instead."
              ))
            );
          return l;
        }
        function T(e, t, n) {
          if (null == e) return e;
          var r = [],
            i = 0;
          return (
            O(e, r, "", "", function (e) {
              return t.call(n, e, i++);
            }),
            r
          );
        }
        function D(e) {
          if (-1 === e._status) {
            var t = e._result;
            (t = t()).then(
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 1), (e._result = t));
              },
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 2), (e._result = t));
              }
            ),
              -1 === e._status && ((e._status = 0), (e._result = t));
          }
          if (1 === e._status) return e._result.default;
          throw e._result;
        }
        var L = { current: null },
          R = { transition: null },
          A = {
            ReactCurrentDispatcher: L,
            ReactCurrentBatchConfig: R,
            ReactCurrentOwner: w,
          };
        (t.Children = {
          map: T,
          forEach: function (e, t, n) {
            T(
              e,
              function () {
                t.apply(this, arguments);
              },
              n
            );
          },
          count: function (e) {
            var t = 0;
            return (
              T(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              T(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!M(e))
              throw Error(
                "React.Children.only expected to receive a single React element child."
              );
            return e;
          },
        }),
          (t.Component = m),
          (t.Fragment = i),
          (t.Profiler = o),
          (t.PureComponent = b),
          (t.StrictMode = a),
          (t.Suspense = c),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = A),
          (t.cloneElement = function (e, t, r) {
            if (null === e || void 0 === e)
              throw Error(
                "React.cloneElement(...): The argument must be a React element, but you passed " +
                  e +
                  "."
              );
            var i = v({}, e.props),
              a = e.key,
              o = e.ref,
              s = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((o = t.ref), (s = w.current)),
                void 0 !== t.key && (a = "" + t.key),
                e.type && e.type.defaultProps)
              )
                var l = e.type.defaultProps;
              for (u in t)
                _.call(t, u) &&
                  !S.hasOwnProperty(u) &&
                  (i[u] = void 0 === t[u] && void 0 !== l ? l[u] : t[u]);
            }
            var u = arguments.length - 2;
            if (1 === u) i.children = r;
            else if (1 < u) {
              l = Array(u);
              for (var c = 0; c < u; c++) l[c] = arguments[c + 2];
              i.children = l;
            }
            return {
              $$typeof: n,
              type: e.type,
              key: a,
              ref: o,
              props: i,
              _owner: s,
            };
          }),
          (t.createContext = function (e) {
            return (
              ((e = {
                $$typeof: l,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null,
              }).Provider = { $$typeof: s, _context: e }),
              (e.Consumer = e)
            );
          }),
          (t.createElement = E),
          (t.createFactory = function (e) {
            var t = E.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: u, render: e };
          }),
          (t.isValidElement = M),
          (t.lazy = function (e) {
            return {
              $$typeof: h,
              _payload: { _status: -1, _result: e },
              _init: D,
            };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: f, type: e, compare: void 0 === t ? null : t };
          }),
          (t.startTransition = function (e) {
            var t = R.transition;
            R.transition = {};
            try {
              e();
            } finally {
              R.transition = t;
            }
          }),
          (t.unstable_act = function () {
            throw Error(
              "act(...) is not supported in production builds of React."
            );
          }),
          (t.useCallback = function (e, t) {
            return L.current.useCallback(e, t);
          }),
          (t.useContext = function (e) {
            return L.current.useContext(e);
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e) {
            return L.current.useDeferredValue(e);
          }),
          (t.useEffect = function (e, t) {
            return L.current.useEffect(e, t);
          }),
          (t.useId = function () {
            return L.current.useId();
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return L.current.useImperativeHandle(e, t, n);
          }),
          (t.useInsertionEffect = function (e, t) {
            return L.current.useInsertionEffect(e, t);
          }),
          (t.useLayoutEffect = function (e, t) {
            return L.current.useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return L.current.useMemo(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return L.current.useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return L.current.useRef(e);
          }),
          (t.useState = function (e) {
            return L.current.useState(e);
          }),
          (t.useSyncExternalStore = function (e, t, n) {
            return L.current.useSyncExternalStore(e, t, n);
          }),
          (t.useTransition = function () {
            return L.current.useTransition();
          }),
          (t.version = "18.2.0");
      },
      791: function (e, t, n) {
        e.exports = n(117);
      },
      184: function (e, t, n) {
        e.exports = n(374);
      },
      813: function (e, t) {
        function n(e, t) {
          var n = e.length;
          e.push(t);
          e: for (; 0 < n; ) {
            var r = (n - 1) >>> 1,
              i = e[r];
            if (!(0 < a(i, t))) break e;
            (e[r] = t), (e[n] = i), (n = r);
          }
        }
        function r(e) {
          return 0 === e.length ? null : e[0];
        }
        function i(e) {
          if (0 === e.length) return null;
          var t = e[0],
            n = e.pop();
          if (n !== t) {
            e[0] = n;
            e: for (var r = 0, i = e.length, o = i >>> 1; r < o; ) {
              var s = 2 * (r + 1) - 1,
                l = e[s],
                u = s + 1,
                c = e[u];
              if (0 > a(l, n))
                u < i && 0 > a(c, l)
                  ? ((e[r] = c), (e[u] = n), (r = u))
                  : ((e[r] = l), (e[s] = n), (r = s));
              else {
                if (!(u < i && 0 > a(c, n))) break e;
                (e[r] = c), (e[u] = n), (r = u);
              }
            }
          }
          return t;
        }
        function a(e, t) {
          var n = e.sortIndex - t.sortIndex;
          return 0 !== n ? n : e.id - t.id;
        }
        if (
          "object" === typeof performance &&
          "function" === typeof performance.now
        ) {
          var o = performance;
          t.unstable_now = function () {
            return o.now();
          };
        } else {
          var s = Date,
            l = s.now();
          t.unstable_now = function () {
            return s.now() - l;
          };
        }
        var u = [],
          c = [],
          f = 1,
          h = null,
          d = 3,
          p = !1,
          v = !1,
          g = !1,
          m = "function" === typeof setTimeout ? setTimeout : null,
          y = "function" === typeof clearTimeout ? clearTimeout : null,
          b = "undefined" !== typeof setImmediate ? setImmediate : null;
        function x(e) {
          for (var t = r(c); null !== t; ) {
            if (null === t.callback) i(c);
            else {
              if (!(t.startTime <= e)) break;
              i(c), (t.sortIndex = t.expirationTime), n(u, t);
            }
            t = r(c);
          }
        }
        function k(e) {
          if (((g = !1), x(e), !v))
            if (null !== r(u)) (v = !0), R(_);
            else {
              var t = r(c);
              null !== t && A(k, t.startTime - e);
            }
        }
        function _(e, n) {
          (v = !1), g && ((g = !1), y(M), (M = -1)), (p = !0);
          var a = d;
          try {
            for (
              x(n), h = r(u);
              null !== h && (!(h.expirationTime > n) || (e && !O()));

            ) {
              var o = h.callback;
              if ("function" === typeof o) {
                (h.callback = null), (d = h.priorityLevel);
                var s = o(h.expirationTime <= n);
                (n = t.unstable_now()),
                  "function" === typeof s
                    ? (h.callback = s)
                    : h === r(u) && i(u),
                  x(n);
              } else i(u);
              h = r(u);
            }
            if (null !== h) var l = !0;
            else {
              var f = r(c);
              null !== f && A(k, f.startTime - n), (l = !1);
            }
            return l;
          } finally {
            (h = null), (d = a), (p = !1);
          }
        }
        "undefined" !== typeof navigator &&
          void 0 !== navigator.scheduling &&
          void 0 !== navigator.scheduling.isInputPending &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        var w,
          S = !1,
          E = null,
          M = -1,
          C = 5,
          P = -1;
        function O() {
          return !(t.unstable_now() - P < C);
        }
        function T() {
          if (null !== E) {
            var e = t.unstable_now();
            P = e;
            var n = !0;
            try {
              n = E(!0, e);
            } finally {
              n ? w() : ((S = !1), (E = null));
            }
          } else S = !1;
        }
        if ("function" === typeof b)
          w = function () {
            b(T);
          };
        else if ("undefined" !== typeof MessageChannel) {
          var D = new MessageChannel(),
            L = D.port2;
          (D.port1.onmessage = T),
            (w = function () {
              L.postMessage(null);
            });
        } else
          w = function () {
            m(T, 0);
          };
        function R(e) {
          (E = e), S || ((S = !0), w());
        }
        function A(e, n) {
          M = m(function () {
            e(t.unstable_now());
          }, n);
        }
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (t.unstable_continueExecution = function () {
            v || p || ((v = !0), R(_));
          }),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (C = 0 < e ? Math.floor(1e3 / e) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return d;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return r(u);
          }),
          (t.unstable_next = function (e) {
            switch (d) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = d;
            }
            var n = d;
            d = t;
            try {
              return e();
            } finally {
              d = n;
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = function () {}),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var n = d;
            d = e;
            try {
              return t();
            } finally {
              d = n;
            }
          }),
          (t.unstable_scheduleCallback = function (e, i, a) {
            var o = t.unstable_now();
            switch (
              ("object" === typeof a && null !== a
                ? (a = "number" === typeof (a = a.delay) && 0 < a ? o + a : o)
                : (a = o),
              e)
            ) {
              case 1:
                var s = -1;
                break;
              case 2:
                s = 250;
                break;
              case 5:
                s = 1073741823;
                break;
              case 4:
                s = 1e4;
                break;
              default:
                s = 5e3;
            }
            return (
              (e = {
                id: f++,
                callback: i,
                priorityLevel: e,
                startTime: a,
                expirationTime: (s = a + s),
                sortIndex: -1,
              }),
              a > o
                ? ((e.sortIndex = a),
                  n(c, e),
                  null === r(u) &&
                    e === r(c) &&
                    (g ? (y(M), (M = -1)) : (g = !0), A(k, a - o)))
                : ((e.sortIndex = s), n(u, e), v || p || ((v = !0), R(_))),
              e
            );
          }),
          (t.unstable_shouldYield = O),
          (t.unstable_wrapCallback = function (e) {
            var t = d;
            return function () {
              var n = d;
              d = t;
              try {
                return e.apply(this, arguments);
              } finally {
                d = n;
              }
            };
          });
      },
      296: function (e, t, n) {
        e.exports = n(813);
      },
    },
    t = {};
  function n(r) {
    var i = t[r];
    if (void 0 !== i) return i.exports;
    var a = (t[r] = { exports: {} });
    return e[r](a, a.exports, n), a.exports;
  }
  !(function () {
    var e = n(791),
      t = n(164);
    function r(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
      return r;
    }
    function i(e, t) {
      if (e) {
        if ("string" === typeof e) return r(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        return (
          "Object" === n && e.constructor && (n = e.constructor.name),
          "Map" === n || "Set" === n
            ? Array.from(e)
            : "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            ? r(e, t)
            : void 0
        );
      }
    }
    function a(e, t) {
      return (
        (function (e) {
          if (Array.isArray(e)) return e;
        })(e) ||
        (function (e, t) {
          var n =
            null == e
              ? null
              : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                e["@@iterator"];
          if (null != n) {
            var r,
              i,
              a,
              o,
              s = [],
              l = !0,
              u = !1;
            try {
              if (((a = (n = n.call(e)).next), 0 === t)) {
                if (Object(n) !== n) return;
                l = !1;
              } else
                for (
                  ;
                  !(l = (r = a.call(n)).done) &&
                  (s.push(r.value), s.length !== t);
                  l = !0
                );
            } catch (c) {
              (u = !0), (i = c);
            } finally {
              try {
                if (
                  !l &&
                  null != n.return &&
                  ((o = n.return()), Object(o) !== o)
                )
                  return;
              } finally {
                if (u) throw i;
              }
            }
            return s;
          }
        })(e, t) ||
        i(e, t) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function o(e) {
      return (
        (o =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              }),
        o(e)
      );
    }
    function s(e) {
      var t = (function (e, t) {
        if ("object" !== o(e) || null === e) return e;
        var n = e[Symbol.toPrimitive];
        if (void 0 !== n) {
          var r = n.call(e, t || "default");
          if ("object" !== o(r)) return r;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === t ? String : Number)(e);
      })(e, "string");
      return "symbol" === o(t) ? t : String(t);
    }
    function l(e, t, n) {
      return (
        (t = s(t)) in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    function u(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function c(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? u(Object(n), !0).forEach(function (t) {
              l(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : u(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    function f(e, t) {
      if (null == e) return {};
      var n,
        r,
        i = (function (e, t) {
          if (null == e) return {};
          var n,
            r,
            i = {},
            a = Object.keys(e);
          for (r = 0; r < a.length; r++)
            (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
          return i;
        })(e, t);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
          (n = a[r]),
            t.indexOf(n) >= 0 ||
              (Object.prototype.propertyIsEnumerable.call(e, n) &&
                (i[n] = e[n]));
      }
      return i;
    }
    function h(e) {
      return function (t) {
        return !!t.type && t.type.tabsRole === e;
      };
    }
    var d = h("Tab"),
      p = h("TabList"),
      v = h("TabPanel");
    function g(t, n) {
      return e.Children.map(t, function (t) {
        return null === t
          ? null
          : (function (e) {
              return d(e) || p(e) || v(e);
            })(t)
          ? n(t)
          : t.props && t.props.children && "object" === typeof t.props.children
          ? (0, e.cloneElement)(
              t,
              c(c({}, t.props), {}, { children: g(t.props.children, n) })
            )
          : t;
      });
    }
    function m(t, n) {
      return e.Children.forEach(t, function (e) {
        null !== e &&
          (d(e) || v(e)
            ? n(e)
            : e.props &&
              e.props.children &&
              "object" === typeof e.props.children &&
              (p(e) && n(e), m(e.props.children, n)));
      });
    }
    function y(e) {
      var t,
        n,
        r = "";
      if ("string" == typeof e || "number" == typeof e) r += e;
      else if ("object" == typeof e)
        if (Array.isArray(e))
          for (t = 0; t < e.length; t++)
            e[t] && (n = y(e[t])) && (r && (r += " "), (r += n));
        else for (t in e) e[t] && (r && (r += " "), (r += t));
      return r;
    }
    var b = function () {
      for (var e, t, n = 0, r = ""; n < arguments.length; )
        (e = arguments[n++]) && (t = y(e)) && (r && (r += " "), (r += t));
      return r;
    };
    function x(e) {
      var t = 0;
      return (
        m(e, function (e) {
          d(e) && t++;
        }),
        t
      );
    }
    var k,
      _ = [
        "children",
        "className",
        "disabledTabClassName",
        "domRef",
        "focus",
        "forceRenderTabPanel",
        "onSelect",
        "selectedIndex",
        "selectedTabClassName",
        "selectedTabPanelClassName",
        "environment",
        "disableUpDownKeys",
        "disableLeftRightKeys",
      ];
    function w(e) {
      return e && "getAttribute" in e;
    }
    function S(e) {
      return w(e) && e.getAttribute("data-rttab");
    }
    function E(e) {
      return w(e) && "true" === e.getAttribute("aria-disabled");
    }
    var M = { className: "react-tabs", focus: !1 },
      C = function (t) {
        var n = (0, e.useRef)([]),
          r = (0, e.useRef)([]),
          i = (0, e.useRef)();
        function a(e, n) {
          e < 0 || e >= l() || (0, t.onSelect)(e, t.selectedIndex, n);
        }
        function o(e) {
          for (var t = l(), n = e + 1; n < t; n++) if (!E(u(n))) return n;
          for (var r = 0; r < e; r++) if (!E(u(r))) return r;
          return e;
        }
        function s(e) {
          for (var t = e; t--; ) if (!E(u(t))) return t;
          for (t = l(); t-- > e; ) if (!E(u(t))) return t;
          return e;
        }
        function l() {
          return x(t.children);
        }
        function u(e) {
          return n.current["tabs-".concat(e)];
        }
        function h(e) {
          var t = e.target;
          do {
            if (m(t)) {
              if (E(t)) return;
              return void a(
                [].slice.call(t.parentNode.children).filter(S).indexOf(t),
                e
              );
            }
          } while (null != (t = t.parentNode));
        }
        function m(e) {
          if (!S(e)) return !1;
          var t = e.parentElement;
          do {
            if (t === i.current) return !0;
            if (t.getAttribute("data-rttabs")) break;
            t = t.parentElement;
          } while (t);
          return !1;
        }
        var y = c(c({}, M), t),
          w = (y.children, y.className),
          C = (y.disabledTabClassName, y.domRef),
          P =
            (y.focus,
            y.forceRenderTabPanel,
            y.onSelect,
            y.selectedIndex,
            y.selectedTabClassName,
            y.selectedTabPanelClassName,
            y.environment,
            y.disableUpDownKeys,
            y.disableLeftRightKeys,
            f(y, _));
        return e.createElement(
          "div",
          Object.assign({}, P, {
            className: b(w),
            onClick: h,
            onKeyDown: function (e) {
              var n = t.direction,
                r = t.disableUpDownKeys,
                i = t.disableLeftRightKeys;
              if (m(e.target)) {
                var c = t.selectedIndex,
                  f = !1,
                  d = !1;
                ("Space" !== e.code &&
                  32 !== e.keyCode &&
                  "Enter" !== e.code &&
                  13 !== e.keyCode) ||
                  ((f = !0), (d = !1), h(e)),
                  (i || (37 !== e.keyCode && "ArrowLeft" !== e.code)) &&
                  (r || (38 !== e.keyCode && "ArrowUp" !== e.code))
                    ? (i || (39 !== e.keyCode && "ArrowRight" !== e.code)) &&
                      (r || (40 !== e.keyCode && "ArrowDown" !== e.code))
                      ? 35 === e.keyCode || "End" === e.code
                        ? ((c = (function () {
                            for (var e = l(); e--; ) if (!E(u(e))) return e;
                            return null;
                          })()),
                          (f = !0),
                          (d = !0))
                        : (36 !== e.keyCode && "Home" !== e.code) ||
                          ((c = (function () {
                            for (var e = l(), t = 0; t < e; t++)
                              if (!E(u(t))) return t;
                            return null;
                          })()),
                          (f = !0),
                          (d = !0))
                      : ((c = "rtl" === n ? s(c) : o(c)), (f = !0), (d = !0))
                    : ((c = "rtl" === n ? o(c) : s(c)), (f = !0), (d = !0)),
                  f && e.preventDefault(),
                  d && a(c, e);
              }
            },
            ref: function (e) {
              (i.current = e), C && C(e);
            },
            "data-rttabs": !0,
          }),
          (function () {
            var i = 0,
              a = t.children,
              o = t.disabledTabClassName,
              s = t.focus,
              c = t.forceRenderTabPanel,
              f = t.selectedIndex,
              h = t.selectedTabClassName,
              m = t.selectedTabPanelClassName,
              y = t.environment;
            r.current = r.current || [];
            for (var b = r.current.length - l(), x = (0, e.useId)(); b++ < 0; )
              r.current.push("".concat(x).concat(r.current.length));
            return g(a, function (t) {
              var a = t;
              if (p(t)) {
                var l = 0,
                  b = !1;
                null == k &&
                  (function (e) {
                    var t =
                      e || ("undefined" !== typeof window ? window : void 0);
                    try {
                      k = !(
                        "undefined" === typeof t ||
                        !t.document ||
                        !t.document.activeElement
                      );
                    } catch (n) {
                      k = !1;
                    }
                  })(y);
                var x = y || ("undefined" !== typeof window ? window : void 0);
                k &&
                  x &&
                  (b = e.Children.toArray(t.props.children)
                    .filter(d)
                    .some(function (e, t) {
                      return x.document.activeElement === u(t);
                    })),
                  (a = (0, e.cloneElement)(t, {
                    children: g(t.props.children, function (t) {
                      var i = "tabs-".concat(l),
                        a = f === l,
                        u = {
                          tabRef: function (e) {
                            n.current[i] = e;
                          },
                          id: r.current[l],
                          selected: a,
                          focus: a && (s || b),
                        };
                      return (
                        h && (u.selectedClassName = h),
                        o && (u.disabledClassName = o),
                        l++,
                        (0, e.cloneElement)(t, u)
                      );
                    }),
                  }));
              } else if (v(t)) {
                var _ = { id: r.current[i], selected: f === i };
                c && (_.forceRender = c),
                  m && (_.selectedClassName = m),
                  i++,
                  (a = (0, e.cloneElement)(t, _));
              }
              return a;
            });
          })()
        );
      };
    C.propTypes = {};
    var P = C,
      O = [
        "children",
        "defaultFocus",
        "defaultIndex",
        "focusTabOnClick",
        "onSelect",
      ],
      T = {
        defaultFocus: !1,
        focusTabOnClick: !0,
        forceRenderTabPanel: !1,
        selectedIndex: null,
        defaultIndex: null,
        environment: null,
        disableUpDownKeys: !1,
        disableLeftRightKeys: !1,
      },
      D = function (t) {
        var n = c(c({}, T), t),
          r = n.children,
          i = n.defaultFocus,
          o = n.defaultIndex,
          s = n.focusTabOnClick,
          l = n.onSelect,
          u = f(n, O),
          h = a((0, e.useState)(i), 2),
          d = h[0],
          p = h[1],
          v = (0, e.useState)(
            (function (e) {
              return null === e.selectedIndex ? 1 : 0;
            })(u)
          ),
          g = a(v, 1)[0],
          m = a((0, e.useState)(1 === g ? o || 0 : null), 2),
          y = m[0],
          b = m[1];
        if (
          ((0, e.useEffect)(function () {
            p(!1);
          }, []),
          1 === g)
        ) {
          var k = x(r);
          (0, e.useEffect)(
            function () {
              if (null != y) {
                var e = Math.max(0, k - 1);
                b(Math.min(y, e));
              }
            },
            [k]
          );
        }
        var _ = c(c({}, t), u);
        return (
          (_.focus = d),
          (_.onSelect = function (e, t, n) {
            ("function" === typeof l && !1 === l(e, t, n)) ||
              (s && p(!0), 1 === g && b(e));
          }),
          null != y && (_.selectedIndex = y),
          delete _.defaultFocus,
          delete _.defaultIndex,
          delete _.focusTabOnClick,
          e.createElement(P, _, r)
        );
      };
    (D.propTypes = {}), (D.tabsRole = "Tabs");
    var L = D,
      R = ["children", "className"],
      A = { className: "react-tabs__tab-list" },
      N = function (t) {
        var n = c(c({}, A), t),
          r = n.children,
          i = n.className,
          a = f(n, R);
        return e.createElement(
          "ul",
          Object.assign({}, a, { className: b(i), role: "tablist" }),
          r
        );
      };
    (N.tabsRole = "TabList"), (N.propTypes = {});
    var z = N,
      F = [
        "children",
        "className",
        "disabled",
        "disabledClassName",
        "focus",
        "id",
        "selected",
        "selectedClassName",
        "tabIndex",
        "tabRef",
      ],
      I = "react-tabs__tab",
      j = {
        className: I,
        disabledClassName: "".concat(I, "--disabled"),
        focus: !1,
        id: null,
        selected: !1,
        selectedClassName: "".concat(I, "--selected"),
      },
      B = function (t) {
        var n,
          r = (0, e.useRef)(),
          i = c(c({}, j), t),
          a = i.children,
          o = i.className,
          s = i.disabled,
          u = i.disabledClassName,
          h = i.focus,
          d = i.id,
          p = i.selected,
          v = i.selectedClassName,
          g = i.tabIndex,
          m = i.tabRef,
          y = f(i, F);
        return (
          (0, e.useEffect)(
            function () {
              p && h && r.current.focus();
            },
            [p, h]
          ),
          e.createElement(
            "li",
            Object.assign({}, y, {
              className: b(o, ((n = {}), l(n, v, p), l(n, u, s), n)),
              ref: function (e) {
                (r.current = e), m && m(e);
              },
              role: "tab",
              id: "tab".concat(d),
              "aria-selected": p ? "true" : "false",
              "aria-disabled": s ? "true" : "false",
              "aria-controls": "panel".concat(d),
              tabIndex: g || (p ? "0" : null),
              "data-rttab": !0,
            }),
            a
          )
        );
      };
    (B.propTypes = {}), (B.tabsRole = "Tab");
    var V = B,
      W = [
        "children",
        "className",
        "forceRender",
        "id",
        "selected",
        "selectedClassName",
      ],
      H = "react-tabs__tab-panel",
      U = {
        className: H,
        forceRender: !1,
        selectedClassName: "".concat(H, "--selected"),
      },
      $ = function (t) {
        var n = c(c({}, U), t),
          r = n.children,
          i = n.className,
          a = n.forceRender,
          o = n.id,
          s = n.selected,
          u = n.selectedClassName,
          h = f(n, W);
        return e.createElement(
          "div",
          Object.assign({}, h, {
            className: b(i, l({}, u, s)),
            role: "tabpanel",
            id: "panel".concat(o),
            "aria-labelledby": "tab".concat(o),
          }),
          a || s ? r : null
        );
      };
    ($.tabsRole = "TabPanel"), ($.propTypes = {});
    var Y = $,
      q = n(184),
      K = function () {
        return (0, q.jsx)("header", {
          className: "bg-dark text-light text-center py-3",
          children: (0, q.jsx)("h1", {
            className: "text-center",
            children: "Covid-19 Information",
          }),
        });
      };
    function Q() {
      Q = function () {
        return e;
      };
      var e = {},
        t = Object.prototype,
        n = t.hasOwnProperty,
        r =
          Object.defineProperty ||
          function (e, t, n) {
            e[t] = n.value;
          },
        i = "function" == typeof Symbol ? Symbol : {},
        a = i.iterator || "@@iterator",
        s = i.asyncIterator || "@@asyncIterator",
        l = i.toStringTag || "@@toStringTag";
      function u(e, t, n) {
        return (
          Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          }),
          e[t]
        );
      }
      try {
        u({}, "");
      } catch (O) {
        u = function (e, t, n) {
          return (e[t] = n);
        };
      }
      function c(e, t, n, i) {
        var a = t && t.prototype instanceof d ? t : d,
          o = Object.create(a.prototype),
          s = new M(i || []);
        return r(o, "_invoke", { value: _(e, n, s) }), o;
      }
      function f(e, t, n) {
        try {
          return { type: "normal", arg: e.call(t, n) };
        } catch (O) {
          return { type: "throw", arg: O };
        }
      }
      e.wrap = c;
      var h = {};
      function d() {}
      function p() {}
      function v() {}
      var g = {};
      u(g, a, function () {
        return this;
      });
      var m = Object.getPrototypeOf,
        y = m && m(m(C([])));
      y && y !== t && n.call(y, a) && (g = y);
      var b = (v.prototype = d.prototype = Object.create(g));
      function x(e) {
        ["next", "throw", "return"].forEach(function (t) {
          u(e, t, function (e) {
            return this._invoke(t, e);
          });
        });
      }
      function k(e, t) {
        function i(r, a, s, l) {
          var u = f(e[r], e, a);
          if ("throw" !== u.type) {
            var c = u.arg,
              h = c.value;
            return h && "object" == o(h) && n.call(h, "__await")
              ? t.resolve(h.__await).then(
                  function (e) {
                    i("next", e, s, l);
                  },
                  function (e) {
                    i("throw", e, s, l);
                  }
                )
              : t.resolve(h).then(
                  function (e) {
                    (c.value = e), s(c);
                  },
                  function (e) {
                    return i("throw", e, s, l);
                  }
                );
          }
          l(u.arg);
        }
        var a;
        r(this, "_invoke", {
          value: function (e, n) {
            function r() {
              return new t(function (t, r) {
                i(e, n, t, r);
              });
            }
            return (a = a ? a.then(r, r) : r());
          },
        });
      }
      function _(e, t, n) {
        var r = "suspendedStart";
        return function (i, a) {
          if ("executing" === r)
            throw new Error("Generator is already running");
          if ("completed" === r) {
            if ("throw" === i) throw a;
            return P();
          }
          for (n.method = i, n.arg = a; ; ) {
            var o = n.delegate;
            if (o) {
              var s = w(o, n);
              if (s) {
                if (s === h) continue;
                return s;
              }
            }
            if ("next" === n.method) n.sent = n._sent = n.arg;
            else if ("throw" === n.method) {
              if ("suspendedStart" === r) throw ((r = "completed"), n.arg);
              n.dispatchException(n.arg);
            } else "return" === n.method && n.abrupt("return", n.arg);
            r = "executing";
            var l = f(e, t, n);
            if ("normal" === l.type) {
              if (((r = n.done ? "completed" : "suspendedYield"), l.arg === h))
                continue;
              return { value: l.arg, done: n.done };
            }
            "throw" === l.type &&
              ((r = "completed"), (n.method = "throw"), (n.arg = l.arg));
          }
        };
      }
      function w(e, t) {
        var n = t.method,
          r = e.iterator[n];
        if (void 0 === r)
          return (
            (t.delegate = null),
            ("throw" === n &&
              e.iterator.return &&
              ((t.method = "return"),
              (t.arg = void 0),
              w(e, t),
              "throw" === t.method)) ||
              ("return" !== n &&
                ((t.method = "throw"),
                (t.arg = new TypeError(
                  "The iterator does not provide a '" + n + "' method"
                )))),
            h
          );
        var i = f(r, e.iterator, t.arg);
        if ("throw" === i.type)
          return (t.method = "throw"), (t.arg = i.arg), (t.delegate = null), h;
        var a = i.arg;
        return a
          ? a.done
            ? ((t[e.resultName] = a.value),
              (t.next = e.nextLoc),
              "return" !== t.method && ((t.method = "next"), (t.arg = void 0)),
              (t.delegate = null),
              h)
            : a
          : ((t.method = "throw"),
            (t.arg = new TypeError("iterator result is not an object")),
            (t.delegate = null),
            h);
      }
      function S(e) {
        var t = { tryLoc: e[0] };
        1 in e && (t.catchLoc = e[1]),
          2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
          this.tryEntries.push(t);
      }
      function E(e) {
        var t = e.completion || {};
        (t.type = "normal"), delete t.arg, (e.completion = t);
      }
      function M(e) {
        (this.tryEntries = [{ tryLoc: "root" }]),
          e.forEach(S, this),
          this.reset(!0);
      }
      function C(e) {
        if (e) {
          var t = e[a];
          if (t) return t.call(e);
          if ("function" == typeof e.next) return e;
          if (!isNaN(e.length)) {
            var r = -1,
              i = function t() {
                for (; ++r < e.length; )
                  if (n.call(e, r)) return (t.value = e[r]), (t.done = !1), t;
                return (t.value = void 0), (t.done = !0), t;
              };
            return (i.next = i);
          }
        }
        return { next: P };
      }
      function P() {
        return { value: void 0, done: !0 };
      }
      return (
        (p.prototype = v),
        r(b, "constructor", { value: v, configurable: !0 }),
        r(v, "constructor", { value: p, configurable: !0 }),
        (p.displayName = u(v, l, "GeneratorFunction")),
        (e.isGeneratorFunction = function (e) {
          var t = "function" == typeof e && e.constructor;
          return (
            !!t &&
            (t === p || "GeneratorFunction" === (t.displayName || t.name))
          );
        }),
        (e.mark = function (e) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(e, v)
              : ((e.__proto__ = v), u(e, l, "GeneratorFunction")),
            (e.prototype = Object.create(b)),
            e
          );
        }),
        (e.awrap = function (e) {
          return { __await: e };
        }),
        x(k.prototype),
        u(k.prototype, s, function () {
          return this;
        }),
        (e.AsyncIterator = k),
        (e.async = function (t, n, r, i, a) {
          void 0 === a && (a = Promise);
          var o = new k(c(t, n, r, i), a);
          return e.isGeneratorFunction(n)
            ? o
            : o.next().then(function (e) {
                return e.done ? e.value : o.next();
              });
        }),
        x(b),
        u(b, l, "Generator"),
        u(b, a, function () {
          return this;
        }),
        u(b, "toString", function () {
          return "[object Generator]";
        }),
        (e.keys = function (e) {
          var t = Object(e),
            n = [];
          for (var r in t) n.push(r);
          return (
            n.reverse(),
            function e() {
              for (; n.length; ) {
                var r = n.pop();
                if (r in t) return (e.value = r), (e.done = !1), e;
              }
              return (e.done = !0), e;
            }
          );
        }),
        (e.values = C),
        (M.prototype = {
          constructor: M,
          reset: function (e) {
            if (
              ((this.prev = 0),
              (this.next = 0),
              (this.sent = this._sent = void 0),
              (this.done = !1),
              (this.delegate = null),
              (this.method = "next"),
              (this.arg = void 0),
              this.tryEntries.forEach(E),
              !e)
            )
              for (var t in this)
                "t" === t.charAt(0) &&
                  n.call(this, t) &&
                  !isNaN(+t.slice(1)) &&
                  (this[t] = void 0);
          },
          stop: function () {
            this.done = !0;
            var e = this.tryEntries[0].completion;
            if ("throw" === e.type) throw e.arg;
            return this.rval;
          },
          dispatchException: function (e) {
            if (this.done) throw e;
            var t = this;
            function r(n, r) {
              return (
                (o.type = "throw"),
                (o.arg = e),
                (t.next = n),
                r && ((t.method = "next"), (t.arg = void 0)),
                !!r
              );
            }
            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
              var a = this.tryEntries[i],
                o = a.completion;
              if ("root" === a.tryLoc) return r("end");
              if (a.tryLoc <= this.prev) {
                var s = n.call(a, "catchLoc"),
                  l = n.call(a, "finallyLoc");
                if (s && l) {
                  if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
                  if (this.prev < a.finallyLoc) return r(a.finallyLoc);
                } else if (s) {
                  if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
                } else {
                  if (!l)
                    throw new Error("try statement without catch or finally");
                  if (this.prev < a.finallyLoc) return r(a.finallyLoc);
                }
              }
            }
          },
          abrupt: function (e, t) {
            for (var r = this.tryEntries.length - 1; r >= 0; --r) {
              var i = this.tryEntries[r];
              if (
                i.tryLoc <= this.prev &&
                n.call(i, "finallyLoc") &&
                this.prev < i.finallyLoc
              ) {
                var a = i;
                break;
              }
            }
            a &&
              ("break" === e || "continue" === e) &&
              a.tryLoc <= t &&
              t <= a.finallyLoc &&
              (a = null);
            var o = a ? a.completion : {};
            return (
              (o.type = e),
              (o.arg = t),
              a
                ? ((this.method = "next"), (this.next = a.finallyLoc), h)
                : this.complete(o)
            );
          },
          complete: function (e, t) {
            if ("throw" === e.type) throw e.arg;
            return (
              "break" === e.type || "continue" === e.type
                ? (this.next = e.arg)
                : "return" === e.type
                ? ((this.rval = this.arg = e.arg),
                  (this.method = "return"),
                  (this.next = "end"))
                : "normal" === e.type && t && (this.next = t),
              h
            );
          },
          finish: function (e) {
            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
              var n = this.tryEntries[t];
              if (n.finallyLoc === e)
                return this.complete(n.completion, n.afterLoc), E(n), h;
            }
          },
          catch: function (e) {
            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
              var n = this.tryEntries[t];
              if (n.tryLoc === e) {
                var r = n.completion;
                if ("throw" === r.type) {
                  var i = r.arg;
                  E(n);
                }
                return i;
              }
            }
            throw new Error("illegal catch attempt");
          },
          delegateYield: function (e, t, n) {
            return (
              (this.delegate = { iterator: C(e), resultName: t, nextLoc: n }),
              "next" === this.method && (this.arg = void 0),
              h
            );
          },
        }),
        e
      );
    }
    function X(e, t, n, r, i, a, o) {
      try {
        var s = e[a](o),
          l = s.value;
      } catch (u) {
        return void n(u);
      }
      s.done ? t(l) : Promise.resolve(l).then(r, i);
    }
    function G(e) {
      return function () {
        var t = this,
          n = arguments;
        return new Promise(function (r, i) {
          var a = e.apply(t, n);
          function o(e) {
            X(a, r, i, o, s, "next", e);
          }
          function s(e) {
            X(a, r, i, o, s, "throw", e);
          }
          o(void 0);
        });
      };
    }
    function J(e, t) {
      return function () {
        return e.apply(t, arguments);
      };
    }
    var Z,
      ee = Object.prototype.toString,
      te = Object.getPrototypeOf,
      ne =
        ((Z = Object.create(null)),
        function (e) {
          var t = ee.call(e);
          return Z[t] || (Z[t] = t.slice(8, -1).toLowerCase());
        }),
      re = function (e) {
        return (
          (e = e.toLowerCase()),
          function (t) {
            return ne(t) === e;
          }
        );
      },
      ie = function (e) {
        return function (t) {
          return typeof t === e;
        };
      },
      ae = Array.isArray,
      oe = ie("undefined");
    var se = re("ArrayBuffer");
    var le = ie("string"),
      ue = ie("function"),
      ce = ie("number"),
      fe = function (e) {
        return null !== e && "object" === typeof e;
      },
      he = function (e) {
        if ("object" !== ne(e)) return !1;
        var t = te(e);
        return (
          (null === t ||
            t === Object.prototype ||
            null === Object.getPrototypeOf(t)) &&
          !(Symbol.toStringTag in e) &&
          !(Symbol.iterator in e)
        );
      },
      de = re("Date"),
      pe = re("File"),
      ve = re("Blob"),
      ge = re("FileList"),
      me = re("URLSearchParams");
    function ye(e, t) {
      var n,
        r,
        i = (
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
        ).allOwnKeys,
        a = void 0 !== i && i;
      if (null !== e && "undefined" !== typeof e)
        if (("object" !== typeof e && (e = [e]), ae(e)))
          for (n = 0, r = e.length; n < r; n++) t.call(null, e[n], n, e);
        else {
          var o,
            s = a ? Object.getOwnPropertyNames(e) : Object.keys(e),
            l = s.length;
          for (n = 0; n < l; n++) (o = s[n]), t.call(null, e[o], o, e);
        }
    }
    function be(e, t) {
      t = t.toLowerCase();
      for (var n, r = Object.keys(e), i = r.length; i-- > 0; )
        if (t === (n = r[i]).toLowerCase()) return n;
      return null;
    }
    var xe =
        "undefined" !== typeof globalThis
          ? globalThis
          : "undefined" !== typeof self
          ? self
          : "undefined" !== typeof window
          ? window
          : global,
      ke = function (e) {
        return !oe(e) && e !== xe;
      };
    var _e,
      we =
        ((_e = "undefined" !== typeof Uint8Array && te(Uint8Array)),
        function (e) {
          return _e && e instanceof _e;
        }),
      Se = re("HTMLFormElement"),
      Ee = (function (e) {
        var t = Object.prototype.hasOwnProperty;
        return function (e, n) {
          return t.call(e, n);
        };
      })(),
      Me = re("RegExp"),
      Ce = function (e, t) {
        var n = Object.getOwnPropertyDescriptors(e),
          r = {};
        ye(n, function (n, i) {
          !1 !== t(n, i, e) && (r[i] = n);
        }),
          Object.defineProperties(e, r);
      },
      Pe = "abcdefghijklmnopqrstuvwxyz",
      Oe = "0123456789",
      Te = { DIGIT: Oe, ALPHA: Pe, ALPHA_DIGIT: Pe + Pe.toUpperCase() + Oe };
    var De = re("AsyncFunction"),
      Le = {
        isArray: ae,
        isArrayBuffer: se,
        isBuffer: function (e) {
          return (
            null !== e &&
            !oe(e) &&
            null !== e.constructor &&
            !oe(e.constructor) &&
            ue(e.constructor.isBuffer) &&
            e.constructor.isBuffer(e)
          );
        },
        isFormData: function (e) {
          var t;
          return (
            e &&
            (("function" === typeof FormData && e instanceof FormData) ||
              (ue(e.append) &&
                ("formdata" === (t = ne(e)) ||
                  ("object" === t &&
                    ue(e.toString) &&
                    "[object FormData]" === e.toString()))))
          );
        },
        isArrayBufferView: function (e) {
          return "undefined" !== typeof ArrayBuffer && ArrayBuffer.isView
            ? ArrayBuffer.isView(e)
            : e && e.buffer && se(e.buffer);
        },
        isString: le,
        isNumber: ce,
        isBoolean: function (e) {
          return !0 === e || !1 === e;
        },
        isObject: fe,
        isPlainObject: he,
        isUndefined: oe,
        isDate: de,
        isFile: pe,
        isBlob: ve,
        isRegExp: Me,
        isFunction: ue,
        isStream: function (e) {
          return fe(e) && ue(e.pipe);
        },
        isURLSearchParams: me,
        isTypedArray: we,
        isFileList: ge,
        forEach: ye,
        merge: function e() {
          for (
            var t = ((ke(this) && this) || {}).caseless,
              n = {},
              r = function (r, i) {
                var a = (t && be(n, i)) || i;
                he(n[a]) && he(r)
                  ? (n[a] = e(n[a], r))
                  : he(r)
                  ? (n[a] = e({}, r))
                  : ae(r)
                  ? (n[a] = r.slice())
                  : (n[a] = r);
              },
              i = 0,
              a = arguments.length;
            i < a;
            i++
          )
            arguments[i] && ye(arguments[i], r);
          return n;
        },
        extend: function (e, t, n) {
          return (
            ye(
              t,
              function (t, r) {
                n && ue(t) ? (e[r] = J(t, n)) : (e[r] = t);
              },
              {
                allOwnKeys: (arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : {}
                ).allOwnKeys,
              }
            ),
            e
          );
        },
        trim: function (e) {
          return e.trim
            ? e.trim()
            : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
        },
        stripBOM: function (e) {
          return 65279 === e.charCodeAt(0) && (e = e.slice(1)), e;
        },
        inherits: function (e, t, n, r) {
          (e.prototype = Object.create(t.prototype, r)),
            (e.prototype.constructor = e),
            Object.defineProperty(e, "super", { value: t.prototype }),
            n && Object.assign(e.prototype, n);
        },
        toFlatObject: function (e, t, n, r) {
          var i,
            a,
            o,
            s = {};
          if (((t = t || {}), null == e)) return t;
          do {
            for (a = (i = Object.getOwnPropertyNames(e)).length; a-- > 0; )
              (o = i[a]),
                (r && !r(o, e, t)) || s[o] || ((t[o] = e[o]), (s[o] = !0));
            e = !1 !== n && te(e);
          } while (e && (!n || n(e, t)) && e !== Object.prototype);
          return t;
        },
        kindOf: ne,
        kindOfTest: re,
        endsWith: function (e, t, n) {
          (e = String(e)),
            (void 0 === n || n > e.length) && (n = e.length),
            (n -= t.length);
          var r = e.indexOf(t, n);
          return -1 !== r && r === n;
        },
        toArray: function (e) {
          if (!e) return null;
          if (ae(e)) return e;
          var t = e.length;
          if (!ce(t)) return null;
          for (var n = new Array(t); t-- > 0; ) n[t] = e[t];
          return n;
        },
        forEachEntry: function (e, t) {
          for (
            var n, r = (e && e[Symbol.iterator]).call(e);
            (n = r.next()) && !n.done;

          ) {
            var i = n.value;
            t.call(e, i[0], i[1]);
          }
        },
        matchAll: function (e, t) {
          for (var n, r = []; null !== (n = e.exec(t)); ) r.push(n);
          return r;
        },
        isHTMLForm: Se,
        hasOwnProperty: Ee,
        hasOwnProp: Ee,
        reduceDescriptors: Ce,
        freezeMethods: function (e) {
          Ce(e, function (t, n) {
            if (ue(e) && -1 !== ["arguments", "caller", "callee"].indexOf(n))
              return !1;
            var r = e[n];
            ue(r) &&
              ((t.enumerable = !1),
              "writable" in t
                ? (t.writable = !1)
                : t.set ||
                  (t.set = function () {
                    throw Error("Can not rewrite read-only method '" + n + "'");
                  }));
          });
        },
        toObjectSet: function (e, t) {
          var n = {},
            r = function (e) {
              e.forEach(function (e) {
                n[e] = !0;
              });
            };
          return ae(e) ? r(e) : r(String(e).split(t)), n;
        },
        toCamelCase: function (e) {
          return e
            .toLowerCase()
            .replace(/[-_\s]([a-z\d])(\w*)/g, function (e, t, n) {
              return t.toUpperCase() + n;
            });
        },
        noop: function () {},
        toFiniteNumber: function (e, t) {
          return (e = +e), Number.isFinite(e) ? e : t;
        },
        findKey: be,
        global: xe,
        isContextDefined: ke,
        ALPHABET: Te,
        generateString: function () {
          for (
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 16,
              t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : Te.ALPHA_DIGIT,
              n = "",
              r = t.length;
            e--;

          )
            n += t[(Math.random() * r) | 0];
          return n;
        },
        isSpecCompliantForm: function (e) {
          return !!(
            e &&
            ue(e.append) &&
            "FormData" === e[Symbol.toStringTag] &&
            e[Symbol.iterator]
          );
        },
        toJSONObject: function (e) {
          var t = new Array(10);
          return (function e(n, r) {
            if (fe(n)) {
              if (t.indexOf(n) >= 0) return;
              if (!("toJSON" in n)) {
                t[r] = n;
                var i = ae(n) ? [] : {};
                return (
                  ye(n, function (t, n) {
                    var a = e(t, r + 1);
                    !oe(a) && (i[n] = a);
                  }),
                  (t[r] = void 0),
                  i
                );
              }
            }
            return n;
          })(e, 0);
        },
        isAsyncFn: De,
        isThenable: function (e) {
          return e && (fe(e) || ue(e)) && ue(e.then) && ue(e.catch);
        },
      };
    function Re(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function Ae(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, s(r.key), r);
      }
    }
    function Ne(e, t, n) {
      return (
        t && Ae(e.prototype, t),
        n && Ae(e, n),
        Object.defineProperty(e, "prototype", { writable: !1 }),
        e
      );
    }
    function ze(e, t, n, r, i) {
      Error.call(this),
        Error.captureStackTrace
          ? Error.captureStackTrace(this, this.constructor)
          : (this.stack = new Error().stack),
        (this.message = e),
        (this.name = "AxiosError"),
        t && (this.code = t),
        n && (this.config = n),
        r && (this.request = r),
        i && (this.response = i);
    }
    Le.inherits(ze, Error, {
      toJSON: function () {
        return {
          message: this.message,
          name: this.name,
          description: this.description,
          number: this.number,
          fileName: this.fileName,
          lineNumber: this.lineNumber,
          columnNumber: this.columnNumber,
          stack: this.stack,
          config: Le.toJSONObject(this.config),
          code: this.code,
          status:
            this.response && this.response.status ? this.response.status : null,
        };
      },
    });
    var Fe = ze.prototype,
      Ie = {};
    [
      "ERR_BAD_OPTION_VALUE",
      "ERR_BAD_OPTION",
      "ECONNABORTED",
      "ETIMEDOUT",
      "ERR_NETWORK",
      "ERR_FR_TOO_MANY_REDIRECTS",
      "ERR_DEPRECATED",
      "ERR_BAD_RESPONSE",
      "ERR_BAD_REQUEST",
      "ERR_CANCELED",
      "ERR_NOT_SUPPORT",
      "ERR_INVALID_URL",
    ].forEach(function (e) {
      Ie[e] = { value: e };
    }),
      Object.defineProperties(ze, Ie),
      Object.defineProperty(Fe, "isAxiosError", { value: !0 }),
      (ze.from = function (e, t, n, r, i, a) {
        var o = Object.create(Fe);
        return (
          Le.toFlatObject(
            e,
            o,
            function (e) {
              return e !== Error.prototype;
            },
            function (e) {
              return "isAxiosError" !== e;
            }
          ),
          ze.call(o, e.message, t, n, r, i),
          (o.cause = e),
          (o.name = e.name),
          a && Object.assign(o, a),
          o
        );
      });
    var je = ze;
    function Be(e) {
      return Le.isPlainObject(e) || Le.isArray(e);
    }
    function Ve(e) {
      return Le.endsWith(e, "[]") ? e.slice(0, -2) : e;
    }
    function We(e, t, n) {
      return e
        ? e
            .concat(t)
            .map(function (e, t) {
              return (e = Ve(e)), !n && t ? "[" + e + "]" : e;
            })
            .join(n ? "." : "")
        : t;
    }
    var He = Le.toFlatObject(Le, {}, null, function (e) {
      return /^is[A-Z]/.test(e);
    });
    var Ue = function (e, t, n) {
      if (!Le.isObject(e)) throw new TypeError("target must be an object");
      t = t || new FormData();
      var r = (n = Le.toFlatObject(
          n,
          { metaTokens: !0, dots: !1, indexes: !1 },
          !1,
          function (e, t) {
            return !Le.isUndefined(t[e]);
          }
        )).metaTokens,
        i = n.visitor || u,
        a = n.dots,
        o = n.indexes,
        s =
          (n.Blob || ("undefined" !== typeof Blob && Blob)) &&
          Le.isSpecCompliantForm(t);
      if (!Le.isFunction(i)) throw new TypeError("visitor must be a function");
      function l(e) {
        if (null === e) return "";
        if (Le.isDate(e)) return e.toISOString();
        if (!s && Le.isBlob(e))
          throw new je("Blob is not supported. Use a Buffer instead.");
        return Le.isArrayBuffer(e) || Le.isTypedArray(e)
          ? s && "function" === typeof Blob
            ? new Blob([e])
            : Buffer.from(e)
          : e;
      }
      function u(e, n, i) {
        var s = e;
        if (e && !i && "object" === typeof e)
          if (Le.endsWith(n, "{}"))
            (n = r ? n : n.slice(0, -2)), (e = JSON.stringify(e));
          else if (
            (Le.isArray(e) &&
              (function (e) {
                return Le.isArray(e) && !e.some(Be);
              })(e)) ||
            ((Le.isFileList(e) || Le.endsWith(n, "[]")) && (s = Le.toArray(e)))
          )
            return (
              (n = Ve(n)),
              s.forEach(function (e, r) {
                !Le.isUndefined(e) &&
                  null !== e &&
                  t.append(
                    !0 === o ? We([n], r, a) : null === o ? n : n + "[]",
                    l(e)
                  );
              }),
              !1
            );
        return !!Be(e) || (t.append(We(i, n, a), l(e)), !1);
      }
      var c = [],
        f = Object.assign(He, {
          defaultVisitor: u,
          convertValue: l,
          isVisitable: Be,
        });
      if (!Le.isObject(e)) throw new TypeError("data must be an object");
      return (
        (function e(n, r) {
          if (!Le.isUndefined(n)) {
            if (-1 !== c.indexOf(n))
              throw Error("Circular reference detected in " + r.join("."));
            c.push(n),
              Le.forEach(n, function (n, a) {
                !0 ===
                  (!(Le.isUndefined(n) || null === n) &&
                    i.call(t, n, Le.isString(a) ? a.trim() : a, r, f)) &&
                  e(n, r ? r.concat(a) : [a]);
              }),
              c.pop();
          }
        })(e),
        t
      );
    };
    function $e(e) {
      var t = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+",
        "%00": "\0",
      };
      return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (e) {
        return t[e];
      });
    }
    function Ye(e, t) {
      (this._pairs = []), e && Ue(e, this, t);
    }
    var qe = Ye.prototype;
    (qe.append = function (e, t) {
      this._pairs.push([e, t]);
    }),
      (qe.toString = function (e) {
        var t = e
          ? function (t) {
              return e.call(this, t, $e);
            }
          : $e;
        return this._pairs
          .map(function (e) {
            return t(e[0]) + "=" + t(e[1]);
          }, "")
          .join("&");
      });
    var Ke = Ye;
    function Qe(e) {
      return encodeURIComponent(e)
        .replace(/%3A/gi, ":")
        .replace(/%24/g, "$")
        .replace(/%2C/gi, ",")
        .replace(/%20/g, "+")
        .replace(/%5B/gi, "[")
        .replace(/%5D/gi, "]");
    }
    function Xe(e, t, n) {
      if (!t) return e;
      var r,
        i = (n && n.encode) || Qe,
        a = n && n.serialize;
      if (
        (r = a
          ? a(t, n)
          : Le.isURLSearchParams(t)
          ? t.toString()
          : new Ke(t, n).toString(i))
      ) {
        var o = e.indexOf("#");
        -1 !== o && (e = e.slice(0, o)),
          (e += (-1 === e.indexOf("?") ? "?" : "&") + r);
      }
      return e;
    }
    var Ge = (function () {
        function e() {
          Re(this, e), (this.handlers = []);
        }
        return (
          Ne(e, [
            {
              key: "use",
              value: function (e, t, n) {
                return (
                  this.handlers.push({
                    fulfilled: e,
                    rejected: t,
                    synchronous: !!n && n.synchronous,
                    runWhen: n ? n.runWhen : null,
                  }),
                  this.handlers.length - 1
                );
              },
            },
            {
              key: "eject",
              value: function (e) {
                this.handlers[e] && (this.handlers[e] = null);
              },
            },
            {
              key: "clear",
              value: function () {
                this.handlers && (this.handlers = []);
              },
            },
            {
              key: "forEach",
              value: function (e) {
                Le.forEach(this.handlers, function (t) {
                  null !== t && e(t);
                });
              },
            },
          ]),
          e
        );
      })(),
      Je = {
        silentJSONParsing: !0,
        forcedJSONParsing: !0,
        clarifyTimeoutError: !1,
      },
      Ze = {
        isBrowser: !0,
        classes: {
          URLSearchParams:
            "undefined" !== typeof URLSearchParams ? URLSearchParams : Ke,
          FormData: "undefined" !== typeof FormData ? FormData : null,
          Blob: "undefined" !== typeof Blob ? Blob : null,
        },
        isStandardBrowserEnv: (function () {
          var e;
          return (
            ("undefined" === typeof navigator ||
              ("ReactNative" !== (e = navigator.product) &&
                "NativeScript" !== e &&
                "NS" !== e)) &&
            "undefined" !== typeof window &&
            "undefined" !== typeof document
          );
        })(),
        isStandardBrowserWebWorkerEnv:
          "undefined" !== typeof WorkerGlobalScope &&
          self instanceof WorkerGlobalScope &&
          "function" === typeof self.importScripts,
        protocols: ["http", "https", "file", "blob", "url", "data"],
      };
    var et = function (e) {
        function t(e, n, r, i) {
          var a = e[i++],
            o = Number.isFinite(+a),
            s = i >= e.length;
          return (
            (a = !a && Le.isArray(r) ? r.length : a),
            s
              ? (Le.hasOwnProp(r, a) ? (r[a] = [r[a], n]) : (r[a] = n), !o)
              : ((r[a] && Le.isObject(r[a])) || (r[a] = []),
                t(e, n, r[a], i) &&
                  Le.isArray(r[a]) &&
                  (r[a] = (function (e) {
                    var t,
                      n,
                      r = {},
                      i = Object.keys(e),
                      a = i.length;
                    for (t = 0; t < a; t++) r[(n = i[t])] = e[n];
                    return r;
                  })(r[a])),
                !o)
          );
        }
        if (Le.isFormData(e) && Le.isFunction(e.entries)) {
          var n = {};
          return (
            Le.forEachEntry(e, function (e, r) {
              t(
                (function (e) {
                  return Le.matchAll(/\w+|\[(\w*)]/g, e).map(function (e) {
                    return "[]" === e[0] ? "" : e[1] || e[0];
                  });
                })(e),
                r,
                n,
                0
              );
            }),
            n
          );
        }
        return null;
      },
      tt = { "Content-Type": void 0 };
    var nt = {
      transitional: Je,
      adapter: ["xhr", "http"],
      transformRequest: [
        function (e, t) {
          var n,
            r = t.getContentType() || "",
            i = r.indexOf("application/json") > -1,
            a = Le.isObject(e);
          if (
            (a && Le.isHTMLForm(e) && (e = new FormData(e)), Le.isFormData(e))
          )
            return i && i ? JSON.stringify(et(e)) : e;
          if (
            Le.isArrayBuffer(e) ||
            Le.isBuffer(e) ||
            Le.isStream(e) ||
            Le.isFile(e) ||
            Le.isBlob(e)
          )
            return e;
          if (Le.isArrayBufferView(e)) return e.buffer;
          if (Le.isURLSearchParams(e))
            return (
              t.setContentType(
                "application/x-www-form-urlencoded;charset=utf-8",
                !1
              ),
              e.toString()
            );
          if (a) {
            if (r.indexOf("application/x-www-form-urlencoded") > -1)
              return (function (e, t) {
                return Ue(
                  e,
                  new Ze.classes.URLSearchParams(),
                  Object.assign(
                    {
                      visitor: function (e, t, n, r) {
                        return Ze.isNode && Le.isBuffer(e)
                          ? (this.append(t, e.toString("base64")), !1)
                          : r.defaultVisitor.apply(this, arguments);
                      },
                    },
                    t
                  )
                );
              })(e, this.formSerializer).toString();
            if (
              (n = Le.isFileList(e)) ||
              r.indexOf("multipart/form-data") > -1
            ) {
              var o = this.env && this.env.FormData;
              return Ue(
                n ? { "files[]": e } : e,
                o && new o(),
                this.formSerializer
              );
            }
          }
          return a || i
            ? (t.setContentType("application/json", !1),
              (function (e, t, n) {
                if (Le.isString(e))
                  try {
                    return (t || JSON.parse)(e), Le.trim(e);
                  } catch (r) {
                    if ("SyntaxError" !== r.name) throw r;
                  }
                return (n || JSON.stringify)(e);
              })(e))
            : e;
        },
      ],
      transformResponse: [
        function (e) {
          var t = this.transitional || nt.transitional,
            n = t && t.forcedJSONParsing,
            r = "json" === this.responseType;
          if (e && Le.isString(e) && ((n && !this.responseType) || r)) {
            var i = !(t && t.silentJSONParsing) && r;
            try {
              return JSON.parse(e);
            } catch (a) {
              if (i) {
                if ("SyntaxError" === a.name)
                  throw je.from(
                    a,
                    je.ERR_BAD_RESPONSE,
                    this,
                    null,
                    this.response
                  );
                throw a;
              }
            }
          }
          return e;
        },
      ],
      timeout: 0,
      xsrfCookieName: "XSRF-TOKEN",
      xsrfHeaderName: "X-XSRF-TOKEN",
      maxContentLength: -1,
      maxBodyLength: -1,
      env: { FormData: Ze.classes.FormData, Blob: Ze.classes.Blob },
      validateStatus: function (e) {
        return e >= 200 && e < 300;
      },
      headers: { common: { Accept: "application/json, text/plain, */*" } },
    };
    Le.forEach(["delete", "get", "head"], function (e) {
      nt.headers[e] = {};
    }),
      Le.forEach(["post", "put", "patch"], function (e) {
        nt.headers[e] = Le.merge(tt);
      });
    var rt = nt,
      it = Le.toObjectSet([
        "age",
        "authorization",
        "content-length",
        "content-type",
        "etag",
        "expires",
        "from",
        "host",
        "if-modified-since",
        "if-unmodified-since",
        "last-modified",
        "location",
        "max-forwards",
        "proxy-authorization",
        "referer",
        "retry-after",
        "user-agent",
      ]),
      at = Symbol("internals");
    function ot(e) {
      return e && String(e).trim().toLowerCase();
    }
    function st(e) {
      return !1 === e || null == e ? e : Le.isArray(e) ? e.map(st) : String(e);
    }
    function lt(e, t, n, r, i) {
      return Le.isFunction(r)
        ? r.call(this, t, n)
        : (i && (t = n),
          Le.isString(t)
            ? Le.isString(r)
              ? -1 !== t.indexOf(r)
              : Le.isRegExp(r)
              ? r.test(t)
              : void 0
            : void 0);
    }
    var ut = (function (e, t) {
      function n(e) {
        Re(this, n), e && this.set(e);
      }
      return (
        Ne(
          n,
          [
            {
              key: "set",
              value: function (e, t, n) {
                var r = this;
                function i(e, t, n) {
                  var i = ot(t);
                  if (!i)
                    throw new Error("header name must be a non-empty string");
                  var a = Le.findKey(r, i);
                  (!a ||
                    void 0 === r[a] ||
                    !0 === n ||
                    (void 0 === n && !1 !== r[a])) &&
                    (r[a || t] = st(e));
                }
                var a = function (e, t) {
                  return Le.forEach(e, function (e, n) {
                    return i(e, n, t);
                  });
                };
                return (
                  Le.isPlainObject(e) || e instanceof this.constructor
                    ? a(e, t)
                    : Le.isString(e) &&
                      (e = e.trim()) &&
                      !/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim())
                    ? a(
                        (function (e) {
                          var t,
                            n,
                            r,
                            i = {};
                          return (
                            e &&
                              e.split("\n").forEach(function (e) {
                                (r = e.indexOf(":")),
                                  (t = e.substring(0, r).trim().toLowerCase()),
                                  (n = e.substring(r + 1).trim()),
                                  !t ||
                                    (i[t] && it[t]) ||
                                    ("set-cookie" === t
                                      ? i[t]
                                        ? i[t].push(n)
                                        : (i[t] = [n])
                                      : (i[t] = i[t] ? i[t] + ", " + n : n));
                              }),
                            i
                          );
                        })(e),
                        t
                      )
                    : null != e && i(t, e, n),
                  this
                );
              },
            },
            {
              key: "get",
              value: function (e, t) {
                if ((e = ot(e))) {
                  var n = Le.findKey(this, e);
                  if (n) {
                    var r = this[n];
                    if (!t) return r;
                    if (!0 === t)
                      return (function (e) {
                        for (
                          var t,
                            n = Object.create(null),
                            r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
                          (t = r.exec(e));

                        )
                          n[t[1]] = t[2];
                        return n;
                      })(r);
                    if (Le.isFunction(t)) return t.call(this, r, n);
                    if (Le.isRegExp(t)) return t.exec(r);
                    throw new TypeError(
                      "parser must be boolean|regexp|function"
                    );
                  }
                }
              },
            },
            {
              key: "has",
              value: function (e, t) {
                if ((e = ot(e))) {
                  var n = Le.findKey(this, e);
                  return !(
                    !n ||
                    void 0 === this[n] ||
                    (t && !lt(0, this[n], n, t))
                  );
                }
                return !1;
              },
            },
            {
              key: "delete",
              value: function (e, t) {
                var n = this,
                  r = !1;
                function i(e) {
                  if ((e = ot(e))) {
                    var i = Le.findKey(n, e);
                    !i || (t && !lt(0, n[i], i, t)) || (delete n[i], (r = !0));
                  }
                }
                return Le.isArray(e) ? e.forEach(i) : i(e), r;
              },
            },
            {
              key: "clear",
              value: function (e) {
                for (var t = Object.keys(this), n = t.length, r = !1; n--; ) {
                  var i = t[n];
                  (e && !lt(0, this[i], i, e, !0)) ||
                    (delete this[i], (r = !0));
                }
                return r;
              },
            },
            {
              key: "normalize",
              value: function (e) {
                var t = this,
                  n = {};
                return (
                  Le.forEach(this, function (r, i) {
                    var a = Le.findKey(n, i);
                    if (a) return (t[a] = st(r)), void delete t[i];
                    var o = e
                      ? (function (e) {
                          return e
                            .trim()
                            .toLowerCase()
                            .replace(/([a-z\d])(\w*)/g, function (e, t, n) {
                              return t.toUpperCase() + n;
                            });
                        })(i)
                      : String(i).trim();
                    o !== i && delete t[i], (t[o] = st(r)), (n[o] = !0);
                  }),
                  this
                );
              },
            },
            {
              key: "concat",
              value: function () {
                for (
                  var e, t = arguments.length, n = new Array(t), r = 0;
                  r < t;
                  r++
                )
                  n[r] = arguments[r];
                return (e = this.constructor).concat.apply(e, [this].concat(n));
              },
            },
            {
              key: "toJSON",
              value: function (e) {
                var t = Object.create(null);
                return (
                  Le.forEach(this, function (n, r) {
                    null != n &&
                      !1 !== n &&
                      (t[r] = e && Le.isArray(n) ? n.join(", ") : n);
                  }),
                  t
                );
              },
            },
            {
              key: Symbol.iterator,
              value: function () {
                return Object.entries(this.toJSON())[Symbol.iterator]();
              },
            },
            {
              key: "toString",
              value: function () {
                return Object.entries(this.toJSON())
                  .map(function (e) {
                    var t = a(e, 2);
                    return t[0] + ": " + t[1];
                  })
                  .join("\n");
              },
            },
            {
              key: Symbol.toStringTag,
              get: function () {
                return "AxiosHeaders";
              },
            },
          ],
          [
            {
              key: "from",
              value: function (e) {
                return e instanceof this ? e : new this(e);
              },
            },
            {
              key: "concat",
              value: function (e) {
                for (
                  var t = new this(e),
                    n = arguments.length,
                    r = new Array(n > 1 ? n - 1 : 0),
                    i = 1;
                  i < n;
                  i++
                )
                  r[i - 1] = arguments[i];
                return (
                  r.forEach(function (e) {
                    return t.set(e);
                  }),
                  t
                );
              },
            },
            {
              key: "accessor",
              value: function (e) {
                var t = (this[at] = this[at] = { accessors: {} }).accessors,
                  n = this.prototype;
                function r(e) {
                  var r = ot(e);
                  t[r] ||
                    (!(function (e, t) {
                      var n = Le.toCamelCase(" " + t);
                      ["get", "set", "has"].forEach(function (r) {
                        Object.defineProperty(e, r + n, {
                          value: function (e, n, i) {
                            return this[r].call(this, t, e, n, i);
                          },
                          configurable: !0,
                        });
                      });
                    })(n, e),
                    (t[r] = !0));
                }
                return Le.isArray(e) ? e.forEach(r) : r(e), this;
              },
            },
          ]
        ),
        n
      );
    })();
    ut.accessor([
      "Content-Type",
      "Content-Length",
      "Accept",
      "Accept-Encoding",
      "User-Agent",
      "Authorization",
    ]),
      Le.freezeMethods(ut.prototype),
      Le.freezeMethods(ut);
    var ct = ut;
    function ft(e, t) {
      var n = this || rt,
        r = t || n,
        i = ct.from(r.headers),
        a = r.data;
      return (
        Le.forEach(e, function (e) {
          a = e.call(n, a, i.normalize(), t ? t.status : void 0);
        }),
        i.normalize(),
        a
      );
    }
    function ht(e) {
      return !(!e || !e.__CANCEL__);
    }
    function dt(e, t, n) {
      je.call(this, null == e ? "canceled" : e, je.ERR_CANCELED, t, n),
        (this.name = "CanceledError");
    }
    Le.inherits(dt, je, { __CANCEL__: !0 });
    var pt = dt;
    var vt = Ze.isStandardBrowserEnv
      ? {
          write: function (e, t, n, r, i, a) {
            var o = [];
            o.push(e + "=" + encodeURIComponent(t)),
              Le.isNumber(n) && o.push("expires=" + new Date(n).toGMTString()),
              Le.isString(r) && o.push("path=" + r),
              Le.isString(i) && o.push("domain=" + i),
              !0 === a && o.push("secure"),
              (document.cookie = o.join("; "));
          },
          read: function (e) {
            var t = document.cookie.match(
              new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
            );
            return t ? decodeURIComponent(t[3]) : null;
          },
          remove: function (e) {
            this.write(e, "", Date.now() - 864e5);
          },
        }
      : {
          write: function () {},
          read: function () {
            return null;
          },
          remove: function () {},
        };
    function gt(e, t) {
      return e && !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)
        ? (function (e, t) {
            return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
          })(e, t)
        : t;
    }
    var mt = Ze.isStandardBrowserEnv
      ? (function () {
          var e,
            t = /(msie|trident)/i.test(navigator.userAgent),
            n = document.createElement("a");
          function r(e) {
            var r = e;
            return (
              t && (n.setAttribute("href", r), (r = n.href)),
              n.setAttribute("href", r),
              {
                href: n.href,
                protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
                host: n.host,
                search: n.search ? n.search.replace(/^\?/, "") : "",
                hash: n.hash ? n.hash.replace(/^#/, "") : "",
                hostname: n.hostname,
                port: n.port,
                pathname:
                  "/" === n.pathname.charAt(0) ? n.pathname : "/" + n.pathname,
              }
            );
          }
          return (
            (e = r(window.location.href)),
            function (t) {
              var n = Le.isString(t) ? r(t) : t;
              return n.protocol === e.protocol && n.host === e.host;
            }
          );
        })()
      : function () {
          return !0;
        };
    var yt = function (e, t) {
      e = e || 10;
      var n,
        r = new Array(e),
        i = new Array(e),
        a = 0,
        o = 0;
      return (
        (t = void 0 !== t ? t : 1e3),
        function (s) {
          var l = Date.now(),
            u = i[o];
          n || (n = l), (r[a] = s), (i[a] = l);
          for (var c = o, f = 0; c !== a; ) (f += r[c++]), (c %= e);
          if (((a = (a + 1) % e) === o && (o = (o + 1) % e), !(l - n < t))) {
            var h = u && l - u;
            return h ? Math.round((1e3 * f) / h) : void 0;
          }
        }
      );
    };
    function bt(e, t) {
      var n = 0,
        r = yt(50, 250);
      return function (i) {
        var a = i.loaded,
          o = i.lengthComputable ? i.total : void 0,
          s = a - n,
          l = r(s);
        n = a;
        var u = {
          loaded: a,
          total: o,
          progress: o ? a / o : void 0,
          bytes: s,
          rate: l || void 0,
          estimated: l && o && a <= o ? (o - a) / l : void 0,
          event: i,
        };
        (u[t ? "download" : "upload"] = !0), e(u);
      };
    }
    var xt =
        "undefined" !== typeof XMLHttpRequest &&
        function (e) {
          return new Promise(function (t, n) {
            var r,
              i = e.data,
              a = ct.from(e.headers).normalize(),
              o = e.responseType;
            function s() {
              e.cancelToken && e.cancelToken.unsubscribe(r),
                e.signal && e.signal.removeEventListener("abort", r);
            }
            Le.isFormData(i) &&
              (Ze.isStandardBrowserEnv || Ze.isStandardBrowserWebWorkerEnv
                ? a.setContentType(!1)
                : a.setContentType("multipart/form-data;", !1));
            var l = new XMLHttpRequest();
            if (e.auth) {
              var u = e.auth.username || "",
                c = e.auth.password
                  ? unescape(encodeURIComponent(e.auth.password))
                  : "";
              a.set("Authorization", "Basic " + btoa(u + ":" + c));
            }
            var f = gt(e.baseURL, e.url);
            function h() {
              if (l) {
                var r = ct.from(
                  "getAllResponseHeaders" in l && l.getAllResponseHeaders()
                );
                !(function (e, t, n) {
                  var r = n.config.validateStatus;
                  n.status && r && !r(n.status)
                    ? t(
                        new je(
                          "Request failed with status code " + n.status,
                          [je.ERR_BAD_REQUEST, je.ERR_BAD_RESPONSE][
                            Math.floor(n.status / 100) - 4
                          ],
                          n.config,
                          n.request,
                          n
                        )
                      )
                    : e(n);
                })(
                  function (e) {
                    t(e), s();
                  },
                  function (e) {
                    n(e), s();
                  },
                  {
                    data:
                      o && "text" !== o && "json" !== o
                        ? l.response
                        : l.responseText,
                    status: l.status,
                    statusText: l.statusText,
                    headers: r,
                    config: e,
                    request: l,
                  }
                ),
                  (l = null);
              }
            }
            if (
              (l.open(
                e.method.toUpperCase(),
                Xe(f, e.params, e.paramsSerializer),
                !0
              ),
              (l.timeout = e.timeout),
              "onloadend" in l
                ? (l.onloadend = h)
                : (l.onreadystatechange = function () {
                    l &&
                      4 === l.readyState &&
                      (0 !== l.status ||
                        (l.responseURL &&
                          0 === l.responseURL.indexOf("file:"))) &&
                      setTimeout(h);
                  }),
              (l.onabort = function () {
                l &&
                  (n(new je("Request aborted", je.ECONNABORTED, e, l)),
                  (l = null));
              }),
              (l.onerror = function () {
                n(new je("Network Error", je.ERR_NETWORK, e, l)), (l = null);
              }),
              (l.ontimeout = function () {
                var t = e.timeout
                    ? "timeout of " + e.timeout + "ms exceeded"
                    : "timeout exceeded",
                  r = e.transitional || Je;
                e.timeoutErrorMessage && (t = e.timeoutErrorMessage),
                  n(
                    new je(
                      t,
                      r.clarifyTimeoutError ? je.ETIMEDOUT : je.ECONNABORTED,
                      e,
                      l
                    )
                  ),
                  (l = null);
              }),
              Ze.isStandardBrowserEnv)
            ) {
              var d =
                (e.withCredentials || mt(f)) &&
                e.xsrfCookieName &&
                vt.read(e.xsrfCookieName);
              d && a.set(e.xsrfHeaderName, d);
            }
            void 0 === i && a.setContentType(null),
              "setRequestHeader" in l &&
                Le.forEach(a.toJSON(), function (e, t) {
                  l.setRequestHeader(t, e);
                }),
              Le.isUndefined(e.withCredentials) ||
                (l.withCredentials = !!e.withCredentials),
              o && "json" !== o && (l.responseType = e.responseType),
              "function" === typeof e.onDownloadProgress &&
                l.addEventListener("progress", bt(e.onDownloadProgress, !0)),
              "function" === typeof e.onUploadProgress &&
                l.upload &&
                l.upload.addEventListener("progress", bt(e.onUploadProgress)),
              (e.cancelToken || e.signal) &&
                ((r = function (t) {
                  l &&
                    (n(!t || t.type ? new pt(null, e, l) : t),
                    l.abort(),
                    (l = null));
                }),
                e.cancelToken && e.cancelToken.subscribe(r),
                e.signal &&
                  (e.signal.aborted
                    ? r()
                    : e.signal.addEventListener("abort", r)));
            var p = (function (e) {
              var t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
              return (t && t[1]) || "";
            })(f);
            p && -1 === Ze.protocols.indexOf(p)
              ? n(
                  new je(
                    "Unsupported protocol " + p + ":",
                    je.ERR_BAD_REQUEST,
                    e
                  )
                )
              : l.send(i || null);
          });
        },
      kt = { http: null, xhr: xt };
    Le.forEach(kt, function (e, t) {
      if (e) {
        try {
          Object.defineProperty(e, "name", { value: t });
        } catch (n) {}
        Object.defineProperty(e, "adapterName", { value: t });
      }
    });
    var _t = function (e) {
      for (
        var t, n, r = (e = Le.isArray(e) ? e : [e]).length, i = 0;
        i < r && ((t = e[i]), !(n = Le.isString(t) ? kt[t.toLowerCase()] : t));
        i++
      );
      if (!n) {
        if (!1 === n)
          throw new je(
            "Adapter ".concat(t, " is not supported by the environment"),
            "ERR_NOT_SUPPORT"
          );
        throw new Error(
          Le.hasOwnProp(kt, t)
            ? "Adapter '".concat(t, "' is not available in the build")
            : "Unknown adapter '".concat(t, "'")
        );
      }
      if (!Le.isFunction(n)) throw new TypeError("adapter is not a function");
      return n;
    };
    function wt(e) {
      if (
        (e.cancelToken && e.cancelToken.throwIfRequested(),
        e.signal && e.signal.aborted)
      )
        throw new pt(null, e);
    }
    function St(e) {
      return (
        wt(e),
        (e.headers = ct.from(e.headers)),
        (e.data = ft.call(e, e.transformRequest)),
        -1 !== ["post", "put", "patch"].indexOf(e.method) &&
          e.headers.setContentType("application/x-www-form-urlencoded", !1),
        _t(e.adapter || rt.adapter)(e).then(
          function (t) {
            return (
              wt(e),
              (t.data = ft.call(e, e.transformResponse, t)),
              (t.headers = ct.from(t.headers)),
              t
            );
          },
          function (t) {
            return (
              ht(t) ||
                (wt(e),
                t &&
                  t.response &&
                  ((t.response.data = ft.call(
                    e,
                    e.transformResponse,
                    t.response
                  )),
                  (t.response.headers = ct.from(t.response.headers)))),
              Promise.reject(t)
            );
          }
        )
      );
    }
    var Et = function (e) {
      return e instanceof ct ? e.toJSON() : e;
    };
    function Mt(e, t) {
      t = t || {};
      var n = {};
      function r(e, t, n) {
        return Le.isPlainObject(e) && Le.isPlainObject(t)
          ? Le.merge.call({ caseless: n }, e, t)
          : Le.isPlainObject(t)
          ? Le.merge({}, t)
          : Le.isArray(t)
          ? t.slice()
          : t;
      }
      function i(e, t, n) {
        return Le.isUndefined(t)
          ? Le.isUndefined(e)
            ? void 0
            : r(void 0, e, n)
          : r(e, t, n);
      }
      function a(e, t) {
        if (!Le.isUndefined(t)) return r(void 0, t);
      }
      function o(e, t) {
        return Le.isUndefined(t)
          ? Le.isUndefined(e)
            ? void 0
            : r(void 0, e)
          : r(void 0, t);
      }
      function s(n, i, a) {
        return a in t ? r(n, i) : a in e ? r(void 0, n) : void 0;
      }
      var l = {
        url: a,
        method: a,
        data: a,
        baseURL: o,
        transformRequest: o,
        transformResponse: o,
        paramsSerializer: o,
        timeout: o,
        timeoutMessage: o,
        withCredentials: o,
        adapter: o,
        responseType: o,
        xsrfCookieName: o,
        xsrfHeaderName: o,
        onUploadProgress: o,
        onDownloadProgress: o,
        decompress: o,
        maxContentLength: o,
        maxBodyLength: o,
        beforeRedirect: o,
        transport: o,
        httpAgent: o,
        httpsAgent: o,
        cancelToken: o,
        socketPath: o,
        responseEncoding: o,
        validateStatus: s,
        headers: function (e, t) {
          return i(Et(e), Et(t), !0);
        },
      };
      return (
        Le.forEach(Object.keys(Object.assign({}, e, t)), function (r) {
          var a = l[r] || i,
            o = a(e[r], t[r], r);
          (Le.isUndefined(o) && a !== s) || (n[r] = o);
        }),
        n
      );
    }
    var Ct = "1.4.0",
      Pt = {};
    ["object", "boolean", "number", "function", "string", "symbol"].forEach(
      function (e, t) {
        Pt[e] = function (n) {
          return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
        };
      }
    );
    var Ot = {};
    Pt.transitional = function (e, t, n) {
      function r(e, t) {
        return (
          "[Axios v1.4.0] Transitional option '" +
          e +
          "'" +
          t +
          (n ? ". " + n : "")
        );
      }
      return function (n, i, a) {
        if (!1 === e)
          throw new je(
            r(i, " has been removed" + (t ? " in " + t : "")),
            je.ERR_DEPRECATED
          );
        return (
          t &&
            !Ot[i] &&
            ((Ot[i] = !0),
            console.warn(
              r(
                i,
                " has been deprecated since v" +
                  t +
                  " and will be removed in the near future"
              )
            )),
          !e || e(n, i, a)
        );
      };
    };
    var Tt = {
        assertOptions: function (e, t, n) {
          if ("object" !== typeof e)
            throw new je("options must be an object", je.ERR_BAD_OPTION_VALUE);
          for (var r = Object.keys(e), i = r.length; i-- > 0; ) {
            var a = r[i],
              o = t[a];
            if (o) {
              var s = e[a],
                l = void 0 === s || o(s, a, e);
              if (!0 !== l)
                throw new je(
                  "option " + a + " must be " + l,
                  je.ERR_BAD_OPTION_VALUE
                );
            } else if (!0 !== n)
              throw new je("Unknown option " + a, je.ERR_BAD_OPTION);
          }
        },
        validators: Pt,
      },
      Dt = Tt.validators,
      Lt = (function () {
        function e(t) {
          Re(this, e),
            (this.defaults = t),
            (this.interceptors = { request: new Ge(), response: new Ge() });
        }
        return (
          Ne(e, [
            {
              key: "request",
              value: function (e, t) {
                "string" === typeof e ? ((t = t || {}).url = e) : (t = e || {});
                var n,
                  r = (t = Mt(this.defaults, t)),
                  i = r.transitional,
                  a = r.paramsSerializer,
                  o = r.headers;
                void 0 !== i &&
                  Tt.assertOptions(
                    i,
                    {
                      silentJSONParsing: Dt.transitional(Dt.boolean),
                      forcedJSONParsing: Dt.transitional(Dt.boolean),
                      clarifyTimeoutError: Dt.transitional(Dt.boolean),
                    },
                    !1
                  ),
                  null != a &&
                    (Le.isFunction(a)
                      ? (t.paramsSerializer = { serialize: a })
                      : Tt.assertOptions(
                          a,
                          { encode: Dt.function, serialize: Dt.function },
                          !0
                        )),
                  (t.method = (
                    t.method ||
                    this.defaults.method ||
                    "get"
                  ).toLowerCase()),
                  (n = o && Le.merge(o.common, o[t.method])) &&
                    Le.forEach(
                      [
                        "delete",
                        "get",
                        "head",
                        "post",
                        "put",
                        "patch",
                        "common",
                      ],
                      function (e) {
                        delete o[e];
                      }
                    ),
                  (t.headers = ct.concat(n, o));
                var s = [],
                  l = !0;
                this.interceptors.request.forEach(function (e) {
                  ("function" === typeof e.runWhen && !1 === e.runWhen(t)) ||
                    ((l = l && e.synchronous),
                    s.unshift(e.fulfilled, e.rejected));
                });
                var u,
                  c = [];
                this.interceptors.response.forEach(function (e) {
                  c.push(e.fulfilled, e.rejected);
                });
                var f,
                  h = 0;
                if (!l) {
                  var d = [St.bind(this), void 0];
                  for (
                    d.unshift.apply(d, s),
                      d.push.apply(d, c),
                      f = d.length,
                      u = Promise.resolve(t);
                    h < f;

                  )
                    u = u.then(d[h++], d[h++]);
                  return u;
                }
                f = s.length;
                var p = t;
                for (h = 0; h < f; ) {
                  var v = s[h++],
                    g = s[h++];
                  try {
                    p = v(p);
                  } catch (m) {
                    g.call(this, m);
                    break;
                  }
                }
                try {
                  u = St.call(this, p);
                } catch (m) {
                  return Promise.reject(m);
                }
                for (h = 0, f = c.length; h < f; ) u = u.then(c[h++], c[h++]);
                return u;
              },
            },
            {
              key: "getUri",
              value: function (e) {
                return Xe(
                  gt((e = Mt(this.defaults, e)).baseURL, e.url),
                  e.params,
                  e.paramsSerializer
                );
              },
            },
          ]),
          e
        );
      })();
    Le.forEach(["delete", "get", "head", "options"], function (e) {
      Lt.prototype[e] = function (t, n) {
        return this.request(
          Mt(n || {}, { method: e, url: t, data: (n || {}).data })
        );
      };
    }),
      Le.forEach(["post", "put", "patch"], function (e) {
        function t(t) {
          return function (n, r, i) {
            return this.request(
              Mt(i || {}, {
                method: e,
                headers: t ? { "Content-Type": "multipart/form-data" } : {},
                url: n,
                data: r,
              })
            );
          };
        }
        (Lt.prototype[e] = t()), (Lt.prototype[e + "Form"] = t(!0));
      });
    var Rt = Lt,
      At = (function () {
        function e(t) {
          if ((Re(this, e), "function" !== typeof t))
            throw new TypeError("executor must be a function.");
          var n;
          this.promise = new Promise(function (e) {
            n = e;
          });
          var r = this;
          this.promise.then(function (e) {
            if (r._listeners) {
              for (var t = r._listeners.length; t-- > 0; ) r._listeners[t](e);
              r._listeners = null;
            }
          }),
            (this.promise.then = function (e) {
              var t,
                n = new Promise(function (e) {
                  r.subscribe(e), (t = e);
                }).then(e);
              return (
                (n.cancel = function () {
                  r.unsubscribe(t);
                }),
                n
              );
            }),
            t(function (e, t, i) {
              r.reason || ((r.reason = new pt(e, t, i)), n(r.reason));
            });
        }
        return (
          Ne(
            e,
            [
              {
                key: "throwIfRequested",
                value: function () {
                  if (this.reason) throw this.reason;
                },
              },
              {
                key: "subscribe",
                value: function (e) {
                  this.reason
                    ? e(this.reason)
                    : this._listeners
                    ? this._listeners.push(e)
                    : (this._listeners = [e]);
                },
              },
              {
                key: "unsubscribe",
                value: function (e) {
                  if (this._listeners) {
                    var t = this._listeners.indexOf(e);
                    -1 !== t && this._listeners.splice(t, 1);
                  }
                },
              },
            ],
            [
              {
                key: "source",
                value: function () {
                  var t;
                  return {
                    token: new e(function (e) {
                      t = e;
                    }),
                    cancel: t,
                  };
                },
              },
            ]
          ),
          e
        );
      })(),
      Nt = At;
    var zt = {
      Continue: 100,
      SwitchingProtocols: 101,
      Processing: 102,
      EarlyHints: 103,
      Ok: 200,
      Created: 201,
      Accepted: 202,
      NonAuthoritativeInformation: 203,
      NoContent: 204,
      ResetContent: 205,
      PartialContent: 206,
      MultiStatus: 207,
      AlreadyReported: 208,
      ImUsed: 226,
      MultipleChoices: 300,
      MovedPermanently: 301,
      Found: 302,
      SeeOther: 303,
      NotModified: 304,
      UseProxy: 305,
      Unused: 306,
      TemporaryRedirect: 307,
      PermanentRedirect: 308,
      BadRequest: 400,
      Unauthorized: 401,
      PaymentRequired: 402,
      Forbidden: 403,
      NotFound: 404,
      MethodNotAllowed: 405,
      NotAcceptable: 406,
      ProxyAuthenticationRequired: 407,
      RequestTimeout: 408,
      Conflict: 409,
      Gone: 410,
      LengthRequired: 411,
      PreconditionFailed: 412,
      PayloadTooLarge: 413,
      UriTooLong: 414,
      UnsupportedMediaType: 415,
      RangeNotSatisfiable: 416,
      ExpectationFailed: 417,
      ImATeapot: 418,
      MisdirectedRequest: 421,
      UnprocessableEntity: 422,
      Locked: 423,
      FailedDependency: 424,
      TooEarly: 425,
      UpgradeRequired: 426,
      PreconditionRequired: 428,
      TooManyRequests: 429,
      RequestHeaderFieldsTooLarge: 431,
      UnavailableForLegalReasons: 451,
      InternalServerError: 500,
      NotImplemented: 501,
      BadGateway: 502,
      ServiceUnavailable: 503,
      GatewayTimeout: 504,
      HttpVersionNotSupported: 505,
      VariantAlsoNegotiates: 506,
      InsufficientStorage: 507,
      LoopDetected: 508,
      NotExtended: 510,
      NetworkAuthenticationRequired: 511,
    };
    Object.entries(zt).forEach(function (e) {
      var t = a(e, 2),
        n = t[0],
        r = t[1];
      zt[r] = n;
    });
    var Ft = zt;
    var It = (function e(t) {
      var n = new Rt(t),
        r = J(Rt.prototype.request, n);
      return (
        Le.extend(r, Rt.prototype, n, { allOwnKeys: !0 }),
        Le.extend(r, n, null, { allOwnKeys: !0 }),
        (r.create = function (n) {
          return e(Mt(t, n));
        }),
        r
      );
    })(rt);
    (It.Axios = Rt),
      (It.CanceledError = pt),
      (It.CancelToken = Nt),
      (It.isCancel = ht),
      (It.VERSION = Ct),
      (It.toFormData = Ue),
      (It.AxiosError = je),
      (It.Cancel = It.CanceledError),
      (It.all = function (e) {
        return Promise.all(e);
      }),
      (It.spread = function (e) {
        return function (t) {
          return e.apply(null, t);
        };
      }),
      (It.isAxiosError = function (e) {
        return Le.isObject(e) && !0 === e.isAxiosError;
      }),
      (It.mergeConfig = Mt),
      (It.AxiosHeaders = ct),
      (It.formToJSON = function (e) {
        return et(Le.isHTMLForm(e) ? new FormData(e) : e);
      }),
      (It.HttpStatusCode = Ft),
      (It.default = It);
    var jt = It,
      Bt = function () {
        var t = a((0, e.useState)([]), 2),
          n = t[0],
          r = t[1],
          i = a((0, e.useState)(!0), 2),
          o = i[0],
          s = i[1];
        return (
          (0, e.useEffect)(function () {
            var e = (function () {
              var e = G(
                Q().mark(function e() {
                  var t;
                  return Q().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              (e.next = 3),
                              jt.get("http://localhost:3000/allcountriesinfo")
                            );
                          case 3:
                            (t = e.sent), r(t.data), s(!1), (e.next = 12);
                            break;
                          case 8:
                            (e.prev = 8),
                              (e.t0 = e.catch(0)),
                              console.error(e.t0),
                              s(!1);
                          case 12:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 8]]
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
            e();
          }, []),
          (0, q.jsxs)("div", {
            className: "m-5",
            children: [
              (0, q.jsx)("h2", {
                className: "my-4 text-center",
                children: "All Countries Info",
              }),
              o
                ? (0, q.jsx)("p", { children: "Loading all countries info..." })
                : (0, q.jsxs)("table", {
                    className: "table my-4",
                    children: [
                      (0, q.jsx)("thead", {
                        children: (0, q.jsxs)("tr", {
                          children: [
                            (0, q.jsx)("th", { children: "Country" }),
                            (0, q.jsx)("th", { children: "Cases" }),
                            (0, q.jsx)("th", { children: "Deaths" }),
                            (0, q.jsx)("th", { children: "Today's Cases" }),
                            (0, q.jsx)("th", { children: "Today's Deaths" }),
                          ],
                        }),
                      }),
                      (0, q.jsx)("tbody", {
                        children: n.map(function (e) {
                          return (0,
                          q.jsxs)("tr", { children: [(0, q.jsx)("td", { children: e.country }), (0, q.jsx)("td", { children: e.cases }), (0, q.jsx)("td", { children: e.deaths }), (0, q.jsx)("td", { children: e.todayCases }), (0, q.jsx)("td", { children: e.todayDeaths })] }, e.country);
                        }),
                      }),
                    ],
                  }),
            ],
          })
        );
      },
      Vt = function (t) {
        var n = t.onCountrySelect,
          r = a((0, e.useState)([]), 2),
          i = r[0],
          o = r[1];
        (0, e.useEffect)(function () {
          var e = (function () {
            var e = G(
              Q().mark(function e() {
                var t;
                return Q().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0),
                            (e.next = 3),
                            jt.get("http://localhost:3000/allcountriesinfo")
                          );
                        case 3:
                          (t = e.sent), o(t.data), (e.next = 10);
                          break;
                        case 7:
                          (e.prev = 7),
                            (e.t0 = e.catch(0)),
                            console.error(e.t0);
                        case 10:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[0, 7]]
                );
              })
            );
            return function () {
              return e.apply(this, arguments);
            };
          })();
          e();
        }, []);
        return (0, q.jsx)("div", {
          className: "my-4 mt-5",
          children: (0, q.jsxs)("div", {
            className: "column m-5",
            children: [
              (0, q.jsx)("div", {
                className: "col-md-6",
                children: (0, q.jsx)("label", {
                  htmlFor: "countrySelect",
                  className: "form-label",
                  children: "Select a country",
                }),
              }),
              (0, q.jsx)("div", {
                className: "col-md-6",
                children: (0, q.jsxs)("select", {
                  id: "countrySelect",
                  className: "form-select",
                  style: { width: "680px" },
                  onChange: function (e) {
                    var t = e.target.value;
                    n(t);
                  },
                  children: [
                    (0, q.jsx)("option", {
                      value: "",
                      children: "Select a country",
                    }),
                    i.map(function (e) {
                      return (0,
                      q.jsx)("option", { value: e.country, children: e.country }, e.country);
                    }),
                  ],
                }),
              }),
            ],
          }),
        });
      };
    function Wt(e) {
      if (void 0 === e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return e;
    }
    function Ht(e) {
      return (
        (Ht = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            }),
        Ht(e)
      );
    }
    function Ut() {
      return (
        (Ut =
          "undefined" !== typeof Reflect && Reflect.get
            ? Reflect.get.bind()
            : function (e, t, n) {
                var r = (function (e, t) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(e, t) &&
                    null !== (e = Ht(e));

                  );
                  return e;
                })(e, t);
                if (r) {
                  var i = Object.getOwnPropertyDescriptor(r, t);
                  return i.get
                    ? i.get.call(arguments.length < 3 ? e : n)
                    : i.value;
                }
              }),
        Ut.apply(this, arguments)
      );
    }
    function $t(e, t) {
      return (
        ($t = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (e, t) {
              return (e.__proto__ = t), e;
            }),
        $t(e, t)
      );
    }
    function Yt(e, t) {
      if ("function" !== typeof t && null !== t)
        throw new TypeError(
          "Super expression must either be null or a function"
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: { value: e, writable: !0, configurable: !0 },
      })),
        Object.defineProperty(e, "prototype", { writable: !1 }),
        t && $t(e, t);
    }
    function qt(e) {
      var t = (function () {
        if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" === typeof Proxy) return !0;
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      })();
      return function () {
        var n,
          r = Ht(e);
        if (t) {
          var i = Ht(this).constructor;
          n = Reflect.construct(r, arguments, i);
        } else n = r.apply(this, arguments);
        return (function (e, t) {
          if (t && ("object" === o(t) || "function" === typeof t)) return t;
          if (void 0 !== t)
            throw new TypeError(
              "Derived constructors may only return object or undefined"
            );
          return Wt(e);
        })(this, n);
      };
    }
    function Kt(e, t) {
      var n =
        ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
        e["@@iterator"];
      if (!n) {
        if (
          Array.isArray(e) ||
          (n = i(e)) ||
          (t && e && "number" === typeof e.length)
        ) {
          n && (e = n);
          var r = 0,
            a = function () {};
          return {
            s: a,
            n: function () {
              return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
            },
            e: function (e) {
              throw e;
            },
            f: a,
          };
        }
        throw new TypeError(
          "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      }
      var o,
        s = !0,
        l = !1;
      return {
        s: function () {
          n = n.call(e);
        },
        n: function () {
          var e = n.next();
          return (s = e.done), e;
        },
        e: function (e) {
          (l = !0), (o = e);
        },
        f: function () {
          try {
            s || null == n.return || n.return();
          } finally {
            if (l) throw o;
          }
        },
      };
    }
    function Qt(e) {
      return (
        (function (e) {
          if (Array.isArray(e)) return r(e);
        })(e) ||
        (function (e) {
          if (
            ("undefined" !== typeof Symbol && null != e[Symbol.iterator]) ||
            null != e["@@iterator"]
          )
            return Array.from(e);
        })(e) ||
        i(e) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function Xt(e) {
      return (e + 0.5) | 0;
    }
    var Gt = function (e, t, n) {
      return Math.max(Math.min(e, n), t);
    };
    function Jt(e) {
      return Gt(Xt(2.55 * e), 0, 255);
    }
    function Zt(e) {
      return Gt(Xt(255 * e), 0, 255);
    }
    function en(e) {
      return Gt(Xt(e / 2.55) / 100, 0, 1);
    }
    function tn(e) {
      return Gt(Xt(100 * e), 0, 100);
    }
    var nn = {
        0: 0,
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        7: 7,
        8: 8,
        9: 9,
        A: 10,
        B: 11,
        C: 12,
        D: 13,
        E: 14,
        F: 15,
        a: 10,
        b: 11,
        c: 12,
        d: 13,
        e: 14,
        f: 15,
      },
      rn = Qt("0123456789ABCDEF"),
      an = function (e) {
        return rn[15 & e];
      },
      on = function (e) {
        return rn[(240 & e) >> 4] + rn[15 & e];
      },
      sn = function (e) {
        return (240 & e) >> 4 === (15 & e);
      };
    function ln(e) {
      var t = (function (e) {
        return sn(e.r) && sn(e.g) && sn(e.b) && sn(e.a);
      })(e)
        ? an
        : on;
      return e
        ? "#" +
            t(e.r) +
            t(e.g) +
            t(e.b) +
            (function (e, t) {
              return e < 255 ? t(e) : "";
            })(e.a, t)
        : void 0;
    }
    var un =
      /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
    function cn(e, t, n) {
      var r = t * Math.min(n, 1 - n),
        i = function (t) {
          var i =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : (t + e / 30) % 12;
          return n - r * Math.max(Math.min(i - 3, 9 - i, 1), -1);
        };
      return [i(0), i(8), i(4)];
    }
    function fn(e, t, n) {
      var r = function (r) {
        var i =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : (r + e / 60) % 6;
        return n - n * t * Math.max(Math.min(i, 4 - i, 1), 0);
      };
      return [r(5), r(3), r(1)];
    }
    function hn(e, t, n) {
      var r,
        i = cn(e, 1, 0.5);
      for (t + n > 1 && ((t *= r = 1 / (t + n)), (n *= r)), r = 0; r < 3; r++)
        (i[r] *= 1 - t - n), (i[r] += t);
      return i;
    }
    function dn(e) {
      var t,
        n,
        r,
        i = e.r / 255,
        a = e.g / 255,
        o = e.b / 255,
        s = Math.max(i, a, o),
        l = Math.min(i, a, o),
        u = (s + l) / 2;
      return (
        s !== l &&
          ((r = s - l),
          (n = u > 0.5 ? r / (2 - s - l) : r / (s + l)),
          (t = (function (e, t, n, r, i) {
            return e === i
              ? (t - n) / r + (t < n ? 6 : 0)
              : t === i
              ? (n - e) / r + 2
              : (e - t) / r + 4;
          })(i, a, o, r, s)),
          (t = 60 * t + 0.5)),
        [0 | t, n || 0, u]
      );
    }
    function pn(e, t, n, r) {
      return (Array.isArray(t) ? e(t[0], t[1], t[2]) : e(t, n, r)).map(Zt);
    }
    function vn(e, t, n) {
      return pn(cn, e, t, n);
    }
    function gn(e) {
      return ((e % 360) + 360) % 360;
    }
    function mn(e) {
      var t,
        n = un.exec(e),
        r = 255;
      if (n) {
        n[5] !== t && (r = n[6] ? Jt(+n[5]) : Zt(+n[5]));
        var i = gn(+n[2]),
          a = +n[3] / 100,
          o = +n[4] / 100;
        return {
          r: (t =
            "hwb" === n[1]
              ? (function (e, t, n) {
                  return pn(hn, e, t, n);
                })(i, a, o)
              : "hsv" === n[1]
              ? (function (e, t, n) {
                  return pn(fn, e, t, n);
                })(i, a, o)
              : vn(i, a, o))[0],
          g: t[1],
          b: t[2],
          a: r,
        };
      }
    }
    var yn,
      bn = {
        x: "dark",
        Z: "light",
        Y: "re",
        X: "blu",
        W: "gr",
        V: "medium",
        U: "slate",
        A: "ee",
        T: "ol",
        S: "or",
        B: "ra",
        C: "lateg",
        D: "ights",
        R: "in",
        Q: "turquois",
        E: "hi",
        P: "ro",
        O: "al",
        N: "le",
        M: "de",
        L: "yello",
        F: "en",
        K: "ch",
        G: "arks",
        H: "ea",
        I: "ightg",
        J: "wh",
      },
      xn = {
        OiceXe: "f0f8ff",
        antiquewEte: "faebd7",
        aqua: "ffff",
        aquamarRe: "7fffd4",
        azuY: "f0ffff",
        beige: "f5f5dc",
        bisque: "ffe4c4",
        black: "0",
        blanKedOmond: "ffebcd",
        Xe: "ff",
        XeviTet: "8a2be2",
        bPwn: "a52a2a",
        burlywood: "deb887",
        caMtXe: "5f9ea0",
        KartYuse: "7fff00",
        KocTate: "d2691e",
        cSO: "ff7f50",
        cSnflowerXe: "6495ed",
        cSnsilk: "fff8dc",
        crimson: "dc143c",
        cyan: "ffff",
        xXe: "8b",
        xcyan: "8b8b",
        xgTMnPd: "b8860b",
        xWay: "a9a9a9",
        xgYF: "6400",
        xgYy: "a9a9a9",
        xkhaki: "bdb76b",
        xmagFta: "8b008b",
        xTivegYF: "556b2f",
        xSange: "ff8c00",
        xScEd: "9932cc",
        xYd: "8b0000",
        xsOmon: "e9967a",
        xsHgYF: "8fbc8f",
        xUXe: "483d8b",
        xUWay: "2f4f4f",
        xUgYy: "2f4f4f",
        xQe: "ced1",
        xviTet: "9400d3",
        dAppRk: "ff1493",
        dApskyXe: "bfff",
        dimWay: "696969",
        dimgYy: "696969",
        dodgerXe: "1e90ff",
        fiYbrick: "b22222",
        flSOwEte: "fffaf0",
        foYstWAn: "228b22",
        fuKsia: "ff00ff",
        gaRsbSo: "dcdcdc",
        ghostwEte: "f8f8ff",
        gTd: "ffd700",
        gTMnPd: "daa520",
        Way: "808080",
        gYF: "8000",
        gYFLw: "adff2f",
        gYy: "808080",
        honeyMw: "f0fff0",
        hotpRk: "ff69b4",
        RdianYd: "cd5c5c",
        Rdigo: "4b0082",
        ivSy: "fffff0",
        khaki: "f0e68c",
        lavFMr: "e6e6fa",
        lavFMrXsh: "fff0f5",
        lawngYF: "7cfc00",
        NmoncEffon: "fffacd",
        ZXe: "add8e6",
        ZcSO: "f08080",
        Zcyan: "e0ffff",
        ZgTMnPdLw: "fafad2",
        ZWay: "d3d3d3",
        ZgYF: "90ee90",
        ZgYy: "d3d3d3",
        ZpRk: "ffb6c1",
        ZsOmon: "ffa07a",
        ZsHgYF: "20b2aa",
        ZskyXe: "87cefa",
        ZUWay: "778899",
        ZUgYy: "778899",
        ZstAlXe: "b0c4de",
        ZLw: "ffffe0",
        lime: "ff00",
        limegYF: "32cd32",
        lRF: "faf0e6",
        magFta: "ff00ff",
        maPon: "800000",
        VaquamarRe: "66cdaa",
        VXe: "cd",
        VScEd: "ba55d3",
        VpurpN: "9370db",
        VsHgYF: "3cb371",
        VUXe: "7b68ee",
        VsprRggYF: "fa9a",
        VQe: "48d1cc",
        VviTetYd: "c71585",
        midnightXe: "191970",
        mRtcYam: "f5fffa",
        mistyPse: "ffe4e1",
        moccasR: "ffe4b5",
        navajowEte: "ffdead",
        navy: "80",
        Tdlace: "fdf5e6",
        Tive: "808000",
        TivedBb: "6b8e23",
        Sange: "ffa500",
        SangeYd: "ff4500",
        ScEd: "da70d6",
        pOegTMnPd: "eee8aa",
        pOegYF: "98fb98",
        pOeQe: "afeeee",
        pOeviTetYd: "db7093",
        papayawEp: "ffefd5",
        pHKpuff: "ffdab9",
        peru: "cd853f",
        pRk: "ffc0cb",
        plum: "dda0dd",
        powMrXe: "b0e0e6",
        purpN: "800080",
        YbeccapurpN: "663399",
        Yd: "ff0000",
        Psybrown: "bc8f8f",
        PyOXe: "4169e1",
        saddNbPwn: "8b4513",
        sOmon: "fa8072",
        sandybPwn: "f4a460",
        sHgYF: "2e8b57",
        sHshell: "fff5ee",
        siFna: "a0522d",
        silver: "c0c0c0",
        skyXe: "87ceeb",
        UXe: "6a5acd",
        UWay: "708090",
        UgYy: "708090",
        snow: "fffafa",
        sprRggYF: "ff7f",
        stAlXe: "4682b4",
        tan: "d2b48c",
        teO: "8080",
        tEstN: "d8bfd8",
        tomato: "ff6347",
        Qe: "40e0d0",
        viTet: "ee82ee",
        JHt: "f5deb3",
        wEte: "ffffff",
        wEtesmoke: "f5f5f5",
        Lw: "ffff00",
        LwgYF: "9acd32",
      };
    function kn(e) {
      yn ||
        ((yn = (function () {
          var e,
            t,
            n,
            r,
            i,
            a = {},
            o = Object.keys(xn),
            s = Object.keys(bn);
          for (e = 0; e < o.length; e++) {
            for (r = i = o[e], t = 0; t < s.length; t++)
              (n = s[t]), (i = i.replace(n, bn[n]));
            (n = parseInt(xn[r], 16)),
              (a[i] = [(n >> 16) & 255, (n >> 8) & 255, 255 & n]);
          }
          return a;
        })()).transparent = [0, 0, 0, 0]);
      var t = yn[e.toLowerCase()];
      return t && { r: t[0], g: t[1], b: t[2], a: 4 === t.length ? t[3] : 255 };
    }
    var _n =
      /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
    var wn = function (e) {
        return e <= 0.0031308
          ? 12.92 * e
          : 1.055 * Math.pow(e, 1 / 2.4) - 0.055;
      },
      Sn = function (e) {
        return e <= 0.04045 ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4);
      };
    function En(e, t, n) {
      if (e) {
        var r = dn(e);
        (r[t] = Math.max(0, Math.min(r[t] + r[t] * n, 0 === t ? 360 : 1))),
          (r = vn(r)),
          (e.r = r[0]),
          (e.g = r[1]),
          (e.b = r[2]);
      }
    }
    function Mn(e, t) {
      return e ? Object.assign(t || {}, e) : e;
    }
    function Cn(e) {
      var t = { r: 0, g: 0, b: 0, a: 255 };
      return (
        Array.isArray(e)
          ? e.length >= 3 &&
            ((t = { r: e[0], g: e[1], b: e[2], a: 255 }),
            e.length > 3 && (t.a = Zt(e[3])))
          : ((t = Mn(e, { r: 0, g: 0, b: 0, a: 1 })).a = Zt(t.a)),
        t
      );
    }
    function Pn(e) {
      return "r" === e.charAt(0)
        ? (function (e) {
            var t,
              n,
              r,
              i = _n.exec(e),
              a = 255;
            if (i) {
              if (i[7] !== t) {
                var o = +i[7];
                a = i[8] ? Jt(o) : Gt(255 * o, 0, 255);
              }
              return (
                (t = +i[1]),
                (n = +i[3]),
                (r = +i[5]),
                {
                  r: (t = 255 & (i[2] ? Jt(t) : Gt(t, 0, 255))),
                  g: (n = 255 & (i[4] ? Jt(n) : Gt(n, 0, 255))),
                  b: (r = 255 & (i[6] ? Jt(r) : Gt(r, 0, 255))),
                  a: a,
                }
              );
            }
          })(e)
        : mn(e);
    }
    var On = (function () {
      function e(t) {
        if ((Re(this, e), t instanceof e)) return t;
        var n,
          r = typeof t;
        "object" === r
          ? (n = Cn(t))
          : "string" === r &&
            (n =
              (function (e) {
                var t,
                  n = e.length;
                return (
                  "#" === e[0] &&
                    (4 === n || 5 === n
                      ? (t = {
                          r: 255 & (17 * nn[e[1]]),
                          g: 255 & (17 * nn[e[2]]),
                          b: 255 & (17 * nn[e[3]]),
                          a: 5 === n ? 17 * nn[e[4]] : 255,
                        })
                      : (7 !== n && 9 !== n) ||
                        (t = {
                          r: (nn[e[1]] << 4) | nn[e[2]],
                          g: (nn[e[3]] << 4) | nn[e[4]],
                          b: (nn[e[5]] << 4) | nn[e[6]],
                          a: 9 === n ? (nn[e[7]] << 4) | nn[e[8]] : 255,
                        })),
                  t
                );
              })(t) ||
              kn(t) ||
              Pn(t)),
          (this._rgb = n),
          (this._valid = !!n);
      }
      return (
        Ne(e, [
          {
            key: "valid",
            get: function () {
              return this._valid;
            },
          },
          {
            key: "rgb",
            get: function () {
              var e = Mn(this._rgb);
              return e && (e.a = en(e.a)), e;
            },
            set: function (e) {
              this._rgb = Cn(e);
            },
          },
          {
            key: "rgbString",
            value: function () {
              return this._valid
                ? (e = this._rgb) &&
                    (e.a < 255
                      ? "rgba("
                          .concat(e.r, ", ")
                          .concat(e.g, ", ")
                          .concat(e.b, ", ")
                          .concat(en(e.a), ")")
                      : "rgb("
                          .concat(e.r, ", ")
                          .concat(e.g, ", ")
                          .concat(e.b, ")"))
                : void 0;
              var e;
            },
          },
          {
            key: "hexString",
            value: function () {
              return this._valid ? ln(this._rgb) : void 0;
            },
          },
          {
            key: "hslString",
            value: function () {
              return this._valid
                ? (function (e) {
                    if (e) {
                      var t = dn(e),
                        n = t[0],
                        r = tn(t[1]),
                        i = tn(t[2]);
                      return e.a < 255
                        ? "hsla("
                            .concat(n, ", ")
                            .concat(r, "%, ")
                            .concat(i, "%, ")
                            .concat(en(e.a), ")")
                        : "hsl("
                            .concat(n, ", ")
                            .concat(r, "%, ")
                            .concat(i, "%)");
                    }
                  })(this._rgb)
                : void 0;
            },
          },
          {
            key: "mix",
            value: function (e, t) {
              if (e) {
                var n,
                  r = this.rgb,
                  i = e.rgb,
                  a = t === n ? 0.5 : t,
                  o = 2 * a - 1,
                  s = r.a - i.a,
                  l = ((o * s === -1 ? o : (o + s) / (1 + o * s)) + 1) / 2;
                (n = 1 - l),
                  (r.r = 255 & (l * r.r + n * i.r + 0.5)),
                  (r.g = 255 & (l * r.g + n * i.g + 0.5)),
                  (r.b = 255 & (l * r.b + n * i.b + 0.5)),
                  (r.a = a * r.a + (1 - a) * i.a),
                  (this.rgb = r);
              }
              return this;
            },
          },
          {
            key: "interpolate",
            value: function (e, t) {
              return (
                e &&
                  (this._rgb = (function (e, t, n) {
                    var r = Sn(en(e.r)),
                      i = Sn(en(e.g)),
                      a = Sn(en(e.b));
                    return {
                      r: Zt(wn(r + n * (Sn(en(t.r)) - r))),
                      g: Zt(wn(i + n * (Sn(en(t.g)) - i))),
                      b: Zt(wn(a + n * (Sn(en(t.b)) - a))),
                      a: e.a + n * (t.a - e.a),
                    };
                  })(this._rgb, e._rgb, t)),
                this
              );
            },
          },
          {
            key: "clone",
            value: function () {
              return new e(this.rgb);
            },
          },
          {
            key: "alpha",
            value: function (e) {
              return (this._rgb.a = Zt(e)), this;
            },
          },
          {
            key: "clearer",
            value: function (e) {
              return (this._rgb.a *= 1 - e), this;
            },
          },
          {
            key: "greyscale",
            value: function () {
              var e = this._rgb,
                t = Xt(0.3 * e.r + 0.59 * e.g + 0.11 * e.b);
              return (e.r = e.g = e.b = t), this;
            },
          },
          {
            key: "opaquer",
            value: function (e) {
              return (this._rgb.a *= 1 + e), this;
            },
          },
          {
            key: "negate",
            value: function () {
              var e = this._rgb;
              return (
                (e.r = 255 - e.r), (e.g = 255 - e.g), (e.b = 255 - e.b), this
              );
            },
          },
          {
            key: "lighten",
            value: function (e) {
              return En(this._rgb, 2, e), this;
            },
          },
          {
            key: "darken",
            value: function (e) {
              return En(this._rgb, 2, -e), this;
            },
          },
          {
            key: "saturate",
            value: function (e) {
              return En(this._rgb, 1, e), this;
            },
          },
          {
            key: "desaturate",
            value: function (e) {
              return En(this._rgb, 1, -e), this;
            },
          },
          {
            key: "rotate",
            value: function (e) {
              return (
                (function (e, t) {
                  var n = dn(e);
                  (n[0] = gn(n[0] + t)),
                    (n = vn(n)),
                    (e.r = n[0]),
                    (e.g = n[1]),
                    (e.b = n[2]);
                })(this._rgb, e),
                this
              );
            },
          },
        ]),
        e
      );
    })();
    function Tn() {}
    var Dn = (function () {
      var e = 0;
      return function () {
        return e++;
      };
    })();
    function Ln(e) {
      return null === e || "undefined" === typeof e;
    }
    function Rn(e) {
      if (Array.isArray && Array.isArray(e)) return !0;
      var t = Object.prototype.toString.call(e);
      return "[object" === t.slice(0, 7) && "Array]" === t.slice(-6);
    }
    function An(e) {
      return (
        null !== e && "[object Object]" === Object.prototype.toString.call(e)
      );
    }
    function Nn(e) {
      return ("number" === typeof e || e instanceof Number) && isFinite(+e);
    }
    function zn(e, t) {
      return Nn(e) ? e : t;
    }
    function Fn(e, t) {
      return "undefined" === typeof e ? t : e;
    }
    var In = function (e, t) {
      return "string" === typeof e && e.endsWith("%")
        ? (parseFloat(e) / 100) * t
        : +e;
    };
    function jn(e, t, n) {
      if (e && "function" === typeof e.call) return e.apply(n, t);
    }
    function Bn(e, t, n, r) {
      var i, a, o;
      if (Rn(e))
        if (((a = e.length), r))
          for (i = a - 1; i >= 0; i--) t.call(n, e[i], i);
        else for (i = 0; i < a; i++) t.call(n, e[i], i);
      else if (An(e))
        for (a = (o = Object.keys(e)).length, i = 0; i < a; i++)
          t.call(n, e[o[i]], o[i]);
    }
    function Vn(e, t) {
      var n, r, i, a;
      if (!e || !t || e.length !== t.length) return !1;
      for (n = 0, r = e.length; n < r; ++n)
        if (
          ((i = e[n]),
          (a = t[n]),
          i.datasetIndex !== a.datasetIndex || i.index !== a.index)
        )
          return !1;
      return !0;
    }
    function Wn(e) {
      if (Rn(e)) return e.map(Wn);
      if (An(e)) {
        for (
          var t = Object.create(null), n = Object.keys(e), r = n.length, i = 0;
          i < r;
          ++i
        )
          t[n[i]] = Wn(e[n[i]]);
        return t;
      }
      return e;
    }
    function Hn(e) {
      return -1 === ["__proto__", "prototype", "constructor"].indexOf(e);
    }
    function Un(e, t, n, r) {
      if (Hn(e)) {
        var i = t[e],
          a = n[e];
        An(i) && An(a) ? $n(i, a, r) : (t[e] = Wn(a));
      }
    }
    function $n(e, t, n) {
      var r = Rn(t) ? t : [t],
        i = r.length;
      if (!An(e)) return e;
      for (var a, o = (n = n || {}).merger || Un, s = 0; s < i; ++s)
        if (An((a = r[s])))
          for (var l = Object.keys(a), u = 0, c = l.length; u < c; ++u)
            o(l[u], e, a, n);
      return e;
    }
    function Yn(e, t) {
      return $n(e, t, { merger: qn });
    }
    function qn(e, t, n) {
      if (Hn(e)) {
        var r = t[e],
          i = n[e];
        An(r) && An(i)
          ? Yn(r, i)
          : Object.prototype.hasOwnProperty.call(t, e) || (t[e] = Wn(i));
      }
    }
    var Kn = {
      "": function (e) {
        return e;
      },
      x: function (e) {
        return e.x;
      },
      y: function (e) {
        return e.y;
      },
    };
    function Qn(e) {
      var t = (function (e) {
        var t,
          n = [],
          r = "",
          i = Kt(e.split("."));
        try {
          for (i.s(); !(t = i.n()).done; )
            (r += t.value).endsWith("\\")
              ? (r = r.slice(0, -1) + ".")
              : (n.push(r), (r = ""));
        } catch (a) {
          i.e(a);
        } finally {
          i.f();
        }
        return n;
      })(e);
      return function (e) {
        var n,
          r = Kt(t);
        try {
          for (r.s(); !(n = r.n()).done; ) {
            var i = n.value;
            if ("" === i) break;
            e = e && e[i];
          }
        } catch (a) {
          r.e(a);
        } finally {
          r.f();
        }
        return e;
      };
    }
    function Xn(e, t) {
      return (Kn[t] || (Kn[t] = Qn(t)))(e);
    }
    function Gn(e) {
      return e.charAt(0).toUpperCase() + e.slice(1);
    }
    var Jn = function (e) {
        return "undefined" !== typeof e;
      },
      Zn = function (e) {
        return "function" === typeof e;
      },
      er = function (e, t) {
        if (e.size !== t.size) return !1;
        var n,
          r = Kt(e);
        try {
          for (r.s(); !(n = r.n()).done; ) {
            var i = n.value;
            if (!t.has(i)) return !1;
          }
        } catch (a) {
          r.e(a);
        } finally {
          r.f();
        }
        return !0;
      };
    var tr = Math.PI,
      nr = 2 * tr,
      rr = nr + tr,
      ir = Number.POSITIVE_INFINITY,
      ar = tr / 180,
      or = tr / 2,
      sr = tr / 4,
      lr = (2 * tr) / 3,
      ur = Math.log10,
      cr = Math.sign;
    function fr(e, t, n) {
      return Math.abs(e - t) < n;
    }
    function hr(e) {
      var t = Math.round(e);
      e = fr(e, t, e / 1e3) ? t : e;
      var n = Math.pow(10, Math.floor(ur(e))),
        r = e / n;
      return (r <= 1 ? 1 : r <= 2 ? 2 : r <= 5 ? 5 : 10) * n;
    }
    function dr(e) {
      return !isNaN(parseFloat(e)) && isFinite(e);
    }
    function pr(e, t, n) {
      var r, i, a;
      for (r = 0, i = e.length; r < i; r++)
        (a = e[r][n]),
          isNaN(a) ||
            ((t.min = Math.min(t.min, a)), (t.max = Math.max(t.max, a)));
    }
    function vr(e) {
      return e * (tr / 180);
    }
    function gr(e) {
      return e * (180 / tr);
    }
    function mr(e) {
      if (Nn(e)) {
        for (var t = 1, n = 0; Math.round(e * t) / t !== e; ) (t *= 10), n++;
        return n;
      }
    }
    function yr(e, t) {
      var n = t.x - e.x,
        r = t.y - e.y,
        i = Math.sqrt(n * n + r * r),
        a = Math.atan2(r, n);
      return a < -0.5 * tr && (a += nr), { angle: a, distance: i };
    }
    function br(e, t) {
      return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
    }
    function xr(e, t) {
      return ((e - t + rr) % nr) - tr;
    }
    function kr(e) {
      return ((e % nr) + nr) % nr;
    }
    function _r(e, t, n, r) {
      var i = kr(e),
        a = kr(t),
        o = kr(n),
        s = kr(a - i),
        l = kr(o - i),
        u = kr(i - a),
        c = kr(i - o);
      return i === a || i === o || (r && a === o) || (s > l && u < c);
    }
    function wr(e, t, n) {
      return Math.max(t, Math.min(n, e));
    }
    function Sr(e, t, n) {
      var r =
        arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1e-6;
      return e >= Math.min(t, n) - r && e <= Math.max(t, n) + r;
    }
    function Er(e, t, n) {
      n =
        n ||
        function (n) {
          return e[n] < t;
        };
      for (var r, i = e.length - 1, a = 0; i - a > 1; )
        n((r = (a + i) >> 1)) ? (a = r) : (i = r);
      return { lo: a, hi: i };
    }
    var Mr = function (e, t, n, r) {
        return Er(
          e,
          n,
          r
            ? function (r) {
                var i = e[r][t];
                return i < n || (i === n && e[r + 1][t] === n);
              }
            : function (r) {
                return e[r][t] < n;
              }
        );
      },
      Cr = function (e, t, n) {
        return Er(e, n, function (r) {
          return e[r][t] >= n;
        });
      };
    var Pr = ["push", "pop", "shift", "splice", "unshift"];
    function Or(e, t) {
      var n = e._chartjs;
      if (n) {
        var r = n.listeners,
          i = r.indexOf(t);
        -1 !== i && r.splice(i, 1),
          r.length > 0 ||
            (Pr.forEach(function (t) {
              delete e[t];
            }),
            delete e._chartjs);
      }
    }
    function Tr(e) {
      var t = new Set(e);
      return t.size === e.length ? e : Array.from(t);
    }
    var Dr =
      "undefined" === typeof window
        ? function (e) {
            return e();
          }
        : window.requestAnimationFrame;
    function Lr(e, t) {
      var n = [],
        r = !1;
      return function () {
        for (var i = arguments.length, a = new Array(i), o = 0; o < i; o++)
          a[o] = arguments[o];
        (n = a),
          r ||
            ((r = !0),
            Dr.call(window, function () {
              (r = !1), e.apply(t, n);
            }));
      };
    }
    var Rr = function (e) {
        return "start" === e ? "left" : "end" === e ? "right" : "center";
      },
      Ar = function (e, t, n) {
        return "start" === e ? t : "end" === e ? n : (t + n) / 2;
      };
    function Nr(e, t, n) {
      var r = t.length,
        i = 0,
        a = r;
      if (e._sorted) {
        var o = e.iScale,
          s = e._parsed,
          l = o.axis,
          u = o.getUserBounds(),
          c = u.min,
          f = u.max,
          h = u.minDefined,
          d = u.maxDefined;
        h &&
          (i = wr(
            Math.min(
              Mr(s, o.axis, c).lo,
              n ? r : Mr(t, l, o.getPixelForValue(c)).lo
            ),
            0,
            r - 1
          )),
          (a = d
            ? wr(
                Math.max(
                  Mr(s, o.axis, f, !0).hi + 1,
                  n ? 0 : Mr(t, l, o.getPixelForValue(f), !0).hi + 1
                ),
                i,
                r
              ) - i
            : r - i);
      }
      return { start: i, count: a };
    }
    function zr(e) {
      var t = e.xScale,
        n = e.yScale,
        r = e._scaleRanges,
        i = { xmin: t.min, xmax: t.max, ymin: n.min, ymax: n.max };
      if (!r) return (e._scaleRanges = i), !0;
      var a =
        r.xmin !== t.min ||
        r.xmax !== t.max ||
        r.ymin !== n.min ||
        r.ymax !== n.max;
      return Object.assign(r, i), a;
    }
    var Fr = function (e) {
        return 0 === e || 1 === e;
      },
      Ir = function (e, t, n) {
        return -Math.pow(2, 10 * (e -= 1)) * Math.sin(((e - t) * nr) / n);
      },
      jr = function (e, t, n) {
        return Math.pow(2, -10 * e) * Math.sin(((e - t) * nr) / n) + 1;
      },
      Br = {
        linear: function (e) {
          return e;
        },
        easeInQuad: function (e) {
          return e * e;
        },
        easeOutQuad: function (e) {
          return -e * (e - 2);
        },
        easeInOutQuad: function (e) {
          return (e /= 0.5) < 1 ? 0.5 * e * e : -0.5 * (--e * (e - 2) - 1);
        },
        easeInCubic: function (e) {
          return e * e * e;
        },
        easeOutCubic: function (e) {
          return (e -= 1) * e * e + 1;
        },
        easeInOutCubic: function (e) {
          return (e /= 0.5) < 1
            ? 0.5 * e * e * e
            : 0.5 * ((e -= 2) * e * e + 2);
        },
        easeInQuart: function (e) {
          return e * e * e * e;
        },
        easeOutQuart: function (e) {
          return -((e -= 1) * e * e * e - 1);
        },
        easeInOutQuart: function (e) {
          return (e /= 0.5) < 1
            ? 0.5 * e * e * e * e
            : -0.5 * ((e -= 2) * e * e * e - 2);
        },
        easeInQuint: function (e) {
          return e * e * e * e * e;
        },
        easeOutQuint: function (e) {
          return (e -= 1) * e * e * e * e + 1;
        },
        easeInOutQuint: function (e) {
          return (e /= 0.5) < 1
            ? 0.5 * e * e * e * e * e
            : 0.5 * ((e -= 2) * e * e * e * e + 2);
        },
        easeInSine: function (e) {
          return 1 - Math.cos(e * or);
        },
        easeOutSine: function (e) {
          return Math.sin(e * or);
        },
        easeInOutSine: function (e) {
          return -0.5 * (Math.cos(tr * e) - 1);
        },
        easeInExpo: function (e) {
          return 0 === e ? 0 : Math.pow(2, 10 * (e - 1));
        },
        easeOutExpo: function (e) {
          return 1 === e ? 1 : 1 - Math.pow(2, -10 * e);
        },
        easeInOutExpo: function (e) {
          return Fr(e)
            ? e
            : e < 0.5
            ? 0.5 * Math.pow(2, 10 * (2 * e - 1))
            : 0.5 * (2 - Math.pow(2, -10 * (2 * e - 1)));
        },
        easeInCirc: function (e) {
          return e >= 1 ? e : -(Math.sqrt(1 - e * e) - 1);
        },
        easeOutCirc: function (e) {
          return Math.sqrt(1 - (e -= 1) * e);
        },
        easeInOutCirc: function (e) {
          return (e /= 0.5) < 1
            ? -0.5 * (Math.sqrt(1 - e * e) - 1)
            : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
        },
        easeInElastic: function (e) {
          return Fr(e) ? e : Ir(e, 0.075, 0.3);
        },
        easeOutElastic: function (e) {
          return Fr(e) ? e : jr(e, 0.075, 0.3);
        },
        easeInOutElastic: function (e) {
          var t = 0.1125;
          return Fr(e)
            ? e
            : e < 0.5
            ? 0.5 * Ir(2 * e, t, 0.45)
            : 0.5 + 0.5 * jr(2 * e - 1, t, 0.45);
        },
        easeInBack: function (e) {
          var t = 1.70158;
          return e * e * ((t + 1) * e - t);
        },
        easeOutBack: function (e) {
          var t = 1.70158;
          return (e -= 1) * e * ((t + 1) * e + t) + 1;
        },
        easeInOutBack: function (e) {
          var t = 1.70158;
          return (e /= 0.5) < 1
            ? e * e * ((1 + (t *= 1.525)) * e - t) * 0.5
            : 0.5 * ((e -= 2) * e * ((1 + (t *= 1.525)) * e + t) + 2);
        },
        easeInBounce: function (e) {
          return 1 - Br.easeOutBounce(1 - e);
        },
        easeOutBounce: function (e) {
          var t = 7.5625,
            n = 2.75;
          return e < 1 / n
            ? t * e * e
            : e < 2 / n
            ? t * (e -= 1.5 / n) * e + 0.75
            : e < 2.5 / n
            ? t * (e -= 2.25 / n) * e + 0.9375
            : t * (e -= 2.625 / n) * e + 0.984375;
        },
        easeInOutBounce: function (e) {
          return e < 0.5
            ? 0.5 * Br.easeInBounce(2 * e)
            : 0.5 * Br.easeOutBounce(2 * e - 1) + 0.5;
        },
      };
    function Vr(e) {
      if (e && "object" === typeof e) {
        var t = e.toString();
        return (
          "[object CanvasPattern]" === t || "[object CanvasGradient]" === t
        );
      }
      return !1;
    }
    function Wr(e) {
      return Vr(e) ? e : new On(e);
    }
    function Hr(e) {
      return Vr(e) ? e : new On(e).saturate(0.5).darken(0.1).hexString();
    }
    var Ur = ["x", "y", "borderWidth", "radius", "tension"],
      $r = ["color", "borderColor", "backgroundColor"];
    var Yr = new Map();
    function qr(e, t, n) {
      return (function (e, t) {
        t = t || {};
        var n = e + JSON.stringify(t),
          r = Yr.get(n);
        return r || ((r = new Intl.NumberFormat(e, t)), Yr.set(n, r)), r;
      })(t, n).format(e);
    }
    var Kr = {
      values: function (e) {
        return Rn(e) ? e : "" + e;
      },
      numeric: function (e, t, n) {
        if (0 === e) return "0";
        var r,
          i = this.chart.options.locale,
          a = e;
        if (n.length > 1) {
          var o = Math.max(
            Math.abs(n[0].value),
            Math.abs(n[n.length - 1].value)
          );
          (o < 1e-4 || o > 1e15) && (r = "scientific"),
            (a = (function (e, t) {
              var n =
                t.length > 3
                  ? t[2].value - t[1].value
                  : t[1].value - t[0].value;
              Math.abs(n) >= 1 &&
                e !== Math.floor(e) &&
                (n = e - Math.floor(e));
              return n;
            })(e, n));
        }
        var s = ur(Math.abs(a)),
          l = isNaN(s) ? 1 : Math.max(Math.min(-1 * Math.floor(s), 20), 0),
          u = {
            notation: r,
            minimumFractionDigits: l,
            maximumFractionDigits: l,
          };
        return Object.assign(u, this.options.ticks.format), qr(e, i, u);
      },
      logarithmic: function (e, t, n) {
        if (0 === e) return "0";
        var r = n[t].significand || e / Math.pow(10, Math.floor(ur(e)));
        return [1, 2, 3, 5, 10, 15].includes(r) || t > 0.8 * n.length
          ? Kr.numeric.call(this, e, t, n)
          : "";
      },
    };
    var Qr = { formatters: Kr };
    var Xr = Object.create(null),
      Gr = Object.create(null);
    function Jr(e, t) {
      if (!t) return e;
      for (var n = t.split("."), r = 0, i = n.length; r < i; ++r) {
        var a = n[r];
        e = e[a] || (e[a] = Object.create(null));
      }
      return e;
    }
    function Zr(e, t, n) {
      return "string" === typeof t ? $n(Jr(e, t), n) : $n(Jr(e, ""), t);
    }
    var ei = (function () {
        function e(t, n) {
          Re(this, e),
            (this.animation = void 0),
            (this.backgroundColor = "rgba(0,0,0,0.1)"),
            (this.borderColor = "rgba(0,0,0,0.1)"),
            (this.color = "#666"),
            (this.datasets = {}),
            (this.devicePixelRatio = function (e) {
              return e.chart.platform.getDevicePixelRatio();
            }),
            (this.elements = {}),
            (this.events = [
              "mousemove",
              "mouseout",
              "click",
              "touchstart",
              "touchmove",
            ]),
            (this.font = {
              family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
              size: 12,
              style: "normal",
              lineHeight: 1.2,
              weight: null,
            }),
            (this.hover = {}),
            (this.hoverBackgroundColor = function (e, t) {
              return Hr(t.backgroundColor);
            }),
            (this.hoverBorderColor = function (e, t) {
              return Hr(t.borderColor);
            }),
            (this.hoverColor = function (e, t) {
              return Hr(t.color);
            }),
            (this.indexAxis = "x"),
            (this.interaction = {
              mode: "nearest",
              intersect: !0,
              includeInvisible: !1,
            }),
            (this.maintainAspectRatio = !0),
            (this.onHover = null),
            (this.onClick = null),
            (this.parsing = !0),
            (this.plugins = {}),
            (this.responsive = !0),
            (this.scale = void 0),
            (this.scales = {}),
            (this.showLine = !0),
            (this.drawActiveElementsOnTop = !0),
            this.describe(t),
            this.apply(n);
        }
        return (
          Ne(e, [
            {
              key: "set",
              value: function (e, t) {
                return Zr(this, e, t);
              },
            },
            {
              key: "get",
              value: function (e) {
                return Jr(this, e);
              },
            },
            {
              key: "describe",
              value: function (e, t) {
                return Zr(Gr, e, t);
              },
            },
            {
              key: "override",
              value: function (e, t) {
                return Zr(Xr, e, t);
              },
            },
            {
              key: "route",
              value: function (e, t, n, r) {
                var i,
                  a = Jr(this, e),
                  o = Jr(this, n),
                  s = "_" + t;
                Object.defineProperties(
                  a,
                  (l((i = {}), s, { value: a[t], writable: !0 }),
                  l(i, t, {
                    enumerable: !0,
                    get: function () {
                      var e = this[s],
                        t = o[r];
                      return An(e) ? Object.assign({}, t, e) : Fn(e, t);
                    },
                    set: function (e) {
                      this[s] = e;
                    },
                  }),
                  i)
                );
              },
            },
            {
              key: "apply",
              value: function (e) {
                var t = this;
                e.forEach(function (e) {
                  return e(t);
                });
              },
            },
          ]),
          e
        );
      })(),
      ti = new ei(
        {
          _scriptable: function (e) {
            return !e.startsWith("on");
          },
          _indexable: function (e) {
            return "events" !== e;
          },
          hover: { _fallback: "interaction" },
          interaction: { _scriptable: !1, _indexable: !1 },
        },
        [
          function (e) {
            e.set("animation", {
              delay: void 0,
              duration: 1e3,
              easing: "easeOutQuart",
              fn: void 0,
              from: void 0,
              loop: void 0,
              to: void 0,
              type: void 0,
            }),
              e.describe("animation", {
                _fallback: !1,
                _indexable: !1,
                _scriptable: function (e) {
                  return "onProgress" !== e && "onComplete" !== e && "fn" !== e;
                },
              }),
              e.set("animations", {
                colors: { type: "color", properties: $r },
                numbers: { type: "number", properties: Ur },
              }),
              e.describe("animations", { _fallback: "animation" }),
              e.set("transitions", {
                active: { animation: { duration: 400 } },
                resize: { animation: { duration: 0 } },
                show: {
                  animations: {
                    colors: { from: "transparent" },
                    visible: { type: "boolean", duration: 0 },
                  },
                },
                hide: {
                  animations: {
                    colors: { to: "transparent" },
                    visible: {
                      type: "boolean",
                      easing: "linear",
                      fn: function (e) {
                        return 0 | e;
                      },
                    },
                  },
                },
              });
          },
          function (e) {
            e.set("layout", {
              autoPadding: !0,
              padding: { top: 0, right: 0, bottom: 0, left: 0 },
            });
          },
          function (e) {
            e.set("scale", {
              display: !0,
              offset: !1,
              reverse: !1,
              beginAtZero: !1,
              bounds: "ticks",
              grace: 0,
              grid: {
                display: !0,
                lineWidth: 1,
                drawOnChartArea: !0,
                drawTicks: !0,
                tickLength: 8,
                tickWidth: function (e, t) {
                  return t.lineWidth;
                },
                tickColor: function (e, t) {
                  return t.color;
                },
                offset: !1,
              },
              border: { display: !0, dash: [], dashOffset: 0, width: 1 },
              title: { display: !1, text: "", padding: { top: 4, bottom: 4 } },
              ticks: {
                minRotation: 0,
                maxRotation: 50,
                mirror: !1,
                textStrokeWidth: 0,
                textStrokeColor: "",
                padding: 3,
                display: !0,
                autoSkip: !0,
                autoSkipPadding: 3,
                labelOffset: 0,
                callback: Qr.formatters.values,
                minor: {},
                major: {},
                align: "center",
                crossAlign: "near",
                showLabelBackdrop: !1,
                backdropColor: "rgba(255, 255, 255, 0.75)",
                backdropPadding: 2,
              },
            }),
              e.route("scale.ticks", "color", "", "color"),
              e.route("scale.grid", "color", "", "borderColor"),
              e.route("scale.border", "color", "", "borderColor"),
              e.route("scale.title", "color", "", "color"),
              e.describe("scale", {
                _fallback: !1,
                _scriptable: function (e) {
                  return (
                    !e.startsWith("before") &&
                    !e.startsWith("after") &&
                    "callback" !== e &&
                    "parser" !== e
                  );
                },
                _indexable: function (e) {
                  return (
                    "borderDash" !== e && "tickBorderDash" !== e && "dash" !== e
                  );
                },
              }),
              e.describe("scales", { _fallback: "scale" }),
              e.describe("scale.ticks", {
                _scriptable: function (e) {
                  return "backdropPadding" !== e && "callback" !== e;
                },
                _indexable: function (e) {
                  return "backdropPadding" !== e;
                },
              });
          },
        ]
      );
    function ni(e, t, n, r, i) {
      var a = t[i];
      return (
        a || ((a = t[i] = e.measureText(i).width), n.push(i)),
        a > r && (r = a),
        r
      );
    }
    function ri(e, t, n, r) {
      var i = ((r = r || {}).data = r.data || {}),
        a = (r.garbageCollect = r.garbageCollect || []);
      r.font !== t &&
        ((i = r.data = {}), (a = r.garbageCollect = []), (r.font = t)),
        e.save(),
        (e.font = t);
      var o,
        s,
        l,
        u,
        c,
        f = 0,
        h = n.length;
      for (o = 0; o < h; o++)
        if (void 0 === (u = n[o]) || null === u || Rn(u)) {
          if (Rn(u))
            for (s = 0, l = u.length; s < l; s++)
              void 0 === (c = u[s]) ||
                null === c ||
                Rn(c) ||
                (f = ni(e, i, a, f, c));
        } else f = ni(e, i, a, f, u);
      e.restore();
      var d = a.length / 2;
      if (d > n.length) {
        for (o = 0; o < d; o++) delete i[a[o]];
        a.splice(0, d);
      }
      return f;
    }
    function ii(e, t, n) {
      var r = e.currentDevicePixelRatio,
        i = 0 !== n ? Math.max(n / 2, 0.5) : 0;
      return Math.round((t - i) * r) / r + i;
    }
    function ai(e, t) {
      (t = t || e.getContext("2d")).save(),
        t.resetTransform(),
        t.clearRect(0, 0, e.width, e.height),
        t.restore();
    }
    function oi(e, t, n, r) {
      si(e, t, n, r, null);
    }
    function si(e, t, n, r, i) {
      var a,
        o,
        s,
        l,
        u,
        c,
        f,
        h,
        d = t.pointStyle,
        p = t.rotation,
        v = t.radius,
        g = (p || 0) * ar;
      if (
        d &&
        "object" === typeof d &&
        ("[object HTMLImageElement]" === (a = d.toString()) ||
          "[object HTMLCanvasElement]" === a)
      )
        return (
          e.save(),
          e.translate(n, r),
          e.rotate(g),
          e.drawImage(d, -d.width / 2, -d.height / 2, d.width, d.height),
          void e.restore()
        );
      if (!(isNaN(v) || v <= 0)) {
        switch ((e.beginPath(), d)) {
          default:
            i ? e.ellipse(n, r, i / 2, v, 0, 0, nr) : e.arc(n, r, v, 0, nr),
              e.closePath();
            break;
          case "triangle":
            (c = i ? i / 2 : v),
              e.moveTo(n + Math.sin(g) * c, r - Math.cos(g) * v),
              (g += lr),
              e.lineTo(n + Math.sin(g) * c, r - Math.cos(g) * v),
              (g += lr),
              e.lineTo(n + Math.sin(g) * c, r - Math.cos(g) * v),
              e.closePath();
            break;
          case "rectRounded":
            (l = v - (u = 0.516 * v)),
              (o = Math.cos(g + sr) * l),
              (f = Math.cos(g + sr) * (i ? i / 2 - u : l)),
              (s = Math.sin(g + sr) * l),
              (h = Math.sin(g + sr) * (i ? i / 2 - u : l)),
              e.arc(n - f, r - s, u, g - tr, g - or),
              e.arc(n + h, r - o, u, g - or, g),
              e.arc(n + f, r + s, u, g, g + or),
              e.arc(n - h, r + o, u, g + or, g + tr),
              e.closePath();
            break;
          case "rect":
            if (!p) {
              (l = Math.SQRT1_2 * v),
                (c = i ? i / 2 : l),
                e.rect(n - c, r - l, 2 * c, 2 * l);
              break;
            }
            g += sr;
          case "rectRot":
            (f = Math.cos(g) * (i ? i / 2 : v)),
              (o = Math.cos(g) * v),
              (s = Math.sin(g) * v),
              (h = Math.sin(g) * (i ? i / 2 : v)),
              e.moveTo(n - f, r - s),
              e.lineTo(n + h, r - o),
              e.lineTo(n + f, r + s),
              e.lineTo(n - h, r + o),
              e.closePath();
            break;
          case "crossRot":
            g += sr;
          case "cross":
            (f = Math.cos(g) * (i ? i / 2 : v)),
              (o = Math.cos(g) * v),
              (s = Math.sin(g) * v),
              (h = Math.sin(g) * (i ? i / 2 : v)),
              e.moveTo(n - f, r - s),
              e.lineTo(n + f, r + s),
              e.moveTo(n + h, r - o),
              e.lineTo(n - h, r + o);
            break;
          case "star":
            (f = Math.cos(g) * (i ? i / 2 : v)),
              (o = Math.cos(g) * v),
              (s = Math.sin(g) * v),
              (h = Math.sin(g) * (i ? i / 2 : v)),
              e.moveTo(n - f, r - s),
              e.lineTo(n + f, r + s),
              e.moveTo(n + h, r - o),
              e.lineTo(n - h, r + o),
              (g += sr),
              (f = Math.cos(g) * (i ? i / 2 : v)),
              (o = Math.cos(g) * v),
              (s = Math.sin(g) * v),
              (h = Math.sin(g) * (i ? i / 2 : v)),
              e.moveTo(n - f, r - s),
              e.lineTo(n + f, r + s),
              e.moveTo(n + h, r - o),
              e.lineTo(n - h, r + o);
            break;
          case "line":
            (o = i ? i / 2 : Math.cos(g) * v),
              (s = Math.sin(g) * v),
              e.moveTo(n - o, r - s),
              e.lineTo(n + o, r + s);
            break;
          case "dash":
            e.moveTo(n, r),
              e.lineTo(n + Math.cos(g) * (i ? i / 2 : v), r + Math.sin(g) * v);
            break;
          case !1:
            e.closePath();
        }
        e.fill(), t.borderWidth > 0 && e.stroke();
      }
    }
    function li(e, t, n) {
      return (
        (n = n || 0.5),
        !t ||
          (e &&
            e.x > t.left - n &&
            e.x < t.right + n &&
            e.y > t.top - n &&
            e.y < t.bottom + n)
      );
    }
    function ui(e, t) {
      e.save(),
        e.beginPath(),
        e.rect(t.left, t.top, t.right - t.left, t.bottom - t.top),
        e.clip();
    }
    function ci(e) {
      e.restore();
    }
    function fi(e, t, n, r, i) {
      if (!t) return e.lineTo(n.x, n.y);
      if ("middle" === i) {
        var a = (t.x + n.x) / 2;
        e.lineTo(a, t.y), e.lineTo(a, n.y);
      } else ("after" === i) !== !!r ? e.lineTo(t.x, n.y) : e.lineTo(n.x, t.y);
      e.lineTo(n.x, n.y);
    }
    function hi(e, t, n, r) {
      if (!t) return e.lineTo(n.x, n.y);
      e.bezierCurveTo(
        r ? t.cp1x : t.cp2x,
        r ? t.cp1y : t.cp2y,
        r ? n.cp2x : n.cp1x,
        r ? n.cp2y : n.cp1y,
        n.x,
        n.y
      );
    }
    function di(e, t, n, r, i) {
      if (i.strikethrough || i.underline) {
        var a = e.measureText(r),
          o = t - a.actualBoundingBoxLeft,
          s = t + a.actualBoundingBoxRight,
          l = n - a.actualBoundingBoxAscent,
          u = n + a.actualBoundingBoxDescent,
          c = i.strikethrough ? (l + u) / 2 : u;
        (e.strokeStyle = e.fillStyle),
          e.beginPath(),
          (e.lineWidth = i.decorationWidth || 2),
          e.moveTo(o, c),
          e.lineTo(s, c),
          e.stroke();
      }
    }
    function pi(e, t) {
      var n = e.fillStyle;
      (e.fillStyle = t.color),
        e.fillRect(t.left, t.top, t.width, t.height),
        (e.fillStyle = n);
    }
    function vi(e, t, n, r, i) {
      var a,
        o,
        s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {},
        l = Rn(t) ? t : [t],
        u = s.strokeWidth > 0 && "" !== s.strokeColor;
      for (
        e.save(),
          e.font = i.string,
          (function (e, t) {
            t.translation && e.translate(t.translation[0], t.translation[1]),
              Ln(t.rotation) || e.rotate(t.rotation),
              t.color && (e.fillStyle = t.color),
              t.textAlign && (e.textAlign = t.textAlign),
              t.textBaseline && (e.textBaseline = t.textBaseline);
          })(e, s),
          a = 0;
        a < l.length;
        ++a
      )
        (o = l[a]),
          s.backdrop && pi(e, s.backdrop),
          u &&
            (s.strokeColor && (e.strokeStyle = s.strokeColor),
            Ln(s.strokeWidth) || (e.lineWidth = s.strokeWidth),
            e.strokeText(o, n, r, s.maxWidth)),
          e.fillText(o, n, r, s.maxWidth),
          di(e, n, r, o, s),
          (r += Number(i.lineHeight));
      e.restore();
    }
    function gi(e, t) {
      var n = t.x,
        r = t.y,
        i = t.w,
        a = t.h,
        o = t.radius;
      e.arc(n + o.topLeft, r + o.topLeft, o.topLeft, -or, tr, !0),
        e.lineTo(n, r + a - o.bottomLeft),
        e.arc(n + o.bottomLeft, r + a - o.bottomLeft, o.bottomLeft, tr, or, !0),
        e.lineTo(n + i - o.bottomRight, r + a),
        e.arc(
          n + i - o.bottomRight,
          r + a - o.bottomRight,
          o.bottomRight,
          or,
          0,
          !0
        ),
        e.lineTo(n + i, r + o.topRight),
        e.arc(n + i - o.topRight, r + o.topRight, o.topRight, 0, -or, !0),
        e.lineTo(n + o.topLeft, r);
    }
    var mi = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,
      yi =
        /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;
    function bi(e, t) {
      var n = ("" + e).match(mi);
      if (!n || "normal" === n[1]) return 1.2 * t;
      switch (((e = +n[2]), n[3])) {
        case "px":
          return e;
        case "%":
          e /= 100;
      }
      return t * e;
    }
    var xi = function (e) {
      return +e || 0;
    };
    function ki(e, t) {
      var n,
        r = {},
        i = An(t),
        a = i ? Object.keys(t) : t,
        o = An(e)
          ? i
            ? function (n) {
                return Fn(e[n], e[t[n]]);
              }
            : function (t) {
                return e[t];
              }
          : function () {
              return e;
            },
        s = Kt(a);
      try {
        for (s.s(); !(n = s.n()).done; ) {
          var l = n.value;
          r[l] = xi(o(l));
        }
      } catch (u) {
        s.e(u);
      } finally {
        s.f();
      }
      return r;
    }
    function _i(e) {
      return ki(e, { top: "y", right: "x", bottom: "y", left: "x" });
    }
    function wi(e) {
      return ki(e, ["topLeft", "topRight", "bottomLeft", "bottomRight"]);
    }
    function Si(e) {
      var t = _i(e);
      return (t.width = t.left + t.right), (t.height = t.top + t.bottom), t;
    }
    function Ei(e, t) {
      (e = e || {}), (t = t || ti.font);
      var n = Fn(e.size, t.size);
      "string" === typeof n && (n = parseInt(n, 10));
      var r = Fn(e.style, t.style);
      r &&
        !("" + r).match(yi) &&
        (console.warn('Invalid font style specified: "' + r + '"'),
        (r = void 0));
      var i = {
        family: Fn(e.family, t.family),
        lineHeight: bi(Fn(e.lineHeight, t.lineHeight), n),
        size: n,
        style: r,
        weight: Fn(e.weight, t.weight),
        string: "",
      };
      return (
        (i.string = (function (e) {
          return !e || Ln(e.size) || Ln(e.family)
            ? null
            : (e.style ? e.style + " " : "") +
                (e.weight ? e.weight + " " : "") +
                e.size +
                "px " +
                e.family;
        })(i)),
        i
      );
    }
    function Mi(e, t, n, r) {
      var i,
        a,
        o,
        s = !0;
      for (i = 0, a = e.length; i < a; ++i)
        if (
          void 0 !== (o = e[i]) &&
          (void 0 !== t && "function" === typeof o && ((o = o(t)), (s = !1)),
          void 0 !== n && Rn(o) && ((o = o[n % o.length]), (s = !1)),
          void 0 !== o)
        )
          return r && !s && (r.cacheable = !1), o;
    }
    function Ci(e, t) {
      return Object.assign(Object.create(e), t);
    }
    function Pi(e) {
      var t,
        n =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [""],
        r = arguments.length > 3 ? arguments[3] : void 0,
        i =
          arguments.length > 4 && void 0 !== arguments[4]
            ? arguments[4]
            : function () {
                return e[0];
              },
        a = (arguments.length > 2 ? arguments[2] : void 0) || e;
      "undefined" === typeof r && (r = ji("_fallback", e));
      var o =
        (l((t = {}), Symbol.toStringTag, "Object"),
        l(t, "_cacheable", !0),
        l(t, "_scopes", e),
        l(t, "_rootScopes", a),
        l(t, "_fallback", r),
        l(t, "_getTarget", i),
        l(t, "override", function (t) {
          return Pi([t].concat(Qt(e)), n, a, r);
        }),
        t);
      return new Proxy(o, {
        deleteProperty: function (t, n) {
          return delete t[n], delete t._keys, delete e[0][n], !0;
        },
        get: function (t, r) {
          return Ri(t, r, function () {
            return (function (e, t, n, r) {
              var i,
                a,
                o = Kt(t);
              try {
                for (o.s(); !(a = o.n()).done; ) {
                  var s = a.value;
                  if ("undefined" !== typeof (i = ji(Di(s, e), n)))
                    return Li(e, i) ? Fi(n, r, e, i) : i;
                }
              } catch (l) {
                o.e(l);
              } finally {
                o.f();
              }
            })(r, n, e, t);
          });
        },
        getOwnPropertyDescriptor: function (e, t) {
          return Reflect.getOwnPropertyDescriptor(e._scopes[0], t);
        },
        getPrototypeOf: function () {
          return Reflect.getPrototypeOf(e[0]);
        },
        has: function (e, t) {
          return Bi(e).includes(t);
        },
        ownKeys: function (e) {
          return Bi(e);
        },
        set: function (e, t, n) {
          var r = e._storage || (e._storage = i());
          return (e[t] = r[t] = n), delete e._keys, !0;
        },
      });
    }
    function Oi(e, t, n, r) {
      var i = {
        _cacheable: !1,
        _proxy: e,
        _context: t,
        _subProxy: n,
        _stack: new Set(),
        _descriptors: Ti(e, r),
        setContext: function (t) {
          return Oi(e, t, n, r);
        },
        override: function (i) {
          return Oi(e.override(i), t, n, r);
        },
      };
      return new Proxy(i, {
        deleteProperty: function (t, n) {
          return delete t[n], delete e[n], !0;
        },
        get: function (e, t, n) {
          return Ri(e, t, function () {
            return (function (e, t, n) {
              var r = e._proxy,
                i = e._context,
                a = e._subProxy,
                o = e._descriptors,
                s = r[t];
              Zn(s) &&
                o.isScriptable(t) &&
                (s = (function (e, t, n, r) {
                  var i = n._proxy,
                    a = n._context,
                    o = n._subProxy,
                    s = n._stack;
                  if (s.has(e))
                    throw new Error(
                      "Recursion detected: " +
                        Array.from(s).join("->") +
                        "->" +
                        e
                    );
                  s.add(e);
                  var l = t(a, o || r);
                  s.delete(e), Li(e, l) && (l = Fi(i._scopes, i, e, l));
                  return l;
                })(t, s, e, n));
              Rn(s) &&
                s.length &&
                (s = (function (e, t, n, r) {
                  var i = n._proxy,
                    a = n._context,
                    o = n._subProxy,
                    s = n._descriptors;
                  if ("undefined" !== typeof a.index && r(e))
                    return t[a.index % t.length];
                  if (An(t[0])) {
                    var l = t,
                      u = i._scopes.filter(function (e) {
                        return e !== l;
                      });
                    t = [];
                    var c,
                      f = Kt(l);
                    try {
                      for (f.s(); !(c = f.n()).done; ) {
                        var h = Fi(u, i, e, c.value);
                        t.push(Oi(h, a, o && o[e], s));
                      }
                    } catch (d) {
                      f.e(d);
                    } finally {
                      f.f();
                    }
                  }
                  return t;
                })(t, s, e, o.isIndexable));
              Li(t, s) && (s = Oi(s, i, a && a[t], o));
              return s;
            })(e, t, n);
          });
        },
        getOwnPropertyDescriptor: function (t, n) {
          return t._descriptors.allKeys
            ? Reflect.has(e, n)
              ? { enumerable: !0, configurable: !0 }
              : void 0
            : Reflect.getOwnPropertyDescriptor(e, n);
        },
        getPrototypeOf: function () {
          return Reflect.getPrototypeOf(e);
        },
        has: function (t, n) {
          return Reflect.has(e, n);
        },
        ownKeys: function () {
          return Reflect.ownKeys(e);
        },
        set: function (t, n, r) {
          return (e[n] = r), delete t[n], !0;
        },
      });
    }
    function Ti(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : { scriptable: !0, indexable: !0 },
        n = e._scriptable,
        r = void 0 === n ? t.scriptable : n,
        i = e._indexable,
        a = void 0 === i ? t.indexable : i,
        o = e._allKeys;
      return {
        allKeys: void 0 === o ? t.allKeys : o,
        scriptable: r,
        indexable: a,
        isScriptable: Zn(r)
          ? r
          : function () {
              return r;
            },
        isIndexable: Zn(a)
          ? a
          : function () {
              return a;
            },
      };
    }
    var Di = function (e, t) {
        return e ? e + Gn(t) : t;
      },
      Li = function (e, t) {
        return (
          An(t) &&
          "adapters" !== e &&
          (null === Object.getPrototypeOf(t) || t.constructor === Object)
        );
      };
    function Ri(e, t, n) {
      if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      var r = n();
      return (e[t] = r), r;
    }
    function Ai(e, t, n) {
      return Zn(e) ? e(t, n) : e;
    }
    var Ni = function (e, t) {
      return !0 === e ? t : "string" === typeof e ? Xn(t, e) : void 0;
    };
    function zi(e, t, n, r, i) {
      var a,
        o = Kt(t);
      try {
        for (o.s(); !(a = o.n()).done; ) {
          var s = a.value,
            l = Ni(n, s);
          if (l) {
            e.add(l);
            var u = Ai(l._fallback, n, i);
            if ("undefined" !== typeof u && u !== n && u !== r) return u;
          } else if (!1 === l && "undefined" !== typeof r && n !== r)
            return null;
        }
      } catch (c) {
        o.e(c);
      } finally {
        o.f();
      }
      return !1;
    }
    function Fi(e, t, n, r) {
      var i = t._rootScopes,
        a = Ai(t._fallback, n, r),
        o = [].concat(Qt(e), Qt(i)),
        s = new Set();
      s.add(r);
      var l = Ii(s, o, n, a || n, r);
      return (
        null !== l &&
        ("undefined" === typeof a ||
          a === n ||
          null !== (l = Ii(s, o, a, l, r))) &&
        Pi(Array.from(s), [""], i, a, function () {
          return (function (e, t, n) {
            var r = e._getTarget();
            t in r || (r[t] = {});
            var i = r[t];
            if (Rn(i) && An(n)) return n;
            return i || {};
          })(t, n, r);
        })
      );
    }
    function Ii(e, t, n, r, i) {
      for (; n; ) n = zi(e, t, n, r, i);
      return n;
    }
    function ji(e, t) {
      var n,
        r = Kt(t);
      try {
        for (r.s(); !(n = r.n()).done; ) {
          var i = n.value;
          if (i) {
            var a = i[e];
            if ("undefined" !== typeof a) return a;
          }
        }
      } catch (o) {
        r.e(o);
      } finally {
        r.f();
      }
    }
    function Bi(e) {
      var t = e._keys;
      return (
        t ||
          (t = e._keys =
            (function (e) {
              var t,
                n = new Set(),
                r = Kt(e);
              try {
                for (r.s(); !(t = r.n()).done; ) {
                  var i,
                    a = t.value,
                    o = Kt(
                      Object.keys(a).filter(function (e) {
                        return !e.startsWith("_");
                      })
                    );
                  try {
                    for (o.s(); !(i = o.n()).done; ) {
                      var s = i.value;
                      n.add(s);
                    }
                  } catch (l) {
                    o.e(l);
                  } finally {
                    o.f();
                  }
                }
              } catch (l) {
                r.e(l);
              } finally {
                r.f();
              }
              return Array.from(n);
            })(e._scopes)),
        t
      );
    }
    function Vi(e, t, n, r) {
      var i,
        a,
        o,
        s,
        l = e.iScale,
        u = this._parsing.key,
        c = void 0 === u ? "r" : u,
        f = new Array(r);
      for (i = 0, a = r; i < a; ++i)
        (s = t[(o = i + n)]), (f[i] = { r: l.parse(Xn(s, c), o) });
      return f;
    }
    var Wi = Number.EPSILON || 1e-14,
      Hi = function (e, t) {
        return t < e.length && !e[t].skip && e[t];
      },
      Ui = function (e) {
        return "x" === e ? "y" : "x";
      };
    function $i(e, t, n, r) {
      var i = e.skip ? t : e,
        a = t,
        o = n.skip ? t : n,
        s = br(a, i),
        l = br(o, a),
        u = s / (s + l),
        c = l / (s + l),
        f = r * (u = isNaN(u) ? 0 : u),
        h = r * (c = isNaN(c) ? 0 : c);
      return {
        previous: { x: a.x - f * (o.x - i.x), y: a.y - f * (o.y - i.y) },
        next: { x: a.x + h * (o.x - i.x), y: a.y + h * (o.y - i.y) },
      };
    }
    function Yi(e) {
      var t,
        n,
        r,
        i =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "x",
        a = Ui(i),
        o = e.length,
        s = Array(o).fill(0),
        l = Array(o),
        u = Hi(e, 0);
      for (t = 0; t < o; ++t)
        if (((n = r), (r = u), (u = Hi(e, t + 1)), r)) {
          if (u) {
            var c = u[i] - r[i];
            s[t] = 0 !== c ? (u[a] - r[a]) / c : 0;
          }
          l[t] = n
            ? u
              ? cr(s[t - 1]) !== cr(s[t])
                ? 0
                : (s[t - 1] + s[t]) / 2
              : s[t - 1]
            : s[t];
        }
      !(function (e, t, n) {
        for (
          var r, i, a, o, s, l = e.length, u = Hi(e, 0), c = 0;
          c < l - 1;
          ++c
        )
          (s = u),
            (u = Hi(e, c + 1)),
            s &&
              u &&
              (fr(t[c], 0, Wi)
                ? (n[c] = n[c + 1] = 0)
                : ((r = n[c] / t[c]),
                  (i = n[c + 1] / t[c]),
                  (o = Math.pow(r, 2) + Math.pow(i, 2)) <= 9 ||
                    ((a = 3 / Math.sqrt(o)),
                    (n[c] = r * a * t[c]),
                    (n[c + 1] = i * a * t[c]))));
      })(e, s, l),
        (function (e, t) {
          for (
            var n,
              r,
              i,
              a =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : "x",
              o = Ui(a),
              s = e.length,
              l = Hi(e, 0),
              u = 0;
            u < s;
            ++u
          )
            if (((r = i), (i = l), (l = Hi(e, u + 1)), i)) {
              var c = i[a],
                f = i[o];
              r &&
                ((n = (c - r[a]) / 3),
                (i["cp1".concat(a)] = c - n),
                (i["cp1".concat(o)] = f - n * t[u])),
                l &&
                  ((n = (l[a] - c) / 3),
                  (i["cp2".concat(a)] = c + n),
                  (i["cp2".concat(o)] = f + n * t[u]));
            }
        })(e, l, i);
    }
    function qi(e, t, n) {
      return Math.max(Math.min(e, n), t);
    }
    function Ki(e, t, n, r, i) {
      var a, o, s, l;
      if (
        (t.spanGaps &&
          (e = e.filter(function (e) {
            return !e.skip;
          })),
        "monotone" === t.cubicInterpolationMode)
      )
        Yi(e, i);
      else {
        var u = r ? e[e.length - 1] : e[0];
        for (a = 0, o = e.length; a < o; ++a)
          (l = $i(
            u,
            (s = e[a]),
            e[Math.min(a + 1, o - (r ? 0 : 1)) % o],
            t.tension
          )),
            (s.cp1x = l.previous.x),
            (s.cp1y = l.previous.y),
            (s.cp2x = l.next.x),
            (s.cp2y = l.next.y),
            (u = s);
      }
      t.capBezierPoints &&
        (function (e, t) {
          var n,
            r,
            i,
            a,
            o,
            s = li(e[0], t);
          for (n = 0, r = e.length; n < r; ++n)
            (o = a),
              (a = s),
              (s = n < r - 1 && li(e[n + 1], t)),
              a &&
                ((i = e[n]),
                o &&
                  ((i.cp1x = qi(i.cp1x, t.left, t.right)),
                  (i.cp1y = qi(i.cp1y, t.top, t.bottom))),
                s &&
                  ((i.cp2x = qi(i.cp2x, t.left, t.right)),
                  (i.cp2y = qi(i.cp2y, t.top, t.bottom))));
        })(e, n);
    }
    function Qi() {
      return "undefined" !== typeof window && "undefined" !== typeof document;
    }
    function Xi(e) {
      var t = e.parentNode;
      return t && "[object ShadowRoot]" === t.toString() && (t = t.host), t;
    }
    function Gi(e, t, n) {
      var r;
      return (
        "string" === typeof e
          ? ((r = parseInt(e, 10)),
            -1 !== e.indexOf("%") && (r = (r / 100) * t.parentNode[n]))
          : (r = e),
        r
      );
    }
    var Ji = function (e) {
      return e.ownerDocument.defaultView.getComputedStyle(e, null);
    };
    var Zi = ["top", "right", "bottom", "left"];
    function ea(e, t, n) {
      var r = {};
      n = n ? "-" + n : "";
      for (var i = 0; i < 4; i++) {
        var a = Zi[i];
        r[a] = parseFloat(e[t + "-" + a + n]) || 0;
      }
      return (r.width = r.left + r.right), (r.height = r.top + r.bottom), r;
    }
    var ta = function (e, t, n) {
      return (e > 0 || t > 0) && (!n || !n.shadowRoot);
    };
    function na(e, t) {
      if ("native" in e) return e;
      var n = t.canvas,
        r = t.currentDevicePixelRatio,
        i = Ji(n),
        a = "border-box" === i.boxSizing,
        o = ea(i, "padding"),
        s = ea(i, "border", "width"),
        l = (function (e, t) {
          var n,
            r,
            i = e.touches,
            a = i && i.length ? i[0] : e,
            o = a.offsetX,
            s = a.offsetY,
            l = !1;
          if (ta(o, s, e.target)) (n = o), (r = s);
          else {
            var u = t.getBoundingClientRect();
            (n = a.clientX - u.left), (r = a.clientY - u.top), (l = !0);
          }
          return { x: n, y: r, box: l };
        })(e, n),
        u = l.x,
        c = l.y,
        f = l.box,
        h = o.left + (f && s.left),
        d = o.top + (f && s.top),
        p = t.width,
        v = t.height;
      return (
        a && ((p -= o.width + s.width), (v -= o.height + s.height)),
        {
          x: Math.round((((u - h) / p) * n.width) / r),
          y: Math.round((((c - d) / v) * n.height) / r),
        }
      );
    }
    var ra = function (e) {
      return Math.round(10 * e) / 10;
    };
    function ia(e, t, n, r) {
      var i = Ji(e),
        a = ea(i, "margin"),
        o = Gi(i.maxWidth, e, "clientWidth") || ir,
        s = Gi(i.maxHeight, e, "clientHeight") || ir,
        l = (function (e, t, n) {
          var r, i;
          if (void 0 === t || void 0 === n) {
            var a = Xi(e);
            if (a) {
              var o = a.getBoundingClientRect(),
                s = Ji(a),
                l = ea(s, "border", "width"),
                u = ea(s, "padding");
              (t = o.width - u.width - l.width),
                (n = o.height - u.height - l.height),
                (r = Gi(s.maxWidth, a, "clientWidth")),
                (i = Gi(s.maxHeight, a, "clientHeight"));
            } else (t = e.clientWidth), (n = e.clientHeight);
          }
          return { width: t, height: n, maxWidth: r || ir, maxHeight: i || ir };
        })(e, t, n),
        u = l.width,
        c = l.height;
      if ("content-box" === i.boxSizing) {
        var f = ea(i, "border", "width"),
          h = ea(i, "padding");
        (u -= h.width + f.width), (c -= h.height + f.height);
      }
      return (
        (u = Math.max(0, u - a.width)),
        (c = Math.max(0, r ? u / r : c - a.height)),
        (u = ra(Math.min(u, o, l.maxWidth))),
        (c = ra(Math.min(c, s, l.maxHeight))),
        u && !c && (c = ra(u / 2)),
        (void 0 !== t || void 0 !== n) &&
          r &&
          l.height &&
          c > l.height &&
          ((c = l.height), (u = ra(Math.floor(c * r)))),
        { width: u, height: c }
      );
    }
    function aa(e, t, n) {
      var r = t || 1,
        i = Math.floor(e.height * r),
        a = Math.floor(e.width * r);
      (e.height = Math.floor(e.height)), (e.width = Math.floor(e.width));
      var o = e.canvas;
      return (
        o.style &&
          (n || (!o.style.height && !o.style.width)) &&
          ((o.style.height = "".concat(e.height, "px")),
          (o.style.width = "".concat(e.width, "px"))),
        (e.currentDevicePixelRatio !== r || o.height !== i || o.width !== a) &&
          ((e.currentDevicePixelRatio = r),
          (o.height = i),
          (o.width = a),
          e.ctx.setTransform(r, 0, 0, r, 0, 0),
          !0)
      );
    }
    var oa = (function () {
      var e = !1;
      try {
        var t = {
          get passive() {
            return (e = !0), !1;
          },
        };
        window.addEventListener("test", null, t),
          window.removeEventListener("test", null, t);
      } catch (n) {}
      return e;
    })();
    function sa(e, t) {
      var n = (function (e, t) {
          return Ji(e).getPropertyValue(t);
        })(e, t),
        r = n && n.match(/^(\d+)(\.\d+)?px$/);
      return r ? +r[1] : void 0;
    }
    function la(e, t, n, r) {
      return { x: e.x + n * (t.x - e.x), y: e.y + n * (t.y - e.y) };
    }
    function ua(e, t, n, r) {
      return {
        x: e.x + n * (t.x - e.x),
        y:
          "middle" === r
            ? n < 0.5
              ? e.y
              : t.y
            : "after" === r
            ? n < 1
              ? e.y
              : t.y
            : n > 0
            ? t.y
            : e.y,
      };
    }
    function ca(e, t, n, r) {
      var i = { x: e.cp2x, y: e.cp2y },
        a = { x: t.cp1x, y: t.cp1y },
        o = la(e, i, n),
        s = la(i, a, n),
        l = la(a, t, n),
        u = la(o, s, n),
        c = la(s, l, n);
      return la(u, c, n);
    }
    function fa(e, t, n) {
      return e
        ? (function (e, t) {
            return {
              x: function (n) {
                return e + e + t - n;
              },
              setWidth: function (e) {
                t = e;
              },
              textAlign: function (e) {
                return "center" === e ? e : "right" === e ? "left" : "right";
              },
              xPlus: function (e, t) {
                return e - t;
              },
              leftForLtr: function (e, t) {
                return e - t;
              },
            };
          })(t, n)
        : {
            x: function (e) {
              return e;
            },
            setWidth: function (e) {},
            textAlign: function (e) {
              return e;
            },
            xPlus: function (e, t) {
              return e + t;
            },
            leftForLtr: function (e, t) {
              return e;
            },
          };
    }
    function ha(e, t) {
      var n, r;
      ("ltr" !== t && "rtl" !== t) ||
        ((r = [
          (n = e.canvas.style).getPropertyValue("direction"),
          n.getPropertyPriority("direction"),
        ]),
        n.setProperty("direction", t, "important"),
        (e.prevTextDirection = r));
    }
    function da(e, t) {
      void 0 !== t &&
        (delete e.prevTextDirection,
        e.canvas.style.setProperty("direction", t[0], t[1]));
    }
    function pa(e) {
      return "angle" === e
        ? { between: _r, compare: xr, normalize: kr }
        : {
            between: Sr,
            compare: function (e, t) {
              return e - t;
            },
            normalize: function (e) {
              return e;
            },
          };
    }
    function va(e) {
      var t = e.start,
        n = e.end,
        r = e.count;
      return {
        start: t % r,
        end: n % r,
        loop: e.loop && (n - t + 1) % r === 0,
        style: e.style,
      };
    }
    function ga(e, t, n) {
      if (!n) return [e];
      for (
        var r,
          i,
          a,
          o = n.property,
          s = n.start,
          l = n.end,
          u = t.length,
          c = pa(o),
          f = c.compare,
          h = c.between,
          d = c.normalize,
          p = (function (e, t, n) {
            var r,
              i,
              a = n.property,
              o = n.start,
              s = n.end,
              l = pa(a),
              u = l.between,
              c = l.normalize,
              f = t.length,
              h = e.start,
              d = e.end,
              p = e.loop;
            if (p) {
              for (
                h += f, d += f, r = 0, i = f;
                r < i && u(c(t[h % f][a]), o, s);
                ++r
              )
                h--, d--;
              (h %= f), (d %= f);
            }
            return (
              d < h && (d += f), { start: h, end: d, loop: p, style: e.style }
            );
          })(e, t, n),
          v = p.start,
          g = p.end,
          m = p.loop,
          y = p.style,
          b = [],
          x = !1,
          k = null,
          _ = function () {
            return x || (h(s, a, r) && 0 !== f(s, a));
          },
          w = function () {
            return !x || 0 === f(l, r) || h(l, a, r);
          },
          S = v,
          E = v;
        S <= g;
        ++S
      )
        (i = t[S % u]).skip ||
          ((r = d(i[o])) !== a &&
            ((x = h(r, s, l)),
            null === k && _() && (k = 0 === f(r, s) ? S : E),
            null !== k &&
              w() &&
              (b.push(va({ start: k, end: S, loop: m, count: u, style: y })),
              (k = null)),
            (E = S),
            (a = r)));
      return (
        null !== k &&
          b.push(va({ start: k, end: g, loop: m, count: u, style: y })),
        b
      );
    }
    function ma(e, t) {
      for (var n = [], r = e.segments, i = 0; i < r.length; i++) {
        var a = ga(r[i], e.points, t);
        a.length && n.push.apply(n, Qt(a));
      }
      return n;
    }
    function ya(e, t, n, r) {
      return r && r.setContext && n
        ? (function (e, t, n, r) {
            var i = e._chart.getContext(),
              a = ba(e.options),
              o = e._datasetIndex,
              s = e.options.spanGaps,
              l = n.length,
              u = [],
              c = a,
              f = t[0].start,
              h = f;
            function d(e, t, r, i) {
              var a = s ? -1 : 1;
              if (e !== t) {
                for (e += l; n[e % l].skip; ) e -= a;
                for (; n[t % l].skip; ) t += a;
                e % l !== t % l &&
                  (u.push({ start: e % l, end: t % l, loop: r, style: i }),
                  (c = i),
                  (f = t % l));
              }
            }
            var p,
              v = Kt(t);
            try {
              for (v.s(); !(p = v.n()).done; ) {
                var g = p.value;
                f = s ? f : g.start;
                var m = n[f % l],
                  y = void 0;
                for (h = f + 1; h <= g.end; h++) {
                  var b = n[h % l];
                  xa(
                    (y = ba(
                      r.setContext(
                        Ci(i, {
                          type: "segment",
                          p0: m,
                          p1: b,
                          p0DataIndex: (h - 1) % l,
                          p1DataIndex: h % l,
                          datasetIndex: o,
                        })
                      )
                    )),
                    c
                  ) && d(f, h - 1, g.loop, c),
                    (m = b),
                    (c = y);
                }
                f < h - 1 && d(f, h - 1, g.loop, c);
              }
            } catch (x) {
              v.e(x);
            } finally {
              v.f();
            }
            return u;
          })(e, t, n, r)
        : t;
    }
    function ba(e) {
      return {
        backgroundColor: e.backgroundColor,
        borderCapStyle: e.borderCapStyle,
        borderDash: e.borderDash,
        borderDashOffset: e.borderDashOffset,
        borderJoinStyle: e.borderJoinStyle,
        borderWidth: e.borderWidth,
        borderColor: e.borderColor,
      };
    }
    function xa(e, t) {
      if (!t) return !1;
      var n = [],
        r = function (e, t) {
          return Vr(t) ? (n.includes(t) || n.push(t), n.indexOf(t)) : t;
        };
      return JSON.stringify(e, r) !== JSON.stringify(t, r);
    }
    var ka = (function () {
        function e() {
          Re(this, e),
            (this._request = null),
            (this._charts = new Map()),
            (this._running = !1),
            (this._lastDate = void 0);
        }
        return (
          Ne(e, [
            {
              key: "_notify",
              value: function (e, t, n, r) {
                var i = t.listeners[r],
                  a = t.duration;
                i.forEach(function (r) {
                  return r({
                    chart: e,
                    initial: t.initial,
                    numSteps: a,
                    currentStep: Math.min(n - t.start, a),
                  });
                });
              },
            },
            {
              key: "_refresh",
              value: function () {
                var e = this;
                this._request ||
                  ((this._running = !0),
                  (this._request = Dr.call(window, function () {
                    e._update(),
                      (e._request = null),
                      e._running && e._refresh();
                  })));
              },
            },
            {
              key: "_update",
              value: function () {
                var e = this,
                  t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : Date.now(),
                  n = 0;
                this._charts.forEach(function (r, i) {
                  if (r.running && r.items.length) {
                    for (
                      var a, o = r.items, s = o.length - 1, l = !1;
                      s >= 0;
                      --s
                    )
                      (a = o[s])._active
                        ? (a._total > r.duration && (r.duration = a._total),
                          a.tick(t),
                          (l = !0))
                        : ((o[s] = o[o.length - 1]), o.pop());
                    l && (i.draw(), e._notify(i, r, t, "progress")),
                      o.length ||
                        ((r.running = !1),
                        e._notify(i, r, t, "complete"),
                        (r.initial = !1)),
                      (n += o.length);
                  }
                }),
                  (this._lastDate = t),
                  0 === n && (this._running = !1);
              },
            },
            {
              key: "_getAnims",
              value: function (e) {
                var t = this._charts,
                  n = t.get(e);
                return (
                  n ||
                    ((n = {
                      running: !1,
                      initial: !0,
                      items: [],
                      listeners: { complete: [], progress: [] },
                    }),
                    t.set(e, n)),
                  n
                );
              },
            },
            {
              key: "listen",
              value: function (e, t, n) {
                this._getAnims(e).listeners[t].push(n);
              },
            },
            {
              key: "add",
              value: function (e, t) {
                var n;
                t &&
                  t.length &&
                  (n = this._getAnims(e).items).push.apply(n, Qt(t));
              },
            },
            {
              key: "has",
              value: function (e) {
                return this._getAnims(e).items.length > 0;
              },
            },
            {
              key: "start",
              value: function (e) {
                var t = this._charts.get(e);
                t &&
                  ((t.running = !0),
                  (t.start = Date.now()),
                  (t.duration = t.items.reduce(function (e, t) {
                    return Math.max(e, t._duration);
                  }, 0)),
                  this._refresh());
              },
            },
            {
              key: "running",
              value: function (e) {
                if (!this._running) return !1;
                var t = this._charts.get(e);
                return !!(t && t.running && t.items.length);
              },
            },
            {
              key: "stop",
              value: function (e) {
                var t = this._charts.get(e);
                if (t && t.items.length) {
                  for (var n = t.items, r = n.length - 1; r >= 0; --r)
                    n[r].cancel();
                  (t.items = []), this._notify(e, t, Date.now(), "complete");
                }
              },
            },
            {
              key: "remove",
              value: function (e) {
                return this._charts.delete(e);
              },
            },
          ]),
          e
        );
      })(),
      _a = new ka(),
      wa = "transparent",
      Sa = {
        boolean: function (e, t, n) {
          return n > 0.5 ? t : e;
        },
        color: function (e, t, n) {
          var r = Wr(e || wa),
            i = r.valid && Wr(t || wa);
          return i && i.valid ? i.mix(r, n).hexString() : t;
        },
        number: function (e, t, n) {
          return e + (t - e) * n;
        },
      },
      Ea = (function () {
        function e(t, n, r, i) {
          Re(this, e);
          var a = n[r];
          i = Mi([t.to, i, a, t.from]);
          var o = Mi([t.from, a, i]);
          (this._active = !0),
            (this._fn = t.fn || Sa[t.type || typeof o]),
            (this._easing = Br[t.easing] || Br.linear),
            (this._start = Math.floor(Date.now() + (t.delay || 0))),
            (this._duration = this._total = Math.floor(t.duration)),
            (this._loop = !!t.loop),
            (this._target = n),
            (this._prop = r),
            (this._from = o),
            (this._to = i),
            (this._promises = void 0);
        }
        return (
          Ne(e, [
            {
              key: "active",
              value: function () {
                return this._active;
              },
            },
            {
              key: "update",
              value: function (e, t, n) {
                if (this._active) {
                  this._notify(!1);
                  var r = this._target[this._prop],
                    i = n - this._start,
                    a = this._duration - i;
                  (this._start = n),
                    (this._duration = Math.floor(Math.max(a, e.duration))),
                    (this._total += i),
                    (this._loop = !!e.loop),
                    (this._to = Mi([e.to, t, r, e.from])),
                    (this._from = Mi([e.from, r, t]));
                }
              },
            },
            {
              key: "cancel",
              value: function () {
                this._active &&
                  (this.tick(Date.now()),
                  (this._active = !1),
                  this._notify(!1));
              },
            },
            {
              key: "tick",
              value: function (e) {
                var t,
                  n = e - this._start,
                  r = this._duration,
                  i = this._prop,
                  a = this._from,
                  o = this._loop,
                  s = this._to;
                if (((this._active = a !== s && (o || n < r)), !this._active))
                  return (this._target[i] = s), void this._notify(!0);
                n < 0
                  ? (this._target[i] = a)
                  : ((t = (n / r) % 2),
                    (t = o && t > 1 ? 2 - t : t),
                    (t = this._easing(Math.min(1, Math.max(0, t)))),
                    (this._target[i] = this._fn(a, s, t)));
              },
            },
            {
              key: "wait",
              value: function () {
                var e = this._promises || (this._promises = []);
                return new Promise(function (t, n) {
                  e.push({ res: t, rej: n });
                });
              },
            },
            {
              key: "_notify",
              value: function (e) {
                for (
                  var t = e ? "res" : "rej", n = this._promises || [], r = 0;
                  r < n.length;
                  r++
                )
                  n[r][t]();
              },
            },
          ]),
          e
        );
      })(),
      Ma = (function () {
        function e(t, n) {
          Re(this, e),
            (this._chart = t),
            (this._properties = new Map()),
            this.configure(n);
        }
        return (
          Ne(e, [
            {
              key: "configure",
              value: function (e) {
                if (An(e)) {
                  var t = Object.keys(ti.animation),
                    n = this._properties;
                  Object.getOwnPropertyNames(e).forEach(function (r) {
                    var i = e[r];
                    if (An(i)) {
                      for (var a = {}, o = 0, s = t; o < s.length; o++) {
                        var l = s[o];
                        a[l] = i[l];
                      }
                      ((Rn(i.properties) && i.properties) || [r]).forEach(
                        function (e) {
                          (e !== r && n.has(e)) || n.set(e, a);
                        }
                      );
                    }
                  });
                }
              },
            },
            {
              key: "_animateOptions",
              value: function (e, t) {
                var n = t.options,
                  r = (function (e, t) {
                    if (!t) return;
                    var n = e.options;
                    if (!n) return void (e.options = t);
                    n.$shared &&
                      (e.options = n =
                        Object.assign({}, n, { $shared: !1, $animations: {} }));
                    return n;
                  })(e, n);
                if (!r) return [];
                var i = this._createAnimations(r, n);
                return (
                  n.$shared &&
                    (function (e, t) {
                      for (
                        var n = [], r = Object.keys(t), i = 0;
                        i < r.length;
                        i++
                      ) {
                        var a = e[r[i]];
                        a && a.active() && n.push(a.wait());
                      }
                      return Promise.all(n);
                    })(e.options.$animations, n).then(
                      function () {
                        e.options = n;
                      },
                      function () {}
                    ),
                  i
                );
              },
            },
            {
              key: "_createAnimations",
              value: function (e, t) {
                var n,
                  r = this._properties,
                  i = [],
                  a = e.$animations || (e.$animations = {}),
                  o = Object.keys(t),
                  s = Date.now();
                for (n = o.length - 1; n >= 0; --n) {
                  var l = o[n];
                  if ("$" !== l.charAt(0))
                    if ("options" !== l) {
                      var u = t[l],
                        c = a[l],
                        f = r.get(l);
                      if (c) {
                        if (f && c.active()) {
                          c.update(f, u, s);
                          continue;
                        }
                        c.cancel();
                      }
                      f && f.duration
                        ? ((a[l] = c = new Ea(f, e, l, u)), i.push(c))
                        : (e[l] = u);
                    } else i.push.apply(i, Qt(this._animateOptions(e, t)));
                }
                return i;
              },
            },
            {
              key: "update",
              value: function (e, t) {
                if (0 !== this._properties.size) {
                  var n = this._createAnimations(e, t);
                  return n.length ? (_a.add(this._chart, n), !0) : void 0;
                }
                Object.assign(e, t);
              },
            },
          ]),
          e
        );
      })();
    function Ca(e, t) {
      var n = (e && e.options) || {},
        r = n.reverse,
        i = void 0 === n.min ? t : 0,
        a = void 0 === n.max ? t : 0;
      return { start: r ? a : i, end: r ? i : a };
    }
    function Pa(e, t) {
      var n,
        r,
        i = [],
        a = e._getSortedDatasetMetas(t);
      for (n = 0, r = a.length; n < r; ++n) i.push(a[n].index);
      return i;
    }
    function Oa(e, t, n) {
      var r,
        i,
        a,
        o,
        s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        l = e.keys,
        u = "single" === s.mode;
      if (null !== t) {
        for (r = 0, i = l.length; r < i; ++r) {
          if ((a = +l[r]) === n) {
            if (s.all) continue;
            break;
          }
          Nn((o = e.values[a])) &&
            (u || 0 === t || cr(t) === cr(o)) &&
            (t += o);
        }
        return t;
      }
    }
    function Ta(e, t) {
      var n = e && e.options.stacked;
      return n || (void 0 === n && void 0 !== t.stack);
    }
    function Da(e, t, n) {
      var r = e[t] || (e[t] = {});
      return r[n] || (r[n] = {});
    }
    function La(e, t, n, r) {
      var i,
        a = Kt(t.getMatchingVisibleMetas(r).reverse());
      try {
        for (a.s(); !(i = a.n()).done; ) {
          var o = i.value,
            s = e[o.index];
          if ((n && s > 0) || (!n && s < 0)) return o.index;
        }
      } catch (l) {
        a.e(l);
      } finally {
        a.f();
      }
      return null;
    }
    function Ra(e, t) {
      for (
        var n,
          r = e.chart,
          i = e._cachedMeta,
          a = r._stacks || (r._stacks = {}),
          o = i.iScale,
          s = i.vScale,
          l = i.index,
          u = o.axis,
          c = s.axis,
          f = (function (e, t, n) {
            return ""
              .concat(e.id, ".")
              .concat(t.id, ".")
              .concat(n.stack || n.type);
          })(o, s, i),
          h = t.length,
          d = 0;
        d < h;
        ++d
      ) {
        var p = t[d],
          v = p[u],
          g = p[c];
        ((n = (p._stacks || (p._stacks = {}))[c] = Da(a, f, v))[l] = g),
          (n._top = La(n, s, !0, i.type)),
          (n._bottom = La(n, s, !1, i.type)),
          ((n._visualValues || (n._visualValues = {}))[l] = g);
      }
    }
    function Aa(e, t) {
      var n = e.scales;
      return Object.keys(n)
        .filter(function (e) {
          return n[e].axis === t;
        })
        .shift();
    }
    function Na(e, t) {
      var n = e.controller.index,
        r = e.vScale && e.vScale.axis;
      if (r) {
        var i,
          a = Kt((t = t || e._parsed));
        try {
          for (a.s(); !(i = a.n()).done; ) {
            var o = i.value._stacks;
            if (!o || void 0 === o[r] || void 0 === o[r][n]) return;
            delete o[r][n],
              void 0 !== o[r]._visualValues &&
                void 0 !== o[r]._visualValues[n] &&
                delete o[r]._visualValues[n];
          }
        } catch (s) {
          a.e(s);
        } finally {
          a.f();
        }
      }
    }
    var za = function (e) {
        return "reset" === e || "none" === e;
      },
      Fa = function (e, t) {
        return t ? e : Object.assign({}, e);
      },
      Ia = (function () {
        function e(t, n) {
          Re(this, e),
            (this.chart = t),
            (this._ctx = t.ctx),
            (this.index = n),
            (this._cachedDataOpts = {}),
            (this._cachedMeta = this.getMeta()),
            (this._type = this._cachedMeta.type),
            (this.options = void 0),
            (this._parsing = !1),
            (this._data = void 0),
            (this._objectData = void 0),
            (this._sharedOptions = void 0),
            (this._drawStart = void 0),
            (this._drawCount = void 0),
            (this.enableOptionSharing = !1),
            (this.supportsDecimation = !1),
            (this.$context = void 0),
            (this._syncList = []),
            (this.datasetElementType = (
              this instanceof e ? this.constructor : void 0
            ).datasetElementType),
            (this.dataElementType = (
              this instanceof e ? this.constructor : void 0
            ).dataElementType),
            this.initialize();
        }
        return (
          Ne(e, [
            {
              key: "initialize",
              value: function () {
                var e = this._cachedMeta;
                this.configure(),
                  this.linkScales(),
                  (e._stacked = Ta(e.vScale, e)),
                  this.addElements(),
                  this.options.fill &&
                    !this.chart.isPluginEnabled("filler") &&
                    console.warn(
                      "Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options"
                    );
              },
            },
            {
              key: "updateIndex",
              value: function (e) {
                this.index !== e && Na(this._cachedMeta), (this.index = e);
              },
            },
            {
              key: "linkScales",
              value: function () {
                var e = this.chart,
                  t = this._cachedMeta,
                  n = this.getDataset(),
                  r = function (e, t, n, r) {
                    return "x" === e ? t : "r" === e ? r : n;
                  },
                  i = (t.xAxisID = Fn(n.xAxisID, Aa(e, "x"))),
                  a = (t.yAxisID = Fn(n.yAxisID, Aa(e, "y"))),
                  o = (t.rAxisID = Fn(n.rAxisID, Aa(e, "r"))),
                  s = t.indexAxis,
                  l = (t.iAxisID = r(s, i, a, o)),
                  u = (t.vAxisID = r(s, a, i, o));
                (t.xScale = this.getScaleForId(i)),
                  (t.yScale = this.getScaleForId(a)),
                  (t.rScale = this.getScaleForId(o)),
                  (t.iScale = this.getScaleForId(l)),
                  (t.vScale = this.getScaleForId(u));
              },
            },
            {
              key: "getDataset",
              value: function () {
                return this.chart.data.datasets[this.index];
              },
            },
            {
              key: "getMeta",
              value: function () {
                return this.chart.getDatasetMeta(this.index);
              },
            },
            {
              key: "getScaleForId",
              value: function (e) {
                return this.chart.scales[e];
              },
            },
            {
              key: "_getOtherScale",
              value: function (e) {
                var t = this._cachedMeta;
                return e === t.iScale ? t.vScale : t.iScale;
              },
            },
            {
              key: "reset",
              value: function () {
                this._update("reset");
              },
            },
            {
              key: "_destroy",
              value: function () {
                var e = this._cachedMeta;
                this._data && Or(this._data, this), e._stacked && Na(e);
              },
            },
            {
              key: "_dataCheck",
              value: function () {
                var e,
                  t,
                  n = this.getDataset(),
                  r = n.data || (n.data = []),
                  i = this._data;
                if (An(r))
                  this._data = (function (e) {
                    var t,
                      n,
                      r,
                      i = Object.keys(e),
                      a = new Array(i.length);
                    for (t = 0, n = i.length; t < n; ++t)
                      (r = i[t]), (a[t] = { x: r, y: e[r] });
                    return a;
                  })(r);
                else if (i !== r) {
                  if (i) {
                    Or(i, this);
                    var a = this._cachedMeta;
                    Na(a), (a._parsed = []);
                  }
                  r &&
                    Object.isExtensible(r) &&
                    ((t = this),
                    (e = r)._chartjs
                      ? e._chartjs.listeners.push(t)
                      : (Object.defineProperty(e, "_chartjs", {
                          configurable: !0,
                          enumerable: !1,
                          value: { listeners: [t] },
                        }),
                        Pr.forEach(function (t) {
                          var n = "_onData" + Gn(t),
                            r = e[t];
                          Object.defineProperty(e, t, {
                            configurable: !0,
                            enumerable: !1,
                            value: function () {
                              for (
                                var t = arguments.length,
                                  i = new Array(t),
                                  a = 0;
                                a < t;
                                a++
                              )
                                i[a] = arguments[a];
                              var o = r.apply(this, i);
                              return (
                                e._chartjs.listeners.forEach(function (e) {
                                  "function" === typeof e[n] &&
                                    e[n].apply(e, i);
                                }),
                                o
                              );
                            },
                          });
                        }))),
                    (this._syncList = []),
                    (this._data = r);
                }
              },
            },
            {
              key: "addElements",
              value: function () {
                var e = this._cachedMeta;
                this._dataCheck(),
                  this.datasetElementType &&
                    (e.dataset = new this.datasetElementType());
              },
            },
            {
              key: "buildOrUpdateElements",
              value: function (e) {
                var t = this._cachedMeta,
                  n = this.getDataset(),
                  r = !1;
                this._dataCheck();
                var i = t._stacked;
                (t._stacked = Ta(t.vScale, t)),
                  t.stack !== n.stack && ((r = !0), Na(t), (t.stack = n.stack)),
                  this._resyncElements(e),
                  (r || i !== t._stacked) && Ra(this, t._parsed);
              },
            },
            {
              key: "configure",
              value: function () {
                var e = this.chart.config,
                  t = e.datasetScopeKeys(this._type),
                  n = e.getOptionScopes(this.getDataset(), t, !0);
                (this.options = e.createResolver(n, this.getContext())),
                  (this._parsing = this.options.parsing),
                  (this._cachedDataOpts = {});
              },
            },
            {
              key: "parse",
              value: function (e, t) {
                var n,
                  r,
                  i,
                  a = this._cachedMeta,
                  o = this._data,
                  s = a.iScale,
                  l = a._stacked,
                  u = s.axis,
                  c = (0 === e && t === o.length) || a._sorted,
                  f = e > 0 && a._parsed[e - 1];
                if (!1 === this._parsing)
                  (a._parsed = o), (a._sorted = !0), (i = o);
                else {
                  i = Rn(o[e])
                    ? this.parseArrayData(a, o, e, t)
                    : An(o[e])
                    ? this.parseObjectData(a, o, e, t)
                    : this.parsePrimitiveData(a, o, e, t);
                  for (n = 0; n < t; ++n)
                    (a._parsed[n + e] = r = i[n]),
                      c &&
                        ((null === r[u] || (f && r[u] < f[u])) && (c = !1),
                        (f = r));
                  a._sorted = c;
                }
                l && Ra(this, i);
              },
            },
            {
              key: "parsePrimitiveData",
              value: function (e, t, n, r) {
                var i,
                  a,
                  o,
                  s = e.iScale,
                  u = e.vScale,
                  c = s.axis,
                  f = u.axis,
                  h = s.getLabels(),
                  d = s === u,
                  p = new Array(r);
                for (i = 0, a = r; i < a; ++i) {
                  var v;
                  (o = i + n),
                    (p[i] =
                      (l((v = {}), c, d || s.parse(h[o], o)),
                      l(v, f, u.parse(t[o], o)),
                      v));
                }
                return p;
              },
            },
            {
              key: "parseArrayData",
              value: function (e, t, n, r) {
                var i,
                  a,
                  o,
                  s,
                  l = e.xScale,
                  u = e.yScale,
                  c = new Array(r);
                for (i = 0, a = r; i < a; ++i)
                  (s = t[(o = i + n)]),
                    (c[i] = { x: l.parse(s[0], o), y: u.parse(s[1], o) });
                return c;
              },
            },
            {
              key: "parseObjectData",
              value: function (e, t, n, r) {
                var i,
                  a,
                  o,
                  s,
                  l = e.xScale,
                  u = e.yScale,
                  c = this._parsing,
                  f = c.xAxisKey,
                  h = void 0 === f ? "x" : f,
                  d = c.yAxisKey,
                  p = void 0 === d ? "y" : d,
                  v = new Array(r);
                for (i = 0, a = r; i < a; ++i)
                  (s = t[(o = i + n)]),
                    (v[i] = {
                      x: l.parse(Xn(s, h), o),
                      y: u.parse(Xn(s, p), o),
                    });
                return v;
              },
            },
            {
              key: "getParsed",
              value: function (e) {
                return this._cachedMeta._parsed[e];
              },
            },
            {
              key: "getDataElement",
              value: function (e) {
                return this._cachedMeta.data[e];
              },
            },
            {
              key: "applyStack",
              value: function (e, t, n) {
                var r = this.chart,
                  i = this._cachedMeta,
                  a = t[e.axis];
                return Oa(
                  { keys: Pa(r, !0), values: t._stacks[e.axis]._visualValues },
                  a,
                  i.index,
                  { mode: n }
                );
              },
            },
            {
              key: "updateRangeFromParsed",
              value: function (e, t, n, r) {
                var i = n[t.axis],
                  a = null === i ? NaN : i,
                  o = r && n._stacks[t.axis];
                r &&
                  o &&
                  ((r.values = o), (a = Oa(r, i, this._cachedMeta.index))),
                  (e.min = Math.min(e.min, a)),
                  (e.max = Math.max(e.max, a));
              },
            },
            {
              key: "getMinMax",
              value: function (e, t) {
                var n,
                  r,
                  i = this._cachedMeta,
                  a = i._parsed,
                  o = i._sorted && e === i.iScale,
                  s = a.length,
                  l = this._getOtherScale(e),
                  u = (function (e, t, n) {
                    return (
                      e &&
                      !t.hidden &&
                      t._stacked && { keys: Pa(n, !0), values: null }
                    );
                  })(t, i, this.chart),
                  c = {
                    min: Number.POSITIVE_INFINITY,
                    max: Number.NEGATIVE_INFINITY,
                  },
                  f = (function (e) {
                    var t = e.getUserBounds(),
                      n = t.min,
                      r = t.max,
                      i = t.minDefined,
                      a = t.maxDefined;
                    return {
                      min: i ? n : Number.NEGATIVE_INFINITY,
                      max: a ? r : Number.POSITIVE_INFINITY,
                    };
                  })(l),
                  h = f.min,
                  d = f.max;
                function p() {
                  var t = (r = a[n])[l.axis];
                  return !Nn(r[e.axis]) || h > t || d < t;
                }
                for (
                  n = 0;
                  n < s &&
                  (p() || (this.updateRangeFromParsed(c, e, r, u), !o));
                  ++n
                );
                if (o)
                  for (n = s - 1; n >= 0; --n)
                    if (!p()) {
                      this.updateRangeFromParsed(c, e, r, u);
                      break;
                    }
                return c;
              },
            },
            {
              key: "getAllParsedValues",
              value: function (e) {
                var t,
                  n,
                  r,
                  i = this._cachedMeta._parsed,
                  a = [];
                for (t = 0, n = i.length; t < n; ++t)
                  Nn((r = i[t][e.axis])) && a.push(r);
                return a;
              },
            },
            {
              key: "getMaxOverflow",
              value: function () {
                return !1;
              },
            },
            {
              key: "getLabelAndValue",
              value: function (e) {
                var t = this._cachedMeta,
                  n = t.iScale,
                  r = t.vScale,
                  i = this.getParsed(e);
                return {
                  label: n ? "" + n.getLabelForValue(i[n.axis]) : "",
                  value: r ? "" + r.getLabelForValue(i[r.axis]) : "",
                };
              },
            },
            {
              key: "_update",
              value: function (e) {
                var t = this._cachedMeta;
                this.update(e || "default"),
                  (t._clip = (function (e) {
                    var t, n, r, i;
                    return (
                      An(e)
                        ? ((t = e.top),
                          (n = e.right),
                          (r = e.bottom),
                          (i = e.left))
                        : (t = n = r = i = e),
                      {
                        top: t,
                        right: n,
                        bottom: r,
                        left: i,
                        disabled: !1 === e,
                      }
                    );
                  })(
                    Fn(
                      this.options.clip,
                      (function (e, t, n) {
                        if (!1 === n) return !1;
                        var r = Ca(e, n),
                          i = Ca(t, n);
                        return {
                          top: i.end,
                          right: r.end,
                          bottom: i.start,
                          left: r.start,
                        };
                      })(t.xScale, t.yScale, this.getMaxOverflow())
                    )
                  ));
              },
            },
            { key: "update", value: function (e) {} },
            {
              key: "draw",
              value: function () {
                var e,
                  t = this._ctx,
                  n = this.chart,
                  r = this._cachedMeta,
                  i = r.data || [],
                  a = n.chartArea,
                  o = [],
                  s = this._drawStart || 0,
                  l = this._drawCount || i.length - s,
                  u = this.options.drawActiveElementsOnTop;
                for (
                  r.dataset && r.dataset.draw(t, a, s, l), e = s;
                  e < s + l;
                  ++e
                ) {
                  var c = i[e];
                  c.hidden || (c.active && u ? o.push(c) : c.draw(t, a));
                }
                for (e = 0; e < o.length; ++e) o[e].draw(t, a);
              },
            },
            {
              key: "getStyle",
              value: function (e, t) {
                var n = t ? "active" : "default";
                return void 0 === e && this._cachedMeta.dataset
                  ? this.resolveDatasetElementOptions(n)
                  : this.resolveDataElementOptions(e || 0, n);
              },
            },
            {
              key: "getContext",
              value: function (e, t, n) {
                var r,
                  i = this.getDataset();
                if (e >= 0 && e < this._cachedMeta.data.length) {
                  var a = this._cachedMeta.data[e];
                  (r =
                    a.$context ||
                    (a.$context = (function (e, t, n) {
                      return Ci(e, {
                        active: !1,
                        dataIndex: t,
                        parsed: void 0,
                        raw: void 0,
                        element: n,
                        index: t,
                        mode: "default",
                        type: "data",
                      });
                    })(this.getContext(), e, a))),
                    (r.parsed = this.getParsed(e)),
                    (r.raw = i.data[e]),
                    (r.index = r.dataIndex = e);
                } else
                  (r =
                    this.$context ||
                    (this.$context = (function (e, t) {
                      return Ci(e, {
                        active: !1,
                        dataset: void 0,
                        datasetIndex: t,
                        index: t,
                        mode: "default",
                        type: "dataset",
                      });
                    })(this.chart.getContext(), this.index))),
                    (r.dataset = i),
                    (r.index = r.datasetIndex = this.index);
                return (r.active = !!t), (r.mode = n), r;
              },
            },
            {
              key: "resolveDatasetElementOptions",
              value: function (e) {
                return this._resolveElementOptions(
                  this.datasetElementType.id,
                  e
                );
              },
            },
            {
              key: "resolveDataElementOptions",
              value: function (e, t) {
                return this._resolveElementOptions(
                  this.dataElementType.id,
                  t,
                  e
                );
              },
            },
            {
              key: "_resolveElementOptions",
              value: function (e) {
                var t = this,
                  n =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : "default",
                  r = arguments.length > 2 ? arguments[2] : void 0,
                  i = "active" === n,
                  a = this._cachedDataOpts,
                  o = e + "-" + n,
                  s = a[o],
                  l = this.enableOptionSharing && Jn(r);
                if (s) return Fa(s, l);
                var u = this.chart.config,
                  c = u.datasetElementScopeKeys(this._type, e),
                  f = i ? ["".concat(e, "Hover"), "hover", e, ""] : [e, ""],
                  h = u.getOptionScopes(this.getDataset(), c),
                  d = Object.keys(ti.elements[e]),
                  p = u.resolveNamedOptions(
                    h,
                    d,
                    function () {
                      return t.getContext(r, i, n);
                    },
                    f
                  );
                return (
                  p.$shared &&
                    ((p.$shared = l), (a[o] = Object.freeze(Fa(p, l)))),
                  p
                );
              },
            },
            {
              key: "_resolveAnimations",
              value: function (e, t, n) {
                var r,
                  i = this.chart,
                  a = this._cachedDataOpts,
                  o = "animation-".concat(t),
                  s = a[o];
                if (s) return s;
                if (!1 !== i.options.animation) {
                  var l = this.chart.config,
                    u = l.datasetAnimationScopeKeys(this._type, t),
                    c = l.getOptionScopes(this.getDataset(), u);
                  r = l.createResolver(c, this.getContext(e, n, t));
                }
                var f = new Ma(i, r && r.animations);
                return r && r._cacheable && (a[o] = Object.freeze(f)), f;
              },
            },
            {
              key: "getSharedOptions",
              value: function (e) {
                if (e.$shared)
                  return (
                    this._sharedOptions ||
                    (this._sharedOptions = Object.assign({}, e))
                  );
              },
            },
            {
              key: "includeOptions",
              value: function (e, t) {
                return !t || za(e) || this.chart._animationsDisabled;
              },
            },
            {
              key: "_getSharedOptions",
              value: function (e, t) {
                var n = this.resolveDataElementOptions(e, t),
                  r = this._sharedOptions,
                  i = this.getSharedOptions(n),
                  a = this.includeOptions(t, i) || i !== r;
                return (
                  this.updateSharedOptions(i, t, n),
                  { sharedOptions: i, includeOptions: a }
                );
              },
            },
            {
              key: "updateElement",
              value: function (e, t, n, r) {
                za(r)
                  ? Object.assign(e, n)
                  : this._resolveAnimations(t, r).update(e, n);
              },
            },
            {
              key: "updateSharedOptions",
              value: function (e, t, n) {
                e && !za(t) && this._resolveAnimations(void 0, t).update(e, n);
              },
            },
            {
              key: "_setStyle",
              value: function (e, t, n, r) {
                e.active = r;
                var i = this.getStyle(t, r);
                this._resolveAnimations(t, n, r).update(e, {
                  options: (!r && this.getSharedOptions(i)) || i,
                });
              },
            },
            {
              key: "removeHoverStyle",
              value: function (e, t, n) {
                this._setStyle(e, n, "active", !1);
              },
            },
            {
              key: "setHoverStyle",
              value: function (e, t, n) {
                this._setStyle(e, n, "active", !0);
              },
            },
            {
              key: "_removeDatasetHoverStyle",
              value: function () {
                var e = this._cachedMeta.dataset;
                e && this._setStyle(e, void 0, "active", !1);
              },
            },
            {
              key: "_setDatasetHoverStyle",
              value: function () {
                var e = this._cachedMeta.dataset;
                e && this._setStyle(e, void 0, "active", !0);
              },
            },
            {
              key: "_resyncElements",
              value: function (e) {
                var t,
                  n = this._data,
                  r = this._cachedMeta.data,
                  i = Kt(this._syncList);
                try {
                  for (i.s(); !(t = i.n()).done; ) {
                    var o = a(t.value, 3),
                      s = o[0],
                      l = o[1],
                      u = o[2];
                    this[s](l, u);
                  }
                } catch (d) {
                  i.e(d);
                } finally {
                  i.f();
                }
                this._syncList = [];
                var c = r.length,
                  f = n.length,
                  h = Math.min(f, c);
                h && this.parse(0, h),
                  f > c
                    ? this._insertElements(c, f - c, e)
                    : f < c && this._removeElements(f, c - f);
              },
            },
            {
              key: "_insertElements",
              value: function (e, t) {
                var n,
                  r =
                    !(arguments.length > 2 && void 0 !== arguments[2]) ||
                    arguments[2],
                  i = this._cachedMeta,
                  a = i.data,
                  o = e + t,
                  s = function (e) {
                    for (e.length += t, n = e.length - 1; n >= o; n--)
                      e[n] = e[n - t];
                  };
                for (s(a), n = e; n < o; ++n) a[n] = new this.dataElementType();
                this._parsing && s(i._parsed),
                  this.parse(e, t),
                  r && this.updateElements(a, e, t, "reset");
              },
            },
            { key: "updateElements", value: function (e, t, n, r) {} },
            {
              key: "_removeElements",
              value: function (e, t) {
                var n = this._cachedMeta;
                if (this._parsing) {
                  var r = n._parsed.splice(e, t);
                  n._stacked && Na(n, r);
                }
                n.data.splice(e, t);
              },
            },
            {
              key: "_sync",
              value: function (e) {
                if (this._parsing) this._syncList.push(e);
                else {
                  var t = a(e, 3),
                    n = t[0],
                    r = t[1],
                    i = t[2];
                  this[n](r, i);
                }
                this.chart._dataChanges.push([this.index].concat(Qt(e)));
              },
            },
            {
              key: "_onDataPush",
              value: function () {
                var e = arguments.length;
                this._sync([
                  "_insertElements",
                  this.getDataset().data.length - e,
                  e,
                ]);
              },
            },
            {
              key: "_onDataPop",
              value: function () {
                this._sync([
                  "_removeElements",
                  this._cachedMeta.data.length - 1,
                  1,
                ]);
              },
            },
            {
              key: "_onDataShift",
              value: function () {
                this._sync(["_removeElements", 0, 1]);
              },
            },
            {
              key: "_onDataSplice",
              value: function (e, t) {
                t && this._sync(["_removeElements", e, t]);
                var n = arguments.length - 2;
                n && this._sync(["_insertElements", e, n]);
              },
            },
            {
              key: "_onDataUnshift",
              value: function () {
                this._sync(["_insertElements", 0, arguments.length]);
              },
            },
          ]),
          e
        );
      })();
    function ja(e) {
      var t,
        n,
        r,
        i,
        a = e.iScale,
        o = (function (e, t) {
          if (!e._cache.$bar) {
            for (
              var n = e.getMatchingVisibleMetas(t), r = [], i = 0, a = n.length;
              i < a;
              i++
            )
              r = r.concat(n[i].controller.getAllParsedValues(e));
            e._cache.$bar = Tr(
              r.sort(function (e, t) {
                return e - t;
              })
            );
          }
          return e._cache.$bar;
        })(a, e.type),
        s = a._length,
        l = function () {
          32767 !== r &&
            -32768 !== r &&
            (Jn(i) && (s = Math.min(s, Math.abs(r - i) || s)), (i = r));
        };
      for (t = 0, n = o.length; t < n; ++t) (r = a.getPixelForValue(o[t])), l();
      for (i = void 0, t = 0, n = a.ticks.length; t < n; ++t)
        (r = a.getPixelForTick(t)), l();
      return s;
    }
    function Ba(e, t, n, r) {
      return (
        Rn(e)
          ? (function (e, t, n, r) {
              var i = n.parse(e[0], r),
                a = n.parse(e[1], r),
                o = Math.min(i, a),
                s = Math.max(i, a),
                l = o,
                u = s;
              Math.abs(o) > Math.abs(s) && ((l = s), (u = o)),
                (t[n.axis] = u),
                (t._custom = {
                  barStart: l,
                  barEnd: u,
                  start: i,
                  end: a,
                  min: o,
                  max: s,
                });
            })(e, t, n, r)
          : (t[n.axis] = n.parse(e, r)),
        t
      );
    }
    function Va(e, t, n, r) {
      var i,
        a,
        o,
        s,
        l = e.iScale,
        u = e.vScale,
        c = l.getLabels(),
        f = l === u,
        h = [];
      for (i = n, a = n + r; i < a; ++i)
        (s = t[i]),
          ((o = {})[l.axis] = f || l.parse(c[i], i)),
          h.push(Ba(s, o, u, i));
      return h;
    }
    function Wa(e) {
      return e && void 0 !== e.barStart && void 0 !== e.barEnd;
    }
    function Ha(e, t, n, r) {
      var i = t.borderSkipped,
        a = {};
      if (i)
        if (!0 !== i) {
          var o = (function (e) {
              var t, n, r, i, a;
              return (
                e.horizontal
                  ? ((t = e.base > e.x), (n = "left"), (r = "right"))
                  : ((t = e.base < e.y), (n = "bottom"), (r = "top")),
                t ? ((i = "end"), (a = "start")) : ((i = "start"), (a = "end")),
                { start: n, end: r, reverse: t, top: i, bottom: a }
              );
            })(e),
            s = o.start,
            l = o.end,
            u = o.reverse,
            c = o.top,
            f = o.bottom;
          "middle" === i &&
            n &&
            ((e.enableBorderRadius = !0),
            (n._top || 0) === r
              ? (i = c)
              : (n._bottom || 0) === r
              ? (i = f)
              : ((a[Ua(f, s, l, u)] = !0), (i = c))),
            (a[Ua(i, s, l, u)] = !0),
            (e.borderSkipped = a);
        } else e.borderSkipped = { top: !0, right: !0, bottom: !0, left: !0 };
      else e.borderSkipped = a;
    }
    function Ua(e, t, n, r) {
      var i, a, o;
      return (
        r
          ? ((o = n),
            (e = $a((e = (i = e) === (a = t) ? o : i === o ? a : i), n, t)))
          : (e = $a(e, t, n)),
        e
      );
    }
    function $a(e, t, n) {
      return "start" === e ? t : "end" === e ? n : e;
    }
    function Ya(e, t, n) {
      var r = t.inflateAmount;
      e.inflateAmount = "auto" === r ? (1 === n ? 0.33 : 0) : r;
    }
    l(Ia, "defaults", {}),
      l(Ia, "datasetElementType", null),
      l(Ia, "dataElementType", null);
    var qa = (function (e) {
      Yt(n, e);
      var t = qt(n);
      function n() {
        return Re(this, n), t.apply(this, arguments);
      }
      return (
        Ne(n, [
          {
            key: "parsePrimitiveData",
            value: function (e, t, n, r) {
              return Va(e, t, n, r);
            },
          },
          {
            key: "parseArrayData",
            value: function (e, t, n, r) {
              return Va(e, t, n, r);
            },
          },
          {
            key: "parseObjectData",
            value: function (e, t, n, r) {
              var i,
                a,
                o,
                s,
                l = e.iScale,
                u = e.vScale,
                c = this._parsing,
                f = c.xAxisKey,
                h = void 0 === f ? "x" : f,
                d = c.yAxisKey,
                p = void 0 === d ? "y" : d,
                v = "x" === l.axis ? h : p,
                g = "x" === u.axis ? h : p,
                m = [];
              for (i = n, a = n + r; i < a; ++i)
                (s = t[i]),
                  ((o = {})[l.axis] = l.parse(Xn(s, v), i)),
                  m.push(Ba(Xn(s, g), o, u, i));
              return m;
            },
          },
          {
            key: "updateRangeFromParsed",
            value: function (e, t, r, i) {
              Ut(Ht(n.prototype), "updateRangeFromParsed", this).call(
                this,
                e,
                t,
                r,
                i
              );
              var a = r._custom;
              a &&
                t === this._cachedMeta.vScale &&
                ((e.min = Math.min(e.min, a.min)),
                (e.max = Math.max(e.max, a.max)));
            },
          },
          {
            key: "getMaxOverflow",
            value: function () {
              return 0;
            },
          },
          {
            key: "getLabelAndValue",
            value: function (e) {
              var t = this._cachedMeta,
                n = t.iScale,
                r = t.vScale,
                i = this.getParsed(e),
                a = i._custom,
                o = Wa(a)
                  ? "[" + a.start + ", " + a.end + "]"
                  : "" + r.getLabelForValue(i[r.axis]);
              return { label: "" + n.getLabelForValue(i[n.axis]), value: o };
            },
          },
          {
            key: "initialize",
            value: function () {
              (this.enableOptionSharing = !0),
                Ut(Ht(n.prototype), "initialize", this).call(this),
                (this._cachedMeta.stack = this.getDataset().stack);
            },
          },
          {
            key: "update",
            value: function (e) {
              var t = this._cachedMeta;
              this.updateElements(t.data, 0, t.data.length, e);
            },
          },
          {
            key: "updateElements",
            value: function (e, t, n, r) {
              for (
                var i = "reset" === r,
                  a = this.index,
                  o = this._cachedMeta.vScale,
                  s = o.getBasePixel(),
                  l = o.isHorizontal(),
                  u = this._getRuler(),
                  c = this._getSharedOptions(t, r),
                  f = c.sharedOptions,
                  h = c.includeOptions,
                  d = t;
                d < t + n;
                d++
              ) {
                var p = this.getParsed(d),
                  v =
                    i || Ln(p[o.axis])
                      ? { base: s, head: s }
                      : this._calculateBarValuePixels(d),
                  g = this._calculateBarIndexPixels(d, u),
                  m = (p._stacks || {})[o.axis],
                  y = {
                    horizontal: l,
                    base: v.base,
                    enableBorderRadius:
                      !m || Wa(p._custom) || a === m._top || a === m._bottom,
                    x: l ? v.head : g.center,
                    y: l ? g.center : v.head,
                    height: l ? g.size : Math.abs(v.size),
                    width: l ? Math.abs(v.size) : g.size,
                  };
                h &&
                  (y.options =
                    f ||
                    this.resolveDataElementOptions(
                      d,
                      e[d].active ? "active" : r
                    ));
                var b = y.options || e[d].options;
                Ha(y, b, m, a),
                  Ya(y, b, u.ratio),
                  this.updateElement(e[d], d, y, r);
              }
            },
          },
          {
            key: "_getStacks",
            value: function (e, t) {
              var n,
                r = this._cachedMeta.iScale,
                i = r.getMatchingVisibleMetas(this._type).filter(function (e) {
                  return e.controller.options.grouped;
                }),
                a = r.options.stacked,
                o = [],
                s = function (e) {
                  var n = e.controller.getParsed(t),
                    r = n && n[e.vScale.axis];
                  if (Ln(r) || isNaN(r)) return !0;
                },
                l = Kt(i);
              try {
                for (l.s(); !(n = l.n()).done; ) {
                  var u = n.value;
                  if (
                    (void 0 === t || !s(u)) &&
                    ((!1 === a ||
                      -1 === o.indexOf(u.stack) ||
                      (void 0 === a && void 0 === u.stack)) &&
                      o.push(u.stack),
                    u.index === e)
                  )
                    break;
                }
              } catch (c) {
                l.e(c);
              } finally {
                l.f();
              }
              return o.length || o.push(void 0), o;
            },
          },
          {
            key: "_getStackCount",
            value: function (e) {
              return this._getStacks(void 0, e).length;
            },
          },
          {
            key: "_getStackIndex",
            value: function (e, t, n) {
              var r = this._getStacks(e, n),
                i = void 0 !== t ? r.indexOf(t) : -1;
              return -1 === i ? r.length - 1 : i;
            },
          },
          {
            key: "_getRuler",
            value: function () {
              var e,
                t,
                n = this.options,
                r = this._cachedMeta,
                i = r.iScale,
                a = [];
              for (e = 0, t = r.data.length; e < t; ++e)
                a.push(i.getPixelForValue(this.getParsed(e)[i.axis], e));
              var o = n.barThickness;
              return {
                min: o || ja(r),
                pixels: a,
                start: i._startPixel,
                end: i._endPixel,
                stackCount: this._getStackCount(),
                scale: i,
                grouped: n.grouped,
                ratio: o ? 1 : n.categoryPercentage * n.barPercentage,
              };
            },
          },
          {
            key: "_calculateBarValuePixels",
            value: function (e) {
              var t,
                n,
                r = this._cachedMeta,
                i = r.vScale,
                a = r._stacked,
                o = r.index,
                s = this.options,
                l = s.base,
                u = s.minBarLength,
                c = l || 0,
                f = this.getParsed(e),
                h = f._custom,
                d = Wa(h),
                p = f[i.axis],
                v = 0,
                g = a ? this.applyStack(i, f, a) : p;
              g !== p && ((v = g - p), (g = p)),
                d &&
                  ((p = h.barStart),
                  (g = h.barEnd - h.barStart),
                  0 !== p && cr(p) !== cr(h.barEnd) && (v = 0),
                  (v += p));
              var m = Ln(l) || d ? v : l,
                y = i.getPixelForValue(m);
              if (
                ((n =
                  (t = this.chart.getDataVisibility(e)
                    ? i.getPixelForValue(v + g)
                    : y) - y),
                Math.abs(n) < u)
              ) {
                (n =
                  (function (e, t, n) {
                    return 0 !== e
                      ? cr(e)
                      : (t.isHorizontal() ? 1 : -1) * (t.min >= n ? 1 : -1);
                  })(n, i, c) * u),
                  p === c && (y -= n / 2);
                var b = i.getPixelForDecimal(0),
                  x = i.getPixelForDecimal(1),
                  k = Math.min(b, x),
                  _ = Math.max(b, x);
                (t = (y = Math.max(Math.min(y, _), k)) + n),
                  a &&
                    !d &&
                    (f._stacks[i.axis]._visualValues[o] =
                      i.getValueForPixel(t) - i.getValueForPixel(y));
              }
              if (y === i.getPixelForValue(c)) {
                var w = (cr(n) * i.getLineWidthForValue(c)) / 2;
                (y += w), (n -= w);
              }
              return { size: n, base: y, head: t, center: t + n / 2 };
            },
          },
          {
            key: "_calculateBarIndexPixels",
            value: function (e, t) {
              var n,
                r,
                i = t.scale,
                a = this.options,
                o = a.skipNull,
                s = Fn(a.maxBarThickness, 1 / 0);
              if (t.grouped) {
                var l = o ? this._getStackCount(e) : t.stackCount,
                  u =
                    "flex" === a.barThickness
                      ? (function (e, t, n, r) {
                          var i = t.pixels,
                            a = i[e],
                            o = e > 0 ? i[e - 1] : null,
                            s = e < i.length - 1 ? i[e + 1] : null,
                            l = n.categoryPercentage;
                          null === o &&
                            (o = a - (null === s ? t.end - t.start : s - a)),
                            null === s && (s = a + a - o);
                          var u = a - ((a - Math.min(o, s)) / 2) * l;
                          return {
                            chunk: ((Math.abs(s - o) / 2) * l) / r,
                            ratio: n.barPercentage,
                            start: u,
                          };
                        })(e, t, a, l)
                      : (function (e, t, n, r) {
                          var i,
                            a,
                            o = n.barThickness;
                          return (
                            Ln(o)
                              ? ((i = t.min * n.categoryPercentage),
                                (a = n.barPercentage))
                              : ((i = o * r), (a = 1)),
                            {
                              chunk: i / r,
                              ratio: a,
                              start: t.pixels[e] - i / 2,
                            }
                          );
                        })(e, t, a, l),
                  c = this._getStackIndex(
                    this.index,
                    this._cachedMeta.stack,
                    o ? e : void 0
                  );
                (n = u.start + u.chunk * c + u.chunk / 2),
                  (r = Math.min(s, u.chunk * u.ratio));
              } else
                (n = i.getPixelForValue(this.getParsed(e)[i.axis], e)),
                  (r = Math.min(s, t.min * t.ratio));
              return { base: n - r / 2, head: n + r / 2, center: n, size: r };
            },
          },
          {
            key: "draw",
            value: function () {
              for (
                var e = this._cachedMeta,
                  t = e.vScale,
                  n = e.data,
                  r = n.length,
                  i = 0;
                i < r;
                ++i
              )
                null !== this.getParsed(i)[t.axis] && n[i].draw(this._ctx);
            },
          },
        ]),
        n
      );
    })(Ia);
    l(qa, "id", "bar"),
      l(qa, "defaults", {
        datasetElementType: !1,
        dataElementType: "bar",
        categoryPercentage: 0.8,
        barPercentage: 0.9,
        grouped: !0,
        animations: {
          numbers: {
            type: "number",
            properties: ["x", "y", "base", "width", "height"],
          },
        },
      }),
      l(qa, "overrides", {
        scales: {
          _index_: { type: "category", offset: !0, grid: { offset: !0 } },
          _value_: { type: "linear", beginAtZero: !0 },
        },
      });
    var Ka = (function (e) {
      Yt(n, e);
      var t = qt(n);
      function n() {
        return Re(this, n), t.apply(this, arguments);
      }
      return (
        Ne(n, [
          {
            key: "initialize",
            value: function () {
              (this.enableOptionSharing = !0),
                Ut(Ht(n.prototype), "initialize", this).call(this);
            },
          },
          {
            key: "parsePrimitiveData",
            value: function (e, t, r, i) {
              for (
                var a = Ut(Ht(n.prototype), "parsePrimitiveData", this).call(
                    this,
                    e,
                    t,
                    r,
                    i
                  ),
                  o = 0;
                o < a.length;
                o++
              )
                a[o]._custom = this.resolveDataElementOptions(o + r).radius;
              return a;
            },
          },
          {
            key: "parseArrayData",
            value: function (e, t, r, i) {
              for (
                var a = Ut(Ht(n.prototype), "parseArrayData", this).call(
                    this,
                    e,
                    t,
                    r,
                    i
                  ),
                  o = 0;
                o < a.length;
                o++
              ) {
                var s = t[r + o];
                a[o]._custom = Fn(
                  s[2],
                  this.resolveDataElementOptions(o + r).radius
                );
              }
              return a;
            },
          },
          {
            key: "parseObjectData",
            value: function (e, t, r, i) {
              for (
                var a = Ut(Ht(n.prototype), "parseObjectData", this).call(
                    this,
                    e,
                    t,
                    r,
                    i
                  ),
                  o = 0;
                o < a.length;
                o++
              ) {
                var s = t[r + o];
                a[o]._custom = Fn(
                  s && s.r && +s.r,
                  this.resolveDataElementOptions(o + r).radius
                );
              }
              return a;
            },
          },
          {
            key: "getMaxOverflow",
            value: function () {
              for (
                var e = this._cachedMeta.data, t = 0, n = e.length - 1;
                n >= 0;
                --n
              )
                t = Math.max(
                  t,
                  e[n].size(this.resolveDataElementOptions(n)) / 2
                );
              return t > 0 && t;
            },
          },
          {
            key: "getLabelAndValue",
            value: function (e) {
              var t = this._cachedMeta,
                n = this.chart.data.labels || [],
                r = t.xScale,
                i = t.yScale,
                a = this.getParsed(e),
                o = r.getLabelForValue(a.x),
                s = i.getLabelForValue(a.y),
                l = a._custom;
              return {
                label: n[e] || "",
                value: "(" + o + ", " + s + (l ? ", " + l : "") + ")",
              };
            },
          },
          {
            key: "update",
            value: function (e) {
              var t = this._cachedMeta.data;
              this.updateElements(t, 0, t.length, e);
            },
          },
          {
            key: "updateElements",
            value: function (e, t, n, r) {
              for (
                var i = "reset" === r,
                  a = this._cachedMeta,
                  o = a.iScale,
                  s = a.vScale,
                  l = this._getSharedOptions(t, r),
                  u = l.sharedOptions,
                  c = l.includeOptions,
                  f = o.axis,
                  h = s.axis,
                  d = t;
                d < t + n;
                d++
              ) {
                var p = e[d],
                  v = !i && this.getParsed(d),
                  g = {},
                  m = (g[f] = i
                    ? o.getPixelForDecimal(0.5)
                    : o.getPixelForValue(v[f])),
                  y = (g[h] = i ? s.getBasePixel() : s.getPixelForValue(v[h]));
                (g.skip = isNaN(m) || isNaN(y)),
                  c &&
                    ((g.options =
                      u ||
                      this.resolveDataElementOptions(
                        d,
                        p.active ? "active" : r
                      )),
                    i && (g.options.radius = 0)),
                  this.updateElement(p, d, g, r);
              }
            },
          },
          {
            key: "resolveDataElementOptions",
            value: function (e, t) {
              var r = this.getParsed(e),
                i = Ut(Ht(n.prototype), "resolveDataElementOptions", this).call(
                  this,
                  e,
                  t
                );
              i.$shared && (i = Object.assign({}, i, { $shared: !1 }));
              var a = i.radius;
              return (
                "active" !== t && (i.radius = 0),
                (i.radius += Fn(r && r._custom, a)),
                i
              );
            },
          },
        ]),
        n
      );
    })(Ia);
    l(Ka, "id", "bubble"),
      l(Ka, "defaults", {
        datasetElementType: !1,
        dataElementType: "point",
        animations: {
          numbers: {
            type: "number",
            properties: ["x", "y", "borderWidth", "radius"],
          },
        },
      }),
      l(Ka, "overrides", {
        scales: { x: { type: "linear" }, y: { type: "linear" } },
      });
    var Qa = (function (e) {
      Yt(n, e);
      var t = qt(n);
      function n(e, r) {
        var i;
        return (
          Re(this, n),
          ((i = t.call(this, e, r)).enableOptionSharing = !0),
          (i.innerRadius = void 0),
          (i.outerRadius = void 0),
          (i.offsetX = void 0),
          (i.offsetY = void 0),
          i
        );
      }
      return (
        Ne(n, [
          { key: "linkScales", value: function () {} },
          {
            key: "parse",
            value: function (e, t) {
              var n = this.getDataset().data,
                r = this._cachedMeta;
              if (!1 === this._parsing) r._parsed = n;
              else {
                var i,
                  a,
                  o = function (e) {
                    return +n[e];
                  };
                if (An(n[e])) {
                  var s = this._parsing.key,
                    l = void 0 === s ? "value" : s;
                  o = function (e) {
                    return +Xn(n[e], l);
                  };
                }
                for (i = e, a = e + t; i < a; ++i) r._parsed[i] = o(i);
              }
            },
          },
          {
            key: "_getRotation",
            value: function () {
              return vr(this.options.rotation - 90);
            },
          },
          {
            key: "_getCircumference",
            value: function () {
              return vr(this.options.circumference);
            },
          },
          {
            key: "_getRotationExtents",
            value: function () {
              for (
                var e = nr, t = -nr, n = 0;
                n < this.chart.data.datasets.length;
                ++n
              )
                if (
                  this.chart.isDatasetVisible(n) &&
                  this.chart.getDatasetMeta(n).type === this._type
                ) {
                  var r = this.chart.getDatasetMeta(n).controller,
                    i = r._getRotation(),
                    a = r._getCircumference();
                  (e = Math.min(e, i)), (t = Math.max(t, i + a));
                }
              return { rotation: e, circumference: t - e };
            },
          },
          {
            key: "update",
            value: function (e) {
              var t,
                n,
                r = this.chart.chartArea,
                i = this._cachedMeta,
                a = i.data,
                o =
                  this.getMaxBorderWidth() +
                  this.getMaxOffset(a) +
                  this.options.spacing,
                s = Math.max((Math.min(r.width, r.height) - o) / 2, 0),
                l = Math.min(
                  ((t = this.options.cutout),
                  (n = s),
                  "string" === typeof t && t.endsWith("%")
                    ? parseFloat(t) / 100
                    : +t / n),
                  1
                ),
                u = this._getRingWeight(this.index),
                c = this._getRotationExtents(),
                f = c.circumference,
                h = (function (e, t, n) {
                  var r = 1,
                    i = 1,
                    a = 0,
                    o = 0;
                  if (t < nr) {
                    var s = e,
                      l = s + t,
                      u = Math.cos(s),
                      c = Math.sin(s),
                      f = Math.cos(l),
                      h = Math.sin(l),
                      d = function (e, t, r) {
                        return _r(e, s, l, !0)
                          ? 1
                          : Math.max(t, t * n, r, r * n);
                      },
                      p = function (e, t, r) {
                        return _r(e, s, l, !0)
                          ? -1
                          : Math.min(t, t * n, r, r * n);
                      },
                      v = d(0, u, f),
                      g = d(or, c, h),
                      m = p(tr, u, f),
                      y = p(tr + or, c, h);
                    (r = (v - m) / 2),
                      (i = (g - y) / 2),
                      (a = -(v + m) / 2),
                      (o = -(g + y) / 2);
                  }
                  return { ratioX: r, ratioY: i, offsetX: a, offsetY: o };
                })(c.rotation, f, l),
                d = h.ratioX,
                p = h.ratioY,
                v = h.offsetX,
                g = h.offsetY,
                m = (r.width - o) / d,
                y = (r.height - o) / p,
                b = Math.max(Math.min(m, y) / 2, 0),
                x = In(this.options.radius, b),
                k =
                  (x - Math.max(x * l, 0)) /
                  this._getVisibleDatasetWeightTotal();
              (this.offsetX = v * x),
                (this.offsetY = g * x),
                (i.total = this.calculateTotal()),
                (this.outerRadius =
                  x - k * this._getRingWeightOffset(this.index)),
                (this.innerRadius = Math.max(this.outerRadius - k * u, 0)),
                this.updateElements(a, 0, a.length, e);
            },
          },
          {
            key: "_circumference",
            value: function (e, t) {
              var n = this.options,
                r = this._cachedMeta,
                i = this._getCircumference();
              return (t && n.animation.animateRotate) ||
                !this.chart.getDataVisibility(e) ||
                null === r._parsed[e] ||
                r.data[e].hidden
                ? 0
                : this.calculateCircumference((r._parsed[e] * i) / nr);
            },
          },
          {
            key: "updateElements",
            value: function (e, t, n, r) {
              var i,
                a = "reset" === r,
                o = this.chart,
                s = o.chartArea,
                l = o.options.animation,
                u = (s.left + s.right) / 2,
                c = (s.top + s.bottom) / 2,
                f = a && l.animateScale,
                h = f ? 0 : this.innerRadius,
                d = f ? 0 : this.outerRadius,
                p = this._getSharedOptions(t, r),
                v = p.sharedOptions,
                g = p.includeOptions,
                m = this._getRotation();
              for (i = 0; i < t; ++i) m += this._circumference(i, a);
              for (i = t; i < t + n; ++i) {
                var y = this._circumference(i, a),
                  b = e[i],
                  x = {
                    x: u + this.offsetX,
                    y: c + this.offsetY,
                    startAngle: m,
                    endAngle: m + y,
                    circumference: y,
                    outerRadius: d,
                    innerRadius: h,
                  };
                g &&
                  (x.options =
                    v ||
                    this.resolveDataElementOptions(i, b.active ? "active" : r)),
                  (m += y),
                  this.updateElement(b, i, x, r);
              }
            },
          },
          {
            key: "calculateTotal",
            value: function () {
              var e,
                t = this._cachedMeta,
                n = t.data,
                r = 0;
              for (e = 0; e < n.length; e++) {
                var i = t._parsed[e];
                null === i ||
                  isNaN(i) ||
                  !this.chart.getDataVisibility(e) ||
                  n[e].hidden ||
                  (r += Math.abs(i));
              }
              return r;
            },
          },
          {
            key: "calculateCircumference",
            value: function (e) {
              var t = this._cachedMeta.total;
              return t > 0 && !isNaN(e) ? nr * (Math.abs(e) / t) : 0;
            },
          },
          {
            key: "getLabelAndValue",
            value: function (e) {
              var t = this._cachedMeta,
                n = this.chart,
                r = n.data.labels || [],
                i = qr(t._parsed[e], n.options.locale);
              return { label: r[e] || "", value: i };
            },
          },
          {
            key: "getMaxBorderWidth",
            value: function (e) {
              var t,
                n,
                r,
                i,
                a,
                o = 0,
                s = this.chart;
              if (!e)
                for (t = 0, n = s.data.datasets.length; t < n; ++t)
                  if (s.isDatasetVisible(t)) {
                    (e = (r = s.getDatasetMeta(t)).data), (i = r.controller);
                    break;
                  }
              if (!e) return 0;
              for (t = 0, n = e.length; t < n; ++t)
                "inner" !== (a = i.resolveDataElementOptions(t)).borderAlign &&
                  (o = Math.max(
                    o,
                    a.borderWidth || 0,
                    a.hoverBorderWidth || 0
                  ));
              return o;
            },
          },
          {
            key: "getMaxOffset",
            value: function (e) {
              for (var t = 0, n = 0, r = e.length; n < r; ++n) {
                var i = this.resolveDataElementOptions(n);
                t = Math.max(t, i.offset || 0, i.hoverOffset || 0);
              }
              return t;
            },
          },
          {
            key: "_getRingWeightOffset",
            value: function (e) {
              for (var t = 0, n = 0; n < e; ++n)
                this.chart.isDatasetVisible(n) && (t += this._getRingWeight(n));
              return t;
            },
          },
          {
            key: "_getRingWeight",
            value: function (e) {
              return Math.max(Fn(this.chart.data.datasets[e].weight, 1), 0);
            },
          },
          {
            key: "_getVisibleDatasetWeightTotal",
            value: function () {
              return (
                this._getRingWeightOffset(this.chart.data.datasets.length) || 1
              );
            },
          },
        ]),
        n
      );
    })(Ia);
    l(Qa, "id", "doughnut"),
      l(Qa, "defaults", {
        datasetElementType: !1,
        dataElementType: "arc",
        animation: { animateRotate: !0, animateScale: !1 },
        animations: {
          numbers: {
            type: "number",
            properties: [
              "circumference",
              "endAngle",
              "innerRadius",
              "outerRadius",
              "startAngle",
              "x",
              "y",
              "offset",
              "borderWidth",
              "spacing",
            ],
          },
        },
        cutout: "50%",
        rotation: 0,
        circumference: 360,
        radius: "100%",
        spacing: 0,
        indexAxis: "r",
      }),
      l(Qa, "descriptors", {
        _scriptable: function (e) {
          return "spacing" !== e;
        },
        _indexable: function (e) {
          return (
            "spacing" !== e &&
            !e.startsWith("borderDash") &&
            !e.startsWith("hoverBorderDash")
          );
        },
      }),
      l(Qa, "overrides", {
        aspectRatio: 1,
        plugins: {
          legend: {
            labels: {
              generateLabels: function (e) {
                var t = e.data;
                if (t.labels.length && t.datasets.length) {
                  var n = e.legend.options.labels,
                    r = n.pointStyle,
                    i = n.color;
                  return t.labels.map(function (t, n) {
                    var a = e.getDatasetMeta(0).controller.getStyle(n);
                    return {
                      text: t,
                      fillStyle: a.backgroundColor,
                      strokeStyle: a.borderColor,
                      fontColor: i,
                      lineWidth: a.borderWidth,
                      pointStyle: r,
                      hidden: !e.getDataVisibility(n),
                      index: n,
                    };
                  });
                }
                return [];
              },
            },
            onClick: function (e, t, n) {
              n.chart.toggleDataVisibility(t.index), n.chart.update();
            },
          },
        },
      });
    var Xa = (function (e) {
      Yt(n, e);
      var t = qt(n);
      function n() {
        return Re(this, n), t.apply(this, arguments);
      }
      return (
        Ne(n, [
          {
            key: "initialize",
            value: function () {
              (this.enableOptionSharing = !0),
                (this.supportsDecimation = !0),
                Ut(Ht(n.prototype), "initialize", this).call(this);
            },
          },
          {
            key: "update",
            value: function (e) {
              var t = this._cachedMeta,
                n = t.dataset,
                r = t.data,
                i = void 0 === r ? [] : r,
                a = t._dataset,
                o = this.chart._animationsDisabled,
                s = Nr(t, i, o),
                l = s.start,
                u = s.count;
              (this._drawStart = l),
                (this._drawCount = u),
                zr(t) && ((l = 0), (u = i.length)),
                (n._chart = this.chart),
                (n._datasetIndex = this.index),
                (n._decimated = !!a._decimated),
                (n.points = i);
              var c = this.resolveDatasetElementOptions(e);
              this.options.showLine || (c.borderWidth = 0),
                (c.segment = this.options.segment),
                this.updateElement(n, void 0, { animated: !o, options: c }, e),
                this.updateElements(i, l, u, e);
            },
          },
          {
            key: "updateElements",
            value: function (e, t, n, r) {
              for (
                var i = "reset" === r,
                  a = this._cachedMeta,
                  o = a.iScale,
                  s = a.vScale,
                  l = a._stacked,
                  u = a._dataset,
                  c = this._getSharedOptions(t, r),
                  f = c.sharedOptions,
                  h = c.includeOptions,
                  d = o.axis,
                  p = s.axis,
                  v = this.options,
                  g = v.spanGaps,
                  m = v.segment,
                  y = dr(g) ? g : Number.POSITIVE_INFINITY,
                  b = this.chart._animationsDisabled || i || "none" === r,
                  x = t + n,
                  k = e.length,
                  _ = t > 0 && this.getParsed(t - 1),
                  w = 0;
                w < k;
                ++w
              ) {
                var S = e[w],
                  E = b ? S : {};
                if (w < t || w >= x) E.skip = !0;
                else {
                  var M = this.getParsed(w),
                    C = Ln(M[p]),
                    P = (E[d] = o.getPixelForValue(M[d], w)),
                    O = (E[p] =
                      i || C
                        ? s.getBasePixel()
                        : s.getPixelForValue(
                            l ? this.applyStack(s, M, l) : M[p],
                            w
                          ));
                  (E.skip = isNaN(P) || isNaN(O) || C),
                    (E.stop = w > 0 && Math.abs(M[d] - _[d]) > y),
                    m && ((E.parsed = M), (E.raw = u.data[w])),
                    h &&
                      (E.options =
                        f ||
                        this.resolveDataElementOptions(
                          w,
                          S.active ? "active" : r
                        )),
                    b || this.updateElement(S, w, E, r),
                    (_ = M);
                }
              }
            },
          },
          {
            key: "getMaxOverflow",
            value: function () {
              var e = this._cachedMeta,
                t = e.dataset,
                n = (t.options && t.options.borderWidth) || 0,
                r = e.data || [];
              if (!r.length) return n;
              var i = r[0].size(this.resolveDataElementOptions(0)),
                a = r[r.length - 1].size(
                  this.resolveDataElementOptions(r.length - 1)
                );
              return Math.max(n, i, a) / 2;
            },
          },
          {
            key: "draw",
            value: function () {
              var e = this._cachedMeta;
              e.dataset.updateControlPoints(
                this.chart.chartArea,
                e.iScale.axis
              ),
                Ut(Ht(n.prototype), "draw", this).call(this);
            },
          },
        ]),
        n
      );
    })(Ia);
    l(Xa, "id", "line"),
      l(Xa, "defaults", {
        datasetElementType: "line",
        dataElementType: "point",
        showLine: !0,
        spanGaps: !1,
      }),
      l(Xa, "overrides", {
        scales: { _index_: { type: "category" }, _value_: { type: "linear" } },
      });
    var Ga = (function (e) {
      Yt(n, e);
      var t = qt(n);
      function n(e, r) {
        var i;
        return (
          Re(this, n),
          ((i = t.call(this, e, r)).innerRadius = void 0),
          (i.outerRadius = void 0),
          i
        );
      }
      return (
        Ne(n, [
          {
            key: "getLabelAndValue",
            value: function (e) {
              var t = this._cachedMeta,
                n = this.chart,
                r = n.data.labels || [],
                i = qr(t._parsed[e].r, n.options.locale);
              return { label: r[e] || "", value: i };
            },
          },
          {
            key: "parseObjectData",
            value: function (e, t, n, r) {
              return Vi.bind(this)(e, t, n, r);
            },
          },
          {
            key: "update",
            value: function (e) {
              var t = this._cachedMeta.data;
              this._updateRadius(), this.updateElements(t, 0, t.length, e);
            },
          },
          {
            key: "getMinMax",
            value: function () {
              var e = this,
                t = this._cachedMeta,
                n = {
                  min: Number.POSITIVE_INFINITY,
                  max: Number.NEGATIVE_INFINITY,
                };
              return (
                t.data.forEach(function (t, r) {
                  var i = e.getParsed(r).r;
                  !isNaN(i) &&
                    e.chart.getDataVisibility(r) &&
                    (i < n.min && (n.min = i), i > n.max && (n.max = i));
                }),
                n
              );
            },
          },
          {
            key: "_updateRadius",
            value: function () {
              var e = this.chart,
                t = e.chartArea,
                n = e.options,
                r = Math.min(t.right - t.left, t.bottom - t.top),
                i = Math.max(r / 2, 0),
                a =
                  (i -
                    Math.max(
                      n.cutoutPercentage ? (i / 100) * n.cutoutPercentage : 1,
                      0
                    )) /
                  e.getVisibleDatasetCount();
              (this.outerRadius = i - a * this.index),
                (this.innerRadius = this.outerRadius - a);
            },
          },
          {
            key: "updateElements",
            value: function (e, t, n, r) {
              var i,
                a = "reset" === r,
                o = this.chart,
                s = o.options.animation,
                l = this._cachedMeta.rScale,
                u = l.xCenter,
                c = l.yCenter,
                f = l.getIndexAngle(0) - 0.5 * tr,
                h = f,
                d = 360 / this.countVisibleElements();
              for (i = 0; i < t; ++i) h += this._computeAngle(i, r, d);
              for (i = t; i < t + n; i++) {
                var p = e[i],
                  v = h,
                  g = h + this._computeAngle(i, r, d),
                  m = o.getDataVisibility(i)
                    ? l.getDistanceFromCenterForValue(this.getParsed(i).r)
                    : 0;
                (h = g),
                  a &&
                    (s.animateScale && (m = 0), s.animateRotate && (v = g = f));
                var y = {
                  x: u,
                  y: c,
                  innerRadius: 0,
                  outerRadius: m,
                  startAngle: v,
                  endAngle: g,
                  options: this.resolveDataElementOptions(
                    i,
                    p.active ? "active" : r
                  ),
                };
                this.updateElement(p, i, y, r);
              }
            },
          },
          {
            key: "countVisibleElements",
            value: function () {
              var e = this,
                t = this._cachedMeta,
                n = 0;
              return (
                t.data.forEach(function (t, r) {
                  !isNaN(e.getParsed(r).r) &&
                    e.chart.getDataVisibility(r) &&
                    n++;
                }),
                n
              );
            },
          },
          {
            key: "_computeAngle",
            value: function (e, t, n) {
              return this.chart.getDataVisibility(e)
                ? vr(this.resolveDataElementOptions(e, t).angle || n)
                : 0;
            },
          },
        ]),
        n
      );
    })(Ia);
    l(Ga, "id", "polarArea"),
      l(Ga, "defaults", {
        dataElementType: "arc",
        animation: { animateRotate: !0, animateScale: !0 },
        animations: {
          numbers: {
            type: "number",
            properties: [
              "x",
              "y",
              "startAngle",
              "endAngle",
              "innerRadius",
              "outerRadius",
            ],
          },
        },
        indexAxis: "r",
        startAngle: 0,
      }),
      l(Ga, "overrides", {
        aspectRatio: 1,
        plugins: {
          legend: {
            labels: {
              generateLabels: function (e) {
                var t = e.data;
                if (t.labels.length && t.datasets.length) {
                  var n = e.legend.options.labels,
                    r = n.pointStyle,
                    i = n.color;
                  return t.labels.map(function (t, n) {
                    var a = e.getDatasetMeta(0).controller.getStyle(n);
                    return {
                      text: t,
                      fillStyle: a.backgroundColor,
                      strokeStyle: a.borderColor,
                      fontColor: i,
                      lineWidth: a.borderWidth,
                      pointStyle: r,
                      hidden: !e.getDataVisibility(n),
                      index: n,
                    };
                  });
                }
                return [];
              },
            },
            onClick: function (e, t, n) {
              n.chart.toggleDataVisibility(t.index), n.chart.update();
            },
          },
        },
        scales: {
          r: {
            type: "radialLinear",
            angleLines: { display: !1 },
            beginAtZero: !0,
            grid: { circular: !0 },
            pointLabels: { display: !1 },
            startAngle: 0,
          },
        },
      });
    var Ja = (function (e) {
      Yt(n, e);
      var t = qt(n);
      function n() {
        return Re(this, n), t.apply(this, arguments);
      }
      return Ne(n);
    })(Qa);
    l(Ja, "id", "pie"),
      l(Ja, "defaults", {
        cutout: 0,
        rotation: 0,
        circumference: 360,
        radius: "100%",
      });
    var Za = (function (e) {
      Yt(n, e);
      var t = qt(n);
      function n() {
        return Re(this, n), t.apply(this, arguments);
      }
      return (
        Ne(n, [
          {
            key: "getLabelAndValue",
            value: function (e) {
              var t = this._cachedMeta.vScale,
                n = this.getParsed(e);
              return {
                label: t.getLabels()[e],
                value: "" + t.getLabelForValue(n[t.axis]),
              };
            },
          },
          {
            key: "parseObjectData",
            value: function (e, t, n, r) {
              return Vi.bind(this)(e, t, n, r);
            },
          },
          {
            key: "update",
            value: function (e) {
              var t = this._cachedMeta,
                n = t.dataset,
                r = t.data || [],
                i = t.iScale.getLabels();
              if (((n.points = r), "resize" !== e)) {
                var a = this.resolveDatasetElementOptions(e);
                this.options.showLine || (a.borderWidth = 0);
                var o = {
                  _loop: !0,
                  _fullLoop: i.length === r.length,
                  options: a,
                };
                this.updateElement(n, void 0, o, e);
              }
              this.updateElements(r, 0, r.length, e);
            },
          },
          {
            key: "updateElements",
            value: function (e, t, n, r) {
              for (
                var i = this._cachedMeta.rScale, a = "reset" === r, o = t;
                o < t + n;
                o++
              ) {
                var s = e[o],
                  l = this.resolveDataElementOptions(
                    o,
                    s.active ? "active" : r
                  ),
                  u = i.getPointPositionForValue(o, this.getParsed(o).r),
                  c = a ? i.xCenter : u.x,
                  f = a ? i.yCenter : u.y,
                  h = {
                    x: c,
                    y: f,
                    angle: u.angle,
                    skip: isNaN(c) || isNaN(f),
                    options: l,
                  };
                this.updateElement(s, o, h, r);
              }
            },
          },
        ]),
        n
      );
    })(Ia);
    l(Za, "id", "radar"),
      l(Za, "defaults", {
        datasetElementType: "line",
        dataElementType: "point",
        indexAxis: "r",
        showLine: !0,
        elements: { line: { fill: "start" } },
      }),
      l(Za, "overrides", {
        aspectRatio: 1,
        scales: { r: { type: "radialLinear" } },
      });
    var eo = (function (e) {
      Yt(n, e);
      var t = qt(n);
      function n() {
        return Re(this, n), t.apply(this, arguments);
      }
      return (
        Ne(n, [
          {
            key: "getLabelAndValue",
            value: function (e) {
              var t = this._cachedMeta,
                n = this.chart.data.labels || [],
                r = t.xScale,
                i = t.yScale,
                a = this.getParsed(e),
                o = r.getLabelForValue(a.x),
                s = i.getLabelForValue(a.y);
              return { label: n[e] || "", value: "(" + o + ", " + s + ")" };
            },
          },
          {
            key: "update",
            value: function (e) {
              var t = this._cachedMeta,
                n = t.data,
                r = void 0 === n ? [] : n,
                i = this.chart._animationsDisabled,
                a = Nr(t, r, i),
                o = a.start,
                s = a.count;
              if (
                ((this._drawStart = o),
                (this._drawCount = s),
                zr(t) && ((o = 0), (s = r.length)),
                this.options.showLine)
              ) {
                var l = t.dataset,
                  u = t._dataset;
                (l._chart = this.chart),
                  (l._datasetIndex = this.index),
                  (l._decimated = !!u._decimated),
                  (l.points = r);
                var c = this.resolveDatasetElementOptions(e);
                (c.segment = this.options.segment),
                  this.updateElement(
                    l,
                    void 0,
                    { animated: !i, options: c },
                    e
                  );
              }
              this.updateElements(r, o, s, e);
            },
          },
          {
            key: "addElements",
            value: function () {
              var e = this.options.showLine;
              !this.datasetElementType &&
                e &&
                (this.datasetElementType =
                  this.chart.registry.getElement("line")),
                Ut(Ht(n.prototype), "addElements", this).call(this);
            },
          },
          {
            key: "updateElements",
            value: function (e, t, n, r) {
              for (
                var i = "reset" === r,
                  a = this._cachedMeta,
                  o = a.iScale,
                  s = a.vScale,
                  l = a._stacked,
                  u = a._dataset,
                  c = this.resolveDataElementOptions(t, r),
                  f = this.getSharedOptions(c),
                  h = this.includeOptions(r, f),
                  d = o.axis,
                  p = s.axis,
                  v = this.options,
                  g = v.spanGaps,
                  m = v.segment,
                  y = dr(g) ? g : Number.POSITIVE_INFINITY,
                  b = this.chart._animationsDisabled || i || "none" === r,
                  x = t > 0 && this.getParsed(t - 1),
                  k = t;
                k < t + n;
                ++k
              ) {
                var _ = e[k],
                  w = this.getParsed(k),
                  S = b ? _ : {},
                  E = Ln(w[p]),
                  M = (S[d] = o.getPixelForValue(w[d], k)),
                  C = (S[p] =
                    i || E
                      ? s.getBasePixel()
                      : s.getPixelForValue(
                          l ? this.applyStack(s, w, l) : w[p],
                          k
                        ));
                (S.skip = isNaN(M) || isNaN(C) || E),
                  (S.stop = k > 0 && Math.abs(w[d] - x[d]) > y),
                  m && ((S.parsed = w), (S.raw = u.data[k])),
                  h &&
                    (S.options =
                      f ||
                      this.resolveDataElementOptions(
                        k,
                        _.active ? "active" : r
                      )),
                  b || this.updateElement(_, k, S, r),
                  (x = w);
              }
              this.updateSharedOptions(f, r, c);
            },
          },
          {
            key: "getMaxOverflow",
            value: function () {
              var e = this._cachedMeta,
                t = e.data || [];
              if (!this.options.showLine) {
                for (var n = 0, r = t.length - 1; r >= 0; --r)
                  n = Math.max(
                    n,
                    t[r].size(this.resolveDataElementOptions(r)) / 2
                  );
                return n > 0 && n;
              }
              var i = e.dataset,
                a = (i.options && i.options.borderWidth) || 0;
              if (!t.length) return a;
              var o = t[0].size(this.resolveDataElementOptions(0)),
                s = t[t.length - 1].size(
                  this.resolveDataElementOptions(t.length - 1)
                );
              return Math.max(a, o, s) / 2;
            },
          },
        ]),
        n
      );
    })(Ia);
    l(eo, "id", "scatter"),
      l(eo, "defaults", {
        datasetElementType: !1,
        dataElementType: "point",
        showLine: !1,
        fill: !1,
      }),
      l(eo, "overrides", {
        interaction: { mode: "point" },
        scales: { x: { type: "linear" }, y: { type: "linear" } },
      });
    var to = Object.freeze({
      __proto__: null,
      BarController: qa,
      BubbleController: Ka,
      DoughnutController: Qa,
      LineController: Xa,
      PieController: Ja,
      PolarAreaController: Ga,
      RadarController: Za,
      ScatterController: eo,
    });
    function no() {
      throw new Error(
        "This method is not implemented: Check that a complete date adapter is provided."
      );
    }
    var ro = {
      _date: (function () {
        function e(t) {
          Re(this, e), l(this, "options", void 0), (this.options = t || {});
        }
        return (
          Ne(
            e,
            [
              { key: "init", value: function () {} },
              {
                key: "formats",
                value: function () {
                  return no();
                },
              },
              {
                key: "parse",
                value: function () {
                  return no();
                },
              },
              {
                key: "format",
                value: function () {
                  return no();
                },
              },
              {
                key: "add",
                value: function () {
                  return no();
                },
              },
              {
                key: "diff",
                value: function () {
                  return no();
                },
              },
              {
                key: "startOf",
                value: function () {
                  return no();
                },
              },
              {
                key: "endOf",
                value: function () {
                  return no();
                },
              },
            ],
            [
              {
                key: "override",
                value: function (t) {
                  Object.assign(e.prototype, t);
                },
              },
            ]
          ),
          e
        );
      })(),
    };
    function io(e, t, n, r) {
      var i = e.controller,
        a = e.data,
        o = e._sorted,
        s = i._cachedMeta.iScale;
      if (s && t === s.axis && "r" !== t && o && a.length) {
        var l = s._reversePixels ? Cr : Mr;
        if (!r) return l(a, t, n);
        if (i._sharedOptions) {
          var u = a[0],
            c = "function" === typeof u.getRange && u.getRange(t);
          if (c) {
            var f = l(a, t, n - c),
              h = l(a, t, n + c);
            return { lo: f.lo, hi: h.hi };
          }
        }
      }
      return { lo: 0, hi: a.length - 1 };
    }
    function ao(e, t, n, r, i) {
      for (
        var a = e.getSortedVisibleDatasetMetas(), o = n[t], s = 0, l = a.length;
        s < l;
        ++s
      )
        for (
          var u = a[s],
            c = u.index,
            f = u.data,
            h = io(a[s], t, o, i),
            d = h.lo,
            p = h.hi,
            v = d;
          v <= p;
          ++v
        ) {
          var g = f[v];
          g.skip || r(g, c, v);
        }
    }
    function oo(e, t, n, r, i) {
      var a = [];
      if (!i && !e.isPointInArea(t)) return a;
      return (
        ao(
          e,
          n,
          t,
          function (n, o, s) {
            (i || li(n, e.chartArea, 0)) &&
              n.inRange(t.x, t.y, r) &&
              a.push({ element: n, datasetIndex: o, index: s });
          },
          !0
        ),
        a
      );
    }
    function so(e, t, n, r, i, a) {
      var o = [],
        s = (function (e) {
          var t = -1 !== e.indexOf("x"),
            n = -1 !== e.indexOf("y");
          return function (e, r) {
            var i = t ? Math.abs(e.x - r.x) : 0,
              a = n ? Math.abs(e.y - r.y) : 0;
            return Math.sqrt(Math.pow(i, 2) + Math.pow(a, 2));
          };
        })(n),
        l = Number.POSITIVE_INFINITY;
      return (
        ao(e, n, t, function (n, u, c) {
          var f = n.inRange(t.x, t.y, i);
          if (!r || f) {
            var h = n.getCenterPoint(i);
            if (!!a || e.isPointInArea(h) || f) {
              var d = s(t, h);
              d < l
                ? ((o = [{ element: n, datasetIndex: u, index: c }]), (l = d))
                : d === l && o.push({ element: n, datasetIndex: u, index: c });
            }
          }
        }),
        o
      );
    }
    function lo(e, t, n, r, i, a) {
      return a || e.isPointInArea(t)
        ? "r" !== n || r
          ? so(e, t, n, r, i, a)
          : (function (e, t, n, r) {
              var i = [];
              return (
                ao(e, n, t, function (e, n, a) {
                  var o = e.getProps(["startAngle", "endAngle"], r),
                    s = o.startAngle,
                    l = o.endAngle;
                  _r(yr(e, { x: t.x, y: t.y }).angle, s, l) &&
                    i.push({ element: e, datasetIndex: n, index: a });
                }),
                i
              );
            })(e, t, n, i)
        : [];
    }
    function uo(e, t, n, r, i) {
      var a = [],
        o = "x" === n ? "inXRange" : "inYRange",
        s = !1;
      return (
        ao(e, n, t, function (e, r, l) {
          e[o](t[n], i) &&
            (a.push({ element: e, datasetIndex: r, index: l }),
            (s = s || e.inRange(t.x, t.y, i)));
        }),
        r && !s ? [] : a
      );
    }
    var co = {
        evaluateInteractionItems: ao,
        modes: {
          index: function (e, t, n, r) {
            var i = na(t, e),
              a = n.axis || "x",
              o = n.includeInvisible || !1,
              s = n.intersect ? oo(e, i, a, r, o) : lo(e, i, a, !1, r, o),
              l = [];
            return s.length
              ? (e.getSortedVisibleDatasetMetas().forEach(function (e) {
                  var t = s[0].index,
                    n = e.data[t];
                  n &&
                    !n.skip &&
                    l.push({ element: n, datasetIndex: e.index, index: t });
                }),
                l)
              : [];
          },
          dataset: function (e, t, n, r) {
            var i = na(t, e),
              a = n.axis || "xy",
              o = n.includeInvisible || !1,
              s = n.intersect ? oo(e, i, a, r, o) : lo(e, i, a, !1, r, o);
            if (s.length > 0) {
              var l = s[0].datasetIndex,
                u = e.getDatasetMeta(l).data;
              s = [];
              for (var c = 0; c < u.length; ++c)
                s.push({ element: u[c], datasetIndex: l, index: c });
            }
            return s;
          },
          point: function (e, t, n, r) {
            return oo(e, na(t, e), n.axis || "xy", r, n.includeInvisible || !1);
          },
          nearest: function (e, t, n, r) {
            var i = na(t, e),
              a = n.axis || "xy",
              o = n.includeInvisible || !1;
            return lo(e, i, a, n.intersect, r, o);
          },
          x: function (e, t, n, r) {
            return uo(e, na(t, e), "x", n.intersect, r);
          },
          y: function (e, t, n, r) {
            return uo(e, na(t, e), "y", n.intersect, r);
          },
        },
      },
      fo = ["left", "top", "right", "bottom"];
    function ho(e, t) {
      return e.filter(function (e) {
        return e.pos === t;
      });
    }
    function po(e, t) {
      return e.filter(function (e) {
        return -1 === fo.indexOf(e.pos) && e.box.axis === t;
      });
    }
    function vo(e, t) {
      return e.sort(function (e, n) {
        var r = t ? n : e,
          i = t ? e : n;
        return r.weight === i.weight ? r.index - i.index : r.weight - i.weight;
      });
    }
    function go(e, t) {
      var n,
        r,
        i,
        a = (function (e) {
          var t,
            n = {},
            r = Kt(e);
          try {
            for (r.s(); !(t = r.n()).done; ) {
              var i = t.value,
                a = i.stack,
                o = i.pos,
                s = i.stackWeight;
              if (a && fo.includes(o)) {
                var l =
                  n[a] || (n[a] = { count: 0, placed: 0, weight: 0, size: 0 });
                l.count++, (l.weight += s);
              }
            }
          } catch (u) {
            r.e(u);
          } finally {
            r.f();
          }
          return n;
        })(e),
        o = t.vBoxMaxWidth,
        s = t.hBoxMaxHeight;
      for (n = 0, r = e.length; n < r; ++n) {
        var l = (i = e[n]).box.fullSize,
          u = a[i.stack],
          c = u && i.stackWeight / u.weight;
        i.horizontal
          ? ((i.width = c ? c * o : l && t.availableWidth), (i.height = s))
          : ((i.width = o), (i.height = c ? c * s : l && t.availableHeight));
      }
      return a;
    }
    function mo(e, t, n, r) {
      return Math.max(e[n], t[n]) + Math.max(e[r], t[r]);
    }
    function yo(e, t) {
      (e.top = Math.max(e.top, t.top)),
        (e.left = Math.max(e.left, t.left)),
        (e.bottom = Math.max(e.bottom, t.bottom)),
        (e.right = Math.max(e.right, t.right));
    }
    function bo(e, t, n, r) {
      var i = n.pos,
        a = n.box,
        o = e.maxPadding;
      if (!An(i)) {
        n.size && (e[i] -= n.size);
        var s = r[n.stack] || { size: 0, count: 1 };
        (s.size = Math.max(s.size, n.horizontal ? a.height : a.width)),
          (n.size = s.size / s.count),
          (e[i] += n.size);
      }
      a.getPadding && yo(o, a.getPadding());
      var l = Math.max(0, t.outerWidth - mo(o, e, "left", "right")),
        u = Math.max(0, t.outerHeight - mo(o, e, "top", "bottom")),
        c = l !== e.w,
        f = u !== e.h;
      return (
        (e.w = l),
        (e.h = u),
        n.horizontal ? { same: c, other: f } : { same: f, other: c }
      );
    }
    function xo(e, t) {
      var n = t.maxPadding;
      function r(e) {
        var r = { left: 0, top: 0, right: 0, bottom: 0 };
        return (
          e.forEach(function (e) {
            r[e] = Math.max(t[e], n[e]);
          }),
          r
        );
      }
      return r(e ? ["left", "right"] : ["top", "bottom"]);
    }
    function ko(e, t, n, r) {
      var i,
        a,
        o,
        s,
        l,
        u,
        c = [];
      for (i = 0, a = e.length, l = 0; i < a; ++i) {
        (s = (o = e[i]).box).update(
          o.width || t.w,
          o.height || t.h,
          xo(o.horizontal, t)
        );
        var f = bo(t, n, o, r),
          h = f.same,
          d = f.other;
        (l |= h && c.length), (u = u || d), s.fullSize || c.push(o);
      }
      return (l && ko(c, t, n, r)) || u;
    }
    function _o(e, t, n, r, i) {
      (e.top = n),
        (e.left = t),
        (e.right = t + r),
        (e.bottom = n + i),
        (e.width = r),
        (e.height = i);
    }
    function wo(e, t, n, r) {
      var i,
        a = n.padding,
        o = t.x,
        s = t.y,
        l = Kt(e);
      try {
        for (l.s(); !(i = l.n()).done; ) {
          var u = i.value,
            c = u.box,
            f = r[u.stack] || { count: 1, placed: 0, weight: 1 },
            h = u.stackWeight / f.weight || 1;
          if (u.horizontal) {
            var d = t.w * h,
              p = f.size || c.height;
            Jn(f.start) && (s = f.start),
              c.fullSize
                ? _o(c, a.left, s, n.outerWidth - a.right - a.left, p)
                : _o(c, t.left + f.placed, s, d, p),
              (f.start = s),
              (f.placed += d),
              (s = c.bottom);
          } else {
            var v = t.h * h,
              g = f.size || c.width;
            Jn(f.start) && (o = f.start),
              c.fullSize
                ? _o(c, o, a.top, g, n.outerHeight - a.bottom - a.top)
                : _o(c, o, t.top + f.placed, g, v),
              (f.start = o),
              (f.placed += v),
              (o = c.right);
          }
        }
      } catch (m) {
        l.e(m);
      } finally {
        l.f();
      }
      (t.x = o), (t.y = s);
    }
    var So = function (e, t) {
        e.boxes || (e.boxes = []),
          (t.fullSize = t.fullSize || !1),
          (t.position = t.position || "top"),
          (t.weight = t.weight || 0),
          (t._layers =
            t._layers ||
            function () {
              return [
                {
                  z: 0,
                  draw: function (e) {
                    t.draw(e);
                  },
                },
              ];
            }),
          e.boxes.push(t);
      },
      Eo = function (e, t) {
        var n = e.boxes ? e.boxes.indexOf(t) : -1;
        -1 !== n && e.boxes.splice(n, 1);
      },
      Mo = function (e, t, n) {
        (t.fullSize = n.fullSize),
          (t.position = n.position),
          (t.weight = n.weight);
      },
      Co = function (e, t, n, r) {
        if (e) {
          var i = Si(e.options.layout.padding),
            a = Math.max(t - i.width, 0),
            o = Math.max(n - i.height, 0),
            s = (function (e) {
              var t = (function (e) {
                  var t,
                    n,
                    r,
                    i,
                    a,
                    o,
                    s = [];
                  for (t = 0, n = (e || []).length; t < n; ++t) {
                    var l = (r = e[t]);
                    i = l.position;
                    var u = l.options;
                    a = u.stack;
                    var c = u.stackWeight;
                    (o = void 0 === c ? 1 : c),
                      s.push({
                        index: t,
                        box: r,
                        pos: i,
                        horizontal: r.isHorizontal(),
                        weight: r.weight,
                        stack: a && i + a,
                        stackWeight: o,
                      });
                  }
                  return s;
                })(e),
                n = vo(
                  t.filter(function (e) {
                    return e.box.fullSize;
                  }),
                  !0
                ),
                r = vo(ho(t, "left"), !0),
                i = vo(ho(t, "right")),
                a = vo(ho(t, "top"), !0),
                o = vo(ho(t, "bottom")),
                s = po(t, "x"),
                l = po(t, "y");
              return {
                fullSize: n,
                leftAndTop: r.concat(a),
                rightAndBottom: i.concat(l).concat(o).concat(s),
                chartArea: ho(t, "chartArea"),
                vertical: r.concat(i).concat(l),
                horizontal: a.concat(o).concat(s),
              };
            })(e.boxes),
            l = s.vertical,
            u = s.horizontal;
          Bn(e.boxes, function (e) {
            "function" === typeof e.beforeLayout && e.beforeLayout();
          });
          var c =
              l.reduce(function (e, t) {
                return t.box.options && !1 === t.box.options.display
                  ? e
                  : e + 1;
              }, 0) || 1,
            f = Object.freeze({
              outerWidth: t,
              outerHeight: n,
              padding: i,
              availableWidth: a,
              availableHeight: o,
              vBoxMaxWidth: a / 2 / c,
              hBoxMaxHeight: o / 2,
            }),
            h = Object.assign({}, i);
          yo(h, Si(r));
          var d = Object.assign(
              { maxPadding: h, w: a, h: o, x: i.left, y: i.top },
              i
            ),
            p = go(l.concat(u), f);
          ko(s.fullSize, d, f, p),
            ko(l, d, f, p),
            ko(u, d, f, p) && ko(l, d, f, p),
            (function (e) {
              var t = e.maxPadding;
              function n(n) {
                var r = Math.max(t[n] - e[n], 0);
                return (e[n] += r), r;
              }
              (e.y += n("top")), (e.x += n("left")), n("right"), n("bottom");
            })(d),
            wo(s.leftAndTop, d, f, p),
            (d.x += d.w),
            (d.y += d.h),
            wo(s.rightAndBottom, d, f, p),
            (e.chartArea = {
              left: d.left,
              top: d.top,
              right: d.left + d.w,
              bottom: d.top + d.h,
              height: d.h,
              width: d.w,
            }),
            Bn(s.chartArea, function (t) {
              var n = t.box;
              Object.assign(n, e.chartArea),
                n.update(d.w, d.h, { left: 0, top: 0, right: 0, bottom: 0 });
            });
        }
      },
      Po = (function () {
        function e() {
          Re(this, e);
        }
        return (
          Ne(e, [
            { key: "acquireContext", value: function (e, t) {} },
            {
              key: "releaseContext",
              value: function (e) {
                return !1;
              },
            },
            { key: "addEventListener", value: function (e, t, n) {} },
            { key: "removeEventListener", value: function (e, t, n) {} },
            {
              key: "getDevicePixelRatio",
              value: function () {
                return 1;
              },
            },
            {
              key: "getMaximumSize",
              value: function (e, t, n, r) {
                return (
                  (t = Math.max(0, t || e.width)),
                  (n = n || e.height),
                  { width: t, height: Math.max(0, r ? Math.floor(t / r) : n) }
                );
              },
            },
            {
              key: "isAttached",
              value: function (e) {
                return !0;
              },
            },
            { key: "updateConfig", value: function (e) {} },
          ]),
          e
        );
      })(),
      Oo = (function (e) {
        Yt(n, e);
        var t = qt(n);
        function n() {
          return Re(this, n), t.apply(this, arguments);
        }
        return (
          Ne(n, [
            {
              key: "acquireContext",
              value: function (e) {
                return (e && e.getContext && e.getContext("2d")) || null;
              },
            },
            {
              key: "updateConfig",
              value: function (e) {
                e.options.animation = !1;
              },
            },
          ]),
          n
        );
      })(Po),
      To = "$chartjs",
      Do = {
        touchstart: "mousedown",
        touchmove: "mousemove",
        touchend: "mouseup",
        pointerenter: "mouseenter",
        pointerdown: "mousedown",
        pointermove: "mousemove",
        pointerup: "mouseup",
        pointerleave: "mouseout",
        pointerout: "mouseout",
      },
      Lo = function (e) {
        return null === e || "" === e;
      };
    var Ro = !!oa && { passive: !0 };
    function Ao(e, t, n) {
      e.canvas.removeEventListener(t, n, Ro);
    }
    function No(e, t) {
      var n,
        r = Kt(e);
      try {
        for (r.s(); !(n = r.n()).done; ) {
          var i = n.value;
          if (i === t || i.contains(t)) return !0;
        }
      } catch (a) {
        r.e(a);
      } finally {
        r.f();
      }
    }
    function zo(e, t, n) {
      var r = e.canvas,
        i = new MutationObserver(function (e) {
          var t,
            i = !1,
            a = Kt(e);
          try {
            for (a.s(); !(t = a.n()).done; ) {
              var o = t.value;
              i = (i = i || No(o.addedNodes, r)) && !No(o.removedNodes, r);
            }
          } catch (s) {
            a.e(s);
          } finally {
            a.f();
          }
          i && n();
        });
      return i.observe(document, { childList: !0, subtree: !0 }), i;
    }
    function Fo(e, t, n) {
      var r = e.canvas,
        i = new MutationObserver(function (e) {
          var t,
            i = !1,
            a = Kt(e);
          try {
            for (a.s(); !(t = a.n()).done; ) {
              var o = t.value;
              i = (i = i || No(o.removedNodes, r)) && !No(o.addedNodes, r);
            }
          } catch (s) {
            a.e(s);
          } finally {
            a.f();
          }
          i && n();
        });
      return i.observe(document, { childList: !0, subtree: !0 }), i;
    }
    var Io = new Map(),
      jo = 0;
    function Bo() {
      var e = window.devicePixelRatio;
      e !== jo &&
        ((jo = e),
        Io.forEach(function (t, n) {
          n.currentDevicePixelRatio !== e && t();
        }));
    }
    function Vo(e, t, n) {
      var r = e.canvas,
        i = r && Xi(r);
      if (i) {
        var a = Lr(function (e, t) {
            var r = i.clientWidth;
            n(e, t), r < i.clientWidth && n();
          }, window),
          o = new ResizeObserver(function (e) {
            var t = e[0],
              n = t.contentRect.width,
              r = t.contentRect.height;
            (0 === n && 0 === r) || a(n, r);
          });
        return (
          o.observe(i),
          (function (e, t) {
            Io.size || window.addEventListener("resize", Bo), Io.set(e, t);
          })(e, a),
          o
        );
      }
    }
    function Wo(e, t, n) {
      n && n.disconnect(),
        "resize" === t &&
          (function (e) {
            Io.delete(e), Io.size || window.removeEventListener("resize", Bo);
          })(e);
    }
    function Ho(e, t, n) {
      var r = e.canvas,
        i = Lr(function (t) {
          null !== e.ctx &&
            n(
              (function (e, t) {
                var n = Do[e.type] || e.type,
                  r = na(e, t),
                  i = r.x,
                  a = r.y;
                return {
                  type: n,
                  chart: t,
                  native: e,
                  x: void 0 !== i ? i : null,
                  y: void 0 !== a ? a : null,
                };
              })(t, e)
            );
        }, e);
      return (
        (function (e, t, n) {
          e.addEventListener(t, n, Ro);
        })(r, t, i),
        i
      );
    }
    var Uo = (function (e) {
      Yt(n, e);
      var t = qt(n);
      function n() {
        return Re(this, n), t.apply(this, arguments);
      }
      return (
        Ne(n, [
          {
            key: "acquireContext",
            value: function (e, t) {
              var n = e && e.getContext && e.getContext("2d");
              return n && n.canvas === e
                ? ((function (e, t) {
                    var n = e.style,
                      r = e.getAttribute("height"),
                      i = e.getAttribute("width");
                    if (
                      ((e[To] = {
                        initial: {
                          height: r,
                          width: i,
                          style: {
                            display: n.display,
                            height: n.height,
                            width: n.width,
                          },
                        },
                      }),
                      (n.display = n.display || "block"),
                      (n.boxSizing = n.boxSizing || "border-box"),
                      Lo(i))
                    ) {
                      var a = sa(e, "width");
                      void 0 !== a && (e.width = a);
                    }
                    if (Lo(r))
                      if ("" === e.style.height) e.height = e.width / (t || 2);
                      else {
                        var o = sa(e, "height");
                        void 0 !== o && (e.height = o);
                      }
                  })(e, t),
                  n)
                : null;
            },
          },
          {
            key: "releaseContext",
            value: function (e) {
              var t = e.canvas;
              if (!t[To]) return !1;
              var n = t[To].initial;
              ["height", "width"].forEach(function (e) {
                var r = n[e];
                Ln(r) ? t.removeAttribute(e) : t.setAttribute(e, r);
              });
              var r = n.style || {};
              return (
                Object.keys(r).forEach(function (e) {
                  t.style[e] = r[e];
                }),
                (t.width = t.width),
                delete t[To],
                !0
              );
            },
          },
          {
            key: "addEventListener",
            value: function (e, t, n) {
              this.removeEventListener(e, t);
              var r = e.$proxies || (e.$proxies = {}),
                i = { attach: zo, detach: Fo, resize: Vo }[t] || Ho;
              r[t] = i(e, t, n);
            },
          },
          {
            key: "removeEventListener",
            value: function (e, t) {
              var n = e.$proxies || (e.$proxies = {}),
                r = n[t];
              r &&
                (({ attach: Wo, detach: Wo, resize: Wo }[t] || Ao)(e, t, r),
                (n[t] = void 0));
            },
          },
          {
            key: "getDevicePixelRatio",
            value: function () {
              return window.devicePixelRatio;
            },
          },
          {
            key: "getMaximumSize",
            value: function (e, t, n, r) {
              return ia(e, t, n, r);
            },
          },
          {
            key: "isAttached",
            value: function (e) {
              var t = Xi(e);
              return !(!t || !t.isConnected);
            },
          },
        ]),
        n
      );
    })(Po);
    var $o = (function () {
      function e() {
        Re(this, e),
          l(this, "x", void 0),
          l(this, "y", void 0),
          l(this, "active", !1),
          l(this, "options", void 0),
          l(this, "$animations", void 0);
      }
      return (
        Ne(e, [
          {
            key: "tooltipPosition",
            value: function (e) {
              var t = this.getProps(["x", "y"], e);
              return { x: t.x, y: t.y };
            },
          },
          {
            key: "hasValue",
            value: function () {
              return dr(this.x) && dr(this.y);
            },
          },
          {
            key: "getProps",
            value: function (e, t) {
              var n = this,
                r = this.$animations;
              if (!t || !r) return this;
              var i = {};
              return (
                e.forEach(function (e) {
                  i[e] = r[e] && r[e].active() ? r[e]._to : n[e];
                }),
                i
              );
            },
          },
        ]),
        e
      );
    })();
    function Yo(e, t) {
      var n = e.options.ticks,
        r = (function (e) {
          var t = e.options.offset,
            n = e._tickSize(),
            r = e._length / n + (t ? 0 : 1),
            i = e._maxLength / n;
          return Math.floor(Math.min(r, i));
        })(e),
        i = Math.min(n.maxTicksLimit || r, r),
        a = n.major.enabled
          ? (function (e) {
              var t,
                n,
                r = [];
              for (t = 0, n = e.length; t < n; t++) e[t].major && r.push(t);
              return r;
            })(t)
          : [],
        o = a.length,
        s = a[0],
        l = a[o - 1],
        u = [];
      if (o > i)
        return (
          (function (e, t, n, r) {
            var i,
              a = 0,
              o = n[0];
            for (r = Math.ceil(r), i = 0; i < e.length; i++)
              i === o && (t.push(e[i]), (o = n[++a * r]));
          })(t, u, a, o / i),
          u
        );
      var c = (function (e, t, n) {
        var r = (function (e) {
            var t,
              n,
              r = e.length;
            if (r < 2) return !1;
            for (n = e[0], t = 1; t < r; ++t)
              if (e[t] - e[t - 1] !== n) return !1;
            return n;
          })(e),
          i = t.length / n;
        if (!r) return Math.max(i, 1);
        for (
          var a = (function (e) {
              var t,
                n = [],
                r = Math.sqrt(e);
              for (t = 1; t < r; t++) e % t === 0 && (n.push(t), n.push(e / t));
              return (
                r === (0 | r) && n.push(r),
                n
                  .sort(function (e, t) {
                    return e - t;
                  })
                  .pop(),
                n
              );
            })(r),
            o = 0,
            s = a.length - 1;
          o < s;
          o++
        ) {
          var l = a[o];
          if (l > i) return l;
        }
        return Math.max(i, 1);
      })(a, t, i);
      if (o > 0) {
        var f,
          h,
          d = o > 1 ? Math.round((l - s) / (o - 1)) : null;
        for (qo(t, u, c, Ln(d) ? 0 : s - d, s), f = 0, h = o - 1; f < h; f++)
          qo(t, u, c, a[f], a[f + 1]);
        return qo(t, u, c, l, Ln(d) ? t.length : l + d), u;
      }
      return qo(t, u, c), u;
    }
    function qo(e, t, n, r, i) {
      var a,
        o,
        s,
        l = Fn(r, 0),
        u = Math.min(Fn(i, e.length), e.length),
        c = 0;
      for (
        n = Math.ceil(n), i && (n = (a = i - r) / Math.floor(a / n)), s = l;
        s < 0;

      )
        c++, (s = Math.round(l + c * n));
      for (o = Math.max(l, 0); o < u; o++)
        o === s && (t.push(e[o]), c++, (s = Math.round(l + c * n)));
    }
    l($o, "defaults", {}), l($o, "defaultRoutes", void 0);
    var Ko = function (e, t, n) {
        return "top" === t || "left" === t ? e[t] + n : e[t] - n;
      },
      Qo = function (e, t) {
        return Math.min(t || e, e);
      };
    function Xo(e, t) {
      for (var n = [], r = e.length / t, i = e.length, a = 0; a < i; a += r)
        n.push(e[Math.floor(a)]);
      return n;
    }
    function Go(e, t, n) {
      var r,
        i = e.ticks.length,
        a = Math.min(t, i - 1),
        o = e._startPixel,
        s = e._endPixel,
        l = 1e-6,
        u = e.getPixelForTick(a);
      if (
        !(
          n &&
          ((r =
            1 === i
              ? Math.max(u - o, s - u)
              : 0 === t
              ? (e.getPixelForTick(1) - u) / 2
              : (u - e.getPixelForTick(a - 1)) / 2),
          (u += a < t ? r : -r) < o - l || u > s + l)
        )
      )
        return u;
    }
    function Jo(e) {
      return e.drawTicks ? e.tickLength : 0;
    }
    function Zo(e, t) {
      if (!e.display) return 0;
      var n = Ei(e.font, t),
        r = Si(e.padding);
      return (Rn(e.text) ? e.text.length : 1) * n.lineHeight + r.height;
    }
    function es(e, t, n) {
      var r = Rr(e);
      return (
        ((n && "right" !== t) || (!n && "right" === t)) &&
          (r = (function (e) {
            return "left" === e ? "right" : "right" === e ? "left" : e;
          })(r)),
        r
      );
    }
    var ts = (function (e) {
        Yt(n, e);
        var t = qt(n);
        function n(e) {
          var r;
          return (
            Re(this, n),
            ((r = t.call(this)).id = e.id),
            (r.type = e.type),
            (r.options = void 0),
            (r.ctx = e.ctx),
            (r.chart = e.chart),
            (r.top = void 0),
            (r.bottom = void 0),
            (r.left = void 0),
            (r.right = void 0),
            (r.width = void 0),
            (r.height = void 0),
            (r._margins = { left: 0, right: 0, top: 0, bottom: 0 }),
            (r.maxWidth = void 0),
            (r.maxHeight = void 0),
            (r.paddingTop = void 0),
            (r.paddingBottom = void 0),
            (r.paddingLeft = void 0),
            (r.paddingRight = void 0),
            (r.axis = void 0),
            (r.labelRotation = void 0),
            (r.min = void 0),
            (r.max = void 0),
            (r._range = void 0),
            (r.ticks = []),
            (r._gridLineItems = null),
            (r._labelItems = null),
            (r._labelSizes = null),
            (r._length = 0),
            (r._maxLength = 0),
            (r._longestTextCache = {}),
            (r._startPixel = void 0),
            (r._endPixel = void 0),
            (r._reversePixels = !1),
            (r._userMax = void 0),
            (r._userMin = void 0),
            (r._suggestedMax = void 0),
            (r._suggestedMin = void 0),
            (r._ticksLength = 0),
            (r._borderValue = 0),
            (r._cache = {}),
            (r._dataLimitsCached = !1),
            (r.$context = void 0),
            r
          );
        }
        return (
          Ne(n, [
            {
              key: "init",
              value: function (e) {
                (this.options = e.setContext(this.getContext())),
                  (this.axis = e.axis),
                  (this._userMin = this.parse(e.min)),
                  (this._userMax = this.parse(e.max)),
                  (this._suggestedMin = this.parse(e.suggestedMin)),
                  (this._suggestedMax = this.parse(e.suggestedMax));
              },
            },
            {
              key: "parse",
              value: function (e, t) {
                return e;
              },
            },
            {
              key: "getUserBounds",
              value: function () {
                var e = this._userMin,
                  t = this._userMax,
                  n = this._suggestedMin,
                  r = this._suggestedMax;
                return (
                  (e = zn(e, Number.POSITIVE_INFINITY)),
                  (t = zn(t, Number.NEGATIVE_INFINITY)),
                  (n = zn(n, Number.POSITIVE_INFINITY)),
                  (r = zn(r, Number.NEGATIVE_INFINITY)),
                  {
                    min: zn(e, n),
                    max: zn(t, r),
                    minDefined: Nn(e),
                    maxDefined: Nn(t),
                  }
                );
              },
            },
            {
              key: "getMinMax",
              value: function (e) {
                var t,
                  n = this.getUserBounds(),
                  r = n.min,
                  i = n.max,
                  a = n.minDefined,
                  o = n.maxDefined;
                if (a && o) return { min: r, max: i };
                for (
                  var s = this.getMatchingVisibleMetas(), l = 0, u = s.length;
                  l < u;
                  ++l
                )
                  (t = s[l].controller.getMinMax(this, e)),
                    a || (r = Math.min(r, t.min)),
                    o || (i = Math.max(i, t.max));
                return {
                  min: zn(
                    (r = o && r > i ? i : r),
                    zn((i = a && r > i ? r : i), r)
                  ),
                  max: zn(i, zn(r, i)),
                };
              },
            },
            {
              key: "getPadding",
              value: function () {
                return {
                  left: this.paddingLeft || 0,
                  top: this.paddingTop || 0,
                  right: this.paddingRight || 0,
                  bottom: this.paddingBottom || 0,
                };
              },
            },
            {
              key: "getTicks",
              value: function () {
                return this.ticks;
              },
            },
            {
              key: "getLabels",
              value: function () {
                var e = this.chart.data;
                return (
                  this.options.labels ||
                  (this.isHorizontal() ? e.xLabels : e.yLabels) ||
                  e.labels ||
                  []
                );
              },
            },
            {
              key: "getLabelItems",
              value: function () {
                var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : this.chart.chartArea;
                return (
                  this._labelItems ||
                  (this._labelItems = this._computeLabelItems(e))
                );
              },
            },
            {
              key: "beforeLayout",
              value: function () {
                (this._cache = {}), (this._dataLimitsCached = !1);
              },
            },
            {
              key: "beforeUpdate",
              value: function () {
                jn(this.options.beforeUpdate, [this]);
              },
            },
            {
              key: "update",
              value: function (e, t, n) {
                var r = this.options,
                  i = r.beginAtZero,
                  a = r.grace,
                  o = r.ticks,
                  s = o.sampleSize;
                this.beforeUpdate(),
                  (this.maxWidth = e),
                  (this.maxHeight = t),
                  (this._margins = n =
                    Object.assign({ left: 0, right: 0, top: 0, bottom: 0 }, n)),
                  (this.ticks = null),
                  (this._labelSizes = null),
                  (this._gridLineItems = null),
                  (this._labelItems = null),
                  this.beforeSetDimensions(),
                  this.setDimensions(),
                  this.afterSetDimensions(),
                  (this._maxLength = this.isHorizontal()
                    ? this.width + n.left + n.right
                    : this.height + n.top + n.bottom),
                  this._dataLimitsCached ||
                    (this.beforeDataLimits(),
                    this.determineDataLimits(),
                    this.afterDataLimits(),
                    (this._range = (function (e, t, n) {
                      var r = e.min,
                        i = e.max,
                        a = In(t, (i - r) / 2),
                        o = function (e, t) {
                          return n && 0 === e ? 0 : e + t;
                        };
                      return { min: o(r, -Math.abs(a)), max: o(i, a) };
                    })(this, a, i)),
                    (this._dataLimitsCached = !0)),
                  this.beforeBuildTicks(),
                  (this.ticks = this.buildTicks() || []),
                  this.afterBuildTicks();
                var l = s < this.ticks.length;
                this._convertTicksToLabels(l ? Xo(this.ticks, s) : this.ticks),
                  this.configure(),
                  this.beforeCalculateLabelRotation(),
                  this.calculateLabelRotation(),
                  this.afterCalculateLabelRotation(),
                  o.display &&
                    (o.autoSkip || "auto" === o.source) &&
                    ((this.ticks = Yo(this, this.ticks)),
                    (this._labelSizes = null),
                    this.afterAutoSkip()),
                  l && this._convertTicksToLabels(this.ticks),
                  this.beforeFit(),
                  this.fit(),
                  this.afterFit(),
                  this.afterUpdate();
              },
            },
            {
              key: "configure",
              value: function () {
                var e,
                  t,
                  n = this.options.reverse;
                this.isHorizontal()
                  ? ((e = this.left), (t = this.right))
                  : ((e = this.top), (t = this.bottom), (n = !n)),
                  (this._startPixel = e),
                  (this._endPixel = t),
                  (this._reversePixels = n),
                  (this._length = t - e),
                  (this._alignToPixels = this.options.alignToPixels);
              },
            },
            {
              key: "afterUpdate",
              value: function () {
                jn(this.options.afterUpdate, [this]);
              },
            },
            {
              key: "beforeSetDimensions",
              value: function () {
                jn(this.options.beforeSetDimensions, [this]);
              },
            },
            {
              key: "setDimensions",
              value: function () {
                this.isHorizontal()
                  ? ((this.width = this.maxWidth),
                    (this.left = 0),
                    (this.right = this.width))
                  : ((this.height = this.maxHeight),
                    (this.top = 0),
                    (this.bottom = this.height)),
                  (this.paddingLeft = 0),
                  (this.paddingTop = 0),
                  (this.paddingRight = 0),
                  (this.paddingBottom = 0);
              },
            },
            {
              key: "afterSetDimensions",
              value: function () {
                jn(this.options.afterSetDimensions, [this]);
              },
            },
            {
              key: "_callHooks",
              value: function (e) {
                this.chart.notifyPlugins(e, this.getContext()),
                  jn(this.options[e], [this]);
              },
            },
            {
              key: "beforeDataLimits",
              value: function () {
                this._callHooks("beforeDataLimits");
              },
            },
            { key: "determineDataLimits", value: function () {} },
            {
              key: "afterDataLimits",
              value: function () {
                this._callHooks("afterDataLimits");
              },
            },
            {
              key: "beforeBuildTicks",
              value: function () {
                this._callHooks("beforeBuildTicks");
              },
            },
            {
              key: "buildTicks",
              value: function () {
                return [];
              },
            },
            {
              key: "afterBuildTicks",
              value: function () {
                this._callHooks("afterBuildTicks");
              },
            },
            {
              key: "beforeTickToLabelConversion",
              value: function () {
                jn(this.options.beforeTickToLabelConversion, [this]);
              },
            },
            {
              key: "generateTickLabels",
              value: function (e) {
                var t,
                  n,
                  r,
                  i = this.options.ticks;
                for (t = 0, n = e.length; t < n; t++)
                  (r = e[t]).label = jn(i.callback, [r.value, t, e], this);
              },
            },
            {
              key: "afterTickToLabelConversion",
              value: function () {
                jn(this.options.afterTickToLabelConversion, [this]);
              },
            },
            {
              key: "beforeCalculateLabelRotation",
              value: function () {
                jn(this.options.beforeCalculateLabelRotation, [this]);
              },
            },
            {
              key: "calculateLabelRotation",
              value: function () {
                var e,
                  t,
                  n,
                  r = this.options,
                  i = r.ticks,
                  a = Qo(this.ticks.length, r.ticks.maxTicksLimit),
                  o = i.minRotation || 0,
                  s = i.maxRotation,
                  l = o;
                if (
                  !this._isVisible() ||
                  !i.display ||
                  o >= s ||
                  a <= 1 ||
                  !this.isHorizontal()
                )
                  this.labelRotation = o;
                else {
                  var u = this._getLabelSizes(),
                    c = u.widest.width,
                    f = u.highest.height,
                    h = wr(this.chart.width - c, 0, this.maxWidth);
                  c + 6 > (e = r.offset ? this.maxWidth / a : h / (a - 1)) &&
                    ((e = h / (a - (r.offset ? 0.5 : 1))),
                    (t =
                      this.maxHeight -
                      Jo(r.grid) -
                      i.padding -
                      Zo(r.title, this.chart.options.font)),
                    (n = Math.sqrt(c * c + f * f)),
                    (l = gr(
                      Math.min(
                        Math.asin(wr((u.highest.height + 6) / e, -1, 1)),
                        Math.asin(wr(t / n, -1, 1)) -
                          Math.asin(wr(f / n, -1, 1))
                      )
                    )),
                    (l = Math.max(o, Math.min(s, l)))),
                    (this.labelRotation = l);
                }
              },
            },
            {
              key: "afterCalculateLabelRotation",
              value: function () {
                jn(this.options.afterCalculateLabelRotation, [this]);
              },
            },
            { key: "afterAutoSkip", value: function () {} },
            {
              key: "beforeFit",
              value: function () {
                jn(this.options.beforeFit, [this]);
              },
            },
            {
              key: "fit",
              value: function () {
                var e = { width: 0, height: 0 },
                  t = this.chart,
                  n = this.options,
                  r = n.ticks,
                  i = n.title,
                  a = n.grid,
                  o = this._isVisible(),
                  s = this.isHorizontal();
                if (o) {
                  var l = Zo(i, t.options.font);
                  if (
                    (s
                      ? ((e.width = this.maxWidth), (e.height = Jo(a) + l))
                      : ((e.height = this.maxHeight), (e.width = Jo(a) + l)),
                    r.display && this.ticks.length)
                  ) {
                    var u = this._getLabelSizes(),
                      c = u.first,
                      f = u.last,
                      h = u.widest,
                      d = u.highest,
                      p = 2 * r.padding,
                      v = vr(this.labelRotation),
                      g = Math.cos(v),
                      m = Math.sin(v);
                    if (s) {
                      var y = r.mirror ? 0 : m * h.width + g * d.height;
                      e.height = Math.min(this.maxHeight, e.height + y + p);
                    } else {
                      var b = r.mirror ? 0 : g * h.width + m * d.height;
                      e.width = Math.min(this.maxWidth, e.width + b + p);
                    }
                    this._calculatePadding(c, f, m, g);
                  }
                }
                this._handleMargins(),
                  s
                    ? ((this.width = this._length =
                        t.width - this._margins.left - this._margins.right),
                      (this.height = e.height))
                    : ((this.width = e.width),
                      (this.height = this._length =
                        t.height - this._margins.top - this._margins.bottom));
              },
            },
            {
              key: "_calculatePadding",
              value: function (e, t, n, r) {
                var i = this.options,
                  a = i.ticks,
                  o = a.align,
                  s = a.padding,
                  l = i.position,
                  u = 0 !== this.labelRotation,
                  c = "top" !== l && "x" === this.axis;
                if (this.isHorizontal()) {
                  var f = this.getPixelForTick(0) - this.left,
                    h =
                      this.right - this.getPixelForTick(this.ticks.length - 1),
                    d = 0,
                    p = 0;
                  u
                    ? c
                      ? ((d = r * e.width), (p = n * t.height))
                      : ((d = n * e.height), (p = r * t.width))
                    : "start" === o
                    ? (p = t.width)
                    : "end" === o
                    ? (d = e.width)
                    : "inner" !== o && ((d = e.width / 2), (p = t.width / 2)),
                    (this.paddingLeft = Math.max(
                      ((d - f + s) * this.width) / (this.width - f),
                      0
                    )),
                    (this.paddingRight = Math.max(
                      ((p - h + s) * this.width) / (this.width - h),
                      0
                    ));
                } else {
                  var v = t.height / 2,
                    g = e.height / 2;
                  "start" === o
                    ? ((v = 0), (g = e.height))
                    : "end" === o && ((v = t.height), (g = 0)),
                    (this.paddingTop = v + s),
                    (this.paddingBottom = g + s);
                }
              },
            },
            {
              key: "_handleMargins",
              value: function () {
                this._margins &&
                  ((this._margins.left = Math.max(
                    this.paddingLeft,
                    this._margins.left
                  )),
                  (this._margins.top = Math.max(
                    this.paddingTop,
                    this._margins.top
                  )),
                  (this._margins.right = Math.max(
                    this.paddingRight,
                    this._margins.right
                  )),
                  (this._margins.bottom = Math.max(
                    this.paddingBottom,
                    this._margins.bottom
                  )));
              },
            },
            {
              key: "afterFit",
              value: function () {
                jn(this.options.afterFit, [this]);
              },
            },
            {
              key: "isHorizontal",
              value: function () {
                var e = this.options,
                  t = e.axis,
                  n = e.position;
                return "top" === n || "bottom" === n || "x" === t;
              },
            },
            {
              key: "isFullSize",
              value: function () {
                return this.options.fullSize;
              },
            },
            {
              key: "_convertTicksToLabels",
              value: function (e) {
                var t, n;
                for (
                  this.beforeTickToLabelConversion(),
                    this.generateTickLabels(e),
                    t = 0,
                    n = e.length;
                  t < n;
                  t++
                )
                  Ln(e[t].label) && (e.splice(t, 1), n--, t--);
                this.afterTickToLabelConversion();
              },
            },
            {
              key: "_getLabelSizes",
              value: function () {
                var e = this._labelSizes;
                if (!e) {
                  var t = this.options.ticks.sampleSize,
                    n = this.ticks;
                  t < n.length && (n = Xo(n, t)),
                    (this._labelSizes = e =
                      this._computeLabelSizes(
                        n,
                        n.length,
                        this.options.ticks.maxTicksLimit
                      ));
                }
                return e;
              },
            },
            {
              key: "_computeLabelSizes",
              value: function (e, t, n) {
                var r,
                  i,
                  a,
                  o,
                  s,
                  l,
                  u,
                  c,
                  f,
                  h,
                  d,
                  p = this.ctx,
                  v = this._longestTextCache,
                  g = [],
                  m = [],
                  y = Math.floor(t / Qo(t, n)),
                  b = 0,
                  x = 0;
                for (r = 0; r < t; r += y) {
                  if (
                    ((o = e[r].label),
                    (s = this._resolveTickFontOptions(r)),
                    (p.font = l = s.string),
                    (u = v[l] = v[l] || { data: {}, gc: [] }),
                    (c = s.lineHeight),
                    (f = h = 0),
                    Ln(o) || Rn(o))
                  ) {
                    if (Rn(o))
                      for (i = 0, a = o.length; i < a; ++i)
                        Ln((d = o[i])) ||
                          Rn(d) ||
                          ((f = ni(p, u.data, u.gc, f, d)), (h += c));
                  } else (f = ni(p, u.data, u.gc, f, o)), (h = c);
                  g.push(f),
                    m.push(h),
                    (b = Math.max(f, b)),
                    (x = Math.max(h, x));
                }
                !(function (e, t) {
                  Bn(e, function (e) {
                    var n,
                      r = e.gc,
                      i = r.length / 2;
                    if (i > t) {
                      for (n = 0; n < i; ++n) delete e.data[r[n]];
                      r.splice(0, i);
                    }
                  });
                })(v, t);
                var k = g.indexOf(b),
                  _ = m.indexOf(x),
                  w = function (e) {
                    return { width: g[e] || 0, height: m[e] || 0 };
                  };
                return {
                  first: w(0),
                  last: w(t - 1),
                  widest: w(k),
                  highest: w(_),
                  widths: g,
                  heights: m,
                };
              },
            },
            {
              key: "getLabelForValue",
              value: function (e) {
                return e;
              },
            },
            {
              key: "getPixelForValue",
              value: function (e, t) {
                return NaN;
              },
            },
            { key: "getValueForPixel", value: function (e) {} },
            {
              key: "getPixelForTick",
              value: function (e) {
                var t = this.ticks;
                return e < 0 || e > t.length - 1
                  ? null
                  : this.getPixelForValue(t[e].value);
              },
            },
            {
              key: "getPixelForDecimal",
              value: function (e) {
                this._reversePixels && (e = 1 - e);
                var t = this._startPixel + e * this._length;
                return wr(
                  this._alignToPixels ? ii(this.chart, t, 0) : t,
                  -32768,
                  32767
                );
              },
            },
            {
              key: "getDecimalForPixel",
              value: function (e) {
                var t = (e - this._startPixel) / this._length;
                return this._reversePixels ? 1 - t : t;
              },
            },
            {
              key: "getBasePixel",
              value: function () {
                return this.getPixelForValue(this.getBaseValue());
              },
            },
            {
              key: "getBaseValue",
              value: function () {
                var e = this.min,
                  t = this.max;
                return e < 0 && t < 0 ? t : e > 0 && t > 0 ? e : 0;
              },
            },
            {
              key: "getContext",
              value: function (e) {
                var t = this.ticks || [];
                if (e >= 0 && e < t.length) {
                  var n = t[e];
                  return (
                    n.$context ||
                    (n.$context = (function (e, t, n) {
                      return Ci(e, { tick: n, index: t, type: "tick" });
                    })(this.getContext(), e, n))
                  );
                }
                return (
                  this.$context ||
                  (this.$context = Ci(this.chart.getContext(), {
                    scale: this,
                    type: "scale",
                  }))
                );
              },
            },
            {
              key: "_tickSize",
              value: function () {
                var e = this.options.ticks,
                  t = vr(this.labelRotation),
                  n = Math.abs(Math.cos(t)),
                  r = Math.abs(Math.sin(t)),
                  i = this._getLabelSizes(),
                  a = e.autoSkipPadding || 0,
                  o = i ? i.widest.width + a : 0,
                  s = i ? i.highest.height + a : 0;
                return this.isHorizontal()
                  ? s * n > o * r
                    ? o / n
                    : s / r
                  : s * r < o * n
                  ? s / n
                  : o / r;
              },
            },
            {
              key: "_isVisible",
              value: function () {
                var e = this.options.display;
                return "auto" !== e
                  ? !!e
                  : this.getMatchingVisibleMetas().length > 0;
              },
            },
            {
              key: "_computeGridLineItems",
              value: function (e) {
                var t,
                  n,
                  r,
                  i,
                  a,
                  o,
                  s,
                  l,
                  u,
                  c,
                  f,
                  h,
                  d = this.axis,
                  p = this.chart,
                  v = this.options,
                  g = v.grid,
                  m = v.position,
                  y = v.border,
                  b = g.offset,
                  x = this.isHorizontal(),
                  k = this.ticks.length + (b ? 1 : 0),
                  _ = Jo(g),
                  w = [],
                  S = y.setContext(this.getContext()),
                  E = S.display ? S.width : 0,
                  M = E / 2,
                  C = function (e) {
                    return ii(p, e, E);
                  };
                if ("top" === m)
                  (t = C(this.bottom)),
                    (o = this.bottom - _),
                    (l = t - M),
                    (c = C(e.top) + M),
                    (h = e.bottom);
                else if ("bottom" === m)
                  (t = C(this.top)),
                    (c = e.top),
                    (h = C(e.bottom) - M),
                    (o = t + M),
                    (l = this.top + _);
                else if ("left" === m)
                  (t = C(this.right)),
                    (a = this.right - _),
                    (s = t - M),
                    (u = C(e.left) + M),
                    (f = e.right);
                else if ("right" === m)
                  (t = C(this.left)),
                    (u = e.left),
                    (f = C(e.right) - M),
                    (a = t + M),
                    (s = this.left + _);
                else if ("x" === d) {
                  if ("center" === m) t = C((e.top + e.bottom) / 2 + 0.5);
                  else if (An(m)) {
                    var P = Object.keys(m)[0],
                      O = m[P];
                    t = C(this.chart.scales[P].getPixelForValue(O));
                  }
                  (c = e.top), (h = e.bottom), (l = (o = t + M) + _);
                } else if ("y" === d) {
                  if ("center" === m) t = C((e.left + e.right) / 2);
                  else if (An(m)) {
                    var T = Object.keys(m)[0],
                      D = m[T];
                    t = C(this.chart.scales[T].getPixelForValue(D));
                  }
                  (s = (a = t - M) - _), (u = e.left), (f = e.right);
                }
                var L = Fn(v.ticks.maxTicksLimit, k),
                  R = Math.max(1, Math.ceil(k / L));
                for (n = 0; n < k; n += R) {
                  var A = this.getContext(n),
                    N = g.setContext(A),
                    z = y.setContext(A),
                    F = N.lineWidth,
                    I = N.color,
                    j = z.dash || [],
                    B = z.dashOffset,
                    V = N.tickWidth,
                    W = N.tickColor,
                    H = N.tickBorderDash || [],
                    U = N.tickBorderDashOffset;
                  void 0 !== (r = Go(this, n, b)) &&
                    ((i = ii(p, r, F)),
                    x ? (a = s = u = f = i) : (o = l = c = h = i),
                    w.push({
                      tx1: a,
                      ty1: o,
                      tx2: s,
                      ty2: l,
                      x1: u,
                      y1: c,
                      x2: f,
                      y2: h,
                      width: F,
                      color: I,
                      borderDash: j,
                      borderDashOffset: B,
                      tickWidth: V,
                      tickColor: W,
                      tickBorderDash: H,
                      tickBorderDashOffset: U,
                    }));
                }
                return (this._ticksLength = k), (this._borderValue = t), w;
              },
            },
            {
              key: "_computeLabelItems",
              value: function (e) {
                var t,
                  n,
                  r,
                  i,
                  a,
                  o,
                  s,
                  l,
                  u,
                  c,
                  f,
                  h = this.axis,
                  d = this.options,
                  p = d.position,
                  v = d.ticks,
                  g = this.isHorizontal(),
                  m = this.ticks,
                  y = v.align,
                  b = v.crossAlign,
                  x = v.padding,
                  k = v.mirror,
                  _ = Jo(d.grid),
                  w = _ + x,
                  S = k ? -x : w,
                  E = -vr(this.labelRotation),
                  M = [],
                  C = "middle";
                if ("top" === p)
                  (a = this.bottom - S), (o = this._getXAxisLabelAlignment());
                else if ("bottom" === p)
                  (a = this.top + S), (o = this._getXAxisLabelAlignment());
                else if ("left" === p) {
                  var P = this._getYAxisLabelAlignment(_);
                  (o = P.textAlign), (i = P.x);
                } else if ("right" === p) {
                  var O = this._getYAxisLabelAlignment(_);
                  (o = O.textAlign), (i = O.x);
                } else if ("x" === h) {
                  if ("center" === p) a = (e.top + e.bottom) / 2 + w;
                  else if (An(p)) {
                    var T = Object.keys(p)[0],
                      D = p[T];
                    a = this.chart.scales[T].getPixelForValue(D) + w;
                  }
                  o = this._getXAxisLabelAlignment();
                } else if ("y" === h) {
                  if ("center" === p) i = (e.left + e.right) / 2 - w;
                  else if (An(p)) {
                    var L = Object.keys(p)[0],
                      R = p[L];
                    i = this.chart.scales[L].getPixelForValue(R);
                  }
                  o = this._getYAxisLabelAlignment(_).textAlign;
                }
                "y" === h &&
                  ("start" === y ? (C = "top") : "end" === y && (C = "bottom"));
                var A = this._getLabelSizes();
                for (t = 0, n = m.length; t < n; ++t) {
                  r = m[t].label;
                  var N = v.setContext(this.getContext(t));
                  (s = this.getPixelForTick(t) + v.labelOffset),
                    (u = (l = this._resolveTickFontOptions(t)).lineHeight);
                  var z = (c = Rn(r) ? r.length : 1) / 2,
                    F = N.color,
                    I = N.textStrokeColor,
                    j = N.textStrokeWidth,
                    B = o;
                  g
                    ? ((i = s),
                      "inner" === o &&
                        (B =
                          t === n - 1
                            ? this.options.reverse
                              ? "left"
                              : "right"
                            : 0 === t
                            ? this.options.reverse
                              ? "right"
                              : "left"
                            : "center"),
                      (f =
                        "top" === p
                          ? "near" === b || 0 !== E
                            ? -c * u + u / 2
                            : "center" === b
                            ? -A.highest.height / 2 - z * u + u
                            : -A.highest.height + u / 2
                          : "near" === b || 0 !== E
                          ? u / 2
                          : "center" === b
                          ? A.highest.height / 2 - z * u
                          : A.highest.height - c * u),
                      k && (f *= -1),
                      0 === E ||
                        N.showLabelBackdrop ||
                        (i += (u / 2) * Math.sin(E)))
                    : ((a = s), (f = ((1 - c) * u) / 2));
                  var V = void 0;
                  if (N.showLabelBackdrop) {
                    var W = Si(N.backdropPadding),
                      H = A.heights[t],
                      U = A.widths[t],
                      $ = f - W.top,
                      Y = 0 - W.left;
                    switch (C) {
                      case "middle":
                        $ -= H / 2;
                        break;
                      case "bottom":
                        $ -= H;
                    }
                    switch (o) {
                      case "center":
                        Y -= U / 2;
                        break;
                      case "right":
                        Y -= U;
                    }
                    V = {
                      left: Y,
                      top: $,
                      width: U + W.width,
                      height: H + W.height,
                      color: N.backdropColor,
                    };
                  }
                  M.push({
                    label: r,
                    font: l,
                    textOffset: f,
                    options: {
                      rotation: E,
                      color: F,
                      strokeColor: I,
                      strokeWidth: j,
                      textAlign: B,
                      textBaseline: C,
                      translation: [i, a],
                      backdrop: V,
                    },
                  });
                }
                return M;
              },
            },
            {
              key: "_getXAxisLabelAlignment",
              value: function () {
                var e = this.options,
                  t = e.position,
                  n = e.ticks;
                if (-vr(this.labelRotation))
                  return "top" === t ? "left" : "right";
                var r = "center";
                return (
                  "start" === n.align
                    ? (r = "left")
                    : "end" === n.align
                    ? (r = "right")
                    : "inner" === n.align && (r = "inner"),
                  r
                );
              },
            },
            {
              key: "_getYAxisLabelAlignment",
              value: function (e) {
                var t,
                  n,
                  r = this.options,
                  i = r.position,
                  a = r.ticks,
                  o = a.crossAlign,
                  s = a.mirror,
                  l = a.padding,
                  u = e + l,
                  c = this._getLabelSizes().widest.width;
                return (
                  "left" === i
                    ? s
                      ? ((n = this.right + l),
                        "near" === o
                          ? (t = "left")
                          : "center" === o
                          ? ((t = "center"), (n += c / 2))
                          : ((t = "right"), (n += c)))
                      : ((n = this.right - u),
                        "near" === o
                          ? (t = "right")
                          : "center" === o
                          ? ((t = "center"), (n -= c / 2))
                          : ((t = "left"), (n = this.left)))
                    : "right" === i
                    ? s
                      ? ((n = this.left + l),
                        "near" === o
                          ? (t = "right")
                          : "center" === o
                          ? ((t = "center"), (n -= c / 2))
                          : ((t = "left"), (n -= c)))
                      : ((n = this.left + u),
                        "near" === o
                          ? (t = "left")
                          : "center" === o
                          ? ((t = "center"), (n += c / 2))
                          : ((t = "right"), (n = this.right)))
                    : (t = "right"),
                  { textAlign: t, x: n }
                );
              },
            },
            {
              key: "_computeLabelArea",
              value: function () {
                if (!this.options.ticks.mirror) {
                  var e = this.chart,
                    t = this.options.position;
                  return "left" === t || "right" === t
                    ? {
                        top: 0,
                        left: this.left,
                        bottom: e.height,
                        right: this.right,
                      }
                    : "top" === t || "bottom" === t
                    ? {
                        top: this.top,
                        left: 0,
                        bottom: this.bottom,
                        right: e.width,
                      }
                    : void 0;
                }
              },
            },
            {
              key: "drawBackground",
              value: function () {
                var e = this.ctx,
                  t = this.options.backgroundColor,
                  n = this.left,
                  r = this.top,
                  i = this.width,
                  a = this.height;
                t &&
                  (e.save(),
                  (e.fillStyle = t),
                  e.fillRect(n, r, i, a),
                  e.restore());
              },
            },
            {
              key: "getLineWidthForValue",
              value: function (e) {
                var t = this.options.grid;
                if (!this._isVisible() || !t.display) return 0;
                var n = this.ticks.findIndex(function (t) {
                  return t.value === e;
                });
                return n >= 0 ? t.setContext(this.getContext(n)).lineWidth : 0;
              },
            },
            {
              key: "drawGrid",
              value: function (e) {
                var t,
                  n,
                  r = this.options.grid,
                  i = this.ctx,
                  a =
                    this._gridLineItems ||
                    (this._gridLineItems = this._computeGridLineItems(e)),
                  o = function (e, t, n) {
                    n.width &&
                      n.color &&
                      (i.save(),
                      (i.lineWidth = n.width),
                      (i.strokeStyle = n.color),
                      i.setLineDash(n.borderDash || []),
                      (i.lineDashOffset = n.borderDashOffset),
                      i.beginPath(),
                      i.moveTo(e.x, e.y),
                      i.lineTo(t.x, t.y),
                      i.stroke(),
                      i.restore());
                  };
                if (r.display)
                  for (t = 0, n = a.length; t < n; ++t) {
                    var s = a[t];
                    r.drawOnChartArea &&
                      o({ x: s.x1, y: s.y1 }, { x: s.x2, y: s.y2 }, s),
                      r.drawTicks &&
                        o(
                          { x: s.tx1, y: s.ty1 },
                          { x: s.tx2, y: s.ty2 },
                          {
                            color: s.tickColor,
                            width: s.tickWidth,
                            borderDash: s.tickBorderDash,
                            borderDashOffset: s.tickBorderDashOffset,
                          }
                        );
                  }
              },
            },
            {
              key: "drawBorder",
              value: function () {
                var e = this.chart,
                  t = this.ctx,
                  n = this.options,
                  r = n.border,
                  i = n.grid,
                  a = r.setContext(this.getContext()),
                  o = r.display ? a.width : 0;
                if (o) {
                  var s,
                    l,
                    u,
                    c,
                    f = i.setContext(this.getContext(0)).lineWidth,
                    h = this._borderValue;
                  this.isHorizontal()
                    ? ((s = ii(e, this.left, o) - o / 2),
                      (l = ii(e, this.right, f) + f / 2),
                      (u = c = h))
                    : ((u = ii(e, this.top, o) - o / 2),
                      (c = ii(e, this.bottom, f) + f / 2),
                      (s = l = h)),
                    t.save(),
                    (t.lineWidth = a.width),
                    (t.strokeStyle = a.color),
                    t.beginPath(),
                    t.moveTo(s, u),
                    t.lineTo(l, c),
                    t.stroke(),
                    t.restore();
                }
              },
            },
            {
              key: "drawLabels",
              value: function (e) {
                if (this.options.ticks.display) {
                  var t = this.ctx,
                    n = this._computeLabelArea();
                  n && ui(t, n);
                  var r,
                    i = Kt(this.getLabelItems(e));
                  try {
                    for (i.s(); !(r = i.n()).done; ) {
                      var a = r.value,
                        o = a.options,
                        s = a.font;
                      vi(t, a.label, 0, a.textOffset, s, o);
                    }
                  } catch (l) {
                    i.e(l);
                  } finally {
                    i.f();
                  }
                  n && ci(t);
                }
              },
            },
            {
              key: "drawTitle",
              value: function () {
                var e = this.ctx,
                  t = this.options,
                  n = t.position,
                  r = t.title,
                  i = t.reverse;
                if (r.display) {
                  var a = Ei(r.font),
                    o = Si(r.padding),
                    s = r.align,
                    l = a.lineHeight / 2;
                  "bottom" === n || "center" === n || An(n)
                    ? ((l += o.bottom),
                      Rn(r.text) && (l += a.lineHeight * (r.text.length - 1)))
                    : (l += o.top);
                  var u = (function (e, t, n, r) {
                      var i,
                        a,
                        o,
                        s = e.top,
                        l = e.left,
                        u = e.bottom,
                        c = e.right,
                        f = e.chart,
                        h = f.chartArea,
                        d = f.scales,
                        p = 0,
                        v = u - s,
                        g = c - l;
                      if (e.isHorizontal()) {
                        if (((a = Ar(r, l, c)), An(n))) {
                          var m = Object.keys(n)[0],
                            y = n[m];
                          o = d[m].getPixelForValue(y) + v - t;
                        } else
                          o =
                            "center" === n
                              ? (h.bottom + h.top) / 2 + v - t
                              : Ko(e, n, t);
                        i = c - l;
                      } else {
                        if (An(n)) {
                          var b = Object.keys(n)[0],
                            x = n[b];
                          a = d[b].getPixelForValue(x) - g + t;
                        } else
                          a =
                            "center" === n
                              ? (h.left + h.right) / 2 - g + t
                              : Ko(e, n, t);
                        (o = Ar(r, u, s)), (p = "left" === n ? -or : or);
                      }
                      return { titleX: a, titleY: o, maxWidth: i, rotation: p };
                    })(this, l, n, s),
                    c = u.titleX,
                    f = u.titleY,
                    h = u.maxWidth,
                    d = u.rotation;
                  vi(e, r.text, 0, 0, a, {
                    color: r.color,
                    maxWidth: h,
                    rotation: d,
                    textAlign: es(s, n, i),
                    textBaseline: "middle",
                    translation: [c, f],
                  });
                }
              },
            },
            {
              key: "draw",
              value: function (e) {
                this._isVisible() &&
                  (this.drawBackground(),
                  this.drawGrid(e),
                  this.drawBorder(),
                  this.drawTitle(),
                  this.drawLabels(e));
              },
            },
            {
              key: "_layers",
              value: function () {
                var e = this,
                  t = this.options,
                  r = (t.ticks && t.ticks.z) || 0,
                  i = Fn(t.grid && t.grid.z, -1),
                  a = Fn(t.border && t.border.z, 0);
                return this._isVisible() && this.draw === n.prototype.draw
                  ? [
                      {
                        z: i,
                        draw: function (t) {
                          e.drawBackground(), e.drawGrid(t), e.drawTitle();
                        },
                      },
                      {
                        z: a,
                        draw: function () {
                          e.drawBorder();
                        },
                      },
                      {
                        z: r,
                        draw: function (t) {
                          e.drawLabels(t);
                        },
                      },
                    ]
                  : [
                      {
                        z: r,
                        draw: function (t) {
                          e.draw(t);
                        },
                      },
                    ];
              },
            },
            {
              key: "getMatchingVisibleMetas",
              value: function (e) {
                var t,
                  n,
                  r = this.chart.getSortedVisibleDatasetMetas(),
                  i = this.axis + "AxisID",
                  a = [];
                for (t = 0, n = r.length; t < n; ++t) {
                  var o = r[t];
                  o[i] !== this.id || (e && o.type !== e) || a.push(o);
                }
                return a;
              },
            },
            {
              key: "_resolveTickFontOptions",
              value: function (e) {
                return Ei(
                  this.options.ticks.setContext(this.getContext(e)).font
                );
              },
            },
            {
              key: "_maxDigits",
              value: function () {
                var e = this._resolveTickFontOptions(0).lineHeight;
                return (this.isHorizontal() ? this.width : this.height) / e;
              },
            },
          ]),
          n
        );
      })($o),
      ns = (function () {
        function e(t, n, r) {
          Re(this, e),
            (this.type = t),
            (this.scope = n),
            (this.override = r),
            (this.items = Object.create(null));
        }
        return (
          Ne(e, [
            {
              key: "isForType",
              value: function (e) {
                return Object.prototype.isPrototypeOf.call(
                  this.type.prototype,
                  e.prototype
                );
              },
            },
            {
              key: "register",
              value: function (e) {
                var t,
                  n = Object.getPrototypeOf(e);
                (function (e) {
                  return "id" in e && "defaults" in e;
                })(n) && (t = this.register(n));
                var r = this.items,
                  i = e.id,
                  a = this.scope + "." + i;
                if (!i) throw new Error("class does not have id: " + e);
                return (
                  i in r ||
                    ((r[i] = e),
                    (function (e, t, n) {
                      var r = $n(Object.create(null), [
                        n ? ti.get(n) : {},
                        ti.get(t),
                        e.defaults,
                      ]);
                      ti.set(t, r),
                        e.defaultRoutes &&
                          (function (e, t) {
                            Object.keys(t).forEach(function (n) {
                              var r = n.split("."),
                                i = r.pop(),
                                a = [e].concat(r).join("."),
                                o = t[n].split("."),
                                s = o.pop(),
                                l = o.join(".");
                              ti.route(a, i, l, s);
                            });
                          })(t, e.defaultRoutes);
                      e.descriptors && ti.describe(t, e.descriptors);
                    })(e, a, t),
                    this.override && ti.override(e.id, e.overrides)),
                  a
                );
              },
            },
            {
              key: "get",
              value: function (e) {
                return this.items[e];
              },
            },
            {
              key: "unregister",
              value: function (e) {
                var t = this.items,
                  n = e.id,
                  r = this.scope;
                n in t && delete t[n],
                  r &&
                    n in ti[r] &&
                    (delete ti[r][n], this.override && delete Xr[n]);
              },
            },
          ]),
          e
        );
      })();
    var rs = (function () {
        function e() {
          Re(this, e),
            (this.controllers = new ns(Ia, "datasets", !0)),
            (this.elements = new ns($o, "elements")),
            (this.plugins = new ns(Object, "plugins")),
            (this.scales = new ns(ts, "scales")),
            (this._typedRegistries = [
              this.controllers,
              this.scales,
              this.elements,
            ]);
        }
        return (
          Ne(e, [
            {
              key: "add",
              value: function () {
                for (
                  var e = arguments.length, t = new Array(e), n = 0;
                  n < e;
                  n++
                )
                  t[n] = arguments[n];
                this._each("register", t);
              },
            },
            {
              key: "remove",
              value: function () {
                for (
                  var e = arguments.length, t = new Array(e), n = 0;
                  n < e;
                  n++
                )
                  t[n] = arguments[n];
                this._each("unregister", t);
              },
            },
            {
              key: "addControllers",
              value: function () {
                for (
                  var e = arguments.length, t = new Array(e), n = 0;
                  n < e;
                  n++
                )
                  t[n] = arguments[n];
                this._each("register", t, this.controllers);
              },
            },
            {
              key: "addElements",
              value: function () {
                for (
                  var e = arguments.length, t = new Array(e), n = 0;
                  n < e;
                  n++
                )
                  t[n] = arguments[n];
                this._each("register", t, this.elements);
              },
            },
            {
              key: "addPlugins",
              value: function () {
                for (
                  var e = arguments.length, t = new Array(e), n = 0;
                  n < e;
                  n++
                )
                  t[n] = arguments[n];
                this._each("register", t, this.plugins);
              },
            },
            {
              key: "addScales",
              value: function () {
                for (
                  var e = arguments.length, t = new Array(e), n = 0;
                  n < e;
                  n++
                )
                  t[n] = arguments[n];
                this._each("register", t, this.scales);
              },
            },
            {
              key: "getController",
              value: function (e) {
                return this._get(e, this.controllers, "controller");
              },
            },
            {
              key: "getElement",
              value: function (e) {
                return this._get(e, this.elements, "element");
              },
            },
            {
              key: "getPlugin",
              value: function (e) {
                return this._get(e, this.plugins, "plugin");
              },
            },
            {
              key: "getScale",
              value: function (e) {
                return this._get(e, this.scales, "scale");
              },
            },
            {
              key: "removeControllers",
              value: function () {
                for (
                  var e = arguments.length, t = new Array(e), n = 0;
                  n < e;
                  n++
                )
                  t[n] = arguments[n];
                this._each("unregister", t, this.controllers);
              },
            },
            {
              key: "removeElements",
              value: function () {
                for (
                  var e = arguments.length, t = new Array(e), n = 0;
                  n < e;
                  n++
                )
                  t[n] = arguments[n];
                this._each("unregister", t, this.elements);
              },
            },
            {
              key: "removePlugins",
              value: function () {
                for (
                  var e = arguments.length, t = new Array(e), n = 0;
                  n < e;
                  n++
                )
                  t[n] = arguments[n];
                this._each("unregister", t, this.plugins);
              },
            },
            {
              key: "removeScales",
              value: function () {
                for (
                  var e = arguments.length, t = new Array(e), n = 0;
                  n < e;
                  n++
                )
                  t[n] = arguments[n];
                this._each("unregister", t, this.scales);
              },
            },
            {
              key: "_each",
              value: function (e, t, n) {
                var r = this;
                Qt(t).forEach(function (t) {
                  var i = n || r._getRegistryForType(t);
                  n || i.isForType(t) || (i === r.plugins && t.id)
                    ? r._exec(e, i, t)
                    : Bn(t, function (t) {
                        var i = n || r._getRegistryForType(t);
                        r._exec(e, i, t);
                      });
                });
              },
            },
            {
              key: "_exec",
              value: function (e, t, n) {
                var r = Gn(e);
                jn(n["before" + r], [], n), t[e](n), jn(n["after" + r], [], n);
              },
            },
            {
              key: "_getRegistryForType",
              value: function (e) {
                for (var t = 0; t < this._typedRegistries.length; t++) {
                  var n = this._typedRegistries[t];
                  if (n.isForType(e)) return n;
                }
                return this.plugins;
              },
            },
            {
              key: "_get",
              value: function (e, t, n) {
                var r = t.get(e);
                if (void 0 === r)
                  throw new Error('"' + e + '" is not a registered ' + n + ".");
                return r;
              },
            },
          ]),
          e
        );
      })(),
      is = new rs(),
      as = (function () {
        function e() {
          Re(this, e), (this._init = []);
        }
        return (
          Ne(e, [
            {
              key: "notify",
              value: function (e, t, n, r) {
                "beforeInit" === t &&
                  ((this._init = this._createDescriptors(e, !0)),
                  this._notify(this._init, e, "install"));
                var i = r
                    ? this._descriptors(e).filter(r)
                    : this._descriptors(e),
                  a = this._notify(i, e, t, n);
                return (
                  "afterDestroy" === t &&
                    (this._notify(i, e, "stop"),
                    this._notify(this._init, e, "uninstall")),
                  a
                );
              },
            },
            {
              key: "_notify",
              value: function (e, t, n, r) {
                r = r || {};
                var i,
                  a = Kt(e);
                try {
                  for (a.s(); !(i = a.n()).done; ) {
                    var o = i.value,
                      s = o.plugin;
                    if (!1 === jn(s[n], [t, r, o.options], s) && r.cancelable)
                      return !1;
                  }
                } catch (l) {
                  a.e(l);
                } finally {
                  a.f();
                }
                return !0;
              },
            },
            {
              key: "invalidate",
              value: function () {
                Ln(this._cache) ||
                  ((this._oldCache = this._cache), (this._cache = void 0));
              },
            },
            {
              key: "_descriptors",
              value: function (e) {
                if (this._cache) return this._cache;
                var t = (this._cache = this._createDescriptors(e));
                return this._notifyStateChanges(e), t;
              },
            },
            {
              key: "_createDescriptors",
              value: function (e, t) {
                var n = e && e.config,
                  r = Fn(n.options && n.options.plugins, {}),
                  i = (function (e) {
                    for (
                      var t = {},
                        n = [],
                        r = Object.keys(is.plugins.items),
                        i = 0;
                      i < r.length;
                      i++
                    )
                      n.push(is.getPlugin(r[i]));
                    for (var a = e.plugins || [], o = 0; o < a.length; o++) {
                      var s = a[o];
                      -1 === n.indexOf(s) && (n.push(s), (t[s.id] = !0));
                    }
                    return { plugins: n, localIds: t };
                  })(n);
                return !1 !== r || t
                  ? (function (e, t, n, r) {
                      var i,
                        a = t.plugins,
                        o = t.localIds,
                        s = [],
                        l = e.getContext(),
                        u = Kt(a);
                      try {
                        for (u.s(); !(i = u.n()).done; ) {
                          var c = i.value,
                            f = c.id,
                            h = os(n[f], r);
                          null !== h &&
                            s.push({
                              plugin: c,
                              options: ss(
                                e.config,
                                { plugin: c, local: o[f] },
                                h,
                                l
                              ),
                            });
                        }
                      } catch (d) {
                        u.e(d);
                      } finally {
                        u.f();
                      }
                      return s;
                    })(e, i, r, t)
                  : [];
              },
            },
            {
              key: "_notifyStateChanges",
              value: function (e) {
                var t = this._oldCache || [],
                  n = this._cache,
                  r = function (e, t) {
                    return e.filter(function (e) {
                      return !t.some(function (t) {
                        return e.plugin.id === t.plugin.id;
                      });
                    });
                  };
                this._notify(r(t, n), e, "stop"),
                  this._notify(r(n, t), e, "start");
              },
            },
          ]),
          e
        );
      })();
    function os(e, t) {
      return t || !1 !== e ? (!0 === e ? {} : e) : null;
    }
    function ss(e, t, n, r) {
      var i = t.plugin,
        a = t.local,
        o = e.pluginScopeKeys(i),
        s = e.getOptionScopes(n, o);
      return (
        a && i.defaults && s.push(i.defaults),
        e.createResolver(s, r, [""], {
          scriptable: !1,
          indexable: !1,
          allKeys: !0,
        })
      );
    }
    function ls(e, t) {
      var n = ti.datasets[e] || {};
      return (
        ((t.datasets || {})[e] || {}).indexAxis ||
        t.indexAxis ||
        n.indexAxis ||
        "x"
      );
    }
    function us(e) {
      if ("x" === e || "y" === e || "r" === e) return e;
    }
    function cs(e) {
      if (us(e)) return e;
      for (
        var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
        r < t;
        r++
      )
        n[r - 1] = arguments[r];
      for (var i = 0, a = n; i < a.length; i++) {
        var o = a[i],
          s =
            o.axis ||
            ("top" === (l = o.position) || "bottom" === l
              ? "x"
              : "left" === l || "right" === l
              ? "y"
              : void 0) ||
            (e.length > 1 && us(e[0].toLowerCase()));
        if (s) return s;
      }
      var l;
      throw new Error(
        "Cannot determine type of '".concat(
          e,
          "' axis. Please provide 'axis' or 'position' option."
        )
      );
    }
    function fs(e, t, n) {
      if (n[t + "AxisID"] === e) return { axis: t };
    }
    function hs(e, t) {
      var n = Xr[e.type] || { scales: {} },
        r = t.scales || {},
        i = ls(e.type, t),
        a = Object.create(null);
      return (
        Object.keys(r).forEach(function (t) {
          var o = r[t];
          if (!An(o))
            return console.error(
              "Invalid scale configuration for scale: ".concat(t)
            );
          if (o._proxy)
            return console.warn(
              "Ignoring resolver passed as options for scale: ".concat(t)
            );
          var s = cs(
              t,
              o,
              (function (e, t) {
                if (t.data && t.data.datasets) {
                  var n = t.data.datasets.filter(function (t) {
                    return t.xAxisID === e || t.yAxisID === e;
                  });
                  if (n.length) return fs(e, "x", n[0]) || fs(e, "y", n[0]);
                }
                return {};
              })(t, e),
              ti.scales[o.type]
            ),
            l = (function (e, t) {
              return e === t ? "_index_" : "_value_";
            })(s, i),
            u = n.scales || {};
          a[t] = Yn(Object.create(null), [{ axis: s }, o, u[s], u[l]]);
        }),
        e.data.datasets.forEach(function (n) {
          var i = n.type || e.type,
            o = n.indexAxis || ls(i, t),
            s = (Xr[i] || {}).scales || {};
          Object.keys(s).forEach(function (e) {
            var t = (function (e, t) {
                var n = e;
                return (
                  "_index_" === e
                    ? (n = t)
                    : "_value_" === e && (n = "x" === t ? "y" : "x"),
                  n
                );
              })(e, o),
              i = n[t + "AxisID"] || t;
            (a[i] = a[i] || Object.create(null)),
              Yn(a[i], [{ axis: t }, r[i], s[e]]);
          });
        }),
        Object.keys(a).forEach(function (e) {
          var t = a[e];
          Yn(t, [ti.scales[t.type], ti.scale]);
        }),
        a
      );
    }
    function ds(e) {
      var t = e.options || (e.options = {});
      (t.plugins = Fn(t.plugins, {})), (t.scales = hs(e, t));
    }
    function ps(e) {
      return (
        ((e = e || {}).datasets = e.datasets || []),
        (e.labels = e.labels || []),
        e
      );
    }
    var vs = new Map(),
      gs = new Set();
    function ms(e, t) {
      var n = vs.get(e);
      return n || ((n = t()), vs.set(e, n), gs.add(n)), n;
    }
    var ys = function (e, t, n) {
        var r = Xn(t, n);
        void 0 !== r && e.add(r);
      },
      bs = (function () {
        function e(t) {
          Re(this, e),
            (this._config = (function (e) {
              return ((e = e || {}).data = ps(e.data)), ds(e), e;
            })(t)),
            (this._scopeCache = new Map()),
            (this._resolverCache = new Map());
        }
        return (
          Ne(e, [
            {
              key: "platform",
              get: function () {
                return this._config.platform;
              },
            },
            {
              key: "type",
              get: function () {
                return this._config.type;
              },
              set: function (e) {
                this._config.type = e;
              },
            },
            {
              key: "data",
              get: function () {
                return this._config.data;
              },
              set: function (e) {
                this._config.data = ps(e);
              },
            },
            {
              key: "options",
              get: function () {
                return this._config.options;
              },
              set: function (e) {
                this._config.options = e;
              },
            },
            {
              key: "plugins",
              get: function () {
                return this._config.plugins;
              },
            },
            {
              key: "update",
              value: function () {
                var e = this._config;
                this.clearCache(), ds(e);
              },
            },
            {
              key: "clearCache",
              value: function () {
                this._scopeCache.clear(), this._resolverCache.clear();
              },
            },
            {
              key: "datasetScopeKeys",
              value: function (e) {
                return ms(e, function () {
                  return [["datasets.".concat(e), ""]];
                });
              },
            },
            {
              key: "datasetAnimationScopeKeys",
              value: function (e, t) {
                return ms("".concat(e, ".transition.").concat(t), function () {
                  return [
                    [
                      "datasets.".concat(e, ".transitions.").concat(t),
                      "transitions.".concat(t),
                    ],
                    ["datasets.".concat(e), ""],
                  ];
                });
              },
            },
            {
              key: "datasetElementScopeKeys",
              value: function (e, t) {
                return ms("".concat(e, "-").concat(t), function () {
                  return [
                    [
                      "datasets.".concat(e, ".elements.").concat(t),
                      "datasets.".concat(e),
                      "elements.".concat(t),
                      "",
                    ],
                  ];
                });
              },
            },
            {
              key: "pluginScopeKeys",
              value: function (e) {
                var t = e.id,
                  n = this.type;
                return ms("".concat(n, "-plugin-").concat(t), function () {
                  return [
                    ["plugins.".concat(t)].concat(
                      Qt(e.additionalOptionScopes || [])
                    ),
                  ];
                });
              },
            },
            {
              key: "_cachedScopes",
              value: function (e, t) {
                var n = this._scopeCache,
                  r = n.get(e);
                return (r && !t) || ((r = new Map()), n.set(e, r)), r;
              },
            },
            {
              key: "getOptionScopes",
              value: function (e, t, n) {
                var r = this.options,
                  i = this.type,
                  a = this._cachedScopes(e, n),
                  o = a.get(t);
                if (o) return o;
                var s = new Set();
                t.forEach(function (t) {
                  e &&
                    (s.add(e),
                    t.forEach(function (t) {
                      return ys(s, e, t);
                    })),
                    t.forEach(function (e) {
                      return ys(s, r, e);
                    }),
                    t.forEach(function (e) {
                      return ys(s, Xr[i] || {}, e);
                    }),
                    t.forEach(function (e) {
                      return ys(s, ti, e);
                    }),
                    t.forEach(function (e) {
                      return ys(s, Gr, e);
                    });
                });
                var l = Array.from(s);
                return (
                  0 === l.length && l.push(Object.create(null)),
                  gs.has(t) && a.set(t, l),
                  l
                );
              },
            },
            {
              key: "chartOptionScopes",
              value: function () {
                var e = this.options,
                  t = this.type;
                return [
                  e,
                  Xr[t] || {},
                  ti.datasets[t] || {},
                  { type: t },
                  ti,
                  Gr,
                ];
              },
            },
            {
              key: "resolveNamedOptions",
              value: function (e, t, n) {
                var r =
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : [""],
                  i = { $shared: !0 },
                  a = xs(this._resolverCache, e, r),
                  o = a.resolver,
                  s = a.subPrefixes,
                  l = o;
                (function (e, t) {
                  var n,
                    r = Ti(e),
                    i = r.isScriptable,
                    a = r.isIndexable,
                    o = Kt(t);
                  try {
                    for (o.s(); !(n = o.n()).done; ) {
                      var s = n.value,
                        l = i(s),
                        u = a(s),
                        c = (u || l) && e[s];
                      if ((l && (Zn(c) || ks(c))) || (u && Rn(c))) return !0;
                    }
                  } catch (f) {
                    o.e(f);
                  } finally {
                    o.f();
                  }
                  return !1;
                })(o, t) &&
                  ((i.$shared = !1),
                  (l = Oi(
                    o,
                    (n = Zn(n) ? n() : n),
                    this.createResolver(e, n, s)
                  )));
                var u,
                  c = Kt(t);
                try {
                  for (c.s(); !(u = c.n()).done; ) {
                    var f = u.value;
                    i[f] = l[f];
                  }
                } catch (h) {
                  c.e(h);
                } finally {
                  c.f();
                }
                return i;
              },
            },
            {
              key: "createResolver",
              value: function (e, t) {
                var n =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : [""],
                  r = arguments.length > 3 ? arguments[3] : void 0,
                  i = xs(this._resolverCache, e, n).resolver;
                return An(t) ? Oi(i, t, void 0, r) : i;
              },
            },
          ]),
          e
        );
      })();
    function xs(e, t, n) {
      var r = e.get(t);
      r || ((r = new Map()), e.set(t, r));
      var i = n.join(),
        a = r.get(i);
      a ||
        ((a = {
          resolver: Pi(t, n),
          subPrefixes: n.filter(function (e) {
            return !e.toLowerCase().includes("hover");
          }),
        }),
        r.set(i, a));
      return a;
    }
    var ks = function (e) {
      return (
        An(e) &&
        Object.getOwnPropertyNames(e).reduce(function (t, n) {
          return t || Zn(e[n]);
        }, !1)
      );
    };
    var _s = ["top", "bottom", "left", "right", "chartArea"];
    function ws(e, t) {
      return (
        "top" === e || "bottom" === e || (-1 === _s.indexOf(e) && "x" === t)
      );
    }
    function Ss(e, t) {
      return function (n, r) {
        return n[e] === r[e] ? n[t] - r[t] : n[e] - r[e];
      };
    }
    function Es(e) {
      var t = e.chart,
        n = t.options.animation;
      t.notifyPlugins("afterRender"), jn(n && n.onComplete, [e], t);
    }
    function Ms(e) {
      var t = e.chart,
        n = t.options.animation;
      jn(n && n.onProgress, [e], t);
    }
    function Cs(e) {
      return (
        Qi() && "string" === typeof e
          ? (e = document.getElementById(e))
          : e && e.length && (e = e[0]),
        e && e.canvas && (e = e.canvas),
        e
      );
    }
    var Ps = {},
      Os = function (e) {
        var t = Cs(e);
        return Object.values(Ps)
          .filter(function (e) {
            return e.canvas === t;
          })
          .pop();
      };
    function Ts(e, t, n) {
      for (var r = 0, i = Object.keys(e); r < i.length; r++) {
        var a = i[r],
          o = +a;
        if (o >= t) {
          var s = e[a];
          delete e[a], (n > 0 || o > t) && (e[o + n] = s);
        }
      }
    }
    var Ds = (function () {
      function e(t, n) {
        var r = this;
        Re(this, e);
        var i = (this.config = new bs(n)),
          a = Cs(t),
          o = Os(a);
        if (o)
          throw new Error(
            "Canvas is already in use. Chart with ID '" +
              o.id +
              "' must be destroyed before the canvas with ID '" +
              o.canvas.id +
              "' can be reused."
          );
        var s = i.createResolver(i.chartOptionScopes(), this.getContext());
        (this.platform = new (i.platform ||
          (function (e) {
            return !Qi() ||
              ("undefined" !== typeof OffscreenCanvas &&
                e instanceof OffscreenCanvas)
              ? Oo
              : Uo;
          })(a))()),
          this.platform.updateConfig(i);
        var l = this.platform.acquireContext(a, s.aspectRatio),
          u = l && l.canvas,
          c = u && u.height,
          f = u && u.width;
        (this.id = Dn()),
          (this.ctx = l),
          (this.canvas = u),
          (this.width = f),
          (this.height = c),
          (this._options = s),
          (this._aspectRatio = this.aspectRatio),
          (this._layers = []),
          (this._metasets = []),
          (this._stacks = void 0),
          (this.boxes = []),
          (this.currentDevicePixelRatio = void 0),
          (this.chartArea = void 0),
          (this._active = []),
          (this._lastEvent = void 0),
          (this._listeners = {}),
          (this._responsiveListeners = void 0),
          (this._sortedMetasets = []),
          (this.scales = {}),
          (this._plugins = new as()),
          (this.$proxies = {}),
          (this._hiddenIndices = {}),
          (this.attached = !1),
          (this._animationsDisabled = void 0),
          (this.$context = void 0),
          (this._doResize = (function (e, t) {
            var n;
            return function () {
              for (
                var r = arguments.length, i = new Array(r), a = 0;
                a < r;
                a++
              )
                i[a] = arguments[a];
              return (
                t
                  ? (clearTimeout(n), (n = setTimeout(e, t, i)))
                  : e.apply(this, i),
                t
              );
            };
          })(function (e) {
            return r.update(e);
          }, s.resizeDelay || 0)),
          (this._dataChanges = []),
          (Ps[this.id] = this),
          l && u
            ? (_a.listen(this, "complete", Es),
              _a.listen(this, "progress", Ms),
              this._initialize(),
              this.attached && this.update())
            : console.error(
                "Failed to create chart: can't acquire context from the given item"
              );
      }
      return (
        Ne(
          e,
          [
            {
              key: "aspectRatio",
              get: function () {
                var e = this.options,
                  t = e.aspectRatio,
                  n = e.maintainAspectRatio,
                  r = this.width,
                  i = this.height,
                  a = this._aspectRatio;
                return Ln(t) ? (n && a ? a : i ? r / i : null) : t;
              },
            },
            {
              key: "data",
              get: function () {
                return this.config.data;
              },
              set: function (e) {
                this.config.data = e;
              },
            },
            {
              key: "options",
              get: function () {
                return this._options;
              },
              set: function (e) {
                this.config.options = e;
              },
            },
            {
              key: "registry",
              get: function () {
                return is;
              },
            },
            {
              key: "_initialize",
              value: function () {
                return (
                  this.notifyPlugins("beforeInit"),
                  this.options.responsive
                    ? this.resize()
                    : aa(this, this.options.devicePixelRatio),
                  this.bindEvents(),
                  this.notifyPlugins("afterInit"),
                  this
                );
              },
            },
            {
              key: "clear",
              value: function () {
                return ai(this.canvas, this.ctx), this;
              },
            },
            {
              key: "stop",
              value: function () {
                return _a.stop(this), this;
              },
            },
            {
              key: "resize",
              value: function (e, t) {
                _a.running(this)
                  ? (this._resizeBeforeDraw = { width: e, height: t })
                  : this._resize(e, t);
              },
            },
            {
              key: "_resize",
              value: function (e, t) {
                var n = this.options,
                  r = this.canvas,
                  i = n.maintainAspectRatio && this.aspectRatio,
                  a = this.platform.getMaximumSize(r, e, t, i),
                  o = n.devicePixelRatio || this.platform.getDevicePixelRatio(),
                  s = this.width ? "resize" : "attach";
                (this.width = a.width),
                  (this.height = a.height),
                  (this._aspectRatio = this.aspectRatio),
                  aa(this, o, !0) &&
                    (this.notifyPlugins("resize", { size: a }),
                    jn(n.onResize, [this, a], this),
                    this.attached && this._doResize(s) && this.render());
              },
            },
            {
              key: "ensureScalesHaveIDs",
              value: function () {
                Bn(this.options.scales || {}, function (e, t) {
                  e.id = t;
                });
              },
            },
            {
              key: "buildOrUpdateScales",
              value: function () {
                var e = this,
                  t = this.options,
                  n = t.scales,
                  r = this.scales,
                  i = Object.keys(r).reduce(function (e, t) {
                    return (e[t] = !1), e;
                  }, {}),
                  a = [];
                n &&
                  (a = a.concat(
                    Object.keys(n).map(function (e) {
                      var t = n[e],
                        r = cs(e, t),
                        i = "r" === r,
                        a = "x" === r;
                      return {
                        options: t,
                        dposition: i ? "chartArea" : a ? "bottom" : "left",
                        dtype: i ? "radialLinear" : a ? "category" : "linear",
                      };
                    })
                  )),
                  Bn(a, function (n) {
                    var a = n.options,
                      o = a.id,
                      s = cs(o, a),
                      l = Fn(a.type, n.dtype);
                    (void 0 !== a.position &&
                      ws(a.position, s) === ws(n.dposition)) ||
                      (a.position = n.dposition),
                      (i[o] = !0);
                    var u = null;
                    o in r && r[o].type === l
                      ? (u = r[o])
                      : ((u = new (is.getScale(l))({
                          id: o,
                          type: l,
                          ctx: e.ctx,
                          chart: e,
                        })),
                        (r[u.id] = u));
                    u.init(a, t);
                  }),
                  Bn(i, function (e, t) {
                    e || delete r[t];
                  }),
                  Bn(r, function (t) {
                    Mo(e, t, t.options), So(e, t);
                  });
              },
            },
            {
              key: "_updateMetasets",
              value: function () {
                var e = this._metasets,
                  t = this.data.datasets.length,
                  n = e.length;
                if (
                  (e.sort(function (e, t) {
                    return e.index - t.index;
                  }),
                  n > t)
                ) {
                  for (var r = t; r < n; ++r) this._destroyDatasetMeta(r);
                  e.splice(t, n - t);
                }
                this._sortedMetasets = e.slice(0).sort(Ss("order", "index"));
              },
            },
            {
              key: "_removeUnreferencedMetasets",
              value: function () {
                var e = this,
                  t = this._metasets,
                  n = this.data.datasets;
                t.length > n.length && delete this._stacks,
                  t.forEach(function (t, r) {
                    0 ===
                      n.filter(function (e) {
                        return e === t._dataset;
                      }).length && e._destroyDatasetMeta(r);
                  });
              },
            },
            {
              key: "buildOrUpdateControllers",
              value: function () {
                var e,
                  t,
                  n = [],
                  r = this.data.datasets;
                for (
                  this._removeUnreferencedMetasets(), e = 0, t = r.length;
                  e < t;
                  e++
                ) {
                  var i = r[e],
                    a = this.getDatasetMeta(e),
                    o = i.type || this.config.type;
                  if (
                    (a.type &&
                      a.type !== o &&
                      (this._destroyDatasetMeta(e),
                      (a = this.getDatasetMeta(e))),
                    (a.type = o),
                    (a.indexAxis = i.indexAxis || ls(o, this.options)),
                    (a.order = i.order || 0),
                    (a.index = e),
                    (a.label = "" + i.label),
                    (a.visible = this.isDatasetVisible(e)),
                    a.controller)
                  )
                    a.controller.updateIndex(e), a.controller.linkScales();
                  else {
                    var s = is.getController(o),
                      l = ti.datasets[o],
                      u = l.datasetElementType,
                      c = l.dataElementType;
                    Object.assign(s, {
                      dataElementType: is.getElement(c),
                      datasetElementType: u && is.getElement(u),
                    }),
                      (a.controller = new s(this, e)),
                      n.push(a.controller);
                  }
                }
                return this._updateMetasets(), n;
              },
            },
            {
              key: "_resetElements",
              value: function () {
                var e = this;
                Bn(
                  this.data.datasets,
                  function (t, n) {
                    e.getDatasetMeta(n).controller.reset();
                  },
                  this
                );
              },
            },
            {
              key: "reset",
              value: function () {
                this._resetElements(), this.notifyPlugins("reset");
              },
            },
            {
              key: "update",
              value: function (e) {
                var t = this.config;
                t.update();
                var n = (this._options = t.createResolver(
                    t.chartOptionScopes(),
                    this.getContext()
                  )),
                  r = (this._animationsDisabled = !n.animation);
                if (
                  (this._updateScales(),
                  this._checkEventBindings(),
                  this._updateHiddenIndices(),
                  this._plugins.invalidate(),
                  !1 !==
                    this.notifyPlugins("beforeUpdate", {
                      mode: e,
                      cancelable: !0,
                    }))
                ) {
                  var i = this.buildOrUpdateControllers();
                  this.notifyPlugins("beforeElementsUpdate");
                  for (
                    var a = 0, o = 0, s = this.data.datasets.length;
                    o < s;
                    o++
                  ) {
                    var l = this.getDatasetMeta(o).controller,
                      u = !r && -1 === i.indexOf(l);
                    l.buildOrUpdateElements(u),
                      (a = Math.max(+l.getMaxOverflow(), a));
                  }
                  (a = this._minPadding = n.layout.autoPadding ? a : 0),
                    this._updateLayout(a),
                    r ||
                      Bn(i, function (e) {
                        e.reset();
                      }),
                    this._updateDatasets(e),
                    this.notifyPlugins("afterUpdate", { mode: e }),
                    this._layers.sort(Ss("z", "_idx"));
                  var c = this._active,
                    f = this._lastEvent;
                  f
                    ? this._eventHandler(f, !0)
                    : c.length && this._updateHoverStyles(c, c, !0),
                    this.render();
                }
              },
            },
            {
              key: "_updateScales",
              value: function () {
                var e = this;
                Bn(this.scales, function (t) {
                  Eo(e, t);
                }),
                  this.ensureScalesHaveIDs(),
                  this.buildOrUpdateScales();
              },
            },
            {
              key: "_checkEventBindings",
              value: function () {
                var e = this.options,
                  t = new Set(Object.keys(this._listeners)),
                  n = new Set(e.events);
                (er(t, n) && !!this._responsiveListeners === e.responsive) ||
                  (this.unbindEvents(), this.bindEvents());
              },
            },
            {
              key: "_updateHiddenIndices",
              value: function () {
                var e,
                  t = this._hiddenIndices,
                  n = Kt(this._getUniformDataChanges() || []);
                try {
                  for (n.s(); !(e = n.n()).done; ) {
                    var r = e.value,
                      i = r.method,
                      a = r.start,
                      o = r.count;
                    Ts(t, a, "_removeElements" === i ? -o : o);
                  }
                } catch (s) {
                  n.e(s);
                } finally {
                  n.f();
                }
              },
            },
            {
              key: "_getUniformDataChanges",
              value: function () {
                var e = this._dataChanges;
                if (e && e.length) {
                  this._dataChanges = [];
                  for (
                    var t = this.data.datasets.length,
                      n = function (t) {
                        return new Set(
                          e
                            .filter(function (e) {
                              return e[0] === t;
                            })
                            .map(function (e, t) {
                              return t + "," + e.splice(1).join(",");
                            })
                        );
                      },
                      r = n(0),
                      i = 1;
                    i < t;
                    i++
                  )
                    if (!er(r, n(i))) return;
                  return Array.from(r)
                    .map(function (e) {
                      return e.split(",");
                    })
                    .map(function (e) {
                      return { method: e[1], start: +e[2], count: +e[3] };
                    });
                }
              },
            },
            {
              key: "_updateLayout",
              value: function (e) {
                var t = this;
                if (
                  !1 !== this.notifyPlugins("beforeLayout", { cancelable: !0 })
                ) {
                  Co(this, this.width, this.height, e);
                  var n = this.chartArea,
                    r = n.width <= 0 || n.height <= 0;
                  (this._layers = []),
                    Bn(
                      this.boxes,
                      function (e) {
                        var n;
                        (r && "chartArea" === e.position) ||
                          (e.configure && e.configure(),
                          (n = t._layers).push.apply(n, Qt(e._layers())));
                      },
                      this
                    ),
                    this._layers.forEach(function (e, t) {
                      e._idx = t;
                    }),
                    this.notifyPlugins("afterLayout");
                }
              },
            },
            {
              key: "_updateDatasets",
              value: function (e) {
                if (
                  !1 !==
                  this.notifyPlugins("beforeDatasetsUpdate", {
                    mode: e,
                    cancelable: !0,
                  })
                ) {
                  for (var t = 0, n = this.data.datasets.length; t < n; ++t)
                    this.getDatasetMeta(t).controller.configure();
                  for (var r = 0, i = this.data.datasets.length; r < i; ++r)
                    this._updateDataset(r, Zn(e) ? e({ datasetIndex: r }) : e);
                  this.notifyPlugins("afterDatasetsUpdate", { mode: e });
                }
              },
            },
            {
              key: "_updateDataset",
              value: function (e, t) {
                var n = this.getDatasetMeta(e),
                  r = { meta: n, index: e, mode: t, cancelable: !0 };
                !1 !== this.notifyPlugins("beforeDatasetUpdate", r) &&
                  (n.controller._update(t),
                  (r.cancelable = !1),
                  this.notifyPlugins("afterDatasetUpdate", r));
              },
            },
            {
              key: "render",
              value: function () {
                !1 !== this.notifyPlugins("beforeRender", { cancelable: !0 }) &&
                  (_a.has(this)
                    ? this.attached && !_a.running(this) && _a.start(this)
                    : (this.draw(), Es({ chart: this })));
              },
            },
            {
              key: "draw",
              value: function () {
                var e;
                if (this._resizeBeforeDraw) {
                  var t = this._resizeBeforeDraw,
                    n = t.width,
                    r = t.height;
                  this._resize(n, r), (this._resizeBeforeDraw = null);
                }
                if (
                  (this.clear(),
                  !(this.width <= 0 || this.height <= 0) &&
                    !1 !== this.notifyPlugins("beforeDraw", { cancelable: !0 }))
                ) {
                  var i = this._layers;
                  for (e = 0; e < i.length && i[e].z <= 0; ++e)
                    i[e].draw(this.chartArea);
                  for (this._drawDatasets(); e < i.length; ++e)
                    i[e].draw(this.chartArea);
                  this.notifyPlugins("afterDraw");
                }
              },
            },
            {
              key: "_getSortedDatasetMetas",
              value: function (e) {
                var t,
                  n,
                  r = this._sortedMetasets,
                  i = [];
                for (t = 0, n = r.length; t < n; ++t) {
                  var a = r[t];
                  (e && !a.visible) || i.push(a);
                }
                return i;
              },
            },
            {
              key: "getSortedVisibleDatasetMetas",
              value: function () {
                return this._getSortedDatasetMetas(!0);
              },
            },
            {
              key: "_drawDatasets",
              value: function () {
                if (
                  !1 !==
                  this.notifyPlugins("beforeDatasetsDraw", { cancelable: !0 })
                ) {
                  for (
                    var e = this.getSortedVisibleDatasetMetas(),
                      t = e.length - 1;
                    t >= 0;
                    --t
                  )
                    this._drawDataset(e[t]);
                  this.notifyPlugins("afterDatasetsDraw");
                }
              },
            },
            {
              key: "_drawDataset",
              value: function (e) {
                var t = this.ctx,
                  n = e._clip,
                  r = !n.disabled,
                  i =
                    (function (e) {
                      var t = e.xScale,
                        n = e.yScale;
                      if (t && n)
                        return {
                          left: t.left,
                          right: t.right,
                          top: n.top,
                          bottom: n.bottom,
                        };
                    })(e) || this.chartArea,
                  a = { meta: e, index: e.index, cancelable: !0 };
                !1 !== this.notifyPlugins("beforeDatasetDraw", a) &&
                  (r &&
                    ui(t, {
                      left: !1 === n.left ? 0 : i.left - n.left,
                      right: !1 === n.right ? this.width : i.right + n.right,
                      top: !1 === n.top ? 0 : i.top - n.top,
                      bottom:
                        !1 === n.bottom ? this.height : i.bottom + n.bottom,
                    }),
                  e.controller.draw(),
                  r && ci(t),
                  (a.cancelable = !1),
                  this.notifyPlugins("afterDatasetDraw", a));
              },
            },
            {
              key: "isPointInArea",
              value: function (e) {
                return li(e, this.chartArea, this._minPadding);
              },
            },
            {
              key: "getElementsAtEventForMode",
              value: function (e, t, n, r) {
                var i = co.modes[t];
                return "function" === typeof i ? i(this, e, n, r) : [];
              },
            },
            {
              key: "getDatasetMeta",
              value: function (e) {
                var t = this.data.datasets[e],
                  n = this._metasets,
                  r = n
                    .filter(function (e) {
                      return e && e._dataset === t;
                    })
                    .pop();
                return (
                  r ||
                    ((r = {
                      type: null,
                      data: [],
                      dataset: null,
                      controller: null,
                      hidden: null,
                      xAxisID: null,
                      yAxisID: null,
                      order: (t && t.order) || 0,
                      index: e,
                      _dataset: t,
                      _parsed: [],
                      _sorted: !1,
                    }),
                    n.push(r)),
                  r
                );
              },
            },
            {
              key: "getContext",
              value: function () {
                return (
                  this.$context ||
                  (this.$context = Ci(null, { chart: this, type: "chart" }))
                );
              },
            },
            {
              key: "getVisibleDatasetCount",
              value: function () {
                return this.getSortedVisibleDatasetMetas().length;
              },
            },
            {
              key: "isDatasetVisible",
              value: function (e) {
                var t = this.data.datasets[e];
                if (!t) return !1;
                var n = this.getDatasetMeta(e);
                return "boolean" === typeof n.hidden ? !n.hidden : !t.hidden;
              },
            },
            {
              key: "setDatasetVisibility",
              value: function (e, t) {
                this.getDatasetMeta(e).hidden = !t;
              },
            },
            {
              key: "toggleDataVisibility",
              value: function (e) {
                this._hiddenIndices[e] = !this._hiddenIndices[e];
              },
            },
            {
              key: "getDataVisibility",
              value: function (e) {
                return !this._hiddenIndices[e];
              },
            },
            {
              key: "_updateVisibility",
              value: function (e, t, n) {
                var r = n ? "show" : "hide",
                  i = this.getDatasetMeta(e),
                  a = i.controller._resolveAnimations(void 0, r);
                Jn(t)
                  ? ((i.data[t].hidden = !n), this.update())
                  : (this.setDatasetVisibility(e, n),
                    a.update(i, { visible: n }),
                    this.update(function (t) {
                      return t.datasetIndex === e ? r : void 0;
                    }));
              },
            },
            {
              key: "hide",
              value: function (e, t) {
                this._updateVisibility(e, t, !1);
              },
            },
            {
              key: "show",
              value: function (e, t) {
                this._updateVisibility(e, t, !0);
              },
            },
            {
              key: "_destroyDatasetMeta",
              value: function (e) {
                var t = this._metasets[e];
                t && t.controller && t.controller._destroy(),
                  delete this._metasets[e];
              },
            },
            {
              key: "_stop",
              value: function () {
                var e, t;
                for (
                  this.stop(),
                    _a.remove(this),
                    e = 0,
                    t = this.data.datasets.length;
                  e < t;
                  ++e
                )
                  this._destroyDatasetMeta(e);
              },
            },
            {
              key: "destroy",
              value: function () {
                this.notifyPlugins("beforeDestroy");
                var e = this.canvas,
                  t = this.ctx;
                this._stop(),
                  this.config.clearCache(),
                  e &&
                    (this.unbindEvents(),
                    ai(e, t),
                    this.platform.releaseContext(t),
                    (this.canvas = null),
                    (this.ctx = null)),
                  delete Ps[this.id],
                  this.notifyPlugins("afterDestroy");
              },
            },
            {
              key: "toBase64Image",
              value: function () {
                var e;
                return (e = this.canvas).toDataURL.apply(e, arguments);
              },
            },
            {
              key: "bindEvents",
              value: function () {
                this.bindUserEvents(),
                  this.options.responsive
                    ? this.bindResponsiveEvents()
                    : (this.attached = !0);
              },
            },
            {
              key: "bindUserEvents",
              value: function () {
                var e = this,
                  t = this._listeners,
                  n = this.platform,
                  r = function (t, n, r) {
                    (t.offsetX = n), (t.offsetY = r), e._eventHandler(t);
                  };
                Bn(this.options.events, function (i) {
                  return (function (r, i) {
                    n.addEventListener(e, r, i), (t[r] = i);
                  })(i, r);
                });
              },
            },
            {
              key: "bindResponsiveEvents",
              value: function () {
                var e = this;
                this._responsiveListeners || (this._responsiveListeners = {});
                var t,
                  n = this._responsiveListeners,
                  r = this.platform,
                  i = function (t, i) {
                    r.addEventListener(e, t, i), (n[t] = i);
                  },
                  a = function (t, i) {
                    n[t] && (r.removeEventListener(e, t, i), delete n[t]);
                  },
                  o = function (t, n) {
                    e.canvas && e.resize(t, n);
                  },
                  s = function n() {
                    a("attach", n),
                      (e.attached = !0),
                      e.resize(),
                      i("resize", o),
                      i("detach", t);
                  };
                (t = function () {
                  (e.attached = !1),
                    a("resize", o),
                    e._stop(),
                    e._resize(0, 0),
                    i("attach", s);
                }),
                  r.isAttached(this.canvas) ? s() : t();
              },
            },
            {
              key: "unbindEvents",
              value: function () {
                var e = this;
                Bn(this._listeners, function (t, n) {
                  e.platform.removeEventListener(e, n, t);
                }),
                  (this._listeners = {}),
                  Bn(this._responsiveListeners, function (t, n) {
                    e.platform.removeEventListener(e, n, t);
                  }),
                  (this._responsiveListeners = void 0);
              },
            },
            {
              key: "updateHoverStyle",
              value: function (e, t, n) {
                var r,
                  i,
                  a,
                  o = n ? "set" : "remove";
                for (
                  "dataset" === t &&
                    this.getDatasetMeta(e[0].datasetIndex).controller[
                      "_" + o + "DatasetHoverStyle"
                    ](),
                    i = 0,
                    a = e.length;
                  i < a;
                  ++i
                ) {
                  var s =
                    (r = e[i]) &&
                    this.getDatasetMeta(r.datasetIndex).controller;
                  s && s[o + "HoverStyle"](r.element, r.datasetIndex, r.index);
                }
              },
            },
            {
              key: "getActiveElements",
              value: function () {
                return this._active || [];
              },
            },
            {
              key: "setActiveElements",
              value: function (e) {
                var t = this,
                  n = this._active || [],
                  r = e.map(function (e) {
                    var n = e.datasetIndex,
                      r = e.index,
                      i = t.getDatasetMeta(n);
                    if (!i) throw new Error("No dataset found at index " + n);
                    return { datasetIndex: n, element: i.data[r], index: r };
                  });
                !Vn(r, n) &&
                  ((this._active = r),
                  (this._lastEvent = null),
                  this._updateHoverStyles(r, n));
              },
            },
            {
              key: "notifyPlugins",
              value: function (e, t, n) {
                return this._plugins.notify(this, e, t, n);
              },
            },
            {
              key: "isPluginEnabled",
              value: function (e) {
                return (
                  1 ===
                  this._plugins._cache.filter(function (t) {
                    return t.plugin.id === e;
                  }).length
                );
              },
            },
            {
              key: "_updateHoverStyles",
              value: function (e, t, n) {
                var r = this.options.hover,
                  i = function (e, t) {
                    return e.filter(function (e) {
                      return !t.some(function (t) {
                        return (
                          e.datasetIndex === t.datasetIndex &&
                          e.index === t.index
                        );
                      });
                    });
                  },
                  a = i(t, e),
                  o = n ? e : i(e, t);
                a.length && this.updateHoverStyle(a, r.mode, !1),
                  o.length && r.mode && this.updateHoverStyle(o, r.mode, !0);
              },
            },
            {
              key: "_eventHandler",
              value: function (e, t) {
                var n = this,
                  r = {
                    event: e,
                    replay: t,
                    cancelable: !0,
                    inChartArea: this.isPointInArea(e),
                  },
                  i = function (t) {
                    return (t.options.events || n.options.events).includes(
                      e.native.type
                    );
                  };
                if (!1 !== this.notifyPlugins("beforeEvent", r, i)) {
                  var a = this._handleEvent(e, t, r.inChartArea);
                  return (
                    (r.cancelable = !1),
                    this.notifyPlugins("afterEvent", r, i),
                    (a || r.changed) && this.render(),
                    this
                  );
                }
              },
            },
            {
              key: "_handleEvent",
              value: function (e, t, n) {
                var r = this._active,
                  i = void 0 === r ? [] : r,
                  a = this.options,
                  o = t,
                  s = this._getActiveElements(e, i, n, o),
                  l = (function (e) {
                    return (
                      "mouseup" === e.type ||
                      "click" === e.type ||
                      "contextmenu" === e.type
                    );
                  })(e),
                  u = (function (e, t, n, r) {
                    return n && "mouseout" !== e.type ? (r ? t : e) : null;
                  })(e, this._lastEvent, n, l);
                n &&
                  ((this._lastEvent = null),
                  jn(a.onHover, [e, s, this], this),
                  l && jn(a.onClick, [e, s, this], this));
                var c = !Vn(s, i);
                return (
                  (c || t) &&
                    ((this._active = s), this._updateHoverStyles(s, i, t)),
                  (this._lastEvent = u),
                  c
                );
              },
            },
            {
              key: "_getActiveElements",
              value: function (e, t, n, r) {
                if ("mouseout" === e.type) return [];
                if (!n) return t;
                var i = this.options.hover;
                return this.getElementsAtEventForMode(e, i.mode, i, r);
              },
            },
          ],
          [
            {
              key: "register",
              value: function () {
                is.add.apply(is, arguments), Ls();
              },
            },
            {
              key: "unregister",
              value: function () {
                is.remove.apply(is, arguments), Ls();
              },
            },
          ]
        ),
        e
      );
    })();
    function Ls() {
      return Bn(Ds.instances, function (e) {
        return e._plugins.invalidate();
      });
    }
    function Rs(e, t, n, r) {
      var i = ki(e.options.borderRadius, [
          "outerStart",
          "outerEnd",
          "innerStart",
          "innerEnd",
        ]),
        a = (n - t) / 2,
        o = Math.min(a, (r * t) / 2),
        s = function (e) {
          var t = ((n - Math.min(a, e)) * r) / 2;
          return wr(e, 0, Math.min(a, t));
        };
      return {
        outerStart: s(i.outerStart),
        outerEnd: s(i.outerEnd),
        innerStart: wr(i.innerStart, 0, o),
        innerEnd: wr(i.innerEnd, 0, o),
      };
    }
    function As(e, t, n, r) {
      return { x: n + e * Math.cos(t), y: r + e * Math.sin(t) };
    }
    function Ns(e, t, n, r, i, a) {
      var o = t.x,
        s = t.y,
        l = t.startAngle,
        u = t.pixelMargin,
        c = t.innerRadius,
        f = Math.max(t.outerRadius + r + n - u, 0),
        h = c > 0 ? c + r + n + u : 0,
        d = 0,
        p = i - l;
      if (r) {
        var v = ((c > 0 ? c - r : 0) + (f > 0 ? f - r : 0)) / 2;
        d = (p - (0 !== v ? (p * v) / (v + r) : p)) / 2;
      }
      var g = (p - Math.max(0.001, p * f - n / tr) / f) / 2,
        m = l + g + d,
        y = i - g - d,
        b = Rs(t, h, f, y - m),
        x = b.outerStart,
        k = b.outerEnd,
        _ = b.innerStart,
        w = b.innerEnd,
        S = f - x,
        E = f - k,
        M = m + x / S,
        C = y - k / E,
        P = h + _,
        O = h + w,
        T = m + _ / P,
        D = y - w / O;
      if ((e.beginPath(), a)) {
        var L = (M + C) / 2;
        if ((e.arc(o, s, f, M, L), e.arc(o, s, f, L, C), k > 0)) {
          var R = As(E, C, o, s);
          e.arc(R.x, R.y, k, C, y + or);
        }
        var A = As(O, y, o, s);
        if ((e.lineTo(A.x, A.y), w > 0)) {
          var N = As(O, D, o, s);
          e.arc(N.x, N.y, w, y + or, D + Math.PI);
        }
        var z = (y - w / h + (m + _ / h)) / 2;
        if (
          (e.arc(o, s, h, y - w / h, z, !0),
          e.arc(o, s, h, z, m + _ / h, !0),
          _ > 0)
        ) {
          var F = As(P, T, o, s);
          e.arc(F.x, F.y, _, T + Math.PI, m - or);
        }
        var I = As(S, m, o, s);
        if ((e.lineTo(I.x, I.y), x > 0)) {
          var j = As(S, M, o, s);
          e.arc(j.x, j.y, x, m - or, M);
        }
      } else {
        e.moveTo(o, s);
        var B = Math.cos(M) * f + o,
          V = Math.sin(M) * f + s;
        e.lineTo(B, V);
        var W = Math.cos(C) * f + o,
          H = Math.sin(C) * f + s;
        e.lineTo(W, H);
      }
      e.closePath();
    }
    function zs(e, t, n, r, i) {
      var a = t.fullCircles,
        o = t.startAngle,
        s = t.circumference,
        l = t.options,
        u = l.borderWidth,
        c = l.borderJoinStyle,
        f = l.borderDash,
        h = l.borderDashOffset,
        d = "inner" === l.borderAlign;
      if (u) {
        e.setLineDash(f || []),
          (e.lineDashOffset = h),
          d
            ? ((e.lineWidth = 2 * u), (e.lineJoin = c || "round"))
            : ((e.lineWidth = u), (e.lineJoin = c || "bevel"));
        var p = t.endAngle;
        if (a) {
          Ns(e, t, n, r, p, i);
          for (var v = 0; v < a; ++v) e.stroke();
          isNaN(s) || (p = o + (s % nr || nr));
        }
        d &&
          (function (e, t, n) {
            var r = t.startAngle,
              i = t.pixelMargin,
              a = t.x,
              o = t.y,
              s = t.outerRadius,
              l = t.innerRadius,
              u = i / s;
            e.beginPath(),
              e.arc(a, o, s, r - u, n + u),
              l > i
                ? ((u = i / l), e.arc(a, o, l, n + u, r - u, !0))
                : e.arc(a, o, i, n + or, r - or),
              e.closePath(),
              e.clip();
          })(e, t, p),
          a || (Ns(e, t, n, r, p, i), e.stroke());
      }
    }
    l(Ds, "defaults", ti),
      l(Ds, "instances", Ps),
      l(Ds, "overrides", Xr),
      l(Ds, "registry", is),
      l(Ds, "version", "4.3.0"),
      l(Ds, "getChart", Os);
    var Fs = (function (e) {
      Yt(n, e);
      var t = qt(n);
      function n(e) {
        var r;
        return (
          Re(this, n),
          l(Wt((r = t.call(this))), "circumference", void 0),
          l(Wt(r), "endAngle", void 0),
          l(Wt(r), "fullCircles", void 0),
          l(Wt(r), "innerRadius", void 0),
          l(Wt(r), "outerRadius", void 0),
          l(Wt(r), "pixelMargin", void 0),
          l(Wt(r), "startAngle", void 0),
          (r.options = void 0),
          (r.circumference = void 0),
          (r.startAngle = void 0),
          (r.endAngle = void 0),
          (r.innerRadius = void 0),
          (r.outerRadius = void 0),
          (r.pixelMargin = 0),
          (r.fullCircles = 0),
          e && Object.assign(Wt(r), e),
          r
        );
      }
      return (
        Ne(n, [
          {
            key: "inRange",
            value: function (e, t, n) {
              var r = yr(this.getProps(["x", "y"], n), { x: e, y: t }),
                i = r.angle,
                a = r.distance,
                o = this.getProps(
                  [
                    "startAngle",
                    "endAngle",
                    "innerRadius",
                    "outerRadius",
                    "circumference",
                  ],
                  n
                ),
                s = o.startAngle,
                l = o.endAngle,
                u = o.innerRadius,
                c = o.outerRadius,
                f = o.circumference,
                h = (this.options.spacing + this.options.borderWidth) / 2,
                d = Fn(f, l - s) >= nr || _r(i, s, l),
                p = Sr(a, u + h, c + h);
              return d && p;
            },
          },
          {
            key: "getCenterPoint",
            value: function (e) {
              var t = this.getProps(
                  [
                    "x",
                    "y",
                    "startAngle",
                    "endAngle",
                    "innerRadius",
                    "outerRadius",
                  ],
                  e
                ),
                n = t.x,
                r = t.y,
                i = t.startAngle,
                a = t.endAngle,
                o = t.innerRadius,
                s = t.outerRadius,
                l = this.options,
                u = l.offset,
                c = (i + a) / 2,
                f = (o + s + l.spacing + u) / 2;
              return { x: n + Math.cos(c) * f, y: r + Math.sin(c) * f };
            },
          },
          {
            key: "tooltipPosition",
            value: function (e) {
              return this.getCenterPoint(e);
            },
          },
          {
            key: "draw",
            value: function (e) {
              var t = this.options,
                n = this.circumference,
                r = (t.offset || 0) / 4,
                i = (t.spacing || 0) / 2,
                a = t.circular;
              if (
                ((this.pixelMargin = "inner" === t.borderAlign ? 0.33 : 0),
                (this.fullCircles = n > nr ? Math.floor(n / nr) : 0),
                !(0 === n || this.innerRadius < 0 || this.outerRadius < 0))
              ) {
                e.save();
                var o = (this.startAngle + this.endAngle) / 2;
                e.translate(Math.cos(o) * r, Math.sin(o) * r);
                var s = r * (1 - Math.sin(Math.min(tr, n || 0)));
                (e.fillStyle = t.backgroundColor),
                  (e.strokeStyle = t.borderColor),
                  (function (e, t, n, r, i) {
                    var a = t.fullCircles,
                      o = t.startAngle,
                      s = t.circumference,
                      l = t.endAngle;
                    if (a) {
                      Ns(e, t, n, r, l, i);
                      for (var u = 0; u < a; ++u) e.fill();
                      isNaN(s) || (l = o + (s % nr || nr));
                    }
                    Ns(e, t, n, r, l, i), e.fill();
                  })(e, this, s, i, a),
                  zs(e, this, s, i, a),
                  e.restore();
              }
            },
          },
        ]),
        n
      );
    })($o);
    function Is(e, t) {
      var n =
        arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t;
      (e.lineCap = Fn(n.borderCapStyle, t.borderCapStyle)),
        e.setLineDash(Fn(n.borderDash, t.borderDash)),
        (e.lineDashOffset = Fn(n.borderDashOffset, t.borderDashOffset)),
        (e.lineJoin = Fn(n.borderJoinStyle, t.borderJoinStyle)),
        (e.lineWidth = Fn(n.borderWidth, t.borderWidth)),
        (e.strokeStyle = Fn(n.borderColor, t.borderColor));
    }
    function js(e, t, n) {
      e.lineTo(n.x, n.y);
    }
    function Bs(e, t) {
      var n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        r = e.length,
        i = n.start,
        a = void 0 === i ? 0 : i,
        o = n.end,
        s = void 0 === o ? r - 1 : o,
        l = t.start,
        u = t.end,
        c = Math.max(a, l),
        f = Math.min(s, u),
        h = (a < l && s < l) || (a > u && s > u);
      return {
        count: r,
        start: c,
        loop: t.loop,
        ilen: f < c && !h ? r + f - c : f - c,
      };
    }
    function Vs(e, t, n, r) {
      var i,
        a,
        o,
        s = t.points,
        l = t.options,
        u = Bs(s, n, r),
        c = u.count,
        f = u.start,
        h = u.loop,
        d = u.ilen,
        p = (function (e) {
          return e.stepped
            ? fi
            : e.tension || "monotone" === e.cubicInterpolationMode
            ? hi
            : js;
        })(l),
        v = r || {},
        g = v.move,
        m = void 0 === g || g,
        y = v.reverse;
      for (i = 0; i <= d; ++i)
        (a = s[(f + (y ? d - i : i)) % c]).skip ||
          (m ? (e.moveTo(a.x, a.y), (m = !1)) : p(e, o, a, y, l.stepped),
          (o = a));
      return h && p(e, o, (a = s[(f + (y ? d : 0)) % c]), y, l.stepped), !!h;
    }
    function Ws(e, t, n, r) {
      var i,
        a,
        o,
        s,
        l,
        u,
        c = t.points,
        f = Bs(c, n, r),
        h = f.count,
        d = f.start,
        p = f.ilen,
        v = r || {},
        g = v.move,
        m = void 0 === g || g,
        y = v.reverse,
        b = 0,
        x = 0,
        k = function (e) {
          return (d + (y ? p - e : e)) % h;
        },
        _ = function () {
          s !== l && (e.lineTo(b, l), e.lineTo(b, s), e.lineTo(b, u));
        };
      for (m && ((a = c[k(0)]), e.moveTo(a.x, a.y)), i = 0; i <= p; ++i)
        if (!(a = c[k(i)]).skip) {
          var w = a.x,
            S = a.y,
            E = 0 | w;
          E === o
            ? (S < s ? (s = S) : S > l && (l = S), (b = (x * b + w) / ++x))
            : (_(), e.lineTo(w, S), (o = E), (x = 0), (s = l = S)),
            (u = S);
        }
      _();
    }
    function Hs(e) {
      var t = e.options,
        n = t.borderDash && t.borderDash.length;
      return !e._decimated &&
        !e._loop &&
        !t.tension &&
        "monotone" !== t.cubicInterpolationMode &&
        !t.stepped &&
        !n
        ? Ws
        : Vs;
    }
    l(Fs, "id", "arc"),
      l(Fs, "defaults", {
        borderAlign: "center",
        borderColor: "#fff",
        borderDash: [],
        borderDashOffset: 0,
        borderJoinStyle: void 0,
        borderRadius: 0,
        borderWidth: 2,
        offset: 0,
        spacing: 0,
        angle: void 0,
        circular: !0,
      }),
      l(Fs, "defaultRoutes", { backgroundColor: "backgroundColor" }),
      l(Fs, "descriptors", {
        _scriptable: !0,
        _indexable: function (e) {
          return "borderDash" !== e;
        },
      });
    var Us = "function" === typeof Path2D;
    function $s(e, t, n, r) {
      Us && !t.options.segment
        ? (function (e, t, n, r) {
            var i = t._path;
            i ||
              ((i = t._path = new Path2D()), t.path(i, n, r) && i.closePath()),
              Is(e, t.options),
              e.stroke(i);
          })(e, t, n, r)
        : (function (e, t, n, r) {
            var i,
              a = t.segments,
              o = t.options,
              s = Hs(t),
              l = Kt(a);
            try {
              for (l.s(); !(i = l.n()).done; ) {
                var u = i.value;
                Is(e, o, u.style),
                  e.beginPath(),
                  s(e, t, u, { start: n, end: n + r - 1 }) && e.closePath(),
                  e.stroke();
              }
            } catch (c) {
              l.e(c);
            } finally {
              l.f();
            }
          })(e, t, n, r);
    }
    var Ys = (function (e) {
      Yt(n, e);
      var t = qt(n);
      function n(e) {
        var r;
        return (
          Re(this, n),
          ((r = t.call(this)).animated = !0),
          (r.options = void 0),
          (r._chart = void 0),
          (r._loop = void 0),
          (r._fullLoop = void 0),
          (r._path = void 0),
          (r._points = void 0),
          (r._segments = void 0),
          (r._decimated = !1),
          (r._pointsUpdated = !1),
          (r._datasetIndex = void 0),
          e && Object.assign(Wt(r), e),
          r
        );
      }
      return (
        Ne(n, [
          {
            key: "updateControlPoints",
            value: function (e, t) {
              var n = this.options;
              if (
                (n.tension || "monotone" === n.cubicInterpolationMode) &&
                !n.stepped &&
                !this._pointsUpdated
              ) {
                var r = n.spanGaps ? this._loop : this._fullLoop;
                Ki(this._points, n, e, r, t), (this._pointsUpdated = !0);
              }
            },
          },
          {
            key: "points",
            get: function () {
              return this._points;
            },
            set: function (e) {
              (this._points = e),
                delete this._segments,
                delete this._path,
                (this._pointsUpdated = !1);
            },
          },
          {
            key: "segments",
            get: function () {
              return (
                this._segments ||
                (this._segments = (function (e, t) {
                  var n = e.points,
                    r = e.options.spanGaps,
                    i = n.length;
                  if (!i) return [];
                  var a = !!e._loop,
                    o = (function (e, t, n, r) {
                      var i = 0,
                        a = t - 1;
                      if (n && !r) for (; i < t && !e[i].skip; ) i++;
                      for (; i < t && e[i].skip; ) i++;
                      for (i %= t, n && (a += i); a > i && e[a % t].skip; ) a--;
                      return { start: i, end: (a %= t) };
                    })(n, i, a, r),
                    s = o.start,
                    l = o.end;
                  return ya(
                    e,
                    !0 === r
                      ? [{ start: s, end: l, loop: a }]
                      : (function (e, t, n, r) {
                          var i,
                            a = e.length,
                            o = [],
                            s = t,
                            l = e[t];
                          for (i = t + 1; i <= n; ++i) {
                            var u = e[i % a];
                            u.skip || u.stop
                              ? l.skip ||
                                ((r = !1),
                                o.push({
                                  start: t % a,
                                  end: (i - 1) % a,
                                  loop: r,
                                }),
                                (t = s = u.stop ? i : null))
                              : ((s = i), l.skip && (t = i)),
                              (l = u);
                          }
                          return (
                            null !== s &&
                              o.push({ start: t % a, end: s % a, loop: r }),
                            o
                          );
                        })(
                          n,
                          s,
                          l < s ? l + i : l,
                          !!e._fullLoop && 0 === s && l === i - 1
                        ),
                    n,
                    t
                  );
                })(this, this.options.segment))
              );
            },
          },
          {
            key: "first",
            value: function () {
              var e = this.segments,
                t = this.points;
              return e.length && t[e[0].start];
            },
          },
          {
            key: "last",
            value: function () {
              var e = this.segments,
                t = this.points,
                n = e.length;
              return n && t[e[n - 1].end];
            },
          },
          {
            key: "interpolate",
            value: function (e, t) {
              var n = this.options,
                r = e[t],
                i = this.points,
                a = ma(this, { property: t, start: r, end: r });
              if (a.length) {
                var o,
                  s,
                  l = [],
                  u = (function (e) {
                    return e.stepped
                      ? ua
                      : e.tension || "monotone" === e.cubicInterpolationMode
                      ? ca
                      : la;
                  })(n);
                for (o = 0, s = a.length; o < s; ++o) {
                  var c = a[o],
                    f = c.start,
                    h = c.end,
                    d = i[f],
                    p = i[h];
                  if (d !== p) {
                    var v = u(
                      d,
                      p,
                      Math.abs((r - d[t]) / (p[t] - d[t])),
                      n.stepped
                    );
                    (v[t] = e[t]), l.push(v);
                  } else l.push(d);
                }
                return 1 === l.length ? l[0] : l;
              }
            },
          },
          {
            key: "pathSegment",
            value: function (e, t, n) {
              return Hs(this)(e, this, t, n);
            },
          },
          {
            key: "path",
            value: function (e, t, n) {
              var r = this.segments,
                i = Hs(this),
                a = this._loop;
              (t = t || 0), (n = n || this.points.length - t);
              var o,
                s = Kt(r);
              try {
                for (s.s(); !(o = s.n()).done; ) {
                  a &= i(e, this, o.value, { start: t, end: t + n - 1 });
                }
              } catch (l) {
                s.e(l);
              } finally {
                s.f();
              }
              return !!a;
            },
          },
          {
            key: "draw",
            value: function (e, t, n, r) {
              var i = this.options || {};
              (this.points || []).length &&
                i.borderWidth &&
                (e.save(), $s(e, this, n, r), e.restore()),
                this.animated &&
                  ((this._pointsUpdated = !1), (this._path = void 0));
            },
          },
        ]),
        n
      );
    })($o);
    function qs(e, t, n, r) {
      var i = e.options,
        a = e.getProps([n], r)[n];
      return Math.abs(t - a) < i.radius + i.hitRadius;
    }
    l(Ys, "id", "line"),
      l(Ys, "defaults", {
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0,
        borderJoinStyle: "miter",
        borderWidth: 3,
        capBezierPoints: !0,
        cubicInterpolationMode: "default",
        fill: !1,
        spanGaps: !1,
        stepped: !1,
        tension: 0,
      }),
      l(Ys, "defaultRoutes", {
        backgroundColor: "backgroundColor",
        borderColor: "borderColor",
      }),
      l(Ys, "descriptors", {
        _scriptable: !0,
        _indexable: function (e) {
          return "borderDash" !== e && "fill" !== e;
        },
      });
    var Ks = (function (e) {
      Yt(n, e);
      var t = qt(n);
      function n(e) {
        var r;
        return (
          Re(this, n),
          l(Wt((r = t.call(this))), "parsed", void 0),
          l(Wt(r), "skip", void 0),
          l(Wt(r), "stop", void 0),
          (r.options = void 0),
          (r.parsed = void 0),
          (r.skip = void 0),
          (r.stop = void 0),
          e && Object.assign(Wt(r), e),
          r
        );
      }
      return (
        Ne(n, [
          {
            key: "inRange",
            value: function (e, t, n) {
              var r = this.options,
                i = this.getProps(["x", "y"], n),
                a = i.x,
                o = i.y;
              return (
                Math.pow(e - a, 2) + Math.pow(t - o, 2) <
                Math.pow(r.hitRadius + r.radius, 2)
              );
            },
          },
          {
            key: "inXRange",
            value: function (e, t) {
              return qs(this, e, "x", t);
            },
          },
          {
            key: "inYRange",
            value: function (e, t) {
              return qs(this, e, "y", t);
            },
          },
          {
            key: "getCenterPoint",
            value: function (e) {
              var t = this.getProps(["x", "y"], e);
              return { x: t.x, y: t.y };
            },
          },
          {
            key: "size",
            value: function (e) {
              var t = (e = e || this.options || {}).radius || 0;
              return (
                2 *
                ((t = Math.max(t, (t && e.hoverRadius) || 0)) +
                  ((t && e.borderWidth) || 0))
              );
            },
          },
          {
            key: "draw",
            value: function (e, t) {
              var n = this.options;
              this.skip ||
                n.radius < 0.1 ||
                !li(this, t, this.size(n) / 2) ||
                ((e.strokeStyle = n.borderColor),
                (e.lineWidth = n.borderWidth),
                (e.fillStyle = n.backgroundColor),
                oi(e, n, this.x, this.y));
            },
          },
          {
            key: "getRange",
            value: function () {
              var e = this.options || {};
              return e.radius + e.hitRadius;
            },
          },
        ]),
        n
      );
    })($o);
    function Qs(e, t) {
      var n,
        r,
        i,
        a,
        o,
        s = e.getProps(["x", "y", "base", "width", "height"], t),
        l = s.x,
        u = s.y,
        c = s.base,
        f = s.width,
        h = s.height;
      return (
        e.horizontal
          ? ((o = h / 2),
            (n = Math.min(l, c)),
            (r = Math.max(l, c)),
            (i = u - o),
            (a = u + o))
          : ((n = l - (o = f / 2)),
            (r = l + o),
            (i = Math.min(u, c)),
            (a = Math.max(u, c))),
        { left: n, top: i, right: r, bottom: a }
      );
    }
    function Xs(e, t, n, r) {
      return e ? 0 : wr(t, n, r);
    }
    function Gs(e) {
      var t = Qs(e),
        n = t.right - t.left,
        r = t.bottom - t.top,
        i = (function (e, t, n) {
          var r = e.options.borderWidth,
            i = e.borderSkipped,
            a = _i(r);
          return {
            t: Xs(i.top, a.top, 0, n),
            r: Xs(i.right, a.right, 0, t),
            b: Xs(i.bottom, a.bottom, 0, n),
            l: Xs(i.left, a.left, 0, t),
          };
        })(e, n / 2, r / 2),
        a = (function (e, t, n) {
          var r = e.getProps(["enableBorderRadius"]).enableBorderRadius,
            i = e.options.borderRadius,
            a = wi(i),
            o = Math.min(t, n),
            s = e.borderSkipped,
            l = r || An(i);
          return {
            topLeft: Xs(!l || s.top || s.left, a.topLeft, 0, o),
            topRight: Xs(!l || s.top || s.right, a.topRight, 0, o),
            bottomLeft: Xs(!l || s.bottom || s.left, a.bottomLeft, 0, o),
            bottomRight: Xs(!l || s.bottom || s.right, a.bottomRight, 0, o),
          };
        })(e, n / 2, r / 2);
      return {
        outer: { x: t.left, y: t.top, w: n, h: r, radius: a },
        inner: {
          x: t.left + i.l,
          y: t.top + i.t,
          w: n - i.l - i.r,
          h: r - i.t - i.b,
          radius: {
            topLeft: Math.max(0, a.topLeft - Math.max(i.t, i.l)),
            topRight: Math.max(0, a.topRight - Math.max(i.t, i.r)),
            bottomLeft: Math.max(0, a.bottomLeft - Math.max(i.b, i.l)),
            bottomRight: Math.max(0, a.bottomRight - Math.max(i.b, i.r)),
          },
        },
      };
    }
    function Js(e, t, n, r) {
      var i = null === t,
        a = null === n,
        o = e && !(i && a) && Qs(e, r);
      return (
        o && (i || Sr(t, o.left, o.right)) && (a || Sr(n, o.top, o.bottom))
      );
    }
    function Zs(e, t) {
      e.rect(t.x, t.y, t.w, t.h);
    }
    function el(e, t) {
      var n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        r = e.x !== n.x ? -t : 0,
        i = e.y !== n.y ? -t : 0,
        a = (e.x + e.w !== n.x + n.w ? t : 0) - r,
        o = (e.y + e.h !== n.y + n.h ? t : 0) - i;
      return {
        x: e.x + r,
        y: e.y + i,
        w: e.w + a,
        h: e.h + o,
        radius: e.radius,
      };
    }
    l(Ks, "id", "point"),
      l(Ks, "defaults", {
        borderWidth: 1,
        hitRadius: 1,
        hoverBorderWidth: 1,
        hoverRadius: 4,
        pointStyle: "circle",
        radius: 3,
        rotation: 0,
      }),
      l(Ks, "defaultRoutes", {
        backgroundColor: "backgroundColor",
        borderColor: "borderColor",
      });
    var tl = (function (e) {
      Yt(n, e);
      var t = qt(n);
      function n(e) {
        var r;
        return (
          Re(this, n),
          ((r = t.call(this)).options = void 0),
          (r.horizontal = void 0),
          (r.base = void 0),
          (r.width = void 0),
          (r.height = void 0),
          (r.inflateAmount = void 0),
          e && Object.assign(Wt(r), e),
          r
        );
      }
      return (
        Ne(n, [
          {
            key: "draw",
            value: function (e) {
              var t,
                n = this.inflateAmount,
                r = this.options,
                i = r.borderColor,
                a = r.backgroundColor,
                o = Gs(this),
                s = o.inner,
                l = o.outer,
                u =
                  (t = l.radius).topLeft ||
                  t.topRight ||
                  t.bottomLeft ||
                  t.bottomRight
                    ? gi
                    : Zs;
              e.save(),
                (l.w === s.w && l.h === s.h) ||
                  (e.beginPath(),
                  u(e, el(l, n, s)),
                  e.clip(),
                  u(e, el(s, -n, l)),
                  (e.fillStyle = i),
                  e.fill("evenodd")),
                e.beginPath(),
                u(e, el(s, n)),
                (e.fillStyle = a),
                e.fill(),
                e.restore();
            },
          },
          {
            key: "inRange",
            value: function (e, t, n) {
              return Js(this, e, t, n);
            },
          },
          {
            key: "inXRange",
            value: function (e, t) {
              return Js(this, e, null, t);
            },
          },
          {
            key: "inYRange",
            value: function (e, t) {
              return Js(this, null, e, t);
            },
          },
          {
            key: "getCenterPoint",
            value: function (e) {
              var t = this.getProps(["x", "y", "base", "horizontal"], e),
                n = t.x,
                r = t.y,
                i = t.base,
                a = t.horizontal;
              return { x: a ? (n + i) / 2 : n, y: a ? r : (r + i) / 2 };
            },
          },
          {
            key: "getRange",
            value: function (e) {
              return "x" === e ? this.width / 2 : this.height / 2;
            },
          },
        ]),
        n
      );
    })($o);
    l(tl, "id", "bar"),
      l(tl, "defaults", {
        borderSkipped: "start",
        borderWidth: 0,
        borderRadius: 0,
        inflateAmount: "auto",
        pointStyle: void 0,
      }),
      l(tl, "defaultRoutes", {
        backgroundColor: "backgroundColor",
        borderColor: "borderColor",
      });
    var nl = Object.freeze({
        __proto__: null,
        ArcElement: Fs,
        BarElement: tl,
        LineElement: Ys,
        PointElement: Ks,
      }),
      rl = [
        "rgb(54, 162, 235)",
        "rgb(255, 99, 132)",
        "rgb(255, 159, 64)",
        "rgb(255, 205, 86)",
        "rgb(75, 192, 192)",
        "rgb(153, 102, 255)",
        "rgb(201, 203, 207)",
      ],
      il = rl.map(function (e) {
        return e.replace("rgb(", "rgba(").replace(")", ", 0.5)");
      });
    function al(e) {
      return rl[e % rl.length];
    }
    function ol(e) {
      return il[e % il.length];
    }
    function sl(e) {
      var t = 0;
      return function (n, r) {
        var i = e.getDatasetMeta(r).controller;
        i instanceof Qa
          ? (t = (function (e, t) {
              return (
                (e.backgroundColor = e.data.map(function () {
                  return al(t++);
                })),
                t
              );
            })(n, t))
          : i instanceof Ga
          ? (t = (function (e, t) {
              return (
                (e.backgroundColor = e.data.map(function () {
                  return ol(t++);
                })),
                t
              );
            })(n, t))
          : i &&
            (t = (function (e, t) {
              return (e.borderColor = al(t)), (e.backgroundColor = ol(t)), ++t;
            })(n, t));
      };
    }
    function ll(e) {
      var t;
      for (t in e) if (e[t].borderColor || e[t].backgroundColor) return !0;
      return !1;
    }
    var ul = {
      id: "colors",
      defaults: { enabled: !0, forceOverride: !1 },
      beforeLayout: function (e, t, n) {
        if (n.enabled) {
          var r = e.config,
            i = r.data.datasets,
            a = r.options,
            o = a.elements;
          if (
            n.forceOverride ||
            !(
              ll(i) ||
              ((s = a), s && (s.borderColor || s.backgroundColor)) ||
              (o && ll(o))
            )
          ) {
            var s,
              l = sl(e);
            i.forEach(l);
          }
        }
      },
    };
    function cl(e) {
      if (e._decimated) {
        var t = e._data;
        delete e._decimated,
          delete e._data,
          Object.defineProperty(e, "data", {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            value: t,
          });
      }
    }
    function fl(e) {
      e.data.datasets.forEach(function (e) {
        cl(e);
      });
    }
    var hl = {
      id: "decimation",
      defaults: { algorithm: "min-max", enabled: !1 },
      beforeElementsUpdate: function (e, t, n) {
        if (n.enabled) {
          var r = e.width;
          e.data.datasets.forEach(function (t, i) {
            var a = t._data,
              o = t.indexAxis,
              s = e.getDatasetMeta(i),
              l = a || t.data;
            if (
              "y" !== Mi([o, e.options.indexAxis]) &&
              s.controller.supportsDecimation
            ) {
              var u = e.scales[s.xAxisID];
              if (
                ("linear" === u.type || "time" === u.type) &&
                !e.options.parsing
              ) {
                var f = (function (e, t) {
                    var n = t.length,
                      r = 0,
                      i = e.iScale,
                      a = i.getUserBounds(),
                      o = a.min,
                      s = a.max,
                      l = a.minDefined,
                      u = a.maxDefined;
                    return (
                      l && (r = wr(Mr(t, i.axis, o).lo, 0, n - 1)),
                      {
                        start: r,
                        count: u
                          ? wr(Mr(t, i.axis, s).hi + 1, r, n) - r
                          : n - r,
                      }
                    );
                  })(s, l),
                  h = f.start,
                  d = f.count;
                if (d <= (n.threshold || 4 * r)) cl(t);
                else {
                  var p;
                  switch (
                    (Ln(a) &&
                      ((t._data = l),
                      delete t.data,
                      Object.defineProperty(t, "data", {
                        configurable: !0,
                        enumerable: !0,
                        get: function () {
                          return this._decimated;
                        },
                        set: function (e) {
                          this._data = e;
                        },
                      })),
                    n.algorithm)
                  ) {
                    case "lttb":
                      p = (function (e, t, n, r, i) {
                        var a = i.samples || r;
                        if (a >= n) return e.slice(t, t + n);
                        var o,
                          s,
                          l,
                          u,
                          c,
                          f = [],
                          h = (n - 2) / (a - 2),
                          d = 0,
                          p = t + n - 1,
                          v = t;
                        for (f[d++] = e[v], o = 0; o < a - 2; o++) {
                          var g = 0,
                            m = 0,
                            y = void 0,
                            b = Math.floor((o + 1) * h) + 1 + t,
                            x = Math.min(Math.floor((o + 2) * h) + 1, n) + t,
                            k = x - b;
                          for (y = b; y < x; y++) (g += e[y].x), (m += e[y].y);
                          (g /= k), (m /= k);
                          var _ = Math.floor(o * h) + 1 + t,
                            w = Math.min(Math.floor((o + 1) * h) + 1, n) + t,
                            S = e[v],
                            E = S.x,
                            M = S.y;
                          for (l = u = -1, y = _; y < w; y++)
                            (u =
                              0.5 *
                              Math.abs(
                                (E - g) * (e[y].y - M) - (E - e[y].x) * (m - M)
                              )) > l && ((l = u), (s = e[y]), (c = y));
                          (f[d++] = s), (v = c);
                        }
                        return (f[d++] = e[p]), f;
                      })(l, h, d, r, n);
                      break;
                    case "min-max":
                      p = (function (e, t, n, r) {
                        var i,
                          a,
                          o,
                          s,
                          l,
                          u,
                          f,
                          h,
                          d,
                          p,
                          v = 0,
                          g = 0,
                          m = [],
                          y = t + n - 1,
                          b = e[t].x,
                          x = e[y].x - b;
                        for (i = t; i < t + n; ++i) {
                          (o = (((a = e[i]).x - b) / x) * r), (s = a.y);
                          var k = 0 | o;
                          if (k === l)
                            s < d
                              ? ((d = s), (u = i))
                              : s > p && ((p = s), (f = i)),
                              (v = (g * v + a.x) / ++g);
                          else {
                            var _ = i - 1;
                            if (!Ln(u) && !Ln(f)) {
                              var w = Math.min(u, f),
                                S = Math.max(u, f);
                              w !== h &&
                                w !== _ &&
                                m.push(c(c({}, e[w]), {}, { x: v })),
                                S !== h &&
                                  S !== _ &&
                                  m.push(c(c({}, e[S]), {}, { x: v }));
                            }
                            i > 0 && _ !== h && m.push(e[_]),
                              m.push(a),
                              (l = k),
                              (g = 0),
                              (d = p = s),
                              (u = f = h = i);
                          }
                        }
                        return m;
                      })(l, h, d, r);
                      break;
                    default:
                      throw new Error(
                        "Unsupported decimation algorithm '".concat(
                          n.algorithm,
                          "'"
                        )
                      );
                  }
                  t._decimated = p;
                }
              }
            }
          });
        } else fl(e);
      },
      destroy: function (e) {
        fl(e);
      },
    };
    function dl(e, t, n, r) {
      if (!r) {
        var i = t[e],
          a = n[e];
        return (
          "angle" === e && ((i = kr(i)), (a = kr(a))),
          { property: e, start: i, end: a }
        );
      }
    }
    function pl(e, t, n) {
      for (; t > e; t--) {
        var r = n[t];
        if (!isNaN(r.x) && !isNaN(r.y)) break;
      }
      return t;
    }
    function vl(e, t, n, r) {
      return e && t ? r(e[n], t[n]) : e ? e[n] : t ? t[n] : 0;
    }
    function gl(e, t) {
      var n = [],
        r = !1;
      return (
        Rn(e)
          ? ((r = !0), (n = e))
          : (n = (function (e, t) {
              var n = e || {},
                r = n.x,
                i = void 0 === r ? null : r,
                a = n.y,
                o = void 0 === a ? null : a,
                s = t.points,
                l = [];
              return (
                t.segments.forEach(function (e) {
                  var t = e.start,
                    n = e.end;
                  n = pl(t, n, s);
                  var r = s[t],
                    a = s[n];
                  null !== o
                    ? (l.push({ x: r.x, y: o }), l.push({ x: a.x, y: o }))
                    : null !== i &&
                      (l.push({ x: i, y: r.y }), l.push({ x: i, y: a.y }));
                }),
                l
              );
            })(e, t)),
        n.length
          ? new Ys({
              points: n,
              options: { tension: 0 },
              _loop: r,
              _fullLoop: r,
            })
          : null
      );
    }
    function ml(e) {
      return e && !1 !== e.fill;
    }
    function yl(e, t, n) {
      var r,
        i = e[t].fill,
        a = [t];
      if (!n) return i;
      for (; !1 !== i && -1 === a.indexOf(i); ) {
        if (!Nn(i)) return i;
        if (!(r = e[i])) return !1;
        if (r.visible) return i;
        a.push(i), (i = r.fill);
      }
      return !1;
    }
    function bl(e, t, n) {
      var r = (function (e) {
        var t = e.options,
          n = t.fill,
          r = Fn(n && n.target, n);
        void 0 === r && (r = !!t.backgroundColor);
        if (!1 === r || null === r) return !1;
        if (!0 === r) return "origin";
        return r;
      })(e);
      if (An(r)) return !isNaN(r.value) && r;
      var i = parseFloat(r);
      return Nn(i) && Math.floor(i) === i
        ? (function (e, t, n, r) {
            ("-" !== e && "+" !== e) || (n = t + n);
            if (n === t || n < 0 || n >= r) return !1;
            return n;
          })(r[0], t, i, n)
        : ["origin", "start", "end", "stack", "shape"].indexOf(r) >= 0 && r;
    }
    function xl(e, t, n) {
      for (var r = [], i = 0; i < n.length; i++) {
        var a = kl(n[i], t, "x"),
          o = a.first,
          s = a.last,
          l = a.point;
        if (!(!l || (o && s)))
          if (o) r.unshift(l);
          else if ((e.push(l), !s)) break;
      }
      e.push.apply(e, r);
    }
    function kl(e, t, n) {
      var r = e.interpolate(t, n);
      if (!r) return {};
      for (
        var i = r[n], a = e.segments, o = e.points, s = !1, l = !1, u = 0;
        u < a.length;
        u++
      ) {
        var c = a[u],
          f = o[c.start][n],
          h = o[c.end][n];
        if (Sr(i, f, h)) {
          (s = i === f), (l = i === h);
          break;
        }
      }
      return { first: s, last: l, point: r };
    }
    var _l = (function () {
      function e(t) {
        Re(this, e), (this.x = t.x), (this.y = t.y), (this.radius = t.radius);
      }
      return (
        Ne(e, [
          {
            key: "pathSegment",
            value: function (e, t, n) {
              var r = this.x,
                i = this.y,
                a = this.radius;
              return (
                (t = t || { start: 0, end: nr }),
                e.arc(r, i, a, t.end, t.start, !0),
                !n.bounds
              );
            },
          },
          {
            key: "interpolate",
            value: function (e) {
              var t = this.x,
                n = this.y,
                r = this.radius,
                i = e.angle;
              return {
                x: t + Math.cos(i) * r,
                y: n + Math.sin(i) * r,
                angle: i,
              };
            },
          },
        ]),
        e
      );
    })();
    function wl(e) {
      var t = e.chart,
        n = e.fill,
        r = e.line;
      if (Nn(n))
        return (function (e, t) {
          var n = e.getDatasetMeta(t),
            r = n && e.isDatasetVisible(t);
          return r ? n.dataset : null;
        })(t, n);
      if ("stack" === n)
        return (function (e) {
          var t = e.scale,
            n = e.index,
            r = e.line,
            i = [],
            a = r.segments,
            o = r.points,
            s = (function (e, t) {
              for (
                var n = [], r = e.getMatchingVisibleMetas("line"), i = 0;
                i < r.length;
                i++
              ) {
                var a = r[i];
                if (a.index === t) break;
                a.hidden || n.unshift(a.dataset);
              }
              return n;
            })(t, n);
          s.push(gl({ x: null, y: t.bottom }, r));
          for (var l = 0; l < a.length; l++)
            for (var u = a[l], c = u.start; c <= u.end; c++) xl(i, o[c], s);
          return new Ys({ points: i, options: {} });
        })(e);
      if ("shape" === n) return !0;
      var i = (function (e) {
        var t = e.scale || {};
        if (t.getPointPositionForValue)
          return (function (e) {
            var t = e.scale,
              n = e.fill,
              r = t.options,
              i = t.getLabels().length,
              a = r.reverse ? t.max : t.min,
              o = (function (e, t, n) {
                return "start" === e
                  ? n
                  : "end" === e
                  ? t.options.reverse
                    ? t.min
                    : t.max
                  : An(e)
                  ? e.value
                  : t.getBaseValue();
              })(n, t, a),
              s = [];
            if (r.grid.circular) {
              var l = t.getPointPositionForValue(0, a);
              return new _l({
                x: l.x,
                y: l.y,
                radius: t.getDistanceFromCenterForValue(o),
              });
            }
            for (var u = 0; u < i; ++u)
              s.push(t.getPointPositionForValue(u, o));
            return s;
          })(e);
        return (function (e) {
          var t = e.scale,
            n = void 0 === t ? {} : t,
            r = e.fill,
            i = (function (e, t) {
              var n = null;
              return (
                "start" === e
                  ? (n = t.bottom)
                  : "end" === e
                  ? (n = t.top)
                  : An(e)
                  ? (n = t.getPixelForValue(e.value))
                  : t.getBasePixel && (n = t.getBasePixel()),
                n
              );
            })(r, n);
          if (Nn(i)) {
            var a = n.isHorizontal();
            return { x: a ? i : null, y: a ? null : i };
          }
          return null;
        })(e);
      })(e);
      return i instanceof _l ? i : gl(i, r);
    }
    function Sl(e, t, n) {
      var r = wl(t),
        i = t.line,
        a = t.scale,
        o = t.axis,
        s = i.options,
        l = s.fill,
        u = s.backgroundColor,
        c = l || {},
        f = c.above,
        h = void 0 === f ? u : f,
        d = c.below,
        p = void 0 === d ? u : d;
      r &&
        i.points.length &&
        (ui(e, n),
        (function (e, t) {
          var n = t.line,
            r = t.target,
            i = t.above,
            a = t.below,
            o = t.area,
            s = t.scale,
            l = n._loop ? "angle" : t.axis;
          e.save(),
            "x" === l &&
              a !== i &&
              (El(e, r, o.top),
              Ml(e, { line: n, target: r, color: i, scale: s, property: l }),
              e.restore(),
              e.save(),
              El(e, r, o.bottom));
          Ml(e, { line: n, target: r, color: a, scale: s, property: l }),
            e.restore();
        })(e, {
          line: i,
          target: r,
          above: h,
          below: p,
          area: n,
          scale: a,
          axis: o,
        }),
        ci(e));
    }
    function El(e, t, n) {
      var r = t.segments,
        i = t.points,
        a = !0,
        o = !1;
      e.beginPath();
      var s,
        l = Kt(r);
      try {
        for (l.s(); !(s = l.n()).done; ) {
          var u = s.value,
            c = u.start,
            f = u.end,
            h = i[c],
            d = i[pl(c, f, i)];
          a
            ? (e.moveTo(h.x, h.y), (a = !1))
            : (e.lineTo(h.x, n), e.lineTo(h.x, h.y)),
            (o = !!t.pathSegment(e, u, { move: o }))
              ? e.closePath()
              : e.lineTo(d.x, n);
        }
      } catch (p) {
        l.e(p);
      } finally {
        l.f();
      }
      e.lineTo(t.first().x, n), e.closePath(), e.clip();
    }
    function Ml(e, t) {
      var n,
        r = t.line,
        i = t.target,
        a = t.property,
        o = t.color,
        s = t.scale,
        u = (function (e, t, n) {
          var r,
            i = e.segments,
            a = e.points,
            o = t.points,
            s = [],
            u = Kt(i);
          try {
            for (u.s(); !(r = u.n()).done; ) {
              var c = r.value,
                f = c.start,
                h = c.end;
              h = pl(f, h, a);
              var d = dl(n, a[f], a[h], c.loop);
              if (t.segments) {
                var p,
                  v = Kt(ma(t, d));
                try {
                  for (v.s(); !(p = v.n()).done; ) {
                    var g,
                      m = p.value,
                      y = dl(n, o[m.start], o[m.end], m.loop),
                      b = Kt(ga(c, a, y));
                    try {
                      for (b.s(); !(g = b.n()).done; ) {
                        var x = g.value;
                        s.push({
                          source: x,
                          target: m,
                          start: l({}, n, vl(d, y, "start", Math.max)),
                          end: l({}, n, vl(d, y, "end", Math.min)),
                        });
                      }
                    } catch (k) {
                      b.e(k);
                    } finally {
                      b.f();
                    }
                  }
                } catch (k) {
                  v.e(k);
                } finally {
                  v.f();
                }
              } else s.push({ source: c, target: d, start: a[f], end: a[h] });
            }
          } catch (k) {
            u.e(k);
          } finally {
            u.f();
          }
          return s;
        })(r, i, a),
        c = Kt(u);
      try {
        for (c.s(); !(n = c.n()).done; ) {
          var f = n.value,
            h = f.source,
            d = f.target,
            p = f.start,
            v = f.end,
            g = h.style,
            m = (void 0 === g ? {} : g).backgroundColor,
            y = void 0 === m ? o : m,
            b = !0 !== i;
          e.save(),
            (e.fillStyle = y),
            Cl(e, s, b && dl(a, p, v)),
            e.beginPath();
          var x = !!r.pathSegment(e, h),
            k = void 0;
          if (b) {
            x ? e.closePath() : Pl(e, i, v, a);
            var _ = !!i.pathSegment(e, d, { move: x, reverse: !0 });
            (k = x && _) || Pl(e, i, p, a);
          }
          e.closePath(), e.fill(k ? "evenodd" : "nonzero"), e.restore();
        }
      } catch (w) {
        c.e(w);
      } finally {
        c.f();
      }
    }
    function Cl(e, t, n) {
      var r = t.chart.chartArea,
        i = r.top,
        a = r.bottom,
        o = n || {},
        s = o.property,
        l = o.start,
        u = o.end;
      "x" === s && (e.beginPath(), e.rect(l, i, u - l, a - i), e.clip());
    }
    function Pl(e, t, n, r) {
      var i = t.interpolate(n, r);
      i && e.lineTo(i.x, i.y);
    }
    var Ol = {
        id: "filler",
        afterDatasetsUpdate: function (e, t, n) {
          var r,
            i,
            a,
            o,
            s = (e.data.datasets || []).length,
            l = [];
          for (i = 0; i < s; ++i)
            (o = null),
              (a = (r = e.getDatasetMeta(i)).dataset) &&
                a.options &&
                a instanceof Ys &&
                (o = {
                  visible: e.isDatasetVisible(i),
                  index: i,
                  fill: bl(a, i, s),
                  chart: e,
                  axis: r.controller.options.indexAxis,
                  scale: r.vScale,
                  line: a,
                }),
              (r.$filler = o),
              l.push(o);
          for (i = 0; i < s; ++i)
            (o = l[i]) && !1 !== o.fill && (o.fill = yl(l, i, n.propagate));
        },
        beforeDraw: function (e, t, n) {
          for (
            var r = "beforeDraw" === n.drawTime,
              i = e.getSortedVisibleDatasetMetas(),
              a = e.chartArea,
              o = i.length - 1;
            o >= 0;
            --o
          ) {
            var s = i[o].$filler;
            s &&
              (s.line.updateControlPoints(a, s.axis),
              r && s.fill && Sl(e.ctx, s, a));
          }
        },
        beforeDatasetsDraw: function (e, t, n) {
          if ("beforeDatasetsDraw" === n.drawTime)
            for (
              var r = e.getSortedVisibleDatasetMetas(), i = r.length - 1;
              i >= 0;
              --i
            ) {
              var a = r[i].$filler;
              ml(a) && Sl(e.ctx, a, e.chartArea);
            }
        },
        beforeDatasetDraw: function (e, t, n) {
          var r = t.meta.$filler;
          ml(r) &&
            "beforeDatasetDraw" === n.drawTime &&
            Sl(e.ctx, r, e.chartArea);
        },
        defaults: { propagate: !0, drawTime: "beforeDatasetDraw" },
      },
      Tl = function (e, t) {
        var n = e.boxHeight,
          r = void 0 === n ? t : n,
          i = e.boxWidth,
          a = void 0 === i ? t : i;
        return (
          e.usePointStyle &&
            ((r = Math.min(r, t)), (a = e.pointStyleWidth || Math.min(a, t))),
          { boxWidth: a, boxHeight: r, itemHeight: Math.max(t, r) }
        );
      },
      Dl = (function (e) {
        Yt(n, e);
        var t = qt(n);
        function n(e) {
          var r;
          return (
            Re(this, n),
            ((r = t.call(this))._added = !1),
            (r.legendHitBoxes = []),
            (r._hoveredItem = null),
            (r.doughnutMode = !1),
            (r.chart = e.chart),
            (r.options = e.options),
            (r.ctx = e.ctx),
            (r.legendItems = void 0),
            (r.columnSizes = void 0),
            (r.lineWidths = void 0),
            (r.maxHeight = void 0),
            (r.maxWidth = void 0),
            (r.top = void 0),
            (r.bottom = void 0),
            (r.left = void 0),
            (r.right = void 0),
            (r.height = void 0),
            (r.width = void 0),
            (r._margins = void 0),
            (r.position = void 0),
            (r.weight = void 0),
            (r.fullSize = void 0),
            r
          );
        }
        return (
          Ne(n, [
            {
              key: "update",
              value: function (e, t, n) {
                (this.maxWidth = e),
                  (this.maxHeight = t),
                  (this._margins = n),
                  this.setDimensions(),
                  this.buildLabels(),
                  this.fit();
              },
            },
            {
              key: "setDimensions",
              value: function () {
                this.isHorizontal()
                  ? ((this.width = this.maxWidth),
                    (this.left = this._margins.left),
                    (this.right = this.width))
                  : ((this.height = this.maxHeight),
                    (this.top = this._margins.top),
                    (this.bottom = this.height));
              },
            },
            {
              key: "buildLabels",
              value: function () {
                var e = this,
                  t = this.options.labels || {},
                  n = jn(t.generateLabels, [this.chart], this) || [];
                t.filter &&
                  (n = n.filter(function (n) {
                    return t.filter(n, e.chart.data);
                  })),
                  t.sort &&
                    (n = n.sort(function (n, r) {
                      return t.sort(n, r, e.chart.data);
                    })),
                  this.options.reverse && n.reverse(),
                  (this.legendItems = n);
              },
            },
            {
              key: "fit",
              value: function () {
                var e = this.options,
                  t = this.ctx;
                if (e.display) {
                  var n,
                    r,
                    i = e.labels,
                    a = Ei(i.font),
                    o = a.size,
                    s = this._computeTitleHeight(),
                    l = Tl(i, o),
                    u = l.boxWidth,
                    c = l.itemHeight;
                  (t.font = a.string),
                    this.isHorizontal()
                      ? ((n = this.maxWidth),
                        (r = this._fitRows(s, o, u, c) + 10))
                      : ((r = this.maxHeight),
                        (n = this._fitCols(s, a, u, c) + 10)),
                    (this.width = Math.min(n, e.maxWidth || this.maxWidth)),
                    (this.height = Math.min(r, e.maxHeight || this.maxHeight));
                } else this.width = this.height = 0;
              },
            },
            {
              key: "_fitRows",
              value: function (e, t, n, r) {
                var i = this.ctx,
                  a = this.maxWidth,
                  o = this.options.labels.padding,
                  s = (this.legendHitBoxes = []),
                  l = (this.lineWidths = [0]),
                  u = r + o,
                  c = e;
                (i.textAlign = "left"), (i.textBaseline = "middle");
                var f = -1,
                  h = -u;
                return (
                  this.legendItems.forEach(function (e, d) {
                    var p = n + t / 2 + i.measureText(e.text).width;
                    (0 === d || l[l.length - 1] + p + 2 * o > a) &&
                      ((c += u),
                      (l[l.length - (d > 0 ? 0 : 1)] = 0),
                      (h += u),
                      f++),
                      (s[d] = { left: 0, top: h, row: f, width: p, height: r }),
                      (l[l.length - 1] += p + o);
                  }),
                  c
                );
              },
            },
            {
              key: "_fitCols",
              value: function (e, t, n, r) {
                var i = this.ctx,
                  a = this.maxHeight,
                  o = this.options.labels.padding,
                  s = (this.legendHitBoxes = []),
                  l = (this.columnSizes = []),
                  u = a - e,
                  c = o,
                  f = 0,
                  h = 0,
                  d = 0,
                  p = 0;
                return (
                  this.legendItems.forEach(function (e, a) {
                    var v = (function (e, t, n, r, i) {
                        var a = (function (e, t, n, r) {
                            var i = e.text;
                            i &&
                              "string" !== typeof i &&
                              (i = i.reduce(function (e, t) {
                                return e.length > t.length ? e : t;
                              }));
                            return t + n.size / 2 + r.measureText(i).width;
                          })(r, e, t, n),
                          o = (function (e, t, n) {
                            var r = e;
                            "string" !== typeof t.text && (r = Ll(t, n));
                            return r;
                          })(i, r, t.lineHeight);
                        return { itemWidth: a, itemHeight: o };
                      })(n, t, i, e, r),
                      g = v.itemWidth,
                      m = v.itemHeight;
                    a > 0 &&
                      h + m + 2 * o > u &&
                      ((c += f + o),
                      l.push({ width: f, height: h }),
                      (d += f + o),
                      p++,
                      (f = h = 0)),
                      (s[a] = { left: d, top: h, col: p, width: g, height: m }),
                      (f = Math.max(f, g)),
                      (h += m + o);
                  }),
                  (c += f),
                  l.push({ width: f, height: h }),
                  c
                );
              },
            },
            {
              key: "adjustHitBoxes",
              value: function () {
                if (this.options.display) {
                  var e = this._computeTitleHeight(),
                    t = this.legendHitBoxes,
                    n = this.options,
                    r = n.align,
                    i = n.labels.padding,
                    a = fa(n.rtl, this.left, this.width);
                  if (this.isHorizontal()) {
                    var o,
                      s = 0,
                      l = Ar(r, this.left + i, this.right - this.lineWidths[s]),
                      u = Kt(t);
                    try {
                      for (u.s(); !(o = u.n()).done; ) {
                        var c = o.value;
                        s !== c.row &&
                          ((s = c.row),
                          (l = Ar(
                            r,
                            this.left + i,
                            this.right - this.lineWidths[s]
                          ))),
                          (c.top += this.top + e + i),
                          (c.left = a.leftForLtr(a.x(l), c.width)),
                          (l += c.width + i);
                      }
                    } catch (g) {
                      u.e(g);
                    } finally {
                      u.f();
                    }
                  } else {
                    var f,
                      h = 0,
                      d = Ar(
                        r,
                        this.top + e + i,
                        this.bottom - this.columnSizes[h].height
                      ),
                      p = Kt(t);
                    try {
                      for (p.s(); !(f = p.n()).done; ) {
                        var v = f.value;
                        v.col !== h &&
                          ((h = v.col),
                          (d = Ar(
                            r,
                            this.top + e + i,
                            this.bottom - this.columnSizes[h].height
                          ))),
                          (v.top = d),
                          (v.left += this.left + i),
                          (v.left = a.leftForLtr(a.x(v.left), v.width)),
                          (d += v.height + i);
                      }
                    } catch (g) {
                      p.e(g);
                    } finally {
                      p.f();
                    }
                  }
                }
              },
            },
            {
              key: "isHorizontal",
              value: function () {
                return (
                  "top" === this.options.position ||
                  "bottom" === this.options.position
                );
              },
            },
            {
              key: "draw",
              value: function () {
                if (this.options.display) {
                  var e = this.ctx;
                  ui(e, this), this._draw(), ci(e);
                }
              },
            },
            {
              key: "_draw",
              value: function () {
                var e,
                  t = this,
                  n = this.options,
                  r = this.columnSizes,
                  i = this.lineWidths,
                  a = this.ctx,
                  o = n.align,
                  s = n.labels,
                  l = ti.color,
                  u = fa(n.rtl, this.left, this.width),
                  c = Ei(s.font),
                  f = s.padding,
                  h = c.size,
                  d = h / 2;
                this.drawTitle(),
                  (a.textAlign = u.textAlign("left")),
                  (a.textBaseline = "middle"),
                  (a.lineWidth = 0.5),
                  (a.font = c.string);
                var p = Tl(s, h),
                  v = p.boxWidth,
                  g = p.boxHeight,
                  m = p.itemHeight,
                  y = this.isHorizontal(),
                  b = this._computeTitleHeight();
                (e = y
                  ? {
                      x: Ar(o, this.left + f, this.right - i[0]),
                      y: this.top + f + b,
                      line: 0,
                    }
                  : {
                      x: this.left + f,
                      y: Ar(o, this.top + b + f, this.bottom - r[0].height),
                      line: 0,
                    }),
                  ha(this.ctx, n.textDirection);
                var x = m + f;
                this.legendItems.forEach(function (p, k) {
                  (a.strokeStyle = p.fontColor), (a.fillStyle = p.fontColor);
                  var _ = a.measureText(p.text).width,
                    w = u.textAlign(p.textAlign || (p.textAlign = s.textAlign)),
                    S = v + d + _,
                    E = e.x,
                    M = e.y;
                  if (
                    (u.setWidth(t.width),
                    y
                      ? k > 0 &&
                        E + S + f > t.right &&
                        ((M = e.y += x),
                        e.line++,
                        (E = e.x = Ar(o, t.left + f, t.right - i[e.line])))
                      : k > 0 &&
                        M + x > t.bottom &&
                        ((E = e.x = E + r[e.line].width + f),
                        e.line++,
                        (M = e.y =
                          Ar(o, t.top + b + f, t.bottom - r[e.line].height))),
                    (function (e, t, n) {
                      if (!(isNaN(v) || v <= 0 || isNaN(g) || g < 0)) {
                        a.save();
                        var r = Fn(n.lineWidth, 1);
                        if (
                          ((a.fillStyle = Fn(n.fillStyle, l)),
                          (a.lineCap = Fn(n.lineCap, "butt")),
                          (a.lineDashOffset = Fn(n.lineDashOffset, 0)),
                          (a.lineJoin = Fn(n.lineJoin, "miter")),
                          (a.lineWidth = r),
                          (a.strokeStyle = Fn(n.strokeStyle, l)),
                          a.setLineDash(Fn(n.lineDash, [])),
                          s.usePointStyle)
                        ) {
                          var i = {
                              radius: (g * Math.SQRT2) / 2,
                              pointStyle: n.pointStyle,
                              rotation: n.rotation,
                              borderWidth: r,
                            },
                            o = u.xPlus(e, v / 2);
                          si(a, i, o, t + d, s.pointStyleWidth && v);
                        } else {
                          var c = t + Math.max((h - g) / 2, 0),
                            f = u.leftForLtr(e, v),
                            p = wi(n.borderRadius);
                          a.beginPath(),
                            Object.values(p).some(function (e) {
                              return 0 !== e;
                            })
                              ? gi(a, { x: f, y: c, w: v, h: g, radius: p })
                              : a.rect(f, c, v, g),
                            a.fill(),
                            0 !== r && a.stroke();
                        }
                        a.restore();
                      }
                    })(u.x(E), M, p),
                    (E = (function (e, t, n, r) {
                      return e === (r ? "left" : "right")
                        ? n
                        : "center" === e
                        ? (t + n) / 2
                        : t;
                    })(w, E + v + d, y ? E + S : t.right, n.rtl)),
                    (function (e, t, n) {
                      vi(a, n.text, e, t + m / 2, c, {
                        strikethrough: n.hidden,
                        textAlign: u.textAlign(n.textAlign),
                      });
                    })(u.x(E), M, p),
                    y)
                  )
                    e.x += S + f;
                  else if ("string" !== typeof p.text) {
                    var C = c.lineHeight;
                    e.y += Ll(p, C);
                  } else e.y += x;
                }),
                  da(this.ctx, n.textDirection);
              },
            },
            {
              key: "drawTitle",
              value: function () {
                var e = this.options,
                  t = e.title,
                  n = Ei(t.font),
                  r = Si(t.padding);
                if (t.display) {
                  var i,
                    a = fa(e.rtl, this.left, this.width),
                    o = this.ctx,
                    s = t.position,
                    l = n.size / 2,
                    u = r.top + l,
                    c = this.left,
                    f = this.width;
                  if (this.isHorizontal())
                    (f = Math.max.apply(Math, Qt(this.lineWidths))),
                      (i = this.top + u),
                      (c = Ar(e.align, c, this.right - f));
                  else {
                    var h = this.columnSizes.reduce(function (e, t) {
                      return Math.max(e, t.height);
                    }, 0);
                    i =
                      u +
                      Ar(
                        e.align,
                        this.top,
                        this.bottom -
                          h -
                          e.labels.padding -
                          this._computeTitleHeight()
                      );
                  }
                  var d = Ar(s, c, c + f);
                  (o.textAlign = a.textAlign(Rr(s))),
                    (o.textBaseline = "middle"),
                    (o.strokeStyle = t.color),
                    (o.fillStyle = t.color),
                    (o.font = n.string),
                    vi(o, t.text, d, i, n);
                }
              },
            },
            {
              key: "_computeTitleHeight",
              value: function () {
                var e = this.options.title,
                  t = Ei(e.font),
                  n = Si(e.padding);
                return e.display ? t.lineHeight + n.height : 0;
              },
            },
            {
              key: "_getLegendItemAt",
              value: function (e, t) {
                var n, r, i;
                if (
                  Sr(e, this.left, this.right) &&
                  Sr(t, this.top, this.bottom)
                )
                  for (i = this.legendHitBoxes, n = 0; n < i.length; ++n)
                    if (
                      Sr(e, (r = i[n]).left, r.left + r.width) &&
                      Sr(t, r.top, r.top + r.height)
                    )
                      return this.legendItems[n];
                return null;
              },
            },
            {
              key: "handleEvent",
              value: function (e) {
                var t = this.options;
                if (
                  (function (e, t) {
                    if (
                      ("mousemove" === e || "mouseout" === e) &&
                      (t.onHover || t.onLeave)
                    )
                      return !0;
                    if (t.onClick && ("click" === e || "mouseup" === e))
                      return !0;
                    return !1;
                  })(e.type, t)
                ) {
                  var n,
                    r,
                    i = this._getLegendItemAt(e.x, e.y);
                  if ("mousemove" === e.type || "mouseout" === e.type) {
                    var a = this._hoveredItem,
                      o =
                        ((r = i),
                        null !== (n = a) &&
                          null !== r &&
                          n.datasetIndex === r.datasetIndex &&
                          n.index === r.index);
                    a && !o && jn(t.onLeave, [e, a, this], this),
                      (this._hoveredItem = i),
                      i && !o && jn(t.onHover, [e, i, this], this);
                  } else i && jn(t.onClick, [e, i, this], this);
                }
              },
            },
          ]),
          n
        );
      })($o);
    function Ll(e, t) {
      return t * (e.text ? e.text.length + 0.5 : 0);
    }
    var Rl = {
        id: "legend",
        _element: Dl,
        start: function (e, t, n) {
          var r = (e.legend = new Dl({ ctx: e.ctx, options: n, chart: e }));
          Mo(e, r, n), So(e, r);
        },
        stop: function (e) {
          Eo(e, e.legend), delete e.legend;
        },
        beforeUpdate: function (e, t, n) {
          var r = e.legend;
          Mo(e, r, n), (r.options = n);
        },
        afterUpdate: function (e) {
          var t = e.legend;
          t.buildLabels(), t.adjustHitBoxes();
        },
        afterEvent: function (e, t) {
          t.replay || e.legend.handleEvent(t.event);
        },
        defaults: {
          display: !0,
          position: "top",
          align: "center",
          fullSize: !0,
          reverse: !1,
          weight: 1e3,
          onClick: function (e, t, n) {
            var r = t.datasetIndex,
              i = n.chart;
            i.isDatasetVisible(r)
              ? (i.hide(r), (t.hidden = !0))
              : (i.show(r), (t.hidden = !1));
          },
          onHover: null,
          onLeave: null,
          labels: {
            color: function (e) {
              return e.chart.options.color;
            },
            boxWidth: 40,
            padding: 10,
            generateLabels: function (e) {
              var t = e.data.datasets,
                n = e.legend.options.labels,
                r = n.usePointStyle,
                i = n.pointStyle,
                a = n.textAlign,
                o = n.color,
                s = n.useBorderRadius,
                l = n.borderRadius;
              return e._getSortedDatasetMetas().map(function (e) {
                var n = e.controller.getStyle(r ? 0 : void 0),
                  u = Si(n.borderWidth);
                return {
                  text: t[e.index].label,
                  fillStyle: n.backgroundColor,
                  fontColor: o,
                  hidden: !e.visible,
                  lineCap: n.borderCapStyle,
                  lineDash: n.borderDash,
                  lineDashOffset: n.borderDashOffset,
                  lineJoin: n.borderJoinStyle,
                  lineWidth: (u.width + u.height) / 4,
                  strokeStyle: n.borderColor,
                  pointStyle: i || n.pointStyle,
                  rotation: n.rotation,
                  textAlign: a || n.textAlign,
                  borderRadius: s && (l || n.borderRadius),
                  datasetIndex: e.index,
                };
              }, this);
            },
          },
          title: {
            color: function (e) {
              return e.chart.options.color;
            },
            display: !1,
            position: "center",
            text: "",
          },
        },
        descriptors: {
          _scriptable: function (e) {
            return !e.startsWith("on");
          },
          labels: {
            _scriptable: function (e) {
              return !["generateLabels", "filter", "sort"].includes(e);
            },
          },
        },
      },
      Al = (function (e) {
        Yt(n, e);
        var t = qt(n);
        function n(e) {
          var r;
          return (
            Re(this, n),
            ((r = t.call(this)).chart = e.chart),
            (r.options = e.options),
            (r.ctx = e.ctx),
            (r._padding = void 0),
            (r.top = void 0),
            (r.bottom = void 0),
            (r.left = void 0),
            (r.right = void 0),
            (r.width = void 0),
            (r.height = void 0),
            (r.position = void 0),
            (r.weight = void 0),
            (r.fullSize = void 0),
            r
          );
        }
        return (
          Ne(n, [
            {
              key: "update",
              value: function (e, t) {
                var n = this.options;
                if (((this.left = 0), (this.top = 0), n.display)) {
                  (this.width = this.right = e),
                    (this.height = this.bottom = t);
                  var r = Rn(n.text) ? n.text.length : 1;
                  this._padding = Si(n.padding);
                  var i = r * Ei(n.font).lineHeight + this._padding.height;
                  this.isHorizontal() ? (this.height = i) : (this.width = i);
                } else this.width = this.height = this.right = this.bottom = 0;
              },
            },
            {
              key: "isHorizontal",
              value: function () {
                var e = this.options.position;
                return "top" === e || "bottom" === e;
              },
            },
            {
              key: "_drawArgs",
              value: function (e) {
                var t,
                  n,
                  r,
                  i = this.top,
                  a = this.left,
                  o = this.bottom,
                  s = this.right,
                  l = this.options,
                  u = l.align,
                  c = 0;
                return (
                  this.isHorizontal()
                    ? ((n = Ar(u, a, s)), (r = i + e), (t = s - a))
                    : ("left" === l.position
                        ? ((n = a + e), (r = Ar(u, o, i)), (c = -0.5 * tr))
                        : ((n = s - e), (r = Ar(u, i, o)), (c = 0.5 * tr)),
                      (t = o - i)),
                  { titleX: n, titleY: r, maxWidth: t, rotation: c }
                );
              },
            },
            {
              key: "draw",
              value: function () {
                var e = this.ctx,
                  t = this.options;
                if (t.display) {
                  var n = Ei(t.font),
                    r = n.lineHeight / 2 + this._padding.top,
                    i = this._drawArgs(r),
                    a = i.titleX,
                    o = i.titleY,
                    s = i.maxWidth,
                    l = i.rotation;
                  vi(e, t.text, 0, 0, n, {
                    color: t.color,
                    maxWidth: s,
                    rotation: l,
                    textAlign: Rr(t.align),
                    textBaseline: "middle",
                    translation: [a, o],
                  });
                }
              },
            },
          ]),
          n
        );
      })($o);
    var Nl = {
        id: "title",
        _element: Al,
        start: function (e, t, n) {
          !(function (e, t) {
            var n = new Al({ ctx: e.ctx, options: t, chart: e });
            Mo(e, n, t), So(e, n), (e.titleBlock = n);
          })(e, n);
        },
        stop: function (e) {
          var t = e.titleBlock;
          Eo(e, t), delete e.titleBlock;
        },
        beforeUpdate: function (e, t, n) {
          var r = e.titleBlock;
          Mo(e, r, n), (r.options = n);
        },
        defaults: {
          align: "center",
          display: !1,
          font: { weight: "bold" },
          fullSize: !0,
          padding: 10,
          position: "top",
          text: "",
          weight: 2e3,
        },
        defaultRoutes: { color: "color" },
        descriptors: { _scriptable: !0, _indexable: !1 },
      },
      zl = new WeakMap(),
      Fl = {
        id: "subtitle",
        start: function (e, t, n) {
          var r = new Al({ ctx: e.ctx, options: n, chart: e });
          Mo(e, r, n), So(e, r), zl.set(e, r);
        },
        stop: function (e) {
          Eo(e, zl.get(e)), zl.delete(e);
        },
        beforeUpdate: function (e, t, n) {
          var r = zl.get(e);
          Mo(e, r, n), (r.options = n);
        },
        defaults: {
          align: "center",
          display: !1,
          font: { weight: "normal" },
          fullSize: !0,
          padding: 0,
          position: "top",
          text: "",
          weight: 1500,
        },
        defaultRoutes: { color: "color" },
        descriptors: { _scriptable: !0, _indexable: !1 },
      },
      Il = {
        average: function (e) {
          if (!e.length) return !1;
          var t,
            n,
            r = 0,
            i = 0,
            a = 0;
          for (t = 0, n = e.length; t < n; ++t) {
            var o = e[t].element;
            if (o && o.hasValue()) {
              var s = o.tooltipPosition();
              (r += s.x), (i += s.y), ++a;
            }
          }
          return { x: r / a, y: i / a };
        },
        nearest: function (e, t) {
          if (!e.length) return !1;
          var n,
            r,
            i,
            a = t.x,
            o = t.y,
            s = Number.POSITIVE_INFINITY;
          for (n = 0, r = e.length; n < r; ++n) {
            var l = e[n].element;
            if (l && l.hasValue()) {
              var u = br(t, l.getCenterPoint());
              u < s && ((s = u), (i = l));
            }
          }
          if (i) {
            var c = i.tooltipPosition();
            (a = c.x), (o = c.y);
          }
          return { x: a, y: o };
        },
      };
    function jl(e, t) {
      return t && (Rn(t) ? Array.prototype.push.apply(e, t) : e.push(t)), e;
    }
    function Bl(e) {
      return ("string" === typeof e || e instanceof String) &&
        e.indexOf("\n") > -1
        ? e.split("\n")
        : e;
    }
    function Vl(e, t) {
      var n = t.element,
        r = t.datasetIndex,
        i = t.index,
        a = e.getDatasetMeta(r).controller,
        o = a.getLabelAndValue(i),
        s = o.label,
        l = o.value;
      return {
        chart: e,
        label: s,
        parsed: a.getParsed(i),
        raw: e.data.datasets[r].data[i],
        formattedValue: l,
        dataset: a.getDataset(),
        dataIndex: i,
        datasetIndex: r,
        element: n,
      };
    }
    function Wl(e, t) {
      var n = e.chart.ctx,
        r = e.body,
        i = e.footer,
        a = e.title,
        o = t.boxWidth,
        s = t.boxHeight,
        l = Ei(t.bodyFont),
        u = Ei(t.titleFont),
        c = Ei(t.footerFont),
        f = a.length,
        h = i.length,
        d = r.length,
        p = Si(t.padding),
        v = p.height,
        g = 0,
        m = r.reduce(function (e, t) {
          return e + t.before.length + t.lines.length + t.after.length;
        }, 0);
      ((m += e.beforeBody.length + e.afterBody.length),
      f &&
        (v +=
          f * u.lineHeight + (f - 1) * t.titleSpacing + t.titleMarginBottom),
      m) &&
        (v +=
          d * (t.displayColors ? Math.max(s, l.lineHeight) : l.lineHeight) +
          (m - d) * l.lineHeight +
          (m - 1) * t.bodySpacing);
      h &&
        (v += t.footerMarginTop + h * c.lineHeight + (h - 1) * t.footerSpacing);
      var y = 0,
        b = function (e) {
          g = Math.max(g, n.measureText(e).width + y);
        };
      return (
        n.save(),
        (n.font = u.string),
        Bn(e.title, b),
        (n.font = l.string),
        Bn(e.beforeBody.concat(e.afterBody), b),
        (y = t.displayColors ? o + 2 + t.boxPadding : 0),
        Bn(r, function (e) {
          Bn(e.before, b), Bn(e.lines, b), Bn(e.after, b);
        }),
        (y = 0),
        (n.font = c.string),
        Bn(e.footer, b),
        n.restore(),
        { width: (g += p.width), height: v }
      );
    }
    function Hl(e, t, n, r) {
      var i = n.x,
        a = n.width,
        o = e.width,
        s = e.chartArea,
        l = s.left,
        u = s.right,
        c = "center";
      return (
        "center" === r
          ? (c = i <= (l + u) / 2 ? "left" : "right")
          : i <= a / 2
          ? (c = "left")
          : i >= o - a / 2 && (c = "right"),
        (function (e, t, n, r) {
          var i = r.x,
            a = r.width,
            o = n.caretSize + n.caretPadding;
          return (
            ("left" === e && i + a + o > t.width) ||
            ("right" === e && i - a - o < 0) ||
            void 0
          );
        })(c, e, t, n) && (c = "center"),
        c
      );
    }
    function Ul(e, t, n) {
      var r =
        n.yAlign ||
        t.yAlign ||
        (function (e, t) {
          var n = t.y,
            r = t.height;
          return n < r / 2 ? "top" : n > e.height - r / 2 ? "bottom" : "center";
        })(e, n);
      return { xAlign: n.xAlign || t.xAlign || Hl(e, t, n, r), yAlign: r };
    }
    function $l(e, t, n, r) {
      var i = e.caretSize,
        a = e.caretPadding,
        o = e.cornerRadius,
        s = n.xAlign,
        l = n.yAlign,
        u = i + a,
        c = wi(o),
        f = c.topLeft,
        h = c.topRight,
        d = c.bottomLeft,
        p = c.bottomRight,
        v = (function (e, t) {
          var n = e.x,
            r = e.width;
          return "right" === t ? (n -= r) : "center" === t && (n -= r / 2), n;
        })(t, s),
        g = (function (e, t, n) {
          var r = e.y,
            i = e.height;
          return (
            "top" === t ? (r += n) : (r -= "bottom" === t ? i + n : i / 2), r
          );
        })(t, l, u);
      return (
        "center" === l
          ? "left" === s
            ? (v += u)
            : "right" === s && (v -= u)
          : "left" === s
          ? (v -= Math.max(f, d) + i)
          : "right" === s && (v += Math.max(h, p) + i),
        { x: wr(v, 0, r.width - t.width), y: wr(g, 0, r.height - t.height) }
      );
    }
    function Yl(e, t, n) {
      var r = Si(n.padding);
      return "center" === t
        ? e.x + e.width / 2
        : "right" === t
        ? e.x + e.width - r.right
        : e.x + r.left;
    }
    function ql(e) {
      return jl([], Bl(e));
    }
    function Kl(e, t) {
      var n =
        t && t.dataset && t.dataset.tooltip && t.dataset.tooltip.callbacks;
      return n ? e.override(n) : e;
    }
    var Ql = {
      beforeTitle: Tn,
      title: function (e) {
        if (e.length > 0) {
          var t = e[0],
            n = t.chart.data.labels,
            r = n ? n.length : 0;
          if (this && this.options && "dataset" === this.options.mode)
            return t.dataset.label || "";
          if (t.label) return t.label;
          if (r > 0 && t.dataIndex < r) return n[t.dataIndex];
        }
        return "";
      },
      afterTitle: Tn,
      beforeBody: Tn,
      beforeLabel: Tn,
      label: function (e) {
        if (this && this.options && "dataset" === this.options.mode)
          return e.label + ": " + e.formattedValue || e.formattedValue;
        var t = e.dataset.label || "";
        t && (t += ": ");
        var n = e.formattedValue;
        return Ln(n) || (t += n), t;
      },
      labelColor: function (e) {
        var t = e.chart
          .getDatasetMeta(e.datasetIndex)
          .controller.getStyle(e.dataIndex);
        return {
          borderColor: t.borderColor,
          backgroundColor: t.backgroundColor,
          borderWidth: t.borderWidth,
          borderDash: t.borderDash,
          borderDashOffset: t.borderDashOffset,
          borderRadius: 0,
        };
      },
      labelTextColor: function () {
        return this.options.bodyColor;
      },
      labelPointStyle: function (e) {
        var t = e.chart
          .getDatasetMeta(e.datasetIndex)
          .controller.getStyle(e.dataIndex);
        return { pointStyle: t.pointStyle, rotation: t.rotation };
      },
      afterLabel: Tn,
      afterBody: Tn,
      beforeFooter: Tn,
      footer: Tn,
      afterFooter: Tn,
    };
    function Xl(e, t, n, r) {
      var i = e[t].call(n, r);
      return "undefined" === typeof i ? Ql[t].call(n, r) : i;
    }
    var Gl = (function (e) {
      Yt(n, e);
      var t = qt(n);
      function n(e) {
        var r;
        return (
          Re(this, n),
          ((r = t.call(this)).opacity = 0),
          (r._active = []),
          (r._eventPosition = void 0),
          (r._size = void 0),
          (r._cachedAnimations = void 0),
          (r._tooltipItems = []),
          (r.$animations = void 0),
          (r.$context = void 0),
          (r.chart = e.chart),
          (r.options = e.options),
          (r.dataPoints = void 0),
          (r.title = void 0),
          (r.beforeBody = void 0),
          (r.body = void 0),
          (r.afterBody = void 0),
          (r.footer = void 0),
          (r.xAlign = void 0),
          (r.yAlign = void 0),
          (r.x = void 0),
          (r.y = void 0),
          (r.height = void 0),
          (r.width = void 0),
          (r.caretX = void 0),
          (r.caretY = void 0),
          (r.labelColors = void 0),
          (r.labelPointStyles = void 0),
          (r.labelTextColors = void 0),
          r
        );
      }
      return (
        Ne(n, [
          {
            key: "initialize",
            value: function (e) {
              (this.options = e),
                (this._cachedAnimations = void 0),
                (this.$context = void 0);
            },
          },
          {
            key: "_resolveAnimations",
            value: function () {
              var e = this._cachedAnimations;
              if (e) return e;
              var t = this.chart,
                n = this.options.setContext(this.getContext()),
                r = n.enabled && t.options.animation && n.animations,
                i = new Ma(this.chart, r);
              return (
                r._cacheable && (this._cachedAnimations = Object.freeze(i)), i
              );
            },
          },
          {
            key: "getContext",
            value: function () {
              return (
                this.$context ||
                (this.$context =
                  ((e = this.chart.getContext()),
                  (t = this),
                  (n = this._tooltipItems),
                  Ci(e, { tooltip: t, tooltipItems: n, type: "tooltip" })))
              );
              var e, t, n;
            },
          },
          {
            key: "getTitle",
            value: function (e, t) {
              var n = t.callbacks,
                r = Xl(n, "beforeTitle", this, e),
                i = Xl(n, "title", this, e),
                a = Xl(n, "afterTitle", this, e),
                o = [];
              return (o = jl(o, Bl(r))), (o = jl(o, Bl(i))), (o = jl(o, Bl(a)));
            },
          },
          {
            key: "getBeforeBody",
            value: function (e, t) {
              return ql(Xl(t.callbacks, "beforeBody", this, e));
            },
          },
          {
            key: "getBody",
            value: function (e, t) {
              var n = this,
                r = t.callbacks,
                i = [];
              return (
                Bn(e, function (e) {
                  var t = { before: [], lines: [], after: [] },
                    a = Kl(r, e);
                  jl(t.before, Bl(Xl(a, "beforeLabel", n, e))),
                    jl(t.lines, Xl(a, "label", n, e)),
                    jl(t.after, Bl(Xl(a, "afterLabel", n, e))),
                    i.push(t);
                }),
                i
              );
            },
          },
          {
            key: "getAfterBody",
            value: function (e, t) {
              return ql(Xl(t.callbacks, "afterBody", this, e));
            },
          },
          {
            key: "getFooter",
            value: function (e, t) {
              var n = t.callbacks,
                r = Xl(n, "beforeFooter", this, e),
                i = Xl(n, "footer", this, e),
                a = Xl(n, "afterFooter", this, e),
                o = [];
              return (o = jl(o, Bl(r))), (o = jl(o, Bl(i))), (o = jl(o, Bl(a)));
            },
          },
          {
            key: "_createItems",
            value: function (e) {
              var t,
                n,
                r = this,
                i = this._active,
                a = this.chart.data,
                o = [],
                s = [],
                l = [],
                u = [];
              for (t = 0, n = i.length; t < n; ++t)
                u.push(Vl(this.chart, i[t]));
              return (
                e.filter &&
                  (u = u.filter(function (t, n, r) {
                    return e.filter(t, n, r, a);
                  })),
                e.itemSort &&
                  (u = u.sort(function (t, n) {
                    return e.itemSort(t, n, a);
                  })),
                Bn(u, function (t) {
                  var n = Kl(e.callbacks, t);
                  o.push(Xl(n, "labelColor", r, t)),
                    s.push(Xl(n, "labelPointStyle", r, t)),
                    l.push(Xl(n, "labelTextColor", r, t));
                }),
                (this.labelColors = o),
                (this.labelPointStyles = s),
                (this.labelTextColors = l),
                (this.dataPoints = u),
                u
              );
            },
          },
          {
            key: "update",
            value: function (e, t) {
              var n,
                r = this.options.setContext(this.getContext()),
                i = this._active,
                a = [];
              if (i.length) {
                var o = Il[r.position].call(this, i, this._eventPosition);
                (a = this._createItems(r)),
                  (this.title = this.getTitle(a, r)),
                  (this.beforeBody = this.getBeforeBody(a, r)),
                  (this.body = this.getBody(a, r)),
                  (this.afterBody = this.getAfterBody(a, r)),
                  (this.footer = this.getFooter(a, r));
                var s = (this._size = Wl(this, r)),
                  l = Object.assign({}, o, s),
                  u = Ul(this.chart, r, l),
                  c = $l(r, l, u, this.chart);
                (this.xAlign = u.xAlign),
                  (this.yAlign = u.yAlign),
                  (n = {
                    opacity: 1,
                    x: c.x,
                    y: c.y,
                    width: s.width,
                    height: s.height,
                    caretX: o.x,
                    caretY: o.y,
                  });
              } else 0 !== this.opacity && (n = { opacity: 0 });
              (this._tooltipItems = a),
                (this.$context = void 0),
                n && this._resolveAnimations().update(this, n),
                e &&
                  r.external &&
                  r.external.call(this, {
                    chart: this.chart,
                    tooltip: this,
                    replay: t,
                  });
            },
          },
          {
            key: "drawCaret",
            value: function (e, t, n, r) {
              var i = this.getCaretPosition(e, n, r);
              t.lineTo(i.x1, i.y1), t.lineTo(i.x2, i.y2), t.lineTo(i.x3, i.y3);
            },
          },
          {
            key: "getCaretPosition",
            value: function (e, t, n) {
              var r,
                i,
                a,
                o,
                s,
                l,
                u = this.xAlign,
                c = this.yAlign,
                f = n.caretSize,
                h = wi(n.cornerRadius),
                d = h.topLeft,
                p = h.topRight,
                v = h.bottomLeft,
                g = h.bottomRight,
                m = e.x,
                y = e.y,
                b = t.width,
                x = t.height;
              return (
                "center" === c
                  ? ((s = y + x / 2),
                    "left" === u
                      ? ((i = (r = m) - f), (o = s + f), (l = s - f))
                      : ((i = (r = m + b) + f), (o = s - f), (l = s + f)),
                    (a = r))
                  : ((i =
                      "left" === u
                        ? m + Math.max(d, v) + f
                        : "right" === u
                        ? m + b - Math.max(p, g) - f
                        : this.caretX),
                    "top" === c
                      ? ((s = (o = y) - f), (r = i - f), (a = i + f))
                      : ((s = (o = y + x) + f), (r = i + f), (a = i - f)),
                    (l = o)),
                { x1: r, x2: i, x3: a, y1: o, y2: s, y3: l }
              );
            },
          },
          {
            key: "drawTitle",
            value: function (e, t, n) {
              var r,
                i,
                a,
                o = this.title,
                s = o.length;
              if (s) {
                var l = fa(n.rtl, this.x, this.width);
                for (
                  e.x = Yl(this, n.titleAlign, n),
                    t.textAlign = l.textAlign(n.titleAlign),
                    t.textBaseline = "middle",
                    r = Ei(n.titleFont),
                    i = n.titleSpacing,
                    t.fillStyle = n.titleColor,
                    t.font = r.string,
                    a = 0;
                  a < s;
                  ++a
                )
                  t.fillText(o[a], l.x(e.x), e.y + r.lineHeight / 2),
                    (e.y += r.lineHeight + i),
                    a + 1 === s && (e.y += n.titleMarginBottom - i);
              }
            },
          },
          {
            key: "_drawColorBox",
            value: function (e, t, n, r, i) {
              var a = this.labelColors[n],
                o = this.labelPointStyles[n],
                s = i.boxHeight,
                l = i.boxWidth,
                u = Ei(i.bodyFont),
                c = Yl(this, "left", i),
                f = r.x(c),
                h = s < u.lineHeight ? (u.lineHeight - s) / 2 : 0,
                d = t.y + h;
              if (i.usePointStyle) {
                var p = {
                    radius: Math.min(l, s) / 2,
                    pointStyle: o.pointStyle,
                    rotation: o.rotation,
                    borderWidth: 1,
                  },
                  v = r.leftForLtr(f, l) + l / 2,
                  g = d + s / 2;
                (e.strokeStyle = i.multiKeyBackground),
                  (e.fillStyle = i.multiKeyBackground),
                  oi(e, p, v, g),
                  (e.strokeStyle = a.borderColor),
                  (e.fillStyle = a.backgroundColor),
                  oi(e, p, v, g);
              } else {
                (e.lineWidth = An(a.borderWidth)
                  ? Math.max.apply(Math, Qt(Object.values(a.borderWidth)))
                  : a.borderWidth || 1),
                  (e.strokeStyle = a.borderColor),
                  e.setLineDash(a.borderDash || []),
                  (e.lineDashOffset = a.borderDashOffset || 0);
                var m = r.leftForLtr(f, l),
                  y = r.leftForLtr(r.xPlus(f, 1), l - 2),
                  b = wi(a.borderRadius);
                Object.values(b).some(function (e) {
                  return 0 !== e;
                })
                  ? (e.beginPath(),
                    (e.fillStyle = i.multiKeyBackground),
                    gi(e, { x: m, y: d, w: l, h: s, radius: b }),
                    e.fill(),
                    e.stroke(),
                    (e.fillStyle = a.backgroundColor),
                    e.beginPath(),
                    gi(e, { x: y, y: d + 1, w: l - 2, h: s - 2, radius: b }),
                    e.fill())
                  : ((e.fillStyle = i.multiKeyBackground),
                    e.fillRect(m, d, l, s),
                    e.strokeRect(m, d, l, s),
                    (e.fillStyle = a.backgroundColor),
                    e.fillRect(y, d + 1, l - 2, s - 2));
              }
              e.fillStyle = this.labelTextColors[n];
            },
          },
          {
            key: "drawBody",
            value: function (e, t, n) {
              var r,
                i,
                a,
                o,
                s,
                l,
                u,
                c = this.body,
                f = n.bodySpacing,
                h = n.bodyAlign,
                d = n.displayColors,
                p = n.boxHeight,
                v = n.boxWidth,
                g = n.boxPadding,
                m = Ei(n.bodyFont),
                y = m.lineHeight,
                b = 0,
                x = fa(n.rtl, this.x, this.width),
                k = function (n) {
                  t.fillText(n, x.x(e.x + b), e.y + y / 2), (e.y += y + f);
                },
                _ = x.textAlign(h);
              for (
                t.textAlign = h,
                  t.textBaseline = "middle",
                  t.font = m.string,
                  e.x = Yl(this, _, n),
                  t.fillStyle = n.bodyColor,
                  Bn(this.beforeBody, k),
                  b =
                    d && "right" !== _
                      ? "center" === h
                        ? v / 2 + g
                        : v + 2 + g
                      : 0,
                  o = 0,
                  l = c.length;
                o < l;
                ++o
              ) {
                for (
                  r = c[o],
                    i = this.labelTextColors[o],
                    t.fillStyle = i,
                    Bn(r.before, k),
                    a = r.lines,
                    d &&
                      a.length &&
                      (this._drawColorBox(t, e, o, x, n),
                      (y = Math.max(m.lineHeight, p))),
                    s = 0,
                    u = a.length;
                  s < u;
                  ++s
                )
                  k(a[s]), (y = m.lineHeight);
                Bn(r.after, k);
              }
              (b = 0), (y = m.lineHeight), Bn(this.afterBody, k), (e.y -= f);
            },
          },
          {
            key: "drawFooter",
            value: function (e, t, n) {
              var r,
                i,
                a = this.footer,
                o = a.length;
              if (o) {
                var s = fa(n.rtl, this.x, this.width);
                for (
                  e.x = Yl(this, n.footerAlign, n),
                    e.y += n.footerMarginTop,
                    t.textAlign = s.textAlign(n.footerAlign),
                    t.textBaseline = "middle",
                    r = Ei(n.footerFont),
                    t.fillStyle = n.footerColor,
                    t.font = r.string,
                    i = 0;
                  i < o;
                  ++i
                )
                  t.fillText(a[i], s.x(e.x), e.y + r.lineHeight / 2),
                    (e.y += r.lineHeight + n.footerSpacing);
              }
            },
          },
          {
            key: "drawBackground",
            value: function (e, t, n, r) {
              var i = this.xAlign,
                a = this.yAlign,
                o = e.x,
                s = e.y,
                l = n.width,
                u = n.height,
                c = wi(r.cornerRadius),
                f = c.topLeft,
                h = c.topRight,
                d = c.bottomLeft,
                p = c.bottomRight;
              (t.fillStyle = r.backgroundColor),
                (t.strokeStyle = r.borderColor),
                (t.lineWidth = r.borderWidth),
                t.beginPath(),
                t.moveTo(o + f, s),
                "top" === a && this.drawCaret(e, t, n, r),
                t.lineTo(o + l - h, s),
                t.quadraticCurveTo(o + l, s, o + l, s + h),
                "center" === a && "right" === i && this.drawCaret(e, t, n, r),
                t.lineTo(o + l, s + u - p),
                t.quadraticCurveTo(o + l, s + u, o + l - p, s + u),
                "bottom" === a && this.drawCaret(e, t, n, r),
                t.lineTo(o + d, s + u),
                t.quadraticCurveTo(o, s + u, o, s + u - d),
                "center" === a && "left" === i && this.drawCaret(e, t, n, r),
                t.lineTo(o, s + f),
                t.quadraticCurveTo(o, s, o + f, s),
                t.closePath(),
                t.fill(),
                r.borderWidth > 0 && t.stroke();
            },
          },
          {
            key: "_updateAnimationTarget",
            value: function (e) {
              var t = this.chart,
                n = this.$animations,
                r = n && n.x,
                i = n && n.y;
              if (r || i) {
                var a = Il[e.position].call(
                  this,
                  this._active,
                  this._eventPosition
                );
                if (!a) return;
                var o = (this._size = Wl(this, e)),
                  s = Object.assign({}, a, this._size),
                  l = Ul(t, e, s),
                  u = $l(e, s, l, t);
                (r._to === u.x && i._to === u.y) ||
                  ((this.xAlign = l.xAlign),
                  (this.yAlign = l.yAlign),
                  (this.width = o.width),
                  (this.height = o.height),
                  (this.caretX = a.x),
                  (this.caretY = a.y),
                  this._resolveAnimations().update(this, u));
              }
            },
          },
          {
            key: "_willRender",
            value: function () {
              return !!this.opacity;
            },
          },
          {
            key: "draw",
            value: function (e) {
              var t = this.options.setContext(this.getContext()),
                n = this.opacity;
              if (n) {
                this._updateAnimationTarget(t);
                var r = { width: this.width, height: this.height },
                  i = { x: this.x, y: this.y };
                n = Math.abs(n) < 0.001 ? 0 : n;
                var a = Si(t.padding),
                  o =
                    this.title.length ||
                    this.beforeBody.length ||
                    this.body.length ||
                    this.afterBody.length ||
                    this.footer.length;
                t.enabled &&
                  o &&
                  (e.save(),
                  (e.globalAlpha = n),
                  this.drawBackground(i, e, r, t),
                  ha(e, t.textDirection),
                  (i.y += a.top),
                  this.drawTitle(i, e, t),
                  this.drawBody(i, e, t),
                  this.drawFooter(i, e, t),
                  da(e, t.textDirection),
                  e.restore());
              }
            },
          },
          {
            key: "getActiveElements",
            value: function () {
              return this._active || [];
            },
          },
          {
            key: "setActiveElements",
            value: function (e, t) {
              var n = this,
                r = this._active,
                i = e.map(function (e) {
                  var t = e.datasetIndex,
                    r = e.index,
                    i = n.chart.getDatasetMeta(t);
                  if (!i)
                    throw new Error("Cannot find a dataset at index " + t);
                  return { datasetIndex: t, element: i.data[r], index: r };
                }),
                a = !Vn(r, i),
                o = this._positionChanged(i, t);
              (a || o) &&
                ((this._active = i),
                (this._eventPosition = t),
                (this._ignoreReplayEvents = !0),
                this.update(!0));
            },
          },
          {
            key: "handleEvent",
            value: function (e, t) {
              var n =
                !(arguments.length > 2 && void 0 !== arguments[2]) ||
                arguments[2];
              if (t && this._ignoreReplayEvents) return !1;
              this._ignoreReplayEvents = !1;
              var r = this.options,
                i = this._active || [],
                a = this._getActiveElements(e, i, t, n),
                o = this._positionChanged(a, e),
                s = t || !Vn(a, i) || o;
              return (
                s &&
                  ((this._active = a),
                  (r.enabled || r.external) &&
                    ((this._eventPosition = { x: e.x, y: e.y }),
                    this.update(!0, t))),
                s
              );
            },
          },
          {
            key: "_getActiveElements",
            value: function (e, t, n, r) {
              var i = this.options;
              if ("mouseout" === e.type) return [];
              if (!r) return t;
              var a = this.chart.getElementsAtEventForMode(e, i.mode, i, n);
              return i.reverse && a.reverse(), a;
            },
          },
          {
            key: "_positionChanged",
            value: function (e, t) {
              var n = this.caretX,
                r = this.caretY,
                i = this.options,
                a = Il[i.position].call(this, e, t);
              return !1 !== a && (n !== a.x || r !== a.y);
            },
          },
        ]),
        n
      );
    })($o);
    l(Gl, "positioners", Il);
    var Jl = {
        id: "tooltip",
        _element: Gl,
        positioners: Il,
        afterInit: function (e, t, n) {
          n && (e.tooltip = new Gl({ chart: e, options: n }));
        },
        beforeUpdate: function (e, t, n) {
          e.tooltip && e.tooltip.initialize(n);
        },
        reset: function (e, t, n) {
          e.tooltip && e.tooltip.initialize(n);
        },
        afterDraw: function (e) {
          var t = e.tooltip;
          if (t && t._willRender()) {
            var n = { tooltip: t };
            if (
              !1 ===
              e.notifyPlugins(
                "beforeTooltipDraw",
                c(c({}, n), {}, { cancelable: !0 })
              )
            )
              return;
            t.draw(e.ctx), e.notifyPlugins("afterTooltipDraw", n);
          }
        },
        afterEvent: function (e, t) {
          if (e.tooltip) {
            var n = t.replay;
            e.tooltip.handleEvent(t.event, n, t.inChartArea) &&
              (t.changed = !0);
          }
        },
        defaults: {
          enabled: !0,
          external: null,
          position: "average",
          backgroundColor: "rgba(0,0,0,0.8)",
          titleColor: "#fff",
          titleFont: { weight: "bold" },
          titleSpacing: 2,
          titleMarginBottom: 6,
          titleAlign: "left",
          bodyColor: "#fff",
          bodySpacing: 2,
          bodyFont: {},
          bodyAlign: "left",
          footerColor: "#fff",
          footerSpacing: 2,
          footerMarginTop: 6,
          footerFont: { weight: "bold" },
          footerAlign: "left",
          padding: 6,
          caretPadding: 2,
          caretSize: 5,
          cornerRadius: 6,
          boxHeight: function (e, t) {
            return t.bodyFont.size;
          },
          boxWidth: function (e, t) {
            return t.bodyFont.size;
          },
          multiKeyBackground: "#fff",
          displayColors: !0,
          boxPadding: 0,
          borderColor: "rgba(0,0,0,0)",
          borderWidth: 0,
          animation: { duration: 400, easing: "easeOutQuart" },
          animations: {
            numbers: {
              type: "number",
              properties: ["x", "y", "width", "height", "caretX", "caretY"],
            },
            opacity: { easing: "linear", duration: 200 },
          },
          callbacks: Ql,
        },
        defaultRoutes: {
          bodyFont: "font",
          footerFont: "font",
          titleFont: "font",
        },
        descriptors: {
          _scriptable: function (e) {
            return "filter" !== e && "itemSort" !== e && "external" !== e;
          },
          _indexable: !1,
          callbacks: { _scriptable: !1, _indexable: !1 },
          animation: { _fallback: !1 },
          animations: { _fallback: "animation" },
        },
        additionalOptionScopes: ["interaction"],
      },
      Zl = Object.freeze({
        __proto__: null,
        Colors: ul,
        Decimation: hl,
        Filler: Ol,
        Legend: Rl,
        SubTitle: Fl,
        Title: Nl,
        Tooltip: Jl,
      });
    function eu(e, t, n, r) {
      var i = e.indexOf(t);
      return -1 === i
        ? (function (e, t, n, r) {
            return (
              "string" === typeof t
                ? ((n = e.push(t) - 1), r.unshift({ index: n, label: t }))
                : isNaN(t) && (n = null),
              n
            );
          })(e, t, n, r)
        : i !== e.lastIndexOf(t)
        ? n
        : i;
    }
    function tu(e) {
      var t = this.getLabels();
      return e >= 0 && e < t.length ? t[e] : e;
    }
    var nu = (function (e) {
      Yt(n, e);
      var t = qt(n);
      function n(e) {
        var r;
        return (
          Re(this, n),
          ((r = t.call(this, e))._startValue = void 0),
          (r._valueRange = 0),
          (r._addedLabels = []),
          r
        );
      }
      return (
        Ne(n, [
          {
            key: "init",
            value: function (e) {
              var t = this._addedLabels;
              if (t.length) {
                var r,
                  i = this.getLabels(),
                  a = Kt(t);
                try {
                  for (a.s(); !(r = a.n()).done; ) {
                    var o = r.value,
                      s = o.index,
                      l = o.label;
                    i[s] === l && i.splice(s, 1);
                  }
                } catch (u) {
                  a.e(u);
                } finally {
                  a.f();
                }
                this._addedLabels = [];
              }
              Ut(Ht(n.prototype), "init", this).call(this, e);
            },
          },
          {
            key: "parse",
            value: function (e, t) {
              if (Ln(e)) return null;
              var n = this.getLabels();
              return (function (e, t) {
                return null === e ? null : wr(Math.round(e), 0, t);
              })(
                (t =
                  isFinite(t) && n[t] === e
                    ? t
                    : eu(n, e, Fn(t, e), this._addedLabels)),
                n.length - 1
              );
            },
          },
          {
            key: "determineDataLimits",
            value: function () {
              var e = this.getUserBounds(),
                t = e.minDefined,
                n = e.maxDefined,
                r = this.getMinMax(!0),
                i = r.min,
                a = r.max;
              "ticks" === this.options.bounds &&
                (t || (i = 0), n || (a = this.getLabels().length - 1)),
                (this.min = i),
                (this.max = a);
            },
          },
          {
            key: "buildTicks",
            value: function () {
              var e = this.min,
                t = this.max,
                n = this.options.offset,
                r = [],
                i = this.getLabels();
              (i = 0 === e && t === i.length - 1 ? i : i.slice(e, t + 1)),
                (this._valueRange = Math.max(i.length - (n ? 0 : 1), 1)),
                (this._startValue = this.min - (n ? 0.5 : 0));
              for (var a = e; a <= t; a++) r.push({ value: a });
              return r;
            },
          },
          {
            key: "getLabelForValue",
            value: function (e) {
              return tu.call(this, e);
            },
          },
          {
            key: "configure",
            value: function () {
              Ut(Ht(n.prototype), "configure", this).call(this),
                this.isHorizontal() ||
                  (this._reversePixels = !this._reversePixels);
            },
          },
          {
            key: "getPixelForValue",
            value: function (e) {
              return (
                "number" !== typeof e && (e = this.parse(e)),
                null === e
                  ? NaN
                  : this.getPixelForDecimal(
                      (e - this._startValue) / this._valueRange
                    )
              );
            },
          },
          {
            key: "getPixelForTick",
            value: function (e) {
              var t = this.ticks;
              return e < 0 || e > t.length - 1
                ? null
                : this.getPixelForValue(t[e].value);
            },
          },
          {
            key: "getValueForPixel",
            value: function (e) {
              return Math.round(
                this._startValue + this.getDecimalForPixel(e) * this._valueRange
              );
            },
          },
          {
            key: "getBasePixel",
            value: function () {
              return this.bottom;
            },
          },
        ]),
        n
      );
    })(ts);
    function ru(e, t) {
      var n,
        r,
        i,
        a,
        o = [],
        s = e.bounds,
        l = e.step,
        u = e.min,
        c = e.max,
        f = e.precision,
        h = e.count,
        d = e.maxTicks,
        p = e.maxDigits,
        v = e.includeBounds,
        g = l || 1,
        m = d - 1,
        y = t.min,
        b = t.max,
        x = !Ln(u),
        k = !Ln(c),
        _ = !Ln(h),
        w = (b - y) / (p + 1),
        S = hr((b - y) / m / g) * g;
      if (S < 1e-14 && !x && !k) return [{ value: y }, { value: b }];
      (a = Math.ceil(b / S) - Math.floor(y / S)) > m &&
        (S = hr((a * S) / m / g) * g),
        Ln(f) || ((n = Math.pow(10, f)), (S = Math.ceil(S * n) / n)),
        "ticks" === s
          ? ((r = Math.floor(y / S) * S), (i = Math.ceil(b / S) * S))
          : ((r = y), (i = b)),
        x &&
        k &&
        l &&
        (function (e, t) {
          var n = Math.round(e);
          return n - t <= e && n + t >= e;
        })((c - u) / l, S / 1e3)
          ? ((S = (c - u) / (a = Math.round(Math.min((c - u) / S, d)))),
            (r = u),
            (i = c))
          : _
          ? (S = ((i = k ? c : i) - (r = x ? u : r)) / (a = h - 1))
          : (a = fr((a = (i - r) / S), Math.round(a), S / 1e3)
              ? Math.round(a)
              : Math.ceil(a));
      var E = Math.max(mr(S), mr(r));
      (n = Math.pow(10, Ln(f) ? E : f)),
        (r = Math.round(r * n) / n),
        (i = Math.round(i * n) / n);
      var M = 0;
      for (
        x &&
        (v && r !== u
          ? (o.push({ value: u }),
            r < u && M++,
            fr(Math.round((r + M * S) * n) / n, u, iu(u, w, e)) && M++)
          : r < u && M++);
        M < a;
        ++M
      ) {
        var C = Math.round((r + M * S) * n) / n;
        if (k && C > c) break;
        o.push({ value: C });
      }
      return (
        k && v && i !== c
          ? o.length && fr(o[o.length - 1].value, c, iu(c, w, e))
            ? (o[o.length - 1].value = c)
            : o.push({ value: c })
          : (k && i !== c) || o.push({ value: i }),
        o
      );
    }
    function iu(e, t, n) {
      var r = n.horizontal,
        i = vr(n.minRotation),
        a = (r ? Math.sin(i) : Math.cos(i)) || 0.001,
        o = 0.75 * t * ("" + e).length;
      return Math.min(t / a, o);
    }
    l(nu, "id", "category"), l(nu, "defaults", { ticks: { callback: tu } });
    var au = (function (e) {
        Yt(n, e);
        var t = qt(n);
        function n(e) {
          var r;
          return (
            Re(this, n),
            ((r = t.call(this, e)).start = void 0),
            (r.end = void 0),
            (r._startValue = void 0),
            (r._endValue = void 0),
            (r._valueRange = 0),
            r
          );
        }
        return (
          Ne(n, [
            {
              key: "parse",
              value: function (e, t) {
                return Ln(e) ||
                  (("number" === typeof e || e instanceof Number) &&
                    !isFinite(+e))
                  ? null
                  : +e;
              },
            },
            {
              key: "handleTickRangeOptions",
              value: function () {
                var e = this.options.beginAtZero,
                  t = this.getUserBounds(),
                  n = t.minDefined,
                  r = t.maxDefined,
                  i = this.min,
                  a = this.max,
                  o = function (e) {
                    return (i = n ? i : e);
                  },
                  s = function (e) {
                    return (a = r ? a : e);
                  };
                if (e) {
                  var l = cr(i),
                    u = cr(a);
                  l < 0 && u < 0 ? s(0) : l > 0 && u > 0 && o(0);
                }
                if (i === a) {
                  var c = 0 === a ? 1 : Math.abs(0.05 * a);
                  s(a + c), e || o(i - c);
                }
                (this.min = i), (this.max = a);
              },
            },
            {
              key: "getTickLimit",
              value: function () {
                var e,
                  t = this.options.ticks,
                  n = t.maxTicksLimit,
                  r = t.stepSize;
                return (
                  r
                    ? (e =
                        Math.ceil(this.max / r) -
                        Math.floor(this.min / r) +
                        1) > 1e3 &&
                      (console.warn(
                        "scales."
                          .concat(this.id, ".ticks.stepSize: ")
                          .concat(r, " would result generating up to ")
                          .concat(e, " ticks. Limiting to 1000.")
                      ),
                      (e = 1e3))
                    : ((e = this.computeTickLimit()), (n = n || 11)),
                  n && (e = Math.min(n, e)),
                  e
                );
              },
            },
            {
              key: "computeTickLimit",
              value: function () {
                return Number.POSITIVE_INFINITY;
              },
            },
            {
              key: "buildTicks",
              value: function () {
                var e = this.options,
                  t = e.ticks,
                  n = this.getTickLimit(),
                  r = ru(
                    {
                      maxTicks: (n = Math.max(2, n)),
                      bounds: e.bounds,
                      min: e.min,
                      max: e.max,
                      precision: t.precision,
                      step: t.stepSize,
                      count: t.count,
                      maxDigits: this._maxDigits(),
                      horizontal: this.isHorizontal(),
                      minRotation: t.minRotation || 0,
                      includeBounds: !1 !== t.includeBounds,
                    },
                    this._range || this
                  );
                return (
                  "ticks" === e.bounds && pr(r, this, "value"),
                  e.reverse
                    ? (r.reverse(),
                      (this.start = this.max),
                      (this.end = this.min))
                    : ((this.start = this.min), (this.end = this.max)),
                  r
                );
              },
            },
            {
              key: "configure",
              value: function () {
                var e = this.ticks,
                  t = this.min,
                  r = this.max;
                if (
                  (Ut(Ht(n.prototype), "configure", this).call(this),
                  this.options.offset && e.length)
                ) {
                  var i = (r - t) / Math.max(e.length - 1, 1) / 2;
                  (t -= i), (r += i);
                }
                (this._startValue = t),
                  (this._endValue = r),
                  (this._valueRange = r - t);
              },
            },
            {
              key: "getLabelForValue",
              value: function (e) {
                return qr(
                  e,
                  this.chart.options.locale,
                  this.options.ticks.format
                );
              },
            },
          ]),
          n
        );
      })(ts),
      ou = (function (e) {
        Yt(n, e);
        var t = qt(n);
        function n() {
          return Re(this, n), t.apply(this, arguments);
        }
        return (
          Ne(n, [
            {
              key: "determineDataLimits",
              value: function () {
                var e = this.getMinMax(!0),
                  t = e.min,
                  n = e.max;
                (this.min = Nn(t) ? t : 0),
                  (this.max = Nn(n) ? n : 1),
                  this.handleTickRangeOptions();
              },
            },
            {
              key: "computeTickLimit",
              value: function () {
                var e = this.isHorizontal(),
                  t = e ? this.width : this.height,
                  n = vr(this.options.ticks.minRotation),
                  r = (e ? Math.sin(n) : Math.cos(n)) || 0.001,
                  i = this._resolveTickFontOptions(0);
                return Math.ceil(t / Math.min(40, i.lineHeight / r));
              },
            },
            {
              key: "getPixelForValue",
              value: function (e) {
                return null === e
                  ? NaN
                  : this.getPixelForDecimal(
                      (e - this._startValue) / this._valueRange
                    );
              },
            },
            {
              key: "getValueForPixel",
              value: function (e) {
                return (
                  this._startValue +
                  this.getDecimalForPixel(e) * this._valueRange
                );
              },
            },
          ]),
          n
        );
      })(au);
    l(ou, "id", "linear"),
      l(ou, "defaults", { ticks: { callback: Qr.formatters.numeric } });
    var su = function (e) {
        return Math.floor(ur(e));
      },
      lu = function (e, t) {
        return Math.pow(10, su(e) + t);
      };
    function uu(e) {
      return 1 === e / Math.pow(10, su(e));
    }
    function cu(e, t, n) {
      var r = Math.pow(10, n),
        i = Math.floor(e / r);
      return Math.ceil(t / r) - i;
    }
    function fu(e, t) {
      var n = t.min,
        r = t.max;
      n = zn(e.min, n);
      for (
        var i = [],
          a = su(n),
          o = (function (e, t) {
            for (var n = su(t - e); cu(e, t, n) > 10; ) n++;
            for (; cu(e, t, n) < 10; ) n--;
            return Math.min(n, su(e));
          })(n, r),
          s = o < 0 ? Math.pow(10, Math.abs(o)) : 1,
          l = Math.pow(10, o),
          u = a > o ? Math.pow(10, a) : 0,
          c = Math.round((n - u) * s) / s,
          f = Math.floor((n - u) / l / 10) * l * 10,
          h = Math.floor((c - f) / Math.pow(10, o)),
          d = zn(e.min, Math.round((u + f + h * Math.pow(10, o)) * s) / s);
        d < r;

      )
        i.push({ value: d, major: uu(d), significand: h }),
          h >= 10 ? (h = h < 15 ? 15 : 20) : h++,
          h >= 20 && ((h = 2), (s = ++o >= 0 ? 1 : s)),
          (d = Math.round((u + f + h * Math.pow(10, o)) * s) / s);
      var p = zn(e.max, d);
      return i.push({ value: p, major: uu(p), significand: h }), i;
    }
    var hu = (function (e) {
      Yt(n, e);
      var t = qt(n);
      function n(e) {
        var r;
        return (
          Re(this, n),
          ((r = t.call(this, e)).start = void 0),
          (r.end = void 0),
          (r._startValue = void 0),
          (r._valueRange = 0),
          r
        );
      }
      return (
        Ne(n, [
          {
            key: "parse",
            value: function (e, t) {
              var n = au.prototype.parse.apply(this, [e, t]);
              if (0 !== n) return Nn(n) && n > 0 ? n : null;
              this._zero = !0;
            },
          },
          {
            key: "determineDataLimits",
            value: function () {
              var e = this.getMinMax(!0),
                t = e.min,
                n = e.max;
              (this.min = Nn(t) ? Math.max(0, t) : null),
                (this.max = Nn(n) ? Math.max(0, n) : null),
                this.options.beginAtZero && (this._zero = !0),
                this._zero &&
                  this.min !== this._suggestedMin &&
                  !Nn(this._userMin) &&
                  (this.min =
                    t === lu(this.min, 0) ? lu(this.min, -1) : lu(this.min, 0)),
                this.handleTickRangeOptions();
            },
          },
          {
            key: "handleTickRangeOptions",
            value: function () {
              var e = this.getUserBounds(),
                t = e.minDefined,
                n = e.maxDefined,
                r = this.min,
                i = this.max,
                a = function (e) {
                  return (r = t ? r : e);
                },
                o = function (e) {
                  return (i = n ? i : e);
                };
              r === i && (r <= 0 ? (a(1), o(10)) : (a(lu(r, -1)), o(lu(i, 1)))),
                r <= 0 && a(lu(i, -1)),
                i <= 0 && o(lu(r, 1)),
                (this.min = r),
                (this.max = i);
            },
          },
          {
            key: "buildTicks",
            value: function () {
              var e = this.options,
                t = fu({ min: this._userMin, max: this._userMax }, this);
              return (
                "ticks" === e.bounds && pr(t, this, "value"),
                e.reverse
                  ? (t.reverse(),
                    (this.start = this.max),
                    (this.end = this.min))
                  : ((this.start = this.min), (this.end = this.max)),
                t
              );
            },
          },
          {
            key: "getLabelForValue",
            value: function (e) {
              return void 0 === e
                ? "0"
                : qr(e, this.chart.options.locale, this.options.ticks.format);
            },
          },
          {
            key: "configure",
            value: function () {
              var e = this.min;
              Ut(Ht(n.prototype), "configure", this).call(this),
                (this._startValue = ur(e)),
                (this._valueRange = ur(this.max) - ur(e));
            },
          },
          {
            key: "getPixelForValue",
            value: function (e) {
              return (
                (void 0 !== e && 0 !== e) || (e = this.min),
                null === e || isNaN(e)
                  ? NaN
                  : this.getPixelForDecimal(
                      e === this.min
                        ? 0
                        : (ur(e) - this._startValue) / this._valueRange
                    )
              );
            },
          },
          {
            key: "getValueForPixel",
            value: function (e) {
              var t = this.getDecimalForPixel(e);
              return Math.pow(10, this._startValue + t * this._valueRange);
            },
          },
        ]),
        n
      );
    })(ts);
    function du(e) {
      var t = e.ticks;
      if (t.display && e.display) {
        var n = Si(t.backdropPadding);
        return Fn(t.font && t.font.size, ti.font.size) + n.height;
      }
      return 0;
    }
    function pu(e, t, n, r, i) {
      return e === r || e === i
        ? { start: t - n / 2, end: t + n / 2 }
        : e < r || e > i
        ? { start: t - n, end: t }
        : { start: t, end: t + n };
    }
    function vu(e) {
      for (
        var t,
          n,
          r,
          i = {
            l: e.left + e._padding.left,
            r: e.right - e._padding.right,
            t: e.top + e._padding.top,
            b: e.bottom - e._padding.bottom,
          },
          a = Object.assign({}, i),
          o = [],
          s = [],
          l = e._pointLabels.length,
          u = e.options.pointLabels,
          c = u.centerPointLabels ? tr / l : 0,
          f = 0;
        f < l;
        f++
      ) {
        var h = u.setContext(e.getPointLabelContext(f));
        s[f] = h.padding;
        var d = e.getPointPosition(f, e.drawingArea + s[f], c),
          p = Ei(h.font),
          v =
            ((t = e.ctx),
            (n = p),
            (r = Rn((r = e._pointLabels[f])) ? r : [r]),
            { w: ri(t, n.string, r), h: r.length * n.lineHeight });
        o[f] = v;
        var g = kr(e.getIndexAngle(f) + c),
          m = Math.round(gr(g));
        gu(a, i, g, pu(m, d.x, v.w, 0, 180), pu(m, d.y, v.h, 90, 270));
      }
      e.setCenterPoint(i.l - a.l, a.r - i.r, i.t - a.t, a.b - i.b),
        (e._pointLabelItems = (function (e, t, n) {
          for (
            var r,
              i = [],
              a = e._pointLabels.length,
              o = e.options,
              s = o.pointLabels,
              l = s.centerPointLabels,
              u = s.display,
              c = { extra: du(o) / 2, additionalAngle: l ? tr / a : 0 },
              f = 0;
            f < a;
            f++
          ) {
            (c.padding = n[f]), (c.size = t[f]);
            var h = mu(e, f, c);
            i.push(h),
              "auto" === u && ((h.visible = yu(h, r)), h.visible && (r = h));
          }
          return i;
        })(e, o, s));
    }
    function gu(e, t, n, r, i) {
      var a = Math.abs(Math.sin(n)),
        o = Math.abs(Math.cos(n)),
        s = 0,
        l = 0;
      r.start < t.l
        ? ((s = (t.l - r.start) / a), (e.l = Math.min(e.l, t.l - s)))
        : r.end > t.r &&
          ((s = (r.end - t.r) / a), (e.r = Math.max(e.r, t.r + s))),
        i.start < t.t
          ? ((l = (t.t - i.start) / o), (e.t = Math.min(e.t, t.t - l)))
          : i.end > t.b &&
            ((l = (i.end - t.b) / o), (e.b = Math.max(e.b, t.b + l)));
    }
    function mu(e, t, n) {
      var r = e.drawingArea,
        i = n.extra,
        a = n.additionalAngle,
        o = n.padding,
        s = n.size,
        l = e.getPointPosition(t, r + i + o, a),
        u = Math.round(gr(kr(l.angle + or))),
        c = (function (e, t, n) {
          90 === n || 270 === n
            ? (e -= t / 2)
            : (n > 270 || n < 90) && (e -= t);
          return e;
        })(l.y, s.h, u),
        f = (function (e) {
          if (0 === e || 180 === e) return "center";
          if (e < 180) return "left";
          return "right";
        })(u),
        h = (function (e, t, n) {
          "right" === n ? (e -= t) : "center" === n && (e -= t / 2);
          return e;
        })(l.x, s.w, f);
      return {
        visible: !0,
        x: l.x,
        y: c,
        textAlign: f,
        left: h,
        top: c,
        right: h + s.w,
        bottom: c + s.h,
      };
    }
    function yu(e, t) {
      if (!t) return !0;
      var n = e.left,
        r = e.top,
        i = e.right,
        a = e.bottom;
      return !(
        li({ x: n, y: r }, t) ||
        li({ x: n, y: a }, t) ||
        li({ x: i, y: r }, t) ||
        li({ x: i, y: a }, t)
      );
    }
    function bu(e, t, n) {
      var r = n.left,
        i = n.top,
        a = n.right,
        o = n.bottom,
        s = t.backdropColor;
      if (!Ln(s)) {
        var l = wi(t.borderRadius),
          u = Si(t.backdropPadding);
        e.fillStyle = s;
        var c = r - u.left,
          f = i - u.top,
          h = a - r + u.width,
          d = o - i + u.height;
        Object.values(l).some(function (e) {
          return 0 !== e;
        })
          ? (e.beginPath(),
            gi(e, { x: c, y: f, w: h, h: d, radius: l }),
            e.fill())
          : e.fillRect(c, f, h, d);
      }
    }
    function xu(e, t, n, r) {
      var i = e.ctx;
      if (n) i.arc(e.xCenter, e.yCenter, t, 0, nr);
      else {
        var a = e.getPointPosition(0, t);
        i.moveTo(a.x, a.y);
        for (var o = 1; o < r; o++)
          (a = e.getPointPosition(o, t)), i.lineTo(a.x, a.y);
      }
    }
    l(hu, "id", "logarithmic"),
      l(hu, "defaults", {
        ticks: { callback: Qr.formatters.logarithmic, major: { enabled: !0 } },
      });
    var ku = (function (e) {
      Yt(n, e);
      var t = qt(n);
      function n(e) {
        var r;
        return (
          Re(this, n),
          ((r = t.call(this, e)).xCenter = void 0),
          (r.yCenter = void 0),
          (r.drawingArea = void 0),
          (r._pointLabels = []),
          (r._pointLabelItems = []),
          r
        );
      }
      return (
        Ne(n, [
          {
            key: "setDimensions",
            value: function () {
              var e = (this._padding = Si(du(this.options) / 2)),
                t = (this.width = this.maxWidth - e.width),
                n = (this.height = this.maxHeight - e.height);
              (this.xCenter = Math.floor(this.left + t / 2 + e.left)),
                (this.yCenter = Math.floor(this.top + n / 2 + e.top)),
                (this.drawingArea = Math.floor(Math.min(t, n) / 2));
            },
          },
          {
            key: "determineDataLimits",
            value: function () {
              var e = this.getMinMax(!1),
                t = e.min,
                n = e.max;
              (this.min = Nn(t) && !isNaN(t) ? t : 0),
                (this.max = Nn(n) && !isNaN(n) ? n : 0),
                this.handleTickRangeOptions();
            },
          },
          {
            key: "computeTickLimit",
            value: function () {
              return Math.ceil(this.drawingArea / du(this.options));
            },
          },
          {
            key: "generateTickLabels",
            value: function (e) {
              var t = this;
              au.prototype.generateTickLabels.call(this, e),
                (this._pointLabels = this.getLabels()
                  .map(function (e, n) {
                    var r = jn(t.options.pointLabels.callback, [e, n], t);
                    return r || 0 === r ? r : "";
                  })
                  .filter(function (e, n) {
                    return t.chart.getDataVisibility(n);
                  }));
            },
          },
          {
            key: "fit",
            value: function () {
              var e = this.options;
              e.display && e.pointLabels.display
                ? vu(this)
                : this.setCenterPoint(0, 0, 0, 0);
            },
          },
          {
            key: "setCenterPoint",
            value: function (e, t, n, r) {
              (this.xCenter += Math.floor((e - t) / 2)),
                (this.yCenter += Math.floor((n - r) / 2)),
                (this.drawingArea -= Math.min(
                  this.drawingArea / 2,
                  Math.max(e, t, n, r)
                ));
            },
          },
          {
            key: "getIndexAngle",
            value: function (e) {
              return kr(
                e * (nr / (this._pointLabels.length || 1)) +
                  vr(this.options.startAngle || 0)
              );
            },
          },
          {
            key: "getDistanceFromCenterForValue",
            value: function (e) {
              if (Ln(e)) return NaN;
              var t = this.drawingArea / (this.max - this.min);
              return this.options.reverse
                ? (this.max - e) * t
                : (e - this.min) * t;
            },
          },
          {
            key: "getValueForDistanceFromCenter",
            value: function (e) {
              if (Ln(e)) return NaN;
              var t = e / (this.drawingArea / (this.max - this.min));
              return this.options.reverse ? this.max - t : this.min + t;
            },
          },
          {
            key: "getPointLabelContext",
            value: function (e) {
              var t = this._pointLabels || [];
              if (e >= 0 && e < t.length) {
                var n = t[e];
                return (function (e, t, n) {
                  return Ci(e, { label: n, index: t, type: "pointLabel" });
                })(this.getContext(), e, n);
              }
            },
          },
          {
            key: "getPointPosition",
            value: function (e, t) {
              var n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : 0,
                r = this.getIndexAngle(e) - or + n;
              return {
                x: Math.cos(r) * t + this.xCenter,
                y: Math.sin(r) * t + this.yCenter,
                angle: r,
              };
            },
          },
          {
            key: "getPointPositionForValue",
            value: function (e, t) {
              return this.getPointPosition(
                e,
                this.getDistanceFromCenterForValue(t)
              );
            },
          },
          {
            key: "getBasePosition",
            value: function (e) {
              return this.getPointPositionForValue(e || 0, this.getBaseValue());
            },
          },
          {
            key: "getPointLabelPosition",
            value: function (e) {
              var t = this._pointLabelItems[e];
              return {
                left: t.left,
                top: t.top,
                right: t.right,
                bottom: t.bottom,
              };
            },
          },
          {
            key: "drawBackground",
            value: function () {
              var e = this.options,
                t = e.backgroundColor,
                n = e.grid.circular;
              if (t) {
                var r = this.ctx;
                r.save(),
                  r.beginPath(),
                  xu(
                    this,
                    this.getDistanceFromCenterForValue(this._endValue),
                    n,
                    this._pointLabels.length
                  ),
                  r.closePath(),
                  (r.fillStyle = t),
                  r.fill(),
                  r.restore();
              }
            },
          },
          {
            key: "drawGrid",
            value: function () {
              var e,
                t,
                n,
                r = this,
                i = this.ctx,
                a = this.options,
                o = a.angleLines,
                s = a.grid,
                l = a.border,
                u = this._pointLabels.length;
              if (
                (a.pointLabels.display &&
                  (function (e, t) {
                    for (
                      var n = e.ctx, r = e.options.pointLabels, i = t - 1;
                      i >= 0;
                      i--
                    ) {
                      var a = e._pointLabelItems[i];
                      if (a.visible) {
                        var o = r.setContext(e.getPointLabelContext(i));
                        bu(n, o, a);
                        var s = Ei(o.font),
                          l = a.x,
                          u = a.y,
                          c = a.textAlign;
                        vi(n, e._pointLabels[i], l, u + s.lineHeight / 2, s, {
                          color: o.color,
                          textAlign: c,
                          textBaseline: "middle",
                        });
                      }
                    }
                  })(this, u),
                s.display &&
                  this.ticks.forEach(function (e, n) {
                    if (0 !== n) {
                      t = r.getDistanceFromCenterForValue(e.value);
                      var i = r.getContext(n),
                        a = s.setContext(i),
                        o = l.setContext(i);
                      !(function (e, t, n, r, i) {
                        var a = e.ctx,
                          o = t.circular,
                          s = t.color,
                          l = t.lineWidth;
                        (!o && !r) ||
                          !s ||
                          !l ||
                          n < 0 ||
                          (a.save(),
                          (a.strokeStyle = s),
                          (a.lineWidth = l),
                          a.setLineDash(i.dash),
                          (a.lineDashOffset = i.dashOffset),
                          a.beginPath(),
                          xu(e, n, o, r),
                          a.closePath(),
                          a.stroke(),
                          a.restore());
                      })(r, a, t, u, o);
                    }
                  }),
                o.display)
              ) {
                for (i.save(), e = u - 1; e >= 0; e--) {
                  var c = o.setContext(this.getPointLabelContext(e)),
                    f = c.color,
                    h = c.lineWidth;
                  h &&
                    f &&
                    ((i.lineWidth = h),
                    (i.strokeStyle = f),
                    i.setLineDash(c.borderDash),
                    (i.lineDashOffset = c.borderDashOffset),
                    (t = this.getDistanceFromCenterForValue(
                      a.ticks.reverse ? this.min : this.max
                    )),
                    (n = this.getPointPosition(e, t)),
                    i.beginPath(),
                    i.moveTo(this.xCenter, this.yCenter),
                    i.lineTo(n.x, n.y),
                    i.stroke());
                }
                i.restore();
              }
            },
          },
          { key: "drawBorder", value: function () {} },
          {
            key: "drawLabels",
            value: function () {
              var e = this,
                t = this.ctx,
                n = this.options,
                r = n.ticks;
              if (r.display) {
                var i,
                  a,
                  o = this.getIndexAngle(0);
                t.save(),
                  t.translate(this.xCenter, this.yCenter),
                  t.rotate(o),
                  (t.textAlign = "center"),
                  (t.textBaseline = "middle"),
                  this.ticks.forEach(function (o, s) {
                    if (0 !== s || n.reverse) {
                      var l = r.setContext(e.getContext(s)),
                        u = Ei(l.font);
                      if (
                        ((i = e.getDistanceFromCenterForValue(
                          e.ticks[s].value
                        )),
                        l.showLabelBackdrop)
                      ) {
                        (t.font = u.string),
                          (a = t.measureText(o.label).width),
                          (t.fillStyle = l.backdropColor);
                        var c = Si(l.backdropPadding);
                        t.fillRect(
                          -a / 2 - c.left,
                          -i - u.size / 2 - c.top,
                          a + c.width,
                          u.size + c.height
                        );
                      }
                      vi(t, o.label, 0, -i, u, { color: l.color });
                    }
                  }),
                  t.restore();
              }
            },
          },
          { key: "drawTitle", value: function () {} },
        ]),
        n
      );
    })(au);
    l(ku, "id", "radialLinear"),
      l(ku, "defaults", {
        display: !0,
        animate: !0,
        position: "chartArea",
        angleLines: {
          display: !0,
          lineWidth: 1,
          borderDash: [],
          borderDashOffset: 0,
        },
        grid: { circular: !1 },
        startAngle: 0,
        ticks: { showLabelBackdrop: !0, callback: Qr.formatters.numeric },
        pointLabels: {
          backdropColor: void 0,
          backdropPadding: 2,
          display: !0,
          font: { size: 10 },
          callback: function (e) {
            return e;
          },
          padding: 5,
          centerPointLabels: !1,
        },
      }),
      l(ku, "defaultRoutes", {
        "angleLines.color": "borderColor",
        "pointLabels.color": "color",
        "ticks.color": "color",
      }),
      l(ku, "descriptors", { angleLines: { _fallback: "grid" } });
    var _u = {
        millisecond: { common: !0, size: 1, steps: 1e3 },
        second: { common: !0, size: 1e3, steps: 60 },
        minute: { common: !0, size: 6e4, steps: 60 },
        hour: { common: !0, size: 36e5, steps: 24 },
        day: { common: !0, size: 864e5, steps: 30 },
        week: { common: !1, size: 6048e5, steps: 4 },
        month: { common: !0, size: 2628e6, steps: 12 },
        quarter: { common: !1, size: 7884e6, steps: 4 },
        year: { common: !0, size: 3154e7 },
      },
      wu = Object.keys(_u);
    function Su(e, t) {
      return e - t;
    }
    function Eu(e, t) {
      if (Ln(t)) return null;
      var n = e._adapter,
        r = e._parseOpts,
        i = r.parser,
        a = r.round,
        o = r.isoWeekday,
        s = t;
      return (
        "function" === typeof i && (s = i(s)),
        Nn(s) || (s = "string" === typeof i ? n.parse(s, i) : n.parse(s)),
        null === s
          ? null
          : (a &&
              (s =
                "week" !== a || (!dr(o) && !0 !== o)
                  ? n.startOf(s, a)
                  : n.startOf(s, "isoWeek", o)),
            +s)
      );
    }
    function Mu(e, t, n, r) {
      for (var i = wu.length, a = wu.indexOf(e); a < i - 1; ++a) {
        var o = _u[wu[a]],
          s = o.steps ? o.steps : Number.MAX_SAFE_INTEGER;
        if (o.common && Math.ceil((n - t) / (s * o.size)) <= r) return wu[a];
      }
      return wu[i - 1];
    }
    function Cu(e, t, n) {
      if (n) {
        if (n.length) {
          var r = Er(n, t),
            i = r.lo,
            a = r.hi;
          e[n[i] >= t ? n[i] : n[a]] = !0;
        }
      } else e[t] = !0;
    }
    function Pu(e, t, n) {
      var r,
        i,
        a = [],
        o = {},
        s = t.length;
      for (r = 0; r < s; ++r)
        (o[(i = t[r])] = r), a.push({ value: i, major: !1 });
      return 0 !== s && n
        ? (function (e, t, n, r) {
            var i,
              a,
              o = e._adapter,
              s = +o.startOf(t[0].value, r),
              l = t[t.length - 1].value;
            for (i = s; i <= l; i = +o.add(i, 1, r))
              (a = n[i]) >= 0 && (t[a].major = !0);
            return t;
          })(e, a, o, n)
        : a;
    }
    var Ou = (function (e) {
      Yt(n, e);
      var t = qt(n);
      function n(e) {
        var r;
        return (
          Re(this, n),
          ((r = t.call(this, e))._cache = { data: [], labels: [], all: [] }),
          (r._unit = "day"),
          (r._majorUnit = void 0),
          (r._offsets = {}),
          (r._normalized = !1),
          (r._parseOpts = void 0),
          r
        );
      }
      return (
        Ne(n, [
          {
            key: "init",
            value: function (e) {
              var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                r = e.time || (e.time = {}),
                i = (this._adapter = new ro._date(e.adapters.date));
              i.init(t),
                Yn(r.displayFormats, i.formats()),
                (this._parseOpts = {
                  parser: r.parser,
                  round: r.round,
                  isoWeekday: r.isoWeekday,
                }),
                Ut(Ht(n.prototype), "init", this).call(this, e),
                (this._normalized = t.normalized);
            },
          },
          {
            key: "parse",
            value: function (e, t) {
              return void 0 === e ? null : Eu(this, e);
            },
          },
          {
            key: "beforeLayout",
            value: function () {
              Ut(Ht(n.prototype), "beforeLayout", this).call(this),
                (this._cache = { data: [], labels: [], all: [] });
            },
          },
          {
            key: "determineDataLimits",
            value: function () {
              var e = this.options,
                t = this._adapter,
                n = e.time.unit || "day",
                r = this.getUserBounds(),
                i = r.min,
                a = r.max,
                o = r.minDefined,
                s = r.maxDefined;
              function l(e) {
                o || isNaN(e.min) || (i = Math.min(i, e.min)),
                  s || isNaN(e.max) || (a = Math.max(a, e.max));
              }
              (o && s) ||
                (l(this._getLabelBounds()),
                ("ticks" === e.bounds && "labels" === e.ticks.source) ||
                  l(this.getMinMax(!1))),
                (i = Nn(i) && !isNaN(i) ? i : +t.startOf(Date.now(), n)),
                (a = Nn(a) && !isNaN(a) ? a : +t.endOf(Date.now(), n) + 1),
                (this.min = Math.min(i, a - 1)),
                (this.max = Math.max(i + 1, a));
            },
          },
          {
            key: "_getLabelBounds",
            value: function () {
              var e = this.getLabelTimestamps(),
                t = Number.POSITIVE_INFINITY,
                n = Number.NEGATIVE_INFINITY;
              return (
                e.length && ((t = e[0]), (n = e[e.length - 1])),
                { min: t, max: n }
              );
            },
          },
          {
            key: "buildTicks",
            value: function () {
              var e = this.options,
                t = e.time,
                n = e.ticks,
                r =
                  "labels" === n.source
                    ? this.getLabelTimestamps()
                    : this._generate();
              "ticks" === e.bounds &&
                r.length &&
                ((this.min = this._userMin || r[0]),
                (this.max = this._userMax || r[r.length - 1]));
              var i = this.min,
                a = (function (e, t, n) {
                  for (var r = 0, i = e.length; r < i && e[r] < t; ) r++;
                  for (; i > r && e[i - 1] > n; ) i--;
                  return r > 0 || i < e.length ? e.slice(r, i) : e;
                })(r, i, this.max);
              return (
                (this._unit =
                  t.unit ||
                  (n.autoSkip
                    ? Mu(
                        t.minUnit,
                        this.min,
                        this.max,
                        this._getLabelCapacity(i)
                      )
                    : (function (e, t, n, r, i) {
                        for (var a = wu.length - 1; a >= wu.indexOf(n); a--) {
                          var o = wu[a];
                          if (_u[o].common && e._adapter.diff(i, r, o) >= t - 1)
                            return o;
                        }
                        return wu[n ? wu.indexOf(n) : 0];
                      })(this, a.length, t.minUnit, this.min, this.max))),
                (this._majorUnit =
                  n.major.enabled && "year" !== this._unit
                    ? (function (e) {
                        for (
                          var t = wu.indexOf(e) + 1, n = wu.length;
                          t < n;
                          ++t
                        )
                          if (_u[wu[t]].common) return wu[t];
                      })(this._unit)
                    : void 0),
                this.initOffsets(r),
                e.reverse && a.reverse(),
                Pu(this, a, this._majorUnit)
              );
            },
          },
          {
            key: "afterAutoSkip",
            value: function () {
              this.options.offsetAfterAutoskip &&
                this.initOffsets(
                  this.ticks.map(function (e) {
                    return +e.value;
                  })
                );
            },
          },
          {
            key: "initOffsets",
            value: function () {
              var e,
                t,
                n =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : [],
                r = 0,
                i = 0;
              this.options.offset &&
                n.length &&
                ((e = this.getDecimalForValue(n[0])),
                (r =
                  1 === n.length
                    ? 1 - e
                    : (this.getDecimalForValue(n[1]) - e) / 2),
                (t = this.getDecimalForValue(n[n.length - 1])),
                (i =
                  1 === n.length
                    ? t
                    : (t - this.getDecimalForValue(n[n.length - 2])) / 2));
              var a = n.length < 3 ? 0.5 : 0.25;
              (r = wr(r, 0, a)),
                (i = wr(i, 0, a)),
                (this._offsets = { start: r, end: i, factor: 1 / (r + 1 + i) });
            },
          },
          {
            key: "_generate",
            value: function () {
              var e,
                t,
                n = this._adapter,
                r = this.min,
                i = this.max,
                a = this.options,
                o = a.time,
                s = o.unit || Mu(o.minUnit, r, i, this._getLabelCapacity(r)),
                l = Fn(a.ticks.stepSize, 1),
                u = "week" === s && o.isoWeekday,
                c = dr(u) || !0 === u,
                f = {},
                h = r;
              if (
                (c && (h = +n.startOf(h, "isoWeek", u)),
                (h = +n.startOf(h, c ? "day" : s)),
                n.diff(i, r, s) > 1e5 * l)
              )
                throw new Error(
                  r +
                    " and " +
                    i +
                    " are too far apart with stepSize of " +
                    l +
                    " " +
                    s
                );
              var d = "data" === a.ticks.source && this.getDataTimestamps();
              for (e = h, t = 0; e < i; e = +n.add(e, l, s), t++) Cu(f, e, d);
              return (
                (e !== i && "ticks" !== a.bounds && 1 !== t) || Cu(f, e, d),
                Object.keys(f)
                  .sort(function (e, t) {
                    return e - t;
                  })
                  .map(function (e) {
                    return +e;
                  })
              );
            },
          },
          {
            key: "getLabelForValue",
            value: function (e) {
              var t = this._adapter,
                n = this.options.time;
              return n.tooltipFormat
                ? t.format(e, n.tooltipFormat)
                : t.format(e, n.displayFormats.datetime);
            },
          },
          {
            key: "format",
            value: function (e, t) {
              var n = this.options.time.displayFormats,
                r = this._unit,
                i = t || n[r];
              return this._adapter.format(e, i);
            },
          },
          {
            key: "_tickFormatFunction",
            value: function (e, t, n, r) {
              var i = this.options,
                a = i.ticks.callback;
              if (a) return jn(a, [e, t, n], this);
              var o = i.time.displayFormats,
                s = this._unit,
                l = this._majorUnit,
                u = s && o[s],
                c = l && o[l],
                f = n[t],
                h = l && c && f && f.major;
              return this._adapter.format(e, r || (h ? c : u));
            },
          },
          {
            key: "generateTickLabels",
            value: function (e) {
              var t, n, r;
              for (t = 0, n = e.length; t < n; ++t)
                (r = e[t]).label = this._tickFormatFunction(r.value, t, e);
            },
          },
          {
            key: "getDecimalForValue",
            value: function (e) {
              return null === e ? NaN : (e - this.min) / (this.max - this.min);
            },
          },
          {
            key: "getPixelForValue",
            value: function (e) {
              var t = this._offsets,
                n = this.getDecimalForValue(e);
              return this.getPixelForDecimal((t.start + n) * t.factor);
            },
          },
          {
            key: "getValueForPixel",
            value: function (e) {
              var t = this._offsets,
                n = this.getDecimalForPixel(e) / t.factor - t.end;
              return this.min + n * (this.max - this.min);
            },
          },
          {
            key: "_getLabelSize",
            value: function (e) {
              var t = this.options.ticks,
                n = this.ctx.measureText(e).width,
                r = vr(this.isHorizontal() ? t.maxRotation : t.minRotation),
                i = Math.cos(r),
                a = Math.sin(r),
                o = this._resolveTickFontOptions(0).size;
              return { w: n * i + o * a, h: n * a + o * i };
            },
          },
          {
            key: "_getLabelCapacity",
            value: function (e) {
              var t = this.options.time,
                n = t.displayFormats,
                r = n[t.unit] || n.millisecond,
                i = this._tickFormatFunction(
                  e,
                  0,
                  Pu(this, [e], this._majorUnit),
                  r
                ),
                a = this._getLabelSize(i),
                o =
                  Math.floor(
                    this.isHorizontal() ? this.width / a.w : this.height / a.h
                  ) - 1;
              return o > 0 ? o : 1;
            },
          },
          {
            key: "getDataTimestamps",
            value: function () {
              var e,
                t,
                n = this._cache.data || [];
              if (n.length) return n;
              var r = this.getMatchingVisibleMetas();
              if (this._normalized && r.length)
                return (this._cache.data =
                  r[0].controller.getAllParsedValues(this));
              for (e = 0, t = r.length; e < t; ++e)
                n = n.concat(r[e].controller.getAllParsedValues(this));
              return (this._cache.data = this.normalize(n));
            },
          },
          {
            key: "getLabelTimestamps",
            value: function () {
              var e,
                t,
                n = this._cache.labels || [];
              if (n.length) return n;
              var r = this.getLabels();
              for (e = 0, t = r.length; e < t; ++e) n.push(Eu(this, r[e]));
              return (this._cache.labels = this._normalized
                ? n
                : this.normalize(n));
            },
          },
          {
            key: "normalize",
            value: function (e) {
              return Tr(e.sort(Su));
            },
          },
        ]),
        n
      );
    })(ts);
    function Tu(e, t, n) {
      var r,
        i,
        a,
        o,
        s = 0,
        l = e.length - 1;
      if (n) {
        if (t >= e[s].pos && t <= e[l].pos) {
          var u = Mr(e, "pos", t);
          (s = u.lo), (l = u.hi);
        }
        var c = e[s];
        (r = c.pos), (a = c.time);
        var f = e[l];
        (i = f.pos), (o = f.time);
      } else {
        if (t >= e[s].time && t <= e[l].time) {
          var h = Mr(e, "time", t);
          (s = h.lo), (l = h.hi);
        }
        var d = e[s];
        (r = d.time), (a = d.pos);
        var p = e[l];
        (i = p.time), (o = p.pos);
      }
      var v = i - r;
      return v ? a + ((o - a) * (t - r)) / v : a;
    }
    l(Ou, "id", "time"),
      l(Ou, "defaults", {
        bounds: "data",
        adapters: {},
        time: {
          parser: !1,
          unit: !1,
          round: !1,
          isoWeekday: !1,
          minUnit: "millisecond",
          displayFormats: {},
        },
        ticks: { source: "auto", callback: !1, major: { enabled: !1 } },
      });
    var Du = (function (e) {
      Yt(n, e);
      var t = qt(n);
      function n(e) {
        var r;
        return (
          Re(this, n),
          ((r = t.call(this, e))._table = []),
          (r._minPos = void 0),
          (r._tableRange = void 0),
          r
        );
      }
      return (
        Ne(n, [
          {
            key: "initOffsets",
            value: function () {
              var e = this._getTimestampsForTable(),
                t = (this._table = this.buildLookupTable(e));
              (this._minPos = Tu(t, this.min)),
                (this._tableRange = Tu(t, this.max) - this._minPos),
                Ut(Ht(n.prototype), "initOffsets", this).call(this, e);
            },
          },
          {
            key: "buildLookupTable",
            value: function (e) {
              var t,
                n,
                r,
                i,
                a,
                o = this.min,
                s = this.max,
                l = [],
                u = [];
              for (t = 0, n = e.length; t < n; ++t)
                (i = e[t]) >= o && i <= s && l.push(i);
              if (l.length < 2)
                return [
                  { time: o, pos: 0 },
                  { time: s, pos: 1 },
                ];
              for (t = 0, n = l.length; t < n; ++t)
                (a = l[t + 1]),
                  (r = l[t - 1]),
                  (i = l[t]),
                  Math.round((a + r) / 2) !== i &&
                    u.push({ time: i, pos: t / (n - 1) });
              return u;
            },
          },
          {
            key: "_getTimestampsForTable",
            value: function () {
              var e = this._cache.all || [];
              if (e.length) return e;
              var t = this.getDataTimestamps(),
                n = this.getLabelTimestamps();
              return (
                (e =
                  t.length && n.length
                    ? this.normalize(t.concat(n))
                    : t.length
                    ? t
                    : n),
                (e = this._cache.all = e)
              );
            },
          },
          {
            key: "getDecimalForValue",
            value: function (e) {
              return (Tu(this._table, e) - this._minPos) / this._tableRange;
            },
          },
          {
            key: "getValueForPixel",
            value: function (e) {
              var t = this._offsets,
                n = this.getDecimalForPixel(e) / t.factor - t.end;
              return Tu(this._table, n * this._tableRange + this._minPos, !0);
            },
          },
        ]),
        n
      );
    })(Ou);
    l(Du, "id", "timeseries"), l(Du, "defaults", Ou.defaults);
    var Lu = [
        to,
        nl,
        Zl,
        Object.freeze({
          __proto__: null,
          CategoryScale: nu,
          LinearScale: ou,
          LogarithmicScale: hu,
          RadialLinearScale: ku,
          TimeScale: Ou,
          TimeSeriesScale: Du,
        }),
      ],
      Ru = [
        "height",
        "width",
        "redraw",
        "datasetIdKey",
        "type",
        "data",
        "options",
        "plugins",
        "fallbackContent",
        "updateMode",
      ],
      Au = "label";
    function Nu(e, t) {
      "function" === typeof e ? e(t) : e && (e.current = t);
    }
    function zu(e, t) {
      e.labels = t;
    }
    function Fu(e, t) {
      var n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Au,
        r = [];
      e.datasets = t.map(function (t) {
        var i = e.datasets.find(function (e) {
          return e[n] === t[n];
        });
        return i && t.data && !r.includes(i)
          ? (r.push(i), Object.assign(i, t), i)
          : c({}, t);
      });
    }
    function Iu(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Au,
        n = { labels: [], datasets: [] };
      return zu(n, e.labels), Fu(n, e.datasets, t), n;
    }
    function ju(t, n) {
      var r = t.height,
        i = void 0 === r ? 150 : r,
        a = t.width,
        o = void 0 === a ? 300 : a,
        s = t.redraw,
        l = void 0 !== s && s,
        u = t.datasetIdKey,
        h = t.type,
        d = t.data,
        p = t.options,
        v = t.plugins,
        g = void 0 === v ? [] : v,
        m = t.fallbackContent,
        y = t.updateMode,
        b = f(t, Ru),
        x = (0, e.useRef)(null),
        k = (0, e.useRef)(),
        _ = function () {
          x.current &&
            ((k.current = new Ds(x.current, {
              type: h,
              data: Iu(d, u),
              options: p && c({}, p),
              plugins: g,
            })),
            Nu(n, k.current));
        },
        w = function () {
          Nu(n, null), k.current && (k.current.destroy(), (k.current = null));
        };
      return (
        (0, e.useEffect)(
          function () {
            !l &&
              k.current &&
              p &&
              (function (e, t) {
                var n = e.options;
                n && t && Object.assign(n, t);
              })(k.current, p);
          },
          [l, p]
        ),
        (0, e.useEffect)(
          function () {
            !l && k.current && zu(k.current.config.data, d.labels);
          },
          [l, d.labels]
        ),
        (0, e.useEffect)(
          function () {
            !l &&
              k.current &&
              d.datasets &&
              Fu(k.current.config.data, d.datasets, u);
          },
          [l, d.datasets]
        ),
        (0, e.useEffect)(
          function () {
            k.current && (l ? (w(), setTimeout(_)) : k.current.update(y));
          },
          [l, p, d.labels, d.datasets, y]
        ),
        (0, e.useEffect)(
          function () {
            k.current && (w(), setTimeout(_));
          },
          [h]
        ),
        (0, e.useEffect)(function () {
          return (
            _(),
            function () {
              return w();
            }
          );
        }, []),
        e.createElement(
          "canvas",
          Object.assign({ ref: x, role: "img", height: i, width: o }, b),
          m
        )
      );
    }
    var Bu = (0, e.forwardRef)(ju);
    Ds.register.apply(Ds, Qt(Lu));
    var Vu = function (e) {
        return {
          labels: ["Cases", "Deaths"],
          datasets: [
            {
              data: [e.cases, e.deaths],
              backgroundColor: ["#FF6384", "#36A2EB"],
              hoverBackgroundColor: ["#FF6384", "#36A2EB"],
            },
          ],
        };
      },
      Wu = function () {
        return {
          plugins: {
            datalabels: {
              display: !0,
              color: "#fff",
              font: { weight: "bold" },
              formatter: function (e) {
                return e.toLocaleString();
              },
            },
          },
        };
      },
      Hu = function (t) {
        var n = t.selectedCountry,
          r = a((0, e.useState)(null), 2),
          i = r[0],
          o = r[1];
        return (
          (0, e.useEffect)(
            function () {
              var e = (function () {
                var e = G(
                  Q().mark(function e() {
                    var t, r;
                    return Q().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.prev = 0),
                                (t = "http://localhost:3000/"),
                                (t += n
                                  ? "specificcountryinfo/".concat(n)
                                  : "cases"),
                                (e.next = 5),
                                jt.get(t)
                              );
                            case 5:
                              (r = e.sent), o(r.data), (e.next = 12);
                              break;
                            case 9:
                              (e.prev = 9),
                                (e.t0 = e.catch(0)),
                                console.error(e.t0);
                            case 12:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[0, 9]]
                    );
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })();
              e();
            },
            [n]
          ),
          (0, q.jsxs)("div", {
            className: "my-4",
            children: [
              (0, q.jsx)("h2", {
                className: "mb-4 text-center",
                children: "Summary",
              }),
              i
                ? (0, q.jsx)("div", {
                    className: "row",
                    children: n
                      ? (0, q.jsxs)("div", {
                          className: "row m-4",
                          children: [
                            (0, q.jsx)("div", {
                              className: "col-md-6",
                              children: (0, q.jsxs)("ul", {
                                className: "list-group",
                                children: [
                                  (0, q.jsxs)("li", {
                                    className: "list-group-item",
                                    children: [
                                      (0, q.jsx)("strong", {
                                        children: "Country:",
                                      }),
                                      " ",
                                      n,
                                    ],
                                  }),
                                  (0, q.jsxs)("li", {
                                    className: "list-group-item",
                                    children: [
                                      (0, q.jsx)("strong", {
                                        children: "Total Cases:",
                                      }),
                                      " ",
                                      i.cases,
                                    ],
                                  }),
                                  (0, q.jsxs)("li", {
                                    className: "list-group-item",
                                    children: [
                                      (0, q.jsx)("strong", {
                                        children: "Total Deaths:",
                                      }),
                                      " ",
                                      i.deaths,
                                    ],
                                  }),
                                  (0, q.jsxs)("li", {
                                    className: "list-group-item",
                                    children: [
                                      (0, q.jsx)("strong", {
                                        children: "Today's Cases:",
                                      }),
                                      " ",
                                      i.todayCases,
                                    ],
                                  }),
                                  (0, q.jsxs)("li", {
                                    className: "list-group-item",
                                    children: [
                                      (0, q.jsx)("strong", {
                                        children: "Today's Deaths:",
                                      }),
                                      " ",
                                      i.todayDeaths,
                                    ],
                                  }),
                                ],
                              }),
                            }),
                            (0, q.jsx)("div", {
                              className: "col-md-6",
                              children: (0, q.jsx)("div", {
                                className: "chart-container",
                                style: {
                                  width: "200%",
                                  height: "300px",
                                  marginLeft: "20px",
                                },
                                children: (0, q.jsx)(Bu, {
                                  type: "pie",
                                  data: Vu(i),
                                  options: Wu(),
                                }),
                              }),
                            }),
                          ],
                        })
                      : (0, q.jsx)("div", {
                          className: "col-md-6",
                          children: (0, q.jsx)("ul", {
                            className: "list-group",
                            children: (0, q.jsxs)("li", {
                              className: "list-group-item",
                              children: [
                                (0, q.jsx)("strong", {
                                  children: "Total Cases:",
                                }),
                                " ",
                                i.cases,
                              ],
                            }),
                          }),
                        }),
                  })
                : (0, q.jsx)("p", { children: "Loading summary..." }),
            ],
          })
        );
      },
      Uu = function () {
        return (0, q.jsx)("footer", {
          className: "bg-dark text-light text-center py-3 mt-auto",
          children: (0, q.jsx)("p", {
            className: "mb-0",
            children: "\xa9 Harrshini",
          }),
        });
      },
      $u = function () {
        var t = a((0, e.useState)(null), 2),
          n = t[0],
          r = t[1];
        return (0, q.jsxs)("div", {
          className: "d-flex flex-column min-vh-100 bg-light",
          children: [
            (0, q.jsx)(K, {}),
            (0, q.jsx)("div", {
              className: "p-4 pt-5 pb-5",
              style: { paddingLeft: "100px", paddingRight: "100px" },
              children: (0, q.jsxs)(L, {
                children: [
                  (0, q.jsxs)(z, {
                    children: [
                      (0, q.jsx)(V, { children: "All Countries Info" }),
                      (0, q.jsx)(V, { children: "Country Selector & Summary" }),
                    ],
                  }),
                  (0, q.jsx)(Y, { children: (0, q.jsx)(Bt, {}) }),
                  (0, q.jsxs)(Y, {
                    children: [
                      (0, q.jsx)(Vt, {
                        onCountrySelect: function (e) {
                          r(e);
                        },
                      }),
                      (0, q.jsx)(Hu, { selectedCountry: n }),
                    ],
                  }),
                ],
              }),
            }),
            (0, q.jsx)(Uu, {}),
          ],
        });
      };
    t.render(
      (0, q.jsx)(e.StrictMode, { children: (0, q.jsx)($u, {}) }),
      document.getElementById("root")
    );
  })();
})();
//# sourceMappingURL=main.70250613.js.map

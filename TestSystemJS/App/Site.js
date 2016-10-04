!function (e) { function r(e, r, o) { return 4 === arguments.length ? t.apply(this, arguments) : void n(e, { declarative: !0, deps: r, declare: o }) } function t(e, r, t, o) { n(e, { declarative: !1, deps: r, executingRequire: t, execute: o }) } function n(e, r) { r.name = e, e in v || (v[e] = r), r.normalizedDeps = r.deps } function o(e, r) { if (r[e.groupIndex] = r[e.groupIndex] || [], -1 == g.call(r[e.groupIndex], e)) { r[e.groupIndex].push(e); for (var t = 0, n = e.normalizedDeps.length; n > t; t++) { var a = e.normalizedDeps[t], u = v[a]; if (u && !u.evaluated) { var d = e.groupIndex + (u.declarative != e.declarative); if (void 0 === u.groupIndex || u.groupIndex < d) { if (void 0 !== u.groupIndex && (r[u.groupIndex].splice(g.call(r[u.groupIndex], u), 1), 0 == r[u.groupIndex].length)) throw new TypeError("Mixed dependency cycle detected"); u.groupIndex = d } o(u, r) } } } } function a(e) { var r = v[e]; r.groupIndex = 0; var t = []; o(r, t); for (var n = !!r.declarative == t.length % 2, a = t.length - 1; a >= 0; a--) { for (var u = t[a], i = 0; i < u.length; i++) { var s = u[i]; n ? d(s) : l(s) } n = !n } } function u(e) { return y[e] || (y[e] = { name: e, dependencies: [], exports: {}, importers: [] }) } function d(r) { if (!r.module) { var t = r.module = u(r.name), n = r.module.exports, o = r.declare.call(e, function (e, r) { if (t.locked = !0, "object" == typeof e) for (var o in e) n[o] = e[o]; else n[e] = r; for (var a = 0, u = t.importers.length; u > a; a++) { var d = t.importers[a]; if (!d.locked) for (var i = 0; i < d.dependencies.length; ++i) d.dependencies[i] === t && d.setters[i](n) } return t.locked = !1, r }, { id: r.name }); t.setters = o.setters, t.execute = o.execute; for (var a = 0, i = r.normalizedDeps.length; i > a; a++) { var l, s = r.normalizedDeps[a], c = v[s], f = y[s]; f ? l = f.exports : c && !c.declarative ? l = c.esModule : c ? (d(c), f = c.module, l = f.exports) : l = p(s), f && f.importers ? (f.importers.push(t), t.dependencies.push(f)) : t.dependencies.push(null), t.setters[a] && t.setters[a](l) } } } function i(e) { var r, t = v[e]; if (t) t.declarative ? f(e, []) : t.evaluated || l(t), r = t.module.exports; else if (r = p(e), !r) throw new Error("Unable to load dependency " + e + "."); return (!t || t.declarative) && r && r.__useDefault ? r["default"] : r } function l(r) { if (!r.module) { var t = {}, n = r.module = { exports: t, id: r.name }; if (!r.executingRequire) for (var o = 0, a = r.normalizedDeps.length; a > o; o++) { var u = r.normalizedDeps[o], d = v[u]; d && l(d) } r.evaluated = !0; var c = r.execute.call(e, function (e) { for (var t = 0, n = r.deps.length; n > t; t++) if (r.deps[t] == e) return i(r.normalizedDeps[t]); throw new TypeError("Module " + e + " not declared as a dependency.") }, t, n); void 0 !== typeof c && (n.exports = c), t = n.exports, t && t.__esModule ? r.esModule = t : r.esModule = s(t) } } function s(r) { var t = {}; if (("object" == typeof r || "function" == typeof r) && r !== e) if (m) for (var n in r) "default" !== n && c(t, r, n); else { var o = r && r.hasOwnProperty; for (var n in r) "default" === n || o && !r.hasOwnProperty(n) || (t[n] = r[n]) } return t["default"] = r, x(t, "__useDefault", { value: !0 }), t } function c(e, r, t) { try { var n; (n = Object.getOwnPropertyDescriptor(r, t)) && x(e, t, n) } catch (o) { return e[t] = r[t], !1 } } function f(r, t) { var n = v[r]; if (n && !n.evaluated && n.declarative) { t.push(r); for (var o = 0, a = n.normalizedDeps.length; a > o; o++) { var u = n.normalizedDeps[o]; -1 == g.call(t, u) && (v[u] ? f(u, t) : p(u)) } n.evaluated || (n.evaluated = !0, n.module.execute.call(e)) } } function p(e) { if (I[e]) return I[e]; if ("@node/" == e.substr(0, 6)) return I[e] = s(D(e.substr(6))); var r = v[e]; if (!r) throw "Module " + e + " not present."; return a(e), f(e, []), v[e] = void 0, r.declarative && x(r.module.exports, "__esModule", { value: !0 }), I[e] = r.declarative ? r.module.exports : r.esModule } var v = {}, g = Array.prototype.indexOf || function (e) { for (var r = 0, t = this.length; t > r; r++) if (this[r] === e) return r; return -1 }, m = !0; try { Object.getOwnPropertyDescriptor({ a: 0 }, "a") } catch (h) { m = !1 } var x; !function () { try { Object.defineProperty({}, "a", {}) && (x = Object.defineProperty) } catch (e) { x = function (e, r, t) { try { e[r] = t.value || t.get.call(e) } catch (n) { } } } }(); var y = {}, D = "undefined" != typeof System && System._nodeRequire || "undefined" != typeof require && require.resolve && "undefined" != typeof process && require, I = { "@empty": {} }; return function (e, n, o, a) { return function (u) { u(function (u) { for (var d = { _nodeRequire: D, register: r, registerDynamic: t, get: p, set: function (e, r) { I[e] = r }, newModule: function (e) { return e } }, i = 0; i < n.length; i++) (function (e, r) { r && r.__esModule ? I[e] = r : I[e] = s(r) })(n[i], arguments[i]); a(d); var l = p(e[0]); if (e.length > 1) for (var i = 1; i < e.length; i++) p(e[i]); return o ? l["default"] : l }) } } }("undefined" != typeof self ? self : global)

(["1"], [], true, function($__System) {
var require = this.require, exports = this.exports, module = this.module;
!function(e){function r(e,r){for(var n=e.split(".");n.length;)r=r[n.shift()];return r}function n(n){if("string"==typeof n)return r(n,e);if(!(n instanceof Array))throw new Error("Global exports must be a string or array.");for(var t={},o=!0,f=0;f<n.length;f++){var i=r(n[f],e);o&&(t["default"]=i,o=!1),t[n[f].split(".").pop()]=i}return t}function t(r){if(Object.keys)Object.keys(e).forEach(r);else for(var n in e)a.call(e,n)&&r(n)}function o(r){t(function(n){if(-1==l.call(s,n)){try{var t=e[n]}catch(o){s.push(n)}r(n,t)}})}var f,i=$__System,a=Object.prototype.hasOwnProperty,l=Array.prototype.indexOf||function(e){for(var r=0,n=this.length;n>r;r++)if(this[r]===e)return r;return-1},s=["_g","sessionStorage","localStorage","clipboardData","frames","frameElement","external","mozAnimationStartTime","webkitStorageInfo","webkitIndexedDB","mozInnerScreenY","mozInnerScreenX"];i.set("@@global-helpers",i.newModule({prepareGlobal:function(r,t,i){var a=e.define;e.define=void 0;var l;if(i){l={};for(var s in i)l[s]=e[s],e[s]=i[s]}return t||(f={},o(function(e,r){f[e]=r})),function(){var r;if(t)r=n(t);else{r={};var i,s;o(function(e,n){f[e]!==n&&"undefined"!=typeof n&&(r[e]=n,"undefined"!=typeof i?s||i===n||(s=!0):i=n)}),r=s?r:i}if(l)for(var u in l)e[u]=l[u];return e.define=a,r}}}))}("undefined"!=typeof self?self:global);
!function(e){function n(e,n){e=e.replace(l,"");var r=e.match(u),t=(r[1].split(",")[n]||"require").replace(s,""),i=p[t]||(p[t]=new RegExp(a+t+f,"g"));i.lastIndex=0;for(var o,c=[];o=i.exec(e);)c.push(o[2]||o[3]);return c}function r(e,n,t,o){if("object"==typeof e&&!(e instanceof Array))return r.apply(null,Array.prototype.splice.call(arguments,1,arguments.length-1));if("string"==typeof e&&"function"==typeof n&&(e=[e]),!(e instanceof Array)){if("string"==typeof e){var l=i.get(e);return l.__useDefault?l["default"]:l}throw new TypeError("Invalid require")}for(var a=[],f=0;f<e.length;f++)a.push(i["import"](e[f],o));Promise.all(a).then(function(e){n&&n.apply(null,e)},t)}function t(t,l,a){"string"!=typeof t&&(a=l,l=t,t=null),l instanceof Array||(a=l,l=["require","exports","module"].splice(0,a.length)),"function"!=typeof a&&(a=function(e){return function(){return e}}(a)),void 0===l[l.length-1]&&l.pop();var f,u,s;-1!=(f=o.call(l,"require"))&&(l.splice(f,1),t||(l=l.concat(n(a.toString(),f)))),-1!=(u=o.call(l,"exports"))&&l.splice(u,1),-1!=(s=o.call(l,"module"))&&l.splice(s,1);var p={name:t,deps:l,execute:function(n,t,o){for(var p=[],c=0;c<l.length;c++)p.push(n(l[c]));o.uri=o.id,o.config=function(){},-1!=s&&p.splice(s,0,o),-1!=u&&p.splice(u,0,t),-1!=f&&p.splice(f,0,function(e,t,l){return"string"==typeof e&&"function"!=typeof t?n(e):r.call(i,e,t,l,o.id)});var d=a.apply(-1==u?e:t,p);return"undefined"==typeof d&&o&&(d=o.exports),"undefined"!=typeof d?d:void 0}};if(t)c.anonDefine||c.isBundle?c.anonDefine&&c.anonDefine.name&&(c.anonDefine=null):c.anonDefine=p,c.isBundle=!0,i.registerDynamic(p.name,p.deps,!1,p.execute);else{if(c.anonDefine&&!c.anonDefine.name)throw new Error("Multiple anonymous defines in module "+t);c.anonDefine=p}}var i=$__System,o=Array.prototype.indexOf||function(e){for(var n=0,r=this.length;r>n;n++)if(this[n]===e)return n;return-1},l=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,a="(?:^|[^$_a-zA-Z\\xA0-\\uFFFF.])",f="\\s*\\(\\s*(\"([^\"]+)\"|'([^']+)')\\s*\\)",u=/\(([^\)]*)\)/,s=/^\s+|\s+$/g,p={};t.amd={};var c={isBundle:!1,anonDefine:null};i.amdDefine=t,i.amdRequire=r}("undefined"!=typeof self?self:global);
(function() {
var define = $__System.amdDefine;
!function(t, define) {
  define("2", ["3"], t) && define("kendo.router.min", ["2"], function(m) {
    return m;
  });
}(function() {
  return function(t, n) {
    function e(t, n) {
      if (!n)
        return t;
      t + "/" === n && (t = n);
      var e = RegExp("^" + n, "i");
      return e.test(t) || (t = n + "/" + t), d.protocol + "//" + (d.host + "/" + t).replace(/\/\/+/g, "/");
    }
    function r(t) {
      return t ? "#!" : "#";
    }
    function i(t) {
      var n = d.href;
      return "#!" === t && n.indexOf("#") > -1 && n.indexOf("#!") < 0 ? null : n.split(t)[1] || "";
    }
    function o(t, n) {
      return 0 === n.indexOf(t) ? n.substr(t.length).replace(/\/\//g, "/") : n;
    }
    function a(t) {
      return t.replace(/^(#)?/, "#");
    }
    function s(t) {
      return t.replace(/^(#(!)?)?/, "#!");
    }
    var h = window.kendo,
        u = "change",
        c = "back",
        l = "same",
        f = h.support,
        d = window.location,
        p = window.history,
        g = 50,
        b = h.support.browser.msie,
        k = /^#*/,
        w = window.document,
        v = h.Class.extend({
          back: function() {
            b ? setTimeout(function() {
              p.back();
            }) : p.back();
          },
          forward: function() {
            b ? setTimeout(function() {
              p.forward();
            }) : p.forward();
          },
          length: function() {
            return p.length;
          },
          replaceLocation: function(t) {
            d.replace(t);
          }
        }),
        x = v.extend({
          init: function(t) {
            this.root = t;
          },
          navigate: function(t) {
            p.pushState({}, w.title, e(t, this.root));
          },
          replace: function(t) {
            p.replaceState({}, w.title, e(t, this.root));
          },
          normalize: function(t) {
            return o(this.root, t);
          },
          current: function() {
            var t = d.pathname;
            return d.search && (t += d.search), o(this.root, t);
          },
          change: function(n) {
            t(window).bind("popstate.kendo", n);
          },
          stop: function() {
            t(window).unbind("popstate.kendo");
          },
          normalizeCurrent: function(t) {
            var n,
                o = t.root,
                a = d.pathname,
                s = i(r(t.hashBang));
            o === a + "/" && (n = o), o === a && s && (n = e(s.replace(k, ""), o)), n && p.pushState({}, w.title, n);
          }
        }),
        _ = v.extend({
          init: function(t) {
            this._id = h.guid(), this.prefix = r(t), this.fix = t ? s : a;
          },
          navigate: function(t) {
            d.hash = this.fix(t);
          },
          replace: function(t) {
            this.replaceLocation(this.fix(t));
          },
          normalize: function(t) {
            return t.indexOf(this.prefix) < 0 ? t : t.split(this.prefix)[1];
          },
          change: function(n) {
            f.hashChange ? t(window).on("hashchange." + this._id, n) : this._interval = setInterval(n, g);
          },
          stop: function() {
            t(window).off("hashchange." + this._id), clearInterval(this._interval);
          },
          current: function() {
            return i(this.prefix);
          },
          normalizeCurrent: function(t) {
            var n = d.pathname,
                e = t.root;
            return t.pushState && e !== n ? (this.replaceLocation(e + this.prefix + o(e, n)), !0) : !1;
          }
        }),
        m = h.Observable.extend({
          start: function(n) {
            if (n = n || {}, this.bind([u, c, l], n), !this._started) {
              this._started = !0, n.root = n.root || "/";
              var e,
                  r = this.createAdapter(n);
              r.normalizeCurrent(n) || (e = r.current(), t.extend(this, {
                adapter: r,
                root: n.root,
                historyLength: r.length(),
                current: e,
                locations: [e]
              }), r.change(t.proxy(this, "_checkUrl")));
            }
          },
          createAdapter: function(t) {
            return f.pushState && t.pushState ? new x(t.root) : new _(t.hashBang);
          },
          stop: function() {
            this._started && (this.adapter.stop(), this.unbind(u), this._started = !1);
          },
          change: function(t) {
            this.bind(u, t);
          },
          replace: function(t, n) {
            this._navigate(t, n, function(n) {
              n.replace(t), this.locations[this.locations.length - 1] = this.current;
            });
          },
          navigate: function(t, e) {
            return "#:back" === t ? (this.backCalled = !0, this.adapter.back(), n) : (this._navigate(t, e, function(n) {
              n.navigate(t), this.locations.push(this.current);
            }), n);
          },
          _navigate: function(t, e, r) {
            var i = this.adapter;
            return t = i.normalize(t), this.current === t || this.current === decodeURIComponent(t) ? (this.trigger(l), n) : ((e || !this.trigger(u, {url: t})) && (this.current = t, r.call(this, i), this.historyLength = i.length()), n);
          },
          _checkUrl: function() {
            var t = this.adapter,
                e = t.current(),
                r = t.length(),
                i = this.historyLength === r,
                o = e === this.locations[this.locations.length - 2] && i,
                a = this.backCalled,
                s = this.current;
            return null === e || this.current === e || this.current === decodeURIComponent(e) ? !0 : (this.historyLength = r, this.backCalled = !1, this.current = e, o && this.trigger("back", {
              url: s,
              to: e
            }) ? (t.forward(), this.current = s, n) : this.trigger(u, {
              url: e,
              backButtonPressed: !a
            }) ? (o ? t.forward() : (t.back(), this.historyLength--), this.current = s, n) : (o ? this.locations.pop() : this.locations.push(e), n));
          }
        });
    h.History = m, h.History.HistoryAdapter = v, h.History.HashAdapter = _, h.History.PushStateAdapter = x, h.absoluteURL = e, h.history = new m;
  }(window.kendo.jQuery), function() {
    function t(t, n) {
      return n ? t : "([^/]+)";
    }
    function n(n, e) {
      return RegExp("^" + n.replace(p, "\\$&").replace(l, "(?:$1)?").replace(f, t).replace(d, "(.*?)") + "$", e ? "i" : "");
    }
    function e(t) {
      return t.replace(/(\?.*)|(#.*)/g, "");
    }
    var r = window.kendo,
        i = r.history,
        o = r.Observable,
        a = "init",
        s = "routeMissing",
        h = "change",
        u = "back",
        c = "same",
        l = /\((.*?)\)/g,
        f = /(\(\?)?:\w+/g,
        d = /\*\w+/g,
        p = /[\-{}\[\]+?.,\\\^$|#\s]/g,
        g = r.Class.extend({
          init: function(t, e, r) {
            t instanceof RegExp || (t = n(t, r)), this.route = t, this._callback = e;
          },
          callback: function(t, n) {
            var i,
                o,
                a = 0,
                s = r.parseQueryStringParams(t);
            for (s._back = n, t = e(t), i = this.route.exec(t).slice(1), o = i.length; o > a; a++)
              void 0 !== i[a] && (i[a] = decodeURIComponent(i[a]));
            i.push(s), this._callback.apply(null, i);
          },
          worksWith: function(t, n) {
            return this.route.test(e(t)) ? (this.callback(t, n), !0) : !1;
          }
        }),
        b = o.extend({
          init: function(t) {
            t || (t = {}), o.fn.init.call(this), this.routes = [], this.pushState = t.pushState, this.hashBang = t.hashBang, this.root = t.root, this.ignoreCase = t.ignoreCase !== !1, this.bind([a, s, h, c], t);
          },
          destroy: function() {
            i.unbind(h, this._urlChangedProxy), i.unbind(c, this._sameProxy), i.unbind(u, this._backProxy), this.unbind();
          },
          start: function() {
            var t,
                n = this,
                e = function() {
                  n._same();
                },
                r = function(t) {
                  n._back(t);
                },
                o = function(t) {
                  n._urlChanged(t);
                };
            i.start({
              same: e,
              change: o,
              back: r,
              pushState: n.pushState,
              hashBang: n.hashBang,
              root: n.root
            }), t = {
              url: i.current || "/",
              preventDefault: $.noop
            }, n.trigger(a, t) || n._urlChanged(t), this._urlChangedProxy = o, this._backProxy = r;
          },
          route: function(t, n) {
            this.routes.push(new g(t, n, this.ignoreCase));
          },
          navigate: function(t, n) {
            r.history.navigate(t, n);
          },
          replace: function(t, n) {
            r.history.replace(t, n);
          },
          _back: function(t) {
            this.trigger(u, {
              url: t.url,
              to: t.to
            }) && t.preventDefault();
          },
          _same: function() {
            this.trigger(c);
          },
          _urlChanged: function(t) {
            var n,
                e,
                i,
                o,
                a = t.url,
                u = t.backButtonPressed;
            if (a || (a = "/"), this.trigger(h, {
              url: t.url,
              params: r.parseQueryStringParams(t.url),
              backButtonPressed: u
            }))
              return void t.preventDefault();
            for (n = 0, e = this.routes, o = e.length; o > n; n++)
              if (i = e[n], i.worksWith(a, u))
                return;
            this.trigger(s, {
              url: a,
              params: r.parseQueryStringParams(a),
              backButtonPressed: u
            }) && t.preventDefault();
          }
        });
    r.Router = b;
  }(), window.kendo;
}, "function" == typeof define && define.amd ? define : function(t, n, e) {
  (e || n)();
});

})();
(function() {
var define = $__System.amdDefine;
!function(t, define) {
  define("4", ["3"], t) && define("kendo.data.odata.min", ["4"], function(m) {
    return m;
  });
}(function() {
  return function(t, e) {
    function n(a, r) {
      var d,
          p,
          c,
          l,
          u,
          f,
          y,
          j,
          m = [],
          T = a.logic || "and",
          g = a.filters;
      for (d = 0, p = g.length; p > d; d++)
        a = g[d], c = a.field, y = a.value, f = a.operator, a.filters ? a = n(a, r) : (j = a.ignoreCase, c = c.replace(/\./g, "/"), a = i[f], r && (a = s[f]), "isnull" === f || "isnotnull" === f ? a = o.format("{0} {1} null", c, a) : "isempty" === f || "isnotempty" === f ? a = o.format("{0} {1} ''", c, a) : a && y !== e && (l = t.type(y), "string" === l ? (u = "'{1}'", y = y.replace(/'/g, "''"), j === !0 && (c = "tolower(" + c + ")")) : u = "date" === l ? r ? "{1:yyyy-MM-ddTHH:mm:ss+00:00}" : "datetime'{1:yyyy-MM-ddTHH:mm:ss}'" : "{1}", a.length > 3 ? "substringof" !== a ? u = "{0}({2}," + u + ")" : (u = "{0}(" + u + ",{2})", "doesnotcontain" === f && (r ? (u = "{0}({2},'{1}') eq -1", a = "indexof") : u += " eq false")) : u = "{2} {0} " + u, a = o.format(u, a, y, c))), m.push(a);
      return a = m.join(" " + T + " "), m.length > 1 && (a = "(" + a + ")"), a;
    }
    function a(t) {
      for (var e in t)
        0 === e.indexOf("@odata") && delete t[e];
    }
    var o = window.kendo,
        r = t.extend,
        i = {
          eq: "eq",
          neq: "ne",
          gt: "gt",
          gte: "ge",
          lt: "lt",
          lte: "le",
          contains: "substringof",
          doesnotcontain: "substringof",
          endswith: "endswith",
          startswith: "startswith",
          isnull: "eq",
          isnotnull: "ne",
          isempty: "eq",
          isnotempty: "ne"
        },
        s = r({}, i, {contains: "contains"}),
        d = {
          pageSize: t.noop,
          page: t.noop,
          filter: function(t, e, a) {
            e && (e = n(e, a), e && (t.$filter = e));
          },
          sort: function(e, n) {
            var a = t.map(n, function(t) {
              var e = t.field.replace(/\./g, "/");
              return "desc" === t.dir && (e += " desc"), e;
            }).join(",");
            a && (e.$orderby = a);
          },
          skip: function(t, e) {
            e && (t.$skip = e);
          },
          take: function(t, e) {
            e && (t.$top = e);
          }
        },
        p = {read: {dataType: "jsonp"}};
    r(!0, o.data, {
      schemas: {odata: {
          type: "json",
          data: function(t) {
            return t.d.results || [t.d];
          },
          total: "d.__count"
        }},
      transports: {odata: {
          read: {
            cache: !0,
            dataType: "jsonp",
            jsonp: "$callback"
          },
          update: {
            cache: !0,
            dataType: "json",
            contentType: "application/json",
            type: "PUT"
          },
          create: {
            cache: !0,
            dataType: "json",
            contentType: "application/json",
            type: "POST"
          },
          destroy: {
            cache: !0,
            dataType: "json",
            type: "DELETE"
          },
          parameterMap: function(t, e, n) {
            var a,
                r,
                i,
                s;
            if (t = t || {}, e = e || "read", s = (this.options || p)[e], s = s ? s.dataType : "json", "read" === e) {
              a = {$inlinecount: "allpages"}, "json" != s && (a.$format = "json");
              for (i in t)
                d[i] ? d[i](a, t[i], n) : a[i] = t[i];
            } else {
              if ("json" !== s)
                throw Error("Only json dataType can be used for " + e + " operation.");
              if ("destroy" !== e) {
                for (i in t)
                  r = t[i], "number" == typeof r && (t[i] = r + "");
                a = o.stringify(t);
              }
            }
            return a;
          }
        }}
    }), r(!0, o.data, {
      schemas: {"odata-v4": {
          type: "json",
          data: function(e) {
            return e = t.extend({}, e), a(e), e.value ? e.value : [e];
          },
          total: function(t) {
            return t["@odata.count"];
          }
        }},
      transports: {"odata-v4": {
          read: {
            cache: !0,
            dataType: "json"
          },
          update: {
            cache: !0,
            dataType: "json",
            contentType: "application/json;IEEE754Compatible=true",
            type: "PUT"
          },
          create: {
            cache: !0,
            dataType: "json",
            contentType: "application/json;IEEE754Compatible=true",
            type: "POST"
          },
          destroy: {
            cache: !0,
            dataType: "json",
            type: "DELETE"
          },
          parameterMap: function(t, e) {
            var n = o.data.transports.odata.parameterMap(t, e, !0);
            return "read" == e && (n.$count = !0, delete n.$inlinecount), n;
          }
        }}
    });
  }(window.kendo.jQuery), window.kendo;
}, "function" == typeof define && define.amd ? define : function(t, e, n) {
  (n || e)();
});

})();
(function() {
var define = $__System.amdDefine;
!function(e, define) {
  define("5", ["3"], e) && define("kendo.data.xml.min", ["5"], function(m) {
    return m;
  });
}(function() {
  return function(e, t) {
    var n = window.kendo,
        r = e.isArray,
        i = e.isPlainObject,
        o = e.map,
        a = e.each,
        f = e.extend,
        d = n.getter,
        l = n.Class,
        u = l.extend({
          init: function(t) {
            var d,
                l,
                u,
                s,
                c = this,
                p = t.total,
                m = t.model,
                h = t.parse,
                x = t.errors,
                g = t.serialize,
                y = t.data;
            m && (i(m) && (d = t.modelBase || n.data.Model, m.fields && a(m.fields, function(t, n) {
              i(n) && n.field ? e.isFunction(n.field) || (n = f(n, {field: c.getter(n.field)})) : n = {field: c.getter(n)}, m.fields[t] = n;
            }), l = m.id, l && (u = {}, u[c.xpathToMember(l, !0)] = {field: c.getter(l)}, m.fields = f(u, m.fields), m.id = c.xpathToMember(l)), m = d.define(m)), c.model = m), p && ("string" == typeof p ? (p = c.getter(p), c.total = function(e) {
              return parseInt(p(e), 10);
            }) : "function" == typeof p && (c.total = p)), x && ("string" == typeof x ? (x = c.getter(x), c.errors = function(e) {
              return x(e) || null;
            }) : "function" == typeof x && (c.errors = x)), y && ("string" == typeof y ? (y = c.xpathToMember(y), c.data = function(e) {
              var t,
                  n = c.evaluate(e, y);
              return n = r(n) ? n : [n], c.model && m.fields ? (t = new c.model, o(n, function(e) {
                if (e) {
                  var n,
                      r = {};
                  for (n in m.fields)
                    r[n] = t._parse(n, m.fields[n].field(e));
                  return r;
                }
              })) : n;
            }) : "function" == typeof y && (c.data = y)), "function" == typeof h && (s = c.parse, c.parse = function(e) {
              var t = h.call(c, e);
              return s.call(c, t);
            }), "function" == typeof g && (c.serialize = g);
          },
          total: function(e) {
            return this.data(e).length;
          },
          errors: function(e) {
            return e ? e.errors : null;
          },
          serialize: function(e) {
            return e;
          },
          parseDOM: function(e) {
            var n,
                i,
                o,
                a,
                f,
                d,
                l,
                u = {},
                s = e.attributes,
                c = s.length;
            for (l = 0; c > l; l++)
              d = s[l], u["@" + d.nodeName] = d.nodeValue;
            for (i = e.firstChild; i; i = i.nextSibling)
              o = i.nodeType, 3 === o || 4 === o ? u["#text"] = i.nodeValue : 1 === o && (n = this.parseDOM(i), a = i.nodeName, f = u[a], r(f) ? f.push(n) : f = f !== t ? [f, n] : n, u[a] = f);
            return u;
          },
          evaluate: function(e, t) {
            for (var n,
                i,
                o,
                a,
                f,
                d = t.split("."); n = d.shift(); )
              if (e = e[n], r(e)) {
                for (i = [], t = d.join("."), f = 0, o = e.length; o > f; f++)
                  a = this.evaluate(e[f], t), a = r(a) ? a : [a], i.push.apply(i, a);
                return i;
              }
            return e;
          },
          parse: function(t) {
            var n,
                r,
                i = {};
            return n = t.documentElement || e.parseXML(t).documentElement, r = this.parseDOM(n), i[n.nodeName] = r, i;
          },
          xpathToMember: function(e, t) {
            return e ? (e = e.replace(/^\//, "").replace(/\//g, "."), e.indexOf("@") >= 0 ? e.replace(/\.?(@.*)/, t ? "$1" : '["$1"]') : e.indexOf("text()") >= 0 ? e.replace(/(\.?text\(\))/, t ? "#text" : '["#text"]') : e) : "";
          },
          getter: function(e) {
            return d(this.xpathToMember(e), !0);
          }
        });
    e.extend(!0, n.data, {
      XmlDataReader: u,
      readers: {xml: u}
    });
  }(window.kendo.jQuery), window.kendo;
}, "function" == typeof define && define.amd ? define : function(e, t, n) {
  (n || t)();
});

})();
(function() {
var define = $__System.amdDefine;
!function(e, define) {
  define("6", ["3", "4", "5"], e) && define("kendo.data.min", ["6"], function(m) {
    return m;
  });
}(function() {
  return function(e, t) {
    function r(e, t, r, n) {
      return function(i) {
        var a,
            s = {};
        for (a in i)
          s[a] = i[a];
        s.field = n ? r + "." + i.field : r, t == Oe && e._notifyChange && e._notifyChange(s), e.trigger(t, s);
      };
    }
    function n(t, r) {
      if (t === r)
        return !0;
      var i,
          a = e.type(t),
          s = e.type(r);
      if (a !== s)
        return !1;
      if ("date" === a)
        return t.getTime() === r.getTime();
      if ("object" !== a && "array" !== a)
        return !1;
      for (i in t)
        if (!n(t[i], r[i]))
          return !1;
      return !0;
    }
    function i(e, t) {
      var r,
          n;
      for (n in e) {
        if (r = e[n], he(r) && r.field && r.field === t)
          return r;
        if (r === t)
          return r;
      }
      return null;
    }
    function a(e) {
      this.data = e || [];
    }
    function s(e, r) {
      if (e) {
        var n = typeof e === we ? {
          field: e,
          dir: r
        } : e,
            i = ce(n) ? n : n !== t ? [n] : [];
        return ge(i, function(e) {
          return !!e.dir;
        });
      }
    }
    function o(e) {
      var t,
          r,
          n,
          i,
          a = e.filters;
      if (a)
        for (t = 0, r = a.length; r > t; t++)
          n = a[t], i = n.operator, i && typeof i === we && (n.operator = X[i.toLowerCase()] || i), o(n);
    }
    function u(e) {
      return e && !fe(e) ? ((ce(e) || !e.filters) && (e = {
        logic: "and",
        filters: ce(e) ? e : [e]
      }), o(e), e) : t;
    }
    function l(e, t) {
      return e.logic || t.logic ? !1 : e.field === t.field && e.value === t.value && e.operator === t.operator;
    }
    function d(e) {
      return e = e || {}, fe(e) ? {
        logic: "and",
        filters: []
      } : u(e);
    }
    function h(e, t) {
      return t.logic || e.field > t.field ? 1 : t.field > e.field ? -1 : 0;
    }
    function f(e, t) {
      var r,
          n,
          i,
          a,
          s;
      if (e = d(e), t = d(t), e.logic !== t.logic)
        return !1;
      if (i = (e.filters || []).slice(), a = (t.filters || []).slice(), i.length !== a.length)
        return !1;
      for (i = i.sort(h), a = a.sort(h), s = 0; i.length > s; s++)
        if (r = i[s], n = a[s], r.logic && n.logic) {
          if (!f(r, n))
            return !1;
        } else if (!l(r, n))
          return !1;
      return !0;
    }
    function c(e) {
      return ce(e) ? e : [e];
    }
    function g(e, r) {
      var n = typeof e === we ? {
        field: e,
        dir: r
      } : e,
          i = ce(n) ? n : n !== t ? [n] : [];
      return B(i, function(e) {
        return {
          field: e.field,
          dir: e.dir || "asc",
          aggregates: e.aggregates
        };
      });
    }
    function p(e, t) {
      return e && e.getTime && t && t.getTime ? e.getTime() === t.getTime() : e === t;
    }
    function _(e, t, r, n, i, a) {
      var s,
          o,
          u,
          l,
          d;
      for (t = t || [], l = t.length, s = 0; l > s; s++)
        o = t[s], u = o.aggregate, d = o.field, e[d] = e[d] || {}, a[d] = a[d] || {}, a[d][u] = a[d][u] || {}, e[d][u] = Y[u.toLowerCase()](e[d][u], r, me.accessor(d), n, i, a[d][u]);
    }
    function v(e) {
      return "number" == typeof e && !isNaN(e);
    }
    function m(e) {
      return e && e.getTime;
    }
    function y(e) {
      var t,
          r = e.length,
          n = Array(r);
      for (t = 0; r > t; t++)
        n[t] = e[t].toJSON();
      return n;
    }
    function S(e, t, r, n, i) {
      var a,
          s,
          o,
          u,
          l,
          d = {};
      for (u = 0, l = e.length; l > u; u++) {
        a = e[u];
        for (s in t)
          o = i[s], o && o !== s && (d[o] || (d[o] = me.setter(o)), d[o](a, t[s](a)), delete a[s]);
      }
    }
    function b(e, t, r, n, i) {
      var a,
          s,
          o,
          u,
          l;
      for (u = 0, l = e.length; l > u; u++) {
        a = e[u];
        for (s in t)
          a[s] = r._parse(s, t[s](a)), o = i[s], o && o !== s && delete a[o];
      }
    }
    function w(e, t, r, n, i) {
      var a,
          s,
          o,
          u;
      for (s = 0, u = e.length; u > s; s++)
        a = e[s], o = n[a.field], o && o != a.field && (a.field = o), a.value = r._parse(a.field, a.value), a.hasSubgroups ? w(a.items, t, r, n, i) : b(a.items, t, r, n, i);
    }
    function k(e, t, r, n, i, a) {
      return function(s) {
        return s = e(s), s && !fe(n) && ("[object Array]" === We.call(s) || s instanceof Ye || (s = [s]), r(s, n, new t, i, a)), s || [];
      };
    }
    function x(e, t, r, n) {
      for (var i,
          a,
          s,
          o = 0; t.length && n && (i = t[o], a = i.items, s = a.length, e && e.field === i.field && e.value === i.value ? (e.hasSubgroups && e.items.length ? x(e.items[e.items.length - 1], i.items, r, n) : (a = a.slice(r, r + n), e.items = e.items.concat(a)), t.splice(o--, 1)) : i.hasSubgroups && a.length ? (x(i, a, r, n), i.items.length || t.splice(o--, 1)) : (a = a.slice(r, r + n), i.items = a, i.items.length || t.splice(o--, 1)), 0 === a.length ? r -= s : (r = 0, n -= a.length), !(++o >= t.length)); )
        ;
      t.length > o && t.splice(o, t.length - o);
    }
    function q(e) {
      var t,
          r,
          n,
          i,
          a,
          s = [];
      for (t = 0, r = e.length; r > t; t++)
        if (a = e.at(t), a.hasSubgroups)
          s = s.concat(q(a.items));
        else
          for (n = a.items, i = 0; n.length > i; i++)
            s.push(n.at(i));
      return s;
    }
    function D(e, t) {
      var r,
          n,
          i;
      if (t)
        for (r = 0, n = e.length; n > r; r++)
          i = e.at(r), i.hasSubgroups ? D(i.items, t) : i.items = new U(i.items, t);
    }
    function C(e, t) {
      for (var r = 0,
          n = e.length; n > r; r++)
        if (e[r].hasSubgroups) {
          if (C(e[r].items, t))
            return !0;
        } else if (t(e[r].items, e[r]))
          return !0;
    }
    function O(e, t, r, n) {
      for (var i = 0; e.length > i && e[i].data !== t && !z(e[i].data, r, n); i++)
        ;
    }
    function z(e, t, r) {
      for (var n = 0,
          i = e.length; i > n; n++) {
        if (e[n] && e[n].hasSubgroups)
          return z(e[n].items, t, r);
        if (e[n] === t || e[n] === r)
          return e[n] = r, !0;
      }
    }
    function R(e, r, n, i, a) {
      var s,
          o,
          u,
          l;
      for (s = 0, o = e.length; o > s; s++)
        if (u = e[s], u && !(u instanceof i))
          if (u.hasSubgroups === t || a) {
            for (l = 0; r.length > l; l++)
              if (r[l] === u) {
                e[s] = r.at(l), O(n, r, u, e[s]);
                break;
              }
          } else
            R(u.items, r, n, i, a);
    }
    function P(e, t) {
      var r,
          n,
          i;
      for (r = 0, n = e.length; n > r; r++)
        if (i = e.at(r), i.uid == t.uid)
          return e.splice(r, 1), i;
    }
    function T(e, t) {
      return t ? A(e, function(e) {
        return e.uid && e.uid == t.uid || e[t.idField] === t.id && t.id !== t._defaultId;
      }) : -1;
    }
    function F(e, t) {
      return t ? A(e, function(e) {
        return e.uid == t.uid;
      }) : -1;
    }
    function A(e, t) {
      var r,
          n;
      for (r = 0, n = e.length; n > r; r++)
        if (t(e[r]))
          return r;
      return -1;
    }
    function I(e, t) {
      var r,
          n;
      return e && !fe(e) ? (r = e[t], n = he(r) ? r.from || r.field || t : e[t] || t, ye(n) ? t : n) : t;
    }
    function N(e, t) {
      var r,
          n,
          i,
          a = {};
      for (i in e)
        "filters" !== i && (a[i] = e[i]);
      if (e.filters)
        for (a.filters = [], r = 0, n = e.filters.length; n > r; r++)
          a.filters[r] = N(e.filters[r], t);
      else
        a.field = I(t.fields, a.field);
      return a;
    }
    function M(e, t) {
      var r,
          n,
          i,
          a,
          s,
          o = [];
      for (r = 0, n = e.length; n > r; r++) {
        i = {}, a = e[r];
        for (s in a)
          i[s] = a[s];
        i.field = I(t.fields, i.field), i.aggregates && ce(i.aggregates) && (i.aggregates = M(i.aggregates, t)), o.push(i);
      }
      return o;
    }
    function j(t, r) {
      var n,
          i,
          a,
          s,
          o,
          u,
          l,
          d,
          h,
          f;
      for (t = e(t)[0], n = t.options, i = r[0], a = r[1], s = [], o = 0, u = n.length; u > o; o++)
        h = {}, d = n[o], l = d.parentNode, l === t && (l = null), d.disabled || l && l.disabled || (l && (h.optgroup = l.label), h[i.field] = d.text, f = d.attributes.value, f = f && f.specified ? d.value : d.text, h[a.field] = f, s.push(h));
      return s;
    }
    function L(t, r) {
      var n,
          i,
          a,
          s,
          o,
          u,
          l,
          d = e(t)[0].tBodies[0],
          h = d ? d.rows : [],
          f = r.length,
          c = [];
      for (n = 0, i = h.length; i > n; n++) {
        for (o = {}, l = !0, s = h[n].cells, a = 0; f > a; a++)
          u = s[a], "th" !== u.nodeName.toLowerCase() && (l = !1, o[r[a].field] = u.innerHTML);
        l || c.push(o);
      }
      return c;
    }
    function G(e) {
      return function() {
        var t = this._data,
            r = ne.fn[e].apply(this, Je.call(arguments));
        return this._data != t && this._attachBubbleHandlers(), r;
      };
    }
    function E(t, r) {
      function n(e, t) {
        return e.filter(t).add(e.find(t));
      }
      var i,
          a,
          s,
          o,
          u,
          l,
          d,
          h,
          f = e(t).children(),
          c = [],
          g = r[0].field,
          p = r[1] && r[1].field,
          _ = r[2] && r[2].field,
          v = r[3] && r[3].field;
      for (i = 0, a = f.length; a > i; i++)
        s = {_loaded: !0}, o = f.eq(i), l = o[0].firstChild, h = o.children(), t = h.filter("ul"), h = h.filter(":not(ul)"), u = o.attr("data-id"), u && (s.id = u), l && (s[g] = 3 == l.nodeType ? l.nodeValue : h.text()), p && (s[p] = n(h, "a").attr("href")), v && (s[v] = n(h, "img").attr("src")), _ && (d = n(h, ".k-sprite").prop("className"), s[_] = d && e.trim(d.replace("k-sprite", ""))), t.length && (s.items = E(t.eq(0), r)), "true" == o.attr("data-hasChildren") && (s.hasChildren = !0), c.push(s);
      return c;
    }
    var B,
        U,
        H,
        J,
        V,
        W,
        Q,
        K,
        $,
        X,
        Y,
        Z,
        ee,
        te,
        re,
        ne,
        ie,
        ae,
        se,
        oe,
        ue,
        le = e.extend,
        de = e.proxy,
        he = e.isPlainObject,
        fe = e.isEmptyObject,
        ce = e.isArray,
        ge = e.grep,
        pe = e.ajax,
        _e = e.each,
        ve = e.noop,
        me = window.kendo,
        ye = me.isFunction,
        Se = me.Observable,
        be = me.Class,
        we = "string",
        ke = "function",
        xe = "create",
        qe = "read",
        De = "update",
        Ce = "destroy",
        Oe = "change",
        ze = "sync",
        Re = "get",
        Pe = "error",
        Te = "requestStart",
        Fe = "progress",
        Ae = "requestEnd",
        Ie = [xe, qe, De, Ce],
        Ne = function(e) {
          return e;
        },
        Me = me.getter,
        je = me.stringify,
        Le = Math,
        Ge = [].push,
        Ee = [].join,
        Be = [].pop,
        Ue = [].splice,
        He = [].shift,
        Je = [].slice,
        Ve = [].unshift,
        We = {}.toString,
        Qe = me.support.stableSort,
        Ke = /^\/Date\((.*?)\)\/$/,
        $e = /(\r+|\n+)/g,
        Xe = /(?=['\\])/g,
        Ye = Se.extend({
          init: function(e, t) {
            var r = this;
            r.type = t || H, Se.fn.init.call(r), r.length = e.length, r.wrapAll(e, r);
          },
          at: function(e) {
            return this[e];
          },
          toJSON: function() {
            var e,
                t,
                r = this.length,
                n = Array(r);
            for (e = 0; r > e; e++)
              t = this[e], t instanceof H && (t = t.toJSON()), n[e] = t;
            return n;
          },
          parent: ve,
          wrapAll: function(e, t) {
            var r,
                n,
                i = this,
                a = function() {
                  return i;
                };
            for (t = t || [], r = 0, n = e.length; n > r; r++)
              t[r] = i.wrap(e[r], a);
            return t;
          },
          wrap: function(e, t) {
            var r,
                n = this;
            return null !== e && "[object Object]" === We.call(e) && (r = e instanceof n.type || e instanceof W, r || (e = e instanceof H ? e.toJSON() : e, e = new n.type(e)), e.parent = t, e.bind(Oe, function(e) {
              n.trigger(Oe, {
                field: e.field,
                node: e.node,
                index: e.index,
                items: e.items || [this],
                action: e.node ? e.action || "itemloaded" : "itemchange"
              });
            })), e;
          },
          push: function() {
            var e,
                t = this.length,
                r = this.wrapAll(arguments);
            return e = Ge.apply(this, r), this.trigger(Oe, {
              action: "add",
              index: t,
              items: r
            }), e;
          },
          slice: Je,
          sort: [].sort,
          join: Ee,
          pop: function() {
            var e = this.length,
                t = Be.apply(this);
            return e && this.trigger(Oe, {
              action: "remove",
              index: e - 1,
              items: [t]
            }), t;
          },
          splice: function(e, t, r) {
            var n,
                i,
                a,
                s = this.wrapAll(Je.call(arguments, 2));
            if (n = Ue.apply(this, [e, t].concat(s)), n.length)
              for (this.trigger(Oe, {
                action: "remove",
                index: e,
                items: n
              }), i = 0, a = n.length; a > i; i++)
                n[i] && n[i].children && n[i].unbind(Oe);
            return r && this.trigger(Oe, {
              action: "add",
              index: e,
              items: s
            }), n;
          },
          shift: function() {
            var e = this.length,
                t = He.apply(this);
            return e && this.trigger(Oe, {
              action: "remove",
              index: 0,
              items: [t]
            }), t;
          },
          unshift: function() {
            var e,
                t = this.wrapAll(arguments);
            return e = Ve.apply(this, t), this.trigger(Oe, {
              action: "add",
              index: 0,
              items: t
            }), e;
          },
          indexOf: function(e) {
            var t,
                r,
                n = this;
            for (t = 0, r = n.length; r > t; t++)
              if (n[t] === e)
                return t;
            return -1;
          },
          forEach: function(e) {
            for (var t = 0,
                r = this.length; r > t; t++)
              e(this[t], t, this);
          },
          map: function(e) {
            for (var t = 0,
                r = [],
                n = this.length; n > t; t++)
              r[t] = e(this[t], t, this);
            return r;
          },
          reduce: function(e) {
            var t,
                r = 0,
                n = this.length;
            for (2 == arguments.length ? t = arguments[1] : n > r && (t = this[r++]); n > r; r++)
              t = e(t, this[r], r, this);
            return t;
          },
          reduceRight: function(e) {
            var t,
                r = this.length - 1;
            for (2 == arguments.length ? t = arguments[1] : r > 0 && (t = this[r--]); r >= 0; r--)
              t = e(t, this[r], r, this);
            return t;
          },
          filter: function(e) {
            for (var t,
                r = 0,
                n = [],
                i = this.length; i > r; r++)
              t = this[r], e(t, r, this) && (n[n.length] = t);
            return n;
          },
          find: function(e) {
            for (var t,
                r = 0,
                n = this.length; n > r; r++)
              if (t = this[r], e(t, r, this))
                return t;
          },
          every: function(e) {
            for (var t,
                r = 0,
                n = this.length; n > r; r++)
              if (t = this[r], !e(t, r, this))
                return !1;
            return !0;
          },
          some: function(e) {
            for (var t,
                r = 0,
                n = this.length; n > r; r++)
              if (t = this[r], e(t, r, this))
                return !0;
            return !1;
          },
          remove: function(e) {
            var t = this.indexOf(e);
            -1 !== t && this.splice(t, 1);
          },
          empty: function() {
            this.splice(0, this.length);
          }
        });
    "undefined" != typeof Symbol && Symbol.iterator && !Ye.prototype[Symbol.iterator] && (Ye.prototype[Symbol.iterator] = [][Symbol.iterator]), U = Ye.extend({
      init: function(e, t) {
        Se.fn.init.call(this), this.type = t || H;
        for (var r = 0; e.length > r; r++)
          this[r] = e[r];
        this.length = r, this._parent = de(function() {
          return this;
        }, this);
      },
      at: function(e) {
        var t = this[e];
        return t instanceof this.type ? t.parent = this._parent : t = this[e] = this.wrap(t, this._parent), t;
      }
    }), H = Se.extend({
      init: function(e) {
        var t,
            r,
            n = this,
            i = function() {
              return n;
            };
        Se.fn.init.call(this), this._handlers = {};
        for (r in e)
          t = e[r], "object" == typeof t && t && !t.getTime && "_" != r.charAt(0) && (t = n.wrap(t, r, i)), n[r] = t;
        n.uid = me.guid();
      },
      shouldSerialize: function(e) {
        return this.hasOwnProperty(e) && "_handlers" !== e && "_events" !== e && typeof this[e] !== ke && "uid" !== e;
      },
      forEach: function(e) {
        for (var t in this)
          this.shouldSerialize(t) && e(this[t], t);
      },
      toJSON: function() {
        var e,
            t,
            r = {};
        for (t in this)
          this.shouldSerialize(t) && (e = this[t], (e instanceof H || e instanceof Ye) && (e = e.toJSON()), r[t] = e);
        return r;
      },
      get: function(e) {
        var t,
            r = this;
        return r.trigger(Re, {field: e}), t = "this" === e ? r : me.getter(e, !0)(r);
      },
      _set: function(e, t) {
        var r,
            n,
            i,
            a = this,
            s = e.indexOf(".") >= 0;
        if (s)
          for (r = e.split("."), n = ""; r.length > 1; ) {
            if (n += r.shift(), i = me.getter(n, !0)(a), i instanceof H)
              return i.set(r.join("."), t), s;
            n += ".";
          }
        return me.setter(e)(a, t), s;
      },
      set: function(e, t) {
        var r = this,
            n = !1,
            i = e.indexOf(".") >= 0,
            a = me.getter(e, !0)(r);
        return a !== t && (a instanceof Se && this._handlers[e] && (this._handlers[e].get && a.unbind(Re, this._handlers[e].get), a.unbind(Oe, this._handlers[e].change)), n = r.trigger("set", {
          field: e,
          value: t
        }), n || (i || (t = r.wrap(t, e, function() {
          return r;
        })), (!r._set(e, t) || e.indexOf("(") >= 0 || e.indexOf("[") >= 0) && r.trigger(Oe, {field: e}))), n;
      },
      parent: ve,
      wrap: function(e, t, n) {
        var i,
            a,
            s,
            o,
            u = this,
            l = We.call(e);
        return null == e || "[object Object]" !== l && "[object Array]" !== l || (s = e instanceof Ye, o = e instanceof ne, "[object Object]" !== l || o || s ? ("[object Array]" === l || s || o) && (s || o || (e = new Ye(e)), a = r(u, Oe, t, !1), e.bind(Oe, a), u._handlers[t] = {change: a}) : (e instanceof H || (e = new H(e)), i = r(u, Re, t, !0), e.bind(Re, i), a = r(u, Oe, t, !0), e.bind(Oe, a), u._handlers[t] = {
          get: i,
          change: a
        }), e.parent = n), e;
      }
    }), J = {
      number: function(e) {
        return me.parseFloat(e);
      },
      date: function(e) {
        return me.parseDate(e);
      },
      "boolean": function(e) {
        return typeof e === we ? "true" === e.toLowerCase() : null != e ? !!e : e;
      },
      string: function(e) {
        return null != e ? e + "" : e;
      },
      "default": function(e) {
        return e;
      }
    }, V = {
      string: "",
      number: 0,
      date: new Date,
      "boolean": !1,
      "default": ""
    }, W = H.extend({
      init: function(r) {
        var n,
            i,
            a = this;
        if ((!r || e.isEmptyObject(r)) && (r = e.extend({}, a.defaults, r), a._initializers))
          for (n = 0; a._initializers.length > n; n++)
            i = a._initializers[n], r[i] = a.defaults[i]();
        H.fn.init.call(a, r), a.dirty = !1, a.idField && (a.id = a.get(a.idField), a.id === t && (a.id = a._defaultId));
      },
      shouldSerialize: function(e) {
        return H.fn.shouldSerialize.call(this, e) && "uid" !== e && !("id" !== this.idField && "id" === e) && "dirty" !== e && "_accessors" !== e;
      },
      _parse: function(e, t) {
        var r,
            n = this,
            a = e,
            s = n.fields || {};
        return e = s[e], e || (e = i(s, a)), e && (r = e.parse, !r && e.type && (r = J[e.type.toLowerCase()])), r ? r(t) : t;
      },
      _notifyChange: function(e) {
        var t = e.action;
        ("add" == t || "remove" == t) && (this.dirty = !0);
      },
      editable: function(e) {
        return e = (this.fields || {})[e], e ? e.editable !== !1 : !0;
      },
      set: function(e, t, r) {
        var i = this,
            a = i.dirty;
        i.editable(e) && (t = i._parse(e, t), n(t, i.get(e)) || (i.dirty = !0, H.fn.set.call(i, e, t, r) && !a && (i.dirty = a)));
      },
      accept: function(e) {
        var t,
            r,
            n = this,
            i = function() {
              return n;
            };
        for (t in e)
          r = e[t], "_" != t.charAt(0) && (r = n.wrap(e[t], t, i)), n._set(t, r);
        n.idField && (n.id = n.get(n.idField)), n.dirty = !1;
      },
      isNew: function() {
        return this.id === this._defaultId;
      }
    }), W.define = function(e, r) {
      r === t && (r = e, e = W);
      var n,
          i,
          a,
          s,
          o,
          u,
          l,
          d,
          h = le({defaults: {}}, r),
          f = {},
          c = h.id,
          g = [];
      if (c && (h.idField = c), h.id && delete h.id, c && (h.defaults[c] = h._defaultId = ""), "[object Array]" === We.call(h.fields)) {
        for (u = 0, l = h.fields.length; l > u; u++)
          a = h.fields[u], typeof a === we ? f[a] = {} : a.field && (f[a.field] = a);
        h.fields = f;
      }
      for (i in h.fields)
        a = h.fields[i], s = a.type || "default", o = null, d = i, i = typeof a.field === we ? a.field : i, a.nullable || (o = h.defaults[d !== i ? d : i] = a.defaultValue !== t ? a.defaultValue : V[s.toLowerCase()], "function" == typeof o && g.push(i)), r.id === i && (h._defaultId = o), h.defaults[d !== i ? d : i] = o, a.parse = a.parse || J[s];
      return g.length > 0 && (h._initializers = g), n = e.extend(h), n.define = function(e) {
        return W.define(n, e);
      }, h.fields && (n.fields = h.fields, n.idField = h.idField), n;
    }, Q = {
      selector: function(e) {
        return ye(e) ? e : Me(e);
      },
      compare: function(e) {
        var t = this.selector(e);
        return function(e, r) {
          return e = t(e), r = t(r), null == e && null == r ? 0 : null == e ? -1 : null == r ? 1 : e.localeCompare ? e.localeCompare(r) : e > r ? 1 : r > e ? -1 : 0;
        };
      },
      create: function(e) {
        var t = e.compare || this.compare(e.field);
        return "desc" == e.dir ? function(e, r) {
          return t(r, e, !0);
        } : t;
      },
      combine: function(e) {
        return function(t, r) {
          var n,
              i,
              a = e[0](t, r);
          for (n = 1, i = e.length; i > n; n++)
            a = a || e[n](t, r);
          return a;
        };
      }
    }, K = le({}, Q, {
      asc: function(e) {
        var t = this.selector(e);
        return function(e, r) {
          var n = t(e),
              i = t(r);
          return n && n.getTime && i && i.getTime && (n = n.getTime(), i = i.getTime()), n === i ? e.__position - r.__position : null == n ? -1 : null == i ? 1 : n.localeCompare ? n.localeCompare(i) : n > i ? 1 : -1;
        };
      },
      desc: function(e) {
        var t = this.selector(e);
        return function(e, r) {
          var n = t(e),
              i = t(r);
          return n && n.getTime && i && i.getTime && (n = n.getTime(), i = i.getTime()), n === i ? e.__position - r.__position : null == n ? 1 : null == i ? -1 : i.localeCompare ? i.localeCompare(n) : i > n ? 1 : -1;
        };
      },
      create: function(e) {
        return this[e.dir](e.field);
      }
    }), B = function(e, t) {
      var r,
          n = e.length,
          i = Array(n);
      for (r = 0; n > r; r++)
        i[r] = t(e[r], r, e);
      return i;
    }, $ = function() {
      function e(e) {
        return e.replace(Xe, "\\").replace($e, "");
      }
      function t(t, r, n, i) {
        var a;
        return null != n && (typeof n === we && (n = e(n), a = Ke.exec(n), a ? n = new Date(+a[1]) : i ? (n = "'" + n.toLowerCase() + "'", r = "((" + r + " || '')+'').toLowerCase()") : n = "'" + n + "'"), n.getTime && (r = "(" + r + "&&" + r + ".getTime?" + r + ".getTime():" + r + ")", n = n.getTime())), r + " " + t + " " + n;
      }
      return {
        quote: function(t) {
          return t && t.getTime ? "new Date(" + t.getTime() + ")" : "string" == typeof t ? "'" + e(t) + "'" : "" + t;
        },
        eq: function(e, r, n) {
          return t("==", e, r, n);
        },
        neq: function(e, r, n) {
          return t("!=", e, r, n);
        },
        gt: function(e, r, n) {
          return t(">", e, r, n);
        },
        gte: function(e, r, n) {
          return t(">=", e, r, n);
        },
        lt: function(e, r, n) {
          return t("<", e, r, n);
        },
        lte: function(e, r, n) {
          return t("<=", e, r, n);
        },
        startswith: function(t, r, n) {
          return n && (t = "(" + t + " || '').toLowerCase()", r && (r = r.toLowerCase())), r && (r = e(r)), t + ".lastIndexOf('" + r + "', 0) == 0";
        },
        doesnotstartwith: function(t, r, n) {
          return n && (t = "(" + t + " || '').toLowerCase()", r && (r = r.toLowerCase())), r && (r = e(r)), t + ".lastIndexOf('" + r + "', 0) == -1";
        },
        endswith: function(t, r, n) {
          return n && (t = "(" + t + " || '').toLowerCase()", r && (r = r.toLowerCase())), r && (r = e(r)), t + ".indexOf('" + r + "', " + t + ".length - " + (r || "").length + ") >= 0";
        },
        doesnotendwith: function(t, r, n) {
          return n && (t = "(" + t + " || '').toLowerCase()", r && (r = r.toLowerCase())), r && (r = e(r)), t + ".indexOf('" + r + "', " + t + ".length - " + (r || "").length + ") < 0";
        },
        contains: function(t, r, n) {
          return n && (t = "(" + t + " || '').toLowerCase()", r && (r = r.toLowerCase())), r && (r = e(r)), t + ".indexOf('" + r + "') >= 0";
        },
        doesnotcontain: function(t, r, n) {
          return n && (t = "(" + t + " || '').toLowerCase()", r && (r = r.toLowerCase())), r && (r = e(r)), t + ".indexOf('" + r + "') == -1";
        },
        isempty: function(e) {
          return e + " === ''";
        },
        isnotempty: function(e) {
          return e + " !== ''";
        },
        isnull: function(e) {
          return "(" + e + " === null || " + e + " === undefined)";
        },
        isnotnull: function(e) {
          return "(" + e + " !== null && " + e + " !== undefined)";
        }
      };
    }(), a.filterExpr = function(e) {
      var r,
          n,
          i,
          s,
          o,
          u,
          l = [],
          d = {
            and: " && ",
            or: " || "
          },
          h = [],
          f = [],
          c = e.filters;
      for (r = 0, n = c.length; n > r; r++)
        i = c[r], o = i.field, u = i.operator, i.filters ? (s = a.filterExpr(i), i = s.expression.replace(/__o\[(\d+)\]/g, function(e, t) {
          return t = +t, "__o[" + (f.length + t) + "]";
        }).replace(/__f\[(\d+)\]/g, function(e, t) {
          return t = +t, "__f[" + (h.length + t) + "]";
        }), f.push.apply(f, s.operators), h.push.apply(h, s.fields)) : (typeof o === ke ? (s = "__f[" + h.length + "](d)", h.push(o)) : s = me.expr(o), typeof u === ke ? (i = "__o[" + f.length + "](" + s + ", " + $.quote(i.value) + ")", f.push(u)) : i = $[(u || "eq").toLowerCase()](s, i.value, i.ignoreCase !== t ? i.ignoreCase : !0)), l.push(i);
      return {
        expression: "(" + l.join(d[e.logic]) + ")",
        fields: h,
        operators: f
      };
    }, X = {
      "==": "eq",
      equals: "eq",
      isequalto: "eq",
      equalto: "eq",
      equal: "eq",
      "!=": "neq",
      ne: "neq",
      notequals: "neq",
      isnotequalto: "neq",
      notequalto: "neq",
      notequal: "neq",
      "<": "lt",
      islessthan: "lt",
      lessthan: "lt",
      less: "lt",
      "<=": "lte",
      le: "lte",
      islessthanorequalto: "lte",
      lessthanequal: "lte",
      ">": "gt",
      isgreaterthan: "gt",
      greaterthan: "gt",
      greater: "gt",
      ">=": "gte",
      isgreaterthanorequalto: "gte",
      greaterthanequal: "gte",
      ge: "gte",
      notsubstringof: "doesnotcontain",
      isnull: "isnull",
      isempty: "isempty",
      isnotempty: "isnotempty"
    }, a.normalizeFilter = u, a.compareFilters = f, a.prototype = {
      toArray: function() {
        return this.data;
      },
      range: function(e, t) {
        return new a(this.data.slice(e, e + t));
      },
      skip: function(e) {
        return new a(this.data.slice(e));
      },
      take: function(e) {
        return new a(this.data.slice(0, e));
      },
      select: function(e) {
        return new a(B(this.data, e));
      },
      order: function(e, t) {
        var r = {dir: t};
        return e && (e.compare ? r.compare = e.compare : r.field = e), new a(this.data.slice(0).sort(Q.create(r)));
      },
      orderBy: function(e) {
        return this.order(e, "asc");
      },
      orderByDescending: function(e) {
        return this.order(e, "desc");
      },
      sort: function(e, t, r) {
        var n,
            i,
            a = s(e, t),
            o = [];
        if (r = r || Q, a.length) {
          for (n = 0, i = a.length; i > n; n++)
            o.push(r.create(a[n]));
          return this.orderBy({compare: r.combine(o)});
        }
        return this;
      },
      filter: function(e) {
        var t,
            r,
            n,
            i,
            s,
            o,
            l,
            d,
            h = this.data,
            f = [];
        if (e = u(e), !e || 0 === e.filters.length)
          return this;
        for (i = a.filterExpr(e), o = i.fields, l = i.operators, s = d = Function("d, __f, __o", "return " + i.expression), (o.length || l.length) && (d = function(e) {
          return s(e, o, l);
        }), t = 0, n = h.length; n > t; t++)
          r = h[t], d(r) && f.push(r);
        return new a(f);
      },
      group: function(e, t) {
        e = g(e || []), t = t || this.data;
        var r,
            n = this,
            i = new a(n.data);
        return e.length > 0 && (r = e[0], i = i.groupBy(r).select(function(n) {
          var i = new a(t).filter([{
            field: n.field,
            operator: "eq",
            value: n.value,
            ignoreCase: !1
          }]);
          return {
            field: n.field,
            value: n.value,
            items: e.length > 1 ? new a(n.items).group(e.slice(1), i.toArray()).toArray() : n.items,
            hasSubgroups: e.length > 1,
            aggregates: i.aggregate(r.aggregates)
          };
        })), i;
      },
      groupBy: function(e) {
        if (fe(e) || !this.data.length)
          return new a([]);
        var t,
            r,
            n,
            i,
            s = e.field,
            o = this._sortForGrouping(s, e.dir || "asc"),
            u = me.accessor(s),
            l = u.get(o[0], s),
            d = {
              field: s,
              value: l,
              items: []
            },
            h = [d];
        for (n = 0, i = o.length; i > n; n++)
          t = o[n], r = u.get(t, s), p(l, r) || (l = r, d = {
            field: s,
            value: l,
            items: []
          }, h.push(d)), d.items.push(t);
        return new a(h);
      },
      _sortForGrouping: function(e, t) {
        var r,
            n,
            i = this.data;
        if (!Qe) {
          for (r = 0, n = i.length; n > r; r++)
            i[r].__position = r;
          for (i = new a(i).sort(e, t, K).toArray(), r = 0, n = i.length; n > r; r++)
            delete i[r].__position;
          return i;
        }
        return this.sort(e, t).toArray();
      },
      aggregate: function(e) {
        var t,
            r,
            n = {},
            i = {};
        if (e && e.length)
          for (t = 0, r = this.data.length; r > t; t++)
            _(n, e, this.data[t], t, r, i);
        return n;
      }
    }, Y = {
      sum: function(e, t, r) {
        var n = r.get(t);
        return v(e) ? v(n) && (e += n) : e = n, e;
      },
      count: function(e) {
        return (e || 0) + 1;
      },
      average: function(e, r, n, i, a, s) {
        var o = n.get(r);
        return s.count === t && (s.count = 0), v(e) ? v(o) && (e += o) : e = o, v(o) && s.count++, i == a - 1 && v(e) && (e /= s.count), e;
      },
      max: function(e, t, r) {
        var n = r.get(t);
        return v(e) || m(e) || (e = n), n > e && (v(n) || m(n)) && (e = n), e;
      },
      min: function(e, t, r) {
        var n = r.get(t);
        return v(e) || m(e) || (e = n), e > n && (v(n) || m(n)) && (e = n), e;
      }
    }, a.process = function(e, r) {
      r = r || {};
      var n,
          i = new a(e),
          o = r.group,
          u = g(o || []).concat(s(r.sort || [])),
          l = r.filterCallback,
          d = r.filter,
          h = r.skip,
          f = r.take;
      return d && (i = i.filter(d), l && (i = l(i)), n = i.toArray().length), u && (i = i.sort(u), o && (e = i.toArray())), h !== t && f !== t && (i = i.range(h, f)), o && (i = i.group(o, e)), {
        total: n,
        data: i.toArray()
      };
    }, Z = be.extend({
      init: function(e) {
        this.data = e.data;
      },
      read: function(e) {
        e.success(this.data);
      },
      update: function(e) {
        e.success(e.data);
      },
      create: function(e) {
        e.success(e.data);
      },
      destroy: function(e) {
        e.success(e.data);
      }
    }), ee = be.extend({
      init: function(e) {
        var t,
            r = this;
        e = r.options = le({}, r.options, e), _e(Ie, function(t, r) {
          typeof e[r] === we && (e[r] = {url: e[r]});
        }), r.cache = e.cache ? te.create(e.cache) : {
          find: ve,
          add: ve
        }, t = e.parameterMap, ye(e.push) && (r.push = e.push), r.push || (r.push = Ne), r.parameterMap = ye(t) ? t : function(e) {
          var r = {};
          return _e(e, function(e, n) {
            e in t && (e = t[e], he(e) && (n = e.value(n), e = e.key)), r[e] = n;
          }), r;
        };
      },
      options: {parameterMap: Ne},
      create: function(e) {
        return pe(this.setup(e, xe));
      },
      read: function(r) {
        var n,
            i,
            a,
            s = this,
            o = s.cache;
        r = s.setup(r, qe), n = r.success || ve, i = r.error || ve, a = o.find(r.data), a !== t ? n(a) : (r.success = function(e) {
          o.add(r.data, e), n(e);
        }, e.ajax(r));
      },
      update: function(e) {
        return pe(this.setup(e, De));
      },
      destroy: function(e) {
        return pe(this.setup(e, Ce));
      },
      setup: function(e, t) {
        e = e || {};
        var r,
            n = this,
            i = n.options[t],
            a = ye(i.data) ? i.data(e.data) : i.data;
        return e = le(!0, {}, i, e), r = le(!0, {}, a, e.data), e.data = n.parameterMap(r, t), ye(e.url) && (e.url = e.url(r)), e;
      }
    }), te = be.extend({
      init: function() {
        this._store = {};
      },
      add: function(e, r) {
        e !== t && (this._store[je(e)] = r);
      },
      find: function(e) {
        return this._store[je(e)];
      },
      clear: function() {
        this._store = {};
      },
      remove: function(e) {
        delete this._store[je(e)];
      }
    }), te.create = function(e) {
      var t = {inmemory: function() {
          return new te;
        }};
      return he(e) && ye(e.find) ? e : e === !0 ? new te : t[e]();
    }, re = be.extend({
      init: function(e) {
        var t,
            r,
            n,
            i,
            a,
            s,
            o,
            u,
            l,
            d,
            h,
            f,
            c,
            g = this;
        e = e || {};
        for (t in e)
          r = e[t], g[t] = typeof r === we ? Me(r) : r;
        i = e.modelBase || W, he(g.model) && (g.model = n = i.define(g.model)), a = de(g.data, g), g._dataAccessFunction = a, g.model && (s = de(g.groups, g), o = de(g.serialize, g), u = {}, l = {}, d = {}, h = {}, f = !1, n = g.model, n.fields && (_e(n.fields, function(e, t) {
          var r;
          c = e, he(t) && t.field ? c = t.field : typeof t === we && (c = t), he(t) && t.from && (r = t.from), f = f || r && r !== e || c !== e, l[e] = Me(r || c), d[e] = Me(e), u[r || c] = e, h[e] = r || c;
        }), !e.serialize && f && (g.serialize = k(o, n, S, d, u, h))), g._dataAccessFunction = a, g.data = k(a, n, b, l, u, h), g.groups = k(s, n, w, l, u, h));
      },
      errors: function(e) {
        return e ? e.errors : null;
      },
      parse: Ne,
      data: Ne,
      total: function(e) {
        return e.length;
      },
      groups: Ne,
      aggregates: function() {
        return {};
      },
      serialize: function(e) {
        return e;
      }
    }), ne = Se.extend({
      init: function(e) {
        var r,
            n,
            i,
            a = this;
        e && (n = e.data), e = a.options = le({}, a.options, e), a._map = {}, a._prefetch = {}, a._data = [], a._pristineData = [], a._ranges = [], a._view = [], a._pristineTotal = 0, a._destroyed = [], a._pageSize = e.pageSize, a._page = e.page || (e.pageSize ? 1 : t), a._sort = s(e.sort), a._filter = u(e.filter), a._group = g(e.group), a._aggregate = e.aggregate, a._total = e.total, a._shouldDetachObservableParents = !0, Se.fn.init.call(a), a.transport = ie.create(e, n, a), ye(a.transport.push) && a.transport.push({
          pushCreate: de(a._pushCreate, a),
          pushUpdate: de(a._pushUpdate, a),
          pushDestroy: de(a._pushDestroy, a)
        }), null != e.offlineStorage && ("string" == typeof e.offlineStorage ? (i = e.offlineStorage, a._storage = {
          getItem: function() {
            return JSON.parse(localStorage.getItem(i));
          },
          setItem: function(e) {
            localStorage.setItem(i, je(a.reader.serialize(e)));
          }
        }) : a._storage = e.offlineStorage), a.reader = new me.data.readers[e.schema.type || "json"](e.schema), r = a.reader.model || {}, a._detachObservableParents(), a._data = a._observe(a._data), a._online = !0, a.bind(["push", Pe, Oe, Te, ze, Ae, Fe], e);
      },
      options: {
        data: null,
        schema: {modelBase: W},
        offlineStorage: null,
        serverSorting: !1,
        serverPaging: !1,
        serverFiltering: !1,
        serverGrouping: !1,
        serverAggregates: !1,
        batch: !1
      },
      clone: function() {
        return this;
      },
      online: function(r) {
        return r !== t ? this._online != r && (this._online = r, r) ? this.sync() : e.Deferred().resolve().promise() : this._online;
      },
      offlineData: function(e) {
        return null == this.options.offlineStorage ? null : e !== t ? this._storage.setItem(e) : this._storage.getItem() || [];
      },
      _isServerGrouped: function() {
        var e = this.group() || [];
        return this.options.serverGrouping && e.length;
      },
      _pushCreate: function(e) {
        this._push(e, "pushCreate");
      },
      _pushUpdate: function(e) {
        this._push(e, "pushUpdate");
      },
      _pushDestroy: function(e) {
        this._push(e, "pushDestroy");
      },
      _push: function(e, t) {
        var r = this._readData(e);
        r || (r = e), this[t](r);
      },
      _flatData: function(e, t) {
        if (e) {
          if (this._isServerGrouped())
            return q(e);
          if (!t)
            for (var r = 0; e.length > r; r++)
              e.at(r);
        }
        return e;
      },
      parent: ve,
      get: function(e) {
        var t,
            r,
            n = this._flatData(this._data);
        for (t = 0, r = n.length; r > t; t++)
          if (n[t].id == e)
            return n[t];
      },
      getByUid: function(e) {
        var t,
            r,
            n = this._flatData(this._data);
        if (n)
          for (t = 0, r = n.length; r > t; t++)
            if (n[t].uid == e)
              return n[t];
      },
      indexOf: function(e) {
        return F(this._data, e);
      },
      at: function(e) {
        return this._data.at(e);
      },
      data: function(e) {
        var r,
            n = this;
        if (e === t) {
          if (n._data)
            for (r = 0; n._data.length > r; r++)
              n._data.at(r);
          return n._data;
        }
        n._detachObservableParents(), n._data = this._observe(e), n._pristineData = e.slice(0), n._storeData(), n._ranges = [], n.trigger("reset"), n._addRange(n._data), n._total = n._data.length, n._pristineTotal = n._total, n._process(n._data);
      },
      view: function(e) {
        return e === t ? this._view : (this._view = this._observeView(e), t);
      },
      _observeView: function(e) {
        var t,
            r = this;
        return R(e, r._data, r._ranges, r.reader.model || H, r._isServerGrouped()), t = new U(e, r.reader.model), t.parent = function() {
          return r.parent();
        }, t;
      },
      flatView: function() {
        var e = this.group() || [];
        return e.length ? q(this._view) : this._view;
      },
      add: function(e) {
        return this.insert(this._data.length, e);
      },
      _createNewModel: function(e) {
        return this.reader.model ? new this.reader.model(e) : e instanceof H ? e : new H(e);
      },
      insert: function(e, t) {
        return t || (t = e, e = 0), t instanceof W || (t = this._createNewModel(t)), this._isServerGrouped() ? this._data.splice(e, 0, this._wrapInEmptyGroup(t)) : this._data.splice(e, 0, t), t;
      },
      pushCreate: function(e) {
        var t,
            r,
            n,
            i,
            a,
            s;
        ce(e) || (e = [e]), t = [], r = this.options.autoSync, this.options.autoSync = !1;
        try {
          for (n = 0; e.length > n; n++)
            i = e[n], a = this.add(i), t.push(a), s = a.toJSON(), this._isServerGrouped() && (s = this._wrapInEmptyGroup(s)), this._pristineData.push(s);
        } finally {
          this.options.autoSync = r;
        }
        t.length && this.trigger("push", {
          type: "create",
          items: t
        });
      },
      pushUpdate: function(e) {
        var t,
            r,
            n,
            i,
            a;
        for (ce(e) || (e = [e]), t = [], r = 0; e.length > r; r++)
          n = e[r], i = this._createNewModel(n), a = this.get(i.id), a ? (t.push(a), a.accept(n), a.trigger(Oe), this._updatePristineForModel(a, n)) : this.pushCreate(n);
        t.length && this.trigger("push", {
          type: "update",
          items: t
        });
      },
      pushDestroy: function(e) {
        var t = this._removeItems(e);
        t.length && this.trigger("push", {
          type: "destroy",
          items: t
        });
      },
      _removeItems: function(e) {
        var t,
            r,
            n,
            i,
            a,
            s;
        ce(e) || (e = [e]), t = [], r = this.options.autoSync, this.options.autoSync = !1;
        try {
          for (n = 0; e.length > n; n++)
            i = e[n], a = this._createNewModel(i), s = !1, this._eachItem(this._data, function(e) {
              var r,
                  n;
              for (r = 0; e.length > r; r++)
                if (n = e.at(r), n.id === a.id) {
                  t.push(n), e.splice(r, 1), s = !0;
                  break;
                }
            }), s && (this._removePristineForModel(a), this._destroyed.pop());
        } finally {
          this.options.autoSync = r;
        }
        return t;
      },
      remove: function(e) {
        var r,
            n = this,
            i = n._isServerGrouped();
        return this._eachItem(n._data, function(a) {
          return r = P(a, e), r && i ? (r.isNew && r.isNew() || n._destroyed.push(r), !0) : t;
        }), this._removeModelFromRanges(e), this._updateRangesLength(), e;
      },
      destroyed: function() {
        return this._destroyed;
      },
      created: function() {
        var e,
            t,
            r = [],
            n = this._flatData(this._data);
        for (e = 0, t = n.length; t > e; e++)
          n[e].isNew && n[e].isNew() && r.push(n[e]);
        return r;
      },
      updated: function() {
        var e,
            t,
            r = [],
            n = this._flatData(this._data);
        for (e = 0, t = n.length; t > e; e++)
          n[e].isNew && !n[e].isNew() && n[e].dirty && r.push(n[e]);
        return r;
      },
      sync: function() {
        var t,
            r = this,
            n = [],
            i = [],
            a = r._destroyed,
            s = e.Deferred().resolve().promise();
        if (r.online()) {
          if (!r.reader.model)
            return s;
          n = r.created(), i = r.updated(), t = [], r.options.batch && r.transport.submit ? t = r._sendSubmit(n, i, a) : (t.push.apply(t, r._send("create", n)), t.push.apply(t, r._send("update", i)), t.push.apply(t, r._send("destroy", a))), s = e.when.apply(null, t).then(function() {
            var e,
                t;
            for (e = 0, t = arguments.length; t > e; e++)
              r._accept(arguments[e]);
            r._storeData(!0), r._change({action: "sync"}), r.trigger(ze);
          });
        } else
          r._storeData(!0), r._change({action: "sync"});
        return s;
      },
      cancelChanges: function(e) {
        var t = this;
        e instanceof me.data.Model ? t._cancelModel(e) : (t._destroyed = [], t._detachObservableParents(), t._data = t._observe(t._pristineData), t.options.serverPaging && (t._total = t._pristineTotal), t._ranges = [], t._addRange(t._data), t._change(), t._markOfflineUpdatesAsDirty());
      },
      _markOfflineUpdatesAsDirty: function() {
        var e = this;
        null != e.options.offlineStorage && e._eachItem(e._data, function(e) {
          var t,
              r;
          for (t = 0; e.length > t; t++)
            r = e.at(t), ("update" == r.__state__ || "create" == r.__state__) && (r.dirty = !0);
        });
      },
      hasChanges: function() {
        var e,
            t,
            r = this._flatData(this._data);
        if (this._destroyed.length)
          return !0;
        for (e = 0, t = r.length; t > e; e++)
          if (r[e].isNew && r[e].isNew() || r[e].dirty)
            return !0;
        return !1;
      },
      _accept: function(t) {
        var r,
            n = this,
            i = t.models,
            a = t.response,
            s = 0,
            o = n._isServerGrouped(),
            u = n._pristineData,
            l = t.type;
        if (n.trigger(Ae, {
          response: a,
          type: l
        }), a && !fe(a)) {
          if (a = n.reader.parse(a), n._handleCustomErrors(a))
            return;
          a = n.reader.data(a), ce(a) || (a = [a]);
        } else
          a = e.map(i, function(e) {
            return e.toJSON();
          });
        for ("destroy" === l && (n._destroyed = []), s = 0, r = i.length; r > s; s++)
          "destroy" !== l ? (i[s].accept(a[s]), "create" === l ? u.push(o ? n._wrapInEmptyGroup(i[s]) : a[s]) : "update" === l && n._updatePristineForModel(i[s], a[s])) : n._removePristineForModel(i[s]);
      },
      _updatePristineForModel: function(e, t) {
        this._executeOnPristineForModel(e, function(e, r) {
          me.deepExtend(r[e], t);
        });
      },
      _executeOnPristineForModel: function(e, r) {
        this._eachPristineItem(function(n) {
          var i = T(n, e);
          return i > -1 ? (r(i, n), !0) : t;
        });
      },
      _removePristineForModel: function(e) {
        this._executeOnPristineForModel(e, function(e, t) {
          t.splice(e, 1);
        });
      },
      _readData: function(e) {
        var t = this._isServerGrouped() ? this.reader.groups : this.reader.data;
        return t.call(this.reader, e);
      },
      _eachPristineItem: function(e) {
        this._eachItem(this._pristineData, e);
      },
      _eachItem: function(e, t) {
        e && e.length && (this._isServerGrouped() ? C(e, t) : t(e));
      },
      _pristineForModel: function(e) {
        var r,
            n,
            i = function(i) {
              return n = T(i, e), n > -1 ? (r = i[n], !0) : t;
            };
        return this._eachPristineItem(i), r;
      },
      _cancelModel: function(e) {
        var t = this._pristineForModel(e);
        this._eachItem(this._data, function(r) {
          var n = F(r, e);
          n >= 0 && (!t || e.isNew() && !t.__state__ ? r.splice(n, 1) : (r[n].accept(t), "update" == t.__state__ && (r[n].dirty = !0)));
        });
      },
      _submit: function(t, r) {
        var n = this;
        n.trigger(Te, {type: "submit"}), n.transport.submit(le({
          success: function(r, n) {
            var i = e.grep(t, function(e) {
              return e.type == n;
            })[0];
            i && i.resolve({
              response: r,
              models: i.models,
              type: n
            });
          },
          error: function(e, r, i) {
            for (var a = 0; t.length > a; a++)
              t[a].reject(e);
            n.error(e, r, i);
          }
        }, r));
      },
      _sendSubmit: function(t, r, n) {
        var i = this,
            a = [];
        return i.options.batch && (t.length && a.push(e.Deferred(function(e) {
          e.type = "create", e.models = t;
        })), r.length && a.push(e.Deferred(function(e) {
          e.type = "update", e.models = r;
        })), n.length && a.push(e.Deferred(function(e) {
          e.type = "destroy", e.models = n;
        })), i._submit(a, {data: {
            created: i.reader.serialize(y(t)),
            updated: i.reader.serialize(y(r)),
            destroyed: i.reader.serialize(y(n))
          }})), a;
      },
      _promise: function(t, r, n) {
        var i = this;
        return e.Deferred(function(e) {
          i.trigger(Te, {type: n}), i.transport[n].call(i.transport, le({
            success: function(t) {
              e.resolve({
                response: t,
                models: r,
                type: n
              });
            },
            error: function(t, r, n) {
              e.reject(t), i.error(t, r, n);
            }
          }, t));
        }).promise();
      },
      _send: function(e, t) {
        var r,
            n,
            i = this,
            a = [],
            s = i.reader.serialize(y(t));
        if (i.options.batch)
          t.length && a.push(i._promise({data: {models: s}}, t, e));
        else
          for (r = 0, n = t.length; n > r; r++)
            a.push(i._promise({data: s[r]}, [t[r]], e));
        return a;
      },
      read: function(t) {
        var r = this,
            n = r._params(t),
            i = e.Deferred();
        return r._queueRequest(n, function() {
          var e = r.trigger(Te, {type: "read"});
          e ? (r._dequeueRequest(), i.resolve(e)) : (r.trigger(Fe), r._ranges = [], r.trigger("reset"), r.online() ? r.transport.read({
            data: n,
            success: function(e) {
              r._ranges = [], r.success(e, n), i.resolve();
            },
            error: function() {
              var e = Je.call(arguments);
              r.error.apply(r, e), i.reject.apply(i, e);
            }
          }) : null != r.options.offlineStorage && (r.success(r.offlineData(), n), i.resolve()));
        }), i.promise();
      },
      _readAggregates: function(e) {
        return this.reader.aggregates(e);
      },
      success: function(e) {
        var r,
            n,
            i,
            a,
            s,
            o,
            u,
            l,
            d = this,
            h = d.options;
        if (d.trigger(Ae, {
          response: e,
          type: "read"
        }), d.online()) {
          if (e = d.reader.parse(e), d._handleCustomErrors(e))
            return d._dequeueRequest(), t;
          d._total = d.reader.total(e), d._aggregate && h.serverAggregates && (d._aggregateResult = d._readAggregates(e)), e = d._readData(e), d._destroyed = [];
        } else {
          for (e = d._readData(e), r = [], n = {}, i = d.reader.model, a = i ? i.idField : "id", s = 0; this._destroyed.length > s; s++)
            o = this._destroyed[s][a], n[o] = o;
          for (s = 0; e.length > s; s++)
            u = e[s], l = u.__state__, "destroy" == l ? n[u[a]] || this._destroyed.push(this._createNewModel(u)) : r.push(u);
          e = r, d._total = e.length;
        }
        d._pristineTotal = d._total, d._pristineData = e.slice(0), d._detachObservableParents(), d._data = d._observe(e), d._markOfflineUpdatesAsDirty(), d._storeData(), d._addRange(d._data), d._process(d._data), d._dequeueRequest();
      },
      _detachObservableParents: function() {
        if (this._data && this._shouldDetachObservableParents)
          for (var e = 0; this._data.length > e; e++)
            this._data[e].parent && (this._data[e].parent = ve);
      },
      _storeData: function(e) {
        function t(e) {
          var r,
              n,
              i,
              a = [];
          for (r = 0; e.length > r; r++)
            n = e.at(r), i = n.toJSON(), s && n.items ? i.items = t(n.items) : (i.uid = n.uid, o && (n.isNew() ? i.__state__ = "create" : n.dirty && (i.__state__ = "update"))), a.push(i);
          return a;
        }
        var r,
            n,
            i,
            a,
            s = this._isServerGrouped(),
            o = this.reader.model;
        if (null != this.options.offlineStorage) {
          for (r = t(this._data), n = [], i = 0; this._destroyed.length > i; i++)
            a = this._destroyed[i].toJSON(), a.__state__ = "destroy", n.push(a);
          this.offlineData(r.concat(n)), e && (this._pristineData = this._readData(r));
        }
      },
      _addRange: function(e) {
        var t = this,
            r = t._skip || 0,
            n = r + t._flatData(e, !0).length;
        t._ranges.push({
          start: r,
          end: n,
          data: e,
          timestamp: (new Date).getTime()
        }), t._ranges.sort(function(e, t) {
          return e.start - t.start;
        });
      },
      error: function(e, t, r) {
        this._dequeueRequest(), this.trigger(Ae, {}), this.trigger(Pe, {
          xhr: e,
          status: t,
          errorThrown: r
        });
      },
      _params: function(e) {
        var t = this,
            r = le({
              take: t.take(),
              skip: t.skip(),
              page: t.page(),
              pageSize: t.pageSize(),
              sort: t._sort,
              filter: t._filter,
              group: t._group,
              aggregate: t._aggregate
            }, e);
        return t.options.serverPaging || (delete r.take, delete r.skip, delete r.page, delete r.pageSize), t.options.serverGrouping ? t.reader.model && r.group && (r.group = M(r.group, t.reader.model)) : delete r.group, t.options.serverFiltering ? t.reader.model && r.filter && (r.filter = N(r.filter, t.reader.model)) : delete r.filter, t.options.serverSorting ? t.reader.model && r.sort && (r.sort = M(r.sort, t.reader.model)) : delete r.sort, t.options.serverAggregates ? t.reader.model && r.aggregate && (r.aggregate = M(r.aggregate, t.reader.model)) : delete r.aggregate, r;
      },
      _queueRequest: function(e, r) {
        var n = this;
        n._requestInProgress ? n._pending = {
          callback: de(r, n),
          options: e
        } : (n._requestInProgress = !0, n._pending = t, r());
      },
      _dequeueRequest: function() {
        var e = this;
        e._requestInProgress = !1, e._pending && e._queueRequest(e._pending.options, e._pending.callback);
      },
      _handleCustomErrors: function(e) {
        if (this.reader.errors) {
          var t = this.reader.errors(e);
          if (t)
            return this.trigger(Pe, {
              xhr: null,
              status: "customerror",
              errorThrown: "custom error",
              errors: t
            }), !0;
        }
        return !1;
      },
      _shouldWrap: function(e) {
        var t = this.reader.model;
        return t && e.length ? !(e[0] instanceof t) : !1;
      },
      _observe: function(e) {
        var t,
            r = this,
            n = r.reader.model;
        return r._shouldDetachObservableParents = !0, e instanceof Ye ? (r._shouldDetachObservableParents = !1, r._shouldWrap(e) && (e.type = r.reader.model, e.wrapAll(e, e))) : (t = r.pageSize() && !r.options.serverPaging ? U : Ye, e = new t(e, r.reader.model), e.parent = function() {
          return r.parent();
        }), r._isServerGrouped() && D(e, n), r._changeHandler && r._data && r._data instanceof Ye ? r._data.unbind(Oe, r._changeHandler) : r._changeHandler = de(r._change, r), e.bind(Oe, r._changeHandler);
      },
      _updateTotalForAction: function(e, t) {
        var r = this,
            n = parseInt(r._total, 10);
        v(r._total) || (n = parseInt(r._pristineTotal, 10)), "add" === e ? n += t.length : "remove" === e ? n -= t.length : "itemchange" === e || "sync" === e || r.options.serverPaging ? "sync" === e && (n = r._pristineTotal = parseInt(r._total, 10)) : n = r._pristineTotal, r._total = n;
      },
      _change: function(e) {
        var t,
            r,
            n,
            i = this,
            a = e ? e.action : "";
        if ("remove" === a)
          for (t = 0, r = e.items.length; r > t; t++)
            e.items[t].isNew && e.items[t].isNew() || i._destroyed.push(e.items[t]);
        !i.options.autoSync || "add" !== a && "remove" !== a && "itemchange" !== a ? (i._updateTotalForAction(a, e ? e.items : []), i._process(i._data, e)) : (n = function(t) {
          "sync" === t.action && (i.unbind("change", n), i._updateTotalForAction(a, e.items));
        }, i.first("change", n), i.sync());
      },
      _calculateAggregates: function(e, t) {
        t = t || {};
        var r = new a(e),
            n = t.aggregate,
            i = t.filter;
        return i && (r = r.filter(i)), r.aggregate(n);
      },
      _process: function(e, r) {
        var n,
            i = this,
            a = {};
        i.options.serverPaging !== !0 && (a.skip = i._skip, a.take = i._take || i._pageSize, a.skip === t && i._page !== t && i._pageSize !== t && (a.skip = (i._page - 1) * i._pageSize)), i.options.serverSorting !== !0 && (a.sort = i._sort), i.options.serverFiltering !== !0 && (a.filter = i._filter), i.options.serverGrouping !== !0 && (a.group = i._group), i.options.serverAggregates !== !0 && (a.aggregate = i._aggregate, i._aggregateResult = i._calculateAggregates(e, a)), n = i._queryProcess(e, a), i.view(n.data), n.total === t || i.options.serverFiltering || (i._total = n.total), r = r || {}, r.items = r.items || i._view, i.trigger(Oe, r);
      },
      _queryProcess: function(e, t) {
        return a.process(e, t);
      },
      _mergeState: function(e) {
        var r = this;
        return e !== t && (r._pageSize = e.pageSize, r._page = e.page, r._sort = e.sort, r._filter = e.filter, r._group = e.group, r._aggregate = e.aggregate, r._skip = r._currentRangeStart = e.skip, r._take = e.take, r._skip === t && (r._skip = r._currentRangeStart = r.skip(), e.skip = r.skip()), r._take === t && r._pageSize !== t && (r._take = r._pageSize, e.take = r._take), e.sort && (r._sort = e.sort = s(e.sort)), e.filter && (r._filter = e.filter = u(e.filter)), e.group && (r._group = e.group = g(e.group)), e.aggregate && (r._aggregate = e.aggregate = c(e.aggregate))), e;
      },
      query: function(r) {
        var n,
            i,
            a = this.options.serverSorting || this.options.serverPaging || this.options.serverFiltering || this.options.serverGrouping || this.options.serverAggregates;
        return a || (this._data === t || 0 === this._data.length) && !this._destroyed.length ? this.read(this._mergeState(r)) : (i = this.trigger(Te, {type: "read"}), i || (this.trigger(Fe), n = this._queryProcess(this._data, this._mergeState(r)), this.options.serverFiltering || (this._total = n.total !== t ? n.total : this._data.length), this._aggregateResult = this._calculateAggregates(this._data, r), this.view(n.data), this.trigger(Ae, {type: "read"}), this.trigger(Oe, {items: n.data})), e.Deferred().resolve(i).promise());
      },
      fetch: function(e) {
        var t = this,
            r = function(r) {
              r !== !0 && ye(e) && e.call(t);
            };
        return this._query().then(r);
      },
      _query: function(e) {
        var t = this;
        return t.query(le({}, {
          page: t.page(),
          pageSize: t.pageSize(),
          sort: t.sort(),
          filter: t.filter(),
          group: t.group(),
          aggregate: t.aggregate()
        }, e));
      },
      next: function(e) {
        var r = this,
            n = r.page(),
            i = r.total();
        return e = e || {}, !n || i && n + 1 > r.totalPages() ? t : (r._skip = r._currentRangeStart = n * r.take(), n += 1, e.page = n, r._query(e), n);
      },
      prev: function(e) {
        var r = this,
            n = r.page();
        return e = e || {}, n && 1 !== n ? (r._skip = r._currentRangeStart = r._skip - r.take(), n -= 1, e.page = n, r._query(e), n) : t;
      },
      page: function(e) {
        var r,
            n = this;
        return e !== t ? (e = Le.max(Le.min(Le.max(e, 1), n.totalPages()), 1), n._query({page: e}), t) : (r = n.skip(), r !== t ? Le.round((r || 0) / (n.take() || 1)) + 1 : t);
      },
      pageSize: function(e) {
        var r = this;
        return e !== t ? (r._query({
          pageSize: e,
          page: 1
        }), t) : r.take();
      },
      sort: function(e) {
        var r = this;
        return e !== t ? (r._query({sort: e}), t) : r._sort;
      },
      filter: function(e) {
        var r = this;
        return e === t ? r._filter : (r.trigger("reset"), r._query({
          filter: e,
          page: 1
        }), t);
      },
      group: function(e) {
        var r = this;
        return e !== t ? (r._query({group: e}), t) : r._group;
      },
      total: function() {
        return parseInt(this._total || 0, 10);
      },
      aggregate: function(e) {
        var r = this;
        return e !== t ? (r._query({aggregate: e}), t) : r._aggregate;
      },
      aggregates: function() {
        var e = this._aggregateResult;
        return fe(e) && (e = this._emptyAggregates(this.aggregate())), e;
      },
      _emptyAggregates: function(e) {
        var t,
            r,
            n = {};
        if (!fe(e))
          for (t = {}, ce(e) || (e = [e]), r = 0; e.length > r; r++)
            t[e[r].aggregate] = 0, n[e[r].field] = t;
        return n;
      },
      _wrapInEmptyGroup: function(e) {
        var t,
            r,
            n,
            i,
            a = this.group();
        for (n = a.length - 1, i = 0; n >= i; n--)
          r = a[n], t = {
            value: e.get(r.field),
            field: r.field,
            items: t ? [t] : [e],
            hasSubgroups: !!t,
            aggregates: this._emptyAggregates(r.aggregates)
          };
        return t;
      },
      totalPages: function() {
        var e = this,
            t = e.pageSize() || e.total();
        return Le.ceil((e.total() || 0) / t);
      },
      inRange: function(e, t) {
        var r = this,
            n = Le.min(e + t, r.total());
        return !r.options.serverPaging && r._data.length > 0 ? !0 : r._findRange(e, n).length > 0;
      },
      lastRange: function() {
        var e = this._ranges;
        return e[e.length - 1] || {
          start: 0,
          end: 0,
          data: []
        };
      },
      firstItemUid: function() {
        var e = this._ranges;
        return e.length && e[0].data.length && e[0].data[0].uid;
      },
      enableRequestsInProgress: function() {
        this._skipRequestsInProgress = !1;
      },
      _timeStamp: function() {
        return (new Date).getTime();
      },
      range: function(e, r) {
        var n,
            i,
            a,
            s,
            o,
            u,
            l,
            d;
        if (this._currentRequestTimeStamp = this._timeStamp(), this._skipRequestsInProgress = !0, e = Le.min(e || 0, this.total()), n = this, i = Le.max(Le.floor(e / r), 0) * r, a = Le.min(i + r, n.total()), s = n._findRange(e, Le.min(e + r, n.total())), s.length) {
          n._pending = t, n._skip = e > n.skip() ? Le.min(a, (n.totalPages() - 1) * n.take()) : i, n._currentRangeStart = e, n._take = r, o = n.options.serverPaging, u = n.options.serverSorting, l = n.options.serverFiltering, d = n.options.serverAggregates;
          try {
            n.options.serverPaging = !0, n._isServerGrouped() || n.group() && n.group().length || (n.options.serverSorting = !0), n.options.serverFiltering = !0, n.options.serverPaging = !0, n.options.serverAggregates = !0, o && (n._detachObservableParents(), n._data = s = n._observe(s)), n._process(s);
          } finally {
            n.options.serverPaging = o, n.options.serverSorting = u, n.options.serverFiltering = l, n.options.serverAggregates = d;
          }
        } else
          r !== t && (n._rangeExists(i, a) ? e > i && n.prefetch(a, r, function() {
            n.range(e, r);
          }) : n.prefetch(i, r, function() {
            e > i && a < n.total() && !n._rangeExists(a, Le.min(a + r, n.total())) ? n.prefetch(a, r, function() {
              n.range(e, r);
            }) : n.range(e, r);
          }));
      },
      _findRange: function(e, r) {
        var n,
            i,
            a,
            o,
            u,
            l,
            d,
            h,
            f,
            c,
            p,
            _,
            v = this,
            m = v._ranges,
            y = [],
            S = v.options,
            b = S.serverSorting || S.serverPaging || S.serverFiltering || S.serverGrouping || S.serverAggregates;
        for (i = 0, p = m.length; p > i; i++)
          if (n = m[i], e >= n.start && n.end >= e) {
            for (c = 0, a = i; p > a; a++)
              if (n = m[a], f = v._flatData(n.data, !0), f.length && e + c >= n.start && (l = n.data, d = n.end, b || (_ = g(v.group() || []).concat(s(v.sort() || [])), h = v._queryProcess(n.data, {
                sort: _,
                filter: v.filter()
              }), f = l = h.data, h.total !== t && (d = h.total)), o = 0, e + c > n.start && (o = e + c - n.start), u = f.length, d > r && (u -= d - r), c += u - o, y = v._mergeGroups(y, l, o, u), n.end >= r && c == r - e))
                return y;
            break;
          }
        return [];
      },
      _mergeGroups: function(e, t, r, n) {
        if (this._isServerGrouped()) {
          var i,
              a = t.toJSON();
          return e.length && (i = e[e.length - 1]), x(i, a, r, n), e.concat(a);
        }
        return e.concat(t.slice(r, n));
      },
      skip: function() {
        var e = this;
        return e._skip === t ? e._page !== t ? (e._page - 1) * (e.take() || 1) : t : e._skip;
      },
      currentRangeStart: function() {
        return this._currentRangeStart || 0;
      },
      take: function() {
        return this._take || this._pageSize;
      },
      _prefetchSuccessHandler: function(e, t, r, n) {
        var i = this,
            a = i._timeStamp();
        return function(s) {
          var o,
              u,
              l,
              d = !1,
              h = {
                start: e,
                end: t,
                data: [],
                timestamp: i._timeStamp()
              };
          if (i._dequeueRequest(), i.trigger(Ae, {
            response: s,
            type: "read"
          }), s = i.reader.parse(s), l = i._readData(s), l.length) {
            for (o = 0, u = i._ranges.length; u > o; o++)
              if (i._ranges[o].start === e) {
                d = !0, h = i._ranges[o];
                break;
              }
            d || i._ranges.push(h);
          }
          h.data = i._observe(l), h.end = h.start + i._flatData(h.data, !0).length, i._ranges.sort(function(e, t) {
            return e.start - t.start;
          }), i._total = i.reader.total(s), (n || a >= i._currentRequestTimeStamp || !i._skipRequestsInProgress) && (r && l.length ? r() : i.trigger(Oe, {}));
        };
      },
      prefetch: function(e, t, r) {
        var n = this,
            i = Le.min(e + t, n.total()),
            a = {
              take: t,
              skip: e,
              page: e / t + 1,
              pageSize: t,
              sort: n._sort,
              filter: n._filter,
              group: n._group,
              aggregate: n._aggregate
            };
        n._rangeExists(e, i) ? r && r() : (clearTimeout(n._timeout), n._timeout = setTimeout(function() {
          n._queueRequest(a, function() {
            n.trigger(Te, {type: "read"}) ? n._dequeueRequest() : n.transport.read({
              data: n._params(a),
              success: n._prefetchSuccessHandler(e, i, r),
              error: function() {
                var e = Je.call(arguments);
                n.error.apply(n, e);
              }
            });
          });
        }, 100));
      },
      _multiplePrefetch: function(e, t, r) {
        var n = this,
            i = Le.min(e + t, n.total()),
            a = {
              take: t,
              skip: e,
              page: e / t + 1,
              pageSize: t,
              sort: n._sort,
              filter: n._filter,
              group: n._group,
              aggregate: n._aggregate
            };
        n._rangeExists(e, i) ? r && r() : n.trigger(Te, {type: "read"}) || n.transport.read({
          data: n._params(a),
          success: n._prefetchSuccessHandler(e, i, r, !0)
        });
      },
      _rangeExists: function(e, t) {
        var r,
            n,
            i = this,
            a = i._ranges;
        for (r = 0, n = a.length; n > r; r++)
          if (e >= a[r].start && a[r].end >= t)
            return !0;
        return !1;
      },
      _removeModelFromRanges: function(e) {
        var t,
            r,
            n,
            i,
            a;
        for (i = 0, a = this._ranges.length; a > i && (n = this._ranges[i], this._eachItem(n.data, function(n) {
          t = P(n, e), t && (r = !0);
        }), !r); i++)
          ;
      },
      _updateRangesLength: function() {
        var e,
            t,
            r,
            n,
            i = 0;
        for (r = 0, n = this._ranges.length; n > r; r++)
          e = this._ranges[r], e.start = e.start - i, t = this._flatData(e.data, !0).length, i = e.end - t, e.end = e.start + t;
      }
    }), ie = {}, ie.create = function(t, r, n) {
      var i,
          a = t.transport ? e.extend({}, t.transport) : null;
      return a ? (a.read = typeof a.read === we ? {url: a.read} : a.read, "jsdo" === t.type && (a.dataSource = n), t.type && (me.data.transports = me.data.transports || {}, me.data.schemas = me.data.schemas || {}, me.data.transports[t.type] ? he(me.data.transports[t.type]) ? a = le(!0, {}, me.data.transports[t.type], a) : i = new me.data.transports[t.type](le(a, {data: r})) : me.logToConsole("Unknown DataSource transport type '" + t.type + "'.\nVerify that registration scripts for this type are included after Kendo UI on the page.", "warn"), t.schema = le(!0, {}, me.data.schemas[t.type], t.schema)), i || (i = ye(a.read) ? a : new ee(a))) : i = new Z({data: t.data || []}), i;
    }, ne.create = function(e) {
      (ce(e) || e instanceof Ye) && (e = {data: e});
      var r,
          n,
          i,
          a = e || {},
          s = a.data,
          o = a.fields,
          u = a.table,
          l = a.select,
          d = {};
      if (s || !o || a.transport || (u ? s = L(u, o) : l && (s = j(l, o), a.group === t && s[0] && s[0].optgroup !== t && (a.group = "optgroup"))), me.data.Model && o && (!a.schema || !a.schema.model)) {
        for (r = 0, n = o.length; n > r; r++)
          i = o[r], i.type && (d[i.field] = i);
        fe(d) || (a.schema = le(!0, a.schema, {model: {fields: d}}));
      }
      return a.data = s, l = null, a.select = null, u = null, a.table = null, a instanceof ne ? a : new ne(a);
    }, ae = W.define({
      idField: "id",
      init: function(e) {
        var t = this,
            r = t.hasChildren || e && e.hasChildren,
            n = "items",
            i = {};
        me.data.Model.fn.init.call(t, e), typeof t.children === we && (n = t.children), i = {schema: {
            data: n,
            model: {
              hasChildren: r,
              id: t.idField,
              fields: t.fields
            }
          }}, typeof t.children !== we && le(i, t.children), i.data = e, r || (r = i.schema.data), typeof r === we && (r = me.getter(r)), ye(r) && (t.hasChildren = !!r.call(t, t)), t._childrenOptions = i, t.hasChildren && t._initChildren(), t._loaded = !(!e || !e._loaded);
      },
      _initChildren: function() {
        var e,
            t,
            r,
            n = this;
        n.children instanceof se || (e = n.children = new se(n._childrenOptions), t = e.transport, r = t.parameterMap, t.parameterMap = function(e, t) {
          return e[n.idField || "id"] = n.id, r && (e = r(e, t)), e;
        }, e.parent = function() {
          return n;
        }, e.bind(Oe, function(e) {
          e.node = e.node || n, n.trigger(Oe, e);
        }), e.bind(Pe, function(e) {
          var t = n.parent();
          t && (e.node = e.node || n, t.trigger(Pe, e));
        }), n._updateChildrenField());
      },
      append: function(e) {
        this._initChildren(), this.loaded(!0), this.children.add(e);
      },
      hasChildren: !1,
      level: function() {
        for (var e = this.parentNode(),
            t = 0; e && e.parentNode; )
          t++, e = e.parentNode ? e.parentNode() : null;
        return t;
      },
      _updateChildrenField: function() {
        var e = this._childrenOptions.schema.data;
        this[e || "items"] = this.children.data();
      },
      _childrenLoaded: function() {
        this._loaded = !0, this._updateChildrenField();
      },
      load: function() {
        var r,
            n,
            i = {},
            a = "_query";
        return this.hasChildren ? (this._initChildren(), r = this.children, i[this.idField || "id"] = this.id, this._loaded || (r._data = t, a = "read"), r.one(Oe, de(this._childrenLoaded, this)), n = r[a](i)) : this.loaded(!0), n || e.Deferred().resolve().promise();
      },
      parentNode: function() {
        var e = this.parent();
        return e.parent();
      },
      loaded: function(e) {
        return e === t ? this._loaded : (this._loaded = e, t);
      },
      shouldSerialize: function(e) {
        return W.fn.shouldSerialize.call(this, e) && "children" !== e && "_loaded" !== e && "hasChildren" !== e && "_childrenOptions" !== e;
      }
    }), se = ne.extend({
      init: function(e) {
        var t = ae.define({children: e});
        ne.fn.init.call(this, le(!0, {}, {schema: {
            modelBase: t,
            model: t
          }}, e)), this._attachBubbleHandlers();
      },
      _attachBubbleHandlers: function() {
        var e = this;
        e._data.bind(Pe, function(t) {
          e.trigger(Pe, t);
        });
      },
      remove: function(e) {
        var t,
            r = e.parentNode(),
            n = this;
        return r && r._initChildren && (n = r.children), t = ne.fn.remove.call(n, e), r && !n.data().length && (r.hasChildren = !1), t;
      },
      success: G("success"),
      data: G("data"),
      insert: function(e, t) {
        var r = this.parent();
        return r && r._initChildren && (r.hasChildren = !0, r._initChildren()), ne.fn.insert.call(this, e, t);
      },
      _find: function(e, t) {
        var r,
            n,
            i,
            a,
            s = this._data;
        if (s) {
          if (i = ne.fn[e].call(this, t))
            return i;
          for (s = this._flatData(this._data), r = 0, n = s.length; n > r; r++)
            if (a = s[r].children, a instanceof se && (i = a[e](t)))
              return i;
        }
      },
      get: function(e) {
        return this._find("get", e);
      },
      getByUid: function(e) {
        return this._find("getByUid", e);
      }
    }), se.create = function(e) {
      e = e && e.push ? {data: e} : e;
      var t = e || {},
          r = t.data,
          n = t.fields,
          i = t.list;
      return r && r._dataSource ? r._dataSource : (r || !n || t.transport || i && (r = E(i, n)), t.data = r, t instanceof se ? t : new se(t));
    }, oe = me.Observable.extend({
      init: function(e, t, r) {
        me.Observable.fn.init.call(this), this._prefetching = !1, this.dataSource = e, this.prefetch = !r;
        var n = this;
        e.bind("change", function() {
          n._change();
        }), e.bind("reset", function() {
          n._reset();
        }), this._syncWithDataSource(), this.setViewSize(t);
      },
      setViewSize: function(e) {
        this.viewSize = e, this._recalculate();
      },
      at: function(e) {
        var r = this.pageSize,
            n = !0;
        return e >= this.total() ? (this.trigger("endreached", {index: e}), null) : this.useRanges ? this.useRanges ? ((this.dataOffset > e || e >= this.skip + r) && (n = this.range(Math.floor(e / r) * r)), e === this.prefetchThreshold && this._prefetch(), e === this.midPageThreshold ? this.range(this.nextMidRange, !0) : e === this.nextPageThreshold ? this.range(this.nextFullRange) : e === this.pullBackThreshold && this.range(this.offset === this.skip ? this.previousMidRange : this.previousFullRange), n ? this.dataSource.at(e - this.dataOffset) : (this.trigger("endreached", {index: e}), null)) : t : this.dataSource.view()[e];
      },
      indexOf: function(e) {
        return this.dataSource.data().indexOf(e) + this.dataOffset;
      },
      total: function() {
        return parseInt(this.dataSource.total(), 10);
      },
      next: function() {
        var e = this,
            t = e.pageSize,
            r = e.skip - e.viewSize + t,
            n = Le.max(Le.floor(r / t), 0) * t;
        this.offset = r, this.dataSource.prefetch(n, t, function() {
          e._goToRange(r, !0);
        });
      },
      range: function(e, t) {
        if (this.offset === e)
          return !0;
        var r = this,
            n = this.pageSize,
            i = Le.max(Le.floor(e / n), 0) * n,
            a = this.dataSource;
        return t && (i += n), a.inRange(e, n) ? (this.offset = e, this._recalculate(), this._goToRange(e), !0) : this.prefetch ? (a.prefetch(i, n, function() {
          r.offset = e, r._recalculate(), r._goToRange(e, !0);
        }), !1) : !0;
      },
      syncDataSource: function() {
        var e = this.offset;
        this.offset = null, this.range(e);
      },
      destroy: function() {
        this.unbind();
      },
      _prefetch: function() {
        var e = this,
            t = this.pageSize,
            r = this.skip + t,
            n = this.dataSource;
        n.inRange(r, t) || this._prefetching || !this.prefetch || (this._prefetching = !0, this.trigger("prefetching", {
          skip: r,
          take: t
        }), n.prefetch(r, t, function() {
          e._prefetching = !1, e.trigger("prefetched", {
            skip: r,
            take: t
          });
        }));
      },
      _goToRange: function(e, t) {
        this.offset === e && (this.dataOffset = e, this._expanding = t, this.dataSource.range(e, this.pageSize), this.dataSource.enableRequestsInProgress());
      },
      _reset: function() {
        this._syncPending = !0;
      },
      _change: function() {
        var e = this.dataSource;
        this.length = this.useRanges ? e.lastRange().end : e.view().length, this._syncPending && (this._syncWithDataSource(), this._recalculate(), this._syncPending = !1, this.trigger("reset", {offset: this.offset})), this.trigger("resize"), this._expanding && this.trigger("expand"), delete this._expanding;
      },
      _syncWithDataSource: function() {
        var e = this.dataSource;
        this._firstItemUid = e.firstItemUid(), this.dataOffset = this.offset = e.skip() || 0, this.pageSize = e.pageSize(), this.useRanges = e.options.serverPaging;
      },
      _recalculate: function() {
        var e = this.pageSize,
            t = this.offset,
            r = this.viewSize,
            n = Math.ceil(t / e) * e;
        this.skip = n, this.midPageThreshold = n + e - 1, this.nextPageThreshold = n + r - 1, this.prefetchThreshold = n + Math.floor(e / 3 * 2), this.pullBackThreshold = this.offset - 1, this.nextMidRange = n + e - r, this.nextFullRange = n, this.previousMidRange = t - r, this.previousFullRange = n - e;
      }
    }), ue = me.Observable.extend({
      init: function(e, t) {
        var r = this;
        me.Observable.fn.init.call(r), this.dataSource = e, this.batchSize = t, this._total = 0, this.buffer = new oe(e, 3 * t), this.buffer.bind({
          endreached: function(e) {
            r.trigger("endreached", {index: e.index});
          },
          prefetching: function(e) {
            r.trigger("prefetching", {
              skip: e.skip,
              take: e.take
            });
          },
          prefetched: function(e) {
            r.trigger("prefetched", {
              skip: e.skip,
              take: e.take
            });
          },
          reset: function() {
            r._total = 0, r.trigger("reset");
          },
          resize: function() {
            r._total = Math.ceil(this.length / r.batchSize), r.trigger("resize", {
              total: r.total(),
              offset: this.offset
            });
          }
        });
      },
      syncDataSource: function() {
        this.buffer.syncDataSource();
      },
      at: function(e) {
        var t,
            r,
            n = this.buffer,
            i = e * this.batchSize,
            a = this.batchSize,
            s = [];
        for (n.offset > i && n.at(n.offset - 1), r = 0; a > r && (t = n.at(i + r), null !== t); r++)
          s.push(t);
        return s;
      },
      total: function() {
        return this._total;
      },
      destroy: function() {
        this.buffer.destroy(), this.unbind();
      }
    }), le(!0, me.data, {
      readers: {json: re},
      Query: a,
      DataSource: ne,
      HierarchicalDataSource: se,
      Node: ae,
      ObservableObject: H,
      ObservableArray: Ye,
      LazyObservableArray: U,
      LocalTransport: Z,
      RemoteTransport: ee,
      Cache: te,
      DataReader: re,
      Model: W,
      Buffer: oe,
      BatchBuffer: ue
    });
  }(window.kendo.jQuery), window.kendo;
}, "function" == typeof define && define.amd ? define : function(e, t, r) {
  (r || t)();
});

})();
(function() {
var define = $__System.amdDefine;
!function(e, define) {
  define("7", ["3", "6"], e) && define("kendo.binder.min", ["7"], function(m) {
    return m;
  });
}(function() {
  return function(e, t) {
    function i(t, i, n) {
      return p.extend({
        init: function(e, t, i) {
          var n = this;
          p.fn.init.call(n, e.element[0], t, i), n.widget = e, n._dataBinding = M(n.dataBinding, n), n._dataBound = M(n.dataBound, n), n._itemChange = M(n.itemChange, n);
        },
        itemChange: function(e) {
          r(e.item[0], e.data, this._ns(e.ns), [e.data].concat(this.bindings[t]._parents()));
        },
        dataBinding: function(e) {
          var t,
              i,
              n = this.widget,
              s = e.removedItems || n.items();
          for (t = 0, i = s.length; i > t; t++)
            h(s[t], !1);
        },
        _ns: function(t) {
          t = t || k.ui;
          var i = [k.ui, k.dataviz.ui, k.mobile.ui];
          return i.splice(e.inArray(t, i), 1), i.unshift(t), k.rolesFromNamespaces(i);
        },
        dataBound: function(e) {
          var n,
              s,
              a,
              o,
              d = this.widget,
              h = e.addedItems || d.items(),
              l = d[i],
              c = k.data.HierarchicalDataSource;
          if (!(c && l instanceof c) && h.length)
            for (a = e.addedDataItems || l.flatView(), o = this.bindings[t]._parents(), n = 0, s = a.length; s > n; n++)
              r(h[n], a[n], this._ns(e.ns), [a[n]].concat(o));
        },
        refresh: function(e) {
          var s,
              a,
              r,
              o = this,
              d = o.widget;
          e = e || {}, e.action || (o.destroy(), d.bind("dataBinding", o._dataBinding), d.bind("dataBound", o._dataBound), d.bind("itemChange", o._itemChange), s = o.bindings[t].get(), d[i] instanceof k.data.DataSource && d[i] != s && (s instanceof k.data.DataSource ? d[n](s) : s && s._dataSource ? d[n](s._dataSource) : (d[i].data(s), a = k.ui.Select && d instanceof k.ui.Select, r = k.ui.MultiSelect && d instanceof k.ui.MultiSelect, o.bindings.value && (a || r) && d.value(f(o.bindings.value.get(), d.options.dataValueField)))));
        },
        destroy: function() {
          var e = this.widget;
          e.unbind("dataBinding", this._dataBinding), e.unbind("dataBound", this._dataBound), e.unbind("itemChange", this._itemChange);
        }
      });
    }
    function n(e, i) {
      var n = k.initWidget(e, {}, i);
      return n ? new w(n) : t;
    }
    function s(e) {
      var t,
          i,
          n,
          a,
          r,
          o,
          d,
          h = {};
      for (d = e.match(x), t = 0, i = d.length; i > t; t++)
        n = d[t], a = n.indexOf(":"), r = n.substring(0, a), o = n.substring(a + 1), "{" == o.charAt(0) && (o = s(o)), h[r] = o;
      return h;
    }
    function a(e, t, i) {
      var n,
          s = {};
      for (n in e)
        s[n] = new i(t, e[n]);
      return s;
    }
    function r(e, t, i, o) {
      var h,
          l,
          c,
          u,
          f = e.getAttribute("data-" + k.ns + "role"),
          p = e.getAttribute("data-" + k.ns + "bind"),
          m = [],
          y = !0,
          w = {};
      if (o = o || [t], (f || p) && d(e, !1), f && (c = n(e, i)), p && (p = s(p.replace(B, "")), c || (w = k.parseOptions(e, {
        textField: "",
        valueField: "",
        template: "",
        valueUpdate: j,
        valuePrimitive: !1,
        autoBind: !0
      }), w.roles = i, c = new _(e, w)), c.source = t, l = a(p, o, g), w.template && (l.template = new v(o, "", w.template)), l.click && (p.events = p.events || {}, p.events.click = p.click, l.click.destroy(), delete l.click), l.source && (y = !1), p.attr && (l.attr = a(p.attr, o, g)), p.style && (l.style = a(p.style, o, g)), p.events && (l.events = a(p.events, o, b)), p.css && (l.css = a(p.css, o, g)), c.bind(l)), c && (e.kendoBindingTarget = c), u = e.children, y && u) {
        for (h = 0; u.length > h; h++)
          m[h] = u[h];
        for (h = 0; m.length > h; h++)
          r(m[h], t, i, o);
      }
    }
    function o(t, i) {
      var n,
          s,
          a,
          o = k.rolesFromNamespaces([].slice.call(arguments, 2));
      for (i = k.observable(i), t = e(t), n = 0, s = t.length; s > n; n++)
        a = t[n], 1 === a.nodeType && r(a, i, o);
    }
    function d(t, i) {
      var n,
          s = t.kendoBindingTarget;
      s && (s.destroy(), L ? delete t.kendoBindingTarget : t.removeAttribute ? t.removeAttribute("kendoBindingTarget") : t.kendoBindingTarget = null), i && (n = k.widgetInstance(e(t)), n && typeof n.destroy === P && n.destroy());
    }
    function h(e, t) {
      d(e, t), l(e, t);
    }
    function l(e, t) {
      var i,
          n,
          s = e.children;
      if (s)
        for (i = 0, n = s.length; n > i; i++)
          h(s[i], t);
    }
    function c(t) {
      var i,
          n;
      for (t = e(t), i = 0, n = t.length; n > i; i++)
        h(t[i], !1);
    }
    function u(e, t) {
      var i = e.element,
          n = i[0].kendoBindingTarget;
      n && o(i, n.source, t);
    }
    function f(e, t) {
      var i,
          n,
          s = [],
          a = 0;
      if (!t)
        return e;
      if (e instanceof F) {
        for (i = e.length; i > a; a++)
          n = e[a], s[a] = n.get ? n.get(t) : n[t];
        e = s;
      } else
        e instanceof S && (e = e.get(t));
      return e;
    }
    var g,
        b,
        v,
        p,
        m,
        y,
        _,
        w,
        x,
        B,
        k = window.kendo,
        C = k.Observable,
        S = k.data.ObservableObject,
        F = k.data.ObservableArray,
        T = {}.toString,
        D = {},
        A = k.Class,
        M = e.proxy,
        V = "value",
        I = "source",
        O = "events",
        H = "checked",
        N = "css",
        L = !0,
        P = "function",
        j = "change";
    !function() {
      var e = document.createElement("a");
      try {
        delete e.test;
      } catch (t) {
        L = !1;
      }
    }(), g = C.extend({
      init: function(e, t) {
        var i = this;
        C.fn.init.call(i), i.source = e[0], i.parents = e, i.path = t, i.dependencies = {}, i.dependencies[t] = !0, i.observable = i.source instanceof C, i._access = function(e) {
          i.dependencies[e.field] = !0;
        }, i.observable && (i._change = function(e) {
          i.change(e);
        }, i.source.bind(j, i._change));
      },
      _parents: function() {
        var t,
            i = this.parents,
            n = this.get();
        return n && "function" == typeof n.parent && (t = n.parent(), e.inArray(t, i) < 0 && (i = [t].concat(i))), i;
      },
      change: function(e) {
        var t,
            i,
            n = e.field,
            s = this;
        if ("this" === s.path)
          s.trigger(j, e);
        else
          for (t in s.dependencies)
            if (0 === t.indexOf(n) && (i = t.charAt(n.length), !i || "." === i || "[" === i)) {
              s.trigger(j, e);
              break;
            }
      },
      start: function(e) {
        e.bind("get", this._access);
      },
      stop: function(e) {
        e.unbind("get", this._access);
      },
      get: function() {
        var e = this,
            i = e.source,
            n = 0,
            s = e.path,
            a = i;
        if (!e.observable)
          return a;
        for (e.start(e.source), a = i.get(s); a === t && i; )
          i = e.parents[++n], i instanceof S && (a = i.get(s));
        if (a === t)
          for (i = e.source; a === t && i; )
            i = i.parent(), i instanceof S && (a = i.get(s));
        return "function" == typeof a && (n = s.lastIndexOf("."), n > 0 && (i = i.get(s.substring(0, n))), e.start(i), a = i !== e.source ? a.call(i, e.source) : a.call(i), e.stop(i)), i && i !== e.source && (e.currentSource = i, i.unbind(j, e._change).bind(j, e._change)), e.stop(e.source), a;
      },
      set: function(e) {
        var t = this.currentSource || this.source,
            i = k.getter(this.path)(t);
        "function" == typeof i ? t !== this.source ? i.call(t, this.source, e) : i.call(t, e) : t.set(this.path, e);
      },
      destroy: function() {
        this.observable && (this.source.unbind(j, this._change), this.currentSource && this.currentSource.unbind(j, this._change)), this.unbind();
      }
    }), b = g.extend({get: function() {
        var e,
            t = this.source,
            i = this.path,
            n = 0;
        for (e = t.get(i); !e && t; )
          t = this.parents[++n], t instanceof S && (e = t.get(i));
        return M(e, t);
      }}), v = g.extend({
      init: function(e, t, i) {
        var n = this;
        g.fn.init.call(n, e, t), n.template = i;
      },
      render: function(e) {
        var t;
        return this.start(this.source), t = k.render(this.template, e), this.stop(this.source), t;
      }
    }), p = A.extend({
      init: function(e, t, i) {
        this.element = e, this.bindings = t, this.options = i;
      },
      bind: function(e, t) {
        var i = this;
        e = t ? e[t] : e, e.bind(j, function(e) {
          i.refresh(t || e);
        }), i.refresh(t);
      },
      destroy: function() {}
    }), m = p.extend({
      dataType: function() {
        var e = this.element.getAttribute("data-type") || this.element.type || "text";
        return e.toLowerCase();
      },
      parsedValue: function() {
        return this._parseValue(this.element.value, this.dataType());
      },
      _parseValue: function(e, t) {
        return "date" == t ? e = k.parseDate(e, "yyyy-MM-dd") : "datetime-local" == t ? e = k.parseDate(e, ["yyyy-MM-ddTHH:mm:ss", "yyyy-MM-ddTHH:mm"]) : "number" == t ? e = k.parseFloat(e) : "boolean" == t && (e = e.toLowerCase(), e = null !== k.parseFloat(e) ? !!k.parseFloat(e) : "true" === e.toLowerCase()), e;
      }
    }), D.attr = p.extend({refresh: function(e) {
        this.element.setAttribute(e, this.bindings.attr[e].get());
      }}), D.css = p.extend({
      init: function(e, t, i) {
        p.fn.init.call(this, e, t, i), this.classes = {};
      },
      refresh: function(t) {
        var i = e(this.element),
            n = this.bindings.css[t],
            s = this.classes[t] = n.get();
        s ? i.addClass(t) : i.removeClass(t);
      }
    }), D.style = p.extend({refresh: function(e) {
        this.element.style[e] = this.bindings.style[e].get() || "";
      }}), D.enabled = p.extend({refresh: function() {
        this.bindings.enabled.get() ? this.element.removeAttribute("disabled") : this.element.setAttribute("disabled", "disabled");
      }}), D.readonly = p.extend({refresh: function() {
        this.bindings.readonly.get() ? this.element.setAttribute("readonly", "readonly") : this.element.removeAttribute("readonly");
      }}), D.disabled = p.extend({refresh: function() {
        this.bindings.disabled.get() ? this.element.setAttribute("disabled", "disabled") : this.element.removeAttribute("disabled");
      }}), D.events = p.extend({
      init: function(e, t, i) {
        p.fn.init.call(this, e, t, i), this.handlers = {};
      },
      refresh: function(t) {
        var i = e(this.element),
            n = this.bindings.events[t],
            s = this.handlers[t];
        s && i.off(t, s), s = this.handlers[t] = n.get(), i.on(t, n.source, s);
      },
      destroy: function() {
        var t,
            i = e(this.element);
        for (t in this.handlers)
          i.off(t, this.handlers[t]);
      }
    }), D.text = p.extend({refresh: function() {
        var t = this.bindings.text.get(),
            i = this.element.getAttribute("data-format") || "";
        null == t && (t = ""), e(this.element).text(k.toString(t, i));
      }}), D.visible = p.extend({refresh: function() {
        this.element.style.display = this.bindings.visible.get() ? "" : "none";
      }}), D.invisible = p.extend({refresh: function() {
        this.element.style.display = this.bindings.invisible.get() ? "none" : "";
      }}), D.html = p.extend({refresh: function() {
        this.element.innerHTML = this.bindings.html.get();
      }}), D.value = m.extend({
      init: function(t, i, n) {
        m.fn.init.call(this, t, i, n), this._change = M(this.change, this), this.eventName = n.valueUpdate || j, e(this.element).on(this.eventName, this._change), this._initChange = !1;
      },
      change: function() {
        this._initChange = this.eventName != j, this.bindings[V].set(this.parsedValue()), this._initChange = !1;
      },
      refresh: function() {
        var e,
            t;
        this._initChange || (e = this.bindings[V].get(), null == e && (e = ""), t = this.dataType(), "date" == t ? e = k.toString(e, "yyyy-MM-dd") : "datetime-local" == t && (e = k.toString(e, "yyyy-MM-ddTHH:mm:ss")), this.element.value = e), this._initChange = !1;
      },
      destroy: function() {
        e(this.element).off(this.eventName, this._change);
      }
    }), D.source = p.extend({
      init: function(e, t, i) {
        p.fn.init.call(this, e, t, i);
        var n = this.bindings.source.get();
        n instanceof k.data.DataSource && i.autoBind !== !1 && n.fetch();
      },
      refresh: function(e) {
        var t = this,
            i = t.bindings.source.get();
        i instanceof F || i instanceof k.data.DataSource ? (e = e || {}, "add" == e.action ? t.add(e.index, e.items) : "remove" == e.action ? t.remove(e.index, e.items) : "itemchange" != e.action && t.render()) : t.render();
      },
      container: function() {
        var e = this.element;
        return "table" == e.nodeName.toLowerCase() && (e.tBodies[0] || e.appendChild(document.createElement("tbody")), e = e.tBodies[0]), e;
      },
      template: function() {
        var e = this.options,
            t = e.template,
            i = this.container().nodeName.toLowerCase();
        return t || (t = "select" == i ? e.valueField || e.textField ? k.format('<option value="#:{0}#">#:{1}#</option>', e.valueField || e.textField, e.textField || e.valueField) : "<option>#:data#</option>" : "tbody" == i ? "<tr><td>#:data#</td></tr>" : "ul" == i || "ol" == i ? "<li>#:data#</li>" : "#:data#", t = k.template(t)), t;
      },
      add: function(t, i) {
        var n,
            s,
            a,
            o,
            d = this.container(),
            h = d.cloneNode(!1),
            l = d.children[t];
        if (e(h).html(k.render(this.template(), i)), h.children.length)
          for (n = this.bindings.source._parents(), s = 0, a = i.length; a > s; s++)
            o = h.children[0], d.insertBefore(o, l || null), r(o, i[s], this.options.roles, [i[s]].concat(n));
      },
      remove: function(e, t) {
        var i,
            n,
            s = this.container();
        for (i = 0; t.length > i; i++)
          n = s.children[e], h(n, !0), n.parentNode == s && s.removeChild(n);
      },
      render: function() {
        var t,
            i,
            n,
            s = this.bindings.source.get(),
            a = this.container(),
            o = this.template();
        if (null != s)
          if (s instanceof k.data.DataSource && (s = s.view()), s instanceof F || "[object Array]" === T.call(s) || (s = [s]), this.bindings.template) {
            if (l(a, !0), e(a).html(this.bindings.template.render(s)), a.children.length)
              for (t = this.bindings.source._parents(), i = 0, n = s.length; n > i; i++)
                r(a.children[i], s[i], this.options.roles, [s[i]].concat(t));
          } else
            e(a).html(k.render(o, s));
      }
    }), D.input = {checked: m.extend({
        init: function(t, i, n) {
          m.fn.init.call(this, t, i, n), this._change = M(this.change, this), e(this.element).change(this._change);
        },
        change: function() {
          var e,
              t,
              i,
              n = this.element,
              s = this.value();
          if ("radio" == n.type)
            s = this.parsedValue(), this.bindings[H].set(s);
          else if ("checkbox" == n.type)
            if (e = this.bindings[H].get(), e instanceof F) {
              if (s = this.parsedValue(), s instanceof Date) {
                for (i = 0; e.length > i; i++)
                  if (e[i] instanceof Date && +e[i] === +s) {
                    t = i;
                    break;
                  }
              } else
                t = e.indexOf(s);
              t > -1 ? e.splice(t, 1) : e.push(s);
            } else
              this.bindings[H].set(s);
        },
        refresh: function() {
          var e,
              t,
              i = this.bindings[H].get(),
              n = i,
              s = this.dataType(),
              a = this.element;
          if ("checkbox" == a.type)
            if (n instanceof F) {
              if (e = -1, i = this.parsedValue(), i instanceof Date) {
                for (t = 0; n.length > t; t++)
                  if (n[t] instanceof Date && +n[t] === +i) {
                    e = t;
                    break;
                  }
              } else
                e = n.indexOf(i);
              a.checked = e >= 0;
            } else
              a.checked = n;
          else
            "radio" == a.type && null != i && ("date" == s ? i = k.toString(i, "yyyy-MM-dd") : "datetime-local" == s && (i = k.toString(i, "yyyy-MM-ddTHH:mm:ss")), a.checked = a.value === "" + i ? !0 : !1);
        },
        value: function() {
          var e = this.element,
              t = e.value;
          return "checkbox" == e.type && (t = e.checked), t;
        },
        destroy: function() {
          e(this.element).off(j, this._change);
        }
      })}, D.select = {
      source: D.source.extend({refresh: function(i) {
          var n,
              s = this,
              a = s.bindings.source.get();
          a instanceof F || a instanceof k.data.DataSource ? (i = i || {}, "add" == i.action ? s.add(i.index, i.items) : "remove" == i.action ? s.remove(i.index, i.items) : ("itemchange" == i.action || i.action === t) && (s.render(), s.bindings.value && s.bindings.value && (n = f(s.bindings.value.get(), e(s.element).data("valueField")), null === n ? s.element.selectedIndex = -1 : s.element.value = n))) : s.render();
        }}),
      value: m.extend({
        init: function(t, i, n) {
          m.fn.init.call(this, t, i, n), this._change = M(this.change, this), e(this.element).change(this._change);
        },
        parsedValue: function() {
          var e,
              t,
              i,
              n,
              s = this.dataType(),
              a = [];
          for (i = 0, n = this.element.options.length; n > i; i++)
            t = this.element.options[i], t.selected && (e = t.attributes.value, e = e && e.specified ? t.value : t.text, a.push(this._parseValue(e, s)));
          return a;
        },
        change: function() {
          var e,
              i,
              n,
              s,
              a,
              r,
              o,
              d,
              h = [],
              l = this.element,
              c = this.options.valueField || this.options.textField,
              u = this.options.valuePrimitive;
          for (a = 0, r = l.options.length; r > a; a++)
            i = l.options[a], i.selected && (s = i.attributes.value, s = s && s.specified ? i.value : i.text, h.push(this._parseValue(s, this.dataType())));
          if (c)
            for (e = this.bindings.source.get(), e instanceof k.data.DataSource && (e = e.view()), n = 0; h.length > n; n++)
              for (a = 0, r = e.length; r > a; a++)
                if (o = this._parseValue(e[a].get(c), this.dataType()), d = o + "" === h[n]) {
                  h[n] = e[a];
                  break;
                }
          s = this.bindings[V].get(), s instanceof F ? s.splice.apply(s, [0, s.length].concat(h)) : this.bindings[V].set(u || !(s instanceof S || null === s || s === t) && c ? h[0].get(c) : h[0]);
        },
        refresh: function() {
          var e,
              t,
              i,
              n = this.element,
              s = n.options,
              a = this.bindings[V].get(),
              r = a,
              o = this.options.valueField || this.options.textField,
              d = !1,
              h = this.dataType();
          for (r instanceof F || (r = new F([a])), n.selectedIndex = -1, i = 0; r.length > i; i++)
            for (a = r[i], o && a instanceof S && (a = a.get(o)), "date" == h ? a = k.toString(r[i], "yyyy-MM-dd") : "datetime-local" == h && (a = k.toString(r[i], "yyyy-MM-ddTHH:mm:ss")), e = 0; s.length > e; e++)
              t = s[e].value, "" === t && "" !== a && (t = s[e].text), null != a && t == "" + a && (s[e].selected = !0, d = !0);
        },
        destroy: function() {
          e(this.element).off(j, this._change);
        }
      })
    }, D.widget = {
      events: p.extend({
        init: function(e, t, i) {
          p.fn.init.call(this, e.element[0], t, i), this.widget = e, this.handlers = {};
        },
        refresh: function(e) {
          var t = this.bindings.events[e],
              i = this.handlers[e];
          i && this.widget.unbind(e, i), i = t.get(), this.handlers[e] = function(e) {
            e.data = t.source, i(e), e.data === t.source && delete e.data;
          }, this.widget.bind(e, this.handlers[e]);
        },
        destroy: function() {
          var e;
          for (e in this.handlers)
            this.widget.unbind(e, this.handlers[e]);
        }
      }),
      checked: p.extend({
        init: function(e, t, i) {
          p.fn.init.call(this, e.element[0], t, i), this.widget = e, this._change = M(this.change, this), this.widget.bind(j, this._change);
        },
        change: function() {
          this.bindings[H].set(this.value());
        },
        refresh: function() {
          this.widget.check(this.bindings[H].get() === !0);
        },
        value: function() {
          var e = this.element,
              t = e.value;
          return ("on" == t || "off" == t) && (t = e.checked), t;
        },
        destroy: function() {
          this.widget.unbind(j, this._change);
        }
      }),
      visible: p.extend({
        init: function(e, t, i) {
          p.fn.init.call(this, e.element[0], t, i), this.widget = e;
        },
        refresh: function() {
          var e = this.bindings.visible.get();
          this.widget.wrapper[0].style.display = e ? "" : "none";
        }
      }),
      invisible: p.extend({
        init: function(e, t, i) {
          p.fn.init.call(this, e.element[0], t, i), this.widget = e;
        },
        refresh: function() {
          var e = this.bindings.invisible.get();
          this.widget.wrapper[0].style.display = e ? "none" : "";
        }
      }),
      enabled: p.extend({
        init: function(e, t, i) {
          p.fn.init.call(this, e.element[0], t, i), this.widget = e;
        },
        refresh: function() {
          this.widget.enable && this.widget.enable(this.bindings.enabled.get());
        }
      }),
      disabled: p.extend({
        init: function(e, t, i) {
          p.fn.init.call(this, e.element[0], t, i), this.widget = e;
        },
        refresh: function() {
          this.widget.enable && this.widget.enable(!this.bindings.disabled.get());
        }
      }),
      source: i("source", "dataSource", "setDataSource"),
      value: p.extend({
        init: function(t, i, n) {
          p.fn.init.call(this, t.element[0], i, n), this.widget = t, this._change = e.proxy(this.change, this), this.widget.first(j, this._change);
          var s = this.bindings.value.get();
          this._valueIsObservableObject = !n.valuePrimitive && (null == s || s instanceof S), this._valueIsObservableArray = s instanceof F, this._initChange = !1;
        },
        _source: function() {
          var e;
          return this.widget.dataItem && (e = this.widget.dataItem(), e && e instanceof S) ? [e] : (this.bindings.source && (e = this.bindings.source.get()), (!e || e instanceof k.data.DataSource) && (e = this.widget.dataSource.flatView()), e);
        },
        change: function() {
          var e,
              t,
              i,
              n,
              s,
              a,
              r,
              o = this.widget.value(),
              d = this.options.dataValueField || this.options.dataTextField,
              h = "[object Array]" === T.call(o),
              l = this._valueIsObservableObject,
              c = [];
          if (this._initChange = !0, d)
            if ("" === o && (l || this.options.valuePrimitive))
              o = null;
            else {
              for (r = this._source(), h && (t = o.length, c = o.slice(0)), s = 0, a = r.length; a > s; s++)
                if (i = r[s], n = i.get(d), h) {
                  for (e = 0; t > e; e++)
                    if (n == c[e]) {
                      c[e] = i;
                      break;
                    }
                } else if (n == o) {
                  o = l ? i : n;
                  break;
                }
              c[0] && (o = this._valueIsObservableArray ? c : l || !d ? c[0] : c[0].get(d));
            }
          this.bindings.value.set(o), this._initChange = !1;
        },
        refresh: function() {
          var e,
              i,
              n,
              s,
              a,
              r,
              o,
              d,
              h;
          if (!this._initChange) {
            if (e = this.widget, i = e.options, n = i.dataTextField, s = i.dataValueField || n, a = this.bindings.value.get(), r = i.text || "", o = 0, h = [], a === t && (a = null), s)
              if (a instanceof F) {
                for (d = a.length; d > o; o++)
                  h[o] = a[o].get(s);
                a = h;
              } else
                a instanceof S && (r = a.get(n), a = a.get(s));
            i.autoBind !== !1 || i.cascadeFrom || !e.listView || e.listView.bound() ? e.value(a) : (n !== s || r || (r = a), r || !a && 0 !== a || !i.valuePrimitive ? e._preselect(a, r) : e.value(a));
          }
          this._initChange = !1;
        },
        destroy: function() {
          this.widget.unbind(j, this._change);
        }
      }),
      gantt: {dependencies: i("dependencies", "dependencies", "setDependenciesDataSource")},
      multiselect: {value: p.extend({
          init: function(t, i, n) {
            p.fn.init.call(this, t.element[0], i, n), this.widget = t, this._change = e.proxy(this.change, this), this.widget.first(j, this._change), this._initChange = !1;
          },
          change: function() {
            var e,
                i,
                n,
                s,
                a,
                r,
                o,
                d,
                h,
                l = this,
                c = l.bindings[V].get(),
                u = l.options.valuePrimitive,
                f = u ? l.widget.value() : l.widget.dataItems(),
                g = this.options.dataValueField || this.options.dataTextField;
            if (f = f.slice(0), l._initChange = !0, c instanceof F) {
              for (e = [], i = f.length, n = 0, s = 0, a = c[n], r = !1; a !== t; ) {
                for (h = !1, s = 0; i > s; s++)
                  if (u ? r = f[s] == a : (d = f[s], d = d.get ? d.get(g) : d, r = d == (a.get ? a.get(g) : a)), r) {
                    f.splice(s, 1), i -= 1, h = !0;
                    break;
                  }
                h ? n += 1 : (e.push(a), y(c, n, 1), o = n), a = c[n];
              }
              y(c, c.length, 0, f), e.length && c.trigger("change", {
                action: "remove",
                items: e,
                index: o
              }), f.length && c.trigger("change", {
                action: "add",
                items: f,
                index: c.length - 1
              });
            } else
              l.bindings[V].set(f);
            l._initChange = !1;
          },
          refresh: function() {
            if (!this._initChange) {
              var e,
                  i,
                  n = this.options,
                  s = this.widget,
                  a = n.dataValueField || n.dataTextField,
                  r = this.bindings.value.get(),
                  o = r,
                  d = 0,
                  h = [];
              if (r === t && (r = null), a)
                if (r instanceof F) {
                  for (e = r.length; e > d; d++)
                    i = r[d], h[d] = i.get ? i.get(a) : i;
                  r = h;
                } else
                  r instanceof S && (r = r.get(a));
              n.autoBind !== !1 || n.valuePrimitive === !0 || s._isBound() ? s.value(r) : s._preselect(o, r);
            }
          },
          destroy: function() {
            this.widget.unbind(j, this._change);
          }
        })},
      scheduler: {source: i("source", "dataSource", "setDataSource").extend({dataBound: function(e) {
            var t,
                i,
                n,
                s,
                a = this.widget,
                o = e.addedItems || a.items();
            if (o.length)
              for (n = e.addedDataItems || a.dataItems(), s = this.bindings.source._parents(), t = 0, i = n.length; i > t; t++)
                r(o[t], n[t], this._ns(e.ns), [n[t]].concat(s));
          }})}
    }, y = function(e, t, i, n) {
      var s,
          a,
          r,
          o,
          d;
      if (n = n || [], i = i || 0, s = n.length, a = e.length, r = [].slice.call(e, t + i), o = r.length, s) {
        for (s = t + s, d = 0; s > t; t++)
          e[t] = n[d], d++;
        e.length = s;
      } else if (i)
        for (e.length = t, i += t; i > t; )
          delete e[--i];
      if (o) {
        for (o = t + o, d = 0; o > t; t++)
          e[t] = r[d], d++;
        e.length = o;
      }
      for (t = e.length; a > t; )
        delete e[t], t++;
    }, _ = A.extend({
      init: function(e, t) {
        this.target = e, this.options = t, this.toDestroy = [];
      },
      bind: function(e) {
        var t,
            i,
            n,
            s,
            a,
            r,
            o = this instanceof w,
            d = this.binders();
        for (t in e)
          t == V ? i = !0 : t == I ? n = !0 : t != O || o ? t == H ? a = !0 : t == N ? r = !0 : this.applyBinding(t, e, d) : s = !0;
        n && this.applyBinding(I, e, d), i && this.applyBinding(V, e, d), a && this.applyBinding(H, e, d), s && !o && this.applyBinding(O, e, d), r && !o && this.applyBinding(N, e, d);
      },
      binders: function() {
        return D[this.target.nodeName.toLowerCase()] || {};
      },
      applyBinding: function(e, t, i) {
        var n,
            s = i[e] || D[e],
            a = this.toDestroy,
            r = t[e];
        if (s)
          if (s = new s(this.target, t, this.options), a.push(s), r instanceof g)
            s.bind(r), a.push(r);
          else
            for (n in r)
              s.bind(r, n), a.push(r[n]);
        else if ("template" !== e)
          throw Error("The " + e + " binding is not supported by the " + this.target.nodeName.toLowerCase() + " element");
      },
      destroy: function() {
        var e,
            t,
            i = this.toDestroy;
        for (e = 0, t = i.length; t > e; e++)
          i[e].destroy();
      }
    }), w = _.extend({
      binders: function() {
        return D.widget[this.target.options.name.toLowerCase()] || {};
      },
      applyBinding: function(e, t, i) {
        var n,
            s = i[e] || D.widget[e],
            a = this.toDestroy,
            r = t[e];
        if (!s)
          throw Error("The " + e + " binding is not supported by the " + this.target.options.name + " widget");
        if (s = new s(this.target, t, this.target.options), a.push(s), r instanceof g)
          s.bind(r), a.push(r);
        else
          for (n in r)
            s.bind(r, n), a.push(r[n]);
      }
    }), x = /[A-Za-z0-9_\-]+:(\{([^}]*)\}|[^,}]+)/g, B = /\s/g, k.unbind = c, k.bind = o, k.data.binders = D, k.data.Binder = p, k.notify = u, k.observable = function(e) {
      return e instanceof S || (e = new S(e)), e;
    }, k.observableHierarchy = function(e) {
      function t(e) {
        var i,
            n;
        for (i = 0; e.length > i; i++)
          e[i]._initChildren(), n = e[i].children, n.fetch(), e[i].items = n.data(), t(e[i].items);
      }
      var i = k.data.HierarchicalDataSource.create(e);
      return i.fetch(), t(i.data()), i._data._dataSource = i, i._data;
    };
  }(window.kendo.jQuery), window.kendo;
}, "function" == typeof define && define.amd ? define : function(e, t, i) {
  (i || t)();
});

})();
(function() {
var define = $__System.amdDefine;
!function(e, define) {
  define("8", ["3", "7", "9"], e) && define("kendo.view.min", ["8"], function(m) {
    return m;
  });
}(function() {
  return function(e, n) {
    function t(e) {
      if (!e)
        return {};
      var n = e.match(v) || [];
      return {
        type: n[1],
        direction: n[3],
        reverse: "reverse" === n[5]
      };
    }
    var i = window.kendo,
        r = i.Observable,
        o = "SCRIPT",
        a = "init",
        s = "show",
        c = "hide",
        d = "transitionStart",
        h = "transitionEnd",
        f = "attach",
        l = "detach",
        u = /unrecognized expression/,
        m = r.extend({
          init: function(e, n) {
            var t = this;
            n = n || {}, r.fn.init.call(t), t.content = e, t.id = i.guid(), t.tagName = n.tagName || "div", t.model = n.model, t._wrap = n.wrap !== !1, this._evalTemplate = n.evalTemplate || !1, t._fragments = {}, t.bind([a, s, c, d, h], n);
          },
          render: function(n) {
            var t = this,
                r = !t.element;
            return r && (t.element = t._createElement()), n && e(n).append(t.element), r && (i.bind(t.element, t.model), t.trigger(a)), n && (t._eachFragment(f), t.trigger(s)), t.element;
          },
          clone: function() {
            return new g(this);
          },
          triggerBeforeShow: function() {
            return !0;
          },
          triggerBeforeHide: function() {
            return !0;
          },
          showStart: function() {
            this.element.css("display", "");
          },
          showEnd: function() {},
          hideEnd: function() {
            this.hide();
          },
          beforeTransition: function(e) {
            this.trigger(d, {type: e});
          },
          afterTransition: function(e) {
            this.trigger(h, {type: e});
          },
          hide: function() {
            this._eachFragment(l), this.element.detach(), this.trigger(c);
          },
          destroy: function() {
            var e = this.element;
            e && (i.unbind(e), i.destroy(e), e.remove());
          },
          fragments: function(n) {
            e.extend(this._fragments, n);
          },
          _eachFragment: function(e) {
            for (var n in this._fragments)
              this._fragments[n][e](this, n);
          },
          _createElement: function() {
            var n,
                t,
                r,
                a = this,
                s = "<" + a.tagName + " />";
            try {
              t = e(document.getElementById(a.content) || a.content), t[0].tagName === o && (t = t.html());
            } catch (c) {
              u.test(c.message) && (t = a.content);
            }
            return "string" == typeof t ? (t = t.replace(/^\s+|\s+$/g, ""), a._evalTemplate && (t = i.template(t)(a.model || {})), n = e(s).append(t), a._wrap || (n = n.contents())) : (n = t, a._evalTemplate && (r = e(i.template(e("<div />").append(n.clone(!0)).html())(a.model || {})), e.contains(document, n[0]) && n.replaceWith(r), n = r), a._wrap && (n = n.wrapAll(s).parent())), n;
          }
        }),
        g = i.Class.extend({
          init: function(n) {
            e.extend(this, {
              element: n.element.clone(!0),
              transition: n.transition,
              id: n.id
            }), n.element.parent().append(this.element);
          },
          hideEnd: function() {
            this.element.remove();
          },
          beforeTransition: e.noop,
          afterTransition: e.noop
        }),
        w = m.extend({
          init: function(e, n) {
            m.fn.init.call(this, e, n), this.containers = {};
          },
          container: function(e) {
            var n = this.containers[e];
            return n || (n = this._createContainer(e), this.containers[e] = n), n;
          },
          showIn: function(e, n, t) {
            this.container(e).show(n, t);
          },
          _createContainer: function(e) {
            var n,
                t = this.render(),
                i = t.find(e);
            if (!i.length && t.is(e)) {
              if (!t.is(e))
                throw Error("can't find a container with the specified " + e + " selector");
              i = t;
            }
            return n = new _(i), n.bind("accepted", function(e) {
              e.view.render(i);
            }), n;
          }
        }),
        p = m.extend({
          attach: function(e, n) {
            e.element.find(n).replaceWith(this.render());
          },
          detach: function() {}
        }),
        v = /^(\w+)(:(\w+))?( (\w+))?$/,
        _ = r.extend({
          init: function(e) {
            r.fn.init.call(this), this.container = e, this.history = [], this.view = null, this.running = !1;
          },
          after: function() {
            this.running = !1, this.trigger("complete", {view: this.view}), this.trigger("after");
          },
          end: function() {
            this.view.showEnd(), this.previous.hideEnd(), this.after();
          },
          show: function(e, n, r) {
            if (!e.triggerBeforeShow() || this.view && !this.view.triggerBeforeHide())
              return this.trigger("after"), !1;
            r = r || e.id;
            var o = this,
                a = e === o.view ? e.clone() : o.view,
                s = o.history,
                c = s[s.length - 2] || {},
                d = c.id === r,
                h = n || (d ? s[s.length - 1].transition : e.transition),
                f = t(h);
            return o.running && o.effect.stop(), "none" === h && (h = null), o.trigger("accepted", {view: e}), o.view = e, o.previous = a, o.running = !0, d ? s.pop() : s.push({
              id: r,
              transition: h
            }), a ? (h && i.effects.enabled ? (e.element.addClass("k-fx-hidden"), e.showStart(), d && !n && (f.reverse = !f.reverse), o.effect = i.fx(e.element).replace(a.element, f.type).beforeTransition(function() {
              e.beforeTransition("show"), a.beforeTransition("hide");
            }).afterTransition(function() {
              e.afterTransition("show"), a.afterTransition("hide");
            }).direction(f.direction).setReverse(f.reverse), o.effect.run().then(function() {
              o.end();
            })) : (e.showStart(), o.end()), !0) : (e.showStart(), e.showEnd(), o.after(), !0);
          }
        });
    i.ViewContainer = _, i.Fragment = p, i.Layout = w, i.View = m, i.ViewClone = g;
  }(window.kendo.jQuery), window.kendo;
}, "function" == typeof define && define.amd ? define : function(e, n, t) {
  (t || n)();
});

})();
(function() {
var define = $__System.amdDefine;
!function(t, define) {
  define("9", ["3"], t) && define("kendo.fx.min", ["9"], function(m) {
    return m;
  });
}(function() {
  return function(t, e) {
    function i(t) {
      return parseInt(t, 10);
    }
    function r(t, e) {
      return i(t.css(e));
    }
    function n(t) {
      var e,
          i = [];
      for (e in t)
        i.push(e);
      return i;
    }
    function s(t) {
      for (var e in t)
        -1 != L.indexOf(e) && -1 == Q.indexOf(e) && delete t[e];
      return t;
    }
    function o(t, e) {
      var i,
          r,
          n,
          s,
          o = [],
          a = {};
      for (r in e)
        i = r.toLowerCase(), s = H && -1 != L.indexOf(i), !E.hasHW3D && s && -1 == Q.indexOf(i) ? delete e[r] : (n = e[r], s ? o.push(r + "(" + n + ")") : a[r] = n);
      return o.length && (a[at] = o.join(" ")), a;
    }
    function a(t, e) {
      var r,
          n,
          s;
      return H ? (r = t.css(at), r == J ? "scale" == e ? 1 : 0 : (n = r.match(RegExp(e + "\\s*\\(([\\d\\w\\.]+)")), s = 0, n ? s = i(n[1]) : (n = r.match(S) || [0, 0, 0, 0, 0], e = e.toLowerCase(), V.test(e) ? s = parseFloat(n[3] / n[2]) : "translatey" == e ? s = parseFloat(n[4] / n[2]) : "scale" == e ? s = parseFloat(n[2]) : "rotate" == e && (s = parseFloat(Math.atan2(n[2], n[1])))), s)) : parseFloat(t.css(e));
    }
    function c(t) {
      return t.charAt(0).toUpperCase() + t.substring(1);
    }
    function l(t, e) {
      var i = h.extend(e),
          r = i.prototype.directions;
      T[c(t)] = i, T.Element.prototype[t] = function(t, e, r, n) {
        return new i(this.element, t, e, r, n);
      }, N(r, function(e, r) {
        T.Element.prototype[t + c(r)] = function(t, e, n) {
          return new i(this.element, r, t, e, n);
        };
      });
    }
    function d(t, i, r, n) {
      l(t, {
        directions: v,
        startValue: function(t) {
          return this._startValue = t, this;
        },
        endValue: function(t) {
          return this._endValue = t, this;
        },
        shouldHide: function() {
          return this._shouldHide;
        },
        prepare: function(t, s) {
          var o,
              a,
              c = this,
              l = "out" === this._direction,
              d = c.element.data(i),
              u = !(isNaN(d) || d == r);
          o = u ? d : e !== this._startValue ? this._startValue : l ? r : n, a = e !== this._endValue ? this._endValue : l ? n : r, this._reverse ? (t[i] = a, s[i] = o) : (t[i] = o, s[i] = a), c._shouldHide = s[i] === n;
        }
      });
    }
    function u(t, e) {
      var i = C.directions[e].vertical,
          r = t[i ? Y : X]() / 2 + "px";
      return g[e].replace("$size", r);
    }
    var f,
        p,
        h,
        m,
        v,
        x,
        g,
        _,
        y,
        k,
        b,
        w,
        C = window.kendo,
        T = C.effects,
        N = t.each,
        P = t.extend,
        z = t.proxy,
        E = C.support,
        R = E.browser,
        H = E.transforms,
        D = E.transitions,
        O = {
          scale: 0,
          scalex: 0,
          scaley: 0,
          scale3d: 0
        },
        F = {
          translate: 0,
          translatex: 0,
          translatey: 0,
          translate3d: 0
        },
        I = e !== document.documentElement.style.zoom && !H,
        S = /matrix3?d?\s*\(.*,\s*([\d\.\-]+)\w*?,\s*([\d\.\-]+)\w*?,\s*([\d\.\-]+)\w*?,\s*([\d\.\-]+)\w*?/i,
        A = /^(-?[\d\.\-]+)?[\w\s]*,?\s*(-?[\d\.\-]+)?[\w\s]*/i,
        V = /translatex?$/i,
        q = /(zoom|fade|expand)(\w+)/,
        M = /(zoom|fade|expand)/,
        $ = /[xy]$/i,
        L = ["perspective", "rotate", "rotatex", "rotatey", "rotatez", "rotate3d", "scale", "scalex", "scaley", "scalez", "scale3d", "skew", "skewx", "skewy", "translate", "translatex", "translatey", "translatez", "translate3d", "matrix", "matrix3d"],
        Q = ["rotate", "scale", "scalex", "scaley", "skew", "skewx", "skewy", "translate", "translatex", "translatey", "matrix"],
        W = {
          rotate: "deg",
          scale: "",
          skew: "px",
          translate: "px"
        },
        j = H.css,
        B = Math.round,
        U = "",
        G = "px",
        J = "none",
        K = "auto",
        X = "width",
        Y = "height",
        Z = "hidden",
        tt = "origin",
        et = "abortId",
        it = "overflow",
        rt = "translate",
        nt = "position",
        st = "completeCallback",
        ot = j + "transition",
        at = j + "transform",
        ct = j + "backface-visibility",
        lt = j + "perspective",
        dt = "1500px",
        ut = "perspective(" + dt + ")",
        ft = {
          left: {
            reverse: "right",
            property: "left",
            transition: "translatex",
            vertical: !1,
            modifier: -1
          },
          right: {
            reverse: "left",
            property: "left",
            transition: "translatex",
            vertical: !1,
            modifier: 1
          },
          down: {
            reverse: "up",
            property: "top",
            transition: "translatey",
            vertical: !0,
            modifier: 1
          },
          up: {
            reverse: "down",
            property: "top",
            transition: "translatey",
            vertical: !0,
            modifier: -1
          },
          top: {reverse: "bottom"},
          bottom: {reverse: "top"},
          "in": {
            reverse: "out",
            modifier: -1
          },
          out: {
            reverse: "in",
            modifier: 1
          },
          vertical: {reverse: "vertical"},
          horizontal: {reverse: "horizontal"}
        };
    C.directions = ft, P(t.fn, {kendoStop: function(t, e) {
        return D ? T.stopQueue(this, t || !1, e || !1) : this.stop(t, e);
      }}), H && !D && (N(Q, function(i, r) {
      t.fn[r] = function(i) {
        if (e === i)
          return a(this, r);
        var n = t(this)[0],
            s = r + "(" + i + W[r.replace($, "")] + ")";
        return -1 == n.style.cssText.indexOf(at) ? t(this).css(at, s) : n.style.cssText = n.style.cssText.replace(RegExp(r + "\\(.*?\\)", "i"), s), this;
      }, t.fx.step[r] = function(e) {
        t(e.elem)[r](e.now);
      };
    }), f = t.fx.prototype.cur, t.fx.prototype.cur = function() {
      return -1 != Q.indexOf(this.prop) ? parseFloat(t(this.elem)[this.prop]()) : f.apply(this, arguments);
    }), C.toggleClass = function(t, e, i, r) {
      return e && (e = e.split(" "), D && (i = P({
        exclusive: "all",
        duration: 400,
        ease: "ease-out"
      }, i), t.css(ot, i.exclusive + " " + i.duration + "ms " + i.ease), setTimeout(function() {
        t.css(ot, "").css(Y);
      }, i.duration)), N(e, function(e, i) {
        t.toggleClass(i, r);
      })), t;
    }, C.parseEffects = function(t, e) {
      var i = {};
      return "string" == typeof t ? N(t.split(" "), function(t, r) {
        var n = !M.test(r),
            s = r.replace(q, function(t, e, i) {
              return e + ":" + i.toLowerCase();
            }),
            o = s.split(":"),
            a = o[1],
            c = {};
        o.length > 1 && (c.direction = e && n ? ft[a].reverse : a), i[o[0]] = c;
      }) : N(t, function(t) {
        var r = this.direction;
        r && e && !M.test(t) && (this.direction = ft[r].reverse), i[t] = this;
      }), i;
    }, D && P(T, {
      transition: function(e, i, r) {
        var s,
            a,
            c,
            l,
            d = 0,
            u = e.data("keys") || [];
        r = P({
          duration: 200,
          ease: "ease-out",
          complete: null,
          exclusive: "all"
        }, r), c = !1, l = function() {
          c || (c = !0, a && (clearTimeout(a), a = null), e.removeData(et).dequeue().css(ot, "").css(ot), r.complete.call(e));
        }, r.duration = t.fx ? t.fx.speeds[r.duration] || r.duration : r.duration, s = o(e, i), t.merge(u, n(s)), e.data("keys", t.unique(u)).height(), e.css(ot, r.exclusive + " " + r.duration + "ms " + r.ease).css(ot), e.css(s).css(at), D.event && (e.one(D.event, l), 0 !== r.duration && (d = 500)), a = setTimeout(l, r.duration + d), e.data(et, a), e.data(st, l);
      },
      stopQueue: function(t, e, i) {
        var r,
            n = t.data("keys"),
            s = !i && n,
            o = t.data(st);
        return s && (r = C.getComputedStyles(t[0], n)), o && o(), s && t.css(r), t.removeData("keys").stop(e);
      }
    }), p = C.Class.extend({
      init: function(t, e) {
        var i = this;
        i.element = t, i.effects = [], i.options = e, i.restore = [];
      },
      run: function(e) {
        var i,
            r,
            n,
            a,
            c,
            l,
            d,
            u = this,
            f = e.length,
            p = u.element,
            h = u.options,
            m = t.Deferred(),
            v = {},
            x = {};
        for (u.effects = e, m.then(t.proxy(u, "complete")), p.data("animating", !0), r = 0; f > r; r++)
          for (i = e[r], i.setReverse(h.reverse), i.setOptions(h), u.addRestoreProperties(i.restore), i.prepare(v, x), c = i.children(), n = 0, l = c.length; l > n; n++)
            c[n].duration(h.duration).run();
        for (d in h.effects)
          P(x, h.effects[d].properties);
        for (p.is(":visible") || P(v, {display: p.data("olddisplay") || "block"}), H && !h.reset && (a = p.data("targetTransform"), a && (v = P(a, v))), v = o(p, v), H && !D && (v = s(v)), p.css(v).css(at), r = 0; f > r; r++)
          e[r].setup();
        return h.init && h.init(), p.data("targetTransform", x), T.animate(p, x, P({}, h, {complete: m.resolve})), m.promise();
      },
      stop: function() {
        t(this.element).kendoStop(!0, !0);
      },
      addRestoreProperties: function(t) {
        for (var e,
            i = this.element,
            r = 0,
            n = t.length; n > r; r++)
          e = t[r], this.restore.push(e), i.data(e) || i.data(e, i.css(e));
      },
      restoreCallback: function() {
        var t,
            e,
            i,
            r = this.element;
        for (t = 0, e = this.restore.length; e > t; t++)
          i = this.restore[t], r.css(i, r.data(i));
      },
      complete: function() {
        var e = this,
            i = 0,
            r = e.element,
            n = e.options,
            s = e.effects,
            o = s.length;
        for (r.removeData("animating").dequeue(), n.hide && r.data("olddisplay", r.css("display")).hide(), this.restoreCallback(), I && !H && setTimeout(t.proxy(this, "restoreCallback"), 0); o > i; i++)
          s[i].teardown();
        n.completeCallback && n.completeCallback(r);
      }
    }), T.promise = function(t, e) {
      var i,
          r,
          n,
          s = [],
          o = new p(t, e),
          a = C.parseEffects(e.effects);
      e.effects = a;
      for (n in a)
        i = T[c(n)], i && (r = new i(t, a[n].direction), s.push(r));
      s[0] ? o.run(s) : (t.is(":visible") || t.css({display: t.data("olddisplay") || "block"}).css("display"), e.init && e.init(), t.dequeue(), o.complete());
    }, P(T, {animate: function(i, n, o) {
        var a = o.transition !== !1;
        delete o.transition, D && "transition" in T && a ? T.transition(i, n, o) : H ? i.animate(s(n), {
          queue: !1,
          show: !1,
          hide: !1,
          duration: o.duration,
          complete: o.complete
        }) : i.each(function() {
          var i = t(this),
              s = {};
          N(L, function(t, o) {
            var a,
                c,
                l,
                d,
                u,
                f,
                p,
                h = n ? n[o] + " " : null;
            h && (c = n, o in O && n[o] !== e ? (a = h.match(A), H && P(c, {scale: +a[0]})) : o in F && n[o] !== e && (l = i.css(nt), d = "absolute" == l || "fixed" == l, i.data(rt) || (d ? i.data(rt, {
              top: r(i, "top") || 0,
              left: r(i, "left") || 0,
              bottom: r(i, "bottom"),
              right: r(i, "right")
            }) : i.data(rt, {
              top: r(i, "marginTop") || 0,
              left: r(i, "marginLeft") || 0
            })), u = i.data(rt), a = h.match(A), a && (f = o == rt + "y" ? 0 : +a[1], p = o == rt + "y" ? +a[1] : +a[2], d ? (isNaN(u.right) ? isNaN(f) || P(c, {left: u.left + f}) : isNaN(f) || P(c, {right: u.right - f}), isNaN(u.bottom) ? isNaN(p) || P(c, {top: u.top + p}) : isNaN(p) || P(c, {bottom: u.bottom - p})) : (isNaN(f) || P(c, {marginLeft: u.left + f}), isNaN(p) || P(c, {marginTop: u.top + p})))), !H && "scale" != o && o in c && delete c[o], c && P(s, c));
          }), R.msie && delete s.scale, i.animate(s, {
            queue: !1,
            show: !1,
            hide: !1,
            duration: o.duration,
            complete: o.complete
          });
        });
      }}), T.animatedPromise = T.promise, h = C.Class.extend({
      init: function(t, e) {
        var i = this;
        i.element = t, i._direction = e, i.options = {}, i._additionalEffects = [], i.restore || (i.restore = []);
      },
      reverse: function() {
        return this._reverse = !0, this.run();
      },
      play: function() {
        return this._reverse = !1, this.run();
      },
      add: function(t) {
        return this._additionalEffects.push(t), this;
      },
      direction: function(t) {
        return this._direction = t, this;
      },
      duration: function(t) {
        return this._duration = t, this;
      },
      compositeRun: function() {
        var t = this,
            e = new p(t.element, {
              reverse: t._reverse,
              duration: t._duration
            }),
            i = t._additionalEffects.concat([t]);
        return e.run(i);
      },
      run: function() {
        if (this._additionalEffects && this._additionalEffects[0])
          return this.compositeRun();
        var e,
            i,
            r = this,
            n = r.element,
            a = 0,
            c = r.restore,
            l = c.length,
            d = t.Deferred(),
            u = {},
            f = {},
            p = r.children(),
            h = p.length;
        for (d.then(t.proxy(r, "_complete")), n.data("animating", !0), a = 0; l > a; a++)
          e = c[a], n.data(e) || n.data(e, n.css(e));
        for (a = 0; h > a; a++)
          p[a].duration(r._duration).run();
        return r.prepare(u, f), n.is(":visible") || P(u, {display: n.data("olddisplay") || "block"}), H && (i = n.data("targetTransform"), i && (u = P(i, u))), u = o(n, u), H && !D && (u = s(u)), n.css(u).css(at), r.setup(), n.data("targetTransform", f), T.animate(n, f, {
          duration: r._duration,
          complete: d.resolve
        }), d.promise();
      },
      stop: function() {
        var e = 0,
            i = this.children(),
            r = i.length;
        for (e = 0; r > e; e++)
          i[e].stop();
        return t(this.element).kendoStop(!0, !0), this;
      },
      restoreCallback: function() {
        var t,
            e,
            i,
            r = this.element;
        for (t = 0, e = this.restore.length; e > t; t++)
          i = this.restore[t], r.css(i, r.data(i));
      },
      _complete: function() {
        var e = this,
            i = e.element;
        i.removeData("animating").dequeue(), e.restoreCallback(), e.shouldHide() && i.data("olddisplay", i.css("display")).hide(), I && !H && setTimeout(t.proxy(e, "restoreCallback"), 0), e.teardown();
      },
      setOptions: function(t) {
        P(!0, this.options, t);
      },
      children: function() {
        return [];
      },
      shouldHide: t.noop,
      setup: t.noop,
      prepare: t.noop,
      teardown: t.noop,
      directions: [],
      setReverse: function(t) {
        return this._reverse = t, this;
      }
    }), m = ["left", "right", "up", "down"], v = ["in", "out"], l("slideIn", {
      directions: m,
      divisor: function(t) {
        return this.options.divisor = t, this;
      },
      prepare: function(t, e) {
        var i,
            r = this,
            n = r.element,
            s = ft[r._direction],
            o = -s.modifier * (s.vertical ? n.outerHeight() : n.outerWidth()),
            a = o / (r.options && r.options.divisor || 1) + G,
            c = "0px";
        r._reverse && (i = t, t = e, e = i), H ? (t[s.transition] = a, e[s.transition] = c) : (t[s.property] = a, e[s.property] = c);
      }
    }), l("tile", {
      directions: m,
      init: function(t, e, i) {
        h.prototype.init.call(this, t, e), this.options = {previous: i};
      },
      previousDivisor: function(t) {
        return this.options.previousDivisor = t, this;
      },
      children: function() {
        var t = this,
            e = t._reverse,
            i = t.options.previous,
            r = t.options.previousDivisor || 1,
            n = t._direction,
            s = [C.fx(t.element).slideIn(n).setReverse(e)];
        return i && s.push(C.fx(i).slideIn(ft[n].reverse).divisor(r).setReverse(!e)), s;
      }
    }), d("fade", "opacity", 1, 0), d("zoom", "scale", 1, .01), l("slideMargin", {prepare: function(t, e) {
        var i,
            r = this,
            n = r.element,
            s = r.options,
            o = n.data(tt),
            a = s.offset,
            c = r._reverse;
        c || null !== o || n.data(tt, parseFloat(n.css("margin-" + s.axis))), i = n.data(tt) || 0, e["margin-" + s.axis] = c ? i : i + a;
      }}), l("slideTo", {prepare: function(t, e) {
        var i = this,
            r = i.element,
            n = i.options,
            s = n.offset.split(","),
            o = i._reverse;
        H ? (e.translatex = o ? 0 : s[0], e.translatey = o ? 0 : s[1]) : (e.left = o ? 0 : s[0], e.top = o ? 0 : s[1]), r.css("left");
      }}), l("expand", {
      directions: ["horizontal", "vertical"],
      restore: [it],
      prepare: function(t, i) {
        var r = this,
            n = r.element,
            s = r.options,
            o = r._reverse,
            a = "vertical" === r._direction ? Y : X,
            c = n[0].style[a],
            l = n.data(a),
            d = parseFloat(l || c),
            u = B(n.css(a, K)[a]());
        t.overflow = Z, d = s && s.reset ? u || d : d || u, i[a] = (o ? 0 : d) + G, t[a] = (o ? d : 0) + G, l === e && n.data(a, c);
      },
      shouldHide: function() {
        return this._reverse;
      },
      teardown: function() {
        var t = this,
            e = t.element,
            i = "vertical" === t._direction ? Y : X,
            r = e.data(i);
        (r == K || r === U) && setTimeout(function() {
          e.css(i, K).css(i);
        }, 0);
      }
    }), x = {
      position: "absolute",
      marginLeft: 0,
      marginTop: 0,
      scale: 1
    }, l("transfer", {
      init: function(t, e) {
        this.element = t, this.options = {target: e}, this.restore = [];
      },
      setup: function() {
        this.element.appendTo(document.body);
      },
      prepare: function(t, e) {
        var i = this,
            r = i.element,
            n = T.box(r),
            s = T.box(i.options.target),
            o = a(r, "scale"),
            c = T.fillScale(s, n),
            l = T.transformOrigin(s, n);
        P(t, x), e.scale = 1, r.css(at, "scale(1)").css(at), r.css(at, "scale(" + o + ")"), t.top = n.top, t.left = n.left, t.transformOrigin = l.x + G + " " + l.y + G, i._reverse ? t.scale = c : e.scale = c;
      }
    }), g = {
      top: "rect(auto auto $size auto)",
      bottom: "rect($size auto auto auto)",
      left: "rect(auto $size auto auto)",
      right: "rect(auto auto auto $size)"
    }, _ = {
      top: {
        start: "rotatex(0deg)",
        end: "rotatex(180deg)"
      },
      bottom: {
        start: "rotatex(-180deg)",
        end: "rotatex(0deg)"
      },
      left: {
        start: "rotatey(0deg)",
        end: "rotatey(-180deg)"
      },
      right: {
        start: "rotatey(180deg)",
        end: "rotatey(0deg)"
      }
    }, l("turningPage", {
      directions: m,
      init: function(t, e, i) {
        h.prototype.init.call(this, t, e), this._container = i;
      },
      prepare: function(t, e) {
        var i = this,
            r = i._reverse,
            n = r ? ft[i._direction].reverse : i._direction,
            s = _[n];
        t.zIndex = 1, i._clipInHalf && (t.clip = u(i._container, C.directions[n].reverse)), t[ct] = Z, e[at] = ut + (r ? s.start : s.end), t[at] = ut + (r ? s.end : s.start);
      },
      setup: function() {
        this._container.append(this.element);
      },
      face: function(t) {
        return this._face = t, this;
      },
      shouldHide: function() {
        var t = this,
            e = t._reverse,
            i = t._face;
        return e && !i || !e && i;
      },
      clipInHalf: function(t) {
        return this._clipInHalf = t, this;
      },
      temporary: function() {
        return this.element.addClass("temp-page"), this;
      }
    }), l("staticPage", {
      directions: m,
      init: function(t, e, i) {
        h.prototype.init.call(this, t, e), this._container = i;
      },
      restore: ["clip"],
      prepare: function(t, e) {
        var i = this,
            r = i._reverse ? ft[i._direction].reverse : i._direction;
        t.clip = u(i._container, r), t.opacity = .999, e.opacity = 1;
      },
      shouldHide: function() {
        var t = this,
            e = t._reverse,
            i = t._face;
        return e && !i || !e && i;
      },
      face: function(t) {
        return this._face = t, this;
      }
    }), l("pageturn", {
      directions: ["horizontal", "vertical"],
      init: function(t, e, i, r) {
        h.prototype.init.call(this, t, e), this.options = {}, this.options.face = i, this.options.back = r;
      },
      children: function() {
        var t,
            e = this,
            i = e.options,
            r = "horizontal" === e._direction ? "left" : "top",
            n = C.directions[r].reverse,
            s = e._reverse,
            o = i.face.clone(!0).removeAttr("id"),
            a = i.back.clone(!0).removeAttr("id"),
            c = e.element;
        return s && (t = r, r = n, n = t), [C.fx(i.face).staticPage(r, c).face(!0).setReverse(s), C.fx(i.back).staticPage(n, c).setReverse(s), C.fx(o).turningPage(r, c).face(!0).clipInHalf(!0).temporary().setReverse(s), C.fx(a).turningPage(n, c).clipInHalf(!0).temporary().setReverse(s)];
      },
      prepare: function(t, e) {
        t[lt] = dt, t.transformStyle = "preserve-3d", t.opacity = .999, e.opacity = 1;
      },
      teardown: function() {
        this.element.find(".temp-page").remove();
      }
    }), l("flip", {
      directions: ["horizontal", "vertical"],
      init: function(t, e, i, r) {
        h.prototype.init.call(this, t, e), this.options = {}, this.options.face = i, this.options.back = r;
      },
      children: function() {
        var t,
            e = this,
            i = e.options,
            r = "horizontal" === e._direction ? "left" : "top",
            n = C.directions[r].reverse,
            s = e._reverse,
            o = e.element;
        return s && (t = r, r = n, n = t), [C.fx(i.face).turningPage(r, o).face(!0).setReverse(s), C.fx(i.back).turningPage(n, o).setReverse(s)];
      },
      prepare: function(t) {
        t[lt] = dt, t.transformStyle = "preserve-3d";
      }
    }), y = !E.mobileOS.android, k = ".km-touch-scrollbar, .km-actionsheet-wrapper", l("replace", {
      _before: t.noop,
      _after: t.noop,
      init: function(e, i, r) {
        h.prototype.init.call(this, e), this._previous = t(i), this._transitionClass = r;
      },
      duration: function() {
        throw Error("The replace effect does not support duration setting; the effect duration may be customized through the transition class rule");
      },
      beforeTransition: function(t) {
        return this._before = t, this;
      },
      afterTransition: function(t) {
        return this._after = t, this;
      },
      _both: function() {
        return t().add(this._element).add(this._previous);
      },
      _containerClass: function() {
        var t = this._direction,
            e = "k-fx k-fx-start k-fx-" + this._transitionClass;
        return t && (e += " k-fx-" + t), this._reverse && (e += " k-fx-reverse"), e;
      },
      complete: function(e) {
        if (!(!this.deferred || e && t(e.target).is(k))) {
          var i = this.container;
          i.removeClass("k-fx-end").removeClass(this._containerClass()).off(D.event, this.completeProxy), this._previous.hide().removeClass("k-fx-current"), this.element.removeClass("k-fx-next"), y && i.css(it, ""), this.isAbsolute || this._both().css(nt, ""), this.deferred.resolve(), delete this.deferred;
        }
      },
      run: function() {
        if (this._additionalEffects && this._additionalEffects[0])
          return this.compositeRun();
        var e,
            i = this,
            r = i.element,
            n = i._previous,
            s = r.parents().filter(n.parents()).first(),
            o = i._both(),
            a = t.Deferred(),
            c = r.css(nt);
        return s.length || (s = r.parent()), this.container = s, this.deferred = a, this.isAbsolute = "absolute" == c, this.isAbsolute || o.css(nt, "absolute"), y && (e = s.css(it), s.css(it, "hidden")), D ? (r.addClass("k-fx-hidden"), s.addClass(this._containerClass()), this.completeProxy = t.proxy(this, "complete"), s.on(D.event, this.completeProxy), C.animationFrame(function() {
          r.removeClass("k-fx-hidden").addClass("k-fx-next"), n.css("display", "").addClass("k-fx-current"), i._before(n, r), C.animationFrame(function() {
            s.removeClass("k-fx-start").addClass("k-fx-end"), i._after(n, r);
          });
        })) : this.complete(), a.promise();
      },
      stop: function() {
        this.complete();
      }
    }), b = C.Class.extend({
      init: function() {
        var t = this;
        t._tickProxy = z(t._tick, t), t._started = !1;
      },
      tick: t.noop,
      done: t.noop,
      onEnd: t.noop,
      onCancel: t.noop,
      start: function() {
        this.enabled() && (this.done() ? this.onEnd() : (this._started = !0, C.animationFrame(this._tickProxy)));
      },
      enabled: function() {
        return !0;
      },
      cancel: function() {
        this._started = !1, this.onCancel();
      },
      _tick: function() {
        var t = this;
        t._started && (t.tick(), t.done() ? (t._started = !1, t.onEnd()) : C.animationFrame(t._tickProxy));
      }
    }), w = b.extend({
      init: function(t) {
        var e = this;
        P(e, t), b.fn.init.call(e);
      },
      done: function() {
        return this.timePassed() >= this.duration;
      },
      timePassed: function() {
        return Math.min(this.duration, new Date - this.startDate);
      },
      moveTo: function(t) {
        var e = this,
            i = e.movable;
        e.initial = i[e.axis], e.delta = t.location - e.initial, e.duration = "number" == typeof t.duration ? t.duration : 300, e.tick = e._easeProxy(t.ease), e.startDate = new Date, e.start();
      },
      _easeProxy: function(t) {
        var e = this;
        return function() {
          e.movable.moveAxis(e.axis, t(e.timePassed(), e.initial, e.delta, e.duration));
        };
      }
    }), P(w, {
      easeOutExpo: function(t, e, i, r) {
        return t == r ? e + i : i * (-Math.pow(2, -10 * t / r) + 1) + e;
      },
      easeOutBack: function(t, e, i, r, n) {
        return n = 1.70158, i * ((t = t / r - 1) * t * ((n + 1) * t + n) + 1) + e;
      }
    }), T.Animation = b, T.Transition = w, T.createEffect = l, T.box = function(e) {
      e = t(e);
      var i = e.offset();
      return i.width = e.outerWidth(), i.height = e.outerHeight(), i;
    }, T.transformOrigin = function(t, e) {
      var i = (t.left - e.left) * e.width / (e.width - t.width),
          r = (t.top - e.top) * e.height / (e.height - t.height);
      return {
        x: isNaN(i) ? 0 : i,
        y: isNaN(r) ? 0 : r
      };
    }, T.fillScale = function(t, e) {
      return Math.min(t.width / e.width, t.height / e.height);
    }, T.fitScale = function(t, e) {
      return Math.max(t.width / e.width, t.height / e.height);
    };
  }(window.kendo.jQuery), window.kendo;
}, "function" == typeof define && define.amd ? define : function(t, e, i) {
  (i || e)();
});

})();
(function() {
var define = $__System.amdDefine;
define("a", ["2", "8", "9", "b"], function() {
  return kendo;
});

})();
$__System.register("c", [], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", "<nav class=\"navbar navbar-default navbar-static-top\">\r\n    <div class=\"container\">\r\n        <div class=\"navbar-header\">\r\n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#navbar-collapse\">\r\n              <span class=\"sr-only\">Toggle navigation</span>\r\n              <span class=\"icon-bar\"></span>\r\n              <span class=\"icon-bar\"></span>\r\n              <span class=\"icon-bar\"></span>\r\n            </button>\r\n            <a class=\"navbar-brand\" href=\"/\">\r\n                <span class=\"title\">App Title</span> \r\n            </a>\r\n        </div>\r\n        <div class=\"collapse navbar-collapse\" id=\"navbar-collapse\">\r\n            <ul id=\"nav-links\" class=\"nav navbar-nav\" data-bind=\"source: links\" data-template=\"nav-template\"></ul>\r\n            <ul class=\"nav navbar-nav navbar-right\">\r\n                <li><a href=\"http://www.telerik.com/kendo-ui\" target=\"_blank\">Kendo UI By Telerik</a></li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</nav>\r\n\r\n<div id=\"content\" class=\"container\"></div>\r\n\r\n<script type=\"text/x-kendo-template\" id=\"nav-template\">\r\n    <li><a href=\"#: href #\"><span class=\"#: icon #\"></span> #: title #</a></li>\r\n</script>");
    }
  };
});
(function() {
var define = $__System.amdDefine;
define("d", ["c"], function(layoutTemplate) {
  var nav;
  var viewModel = kendo.observable({links: [{
      title: 'Home',
      href: '#/',
      icon: 'home',
      icon: 'fa fa-home'
    }, {
      title: 'Details',
      href: '#/details',
      icon: 'fa fa-ellipsis-h'
    }]});
  var layout = new kendo.Layout(layoutTemplate, {
    model: viewModel,
    init: function(e) {
      nav = e.sender.element.find('#nav-links');
    }
  });
  return layout;
});

})();
$__System.register("e", [], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", "<h1 data-bind=\"html: title\"></h1>\r\n<p>\r\n    Welcome! You've got a Kendo UI SPA. If you don't already know what you're doing,\r\n    <a href=\"http://a.shinynew.me/post/78038782111/a-kendo-ui-asp-net-mvc-spa-template\">read the article</a> on the Kendo UI ASP.NET MVC SPA Tempate.\r\n</p>\r\n<input id=\"testddl\"/>\r\n");
    }
  };
});
(function() {
var define = $__System.amdDefine;
!function(t, define) {
  define("f", ["3"], t) && define("kendo.calendar.min", ["f"], function(m) {
    return m;
  });
}(function() {
  return function(t, e) {
    function n(t, e, n, a) {
      var r,
          i = t.getFullYear(),
          o = e.getFullYear(),
          s = n.getFullYear();
      return i -= i % a, r = i + (a - 1), o > i && (i = o), r > s && (r = s), i + "-" + r;
    }
    function a(t) {
      for (var e,
          n = 0,
          a = t.min,
          r = t.max,
          i = t.start,
          o = t.setter,
          l = t.build,
          u = t.cells || 12,
          c = t.perRow || 4,
          f = t.content || H,
          d = t.empty || P,
          g = t.html || '<table tabindex="0" role="grid" class="k-content k-meta-view" cellspacing="0"><tbody><tr role="row">'; u > n; n++)
        n > 0 && n % c === 0 && (g += '</tr><tr role="row">'), i = new pt(i.getFullYear(), i.getMonth(), i.getDate(), 0, 0, 0), T(i, 0), e = l(i, n, t.disableDates), g += s(i, a, r) ? f(e) : d(e), o(i, 1);
      return g + "</tr></tbody></table>";
    }
    function r(t, e, n) {
      var a = t.getFullYear(),
          r = e.getFullYear(),
          i = r,
          o = 0;
      return n && (r -= r % n, i = r - r % n + n - 1), a > i ? o = 1 : r > a && (o = -1), o;
    }
    function i() {
      var t = new pt;
      return new pt(t.getFullYear(), t.getMonth(), t.getDate());
    }
    function o(t, e, n) {
      var a = i();
      return t && (a = new pt(+t)), e > a ? a = new pt(+e) : a > n && (a = new pt(+n)), a;
    }
    function s(t, e, n) {
      return +t >= +e && +n >= +t;
    }
    function l(t, e) {
      return t.slice(e).concat(t.slice(0, e));
    }
    function u(t, e, n) {
      e = e instanceof pt ? e.getFullYear() : t.getFullYear() + n * e, t.setFullYear(e);
    }
    function c(e) {
      var n = t(this).hasClass("k-state-disabled");
      n || t(this).toggleClass(J, st.indexOf(e.type) > -1 || e.type == it);
    }
    function f(t) {
      t.preventDefault();
    }
    function d(t) {
      return A(t).calendars.standard;
    }
    function g(t) {
      var n = wt[t.start],
          a = wt[t.depth],
          r = A(t.culture);
      t.format = S(t.format || r.calendars.standard.patterns.d), isNaN(n) && (n = 0, t.start = L), (a === e || a > n) && (t.depth = L), null === t.dates && (t.dates = []);
    }
    function v(t) {
      z && t.find("*").attr("unselectable", "on");
    }
    function h(t, e) {
      for (var n = 0,
          a = e.length; a > n; n++)
        if (t === +e[n])
          return !0;
      return !1;
    }
    function _(t, e) {
      return t ? t.getFullYear() === e.getFullYear() && t.getMonth() === e.getMonth() && t.getDate() === e.getDate() : !1;
    }
    function m(t, e) {
      return t ? t.getFullYear() === e.getFullYear() && t.getMonth() === e.getMonth() : !1;
    }
    function p(e) {
      return F.isFunction(e) ? e : t.isArray(e) ? D(e) : t.noop;
    }
    function w(t) {
      var e,
          n = [];
      for (e = 0; t.length > e; e++)
        n.push(t[e].setHours(0, 0, 0, 0));
      return n;
    }
    function D(e) {
      var n,
          a,
          r,
          i,
          o,
          s = [],
          l = ["su", "mo", "tu", "we", "th", "fr", "sa"],
          u = "if (found) { return true } else {return false}";
      if (e[0] instanceof pt)
        s = w(e), n = "var found = date && $.inArray(date.setHours(0, 0, 0, 0),[" + s + "]) > -1;" + u;
      else {
        for (r = 0; e.length > r; r++)
          i = e[r].slice(0, 2).toLowerCase(), o = t.inArray(i, l), o > -1 && s.push(o);
        n = "var found = date && $.inArray(date.getDay(),[" + s + "]) > -1;" + u;
      }
      return a = Function("date", n);
    }
    function k(t, e) {
      return t instanceof Date && e instanceof Date && (t = t.getTime(), e = e.getTime()), t === e;
    }
    var b,
        F = window.kendo,
        y = F.support,
        x = F.ui,
        Y = x.Widget,
        C = F.keys,
        M = F.parseDate,
        T = F.date.adjustDST,
        S = F._extractFormat,
        O = F.template,
        A = F.getCulture,
        V = F.support.transitions,
        N = V ? V.css + "transform-origin" : "",
        H = O('<td#=data.cssClass# role="gridcell"><a tabindex="-1" class="k-link" href="\\#" data-#=data.ns#value="#=data.dateString#">#=data.value#</a></td>', {useWithBlock: !1}),
        P = O('<td role="gridcell">&nbsp;</td>', {useWithBlock: !1}),
        E = F.support.browser,
        z = E.msie && 9 > E.version,
        I = ".kendoCalendar",
        B = "click" + I,
        W = "keydown" + I,
        R = "id",
        U = "min",
        j = "left",
        G = "slideIn",
        L = "month",
        q = "century",
        $ = "change",
        K = "navigate",
        Q = "value",
        J = "k-state-hover",
        X = "k-state-disabled",
        Z = "k-state-focused",
        tt = "k-other-month",
        et = ' class="' + tt + '"',
        nt = "k-nav-today",
        at = "td:has(.k-link)",
        rt = "blur" + I,
        it = "focus",
        ot = it + I,
        st = y.touch ? "touchstart" : "mouseenter",
        lt = y.touch ? "touchstart" + I : "mouseenter" + I,
        ut = y.touch ? "touchend" + I + " touchmove" + I : "mouseleave" + I,
        ct = 6e4,
        ft = 864e5,
        dt = "_prevArrow",
        gt = "_nextArrow",
        vt = "aria-disabled",
        ht = "aria-selected",
        _t = t.proxy,
        mt = t.extend,
        pt = Date,
        wt = {
          month: 0,
          year: 1,
          decade: 2,
          century: 3
        },
        Dt = Y.extend({
          init: function(e, n) {
            var a,
                r,
                s = this;
            Y.fn.init.call(s, e, n), e = s.wrapper = s.element, n = s.options, n.url = window.unescape(n.url), s.options.disableDates = p(s.options.disableDates), s._templates(), s._header(), s._footer(s.footer), r = e.addClass("k-widget k-calendar").on(lt + " " + ut, at, c).on(W, "table.k-content", _t(s._move, s)).on(B, at, function(e) {
              var n = e.currentTarget.firstChild,
                  a = s._toDateObject(n);
              -1 != n.href.indexOf("#") && e.preventDefault(), s.options.disableDates(a) && "month" == s._view.name || s._click(t(n));
            }).on("mouseup" + I, "table.k-content, .k-footer", function() {
              s._focusView(s.options.focusOnNav !== !1);
            }).attr(R), r && (s._cellID = r + "_cell_selected"), g(n), a = M(n.value, n.format, n.culture), s._index = wt[n.start], s._current = new pt(+o(a, n.min, n.max)), s._addClassProxy = function() {
              if (s._active = !0, s._cell.hasClass(X)) {
                var t = s._view.toDateString(i());
                s._cell = s._cellByDate(t);
              }
              s._cell.addClass(Z);
            }, s._removeClassProxy = function() {
              s._active = !1, s._cell.removeClass(Z);
            }, s.value(a), F.notify(s);
          },
          options: {
            name: "Calendar",
            value: null,
            min: new pt(1900, 0, 1),
            max: new pt(2099, 11, 31),
            dates: [],
            url: "",
            culture: "",
            footer: "",
            format: "",
            month: {},
            start: L,
            depth: L,
            animation: {
              horizontal: {
                effects: G,
                reverse: !0,
                duration: 500,
                divisor: 2
              },
              vertical: {
                effects: "zoomIn",
                duration: 400
              }
            }
          },
          events: [$, K],
          setOptions: function(t) {
            var e = this;
            g(t), t.disableDates = p(t.disableDates), Y.fn.setOptions.call(e, t), e._templates(), e._footer(e.footer), e._index = wt[e.options.start], e.navigate();
          },
          destroy: function() {
            var t = this,
                e = t._today;
            t.element.off(I), t._title.off(I), t[dt].off(I), t[gt].off(I), F.destroy(t._table), e && F.destroy(e.off(I)), Y.fn.destroy.call(t);
          },
          current: function() {
            return this._current;
          },
          view: function() {
            return this._view;
          },
          focus: function(t) {
            t = t || this._table, this._bindTable(t), t.focus();
          },
          min: function(t) {
            return this._option(U, t);
          },
          max: function(t) {
            return this._option("max", t);
          },
          navigateToPast: function() {
            this._navigate(dt, -1);
          },
          navigateToFuture: function() {
            this._navigate(gt, 1);
          },
          navigateUp: function() {
            var t = this,
                e = t._index;
            t._title.hasClass(X) || t.navigate(t._current, ++e);
          },
          navigateDown: function(t) {
            var n = this,
                a = n._index,
                r = n.options.depth;
            if (t)
              return a === wt[r] ? (k(n._value, n._current) && k(n._value, t) || (n.value(t), n.trigger($)), e) : (n.navigate(t, --a), e);
          },
          navigate: function(n, a) {
            var r,
                i,
                s,
                l,
                u,
                c,
                f,
                d,
                g,
                h,
                _,
                m,
                p,
                w,
                D,
                k,
                F;
            a = isNaN(a) ? wt[a] : a, r = this, i = r.options, s = i.culture, l = i.min, u = i.max, c = r._title, f = r._table, d = r._oldTable, g = r._value, h = r._current, _ = n && +n > +h, m = a !== e && a !== r._index, n || (n = h), r._current = n = new pt(+o(n, l, u)), a === e ? a = r._index : r._index = a, r._view = w = b.views[a], D = w.compare, k = a === wt[q], c.toggleClass(X, k).attr(vt, k), k = D(n, l) < 1, r[dt].toggleClass(X, k).attr(vt, k), k = D(n, u) > -1, r[gt].toggleClass(X, k).attr(vt, k), f && d && d.data("animating") && (d.kendoStop(!0, !0), f.kendoStop(!0, !0)), r._oldTable = f, (!f || r._changeView) && (c.html(w.title(n, l, u, s)), r._table = p = t(w.content(mt({
              min: l,
              max: u,
              date: n,
              url: i.url,
              dates: i.dates,
              format: i.format,
              culture: s,
              disableDates: i.disableDates
            }, r[w.name]))), v(p), F = f && f.data("start") === p.data("start"), r._animate({
              from: f,
              to: p,
              vertical: m,
              future: _,
              replace: F
            }), r.trigger(K), r._focus(n)), a === wt[i.depth] && g && !r.options.disableDates(g) && r._class("k-state-selected", g), r._class(Z, n), !f && r._cell && r._cell.removeClass(Z), r._changeView = !0;
          },
          value: function(t) {
            var n = this,
                a = n._view,
                r = n.options,
                i = n._view,
                o = r.min,
                l = r.max;
            return t === e ? n._value : (null === t && (n._current = new Date(n._current.getFullYear(), n._current.getMonth(), n._current.getDate())), t = M(t, r.format, r.culture), null !== t && (t = new pt(+t), s(t, o, l) || (t = null)), null !== t && n.options.disableDates(t) ? n._value === e && (n._value = null) : n._value = t, i && null === t && n._cell ? n._cell.removeClass("k-state-selected") : (n._changeView = !t || a && 0 !== a.compare(t, n._current), n.navigate(t)), e);
          },
          _move: function(e) {
            var n,
                a,
                r,
                i,
                l = this,
                u = l.options,
                c = e.keyCode,
                f = l._view,
                d = l._index,
                g = l.options.min,
                v = l.options.max,
                h = new pt(+l._current),
                _ = F.support.isRtl(l.wrapper),
                m = l.options.disableDates;
            return e.target === l._table[0] && (l._active = !0), e.ctrlKey ? c == C.RIGHT && !_ || c == C.LEFT && _ ? (l.navigateToFuture(), a = !0) : c == C.LEFT && !_ || c == C.RIGHT && _ ? (l.navigateToPast(), a = !0) : c == C.UP ? (l.navigateUp(), a = !0) : c == C.DOWN && (l._click(t(l._cell[0].firstChild)), a = !0) : (c == C.RIGHT && !_ || c == C.LEFT && _ ? (n = 1, a = !0) : c == C.LEFT && !_ || c == C.RIGHT && _ ? (n = -1, a = !0) : c == C.UP ? (n = 0 === d ? -7 : -4, a = !0) : c == C.DOWN ? (n = 0 === d ? 7 : 4, a = !0) : c == C.ENTER ? (l._click(t(l._cell[0].firstChild)), a = !0) : c == C.HOME || c == C.END ? (r = c == C.HOME ? "first" : "last", i = f[r](h), h = new pt(i.getFullYear(), i.getMonth(), i.getDate(), h.getHours(), h.getMinutes(), h.getSeconds(), h.getMilliseconds()), a = !0) : c == C.PAGEUP ? (a = !0, l.navigateToPast()) : c == C.PAGEDOWN && (a = !0, l.navigateToFuture()), (n || r) && (r || f.setDate(h, n), m(h) && (h = l._nextNavigatable(h, n)), s(h, g, v) && l._focus(o(h, u.min, u.max)))), a && e.preventDefault(), l._current;
          },
          _nextNavigatable: function(t, e) {
            var n = this,
                a = !0,
                r = n._view,
                i = n.options.min,
                o = n.options.max,
                l = n.options.disableDates,
                u = new Date(t.getTime());
            for (r.setDate(u, -e); a; ) {
              if (r.setDate(t, e), !s(t, i, o)) {
                t = u;
                break;
              }
              a = l(t);
            }
            return t;
          },
          _animate: function(t) {
            var e = this,
                n = t.from,
                a = t.to,
                r = e._active;
            n ? n.parent().data("animating") ? (n.off(I), n.parent().kendoStop(!0, !0).remove(), n.remove(), a.insertAfter(e.element[0].firstChild), e._focusView(r)) : !n.is(":visible") || e.options.animation === !1 || t.replace ? (a.insertAfter(n), n.off(I).remove(), e._focusView(r)) : e[t.vertical ? "_vertical" : "_horizontal"](n, a, t.future) : (a.insertAfter(e.element[0].firstChild), e._bindTable(a));
          },
          _horizontal: function(t, e, n) {
            var a = this,
                r = a._active,
                i = a.options.animation.horizontal,
                o = i.effects,
                s = t.outerWidth();
            o && -1 != o.indexOf(G) && (t.add(e).css({width: s}), t.wrap("<div/>"), a._focusView(r, t), t.parent().css({
              position: "relative",
              width: 2 * s,
              "float": j,
              "margin-left": n ? 0 : -s
            }), e[n ? "insertAfter" : "insertBefore"](t), mt(i, {
              effects: G + ":" + (n ? "right" : j),
              complete: function() {
                t.off(I).remove(), a._oldTable = null, e.unwrap(), a._focusView(r);
              }
            }), t.parent().kendoStop(!0, !0).kendoAnimate(i));
          },
          _vertical: function(t, e) {
            var n,
                a,
                r = this,
                i = r.options.animation.vertical,
                o = i.effects,
                s = r._active;
            o && -1 != o.indexOf("zoom") && (e.css({
              position: "absolute",
              top: t.prev().outerHeight(),
              left: 0
            }).insertBefore(t), N && (n = r._cellByDate(r._view.toDateString(r._current)), a = n.position(), a = a.left + parseInt(n.width() / 2, 10) + "px " + (a.top + parseInt(n.height() / 2, 10) + "px"), e.css(N, a)), t.kendoStop(!0, !0).kendoAnimate({
              effects: "fadeOut",
              duration: 600,
              complete: function() {
                t.off(I).remove(), r._oldTable = null, e.css({
                  position: "static",
                  top: 0,
                  left: 0
                }), r._focusView(s);
              }
            }), e.kendoStop(!0, !0).kendoAnimate(i));
          },
          _cellByDate: function(e) {
            return this._table.find("td:not(." + tt + ")").filter(function() {
              return t(this.firstChild).attr(F.attr(Q)) === e;
            });
          },
          _class: function(e, n) {
            var a,
                r = this,
                i = r._cellID,
                o = r._cell,
                s = r._view.toDateString(n);
            o && o.removeAttr(ht).removeAttr("aria-label").removeAttr(R), n && (a = r.options.disableDates(n)), o = r._table.find("td:not(." + tt + ")").removeClass(e).filter(function() {
              return t(this.firstChild).attr(F.attr(Q)) === s;
            }).attr(ht, !0), (e === Z && !r._active && r.options.focusOnNav !== !1 || a) && (e = ""), o.addClass(e), o[0] && (r._cell = o), i && (o.attr(R, i), r._table.removeAttr("aria-activedescendant").attr("aria-activedescendant", i));
          },
          _bindTable: function(t) {
            t.on(ot, this._addClassProxy).on(rt, this._removeClassProxy);
          },
          _click: function(t) {
            var e = this,
                n = e.options,
                a = new Date(+e._current),
                r = e._toDateObject(t);
            T(r, 0), e.options.disableDates(r) && "month" == e._view.name && (r = e._value), e._view.setDate(a, r), e.navigateDown(o(a, n.min, n.max));
          },
          _focus: function(t) {
            var e = this,
                n = e._view;
            0 !== n.compare(t, e._current) ? e.navigate(t) : (e._current = t, e._class(Z, t));
          },
          _focusView: function(t, e) {
            t && this.focus(e);
          },
          _footer: function(n) {
            var a = this,
                r = i(),
                o = a.element,
                s = o.find(".k-footer");
            return n ? (s[0] || (s = t('<div class="k-footer"><a href="#" class="k-link k-nav-today"></a></div>').appendTo(o)), a._today = s.show().find(".k-link").html(n(r)).attr("title", F.toString(r, "D", a.options.culture)), a._toggle(), e) : (a._toggle(!1), s.hide(), e);
          },
          _header: function() {
            var t,
                e = this,
                n = e.element;
            n.find(".k-header")[0] || n.html('<div class="k-header"><a href="#" role="button" class="k-link k-nav-prev"><span class="k-icon k-i-arrow-w"></span></a><a href="#" role="button" aria-live="assertive" aria-atomic="true" class="k-link k-nav-fast"></a><a href="#" role="button" class="k-link k-nav-next"><span class="k-icon k-i-arrow-e"></span></a></div>'), t = n.find(".k-link").on(lt + " " + ut + " " + ot + " " + rt, c).click(!1), e._title = t.eq(1).on(B, function() {
              e._active = e.options.focusOnNav !== !1, e.navigateUp();
            }), e[dt] = t.eq(0).on(B, function() {
              e._active = e.options.focusOnNav !== !1, e.navigateToPast();
            }), e[gt] = t.eq(2).on(B, function() {
              e._active = e.options.focusOnNav !== !1, e.navigateToFuture();
            });
          },
          _navigate: function(t, e) {
            var n = this,
                a = n._index + 1,
                r = new pt(+n._current);
            t = n[t], t.hasClass(X) || (a > 3 ? r.setFullYear(r.getFullYear() + 100 * e) : b.views[a].setDate(r, e), n.navigate(r));
          },
          _option: function(t, n) {
            var a,
                r = this,
                i = r.options,
                o = r._value || r._current;
            return n === e ? i[t] : (n = M(n, i.format, i.culture), n && (i[t] = new pt(+n), a = t === U ? n > o : o > n, (a || m(o, n)) && (a && (r._value = null), r._changeView = !0), r._changeView || (r._changeView = !(!i.month.content && !i.month.empty)), r.navigate(r._value), r._toggle()), e);
          },
          _toggle: function(t) {
            var n = this,
                a = n.options,
                r = n.options.disableDates(i()),
                o = n._today;
            t === e && (t = s(i(), a.min, a.max)), o && (o.off(B), t && !r ? o.addClass(nt).removeClass(X).on(B, _t(n._todayClick, n)) : o.removeClass(nt).addClass(X).on(B, f));
          },
          _todayClick: function(t) {
            var e = this,
                n = wt[e.options.depth],
                a = e.options.disableDates,
                r = i();
            t.preventDefault(), a(r) || (0 === e._view.compare(e._current, r) && e._index == n && (e._changeView = !1), e._value = r, e.navigate(r, n), e.trigger($));
          },
          _toDateObject: function(e) {
            var n = t(e).attr(F.attr(Q)).split("/");
            return n = new pt(n[0], n[1], n[2]);
          },
          _templates: function() {
            var t = this,
                e = t.options,
                n = e.footer,
                a = e.month,
                r = a.content,
                i = a.empty;
            t.month = {
              content: O('<td#=data.cssClass# role="gridcell"><a tabindex="-1" class="k-link#=data.linkClass#" href="#=data.url#" ' + F.attr("value") + '="#=data.dateString#" title="#=data.title#">' + (r || "#=data.value#") + "</a></td>", {useWithBlock: !!r}),
              empty: O('<td role="gridcell">' + (i || "&nbsp;") + "</td>", {useWithBlock: !!i})
            }, t.footer = n !== !1 ? O(n || '#= kendo.toString(data,"D","' + e.culture + '") #', {useWithBlock: !1}) : null;
          }
        });
    x.plugin(Dt), b = {
      firstDayOfMonth: function(t) {
        return new pt(t.getFullYear(), t.getMonth(), 1);
      },
      firstVisibleDay: function(t, e) {
        e = e || F.culture().calendar;
        for (var n = e.firstDay,
            a = new pt(t.getFullYear(), t.getMonth(), 0, t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds()); a.getDay() != n; )
          b.setTime(a, -1 * ft);
        return a;
      },
      setTime: function(t, e) {
        var n = t.getTimezoneOffset(),
            a = new pt(t.getTime() + e),
            r = a.getTimezoneOffset() - n;
        t.setTime(a.getTime() + r * ct);
      },
      views: [{
        name: L,
        title: function(t, e, n, a) {
          return d(a).months.names[t.getMonth()] + " " + t.getFullYear();
        },
        content: function(t) {
          for (var e = this,
              n = 0,
              r = t.min,
              i = t.max,
              o = t.date,
              s = t.dates,
              u = t.format,
              c = t.culture,
              f = t.url,
              g = f && s[0],
              v = d(c),
              _ = v.firstDay,
              m = v.days,
              p = l(m.names, _),
              w = l(m.namesShort, _),
              D = b.firstVisibleDay(o, v),
              k = e.first(o),
              y = e.last(o),
              x = e.toDateString,
              Y = new pt,
              C = '<table tabindex="0" role="grid" class="k-content" cellspacing="0" data-start="' + x(D) + '"><thead><tr role="row">'; 7 > n; n++)
            C += '<th scope="col" title="' + p[n] + '">' + w[n] + "</th>";
          return Y = new pt(Y.getFullYear(), Y.getMonth(), Y.getDate()), T(Y, 0), Y = +Y, a({
            cells: 42,
            perRow: 7,
            html: C += '</tr></thead><tbody><tr role="row">',
            start: D,
            min: new pt(r.getFullYear(), r.getMonth(), r.getDate()),
            max: new pt(i.getFullYear(), i.getMonth(), i.getDate()),
            content: t.content,
            empty: t.empty,
            setter: e.setDate,
            disableDates: t.disableDates,
            build: function(t, e, n) {
              var a = [],
                  r = t.getDay(),
                  i = "",
                  o = "#";
              return (k > t || t > y) && a.push(tt), n(t) && a.push(X), +t === Y && a.push("k-today"), (0 === r || 6 === r) && a.push("k-weekend"), g && h(+t, s) && (o = f.replace("{0}", F.toString(t, u, c)), i = " k-action-link"), {
                date: t,
                dates: s,
                ns: F.ns,
                title: F.toString(t, "D", c),
                value: t.getDate(),
                dateString: x(t),
                cssClass: a[0] ? ' class="' + a.join(" ") + '"' : "",
                linkClass: i,
                url: o
              };
            }
          });
        },
        first: function(t) {
          return b.firstDayOfMonth(t);
        },
        last: function(t) {
          var e = new pt(t.getFullYear(), t.getMonth() + 1, 0),
              n = b.firstDayOfMonth(t),
              a = Math.abs(e.getTimezoneOffset() - n.getTimezoneOffset());
          return a && e.setHours(n.getHours() + a / 60), e;
        },
        compare: function(t, e) {
          var n,
              a = t.getMonth(),
              r = t.getFullYear(),
              i = e.getMonth(),
              o = e.getFullYear();
          return n = r > o ? 1 : o > r ? -1 : a == i ? 0 : a > i ? 1 : -1;
        },
        setDate: function(t, e) {
          var n = t.getHours();
          e instanceof pt ? t.setFullYear(e.getFullYear(), e.getMonth(), e.getDate()) : b.setTime(t, e * ft), T(t, n);
        },
        toDateString: function(t) {
          return t.getFullYear() + "/" + t.getMonth() + "/" + t.getDate();
        }
      }, {
        name: "year",
        title: function(t) {
          return t.getFullYear();
        },
        content: function(t) {
          var e = d(t.culture).months.namesAbbr,
              n = this.toDateString,
              r = t.min,
              i = t.max;
          return a({
            min: new pt(r.getFullYear(), r.getMonth(), 1),
            max: new pt(i.getFullYear(), i.getMonth(), 1),
            start: new pt(t.date.getFullYear(), 0, 1),
            setter: this.setDate,
            build: function(t) {
              return {
                value: e[t.getMonth()],
                ns: F.ns,
                dateString: n(t),
                cssClass: ""
              };
            }
          });
        },
        first: function(t) {
          return new pt(t.getFullYear(), 0, t.getDate());
        },
        last: function(t) {
          return new pt(t.getFullYear(), 11, t.getDate());
        },
        compare: function(t, e) {
          return r(t, e);
        },
        setDate: function(t, e) {
          var n,
              a = t.getHours();
          e instanceof pt ? (n = e.getMonth(), t.setFullYear(e.getFullYear(), n, t.getDate()), n !== t.getMonth() && t.setDate(0)) : (n = t.getMonth() + e, t.setMonth(n), n > 11 && (n -= 12), n > 0 && t.getMonth() != n && t.setDate(0)), T(t, a);
        },
        toDateString: function(t) {
          return t.getFullYear() + "/" + t.getMonth() + "/1";
        }
      }, {
        name: "decade",
        title: function(t, e, a) {
          return n(t, e, a, 10);
        },
        content: function(t) {
          var e = t.date.getFullYear(),
              n = this.toDateString;
          return a({
            start: new pt(e - e % 10 - 1, 0, 1),
            min: new pt(t.min.getFullYear(), 0, 1),
            max: new pt(t.max.getFullYear(), 0, 1),
            setter: this.setDate,
            build: function(t, e) {
              return {
                value: t.getFullYear(),
                ns: F.ns,
                dateString: n(t),
                cssClass: 0 === e || 11 == e ? et : ""
              };
            }
          });
        },
        first: function(t) {
          var e = t.getFullYear();
          return new pt(e - e % 10, t.getMonth(), t.getDate());
        },
        last: function(t) {
          var e = t.getFullYear();
          return new pt(e - e % 10 + 9, t.getMonth(), t.getDate());
        },
        compare: function(t, e) {
          return r(t, e, 10);
        },
        setDate: function(t, e) {
          u(t, e, 1);
        },
        toDateString: function(t) {
          return t.getFullYear() + "/0/1";
        }
      }, {
        name: q,
        title: function(t, e, a) {
          return n(t, e, a, 100);
        },
        content: function(t) {
          var e = t.date.getFullYear(),
              n = t.min.getFullYear(),
              r = t.max.getFullYear(),
              i = this.toDateString,
              o = n,
              s = r;
          return o -= o % 10, s -= s % 10, 10 > s - o && (s = o + 9), a({
            start: new pt(e - e % 100 - 10, 0, 1),
            min: new pt(o, 0, 1),
            max: new pt(s, 0, 1),
            setter: this.setDate,
            build: function(t, e) {
              var a = t.getFullYear(),
                  o = a + 9;
              return n > a && (a = n), o > r && (o = r), {
                ns: F.ns,
                value: a + " - " + o,
                dateString: i(t),
                cssClass: 0 === e || 11 == e ? et : ""
              };
            }
          });
        },
        first: function(t) {
          var e = t.getFullYear();
          return new pt(e - e % 100, t.getMonth(), t.getDate());
        },
        last: function(t) {
          var e = t.getFullYear();
          return new pt(e - e % 100 + 99, t.getMonth(), t.getDate());
        },
        compare: function(t, e) {
          return r(t, e, 100);
        },
        setDate: function(t, e) {
          u(t, e, 10);
        },
        toDateString: function(t) {
          var e = t.getFullYear();
          return e - e % 10 + "/0/1";
        }
      }]
    }, b.isEqualDatePart = _, b.makeUnselectable = v, b.restrictValue = o, b.isInRange = s, b.normalize = g, b.viewsEnum = wt, b.disabled = p, F.calendar = b;
  }(window.kendo.jQuery), window.kendo;
}, "function" == typeof define && define.amd ? define : function(t, e, n) {
  (n || e)();
});

})();
$__System.registerDynamic("b", [], false, function ($__require, $__exports, $__module) {
  var _retrieveGlobal = $__System.get("@@global-helpers").prepareGlobal($__module.id, "$", null);

  (function ($__global) {
    /*! jQuery v1.12.3 | (c) jQuery Foundation | jquery.org/license */
    !function (a, b) {
      "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function (a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");return b(a);
      } : b(a);
    }("undefined" != typeof window ? window : this, function (a, b) {
      var c = [],
          d = a.document,
          e = c.slice,
          f = c.concat,
          g = c.push,
          h = c.indexOf,
          i = {},
          j = i.toString,
          k = i.hasOwnProperty,
          l = {},
          m = "1.12.3",
          n = function (a, b) {
        return new n.fn.init(a, b);
      },
          o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
          p = /^-ms-/,
          q = /-([\da-z])/gi,
          r = function (a, b) {
        return b.toUpperCase();
      };n.fn = n.prototype = { jquery: m, constructor: n, selector: "", length: 0, toArray: function () {
          return e.call(this);
        }, get: function (a) {
          return null != a ? 0 > a ? this[a + this.length] : this[a] : e.call(this);
        }, pushStack: function (a) {
          var b = n.merge(this.constructor(), a);return b.prevObject = this, b.context = this.context, b;
        }, each: function (a) {
          return n.each(this, a);
        }, map: function (a) {
          return this.pushStack(n.map(this, function (b, c) {
            return a.call(b, c, b);
          }));
        }, slice: function () {
          return this.pushStack(e.apply(this, arguments));
        }, first: function () {
          return this.eq(0);
        }, last: function () {
          return this.eq(-1);
        }, eq: function (a) {
          var b = this.length,
              c = +a + (0 > a ? b : 0);return this.pushStack(c >= 0 && b > c ? [this[c]] : []);
        }, end: function () {
          return this.prevObject || this.constructor();
        }, push: g, sort: c.sort, splice: c.splice }, n.extend = n.fn.extend = function () {
        var a,
            b,
            c,
            d,
            e,
            f,
            g = arguments[0] || {},
            h = 1,
            i = arguments.length,
            j = !1;for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++) if (null != (e = arguments[h])) for (d in e) a = g[d], c = e[d], g !== c && (j && c && (n.isPlainObject(c) || (b = n.isArray(c))) ? (b ? (b = !1, f = a && n.isArray(a) ? a : []) : f = a && n.isPlainObject(a) ? a : {}, g[d] = n.extend(j, f, c)) : void 0 !== c && (g[d] = c));return g;
      }, n.extend({ expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (a) {
          throw new Error(a);
        }, noop: function () {}, isFunction: function (a) {
          return "function" === n.type(a);
        }, isArray: Array.isArray || function (a) {
          return "array" === n.type(a);
        }, isWindow: function (a) {
          return null != a && a == a.window;
        }, isNumeric: function (a) {
          var b = a && a.toString();return !n.isArray(a) && b - parseFloat(b) + 1 >= 0;
        }, isEmptyObject: function (a) {
          var b;for (b in a) return !1;return !0;
        }, isPlainObject: function (a) {
          var b;if (!a || "object" !== n.type(a) || a.nodeType || n.isWindow(a)) return !1;try {
            if (a.constructor && !k.call(a, "constructor") && !k.call(a.constructor.prototype, "isPrototypeOf")) return !1;
          } catch (c) {
            return !1;
          }if (!l.ownFirst) for (b in a) return k.call(a, b);for (b in a);return void 0 === b || k.call(a, b);
        }, type: function (a) {
          return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? i[j.call(a)] || "object" : typeof a;
        }, globalEval: function (b) {
          b && n.trim(b) && (a.execScript || function (b) {
            a.eval.call(a, b);
          })(b);
        }, camelCase: function (a) {
          return a.replace(p, "ms-").replace(q, r);
        }, nodeName: function (a, b) {
          return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
        }, each: function (a, b) {
          var c,
              d = 0;if (s(a)) {
            for (c = a.length; c > d; d++) if (b.call(a[d], d, a[d]) === !1) break;
          } else for (d in a) if (b.call(a[d], d, a[d]) === !1) break;return a;
        }, trim: function (a) {
          return null == a ? "" : (a + "").replace(o, "");
        }, makeArray: function (a, b) {
          var c = b || [];return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : g.call(c, a)), c;
        }, inArray: function (a, b, c) {
          var d;if (b) {
            if (h) return h.call(b, a, c);for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++) if (c in b && b[c] === a) return c;
          }return -1;
        }, merge: function (a, b) {
          var c = +b.length,
              d = 0,
              e = a.length;while (c > d) a[e++] = b[d++];if (c !== c) while (void 0 !== b[d]) a[e++] = b[d++];return a.length = e, a;
        }, grep: function (a, b, c) {
          for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);return e;
        }, map: function (a, b, c) {
          var d,
              e,
              g = 0,
              h = [];if (s(a)) for (d = a.length; d > g; g++) e = b(a[g], g, c), null != e && h.push(e);else for (g in a) e = b(a[g], g, c), null != e && h.push(e);return f.apply([], h);
        }, guid: 1, proxy: function (a, b) {
          var c, d, f;return "string" == typeof b && (f = a[b], b = a, a = f), n.isFunction(a) ? (c = e.call(arguments, 2), d = function () {
            return a.apply(b || this, c.concat(e.call(arguments)));
          }, d.guid = a.guid = a.guid || n.guid++, d) : void 0;
        }, now: function () {
          return +new Date();
        }, support: l }), "function" == typeof Symbol && (n.fn[Symbol.iterator] = c[Symbol.iterator]), n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (a, b) {
        i["[object " + b + "]"] = b.toLowerCase();
      });function s(a) {
        var b = !!a && "length" in a && a.length,
            c = n.type(a);return "function" === c || n.isWindow(a) ? !1 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a;
      }var t = function (a) {
        var b,
            c,
            d,
            e,
            f,
            g,
            h,
            i,
            j,
            k,
            l,
            m,
            n,
            o,
            p,
            q,
            r,
            s,
            t,
            u = "sizzle" + 1 * new Date(),
            v = a.document,
            w = 0,
            x = 0,
            y = ga(),
            z = ga(),
            A = ga(),
            B = function (a, b) {
          return a === b && (l = !0), 0;
        },
            C = 1 << 31,
            D = {}.hasOwnProperty,
            E = [],
            F = E.pop,
            G = E.push,
            H = E.push,
            I = E.slice,
            J = function (a, b) {
          for (var c = 0, d = a.length; d > c; c++) if (a[c] === b) return c;return -1;
        },
            K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            L = "[\\x20\\t\\r\\n\\f]",
            M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            N = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + L + "*\\]",
            O = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + N + ")*)|.*)\\)|)",
            P = new RegExp(L + "+", "g"),
            Q = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
            R = new RegExp("^" + L + "*," + L + "*"),
            S = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
            T = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
            U = new RegExp(O),
            V = new RegExp("^" + M + "$"),
            W = { ID: new RegExp("^#(" + M + ")"), CLASS: new RegExp("^\\.(" + M + ")"), TAG: new RegExp("^(" + M + "|[*])"), ATTR: new RegExp("^" + N), PSEUDO: new RegExp("^" + O), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"), bool: new RegExp("^(?:" + K + ")$", "i"), needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i") },
            X = /^(?:input|select|textarea|button)$/i,
            Y = /^h\d$/i,
            Z = /^[^{]+\{\s*\[native \w/,
            $ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            _ = /[+~]/,
            aa = /'|\\/g,
            ba = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
            ca = function (a, b, c) {
          var d = "0x" + b - 65536;return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320);
        },
            da = function () {
          m();
        };try {
          H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType;
        } catch (ea) {
          H = { apply: E.length ? function (a, b) {
              G.apply(a, I.call(b));
            } : function (a, b) {
              var c = a.length,
                  d = 0;while (a[c++] = b[d++]);a.length = c - 1;
            } };
        }function fa(a, b, d, e) {
          var f,
              h,
              j,
              k,
              l,
              o,
              r,
              s,
              w = b && b.ownerDocument,
              x = b ? b.nodeType : 9;if (d = d || [], "string" != typeof a || !a || 1 !== x && 9 !== x && 11 !== x) return d;if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) {
            if (11 !== x && (o = $.exec(a))) if (f = o[1]) {
              if (9 === x) {
                if (!(j = b.getElementById(f))) return d;if (j.id === f) return d.push(j), d;
              } else if (w && (j = w.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), d;
            } else {
              if (o[2]) return H.apply(d, b.getElementsByTagName(a)), d;if ((f = o[3]) && c.getElementsByClassName && b.getElementsByClassName) return H.apply(d, b.getElementsByClassName(f)), d;
            }if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
              if (1 !== x) w = b, s = a;else if ("object" !== b.nodeName.toLowerCase()) {
                (k = b.getAttribute("id")) ? k = k.replace(aa, "\\$&") : b.setAttribute("id", k = u), r = g(a), h = r.length, l = V.test(k) ? "#" + k : "[id='" + k + "']";while (h--) r[h] = l + " " + qa(r[h]);s = r.join(","), w = _.test(a) && oa(b.parentNode) || b;
              }if (s) try {
                return H.apply(d, w.querySelectorAll(s)), d;
              } catch (y) {} finally {
                k === u && b.removeAttribute("id");
              }
            }
          }return i(a.replace(Q, "$1"), b, d, e);
        }function ga() {
          var a = [];function b(c, e) {
            return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e;
          }return b;
        }function ha(a) {
          return a[u] = !0, a;
        }function ia(a) {
          var b = n.createElement("div");try {
            return !!a(b);
          } catch (c) {
            return !1;
          } finally {
            b.parentNode && b.parentNode.removeChild(b), b = null;
          }
        }function ja(a, b) {
          var c = a.split("|"),
              e = c.length;while (e--) d.attrHandle[c[e]] = b;
        }function ka(a, b) {
          var c = b && a,
              d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);if (d) return d;if (c) while (c = c.nextSibling) if (c === b) return -1;return a ? 1 : -1;
        }function la(a) {
          return function (b) {
            var c = b.nodeName.toLowerCase();return "input" === c && b.type === a;
          };
        }function ma(a) {
          return function (b) {
            var c = b.nodeName.toLowerCase();return ("input" === c || "button" === c) && b.type === a;
          };
        }function na(a) {
          return ha(function (b) {
            return b = +b, ha(function (c, d) {
              var e,
                  f = a([], c.length, b),
                  g = f.length;while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]));
            });
          });
        }function oa(a) {
          return a && "undefined" != typeof a.getElementsByTagName && a;
        }c = fa.support = {}, f = fa.isXML = function (a) {
          var b = a && (a.ownerDocument || a).documentElement;return b ? "HTML" !== b.nodeName : !1;
        }, m = fa.setDocument = function (a) {
          var b,
              e,
              g = a ? a.ownerDocument || a : v;return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ia(function (a) {
            return a.className = "i", !a.getAttribute("className");
          }), c.getElementsByTagName = ia(function (a) {
            return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length;
          }), c.getElementsByClassName = Z.test(n.getElementsByClassName), c.getById = ia(function (a) {
            return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length;
          }), c.getById ? (d.find.ID = function (a, b) {
            if ("undefined" != typeof b.getElementById && p) {
              var c = b.getElementById(a);return c ? [c] : [];
            }
          }, d.filter.ID = function (a) {
            var b = a.replace(ba, ca);return function (a) {
              return a.getAttribute("id") === b;
            };
          }) : (delete d.find.ID, d.filter.ID = function (a) {
            var b = a.replace(ba, ca);return function (a) {
              var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");return c && c.value === b;
            };
          }), d.find.TAG = c.getElementsByTagName ? function (a, b) {
            return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0;
          } : function (a, b) {
            var c,
                d = [],
                e = 0,
                f = b.getElementsByTagName(a);if ("*" === a) {
              while (c = f[e++]) 1 === c.nodeType && d.push(c);return d;
            }return f;
          }, d.find.CLASS = c.getElementsByClassName && function (a, b) {
            return "undefined" != typeof b.getElementsByClassName && p ? b.getElementsByClassName(a) : void 0;
          }, r = [], q = [], (c.qsa = Z.test(n.querySelectorAll)) && (ia(function (a) {
            o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]");
          }), ia(function (a) {
            var b = n.createElement("input");b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:");
          })), (c.matchesSelector = Z.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ia(function (a) {
            c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", O);
          }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Z.test(o.compareDocumentPosition), t = b || Z.test(o.contains) ? function (a, b) {
            var c = 9 === a.nodeType ? a.documentElement : a,
                d = b && b.parentNode;return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)));
          } : function (a, b) {
            if (b) while (b = b.parentNode) if (b === a) return !0;return !1;
          }, B = b ? function (a, b) {
            if (a === b) return l = !0, 0;var d = !a.compareDocumentPosition - !b.compareDocumentPosition;return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1);
          } : function (a, b) {
            if (a === b) return l = !0, 0;var c,
                d = 0,
                e = a.parentNode,
                f = b.parentNode,
                g = [a],
                h = [b];if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;if (e === f) return ka(a, b);c = a;while (c = c.parentNode) g.unshift(c);c = b;while (c = c.parentNode) h.unshift(c);while (g[d] === h[d]) d++;return d ? ka(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0;
          }, n) : n;
        }, fa.matches = function (a, b) {
          return fa(a, null, null, b);
        }, fa.matchesSelector = function (a, b) {
          if ((a.ownerDocument || a) !== n && m(a), b = b.replace(T, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) try {
            var d = s.call(a, b);if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d;
          } catch (e) {}return fa(b, n, null, [a]).length > 0;
        }, fa.contains = function (a, b) {
          return (a.ownerDocument || a) !== n && m(a), t(a, b);
        }, fa.attr = function (a, b) {
          (a.ownerDocument || a) !== n && m(a);var e = d.attrHandle[b.toLowerCase()],
              f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null;
        }, fa.error = function (a) {
          throw new Error("Syntax error, unrecognized expression: " + a);
        }, fa.uniqueSort = function (a) {
          var b,
              d = [],
              e = 0,
              f = 0;if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
            while (b = a[f++]) b === a[f] && (e = d.push(f));while (e--) a.splice(d[e], 1);
          }return k = null, a;
        }, e = fa.getText = function (a) {
          var b,
              c = "",
              d = 0,
              f = a.nodeType;if (f) {
            if (1 === f || 9 === f || 11 === f) {
              if ("string" == typeof a.textContent) return a.textContent;for (a = a.firstChild; a; a = a.nextSibling) c += e(a);
            } else if (3 === f || 4 === f) return a.nodeValue;
          } else while (b = a[d++]) c += e(b);return c;
        }, d = fa.selectors = { cacheLength: 50, createPseudo: ha, match: W, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function (a) {
              return a[1] = a[1].replace(ba, ca), a[3] = (a[3] || a[4] || a[5] || "").replace(ba, ca), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4);
            }, CHILD: function (a) {
              return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || fa.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && fa.error(a[0]), a;
            }, PSEUDO: function (a) {
              var b,
                  c = !a[6] && a[2];return W.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && U.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3));
            } }, filter: { TAG: function (a) {
              var b = a.replace(ba, ca).toLowerCase();return "*" === a ? function () {
                return !0;
              } : function (a) {
                return a.nodeName && a.nodeName.toLowerCase() === b;
              };
            }, CLASS: function (a) {
              var b = y[a + " "];return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function (a) {
                return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "");
              });
            }, ATTR: function (a, b, c) {
              return function (d) {
                var e = fa.attr(d, a);return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(P, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0;
              };
            }, CHILD: function (a, b, c, d, e) {
              var f = "nth" !== a.slice(0, 3),
                  g = "last" !== a.slice(-4),
                  h = "of-type" === b;return 1 === d && 0 === e ? function (a) {
                return !!a.parentNode;
              } : function (b, c, i) {
                var j,
                    k,
                    l,
                    m,
                    n,
                    o,
                    p = f !== g ? "nextSibling" : "previousSibling",
                    q = b.parentNode,
                    r = h && b.nodeName.toLowerCase(),
                    s = !i && !h,
                    t = !1;if (q) {
                  if (f) {
                    while (p) {
                      m = b;while (m = m[p]) if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;o = p = "only" === a && !o && "nextSibling";
                    }return !0;
                  }if (o = [g ? q.firstChild : q.lastChild], g && s) {
                    m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n];while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) if (1 === m.nodeType && ++t && m === b) {
                      k[a] = [w, n, t];break;
                    }
                  } else if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), t === !1) while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m === b)) break;return t -= e, t === d || t % d === 0 && t / d >= 0;
                }
              };
            }, PSEUDO: function (a, b) {
              var c,
                  e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fa.error("unsupported pseudo: " + a);return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ha(function (a, c) {
                var d,
                    f = e(a, b),
                    g = f.length;while (g--) d = J(a, f[g]), a[d] = !(c[d] = f[g]);
              }) : function (a) {
                return e(a, 0, c);
              }) : e;
            } }, pseudos: { not: ha(function (a) {
              var b = [],
                  c = [],
                  d = h(a.replace(Q, "$1"));return d[u] ? ha(function (a, b, c, e) {
                var f,
                    g = d(a, null, e, []),
                    h = a.length;while (h--) (f = g[h]) && (a[h] = !(b[h] = f));
              }) : function (a, e, f) {
                return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop();
              };
            }), has: ha(function (a) {
              return function (b) {
                return fa(a, b).length > 0;
              };
            }), contains: ha(function (a) {
              return a = a.replace(ba, ca), function (b) {
                return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
              };
            }), lang: ha(function (a) {
              return V.test(a || "") || fa.error("unsupported lang: " + a), a = a.replace(ba, ca).toLowerCase(), function (b) {
                var c;do if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);return !1;
              };
            }), target: function (b) {
              var c = a.location && a.location.hash;return c && c.slice(1) === b.id;
            }, root: function (a) {
              return a === o;
            }, focus: function (a) {
              return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex);
            }, enabled: function (a) {
              return a.disabled === !1;
            }, disabled: function (a) {
              return a.disabled === !0;
            }, checked: function (a) {
              var b = a.nodeName.toLowerCase();return "input" === b && !!a.checked || "option" === b && !!a.selected;
            }, selected: function (a) {
              return a.parentNode && a.parentNode.selectedIndex, a.selected === !0;
            }, empty: function (a) {
              for (a = a.firstChild; a; a = a.nextSibling) if (a.nodeType < 6) return !1;return !0;
            }, parent: function (a) {
              return !d.pseudos.empty(a);
            }, header: function (a) {
              return Y.test(a.nodeName);
            }, input: function (a) {
              return X.test(a.nodeName);
            }, button: function (a) {
              var b = a.nodeName.toLowerCase();return "input" === b && "button" === a.type || "button" === b;
            }, text: function (a) {
              var b;return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase());
            }, first: na(function () {
              return [0];
            }), last: na(function (a, b) {
              return [b - 1];
            }), eq: na(function (a, b, c) {
              return [0 > c ? c + b : c];
            }), even: na(function (a, b) {
              for (var c = 0; b > c; c += 2) a.push(c);return a;
            }), odd: na(function (a, b) {
              for (var c = 1; b > c; c += 2) a.push(c);return a;
            }), lt: na(function (a, b, c) {
              for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);return a;
            }), gt: na(function (a, b, c) {
              for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);return a;
            }) } }, d.pseudos.nth = d.pseudos.eq;for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) d.pseudos[b] = la(b);for (b in { submit: !0, reset: !0 }) d.pseudos[b] = ma(b);function pa() {}pa.prototype = d.filters = d.pseudos, d.setFilters = new pa(), g = fa.tokenize = function (a, b) {
          var c,
              e,
              f,
              g,
              h,
              i,
              j,
              k = z[a + " "];if (k) return b ? 0 : k.slice(0);h = a, i = [], j = d.preFilter;while (h) {
            c && !(e = R.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = S.exec(h)) && (c = e.shift(), f.push({ value: c, type: e[0].replace(Q, " ") }), h = h.slice(c.length));for (g in d.filter) !(e = W[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({ value: c, type: g, matches: e }), h = h.slice(c.length));if (!c) break;
          }return b ? h.length : h ? fa.error(a) : z(a, i).slice(0);
        };function qa(a) {
          for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;return d;
        }function ra(a, b, c) {
          var d = b.dir,
              e = c && "parentNode" === d,
              f = x++;return b.first ? function (b, c, f) {
            while (b = b[d]) if (1 === b.nodeType || e) return a(b, c, f);
          } : function (b, c, g) {
            var h,
                i,
                j,
                k = [w, f];if (g) {
              while (b = b[d]) if ((1 === b.nodeType || e) && a(b, c, g)) return !0;
            } else while (b = b[d]) if (1 === b.nodeType || e) {
              if (j = b[u] || (b[u] = {}), i = j[b.uniqueID] || (j[b.uniqueID] = {}), (h = i[d]) && h[0] === w && h[1] === f) return k[2] = h[2];if (i[d] = k, k[2] = a(b, c, g)) return !0;
            }
          };
        }function sa(a) {
          return a.length > 1 ? function (b, c, d) {
            var e = a.length;while (e--) if (!a[e](b, c, d)) return !1;return !0;
          } : a[0];
        }function ta(a, b, c) {
          for (var d = 0, e = b.length; e > d; d++) fa(a, b[d], c);return c;
        }function ua(a, b, c, d, e) {
          for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++) (f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h)));return g;
        }function va(a, b, c, d, e, f) {
          return d && !d[u] && (d = va(d)), e && !e[u] && (e = va(e, f)), ha(function (f, g, h, i) {
            var j,
                k,
                l,
                m = [],
                n = [],
                o = g.length,
                p = f || ta(b || "*", h.nodeType ? [h] : h, []),
                q = !a || !f && b ? p : ua(p, m, a, h, i),
                r = c ? e || (f ? a : o || d) ? [] : g : q;if (c && c(q, r, h, i), d) {
              j = ua(r, n), d(j, [], h, i), k = j.length;while (k--) (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
            }if (f) {
              if (e || a) {
                if (e) {
                  j = [], k = r.length;while (k--) (l = r[k]) && j.push(q[k] = l);e(null, r = [], j, i);
                }k = r.length;while (k--) (l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l));
              }
            } else r = ua(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r);
          });
        }function wa(a) {
          for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ra(function (a) {
            return a === b;
          }, h, !0), l = ra(function (a) {
            return J(b, a) > -1;
          }, h, !0), m = [function (a, c, d) {
            var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));return b = null, e;
          }]; f > i; i++) if (c = d.relative[a[i].type]) m = [ra(sa(m), c)];else {
            if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
              for (e = ++i; f > e; e++) if (d.relative[a[e].type]) break;return va(i > 1 && sa(m), i > 1 && qa(a.slice(0, i - 1).concat({ value: " " === a[i - 2].type ? "*" : "" })).replace(Q, "$1"), c, e > i && wa(a.slice(i, e)), f > e && wa(a = a.slice(e)), f > e && qa(a));
            }m.push(c);
          }return sa(m);
        }function xa(a, b) {
          var c = b.length > 0,
              e = a.length > 0,
              f = function (f, g, h, i, k) {
            var l,
                o,
                q,
                r = 0,
                s = "0",
                t = f && [],
                u = [],
                v = j,
                x = f || e && d.find.TAG("*", k),
                y = w += null == v ? 1 : Math.random() || .1,
                z = x.length;for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
              if (e && l) {
                o = 0, g || l.ownerDocument === n || (m(l), h = !p);while (q = a[o++]) if (q(l, g || n, h)) {
                  i.push(l);break;
                }k && (w = y);
              }c && ((l = !q && l) && r--, f && t.push(l));
            }if (r += s, c && s !== r) {
              o = 0;while (q = b[o++]) q(t, u, g, h);if (f) {
                if (r > 0) while (s--) t[s] || u[s] || (u[s] = F.call(i));u = ua(u);
              }H.apply(i, u), k && !f && u.length > 0 && r + b.length > 1 && fa.uniqueSort(i);
            }return k && (w = y, j = v), t;
          };return c ? ha(f) : f;
        }return h = fa.compile = function (a, b) {
          var c,
              d = [],
              e = [],
              f = A[a + " "];if (!f) {
            b || (b = g(a)), c = b.length;while (c--) f = wa(b[c]), f[u] ? d.push(f) : e.push(f);f = A(a, xa(e, d)), f.selector = a;
          }return f;
        }, i = fa.select = function (a, b, e, f) {
          var i,
              j,
              k,
              l,
              m,
              n = "function" == typeof a && a,
              o = !f && g(a = n.selector || a);if (e = e || [], 1 === o.length) {
            if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
              if (b = (d.find.ID(k.matches[0].replace(ba, ca), b) || [])[0], !b) return e;n && (b = b.parentNode), a = a.slice(j.shift().value.length);
            }i = W.needsContext.test(a) ? 0 : j.length;while (i--) {
              if (k = j[i], d.relative[l = k.type]) break;if ((m = d.find[l]) && (f = m(k.matches[0].replace(ba, ca), _.test(j[0].type) && oa(b.parentNode) || b))) {
                if (j.splice(i, 1), a = f.length && qa(j), !a) return H.apply(e, f), e;break;
              }
            }
          }return (n || h(a, o))(f, b, !p, e, !b || _.test(a) && oa(b.parentNode) || b), e;
        }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ia(function (a) {
          return 1 & a.compareDocumentPosition(n.createElement("div"));
        }), ia(function (a) {
          return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href");
        }) || ja("type|href|height|width", function (a, b, c) {
          return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
        }), c.attributes && ia(function (a) {
          return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value");
        }) || ja("value", function (a, b, c) {
          return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue;
        }), ia(function (a) {
          return null == a.getAttribute("disabled");
        }) || ja(K, function (a, b, c) {
          var d;return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null;
        }), fa;
      }(a);n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.uniqueSort = n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;var u = function (a, b, c) {
        var d = [],
            e = void 0 !== c;while ((a = a[b]) && 9 !== a.nodeType) if (1 === a.nodeType) {
          if (e && n(a).is(c)) break;d.push(a);
        }return d;
      },
          v = function (a, b) {
        for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);return c;
      },
          w = n.expr.match.needsContext,
          x = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
          y = /^.[^:#\[\.,]*$/;function z(a, b, c) {
        if (n.isFunction(b)) return n.grep(a, function (a, d) {
          return !!b.call(a, d, a) !== c;
        });if (b.nodeType) return n.grep(a, function (a) {
          return a === b !== c;
        });if ("string" == typeof b) {
          if (y.test(b)) return n.filter(b, a, c);b = n.filter(b, a);
        }return n.grep(a, function (a) {
          return n.inArray(a, b) > -1 !== c;
        });
      }n.filter = function (a, b, c) {
        var d = b[0];return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function (a) {
          return 1 === a.nodeType;
        }));
      }, n.fn.extend({ find: function (a) {
          var b,
              c = [],
              d = this,
              e = d.length;if ("string" != typeof a) return this.pushStack(n(a).filter(function () {
            for (b = 0; e > b; b++) if (n.contains(d[b], this)) return !0;
          }));for (b = 0; e > b; b++) n.find(a, d[b], c);return c = this.pushStack(e > 1 ? n.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c;
        }, filter: function (a) {
          return this.pushStack(z(this, a || [], !1));
        }, not: function (a) {
          return this.pushStack(z(this, a || [], !0));
        }, is: function (a) {
          return !!z(this, "string" == typeof a && w.test(a) ? n(a) : a || [], !1).length;
        } });var A,
          B = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
          C = n.fn.init = function (a, b, c) {
        var e, f;if (!a) return this;if (c = c || A, "string" == typeof a) {
          if (e = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : B.exec(a), !e || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);if (e[1]) {
            if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), x.test(e[1]) && n.isPlainObject(b)) for (e in b) n.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);return this;
          }if (f = d.getElementById(e[2]), f && f.parentNode) {
            if (f.id !== e[2]) return A.find(a);this.length = 1, this[0] = f;
          }return this.context = d, this.selector = a, this;
        }return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? "undefined" != typeof c.ready ? c.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this));
      };C.prototype = n.fn, A = n(d);var D = /^(?:parents|prev(?:Until|All))/,
          E = { children: !0, contents: !0, next: !0, prev: !0 };n.fn.extend({ has: function (a) {
          var b,
              c = n(a, this),
              d = c.length;return this.filter(function () {
            for (b = 0; d > b; b++) if (n.contains(this, c[b])) return !0;
          });
        }, closest: function (a, b) {
          for (var c, d = 0, e = this.length, f = [], g = w.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++) for (c = this[d]; c && c !== b; c = c.parentNode) if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
            f.push(c);break;
          }return this.pushStack(f.length > 1 ? n.uniqueSort(f) : f);
        }, index: function (a) {
          return a ? "string" == typeof a ? n.inArray(this[0], n(a)) : n.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        }, add: function (a, b) {
          return this.pushStack(n.uniqueSort(n.merge(this.get(), n(a, b))));
        }, addBack: function (a) {
          return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
        } });function F(a, b) {
        do a = a[b]; while (a && 1 !== a.nodeType);return a;
      }n.each({ parent: function (a) {
          var b = a.parentNode;return b && 11 !== b.nodeType ? b : null;
        }, parents: function (a) {
          return u(a, "parentNode");
        }, parentsUntil: function (a, b, c) {
          return u(a, "parentNode", c);
        }, next: function (a) {
          return F(a, "nextSibling");
        }, prev: function (a) {
          return F(a, "previousSibling");
        }, nextAll: function (a) {
          return u(a, "nextSibling");
        }, prevAll: function (a) {
          return u(a, "previousSibling");
        }, nextUntil: function (a, b, c) {
          return u(a, "nextSibling", c);
        }, prevUntil: function (a, b, c) {
          return u(a, "previousSibling", c);
        }, siblings: function (a) {
          return v((a.parentNode || {}).firstChild, a);
        }, children: function (a) {
          return v(a.firstChild);
        }, contents: function (a) {
          return n.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : n.merge([], a.childNodes);
        } }, function (a, b) {
        n.fn[a] = function (c, d) {
          var e = n.map(this, b, c);return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (E[a] || (e = n.uniqueSort(e)), D.test(a) && (e = e.reverse())), this.pushStack(e);
        };
      });var G = /\S+/g;function H(a) {
        var b = {};return n.each(a.match(G) || [], function (a, c) {
          b[c] = !0;
        }), b;
      }n.Callbacks = function (a) {
        a = "string" == typeof a ? H(a) : n.extend({}, a);var b,
            c,
            d,
            e,
            f = [],
            g = [],
            h = -1,
            i = function () {
          for (e = a.once, d = b = !0; g.length; h = -1) {
            c = g.shift();while (++h < f.length) f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, c = !1);
          }a.memory || (c = !1), b = !1, e && (f = c ? [] : "");
        },
            j = { add: function () {
            return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) {
              n.each(b, function (b, c) {
                n.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== n.type(c) && d(c);
              });
            }(arguments), c && !b && i()), this;
          }, remove: function () {
            return n.each(arguments, function (a, b) {
              var c;while ((c = n.inArray(b, f, c)) > -1) f.splice(c, 1), h >= c && h--;
            }), this;
          }, has: function (a) {
            return a ? n.inArray(a, f) > -1 : f.length > 0;
          }, empty: function () {
            return f && (f = []), this;
          }, disable: function () {
            return e = g = [], f = c = "", this;
          }, disabled: function () {
            return !f;
          }, lock: function () {
            return e = !0, c || j.disable(), this;
          }, locked: function () {
            return !!e;
          }, fireWith: function (a, c) {
            return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this;
          }, fire: function () {
            return j.fireWith(this, arguments), this;
          }, fired: function () {
            return !!d;
          } };return j;
      }, n.extend({ Deferred: function (a) {
          var b = [["resolve", "done", n.Callbacks("once memory"), "resolved"], ["reject", "fail", n.Callbacks("once memory"), "rejected"], ["notify", "progress", n.Callbacks("memory")]],
              c = "pending",
              d = { state: function () {
              return c;
            }, always: function () {
              return e.done(arguments).fail(arguments), this;
            }, then: function () {
              var a = arguments;return n.Deferred(function (c) {
                n.each(b, function (b, f) {
                  var g = n.isFunction(a[b]) && a[b];e[f[1]](function () {
                    var a = g && g.apply(this, arguments);a && n.isFunction(a.promise) ? a.promise().progress(c.notify).done(c.resolve).fail(c.reject) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments);
                  });
                }), a = null;
              }).promise();
            }, promise: function (a) {
              return null != a ? n.extend(a, d) : d;
            } },
              e = {};return d.pipe = d.then, n.each(b, function (a, f) {
            var g = f[2],
                h = f[3];d[f[1]] = g.add, h && g.add(function () {
              c = h;
            }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function () {
              return e[f[0] + "With"](this === e ? d : this, arguments), this;
            }, e[f[0] + "With"] = g.fireWith;
          }), d.promise(e), a && a.call(e, e), e;
        }, when: function (a) {
          var b = 0,
              c = e.call(arguments),
              d = c.length,
              f = 1 !== d || a && n.isFunction(a.promise) ? d : 0,
              g = 1 === f ? a : n.Deferred(),
              h = function (a, b, c) {
            return function (d) {
              b[a] = this, c[a] = arguments.length > 1 ? e.call(arguments) : d, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c);
            };
          },
              i,
              j,
              k;if (d > 1) for (i = new Array(d), j = new Array(d), k = new Array(d); d > b; b++) c[b] && n.isFunction(c[b].promise) ? c[b].promise().progress(h(b, j, i)).done(h(b, k, c)).fail(g.reject) : --f;return f || g.resolveWith(k, c), g.promise();
        } });var I;n.fn.ready = function (a) {
        return n.ready.promise().done(a), this;
      }, n.extend({ isReady: !1, readyWait: 1, holdReady: function (a) {
          a ? n.readyWait++ : n.ready(!0);
        }, ready: function (a) {
          (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, a !== !0 && --n.readyWait > 0 || (I.resolveWith(d, [n]), n.fn.triggerHandler && (n(d).triggerHandler("ready"), n(d).off("ready"))));
        } });function J() {
        d.addEventListener ? (d.removeEventListener("DOMContentLoaded", K), a.removeEventListener("load", K)) : (d.detachEvent("onreadystatechange", K), a.detachEvent("onload", K));
      }function K() {
        (d.addEventListener || "load" === a.event.type || "complete" === d.readyState) && (J(), n.ready());
      }n.ready.promise = function (b) {
        if (!I) if (I = n.Deferred(), "complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll) a.setTimeout(n.ready);else if (d.addEventListener) d.addEventListener("DOMContentLoaded", K), a.addEventListener("load", K);else {
          d.attachEvent("onreadystatechange", K), a.attachEvent("onload", K);var c = !1;try {
            c = null == a.frameElement && d.documentElement;
          } catch (e) {}c && c.doScroll && !function f() {
            if (!n.isReady) {
              try {
                c.doScroll("left");
              } catch (b) {
                return a.setTimeout(f, 50);
              }J(), n.ready();
            }
          }();
        }return I.promise(b);
      }, n.ready.promise();var L;for (L in n(l)) break;l.ownFirst = "0" === L, l.inlineBlockNeedsLayout = !1, n(function () {
        var a, b, c, e;c = d.getElementsByTagName("body")[0], c && c.style && (b = d.createElement("div"), e = d.createElement("div"), e.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(e).appendChild(b), "undefined" != typeof b.style.zoom && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", l.inlineBlockNeedsLayout = a = 3 === b.offsetWidth, a && (c.style.zoom = 1)), c.removeChild(e));
      }), function () {
        var a = d.createElement("div");l.deleteExpando = !0;try {
          delete a.test;
        } catch (b) {
          l.deleteExpando = !1;
        }a = null;
      }();var M = function (a) {
        var b = n.noData[(a.nodeName + " ").toLowerCase()],
            c = +a.nodeType || 1;return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b;
      },
          N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
          O = /([A-Z])/g;function P(a, b, c) {
        if (void 0 === c && 1 === a.nodeType) {
          var d = "data-" + b.replace(O, "-$1").toLowerCase();if (c = a.getAttribute(d), "string" == typeof c) {
            try {
              c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : N.test(c) ? n.parseJSON(c) : c;
            } catch (e) {}n.data(a, b, c);
          } else c = void 0;
        }return c;
      }function Q(a) {
        var b;for (b in a) if (("data" !== b || !n.isEmptyObject(a[b])) && "toJSON" !== b) return !1;return !0;
      }function R(a, b, d, e) {
        if (M(a)) {
          var f,
              g,
              h = n.expando,
              i = a.nodeType,
              j = i ? n.cache : a,
              k = i ? a[h] : a[h] && h;if (k && j[k] && (e || j[k].data) || void 0 !== d || "string" != typeof b) return k || (k = i ? a[h] = c.pop() || n.guid++ : h), j[k] || (j[k] = i ? {} : { toJSON: n.noop }), "object" != typeof b && "function" != typeof b || (e ? j[k] = n.extend(j[k], b) : j[k].data = n.extend(j[k].data, b)), g = j[k], e || (g.data || (g.data = {}), g = g.data), void 0 !== d && (g[n.camelCase(b)] = d), "string" == typeof b ? (f = g[b], null == f && (f = g[n.camelCase(b)])) : f = g, f;
        }
      }function S(a, b, c) {
        if (M(a)) {
          var d,
              e,
              f = a.nodeType,
              g = f ? n.cache : a,
              h = f ? a[n.expando] : n.expando;if (g[h]) {
            if (b && (d = c ? g[h] : g[h].data)) {
              n.isArray(b) ? b = b.concat(n.map(b, n.camelCase)) : b in d ? b = [b] : (b = n.camelCase(b), b = b in d ? [b] : b.split(" ")), e = b.length;while (e--) delete d[b[e]];if (c ? !Q(d) : !n.isEmptyObject(d)) return;
            }(c || (delete g[h].data, Q(g[h]))) && (f ? n.cleanData([a], !0) : l.deleteExpando || g != g.window ? delete g[h] : g[h] = void 0);
          }
        }
      }n.extend({ cache: {}, noData: { "applet ": !0, "embed ": !0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" }, hasData: function (a) {
          return a = a.nodeType ? n.cache[a[n.expando]] : a[n.expando], !!a && !Q(a);
        }, data: function (a, b, c) {
          return R(a, b, c);
        }, removeData: function (a, b) {
          return S(a, b);
        }, _data: function (a, b, c) {
          return R(a, b, c, !0);
        }, _removeData: function (a, b) {
          return S(a, b, !0);
        } }), n.fn.extend({ data: function (a, b) {
          var c,
              d,
              e,
              f = this[0],
              g = f && f.attributes;if (void 0 === a) {
            if (this.length && (e = n.data(f), 1 === f.nodeType && !n._data(f, "parsedAttrs"))) {
              c = g.length;while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), P(f, d, e[d])));n._data(f, "parsedAttrs", !0);
            }return e;
          }return "object" == typeof a ? this.each(function () {
            n.data(this, a);
          }) : arguments.length > 1 ? this.each(function () {
            n.data(this, a, b);
          }) : f ? P(f, a, n.data(f, a)) : void 0;
        }, removeData: function (a) {
          return this.each(function () {
            n.removeData(this, a);
          });
        } }), n.extend({ queue: function (a, b, c) {
          var d;return a ? (b = (b || "fx") + "queue", d = n._data(a, b), c && (!d || n.isArray(c) ? d = n._data(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0;
        }, dequeue: function (a, b) {
          b = b || "fx";var c = n.queue(a, b),
              d = c.length,
              e = c.shift(),
              f = n._queueHooks(a, b),
              g = function () {
            n.dequeue(a, b);
          };"inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire();
        }, _queueHooks: function (a, b) {
          var c = b + "queueHooks";return n._data(a, c) || n._data(a, c, { empty: n.Callbacks("once memory").add(function () {
              n._removeData(a, b + "queue"), n._removeData(a, c);
            }) });
        } }), n.fn.extend({ queue: function (a, b) {
          var c = 2;return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function () {
            var c = n.queue(this, a, b);n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a);
          });
        }, dequeue: function (a) {
          return this.each(function () {
            n.dequeue(this, a);
          });
        }, clearQueue: function (a) {
          return this.queue(a || "fx", []);
        }, promise: function (a, b) {
          var c,
              d = 1,
              e = n.Deferred(),
              f = this,
              g = this.length,
              h = function () {
            --d || e.resolveWith(f, [f]);
          };"string" != typeof a && (b = a, a = void 0), a = a || "fx";while (g--) c = n._data(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));return h(), e.promise(b);
        } }), function () {
        var a;l.shrinkWrapBlocks = function () {
          if (null != a) return a;a = !1;var b, c, e;return c = d.getElementsByTagName("body")[0], c && c.style ? (b = d.createElement("div"), e = d.createElement("div"), e.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(e).appendChild(b), "undefined" != typeof b.style.zoom && (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", b.appendChild(d.createElement("div")).style.width = "5px", a = 3 !== b.offsetWidth), c.removeChild(e), a) : void 0;
        };
      }();var T = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
          U = new RegExp("^(?:([+-])=|)(" + T + ")([a-z%]*)$", "i"),
          V = ["Top", "Right", "Bottom", "Left"],
          W = function (a, b) {
        return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a);
      };function X(a, b, c, d) {
        var e,
            f = 1,
            g = 20,
            h = d ? function () {
          return d.cur();
        } : function () {
          return n.css(a, b, "");
        },
            i = h(),
            j = c && c[3] || (n.cssNumber[b] ? "" : "px"),
            k = (n.cssNumber[b] || "px" !== j && +i) && U.exec(n.css(a, b));if (k && k[3] !== j) {
          j = j || k[3], c = c || [], k = +i || 1;do f = f || ".5", k /= f, n.style(a, b, k + j); while (f !== (f = h() / i) && 1 !== f && --g);
        }return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e;
      }var Y = function (a, b, c, d, e, f, g) {
        var h = 0,
            i = a.length,
            j = null == c;if ("object" === n.type(c)) {
          e = !0;for (h in c) Y(a, b, h, c[h], !0, f, g);
        } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function (a, b, c) {
          return j.call(n(a), c);
        })), b)) for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
      },
          Z = /^(?:checkbox|radio)$/i,
          $ = /<([\w:-]+)/,
          _ = /^$|\/(?:java|ecma)script/i,
          aa = /^\s+/,
          ba = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";function ca(a) {
        var b = ba.split("|"),
            c = a.createDocumentFragment();if (c.createElement) while (b.length) c.createElement(b.pop());return c;
      }!function () {
        var a = d.createElement("div"),
            b = d.createDocumentFragment(),
            c = d.createElement("input");a.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", l.leadingWhitespace = 3 === a.firstChild.nodeType, l.tbody = !a.getElementsByTagName("tbody").length, l.htmlSerialize = !!a.getElementsByTagName("link").length, l.html5Clone = "<:nav></:nav>" !== d.createElement("nav").cloneNode(!0).outerHTML, c.type = "checkbox", c.checked = !0, b.appendChild(c), l.appendChecked = c.checked, a.innerHTML = "<textarea>x</textarea>", l.noCloneChecked = !!a.cloneNode(!0).lastChild.defaultValue, b.appendChild(a), c = d.createElement("input"), c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), a.appendChild(c), l.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, l.noCloneEvent = !!a.addEventListener, a[n.expando] = 1, l.attributes = !a.getAttribute(n.expando);
      }();var da = { option: [1, "<select multiple='multiple'>", "</select>"], legend: [1, "<fieldset>", "</fieldset>"], area: [1, "<map>", "</map>"], param: [1, "<object>", "</object>"], thead: [1, "<table>", "</table>"], tr: [2, "<table><tbody>", "</tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: l.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"] };da.optgroup = da.option, da.tbody = da.tfoot = da.colgroup = da.caption = da.thead, da.th = da.td;function ea(a, b) {
        var c,
            d,
            e = 0,
            f = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : void 0;if (!f) for (f = [], c = a.childNodes || a; null != (d = c[e]); e++) !b || n.nodeName(d, b) ? f.push(d) : n.merge(f, ea(d, b));return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], f) : f;
      }function fa(a, b) {
        for (var c, d = 0; null != (c = a[d]); d++) n._data(c, "globalEval", !b || n._data(b[d], "globalEval"));
      }var ga = /<|&#?\w+;/,
          ha = /<tbody/i;function ia(a) {
        Z.test(a.type) && (a.defaultChecked = a.checked);
      }function ja(a, b, c, d, e) {
        for (var f, g, h, i, j, k, m, o = a.length, p = ca(b), q = [], r = 0; o > r; r++) if (g = a[r], g || 0 === g) if ("object" === n.type(g)) n.merge(q, g.nodeType ? [g] : g);else if (ga.test(g)) {
          i = i || p.appendChild(b.createElement("div")), j = ($.exec(g) || ["", ""])[1].toLowerCase(), m = da[j] || da._default, i.innerHTML = m[1] + n.htmlPrefilter(g) + m[2], f = m[0];while (f--) i = i.lastChild;if (!l.leadingWhitespace && aa.test(g) && q.push(b.createTextNode(aa.exec(g)[0])), !l.tbody) {
            g = "table" !== j || ha.test(g) ? "<table>" !== m[1] || ha.test(g) ? 0 : i : i.firstChild, f = g && g.childNodes.length;while (f--) n.nodeName(k = g.childNodes[f], "tbody") && !k.childNodes.length && g.removeChild(k);
          }n.merge(q, i.childNodes), i.textContent = "";while (i.firstChild) i.removeChild(i.firstChild);i = p.lastChild;
        } else q.push(b.createTextNode(g));i && p.removeChild(i), l.appendChecked || n.grep(ea(q, "input"), ia), r = 0;while (g = q[r++]) if (d && n.inArray(g, d) > -1) e && e.push(g);else if (h = n.contains(g.ownerDocument, g), i = ea(p.appendChild(g), "script"), h && fa(i), c) {
          f = 0;while (g = i[f++]) _.test(g.type || "") && c.push(g);
        }return i = null, p;
      }!function () {
        var b,
            c,
            e = d.createElement("div");for (b in { submit: !0, change: !0, focusin: !0 }) c = "on" + b, (l[b] = c in a) || (e.setAttribute(c, "t"), l[b] = e.attributes[c].expando === !1);e = null;
      }();var ka = /^(?:input|select|textarea)$/i,
          la = /^key/,
          ma = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
          na = /^(?:focusinfocus|focusoutblur)$/,
          oa = /^([^.]*)(?:\.(.+)|)/;function pa() {
        return !0;
      }function qa() {
        return !1;
      }function ra() {
        try {
          return d.activeElement;
        } catch (a) {}
      }function sa(a, b, c, d, e, f) {
        var g, h;if ("object" == typeof b) {
          "string" != typeof c && (d = d || c, c = void 0);for (h in b) sa(a, h, c, d, b[h], f);return a;
        }if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = qa;else if (!e) return a;return 1 === f && (g = e, e = function (a) {
          return n().off(a), g.apply(this, arguments);
        }, e.guid = g.guid || (g.guid = n.guid++)), a.each(function () {
          n.event.add(this, b, e, d, c);
        });
      }n.event = { global: {}, add: function (a, b, c, d, e) {
          var f,
              g,
              h,
              i,
              j,
              k,
              l,
              m,
              o,
              p,
              q,
              r = n._data(a);if (r) {
            c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = n.guid++), (g = r.events) || (g = r.events = {}), (k = r.handle) || (k = r.handle = function (a) {
              return "undefined" == typeof n || a && n.event.triggered === a.type ? void 0 : n.event.dispatch.apply(k.elem, arguments);
            }, k.elem = a), b = (b || "").match(G) || [""], h = b.length;while (h--) f = oa.exec(b[h]) || [], o = q = f[1], p = (f[2] || "").split(".").sort(), o && (j = n.event.special[o] || {}, o = (e ? j.delegateType : j.bindType) || o, j = n.event.special[o] || {}, l = n.extend({ type: o, origType: q, data: d, handler: c, guid: c.guid, selector: e, needsContext: e && n.expr.match.needsContext.test(e), namespace: p.join(".") }, i), (m = g[o]) || (m = g[o] = [], m.delegateCount = 0, j.setup && j.setup.call(a, d, p, k) !== !1 || (a.addEventListener ? a.addEventListener(o, k, !1) : a.attachEvent && a.attachEvent("on" + o, k))), j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, l) : m.push(l), n.event.global[o] = !0);a = null;
          }
        }, remove: function (a, b, c, d, e) {
          var f,
              g,
              h,
              i,
              j,
              k,
              l,
              m,
              o,
              p,
              q,
              r = n.hasData(a) && n._data(a);if (r && (k = r.events)) {
            b = (b || "").match(G) || [""], j = b.length;while (j--) if (h = oa.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
              l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = k[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = m.length;while (f--) g = m[f], !e && q !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (m.splice(f, 1), g.selector && m.delegateCount--, l.remove && l.remove.call(a, g));i && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete k[o]);
            } else for (o in k) n.event.remove(a, o + b[j], c, d, !0);n.isEmptyObject(k) && (delete r.handle, n._removeData(a, "events"));
          }
        }, trigger: function (b, c, e, f) {
          var g,
              h,
              i,
              j,
              l,
              m,
              o,
              p = [e || d],
              q = k.call(b, "type") ? b.type : b,
              r = k.call(b, "namespace") ? b.namespace.split(".") : [];if (i = m = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !na.test(q + n.event.triggered) && (q.indexOf(".") > -1 && (r = q.split("."), q = r.shift(), r.sort()), h = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b), b.isTrigger = f ? 2 : 3, b.namespace = r.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : n.makeArray(c, [b]), l = n.event.special[q] || {}, f || !l.trigger || l.trigger.apply(e, c) !== !1)) {
            if (!f && !l.noBubble && !n.isWindow(e)) {
              for (j = l.delegateType || q, na.test(j + q) || (i = i.parentNode); i; i = i.parentNode) p.push(i), m = i;m === (e.ownerDocument || d) && p.push(m.defaultView || m.parentWindow || a);
            }o = 0;while ((i = p[o++]) && !b.isPropagationStopped()) b.type = o > 1 ? j : l.bindType || q, g = (n._data(i, "events") || {})[b.type] && n._data(i, "handle"), g && g.apply(i, c), g = h && i[h], g && g.apply && M(i) && (b.result = g.apply(i, c), b.result === !1 && b.preventDefault());if (b.type = q, !f && !b.isDefaultPrevented() && (!l._default || l._default.apply(p.pop(), c) === !1) && M(e) && h && e[q] && !n.isWindow(e)) {
              m = e[h], m && (e[h] = null), n.event.triggered = q;try {
                e[q]();
              } catch (s) {}n.event.triggered = void 0, m && (e[h] = m);
            }return b.result;
          }
        }, dispatch: function (a) {
          a = n.event.fix(a);var b,
              c,
              d,
              f,
              g,
              h = [],
              i = e.call(arguments),
              j = (n._data(this, "events") || {})[a.type] || [],
              k = n.event.special[a.type] || {};if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
            h = n.event.handlers.call(this, a, j), b = 0;while ((f = h[b++]) && !a.isPropagationStopped()) {
              a.currentTarget = f.elem, c = 0;while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped()) a.rnamespace && !a.rnamespace.test(g.namespace) || (a.handleObj = g, a.data = g.data, d = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== d && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()));
            }return k.postDispatch && k.postDispatch.call(this, a), a.result;
          }
        }, handlers: function (a, b) {
          var c,
              d,
              e,
              f,
              g = [],
              h = b.delegateCount,
              i = a.target;if (h && i.nodeType && ("click" !== a.type || isNaN(a.button) || a.button < 1)) for (; i != this; i = i.parentNode || this) if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
            for (d = [], c = 0; h > c; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) > -1 : n.find(e, this, null, [i]).length), d[e] && d.push(f);d.length && g.push({ elem: i, handlers: d });
          }return h < b.length && g.push({ elem: this, handlers: b.slice(h) }), g;
        }, fix: function (a) {
          if (a[n.expando]) return a;var b,
              c,
              e,
              f = a.type,
              g = a,
              h = this.fixHooks[f];h || (this.fixHooks[f] = h = ma.test(f) ? this.mouseHooks : la.test(f) ? this.keyHooks : {}), e = h.props ? this.props.concat(h.props) : this.props, a = new n.Event(g), b = e.length;while (b--) c = e[b], a[c] = g[c];return a.target || (a.target = g.srcElement || d), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, h.filter ? h.filter(a, g) : a;
        }, props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: { props: "char charCode key keyCode".split(" "), filter: function (a, b) {
            return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a;
          } }, mouseHooks: { props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function (a, b) {
            var c,
                e,
                f,
                g = b.button,
                h = b.fromElement;return null == a.pageX && null != b.clientX && (e = a.target.ownerDocument || d, f = e.documentElement, c = e.body, a.pageX = b.clientX + (f && f.scrollLeft || c && c.scrollLeft || 0) - (f && f.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (f && f.scrollTop || c && c.scrollTop || 0) - (f && f.clientTop || c && c.clientTop || 0)), !a.relatedTarget && h && (a.relatedTarget = h === a.target ? b.toElement : h), a.which || void 0 === g || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0), a;
          } }, special: { load: { noBubble: !0 }, focus: { trigger: function () {
              if (this !== ra() && this.focus) try {
                return this.focus(), !1;
              } catch (a) {}
            }, delegateType: "focusin" }, blur: { trigger: function () {
              return this === ra() && this.blur ? (this.blur(), !1) : void 0;
            }, delegateType: "focusout" }, click: { trigger: function () {
              return n.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0;
            }, _default: function (a) {
              return n.nodeName(a.target, "a");
            } }, beforeunload: { postDispatch: function (a) {
              void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result);
            } } }, simulate: function (a, b, c) {
          var d = n.extend(new n.Event(), c, { type: a, isSimulated: !0 });n.event.trigger(d, null, b), d.isDefaultPrevented() && c.preventDefault();
        } }, n.removeEvent = d.removeEventListener ? function (a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c);
      } : function (a, b, c) {
        var d = "on" + b;a.detachEvent && ("undefined" == typeof a[d] && (a[d] = null), a.detachEvent(d, c));
      }, n.Event = function (a, b) {
        return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? pa : qa) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void (this[n.expando] = !0)) : new n.Event(a, b);
      }, n.Event.prototype = { constructor: n.Event, isDefaultPrevented: qa, isPropagationStopped: qa, isImmediatePropagationStopped: qa, preventDefault: function () {
          var a = this.originalEvent;this.isDefaultPrevented = pa, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1);
        }, stopPropagation: function () {
          var a = this.originalEvent;this.isPropagationStopped = pa, a && !this.isSimulated && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0);
        }, stopImmediatePropagation: function () {
          var a = this.originalEvent;this.isImmediatePropagationStopped = pa, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation();
        } }, n.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (a, b) {
        n.event.special[a] = { delegateType: b, bindType: b, handle: function (a) {
            var c,
                d = this,
                e = a.relatedTarget,
                f = a.handleObj;return e && (e === d || n.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c;
          } };
      }), l.submit || (n.event.special.submit = { setup: function () {
          return n.nodeName(this, "form") ? !1 : void n.event.add(this, "click._submit keypress._submit", function (a) {
            var b = a.target,
                c = n.nodeName(b, "input") || n.nodeName(b, "button") ? n.prop(b, "form") : void 0;c && !n._data(c, "submit") && (n.event.add(c, "submit._submit", function (a) {
              a._submitBubble = !0;
            }), n._data(c, "submit", !0));
          });
        }, postDispatch: function (a) {
          a._submitBubble && (delete a._submitBubble, this.parentNode && !a.isTrigger && n.event.simulate("submit", this.parentNode, a));
        }, teardown: function () {
          return n.nodeName(this, "form") ? !1 : void n.event.remove(this, "._submit");
        } }), l.change || (n.event.special.change = { setup: function () {
          return ka.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (n.event.add(this, "propertychange._change", function (a) {
            "checked" === a.originalEvent.propertyName && (this._justChanged = !0);
          }), n.event.add(this, "click._change", function (a) {
            this._justChanged && !a.isTrigger && (this._justChanged = !1), n.event.simulate("change", this, a);
          })), !1) : void n.event.add(this, "beforeactivate._change", function (a) {
            var b = a.target;ka.test(b.nodeName) && !n._data(b, "change") && (n.event.add(b, "change._change", function (a) {
              !this.parentNode || a.isSimulated || a.isTrigger || n.event.simulate("change", this.parentNode, a);
            }), n._data(b, "change", !0));
          });
        }, handle: function (a) {
          var b = a.target;return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0;
        }, teardown: function () {
          return n.event.remove(this, "._change"), !ka.test(this.nodeName);
        } }), l.focusin || n.each({ focus: "focusin", blur: "focusout" }, function (a, b) {
        var c = function (a) {
          n.event.simulate(b, a.target, n.event.fix(a));
        };n.event.special[b] = { setup: function () {
            var d = this.ownerDocument || this,
                e = n._data(d, b);e || d.addEventListener(a, c, !0), n._data(d, b, (e || 0) + 1);
          }, teardown: function () {
            var d = this.ownerDocument || this,
                e = n._data(d, b) - 1;e ? n._data(d, b, e) : (d.removeEventListener(a, c, !0), n._removeData(d, b));
          } };
      }), n.fn.extend({ on: function (a, b, c, d) {
          return sa(this, a, b, c, d);
        }, one: function (a, b, c, d) {
          return sa(this, a, b, c, d, 1);
        }, off: function (a, b, c) {
          var d, e;if (a && a.preventDefault && a.handleObj) return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;if ("object" == typeof a) {
            for (e in a) this.off(e, b, a[e]);return this;
          }return b !== !1 && "function" != typeof b || (c = b, b = void 0), c === !1 && (c = qa), this.each(function () {
            n.event.remove(this, a, c, b);
          });
        }, trigger: function (a, b) {
          return this.each(function () {
            n.event.trigger(a, b, this);
          });
        }, triggerHandler: function (a, b) {
          var c = this[0];return c ? n.event.trigger(a, b, c, !0) : void 0;
        } });var ta = / jQuery\d+="(?:null|\d+)"/g,
          ua = new RegExp("<(?:" + ba + ")[\\s/>]", "i"),
          va = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
          wa = /<script|<style|<link/i,
          xa = /checked\s*(?:[^=]|=\s*.checked.)/i,
          ya = /^true\/(.*)/,
          za = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
          Aa = ca(d),
          Ba = Aa.appendChild(d.createElement("div"));function Ca(a, b) {
        return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a;
      }function Da(a) {
        return a.type = (null !== n.find.attr(a, "type")) + "/" + a.type, a;
      }function Ea(a) {
        var b = ya.exec(a.type);return b ? a.type = b[1] : a.removeAttribute("type"), a;
      }function Fa(a, b) {
        if (1 === b.nodeType && n.hasData(a)) {
          var c,
              d,
              e,
              f = n._data(a),
              g = n._data(b, f),
              h = f.events;if (h) {
            delete g.handle, g.events = {};for (c in h) for (d = 0, e = h[c].length; e > d; d++) n.event.add(b, c, h[c][d]);
          }g.data && (g.data = n.extend({}, g.data));
        }
      }function Ga(a, b) {
        var c, d, e;if (1 === b.nodeType) {
          if (c = b.nodeName.toLowerCase(), !l.noCloneEvent && b[n.expando]) {
            e = n._data(b);for (d in e.events) n.removeEvent(b, d, e.handle);b.removeAttribute(n.expando);
          }"script" === c && b.text !== a.text ? (Da(b).text = a.text, Ea(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), l.html5Clone && a.innerHTML && !n.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && Z.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue);
        }
      }function Ha(a, b, c, d) {
        b = f.apply([], b);var e,
            g,
            h,
            i,
            j,
            k,
            m = 0,
            o = a.length,
            p = o - 1,
            q = b[0],
            r = n.isFunction(q);if (r || o > 1 && "string" == typeof q && !l.checkClone && xa.test(q)) return a.each(function (e) {
          var f = a.eq(e);r && (b[0] = q.call(this, e, f.html())), Ha(f, b, c, d);
        });if (o && (k = ja(b, a[0].ownerDocument, !1, a, d), e = k.firstChild, 1 === k.childNodes.length && (k = e), e || d)) {
          for (i = n.map(ea(k, "script"), Da), h = i.length; o > m; m++) g = k, m !== p && (g = n.clone(g, !0, !0), h && n.merge(i, ea(g, "script"))), c.call(a[m], g, m);if (h) for (j = i[i.length - 1].ownerDocument, n.map(i, Ea), m = 0; h > m; m++) g = i[m], _.test(g.type || "") && !n._data(g, "globalEval") && n.contains(j, g) && (g.src ? n._evalUrl && n._evalUrl(g.src) : n.globalEval((g.text || g.textContent || g.innerHTML || "").replace(za, "")));k = e = null;
        }return a;
      }function Ia(a, b, c) {
        for (var d, e = b ? n.filter(b, a) : a, f = 0; null != (d = e[f]); f++) c || 1 !== d.nodeType || n.cleanData(ea(d)), d.parentNode && (c && n.contains(d.ownerDocument, d) && fa(ea(d, "script")), d.parentNode.removeChild(d));return a;
      }n.extend({ htmlPrefilter: function (a) {
          return a.replace(va, "<$1></$2>");
        }, clone: function (a, b, c) {
          var d,
              e,
              f,
              g,
              h,
              i = n.contains(a.ownerDocument, a);if (l.html5Clone || n.isXMLDoc(a) || !ua.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (Ba.innerHTML = a.outerHTML, Ba.removeChild(f = Ba.firstChild)), !(l.noCloneEvent && l.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a))) for (d = ea(f), h = ea(a), g = 0; null != (e = h[g]); ++g) d[g] && Ga(e, d[g]);if (b) if (c) for (h = h || ea(a), d = d || ea(f), g = 0; null != (e = h[g]); g++) Fa(e, d[g]);else Fa(a, f);return d = ea(f, "script"), d.length > 0 && fa(d, !i && ea(a, "script")), d = h = e = null, f;
        }, cleanData: function (a, b) {
          for (var d, e, f, g, h = 0, i = n.expando, j = n.cache, k = l.attributes, m = n.event.special; null != (d = a[h]); h++) if ((b || M(d)) && (f = d[i], g = f && j[f])) {
            if (g.events) for (e in g.events) m[e] ? n.event.remove(d, e) : n.removeEvent(d, e, g.handle);j[f] && (delete j[f], k || "undefined" == typeof d.removeAttribute ? d[i] = void 0 : d.removeAttribute(i), c.push(f));
          }
        } }), n.fn.extend({ domManip: Ha, detach: function (a) {
          return Ia(this, a, !0);
        }, remove: function (a) {
          return Ia(this, a);
        }, text: function (a) {
          return Y(this, function (a) {
            return void 0 === a ? n.text(this) : this.empty().append((this[0] && this[0].ownerDocument || d).createTextNode(a));
          }, null, a, arguments.length);
        }, append: function () {
          return Ha(this, arguments, function (a) {
            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
              var b = Ca(this, a);b.appendChild(a);
            }
          });
        }, prepend: function () {
          return Ha(this, arguments, function (a) {
            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
              var b = Ca(this, a);b.insertBefore(a, b.firstChild);
            }
          });
        }, before: function () {
          return Ha(this, arguments, function (a) {
            this.parentNode && this.parentNode.insertBefore(a, this);
          });
        }, after: function () {
          return Ha(this, arguments, function (a) {
            this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
          });
        }, empty: function () {
          for (var a, b = 0; null != (a = this[b]); b++) {
            1 === a.nodeType && n.cleanData(ea(a, !1));while (a.firstChild) a.removeChild(a.firstChild);a.options && n.nodeName(a, "select") && (a.options.length = 0);
          }return this;
        }, clone: function (a, b) {
          return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () {
            return n.clone(this, a, b);
          });
        }, html: function (a) {
          return Y(this, function (a) {
            var b = this[0] || {},
                c = 0,
                d = this.length;if (void 0 === a) return 1 === b.nodeType ? b.innerHTML.replace(ta, "") : void 0;if ("string" == typeof a && !wa.test(a) && (l.htmlSerialize || !ua.test(a)) && (l.leadingWhitespace || !aa.test(a)) && !da[($.exec(a) || ["", ""])[1].toLowerCase()]) {
              a = n.htmlPrefilter(a);try {
                for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (n.cleanData(ea(b, !1)), b.innerHTML = a);b = 0;
              } catch (e) {}
            }b && this.empty().append(a);
          }, null, a, arguments.length);
        }, replaceWith: function () {
          var a = [];return Ha(this, arguments, function (b) {
            var c = this.parentNode;n.inArray(this, a) < 0 && (n.cleanData(ea(this)), c && c.replaceChild(b, this));
          }, a);
        } }), n.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (a, b) {
        n.fn[a] = function (a) {
          for (var c, d = 0, e = [], f = n(a), h = f.length - 1; h >= d; d++) c = d === h ? this : this.clone(!0), n(f[d])[b](c), g.apply(e, c.get());return this.pushStack(e);
        };
      });var Ja,
          Ka = { HTML: "block", BODY: "block" };function La(a, b) {
        var c = n(b.createElement(a)).appendTo(b.body),
            d = n.css(c[0], "display");return c.detach(), d;
      }function Ma(a) {
        var b = d,
            c = Ka[a];return c || (c = La(a, b), "none" !== c && c || (Ja = (Ja || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = (Ja[0].contentWindow || Ja[0].contentDocument).document, b.write(), b.close(), c = La(a, b), Ja.detach()), Ka[a] = c), c;
      }var Na = /^margin/,
          Oa = new RegExp("^(" + T + ")(?!px)[a-z%]+$", "i"),
          Pa = function (a, b, c, d) {
        var e,
            f,
            g = {};for (f in b) g[f] = a.style[f], a.style[f] = b[f];e = c.apply(a, d || []);for (f in b) a.style[f] = g[f];return e;
      },
          Qa = d.documentElement;!function () {
        var b,
            c,
            e,
            f,
            g,
            h,
            i = d.createElement("div"),
            j = d.createElement("div");if (j.style) {
          j.style.cssText = "float:left;opacity:.5", l.opacity = "0.5" === j.style.opacity, l.cssFloat = !!j.style.cssFloat, j.style.backgroundClip = "content-box", j.cloneNode(!0).style.backgroundClip = "", l.clearCloneStyle = "content-box" === j.style.backgroundClip, i = d.createElement("div"), i.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", j.innerHTML = "", i.appendChild(j), l.boxSizing = "" === j.style.boxSizing || "" === j.style.MozBoxSizing || "" === j.style.WebkitBoxSizing, n.extend(l, { reliableHiddenOffsets: function () {
              return null == b && k(), f;
            }, boxSizingReliable: function () {
              return null == b && k(), e;
            }, pixelMarginRight: function () {
              return null == b && k(), c;
            }, pixelPosition: function () {
              return null == b && k(), b;
            }, reliableMarginRight: function () {
              return null == b && k(), g;
            }, reliableMarginLeft: function () {
              return null == b && k(), h;
            } });function k() {
            var k,
                l,
                m = d.documentElement;m.appendChild(i), j.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", b = e = h = !1, c = g = !0, a.getComputedStyle && (l = a.getComputedStyle(j), b = "1%" !== (l || {}).top, h = "2px" === (l || {}).marginLeft, e = "4px" === (l || { width: "4px" }).width, j.style.marginRight = "50%", c = "4px" === (l || { marginRight: "4px" }).marginRight, k = j.appendChild(d.createElement("div")), k.style.cssText = j.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", k.style.marginRight = k.style.width = "0", j.style.width = "1px", g = !parseFloat((a.getComputedStyle(k) || {}).marginRight), j.removeChild(k)), j.style.display = "none", f = 0 === j.getClientRects().length, f && (j.style.display = "", j.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", k = j.getElementsByTagName("td"), k[0].style.cssText = "margin:0;border:0;padding:0;display:none", f = 0 === k[0].offsetHeight, f && (k[0].style.display = "", k[1].style.display = "none", f = 0 === k[0].offsetHeight)), m.removeChild(i);
          }
        }
      }();var Ra,
          Sa,
          Ta = /^(top|right|bottom|left)$/;a.getComputedStyle ? (Ra = function (b) {
        var c = b.ownerDocument.defaultView;return c && c.opener || (c = a), c.getComputedStyle(b);
      }, Sa = function (a, b, c) {
        var d,
            e,
            f,
            g,
            h = a.style;return c = c || Ra(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, "" !== g && void 0 !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), c && !l.pixelMarginRight() && Oa.test(g) && Na.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f), void 0 === g ? g : g + "";
      }) : Qa.currentStyle && (Ra = function (a) {
        return a.currentStyle;
      }, Sa = function (a, b, c) {
        var d,
            e,
            f,
            g,
            h = a.style;return c = c || Ra(a), g = c ? c[b] : void 0, null == g && h && h[b] && (g = h[b]), Oa.test(g) && !Ta.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle.left), h.left = "fontSize" === b ? "1em" : g, g = h.pixelLeft + "px", h.left = d, f && (e.left = f)), void 0 === g ? g : g + "" || "auto";
      });function Ua(a, b) {
        return { get: function () {
            return a() ? void delete this.get : (this.get = b).apply(this, arguments);
          } };
      }var Va = /alpha\([^)]*\)/i,
          Wa = /opacity\s*=\s*([^)]*)/i,
          Xa = /^(none|table(?!-c[ea]).+)/,
          Ya = new RegExp("^(" + T + ")(.*)$", "i"),
          Za = { position: "absolute", visibility: "hidden", display: "block" },
          $a = { letterSpacing: "0", fontWeight: "400" },
          _a = ["Webkit", "O", "Moz", "ms"],
          ab = d.createElement("div").style;function bb(a) {
        if (a in ab) return a;var b = a.charAt(0).toUpperCase() + a.slice(1),
            c = _a.length;while (c--) if (a = _a[c] + b, a in ab) return a;
      }function cb(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = n._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && W(d) && (f[g] = n._data(d, "olddisplay", Ma(d.nodeName)))) : (e = W(d), (c && "none" !== c || !e) && n._data(d, "olddisplay", e ? c : n.css(d, "display"))));for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));return a;
      }function db(a, b, c) {
        var d = Ya.exec(b);return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b;
      }function eb(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += n.css(a, c + V[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + V[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + V[f] + "Width", !0, e))) : (g += n.css(a, "padding" + V[f], !0, e), "padding" !== c && (g += n.css(a, "border" + V[f] + "Width", !0, e)));return g;
      }function fb(b, c, e) {
        var f = !0,
            g = "width" === c ? b.offsetWidth : b.offsetHeight,
            h = Ra(b),
            i = l.boxSizing && "border-box" === n.css(b, "boxSizing", !1, h);if (d.msFullscreenElement && a.top !== a && b.getClientRects().length && (g = Math.round(100 * b.getBoundingClientRect()[c])), 0 >= g || null == g) {
          if (g = Sa(b, c, h), (0 > g || null == g) && (g = b.style[c]), Oa.test(g)) return g;f = i && (l.boxSizingReliable() || g === b.style[c]), g = parseFloat(g) || 0;
        }return g + eb(b, c, e || (i ? "border" : "content"), f, h) + "px";
      }n.extend({ cssHooks: { opacity: { get: function (a, b) {
              if (b) {
                var c = Sa(a, "opacity");return "" === c ? "1" : c;
              }
            } } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { "float": l.cssFloat ? "cssFloat" : "styleFloat" }, style: function (a, b, c, d) {
          if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
            var e,
                f,
                g,
                h = n.camelCase(b),
                i = a.style;if (b = n.cssProps[h] || (n.cssProps[h] = bb(h) || h), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c) return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];if (f = typeof c, "string" === f && (e = U.exec(c)) && e[1] && (c = X(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (n.cssNumber[h] ? "" : "px")), l.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), !(g && "set" in g && void 0 === (c = g.set(a, c, d))))) try {
              i[b] = c;
            } catch (j) {}
          }
        }, css: function (a, b, c, d) {
          var e,
              f,
              g,
              h = n.camelCase(b);return b = n.cssProps[h] || (n.cssProps[h] = bb(h) || h), g = n.cssHooks[b] || n.cssHooks[h], g && "get" in g && (f = g.get(a, !0, c)), void 0 === f && (f = Sa(a, b, d)), "normal" === f && b in $a && (f = $a[b]), "" === c || c ? (e = parseFloat(f), c === !0 || isFinite(e) ? e || 0 : f) : f;
        } }), n.each(["height", "width"], function (a, b) {
        n.cssHooks[b] = { get: function (a, c, d) {
            return c ? Xa.test(n.css(a, "display")) && 0 === a.offsetWidth ? Pa(a, Za, function () {
              return fb(a, b, d);
            }) : fb(a, b, d) : void 0;
          }, set: function (a, c, d) {
            var e = d && Ra(a);return db(a, c, d ? eb(a, b, d, l.boxSizing && "border-box" === n.css(a, "boxSizing", !1, e), e) : 0);
          } };
      }), l.opacity || (n.cssHooks.opacity = { get: function (a, b) {
          return Wa.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : "";
        }, set: function (a, b) {
          var c = a.style,
              d = a.currentStyle,
              e = n.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
              f = d && d.filter || c.filter || "";c.zoom = 1, (b >= 1 || "" === b) && "" === n.trim(f.replace(Va, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = Va.test(f) ? f.replace(Va, e) : f + " " + e);
        } }), n.cssHooks.marginRight = Ua(l.reliableMarginRight, function (a, b) {
        return b ? Pa(a, { display: "inline-block" }, Sa, [a, "marginRight"]) : void 0;
      }), n.cssHooks.marginLeft = Ua(l.reliableMarginLeft, function (a, b) {
        return b ? (parseFloat(Sa(a, "marginLeft")) || (n.contains(a.ownerDocument, a) ? a.getBoundingClientRect().left - Pa(a, { marginLeft: 0 }, function () {
          return a.getBoundingClientRect().left;
        }) : 0)) + "px" : void 0;
      }), n.each({ margin: "", padding: "", border: "Width" }, function (a, b) {
        n.cssHooks[a + b] = { expand: function (c) {
            for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + V[d] + b] = f[d] || f[d - 2] || f[0];return e;
          } }, Na.test(a) || (n.cssHooks[a + b].set = db);
      }), n.fn.extend({ css: function (a, b) {
          return Y(this, function (a, b, c) {
            var d,
                e,
                f = {},
                g = 0;if (n.isArray(b)) {
              for (d = Ra(a), e = b.length; e > g; g++) f[b[g]] = n.css(a, b[g], !1, d);return f;
            }return void 0 !== c ? n.style(a, b, c) : n.css(a, b);
          }, a, b, arguments.length > 1);
        }, show: function () {
          return cb(this, !0);
        }, hide: function () {
          return cb(this);
        }, toggle: function (a) {
          return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
            W(this) ? n(this).show() : n(this).hide();
          });
        } });function gb(a, b, c, d, e) {
        return new gb.prototype.init(a, b, c, d, e);
      }n.Tween = gb, gb.prototype = { constructor: gb, init: function (a, b, c, d, e, f) {
          this.elem = a, this.prop = c, this.easing = e || n.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px");
        }, cur: function () {
          var a = gb.propHooks[this.prop];return a && a.get ? a.get(this) : gb.propHooks._default.get(this);
        }, run: function (a) {
          var b,
              c = gb.propHooks[this.prop];return this.options.duration ? this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : gb.propHooks._default.set(this), this;
        } }, gb.prototype.init.prototype = gb.prototype, gb.propHooks = { _default: { get: function (a) {
            var b;return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0);
          }, set: function (a) {
            n.fx.step[a.prop] ? n.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[n.cssProps[a.prop]] && !n.cssHooks[a.prop] ? a.elem[a.prop] = a.now : n.style(a.elem, a.prop, a.now + a.unit);
          } } }, gb.propHooks.scrollTop = gb.propHooks.scrollLeft = { set: function (a) {
          a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
        } }, n.easing = { linear: function (a) {
          return a;
        }, swing: function (a) {
          return .5 - Math.cos(a * Math.PI) / 2;
        }, _default: "swing" }, n.fx = gb.prototype.init, n.fx.step = {};var hb,
          ib,
          jb = /^(?:toggle|show|hide)$/,
          kb = /queueHooks$/;function lb() {
        return a.setTimeout(function () {
          hb = void 0;
        }), hb = n.now();
      }function mb(a, b) {
        var c,
            d = { height: a },
            e = 0;for (b = b ? 1 : 0; 4 > e; e += 2 - b) c = V[e], d["margin" + c] = d["padding" + c] = a;return b && (d.opacity = d.width = a), d;
      }function nb(a, b, c) {
        for (var d, e = (qb.tweeners[b] || []).concat(qb.tweeners["*"]), f = 0, g = e.length; g > f; f++) if (d = e[f].call(c, b, a)) return d;
      }function ob(a, b, c) {
        var d,
            e,
            f,
            g,
            h,
            i,
            j,
            k,
            m = this,
            o = {},
            p = a.style,
            q = a.nodeType && W(a),
            r = n._data(a, "fxshow");c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function () {
          h.unqueued || i();
        }), h.unqueued++, m.always(function () {
          m.always(function () {
            h.unqueued--, n.queue(a, "fx").length || h.empty.fire();
          });
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [p.overflow, p.overflowX, p.overflowY], j = n.css(a, "display"), k = "none" === j ? n._data(a, "olddisplay") || Ma(a.nodeName) : j, "inline" === k && "none" === n.css(a, "float") && (l.inlineBlockNeedsLayout && "inline" !== Ma(a.nodeName) ? p.zoom = 1 : p.display = "inline-block")), c.overflow && (p.overflow = "hidden", l.shrinkWrapBlocks() || m.always(function () {
          p.overflow = c.overflow[0], p.overflowX = c.overflow[1], p.overflowY = c.overflow[2];
        }));for (d in b) if (e = b[d], jb.exec(e)) {
          if (delete b[d], f = f || "toggle" === e, e === (q ? "hide" : "show")) {
            if ("show" !== e || !r || void 0 === r[d]) continue;q = !0;
          }o[d] = r && r[d] || n.style(a, d);
        } else j = void 0;if (n.isEmptyObject(o)) "inline" === ("none" === j ? Ma(a.nodeName) : j) && (p.display = j);else {
          r ? "hidden" in r && (q = r.hidden) : r = n._data(a, "fxshow", {}), f && (r.hidden = !q), q ? n(a).show() : m.done(function () {
            n(a).hide();
          }), m.done(function () {
            var b;n._removeData(a, "fxshow");for (b in o) n.style(a, b, o[b]);
          });for (d in o) g = nb(q ? r[d] : 0, d, m), d in r || (r[d] = g.start, q && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0));
        }
      }function pb(a, b) {
        var c, d, e, f, g;for (c in a) if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g) {
          f = g.expand(f), delete a[d];for (c in f) c in a || (a[c] = f[c], b[c] = e);
        } else b[d] = e;
      }function qb(a, b, c) {
        var d,
            e,
            f = 0,
            g = qb.prefilters.length,
            h = n.Deferred().always(function () {
          delete i.elem;
        }),
            i = function () {
          if (e) return !1;for (var b = hb || lb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1);
        },
            j = h.promise({ elem: a, props: n.extend({}, b), opts: n.extend(!0, { specialEasing: {}, easing: n.easing._default }, c), originalProperties: b, originalOptions: c, startTime: hb || lb(), duration: c.duration, tweens: [], createTween: function (b, c) {
            var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);return j.tweens.push(d), d;
          }, stop: function (b) {
            var c = 0,
                d = b ? j.tweens.length : 0;if (e) return this;for (e = !0; d > c; c++) j.tweens[c].run(1);return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this;
          } }),
            k = j.props;for (pb(k, j.opts.specialEasing); g > f; f++) if (d = qb.prefilters[f].call(j, a, k, j.opts)) return n.isFunction(d.stop) && (n._queueHooks(j.elem, j.opts.queue).stop = n.proxy(d.stop, d)), d;return n.map(k, nb, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, { elem: a, anim: j, queue: j.opts.queue })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always);
      }n.Animation = n.extend(qb, { tweeners: { "*": [function (a, b) {
            var c = this.createTween(a, b);return X(c.elem, a, U.exec(b), c), c;
          }] }, tweener: function (a, b) {
          n.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(G);for (var c, d = 0, e = a.length; e > d; d++) c = a[d], qb.tweeners[c] = qb.tweeners[c] || [], qb.tweeners[c].unshift(b);
        }, prefilters: [ob], prefilter: function (a, b) {
          b ? qb.prefilters.unshift(a) : qb.prefilters.push(a);
        } }), n.speed = function (a, b, c) {
        var d = a && "object" == typeof a ? n.extend({}, a) : { complete: c || !c && b || n.isFunction(a) && a, duration: a, easing: c && b || b && !n.isFunction(b) && b };return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, null != d.queue && d.queue !== !0 || (d.queue = "fx"), d.old = d.complete, d.complete = function () {
          n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue);
        }, d;
      }, n.fn.extend({ fadeTo: function (a, b, c, d) {
          return this.filter(W).css("opacity", 0).show().end().animate({ opacity: b }, a, c, d);
        }, animate: function (a, b, c, d) {
          var e = n.isEmptyObject(a),
              f = n.speed(b, c, d),
              g = function () {
            var b = qb(this, n.extend({}, a), f);(e || n._data(this, "finish")) && b.stop(!0);
          };return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g);
        }, stop: function (a, b, c) {
          var d = function (a) {
            var b = a.stop;delete a.stop, b(c);
          };return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
            var b = !0,
                e = null != a && a + "queueHooks",
                f = n.timers,
                g = n._data(this);if (e) g[e] && g[e].stop && d(g[e]);else for (e in g) g[e] && g[e].stop && kb.test(e) && d(g[e]);for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));!b && c || n.dequeue(this, a);
          });
        }, finish: function (a) {
          return a !== !1 && (a = a || "fx"), this.each(function () {
            var b,
                c = n._data(this),
                d = c[a + "queue"],
                e = c[a + "queueHooks"],
                f = n.timers,
                g = d ? d.length : 0;for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);delete c.finish;
          });
        } }), n.each(["toggle", "show", "hide"], function (a, b) {
        var c = n.fn[b];n.fn[b] = function (a, d, e) {
          return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(mb(b, !0), a, d, e);
        };
      }), n.each({ slideDown: mb("show"), slideUp: mb("hide"), slideToggle: mb("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (a, b) {
        n.fn[a] = function (a, c, d) {
          return this.animate(b, a, c, d);
        };
      }), n.timers = [], n.fx.tick = function () {
        var a,
            b = n.timers,
            c = 0;for (hb = n.now(); c < b.length; c++) a = b[c], a() || b[c] !== a || b.splice(c--, 1);b.length || n.fx.stop(), hb = void 0;
      }, n.fx.timer = function (a) {
        n.timers.push(a), a() ? n.fx.start() : n.timers.pop();
      }, n.fx.interval = 13, n.fx.start = function () {
        ib || (ib = a.setInterval(n.fx.tick, n.fx.interval));
      }, n.fx.stop = function () {
        a.clearInterval(ib), ib = null;
      }, n.fx.speeds = { slow: 600, fast: 200, _default: 400 }, n.fn.delay = function (b, c) {
        return b = n.fx ? n.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function (c, d) {
          var e = a.setTimeout(c, b);d.stop = function () {
            a.clearTimeout(e);
          };
        });
      }, function () {
        var a,
            b = d.createElement("input"),
            c = d.createElement("div"),
            e = d.createElement("select"),
            f = e.appendChild(d.createElement("option"));c = d.createElement("div"), c.setAttribute("className", "t"), c.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", a = c.getElementsByTagName("a")[0], b.setAttribute("type", "checkbox"), c.appendChild(b), a = c.getElementsByTagName("a")[0], a.style.cssText = "top:1px", l.getSetAttribute = "t" !== c.className, l.style = /top/.test(a.getAttribute("style")), l.hrefNormalized = "/a" === a.getAttribute("href"), l.checkOn = !!b.value, l.optSelected = f.selected, l.enctype = !!d.createElement("form").enctype, e.disabled = !0, l.optDisabled = !f.disabled, b = d.createElement("input"), b.setAttribute("value", ""), l.input = "" === b.getAttribute("value"), b.value = "t", b.setAttribute("type", "radio"), l.radioValue = "t" === b.value;
      }();var rb = /\r/g,
          sb = /[\x20\t\r\n\f]+/g;n.fn.extend({ val: function (a) {
          var b,
              c,
              d,
              e = this[0];{
            if (arguments.length) return d = n.isFunction(a), this.each(function (c) {
              var e;1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function (a) {
                return null == a ? "" : a + "";
              })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e));
            });if (e) return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(rb, "") : null == c ? "" : c);
          }
        } }), n.extend({ valHooks: { option: { get: function (a) {
              var b = n.find.attr(a, "value");return null != b ? b : n.trim(n.text(a)).replace(sb, " ");
            } }, select: { get: function (a) {
              for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++) if (c = d[i], (c.selected || i === e) && (l.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !n.nodeName(c.parentNode, "optgroup"))) {
                if (b = n(c).val(), f) return b;g.push(b);
              }return g;
            }, set: function (a, b) {
              var c,
                  d,
                  e = a.options,
                  f = n.makeArray(b),
                  g = e.length;while (g--) if (d = e[g], n.inArray(n.valHooks.option.get(d), f) > -1) try {
                d.selected = c = !0;
              } catch (h) {
                d.scrollHeight;
              } else d.selected = !1;return c || (a.selectedIndex = -1), e;
            } } } }), n.each(["radio", "checkbox"], function () {
        n.valHooks[this] = { set: function (a, b) {
            return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) > -1 : void 0;
          } }, l.checkOn || (n.valHooks[this].get = function (a) {
          return null === a.getAttribute("value") ? "on" : a.value;
        });
      });var tb,
          ub,
          vb = n.expr.attrHandle,
          wb = /^(?:checked|selected)$/i,
          xb = l.getSetAttribute,
          yb = l.input;n.fn.extend({ attr: function (a, b) {
          return Y(this, n.attr, a, b, arguments.length > 1);
        }, removeAttr: function (a) {
          return this.each(function () {
            n.removeAttr(this, a);
          });
        } }), n.extend({ attr: function (a, b, c) {
          var d,
              e,
              f = a.nodeType;if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), e = n.attrHooks[b] || (n.expr.match.bool.test(b) ? ub : tb)), void 0 !== c ? null === c ? void n.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = n.find.attr(a, b), null == d ? void 0 : d));
        }, attrHooks: { type: { set: function (a, b) {
              if (!l.radioValue && "radio" === b && n.nodeName(a, "input")) {
                var c = a.value;return a.setAttribute("type", b), c && (a.value = c), b;
              }
            } } }, removeAttr: function (a, b) {
          var c,
              d,
              e = 0,
              f = b && b.match(G);if (f && 1 === a.nodeType) while (c = f[e++]) d = n.propFix[c] || c, n.expr.match.bool.test(c) ? yb && xb || !wb.test(c) ? a[d] = !1 : a[n.camelCase("default-" + c)] = a[d] = !1 : n.attr(a, c, ""), a.removeAttribute(xb ? c : d);
        } }), ub = { set: function (a, b, c) {
          return b === !1 ? n.removeAttr(a, c) : yb && xb || !wb.test(c) ? a.setAttribute(!xb && n.propFix[c] || c, c) : a[n.camelCase("default-" + c)] = a[c] = !0, c;
        } }, n.each(n.expr.match.bool.source.match(/\w+/g), function (a, b) {
        var c = vb[b] || n.find.attr;yb && xb || !wb.test(b) ? vb[b] = function (a, b, d) {
          var e, f;return d || (f = vb[b], vb[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, vb[b] = f), e;
        } : vb[b] = function (a, b, c) {
          return c ? void 0 : a[n.camelCase("default-" + b)] ? b.toLowerCase() : null;
        };
      }), yb && xb || (n.attrHooks.value = { set: function (a, b, c) {
          return n.nodeName(a, "input") ? void (a.defaultValue = b) : tb && tb.set(a, b, c);
        } }), xb || (tb = { set: function (a, b, c) {
          var d = a.getAttributeNode(c);return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)), d.value = b += "", "value" === c || b === a.getAttribute(c) ? b : void 0;
        } }, vb.id = vb.name = vb.coords = function (a, b, c) {
        var d;return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null;
      }, n.valHooks.button = { get: function (a, b) {
          var c = a.getAttributeNode(b);return c && c.specified ? c.value : void 0;
        }, set: tb.set }, n.attrHooks.contenteditable = { set: function (a, b, c) {
          tb.set(a, "" === b ? !1 : b, c);
        } }, n.each(["width", "height"], function (a, b) {
        n.attrHooks[b] = { set: function (a, c) {
            return "" === c ? (a.setAttribute(b, "auto"), c) : void 0;
          } };
      })), l.style || (n.attrHooks.style = { get: function (a) {
          return a.style.cssText || void 0;
        }, set: function (a, b) {
          return a.style.cssText = b + "";
        } });var zb = /^(?:input|select|textarea|button|object)$/i,
          Ab = /^(?:a|area)$/i;n.fn.extend({ prop: function (a, b) {
          return Y(this, n.prop, a, b, arguments.length > 1);
        }, removeProp: function (a) {
          return a = n.propFix[a] || a, this.each(function () {
            try {
              this[a] = void 0, delete this[a];
            } catch (b) {}
          });
        } }), n.extend({ prop: function (a, b, c) {
          var d,
              e,
              f = a.nodeType;if (3 !== f && 8 !== f && 2 !== f) return 1 === f && n.isXMLDoc(a) || (b = n.propFix[b] || b, e = n.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b];
        }, propHooks: { tabIndex: { get: function (a) {
              var b = n.find.attr(a, "tabindex");return b ? parseInt(b, 10) : zb.test(a.nodeName) || Ab.test(a.nodeName) && a.href ? 0 : -1;
            } } }, propFix: { "for": "htmlFor", "class": "className" } }), l.hrefNormalized || n.each(["href", "src"], function (a, b) {
        n.propHooks[b] = { get: function (a) {
            return a.getAttribute(b, 4);
          } };
      }), l.optSelected || (n.propHooks.selected = { get: function (a) {
          var b = a.parentNode;return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null;
        }, set: function (a) {
          var b = a.parentNode;b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex);
        } }), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        n.propFix[this.toLowerCase()] = this;
      }), l.enctype || (n.propFix.enctype = "encoding");var Bb = /[\t\r\n\f]/g;function Cb(a) {
        return n.attr(a, "class") || "";
      }n.fn.extend({ addClass: function (a) {
          var b,
              c,
              d,
              e,
              f,
              g,
              h,
              i = 0;if (n.isFunction(a)) return this.each(function (b) {
            n(this).addClass(a.call(this, b, Cb(this)));
          });if ("string" == typeof a && a) {
            b = a.match(G) || [];while (c = this[i++]) if (e = Cb(c), d = 1 === c.nodeType && (" " + e + " ").replace(Bb, " ")) {
              g = 0;while (f = b[g++]) d.indexOf(" " + f + " ") < 0 && (d += f + " ");h = n.trim(d), e !== h && n.attr(c, "class", h);
            }
          }return this;
        }, removeClass: function (a) {
          var b,
              c,
              d,
              e,
              f,
              g,
              h,
              i = 0;if (n.isFunction(a)) return this.each(function (b) {
            n(this).removeClass(a.call(this, b, Cb(this)));
          });if (!arguments.length) return this.attr("class", "");if ("string" == typeof a && a) {
            b = a.match(G) || [];while (c = this[i++]) if (e = Cb(c), d = 1 === c.nodeType && (" " + e + " ").replace(Bb, " ")) {
              g = 0;while (f = b[g++]) while (d.indexOf(" " + f + " ") > -1) d = d.replace(" " + f + " ", " ");h = n.trim(d), e !== h && n.attr(c, "class", h);
            }
          }return this;
        }, toggleClass: function (a, b) {
          var c = typeof a;return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : n.isFunction(a) ? this.each(function (c) {
            n(this).toggleClass(a.call(this, c, Cb(this), b), b);
          }) : this.each(function () {
            var b, d, e, f;if ("string" === c) {
              d = 0, e = n(this), f = a.match(G) || [];while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
            } else void 0 !== a && "boolean" !== c || (b = Cb(this), b && n._data(this, "__className__", b), n.attr(this, "class", b || a === !1 ? "" : n._data(this, "__className__") || ""));
          });
        }, hasClass: function (a) {
          var b,
              c,
              d = 0;b = " " + a + " ";while (c = this[d++]) if (1 === c.nodeType && (" " + Cb(c) + " ").replace(Bb, " ").indexOf(b) > -1) return !0;return !1;
        } }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
        n.fn[b] = function (a, c) {
          return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
        };
      }), n.fn.extend({ hover: function (a, b) {
          return this.mouseenter(a).mouseleave(b || a);
        } });var Db = a.location,
          Eb = n.now(),
          Fb = /\?/,
          Gb = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;n.parseJSON = function (b) {
        if (a.JSON && a.JSON.parse) return a.JSON.parse(b + "");var c,
            d = null,
            e = n.trim(b + "");return e && !n.trim(e.replace(Gb, function (a, b, e, f) {
          return c && b && (d = 0), 0 === d ? a : (c = e || b, d += !f - !e, "");
        })) ? Function("return " + e)() : n.error("Invalid JSON: " + b);
      }, n.parseXML = function (b) {
        var c, d;if (!b || "string" != typeof b) return null;try {
          a.DOMParser ? (d = new a.DOMParser(), c = d.parseFromString(b, "text/xml")) : (c = new a.ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b));
        } catch (e) {
          c = void 0;
        }return c && c.documentElement && !c.getElementsByTagName("parsererror").length || n.error("Invalid XML: " + b), c;
      };var Hb = /#.*$/,
          Ib = /([?&])_=[^&]*/,
          Jb = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
          Kb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
          Lb = /^(?:GET|HEAD)$/,
          Mb = /^\/\//,
          Nb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
          Ob = {},
          Pb = {},
          Qb = "*/".concat("*"),
          Rb = Db.href,
          Sb = Nb.exec(Rb.toLowerCase()) || [];function Tb(a) {
        return function (b, c) {
          "string" != typeof b && (c = b, b = "*");var d,
              e = 0,
              f = b.toLowerCase().match(G) || [];if (n.isFunction(c)) while (d = f[e++]) "+" === d.charAt(0) ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c);
        };
      }function Ub(a, b, c, d) {
        var e = {},
            f = a === Pb;function g(h) {
          var i;return e[h] = !0, n.each(a[h] || [], function (a, h) {
            var j = h(b, c, d);return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1);
          }), i;
        }return g(b.dataTypes[0]) || !e["*"] && g("*");
      }function Vb(a, b) {
        var c,
            d,
            e = n.ajaxSettings.flatOptions || {};for (d in b) void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);return c && n.extend(!0, a, c), a;
      }function Wb(a, b, c) {
        var d,
            e,
            f,
            g,
            h = a.contents,
            i = a.dataTypes;while ("*" === i[0]) i.shift(), void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));if (e) for (g in h) if (h[g] && h[g].test(e)) {
          i.unshift(g);break;
        }if (i[0] in c) f = i[0];else {
          for (g in c) {
            if (!i[0] || a.converters[g + " " + i[0]]) {
              f = g;break;
            }d || (d = g);
          }f = f || d;
        }return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0;
      }function Xb(a, b, c, d) {
        var e,
            f,
            g,
            h,
            i,
            j = {},
            k = a.dataTypes.slice();if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g];f = k.shift();while (f) if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) if ("*" === f) f = i;else if ("*" !== i && i !== f) {
          if (g = j[i + " " + f] || j["* " + f], !g) for (e in j) if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
            g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));break;
          }if (g !== !0) if (g && a["throws"]) b = g(b);else try {
            b = g(b);
          } catch (l) {
            return { state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f };
          }
        }return { state: "success", data: b };
      }n.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: Rb, type: "GET", isLocal: Kb.test(Sb[1]), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Qb, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": n.parseJSON, "text xml": n.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function (a, b) {
          return b ? Vb(Vb(a, n.ajaxSettings), b) : Vb(n.ajaxSettings, a);
        }, ajaxPrefilter: Tb(Ob), ajaxTransport: Tb(Pb), ajax: function (b, c) {
          "object" == typeof b && (c = b, b = void 0), c = c || {};var d,
              e,
              f,
              g,
              h,
              i,
              j,
              k,
              l = n.ajaxSetup({}, c),
              m = l.context || l,
              o = l.context && (m.nodeType || m.jquery) ? n(m) : n.event,
              p = n.Deferred(),
              q = n.Callbacks("once memory"),
              r = l.statusCode || {},
              s = {},
              t = {},
              u = 0,
              v = "canceled",
              w = { readyState: 0, getResponseHeader: function (a) {
              var b;if (2 === u) {
                if (!k) {
                  k = {};while (b = Jb.exec(g)) k[b[1].toLowerCase()] = b[2];
                }b = k[a.toLowerCase()];
              }return null == b ? null : b;
            }, getAllResponseHeaders: function () {
              return 2 === u ? g : null;
            }, setRequestHeader: function (a, b) {
              var c = a.toLowerCase();return u || (a = t[c] = t[c] || a, s[a] = b), this;
            }, overrideMimeType: function (a) {
              return u || (l.mimeType = a), this;
            }, statusCode: function (a) {
              var b;if (a) if (2 > u) for (b in a) r[b] = [r[b], a[b]];else w.always(a[w.status]);return this;
            }, abort: function (a) {
              var b = a || v;return j && j.abort(b), y(0, b), this;
            } };if (p.promise(w).complete = q.add, w.success = w.done, w.error = w.fail, l.url = ((b || l.url || Rb) + "").replace(Hb, "").replace(Mb, Sb[1] + "//"), l.type = c.method || c.type || l.method || l.type, l.dataTypes = n.trim(l.dataType || "*").toLowerCase().match(G) || [""], null == l.crossDomain && (d = Nb.exec(l.url.toLowerCase()), l.crossDomain = !(!d || d[1] === Sb[1] && d[2] === Sb[2] && (d[3] || ("http:" === d[1] ? "80" : "443")) === (Sb[3] || ("http:" === Sb[1] ? "80" : "443")))), l.data && l.processData && "string" != typeof l.data && (l.data = n.param(l.data, l.traditional)), Ub(Ob, l, c, w), 2 === u) return w;i = n.event && l.global, i && 0 === n.active++ && n.event.trigger("ajaxStart"), l.type = l.type.toUpperCase(), l.hasContent = !Lb.test(l.type), f = l.url, l.hasContent || (l.data && (f = l.url += (Fb.test(f) ? "&" : "?") + l.data, delete l.data), l.cache === !1 && (l.url = Ib.test(f) ? f.replace(Ib, "$1_=" + Eb++) : f + (Fb.test(f) ? "&" : "?") + "_=" + Eb++)), l.ifModified && (n.lastModified[f] && w.setRequestHeader("If-Modified-Since", n.lastModified[f]), n.etag[f] && w.setRequestHeader("If-None-Match", n.etag[f])), (l.data && l.hasContent && l.contentType !== !1 || c.contentType) && w.setRequestHeader("Content-Type", l.contentType), w.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + Qb + "; q=0.01" : "") : l.accepts["*"]);for (e in l.headers) w.setRequestHeader(e, l.headers[e]);if (l.beforeSend && (l.beforeSend.call(m, w, l) === !1 || 2 === u)) return w.abort();v = "abort";for (e in { success: 1, error: 1, complete: 1 }) w[e](l[e]);if (j = Ub(Pb, l, c, w)) {
            if (w.readyState = 1, i && o.trigger("ajaxSend", [w, l]), 2 === u) return w;l.async && l.timeout > 0 && (h = a.setTimeout(function () {
              w.abort("timeout");
            }, l.timeout));try {
              u = 1, j.send(s, y);
            } catch (x) {
              if (!(2 > u)) throw x;y(-1, x);
            }
          } else y(-1, "No Transport");function y(b, c, d, e) {
            var k,
                s,
                t,
                v,
                x,
                y = c;2 !== u && (u = 2, h && a.clearTimeout(h), j = void 0, g = e || "", w.readyState = b > 0 ? 4 : 0, k = b >= 200 && 300 > b || 304 === b, d && (v = Wb(l, w, d)), v = Xb(l, v, w, k), k ? (l.ifModified && (x = w.getResponseHeader("Last-Modified"), x && (n.lastModified[f] = x), x = w.getResponseHeader("etag"), x && (n.etag[f] = x)), 204 === b || "HEAD" === l.type ? y = "nocontent" : 304 === b ? y = "notmodified" : (y = v.state, s = v.data, t = v.error, k = !t)) : (t = y, !b && y || (y = "error", 0 > b && (b = 0))), w.status = b, w.statusText = (c || y) + "", k ? p.resolveWith(m, [s, y, w]) : p.rejectWith(m, [w, y, t]), w.statusCode(r), r = void 0, i && o.trigger(k ? "ajaxSuccess" : "ajaxError", [w, l, k ? s : t]), q.fireWith(m, [w, y]), i && (o.trigger("ajaxComplete", [w, l]), --n.active || n.event.trigger("ajaxStop")));
          }return w;
        }, getJSON: function (a, b, c) {
          return n.get(a, b, c, "json");
        }, getScript: function (a, b) {
          return n.get(a, void 0, b, "script");
        } }), n.each(["get", "post"], function (a, b) {
        n[b] = function (a, c, d, e) {
          return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax(n.extend({ url: a, type: b, dataType: e, data: c, success: d }, n.isPlainObject(a) && a));
        };
      }), n._evalUrl = function (a) {
        return n.ajax({ url: a, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, "throws": !0 });
      }, n.fn.extend({ wrapAll: function (a) {
          if (n.isFunction(a)) return this.each(function (b) {
            n(this).wrapAll(a.call(this, b));
          });if (this[0]) {
            var b = n(a, this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
              var a = this;while (a.firstChild && 1 === a.firstChild.nodeType) a = a.firstChild;return a;
            }).append(this);
          }return this;
        }, wrapInner: function (a) {
          return n.isFunction(a) ? this.each(function (b) {
            n(this).wrapInner(a.call(this, b));
          }) : this.each(function () {
            var b = n(this),
                c = b.contents();c.length ? c.wrapAll(a) : b.append(a);
          });
        }, wrap: function (a) {
          var b = n.isFunction(a);return this.each(function (c) {
            n(this).wrapAll(b ? a.call(this, c) : a);
          });
        }, unwrap: function () {
          return this.parent().each(function () {
            n.nodeName(this, "body") || n(this).replaceWith(this.childNodes);
          }).end();
        } });function Yb(a) {
        return a.style && a.style.display || n.css(a, "display");
      }function Zb(a) {
        while (a && 1 === a.nodeType) {
          if ("none" === Yb(a) || "hidden" === a.type) return !0;a = a.parentNode;
        }return !1;
      }n.expr.filters.hidden = function (a) {
        return l.reliableHiddenOffsets() ? a.offsetWidth <= 0 && a.offsetHeight <= 0 && !a.getClientRects().length : Zb(a);
      }, n.expr.filters.visible = function (a) {
        return !n.expr.filters.hidden(a);
      };var $b = /%20/g,
          _b = /\[\]$/,
          ac = /\r?\n/g,
          bc = /^(?:submit|button|image|reset|file)$/i,
          cc = /^(?:input|select|textarea|keygen)/i;function dc(a, b, c, d) {
        var e;if (n.isArray(b)) n.each(b, function (b, e) {
          c || _b.test(a) ? d(a, e) : dc(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d);
        });else if (c || "object" !== n.type(b)) d(a, b);else for (e in b) dc(a + "[" + e + "]", b[e], c, d);
      }n.param = function (a, b) {
        var c,
            d = [],
            e = function (a, b) {
          b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b);
        };if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a)) n.each(a, function () {
          e(this.name, this.value);
        });else for (c in a) dc(c, a[c], b, e);return d.join("&").replace($b, "+");
      }, n.fn.extend({ serialize: function () {
          return n.param(this.serializeArray());
        }, serializeArray: function () {
          return this.map(function () {
            var a = n.prop(this, "elements");return a ? n.makeArray(a) : this;
          }).filter(function () {
            var a = this.type;return this.name && !n(this).is(":disabled") && cc.test(this.nodeName) && !bc.test(a) && (this.checked || !Z.test(a));
          }).map(function (a, b) {
            var c = n(this).val();return null == c ? null : n.isArray(c) ? n.map(c, function (a) {
              return { name: b.name, value: a.replace(ac, "\r\n") };
            }) : { name: b.name, value: c.replace(ac, "\r\n") };
          }).get();
        } }), n.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function () {
        return this.isLocal ? ic() : d.documentMode > 8 ? hc() : /^(get|post|head|put|delete|options)$/i.test(this.type) && hc() || ic();
      } : hc;var ec = 0,
          fc = {},
          gc = n.ajaxSettings.xhr();a.attachEvent && a.attachEvent("onunload", function () {
        for (var a in fc) fc[a](void 0, !0);
      }), l.cors = !!gc && "withCredentials" in gc, gc = l.ajax = !!gc, gc && n.ajaxTransport(function (b) {
        if (!b.crossDomain || l.cors) {
          var c;return { send: function (d, e) {
              var f,
                  g = b.xhr(),
                  h = ++ec;if (g.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields) for (f in b.xhrFields) g[f] = b.xhrFields[f];b.mimeType && g.overrideMimeType && g.overrideMimeType(b.mimeType), b.crossDomain || d["X-Requested-With"] || (d["X-Requested-With"] = "XMLHttpRequest");for (f in d) void 0 !== d[f] && g.setRequestHeader(f, d[f] + "");g.send(b.hasContent && b.data || null), c = function (a, d) {
                var f, i, j;if (c && (d || 4 === g.readyState)) if (delete fc[h], c = void 0, g.onreadystatechange = n.noop, d) 4 !== g.readyState && g.abort();else {
                  j = {}, f = g.status, "string" == typeof g.responseText && (j.text = g.responseText);try {
                    i = g.statusText;
                  } catch (k) {
                    i = "";
                  }f || !b.isLocal || b.crossDomain ? 1223 === f && (f = 204) : f = j.text ? 200 : 404;
                }j && e(f, i, j, g.getAllResponseHeaders());
              }, b.async ? 4 === g.readyState ? a.setTimeout(c) : g.onreadystatechange = fc[h] = c : c();
            }, abort: function () {
              c && c(void 0, !0);
            } };
        }
      });function hc() {
        try {
          return new a.XMLHttpRequest();
        } catch (b) {}
      }function ic() {
        try {
          return new a.ActiveXObject("Microsoft.XMLHTTP");
        } catch (b) {}
      }n.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function (a) {
            return n.globalEval(a), a;
          } } }), n.ajaxPrefilter("script", function (a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1);
      }), n.ajaxTransport("script", function (a) {
        if (a.crossDomain) {
          var b,
              c = d.head || n("head")[0] || d.documentElement;return { send: function (e, f) {
              b = d.createElement("script"), b.async = !0, a.scriptCharset && (b.charset = a.scriptCharset), b.src = a.url, b.onload = b.onreadystatechange = function (a, c) {
                (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || f(200, "success"));
              }, c.insertBefore(b, c.firstChild);
            }, abort: function () {
              b && b.onload(void 0, !0);
            } };
        }
      });var jc = [],
          kc = /(=)\?(?=&|$)|\?\?/;n.ajaxSetup({ jsonp: "callback", jsonpCallback: function () {
          var a = jc.pop() || n.expando + "_" + Eb++;return this[a] = !0, a;
        } }), n.ajaxPrefilter("json jsonp", function (b, c, d) {
        var e,
            f,
            g,
            h = b.jsonp !== !1 && (kc.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && kc.test(b.data) && "data");return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(kc, "$1" + e) : b.jsonp !== !1 && (b.url += (Fb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
          return g || n.error(e + " was not called"), g[0];
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
          g = arguments;
        }, d.always(function () {
          void 0 === f ? n(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, jc.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0;
        }), "script") : void 0;
      }), n.parseHTML = function (a, b, c) {
        if (!a || "string" != typeof a) return null;"boolean" == typeof b && (c = b, b = !1), b = b || d;var e = x.exec(a),
            f = !c && [];return e ? [b.createElement(e[1])] : (e = ja([a], b, f), f && f.length && n(f).remove(), n.merge([], e.childNodes));
      };var lc = n.fn.load;n.fn.load = function (a, b, c) {
        if ("string" != typeof a && lc) return lc.apply(this, arguments);var d,
            e,
            f,
            g = this,
            h = a.indexOf(" ");return h > -1 && (d = n.trim(a.slice(h, a.length)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && n.ajax({ url: a, type: e || "GET", dataType: "html", data: b }).done(function (a) {
          f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a);
        }).always(c && function (a, b) {
          g.each(function () {
            c.apply(this, f || [a.responseText, b, a]);
          });
        }), this;
      }, n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
        n.fn[b] = function (a) {
          return this.on(b, a);
        };
      }), n.expr.filters.animated = function (a) {
        return n.grep(n.timers, function (b) {
          return a === b.elem;
        }).length;
      };function mc(a) {
        return n.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1;
      }n.offset = { setOffset: function (a, b, c) {
          var d,
              e,
              f,
              g,
              h,
              i,
              j,
              k = n.css(a, "position"),
              l = n(a),
              m = {};"static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && n.inArray("auto", [f, i]) > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, n.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m);
        } }, n.fn.extend({ offset: function (a) {
          if (arguments.length) return void 0 === a ? this : this.each(function (b) {
            n.offset.setOffset(this, a, b);
          });var b,
              c,
              d = { top: 0, left: 0 },
              e = this[0],
              f = e && e.ownerDocument;if (f) return b = f.documentElement, n.contains(b, e) ? ("undefined" != typeof e.getBoundingClientRect && (d = e.getBoundingClientRect()), c = mc(f), { top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0), left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0) }) : d;
        }, position: function () {
          if (this[0]) {
            var a,
                b,
                c = { top: 0, left: 0 },
                d = this[0];return "fixed" === n.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (c = a.offset()), c.top += n.css(a[0], "borderTopWidth", !0), c.left += n.css(a[0], "borderLeftWidth", !0)), { top: b.top - c.top - n.css(d, "marginTop", !0), left: b.left - c.left - n.css(d, "marginLeft", !0) };
          }
        }, offsetParent: function () {
          return this.map(function () {
            var a = this.offsetParent;while (a && !n.nodeName(a, "html") && "static" === n.css(a, "position")) a = a.offsetParent;return a || Qa;
          });
        } }), n.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (a, b) {
        var c = /Y/.test(b);n.fn[a] = function (d) {
          return Y(this, function (a, d, e) {
            var f = mc(a);return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void (f ? f.scrollTo(c ? n(f).scrollLeft() : e, c ? e : n(f).scrollTop()) : a[d] = e);
          }, a, d, arguments.length, null);
        };
      }), n.each(["top", "left"], function (a, b) {
        n.cssHooks[b] = Ua(l.pixelPosition, function (a, c) {
          return c ? (c = Sa(a, b), Oa.test(c) ? n(a).position()[b] + "px" : c) : void 0;
        });
      }), n.each({ Height: "height", Width: "width" }, function (a, b) {
        n.each({ padding: "inner" + a, content: b, "": "outer" + a }, function (c, d) {
          n.fn[d] = function (d, e) {
            var f = arguments.length && (c || "boolean" != typeof d),
                g = c || (d === !0 || e === !0 ? "margin" : "border");return Y(this, function (b, c, d) {
              var e;return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g);
            }, b, f ? d : void 0, f, null);
          };
        });
      }), n.fn.extend({ bind: function (a, b, c) {
          return this.on(a, null, b, c);
        }, unbind: function (a, b) {
          return this.off(a, null, b);
        }, delegate: function (a, b, c, d) {
          return this.on(b, a, c, d);
        }, undelegate: function (a, b, c) {
          return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c);
        } }), n.fn.size = function () {
        return this.length;
      }, n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
        return n;
      });var nc = a.jQuery,
          oc = a.$;return n.noConflict = function (b) {
        return a.$ === n && (a.$ = oc), b && a.jQuery === n && (a.jQuery = nc), n;
      }, b || (a.jQuery = a.$ = n), n;
    });
  })(this);

  return _retrieveGlobal();
});
(function() {
var define = $__System.amdDefine;
!function(e, define) {
  define("3", ["b"], e) && define("kendo.core.min", ["3"], function(m) {
    return m;
  });
}(function() {
  return function(e, t, n) {
    function r() {}
    function o(e, t) {
      if (t)
        return "'" + e.split("'").join("\\'").split('\\"').join('\\\\\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\t/g, "\\t") + "'";
      var n = e.charAt(0),
          r = e.substring(1);
      return "=" === n ? "+(" + r + ")+" : ":" === n ? "+$kendoHtmlEncode(" + r + ")+" : ";" + e + ";$kendoOutput+=";
    }
    function i(e, t, n) {
      return e += "", t = t || 2, n = t - e.length, n ? W[t].substring(0, n) + e : e;
    }
    function a(e) {
      var t = e.css(ye.support.transitions.css + "box-shadow") || e.css("box-shadow"),
          n = t ? t.match(De) || [0, 0, 0, 0, 0] : [0, 0, 0, 0, 0],
          r = Te.max(+n[3], +(n[4] || 0));
      return {
        left: -n[1] + r,
        right: +n[1] + r,
        bottom: +n[2] + r
      };
    }
    function s(t, n) {
      var r,
          o,
          i,
          s,
          u,
          l,
          c,
          d,
          f = ke.browser,
          m = "rtl" == t.css("direction");
      return t.parent().hasClass("k-animation-container") ? (c = t.parent(".k-animation-container"), d = c[0].style, c.is(":hidden") && c.show(), r = Oe.test(d.width) || Oe.test(d.height), r || c.css({
        width: t.outerWidth(),
        height: t.outerHeight(),
        boxSizing: "content-box",
        mozBoxSizing: "content-box",
        webkitBoxSizing: "content-box"
      })) : (o = a(t), i = t[0].style.width, s = t[0].style.height, u = Oe.test(i), l = Oe.test(s), f.opera && (o.left = o.right = o.bottom = 5), r = u || l, !u && (!n || n && i) && (i = t.outerWidth()), !l && (!n || n && s) && (s = t.outerHeight()), t.wrap(e("<div/>").addClass("k-animation-container").css({
        width: i,
        height: s,
        marginLeft: o.left * (m ? 1 : -1),
        paddingLeft: o.left,
        paddingRight: o.right,
        paddingBottom: o.bottom
      })), r && t.css({
        width: "100%",
        height: "100%",
        boxSizing: "border-box",
        mozBoxSizing: "border-box",
        webkitBoxSizing: "border-box"
      })), f.msie && Te.floor(f.version) <= 7 && (t.css({zoom: 1}), t.children(".k-menu").width(t.width())), t.parent();
    }
    function u(e) {
      var t = 1,
          n = arguments.length;
      for (t = 1; n > t; t++)
        l(e, arguments[t]);
      return e;
    }
    function l(e, t) {
      var n,
          r,
          o,
          i,
          a,
          s = ye.data.ObservableArray,
          u = ye.data.LazyObservableArray,
          c = ye.data.DataSource,
          d = ye.data.HierarchicalDataSource;
      for (n in t)
        r = t[n], o = typeof r, i = o === _e && null !== r ? r.constructor : null, i && i !== Array && i !== s && i !== u && i !== c && i !== d ? r instanceof Date ? e[n] = new Date(r.getTime()) : A(r.clone) ? e[n] = r.clone() : (a = e[n], e[n] = typeof a === _e ? a || {} : {}, l(e[n], r)) : o !== Fe && (e[n] = r);
      return e;
    }
    function c(e, t, r) {
      for (var o in t)
        if (t.hasOwnProperty(o) && t[o].test(e))
          return o;
      return r !== n ? r : e;
    }
    function d(e) {
      return e.replace(/([a-z][A-Z])/g, function(e) {
        return e.charAt(0) + "-" + e.charAt(1).toLowerCase();
      });
    }
    function f(e) {
      return e.replace(/\-(\w)/g, function(e, t) {
        return t.toUpperCase();
      });
    }
    function m(t, n) {
      var r,
          o = {};
      return document.defaultView && document.defaultView.getComputedStyle ? (r = document.defaultView.getComputedStyle(t, ""), n && e.each(n, function(e, t) {
        o[t] = r.getPropertyValue(t);
      })) : (r = t.currentStyle, n && e.each(n, function(e, t) {
        o[t] = r[f(t)];
      })), ye.size(o) || (o = r), o;
    }
    function p(e) {
      if (e && e.className && "string" == typeof e.className && e.className.indexOf("k-auto-scrollable") > -1)
        return !0;
      var t = m(e, ["overflow"]).overflow;
      return "auto" == t || "scroll" == t;
    }
    function h(t, r) {
      var o,
          i = ke.browser.webkit,
          a = ke.browser.mozilla,
          s = t instanceof e ? t[0] : t;
      if (t)
        return o = ke.isRtl(t), r === n ? o && i ? s.scrollWidth - s.clientWidth - s.scrollLeft : Math.abs(s.scrollLeft) : (s.scrollLeft = o && i ? s.scrollWidth - s.clientWidth - r : o && a ? -r : r, n);
    }
    function g(e) {
      var t,
          n = 0;
      for (t in e)
        e.hasOwnProperty(t) && "toJSON" != t && n++;
      return n;
    }
    function y(e, n, r) {
      n || (n = "offset");
      var o = e[n]();
      return ke.browser.msie && (ke.pointers || ke.msPointers) && !r && (o.top -= t.pageYOffset - document.documentElement.scrollTop, o.left -= t.pageXOffset - document.documentElement.scrollLeft), o;
    }
    function v(e) {
      var t = {};
      return be("string" == typeof e ? e.split(" ") : e, function(e) {
        t[e] = this;
      }), t;
    }
    function b(e) {
      return new ye.effects.Element(e);
    }
    function w(e, t, n, r) {
      return typeof e === He && (A(t) && (r = t, t = 400, n = !1), A(n) && (r = n, n = !1), typeof t === Pe && (n = t, t = 400), e = {
        effects: e,
        duration: t,
        reverse: n,
        complete: r
      }), ve({
        effects: {},
        duration: 400,
        reverse: !1,
        init: Se,
        teardown: Se,
        hide: !1
      }, e, {
        completeCallback: e.complete,
        complete: Se
      });
    }
    function M(t, n, r, o, i) {
      for (var a,
          s = 0,
          u = t.length; u > s; s++)
        a = e(t[s]), a.queue(function() {
          B.promise(a, w(n, r, o, i));
        });
      return t;
    }
    function S(e, t, n, r) {
      return t && (t = t.split(" "), be(t, function(t, n) {
        e.toggleClass(n, r);
      })), e;
    }
    function T(e) {
      return ("" + e).replace(J, "&amp;").replace(Y, "&lt;").replace(G, "&gt;").replace(q, "&quot;").replace(V, "&#39;");
    }
    function x(e, t) {
      var r;
      return 0 === t.indexOf("data") && (t = t.substring(4), t = t.charAt(0).toLowerCase() + t.substring(1)), t = t.replace(oe, "-$1"), r = e.getAttribute("data-" + ye.ns + t), null === r ? r = n : "null" === r ? r = null : "true" === r ? r = !0 : "false" === r ? r = !1 : Ce.test(r) ? r = parseFloat(r) : ne.test(r) && !re.test(r) && (r = Function("return (" + r + ")")()), r;
    }
    function k(t, r) {
      var o,
          i,
          a = {};
      for (o in r)
        i = x(t, o), i !== n && (te.test(o) && (i = ye.template(e("#" + i).html())), a[o] = i);
      return a;
    }
    function O(t, n) {
      return e.contains(t, n) ? -1 : 1;
    }
    function z() {
      var t = e(this);
      return e.inArray(t.attr("data-" + ye.ns + "role"), ["slider", "rangeslider"]) > -1 || t.is(":visible");
    }
    function D(e, t) {
      var n = e.nodeName.toLowerCase();
      return (/input|select|textarea|button|object/.test(n) ? !e.disabled : "a" === n ? e.href || t : t) && C(e);
    }
    function C(t) {
      return e.expr.filters.visible(t) && !e(t).parents().addBack().filter(function() {
        return "hidden" === e.css(this, "visibility");
      }).length;
    }
    function E(e, t) {
      return new E.fn.init(e, t);
    }
    var H,
        A,
        _,
        N,
        P,
        F,
        R,
        U,
        I,
        $,
        L,
        W,
        j,
        B,
        J,
        Y,
        q,
        V,
        G,
        K,
        Q,
        Z,
        X,
        ee,
        te,
        ne,
        re,
        oe,
        ie,
        ae,
        se,
        ue,
        le,
        ce,
        de,
        fe,
        me,
        pe,
        he,
        ge,
        ye = t.kendo = t.kendo || {cultures: {}},
        ve = e.extend,
        be = e.each,
        we = e.isArray,
        Me = e.proxy,
        Se = e.noop,
        Te = Math,
        xe = t.JSON || {},
        ke = {},
        Oe = /%/,
        ze = /\{(\d+)(:[^\}]+)?\}/g,
        De = /(\d+(?:\.?)\d*)px\s*(\d+(?:\.?)\d*)px\s*(\d+(?:\.?)\d*)px\s*(\d+)?/i,
        Ce = /^(\+|-?)\d+(\.?)\d*$/,
        Ee = "function",
        He = "string",
        Ae = "number",
        _e = "object",
        Ne = "null",
        Pe = "boolean",
        Fe = "undefined",
        Re = {},
        Ue = {},
        Ie = [].slice;
    ye.version = "2016.2.714".replace(/^\s+|\s+$/g, ""), r.extend = function(e) {
      var t,
          n,
          r = function() {},
          o = this,
          i = e && e.init ? e.init : function() {
            o.apply(this, arguments);
          };
      r.prototype = o.prototype, n = i.fn = i.prototype = new r;
      for (t in e)
        n[t] = null != e[t] && e[t].constructor === Object ? ve(!0, {}, r.prototype[t], e[t]) : e[t];
      return n.constructor = i, i.extend = o.extend, i;
    }, r.prototype._initOptions = function(e) {
      this.options = u({}, this.options, e);
    }, A = ye.isFunction = function(e) {
      return "function" == typeof e;
    }, _ = function() {
      this._defaultPrevented = !0;
    }, N = function() {
      return this._defaultPrevented === !0;
    }, P = r.extend({
      init: function() {
        this._events = {};
      },
      bind: function(e, t, r) {
        var o,
            i,
            a,
            s,
            u,
            l = this,
            c = typeof e === He ? [e] : e,
            d = typeof t === Ee;
        if (t === n) {
          for (o in e)
            l.bind(o, e[o]);
          return l;
        }
        for (o = 0, i = c.length; i > o; o++)
          e = c[o], s = d ? t : t[e], s && (r && (a = s, s = function() {
            l.unbind(e, s), a.apply(l, arguments);
          }, s.original = a), u = l._events[e] = l._events[e] || [], u.push(s));
        return l;
      },
      one: function(e, t) {
        return this.bind(e, t, !0);
      },
      first: function(e, t) {
        var n,
            r,
            o,
            i,
            a = this,
            s = typeof e === He ? [e] : e,
            u = typeof t === Ee;
        for (n = 0, r = s.length; r > n; n++)
          e = s[n], o = u ? t : t[e], o && (i = a._events[e] = a._events[e] || [], i.unshift(o));
        return a;
      },
      trigger: function(e, t) {
        var n,
            r,
            o = this,
            i = o._events[e];
        if (i) {
          for (t = t || {}, t.sender = o, t._defaultPrevented = !1, t.preventDefault = _, t.isDefaultPrevented = N, i = i.slice(), n = 0, r = i.length; r > n; n++)
            i[n].call(o, t);
          return t._defaultPrevented === !0;
        }
        return !1;
      },
      unbind: function(e, t) {
        var r,
            o = this,
            i = o._events[e];
        if (e === n)
          o._events = {};
        else if (i)
          if (t)
            for (r = i.length - 1; r >= 0; r--)
              (i[r] === t || i[r].original === t) && i.splice(r, 1);
          else
            o._events[e] = [];
        return o;
      }
    }), F = /^\w+/, R = /\$\{([^}]*)\}/g, U = /\\\}/g, I = /__CURLY__/g, $ = /\\#/g, L = /__SHARP__/g, W = ["", "0", "00", "000", "0000"], H = {
      paramName: "data",
      useWithBlock: !0,
      render: function(e, t) {
        var n,
            r,
            o = "";
        for (n = 0, r = t.length; r > n; n++)
          o += e(t[n]);
        return o;
      },
      compile: function(e, t) {
        var n,
            r,
            i,
            a = ve({}, this, t),
            s = a.paramName,
            u = s.match(F)[0],
            l = a.useWithBlock,
            c = "var $kendoOutput, $kendoHtmlEncode = kendo.htmlEncode;";
        if (A(e))
          return e;
        for (c += l ? "with(" + s + "){" : "", c += "$kendoOutput=", r = e.replace(U, "__CURLY__").replace(R, "#=$kendoHtmlEncode($1)#").replace(I, "}").replace($, "__SHARP__").split("#"), i = 0; r.length > i; i++)
          c += o(r[i], i % 2 === 0);
        c += l ? ";}" : ";", c += "return $kendoOutput;", c = c.replace(L, "#");
        try {
          return n = Function(u, c), n._slotCount = Math.floor(r.length / 2), n;
        } catch (d) {
          throw Error(ye.format("Invalid template:'{0}' Generated code:'{1}'", e, c));
        }
      }
    }, function() {
      function e(e) {
        return a.lastIndex = 0, a.test(e) ? '"' + e.replace(a, function(e) {
          var t = s[e];
          return typeof t === He ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4);
        }) + '"' : '"' + e + '"';
      }
      function t(i, a) {
        var s,
            l,
            c,
            d,
            f,
            m,
            p = n,
            h = a[i];
        if (h && typeof h === _e && typeof h.toJSON === Ee && (h = h.toJSON(i)), typeof o === Ee && (h = o.call(a, i, h)), m = typeof h, m === He)
          return e(h);
        if (m === Ae)
          return isFinite(h) ? h + "" : Ne;
        if (m === Pe || m === Ne)
          return h + "";
        if (m === _e) {
          if (!h)
            return Ne;
          if (n += r, f = [], "[object Array]" === u.apply(h)) {
            for (d = h.length, s = 0; d > s; s++)
              f[s] = t(s, h) || Ne;
            return c = 0 === f.length ? "[]" : n ? "[\n" + n + f.join(",\n" + n) + "\n" + p + "]" : "[" + f.join(",") + "]", n = p, c;
          }
          if (o && typeof o === _e)
            for (d = o.length, s = 0; d > s; s++)
              typeof o[s] === He && (l = o[s], c = t(l, h), c && f.push(e(l) + (n ? ": " : ":") + c));
          else
            for (l in h)
              Object.hasOwnProperty.call(h, l) && (c = t(l, h), c && f.push(e(l) + (n ? ": " : ":") + c));
          return c = 0 === f.length ? "{}" : n ? "{\n" + n + f.join(",\n" + n) + "\n" + p + "}" : "{" + f.join(",") + "}", n = p, c;
        }
      }
      var n,
          r,
          o,
          a = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
          s = {
            "\b": "\\b",
            "	": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\"
          },
          u = {}.toString;
      typeof Date.prototype.toJSON !== Ee && (Date.prototype.toJSON = function() {
        var e = this;
        return isFinite(e.valueOf()) ? i(e.getUTCFullYear(), 4) + "-" + i(e.getUTCMonth() + 1) + "-" + i(e.getUTCDate()) + "T" + i(e.getUTCHours()) + ":" + i(e.getUTCMinutes()) + ":" + i(e.getUTCSeconds()) + "Z" : null;
      }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function() {
        return this.valueOf();
      }), typeof xe.stringify !== Ee && (xe.stringify = function(e, i, a) {
        var s;
        if (n = "", r = "", typeof a === Ae)
          for (s = 0; a > s; s += 1)
            r += " ";
        else
          typeof a === He && (r = a);
        if (o = i, i && typeof i !== Ee && (typeof i !== _e || typeof i.length !== Ae))
          throw Error("JSON.stringify");
        return t("", {"": e});
      });
    }(), function() {
      function e(e) {
        if (e) {
          if (e.numberFormat)
            return e;
          if (typeof e === He) {
            var t = ye.cultures;
            return t[e] || t[e.split("-")[0]] || null;
          }
          return null;
        }
        return null;
      }
      function t(t) {
        return t && (t = e(t)), t || ye.cultures.current;
      }
      function r(e, r, o) {
        o = t(o);
        var a = o.calendars.standard,
            s = a.days,
            u = a.months;
        return r = a.patterns[r] || r, r.replace(l, function(t) {
          var r,
              o,
              l;
          return "d" === t ? o = e.getDate() : "dd" === t ? o = i(e.getDate()) : "ddd" === t ? o = s.namesAbbr[e.getDay()] : "dddd" === t ? o = s.names[e.getDay()] : "M" === t ? o = e.getMonth() + 1 : "MM" === t ? o = i(e.getMonth() + 1) : "MMM" === t ? o = u.namesAbbr[e.getMonth()] : "MMMM" === t ? o = u.names[e.getMonth()] : "yy" === t ? o = i(e.getFullYear() % 100) : "yyyy" === t ? o = i(e.getFullYear(), 4) : "h" === t ? o = e.getHours() % 12 || 12 : "hh" === t ? o = i(e.getHours() % 12 || 12) : "H" === t ? o = e.getHours() : "HH" === t ? o = i(e.getHours()) : "m" === t ? o = e.getMinutes() : "mm" === t ? o = i(e.getMinutes()) : "s" === t ? o = e.getSeconds() : "ss" === t ? o = i(e.getSeconds()) : "f" === t ? o = Te.floor(e.getMilliseconds() / 100) : "ff" === t ? (o = e.getMilliseconds(), o > 99 && (o = Te.floor(o / 10)), o = i(o)) : "fff" === t ? o = i(e.getMilliseconds(), 3) : "tt" === t ? o = e.getHours() < 12 ? a.AM[0] : a.PM[0] : "zzz" === t ? (r = e.getTimezoneOffset(), l = 0 > r, o = ("" + Te.abs(r / 60)).split(".")[0], r = Te.abs(r) - 60 * o, o = (l ? "+" : "-") + i(o), o += ":" + i(r)) : ("zz" === t || "z" === t) && (o = e.getTimezoneOffset() / 60, l = 0 > o, o = ("" + Te.abs(o)).split(".")[0], o = (l ? "+" : "-") + ("zz" === t ? i(o) : o)), o !== n ? o : t.slice(1, t.length - 1);
        });
      }
      function o(e, r, o) {
        o = t(o);
        var i,
            u,
            l,
            b,
            w,
            M,
            S,
            T,
            x,
            k,
            O,
            z,
            D,
            C,
            E,
            H,
            A,
            _,
            N,
            P,
            F,
            R,
            U,
            I = o.numberFormat,
            $ = I[p],
            L = I.decimals,
            W = I.pattern[0],
            j = [],
            B = 0 > e,
            J = m,
            Y = m,
            q = -1;
        if (e === n)
          return m;
        if (!isFinite(e))
          return e;
        if (!r)
          return o.name.length ? e.toLocaleString() : "" + e;
        if (w = c.exec(r)) {
          if (r = w[1].toLowerCase(), u = "c" === r, l = "p" === r, (u || l) && (I = u ? I.currency : I.percent, $ = I[p], L = I.decimals, i = I.symbol, W = I.pattern[B ? 0 : 1]), b = w[2], b && (L = +b), "e" === r)
            return b ? e.toExponential(L) : e.toExponential();
          if (l && (e *= 100), e = s(e, L), B = 0 > e, e = e.split(p), M = e[0], S = e[1], B && (M = M.substring(1)), Y = a(M, 0, M.length, I), S && (Y += $ + S), "n" === r && !B)
            return Y;
          for (e = m, k = 0, O = W.length; O > k; k++)
            z = W.charAt(k), e += "n" === z ? Y : "$" === z || "%" === z ? i : z;
          return e;
        }
        if (B && (e = -e), (r.indexOf("'") > -1 || r.indexOf('"') > -1 || r.indexOf("\\") > -1) && (r = r.replace(d, function(e) {
          var t = e.charAt(0).replace("\\", ""),
              n = e.slice(1).replace(t, "");
          return j.push(n), v;
        })), r = r.split(";"), B && r[1])
          r = r[1], C = !0;
        else if (0 === e) {
          if (r = r[2] || r[0], -1 == r.indexOf(g) && -1 == r.indexOf(y))
            return r;
        } else
          r = r[0];
        if (P = r.indexOf("%"), F = r.indexOf("$"), l = -1 != P, u = -1 != F, l && (e *= 100), u && "\\" === r[F - 1] && (r = r.split("\\").join(""), u = !1), (u || l) && (I = u ? I.currency : I.percent, $ = I[p], L = I.decimals, i = I.symbol), D = r.indexOf(h) > -1, D && (r = r.replace(f, m)), E = r.indexOf(p), O = r.length, -1 != E ? (S = ("" + e).split("e"), S = S[1] ? s(e, Math.abs(S[1])) : S[0], S = S.split(p)[1] || m, A = r.lastIndexOf(y) - E, H = r.lastIndexOf(g) - E, _ = A > -1, N = H > -1, k = S.length, _ || N || (r = r.substring(0, E) + r.substring(E + 1), O = r.length, E = -1, k = 0), _ && A > H ? k = A : H > A && (N && k > H ? k = H : _ && A > k && (k = A)), k > -1 && (e = s(e, k))) : e = s(e), H = r.indexOf(g), R = A = r.indexOf(y), q = -1 == H && -1 != A ? A : -1 != H && -1 == A ? H : H > A ? A : H, H = r.lastIndexOf(g), A = r.lastIndexOf(y), U = -1 == H && -1 != A ? A : -1 != H && -1 == A ? H : H > A ? H : A, q == O && (U = q), -1 != q) {
          for (Y = ("" + e).split(p), M = Y[0], S = Y[1] || m, T = M.length, x = S.length, B && -1 * e >= 0 && (B = !1), e = r.substring(0, q), B && !C && (e += "-"), k = q; O > k; k++) {
            if (z = r.charAt(k), -1 == E) {
              if (T > U - k) {
                e += M;
                break;
              }
            } else if (-1 != A && k > A && (J = m), T >= E - k && E - k > -1 && (e += M, k = E), E === k) {
              e += (S ? $ : m) + S, k += U - E + 1;
              continue;
            }
            z === y ? (e += z, J = z) : z === g && (e += J);
          }
          if (D && (e = a(e, q + (B ? 1 : 0), Math.max(U, T + q), I)), U >= q && (e += r.substring(U + 1)), u || l) {
            for (Y = m, k = 0, O = e.length; O > k; k++)
              z = e.charAt(k), Y += "$" === z || "%" === z ? i : z;
            e = Y;
          }
          if (O = j.length)
            for (k = 0; O > k; k++)
              e = e.replace(v, j[k]);
        }
        return e;
      }
      var a,
          s,
          u,
          l = /dddd|ddd|dd|d|MMMM|MMM|MM|M|yyyy|yy|HH|H|hh|h|mm|m|fff|ff|f|tt|ss|s|zzz|zz|z|"[^"]*"|'[^']*'/g,
          c = /^(n|c|p|e)(\d*)$/i,
          d = /(\\.)|(['][^']*[']?)|(["][^"]*["]?)/g,
          f = /\,/g,
          m = "",
          p = ".",
          h = ",",
          g = "#",
          y = "0",
          v = "??",
          b = "en-US",
          w = {}.toString;
      ye.cultures["en-US"] = {
        name: b,
        numberFormat: {
          pattern: ["-n"],
          decimals: 2,
          ",": ",",
          ".": ".",
          groupSize: [3],
          percent: {
            pattern: ["-n %", "n %"],
            decimals: 2,
            ",": ",",
            ".": ".",
            groupSize: [3],
            symbol: "%"
          },
          currency: {
            name: "US Dollar",
            abbr: "USD",
            pattern: ["($n)", "$n"],
            decimals: 2,
            ",": ",",
            ".": ".",
            groupSize: [3],
            symbol: "$"
          }
        },
        calendars: {standard: {
            days: {
              names: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              namesAbbr: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
              namesShort: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
            },
            months: {
              names: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
              namesAbbr: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
            },
            AM: ["AM", "am", "AM"],
            PM: ["PM", "pm", "PM"],
            patterns: {
              d: "M/d/yyyy",
              D: "dddd, MMMM dd, yyyy",
              F: "dddd, MMMM dd, yyyy h:mm:ss tt",
              g: "M/d/yyyy h:mm tt",
              G: "M/d/yyyy h:mm:ss tt",
              m: "MMMM dd",
              M: "MMMM dd",
              s: "yyyy'-'MM'-'ddTHH':'mm':'ss",
              t: "h:mm tt",
              T: "h:mm:ss tt",
              u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
              y: "MMMM, yyyy",
              Y: "MMMM, yyyy"
            },
            "/": "/",
            ":": ":",
            firstDay: 0,
            twoDigitYearMax: 2029
          }}
      }, ye.culture = function(t) {
        var r,
            o = ye.cultures;
        return t === n ? o.current : (r = e(t) || o[b], r.calendar = r.calendars.standard, o.current = r, n);
      }, ye.findCulture = e, ye.getCulture = t, ye.culture(b), a = function(e, t, r, o) {
        var i,
            a,
            s,
            u,
            l,
            c,
            d = e.indexOf(o[p]),
            f = o.groupSize.slice(),
            m = f.shift();
        if (r = -1 !== d ? d : r + 1, i = e.substring(t, r), a = i.length, a >= m) {
          for (s = a, u = []; s > -1; )
            if (l = i.substring(s - m, s), l && u.push(l), s -= m, c = f.shift(), m = c !== n ? c : m, 0 === m) {
              u.push(i.substring(0, s));
              break;
            }
          i = u.reverse().join(o[h]), e = e.substring(0, t) + i + e.substring(r);
        }
        return e;
      }, s = function(e, t) {
        return t = t || 0, e = ("" + e).split("e"), e = Math.round(+(e[0] + "e" + (e[1] ? +e[1] + t : t))), e = ("" + e).split("e"), e = +(e[0] + "e" + (e[1] ? +e[1] - t : -t)), e.toFixed(t);
      }, u = function(e, t, i) {
        if (t) {
          if ("[object Date]" === w.call(e))
            return r(e, t, i);
          if (typeof e === Ae)
            return o(e, t, i);
        }
        return e !== n ? e : "";
      }, ye.format = function(e) {
        var t = arguments;
        return e.replace(ze, function(e, n, r) {
          var o = t[parseInt(n, 10) + 1];
          return u(o, r ? r.substring(1) : "");
        });
      }, ye._extractFormat = function(e) {
        return "{0:" === e.slice(0, 3) && (e = e.slice(3, e.length - 1)), e;
      }, ye._activeElement = function() {
        try {
          return document.activeElement;
        } catch (e) {
          return document.documentElement.activeElement;
        }
      }, ye._round = s, ye.toString = u;
    }(), function() {
      function t(e, t, n) {
        return !(e >= t && n >= e);
      }
      function r(e) {
        return e.charAt(0);
      }
      function o(t) {
        return e.map(t, r);
      }
      function i(e, t) {
        t || 23 !== e.getHours() || e.setHours(e.getHours() + 2);
      }
      function a(e) {
        for (var t = 0,
            n = e.length,
            r = []; n > t; t++)
          r[t] = (e[t] + "").toLowerCase();
        return r;
      }
      function s(e) {
        var t,
            n = {};
        for (t in e)
          n[t] = a(e[t]);
        return n;
      }
      function u(e, r, a) {
        if (!e)
          return null;
        var u,
            l,
            c,
            d,
            f,
            h,
            g,
            y,
            v,
            w,
            M,
            S,
            T,
            x = function(e) {
              for (var t = 0; r[F] === e; )
                t++, F++;
              return t > 0 && (F -= 1), t;
            },
            k = function(t) {
              var n = b[t] || RegExp("^\\d{1," + t + "}"),
                  r = e.substr(R, t).match(n);
              return r ? (r = r[0], R += r.length, parseInt(r, 10)) : null;
            },
            O = function(t, n) {
              for (var r,
                  o,
                  i,
                  a = 0,
                  s = t.length,
                  u = 0,
                  l = 0; s > a; a++)
                r = t[a], o = r.length, i = e.substr(R, o), n && (i = i.toLowerCase()), i == r && o > u && (u = o, l = a);
              return u ? (R += u, l + 1) : null;
            },
            z = function() {
              var t = !1;
              return e.charAt(R) === r[F] && (R++, t = !0), t;
            },
            D = a.calendars.standard,
            C = null,
            E = null,
            H = null,
            A = null,
            _ = null,
            N = null,
            P = null,
            F = 0,
            R = 0,
            U = !1,
            I = new Date,
            $ = D.twoDigitYearMax || 2029,
            L = I.getFullYear();
        for (r || (r = "d"), d = D.patterns[r], d && (r = d), r = r.split(""), c = r.length; c > F; F++)
          if (u = r[F], U)
            "'" === u ? U = !1 : z();
          else if ("d" === u) {
            if (l = x("d"), D._lowerDays || (D._lowerDays = s(D.days)), null !== H && l > 2)
              continue;
            if (H = 3 > l ? k(2) : O(D._lowerDays[3 == l ? "namesAbbr" : "names"], !0), null === H || t(H, 1, 31))
              return null;
          } else if ("M" === u) {
            if (l = x("M"), D._lowerMonths || (D._lowerMonths = s(D.months)), E = 3 > l ? k(2) : O(D._lowerMonths[3 == l ? "namesAbbr" : "names"], !0), null === E || t(E, 1, 12))
              return null;
            E -= 1;
          } else if ("y" === u) {
            if (l = x("y"), C = k(l), null === C)
              return null;
            2 == l && ("string" == typeof $ && ($ = L + parseInt($, 10)), C = L - L % 100 + C, C > $ && (C -= 100));
          } else if ("h" === u) {
            if (x("h"), A = k(2), 12 == A && (A = 0), null === A || t(A, 0, 11))
              return null;
          } else if ("H" === u) {
            if (x("H"), A = k(2), null === A || t(A, 0, 23))
              return null;
          } else if ("m" === u) {
            if (x("m"), _ = k(2), null === _ || t(_, 0, 59))
              return null;
          } else if ("s" === u) {
            if (x("s"), N = k(2), null === N || t(N, 0, 59))
              return null;
          } else if ("f" === u) {
            if (l = x("f"), T = e.substr(R, l).match(b[3]), P = k(l), null !== P && (P = parseFloat("0." + T[0], 10), P = ye._round(P, 3), P *= 1e3), null === P || t(P, 0, 999))
              return null;
          } else if ("t" === u) {
            if (l = x("t"), y = D.AM, v = D.PM, 1 === l && (y = o(y), v = o(v)), f = O(v), !f && !O(y))
              return null;
          } else if ("z" === u) {
            if (h = !0, l = x("z"), "Z" === e.substr(R, 1)) {
              z();
              continue;
            }
            if (g = e.substr(R, 6).match(l > 2 ? p : m), !g)
              return null;
            if (g = g[0].split(":"), w = g[0], M = g[1], !M && w.length > 3 && (R = w.length - 2, M = w.substring(R), w = w.substring(0, R)), w = parseInt(w, 10), t(w, -12, 13))
              return null;
            if (l > 2 && (M = parseInt(M, 10), isNaN(M) || t(M, 0, 59)))
              return null;
          } else if ("'" === u)
            U = !0, z();
          else if (!z())
            return null;
        return S = null !== A || null !== _ || N || null, null === C && null === E && null === H && S ? (C = L, E = I.getMonth(), H = I.getDate()) : (null === C && (C = L), null === H && (H = 1)), f && 12 > A && (A += 12), h ? (w && (A += -w), M && (_ += -M), e = new Date(Date.UTC(C, E, H, A, _, N, P))) : (e = new Date(C, E, H, A, _, N, P), i(e, A)), 100 > C && e.setFullYear(C), e.getDate() !== H && h === n ? null : e;
      }
      function l(e) {
        var t = "-" === e.substr(0, 1) ? -1 : 1;
        return e = e.substring(1), e = 60 * parseInt(e.substr(0, 2), 10) + parseInt(e.substring(2), 10), t * e;
      }
      function c(e) {
        var t,
            n,
            r,
            o = Te.max(y.length, v.length),
            i = e.calendar.patterns,
            a = [];
        for (r = 0; o > r; r++) {
          for (t = y[r], n = 0; t.length > n; n++)
            a.push(i[t[n]]);
          a = a.concat(v[r]);
        }
        return a;
      }
      var d = /\u00A0/g,
          f = /[eE][\-+]?[0-9]+/,
          m = /[+|\-]\d{1,2}/,
          p = /[+|\-]\d{1,2}:?\d{2}/,
          h = /^\/Date\((.*?)\)\/$/,
          g = /[+-]\d*/,
          y = [[], ["G", "g", "F"], ["D", "d", "y", "m", "T", "t"]],
          v = [["yyyy-MM-ddTHH:mm:ss.fffffffzzz", "yyyy-MM-ddTHH:mm:ss.fffffff", "yyyy-MM-ddTHH:mm:ss.fffzzz", "yyyy-MM-ddTHH:mm:ss.fff", "ddd MMM dd yyyy HH:mm:ss", "yyyy-MM-ddTHH:mm:sszzz", "yyyy-MM-ddTHH:mmzzz", "yyyy-MM-ddTHH:mmzz", "yyyy-MM-ddTHH:mm:ss", "yyyy-MM-dd HH:mm:ss", "yyyy/MM/dd HH:mm:ss"], ["yyyy-MM-ddTHH:mm", "yyyy-MM-dd HH:mm", "yyyy/MM/dd HH:mm"], ["yyyy/MM/dd", "yyyy-MM-dd", "HH:mm:ss", "HH:mm"]],
          b = {
            2: /^\d{1,2}/,
            3: /^\d{1,3}/,
            4: /^\d{4}/
          },
          w = {}.toString;
      ye.parseDate = function(e, t, n) {
        var r,
            o,
            i,
            a;
        if ("[object Date]" === w.call(e))
          return e;
        if (r = 0, o = null, e && 0 === e.indexOf("/D") && (o = h.exec(e)))
          return o = o[1], a = g.exec(o.substring(1)), o = new Date(parseInt(o, 10)), a && (a = l(a[0]), o = ye.timezone.apply(o, 0), o = ye.timezone.convert(o, 0, -1 * a)), o;
        for (n = ye.getCulture(n), t || (t = c(n)), t = we(t) ? t : [t], i = t.length; i > r; r++)
          if (o = u(e, t[r], n))
            return o;
        return o;
      }, ye.parseInt = function(e, t) {
        var n = ye.parseFloat(e, t);
        return n && (n = 0 | n), n;
      }, ye.parseFloat = function(e, t, n) {
        if (!e && 0 !== e)
          return null;
        if (typeof e === Ae)
          return e;
        e = "" + e, t = ye.getCulture(t);
        var r,
            o,
            i = t.numberFormat,
            a = i.percent,
            s = i.currency,
            u = s.symbol,
            l = a.symbol,
            c = e.indexOf("-");
        return f.test(e) ? (e = parseFloat(e.replace(i["."], ".")), isNaN(e) && (e = null), e) : c > 0 ? null : (c = c > -1, e.indexOf(u) > -1 || n && n.toLowerCase().indexOf("c") > -1 ? (i = s, r = i.pattern[0].replace("$", u).split("n"), e.indexOf(r[0]) > -1 && e.indexOf(r[1]) > -1 && (e = e.replace(r[0], "").replace(r[1], ""), c = !0)) : e.indexOf(l) > -1 && (o = !0, i = a, u = l), e = e.replace("-", "").replace(u, "").replace(d, " ").split(i[","].replace(d, " ")).join("").replace(i["."], "."), e = parseFloat(e), isNaN(e) ? e = null : c && (e *= -1), e && o && (e /= 100), e);
      };
    }(), function() {
      var r,
          o,
          i,
          a,
          s,
          u,
          l;
      ke._scrollbar = n, ke.scrollbar = function(e) {
        if (isNaN(ke._scrollbar) || e) {
          var t,
              n = document.createElement("div");
          return n.style.cssText = "overflow:scroll;overflow-x:hidden;zoom:1;clear:both;display:block", n.innerHTML = "&nbsp;", document.body.appendChild(n), ke._scrollbar = t = n.offsetWidth - n.scrollWidth, document.body.removeChild(n), t;
        }
        return ke._scrollbar;
      }, ke.isRtl = function(t) {
        return e(t).closest(".k-rtl").length > 0;
      }, r = document.createElement("table");
      try {
        r.innerHTML = "<tr><td></td></tr>", ke.tbodyInnerHtml = !0;
      } catch (d) {
        ke.tbodyInnerHtml = !1;
      }
      ke.touch = "ontouchstart" in t, ke.msPointers = t.MSPointerEvent, ke.pointers = t.PointerEvent, o = ke.transitions = !1, i = ke.transforms = !1, a = "HTMLElement" in t ? HTMLElement.prototype : [], ke.hasHW3D = "WebKitCSSMatrix" in t && "m11" in new t.WebKitCSSMatrix || "MozPerspective" in document.documentElement.style || "msPerspective" in document.documentElement.style, be(["Moz", "webkit", "O", "ms"], function() {
        var e,
            t = "" + this,
            a = typeof r.style[t + "Transition"] === He;
        return a || typeof r.style[t + "Transform"] === He ? (e = t.toLowerCase(), i = {
          css: "ms" != e ? "-" + e + "-" : "",
          prefix: t,
          event: "o" === e || "webkit" === e ? e : ""
        }, a && (o = i, o.event = o.event ? o.event + "TransitionEnd" : "transitionend"), !1) : n;
      }), r = null, ke.transforms = i, ke.transitions = o, ke.devicePixelRatio = t.devicePixelRatio === n ? 1 : t.devicePixelRatio;
      try {
        ke.screenWidth = t.outerWidth || t.screen ? t.screen.availWidth : t.innerWidth, ke.screenHeight = t.outerHeight || t.screen ? t.screen.availHeight : t.innerHeight;
      } catch (d) {
        ke.screenWidth = t.screen.availWidth, ke.screenHeight = t.screen.availHeight;
      }
      ke.detectOS = function(e) {
        var n,
            r,
            o = !1,
            i = [],
            a = !/mobile safari/i.test(e),
            s = {
              wp: /(Windows Phone(?: OS)?)\s(\d+)\.(\d+(\.\d+)?)/,
              fire: /(Silk)\/(\d+)\.(\d+(\.\d+)?)/,
              android: /(Android|Android.*(?:Opera|Firefox).*?\/)\s*(\d+)\.(\d+(\.\d+)?)/,
              iphone: /(iPhone|iPod).*OS\s+(\d+)[\._]([\d\._]+)/,
              ipad: /(iPad).*OS\s+(\d+)[\._]([\d_]+)/,
              meego: /(MeeGo).+NokiaBrowser\/(\d+)\.([\d\._]+)/,
              webos: /(webOS)\/(\d+)\.(\d+(\.\d+)?)/,
              blackberry: /(BlackBerry|BB10).*?Version\/(\d+)\.(\d+(\.\d+)?)/,
              playbook: /(PlayBook).*?Tablet\s*OS\s*(\d+)\.(\d+(\.\d+)?)/,
              windows: /(MSIE)\s+(\d+)\.(\d+(\.\d+)?)/,
              tizen: /(tizen).*?Version\/(\d+)\.(\d+(\.\d+)?)/i,
              sailfish: /(sailfish).*rv:(\d+)\.(\d+(\.\d+)?).*firefox/i,
              ffos: /(Mobile).*rv:(\d+)\.(\d+(\.\d+)?).*Firefox/
            },
            u = {
              ios: /^i(phone|pad|pod)$/i,
              android: /^android|fire$/i,
              blackberry: /^blackberry|playbook/i,
              windows: /windows/,
              wp: /wp/,
              flat: /sailfish|ffos|tizen/i,
              meego: /meego/
            },
            l = {tablet: /playbook|ipad|fire/i},
            d = {
              omini: /Opera\sMini/i,
              omobile: /Opera\sMobi/i,
              firefox: /Firefox|Fennec/i,
              mobilesafari: /version\/.*safari/i,
              ie: /MSIE|Windows\sPhone/i,
              chrome: /chrome|crios/i,
              webkit: /webkit/i
            };
        for (r in s)
          if (s.hasOwnProperty(r) && (i = e.match(s[r]))) {
            if ("windows" == r && "plugins" in navigator)
              return !1;
            o = {}, o.device = r, o.tablet = c(r, l, !1), o.browser = c(e, d, "default"), o.name = c(r, u), o[o.name] = !0, o.majorVersion = i[2], o.minorVersion = i[3].replace("_", "."), n = o.minorVersion.replace(".", "").substr(0, 2), o.flatVersion = o.majorVersion + n + Array(3 - (3 > n.length ? n.length : 2)).join("0"), o.cordova = typeof t.PhoneGap !== Fe || typeof t.cordova !== Fe, o.appMode = t.navigator.standalone || /file|local|wmapp/.test(t.location.protocol) || o.cordova, o.android && (1.5 > ke.devicePixelRatio && 400 > o.flatVersion || a) && (ke.screenWidth > 800 || ke.screenHeight > 800) && (o.tablet = r);
            break;
          }
        return o;
      }, s = ke.mobileOS = ke.detectOS(navigator.userAgent), ke.wpDevicePixelRatio = s.wp ? screen.width / 320 : 0, ke.kineticScrollNeeded = s && (ke.touch || ke.msPointers || ke.pointers), ke.hasNativeScrolling = !1, (s.ios || s.android && s.majorVersion > 2 || s.wp) && (ke.hasNativeScrolling = s), ke.delayedClick = function() {
        if (ke.touch) {
          if (s.ios)
            return !0;
          if (s.android)
            return ke.browser.chrome ? 32 > ke.browser.version ? !1 : !(e("meta[name=viewport]").attr("content") || "").match(/user-scalable=no/i) : !0;
        }
        return !1;
      }, ke.mouseAndTouchPresent = ke.touch && !(ke.mobileOS.ios || ke.mobileOS.android), ke.detectBrowser = function(e) {
        var t,
            n = !1,
            r = [],
            o = {
              edge: /(edge)[ \/]([\w.]+)/i,
              webkit: /(chrome)[ \/]([\w.]+)/i,
              safari: /(webkit)[ \/]([\w.]+)/i,
              opera: /(opera)(?:.*version|)[ \/]([\w.]+)/i,
              msie: /(msie\s|trident.*? rv:)([\w.]+)/i,
              mozilla: /(mozilla)(?:.*? rv:([\w.]+)|)/i
            };
        for (t in o)
          if (o.hasOwnProperty(t) && (r = e.match(o[t]))) {
            n = {}, n[t] = !0, n[r[1].toLowerCase().split(" ")[0].split("/")[0]] = !0, n.version = parseInt(document.documentMode || r[2], 10);
            break;
          }
        return n;
      }, ke.browser = ke.detectBrowser(navigator.userAgent), ke.detectClipboardAccess = function() {
        var e = {
          copy: document.queryCommandSupported ? document.queryCommandSupported("copy") : !1,
          cut: document.queryCommandSupported ? document.queryCommandSupported("cut") : !1,
          paste: document.queryCommandSupported ? document.queryCommandSupported("paste") : !1
        };
        return ke.browser.chrome && (e.paste = !1, ke.browser.version >= 43 && (e.copy = !0, e.cut = !0)), e;
      }, ke.clipboard = ke.detectClipboardAccess(), ke.zoomLevel = function() {
        var e,
            n,
            r;
        try {
          return e = ke.browser, n = 0, r = document.documentElement, e.msie && 11 == e.version && r.scrollHeight > r.clientHeight && !ke.touch && (n = ke.scrollbar()), ke.touch ? r.clientWidth / t.innerWidth : e.msie && e.version >= 10 ? ((top || t).document.documentElement.offsetWidth + n) / (top || t).innerWidth : 1;
        } catch (o) {
          return 1;
        }
      }, ke.cssBorderSpacing = n !== document.documentElement.style.borderSpacing && !(ke.browser.msie && 8 > ke.browser.version), function(t) {
        var n = "",
            r = e(document.documentElement),
            o = parseInt(t.version, 10);
        t.msie ? n = "ie" : t.mozilla ? n = "ff" : t.safari ? n = "safari" : t.webkit ? n = "webkit" : t.opera ? n = "opera" : t.edge && (n = "edge"), n && (n = "k-" + n + " k-" + n + o), ke.mobileOS && (n += " k-mobile"), r.addClass(n);
      }(ke.browser), ke.eventCapture = document.documentElement.addEventListener, u = document.createElement("input"), ke.placeholder = "placeholder" in u, ke.propertyChangeEvent = "onpropertychange" in u, ke.input = function() {
        for (var e,
            t = ["number", "date", "time", "month", "week", "datetime", "datetime-local"],
            n = t.length,
            r = "test",
            o = {},
            i = 0; n > i; i++)
          e = t[i], u.setAttribute("type", e), u.value = r, o[e.replace("-", "")] = "text" !== u.type && u.value !== r;
        return o;
      }(), u.style.cssText = "float:left;", ke.cssFloat = !!u.style.cssFloat, u = null, ke.stableSort = function() {
        var e,
            t = 513,
            n = [{
              index: 0,
              field: "b"
            }];
        for (e = 1; t > e; e++)
          n.push({
            index: e,
            field: "a"
          });
        return n.sort(function(e, t) {
          return e.field > t.field ? 1 : t.field > e.field ? -1 : 0;
        }), 1 === n[0].index;
      }(), ke.matchesSelector = a.webkitMatchesSelector || a.mozMatchesSelector || a.msMatchesSelector || a.oMatchesSelector || a.matchesSelector || a.matches || function(t) {
        for (var n = document.querySelectorAll ? (this.parentNode || document).querySelectorAll(t) || [] : e(t),
            r = n.length; r--; )
          if (n[r] == this)
            return !0;
        return !1;
      }, ke.pushState = t.history && t.history.pushState, l = document.documentMode, ke.hashChange = "onhashchange" in t && !(ke.browser.msie && (!l || 8 >= l)), ke.customElements = "registerElement" in t.document;
    }(), j = {
      left: {reverse: "right"},
      right: {reverse: "left"},
      down: {reverse: "up"},
      up: {reverse: "down"},
      top: {reverse: "bottom"},
      bottom: {reverse: "top"},
      "in": {reverse: "out"},
      out: {reverse: "in"}
    }, B = {}, e.extend(B, {
      enabled: !0,
      Element: function(t) {
        this.element = e(t);
      },
      promise: function(e, t) {
        e.is(":visible") || e.css({display: e.data("olddisplay") || "block"}).css("display"), t.hide && e.data("olddisplay", e.css("display")).hide(), t.init && t.init(), t.completeCallback && t.completeCallback(e), e.dequeue();
      },
      disable: function() {
        this.enabled = !1, this.promise = this.promiseShim;
      },
      enable: function() {
        this.enabled = !0, this.promise = this.animatedPromise;
      }
    }), B.promiseShim = B.promise, "kendoAnimate" in e.fn || ve(e.fn, {
      kendoStop: function(e, t) {
        return this.stop(e, t);
      },
      kendoAnimate: function(e, t, n, r) {
        return M(this, e, t, n, r);
      },
      kendoAddClass: function(e, t) {
        return ye.toggleClass(this, e, t, !0);
      },
      kendoRemoveClass: function(e, t) {
        return ye.toggleClass(this, e, t, !1);
      },
      kendoToggleClass: function(e, t, n) {
        return ye.toggleClass(this, e, t, n);
      }
    }), J = /&/g, Y = /</g, q = /"/g, V = /'/g, G = />/g, K = function(e) {
      return e.target;
    }, ke.touch && (K = function(e) {
      var t = "originalEvent" in e ? e.originalEvent.changedTouches : "changedTouches" in e ? e.changedTouches : null;
      return t ? document.elementFromPoint(t[0].clientX, t[0].clientY) : e.target;
    }, be(["swipe", "swipeLeft", "swipeRight", "swipeUp", "swipeDown", "doubleTap", "tap"], function(t, n) {
      e.fn[n] = function(e) {
        return this.bind(n, e);
      };
    })), ke.touch ? ke.mobileOS ? (ke.mousedown = "touchstart", ke.mouseup = "touchend", ke.mousemove = "touchmove", ke.mousecancel = "touchcancel", ke.click = "touchend", ke.resize = "orientationchange") : (ke.mousedown = "mousedown touchstart", ke.mouseup = "mouseup touchend", ke.mousemove = "mousemove touchmove", ke.mousecancel = "mouseleave touchcancel", ke.click = "click", ke.resize = "resize") : ke.pointers ? (ke.mousemove = "pointermove", ke.mousedown = "pointerdown", ke.mouseup = "pointerup", ke.mousecancel = "pointercancel", ke.click = "pointerup", ke.resize = "orientationchange resize") : ke.msPointers ? (ke.mousemove = "MSPointerMove", ke.mousedown = "MSPointerDown", ke.mouseup = "MSPointerUp", ke.mousecancel = "MSPointerCancel", ke.click = "MSPointerUp", ke.resize = "orientationchange resize") : (ke.mousemove = "mousemove", ke.mousedown = "mousedown", ke.mouseup = "mouseup", ke.mousecancel = "mouseleave", ke.click = "click", ke.resize = "resize"), Q = function(e, t) {
      var n,
          r,
          o,
          i,
          a = t || "d",
          s = 1;
      for (r = 0, o = e.length; o > r; r++)
        i = e[r], "" !== i && (n = i.indexOf("["), 0 !== n && (-1 == n ? i = "." + i : (s++, i = "." + i.substring(0, n) + " || {})" + i.substring(n))), s++, a += i + (o - 1 > r ? " || {})" : ")"));
      return Array(s).join("(") + a;
    }, Z = /^([a-z]+:)?\/\//i, ve(ye, {
      widgets: [],
      _widgetRegisteredCallbacks: [],
      ui: ye.ui || {},
      fx: ye.fx || b,
      effects: ye.effects || B,
      mobile: ye.mobile || {},
      data: ye.data || {},
      dataviz: ye.dataviz || {},
      drawing: ye.drawing || {},
      spreadsheet: {messages: {}},
      keys: {
        INSERT: 45,
        DELETE: 46,
        BACKSPACE: 8,
        TAB: 9,
        ENTER: 13,
        ESC: 27,
        LEFT: 37,
        UP: 38,
        RIGHT: 39,
        DOWN: 40,
        END: 35,
        HOME: 36,
        SPACEBAR: 32,
        PAGEUP: 33,
        PAGEDOWN: 34,
        F2: 113,
        F10: 121,
        F12: 123,
        NUMPAD_PLUS: 107,
        NUMPAD_MINUS: 109,
        NUMPAD_DOT: 110
      },
      support: ye.support || ke,
      animate: ye.animate || M,
      ns: "",
      attr: function(e) {
        return "data-" + ye.ns + e;
      },
      getShadows: a,
      wrap: s,
      deepExtend: u,
      getComputedStyles: m,
      webComponents: ye.webComponents || [],
      isScrollable: p,
      scrollLeft: h,
      size: g,
      toCamelCase: f,
      toHyphens: d,
      getOffset: ye.getOffset || y,
      parseEffects: ye.parseEffects || v,
      toggleClass: ye.toggleClass || S,
      directions: ye.directions || j,
      Observable: P,
      Class: r,
      Template: H,
      template: Me(H.compile, H),
      render: Me(H.render, H),
      stringify: Me(xe.stringify, xe),
      eventTarget: K,
      htmlEncode: T,
      isLocalUrl: function(e) {
        return e && !Z.test(e);
      },
      expr: function(e, t, n) {
        return e = e || "", typeof t == He && (n = t, t = !1), n = n || "d", e && "[" !== e.charAt(0) && (e = "." + e), t ? (e = e.replace(/"([^.]*)\.([^"]*)"/g, '"$1_$DOT$_$2"'), e = e.replace(/'([^.]*)\.([^']*)'/g, "'$1_$DOT$_$2'"), e = Q(e.split("."), n), e = e.replace(/_\$DOT\$_/g, ".")) : e = n + e, e;
      },
      getter: function(e, t) {
        var n = e + t;
        return Re[n] = Re[n] || Function("d", "return " + ye.expr(e, t));
      },
      setter: function(e) {
        return Ue[e] = Ue[e] || Function("d,value", ye.expr(e) + "=value");
      },
      accessor: function(e) {
        return {
          get: ye.getter(e),
          set: ye.setter(e)
        };
      },
      guid: function() {
        var e,
            t,
            n = "";
        for (e = 0; 32 > e; e++)
          t = 16 * Te.random() | 0, (8 == e || 12 == e || 16 == e || 20 == e) && (n += "-"), n += (12 == e ? 4 : 16 == e ? 3 & t | 8 : t).toString(16);
        return n;
      },
      roleSelector: function(e) {
        return e.replace(/(\S+)/g, "[" + ye.attr("role") + "=$1],").slice(0, -1);
      },
      directiveSelector: function(e) {
        var t,
            n = e.split(" ");
        if (n)
          for (t = 0; n.length > t; t++)
            "view" != n[t] && (n[t] = n[t].replace(/(\w*)(view|bar|strip|over)$/, "$1-$2"));
        return n.join(" ").replace(/(\S+)/g, "kendo-mobile-$1,").slice(0, -1);
      },
      triggeredByInput: function(e) {
        return /^(label|input|textarea|select)$/i.test(e.target.tagName);
      },
      onWidgetRegistered: function(e) {
        for (var t = 0,
            n = ye.widgets.length; n > t; t++)
          e(ye.widgets[t]);
        ye._widgetRegisteredCallbacks.push(e);
      },
      logToConsole: function(e, r) {
        var o = t.console;
        !ye.suppressLog && n !== o && o.log && o[r || "log"](e);
      }
    }), X = P.extend({
      init: function(e, t) {
        var n,
            r = this;
        r.element = ye.jQuery(e).handler(r), r.angular("init", t), P.fn.init.call(r), n = t ? t.dataSource : null, n && (t = ve({}, t, {dataSource: {}})), t = r.options = ve(!0, {}, r.options, t), n && (t.dataSource = n), r.element.attr(ye.attr("role")) || r.element.attr(ye.attr("role"), (t.name || "").toLowerCase()), r.element.data("kendo" + t.prefix + t.name, r), r.bind(r.events, t);
      },
      events: [],
      options: {prefix: ""},
      _hasBindingTarget: function() {
        return !!this.element[0].kendoBindingTarget;
      },
      _tabindex: function(e) {
        e = e || this.wrapper;
        var t = this.element,
            n = "tabindex",
            r = e.attr(n) || t.attr(n);
        t.removeAttr(n), e.attr(n, isNaN(r) ? 0 : r);
      },
      setOptions: function(t) {
        this._setEvents(t), e.extend(this.options, t);
      },
      _setEvents: function(e) {
        for (var t,
            n = this,
            r = 0,
            o = n.events.length; o > r; r++)
          t = n.events[r], n.options[t] && e[t] && n.unbind(t, n.options[t]);
        n.bind(n.events, e);
      },
      resize: function(e) {
        var t = this.getSize(),
            n = this._size;
        (e || (t.width > 0 || t.height > 0) && (!n || t.width !== n.width || t.height !== n.height)) && (this._size = t, this._resize(t, e), this.trigger("resize", t));
      },
      getSize: function() {
        return ye.dimensions(this.element);
      },
      size: function(e) {
        return e ? (this.setSize(e), n) : this.getSize();
      },
      setSize: e.noop,
      _resize: e.noop,
      destroy: function() {
        var e = this;
        e.element.removeData("kendo" + e.options.prefix + e.options.name), e.element.removeData("handler"), e.unbind();
      },
      _destroy: function() {
        this.destroy();
      },
      angular: function() {},
      _muteAngularRebind: function(e) {
        this._muteRebind = !0, e.call(this), this._muteRebind = !1;
      }
    }), ee = X.extend({
      dataItems: function() {
        return this.dataSource.flatView();
      },
      _angularItems: function(t) {
        var n = this;
        n.angular(t, function() {
          return {
            elements: n.items(),
            data: e.map(n.dataItems(), function(e) {
              return {dataItem: e};
            })
          };
        });
      }
    }), ye.dimensions = function(e, t) {
      var n = e[0];
      return t && e.css(t), {
        width: n.offsetWidth,
        height: n.offsetHeight
      };
    }, ye.notify = Se, te = /template$/i, ne = /^\s*(?:\{(?:.|\r\n|\n)*\}|\[(?:.|\r\n|\n)*\])\s*$/, re = /^\{(\d+)(:[^\}]+)?\}|^\[[A-Za-z_]*\]$/, oe = /([A-Z])/g, ye.initWidget = function(r, o, i) {
      var a,
          s,
          u,
          l,
          c,
          d,
          f,
          m,
          p,
          h,
          g,
          y,
          v;
      if (i ? i.roles && (i = i.roles) : i = ye.ui.roles, r = r.nodeType ? r : r[0], d = r.getAttribute("data-" + ye.ns + "role")) {
        p = -1 === d.indexOf("."), u = p ? i[d] : ye.getter(d)(t), g = e(r).data(), y = u ? "kendo" + u.fn.options.prefix + u.fn.options.name : "", h = p ? RegExp("^kendo.*" + d + "$", "i") : RegExp("^" + y + "$", "i");
        for (v in g)
          if (v.match(h)) {
            if (v !== y)
              return g[v];
            a = g[v];
          }
        if (u) {
          for (m = x(r, "dataSource"), o = e.extend({}, k(r, u.fn.options), o), m && (o.dataSource = typeof m === He ? ye.getter(m)(t) : m), l = 0, c = u.fn.events.length; c > l; l++)
            s = u.fn.events[l], f = x(r, s), f !== n && (o[s] = ye.getter(f)(t));
          return a ? e.isEmptyObject(o) || a.setOptions(o) : a = new u(r, o), a;
        }
      }
    }, ye.rolesFromNamespaces = function(e) {
      var t,
          n,
          r = [];
      for (e[0] || (e = [ye.ui, ye.dataviz.ui]), t = 0, n = e.length; n > t; t++)
        r[t] = e[t].roles;
      return ve.apply(null, [{}].concat(r.reverse()));
    }, ye.init = function(t) {
      var n = ye.rolesFromNamespaces(Ie.call(arguments, 1));
      e(t).find("[data-" + ye.ns + "role]").addBack().each(function() {
        ye.initWidget(this, {}, n);
      });
    }, ye.destroy = function(t) {
      e(t).find("[data-" + ye.ns + "role]").addBack().each(function() {
        var t,
            n = e(this).data();
        for (t in n)
          0 === t.indexOf("kendo") && typeof n[t].destroy === Ee && n[t].destroy();
      });
    }, ye.resize = function(t, n) {
      var r,
          o = e(t).find("[data-" + ye.ns + "role]").addBack().filter(z);
      o.length && (r = e.makeArray(o), r.sort(O), e.each(r, function() {
        var t = ye.widgetInstance(e(this));
        t && t.resize(n);
      }));
    }, ye.parseOptions = k, ve(ye.ui, {
      Widget: X,
      DataBoundWidget: ee,
      roles: {},
      progress: function(t, n) {
        var r,
            o,
            i,
            a,
            s = t.find(".k-loading-mask"),
            u = ye.support,
            l = u.browser;
        n ? s.length || (r = u.isRtl(t), o = r ? "right" : "left", a = t.scrollLeft(), i = l.webkit && r ? t[0].scrollWidth - t.width() - 2 * a : 0, s = e("<div class='k-loading-mask'><span class='k-loading-text'>" + ye.ui.progress.messages.loading + "</span><div class='k-loading-image'/><div class='k-loading-color'/></div>").width("100%").height("100%").css("top", t.scrollTop()).css(o, Math.abs(a) + i).prependTo(t)) : s && s.remove();
      },
      plugin: function(t, r, o) {
        var i,
            a,
            s,
            u,
            l = t.fn.options.name;
        for (r = r || ye.ui, o = o || "", r[l] = t, r.roles[l.toLowerCase()] = t, i = "getKendo" + o + l, l = "kendo" + o + l, a = {
          name: l,
          widget: t,
          prefix: o || ""
        }, ye.widgets.push(a), s = 0, u = ye._widgetRegisteredCallbacks.length; u > s; s++)
          ye._widgetRegisteredCallbacks[s](a);
        e.fn[l] = function(r) {
          var o,
              i = this;
          return typeof r === He ? (o = Ie.call(arguments, 1), this.each(function() {
            var t,
                a,
                s = e.data(this, l);
            if (!s)
              throw Error(ye.format("Cannot call method '{0}' of {1} before it is initialized", r, l));
            if (t = s[r], typeof t !== Ee)
              throw Error(ye.format("Cannot find method '{0}' of {1}", r, l));
            return a = t.apply(s, o), a !== n ? (i = a, !1) : n;
          })) : this.each(function() {
            return new t(this, r);
          }), i;
        }, e.fn[l].widget = t, e.fn[i] = function() {
          return this.data(l);
        };
      }
    }), ye.ui.progress.messages = {loading: "Loading..."}, ie = {
      bind: function() {
        return this;
      },
      nullObject: !0,
      options: {}
    }, ae = X.extend({
      init: function(e, t) {
        X.fn.init.call(this, e, t), this.element.autoApplyNS(), this.wrapper = this.element, this.element.addClass("km-widget");
      },
      destroy: function() {
        X.fn.destroy.call(this), this.element.kendoDestroy();
      },
      options: {prefix: "Mobile"},
      events: [],
      view: function() {
        var e = this.element.closest(ye.roleSelector("view splitview modalview drawer"));
        return ye.widgetInstance(e, ye.mobile.ui) || ie;
      },
      viewHasNativeScrolling: function() {
        var e = this.view();
        return e && e.options.useNativeScrolling;
      },
      container: function() {
        var e = this.element.closest(ye.roleSelector("view layout modalview drawer splitview"));
        return ye.widgetInstance(e.eq(0), ye.mobile.ui) || ie;
      }
    }), ve(ye.mobile, {
      init: function(e) {
        ye.init(e, ye.mobile.ui, ye.ui, ye.dataviz.ui);
      },
      appLevelNativeScrolling: function() {
        return ye.mobile.application && ye.mobile.application.options && ye.mobile.application.options.useNativeScrolling;
      },
      roles: {},
      ui: {
        Widget: ae,
        DataBoundWidget: ee.extend(ae.prototype),
        roles: {},
        plugin: function(e) {
          ye.ui.plugin(e, ye.mobile.ui, "Mobile");
        }
      }
    }), u(ye.dataviz, {
      init: function(e) {
        ye.init(e, ye.dataviz.ui);
      },
      ui: {
        roles: {},
        themes: {},
        views: [],
        plugin: function(e) {
          ye.ui.plugin(e, ye.dataviz.ui);
        }
      },
      roles: {}
    }), ye.touchScroller = function(t, n) {
      return n || (n = {}), n.useNative = !0, e(t).map(function(t, r) {
        return r = e(r), ke.kineticScrollNeeded && ye.mobile.ui.Scroller && !r.data("kendoMobileScroller") ? (r.kendoMobileScroller(n), r.data("kendoMobileScroller")) : !1;
      })[0];
    }, ye.preventDefault = function(e) {
      e.preventDefault();
    }, ye.widgetInstance = function(e, n) {
      var r,
          o,
          i,
          a,
          s = e.data(ye.ns + "role"),
          u = [];
      if (s) {
        if ("content" === s && (s = "scroller"), n)
          if (n[0])
            for (r = 0, o = n.length; o > r; r++)
              u.push(n[r].roles[s]);
          else
            u.push(n.roles[s]);
        else
          u = [ye.ui.roles[s], ye.dataviz.ui.roles[s], ye.mobile.ui.roles[s]];
        for (s.indexOf(".") >= 0 && (u = [ye.getter(s)(t)]), r = 0, o = u.length; o > r; r++)
          if (i = u[r], i && (a = e.data("kendo" + i.fn.options.prefix + i.fn.options.name)))
            return a;
      }
    }, ye.onResize = function(n) {
      var r = n;
      return ke.mobileOS.android && (r = function() {
        setTimeout(n, 600);
      }), e(t).on(ke.resize, r), r;
    }, ye.unbindResize = function(n) {
      e(t).off(ke.resize, n);
    }, ye.attrValue = function(e, t) {
      return e.data(ye.ns + t);
    }, ye.days = {
      Sunday: 0,
      Monday: 1,
      Tuesday: 2,
      Wednesday: 3,
      Thursday: 4,
      Friday: 5,
      Saturday: 6
    }, e.extend(e.expr[":"], {kendoFocusable: function(t) {
        var n = e.attr(t, "tabindex");
        return D(t, !isNaN(n) && n > -1);
      }}), se = ["mousedown", "mousemove", "mouseenter", "mouseleave", "mouseover", "mouseout", "mouseup", "click"], ue = "label, input, [data-rel=external]", le = {
      setupMouseMute: function() {
        var t,
            n = 0,
            r = se.length,
            o = document.documentElement;
        if (!le.mouseTrap && ke.eventCapture)
          for (le.mouseTrap = !0, le.bustClick = !1, le.captureMouse = !1, t = function(t) {
            le.captureMouse && ("click" === t.type ? le.bustClick && !e(t.target).is(ue) && (t.preventDefault(), t.stopPropagation()) : t.stopPropagation());
          }; r > n; n++)
            o.addEventListener(se[n], t, !0);
      },
      muteMouse: function(e) {
        le.captureMouse = !0, e.data.bustClick && (le.bustClick = !0), clearTimeout(le.mouseTrapTimeoutID);
      },
      unMuteMouse: function() {
        clearTimeout(le.mouseTrapTimeoutID), le.mouseTrapTimeoutID = setTimeout(function() {
          le.captureMouse = !1, le.bustClick = !1;
        }, 400);
      }
    }, ce = {
      down: "touchstart mousedown",
      move: "mousemove touchmove",
      up: "mouseup touchend touchcancel",
      cancel: "mouseleave touchcancel"
    }, ke.touch && (ke.mobileOS.ios || ke.mobileOS.android) ? ce = {
      down: "touchstart",
      move: "touchmove",
      up: "touchend touchcancel",
      cancel: "touchcancel"
    } : ke.pointers ? ce = {
      down: "pointerdown",
      move: "pointermove",
      up: "pointerup",
      cancel: "pointercancel pointerleave"
    } : ke.msPointers && (ce = {
      down: "MSPointerDown",
      move: "MSPointerMove",
      up: "MSPointerUp",
      cancel: "MSPointerCancel MSPointerLeave"
    }), !ke.msPointers || "onmspointerenter" in t || e.each({
      MSPointerEnter: "MSPointerOver",
      MSPointerLeave: "MSPointerOut"
    }, function(t, n) {
      e.event.special[t] = {
        delegateType: n,
        bindType: n,
        handle: function(t) {
          var r,
              o = this,
              i = t.relatedTarget,
              a = t.handleObj;
          return (!i || i !== o && !e.contains(o, i)) && (t.type = a.origType, r = a.handler.apply(this, arguments), t.type = n), r;
        }
      };
    }), de = function(e) {
      return ce[e] || e;
    }, fe = /([^ ]+)/g, ye.applyEventMap = function(e, t) {
      return e = e.replace(fe, de), t && (e = e.replace(fe, "$1." + t)), e;
    }, me = e.fn.on, ve(!0, E, e), E.fn = E.prototype = new e, E.fn.constructor = E, E.fn.init = function(t, n) {
      return n && n instanceof e && !(n instanceof E) && (n = E(n)), e.fn.init.call(this, t, n, pe);
    }, E.fn.init.prototype = E.fn, pe = E(document), ve(E.fn, {
      handler: function(e) {
        return this.data("handler", e), this;
      },
      autoApplyNS: function(e) {
        return this.data("kendoNS", e || ye.guid()), this;
      },
      on: function() {
        var e,
            t,
            n,
            r,
            o,
            i,
            a = this,
            s = a.data("kendoNS");
        return 1 === arguments.length ? me.call(a, arguments[0]) : (e = a, t = Ie.call(arguments), typeof t[t.length - 1] === Fe && t.pop(), n = t[t.length - 1], r = ye.applyEventMap(t[0], s), ke.mouseAndTouchPresent && r.search(/mouse|click/) > -1 && this[0] !== document.documentElement && (le.setupMouseMute(), o = 2 === t.length ? null : t[1], i = r.indexOf("click") > -1 && r.indexOf("touchend") > -1, me.call(this, {
          touchstart: le.muteMouse,
          touchend: le.unMuteMouse
        }, o, {bustClick: i})), typeof n === He && (e = a.data("handler"), n = e[n], t[t.length - 1] = function(t) {
          n.call(e, t);
        }), t[0] = r, me.apply(a, t), a);
      },
      kendoDestroy: function(e) {
        return e = e || this.data("kendoNS"), e && this.off("." + e), this;
      }
    }), ye.jQuery = E, ye.eventMap = ce, ye.timezone = function() {
      function e(e, t) {
        var n,
            r,
            o,
            i = t[3],
            a = t[4],
            s = t[5],
            u = t[8];
        return u || (t[8] = u = {}), u[e] ? u[e] : (isNaN(a) ? 0 === a.indexOf("last") ? (n = new Date(Date.UTC(e, c[i] + 1, 1, s[0] - 24, s[1], s[2], 0)), r = d[a.substr(4, 3)], o = n.getUTCDay(), n.setUTCDate(n.getUTCDate() + r - o - (r > o ? 7 : 0))) : a.indexOf(">=") >= 0 && (n = new Date(Date.UTC(e, c[i], a.substr(5), s[0], s[1], s[2], 0)), r = d[a.substr(0, 3)], o = n.getUTCDay(), n.setUTCDate(n.getUTCDate() + r - o + (o > r ? 7 : 0))) : n = new Date(Date.UTC(e, c[i], a, s[0], s[1], s[2], 0)), u[e] = n);
      }
      function t(t, n, r) {
        var o,
            i,
            a,
            s;
        return (n = n[r]) ? (a = new Date(t).getUTCFullYear(), n = jQuery.grep(n, function(e) {
          var t = e[0],
              n = e[1];
          return a >= t && (n >= a || t == a && "only" == n || "max" == n);
        }), n.push(t), n.sort(function(t, n) {
          return "number" != typeof t && (t = +e(a, t)), "number" != typeof n && (n = +e(a, n)), t - n;
        }), s = n[jQuery.inArray(t, n) - 1] || n[n.length - 1], isNaN(s) ? s : null) : (o = r.split(":"), i = 0, o.length > 1 && (i = 60 * o[0] + +o[1]), [-1e6, "max", "-", "Jan", 1, [0, 0, 0], i, "-"]);
      }
      function n(e, t, n) {
        var r,
            o,
            i,
            a = t[n];
        if ("string" == typeof a && (a = t[a]), !a)
          throw Error('Timezone "' + n + '" is either incorrect, or kendo.timezones.min.js is not included.');
        for (r = a.length - 1; r >= 0 && (o = a[r][3], !(o && e > o)); r--)
          ;
        if (i = a[r + 1], !i)
          throw Error('Timezone "' + n + '" not found on ' + e + ".");
        return i;
      }
      function r(e, r, o, i) {
        typeof e != Ae && (e = Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
        var a = n(e, r, i);
        return {
          zone: a,
          rule: t(e, o, a[1])
        };
      }
      function o(e, t) {
        var n,
            o,
            i;
        return "Etc/UTC" == t || "Etc/GMT" == t ? 0 : (n = r(e, this.zones, this.rules, t), o = n.zone, i = n.rule, ye.parseFloat(i ? o[0] - i[6] : o[0]));
      }
      function i(e, t) {
        var n = r(e, this.zones, this.rules, t),
            o = n.zone,
            i = n.rule,
            a = o[2];
        return a.indexOf("/") >= 0 ? a.split("/")[i && +i[6] ? 1 : 0] : a.indexOf("%s") >= 0 ? a.replace("%s", i && "-" != i[7] ? i[7] : "") : a;
      }
      function a(e, t, n) {
        var r,
            o;
        return typeof t == He && (t = this.offset(e, t)), typeof n == He && (n = this.offset(e, n)), r = e.getTimezoneOffset(), e = new Date(e.getTime() + 6e4 * (t - n)), o = e.getTimezoneOffset(), new Date(e.getTime() + 6e4 * (o - r));
      }
      function s(e, t) {
        return this.convert(e, e.getTimezoneOffset(), t);
      }
      function u(e, t) {
        return this.convert(e, t, e.getTimezoneOffset());
      }
      function l(e) {
        return this.apply(new Date(e), "Etc/UTC");
      }
      var c = {
        Jan: 0,
        Feb: 1,
        Mar: 2,
        Apr: 3,
        May: 4,
        Jun: 5,
        Jul: 6,
        Aug: 7,
        Sep: 8,
        Oct: 9,
        Nov: 10,
        Dec: 11
      },
          d = {
            Sun: 0,
            Mon: 1,
            Tue: 2,
            Wed: 3,
            Thu: 4,
            Fri: 5,
            Sat: 6
          };
      return {
        zones: {},
        rules: {},
        offset: o,
        convert: a,
        apply: s,
        remove: u,
        abbr: i,
        toLocalDate: l
      };
    }(), ye.date = function() {
      function e(e, t) {
        return 0 === t && 23 === e.getHours() ? (e.setHours(e.getHours() + 2), !0) : !1;
      }
      function t(t, n, r) {
        var o = t.getHours();
        r = r || 1, n = (n - t.getDay() + 7 * r) % 7, t.setDate(t.getDate() + n), e(t, o);
      }
      function n(e, n, r) {
        return e = new Date(e), t(e, n, r), e;
      }
      function r(e) {
        return new Date(e.getFullYear(), e.getMonth(), 1);
      }
      function o(e) {
        var t = new Date(e.getFullYear(), e.getMonth() + 1, 0),
            n = r(e),
            o = Math.abs(t.getTimezoneOffset() - n.getTimezoneOffset());
        return o && t.setHours(n.getHours() + o / 60), t;
      }
      function i(t) {
        return t = new Date(t.getFullYear(), t.getMonth(), t.getDate(), 0, 0, 0), e(t, 0), t;
      }
      function a(e) {
        return Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds());
      }
      function s(e) {
        return e.getTime() - i(e);
      }
      function u(e, t, n) {
        var r,
            o = s(t),
            i = s(n);
        return e && o != i ? (t >= n && (n += y), r = s(e), o > r && (r += y), o > i && (i += y), r >= o && i >= r) : !0;
      }
      function l(e, t, n) {
        var r,
            o = t.getTime(),
            i = n.getTime();
        return o >= i && (i += y), r = e.getTime(), r >= o && i >= r;
      }
      function c(t, n) {
        var r = t.getHours();
        return t = new Date(t), d(t, n * y), e(t, r), t;
      }
      function d(e, t, n) {
        var r,
            o = e.getTimezoneOffset();
        e.setTime(e.getTime() + t), n || (r = e.getTimezoneOffset() - o, e.setTime(e.getTime() + r * g));
      }
      function f(t, n) {
        return t = new Date(ye.date.getDate(t).getTime() + ye.date.getMilliseconds(n)), e(t, n.getHours()), t;
      }
      function m() {
        return i(new Date);
      }
      function p(e) {
        return i(e).getTime() == m().getTime();
      }
      function h(e) {
        var t = new Date(1980, 1, 1, 0, 0, 0);
        return e && t.setHours(e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()), t;
      }
      var g = 6e4,
          y = 864e5;
      return {
        adjustDST: e,
        dayOfWeek: n,
        setDayOfWeek: t,
        getDate: i,
        isInDateRange: l,
        isInTimeRange: u,
        isToday: p,
        nextDay: function(e) {
          return c(e, 1);
        },
        previousDay: function(e) {
          return c(e, -1);
        },
        toUtcTime: a,
        MS_PER_DAY: y,
        MS_PER_HOUR: 60 * g,
        MS_PER_MINUTE: g,
        setTime: d,
        setHours: f,
        addDays: c,
        today: m,
        toInvariantTime: h,
        firstDayOfMonth: r,
        lastDayOfMonth: o,
        getMilliseconds: s
      };
    }(), ye.stripWhitespace = function(e) {
      var t,
          n,
          r;
      if (document.createNodeIterator)
        for (t = document.createNodeIterator(e, NodeFilter.SHOW_TEXT, function(t) {
          return t.parentNode == e ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
        }, !1); t.nextNode(); )
          t.referenceNode && !t.referenceNode.textContent.trim() && t.referenceNode.parentNode.removeChild(t.referenceNode);
      else
        for (n = 0; e.childNodes.length > n; n++)
          r = e.childNodes[n], 3 != r.nodeType || /\S/.test(r.nodeValue) || (e.removeChild(r), n--), 1 == r.nodeType && ye.stripWhitespace(r);
    }, he = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || t.msRequestAnimationFrame || function(e) {
      setTimeout(e, 1e3 / 60);
    }, ye.animationFrame = function(e) {
      he.call(t, e);
    }, ge = [], ye.queueAnimation = function(e) {
      ge[ge.length] = e, 1 === ge.length && ye.runNextAnimation();
    }, ye.runNextAnimation = function() {
      ye.animationFrame(function() {
        ge[0] && (ge.shift()(), ge[0] && ye.runNextAnimation());
      });
    }, ye.parseQueryStringParams = function(e) {
      for (var t = e.split("?")[1] || "",
          n = {},
          r = t.split(/&|=/),
          o = r.length,
          i = 0; o > i; i += 2)
        "" !== r[i] && (n[decodeURIComponent(r[i])] = decodeURIComponent(r[i + 1]));
      return n;
    }, ye.elementUnderCursor = function(e) {
      return n !== e.x.client ? document.elementFromPoint(e.x.client, e.y.client) : n;
    }, ye.wheelDeltaY = function(e) {
      var t,
          r = e.originalEvent,
          o = r.wheelDeltaY;
      return r.wheelDelta ? (o === n || o) && (t = r.wheelDelta) : r.detail && r.axis === r.VERTICAL_AXIS && (t = 10 * -r.detail), t;
    }, ye.throttle = function(e, t) {
      var r,
          o,
          i = 0;
      return !t || 0 >= t ? e : (o = function() {
        function o() {
          e.apply(a, u), i = +new Date;
        }
        var a = this,
            s = +new Date - i,
            u = arguments;
        return i ? (r && clearTimeout(r), s > t ? o() : r = setTimeout(o, t - s), n) : o();
      }, o.cancel = function() {
        clearTimeout(r);
      }, o);
    }, ye.caret = function(t, r, o) {
      var i,
          a,
          s,
          u,
          l = r !== n;
      if (o === n && (o = r), t[0] && (t = t[0]), !l || !t.disabled) {
        try {
          t.selectionStart !== n ? l ? (t.focus(), t.setSelectionRange(r, o)) : r = [t.selectionStart, t.selectionEnd] : document.selection && (e(t).is(":visible") && t.focus(), i = t.createTextRange(), l ? (i.collapse(!0), i.moveStart("character", r), i.moveEnd("character", o - r), i.select()) : (a = i.duplicate(), i.moveToBookmark(document.selection.createRange().getBookmark()), a.setEndPoint("EndToStart", i), s = a.text.length, u = s + i.text.length, r = [s, u]));
        } catch (c) {
          r = [];
        }
        return r;
      }
    }, ye.compileMobileDirective = function(e, n) {
      var r = t.angular;
      return e.attr("data-" + ye.ns + "role", e[0].tagName.toLowerCase().replace("kendo-mobile-", "").replace("-", "")), r.element(e).injector().invoke(["$compile", function(t) {
        t(e)(n), /^\$(digest|apply)$/.test(n.$$phase) || n.$digest();
      }]), ye.widgetInstance(e, ye.mobile.ui);
    }, ye.antiForgeryTokens = function() {
      var t = {},
          r = e("meta[name=csrf-token],meta[name=_csrf]").attr("content"),
          o = e("meta[name=csrf-param],meta[name=_csrf_header]").attr("content");
      return e("input[name^='__RequestVerificationToken']").each(function() {
        t[this.name] = this.value;
      }), o !== n && r !== n && (t[o] = r), t;
    }, ye.cycleForm = function(e) {
      function t(e) {
        var t = ye.widgetInstance(e);
        t && t.focus ? t.focus() : e.focus();
      }
      var n = e.find("input, .k-widget").first(),
          r = e.find("button, .k-button").last();
      r.on("keydown", function(e) {
        e.keyCode != ye.keys.TAB || e.shiftKey || (e.preventDefault(), t(n));
      }), n.on("keydown", function(e) {
        e.keyCode == ye.keys.TAB && e.shiftKey && (e.preventDefault(), t(r));
      });
    }, function() {
      function n(t, n, r, o) {
        var i,
            a,
            s = e("<form>").attr({
              action: r,
              method: "POST",
              target: o
            }),
            u = ye.antiForgeryTokens();
        u.fileName = n, i = t.split(";base64,"), u.contentType = i[0].replace("data:", ""), u.base64 = i[1];
        for (a in u)
          u.hasOwnProperty(a) && e("<input>").attr({
            value: u[a],
            name: a,
            type: "hidden"
          }).appendTo(s);
        s.appendTo("body").submit().remove();
      }
      function r(e, t) {
        var n,
            r,
            o,
            i,
            a,
            s = e;
        if ("string" == typeof e) {
          for (n = e.split(";base64,"), r = n[0], o = atob(n[1]), i = new Uint8Array(o.length), a = 0; o.length > a; a++)
            i[a] = o.charCodeAt(a);
          s = new Blob([i.buffer], {type: r});
        }
        navigator.msSaveBlob(s, t);
      }
      function o(e, n) {
        t.Blob && e instanceof Blob && (e = URL.createObjectURL(e)), i.download = n, i.href = e;
        var r = document.createEvent("MouseEvents");
        r.initMouseEvent("click", !0, !1, t, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), i.dispatchEvent(r), setTimeout(function() {
          URL.revokeObjectURL(e);
        });
      }
      var i = document.createElement("a"),
          a = "download" in i && !ye.support.browser.edge;
      ye.saveAs = function(e) {
        var t = n;
        e.forceProxy || (a ? t = o : navigator.msSaveBlob && (t = r)), t(e.dataURI, e.fileName, e.proxyURL, e.proxyTarget);
      };
    }(), ye.proxyModelSetters = function(e) {
      var t = {};
      return Object.keys(e || {}).forEach(function(n) {
        Object.defineProperty(t, n, {
          get: function() {
            return e[n];
          },
          set: function(t) {
            e[n] = t, e.dirty = !0;
          }
        });
      }), t;
    };
  }(jQuery, window), window.kendo;
}, "function" == typeof define && define.amd ? define : function(e, t, n) {
  (n || t)();
});

})();
(function() {
var define = $__System.amdDefine;
!function(e, define) {
  define("10", ["3"], e) && define("kendo.popup.min", ["10"], function(m) {
    return m;
  });
}(function() {
  return function(e, t) {
    function o(t, o) {
      return t === o || e.contains(t, o);
    }
    var i = window.kendo,
        n = i.ui,
        s = n.Widget,
        r = i.support,
        a = i.getOffset,
        l = "open",
        p = "close",
        d = "deactivate",
        c = "activate",
        f = "center",
        u = "left",
        h = "right",
        g = "top",
        m = "bottom",
        w = "absolute",
        v = "hidden",
        _ = "body",
        k = "location",
        y = "position",
        z = "visible",
        b = "effects",
        x = "k-state-active",
        C = "k-state-border",
        T = /k-state-border-(\w+)/,
        P = ".k-picker-wrap, .k-dropdown-wrap, .k-link",
        E = "down",
        S = e(document.documentElement),
        H = e(window),
        W = "scroll",
        O = r.transitions.css,
        R = O + "transform",
        I = e.extend,
        A = ".kendoPopup",
        D = ["font-size", "font-family", "font-stretch", "font-style", "font-weight", "line-height"],
        L = s.extend({
          init: function(t, o) {
            var n,
                a = this;
            o = o || {}, o.isRtl && (o.origin = o.origin || m + " " + h, o.position = o.position || g + " " + h), s.fn.init.call(a, t, o), t = a.element, o = a.options, a.collisions = o.collision ? o.collision.split(" ") : [], a.downEvent = i.applyEventMap(E, i.guid()), 1 === a.collisions.length && a.collisions.push(a.collisions[0]), n = e(a.options.anchor).closest(".k-popup,.k-group").filter(":not([class^=km-])"), o.appendTo = e(e(o.appendTo)[0] || n[0] || _), a.element.hide().addClass("k-popup k-group k-reset").toggleClass("k-rtl", !!o.isRtl).css({position: w}).appendTo(o.appendTo).on("mouseenter" + A, function() {
              a._hovered = !0;
            }).on("mouseleave" + A, function() {
              a._hovered = !1;
            }), a.wrapper = e(), o.animation === !1 && (o.animation = {
              open: {effects: {}},
              close: {
                hide: !0,
                effects: {}
              }
            }), I(o.animation.open, {complete: function() {
                a.wrapper.css({overflow: z}), a._activated = !0, a._trigger(c);
              }}), I(o.animation.close, {complete: function() {
                a._animationClose();
              }}), a._mousedownProxy = function(e) {
              a._mousedown(e);
            }, a._resizeProxy = r.mobileOS.android ? function(e) {
              setTimeout(function() {
                a._resize(e);
              }, 600);
            } : function(e) {
              a._resize(e);
            }, o.toggleTarget && e(o.toggleTarget).on(o.toggleEvent + A, e.proxy(a.toggle, a));
          },
          events: [l, c, p, d],
          options: {
            name: "Popup",
            toggleEvent: "click",
            origin: m + " " + u,
            position: g + " " + u,
            anchor: _,
            appendTo: null,
            collision: "flip fit",
            viewport: window,
            copyAnchorStyles: !0,
            autosize: !1,
            modal: !1,
            adjustSize: {
              width: 0,
              height: 0
            },
            animation: {
              open: {
                effects: "slideIn:down",
                transition: !0,
                duration: 200
              },
              close: {
                duration: 100,
                hide: !0
              }
            }
          },
          _animationClose: function() {
            var e = this,
                t = e.wrapper.data(k);
            e.wrapper.hide(), t && e.wrapper.css(t), e.options.anchor != _ && e._hideDirClass(), e._closing = !1, e._trigger(d);
          },
          destroy: function() {
            var t,
                o = this,
                n = o.options,
                r = o.element.off(A);
            s.fn.destroy.call(o), n.toggleTarget && e(n.toggleTarget).off(A), n.modal || (S.unbind(o.downEvent, o._mousedownProxy), o._toggleResize(!1)), i.destroy(o.element.children()), r.removeData(), n.appendTo[0] === document.body && (t = r.parent(".k-animation-container"), t[0] ? t.remove() : r.remove());
          },
          open: function(t, o) {
            var n,
                s,
                a = this,
                p = {
                  isFixed: !isNaN(parseInt(o, 10)),
                  x: t,
                  y: o
                },
                d = a.element,
                c = a.options,
                f = e(c.anchor),
                u = d[0] && d.hasClass("km-widget");
            if (!a.visible()) {
              if (c.copyAnchorStyles && (u && "font-size" == D[0] && D.shift(), d.css(i.getComputedStyles(f[0], D))), d.data("animating") || a._trigger(l))
                return;
              a._activated = !1, c.modal || (S.unbind(a.downEvent, a._mousedownProxy).bind(a.downEvent, a._mousedownProxy), a._toggleResize(!1), a._toggleResize(!0)), a.wrapper = s = i.wrap(d, c.autosize).css({
                overflow: v,
                display: "block",
                position: w
              }), r.mobileOS.android && s.css(R, "translatez(0)"), s.css(y), e(c.appendTo)[0] == document.body && s.css(g, "-10000px"), a.flipped = a._position(p), n = a._openAnimation(), c.anchor != _ && a._showDirClass(n), d.data(b, n.effects).kendoStop(!0).kendoAnimate(n);
            }
          },
          _openAnimation: function() {
            var e = I(!0, {}, this.options.animation.open);
            return e.effects = i.parseEffects(e.effects, this.flipped), e;
          },
          _hideDirClass: function() {
            var t = e(this.options.anchor),
                o = ((t.attr("class") || "").match(T) || ["", "down"])[1],
                n = C + "-" + o;
            t.removeClass(n).children(P).removeClass(x).removeClass(n), this.element.removeClass(C + "-" + i.directions[o].reverse);
          },
          _showDirClass: function(t) {
            var o = t.effects.slideIn ? t.effects.slideIn.direction : "down",
                n = C + "-" + o;
            e(this.options.anchor).addClass(n).children(P).addClass(x).addClass(n), this.element.addClass(C + "-" + i.directions[o].reverse);
          },
          position: function() {
            this.visible() && (this.flipped = this._position());
          },
          toggle: function() {
            var e = this;
            e[e.visible() ? p : l]();
          },
          visible: function() {
            return this.element.is(":" + z);
          },
          close: function(o) {
            var n,
                s,
                r,
                a,
                l = this,
                d = l.options;
            if (l.visible()) {
              if (n = l.wrapper[0] ? l.wrapper : i.wrap(l.element).hide(), l._toggleResize(!1), l._closing || l._trigger(p))
                return l._toggleResize(!0), t;
              l.element.find(".k-popup").each(function() {
                var t = e(this),
                    i = t.data("kendoPopup");
                i && i.close(o);
              }), S.unbind(l.downEvent, l._mousedownProxy), o ? s = {
                hide: !0,
                effects: {}
              } : (s = I(!0, {}, d.animation.close), r = l.element.data(b), a = s.effects, !a && !i.size(a) && r && i.size(r) && (s.effects = r, s.reverse = !0), l._closing = !0), l.element.kendoStop(!0), n.css({overflow: v}), l.element.kendoAnimate(s);
            }
          },
          _trigger: function(e) {
            return this.trigger(e, {type: e});
          },
          _resize: function(e) {
            var t = this;
            -1 !== r.resize.indexOf(e.type) ? (clearTimeout(t._resizeTimeout), t._resizeTimeout = setTimeout(function() {
              t._position(), t._resizeTimeout = null;
            }, 50)) : (!t._hovered || t._activated && t.element.hasClass("k-list-container")) && t.close();
          },
          _toggleResize: function(e) {
            var t = e ? "on" : "off",
                o = r.resize;
            r.mobileOS.ios || r.mobileOS.android || (o += " " + W), this._scrollableParents()[t](W, this._resizeProxy), H[t](o, this._resizeProxy);
          },
          _mousedown: function(t) {
            var n = this,
                s = n.element[0],
                r = n.options,
                a = e(r.anchor)[0],
                l = r.toggleTarget,
                p = i.eventTarget(t),
                d = e(p).closest(".k-popup"),
                c = d.parent().parent(".km-shim").length;
            d = d[0], (c || !d || d === n.element[0]) && "popover" !== e(t.target).closest("a").data("rel") && (o(s, p) || o(a, p) || l && o(e(l)[0], p) || n.close());
          },
          _fit: function(e, t, o) {
            var i = 0;
            return e + t > o && (i = o - (e + t)), 0 > e && (i = -e), i;
          },
          _flip: function(e, t, o, i, n, s, r) {
            var a = 0;
            return r = r || t, s !== n && s !== f && n !== f && (e + r > i && (a += -(o + t)), 0 > e + a && (a += o + t)), a;
          },
          _scrollableParents: function() {
            return e(this.options.anchor).parentsUntil("body").filter(function(e, t) {
              return i.isScrollable(t);
            });
          },
          _position: function(t) {
            var o,
                n,
                s,
                l,
                p,
                d,
                c,
                f,
                u,
                h,
                g,
                m,
                v,
                _ = this,
                z = _.element,
                b = _.wrapper,
                x = _.options,
                C = e(x.viewport),
                T = C.offset(),
                P = e(x.anchor),
                E = x.origin.toLowerCase().split(" "),
                S = x.position.toLowerCase().split(" "),
                H = _.collisions,
                W = r.zoomLevel(),
                O = 10002,
                R = !!(C[0] == window && window.innerWidth && 1.02 >= W),
                A = 0,
                D = document.documentElement,
                L = R ? window.innerWidth : C.width(),
                j = R ? window.innerHeight : C.height();
            if (R && D.scrollHeight - D.clientHeight > 0 && (L -= i.support.scrollbar()), o = P.parents().filter(b.siblings()), o[0])
              if (s = Math.max(+o.css("zIndex"), 0))
                O = s + 10;
              else
                for (n = P.parentsUntil(o), l = n.length; l > A; A++)
                  s = +e(n[A]).css("zIndex"), s && s > O && (O = s + 10);
            return b.css("zIndex", O), b.css(t && t.isFixed ? {
              left: t.x,
              top: t.y
            } : _._align(E, S)), p = a(b, y, P[0] === b.offsetParent()[0]), d = a(b), c = P.offsetParent().parent(".k-animation-container,.k-popup,.k-group"), c.length && (p = a(b, y, !0), d = a(b)), C[0] === window ? (d.top -= window.pageYOffset || document.documentElement.scrollTop || 0, d.left -= window.pageXOffset || document.documentElement.scrollLeft || 0) : (d.top -= T.top, d.left -= T.left), _.wrapper.data(k) || b.data(k, I({}, p)), f = I({}, d), u = I({}, p), h = x.adjustSize, "fit" === H[0] && (u.top += _._fit(f.top, b.outerHeight() + h.height, j / W)), "fit" === H[1] && (u.left += _._fit(f.left, b.outerWidth() + h.width, L / W)), g = I({}, u), m = z.outerHeight(), v = b.outerHeight(), !b.height() && m && (v += m), "flip" === H[0] && (u.top += _._flip(f.top, m, P.outerHeight(), j / W, E[0], S[0], v)), "flip" === H[1] && (u.left += _._flip(f.left, z.outerWidth(), P.outerWidth(), L / W, E[1], S[1], b.outerWidth())), z.css(y, w), b.css(u), u.left != g.left || u.top != g.top;
          },
          _align: function(t, o) {
            var i,
                n = this,
                s = n.wrapper,
                r = e(n.options.anchor),
                l = t[0],
                p = t[1],
                d = o[0],
                c = o[1],
                u = a(r),
                g = e(n.options.appendTo),
                w = s.outerWidth(),
                v = s.outerHeight(),
                _ = r.outerWidth(),
                k = r.outerHeight(),
                y = u.top,
                z = u.left,
                b = Math.round;
            return g[0] != document.body && (i = a(g), y -= i.top, z -= i.left), l === m && (y += k), l === f && (y += b(k / 2)), d === m && (y -= v), d === f && (y -= b(v / 2)), p === h && (z += _), p === f && (z += b(_ / 2)), c === h && (z -= w), c === f && (z -= b(w / 2)), {
              top: y,
              left: z
            };
          }
        });
    n.plugin(L);
  }(window.kendo.jQuery), window.kendo;
}, "function" == typeof define && define.amd ? define : function(e, t, o) {
  (o || t)();
});

})();
(function() {
var define = $__System.amdDefine;
!function(e, define) {
  define("11", ["f", "10"], e) && define("kendo.datepicker.min", ["11"], function(m) {
    return m;
  });
}(function() {
  return function(e, t) {
    function a(t) {
      var a = t.parseFormats,
          n = t.format;
      F.normalize(t), a = e.isArray(a) ? a : [a], a.length || a.push("yyyy-MM-dd"), -1 === e.inArray(n, a) && a.splice(0, 0, t.format), t.parseFormats = a;
    }
    function n(e) {
      e.preventDefault();
    }
    var i,
        o = window.kendo,
        r = o.ui,
        l = r.Widget,
        s = o.parseDate,
        d = o.keys,
        u = o.template,
        c = o._activeElement,
        p = "<div />",
        f = "<span />",
        m = ".kendoDatePicker",
        _ = "click" + m,
        v = "open",
        h = "close",
        g = "change",
        w = "disabled",
        k = "readonly",
        y = "k-state-default",
        b = "k-state-focused",
        x = "k-state-selected",
        D = "k-state-disabled",
        A = "k-state-hover",
        V = "mouseenter" + m + " mouseleave" + m,
        C = "mousedown" + m,
        T = "id",
        O = "min",
        I = "max",
        R = "month",
        W = "aria-disabled",
        E = "aria-expanded",
        N = "aria-hidden",
        F = o.calendar,
        P = F.isInRange,
        H = F.restrictValue,
        S = F.isEqualDatePart,
        z = e.extend,
        K = e.proxy,
        M = Date,
        U = function(t) {
          var a,
              n = this,
              i = document.body,
              l = e(p).attr(N, "true").addClass("k-calendar-container").appendTo(i);
          n.options = t = t || {}, a = t.id, a && (a += "_dateview", l.attr(T, a), n._dateViewID = a), n.popup = new r.Popup(l, z(t.popup, t, {
            name: "Popup",
            isRtl: o.support.isRtl(t.anchor)
          })), n.div = l, n.value(t.value);
        };
    U.prototype = {
      _calendar: function() {
        var t,
            a = this,
            i = a.calendar,
            l = a.options;
        i || (t = e(p).attr(T, o.guid()).appendTo(a.popup.element).on(C, n).on(_, "td:has(.k-link)", K(a._click, a)), a.calendar = i = new r.Calendar(t), a._setOptions(l), o.calendar.makeUnselectable(i.element), i.navigate(a._value || a._current, l.start), a.value(a._value));
      },
      _setOptions: function(e) {
        this.calendar.setOptions({
          focusOnNav: !1,
          change: e.change,
          culture: e.culture,
          dates: e.dates,
          depth: e.depth,
          footer: e.footer,
          format: e.format,
          max: e.max,
          min: e.min,
          month: e.month,
          start: e.start,
          disableDates: e.disableDates
        });
      },
      setOptions: function(e) {
        var t = this.options,
            a = e.disableDates;
        a && (e.disableDates = F.disabled(a)), this.options = z(t, e, {
          change: t.change,
          close: t.close,
          open: t.open
        }), this.calendar && this._setOptions(this.options);
      },
      destroy: function() {
        this.popup.destroy();
      },
      open: function() {
        var e = this;
        e._calendar(), e.popup.open();
      },
      close: function() {
        this.popup.close();
      },
      min: function(e) {
        this._option(O, e);
      },
      max: function(e) {
        this._option(I, e);
      },
      toggle: function() {
        var e = this;
        e[e.popup.visible() ? h : v]();
      },
      move: function(e) {
        var t = this,
            a = e.keyCode,
            n = t.calendar,
            i = e.ctrlKey && a == d.DOWN || a == d.ENTER,
            o = !1;
        if (e.altKey)
          a == d.DOWN ? (t.open(), e.preventDefault(), o = !0) : a == d.UP && (t.close(), e.preventDefault(), o = !0);
        else if (t.popup.visible()) {
          if (a == d.ESC || i && n._cell.hasClass(x))
            return t.close(), e.preventDefault(), !0;
          t._current = n._move(e), o = !0;
        }
        return o;
      },
      current: function(e) {
        this._current = e, this.calendar._focus(e);
      },
      value: function(e) {
        var t = this,
            a = t.calendar,
            n = t.options,
            i = n.disableDates;
        i && i(e) && (e = null), t._value = e, t._current = new M(+H(e, n.min, n.max)), a && a.value(e);
      },
      _click: function(e) {
        -1 !== e.currentTarget.className.indexOf(x) && this.close();
      },
      _option: function(e, t) {
        var a = this,
            n = a.calendar;
        a.options[e] = t, n && n[e](t);
      }
    }, U.normalize = a, o.DateView = U, i = l.extend({
      init: function(t, n) {
        var i,
            r,
            d = this;
        l.fn.init.call(d, t, n), t = d.element, n = d.options, n.disableDates = o.calendar.disabled(n.disableDates), n.min = s(t.attr("min")) || s(n.min), n.max = s(t.attr("max")) || s(n.max), a(n), d._initialOptions = z({}, n), d._wrapper(), d.dateView = new U(z({}, n, {
          id: t.attr(T),
          anchor: d.wrapper,
          change: function() {
            d._change(this.value()), d.close();
          },
          close: function(e) {
            d.trigger(h) ? e.preventDefault() : (t.attr(E, !1), r.attr(N, !0));
          },
          open: function(e) {
            var a,
                n = d.options;
            d.trigger(v) ? e.preventDefault() : (d.element.val() !== d._oldText && (a = s(t.val(), n.parseFormats, n.culture), d.dateView[a ? "current" : "value"](a)), t.attr(E, !0), r.attr(N, !1), d._updateARIA(a));
          }
        })), r = d.dateView.div, d._icon();
        try {
          t[0].setAttribute("type", "text");
        } catch (u) {
          t[0].type = "text";
        }
        t.addClass("k-input").attr({
          role: "combobox",
          "aria-expanded": !1,
          "aria-owns": d.dateView._dateViewID
        }), d._reset(), d._template(), i = t.is("[disabled]") || e(d.element).parents("fieldset").is(":disabled"), i ? d.enable(!1) : d.readonly(t.is("[readonly]")), d._old = d._update(n.value || d.element.val()), d._oldText = t.val(), o.notify(d);
      },
      events: [v, h, g],
      options: {
        name: "DatePicker",
        value: null,
        footer: "",
        format: "",
        culture: "",
        parseFormats: [],
        min: new Date(1900, 0, 1),
        max: new Date(2099, 11, 31),
        start: R,
        depth: R,
        animation: {},
        month: {},
        dates: [],
        ARIATemplate: 'Current focused date is #=kendo.toString(data.current, "D")#'
      },
      setOptions: function(e) {
        var t = this,
            n = t._value;
        l.fn.setOptions.call(t, e), e = t.options, e.min = s(e.min), e.max = s(e.max), a(e), t.dateView.setOptions(e), n && (t.element.val(o.toString(n, e.format, e.culture)), t._updateARIA(n));
      },
      _editable: function(e) {
        var t = this,
            a = t._dateIcon.off(m),
            i = t.element.off(m),
            o = t._inputWrapper.off(m),
            r = e.readonly,
            l = e.disable;
        r || l ? (o.addClass(l ? D : y).removeClass(l ? y : D), i.attr(w, l).attr(k, r).attr(W, l)) : (o.addClass(y).removeClass(D).on(V, t._toggleHover), i.removeAttr(w).removeAttr(k).attr(W, !1).on("keydown" + m, K(t._keydown, t)).on("focusout" + m, K(t._blur, t)).on("focus" + m, function() {
          t._inputWrapper.addClass(b);
        }), a.on(_, K(t._click, t)).on(C, n));
      },
      readonly: function(e) {
        this._editable({
          readonly: e === t ? !0 : e,
          disable: !1
        });
      },
      enable: function(e) {
        this._editable({
          readonly: !1,
          disable: !(e = e === t ? !0 : e)
        });
      },
      destroy: function() {
        var e = this;
        l.fn.destroy.call(e), e.dateView.destroy(), e.element.off(m), e._dateIcon.off(m), e._inputWrapper.off(m), e._form && e._form.off("reset", e._resetHandler);
      },
      open: function() {
        this.dateView.open();
      },
      close: function() {
        this.dateView.close();
      },
      min: function(e) {
        return this._option(O, e);
      },
      max: function(e) {
        return this._option(I, e);
      },
      value: function(e) {
        var a = this;
        return e === t ? a._value : (a._old = a._update(e), null === a._old && a.element.val(""), a._oldText = a.element.val(), t);
      },
      _toggleHover: function(t) {
        e(t.currentTarget).toggleClass(A, "mouseenter" === t.type);
      },
      _blur: function() {
        var e = this,
            t = e.element.val();
        e.close(), t !== e._oldText && e._change(t), e._inputWrapper.removeClass(b);
      },
      _click: function() {
        var e = this,
            t = e.element;
        e.dateView.toggle(), o.support.touch || t[0] === c() || t.focus();
      },
      _change: function(e) {
        var t,
            a,
            n,
            i = this,
            o = i.element.val();
        e = i._update(e), t = +i._old != +e, a = t && !i._typing, n = o !== i.element.val(), (a || n) && i.element.trigger(g), t && (i._old = e, i._oldText = i.element.val(), i.trigger(g)), i._typing = !1;
      },
      _keydown: function(e) {
        var t = this,
            a = t.dateView,
            n = t.element.val(),
            i = !1;
        a.popup.visible() || e.keyCode != d.ENTER || n === t._oldText ? (i = a.move(e), t._updateARIA(a._current), i || (t._typing = !0)) : t._change(n);
      },
      _icon: function() {
        var t,
            a = this,
            n = a.element;
        t = n.next("span.k-select"), t[0] || (t = e('<span unselectable="on" class="k-select"><span unselectable="on" class="k-icon k-i-calendar">select</span></span>').insertAfter(n)), a._dateIcon = t.attr({
          role: "button",
          "aria-controls": a.dateView._dateViewID
        });
      },
      _option: function(e, a) {
        var n = this,
            i = n.options;
        return a === t ? i[e] : (a = s(a, i.parseFormats, i.culture), a && (i[e] = new M(+a), n.dateView[e](a)), t);
      },
      _update: function(e) {
        var t,
            a = this,
            n = a.options,
            i = n.min,
            r = n.max,
            l = a._value,
            d = s(e, n.parseFormats, n.culture),
            u = null === d && null === l || d instanceof Date && l instanceof Date;
        return n.disableDates(d) && (d = null, a._old || a.element.val() || (e = null)), +d === +l && u ? (t = o.toString(d, n.format, n.culture), t !== e && a.element.val(null === d ? e : t), d) : (null !== d && S(d, i) ? d = H(d, i, r) : P(d, i, r) || (d = null), a._value = d, a.dateView.value(d), a.element.val(d ? o.toString(d, n.format, n.culture) : e), a._updateARIA(d), d);
      },
      _wrapper: function() {
        var t,
            a = this,
            n = a.element;
        t = n.parents(".k-datepicker"), t[0] || (t = n.wrap(f).parent().addClass("k-picker-wrap k-state-default"), t = t.wrap(f).parent()), t[0].style.cssText = n[0].style.cssText, n.css({
          width: "100%",
          height: n[0].style.height
        }), a.wrapper = t.addClass("k-widget k-datepicker k-header").addClass(n[0].className), a._inputWrapper = e(t[0].firstChild);
      },
      _reset: function() {
        var t = this,
            a = t.element,
            n = a.attr("form"),
            i = n ? e("#" + n) : a.closest("form");
        i[0] && (t._resetHandler = function() {
          t.value(a[0].defaultValue), t.max(t._initialOptions.max), t.min(t._initialOptions.min);
        }, t._form = i.on("reset", t._resetHandler));
      },
      _template: function() {
        this._ariaTemplate = u(this.options.ARIATemplate);
      },
      _updateARIA: function(e) {
        var t,
            a = this,
            n = a.dateView.calendar;
        a.element.removeAttr("aria-activedescendant"), n && (t = n._cell, t.attr("aria-label", a._ariaTemplate({current: e || n.current()})), a.element.attr("aria-activedescendant", t.attr("id")));
      }
    }), r.plugin(i);
  }(window.kendo.jQuery), window.kendo;
}, "function" == typeof define && define.amd ? define : function(e, t, a) {
  (a || t)();
});

})();
(function() {
var define = $__System.amdDefine;
define("12", ["e", "11"], function(homeTemplate) {
  var viewModel = kendo.observable({title: "Home"});
  var view = new kendo.View(homeTemplate, {
    model: viewModel,
    show: function() {
      debugger;
      var test = $("#testddl").kendoDatePicker().data("kendoDatePicker");
      kendo.fx(this.element).fade('in').duration(500).play();
    }
  });
  return view;
});

})();
$__System.register("13", [], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", "<h1 data-bind=\"html: title\"></h1>\r\n");
    }
  };
});
(function() {
var define = $__System.amdDefine;
define("14", ["13"], function(detailsTemplate) {
  var viewModel = kendo.observable({title: 'Details'});
  var view = new kendo.View(detailsTemplate, {
    model: viewModel,
    show: function(e) {
      kendo.fx(this.element).fade('in').duration(500).play();
    }
  });
  return view;
});

})();
(function() {
var define = $__System.amdDefine;
define("1", ["a", "d", "12", "14"], function(kendo, layout, home, details) {
  var router = new kendo.Router({
    init: function() {
      layout.render("#applicationHost");
    },
    routeMissing: function(e) {
      debug.error('No Route Found', e.url);
    },
    change: function(e) {}
  });
  router.route('/', function(e) {
    layout.showIn("#content", home);
  });
  router.route('/details', function(e) {
    layout.showIn("#content", details);
  });
  return router;
});

})();
})
(function(factory) {
  define([], factory);
});
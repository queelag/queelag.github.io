(self.webpackChunkmangadex_fe=self.webpackChunkmangadex_fe||[]).push([[528],{4063:(e,t)=>{"use strict";function r(e,t,r){var n;if(void 0===r&&(r={}),!t.codes){t.codes={};for(var o=0;o<t.chars.length;++o)t.codes[t.chars[o]]=o}if(!r.loose&&e.length*t.bits&7)throw new SyntaxError("Invalid padding");for(var i=e.length;"="===e[i-1];)if(--i,!(r.loose||(e.length-i)*t.bits&7))throw new SyntaxError("Invalid padding");for(var a=new(null!=(n=r.out)?n:Uint8Array)(i*t.bits/8|0),c=0,u=0,s=0,l=0;l<i;++l){var f=t.codes[e[l]];if(void 0===f)throw new SyntaxError("Invalid character "+e[l]);u=u<<t.bits|f,(c+=t.bits)>=8&&(c-=8,a[s++]=255&u>>c)}if(c>=t.bits||255&u<<8-c)throw new SyntaxError("Unexpected end of data");return a}function n(e,t,r){void 0===r&&(r={});for(var n=r.pad,o=void 0===n||n,i=(1<<t.bits)-1,a="",c=0,u=0,s=0;s<e.length;++s)for(u=u<<8|255&e[s],c+=8;c>t.bits;)c-=t.bits,a+=t.chars[i&u>>c];if(c&&(a+=t.chars[i&u<<t.bits-c]),o)for(;a.length*t.bits&7;)a+="=";return a}var o={chars:"0123456789ABCDEF",bits:4},i={chars:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",bits:5},a={chars:"0123456789ABCDEFGHIJKLMNOPQRSTUV",bits:5},c={chars:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",bits:6},u={chars:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",bits:6},s={parse:function(e,t){return r(e.toUpperCase(),o,t)},stringify:function(e,t){return n(e,o,t)}},l={parse:function(e,t){return void 0===t&&(t={}),r(t.loose?e.toUpperCase().replace(/0/g,"O").replace(/1/g,"L").replace(/8/g,"B"):e,i,t)},stringify:function(e,t){return n(e,i,t)}},f={parse:function(e,t){return r(e,a,t)},stringify:function(e,t){return n(e,a,t)}},p={parse:function(e,t){return r(e,c,t)},stringify:function(e,t){return n(e,c,t)}},y={parse:function(e,t){return r(e,u,t)},stringify:function(e,t){return n(e,u,t)}},b={parse:r,stringify:n};t.YU=s,t.pJ=l,t.eV=f,t.US=p,t.tH=y,t.Y2=b},4528:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>Q});var n=r(5937),o=r(6317),i=r(4741),a=r(5758),c=r(8571),u=r(5998);function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var l=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,r;return t=e,null,(r=[{key:"absolute",value:function(e){return e<0?-1*e:e}},{key:"distance",value:function(e,t){return e>t?e-t:t-e}},{key:"limit",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Number.MIN_SAFE_INTEGER,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Number.MAX_SAFE_INTEGER;return e>=t&&e<=r?e:e>=t&&e>r?r:e<t&&e<=r?t:0}},{key:"parseFloat",value:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return this.isParseable(e)?parseFloat(e):t}))},{key:"pickLowest",value:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(t.length>1?t:t[0]).reduce((function(e,t){return t<e?t:e}),Number.MAX_SAFE_INTEGER)}},{key:"isMultipleOf",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return this.toFixed(e/t,r)%1==0}},{key:"isParseable",value:function(e){return!isNaN(parseFloat(e))}},{key:"toFixed",value:function(e,t){return this.parseFloat(e.toFixed(t))}}])&&s(t,r),e}(),f=r(5696),p=r(8929);function y(e){(0,p.tc)((function(){return e()}))}var b=r(94),h=r(4063);h.YU,h.pJ,h.eV;const d=h.US;function g(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}h.tH,h.Y2;var m=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,r;return t=e,r=[{key:"decode",value:function(e){return d.parse(e)}},{key:"encode",value:function(e){return d.stringify(e instanceof Uint8Array?e:new Uint8Array(e))}}],null&&g(t.prototype,null),r&&g(t,r),e}(),v=r(1933);function E(e){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function O(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function w(e,t){return(w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function P(e,t){return!t||"object"!==E(t)&&"function"!=typeof t?k(e):t}function k(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function S(e){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var j=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}(a,e);var t,r,n,o,i=(n=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=S(n);if(o){var r=S(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return P(this,e)});function a(e,t){var r,n,o,c;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),c=void 0,(o="shape")in(n=k(r=i.call(this,e,t)))?Object.defineProperty(n,o,{value:c,enumerable:!0,configurable:!0,writable:!0}):n[o]=c,r.shape=t.shape||b.bn.NONE,r}return t=a,(r=[{key:"isShapeCircle",get:function(){return this.shape===b.bn.CIRCLE}},{key:"isShapeNone",get:function(){return this.shape===b.bn.NONE}},{key:"isShapeRectangle",get:function(){return this.shape===b.bn.RECTANGLE}},{key:"isShapeSquare",get:function(){return this.shape===b.bn.SQUARE}},{key:"isShapeSquircle",get:function(){return this.shape===b.bn.SQUIRCLE}}])&&O(t.prototype,r),a}(r(2e3).m),x=r(7334);function R(e){return(R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Z(e,t,r,n,o,i,a){try{var c=e[i](a),u=c.value}catch(e){return void r(e)}c.done?t(u):Promise.resolve(u).then(n,o)}function N(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?N(Object(r),!0).forEach((function(t){T(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):N(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function C(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function A(e,t){return(A=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function I(e,t){return!t||"object"!==R(t)&&"function"!=typeof t?U(e):t}function U(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function F(e){return(F=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function T(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var L=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&A(e,t)}(c,e);var t,r,n,o,i=(n=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=F(n);if(o){var r=F(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return I(this,e)});function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),T(U(t=i.call(this,b.yL.IMAGE,e)),"base64",void 0),T(U(t),"error",void 0),T(U(t),"orientation",void 0),T(U(t),"ratio",void 0),T(U(t),"_source",t.toBase64URI(a.ZC,a.mz)),T(U(t),"type",void 0),T(U(t),"onError",(function(e){t.error=!0,u.Y.error(t.id,"onError","The error has been set to true.",e),t.update()})),t.base64=a.ZC,t.error=!1,t.orientation=e.orientation||b.i5.HORIZONTAL,t.ratio=e.ratio||0,t.type=a.mz,t.source=e.source,t}return t=c,(r=[{key:"getStyle",value:function(e){return _(_(_({},e.style),x.i.findStyle(this.shape,"number"==typeof e.size?e.size:0)),{},{height:e.height||e.size||this.height||void 0,width:e.width||e.size||this.width||void 0})}},{key:"toBase64URI",value:function(e,t){return"data:"+t+";base64,"+e}},{key:"elementHeight",get:function(){return l.parseFloat(getComputedStyle(this.element).height)}},{key:"elementWidth",get:function(){return l.parseFloat(getComputedStyle(this.element).width)}},{key:"source",get:function(){return this._source},set:function(e){var t,r=this;(t=regeneratorRuntime.mark((function t(){var n,o,i,a,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:t.t0=!0,t.next=t.t0===/^(https?:\/\/|\/)/.test(e)?3:(t.t0,e.includes("base64"),21);break;case 3:if(!(n=v.C.images.get(e))){t.next=5;break}return t.abrupt("return",r.source=n);case 5:return t.next=7,(0,f.u)((function(){return window.fetch(e)}));case 7:if(!((o=t.sent)instanceof Error)){t.next=10;break}return t.abrupt("return",r.onError());case 10:return t.next=12,(0,f.u)((function(){return o.arrayBuffer()}));case 12:if(!((i=t.sent)instanceof Error)){t.next=15;break}return t.abrupt("return",r.onError());case 15:if(!((a=(0,p.tc)((function(){return m.encode(i)})))instanceof Error)){t.next=17;break}return t.abrupt("return",r.onError());case 17:if(c=o.headers.get("content-type")){t.next=19;break}return t.abrupt("return",y((function(){return u.Y.error(r.id,"setSource","Failed to find the content-type header",o.headers)})));case 19:return r.base64=a,r._source=r.toBase64URI(a,c),r.type=c,v.C.images.set(e,r._source),t.abrupt("break",22);case 21:r._source=e;case 22:r.update();case 23:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(e){Z(i,n,o,a,c,"next",e)}function c(e){Z(i,n,o,a,c,"throw",e)}a(void 0)}))})()}},{key:"hasError",get:function(){return!0===this.error}},{key:"hasNoError",get:function(){return!1===this.error}},{key:"height",get:function(){return this.ratio>0?this.elementWidth*this.ratio:0}},{key:"width",get:function(){return this.ratio>0?this.elementHeight*this.ratio:0}}])&&C(t.prototype,r),c}(j),B=["id","shape","source"];function G(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function D(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?G(Object(r),!0).forEach((function(t){Y(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):G(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function Y(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function H(e){var t=(0,c.N)(),r=(0,i.Ye)((function(){return new L(D(D({},e),{},{update:t}))}),[]);return(0,i.d4)((function(){n.e.updateKeys(r,e,B,t)}),o.g.pickToArray(e,B)),i.ZP.createElement(i.ZP.Fragment,null,r.hasNoError&&i.ZP.createElement(i.HY,null,r.source.length>0&&i.ZP.createElement("img",D(D({},o.g.omit(e,a.WG)),{},{id:r.id,onError:function(t){r.onError(t),e.onError&&e.onError(t)},onLoad:function(t){r.update(),e.onLoad&&e.onLoad(t)},src:r.source,style:r.getStyle(e)})),r.source.length<=0&&i.ZP.createElement("div",D(D({},o.g.omit(e,a.WG)),{},{id:r.id,style:r.getStyle(e)}))),r.hasError&&i.ZP.createElement(i.HY,null,"string"==typeof e.fallback&&i.ZP.createElement("img",D(D({},o.g.omit(e,a.WG)),{},{id:r.id,src:e.fallback,style:r.getStyle(e)})),"function"==typeof e.fallback&&i.ZP.createElement(e.fallback,D(D({},o.g.omit(e,a.WG)),{},{id:r.id,style:r.getStyle(e)})),void 0===e.fallback&&i.ZP.createElement("div",D(D({},o.g.omit(e,a.WG)),{},{id:r.id,style:r.getStyle(e)}))))}var z=r(6065);function W(e){var t=e.delay||.05;return i.ZP.createElement("span",o.g.omit(e,["delay"]),e.children.split("").map((function(e,r){return i.ZP.createElement(z.m.span,{animate:{opacity:1},initial:{opacity:0},key:r,transition:{delay:r*t}},e)})))}var M=r(9431);function Q(){return i.ZP.createElement("div",{className:"h-full flex flex-col justify-between space-y-8"},i.ZP.createElement("div",{className:"flex flex-col space-y-8"},i.ZP.createElement("div",{className:"flex items-center gap-4"},i.ZP.createElement(z.m.div,{animate:{opacity:1,rotate:0,scale:1},initial:{opacity:0,rotate:-90,scale:.5}},i.ZP.createElement(H,{alt:"logo",className:"bg-lime-800",shape:b.bn.SQUIRCLE,size:48,source:r(2236)})),i.ZP.createElement(W,{className:"text-2xl text-white"},"Queelag")),i.ZP.createElement("div",null,i.ZP.createElement(z.m.span,{animate:{opacity:1},className:"text-gray-400",initial:{opacity:0}},"This is a personal organization where bleeding edge tools are developed daily for typescript.",i.ZP.createElement("br",null),i.ZP.createElement("br",null),"All of these libraries follow a strict style of coding that makes it easier and faster to write safe code.",i.ZP.createElement("br",null),i.ZP.createElement("br",null),"Typescript is not used loosely but it's strictly enforced to make everything more predictable."))),i.ZP.createElement("div",{className:"hidden sm:flex justify-end"},i.ZP.createElement(M.I,null)))}},2236:(e,t,r)=>{"use strict";e.exports=r.p+"assets/logo.a879737de19d99f3fa94.jpg"}}]);
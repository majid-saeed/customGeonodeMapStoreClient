/*! For license information please see fullscreen-plugin.81c51b2901a2a40c8824.chunk.js.LICENSE.txt */
(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[1718],{28140:e=>{!function(){"use strict";var t="undefined"!=typeof window&&void 0!==window.document?window.document:{},n=e.exports,r="undefined"!=typeof Element&&"ALLOW_KEYBOARD_INPUT"in Element,o=function(){for(var e,n=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],r=0,o=n.length,i={};r<o;r++)if((e=n[r])&&e[1]in t){for(r=0;r<e.length;r++)i[n[0][r]]=e[r];return i}return!1}(),i={change:o.fullscreenchange,error:o.fullscreenerror},l={request:function(e){return new Promise(function(n){var i=o.requestFullscreen,l=function(){this.off("change",l),n()}.bind(this);e=e||t.documentElement,/ Version\/5\.1(?:\.\d+)? Safari\//.test(navigator.userAgent)?e[i]():e[i](r?Element.ALLOW_KEYBOARD_INPUT:{}),this.on("change",l)}.bind(this))},exit:function(){return new Promise(function(e){var n=function(){this.off("change",n),e()}.bind(this);t[o.exitFullscreen](),this.on("change",n)}.bind(this))},toggle:function(e){return this.isFullscreen?this.exit():this.request(e)},onchange:function(e){this.on("change",e)},onerror:function(e){this.on("error",e)},on:function(e,n){var r=i[e];r&&t.addEventListener(r,n,!1)},off:function(e,n){var r=i[e];r&&t.removeEventListener(r,n,!1)},raw:o};o?(Object.defineProperties(l,{isFullscreen:{get:function(){return Boolean(t[o.fullscreenElement])}},element:{enumerable:!0,get:function(){return t[o.fullscreenElement]}},enabled:{enumerable:!0,get:function(){return Boolean(t[o.fullscreenEnabled])}}}),n?e.exports=l:window.screenfull=l):n?e.exports=!1:window.screenfull=!1}()},75140:(e,t,n)=>{"use strict";n.d(t,{Z:()=>R});var r=n(21413),o=n.n(r),i=n(75263),l=n.n(i),c=n(23885),u=n(50966),s=n(38560),a=n(37295),f=n.n(a);function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t){return d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},d(e,t)}function m(e,t){if(t&&("object"===p(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return h(e)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e){return g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},g(e)}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var w=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");Object.defineProperty(e,"prototype",{value:Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),writable:!1}),t&&d(e,t)}(c,e);var t,n,r,i,l=(r=c,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=g(r);if(i){var n=g(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return m(this,e)});function c(){var e;y(this,c);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return v(h(e=l.call.apply(l,[this].concat(n))),"getStyle",(function(){var t={cursor:e.props.disabled?"not-allowed":"pointer",margin:0,padding:0,display:"inline-block"};return e.props.image?f()(t,{overflow:"hidden"}):f()(t,{height:"48px",width:"48px",border:"1px solid grey",borderRadius:"4px",backgroundColor:"rgb(250, 250, 250)"}),f()(t,e.props.style),t})),e}return t=c,(n=[{key:"render",value:function(){return o().createElement("img",{className:this.props.className,id:this.props.id,title:this.props.tooltip,style:this.getStyle(),src:this.props.image,onClick:this.props.disabled?null:this.props.onClick})}}])&&b(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),c}(o().Component);v(w,"propTypes",{id:l().string,image:l().string,onClick:l().func,style:l().object,disabled:l().bool,tooltip:l().string,className:l().string}),v(w,"defaultProps",{disabled:!1,tooltip:null,className:void 0});const O=w;function P(e){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},P(e)}function S(){return S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},S.apply(this,arguments)}function E(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function k(e,t){return k=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},k(e,t)}function C(e,t){if(t&&("object"===P(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return T(e)}function T(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function F(e){return F=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},F(e)}function _(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var x=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");Object.defineProperty(e,"prototype",{value:Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),writable:!1}),t&&k(e,t)}(a,e);var t,n,r,i,l=(r=a,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=F(r);if(i){var n=F(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return C(this,e)});function a(){var e;E(this,a);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return _(T(e=l.call.apply(l,[this].concat(n))),"onClick",(function(){e.props.onClick(!e.props.pressed,e.props.options)})),_(T(e),"renderNormalButton",(function(){return o().createElement(s.Z,S({id:e.props.id},e.props.btnConfig,{onClick:e.onClick,bsStyle:e.props.pressed?e.props.pressedStyle:e.props.defaultStyle,style:e.props.style}),e.props.glyphicon?o().createElement(c.Glyphicon,{glyph:e.props.glyphicon}):null,e.props.glyphicon&&e.props.text&&!o().isValidElement(e.props.text)?" ":null,e.props.text,e.props.help)})),_(T(e),"renderImageButton",(function(){return o().createElement(O,{id:e.props.id,image:e.props.image,onClick:e.onClick,style:e.props.style})})),_(T(e),"addTooltip",(function(t){return o().createElement(u.Z,{placement:e.props.tooltipPlace,key:"overlay-trigger."+e.props.id,overlay:e.props.tooltip},t)})),e}return t=a,(n=[{key:"render",value:function(){var e="normal"===this.props.btnType?this.renderNormalButton():this.renderImageButton();return this.props.tooltip?this.addTooltip(e):e}}])&&j(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(o().Component);_(x,"propTypes",{id:l().string,btnConfig:l().object,options:l().object,text:l().oneOfType([l().string,l().element]),help:l().oneOfType([l().string,l().element]),glyphicon:l().string,pressed:l().bool,onClick:l().func,tooltip:l().element,tooltipPlace:l().string,style:l().object,btnType:l().oneOf(["normal","image"]),image:l().string,pressedStyle:l().string,defaultStyle:l().string}),_(x,"defaultProps",{onClick:function(){},options:{},pressed:!1,tooltipPlace:"top",style:{},btnType:"normal",pressedStyle:"primary",defaultStyle:"default"});const R=x},50966:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(61365),o=n(23885);const i=(0,r.Z)(o.OverlayTrigger)},61365:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var r=n(21413),o=n.n(r),i=n(37275);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}const c=function(e){return function(t){return o().createElement(e,l({},t,{container:document.querySelector("."+(i.ZP.getConfigProp("themePrefix")||"ms2")+" > div")||document.body}))}}},9842:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>N});var r=n(74277),o="TOGGLE_FULLSCREEN",i=n(28140),l=n.n(i),c=n(20721),u=n.n(c),s=n(44612),a=n.n(s),f=n(82904),p=n(37275),y=n(2822),b=n.n(y),d=n(37295),m=n.n(d),h=n(75263),g=n.n(h),v=n(21413),w=n.n(v),O=n(75140),P=n(23885),S=n(5346);function E(e){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},E(e)}function j(){return j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},j.apply(this,arguments)}function k(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function T(e,t){return T=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},T(e,t)}function F(e,t){if(t&&("object"===E(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return _(e)}function _(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function x(e){return x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},x(e)}function R(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var B=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");Object.defineProperty(e,"prototype",{value:Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),writable:!1}),t&&T(e,t)}(l,e);var t,n,r,o,i=(r=l,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=x(r);if(o){var n=x(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return F(this,e)});function l(){var e;k(this,l);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return R(_(e=i.call.apply(i,[this].concat(n))),"getButtonProperties",(function(){return["id","btnConfig","options","text","glyphicon","onClick","tooltipPlace","style","btnType","image","pressedStyle","defaultStyle"].reduce((function(t,n){return t[n]=e.props[n],t}),{})})),e}return t=l,(n=[{key:"render",value:function(){return w().createElement(O.Z,j({},this.getButtonProperties(),{pressed:this.props.active,tooltip:w().createElement(P.Tooltip,{id:"full-screen-button-tip"},w().createElement(S.Z,{msgId:this.props.active?this.props.activeTooltip:this.props.notActiveTooltip}))}))}}])&&C(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),l}(w().Component);R(B,"propTypes",{id:g().string,btnConfig:g().object,options:g().object,text:g().oneOfType([g().string,g().element]),help:g().oneOfType([g().string,g().element]),glyphicon:g().string,active:g().bool,onClick:g().func,activeTooltip:g().string,notActiveTooltip:g().string,tooltipPlace:g().string,style:g().object,btnType:g().oneOf(["normal","image"]),image:g().string,pressedStyle:g().string,defaultStyle:g().string}),R(B,"defaultProps",{id:"fullscreen-btn",activeTooltip:"fullscreen.tooltipDeactivate",notActiveTooltip:"fullscreen.tooltipActivate",tooltipPlace:"left",defaultStyle:"primary",pressedStyle:"success active",glyphicon:"1-full-screen",btnConfig:{className:"square-button"}});const q=B;var A=(0,r.connect)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.controls,n=void 0===t?{}:t;return{active:n.fullscreen&&n.fullscreen.enabled}}),{onClick:function(e,t){return n=e,r=t.querySelector,{type:o,enable:n,elementSelector:r};var n,r}})(q);const N={FullScreenPlugin:m()(A,{disablePluginIf:"{state('browser') && state('browser').safari}",Toolbar:{name:"fullscreen",position:5,alwaysVisible:!0,tool:!0,priority:1}}),reducers:{},epics:{toggleFullscreenEpic:function(e){return e.ofType(o).switchMap((function(e){var t=document.querySelector(e&&e.querySelector||"."+(p.ZP.getConfigProp("themePrefix")||"ms2")+" > div");return t&&e.enable&&l().enabled?l().request(t):t&&!e.enable&&l().exit(),b().Observable.merge(b().Observable.fromEvent(document,a()(u()([["exitFullscreen","fullscreenchange"],["webkitExitFullscreen","webkitfullscreenchange"],["webkitCancelFullScreen","webkitfullscreenchange"],["mozCancelFullScreen","mozfullscreenchange"],["msExitFullscreen","MSFullscreenChange"]].filter((function(e){return document[e[0]]}))))).filter((function(){return l().element!==t})).map((function(){return(0,f.Xg)("fullscreen","enabled",!1)})),b().Observable.of((0,f.Xg)("fullscreen","enabled",e.enable)),b().Observable.fromEvent(window,"hashchange").do((function(){return l().exit()})).map((function(){return(0,f.Xg)("fullscreen","enabled",!1)})))}))}}}}}]);
(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[2259],{52259:(e,t,n)=>{"use strict";n.r(t),n.d(t,{DEFAULT_SCREEN_DPI:()=>$,METERS_PER_UNIT:()=>J,GOOGLE_MERCATOR:()=>Q,EXTENT_TO_ZOOM_HOOK:()=>ee,ZOOM_TO_EXTENT_HOOK:()=>te,RESOLUTIONS_HOOK:()=>ne,RESOLUTION_HOOK:()=>re,COMPUTE_BBOX_HOOK:()=>oe,GET_PIXEL_FROM_COORDINATES_HOOK:()=>ie,GET_COORDINATES_FROM_PIXEL_HOOK:()=>ae,registerHook:()=>ce,getHook:()=>le,executeHook:()=>se,clearHooks:()=>fe,dpi2dpm:()=>Oe,dpi2dpu:()=>pe,getSphericalMercatorScale:()=>de,getGoogleMercatorScale:()=>ge,getSphericalMercatorScales:()=>me,getGoogleMercatorScales:()=>ye,getResolutionsForScales:()=>_e,getGoogleMercatorResolutions:()=>ve,getResolutions:()=>Ee,getScales:()=>Se,getZoomFromResolution:()=>he,defaultGetZoomForExtent:()=>Te,getZoomForExtent:()=>be,getCurrentResolution:()=>Me,getCenterForExtent:()=>Ie,getBbox:()=>Re,isNearlyEqual:()=>xe,mapUpdated:()=>Ce,transformExtent:()=>He,groupSaveFormatted:()=>Pe,saveMapConfiguration:()=>we,generateNewUUIDs:()=>ke,mergeMapConfigs:()=>Ne,addRootParentGroup:()=>Ue,isSimpleGeomType:()=>Ge,getSimpleGeomType:()=>Ke,getIdFromUri:()=>De,parseLayoutValue:()=>je,prepareMapObjectToCompare:()=>Fe,updateObjectFieldKey:()=>Le,compareMapChanges:()=>Ae,createRegisterHooks:()=>Xe,default:()=>Ze});var r=n(37153),o=n.n(r),i=n(99094),a=n.n(i),u=n(77263),c=n.n(u),l=n(69533),s=n.n(l),f=n(57546),O=n.n(f),p=n(50542),d=n.n(p),g=n(48397),m=n.n(g),y=n(29976),_=n.n(y),v=n(97195),E=n.n(v),S=n(83403),h=n.n(S),T=n(91131),b=n.n(T),M=n(31476),I=n.n(M),R=n(62582),x=n.n(R),C=n(46713),H=n.n(C),P=n(19566),w=n.n(P),k=n(92062),N=n.n(k),U=n(84110),G=n.n(U),K=n(10525),D=n(61868),j=n(24262),F=n(37295),L=n.n(F),A=["id"],X=["group"];function Z(e){return Z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Z(e)}function z(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function B(e){return function(e){if(Array.isArray(e))return V(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return V(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?V(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function V(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function W(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function q(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?W(Object(n),!0).forEach((function(t){Y(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):W(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var $=96,J={m:1,degrees:111194.87428468118,ft:.3048,"us-ft":1200/3937},Q={RADIUS:6378137,TILE_WIDTH:256,ZOOM_FACTOR:2},ee="EXTENT_TO_ZOOM_HOOK",te="ZOOM_TO_EXTENT_HOOK",ne="RESOLUTIONS_HOOK",re="RESOLUTION_HOOK",oe="COMPUTE_BBOX_HOOK",ie="GET_PIXEL_FROM_COORDINATES_HOOK",ae="GET_COORDINATES_FROM_PIXEL_HOOK",ue={};function ce(e,t){ue[e]=t}function le(e){return ue[e]}function se(e,t,n){var r=le(e);return r?t(r):n?n():null}function fe(){ue={}}function Oe(e){return e*(100/2.54)}function pe(e,t){var n=(0,K.getUnits)(t||"EPSG:3857");return J[n]*Oe(e||$)}function de(e,t,n,r,o){return 2*Math.PI*e/(t*Math.pow(n,r)/Oe(o||$))}function ge(e,t){return de(Q.RADIUS,Q.TILE_WIDTH,Q.ZOOM_FACTOR,e,t)}function me(e,t,n,r,o,i){for(var a=[],u=r;u<=o;u++)a.push(de(e,t,n,u,i));return a}function ye(e,t,n){return me(Q.RADIUS,Q.TILE_WIDTH,Q.ZOOM_FACTOR,e,t,n)}function _e(e,t,n){var r=pe(n,t);return e.map((function(e){return e/r}))}function ve(e,t,n){return _e(ye(e,t,n),"EPSG:3857",n)}function Ee(){return le("RESOLUTIONS_HOOK")?le("RESOLUTIONS_HOOK")():ve(0,21,$)}function Se(e,t){var n=pe(t,e);return Ee().map((function(e){return e*n}))}function he(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Ee(),n=t.map((function(t,n){return{diff:Math.abs(t-e),zoom:n}})),r=N()(n,"diff"),o=r.zoom;return o}function Te(e,t,n,r,o,i){var a=e[2]-e[0],u=e[3]-e[1],c=Math.abs(a/t.width),l=Math.abs(u/t.height),s=Math.max(c,l),f=(i||_e(ye(n,r,o||$),"EPSG:3857",o)).reduce((function(e,t,n){var r=Math.abs(t-s);return r>e.diff?e:{diff:r,zoom:n}}),{diff:Number.POSITIVE_INFINITY,zoom:0}).zoom;return Math.max(0,Math.min(f,r))}function be(e,t,n,r,o){return le("EXTENT_TO_ZOOM_HOOK")?le("EXTENT_TO_ZOOM_HOOK")(e,t,n,r,o):Te(e,t,n,r,o,le("RESOLUTIONS_HOOK")?le("RESOLUTIONS_HOOK")(e,t,n,r,o,Oe(o||$)):null)}function Me(e,t,n,r){return le("RESOLUTION_HOOK")?le("RESOLUTION_HOOK")(e,t,n,r):ve(t,n,r)[e]}function Ie(e,t){var n=(e[2]-e[0])/2,r=(e[3]-e[1])/2;return{x:e[0]+n,y:e[1]+r,crs:t}}function Re(e,t){return se("COMPUTE_BBOX_HOOK",(function(n){return n(e,t)}))}var xe=function(e,t){return void 0!==e&&void 0!==t&&e.toFixed(12)-t.toFixed(12)==0};function Ce(e,t){var n,r,o,i;return!(!e||x()(e)||!t||x()(t)||xe(null==t||null===(n=t.center)||void 0===n?void 0:n.x,null==e||null===(r=e.center)||void 0===r?void 0:r.x)&&xe(null==t||null===(o=t.center)||void 0===o?void 0:o.y,null==e||null===(i=e.center)||void 0===i?void 0:i.y)&&(null==t?void 0:t.zoom)===(null==e?void 0:e.zoom))}function He(e,t,n,r){var o=(0,K.getUnits)(e);return"ft"===o?{width:n/J.ft,height:r/J.ft}:"us-ft"===o?{width:n/J["us-ft"],height:r/J["us-ft"]}:"degrees"===o?{width:n/(111132.92-559.82*Math.cos(2*t.y)+1.175*Math.cos(4*t.y)),height:r/(111412.84*Math.cos(t.y)-93.5*Math.cos(3*t.y))}:{width:n,height:r}}var Pe=function(e){return{id:e.id,title:e.title,description:e.description,tooltipOptions:e.tooltipOptions,tooltipPlacement:e.tooltipPlacement,expanded:e.expanded}};function we(e,t,n,r,o,i,a){var u={center:e.center,maxExtent:e.maxExtent,projection:e.projection,units:e.units,mapInfoControl:e.mapInfoControl,zoom:e.zoom,mapOptions:e.mapOptions||{}},c=t.map((function(e){return(0,j.z8)(e)})),l=n.reduce((function(e,t){return e.concat((0,j.ar)(t))}),[].concat(n.map((function(e){return e.id})))).map((function(e){var t=(0,j.Mk)(n,e);return t&&t.nodes?Pe(t):null})).filter((function(e){return e})),s=r.filter((function(e){return!!e.thumbnail})),f=(0,j.V5)(c),O=c.map((function(e){return L()({},e,{tileMatrixSet:e.tileMatrixSet&&e.tileMatrixSet.length>0,matrixIds:e.matrixIds&&Object.keys(e.matrixIds)})})),p=H()(O,(function(e){return"annotations"===e.id}));if(-1!==p){var d=O[p].features.map((function(e){return"FeatureCollection"===e.type?q(q({},e),{},{features:e.features.map((function(e){return e.properties.geometryGeodesic?(0,D.t8)("properties.geometryGeodesic",null,e):e}))}):e.properties.geometryGeodesic?(0,D.t8)("properties.geometryGeodesic",null,e):{}}));O[p]=(0,D.t8)("features",d,O[p])}return q({version:2,map:L()({},u,{layers:O,groups:l,backgrounds:s,text_search_config:o,bookmark_search_config:i},!x()(f)&&{sources:f}||{})},a)}var ke=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=w()(e),n=q(q({},O()(e,"map.layers",[]).reduce((function(e,t){return q(q({},e),{},Y({},t.id,"annotations"===t.id?t.id:G()()))}),{})),O()(e,"widgetsConfig.widgets",[]).reduce((function(e,t){return q(q({},e),{},Y({},t.id,G()()))}),{}));return(0,D.t8)("map.backgrounds",O()(e,"map.backgrounds",[]).map((function(e){return q(q({},e),{},{id:n[e.id]})})),(0,D.t8)("widgetsConfig",{collapsed:_()(m()(O()(e,"widgetsConfig.collapsed",{}),(function(e,t){return n[t]})),(function(e){return q(q({},e),{},{layouts:_()(e.layouts,(function(e){return q(q({},e),{},{i:n[e.i]})}))})})),layouts:_()(O()(e,"widgetsConfig.layouts",{}),(function(e){return e.map((function(e){return q(q({},e),{},{i:n[e.i]})}))})),widgets:O()(e,"widgetsConfig.widgets",[]).map((function(e){return q(q({},e),{},{id:n[e.id],layer:q(q({},O()(e,"layer",{})),{},{id:n[O()(e,"layer.id")]})})}))},(0,D.t8)("map.layers",O()(e,"map.layers",[]).map((function(e){return q(q({},e),{},{id:n[e.id]})})),t)))},Ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.map((function(e){return s()(e,E()(e).filter((function(t){return void 0!==e[t]})))}))},r=ke(t),o=[].concat(B(O()(e,"map.backgrounds",[])),B(O()(r,"map.backgrounds",[]))),i=n(O()(e,"map.layers",[])),a=n(O()(r,"map.layers",[])),u=d()(i,(function(e){return"annotations"===e.id})),c=d()(a,(function(e){return"annotations"===e.id})),l=[].concat(B(a.filter((function(e){return"annotations"!==e.id}))),B(i.filter((function(e){return"annotations"!==e.id}))),B(u||c?[q(q(q({},u||{}),c||{}),{},{features:[].concat(B(O()(u,"features",[])),B(O()(c,"features",[])))})]:[])),f=l.filter((function(e){return"background"===e.group})),p=H()(f,(function(e){return e.visibility})),g=O()(e,"map.sources",{}),m=O()(r,"map.sources",{}),y=q(q({},g),m),_=O()(e,"widgetsConfig",{}),v=O()(r,"widgetsConfig",{});return q(q(q({},r),e),{},{catalogServices:q(q({},O()(e,"catalogServices",{})),{},{services:q(q({},O()(e,"catalogServices.services",{})),O()(r,"catalogServices.services",{}))}),map:q(q(q({},r.map),e.map),{},{backgrounds:o,groups:b()([].concat(B(O()(e,"map.groups",[])),B(O()(r,"map.groups",[]))),(function(e,t){return e.id===t.id})),layers:[].concat(B(f.slice(0,p+1)),B(f.slice(p+1).map((function(e){return q(q({},e),{},{visibility:!1})}))),B(l.filter((function(e){return"background"!==e.group})))),sources:x()(y)?void 0:y}),widgetsConfig:{collapsed:q(q({},_.collapsed),v.collapsed),layouts:h()([].concat(B(E()(_.layouts)),B(E()(v.layouts)))).reduce((function(e,t){return q(q({},e),{},Y({},t,[].concat(B(O()(_,"layouts.".concat(t),[])),B(O()(v,"layouts.".concat(t),[])))))}),{}),widgets:[].concat(B(O()(_,"widgets",[])),B(O()(v,"widgets",[])))},timelineData:q(q({},O()(e,"timelineData",{})),O()(r,"timelineData",{})),dimensionData:q(q({},O()(e,"dimensionData",{})),O()(r,"dimensionData",{}))})},Ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"RootGroup",n=O()(e,"map.groups",[]),r=n.filter((function(e){return"Default"!==e.id})),o=d()(n,(function(e){return"Default"===e.id})),i=o&&{id:G()(),title:t,expanded:o.expanded},a=o?[].concat(B(r.map((function(e){var t=e.id,n=z(e,A);return q({id:"".concat(i.id,".").concat(t)},n)}))),[i]):r;return q(q({},e),{},{map:q(q({},e.map),{},{groups:a,layers:O()(e,"map.layers",[]).map((function(e){var t,n=e.group;return q(q({},z(e,X)),{},{group:!o||"background"===n||"Default"!==n&&n?o&&(null===(t=d()(a,(function(e){var t=e.id;return t.slice(t.indexOf(".")+1)===n})))||void 0===t?void 0:t.id)||n:i.id})}))})})};function Ge(e){switch(e){case"MultiPoint":case"MultiLineString":case"MultiPolygon":case"GeometryCollection":case"Text":return!1;default:return!0}}function Ke(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Point";switch(e){case"Point":case"LineString":case"Polygon":case"Circle":default:return e;case"MultiPoint":case"Marker":case"Text":return"Point";case"MultiLineString":return"LineString";case"MultiPolygon":return"Polygon";case"GeometryCollection":return"GeometryCollection"}}var De=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:/data\/(\d+)/,n=decodeURIComponent(e),r=t.exec(n);return r&&r.length&&r.length>1?r[1]:null},je=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return o()(e)&&-1!==e.indexOf("%")?parseFloat(a()(e))*t/100:c()(e)?e:0},Fe=function e(t){var n=["apiKey","time","args","fixed"],r=function(e){return n.reduce((function(t,n){return t||e===n}),!1)};Object.keys(t).forEach((function(n){var o=t[n],i=Z(o);"object"!==i||null===o||r(n)?"undefined"!==i&&o&&!r(n)||delete t[n]:(e(o),Object.keys(o).length||delete t[n])}))},Le=function(e,t,n){e[t]&&(Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(e,t)),delete e[t])},Ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=["map.layers","map.backgrounds","map.text_search_config","map.bookmark_search_config","map.text_serch_config","map.zoom","widgetsConfig"],r=s()(w()(e),n),o=s()(w()(t),n);return Le(r.map,"text_serch_config","text_search_config"),Le(o.map,"text_serch_config","text_search_config"),Fe(r),Fe(o),I()(r,o)},Xe=function(){var e={};return{registerHook:function(t,n){e[t]=n},getHook:function(t){return e[t]},executeHook:function(t,n,r){var o=e[t];return o?n(o):r?r():null}}};const Ze={createRegisterHooks:Xe,EXTENT_TO_ZOOM_HOOK:ee,RESOLUTIONS_HOOK:ne,RESOLUTION_HOOK:re,COMPUTE_BBOX_HOOK:oe,GET_PIXEL_FROM_COORDINATES_HOOK:ie,GET_COORDINATES_FROM_PIXEL_HOOK:ae,DEFAULT_SCREEN_DPI:$,ZOOM_TO_EXTENT_HOOK:te,registerHook:ce,getHook:le,dpi2dpm:Oe,getSphericalMercatorScales:me,getSphericalMercatorScale:de,getGoogleMercatorScales:ye,getGoogleMercatorResolutions:ve,getGoogleMercatorScale:ge,getResolutionsForScales:_e,getZoomForExtent:be,defaultGetZoomForExtent:Te,getCenterForExtent:Ie,getResolutions:Ee,getScales:Se,getBbox:Re,mapUpdated:Ce,getCurrentResolution:Me,transformExtent:He,saveMapConfiguration:we,generateNewUUIDs:ke,mergeMapConfigs:Ne,addRootParentGroup:Ue,isSimpleGeomType:Ge,getSimpleGeomType:Ke,getIdFromUri:De,parseLayoutValue:je,prepareMapObjectToCompare:Fe,updateObjectFieldKey:Le,compareMapChanges:Ae,clearHooks:fe}}}]);
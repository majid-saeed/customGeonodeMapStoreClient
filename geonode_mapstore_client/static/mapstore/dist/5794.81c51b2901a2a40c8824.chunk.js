(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[5794],{2400:(e,t,r)=>{"use strict";r.d(t,{Z:()=>_});var o=r(21413),n=r.n(o),i=r(19690),a=r.n(i),s=r(37295),p=r.n(s),c=r(75263),u=r.n(c),l=r(82920),f=r.n(l),y=r(52259);function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){w(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function v(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function g(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function b(e,t){return b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},b(e,t)}function O(e,t){if(t&&("object"===m(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return P(e)}function P(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function E(e){return E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},E(e)}function w(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var T=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");Object.defineProperty(e,"prototype",{value:Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),writable:!1}),t&&b(e,t)}(c,e);var t,r,o,i,s=(o=c,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=E(o);if(i){var r=E(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return O(this,e)});function c(){var e;v(this,c);for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return w(P(e=s.call.apply(s,[this].concat(r))),"updateZIndex",(function(t){var r=t||e.props.position,o=e.props.map.imageryLayers._layers.reduce((function(t,r,o){return e.provider===r?o:t}),-1),n=e.props.map.imageryLayers._layers.reduce((function(e,t,o){return-1===e&&r<t._position?o:e}),-1);-1===n&&(n=o);var i=n-o;0!==i&&Array.apply(null,{length:Math.abs(i)}).map(Number.call,Number).forEach((function(){e.props.map.imageryLayers[i>0?"raise":"lower"](e.provider)}))})),w(P(e),"setLayerVisibility",(function(t){var r=e.getVisibilityOption(e.props),o=e.getVisibilityOption(t);o!==r&&(o?(e.addLayer(t),e.updateZIndex()):e.removeLayer())})),w(P(e),"getVisibilityOption",(function(e){var t=e.options,r=void 0===t?{}:t,o=e.zoom,n=e.resolutions,i=void 0===n?(0,y.getResolutions)():n,a=r||{},s=a.visibility,p=a.minResolution,c=void 0===p?-1/0:p,u=a.maxResolution,l=void 0===u?1/0:u;if(!a.disableResolutionLimits&&!f()(i[o])){var m=i[o];if(!(m<l&&m>=c))return!1}return!1!==s})),w(P(e),"setLayerOpacity",(function(t){t!==(e.props.options&&void 0!==e.props.options.opacity?e.props.options.opacity:1)&&e.layer&&e.provider&&(e.provider.alpha=t)})),w(P(e),"createLayer",(function(t,r,o,n,i){if(t){var s=p()({},r,o?{zIndex:o}:null,{securityToken:i});e.layer=a().createLayer(t,s,n),e.layer&&(e.layer.layerName=r.name,e.layer.layerId=r.id),null===e.layer&&e.props.onCreationError(r)}})),w(P(e),"updateLayer",(function(t,r){var o=a().updateLayer(t.type,e.layer,d(d({},t.options),{},{securityToken:t.securityToken}),d(d({},r.options),{},{securityToken:r.securityToken}),e.props.map);o&&(e.removeLayer(),e.layer=o,e.addLayer(t))})),w(P(e),"addLayerInternal",(function(t){t.options.useForElevation?e.props.map.terrainProvider=e.layer:(e.provider=e.props.map.imageryLayers.addImageryProvider(e.layer),e.provider._position=e.props.position,void 0!==t.options.opacity&&(e.provider.alpha=t.options.opacity))})),w(P(e),"addLayer",(function(t){if(e.layer&&!e.layer.detached&&(e.addLayerInternal(t),e.props.options.refresh&&e.layer.updateParams)){var r=0;e.refreshTimer=setInterval((function(){var o=e.layer.updateParams(p()({},e.props.options.params,{_refreshCounter:r++}));e.removeLayer(),e.layer=o,e.addLayerInternal(t)}),e.props.options.refresh)}})),w(P(e),"removeLayer",(function(t){var r=t||e.provider;r&&e.props.map.imageryLayers.remove(r)})),e}return t=c,(r=[{key:"componentDidMount",value:function(){this.createLayer(this.props.type,this.props.options,this.props.position,this.props.map,this.props.securityToken),this.props.options&&this.layer&&this.getVisibilityOption(this.props)&&(this.addLayer(this.props),this.updateZIndex())}},{key:"UNSAFE_componentWillReceiveProps",value:function(e){var t=this;this.setLayerVisibility(e);var r=e.options&&void 0!==e.options.opacity?e.options.opacity:1;if(this.setLayerOpacity(r),e.position!==this.props.position&&(this.updateZIndex(e.position),this.provider&&(this.provider._position=e.position)),this.props.options&&this.props.options.params&&this.layer.updateParams&&e.options.visibility&&Object.keys(this.props.options.params).reduce((function(r,o){return e.options.params[o]!==t.props.options.params[o]||r}),!1)){var o=this.provider,n=this.layer.updateParams(e.options.params);this.layer=n,this.addLayer(e),setTimeout((function(){t.removeLayer(o)}),1e3)}this.updateLayer(e,this.props)}},{key:"componentWillUnmount",value:function(){this.layer&&this.props.map&&!this.props.map.isDestroyed()&&(this.layer.detached?this.layer.remove():(this.layer.destroy&&this.layer.destroy(),this.props.map.imageryLayers.remove(this.provider)),this.refreshTimer&&clearInterval(this.refreshTimer))}},{key:"render",value:function(){var e=this;if(this.props.children){var t=this.layer,r=t?n().Children.map(this.props.children,(function(r){return r?n().cloneElement(r,{container:t,styleName:e.props.options&&e.props.options.styleName}):null})):null;return n().createElement(n().Fragment,null,r)}return a().renderLayer(this.props.type,this.props.options,this.props.map,this.props.map.id,this.layer)}}])&&g(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),c}(n().Component);w(T,"propTypes",{map:u().object,type:u().string,options:u().object,onCreationError:u().func,position:u().number,securityToken:u().string,zoom:u().number});const _=T},72892:(e,t,r)=>{"use strict";r.d(t,{Z:()=>H});var o=r(13842),n=r.n(o),i=r(75263),a=r.n(i),s=r(2822),p=r.n(s),c=r(21413),u=r.n(c),l=r(91621),f=r.n(l),y=r(37275),m=r(33353),h=r.n(m),d=r(52259),v=r(10525),g=r(37295),b=r.n(g),O=r(98140),P=r.n(O);function E(e){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},E(e)}var w=["type"];function T(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function _(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function S(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function k(e,t){return k=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},k(e,t)}function C(e,t){if(t&&("object"===E(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return L(e)}function L(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function M(e){return M=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},M(e)}function j(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var I=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");Object.defineProperty(e,"prototype",{value:Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),writable:!1}),t&&k(e,t)}(s,e);var t,r,o,i,a=(o=s,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=M(o);if(i){var r=M(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return C(this,e)});function s(){var e;_(this,s);for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return j(L(e=a.call.apply(a,[this].concat(r))),"state",{}),j(L(e),"onClick",(function(t,r){if(e.props.onClick&&null!==r.position){var o=t.camera.pickEllipsoid(r.position,t.scene.globe.ellipsoid),i=h().getMouseXYZ(t,r)||o&&n().Cartographic.fromCartesian(o);if(i){var a=180*i.latitude/Math.PI,s=180*i.longitude/Math.PI,p=(90-a)/180*e.props.standardHeight*(e.props.zoom+1),c=(180+s)/360*e.props.standardWidth*(e.props.zoom+1);e.props.onClick({pixel:{x:c,y:p},height:e.props.mapOptions&&e.props.mapOptions.terrainProvider?i.height:void 0,cartographic:i,latlng:{lat:a,lng:s},crs:"EPSG:4326"})}}})),j(L(e),"onMouseMove",(function(t){if(e.props.onMouseMove&&t.endPosition){var r=e.map.camera.pickEllipsoid(t.endPosition,e.map.scene.globe.ellipsoid),o=h().getMouseXYZ(e.map,t)||r&&n().Cartographic.fromCartesian(r);if(o){var i=Math.round(o.height);e.props.onMouseMove({y:180*o.latitude/Math.PI,x:180*o.longitude/Math.PI,z:i,crs:"EPSG:4326"})}}})),j(L(e),"getDocument",(function(){return e.props.document||document})),j(L(e),"getMapOptions",(function(e){var t={};if(e.terrainProvider){var r=e.terrainProvider,o=r.type,i=T(r,w);switch(o){case"cesium":t.terrainProvider=new(n().CesiumTerrainProvider)(i);break;case"ellipsoid":t.terrainProvider=new(n().EllipsoidTerrainProvider)}}return b()({},e,t)})),j(L(e),"getCenter",(function(){var t=e.map.camera.positionCartographic;return{longitude:180*t.longitude/Math.PI,latitude:180*t.latitude/Math.PI,height:t.height}})),j(L(e),"getZoomFromHeight",(function(t){return Math.log2(e.props.zoomToHeight/t)+1})),j(L(e),"getHeightFromZoom",(function(t){return e.props.zoomToHeight/Math.pow(2,t-1)})),j(L(e),"gestureStartListener",(function(e){e.preventDefault()})),j(L(e),"setMousePointer",(function(t){e.map&&(f().findDOMNode(L(e)).getElementsByClassName("cesium-viewer")[0].style.cursor=t||"auto")})),j(L(e),"_updateMapPositionFromNewProps",(function(t){var r=e.getCenter(),o=e.getZoomFromHeight(r.height),i=function(e,t){return void 0!==e&&void 0!==t&&e.toFixed(12)-t.toFixed(12)<=1e-12},a=!i(t.center.x,r.longitude)||!i(t.center.y,r.latitude),s=t.zoom!==o;if(a||s){var p={destination:n().Cartesian3.fromDegrees(t.center.x,t.center.y,e.getHeightFromZoom(t.zoom)),orientation:t.viewerOptions.orientation};e.setView(p)}})),j(L(e),"setView",(function(t){e.props.mapOptions&&e.props.mapOptions.flyTo?e.map.camera.flyTo(t,e.props.mapOptions.defaultFlightOptions):e.map.camera.setView(t)})),j(L(e),"subscribeClickEvent",(function(t){var r={LEFT_UP:n().ScreenSpaceEventType.LEFT_UP,LEFT_DOWN:n().ScreenSpaceEventType.LEFT_DOWN,LEFT_CLICK:n().ScreenSpaceEventType.LEFT_CLICK,PINCH_START:n().ScreenSpaceEventType.PINCH_START,PINCH_END:n().ScreenSpaceEventType.PINCH_END,PINCH_MOVE:n().ScreenSpaceEventType.PINCH_MOVE},o=new(p().Subject),i=new(p().Subject);Object.keys(r).forEach((function(t){return e.hand.setInputAction((function(e){i.next({type:r[t],movement:e}),o.next({type:r[t],movement:e})}),r[t])})),i.filter((function(e){return e.type===r.PINCH_END})).switchMap((function(){return p().Observable.of(!0).concat(p().Observable.of(!1).delay(500))})).startWith(!1).switchMap((function(e){return e?p().Observable.never():o})).filter((function(e){return e.type===r.LEFT_DOWN})).switchMap((function(e){var t=e.movement;return o.filter((function(e){return e.type===r.LEFT_CLICK})).takeUntil(p().Observable.timer(500).merge(o.filter((function(e){return e.type!==r.LEFT_UP&&e.type!==r.LEFT_CLICK||e.type===r.LEFT_UP&&(o=t&&t.position,n=e.movement&&e.movement.position,!(o&&n&&o.x===n.x&&o.y===n.y));var o,n}))))})).subscribe((function(r){var o=r.movement;return e.onClick(t,o)})),e.clickStream$=o,e.pauserStream$=i})),j(L(e),"registerHooks",(function(){e.props.hookRegister.registerHook(d.GET_PIXEL_FROM_COORDINATES_HOOK),e.props.hookRegister.registerHook(d.GET_COORDINATES_FROM_PIXEL_HOOK),e.props.hookRegister.registerHook(d.ZOOM_TO_EXTENT_HOOK,(function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=r.crs,i=r.duration,a=(0,v.reprojectBbox)(t,o,"EPSG:4326");if(e.map.camera.flyTo){var s=n().Rectangle.fromDegrees(a[0],a[1],a[2],a[3]);e.map.camera.flyTo({destination:s,duration:i,complete:e.updateMapInfoState})}}))})),j(L(e),"updateMapInfoState",(function(){var t=e.getCenter(),r=e.getZoomFromHeight(t.height),o={height:Math.round(e.props.standardWidth*(r+1)),width:Math.round(e.props.standardHeight*(r+1))};e.props.onMapViewChanges({x:t.longitude,y:t.latitude,crs:"EPSG:4326"},r,{bounds:{minx:-180,miny:-90,maxx:180,maxy:90},crs:"EPSG:4326",rotation:0},o,e.props.id,e.props.projection,{orientation:{heading:e.map.camera.heading,pitch:e.map.camera.pitch,roll:e.map.camera.roll}},(0,d.getResolutions)()[r])})),e}return t=s,(r=[{key:"UNSAFE_componentWillMount",value:function(){this.getDocument().addEventListener("gesturestart",this.gestureStartListener)}},{key:"componentDidMount",value:function(){var e=new(n().Viewer)(this.getDocument().getElementById(this.props.id),b()({baseLayerPicker:!1,animation:!1,fullscreenButton:!1,geocoder:!1,homeButton:!1,infoBox:!1,sceneModePicker:!1,selectionIndicator:!1,timeline:!1,navigationHelpButton:!1,navigationInstructionsInitiallyVisible:!1},this.getMapOptions(this.props.mapOptions)));e.scene.globe.baseColor=n().Color.WHITE,e.imageryLayers.removeAll(),e.camera.moveEnd.addEventListener(this.updateMapInfoState),this.hand=new(n().ScreenSpaceEventHandler)(e.scene.canvas),this.subscribeClickEvent(e),this.hand.setInputAction(P()(this.onMouseMove.bind(this),500),n().ScreenSpaceEventType.MOUSE_MOVE),e.camera.setView({destination:n().Cartesian3.fromDegrees(this.props.center.x,this.props.center.y,this.getHeightFromZoom(this.props.zoom))}),this.setMousePointer(this.props.mousePointer),this.map=e,this.forceUpdate(),this.props.mapOptions.navigationTools&&(this.cesiumNavigation=window.CesiumNavigation,this.cesiumNavigation&&this.cesiumNavigation.navigationInitialization(this.props.id,e)),this.props.registerHooks&&this.registerHooks()}},{key:"UNSAFE_componentWillReceiveProps",value:function(e){return e.mousePointer!==this.props.mousePointer&&this.setMousePointer(e.mousePointer),e.mapStateSource!==this.props.id&&this._updateMapPositionFromNewProps(e),!1}},{key:"componentWillUnmount",value:function(){this.clickStream$.complete(),this.pauserStream$.complete(),this.hand.destroy(),this.getDocument().removeEventListener("gesturestart",this.gestureStartListener),this.map.destroy()}},{key:"render",value:function(){var e=this,t=this.map,r=this.props.projection,o=t?u().Children.map(this.props.children,(function(o){return o?u().cloneElement(o,{map:t,projection:r,onCreationError:e.props.onCreationError,zoom:e.props.zoom}):null})):null;return u().createElement("div",{id:this.props.id},o)}}])&&S(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),s}(u().Component);j(I,"propTypes",{id:a().string,document:a().object,center:y.ZP.PropTypes.center,zoom:a().number.isRequired,mapStateSource:y.ZP.PropTypes.mapStateSource,projection:a().string,onMapViewChanges:a().func,onCreationError:a().func,onClick:a().func,onMouseMove:a().func,mapOptions:a().object,standardWidth:a().number,standardHeight:a().number,mousePointer:a().string,zoomToHeight:a().number,registerHooks:a().bool,hookRegister:a().object,viewerOptions:a().object}),j(I,"defaultProps",{id:"map",onMapViewChanges:function(){},onClick:function(){},onCreationError:function(){},projection:"EPSG:3857",mapOptions:{},standardWidth:512,standardHeight:512,zoomToHeight:8e7,registerHooks:!0,hookRegister:{registerHook:d.registerHook},viewerOptions:{orientation:{heading:0,pitch:-1*Math.PI/2,roll:0}}});const H=I},33353:(e,t,r)=>{var o=r(13842);e.exports={getMouseXYZ:function(e,t){var r=e.scene,n=t.position||t.endPosition;if(!n)return null;var i=e.camera.getPickRay(n),a=e.scene.globe.pick(i,e.scene),s=r._globe.ellipsoid;if(o.defined(a)){var p=s.cartesianToCartographic(a),c=function(e,t){if(null!==t.position){var r=e.scene,o=r._globe.ellipsoid;return r._camera.pickEllipsoid(t.position||t.endPosition,o)}return null}(e,t);return c&&(p.height=r._globe.getHeight(p),p.cartesian=c,p.position=a),p}return null},getMouseTile:function(e,t){var r=e.scene;if(!t.position)return null;var o=e.camera.getPickRay(t.position);return e.scene.globe.pickTile(o,r)}}}}]);
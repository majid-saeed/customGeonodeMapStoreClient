(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[7161],{58135:function(t,e){var n,a,i;!function(s,r){"use strict";"object"==typeof t.exports?t.exports=r():(a=[],void 0===(i="function"==typeof(n=r)?n.apply(e,a):n)||(t.exports=i))}("object"==typeof window&&window,(function(){"use strict";function t(e){if(!(this instanceof t))return new t(e);this._LRUCacheState=new n(e)}var e=t.prototype;function n(t){this.capacity=t>0?+t:Number.MAX_SAFE_INTEGER||Number.MAX_VALUE,this.data=Object.create?Object.create(null):{},this.hash=Object.create?Object.create(null):{},this.linkedList=new a}function a(){this.length=0,this.head=null,this.end=null}function i(t){this.key=t,this.p=null,this.n=null}function s(t,e){e!==t.head&&(t.end?t.end===e&&(t.end=e.n):t.end=e,r(e.n,e.p),r(e,t.head),t.head=e,t.head.n=null)}function r(t,e){t!==e&&(t&&(t.p=e),e&&(e.n=t))}return e.get=function(t){var e=this._LRUCacheState,n=e.hash[t];if(n)return s(e.linkedList,n),e.data[t]},e.set=function(t,e){var n=this._LRUCacheState,a=n.hash[t];return void 0===e||(a||(n.hash[t]=new i(t),n.linkedList.length+=1,a=n.hash[t]),s(n.linkedList,a),n.data[t]=e,n.linkedList.length>n.capacity&&this.remove(n.linkedList.end.key)),this},e.update=function(t,e){return this.has(t)&&this.set(t,e(this.get(t))),this},e.remove=function(t){var e=this._LRUCacheState,n=e.hash[t];return n?(n===e.linkedList.head&&(e.linkedList.head=n.p),n===e.linkedList.end&&(e.linkedList.end=n.n),r(n.n,n.p),delete e.hash[t],delete e.data[t],e.linkedList.length-=1,this):this},e.removeAll=function(){return this._LRUCacheState=new n(this._LRUCacheState.capacity),this},e.info=function(){var t=this._LRUCacheState;return{capacity:t.capacity,length:t.linkedList.length}},e.keys=function(){for(var t=[],e=this._LRUCacheState.linkedList.head;e;)t.push(e.key),e=e.p;return t},e.has=function(t){return!!this._LRUCacheState.hash[t]},e.staleKey=function(){return this._LRUCacheState.linkedList.end&&this._LRUCacheState.linkedList.end.key},e.popStale=function(){var t=this.staleKey();if(!t)return null;var e=[t,this._LRUCacheState.data[t]];return this.remove(t),e},t}))},48507:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>a});const a=function(){return n(35701),{Map:n(39726).Z,Layer:n(52792).Z,Feature:n(44948).Z,MeasurementSupport:n(42047).Z,Overview:n(21975),ScaleBar:n(20564),DrawSupport:n(91753),PopupSupport:n(67465).Z}}},3901:(t,e,n)=>{"use strict";n.d(e,{qR:()=>o,yQ:()=>l});var a=n(75875),i=n.n(a),s=n(58135),r=n.n(s),h=n(32681),u=new(r())(100),c=function(t,e,n,a){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:-9999,s=arguments.length>5&&void 0!==arguments[5]&&arguments[5],r=a*t+n;try{var h=e.dataView.getInt16(2*r,s);if(h!==i&&32767!==h&&-32768!==h)return h}catch(t){}return null},o=function(t,e,n){return u.has(n)?null:new h.Promise((function(a,s){i().get(t,{responseType:"arraybuffer"}).then((function(t){!function(t,e,n){u.set(n,{data:t,dataView:new DataView(t),coords:e,current:!0,status:"success"})}(t.data,e,n),a()})).catch((function(t){!function(t,e,n){u.set(n,{coords:e,current:!0,status:"error: "+t})}(t.message,e,n),s(t)}))}))},l=function(t,e,n){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:-9999,i=arguments.length>4&&void 0!==arguments[4]&&arguments[4],s=u.get(t);return s&&"success"===s.status?{available:!0,value:c(n,s,e.x,e.y,a,i)}:s&&"loading"===s.status?{available:!1,message:"elevationLoading"}:s&&"error"===s.status?{available:!1,message:"elevationLoadingError"}:{available:!1,message:"elevationNotAvailable"}}}}]);
(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[5120],{21262:(r,e,t)=>{var o=t(46553);r.exports=function(r,e,t){for(var n=-1,i=r.length;++n<i;){var a=r[n],u=e(a);if(null!=u&&(void 0===s?u==u&&!o(u):t(u,s)))var s=u,c=a}return c}},85812:r=>{r.exports=function(r,e){return r<e}},77820:(r,e,t)=>{var o=t(59130),n=t(71445);r.exports=function(r,e){var t=-1,i=n(r)?Array(r.length):[];return o(r,(function(r,o,n){i[++t]=e(r,o,n)})),i}},84847:(r,e,t)=>{var o=t(54528),n=t(83733),i=t(77820),a=t(65491),u=t(75542),s=t(80961),c=t(70475);r.exports=function(r,e,t){var p=-1;e=o(e.length?e:[c],u(n));var f=i(r,(function(r,t,n){return{criteria:o(e,(function(e){return e(r)})),index:++p,value:r}}));return a(f,(function(r,e){return s(r,e,t)}))}},17472:r=>{r.exports=function(r){return function(e){return null==r?void 0:r[e]}}},65491:r=>{r.exports=function(r,e){var t=r.length;for(r.sort(e);t--;)r[t]=r[t].value;return r}},57312:(r,e,t)=>{var o=t(46553);r.exports=function(r,e){if(r!==e){var t=void 0!==r,n=null===r,i=r==r,a=o(r),u=void 0!==e,s=null===e,c=e==e,p=o(e);if(!s&&!p&&!a&&r>e||a&&u&&c&&!s&&!p||n&&u&&c||!t&&c||!i)return 1;if(!n&&!a&&!p&&r<e||p&&t&&i&&!n&&!a||s&&t&&i||!u&&i||!c)return-1}return 0}},80961:(r,e,t)=>{var o=t(57312);r.exports=function(r,e,t){for(var n=-1,i=r.criteria,a=e.criteria,u=i.length,s=t.length;++n<u;){var c=o(i[n],a[n]);if(c)return n>=s?c:c*("desc"==t[n]?-1:1)}return r.index-e.index}},82811:(r,e,t)=>{var o=t(72484),n=Object.prototype,i=n.hasOwnProperty;r.exports=function(r,e,t,a){return void 0===r||o(r,n[t])&&!i.call(a,t)?e:r}},36178:(r,e,t)=>{var o=t(17472)({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"});r.exports=o},56095:r=>{var e={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"};r.exports=function(r){return"\\"+e[r]}},50916:r=>{r.exports=/<%-([\s\S]+?)%>/g},93917:r=>{r.exports=/<%([\s\S]+?)%>/g},12829:r=>{r.exports=/<%=([\s\S]+?)%>/g},79697:(r,e,t)=>{var o=t(69960),n=t(6271),i=t(83638),a=n((function(r,e,t,n){o(e,i(e),r,n)}));r.exports=a},11548:(r,e,t)=>{var o=t(70838),n=t(98554),i=t(30915),a=n((function(r,e){try{return o(r,void 0,e)}catch(r){return i(r)?r:new Error(r)}}));r.exports=a},46684:(r,e,t)=>{var o=t(36178),n=t(30851),i=/[&<>"']/g,a=RegExp(i.source);r.exports=function(r){return(r=n(r))&&a.test(r)?r.replace(i,o):r}},74836:r=>{r.exports=function(r){return void 0===r}},48397:(r,e,t)=>{var o=t(19911),n=t(72553),i=t(83733);r.exports=function(r,e){var t={};return e=i(e,3),n(r,(function(r,n,i){o(t,e(r,n,i),r)})),t}},92062:(r,e,t)=>{var o=t(21262),n=t(83733),i=t(85812);r.exports=function(r,e){return r&&r.length?o(r,n(e,2),i):void 0}},33398:(r,e,t)=>{var o=t(94753),n=t(84847),i=t(98554),a=t(85270),u=i((function(r,e){if(null==r)return[];var t=e.length;return t>1&&a(r,e[0],e[1])?e=[]:t>2&&a(e[0],e[1],e[2])&&(e=[e[0]]),n(r,o(e,1),[])}));r.exports=u},71267:(r,e,t)=>{var o=t(79697),n=t(11548),i=t(46329),a=t(82811),u=t(56095),s=t(30915),c=t(85270),p=t(97195),f=t(12829),l=t(44089),g=t(30851),v=/\b__p \+= '';/g,y=/\b(__p \+=) '' \+/g,d=/(__e\(.*?\)|\b__t\)) \+\n'';/g,h=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,m=/($^)/,w=/['\n\r\u2028\u2029\\]/g,x=Object.prototype.hasOwnProperty;r.exports=function(r,e,t){var _=l.imports._.templateSettings||l;t&&c(r,e,t)&&(e=void 0),r=g(r),e=o({},e,_,a);var E,b,M=o({},e.imports,_.imports,a),P=p(M),C=i(M,P),F=0,q=e.interpolate||m,A="__p += '",j=RegExp((e.escape||m).source+"|"+q.source+"|"+(q===f?h:m).source+"|"+(e.evaluate||m).source+"|$","g"),I=x.call(e,"sourceURL")?"//# sourceURL="+(e.sourceURL+"").replace(/[\r\n]/g," ")+"\n":"";r.replace(j,(function(e,t,o,n,i,a){return o||(o=n),A+=r.slice(F,a).replace(w,u),t&&(E=!0,A+="' +\n__e("+t+") +\n'"),i&&(b=!0,A+="';\n"+i+";\n__p += '"),o&&(A+="' +\n((__t = ("+o+")) == null ? '' : __t) +\n'"),F=a+e.length,e})),A+="';\n";var S=x.call(e,"variable")&&e.variable;S||(A="with (obj) {\n"+A+"\n}\n"),A=(b?A.replace(v,""):A).replace(y,"$1").replace(d,"$1;"),A="function("+(S||"obj")+") {\n"+(S?"":"obj || (obj = {});\n")+"var __t, __p = ''"+(E?", __e = _.escape":"")+(b?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+A+"return __p\n}";var k=n((function(){return Function(P,I+"return "+A).apply(void 0,C)}));if(k.source=A,s(k))throw k;return k}},44089:(r,e,t)=>{var o=t(46684),n={escape:t(50916),evaluate:t(93917),interpolate:t(12829),variable:"",imports:{_:{escape:o}}};r.exports=n},91131:(r,e,t)=>{var o=t(67e3);r.exports=function(r,e){return e="function"==typeof e?e:void 0,r&&r.length?o(r,void 0,e):[]}},61588:(r,e,t)=>{var o=t(7294),n=t(14724).point;r.exports=function(r){var e=o(r),t=(e[0]+e[2])/2,i=(e[1]+e[3])/2;return n([t,i])}},53625:(r,e,t)=>{var o=t(31743).getCoord,n=t(14724).radiansToDistance;r.exports=function(r,e,t){var i=Math.PI/180,a=o(r),u=o(e),s=i*(u[1]-a[1]),c=i*(u[0]-a[0]),p=i*a[1],f=i*u[1],l=Math.pow(Math.sin(s/2),2)+Math.pow(Math.sin(c/2),2)*Math.cos(p)*Math.cos(f);return n(2*Math.atan2(Math.sqrt(l),Math.sqrt(1-l)),t)}},26137:(r,e,t)=>{var o=t(14724).featureCollection,n=t(76802).pZ,i=t(14724).point;r.exports=function(r){var e=[];return n(r,(function(r){e.push(i(r))})),o(e)}},14724:r=>{function e(r,e){return{type:"Feature",properties:e||{},geometry:r}}r.exports.feature=e,r.exports.point=function(r,t){if(!Array.isArray(r))throw new Error("Coordinates must be an array");if(r.length<2)throw new Error("Coordinates must be at least 2 numbers long");return e({type:"Point",coordinates:r.slice()},t)},r.exports.polygon=function(r,t){if(!r)throw new Error("No coordinates passed");for(var o=0;o<r.length;o++){var n=r[o];if(n.length<4)throw new Error("Each LinearRing of a Polygon must have 4 or more Positions.");for(var i=0;i<n[n.length-1].length;i++)if(n[n.length-1][i]!==n[0][i])throw new Error("First and last Position are not equivalent.")}return e({type:"Polygon",coordinates:r},t)},r.exports.lineString=function(r,t){if(!r)throw new Error("No coordinates passed");return e({type:"LineString",coordinates:r},t)},r.exports.featureCollection=function(r){return{type:"FeatureCollection",features:r}},r.exports.multiLineString=function(r,t){if(!r)throw new Error("No coordinates passed");return e({type:"MultiLineString",coordinates:r},t)},r.exports.multiPoint=function(r,t){if(!r)throw new Error("No coordinates passed");return e({type:"MultiPoint",coordinates:r},t)},r.exports.multiPolygon=function(r,t){if(!r)throw new Error("No coordinates passed");return e({type:"MultiPolygon",coordinates:r},t)},r.exports.geometryCollection=function(r,t){return e({type:"GeometryCollection",geometries:r},t)};var t={miles:3960,nauticalmiles:3441.145,degrees:57.2957795,radians:1,inches:250905600,yards:6969600,meters:6373e3,metres:6373e3,kilometers:6373,kilometres:6373};r.exports.radiansToDistance=function(r,e){var o=t[e||"kilometers"];if(void 0===o)throw new Error("Invalid unit");return r*o},r.exports.distanceToRadians=function(r,e){var o=t[e||"kilometers"];if(void 0===o)throw new Error("Invalid unit");return r/o},r.exports.distanceToDegrees=function(r,e){var o=t[e||"kilometers"];if(void 0===o)throw new Error("Invalid unit");return r/o*57.2958}},63694:(r,e,t)=>{var o=t(31743);function n(r,e){for(var t=!1,o=0,n=e.length-1;o<e.length;n=o++){var i=e[o][0],a=e[o][1],u=e[n][0],s=e[n][1];a>r[1]!=s>r[1]&&r[0]<(u-i)*(r[1]-a)/(s-a)+i&&(t=!t)}return t}r.exports=function(r,e){var t=o.getCoord(r),i=e.geometry.coordinates;"Polygon"===e.geometry.type&&(i=[i]);for(var a=0,u=!1;a<i.length&&!u;a++)if(n(t,i[a][0])){for(var s=!1,c=1;c<i[a].length&&!s;)n(t,i[a][c])&&(s=!0),c++;s||(u=!0)}return u}},31743:r=>{r.exports.geojsonType=function(r,e,t){if(!e||!t)throw new Error("type and name required");if(!r||r.type!==e)throw new Error("Invalid input to "+t+": must be a "+e+", given "+r.type)},r.exports.collectionOf=function(r,e,t){if(!t)throw new Error(".collectionOf() requires a name");if(!r||"FeatureCollection"!==r.type)throw new Error("Invalid input to "+t+", FeatureCollection required");for(var o=0;o<r.features.length;o++){var n=r.features[o];if(!n||"Feature"!==n.type||!n.geometry)throw new Error("Invalid input to "+t+", Feature with geometry required");if(!n.geometry||n.geometry.type!==e)throw new Error("Invalid input to "+t+": must be a "+e+", given "+n.geometry.type)}},r.exports.featureOf=function(r,e,t){if(!t)throw new Error(".featureOf() requires a name");if(!r||"Feature"!==r.type||!r.geometry)throw new Error("Invalid input to "+t+", Feature with geometry required");if(!r.geometry||r.geometry.type!==e)throw new Error("Invalid input to "+t+": must be a "+e+", given "+r.geometry.type)},r.exports.getCoord=function(r){if(Array.isArray(r)&&"number"==typeof r[0]&&"number"==typeof r[1])return r;if(r){if("Feature"===r.type&&r.geometry&&"Point"===r.geometry.type&&Array.isArray(r.geometry.coordinates))return r.geometry.coordinates;if("Point"===r.type&&Array.isArray(r.coordinates))return r.coordinates}throw new Error("A coordinate, feature, or point geometry is required")}},88889:(r,e,t)=>{var o=t(14724).featureCollection,n=t(61588),i=t(53625),a=t(63694),u=t(26137);function s(r,e,t,o,n,i){if(Math.sqrt((n-t)*(n-t)+(i-o)*(i-o))===Math.sqrt((r-t)*(r-t)+(e-o)*(e-o))+Math.sqrt((n-r)*(n-r)+(i-e)*(i-e)))return!0}r.exports=function(r){"FeatureCollection"!==r.type&&("Feature"!==r.type&&(r={type:"Feature",geometry:r,properties:{}}),r=o([r]));for(var e=n(r),t=!1,c=0;!t&&c<r.features.length;){var p,f=r.features[c].geometry,l=!1;if("Point"===f.type)e.geometry.coordinates[0]===f.coordinates[0]&&e.geometry.coordinates[1]===f.coordinates[1]&&(t=!0);else if("MultiPoint"===f.type){var g=!1;for(p=0;!g&&p<f.coordinates.length;)e.geometry.coordinates[0]===f.coordinates[p][0]&&e.geometry.coordinates[1]===f.coordinates[p][1]&&(t=!0,g=!0),p++}else if("LineString"===f.type)for(p=0;!l&&p<f.coordinates.length-1;)s(e.geometry.coordinates[0],e.geometry.coordinates[1],f.coordinates[p][0],f.coordinates[p][1],f.coordinates[p+1][0],f.coordinates[p+1][1])&&(l=!0,t=!0),p++;else if("MultiLineString"===f.type)for(var v=0;v<f.coordinates.length;){l=!1,p=0;for(var y=f.coordinates[v];!l&&p<y.length-1;)s(e.geometry.coordinates[0],e.geometry.coordinates[1],y[p][0],y[p][1],y[p+1][0],y[p+1][1])&&(l=!0,t=!0),p++;v++}else"Polygon"!==f.type&&"MultiPolygon"!==f.type||a(e,{type:"Feature",geometry:f,properties:{}})&&(t=!0);c++}if(t)return e;var d,h=o([]);for(c=0;c<r.features.length;c++)h.features=h.features.concat(u(r.features[c]).features);var m=1/0;for(c=0;c<h.features.length;c++){var w=i(e,h.features[c],"miles");w<m&&(m=w,d=h.features[c])}return d}}}]);
webpackJsonp([1],{863:function(e,t,a){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=a(33),s=(a.n(r),a(34)),p=a.n(s),c=a(17),l=(a.n(c),a(18)),d=a.n(l),h=a(11),u=(a.n(h),a(12)),m=a.n(u),f=a(37),y=(a.n(f),a(38)),g=a.n(y),v=a(9),w=(a.n(v),a(10)),E=a.n(w),T=a(0),S=a.n(T),M=a(2),P=a(13),k=a(16),b=a.n(k),I=a(277),A=a.n(I),L=a(1),C=a(907),N=a(148),O=(a.n(N),function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}()),D=function(e){function t(e){n(this,t);var a=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.typeObj=[{title:"\u51fa\u884c\u5fc5\u770b",list:[{name:"\u666f\u533a",type:"scenic"},{name:"\u9152\u5e97",type:"hotel"},{name:"\u9910\u996e",type:"food"},{name:"\u8d2d\u7269",type:"shopping"},{name:"\u5a31\u4e50",type:"fun"},{name:"\u4f53\u80b2\u9986/\u6e38\u4e50\u56ed",type:"stadiumAmusementPark"},{name:"\u591c\u5e02\u70e7\u70e4",type:"barbecueNightMarket"}]},{title:"\u751f\u6d3b\u52a9\u624b",list:[{name:"\u516c\u5395",type:"publicToilet"},{name:"\u81ea\u884c\u8f66",type:"bicycle"},{name:"\u505c\u8f66\u573a",type:"parking"},{name:"\u533b\u9662",type:"hospital"},{name:"\u957f\u9014\u6c7d\u8f66\u7ad9",type:"busStation"},{name:"\u7269\u6d41\u5feb\u9012",type:"express"},{name:"\u6c7d\u4fee\u5382",type:"repairFactory"},{name:"\u5546\u573a",type:"market"}]}],a.state={mapHeight:0,panelBottom:0},a.deSelectPoi=a.deSelectPoi.bind(a),a.searchTypeButtonTapped=a.searchTypeButtonTapped.bind(a),a.hidePanel=a.hidePanel.bind(a),a.togglePanel=a.togglePanel.bind(a),a.searchBarFocus=a.searchBarFocus.bind(a),a.dailPhone=a.dailPhone.bind(a),a.navTo=a.navTo.bind(a),a.showDetails=a.showDetails.bind(a),a}return o(t,e),O(t,[{key:"componentDidMount",value:function(){this.props.dispatch(Object(C.c)(!0)),this.updateWindowDimensions()}},{key:"componentWillReceiveProps",value:function(e){var t=!this.props.baiduMapInited&&this.props.baiduMapInited!==e.baiduMapInited;t=t||!this.props.lat&&this.props.lat!==e.lat,t&&this.updateFromLocation(e),this.props.searchType!==e.searchType&&this.props.dispatch(Object(C.a)(e.searchType,e.keywords,e.lat,e.lng)),this.props.dataList!==e.dataList&&this.addMarkers(e.dataList,e.searchType)}},{key:"render",value:function(){var e=this;return S.a.createElement("div",{className:"elementMapPage"},S.a.createElement(m.a,{mode:"dark",className:"navBar",icon:S.a.createElement(E.a,{type:"left"}),onLeftClick:function(){var t=e.props.match.params.code,a=e.props.dispatch;e.props.history.goBack(),a(Object(C.b)(t))}},S.a.createElement(g.a,{placeholder:"\u8bf7\u8f93\u5165\u5173\u952e\u5b57",maxLength:20,value:void 0===this.props.keywords?"":this.props.keywords,onFocus:function(){e.searchBarFocus()},disabled:!!this.isEntitySearchType(),onChange:function(t){e.updateKeyword(t)},onCancel:function(t){e.updateKeyword(""),e.searchByKeyword("")},onSubmit:function(t){e.updateKeyword(t),e.searchByKeyword(t)}})),S.a.createElement(P.a,{ref:function(t){e.scrollView=t}},S.a.createElement("div",{id:"elementMap",ref:function(t){e.mapView=t},style:{height:this.state.mapHeight+"px"}}),S.a.createElement(A.a,{transitionName:"elementMapPanel",transitionAppearTimeout:500,transitionEnterTimeout:500,transitionLeaveTimeout:300},this.props.isPanelShowing?S.a.createElement("div",{key:"1",className:"mapTypePanel",onClick:this.hidePanel},this.renderPanelDetails()):null),this.renderFooterDetails(),this.renderSegmentButtonView(),this.props.isFetching?S.a.createElement(d.a,{toast:!0,text:"Loading..."}):null))}},{key:"renderSegmentButtonView",value:function(){var e=this,t=this.getSearchTypeName();return t&&t.length>0?S.a.createElement("div",{className:"searchTypeName",onClick:function(){return e.togglePanel()}},t):null}},{key:"renderPanelDetails",value:function(){var e=this;return S.a.createElement("div",{style:{position:"absolute",top:"0px",bottom:"30%",width:"100%",overflow:"scroll",backgroundColor:"#fff"}},S.a.createElement("div",{style:{overflow:"scroll",position:"absolute",top:"80px",bottom:"0px"}},this.typeObj.map(function(t,a){return S.a.createElement("div",{key:t.title,className:"typeBoxView"},S.a.createElement("div",{className:"typeName"},t.title),S.a.createElement("div",{className:"typeView"},t.list.map(function(t,a){return S.a.createElement("div",{key:t.type,onClick:function(){return e.searchTypeButtonTapped(t.type)},className:"typeButton"},t.name)})))})))}},{key:"renderFooterDetails",value:function(){if(!this.props.selectedItem)return null;var e=a(908),t=a(909),n=a(910);return S.a.createElement("div",{className:"footerDetails"},S.a.createElement("div",{className:"footerDetailsName"},this.props.selectedItem.name),S.a.createElement("div",{className:"footerDetailsAddress"},this.props.selectedItem.distance,"\xa0\xa0\xa0\xa0",this.props.selectedItem.address),S.a.createElement("div",{className:"footerDetailsButtons"},S.a.createElement("div",{className:this.props.selectedItem.telephone?"footerDetailsButton":"footerDetailsButton footerDetailsButtonDisabled",onClick:this.dailPhone},S.a.createElement("img",{src:e,alt:""})," \u7535\u8bdd"),S.a.createElement("div",{className:"footerDetailsSplitLine"}),S.a.createElement("div",{className:this.props.selectedItem.latitude&&this.props.selectedItem.longitude?"footerDetailsButton":"footerDetailsButton footerDetailsButtonDisabled",onClick:this.navTo},S.a.createElement("img",{src:t,alt:""})," \u5230\u8fd9\u53bb"),S.a.createElement("div",{className:"footerDetailsSplitLine"}),S.a.createElement("div",{className:this.isEntitySearchType()?"footerDetailsButton footerDetailsButtonDisabled":"footerDetailsButton",onClick:this.showDetails},S.a.createElement("img",{src:n,alt:""})," \u8be6\u60c5")))}},{key:"initMap",value:function(){this.markerIcon=new window.BMap.Icon(a(273),new window.BMap.Size(30,30),{anchor:new window.BMap.Size(15,30),imageSize:new window.BMap.Size(30,30)}),this.selectedMarkerIcon=new window.BMap.Icon(a(911),new window.BMap.Size(30,30),{anchor:new window.BMap.Size(15,30),imageSize:new window.BMap.Size(30,30)}),this.map=this.map?this.map:new window.BMap.Map("elementMap"),this.map.centerAndZoom(new window.BMap.Point(L.b,L.a),16),this.map.addControl(new window.BMap.NavigationControl({type:window.BMAP_NAVIGATION_CONTROL_SMALL,anchor:window.BMAP_ANCHOR_BOTTOM_RIGHT,enableGeolocation:!0,offset:new window.BMap.Size(20,20)})),this.map.addControl(new window.BMap.GeolocationControl({enableAutoLocation:!1})),this.map.addEventListener("click",this.deSelectPoi),this.map.addEventListener("dragstart",this.deSelectPoi)}},{key:"updateWindowDimensions",value:function(){var e=this,t=window.innerHeight-b.a.findDOMNode(this).parentNode.offsetTop;this.setState({mapHeight:t,panelBottom:window.innerHeight/3},function(){e.updateFromLocation(e.props)})}},{key:"updateFromLocation",value:function(e){if(e.baiduMapInited&&this.initMap(),e.baiduMapInited&&e.lat&&e.lng&&(!e.searchType||e.searchType.length<=0)){this.props.dispatch(Object(C.g)("scenic"))}else e.dataList&&e.searchType&&(this.addMarkers(e.dataList,e.searchType),this.map.setZoom(e.mapZoom),this.map.setCenter(new window.BMap.Point(e.centerLng,e.centerLat)))}},{key:"updateKeyword",value:function(e){this.props.dispatch(Object(C.e)(e))}},{key:"searchByKeyword",value:function(e){this.props.dispatch(Object(C.a)(this.props.searchType,e,this.props.lat,this.props.lng))}},{key:"searchBarFocus",value:function(){if(this.deSelectPoi(),this.hidePanel(),this.isEntitySearchType())return void p.a.success("\u6682\u53ea\u652f\u6301\u666f\u533a\uff0c\u9152\u5e97\uff0c\u9910\u996e\uff0c\u8d2d\u7269\uff0c\u5a31\u4e50\u7684\u5173\u952e\u5b57\u67e5\u8be2\uff01",2)}},{key:"isEntitySearchType",value:function(){var e=this.props.searchType;return!("scenic"===e||"hotel"===e||"food"===e||"shopping"===e||"fun"===e)}},{key:"togglePanel",value:function(){this.deSelectPoi(),this.props.dispatch(Object(C.d)(!this.props.isPanelShowing))}},{key:"hidePanel",value:function(){this.deSelectPoi(),this.props.dispatch(Object(C.d)(!1))}},{key:"addMarkers",value:function(e,t){var a=this;if(this.props.dispatch(Object(C.c)(!1)),this.map.clearOverlays(),this.map&&e&&0!==e.length){this.markers=[];for(var n=[],i=0;i<e.length;i++)!function(i){var o=e[i],r=void 0;r="scenic"===t||"hotel"===t||"food"===t||"shopping"===t||"fun"===t?new window.BMap.Point(o.Longitude,o.Latitude):new window.BMap.Point(o.longitude,o.latitude);var s=new window.BMap.Marker(r,{icon:a.markerIcon});s.addEventListener("click",function(e){e.domEvent.stopPropagation(),this.markerTapped(i)}.bind(a)),n.push(r),a.markers.push(s)}(i);this.markerClusterer||(this.markerClusterer=new window.BMapLib.MarkerClusterer(this.map)),this.markerClusterer.clearMarkers(),this.markerClusterer.addMarkers(this.markers),this.map.setViewport(n)}}},{key:"deSelectPoi",value:function(){if(this.props.dispatch(Object(C.h)(null)),this.markers&&this.markers.length>0){for(var e=0;e<this.markers.length;e++){var t=this.markers[e];t.getIcon()!==this.markerIcon&&t.setIcon(this.markerIcon)}this.updateMapControlPosition(80)}}},{key:"updateMapControlPosition",value:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:140,t=this.mapView.getElementsByClassName("BMap_noprint"),a=0;a<t.length;a++){t[a].style.cssText+="bottom: "+e+"px;"}}},{key:"markerTapped",value:function(e){this.updateMapControlPosition();for(var t=0;t<this.markers.length;t++){var a=this.markers[t];e===t?a.setIcon(this.selectedMarkerIcon):a.getIcon()!==this.markerIcon&&a.setIcon(this.markerIcon)}var n=this.toMapSelectedItem(this.props.dataList[e]);this.props.dispatch(Object(C.h)(n))}},{key:"getSearchTypeName",value:function(){for(var e=this.props.searchType,t="",a=0;a<this.typeObj.length;a++){for(var n=this.typeObj[a].list,i=0;i<n.length;i++){var o=n[i];if(o.type===e){t=o.name;break}}if(t&&t.length>0)break}return t}},{key:"toMapSelectedItem",value:function(e){var t=void 0,a=void 0,n=void 0,i=void 0,o=void 0,r=void 0,s=void 0,p=void 0,c=this.props.searchType,l=this.getSearchTypeName();return e.Distance=e.Distance?e.Distance:e.distance,e.distance=e.distance?e.distance:e.Distance,"scenic"===c||"hotel"===c?(t=e.CnName,a=e.Code,n=e.Distance.toFixed(1)+"\u5343\u7c73",i="scenic"===c?e.ShopTelePhone:e.Telephone,o=e.Address&&e.Address.length>0?e.Address:"\u5730\u5740\u6682\u65e0",r=e.Latitude,s=e.Longitude,e.GetImage&&(p=e.GetImage.ImageFrontUrl)):"food"===c||"shopping"===c||"fun"===c?(t=e.CnName,a=e.Code,n=e.distance.toFixed(1)+"\u5343\u7c73",i="food"===c?e.ReservationCall:e.Telephone,o=e.Address&&e.Address.length>0?e.Address:"\u5730\u5740\u6682\u65e0",r=e.Latitude,s=e.Longitude,e.GetImage&&(p=e.GetImage.SmallImageFrontUrl)):(t=e.cnName,a=e.code,n=e.distance.toFixed(1)+"\u5343\u7c73",i=null,o=e.address&&e.address.length>0?e.address:l.replace("/",",")+"  \u5730\u5740\u6682\u65e0",r=e.latitude,s=e.longitude,e.images&&(p=e.images.smallImageFrontUrl)),{name:t,code:a,distance:n,telephone:i,address:o,latitude:r,longitude:s,imageUrl:p,type:c}}},{key:"searchTypeButtonTapped",value:function(e){var t=this;this.deSelectPoi(),this.props.searchType!==e&&(this.props.keywords&&this.props.keywords.length>0?this.props.dispatch(Object(C.e)("")).then(function(){return t.props.dispatch(Object(C.g)(e))}):this.props.dispatch(Object(C.g)(e)))}},{key:"setMapZoomAndCenterLocation",value:function(){if(this.map){var e=this.map.getCenter(),t=this.map.getZoom(),a=e.lat,n=e.lng;this.props.dispatch(Object(C.f)(t,a,n))}}},{key:"dailPhone",value:function(){this.setMapZoomAndCenterLocation();var e=this.props.selectedItem;e.telephone&&e.telephone.length>0&&window.open("tel://"+e.telephone,"_self")}},{key:"navTo",value:function(){this.setMapZoomAndCenterLocation();var e=this.props.selectedItem;e.latitude&&e.latitude>0&&e.longitude&&e.longitude>0&&this.props.history.push("/map/mapNav/"+e.code+"/"+e.latitude+"/"+e.longitude)}},{key:"showDetails",value:function(){if(!this.isEntitySearchType()){this.setMapZoomAndCenterLocation();var e=this.props.selectedItem,t=this.props.searchType;"scenic"===t?this.props.history.push("/scenic/detail/"+e.code):"hotel"===t?this.props.history.push("/hotel/detail/"+e.code):"food"===t?this.props.history.push("/restaurant/detail/"+e.code):"shopping"===t?this.props.history.push("/shopping/detail/"+e.code):"fun"===t&&this.props.history.push("/fun/detail/"+e.code)}}}]),t}(T.Component),B=function(e,t){var a=e.map.elementMap;return Object.assign({},a,{baiduMapInited:e.system.baiduMapInited,markerClusterInited:e.system.markerClusterInited,lat:e.system.latitude,lng:e.system.longitude})};D=Object(M.b)(B)(D),t.default=D},907:function(e,t,a){"use strict";function n(){return{type:P.c.MAP.ELEMENTMAP.GO_BACK}}function i(e){return{type:P.c.MAP.ELEMENTMAP.IS_PANEL_SHOWING_CHANGE,isPanelShowing:e}}function o(e){return{type:P.c.MAP.ELEMENTMAP.IS_FETCHING_CHANGE,isFetching:e}}function r(e){return function(t,a){return t(s(e)),new Promise(function(e){e()})}}function s(e){return{type:P.c.MAP.ELEMENTMAP.KEYWORDS_CHANGE,keywords:e}}function p(e,t,a){return function(n,i){return n(c(e,t,a)),new Promise(function(e){e()})}}function c(e,t,a){return{type:P.c.MAP.ELEMENTMAP.MAPZOOM_AND_CENTERLOCATION_CHANGE,mapZoom:e,centerLat:t,centerLng:a}}function l(e){return{type:P.c.MAP.ELEMENTMAP.SEARCHTYPE_CHANGE,searchType:e}}function d(e,t,a,n){return function(i,o){return i(T(e,t,a,n)),u(e,t,a,n).then(function(o){i(S(e,t,a,n,o))}).catch(function(o){i(M(e,t,a,n,o))})}}function h(e){return{type:P.c.MAP.ELEMENTMAP.SELECTEDITEM_CHANGE,selectedItem:e}}function u(e,t,a,n){return"scenic"===e?m(e,t,a,n):"hotel"===e?f(e,t,a,n):"food"===e?y(e,t,a,n):"shopping"===e?g(e,t,a,n):"fun"===e?v(e,t,a,n):w(e,t,a,n)}function m(e,t,a,n){var i=k.a.HOST_E_BUSINESS+"/api/Attractions/GetAttractionsList",o={Order:[],Page:{PageIndex:1,PageSize:1e4},Search:[]};if(t&&t.length>0){var r={AndOR:"and",SearchField:"Keyword",ConditionType:"1",ListSearchValue:[{ItemValue:t}]};o.Search.push(r)}var s={type:"app",conditionParams:o,lat:a,lng:n};return k.a.getData(i,s).then(function(e){return e.json()})}function f(e,t,a,n){var i=k.a.HOST_E_BUSINESS+"/api/Hotel/GetHoteList",o={Order:[],Page:{PageIndex:1,PageSize:1e4},Search:[{AndOR:"and",ConditionType:"1",SearchField:"StartDate",ListSearchValue:[{ItemValue:(new Date).formatDate("YYYY-MM-DD")}]},{AndOR:"and",ConditionType:"1",SearchField:"EndDate",ListSearchValue:[{ItemValue:(new Date).addDays(1).formatDate("YYYY-MM-DD")}]}]};if(t&&t.length>0){var r={AndOR:"and",SearchField:"HotelKey",ConditionType:"1",ListSearchValue:[{ItemValue:t}]};o.Search.push(r)}var s={type:"app",conditionParams:o,lat:a,lng:n};return k.a.getData(i,s).then(function(e){return e.json()})}function y(e,t,a,n){var i=k.a.HOST_PORTAL2+"/api/Restaurant/GetList",o={Order:[],Page:{PageIndex:1,PageSize:1e4},Search:[]};if(t&&t.length>0){var r={AndOR:"and",SearchField:"CnName, EnName, Address, ReservationCall, RestaurantFeature,Tags",ConditionType:"2",ListSearchValue:[{ItemValue:t}]};o.Search.push(r)}var s={type:"app",conditionParams:o,lat:a,lng:n};return k.a.getData(i,s).then(function(e){return e.json()})}function g(e,t,a,n){var i=k.a.HOST_PORTAL2+"/api/Business/GetList",o={Order:[],Page:{PageIndex:1,PageSize:1e4},Search:[]};if(t&&t.length>0){var r={AndOR:"and",SearchField:"CnName,EnName,FeatureDesc,Address,Telephone,Tags",ConditionType:"2",ListSearchValue:[{ItemValue:t}]};o.Search.push(r)}var s={type:"app",conditionParams:o,lat:a,lng:n};return k.a.getData(i,s).then(function(e){return e.json()})}function v(e,t,a,n){var i=k.a.HOST_PORTAL2+"/Api/Entertainment/GetList",o={Order:[],Page:{PageIndex:1,PageSize:1e4},Search:[]};if(t&&t.length>0){var r={AndOR:"and",SearchField:"cnName",ConditionType:"1",ListSearchValue:[{ItemValue:t}]};o.Search.push(r)}var s={type:"app",conditionParams:o,lat:a,lng:n};return k.a.getData(i,s).then(function(e){return e.json()})}function w(e,t,a,n){var i=E(e),o={content:{type:1,Code:"DC_web_base_facility",whereSQL:"Type:"+i,orderType:"desc",orderField:"distance",pageIndex:1,pageSize:1e4,lng:a,lat:n}};return k.a.requestDataCenter("DC_DATACENT_ENTITY",o).then(function(e){return e.json()})}function E(e){var t=1;return"stadiumAmusementPark"===e?t=8:"barbecueNightMarket"===e?t=9:"publicToilet"===e?t=1:"bicycle"===e?t=2:"parking"===e?t=3:"hospital"===e?t=4:"busStation"===e?t=5:"express"===e?t=6:"repairFactory"===e?t=7:"market"===e&&(t=10),t}function T(e,t,a,n){return{type:P.c.MAP.ELEMENTMAP.GET_LIST_REQUEST,searchType:e,keywords:t}}function S(e,t,a,n,i){return{type:P.c.MAP.ELEMENTMAP.GET_LIST_SUCCESS,searchType:e,keywords:t,result:i}}function M(e,t,a,n,i){return{type:P.c.MAP.ELEMENTMAP.GET_LIST_FAILURE,searchType:e,keywords:t,message:i}}t.b=n,t.d=i,t.c=o,t.e=r,t.f=p,t.g=l,t.a=d,t.h=h;var P=a(1),k=a(8)},908:function(e,t,a){e.exports=a.p+"static/media/ico_map_phone@2x.02235dc5.png"},909:function(e,t,a){e.exports=a.p+"static/media/ico_map_go@2x.a847eed7.png"},910:function(e,t,a){e.exports=a.p+"static/media/ico_map_detail@2x.8a6f5193.png"},911:function(e,t,a){e.exports=a.p+"static/media/common_poi_selected@2x.38730eb3.png"}});
//# sourceMappingURL=1.536cf3a5.chunk.js.map
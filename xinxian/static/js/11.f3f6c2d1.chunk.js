webpackJsonp([11],{856:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=n(17),c=(n.n(a),n(18)),s=n.n(c),l=n(11),u=(n.n(l),n(12)),f=n.n(u),p=n(9),v=(n.n(p),n(10)),h=n.n(v),w=n(0),y=n.n(w),b=n(2),O=n(16),d=n.n(O),m=n(13),V=n(886),E=n(274),k=(n.n(E),function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}()),g=function(e){function t(e){r(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={isFetching:!0},n}return i(t,e),k(t,[{key:"componentDidMount",value:function(){this.loadData()}},{key:"render",value:function(){var e=this,t=this.state.overviewList;return y.a.createElement("div",null,y.a.createElement(f.a,{mode:"dark",className:"navBar",icon:y.a.createElement(h.a,{type:"left"}),onLeftClick:function(){var t=e.props.dispatch;e.props.history.goBack(),t(Object(V.a)())}},"\u65b0\u53bf\u6982\u89c8"),y.a.createElement(m.a,{ref:function(t){e.scrollView=t}},t?t.map(function(n,r){return e.renderOverView(n,r,r===t.length-1)}):null,this.state.isFetching?y.a.createElement(s.a,{toast:!0,text:"Loading..."}):null))}},{key:"renderOverView",value:function(e,t,n){var r=this;return y.a.createElement("div",{key:t,className:n?"overviewListItem overviewListLastItem":"overviewListItem",style:{backgroundImage:"url("+e.icon+")"},onClick:function(){return r.showDetail(t)}})}},{key:"loadData",value:function(){var e=this;n.e(15).then(n.bind(null,870)).then(function(t){var n=t.overviewList;e.setState({overviewList:n,isFetching:!1},function(){e.restoreScrollViewPosition()})})}},{key:"showDetail",value:function(e){this.cacheScrollOffset(),this.props.history.push("/overview/detail/"+e)}},{key:"cacheScrollOffset",value:function(){var e=d.a.findDOMNode(this.scrollView).scrollTop;this.props.dispatch(Object(V.b)(e))}},{key:"restoreScrollViewPosition",value:function(){this.scrollView&&(isNaN(this.props.scrollViewOffset)?this.scrollView.scrollToY(0):this.scrollView.scrollToY(this.props.scrollViewOffset))}}]),t}(w.Component),_=function(e,t){var n=e.overview.listScreen;return Object.assign({},n)};g=Object(b.b)(_)(g),t.default=g},886:function(e,t,n){"use strict";function r(){return{type:i.c.OVERVIEW.LIST.GO_BACK}}function o(e){return{type:i.c.OVERVIEW.LIST.SET_LISTVIEW_OFFSET,scrollViewOffset:e}}t.a=r,t.b=o;var i=n(1);n(20)}});
//# sourceMappingURL=11.f3f6c2d1.chunk.js.map
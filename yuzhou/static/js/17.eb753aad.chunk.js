webpackJsonp([17],{877:function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=n(16),a=(n.n(s),n(17)),c=n.n(a),l=n(11),u=(n.n(l),n(12)),f=n.n(u),p=n(0),v=n.n(p),h=n(2),w=n(14),y=n.n(w),b=n(10),d=n(70),m=n(921),O=n(292),V=(n.n(O),n(23)),g=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),E=function(e){function t(e){i(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={isFetching:!0},n}return o(t,e),g(t,[{key:"componentDidMount",value:function(){this.loadData(),this.updateNativeTitle("\u79b9\u5dde\u6982\u89c8")}},{key:"render",value:function(){var e=this,t=this.state.overviewList;return v.a.createElement("div",{className:this.props.isFromNativeApp?"isFromNativeApp":null},this.props.isFromNativeApp?null:v.a.createElement(f.a,{mode:"dark",className:"navBar",leftContent:v.a.createElement(V.a,{ref:function(t){e.LeftContentView=t?t.getWrappedInstance():e.scrollView},goBackAction:m.a,history:this.props.history}),onLeftClick:function(){e.LeftContentView.goHome()}},"\u79b9\u5dde\u6982\u89c8"),v.a.createElement(b.a,{ref:function(t){e.scrollView=t?t.getWrappedInstance():e.scrollView}},t?t.map(function(n,i){return e.renderOverView(n,i,i===t.length-1)}):null,this.state.isFetching?v.a.createElement(c.a,{toast:!0,text:"Loading..."}):null))}},{key:"renderOverView",value:function(e,t,n){var i=this,r=window.innerWidth-20,o=400*r/710;return v.a.createElement("div",{key:t,className:n?"overviewListItem overviewListLastItem":"overviewListItem",style:{backgroundImage:"url("+e.icon+")",height:o},onClick:function(){return i.showDetail(t)}})}},{key:"loadData",value:function(){var e=this;n.e(25).then(n.bind(null,908)).then(function(t){var n=t.overviewList;e.setState({overviewList:n,isFetching:!1},function(){e.restoreScrollViewPosition()})})}},{key:"showDetail",value:function(e){this.cacheScrollOffset(),this.props.history.push("/overview/detail/"+e)}},{key:"cacheScrollOffset",value:function(){var e=y.a.findDOMNode(this.scrollView).scrollTop;this.props.dispatch(Object(m.b)(e))}},{key:"restoreScrollViewPosition",value:function(){this.scrollView&&(isNaN(this.props.scrollViewOffset)?this.scrollView.scrollToY(0):this.scrollView.scrollToY(this.props.scrollViewOffset))}}]),t}(d.a),k=function(e,t){var n=e.overview.listScreen;return Object.assign({},n,{isFromNativeApp:e.native.isFromNativeApp})};E=Object(h.b)(k)(E),t.default=E},921:function(e,t,n){"use strict";function i(){return{type:o.b.OVERVIEW.LIST.GO_BACK}}function r(e){return{type:o.b.OVERVIEW.LIST.SET_LISTVIEW_OFFSET,scrollViewOffset:e}}t.a=i,t.b=r;var o=n(1);n(21)}});
//# sourceMappingURL=17.eb753aad.chunk.js.map
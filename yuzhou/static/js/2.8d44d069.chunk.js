webpackJsonp([2],{895:function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=n(163),s=(n.n(o),n(164)),c=n.n(s),l=n(11),u=(n.n(l),n(12)),p=n.n(u),d=n(18),f=(n.n(d),n(19)),m=n.n(f),h=n(0),y=n.n(h),E=n(2),g=n(10),v=n(973),b=n(912),I=n(8),j=(n(21),n(1)),N=n(115),T=(n.n(N),function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}()),L=function(e){function t(e){i(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.onItemClick=n.onItemClick.bind(n),n.onModifyTime=n.onModifyTime.bind(n),n.journeyEditTapped=n.journeyEditTapped.bind(n),n.state={isEdit:!1,pickerVisible:!1},n}return r(t,e),T(t,[{key:"render",value:function(){var e=this,t=window.innerHeight-45;return y.a.createElement("div",null,y.a.createElement(p.a,{mode:"dark",className:"navBar",icon:y.a.createElement(m.a,{type:"left"}),onLeftClick:function(){var t=e.props.dispatch;e.props.history.goBack(),t(Object(b.c)())},rightContent:this.props.dataList&&this.props.dataList.length>0?y.a.createElement("div",{style:{display:"flex",alignItems:"center",height:"100%"}},y.a.createElement("div",{className:"journeyListRightEditButton",onClick:function(){return e.journeyEditTapped()}},y.a.createElement("img",{className:"journeyListRightEditImage",src:n(978),alt:""}))):null},"\u6211\u7684\u884c\u7a0b"),y.a.createElement(g.a,null,y.a.createElement(v.a,{onItemClick:this.onItemClick,onModifyTime:this.onModifyTime,journeyEditTapped:this.journeyEditTapped,height:t,isRefresh:this.state.isRefresh,isEdit:this.state.isEdit,ref:function(t){t&&(e.listView=t.getWrappedInstance())}}),y.a.createElement(c.a,{mode:"date",visible:this.state.pickerVisible,value:new Date(this.state.date),minDate:new Date,maxDate:(new Date).addDays(3),onOk:function(t){return e.ModifyTime(e.state.id,t)},onDismiss:function(){return e.setState({pickerVisible:!e.state.pickerVisible})}})))}},{key:"onItemClick",value:function(e){this.props.history.push("/journey/detail/"+e.PlanMainID)}},{key:"onModifyTime",value:function(e,t){this.setState({pickerVisible:!this.state.pickerVisible,date:t,id:e})}},{key:"ModifyTime",value:function(e,t){var n=this,i={planMainID:e,date:t.formatDate("YYYY-MM-DD")};I.a.postToPortal(j.q.JOURNEY.UpdateTourBegin,i,null,!0).then(function(e){return e.text()}).then(function(e){e&&(n.setState({pickerVisible:!n.state.pickerVisible,isEdit:!n.state.isEdit}),n.listView.onRefresh())})}},{key:"journeyEditTapped",value:function(){this.setState({isEdit:!this.state.isEdit})}}]),t}(h.PureComponent),k=function(e,t){return Object.assign({},e.journey.listScreen.dataList,{dataList:e.journey.listScreen.dataList})};L=Object(E.b)(k)(L),t.default=L},912:function(e,t,n){"use strict";function i(e,t){return function(n,i){return n(o(t)),l(e,t).then(function(e){n(s(e?e.results:[],t))}).catch(function(e){n(c(e))})}}function a(){return{type:d.b.JOURNEY.MINE.GO_BACK}}function r(e){return{type:d.b.JOURNEY.MINE.SET_SCROLL_OFFSET,scrollViewOffset:e}}function o(e){return{type:d.b.JOURNEY.MINE.GET_LIST_REQUEST,pageIndex:e}}function s(e,t){return{type:d.b.JOURNEY.MINE.GET_LIST_SUCCESS,pageIndex:t,pageSize:d.o,resp:e}}function c(e){return{type:d.b.JOURNEY.MINE.GET_LIST_FAILURE,message:e}}function l(e,t){var n={pageIndex:t,pageSize:d.o,userID:e};return f.a.postToPortal(d.q.JOURNEY.GetTourPlanInfo,n,null,!0).then(function(e){return e.json()})}function u(){return function(e,t){return e(p()),new Promise(function(e){e()})}}function p(){return{type:d.b.JOURNEY.MINE.DELETE}}t.b=i,t.c=a,t.d=r,t.a=u;var d=n(1),f=n(8)},973:function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var o=n(39),s=(n.n(o),n(40)),c=n.n(s),l=n(24),u=(n.n(l),n(25)),p=n.n(u),d=n(16),f=(n.n(d),n(17)),m=n.n(f),h=n(26),y=(n.n(h),n(27)),E=n.n(y),g=n(0),v=n.n(g),b=n(2),I=n(9),j=n.n(I),N=n(14),T=n.n(N),L=n(15),k=n(912),w=n(8),O=n(1),R=n(32),D=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),_=function(e){function t(e){i(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));n.renderRow=n.renderRow.bind(n),n.onRefresh=n.onRefresh.bind(n),n.renderFooter=n.renderFooter.bind(n),n.loadNextPage=n.loadNextPage.bind(n);var r=new E.a.DataSource({rowHasChanged:function(e,t){return e!==t},sectionHeaderHasChanged:function(e,t){return e!==t}});return n.state={dataSource:r.cloneWithRows(n.props.dataList?n.props.dataList:[])},n}return r(t,e),D(t,[{key:"componentDidMount",value:function(){this.props.dataList||this.loadData(),this.listView&&!isNaN(this.props.listViewOffset)&&this.listView.scrollTo(0,this.props.listViewOffset)}},{key:"componentDidUpdate",value:function(e,t,n){this.props.dataList!==e.dataList&&this.setState({dataSource:this.state.dataSource.cloneWithRows(this.props.dataList?this.props.dataList:[])})}},{key:"render",value:function(){var e=this;return v.a.createElement("div",{className:"journeyListBox",style:{height:this.props.height,backgroundColor:"#efeff4",paddingTop:5}},this.renderListView(),this.props.isFetching||this.props.dataList&&0!==this.props.dataList.length?null:v.a.createElement(R.a,{style:{height:this.props.height},onClick:function(){return e.onRefresh()}}),this.props.isFetching&&1===this.props.pageIndex?v.a.createElement(m.a,{toast:!0,text:"Loading..."}):null)}},{key:"renderListView",value:function(){var e=this;return this.props.dataList&&this.props.dataList.length>0?v.a.createElement(E.a,{ref:function(t){return e.listView=t},dataSource:this.state.dataSource,renderRow:this.renderRow,style:{height:this.props.height,overflow:"auto"},pullToRefresh:v.a.createElement(p.a,{refreshing:this.props.isFetching,onRefresh:this.onRefresh}),onEndReached:this.loadNextPage,renderFooter:this.renderFooter,pageSize:20,scrollRenderAheadDistance:500,scrollEventThrottle:50,onEndReachedThreshold:20}):null}},{key:"renderRow",value:function(e,t,i){var a=this,r=n(974),o=n(975),s=n(976),c=n(977);return v.a.createElement("div",{className:"journeyListItemBg"},v.a.createElement("div",{className:"journeyListItem"},v.a.createElement("div",{onClick:function(){a.props.onItemClick&&(a.cacheScrollOffset(),a.props.onItemClick(e))}},v.a.createElement("div",{className:"journeyListItemTop"},v.a.createElement("img",{src:e.GetImage.SmallImageFrontUrl,alt:"",className:"journeyListItemImg"}),v.a.createElement("div",{className:"journeyListItemContent"},v.a.createElement("div",{className:"journeyListItemTitle"},v.a.createElement("div",{className:"journeyListItemName"},e.TourName)),v.a.createElement("div",{className:"journeyListItemNumber"},v.a.createElement("div",{className:"journeyListItemName"},"\u7f16\u53f7:",e.CreateDate.replace(/-/g,"").replace(/:/g,"").replace(" ",""))),v.a.createElement("div",{className:"journeyListItemTime"},v.a.createElement("img",{src:r,alt:"",className:"journeyListItemTimeIcon"}),v.a.createElement("div",{className:"journeyListItemTimeText"},"\u51fa\u53d1\u65f6\u95f4\uff1a",e.BeginDate?e.BeginDate.split(" ")[0]:"")))),v.a.createElement("div",{className:"journeyListItemBottom"},v.a.createElement("ul",{className:"journeyListItemRoute"},e.PlanProList.map(function(e,t){return v.a.createElement("li",{key:t},e.Name)})))),this.props.isEdit?v.a.createElement("div",{className:"journeyListItemEdit"},v.a.createElement("div",{className:"journeyListItemEditTime",onClick:function(){return a.props.onModifyTime(e.PlanMainID,e.BeginDate)}},v.a.createElement("img",{src:r,alt:"",className:"journeyListItemEditIcon"}),v.a.createElement("span",{className:"journeyListItemEditText"},"\u51fa\u53d1\u65e5\u671f")),v.a.createElement("div",{className:"journeyListItemEditName",onClick:function(){return a.ModifyName(e.PlanMainID,e.TourName)}},v.a.createElement("img",{src:o,alt:"",className:"journeyListItemEditIcon"}),v.a.createElement("span",{className:"journeyListItemEditText"},"\u884c\u7a0b\u540d\u79f0")),v.a.createElement("div",{className:"journeyListItemEditDel",onClick:function(){return a.ModifyEdit(e.PlanMainID)}},v.a.createElement("img",{src:s,alt:"",className:"journeyListItemEditIcon"}),v.a.createElement("span",{className:"journeyListItemEditText"},"\u5220\u9664"))):null,v.a.createElement("div",{className:"journeyListItemDay",style:{backgroundImage:"url("+c+")"}},e.DayCount,"\u5929")))}},{key:"renderFooter",value:function(){return this.props.isFetching&&!0===this.props.hasMore?v.a.createElement("div",{className:"loadingMore"},v.a.createElement(m.a,{text:"Loading..."})):null}},{key:"loadData",value:function(){if(!this.props.isFetching&&!1!==this.props.hasMore){var e=this.props.pageIndex?this.props.pageIndex+1:1;this.props.dispatch(Object(k.b)(this.props.userId,e))}}},{key:"cacheScrollOffset",value:function(){var e=T.a.findDOMNode(this.listView).scrollTop;this.props.dispatch(Object(k.d)(e))}},{key:"onRefresh",value:function(){var e=this;this.props.dispatch(Object(k.a)()).then(function(){e.loadData()})}},{key:"loadNextPage",value:function(){this.loadData()}},{key:"ModifyName",value:function(e,t){var n=this;c.a.prompt("\u4fee\u6539\u884c\u7a0b\u540d\u79f0","\u7ed9\u4f60\u7684\u884c\u7a0b\u8d77\u4e2a\u54cd\u4eae\u7684\u540d\u5b57",[{text:"\u53d6\u6d88"},{text:"\u786e\u8ba4",onPress:function(t){return n.onChangeName(e,t)}}],"plain-text",t)}},{key:"onChangeName",value:function(e,t){var n=this,i={planMainID:e,title:t};w.a.postToPortal(O.q.JOURNEY.UpdateTourTitle,i,null,!0).then(function(e){return e.json()}).then(function(e){e&&(n.props.journeyEditTapped(),n.onRefresh())})}},{key:"ModifyEdit",value:function(e){var t=this;c.a.alert("\u63d0\u793a","\u786e\u8ba4\u5220\u9664\u884c\u7a0b?",[{text:"\u53d6\u6d88",style:"default"},{text:"\u786e\u8ba4",style:"default",onPress:function(){return t.onDelete(e)}}])}},{key:"onDelete",value:function(e){var t=this,n={planMainID:e,ePlanType:0};w.a.postToPortal(O.q.JOURNEY.DeleteTourInUserCenter,n,null,!0).then(function(e){return e.text()}).then(function(e){e&&(t.props.journeyEditTapped(),t.onRefresh())})}}]),t}(g.PureComponent);_.propTypes={onItemClick:j.a.func,onModifyTime:j.a.func,journeyEditTapped:j.a.func};var M=function(e){return Object.assign({userId:L.a.getUserId(e)},e.journey.listScreen)};_=Object(b.b)(M,null,null,{withRef:!0})(_),t.a=_},974:function(e,t,n){e.exports=n.p+"static/media/icon_plan_edit_date.5e0785dc.png"},975:function(e,t,n){e.exports=n.p+"static/media/icon_plan_name_modify.f9f33922.png"},976:function(e,t,n){e.exports=n.p+"static/media/icon_plan_del.4735d5a4.png"},977:function(e,t,n){e.exports=n.p+"static/media/plan-calendar-bg.e8674877.png"},978:function(e,t,n){e.exports=n.p+"static/media/trip_actionbar_edit_white.c90cf84e.png"}});
//# sourceMappingURL=2.8d44d069.chunk.js.map
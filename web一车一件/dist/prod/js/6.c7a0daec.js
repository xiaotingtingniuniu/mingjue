(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{1005:function(t,e,a){"use strict";var o=a(776);a.n(o).a},1006:function(t,e,a){"use strict";var o=a(777);a.n(o).a},1042:function(t,e,a){"use strict";a.r(e);a(82),a(100),a(67),a(101),a(102),a(103),a(68);var o=a(0),r=a(696),s=a(697),i=a(80),n=a(44);function u(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,o)}return a}function c(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var d={components:{H5title:r.a,H5card:s.a},data:function(){return{remark:""}},computed:{quoted_status:{get:function(){return this.$store.state.quoted_status},set:function(t){this.setQuoted_status(t)}},toBeQuotedData:{get:function(){return this.$store.state.toBeQuotedData},set:function(t){this.setToBeQuotedData(t)}}},created:function(){var t=this;window.ReactNativeWebView&&window.ReactNativeWebView.postMessage(JSON.stringify({sucessCallback:!1,title:"历史清单详情页"})),this.setQuoted_status(0);var e=Object(n.a)("receipt");if(0===this.toBeQuotedData.length&&e){var a={receipt:e};this.getHistoryOrderDetails({params:a,onSuccess:function(e){t.toBeQuotedData}})}},methods:function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?u(Object(a),!0).forEach((function(e){c(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}({},Object(i.d)(["setQuoted_status","setToBeQuotedData"]),{},Object(i.b)(["getHistoryOrderDetails"]),{go:function(){this.$router.push({name:o.f.QUOTED})},inputMethod:function(t){this.toBeQuotedData}})},l=(a(1005),a(1006),a(649)),p=Object(l.a)(d,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"no_quoted"},[a("h5title"),t._v(" "),a("h5card"),t._v(" "),t.toBeQuotedData.remark?a("div",{staticClass:"remark"},[a("div",{staticClass:"title"},[t._v("备注信息")]),t._v(" "),t.toBeQuotedData.remark?a("div",[t.toBeQuotedData.creator?a("div",{staticClass:"detail-top"},[t._v(t._s(t.toBeQuotedData.creator.name)+"的备注")]):t._e(),t._v(" "),a("van-field",{staticClass:"detail-bottom",attrs:{autosize:"",type:"textarea",maxlength:"300",placeholder:"请输入您的备注信息",readonly:!0},model:{value:t.toBeQuotedData.remark,callback:function(e){t.$set(t.toBeQuotedData,"remark",e)},expression:"toBeQuotedData.remark"}})],1):t._e(),t._v(" "),1===t.quoted_status?a("van-field",{staticClass:"textarea",attrs:{rows:"3",autosize:"",type:"textarea",placeholder:"请输入您的备注信息"},on:{input:t.inputMethod},model:{value:t.toBeQuotedData.quotedRemark,callback:function(e){t.$set(t.toBeQuotedData,"quotedRemark",e)},expression:"toBeQuotedData.quotedRemark"}}):t._e()],1):a("div",{staticClass:"remark",staticStyle:{"padding-bottom":"0"}},[a("div",{staticClass:"title"},[t._v("备注信息")])])],1)}),[],!1,null,"0e3c60dd",null);e.default=p.exports},776:function(t,e,a){},777:function(t,e,a){}}]);
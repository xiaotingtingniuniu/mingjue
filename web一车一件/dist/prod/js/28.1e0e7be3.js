(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{1040:function(t,e,s){"use strict";s.r(e);s(82),s(100),s(67),s(49),s(101),s(102),s(103),s(68);var i=s(80),a=s(800),r=s(661),n=s(0);function o(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,i)}return s}function c(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?o(Object(s),!0).forEach((function(e){l(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):o(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}function l(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}var h={components:{DialogShareParts:a.a,Navigation:r.a},data:function(){return{isDisabled:!0,isActive:!1,dataArr:[],checkedPartsList:[]}},computed:c({},Object(i.e)("partsList",["partsList","loading","partsListTotal","checkedList","countReadyToView","isFirstHistoryList","isFirstShareList"])),watch:{},created:function(){this.getPartsList()},mounted:function(){},methods:c({},Object(i.b)("partsList",["getPartsList","deletePartsList","submitPartsList"]),{},Object(i.d)("partsList",["setCheckedList","setIsVisibleShareDialog","setIsFirstShareList","setShareTextarea"]),{toggleSelection:function(t){var e=this;t?t.forEach((function(t){e.$refs.multipleTable.toggleRowSelection(t)})):this.$refs.multipleTable.clearSelection()},handleSelectionChange:function(t,e){var s=this;this.multipleSelection=t,this.checkedPartsList=[],0===t.length?this.partsList[e].items.map((function(t){return t.isChecked=!1,t})):t.map((function(t){return t.isChecked?t.isChecked=!1:t.isChecked=!0,t})),this.partsList,this.partsList.map((function(t){return t.items.map((function(t){return t.isChecked&&!0===t.isChecked&&s.checkedPartsList.push(t),t})),t})),this.checkedPartsList,this.setCheckedList(this.checkedPartsList),this.checkedPartsList,this.checkedPartsList.length>0?(this.isDisabled=!1,this.isActive=!0):(this.isDisabled=!0,this.isActive=!1)},select:function(t,e){var s=this;this.checkedPartsList=[],this.setShareTextarea(""),e.isChecked?e.isChecked=!1:e.isChecked=!0,this.partsList,this.partsList.map((function(t){return t.items.map((function(t){return t.isChecked&&!0===t.isChecked&&s.checkedPartsList.push(t),t})),t})),this.checkedPartsList,this.setCheckedList(this.checkedPartsList),this.partsList,this.checkedPartsList.length>0?(this.isDisabled=!1,this.isActive=!0):(this.isDisabled=!0,this.isActive=!1)},selectAll:function(t,e){var s=this;this.checkedPartsList=[],this.setShareTextarea(""),0===t.length?this.partsList[e].items.map((function(t){return t.isChecked=!1,t})):t.map((function(t){return t.isChecked=!0,t})),this.partsList,this.partsList.map((function(t){return t.items.map((function(t){return t.isChecked&&!0===t.isChecked&&s.checkedPartsList.push(t),t})),t})),this.checkedPartsList,this.setCheckedList(this.checkedPartsList),this.checkedPartsList,this.checkedPartsList.length>0?(this.isDisabled=!1,this.isActive=!0):(this.isDisabled=!0,this.isActive=!1)},onChange:function(t){},handleDelete:function(t,e,s){var i={itemToRemove:[e.code],viewResult:!0};this.deletePartsList(i)},share:function(){this.isFirstShareList&&(this.setIsFirstShareList(!1),localStorage.setItem("isFirstShareList",!1)),this.setIsVisibleShareDialog(!0)},goHistoryList:function(){this.$router.push({name:n.f.HISTORYLIST})},closeDialog:function(){this.setIsFirstShareList(!1),localStorage.setItem("isFirstShareList",!1)}})},u=(s(991),s(992),s(649)),p=Object(u.a)(h,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"page-parts-list"},[s("header",{staticClass:"list_heaser"},[s("navigation")],1),t._v(" "),s("main",{staticClass:"list_main"},[s("div",{staticClass:"list-content"},[s("div",{staticClass:"title"},[s("span",{staticClass:"text"},[t._v("配件清单")]),t._v(" "),s("span",{staticClass:"list_number"},[t._v(t._s(t.partsListTotal))]),t._v(" "),s("div",{staticClass:"right"},[s("span",{staticClass:"checked"},[s("span",[t._v("已选")]),t._v(" "),s("span",{staticClass:"number"},[t._v(t._s(t.checkedList.length)+" 项")])]),t._v(" "),0===t.checkedList.length?s("button",{staticClass:"share isDisabled",attrs:{disabled:"disabled"}},[t._v("\n            分享给他人\n          ")]):s("button",{staticClass:"share",class:{isDisabled:t.isDisabled,isActive:t.isActive},attrs:{disabled:t.isDisabled},on:{click:function(e){return t.share()}}},[t._v("\n            分享给他人\n          ")]),t._v(" "),t.isFirstShareList?s("span",{staticClass:"share-dialog"},[s("i",{staticClass:"share-title"},[t._v("选择配件后，点击这里进行分享")]),t._v(" "),s("i",{staticClass:"share-close",on:{click:t.closeDialog}}),t._v(" "),s("i",{staticClass:"share-content"},[t._v("不同设备、账号之间同步信息，还可以询报价")])]):t._e(),t._v(" "),s("span",{staticClass:"lookfor",on:{click:t.goHistoryList}},[s("span",[t._v("\n              查看历史清单\n            ")]),t._v(" "),t.countReadyToView>0?s("span",{staticClass:"dot"}):t._e(),t._v(" "),t.isFirstHistoryList&&0===t.countReadyToView?s("span",{staticClass:"new"}):t._e()])])]),t._v(" "),t.partsList.length>0?s("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"parts_list"},t._l(t.partsList,(function(e,i){return s("div",{key:i,attrs:{id:i}},[s("div",{staticClass:"list_group"},["VIN"===e.groupingBy?s("div",[s("span",[t._v("VIN码："+t._s(e.vehicle.vinCode)+" ")]),t._v(" "),s("span",[t._v("    车辆信息：")]),t._v(" "),s("span",[t._v(t._s(e.vehicle.subBrand||"")+" ")]),t._v(" "),s("span",[t._v(t._s(e.vehicle.mjVehicleGroup||"")+" ")]),t._v(" "),s("span",[t._v(t._s(e.vehicle.year||"")+" ")]),t._v(" "),s("span",[t._v(t._s(e.vehicle.displacement||"")+" ")]),t._v(" "),s("span",[t._v(t._s(e.vehicle.transmission||"")+" ")])]):"MJSID"===e.groupingBy?s("div",[s("span",[t._v("    车辆信息：")]),t._v(" "),s("span",[t._v(t._s(e.vehicle.subBrand||"")+" ")]),t._v(" "),s("span",[t._v(t._s(e.vehicle.mjVehicleGroup||"")+" ")]),t._v(" "),s("span",[t._v(t._s(e.vehicle.year||"")+" ")]),t._v(" "),s("span",[t._v(t._s(e.vehicle.displacement||"")+" ")]),t._v(" "),s("span",[t._v(t._s(e.vehicle.transmission||"")+" ")])]):"PART_NUMBER"===e.groupingBy?s("div",[s("span",[t._v("OE号："+t._s(e.partNumbers[0]||"")+" ")]),t._v(" "),s("span",[t._v("    适用车型：")]),t._v(" "),s("span",[t._v(t._s(e.vehicle.subBrand||"")+" ")]),t._v(" "),s("span",[t._v(t._s(e.vehicle.mjVehicleGroup||"")+" ")])]):t._e()]),t._v(" "),s("div",{staticClass:"list_table"},[s("el-table",{ref:"multipleTable",refInFor:!0,staticStyle:{width:"100%"},attrs:{"show-header":!0,data:e.items,"header-cell-style":{background:"#F5F6F7",fontSize:"12px",color:"#919599"},"cell-style":{color:"#000",fontSize:"12px"},"tooltip-effect":"dark"},on:{select:t.select,"select-all":function(e){return t.selectAll(e,i)}}},[s("el-table-column",{attrs:{type:"selection",width:"55"}}),t._v(" "),s("el-table-column",{attrs:{label:"标准名"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.part.stdPartName||"暂无"))]}}],null,!0)}),t._v(" "),s("el-table-column",{attrs:{prop:"name",label:"原厂名"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.part.srcPartName))]}}],null,!0)}),t._v(" "),s("el-table-column",{attrs:{prop:"number",label:"OE号","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.part.partNumber))]}}],null,!0)}),t._v(" "),s("el-table-column",{attrs:{prop:"4s",label:"4S店价","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s("￥"+Number(e.row.price).toFixed(2)||!1))]}}],null,!0)}),t._v(" "),s("el-table-column",{attrs:{prop:"comment",label:"备注","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.part.comment||"暂无"))]}}],null,!0)}),t._v(" "),s("el-table-column",{attrs:{prop:"comment",label:" ","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(i){return s("span",{staticClass:"delete",on:{click:function(s){return t.handleDelete(i.$index,i.row,e.items)}}},[t._v("删除")])}}],null,!0)})],1)],1)])})),0):s("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"none"},[t._v("暂无数据")])])]),t._v(" "),s("dialog-share-parts")],1)}),[],!1,null,"12977572",null);e.default=p.exports},649:function(t,e,s){"use strict";function i(t,e,s,i,a,r,n,o){var c,l="function"==typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=s,l._compiled=!0),i&&(l.functional=!0),r&&(l._scopeId="data-v-"+r),n?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),a&&a.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(n)},l._ssrRegister=c):a&&(c=o?function(){a.call(this,this.$root.$options.shadowRoot)}:a),c)if(l.functional){l._injectStyles=c;var h=l.render;l.render=function(t,e){return c.call(e),h(t,e)}}else{var u=l.beforeCreate;l.beforeCreate=u?[].concat(u,c):[c]}return{exports:t,options:l}}s.d(e,"a",(function(){return i}))},672:function(t,e,s){},673:function(t,e,s){},760:function(t,e,s){"use strict";var i=s(672);s.n(i).a},761:function(t,e,s){"use strict";var i=s(673);s.n(i).a},762:function(t,e,s){},763:function(t,e,s){},800:function(t,e,s){"use strict";s(82),s(100),s(67),s(49),s(101),s(102),s(103),s(68);var i=s(80);function a(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,i)}return s}function r(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?a(Object(s),!0).forEach((function(e){n(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):a(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}function n(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}var o={data:function(){return{hidden:!0,isDialogCopy:!1}},computed:r({},Object(i.e)("partsList",["partsList","isShareAgain","shareUrl","isVisibleShareDialog","isVisibleCopyButton","checkedList","orderNumber","shareTextarea"]),{shareTextarea:{get:function(){return this.$store.state.partsList.shareTextarea},set:function(t){this.setShareTextarea(t)}}}),methods:r({},Object(i.d)("partsList",["setIsVisibleShareDialog","setShareUrl","setCheckedList","setIsVisibleCopyButton","setShareTextarea"]),{},Object(i.b)("partsList",["getPartsList","countPart","submitPartsList","getOrderUpdate"]),{creatUrl:function(){var t=this;if(this.isShareAgain){var e={orderNumber:this.orderNumber,remark:this.shareTextarea};this.getOrderUpdate({params:e,success:function(t){}})}else{var s=[];this.partsList.map((function(t){return t.items.map((function(t){return t.isChecked&&!0===t.isChecked&&s.push(t.code),t})),t}));var i={itemToSubmit:s,remark:this.shareTextarea};this.submitPartsList({params:i,success:function(e){if(!0===e){var s=localStorage.getItem("isDialogCopy");"true"===s?t.isDialogCopy=!0:"false"===s?t.isDialogCopy=!1:(localStorage.setItem("isDialogCopy",!0),t.isDialogCopy=!0)}}})}},cancel:function(){this.setIsVisibleShareDialog(!1)},onCopy:function(){this.hidden=!1},handleClose:function(){this.setIsVisibleShareDialog(!1),this.isShareAgain?(this.setShareTextarea(""),this.hidden=!0,this.setIsVisibleCopyButton(!1)):this.isVisibleCopyButton&&window.location.reload()},tipKnow:function(){localStorage.setItem("isDialogCopy",!1),this.isDialogCopy=!1}})},c=(s(760),s(761),s(649)),l=Object(c.a)(o,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("el-dialog",{staticClass:"dialog_share",attrs:{title:"分享给他人","modal-append-to-body":!1,visible:t.isVisibleShareDialog,"before-close":t.handleClose,width:"850"},on:{"update:visible":function(e){t.isVisibleShareDialog=e}}},[!1===t.isVisibleCopyButton?s("div",[s("ul",[s("li",{staticClass:"share_word"},[t._v("备注-包含 "+t._s(t.checkedList.length)+" 项内容")])]),t._v(" "),s("el-input",{staticStyle:{"font-size":"12px"},attrs:{type:"textarea",autosize:{minRows:5,maxRows:5},placeholder:"给对方留言，做多可输入 300 个字符（选填）",resize:"none",maxlength:"300"},model:{value:t.shareTextarea,callback:function(e){t.shareTextarea=e},expression:"shareTextarea"}}),t._v(" "),s("div",{staticClass:"textarea-btn"},[s("button",{staticClass:"cancel",on:{click:t.cancel}},[t._v("取消")]),t._v(" "),s("button",{staticClass:"creat_url",on:{click:t.creatUrl}},[t._v("创建链接")])])],1):t._e(),t._v(" "),t.isVisibleCopyButton?s("div",[s("ul",[s("li",{staticClass:"share_word"},[t._v("分享链接-包含 "+t._s(t.checkedList.length)+" 项内容")]),t._v(" "),s("li",{staticClass:"remark"},[s("span",[t._v(t._s(t.shareTextarea))])])]),t._v(" "),s("div",{staticClass:"share_input"},[s("el-input",{attrs:{disabled:"disabled",placeholder:"请输入内容",clearable:""},model:{value:t.shareUrl,callback:function(e){t.shareUrl=e},expression:"shareUrl"}}),t._v(" "),s("button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.shareUrl,expression:"shareUrl",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.onCopy,expression:"onCopy",arg:"success"}],staticClass:"share_copy"},[t._v("复制链接")]),t._v(" "),t.isDialogCopy?s("div",{staticClass:"share_tip"},[s("button",{staticClass:"know",on:{click:t.tipKnow}},[t._v("知道了")])]):t._e()],1),t._v(" "),s("div",{staticClass:"copy_word",class:{copy_word_hidden:t.hidden}},[s("span",[t._v("复制链接成功")])])]):t._e()])}),[],!1,null,"3f963306",null);e.a=l.exports},991:function(t,e,s){"use strict";var i=s(762);s.n(i).a},992:function(t,e,s){"use strict";var i=s(763);s.n(i).a}}]);
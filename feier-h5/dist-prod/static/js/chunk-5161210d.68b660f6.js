(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5161210d"],{"2a5c":function(t,e,s){"use strict";var o=s("796d"),a=s.n(o);a.a},"796d":function(t,e,s){},"95cc":function(t,e,s){"use strict";s.r(e);var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"accessoriesList van-clearfix"},[s("LoadingList")],1)},a=[],l=s("cebc"),n=(s("433b"),s("d399")),i=(s("9eda"),s("565f")),c=(s("c625"),s("b650")),r=(s("3ec1"),s("7744")),u=(s("2a53"),s("34e9")),d=s("2b0e"),h=s("2f62"),f=s("751a"),p=(s("358c"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"position-box"},[t.list.length>0?s("vue-better-scroll",{ref:"scroll",staticClass:"wrapper",attrs:{scrollbar:t.scrollbarObj,pullDownRefresh:t.pullDownRefreshObj,pullUpLoad:t.pullUpLoadObj,startY:parseInt(t.startY)},on:{pullingDown:t.onPullingDown,pullingUp:t.onPullingUp}},t._l(t.list,function(e,o){return s("van-collapse",{key:o,staticClass:"list_collapse list-content",attrs:{title:o,id:o},model:{value:t.activeNames,callback:function(e){t.activeNames=e},expression:"activeNames"}},[null!=e.oemPartName?s("van-collapse-item",{staticClass:"list_collapse_item list-item",attrs:{title:e.oemPartName,name:o}},["完成"===t.header?s("van-checkbox",{ref:"checkboxes",refInFor:!0,staticClass:"check_box",attrs:{slot:"icon",name:"item","checked-color":"#B51A1A"},on:{click:function(s){return s.stopPropagation(),t.toggle(e.seqId)}},slot:"icon",model:{value:e.isChecked,callback:function(s){t.$set(e,"isChecked",s)},expression:"item.isChecked"}}):t._e(),null!=e.mfrPartNo?s("van-cell",{attrs:{title:"菲尔号",value:e.mfrPartNo}}):s("van-cell",{attrs:{title:"菲尔号",value:"暂无"}}),null!=e.oemPartNo?s("van-cell",{attrs:{title:"OE号",value:e.oemPartNo}}):s("van-cell",{attrs:{title:"OE号",value:"暂无"}}),null!=e.partPrice4s?s("van-cell",{attrs:{title:"4S建议零售价",value:e.partPrice4s+"元"}}):s("van-cell",{attrs:{title:"4S建议零售价",value:"暂无"}}),null!=e.mfrPartPrice?s("van-cell",{attrs:{title:"菲尔建议零售价",value:e.mfrPartPrice+"元"}}):s("van-cell",{attrs:{title:"菲尔建议零售价",value:"暂无"}}),"编辑"===t.header||""===t.header?s("van-cell",{attrs:{title:"需求数量",value:e.count}}):"完成"===t.header?s("van-cell",{attrs:{title:"需求数量"}},[s("van-stepper",{on:{plus:function(s){return t.plus(o,e.count)},minus:function(s){return t.minus(o,e.count)},blur:function(s){return t.blur(o,e.count)},focus:function(e){return t.focus()}},model:{value:e.count,callback:function(s){t.$set(e,"count",s)},expression:"item.count"}})],1):t._e()],1):null!=e.mfrPartName?s("van-collapse-item",{staticClass:"list_collapse_item",attrs:{title:e.mfrPartName,name:o}},["完成"===t.header?s("van-checkbox",{ref:"checkboxes",refInFor:!0,staticClass:"check_box",attrs:{slot:"icon",name:"item","checked-color":"#B51A1A"},on:{click:function(s){return s.stopPropagation(),t.toggle(e.seqId)}},slot:"icon",model:{value:e.isChecked,callback:function(s){t.$set(e,"isChecked",s)},expression:"item.isChecked"}}):t._e(),null!=e.mfrPartNo?s("van-cell",{attrs:{title:"菲尔号",value:e.mfrPartNo}}):s("van-cell",{attrs:{title:"菲尔号",value:"暂无"}}),null!=e.oemPartNo?s("van-cell",{attrs:{title:"OE号",value:e.oemPartNo}}):s("van-cell",{attrs:{title:"OE号",value:"暂无"}}),null!=e.partPrice4s?s("van-cell",{attrs:{title:"4S建议零售价",value:e.partPrice4s+"元"}}):s("van-cell",{attrs:{title:"4S建议零售价",value:"暂无"}}),null!=e.mfrPartPrice?s("van-cell",{attrs:{title:"菲尔建议零售价",value:e.mfrPartPrice+"元"}}):s("van-cell",{attrs:{title:"菲尔建议零售价",value:"暂无"}}),"编辑"===t.header||""===t.header?s("van-cell",{attrs:{title:"需求数量",value:e.count}}):"完成"===t.header?s("van-cell",{attrs:{title:"需求数量"}},[s("van-stepper",{on:{plus:function(s){return t.plus(o,e.count)},minus:function(s){return t.minus(o,e.count)},blur:function(s){return t.blur(o,e.count)}},model:{value:e.count,callback:function(s){t.$set(e,"count",s)},expression:"item.count"}})],1):t._e()],1):s("van-collapse-item",{staticClass:"list_collapse_item",attrs:{title:"暂无",name:o}},["完成"===t.header?s("van-checkbox",{ref:"checkboxes",refInFor:!0,staticClass:"check_box",attrs:{slot:"icon",name:"item","checked-color":"#B51A1A"},on:{click:function(s){return s.stopPropagation(),t.toggle(e.seqId)}},slot:"icon",model:{value:e.isChecked,callback:function(s){t.$set(e,"isChecked",s)},expression:"item.isChecked"}}):t._e(),null!=e.mfrPartNo?s("van-cell",{attrs:{title:"菲尔号",value:e.mfrPartNo}}):s("van-cell",{attrs:{title:"菲尔号",value:"暂无"}}),null!=e.oemPartNo?s("van-cell",{attrs:{title:"OE号",value:e.oemPartNo}}):s("van-cell",{attrs:{title:"OE号",value:"暂无"}}),null!=e.partPrice4s?s("van-cell",{attrs:{title:"4S建议零售价",value:e.partPrice4s+"元"}}):s("van-cell",{attrs:{title:"4S建议零售价",value:"暂无"}}),null!=e.mfrPartPrice?s("van-cell",{attrs:{title:"菲尔建议零售价",value:e.mfrPartPrice+"元"}}):s("van-cell",{attrs:{title:"菲尔建议零售价",value:"暂无"}}),"编辑"===t.header||""===t.header?s("van-cell",{attrs:{title:"需求数量",value:e.count}}):"完成"===t.header?s("van-cell",{attrs:{title:"需求数量"}},[s("van-stepper",{on:{plus:function(s){return t.plus(o,e.count)},minus:function(s){return t.minus(o,e.count)},blur:function(s){return t.blur(o,e.count)}},model:{value:e.count,callback:function(s){t.$set(e,"count",s)},expression:"item.count"}})],1):t._e()],1)],1)}),1):s("div",{staticClass:"no-data"},[t._v("您还未添加列表")])],1)}),m=[],v=(s("6b54"),s("4826"),s("f9bd")),g=(s("78a2"),s("1437")),b=(s("b342"),s("ad06")),P=(s("8fdb"),s("20fb")),C=s("253e"),k=s.n(C),L=1;d["a"].use(r["a"]).use(v["a"]).use(g["a"]).use(b["a"]).use(P["a"]);var x={name:"LoadingList",components:{VueBetterScroll:k.a},data:function(){return{testList:[],finished:!1,activeNames:[0],title1:"前翼子板（左）",title2:"前翼子板（右）",page:1,scrollbarObj:{fade:!0},pullDownRefreshObj:{threshold:90,stop:40},pullUpLoadObj:{threshold:0,txt:{more:"加载更多",noMore:"没有更多数据了"}},startY:0,scrollToX:0,scrollToY:0,scrollToTime:700,items:[]}},computed:{header:{set:function(t){console.log("set",t),this.setHeader(t)},get:function(){return this.$store.state.header}},list:{set:function(t){console.log("set",t),this.setList(t)},get:function(){return this.$store.state.list}},isLoading:{set:function(t){console.log("set",t),this.setLoading(t)},get:function(){return this.$store.state.isLoading}},accessoriesListTotalPage:{set:function(t){console.log("set",t),this.setAccessoriesTotalPage(t)},get:function(){return this.$store.state.accessoriesListTotalPage}}},methods:Object(l["a"])({},Object(h["c"])(["setHeader","setLoading","setList","setAccessoriesTotalPage"]),Object(h["b"])(["accessoriesList","cartUpdateCount"]),{toggle:function(t){console.log("seqId",t),console.log("list",this.list),this.list.map(function(e,s){e.seqId===t&&(e.isChecked=!e.isChecked,console.log(e.seqId),console.log(e.isChecked))})},scrollTo:function(){this.$refs.scroll.scrollTo(this.scrollToX,this.scrollToY,this.scrollToTime)},getData:function(){return new Promise(function(t){setTimeout(function(){for(var e=[],s=0;s<10;s++)e.push(L++);t(e)},1e3)})},onPullingDown:function(){if("完成"===this.header||""===this.header)this.$refs.scroll.forceUpdate(!1);else{console.log("下拉刷新"),this.setList([]),this.page=1;var t={page:this.page.toString(),limit:"5"};console.log("params",t),this.accessoriesList(t),this.$refs.scroll.forceUpdate(!0)}},onPullingUp:function(){if(console.log("上拉"),"完成"===this.header||""===this.header)this.$refs.scroll.forceUpdate(!1);else if(this.accessoriesListTotalPage>this.page){console.log("上拉加载"),this.page=this.page+1;var t={page:this.page.toString(),limit:"5"};this.accessoriesList(t),this.$refs.scroll.forceUpdate(!0)}else this.$refs.scroll.forceUpdate(!1)},plus:function(t,e){var s={shoppingCartList:[{seqId:this.list[t].seqId,count:e+1}]};this.cartUpdateCount(s)},minus:function(t,e){var s={shoppingCartList:[{seqId:this.list[t].seqId,count:e-1}]};this.cartUpdateCount(s)},blur:function(t,e){console.log(t),console.log(e),document.getElementsByClassName("header-box")[0].style.cssText="position:fixed;width:100%;z-index:1;";var s={shoppingCartList:[{seqId:this.list[t].seqId,count:e}]};this.cartUpdateCount(s)},focus:function(){console.log("focus"),this.iosKeyboard()},iosKeyboard:function(){/iphone|ipad/i.test(navigator.userAgent.toLowerCase())?document.getElementsByClassName("header-box")[0].style.cssText="position:absolute;width:100%;":document.getElementsByClassName("scroll-content")[0].firstChild.style.paddingBottom="400px"}}),created:function(){}},N=x,_=(s("a18d"),s("2877")),$=Object(_["a"])(N,p,m,!1,null,null,null),O=$.exports;d["a"].use(r["a"]).use(u["a"]);var T={name:"home",components:{VanButton:c["a"],VanField:i["a"],LoadingList:O},computed:{authorization:{set:function(t){console.log("set",t),this.setAuthorization(t)},get:function(){return this.$store.state.authorization}},productCode:{set:function(t){console.log("set",t),this.setProductCode(t)},get:function(){return this.$store.state.productCode}}},data:function(){return{phoneNum:"186021512031",codeNum:"000000",responseCode:""}},created:function(){var t=this,e=this;try{this.$bridge.callhandler("getAccessToken","",function(s){var o=s.mjToken,a=s.productCode;t.setAuthorization(o),t.setProductCode(a),f["a"].http.defaults.headers.common["Authorization"]=o,f["a"].http.defaults.headers.common["Product-Code"]=a;var l={page:"1",limit:"5"};console.log("params",l),e.accessoriesList(l)})}catch(s){n["a"].fail(err)}},mounted:function(){},methods:Object(l["a"])({},Object(h["c"])(["setAuthorization","setProductCode"]),Object(h["b"])(["accessoriesList"]))},w=T,I=(s("2a5c"),Object(_["a"])(w,o,a,!1,null,"1f25224a",null));e["default"]=I.exports},a18d:function(t,e,s){"use strict";var o=s("d097"),a=s.n(o);a.a},d097:function(t,e,s){}}]);
webpackJsonp([16],{"/RED":function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=s("5y8O"),i={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"wrapper"},[e("div",{staticClass:"header"},[e("div",{staticClass:"header-aside",on:{click:function(a){return t.back()}}},[e("img",{attrs:{src:s("i5dz")}})]),t._v(" "),e("div",{staticClass:"header-text"},[t._v("收支记录")]),t._v(" "),e("div",{staticClass:"header-aside"})]),t._v(" "),e("div",{staticClass:"main"},t._l(t.tabdata,function(a){return e("div",{staticClass:"main-one"},[e("div",{staticClass:"one-top"},[e("div",{staticClass:"top-text"},[t._v(t._s(a.usRiderTakeId))]),t._v(" "),e("div",{staticClass:"top-news"},[t._v(t._s(t._f("shaixuan")(a.usRtType)))])]),t._v(" "),e("div",{staticClass:"one-bottom"},[e("div",{staticClass:"bottom-text"},[t._v(t._s(a.usRtCreateTime))]),t._v(" "),e("div",{staticClass:"bottom-news"},[t._v(t._s(a.usRtPrice))])])])}),0)])},staticRenderFns:[]};var n=function(t){s("I5+/")},r=s("VU/8")(e.a,i,!1,n,"data-v-169488da",null);a.default=r.exports},"5y8O":function(t,a,s){"use strict";(function(t){a.a={name:"shouzhijilu",data:function(){return{tabdata:[]}},methods:{myajax:function(){var a=this;t.ajax({type:"post",url:a.myurl+"/rider/riderImportAnExport",data:{usRiderId:localStorage.getItem("myid")},success:function(t){200==t.status?a.tabdata=t.data:alert(t.msg)},error:function(t){alert("网络连接失败，请检查网络后再试！")}})},back:function(){this.$router.back()},opennew:function(t,a){this.$store.state.msdNewsId=a,this.$router.push({name:t})}},mounted:function(){this.myajax()},computed:{myurl:function(){return this.$store.state.myurl}},filters:{shaixuan:function(t){return 1==t?"完成":2==t?"申请中":2==t?"提现失败":void 0}}}}).call(a,s("7t+N"))},"I5+/":function(t,a){}});
//# sourceMappingURL=16.b970118921107c3a2204.js.map
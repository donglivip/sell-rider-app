webpackJsonp([19],{Lmfn:function(t,s){},QOFo:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n=i("mJ5k"),a={render:function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"wrapper"},[n("div",{staticClass:"header"},[n("div",{staticClass:"header-top"},[n("div",{staticClass:"header-aside"},[n("img",{attrs:{src:i("svVb")},on:{click:function(s){return t.xianshi()}}})]),t._v(" "),n("div",{staticClass:"header-content"},[t._v("美邦跑腿")]),t._v(" "),n("div",{staticClass:"header-aside"},[n("img",{attrs:{src:i("dZWw")},on:{click:function(s){return t.opennew("tongzhixiaoxi")}}})])]),t._v(" "),n("div",{staticClass:"header-bottom"},[n("div",{staticClass:"header-text",on:{click:function(s){return t.opennew("index")}}},[t._v("首页")]),t._v(" "),n("div",{staticClass:"header-text",on:{click:function(s){return t.opennew("peisong")}}},[t._v("外卖")]),t._v(" "),n("div",{staticClass:"header-text",on:{click:function(s){return t.opennew("paotui-mai")}}},[t._v("跑腿")]),t._v(" "),n("div",{staticClass:"header-text header-news"},[t._v("任务")])])]),t._v(" "),n("div",{staticClass:"main"},[n("div",{staticClass:"main-one"},[n("div",{staticClass:"one-top"},[n("div",{staticClass:"top-text top-news"},[t._v("外卖订单")]),t._v(" "),n("div",{staticClass:"top-text",on:{click:function(s){return t.opennew("renwu02")}}},[t._v("跑腿订单")])]),t._v(" "),n("div",{staticClass:"one-bottom"},[n("div",{staticClass:"one-text",class:2==t.myindex?"one-news":"",on:{click:function(s){return t.bian(2)}}},[t._v("待取货")]),t._v(" "),n("div",{staticClass:"one-text",class:3==t.myindex?"one-news":"",on:{click:function(s){return t.bian(3)}}},[t._v("待送达")]),t._v(" "),n("div",{staticClass:"one-text",class:1==t.myindex?"one-news":"",on:{click:function(s){return t.bian(1)}}},[t._v("已完成")])])]),t._v(" "),n("div",{staticClass:"box"},t._l(t.tabdata,function(s){return n("div",{staticClass:"main-box",on:{click:function(i){return t.dian02(s.usOrderId)}}},[n("div",{staticClass:"main-a"},[n("div",{staticClass:"a-zi"},[t._v("#"+t._s(s.usOrNum))]),t._v(" "),n("div",{staticClass:"a-han"},[t._v(t._s(s.usTsCompanyName))]),t._v(" "),n("div",{staticClass:"a-time"},[t._v(t._s(s.usOrClaimTimeString)+"送达")])]),t._v(" "),n("div",{staticClass:"main-b"},[n("div",{staticClass:"b-left"},[t._v("取")]),t._v(" "),n("div",{staticClass:"b-content",on:{click:function(i){return i.stopPropagation(),t.daohang(s.usTsCoordinatesLongitude,s.usTsCoordinatesDimension)}}},[n("div",{staticClass:"b-top"},[n("div",{staticClass:"b-text"},[t._v(t._s(s.usTsArea))]),t._v(" "),n("div",{staticClass:"b-news"},[t._v(t._s(s.companyDistance)+"km")])]),t._v(" "),n("div",{staticClass:"b-bottom"},[t._v(t._s(s.usTsDetailed))])]),t._v(" "),n("div",{staticClass:"b-right"},[n("a",{attrs:{href:"tel:"+s.usTsContactPhone}},[n("img",{attrs:{src:i("NV6c")}})])])]),t._v(" "),n("div",{staticClass:"main-b",on:{click:function(i){return i.stopPropagation(),t.daohang(s.map.lng,s.map.lat)}}},[n("div",{staticClass:"b-left"},[t._v("送")]),t._v(" "),n("div",{staticClass:"b-content"},[n("div",{staticClass:"b-top"},[n("div",{staticClass:"b-text"},[t._v(t._s(s.usAdsProvince))]),t._v(" "),n("div",{staticClass:"b-news"},[t._v(t._s(s.userDistance)+"km")])]),t._v(" "),n("div",{staticClass:"b-bottom"},[t._v(t._s(s.usAdsDetailed))])]),t._v(" "),n("div",{staticClass:"b-right"},[n("a",{attrs:{href:"tel:"+s.usAdsPhone}},[n("img",{attrs:{src:i("NV6c")}})])])]),t._v(" "),n("div",{staticClass:"main-c"},[2==t.myindex?n("div",{staticClass:"c-text",on:{click:function(i){return i.stopPropagation(),t.qu(s.usOrderId)}}},[t._v("确认取货")]):t._e(),t._v(" "),3==t.myindex?n("div",{staticClass:"c-text",on:{click:function(i){return i.stopPropagation(),t.song(s.usOrderId)}}},[t._v("确认送达")]):t._e(),t._v(" "),2==t.myindex?n("div",{staticClass:"c-news",on:{click:function(i){return i.stopPropagation(),t.zhuan(s.usOrderId)}}},[t._v("转单")]):t._e()])])}),0)]),t._v(" "),t.wode?n("div",{staticClass:"mengceng",on:{click:t.dian}},[n("div",{staticClass:"m-box"},[t._m(0),t._v(" "),n("div",{staticClass:"m-coment",on:{click:function(s){return s.stopPropagation(),t.opennew("waimaidingdan")}}},[n("img",{attrs:{src:i("QuTj")}}),t._v(" "),n("div",{staticClass:"m-news"},[t._v("我的订单")])]),t._v(" "),n("div",{staticClass:"m-coment",on:{click:function(s){return s.stopPropagation(),t.opennew("renzheng02")}}},[n("img",{attrs:{src:i("0CQG")}}),t._v(" "),n("div",{staticClass:"m-news"},[t._v("实名认证")])]),t._v(" "),n("div",{staticClass:"m-coment",on:{click:function(s){return s.stopPropagation(),t.opennew("caiwuzhongxin")}}},[n("img",{attrs:{src:i("Ebq/")}}),t._v(" "),n("div",{staticClass:"m-news"},[t._v("财务中心")])]),t._v(" "),n("div",{staticClass:"m-coment",on:{click:function(s){return s.stopPropagation(),t.opennew("fuwuzhongxin")}}},[n("img",{attrs:{src:i("/w03")}}),t._v(" "),n("div",{staticClass:"m-news"},[t._v("服务中心")])]),t._v(" "),n("div",{staticClass:"m-coment",on:{click:function(s){return s.stopPropagation(),t.opennew("jiaonayajin")}}},[n("img",{attrs:{src:i("qqPu")}}),t._v(" "),n("div",{staticClass:"m-news"},[t._v("缴纳押金")])]),t._v(" "),t._m(1),t._v(" "),n("div",{staticClass:"m-coment",on:{click:function(s){return s.stopPropagation(),t.opennew("rule")}}},[n("img",{attrs:{src:i("OphI")}}),t._v(" "),n("div",{staticClass:"m-news"},[t._v("服务标准")])]),t._v(" "),n("div",{staticClass:"m-coment",on:{click:function(s){return s.stopPropagation(),t.opennew("aboutus")}}},[n("img",{attrs:{src:i("v1af")}}),t._v(" "),n("div",{staticClass:"m-news"},[t._v("关于我们")])]),t._v(" "),n("div",{staticClass:"m-bottom",on:{click:function(s){return t.opennew("denglu")}}},[t._v("退出登录")])])]):t._e()])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"m-top"},[s("img",{attrs:{src:i("ygqi")}}),this._v(" "),s("div",{staticClass:"m-text"},[this._v("DD MOGUL")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("a",{staticClass:"m-coment",attrs:{href:"tel:0572-5129628"}},[s("img",{attrs:{src:i("2TlA")}}),this._v(" "),s("div",{staticClass:"m-news"},[this._v("在线客服")])])}]};var e=function(t){i("Lmfn")},o=i("VU/8")(n.a,a,!1,e,"data-v-4227e3d0",null);s.default=o.exports},mJ5k:function(t,s,i){"use strict";(function(t){s.a={name:"renwu",data:function(){return{wode:!1,tabdata:[],myindex:2}},methods:{daohang:function(t,s){var i=new plus.maps.Point(that.jing,that.wei),n=new plus.maps.Point(t,s);plus.maps.openSysMap(i,"为您导航",n)},zhuan:function(s){var i=this;plus.nativeUI.showWaiting("转单中"),t.ajax({type:"post",url:i.myurl+"/purchase/transferOfOrder",data:{usOrderId:s,type:1},success:function(t){200==t.status?(alert("转单成功"),i.myajax()):alert(t.msg),plus.nativeUI.closeWaiting()},error:function(t){plus.nativeUI.closeWaiting(),alert("网络连接失败，请检查网络后再试！")}})},song:function(s){var i=this;plus.nativeUI.showWaiting("收货中"),t.ajax({type:"post",url:i.myurl+"/rider/riderTriderConfirmGoodsUser",data:{usOrderId:s,id:localStorage.getItem("myid")},success:function(t){plus.nativeUI.closeWaiting(),200==t.status?(alert("收货成功"),i.myajax()):alert(t.msg)},error:function(t){plus.nativeUI.closeWaiting(),alert("网络连接失败，请检查网络后再试！")}})},qu:function(s){var i=this;plus.nativeUI.showWaiting("取货中"),t.ajax({type:"post",url:i.myurl+"/rider/riderTriderConfirmGoods",data:{usOrderId:s},success:function(t){plus.nativeUI.closeWaiting(),200==t.status?(alert("取货成功"),i.myajax()):alert(t.msg)},error:function(t){plus.nativeUI.closeWaiting(),alert("网络连接失败，请检查网络后再试！")}})},dian02:function(t){this.$store.state.dingdanid=t,this.$router.push({name:"xiangqing02"})},bian:function(t){this.myindex=t,this.myajax()},myajax:function(){var s=this;document.addEventListener("plusready",function(){plus.nativeUI.showWaiting()}),t.ajax({type:"post",url:s.myurl+"/rider/queryRiderOrderPojo",data:{id:localStorage.getItem("myid"),type:this.myindex,long1:s.jing,lat1:s.wei},success:function(t){document.addEventListener("plusready",function(){plus.nativeUI.closeWaiting()}),200==t.status?s.tabdata=t.data:alert(t.msg)},error:function(t){document.addEventListener("plusready",function(){plus.nativeUI.closeWaiting()}),alert("网络连接失败，请检查网络后再试！")}})},dian:function(){this.wode=!1},xianshi:function(){this.wode=!0},back:function(){this.$router.back()},opennew:function(t,s){this.$store.state.msdNewsId=s,this.$router.push({name:t})}},mounted:function(){this.myajax()},computed:{myurl:function(){return this.$store.state.myurl},dingdanid:function(){return this.$store.state.dingdanid},jing:function(){return this.$store.state.jing},wei:function(){return this.$store.state.wei}}}}).call(s,i("7t+N"))}});
//# sourceMappingURL=19.e3ae40d3016af54197ca.js.map
"use strict";(self["webpackChunkrx"]=self["webpackChunkrx"]||[]).push([[947],{947:function(e,a,t){t.r(a),t.d(a,{default:function(){return o}});var s=function(){var e=this,a=e._self._c;return a("div",{staticClass:"search"},[a("form",{attrs:{action:"/"}},[a("div",{on:{click:e.goHome}},[a("van-nav-bar",{staticClass:"top1",attrs:{"left-text":"返回","left-arrow":""}},[void 0],2)],1),a("van-search",{staticClass:"top",attrs:{"show-action":"",placeholder:"请输入搜索关键词"},on:{keydown:function(a){return!a.type.indexOf("key")&&e._k(a.keyCode,"enter",13,a.key,"Enter")?null:e.Search.apply(null,arguments)}},model:{value:e.value,callback:function(a){e.value=a},expression:"value"}})],1),a("div",{staticClass:"menu-porduct"},e._l(e.message,(function(t,s){return a("div",{key:s,staticClass:"m-pro-item clearfix",on:{click:function(a){return e.goDetall(t.pid)}}},[a("div",[a("img",{staticClass:"pro-img fl",attrs:{src:t.smallImg,alt:""}})]),a("div",{staticClass:"text fl"},[a("div",{staticClass:"pro-name"},[e._v(e._s(t.name))]),a("div",{staticClass:"pro-enname"},[e._v(e._s(t.enname))])]),a("div",{staticClass:"price fl"},[e._v(" ￥"+e._s(t.price)+" ")])])})),0)])},l=[],r={name:"Search",data(){return{message:[],value:"",pid:""}},methods:{Search(){this.axios({method:"GET",url:"/search",params:{appkey:this.appkey,name:this.value}}).then((e=>{console.log("我拿到了数据",e),this.message=e.data.result}))},goHome(e){this.$router.push({name:"Home"})},goDetall(e){this.$router.push({name:"Detall",params:{pid:e}})}}},n=r,i=t(1001),c=(0,i.Z)(n,s,l,!1,null,"15bcc491",null),o=c.exports}}]);
//# sourceMappingURL=947.149f8d70.js.map
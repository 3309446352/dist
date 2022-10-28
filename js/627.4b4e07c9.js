"use strict";(self["webpackChunkrx"]=self["webpackChunkrx"]||[]).push([[627],{6627:function(e,t,a){a.r(t),a.d(t,{default:function(){return c}});var r=function(){var e=this,t=e._self._c;return t("div",{staticClass:"toForget"},[t("div",{staticClass:"User"},[e._m(0),t("div",{staticClass:"Username"},[e._v("Luckin Coffee")]),t("div",{staticClass:"Home",on:{click:e.goDetall}},[e._v("首页")]),e._m(1)]),t("div",[t("van-field",{attrs:{name:"手机号",label:"手机号",placeholder:"手机号",rules:[{required:!0,message:"请填写手机号"}]},model:{value:e.phone,callback:function(t){e.phone=t},expression:"phone"}}),t("van-field",{attrs:{type:"password",name:"新密码",label:"新密码",placeholder:"新密码",rules:[{required:!0,message:"请填写新密码"}]},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),t("van-field",{attrs:{type:"email",name:"邮箱",label:"邮箱",placeholder:"邮箱",rules:[{required:!0,message:"请填写邮箱"}]},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),t("van-field",{attrs:{center:"",clearable:"",label:"邮箱验证码",placeholder:"请输入验证码"},scopedSlots:e._u([{key:"button",fn:function(){return[t("van-button",{attrs:{size:"small",type:"primary",color:"rgb(32, 77, 238)"},on:{click:function(t){return e.getValidCode()}}},[e._v(e._s(e.text)+" ")])]},proxy:!0}])}),t("br"),t("div",{staticStyle:{"font-size":"12px",float:"right"},on:{click:e.toForget}},[e._v("已有账号?立即登录")]),t("br"),t("div",{staticStyle:{margin:"16px"}},[t("van-button",{attrs:{round:"",block:"",type:"info","native-type":"submit",color:"rgb(32, 77, 238)"}},[e._v("提交")])],1)],1)])},l=[function(){var e=this,t=e._self._c;return t("div",[t("img",{attrs:{src:a(4001),alt:""}})])},function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"welcome"},[e._v("忘记密码!")]),t("br"),t("br"),t("div",{staticClass:"text"},[e._v("forget password")])])}],s=a(4605),i={name:"goDetall",data(){return{password:"",phone:"",email:"",code:"",isSend:!1,text:"发送验证码"}},methods:{goDetall(){this.$router.go(-1)},toForget(){this.$router.push({name:"Login"})},next(){let e={email:{value:this.email,errormsg:"邮箱格式不正确",reg:/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/},code:{value:this.email,erroeMsg:"验证码不正确",reg:/^[A-Za-z\d]{6}$/}},t=s.$.valid(e);t&&(this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0}),this.axios({method:"POST",url:"/checkValidCode",data:{appkey:this.appkey,email:this.email}}).then((e=>{this.$toast.clear(),this.$toast(e.data.msg),e.data.msg,(e.data.code="k001")&&(this.isNext=!0)})).catch((e=>{this.$toast.clear()})))},getValidCode(){let e={email:{value:this.email,errormsg:"邮箱格式不正确",reg:/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/}},t=s.$.valid(e);if(!t)return this.$toast("当我瞎呀，没有邮箱");let a=60;this.isSend=!0,this.text=`${a}秒后重新发送`;let r=setInterval((()=>{a<=0?(clearInterval(r),r=null,a=60,this.isSend=!1):(a--,this.text=`${a}秒后重新发送`)}),1e3);this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0}),this.axios({method:"POST",url:"/emailValidCode",data:{appkey:this.appkey,email:this.email}}).then((e=>{this.$toast.clear(),this.$toast(e.data.msg),console.log(e)})).catch((e=>{this.$toast.clear()}))}}},n=i,o=a(1001),d=(0,o.Z)(n,r,l,!1,null,"2afabf4f",null),c=d.exports},4605:function(e,t,a){a.d(t,{$:function(){return i}});a(6743);var r=a(8848),l=a(6369);l["default"].use(r.Z);class s{constructor(){}valid(e){for(let t in e)if(!e[t].reg.test(e[t].value))return(0,r.Z)(e[t].errorMsg),!1;return!0}}const i=new s},4001:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpGNDhBRjkyNEQ4OEQxMUVBOTJCMUMxQjA4RDI2RUIyRSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpGNDhBRjkyNUQ4OEQxMUVBOTJCMUMxQjA4RDI2RUIyRSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkY0OEFGOTIyRDg4RDExRUE5MkIxQzFCMDhEMjZFQjJFIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkY0OEFGOTIzRDg4RDExRUE5MkIxQzFCMDhEMjZFQjJFIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+XgLlYQAAAwBQTFRFMlbRGkHD8fL0YXrY7e7wvMLV+vr7293mZHrFRGPMwcXTLVLLvMTcDTjJWXHDeorC6OntVGzBDTjHWXG+yc3Z+Pj5m6bL5ebqETvJx8nS9fb7xsrZ4ePp8PHz0NXiDDS8lqLKUm7LRGHGztLfyc7fwMbauL7UO1rBUWq/9PX2Ole5nqnNiZbE4ePmDDbEl6HB2tzir7XOYHW8KU3EDDbAeo3Meo/TVnDUkZ3G3N7iGELKboTSqbLSTGnM3+LrDTfGpK3KprHVcYbMLVDCKk/K1djiy9Dg5+jsc4O6QFzBRWG9Zn3Ob3uynKXC4uTqlabdTmOrGTu3SmbEHkfTW3TJFT7HYXSyxMbNDDW+srrVOVnJYnOtTGa7RV+0oqvKEDrGjp3OtrvO0NTe3uDmgY68wsjaPV7On6nKWm2rJkzTqrLOVGmyQl6919ndEDnC7e3vNVXIPV3JYXrKDjvTa3/Aa325HEK/DDS5sbfLj5zJASe2HUTINFfEn6rQiZa+MVXPsbjROVrOJkvJgZTTDTa+VnDEJkrBJ0m+7+/xGT/DbIPOMVXKMlXHi5vNZXm+2Nndzc/VHkbMpa/TN1nMDDa8hpbMdojGMFPHF0DJEzzHO1zLDTbCDTfE/f39/Pz8DTbDDDbDDDbCDTfC8/T1+fn61Nbf+/v76+zu1tfbiZrXZXzIMVLC9fX3hpPCrLTSuMHf4eXvF0DFrLbWzNTwp7TbjZvH1NflBh6yy83VmafSL1jd6+36gZDFlJ/D3OP2p6/NIUfFxcvf/v7+DTa5f5HPo6nHzM/bN1jGX3fKQF3WoKvOGD/Roq3NUWWw0dPc0tTbr7jUgo6ycoXDucbtFz/Cq7LJkpzPrbPJRGDRrbTMcYG2n6/c8PL6f42+tr3U3N7jDDW7GkPKzdPq6uzwsrnlq7TXm6jPd4zPDze/jZvLlp66QGDK2NznNFfM1NXhNlbAZni2DDfCxsvhDDfDtL3ek53Cgo/WlKDGyMrTyszTx8ze9vb3boHBmaPDDDS6////jV/H1wAAAQB0Uk5T////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////AFP3ByUAAAYFSURBVHjarJh5XBRVHMAFBZRllM/q6hrgiIRSQBmMpgg+j10PSDzJEY/1AjUVTaVRiPBC+RhqaIo4syyHrgeYbfeB2Yl22KmVXQxZamFmWVlR85rZnYWZ2ZnZ/bTz+2Pfm7e//c77vfc73ttOUGPpxLdf3aYt8Nvnp+7WFPhJAfheU+DTBeR8TYGvFJATNAW+XIAt7xiMWdfXX2DDVHqvoX2w59rZ/gJfn0g7BrvH6nTgEb/98D6S+sY99r6FjPAb+BaobXSPFVHbVvkNNFvoAVV8fwKV5n/o2VuZLPciLkXu9x8IGymqP98dABZrAGzKc9sc+Ci4pQHwUCuqz3H1NlFaAOE7AEtydqytPpkc0c8LsDSZzjrs7E1BbnjnHTYuC+daQ6ISEJ4AWImz04NqDfYKTNAnR7FNW3RLkRIwqgJFZnGdjdT5ROnv68KjxC+JppwLtK72lxIlIEylGB1nRrODWtI+aPjgQuONKROLN+s2rVjemPonn0KOPATi2Wa+nnFEKAJhdwwrsXLZpjqdT0ILkiqyqJoaEmdYwUnSBsr2BzWw3/SnDrBxsN5I6EdDZWAfE01t4WwG+li2CXmzHmAoIxaUBGXDAhsqyK4QDgxAwT6oAoRhRsJ2jJ3YGWzFocgrLSTNyAkN6ifrLU3wu3cZsAuqAmE8QlDHuClSQ8u3MkpCH7wU0bXhmSxCn3TICxD2RwjbGAPMWJ9YTyvx0EIzzCz70oSCXcHQGxD2NtI35+7JHQ/N05WIYDQs7fyv/XC3fDv0DoRhyVvTru3csQr+ugyVwxGVl6E1bCGrOWIU9AUIe81gPyJHQnh90E1P3hvTf+PiHcJL3cmsUb4Aq44HjMjkw/tKJSZZPnDvddd3QcU4gVrm+QAcQRL05k9LXQ/jdqUAikadwuCUIzrMNR5+xejkGwd6BSYgnCap2xfpeg6J/yK6LIDl0a/G9R7OB/aLJpxwzbi8nxdgbCXvalRl99Ph7syQuPLo0d19+KdFG3QU2uGSd6gCx5s4X0ExsH1adFpudsbdMXUi17VmXjzbUivcfXKMKvA4twmo458cbg3tfS6smV58jc86QZN+XJwxqAVIAygvVgUYYeFUTGaBD7nVrU0ZhWv1tRgO+OVzC37QoAyc4/SSgHvkk3Rg6LChQ7ZMmoNLAmeJInABcKlUbnAfImCX4VYpN4eSpIozBuUE6wouQr/iNFcEAmOHTH7NI16ftUlj+wkFYPOB9njFqcJu57rpfgqS0sJTB8+VbgsepwA8IXo1TeLbmiW4qJM7L+7I84jvlGZZYNWdktWuDPWofaxzf0x6AG2nZIGDU8RqV4/L7PSsaVcJD6DQZgFwtOTVKSFStxk45GGAy+VI0yo5YL5493BJTH24ZjuCKSTx2gg5YLr45ZZeogobh+C4YtWq3iMDbCsWT3CikBc8jSIYZan+Wga4qFD0E0p0s1ivV+Mxdy2VAT5WK9IxxgiBZ3E1HoOnywBn1ojceqwwQINzUVUg0+oViGeIHKZCHUg8KAPsKypw+t9FEbLaC/BzuTUUAZEcIdCeq24xdk4GuNIhrL/nw0Ve3VN9U6pnywCPmIR78rMor8NbQBVomyADrMoWrBMdLY67kSmqflh9WS70kgTJgcyXJIb5QI2Y1yQH7C0Ago+keWs/orLRplI54AsWAfBfj0xYpAM1Ckx8jmw+rKvv0AcylbT0s6TsQqymhmJFnMbIH+RrSo8Om0GQbGW2D/9rZujJp27lt1oowWyzzPLAJqQD+LeXm5n5hKm9PGPpClXPerDdEnC718telwQHrw7mKRX694DPM3SeRlc7ifjYQCWgIds9RTDOl8t2ZCdOH5xSPiylIrz7ghyfru/XygkGP9OgDLQPwJXdRk7mAcJ1JVY6cC7kjzdgko9/MaSRM9TP2MNcrmNL8BG48aXx6sCqEufZ6vHOPgLbQrxdK0rfpp01qs3vv1naU5+O2xgkRjMgfK6YtXrrH9oBYWa6jUGTA7UDwqg1CAOKNARCGF+O7TVoCYTmuLU9NAVC+EBuqLZAaHhSY+D/k/8EGAB2nq9EgLWL1gAAAABJRU5ErkJggg=="}}]);
//# sourceMappingURL=627.4b4e07c9.js.map
!function(o){var n={};function a(t){if(n[t])return n[t].exports;var e=n[t]={i:t,l:!1,exports:{}};return o[t].call(e.exports,e,e.exports,a),e.l=!0,e.exports}a.m=o,a.c=n,a.d=function(t,e,o){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(o,n,function(t){return e[t]}.bind(null,n));return o},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="",a(a.s=4)}([,,,,function(t,e,o){var n=o(5),a=o(6),r=o(7);$app_define$("@app-component/index",[],function(t,e,o){r(o,e,t),e.__esModule&&e.default&&(o.exports=e.default),o.exports.template=n,o.exports.style=a}),$app_bootstrap$("@app-component/index",{packagerName:"fa-toolkit",packagerVersion:"1.1.2-Stable.302"})},function(t,e){t.exports={type:"div",attr:{},classList:["demo-page"],children:[{type:"div",attr:{},classList:["topTitle"],children:[{type:"stack",attr:{},children:[{type:"input",attr:{type:"button",value:"返回"},events:{click:"backIndex"}},{type:"text",attr:{value:"意见反馈"}}]}]},{type:"textarea",attr:{id:"advice",placeholder:"请详细描述你的问题和意见",maxlength:"200"},id:"advice",events:{change:"search"}},{type:"input",attr:{type:"button",value:"提交"},classList:["subBtn"],style:{opacity:function(){return this.kg?"0.3":"1"}},events:{click:"sendAdvice"}}]}},function(t,e){t.exports={".demo-page":{flexDirection:"column",alignItems:"center",backgroundColor:"#eeeeee"},"#advice":{backgroundColor:"#ffffff",marginTop:"30px",marginRight:"0px",marginBottom:"30px",marginLeft:"0px",width:"100%",paddingTop:"10px",paddingRight:"10px",paddingBottom:"10px",paddingLeft:"10px",height:"400px",fontSize:"30px",lineHeight:"40px",placeholderColor:"#999999"},".subBtn":{color:"#ffffff",borderRadius:"10px",fontSize:"40px",backgroundColor:"#4077ff",height:"80px",width:"97%"},".topTitle":{height:"80px",justifyContent:"flex-start",alignItems:"center",width:"100%",backgroundColor:"#ffffff"},".topTitle input":{borderTopWidth:"0px",borderRightWidth:"0px",borderBottomWidth:"0px",borderLeftWidth:"0px",backgroundColor:"rgba(0,0,0,0)",color:"#414141",marginTop:"0px",marginRight:"50px",marginBottom:"0px",marginLeft:"20px",fontSize:"30px",_meta:{ruleDef:[{t:"a",n:"class",i:!1,a:"element",v:"topTitle"},{t:"d"},{t:"t",n:"input"}]}},".topTitle text":{color:"#414141",textAlign:"center",fontSize:"40px",width:"100%",_meta:{ruleDef:[{t:"a",n:"class",i:!1,a:"element",v:"topTitle"},{t:"d"},{t:"t",n:"text"}]}}}},function(t,e){t.exports=function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=p(o("@app-module/system.router")),a=p(o("@app-module/system.fetch")),r=p(o("@app-module/system.prompt")),i=p(o("@app-module/system.storage"));function p(t){return t&&t.__esModule?t:{default:t}}function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var c={private:{kg:!0,txt:"",token:""},onShow:function(){$umeng_stat.resume(this)},onHide:function(){$umeng_stat.pause(this)},onInit:function(){var e=this;i.default.get({key:"token",success:function(t){e.token=t},fail:function(t,e){console.log("handling fail, code = "+e)}})},sendAdvice:function(){this.kg?r.default.showToast({message:"请向填写问题和意见~"}):a.default.fetch({url:this.$app.$def.baseUrl+"/api/shebao/feedback/add",header:{"User-Token":this.token,"User-Device-Type":"quickapp",device_type:"quickapp",channel:this.$app.$def.brand,app_version:this.$app.$def.appVersion,appid:this.$app.$def.appId},method:"POST",data:{text:this.txt},success:function(t){var e=JSON.parse(t.data);r.default.showToast({message:e.msg}),console.log(e.code),1==e.code&&setTimeout(function(){n.default.push({uri:"/Index"})},1e3)},fail:function(t,e){console.log("handling fail, code = "+e)}})},search:function(t){this.kg=t.text.length<=0,this.txt=t.text},backIndex:function(){n.default.push({uri:"/Index"})}};e.default=c;var d=e.default||t.exports,l=["public","protected","private"];if(d.data&&l.some(function(t){return d[t]}))throw new Error("页面VM对象中属性data不可与public, protected, private同时存在，请使用public替代data！");d.data||(d.data={},d._descriptor={},l.forEach(function(t){var e=u(d[t]);if("object"===e)for(var o in d.data=Object.assign(d.data,d[t]),d[t])d._descriptor[o]={access:t};else"function"===e&&console.warn("页面VM对象中的属性"+t+"的值不能使函数，请使用对象")}))}}]);
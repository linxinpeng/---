!function(a){var i={};function n(e){if(i[e])return i[e].exports;var t=i[e]={i:e,l:!1,exports:{}};return a[e].call(t.exports,t,t.exports,n),t.l=!0,t.exports}n.m=a,n.c=i,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(a,i,function(e){return t[e]}.bind(null,i));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=57)}({57:function(e,t,a){var i=a(58),n=a(59),r=a(60);$app_define$("@app-component/index",[],function(e,t,a){r(a,t,e),t.__esModule&&t.default&&(a.exports=t.default),a.exports.template=i,a.exports.style=n}),$app_bootstrap$("@app-component/index",{packagerName:"fa-toolkit",packagerVersion:"1.1.2-Stable.302"})},58:function(e,t){e.exports={type:"div",attr:{},classList:["demo-page"],children:[{type:"div",attr:{},classList:["topTitle"],children:[{type:"stack",attr:{},children:[{type:"input",attr:{type:"button",value:"返回"},events:{click:"backIndex"}},{type:"text",attr:{value:"查社保"}}]}]},{type:"div",attr:{},classList:["form"],children:[{type:"div",attr:{},classList:["item"],events:{click:"setPosition"},children:[{type:"image",attr:{src:"http://cdn.shebao.dai58.cn/themes/simpleboot3/public/quickapp/renrenshebao/index/position.png"},style:{height:"50px",marginLeft:"5px"}},{type:"div",attr:{},children:[{type:"text",attr:{value:function(){return this.city}}},{type:"image",attr:{src:"http://cdn.shebao.dai58.cn/themes/simpleboot3/public/quickapp/renrenshebao/personal/arrow.png"},classList:["image"]}]}]},{type:"block",attr:{},repeat:function(){return this.option},children:[{type:"div",attr:{},classList:["item"],children:[{type:"image",attr:{src:"http://cdn.shebao.dai58.cn/themes/simpleboot3/public/quickapp/renrenshebao/query/id.png"},classList:["image"],shown:function(){return"text"==this.$item.type}},{type:"image",attr:{src:"http://cdn.shebao.dai58.cn/themes/simpleboot3/public/quickapp/renrenshebao/login/lock.png"},classList:["image"],shown:function(){return!("text"==this.$item.type)}},{type:"input",attr:{type:function(){return this.$item.type},placeholder:function(){return this.$item.label}},events:{change:function(e){this.getSearch(this.$idx,e)}}}]}]}]},{type:"div",attr:{},classList:["auth"],children:[{type:"image",attr:{src:"http://cdn.shebao.dai58.cn/themes/simpleboot3/public/quickapp/renrenshebao/query/xieyi1.png"},shown:function(){return!this.isAgree},events:{click:"changeAgree"}},{type:"image",attr:{src:"http://cdn.shebao.dai58.cn/themes/simpleboot3/public/quickapp/renrenshebao/query/xieyi2.png"},shown:function(){return!!this.isAgree},events:{click:"changeAgree"}},{type:"text",attr:{value:"同意"}},{type:"text",attr:{value:"《认证服务协议》"},events:{click:"serverDetail"},style:{color:"#4077ff"}}]},{type:"input",attr:{type:"button",value:"查询"},classList:["queryBtn"],events:{click:"saerchResult"}},{type:"div",attr:{},classList:["warn"],children:[{type:"text",attr:{value:"数据加密，请放心查询"}},{type:"text",attr:{value:"人人社保平台将保障您的信息安全"}}]}]}},59:function(e,t){e.exports={".queryBtn":{width:"90%",height:"100px",color:"#ffffff",fontSize:"36px",marginTop:"140px",backgroundColor:"#4077ff",borderRadius:"8px"},".demo-page":{flexDirection:"column",justifyContent:"flex-start",alignItems:"center"},".how":{height:"100px",width:"100%",backgroundColor:"#FFF8E7",alignItems:"center"},".how image":{marginTop:"0px",marginRight:"24px",marginBottom:"0px",marginLeft:"24px",_meta:{ruleDef:[{t:"a",n:"class",i:!1,a:"element",v:"how"},{t:"d"},{t:"t",n:"image"}]}},".how text":{fontSize:"28px",color:"#ec9300",_meta:{ruleDef:[{t:"a",n:"class",i:!1,a:"element",v:"how"},{t:"d"},{t:"t",n:"text"}]}},".btn":{width:"550px",height:"86px",marginTop:"75px",borderRadius:"43px",backgroundColor:"#09ba07",fontSize:"30px",color:"#ffffff"},".form":{justifyContent:"center",width:"100%",flexDirection:"column",alignItems:"center"},".form .image":{width:"50px",height:"50px",_meta:{ruleDef:[{t:"a",n:"class",i:!1,a:"element",v:"form"},{t:"d"},{t:"a",n:"class",i:!1,a:"element",v:"image"}]}},".form .item":{width:"90%",height:"100px",alignItems:"center",justifyContent:"flex-start",borderTopWidth:"0px",borderRightWidth:"0px",borderBottomWidth:"1px",borderLeftWidth:"0px",borderStyle:"solid",borderTopColor:"#ededed",borderRightColor:"#ededed",borderBottomColor:"#ededed",borderLeftColor:"#ededed",_meta:{ruleDef:[{t:"a",n:"class",i:!1,a:"element",v:"form"},{t:"d"},{t:"a",n:"class",i:!1,a:"element",v:"item"}]}},".form .item input":{paddingLeft:"24px",fontSize:"28px",color:"#c9c9c9",flexGrow:1,height:"100%",lineHeight:"100px",_meta:{ruleDef:[{t:"a",n:"class",i:!1,a:"element",v:"form"},{t:"d"},{t:"a",n:"class",i:!1,a:"element",v:"item"},{t:"d"},{t:"t",n:"input"}]}},".form .item .bbb":{paddingLeft:"0px",_meta:{ruleDef:[{t:"a",n:"class",i:!1,a:"element",v:"form"},{t:"d"},{t:"a",n:"class",i:!1,a:"element",v:"item"},{t:"d"},{t:"a",n:"class",i:!1,a:"element",v:"bbb"}]}},".form .item div":{paddingLeft:"28px",flexGrow:1,justifyContent:"space-between",_meta:{ruleDef:[{t:"a",n:"class",i:!1,a:"element",v:"form"},{t:"d"},{t:"a",n:"class",i:!1,a:"element",v:"item"},{t:"d"},{t:"t",n:"div"}]}},".form .item div image":{height:"24px",width:"14px",_meta:{ruleDef:[{t:"a",n:"class",i:!1,a:"element",v:"form"},{t:"d"},{t:"a",n:"class",i:!1,a:"element",v:"item"},{t:"d"},{t:"t",n:"div"},{t:"d"},{t:"t",n:"image"}]}},".form .item div .litEye1":{width:"36px",height:"22px",_meta:{ruleDef:[{t:"a",n:"class",i:!1,a:"element",v:"form"},{t:"d"},{t:"a",n:"class",i:!1,a:"element",v:"item"},{t:"d"},{t:"t",n:"div"},{t:"d"},{t:"a",n:"class",i:!1,a:"element",v:"litEye1"}]}},".form .item div .litEye2":{width:"36px",height:"22px",_meta:{ruleDef:[{t:"a",n:"class",i:!1,a:"element",v:"form"},{t:"d"},{t:"a",n:"class",i:!1,a:"element",v:"item"},{t:"d"},{t:"t",n:"div"},{t:"d"},{t:"a",n:"class",i:!1,a:"element",v:"litEye2"}]}},".warn":{position:"fixed",bottom:"20px",width:"100%",flexDirection:"column",alignItems:"center"},".warn text":{fontSize:"24px",color:"#999999",_meta:{ruleDef:[{t:"a",n:"class",i:!1,a:"element",v:"warn"},{t:"d"},{t:"t",n:"text"}]}},".topTitle":{height:"80px",justifyContent:"flex-start",alignItems:"center",width:"100%",backgroundColor:"#eeeeee"},".topTitle input":{borderTopWidth:"0px",borderRightWidth:"0px",borderBottomWidth:"0px",borderLeftWidth:"0px",backgroundColor:"rgba(0,0,0,0)",color:"#414141",marginTop:"0px",marginRight:"50px",marginBottom:"0px",marginLeft:"20px",fontSize:"30px",_meta:{ruleDef:[{t:"a",n:"class",i:!1,a:"element",v:"topTitle"},{t:"d"},{t:"t",n:"input"}]}},".topTitle text":{color:"#414141",textAlign:"center",fontSize:"40px",width:"100%",_meta:{ruleDef:[{t:"a",n:"class",i:!1,a:"element",v:"topTitle"},{t:"d"},{t:"t",n:"text"}]}},".auth":{marginTop:"20px",justifyContent:"flex-start",alignItems:"center",width:"90%"},".auth image":{width:"30px",height:"30px",marginRight:"10px",_meta:{ruleDef:[{t:"a",n:"class",i:!1,a:"element",v:"auth"},{t:"d"},{t:"t",n:"image"}]}}}},60:function(e,t){e.exports=function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=s(a("@app-module/system.router")),n=s(a("@app-module/system.fetch")),r=s(a("@app-module/system.prompt")),o=s(a("@app-module/system.storage"));function s(e){return e&&e.__esModule?e:{default:e}}function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var l={private:{title:"示例页面",show:!0,city:"",href:"",option:[],search:[],token:"",authServer:"",isAgree:!0},onShow:function(){$umeng_stat.resume(this)},onHide:function(){$umeng_stat.pause(this)},onInit:function(){var t=this,a=this;this.city=this.$app.$def.city,o.default.get({key:"token",success:function(e){a.token=e},fail:function(e,t){}}),o.default.get({key:"agreement",success:function(e){t.authServer=e},fail:function(e,t){console.log("handling fail, code = "+t)}}),this.getOption()},changeAgree:function(){this.isAgree=!this.isAgree},serverDetail:function(){i.default.push({uri:this.authServer})},getOption:function(){var t=this;""==this.$app.$def.city_id?r.default.showToast({message:"请先选择城市!",duration:2e3,gravity:"center"}):n.default.fetch({url:this.$app.$def.baseUrl+"/api/shebao/task/city_auth_config",header:{device_type:"quickapp",channel:this.$app.$def.brand,app_version:this.$app.$def.appVersion,appid:this.$app.$def.appId},data:{city_id:this.$app.$def.city_id,debug:""},success:function(e){(e=JSON.parse(e.data)).data.entrys?(t.href=e.data.page_config[0].value,t.option=e.data.entrys.parameters,t.option.map(function(e){t.search.push({name:e.name,value:""})})):r.default.showToast({message:"当前定位的城市没有提供服务，请见谅。",duration:2e3,gravity:"center"})},fail:function(e,t){}})},howSearch:function(){i.default.push({uri:this.href})},getSearch:function(e,t){this.search[e].value=t.text},saerchResult:function(){if(this.isAgree)if(""==this.$app.$def.city_id)r.default.showToast({message:"请先选择城市",duration:2e3,gravity:"center"});else{var t={},a=!0;if(t.city_id=this.$app.$def.city_id,this.search.map(function(e){""!=e.value&&null!=e.value||(a=!1),t[e.name]||(t[e.name]=e.value)}),a){var e=this;n.default.fetch({url:e.$app.$def.baseUrl+"/api/shebao/task/auth_login",header:{"User-Token":e.token,"User-Device-Type":"quickapp","App-Version":"1",device_type:"quickapp",channel:e.$app.$def.brand,app_version:e.$app.$def.appVersion,appid:e.$app.$def.appId},data:t,success:function(e){var t=JSON.parse(e.data);if(1!=t.code)return r.default.showToast({message:t.msg,duration:2e3,gravity:"center"}),!1;t.msg.includes("请重新登陆app")?(r.default.showToast({message:"登陆过期请重新登陆！",duration:2e3,gravity:"center"}),i.default.replace({uri:"/Login",params:{key:"Query"}})):i.default.push({uri:"/Loading",params:{taskId:t.data.task_id}})},fail:function(e,t){r.default.showToast({message:"网络故障，请稍后再试",duration:2e3,gravity:"center"})}})}else r.default.showToast({message:"请填写正确信息.",duration:2e3,gravity:"center"})}else r.default.showToast({message:"您未同意认证服务协议.",duration:2e3,gravity:"center"})},setPosition:function(){i.default.push({uri:"/SelectPosition",params:{from:"Query"}})},backIndex:function(){i.default.push({uri:"/Index"})}};t.default=l;var c=t.default||e.exports,d=["public","protected","private"];if(c.data&&d.some(function(e){return c[e]}))throw new Error("页面VM对象中属性data不可与public, protected, private同时存在，请使用public替代data！");c.data||(c.data={},c._descriptor={},d.forEach(function(e){var t=p(c[e]);if("object"===t)for(var a in c.data=Object.assign(c.data,c[e]),c[e])c._descriptor[a]={access:e};else"function"===t&&console.warn("页面VM对象中的属性"+e+"的值不能使函数，请使用对象")}))}}});
!function(a){var n={};function i(t){if(n[t])return n[t].exports;var e=n[t]={i:t,l:!1,exports:{}};return a[t].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=a,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=61)}({61:function(t,e,a){var n=a(62),i=a(63),r=a(64);$app_define$("@app-component/index",[],function(t,e,a){r(a,e,t),e.__esModule&&e.default&&(a.exports=e.default),a.exports.template=n,a.exports.style=i}),$app_bootstrap$("@app-component/index",{packagerName:"fa-toolkit",packagerVersion:"1.1.2-Stable.302"})},62:function(t,e){t.exports={type:"div",attr:{},classList:["demo-page"],children:[{type:"div",attr:{},classList:["topTitle"],children:[{type:"input",attr:{type:"button",value:"返回"},classList:["back"],events:{click:"backIndex"}},{type:"text",attr:{value:"查询结果"}},{type:"input",attr:{type:"button",value:"更新"},classList:["refresh"],events:{click:"refresh"}}]},{type:"div",attr:{},classList:["header"],children:[{type:"stack",attr:{},children:[{type:"div",attr:{},classList:["top"],children:[{type:"text",attr:{},classList:["name"],children:[{type:"span",attr:{value:function(){return this.infor.name}}},{type:"span",attr:{value:function(){return"("+(""==this.infor.company_name?"无":this.infor.company_name)+")"}},classList:["company"]}]},{type:"text",attr:{value:function(){return"最后更新:"+this.infor.u_time}},classList:["time"]}]},{type:"div",attr:{},classList:["right"],children:[{type:"image",attr:{src:"http://cdn.shebao.dai58.cn/themes/simpleboot3/public/quickapp/renrenshebao/result/normal.png"},classList:["img"],shown:function(){return"正常参保"==this.infor.state}},{type:"image",attr:{src:"http://cdn.shebao.dai58.cn/themes/simpleboot3/public/quickapp/renrenshebao/result/error.png"},classList:["img"],shown:function(){return!("正常参保"==this.infor.state)}}]}]},{type:"div",attr:{},classList:["bottom"],children:[{type:"div",attr:{},classList:["item"],children:[{type:"text",attr:{value:"医保余额(元)"},classList:["name"]},{type:"text",attr:{value:function(){return this.fixTo2(this.medical_overview.balance)}},classList:["number"]}]},{type:"div",attr:{},classList:["item"],children:[{type:"text",attr:{value:"养老余额(元)"},classList:["name"]},{type:"text",attr:{value:function(){return this.fixTo2(this.endowment_overview.balance)}},classList:["number"]}]},{type:"div",attr:{},classList:["item"],children:[{type:"text",attr:{value:"累计缴纳(月)"},classList:["name"]},{type:"text",attr:{value:function(){return this.medical_overview.total_income_month}},classList:["number"]}]}]}]},{type:"div",attr:{},classList:["content"],children:[{type:"tabs",attr:{},events:{change:"onChangeTabIndex"},children:[{type:"tab-bar",attr:{},classList:["tab-bar"],children:[{type:"text",attr:{value:"数据分析"},classList:function(){return[this.tabArr[0].class]}},{type:"text",attr:{value:"缴存明细"},classList:function(){return[this.tabArr[1].class]}},{type:"text",attr:{value:"医疗记录"},classList:function(){return[this.tabArr[2].class]}}]},{type:"tab-content",attr:{},classList:["tab-content"],children:[{type:"div",attr:{},classList:["tab-content-section"],children:[{type:"div",attr:{},classList:["firstItem"],children:[{type:"div",attr:{},style:{height:"120px",alignItems:"center",justifyContent:"center",width:"100%"},children:[{type:"text",attr:{value:function(){return this.year+"年"+this.month+"月 缴费数据分析"}},classList:["time"]}]},{type:"div",attr:{},classList:["title"],children:[{type:"div",attr:{},classList:["border"]},{type:"text",attr:{value:"详细缴费比例"}}]},{type:"div",attr:{},classList:["table"],children:[{type:"div",attr:{},classList:["th"],children:[{type:"text",attr:{value:"缴费项目"}},{type:"text",attr:{value:"缴费比例"}},{type:"text",attr:{value:"单位缴纳"}},{type:"text",attr:{value:"个人缴纳"}},{type:"text",attr:{value:"合计"}}]},{type:"div",attr:{},classList:["tr","tr1"],children:[{type:"text",attr:{value:"医保"}},{type:"text",attr:{value:function(){return this.toPerecent(this.medical_insurance.company_percentage+this.medical_insurance.personal_percentage)+"%"}}},{type:"text",attr:{value:function(){return this.toInit(this.medical_insurance.monthly_company_income)}}},{type:"text",attr:{value:function(){return this.toInit(this.medical_insurance.monthly_personal_income)}}},{type:"text",attr:{value:function(){return this.toInit(this.medical_insurance.sum)}}}]},{type:"div",attr:{},classList:["tr"],children:[{type:"text",attr:{value:"养老"}},{type:"text",attr:{value:function(){return this.toPerecent(this.endowment_insurance.company_percentage+this.endowment_insurance.personal_percentage)+"%"}}},{type:"text",attr:{value:function(){return this.toInit(this.endowment_insurance.monthly_company_income)}}},{type:"text",attr:{value:function(){return this.toInit(this.endowment_insurance.monthly_personal_income)}}},{type:"text",attr:{value:function(){return this.toInit(this.endowment_insurance.sum)}}}]},{type:"div",attr:{},classList:["tr","tr1"],children:[{type:"text",attr:{value:"生育"}},{type:"text",attr:{value:function(){return this.toPerecent(this.maternity_insurance.company_percentage+this.maternity_insurance.personal_percentage)+"%"}}},{type:"text",attr:{value:function(){return this.toInit(this.maternity_insurance.monthly_company_income)}}},{type:"text",attr:{value:function(){return this.toInit(this.maternity_insurance.monthly_personal_income)}}},{type:"text",attr:{value:function(){return this.toInit(this.maternity_insurance.sum)}}}]},{type:"div",attr:{},classList:["tr"],children:[{type:"text",attr:{value:"失业"}},{type:"text",attr:{value:function(){return this.toPerecent(this.unemployment_insurance.company_percentage+this.unemployment_insurance.personal_percentage)+"%"}}},{type:"text",attr:{value:function(){return this.toInit(this.unemployment_insurance.monthly_company_income)}}},{type:"text",attr:{value:function(){return this.toInit(this.unemployment_insurance.monthly_personal_income)}}},{type:"text",attr:{value:function(){return this.toInit(this.unemployment_insurance.sum)}}}]},{type:"div",attr:{},classList:["tr","tr1"],children:[{type:"text",attr:{value:"工伤"}},{type:"text",attr:{value:function(){return this.toPerecent(this.accident_insurance.company_percentage+this.accident_insurance.personal_percentage)+"%"}}},{type:"text",attr:{value:function(){return this.toInit(this.accident_insurance.monthly_company_income)}}},{type:"text",attr:{value:function(){return this.toInit(this.accident_insurance.monthly_personal_income)}}},{type:"text",attr:{value:function(){return this.toInit(this.accident_insurance.sum)}}}]},{type:"div",attr:{},classList:["tr"],children:[{type:"text",attr:{value:"合计"}},{type:"text",attr:{value:"-"}},{type:"text",attr:{value:function(){return this.toInit(this.medical_insurance.monthly_company_income+this.endowment_insurance.monthly_company_income+this.maternity_insurance.monthly_company_income+this.unemployment_insurance.monthly_company_income+this.accident_insurance.monthly_company_income)}}},{type:"text",attr:{value:function(){return this.toInit(this.medical_insurance.monthly_personal_income+this.endowment_insurance.monthly_personal_income+this.maternity_insurance.monthly_personal_income+this.unemployment_insurance.monthly_personal_income+this.accident_insurance.monthly_personal_income)}}},{type:"text",attr:{value:function(){return this.toInit(this.medical_insurance.sum+this.endowment_insurance.sum+this.maternity_insurance.sum+this.unemployment_insurance.sum+this.accident_insurance.sum)}}}]}]}]}]},{type:"div",attr:{},classList:["tab-content-section"],children:[{type:"div",attr:{},classList:["secondItem"],children:[{type:"div",attr:{},classList:["item"],events:{click:function(t){this.detail(1,t)}},children:[{type:"div",attr:{},children:[{type:"image",attr:{src:"http://cdn.shebao.dai58.cn/themes/simpleboot3/public/quickapp/renrenshebao/result/yiliao.png"},classList:["icon"]},{type:"text",attr:{value:"医疗保险"}}]},{type:"div",attr:{},style:{alignItems:"center"},children:[{type:"text",attr:{},classList:["num"]},{type:"image",attr:{src:"http://cdn.shebao.dai58.cn/themes/simpleboot3/public/quickapp/renrenshebao/personal/arrow.png"},classList:["arrow"]}]}]},{type:"div",attr:{},classList:["item"],events:{click:function(t){this.detail(2,t)}},children:[{type:"div",attr:{},children:[{type:"image",attr:{src:"http://cdn.shebao.dai58.cn/themes/simpleboot3/public/quickapp/renrenshebao/result/yanlao.png"},classList:["icon"]},{type:"text",attr:{value:"养老保险"}}]},{type:"div",attr:{},style:{alignItems:"center"},children:[{type:"text",attr:{},classList:["num"]},{type:"image",attr:{src:"http://cdn.shebao.dai58.cn/themes/simpleboot3/public/quickapp/renrenshebao/personal/arrow.png"},classList:["arrow"]}]}]},{type:"div",attr:{},classList:["item"],events:{click:function(t){this.detail(3,t)}},children:[{type:"div",attr:{},children:[{type:"image",attr:{src:"http://cdn.shebao.dai58.cn/themes/simpleboot3/public/quickapp/renrenshebao/result/shengyu.png"},classList:["icon"]},{type:"text",attr:{value:"生育保险"}}]},{type:"div",attr:{},style:{alignItems:"center"},children:[{type:"text",attr:{},classList:["num"]},{type:"image",attr:{src:"http://cdn.shebao.dai58.cn/themes/simpleboot3/public/quickapp/renrenshebao/personal/arrow.png"},classList:["arrow"]}]}]},{type:"div",attr:{},classList:["item"],events:{click:function(t){this.detail(4,t)}},children:[{type:"div",attr:{},children:[{type:"image",attr:{src:"http://cdn.shebao.dai58.cn/themes/simpleboot3/public/quickapp/renrenshebao/result/shiye.png"},classList:["icon"]},{type:"text",attr:{value:"失业保险"}}]},{type:"div",attr:{},style:{alignItems:"center"},children:[{type:"text",attr:{},classList:["num"]},{type:"image",attr:{src:"http://cdn.shebao.dai58.cn/themes/simpleboot3/public/quickapp/renrenshebao/personal/arrow.png"},classList:["arrow"]}]}]},{type:"div",attr:{},classList:["item"],events:{click:function(t){this.detail(5,t)}},children:[{type:"div",attr:{},children:[{type:"image",attr:{src:"http://cdn.shebao.dai58.cn/themes/simpleboot3/public/quickapp/renrenshebao/result/gongshang.png"},classList:["icon"]},{type:"text",attr:{value:"工伤保险"}}]},{type:"div",attr:{},style:{alignItems:"center"},children:[{type:"text",attr:{},classList:["num"]},{type:"image",attr:{src:"http://cdn.shebao.dai58.cn/themes/simpleboot3/public/quickapp/renrenshebao/personal/arrow.png"},classList:["arrow"]}]}]}]}]},{type:"div",attr:{},classList:["tab-content-section"],children:[{type:"div",attr:{},classList:["thirdItem"],children:[{type:"div",attr:{},classList:["item"],repeat:function(){return this.medicalSpendRecord},children:[{type:"div",attr:{},children:[{type:"div",attr:{},style:{flexDirection:"column"},children:[{type:"div",attr:{},style:{marginBottom:"26px",alignItems:"center"},children:[{type:"image",attr:{src:"http://cdn.shebao.dai58.cn/themes/simpleboot3/public/quickapp/renrenshebao/result/clock.png"}},{type:"text",attr:{value:function(){return this.$item.time}}}]},{type:"text",attr:{value:function(){return this.$item.hosipital}},style:{marginLeft:"47px"}}]}]},{type:"text",attr:{value:function(){return"¥"+this.fixTo2(this.$item.money)}},classList:["price"]}]},{type:"div",attr:{},shown:function(){return this.noMore},classList:["loadMore"],children:[{type:"text",attr:{value:"已无更多"},style:{width:"100%",textAlign:"center"}}]},{type:"div",attr:{},shown:function(){return!this.noMore},events:{click:"loadMore"},classList:["loadMore"],children:[{type:"text",attr:{value:"点击加载更多"},style:{width:"100%",textAlign:"center"}}]}]}]}]}]}]}]}},63:function(t,e){t.exports={".demo-page":{flexDirection:"column",justifyContent:"flex-start",alignItems:"center"},".header":{flexDirection:"column",justifyContent:"flex-start",alignItems:"center",marginTop:"20px",background:'{"values":[{"type":"linearGradient","directions":["to","bottom"],"values":["#2b6bf5","#11B2FF"]}]}',height:"400px",width:"90%",paddingBottom:"18px",marginBottom:"20px"},".header stack":{width:"100%",justifyContent:"center",_meta:{ruleDef:[{t:"a",n:"class",i:!1,a:"element",v:"header"},{t:"d"},{t:"t",n:"stack"}]}},".header stack text":{textAlign:"left",color:"#FFFFFF",width:"100%",_meta:{ruleDef:[{t:"a",n:"class",i:!1,a:"element",v:"header"},{t:"d"},{t:"t",n:"stack"},{t:"d"},{t:"t",n:"text"}]}},".header stack .right":{width:"100%",justifyContent:"flex-end",_meta:{ruleDef:[{t:"a",n:"class",i:!1,a:"element",v:"header"},{t:"d"},{t:"t",n:"stack"},{t:"d"},{t:"a",n:"class",i:!1,a:"element",v:"right"}]}},".header stack .right image":{height:"150px",_meta:{ruleDef:[{t:"a",n:"class",i:!1,a:"element",v:"header"},{t:"d"},{t:"t",n:"stack"},{t:"d"},{t:"a",n:"class",i:!1,a:"element",v:"right"},{t:"d"},{t:"t",n:"image"}]}},".header .top":{height:"180px",width:"90%",borderTopWidth:"0px",borderRightWidth:"0px",borderBottomWidth:"1px",borderLeftWidth:"0px",borderStyle:"solid",borderTopColor:"#ffffff",borderRightColor:"#ffffff",borderBottomColor:"#ffffff",borderLeftColor:"#ffffff",paddingTop:"20px",paddingRight:"0px",paddingBottom:"20px",paddingLeft:"0px",justifyContent:"center",flexDirection:"column",_meta:{ruleDef:[{t:"a",n:"class",i:!1,a:"element",v:"header"},{t:"d"},{t:"a",n:"class",i:!1,a:"element",v:"top"}]}},".header .top .name":{fontSize:"46px",_meta:{ruleDef:[{t:"a",n:"class",i:!1,a:"element",v:"header"},{t:"d"},{t:"a",n:"class",i:!1,a:"element",v:"top"},{t:"d"},{t:"a",n:"class",i:!1,a:"element",v:"name"}]}},".header .top .name .company":{fontSize:"28px",_meta:{ruleDef:[{t:"a",n:"class",i:!1,a:"element",v:"header"},{t:"d"},{t:"a",n:"class",i:!1,a:"element",v:"top"},{t:"d"},{t:"a",n:"class",i:!1,a:"element",v:"name"},{t:"d"},{t:"a",n:"class",i:!1,a:"element",v:"company"}]}},".header .top .time":{fontSize:"26px",marginTop:"24px",opacity:.6,_meta:{ruleDef:[{t:"a",n:"class",i:!1,a:"element",v:"header"},{t:"d"},{t:"a",n:"class",i:!1,a:"element",v:"top"},{t:"d"},{t:"a",n:"class",i:!1,a:"element",v:"time"}]}},".header .bottom":{flexGrow:1,height:"220px",_meta:{ruleDef:[{t:"a",n:"class",i:!1,a:"element",v:"header"},{t:"d"},{t:"a",n:"class",i:!1,a:"element",v:"bottom"}]}},".header .bottom .item":{width:"30%",flexDirection:"column",alignItems:"center",justifyContent:"center",_meta:{ruleDef:[{t:"a",n:"class",i:!1,a:"element",v:"header"},{t:"d"},{t:"a",n:"class",i:!1,a:"element",v:"bottom"},{t:"d"},{t:"a",n:"class",i:!1,a:"element",v:"item"}]}},".header .bottom .item text":{textAlign:"center",color:"#ffffff",_meta:{ruleDef:[{t:"a",n:"class",i:!1,a:"element",v:"header"},{t:"d"},{t:"a",n:"class",i:!1,a:"element",v:"bottom"},{t:"d"},{t:"a",n:"class",i:!1,a:"element",v:"item"},{t:"d"},{t:"t",n:"text"}]}},".header .bottom .item .name":{height:"40px",lineHeight:"40px",textAlign:"center",width:"170px",backgroundColor:"rgba(0,0,0,0.1)",borderRadius:"20px",fontSize:"26px",_meta:{ruleDef:[{t:"a",n:"class",i:!1,a:"element",v:"header"},{t:"d"},{t:"a",n:"class",i:!1,a:"element",v:"bottom"},{t:"d"},{t:"a",n:"class",i:!1,a:"element",v:"item"},{t:"d"},{t:"a",n:"class",i:!1,a:"element",v:"name"}]}},".header .bottom .item .number":{fontSize:"46px",_meta:{ruleDef:[{t:"a",n:"class",i:!1,a:"element",v:"header"},{t:"d"},{t:"a",n:"class",i:!1,a:"element",v:"bottom"},{t:"d"},{t:"a",n:"class",i:!1,a:"element",v:"item"},{t:"d"},{t:"a",n:"class",i:!1,a:"element",v:"number"}]}},".tab-bar":{width:"100%",height:"80px",borderTopWidth:"0px",borderRightWidth:"0px",borderBottomWidth:"1px",borderLeftWidth:"0px",borderStyle:"solid",borderTopColor:"#eeeeee",borderRightColor:"#eeeeee",borderBottomColor:"#eeeeee",borderLeftColor:"#eeeeee"},".tab-bar text":{width:"20%",lineHeight:"80px",fontSize:"32px",color:"#666666",textAlign:"center",borderTopWidth:"0px",borderRightWidth:"0px",borderBottomWidth:"4px",borderLeftWidth:"0px",borderStyle:"solid",borderTopColor:"rgba(0,0,0,0)",borderRightColor:"rgba(0,0,0,0)",borderBottomColor:"rgba(0,0,0,0)",borderLeftColor:"rgba(0,0,0,0)",_meta:{ruleDef:[{t:"a",n:"class",i:!1,a:"element",v:"tab-bar"},{t:"d"},{t:"t",n:"text"}]}},".tab-bar .selected":{color:"#4077FF",borderTopColor:"#4077FF",borderRightColor:"#4077FF",borderBottomColor:"#4077FF",borderLeftColor:"#4077FF",_meta:{ruleDef:[{t:"a",n:"class",i:!1,a:"element",v:"tab-bar"},{t:"d"},{t:"a",n:"class",i:!1,a:"element",v:"selected"}]}},".content":{flexGrow:1},".tab-content":{width:"100%",paddingTop:"0px",paddingRight:"24px",paddingBottom:"0px",paddingLeft:"24px"},".firstItem .time":{height:"80px",paddingTop:"0px",paddingRight:"30px",paddingBottom:"0px",paddingLeft:"30px",borderTopWidth:"1px",borderRightWidth:"1px",borderBottomWidth:"1px",borderLeftWidth:"1px",borderStyle:"solid",borderTopColor:"#eeeeee",borderRightColor:"#eeeeee",borderBottomColor:"#eeeeee",borderLeftColor:"#eeeeee",borderRadius:"40px",textAlign:"center",fontSize:"28px",color:"#333333",_meta:{ruleDef:[{t:"a",n:"class",i:!1,a:"element",v:"firstItem"},{t:"d"},{t:"a",n:"class",i:!1,a:"element",v:"time"}]}},".firstItem .title":{height:"38px",alignItems:"center",width:"100%",textAlign:"left",fontSize:"36px",color:"#333333",_meta:{ruleDef:[{t:"a",n:"class",i:!1,a:"element",v:"firstItem"},{t:"d"},{t:"a",n:"class",i:!1,a:"element",v:"title"}]}},".firstItem .title .border":{backgroundColor:"#000000",width:"8px",height:"38px",marginRight:"20px",_meta:{ruleDef:[{t:"a",n:"class",i:!1,a:"element",v:"firstItem"},{t:"d"},{t:"a",n:"class",i:!1,a:"element",v:"title"},{t:"d"},{t:"a",n:"class",i:!1,a:"element",v:"border"}]}},".firstItem .title text":{fontSize:"36px",color:"#333333",_meta:{ruleDef:[{t:"a",n:"class",i:!1,a:"element",v:"firstItem"},{t:"d"},{t:"a",n:"class",i:!1,a:"element",v:"title"},{t:"d"},{t:"t",n:"text"}]}},".firstItem .table":{marginTop:"30px",width:"100%",flexDirection:"column",_meta:{ruleDef:[{t:"a",n:"class",i:!1,a:"element",v:"firstItem"},{t:"d"},{t:"a",n:"class",i:!1,a:"element",v:"table"}]}},".firstItem .table .tr":{height:"68px",width:"100%",_meta:{ruleDef:[{t:"a",n:"class",i:!1,a:"element",v:"firstItem"},{t:"d"},{t:"a",n:"class",i:!1,a:"element",v:"table"},{t:"d"},{t:"a",n:"class",i:!1,a:"element",v:"tr"}]},backgroundColor:"#f8f8f8"},".firstItem .table .th":{height:"68px",width:"100%",_meta:{ruleDef:[{t:"a",n:"class",i:!1,a:"element",v:"firstItem"},{t:"d"},{t:"a",n:"class",i:!1,a:"element",v:"table"},{t:"d"},{t:"a",n:"class",i:!1,a:"element",v:"th"}]},backgroundColor:"#f0f4ff"},".firstItem .table .tr text":{width:"20%",textAlign:"center",color:"#333333",height:"100%",lineHeight:"68px",_meta:{ruleDef:[{t:"a",n:"class",i:!1,a:"element",v:"firstItem"},{t:"d"},{t:"a",n:"class",i:!1,a:"element",v:"table"},{t:"d"},{t:"a",n:"class",i:!1,a:"element",v:"tr"},{t:"d"},{t:"t",n:"text"}]}},".firstItem .table .th text":{width:"20%",textAlign:"center",color:"#333333",height:"100%",lineHeight:"68px",_meta:{ruleDef:[{t:"a",n:"class",i:!1,a:"element",v:"firstItem"},{t:"d"},{t:"a",n:"class",i:!1,a:"element",v:"table"},{t:"d"},{t:"a",n:"class",i:!1,a:"element",v:"th"},{t:"d"},{t:"t",n:"text"}]}},".firstItem .table .tr1":{backgroundColor:"#ffffff",_meta:{ruleDef:[{t:"a",n:"class",i:!1,a:"element",v:"firstItem"},{t:"d"},{t:"a",n:"class",i:!1,a:"element",v:"table"},{t:"d"},{t:"a",n:"class",i:!1,a:"element",v:"tr1"}]}},".firstItem":{flexDirection:"column",width:"100%",alignItems:"center"},".secondItem":{flexDirection:"column",width:"100%",alignItems:"center"},".thirdItem":{flexDirection:"column",width:"100%",alignItems:"center"},".secondItem .item":{height:"180px",width:"100%",borderTopWidth:"0px",borderRightWidth:"0px",borderBottomWidth:"1px",borderLeftWidth:"0px",borderStyle:"solid",borderTopColor:"#eeeeee",borderRightColor:"#eeeeee",borderBottomColor:"#eeeeee",borderLeftColor:"#eeeeee",justifyContent:"space-between",alignItems:"center",_meta:{ruleDef:[{t:"a",n:"class",i:!1,a:"element",v:"secondItem"},{t:"d"},{t:"a",n:"class",i:!1,a:"element",v:"item"}]}},".secondItem .item text":{fontSize:"36px",color:"#333333",_meta:{ruleDef:[{t:"a",n:"class",i:!1,a:"element",v:"secondItem"},{t:"d"},{t:"a",n:"class",i:!1,a:"element",v:"item"},{t:"d"},{t:"t",n:"text"}]}},".secondItem .item .icon":{marginRight:"20px",width:"80px",height:"80px",_meta:{ruleDef:[{t:"a",n:"class",i:!1,a:"element",v:"secondItem"},{t:"d"},{t:"a",n:"class",i:!1,a:"element",v:"item"},{t:"d"},{t:"a",n:"class",i:!1,a:"element",v:"icon"}]}},".secondItem .item .arrow":{width:"14px",height:"24px",marginLeft:"10px",_meta:{ruleDef:[{t:"a",n:"class",i:!1,a:"element",v:"secondItem"},{t:"d"},{t:"a",n:"class",i:!1,a:"element",v:"item"},{t:"d"},{t:"a",n:"class",i:!1,a:"element",v:"arrow"}]}},".secondItem .item .num":{color:"#999999",_meta:{ruleDef:[{t:"a",n:"class",i:!1,a:"element",v:"secondItem"},{t:"d"},{t:"a",n:"class",i:!1,a:"element",v:"item"},{t:"d"},{t:"a",n:"class",i:!1,a:"element",v:"num"}]}},".thirdItem .item":{height:"180px",width:"100%",paddingTop:"34px",borderTopWidth:"0px",borderRightWidth:"0px",borderBottomWidth:"1px",borderLeftWidth:"0px",borderStyle:"solid",borderTopColor:"#eeeeee",borderRightColor:"#eeeeee",borderBottomColor:"#eeeeee",borderLeftColor:"#eeeeee",alignItems:"flex-start",justifyContent:"space-between",_meta:{ruleDef:[{t:"a",n:"class",i:!1,a:"element",v:"thirdItem"},{t:"d"},{t:"a",n:"class",i:!1,a:"element",v:"item"}]}},".thirdItem .item image":{width:"29px",height:"28px",marginRight:"18px",_meta:{ruleDef:[{t:"a",n:"class",i:!1,a:"element",v:"thirdItem"},{t:"d"},{t:"a",n:"class",i:!1,a:"element",v:"item"},{t:"d"},{t:"t",n:"image"}]}},".thirdItem .item text":{fontSize:"28px",color:"#333333",_meta:{ruleDef:[{t:"a",n:"class",i:!1,a:"element",v:"thirdItem"},{t:"d"},{t:"a",n:"class",i:!1,a:"element",v:"item"},{t:"d"},{t:"t",n:"text"}]}},".thirdItem .item .price":{width:"30%",lines:1,textAlign:"right",fontSize:"32px",_meta:{ruleDef:[{t:"a",n:"class",i:!1,a:"element",v:"thirdItem"},{t:"d"},{t:"a",n:"class",i:!1,a:"element",v:"item"},{t:"d"},{t:"a",n:"class",i:!1,a:"element",v:"price"}]}},".loadMore":{height:"100px",width:"100%",textAlign:"center"},".topTitle":{height:"80px",justifyContent:"space-around",alignItems:"center",width:"100%",paddingTop:"0px",paddingRight:"20px",paddingBottom:"0px",paddingLeft:"20px",backgroundColor:"#ffffff"},".topTitle input":{borderTopWidth:"0px",borderRightWidth:"0px",borderBottomWidth:"0px",borderLeftWidth:"0px",backgroundColor:"rgba(0,0,0,0)",color:"#414141",fontSize:"30px",_meta:{ruleDef:[{t:"a",n:"class",i:!1,a:"element",v:"topTitle"},{t:"d"},{t:"t",n:"input"}]}},".topTitle text":{color:"#414141",textAlign:"center",fontSize:"40px",width:"100%",_meta:{ruleDef:[{t:"a",n:"class",i:!1,a:"element",v:"topTitle"},{t:"d"},{t:"t",n:"text"}]}}}},64:function(t,e){t.exports=function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("@app-module/system.router")),r=n(a("@app-module/system.storage")),s=n(a("@app-module/system.fetch")),o=n(a("@app-module/system.prompt"));function n(t){return t&&t.__esModule?t:{default:t}}function l(t){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var c={private:{sendId:"",medicalSpendRecord:[],infor:"",isNormal:!0,noMore:!1,tabArr:[{class:"selected"},{class:""},{class:""}],token:"",year:"",month:"",medical_overview:{},endowment_overview:{},endowment_insurance:"",medical_insurance:"",unemployment_insurance:"",accident_insurance:"",maternity_insurance:"",page:1},protected:{taskId:""},onShow:function(){$umeng_stat.resume(this)},onHide:function(){$umeng_stat.pause(this)},onInit:function(){var n=this;this.sendId=this.taskId,this.$app.$def.isSearch=!0,r.default.get({key:"token",success:function(t){n.token=t,s.default.fetch({url:n.$app.$def.baseUrl+"/api/shebao/data/overview",header:{"User-Token":t,"User-Device-Type":"quickapp","app-version":"1",device_type:"quickapp",channel:n.$app.$def.brand,app_version:n.$app.$def.appVersion,appid:n.$app.$def.appId},data:{task_id:n.taskId},success:function(t){var e=JSON.parse(t.data);if(1==e.code){n.infor=e.data;var a={};0!=e.data.endowment_overview.total_income_month?(n.endowment_overview=e.data.endowment_overview,n.medical_overview=e.data.medical_overview,a.mMonth=e.data.medical_overview.total_income_month,a.oMonth=e.data.endowment_overview.total_income_month):(n.endowment_overview={total_income_month:e.data.endowment_overview.total_income_month,balance:0},n.medical_overview={balance:0,total_income_month:0},a.mMonth=0,a.oMonth=0),a.name=e.data.name,a.taskId=n.taskId,a.lastTime=e.data.u_time,a.isNormal="正常参保"==e.data.state,r.default.set({key:"detail",value:JSON.stringify(a),success:function(t){console.log("handling success")},fail:function(t,e){console.log("handling fail, code = "+e)}})}else 10002==e.code&&(o.default.showToast({message:"登陆过期请重新登陆",duration:2e3,gravity:"center"}),i.default.replace({uri:"/Login"}))},fail:function(t,e){console.log("handling fail, code = "+e)}}),s.default.fetch({url:n.$app.$def.baseUrl+"/api/shebao/data/insurance_month",header:{"User-Token":t,"User-Device-Type":"quickapp","app-version":"1",device_type:"quickapp",channel:n.$app.$def.brand,app_version:n.$app.$def.appVersion,appid:n.$app.$def.appId},data:{task_id:n.taskId,now_month:""},success:function(t){var e=JSON.parse(t.data);if(1==e.code){if(e.data.percentage.endowment_insurance)n.endowment_insurance=e.data.percentage.endowment_insurance,n.medical_insurance=e.data.percentage.medical_insurance,n.unemployment_insurance=e.data.percentage.unemployment_insurance,n.accident_insurance=e.data.percentage.accident_insurance,n.maternity_insurance=e.data.percentage.maternity_insurance;else{var a={company_percentage:0,monthly_company_income:0,monthly_personal_income:0,personal_percentage:0,sum:0};n.endowment_insurance=a,n.medical_insurance=a,n.unemployment_insurance=a,n.accident_insurance=a,n.maternity_insurance=a}n.year=e.data.now_month.substring(0,4),n.month=e.data.now_month.substring(4,e.data.now_month.length)}},fail:function(t,e){console.log("handling fail, code = "+e)}}),s.default.fetch({url:n.$app.$def.baseUrl+"/api/shebao/data/insurance",header:{"User-Token":t,"User-Device-Type":"quickapp","app-version":"1",device_type:"quickapp",channel:n.$app.$def.brand,app_version:n.$app.$def.appVersion,appid:n.$app.$def.appId},data:{task_id:n.taskId,category:"medical_consumption",page:n.page},success:function(t){var e=JSON.parse(t.data);1==e.code&&e.data.list&&0<e.data.list.length&&e.data.list.map(function(t,e){var a={time:"",money:"",hosipital:""};a.time=t.balance_date,a.money=t.total_amount,a.hosipital=t.medical_institution,n.medicalSpendRecord.push(a)})},fail:function(t,e){console.log("handling fail, code = "+e)}})},fail:function(t,e){console.log("handling fail, code = "+e)}})},routeDetail:function(){i.default.push({uri:"/DemoDetail"})},onChangeTabIndex:function(t){this.tabArr.map(function(t,e){t.class=""}),this.tabArr[t.index].class="selected"},fixTo2:function(t){return(parseFloat(t)/100).toFixed(2)},toInit:function(t){return(parseInt(t)/100).toFixed(0)},toPerecent:function(t){return(100*parseFloat(t)).toFixed(1)},loadMore:function(){var n=this;s.default.fetch({url:this.$app.$def.baseUrl+"/api/shebao/data/insurance",header:{"User-Token":this.token,"User-Device-Type":"quickapp","app-version":"1",device_type:"quickapp",channel:this.$app.$def.brand,app_version:this.$app.$def.appVersion,appid:this.$app.$def.appId},data:{task_id:this.taskId,category:"medical_consumption",page:++this.page},success:function(t){var e=JSON.parse(t.data);1==e.code&&e.data.list&&0<e.data.list.length?e.data.list.map(function(t,e){var a={time:"",money:"",hosipital:""};a.time=t.balance_date,a.money=t.total_amount,a.hosipital=t.medical_institution,n.medicalSpendRecord.push(a)}):n.noMore=!0},fail:function(t,e){console.log("handling fail, code = "+e)}})},detail:function(t){i.default.push({uri:"/JiaocunDetail",params:{type:t,taskId:this.sendId}})},backIndex:function(){i.default.push({uri:"/Index"})},refresh:function(){var e=this;this.$app.$def.canSearch?o.default.showDialog({title:"提示",message:"下载APP才能使用查询社保功能哦~",buttons:[{text:"取消",color:"#999999"},{text:"下载APP",color:"#4077ff"}],success:function(t){1==t.index&&($umeng_stat.trackEvent("gxchaxunxiazai","查询更新下载APP"),i.default.push({uri:e.$app.$def.downUrl}))},cancel:function(){console.log("handling cancel")},fail:function(t,e){console.log("handling fail, code = ".concat(e))}}):r.default.get({key:"token",success:function(t){""!=t?i.default.push({uri:"/Query"}):i.default.push({uri:"/Login",params:{key:"Query"}})},fail:function(t,e){}})}};e.default=c;var d=e.default||t.exports,p=["public","protected","private"];if(d.data&&p.some(function(t){return d[t]}))throw new Error("页面VM对象中属性data不可与public, protected, private同时存在，请使用public替代data！");d.data||(d.data={},d._descriptor={},p.forEach(function(t){var e=l(d[t]);if("object"===e)for(var a in d.data=Object.assign(d.data,d[t]),d[t])d._descriptor[a]={access:t};else"function"===e&&console.warn("页面VM对象中的属性"+t+"的值不能使函数，请使用对象")}))}}});
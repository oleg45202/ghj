(function(e){function t(t){for(var n,i,l=t[0],c=t[1],s=t[2],u=0,d=[];u<l.length;u++)i=l[u],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);p&&p(t);while(d.length)d.shift()();return r.push.apply(r,s||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],n=!0,l=1;l<a.length;l++){var c=a[l];0!==o[c]&&(n=!1)}n&&(r.splice(t--,1),e=i(i.s=a[0]))}return e}var n={},o={app:0},r=[];function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=n,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var p=c;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";a("85ec")},"1e58":function(e,t,a){"use strict";a("4c25")},"4c25":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",{staticClass:"mt-0",attrs:{id:"app"}},[a("div",{staticStyle:{position:"absolute",top:"-50px",right:"0px",width:"300px"}},[a("img",{attrs:{src:"https://redislabs.com/wp-content/uploads/2020/12/RedisLabs_Illustration_HomepageHero_v4.svg"}})]),a("div",{staticStyle:{height:"50px"}}),a("h1",{staticClass:"text-center",staticStyle:{color:"#444444"}},[e._v("Redis Leadboard Demo")]),a("div",{staticStyle:{height:"50px"}}),a("example")],1)},r=[],i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{staticClass:"example"},[a("v-row",{staticClass:"mb-5"},[a("v-col",{attrs:{cols:"12"}},[a("v-expansion-panels",{attrs:{multiple:""},model:{value:e.panel,callback:function(t){e.panel=t},expression:"panel"}},[a("v-expansion-panel",[a("v-expansion-panel-header",[e._v("How it works?")]),a("v-expansion-panel-content",[a("b",[e._v("1. How the data is stored:")]),a("ol",[a("li",[e._v("The company data is stored in a hash like below: "),a("pre",[e._v('HSET "company:AAPL" symbol "AAPL" market_cap "2600000000000" country USA')])]),a("li",[e._v("The Ranks are stored in a ZSET. "),a("pre",[e._v("ZADD companyLeaderboard 2600000000000 company:AAPL")])])]),a("br"),a("b",[e._v("2. How the data is accessed:")]),a("ol",[a("li",[e._v("Top 10 companies: "),a("pre",[e._v("ZREVRANGE companyLeaderboard 0 9 WITHSCORES")])]),a("li",[e._v("All companies: "),a("pre",[e._v("ZREVRANGE companyLeaderboard 0 -1 WITHSCORES")])]),a("li",[e._v("Bottom 10 companies: "),a("pre",[e._v("ZRANGE companyLeaderboard 0 9 WITHSCORES")])]),a("li",[e._v("Between rank 10 and 15: "),a("pre",[e._v("ZREVRANGE companyLeaderboard 9 14 WITHSCORES")])]),a("li",[e._v("Show ranks of AAPL, FB and TSLA: "),a("pre",[e._v("ZSCORE companyLeaderBoard company:AAPL company:FB company:TSLA")])]),a("li",[e._v("Adding market cap to companies: "),a("pre",[e._v('ZINCRBY companyLeaderBoard 1000000000 "company:FB"')])]),a("li",[e._v("Reducing market cap to companies: "),a("pre",[e._v('ZINCRBY companyLeaderBoard -1000000000 "company:FB"')])]),a("li",[e._v("Companies over a Trillion: "),a("pre",[e._v("ZCOUNT companyLeaderBoard 1000000000000 +inf")])]),a("li",[e._v("Companies between 500 billion and 1 trillion: "),a("pre",[e._v("ZCOUNT companyLeaderBoard 500000000000 1000000000000")])])])])],1)],1)],1)],1),a("v-row",[a("v-col",{attrs:{cols:"4"}},[a("v-select",{staticStyle:{background:"#FFF"},attrs:{items:e.ACTION_LIST,dense:"",outlined:"","hide-details":""},model:{value:e.method,callback:function(t){e.method=t},expression:"method"}})],1),a("v-col",{staticClass:"text-right",attrs:{cols:"8"}},[a("rank-selection-modal",{attrs:{companies:e.companies},on:{onUpdateRank:e.onUpdateRank},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on;return[a("v-btn",e._g({attrs:{color:"grey",outlined:""}},n),[a("v-icon",{staticClass:"mr-2"},[e._v("mdi-cog-outline")]),a("span",{staticStyle:{color:"#111","text-transform":"initial"}},[e._v("Update Rank")])],1)]}}]),model:{value:e.rankForm,callback:function(t){e.rankForm=t},expression:"rankForm"}})],1)],1),a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-card",{staticClass:"px-2",staticStyle:{"border-right":"10px"}},[a("v-data-table",{attrs:{headers:e.headers,items:e.companies,loading:e.loading,"disable-pagination":!0,"hide-default-footer":!0},scopedSlots:e._u([{key:"item.rank",fn:function(t){var a=t.item;return[e._v(" "+e._s(a.rank)+" ")]}},{key:"item.company",fn:function(t){var n=t.item;return[a("div",{staticClass:"d-flex align-center py-2"},[a("div",[a("img",{staticClass:"mr-3 my-2",attrs:{src:"https://companiesmarketcap.com//img/company-logos/80/"+n.symbol.toUpperCase()+".png",width:"40",height:"40"}})]),a("div",[a("div",{staticStyle:{"font-size":"1.1rem"}},[e._v(e._s(n.company))]),a("div",{staticClass:"grey--text",staticStyle:{"font-size":"0.7rem"}},[e._v(e._s(n.symbol.toUpperCase()))])])])]}},{key:"item.marketCap",fn:function(t){var n=t.item;return[a("div",{},[e._v(e._s(e.formatUSD(n.marketCap)))])]}},{key:"item.country",fn:function(t){var n=t.item;return[a("div",{staticClass:"d-flex align-center"},[a("div",[a("img",{staticClass:"mr-1",attrs:{src:e.getCountryFlag(n.country),width:"20"}})]),a("div",{},[e._v(e._s(n.country))])])]}},{key:"no-data",fn:function(){return[a("span",[e._v(" No Results Found. ")])]},proxy:!0}])}),"paginate"===e.method?a("v-btn",{attrs:{color:"primary",block:""},on:{click:e.loadData}},[e._v(" Load next 10 ")]):e._e()],1)],1)],1)],1)},l=[],c=(a("99af"),a("b680"),a("96cf"),a("1da1")),s=a("bc3a"),p=a.n(s),u=a("bf6b"),d=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-dialog",{attrs:{transition:"dialog-bottom-transition","max-width":"400px"},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on,n=t.attrs;return[e._t("activator",null,null,{on:a,attrs:n})]}}],null,!0),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-card",[a("v-card-title",[a("v-spacer"),a("v-icon",{attrs:{"aria-label":"Close"},on:{click:e.close}},[e._v(" mdi-close ")])],1),a("v-card-text",[a("div",{staticClass:"headline text-center mb-4"},[e._v(" Select the menus below to update the rank of the companies ")]),a("v-select",{attrs:{items:e.companies,"item-text":"company","item-value":"symbol",placeholder:"Select a company",dense:"",outlined:""},model:{value:e.internalValue.symbol,callback:function(t){e.$set(e.internalValue,"symbol",t)},expression:"internalValue.symbol"}}),a("v-select",{attrs:{items:e.RANK_OP,placeholder:"Add or Subtract",dense:"",outlined:""},model:{value:e.internalValue.op,callback:function(t){e.$set(e.internalValue,"op",t)},expression:"internalValue.op"}}),a("v-select",{attrs:{items:e.AMOUNT_LIST,placeholder:"Select Amount",dense:"",outlined:""},model:{value:e.internalValue.amount,callback:function(t){e.$set(e.internalValue,"amount",t)},expression:"internalValue.amount"}})],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{staticClass:"mb-4",attrs:{color:"primary",disabled:!e.isValid},on:{click:e.onUpdateRank}},[e._v(" Update ")])],1)],1)],1)},m=[],v=1e12,f=1e9,b={name:"RankSelectionModal",components:{},props:{value:{type:Object},companies:{type:Array}},data:function(){return{dialog:!1,RANK_OP:[{text:"Add",value:"add"},{text:"Subtract",value:"subtract"}],AMOUNT_LIST:[{text:"10 Billions",value:10*f},{text:"100 Billions",value:100*f},{text:"1 Trillion",value:v},{text:"2 Trillion",value:2*v}]}},watch:{},computed:{isValid:function(){return!!this.internalValue.symbol&&!!this.internalValue.op&&!!this.internalValue.amount},internalValue:{get:function(){return this.value},set:function(e){this.$emit("input",e)}}},methods:{close:function(){this.dialog=!1},onUpdateRank:function(){this.$emit("onUpdateRank"),this.close()}},mounted:function(){return Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()}},y=b,h=a("2877"),g=a("6544"),x=a.n(g),_=a("8336"),k=a("b0af"),S=a("99d9"),C=a("169a"),w=a("132d"),R=a("b974"),V=a("2fa4"),A=Object(h["a"])(y,d,m,!1,null,null,null),T=A.exports;x()(A,{VBtn:_["a"],VCard:k["a"],VCardActions:S["a"],VCardText:S["b"],VCardTitle:S["c"],VDialog:C["a"],VIcon:w["a"],VSelect:R["a"],VSpacer:V["a"]});var O=1e12,L=1e9,F=1e6,P="localhost"===location.hostname?"http://localhost:5000/api":location.origin+"/api",B={name:"Example",components:{RankSelectionModal:T},props:{},data:function(){return{loading:!1,companies:[],headers:[{text:"Rank",value:"rank",sortable:!1},{text:"Name",value:"company",sortable:!1},{text:"Market Cap",value:"marketCap",sortable:!1},{text:"Country",value:"country",sortable:!1}],method:"top10",rankForm:{symbol:"",op:"",amount:""},startPaginate:0,ACTION_LIST:[{text:"Top 10 companies",value:"top10"},{text:"All companies",value:"all"},{text:"Bottom 10 companies",value:"bottom10"},{text:"Between Rank 10 & 15",value:"inRank?start=9&end=14"},{text:"Show Ranks of AAPL, FB and TSLA",value:"getBySymbol?symbols[]=aapl&symbols[]=fb&symbols[]=tsla"},{text:"Pagination: Show 1st 10",value:"paginate"}],panel:null}},computed:{},watch:{method:{handler:function(){this.loadData()},immediate:!0}},created:function(){},methods:{onUpdateRank:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loading=!0,t.prev=1,a={symbol:e.rankForm.symbol,amount:"add"===e.rankForm.op?e.rankForm.amount:-1*e.rankForm.amount},t.next=5,p.a.get("".concat(P,"/rank/update"),{params:a});case 5:e.rankForm={symbol:"",op:"",amount:""},e.loadData(),t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](1),console.log(t.t0);case 12:e.loading=!1;case 13:case"end":return t.stop()}}),t,null,[[1,9]])})))()},loadData:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loading=!0,t.prev=1,a=e.method,"paginate"===e.method&&(a="inRank?start=".concat(e.startPaginate,"&end=").concat(e.startPaginate+10),e.startPaginate+=10),t.next=6,p.a.get("".concat(P,"/list/").concat(a));case 6:n=t.sent,e.companies=n.data,t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](1),console.log(t.t0);case 13:e.loading=!1;case 14:case"end":return t.stop()}}),t,null,[[1,10]])})))()},formatUSD:function(e){return e>O?"$".concat((e/O).toFixed(3)," T"):e>L?"$".concat((e/L).toFixed(2)," B"):e>F?"$".concat((e/F).toFixed(1)," M"):"$ ".concat(e)},getCountryFlag:function(e){var t={"S. Arabia":"Saudi Arabia","S. Korea":"South Korea"},a=Object(u["findFlagUrlByCountryName"])(t[e]||e);return a}}},E=B,U=(a("1e58"),a("62ad")),j=a("a523"),N=a("8fea"),I=a("cd55"),$=a("49e2"),D=a("c865"),H=a("0393"),Z=a("0fd9"),M=Object(h["a"])(E,i,l,!1,null,"6d7466c0",null),G=M.exports;x()(M,{VBtn:_["a"],VCard:k["a"],VCol:U["a"],VContainer:j["a"],VDataTable:N["a"],VExpansionPanel:I["a"],VExpansionPanelContent:$["a"],VExpansionPanelHeader:D["a"],VExpansionPanels:H["a"],VIcon:w["a"],VRow:Z["a"],VSelect:R["a"]});var K={name:"App",components:{Example:G}},W=K,z=(a("034f"),a("7496")),J=Object(h["a"])(W,o,r,!1,null,null,null),Y=J.exports;x()(J,{VApp:z["a"]});var q=a("f309");n["a"].use(q["a"]);var Q=new q["a"]({});n["a"].config.productionTip=!1,new n["a"]({vuetify:Q,render:function(e){return e(Y)}}).$mount("#app")},"85ec":function(e,t,a){}});
//# sourceMappingURL=app.2cb72c4f.js.map
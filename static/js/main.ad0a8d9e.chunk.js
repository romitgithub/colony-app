(this["webpackJsonpcolony-app"]=this["webpackJsonpcolony-app"]||[]).push([[0],{172:function(e,t,n){e.exports={app:"app_app__cewju"}},173:function(e,t,n){!function(){var t=new Array(4);function n(){var e=t[0]^t[0]<<11;return t[0]=t[1],t[1]=t[2],t[2]=t[3],t[3]=t[3]^t[3]>>19^e^e>>8,(t[3]>>>0)/(1<<31>>>0)}function a(){return"hsl("+Math.floor(360*n())+","+(60*n()+40+"%")+","+(25*(n()+n()+n()+n())+"%")+")"}function r(e){var n={};return n.seed=e.seed||Math.floor(Math.random()*Math.pow(10,16)).toString(16),function(e){for(var n=0;n<t.length;n++)t[n]=0;for(var a=0;a<e.length;a++)t[a%4]=(t[a%4]<<5)-t[a%4]+e.charCodeAt(a)}(n.seed),n.size=e.size||8,n.scale=e.scale||4,n.color=e.color||a(),n.bgcolor=e.bgcolor||a(),n.spotcolor=e.spotcolor||a(),n}function o(e,t){var a=function(e){for(var t=e,a=e,r=Math.ceil(t/2),o=t-r,c=[],s=0;s<a;s++){for(var i=[],u=0;u<r;u++)i[u]=Math.floor(2.3*n());var l=i.slice(0,o);l.reverse(),i=i.concat(l);for(var d=0;d<i.length;d++)c.push(i[d])}return c}((e=r(e||{})).size),o=Math.sqrt(a.length);t.width=t.height=e.size*e.scale;var c=t.getContext("2d");c.fillStyle=e.bgcolor,c.fillRect(0,0,t.width,t.height),c.fillStyle=e.color;for(var s=0;s<a.length;s++)if(a[s]){var i=Math.floor(s/o),u=s%o;c.fillStyle=1===a[s]?e.color:e.spotcolor,c.fillRect(u*e.scale,i*e.scale,e.scale,e.scale)}return t}var c={create:function(e){var t=document.createElement("canvas");return o(e,t),t},render:o};e.exports=c,"undefined"!==typeof window&&(window.blockies=c)}()},174:function(e,t,n){e.exports={eventsList:"eventsList_eventsList__Uk8a7"}},176:function(e,t,n){e.exports={eventsContainer:"events_eventsContainer__1zCiC"}},177:function(e,t,n){e.exports=n(352)},182:function(e,t,n){},192:function(e,t){},205:function(e,t){},207:function(e,t){},217:function(e,t){},219:function(e,t){},245:function(e,t){},247:function(e,t){},248:function(e,t){},254:function(e,t){},256:function(e,t){},26:function(e,t,n){e.exports={eventCard:"eventCard_eventCard__H4IH1",eventAvatar:"eventCard_eventAvatar__2KeuE",eventMetaData:"eventCard_eventMetaData__3opNK",eventPrimaryText:"eventCard_eventPrimaryText__2PlqC",eventSecondaryText:"eventCard_eventSecondaryText__1lAhQ"}},274:function(e,t){},276:function(e,t){},288:function(e,t){},291:function(e,t){},314:function(e,t){},316:function(e,t){},352:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n.n(a),o=n(171),c=n.n(o),s=(n(182),n(172)),i=n.n(s),u=n(3),l=n.n(u),d=n(17),f=n(43),v=n(65),p=n(68),m=n(67),b=n(173),h=n.n(b),y="ColonyInitialised",g="ColonyRoleSet",w="PayoutClaimed",x="DomainAdded",j=n(26),O=n.n(j),E=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(f.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).getPrimaryText=function(e){var t=e.primary,n=t.data,a=t.role,o=t.userAddress,c=t.domainId,s=t.amount,i=t.token,u=t.rewardPayoutId,l=t.symbol;switch(e.type){case y:return r.a.createElement("div",{className:O.a.eventPrimaryText},n);case g:return r.a.createElement("div",{className:O.a.eventPrimaryText},r.a.createElement("span",null,a)," role assigned to user ",r.a.createElement("span",null,o)," ","in domain ",r.a.createElement("span",null,c));case w:return r.a.createElement("div",{className:O.a.eventPrimaryText},"User ",r.a.createElement("span",null,o)," claimed"," ",r.a.createElement("span",null,s,l||i)," ","payout from pot ",r.a.createElement("span",null,u));case x:return r.a.createElement("div",{className:O.a.eventPrimaryText},"Domain ",r.a.createElement("span",null,c)," added.");default:return r.a.createElement("div",null,e.primary)}},e}return Object(v.a)(n,[{key:"render",value:function(){var e=this.props.event,t=h.a.create({seed:e.avatarSeed}).toDataURL(),n=-1!==e.secondary?new Date(e.secondary).toDateString():"",a=this.getPrimaryText(e);return r.a.createElement("div",{className:O.a.eventCard},r.a.createElement("img",{className:O.a.eventAvatar,src:t,alt:"user-entropy-icon"}),r.a.createElement("div",{className:O.a.eventMetaData},a,r.a.createElement("div",{className:O.a.eventSecondaryText},n)))}}]),n}(a.Component),k=n(174),C=n.n(k);function S(e){var t=e.eventsList;return r.a.createElement("div",{className:C.a.eventsList},t.map((function(e,t){return r.a.createElement(E,{event:e,key:t})})))}var _=n(50),L=n(66),N=n(12),I=n(22),M=n(8),P=n(175),A=new function e(){var t=this;Object(f.a)(this,e),this.getHeaders=function(){return new Headers({})},this.get=function(){var e=Object(d.a)(l.a.mark((function e(n,a){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=new Request(n,{method:"GET",headers:Object(N.a)(Object(N.a)({},t.getHeaders()),a.headers),cache:"default"}),e.abrupt("return",fetch(r).then((function(e){if(200===e.status)return e.json().then((function(e){return e}));throw new Error("Failed to load data")}),(function(e){console.error(e)})));case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},T=new P.InfuraProvider("homestead","4c30d38bb01645a1bef9e70fbab10582"),D={networkAddress:"0x5346D0f80e2816FaD329F2c140c870ffc3c3E2Ef"},R=function(){var e=window.localStorage.getItem("tokenSymbolMap");return e?JSON.parse(e):{}}(),B=M.Wallet.createRandom().connect(T),H=function(){var e=Object(d.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(I.getColonyNetworkClient)(I.Network.Mainnet,B,D);case 2:return t=e.sent,e.next=5,t.getColonyClient("0x869814034d96544f3C62DE2aC22448ed79Ac8e70");case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),F=function(){var e=Object(d.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=7;break}return e.next=3,Object(I.getBlockTime)(T,t);case 3:return n=e.sent,e.abrupt("return",n);case 7:return e.abrupt("return",-1);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),z=function(e,t){return{primary:{role:I.ColonyRole[e.values.role],userAddress:t.address,domainId:new M.utils.BigNumber(e.values.domainId).toString()}}},K=function(e,t){return{primary:{userAddress:t.address,amount:function(e){var t=new M.utils.BigNumber(e),n=new M.utils.BigNumber(10);return t.div(n.pow(18)).toString()}(e.values.amount),rewardPayoutId:new M.utils.BigNumber(e.values.fundingPotId).toString(),token:e.values.token}}},J=function(){var e=Object(d.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!R[t]){e.next=4;break}return e.abrupt("return",R[t]);case 4:return"EK-b3gZS-1FQnoyC-5GyNY",e.next=7,A.get("https://api.ethplorer.io/getTokenInfo/".concat(t,"?apiKey=").concat("EK-b3gZS-1FQnoyC-5GyNY"),{});case 7:return(n=e.sent)&&(R=Object(N.a)(Object(N.a)({},R),{},Object(L.a)({},t,n.symbol)),a=R,window.localStorage.setItem("tokenSymbolMap",JSON.stringify(a))),e.abrupt("return",n?n.symbol:void 0);case 10:case"end":return e.stop()}var a}),e)})));return function(t){return e.apply(this,arguments)}}(),U=function(){var e=Object(d.a)(l.a.mark((function e(t,n){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(n.map(function(){var e=Object(d.a)(l.a.mark((function e(n,a){var r,o,c,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F(t[a].blockHash);case 2:r=e.sent,o={type:n.name,secondary:r,avatarSeed:t[a].address?t[a].address:t[a].transactionHash},e.t0=n.name,e.next=e.t0===y?7:e.t0===g?9:e.t0===w?11:e.t0===x?18:20;break;case 7:return o=Object(N.a)(Object(N.a)({},o),{primary:{data:"Congratulations! It's a beautiful baby colony!"}}),e.abrupt("break",21);case 9:return o=Object(N.a)(Object(N.a)({},o),z(n,t[a])),e.abrupt("break",21);case 11:return c=K(n,t[a]),e.next=14,J(c.primary.token);case 14:return s=e.sent,(o=Object(N.a)(Object(N.a)({},o),c)).primary.symbol=s,e.abrupt("break",21);case 18:return o=Object(N.a)(Object(N.a)({},o),(i=n,{primary:{domainId:new M.utils.BigNumber(i.values.domainId).toString()}})),e.abrupt("break",21);case 20:o=Object(N.a)({},o);case 21:return e.abrupt("return",o);case 22:case"end":return e.stop()}var i}),e)})));return function(t,n){return e.apply(this,arguments)}}()));case 2:return(a=e.sent).sort((function(e,t){return t.secondary-e.secondary})),e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),q=function(){var e=Object(d.a)(l.a.mark((function e(){var t,n,a,r,o,c,s,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H();case 2:return t=e.sent,n=t.filters.PayoutClaimed(),a=t.filters.ColonyInitialised(),r=t.filters.ColonyRoleSet(),o=t.filters.DomainAdded(),e.t0=[],e.t1=_.a,e.next=11,Object(I.getLogs)(t,n);case 11:return e.t2=e.sent,e.t3=(0,e.t1)(e.t2),e.t4=_.a,e.next=16,Object(I.getLogs)(t,a);case 16:return e.t5=e.sent,e.t6=(0,e.t4)(e.t5),e.t7=_.a,e.next=21,Object(I.getLogs)(t,r);case 21:return e.t8=e.sent,e.t9=(0,e.t7)(e.t8),e.t10=_.a,e.next=26,Object(I.getLogs)(t,o);case 26:return e.t11=e.sent,e.t12=(0,e.t10)(e.t11),c=e.t0.concat.call(e.t0,e.t3,e.t6,e.t9,e.t12),s=c.map((function(e){return t.interface.parseLog(e)})),i=U(c,s),e.abrupt("return",i);case 32:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),G=n(176),Q=n.n(G),Y=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(f.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={isLoading:!1,eventsList:[]},e}return Object(v.a)(n,[{key:"componentDidMount",value:function(){var e=Object(d.a)(l.a.mark((function e(){var t=this;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({isLoading:!0}),q().then((function(e){t.setState({eventsList:e,isLoading:!1})}),(function(e){t.setState({eventsList:null,isLoading:!1})}));case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{className:Q.a.eventsContainer},this.state.isLoading?r.a.createElement("div",null,"Loading data..."):this.state.eventsList?r.a.createElement(S,{eventsList:this.state.eventsList}):r.a.createElement("div",null,"Uh oh! Failed to load data."))}}]),n}(r.a.Component);var Z=function(){return r.a.createElement("div",{className:i.a.app},r.a.createElement(Y,null))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Z,null)),document.getElementById("root"))}},[[177,1,2]]]);
//# sourceMappingURL=main.ad0a8d9e.chunk.js.map
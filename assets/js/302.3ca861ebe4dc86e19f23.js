(self.webpackChunksbs=self.webpackChunksbs||[]).push([[302],{302:(e,a,r)=>{"use strict";var s=r(935),t=r(391),n=r(156),i=r(137),c=r(757),l=r.n(c),d=r(294);const m={container:"_16tdTqdvwtqzIOLvOMFS4d",team:"_2BGoVg1vijuec-JrBJRfpC",teamName:"_3BDOZJlEkZaTbFnD1ZFmO-",lineup:"tOA17Xk0uAU_ux9yxCr4b",ftField:"_1bCDHO203N2PWbzO0pre_t",ftFieldStripes:"_3cPJ6aSZ5sZqUnKcvKFJE_",ftFieldOverlay:"_1puzrzW_jIr_VKww9m8QPt",ftFieldNoise:"_3IfDcWv0wN0gz28cSQgAza",ftFieldLine:"_3YNZ2EpK_IoUr__URtiEpn",player:"_3qGIjkCLQYtWUUYQw1EGds",playerNumber:"_2V08M_4cOnutXXhQt1HX8D",playerName:"_3fdDESBOxZYkva0aIWsOQT",playerList:"_2oQviHYW3OynnD9Lu62jAo",playerListTitle:"_16ZIB4ghG_J98BXcKAt76h",playerTeams:"_3EUdaXzM5Y8QB4OR6B8VXH",playerTeam:"_1TgAsDxfGsolr2ENYn2jgw",playerTeamName:"_3t8OgVFv7zw68oGnUWHJ2B",playerItem:"_1YFJ153ez3mftiftc_hI0S",playerItemNumber:"_3Tw9S3rYVr43kDKi8-IyLl",playerItemName:"_1_wj7GSMCLtbyQZ42hD6OD",playerEvents:"lmLIYWWJeZkcN1eHzrycF",playerEvent:"_3zUdX1hmN-A2Ey7WhPqhH8",playerEventName:"_3yI0_0gyj_FLjEsD7xKaTr",playerEventTime:"_2aAgP1_Pq82J6qPpBFL0nn"};var o=r(229),u=r(314),p=r(893);function v(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);a&&(s=s.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,s)}return r}function y(){return(y=(0,i.Z)(l().mark((function e(a){var r,s,t,n;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://sbd.vercel.app/api?type=lineup&id=".concat(a));case 2:return r=e.sent,e.next=5,r.json();case 5:if(s=e.sent,t=s.code,n=s.data,"SBD0000"===t){e.next=10;break}throw new Error(t);case 10:return e.abrupt("return",n);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var N={1:"\u8fdb",3:"\u9ec4",9:"\u6362",18:"\u52a9"};function f(e){var a,r=e.type,s=e.time;return(0,p.jsxs)("div",{className:m.playerEvent,children:[(0,p.jsx)("div",{className:m.playerEventName,children:null!==(a=N[r])&&void 0!==a?a:r}),(0,p.jsx)("div",{className:m.playerEventTime,children:s})]})}function h(e){var a=e.player;return(0,p.jsxs)("div",{className:m.playerItem,children:[(0,p.jsx)("div",{className:m.playerItemNumber,children:a.number}),(0,p.jsx)("div",{className:m.playerItemName,children:a.name}),(0,p.jsx)("div",{className:m.playerEvents,children:a.events.map((function(e,a){return(0,p.jsx)(f,function(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?v(Object(r),!0).forEach((function(a){(0,n.Z)(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}({},e),a)}))})]})}const j="_2pvKLiFn-iLVe9pnvZ_K9a",x="g7ZliVobjlOy1SXsXBJCT",L="_3bFW3nGeQlQ5KF_HP6vI80",b="NMemiS9pyL8Vx_6Y_OBJy",A="_1FhCKYQqGqqsUHIZHg_pJj",T="G9wz1A0LfSPB3F8Zgpq0M",I="_28cCZPak3cuc1B1osMFLRZ",g="g9ggkPrx7JZ7HOYpUkHne",w="Nkb3OvcsJQvKnvQD64uwe",O="_3KBwN7J4OT2XXI77lqpLwz";function D(){return(D=(0,i.Z)(l().mark((function e(a){var r,s,t,n;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://sbd.vercel.app/api?type=stats&id=".concat(a));case 2:return r=e.sent,e.next=5,r.json();case 5:if(s=e.sent,t=s.code,n=s.data,"SBD0000"===t){e.next=10;break}throw new Error(t);case 10:return e.abrupt("return",n);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var M={2:"\u89d2\u7403",3:"\u9ec4\u5361",4:"\u7ea2\u5361",8:"\u7f5a\u70b9\u7403",21:"\u5c04\u6b63\u7403\u95e8",22:"\u5c04\u504f\u7403\u95e8",23:"\u8fdb\u653b",24:"\u5371\u9669\u8fdb\u653b",25:"\u63a7\u7403\u7387"},B={1:"Goal!",2:"\u89d2\u7403",3:"\u9ec4\u5361",9:"\u6362\u4eba",10:"\u6bd4\u8d5b\u5f00\u59cb",11:"\u4e2d\u573a",12:"\u6bd4\u8d5b\u7ed3\u675f",16:"\u7f5a\u70b9\u7403",17:"OwnGoals",18:"\u52a9\u653b"};var F=new URLSearchParams(location.search),Z=Object.fromEntries(F.entries()),z=Z.type,Q=Z.id,Y=Z.home,S=Z.away;if(z&&Q){var G="lineup"===z?function(e){var a=e.id,r=e.home,s=void 0===r?"\u4e3b\u961f":r,n=e.away,i=void 0===n?"\u5ba2\u961f":n,c=(0,d.useState)(),l=(0,t.Z)(c,2),v=l[0],N=l[1];if((0,d.useEffect)((function(){(function(e){return y.apply(this,arguments)})(a).then((function(e){return N(e)}))}),[a]),!v)return null;var f=v.home.players.filter((function(e){return e.starter})),j=v.away.players.filter((function(e){return e.starter})),x=v.home.players.filter((function(e){return!e.starter})),L=v.away.players.filter((function(e){return!e.starter}));return(0,p.jsxs)("div",{className:m.container,children:[(0,p.jsxs)("div",{className:m.team,children:[(0,p.jsx)("div",{className:m.teamName,children:s}),(0,p.jsx)("div",{className:m.formation,children:v.home.formation})]}),(0,p.jsxs)("div",{className:m.lineup,children:[(0,p.jsxs)("div",{className:m.ftField,children:[(0,p.jsx)("div",{className:m.ftFieldStripes}),(0,p.jsx)("div",{className:m.ftFieldOverlay}),(0,p.jsx)("div",{className:m.ftFieldLine,style:{backgroundImage:"url(".concat(o,")")}}),(0,p.jsx)("div",{className:m.ftFieldNoise,style:{backgroundImage:"url(".concat(u,")")}})]}),f.map((function(e,a){return(0,p.jsxs)("div",{className:m.player,style:{left:"".concat(e.coord[0],"%"),top:"".concat(e.coord[1]/2,"%")},children:[(0,p.jsx)("div",{className:m.playerNumber,style:{backgroundColor:"#ff4125"},children:e.number}),(0,p.jsx)("div",{className:m.playerName,children:e.name})]},a)})),j.map((function(e,a){return(0,p.jsxs)("div",{className:m.player,style:{left:"".concat(e.coord[0],"%"),top:"".concat(50+e.coord[1]/2,"%")},children:[(0,p.jsx)("div",{className:m.playerNumber,style:{backgroundColor:"#94000e"},children:e.number}),(0,p.jsx)("div",{className:m.playerName,children:e.name})]},a)}))]}),(0,p.jsxs)("div",{className:m.team,children:[(0,p.jsx)("div",{className:m.teamName,children:i}),(0,p.jsx)("div",{className:m.formation,children:v.away.formation})]}),(0,p.jsxs)("div",{className:m.playerList,children:[(0,p.jsx)("div",{className:m.playerListTitle,children:"\u5148\u53d1\u9635\u5bb9"}),(0,p.jsxs)("div",{className:m.playerTeams,children:[(0,p.jsxs)("div",{className:m.playerTeam,children:[(0,p.jsx)("div",{className:m.playerTeamName,children:s}),f.map((function(e,a){return(0,p.jsx)(h,{player:e},a)}))]}),(0,p.jsxs)("div",{className:m.playerTeam,children:[(0,p.jsx)("div",{className:m.playerTeamName,children:i}),j.map((function(e,a){return(0,p.jsx)(h,{player:e},a)}))]})]})]}),(0,p.jsxs)("div",{className:m.playerList,children:[(0,p.jsx)("div",{className:m.playerListTitle,children:"\u66ff\u8865\u9635\u5bb9"}),(0,p.jsxs)("div",{className:m.playerTeams,children:[(0,p.jsxs)("div",{className:m.playerTeam,children:[(0,p.jsx)("div",{className:m.playerTeamName,children:s}),x.map((function(e,a){return(0,p.jsx)(h,{player:e},a)}))]}),(0,p.jsxs)("div",{className:m.playerTeam,children:[(0,p.jsx)("div",{className:m.playerTeamName,children:i}),L.map((function(e,a){return(0,p.jsx)(h,{player:e},a)}))]})]})]})]})}:"stats"===z?function(e){var a=e.id,r=(0,d.useState)(),s=(0,t.Z)(r,2),n=s[0],i=s[1];return(0,d.useEffect)((function(){var e=function(){return function(e){return D.apply(this,arguments)}(a).then((function(e){return i(e)}))};e();var r=setInterval(e,6e4);return function(){return clearInterval(r)}}),[a]),n?(0,p.jsxs)("div",{className:j,children:[(0,p.jsx)("div",{className:x,children:"\u6570\u636e"}),(0,p.jsx)("div",{className:L,children:n.stats.map((function(e){return(0,p.jsxs)("div",{className:b,children:[(0,p.jsx)("div",{className:A,children:M[e.type]}),(0,p.jsx)("div",{className:T,children:"".concat(e.home,":").concat(e.away)})]},e.type)}))}),(0,p.jsx)("div",{className:x,children:"\u6587\u5b57\u76f4\u64ad"}),(0,p.jsx)("div",{className:I,children:n.events.map((function(e,a){var r;return(0,p.jsxs)("div",{className:g,children:[!!e.main&&(0,p.jsx)("div",{className:w,children:null!==(r=B[e.type])&&void 0!==r?r:e.type}),(0,p.jsx)("div",{className:O,children:e.data})]},a)}))})]}):null}:null;if(G){var P=document.getElementById("root");(0,s.render)((0,p.jsx)(G,{id:Q,home:Y,away:S}),P)}}console.log("".concat("sbs"," - ").concat("1.0.0"))},229:e=>{"use strict";e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzM0IiBoZWlnaHQ9IjU2MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyB0cmFuc2Zvcm09InJvdGF0ZSg5MCAxNjYgMTY3KSIgc3Ryb2tlPSIjRkZGIiBzdHJva2Utd2lkdGg9IjIiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHBhdGggZD0iTTYgMGg1NDh2MzMySDZ6Ii8+PHBhdGggZD0iTTc5LjUgMjAxYzEyLTcuMiAyMC0yMC4yIDIwLTM1cy04LTI3LjgtMjAtMzVtLTczLTU0aDczdjE3OGgtNzNtNTQ3LTE3OGgtNzN2MTc4aDczbS03My01NGMtMTItNy4yLTIwLTIwLjItMjAtMzVzOC0yNy44IDIwLTM1Ii8+PHBhdGggZD0iTTYuNSAxMjloMjl2NzRoLTI5bTU0Ny03NGgtMjl2NzRoMjlNMjgwIDB2MzMyIi8+PGNpcmNsZSBjeD0iMjgwIiBjeT0iMTY2IiByPSI0NCIvPjxwYXRoIGQ9Ik02IDE0NkgwdjQwaDZtNTQ4LTQwaDZ2NDBoLTZNNiA4YzQuNCAwIDgtMy42IDgtOG0wIDMzMmMwLTQuNC0zLjYtOC04LThtNTQwIDhjMC00LjQgMy42LTggOC04bTAtMzE2Yy00LjQgMC04LTMuNi04LTgiLz48L2c+PC9zdmc+"},314:e=>{"use strict";e.exports="data:image/png;base64,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"}}]);
//# sourceMappingURL=302.3ca861ebe4dc86e19f23.js.map
(this["webpackJsonprandom-wikipedia-of-react"]=this["webpackJsonprandom-wikipedia-of-react"]||[]).push([[0],{15:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(6),i=n.n(c),o=n(1),u=n.n(o),s=n(2),p=n(4),l=n(3),m=n.n(l),f=function(e){return r.a.createElement("div",{className:m.a.container},r.a.createElement("h1",{className:m.a.title},"Random"===e.randomPageTitle?e.randomPageTitle+" ":r.a.createElement("a",{href:"https://en.wikipedia.org/wiki/"+e.randomPageTitle,className:m.a.randomPageTitle},e.randomPageTitle+" "),"WIKIPEDIA PAGE OF THE"),r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.inputDataSubmit()}},r.a.createElement("input",{action:"",type:"text",placeholder:"",value:e.inputData,onChange:e.handleChange,autoFocus:!0,ref:e.searchInput})),r.a.createElement("h1",{className:m.a.title},"CATEGORY."),r.a.createElement("div",{className:m.a.recContainer},void 0!==e.recommendedArr?e.recommendedArr.map((function(t,n){return r.a.createElement("button",{key:n,className:m.a.recommendations,type:"button",onClick:Object(s.a)(u.a.mark((function n(){return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e.setInputData(t.replace(/Category:/g,"")),e.setRecomPressed(!0),e.handleFocus();case 3:case"end":return n.stop()}}),n)})))},t.replace(/Category:/g,""))})):null))},d=n(7),h=n.n(d),g=n(8),b="",v=[],x=[],j=function(){var e=Object(s.a)(u.a.mark((function e(t){var n,a,r,c,i,o,s,p,l,m;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(b);case 2:return n=e.sent,e.next=5,n.json();case 5:a=e.sent,r=a.query.categorymembers,c=!0,i=!1,e.prev=9,s=Object(g.a)(r);case 11:return e.next=13,s.next();case 13:return p=e.sent,c=p.done,e.next=17,p.value;case 17:if(l=e.sent,c){e.next=24;break}"page"===(m=l).type?v.push(m.title.replace(/[" "]/g,"_")):x.push(m.title.replace(/Category:/g,"").replace(/[" "]/g,"_"));case 21:c=!0,e.next=11;break;case 24:e.next=30;break;case 26:e.prev=26,e.t0=e.catch(9),i=!0,o=e.t0;case 30:if(e.prev=30,e.prev=31,c||null==s.return){e.next=35;break}return e.next=35,s.return();case 35:if(e.prev=35,!i){e.next=38;break}throw o;case 38:return e.finish(35);case 39:return e.finish(30);case 40:case"end":return e.stop()}}),e,null,[[9,26,30,40],[31,,35,39]])})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(s.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v=[],x=[],b="https://en.wikipedia.org/w/api.php?action=query&list=categorymembers&cmtitle=Category:".concat(t,"&cmprop=title|type&format=json&cmlimit=500&cmtype=page|subcat&origin=*"),e.next=5,j(t);case 5:return e.abrupt("return",y());case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(s.a)(u.a.mark((function e(){var t,n,a,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Math.floor(Math.random()*x.length),n=x[t],x.splice(t,1),b="https://en.wikipedia.org/w/api.php?action=query&list=categorymembers&cmtitle=Category:".concat(n,"&cmprop=title|type&format=json&cmlimit=500&cmtype=page&origin=*"),e.next=6,j();case 6:return a=Math.floor(Math.random()*v.length),r=v[a],v.splice(a,1),e.abrupt("return",r.replace(/["_"]/g," "));case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k=function(){var e=Object(s.a)(u.a.mark((function e(t){var n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://en.wikipedia.org/w/api.php?action=opensearch&format=json&limit=6&namespace=14&suggest&search=".concat(t,"&origin=*"));case 2:return n=e.sent,e.next=5,n.json();case 5:return a=e.sent,e.abrupt("return",a[1]);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=Object(a.useState)(""),t=Object(p.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(""),o=Object(p.a)(i,2),l=o[0],m=o[1],d=Object(a.useState)([]),g=Object(p.a)(d,2),b=g[0],v=g[1],x=Object(a.useState)(!1),j=Object(p.a)(x,2),O=j[0],_=j[1],E=Object(a.useState)("Random"),T=Object(p.a)(E,2),C=T[0],I=T[1];Object(a.useEffect)((function(){(function(){var e=Object(s.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k(n);case 2:t=e.sent,v(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[n]),Object(a.useEffect)((function(){!0===O&&P(n),_(!1)}),[!0===O]);var P=function(){var e=Object(s.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n="",""===t||t===l){e.next=8;break}return e.next=4,w(t.replace(/[" "]/g,"_"));case 4:n=e.sent,m(t),e.next=12;break;case 8:if(""===t||t!==l){e.next=12;break}return e.next=11,y(t.replace(/[" "]/g,"_"));case 11:n=e.sent;case 12:I(n);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=Object(a.useRef)(null);return r.a.createElement("div",{className:h.a.container},r.a.createElement(f,{inputData:n,handleChange:function(e){return c(e.target.value)},inputDataSubmit:function(){return P(n)},randomPageTitle:C,recommendedArr:b,setInputData:c,setRecomPressed:_,handleFocus:function(){A.current.focus()},searchInput:A}))};i.a.render(r.a.createElement(O,null),document.getElementById("root"))},3:function(e,t,n){e.exports={container:"TitleInput_container__3dgiA",title:"TitleInput_title__3gK_J",randomPageTitle:"TitleInput_randomPageTitle__3rebV",recContainer:"TitleInput_recContainer__2Biyz",recommendations:"TitleInput_recommendations__jvOg2"}},7:function(e,t,n){e.exports={container:"App_container__1MQN3"}},9:function(e,t,n){e.exports=n(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.7e7d2b26.chunk.js.map
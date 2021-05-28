(this.webpackJsonprobotfriends=this.webpackJsonprobotfriends||[]).push([[0],{19:function(e,t,n){},27:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),c=n(6),i=n.n(c),a=(n(19),n(9)),s=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,31)).then((function(t){var n=t.getCLS,r=t.getFID,o=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),o(e),c(e),i(e)}))},u=n(2),l=n(3),d=n(5),h=n(4),b=n(8),j="CHANGE_SEARCHFIELD",f="REQUEST_ROBOTS_PENDING",p="REQUEST_ROBOTS_SUCCESS",O="REQUEST_ROBOTS_FAILED",v=n(1),g=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.email,r=e.id;return Object(v.jsxs)("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(v.jsx)("h1",{children:"Robots"}),Object(v.jsx)("img",{alt:"robots",src:"https://robohash.org/".concat(r,"?200x200")}),Object(v.jsxs)("div",{children:[Object(v.jsx)("h2",{children:t}),Object(v.jsxs)("p",{children:[" ",n]})]})]})}}]),n}(r.Component),y=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){console.log("CardList render");var e=this.props.robots.map((function(e,t){return Object(v.jsx)(g,{name:e.name,email:e.email,id:e.id},e.id)}));return Object(v.jsx)("div",{children:e})}}]),n}(r.Component),m=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){console.log("SearchBox render");var e=this.props.searchChange;return Object(v.jsx)("div",{children:Object(v.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:e})})}}]),n}(r.Component),w=function(e){return Object(v.jsx)("div",{style:{overflowY:"scroll",border:"5px solid black",height:"800px"},children:e.children})},x=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var r;return Object(u.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(l.a)(n,[{key:"componentDidMount",value:function(e,t){console.log(t)}},{key:"render",value:function(){return this.state.hasError?Object(v.jsx)("h1",{children:"Ooops. That is not good"}):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),n}(r.Component),C=n(7),k=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var r;return Object(u.a)(this,n),(r=t.call(this,e)).state={count:0,color:""},r.udateCount=r.udateCount.bind(Object(C.a)(r)),r}return Object(l.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return this.state.count!==t.count}},{key:"udateCount",value:function(){this.setState((function(e){return{count:e.count+1}}))}},{key:"render",value:function(){return console.log("CounterButton render"),Object(v.jsx)("div",{children:Object(v.jsxs)("button",{color:this.props.color,onClick:this.udateCount,children:["Click Me : ",this.state.count]})})}}]),n}(r.Component),S=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return console.log("Header render"),Object(v.jsxs)("div",{children:[Object(v.jsx)("h1",{className:"f1",children:"RoboFriends"}),Object(v.jsx)(k,{color:"red"})]})}}]),n}(r.PureComponent),R=(n(27),function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.robots,n=e.searchField,r=e.onSearchChange,o=e.isPending,c=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return Object(v.jsxs)("div",{className:"tc",children:[Object(v.jsx)(S,{}),Object(v.jsx)(m,{searchChange:r}),Object(v.jsx)(w,{children:o?Object(v.jsx)("h1",{children:"Loading"}):Object(v.jsx)(x,{children:Object(v.jsx)(y,{robots:c})})})]})}}]),n}(r.Component)),E=Object(b.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}}),(function(e){return{onSearchChange:function(t){return e((n=t.target.value,{type:j,payload:n}));var n},onRequestRobots:function(){return e((function(e){e({type:f}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e({type:p,payload:t})})).catch((function(t){return e({type:O,payload:t})}))}))}}}))(R),F=(n(28),{searchField:""}),P={robots:[],isPending:!0,error:""},L=n(13),T=n(14),N=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function B(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var U=Object(L.createLogger)(),W=Object(a.b)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case j:return Object.assign({},e,{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case f:return Object.assign({},e,{isPending:!0});case p:return Object.assign({},e,{robots:t.payload,isPending:!1});case O:return Object.assign({},e,{error:t.payload});default:return e}}}),D=Object(a.c)(W,Object(a.a)(T.a,U));i.a.render(Object(v.jsx)(o.a.StrictMode,{children:Object(v.jsx)(b.a,{store:D,children:Object(v.jsx)(E,{})})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/robotFriends",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/robotFriends","/service-worker.js");N?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):B(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):B(t,e)}))}}(),s()}},[[30,1,2]]]);
//# sourceMappingURL=main.b5efe88d.chunk.js.map
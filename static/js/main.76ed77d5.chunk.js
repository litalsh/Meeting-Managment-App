(this["webpackJsonpmeeting-menagment-app"]=this["webpackJsonpmeeting-menagment-app"]||[]).push([[0],{149:function(e,t,n){},150:function(e,t,n){},151:function(e,t,n){},152:function(e,t,n){},153:function(e,t,n){},154:function(e,t,n){},155:function(e,t,n){},156:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),i=n.n(a),o=n(54),r=n.n(o),s=(n(60),n(61),n(3)),l=n(2),u=function(e,t){var n="meeting-manament-"+e,c=Object(a.useState)((function(){var e=localStorage.getItem(n);return null!=e?JSON.parse(e):"function"===typeof t?t():t})),i=Object(s.a)(c,2),o=i[0],r=i[1];return Object(a.useEffect)((function(){localStorage.setItem(n,JSON.stringify(o))}),[n,o]),[o,r]},d=n(158),j=Object(a.createContext)(),h=function(e){var t=u("stack",[]),i=Object(s.a)(t,2),o=i[0],r=i[1],h=u("heap",[]),f=Object(s.a)(h,2),b=f[0],m=f[1],p=u("notes",[]),O=Object(s.a)(p,2),g=O[0],v=O[1],x=u("stackHistory",[]),k=Object(s.a)(x,2),w=k[0],y=k[1],N=Object(a.useState)(void 0!==o[0]?Math.floor(((new Date).getTime()-o[o.length-1].time)/1e3):0),T=Object(s.a)(N,2),S=T[0],H=T[1],C=(new Date).getTime(),D=function(e){if(e.ctrlKey&&e.shiftKey&&88===e.which){var t=o.length,n=Object(l.a)(o);n.splice(n.length-1,1),r(n),H(void 0!==o[t-2]?Math.floor(((new Date).getTime()-o[t-2].time)/1e3):0),console.log(S)}};Object(a.useEffect)((function(){return document&&document.addEventListener("keydown",D),function(){document.removeEventListener("keydown",D)}}),[o]);return Object(c.jsx)(j.Provider,{value:{stack:o,setStack:r,heap:b,notes:g,setNotes:v,stackHistory:w,startingTime:C,newStackHandler:function(e){13===e.which&&""!==e.target.value&&(r([].concat(Object(l.a)(o),[{id:Object(d.a)(),type:"stack",topic:e.target.value,time:(new Date).getTime()}])),y([].concat(Object(l.a)(w),["<li>".concat(e.target.value,"</li>")])),e.target.value="",console.log(o),H(Math.floor(((new Date).getTime()-(new Date).getTime())/1e3)))},newHeapHandler:function(e){13===e.which&&""!==e.target.value&&(m([].concat(Object(l.a)(b),[{id:Object(d.a)(),type:"heap",topic:e.target.value,time:(new Date).getTime()}])),e.target.value="")},taskRemoveHandler:function(e,t){if("stack"===t){var n=o.findIndex((function(t){return t.id===e})),c=Object(l.a)(o);c.splice(n,1),r(c),console.log(n),H(void 0!==o[n-1]?Math.floor(((new Date).getTime()-o[n-1].time)/1e3):0)}if("heap"===t){var a=b.findIndex((function(t){return t.id===e})),i=Object(l.a)(b);i.splice(a,1),m(i),console.log(a)}return console.log("taskRmoveHandler: ",o)},changeListHandler:function(e,t){if("stack"===t){var n=o.findIndex((function(t){return t.id===e}));m([].concat(Object(l.a)(b),[{id:o[n].id,type:"heap",topic:o[n].topic,time:o[n].time}]));var c=Object(l.a)(o);c.splice(n,1),r(c),console.log("change to heap ",o,"  ",b)}if("heap"===t){var a=b.findIndex((function(t){return t.id===e}));r([].concat(Object(l.a)(o),[{id:b[a].id,type:"stack",topic:b[a].topic,time:(new Date).getTime()}])),y([].concat(Object(l.a)(w),["<li>".concat(b[a].topic,"</li>")]));var i=Object(l.a)(b);i.splice(a,1),m(i),console.log("change to stack ",o,"  ",b)}},clock:function(e){var t=Math.floor(e/60),n=Math.abs(e%60),c=Math.floor(e/3600);return t=1===t.toString().length?"0"+t:t,n=1===n.toString().length?"0"+n:n,{hours:c=1===c.toString().length?"0"+c:c,minutes:t,seconds:n}},currentTaskTimer:S,setCurrentTaskTimer:H,clearAllHandler:function(){r([]),m([]),v([]),y([]),window.location.reload()},downloadSummaryHandler:function(){for(var e=n(62).htmlToText,t="<h3>Stack</h3><ul>"+w.join(" ")+"</ul>",c=[],a=0;a<g.length;a++){c.push("<h5>".concat(g[a].topic,":</h5>"));for(var i=0;i<g[a].notes.length;i++)c.push("<li>".concat(g[a].notes[i],"</li>"))}var o="<h3>Notes</h3><ul>"+c.join(" ")+"</ul>";console.log("notesText",o);var r=[];b.map((function(e){return r.push("<li>".concat(e.topic,"</li>"))}));var s=e(t+o+("<h3>Heap</h3><ul>"+r.join(" ")+"</ul>")),l=document.createElement("a"),u=new Blob([s],{type:"text/plain"});l.href=URL.createObjectURL(u),l.download="meetingSummary.rtf",document.body.appendChild(l),l.click()}},children:e.children})},f=(n(149),function(e){var t=Object(a.useContext)(j).clock,n=Object(a.useState)(Math.floor(((new Date).getTime()-e.time)/1e3)),i=Object(s.a)(n,2),o=i[0],r=i[1],l=t(o);return Object(a.useEffect)((function(){var t=window.setInterval((function(){r(Math.floor(((new Date).getTime()-e.time)/1e3))}),3e4);return console.log(o),function(){return window.clearInterval(t)}}),[o]),Object(c.jsxs)("li",{className:"task-item",onDoubleClick:e.changeList,children:["heap"!==e.type?Object(c.jsxs)("div",{children:[" ",Object(c.jsxs)("span",{className:"duration-display",children:[" ",l.minutes,":",l.seconds," "]})," "]}):null,Object(c.jsx)("label",{className:"task-title",children:e.title}),Object(c.jsx)("button",{className:"remove",onClick:e.remove,children:"X"})]},e.id)}),b=(n(150),function(){var e=Object(a.useContext)(j),t=e.stack,n=e.newStackHandler,i=e.taskRemoveHandler,o=e.changeListHandler;return Object(c.jsxs)("fieldset",{className:"stack-container",children:[console.log("stack: ",t),Object(c.jsx)("legend",{children:"Stack"}),Object(c.jsx)("ul",{className:"stack-list",children:void 0!==t?t.map((function(e,t){return Object(c.jsx)(f,{time:e.time,title:e.topic,type:e.type,remove:function(){return i(e.id,e.type)},changeList:function(){return o(e.id,e.type)}},t)})):null}),Object(c.jsx)("input",{type:"text",placeholder:"Add a task to stack",onKeyDown:n,className:"stack-input",autoFocus:!0,"aria-flowto":"heap-input"})]})}),m=(n(151),function(){var e=Object(a.useContext)(j),t=e.heap,n=e.newHeapHandler,i=e.taskRemoveHandler,o=e.changeListHandler;return Object(c.jsx)(h,{children:Object(c.jsxs)("fieldset",{className:"heap-container",children:[Object(c.jsx)("legend",{children:"Heap"}),Object(c.jsx)("input",{type:"text",placeholder:"Add a task to heap",onKeyDown:n,className:"heap-input","aria-flowto":"notes-input"}),Object(c.jsx)("ul",{className:"heap-list",children:void 0!==t[0]?t.map((function(e,t){return Object(c.jsx)(f,{title:e.topic,type:e.type,remove:function(){return i(e.id,e.type)},changeList:function(){return o(e.id,e.type)}},t)})):null})]})})}),p=(n(152),function(e){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("dt",{children:[e.title,":"]}),e.notes.map((function(e,t){return Object(c.jsx)("dd",{children:e},t)}))]})}),O=function(){var e=Object(a.useContext)(j),t=e.stack,n=e.setStack,i=e.notes,o=e.setNotes;return Object(c.jsxs)("fieldset",{className:"notes-container",children:[Object(c.jsx)("legend",{children:"Notes"}),Object(c.jsx)("input",{type:"text",placeholder:"Add a note for the current stack",className:"notes-input",onKeyDown:function(e){if(13===e.which&&""!==e.target.value){var c=Object(l.a)(t);c[c.length-1].notes?c[c.length-1].notes.push(e.target.value):c[c.length-1].notes=[e.target.value],n(c);var a=Object(l.a)(i),r=a.findIndex((function(e){return e.topic===t[t.length-1].topic}));-1===r?a.push({topic:t[t.length-1].topic,notes:[e.target.value],id:t[t.length-1].id}):a[r].notes.push(e.target.value),o(a),e.target.value=""}console.log(i)},"aria-flowto":"stack-input"}),Object(c.jsx)("dl",{children:void 0!==i[0]?i.map((function(e,t){return void 0!==e.notes?Object(c.jsx)(p,{title:e.topic,notes:e.notes},t):null})):null})]})},g=(n(153),function(){var e=Object(a.useContext)(j),t=e.stack,n=e.clock,i=e.currentTaskTimer,o=e.setCurrentTaskTimer;Object(a.useEffect)((function(){if(void 0!==t[0]){var e=window.setInterval((function(){o(Math.floor(((new Date).getTime()-t[t.length-1].time)/1e3))}),3e4);return function(){return window.clearInterval(e)}}}));var r=0,u=Object(a.useState)([]),d=Object(s.a)(u,2),h=d[0],f=d[1];Object(a.useEffect)((function(){if(void 0!==t[0]){var e=window.setInterval((function(){r+=1;var e=Object(l.a)(h);e.push({id:r}),f(e),console.log(h)}),6e4);return function(){return window.clearInterval(e)}}}),[h]),Object(a.useEffect)((function(){r=0,f([])}),[t]);var b=n(i);console.log("current ",i);var m=function(){return Object(c.jsx)("div",{className:"time-bars"})};return Object(c.jsxs)("div",{className:"current-task-container",children:[Object(c.jsx)("div",{className:"current-timer",children:Object(c.jsx)("h4",{children:void 0!==t[0]?Object(c.jsxs)(c.Fragment,{children:[b.minutes,":",b.seconds]}):null})}),Object(c.jsx)("div",{className:"current-title",children:Object(c.jsx)("h1",{children:void 0!==t[0]?t[t.length-1].topic:null})}),Object(c.jsx)("div",{className:"current-task-background",children:h.map((function(e,t){return Object(c.jsx)(m,{},t)}))})]})}),v=(n(154),function(){var e=Object(a.useContext)(j),t=e.clock,n=e.startingTime,i=Object(a.useState)(Math.floor(((new Date).getTime()-n)/1e3)),o=Object(s.a)(i,2),r=o[0],l=o[1],u=t(r);return Object(a.useEffect)((function(){var e=window.setInterval((function(){l(Math.floor(((new Date).getTime()-n)/1e3))}),6e4);return console.log(r),function(){return window.clearInterval(e)}}),[]),Object(c.jsxs)("div",{className:"global-timer",children:[u.hours,":",u.minutes,":",u.seconds]})}),x=(n(155),function(){var e=Object(a.useContext)(j),t=e.clearAllHandler,n=e.downloadSummaryHandler;return Object(c.jsxs)("header",{className:"header",children:[Object(c.jsxs)("div",{className:"header-left",children:[Object(c.jsx)(v,{}),Object(c.jsx)("button",{className:"end-meeting-btn",onClick:n,children:"End meeting"})]}),Object(c.jsx)("div",{className:"header-center",children:Object(c.jsx)("h5",{className:"instructions",children:"Ctrl+Shift+X: Removes current stack  |  Double click: Moves the task between lists"})}),Object(c.jsx)("div",{className:"header-right",children:Object(c.jsx)("button",{className:"clear-btn",onClick:t,children:"Clear all"})})]})});var k=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsxs)(h,{children:[Object(c.jsx)(x,{}),Object(c.jsx)(g,{}),Object(c.jsx)(b,{}),Object(c.jsx)(O,{}),Object(c.jsx)(m,{})]})})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,159)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),i(e),o(e)}))};r.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(k,{})}),document.getElementById("root")),w()},60:function(e,t,n){},61:function(e,t,n){},77:function(e,t){}},[[156,1,2]]]);
//# sourceMappingURL=main.76ed77d5.chunk.js.map
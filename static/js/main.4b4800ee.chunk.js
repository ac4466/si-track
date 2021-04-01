(this["webpackJsonpsi-track"]=this["webpackJsonpsi-track"]||[]).push([[0],{117:function(e,t,n){"use strict";n.r(t);n(105);var c,l,i,a,r,s=n(0),j=n(19),b=n.n(j),o=n(29),d=n(45),x=n(121),u=n(91),O=n.n(u),f=n(46),p=n(7),h=f.a.div(c||(c=Object(d.a)(["\n  display: flex;\n  flex-flow: column;\n  height: 100vh;\n"]))),y=f.a.div(l||(l=Object(d.a)(["\n  flex: 0 1 auto;\n  background: #1890ff;\n  padding: 10px;\n"]))),g=f.a.div(i||(i=Object(d.a)(["\n  display: flex;\n  justify-content: center;\n  background: LightYellow;\n  flex: 1 1 auto;\n  padding: 50px;\n"]))),I=f.a.div(a||(a=Object(d.a)(["\n  flex: 1 1 auto;\n  background: white;\n  max-width: 1000px;\n  overflow: auto;\n"])));!function(e){e[e.UNINITIALIZED=0]="UNINITIALIZED",e[e.IN_PROGRESS=1]="IN_PROGRESS",e[e.VICTORY=2]="VICTORY"}(r||(r={}));var m,v=Object(o.b)({key:"trackerState",default:r.UNINITIALIZED}),k=function(e){var t=e.children,n=Object(o.d)(v);return Object(p.jsxs)(p.Fragment,{children:[n===r.VICTORY&&Object(p.jsx)(O.a,{numberOfPieces:500,tweenDuration:3e4,initialVelocityY:{min:5,max:5}}),Object(p.jsxs)(h,{children:[Object(p.jsx)(y,{children:Object(p.jsx)(x.a.Title,{level:2,style:{textAlign:"center",color:"white",margin:"0"},children:"Spirit Island Tracker"})}),Object(p.jsx)(g,{children:Object(p.jsx)(I,{children:t})})]})]})},w=n(9),N=n(122),S=n(64),T=n(123),C=Object(o.b)({key:"playerCount",default:2}),E=function(){var e=Object(o.c)(v),t=Object(w.a)(e,2),n=t[0],c=t[1],l=Object(o.c)(C),i=Object(w.a)(l,2),a=i[0],s=i[1];return Object(p.jsx)(N.a,{title:"Number of Players",visible:n===r.UNINITIALIZED,centered:!0,closable:!1,footer:Object(p.jsx)(S.a,{type:"primary",onClick:function(){c(r.IN_PROGRESS)},children:"Start"}),children:Object(p.jsxs)(T.a.Group,{style:{display:"flex",justifyContent:"center"},defaultValue:String(a),size:"large",onChange:function(e){s(Number(e.target.value))},children:[Object(p.jsx)(T.a.Button,{value:"2",children:"2"}),Object(p.jsx)(T.a.Button,{value:"3",children:"3"}),Object(p.jsx)(T.a.Button,{value:"4",children:"4"})]})})},R=n(60),A=n(33),F=n(125),L=n(124),D=n(120),P=x.a.Title,V=f.a.span(m||(m=Object(d.a)(["\n  margin-right: 8px;\n  width: 13px;\n  height: 13px;\n  border-radius: 50%;\n  background: ",";\n"])),(function(e){return e.filled?"firebrick":"lightgray"})),Y=function(e){for(var t=e.level,n=[],c=0;c<10;c++)c%3===0?n.push(Object(p.jsx)(P,{level:3,style:{margin:c<9?"0px 8px 0px 0px":"0px",color:t>=c?"firebrick":"lightgray"},children:c<9?c/3+1:"W"},c)):n.push(Object(p.jsx)(V,{filled:t>=c},c));return Object(p.jsxs)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:[Object(p.jsx)(P,{level:3,style:{margin:"0px 8px 0px 0px"},children:"Terror Level:"}),n]})},G=function(){var e=4*Object(o.d)(C),t=Object(s.useState)(e),n=Object(w.a)(t,2),c=n[0],l=n[1],i=Object(s.useState)(0),a=Object(w.a)(i,2),j=a[0],b=a[1],d=Object(s.useState)(0),x=Object(w.a)(d,2),u=x[0],O=x[1],f=Object(o.e)(v),h=Object(s.useMemo)((function(){return new Audio("".concat("/si-track","/horn.mp3"))}),[]);Object(s.useEffect)((function(){c||O((function(e){return e+1}))}),[c,O]),Object(s.useEffect)((function(){9===u&&(h.play(),f(r.VICTORY))}),[h,u,f]);return Object(p.jsx)(D.a,{title:Object(p.jsx)(Y,{level:u}),children:Object(p.jsxs)(R.a,{children:[Object(p.jsxs)(A.a,{span:9,style:{display:"flex",flexFlow:"column",alignItems:"center"},children:[Object(p.jsx)(P,{level:4,children:"Fear Pool"}),Object(p.jsx)(P,{level:1,style:{margin:"0px"},children:c})]}),Object(p.jsxs)(A.a,{span:6,style:{display:"flex",flexFlow:"column",justifyContent:"space-between",alignItems:"center"},children:[Object(p.jsx)(S.a,{danger:!0,shape:"circle",icon:Object(p.jsx)(F.a,{}),onClick:function(){l(e),b(0)},disabled:!!c||9===u,style:{display:"block"}}),Object(p.jsx)(S.a,{type:"primary",size:"large",shape:"circle",icon:Object(p.jsx)(L.a,{}),onClick:function(){l(c-1),b(j+1)},disabled:!c||9===u,style:{display:"block"}})]}),Object(p.jsxs)(A.a,{span:9,style:{display:"flex",flexFlow:"column",alignItems:"center"},children:[Object(p.jsx)(P,{level:4,children:"Generated Fear"}),Object(p.jsx)(P,{level:1,style:{margin:"0px"},children:j})]})]})})},U=function(){return Object(o.d)(v)===r.UNINITIALIZED?null:Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)(R.a,{children:[Object(p.jsx)(A.a,{span:12,children:Object(p.jsx)(G,{})}),Object(p.jsx)(A.a,{span:12})]})})},Z=function(){return Object(p.jsx)(o.a,{children:Object(p.jsxs)(k,{children:[Object(p.jsx)(E,{}),Object(p.jsx)(U,{})]})})};b.a.render(Object(p.jsx)(Z,{}),document.getElementById("root"))}},[[117,1,2]]]);
//# sourceMappingURL=main.4b4800ee.chunk.js.map
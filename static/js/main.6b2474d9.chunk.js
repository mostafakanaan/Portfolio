(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{24:function(e,a,t){e.exports=t(38)},30:function(e,a,t){},31:function(e,a,t){e.exports=t.p+"static/media/mkanaan.d167e6ee.png"},38:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(12),l=t.n(c),o=(t(29),t(30),t(5)),i=t(6),s=t(8),u=t(7),m=t(18),p=t.n(m),f=function(e){Object(s.a)(t,e);var a=Object(u.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,a={strings:this.props.strings,typeSpeed:100,backSpeed:50,onComplete:function(){e.typed.reset()}};this.typed=new p.a(this.el,a)}},{key:"componentWillUnmount",value:function(){this.typed.destroy()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"wrap"},r.a.createElement("div",{className:"type-wrap dark-text"},r.a.createElement("span",null,this.props.text),r.a.createElement("span",{style:{whiteSpace:"pre"},ref:function(a){e.el=a}})))}}]),t}(r.a.Component),d=t(19),h=function(e){Object(s.a)(t,e);var a=Object(u.a)(t);function t(){var e;return Object(o.a)(this,t),(e=a.call(this)).state={fade:!1},e}return Object(i.a)(t,[{key:"render",value:function(){var e=this,a=this.state.fade;return r.a.createElement("span",{onClick:function(){return e.setState({fade:!0})},onAnimationEnd:function(){e.setState({fade:!1}),function(e){var a=window.open(e,"_blank","noopener,noreferrer");a&&(a.opener=null)}(e.props.uri)},className:a?"clickableIcon fade":"clickableIcon"},r.a.createElement("i",{className:this.props.icon+" "+this.state.fade}))}}]),t}(r.a.Component),E=t(40),b=function(e){Object(s.a)(n,e);var a=Object(u.a)(n);function n(){return Object(o.a)(this,n),a.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{id:"home",className:"Page"},r.a.createElement(d.a,{fluid:!0},r.a.createElement(E.a,null,r.a.createElement("img",{src:t(31),className:"smallimg",alt:"mkanaan"})),r.a.createElement(E.a,{className:"justify-content-center dark-text"},r.a.createElement(h,{uri:"https://facebook.com/SteveKanaan/",icon:"fab fa-facebook"}),r.a.createElement(h,{uri:"https://instagram.com/_dermusti/",icon:"fab fa-instagram"}),r.a.createElement(h,{uri:"mailto:muus.kaan@hotmail.com",icon:"far fa-envelope"})),r.a.createElement("div",{className:"line"}),r.a.createElement(f,{strings:["software developer","student at FH-Aachen","freelancer",""],text:"My name is Mustafa Kanaan, I'm a "})))}}]),n}(n.Component),v=t(42),k=t(41),y=t(43),j=function(e){Object(s.a)(t,e);var a=Object(u.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(v.a,{bg:"white",expand:"lg",sticky:"top"},r.a.createElement(v.a.Brand,{href:"/"},r.a.createElement("h1",null,r.a.createElement(k.a,{variant:"dark"},"M.Kanaan"))),r.a.createElement(v.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(v.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(y.a,{className:"align-content-md-center"},r.a.createElement(y.a.Link,{href:"#home"},r.a.createElement("h5",null,"Home")),r.a.createElement(y.a.Link,{href:"#work"},r.a.createElement("h5",null,"Work")),r.a.createElement(y.a.Link,{href:"#about"},r.a.createElement("h5",null,"About"))),r.a.createElement(y.a,{className:"ml-auto"},r.a.createElement(y.a.Link,{href:"#contact"},r.a.createElement("h5",null,"Say hi!")))))}}]),t}(r.a.Component),O=t(22),g=function(e){Object(s.a)(t,e);var a=Object(u.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.hideLoader()}},{key:"render",value:function(){return r.a.createElement(O.a,{fluid:!0,className:"App"},r.a.createElement(j,null),r.a.createElement(b,null))}}]),t}(n.Component),w=document.querySelector(".loader");l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,{hideLoader:function(){return w.classList.add("loader--hide")},showLoader:function(){return w.classList.remove("loader--hide")}})),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.6b2474d9.chunk.js.map
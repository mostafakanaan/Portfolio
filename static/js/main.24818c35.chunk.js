(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{61:function(e,t,a){e.exports=a(74)},67:function(e,t,a){},69:function(e,t,a){e.exports=a.p+"static/media/moon.2e535ff3.png"},70:function(e,t,a){e.exports=a.p+"static/media/coming_soon.0a704d7e.jpg"},71:function(e,t,a){e.exports=a.p+"static/media/mkanaan.d167e6ee.png"},74:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(9),c=a.n(l),o=(a(66),a(67),a(13)),i=a(14),s=a(16),m=a(15),u=a(34),d=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("nav",null,r.a.createElement("div",{className:"logo"},r.a.createElement("h1",null,r.a.createElement("a",{href:"/"},"M.Kanaan"))),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"#work"},"Work")),r.a.createElement("li",null,r.a.createElement("a",{href:"#about"},"About")),r.a.createElement("li",null,r.a.createElement("a",{href:"#contact"},"Contact"))))}}]),a}(r.a.Component),f=0,E=function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=document.querySelector("nav");window.addEventListener("scroll",(function(){document.scrollingElement.scrollTop<f?e.classList.remove("fixed-nav"):e.getBoundingClientRect().top<=0&&e.classList.add("fixed-nav"),f=document.scrollingElement.scrollTop}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"Page",id:"home"},r.a.createElement("div",{className:"WelcomeText"},r.a.createElement("img",{src:a(69),alt:""}),r.a.createElement(u.b,{from:{y:"-100vh"},duration:2,ease:"power1.out"},r.a.createElement("h1",null,"Welcome to my portfolio")),r.a.createElement(u.b,{from:{y:"100vh"},duration:2,ease:"power1.out"},r.a.createElement("h1",null,"Still working on it . . .")),r.a.createElement(d,null)))}}]),n}(n.Component),h=a(106),p=a(119),b=function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement(p.a,{className:"greyedout"},r.a.createElement(p.a.Img,{variant:"top",src:a(70)}),r.a.createElement(p.a.Body,null,r.a.createElement(p.a.Title,null,r.a.createElement("h2",{className:"dark-text"},"Projects")),r.a.createElement(p.a.Text,{className:"dark-text"},r.a.createElement("i",{className:"fas fa-lock"}))))}}]),n}(n.Component),v=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"Page",id:"work"},r.a.createElement(h.a,null,r.a.createElement(b,null)))}}]),a}(n.Component),g=function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"Page",id:"about"},r.a.createElement("div",{className:"WelcomeText"},r.a.createElement(u.a,{repeat:!0},r.a.createElement(u.b,{from:{opacity:0},duration:1.5},r.a.createElement("img",{src:a(71),className:"smallimg",alt:"mkanaan"}))),r.a.createElement("h2",null,"My name is Mustafa Kanaan"),r.a.createElement("h2",null,"Currently working at:"),r.a.createElement("h2",null,r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.eutech-scientific.de/"},"EUtech Scientific Engineering"))))}}]),n}(n.Component),k=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={fade:!1},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=this.state.fade;return r.a.createElement("span",{onClick:function(){return e.setState({fade:!0})},onAnimationEnd:function(){e.setState({fade:!1}),function(e){var t=window.open(e,"_blank","noopener,noreferrer");t&&(t.opener=null)}(e.props.uri)},className:t?"clickableIcon fade":"clickableIcon"},r.a.createElement("i",{className:this.props.icon+" "+this.state.fade}))}}]),a}(r.a.Component),j=a(117),y=a(114),O=a(115),w=a(120),N=a(116),C=a(118),x=a(111),S=a(113);function L(e){return r.a.createElement(C.a,Object.assign({elevation:6,variant:"filled"},e))}var P=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).handleSubmit=function(t){if("show"!==e.state.loading){e.setState({loading:"show"});var a=document.forms["submit-to-google-sheet"];t.preventDefault(),fetch("https://script.google.com/macros/s/AKfycbzgWm6ABYpijE48n6fVCMyEjIvBsfj6WXS72B__mW9FB1OQPw74-C3s/exec",{method:"POST",body:new FormData(a)}).then((function(){e.setState({success:!0,loading:"hide"}),a.reset(),document.getElementById("home").scrollIntoView(!0,{behavior:"smooth"})})).catch((function(){return e.setState({error:!0,loading:"hide"})}))}},e.handleClose=function(){e.setState({success:!1,error:!1})},e.state={success:!1,error:!1,loading:"hide"},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"Page",id:"contact"},r.a.createElement(x.a,{fluid:!0,id:"contactJumbotron"},r.a.createElement("h2",{className:"dark-text"},"Hello there,"),r.a.createElement("h5",{className:"dark-text"},"Get in touch using the form below or email me",r.a.createElement(k,{uri:"mailto:work@mkanaan.de",icon:"far fa-envelope"})," "),r.a.createElement(k,{uri:"https://de.linkedin.com/in/mos-kan",icon:"fab fa-linkedin-in dark-text"}),r.a.createElement(k,{uri:"https://twitter.com/mkanaan_de",icon:"fab fa-twitter dark-text"}),r.a.createElement(k,{uri:"https://github.com/mostafakanaan",icon:"fab fa-github dark-text"}),r.a.createElement(k,{uri:"https://facebook.com/SteveKanaan/",icon:"fab fa-facebook dark-text"}),r.a.createElement(k,{uri:"https://instagram.com/_dermusti/",icon:"fab fa-instagram dark-text"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("form",{autoComplete:"off",name:"submit-to-google-sheet",onSubmit:this.handleSubmit},r.a.createElement(j.a,{required:!0,className:"input",label:"Name",variant:"outlined",name:"name"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(j.a,{required:!0,className:"input",label:"Email",variant:"outlined",name:"email"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(j.a,{className:"input",label:"Phone Number",variant:"outlined",name:"number"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(j.a,{required:!0,className:"input",label:"Message",rows:3,variant:"outlined",multiline:!0,name:"message"}),r.a.createElement("br",null),r.a.createElement(S.a,{className:this.state.loading},r.a.createElement(y.a,{id:"submitting"})),r.a.createElement(O.a,{type:"submit",id:"submitBtn",variant:"contained"},r.a.createElement("span",null,"Send ",r.a.createElement("i",{className:"fas fa-paper-plane"}))),r.a.createElement(w.a,{open:this.state.success,autoHideDuration:5e3,onClose:this.handleClose,TransitionComponent:N.a},r.a.createElement(L,{severity:"success"},"Message delivered - I will write you back ASAP!")),r.a.createElement(w.a,{open:this.state.error,autoHideDuration:5e3,onClose:this.handleClose},r.a.createElement(L,{severity:"error"},"Something went wrong - Please try again later!")))))}}]),a}(n.Component),B=a(52),M=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.props.hideLoader()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(B.a,{fluid:!0,className:"App"},r.a.createElement("div",{className:"stars"}),r.a.createElement("div",{className:"twinkling"}),r.a.createElement("div",{className:"clouds"}),r.a.createElement(E,null),r.a.createElement(v,null),r.a.createElement(g,null),r.a.createElement(P,null)))}}]),a}(n.Component),T=document.querySelector(".loader"),I=function(){return T.classList.remove("loader--hide")},A=function(){return T.classList.add("loader--hide")};document.addEventListener("DOMContentLoaded",(function(){setTimeout((function(){c.a.render(r.a.createElement(M,{hideLoader:A,showLoader:I}),document.getElementById("root"))}),500)}))}},[[61,1,2]]]);
//# sourceMappingURL=main.24818c35.chunk.js.map
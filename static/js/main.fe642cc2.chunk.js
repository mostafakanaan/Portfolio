(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{67:function(e,t,a){e.exports=a(80)},73:function(e,t,a){},77:function(e,t,a){e.exports=a.p+"static/media/coming_soon.0a704d7e.jpg"},78:function(e,t,a){e.exports=a.p+"static/media/mkanaan.d167e6ee.png"},80:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(8),c=a.n(l),o=(a(72),a(73),a(15)),i=a(16),s=a(18),m=a(17),u=a(52),d=a.n(u),f=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this,t={strings:this.props.strings,typeSpeed:75,backSpeed:25,onComplete:function(){e.typed.reset()}};this.typed=new d.a(this.el,t)}},{key:"componentWillUnmount",value:function(){this.typed.destroy()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"wrap"},r.a.createElement("div",{className:"type-wrap"},r.a.createElement("span",null,this.props.text),r.a.createElement("span",{style:{whiteSpace:"pre"},ref:function(t){e.el=t}})))}}]),a}(r.a.Component),p=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={fade:!1},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=this.state.fade;return r.a.createElement("span",{onClick:function(){return e.setState({fade:!0})},onAnimationEnd:function(){e.setState({fade:!1}),function(e){var t=window.open(e,"_blank","noopener,noreferrer");t&&(t.opener=null)}(e.props.uri)},className:t?"clickableIcon fade":"clickableIcon"},r.a.createElement("i",{className:this.props.icon+" "+this.state.fade}))}}]),a}(r.a.Component),h=a(114),E=a(115),b=a(131),v=a(127),g=a(116),k=function(e){document.getElementById(e).scrollIntoView(!0,{behavior:"smooth"})},y=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"home",className:"Page"},r.a.createElement(h.a,{id:"homeBody"},r.a.createElement(E.a,{md:"auto"},r.a.createElement("div",{id:"introBox"},r.a.createElement("h1",null,"Hi, I'm Mustafa"),r.a.createElement(f,{strings:["student at FH-Aachen","software developer","freelancer",""],text:"a "}),r.a.createElement("h6",null,"Currently working @ ",r.a.createElement("a",{target:"blank",href:"https://www.eutech-scientific.de/"},"EUtech Scientific Engineering")),r.a.createElement(b.a,{id:"aboutBtn",variant:"light",onClick:function(){k("about")}},"Learn more ",r.a.createElement("i",{className:"fas fa-arrow-right"})))),r.a.createElement(E.a,{xs:!0,lg:"2",id:"letsTalkBox"},r.a.createElement(b.a,{id:"letsTalkBtn",variant:"light",onClick:function(){k("contact")}},"Let's Talk!"))),r.a.createElement(h.a,{id:"homeFooter"},r.a.createElement(v.a,{overlay:r.a.createElement(g.a,{id:"tooltip"},"My Projects")},r.a.createElement("span",{id:"scrollBtn",onClick:function(){k("work")}},r.a.createElement("i",{className:"fas fa-angle-double-down"}))),r.a.createElement("div",{id:"socialmedia"},r.a.createElement(p,{uri:"https://facebook.com/SteveKanaan/",icon:"fab fa-facebook"}),r.a.createElement(p,{uri:"https://instagram.com/_dermusti/",icon:"fab fa-instagram"}),r.a.createElement(p,{uri:"https://twitter.com/mkanaan_de",icon:"fab fa-twitter"}),r.a.createElement(p,{uri:"https://github.com/mostafakanaan",icon:"fab fa-github"}))))}}]),a}(n.Component),j=a(117),O=a(130),w=function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement(O.a,{className:"greyedout"},r.a.createElement(O.a.Img,{variant:"top",src:a(77)}),r.a.createElement(O.a.Body,null,r.a.createElement(O.a.Title,{className:"dark-text"},"Project Name"),r.a.createElement(O.a.Text,{className:"dark-text"},r.a.createElement("i",{className:"fas fa-lock"}))))}}]),n}(n.Component),N=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"Page",id:"work"},r.a.createElement(j.a,null,r.a.createElement(w,null),r.a.createElement(w,null),r.a.createElement(w,null)))}}]),a}(n.Component),C=a(118),S=function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"Page",id:"about"},r.a.createElement(C.a,{fluid:!0},r.a.createElement(h.a,null,r.a.createElement("img",{src:a(78),className:"smallimg",alt:"mkanaan"})),r.a.createElement("h4",{className:"dark-text"},"Some Information About Me.."),r.a.createElement("div",{className:"line"})))}}]),n}(n.Component),B=a(128),x=a(124),I=a(125),M=a(132),P=a(126),D=a(129),A=a(5);function L(e){return r.a.createElement(D.a,Object.assign({elevation:6,variant:"filled"},e))}var T=Object(A.a)({root:{"& label.Mui-focused":{color:"#8D2C92"},"& .MuiInput-underline:after":{borderBottomColor:"#8D2C92"},"& .MuiOutlinedInput-root":{"&.Mui-focused fieldset":{borderColor:"#8D2C92"}}}})(B.a),_=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).handleSubmit=function(t){if("show"!==e.state.loading){e.setState({loading:"show"});var a=document.forms["submit-to-google-sheet"];t.preventDefault(),fetch("https://script.google.com/macros/s/AKfycbzgWm6ABYpijE48n6fVCMyEjIvBsfj6WXS72B__mW9FB1OQPw74-C3s/exec",{method:"POST",body:new FormData(a)}).then((function(){e.setState({success:!0,loading:"hide"}),a.reset(),document.getElementById("home").scrollIntoView(!0,{behavior:"smooth"})})).catch((function(){return e.setState({error:!0,loading:"hide"})}))}},e.handleClose=function(){e.setState({success:!1,error:!1})},e.state={success:!1,error:!1,loading:"hide"},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"Page",id:"contact"},r.a.createElement(C.a,{fluid:!0,id:"contactJumbotron"},r.a.createElement("h2",{className:"dark-text"},"Hello there,"),r.a.createElement("h5",{className:"dark-text"},"Get in touch using the form below or email me",r.a.createElement(p,{uri:"mailto:muus.kaan@hotmail.com",icon:"far fa-envelope"})," "),r.a.createElement("br",null),r.a.createElement("form",{autoComplete:"off",name:"submit-to-google-sheet",onSubmit:this.handleSubmit},r.a.createElement(T,{required:!0,className:"input",label:"Name",variant:"outlined",name:"name"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(T,{required:!0,className:"input",label:"Email",variant:"outlined",name:"email"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(T,{className:"input",label:"Phone Number",variant:"outlined",name:"number"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(T,{required:!0,className:"input",label:"Message",rows:3,variant:"outlined",multiline:!0,name:"message"}),r.a.createElement("br",null),r.a.createElement(h.a,{className:this.state.loading},r.a.createElement(x.a,{id:"submitting"})),r.a.createElement(I.a,{type:"submit",id:"submitBtn",variant:"contained"},r.a.createElement("span",null,"Send ",r.a.createElement("i",{className:"fas fa-paper-plane"}))),r.a.createElement(M.a,{open:this.state.success,autoHideDuration:5e3,onClose:this.handleClose,TransitionComponent:P.a},r.a.createElement(L,{severity:"success"},"Message delivered - I will write you back ASAP!")),r.a.createElement(M.a,{open:this.state.error,autoHideDuration:5e3,onClose:this.handleClose},r.a.createElement(L,{severity:"error"},"Something went wrong - Please try again later!")))))}}]),a}(n.Component),H=a(58),q=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.props.hideLoader()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(H.a,{fluid:!0,className:"App"},r.a.createElement(y,null),r.a.createElement(N,null),r.a.createElement(S,null),r.a.createElement(_,null)))}}]),a}(n.Component),F=document.querySelector(".loader");c.a.render(r.a.createElement(q,{hideLoader:function(){return F.classList.add("loader--hide")},showLoader:function(){return F.classList.remove("loader--hide")}}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.fe642cc2.chunk.js.map
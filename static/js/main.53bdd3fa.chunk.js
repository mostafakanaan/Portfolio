(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{54:function(e,t,a){e.exports=a(66)},60:function(e,t,a){},62:function(e,t,a){e.exports=a.p+"static/media/coming_soon.0a704d7e.jpg"},63:function(e,t,a){e.exports=a.p+"static/media/mkanaan.d167e6ee.png"},66:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),o=a.n(c),l=(a(59),a(60),a(11)),i=a(12),u=a(14),s=a(13),m=a(26),d=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"Page",id:"home"},r.a.createElement("div",{className:"WelcomeText"},r.a.createElement(m.b,{from:{y:"-100vh"},duration:2,ease:"power1.out"},r.a.createElement("h1",null,"Welcome to my portfolio")),r.a.createElement(m.b,{from:{y:"100vh"},duration:2,ease:"power1.out"},r.a.createElement("h1",null,"I'm still working on it..."))))}}]),a}(n.Component),f=a(95),h=a(102),p=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement(h.a,{className:"greyedout"},r.a.createElement(h.a.Img,{variant:"top",src:a(62)}),r.a.createElement(h.a.Body,null,r.a.createElement(h.a.Title,{className:"dark-text"},"Project Name"),r.a.createElement(h.a.Text,{className:"dark-text"},r.a.createElement("i",{className:"fas fa-lock"}))))}}]),n}(n.Component),b=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"Page",id:"work"},r.a.createElement(f.a,null,r.a.createElement(p,null),r.a.createElement(p,null),r.a.createElement(p,null)))}}]),a}(n.Component),E=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"Page",id:"about"},r.a.createElement("div",{className:"WelcomeText"},r.a.createElement(m.a,{repeat:!0},r.a.createElement(m.b,{from:{opacity:0},duration:1.5},r.a.createElement("img",{src:a(63),className:"smallimg",alt:"mkanaan"}))),r.a.createElement("h2",null,"My name is Mustafa Kanaan"),r.a.createElement("h2",null,"Currently working at:"),r.a.createElement("h2",null,r.a.createElement("a",{target:"blank",href:"https://www.eutech-scientific.de/"},"EUtech Scientific Engineering"))))}}]),n}(n.Component),v=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={fade:!1},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=this.state.fade;return r.a.createElement("span",{onClick:function(){return e.setState({fade:!0})},onAnimationEnd:function(){e.setState({fade:!1}),function(e){var t=window.open(e,"_blank","noopener,noreferrer");t&&(t.opener=null)}(e.props.uri)},className:t?"clickableIcon fade":"clickableIcon"},r.a.createElement("i",{className:this.props.icon+" "+this.state.fade}))}}]),a}(r.a.Component),j=a(100),g=(a(101),a(4));Object(g.a)({root:{"& label.Mui-focused":{color:"#8D2C92"},"& .MuiInput-underline:after":{borderBottomColor:"#8D2C92"},"& .MuiOutlinedInput-root":{"&.Mui-focused fieldset":{borderColor:"#8D2C92"}}}})(j.a);var O=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).handleSubmit=function(t){if("show"!==e.state.loading){e.setState({loading:"show"});var a=document.forms["submit-to-google-sheet"];t.preventDefault(),fetch("https://script.google.com/macros/s/AKfycbzgWm6ABYpijE48n6fVCMyEjIvBsfj6WXS72B__mW9FB1OQPw74-C3s/exec",{method:"POST",body:new FormData(a)}).then((function(){e.setState({success:!0,loading:"hide"}),a.reset(),document.getElementById("home").scrollIntoView(!0,{behavior:"smooth"})})).catch((function(){return e.setState({error:!0,loading:"hide"})}))}},e.handleClose=function(){e.setState({success:!1,error:!1})},e.state={success:!1,error:!1,loading:"hide"},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"Page",id:"contact"},r.a.createElement("div",{className:"WelcomeText"},r.a.createElement("h1",null,r.a.createElement(v,{uri:"https://twitter.com/mkanaan_de",icon:"fab fa-linkedin-in"})),r.a.createElement("h1",null,r.a.createElement(v,{uri:"https://twitter.com/mkanaan_de",icon:"fab fa-twitter"})),r.a.createElement("h1",null,r.a.createElement(v,{uri:"https://github.com/mostafakanaan",icon:"fab fa-github"})),r.a.createElement("h1",null,r.a.createElement(v,{uri:"https://facebook.com/SteveKanaan/",icon:"fab fa-facebook"})),r.a.createElement("h1",null,r.a.createElement(v,{uri:"https://instagram.com/_dermusti/",icon:"fab fa-instagram"})),r.a.createElement("h1",null,r.a.createElement(v,{uri:"mailto:muus.kaan@hotmail.com",icon:"far fa-envelope"}))))}}]),a}(n.Component),k=a(45),y=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.props.hideLoader()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(k.a,{fluid:!0,className:"App"},r.a.createElement(d,null),r.a.createElement(b,null),r.a.createElement(E,null),r.a.createElement(O,null)))}}]),a}(n.Component),w=document.querySelector(".loader");o.a.render(r.a.createElement(y,{hideLoader:function(){return w.classList.add("loader--hide")},showLoader:function(){return w.classList.remove("loader--hide")}}),document.getElementById("root"))}},[[54,1,2]]]);
//# sourceMappingURL=main.53bdd3fa.chunk.js.map
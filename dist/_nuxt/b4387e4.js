(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{634:function(t,e,r){"use strict";(function(t){r(25);var o=r(162),n=r.n(o);e.a={name:"Contact",data:function(){return{name:"",email:"",msg:"",submitting:!1,error:"Please properly fill out all inputs before submitting",showErr:!1}},methods:{sendMessage:function(){var e=this;this.submitting=!0;var r="".concat(t.env.PROD_URL);n.a.post("".concat(r,"/api/contact"),{name:this.name,email:this.email,msg:this.msg}).then((function(t){e.submitting=!1,e.showErr=!1,"OH YEAH"===t.data.message&&e.$router.push("/")})).catch((function(t){console.log(t),e.showErr=!0,e.submitting=!1}))}}}}).call(this,r(15))},637:function(t,e,r){var content=r(662);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(52).default)("6542e7d7",content,!0,{sourceMap:!1})},661:function(t,e,r){"use strict";r(637)},662:function(t,e,r){(e=r(51)(!1)).push([t.i,'@-webkit-keyframes right-data-v-50cac87c{0%{opacity:1;transform:translateY(5rem) translateX(0)}to{opacity:1;transform:translateY(5rem) translateX(12rem)}}@keyframes right-data-v-50cac87c{0%{opacity:1;transform:translateY(5rem) translateX(0)}to{opacity:1;transform:translateY(5rem) translateX(12rem)}}@-webkit-keyframes moveInLeft-data-v-50cac87c{0%{opacity:0;transform:translateX(30rem)}to{opacity:1;transform:translate(10rem)}}@keyframes moveInLeft-data-v-50cac87c{0%{opacity:0;transform:translateX(30rem)}to{opacity:1;transform:translate(10rem)}}@-webkit-keyframes scaleIn-data-v-50cac87c{0%{opacity:0;transform:scale(0)}to{opacity:1;transform:scale(1)}}@keyframes scaleIn-data-v-50cac87c{0%{opacity:0;transform:scale(0)}to{opacity:1;transform:scale(1)}}@-webkit-keyframes appear-data-v-50cac87c{0%{opacity:0;transform:translateY(4rem)}to{opacity:1;transform:translateY(0)}}@keyframes appear-data-v-50cac87c{0%{opacity:0;transform:translateY(4rem)}to{opacity:1;transform:translateY(0)}}@-webkit-keyframes slideLeft-data-v-50cac87c{0%{opacity:0;transform:translateX(40rem) translateY(4rem) rotateY(60deg) scale(1)}to{opacity:1;transform:translateY(0) scale(1.3)}}@keyframes slideLeft-data-v-50cac87c{0%{opacity:0;transform:translateX(40rem) translateY(4rem) rotateY(60deg) scale(1)}to{opacity:1;transform:translateY(0) scale(1.3)}}@-webkit-keyframes slideRightInActive-data-v-50cac87c{0%{opacity:0;transform:translateX(-40rem) translateY(4rem) rotateY(-60deg)}to{opacity:1;transform:translateY(0)}}@keyframes slideRightInActive-data-v-50cac87c{0%{opacity:0;transform:translateX(-40rem) translateY(4rem) rotateY(-60deg)}to{opacity:1;transform:translateY(0)}}@-webkit-keyframes slideRight-data-v-50cac87c{0%{opacity:0;transform:translateX(0) translateY(4rem) rotateY(60deg)}to{opacity:1;transform:translateX(37rem)}}@keyframes slideRight-data-v-50cac87c{0%{opacity:0;transform:translateX(0) translateY(4rem) rotateY(60deg)}to{opacity:1;transform:translateX(37rem)}}@-webkit-keyframes slideLeftTwo-data-v-50cac87c{0%{opacity:0;transform:translateX(0) translateY(4rem) rotateY(60deg)}to{opacity:1;transform:translateX(-37rem)}}@keyframes slideLeftTwo-data-v-50cac87c{0%{opacity:0;transform:translateX(0) translateY(4rem) rotateY(60deg)}to{opacity:1;transform:translateX(-37rem)}}@-webkit-keyframes invisible-data-v-50cac87c{0%{opacity:0}to{opacity:0}}@keyframes invisible-data-v-50cac87c{0%{opacity:0}to{opacity:0}}@-webkit-keyframes slideInRightMobile-data-v-50cac87c{0%{opacity:0}to{opacity:0}}@keyframes slideInRightMobile-data-v-50cac87c{0%{opacity:0}to{opacity:0}}.blurredcards[data-v-50cac87c]{height:40rem;width:27rem;margin-right:4rem;flex-shrink:0;background:#000;opacity:.8;box-shadow:0 4px 4px rgba(0,0,0,.25);-moz-filter:blur(.4rem);-o-filter:blur(.4rem);-ms-filter:blur(.4rem);filter:blur(.4rem);position:absolute}.blurredcards__photo[data-v-50cac87c]{height:100%;width:100%}.contact[data-v-50cac87c]{margin-top:8rem;color:#fff;padding:3rem 0;display:flex;flex-direction:column;position:relative}@media only screen and (max-width:75em){.contact[data-v-50cac87c]{padding:3rem 2rem}}.contact__error[data-v-50cac87c]{position:relative;margin:0 auto;width:80rem;height:6rem;color:red;background:#fff;text-align:center;font-size:2rem;display:flex;align-items:center;justify-content:center;opacity:0;transform:translateY(-9rem);transition:all .5s ease}@media only screen and (max-width:75em){.contact__error[data-v-50cac87c]{width:42rem;font-size:1.6rem}}.contact__error span[data-v-50cac87c]{color:red;font-family:"Helvetica","Arial",sans-serif;font-size:2.5rem;font-weight:700;text-align:center;width:4rem;height:4rem;border-radius:5px;cursor:pointer;display:flex;justify-content:center;align-items:center;position:absolute;right:0}@media only screen and (max-width:75em){.contact__error span[data-v-50cac87c]{font-size:1.7rem}}.contact__error.showErr[data-v-50cac87c]{opacity:1;transform:translateY(0)}.contact__header[data-v-50cac87c]{text-align:left;width:80rem;font-size:3.4rem;margin:0 auto 5rem}@media only screen and (max-width:75em){.contact__header[data-v-50cac87c]{width:42rem;font-size:2.5rem}}.contact__form[data-v-50cac87c]{display:flex;flex-direction:column;margin:0 auto;width:80rem;justify-content:center}@media only screen and (max-width:75em){.contact__form[data-v-50cac87c]{width:42rem}}.contact__form label[data-v-50cac87c]{display:inline-block;padding-left:1.4rem;font-size:1.5rem}.contact__form input[data-v-50cac87c]{border:none;outline:none;font-size:1.5rem;padding:1.4rem;background:transparent;color:#fff;margin-bottom:2rem;transition:all .5s ease}.contact__form input[data-v-50cac87c]:valid{border-bottom:2px solid #fff}.contact__form input[data-v-50cac87c]:invalid{border-bottom:2px solid red}.contact__form textarea[data-v-50cac87c]{border:none;outline:none;font-size:2.2rem;padding:1.4rem;background:transparent;margin-bottom:2rem;color:#fff}.contact__form textarea[data-v-50cac87c]:valid{border-bottom:2px solid #fff}.contact__form textarea[data-v-50cac87c]:invalid{border-bottom:2px solid red}.contact__submit--btn[data-v-50cac87c]{outline:none;border:1px solid #fff;color:#fff;background:transparent;text-transform:uppercase;font-size:1.5rem;height:3.8rem;width:13rem;text-align:center;cursor:pointer}',""]),t.exports=e},713:function(t,e,r){"use strict";r.r(e);var o=r(634).a,n=(r(661),r(20)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"contact"},[o("div",{staticClass:"contact__error",class:{showErr:t.showErr}},[o("p",[t._v(t._s(t.error))]),t._v(" "),o("span",{on:{click:function(e){t.showErr=!1}}},[t._v("X")])]),t._v(" "),o("h2",{staticClass:"contact__header"},[t._v("Contact Samson")]),t._v(" "),o("form",{staticClass:"contact__form"},[o("label",{attrs:{for:"name"}},[t._v("Your Name")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{type:"text",name:"name",placeholder:"Enter your full name"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),t._v(" "),o("label",{attrs:{for:"email"}},[t._v("Your Email")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"email",name:"email",placeholder:"Enter your email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._v(" "),o("label",{attrs:{for:"name"}},[t._v("Your Message")]),t._v(" "),o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.msg,expression:"msg"}],attrs:{type:"text",name:"msg",rows:"4",cols:"50",placeholder:"Your message here..."},domProps:{value:t.msg},on:{input:function(e){e.target.composing||(t.msg=e.target.value)}}}),t._v(" "),o("div",{staticClass:"contact__submit"},[o("button",{staticClass:"contact__submit--btn",on:{click:function(e){return e.preventDefault(),t.sendMessage(e)}}},[t._v("\n        "+t._s(t.submitting?"Sending":"Submit →")+"\n      ")])])]),t._v(" "),o("div",{staticClass:"contact__socials"},[o("span",[o("svg",[o("use",{attrs:{"xlink:href":r(28)+"#icon-twitter"}})])]),t._v(" "),o("span",[o("svg",[o("use",{attrs:{"xlink:href":r(28)+"#icon-instagram"}})])]),t._v(" "),o("span",[o("svg",[o("use",{attrs:{"xlink:href":r(28)+"#icon-dribbble"}})])])])])}),[],!1,null,"50cac87c",null);e.default=component.exports}}]);
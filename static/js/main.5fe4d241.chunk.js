(this.webpackJsonphw13=this.webpackJsonphw13||[]).push([[0],{17:function(e,t,n){e.exports={errorInput:"SuperInputText_errorInput__qB8Zt",form__label:"SuperInputText_form__label__2u4l5",form__input:"SuperInputText_form__input__3i_VG",error:"SuperInputText_error__2xjPU",superInput:"SuperInputText_superInput__2zHko"}},20:function(e,t,n){e.exports={red:"SuperButton_red__3m1Uo",default:"SuperButton_default__t0wzq"}},21:function(e,t,n){e.exports={checkbox:"SuperCheckbox_checkbox__1C7lI",spanClassName:"SuperCheckbox_spanClassName__2ALK-"}},32:function(e,t,n){},33:function(e,t,n){},4:function(e,t,n){e.exports={img:"Header_img__3GTvd",nav:"Header_nav__3ZV1d",navCollapsed:"Header_navCollapsed__2vvxA",item:"Header_item__113At",activeLink:"Header_activeLink__1hYE8"}},40:function(e,t,n){"use strict";n.r(t);n(0);var c=n(15),r=n.n(c),a=(n(32),n(33),n(9)),s=n(3),i=n.p+"static/media/404.07f9f97f.png",o=n(1);var j=function(){return Object(o.jsx)("div",{children:Object(o.jsx)("img",{src:i,alt:""})})};function u(){return Object(o.jsx)("div",{children:"LoginPage"})}function d(){return Object(o.jsx)("div",{children:"PasswordRecoveryPage"})}function l(){return Object(o.jsx)("div",{children:"PasswordNewPage"})}function b(){return Object(o.jsx)("div",{children:"ProfilePage"})}function x(){return Object(o.jsx)("div",{children:"RegisterPage"})}var h=n(11),v=n(12),p=n(17),O=n.n(p),f=function(e){e.type;var t=e.onChange,n=e.onChangeText,c=e.onKeyPress,r=e.onEnter,a=e.error,s=(e.className,e.spanClassName),i=e.setError,j=Object(v.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName","setError"]),u="".concat(O.a.error," ").concat(s||""),d=a?O.a.errorInput:O.a.superInput;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("input",Object(h.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value),i&&i("")},onKeyPress:function(e){c&&c(e),"Enter"===e.key&&r&&r()},className:d},j)),a&&Object(o.jsx)("span",{className:u,children:a})]})},m=n(20),_=n.n(m),g=function(e){var t=e.error,n=(e.className,Object(v.a)(e,["error","className"])),c=t?_.a.red:_.a.default;return Object(o.jsx)("button",Object(h.a)({className:c},n))},C=n(21),N=n.n(C),k=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,c=e.className,r=(e.spanClassName,e.children),a=Object(v.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(N.a.checkbox," ").concat(c||"");return Object(o.jsxs)("label",{children:[Object(o.jsx)("input",Object(h.a)({type:"checkbox",onChange:function(e){n&&n(e.currentTarget.checked),t&&t(e)},className:s},a)),r&&Object(o.jsx)("span",{className:N.a.spanClassName,children:r})]})};function w(){return Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{children:"TestPage"}),Object(o.jsx)("div",{children:Object(o.jsx)(f,{})}),Object(o.jsx)("div",{children:Object(o.jsx)(g,{error:"",children:"button"})}),Object(o.jsx)("div",{children:Object(o.jsx)(k,{})})]})}var P="/login",y="/password-recovery",I="/password-new",T="/profile",L="/register",S="/test";var E=function(){return Object(o.jsx)("div",{children:Object(o.jsxs)(s.d,{children:[Object(o.jsx)(s.b,{path:"/",exact:!0,render:function(){return Object(o.jsx)(s.a,{to:S})}}),Object(o.jsx)(s.b,{path:P,render:function(){return Object(o.jsx)(u,{})}}),Object(o.jsx)(s.b,{path:y,render:function(){return Object(o.jsx)(d,{})}}),Object(o.jsx)(s.b,{path:I,render:function(){return Object(o.jsx)(l,{})}}),Object(o.jsx)(s.b,{path:T,render:function(){return Object(o.jsx)(b,{})}}),Object(o.jsx)(s.b,{path:L,render:function(){return Object(o.jsx)(x,{})}}),Object(o.jsx)(s.b,{path:S,render:function(){return Object(o.jsx)(w,{})}}),Object(o.jsx)(s.b,{render:function(){return Object(o.jsx)(j,{})}})]})})},H=n(4),B=n.n(H);var F=function(){return Object(o.jsx)("div",{children:Object(o.jsxs)("nav",{className:B.a.nav,children:[Object(o.jsx)("div",{className:"".concat(B.a.item," ").concat(B.a.active),children:Object(o.jsx)(a.b,{activeClassName:B.a.activeLink,to:P,children:"login"})}),Object(o.jsx)("div",{className:"".concat(B.a.item," ").concat(B.a.active),children:Object(o.jsx)(a.b,{activeClassName:B.a.activeLink,to:y,children:"password recovery"})}),Object(o.jsx)("div",{className:"".concat(B.a.item," ").concat(B.a.active),children:Object(o.jsx)(a.b,{activeClassName:B.a.activeLink,to:I,children:"password new"})}),Object(o.jsx)("div",{className:"".concat(B.a.item," ").concat(B.a.active),children:Object(o.jsx)(a.b,{activeClassName:B.a.activeLink,to:T,children:"profile"})}),Object(o.jsx)("div",{className:"".concat(B.a.item," ").concat(B.a.active),children:Object(o.jsx)(a.b,{activeClassName:B.a.activeLink,to:L,children:"register"})}),Object(o.jsx)("div",{className:"".concat(B.a.item," ").concat(B.a.active),children:Object(o.jsx)(a.b,{activeClassName:B.a.activeLink,to:S,children:"test"})})]})})};var K=function(){return Object(o.jsx)("div",{children:Object(o.jsxs)(a.a,{children:[Object(o.jsx)(F,{}),Object(o.jsx)(E,{})]})})},A=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,41)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))},q=n(14),z=Object(q.b)({login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e},password:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e},profile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e},register:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e}}),G=Object(q.c)(z),J=G;window.store=G;var R=n(27);r.a.render(Object(o.jsx)(R.a,{store:J,children:Object(o.jsx)(K,{})}),document.getElementById("root")),A()}},[[40,1,2]]]);
//# sourceMappingURL=main.5fe4d241.chunk.js.map
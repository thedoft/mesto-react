(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n(1),i=n.n(o),c=n(6),s=n.n(c),r=(n(15),n(9)),u=n(2),l=n.p+"static/media/logo.a307e1c4.svg";var p=function(){return Object(a.jsx)("header",{className:"header",children:Object(a.jsx)("img",{src:l,className:"header__logo",alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f \u0441\u0435\u0440\u0432\u0438\u0441\u0430"})})},d=i.a.createContext();var f=function(e){var t=e.card,n=i.a.useContext(d),o=t.owner._id===n._id,c="element__trash-button ".concat(o?"":"element__trash-button_hidden"),s=t.likes.some((function(e){return e._id===n._id})),r="element__like-button ".concat(s?"element__like-button_active":"");return Object(a.jsxs)("li",{className:"element",children:[Object(a.jsx)("img",{className:"element__image",alt:t.name,src:t.link,onClick:function(){e.onCardClick(t)}}),Object(a.jsxs)("div",{className:"element__title-container",children:[Object(a.jsx)("h2",{className:"element__title",children:t.name}),Object(a.jsxs)("div",{className:"element__likes-container",children:[Object(a.jsx)("button",{type:"button",className:r,onClick:function(){e.onCardLike(t)}}),Object(a.jsx)("p",{className:"element__likes-count",children:t.likes.length})]})]}),Object(a.jsx)("button",{type:"button",className:c,onClick:function(){e.onCardDelete(t)}})]})};var m=function(e){var t=i.a.useContext(d);return Object(a.jsxs)("main",{className:"content",children:[Object(a.jsxs)("section",{className:"profile",children:[Object(a.jsxs)("div",{className:"profile__avatar-container",children:[Object(a.jsx)("img",{alt:"\u0410\u0432\u0430\u0442\u0430\u0440",className:"profile__avatar",src:t.avatar}),Object(a.jsx)("button",{onClick:e.onEditAvatar,type:"button",className:"profile__edit-button profile__edit-button_type_avatar"})]}),Object(a.jsxs)("div",{className:"profile__info",children:[Object(a.jsxs)("div",{className:"profile__title-container",children:[Object(a.jsx)("h1",{className:"profile__title",children:t.name}),Object(a.jsx)("button",{onClick:e.onEditProfile,type:"button",className:"profile__edit-button profile__edit-button_type_profile"})]}),Object(a.jsx)("p",{className:"profile__subtitle",children:t.about})]}),Object(a.jsx)("button",{onClick:e.onAddCard,type:"button",className:"profile__add-button"})]}),Object(a.jsx)("section",{className:"elements",children:Object(a.jsx)("ul",{className:"elements__list",children:e.cards.map((function(t){return Object(a.jsx)(f,{card:t,onCardClick:e.onCardClick,onCardLike:e.onCardLike,onCardDelete:e.onCardDelete},t._id)}))})})]})};var _=function(){var e=(new Date).getFullYear();return Object(a.jsx)("footer",{className:"footer",children:Object(a.jsxs)("p",{className:"footer__copyright",lang:"en",children:["\xa9 ",e," Mesto Russia"]})})};var h=function(e){var t=i.a.useRef();return Object(a.jsx)("div",{ref:t,onClick:function(){e.onLayout(t.current)},className:"popup popup_type_".concat(e.name," ").concat(e.isOpen?"popup_opened":""),children:Object(a.jsxs)("form",{name:e.name,className:"popup__form",noValidate:!0,onSubmit:e.onSubmit,children:[Object(a.jsx)("h2",{className:"popup__title",children:e.title}),e.children,Object(a.jsx)("button",{type:"submit",className:"popup__submit-button",children:e.isLoading?e.buttonLoadingText:e.buttonText}),Object(a.jsx)("button",{onClick:e.onClose,type:"reset",className:"popup__close-button"})]})})};var j=function(e){var t=i.a.useRef();return i.a.useEffect((function(){return t.current.value="",e.isOpen&&document.addEventListener("keyup",e.onEscape),function(){document.removeEventListener("keyup",e.onEscape)}}),[e]),Object(a.jsx)(h,{onSubmit:function(n){n.preventDefault(),e.onUpdateAvatar({avatar:t.current.value})},onClose:e.onClose,onLayout:e.onLayout,name:"edit-avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",isOpen:e.isOpen,isLoading:e.isLoading,buttonText:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c",buttonLoadingText:"\u041e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435...",children:Object(a.jsxs)("fieldset",{className:"popup__info",children:[Object(a.jsx)("input",{ref:t,name:"avatar-input",type:"url",className:"popup__input popup__input_type_avatar",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0}),Object(a.jsx)("span",{className:"popup__input-error",id:"avatar-input-error"})]})})};var b=function(e){var t=i.a.useContext(d),n=i.a.useState(""),o=Object(u.a)(n,2),c=o[0],s=o[1],r=i.a.useState(""),l=Object(u.a)(r,2),p=l[0],f=l[1];return i.a.useEffect((function(){s(t.name),f(t.about)}),[t,e.isOpen]),i.a.useEffect((function(){return e.isOpen&&document.addEventListener("keyup",e.onEscape),function(){document.removeEventListener("keyup",e.onEscape)}}),[e]),Object(a.jsx)(h,{onSubmit:function(t){t.preventDefault(),e.onUpdateUser({name:c,about:p})},onClose:e.onClose,onLayout:e.onLayout,name:"edit-profile",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u043f\u0440\u043e\u0444\u0438\u043b\u044f",isOpen:e.isOpen,isLoading:e.isLoading,buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",buttonLoadingText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...",children:Object(a.jsxs)("fieldset",{className:"popup__info",children:[Object(a.jsx)("input",{value:c||"",onChange:function(e){s(e.target.value)},name:"name-input",type:"text",className:"popup__input popup__input_type_name",placeholder:"\u0418\u043c\u044f",required:!0,minLength:"2",maxLength:"40"}),Object(a.jsx)("span",{className:"popup__input-error",id:"name-input-error"}),Object(a.jsx)("input",{value:p||"",onChange:function(e){f(e.target.value)},name:"job-input",type:"text",className:"popup__input popup__input_type_job",placeholder:"\u0417\u0430\u043d\u044f\u0442\u0438\u0435",required:!0,minLength:"2",maxLength:"200"}),Object(a.jsx)("span",{className:"popup__input-error",id:"job-input-error"})]})})};var v=function(e){var t=i.a.useState(""),n=Object(u.a)(t,2),o=n[0],c=n[1],s=i.a.useState(""),r=Object(u.a)(s,2),l=r[0],p=r[1];return i.a.useEffect((function(){return c(""),p(""),e.isOpen&&document.addEventListener("keyup",e.onEscape),function(){document.removeEventListener("keyup",e.onEscape)}}),[e]),Object(a.jsx)(h,{onSubmit:function(t){t.preventDefault(),e.onAddCard({name:o,link:l})},onClose:e.onClose,onLayout:e.onLayout,name:"add-card",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",isOpen:e.isOpen,isLoading:e.isLoading,buttonText:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c",buttonLoadingText:"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435...",children:Object(a.jsxs)("fieldset",{className:"popup__info",children:[Object(a.jsx)("input",{value:o||"",onChange:function(e){c(e.target.value)},name:"place-input",type:"text",className:"popup__input popup__input_type_place",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",required:!0,minLength:"1",maxLength:"30"}),Object(a.jsx)("span",{className:"popup__input-error",id:"place-input-error"}),Object(a.jsx)("input",{value:l||"",onChange:function(e){p(e.target.value)},name:"link-input",type:"url",className:"popup__input popup__input_type_link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0}),Object(a.jsx)("span",{className:"popup__input-error",id:"link-input-error"})]})})};var O=function(e){var t=e.card,n=i.a.useRef();return i.a.useEffect((function(){return e.isOpen&&document.addEventListener("keyup",e.onEscape),function(){document.removeEventListener("keyup",e.onEscape)}}),[e]),Object(a.jsx)("div",{ref:n,onClick:function(){e.onLayout(n.current)},className:"popup popup_type_image ".concat(e.isOpen?"popup_opened":""),children:Object(a.jsxs)("div",{className:"popup__container",children:[Object(a.jsx)("img",{className:"popup__image",src:t.link,alt:t.name}),Object(a.jsx)("p",{className:"popup__subtitle",children:t.name}),Object(a.jsx)("button",{onClick:e.onClose,type:"reset",className:"popup__close-button"})]})})};var x=function(e){return i.a.useEffect((function(){return e.isOpen&&document.addEventListener("keyup",e.onEscape),function(){document.removeEventListener("keyup",e.onEscape)}}),[e]),Object(a.jsx)(h,{onSubmit:function(t){t.preventDefault(),e.onConfirm(e.card)},onClose:e.onClose,onLayout:e.onLayout,name:"confirm",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",isOpen:e.isOpen,isLoading:e.isLoading,buttonText:"\u0414\u0430",buttonLoadingText:"\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435..."})},g=n(7),y=n(8),C=new(function(){function e(t){Object(g.a)(this,e),this._url=t.url,this._headers=t.headers}return Object(y.a)(e,[{key:"_handlePromiseRes",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}},{key:"getUserData",value:function(){var e=this;return fetch("".concat(this._url,"/users/me"),{headers:this._headers}).then((function(t){return e._handlePromiseRes(t)}))}},{key:"getInitialCards",value:function(){var e=this;return fetch("".concat(this._url,"/cards"),{headers:this._headers}).then((function(t){return e._handlePromiseRes(t)}))}},{key:"patchUserProfile",value:function(e){var t=this,n=e.name,a=e.about;return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:n,about:a})}).then((function(e){return t._handlePromiseRes(e)}))}},{key:"patchUserAvatar",value:function(e){var t=this,n=e.avatar;return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:n})}).then((function(e){return t._handlePromiseRes(e)}))}},{key:"addNewCard",value:function(e){var t=this,n=e.name,a=e.link;return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:n,link:a})}).then((function(e){return t._handlePromiseRes(e)}))}},{key:"deleteCard",value:function(e){var t=this,n=e._id;return fetch("".concat(this._url,"/cards/").concat(n),{method:"DELETE",headers:this._headers}).then((function(e){return t._handlePromiseRes(e)}))}},{key:"changeLikeCardStatus",value:function(e,t){var n=this,a=e._id;return fetch("".concat(this._url,"/cards/likes/").concat(a),{method:t,headers:this._headers}).then((function(e){return n._handlePromiseRes(e)}))}}]),e}())({url:"https://mesto.nomoreparties.co/v1/cohort-16",headers:{authorization:"9dad3ee9-138f-48bd-8014-b648376a609a","Content-Type":"application/json"}});var k=function(){var e=i.a.useState(!1),t=Object(u.a)(e,2),n=t[0],o=t[1],c=i.a.useState(!1),s=Object(u.a)(c,2),l=s[0],f=s[1],h=i.a.useState(!1),g=Object(u.a)(h,2),y=g[0],k=g[1],L=i.a.useState(!1),N=Object(u.a)(L,2),E=N[0],S=N[1],P=i.a.useState(!1),T=Object(u.a)(P,2),D=T[0],U=T[1],A=i.a.useState(Object(a.jsx)(a.Fragment,{})),R=Object(u.a)(A,2),w=R[0],q=R[1],F=i.a.useState({}),J=Object(u.a)(F,2),I=J[0],H=J[1],M=i.a.useState([]),z=Object(u.a)(M,2),B=z[0],V=z[1],Y=i.a.useState(!1),G=Object(u.a)(Y,2),K=G[0],Q=G[1];function W(e){e.addEventListener("mousedown",(function(e){e.target===e.currentTarget&&Z()}))}function X(e){"Escape"===e.key&&Z()}function Z(){o(!1),f(!1),k(!1),S(!1),U(!1)}return i.a.useEffect((function(){C.getUserData().then((function(e){H(e)})).catch((function(e){console.log(e)}))}),[]),i.a.useEffect((function(){C.getInitialCards().then((function(e){V(e)})).catch((function(e){console.log(e)}))}),[]),Object(a.jsxs)(d.Provider,{value:I,children:[Object(a.jsx)(p,{}),Object(a.jsx)(m,{onEditAvatar:function(){o(!0)},onEditProfile:function(){f(!0)},onAddCard:function(){k(!0)},onCardClick:function(e){S(!0),q(e)},cards:B,onCardLike:function(e){var t=e.likes.some((function(e){return e._id===I._id}));C.changeLikeCardStatus({_id:e._id},t?"DELETE":"PUT").then((function(t){var n=B.map((function(n){return n._id===e._id?t:n}));V(n)})).catch((function(e){console.log(e)}))},onCardDelete:function(e){U(!0),q(e)}}),Object(a.jsx)(_,{}),Object(a.jsx)(O,{isOpen:E,onClose:Z,card:w,onLayout:W,onEscape:X}),Object(a.jsx)(j,{isOpen:n,onClose:Z,onUpdateAvatar:function(e){var t=e.avatar;Q(!0),C.patchUserAvatar({avatar:t}).then((function(e){H(e),Z()})).catch((function(e){console.log(e)})).finally((function(){Q(!1)}))},onLayout:W,onEscape:X,isLoading:K}),Object(a.jsx)(b,{isOpen:l,onClose:Z,onUpdateUser:function(e){var t=e.name,n=e.about;Q(!0),C.patchUserProfile({name:t,about:n}).then((function(e){H(e),Z()})).catch((function(e){console.log(e)})).finally((function(){Q(!1)}))},onLayout:W,onEscape:X,isLoading:K}),Object(a.jsx)(v,{isOpen:y,onClose:Z,onAddCard:function(e){var t=e.name,n=e.link;Q(!0),C.addNewCard({name:t,link:n}).then((function(e){V([e].concat(Object(r.a)(B))),Z()})).catch((function(e){console.log(e)})).finally((function(){Q(!1)}))},onLayout:W,onEscape:X,isLoading:K}),Object(a.jsx)(x,{card:w,onConfirm:function(e){Q(!0),C.deleteCard({_id:e._id}).then((function(){var t=B.filter((function(t){return t._id!==e._id}));V(t),Z()})).catch((function(e){console.log(e)})).finally((function(){Q(!1)}))},isOpen:D,onClose:Z,onLayout:W,onEscape:X,isLoading:K})]})},L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),a(e),o(e),i(e),c(e)}))};s.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(k,{})}),document.querySelector(".page")),L()}},[[16,1,2]]]);
//# sourceMappingURL=main.befc27ad.chunk.js.map
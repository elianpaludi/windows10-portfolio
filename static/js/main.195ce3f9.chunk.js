(this.webpackJsonpwindows10=this.webpackJsonpwindows10||[]).push([[0],{21:function(e,n,c){},22:function(e,n,c){},24:function(e,n,c){},33:function(e,n,c){"use strict";c.r(n);var t=c(0),s=c.n(t),a=c(12),i=c.n(a),r=(c(21),c(16)),o=(c(22),c(1)),d=function(){var e=(new Date).getHours(),n=(new Date).getMinutes(),c=(new Date).getDay(),s=(new Date).getMonth()+1,a=(new Date).getDate();1===c&&(c="Lunes,"),2===c&&(c="Martes,"),3===c&&(c="Miercoles,"),4===c&&(c="Jueves,"),5===c&&(c="Viernes,"),6===c&&(c="Sabado,"),0===c&&(c="Domingo,");var i=Object(t.useState)(""),d=Object(r.a)(i,2),l=d[0],j=d[1],b=document.getElementById("#errorPIN");return console.log(b),"1234"===l&&(window.location.href="http://localhost:3000/windows"),Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("div",{onClick:function(){document.getElementById("backgroundUno").classList.add("animacion-arriba")},id:"backgroundUno",className:"background",children:Object(o.jsxs)("div",{className:"container-block",children:[Object(o.jsxs)("div",{className:"hora",children:[Object(o.jsx)("p",{id:"parrafoHora",children:e}),Object(o.jsx)("p",{children:":"}),Object(o.jsx)("p",{id:"parrafoMinutos",children:n})]}),Object(o.jsxs)("div",{className:"dia",children:[Object(o.jsx)("p",{children:c}),Object(o.jsxs)("p",{children:[s," "]}),Object(o.jsx)("p",{children:a})]})]})}),Object(o.jsx)("div",{className:"backgroundIngreso",children:Object(o.jsxs)("div",{className:"ingreso",children:[Object(o.jsx)("div",{className:"imagenDeUsuario"}),Object(o.jsx)("h2",{children:"Elian Rodriguez"}),Object(o.jsx)("p",{id:"errorPIN",class:"none",children:"1234"}),Object(o.jsxs)("div",{className:"contenedorDeIngreso",children:[Object(o.jsx)("input",{onChange:function(e){return j(e.target.value)},type:"password",id:"inputIngreso",minLength:"4",maxLength:"4",placeholder:"Enter your password"}),Object(o.jsx)("div",{onClick:function(){var e=document.getElementById("helperEsp");document.getElementById("helperEng"),e.classList.toggle("none")},className:"pregunta",children:"?"})]}),Object(o.jsx)("p",{id:"helperEsp",class:"helper none",children:"Intenta con 1234"})]})})]})},l=(c(24),function(){return Object(o.jsxs)("div",{className:"container-windows",children:[Object(o.jsxs)("div",{className:"windows",children:[Object(o.jsx)("div",{className:"carpeta"}),Object(o.jsx)("p",{className:"texto-carpeta",children:"Proyectos"}),Object(o.jsxs)("footer",{children:[Object(o.jsx)("div",{className:"iconowindows"}),Object(o.jsx)("input",{type:"text",placeholder:"Escribe aqui para buscar"})]})]}),Object(o.jsx)("div",{className:"carpeta_expanded-proyectos"})]})}),j=c(13),b=c(2);var h=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsxs)(j.a,{children:[Object(o.jsx)(b.c,{children:Object(o.jsx)(b.a,{exact:!0,path:"/",component:d})}),Object(o.jsx)(b.c,{children:Object(o.jsx)(b.a,{exact:!0,path:"/windows",component:l})})]})})},p=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,34)).then((function(n){var c=n.getCLS,t=n.getFID,s=n.getFCP,a=n.getLCP,i=n.getTTFB;c(e),t(e),s(e),a(e),i(e)}))};i.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(h,{})}),document.getElementById("root")),p()}},[[33,1,2]]]);
//# sourceMappingURL=main.195ce3f9.chunk.js.map
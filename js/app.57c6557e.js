(function(e){function t(t){for(var n,i,r=t[0],l=t[1],s=t[2],d=0,m=[];d<r.length;d++)i=r[d],Object.prototype.hasOwnProperty.call(c,i)&&c[i]&&m.push(c[i][0]),c[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);u&&u(t);while(m.length)m.shift()();return o.push.apply(o,s||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,r=1;r<a.length;r++){var l=a[r];0!==c[l]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=a[0]))}return e}var n={},c={app:0},o=[];function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=n,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/Amveal/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=t,r=r.slice();for(var s=0;s<r.length;s++)t(r[s]);var u=l;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"070d":function(e,t,a){e.exports=a.p+"img/3.ff90a1c9.jpg"},2177:function(e,t,a){},"33a2":function(e,t,a){e.exports=a.p+"img/1.de8d9207.jpg"},"3a87":function(e,t,a){},"42f0":function(e,t,a){},"50b9":function(e,t,a){e.exports=a.p+"img/4.77b2f7c2.jpg"},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("7a23"),c={class:"app"};function o(e,t,a,o,i,r){var l=Object(n["w"])("Navigation"),s=Object(n["w"])("router-view");return Object(n["p"])(),Object(n["d"])("div",c,[Object(n["g"])(l),Object(n["g"])(s)])}var i=a("9b19"),r=a.n(i),l=Object(n["D"])("data-v-9f690e76");Object(n["s"])("data-v-9f690e76");var s=Object(n["g"])("img",{src:r.a,alt:"",srcset:""},null,-1),u=Object(n["g"])("input",{class:"menu-btn",type:"checkbox",id:"menu-btn"},null,-1),d=Object(n["g"])("label",{class:"menu-icon color-change",for:"menu-btn"},[Object(n["g"])("span",{class:"navicon"})],-1),m={class:"menu"};Object(n["q"])();var p=l((function(e,t,a,c,o,i){return Object(n["p"])(),Object(n["d"])("header",{id:"navigation",class:["header",{"scrolled-nav":o.scrolledNav}]},[Object(n["g"])("nav",null,[Object(n["g"])("a",{class:"color-change",onClick:t[1]||(t[1]=function(e){i.scroll("Home")})},[s]),u,d,Object(n["g"])("ul",m,[Object(n["g"])("li",null,[Object(n["g"])("a",{class:"link active color-change",onclick:"event.preventDefault()",onClick:t[2]||(t[2]=function(e){i.scroll("Home")}),href:"#Home"},"Home")]),Object(n["g"])("li",null,[Object(n["g"])("a",{class:"link color-change",onclick:"event.preventDefault()",onClick:t[3]||(t[3]=function(e){i.scroll("Application")}),href:"#Application"},"App")]),Object(n["g"])("li",null,[Object(n["g"])("a",{class:"link color-change",onclick:"event.preventDefault()",onClick:t[4]||(t[4]=function(e){i.scroll("Team")}),href:"#Team"},"Team")]),Object(n["g"])("li",null,[Object(n["g"])("a",{class:"link color-change",onclick:"event.preventDefault()",onClick:t[5]||(t[5]=function(e){i.scroll("Newsletter")}),href:"#Newsletter"},"Newsletter")])])])],2)})),b=(a("159b"),{name:"navigation",data:function(){return{scrolledNav:null}},mounted:function(){document.getElementById("menu-btn").addEventListener("change",this.showMenu),window.addEventListener("scroll",this.updateScroll)},created:function(){this.SECTIONS=document.getElementsByTagName("section")},methods:{scroll:function(e){document.getElementById(e).scrollIntoView(!0),document.getElementById("menu-btn").checked&&document.getElementById("menu-btn").click()},showMenu:function(){if(document.getElementById("menu-btn").checked)document.getElementById("navigation").style.backgroundColor="var(--blue-color)",document.querySelectorAll(".dark").forEach((function(e){e.classList.remove("dark")}));else{document.getElementById("navigation").style.backgroundColor="";var e=window.scrollY;document.getElementById("Team").offsetTop<=e&&document.querySelectorAll(".color-change").forEach((function(e){e.classList.add("dark")}))}},updateScroll:function(){var e=window.scrollY;this.SECTIONS.forEach((function(t){t.offsetTop<=e?(document.querySelectorAll(".active").forEach((function(e){e.classList.remove("active")})),document.querySelectorAll("a[href*="+t.id+"]").forEach((function(e){e.setAttribute("class",e.getAttribute("class")+" active")})),"Team"==t.id?document.getElementById("menu-btn").checked||document.querySelectorAll(".color-change").forEach((function(e){e.classList.add("dark")})):document.querySelectorAll(".color-change").forEach((function(e){e.classList.remove("dark")}))):"Newsletter"==t.id&&t.offsetTop<=e+75&&(document.querySelectorAll(".active").forEach((function(e){e.classList.remove("active")})),document.querySelectorAll("a[href*="+t.id+"]").forEach((function(e){e.setAttribute("class",e.getAttribute("class")+" active")})))})),this.scrolledNav=e>50}}}),f=(a("8351"),a("d959")),v=a.n(f);const g=v()(b,[["render",p],["__scopeId","data-v-9f690e76"]]);var h=g,j={name:"App",components:{Navigation:h},created:function(){var e=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(e,"px")),window.addEventListener("resize",(function(){var e=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(e,"px"))}))}};a("9643"),a("f60d");const O=v()(j,[["render",o]]);var y=O,w=(a("7db0"),a("fb6a"),a("d81d"),a("a630"),a("3ca3"),a("b64b"),a("6c02")),k=a("d0aa"),E=a.n(k),S=a("ee7f"),A=a.n(S),q=Object(n["D"])("data-v-823359ca");Object(n["s"])("data-v-823359ca");var x={class:"home"},N=Object(n["g"])("section",{id:"Home",class:"hero"},[Object(n["g"])("div",{class:" container hero-text"},[Object(n["g"])("h4",null,"Amveal"),Object(n["g"])("hr",{style:{color:"white"}}),Object(n["g"])("h2",null," Make hotel services easily accessible. "),Object(n["g"])("hr")])],-1),T=Object(n["g"])("section",{id:"Application",class:"app"},[Object(n["g"])("div",{class:"left"},[Object(n["g"])("img",{src:E.a,alt:"",srcset:""})]),Object(n["g"])("div",{class:"right"},[Object(n["g"])("h1",null,"GET APP"),Object(n["g"])("h1",{class:"line"},"NOW"),Object(n["g"])("h1",{class:"red"},"SOON"),Object(n["g"])("img",{src:A.a,alt:"",srcset:""})])],-1),I={id:"Team",class:"team"},P=Object(n["g"])("h2",null,"Our Team",-1),C={class:"profile-list"},_={id:"FAQ",style:{"background-color":"var(--blue-color)"}},D={id:"Newsletter",class:"newsletter"};Object(n["q"])();var L=q((function(e,t,a,c,o,i){var r=Object(n["w"])("Profile"),l=Object(n["w"])("FAQ"),s=Object(n["w"])("Newsletter");return Object(n["p"])(),Object(n["d"])("div",x,[N,T,Object(n["g"])("section",I,[P,Object(n["g"])("div",C,[Object(n["g"])(r,{firstname:"Václav",lastname:"Kesler",job:"Front-end developer",imglink:"1.jpg",email:"kesler@amveal.com",lands:["cz","gb","de","pl"]}),Object(n["g"])(r,{firstname:"Sandra",lastname:"Walentynowicz",job:"Graphic designer",imglink:"2.jpg",email:"walentynowicz@amveal.com",lands:["pl","gb"]}),Object(n["g"])(r,{firstname:"Jan",lastname:"Paleček",job:"Bussiness",imglink:"3.jpg",email:"palecek@amveal.com",lands:["cz","gb","pl"]}),Object(n["g"])(r,{firstname:"Jakub",lastname:"Drábek",job:"Back-end developer",imglink:"4.jpg",email:"drabek@amveal.com",lands:["cz","gb"]})])]),Object(n["g"])("section",_,[Object(n["g"])(l)]),Object(n["g"])("section",D,[Object(n["g"])(s)])])})),B=Object(n["D"])("data-v-56e64317");Object(n["s"])("data-v-56e64317");var H={class:"profile-container"},F={class:"transition"},M={class:"translate3d"},z={class:"name"},W=Object(n["g"])("br",null,null,-1),Q={class:"hidden main-color"},J={class:"imgbox"};Object(n["q"])();var Y=B((function(e,t,c,o,i,r){return Object(n["p"])(),Object(n["d"])("div",H,[Object(n["g"])("div",F,[Object(n["g"])("div",M,[Object(n["g"])("img",{src:a("83e3")("./".concat(c.imglink)),alt:"",srcset:"",class:"img"},null,8,["src"])])]),Object(n["g"])("div",z,[Object(n["g"])("h3",null,[Object(n["f"])(Object(n["y"])(c.firstname),1),W,Object(n["f"])(Object(n["y"])(c.lastname),1)]),Object(n["g"])("h5",null,Object(n["y"])(c.job),1)]),Object(n["g"])("div",Q,[Object(n["g"])("div",J,[(Object(n["p"])(!0),Object(n["d"])(n["a"],null,Object(n["v"])(c.lands,(function(e){return Object(n["p"])(),Object(n["d"])("img",{key:e,src:"https://hatscripts.github.io/circle-flags/flags/"+e+".svg",width:"30"},null,8,["src"])})),128))]),Object(n["g"])("p",null,Object(n["y"])(c.email),1)])])})),G={name:"Profile",props:{firstname:String,lastname:String,job:String,imglink:String,lands:Array,email:String}};a("a071");const U=v()(G,[["render",Y],["__scopeId","data-v-56e64317"]]);var V=U,K=Object(n["D"])("data-v-5dd0a243");Object(n["s"])("data-v-5dd0a243");var R={class:"container news"},X=Object(n["g"])("h1",null,"Newsletter",-1),Z=Object(n["g"])("h4",null,"Stay up to date with our latest news.",-1),$={class:"popupWrap"},ee=Object(n["g"])("h5",null,"Your email is safe with us, we don't spam.",-1);Object(n["q"])();var te=K((function(e,t,a,c,o,i){return Object(n["p"])(),Object(n["d"])("div",R,[X,Z,Object(n["g"])("h4",null,[Object(n["g"])("form",null,[Object(n["C"])(Object(n["g"])("input",{class:"textField",type:"email",name:"email","onUpdate:modelValue":t[1]||(t[1]=function(e){return o.email=e}),placeholder:"Your email adress"},null,512),[[n["A"],o.email]]),Object(n["g"])("input",{class:"subscribeButton",type:"button",onClick:t[2]||(t[2]=function(e){return i.createContact()}),value:"Subscribe"})])]),Object(n["g"])("div",$,[Object(n["g"])("h5",null,[Object(n["g"])("span",{class:["popup",{"popup-active":o.popupShow}],id:"emailPopup",onClick:t[3]||(t[3]=function(e){return i.popPopup()})},"Enter valid email!",2)])]),ee])})),ae=a("bc3a"),ne=a.n(ae),ce={name:"newsletter",data:function(){return{popupShow:null,email:""}},methods:{sendData:function(){var e=this,t=new FormData;t.append("email",this.email),ne()({method:"post",url:"api/emails.php",data:t,config:{headers:{"Content-Type":"multipart/form-data"}}}).then((function(t){e.resetForm()})).catch((function(e){console.log(e)}))},validateEmail:function(e){var t=/\S+@\S+\.\S+/;return t.test(e)},popPopup:function(){this.popupShow=!1},createContact:function(){var e=document.getElementById("emailPopup");this.validateEmail(this.email)?(this.sendData(),e.classList.remove("show"),this.popupShow=!1):this.popupShow=!0},resetForm:function(){this.email=""}}};a("f0b9");const oe=v()(ce,[["render",te],["__scopeId","data-v-5dd0a243"]]);var ie=oe,re=Object(n["D"])("data-v-b67517aa");Object(n["s"])("data-v-b67517aa");var le={class:"container faq"},se=Object(n["e"])('<div class="flex" data-v-b67517aa><h1 data-v-b67517aa>FAQ</h1><h5 data-v-b67517aa>Got questions? We&#39;ve got answers.</h5></div><div class="questions" data-v-b67517aa><div class="one" data-v-b67517aa><p class="header" data-v-b67517aa>How does it work?</p><p data-v-b67517aa>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis atque voluptates illo amet exercitationem esse reprehenderit dignissimos laboriosam facilis? Accusantium!</p></div><div class="two" data-v-b67517aa><p class="header" data-v-b67517aa>What is this?</p><p data-v-b67517aa>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam sapiente labore harum dolorum laborum quisquam laboriosam. Reiciendis repellat quam eos.</p></div><div class="three" data-v-b67517aa><p class="header" data-v-b67517aa>Who is this?</p><p data-v-b67517aa>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab saepe consectetur iste sapiente totam laudantium vel in doloremque nesciunt ipsam!</p></div><div class="four" data-v-b67517aa><p class="header" data-v-b67517aa>How is this?</p><p data-v-b67517aa>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa magnam pariatur autem cumque aliquam atque eveniet blanditiis, nulla repellat vel esse, corporis nostrum mollitia.</p></div></div>',2);Object(n["q"])();var ue=re((function(e,t,a,c,o,i){return Object(n["p"])(),Object(n["d"])("div",le,[se])})),de={};a("a74f");const me=v()(de,[["render",ue],["__scopeId","data-v-b67517aa"]]);var pe=me,be={name:"Home",components:{Profile:V,Newsletter:ie,FAQ:pe}};a("6229");const fe=v()(be,[["render",L],["__scopeId","data-v-823359ca"]]);var ve=fe,ge=[{path:"/Amveal",name:"Home",component:ve,meta:{title:"Amveal | Make hotel services easily accessible"}}],he=Object(w["a"])({history:Object(w["b"])(),routes:ge}),je=he;he.beforeEach((function(e,t,a){var n=e.matched.slice().reverse().find((function(e){return e.meta&&e.meta.title})),c=e.matched.slice().reverse().find((function(e){return e.meta&&e.meta.metaTags})),o=t.matched.slice().reverse().find((function(e){return e.meta&&e.meta.metaTags}));if(n?document.title=n.meta.title:o&&(document.title=o.meta.title),Array.from(document.querySelectorAll("[data-vue-router-controlled]")).map((function(e){return e.parentNode.removeChild(e)})),!c)return a();c.meta.metaTags.map((function(e){var t=document.createElement("meta");return Object.keys(e).forEach((function(a){t.setAttribute(a,e[a])})),t.setAttribute("data-vue-router-controlled",""),t})).forEach((function(e){return document.head.appendChild(e)})),a()}));var Oe=a("5502"),ye=Object(Oe["a"])({state:{},mutations:{},actions:{},modules:{}});Object(n["c"])(y).use(ye).use(je).mount("#app")},6229:function(e,t,a){"use strict";a("f3e3")},"78f6":function(e,t,a){},8351:function(e,t,a){"use strict";a("2177")},"83e3":function(e,t,a){var n={"./1.jpg":"33a2","./2.jpg":"f1d9","./3.jpg":"070d","./4.jpg":"50b9"};function c(e){var t=o(e);return a(t)}function o(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}c.keys=function(){return Object.keys(n)},c.resolve=o,e.exports=c,c.id="83e3"},9643:function(e,t,a){"use strict";a("b926")},"9b19":function(e,t,a){e.exports=a.p+"img/logo.6ba5aa99.svg"},a071:function(e,t,a){"use strict";a("42f0")},a74f:function(e,t,a){"use strict";a("78f6")},b926:function(e,t,a){},c506:function(e,t,a){},d0aa:function(e,t,a){e.exports=a.p+"img/iphony.c6e7be8c.png"},ee7f:function(e,t,a){e.exports=a.p+"img/buttons.577ff0e4.png"},f0b9:function(e,t,a){"use strict";a("3a87")},f1d9:function(e,t,a){e.exports=a.p+"img/2.a0510e7c.jpg"},f3e3:function(e,t,a){},f60d:function(e,t,a){"use strict";a("c506")}});
//# sourceMappingURL=app.57c6557e.js.map
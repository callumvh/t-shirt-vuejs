(function(e){function t(t){for(var n,i,s=t[0],l=t[1],c=t[2],h=0,f=[];h<s.length;h++)i=s[h],a[i]&&f.push(a[i][0]),a[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);u&&u(t);while(f.length)f.shift()();return o.push.apply(o,c||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,s=1;s<r.length;s++){var l=r[s];0!==a[l]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},a={app:0},o=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var u=l;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"34d7":function(e,t,r){e.exports=r.p+"img/new_back.eb5cc436.png"},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("097d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("div",{attrs:{id:"nav"}},[r("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v("|\n    "),r("router-link",{attrs:{to:"/about"}},[e._v("About")]),e._v("|\n    "),r("router-link",{attrs:{to:"/cal"}},[e._v("Cal")])],1),r("router-view")],1)},o=[],i=(r("7faf"),r("2877")),s={},l=Object(i["a"])(s,a,o,!1,null,null,null);l.options.__file="App.vue";var c=l.exports,u=r("8c4f"),h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("img",{attrs:{alt:"Vue logo",src:r("cf05")}}),n("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},f=[],g=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"hello"},[r("h1",[e._v(e._s(e.msg))]),e._m(0),r("h3",[e._v("Installed CLI Plugins")]),e._m(1),r("h3",[e._v("Essential Links")]),e._m(2),r("h3",[e._v("Ecosystem")]),e._m(3)])},d=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("\n    For a guide and recipes on how to configure / customize this project,"),r("br"),e._v("\n    check out the\n    "),r("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-cli documentation")]),e._v(".\n  ")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[e._v("babel")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa",target:"_blank",rel:"noopener"}},[e._v("pwa")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",target:"_blank",rel:"noopener"}},[e._v("eslint")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Core Docs")])]),r("li",[r("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Forum")])]),r("li",[r("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Community Chat")])]),r("li",[r("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[e._v("Twitter")])]),r("li",[r("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("News")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-router")])]),r("li",[r("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[e._v("vue-devtools")])]),r("li",[r("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-loader")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[e._v("awesome-vue")])])])}],p={name:"HelloWorld",props:{msg:String}},v=p,m=(r("b81a"),Object(i["a"])(v,g,d,!1,null,"76436cce",null));m.options.__file="HelloWorld.vue";var _=m.exports,b={name:"home",components:{HelloWorld:_}},w=b,k=Object(i["a"])(w,h,f,!1,null,null,null);k.options.__file="Home.vue";var S=k.exports,j=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("input",{attrs:{type:"button",value:"hide coffee"},on:{click:function(t){e.trueOrFalse_coffee=!1}}}),r("input",{attrs:{type:"button",value:"front to back"},on:{click:function(t){e.swapShirts()}}}),r("v-stage",{ref:"stage",attrs:{config:e.stageSize},on:{mousedown:e.handleStageMouseDown,touchstart:e.handleStageTouchStart}},[r("v-layer",{ref:"layer"},[r("v-image",{attrs:{listening:!1,preventDefault:!0,config:{image:e.shirt_image,name:"shirt",visible:e.shirt_image_bool},draggable:!1}}),r("v-image",{attrs:{listening:!1,preventDefault:!1,config:{image:e.back_of_shirt,name:"back_of_shirt",visible:e.back_of_shirt_bool},draggable:!1}}),r("v-image",{attrs:{scale:{x:.8,y:.8},config:{image:e.eggs_image,name:"eggs"},draggable:!0}}),r("v-image",{attrs:{scale:{x:.1,y:.1},config:{image:e.coffee_image,name:"coffee",visible:e.trueOrFalse_coffee},draggable:!0}}),e._l(e.rectangles,function(e){return r("v-rect",{key:e.id,attrs:{visible:!1,config:e}})}),r("v-transformer",{ref:"transformer",attrs:{anchorSize:20,anchorFill:"white",anchorStroke:"purple",rotationSnaps:[0,45,90,135,180,225,270,315],enabledAnchors:["top-left","top-right","bottom-left","bottom-right"]}})],2)],1)],1)},y=[],x=(r("7f7f"),r("7e5d")),O=r.n(x),T=r("34d7"),N=r.n(T),E=window.innerWidth,P=window.innerHeight,C={created:function(){var e=this,t=new window.Image;t.src="https://www.cronj.com/blog/wp-content/uploads/2015/12/HTTPS-Secure-Padlock.png",t.onload=function(){e.eggs_image=t};var r=new window.Image;r.src="https://www.pngpix.com/wp-content/uploads/2016/10/Coffee-Beans-PNG-Transparent-Image.png",r.onload=function(){e.coffee_image=r},window.addEventListener("resize",this.handleWindowResize),this.handleWindowResize()},data:function(){return{trueOrFalse_coffee:!0,window:{width:0,height:0},stageSize:{width:E-10,height:P},shirt_image:null,back_of_shirt:null,eggs_image:null,coffee_image:null,shirt_image_bool:!0,back_of_shirt_bool:!1,rectangles:[{x:150,y:150,width:100,height:100,fill:"red",name:"rect1",draggable:!0,visible:!1},{x:150,y:150,width:100,height:100,fill:"green",name:"rect2",draggable:!1}],selectedShapeName:"",selectedImgName:"yod",counter:0}},methods:{swapShirts:function(){console.log(this.shirt_image_bool),1==this.shirt_image_bool?(this.shirt_image_bool=!1,this.back_of_shirt_bool=!0):(this.shirt_image_bool=!0,this.back_of_shirt_bool=!1)},handleWindowResize:function(){var e=this,t=window.innerWidth,r=window.innerHeight,n=new window.Image;this.stageSize.width=t-10,this.stageSize.height=r,n.src=O.a,n.onload=function(){e.shirt_image=n;var a=t/n.width,o=r/n.height;a>o&&(n.width=o*n.width-10,n.height=o*n.height),a<o&&(n.width=a*n.width-10,n.height=a*n.height)};var a=new window.Image;a.src=N.a,a.onload=function(){e.back_of_shirt=a;var n=t/a.width,o=r/a.height;n>o&&(a.width=o*a.width-10,a.height=o*a.height),n<o&&(a.width=n*a.width-10,a.height=n*a.height)}},handleStageMouseDown:function(e){if(e.target===e.target.getStage())return this.selectedShapeName="",this.selectedImgName="",void this.updateTransformer();var t="Transformer"===e.target.getParent().className;if(!t){var r=e.target.name(),n=e.target;this.selectedShapeName=n?r:"",this.updateTransformer()}},handleStageTouchStart:function(e){if(e.target===e.target.getStage())return this.selectedShapeName="",void this.updateTransformer();var t="Transformer"===e.target.getParent().className;if(!t){var r=e.target.name(),n=e.target;this.selectedShapeName=n?r:"",this.updateTransformer()}},updateTransformer:function(){var e=this.$refs.transformer.getStage(),t=e.getStage(),r=this.selectedShapeName,n=t.findOne("."+r);n!==e.node()&&(n?e.attachTo(n):e.detach(),e.getLayer().batchDraw())}}},z=C,W=Object(i["a"])(z,j,y,!1,null,null,null);W.options.__file="CalComponent.vue";var $=W.exports,H=r("7f16"),I=r.n(H),F=r("6f79"),A=r.n(F);n["default"].use(u["a"]),n["default"].use(I.a),n["default"].use(A.a);var D=new u["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:S},{path:"/cal",name:"cal",component:$}]}),M=r("2f62");n["default"].use(M["a"]);var L=new M["a"].Store({state:{},mutations:{},actions:{}}),R=r("9483");Object(R["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),n["default"].config.productionTip=!1,new n["default"]({router:D,store:L,render:function(e){return e(c)}}).$mount("#app")},"7e5d":function(e,t,r){e.exports=r.p+"img/new_front.2359e740.png"},"7faf":function(e,t,r){"use strict";var n=r("8fba"),a=r.n(n);a.a},"8fba":function(e,t,r){},b81a:function(e,t,r){"use strict";var n=r("bfc9"),a=r.n(n);a.a},bfc9:function(e,t,r){},cf05:function(e,t,r){e.exports=r.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.126e03ed.js.map
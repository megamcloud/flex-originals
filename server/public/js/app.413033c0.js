(function(t){function e(e){for(var o,r,s=e[0],c=e[1],u=e[2],l=0,f=[];l<s.length;l++)r=s[l],i[r]&&f.push(i[r][0]),i[r]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);d&&d(e);while(f.length)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,r=1;r<n.length;r++){var c=n[r];0!==i[c]&&(o=!1)}o&&(a.splice(e--,1),t=s(s.s=n[0]))}return t}var o={},i={app:0},a=[];function r(t){return s.p+"js/"+({pdfjsWorker:"pdfjsWorker"}[t]||t)+"."+{"chunk-0e620896":"198e54e2","chunk-2d0b9f47":"0611ee24","chunk-2d0be70b":"69eacf9c","chunk-2d0d6921":"91767161","chunk-2d0d7fc5":"7f3a72d6","chunk-2d208bfd":"ba6878ca","chunk-2d21a3d2":"d4b555ba",pdfjsWorker:"f60b6050"}[t]+".js"}function s(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n=i[t];if(0!==n)if(n)e.push(n[2]);else{var o=new Promise(function(e,o){n=i[t]=[e,o]});e.push(n[2]=o);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=r(t),a=function(e){c.onerror=c.onload=null,clearTimeout(u);var n=i[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src,r=new Error("Loading chunk "+t+" failed.\n("+o+": "+a+")");r.type=o,r.request=a,n[1](r)}i[t]=void 0}};var u=setTimeout(function(){a({type:"timeout",target:c})},12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(e)},s.m=t,s.c=o,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(n,o,function(e){return t[e]}.bind(null,o));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var d=u;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"07a4":function(t,e,n){"use strict";var o={};n.r(o),n.d(o,"getContents",function(){return m}),n.d(o,"update",function(){return p}),n.d(o,"upload",function(){return g}),n.d(o,"login",function(){return _}),n.d(o,"log",function(){return v}),n.d(o,"settings",function(){return b}),n.d(o,"deleteFile",function(){return w}),n.d(o,"createDirectory",function(){return E}),n.d(o,"rename",function(){return x}),n.d(o,"signup",function(){return S}),n.d(o,"download",function(){return y});var i,a=n("2b0e"),r=n("2f62"),s={contents:[],loadLimit:30,settings:{dropbox:{},google:{}},selectedItems:[],uploadItems:[],view:"grid",uploadItemsMenu:[],diskLoaded:[],selectedDirectory:"my-drive",showConfirmDeleteModal:!1,showCreateFolderModal:!1,showUploadMenu:!1,showPreviewModal:!1,showShareModal:!1,showRenameModal:!1,showSettings:!1,showMenu:{state:!1,x:0,y:0},showToolModal:!1,showInfoBar:!1,showsnackbar:{state:!1,data:"",color:"default",time:6e3},previewItem:null,modelBackdrop:!1,isLoading:!1,isUploading:!1,isMobile:!1,token:"",selectAllFile:!1,selectAll:!1,selectAllFolder:!1,isUserLoggedIn:!1,search:""},c=n("94d5"),u=(n("7f7f"),n("20d6"),n("795b")),l=n.n(u),d=n("646f"),f=n("9fb0"),h=n("21a6"),m=function(t,e){return new l.a(function(n,o){t.commit(f["x"],!0);var i=e.path||t.state.selectedDirectory,a=e.limit||t.state.loadLimit;d["a"].axios().get("/api/getFiles/".concat(i,"/").concat(a),{retry:3,retryDelay:1e3}).then(function(e){t.state.selectedDirectory=i,t.commit(f["q"],e.data.contents),t.commit(f["x"],!1),n(e)}).catch(function(t){d["a"]._handleError(t),o(t)})})},p=function(t,e){var n=e.path||t.state.selectedDirectory,o=e.limit||t.state.loadLimit,i=!0===t.state.isUploading?"subscribe":"eventCacheUpdate";d["a"].axios().get("/api/getFiles/".concat(n,"/").concat(o,"/update/nocache/").concat(i),{retry:3,retryDelay:1e3}).then(function(e){t.commit(f["q"],e.data.contents),t.commit(f["x"],!1)}).catch(function(t){d["a"]._handleError(t)})},g=function(t,e){var n=t.state.uploadItemsMenu.findIndex(function(t){return t.id==e.id&&"file"==t.type});return new l.a(function(o,i){d["a"].axios().post("/api/upload/".concat(e.uploadPath),e.formData,{retry:3,retryDelay:1e3,onUploadProgress:function(e){-1!==n&&(t.state.uploadItemsMenu[n].uploadPercent=Math.round(100*e.loaded/e.total))}}).then(function(t){setInterval(function(){o(t)},1e3)}).catch(function(t){d["a"]._handleError(t),i(t)})})},_=function(t,e){return new l.a(function(t,n){d["a"].axios().post("/user/login",e).then(function(e){t(e)}).catch(function(t){n(t)})})},v=function(t,e){d["a"].axios().post("api/log",e).then(function(){}).catch(function(t){d["a"]._handleError(t)})},b=function(t,e){return new l.a(function(n,o){d["a"].axios().post("/user/settings",e).then(function(e){t.commit(f["B"],e),n(e)}).catch(function(t){d["a"]._handleError(t),o(t)})})},w=function(t,e){var n=e;return new l.a(function(e,o){d["a"].axios().delete("/api/delete/"+n.path).then(function(n){t.state.showConfirmDeleteModal=!1,e(n)}).catch(function(t){d["a"]._handleError(t),o(t)})})},E=function(t,e){t.commit(f["x"],!0);var n=t.state.selectedDirectory;d["a"].axios().put("/api/createDirectory/".concat(n),e).then(function(e){var n={data:e.data.message,color:"success"};t.state.showCreateFolderModal=!1,t.commit(f["K"],n),t.dispatch("update",{path:t.state.selectedDirectory})}).catch(function(t){d["a"]._handleError(t)}),t.commit(f["x"],!1)},x=function(t,e){t.commit(f["x"],!0),d["a"].axios().put("/api/rename/".concat(e.path),e).then(function(e){var n={data:e.data.message,color:"success"};t.state.showRenameModal=!1,t.commit(f["K"],n),t.dispatch("update",{path:t.state.selectedDirectory})}).catch(function(t){d["a"]._handleError(t)}),t.commit(f["x"],!1)},S=function(t,e){return new l.a(function(n,o){d["a"].axios().post("/user/signup",e).then(function(e){var o={data:e.data.message,color:"success"};t.commit(f["K"],o),n(e)}).catch(function(t){o(t),d["a"]._handleError(t)})})},y=function(t,e){var n={data:"Preparing download.",color:"default",time:0};if(t.commit(f["K"],n),1==e.length)d["a"].axios().get(e[0].filePath,{responseType:"blob"}).then(function(n){h["saveAs"](new Blob([n.data]),e[0].name),t.commit(f["m"])}).catch(function(t){d["a"]._handleError(t)});else{var o=t.state.selectedDirectory;d["a"].axios().post("/api/batch/".concat(o),{files:e},{responseType:"blob"}).then(function(e){h["saveAs"](new Blob([e.data]),"Media_Drive_"+new Date+".zip"),t.commit(f["m"])}).catch(function(t){d["a"]._handleError(t)})}},C=n("bd86"),O=["xs","sm","md","lg","xl"],I=(i={},Object(C["a"])(i,f["w"],function(t,e){t.selectedDirectory=e}),Object(C["a"])(i,f["B"],function(t,e){t.settings=e.data.settings}),Object(C["a"])(i,f["q"],function(t,e){t.contents=e,t.isContentsLoaded=!0}),Object(C["a"])(i,f["s"],function(t,e){t.contents.push(e)}),Object(C["a"])(i,f["O"],function(t,e){}),Object(C["a"])(i,f["b"],function(t,e){}),Object(C["a"])(i,f["t"],function(t,e){}),Object(C["a"])(i,f["d"],function(t,e){var n=e;"file"===n.type&&t.files.splice(t.files.findIndex(function(t){return t.path===n.path}),1),"dir"===n.type&&t.directories.splice(t.directories.findIndex(function(t){return t.path===n.path}),1)}),Object(C["a"])(i,f["u"],function(t,e){t.selectedItems.push(e)}),Object(C["a"])(i,f["v"],function(t,e){t.selectedItems=e}),Object(C["a"])(i,f["N"],function(t,e){var n=e;t.selectedItems.splice(t.selectedItems.findIndex(function(t){return t.id===n.id}),1)}),Object(C["a"])(i,f["M"],function(t,e){t.selectAllFile=!1,t.selectAllFolder=!1,e?t.selectedItems.splice(t.selectedItems.findIndex(function(t){return t.type===e.type})):t.selectedItems=[]}),Object(C["a"])(i,f["D"],function(t){t.modelBackdrop=!0,t.showCreateFolderModal=!0}),Object(C["a"])(i,f["f"],function(t){t.modelBackdrop=!1,t.showCreateFolderModal=!1}),Object(C["a"])(i,f["L"],function(t){t.showToolModal=!0}),Object(C["a"])(i,f["n"],function(t){t.showToolModal=!1}),Object(C["a"])(i,f["F"],function(t,e){var n=e.event||window.event;n.preventDefault(),t.showMenu.x=n.clientX,t.showMenu.y=n.clientY}),Object(C["a"])(i,f["h"],function(t){t.showMenu.state=!1}),Object(C["a"])(i,f["E"],function(t){t.showInfoBar=!0}),Object(C["a"])(i,f["g"],function(t){t.showInfoBar=!1}),Object(C["a"])(i,f["a"],function(t,e){t.view=e}),Object(C["a"])(i,f["r"],function(t,e){t.previewItem=e}),Object(C["a"])(i,f["G"],function(t){t.modelBackdrop=!0,t.showPreviewModal=!0}),Object(C["a"])(i,f["i"],function(t){t.modelBackdrop=!1,t.showPreviewModal=!1}),Object(C["a"])(i,f["x"],function(t,e){t.isLoading=e}),Object(C["a"])(i,f["z"],function(t,e){t.isUploading=e}),Object(C["a"])(i,f["p"],function(t,e){t.isMobile=e}),Object(C["a"])(i,f["y"],function(t,e){t.loadMoreProgress=e.value,t.loadingValue=e.per}),Object(C["a"])(i,f["H"],function(t){t.modelBackdrop=!0,t.showRenameModal=!0}),Object(C["a"])(i,f["j"],function(t){t.showRenameModal=!1,t.modelBackdrop=!1}),Object(C["a"])(i,f["I"],function(t){t.showSettings=!0}),Object(C["a"])(i,f["k"],function(t){t.showSettings=!1}),Object(C["a"])(i,f["K"],function(t,e){t.showsnackbar.state=!0,t.showsnackbar.data=e.data,e.color&&(t.showsnackbar.color=e.color),0==e.time&&(t.showsnackbar.time=e.time)}),Object(C["a"])(i,f["m"],function(t){t.showsnackbar.state=!1}),Object(C["a"])(i,f["J"],function(t){t.showShareModal=!0}),Object(C["a"])(i,f["l"],function(t){t.showShareModal=!1}),Object(C["a"])(i,f["o"],function(t){var e=O.indexOf(t.gridSize);e>=0&&e<O.length-1&&(t.gridSize=O[++e])}),Object(C["a"])(i,f["c"],function(t){var e=O.indexOf(t.gridSize);e>0&&e<O.length&&(t.gridSize=O[--e])}),Object(C["a"])(i,f["A"],function(t,e){t.search=e}),Object(C["a"])(i,f["C"],function(t){t.modelBackdrop=!0,t.showConfirmDeleteModal=!0}),Object(C["a"])(i,f["e"],function(t){t.modelBackdrop=!1,t.showConfirmDeleteModal=!1}),i),k=n("0e44"),D={key:"mediamanager",paths:["selectedDirectory","showInfoBar","view","token","isUserLoggedIn","settings"],storage:window.sessionStorage};a["a"].use(r["a"]);e["a"]=new r["a"].Store({state:s,getters:c,actions:o,mutations:I,plugins:[Object(k["a"])(D)],strict:!1})},1:function(t,e){},2:function(t,e){},"265b":function(t,e,n){},3:function(t,e){},4:function(t,e){},"41cb":function(t,e,n){"use strict";n("7f7f");var o=n("2b0e"),i=n("8c4f"),a=[{path:"/",name:"home",component:function(){return n.e("chunk-2d21a3d2").then(n.bind(null,"bb51"))}},{path:"/drive/u/:adapter/:path/:dir?",name:"my-drive",component:function(){return n.e("chunk-0e620896").then(n.bind(null,"115c"))},meta:{requiresAuth:!0}},{path:"/login",name:"login",component:function(){return n.e("chunk-2d21a3d2").then(n.bind(null,"bb51"))},meta:{requiresAuth:!0}},{path:"/auth",name:"auth",component:function(){return n.e("chunk-2d0be70b").then(n.bind(null,"2fef"))}},{path:"/signup",name:"signup",component:function(){return n.e("chunk-2d0b9f47").then(n.bind(null,"34c3"))},meta:{requiresAuth:!0}},{path:"/test",name:"test",component:function(){return n.e("chunk-2d0d7fc5").then(n.bind(null,"78c1"))}},{path:"/drive/open",name:"open",component:function(){return n.e("chunk-2d0d6921").then(n.bind(null,"72b2"))}},{path:"/PageNotFound",name:"NotFound",component:function(){return n.e("chunk-2d208bfd").then(n.bind(null,"a5b5"))}},{path:"*",name:"PageNotFound",component:function(){return n.e("chunk-2d208bfd").then(n.bind(null,"a5b5"))}}],r=n("646f");o["a"].use(i["a"]);var s=new i["a"]({mode:"history",routes:a});s.beforeEach(function(t,e,n){if(t.matched.some(function(t){return t.meta.requiresAuth})){var o=r["a"].auth.loggedIn();o?"login"==t.name||"signup"==t.name?n({path:"/"}):n():"login"!=t.name&&"signup"!=t.name?n({path:"/login",query:{redirect:t.fullPath}}):n()}else n()});e["a"]=s},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var o=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("router-view"),n("media-alert"),n("lazy-model")],1)},a=[],r=n("2877"),s={},c=Object(r["a"])(s,i,a,!1,null,null,null),u=c.exports,l=n("d225"),d=n("b0b4"),f=function(){function t(){Object(l["a"])(this,t),this.vue=new o["a"]}return Object(d["a"])(t,[{key:"fire",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.vue.$emit(t,e)}},{key:"listen",value:function(t,e){this.vue.$on(t,e)}}]),t}(),h=n("41cb"),m=n("07a4"),p=n("9483");Object(p["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var g=n("0284"),_=n.n(g),v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:(t.snackbarState?"active":"")+" notification "+t.snackbarColor},[n("div",{staticClass:"text"},[t._v("\n    "+t._s(t.text())+"\n    "),n("a",{staticClass:"ripple rect",attrs:{href:"#cookies"}},[t._v("learn more")])]),n("div",{staticClass:"notification_close ripple",on:{click:function(e){return t.close()}}},[n("i",{staticClass:"fa fa-close"})])])},b=[],w=n("9fb0"),E={name:"lazy-alert",data:function(){return{}},computed:{snackbarState:{get:function(){return this.$store.state.showsnackbar.state},set:function(){setTimeout(function(){this.$store.commit(w["m"])}.bind(this),1e3)}},snackbarColor:function(){return this.$store.state.showsnackbar.color||"default"},timeout:function(){return this.$store.state.showsnackbar.time}},methods:{close:function(){this.$store.commit(w["m"])},text:function(){return this.$store.state.showsnackbar.data}}},x=E,S=Object(r["a"])(x,v,b,!1,null,null,null),y=S.exports,C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{ref:"contextMenu",staticClass:"context__menu"},[n("li",{staticClass:"context__menu-item",on:{click:function(e){return e.preventDefault(),t.open()}}},[t._m(0)]),t._m(1),n("li",{staticClass:"context__menu-separator"}),t._m(2),t._m(3),n("li",{staticClass:"context__menu-separator"}),t._m(4),t._m(5),t._m(6)])},O=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"context__menu-btn"},[n("i",{staticClass:"fa fa-folder-open"}),n("span",{staticClass:"context__menu-text"},[t._v("Open")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"context__menu-item context__menu-item-disabled"},[n("button",{staticClass:"context__menu-btn",attrs:{type:"button"}},[n("span",{staticClass:"context__menu-text"},[t._v("Open in New Window")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"context__menu-item"},[n("button",{staticClass:"context__menu-btn",attrs:{type:"button"}},[n("i",{staticClass:"fa fa-reply"}),n("span",{staticClass:"context__menu-text"},[t._v("Reply")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"context__menu-item"},[n("button",{staticClass:"context__menu-btn",attrs:{type:"button"}},[n("i",{staticClass:"fa fa-star"}),n("span",{staticClass:"context__menu-text"},[t._v("Favorite")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"context__menu-item"},[n("button",{staticClass:"context__menu-btn",attrs:{type:"button"}},[n("i",{staticClass:"fa fa-download"}),n("span",{staticClass:"context__menu-text"},[t._v("Save")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"context__menu-item"},[n("button",{staticClass:"context__menu-btn",attrs:{type:"button"}},[n("i",{staticClass:"fa fa-edit"}),n("span",{staticClass:"context__menu-text"},[t._v("Rename")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"context__menu-item"},[n("button",{staticClass:"context__menu-btn",attrs:{type:"button"}},[n("i",{staticClass:"fa fa-trash"}),n("span",{staticClass:"context__menu-text"},[t._v("Delete")])])])}],I={name:"lazy-contextmenu",data:function(){return{}},methods:{onContextMenu:function(t){t.preventDefault();var e=this.$refs.contextMenu;e.style.left=t.pageX+"px",e.style.top=t.pageY+"px",e.classList.add("context__menu-show")},hideContextMenu:function(t){t.preventDefault();var e=this.$refs.contextMenu;e.classList.remove("context__menu-show")},delete:function(t){this.showConfirmDeleteModal(),console.log(t)},getShareableLink:function(t){console.log(t)},changeColor:function(t){console.log(t)},download:function(){var t=this.$store.state.selectedItems;this.$store.dispatch("download",t)},getShareableLike:function(t){console.log(t)},viewDetails:function(t){this.$store.commit(w["E"]),console.log(t)},stars:function(t){console.log(t)},open:function(){console.log("open");var t=this.$store.state.selectedItems[0];try{var e=t.path;"my-drive"!=e?this.$router.push({path:"/drive/u/0/folder/".concat(e)}):this.$router.push({path:"/drive/u/0/my-drive"})}catch(n){console.log(n)}},showConfirmDeleteModal:function(){this.$store.commit(w["C"])},rename:function(){this.$store.commit(w["H"])},share:function(){console.log("share")},fire:function(t,e){this.$store.commit(w["h"]),this[t](e)}},created:function(){document.addEventListener("mousedown",this.hideContextMenu,!1),document.addEventListener("contextmenu",this.onContextMenu,!1)},destroyed:function(){document.removeEventListener("mousedown",this.hideContextMenu,!1),document.removeEventListener("contextmenu",this.onContextMenu,!1)}},k=I,D=Object(r["a"])(k,C,O,!1,null,null,null),A=D.exports,M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"lazy_switch"},[n("label",{staticClass:"switch",attrs:{for:"toggle"+t.sid}},[n("input",{attrs:{type:"checkbox",id:"toggle"+t.sid},domProps:{value:t.value},on:{input:function(e){return t.updateValue(e)}}}),n("span",{staticClass:"slider"})])])},T=[],j={name:"lazy-switch",data:function(){return{}},props:["sid","value"],methods:{updateValue:function(t){console.log(t)}}},L=j,P=Object(r["a"])(L,M,T,!1,null,null,null),R=P.exports,U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"media-model"},[n("lazy-preview-model")],1)},$=[],N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isActive?n("div",{staticClass:"modal media-preview-modal"},[n("lazy-switch",{attrs:{sid:1},model:{value:t.val,callback:function(e){t.val=e},expression:"val"}}),n("lazy-switch",{attrs:{sid:2}}),t.val?n("p",[t._v("ANurag")]):t._e()],1):t._e()},F=[],B=(n("20d6"),n("7f7f"),n("858e")),z={name:"media-create-folder",data:function(){return{val:!0,files:[],numPages:void 0,videoExt:["mp4","ogv","avi","webm"],audioExt:["mp3"],fileExt:["txt","js","css","php","vue","go","html","c","cpp","c++","sql","java","shell"]}},components:{},watch:{isActive:function(t){var e=this;document.querySelector("html").classList.toggle("app--modal--opened",t),"pdf"==this.item.extension&&this.pdfsrc.then(function(t){e.numPages=t.numPages})}},computed:{pdfsrc:function(){return B["a"].createLoadingTask(this.item.filePath)},item:function(){return this.$store.state.previewItem},isActive:function(){return this.$store.state.showPreviewModal},video:function(){return-1!=this.videoExt.indexOf(this.item.extension.toLowerCase())},fileText:function(){return-1!=this.fileExt.indexOf(this.item.extension.toLowerCase())},audio:function(){return-1!=this.audioExt.indexOf(this.item.extension.toLowerCase())},audioFile:function(){return this.item.filePath}},methods:{hidePreviewModal:function(){this.$store.commit(w["i"])},download:function(){var t=[];t.push(this.item),this.$store.dispatch("download",t)},getName:function(){return this.item.name.length>=20&&this.$store.state.isMobile?this.item.name.substring(0,20)+"..":this.item.name},print:function(){this.$refs.myPdfComponent[0].print()},current:function(){var t=this;return"pdf"==this.item.extension&&this.pdfsrc.then(function(e){t.numPages=e.numPages}),this.files=this.$store.state.contents.filter(function(t){return"dir"!=t.type}),this.files.findIndex(function(e){if(e.id===t.item.id)return!0})},next:function(){var t=this.current();t<this.files.length-1?this.$store.state.previewItem=this.files[t+1]:this.$store.state.previewItem=this.files[t]},prev:function(){var t=this.current();t>0&&(this.$store.state.previewItem=this.files[t-1])},keyup:function(t){t.preventDefault(),this.$store.state.showPreviewModal&&(27==t.keyCode?this.hidePreviewModal():39==t.keyCode?this.next():37==t.keyCode&&this.prev())}},created:function(){window.addEventListener("keyup",this.keyup)},destroyed:function(){window.removeEventListener("keyup",this.keyup)}},H=z,q=Object(r["a"])(H,N,F,!1,null,null,null),W=q.exports,G={name:"media-model",components:{"lazy-preview-model":W},computed:{isActivePreview:function(){return this.$store.state.showPreviewModal}}},V=G,K=Object(r["a"])(V,U,$,!1,null,null,null),X=K.exports;n("265b");o["a"].use(_.a,{id:"UA-131081167-1",router:h["a"]}),o["a"].component("media-alert",y),o["a"].component("lazy-model",X),o["a"].component("lazy-context",A),o["a"].component("lazy-switch",R),window.LazyDrive=window.LazyDrive||{},window.LazyDrive.Event=new f,o["a"].config.productionTip=!1,new o["a"]({router:h["a"],store:m["a"],render:function(t){return t(u)}}).$mount("#app")},"646f":function(t,e,n){"use strict";var o={};n.r(o),n.d(o,"cookies",function(){return p}),n.d(o,"local",function(){return g}),n.d(o,"session",function(){return _});var i=n("795b"),a=n.n(i),r=(n("6b54"),n("a481"),n("d225")),s=n("b0b4"),c=n("bc3a"),u=n.n(c),l=n("07a4"),d=n("41cb"),f=n("9fb0"),h=n("cebc"),m=(n("4917"),n("28a5"),n("3b2b"),n("17fb"));window.localStorage||(window.localStorage={getItem:function(t){return t&&this.hasOwnProperty(t)?unescape(document.cookie.replace(new RegExp("(?:^|.*;\\s*)"+escape(t).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*((?:[^;](?!;))*[^;]?).*"),"$1")):null},key:function(t){return unescape(document.cookie.replace(/\s*\=(?:.(?!;))*$/,"").split(/\s*\=(?:[^;](?!;))*[^;]?;\s*/)[t])},setItem:function(t,e){t&&(document.cookie=escape(t)+"="+escape(e)+"; expires=Tue, 19 Jan 2038 03:14:07 GMT; path=/",this.length=document.cookie.match(/\=/g).length)},length:0,removeItem:function(t){t&&this.hasOwnProperty(t)&&(document.cookie=escape(t)+"=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/",this.length--)},hasOwnProperty:function(t){return new RegExp("(?:^|;\\s*)"+escape(t).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=").test(document.cookie)}},window.localStorage.length=(document.cookie.match(/\=/g)||window.localStorage).length);var p={getAll:function(){var t={};return m(document.cookie.split(";")).chain().map(function(t){return t.replace(/^\s+/,"").replace(/\s+$/,"")}).each(function(e){var n=e.split("="),o=n[0],i=null,a=m.size(n);a>1&&(i=n.slice(1).join("")),t[o]=i}),t},get:function(t){var e=null,n=this.getAll();return m.each(n,function(n,o){o===t&&(e=n)}),e},set:function(t,e,n){var o=new Date,i="undefined"==typeof n?864e5:1e3*n,a=new Date(o.getTime()+i),r=m.map({name:escape(e),expires:a.toGMTString(),path:"/"},function(e,n){return["name"==n?t:n,e].join("=")}).join(";");return document.cookie=r,this},destroy:function(t){return""==this.get(t)&&null==this.get(t)||this.set(t,null,-1e6),this}},g={getAll:function(){var t=Object(h["a"])({},localStorage);return t},get:function(t){var e=null;return e=localStorage.getItem(t),e},set:function(t,e){return localStorage.setItem(t,e),this},destroy:function(t){return""==this.get(t)&&null==this.get(t)||localStorage.removeItem(t),this}},_={getAll:function(){var t=Object(h["a"])({},sessionStorage);return t},get:function(t){var e=null;return e=sessionStorage.getItem(t),e},set:function(t,e){return sessionStorage.setItem(t,e),this},destroy:function(t){return""==this.get(t)&&null==this.get(t)||sessionStorage.removeItem(t),this},destroyAll:function(){sessionStorage.clear()}},v={loggedIn:function(){return""!==p.get("email")&&null!==p.get("email")&&""!==p.get("token")&&null!==p.get("token")},logout:function(){return p.destroy("email"),p.destroy("token"),!0}},b=(n("7f7f"),n("0032")),w=n.n(b),E=n("2e94"),x=n.n(E),S=function(){function t(e,n,o){Object(r["a"])(this,t),this.ACCESS_TOKEN=e,this.REDIRECT_PORT=n,this.CLIENT_ID=o||"w3mmmph398qrnx9",this.UPLOAD_FILE_SIZE_LIMIT=157286400,this.dbx=new w.a.Dropbox({accessToken:this.ACCESS_TOKEN,fetch:x.a})}return Object(s["a"])(t,[{key:"auth",value:function(){var t=this,e=new w.a.Dropbox({clientId:this.CLIENT_ID,fetch:x.a}),n=e.getAuthenticationUrl("http://localhost:".concat(this.REDIRECT_PORT,"/auth")),o=window.open(n,"targetWindow","toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=600,height=500");return new a.a(function(e){var n=setInterval(function(){o.closed&&(clearInterval(n),e())}.bind(t),500)})}},{key:"deleteFile",value:function(t){var e=this;return new a.a(function(n,o){e.dbx.filesDelete({path:t}).then(function(t){n(t)}).catch(function(t){o(t)})})}},{key:"filesGetThumbnail",value:function(t){var e=this;return new a.a(function(n,o){e.dbx.filesGetThumbnail({path:t}).then(function(t){n(t)}).catch(function(t){o(t)})})}},{key:"fetchFile",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return new a.a(function(n,o){t.dbx.filesListFolder({path:e}).then(function(t){n(t)}).catch(function(t){o(t)})})}},{key:"downloadFile",value:function(t){return this.dbx.sharingGetSharedLinkFile({url:t}).then(function(t){var e=URL.createObjectURL(t.fileBlob),n=document.createElement("a");n.setAttribute("href",e),n.setAttribute("download",t.name),n.setAttribute("class","button"),n.innerText="Download: "+t.name,document.getElementById("results").appendChild(n)}).catch(function(t){console.error(t)}),!1}},{key:"uploadFile",value:function(t){var e=this,n=t.files[0];if(n.size<this.UPLOAD_FILE_SIZE_LIMIT)return new a.a(function(t,o){e.dbx.filesUpload({path:"/"+n.name,contents:n}).then(function(e){t(e)}).catch(function(t){o(t)})});var o=8e6,i=[],r=0;while(r<n.size){var s=Math.min(o,n.size-r);i.push(n.slice(r,r+s)),r+=s}var c=i.reduce(function(t,e,i,a){return 0==i?t.then(function(){return this.dbx.filesUploadSessionStart({close:!1,contents:e}).then(function(t){return t.session_id})}):i<a.length-1?t.then(function(t){var n={session_id:t,offset:i*o};return this.dbx.filesUploadSessionAppendV2({cursor:n,close:!1,contents:e}).then(function(){return t})}):t.then(function(t){var o={session_id:t,offset:n.size-e.size},i={path:"/"+n.name,mode:"add",autorename:!0,mute:!1};return this.dbx.filesUploadSessionFinish({cursor:o,commit:i,contents:e})})},a.a.resolve());return new a.a(function(t,e){c.then(function(e){t(e)}).catch(function(t){e(t)})})}}]),t}();function y(t){return new a.a(function(e){var n=document.createElement("script");n.src=t,n.onreadystatechange=n.onload=function(){var t=setInterval(function(){n.readyState&&!/loaded|complete/.test(n.readyState)||(clearInterval(t),e())},100)},document.getElementsByTagName("head")[0].appendChild(n)})}var C=y("https://apis.google.com/js/api.js"),O=n("f499"),I=n.n(O),k=function(){function t(){Object(r["a"])(this,t),this.authenticated=this.isAuthenticated(),this.authInstance=null,this.login=this.login.bind(this),this.refreshToken=this.refreshToken.bind(this),this.setSession=this.setSession.bind(this),this.logout=this.logout.bind(this),this.isAuthenticated=this.isAuthenticated.bind(this),this.isSignedIn=this.isSignedIn.bind(this)}return Object(s["a"])(t,[{key:"_expiresAt",value:function(t){return I()(1e3*t.expires_in+(new Date).getTime())}},{key:"_setStorage",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;localStorage.setItem("gapi.access_token",t.access_token),localStorage.setItem("gapi.id_token",t.id_token),localStorage.setItem("gapi.expires_at",this._expiresAt(t)),e&&(localStorage.setItem("gapi.id",e.getId()),localStorage.setItem("gapi.full_name",e.getName()),localStorage.setItem("gapi.first_name",e.getGivenName()),localStorage.setItem("gapi.last_name",e.getFamilyName()),localStorage.setItem("gapi.image_url",e.getImageUrl()),localStorage.setItem("gapi.email",e.getEmail()))}},{key:"_clearStorage",value:function(){localStorage.removeItem("gapi.access_token"),localStorage.removeItem("gapi.id_token"),localStorage.removeItem("gapi.expires_at"),localStorage.removeItem("gapi.id"),localStorage.removeItem("gapi.full_name"),localStorage.removeItem("gapi.first_name"),localStorage.removeItem("gapi.last_name"),localStorage.removeItem("gapi.image_url"),localStorage.removeItem("gapi.email")}},{key:"login",value:function(){if(!this.authInstance)throw new Error("gapi not initialized");return this.authInstance.signIn().then(this.setSession)}},{key:"refreshToken",value:function(){var t=this;if(!this.authInstance)throw new Error("gapi not initialized");var e=this.authInstance.currentUser.get();e.reloadAuthResponse().then(function(e){t._setStorage(e)})}},{key:"logout",value:function(){if(!this.authInstance)throw new Error("gapi not initialized");this.authInstance.signOut(function(t){return console.log(t)}),this._clearStorage(),this.authenticated=!1}},{key:"setSession",value:function(t){var e=this.authInstance.currentUser.get().getBasicProfile(),n=t.Zi;this._setStorage(n,e),this.authenticated=!0}},{key:"isAuthenticated",value:function(){var t=JSON.parse(localStorage.getItem("gapi.expires_at"));return(new Date).getTime()<t}},{key:"isSignedIn",value:function(){var t=this.authInstance.currentUser.get();return t.isSignedIn.get()}},{key:"getUserData",value:function(){return{firstName:localStorage.getItem("gapi.first_name"),lastName:localStorage.getItem("gapi.last_name"),email:localStorage.getItem("gapi.email")}}}]),t}(),D=new k,A=D.login,M=D.logout,T=D.isAuthenticated,j=D.getUserData,L=D.refreshToken,P=D.isSignedIn,R={install:function(t,e){t.gapiLoadClientPromise=null;var n=function(n){C.then(function(o){var i=window.gapi;i?i.auth?n(i):i.load("client:auth2",function(){t.gapiLoadClientPromise=i.client.init(e).then(function(){console.info("gapi client initialised."),D.authInstance=i.auth2.getAuthInstance(),n(i)}).catch(function(t){if(t.error){var e=t.error;console.error("Failed to initialize gapi: %s (status=%s, code=%s)",e.message,e.status,e.code,t)}})}):console.error("Failed to load gapi!")})};t.prototype.$getGapiClient=function(){return new a.a(function(e,o){t.gapiLoadClientPromise&&0===t.gapiLoadClientPromise.status?e(t.gapiLoadClientPromise):n(e,o)})},t.prototype.$login=function(){return t.prototype.$getGapiClient().then(A)},t.prototype.$refreshToken=function(){return t.prototype.$getGapiClient().then(L)},t.prototype.$logout=function(){return t.prototype.$getGapiClient().then(M)},t.prototype.$isAuthenticated=T,t.prototype.$isSignedIn=P,t.prototype.$getUserData=j}};function U(t,e){t.use(R,e)}"undefined"!==typeof window&&window.Vue&&window.Vue.use(U);var $=U,N=function t(){Object(r["a"])(this,t),this.BASE_URL="http://172.16.187.238",this.proxyPort=Object({NODE_ENV:"production",VUE_APP_SECRET:"C_MW5rCdAz36_3QCXFUECqwjl4qqFTKp113T8bHg",VUE_APP_DEBUG:"true",BASE_URL:"/"}).PORT?Object({NODE_ENV:"production",VUE_APP_SECRET:"C_MW5rCdAz36_3QCXFUECqwjl4qqFTKp113T8bHg",VUE_APP_DEBUG:"true",BASE_URL:"/"}).PORT:3344,this.redirectPort=Object({NODE_ENV:"production",VUE_APP_SECRET:"C_MW5rCdAz36_3QCXFUECqwjl4qqFTKp113T8bHg",VUE_APP_DEBUG:"true",BASE_URL:"/"}).PORT?Object({NODE_ENV:"production",VUE_APP_SECRET:"C_MW5rCdAz36_3QCXFUECqwjl4qqFTKp113T8bHg",VUE_APP_DEBUG:"true",BASE_URL:"/"}).PORT:3344,this.settings={dropbox:{},google:{}}},F=new N,B=function t(){Object(r["a"])(this,t);var e=l["a"].state.settings.dropbox.accessToken;this.dropbox=new S(e,F.redirectPort),this.google=$},z=new B,H=n("04e1"),q=function(){function t(){Object(r["a"])(this,t),this.token=p.get("token"),this.userData=this.getTokenData()}return Object(s["a"])(t,[{key:"getTokenData",value:function(){try{return H(this.token)}catch(Error){return null}}}]),t}(),W=new q;n.d(e,"a",function(){return V});var G=function(){function t(){Object(r["a"])(this,t),this.mediastorage=o,this.auth=v,this.user=W,this.config=F,this.service=z}return Object(s["a"])(t,[{key:"getUidV4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var e=16*Math.random()|0,n="x"==t?e:3&e|8;return n.toString(16)})}},{key:"debounce",value:function(t,e,n){var o;return function(){var i=this,a=arguments,r=function(){o=null,n||t.apply(i,a)},s=n&&!o;clearTimeout(o),o=setTimeout(r,e),s&&t.apply(i,a)}}},{key:"time_ago",value:function(t){var e=new Date,n=6e4,o=60*n,i=24*o,a=30*i,r=365*i,s=e-t;return s<n?Math.round(s/1e3)+" seconds ago":s<o?Math.round(s/n)+" minutes ago":s<i?Math.round(s/o)+" hours ago":s<a?Math.round(s/i)+" days ago":s<r?Math.round(s/a)+" months ago":Math.round(s/r)+" years ago"}},{key:"axios",value:function(){return u.a.defaults.headers.common["Authorization"]="Bearer ".concat(this.mediastorage.cookies.get("token")),u.a.defaults.headers.common["X-Requested-With"]="XMLHttpRequest",u.a.defaults.headers.common["csrfToken"]="C_MW5rCdAz36_3QCXFUECqwjl4qqFTKp113T8bHg",u.a.interceptors.response.use(void 0,function(t){var e=t.config;if(!e||!e.retry)return a.a.reject(t);if(e.__retryCount=e.__retryCount||0,e.__retryCount>=e.retry)return a.a.reject(t);e.__retryCount+=1;var n=new a.a(function(t){setTimeout(function(){t()},e.retryDelay||1)});return n.then(function(){return u()(e)})}),u.a}},{key:"_handleError",value:function(t){var e={data:t.response.data.message,color:"error"};switch(t.response.status){case 409:l["a"].commit(f["K"],e);break;case 404:l["a"].state.errorState=!0,e.data="Something went wrong.",l["a"].commit(f["K"],e);break;case 401:this.auth.logout(),d["a"].push("/"),l["a"].commit(f["K"],e);break;case 403:l["a"].commit(f["K"],e);break;case 500:e.data="Server Internal Error.",l["a"].commit(f["K"],e);break;default:l["a"].commit(f["K"],e)}throw t}}]),t}(),V=new G},"94d5":function(t,e){},"9fb0":function(t,e,n){"use strict";n.d(e,"x",function(){return o}),n.d(e,"z",function(){return i}),n.d(e,"y",function(){return a}),n.d(e,"w",function(){return r}),n.d(e,"u",function(){return s}),n.d(e,"v",function(){return c}),n.d(e,"N",function(){return u}),n.d(e,"M",function(){return l}),n.d(e,"o",function(){return d}),n.d(e,"c",function(){return f}),n.d(e,"q",function(){return h}),n.d(e,"s",function(){return m}),n.d(e,"r",function(){return p}),n.d(e,"b",function(){return g}),n.d(e,"O",function(){return _}),n.d(e,"D",function(){return v}),n.d(e,"f",function(){return b}),n.d(e,"C",function(){return w}),n.d(e,"e",function(){return E}),n.d(e,"F",function(){return x}),n.d(e,"h",function(){return S}),n.d(e,"L",function(){return y}),n.d(e,"n",function(){return C}),n.d(e,"E",function(){return O}),n.d(e,"g",function(){return I}),n.d(e,"K",function(){return k}),n.d(e,"m",function(){return D}),n.d(e,"I",function(){return A}),n.d(e,"k",function(){return M}),n.d(e,"d",function(){return T}),n.d(e,"B",function(){return j}),n.d(e,"p",function(){return L}),n.d(e,"a",function(){return P}),n.d(e,"G",function(){return R}),n.d(e,"i",function(){return U}),n.d(e,"H",function(){return $}),n.d(e,"j",function(){return N}),n.d(e,"t",function(){return F}),n.d(e,"J",function(){return B}),n.d(e,"l",function(){return z}),n.d(e,"A",function(){return H});var o="SET_IS_LOADING",i="SET_IS_UPLOADING",a="SET_IS_LOADING_MORE",r="SELECT_DIRECTORY",s="SELECT_BROWSER_ITEM",c="SELECT_BROWSER_ITEMS",u="UNSELECT_BROWSER_ITEM",l="UNSELECT_ALL_BROWSER_ITEMS",d="INCREASE_GRID_SIZE",f="DECREASE_GRID_SIZE",h="LOAD_CONTENTS_SUCCESS",m="LOAD_MORE_CONTENTS_SUCCESS",p="LOAD_FULL_CONTENTS_SUCCESS",g="CREATE_DIRECTORY_SUCCESS",_="UPLOAD_SUCCESS",v="SHOW_CREATE_FOLDER_MODAL",b="HIDE_CREATE_FOLDER_MODAL",w="SHOW_CONFIRM_DELETE_MODAL",E="HIDE_CONFIRM_DELETE_MODAL",x="SHOW_MENU",S="HIDE_MENU",y="SHOW_TOOL_MODAL",C="HIDE_TOOL_MODAL",O="SHOW_INFOBAR",I="HIDE_INFOBAR",k="SHOW_SNACKBAR",D="HIDE_SNACKBAR",A="SHOW_SETTINGS",M="HIDE_SETTINGS",T="DELETE_SUCCESS",j="SET_SETTINGS",L="IS_MOBILE",P="CHANGE_VIEW",R="SHOW_PREVIEW_MODAL",U="HIDE_PREVIEW_MODAL",$="SHOW_RENAME_MODAL",N="HIDE_RENAME_MODAL",F="RENAME_SUCCESS",B="SHOW_SHARE_MODAL",z="HIDE_SHARE_MODAL",H="SET_SEARCH_QUERY"}});
//# sourceMappingURL=app.413033c0.js.map
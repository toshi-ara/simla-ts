(()=>{"use strict";var t={14:(t,e,n)=>{n.d(e,{Z:()=>A});var a=n(537),i=n.n(a),g=n(645),l=n.n(g),s=n(667),I=n.n(s),o=new URL(n(916),n.b),r=l()(i()),c=I()(o);r.push([t.id,"@media screen and (orientation: landscape){\n    div.forPortrait {\n        display: none;\n    }\n    div.forLandscape {\n        display: flex;\n    }\n}\n\n@media screen and (orientation: portrait){\n    div.forLandscape {\n        display: none;\n    }\n    div.forPortrait {\n        font-size: 60px;\n        color: #00008B;\n        margin: 200px 20px;\n    }\n}\n\nhtml {\n    text-align: center;\n    font-family: sans-serif;\n    background: mintcream;\n}\n\n#left {\n    margin-left: auto;\n}\n#right {\n    margin-right: auto;\n}\n\n#lang {\n    font-size: 21px;\n    padding: 5px;\n    margin-top: 10px;\n}\n#lang > label {\n    display: block;\n    padding: 5px;\n}\n\n#buttons {\n    padding: 5px;\n}\n#buttons > label {\n    display: block;\n}\n\n#timer {\n    font-family: monospace;\n    font-size: 60px;\n    margin: 10px;\n}\n\n#slider {\n    margin-top: 10px;\n    width: 300px;\n}\n\n#canvas {\n    background-image: url("+c+");\n    background-repeat: no-repeat;\n    background-size:contain;\n    width: 481px;\n    height: 268px;\n    margin-top: 20px;\n    margin-left: 20px;\n    margin-right: 20px;\n}\n\n#response {\n    font-size: 48px;\n}\n\n#version {\n    margin-top: 10px;\n    color: gray;\n}\n\n\nbutton {\n    width: 250px;\n    height: 40px;\n    font-size: 20px;\n    border-radius: 10px;\n    border: 2px #808080 solid;\n    cursor: pointer;\n    margin: 3px;\n}\n#start {\n    height: 60px;\n    background-color: cyan;\n}\n\n","",{version:3,sources:["webpack://./css/style.css"],names:[],mappings:"AAAA;IACI;QACI,aAAa;IACjB;IACA;QACI,aAAa;IACjB;AACJ;;AAEA;IACI;QACI,aAAa;IACjB;IACA;QACI,eAAe;QACf,cAAc;QACd,kBAAkB;IACtB;AACJ;;AAEA;IACI,kBAAkB;IAClB,uBAAuB;IACvB,qBAAqB;AACzB;;AAEA;IACI,iBAAiB;AACrB;AACA;IACI,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,YAAY;IACZ,gBAAgB;AACpB;AACA;IACI,cAAc;IACd,YAAY;AAChB;;AAEA;IACI,YAAY;AAChB;AACA;IACI,cAAc;AAClB;;AAEA;IACI,sBAAsB;IACtB,eAAe;IACf,YAAY;AAChB;;AAEA;IACI,gBAAgB;IAChB,YAAY;AAChB;;AAEA;IACI,yDAA0C;IAC1C,4BAA4B;IAC5B,uBAAuB;IACvB,YAAY;IACZ,aAAa;IACb,gBAAgB;IAChB,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,gBAAgB;IAChB,WAAW;AACf;;;AAGA;IACI,YAAY;IACZ,YAAY;IACZ,eAAe;IACf,mBAAmB;IACnB,yBAAyB;IACzB,eAAe;IACf,WAAW;AACf;AACA;IACI,YAAY;IACZ,sBAAsB;AAC1B",sourcesContent:["@media screen and (orientation: landscape){\n    div.forPortrait {\n        display: none;\n    }\n    div.forLandscape {\n        display: flex;\n    }\n}\n\n@media screen and (orientation: portrait){\n    div.forLandscape {\n        display: none;\n    }\n    div.forPortrait {\n        font-size: 60px;\n        color: #00008B;\n        margin: 200px 20px;\n    }\n}\n\nhtml {\n    text-align: center;\n    font-family: sans-serif;\n    background: mintcream;\n}\n\n#left {\n    margin-left: auto;\n}\n#right {\n    margin-right: auto;\n}\n\n#lang {\n    font-size: 21px;\n    padding: 5px;\n    margin-top: 10px;\n}\n#lang > label {\n    display: block;\n    padding: 5px;\n}\n\n#buttons {\n    padding: 5px;\n}\n#buttons > label {\n    display: block;\n}\n\n#timer {\n    font-family: monospace;\n    font-size: 60px;\n    margin: 10px;\n}\n\n#slider {\n    margin-top: 10px;\n    width: 300px;\n}\n\n#canvas {\n    background-image: url(../fig/fig_back.svg);\n    background-repeat: no-repeat;\n    background-size:contain;\n    width: 481px;\n    height: 268px;\n    margin-top: 20px;\n    margin-left: 20px;\n    margin-right: 20px;\n}\n\n#response {\n    font-size: 48px;\n}\n\n#version {\n    margin-top: 10px;\n    color: gray;\n}\n\n\nbutton {\n    width: 250px;\n    height: 40px;\n    font-size: 20px;\n    border-radius: 10px;\n    border: 2px #808080 solid;\n    cursor: pointer;\n    margin: 3px;\n}\n#start {\n    height: 60px;\n    background-color: cyan;\n}\n\n"],sourceRoot:""}]);const A=r},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",a=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),a&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),a&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,a,i,g){"string"==typeof t&&(t=[[null,t,void 0]]);var l={};if(a)for(var s=0;s<this.length;s++){var I=this[s][0];null!=I&&(l[I]=!0)}for(var o=0;o<t.length;o++){var r=[].concat(t[o]);a&&l[r[0]]||(void 0!==g&&(void 0===r[5]||(r[1]="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {").concat(r[1],"}")),r[5]=g),n&&(r[2]?(r[1]="@media ".concat(r[2]," {").concat(r[1],"}"),r[2]=n):r[2]=n),i&&(r[4]?(r[1]="@supports (".concat(r[4],") {").concat(r[1],"}"),r[4]=i):r[4]="".concat(i)),e.push(r))}},e}},667:t=>{t.exports=function(t,e){return e||(e={}),t?(t=String(t.__esModule?t.default:t),/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]|(%20)/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t):t}},537:t=>{t.exports=function(t){var e=t[1],n=t[3];if(!n)return e;if("function"==typeof btoa){var a=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),i="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),g="/*# ".concat(i," */"),l=n.sources.map((function(t){return"/*# sourceURL=".concat(n.sourceRoot||"").concat(t," */")}));return[e].concat(l).concat([g]).join("\n")}return[e].join("\n")}},370:(t,e,n)=>{n.r(e),n.d(e,{default:()=>p});var a=n(379),i=n.n(a),g=n(795),l=n.n(g),s=n(569),I=n.n(s),o=n(565),r=n.n(o),c=n(216),A=n.n(c),d=n(589),C=n.n(d),m=n(14),u={};u.styleTagTransform=C(),u.setAttributes=r(),u.insert=I().bind(null,"head"),u.domAPI=l(),u.insertStyleElement=A(),i()(m.Z,u);const p=m.Z&&m.Z.locals?m.Z.locals:void 0},379:t=>{var e=[];function n(t){for(var n=-1,a=0;a<e.length;a++)if(e[a].identifier===t){n=a;break}return n}function a(t,a){for(var g={},l=[],s=0;s<t.length;s++){var I=t[s],o=a.base?I[0]+a.base:I[0],r=g[o]||0,c="".concat(o," ").concat(r);g[o]=r+1;var A=n(c),d={css:I[1],media:I[2],sourceMap:I[3],supports:I[4],layer:I[5]};if(-1!==A)e[A].references++,e[A].updater(d);else{var C=i(d,a);a.byIndex=s,e.splice(s,0,{identifier:c,updater:C,references:1})}l.push(c)}return l}function i(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,i){var g=a(t=t||[],i=i||{});return function(t){t=t||[];for(var l=0;l<g.length;l++){var s=n(g[l]);e[s].references--}for(var I=a(t,i),o=0;o<g.length;o++){var r=n(g[o]);0===e[r].references&&(e[r].updater(),e.splice(r,1))}g=I}}},569:t=>{var e={};t.exports=function(t,n){var a=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var a="";n.supports&&(a+="@supports (".concat(n.supports,") {")),n.media&&(a+="@media ".concat(n.media," {"));var i=void 0!==n.layer;i&&(a+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),a+=n.css,i&&(a+="}"),n.media&&(a+="}"),n.supports&&(a+="}");var g=n.sourceMap;g&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(g))))," */")),e.styleTagTransform(a,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},12:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0});class n{}e.default=n,n.MU0=[[75,8],[67,5],[43,6],[30,10]],n.LOG_SIGMA0=[[2.2,.4],[2.4,.4],[2.4,.4],[2.5,.5]],n.ADR=.7,n.MU0_adj=0,n.D_MU0=[0,4],n.CENTERS=[[218,100],[289,100],[360,100],[218,150],[289,150],[360,150]],n.Rnormal=20,n.RnormalCenter=3,n.Rrespond=18,n.RrespondCenter=2,n.ProbThreshold=.05,n.storageNameSpeed="SimLaSpeed",n.storageNameLang="SimLaLang"},347:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.default=class{static drawCircle(t,e,n,a,i){t.beginPath(),t.arc(e[0],e[1],n,0,2*Math.PI,!0),t.strokeStyle=i,t.lineWidth=2,t.stroke(),t.closePath(),t.beginPath(),t.arc(e[0],e[1],a,0,2*Math.PI,!1),t.fillStyle=i,t.fill(),t.closePath()}static fillRect(t,e,n){const a=1.3*n;t.fillStyle="#f4d7d7",t.fillRect(e[0]-a,e[1]-a,2*a,2*a)}}},419:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0});class n{}e.default=n,n.start=["開始","Start"],n.restart=["再開","Restart"],n.pause=["一時停止","Pause"],n.newexp=["新規実験","New Exp."],n.quit=["終了","Quit"],n.with_response=["反応あり","Respond"],n.without_response=["反応なし","Not Respond"],n.speed=["倍速","x speed"],n.msg_newexp=["新規実験を行いますか?","Do you want to start a new experiment?"],n.msg_quit=["終了しますか?","Do you want to quit?"],n.msg_close=["ブラウザあるいはこのタブを閉じて下さい","Please close the browser or this tab"]},331:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.default=class{static inv_logit(t){return 1/(1+Math.exp(-t))}static inv_logit_upper(t){return 1/(1+Math.exp(t))}static phi_approx(t){return this.inv_logit(.07056*Math.pow(t,3)+1.5976*t)}static phi_approx_upper(t){return this.inv_logit_upper(.07056*Math.pow(t,3)+1.5976*t)}static random_norm(t=0,e=1){let n=Math.random(),a=Math.random();return t+Math.sqrt(-2*Math.log(n))*Math.cos(2*Math.PI*a)*e}}},314:function(t,e,n){var a=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const i=a(n(12)),g=a(n(331));e.default=class{constructor(){this.param=[[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],this.storageName="SimLaParam";const t=this.getStorage();Object.keys(t).length>0?this.param=t.param:this.setInitParameter()}setInitParameter(){const t=i.default.MU0_adj+g.default.random_norm(i.default.D_MU0[0],i.default.D_MU0[1]);for(let e=1;e<5;e++)this.param[e][0]=g.default.random_norm(i.default.MU0[e-1][0]+t,i.default.MU0[e-1][1]),this.param[e][1]=Math.exp(g.default.random_norm(i.default.LOG_SIGMA0[e-1][0],i.default.LOG_SIGMA0[e-1][1]));this.param[5][0]=this.param[2][0],this.param[5][1]=this.param[2][1],this.param[5][2]=i.default.ADR,this.setStorage()}get getParameter(){return this.param}setStorage(){localStorage.setItem(this.storageName,JSON.stringify({param:this.param}))}getStorage(){const t=localStorage.getItem(this.storageName);return t?JSON.parse(t):{}}clearStorage(){localStorage.removeItem(this.storageName)}}},158:function(t,e,n){var a=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const i=a(n(12)),g=a(n(419)),l=a(n(314)),s=a(n(347)),I=a(n(250)),o=a(n(331));e.default=class{constructor(){this.time=new I.default,this.param=new l.default,this.elem_newexp=document.getElementById("newexp"),this.elem_start=document.getElementById("start"),this.elem_quit=document.getElementById("quit"),this.elem_speed_msg=document.getElementById("speed_msg"),this.elem_timer=document.getElementById("timer"),this.elem_response=document.getElementById("response"),this.elem_lang=document.getElementById("lang"),this.elem_slider=document.getElementById("slider"),this.elem_canvas=document.getElementById("canvas");const t=this.elem_canvas.getContext("2d"),e=new Image;t.drawImage(e,0,0,481,268),i.default.CENTERS.forEach((function(e){s.default.drawCircle(t,e,i.default.Rnormal,i.default.RnormalCenter,"black")}));const n=void 0===window.ontouchstart?"mousedown":"touchstart";this.elem_newexp.addEventListener(n,(()=>{this.clickNewExp()}),!1),this.elem_start.addEventListener(n,(()=>{this.clickStart()}),!1),this.elem_quit.addEventListener(n,(()=>{this.clickQuit()}),!1),this.elem_lang.addEventListener("change",(()=>{this.toggleLang()}),!1),this.elem_slider.addEventListener("input",(()=>{this.sliderChanged()}),!1),this.elem_canvas.addEventListener(n,(e=>{this.clickCanvas(this.elem_canvas,t,e)}),!1),this.elem_slider.value=this.getStorageSpeed(),this.lang=this.getStorageLang(),this.elem_lang.la[this.lang].checked=!0,this.setLang(),this.toggleButton(),this.elem_timer.textContent="0:00:00"}start(){this.displayTimer()}clickCanvas(t,e,n){if(!this.time.isRunning)return;const a=this.getClickedPosition(t,n),l=this.getCircleNumber(a,i.default.CENTERS,i.default.Rnormal);l<0||(this.getResponse(l,this.time.getMinute,this.param.getParameter)?(s.default.fillRect(e,i.default.CENTERS[l],i.default.Rrespond),s.default.drawCircle(e,i.default.CENTERS[l],i.default.Rrespond,i.default.RrespondCenter,"red"),this.elem_response.textContent=g.default.with_response[this.lang],this.elem_response.style.color="red",setTimeout((()=>{s.default.fillRect(e,i.default.CENTERS[l],i.default.Rrespond),s.default.drawCircle(e,i.default.CENTERS[l],i.default.Rnormal,i.default.RnormalCenter,"black"),this.elem_response.textContent=""}),300)):(this.elem_response.textContent=g.default.without_response[this.lang],this.elem_response.style.color="black",setTimeout((()=>{this.elem_response.textContent=""}),300)))}toggleLang(){this.lang=this.elem_lang.la.value,this.setLang(),this.setStorageLang()}setLang(){let t;t=this.time.isRunning?g.default.pause:0==this.time.getTotalTime?g.default.start:g.default.restart,this.elem_start.textContent=t[this.lang],this.elem_newexp.textContent=g.default.newexp[this.lang],this.elem_quit.textContent=g.default.quit[this.lang],this.toggleButton(),this.printSpeed(this.elem_slider.value)}clickNewExp(){this.time.isRunning||window.confirm(g.default.msg_newexp[this.lang])&&(this.time.clickNewExp(),this.param.setInitParameter(),this.elem_slider.value="1",this.setStorageSpeed(),this.setLang())}clickStart(){this.param=new l.default,this.time.clickStart(),this.setLang(),this.toggleButton(),this.setStorageSpeed()}clickQuit(){this.time.isRunning||window.confirm(g.default.msg_quit[this.lang])&&(window.alert(g.default.msg_close[this.lang]),this.elem_start.textContent=g.default.start[this.lang],this.time.clickQuit(),this.param.clearStorage(),this.clearStorage())}toggleButton(){this.time.isRunning?(this.elem_start.style.background="springgreen",this.elem_newexp.style.color="gray",this.elem_quit.style.color="gray"):(this.elem_start.style.background="cyan",this.elem_newexp.style.color="black",this.elem_quit.style.color="black")}sliderChanged(){this.printSpeed(this.elem_slider.value),this.time.sliderChanged(),this.setStorageSpeed()}printSpeed(t){this.elem_speed_msg.textContent=t+g.default.speed[this.lang]}getClickedPosition(t,e){let n;n=(t=>"touchstart"===t.type)(e)?e.touches[0]||e.changedTouches[0]:e;const a=e.target.getBoundingClientRect(),i=n.clientX-a.left-0,g=n.clientY-a.top-0,l=t.clientWidth/t.width,s=t.clientHeight/t.height;return[Math.floor(i/l),Math.floor(g/s)]}isInCircle(t,e,n){return Math.pow(t[0]-e[0],2)+Math.pow(t[1]-e[1],2)<=Math.pow(n,2)}getCircleNumber(t,e,n){let a=-1;for(let i=0;i<e.length;i++)this.isInCircle(t,e[i],n)&&(a=i);return a}getProbability(t,e){let n=100-(1-e[2])*t;return o.default.phi_approx_upper((n-e[0])/e[1])}getResponse(t,e,n){let a;if(0==t)a=.99;else if(a=this.getProbability(e,n[t]),a<i.default.ProbThreshold)return!1;return Math.random()<=a}displayTimer(){this.elem_timer.textContent=this.time.getTimeStr(Number(this.elem_slider.value)),requestAnimationFrame((()=>{this.displayTimer()}))}setStorageSpeed(){localStorage.setItem(i.default.storageNameSpeed,String(this.elem_slider.value))}getStorageSpeed(){return localStorage.getItem(i.default.storageNameSpeed)||"1"}setStorageLang(){localStorage.setItem(i.default.storageNameLang,String(this.lang))}getStorageLang(){const t=localStorage.getItem(i.default.storageNameLang);return t?Number(t):0}clearStorage(){localStorage.removeItem(i.default.storageNameSpeed),localStorage.removeItem(i.default.storageNameLang)}}},250:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.default=class{constructor(){this._isRunning=!1,this._start=Date.now(),this._elapsed=0,this._total=0,this.storageName="SimLaTime";const t=this.getStorage();Object.keys(t).length>0&&(this._isRunning=t.isRunning,this._start=t.start,this._elapsed=t.elapsed,this._total=t.total)}get isRunning(){return this._isRunning}get getMinute(){return(this._total+this._elapsed)/6e4}get getTotalTime(){return this._total}getTimeStr(t){return this.timeFormat(this.getTime(t))}getTime(t){let e;return this.isRunning?(this._elapsed=(Date.now()-this._start)*t,e=this._total+this._elapsed):e=this._total,e}timeFormat(t){return Math.floor(t/36e5)+new Date(t).toISOString().slice(13,19)}clickNewExp(){this.isRunning||(this._isRunning=!1,this._start=Date.now(),this._elapsed=0,this._total=0,this.setStorage())}clickStart(){this.isRunning?(this._isRunning=!1,this._total+=this._elapsed):(this._isRunning=!0,this._start=Date.now(),this._elapsed=0),this.setStorage()}clickQuit(){this.isRunning||(this._isRunning=!1,this._start=Date.now(),this._elapsed=0,this._total=0,this.clearStorage())}sliderChanged(){this.isRunning&&(this._total+=this._elapsed,this._start=Date.now(),this._elapsed=0,this.setStorage())}setStorage(){localStorage.setItem(this.storageName,JSON.stringify({isRunning:this._isRunning,start:this._start,elapsed:this._elapsed,total:this._total}))}getStorage(){const t=localStorage.getItem(this.storageName);return t?JSON.parse(t):{}}clearStorage(){localStorage.removeItem(this.storageName)}}},180:function(t,e,n){var a=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const i=a(n(158));n(370),window.onload=()=>{(new i.default).start()}},916:t=>{t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgoKPHN2ZwogICB3aWR0aD0iNjcuMTk1NzkzbW0iCiAgIGhlaWdodD0iMzcuNDUyNzYzbW0iCiAgIGlkPSJzdmc0MDY4IgogICB2ZXJzaW9uPSIxLjEiCiAgIGlua3NjYXBlOnZlcnNpb249IjEuMS4yICgwYTAwY2Y1MzM5LCAyMDIyLTAyLTA0KSIKICAgc29kaXBvZGk6ZG9jbmFtZT0iZmlnX2JhY2suc3ZnIgogICBpbmtzY2FwZTpleHBvcnQtZmlsZW5hbWU9Ii9ob21lL2FyYS9naHEvZ2l0aHViLmNvbS90b3NoaS1hcmEvc2ltbGEtdHMvc3JjL2ZpZy9maWdfYmFjay5wbmciCiAgIGlua3NjYXBlOmV4cG9ydC14ZHBpPSIxODEuNzU0MjkiCiAgIGlua3NjYXBlOmV4cG9ydC15ZHBpPSIxODEuNzU0MjkiCiAgIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIgogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iPgogIDxkZWZzCiAgICAgaWQ9ImRlZnM0MDcwIiAvPgogIDxzb2RpcG9kaTpuYW1lZHZpZXcKICAgICBpZD0iYmFzZSIKICAgICBwYWdlY29sb3I9IiNmZmZmZmYiCiAgICAgYm9yZGVyY29sb3I9IiM2NjY2NjYiCiAgICAgYm9yZGVyb3BhY2l0eT0iMS4wIgogICAgIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwLjAiCiAgICAgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIKICAgICBpbmtzY2FwZTp6b29tPSIzLjk1OTc5OCIKICAgICBpbmtzY2FwZTpjeD0iODkuMzk4NSIKICAgICBpbmtzY2FwZTpjeT0iMjguNzg5MzQ3IgogICAgIGlua3NjYXBlOmRvY3VtZW50LXVuaXRzPSJweCIKICAgICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJsYXllcjEiCiAgICAgc2hvd2dyaWQ9InRydWUiCiAgICAgaW5rc2NhcGU6d2luZG93LXdpZHRoPSI5NDYiCiAgICAgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iMTA0MCIKICAgICBpbmtzY2FwZTp3aW5kb3cteD0iNCIKICAgICBpbmtzY2FwZTp3aW5kb3cteT0iMzAiCiAgICAgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMCIKICAgICBpbmtzY2FwZTpwYWdlY2hlY2tlcmJvYXJkPSIwIgogICAgIGZpdC1tYXJnaW4tdG9wPSIwIgogICAgIGZpdC1tYXJnaW4tbGVmdD0iMCIKICAgICBmaXQtbWFyZ2luLXJpZ2h0PSIwIgogICAgIGZpdC1tYXJnaW4tYm90dG9tPSIwIj4KICAgIDxpbmtzY2FwZTpncmlkCiAgICAgICB0eXBlPSJ4eWdyaWQiCiAgICAgICBpZD0iZ3JpZDMwMTgiCiAgICAgICBvcmlnaW54PSItMjA1LjUzNDA5IgogICAgICAgb3JpZ2lueT0iLTI5Ny45NzAxNyIgLz4KICA8L3NvZGlwb2RpOm5hbWVkdmlldz4KICA8bWV0YWRhdGEKICAgICBpZD0ibWV0YWRhdGE0MDczIj4KICAgIDxyZGY6UkRGPgogICAgICA8Y2M6V29yawogICAgICAgICByZGY6YWJvdXQ9IiI+CiAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+CiAgICAgICAgPGRjOnR5cGUKICAgICAgICAgICByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIiAvPgogICAgICA8L2NjOldvcms+CiAgICA8L3JkZjpSREY+CiAgPC9tZXRhZGF0YT4KICA8ZwogICAgIGlua3NjYXBlOmxhYmVsPSLjg6zjgqTjg6Tjg7wgMSIKICAgICBpbmtzY2FwZTpncm91cG1vZGU9ImxheWVyIgogICAgIGlkPSJsYXllcjEiCiAgICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIwNS41MzQwOSwtMjk3Ljk3MDE3KSI+CiAgICA8cGF0aAogICAgICAgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MjtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIgogICAgICAgZD0ibSAyNzkuNTYxMDcsNDEzLjY0NzY4IGMgLTEuNDQ5OTYsLTYuMjM0OTggLTE2Ljg3NTk2LC00LjA2ODQ4IC0zOC40NzM1OCwtMTAuNTkwOTQgLTIxLjU5NzYzLC02LjUyMjQ3IC0zNC40NDYwOCwtMTYuMTIxNDYgLTM0LjU1MywtMzEuNDg2OTkgLTAuMTA2OTIsLTE1LjM2NTU0IDIxLjU3MTksLTI5LjA3MDkxIDM1LjM3NTk0LC0zNy42MjM5NiAxMy44MDQwMywtOC41NTMwMyAyMy4wMzExNiwtOS42NDI4NSAzMC4wNjc5NiwtMTIuOTQzNTkgNy4wMzY4LC0zLjMwMDczIDEzLjAyMTYxLC0xLjAwMjIgMTIuMzg3ODEsLTYuMzAzMzggLTAuNjMzOCwtNS4zMDExOCAtMjEuOTQ5NTUsLTIuNjUzMiAtMjEuNTY2NjEsLTguMTI5NTYgMC4zODI5NSwtNS40NzYzNyAxNS43NTExLC02LjgyMjMyIDI3LjY0MjQ1LC02LjMyMzIyIDExLjg5MTM1LDAuNDk5MSAxMC44MTIyLDQuMDM5NiAyMC4xODUwOCwxMS44OTY3OCA5LjM3Mjg4LDcuODU3MTggMjIuODA3OTgsMy4xNDE5NiA0Mi43NTkyNiw0LjUzNzA5IDE5Ljk1MTI5LDEuMzk1MTMgMzcuODc3NDYsMS41MzQxNSA0Ny4yNDU1NCwyLjQyNzEyIEMgNDEwLDMyMCA0MjAsMzIwIDQxNi41Njg4MSwzMTUuMTkzODcgNDEzLjEzNzYyLDMxMC4zODc3NCAzOTAsMzE1IDM5MS43MzY3MSwzMDUuMDI0MjYgYyAxLjczNjcxLC05Ljk3NTc0IDM5Ljk1MDE3LC01LjI3NjIgNDcuODM3NzUsLTIuMzY2MzQgNy44ODc1NywyLjkwOTg4IDEzLjQwNTM3LDIzLjMyODEyIDE3LjE2MTAyLDQxLjI5NzY5IDMuNzU1NjYsMTcuOTY5NTggMS41LDUwLjIyNjk5IC03LjIyODkxLDY5LjY2NTQ0IC04LjcyODkzLDE5LjQzODQ2IC0yMi45NzAyMSwyMy42Nzc2OCAtMzUuNDU3MDEsMjQuNjkwNDYgLTEyLjQ4Njc5LDEuMDEyNzkgLTI1LjExNjYsLTEuNjIxNDYgLTI0LjU4MzA4LC04LjA5NzgzIDAuNTMzNTIsLTYuNDc2MzcgMjkuNTUwMSwtMi4yODg3NSAzMC4wNjA3OSwtOS41OTE5OCAwLjUxMDY5LC03LjMwMzIzIC0xMC4yMjk3NCwtNC4yNzc4NiAtMjMuMDA5ODUsLTQuMTk3MjQgLTEyLjc4MDExLDAuMDgwNiAtMjIuODMxOTEsMS45MTkwOSAtNDUuMTE4ODYsMC4zNjA2MyAtMjIuMjg2OTYsLTEuNTU4NDYgLTQ2Ljg3ODMxLC01LjkzMjgxIC00OC4yNzgxMywtMS42NDcxNCAtMS4zOTk4Miw0LjI4NTY3IC0yLjM3NjQ3LDcuMzQ1NzcgLTEwLjI5MDMyLDEwLjU0NTE1IC03LjkxMzg1LDMuMTk5MzkgLTMyLjYwNzQ1LDQuNzc1MiAtMzIuMDI5LC0zLjQ5Njk4IDAuNTc4NDQsLTguMjcyMTggMjAuMjA5OTIsLTIuMzAzNDcgMTguNzU5OTYsLTguNTM4NDQgeiIKICAgICAgIGlkPSJwYXRoMjk4OSIKICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiCiAgICAgICBzb2RpcG9kaTpub2RldHlwZXM9Inp6enp6enp6enp6enp6enp6enp6enp6enoiIC8+CiAgICA8cGF0aAogICAgICAgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MztzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIgogICAgICAgZD0ibSAyMTkuOTM2MTQsMzYxLjc0OTg5IGMgMTAuMTA2NzYsLTEuNzc1MjUgMTAuMzY4NDQsLTYuNzY4NCAxMi44ODk5NCwtMTEuNjQzMTEiCiAgICAgICBpZD0icGF0aDM3ODEiCiAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIgogICAgICAgc29kaXBvZGk6bm9kZXR5cGVzPSJjYyIgLz4KICAgIDxwYXRoCiAgICAgICBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDozO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiCiAgICAgICBkPSJtIDIyMC45MDI0NywzODEuNTI1OCBjIDkuMDkyMzQsLTEuNTI2MjMgMTMuNTA4OTEsNC43MTM0NiAxNS41MDcwNSw5LjgyNTA0IgogICAgICAgaWQ9InBhdGgzNzgxLTkiCiAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIgogICAgICAgc29kaXBvZGk6bm9kZXR5cGVzPSJjYyIgLz4KICAgIDxwYXRoCiAgICAgICBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiCiAgICAgICBkPSJtIDI0OS4xNjk2MiwzMzguOTQ2ODQgYyAwLDAgLTguNTY0NzMsMTAuNTY2MjMgMS4zNjkyMywxMi4wODgyMiA5LjkzMzk2LDEuNTIxOTkgMTAuNTA5NjUsLTkuNDYyOTMgMTAuNTA5NjUsLTkuNDYyOTMgMCwwIDAuNDc1MjcsMTAuMDM4NjMgOS42MTk5NSw3LjUxMzc2IDkuMTQ0NjcsLTIuNTI0ODYgNS44ODI4NiwtMTYuNzE1MDIgNS44ODI4NiwtMTYuNzE1MDIiCiAgICAgICBpZD0icGF0aDM4MDEiCiAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIgogICAgICAgc29kaXBvZGk6bm9kZXR5cGVzPSJjemN6YyIgLz4KICAgIDxwYXRoCiAgICAgICBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiCiAgICAgICBkPSJtIDI1MC4xODA5OSwzOTYuMDc4MDYgYyAwLDAgLTMuNTIzNSwtOS4xOTcwMSA0LjUxNzg4LC05Ljc3Njk1IDguMDQxMzcsLTAuNTc5OTQgNy42MjI2OCw3LjQwOTEgNy42MjI2OCw3LjQwOTEgMCwwIDMuNTE5MjUsLTkuODI5MjkgMTAuMjQ3OTgsLTQuNDY5NzkgNi43Mjg3Miw1LjM1OTUgLTAuNjgwMzcsMTIuOTgyMTggLTAuNjgwMzcsMTIuOTgyMTgiCiAgICAgICBpZD0icGF0aDM4MDEtNCIKICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiCiAgICAgICBzb2RpcG9kaTpub2RldHlwZXM9ImN6Y3pjIiAvPgogICAgPHJlY3QKICAgICAgIHN0eWxlPSJmb250LXZhcmlhdGlvbi1zZXR0aW5nczpub3JtYWw7b3BhY2l0eToxO2ZpbGw6I2Y0ZDdkNztmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6ZXZlbm9kZDtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MS4zMzMzMzMzMztzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1vcGFjaXR5OjE7c3RvcC1jb2xvcjojMDAwMDAwO3N0b3Atb3BhY2l0eToxIgogICAgICAgaWQ9InJlY3Q2Njg5IgogICAgICAgd2lkdGg9IjE0NSIKICAgICAgIGhlaWdodD0iODAiCiAgICAgICB4PSIyODUiCiAgICAgICB5PSIzMjUiCiAgICAgICByeT0iMTAiIC8+CiAgICA8dGV4dAogICAgICAgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIKICAgICAgIHN0eWxlPSJmb250LXNpemU6MTJweDtsaW5lLWhlaWdodDoxMDAlO2ZvbnQtZmFtaWx5OidOb3RvIFNhbnMgQ0pLIEpQJzstaW5rc2NhcGUtZm9udC1zcGVjaWZpY2F0aW9uOidOb3RvIFNhbnMgQ0pLIEpQLCBOb3JtYWwnO3RleHQtYWxpZ246Y2VudGVyO2xldHRlci1zcGFjaW5nOjBweDt3b3JkLXNwYWNpbmc6MHB4O3dyaXRpbmctbW9kZTpsci10Yjt0ZXh0LWFuY2hvcjptaWRkbGU7ZmlsbDojNGQ0ZDRkO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoxcHg7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW9wYWNpdHk6MSIKICAgICAgIHg9IjMyMS41MTU5NiIKICAgICAgIHk9IjMzNy4yNTE0IgogICAgICAgaWQ9InRleHQyMjYxIj48dHNwYW4KICAgICAgICAgc29kaXBvZGk6cm9sZT0ibGluZSIKICAgICAgICAgaWQ9InRzcGFuMjI1OSIKICAgICAgICAgeD0iMzIxLjUxNTk2IgogICAgICAgICB5PSIzMzcuMjUxNCIKICAgICAgICAgc3R5bGU9ImZvbnQtc3R5bGU6bm9ybWFsO2ZvbnQtdmFyaWFudDpub3JtYWw7Zm9udC13ZWlnaHQ6bm9ybWFsO2ZvbnQtc3RyZXRjaDpub3JtYWw7Zm9udC1zaXplOjEycHg7Zm9udC1mYW1pbHk6J1RlWCBHeXJlIEhlcm9zJzstaW5rc2NhcGUtZm9udC1zcGVjaWZpY2F0aW9uOidUZVggR3lyZSBIZXJvcyc7ZmlsbDojNGQ0ZDRkO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lIj5TYWxpbmU8L3RzcGFuPjwvdGV4dD4KICAgIDx0ZXh0CiAgICAgICB4bWw6c3BhY2U9InByZXNlcnZlIgogICAgICAgc3R5bGU9ImZvbnQtc2l6ZToxMnB4O2xpbmUtaGVpZ2h0OjEwMCU7Zm9udC1mYW1pbHk6J05vdG8gU2FucyBDSksgSlAnOy1pbmtzY2FwZS1mb250LXNwZWNpZmljYXRpb246J05vdG8gU2FucyBDSksgSlAsIE5vcm1hbCc7dGV4dC1hbGlnbjpjZW50ZXI7bGV0dGVyLXNwYWNpbmc6MHB4O3dvcmQtc3BhY2luZzowcHg7d3JpdGluZy1tb2RlOmxyLXRiO3RleHQtYW5jaG9yOm1pZGRsZTtmaWxsOiM0ZDRkNGQ7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjFweDtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2Utb3BhY2l0eToxIgogICAgICAgeD0iMzU4LjkyNTQyIgogICAgICAgeT0iMzM3LjI4NzQxIgogICAgICAgaWQ9InRleHQyMjYxLTMiPjx0c3BhbgogICAgICAgICBzb2RpcG9kaTpyb2xlPSJsaW5lIgogICAgICAgICBpZD0idHNwYW4yMjU5LTYiCiAgICAgICAgIHg9IjM1OC45MjU0MiIKICAgICAgICAgeT0iMzM3LjI4NzQxIgogICAgICAgICBzdHlsZT0iZm9udC1zdHlsZTpub3JtYWw7Zm9udC12YXJpYW50Om5vcm1hbDtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zdHJldGNoOm5vcm1hbDtmb250LXNpemU6MTJweDtmb250LWZhbWlseTonVGVYIEd5cmUgSGVyb3MnOy1pbmtzY2FwZS1mb250LXNwZWNpZmljYXRpb246J1RlWCBHeXJlIEhlcm9zJztmaWxsOiM0ZDRkNGQ7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmUiPlBybzwvdHNwYW4+PC90ZXh0PgogICAgPHRleHQKICAgICAgIHhtbDpzcGFjZT0icHJlc2VydmUiCiAgICAgICBzdHlsZT0iZm9udC1zaXplOjEycHg7bGluZS1oZWlnaHQ6MTAwJTtmb250LWZhbWlseTonTm90byBTYW5zIENKSyBKUCc7LWlua3NjYXBlLWZvbnQtc3BlY2lmaWNhdGlvbjonTm90byBTYW5zIENKSyBKUCwgTm9ybWFsJzt0ZXh0LWFsaWduOmNlbnRlcjtsZXR0ZXItc3BhY2luZzowcHg7d29yZC1zcGFjaW5nOjBweDt3cml0aW5nLW1vZGU6bHItdGI7dGV4dC1hbmNob3I6bWlkZGxlO2ZpbGw6IzRkNGQ0ZDtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MXB4O3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1vcGFjaXR5OjEiCiAgICAgICB4PSIzOTYuMjc1MzYiCiAgICAgICB5PSIzMzcuMjg3NDEiCiAgICAgICBpZD0idGV4dDIyNjEtMy03Ij48dHNwYW4KICAgICAgICAgc29kaXBvZGk6cm9sZT0ibGluZSIKICAgICAgICAgaWQ9InRzcGFuMjI1OS02LTUiCiAgICAgICAgIHg9IjM5Ni4yNzUzNiIKICAgICAgICAgeT0iMzM3LjI4NzQxIgogICAgICAgICBzdHlsZT0iZm9udC1zdHlsZTpub3JtYWw7Zm9udC12YXJpYW50Om5vcm1hbDtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zdHJldGNoOm5vcm1hbDtmb250LXNpemU6MTJweDtmb250LWZhbWlseTonVGVYIEd5cmUgSGVyb3MnOy1pbmtzY2FwZS1mb250LXNwZWNpZmljYXRpb246J1RlWCBHeXJlIEhlcm9zJztmaWxsOiM0ZDRkNGQ7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmUiPkxpZDwvdHNwYW4+PC90ZXh0PgogICAgPHRleHQKICAgICAgIHhtbDpzcGFjZT0icHJlc2VydmUiCiAgICAgICBzdHlsZT0iZm9udC1zaXplOjEycHg7bGluZS1oZWlnaHQ6MTAwJTtmb250LWZhbWlseTonTm90byBTYW5zIENKSyBKUCc7LWlua3NjYXBlLWZvbnQtc3BlY2lmaWNhdGlvbjonTm90byBTYW5zIENKSyBKUCwgTm9ybWFsJzt0ZXh0LWFsaWduOmNlbnRlcjtsZXR0ZXItc3BhY2luZzowcHg7d29yZC1zcGFjaW5nOjBweDt3cml0aW5nLW1vZGU6bHItdGI7dGV4dC1hbmNob3I6bWlkZGxlO2ZpbGw6IzRkNGQ0ZDtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MXB4O3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1vcGFjaXR5OjEiCiAgICAgICB4PSIzMjEuMjkzOTgiCiAgICAgICB5PSIzOTkuODk3MTMiCiAgICAgICBpZD0idGV4dDIyNjEtMzUiPjx0c3BhbgogICAgICAgICBzb2RpcG9kaTpyb2xlPSJsaW5lIgogICAgICAgICBpZD0idHNwYW4yMjU5LTYyIgogICAgICAgICB4PSIzMjEuMjkzOTgiCiAgICAgICAgIHk9IjM5OS44OTcxMyIKICAgICAgICAgc3R5bGU9ImZvbnQtc3R5bGU6bm9ybWFsO2ZvbnQtdmFyaWFudDpub3JtYWw7Zm9udC13ZWlnaHQ6bm9ybWFsO2ZvbnQtc3RyZXRjaDpub3JtYWw7Zm9udC1zaXplOjEycHg7Zm9udC1mYW1pbHk6J1RlWCBHeXJlIEhlcm9zJzstaW5rc2NhcGUtZm9udC1zcGVjaWZpY2F0aW9uOidUZVggR3lyZSBIZXJvcyc7ZmlsbDojNGQ0ZDRkO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lIj5NZXA8L3RzcGFuPjwvdGV4dD4KICAgIDx0ZXh0CiAgICAgICB4bWw6c3BhY2U9InByZXNlcnZlIgogICAgICAgc3R5bGU9ImZvbnQtc2l6ZToxMnB4O2xpbmUtaGVpZ2h0OjEwMCU7Zm9udC1mYW1pbHk6J05vdG8gU2FucyBDSksgSlAnOy1pbmtzY2FwZS1mb250LXNwZWNpZmljYXRpb246J05vdG8gU2FucyBDSksgSlAsIE5vcm1hbCc7dGV4dC1hbGlnbjpjZW50ZXI7bGV0dGVyLXNwYWNpbmc6MHB4O3dvcmQtc3BhY2luZzowcHg7d3JpdGluZy1tb2RlOmxyLXRiO3RleHQtYW5jaG9yOm1pZGRsZTtmaWxsOiM0ZDRkNGQ7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjFweDtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2Utb3BhY2l0eToxIgogICAgICAgeD0iMzU4LjkxOTQiCiAgICAgICB5PSIzOTkuODk3MTMiCiAgICAgICBpZD0idGV4dDIyNjEtMy05Ij48dHNwYW4KICAgICAgICAgc29kaXBvZGk6cm9sZT0ibGluZSIKICAgICAgICAgaWQ9InRzcGFuMjI1OS02LTEiCiAgICAgICAgIHg9IjM1OC45MTk0IgogICAgICAgICB5PSIzOTkuODk3MTMiCiAgICAgICAgIHN0eWxlPSJmb250LXN0eWxlOm5vcm1hbDtmb250LXZhcmlhbnQ6bm9ybWFsO2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LXN0cmV0Y2g6bm9ybWFsO2ZvbnQtc2l6ZToxMnB4O2ZvbnQtZmFtaWx5OidUZVggR3lyZSBIZXJvcyc7LWlua3NjYXBlLWZvbnQtc3BlY2lmaWNhdGlvbjonVGVYIEd5cmUgSGVyb3MnO2ZpbGw6IzRkNGQ0ZDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSI+QnVwPC90c3Bhbj48L3RleHQ+CiAgICA8dGV4dAogICAgICAgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIKICAgICAgIHN0eWxlPSJmb250LXNpemU6MTJweDtsaW5lLWhlaWdodDoxMDAlO2ZvbnQtZmFtaWx5OidOb3RvIFNhbnMgQ0pLIEpQJzstaW5rc2NhcGUtZm9udC1zcGVjaWZpY2F0aW9uOidOb3RvIFNhbnMgQ0pLIEpQLCBOb3JtYWwnO3RleHQtYWxpZ246Y2VudGVyO2xldHRlci1zcGFjaW5nOjBweDt3b3JkLXNwYWNpbmc6MHB4O3dyaXRpbmctbW9kZTpsci10Yjt0ZXh0LWFuY2hvcjptaWRkbGU7ZmlsbDojNGQ0ZDRkO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoxcHg7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW9wYWNpdHk6MSIKICAgICAgIHg9IjM5OS45ODEzNSIKICAgICAgIHk9IjM5OS44OTcxMyIKICAgICAgIGlkPSJ0ZXh0MjI2MS0zLTctMiI+PHRzcGFuCiAgICAgICAgIHNvZGlwb2RpOnJvbGU9ImxpbmUiCiAgICAgICAgIGlkPSJ0c3BhbjIyNTktNi01LTciCiAgICAgICAgIHg9IjM5OS45ODEzNSIKICAgICAgICAgeT0iMzk5Ljg5NzEzIgogICAgICAgICBzdHlsZT0iZm9udC1zdHlsZTpub3JtYWw7Zm9udC12YXJpYW50Om5vcm1hbDtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zdHJldGNoOm5vcm1hbDtmb250LXNpemU6MTJweDtmb250LWZhbWlseTonVGVYIEd5cmUgSGVyb3MnOy1pbmtzY2FwZS1mb250LXNwZWNpZmljYXRpb246J1RlWCBHeXJlIEhlcm9zJztmaWxsOiM0ZDRkNGQ7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmUiPkxpZCtBZHI8L3RzcGFuPjwvdGV4dD4KICA8L2c+Cjwvc3ZnPgo="}},e={};function n(a){var i=e[a];if(void 0!==i)return i.exports;var g=e[a]={id:a,exports:{}};return t[a].call(g.exports,g,g.exports,n),g.exports}n.m=t,n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var a in e)n.o(e,a)&&!n.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.b=document.baseURI||self.location.href,n.nc=void 0,n(180)})();
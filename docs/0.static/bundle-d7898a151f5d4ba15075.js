webpackJsonp([0],{488:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=n(6),l=n.n(o),A=n(176),s=n.n(A),c=n(175),u=n(489),p=n.n(u),f=n(490),d=n.n(f),m=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),x=function(e){function t(){var e,n,i,o;a(this,t);for(var l=arguments.length,A=Array(l),s=0;s<l;s++)A[s]=arguments[s];return n=i=r(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(A))),i.handleData=function(e){i.props.setFeed(e.items)},i.handlerSearchDebounce=p()(function(e){if(e){var t=document.getElementById("callback");t&&t.remove();var n=document.createElement("script");n.id="callback",n.type="text/javascript",n.src="http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=getDataFlickr&format=json&tags="+e.split(" ").join(",")+"&tagmode=any",document.getElementsByTagName("head")[0].appendChild(n)}else i.props.setFeed(null)},200),i.handlerSearch=function(e){e.persist(),i.handlerSearchDebounce(e.target.value)},o=n,r(i,o)}return i(t,e),m(t,[{key:"componentDidMount",value:function(){var e=this;window.getDataFlickr=function(t){e.handleData(t)}}},{key:"render",value:function(){var e=this.props.feed;return l.a.createElement("div",{className:d.a.wrap},l.a.createElement("h1",null,"Search public photos on Flickr"),l.a.createElement("input",{name:"search",className:d.a.searchBox,placeholder:"Type here to search",onChange:this.handlerSearch}),l.a.createElement("div",{className:d.a.results},e&&0===e.length&&l.a.createElement("div",null,"No result"),e&&e.map(function(e){return l.a.createElement("div",{key:e.link,className:d.a.result},l.a.createElement("div",{className:d.a.resultImage},l.a.createElement("a",{target:"_blank",href:e.link},l.a.createElement("img",{src:e.media.m,alt:e.title}))),l.a.createElement("div",{className:d.a.resultInfo},l.a.createElement("div",{className:d.a.resultRowInfo},l.a.createElement("b",null,"Title")," ",e.title),l.a.createElement("div",{className:d.a.resultRowInfo},l.a.createElement("b",null,"Author")," ",e.author),l.a.createElement("div",{className:d.a.resultRowInfo},l.a.createElement("b",null,"Tags")," ",e.tags)))})))}}]),t}(o.Component);x.propTypes={feed:s.a.array,setFeed:s.a.func.isRequired};var b=function(e){return{setFeed:function(t){e({type:"FEED_SET",payload:t})}}},B=function(e){return{feed:e.feed}};t.default=Object(c.b)(B,b)(x)},489:function(e,t,n){(function(t){function n(e,t,n){function r(t){var n=m,a=x;return m=x=void 0,y=t,B=e.apply(a,n)}function i(e){return y=e,g=setTimeout(c,t),v?r(e):B}function A(e){var n=e-w,a=e-y,r=t-n;return k?_(r,b-a):r}function s(e){var n=e-w,a=e-y;return void 0===w||n>=t||n<0||k&&a>=b}function c(){var e=C();if(s(e))return u(e);g=setTimeout(c,A(e))}function u(e){return g=void 0,E&&m?r(e):(m=x=void 0,B)}function p(){void 0!==g&&clearTimeout(g),y=0,m=w=x=g=void 0}function f(){return void 0===g?B:u(C())}function d(){var e=C(),n=s(e);if(m=arguments,x=this,w=e,n){if(void 0===g)return i(w);if(k)return g=setTimeout(c,t),r(w)}return void 0===g&&(g=setTimeout(c,t)),B}var m,x,b,B,g,w,y=0,v=!1,k=!1,E=!0;if("function"!=typeof e)throw new TypeError(l);return t=o(t)||0,a(n)&&(v=!!n.leading,k="maxWait"in n,b=k?h(o(n.maxWait)||0,t):b,E="trailing"in n?!!n.trailing:E),d.cancel=p,d.flush=f,d}function a(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function r(e){return!!e&&"object"==typeof e}function i(e){return"symbol"==typeof e||r(e)&&g.call(e)==s}function o(e){if("number"==typeof e)return e;if(i(e))return A;if(a(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=a(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(c,"");var n=p.test(e);return n||f.test(e)?d(e.slice(2),n?2:8):u.test(e)?A:+e}var l="Expected a function",A=NaN,s="[object Symbol]",c=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,p=/^0b[01]+$/i,f=/^0o[0-7]+$/i,d=parseInt,m="object"==typeof t&&t&&t.Object===Object&&t,x="object"==typeof self&&self&&self.Object===Object&&self,b=m||x||Function("return this")(),B=Object.prototype,g=B.toString,h=Math.max,_=Math.min,C=function(){return b.Date.now()};e.exports=n}).call(t,n(54))},490:function(e,t,n){var a=n(491);"string"==typeof a&&(a=[[e.i,a,""]]);var r={hmr:!0};r.transform=void 0,n(115)(a,r),a.locals&&(e.exports=a.locals)},491:function(e,t,n){t=e.exports=n(114)(!0),t.push([e.i,".page__wrap___3bR7BAf8{max-width:1280px;margin:0 auto;padding:32px}.page__searchBox___3SJnaje0{border:1px solid #ccc;outline:none;padding:6px 16px;font-size:16px;-webkit-box-sizing:border-box;box-sizing:border-box}.page__results___13MAavT5{margin-top:20px;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}.page__result___3OAl1Crd{padding:8px;-webkit-box-flex:0;-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;font-size:16px}.page__resultImage___siQsOty7{height:200px}.page__resultImage___siQsOty7 img{display:block;margin:auto;width:auto;height:100%;max-height:200px;max-width:100%}@media (min-width:768px){.page__result___3OAl1Crd{-webkit-box-flex:0;-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}}@media (min-width:996px){.page__result___3OAl1Crd{-webkit-box-flex:0;-ms-flex:0 0 33.33%;flex:0 0 33.33%;max-width:33.33%}}@media (min-width:1280px){.page__result___3OAl1Crd{-webkit-box-flex:0;-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}}.page__resultInfo___2d4HzPSz{margin-top:10px}","",{version:3,sources:["/Users/giangnguyen/Projects/flickr-public/src/pages/page.css"],names:[],mappings:"AAAA,uBACI,iBAAkB,AAClB,cAAe,AACf,YAAc,CACjB,AAED,4BACI,sBAAuB,AACvB,aAAc,AACd,iBAAkB,AAClB,eAAgB,AAChB,8BAA+B,AACvB,qBAAuB,CAClC,AAED,0BACI,gBAAiB,AACjB,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,mBAAoB,AAChB,cAAgB,CACvB,AAED,yBACI,YAAa,AACb,mBAAoB,AAChB,kBAAmB,AACf,cAAe,AACvB,eAAgB,AAChB,8BAA+B,AACvB,sBAAuB,AAC/B,cAAgB,CACnB,AAED,8BACI,YAAc,CACjB,AAED,kCACI,cAAe,AACf,YAAa,AACb,WAAY,AACZ,YAAa,AACb,iBAAkB,AAClB,cAAgB,CACnB,AAED,yBACI,yBACI,mBAAoB,AAChB,iBAAkB,AACd,aAAc,AACtB,aAAe,CAClB,CACJ,AAED,yBACI,yBACI,mBAAoB,AAChB,oBAAqB,AACjB,gBAAiB,AACzB,gBAAkB,CACrB,CACJ,AAED,0BACI,yBACI,mBAAoB,AAChB,iBAAkB,AACd,aAAc,AACtB,aAAe,CAClB,CACJ,AAED,6BACI,eAAiB,CACpB",file:"page.css",sourcesContent:[".wrap {\n    max-width: 1280px;\n    margin: 0 auto;\n    padding: 32px;\n}\n\n.searchBox {\n    border: 1px solid #ccc;\n    outline: none;\n    padding: 6px 16px;\n    font-size: 16px;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n}\n\n.results {\n    margin-top: 20px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n}\n\n.result {\n    padding: 8px;\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 100%;\n            flex: 0 0 100%;\n    max-width: 100%;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    font-size: 16px;\n}\n\n.resultImage {\n    height: 200px;\n}\n\n.resultImage img {\n    display: block;\n    margin: auto;\n    width: auto;\n    height: 100%;\n    max-height: 200px;\n    max-width: 100%;\n}\n\n@media (min-width: 768px) {\n    .result {\n        -webkit-box-flex: 0;\n            -ms-flex: 0 0 50%;\n                flex: 0 0 50%;\n        max-width: 50%;\n    }\n}\n\n@media (min-width: 996px) {\n    .result {\n        -webkit-box-flex: 0;\n            -ms-flex: 0 0 33.33%;\n                flex: 0 0 33.33%;\n        max-width: 33.33%;\n    }\n}\n\n@media (min-width: 1280px) {\n    .result {\n        -webkit-box-flex: 0;\n            -ms-flex: 0 0 25%;\n                flex: 0 0 25%;\n        max-width: 25%;\n    }\n}\n\n.resultInfo {\n    margin-top: 10px;\n}"],sourceRoot:""}]),t.locals={wrap:"page__wrap___3bR7BAf8",searchBox:"page__searchBox___3SJnaje0",results:"page__results___13MAavT5",result:"page__result___3OAl1Crd",resultImage:"page__resultImage___siQsOty7",resultInfo:"page__resultInfo___2d4HzPSz"}}});
//# sourceMappingURL=bundle-d7898a151f5d4ba15075.js.map
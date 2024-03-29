$(document).foundation();

// Hero Video Control Frogaloop
/*! @vimeo/player v2.17.1 | (c) 2022 Vimeo | MIT License | https://github.com/vimeo/player.js */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):((e="undefined"!=typeof globalThis?globalThis:e||self).Vimeo=e.Vimeo||{},e.Vimeo.Player=t())}(this,function(){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var e="undefined"!=typeof global&&"[object global]"==={}.toString.call(global);function i(e,t){return 0===e.indexOf(t.toLowerCase())?e:"".concat(t.toLowerCase()).concat(e.substr(0,1).toUpperCase()).concat(e.substr(1))}function c(e){return/^(https?:)?\/\/((player|www)\.)?vimeo\.com(?=$|\/)/.test(e)}function s(e){var t,n=0<arguments.length&&void 0!==e?e:{},r=n.id,o=n.url,i=r||o;if(!i)throw new Error("An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute.");if(t=i,!isNaN(parseFloat(t))&&isFinite(t)&&Math.floor(t)==t)return"https://vimeo.com/".concat(i);if(c(i))return i.replace("http:","https:");if(r)throw new TypeError("“".concat(r,"” is not a valid video id."));throw new TypeError("“".concat(i,"” is not a vimeo.com url."))}var t=void 0!==Array.prototype.indexOf,n="undefined"!=typeof window&&void 0!==window.postMessage;if(!(e||t&&n))throw new Error("Sorry, the Vimeo Player API is not available in this browser.");var o,a,u,l,f="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function d(){if(void 0===this)throw new TypeError("Constructor WeakMap requires 'new'");if(l(this,"_id","_WeakMap_"+v()+"."+v()),0<arguments.length)throw new TypeError("WeakMap iterable is not supported")}function h(e,t){if(!m(e)||!a.call(e,"_id"))throw new TypeError(t+" method called on incompatible receiver "+typeof e)}function v(){return Math.random().toString().substring(2)}function m(e){return Object(e)===e}(o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:f).WeakMap||(a=Object.prototype.hasOwnProperty,u=Object.defineProperty&&function(){try{return 1===Object.defineProperty({},"x",{value:1}).x}catch(e){}}(),l=function(e,t,n){u?Object.defineProperty(e,t,{configurable:!0,writable:!0,value:n}):e[t]=n},o.WeakMap=(l(d.prototype,"delete",function(e){if(h(this,"delete"),!m(e))return!1;var t=e[this._id];return!(!t||t[0]!==e)&&(delete e[this._id],!0)}),l(d.prototype,"get",function(e){if(h(this,"get"),m(e)){var t=e[this._id];return t&&t[0]===e?t[1]:void 0}}),l(d.prototype,"has",function(e){if(h(this,"has"),!m(e))return!1;var t=e[this._id];return!(!t||t[0]!==e)}),l(d.prototype,"set",function(e,t){if(h(this,"set"),!m(e))throw new TypeError("Invalid value used as weak map key");var n=e[this._id];return n&&n[0]===e?n[1]=t:l(e,this._id,[e,t]),this}),l(d,"_polyfill",!0),d));var p,y=(function(e){var t,n,r;r=function(){var t,n,r,o,i,a,e=Object.prototype.toString,u="undefined"!=typeof setImmediate?function(e){return setImmediate(e)}:setTimeout;try{Object.defineProperty({},"x",{}),t=function(e,t,n,r){return Object.defineProperty(e,t,{value:n,writable:!0,configurable:!1!==r})}}catch(e){t=function(e,t,n){return e[t]=n,e}}function l(e,t){this.fn=e,this.self=t,this.next=void 0}function c(e,t){r.add(e,t),n=n||u(r.drain)}function s(e){var t,n=typeof e;return null==e||"object"!=n&&"function"!=n||(t=e.then),"function"==typeof t&&t}function f(){for(var e=0;e<this.chain.length;e++)!function(e,t,n){var r,o;try{!1===t?n.reject(e.msg):(r=!0===t?e.msg:t.call(void 0,e.msg))===n.promise?n.reject(TypeError("Promise-chain cycle")):(o=s(r))?o.call(r,n.resolve,n.reject):n.resolve(r)}catch(e){n.reject(e)}}(this,1===this.state?this.chain[e].success:this.chain[e].failure,this.chain[e]);this.chain.length=0}function d(e){var n,r=this;if(!r.triggered){r.triggered=!0,r.def&&(r=r.def);try{(n=s(e))?c(function(){var t=new m(r);try{n.call(e,function(){d.apply(t,arguments)},function(){h.apply(t,arguments)})}catch(e){h.call(t,e)}}):(r.msg=e,r.state=1,0<r.chain.length&&c(f,r))}catch(e){h.call(new m(r),e)}}}function h(e){var t=this;t.triggered||(t.triggered=!0,t.def&&(t=t.def),t.msg=e,t.state=2,0<t.chain.length&&c(f,t))}function v(e,n,r,o){for(var t=0;t<n.length;t++)!function(t){e.resolve(n[t]).then(function(e){r(t,e)},o)}(t)}function m(e){this.def=e,this.triggered=!1}function p(e){this.promise=e,this.state=0,this.triggered=!1,this.chain=[],this.msg=void 0}function y(e){if("function"!=typeof e)throw TypeError("Not a function");if(0!==this.__NPO__)throw TypeError("Not a promise");this.__NPO__=1;var r=new p(this);this.then=function(e,t){var n={success:"function"!=typeof e||e,failure:"function"==typeof t&&t};return n.promise=new this.constructor(function(e,t){if("function"!=typeof e||"function"!=typeof t)throw TypeError("Not a function");n.resolve=e,n.reject=t}),r.chain.push(n),0!==r.state&&c(f,r),n.promise},this.catch=function(e){return this.then(void 0,e)};try{e.call(void 0,function(e){d.call(r,e)},function(e){h.call(r,e)})}catch(e){h.call(r,e)}}var g=t({},"constructor",y,!(r={add:function(e,t){a=new l(e,t),i?i.next=a:o=a,i=a,a=void 0},drain:function(){var e=o;for(o=i=n=void 0;e;)e.fn.call(e.self),e=e.next}}));return t(y.prototype=g,"__NPO__",0,!1),t(y,"resolve",function(n){return n&&"object"==typeof n&&1===n.__NPO__?n:new this(function(e,t){if("function"!=typeof e||"function"!=typeof t)throw TypeError("Not a function");e(n)})}),t(y,"reject",function(n){return new this(function(e,t){if("function"!=typeof e||"function"!=typeof t)throw TypeError("Not a function");t(n)})}),t(y,"all",function(t){var a=this;return"[object Array]"!=e.call(t)?a.reject(TypeError("Not an array")):0===t.length?a.resolve([]):new a(function(n,e){if("function"!=typeof n||"function"!=typeof e)throw TypeError("Not a function");var r=t.length,o=Array(r),i=0;v(a,t,function(e,t){o[e]=t,++i===r&&n(o)},e)})}),t(y,"race",function(t){var r=this;return"[object Array]"!=e.call(t)?r.reject(TypeError("Not an array")):new r(function(n,e){if("function"!=typeof n||"function"!=typeof e)throw TypeError("Not a function");v(r,t,function(e,t){n(t)},e)})}),y},(n=f)[t="Promise"]=n[t]||r(),e.exports&&(e.exports=n[t])}(p={exports:{}}),p.exports),g=new WeakMap;function w(e,t,n){var r=g.get(e.element)||{};t in r||(r[t]=[]),r[t].push(n),g.set(e.element,r)}function b(e,t){return(g.get(e.element)||{})[t]||[]}function k(e,t,n){var r=g.get(e.element)||{};if(!r[t])return!0;if(!n)return r[t]=[],g.set(e.element,r),!0;var o=r[t].indexOf(n);return-1!==o&&r[t].splice(o,1),g.set(e.element,r),r[t]&&0===r[t].length}function E(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){return console.warn(e),{}}return e}function T(e,t,n){var r,o;e.element.contentWindow&&e.element.contentWindow.postMessage&&(r={method:t},void 0!==n&&(r.value=n),8<=(o=parseFloat(navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/,"$1")))&&o<10&&(r=JSON.stringify(r)),e.element.contentWindow.postMessage(r,e.origin))}function P(n,r){var t,e,o=[];(r=E(r)).event?("error"===r.event&&b(n,r.data.method).forEach(function(e){var t=new Error(r.data.message);t.name=r.data.name,e.reject(t),k(n,r.data.method,e)}),o=b(n,"event:".concat(r.event)),t=r.data):!r.method||(e=function(e,t){var n=b(e,t);if(n.length<1)return!1;var r=n.shift();return k(e,t,r),r}(n,r.method))&&(o.push(e),t=r.value),o.forEach(function(e){try{if("function"==typeof e)return void e.call(n,t);e.resolve(t)}catch(e){}})}var M=["autopause","autoplay","background","byline","color","controls","dnt","height","id","interactive_params","keyboard","loop","maxheight","maxwidth","muted","playsinline","portrait","responsive","speed","texttrack","title","transparent","url","width"];function _(r,e){var t=1<arguments.length&&void 0!==e?e:{};return M.reduce(function(e,t){var n=r.getAttribute("data-vimeo-".concat(t));return!n&&""!==n||(e[t]=""===n?1:n),e},t)}function N(e,t){var n=e.html;if(!t)throw new TypeError("An element must be provided");if(null!==t.getAttribute("data-vimeo-initialized"))return t.querySelector("iframe");var r=document.createElement("div");return r.innerHTML=n,t.appendChild(r.firstChild),t.setAttribute("data-vimeo-initialized","true"),t.querySelector("iframe")}function F(i,e,t){var a=1<arguments.length&&void 0!==e?e:{},u=2<arguments.length?t:void 0;return new Promise(function(t,n){if(!c(i))throw new TypeError("“".concat(i,"” is not a vimeo.com url."));var e="https://vimeo.com/api/oembed.json?url=".concat(encodeURIComponent(i));for(var r in a)a.hasOwnProperty(r)&&(e+="&".concat(r,"=").concat(encodeURIComponent(a[r])));var o=new("XDomainRequest"in window?XDomainRequest:XMLHttpRequest);o.open("GET",e,!0),o.onload=function(){if(404!==o.status)if(403!==o.status)try{var e=JSON.parse(o.responseText);if(403===e.domain_status_code)return N(e,u),void n(new Error("“".concat(i,"” is not embeddable.")));t(e)}catch(e){n(e)}else n(new Error("“".concat(i,"” is not embeddable.")));else n(new Error("“".concat(i,"” was not found.")))},o.onerror=function(){var e=o.status?" (".concat(o.status,")"):"";n(new Error("There was an error fetching the embed code from Vimeo".concat(e,".")))},o.send()})}var x,C,j,A=new WeakMap,S=new WeakMap,q={},Player=function(){function Player(u){var e,t,l=this,n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};if(!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Player),window.$&&u instanceof $&&(1<u.length&&window.console&&console.warn&&console.warn("A $ object with multiple elements was passed, using the first element."),u=u[0]),"undefined"!=typeof document&&"string"==typeof u&&(u=document.getElementById(u)),e=u,!Boolean(e&&1===e.nodeType&&"nodeName"in e&&e.ownerDocument&&e.ownerDocument.defaultView))throw new TypeError("You must pass either a valid element or a valid id.");if("IFRAME"===u.nodeName||(t=u.querySelector("iframe"))&&(u=t),"IFRAME"===u.nodeName&&!c(u.getAttribute("src")||""))throw new Error("The player element passed isn’t a Vimeo embed.");if(A.has(u))return A.get(u);this._window=u.ownerDocument.defaultView,this.element=u,this.origin="*";var r,o=new y(function(i,a){var e;l._onMessage=function(e){if(c(e.origin)&&l.element.contentWindow===e.source){"*"===l.origin&&(l.origin=e.origin);var t=E(e.data);if(t&&"error"===t.event&&t.data&&"ready"===t.data.method){var n=new Error(t.data.message);return n.name=t.data.name,void a(n)}var r=t&&"ready"===t.event,o=t&&"ping"===t.method;if(r||o)return l.element.setAttribute("data-ready","true"),void i();P(l,t)}},l._window.addEventListener("message",l._onMessage),"IFRAME"!==l.element.nodeName&&F(s(e=_(u,n)),e,u).then(function(e){var t,n,r,o=N(e,u);return l.element=o,l._originalElement=u,t=u,n=o,r=g.get(t),g.set(n,r),g.delete(t),A.set(l.element,l),e}).catch(a)});return S.set(this,o),A.set(this.element,this),"IFRAME"===this.element.nodeName&&T(this,"ping"),q.isEnabled&&(r=function(){return q.exit()},this.fullscreenchangeHandler=function(){(q.isFullscreen?w:k)(l,"event:exitFullscreen",r),l.ready().then(function(){T(l,"fullscreenchange",q.isFullscreen)})},q.on("fullscreenchange",this.fullscreenchangeHandler)),this}var e,t,n;return e=Player,(t=[{key:"callMethod",value:function(n,e){var r=this,o=1<arguments.length&&void 0!==e?e:{};return new y(function(e,t){return r.ready().then(function(){w(r,n,{resolve:e,reject:t}),T(r,n,o)}).catch(t)})}},{key:"get",value:function(n){var r=this;return new y(function(e,t){return n=i(n,"get"),r.ready().then(function(){w(r,n,{resolve:e,reject:t}),T(r,n)}).catch(t)})}},{key:"set",value:function(n,r){var o=this;return new y(function(e,t){if(n=i(n,"set"),null==r)throw new TypeError("There must be a value to set.");return o.ready().then(function(){w(o,n,{resolve:e,reject:t}),T(o,n,r)}).catch(t)})}},{key:"on",value:function(e,t){if(!e)throw new TypeError("You must pass an event name.");if(!t)throw new TypeError("You must pass a callback function.");if("function"!=typeof t)throw new TypeError("The callback must be a function.");0===b(this,"event:".concat(e)).length&&this.callMethod("addEventListener",e).catch(function(){}),w(this,"event:".concat(e),t)}},{key:"off",value:function(e,t){if(!e)throw new TypeError("You must pass an event name.");if(t&&"function"!=typeof t)throw new TypeError("The callback must be a function.");k(this,"event:".concat(e),t)&&this.callMethod("removeEventListener",e).catch(function(e){})}},{key:"loadVideo",value:function(e){return this.callMethod("loadVideo",e)}},{key:"ready",value:function(){var e=S.get(this)||new y(function(e,t){t(new Error("Unknown player. Probably unloaded."))});return y.resolve(e)}},{key:"addCuePoint",value:function(e,t){var n=1<arguments.length&&void 0!==t?t:{};return this.callMethod("addCuePoint",{time:e,data:n})}},{key:"removeCuePoint",value:function(e){return this.callMethod("removeCuePoint",e)}},{key:"enableTextTrack",value:function(e,t){if(!e)throw new TypeError("You must pass a language.");return this.callMethod("enableTextTrack",{language:e,kind:t})}},{key:"disableTextTrack",value:function(){return this.callMethod("disableTextTrack")}},{key:"pause",value:function(){return this.callMethod("pause")}},{key:"play",value:function(){return this.callMethod("play")}},{key:"requestFullscreen",value:function(){return q.isEnabled?q.request(this.element):this.callMethod("requestFullscreen")}},{key:"exitFullscreen",value:function(){return q.isEnabled?q.exit():this.callMethod("exitFullscreen")}},{key:"getFullscreen",value:function(){return q.isEnabled?y.resolve(q.isFullscreen):this.get("fullscreen")}},{key:"requestPictureInPicture",value:function(){return this.callMethod("requestPictureInPicture")}},{key:"exitPictureInPicture",value:function(){return this.callMethod("exitPictureInPicture")}},{key:"getPictureInPicture",value:function(){return this.get("pictureInPicture")}},{key:"unload",value:function(){return this.callMethod("unload")}},{key:"destroy",value:function(){var n=this;return new y(function(e){var t;S.delete(n),A.delete(n.element),n._originalElement&&(A.delete(n._originalElement),n._originalElement.removeAttribute("data-vimeo-initialized")),n.element&&"IFRAME"===n.element.nodeName&&n.element.parentNode&&(n.element.parentNode.parentNode&&n._originalElement&&n._originalElement!==n.element.parentNode?n.element.parentNode.parentNode.removeChild(n.element.parentNode):n.element.parentNode.removeChild(n.element)),n.element&&"DIV"===n.element.nodeName&&n.element.parentNode&&(n.element.removeAttribute("data-vimeo-initialized"),(t=n.element.querySelector("iframe"))&&t.parentNode&&(t.parentNode.parentNode&&n._originalElement&&n._originalElement!==t.parentNode?t.parentNode.parentNode.removeChild(t.parentNode):t.parentNode.removeChild(t))),n._window.removeEventListener("message",n._onMessage),q.isEnabled&&q.off("fullscreenchange",n.fullscreenchangeHandler),e()})}},{key:"getAutopause",value:function(){return this.get("autopause")}},{key:"setAutopause",value:function(e){return this.set("autopause",e)}},{key:"getBuffered",value:function(){return this.get("buffered")}},{key:"getCameraProps",value:function(){return this.get("cameraProps")}},{key:"setCameraProps",value:function(e){return this.set("cameraProps",e)}},{key:"getChapters",value:function(){return this.get("chapters")}},{key:"getCurrentChapter",value:function(){return this.get("currentChapter")}},{key:"getColor",value:function(){return this.get("color")}},{key:"setColor",value:function(e){return this.set("color",e)}},{key:"getCuePoints",value:function(){return this.get("cuePoints")}},{key:"getCurrentTime",value:function(){return this.get("currentTime")}},{key:"setCurrentTime",value:function(e){return this.set("currentTime",e)}},{key:"getDuration",value:function(){return this.get("duration")}},{key:"getEnded",value:function(){return this.get("ended")}},{key:"getLoop",value:function(){return this.get("loop")}},{key:"setLoop",value:function(e){return this.set("loop",e)}},{key:"setMuted",value:function(e){return this.set("muted",e)}},{key:"getMuted",value:function(){return this.get("muted")}},{key:"getPaused",value:function(){return this.get("paused")}},{key:"getPlaybackRate",value:function(){return this.get("playbackRate")}},{key:"setPlaybackRate",value:function(e){return this.set("playbackRate",e)}},{key:"getPlayed",value:function(){return this.get("played")}},{key:"getQualities",value:function(){return this.get("qualities")}},{key:"getQuality",value:function(){return this.get("quality")}},{key:"setQuality",value:function(e){return this.set("quality",e)}},{key:"getSeekable",value:function(){return this.get("seekable")}},{key:"getSeeking",value:function(){return this.get("seeking")}},{key:"getTextTracks",value:function(){return this.get("textTracks")}},{key:"getVideoEmbedCode",value:function(){return this.get("videoEmbedCode")}},{key:"getVideoId",value:function(){return this.get("videoId")}},{key:"getVideoTitle",value:function(){return this.get("videoTitle")}},{key:"getVideoWidth",value:function(){return this.get("videoWidth")}},{key:"getVideoHeight",value:function(){return this.get("videoHeight")}},{key:"getVideoUrl",value:function(){return this.get("videoUrl")}},{key:"getVolume",value:function(){return this.get("volume")}},{key:"setVolume",value:function(e){return this.set("volume",e)}}])&&r(e.prototype,t),n&&r(e,n),Player}();return e||(x=function(){for(var e,t=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],n=0,r=t.length,o={};n<r;n++)if((e=t[n])&&e[1]in document){for(n=0;n<e.length;n++)o[t[0][n]]=e[n];return o}return!1}(),C={fullscreenchange:x.fullscreenchange,fullscreenerror:x.fullscreenerror},j={request:function(o){return new Promise(function(e,t){function n(){j.off("fullscreenchange",n),e()}j.on("fullscreenchange",n);var r=(o=o||document.documentElement)[x.requestFullscreen]();r instanceof Promise&&r.then(n).catch(t)})},exit:function(){return new Promise(function(t,e){var n,r;j.isFullscreen?(n=function e(){j.off("fullscreenchange",e),t()},j.on("fullscreenchange",n),(r=document[x.exitFullscreen]())instanceof Promise&&r.then(n).catch(e)):t()})},on:function(e,t){var n=C[e];n&&document.addEventListener(n,t)},off:function(e,t){var n=C[e];n&&document.removeEventListener(n,t)}},Object.defineProperties(j,{isFullscreen:{get:function(){return Boolean(document[x.fullscreenElement])}},element:{enumerable:!0,get:function(){return document[x.fullscreenElement]}},isEnabled:{enumerable:!0,get:function(){return Boolean(document[x.fullscreenEnabled])}}}),q=j,function(e){function n(e){"console"in window&&console.error&&console.error("There was an error creating an embed: ".concat(e))}var t=0<arguments.length&&void 0!==e?e:document;[].slice.call(t.querySelectorAll("[data-vimeo-id], [data-vimeo-url]")).forEach(function(t){try{if(null!==t.getAttribute("data-vimeo-defer"))return;var e=_(t);F(s(e),e,t).then(function(e){return N(e,t)}).catch(n)}catch(e){n(e)}})}(),function(e){var r=0<arguments.length&&void 0!==e?e:document;window.VimeoPlayerResizeEmbeds_||(window.VimeoPlayerResizeEmbeds_=!0,window.addEventListener("message",function(e){if(c(e.origin)&&e.data&&"spacechange"===e.data.event)for(var t=r.querySelectorAll("iframe"),n=0;n<t.length;n++)if(t[n].contentWindow===e.source){t[n].parentElement.style.paddingBottom="".concat(e.data.data[0].bottom,"px");break}}))}(),function(e){var u=0<arguments.length&&void 0!==e?e:document;window.VimeoSeoMetadataAppended||(window.VimeoSeoMetadataAppended=!0,window.addEventListener("message",function(e){if(c(e.origin)){var t=E(e.data);if(t&&"ready"===t.event)for(var n,r=u.querySelectorAll("iframe"),o=0;o<r.length;o++){var i=r[o],a=i.contentWindow===e.source;n=i.src,/^https:\/\/player\.vimeo\.com\/video\/\d+/.test(n)&&a&&new Player(i).callMethod("appendVideoMetadata",window.location.href)}}}))}()),Player});

//triggers the navigation hamburger slide out
$(document).ready(function () {
  var buttonclicked;
  $('.nav-menu').click(function () {
    if (buttonclicked != true) {
      buttonclicked = true;
      $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').toggleClass('open');
      $('header nav').toggleClass('open-nav');
    }
    else {
      $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').toggleClass('open');
      $('header nav').toggleClass('open-nav');
    }
  });

  var buttonclickednight;
  $('.day-night-toggle').click(function () {
    if (buttonclickednight != true) {
      buttonclickednight = true;
      $('body').toggleClass('day-mode');
      console.log('day-mode');
    }
    else {
      $('body').toggleClass('day-mode');
    }
  });

});

  //Play Button on the hero
  $('.play-button').bind('click keypress', function (e) {
    e.preventDefault();

    var iframe = $(this).siblings(".vimeo-wrapper").children("iframe")[0];
    var player = new Vimeo.Player(iframe);

    $(this).fadeOut();
    $('.hide-video-1').fadeIn();
    console.log('play-button-1');
    $('.video-container-1 ').addClass('enlarge-video');
    
    player.ready().then(function() {
      player.setMuted(false);
      player.play();
    });

   
  });

  $('.hide-video').bind('click keypress', function (e) {
    e.preventDefault();

    var iframe = $(this).siblings(".vimeo-wrapper").children("iframe")[0];
    var player = new Vimeo.Player(iframe);

    $('.play-button-1').fadeIn();
    $(this).hide();
    $('.video-container-1 ').removeClass('enlarge-video');
    $('.play-video-1').show();
    
    player.ready().then(function() {
      player.setMuted(false);
      player.play();
    });
  });


// Sticky hamburger menu on tablet and mobile.
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(document).scrollTop() > 5) {
      $('header').addClass('fixed-header');
    }
    else {
      $('header').removeClass('fixed-header');
    }
  })
});



// AOS animation init
$(document).ready(function () {
  AOS.init({
    offset: 100, // offset (in px) from the original trigger point
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'linear', // default easing for AOS animations
    once: true,
    delay:0,
    mirror: true,
    disable: "mobile",

  });
});


// Custom words fading in animations
window.addEventListener('load', function () {
  $('.animated-text').each(function () {
    var text = $(this).text().split(' ');
    for (var i = 0, len = text.length; i < len; i++) {
      text[i] = '<span data-aos="flip-up" data-aos-delay="' + i * 3 + '00" class="word-' + i + '">' + text[i] + '</span>';
    }
    $(this).html(text.join(' '));
  })


  if (screen.width < 960) {
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 0.8,
      spaceBetween: 20,
      speed: 600,
      allowTouchMove: true,
      loop: true,
      centeredSlides: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: false,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
    });
  }
  else {

    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 4,
      spaceBetween: 20,
      speed: 600,
      allowTouchMove: true,
      loop: false,
      centeredSlides: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: false,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
    });
  }



    
  
  });


var swiper2 = new Swiper(".quote-swiper", {
  slidesPerView: 1,
  spaceBetween: 60,
  speed: 600,
  allowTouchMove: true,
  pagination: {
    el: ".swiper-pagination-2",
    clickable: true,
  },
});



document.addEventListener('aos:in:super-duper', ({ detail }) => {
  // console.log('animated in', detail);
  $(detail).removeClass('active-me');
});

document.addEventListener('aos:in:super-duper', ({ detail }) => {
  // console.log('animated in', detail);
  $(detail).removeClass('active-me');
});

var title_words = $('.sub-page-heading').text().split(" ");
$('.sub-page-heading').empty();
var zindex = 50;
$.each(title_words, function (i, v) {
  zindex--;
  $('.sub-page-heading').append($('<span style="z-index: ' + zindex + ';">').text(v));
});


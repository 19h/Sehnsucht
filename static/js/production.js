!function e(r,o,i){function u(T,b){if(!o[T]){if(!r[T]){var C="function"==typeof require&&require;if(!b&&C)return C(T,!0);if(v)return v(T,!0);var z=new Error("Cannot find module '"+T+"'");throw z.code="MODULE_NOT_FOUND",z}var t=o[T]={exports:{}};r[T][0].call(t.exports,function(e){var o=r[T][1][e];return u(o?o:e)},t,t.exports,e,r,o,i)}return o[T].exports}for(var v="function"==typeof require&&require,T=0;T<i.length;T++)u(i[T]);return u}({1:[function(e,r,o){"use strict";e("./ui.js"),e("./sse.js"),e("./ready.js")},{"./ready.js":2,"./sse.js":3,"./ui.js":4}],2:[function(e,r,o){"use strict";window.addEventListener("load",function(){var e=document.createElement("video");e.setAttribute("loop",!0),e.setAttribute("autoplay",!0);var r=document.createElement("source");r.src="https://r1.apx.pub/sly/chart.mp4";var o=document.createElement("source");r.src="https://r1.apx.pub/sly/chart.webm",e.appendChild(r),e.appendChild(o),document.body.appendChild(e)})},{}],3:[function(e,r,o){"use strict";function i(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e}function u(e){if(Array.isArray(e)){for(var r=0,o=Array(e.length);r<e.length;r++)o[r]=e[r];return o}return Array.from(e)}!function(){var e=["51377C496818552E263583A44C796DF3FB0BC71B","A6B0521C4C1FB91FB66398AAD523AD773E82E77E","38A42B8D7C0E6346F4A4821617740AEE86EA885B"],r=function(e){return"https://atlas.torproject.org/#details/"+e},o=function(o,i,u){var v=document.createElement("span");v.className=(u||"r"+(o+1)+"tarm")+" tarm";var T=i||document.createElement("a");i||(T.href=r(e[o]),T.innerHTML="apx"+(o+1));var b=document.createTextNode(" "),C=document.createElement("img");C.src="rtx.svg";var z=document.createElement("span");z.className="rx";var t=document.createElement("img");t.src="rtx.svg",t.className="stx";var n=document.createElement("span");n.className="tx";var a=document.createElement("img");a.src="rtx.svg";var c=document.createElement("span");return c.className="rxtx",[T,b,C,z,t,n,a,c].forEach(function(e){return v.appendChild(e)}),v},i=function(){var e=document.createElement("span");e.className="tarm-lnsum";var r=document.createElement("span");r.className="sum",r.innerHTML="∑";var i=o(null,r,"tarm-sum");return[e,i]},v=[];v.push.apply(v,u(e.map(function(e,r){return o(r)}))),v.push.apply(v,u(i())),v.forEach(function(e){return document.body.appendChild(e)})}(),function(){for(var e=function(){var e=document.createElement("img");return e.src="bars.svg",e.className="loader",e},r=1;4>r;++r)[".r"+r+"tarm .rx",".r"+r+"tarm .tx",".r"+r+"tarm .rxtx"].forEach(function(r){document.querySelector(r).appendChild(e())})}();var v=document.createElement("script");v.onload=function(){if(void 0===("undefined"==typeof io?"undefined":i(io)))throw new Error("Unblock socket.io for realtime traffic information about the apx exit node family");var e=io({path:"/io"}),r={rx:[],tx:[]},o=function(e,r,o){document.querySelector(e+" .rx").innerHTML=r.toFixed(3)+"m",document.querySelector(e+" .tx").innerHTML=o.toFixed(3)+"m",document.querySelector(e+" .rxtx").innerHTML=(r+o).toFixed(3)+"m"},u=function(){var e=r.rx.reduce(function(e,r){return e+r},0),i=r.tx.reduce(function(e,r){return e+r},0);o(".tarm-sum",e,i)},v=function(){var e=void 0;return function(){e||(e=setInterval(u,500),u())}}(),T=function(e,i){if(i["apx"+e].bw){var u=(i["apx"+e].bw[0]/131072*1e3|0)/1e3,T=(i["apx"+e].bw[1]/131072*1e3|0)/1e3;r.rx[e-1]=u,r.tx[e-1]=T,o(".r"+e+"tarm",u,T),v()}};e.on("tbw",function(e){e.apx1&&T(1,e),e.apx2&&T(2,e),e.apx3&&T(3,e)})},v.src="/io/socket.io.js",document.body.appendChild(v)},{}],4:[function(e,r,o){"use strict";function i(e){if(Array.isArray(e)){for(var r=0,o=Array(e.length);r<e.length;r++)o[r]=e[r];return o}return Array.from(e)}var u=function(){function e(e,r){var o=[],i=!0,u=!1,v=void 0;try{for(var T,b=e[Symbol.iterator]();!(i=(T=b.next()).done)&&(o.push(T.value),!r||o.length!==r);i=!0);}catch(C){u=!0,v=C}finally{try{!i&&b["return"]&&b["return"]()}finally{if(u)throw v}}return o}return function(r,o){if(Array.isArray(r))return r;if(Symbol.iterator in Object(r))return e(r,o);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),v=function(e,r,o){var i=document.createElement("canvas");return i.width=r,i.height=o,i.id=e,i},T=function(e){var r=u(e,2),o=r[0],i=r[1],v=document.createElement("a");return v.href=o,v.target="_blank",i&&v.appendChild(i),v};[v("overlay",200,210)].concat(i([["http://twitter.com/kenansulayman",v("twitter",45,37)],["https://www.xing.com/profiles/Kenan_Sulayman3",v("xing",31,36)],["http://facebook.com/kenansulayman",v("facebook",36,36)],["http://github.com/kenansulayman",v("github",37,36)],["http://de.linkedin.com/in/kenansulayman",v("linkedin",36,36)]].map(T))).forEach(function(e){return document.body.appendChild(e)});var b=document.getElementById("overlay").getContext("2d");b.save(),b.save(),b.beginPath(),b.moveTo(112.4,15.6),b.bezierCurveTo(110,14.1,109.5,10.7,109.5,10.7),b.bezierCurveTo(107.7,13.5,108.8,17.1,108.8,17.1),b.bezierCurveTo(110.8,17.1,112.4,15.6,112.4,15.6),b.closePath(),b.save(),b.moveTo(91.2,49.5),b.bezierCurveTo(91.2,49.5,103.7,56.7,105.8,68.4),b.bezierCurveTo(105.8,68.4,107.9,62.8,105.5,57.3),b.bezierCurveTo(105.5,57.3,111.8,61.4,114.4,70.3),b.bezierCurveTo(114.4,70.3,117.6,62.4,115.3,57.3),b.bezierCurveTo(115.3,57.3,122.5,59.5,124,65.3),b.bezierCurveTo(124,65.3,126.2,56.9,121.1,52.5),b.bezierCurveTo(121.1,52.5,128.2,52.3,131.7,57.9),b.bezierCurveTo(131.7,57.9,132.2,51.6,125,46.4),b.bezierCurveTo(117.9,41.1,114.5,31.9,121,26.7),b.bezierCurveTo(127.4,21.6,129.4,24.3,130.8,21.1),b.bezierCurveTo(132.2,18,127.3,14.7,122.3,17.3),b.bezierCurveTo(122.3,17.3,121.9,14.4,118.7,14.9),b.bezierCurveTo(115.5,15.5,110.7,19.3,107.1,18.2),b.bezierCurveTo(107.1,18.2,109.9,21.3,108.1,25.5),b.bezierCurveTo(108.1,25.5,108,21.1,104.3,18.3),b.bezierCurveTo(100.7,15.6,99.6,10,99.6,10),b.bezierCurveTo(99.6,10,93.6,17,98.9,26.7),b.bezierCurveTo(98.9,26.7,89.9,33.7,91.2,49.5),b.closePath(),b.moveTo(119,19.4),b.bezierCurveTo(119,19.4,117.1,23.4,112.9,22.9),b.bezierCurveTo(112.9,22.9,111.7,20.3,119,19.4),b.closePath(),b.restore(),b.moveTo(85.4,194.4),b.bezierCurveTo(89.7,199.6,88,205.4,88,205.4),b.bezierCurveTo(91.6,202.7,92.1,196.5,92.1,194.7),b.bezierCurveTo(89.4,195.1,87.1,194.8,85.4,194.4),b.closePath(),b.moveTo(118.6,33.3),b.bezierCurveTo(118.7,37,121,39,127.1,38.7),b.bezierCurveTo(133.2,38.5,135.1,35.2,135.1,35.2),b.bezierCurveTo(135.1,35.2,132.6,36.7,127.8,35.9),b.bezierCurveTo(123.1,35,125.2,30.9,131.5,28.1),b.bezierCurveTo(137.8,25.3,143.5,27.5,143.5,27.5),b.bezierCurveTo(139.3,20.7,132.6,20.6,132.6,20.6),b.bezierCurveTo(131.6,24.6,131.1,22.9,124.7,25.7),b.bezierCurveTo(118.4,28.4,118.6,33.3,118.6,33.3),b.closePath(),b.moveTo(178.3,54.8),b.bezierCurveTo(177.7,58,175.6,58.7,175.6,58.7),b.bezierCurveTo(180.1,58.3,181.2,61.8,181.2,61.8),b.bezierCurveTo(181.9,58.1,178.3,54.8,178.3,54.8),b.closePath(),b.moveTo(95.5,193.9),b.bezierCurveTo(101.7,196.6,102.8,202.5,102.8,202.5),b.bezierCurveTo(104.9,198.2,102,192,101.4,190.8),b.bezierCurveTo(99.4,192.3,97.4,193.3,95.5,193.9),b.closePath(),b.moveTo(146.6,84.5),b.bezierCurveTo(148,83.3,149.5,81.7,151,79.8),b.bezierCurveTo(159.2,69.3,162.6,72.8,162.6,72.8),b.bezierCurveTo(162.6,72.8,162.7,69.6,159.5,70.2),b.bezierCurveTo(159.5,70.2,163.9,65.5,168.1,66.7),b.bezierCurveTo(168.1,66.7,167.6,63,164.3,63.5),b.bezierCurveTo(164.3,63.5,166.2,59.7,171.4,59.9),b.bezierCurveTo(171.4,59.9,170.3,57.5,167.3,57.9),b.bezierCurveTo(168.1,57.3,168.8,56.7,169.2,56),b.bezierCurveTo(169.2,56,169.2,56,169.2,56),b.bezierCurveTo(169.8,57.1,170.8,58,172,58.3),b.bezierCurveTo(174.5,59,176.9,57.6,177.6,55.2),b.bezierCurveTo(177.9,54.1,177.8,53,177.3,52.1),b.bezierCurveTo(177.3,52,177.2,51.9,177.2,51.8),b.bezierCurveTo(177.2,51.7,177.2,51.7,177.1,51.7),b.bezierCurveTo(176.5,50.7,175.6,49.8,174.3,49.4),b.bezierCurveTo(171.4,48.5,168.1,49.8,167.2,50.2),b.bezierCurveTo(167.2,50.2,167.2,50.2,167.2,50.2),b.bezierCurveTo(167.5,49.4,167.8,48.8,168.2,48.3),b.bezierCurveTo(169.5,48.7,171,48.5,172.2,47.7),b.bezierCurveTo(174.7,46.3,175.4,43.1,173.9,40.7),b.bezierCurveTo(173.3,39.7,172.3,39,171.2,38.6),b.bezierCurveTo(171,38.5,170.9,38.5,170.8,38.5),b.bezierCurveTo(170.7,38.5,170.7,38.4,170.6,38.4),b.bezierCurveTo(169.3,38.1,167.9,38.3,166.6,39.1),b.bezierCurveTo(164.9,40,163.7,41.5,163,43),b.bezierCurveTo(162.8,42.6,162.8,42.2,162.7,41.8),b.bezierCurveTo(162.7,41.3,162.8,40.7,162.9,40.2),b.bezierCurveTo(164.3,40.1,165.6,39.4,166.5,38.2),b.bezierCurveTo(168.2,36,167.7,32.8,165.4,31.1),b.bezierCurveTo(164.4,30.3,163.3,30,162.1,30.1),b.bezierCurveTo(162,30.1,161.8,30.1,161.7,30.1),b.bezierCurveTo(161.6,30.1,161.6,30.1,161.6,30.1),b.bezierCurveTo(160.3,30.3,159,31,158,32.2),b.bezierCurveTo(155.9,34.8,155.9,38.7,156,39.9),b.bezierCurveTo(154.8,39,153.5,38.5,153.5,38.5),b.bezierCurveTo(157.2,43.9,155.8,50.7,154.8,54),b.bezierCurveTo(153.5,57.1,151.2,60.1,147.8,63.5),b.bezierCurveTo(148,62,147.7,61.1,147.7,61.1),b.bezierCurveTo(146.5,63,145.3,64.6,144.2,66),b.bezierCurveTo(145.4,68.7,148.1,75.7,146.6,84.5),b.closePath(),b.moveTo(175.3,45.1),b.bezierCurveTo(178.4,41,182.2,42.8,182.2,42.8),b.bezierCurveTo(179.6,39.4,174.1,39.8,174.1,39.8),b.bezierCurveTo(176.4,42.8,175.3,45.1,175.3,45.1),b.closePath(),b.moveTo(168.3,34.6),b.bezierCurveTo(169.7,29.7,173.9,30,173.9,30),b.bezierCurveTo(170.3,27.7,165.3,30.2,165.3,30.2),b.bezierCurveTo(168.5,32.1,168.3,34.6,168.3,34.6),b.closePath(),b.moveTo(166.2,160.3),b.bezierCurveTo(166.2,162.8,165.8,165,165.2,166.9),b.bezierCurveTo(171,163.4,176.4,166,176.4,166),b.bezierCurveTo(174.2,161.8,167.5,160.5,166.2,160.3),b.closePath(),b.moveTo(176.3,97.7),b.bezierCurveTo(176.7,99,177.8,100.1,179.2,100.7),b.bezierCurveTo(181.8,101.7,184.7,100.4,185.8,97.8),b.bezierCurveTo(186.2,96.7,186.2,95.4,185.9,94.4),b.bezierCurveTo(185.8,94.2,185.8,94.1,185.7,94),b.bezierCurveTo(185.7,93.9,185.7,93.9,185.7,93.8),b.bezierCurveTo(185.1,92.6,184.2,91.6,182.7,90.9),b.bezierCurveTo(181,90.1,179.1,90.1,177.5,90.4),b.bezierCurveTo(177.7,90.1,177.9,89.8,178.2,89.5),b.bezierCurveTo(178.7,89.1,179.1,88.9,179.6,88.7),b.bezierCurveTo(180.5,89.7,181.9,90.4,183.4,90.4),b.bezierCurveTo(186.2,90.4,188.5,88.1,188.5,85.3),b.bezierCurveTo(188.5,84,188,82.9,187.3,82),b.bezierCurveTo(187.2,81.9,187.1,81.8,187,81.7),b.bezierCurveTo(187,81.7,186.9,81.6,186.9,81.6),b.bezierCurveTo(186,80.7,184.7,80.1,183.1,80),b.bezierCurveTo(179.8,79.8,176.7,82.2,175.7,83),b.bezierCurveTo(175.8,81.4,175.4,80.1,175.4,80.1),b.bezierCurveTo(173.3,86.3,166.9,89.2,163.7,90.3),b.bezierCurveTo(160.4,91.2,156.7,91.2,151.9,90.5),b.bezierCurveTo(153.2,89.7,153.8,88.9,153.8,88.9),b.bezierCurveTo(139.9,90,133.6,85,130.9,81.4),b.bezierCurveTo(129.8,79.7,129.6,78.4,129.6,78.4),b.bezierCurveTo(135.4,85.7,144,86.5,144,86.5),b.bezierCurveTo(148.8,69.5,133.1,53.7,133.1,53.7),b.bezierCurveTo(134.4,58.6,132.7,63.5,132.7,63.5),b.bezierCurveTo(130.7,57.1,125.8,55.6,125.8,55.6),b.bezierCurveTo(128.6,64.1,124.1,70.7,124.1,70.7),b.bezierCurveTo(123.5,64,118.1,61.4,118.1,61.4),b.bezierCurveTo(118.7,69,114,75,114,75),b.bezierCurveTo(113.6,69.2,108.5,63.4,108.5,63.4),b.bezierCurveTo(109.2,68.5,105.8,71.8,104.8,72.7),b.bezierCurveTo(104.7,72.7,104.7,72.6,104.6,72.6),b.bezierCurveTo(104.2,68.8,101.7,58.5,89.1,51.5),b.bezierCurveTo(73.2,42.7,21.7,33.3,1.9,0),b.bezierCurveTo(1.9,0,5.2,27.3,50.7,45.9),b.bezierCurveTo(68.1,53.1,79.4,57.5,87,60.7),b.bezierCurveTo(86.2,62.9,86.2,67,95.3,70.8),b.bezierCurveTo(95.3,70.8,90.4,74.9,100.9,79.2),b.bezierCurveTo(100.9,79.2,97.7,83.1,107.3,86.7),b.bezierCurveTo(107.3,86.7,112.7,94.5,107.8,100.3),b.bezierCurveTo(107.8,100.3,112.5,99.6,113.3,96.6),b.bezierCurveTo(113.3,96.6,116.8,102,112.9,105.4),b.bezierCurveTo(112.9,105.4,121.8,106.4,123.8,97.2),b.bezierCurveTo(125.9,99.1,131,102.5,140.7,102.7),b.bezierCurveTo(154,103,153.3,107.9,153.3,107.9),b.bezierCurveTo(153.3,107.9,156,106,153.5,103.8),b.bezierCurveTo(153.5,103.8,159.9,104.5,161.4,108.6),b.bezierCurveTo(161.4,108.6,164.1,106,161.7,103.7),b.bezierCurveTo(161.7,103.7,165.9,102.9,168.8,107.2),b.bezierCurveTo(168.8,107.2,170.2,105,168.1,102.8),b.bezierCurveTo(169,103.1,169.9,103.2,170.7,103.2),b.bezierCurveTo(170.7,103.2,170.7,103.2,170.7,103.2),b.bezierCurveTo(170.1,104.3,170,105.6,170.5,106.8),b.bezierCurveTo(171.4,109.2,174.1,110.3,176.4,109.4),b.bezierCurveTo(177.4,109,178.2,108.3,178.7,107.4),b.bezierCurveTo(178.8,107.3,178.8,107.1,178.9,107),b.bezierCurveTo(178.9,107,178.9,107,178.9,106.9),b.bezierCurveTo(179.4,105.9,179.5,104.6,179,103.3),b.bezierCurveTo(178.1,100.5,175.1,98.6,174.2,98.1),b.bezierCurveTo(174.2,98.1,174.2,98.1,174.2,98.1),b.bezierCurveTo(174.9,97.8,175.6,97.7,176.3,97.7),b.closePath(),b.moveTo(172.4,109.9),b.bezierCurveTo(175.4,113.3,173.2,116.3,173.2,116.3),b.bezierCurveTo(176.6,114.6,177.1,109.8,177.1,109.8),b.bezierCurveTo(174.1,111.2,172.4,109.9,172.4,109.9),b.closePath(),b.moveTo(189.1,84.7),b.bezierCurveTo(189.5,88.4,187.4,89.7,187.4,89.7),b.bezierCurveTo(192.1,87.9,194.4,91.4,194.4,91.4),b.bezierCurveTo(194.1,87.2,189.1,84.7,189.1,84.7),b.closePath(),b.moveTo(183.1,101.5),b.bezierCurveTo(188.2,101.6,189,105.7,189,105.7),b.bezierCurveTo(190.3,101.6,186.6,97.5,186.6,97.5),b.bezierCurveTo(185.6,101.1,183.1,101.5,183.1,101.5),b.closePath(),b.moveTo(163.9,170.1),b.bezierCurveTo(162.6,172.6,161,174.3,159.7,175.4),b.bezierCurveTo(166.5,174.9,170.2,179.8,170.2,179.8),b.bezierCurveTo(170.1,175.2,165.3,171.2,163.9,170.1),b.closePath(),b.moveTo(111.1,119.7),b.bezierCurveTo(111.1,119.7,118.5,122.6,120.5,129.2),b.bezierCurveTo(120.5,129.2,121.1,120.3,127.7,114.4),b.bezierCurveTo(134.3,108.4,136.7,104.5,136.7,104.5),b.bezierCurveTo(136.7,104.5,129.8,104.9,125.2,101.8),b.bezierCurveTo(125.2,101.8,120.5,110.7,107.1,107.8),b.bezierCurveTo(107.1,107.8,112.4,105.3,112.8,100.7),b.bezierCurveTo(112.8,100.7,107.6,104.7,103.1,102),b.bezierCurveTo(103.1,102,111,96.6,106,88.8),b.bezierCurveTo(106,88.8,103.1,88.3,102.8,87.2),b.bezierCurveTo(102.8,87.2,102.9,113.2,86.7,121.3),b.bezierCurveTo(70.4,129.3,69.4,109.9,69.4,109.9),b.bezierCurveTo(69.4,109.9,66.8,113.7,67.5,118.3),b.bezierCurveTo(63.8,116,58.1,111.2,52,101.9),b.bezierCurveTo(46,92.7,37.5,88,30.1,88),b.bezierCurveTo(26.5,88,23.1,89.1,20.6,91.5),b.bezierCurveTo(18,94,16.6,97.6,16.6,101.7),b.bezierCurveTo(16.6,101.8,16.6,101.9,16.6,102),b.bezierCurveTo(16.7,106.6,18.9,110.5,21.8,113.6),b.bezierCurveTo(26.2,118.4,32.4,122.4,37.9,127.5),b.bezierCurveTo(43.4,132.6,48.3,138.6,50.6,147.2),b.bezierCurveTo(51.3,149.4,51.5,151.4,51.5,153.2),b.bezierCurveTo(51.5,157.2,50.2,159.8,48.3,161.7),b.bezierCurveTo(46.6,163.3,44.3,164.3,41.6,164.5),b.bezierCurveTo(36.4,164.1,27.4,161.9,27.3,150.9),b.bezierCurveTo(27,135.5,20.4,126.4,20.4,126.4),b.bezierCurveTo(20.4,126.4,22.8,133.9,20,140),b.bezierCurveTo(20,140,15.9,118.5,0,109.5),b.bezierCurveTo(0,109.5,9.7,125.1,8.6,138.9),b.bezierCurveTo(8.6,138.9,5.4,137.8,5.4,132.5),b.bezierCurveTo(5.4,132.5,-.2,144.7,11.8,155.4),b.bezierCurveTo(11.8,155.4,7.3,155.8,4.1,151.8),b.bezierCurveTo(4.1,151.8,7.7,167.2,28.8,171.1),b.bezierCurveTo(41.9,173.5,50,170.1,53.9,164),b.bezierCurveTo(56.1,161.2,57.3,157.5,57.3,153.2),b.bezierCurveTo(57.3,150.8,57,148.3,56.3,145.6),b.bezierCurveTo(52.7,132.3,43.6,124.4,35.9,118.2),b.bezierCurveTo(32,115.1,28.5,112.4,26.1,109.7),b.bezierCurveTo(23.7,107.1,22.5,104.7,22.4,101.9),b.bezierCurveTo(22.4,101.8,22.4,101.8,22.4,101.7),b.bezierCurveTo(22.4,98.8,23.3,96.9,24.6,95.7),b.bezierCurveTo(25.8,94.5,27.7,93.8,30.1,93.8),b.bezierCurveTo(35,93.7,42,97.2,47.2,105.1),b.bezierCurveTo(52.6,113.4,57.9,118.5,62,121.6),b.bezierCurveTo(59.6,122.2,57,123.8,54.5,127.3),b.bezierCurveTo(54.5,127.3,59.3,123.6,70.9,128.7),b.bezierCurveTo(69.1,129,66.8,129.7,65.1,131.4),b.bezierCurveTo(65.1,131.4,78,129,88.3,137.4),b.bezierCurveTo(97.7,145,94.4,152.9,90,153.3),b.bezierCurveTo(89.5,152.3,87.8,150,83.6,152.3),b.bezierCurveTo(78.5,155.3,73.8,163.8,75.1,178.1),b.bezierCurveTo(75.1,178.1,76.2,175.2,77.6,172.5),b.bezierCurveTo(77.6,172.6,77.6,172.8,77.7,173),b.bezierCurveTo(79.3,184.3,80.2,191.9,87.3,192.8),b.bezierCurveTo(92.2,193.8,98,191.3,100,189.9),b.bezierCurveTo(104.1,187,106.5,181.7,100.8,179.9),b.bezierCurveTo(95.2,178.1,93.4,181.5,91.5,181.5),b.bezierCurveTo(91.2,181.5,91,181.4,90.8,181.2),b.bezierCurveTo(90.6,180.6,90.5,179.9,90.5,179.1),b.bezierCurveTo(90.7,173.3,88.9,161.4,100.2,162),b.bezierCurveTo(111.5,162.7,124.8,151.1,121,138.4),b.bezierCurveTo(117.1,125.6,111.1,119.7,111.1,119.7),b.closePath(),b.moveTo(106.7,183.6),b.bezierCurveTo(106.2,185.6,105.2,187.5,103.5,189.1),b.bezierCurveTo(103.2,189.5,103,189.7,103,189.7),b.bezierCurveTo(109.9,187.6,114.6,191.8,114.6,191.8),b.bezierCurveTo(113.7,187.4,108.3,184.4,106.7,183.6),b.closePath(),b.moveTo(166.2,158.3),b.bezierCurveTo(168.5,151.6,174.7,150.2,174.7,150.2),b.bezierCurveTo(170.6,148.4,165,150.9,163.3,151.8),b.bezierCurveTo(164.7,153.4,165.7,155.3,166,157.6),b.bezierCurveTo(166.1,158,166.2,158.3,166.2,158.3),b.closePath(),b.moveTo(156.9,154.4),b.bezierCurveTo(152.2,157.9,153.9,161.4,152.8,162.9),b.bezierCurveTo(152.7,163.1,152.4,163.2,152.1,163.3),b.bezierCurveTo(151.6,163.1,151,162.8,150.3,162.3),b.bezierCurveTo(145.7,158.8,135,153.3,142.1,144.5),b.bezierCurveTo(148.1,137,147.9,123.2,139.9,116.6),b.bezierCurveTo(138.5,115.4,136.9,114.5,135,113.8),b.bezierCurveTo(134.1,113.5,133.2,113.2,132.3,113),b.bezierCurveTo(130.2,114.6,122.3,121.6,122.3,132.6),b.bezierCurveTo(122.3,135.6,122.5,137.7,122.8,139.2),b.bezierCurveTo(128.7,140.2,130.7,144.9,129,147.6),b.bezierCurveTo(128,147.5,125.1,147.6,124.5,152.3),b.bezierCurveTo(123.9,158.2,128.1,167,140.5,174.3),b.bezierCurveTo(140.5,174.3,138.8,171.6,137.4,169),b.bezierCurveTo(137.5,169,137.6,169.1,137.8,169.2),b.bezierCurveTo(147.9,174.4,154.6,178.2,159.6,173),b.bezierCurveTo(163.2,169.5,164.6,163.4,164.6,160.9),b.bezierCurveTo(164.6,155.9,161.7,150.9,156.9,154.4),b.closePath(),b.moveTo(71.5,56.5),b.bezierCurveTo(67.1,54.7,61.9,52.6,55.9,50.1),b.bezierCurveTo(44.2,46.1,31.7,41,23.6,35.6),b.bezierCurveTo(23.6,35.6,29.8,52.6,62.3,61.6),b.bezierCurveTo(62.3,61.6,37.6,57.5,29.4,50.9),b.bezierCurveTo(29.4,50.9,38.2,67.6,64.6,71.9),b.bezierCurveTo(64.6,71.9,55.2,73,45.1,68.7),b.bezierCurveTo(45.1,68.7,47.4,77.9,63.8,80.7),b.bezierCurveTo(77.7,83.1,95.2,90.7,98.4,102.6),b.bezierCurveTo(100.8,94.7,100.8,87.3,100.8,87.2),b.lineTo(100.8,85.3),b.bezierCurveTo(99.6,84.3,98.9,83.2,98.6,82),b.bezierCurveTo(98.4,81.4,98.4,80.8,98.5,80.3),b.bezierCurveTo(94.7,78.4,92.6,76.4,92.3,74),b.bezierCurveTo(92.1,73.1,92.3,72.3,92.5,71.7),b.bezierCurveTo(85.7,68.3,84.5,64.5,84.8,61.8),b.bezierCurveTo(81.2,60.3,76.8,58.6,71.5,56.5),b.closePath(),b.fillStyle="rgb(255, 255, 255)",b.fill(),b.restore();var C=document.getElementById("linkedin").getContext("2d");C.save(),C.save(),C.beginPath(),C.moveTo(0,33.3),C.bezierCurveTo(0,22.9,0,12.6,0,2.3),C.bezierCurveTo(0,2.2,0,2.2,0,2.1),C.bezierCurveTo(.2,1.1,.9,.4,1.8,.1),C.bezierCurveTo(2,.1,2.1,.1,2.2,0),C.bezierCurveTo(12.6,0,22.9,0,33.3,0),C.bezierCurveTo(33.3,.1,33.4,.1,33.4,.1),C.bezierCurveTo(34.2,.3,34.8,.7,35.2,1.5),C.bezierCurveTo(35.3,1.7,35.4,2,35.4,2.3),C.bezierCurveTo(35.4,12.6,35.4,22.9,35.4,33.1),C.bezierCurveTo(35.4,33.2,35.4,33.2,35.4,33.2),C.bezierCurveTo(35.3,34.1,34.8,34.7,34.1,35.1),C.bezierCurveTo(33.8,35.3,33.4,35.4,33.1,35.4),C.bezierCurveTo(22.8,35.4,12.5,35.4,2.3,35.4),C.bezierCurveTo(2.2,35.4,2.2,35.4,2.2,35.4),C.bezierCurveTo(1.1,35.2,.4,34.6,.1,33.6),C.bezierCurveTo(.1,33.5,.1,33.4,0,33.3),C.closePath(),C.moveTo(13.8,21.7),C.bezierCurveTo(13.8,21.7,13.8,21.7,13.8,21.7),C.bezierCurveTo(13.8,24.5,13.8,27.2,13.8,29.9),C.bezierCurveTo(13.8,30.2,13.8,30.2,14.1,30.2),C.bezierCurveTo(15.7,30.2,17.3,30.2,18.9,30.2),C.bezierCurveTo(19,30.2,19,30.1,19,30),C.bezierCurveTo(19,27.2,19,24.4,19,21.5),C.bezierCurveTo(19,20.8,19.1,20.2,19.3,19.5),C.bezierCurveTo(19.5,18.7,20,18.1,20.7,17.8),C.bezierCurveTo(21.4,17.5,22.1,17.4,22.8,17.6),C.bezierCurveTo(23.8,17.7,24.3,18.3,24.6,19.2),C.bezierCurveTo(24.9,19.9,24.9,20.7,24.9,21.5),C.bezierCurveTo(24.9,24.3,24.9,27.2,24.9,30),C.bezierCurveTo(24.9,30.2,25,30.2,25.1,30.2),C.bezierCurveTo(26.7,30.2,28.4,30.2,30,30.2),C.bezierCurveTo(30.2,30.2,30.2,30.1,30.2,30),C.bezierCurveTo(30.2,27.1,30.2,24.2,30.2,21.3),C.bezierCurveTo(30.2,20.3,30.2,19.3,30,18.3),C.bezierCurveTo(29.9,17.5,29.7,16.6,29.4,15.8),C.bezierCurveTo(28.8,14.7,28,13.8,26.8,13.4),C.bezierCurveTo(26.1,13.1,25.4,13,24.7,12.9),C.bezierCurveTo(23.8,12.8,22.9,12.9,22,13.1),C.bezierCurveTo(20.7,13.6,19.7,14.3,19,15.5),C.bezierCurveTo(18.9,15.5,18.9,15.6,18.9,15.6),C.bezierCurveTo(18.8,15.6,18.8,15.5,18.8,15.5),C.bezierCurveTo(18.8,14.8,18.8,14.1,18.8,13.4),C.bezierCurveTo(18.8,13.3,18.8,13.3,18.7,13.3),C.bezierCurveTo(17.1,13.3,15.5,13.3,13.9,13.3),C.bezierCurveTo(13.8,13.3,13.8,13.3,13.8,13.4),C.bezierCurveTo(13.8,16.2,13.8,19,13.8,21.7),C.closePath(),C.moveTo(10.5,21.8),C.bezierCurveTo(10.5,19,10.5,16.2,10.5,13.5),C.bezierCurveTo(10.5,13.3,10.5,13.3,10.3,13.3),C.bezierCurveTo(8.7,13.3,7,13.3,5.4,13.3),C.bezierCurveTo(5.3,13.3,5.2,13.3,5.2,13.4),C.bezierCurveTo(5.3,19,5.3,24.5,5.2,30),C.bezierCurveTo(5.2,30.2,5.3,30.2,5.4,30.2),C.bezierCurveTo(7,30.2,8.7,30.2,10.3,30.2),C.bezierCurveTo(10.5,30.2,10.5,30.2,10.5,30),C.bezierCurveTo(10.5,27.2,10.5,24.5,10.5,21.8),C.closePath(),C.moveTo(7.9,4.9),C.bezierCurveTo(6.2,4.9,4.8,6.3,4.8,7.9),C.bezierCurveTo(4.8,9.6,6.2,11,7.8,11),C.bezierCurveTo(9.5,11,10.9,9.7,10.9,7.9),C.bezierCurveTo(10.9,6.3,9.6,4.9,7.9,4.9),C.closePath(),C.fillStyle="rgb(255, 255, 255)",C.fill(),C.restore(),C.restore();var z=document.getElementById("github").getContext("2d");z.save(),z.beginPath(),z.moveTo(18.2,0),z.bezierCurveTo(8.1,0,0,8.1,0,18.2),z.bezierCurveTo(0,26.2,5.2,33.1,12.4,35.5),z.bezierCurveTo(13.4,35.6,13.7,35.1,13.7,34.6),z.bezierCurveTo(13.7,34.2,13.7,33,13.7,31.5),z.bezierCurveTo(8.6,32.6,7.5,29.1,7.5,29.1),z.bezierCurveTo(6.7,27,5.5,26.4,5.5,26.4),z.bezierCurveTo(3.9,25.3,5.6,25.3,5.6,25.3),z.bezierCurveTo(7.5,25.4,8.4,27.2,8.4,27.2),z.bezierCurveTo(10,29.9,12.7,29.1,13.7,28.7),z.bezierCurveTo(13.9,27.5,14.4,26.7,14.9,26.2),z.bezierCurveTo(10.8,25.8,6.6,24.2,6.6,17.2),z.bezierCurveTo(6.6,15.3,7.3,13.6,8.5,12.4),z.bezierCurveTo(8.3,11.9,7.6,10.1,8.6,7.5),z.bezierCurveTo(8.6,7.5,10.2,7.1,13.6,9.4),z.bezierCurveTo(15.1,9,16.7,8.8,18.2,8.8),z.bezierCurveTo(19.7,8.8,21.3,9,22.8,9.4),z.bezierCurveTo(26.2,7.1,27.8,7.5,27.8,7.5),z.bezierCurveTo(28.7,10.1,28.1,11.9,27.9,12.4),z.bezierCurveTo(29.1,13.6,29.8,15.3,29.8,17.2),z.bezierCurveTo(29.8,24.2,25.6,25.8,21.5,26.2),z.bezierCurveTo(22.2,26.8,22.7,27.9,22.7,29.6),z.bezierCurveTo(22.7,32,22.7,34,22.7,34.6),z.bezierCurveTo(22.7,35.1,23,35.6,24,35.5),z.bezierCurveTo(31.2,33.1,36.4,26.2,36.4,18.2),z.bezierCurveTo(36.4,8.1,28.3,0,18.2,0),z.closePath(),z.fillStyle="rgb(255, 255, 255)",z.fill("evenodd"),z.restore();var t=document.getElementById("facebook").getContext("2d");t.save(),t.beginPath(),t.moveTo(30.4,0),t.lineTo(6,0),t.bezierCurveTo(2.8,0,0,2.3,0,5.5),t.lineTo(0,29.9),t.bezierCurveTo(0,33.1,2.8,35.9,6,35.9),t.lineTo(21.1,35.9),t.bezierCurveTo(21.1,31.2,21.1,26,21.1,21.4),t.bezierCurveTo(20.1,21.4,19.2,21.4,18.2,21.3),t.bezierCurveTo(18.2,19.7,18.2,18.1,18.2,16.5),t.bezierCurveTo(19.2,16.5,20.1,16.5,21.1,16.5),t.bezierCurveTo(21.1,14.9,21.1,13.3,21.1,11.8),t.bezierCurveTo(21.2,10.5,21.7,9.3,22.6,8.4),t.bezierCurveTo(23.7,7.3,25.3,7,26.8,6.9),t.bezierCurveTo(28.4,6.9,30,6.9,31.6,6.9),t.bezierCurveTo(31.6,8.6,31.6,10.3,31.6,12),t.bezierCurveTo(30.6,12,29.5,12,28.5,12),t.bezierCurveTo(27.9,11.9,27.2,12.4,27.1,13.1),t.bezierCurveTo(27.1,14.2,27.1,15.3,27.1,16.4),t.bezierCurveTo(28.6,16.4,30.1,16.4,31.6,16.4),t.bezierCurveTo(31.5,18.1,31.3,19.7,31,21.3),t.bezierCurveTo(29.7,21.3,28.4,21.4,27.1,21.4),t.bezierCurveTo(27,26,27.1,31.2,27,35.9),t.lineTo(30.4,35.9),t.bezierCurveTo(33.6,35.9,35.9,33.1,35.9,29.9),t.lineTo(35.9,5.5),t.bezierCurveTo(35.9,2.3,33.6,0,30.4,0),t.closePath(),t.fillStyle="rgb(255, 255, 255)",t.fill(),t.restore();var n=document.getElementById("xing").getContext("2d");n.save(),n.beginPath(),n.moveTo(2.8,7.1),n.bezierCurveTo(2.5,7.1,2.2,7.2,2.1,7.4),n.bezierCurveTo(1.9,7.7,2,7.9,2.1,8.2),n.lineTo(5.6,14.3),n.bezierCurveTo(5.6,14.3,5.6,14.3,5.6,14.3),n.lineTo(.1,24.1),n.bezierCurveTo(-0,24.3,-0,24.6,.1,24.9),n.bezierCurveTo(.2,25.1,.5,25.2,.8,25.2),n.lineTo(6,25.2),n.bezierCurveTo(6.7,25.2,7.1,24.7,7.4,24.2),n.bezierCurveTo(7.4,24.2,12.8,14.7,13,14.3),n.bezierCurveTo(13,14.3,9.4,8.1,9.4,8.1),n.bezierCurveTo(9.2,7.6,8.8,7.1,8,7.1),n.lineTo(2.8,7.1),n.closePath(),n.fillStyle="rgb(255, 255, 255)",n.fill(),n.beginPath(),n.moveTo(24.6,0),n.bezierCurveTo(23.8,0,23.5,.5,23.2,1),n.bezierCurveTo(23.2,1,12,20.8,11.7,21.5),n.bezierCurveTo(11.7,21.5,19,35,19,35),n.bezierCurveTo(19.3,35.5,19.7,36,20.5,36),n.lineTo(25.7,36),n.bezierCurveTo(26,36,26.2,35.9,26.3,35.6),n.bezierCurveTo(26.5,35.4,26.5,35.1,26.3,34.8),n.lineTo(19,21.5),n.bezierCurveTo(19,21.5,19,21.5,19,21.4),n.lineTo(30.5,1.1),n.bezierCurveTo(30.7,.8,30.7,.6,30.5,.3),n.bezierCurveTo(30.4,.1,30.1,0,29.8,0),n.lineTo(24.6,0),n.closePath(),n.fill(),n.restore();var a=document.getElementById("twitter").getContext("2d");a.save(),a.beginPath(),a.moveTo(44.4,4.3),a.bezierCurveTo(42.8,5,41,5.5,39.2,5.7),a.bezierCurveTo(41.1,4.6,42.5,2.8,43.2,.7),a.bezierCurveTo(41.4,1.7,39.5,2.5,37.4,2.9),a.bezierCurveTo(35.7,1.1,33.4,0,30.8,0),a.bezierCurveTo(25.7,0,21.6,4.1,21.6,9.1),a.bezierCurveTo(21.6,9.8,21.7,10.5,21.9,11.2),a.bezierCurveTo(14.3,10.8,7.6,7.2,3.1,1.7),a.bezierCurveTo(2.3,3,1.9,4.6,1.9,6.3),a.bezierCurveTo(1.9,9.4,3.5,12.2,5.9,13.8),a.bezierCurveTo(4.4,13.8,3,13.4,1.8,12.7),a.bezierCurveTo(1.8,12.7,1.8,12.8,1.8,12.8),a.bezierCurveTo(1.8,17.2,4.9,20.9,9.1,21.7),a.bezierCurveTo(8.3,22,7.5,22.1,6.7,22.1),a.bezierCurveTo(6.1,22.1,5.5,22,5,21.9),a.bezierCurveTo(6.1,25.5,9.5,28.2,13.5,28.2),a.bezierCurveTo(10.4,30.7,6.4,32.1,2.2,32.1),a.bezierCurveTo(1.4,32.1,.7,32.1,0,32),a.bezierCurveTo(4,34.6,8.8,36.1,14,36.1),a.bezierCurveTo(30.7,36.1,39.9,22.2,39.9,10.2),a.bezierCurveTo(39.9,9.8,39.9,9.4,39.9,9),a.bezierCurveTo(41.7,7.7,43.2,6.1,44.4,4.3),a.closePath(),a.fillStyle="rgb(255, 255, 255)",a.fill(),a.restore()},{}]},{},[1]);
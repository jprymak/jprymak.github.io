!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);n(1);function r(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,i=!0,u=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return i=e.done,e},e:function(e){u=!0,c=e},f:function(){try{i||null==n.return||n.return()}finally{if(u)throw c}}}}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var a=document.querySelector(".projects__wrapper--js");fetch("https://api.github.com/users/jprymak/repos").then((function(e){return e.json()})).then((function(e){var t,n=r(e);try{for(n.s();!(t=n.n()).done;){var o=t.value,c=o.name,i=o.description,u=o.html_url,l=o.homepage,s=document.createElement("div");s.setAttribute("class","project");var f=document.createElement("div");f.setAttribute("class","project__top");var p=document.createElement("div");p.setAttribute("class","project__info");var d='\n<span class="grid-item-1">project:</span><p class="project-name">'.concat(c,'</p>\n<span class="grid-item-2">description:</span><p class="project-description">').concat(i,'</p>\n<span class="grid-item-3">demo:</span><a href="').concat(l,'" class="project-demo">&lt;<u class="link">see here</u>&gt;</a>\n<span class="grid-item-4">github:</span><a href="').concat(u,'" class="project-github">&lt;<u class="link">source code</u>&gt;</a>\n\n');s.appendChild(f),s.appendChild(p),p.innerHTML+=d,a.appendChild(s)}}catch(e){n.e(e)}finally{n.f()}})).catch((function(e){console.log(e)}))},function(e,t,n){}]);
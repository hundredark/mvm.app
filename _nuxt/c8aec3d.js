(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{332:function(t,n,e){"use strict";var l=e(2),r=e(334);l({target:"String",proto:!0,forced:e(335)("link")},{link:function(t){return r(this,"a","href",t)}})},334:function(t,n,e){var l=e(4),r=e(36),o=e(15),c=/"/g,x=l("".replace);t.exports=function(t,n,e,l){var m=o(r(t)),f="<"+n;return""!==e&&(f+=" "+e+'="'+x(o(l),c,"&quot;")+'"'),f+">"+m+"</"+n+">"}},335:function(t,n,e){var l=e(3);t.exports=function(t){return l((function(){var n=""[t]('"');return n!==n.toLowerCase()||n.split('"').length>3}))}},351:function(t,n,e){"use strict";e.r(n);e(332),e(124);var l={name:"LinkContainer",comments:{RouterLink:e(125).a},props:["title","links"]},r=e(64),component=Object(r.a)(l,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"flex flex-col mt-11 sm:m-0 sm:h-full"},[n("div",{staticClass:"mb-[14px] font-bold text-xl leading-[30px] text-black/90 sm:mb-2 sm:text-lg sm:leading-9 md:text-xl lg:text-2xl"},[t._v(t._s(t.title))]),t._v(" "),t._l(t.links,(function(e){var text=e.text,link=e.link;return n("div",{key:text,staticClass:"mt-5 sm:mt-6"},[link.startsWith("/")?n("router-link",{staticClass:"font-normal text-base leading-[26px] text-black/60 sm:text-sm md:text-base lg:text-lg",attrs:{to:link}},[t._v("\n      "+t._s(text)+"\n    ")]):n("a",{staticClass:"font-normal text-base leading-[26px] text-black/60 sm:text-sm md:text-base lg:text-lg",attrs:{href:link}},[t._v("\n      "+t._s(text)+"\n  ")])],1)}))],2)}),[],!1,null,null,null);n.default=component.exports}}]);
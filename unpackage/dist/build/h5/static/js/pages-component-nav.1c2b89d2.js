(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-component-nav"],{"81b8":function(t,a,e){"use strict";e.r(a);var i=e("d40e"),s=e.n(i);for(var n in i)"default"!==n&&function(t){e.d(a,t,function(){return i[t]})}(n);a["default"]=s.a},"8a47":function(t,a,e){"use strict";e.r(a);var i=e("9265"),s=e("81b8");for(var n in s)"default"!==n&&function(t){e.d(a,t,function(){return s[t]})}(n);var c=e("2877"),l=Object(c["a"])(s["default"],i["a"],i["b"],!1,null,"33effd79",null);a["default"]=l.exports},9265:function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",[e("cu-custom",{attrs:{bgColor:"bg-gradual-pink",isBack:!0}},[e("template",{attrs:{slot:"backText"},slot:"backText"},[t._v("返回")]),e("template",{attrs:{slot:"content"},slot:"content"},[t._v("导航栏")])],2),t._l(10,function(a,i){return i==t.TabCur?e("v-uni-view",{key:i,staticClass:"bg-grey padding margin text-center"},[t._v("Tab"+t._s(i))]):t._e()}),e("v-uni-view",{staticClass:"cu-bar bg-white solid-bottom"},[e("v-uni-view",{staticClass:"action"},[e("v-uni-text",{staticClass:"cuIcon-title text-orange"}),t._v("默认")],1)],1),e("v-uni-scroll-view",{staticClass:"bg-white nav",attrs:{"scroll-x":"","scroll-with-animation":"","scroll-left":t.scrollLeft}},t._l(10,function(a,i){return e("v-uni-view",{key:i,staticClass:"cu-item",class:i==t.TabCur?"text-green cur":"",attrs:{"data-id":i},on:{click:function(a){a=t.$handleEvent(a),t.tabSelect(a)}}},[t._v("Tab"+t._s(i))])}),1),e("v-uni-view",{staticClass:"cu-bar bg-white margin-top solid-bottom"},[e("v-uni-view",{staticClass:"action"},[e("v-uni-text",{staticClass:"cuIcon-title text-orange"}),t._v("居中")],1)],1),e("v-uni-scroll-view",{staticClass:"bg-white nav text-center",attrs:{"scroll-x":""}},t._l(3,function(a,i){return e("v-uni-view",{key:i,staticClass:"cu-item",class:i==t.TabCur?"text-blue cur":"",attrs:{"data-id":i},on:{click:function(a){a=t.$handleEvent(a),t.tabSelect(a)}}},[t._v("Tab"+t._s(i))])}),1),e("v-uni-view",{staticClass:"cu-bar bg-white margin-top solid-bottom"},[e("v-uni-view",{staticClass:"action"},[e("v-uni-text",{staticClass:"cuIcon-title text-orange"}),t._v("平分")],1)],1),e("v-uni-scroll-view",{staticClass:"bg-white nav",attrs:{"scroll-x":""}},[e("v-uni-view",{staticClass:"flex text-center"},t._l(4,function(a,i){return e("v-uni-view",{key:i,staticClass:"cu-item flex-sub",class:i==t.TabCur?"text-orange cur":"",attrs:{"data-id":i},on:{click:function(a){a=t.$handleEvent(a),t.tabSelect(a)}}},[t._v("Tab"+t._s(i))])}),1)],1),e("v-uni-view",{staticClass:"cu-bar bg-white margin-top solid-bottom"},[e("v-uni-view",{staticClass:"action"},[e("v-uni-text",{staticClass:"cuIcon-title text-orange"}),t._v("背景")],1)],1),e("v-uni-scroll-view",{staticClass:"bg-red nav text-center",attrs:{"scroll-x":""}},t._l(3,function(a,i){return e("v-uni-view",{key:i,staticClass:"cu-item",class:i==t.TabCur?"text-white cur":"",attrs:{"data-id":i},on:{click:function(a){a=t.$handleEvent(a),t.tabSelect(a)}}},[t._v("Tab"+t._s(i))])}),1),e("v-uni-view",{staticClass:"cu-bar bg-white margin-top solid-bottom"},[e("v-uni-view",{staticClass:"action"},[e("v-uni-text",{staticClass:"cuIcon-title text-orange"}),t._v("图标")],1)],1),e("v-uni-scroll-view",{staticClass:"bg-green nav text-center",attrs:{"scroll-x":""}},[e("v-uni-view",{staticClass:"cu-item",class:0==t.TabCur?"text-white cur":"",attrs:{"data-id":"0"},on:{click:function(a){a=t.$handleEvent(a),t.tabSelect(a)}}},[e("v-uni-text",{staticClass:"cuIcon-camerafill"}),t._v("数码")],1),e("v-uni-view",{staticClass:"cu-item",class:1==t.TabCur?"text-white cur":"",attrs:{"data-id":"1"},on:{click:function(a){a=t.$handleEvent(a),t.tabSelect(a)}}},[e("v-uni-text",{staticClass:"cuIcon-upstagefill"}),t._v("排行榜")],1),e("v-uni-view",{staticClass:"cu-item",class:2==t.TabCur?"text-white cur":"",attrs:{"data-id":"2"},on:{click:function(a){a=t.$handleEvent(a),t.tabSelect(a)}}},[e("v-uni-text",{staticClass:"cuIcon-clothesfill"}),t._v("皮肤")],1)],1)],2)},s=[];e.d(a,"a",function(){return i}),e.d(a,"b",function(){return s})},d40e:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i={data:function(){return{TabCur:0,scrollLeft:0}},methods:{tabSelect:function(t){this.TabCur=t.currentTarget.dataset.id,this.scrollLeft=60*(t.currentTarget.dataset.id-1)}}};a.default=i}}]);
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ComponentBaseUI"] = factory();
	else
		root["ComponentBaseUI"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 391);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ 1:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["default"] = addStylesClient;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__listToStyles__ = __webpack_require__(3);
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = Object(__WEBPACK_IMPORTED_MODULE_0__listToStyles__["a" /* default */])(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = Object(__WEBPACK_IMPORTED_MODULE_0__listToStyles__["a" /* default */])(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ 134:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/fc6c4aef95b9d6faa77c25af2f2b7b6a.png";

/***/ }),

/***/ 135:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _sliderCode = __webpack_require__(395);

var _sliderCode2 = _interopRequireDefault(_sliderCode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'SliderCode',
  data: function data() {
    return {
      id: 'sliderCode_' + new Date().getTime() + parseInt(Math.random() * 100),
      sliderCode: ''
    };
  },
  props: {
    width: {
      default: 310
    },
    height: {
      default: 155
    },
    // 指定背景图片地址，不传，默认从https://picsum.photos上随机获取图片
    imgUrl: {
      default: ''
    }
  },
  watch: {},
  computed: {},
  beforeDestroy: function beforeDestroy() {
    // 
  },
  mounted: function mounted() {
    var _this = this;

    this.sliderCode = _sliderCode2.default.init({
      el: document.getElementById(this.id),
      width: this.width,
      height: this.height,
      imgUrl: this.imgUrl,
      onSuccess: function onSuccess() {
        _this.$emit('success');
      },
      onFail: function onFail() {
        _this.$emit('fail');
      },
      onRefresh: function onRefresh() {
        _this.$emit('refresh');
      }
    });
    console.log(this.sliderCode);
  },
  methods: {
    fresh: function fresh() {
      this.sliderCode.reset();
    }
  }
}; //
//
//
//
//
//
//
//
//

/***/ }),

/***/ 15:
/***/ (function(module, exports) {

module.exports = function escape(url) {
    if (typeof url !== 'string') {
        return url
    }
    // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
    }
    // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url)) {
        return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
    }

    return url
}


/***/ }),

/***/ 2:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = normalizeComponent;
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  scriptExports = scriptExports || {}

  // ES6 modules interop
  var type = typeof scriptExports.default
  if (type === 'object' || type === 'function') {
    scriptExports = scriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 3:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = listToStyles;
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),

/***/ 391:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _main = __webpack_require__(392);

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
_main2.default.install = function (Vue) {
  Vue.component(_main2.default.name, _main2.default);
};

exports.default = _main2.default;

/***/ }),

/***/ 392:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7b3ddb7e_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_main_vue__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(2);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(393)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7b3ddb7e_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_main_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7b3ddb7e_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_main_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "packages\\sliderCode\\src\\main.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7b3ddb7e", Component.options)
  } else {
    hotAPI.reload("data-v-7b3ddb7e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 393:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(394);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(1).default
var update = add("69429a18", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./main.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./main.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 394:
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(15);
exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, "\n.wrap-slider-code .block {\n  position: absolute;\n  left: 0;\n  top: 0;\n  cursor: pointer;\n  cursor: grab;\n}\n.wrap-slider-code .block:active {\n  cursor: pointer;\n  cursor: grabbing;\n}\n.wrap-slider-code .sliderContainer {\n  position: relative;\n  text-align: center;\n  width: 100%;\n  height: 40px;\n  line-height: 40px;\n  margin-top: 15px;\n  background: #f7f9fa;\n  color: #45494c;\n  border: 1px solid #e4e7eb;\n}\n.wrap-slider-code .sliderContainer_active .slider {\n  height: 38px;\n  top: -1px;\n  border: 1px solid #1991FA;\n}\n.wrap-slider-code .sliderContainer_active .sliderMask {\n  height: 38px;\n  border-width: 1px;\n}\n.wrap-slider-code .sliderContainer_success .slider {\n  height: 38px;\n  top: -1px;\n  border: 1px solid #52CCBA;\n  background-color: #52CCBA !important;\n}\n.wrap-slider-code .sliderContainer_success .sliderMask {\n  height: 38px;\n  border: 1px solid #52CCBA;\n  background-color: #D2F4EF;\n}\n.wrap-slider-code .sliderContainer_success .sliderIcon {\n  background-position: 0 0 !important;\n}\n.wrap-slider-code .sliderContainer_fail .slider {\n  height: 38px;\n  top: -1px;\n  border: 1px solid #f57a7a;\n  background-color: #f57a7a !important;\n}\n.wrap-slider-code .sliderContainer_fail .sliderMask {\n  height: 38px;\n  border: 1px solid #f57a7a;\n  background-color: #fce1e1;\n}\n.wrap-slider-code .sliderContainer_fail .sliderIcon {\n  background-position: 0 -47px !important;\n}\n.wrap-slider-code .sliderContainer_active .sliderText, .wrap-slider-code .sliderContainer_success .sliderText, .wrap-slider-code .sliderContainer_fail .sliderText {\n  display: none;\n}\n.wrap-slider-code .sliderMask {\n  position: absolute;\n  left: 0;\n  top: 0;\n  height: 40px;\n  border: 0 solid #1991FA;\n  background: #D1E9FE;\n}\n.wrap-slider-code .slider {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 40px;\n  height: 38px;\n  background: #fff;\n  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);\n  transition: background .2s linear;\n  cursor: pointer;\n  cursor: grab;\n}\n.wrap-slider-code .slider:active {\n  cursor: grabbing;\n}\n.wrap-slider-code .slider:hover {\n  background: #1991FA;\n}\n.wrap-slider-code .slider:hover .sliderIcon {\n  background-position: 0 -13px;\n}\n.wrap-slider-code .sliderIcon {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  width: 14px;\n  height: 12px;\n  background: url(" + escape(__webpack_require__(134)) + ") 0 -26px;\n}\n.wrap-slider-code .refreshIcon {\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 34px;\n  height: 34px;\n  cursor: pointer;\n  background: url(" + escape(__webpack_require__(134)) + ") 0 -66px;\n}\n", ""]);

// exports


/***/ }),

/***/ 395:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function (global, factory) {
  ( false ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (global = global || self, global.SliderCode = factory());
})(undefined, function () {
  var l = 42;
  // 滑块半径
  var r = 9;
  // canvas宽度
  var w = 310;
  // canvas高度
  var h = 155;
  var PI = Math.PI;
  // 滑块实际边长
  var L = l + r * 2 + 3;
  var isIE = window.navigator.userAgent.indexOf('Trident') > -1;
  // 背景图片地址
  var imgSrc = '';

  function getRandomNumberByRange(start, end) {
    return Math.round(Math.random() * (end - start) + start);
  }

  function createCanvas(width, height) {
    var canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    return canvas;
  }

  function createImg(onload) {
    var img = new Image();
    img.crossOrigin = "Anonymous";
    img.onload = onload;
    img.onerror = function () {
      img.setSrc(getRandomImgSrc());
    };

    img.setSrc = function (src) {
      if (isIE) {
        // IE浏览器无法通过img.crossOrigin跨域，使用ajax获取图片blob然后转为dataURL显示
        var xhr = new XMLHttpRequest();
        xhr.onloadend = function (e) {
          var file = new FileReader(); // FileReader仅支持IE10+
          file.readAsDataURL(e.target.response);
          file.onloadend = function (e) {
            img.src = e.target.result;
          };
        };
        xhr.open('GET', src);
        xhr.responseType = 'blob';
        xhr.send();
      } else img.src = src;
    };

    img.setSrc(getRandomImgSrc());
    return img;
  }

  function createElement(tagName, className) {
    var elment = document.createElement(tagName);
    elment.className = className;
    return elment;
  }

  function addClass(tag, className) {
    tag.classList.add(className);
  }

  function removeClass(tag, className) {
    tag.classList.remove(className);
  }

  function getRandomImgSrc() {
    // https://picsum.photos/id/100/300/150?image=200
    return imgSrc || 'http://picsum.photos/300/150/?image=' + getRandomNumberByRange(0, 1084);
  }

  function _draw(ctx, x, y, operation) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.arc(x + l / 2, y - r + 2, r, 0.72 * PI, 2.26 * PI);
    ctx.lineTo(x + l, y);
    ctx.arc(x + l + r - 2, y + l / 2, r, 1.21 * PI, 2.78 * PI);
    ctx.lineTo(x + l, y + l);
    ctx.lineTo(x, y + l);
    ctx.arc(x + r - 2, y + l / 2, r + 0.4, 2.76 * PI, 1.24 * PI, true);
    ctx.lineTo(x, y);
    ctx.lineWidth = 2;
    ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.7)';
    ctx.stroke();
    ctx[operation]();
    ctx.globalCompositeOperation = 'destination-over';
  }

  function sum(x, y) {
    return x + y;
  }

  function square(x) {
    return x * x;
  }

  var SliderCode = function () {
    function SliderCode(_ref) {
      var el = _ref.el,
          width = _ref.width,
          height = _ref.height,
          imgUrl = _ref.imgUrl,
          onSuccess = _ref.onSuccess,
          onFail = _ref.onFail,
          onRefresh = _ref.onRefresh;

      _classCallCheck(this, SliderCode);

      width && (w = width);
      height && (h = height);
      el.style.position = 'relative';
      el.style.width = w + 'px';
      Object.assign(el.style, {
        position: 'relative',
        width: w + 'px',
        margin: '0 auto'
      });
      this.el = el;
      imgSrc = imgUrl;
      this.onSuccess = onSuccess;
      this.onFail = onFail;
      this.onRefresh = onRefresh;
    }

    _createClass(SliderCode, [{
      key: 'init',
      value: function init() {
        this.initDOM();
        this.initImg();
        this.bindEvents();
      }
    }, {
      key: 'initDOM',
      value: function initDOM() {
        var canvas = createCanvas(w, h); // 画布
        var block = canvas.cloneNode(true); // 滑块
        var sliderContainer = createElement('div', 'sliderContainer');
        var refreshIcon = createElement('div', 'refreshIcon');
        var sliderMask = createElement('div', 'sliderMask');
        var slider = createElement('div', 'slider');
        var sliderIcon = createElement('span', 'sliderIcon');
        var text = createElement('span', 'sliderText');

        block.className = 'block';
        text.innerHTML = '向右滑动填充拼图';

        var el = this.el;
        el.appendChild(canvas);
        el.appendChild(refreshIcon);
        el.appendChild(block);
        slider.appendChild(sliderIcon);
        sliderMask.appendChild(slider);
        sliderContainer.appendChild(sliderMask);
        sliderContainer.appendChild(text);
        el.appendChild(sliderContainer);

        Object.assign(this, {
          canvas: canvas,
          block: block,
          sliderContainer: sliderContainer,
          refreshIcon: refreshIcon,
          slider: slider,
          sliderMask: sliderMask,
          sliderIcon: sliderIcon,
          text: text,
          canvasCtx: canvas.getContext('2d'),
          blockCtx: block.getContext('2d')
        });
      }
    }, {
      key: 'initImg',
      value: function initImg() {
        var _this = this;

        var img = createImg(function () {
          _this.draw();
          _this.canvasCtx.drawImage(img, 0, 0, w, h);
          _this.blockCtx.drawImage(img, 0, 0, w, h);
          var y = _this.y - r * 2 - 1;
          var ImageData = _this.blockCtx.getImageData(_this.x - 3, y, L, L);
          _this.block.width = L;
          _this.blockCtx.putImageData(ImageData, 0, y);
        });
        this.img = img;
      }
    }, {
      key: 'draw',
      value: function draw() {
        // 随机创建滑块的位置
        this.x = getRandomNumberByRange(L + 10, w - (L + 10));
        this.y = getRandomNumberByRange(10 + r * 2, h - (L + 10));
        _draw(this.canvasCtx, this.x, this.y, 'fill');
        _draw(this.blockCtx, this.x, this.y, 'clip');
      }
    }, {
      key: 'clean',
      value: function clean() {
        this.canvasCtx.clearRect(0, 0, w, h);
        this.blockCtx.clearRect(0, 0, w, h);
        this.block.width = w;
      }
    }, {
      key: 'bindEvents',
      value: function bindEvents() {
        var _this2 = this;

        this.el.onselectstart = function () {
          return false;
        };
        this.refreshIcon.onclick = function () {
          _this2.reset();
          typeof _this2.onRefresh === 'function' && _this2.onRefresh();
        };

        var originX = void 0,
            originY = void 0,
            trail = [],
            isMouseDown = false;

        var handleDragStart = function handleDragStart(e) {
          originX = e.clientX || e.touches[0].clientX;
          originY = e.clientY || e.touches[0].clientY;
          isMouseDown = true;
        };

        var handleDragMove = function handleDragMove(e) {
          if (!isMouseDown) return false;
          var eventX = e.clientX || e.touches[0].clientX;
          var eventY = e.clientY || e.touches[0].clientY;
          var moveX = eventX - originX;
          var moveY = eventY - originY;
          if (moveX < 0 || moveX + 38 >= w) return false;
          _this2.slider.style.left = moveX + 'px';
          var blockLeft = (w - 40 - 20) / (w - 40) * moveX;
          _this2.block.style.left = blockLeft + 'px';

          addClass(_this2.sliderContainer, 'sliderContainer_active');
          _this2.sliderMask.style.width = moveX + 'px';
          trail.push(moveY);
        };

        var handleDragEnd = function handleDragEnd(e) {
          if (!isMouseDown) return false;
          isMouseDown = false;
          var eventX = e.clientX || e.changedTouches[0].clientX;
          if (eventX == originX) return false;
          removeClass(_this2.sliderContainer, 'sliderContainer_active');
          _this2.trail = trail;

          var _verify = _this2.verify(),
              spliced = _verify.spliced,
              verified = _verify.verified;

          if (spliced) {
            if (verified) {
              addClass(_this2.sliderContainer, 'sliderContainer_success');
              typeof _this2.onSuccess === 'function' && _this2.onSuccess();
            } else {
              addClass(_this2.sliderContainer, 'sliderContainer_fail');
              _this2.text.innerHTML = '再试一次';
              _this2.reset();
            }
          } else {
            addClass(_this2.sliderContainer, 'sliderContainer_fail');
            typeof _this2.onFail === 'function' && _this2.onFail();
            setTimeout(function () {
              _this2.reset();
            }, 1000);
          }
        };
        this.slider.addEventListener('mousedown', handleDragStart);
        this.slider.addEventListener('touchstart', handleDragStart);
        this.block.addEventListener('mousedown', handleDragStart);
        this.block.addEventListener('touchstart', handleDragStart);
        document.addEventListener('mousemove', handleDragMove);
        document.addEventListener('touchmove', handleDragMove);
        document.addEventListener('mouseup', handleDragEnd);
        document.addEventListener('touchend', handleDragEnd);
      }
    }, {
      key: 'verify',
      value: function verify() {
        var arr = this.trail; // 拖动时y轴的移动距离
        var average = arr.reduce(sum) / arr.length;
        var deviations = arr.map(function (x) {
          return x - average;
        });
        var stddev = Math.sqrt(deviations.map(square).reduce(sum) / arr.length);
        var left = parseInt(this.block.style.left);
        return {
          spliced: Math.abs(left - this.x) < 10,
          verified: stddev !== 0 // 简单验证下拖动轨迹，为零时表示Y轴上下没有波动，可能非人为操作
        };
      }
    }, {
      key: 'reset',
      value: function reset() {
        this.sliderContainer.className = 'sliderContainer';
        this.slider.style.left = 0;
        this.block.style.left = 0;
        this.sliderMask.style.width = 0;
        this.clean();
        this.img.setSrc(getRandomImgSrc());
      }
    }]);

    return SliderCode;
  }();

  return {
    init: function init(opts) {
      var sliderCode = new SliderCode(opts);
      sliderCode.init();
      return sliderCode;
    }
  };
});

/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "wrap-slider-code", attrs: { id: _vm.id } })
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7b3ddb7e", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ })

/******/ });
});
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
/******/ 	return __webpack_require__(__webpack_require__.s = 412);
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

/***/ 138:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _captcha = __webpack_require__(419);

var _captcha2 = _interopRequireDefault(_captcha);

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
    // 指定背景图片地址
    imgUrl: {
      default: ''
    }
  },
  mounted: function mounted() {
    var _this = this;

    (0, _captcha2.default)(this.id, {
      // 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2353873632,2644143944&fm=26&gp=0.jpg', 'http://gss0.baidu.com/-Po3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/a50f4bfbfbedab6448bfd164f736afc378311e40.jpg'
      imgurl: [this.imgUrl],
      cw: 80,
      ch: 80,
      onSuccess: function onSuccess() {
        _this.$emit('success');
      },
      onError: function onError() {
        _this.$emit('error');
      }
    });
  },
  methods: {}
}; //
//
//
//
//
//
//
//

/***/ }),

/***/ 16:
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

/***/ 412:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _main = __webpack_require__(413);

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
_main2.default.install = function (Vue) {
  Vue.component(_main2.default.name, _main2.default);
};

exports.default = _main2.default;

/***/ }),

/***/ 413:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7b3ddb7e_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_main_vue__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(2);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(414)
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

/***/ 414:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(415);
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

/***/ 415:
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(16);
exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, "\n@keyframes shake {\n0%, to {\n        transform: translateZ(0)\n}\n10%, 30%, 50%, 70%, 90% {\n        transform: translate3d(-10px,0,0)\n}\n20%, 40%, 60%, 80% {\n        transform: translate3d(10px,0,0)\n}\n}\n.captcha-box {\n\tposition: relative;\n\tbackground: #fff;\n    border: 1px solid #ccc;\n    padding: 10px;\n    box-sizing: content-box;\n    overflow: hidden;\n}\n.captcha-box.shake {\n\tanimation: shake 1s;\n}\n.captcha-box .canvas-box {\n\toverflow: hidden;\n\tposition: relative;\n}\n.canvas-box .captcha-result{\n\tposition: absolute;\n    left: 0;\n    width: 100%;\n    color: #fff;\n    bottom: -25px;\n    height: 24px;\n    text-indent: 16px;\n    font-size: 14px;\n    line-height: 24px;\n    transition: bottom .3s ease;\n}\n.canvas-box .captcha-result.fail{\n\tbackground-color: #de715b;\n\tbottom: 0;\n}\n.canvas-box .captcha-result.success{\n\tbackground-color: #5ebf70;\n\tbottom: 0;\n}\n.captcha-box .captcha-bg {\n\tdisplay: block;\n}\n.captcha-box .captcha-clipcanvas {\n\tposition: absolute;\n    left: 10px;\n}\n.captcha-box .captcha-dragbar{\n    height: 40px;\n    margin-top: 5px;\n    /* margin-bottom: 10px; */\n    padding-top: 8px;\n    position: relative;\n    box-sizing: border-box;\n}\n.captcha-dragbar .drag-track {\n\twidth: 100%;\n    height: 13px;\n    border-radius: 7px;\n    background: #e4e4e4;\n    position: relative;\n}\n.captcha-dragbar .drag-slider {\n    width: 40px;\n    height: 30px;\n    position: absolute;\n    top: 0;\n    left: 0px;\n    background-color: #1296db;\n    background-image: url(" + escape(__webpack_require__(416)) + ");\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 50%;\n    border-radius: 23px;\n    cursor: pointer;\n}\n.captcha-dragbar .drag-btn {\n    display: none;\n\theight: 22px;\n\tmargin-top: 10px;\n}\n.captcha-dragbar .drag-btn i{\n\tfloat: right;\n\tmargin-right: 10px;\n}\n.captcha-dragbar .drag-btn i:hover {\n    opacity: 0.8;\n    cursor: pointer;\n}\n.captcha-dragbar .drag-btn .refresh {\n\theight: 22px;\n\twidth: 22px;\n\tbackground: url(" + escape(__webpack_require__(417)) + ") center no-repeat;\n\tbackground-size: 100%;\n}\n.captcha-dragbar .drag-btn .close {\n\theight: 22px;\n\twidth: 22px;\n\tbackground: url(" + escape(__webpack_require__(418)) + ") center no-repeat;\n\tbackground-size: 100%;\n}\n", ""]);

// exports


/***/ }),

/***/ 416:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/f2a3a165f52acb477329bd7c803b9f0d.png";

/***/ }),

/***/ 417:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/e48d55bfd69bb96de4444074c9c46d74.png";

/***/ }),

/***/ 418:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/954f60eeea05c6d6c9edca16171fa4b0.png";

/***/ }),

/***/ 419:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

;(function () {
	var isIE = window.navigator.userAgent.indexOf('Trident') > -1;
	var opts = {
		imgurl: '',
		cw: 60,
		ch: 60,
		precision: 5,
		onSuccess: null,
		onError: null,
		eventinfo: {
			flag: false,
			left: 0,
			clipleft: 0,
			currentX: 0
		}
	};

	function isArray(obj) {
		return Object.prototype.toString.call(obj) === '[object Array]';
	}

	function createCaptchaBox(canvas) {
		var captchaBox = document.createElement('div');
		captchaBox.className = "captcha-box";
		captchaBox.style.width = canvas.width + 'px';

		var canvasBox = document.createElement('div');
		canvasBox.className = "canvas-box";
		canvasBox.appendChild(canvas.cloneNode(true));
		canvasBox.appendChild(createResult());

		captchaBox.appendChild(canvasBox);
		captchaBox.appendChild(createDragBar());
		canvas.parentNode.replaceChild(captchaBox, canvas);
		return captchaBox;
	}

	function createDragBar() {
		var dragbar = document.createElement('div');
		dragbar.className = "captcha-dragbar";
		dragbar.innerHTML = '<div class="drag-track"></div><div id="drag-slider" class="drag-slider"></div><div class="drag-btn"><i id="drag-btn-close" class="close"></i><i id="drag-btn-refresh" class="refresh"></i></div>';
		return dragbar;
	}

	function createResult() {
		var result = document.createElement('div');
		result.id = 'captcha-result';
		result.className = "captcha-result";
		return result;
	}

	function createCanvas(w, h) {
		var canvas = document.createElement("canvas");
		canvas.width = w;
		canvas.height = h;
		return canvas;
	}

	function clipPath(ctx, startx, starty) {
		startx = startx + 0.2;
		starty = starty + 0.2;

		var subw = parseInt((opts.cw - 1) / 6),
		    subh = parseInt((opts.ch - 1) / 6),
		    radius = Math.min(subw, subh),
		    clipw = subw * 5 + 0.5,
		    cliph = subh * 5 + 0.5;

		ctx.beginPath();
		ctx.moveTo(startx, starty);
		ctx.lineTo(startx + clipw, starty);
		ctx.lineTo(startx + clipw, starty + parseInt(cliph / 2) - radius);
		ctx.arc(startx + clipw, starty + parseInt(cliph / 2), radius, -Math.PI / 2, Math.PI / 2, false);
		ctx.lineTo(startx + clipw, starty + cliph);
		ctx.lineTo(startx + clipw - (parseInt(clipw / 2) - radius), starty + cliph);
		ctx.arc(startx + parseInt(clipw / 2), starty + cliph, radius, 0, Math.PI, false);
		ctx.lineTo(startx, starty + cliph);
		ctx.lineTo(startx, starty);
		ctx.closePath();
	}

	function fillClip(canvas, startx, starty, alpha) {
		var ctx = canvas.getContext('2d');
		clipPath(ctx, startx, starty);

		ctx.fillStyle = "rgba(0,0,0, " + alpha + ")";
		ctx.fill();
	}

	function strokeClip(canvas, startx, starty) {
		var ctx = canvas.getContext('2d');
		clipPath(ctx, startx, starty);

		ctx.strokeStyle = "#fff";
		ctx.stroke();
	}

	function randomNum(min, max) {
		var rangeNum = max - min;
		var num = min + Math.round(Math.random() * rangeNum);
		return num;
	}

	function getStartPoint(w, h) {
		var padding = 10,
		    startw = opts.cw + padding,
		    starth = opts.ch + padding;
		if (w < startw * 2 || h < starth) return;

		var startPoint = {
			startx: randomNum(startw, w - startw),
			starty: randomNum(padding, h - starth)
		};
		return startPoint;
	}

	function eventInit(startx) {
		var slider = document.getElementById('drag-slider'),
		    sliderWidth = slider.offsetWidth,
		    track = document.querySelector('.drag-track'),
		    trackWidth = track.offsetWidth,
		    clipcanvas = document.getElementById('captcha-clipcanvas'),
		    btnClose = document.getElementById('drag-btn-close'),
		    btnRefresh = document.getElementById('drag-btn-refresh'),
		    result = document.getElementById('captcha-result'),
		    resultClass = result.className;

		opts.eventinfo.left = parseFloat(getComputedStyle(slider, null).getPropertyValue('left'));
		opts.eventinfo.clipleft = parseFloat(getComputedStyle(clipcanvas, null).getPropertyValue('left'));

		var close = function close() {
			// alert('close');
		};
		var refresh = function refresh() {
			// alert('refresh');
		};
		var reset = function reset() {
			var boxClassName = window.captchaBox.className;

			window.captchaBox.className += ' shake';

			setTimeout(function () {
				slider.style.left = "0px";
				clipcanvas.style.left = "10px";

				opts.eventinfo.left = 0;
				opts.eventinfo.clipleft = 10;
			}, 500);
			setTimeout(function () {
				result.className = resultClass;
				window.captchaBox.className = boxClassName;
			}, 1500);
		};

		var moveStart = function moveStart(e) {
			opts.eventinfo.flag = true;
			if (e.touches) {
				opts.eventinfo.currentX = e.touches[0].clientX;
			} else {
				opts.eventinfo.currentX = e.clientX;
			}
		};
		var move = function move(e) {
			if (opts.eventinfo.flag) {
				if (e.touches) {
					var disX = e.touches[0].clientX - opts.eventinfo.currentX;
				} else {
					var disX = e.clientX - opts.eventinfo.currentX;
				}
				if (disX >= 0 && disX < trackWidth - sliderWidth) {
					slider.style.left = opts.eventinfo.left + disX + "px";
					clipcanvas.style.left = opts.eventinfo.clipleft + disX + "px";
				}
				// slider.style.left = opts.eventinfo.left + disX + "px";
				// clipcanvas.style.left = opts.eventinfo.clipleft + disX + "px";

				if (e.preventDefault) e.preventDefault();
				return false;
			}
		};
		var moveEnd = function moveEnd(e) {
			if (opts.eventinfo.flag) {
				opts.eventinfo.flag = false;
				opts.eventinfo.left = parseFloat(getComputedStyle(slider, null).getPropertyValue('left'));
				opts.eventinfo.clipleft = parseFloat(getComputedStyle(clipcanvas, null).getPropertyValue('left'));

				if (Math.abs(startx - opts.eventinfo.left) <= opts.precision) {
					result.innerHTML = '验证通过';
					result.className = resultClass + ' success';
					opts.onSuccess && opts.onSuccess();
				} else {
					result.innerHTML = '拖动滑块将悬浮图像正确拼合';
					result.className = resultClass + ' fail';

					reset();
					opts.onError && opts.onError();
				}
			}
		};

		slider.addEventListener("touchstart", moveStart);
		slider.addEventListener("mousedown", moveStart);
		// slider.addEventListener("touchmove", move);
		// slider.addEventListener("mousemove", move);
		slider.parentNode.addEventListener("touchmove", move);
		slider.parentNode.addEventListener("mousemove", move);
		document.addEventListener('touchend', moveEnd);
		document.addEventListener('mouseup', moveEnd);
		btnClose.addEventListener("click", close);
		btnRefresh.addEventListener("click", refresh);
	}

	var imgCaptcha = function imgCaptcha(canvas, options) {
		for (var k in options) {
			if (options.hasOwnProperty(k)) {
				opts[k] = options[k];
			}
		}

		if (!canvas || !opts.imgurl) {
			console.error("verify params is error");
			return;
		}
		if (typeof canvas === 'string') canvas = document.getElementById(canvas);
		if (canvas.tagName !== 'CANVAS') {
			console.error("param canvas must be canvas");
			return;
		}

		window.captchaBox = createCaptchaBox(canvas);
		canvas = captchaBox.children[0].children[0];
		canvas.className += canvas.className + ' captcha-bg';

		var img = new Image();
		img.crossOrigin = 'Anonymous';
		img.onload = function () {
			var w = canvas.width,
			    h = canvas.height;

			var startPoint = getStartPoint(w, h);
			if (!startPoint) {
				console.error("can not get the start point");
				return;
			}
			var startx = startPoint.startx,
			    starty = startPoint.starty;

			canvas.getContext('2d').drawImage(img, 0, 0, w, h);
			fillClip(canvas, startx, starty, 0.7);

			var sourceCanvas = createCanvas(w, h);
			var sctx = sourceCanvas.getContext('2d');
			sctx.drawImage(img, 0, 0, w, h);
			sctx.globalCompositeOperation = 'destination-in';

			var destCanvas = createCanvas(opts.cw, opts.ch);
			fillClip(destCanvas, 0, 0, 1);

			sctx.drawImage(destCanvas, startx, starty);

			var clipCanvas = createCanvas(opts.cw, opts.ch);
			clipCanvas.id = 'captcha-clipcanvas';
			clipCanvas.className = 'captcha-clipcanvas';
			clipCanvas.getContext('2d').putImageData(sctx.getImageData(startx, starty, opts.cw, opts.ch), 0, 0);

			strokeClip(clipCanvas, 0, 0);

			// clipCanvas.style.top = starty + 'px';
			clipCanvas.style.top = starty + 10 + 'px';
			captchaBox.appendChild(clipCanvas);

			eventInit(startx);
		};

		opts.imgurl = isArray(opts.imgurl) ? opts.imgurl : [opts.imgurl];

		var urlIndex = Math.floor(Math.random() * opts.imgurl.length);
		var imgurl = opts.imgurl[urlIndex];
		var setsrc = function setsrc(src) {
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
		setsrc(imgurl);
		// img.src = imgurl;
	};

	if (( false ? 'undefined' : _typeof(exports)) == "object") {
		module.exports = imgCaptcha;
	} else if (true) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return imgCaptcha;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else if (window) {
		window.imgCaptcha = imgCaptcha;
	}
})();

/***/ }),

/***/ 420:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("canvas", {
    attrs: { id: _vm.id, width: _vm.width, height: _vm.height }
  })
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
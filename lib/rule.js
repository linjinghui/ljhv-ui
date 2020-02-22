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
/******/ 	return __webpack_require__(__webpack_require__.s = 406);
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

/***/ 137:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _rule = __webpack_require__(410);

var _rule2 = _interopRequireDefault(_rule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'Rule',
  data: function data() {
    return {
      id: 'rule_' + new Date().getTime() + parseInt(Math.random() * 100)
    };
  },
  props: {
    // 传入最大刻度数字
    maxNum: {
      default: 50
    },
    // 传入最小刻度数字
    minNum: {
      default: 0
    },
    // 每一个刻度代表多少数字
    stepNum: {
      default: 1
    },
    // 每一个刻度的宽
    stepWidth: {
      default: 10
    },
    // 初始化刻度尺刻度数量
    setSliderItemNum: {
      default: 100
    },
    // 每隔多少隔显示长刻度
    sliderItemStep: {
      default: 10
    },
    // 短刻度下面的标度是否显示
    sliderItemValueIsHidden: {
      type: Boolean,
      default: false
    },
    // 长刻度下面的标度是否显示
    sliderItemLongValueIsHidden: {
      type: Boolean,
      default: true
    },
    // 设置标度居中方式
    sliderItemValueTextAlign: {
      default: 'center'
    },
    // 设置指针是否显示
    sliderGuide: {
      type: Boolean,
      default: true
    },
    // 动画className
    animatedClassName: {
      default: 'my-slider-animated'
    },
    // 单位
    unit: {
      default: ''
    },
    // 是否忽视小数点
    ignorePoint: {
      type: Boolean,
      default: false
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.rule = new _rule2.default({
      id: this.id,
      // 传入最大数字
      maxNum: this.maxNum,
      // 传入最小刻度数字
      minNum: this.minNum,
      // 每一个刻度代表多少数字
      stepNum: this.stepNum,
      // 每一个刻度的宽
      stepWidth: this.stepWidth,
      // 初始化刻度尺刻度数量
      setSliderItemNum: this.setSliderItemNum,
      // 每隔多少隔显示长刻度
      sliderItemStep: this.sliderItemStep,
      // 短刻度下面的标度是否显示
      sliderItemValueIsHidden: this.sliderItemValueIsHidden,
      // 长刻度下面的标度是否显示
      sliderItemLongValueIsHidden: this.sliderItemLongValueIsHidden,
      // 设置标度居中方式
      sliderItemValueTextAlign: this.sliderItemValueTextAlign,
      // 设置指针是否显示
      sliderGuide: this.sliderGuide,
      // 动画className
      animatedClassName: this.animatedClassName,
      unit: this.unit,
      callBack: function callBack(value) {
        if (_this.ignorePoint && value % 1 > 0) {
          this.setValue(Math.round(value));
        } else {
          _this.$emit('callback', value);
        }
      }
    });
  },
  methods: {
    //  
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
//
//

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

/***/ 406:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _main = __webpack_require__(407);

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
_main2.default.install = function (Vue) {
  Vue.component(_main2.default.name, _main2.default);
};

exports.default = _main2.default;

/***/ }),

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_046baef0_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_main_vue__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(2);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(408)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_046baef0_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_main_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_046baef0_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_main_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "packages\\rule\\src\\main.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-046baef0", Component.options)
  } else {
    hotAPI.reload("data-v-046baef0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 408:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(409);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(1).default
var update = add("25724266", content, false, {});
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

/***/ 409:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, "\n.wrap-rule {\n  width: 100%;\n  height: 60px;\n  position: relative;\n  overflow: hidden;\n}\n.wrap-rule .my-slider {\n    width: 100px;\n    height: 50px;\n    position: absolute;\n    top: 0px;\n    left: 0;\n}\n.wrap-rule .my-slider-animated {\n    transition: left 0.3s ease;\n    -webkit-transition: left 0.3s ease;\n}\n.wrap-rule .slider-item-box {\n    width: 100%;\n    height: 100%;\n}\n.wrap-rule .slider-item, .wrap-rule .slider-item-long {\n    width: 1px;\n    background: #bbb;\n    position: absolute;\n    bottom: 0;\n}\n.wrap-rule .slider-item-value {\n    width: auto;\n    font-size: 9px;\n    color: #666;\n    position: absolute;\n    bottom: 20px;\n}\n.wrap-rule .slider-item {\n    height: 8px;\n}\n.wrap-rule .slider-item-long {\n    height: 16px;\n    background: #999;\n}\n.wrap-rule .slider-guide {\n    width: 1px;\n    height: 40px;\n    background: #ff5409;\n    position: absolute;\n    bottom: 0;\n    left: 0;\n}\n.wrap-rule .slider-border-bottom {\n    height: 1px;\n    background: #000;\n    position: absolute;\n}\n", ""]);

// exports


/***/ }),

/***/ 410:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_RESULT__;

/**
 * @param	maxNum 传入最大数字
 * @param	minNum 传入最小刻度数字
 * @param	stepNum 每一个刻度代表多少数字
 * @param	stepWidth 每一个刻度的宽
 * @param setSliderItemNum 初始化刻度尺刻度数量以及适时滑动增加的固定数量，防止大数据造成for循环过多造成浏览器崩溃,小于1000
 * @param	sliderItemStep 每隔多少隔显示长刻度
 * @param	sliderItemValueIsHidden 短刻度下面的标度是否显示
 * @param	sliderItemLongValueIsHidden 长刻度下面的标度是否显示
 * @param	sliderItemValueTextAlign 设置标度居中方式
 * @param	sliderGuide 设置指针是否显示
 * @param	setMaxNum 最大刻度数字
 * @param	setMinNum 最小刻度数字
 * @param animatedClassName 刻度尺动画
 * @param	unit 单位
 * @param	callBack 回调函数
 **/
(function () {
	var Ruler = function Ruler(options) {
		this.id = options.id;
		this.getObj = document.getElementById(options.id);
		this.getPobj = this.getObj.parentNode || this.getObj.parentElement;
		this.maxNum = options.maxNum;
		this.minNum = options.minNum;
		this.stepNum = options.stepNum;
		this.stepWidth = options.stepWidth;
		this.setSliderItemNum = options.setSliderItemNum;
		this.sliderItemStep = options.sliderItemStep;
		this.sliderItemValueIsHidden = options.sliderItemValueIsHidden;
		this.sliderItemLongValueIsHidden = options.sliderItemLongValueIsHidden;
		this.sliderItemValueTextAlign = options.sliderItemValueTextAlign;
		this.sliderGuide = options.sliderGuide;
		this.animatedClassName = options.animatedClassName || '';
		this.unit = options.unit || '';
		this.callBack = options.callBack;
		this.setMaxNum = Math.ceil((this.maxNum - this.minNum) / this.stepNum) * this.stepNum + this.minNum;
		this.setMinNum = this.minNum;
		this.getSliderGuideLeftDeviation = 0;
		this.initClassName = this.getObj.className;
		this.forIndex = 1;
		this.startPageX;
		this.startLeft;
		this.movePageX;
		this.moveX;
		this.init();
	};
	Ruler.prototype = {
		init: function init() {
			this.getAllSliderItemNum = (this.setMaxNum - this.setMinNum) / this.stepNum; //滑尺刻度总个数
			this.setSliderItemNum = this.setSliderItemNum >= Math.ceil(this.getPobj.offsetWidth / this.stepWidth) ? this.setSliderItemNum : Math.ceil(this.getPobj.offsetWidth / this.stepWidth); //初始化滑尺个数是否沾满一屏，否的话设置
			this.setSliderGuide();
			this.initSlider();
		},
		initSlider: function initSlider() {
			var that = this;
			var getSliderItemNum = that.setSliderItemNum > that.getAllSliderItemNum ? that.getAllSliderItemNum : that.setSliderItemNum; //滑尺刻度总个数
			var setObjWidth = that.stepWidth * that.getAllSliderItemNum; //滑尺总宽度
			var sliderItemLeft; //每个刻度的left
			var sliderItemValue; //每个刻度代表的value
			var strHtml = '';
			var spanAllHtml = '';
			that.getObj.style.width = setObjWidth + 'px';
			that.getObj.style.left = that.getSliderGuideLeftDeviation + 'px';
			for (var i = 0; i <= getSliderItemNum; i++) {
				sliderItemLeft = that.stepWidth * i;
				sliderItemValue = that.setMinNum + that.stepNum * i;
				if (i % that.sliderItemStep === 0) {
					strHtml = '<span class="slider-item-long" data-index="' + i + '" data-value="' + sliderItemValue + '" style="left: ' + sliderItemLeft + 'px;"></span>';
					strHtml += that.sliderItemLongValueIsHidden ? '<span class="slider-item-value" data-value="' + sliderItemValue + '" style="left: ' + sliderItemLeft + 'px;">' + sliderItemValue + that.unit + '</span>' : '';
				} else {
					strHtml = '<span class="slider-item" data-index="' + i + '" data-value="' + sliderItemValue + '" style="left: ' + sliderItemLeft + 'px;"></span>';
					strHtml += that.sliderItemValueIsHidden ? '<span class="slider-item-value" data-value="' + sliderItemValue + '" style="left: ' + sliderItemLeft + 'px;">' + sliderItemValue + that.unit + '</span>' : '';
				}
				spanAllHtml = spanAllHtml + strHtml;
			}
			that.getObj.innerHTML = '<div class="slider-item-box" id="sliderItemBox">' + spanAllHtml + '</div>';
			that.setSliderGuideBorderBottom(setObjWidth);
			that.setSliderGuideDataValue();
			that.setSliderItemValueTextAlign();
			that.touch();
		},
		loadMoreSlider: function loadMoreSlider() {
			var that = this;
			var getBodyWidth = this.getPobj.offsetWidth;
			var getSliderIndex = Math.round((getBodyWidth / 2 - that.getObj.offsetLeft) / that.stepWidth);
			var getSliderItemNum = that.setSliderItemNum;
			// sliderItemBox = document.getElementById('sliderItemBox'),
			var sliderItemBox = that.getObj.querySelector('#sliderItemBox');
			var sliderItemIndex; //新增的每个刻度代表的index
			var sliderItemLeft; //新增的每个刻度的left
			var sliderItemValue; //新增的每个刻度代表的value
			var strHtml = '';
			var spanAllHtml = sliderItemBox.innerHTML;
			var startIndex = that.forIndex * getSliderItemNum;

			if (getSliderIndex >= getSliderItemNum * (that.forIndex - 1) + Math.round(getSliderItemNum / 2)) {
				for (var i = startIndex + 1; i <= startIndex + getSliderItemNum; i++) {
					sliderItemIndex = i;
					sliderItemLeft = that.stepWidth * sliderItemIndex;
					sliderItemValue = that.setMinNum + that.stepNum * sliderItemIndex;

					if (sliderItemValue <= that.setMaxNum) {
						if (i % that.sliderItemStep === 0) {
							strHtml = '<span class="slider-item-long" data-index="' + sliderItemIndex + '" data-value="' + sliderItemValue + '" style="left: ' + sliderItemLeft + 'px;"></span>';
							strHtml += that.sliderItemLongValueIsHidden ? '<span class="slider-item-value" data-value="' + sliderItemValue + '" style="left: ' + sliderItemLeft + 'px;">' + sliderItemValue + that.unit + '</span>' : '';
						} else {
							strHtml = '<span class="slider-item" data-index="' + sliderItemIndex + '" data-value="' + sliderItemValue + '" style="left: ' + sliderItemLeft + 'px;"></span>';
							strHtml += that.sliderItemValueIsHidden ? '<span class="slider-item-value" data-value="' + sliderItemValue + '" style="left: ' + sliderItemLeft + 'px;">' + sliderItemValue + that.unit + '</span>' : '';
						}
						spanAllHtml = spanAllHtml + strHtml;
					}
				}
				that.forIndex += 1;
				sliderItemBox.innerHTML = spanAllHtml;
				that.setSliderItemValueTextAlign();
			}
		},
		setSliderGuideBorderBottom: function setSliderGuideBorderBottom(width) {
			var that = this;
			var setBorderBottom = width;
			var creatBorderHtml = document.createElement('div');
			// getHtml = document.getElementsByClassName('slider-border-bottom')[0];
			var getHtml = that.getObj.querySelector('.slider-border-bottom');
			creatBorderHtml.classList.add('slider-border-bottom');
			creatBorderHtml.style.width = setBorderBottom + 'px';
			creatBorderHtml.style.top = that.getObj.offsetTop + that.getObj.offsetHeight + 'px';
			creatBorderHtml.style.left = 0 + 'px';
			that.getObj.parentNode.appendChild(creatBorderHtml);
		},
		setSliderGuide: function setSliderGuide() {
			var that = this;
			if (that.sliderGuide) {
				var getBodyWidth = this.getPobj.offsetWidth;
				var getObjTop = that.getObj.offsetTop;
				var creatGuideHtml = document.createElement('div');
				creatGuideHtml.classList.add('slider-guide');
				creatGuideHtml.id = "sliderGuide";
				creatGuideHtml.setAttribute('data-value', '');
				that.getObj.parentNode.appendChild(creatGuideHtml);
				var getSliderGuideDom = creatGuideHtml,
				    getSliderGuideDomHeight = getSliderGuideDom.offsetHeight;
				that.getSliderGuideLeftDeviation = getBodyWidth / 2 % that.stepWidth;
				getSliderGuideDom.style.top = getObjTop - getSliderGuideDomHeight + that.getObj.offsetHeight + 'px';
				getSliderGuideDom.style.left = getBodyWidth / 2 + 'px';
			}
		},
		setSliderGuideDataValue: function setSliderGuideDataValue(value) {
			var that = this;
			var getBodyWidth = this.getPobj.offsetWidth;
			// var getSliderGuideDom = document.getElementById('sliderGuide');
			var parent = that.getObj.parentNode || that.getObj.parentElement;
			var getSliderGuideDom = parent.querySelector('#sliderGuide');

			if (!value && value != 0) {
				/*初始化指针指向的value*/
				value = parseInt(getBodyWidth / 2 / that.stepWidth) * that.stepNum + that.setMinNum;
			}

			value = parseFloat(value.toFixed(2));
			getSliderGuideDom.setAttribute('data-value', value);
			// that.callBack(value);
			setTimeout(function () {
				that.callBack.call(that, value);
			}, 300);
		},
		setSliderItemValueTextAlign: function setSliderItemValueTextAlign() {
			var that = this;
			// getItemAll = document.getElementsByClassName('slider-item-value'),
			var getItemAll = that.getObj.getElementsByClassName('slider-item-value');
			var getItemWidth;
			if (getItemAll && getItemAll.length > 0) {
				for (var i = 0, len = getItemAll.length; i < len; i++) {
					getItemWidth = getItemAll[i].offsetWidth;
					switch (that.sliderItemValueTextAlign) {
						case 'center':
							getItemAll[i].style.marginLeft = -getItemWidth / 2 + 'px';
							break;
						case 'right':
							getItemAll[i].style.marginLeft = -getItemWidth + 'px';
							break;
						case 'left':
							getItemAll[i].style.marginLeft = 0 + 'px';
							break;
					}
				}
			}
		},
		touch: function touch() {
			var isMouseDown = false;
			var that = this;
			var start = function start(e) {
				e.preventDefault();
				e.stopPropagation();
				var startTouch = e.changedTouches[0];
				that.startPageX = startTouch.pageX;
				that.startLeft = this.offsetLeft;
				this.className = that.initClassName;
			};
			var move = function move(e) {
				e.preventDefault();
				e.stopPropagation();
				var moveTouch = e.changedTouches[0],
				    getBodyWidth = that.getPobj.offsetWidth,
				    left;
				that.movePageX = moveTouch.pageX;
				that.moveX = that.movePageX - that.startPageX;
				left = that.startLeft + that.moveX;
				var sliderMoveStopFlag = (getBodyWidth / 2 - that.startLeft - that.moveX) / that.stepWidth * that.stepNum + that.setMinNum;
				if (sliderMoveStopFlag < that.setMinNum) {
					left = getBodyWidth / 2;
				} else if (sliderMoveStopFlag > that.setMaxNum) {
					left = getBodyWidth / 2 - that.getObj.offsetWidth;
				}
				that.getObj.style.left = left + 'px';
			};
			var end = function end(e) {
				e.preventDefault();
				e.stopPropagation();
				var moveTouch = e.changedTouches[0];
				this.className += ' ' + that.animatedClassName;
				that.movePageX = moveTouch.pageX;
				that.moveX = that.movePageX - that.startPageX;
				that.setSliderValue(this.offsetLeft);
			};

			that.getObj.addEventListener('touchstart', start, false);
			that.getObj.addEventListener('touchmove', move, false);
			that.getObj.addEventListener('touchend', end, false);
			that.getObj.addEventListener('mousedown', function (evt) {
				isMouseDown = true;
				evt.touches = [{ pageX: evt.pageX, pageY: evt.pageY }];
				evt.changedTouches = [{ pageX: evt.pageX, pageY: evt.pageY }];
				// start(evt);
				start.call(this, evt);
			}, false);
			window.addEventListener('mousemove', function (evt) {
				evt.preventDefault();
				if (isMouseDown === true) {
					evt.touches = [{ pageX: evt.pageX, pageY: evt.pageY }];
					evt.changedTouches = [{ pageX: evt.pageX, pageY: evt.pageY }];
					// move(evt);
					move.call(that.getObj, evt);
				}
			}, false);
			window.addEventListener('mouseup', function (evt) {
				isMouseDown = false;
				evt.touches = [{ pageX: evt.pageX, pageY: evt.pageY }];
				evt.changedTouches = [{ pageX: evt.pageX, pageY: evt.pageY }];
				// end(evt);
				end.call(that.getObj, evt);
			}, false);
		},
		setSliderValue: function setSliderValue(offsetLeft, zdval) {
			var that = this;
			var getBodyWidth = this.getPobj.offsetWidth;
			var getInteget = parseInt(that.moveX / that.stepWidth);
			var getRemainder = that.moveX % that.stepWidth;
			var left = 0;
			if (Math.abs(getRemainder) == 0 && getInteget == 0) {
				left = that.startLeft;
			}
			if (Math.abs(getRemainder) >= that.stepWidth / 2) {
				if (getRemainder > 0) {
					left = that.startLeft + that.stepWidth * (getInteget + 1); //向右移动
				} else if (getRemainder < 0) {
					left = that.startLeft + that.stepWidth * (getInteget - 1); //向左移动
				}
			} else {
				left = that.startLeft + that.stepWidth * getInteget;
			}
			left = Math.round((left - that.getSliderGuideLeftDeviation) / that.stepWidth) * that.stepWidth + that.getSliderGuideLeftDeviation; //消除快速滑动产生的误差

			var sliderMoveStopFlag = (getBodyWidth / 2 - that.startLeft - that.moveX) / that.stepWidth * that.stepNum + that.setMinNum;
			if (sliderMoveStopFlag < that.setMinNum) {
				left = getBodyWidth / 2;
			} else if (sliderMoveStopFlag > that.setMaxNum) {
				left = getBodyWidth / 2 - that.getObj.offsetWidth;
			}
			that.getObj.style.left = left + 'px';

			// var SliderGuideDataValue = Math.round((getBodyWidth/2-offsetLeft)/that.stepWidth) * that.stepNum + that.setMinNum;
			var SliderGuideDataValue = Math.round((getBodyWidth / 2 - left) / that.stepWidth) * that.stepNum + that.setMinNum;
			that.setSliderGuideDataValue(zdval === undefined ? SliderGuideDataValue : zdval);
			that.loadMoreSlider();
		},
		setValue: function setValue(val) {
			// var getSliderGuideDom = document.getElementById('sliderGuide');
			var parent = this.getObj.parentNode || this.getObj.parentElement;
			var getSliderGuideDom = parent.querySelector('#sliderGuide');
			var value = getSliderGuideDom.getAttribute('data-value');
			this.startLeft = this.getObj.offsetLeft;
			this.moveX = (value - val) / this.stepNum * this.stepWidth;
			this.setSliderValue('', val);
		}
	};
	if (typeof module != 'undefined' && module.exports) {
		module.exports = Ruler;
	} else if (true) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return Ruler;
		}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.Ruler = Ruler;
	}
})();

/***/ }),

/***/ 411:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "wrap-rule" }, [
    _c("div", { staticClass: "my-slider", attrs: { id: _vm.id } })
  ])
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-046baef0", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ })

/******/ });
});
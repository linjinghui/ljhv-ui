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
/******/ 	return __webpack_require__(__webpack_require__.s = 228);
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

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/0024bfb04303fd75db1502964c0ce817.eot";

/***/ }),

/***/ 103:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _laydate = __webpack_require__(237);

var _laydate2 = _interopRequireDefault(_laydate);

var _index = __webpack_require__(19);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
//

exports.default = {
  name: 'DatePicker',
  components: {
    'lvInput': _index2.default
  },
  data: function data() {
    return {
      id: 'datepicker_' + new Date().getTime() + parseInt(Math.random() * 100),
      val: '',
      isfocus: false
    };
  },
  props: {
    // value: '',
    // 开始时间
    start: '',
    // 结束时间 - option.range 存在的时候生效
    end: '',
    placeholder: {
      default: '请选择日期'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    // 更多配置参考API https://www.layui.com/laydate/
    option: {
      default: function _default() {
        return {
          type: 'datetime',
          format: 'yyyy-MM-dd HH:mm:ss'
        };
      }
    }
  },
  watch: {
    start: function start(val) {
      // this.val = this.dataFormat(val, this.option.format);
      this.countVal();
    }
  },
  computed: {
    separator: function separator() {
      return this.option.range === true ? ' - ' : this.option.range ? ' ' + this.option.range + ' ' : '';
    }
  },
  beforeDestroy: function beforeDestroy() {
    //
  },
  mounted: function mounted() {
    // this.val = this.dataFormat(this.value, this.option.format);
    this.countVal();
    this.initLaydate();
  },
  methods: {
    // 根据start、end计算val
    countVal: function countVal() {
      var str = this.dataFormat(this.start, this.option.format);

      if (this.option.range) {
        str += this.separator + this.dataFormat(this.end, this.option.format);
      }
      this.val = str === this.separator ? '' : str;
    },
    dataFormat: function dataFormat(date, fmt) {
      if (!date || date + '' === 'Invalid Date' || new Date(date) + '' === 'Invalid Date' || !fmt) {
        return '';
      }
      if (!isNaN(date) && (date + '').length === 10) {
        date += '000';
      }
      date = new Date(date);
      var o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'H+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds(),
        'q+': Math.floor((date.getMonth() + 3) / 3),
        'S': date.getMilliseconds()
      };

      if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
      }

      for (var k in o) {
        if (new RegExp('(' + k + ')').test(fmt)) {
          fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length));
        }
      }
      return fmt;
    },
    initLaydate: function initLaydate() {
      var _this = this;
      var _tar = '.' + _this.id;

      _laydate2.default.render(Object.assign(_this.option, {
        elem: _tar + ' input',
        eventElem: _tar + ' .lv-icon-date:not([disabled])',
        trigger: 'click',
        change: function change(value, date, endDate) {
          _this.$emit('input', isNaN(_this.start) ? value : new Date(value).getTime());
        },
        done: function done(value, date, endDate) {
          // value 得到日期生成的值，如：2017-08-18
          // date 得到日期时间对象：{year: 2017, month: 8, date: 18, hours: 0, minutes: 0, seconds: 0}
          // endDate 得结束的日期时间对象，开启范围选择（range: true）才会返回。对象成员同上。
          // _this.$emit('input', isNaN(_this.value) ? value : (value ? new Date(value).getTime() : 0));
          var start = value;
          var end = '';

          if (_this.option.range) {
            start = value.split(_this.separator)[0];
            end = value.split(_this.separator)[1];
          }

          _this.$emit('update:start', _this.start === '' || isNaN(_this.start) ? start : start ? new Date(start).getTime() : 0);
          _this.$emit('update:end', _this.start === '' || isNaN(_this.start) ? end : end ? new Date(end).getTime() : 0);
        }
      }));
    }
  }
};

/***/ }),

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
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
//
//
//
//
//
//
//
//


exports.default = {
  name: 'Input',
  data: function data() {
    return {
      id: 'ipt_' + new Date().getTime() + parseInt(Math.random() * 100),
      focus: false,
      // 是否显示眼睛
      eye: false,
      ptype: this.type
    };
  },
  props: {
    value: '',
    type: {
      default: 'text'
    },
    name: '',
    maxlength: {
      default: 500
    },
    readonly: {
      type: Boolean,
      default: false
    },
    placeholder: '',
    nopaste: {
      type: Boolean,
      default: false
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    clear: {
      type: Boolean,
      default: true
    },
    // number|mobile|fix|email|url|letter|chinese
    rule: ''
  },
  watch: {
    value: function value(val) {
      this.handleSetInputVal(val);
    },
    type: function type(val) {
      this.ptype = val;
    },
    autofocus: function autofocus(val) {
      if (val) {
        this.handleAutoFocus();
      }
    }
  },
  computed: {},
  beforeDestroy: function beforeDestroy() {
    //
  },
  mounted: function mounted() {
    this.eye = this.type === 'password';
    this.autofocus && this.handleAutoFocus();
    this.handleSetInputVal(this.value);
  },
  methods: {
    handleSetInputVal: function handleSetInputVal(value) {
      if (this.$refs.ipt.value !== value) {
        this.$refs.ipt.value = value;
      }
    },
    handleInput: function handleInput(e) {
      var _this = this;

      this.timer && setTimeout(this.timer);
      this.timer = setTimeout(function () {
        _this.$emit('input', e.target.value);
        _this.$emit('change', e.target.value);
      }, 100);
    },
    handleFocus: function handleFocus() {
      if (!this.disabled) {
        this.focus = true;
        this.$emit('focus');
      }
    },
    handleAutoFocus: function handleAutoFocus() {
      this.$refs.ipt.focus();
    },
    handleBlur: function handleBlur() {
      if (!this.disabled) {
        this.focus = false;
        this.$emit('blur');

        // if (this.rule) {
        //   this.$emit('input', this.regValue());
        // }
      }
    },
    handleKeyup: function handleKeyup(event) {
      this.$emit('keyup', event.keyCode);
    },
    handleEnter: function handleEnter() {
      var _this = this;

      setTimeout(function () {
        _this.$emit('enter', _this.value);
      }, 200);
    },
    handleSearch: function handleSearch() {
      if (!this.disabled) {
        this.$emit('search', this.value);
      }
    },
    handleClear: function handleClear() {
      if (!this.disabled) {
        this.handleSetInputVal('');
        this.handleAutoFocus();
        this.$emit('input', '');
        this.$emit('change', '');
      }
    },
    handleTogglePwd: function handleTogglePwd() {
      this.ptype = this.ptype === 'password' ? 'text' : 'password';
    },
    regValue: function regValue() {
      var value = JSON.parse(JSON.stringify(this.value || ''));

      if (typeof value !== 'string') {
        value += '';
      }

      if (this.rule === 'number') {
        value = value.replace(/[\D]+/g, '');
      } else if (this.rule === 'float') {
        var _val = '';
        var _i = 0;

        // 删除非数字.的字符串
        _val = value.replace(/[^0-9.]+/g, '');
        // 去除多余的.
        _val = _val.replace(/\./g, function (a) {
          ++_i;
          return _i === 1 ? a : '';
        });
        value = _val;
      } else if (this.rule === 'mobile') {
        value = value.replace(/[\D]+/g, '');
        if (value.indexOf('1') !== 0) {
          value = '1' + value.substring(0, 10);
        } else {
          value = value.substring(0, 11);
        }
      } else if (this.rule === 'fix') {
        value = value.replace(/[^0-9-]+/g, '');
      } else if (this.rule === 'email') {
        value = value.replace(/^@+|@+$/g, '').replace(/\s+/g, '');
        if (value.indexOf('@') < 0) {
          value = value + '@qq.com';
        }
      } else if (this.rule === 'url') {
        if (value.indexOf('http://') !== 0 && value.indexOf('https://') !== 0) {
          value = 'http://' + value;
        }
      } else if (this.rule === 'letter') {
        value = value.replace(/[^a-zA-Z]+/g, '');
      } else if (this.rule === 'chinese') {
        value = value.replace(/[^\u4e00-\u9fa5]+/g, '');
      } else if (typeof this.rule === 'string') {
        value = value.replace(new RegExp(this.rule, 'g'), '');
      }

      return value;
    }
  }
};

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

/***/ 17:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_170f9f34_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_main_vue__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(2);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(20)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-170f9f34"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_170f9f34_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_main_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_170f9f34_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_main_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "packages\\input\\src\\main.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-170f9f34", Component.options)
  } else {
    hotAPI.reload("data-v-170f9f34", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _main = __webpack_require__(17);

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
_main2.default.install = function (Vue) {
  Vue.component(_main2.default.name, _main2.default);
};

exports.default = _main2.default;

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

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(21);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(1).default
var update = add("048ec21e", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-170f9f34\",\"scoped\":true,\"sourceMap\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./main.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-170f9f34\",\"scoped\":true,\"sourceMap\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./main.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, "\ninput[data-v-170f9f34] {\n  -ms-flex: 1;\n      flex: 1;\n  padding: 0 10px;\n  width: 100%;\n  height: 100%;\n  border: 0;\n  color: inherit;\n  font: inherit;\n  outline: medium;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\ninput[disabled][data-v-170f9f34] {\n  cursor: text;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\ninput[data-v-170f9f34]::-ms-clear {\n  display: none;\n}\n.input[data-v-170f9f34] {\n  position: relative;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n  -ms-flex-align: center;\n      align-items: center;\n  width: 100%;\n  height: 30px;\n  line-height: 1;\n  border-style: solid;\n  border-width: 1px;\n  border-radius: 4px;\n  overflow: hidden;\n}\n.icon[data-v-170f9f34] {\n  margin-right: 10px;\n  cursor: pointer;\n  color: #666;\n}\n.icon[data-v-170f9f34]:not([disabled]):hover {\n  opacity: 0.8;\n}\n.lv-icon-eye[data-v-170f9f34], .lv-icon-eye-close[data-v-170f9f34] {\n  font-size: 22px;\n}\n.l-icon[data-v-170f9f34] {\n  margin-left: 10px;\n}\n", ""]);

// exports


/***/ }),

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "input",
      class: { "theme-bc": _vm.focus },
      style: "border-color:" + (_vm.focus ? "" : "#ddd")
    },
    [
      _vm._t("left"),
      _c("input", {
        ref: "ipt",
        attrs: {
          autoComplete: "off",
          name: _vm.name,
          type: _vm.ptype,
          disabled: _vm.disabled,
          maxlength: _vm.maxlength,
          placeholder: _vm.placeholder,
          readonly: _vm.readonly,
          onpaste: _vm.nopaste ? "return false" : ""
        },
        on: {
          input: _vm.handleInput,
          focus: _vm.handleFocus,
          blur: _vm.handleBlur,
          keyup: [
            _vm.handleKeyup,
            function($event) {
              if (
                !$event.type.indexOf("key") &&
                _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
              ) {
                return null
              }
              return _vm.handleEnter($event)
            }
          ]
        }
      }),
      _vm.clear && !_vm.readonly && _vm.value
        ? _c("i", {
            staticClass: "icon lv-icon-x-2",
            attrs: { disabled: _vm.disabled },
            on: { click: _vm.handleClear }
          })
        : _vm._e(),
      _vm.ptype === "search"
        ? _c("i", {
            staticClass: "icon lv-icon-search",
            attrs: { disabled: _vm.disabled },
            on: { click: _vm.handleSearch }
          })
        : _vm._e(),
      _vm.eye && _vm.ptype === "password"
        ? _c("i", {
            staticClass: "icon lv-icon-eye",
            on: { click: _vm.handleTogglePwd }
          })
        : _vm._e(),
      _vm.eye && _vm.ptype === "text"
        ? _c("i", {
            staticClass: "icon lv-icon-eye-close",
            on: { click: _vm.handleTogglePwd }
          })
        : _vm._e(),
      _vm._t("right")
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-170f9f34", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ 228:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _main = __webpack_require__(229);

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
_main2.default.install = function (Vue) {
  Vue.component(_main2.default.name, _main2.default);
};

exports.default = _main2.default;

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1b0f6ef0_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_main_vue__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(2);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(230)
  __webpack_require__(235)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1b0f6ef0"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1b0f6ef0_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_main_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1b0f6ef0_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_main_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "packages\\datepicker\\src\\main.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1b0f6ef0", Component.options)
  } else {
    hotAPI.reload("data-v-1b0f6ef0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 230:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(231);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(1).default
var update = add("6b304666", content, false, {});
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

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(16);
exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, "/** 图标字体 **/\n@font-face {font-family: 'laydate-icon';\r\n  src: url(" + escape(__webpack_require__(102)) + ");\r\n  src: url(" + escape(__webpack_require__(102)) + "#iefix) format('embedded-opentype'),\r\n  url(" + escape(__webpack_require__(232)) + "#iconfont) format('svg'),\r\n  url(" + escape(__webpack_require__(233)) + ") format('woff'),\r\n  url(" + escape(__webpack_require__(234)) + ") format('truetype');\n}\n.laydate-icon{\r\n  font-family:\"laydate-icon\" !important;\r\n  font-size: 16px;\r\n  font-style: normal;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\n}\r\n/**\r\n \r\n @Name: laydata\r\n @Author: 贤心\r\n \r\n **/\nhtml #layuicss-laydate{display: none; position: absolute; width: 1989px;\n}\r\n/* 初始化 */\n.layui-laydate *{margin: 0; padding: 0;\n}\r\n/* 主体结构 */\n.layui-laydate, .layui-laydate *{box-sizing: border-box;\n}\n.layui-laydate{position: absolute; z-index: 66666666; margin: 5px 0; border-radius: 2px; font-size: 14px; animation-duration: 0.3s; animation-fill-mode: both;\n}\n.layui-laydate-main{width: 272px;\n}\n.layui-laydate-header *, .layui-laydate-content td, .layui-laydate-list li{transition-duration: .3s; -webkit-transition-duration: .3s;\n}\n@keyframes laydate-upbit{\nfrom {transform: translate3d(0, 20px, 0);  opacity: 0.3;\n}\nto {transform: translate3d(0, 0, 0);  opacity: 1;\n}\n}\n.layui-laydate{ animation-name: laydate-upbit;\n}\n.layui-laydate-static{ position: relative; z-index: 0; display: inline-block; margin: 0; animation: none;\n}\r\n/* 展开年月列表时 */\n.laydate-ym-show .laydate-prev-m, .laydate-ym-show .laydate-next-m{display: none !important;\n}\n.laydate-ym-show .laydate-prev-y, .laydate-ym-show .laydate-next-y{display: inline-block !important;\n}\n.laydate-ym-show .laydate-set-ym span[lay-type=\"month\"]{display: none !important;\n}\r\n/* 展开时间列表时 */\n.laydate-time-show .layui-laydate-header .layui-icon, .laydate-time-show .laydate-set-ym span[lay-type=\"year\"], .laydate-time-show .laydate-set-ym span[lay-type=\"month\"]{display: none !important;\n}\r\n/* 头部结构 */\n.layui-laydate-header{position: relative; line-height:30px; padding: 10px 70px 5px;\n}\n.layui-laydate-header *{display: inline-block; vertical-align: bottom;\n}\n.layui-laydate-header i{position: absolute; top: 10px; padding: 0 5px; color: #999; font-size: 18px; cursor: pointer;\n}\n.layui-laydate-header i.laydate-prev-y{left: 15px;\n}\n.layui-laydate-header i.laydate-prev-m{left: 45px;\n}\n.layui-laydate-header i.laydate-next-y{right: 15px;\n}\n.layui-laydate-header i.laydate-next-m{right: 45px;\n}\n.laydate-set-ym{width: 100%; text-align: center; box-sizing: border-box; text-overflow: ellipsis; overflow: hidden; white-space: nowrap;\n}\n.laydate-set-ym span{padding: 0 5px; cursor: pointer;\n}\n.laydate-time-text{cursor: default !important;\n}\r\n/* 主体结构 */\n.layui-laydate-content{position: relative; padding: 10px; -moz-user-select: none; -webkit-user-select: none; -ms-user-select: none;\n}\n.layui-laydate-content table{border-collapse: collapse; border-spacing: 0;\n}\n.layui-laydate-content th, .layui-laydate-content td{width: 36px; height: 30px; padding: 5px; text-align: center;\n}\n.layui-laydate-content th{font-weight: 400;\n}\n.layui-laydate-content td{position: relative; cursor: pointer;\n}\n.laydate-day-mark{position: absolute; left: 0; top: 0; width: 100%; height: 100%; line-height: 30px; font-size: 12px; overflow: hidden;\n}\n.laydate-day-mark::after{position: absolute; content:''; right: 2px; top: 2px; width: 5px; height: 5px; border-radius: 50%;\n}\r\n/* 底部结构 */\n.layui-laydate-footer{position: relative; height: 46px; line-height: 26px; padding: 10px 20px;\n}\n.layui-laydate-footer span{margin-right: 15px; display: inline-block; cursor: pointer; font-size: 12px;\n}\n.layui-laydate-footer span:hover{color: #5FB878;\n}\n.laydate-footer-btns{position: absolute; right: 10px; top: 10px;\n}\n.laydate-footer-btns span{height: 26px; line-height: 26px; margin: 0 0 0 -1px; padding: 0 10px; border: 1px solid #C9C9C9; background-color: #fff;  white-space: nowrap; vertical-align: top; border-radius: 2px;\n}\r\n/* 年月列表 */\n.layui-laydate-list{position: absolute; left: 0; top: 0; width: 100%; height: 100%; padding: 10px; box-sizing: border-box; background-color: #fff;\n}\n.layui-laydate-list>li{position: relative; display: inline-block; width: 33.3%; height: 36px; line-height: 36px; margin: 3px 0; vertical-align: middle; text-align: center; cursor: pointer;\n}\n.laydate-month-list>li{width: 25%; margin: 17px 0;\n}\n.laydate-time-list{\n}\n.laydate-time-list>li{height: 100%; margin: 0; line-height: normal; cursor: default;\n}\n.laydate-time-list p{position: relative; top: -4px; line-height: 29px;\n}\n.laydate-time-list ol{height: 181px; overflow: hidden;\n}\n.laydate-time-list>li:hover ol{overflow-y: auto;\n}\n.laydate-time-list ol li{width: 130%; padding-left: 33px; line-height: 30px; text-align: left; cursor: pointer;\n}\r\n/* 提示 */\n.layui-laydate-hint{position: absolute; top: 115px; left: 50%; width: 250px; margin-left: -125px; line-height: 20px; padding: 15px; text-align: center; font-size: 12px; color: #FF5722;\n}\r\n/* 双日历 */\n.layui-laydate-range{width: 546px;\n}\n.layui-laydate-range .layui-laydate-main{display: inline-block; vertical-align: middle;\n}\n.layui-laydate-range .laydate-main-list-0 .laydate-next-m, .layui-laydate-range .laydate-main-list-0 .laydate-next-y, .layui-laydate-range .laydate-main-list-1 .laydate-prev-y, .layui-laydate-range .laydate-main-list-1 .laydate-prev-m{display: none;\n}\n.layui-laydate-range .laydate-main-list-1 .layui-laydate-content{border-left: 1px solid #e2e2e2;\n}\r\n/* 默认简约主题 */\n.layui-laydate, .layui-laydate-hint{border: 1px solid #d2d2d2; box-shadow: 0 2px 4px rgba(0,0,0,.12); background-color: #fff; color: #666;\n}\n.layui-laydate-header{border-bottom: 1px solid #e2e2e2;\n}\n.layui-laydate-header i:hover, .layui-laydate-header span:hover{color: #5FB878;\n}\n.layui-laydate-content{border-top: none 0; border-bottom: none 0;\n}\n.layui-laydate-content th{color: #333;\n}\n.layui-laydate-content td{color: #666;\n}\n.layui-laydate-content td.laydate-selected{background-color: #00F7DE;\n}\n.laydate-selected:hover{background-color: #00F7DE !important;\n}\n.layui-laydate-content td:hover, .layui-laydate-list li:hover{background-color: #eaeaea; color: #333;\n}\n.laydate-time-list li ol{margin: 0; padding: 0; border: 1px solid #e2e2e2; border-left-width: 0;\n}\n.laydate-time-list li:first-child ol{border-left-width: 1px;\n}\n.laydate-time-list>li:hover{background: none;\n}\n.layui-laydate-content .laydate-day-prev, .layui-laydate-content .laydate-day-next{color: #d2d2d2;\n}\n.laydate-selected.laydate-day-prev, .laydate-selected.laydate-day-next{background-color: #f8f8f8 !important;\n}\n.layui-laydate-footer{border-top: 1px solid #e2e2e2;\n}\n.layui-laydate-hint{color: #FF5722;\n}\n.laydate-day-mark::after{background-color: #5FB878;\n}\n.layui-laydate-content td.layui-this .laydate-day-mark::after{display: none;\n}\n.layui-laydate-footer span[lay-type=\"date\"]{color: #5FB878;\n}\r\n/* .layui-laydate .layui-this{background-color: #009688; color: #fff !important;} */\n.layui-laydate .laydate-disabled, .layui-laydate .laydate-disabled:hover{background:none !important; color: #d2d2d2 !important; cursor: not-allowed !important; -moz-user-select: none; -webkit-user-select: none; -ms-user-select: none;\n}\r\n/* 墨绿/自定义背景色主题 */\n.laydate-theme-molv{border: none;\n}\n.laydate-theme-molv.layui-laydate-range{width: 548px\n}\n.laydate-theme-molv .layui-laydate-main{width: 274px;\n}\n.laydate-theme-molv .layui-laydate-header{border: none; background-color: #009688;\n}\n.laydate-theme-molv .layui-laydate-header i, .laydate-theme-molv .layui-laydate-header span{color: #f6f6f6;\n}\n.laydate-theme-molv .layui-laydate-header i:hover, .laydate-theme-molv .layui-laydate-header span:hover{color: #fff;\n}\n.laydate-theme-molv .layui-laydate-content{border: 1px solid #e2e2e2; border-top: none; border-bottom: none;\n}\n.laydate-theme-molv .laydate-main-list-1 .layui-laydate-content{border-left: none;\n}\n.laydate-theme-molv .layui-laydate-footer{border: 1px solid #e2e2e2;\n}\r\n/* 格子主题 */\n.laydate-theme-grid .layui-laydate-content td, .laydate-theme-grid .layui-laydate-content thead, .laydate-theme-grid .laydate-year-list>li, .laydate-theme-grid .laydate-month-list>li{border: 1px solid #e2e2e2;\n}\n.laydate-theme-grid .laydate-selected, .laydate-theme-grid .laydate-selected:hover{background-color: #f2f2f2 !important; color: #009688 !important;\n}\n.laydate-theme-grid .laydate-selected.laydate-day-prev, .laydate-theme-grid .laydate-selected.laydate-day-next{color: #d2d2d2 !important;\n}\n.laydate-theme-grid .laydate-year-list, .laydate-theme-grid .laydate-month-list{margin: 1px 0 0 1px;\n}\n.laydate-theme-grid .laydate-year-list>li, .laydate-theme-grid .laydate-month-list>li{margin: 0 -1px -1px 0;\n}\n.laydate-theme-grid .laydate-year-list>li{height: 43px; line-height: 43px;\n}\n.laydate-theme-grid .laydate-month-list>li{height: 71px; line-height: 71px;\n}\r\n/* 墨绿/自定义背景色主题 */\n.theme-b.layui-laydate-header i, .theme-b.layui-laydate-header span{color: #f6f6f6;\n}\n.theme-b.layui-laydate-header i:hover, .theme-b.layui-laydate-header span:hover{color: #fff;\n}\n.layui-laydate-content td.theme-b{color: #fff;\n}\n.laydate-theme-molv .layui-laydate-content{border: 1px solid #e2e2e2; border-top: none; border-bottom: none;\n}\n.laydate-theme-molv .laydate-main-list-1 .layui-laydate-content{border-left: none;\n}\n.laydate-theme-molv .layui-laydate-footer{border: 1px solid #e2e2e2;\n}\n.layui-laydate-footer span:hover {\n  color: inherit;\n  opacity: 0.8;\n}\n.layui-laydate-footer span[lay-type=\"date\"] {\n  color: inherit;\n}\n", ""]);

// exports


/***/ }),

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/7be6e41a9a45d2716cad3b0a908a2842.svg";

/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/679e543fb4dc1fef17817cd194a849e7.woff";

/***/ }),

/***/ 234:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/5952d9f29f6c01073a4f4e64833e73f3.ttf";

/***/ }),

/***/ 235:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(236);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(1).default
var update = add("22c16749", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-1b0f6ef0\",\"scoped\":true,\"sourceMap\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./main.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-1b0f6ef0\",\"scoped\":true,\"sourceMap\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./main.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 236:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, "\n.lv-icon-date[data-v-1b0f6ef0] {\n  font-size: 20px;\n}\n", ""]);

// exports


/***/ }),

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 
 @Name : layDate 5.0.9 日期时间控件
 @Author: 贤心
 @Site：http://www.layui.com/laydate/
 @License：MIT
 
 */

;!function () {
  "use strict";

  var isLayui = window.layui && layui.define,
      _ready = {
    getPath: function () {
      var jsPath = document.currentScript ? document.currentScript.src : function () {
        var js = document.scripts,
            last = js.length - 1,
            src;
        for (var i = last; i > 0; i--) {
          if (js[i].readyState === 'interactive') {
            src = js[i].src;
            break;
          }
        }
        return src || js[last].src;
      }();
      return jsPath.substring(0, jsPath.lastIndexOf('/') + 1);
    }()

    //获取节点的style属性值
    , getStyle: function getStyle(node, name) {
      var style = node.currentStyle ? node.currentStyle : window.getComputedStyle(node, null);
      return style[style.getPropertyValue ? 'getPropertyValue' : 'getAttribute'](name);
    }

    //载入CSS配件
    , link: function link(href, fn, cssname) {

      //未设置路径，则不主动加载css
      if (!laydate.path) return;

      var head = document.getElementsByTagName("head")[0],
          link = document.createElement('link');
      if (typeof fn === 'string') cssname = fn;
      var app = (cssname || href).replace(/\.|\//g, '');
      var id = 'layuicss-' + app,
          timeout = 0;

      link.rel = 'stylesheet';
      link.href = laydate.path + href;
      link.id = id;

      if (!document.getElementById(id)) {
        head.appendChild(link);
      }

      if (typeof fn !== 'function') return;

      //轮询css是否加载完毕
      (function poll() {
        if (++timeout > 8 * 1000 / 100) {
          return window.console && console.error('laydate.css: Invalid');
        };
        parseInt(_ready.getStyle(document.getElementById(id), 'width')) === 1989 ? fn() : setTimeout(poll, 100);
      })();
    }
  },
      laydate = {
    v: '5.0.9',
    config: {} //全局配置项
    , index: window.laydate && window.laydate.v ? 100000 : 0,
    path: _ready.getPath

    //设置全局项
    , set: function set(options) {
      var that = this;
      that.config = lay.extend({}, that.config, options);
      return that;
    }

    //主体CSS等待事件
    , ready: function ready(fn) {
      var cssname = 'laydate',
          ver = '',
          path = (isLayui ? 'modules/laydate/' : 'theme/') + 'default/laydate.css?v=' + laydate.v + ver;
      isLayui ? layui.addcss(path, fn, cssname) : _ready.link(path, fn, cssname);
      // if(typeof fn !== 'function') return;
      // fn();
      return this;
    }

    //操作当前实例
  },
      thisDate = function thisDate() {
    var that = this;
    return {
      //提示框
      hint: function hint(content) {
        that.hint.call(that, content);
      },
      config: that.config
    };
  }

  //字符常量  layui-this
  ,
      MOD_NAME = 'laydate',
      ELEM = '.layui-laydate',
      THIS = 'theme-b',
      SHOW = 'layui-show',
      HIDE = 'layui-hide',
      DISABLED = 'laydate-disabled',
      TIPS_OUT = '开始日期超出了结束日期<br>建议重新选择',
      LIMIT_YEAR = [100, 200000],
      ELEM_STATIC = 'layui-laydate-static',
      ELEM_LIST = 'layui-laydate-list',
      ELEM_SELECTED = 'laydate-selected',
      ELEM_HINT = 'layui-laydate-hint',
      ELEM_PREV = 'laydate-day-prev',
      ELEM_NEXT = 'laydate-day-next',
      ELEM_FOOTER = 'layui-laydate-footer',
      ELEM_CONFIRM = '.laydate-btns-confirm',
      ELEM_TIME_TEXT = 'laydate-time-text',
      ELEM_TIME_BTN = '.laydate-btns-time'

  //组件构造器
  ,
      Class = function Class(options) {
    var that = this;
    that.index = ++laydate.index;
    that.config = lay.extend({}, that.config, laydate.config, options);
    laydate.ready(function () {
      that.init();
    });
  }

  //DOM查找
  ,
      lay = function lay(selector) {
    return new LAY(selector);
  }

  //DOM构造器
  ,
      LAY = function LAY(selector) {
    var index = 0,
        nativeDOM = (typeof selector === 'undefined' ? 'undefined' : _typeof(selector)) === 'object' ? [selector] : (this.selector = selector, document.querySelectorAll(selector || null));
    for (; index < nativeDOM.length; index++) {
      this.push(nativeDOM[index]);
    }
  };

  /*
    lay对象操作
  */

  LAY.prototype = [];
  LAY.prototype.constructor = LAY;

  //普通对象深度扩展
  lay.extend = function () {
    var ai = 1,
        args = arguments,
        clone = function clone(target, obj) {
      target = target || (obj.constructor === Array ? [] : {});
      for (var i in obj) {
        //如果值为对象，则进入递归，继续深度合并
        target[i] = obj[i] && obj[i].constructor === Object ? clone(target[i], obj[i]) : obj[i];
      }
      return target;
    };

    args[0] = _typeof(args[0]) === 'object' ? args[0] : {};

    for (; ai < args.length; ai++) {
      if (_typeof(args[ai]) === 'object') {
        clone(args[0], args[ai]);
      }
    }
    return args[0];
  };

  //ie版本
  lay.ie = function () {
    var agent = navigator.userAgent.toLowerCase();
    return !!window.ActiveXObject || "ActiveXObject" in window ? (agent.match(/msie\s(\d+)/) || [])[1] || '11' //由于ie11并没有msie的标识
    : false;
  }();

  //中止冒泡
  lay.stope = function (e) {
    e = e || window.event;
    e.stopPropagation ? e.stopPropagation() : e.cancelBubble = true;
  };

  //对象遍历
  lay.each = function (obj, fn) {
    var key,
        that = this;
    if (typeof fn !== 'function') return that;
    obj = obj || [];
    if (obj.constructor === Object) {
      for (key in obj) {
        if (fn.call(obj[key], key, obj[key])) break;
      }
    } else {
      for (key = 0; key < obj.length; key++) {
        if (fn.call(obj[key], key, obj[key])) break;
      }
    }
    return that;
  };

  //数字前置补零
  lay.digit = function (num, length, end) {
    var str = '';
    num = String(num);
    length = length || 2;
    for (var i = num.length; i < length; i++) {
      str += '0';
    }
    return num < Math.pow(10, length) ? str + (num | 0) : num;
  };

  //创建元素
  lay.elem = function (elemName, attr) {
    var elem = document.createElement(elemName);
    lay.each(attr || {}, function (key, value) {
      elem.setAttribute(key, value);
    });
    return elem;
  };

  //追加字符
  LAY.addStr = function (str, new_str) {
    str = str.replace(/\s+/, ' ');
    new_str = new_str.replace(/\s+/, ' ').split(' ');
    lay.each(new_str, function (ii, item) {
      if (!new RegExp('\\b' + item + '\\b').test(str)) {
        str = str + ' ' + item;
      }
    });
    return str.replace(/^\s|\s$/, '');
  };

  //移除值
  LAY.removeStr = function (str, new_str) {
    str = str.replace(/\s+/, ' ');
    new_str = new_str.replace(/\s+/, ' ').split(' ');
    lay.each(new_str, function (ii, item) {
      var exp = new RegExp('\\b' + item + '\\b');
      if (exp.test(str)) {
        str = str.replace(exp, '');
      }
    });
    return str.replace(/\s+/, ' ').replace(/^\s|\s$/, '');
  };

  //查找子元素
  LAY.prototype.find = function (selector) {
    var that = this;
    var index = 0,
        arr = [],
        isObject = (typeof selector === 'undefined' ? 'undefined' : _typeof(selector)) === 'object';

    this.each(function (i, item) {
      var nativeDOM = isObject ? [selector] : item.querySelectorAll(selector || null);
      for (; index < nativeDOM.length; index++) {
        arr.push(nativeDOM[index]);
      }
      that.shift();
    });

    if (!isObject) {
      that.selector = (that.selector ? that.selector + ' ' : '') + selector;
    }

    lay.each(arr, function (i, item) {
      that.push(item);
    });

    return that;
  };

  //DOM遍历
  LAY.prototype.each = function (fn) {
    return lay.each.call(this, this, fn);
  };

  //添加css类
  LAY.prototype.addClass = function (className, type) {
    return this.each(function (index, item) {
      item.className = LAY[type ? 'removeStr' : 'addStr'](item.className, className);
    });
  };

  //移除css类
  LAY.prototype.removeClass = function (className) {
    return this.addClass(className, true);
  };

  //是否包含css类
  LAY.prototype.hasClass = function (className) {
    var has = false;
    this.each(function (index, item) {
      if (new RegExp('\\b' + className + '\\b').test(item.className)) {
        has = true;
      }
    });
    return has;
  };

  //添加或获取属性
  LAY.prototype.attr = function (key, value) {
    var that = this;
    return value === undefined ? function () {
      if (that.length > 0) return that[0].getAttribute(key);
    }() : that.each(function (index, item) {
      item.setAttribute(key, value);
    });
  };

  //移除属性
  LAY.prototype.removeAttr = function (key) {
    return this.each(function (index, item) {
      item.removeAttribute(key);
    });
  };

  //设置HTML内容
  LAY.prototype.html = function (html) {
    return this.each(function (index, item) {
      item.innerHTML = html;
    });
  };

  //设置值
  LAY.prototype.val = function (value) {
    return this.each(function (index, item) {
      item.value = value;
    });
  };

  //追加内容
  LAY.prototype.append = function (elem) {
    return this.each(function (index, item) {
      (typeof elem === 'undefined' ? 'undefined' : _typeof(elem)) === 'object' ? item.appendChild(elem) : item.innerHTML = item.innerHTML + elem;
    });
  };

  //移除内容
  LAY.prototype.remove = function (elem) {
    return this.each(function (index, item) {
      elem ? item.removeChild(elem) : item.parentNode.removeChild(item);
    });
  };

  //事件绑定
  LAY.prototype.on = function (eventName, fn) {
    return this.each(function (index, item) {
      item.attachEvent ? item.attachEvent('on' + eventName, function (e) {
        e.target = e.srcElement;
        fn.call(item, e);
      }) : item.addEventListener(eventName, fn, false);
    });
  };

  //解除事件
  LAY.prototype.off = function (eventName, fn) {
    return this.each(function (index, item) {
      item.detachEvent ? item.detachEvent('on' + eventName, fn) : item.removeEventListener(eventName, fn, false);
    });
  };

  /*
    组件操作
  */

  //是否闰年
  Class.isLeapYear = function (year) {
    return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
  };

  //默认配置
  Class.prototype.config = {
    type: 'date' //控件类型，支持：year/month/date/time/datetime
    , range: false //是否开启范围选择，即双控件
    , format: 'yyyy-MM-dd' //默认日期格式
    , value: null //默认日期，支持传入new Date()，或者符合format参数设定的日期格式字符
    , min: '1900-1-1' //有效最小日期，年月日必须用“-”分割，时分秒必须用“:”分割。注意：它并不是遵循 format 设定的格式。
    , max: '2099-12-31' //有效最大日期，同上
    , trigger: 'focus' //呼出控件的事件
    , show: false //是否直接显示，如果设置true，则默认直接显示控件
    , showBottom: true //是否显示底部栏
    , btns: ['clear', 'now', 'confirm'] //右下角显示的按钮，会按照数组顺序排列
    , lang: 'cn' //语言，只支持cn/en，即中文和英文
    , theme: 'default' //主题
    , position: null //控件定位方式定位, 默认absolute，支持：fixed/absolute/static
    , calendar: false //是否开启公历重要节日，仅支持中文版
    , mark: {} //日期备注，如重要事件或活动标记
    , zIndex: null //控件层叠顺序
    , done: null //控件选择完毕后的回调，点击清空/现在/确定也均会触发
    , change: null //日期时间改变后的回调
  };

  //多语言
  Class.prototype.lang = function () {
    var that = this,
        options = that.config,
        text = {
      cn: {
        weeks: ['日', '一', '二', '三', '四', '五', '六'],
        time: ['时', '分', '秒'],
        timeTips: '选择时间',
        startTime: '开始时间',
        endTime: '结束时间',
        dateTips: '返回日期',
        month: ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'],
        tools: {
          confirm: '确定',
          clear: '清空',
          now: '现在'
        }
      },
      en: {
        weeks: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
        time: ['Hours', 'Minutes', 'Seconds'],
        timeTips: 'Select Time',
        startTime: 'Start Time',
        endTime: 'End Time',
        dateTips: 'Select Date',
        month: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        tools: {
          confirm: 'Confirm',
          clear: 'Clear',
          now: 'Now'
        }
      }
    };
    return text[options.lang] || text['cn'];
  };

  //初始准备
  Class.prototype.init = function () {
    var that = this,
        options = that.config,
        dateType = 'yyyy|y|MM|M|dd|d|HH|H|mm|m|ss|s',
        isStatic = options.position === 'static',
        format = {
      year: 'yyyy',
      month: 'yyyy-MM',
      date: 'yyyy-MM-dd',
      time: 'HH:mm:ss',
      datetime: 'yyyy-MM-dd HH:mm:ss'
    };

    options.elem = lay(options.elem);
    options.eventElem = lay(options.eventElem);

    if (!options.elem[0]) return;

    //日期范围分隔符
    if (options.range === true) options.range = '-';

    //根据不同type，初始化默认format
    if (options.format === format.date) {
      options.format = format[options.type];
    }

    //将日期格式转化成数组
    that.format = options.format.match(new RegExp(dateType + '|.', 'g')) || [];

    //生成正则表达式
    that.EXP_IF = '';
    that.EXP_SPLIT = '';
    lay.each(that.format, function (i, item) {
      var EXP = new RegExp(dateType).test(item) ? '\\d{' + function () {
        if (new RegExp(dateType).test(that.format[i === 0 ? i + 1 : i - 1] || '')) {
          if (/^yyyy|y$/.test(item)) return 4;
          return item.length;
        }
        if (/^yyyy$/.test(item)) return '1,4';
        if (/^y$/.test(item)) return '1,308';
        return '1,2';
      }() + '}' : '\\' + item;
      that.EXP_IF = that.EXP_IF + EXP;
      that.EXP_SPLIT = that.EXP_SPLIT + '(' + EXP + ')';
    });
    that.EXP_IF = new RegExp('^' + (options.range ? that.EXP_IF + '\\s\\' + options.range + '\\s' + that.EXP_IF : that.EXP_IF) + '$');
    that.EXP_SPLIT = new RegExp('^' + that.EXP_SPLIT + '$', '');

    //如果不是input|textarea元素，则默认采用click事件
    if (!that.isInput(options.elem[0])) {
      if (options.trigger === 'focus') {
        options.trigger = 'click';
      }
    }

    //设置唯一KEY
    if (!options.elem.attr('lay-key')) {
      options.elem.attr('lay-key', that.index);
      options.eventElem.attr('lay-key', that.index);
    }

    //记录重要日期
    options.mark = lay.extend({}, options.calendar && options.lang === 'cn' ? {
      '0-1-1': '元旦',
      '0-2-14': '情人',
      '0-3-8': '妇女',
      '0-3-12': '植树',
      '0-4-1': '愚人',
      '0-5-1': '劳动',
      '0-5-4': '青年',
      '0-6-1': '儿童',
      '0-9-10': '教师',
      '0-9-18': '国耻',
      '0-10-1': '国庆',
      '0-12-25': '圣诞'
    } : {}, options.mark);

    //获取限制内日期
    lay.each(['min', 'max'], function (i, item) {
      var ymd = [],
          hms = [];
      if (typeof options[item] === 'number') {
        //如果为数字
        var day = options[item],
            time = new Date().getTime(),
            STAMP = 86400000 //代表一天的时间戳
        ,
            thisDate = new Date(day ? day < STAMP ? time + day * STAMP : day //如果数字小于一天的时间戳，则数字为天数，否则为时间戳
        : time);
        ymd = [thisDate.getFullYear(), thisDate.getMonth() + 1, thisDate.getDate()];
        day < STAMP || (hms = [thisDate.getHours(), thisDate.getMinutes(), thisDate.getSeconds()]);
      } else {
        ymd = (options[item].match(/\d+-\d+-\d+/) || [''])[0].split('-');
        hms = (options[item].match(/\d+:\d+:\d+/) || [''])[0].split(':');
      }
      options[item] = {
        year: ymd[0] | 0 || new Date().getFullYear(),
        month: ymd[1] ? (ymd[1] | 0) - 1 : new Date().getMonth(),
        date: ymd[2] | 0 || new Date().getDate(),
        hours: hms[0] | 0,
        minutes: hms[1] | 0,
        seconds: hms[2] | 0
      };
    });

    that.elemID = 'layui-laydate' + options.elem.attr('lay-key');

    if (options.show || isStatic) that.render();
    isStatic || that.events();

    //默认赋值
    if (options.value) {
      if (options.value.constructor === Date) {
        that.setValue(that.parse(0, that.systemDate(options.value)));
      } else {
        that.setValue(options.value);
      }
    }
  };

  //控件主体渲染
  Class.prototype.render = function () {
    var that = this,
        options = that.config,
        lang = that.lang(),
        isStatic = options.position === 'static'

    //主面板
    ,
        elem = that.elem = lay.elem('div', {
      id: that.elemID,
      'class': ['layui-laydate', options.range ? ' layui-laydate-range' : '', isStatic ? ' ' + ELEM_STATIC : '', options.theme && options.theme !== 'default' && !/^#/.test(options.theme) ? ' laydate-theme-' + options.theme : ''].join('')
    })

    //主区域
    ,
        elemMain = that.elemMain = [],
        elemHeader = that.elemHeader = [],
        elemCont = that.elemCont = [],
        elemTable = that.table = []

    //底部区域
    ,
        divFooter = that.footer = lay.elem('div', {
      'class': ELEM_FOOTER
    });

    if (options.zIndex) elem.style.zIndex = options.zIndex;

    //单双日历区域
    lay.each(new Array(2), function (i) {
      if (!options.range && i > 0) {
        return true;
      }

      //头部区域
      var divHeader = lay.elem('div', {
        'class': 'theme-b layui-laydate-header'
      })

      //左右切换
      ,
          headerChild = [function () {
        //上一年
        var elem = lay.elem('i', {
          'class': 'layui-icon laydate-icon laydate-prev-y'
        });
        elem.innerHTML = '&#xe65a;';
        return elem;
      }(), function () {
        //上一月
        var elem = lay.elem('i', {
          'class': 'layui-icon laydate-icon laydate-prev-m'
        });
        elem.innerHTML = '&#xe603;';
        return elem;
      }(), function () {
        //年月选择
        var elem = lay.elem('div', {
          'class': 'laydate-set-ym'
        }),
            spanY = lay.elem('span'),
            spanM = lay.elem('span');
        elem.appendChild(spanY);
        elem.appendChild(spanM);
        return elem;
      }(), function () {
        //下一月
        var elem = lay.elem('i', {
          'class': 'layui-icon laydate-icon laydate-next-m'
        });
        elem.innerHTML = '&#xe602;';
        return elem;
      }(), function () {
        //下一年
        var elem = lay.elem('i', {
          'class': 'layui-icon laydate-icon laydate-next-y'
        });
        elem.innerHTML = '&#xe65b;';
        return elem;
      }()]

      //日历内容区域
      ,
          divContent = lay.elem('div', {
        'class': 'layui-laydate-content'
      }),
          table = lay.elem('table'),
          thead = lay.elem('thead'),
          theadTr = lay.elem('tr');

      //生成年月选择
      lay.each(headerChild, function (i, item) {
        divHeader.appendChild(item);
      });

      //生成表格
      thead.appendChild(theadTr);
      lay.each(new Array(6), function (i) {
        //表体
        var tr = table.insertRow(0);
        lay.each(new Array(7), function (j) {
          if (i === 0) {
            var th = lay.elem('th');
            th.innerHTML = lang.weeks[j];
            theadTr.appendChild(th);
          }
          tr.insertCell(j);
        });
      });
      table.insertBefore(thead, table.children[0]); //表头
      divContent.appendChild(table);

      elemMain[i] = lay.elem('div', {
        'class': 'layui-laydate-main laydate-main-list-' + i
      });

      elemMain[i].appendChild(divHeader);
      elemMain[i].appendChild(divContent);

      elemHeader.push(headerChild);
      elemCont.push(divContent);
      elemTable.push(table);
    });

    //生成底部栏
    lay(divFooter).html(function () {
      var html = [],
          btns = [];
      if (options.type === 'datetime') {
        html.push('<span lay-type="datetime" class="laydate-btns-time">' + lang.timeTips + '</span>');
      }
      lay.each(options.btns, function (i, item) {
        var title = lang.tools[item] || 'btn';
        if (options.range && item === 'now') return;
        if (isStatic && item === 'clear') title = options.lang === 'cn' ? '重置' : 'Reset';
        btns.push('<span lay-type="' + item + '" class="laydate-btns-' + item + '">' + title + '</span>');
      });
      html.push('<div class="laydate-footer-btns">' + btns.join('') + '</div>');
      return html.join('');
    }());

    //插入到主区域
    lay.each(elemMain, function (i, main) {
      elem.appendChild(main);
    });
    options.showBottom && elem.appendChild(divFooter);

    //生成自定义主题
    if (/^#/.test(options.theme)) {
      var style = lay.elem('style'),
          styleText = ['#{{id}} .layui-laydate-header{background-color:{{theme}};}', '#{{id}} .layui-this{background-color:{{theme}} !important;}'].join('').replace(/{{id}}/g, that.elemID).replace(/{{theme}}/g, options.theme);

      if ('styleSheet' in style) {
        style.setAttribute('type', 'text/css');
        style.styleSheet.cssText = styleText;
      } else {
        style.innerHTML = styleText;
      }

      lay(elem).addClass('laydate-theme-molv');
      elem.appendChild(style);
    }

    //移除上一个控件
    that.remove(Class.thisElemDate);

    //如果是静态定位，则插入到指定的容器中，否则，插入到body
    isStatic ? options.elem.append(elem) : (document.body.appendChild(elem), that.position() //定位
    );

    that.checkDate().calendar(); //初始校验
    that.changeEvent(); //日期切换

    Class.thisElemDate = that.elemID;

    typeof options.ready === 'function' && options.ready(lay.extend({}, options.dateTime, {
      month: options.dateTime.month + 1
    }));
  };

  //控件移除
  Class.prototype.remove = function (prev) {
    var that = this,
        options = that.config,
        elem = lay('#' + (prev || that.elemID));
    if (!elem.hasClass(ELEM_STATIC)) {
      that.checkDate(function () {
        elem.remove();
      });
    }
    return that;
  };

  //定位算法
  Class.prototype.position = function () {
    var that = this,
        options = that.config,
        elem = that.bindElem || options.elem[0],
        rect = elem.getBoundingClientRect() //绑定元素的坐标
    ,
        elemWidth = that.elem.offsetWidth //控件的宽度
    ,
        elemHeight = that.elem.offsetHeight //控件的高度

    //滚动条高度
    ,
        scrollArea = function scrollArea(type) {
      type = type ? 'scrollLeft' : 'scrollTop';
      return document.body[type] | document.documentElement[type];
    },
        winArea = function winArea(type) {
      return document.documentElement[type ? 'clientWidth' : 'clientHeight'];
    },
        margin = 5,
        left = rect.left,
        top = rect.bottom;

    //如果右侧超出边界
    if (left + elemWidth + margin > winArea('width')) {
      left = winArea('width') - elemWidth - margin;
    }

    //如果底部超出边界
    if (top + elemHeight + margin > winArea()) {
      top = rect.top > elemHeight //顶部是否有足够区域显示完全
      ? rect.top - elemHeight : winArea() - elemHeight;
      top = top - margin * 2;
    }

    if (options.position) {
      that.elem.style.position = options.position;
    }
    that.elem.style.left = left + (options.position === 'fixed' ? 0 : scrollArea(1)) + 'px';
    that.elem.style.top = top + (options.position === 'fixed' ? 0 : scrollArea()) + 'px';
  };

  //提示
  Class.prototype.hint = function (content) {
    var that = this,
        options = that.config,
        div = lay.elem('div', {
      'class': ELEM_HINT
    });

    div.innerHTML = content || '';
    lay(that.elem).find('.' + ELEM_HINT).remove();
    that.elem.appendChild(div);

    clearTimeout(that.hinTimer);
    that.hinTimer = setTimeout(function () {
      lay(that.elem).find('.' + ELEM_HINT).remove();
    }, 3000);
  };

  //获取递增/减后的年月
  Class.prototype.getAsYM = function (Y, M, type) {
    type ? M-- : M++;
    if (M < 0) {
      M = 11;
      Y--;
    }
    if (M > 11) {
      M = 0;
      Y++;
    }
    return [Y, M];
  };

  //系统消息
  Class.prototype.systemDate = function (newDate) {
    var thisDate = newDate || new Date();
    return {
      year: thisDate.getFullYear() //年
      , month: thisDate.getMonth() //月
      , date: thisDate.getDate() //日
      , hours: newDate ? newDate.getHours() : 0 //时
      , minutes: newDate ? newDate.getMinutes() : 0 //分
      , seconds: newDate ? newDate.getSeconds() : 0 //秒
    };
  };

  //日期校验
  Class.prototype.checkDate = function (fn) {
    var that = this,
        thisDate = new Date(),
        options = that.config,
        dateTime = options.dateTime = options.dateTime || that.systemDate(),
        thisMaxDate,
        error,
        elem = that.bindElem || options.elem[0],
        valType = that.isInput(elem) ? 'val' : 'html',
        value = that.isInput(elem) ? elem.value : options.position === 'static' ? '' : elem.innerHTML

    //校验日期有效数字
    ,
        checkValid = function checkValid(dateTime) {
      if (dateTime.year > LIMIT_YEAR[1]) dateTime.year = LIMIT_YEAR[1], error = true; //不能超过20万年
      if (dateTime.month > 11) dateTime.month = 11, error = true;
      if (dateTime.hours > 23) dateTime.hours = 0, error = true;
      if (dateTime.minutes > 59) dateTime.minutes = 0, dateTime.hours++, error = true;
      if (dateTime.seconds > 59) dateTime.seconds = 0, dateTime.minutes++, error = true;

      //计算当前月的最后一天
      thisMaxDate = laydate.getEndDate(dateTime.month + 1, dateTime.year);
      if (dateTime.date > thisMaxDate) dateTime.date = thisMaxDate, error = true;
    }

    //获得初始化日期值
    ,
        initDate = function initDate(dateTime, value, index) {
      var startEnd = ['startTime', 'endTime'];
      value = (value.match(that.EXP_SPLIT) || []).slice(1);
      index = index || 0;
      if (options.range) {
        that[startEnd[index]] = that[startEnd[index]] || {};
      }
      lay.each(that.format, function (i, item) {
        var thisv = parseFloat(value[i]);
        if (value[i].length < item.length) error = true;
        if (/yyyy|y/.test(item)) {
          //年
          if (thisv < LIMIT_YEAR[0]) thisv = LIMIT_YEAR[0], error = true; //年不能低于100年
          dateTime.year = thisv;
        } else if (/MM|M/.test(item)) {
          //月
          if (thisv < 1) thisv = 1, error = true;
          dateTime.month = thisv - 1;
        } else if (/dd|d/.test(item)) {
          //日
          if (thisv < 1) thisv = 1, error = true;
          dateTime.date = thisv;
        } else if (/HH|H/.test(item)) {
          //时
          if (thisv < 1) thisv = 0, error = true;
          dateTime.hours = thisv;
          options.range && (that[startEnd[index]].hours = thisv);
        } else if (/mm|m/.test(item)) {
          //分
          if (thisv < 1) thisv = 0, error = true;
          dateTime.minutes = thisv;
          options.range && (that[startEnd[index]].minutes = thisv);
        } else if (/ss|s/.test(item)) {
          //秒
          if (thisv < 1) thisv = 0, error = true;
          dateTime.seconds = thisv;
          options.range && (that[startEnd[index]].seconds = thisv);
        }
      });
      checkValid(dateTime);
    };

    if (fn === 'limit') return checkValid(dateTime), that;

    value = value || options.value;
    if (typeof value === 'string') {
      value = value.replace(/\s+/g, ' ').replace(/^\s|\s$/g, '');
    }

    //如果点击了开始，单未选择结束就关闭，则重新选择开始
    if (that.startState && !that.endState) {
      delete that.startState;
      that.endState = true;
    };

    if (typeof value === 'string' && value) {
      if (that.EXP_IF.test(value)) {
        //校验日期格式
        if (options.range) {
          value = value.split(' ' + options.range + ' ');
          that.startDate = that.startDate || that.systemDate();
          that.endDate = that.endDate || that.systemDate();
          options.dateTime = lay.extend({}, that.startDate);
          lay.each([that.startDate, that.endDate], function (i, item) {
            initDate(item, value[i], i);
          });
        } else {
          initDate(dateTime, value);
        }
      } else {
        that.hint('日期格式不合法<br>必须遵循下述格式：<br>' + (options.range ? options.format + ' ' + options.range + ' ' + options.format : options.format) + '<br>已为你重置');
        error = true;
      }
    } else if (value && value.constructor === Date) {
      //如果值为日期对象时
      options.dateTime = that.systemDate(value);
    } else {
      options.dateTime = that.systemDate();
      delete that.startState;
      delete that.endState;
      delete that.startDate;
      delete that.endDate;
      delete that.startTime;
      delete that.endTime;
    }

    checkValid(dateTime);

    if (error && value) {
      that.setValue(options.range ? that.endDate ? that.parse() : '' : that.parse());
    }
    fn && fn();
    return that;
  };

  //公历重要日期与自定义备注
  Class.prototype.mark = function (td, YMD) {
    var that = this,
        mark,
        options = that.config;
    lay.each(options.mark, function (key, title) {
      var keys = key.split('-');
      if ((keys[0] == YMD[0] || keys[0] == 0) && ( //每年的每月
      keys[1] == YMD[1] || keys[1] == 0) //每月的每日
      && keys[2] == YMD[2]) {
        //特定日
        mark = title || YMD[2];
      }
    });
    mark && td.html('<span class="laydate-day-mark">' + mark + '</span>');

    return that;
  };

  //无效日期范围的标记
  Class.prototype.limit = function (elem, date, index, time) {
    var that = this,
        options = that.config,
        timestrap = {},
        dateTime = options[index > 41 ? 'endDate' : 'dateTime'],
        isOut,
        thisDateTime = lay.extend({}, dateTime, date || {});
    lay.each({
      now: thisDateTime,
      min: options.min,
      max: options.max
    }, function (key, item) {
      timestrap[key] = that.newDate(lay.extend({
        year: item.year,
        month: item.month,
        date: item.date
      }, function () {
        var hms = {};
        lay.each(time, function (i, keys) {
          hms[keys] = item[keys];
        });
        return hms;
      }())).getTime(); //time：是否比较时分秒
    });

    isOut = timestrap.now < timestrap.min || timestrap.now > timestrap.max;
    elem && elem[isOut ? 'addClass' : 'removeClass'](DISABLED);
    return isOut;
  };

  //日历表
  Class.prototype.calendar = function (value) {
    var that = this,
        options = that.config,
        dateTime = value || options.dateTime,
        thisDate = new Date(),
        startWeek,
        prevMaxDate,
        thisMaxDate,
        lang = that.lang(),
        isAlone = options.type !== 'date' && options.type !== 'datetime',
        index = value ? 1 : 0,
        tds = lay(that.table[index]).find('td'),
        elemYM = lay(that.elemHeader[index][2]).find('span');

    if (dateTime.year < LIMIT_YEAR[0]) dateTime.year = LIMIT_YEAR[0], that.hint('最低只能支持到公元' + LIMIT_YEAR[0] + '年');
    if (dateTime.year > LIMIT_YEAR[1]) dateTime.year = LIMIT_YEAR[1], that.hint('最高只能支持到公元' + LIMIT_YEAR[1] + '年');

    //记录初始值
    if (!that.firstDate) {
      that.firstDate = lay.extend({}, dateTime);
    }

    //计算当前月第一天的星期
    thisDate.setFullYear(dateTime.year, dateTime.month, 1);
    startWeek = thisDate.getDay();

    prevMaxDate = laydate.getEndDate(dateTime.month || 12, dateTime.year); //计算上个月的最后一天
    thisMaxDate = laydate.getEndDate(dateTime.month + 1, dateTime.year); //计算当前月的最后一天

    //赋值日
    lay.each(tds, function (index, item) {
      var YMD = [dateTime.year, dateTime.month],
          st = 0;
      item = lay(item);
      item.removeAttr('class');
      if (index < startWeek) {
        st = prevMaxDate - startWeek + index;
        item.addClass('laydate-day-prev');
        YMD = that.getAsYM(dateTime.year, dateTime.month, 'sub');
      } else if (index >= startWeek && index < thisMaxDate + startWeek) {
        st = index - startWeek;
        if (!options.range) {
          st + 1 === dateTime.date && item.addClass(THIS);
        }
      } else {
        st = index - thisMaxDate - startWeek;
        item.addClass('laydate-day-next');
        YMD = that.getAsYM(dateTime.year, dateTime.month);
      }
      YMD[1]++;
      YMD[2] = st + 1;
      item.attr('lay-ymd', YMD.join('-')).html(YMD[2]);
      that.mark(item, YMD).limit(item, {
        year: YMD[0],
        month: YMD[1] - 1,
        date: YMD[2]
      }, index);
    });

    //同步头部年月
    lay(elemYM[0]).attr('lay-ym', dateTime.year + '-' + (dateTime.month + 1));
    lay(elemYM[1]).attr('lay-ym', dateTime.year + '-' + (dateTime.month + 1));

    if (options.lang === 'cn') {
      lay(elemYM[0]).attr('lay-type', 'year').html(dateTime.year + '年');
      lay(elemYM[1]).attr('lay-type', 'month').html(dateTime.month + 1 + '月');
    } else {
      lay(elemYM[0]).attr('lay-type', 'month').html(lang.month[dateTime.month]);
      lay(elemYM[1]).attr('lay-type', 'year').html(dateTime.year);
    }

    //初始默认选择器
    if (isAlone) {
      if (options.range) {
        value ? that.endDate = that.endDate || {
          year: dateTime.year + (options.type === 'year' ? 1 : 0),
          month: dateTime.month + (options.type === 'month' ? 0 : -1)
        } : that.startDate = that.startDate || {
          year: dateTime.year,
          month: dateTime.month
        };
        if (value) {
          that.listYM = [[that.startDate.year, that.startDate.month + 1], [that.endDate.year, that.endDate.month + 1]];
          that.list(options.type, 0).list(options.type, 1);
          //同步按钮可点状态
          options.type === 'time' ? that.setBtnStatus('时间', lay.extend({}, that.systemDate(), that.startTime), lay.extend({}, that.systemDate(), that.endTime)) : that.setBtnStatus(true);
        }
      }
      if (!options.range) {
        that.listYM = [[dateTime.year, dateTime.month + 1]];
        that.list(options.type, 0);
      }
    }

    //赋值双日历
    if (options.range && !value) {
      var EYM = that.getAsYM(dateTime.year, dateTime.month);
      that.calendar(lay.extend({}, dateTime, {
        year: EYM[0],
        month: EYM[1]
      }));
    }

    //通过检测当前有效日期，来设定确定按钮是否可点
    if (!options.range) that.limit(lay(that.footer).find(ELEM_CONFIRM), null, 0, ['hours', 'minutes', 'seconds']);

    //标记选择范围
    if (options.range && value && !isAlone) that.stampRange();
    return that;
  };

  //生成年月时分秒列表
  Class.prototype.list = function (type, index) {
    var that = this,
        options = that.config,
        dateTime = options.dateTime,
        lang = that.lang(),
        isAlone = options.range && options.type !== 'date' && options.type !== 'datetime' //独立范围选择器

    ,
        ul = lay.elem('ul', {
      'class': ELEM_LIST + ' ' + {
        year: 'laydate-year-list',
        month: 'laydate-month-list',
        time: 'laydate-time-list'
      }[type]
    }),
        elemHeader = that.elemHeader[index],
        elemYM = lay(elemHeader[2]).find('span'),
        elemCont = that.elemCont[index || 0],
        haveList = lay(elemCont).find('.' + ELEM_LIST)[0],
        isCN = options.lang === 'cn',
        text = isCN ? '年' : '',
        listYM = that.listYM[index] || {},
        hms = ['hours', 'minutes', 'seconds'],
        startEnd = ['startTime', 'endTime'][index];

    if (listYM[0] < 1) listYM[0] = 1;

    if (type === 'year') {
      //年列表
      var yearNum,
          startY = yearNum = listYM[0] - 7;
      if (startY < 1) startY = yearNum = 1;
      lay.each(new Array(15), function (i) {
        var li = lay.elem('li', {
          'lay-ym': yearNum
        }),
            ymd = { year: yearNum };
        yearNum == listYM[0] && lay(li).addClass(THIS);
        li.innerHTML = yearNum + text;
        ul.appendChild(li);
        if (yearNum < that.firstDate.year) {
          ymd.month = options.min.month;
          ymd.date = options.min.date;
        } else if (yearNum >= that.firstDate.year) {
          ymd.month = options.max.month;
          ymd.date = options.max.date;
        }
        that.limit(lay(li), ymd, index);
        yearNum++;
      });
      lay(elemYM[isCN ? 0 : 1]).attr('lay-ym', yearNum - 8 + '-' + listYM[1]).html(startY + text + ' - ' + (yearNum - 1 + text));
    } else if (type === 'month') {
      //月列表
      lay.each(new Array(12), function (i) {
        var li = lay.elem('li', {
          'lay-ym': i
        }),
            ymd = { year: listYM[0], month: i };
        i + 1 == listYM[1] && lay(li).addClass(THIS);
        li.innerHTML = lang.month[i] + (isCN ? '月' : '');
        ul.appendChild(li);
        if (listYM[0] < that.firstDate.year) {
          ymd.date = options.min.date;
        } else if (listYM[0] >= that.firstDate.year) {
          ymd.date = options.max.date;
        }
        that.limit(lay(li), ymd, index);
      });
      lay(elemYM[isCN ? 0 : 1]).attr('lay-ym', listYM[0] + '-' + listYM[1]).html(listYM[0] + text);
    } else if (type === 'time') {
      //时间列表
      //检测时分秒状态是否在有效日期时间范围内
      var setTimeStatus = function setTimeStatus() {
        lay(ul).find('ol').each(function (i, ol) {
          lay(ol).find('li').each(function (ii, li) {
            that.limit(lay(li), [{
              hours: ii
            }, {
              hours: that[startEnd].hours,
              minutes: ii
            }, {
              hours: that[startEnd].hours,
              minutes: that[startEnd].minutes,
              seconds: ii
            }][i], index, [['hours'], ['hours', 'minutes'], ['hours', 'minutes', 'seconds']][i]);
          });
        });
        if (!options.range) that.limit(lay(that.footer).find(ELEM_CONFIRM), that[startEnd], 0, ['hours', 'minutes', 'seconds']);
      };
      if (options.range) {
        if (!that[startEnd]) that[startEnd] = {
          hours: 0,
          minutes: 0,
          seconds: 0
        };
      } else {
        that[startEnd] = dateTime;
      }
      lay.each([24, 60, 60], function (i, item) {
        var li = lay.elem('li'),
            childUL = ['<p>' + lang.time[i] + '</p><ol>'];
        lay.each(new Array(item), function (ii) {
          childUL.push('<li' + (that[startEnd][hms[i]] === ii ? ' class="' + THIS + '"' : '') + '>' + lay.digit(ii, 2) + '</li>');
        });
        li.innerHTML = childUL.join('') + '</ol>';
        ul.appendChild(li);
      });
      setTimeStatus();
    }

    //插入容器
    if (haveList) elemCont.removeChild(haveList);
    elemCont.appendChild(ul);

    //年月
    if (type === 'year' || type === 'month') {
      //显示切换箭头
      lay(that.elemMain[index]).addClass('laydate-ym-show');

      //选中
      lay(ul).find('li').on('click', function () {
        var ym = lay(this).attr('lay-ym') | 0;
        if (lay(this).hasClass(DISABLED)) return;

        if (index === 0) {
          dateTime[type] = ym;
          if (isAlone) that.startDate[type] = ym;
          that.limit(lay(that.footer).find(ELEM_CONFIRM), null, 0);
        } else {
          //范围选择
          if (isAlone) {
            //非date/datetime类型
            that.endDate[type] = ym;
          } else {
            //date/datetime类型
            var YM = type === 'year' ? that.getAsYM(ym, listYM[1] - 1, 'sub') : that.getAsYM(listYM[0], ym, 'sub');
            lay.extend(dateTime, {
              year: YM[0],
              month: YM[1]
            });
          }
        }

        if (options.type === 'year' || options.type === 'month') {
          lay(ul).find('.' + THIS).removeClass(THIS);
          lay(this).addClass(THIS);

          //如果为年月选择器，点击了年列表，则切换到月选择器
          if (options.type === 'month' && type === 'year') {
            that.listYM[index][0] = ym;
            isAlone && (that[['startDate', 'endDate'][index]].year = ym);
            that.list('month', index);
          }
        } else {
          that.checkDate('limit').calendar();
          that.closeList();
        }

        that.setBtnStatus(); //同步按钮可点状态
        options.range || that.done(null, 'change');
        lay(that.footer).find(ELEM_TIME_BTN).removeClass(DISABLED);
      });
    } else {
      var span = lay.elem('span', {
        'class': ELEM_TIME_TEXT
      }),
          scroll = function scroll() {
        //滚动条定位
        lay(ul).find('ol').each(function (i) {
          var ol = this,
              li = lay(ol).find('li');
          ol.scrollTop = 30 * (that[startEnd][hms[i]] - 2);
          if (ol.scrollTop <= 0) {
            li.each(function (ii, item) {
              if (!lay(this).hasClass(DISABLED)) {
                ol.scrollTop = 30 * (ii - 2);
                return true;
              }
            });
          }
        });
      },
          haveSpan = lay(elemHeader[2]).find('.' + ELEM_TIME_TEXT);
      scroll();
      span.innerHTML = options.range ? [lang.startTime, lang.endTime][index] : lang.timeTips;
      lay(that.elemMain[index]).addClass('laydate-time-show');
      if (haveSpan[0]) haveSpan.remove();
      elemHeader[2].appendChild(span);

      lay(ul).find('ol').each(function (i) {
        var ol = this;
        //选择时分秒
        lay(ol).find('li').on('click', function () {
          var value = this.innerHTML | 0;
          if (lay(this).hasClass(DISABLED)) return;
          if (options.range) {
            that[startEnd][hms[i]] = value;
          } else {
            dateTime[hms[i]] = value;
          }
          lay(ol).find('.' + THIS).removeClass(THIS);
          lay(this).addClass(THIS);

          setTimeStatus();
          scroll();
          (that.endDate || options.type === 'time') && that.done(null, 'change');

          //同步按钮可点状态
          that.setBtnStatus();
          that.done(null, 'change');
        });
      });
    }

    return that;
  };

  //记录列表切换后的年月
  Class.prototype.listYM = [];

  //关闭列表
  Class.prototype.closeList = function () {
    var that = this,
        options = that.config;

    lay.each(that.elemCont, function (index, item) {
      lay(this).find('.' + ELEM_LIST).remove();
      lay(that.elemMain[index]).removeClass('laydate-ym-show laydate-time-show');
    });
    lay(that.elem).find('.' + ELEM_TIME_TEXT).remove();
  };

  //检测结束日期是否超出开始日期
  Class.prototype.setBtnStatus = function (tips, start, end) {
    var that = this,
        options = that.config,
        isOut,
        elemBtn = lay(that.footer).find(ELEM_CONFIRM),
        isAlone = options.range && options.type !== 'date' && options.type !== 'time';
    if (isAlone) {
      start = start || that.startDate;
      end = end || that.endDate;
      isOut = that.newDate(start).getTime() > that.newDate(end).getTime();

      //如果不在有效日期内，直接禁用按钮，否则比较开始和结束日期
      that.limit(null, start) || that.limit(null, end) ? elemBtn.addClass(DISABLED) : elemBtn[isOut ? 'addClass' : 'removeClass'](DISABLED);

      //是否异常提示
      if (tips && isOut) that.hint(typeof tips === 'string' ? TIPS_OUT.replace(/日期/g, tips) : TIPS_OUT);
    }
  };

  //转义为规定格式的日期字符
  Class.prototype.parse = function (state, date) {
    var that = this,
        options = that.config,
        dateTime = date || (state ? lay.extend({}, that.endDate, that.endTime) : options.range ? lay.extend({}, that.startDate, that.startTime) : options.dateTime),
        format = that.format.concat();

    //转义为规定格式
    lay.each(format, function (i, item) {
      if (/yyyy|y/.test(item)) {
        //年
        format[i] = lay.digit(dateTime.year, item.length);
      } else if (/MM|M/.test(item)) {
        //月
        format[i] = lay.digit(dateTime.month + 1, item.length);
      } else if (/dd|d/.test(item)) {
        //日
        format[i] = lay.digit(dateTime.date, item.length);
      } else if (/HH|H/.test(item)) {
        //时
        format[i] = lay.digit(dateTime.hours, item.length);
      } else if (/mm|m/.test(item)) {
        //分
        format[i] = lay.digit(dateTime.minutes, item.length);
      } else if (/ss|s/.test(item)) {
        //秒
        format[i] = lay.digit(dateTime.seconds, item.length);
      }
    });

    //返回日期范围字符
    if (options.range && !state) {
      return format.join('') + ' ' + options.range + ' ' + that.parse(1);
    }

    return format.join('');
  };

  //创建指定日期时间对象
  Class.prototype.newDate = function (dateTime) {
    dateTime = dateTime || {};
    return new Date(dateTime.year || 1, dateTime.month || 0, dateTime.date || 1, dateTime.hours || 0, dateTime.minutes || 0, dateTime.seconds || 0);
  };

  //赋值
  Class.prototype.setValue = function (value) {
    var that = this,
        options = that.config,
        elem = that.bindElem || options.elem[0],
        valType = that.isInput(elem) ? 'val' : 'html';

    options.position === 'static' || lay(elem)[valType](value || '');
    return this;
  };

  //标记范围内的日期
  Class.prototype.stampRange = function () {
    var that = this,
        options = that.config,
        startTime,
        endTime,
        tds = lay(that.elem).find('td');

    if (options.range && !that.endDate) lay(that.footer).find(ELEM_CONFIRM).addClass(DISABLED);
    if (!that.endDate) return;

    startTime = that.newDate({
      year: that.startDate.year,
      month: that.startDate.month,
      date: that.startDate.date
    }).getTime();

    endTime = that.newDate({
      year: that.endDate.year,
      month: that.endDate.month,
      date: that.endDate.date
    }).getTime();

    if (startTime > endTime) return that.hint(TIPS_OUT);

    lay.each(tds, function (i, item) {
      var ymd = lay(item).attr('lay-ymd').split('-'),
          thisTime = that.newDate({
        year: ymd[0],
        month: ymd[1] - 1,
        date: ymd[2]
      }).getTime();
      lay(item).removeClass(ELEM_SELECTED + ' ' + THIS);
      if (thisTime === startTime || thisTime === endTime) {
        lay(item).addClass(lay(item).hasClass(ELEM_PREV) || lay(item).hasClass(ELEM_NEXT) ? ELEM_SELECTED : THIS);
      }
      if (thisTime > startTime && thisTime < endTime) {
        lay(item).addClass(ELEM_SELECTED);
      }
    });
  };

  //执行done/change回调
  Class.prototype.done = function (param, type) {
    var that = this,
        options = that.config,
        start = lay.extend({}, that.startDate ? lay.extend(that.startDate, that.startTime) : options.dateTime),
        end = lay.extend({}, lay.extend(that.endDate, that.endTime));

    lay.each([start, end], function (i, item) {
      if (!('month' in item)) return;
      lay.extend(item, {
        month: item.month + 1
      });
    });

    param = param || [that.parse(), start, end];
    typeof options[type || 'done'] === 'function' && options[type || 'done'].apply(options, param);

    return that;
  };

  //选择日期
  Class.prototype.choose = function (td) {
    var that = this,
        options = that.config,
        dateTime = options.dateTime,
        tds = lay(that.elem).find('td'),
        YMD = td.attr('lay-ymd').split('-'),
        setDateTime = function setDateTime(one) {
      var thisDate = new Date();

      //同步dateTime
      one && lay.extend(dateTime, YMD);

      //记录开始日期
      if (options.range) {
        that.startDate ? lay.extend(that.startDate, YMD) : that.startDate = lay.extend({}, YMD, that.startTime);
        that.startYMD = YMD;
      }
    };

    YMD = {
      year: YMD[0] | 0,
      month: (YMD[1] | 0) - 1,
      date: YMD[2] | 0
    };

    if (td.hasClass(DISABLED)) return;

    //范围选择
    if (options.range) {

      lay.each(['startTime', 'endTime'], function (i, item) {
        that[item] = that[item] || {
          hours: 0,
          minutes: 0,
          seconds: 0
        };
      });

      if (that.endState) {
        //重新选择
        setDateTime();
        delete that.endState;
        delete that.endDate;
        that.startState = true;
        tds.removeClass(THIS + ' ' + ELEM_SELECTED);
        td.addClass(THIS);
      } else if (that.startState) {
        //选中截止
        td.addClass(THIS);

        that.endDate ? lay.extend(that.endDate, YMD) : that.endDate = lay.extend({}, YMD, that.endTime);

        //判断是否顺时或逆时选择
        if (that.newDate(YMD).getTime() < that.newDate(that.startYMD).getTime()) {
          var startDate = lay.extend({}, that.endDate, {
            hours: that.startDate.hours,
            minutes: that.startDate.minutes,
            seconds: that.startDate.seconds
          });
          lay.extend(that.endDate, that.startDate, {
            hours: that.endDate.hours,
            minutes: that.endDate.minutes,
            seconds: that.endDate.seconds
          });
          that.startDate = startDate;
        }

        options.showBottom || that.done();
        that.stampRange(); //标记范围内的日期
        that.endState = true;
        that.done(null, 'change');
      } else {
        //选中开始
        td.addClass(THIS);
        setDateTime();
        that.startState = true;
      }
      lay(that.footer).find(ELEM_CONFIRM)[that.endDate ? 'removeClass' : 'addClass'](DISABLED);
    } else if (options.position === 'static') {
      //直接嵌套的选中
      setDateTime(true);
      that.calendar().done().done(null, 'change');
    } else if (options.type === 'date') {
      setDateTime(true);
      that.setValue(that.parse()).remove().done();
    } else if (options.type === 'datetime') {
      setDateTime(true);
      that.calendar().done(null, 'change');
    }
  };

  //底部按钮
  Class.prototype.tool = function (btn, type) {
    var that = this,
        options = that.config,
        dateTime = options.dateTime,
        isStatic = options.position === 'static',
        active = {
      //选择时间
      datetime: function datetime() {
        if (lay(btn).hasClass(DISABLED)) return;
        that.list('time', 0);
        options.range && that.list('time', 1);
        lay(btn).attr('lay-type', 'date').html(that.lang().dateTips);
      }

      //选择日期
      , date: function date() {
        that.closeList();
        lay(btn).attr('lay-type', 'datetime').html(that.lang().timeTips);
      }

      //清空、重置
      , clear: function clear() {
        that.setValue('').remove();
        isStatic && (lay.extend(dateTime, that.firstDate), that.calendar());
        options.range && (delete that.startState, delete that.endState, delete that.endDate, delete that.startTime, delete that.endTime);
        that.done(['', {}, {}]);
      }

      //现在
      , now: function now() {
        var thisDate = new Date();
        lay.extend(dateTime, that.systemDate(), {
          hours: thisDate.getHours(),
          minutes: thisDate.getMinutes(),
          seconds: thisDate.getSeconds()
        });
        that.setValue(that.parse()).remove();
        isStatic && that.calendar();
        that.done();
      }

      //确定
      , confirm: function confirm() {
        if (options.range) {
          if (!that.endDate) return that.hint('请先选择日期范围');
          if (lay(btn).hasClass(DISABLED)) return that.hint(options.type === 'time' ? TIPS_OUT.replace(/日期/g, '时间') : TIPS_OUT);
        } else {
          if (lay(btn).hasClass(DISABLED)) return that.hint('不在有效日期或时间范围内');
        }
        that.done();
        that.setValue(that.parse()).remove();
      }
    };
    active[type] && active[type]();
  };

  //统一切换处理
  Class.prototype.change = function (index) {
    var that = this,
        options = that.config,
        dateTime = options.dateTime,
        isAlone = options.range && (options.type === 'year' || options.type === 'month'),
        elemCont = that.elemCont[index || 0],
        listYM = that.listYM[index],
        addSubYeay = function addSubYeay(type) {
      var startEnd = ['startDate', 'endDate'][index],
          isYear = lay(elemCont).find('.laydate-year-list')[0],
          isMonth = lay(elemCont).find('.laydate-month-list')[0];

      //切换年列表
      if (isYear) {
        listYM[0] = type ? listYM[0] - 15 : listYM[0] + 15;
        that.list('year', index);
      }

      if (isMonth) {
        //切换月面板中的年
        type ? listYM[0]-- : listYM[0]++;
        that.list('month', index);
      }

      if (isYear || isMonth) {
        lay.extend(dateTime, {
          year: listYM[0]
        });
        if (isAlone) that[startEnd].year = listYM[0];
        options.range || that.done(null, 'change');
        that.setBtnStatus();
        options.range || that.limit(lay(that.footer).find(ELEM_CONFIRM), {
          year: listYM[0]
        });
      }
      return isYear || isMonth;
    };

    return {
      prevYear: function prevYear() {
        if (addSubYeay('sub')) return;
        dateTime.year--;
        that.checkDate('limit').calendar();
        options.range || that.done(null, 'change');
      },
      prevMonth: function prevMonth() {
        var YM = that.getAsYM(dateTime.year, dateTime.month, 'sub');
        lay.extend(dateTime, {
          year: YM[0],
          month: YM[1]
        });
        that.checkDate('limit').calendar();
        options.range || that.done(null, 'change');
      },
      nextMonth: function nextMonth() {
        var YM = that.getAsYM(dateTime.year, dateTime.month);
        lay.extend(dateTime, {
          year: YM[0],
          month: YM[1]
        });
        that.checkDate('limit').calendar();
        options.range || that.done(null, 'change');
      },
      nextYear: function nextYear() {
        if (addSubYeay()) return;
        dateTime.year++;
        that.checkDate('limit').calendar();
        options.range || that.done(null, 'change');
      }
    };
  };

  //日期切换事件
  Class.prototype.changeEvent = function () {
    var that = this,
        options = that.config;

    //日期选择事件
    lay(that.elem).on('click', function (e) {
      lay.stope(e);
    });

    //年月切换
    lay.each(that.elemHeader, function (i, header) {
      //上一年
      lay(header[0]).on('click', function (e) {
        that.change(i).prevYear();
      });

      //上一月
      lay(header[1]).on('click', function (e) {
        that.change(i).prevMonth();
      });

      //选择年月
      lay(header[2]).find('span').on('click', function (e) {
        var othis = lay(this),
            layYM = othis.attr('lay-ym'),
            layType = othis.attr('lay-type');

        if (!layYM) return;

        layYM = layYM.split('-');

        that.listYM[i] = [layYM[0] | 0, layYM[1] | 0];
        that.list(layType, i);
        lay(that.footer).find(ELEM_TIME_BTN).addClass(DISABLED);
      });

      //下一月
      lay(header[3]).on('click', function (e) {
        that.change(i).nextMonth();
      });

      //下一年
      lay(header[4]).on('click', function (e) {
        that.change(i).nextYear();
      });
    });

    //点击日期
    lay.each(that.table, function (i, table) {
      var tds = lay(table).find('td');
      tds.on('click', function () {
        that.choose(lay(this));
      });
    });

    //点击底部按钮
    lay(that.footer).find('span').on('click', function () {
      var type = lay(this).attr('lay-type');
      that.tool(this, type);
    });
  };

  //是否输入框
  Class.prototype.isInput = function (elem) {
    return (/input|textarea/.test(elem.tagName.toLocaleLowerCase())
    );
  };

  //绑定的元素事件处理
  Class.prototype.events = function () {
    var that = this,
        options = that.config

    //绑定呼出控件事件
    ,
        showEvent = function showEvent(elem, bind) {
      elem.on(options.trigger, function () {
        bind && (that.bindElem = this);
        that.render();
      });
    };

    if (!options.elem[0] || options.elem[0].eventHandler) return;

    showEvent(options.elem, 'bind');
    showEvent(options.eventElem);

    //绑定关闭控件事件
    lay(document).on('click', function (e) {
      if (e.target === options.elem[0] || e.target === options.eventElem[0] || e.target === lay(options.closeStop)[0]) {
        return;
      }
      that.remove();
    }).on('keydown', function (e) {
      if (e.keyCode === 13) {
        if (lay('#' + that.elemID)[0] && that.elemID === Class.thisElem) {
          e.preventDefault();
          lay(that.footer).find(ELEM_CONFIRM)[0].click();
        }
      }
    });

    //自适应定位
    lay(window).on('resize', function () {
      if (!that.elem || !lay(ELEM)[0]) {
        return false;
      }
      that.position();
    });

    options.elem[0].eventHandler = true;
  };

  //核心接口
  laydate.render = function (options) {
    var inst = new Class(options);
    return thisDate.call(inst);
  };

  //得到某月的最后一天
  laydate.getEndDate = function (month, year) {
    var thisDate = new Date();
    //设置日期为下个月的第一天
    thisDate.setFullYear(year || thisDate.getFullYear(), month || thisDate.getMonth() + 1, 1);
    //减去一天，得到当前月最后一天
    return new Date(thisDate.getTime() - 1000 * 60 * 60 * 24).getDate();
  };

  //暴露lay
  window.lay = window.lay || lay;

  //加载方式
  isLayui ? (laydate.ready(), layui.define(function (exports) {
    //layui加载
    laydate.path = layui.cache.dir;
    exports(MOD_NAME, laydate);
  })) :  true ? !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
    //requirejs加载
    return laydate;
  }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : function () {
    //普通script标签加载
    laydate.ready();
    window.laydate = laydate;
  }();
}();

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "lv-input",
    {
      class: _vm.id,
      attrs: {
        maxlength: "19",
        placeholder: _vm.placeholder,
        disabled: _vm.disabled,
        readonly: true,
        clear: false
      },
      on: {
        focus: function($event) {
          _vm.isfocus = true
        },
        blur: function($event) {
          _vm.isfocus = false
        }
      },
      model: {
        value: _vm.val,
        callback: function($$v) {
          _vm.val = $$v
        },
        expression: "val"
      }
    },
    [
      _c("i", {
        staticClass: "icon lv-icon-date",
        class: { "theme-c": _vm.isfocus },
        attrs: { slot: "right", disabled: _vm.disabled },
        slot: "right"
      })
    ]
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1b0f6ef0", { render: render, staticRenderFns: staticRenderFns })
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


/***/ })

/******/ });
});
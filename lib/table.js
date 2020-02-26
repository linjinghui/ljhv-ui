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
/******/ 	return __webpack_require__(__webpack_require__.s = 236);
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

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vuePerfectScrollbar = __webpack_require__(4);

var _vuePerfectScrollbar2 = _interopRequireDefault(_vuePerfectScrollbar);

var _Sortable = __webpack_require__(240);

var _Sortable2 = _interopRequireDefault(_Sortable);

var _main = __webpack_require__(73);

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'Table',
  components: {
    'vperfect-scrollbar': _vuePerfectScrollbar2.default,
    'lvPagebar': _main2.default
  },
  data: function data() {
    return {
      id: 'table_' + new Date().getTime() + parseInt(Math.random() * 100),
      mergeRow: [],
      scrollTop: 0,
      list: this.data
    };
  },
  props: {
    // 表格列表数据
    list: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    // 是否拖拽排序
    dragSort: {
      type: Boolean,
      default: false
    },
    // 是否固定最后一列
    fixLastColumn: {
      type: Boolean,
      default: false
    },
    // 是否统计
    totalRow: {
      type: Boolean,
      default: false
    }
  },
  inheritAttrs: false,
  watch: {
    list: function list(val) {
      var _this = this;

      setTimeout(function () {
        _this.getMegeRow();
      }, 100);
      setTimeout(function () {
        _this.scrollHandle();
      }, 200);
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.$refs.wrapTable.$el.removeEventListener('scroll', this.scrollHandle);
  },
  mounted: function mounted() {
    var _this = this;

    this.$refs.wrapTable.$el.addEventListener('scroll', this.scrollHandle);
    setTimeout(function () {
      _this.getMegeRow();
      _this.scrollHandle();
    }, 100);
    this.setDragSort();
  },
  methods: {
    // 固定头\列
    scrollHandle: function scrollHandle(e) {
      var table = this.$refs.wrapTable.$el;
      var dmHead = table.querySelector('thead');
      var dmFoot = table.querySelector('tfoot');
      var left = table.scrollLeft;

      this.scrollTop = table.scrollTop;
      dmHead.style.transform = this.scrollTop > 0 ? 'translateY(' + this.scrollTop + 'px)' : '';
      dmFoot.style.transform = 'translateY(' + (table.scrollHeight - table.clientHeight - this.scrollTop) * -1 + 'px)';

      // 固定最后一列
      if (this.fixLastColumn) {
        table.querySelectorAll('tr').forEach(function (tr) {
          var lastTd = tr.querySelector('td:last-of-type');

          if (lastTd) {
            lastTd.style = 'transform:translateX(' + (table.scrollWidth - table.clientWidth - left) * -1 + 'px);background-color:#fff;';
          }
        });
      }
    },
    // 统计列表
    getMegeRow: function getMegeRow() {
      if (this.totalRow) {
        var table = this.$refs.wrapTable.$el;
        var rowTd = table.querySelectorAll('thead td');
        var rowTdNum = rowTd.length || 0;
        var tdNum = table.querySelectorAll('tbody td');
        var mergeRow = [];

        if (tdNum && tdNum.length > 0) {
          for (var i = 0; i < rowTdNum; i++) {
            var columns = table.querySelectorAll('tbody td:nth-of-type(' + (i + 1) + ')');
            var columnTotal = 0;

            for (var l = 0; l < columns.length; l++) {
              var val = columns[l].innerText;

              if (isNaN(val)) {
                columnTotal = '-';
                break;
              } else {
                columnTotal += Number(val);
              }
            }
            mergeRow.push(columnTotal);
          }
          mergeRow[0] = '合计';
          this.mergeRow = mergeRow;
        }
      }
    },
    // 设置表格拖拽
    setDragSort: function setDragSort() {
      if (this.dragSort) {
        var _this = this;
        var el = this.$refs.wrapTable.$el.querySelector('table > tbody');

        this.sortable = _Sortable2.default.create(el, {
          ghostClass: 'sortable-ghost',
          animation: 100,
          onEnd: function onEnd(evt) {
            var arr = JSON.parse(JSON.stringify(_this.list));
            var start = evt.oldIndex;
            var end = evt.newIndex;

            arr.splice(end, 0, arr.splice(start, 1)[0]);
            _this.$emit('sort', arr);
          }
        });
      }
    },
    clkHead: function clkHead(e) {
      var orderKey = e.target.dataset.order;

      if (orderKey) {
        // 排序逻辑
        this.list = this.setHeadSort(this.list, orderKey);
      }
    },
    // 头 顺、倒 排序
    setHeadSort: function setHeadSort(arr, orderBy) {
      var _this = this;

      arr.sort(function (a, b) {
        var p1 = a[orderBy];
        var p2 = b[orderBy];
        var result = '';

        if (_this.orderMark) {
          if (isNaN(p1) || isNaN(p2)) {
            result = (p1 + '').localeCompare(p2 + '');
          } else {
            result = p1 - p2;
          }
        } else if (isNaN(p1) || isNaN(p2)) {
          result = (p2 + '').localeCompare(p1 + '');
        } else {
          result = p2 - p1;
        }
        return result;
      });
      _this.orderMark = !_this.orderMark;
    },
    // 分页回调
    pagination: function pagination(data) {
      this.$emit('pagination', data);
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

/***/ }),

/***/ 13:
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

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_170f9f34_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_main_vue__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(2);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(17)
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

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _main = __webpack_require__(14);

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
_main2.default.install = function (Vue) {
  Vue.component(_main2.default.name, _main2.default);
};

exports.default = _main2.default;

/***/ }),

/***/ 17:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(18);
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

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, "\ninput[data-v-170f9f34] {\n  -ms-flex: 1;\n      flex: 1;\n  padding: 0 10px;\n  width: 100%;\n  height: 100%;\n  border: 0;\n  color: inherit;\n  font: inherit;\n  outline: medium;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\ninput[disabled][data-v-170f9f34] {\n  cursor: text;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\ninput[data-v-170f9f34]::-ms-clear {\n  display: none;\n}\n.input[data-v-170f9f34] {\n  position: relative;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n  -ms-flex-align: center;\n      align-items: center;\n  width: 100%;\n  height: 30px;\n  line-height: 1;\n  border-style: solid;\n  border-width: 1px;\n  border-radius: 4px;\n  overflow: hidden;\n}\n.icon[data-v-170f9f34] {\n  margin-right: 10px;\n  cursor: pointer;\n  color: #666;\n}\n.icon[data-v-170f9f34]:not([disabled]):hover {\n  opacity: 0.8;\n}\n.lv-icon-eye[data-v-170f9f34], .lv-icon-eye-close[data-v-170f9f34] {\n  font-size: 22px;\n}\n.l-icon[data-v-170f9f34] {\n  margin-left: 10px;\n}\n", ""]);

// exports


/***/ }),

/***/ 19:
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

/***/ 236:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _main = __webpack_require__(237);

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
_main2.default.install = function (Vue) {
  Vue.component(_main2.default.name, _main2.default);
};

exports.default = _main2.default;

/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_93f73ca0_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_main_vue__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(2);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(238)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_93f73ca0_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_main_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_93f73ca0_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_main_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "packages\\table\\src\\main.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-93f73ca0", Component.options)
  } else {
    hotAPI.reload("data-v-93f73ca0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 238:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(239);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(1).default
var update = add("5da5e886", content, false, {});
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

/***/ 239:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, "\n@charset \"UTF-8\";\n.wrap-table {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  line-height: normal;\n  font-size: 12px;\n  overflow: auto;\n  text-align: center;\n  border: solid 1px #dee2e6;\n  border-top: 0;\n}\n.wrap-table table {\n    position: relative;\n    width: 100%;\n    table-layout: fixed;\n    word-wrap: break-word;\n}\n.wrap-table table .button {\n      position: unset;\n}\n.wrap-table thead, .wrap-table tfoot {\n    background-color: #fff;\n    box-shadow: 0 1px 1px #dee2e6;\n}\n.wrap-table tbody tr:nth-child(odd) {\n    background-color: #f7f7f7;\n}\n.wrap-table tbody > tr:hover {\n    background-color: #eee;\n}\n.wrap-table td {\n    padding: 5px;\n    width: 250px;\n    height: 30px;\n    box-shadow: inset 1px 1px 0 0 #dee2e6;\n}\n.wrap-table td:nth-of-type(1) {\n    box-shadow: inset 0px 1px 0 0 #dee2e6;\n}\n.wrap-table thead td[data-order] {\n    cursor: pointer;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n}\n.wrap-table thead td[data-order]:after {\n    content: ' \\2191\\2193';\n}\n.pagebar .wrap-table {\n  margin-bottom: 10px;\n  height: calc(100% - 30px - 10px);\n}\n", ""]);

// exports


/***/ }),

/***/ 240:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**!
 * Sortable
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */

(function sortableModule(factory) {
	"use strict";

	if (true) {
		!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else if (typeof module != "undefined" && typeof module.exports != "undefined") {
		module.exports = factory();
	} else {
		/* jshint sub:true */
		window["Sortable"] = factory();
	}
})(function sortableFactory() {
	"use strict";

	if (typeof window === "undefined" || !window.document) {
		return function sortableError() {
			throw new Error("Sortable.js requires a window with a document");
		};
	}

	var dragEl,
	    parentEl,
	    ghostEl,
	    cloneEl,
	    rootEl,
	    nextEl,
	    lastDownEl,
	    scrollEl,
	    scrollParentEl,
	    scrollCustomFn,
	    oldIndex,
	    newIndex,
	    activeGroup,
	    putSortable,
	    autoScrolls = [],
	    scrolling = false,
	    awaitingDragStarted = false,
	    ignoreNextClick = false,
	    sortables = [],
	    pointerElemChangedInterval,
	    lastPointerElemX,
	    lastPointerElemY,
	    tapEvt,
	    touchEvt,
	    moved,
	    lastTarget,
	    lastDirection,
	    pastFirstInvertThresh = false,
	    isCircumstantialInvert = false,
	    lastMode,
	    // 'swap' or 'insert'

	targetMoveDistance,


	// For positioning ghost absolutely
	ghostRelativeParent,
	    ghostRelativeParentInitialScroll = [],
	    // (left, top)


	forRepaintDummy,
	    realDragElRect,
	    // dragEl rect after current animation

	/** @const */
	R_SPACE = /\s+/g,
	    expando = 'Sortable' + new Date().getTime(),
	    win = window,
	    document = win.document,
	    parseInt = win.parseInt,
	    setTimeout = win.setTimeout,
	    $ = win.jQuery || win.Zepto,
	    Polymer = win.Polymer,
	    captureMode = {
		capture: false,
		passive: false
	},
	    IE11OrLess = !!navigator.userAgent.match(/(?:Trident.*rv[ :]?11\.|msie|iemobile)/i),
	    Edge = !!navigator.userAgent.match(/Edge/i),
	    FireFox = !!navigator.userAgent.match(/firefox/i),
	    Safari = !!(navigator.userAgent.match(/safari/i) && !navigator.userAgent.match(/chrome/i) && !navigator.userAgent.match(/android/i)),
	    IOS = !!navigator.userAgent.match(/iP(ad|od|hone)/i),
	    PositionGhostAbsolutely = IOS,
	    CSSFloatProperty = Edge || IE11OrLess ? 'cssFloat' : 'float',


	// This will not pass for IE9, because IE9 DnD only works on anchors
	supportDraggable = 'draggable' in document.createElement('div'),
	    supportCssPointerEvents = function () {
		// false when <= IE11
		if (IE11OrLess) {
			return false;
		}
		var el = document.createElement('x');
		el.style.cssText = 'pointer-events:auto';
		return el.style.pointerEvents === 'auto';
	}(),
	    _silent = false,
	    _alignedSilent = false,
	    abs = Math.abs,
	    min = Math.min,
	    max = Math.max,
	    savedInputChecked = [],
	    _detectDirection = function _detectDirection(el, options) {
		var elCSS = _css(el),
		    elWidth = parseInt(elCSS.width) - parseInt(elCSS.paddingLeft) - parseInt(elCSS.paddingRight) - parseInt(elCSS.borderLeftWidth) - parseInt(elCSS.borderRightWidth),
		    child1 = _getChild(el, 0, options),
		    child2 = _getChild(el, 1, options),
		    firstChildCSS = child1 && _css(child1),
		    secondChildCSS = child2 && _css(child2),
		    firstChildWidth = firstChildCSS && parseInt(firstChildCSS.marginLeft) + parseInt(firstChildCSS.marginRight) + _getRect(child1).width,
		    secondChildWidth = secondChildCSS && parseInt(secondChildCSS.marginLeft) + parseInt(secondChildCSS.marginRight) + _getRect(child2).width;

		if (elCSS.display === 'flex') {
			return elCSS.flexDirection === 'column' || elCSS.flexDirection === 'column-reverse' ? 'vertical' : 'horizontal';
		}

		if (elCSS.display === 'grid') {
			return elCSS.gridTemplateColumns.split(' ').length <= 1 ? 'vertical' : 'horizontal';
		}

		if (child1 && firstChildCSS.float !== 'none') {
			var touchingSideChild2 = firstChildCSS.float === 'left' ? 'left' : 'right';

			return child2 && (secondChildCSS.clear === 'both' || secondChildCSS.clear === touchingSideChild2) ? 'vertical' : 'horizontal';
		}

		return child1 && (firstChildCSS.display === 'block' || firstChildCSS.display === 'flex' || firstChildCSS.display === 'table' || firstChildCSS.display === 'grid' || firstChildWidth >= elWidth && elCSS[CSSFloatProperty] === 'none' || child2 && elCSS[CSSFloatProperty] === 'none' && firstChildWidth + secondChildWidth > elWidth) ? 'vertical' : 'horizontal';
	},


	/**
  * Detects first nearest empty sortable to X and Y position using emptyInsertThreshold.
  * @param  {Number} x      X position
  * @param  {Number} y      Y position
  * @return {HTMLElement}   Element of the first found nearest Sortable
  */
	_detectNearestEmptySortable = function _detectNearestEmptySortable(x, y) {
		for (var i = 0; i < sortables.length; i++) {
			if (_lastChild(sortables[i])) continue;

			var rect = _getRect(sortables[i]),
			    threshold = sortables[i][expando].options.emptyInsertThreshold,
			    insideHorizontally = x >= rect.left - threshold && x <= rect.right + threshold,
			    insideVertically = y >= rect.top - threshold && y <= rect.bottom + threshold;

			if (insideHorizontally && insideVertically) {
				return sortables[i];
			}
		}
	},
	    _isClientInRowColumn = function _isClientInRowColumn(x, y, el, axis, options) {
		var targetRect = _getRect(el),
		    targetS1Opp = axis === 'vertical' ? targetRect.left : targetRect.top,
		    targetS2Opp = axis === 'vertical' ? targetRect.right : targetRect.bottom,
		    mouseOnOppAxis = axis === 'vertical' ? x : y;

		return targetS1Opp < mouseOnOppAxis && mouseOnOppAxis < targetS2Opp;
	},
	    _isElInRowColumn = function _isElInRowColumn(el1, el2, axis) {
		var el1Rect = el1 === dragEl && realDragElRect || _getRect(el1),
		    el2Rect = el2 === dragEl && realDragElRect || _getRect(el2),
		    el1S1Opp = axis === 'vertical' ? el1Rect.left : el1Rect.top,
		    el1S2Opp = axis === 'vertical' ? el1Rect.right : el1Rect.bottom,
		    el1OppLength = axis === 'vertical' ? el1Rect.width : el1Rect.height,
		    el2S1Opp = axis === 'vertical' ? el2Rect.left : el2Rect.top,
		    el2S2Opp = axis === 'vertical' ? el2Rect.right : el2Rect.bottom,
		    el2OppLength = axis === 'vertical' ? el2Rect.width : el2Rect.height;

		return el1S1Opp === el2S1Opp || el1S2Opp === el2S2Opp || el1S1Opp + el1OppLength / 2 === el2S1Opp + el2OppLength / 2;
	},
	    _getParentAutoScrollElement = function _getParentAutoScrollElement(el, includeSelf) {
		// skip to window
		if (!el || !el.getBoundingClientRect) return _getWindowScrollingElement();

		var elem = el;
		var gotSelf = false;
		do {
			// we don't need to get elem css if it isn't even overflowing in the first place (performance)
			if (elem.clientWidth < elem.scrollWidth || elem.clientHeight < elem.scrollHeight) {
				var elemCSS = _css(elem);
				if (elem.clientWidth < elem.scrollWidth && (elemCSS.overflowX == 'auto' || elemCSS.overflowX == 'scroll') || elem.clientHeight < elem.scrollHeight && (elemCSS.overflowY == 'auto' || elemCSS.overflowY == 'scroll')) {
					if (!elem || !elem.getBoundingClientRect || elem === document.body) return _getWindowScrollingElement();

					if (gotSelf || includeSelf) return elem;
					gotSelf = true;
				}
			}
			/* jshint boss:true */
		} while (elem = elem.parentNode);

		return _getWindowScrollingElement();
	},
	    _getWindowScrollingElement = function _getWindowScrollingElement() {
		if (IE11OrLess) {
			return document.documentElement;
		} else {
			return document.scrollingElement;
		}
	},
	    _scrollBy = function _scrollBy(el, x, y) {
		el.scrollLeft += x;
		el.scrollTop += y;
	},
	    _autoScroll = _throttle(function ( /**Event*/evt, /**Object*/options, /**HTMLElement*/rootEl, /**Boolean*/isFallback) {
		// Bug: https://bugzilla.mozilla.org/show_bug.cgi?id=505521
		if (options.scroll) {
			var _this = rootEl ? rootEl[expando] : window,
			    sens = options.scrollSensitivity,
			    speed = options.scrollSpeed,
			    x = evt.clientX,
			    y = evt.clientY,
			    winScroller = _getWindowScrollingElement(),
			    scrollThisInstance = false;

			// Detect scrollEl
			if (scrollParentEl !== rootEl) {
				_clearAutoScrolls();

				scrollEl = options.scroll;
				scrollCustomFn = options.scrollFn;

				if (scrollEl === true) {
					scrollEl = _getParentAutoScrollElement(rootEl, true);
					scrollParentEl = scrollEl;
				}
			}

			var layersOut = 0;
			var currentParent = scrollEl;
			do {
				var el = currentParent,
				    rect = _getRect(el),
				    top = rect.top,
				    bottom = rect.bottom,
				    left = rect.left,
				    right = rect.right,
				    width = rect.width,
				    height = rect.height,
				    scrollWidth,
				    scrollHeight,
				    css,
				    vx,
				    vy,
				    canScrollX,
				    canScrollY,
				    scrollPosX,
				    scrollPosY;

				scrollWidth = el.scrollWidth;
				scrollHeight = el.scrollHeight;

				css = _css(el);

				scrollPosX = el.scrollLeft;
				scrollPosY = el.scrollTop;

				if (el === winScroller) {
					canScrollX = width < scrollWidth && (css.overflowX === 'auto' || css.overflowX === 'scroll' || css.overflowX === 'visible');
					canScrollY = height < scrollHeight && (css.overflowY === 'auto' || css.overflowY === 'scroll' || css.overflowY === 'visible');
				} else {
					canScrollX = width < scrollWidth && (css.overflowX === 'auto' || css.overflowX === 'scroll');
					canScrollY = height < scrollHeight && (css.overflowY === 'auto' || css.overflowY === 'scroll');
				}

				vx = canScrollX && (abs(right - x) <= sens && scrollPosX + width < scrollWidth) - (abs(left - x) <= sens && !!scrollPosX);

				vy = canScrollY && (abs(bottom - y) <= sens && scrollPosY + height < scrollHeight) - (abs(top - y) <= sens && !!scrollPosY);

				if (!autoScrolls[layersOut]) {
					for (var i = 0; i <= layersOut; i++) {
						if (!autoScrolls[i]) {
							autoScrolls[i] = {};
						}
					}
				}

				if (autoScrolls[layersOut].vx != vx || autoScrolls[layersOut].vy != vy || autoScrolls[layersOut].el !== el) {
					autoScrolls[layersOut].el = el;
					autoScrolls[layersOut].vx = vx;
					autoScrolls[layersOut].vy = vy;

					clearInterval(autoScrolls[layersOut].pid);

					if (el && (vx != 0 || vy != 0)) {
						scrollThisInstance = true;
						/* jshint loopfunc:true */
						autoScrolls[layersOut].pid = setInterval(function () {
							// emulate drag over during autoscroll (fallback), emulating native DnD behaviour
							if (isFallback && this.layer === 0) {
								Sortable.active._emulateDragOver(true);
								Sortable.active._onTouchMove(touchEvt, true);
							}
							var scrollOffsetY = autoScrolls[this.layer].vy ? autoScrolls[this.layer].vy * speed : 0;
							var scrollOffsetX = autoScrolls[this.layer].vx ? autoScrolls[this.layer].vx * speed : 0;

							if ('function' === typeof scrollCustomFn) {
								if (scrollCustomFn.call(_this, scrollOffsetX, scrollOffsetY, evt, touchEvt, autoScrolls[this.layer].el) !== 'continue') {
									return;
								}
							}

							_scrollBy(autoScrolls[this.layer].el, scrollOffsetX, scrollOffsetY);
						}.bind({ layer: layersOut }), 24);
					}
				}
				layersOut++;
			} while (options.bubbleScroll && currentParent !== winScroller && (currentParent = _getParentAutoScrollElement(currentParent, false)));
			scrolling = scrollThisInstance; // in case another function catches scrolling as false in between when it is not
		}
	}, 30),
	    _clearAutoScrolls = function _clearAutoScrolls() {
		autoScrolls.forEach(function (autoScroll) {
			clearInterval(autoScroll.pid);
		});
		autoScrolls = [];
	},
	    _prepareGroup = function _prepareGroup(options) {
		function toFn(value, pull) {
			return function (to, from, dragEl, evt) {
				var sameGroup = to.options.group.name && from.options.group.name && to.options.group.name === from.options.group.name;

				if (value == null && (pull || sameGroup)) {
					// Default pull value
					// Default pull and put value if same group
					return true;
				} else if (value == null || value === false) {
					return false;
				} else if (pull && value === 'clone') {
					return value;
				} else if (typeof value === 'function') {
					return toFn(value(to, from, dragEl, evt), pull)(to, from, dragEl, evt);
				} else {
					var otherGroup = (pull ? to : from).options.group.name;

					return value === true || typeof value === 'string' && value === otherGroup || value.join && value.indexOf(otherGroup) > -1;
				}
			};
		}

		var group = {};
		var originalGroup = options.group;

		if (!originalGroup || (typeof originalGroup === "undefined" ? "undefined" : _typeof(originalGroup)) != 'object') {
			originalGroup = { name: originalGroup };
		}

		group.name = originalGroup.name;
		group.checkPull = toFn(originalGroup.pull, true);
		group.checkPut = toFn(originalGroup.put);
		group.revertClone = originalGroup.revertClone;

		options.group = group;
	},
	    _checkAlignment = function _checkAlignment(evt) {
		if (!dragEl || !dragEl.parentNode) return;
		dragEl.parentNode[expando] && dragEl.parentNode[expando]._computeIsAligned(evt);
	},
	    _isTrueParentSortable = function _isTrueParentSortable(el, target) {
		var trueParent = target;
		while (!trueParent[expando]) {
			trueParent = trueParent.parentNode;
		}

		return el === trueParent;
	},
	    _artificalBubble = function _artificalBubble(sortable, originalEvt, method) {
		// Artificial IE bubbling
		var nextParent = sortable.parentNode;
		while (nextParent && !nextParent[expando]) {
			nextParent = nextParent.parentNode;
		}

		if (nextParent) {
			nextParent[expando][method](_extend(originalEvt, {
				artificialBubble: true
			}));
		}
	},
	    _hideGhostForTarget = function _hideGhostForTarget() {
		if (!supportCssPointerEvents && ghostEl) {
			_css(ghostEl, 'display', 'none');
		}
	},
	    _unhideGhostForTarget = function _unhideGhostForTarget() {
		if (!supportCssPointerEvents && ghostEl) {
			_css(ghostEl, 'display', '');
		}
	};

	// #1184 fix - Prevent click event on fallback if dragged but item not changed position
	document.addEventListener('click', function (evt) {
		if (ignoreNextClick) {
			evt.preventDefault();
			evt.stopPropagation && evt.stopPropagation();
			evt.stopImmediatePropagation && evt.stopImmediatePropagation();
			ignoreNextClick = false;
			return false;
		}
	}, true);

	var nearestEmptyInsertDetectEvent = function nearestEmptyInsertDetectEvent(evt) {
		evt = evt.touches ? evt.touches[0] : evt;
		if (dragEl) {
			var nearest = _detectNearestEmptySortable(evt.clientX, evt.clientY);

			if (nearest) {
				nearest[expando]._onDragOver({
					clientX: evt.clientX,
					clientY: evt.clientY,
					target: nearest,
					rootEl: nearest
				});
			}
		}
	};
	// We do not want this to be triggered if completed (bubbling canceled), so only define it here
	_on(document, 'dragover', nearestEmptyInsertDetectEvent);
	_on(document, 'mousemove', nearestEmptyInsertDetectEvent);
	_on(document, 'touchmove', nearestEmptyInsertDetectEvent);

	/**
  * @class  Sortable
  * @param  {HTMLElement}  el
  * @param  {Object}       [options]
  */
	function Sortable(el, options) {
		if (!(el && el.nodeType && el.nodeType === 1)) {
			throw 'Sortable: `el` must be HTMLElement, not ' + {}.toString.call(el);
		}

		this.el = el; // root element
		this.options = options = _extend({}, options);

		// Export instance
		el[expando] = this;

		// Default options
		var defaults = {
			group: null,
			sort: true,
			disabled: false,
			store: null,
			handle: null,
			scroll: true,
			scrollSensitivity: 30,
			scrollSpeed: 10,
			bubbleScroll: true,
			draggable: /[uo]l/i.test(el.nodeName) ? '>li' : '>*',
			swapThreshold: 1, // percentage; 0 <= x <= 1
			invertSwap: false, // invert always
			invertedSwapThreshold: null, // will be set to same as swapThreshold if default
			removeCloneOnHide: true,
			direction: function direction() {
				return _detectDirection(el, this.options);
			},
			ghostClass: 'sortable-ghost',
			chosenClass: 'sortable-chosen',
			dragClass: 'sortable-drag',
			ignore: 'a, img',
			filter: null,
			preventOnFilter: true,
			animation: 0,
			easing: null,
			setData: function setData(dataTransfer, dragEl) {
				dataTransfer.setData('Text', dragEl.textContent);
			},
			dropBubble: false,
			dragoverBubble: false,
			dataIdAttr: 'data-id',
			delay: 0,
			touchStartThreshold: parseInt(window.devicePixelRatio, 10) || 1,
			forceFallback: false,
			fallbackClass: 'sortable-fallback',
			fallbackOnBody: false,
			fallbackTolerance: 0,
			fallbackOffset: { x: 0, y: 0 },
			supportPointer: Sortable.supportPointer !== false && ('PointerEvent' in window || window.navigator && 'msPointerEnabled' in window.navigator // microsoft
			),
			emptyInsertThreshold: 5
		};

		// Set default options
		for (var name in defaults) {
			!(name in options) && (options[name] = defaults[name]);
		}

		_prepareGroup(options);

		// Bind all private methods
		for (var fn in this) {
			if (fn.charAt(0) === '_' && typeof this[fn] === 'function') {
				this[fn] = this[fn].bind(this);
			}
		}

		// Setup drag mode
		this.nativeDraggable = options.forceFallback ? false : supportDraggable;

		if (this.nativeDraggable) {
			// Touch start threshold cannot be greater than the native dragstart threshold
			this.options.touchStartThreshold = 1;
		}

		// Bind events
		if (options.supportPointer) {
			_on(el, 'pointerdown', this._onTapStart);
		} else {
			_on(el, 'mousedown', this._onTapStart);
			_on(el, 'touchstart', this._onTapStart);
		}

		if (this.nativeDraggable) {
			_on(el, 'dragover', this);
			_on(el, 'dragenter', this);
		}

		sortables.push(this.el);

		// Restore sorting
		options.store && options.store.get && this.sort(options.store.get(this) || []);
	}

	Sortable.prototype = /** @lends Sortable.prototype */{
		constructor: Sortable,

		_computeIsAligned: function _computeIsAligned(evt) {
			var target;

			if (ghostEl && !supportCssPointerEvents) {
				_hideGhostForTarget();
				target = document.elementFromPoint(evt.clientX, evt.clientY);
				_unhideGhostForTarget();
			} else {
				target = evt.target;
			}

			target = _closest(target, this.options.draggable, this.el, false);
			if (_alignedSilent) return;
			if (!dragEl || dragEl.parentNode !== this.el) return;

			var children = this.el.children;
			for (var i = 0; i < children.length; i++) {
				// Don't change for target in case it is changed to aligned before onDragOver is fired
				if (_closest(children[i], this.options.draggable, this.el, false) && children[i] !== target) {
					children[i].sortableMouseAligned = _isClientInRowColumn(evt.clientX, evt.clientY, children[i], this._getDirection(evt, null), this.options);
				}
			}
			// Used for nulling last target when not in element, nothing to do with checking if aligned
			if (!_closest(target, this.options.draggable, this.el, true)) {
				lastTarget = null;
			}

			_alignedSilent = true;
			setTimeout(function () {
				_alignedSilent = false;
			}, 30);
		},

		_getDirection: function _getDirection(evt, target) {
			return typeof this.options.direction === 'function' ? this.options.direction.call(this, evt, target, dragEl) : this.options.direction;
		},

		_onTapStart: function _onTapStart( /** Event|TouchEvent */evt) {
			if (!evt.cancelable) return;
			var _this = this,
			    el = this.el,
			    options = this.options,
			    preventOnFilter = options.preventOnFilter,
			    type = evt.type,
			    touch = evt.touches && evt.touches[0],
			    target = (touch || evt).target,
			    originalTarget = evt.target.shadowRoot && (evt.path && evt.path[0] || evt.composedPath && evt.composedPath()[0]) || target,
			    filter = options.filter,
			    startIndex;

			_saveInputCheckedState(el);

			// IE: Calls events in capture mode if event element is nested. This ensures only correct element's _onTapStart goes through.
			// This process is also done in _onDragOver
			if (IE11OrLess && !evt.artificialBubble && !_isTrueParentSortable(el, target)) {
				return;
			}

			// Don't trigger start event when an element is been dragged, otherwise the evt.oldindex always wrong when set option.group.
			if (dragEl) {
				return;
			}

			if (/mousedown|pointerdown/.test(type) && evt.button !== 0 || options.disabled) {
				return; // only left button and enabled
			}

			// cancel dnd if original target is content editable
			if (originalTarget.isContentEditable) {
				return;
			}

			target = _closest(target, options.draggable, el, false);

			if (!target) {
				if (IE11OrLess) {
					_artificalBubble(el, evt, '_onTapStart');
				}
				return;
			}

			if (lastDownEl === target) {
				// Ignoring duplicate `down`
				return;
			}

			// Get the index of the dragged element within its parent
			startIndex = _index(target, options.draggable);

			// Check filter
			if (typeof filter === 'function') {
				if (filter.call(this, evt, target, this)) {
					_dispatchEvent(_this, originalTarget, 'filter', target, el, el, startIndex);
					preventOnFilter && evt.cancelable && evt.preventDefault();
					return; // cancel dnd
				}
			} else if (filter) {
				filter = filter.split(',').some(function (criteria) {
					criteria = _closest(originalTarget, criteria.trim(), el, false);

					if (criteria) {
						_dispatchEvent(_this, criteria, 'filter', target, el, el, startIndex);
						return true;
					}
				});

				if (filter) {
					preventOnFilter && evt.cancelable && evt.preventDefault();
					return; // cancel dnd
				}
			}

			if (options.handle && !_closest(originalTarget, options.handle, el, false)) {
				return;
			}

			// Prepare `dragstart`
			this._prepareDragStart(evt, touch, target, startIndex);
		},

		_handleAutoScroll: function _handleAutoScroll(evt, fallback) {
			if (!dragEl || !this.options.scroll) return;
			var x = evt.clientX,
			    y = evt.clientY,
			    elem = document.elementFromPoint(x, y),
			    _this = this;

			// IE does not seem to have native autoscroll,
			// Edge's autoscroll seems too conditional,
			// MACOS Safari does not have autoscroll,
			// Firefox and Chrome are good
			if (fallback || Edge || IE11OrLess || Safari) {
				_autoScroll(evt, _this.options, elem, fallback);

				// Listener for pointer element change
				var ogElemScroller = _getParentAutoScrollElement(elem, true);
				if (scrolling && (!pointerElemChangedInterval || x !== lastPointerElemX || y !== lastPointerElemY)) {

					pointerElemChangedInterval && clearInterval(pointerElemChangedInterval);
					// Detect for pointer elem change, emulating native DnD behaviour
					pointerElemChangedInterval = setInterval(function () {
						if (!dragEl) return;
						// could also check if scroll direction on newElem changes due to parent autoscrolling
						var newElem = _getParentAutoScrollElement(document.elementFromPoint(x, y), true);
						if (newElem !== ogElemScroller) {
							ogElemScroller = newElem;
							_clearAutoScrolls();
							_autoScroll(evt, _this.options, ogElemScroller, fallback);
						}
					}, 10);
					lastPointerElemX = x;
					lastPointerElemY = y;
				}
			} else {
				// if DnD is enabled (and browser has good autoscrolling), first autoscroll will already scroll, so get parent autoscroll of first autoscroll
				if (!_this.options.bubbleScroll || _getParentAutoScrollElement(elem, true) === _getWindowScrollingElement()) {
					_clearAutoScrolls();
					return;
				}
				_autoScroll(evt, _this.options, _getParentAutoScrollElement(elem, false), false);
			}
		},

		_prepareDragStart: function _prepareDragStart( /** Event */evt, /** Touch */touch, /** HTMLElement */target, /** Number */startIndex) {
			var _this = this,
			    el = _this.el,
			    options = _this.options,
			    ownerDocument = el.ownerDocument,
			    dragStartFn;

			if (target && !dragEl && target.parentNode === el) {
				rootEl = el;
				dragEl = target;
				parentEl = dragEl.parentNode;
				nextEl = dragEl.nextSibling;
				lastDownEl = target;
				activeGroup = options.group;
				oldIndex = startIndex;

				tapEvt = {
					target: dragEl,
					clientX: (touch || evt).clientX,
					clientY: (touch || evt).clientY
				};

				this._lastX = (touch || evt).clientX;
				this._lastY = (touch || evt).clientY;

				dragEl.style['will-change'] = 'all';
				// undo animation if needed
				dragEl.style.transition = '';
				dragEl.style.transform = '';

				dragStartFn = function dragStartFn() {
					// Delayed drag has been triggered
					// we can re-enable the events: touchmove/mousemove
					_this._disableDelayedDragEvents();

					if (!FireFox && _this.nativeDraggable) {
						dragEl.draggable = true;
					}

					// Bind the events: dragstart/dragend
					_this._triggerDragStart(evt, touch);

					// Drag start event
					_dispatchEvent(_this, rootEl, 'choose', dragEl, rootEl, rootEl, oldIndex);

					// Chosen item
					_toggleClass(dragEl, options.chosenClass, true);
				};

				// Disable "draggable"
				options.ignore.split(',').forEach(function (criteria) {
					_find(dragEl, criteria.trim(), _disableDraggable);
				});

				if (options.supportPointer) {
					_on(ownerDocument, 'pointerup', _this._onDrop);
				} else {
					_on(ownerDocument, 'mouseup', _this._onDrop);
					_on(ownerDocument, 'touchend', _this._onDrop);
					_on(ownerDocument, 'touchcancel', _this._onDrop);
				}

				// Make dragEl draggable (must be before delay for FireFox)
				if (FireFox && this.nativeDraggable) {
					this.options.touchStartThreshold = 4;
					dragEl.draggable = true;
				}

				// Delay is impossible for native DnD in Edge or IE
				if (options.delay && (!this.nativeDraggable || !(Edge || IE11OrLess))) {
					// If the user moves the pointer or let go the click or touch
					// before the delay has been reached:
					// disable the delayed drag
					_on(ownerDocument, 'mouseup', _this._disableDelayedDrag);
					_on(ownerDocument, 'touchend', _this._disableDelayedDrag);
					_on(ownerDocument, 'touchcancel', _this._disableDelayedDrag);
					_on(ownerDocument, 'mousemove', _this._delayedDragTouchMoveHandler);
					_on(ownerDocument, 'touchmove', _this._delayedDragTouchMoveHandler);
					options.supportPointer && _on(ownerDocument, 'pointermove', _this._delayedDragTouchMoveHandler);

					_this._dragStartTimer = setTimeout(dragStartFn, options.delay);
				} else {
					dragStartFn();
				}
			}
		},

		_delayedDragTouchMoveHandler: function _delayedDragTouchMoveHandler( /** TouchEvent|PointerEvent **/e) {
			var touch = e.touches ? e.touches[0] : e;
			if (max(abs(touch.clientX - this._lastX), abs(touch.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1))) {
				this._disableDelayedDrag();
			}
		},

		_disableDelayedDrag: function _disableDelayedDrag() {
			dragEl && _disableDraggable(dragEl);
			clearTimeout(this._dragStartTimer);

			this._disableDelayedDragEvents();
		},

		_disableDelayedDragEvents: function _disableDelayedDragEvents() {
			var ownerDocument = this.el.ownerDocument;
			_off(ownerDocument, 'mouseup', this._disableDelayedDrag);
			_off(ownerDocument, 'touchend', this._disableDelayedDrag);
			_off(ownerDocument, 'touchcancel', this._disableDelayedDrag);
			_off(ownerDocument, 'mousemove', this._delayedDragTouchMoveHandler);
			_off(ownerDocument, 'touchmove', this._delayedDragTouchMoveHandler);
			_off(ownerDocument, 'pointermove', this._delayedDragTouchMoveHandler);
		},

		_triggerDragStart: function _triggerDragStart( /** Event */evt, /** Touch */touch) {
			touch = touch || (evt.pointerType == 'touch' ? evt : null);

			if (!this.nativeDraggable || touch) {
				if (this.options.supportPointer) {
					_on(document, 'pointermove', this._onTouchMove);
				} else if (touch) {
					_on(document, 'touchmove', this._onTouchMove);
				} else {
					_on(document, 'mousemove', this._onTouchMove);
				}
			} else {
				_on(dragEl, 'dragend', this);
				_on(rootEl, 'dragstart', this._onDragStart);
			}

			try {
				if (document.selection) {
					// Timeout neccessary for IE9
					_nextTick(function () {
						document.selection.empty();
					});
				} else {
					window.getSelection().removeAllRanges();
				}
			} catch (err) {}
		},

		_dragStarted: function _dragStarted(fallback, evt) {
			awaitingDragStarted = false;
			if (rootEl && dragEl) {
				if (this.nativeDraggable) {
					_on(document, 'dragover', this._handleAutoScroll);
					_on(document, 'dragover', _checkAlignment);
				}
				var options = this.options;

				// Apply effect
				!fallback && _toggleClass(dragEl, options.dragClass, false);
				_toggleClass(dragEl, options.ghostClass, true);

				// In case dragging an animated element
				_css(dragEl, 'transform', '');

				Sortable.active = this;

				fallback && this._appendGhost();

				// Drag start event
				_dispatchEvent(this, rootEl, 'start', dragEl, rootEl, rootEl, oldIndex, undefined, evt);
			} else {
				this._nulling();
			}
		},

		_emulateDragOver: function _emulateDragOver(forAutoScroll) {
			if (touchEvt) {
				if (this._lastX === touchEvt.clientX && this._lastY === touchEvt.clientY && !forAutoScroll) {
					return;
				}
				this._lastX = touchEvt.clientX;
				this._lastY = touchEvt.clientY;

				_hideGhostForTarget();

				var target = document.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
				var parent = target;

				while (target && target.shadowRoot) {
					target = target.shadowRoot.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
					parent = target;
				}

				if (parent) {
					do {
						if (parent[expando]) {
							var inserted;

							inserted = parent[expando]._onDragOver({
								clientX: touchEvt.clientX,
								clientY: touchEvt.clientY,
								target: target,
								rootEl: parent
							});

							if (inserted && !this.options.dragoverBubble) {
								break;
							}
						}

						target = parent; // store last element
					}
					/* jshint boss:true */
					while (parent = parent.parentNode);
				}
				dragEl.parentNode[expando]._computeIsAligned(touchEvt);

				_unhideGhostForTarget();
			}
		},

		_onTouchMove: function _onTouchMove( /**TouchEvent*/evt, forAutoScroll) {
			if (tapEvt) {
				var options = this.options,
				    fallbackTolerance = options.fallbackTolerance,
				    fallbackOffset = options.fallbackOffset,
				    touch = evt.touches ? evt.touches[0] : evt,
				    matrix = ghostEl && _matrix(ghostEl),
				    scaleX = ghostEl && matrix && matrix.a,
				    scaleY = ghostEl && matrix && matrix.d,
				    relativeScrollOffset = PositionGhostAbsolutely && ghostRelativeParent && _getRelativeScrollOffset(ghostRelativeParent),
				    dx = (touch.clientX - tapEvt.clientX + fallbackOffset.x) / (scaleX || 1) + (relativeScrollOffset ? relativeScrollOffset[0] - ghostRelativeParentInitialScroll[0] : 0) / (scaleX || 1),
				    dy = (touch.clientY - tapEvt.clientY + fallbackOffset.y) / (scaleY || 1) + (relativeScrollOffset ? relativeScrollOffset[1] - ghostRelativeParentInitialScroll[1] : 0) / (scaleY || 1),
				    translate3d = evt.touches ? 'translate3d(' + dx + 'px,' + dy + 'px,0)' : 'translate(' + dx + 'px,' + dy + 'px)';

				// only set the status to dragging, when we are actually dragging
				if (!Sortable.active && !awaitingDragStarted) {
					if (fallbackTolerance && min(abs(touch.clientX - this._lastX), abs(touch.clientY - this._lastY)) < fallbackTolerance) {
						return;
					}
					this._onDragStart(evt, true);
				}

				!forAutoScroll && this._handleAutoScroll(touch, true);

				moved = true;
				touchEvt = touch;

				_css(ghostEl, 'webkitTransform', translate3d);
				_css(ghostEl, 'mozTransform', translate3d);
				_css(ghostEl, 'msTransform', translate3d);
				_css(ghostEl, 'transform', translate3d);

				evt.cancelable && evt.preventDefault();
			}
		},

		_appendGhost: function _appendGhost() {
			// Bug if using scale(): https://stackoverflow.com/questions/2637058
			// Not being adjusted for
			if (!ghostEl) {
				var container = this.options.fallbackOnBody ? document.body : rootEl,
				    rect = _getRect(dragEl, true, container, !PositionGhostAbsolutely),
				    css = _css(dragEl),
				    options = this.options;

				// Position absolutely
				if (PositionGhostAbsolutely) {
					// Get relatively positioned parent
					ghostRelativeParent = container;

					while (_css(ghostRelativeParent, 'position') === 'static' && _css(ghostRelativeParent, 'transform') === 'none' && ghostRelativeParent !== document) {
						ghostRelativeParent = ghostRelativeParent.parentNode;
					}

					if (ghostRelativeParent !== document) {
						var ghostRelativeParentRect = _getRect(ghostRelativeParent, true);

						rect.top -= ghostRelativeParentRect.top;
						rect.left -= ghostRelativeParentRect.left;
					}

					if (ghostRelativeParent !== document.body && ghostRelativeParent !== document.documentElement) {
						if (ghostRelativeParent === document) ghostRelativeParent = _getWindowScrollingElement();

						rect.top += ghostRelativeParent.scrollTop;
						rect.left += ghostRelativeParent.scrollLeft;
					} else {
						ghostRelativeParent = _getWindowScrollingElement();
					}
					ghostRelativeParentInitialScroll = _getRelativeScrollOffset(ghostRelativeParent);
				}

				ghostEl = dragEl.cloneNode(true);

				_toggleClass(ghostEl, options.ghostClass, false);
				_toggleClass(ghostEl, options.fallbackClass, true);
				_toggleClass(ghostEl, options.dragClass, true);

				_css(ghostEl, 'box-sizing', 'border-box');
				_css(ghostEl, 'margin', 0);
				_css(ghostEl, 'top', rect.top);
				_css(ghostEl, 'left', rect.left);
				_css(ghostEl, 'width', rect.width);
				_css(ghostEl, 'height', rect.height);
				_css(ghostEl, 'opacity', '0.8');
				_css(ghostEl, 'position', PositionGhostAbsolutely ? 'absolute' : 'fixed');
				_css(ghostEl, 'zIndex', '100000');
				_css(ghostEl, 'pointerEvents', 'none');

				container.appendChild(ghostEl);
			}
		},

		_onDragStart: function _onDragStart( /**Event*/evt, /**boolean*/fallback) {
			var _this = this;
			var dataTransfer = evt.dataTransfer;
			var options = _this.options;

			// Setup clone
			cloneEl = _clone(dragEl);

			cloneEl.draggable = false;
			cloneEl.style['will-change'] = '';

			this._hideClone();

			_toggleClass(cloneEl, _this.options.chosenClass, false);

			// #1143: IFrame support workaround
			_this._cloneId = _nextTick(function () {
				if (!_this.options.removeCloneOnHide) {
					rootEl.insertBefore(cloneEl, dragEl);
				}
				_dispatchEvent(_this, rootEl, 'clone', dragEl);
			});

			!fallback && _toggleClass(dragEl, options.dragClass, true);

			// Set proper drop events
			if (fallback) {
				ignoreNextClick = true;
				_this._loopId = setInterval(_this._emulateDragOver, 50);
			} else {
				// Undo what was set in _prepareDragStart before drag started
				_off(document, 'mouseup', _this._onDrop);
				_off(document, 'touchend', _this._onDrop);
				_off(document, 'touchcancel', _this._onDrop);

				if (dataTransfer) {
					dataTransfer.effectAllowed = 'move';
					options.setData && options.setData.call(_this, dataTransfer, dragEl);
				}

				_on(document, 'drop', _this);

				// #1276 fix:
				_css(dragEl, 'transform', 'translateZ(0)');
			}

			awaitingDragStarted = true;

			_this._dragStartId = _nextTick(_this._dragStarted.bind(_this, fallback, evt));
			_on(document, 'selectstart', _this);
			if (Safari) {
				_css(document.body, 'user-select', 'none');
			}
		},

		// Returns true - if no further action is needed (either inserted or another condition)
		_onDragOver: function _onDragOver( /**Event*/evt) {
			var el = this.el,
			    target = evt.target,
			    dragRect,
			    targetRect,
			    revert,
			    options = this.options,
			    group = options.group,
			    activeSortable = Sortable.active,
			    isOwner = activeGroup === group,
			    canSort = options.sort,
			    _this = this;

			if (_silent) return;

			// IE event order fix
			if (IE11OrLess && !evt.rootEl && !evt.artificialBubble && !_isTrueParentSortable(el, target)) {
				return;
			}

			// Return invocation when dragEl is inserted (or completed)
			function completed(insertion) {
				if (insertion) {
					if (isOwner) {
						activeSortable._hideClone();
					} else {
						activeSortable._showClone(_this);
					}

					if (activeSortable) {
						// Set ghost class to new sortable's ghost class
						_toggleClass(dragEl, putSortable ? putSortable.options.ghostClass : activeSortable.options.ghostClass, false);
						_toggleClass(dragEl, options.ghostClass, true);
					}

					if (putSortable !== _this && _this !== Sortable.active) {
						putSortable = _this;
					} else if (_this === Sortable.active) {
						putSortable = null;
					}

					// Animation
					dragRect && _this._animate(dragRect, dragEl);
					target && targetRect && _this._animate(targetRect, target);
				}

				// Null lastTarget if it is not inside a previously swapped element
				if (target === dragEl && !dragEl.animated || target === el && !target.animated) {
					lastTarget = null;
				}
				// no bubbling and not fallback
				if (!options.dragoverBubble && !evt.rootEl && target !== document) {
					_this._handleAutoScroll(evt);
					dragEl.parentNode[expando]._computeIsAligned(evt);
				}

				!options.dragoverBubble && evt.stopPropagation && evt.stopPropagation();

				return true;
			}

			// Call when dragEl has been inserted
			function changed() {
				_dispatchEvent(_this, rootEl, 'change', target, el, rootEl, oldIndex, _index(dragEl, options.draggable), evt);
			}

			if (evt.preventDefault !== void 0) {
				evt.cancelable && evt.preventDefault();
			}

			moved = true;

			target = _closest(target, options.draggable, el, true);

			// target is dragEl or target is animated
			if (!!_closest(evt.target, null, dragEl, true) || target.animated) {
				return completed(false);
			}

			if (target !== dragEl) {
				ignoreNextClick = false;
			}

			if (activeSortable && !options.disabled && (isOwner ? canSort || (revert = !rootEl.contains(dragEl)) // Reverting item into the original list
			: putSortable === this || (this.lastPutMode = activeGroup.checkPull(this, activeSortable, dragEl, evt)) && group.checkPut(this, activeSortable, dragEl, evt))) {
				var axis = this._getDirection(evt, target);

				dragRect = _getRect(dragEl);

				if (revert) {
					this._hideClone();
					parentEl = rootEl; // actualization

					if (nextEl) {
						rootEl.insertBefore(dragEl, nextEl);
					} else {
						rootEl.appendChild(dragEl);
					}

					return completed(true);
				}

				var elLastChild = _lastChild(el);

				if (!elLastChild || _ghostIsLast(evt, axis, el) && !elLastChild.animated) {
					// assign target only if condition is true
					if (elLastChild && el === evt.target) {
						target = elLastChild;
					}

					if (target) {
						targetRect = _getRect(target);
					}

					if (isOwner) {
						activeSortable._hideClone();
					} else {
						activeSortable._showClone(this);
					}

					if (_onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, !!target) !== false) {
						el.appendChild(dragEl);
						parentEl = el; // actualization
						realDragElRect = null;

						changed();
						return completed(true);
					}
				} else if (target && target !== dragEl && target.parentNode === el) {
					var direction = 0,
					    targetBeforeFirstSwap,
					    aligned = target.sortableMouseAligned,
					    differentLevel = dragEl.parentNode !== el,
					    side1 = axis === 'vertical' ? 'top' : 'left',
					    scrolledPastTop = _isScrolledPast(target, 'top') || _isScrolledPast(dragEl, 'top'),
					    scrollBefore = scrolledPastTop ? scrolledPastTop.scrollTop : void 0;

					if (lastTarget !== target) {
						lastMode = null;
						targetBeforeFirstSwap = _getRect(target)[side1];
						pastFirstInvertThresh = false;
					}

					// Reference: https://www.lucidchart.com/documents/view/10fa0e93-e362-4126-aca2-b709ee56bd8b/0
					if (_isElInRowColumn(dragEl, target, axis) && aligned || differentLevel || scrolledPastTop || options.invertSwap || lastMode === 'insert' ||
					// Needed, in the case that we are inside target and inserted because not aligned... aligned will stay false while inside
					// and lastMode will change to 'insert', but we must swap
					lastMode === 'swap') {
						// New target that we will be inside
						if (lastMode !== 'swap') {
							isCircumstantialInvert = options.invertSwap || differentLevel;
						}

						direction = _getSwapDirection(evt, target, axis, options.swapThreshold, options.invertedSwapThreshold == null ? options.swapThreshold : options.invertedSwapThreshold, isCircumstantialInvert, lastTarget === target);
						lastMode = 'swap';
					} else {
						// Insert at position
						direction = _getInsertDirection(target);
						lastMode = 'insert';
					}
					if (direction === 0) return completed(false);

					realDragElRect = null;
					lastTarget = target;

					lastDirection = direction;

					targetRect = _getRect(target);

					var nextSibling = target.nextElementSibling,
					    after = false;

					after = direction === 1;

					var moveVector = _onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, after);

					if (moveVector !== false) {
						if (moveVector === 1 || moveVector === -1) {
							after = moveVector === 1;
						}

						_silent = true;
						setTimeout(_unsilent, 30);

						if (isOwner) {
							activeSortable._hideClone();
						} else {
							activeSortable._showClone(this);
						}

						if (after && !nextSibling) {
							el.appendChild(dragEl);
						} else {
							target.parentNode.insertBefore(dragEl, after ? nextSibling : target);
						}

						// Undo chrome's scroll adjustment
						if (scrolledPastTop) {
							_scrollBy(scrolledPastTop, 0, scrollBefore - scrolledPastTop.scrollTop);
						}

						parentEl = dragEl.parentNode; // actualization

						// must be done before animation
						if (targetBeforeFirstSwap !== undefined && !isCircumstantialInvert) {
							targetMoveDistance = abs(targetBeforeFirstSwap - _getRect(target)[side1]);
						}
						changed();

						return completed(true);
					}
				}

				if (el.contains(dragEl)) {
					return completed(false);
				}
			}

			if (IE11OrLess && !evt.rootEl) {
				_artificalBubble(el, evt, '_onDragOver');
			}

			return false;
		},

		_animate: function _animate(prevRect, target) {
			var ms = this.options.animation;

			if (ms) {
				var currentRect = _getRect(target);

				if (target === dragEl) {
					realDragElRect = currentRect;
				}

				if (prevRect.nodeType === 1) {
					prevRect = _getRect(prevRect);
				}

				// Check if actually moving position
				if (prevRect.left + prevRect.width / 2 !== currentRect.left + currentRect.width / 2 || prevRect.top + prevRect.height / 2 !== currentRect.top + currentRect.height / 2) {
					var matrix = _matrix(this.el),
					    scaleX = matrix && matrix.a,
					    scaleY = matrix && matrix.d;

					_css(target, 'transition', 'none');
					_css(target, 'transform', 'translate3d(' + (prevRect.left - currentRect.left) / (scaleX ? scaleX : 1) + 'px,' + (prevRect.top - currentRect.top) / (scaleY ? scaleY : 1) + 'px,0)');

					forRepaintDummy = target.offsetWidth; // repaint
					_css(target, 'transition', 'transform ' + ms + 'ms' + (this.options.easing ? ' ' + this.options.easing : ''));
					_css(target, 'transform', 'translate3d(0,0,0)');
				}

				typeof target.animated === 'number' && clearTimeout(target.animated);
				target.animated = setTimeout(function () {
					_css(target, 'transition', '');
					_css(target, 'transform', '');
					target.animated = false;
				}, ms);
			}
		},

		_offUpEvents: function _offUpEvents() {
			var ownerDocument = this.el.ownerDocument;

			_off(document, 'touchmove', this._onTouchMove);
			_off(document, 'pointermove', this._onTouchMove);
			_off(ownerDocument, 'mouseup', this._onDrop);
			_off(ownerDocument, 'touchend', this._onDrop);
			_off(ownerDocument, 'pointerup', this._onDrop);
			_off(ownerDocument, 'touchcancel', this._onDrop);
			_off(document, 'selectstart', this);
		},

		_onDrop: function _onDrop( /**Event*/evt) {
			var el = this.el,
			    options = this.options;
			awaitingDragStarted = false;
			scrolling = false;
			isCircumstantialInvert = false;
			pastFirstInvertThresh = false;

			clearInterval(this._loopId);

			clearInterval(pointerElemChangedInterval);
			_clearAutoScrolls();
			_cancelThrottle();

			clearTimeout(this._dragStartTimer);

			_cancelNextTick(this._cloneId);
			_cancelNextTick(this._dragStartId);

			// Unbind events
			_off(document, 'mousemove', this._onTouchMove);

			if (this.nativeDraggable) {
				_off(document, 'drop', this);
				_off(el, 'dragstart', this._onDragStart);
				_off(document, 'dragover', this._handleAutoScroll);
				_off(document, 'dragover', _checkAlignment);
			}

			if (Safari) {
				_css(document.body, 'user-select', '');
			}

			this._offUpEvents();

			if (evt) {
				if (moved) {
					evt.cancelable && evt.preventDefault();
					!options.dropBubble && evt.stopPropagation();
				}

				ghostEl && ghostEl.parentNode && ghostEl.parentNode.removeChild(ghostEl);

				if (rootEl === parentEl || putSortable && putSortable.lastPutMode !== 'clone') {
					// Remove clone
					cloneEl && cloneEl.parentNode && cloneEl.parentNode.removeChild(cloneEl);
				}

				if (dragEl) {
					if (this.nativeDraggable) {
						_off(dragEl, 'dragend', this);
					}

					_disableDraggable(dragEl);
					dragEl.style['will-change'] = '';

					// Remove class's
					_toggleClass(dragEl, putSortable ? putSortable.options.ghostClass : this.options.ghostClass, false);
					_toggleClass(dragEl, this.options.chosenClass, false);

					// Drag stop event
					_dispatchEvent(this, rootEl, 'unchoose', dragEl, parentEl, rootEl, oldIndex, null, evt);

					if (rootEl !== parentEl) {
						newIndex = _index(dragEl, options.draggable);

						if (newIndex >= 0) {
							// Add event
							_dispatchEvent(null, parentEl, 'add', dragEl, parentEl, rootEl, oldIndex, newIndex, evt);

							// Remove event
							_dispatchEvent(this, rootEl, 'remove', dragEl, parentEl, rootEl, oldIndex, newIndex, evt);

							// drag from one list and drop into another
							_dispatchEvent(null, parentEl, 'sort', dragEl, parentEl, rootEl, oldIndex, newIndex, evt);
							_dispatchEvent(this, rootEl, 'sort', dragEl, parentEl, rootEl, oldIndex, newIndex, evt);
						}

						putSortable && putSortable.save();
					} else {
						if (dragEl.nextSibling !== nextEl) {
							// Get the index of the dragged element within its parent
							newIndex = _index(dragEl, options.draggable);

							if (newIndex >= 0) {
								// drag & drop within the same list
								_dispatchEvent(this, rootEl, 'update', dragEl, parentEl, rootEl, oldIndex, newIndex, evt);
								_dispatchEvent(this, rootEl, 'sort', dragEl, parentEl, rootEl, oldIndex, newIndex, evt);
							}
						}
					}

					if (Sortable.active) {
						/* jshint eqnull:true */
						if (newIndex == null || newIndex === -1) {
							newIndex = oldIndex;
						}
						_dispatchEvent(this, rootEl, 'end', dragEl, parentEl, rootEl, oldIndex, newIndex, evt);

						// Save sorting
						this.save();
					}
				}
			}
			this._nulling();
		},

		_nulling: function _nulling() {
			rootEl = dragEl = parentEl = ghostEl = nextEl = cloneEl = lastDownEl = scrollEl = scrollParentEl = autoScrolls.length = pointerElemChangedInterval = lastPointerElemX = lastPointerElemY = tapEvt = touchEvt = moved = newIndex = oldIndex = lastTarget = lastDirection = forRepaintDummy = realDragElRect = putSortable = activeGroup = Sortable.active = null;

			savedInputChecked.forEach(function (el) {
				el.checked = true;
			});

			savedInputChecked.length = 0;
		},

		handleEvent: function handleEvent( /**Event*/evt) {
			switch (evt.type) {
				case 'drop':
				case 'dragend':
					this._onDrop(evt);
					break;

				case 'dragenter':
				case 'dragover':
					if (dragEl) {
						this._onDragOver(evt);
						_globalDragOver(evt);
					}
					break;

				case 'selectstart':
					evt.preventDefault();
					break;
			}
		},

		/**
   * Serializes the item into an array of string.
   * @returns {String[]}
   */
		toArray: function toArray() {
			var order = [],
			    el,
			    children = this.el.children,
			    i = 0,
			    n = children.length,
			    options = this.options;

			for (; i < n; i++) {
				el = children[i];
				if (_closest(el, options.draggable, this.el, false)) {
					order.push(el.getAttribute(options.dataIdAttr) || _generateId(el));
				}
			}

			return order;
		},

		/**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */
		sort: function sort(order) {
			var items = {},
			    rootEl = this.el;

			this.toArray().forEach(function (id, i) {
				var el = rootEl.children[i];

				if (_closest(el, this.options.draggable, rootEl, false)) {
					items[id] = el;
				}
			}, this);

			order.forEach(function (id) {
				if (items[id]) {
					rootEl.removeChild(items[id]);
					rootEl.appendChild(items[id]);
				}
			});
		},

		/**
   * Save the current sorting
   */
		save: function save() {
			var store = this.options.store;
			store && store.set && store.set(this);
		},

		/**
   * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
   * @param   {HTMLElement}  el
   * @param   {String}       [selector]  default: `options.draggable`
   * @returns {HTMLElement|null}
   */
		closest: function closest(el, selector) {
			return _closest(el, selector || this.options.draggable, this.el, false);
		},

		/**
   * Set/get option
   * @param   {string} name
   * @param   {*}      [value]
   * @returns {*}
   */
		option: function option(name, value) {
			var options = this.options;

			if (value === void 0) {
				return options[name];
			} else {
				options[name] = value;

				if (name === 'group') {
					_prepareGroup(options);
				}
			}
		},

		/**
   * Destroy
   */
		destroy: function destroy() {
			var el = this.el;

			el[expando] = null;

			_off(el, 'mousedown', this._onTapStart);
			_off(el, 'touchstart', this._onTapStart);
			_off(el, 'pointerdown', this._onTapStart);

			if (this.nativeDraggable) {
				_off(el, 'dragover', this);
				_off(el, 'dragenter', this);
			}
			// Remove draggable attributes
			Array.prototype.forEach.call(el.querySelectorAll('[draggable]'), function (el) {
				el.removeAttribute('draggable');
			});

			this._onDrop();

			sortables.splice(sortables.indexOf(this.el), 1);

			this.el = el = null;
		},

		_hideClone: function _hideClone() {
			if (!cloneEl.cloneHidden) {
				_css(cloneEl, 'display', 'none');
				cloneEl.cloneHidden = true;
				if (cloneEl.parentNode && this.options.removeCloneOnHide) {
					cloneEl.parentNode.removeChild(cloneEl);
				}
			}
		},

		_showClone: function _showClone(putSortable) {
			if (putSortable.lastPutMode !== 'clone') {
				this._hideClone();
				return;
			}

			if (cloneEl.cloneHidden) {
				// show clone at dragEl or original position
				if (rootEl.contains(dragEl) && !this.options.group.revertClone) {
					rootEl.insertBefore(cloneEl, dragEl);
				} else if (nextEl) {
					rootEl.insertBefore(cloneEl, nextEl);
				} else {
					rootEl.appendChild(cloneEl);
				}

				if (this.options.group.revertClone) {
					this._animate(dragEl, cloneEl);
				}
				_css(cloneEl, 'display', '');
				cloneEl.cloneHidden = false;
			}
		}
	};

	function _closest( /**HTMLElement*/el, /**String*/selector, /**HTMLElement*/ctx, includeCTX) {
		if (el) {
			ctx = ctx || document;

			do {
				if (selector != null && (selector[0] === '>' && el.parentNode === ctx && _matches(el, selector.substring(1)) || _matches(el, selector)) || includeCTX && el === ctx) {
					return el;
				}

				if (el === ctx) break;
				/* jshint boss:true */
			} while (el = _getParentOrHost(el));
		}

		return null;
	}

	function _getParentOrHost(el) {
		return el.host && el !== document && el.host.nodeType ? el.host : el.parentNode;
	}

	function _globalDragOver( /**Event*/evt) {
		if (evt.dataTransfer) {
			evt.dataTransfer.dropEffect = 'move';
		}
		evt.cancelable && evt.preventDefault();
	}

	function _on(el, event, fn) {
		el.addEventListener(event, fn, captureMode);
	}

	function _off(el, event, fn) {
		el.removeEventListener(event, fn, captureMode);
	}

	function _toggleClass(el, name, state) {
		if (el && name) {
			if (el.classList) {
				el.classList[state ? 'add' : 'remove'](name);
			} else {
				var className = (' ' + el.className + ' ').replace(R_SPACE, ' ').replace(' ' + name + ' ', ' ');
				el.className = (className + (state ? ' ' + name : '')).replace(R_SPACE, ' ');
			}
		}
	}

	function _css(el, prop, val) {
		var style = el && el.style;

		if (style) {
			if (val === void 0) {
				if (document.defaultView && document.defaultView.getComputedStyle) {
					val = document.defaultView.getComputedStyle(el, '');
				} else if (el.currentStyle) {
					val = el.currentStyle;
				}

				return prop === void 0 ? val : val[prop];
			} else {
				if (!(prop in style) && prop.indexOf('webkit') === -1) {
					prop = '-webkit-' + prop;
				}

				style[prop] = val + (typeof val === 'string' ? '' : 'px');
			}
		}
	}

	function _matrix(el) {
		var appliedTransforms = '';
		do {
			var transform = _css(el, 'transform');

			if (transform && transform !== 'none') {
				appliedTransforms = transform + ' ' + appliedTransforms;
			}
			/* jshint boss:true */
		} while (el = el.parentNode);

		if (window.DOMMatrix) {
			return new DOMMatrix(appliedTransforms);
		} else if (window.WebKitCSSMatrix) {
			return new WebKitCSSMatrix(appliedTransforms);
		} else if (window.CSSMatrix) {
			return new CSSMatrix(appliedTransforms);
		}
	}

	function _find(ctx, tagName, iterator) {
		if (ctx) {
			var list = ctx.getElementsByTagName(tagName),
			    i = 0,
			    n = list.length;

			if (iterator) {
				for (; i < n; i++) {
					iterator(list[i], i);
				}
			}

			return list;
		}

		return [];
	}

	function _dispatchEvent(sortable, rootEl, name, targetEl, toEl, fromEl, startIndex, newIndex, originalEvt) {
		sortable = sortable || rootEl[expando];
		var evt,
		    options = sortable.options,
		    onName = 'on' + name.charAt(0).toUpperCase() + name.substr(1);
		// Support for new CustomEvent feature
		if (window.CustomEvent && !IE11OrLess && !Edge) {
			evt = new CustomEvent(name, {
				bubbles: true,
				cancelable: true
			});
		} else {
			evt = document.createEvent('Event');
			evt.initEvent(name, true, true);
		}

		evt.to = toEl || rootEl;
		evt.from = fromEl || rootEl;
		evt.item = targetEl || rootEl;
		evt.clone = cloneEl;

		evt.oldIndex = startIndex;
		evt.newIndex = newIndex;

		evt.originalEvent = originalEvt;
		evt.pullMode = putSortable ? putSortable.lastPutMode : undefined;

		if (rootEl) {
			rootEl.dispatchEvent(evt);
		}

		if (options[onName]) {
			options[onName].call(sortable, evt);
		}
	}

	function _onMove(fromEl, toEl, dragEl, dragRect, targetEl, targetRect, originalEvt, willInsertAfter) {
		var evt,
		    sortable = fromEl[expando],
		    onMoveFn = sortable.options.onMove,
		    retVal;
		// Support for new CustomEvent feature
		if (window.CustomEvent && !IE11OrLess && !Edge) {
			evt = new CustomEvent('move', {
				bubbles: true,
				cancelable: true
			});
		} else {
			evt = document.createEvent('Event');
			evt.initEvent('move', true, true);
		}

		evt.to = toEl;
		evt.from = fromEl;
		evt.dragged = dragEl;
		evt.draggedRect = dragRect;
		evt.related = targetEl || toEl;
		evt.relatedRect = targetRect || _getRect(toEl);
		evt.willInsertAfter = willInsertAfter;

		evt.originalEvent = originalEvt;

		fromEl.dispatchEvent(evt);

		if (onMoveFn) {
			retVal = onMoveFn.call(sortable, evt, originalEvt);
		}

		return retVal;
	}

	function _disableDraggable(el) {
		el.draggable = false;
	}

	function _unsilent() {
		_silent = false;
	}

	/**
  * Gets nth child of el, ignoring hidden children, sortable's elements (does not ignore clone if it's visible)
  * and non-draggable elements
  * @param  {HTMLElement} el       The parent element
  * @param  {Number} childNum      The index of the child
  * @param  {Object} options       Parent Sortable's options
  * @return {HTMLElement}          The child at index childNum, or null if not found
  */
	function _getChild(el, childNum, options) {
		var currentChild = 0,
		    i = 0,
		    children = el.children;

		while (i < children.length) {
			if (children[i].style.display !== 'none' && children[i] !== ghostEl && children[i] !== dragEl && _closest(children[i], options.draggable, el, false)) {
				if (currentChild === childNum) {
					return children[i];
				}
				currentChild++;
			}

			i++;
		}
		return null;
	}

	/**
  * Gets the last child in the el, ignoring ghostEl or invisible elements (clones)
  * @param  {HTMLElement} el       Parent element
  * @return {HTMLElement}          The last child, ignoring ghostEl
  */
	function _lastChild(el) {
		var last = el.lastElementChild;

		while (last && (last === ghostEl || last.style.display === 'none')) {
			last = last.previousElementSibling;
		}

		return last || null;
	}

	function _ghostIsLast(evt, axis, el) {
		var elRect = _getRect(_lastChild(el)),
		    mouseOnAxis = axis === 'vertical' ? evt.clientY : evt.clientX,
		    mouseOnOppAxis = axis === 'vertical' ? evt.clientX : evt.clientY,
		    targetS2 = axis === 'vertical' ? elRect.bottom : elRect.right,
		    targetS1Opp = axis === 'vertical' ? elRect.left : elRect.top,
		    targetS2Opp = axis === 'vertical' ? elRect.right : elRect.bottom,
		    spacer = 10;

		return axis === 'vertical' ? mouseOnOppAxis > targetS2Opp + spacer || mouseOnOppAxis <= targetS2Opp && mouseOnAxis > targetS2 && mouseOnOppAxis >= targetS1Opp : mouseOnAxis > targetS2 && mouseOnOppAxis > targetS1Opp || mouseOnAxis <= targetS2 && mouseOnOppAxis > targetS2Opp + spacer;
	}

	function _getSwapDirection(evt, target, axis, swapThreshold, invertedSwapThreshold, invertSwap, isLastTarget) {
		var targetRect = _getRect(target),
		    mouseOnAxis = axis === 'vertical' ? evt.clientY : evt.clientX,
		    targetLength = axis === 'vertical' ? targetRect.height : targetRect.width,
		    targetS1 = axis === 'vertical' ? targetRect.top : targetRect.left,
		    targetS2 = axis === 'vertical' ? targetRect.bottom : targetRect.right,
		    dragRect = _getRect(dragEl),
		    invert = false;

		if (!invertSwap) {
			// Never invert or create dragEl shadow when target movemenet causes mouse to move past the end of regular swapThreshold
			if (isLastTarget && targetMoveDistance < targetLength * swapThreshold) {
				// multiplied only by swapThreshold because mouse will already be inside target by (1 - threshold) * targetLength / 2
				// check if past first invert threshold on side opposite of lastDirection
				if (!pastFirstInvertThresh && (lastDirection === 1 ? mouseOnAxis > targetS1 + targetLength * invertedSwapThreshold / 2 : mouseOnAxis < targetS2 - targetLength * invertedSwapThreshold / 2)) {
					// past first invert threshold, do not restrict inverted threshold to dragEl shadow
					pastFirstInvertThresh = true;
				}

				if (!pastFirstInvertThresh) {
					var dragS1 = axis === 'vertical' ? dragRect.top : dragRect.left,
					    dragS2 = axis === 'vertical' ? dragRect.bottom : dragRect.right;
					// dragEl shadow (target move distance shadow)
					if (lastDirection === 1 ? mouseOnAxis < targetS1 + targetMoveDistance // over dragEl shadow
					: mouseOnAxis > targetS2 - targetMoveDistance) {
						return lastDirection * -1;
					}
				} else {
					invert = true;
				}
			} else {
				// Regular
				if (mouseOnAxis > targetS1 + targetLength * (1 - swapThreshold) / 2 && mouseOnAxis < targetS2 - targetLength * (1 - swapThreshold) / 2) {
					return _getInsertDirection(target);
				}
			}
		}

		invert = invert || invertSwap;

		if (invert) {
			// Invert of regular
			if (mouseOnAxis < targetS1 + targetLength * invertedSwapThreshold / 2 || mouseOnAxis > targetS2 - targetLength * invertedSwapThreshold / 2) {
				return mouseOnAxis > targetS1 + targetLength / 2 ? 1 : -1;
			}
		}

		return 0;
	}

	/**
  * Gets the direction dragEl must be swapped relative to target in order to make it
  * seem that dragEl has been "inserted" into that element's position
  * @param  {HTMLElement} target       The target whose position dragEl is being inserted at
  * @return {Number}                   Direction dragEl must be swapped
  */
	function _getInsertDirection(target) {
		var dragElIndex = _index(dragEl),
		    targetIndex = _index(target);

		if (dragElIndex < targetIndex) {
			return 1;
		} else {
			return -1;
		}
	}

	/**
  * Generate id
  * @param   {HTMLElement} el
  * @returns {String}
  * @private
  */
	function _generateId(el) {
		var str = el.tagName + el.className + el.src + el.href + el.textContent,
		    i = str.length,
		    sum = 0;

		while (i--) {
			sum += str.charCodeAt(i);
		}

		return sum.toString(36);
	}

	/**
  * Returns the index of an element within its parent for a selected set of
  * elements
  * @param  {HTMLElement} el
  * @param  {selector} selector
  * @return {number}
  */
	function _index(el, selector) {
		var index = 0;

		if (!el || !el.parentNode) {
			return -1;
		}

		while (el && (el = el.previousElementSibling)) {
			if (el.nodeName.toUpperCase() !== 'TEMPLATE' && el !== cloneEl) {
				index++;
			}
		}

		return index;
	}

	function _matches( /**HTMLElement*/el, /**String*/selector) {
		if (el) {
			try {
				if (el.matches) {
					return el.matches(selector);
				} else if (el.msMatchesSelector) {
					return el.msMatchesSelector(selector);
				} else if (el.webkitMatchesSelector) {
					return el.webkitMatchesSelector(selector);
				}
			} catch (_) {
				return false;
			}
		}

		return false;
	}

	var _throttleTimeout;
	function _throttle(callback, ms) {
		return function () {
			if (!_throttleTimeout) {
				var args = arguments,
				    _this = this;

				_throttleTimeout = setTimeout(function () {
					if (args.length === 1) {
						callback.call(_this, args[0]);
					} else {
						callback.apply(_this, args);
					}

					_throttleTimeout = void 0;
				}, ms);
			}
		};
	}

	function _cancelThrottle() {
		clearTimeout(_throttleTimeout);
		_throttleTimeout = void 0;
	}

	function _extend(dst, src) {
		if (dst && src) {
			for (var key in src) {
				if (src.hasOwnProperty(key)) {
					dst[key] = src[key];
				}
			}
		}

		return dst;
	}

	function _clone(el) {
		if (Polymer && Polymer.dom) {
			return Polymer.dom(el).cloneNode(true);
		} else if ($) {
			return $(el).clone(true)[0];
		} else {
			return el.cloneNode(true);
		}
	}

	function _saveInputCheckedState(root) {
		savedInputChecked.length = 0;

		var inputs = root.getElementsByTagName('input');
		var idx = inputs.length;

		while (idx--) {
			var el = inputs[idx];
			el.checked && savedInputChecked.push(el);
		}
	}

	function _nextTick(fn) {
		return setTimeout(fn, 0);
	}

	function _cancelNextTick(id) {
		return clearTimeout(id);
	}

	/**
  * Returns the "bounding client rect" of given element
  * @param  {HTMLElement} el                The element whose boundingClientRect is wanted
  * @param  {[HTMLElement]} container       the parent the element will be placed in
  * @param  {[Boolean]} adjustForTransform  Whether the rect should compensate for parent's transform
  * @return {Object}                        The boundingClientRect of el
  */
	function _getRect(el, adjustForTransform, container, adjustForFixed) {
		if (!el.getBoundingClientRect && el !== win) return;

		var elRect, top, left, bottom, right, height, width;

		if (el !== win && el !== _getWindowScrollingElement()) {
			elRect = el.getBoundingClientRect();
			top = elRect.top;
			left = elRect.left;
			bottom = elRect.bottom;
			right = elRect.right;
			height = elRect.height;
			width = elRect.width;
		} else {
			top = 0;
			left = 0;
			bottom = window.innerHeight;
			right = window.innerWidth;
			height = window.innerHeight;
			width = window.innerWidth;
		}

		if (adjustForFixed && el !== win) {
			// Adjust for translate()
			container = container || el.parentNode;

			// solves #1123 (see: https://stackoverflow.com/a/37953806/6088312)
			// Not needed on <= IE11
			if (!IE11OrLess) {
				do {
					if (container && container.getBoundingClientRect && _css(container, 'transform') !== 'none') {
						var containerRect = container.getBoundingClientRect();

						// Set relative to edges of padding box of container
						top -= containerRect.top + parseInt(_css(container, 'border-top-width'));
						left -= containerRect.left + parseInt(_css(container, 'border-left-width'));
						bottom = top + elRect.height;
						right = left + elRect.width;

						break;
					}
					/* jshint boss:true */
				} while (container = container.parentNode);
			}
		}

		if (adjustForTransform && el !== win) {
			// Adjust for scale()
			var matrix = _matrix(container || el),
			    scaleX = matrix && matrix.a,
			    scaleY = matrix && matrix.d;

			if (matrix) {
				top /= scaleY;
				left /= scaleX;

				width /= scaleX;
				height /= scaleY;

				bottom = top + height;
				right = left + width;
			}
		}

		return {
			top: top,
			left: left,
			bottom: bottom,
			right: right,
			width: width,
			height: height
		};
	}

	/**
  * Checks if a side of an element is scrolled past a side of it's parents
  * @param  {HTMLElement}  el       The element who's side being scrolled out of view is in question
  * @param  {String}       side     Side of the element in question ('top', 'left', 'right', 'bottom')
  * @return {HTMLElement}           The parent scroll element that the el's side is scrolled past, or null if there is no such element
  */
	function _isScrolledPast(el, side) {
		var parent = _getParentAutoScrollElement(el, true),
		    elSide = _getRect(el)[side];

		/* jshint boss:true */
		while (parent) {
			var parentSide = _getRect(parent)[side],
			    visible;

			if (side === 'top' || side === 'left') {
				visible = elSide >= parentSide;
			} else {
				visible = elSide <= parentSide;
			}

			if (!visible) return parent;

			if (parent === _getWindowScrollingElement()) break;

			parent = _getParentAutoScrollElement(parent, false);
		}

		return false;
	}

	/**
  * Returns the scroll offset of the given element, added with all the scroll offsets of parent elements.
  * The value is returned in real pixels.
  * @param  {HTMLElement} el
  * @return {Array}             Offsets in the format of [left, top]
  */
	function _getRelativeScrollOffset(el) {
		var offsetLeft = 0,
		    offsetTop = 0,
		    winScroller = _getWindowScrollingElement();

		if (el) {
			do {
				var matrix = _matrix(el),
				    scaleX = matrix.a,
				    scaleY = matrix.d;

				offsetLeft += el.scrollLeft * scaleX;
				offsetTop += el.scrollTop * scaleY;
			} while (el !== winScroller && (el = el.parentNode));
		}

		return [offsetLeft, offsetTop];
	}

	// Fixed #973:
	_on(document, 'touchmove', function (evt) {
		if ((Sortable.active || awaitingDragStarted) && evt.cancelable) {
			evt.preventDefault();
		}
	});
	document.body.ondrop = function (event) {
		event.preventDefault();
		event.stopPropagation();
	};

	// Export utils
	Sortable.utils = {
		on: _on,
		off: _off,
		css: _css,
		find: _find,
		is: function is(el, selector) {
			return !!_closest(el, selector, el, false);
		},
		extend: _extend,
		throttle: _throttle,
		closest: _closest,
		toggleClass: _toggleClass,
		clone: _clone,
		index: _index,
		nextTick: _nextTick,
		cancelNextTick: _cancelNextTick,
		detectDirection: _detectDirection,
		getChild: _getChild
	};

	/**
  * Create sortable instance
  * @param {HTMLElement}  el
  * @param {Object}      [options]
  */
	Sortable.create = function (el, options) {
		return new Sortable(el, options);
	};

	// Export
	Sortable.version = '1.8.4';
	return Sortable;
});

/***/ }),

/***/ 241:
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
    { staticClass: "table", class: { pagebar: _vm.$attrs.totalSize > 0 } },
    [
      _c(
        "vperfect-scrollbar",
        {
          ref: "wrapTable",
          staticClass: "wrap-table",
          attrs: { settings: { wheelSpeed: 1 } }
        },
        [
          _c("table", { attrs: { id: _vm.id } }, [
            _c(
              "tbody",
              _vm._l(_vm.list, function(item, index) {
                return _c(
                  "tr",
                  { key: "tr_" + index },
                  [_vm._t("body", null, { item: item, index: index })],
                  2
                )
              }),
              0
            ),
            _c("thead", { class: { fix: _vm.scrollTop > 0 } }, [
              _c("tr", { on: { click: _vm.clkHead } }, [_vm._t("head")], 2)
            ]),
            _c("tfoot", [
              _c(
                "tr",
                _vm._l(_vm.mergeRow, function(info, index) {
                  return _c("td", { key: "ft_" + index }, [
                    _vm._v(_vm._s(info))
                  ])
                }),
                0
              )
            ])
          ])
        ]
      ),
      _vm.$attrs.totalSize > 0
        ? _c(
            "lv-pagebar",
            _vm._g(_vm._b({}, "lv-pagebar", _vm.$attrs, false), _vm.$listeners)
          )
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-93f73ca0", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; //
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

var _vuePerfectScrollbar = __webpack_require__(4);

var _vuePerfectScrollbar2 = _interopRequireDefault(_vuePerfectScrollbar);

var _index = __webpack_require__(15);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'DropMenu',
  components: {
    'vperfect-scrollbar': _vuePerfectScrollbar2.default,
    'lvInput': _index2.default
  },
  data: function data() {
    return {
      keyword: '',
      show: false
    };
  },
  props: {
    // v-model, 数组表示多选、其他单选
    value: {
      default: ''
    },
    // 显示名称、选中值 字段映射，默认 name：显示名称，id：选中值
    keyvalue: {
      type: Object,
      default: {
        label: 'name',
        value: 'id'
      }
    },
    placeholder: {
      default: '请选择'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    // 是否允许检索
    searchabled: {
      type: Boolean,
      default: false
    },
    // 不允许选择的项 
    unselect: {
      default: function _default() {
        return [];
      }
    },
    list: {
      default: function _default() {
        return [];
      }
    },
    // 下拉框位置 top|bottom
    position: {
      default: 'bottom'
    }
  },
  computed: {
    clist: function clist() {
      var _this = this;
      var result = this.list.filter(function (item) {
        return item[_this.keyvalue.label].indexOf(_this.keyword) >= 0;
      });

      return result;
    },
    resultText: function resultText() {
      var _this = this;
      var arr = _typeof(this.value) === 'object' ? this.value : [this.value];
      var result = [];

      this.list.forEach(function (element) {
        if (arr.indexOf(element[_this.keyvalue.value]) > -1) {
          result.push(element[_this.keyvalue.label]);
        }
      });
      return result.join('、');
    }
  },
  beforeDestroy: function beforeDestroy() {
    window.removeEventListener('click', this.hideMenu);
  },
  mounted: function mounted() {
    window.addEventListener('click', this.hideMenu);
  },
  methods: {
    toggleMenu: function toggleMenu() {
      if (!this.disabled) {
        this.show = !this.show;
      }
    },
    hideMenu: function hideMenu() {
      this.show = false;
    },
    clkItem: function clkItem(info) {
      if (!this.disabled && this.unselect.indexOf(info[this.keyvalue.value]) === -1) {
        var result = '';
        var value = info[this.keyvalue.value];

        if (_typeof(this.value) === 'object') {
          // 多选
          result = JSON.parse(JSON.stringify(this.value));

          if (this.value.indexOf(value) === -1) {
            result.push(value);
          } else {
            result.splice(this.value.indexOf(value), 1);
          }
        } else {
          // 单选
          result = value;
          this.hideMenu();
        }
        this.$emit('update:value', result);
      }
    },
    iptChange: function iptChange(data) {
      this.keyword = data;
      this.show = true;
    },
    iptFocus: function iptFocus(data) {
      this.keyword = '';
      this.show = true;
    }
  }
};

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

/***/ 4:
/***/ (function(module, exports) {

module.exports=function(t){function e(o){if(r[o])return r[o].exports;var n=r[o]={i:o,l:!1,exports:{}};return t[o].call(n.exports,n,n.exports,e),n.l=!0,n.exports}var r={};return e.m=t,e.c=r,e.i=function(t){return t},e.d=function(t,r,o){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=7)}([function(t,e,r){"use strict";function o(t){function e(){a.add(t,"ps--focus")}function r(){a.remove(t,"ps--focus")}var o=this;o.settings=s.clone(c),o.containerWidth=null,o.containerHeight=null,o.contentWidth=null,o.contentHeight=null,o.isRtl="rtl"===u.css(t,"direction"),o.isNegativeScroll=function(){var e=t.scrollLeft,r=null;return t.scrollLeft=-1,r=t.scrollLeft<0,t.scrollLeft=e,r}(),o.negativeScrollAdjustment=o.isNegativeScroll?t.scrollWidth-t.clientWidth:0,o.event=new p,o.ownerDocument=t.ownerDocument||document,o.scrollbarXRail=u.appendTo(u.e("div","ps__scrollbar-x-rail"),t),o.scrollbarX=u.appendTo(u.e("div","ps__scrollbar-x"),o.scrollbarXRail),o.scrollbarX.setAttribute("tabindex",0),o.event.bind(o.scrollbarX,"focus",e),o.event.bind(o.scrollbarX,"blur",r),o.scrollbarXActive=null,o.scrollbarXWidth=null,o.scrollbarXLeft=null,o.scrollbarXBottom=s.toInt(u.css(o.scrollbarXRail,"bottom")),o.isScrollbarXUsingBottom=o.scrollbarXBottom===o.scrollbarXBottom,o.scrollbarXTop=o.isScrollbarXUsingBottom?null:s.toInt(u.css(o.scrollbarXRail,"top")),o.railBorderXWidth=s.toInt(u.css(o.scrollbarXRail,"borderLeftWidth"))+s.toInt(u.css(o.scrollbarXRail,"borderRightWidth")),u.css(o.scrollbarXRail,"display","block"),o.railXMarginWidth=s.toInt(u.css(o.scrollbarXRail,"marginLeft"))+s.toInt(u.css(o.scrollbarXRail,"marginRight")),u.css(o.scrollbarXRail,"display",""),o.railXWidth=null,o.railXRatio=null,o.scrollbarYRail=u.appendTo(u.e("div","ps__scrollbar-y-rail"),t),o.scrollbarY=u.appendTo(u.e("div","ps__scrollbar-y"),o.scrollbarYRail),o.scrollbarY.setAttribute("tabindex",0),o.event.bind(o.scrollbarY,"focus",e),o.event.bind(o.scrollbarY,"blur",r),o.scrollbarYActive=null,o.scrollbarYHeight=null,o.scrollbarYTop=null,o.scrollbarYRight=s.toInt(u.css(o.scrollbarYRail,"right")),o.isScrollbarYUsingRight=o.scrollbarYRight===o.scrollbarYRight,o.scrollbarYLeft=o.isScrollbarYUsingRight?null:s.toInt(u.css(o.scrollbarYRail,"left")),o.scrollbarYOuterWidth=o.isRtl?s.outerWidth(o.scrollbarY):null,o.railBorderYWidth=s.toInt(u.css(o.scrollbarYRail,"borderTopWidth"))+s.toInt(u.css(o.scrollbarYRail,"borderBottomWidth")),u.css(o.scrollbarYRail,"display","block"),o.railYMarginHeight=s.toInt(u.css(o.scrollbarYRail,"marginTop"))+s.toInt(u.css(o.scrollbarYRail,"marginBottom")),u.css(o.scrollbarYRail,"display",""),o.railYHeight=null,o.railYRatio=null}function n(t){return t.getAttribute("data-ps-id")}function i(t,e){t.setAttribute("data-ps-id",e)}function l(t){t.removeAttribute("data-ps-id")}var s=r(1),a=r(5),c=r(14),u=r(4),p=r(11),d=r(12),f={};e.add=function(t){var e=d();return i(t,e),f[e]=new o(t),f[e]},e.remove=function(t){delete f[n(t)],l(t)},e.get=function(t){return f[n(t)]}},function(t,e,r){"use strict";function o(t){return function(e,r){t(e,"ps--in-scrolling"),void 0!==r?t(e,"ps--"+r):(t(e,"ps--x"),t(e,"ps--y"))}}var n=r(5),i=r(4),l=e.toInt=function(t){return parseInt(t,10)||0},s=e.clone=function(t){if(t){if(Array.isArray(t))return t.map(s);if("object"==typeof t){var e={};for(var r in t)e[r]=s(t[r]);return e}return t}return null};e.extend=function(t,e){var r=s(t);for(var o in e)r[o]=s(e[o]);return r},e.isEditable=function(t){return i.matches(t,"input,[contenteditable]")||i.matches(t,"select,[contenteditable]")||i.matches(t,"textarea,[contenteditable]")||i.matches(t,"button,[contenteditable]")},e.removePsClasses=function(t){for(var e=n.list(t),r=0;r<e.length;r++){var o=e[r];0===o.indexOf("ps-")&&n.remove(t,o)}},e.outerWidth=function(t){return l(i.css(t,"width"))+l(i.css(t,"paddingLeft"))+l(i.css(t,"paddingRight"))+l(i.css(t,"borderLeftWidth"))+l(i.css(t,"borderRightWidth"))},e.startScrolling=o(n.add),e.stopScrolling=o(n.remove),e.env={isWebKit:"undefined"!=typeof document&&"WebkitAppearance"in document.documentElement.style,supportsTouch:"undefined"!=typeof window&&("ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch),supportsIePointer:"undefined"!=typeof window&&null!==window.navigator.msMaxTouchPoints}},function(t,e,r){"use strict";function o(t,e){return t.settings.minScrollbarLength&&(e=Math.max(e,t.settings.minScrollbarLength)),t.settings.maxScrollbarLength&&(e=Math.min(e,t.settings.maxScrollbarLength)),e}function n(t,e){var r={width:e.railXWidth};e.isRtl?r.left=e.negativeScrollAdjustment+t.scrollLeft+e.containerWidth-e.contentWidth:r.left=t.scrollLeft,e.isScrollbarXUsingBottom?r.bottom=e.scrollbarXBottom-t.scrollTop:r.top=e.scrollbarXTop+t.scrollTop,s.css(e.scrollbarXRail,r);var o={top:t.scrollTop,height:e.railYHeight};e.isScrollbarYUsingRight?e.isRtl?o.right=e.contentWidth-(e.negativeScrollAdjustment+t.scrollLeft)-e.scrollbarYRight-e.scrollbarYOuterWidth:o.right=e.scrollbarYRight-t.scrollLeft:e.isRtl?o.left=e.negativeScrollAdjustment+t.scrollLeft+2*e.containerWidth-e.contentWidth-e.scrollbarYLeft-e.scrollbarYOuterWidth:o.left=e.scrollbarYLeft+t.scrollLeft,s.css(e.scrollbarYRail,o),s.css(e.scrollbarX,{left:e.scrollbarXLeft,width:e.scrollbarXWidth-e.railBorderXWidth}),s.css(e.scrollbarY,{top:e.scrollbarYTop,height:e.scrollbarYHeight-e.railBorderYWidth})}var i=r(1),l=r(5),s=r(4),a=r(0),c=r(3);t.exports=function(t){var e=a.get(t);e.containerWidth=t.clientWidth,e.containerHeight=t.clientHeight,e.contentWidth=t.scrollWidth,e.contentHeight=t.scrollHeight;var r;t.contains(e.scrollbarXRail)||(r=s.queryChildren(t,".ps__scrollbar-x-rail"),r.length>0&&r.forEach(function(t){s.remove(t)}),s.appendTo(e.scrollbarXRail,t)),t.contains(e.scrollbarYRail)||(r=s.queryChildren(t,".ps__scrollbar-y-rail"),r.length>0&&r.forEach(function(t){s.remove(t)}),s.appendTo(e.scrollbarYRail,t)),!e.settings.suppressScrollX&&e.containerWidth+e.settings.scrollXMarginOffset<e.contentWidth?(e.scrollbarXActive=!0,e.railXWidth=e.containerWidth-e.railXMarginWidth,e.railXRatio=e.containerWidth/e.railXWidth,e.scrollbarXWidth=o(e,i.toInt(e.railXWidth*e.containerWidth/e.contentWidth)),e.scrollbarXLeft=i.toInt((e.negativeScrollAdjustment+t.scrollLeft)*(e.railXWidth-e.scrollbarXWidth)/(e.contentWidth-e.containerWidth))):e.scrollbarXActive=!1,!e.settings.suppressScrollY&&e.containerHeight+e.settings.scrollYMarginOffset<e.contentHeight?(e.scrollbarYActive=!0,e.railYHeight=e.containerHeight-e.railYMarginHeight,e.railYRatio=e.containerHeight/e.railYHeight,e.scrollbarYHeight=o(e,i.toInt(e.railYHeight*e.containerHeight/e.contentHeight)),e.scrollbarYTop=i.toInt(t.scrollTop*(e.railYHeight-e.scrollbarYHeight)/(e.contentHeight-e.containerHeight))):e.scrollbarYActive=!1,e.scrollbarXLeft>=e.railXWidth-e.scrollbarXWidth&&(e.scrollbarXLeft=e.railXWidth-e.scrollbarXWidth),e.scrollbarYTop>=e.railYHeight-e.scrollbarYHeight&&(e.scrollbarYTop=e.railYHeight-e.scrollbarYHeight),n(t,e),e.scrollbarXActive?l.add(t,"ps--active-x"):(l.remove(t,"ps--active-x"),e.scrollbarXWidth=0,e.scrollbarXLeft=0,c(t,"left",0)),e.scrollbarYActive?l.add(t,"ps--active-y"):(l.remove(t,"ps--active-y"),e.scrollbarYHeight=0,e.scrollbarYTop=0,c(t,"top",0))}},function(t,e,r){"use strict";var o=r(0),n=function(t){var e=document.createEvent("Event");return e.initEvent(t,!0,!0),e};t.exports=function(t,e,r){if(void 0===t)throw"You must provide an element to the update-scroll function";if(void 0===e)throw"You must provide an axis to the update-scroll function";if(void 0===r)throw"You must provide a value to the update-scroll function";"top"===e&&r<=0&&(t.scrollTop=r=0,t.dispatchEvent(n("ps-y-reach-start"))),"left"===e&&r<=0&&(t.scrollLeft=r=0,t.dispatchEvent(n("ps-x-reach-start")));var i=o.get(t);"top"===e&&r>=i.contentHeight-i.containerHeight&&(r=i.contentHeight-i.containerHeight,r-t.scrollTop<=1?r=t.scrollTop:t.scrollTop=r,t.dispatchEvent(n("ps-y-reach-end"))),"left"===e&&r>=i.contentWidth-i.containerWidth&&(r=i.contentWidth-i.containerWidth,r-t.scrollLeft<=1?r=t.scrollLeft:t.scrollLeft=r,t.dispatchEvent(n("ps-x-reach-end"))),void 0===i.lastTop&&(i.lastTop=t.scrollTop),void 0===i.lastLeft&&(i.lastLeft=t.scrollLeft),"top"===e&&r<i.lastTop&&t.dispatchEvent(n("ps-scroll-up")),"top"===e&&r>i.lastTop&&t.dispatchEvent(n("ps-scroll-down")),"left"===e&&r<i.lastLeft&&t.dispatchEvent(n("ps-scroll-left")),"left"===e&&r>i.lastLeft&&t.dispatchEvent(n("ps-scroll-right")),"top"===e&&r!==i.lastTop&&(t.scrollTop=i.lastTop=r,t.dispatchEvent(n("ps-scroll-y"))),"left"===e&&r!==i.lastLeft&&(t.scrollLeft=i.lastLeft=r,t.dispatchEvent(n("ps-scroll-x")))}},function(t,e,r){"use strict";function o(t,e){return window.getComputedStyle(t)[e]}function n(t,e,r){return"number"==typeof r&&(r=r.toString()+"px"),t.style[e]=r,t}function i(t,e){for(var r in e){var o=e[r];"number"==typeof o&&(o=o.toString()+"px"),t.style[r]=o}return t}var l={};l.e=function(t,e){var r=document.createElement(t);return r.className=e,r},l.appendTo=function(t,e){return e.appendChild(t),t},l.css=function(t,e,r){return"object"==typeof e?i(t,e):void 0===r?o(t,e):n(t,e,r)},l.matches=function(t,e){return void 0!==t.matches?t.matches(e):void 0!==t.matchesSelector?t.matchesSelector(e):void 0!==t.webkitMatchesSelector?t.webkitMatchesSelector(e):void 0!==t.mozMatchesSelector?t.mozMatchesSelector(e):void 0!==t.msMatchesSelector?t.msMatchesSelector(e):void 0},l.remove=function(t){void 0!==t.remove?t.remove():t.parentNode&&t.parentNode.removeChild(t)},l.queryChildren=function(t,e){return Array.prototype.filter.call(t.childNodes,function(t){return l.matches(t,e)})},t.exports=l},function(t,e,r){"use strict";function o(t,e){var r=t.className.split(" ");r.indexOf(e)<0&&r.push(e),t.className=r.join(" ")}function n(t,e){var r=t.className.split(" "),o=r.indexOf(e);o>=0&&r.splice(o,1),t.className=r.join(" ")}e.add=function(t,e){t.classList?t.classList.add(e):o(t,e)},e.remove=function(t,e){t.classList?t.classList.remove(e):n(t,e)},e.list=function(t){return t.classList?Array.prototype.slice.apply(t.classList):t.className.split(" ")}},function(t,e,r){r(26);var o=r(27)(r(29),r(28),null,null);t.exports=o.exports},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=r(6),n=r.n(o);e.default=n.a},function(t,e,r){e=t.exports=r(9)(),e.push([t.i,".ps{-ms-touch-action:auto;touch-action:auto;overflow:hidden!important;-ms-overflow-style:none}@supports (-ms-overflow-style:none){.ps{overflow:auto!important}}@media (-ms-high-contrast:none),screen and (-ms-high-contrast:active){.ps{overflow:auto!important}}.ps.ps--active-x>.ps__scrollbar-x-rail,.ps.ps--active-y>.ps__scrollbar-y-rail{display:block;background-color:transparent}.ps.ps--in-scrolling.ps--x>.ps__scrollbar-x-rail{background-color:#eee;opacity:.9}.ps.ps--in-scrolling.ps--x>.ps__scrollbar-x-rail>.ps__scrollbar-x{background-color:#999;height:11px}.ps.ps--in-scrolling.ps--y>.ps__scrollbar-y-rail{background-color:#eee;opacity:.9}.ps.ps--in-scrolling.ps--y>.ps__scrollbar-y-rail>.ps__scrollbar-y{background-color:#999;width:11px}.ps>.ps__scrollbar-x-rail{display:none;position:absolute;opacity:0;transition:background-color .2s linear,opacity .2s linear;bottom:0;height:15px}.ps>.ps__scrollbar-x-rail>.ps__scrollbar-x{position:absolute;background-color:#aaa;border-radius:6px;transition:background-color .2s linear,height .2s linear,width .2s ease-in-out,border-radius .2s ease-in-out;bottom:2px;height:6px}.ps>.ps__scrollbar-x-rail:active>.ps__scrollbar-x,.ps>.ps__scrollbar-x-rail:hover>.ps__scrollbar-x{height:11px}.ps>.ps__scrollbar-y-rail{display:none;position:absolute;opacity:0;transition:background-color .2s linear,opacity .2s linear;right:0;width:15px}.ps>.ps__scrollbar-y-rail>.ps__scrollbar-y{position:absolute;background-color:#aaa;border-radius:6px;transition:background-color .2s linear,height .2s linear,width .2s ease-in-out,border-radius .2s ease-in-out;right:2px;width:6px}.ps>.ps__scrollbar-y-rail:active>.ps__scrollbar-y,.ps>.ps__scrollbar-y-rail:hover>.ps__scrollbar-y{width:11px}.ps:hover.ps--in-scrolling.ps--x>.ps__scrollbar-x-rail{background-color:#eee;opacity:.9}.ps:hover.ps--in-scrolling.ps--x>.ps__scrollbar-x-rail>.ps__scrollbar-x{background-color:#999;height:11px}.ps:hover.ps--in-scrolling.ps--y>.ps__scrollbar-y-rail{background-color:#eee;opacity:.9}.ps:hover.ps--in-scrolling.ps--y>.ps__scrollbar-y-rail>.ps__scrollbar-y{background-color:#999;width:11px}.ps:hover>.ps__scrollbar-x-rail,.ps:hover>.ps__scrollbar-y-rail{opacity:.6}.ps:hover>.ps__scrollbar-x-rail:hover{background-color:#eee;opacity:.9}.ps:hover>.ps__scrollbar-x-rail:hover>.ps__scrollbar-x{background-color:#999}.ps:hover>.ps__scrollbar-y-rail:hover{background-color:#eee;opacity:.9}.ps:hover>.ps__scrollbar-y-rail:hover>.ps__scrollbar-y{background-color:#999}.ps-container{position:relative}",""])},function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var r=this[e];r[2]?t.push("@media "+r[2]+"{"+r[1]+"}"):t.push(r[1])}return t.join("")},t.i=function(e,r){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},n=0;n<this.length;n++){var i=this[n][0];"number"==typeof i&&(o[i]=!0)}for(n=0;n<e.length;n++){var l=e[n];"number"==typeof l[0]&&o[l[0]]||(r&&!l[2]?l[2]=r:r&&(l[2]="("+l[2]+") and ("+r+")"),t.push(l))}},t}},function(t,e,r){"use strict";t.exports=r(13)},function(t,e,r){"use strict";var o=function(t){this.element=t,this.events={}};o.prototype.bind=function(t,e){void 0===this.events[t]&&(this.events[t]=[]),this.events[t].push(e),this.element.addEventListener(t,e,!1)},o.prototype.unbind=function(t,e){var r=void 0!==e;this.events[t]=this.events[t].filter(function(o){return!(!r||o===e)||(this.element.removeEventListener(t,o,!1),!1)},this)},o.prototype.unbindAll=function(){for(var t in this.events)this.unbind(t)};var n=function(){this.eventElements=[]};n.prototype.eventElement=function(t){var e=this.eventElements.filter(function(e){return e.element===t})[0];return void 0===e&&(e=new o(t),this.eventElements.push(e)),e},n.prototype.bind=function(t,e,r){this.eventElement(t).bind(e,r)},n.prototype.unbind=function(t,e,r){this.eventElement(t).unbind(e,r)},n.prototype.unbindAll=function(){for(var t=0;t<this.eventElements.length;t++)this.eventElements[t].unbindAll()},n.prototype.once=function(t,e,r){var o=this.eventElement(t),n=function(t){o.unbind(e,n),r(t)};o.bind(e,n)},t.exports=n},function(t,e,r){"use strict";t.exports=function(){function t(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return function(){return t()+t()+"-"+t()+"-"+t()+"-"+t()+"-"+t()+t()+t()}}()},function(t,e,r){"use strict";var o=r(15),n=r(23),i=r(24);t.exports={initialize:n,update:i,destroy:o}},function(t,e,r){"use strict";t.exports={handlers:["click-rail","drag-scrollbar","keyboard","wheel","touch"],maxScrollbarLength:null,minScrollbarLength:null,scrollXMarginOffset:0,scrollYMarginOffset:0,suppressScrollX:!1,suppressScrollY:!1,swipePropagation:!0,swipeEasing:!0,useBothWheelAxes:!1,wheelPropagation:!1,wheelSpeed:1,theme:"default"}},function(t,e,r){"use strict";var o=r(1),n=r(4),i=r(0);t.exports=function(t){var e=i.get(t);e&&(e.event.unbindAll(),n.remove(e.scrollbarX),n.remove(e.scrollbarY),n.remove(e.scrollbarXRail),n.remove(e.scrollbarYRail),o.removePsClasses(t),i.remove(t))}},function(t,e,r){"use strict";function o(t,e){function r(t){return t.getBoundingClientRect()}var o=function(t){t.stopPropagation()};e.event.bind(e.scrollbarY,"click",o),e.event.bind(e.scrollbarYRail,"click",function(o){var n=o.pageY-window.pageYOffset-r(e.scrollbarYRail).top,s=n>e.scrollbarYTop?1:-1;l(t,"top",t.scrollTop+s*e.containerHeight),i(t),o.stopPropagation()}),e.event.bind(e.scrollbarX,"click",o),e.event.bind(e.scrollbarXRail,"click",function(o){var n=o.pageX-window.pageXOffset-r(e.scrollbarXRail).left,s=n>e.scrollbarXLeft?1:-1;l(t,"left",t.scrollLeft+s*e.containerWidth),i(t),o.stopPropagation()})}var n=r(0),i=r(2),l=r(3);t.exports=function(t){o(t,n.get(t))}},function(t,e,r){"use strict";function o(t,e){function r(r){var n=o+r*e.railXRatio,l=Math.max(0,e.scrollbarXRail.getBoundingClientRect().left)+e.railXRatio*(e.railXWidth-e.scrollbarXWidth);e.scrollbarXLeft=n<0?0:n>l?l:n;var s=i.toInt(e.scrollbarXLeft*(e.contentWidth-e.containerWidth)/(e.containerWidth-e.railXRatio*e.scrollbarXWidth))-e.negativeScrollAdjustment;c(t,"left",s)}var o=null,n=null,s=function(e){r(e.pageX-n),a(t),e.stopPropagation(),e.preventDefault()},u=function(){i.stopScrolling(t,"x"),e.event.unbind(e.ownerDocument,"mousemove",s)};e.event.bind(e.scrollbarX,"mousedown",function(r){n=r.pageX,o=i.toInt(l.css(e.scrollbarX,"left"))*e.railXRatio,i.startScrolling(t,"x"),e.event.bind(e.ownerDocument,"mousemove",s),e.event.once(e.ownerDocument,"mouseup",u),r.stopPropagation(),r.preventDefault()})}function n(t,e){function r(r){var n=o+r*e.railYRatio,l=Math.max(0,e.scrollbarYRail.getBoundingClientRect().top)+e.railYRatio*(e.railYHeight-e.scrollbarYHeight);e.scrollbarYTop=n<0?0:n>l?l:n;var s=i.toInt(e.scrollbarYTop*(e.contentHeight-e.containerHeight)/(e.containerHeight-e.railYRatio*e.scrollbarYHeight));c(t,"top",s)}var o=null,n=null,s=function(e){r(e.pageY-n),a(t),e.stopPropagation(),e.preventDefault()},u=function(){i.stopScrolling(t,"y"),e.event.unbind(e.ownerDocument,"mousemove",s)};e.event.bind(e.scrollbarY,"mousedown",function(r){n=r.pageY,o=i.toInt(l.css(e.scrollbarY,"top"))*e.railYRatio,i.startScrolling(t,"y"),e.event.bind(e.ownerDocument,"mousemove",s),e.event.once(e.ownerDocument,"mouseup",u),r.stopPropagation(),r.preventDefault()})}var i=r(1),l=r(4),s=r(0),a=r(2),c=r(3);t.exports=function(t){var e=s.get(t);o(t,e),n(t,e)}},function(t,e,r){"use strict";function o(t,e){function r(r,o){var n=t.scrollTop;if(0===r){if(!e.scrollbarYActive)return!1;if(0===n&&o>0||n>=e.contentHeight-e.containerHeight&&o<0)return!e.settings.wheelPropagation}var i=t.scrollLeft;if(0===o){if(!e.scrollbarXActive)return!1;if(0===i&&r<0||i>=e.contentWidth-e.containerWidth&&r>0)return!e.settings.wheelPropagation}return!0}var o=!1;e.event.bind(t,"mouseenter",function(){o=!0}),e.event.bind(t,"mouseleave",function(){o=!1});var l=!1;e.event.bind(e.ownerDocument,"keydown",function(c){if(!(c.isDefaultPrevented&&c.isDefaultPrevented()||c.defaultPrevented)){var u=i.matches(e.scrollbarX,":focus")||i.matches(e.scrollbarY,":focus");if(o||u){var p=document.activeElement?document.activeElement:e.ownerDocument.activeElement;if(p){if("IFRAME"===p.tagName)p=p.contentDocument.activeElement;else for(;p.shadowRoot;)p=p.shadowRoot.activeElement;if(n.isEditable(p))return}var d=0,f=0;switch(c.which){case 37:d=c.metaKey?-e.contentWidth:c.altKey?-e.containerWidth:-30;break;case 38:f=c.metaKey?e.contentHeight:c.altKey?e.containerHeight:30;break;case 39:d=c.metaKey?e.contentWidth:c.altKey?e.containerWidth:30;break;case 40:f=c.metaKey?-e.contentHeight:c.altKey?-e.containerHeight:-30;break;case 33:f=90;break;case 32:f=c.shiftKey?90:-90;break;case 34:f=-90;break;case 35:f=c.ctrlKey?-e.contentHeight:-e.containerHeight;break;case 36:f=c.ctrlKey?t.scrollTop:e.containerHeight;break;default:return}a(t,"top",t.scrollTop-f),a(t,"left",t.scrollLeft+d),s(t),l=r(d,f),l&&c.preventDefault()}}})}var n=r(1),i=r(4),l=r(0),s=r(2),a=r(3);t.exports=function(t){o(t,l.get(t))}},function(t,e,r){"use strict";function o(t,e){function r(r,o){var n=t.scrollTop;if(0===r){if(!e.scrollbarYActive)return!1;if(0===n&&o>0||n>=e.contentHeight-e.containerHeight&&o<0)return!e.settings.wheelPropagation}var i=t.scrollLeft;if(0===o){if(!e.scrollbarXActive)return!1;if(0===i&&r<0||i>=e.contentWidth-e.containerWidth&&r>0)return!e.settings.wheelPropagation}return!0}function o(t){var e=t.deltaX,r=-1*t.deltaY;return void 0!==e&&void 0!==r||(e=-1*t.wheelDeltaX/6,r=t.wheelDeltaY/6),t.deltaMode&&1===t.deltaMode&&(e*=10,r*=10),e!==e&&r!==r&&(e=0,r=t.wheelDelta),t.shiftKey?[-r,-e]:[e,r]}function n(e,r){var o=t.querySelector("textarea:hover, select[multiple]:hover, .ps-child:hover");if(o){var n=window.getComputedStyle(o);if(![n.overflow,n.overflowX,n.overflowY].join("").match(/(scroll|auto)/))return!1;var i=o.scrollHeight-o.clientHeight;if(i>0&&!(0===o.scrollTop&&r>0||o.scrollTop===i&&r<0))return!0;var l=o.scrollLeft-o.clientWidth;if(l>0&&!(0===o.scrollLeft&&e<0||o.scrollLeft===l&&e>0))return!0}return!1}function s(s){var c=o(s),u=c[0],p=c[1];n(u,p)||(a=!1,e.settings.useBothWheelAxes?e.scrollbarYActive&&!e.scrollbarXActive?(p?l(t,"top",t.scrollTop-p*e.settings.wheelSpeed):l(t,"top",t.scrollTop+u*e.settings.wheelSpeed),a=!0):e.scrollbarXActive&&!e.scrollbarYActive&&(u?l(t,"left",t.scrollLeft+u*e.settings.wheelSpeed):l(t,"left",t.scrollLeft-p*e.settings.wheelSpeed),a=!0):(l(t,"top",t.scrollTop-p*e.settings.wheelSpeed),l(t,"left",t.scrollLeft+u*e.settings.wheelSpeed)),i(t),(a=a||r(u,p))&&(s.stopPropagation(),s.preventDefault()))}var a=!1;void 0!==window.onwheel?e.event.bind(t,"wheel",s):void 0!==window.onmousewheel&&e.event.bind(t,"mousewheel",s)}var n=r(0),i=r(2),l=r(3);t.exports=function(t){o(t,n.get(t))}},function(t,e,r){"use strict";function o(t,e){e.event.bind(t,"scroll",function(){i(t)})}var n=r(0),i=r(2);t.exports=function(t){o(t,n.get(t))}},function(t,e,r){"use strict";function o(t,e){function r(){var t=window.getSelection?window.getSelection():document.getSelection?document.getSelection():"";return 0===t.toString().length?null:t.getRangeAt(0).commonAncestorContainer}function o(){c||(c=setInterval(function(){if(!i.get(t))return void clearInterval(c);s(t,"top",t.scrollTop+u.top),s(t,"left",t.scrollLeft+u.left),l(t)},50))}function a(){c&&(clearInterval(c),c=null),n.stopScrolling(t)}var c=null,u={top:0,left:0},p=!1;e.event.bind(e.ownerDocument,"selectionchange",function(){t.contains(r())?p=!0:(p=!1,a())}),e.event.bind(window,"mouseup",function(){p&&(p=!1,a())}),e.event.bind(window,"keyup",function(){p&&(p=!1,a())}),e.event.bind(window,"mousemove",function(e){if(p){var r={x:e.pageX,y:e.pageY},i={left:t.offsetLeft,right:t.offsetLeft+t.offsetWidth,top:t.offsetTop,bottom:t.offsetTop+t.offsetHeight};r.x<i.left+3?(u.left=-5,n.startScrolling(t,"x")):r.x>i.right-3?(u.left=5,n.startScrolling(t,"x")):u.left=0,r.y<i.top+3?(u.top=i.top+3-r.y<5?-5:-20,n.startScrolling(t,"y")):r.y>i.bottom-3?(u.top=r.y-i.bottom+3<5?5:20,n.startScrolling(t,"y")):u.top=0,0===u.top&&0===u.left?a():o()}})}var n=r(1),i=r(0),l=r(2),s=r(3);t.exports=function(t){o(t,i.get(t))}},function(t,e,r){"use strict";function o(t,e,r,o){function n(r,o){var n=t.scrollTop,i=t.scrollLeft,l=Math.abs(r),s=Math.abs(o);if(s>l){if(o<0&&n===e.contentHeight-e.containerHeight||o>0&&0===n)return!e.settings.swipePropagation}else if(l>s&&(r<0&&i===e.contentWidth-e.containerWidth||r>0&&0===i))return!e.settings.swipePropagation;return!0}function a(e,r){s(t,"top",t.scrollTop-r),s(t,"left",t.scrollLeft-e),l(t)}function c(){w=!0}function u(){w=!1}function p(t){return t.targetTouches?t.targetTouches[0]:t}function d(t){return!(!t.targetTouches||1!==t.targetTouches.length)||!(!t.pointerType||"mouse"===t.pointerType||t.pointerType===t.MSPOINTER_TYPE_MOUSE)}function f(t){if(d(t)){x=!0;var e=p(t);b.pageX=e.pageX,b.pageY=e.pageY,g=(new Date).getTime(),null!==y&&clearInterval(y),t.stopPropagation()}}function h(t){if(!x&&e.settings.swipePropagation&&f(t),!w&&x&&d(t)){var r=p(t),o={pageX:r.pageX,pageY:r.pageY},i=o.pageX-b.pageX,l=o.pageY-b.pageY;a(i,l),b=o;var s=(new Date).getTime(),c=s-g;c>0&&(m.x=i/c,m.y=l/c,g=s),n(i,l)&&(t.stopPropagation(),t.preventDefault())}}function v(){!w&&x&&(x=!1,e.settings.swipeEasing&&(clearInterval(y),y=setInterval(function(){return i.get(t)&&(m.x||m.y)?Math.abs(m.x)<.01&&Math.abs(m.y)<.01?void clearInterval(y):(a(30*m.x,30*m.y),m.x*=.8,void(m.y*=.8)):void clearInterval(y)},10)))}var b={},g=0,m={},y=null,w=!1,x=!1;r?(e.event.bind(window,"touchstart",c),e.event.bind(window,"touchend",u),e.event.bind(t,"touchstart",f),e.event.bind(t,"touchmove",h),e.event.bind(t,"touchend",v)):o&&(window.PointerEvent?(e.event.bind(window,"pointerdown",c),e.event.bind(window,"pointerup",u),e.event.bind(t,"pointerdown",f),e.event.bind(t,"pointermove",h),e.event.bind(t,"pointerup",v)):window.MSPointerEvent&&(e.event.bind(window,"MSPointerDown",c),e.event.bind(window,"MSPointerUp",u),e.event.bind(t,"MSPointerDown",f),e.event.bind(t,"MSPointerMove",h),e.event.bind(t,"MSPointerUp",v)))}var n=r(1),i=r(0),l=r(2),s=r(3);t.exports=function(t){if(n.env.supportsTouch||n.env.supportsIePointer){o(t,i.get(t),n.env.supportsTouch,n.env.supportsIePointer)}}},function(t,e,r){"use strict";var o=r(1),n=r(5),i=r(0),l=r(2),s={"click-rail":r(16),"drag-scrollbar":r(17),keyboard:r(18),wheel:r(19),touch:r(22),selection:r(21)},a=r(20);t.exports=function(t,e){e="object"==typeof e?e:{},n.add(t,"ps");var r=i.add(t);r.settings=o.extend(r.settings,e),n.add(t,"ps--theme_"+r.settings.theme),r.settings.handlers.forEach(function(e){s[e](t)}),a(t),l(t)}},function(t,e,r){"use strict";var o=r(1),n=r(4),i=r(0),l=r(2),s=r(3);t.exports=function(t){var e=i.get(t);e&&(e.negativeScrollAdjustment=e.isNegativeScroll?t.scrollWidth-t.clientWidth:0,n.css(e.scrollbarXRail,"display","block"),n.css(e.scrollbarYRail,"display","block"),e.railXMarginWidth=o.toInt(n.css(e.scrollbarXRail,"marginLeft"))+o.toInt(n.css(e.scrollbarXRail,"marginRight")),e.railYMarginHeight=o.toInt(n.css(e.scrollbarYRail,"marginTop"))+o.toInt(n.css(e.scrollbarYRail,"marginBottom")),n.css(e.scrollbarXRail,"display","none"),n.css(e.scrollbarYRail,"display","none"),l(t),s(t,"top",t.scrollTop),s(t,"left",t.scrollLeft),n.css(e.scrollbarXRail,"display",""),n.css(e.scrollbarYRail,"display",""))}},function(t,e){function r(t,e){for(var r=0;r<t.length;r++){var o=t[r],n=u[o.id];if(n){n.refs++;for(var i=0;i<n.parts.length;i++)n.parts[i](o.parts[i]);for(;i<o.parts.length;i++)n.parts.push(s(o.parts[i],e))}else{for(var l=[],i=0;i<o.parts.length;i++)l.push(s(o.parts[i],e));u[o.id]={id:o.id,refs:1,parts:l}}}}function o(t){for(var e=[],r={},o=0;o<t.length;o++){var n=t[o],i=n[0],l=n[1],s=n[2],a=n[3],c={css:l,media:s,sourceMap:a};r[i]?r[i].parts.push(c):e.push(r[i]={id:i,parts:[c]})}return e}function n(t,e){var r=f(),o=b[b.length-1];if("top"===t.insertAt)o?o.nextSibling?r.insertBefore(e,o.nextSibling):r.appendChild(e):r.insertBefore(e,r.firstChild),b.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");r.appendChild(e)}}function i(t){t.parentNode.removeChild(t);var e=b.indexOf(t);e>=0&&b.splice(e,1)}function l(t){var e=document.createElement("style");return e.type="text/css",n(t,e),e}function s(t,e){var r,o,n;if(e.singleton){var s=v++;r=h||(h=l(e)),o=a.bind(null,r,s,!1),n=a.bind(null,r,s,!0)}else r=l(e),o=c.bind(null,r),n=function(){i(r)};return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e)}else n()}}function a(t,e,r,o){var n=r?"":o.css;if(t.styleSheet)t.styleSheet.cssText=g(e,n);else{var i=document.createTextNode(n),l=t.childNodes;l[e]&&t.removeChild(l[e]),l.length?t.insertBefore(i,l[e]):t.appendChild(i)}}function c(t,e){var r=e.css,o=e.media,n=e.sourceMap;if(o&&t.setAttribute("media",o),n&&(r+="\n/*# sourceURL="+n.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var u={},p=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}},d=p(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),f=p(function(){return document.head||document.getElementsByTagName("head")[0]}),h=null,v=0,b=[];t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");e=e||{},void 0===e.singleton&&(e.singleton=d()),void 0===e.insertAt&&(e.insertAt="bottom");var n=o(t);return r(n,e),function(t){for(var i=[],l=0;l<n.length;l++){var s=n[l],a=u[s.id];a.refs--,i.push(a)}if(t){r(o(t),e)}for(var l=0;l<i.length;l++){var a=i[l];if(0===a.refs){for(var c=0;c<a.parts.length;c++)a.parts[c]();delete u[a.id]}}}};var g=function(){var t=[];return function(e,r){return t[e]=r,t.filter(Boolean).join("\n")}}()},function(t,e,r){var o=r(8);"string"==typeof o&&(o=[[t.i,o,""]]);r(25)(o,{});o.locals&&(t.exports=o.locals)},function(t,e){t.exports=function(t,e,r,o){var n,i=t=t||{},l=typeof t.default;"object"!==l&&"function"!==l||(n=t,i=t.default);var s="function"==typeof i?i.options:i;if(e&&(s.render=e.render,s.staticRenderFns=e.staticRenderFns),r&&(s._scopeId=r),o){var a=s.computed||(s.computed={});Object.keys(o).forEach(function(t){var e=o[t];a[t]=function(){return e}})}return{esModule:n,exports:i,options:s}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("section",{ref:"container",staticClass:"ps-container",on:{"ps-scroll-y":t.scrollHanle,"ps-scroll-x":t.scrollHanle,"ps-scroll-up":t.scrollHanle,"ps-scroll-down":t.scrollHanle,"ps-scroll-left":t.scrollHanle,"ps-scroll-right":t.scrollHanle,"ps-y-reach-start":t.scrollHanle,"ps-y-reach-end":t.scrollHanle,"ps-x-reach-start":t.scrollHanle,"ps-x-reach-end":t.scrollHanle}},[t._t("default")],2)},staticRenderFns:[]}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=r(10),n=r.n(o);e.default={name:"vue-perfect-scrollbar",props:{settings:{default:void 0}},methods:{scrollHanle:function(t){this.$emit(t.type,t)},update:function(){var t=this.$refs.container;n.a.update(t)}},mounted:function(){var t=this.$refs.container;this.width=t.offsetWidth,this.height=t.offsetHeight,n.a.initialize(t,this.settings)},beforeDestroy:function(){n.a.destroy(this.$refs.container)},updated:function(){var t=this.$refs.container,e=t.offsetWidth,r=t.offsetHeight;e==this.width&&r==this.width||n.a.update(t)}}}]);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _main = __webpack_require__(49);

var _main2 = _interopRequireDefault(_main);

var _main3 = __webpack_require__(14);

var _main4 = _interopRequireDefault(_main3);

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
  name: 'Pagebar',
  components: {
    lvDropmenu: _main2.default,
    lvInput: _main4.default
  },
  data: function data() {
    return {
      val: '',
      cpageSize: 0
    };
  },
  props: {
    // 是否简版
    'simple': {
      type: Boolean,
      default: false
    },
    'lenth': {
      default: 5
    },
    // 当前页
    'pageNum': {
      default: 1
    },
    // 每页显示记录数
    'pageSize': {
      default: 20
    },
    // 总记录数
    'totalSize': {
      default: 1
    },
    'sizes': {
      type: Array,
      default: function _default() {
        return [{ id: 10, name: '10条/页' }, { id: 20, name: '20条/页' }, { id: 40, name: '40条/页' }, { id: 80, name: '80条/页' }, { id: 100, name: '100条/页' }];
      }
    }
  },
  watch: {
    'cpageSize': function cpageSize(val) {
      this.val = '';
      this.clkItem(1);
    }
  },
  computed: {
    // 计算总页数
    totalPage: function totalPage() {
      return parseInt((this.totalSize - 1) / this.cpageSize + 1);
    },
    arr: function arr() {
      var first = parseInt((this.pageNum - 1) / this.lenth) * this.lenth;
      var array = [];

      for (var i = 0; i < this.lenth; i++) {
        array[array.length] = ++first;
      }
      return array;
    }
  },
  created: function created() {
    this.cpageSize = this.pageSize;
  },
  methods: {
    clkItem: function clkItem(item) {
      this.$emit('update:pageNum', item);
      this.$emit('update:pageSize', this.cpageSize);
      this.$emit('pagination', item);
    },
    enterIpt: function enterIpt() {
      this.val = this.parseIptValue(this.val);
      this.clkItem(this.val);
    },
    parseIptValue: function parseIptValue(val) {
      val = parseInt(val) || 1;
      if (val < 1) {
        val = 1;
      } else if (val > this.totalPage) {
        val = this.totalPage;
      }
      return val;
    }
  }
};

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_66cbdabe_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_main_vue__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(2);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(63)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-66cbdabe"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_66cbdabe_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_main_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_66cbdabe_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_main_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "packages\\dropMenu\\src\\main.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-66cbdabe", Component.options)
  } else {
    hotAPI.reload("data-v-66cbdabe", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(64);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(1).default
var update = add("2ced9ff5", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-66cbdabe\",\"scoped\":true,\"sourceMap\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./main.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-66cbdabe\",\"scoped\":true,\"sourceMap\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./main.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, "\n.dropmenu[data-v-66cbdabe] {\n  position: relative;\n}\n.dropmenu .lv-icon-arrow[data-v-66cbdabe] {\n    transform: rotate(-90deg);\n    transition: all .1s;\n}\n.dropmenu .lv-icon-arrow.open[data-v-66cbdabe] {\n    transform: rotate(90deg);\n}\n.dropmenu .wrap-ul[data-v-66cbdabe] {\n    position: absolute;\n    left: 0;\n    width: 100%;\n    max-height: 200px;\n    border: solid 1px #e4e7ed;\n    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);\n    background-color: #fff;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    z-index: 3;\n}\n.dropmenu .wrap-ul li[data-v-66cbdabe] {\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-negative: 0;\n          flex-shrink: 0;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n      padding: 6px 10px;\n      line-height: unset;\n}\n.dropmenu .wrap-ul li[data-v-66cbdabe]:first-of-type {\n      margin-top: 6px;\n}\n.dropmenu .wrap-ul li[data-v-66cbdabe]:last-of-type {\n      margin-bottom: 6px;\n}\n.dropmenu .wrap-ul li > p[data-v-66cbdabe] {\n      -ms-flex: 1;\n          flex: 1;\n      overflow: hidden;\n      white-space: nowrap;\n      text-overflow: ellipsis;\n}\n.dropmenu .wrap-ul li > i[data-v-66cbdabe] {\n      display: none;\n      width: 18px;\n      height: 18px;\n      font-size: 18px;\n}\n.dropmenu .wrap-ul li.active > i[data-v-66cbdabe] {\n      display: inline-block;\n}\n.dropmenu .wrap-ul li[data-v-66cbdabe]:not(.nothing):not([disabled]):hover {\n      cursor: pointer;\n      background-color: #f5f7fa;\n}\n.dropmenu .wrap-ul li.nothing[data-v-66cbdabe] {\n      color: #999;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n", ""]);

// exports


/***/ }),

/***/ 65:
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
      staticClass: "dropmenu",
      on: {
        click: function($event) {
          $event.stopPropagation()
        }
      }
    },
    [
      _c(
        "lv-input",
        {
          attrs: {
            placeholder:
              _vm.searchabled && _vm.resultText
                ? _vm.resultText
                : _vm.placeholder,
            disabled: _vm.disabled,
            readonly: !_vm.searchabled
          },
          on: { focus: _vm.iptFocus, change: _vm.iptChange },
          model: {
            value: _vm.resultText,
            callback: function($$v) {
              _vm.resultText = $$v
            },
            expression: "resultText"
          }
        },
        [
          _c("i", {
            staticClass: "icon lv-icon-arrow",
            class: { open: _vm.show },
            attrs: { slot: "right", disabled: _vm.disabled },
            on: { click: _vm.toggleMenu },
            slot: "right"
          })
        ]
      ),
      _vm.show
        ? _c(
            "vperfect-scrollbar",
            {
              ref: "wrapUl",
              staticClass: "wrap-ul",
              style:
                _vm.position === "bottom"
                  ? "top:calc(100% + 5px)"
                  : "bottom:calc(100% + 5px)",
              attrs: { settings: { wheelSpeed: 0.5 } }
            },
            [
              _c(
                "ul",
                { staticClass: "ul" },
                [
                  !_vm.clist || _vm.clist.length === 0
                    ? _c("li", { staticClass: "nothing" }, [_vm._v("暂无记录")])
                    : _vm._e(),
                  _vm._l(_vm.clist, function(item, index) {
                    return _c(
                      "li",
                      {
                        key: index,
                        class: {
                          "active theme-c":
                            typeof _vm.value === "object"
                              ? _vm.value.indexOf(item[_vm.keyvalue.value]) !==
                                -1
                              : _vm.value === item[_vm.keyvalue.value]
                        },
                        attrs: {
                          disabled:
                            _vm.unselect.indexOf(item[_vm.keyvalue.value]) > -1
                        },
                        on: {
                          click: function($event) {
                            return _vm.clkItem(item)
                          }
                        }
                      },
                      [
                        _c("p", [_vm._v(_vm._s(item[_vm.keyvalue.label]))]),
                        _c("i", { staticClass: "lv-icon-tick" })
                      ]
                    )
                  })
                ],
                2
              )
            ]
          )
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-66cbdabe", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3010dbda_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_main_vue__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(2);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(91)
  __webpack_require__(93)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-3010dbda"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3010dbda_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_main_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3010dbda_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_main_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "packages\\pagebar\\src\\main.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3010dbda", Component.options)
  } else {
    hotAPI.reload("data-v-3010dbda", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 91:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(92);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(1).default
var update = add("702176b0", content, false, {});
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

/***/ 92:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, "\n.pagebar-wrapper input {\n  padding: 0;\n  text-align: center;\n}\n", ""]);

// exports


/***/ }),

/***/ 93:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(94);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(1).default
var update = add("414a6016", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-3010dbda\",\"scoped\":true,\"sourceMap\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./main.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-3010dbda\",\"scoped\":true,\"sourceMap\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./main.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 94:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, "\n.pagebar-wrapper[data-v-3010dbda] {\n  position: relative;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-pack: justify;\n      justify-content: space-between;\n  font-size: 12px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.pagebar-wrapper .dropmenu[data-v-3010dbda] {\n    width: 100px;\n}\n.pagebar-wrapper .input[data-v-3010dbda] {\n    margin-left: 5px;\n    margin-right: 5px;\n    width: 40px;\n}\n.pagebar-wrapper .p-r[data-v-3010dbda] {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-negative: 0;\n        flex-shrink: 0;\n    -ms-flex-align: center;\n        align-items: center;\n}\n.pagebar-wrapper .p-r > span[data-v-3010dbda] {\n      width: 24px;\n      height: 24px;\n      line-height: 24px;\n      text-align: center;\n      border-radius: 4px;\n      cursor: pointer;\n}\n.pagebar-wrapper .p-r > .total[data-v-3010dbda] {\n      margin-left: 10px;\n}\n", ""]);

// exports


/***/ }),

/***/ 95:
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
    { staticClass: "pagebar-wrapper" },
    [
      !_vm.simple
        ? _c("lv-dropmenu", {
            attrs: { value: _vm.cpageSize, list: _vm.sizes, position: "top" },
            on: {
              "update:value": function($event) {
                _vm.cpageSize = $event
              }
            }
          })
        : _vm._e(),
      _c(
        "div",
        { staticClass: "p-r" },
        [
          _c(
            "span",
            {
              attrs: { disabled: _vm.pageNum <= 1 },
              on: {
                click: function($event) {
                  _vm.pageNum > 1 && _vm.clkItem(_vm.pageNum - 1)
                }
              }
            },
            [_c("i", { staticClass: "lv-icon-arrow-left" })]
          ),
          _vm._l(_vm.arr, function(item) {
            return [
              item <= _vm.totalPage
                ? _c(
                    "span",
                    {
                      key: item,
                      class: {
                        active: _vm.pageNum === item,
                        "theme-c": _vm.simple && _vm.pageNum === item,
                        "theme-b": !_vm.simple && _vm.pageNum === item
                      },
                      on: {
                        click: function($event) {
                          return _vm.clkItem(item)
                        }
                      }
                    },
                    [_vm._v(_vm._s(item))]
                  )
                : _vm._e()
            ]
          }),
          _c(
            "span",
            {
              attrs: { disabled: _vm.pageNum >= _vm.totalPage },
              on: {
                click: function($event) {
                  _vm.pageNum < _vm.totalPage && _vm.clkItem(_vm.pageNum + 1)
                }
              }
            },
            [_c("i", { staticClass: "lv-icon-arrow-right" })]
          ),
          !_vm.simple
            ? _c("label", { staticClass: "total" }, [
                _vm._v("共" + _vm._s(_vm.totalSize) + "条，")
              ])
            : _vm._e(),
          !_vm.simple
            ? _c(
                "label",
                { staticClass: "goto" },
                [
                  _vm._v("\n      前往"),
                  _c("lv-input", {
                    attrs: { clear: false },
                    on: { enter: _vm.enterIpt },
                    model: {
                      value: _vm.val,
                      callback: function($$v) {
                        _vm.val = $$v
                      },
                      expression: "val"
                    }
                  }),
                  _vm._v("页\n    ")
                ],
                1
              )
            : _vm._e()
        ],
        2
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3010dbda", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ })

/******/ });
});
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
/******/ 	return __webpack_require__(__webpack_require__.s = 435);
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

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(157);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(1).default
var update = add("218c8152", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-00222788\",\"scoped\":true,\"sourceMap\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./main.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-00222788\",\"scoped\":true,\"sourceMap\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./main.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(16);
exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, "\n@charset \"UTF-8\";\n/*引入数字字体图标*/\n@font-face {font-family: \"niconfont\";\n  src: url(" + escape(__webpack_require__(55)) + "); /* IE9 */\n  src: url(" + escape(__webpack_require__(55)) + "#iefix) format('embedded-opentype'), \n  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAWMAAsAAAAACzAAAAU+AAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDbgqIGIduATYCJAMsCxgABCAFhG0HgR8bJQoRFaT5kf1MMPGuUQ7BiXrLov5c5DzcR1uQqM/Ew9fY78/d3afaIKl2n67T8UQKNAidFCidLN9C/8+erytf/V73rIQAHizs7kjjWKfkKBzhQQQczenbfmWFOVUVYlu2uE0G7gN8uQycXPwcrbX6tv8euk679r2oO5bIJCKZ0EQsijdoZAghYmKbvQATTVvUQmf2YtcTaJoXB2cTp0vJRsG7BeK5pqqEbCoWZaA+1IVqx7GF4o0s1dNydoHIa/L38Y9SwoYklUy873nlhHIa/SzuWTon/hflRziSns+FxUlkbCCFeOr03BCXZTZwmjuPhYPhzYvgx/8/40eLJHe7ESHJisoyU1PXcPnnVYk1baCXbJMfzWIEPzpG4sfAyPyYGIUfy6QCrQ2TKrQOTGrQujCpQ+vBpAGtjw5N0IqOmSJ9FOtEaZFYd514ktC6ZINZanvNPjH21kF+EhuffL9gSZ/BIDUaZWazwmTqNip5KiofazA08NZ2F6ZLSXEski/iOzbeYZCWk2M4oMpslssiBkMVH6ikJb3dGTJymM0YsEv5MyWldg089LF2lmmGG1KyvzPfVvAWkhJp6wrDaLs8e0iy/dFzkRrEU82m2yfR8pW1RtkZo+I+B0v4PjhQz+21ZVNEAxqKR4SLcp3EB7v87FJUacBKeItul1+YR/sFcaNXsx2v6Yq4/P92NbQwCtJlcaXRbPO4RIDmHp0lIS0TUNyD6kYFiAELfvTPDD3cFq4Efd0CuWKxsxz0yWIH8nynC1V1Q2d6p/pbcaFptY1zVmAMqjQLm1krNItJubB4PqlqqBjFyu5mNEDVxMkCudJtg30XeISty1g9CrraKq2ZwqmkYS6KlN0tqIeyy6oowGruYHVh8NUGajGPFGJNLRWTclTAK62/tkc9uPd2WuUm/0v7AwpWGeLa10F6gL4vYHu3Q8Tgjp0CpgmjqxCnPeR/Lv1ucMQYYfLMZmh0rJV+ml7TwcqwqlYyL0BSvLmH+MNBtm0XE1nf9m0DqKIN7Z6FjHu11nIl8iCUOcwJcCxSttRAy/b9wi26/lkvtqSO92ljuo3oYpXrlA2smalVrIm1qfU0YVSob2hJYIa/O6P/y7HNPHgjyVq6853YTOeiakxCqaa3G11Q96CMphZWznZiBU7N3SRD47blS737sFoVFyNf1dILCCMT8l/bfn3956ppfhlmk3SwoQH0/QYaSEqzF5TRBz3b8xs36dpXXUtz2gQS2NY9WICerVsEVGNjl0cuQacvsbigfbEEJeitsJ8V4FCwsq1lbhtbrUYtOpRrW9iTXGozOlj5WhUJD4iYnc4p3OiEmVaysi8KRqNR+FIJkoVxXccDwfv0iswix+Ff6/x8s+qzi1rohWenC8mr1CUW0n+EVLig7OUsOcec2C0EWvZwu1RCU8eZEQeG7p1fNxGnCPWKdAFJzRxkdQv4gjagouUAquoOoWndpJNbRlqJE8WWWLNYQeg7CEnXB2R9F/EF3YWKqbdQ1Q8OJNI7dufc2keNPBCmjAVkf1Dn46CMnWVaf8dy7VIqyxP2G2mp42AbVj1/wQHpHAcs36XDrEDR2MNZ3Qy7boSJxgZzNirmKTFN1fVMRj72QjogKMVQAWT+gFpuNFDRykw2fv8OlVadFA2M3Qm+IbKo1w9sBkuAv2gG0dh7aV18KzmYUgpQi9pRD5zJhTqdGYGpe6sGyjFD5ZCaJExaSkk1xvV1/e8tnwcn8Du0goGDBSxhBWvYwBZ24CGhzeaw9hmSbmUUm+JQXIpH8SkBJaRE7lgIAA==') format('woff2'),\n  url(" + escape(__webpack_require__(158)) + ") format('woff'),\n  url(" + escape(__webpack_require__(159)) + ") format('truetype'), \n  url(" + escape(__webpack_require__(160)) + "#iconfont) format('svg'); /* iOS 4.1- */\n}\n[class*=lv-nicon][data-v-00222788] {\n  font-family: \"niconfont\" !important;\n  font-size: 16px;\n  font-style: normal;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.lv-nicon-0[data-v-00222788]:before {\n  content: \"\\E62C\";\n}\n.lv-nicon-1[data-v-00222788]:before {\n  content: \"\\E62D\";\n}\n.lv-nicon-2[data-v-00222788]:before {\n  content: \"\\E62E\";\n}\n.lv-nicon-3[data-v-00222788]:before {\n  content: \"\\E62F\";\n}\n.lv-nicon-4[data-v-00222788]:before {\n  content: \"\\E630\";\n}\n.lv-nicon-5[data-v-00222788]:before {\n  content: \"\\E631\";\n}\n.lv-nicon-6[data-v-00222788]:before {\n  content: \"\\E632\";\n}\n.lv-nicon-7[data-v-00222788]:before {\n  content: \"\\E633\";\n}\n.lv-nicon-8[data-v-00222788]:before {\n  content: \"\\E634\";\n}\n.lv-nicon-9[data-v-00222788]:before {\n  content: \"\\E635\";\n}\n.numberkey[data-v-00222788] {\n  position: relative;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  width: 100%;\n  line-height: normal;\n  line-height: initial;\n  font-size: 24px;\n  background-size: cover;\n}\n.numberkey > i[data-v-00222788] {\n    position: relative;\n    padding: 33% 0 0;\n    width: 33.33%;\n    text-align: center;\n    font-size: inherit;\n    font-weight: 700;\n}\n.numberkey > i[data-v-00222788]:before {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    font-size: inherit;\n    text-align: center;\n}\n.numberkey > i[data-v-00222788]:not(.none) {\n    cursor: pointer;\n}\n.numberkey > i[data-v-00222788]:not(.none):active {\n    background-color: rgba(244, 244, 244, 0.6);\n}\n.numberkey > .clear[data-v-00222788]:before {\n    content: '\\6E05\\7A7A';\n    font-size: 16px;\n    font-style: normal;\n}\n", ""]);

// exports


/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/2e30407f075b28b28feecfac79c72dfd.woff";

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/4ec148ff2058ce32b8fa073efd90caa9.ttf";

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

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/2390b6068bd4de448191ae8ae7d57ae8.svg";

/***/ }),

/***/ 161:
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
      staticClass: "numberkey",
      style: {
        width: _vm.width ? _vm.width + "px" : "",
        "font-size": _vm.fontSize,
        color: _vm.color,
        backgroundImage: "url(" + _vm.img + ")"
      },
      attrs: { id: _vm.id }
    },
    [
      _c("i", {
        staticClass: "lv-nicon-1",
        on: {
          click: function($event) {
            return _vm.clkNum(1)
          }
        }
      }),
      _c("i", {
        staticClass: "lv-nicon-2",
        on: {
          click: function($event) {
            return _vm.clkNum(2)
          }
        }
      }),
      _c("i", {
        staticClass: "lv-nicon-3",
        on: {
          click: function($event) {
            return _vm.clkNum(3)
          }
        }
      }),
      _c("i", {
        staticClass: "lv-nicon-4",
        on: {
          click: function($event) {
            return _vm.clkNum(4)
          }
        }
      }),
      _c("i", {
        staticClass: "lv-nicon-5",
        on: {
          click: function($event) {
            return _vm.clkNum(5)
          }
        }
      }),
      _c("i", {
        staticClass: "lv-nicon-6",
        on: {
          click: function($event) {
            return _vm.clkNum(6)
          }
        }
      }),
      _c("i", {
        staticClass: "lv-nicon-7",
        on: {
          click: function($event) {
            return _vm.clkNum(7)
          }
        }
      }),
      _c("i", {
        staticClass: "lv-nicon-8",
        on: {
          click: function($event) {
            return _vm.clkNum(8)
          }
        }
      }),
      _c("i", {
        staticClass: "lv-nicon-9",
        on: {
          click: function($event) {
            return _vm.clkNum(9)
          }
        }
      }),
      _c("i", { staticClass: "clear", on: { click: _vm.clkClear } }),
      _c("i", {
        staticClass: "lv-nicon-0",
        on: {
          click: function($event) {
            return _vm.clkNum(0)
          }
        }
      }),
      _c("i", {
        staticClass: "lv-icon-x",
        on: {
          mousedown: function($event) {
            $event.stopPropagation()
            return _vm.mdown($event)
          },
          mouseup: function($event) {
            $event.stopPropagation()
            return _vm.mup($event)
          },
          click: _vm.clkDel
        }
      })
    ]
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-00222788", { render: render, staticRenderFns: staticRenderFns })
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

/***/ 435:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _main = __webpack_require__(78);

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
_main2.default.install = function (Vue) {
  Vue.component(_main2.default.name, _main2.default);
};

exports.default = _main2.default;

/***/ }),

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/e813ea6b2d61b278b0e159ff853f3f3b.eot";

/***/ }),

/***/ 56:
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

exports.default = {
  name: 'Numberkey',
  data: function data() {
    return {
      id: 'numberkey_' + new Date().getTime() + parseInt(Math.random() * 100),
      timer: ''
    };
  },
  props: {
    // 宽度
    width: {
      default: ''
    },
    value: {
      default: ''
    },
    // 颜色
    color: {
      default: ''
    },
    // 背景图片
    img: {
      default: ''
    }
  },
  computed: {
    fontSize: function fontSize() {
      var fs = this.width / 9;

      return fs ? fs + 'px' : '';
    }
  },
  mounted: function mounted() {
    // 
  },
  methods: {
    clkNum: function clkNum(val) {
      this.$emit('input', this.value + '' + val);
    },
    clkDel: function clkDel() {
      var val = this.value;

      if (val.length > 0) {
        val = this.value.substr(0, this.value.length - 1);
      }
      this.$emit('input', val);
    },
    clkClear: function clkClear() {
      this.$emit('input', '');
    },
    mdown: function mdown() {
      var _this = this;

      this.timer = setInterval(function () {
        _this.clkDel();
      }, 200);
    },
    mup: function mup() {
      this.timer && clearInterval(this.timer);
    }
  }
};

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_00222788_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_main_vue__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(2);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(156)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-00222788"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_00222788_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_main_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_00222788_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_main_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "packages\\numberkey\\src\\main.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-00222788", Component.options)
  } else {
    hotAPI.reload("data-v-00222788", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

/******/ });
});
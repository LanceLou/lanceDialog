/*! This file is created by lancelou */
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.SelectDialog = exports.Dialog = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _utils = __webpack_require__(1);

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	__webpack_require__(2); // 载入 style.css


	var _dialogEle = Symbol('dialogEle');
	var _dialogEleGenerator = Symbol('dialogEleGenerator');
	var _dialogFeedbackCallbacks = Symbol('dialogFeedbackCallbacks');
	var _triggerCallback = Symbol('triggerCallback');
	var _initEventLis = Symbol('initEventLis');

	var Dialog = function () {
		function Dialog() {
			var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window.location.hostname;
			var content = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";

			_classCallCheck(this, Dialog);

			this.name = name;
			this.content = content;
			this[_dialogEle] = null;
			this[_dialogFeedbackCallbacks] = [];
		}

		/**
	  * @inner
	  * generate the dialog element by name,content,selects
	  *
	  * @return {HTMLDivElement} [the Element of the dialog]
	  */


		_createClass(Dialog, [{
			key: _dialogEleGenerator,
			value: function value() {
				var eleStr = '<div class="dialog-mask"></div>\n\t\t<div class="dialog-win">\n\t\t\t<div class="d-header"><h1>' + this.name + '</h1></div>\n\t\t\t<div class="d-content">' + this.content + '</div>\n\t\t\t<div class="d-btnWrapper">\n\t\t\t\t<a href="javascript: void(0)" data-target="yes">yes</a>\n\t\t\t\t<a href="javascript: void(0)" data-target="no">no</a>\n\t\t\t</div>\n\t\t</div>',
				    dialogEle = document.createElement("div");
				dialogEle.className = "lance-dialog-wrapper close";
				dialogEle.innerHTML = eleStr;
				return dialogEle;
			}

			/**
	   * @inner
	   * 
	   * trigger all user select callback when user select a option(publish)
	   */

		}, {
			key: _triggerCallback,
			value: function value(targetData) {
				this[_dialogFeedbackCallbacks].forEach(function (item) {
					return item.callback.call(item.thisArg, targetData === "yes" ? true : false);
				});
			}

			/**
	   * @inner
	   * init dialog element all event lis
	   */

		}, {
			key: _initEventLis,
			value: function value() {
				var self = this;
				this[_dialogEle].addEventListener("click", function (event) {
					var target = event.target;
					if (_utils.ElementClassNameHandlerUtils.include(target, "dialog-mask")) {
						self.close();
						return;
					}
					if (target.tagName === "A") {
						self[_triggerCallback](target.getAttribute("data-target"));
					}
				});
			}

			/**
	   * public
	   * popup the dialog
	   * 
	   */

		}, {
			key: 'popup',
			value: function popup() {
				if (!this[_dialogEle]) {
					this[_dialogEle] = this[_dialogEleGenerator]();
					this[_initEventLis]();
					document.body.appendChild(this[_dialogEle]);
				}
				var self = this;
				document.body.style.overflow = "hidden";
				setTimeout(function () {
					_utils.ElementClassNameHandlerUtils.removeElementClassName(self[_dialogEle], "close");
				}, 0);
			}

			/**
	   * public
	   * unpopup the dialog
	   */

		}, {
			key: 'close',
			value: function close() {
				document.body.style.overflow = "scroll";
				_utils.ElementClassNameHandlerUtils.addElementClassName(this[_dialogEle], "close");
			}

			/**
	   * public
	   * add users click feedback callback
	   *
	   * @param {Object} thisArg the this context when call the func
	   * @param {Function} callback the function will be call when user select a option, the function's argument is true(yes) false(false) in Dialog class, is from this.selects in SelectDialog class.
	   */

		}, {
			key: 'addCallback',
			value: function addCallback() {
				var thisArg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
				var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

				this[_dialogFeedbackCallbacks].push({ thisArg: thisArg, callback: callback });
			}
		}]);

		return Dialog;
	}();

	var SelectDialog = function (_Dialog) {
		_inherits(SelectDialog, _Dialog);

		function SelectDialog() {
			var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window.location.hostname;
			var content = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
			var selects = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

			_classCallCheck(this, SelectDialog);

			var _this = _possibleConstructorReturn(this, (SelectDialog.__proto__ || Object.getPrototypeOf(SelectDialog)).call(this, name, content));

			_this.selects = [].concat(_toConsumableArray(selects));
			return _this;
		}

		/**
	  * @override
	  * 
	  * @inner
	  * generate the dialog element by name,content,selects
	  *
	  * @return {HTMLDivElement} [the Element of the dialog]
	  */


		_createClass(SelectDialog, [{
			key: _dialogEleGenerator,
			value: function value() {
				var eleStr = '<div class="dialog-mask"></div>\n\t\t<div class="dialog-win">\n\t\t\t<div class="d-header"><h1>' + this.name + '</h1></div>\n\t\t\t<div class="d-content">' + this.content + '</div>\n\t\t\t<div class="d-btnWrapper">\n\t\t\t\t' + this.selects.map(function (selectName) {
					return '\n\t\t\t\t\t<a href="javascript: void(0)" data-target="' + selectName + '">' + selectName + '</a>\n\t\t\t\t\t';
				}).join('') + '\n\t\t\t</div>\n\t\t</div>',
				    dialogEle = document.createElement("div");
				dialogEle.className = "lance-dialog-wrapper close";
				dialogEle.innerHTML = eleStr;
				return dialogEle;
			}

			/**
	   * @override
	   * 
	   * @inner
	   * 
	   * trigger all user select callback when user select a option(publish)
	   */

		}, {
			key: _triggerCallback,
			value: function value(targetData) {
				this[_dialogFeedbackCallbacks].forEach(function (item) {
					return item.callback.call(item.thisArg, targetData);
				});
			}
		}]);

		return SelectDialog;
	}(Dialog);

	exports.Dialog = Dialog;
	exports.SelectDialog = SelectDialog;

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	function isHtmlDomElement(target) {
		//is Element check
		return target instanceof Element;
	}
	var ElementClassNameHandlerUtils = {
		addElementClassName: function addElementClassName(element) {
			var className = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";

			if (!isHtmlDomElement(element)) throw new TypeError("expect a Element");
			var oldClassName = element.className;
			if (oldClassName.indexOf(className) < 0) {
				className = oldClassName.length > 0 ? " " + className : className;
				element.className = oldClassName + "" + className;
			}
		},
		removeElementClassName: function removeElementClassName(element) {
			var className = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";

			if (!isHtmlDomElement(element)) throw new TypeError("expect a Element");
			var oldClassName = element.className;
			element.className = oldClassName.replace(className, "");
		},
		include: function include(element) {
			var className = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";

			if (!isHtmlDomElement(element)) throw new TypeError("expect a Element");
			return element.className.indexOf(className) >= 0;
		}
	};

	var HtmlStrHandlerUtils = {
		saferHTML: function saferHTML(literals) {
			var s = literals[0];

			for (var _len = arguments.length, values = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
				values[_key - 1] = arguments[_key];
			}

			for (var i = 0; i < values.length; i++) {
				var arg = String(values[i]);
				// Escape special characters in the substitution.
				s += arg.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
				// Don't escape special characters in the template.
				s += literals[i + 1];
			}
			return s;
		}
	};

	exports.ElementClassNameHandlerUtils = ElementClassNameHandlerUtils;
	exports.HtmlStrHandlerUtils = HtmlStrHandlerUtils;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./lanceDialog.css", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./lanceDialog.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "div.lance-dialog-wrapper{\n\tposition: absolute;\n\tmargin: 0;\n\tpadding: 0;\n}\ndiv.lance-dialog-wrapper *{\n\tmargin: 0;\n\tpadding: 0;\n}\ndiv.lance-dialog-wrapper div.dialog-mask{\n\tposition: fixed;\n\ttop: 0;\n\tleft: 0;\n\twidth: 100%;\n\theight: 100%;\n\tbackground: #555;\n\topacity: 0.7;\n\tfilter: opacity(70%);\n}\ndiv.lance-dialog-wrapper div.dialog-win{\n\tposition: fixed;\n\ttop: 30%;\n\tleft: 50%;\n\tvisibility: visible;\n\topacity: 1;\n\tfilter: opacity(100%);\n\twidth: 36%;\n\ttransform: translate(-50%, -50%);\n\tbackground-color: #fff;\n\tpadding: 20px 15px;\n    border-radius: 5px;\t\n    box-shadow: 0px 2px 5px #111;\n    transition: all linear 0.5s;\n}\ndiv.lance-dialog-wrapper div.dialog-win > div{\n\tmargin: 2px 0;\n\tpadding: 25px 0;\n\ttext-align: center;\n\tbackground-color: #111;\n\tcolor: #fff;\n}\ndiv.lance-dialog-wrapper div.dialog-win div.d-btnWrapper{\n\tbackground-color: transparent;\n\tpadding: 12px;\n\ttext-align: right;\n}\ndiv.lance-dialog-wrapper div.dialog-win div.d-btnWrapper a{\n    text-decoration: none;\n    color: #000;\n    border: 1px solid #555;\n    border-radius: 2px;\n    display: inline-block;\n    width: 25px;\n    line-height: 30px;\n    text-align: center;\n    margin: 0 3px;\n    padding: 0 0.3rem;\n}\ndiv.lance-dialog-wrapper div.dialog-win div.d-btnWrapper a:hover{\n\tbackground-color: #eee;\n}\ndiv.close div.dialog-mask{\n\tdisplay: none;\n}\ndiv.close div.dialog-win{\n\ttop: 10%;\n\tvisibility: hidden;\n\topacity: 0;\n\tfilter: opacity(0);\n}\n@media only screen and (max-width: 768px) {\n\tdiv.lance-dialog-wrapper div.dialog-win{\n\t\twidth: 80%;\n\t}\n}", ""]);

	// exports


/***/ },
/* 4 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
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


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }
/******/ ]);
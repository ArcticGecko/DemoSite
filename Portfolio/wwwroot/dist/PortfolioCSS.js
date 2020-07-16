/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./tsOutput/StyleOutput.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./scss/Layout.scss":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader!./node_modules/sass-loader/dist/cjs.js!./scss/Layout.scss ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"/* Header */\\n.fixed-header-outer {\\n  background: linear-gradient(90deg, #00F260, #0575E6);\\n  height: 84px; }\\n\\n.fixed-header-inner {\\n  width: 100%;\\n  justify-content: center;\\n  border-bottom: 4px solid #666;\\n  height: 80px;\\n  transition: border 100ms linear; }\\n\\n.fixed-header-inner:hover {\\n  border-bottom: 4px solid rgba(0, 0, 0, 0); }\\n\\n.fixed-header-inner > .flex-filler {\\n  background: #ffffff; }\\n\\n.fixed-header-inner > .content-width {\\n  background: #ffffff;\\n  width: 100%;\\n  padding: 0 100px; }\\n\\n.fixed-header-inner:hover > .content-width > .fixed-header-divider {\\n  background: rgba(0, 0, 0, 0);\\n  border: 2px solid rgba(0, 0, 0, 0); }\\n\\n.fixed-header-divider {\\n  border: 2px solid #666; }\\n\\n.header-title {\\n  font-family: Simplifica, sans-serif;\\n  display: flex;\\n  justify-content: flex-end;\\n  flex-direction: column;\\n  font-size: 3.5em;\\n  font-weight: 600;\\n  flex-grow: 1; }\\n\\n.header-button-container {\\n  padding: 0 10px;\\n  height: 80px;\\n  justify-content: flex-end;\\n  text-align: center;\\n  cursor: pointer; }\\n\\ndiv.header-button-container:hover {\\n  background: #ffffff; }\\n\\n.header-button-text {\\n  font-size: 1.2em;\\n  font-weight: 600; }\\n\\n/* Footer */\\n.footer {\\n  background: linear-gradient(90deg, #00F260, #0575E6);\\n  height: 250px;\\n  color: #ffffff; }\\n\\n.footer-inner {\\n  width: 100%;\\n  justify-content: center;\\n  border-top: 4px solid #666;\\n  height: 246px; }\\n\\n.footer-inner:hover {\\n  border-top: 4px solid rgba(0, 0, 0, 0); }\\n\\n.footer-inner > div {\\n  background: #666; }\\n\\n.footer-content {\\n  justify-content: center; }\\n\\n.footer-button-container {\\n  width: 100%;\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: center; }\\n\\n.footer-button {\\n  width: 50px;\\n  height: 50px;\\n  margin: 10px;\\n  cursor: pointer; }\\n\\n.footer-button:hover {\\n  padding: 4px;\\n  margin: 6px; }\\n\\n.footer-button > svg {\\n  fill: #ffffff; }\\n\\n.footer-title {\\n  text-align: center; }\\n\\n/* Body */\\nbody > div {\\n  min-height: calc(100vh - 334px);\\n  display: flex;\\n  flex-direction: column; }\\n\\n/* Print */\\n@media print {\\n  .fixed-header-outer {\\n    display: none; }\\n  .footer {\\n    display: none; } }\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./scss/Layout.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./scss/Pages.scss":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader!./node_modules/sass-loader/dist/cjs.js!./scss/Pages.scss ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"/* Index Page */\\n.index-top-display {\\n  background: linear-gradient(0deg, #666 0%, #666 35%, #ffffff 35%);\\n  padding-bottom: 50px; }\\n\\n.index-title-container {\\n  height: 270px;\\n  display: flex;\\n  flex-direction: column; }\\n\\n.display-box-container {\\n  margin: 0 10px; }\\n\\n.display-box {\\n  display: flex;\\n  flex-flow: row;\\n  justify-content: space-around;\\n  background: #ffffff;\\n  padding: 0;\\n  border-left: 1px solid #666;\\n  border-right: 1px solid #666; }\\n\\n.display-box.top {\\n  border-top: 1px solid #666;\\n  border-top-left-radius: 4px;\\n  border-top-right-radius: 4px; }\\n\\n.display-box.bottom {\\n  border-bottom: 1px solid #666;\\n  border-bottom-left-radius: 4px;\\n  border-bottom-right-radius: 4px; }\\n\\n.box {\\n  width: 33.3%; }\\n\\n.box-icon {\\n  width: 100px;\\n  margin: 20px auto; }\\n\\n.box-icon > svg {\\n  fill: #000; }\\n\\n.box-divider {\\n  border: 0.5px solid #666; }\\n\\n.box > ul {\\n  padding: 0; }\\n\\n.box > ul > li {\\n  list-style: none;\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: center; }\\n\\n.list-spacer {\\n  width: 10px;\\n  height: 0;\\n  border: 1px solid #666;\\n  margin: auto 4px auto 8px; }\\n\\n.top-display-text {\\n  margin: 60px auto;\\n  color: #ffffff; }\\n\\n/* Resume Page */\\n.resume {\\n  text-align: left;\\n  padding: 0 30px;\\n  cursor: default; }\\n\\n.resume-print-title {\\n  margin: 0;\\n  display: none; }\\n\\n@media print {\\n  .resume-print-title {\\n    display: unset; } }\\n\\n.resume-summary {\\n  justify-content: space-between; }\\n\\n.resume-vertical-divider {\\n  border: 0.5px solid #666; }\\n\\n.resume-horizontal-divider {\\n  border: 0.5px solid #666;\\n  margin: 0 10px; }\\n\\n.resume-left-column {\\n  width: 66.6%; }\\n\\n.resume-right-column {\\n  width: 33.2%; }\\n\\n.resume-left-column > h2, .resume-left-column > h3 {\\n  text-align: left; }\\n\\n.resume-right-column > h4 {\\n  margin-block-end: 0.2em; }\\n\\n.resume-right-column > a:hover {\\n  text-decoration: underline; }\\n\\n/* Display Tile */\\n.tile-container {\\n  display: flex;\\n  flex-wrap: wrap;\\n  min-width: 500px; }\\n\\n.tile-filler {\\n  flex-grow: 1; }\\n\\n.tile-wrapper {\\n  width: 480px;\\n  margin: 10px auto; }\\n\\n.display-tile {\\n  height: 300px;\\n  width: 100%;\\n  border-radius: 4px;\\n  border: 2px solid #666;\\n  justify-content: flex-end; }\\n\\n.display-tile:hover > .display-tile-inner {\\n  background: #666;\\n  opacity: 1; }\\n\\n.display-tile-inner {\\n  border-radius: 2px;\\n  width: 100%;\\n  height: 100%;\\n  opacity: 0;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: space-between;\\n  color: #ffffff; }\\n\\n.display-tile-inner > p {\\n  margin: 1em; }\\n\\n.display-tile-inner > a {\\n  margin: 1em auto; }\\n\\n.display-tile-button {\\n  padding: 5px 15px;\\n  border-radius: 4px;\\n  box-shadow: none;\\n  outline: none;\\n  background: transparent;\\n  border: 1px solid #ffffff;\\n  cursor: pointer;\\n  color: #ffffff;\\n  font-size: 1em;\\n  transition: 0.4s; }\\n\\n.display-tile-button:hover {\\n  border: 1px solid #666;\\n  color: #666;\\n  background: #ffffff; }\\n\\n.display-tile-button:active {\\n  color: #666; }\\n\\n/* Switch */\\n.switch {\\n  position: relative;\\n  display: inline-block;\\n  width: 60px;\\n  height: 34px; }\\n\\n.switch input {\\n  opacity: 0;\\n  width: 0;\\n  height: 0; }\\n\\n.slider {\\n  position: absolute;\\n  cursor: pointer;\\n  top: 0;\\n  left: 0;\\n  right: 0;\\n  bottom: 0;\\n  background: linear-gradient(90deg, #00F260, #0575E6);\\n  transition: .4s;\\n  border-radius: 34px; }\\n\\n.slider:before {\\n  position: absolute;\\n  content: \\\"\\\";\\n  height: 26px;\\n  width: 26px;\\n  left: 4px;\\n  bottom: 4px;\\n  background-color: white;\\n  transition: .4s;\\n  border-radius: 50%; }\\n\\ninput:checked + .slider:before {\\n  transform: translateX(26px); }\\n\\n/* Small Tile */\\n.small-tile {\\n  background: #666;\\n  color: #ffffff;\\n  margin: 4px;\\n  padding: 4px 12px;\\n  border-radius: 4px; }\\n\\n.display-tile-text {\\n  margin-top: 15px; }\\n\\n/* Resume Pdf Button */\\n.pdf-button {\\n  width: 0; }\\n\\n.pdf-icon {\\n  width: 15px;\\n  margin-top: 1em;\\n  opacity: 0.4;\\n  transition: 0.2s;\\n  cursor: pointer; }\\n\\n.resume:hover > div > div > a > .pdf-icon {\\n  opacity: 1;\\n  margin-top: 0.95em; }\\n\\n/* Comparison Page */\\n.comparison-tool-container {\\n  margin-top: 10px;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: flex-start;\\n  overflow: scroll;\\n  width: 100vw; }\\n\\n.comparison-tool > tbody > tr > td:first-child {\\n  text-align: right;\\n  font-size: 1.1em;\\n  font-weight: 600;\\n  max-width: 300px;\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: space-between; }\\n\\n.comparison-tool > tbody > tr > td {\\n  text-align: center;\\n  width: 230px;\\n  min-width: 150px;\\n  border-left: 1px solid #666666;\\n  margin: 0;\\n  padding: 3px 10px; }\\n\\n.comparison-tool > tbody > tr > td:first-child:hover {\\n  background: unset;\\n  cursor: unset; }\\n\\n.comparison-tool > tbody > tr > td:hover {\\n  background: #99999999;\\n  cursor: pointer; }\\n\\n.comparison-tool > tbody > tr:last-child > td {\\n  padding: 0; }\\n\\n.comparison-tool > tbody > tr > td:first-child {\\n  border-left: none; }\\n\\n.comparison-tool > tbody > tr:first-child > td:last-child {\\n  border: none;\\n  padding: 0;\\n  vertical-align: top;\\n  cursor: unset; }\\n\\n.comparison-tool > tbody > tr:first-child > td:last-child:hover {\\n  background: unset; }\\n\\n.comparison-tool > tbody > tr > td > input {\\n  text-align: center;\\n  margin: 0;\\n  padding: 0;\\n  width: 100%;\\n  border: none;\\n  font-size: 1em; }\\n\\n.comparison-control-container {\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: flex-start; }\\n\\n.comparison-control-container > button {\\n  border-radius: 4px;\\n  border: none;\\n  background: #666;\\n  color: #ffffff;\\n  height: 1.2rem;\\n  padding: 0px 5px;\\n  vertical-align: middle;\\n  margin: 2px 5px;\\n  cursor: pointer; }\\n\\n/* Add Button */\\n.add-button {\\n  text-align: center;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  border: 2px #666 dashed;\\n  color: #666;\\n  font-weight: 500;\\n  font-size: 1em;\\n  cursor: pointer;\\n  visibility: visible; }\\n\\n.add-button-container.row,\\n.add-button.row {\\n  width: calc(100% - 4px);\\n  height: 44px; }\\n\\n.add-button-container.column,\\n.add-button.column {\\n  height: calc(100% - 4px);\\n  width: 40px; }\\n\\n/* Popup */\\n.popup {\\n  background: #999;\\n  display: flex;\\n  position: absolute;\\n  top: 50%;\\n  left: 50%;\\n  transform: translate(-50%, -50%);\\n  border-radius: 4px;\\n  padding: 5px; }\\n\\n/* Add Row Dialog*/\\n.add-row-dialog {\\n  padding: 0;\\n  display: flex;\\n  flex-direction: column; }\\n\\n.add-row-dialog > input[type=\\\"text\\\"] {\\n  border-radius: 4px;\\n  border: none;\\n  height: 1.2rem;\\n  padding: 0 5px;\\n  vertical-align: middle;\\n  margin: 0 2px; }\\n\\n.add-row-dialog > div {\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: flex-end; }\\n\\n.add-row-dialog > div > button {\\n  border-radius: 4px;\\n  border: none;\\n  background: #ffffff;\\n  color: #000;\\n  height: 1.2rem;\\n  padding: 0 5px;\\n  vertical-align: middle;\\n  margin: 0 2px;\\n  cursor: pointer; }\\n\\n/* Delete Button */\\n.delete-button {\\n  cursor: pointer; }\\n\\n/* Error Messages*/\\n.error-message {\\n  color: red; }\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./scss/Pages.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./scss/Site.scss":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader!./node_modules/sass-loader/dist/cjs.js!./scss/Site.scss ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"body {\\n  margin: 0;\\n  min-height: 100vh;\\n  width: 100vw;\\n  background: #ffffff;\\n  color: #000;\\n  font-family: 'Noto Sans', sans-serif;\\n  overflow-x: hidden; }\\n\\nh1 {\\n  font-family: 'Poiret One', sans-serif;\\n  font-size: 4em; }\\n\\nh2 {\\n  text-align: center; }\\n\\na {\\n  color: unset;\\n  text-decoration: unset;\\n  cursor: pointer; }\\n\\n.center-horizontal {\\n  margin-left: auto;\\n  margin-right: auto;\\n  text-align: center; }\\n\\n.flex-filler {\\n  flex-grow: 1; }\\n\\n.flex-row {\\n  display: flex;\\n  flex-direction: row; }\\n\\n.flex-column {\\n  display: flex;\\n  flex-direction: column; }\\n\\n.flex-wrap {\\n  flex-wrap: wrap; }\\n\\n.content-width {\\n  max-width: 1200px; }\\n\\n.secondary-content-width {\\n  max-width: 1000px; }\\n\\n.spacer {\\n  height: 100px; }\\n\\n/* Highlight Title*/\\n.highlight-title {\\n  font-family: 'Poiret One', sans-serif;\\n  font-size: 4em;\\n  font-weight: 400;\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: center;\\n  cursor: default;\\n  line-height: 80px; }\\n\\na > .highlight-title > div {\\n  cursor: pointer; }\\n\\n.space-div {\\n  width: 20px; }\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./scss/Site.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./scss/Layout.scss":
/*!**************************!*\
  !*** ./scss/Layout.scss ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/resolve-url-loader!../node_modules/sass-loader/dist/cjs.js!./Layout.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./scss/Layout.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./scss/Layout.scss?");

/***/ }),

/***/ "./scss/Pages.scss":
/*!*************************!*\
  !*** ./scss/Pages.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/resolve-url-loader!../node_modules/sass-loader/dist/cjs.js!./Pages.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./scss/Pages.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./scss/Pages.scss?");

/***/ }),

/***/ "./scss/Site.scss":
/*!************************!*\
  !*** ./scss/Site.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/resolve-url-loader!../node_modules/sass-loader/dist/cjs.js!./Site.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./scss/Site.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./scss/Site.scss?");

/***/ }),

/***/ "./tsOutput/StyleOutput.js":
/*!*********************************!*\
  !*** ./tsOutput/StyleOutput.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var site = __webpack_require__(/*! ../scss/Site.scss */ \"./scss/Site.scss\");\nvar header = __webpack_require__(/*! ../scss/Layout.scss */ \"./scss/Layout.scss\");\nvar pages = __webpack_require__(/*! ../scss/Pages.scss */ \"./scss/Pages.scss\");\n//# sourceMappingURL=StyleOutput.js.map\n\n//# sourceURL=webpack:///./tsOutput/StyleOutput.js?");

/***/ })

/******/ });
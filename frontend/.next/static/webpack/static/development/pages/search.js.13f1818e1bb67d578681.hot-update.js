webpackHotUpdate("static/development/pages/search.js",{

/***/ "./lib/utils.js":
/*!**********************!*\
  !*** ./lib/utils.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _bluebird = _interopRequireDefault(__webpack_require__(/*! bluebird */ "./node_modules/bluebird/js/browser/bluebird.js"));

__webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");

function getJson(url) {
  return fetch(url).then(function (resp) {
    console.log(url, resp);
    return resp.json();
    x = 43;
  });
}

function handleError(error) {
  console.warn(error);
  return null;
}

function getCampground(name) {
  //return fetch(`http://35.196.38.200/api/info?q=${name}`).then(function(resp) {
  return fetch("http://localhost:8080/api/info?q=".concat(name)).then(function (resp) {
    return resp.json();
  });
}

module.exports = {
  getInfo: function getInfo(player) {
    return getCampground(player)["catch"](handleError);
  }
};

/***/ })

})
//# sourceMappingURL=search.js.13f1818e1bb67d578681.hot-update.js.map
webpackHotUpdate("static/development/pages/search.js",{

/***/ "./pages/search.js":
/*!*************************!*\
  !*** ./pages/search.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_MyLayout_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/MyLayout.js */ "./components/MyLayout.js");
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../lib/utils */ "./lib/utils.js");
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_lib_utils__WEBPACK_IMPORTED_MODULE_10__);







var _jsxFileName = "/mnt/c/Users/Krissy/Desktop/UMW_Classes/FALL_2019/CPSC350/complete_web_application_ex/complete-app/frontend/pages/search.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;



var Home =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Home, _React$Component);

  function Home(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Home);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Home).call(this, props));
    _this.state = {
      search: ""
    }; //this.handleSearch();

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Home, [{
    key: "handleUpdate",
    value: function handleUpdate(evt) {
      this.setState({
        search: evt.target.value
      });
    }
  }, {
    key: "handleSearch",
    value: function () {
      var _handleSearch = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(evt) {
        var campground;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(_lib_utils__WEBPACK_IMPORTED_MODULE_10__["getInfo"])(this.state.search);

              case 2:
                campground = _context.sent;
                console.log(campground);
                this.setState({
                  campground: campground
                });

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function handleSearch(_x) {
        return _handleSearch.apply(this, arguments);
      }

      return handleSearch;
    }()
  }, {
    key: "render",
    value: function render() {
      var that = this;
      return __jsx(_components_MyLayout_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
        style: {
          margin: "auto auto",
          width: "600px",
          textAlign: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, __jsx("h2", {
        className: "jsx-1947036453",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, "New Mexico Campground Search"), __jsx("input", {
        type: "text",
        value: this.state.search,
        onChange: this.handleUpdate.bind(this),
        className: "jsx-1947036453" + " " + "text-style",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }), __jsx("br", {
        className: "jsx-1947036453",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }), __jsx("br", {
        className: "jsx-1947036453",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }), __jsx("div", {
        onClick: this.handleSearch.bind(that),
        className: "jsx-1947036453" + " " + "button-style",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, "Submit"), __jsx("br", {
        className: "jsx-1947036453",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }), " ", __jsx("br", {
        className: "jsx-1947036453",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }), this.state.campground ? __jsx("div", {
        className: "jsx-1947036453",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, __jsx("br", {
        className: "jsx-1947036453",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }), __jsx("h3", {
        className: "jsx-1947036453",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, this.state.campground.name), __jsx("br", {
        className: "jsx-1947036453",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }), __jsx("img", {
        style: {
          maxWidth: "700px",
          maxHeight: "500px"
        },
        src: this.state.campground.image_url,
        className: "jsx-1947036453",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }), __jsx("br", {
        className: "jsx-1947036453",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }), " ", __jsx("h4", {
        className: "jsx-1947036453",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, this.state.campground.closest_town), __jsx("br", {
        className: "jsx-1947036453",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }), __jsx("div", {
        className: "jsx-1947036453" + " " + "description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, __jsx("p", {
        className: "jsx-1947036453",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, this.state.campground.description), __jsx("br", {
        className: "jsx-1947036453",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }), " ")) : null, "campground" in this.state && this.state.campground == undefined ? __jsx("p", {
        className: "jsx-1947036453",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, this.state.search, " Campground Not Found") : null, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "1947036453",
        __self: this
      }, "h1.jsx-1947036453,h2.jsx-1947036453,h3.jsx-1947036453,h4.jsx-1947036453,a.jsx-1947036453,p.jsx-1947036453{font-family:\"Arial\";color:#006600;}.button-style.jsx-1947036453{margin:auto auto;cursor:pointer;background-color:#228b22;color:#ffffff;width:100px;font-family:\"Arial\";}.text-style.jsx-1947036453{margin:auto auto;width:200px;}input.jsx-1947036453{margin:auto auto;width:200px;}.description.jsx-1947036453{font-family:\"Arial\";font-size:\"10px\";}ul.jsx-1947036453{padding:0;}li.jsx-1947036453{list-style:none;margin:5px 0;}a.jsx-1947036453{-webkit-text-decoration:none;text-decoration:none;color:blue;}a.jsx-1947036453:hover{opacity:0.6;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvYy9Vc2Vycy9Lcmlzc3kvRGVza3RvcC9VTVdfQ2xhc3Nlcy9GQUxMXzIwMTkvQ1BTQzM1MC9jb21wbGV0ZV93ZWJfYXBwbGljYXRpb25fZXgvY29tcGxldGUtYXBwL2Zyb250ZW5kL3BhZ2VzL3NlYXJjaC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0RG9CLEFBUWlDLEFBS0gsQUFTQSxBQUtBLEFBS0csQUFLVixBQUlNLEFBS0ssQUFLVCxVQWJkLEVBY0EsSUFWZSxDQTVCRSxBQVNILEFBS0EsR0FuQkUsQUF3QkcsU0FUbkIsQUFLQSxBQWNBLEdBNUIyQixFQUwzQixHQXdCQSxhQWFhLE9BL0JHLElBZ0NoQixVQS9CYyxZQUNRLG9CQUN0QiIsImZpbGUiOiIvbW50L2MvVXNlcnMvS3Jpc3N5L0Rlc2t0b3AvVU1XX0NsYXNzZXMvRkFMTF8yMDE5L0NQU0MzNTAvY29tcGxldGVfd2ViX2FwcGxpY2F0aW9uX2V4L2NvbXBsZXRlLWFwcC9mcm9udGVuZC9wYWdlcy9zZWFyY2guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL015TGF5b3V0LmpzXCI7XG5cbmltcG9ydCB7IGdldEluZm8gfSBmcm9tIFwiLi4vbGliL3V0aWxzXCI7XG5cbmNsYXNzIEhvbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7IHNlYXJjaDogXCJcIiB9O1xuICAgIC8vdGhpcy5oYW5kbGVTZWFyY2goKTtcbiAgfVxuICBoYW5kbGVVcGRhdGUoZXZ0KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNlYXJjaDogZXZ0LnRhcmdldC52YWx1ZSB9KTtcbiAgfVxuXG4gIGFzeW5jIGhhbmRsZVNlYXJjaChldnQpIHtcbiAgICBjb25zdCBjYW1wZ3JvdW5kID0gYXdhaXQgZ2V0SW5mbyh0aGlzLnN0YXRlLnNlYXJjaCk7XG4gICAgY29uc29sZS5sb2coY2FtcGdyb3VuZCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNhbXBncm91bmQgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxMYXlvdXRcbiAgICAgICAgc3R5bGU9e3sgbWFyZ2luOiBcImF1dG8gYXV0b1wiLCB3aWR0aDogXCI2MDBweFwiLCB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX1cbiAgICAgID5cbiAgICAgICAgPGgyPk5ldyBNZXhpY28gQ2FtcGdyb3VuZCBTZWFyY2g8L2gyPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1zdHlsZVwiXG4gICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuc2VhcmNofVxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVVwZGF0ZS5iaW5kKHRoaXMpfVxuICAgICAgICAvPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxkaXYgb25DbGljaz17dGhpcy5oYW5kbGVTZWFyY2guYmluZCh0aGF0KX0gY2xhc3NOYW1lPVwiYnV0dG9uLXN0eWxlXCI+XG4gICAgICAgICAgU3VibWl0XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnIgLz4gPGJyIC8+XG4gICAgICAgIHt0aGlzLnN0YXRlLmNhbXBncm91bmQgPyAoXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgPGgzPnt0aGlzLnN0YXRlLmNhbXBncm91bmQubmFtZX08L2gzPlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIHN0eWxlPXt7IG1heFdpZHRoOiBcIjcwMHB4XCIsIG1heEhlaWdodDogXCI1MDBweFwiIH19XG4gICAgICAgICAgICAgIHNyYz17dGhpcy5zdGF0ZS5jYW1wZ3JvdW5kLmltYWdlX3VybH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8YnIgLz4gPGg0Pnt0aGlzLnN0YXRlLmNhbXBncm91bmQuY2xvc2VzdF90b3dufTwvaDQ+XG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgICAgPHA+e3RoaXMuc3RhdGUuY2FtcGdyb3VuZC5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICAgIDxiciAvPntcIiBcIn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogbnVsbH1cbiAgICAgICAge1wiY2FtcGdyb3VuZFwiIGluIHRoaXMuc3RhdGUgJiYgdGhpcy5zdGF0ZS5jYW1wZ3JvdW5kID09IHVuZGVmaW5lZCA/IChcbiAgICAgICAgICA8cD57dGhpcy5zdGF0ZS5zZWFyY2h9IENhbXBncm91bmQgTm90IEZvdW5kPC9wPlxuICAgICAgICApIDogbnVsbH1cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIGgxLFxuICAgICAgICAgIGgyLFxuICAgICAgICAgIGgzLFxuICAgICAgICAgIGg0LFxuICAgICAgICAgIGEsXG4gICAgICAgICAgcCB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJBcmlhbFwiO1xuICAgICAgICAgICAgY29sb3I6ICMwMDY2MDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmJ1dHRvbi1zdHlsZSB7XG4gICAgICAgICAgICBtYXJnaW46IGF1dG8gYXV0bztcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMjhiMjI7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkFyaWFsXCI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnRleHQtc3R5bGUge1xuICAgICAgICAgICAgbWFyZ2luOiBhdXRvIGF1dG87XG4gICAgICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaW5wdXQge1xuICAgICAgICAgICAgbWFyZ2luOiBhdXRvIGF1dG87XG4gICAgICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmRlc2NyaXB0aW9uIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkFyaWFsXCI7XG4gICAgICAgICAgICBmb250LXNpemU6IFwiMTBweFwiO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbGkge1xuICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgIG1hcmdpbjogNXB4IDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYSB7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICBjb2xvcjogYmx1ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBhOmhvdmVyIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvTGF5b3V0PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdfQ== */\n/*@ sourceURL=/mnt/c/Users/Krissy/Desktop/UMW_Classes/FALL_2019/CPSC350/complete_web_application_ex/complete-app/frontend/pages/search.js */"));
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=search.js.c48c2f78e76ce591fffc.hot-update.js.map
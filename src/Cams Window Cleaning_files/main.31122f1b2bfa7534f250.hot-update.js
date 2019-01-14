webpackHotUpdate("main",{

/***/ "./src/components/Home.js":
/*!********************************!*\
  !*** ./src/components/Home.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_timothymeyer_devmtn_personalProject_personalpro2_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_timothymeyer_devmtn_personalProject_personalpro2_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_timothymeyer_devmtn_personalProject_personalpro2_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_timothymeyer_devmtn_personalProject_personalpro2_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_timothymeyer_devmtn_personalProject_personalpro2_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_timothymeyer_devmtn_personalProject_personalpro2_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _ducks_reducer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../ducks/reducer */ "./src/ducks/reducer.js");






var _jsxFileName = "/Users/timothymeyer/devmtn/personalProject/personalpro2/src/components/Home.js";





 // import Comments from './../components/Comments'
// import Add from './Add'

var Home =
/*#__PURE__*/
function (_Component) {
  Object(_Users_timothymeyer_devmtn_personalProject_personalpro2_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Home, _Component);

  function Home() {
    var _this;

    Object(_Users_timothymeyer_devmtn_personalProject_personalpro2_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Home);

    _this = Object(_Users_timothymeyer_devmtn_personalProject_personalpro2_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_timothymeyer_devmtn_personalProject_personalpro2_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Home).call(this));
    _this.state = {
      comments: [],
      updateInput: ''
    };
    _this.handleInput = _this.handleInput.bind(Object(_Users_timothymeyer_devmtn_personalProject_personalpro2_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_Users_timothymeyer_devmtn_personalProject_personalpro2_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)));
    _this.handleClick = _this.handleClick.bind(Object(_Users_timothymeyer_devmtn_personalProject_personalpro2_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_Users_timothymeyer_devmtn_personalProject_personalpro2_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)));
    _this.handleUpdate = _this.handleUpdate.bind(Object(_Users_timothymeyer_devmtn_personalProject_personalpro2_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_Users_timothymeyer_devmtn_personalProject_personalpro2_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)));
    _this.handleDelete = _this.handleDelete.bind(Object(_Users_timothymeyer_devmtn_personalProject_personalpro2_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_Users_timothymeyer_devmtn_personalProject_personalpro2_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)));
    return _this;
  }

  Object(_Users_timothymeyer_devmtn_personalProject_personalpro2_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Home, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_7___default.a.get('/api/user-data').then(function (res) {
        _this2.props.updateUser(res.data);
      });
      axios__WEBPACK_IMPORTED_MODULE_7___default.a.get('/api/comment-data').then(function (res) {
        _this2.setState({
          comments: res.data
        });
      });
    } // login() {
    //     let {
    //         REACT_APP_DOMAIN,
    //         REACT_APP_CLIENT_ID
    //     } = process.env;
    //     let uri = `${encodeURIComponent(window.location.origin)}/auth/callback`
    //     window.location = `https://${REACT_APP_DOMAIN}/authorize?client_id=${REACT_APP_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri=${uri}&response_type=code`
    // }

  }, {
    key: "handleInput",
    value: function handleInput(e) {
      if (e.target.value === null) alert("You can't add nothing");else {
        this.setState({
          userInput: e.target.value
        });
      }
    }
  }, {
    key: "handleUpdate",
    value: function handleUpdate(id) {
      var _this3 = this;

      axios__WEBPACK_IMPORTED_MODULE_7___default.a.put("/api/comment/".concat(id), {
        comment: this.state.updateInput
      }).then(function (res) {
        _this3.setState({
          comments: res.data,
          userInput: ''
        });
      });
    }
  }, {
    key: "handleClick",
    value: function handleClick() {
      var _this4 = this;

      axios__WEBPACK_IMPORTED_MODULE_7___default.a.post('/api/comment', {
        comment: this.state.userInput
      }).then(function (res) {
        _this4.setState({
          comments: res.data,
          userInput: ''
        });
      });
    }
  }, {
    key: "handleDelete",
    value: function handleDelete(index) {
      var _this5 = this;

      axios__WEBPACK_IMPORTED_MODULE_7___default.a.delete("/api/comment/".concat(index)).then(function (res) {
        _this5.setState({
          comments: res.data
        });
      });
    }
  }, {
    key: "reset",
    value: function reset() {
      this.setState({
        userInput: ''
      });
    }
  }, {
    key: "handleAddComment",
    value: function handleAddComment() {}
  }, {
    key: "render",
    value: function render() {
      var _this6 = this;

      console.log(this.props);
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("header", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "picContainer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "homeInfo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "services",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, "Services"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h5", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, "Residential Window Cleaning"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "homeBody",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        id: "cleaningHousePic",
        src: __webpack_require__(/*! ../cleaninghouse.jpg */ "./src/cleaninghouse.jpg"),
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }, "If it is made of glass, we can clean it.  Many new homes are full of windows to allow the maximum amount of sun into your home.  We will provide a streak free, sparkling view for you to enjoy.  Our services include:", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "flex",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, " \u2022 Interior/Exterior Window Cleaning"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, " \u2022 Window Casings"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }, " \u2022 Screen Cleaning")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "secondGroup",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, "\u2022 Mirror Cleaning"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }, "\u2022 Chandelier Cleaning"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }, "\u2022 Ceiling Fan Cleaning"))))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h5", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }, "Commercial Window Cleaning"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "homeBody",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        id: "businessPic",
        src: __webpack_require__(/*! ../businessNew.png */ "./src/businessNew.png"),
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }, "Make sure your busi\u200Bness portrays the right message to potential customers. A clean first impression says a lot about your business.  We provide the same attention to detail as we do our residential customers.  We are not your typical commercial window cleaning company.  We scrub and detail each window by hand and leave no dirty residue behind."))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        id: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "getQuote",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["Link"], {
        to: "/quotes",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        className: "nav",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        __self: this
      }, "Get A Quote!"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "titleBoxes",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", {
        className: "comment1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      }, "Comments")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "comments",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("form", {
        className: "input",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h4", {
        className: "comments2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        __self: this
      }, "Please let me know how I have done!"), this.props.user.customerID ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        placeholder: "type here",
        className: "commentInput",
        value: this.state.userInput,
        onChange: this.handleInput,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        className: "comment-button",
        onClick: this.handleClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      }, "Add")) : null, this.state.comments.map(function (comment) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          className: "theComment",
          key: comment.comment_id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 173
          },
          __self: this
        }, "Customer(", comment.customer_id, "): ", comment.comment, _this6.props.user.admin ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 175
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
          className: "buttons",
          onClick: function onClick() {
            return _this6.handleDelete(comment.comment_id);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 176
          },
          __self: this
        }, "Delete"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
          className: "buttons",
          onClick: function onClick() {
            return _this6.handleUpdate(comment.comment_id);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 177
          },
          __self: this
        }, "Edit")) : null);
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        },
        __self: this
      }, this.props.user.admin ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        className: "updateInput",
        type: "text",
        onChange: function onChange(e) {
          _this6.setState({
            updateInput: e.target.value
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        },
        __self: this
      }), "Update Text", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["Link"], {
        to: "/admin/users",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        },
        __self: this
      }, " ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        },
        __self: this
      }, "Users")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["Link"], {
        to: "/admin/appointment",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        },
        __self: this
      }, "Appointment"))) : null))));
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["connect"])(mapStateToProps, {
  updateUser: _ducks_reducer__WEBPACK_IMPORTED_MODULE_11__["updateUser"]
})(Home));

/***/ })

})
//# sourceMappingURL=main.31122f1b2bfa7534f250.hot-update.js.map
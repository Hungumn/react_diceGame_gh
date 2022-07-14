"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _BTXucSacReducer = _interopRequireDefault(require("./BTXucSacReducer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var rootReducer = (0, _redux.combineReducers)({
  //store tổng của ứng dụng
  BTXucSacReducer: _BTXucSacReducer["default"]
});
var _default = rootReducer;
exports["default"] = _default;
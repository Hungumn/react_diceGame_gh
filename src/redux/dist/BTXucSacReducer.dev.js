"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var stateDefault = {
  taiXiu: false,
  //true - Tai(3-11) , False - Xiu(>12)
  mangXucSac: [{
    ma: 1,
    hinhAnh: './img/1.png'
  }, {
    ma: 1,
    hinhAnh: './img/1.png'
  }, {
    ma: 1,
    hinhAnh: './img/1.png'
  }],
  soBanThang: 0,
  tongSoBanChoi: 0,
  ketQua: true,
  tongDiem: 0
};

var BTXucSacReducer = function BTXucSacReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : stateDefault;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'DAT_CUOC':
      state.taiXiu = action.taiXiu;
      return _objectSpread({}, state);

    case 'PLAY_GAME':
      {
        var mangXucSacNgauNhien = [];

        for (var i = 0; i < 3; i++) {
          var soNgauNhien = Math.floor(Math.random() * 6) + 1;
          var xucSacNgauNhien = {
            ma: soNgauNhien,
            hinhAnh: "./img/".concat(soNgauNhien, ".png")
          };
          mangXucSacNgauNhien.push(xucSacNgauNhien);
        }

        state.mangXucSac = mangXucSacNgauNhien;
        state.tongSoBanChoi += 1;
        var tongSoDiem = mangXucSacNgauNhien.reduce(function (tongDiem, xucSac, index) {
          return tongDiem += xucSac.ma;
        }, 0);

        if (tongSoDiem > 11 && state.taiXiu === true || tongSoDiem < 11 && state.taiXiu === false) {
          state.soBanThang += 1;
          state.ketQua = true;
          state.tongDiem = tongSoDiem;
        } else {
          state.ketQua = false;
          state.tongDiem = tongSoDiem;
        }

        return _objectSpread({}, state);
      }
      ;

    default:
      return _objectSpread({}, state);
  }
};

var _default = BTXucSacReducer;
exports["default"] = _default;
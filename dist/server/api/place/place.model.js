'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PlaceSchema = new _mongoose2.default.Schema({
  name: String,
  lat: Number,
  long: Number,
  needs: [{
    name: String,
    image: String,
    detail: String,
    state: Boolean
  }],
  wtgo: [{
    name: String,
    tel: String,
    extra: String,
    lat: Number,
    long: Number
  }],
  htgo: String
});

exports.default = _mongoose2.default.model('Place', PlaceSchema);
//# sourceMappingURL=place.model.js.map

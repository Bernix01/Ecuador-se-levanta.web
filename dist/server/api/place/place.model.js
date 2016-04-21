'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PlaceSchema = new _mongoose2.default.Schema({
  name: String,
  lat: { type: Number, default: 0 },
  long: { type: Number, default: 0 },
  needs: [{
    name: String,
    image: String,
    detail: { type: String, default: '' },
    state: Boolean
  }],
  wtgo: [{
    name: String,
    tel: { type: String, default: '' },
    extra: { type: String, default: '' },
    lat: { type: Number, default: 0 },
    long: { type: Number, default: 0 }
  }],
  htgo: { type: String, default: '' }
});

exports.default = _mongoose2.default.model('Place', PlaceSchema);
//# sourceMappingURL=place.model.js.map

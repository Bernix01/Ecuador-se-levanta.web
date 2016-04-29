'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PlaceSchema = new _mongoose2.default.Schema({
  name: String,
  lat: {
    type: Number,
    default: 0
  },
  long: {
    type: Number,
    default: 0
  },
  needs: [],
  wtgo: [],
  htgo: {
    type: String,
    default: ''
  },
  z0: {
    type: Boolean,
    default: false
  }
});
exports.default = _mongoose2.default.model('Place', PlaceSchema);
//# sourceMappingURL=place.model.js.map

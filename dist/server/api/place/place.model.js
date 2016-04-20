'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PlaceSchema = new _mongoose2.default.Schema({
  name: String,
  loc: {
    type: [Number], // [<longitude>, <latitude>]
    index: '2d' // create the geospatial index
  },
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
    loc: {
      type: [Number], // [<longitude>, <latitude>]
      index: '2d' // create the geospatial index
    }
  }],
  htgo: String
});

exports.default = _mongoose2.default.model('Place', PlaceSchema);
//# sourceMappingURL=place.model.js.map

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ImageSchema = new _mongoose2.default.Schema({
  name: String,
  src: String,
  active: Boolean
});

exports.default = _mongoose2.default.model('Image', ImageSchema);
//# sourceMappingURL=image.model.js.map

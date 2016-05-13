/**
 * Image model events
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _events = require('events');

var _image = require('./image.model');

var _image2 = _interopRequireDefault(_image);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ImageEvents = new _events.EventEmitter();

// Set max event listeners (0 == unlimited)
ImageEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  _image2.default.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function (doc) {
    ImageEvents.emit(event + ':' + doc._id, doc);
    ImageEvents.emit(event, doc);
  };
}

exports.default = ImageEvents;
//# sourceMappingURL=image.events.js.map

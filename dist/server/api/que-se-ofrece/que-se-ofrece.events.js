/**
 * QueSeOfrece model events
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _events = require('events');

var _queSeOfrece = require('./que-se-ofrece.model');

var _queSeOfrece2 = _interopRequireDefault(_queSeOfrece);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var QueSeOfreceEvents = new _events.EventEmitter();

// Set max event listeners (0 == unlimited)
QueSeOfreceEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  _queSeOfrece2.default.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function (doc) {
    QueSeOfreceEvents.emit(event + ':' + doc._id, doc);
    QueSeOfreceEvents.emit(event, doc);
  };
}

exports.default = QueSeOfreceEvents;
//# sourceMappingURL=que-se-ofrece.events.js.map

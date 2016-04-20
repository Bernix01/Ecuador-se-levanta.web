/**
 * QueSeOfrece model events
 */

'use strict';

import {EventEmitter} from 'events';
import QueSeOfrece from './que-se-ofrece.model';
var QueSeOfreceEvents = new EventEmitter();

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
  QueSeOfrece.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    QueSeOfreceEvents.emit(event + ':' + doc._id, doc);
    QueSeOfreceEvents.emit(event, doc);
  }
}

export default QueSeOfreceEvents;

'use strict';

import mongoose from 'mongoose';

var QueSeOfreceSchema = new mongoose.Schema({
  name: String,
  person: String,
  info: String,
  active: Boolean
});

export default mongoose.model('QueSeOfrece', QueSeOfreceSchema);

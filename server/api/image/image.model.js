'use strict';

import mongoose from 'mongoose';

var ImageSchema = new mongoose.Schema({
  name: String,
  src: String,
  active: Boolean
});

export default mongoose.model('Image', ImageSchema);

'use strict';

import mongoose from 'mongoose';

var PlaceSchema = new mongoose.Schema({
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
  }
});
export default mongoose.model('Place', PlaceSchema);

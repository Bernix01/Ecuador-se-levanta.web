'use strict';

import mongoose from 'mongoose';

var PlaceSchema = new mongoose.Schema({
  name: String,
  lat: { type: Number, default: 0 },
  long: { type: Number, default: 0 },
  needs: [{
    name:String,
    image: String,
    detail: { type: String, default: '' },
    state: Boolean
  }],
  wtgo:[{
    name: String,
    tel: { type: String, default: '' },
    extra: { type: String, default: '' },
    lat: { type: Number, default: 0 },
    long: { type: Number, default: 0 }
  }],
  htgo: { type: String, default: '' }
});

export default mongoose.model('Place', PlaceSchema);

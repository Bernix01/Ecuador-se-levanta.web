'use strict';

import mongoose from 'mongoose';

var PlaceSchema = new mongoose.Schema({
  name: String,
  lat: Number,
  long: Number,
  needs: [{
    name:String,
    image: String,
    detail: String,
    state: Boolean
  }],
  wtgo:[{
    name: String,
    tel: String,
    extra: String,
    lat: Number,
    long: Number
  }],
  htgo: String
});

export default mongoose.model('Place', PlaceSchema);

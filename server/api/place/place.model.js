'use strict';

import mongoose from 'mongoose';

var PlaceSchema = new mongoose.Schema({
  name: String,
  loc: {
    type: [Number],  // [<longitude>, <latitude>]
    index: '2d'      // create the geospatial index
  },
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
    loc: {
      type: [Number],  // [<longitude>, <latitude>]
      index: '2d'      // create the geospatial index
    }
  }],
  htgo: String
});

export default mongoose.model('Place', PlaceSchema);

'use strict';

import mongoose from 'mongoose';

var PlaceSchema = new mongoose.Schema({
  name: String,
  lat: { type: Number, default: 0 },
  long: { type: Number, default: 0 },
  needs: [],
  wtgo:[],
  htgo: { type: String, default: '' }
});
PlaceSchema.pre("save", function(next) {
    var self = this;
console.log(this.wtgo);
return next();
});
PlaceSchema.post("save", function(doc) {
console.log(doc.wtgo);
});
export default mongoose.model('Place', PlaceSchema);

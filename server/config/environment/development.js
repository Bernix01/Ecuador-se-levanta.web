'use strict';

// Development specific configuration
// ==================================
module.exports = {

  // MongoDB connection options
  mongo: {
    uri: 'process.env.DB_URI_DEV'
  },

  // Seed database on startup
  seedDB: true

};

'use strict';

var app = require('../..');
import request from 'supertest';
import Place from './place.model';

var newPlace;

describe('Place API:', function() {

  before(function() {
    return User.remove().then(function() {
      newPlace = new Place({
        name: 'New Place',
        htgo: 'This is the brand new place!!!'
      });

      return newPlace.save();
    });
  });

  // Clear users after testing
  after(function() {
    return Place.remove();
  });

  describe('GET /api/places', function() {
    var places;

    beforeEach(function(done) {
      request(app)
        .get('/api/places')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          places = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      places.should.be.instanceOf(Array);
    });

  });


  describe('GET /api/places/:id', function() {
    var place;

    beforeEach(function(done) {
      request(app)
        .get('/api/places/' + newPlace._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          place = res.body;
          done();
        });
    });

    afterEach(function() {
      place = {};
    });

    it('should respond with the requested place', function() {
      place.name.should.equal('New Place');
      place.htgo.should.equal('This is the brand new place!!!');
    });

  });


});

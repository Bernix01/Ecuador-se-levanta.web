'use strict';

var _supertest = require('supertest');

var _supertest2 = _interopRequireDefault(_supertest);

var _place = require('./place.model');

var _place2 = _interopRequireDefault(_place);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = require('../..');


var newPlace;

describe('Place API:', function () {

  before(function () {
    return _place2.default.remove().then(function () {
      newPlace = new _place2.default({
        name: 'New Place',
        htgo: 'This is the brand new place!!!'
      });

      return newPlace.save();
    });
  });

  // Clear palces after testing
  after(function () {
    return _place2.default.remove();
  });

  describe('GET /api/places', function () {
    var places;

    beforeEach(function (done) {
      (0, _supertest2.default)(app).get('/api/places').expect(200).expect('Content-Type', /json/).end(function (err, res) {
        if (err) {
          return done(err);
        }
        places = res.body;
        done();
      });
    });

    it('should respond with JSON array', function () {
      places.should.be.instanceOf(Array);
    });
  });

  describe('GET /api/places/:id', function () {
    var place;

    beforeEach(function (done) {
      (0, _supertest2.default)(app).get('/api/places/' + newPlace._id).expect(200).expect('Content-Type', /json/).end(function (err, res) {
        if (err) {
          return done(err);
        }
        place = res.body;
        done();
      });
    });

    afterEach(function () {
      place = {};
    });

    it('should respond with the requested place', function () {
      place.name.should.equal('New Place');
      place.htgo.should.equal('This is the brand new place!!!');
    });
  });
});
//# sourceMappingURL=place.integration.js.map

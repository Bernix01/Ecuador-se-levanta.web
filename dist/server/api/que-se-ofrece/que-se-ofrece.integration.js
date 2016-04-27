'use strict';

var _supertest = require('supertest');

var _supertest2 = _interopRequireDefault(_supertest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = require('../..');


var newQueSeOfrece;

describe('QueSeOfrece API:', function () {

  describe('GET /api/que-se-ofreces', function () {
    var queSeOfreces;

    beforeEach(function (done) {
      (0, _supertest2.default)(app).get('/api/que-se-ofreces').expect(200).expect('Content-Type', /json/).end(function (err, res) {
        if (err) {
          return done(err);
        }
        queSeOfreces = res.body;
        done();
      });
    });

    it('should respond with JSON array', function () {
      queSeOfreces.should.be.instanceOf(Array);
    });
  });

  describe('POST /api/que-se-ofreces', function () {
    beforeEach(function (done) {
      (0, _supertest2.default)(app).post('/api/que-se-ofreces').send({
        name: 'New QueSeOfrece',
        info: 'This is the brand new queSeOfrece!!!'
      }).expect(201).expect('Content-Type', /json/).end(function (err, res) {
        if (err) {
          return done(err);
        }
        newQueSeOfrece = res.body;
        done();
      });
    });

    it('should respond with the newly created queSeOfrece', function () {
      newQueSeOfrece.name.should.equal('New QueSeOfrece');
      newQueSeOfrece.info.should.equal('This is the brand new queSeOfrece!!!');
    });
  });

  describe('GET /api/que-se-ofreces/:id', function () {
    var queSeOfrece;

    beforeEach(function (done) {
      (0, _supertest2.default)(app).get('/api/que-se-ofreces/' + newQueSeOfrece._id).expect(200).expect('Content-Type', /json/).end(function (err, res) {
        if (err) {
          return done(err);
        }
        queSeOfrece = res.body;
        done();
      });
    });

    afterEach(function () {
      queSeOfrece = {};
    });

    it('should respond with the requested queSeOfrece', function () {
      queSeOfrece.name.should.equal('New QueSeOfrece');
      queSeOfrece.info.should.equal('This is the brand new queSeOfrece!!!');
    });
  });

  describe('PUT /api/que-se-ofreces/:id', function () {
    var updatedQueSeOfrece;

    beforeEach(function (done) {
      (0, _supertest2.default)(app).put('/api/que-se-ofreces/' + newQueSeOfrece._id).send({
        name: 'Updated QueSeOfrece',
        info: 'This is the updated queSeOfrece!!!'
      }).expect(200).expect('Content-Type', /json/).end(function (err, res) {
        if (err) {
          return done(err);
        }
        updatedQueSeOfrece = res.body;
        done();
      });
    });

    afterEach(function () {
      updatedQueSeOfrece = {};
    });

    it('should respond with the updated queSeOfrece', function () {
      updatedQueSeOfrece.name.should.equal('Updated QueSeOfrece');
      updatedQueSeOfrece.info.should.equal('This is the updated queSeOfrece!!!');
    });
  });

  describe('DELETE /api/que-se-ofreces/:id', function () {

    it('should respond with 204 on successful removal', function (done) {
      (0, _supertest2.default)(app).delete('/api/que-se-ofreces/' + newQueSeOfrece._id).expect(204).end(function (err, res) {
        if (err) {
          return done(err);
        }
        done();
      });
    });

    it('should respond with 404 when queSeOfrece does not exist', function (done) {
      (0, _supertest2.default)(app).delete('/api/que-se-ofreces/' + newQueSeOfrece._id).expect(404).end(function (err, res) {
        if (err) {
          return done(err);
        }
        done();
      });
    });
  });
});
//# sourceMappingURL=que-se-ofrece.integration.js.map

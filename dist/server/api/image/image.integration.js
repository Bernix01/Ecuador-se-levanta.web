'use strict';

var _supertest = require('supertest');

var _supertest2 = _interopRequireDefault(_supertest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = require('../..');


var newImage;

describe('Image API:', function () {

  describe('GET /api/images', function () {
    var images;

    beforeEach(function (done) {
      (0, _supertest2.default)(app).get('/api/images').expect(200).expect('Content-Type', /json/).end(function (err, res) {
        if (err) {
          return done(err);
        }
        images = res.body;
        done();
      });
    });

    it('should respond with JSON array', function () {
      images.should.be.instanceOf(Array);
    });
  });

  describe('POST /api/images', function () {
    beforeEach(function (done) {
      (0, _supertest2.default)(app).post('/api/images').send({
        name: 'New Image',
        info: 'This is the brand new image!!!'
      }).expect(201).expect('Content-Type', /json/).end(function (err, res) {
        if (err) {
          return done(err);
        }
        newImage = res.body;
        done();
      });
    });

    it('should respond with the newly created image', function () {
      newImage.name.should.equal('New Image');
      newImage.info.should.equal('This is the brand new image!!!');
    });
  });

  describe('GET /api/images/:id', function () {
    var image;

    beforeEach(function (done) {
      (0, _supertest2.default)(app).get('/api/images/' + newImage._id).expect(200).expect('Content-Type', /json/).end(function (err, res) {
        if (err) {
          return done(err);
        }
        image = res.body;
        done();
      });
    });

    afterEach(function () {
      image = {};
    });

    it('should respond with the requested image', function () {
      image.name.should.equal('New Image');
      image.info.should.equal('This is the brand new image!!!');
    });
  });

  describe('PUT /api/images/:id', function () {
    var updatedImage;

    beforeEach(function (done) {
      (0, _supertest2.default)(app).put('/api/images/' + newImage._id).send({
        name: 'Updated Image',
        info: 'This is the updated image!!!'
      }).expect(200).expect('Content-Type', /json/).end(function (err, res) {
        if (err) {
          return done(err);
        }
        updatedImage = res.body;
        done();
      });
    });

    afterEach(function () {
      updatedImage = {};
    });

    it('should respond with the updated image', function () {
      updatedImage.name.should.equal('Updated Image');
      updatedImage.info.should.equal('This is the updated image!!!');
    });
  });

  describe('DELETE /api/images/:id', function () {

    it('should respond with 204 on successful removal', function (done) {
      (0, _supertest2.default)(app).delete('/api/images/' + newImage._id).expect(204).end(function (err, res) {
        if (err) {
          return done(err);
        }
        done();
      });
    });

    it('should respond with 404 when image does not exist', function (done) {
      (0, _supertest2.default)(app).delete('/api/images/' + newImage._id).expect(404).end(function (err, res) {
        if (err) {
          return done(err);
        }
        done();
      });
    });
  });
});
//# sourceMappingURL=image.integration.js.map

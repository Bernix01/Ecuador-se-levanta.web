'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var queSeOfreceCtrlStub = {
  index: 'queSeOfreceCtrl.index',
  show: 'queSeOfreceCtrl.show',
  create: 'queSeOfreceCtrl.create',
  update: 'queSeOfreceCtrl.update',
  destroy: 'queSeOfreceCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var queSeOfreceIndex = proxyquire('./index.js', {
  'express': {
    Router: function Router() {
      return routerStub;
    }
  },
  './que-se-ofrece.controller': queSeOfreceCtrlStub
});

describe('QueSeOfrece API Router:', function () {

  it('should return an express router instance', function () {
    queSeOfreceIndex.should.equal(routerStub);
  });

  describe('GET /api/que-se-ofreces', function () {

    it('should route to queSeOfrece.controller.index', function () {
      routerStub.get.withArgs('/', 'queSeOfreceCtrl.index').should.have.been.calledOnce;
    });
  });

  describe('GET /api/que-se-ofreces/:id', function () {

    it('should route to queSeOfrece.controller.show', function () {
      routerStub.get.withArgs('/:id', 'queSeOfreceCtrl.show').should.have.been.calledOnce;
    });
  });

  describe('POST /api/que-se-ofreces', function () {

    it('should route to queSeOfrece.controller.create', function () {
      routerStub.post.withArgs('/', 'queSeOfreceCtrl.create').should.have.been.calledOnce;
    });
  });

  describe('PUT /api/que-se-ofreces/:id', function () {

    it('should route to queSeOfrece.controller.update', function () {
      routerStub.put.withArgs('/:id', 'queSeOfreceCtrl.update').should.have.been.calledOnce;
    });
  });

  describe('PATCH /api/que-se-ofreces/:id', function () {

    it('should route to queSeOfrece.controller.update', function () {
      routerStub.patch.withArgs('/:id', 'queSeOfreceCtrl.update').should.have.been.calledOnce;
    });
  });

  describe('DELETE /api/que-se-ofreces/:id', function () {

    it('should route to queSeOfrece.controller.destroy', function () {
      routerStub.delete.withArgs('/:id', 'queSeOfreceCtrl.destroy').should.have.been.calledOnce;
    });
  });
});
//# sourceMappingURL=index.spec.js.map

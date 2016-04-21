/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/places              ->  index
 * POST    /api/places              ->  create
 * GET     /api/places/:id          ->  show
 * PUT     /api/places/:id          ->  update
 * DELETE  /api/places/:id          ->  destroy
 */

'use strict';

import _ from 'lodash';
import Place from './place.model';

function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      res.status(statusCode).json(entity);
    }
  };
}

function customizer(objValue, srcValue) {
  if (_.isArray(objValue)) {
    return srcValue;
  }
}

function saveUpdates(updates) {
  return function(entity) {
    var updated = _.mergeWith(entity, updates, customizer);
    return updated.save()
      .then(updated => {
        return updated;
      });
  };
}

function removeEntity(res) {
  return function(entity) {
    if (entity) {
      return entity.remove()
        .then(() => {
          res.status(204).end();
        });
    }
  };
}

function handleEntityNotFound(res) {
  return function(entity) {
    if (!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

// Gets a list of Places
export function index(req, res) {
  return Place.find().exec()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets a single Place from the DB
export function show(req, res) {
  return Place.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Creates a new Place in the DB
export function create(req, res) {
  return Place.create(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

// Updates an existing Place in the DB
export function update(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  return Place.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Deletes a Place from the DB
export function destroy(req, res) {
  return Place.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}

/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/images              ->  index
 * POST    /api/images              ->  create
 * GET     /api/images/:id          ->  show
 * PUT     /api/images/:id          ->  update
 * DELETE  /api/images/:id          ->  destroy
 */

'use strict';

import _ from 'lodash';
import Image from './image.model';
import fs from 'fs';

function respondWithResult(res, err, files, statusCode) {
  statusCode = statusCode || 200;
  console.log(
    files
  );
      res.status(statusCode).json(files).end();
}

function saveUpdates(updates) {
  return function(entity) {
    var updated = _.merge(entity, updates);
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

// Gets a list of Images
export function index(req, res) {
  return fs.readdir('../client/assets/images/gallery/', function(err, files) {
    if (err) {
      console.log(err);
      return respondWithResult(res, err, files, 500);
    }
    console.log(files.length);
    return respondWithResult(res, err, files);
  });
}

// Gets a single Image from the DB
export function show(req, res) {
  return Image.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Creates a new Image in the DB
export function create(req, res) {
  return Image.create(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

// Updates an existing Image in the DB
export function update(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  return Image.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Deletes a Image from the DB
export function destroy(req, res) {
  return Image.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}

const jobState = require('../services/jobState.service.js');

async function read(req, res, next) {
  try {
    res.status(200).send(await jobState.read(req.params.id, req.query));
  } catch (err) {
    console.error(`Error while getting jobState`, err.message);
    next(err);
  }
}

async function create(req, res, next) {
  try {
    res.status(201).send(await jobState.create(req.body));
  } catch (err) {
    console.error(`Error while creating jobState`, err.message);
    next(err);
  }
}

async function update(req, res, next) {
  try {
    res.status(201).send(await jobState.update(req.body));
  } catch (err) {
    console.error(`Error while updating jobState`, err.message);
    next(err);
  }
}
async function remove(req, res, next) {
  try {
    res.status(201).send(await jobState.remove(req.params.id));
  } catch (err) {
    console.error(`Error while deleting jobState`, err.message);
    next(err);
  }
}

module.exports = {
  read,
  create,
  update,
  remove,
};
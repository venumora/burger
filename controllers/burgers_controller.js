const Express = require('express');
const Burger = require('../models/burger');

const Controller = function(app) {
  app.get('/', function(req, res) {
    Burger.selectAll(res);
  });

  app.get('/error', function(req, res) {
    response.render('error');
  });

  app.post('/burgers/create', function(req, res) {
    Burger.insertOne(req.body.name, req.body.devoured || 0, res);
  });

  app.post('/burgers/update/:col', function(req, res) {
    if (req.params.col === 'name') {
      Burger.updateName(req.body.name, req.body.id, res);
    } else if (req.params.col === 'devoured') {
      Burger.updateDevoured(req.body.devoured, req.body.id, res);
    } else {
        res.redirect('/');
    }
  });
};

module.exports = Controller;

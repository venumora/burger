const Express = require('express');
const MethodOverride = require('method-override');
const BodyParser = require('body-parser');
const exphbs = require("express-handlebars");
const Controller = require('./controllers/burgers_controller');

const App = Express();
const PORT = process.env.PORT || 8080;

// Sets up the Express App to handle data parsing
// parse Application/x-www-form-urlencoded
App.use(BodyParser.urlencoded({extended: false}));
// parse Application/json
App.use(BodyParser.json());

// Set Handlebars as the default templating engine.
App.engine("handlebars", exphbs({ defaultLayout: "main" }));
App.set("view engine", "handlebars");

// Static directory to be served
App.use(Express.static('public'));

Controller(App);

// Starts the server to begin listening
// =============================================================
App.listen(PORT, function() {
  console.log('App listening on PORT ' + PORT);
});
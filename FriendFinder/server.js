// setup variables for express, body-parser, and path... we will need to npm install these.
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// create an execution for express server
var app = express();

// set up port for 7580 or environment port...whichever one it listens to
var PORT = process.env.PORT || 7580;

// create app usage and data handling
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// route the server to files
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// create process for starting server... log the result
app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT);
});
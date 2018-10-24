// need to include path package to get correct file path
var path = require("path");

// directing path to correct file
module.exports = function(app){

    app.get("/survey", function(req, res){
        res.sendFile(path.join(_dirname, "../public/survey.html"));
    });

    app.get("/home", function(req, res){
        res.sendFile(path.join(_dirname, "../public/home.html"));
    });

// create default path to home
    app.get("*", function(req, res){
        res.sendFile(path.join(_dirname, "../public/home.html"));
    });
};
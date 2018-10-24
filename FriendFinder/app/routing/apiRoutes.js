// link routes to data sources
var findFriends = require("../data/friends");

module.exports = function(app){

// create get request
    app.get("/api/friends", function(req, res){
        res.json(findFriends);
    });

// create post request
    app.post("/api/friends", function(req, res) {
// not sure how to post this route
    })
}
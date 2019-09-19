
var friendData = require("../app/data/friend");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friendData);
    });
}


  // API POST Requests
app.post("/api/friends", function (req, res) {
    friendData.findAll({}).then(function (results) {
        res.json(results);
    });
});

   
    
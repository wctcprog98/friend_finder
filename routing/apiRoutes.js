
var friendData = require("../app/data/friend");

module.exports = function (app) {
    app.get("/api/friend", function (req, res) {
        res.json(friendData);
        // API POST Requests
    });
    app.post("/api/friend", function (req, res) {
        friendData.findAll({}).then(function (results) {
            res.json(results);
        });
    });
}

   
    
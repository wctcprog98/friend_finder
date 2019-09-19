// Dependencies
// ===========================================================
var express = require("express");
var app = express();
//setup for Heroku 
var PORT = process.env.PORT || 8080; 

// Routes
// ===========================================================
app.get("/", function(req, res) {
  res.send("Welcome to the Star Wars Page!");
});

app.get("/survey", function(req, res) {
  res.json(yoda);
});

// Listener
// ===========================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});


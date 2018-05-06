// Dependencies //
// ============ //
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Set up Express app //
// ================== //
var app = express();
var PORT = process.env.PORT || 3000;

// Set up body parser //
// ================== //
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

// Make sure CSS file from public can be accessed //
// ============================================== //
app.use(express.static('./app/public'));

// Require routing JS files //
// ======================== // 
require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);

// Start up server //
// =============== //
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT)
});
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

var app = express();
var port = 3000;

//Required 3 packages for this project - express, method-override and body-parser.

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + "/public"));
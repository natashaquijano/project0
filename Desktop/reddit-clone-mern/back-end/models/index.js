var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/mydb");

module.exports.TextPost = require("./textPost");
module.exports.Comment = require("./comment");

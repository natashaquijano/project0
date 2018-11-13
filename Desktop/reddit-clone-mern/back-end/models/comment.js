// Add your comment model here
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema ({
  content: String,
  votes: Number
})

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
module.exports.Schema =  commentSchema;

// Add your textPost model here
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Comment = require('./comment');

const textPostSchema = new Schema ({
  title: String,
  content: String,
  thumbnail_image_url: String,
  votes: Number,
  comments: [Comment.Schema]
})
const TextPost = mongoose.model('TextPost', textPostSchema);

module.exports = TextPost;

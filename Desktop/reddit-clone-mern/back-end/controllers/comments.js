const models = require('../models');
const Comment = models.Comment;

const index = (req, res) => {
  models.TextPost.find({_id: req.params.post_id}, (err, textPost) => {
    if (err) {
      res.send(err);
    }else{
      console.log(textPost[0].comments);
    }
    res.json(textPost[0].comments);
  })
}

const show = (req, res) => {
  Comment.find({_id: req.params.comment_id}, (err, comment) => {
    if (err) {
      res.send(err);
    }
    res.json(comment);
  })
}

const create = (req, res) => {
  let newComment = new Comment(req.body);
  console.log(req.body);
  newComment.save();
  models.TextPost.findByIdAndUpdate(req.params.post_id,
    {$push: {comments: newComment}},
    {safe: true, upsert: true, new: true}, (err, textpost) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).send(newComment);
  })
}

const update = (req, res) => {
  Comment.findOne({_id: req.params.comment_id}, (err, comment) => {
    comment.content = req.body.content;
    comment.votes = req.body.votes;
    comment.save((err, saved) => {
      if (err) {
        res.status(500).send(err);
      }
    });
  });
  models.TextPost.findOne({_id: req.params.post_id}, (err, foundPost) => {
    let foundComment = foundPost.comments.id(req.params.comment_id);
    foundComment.content = req.body.content;
    foundComment.votes = req.body.votes;
    foundPost.save((err, saved) => {
      if (err) {
        res.status(500).send(err);
      }
      res.json(foundComment);
    });
  });
}

const destroy = (req, res) => {
  Comment.remove({_id: req.params.comment_id}, (err, comment) => {
    if (err) {
      console.log('error removing comment from db');
      res.status(500).send(err);
    }
  })
  models.TextPost.findOneAndUpdate({ _id: req.params.post_id },
  { $pull: { comments: { _id: req.params.comment_id}}}, (err, model) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).send(model);
  })
}

module.exports.index = index;
module.exports.show = show;
module.exports.create = create;
module.exports.update = update;
module.exports.destroy = destroy;

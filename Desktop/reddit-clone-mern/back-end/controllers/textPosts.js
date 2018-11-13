var models = require('../models');
var TextPost = models.TextPost;

const index = (req, res) => {
  TextPost.find({}, (err, textPosts) => {
    if (err) {
      res.send(err);
    }
    res.json(textPosts);
  });
}

const create = (req, res) => {
  console.log(req.body);
  let newTextPost = new TextPost(req.body);
  newTextPost.save((err, model) => {
    if (err) {
      res.send(err);
    }
    res.json(model)
  });
}

const show = (req, res) => {
  TextPost.find({_id: req.params.post_id}, (err, textPost) => {
    if (err) {
      res.send(err);
    }
    res.json(textPost);
  })
}

const update = (req, res) => {
  TextPost.findOne({_id: req.params.post_id}, (err, textPost) => {
    textPost.title = req.body.title;
    textPost.content = req.body.content;
    textPost.votes = req.body.votes;
    textPost.save((err, saved) => {
      if (err) {
        res.status(500).send(err);
      }
    });
  })
}


const destroy = (req, res) => {
  TextPost.findByIdAndRemove(req.params.post_id, (err, textPost) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).send(textPost);
  });
}

module.exports.index = index;
module.exports.create = create;
module.exports.show = show;
module.exports.update = update;
module.exports.destroy = destroy;

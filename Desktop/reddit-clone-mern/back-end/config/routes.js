const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const textPostsController = require('../controllers/textPosts');
const commentsController = require('../controllers/comments');

router.get('/', (req, res) => {
  res.json('Root Directory of Backend Interface')
})

//TextPost Routes

router.get('/api/posts', textPostsController.index);

router.get('/api/posts/:post_id', textPostsController.show);

router.post('/api/posts', textPostsController.create);

router.put('/api/posts/:post_id', textPostsController.update);

router.delete('/api/posts/:post_id', textPostsController.destroy);

//Comment Routes

router.get('/api/posts/:post_id/comments', commentsController.index);

router.post('/api/posts/:post_id/comments', commentsController.create);

router.get('/api/posts/:post_id/comments/:comment_id', commentsController.show);

router.put('/api/posts/:post_id/comments/:comment_id', commentsController.update);

router.delete('/api/posts/:post_id/comments/:comment_id', commentsController.destroy);

module.exports = router;

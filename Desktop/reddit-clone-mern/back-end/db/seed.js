const db = require ('../models');

let currentDate = new Date()



const testTextPostsList = [
  {
    title: "Post 1",
    content: "I have no imagination, this is the first post",
    votes: 0,
    thumbnail_image_url: "https://www.google.co.in/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
  },
  {
    title: "Second Post",
    content: "This is the second post",
    votes: 0,
    thumbnail_image_url: "https://www.fast-growing-trees.com/images/D/Cold-Hardy-Tea-Plant-3-450W.jpg",
    comments:{
              content: 'test Comment 1',
              votes: 0
            }
  }
]

db.TextPost.remove({}, (err, textposts) => {
  db.TextPost.create(testTextPostsList, (err, textposts) => {
    if (err) {
      return console.log('ERROR ' + err);
    }
    process.exit();
  })
})

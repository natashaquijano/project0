const express = require('express');
const app = express();
const router = require('./config/routes.js');
const bodyParser = require('body-parser');

//uncomment below line for seeding the database for the first run and then comment it again
// const seeder = require('./db/seed');


app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE");
  next();
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);

let port = 4000;

app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});

require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controller');
const massive = require('massive');

const { DATABASE_STRING } = process.env;
const port = 8080;

const app = express();
app.use(bodyParser.json());

massive(DATABASE_STRING)
  .then(db => {
    app.set('db', db);
    console.log('database is connected');
  })
  .catch(err => {
    console.log('database connection error', err);
  })

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
})
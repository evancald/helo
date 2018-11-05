require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controller');
const massive = require('massive');
const cors = require('cors');

const { DATABASE_STRING } = process.env;
const port = 8080;

const app = express();
app.use(cors());
app.use(bodyParser.json());

massive(DATABASE_STRING)
  .then(db => {
    app.set('db', db);
    console.log('database is connected');
  })
  .catch(err => {
    console.log('database connection error', err);
  })

//Endpoints
app.post('/register', controller.register);
app.post('/login', controller.login);
app.get('/posts', controller.getPosts);

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
})
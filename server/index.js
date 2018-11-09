require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controller');
const massive = require('massive');
const session = require('express-session');
const cors = require('cors');

const { DATABASE_STRING, SESSION_SECRET, SERVER_PORT } = process.env;

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(session({
  secret: SESSION_SECRET,
  resave: true,
  saveUninitialized: true
}));

massive(DATABASE_STRING)
  .then(db => {
    app.set('db', db);
    console.log('database is connected');
  })
  .catch(err => {
    console.log('database connection error', err);
  })

//Endpoints
app.post('/api/auth/register', controller.register);
app.post('/api/auth/login', controller.login);
app.get('/api/posts', controller.getPosts);
app.get('/api/post/:postid', controller.getPost);
app.post('/api/post', controller.createPost);
app.post('/api/auth/logout', controller.logout);

app.listen(SERVER_PORT, () => {
  console.log(`app listening on port ${SERVER_PORT}`);
})
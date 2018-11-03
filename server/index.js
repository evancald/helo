const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controller');

const app = express();
app.use(bodyParser.json());

const port = 8080;

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
})
const cors = require('cors')
const express = require('express');
const bodyParser = require('body-parser');
const tintasController = require('./controller/tintasControllers');

const app = express();

app.use(cors());
app.use(bodyParser.json())

app.get('/', tintasController);

module.exports = app;

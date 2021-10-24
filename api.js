const express = require('express');
const bodyParser = require('body-parser');
const tintasController = require('./controller/tintasControllers');

const app = express();

app.use(bodyParser.json())

app.get('/calcularQtdTinta', tintasController);

module.exports = app;

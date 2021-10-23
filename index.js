const app = require('./api');
require('dotenv').config();

const PORT = process.env.PORT || 3000;

app.listen(PORT);
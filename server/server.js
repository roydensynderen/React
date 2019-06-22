const express = require('express');
const bodyParser = require('body-parser');
const PORT = 8080;

// const logger = require('./middleware')

const app = express();
app.use(bodyParser.json());
app.use('/movies', require('./routes/movies'));
// app.use('./actors', require('./routes/actors'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
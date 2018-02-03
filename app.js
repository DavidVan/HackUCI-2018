const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const calculate_calories = require('./routes/calculate_calories');

const index = require('./routes/index'); // Include our index.js file from 'routes' folder.

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public'))); // Expose the 'public' folder.
app.use(express.static(path.join(__dirname, 'semantic/dist'))); // Expose the 'semantic/dist' folder.
app.set('views', path.join(__dirname, 'views')); // Make sure we have the right 'views' folder defined.

app.set('view engine', 'ejs'); // Set view engine to use ejs.

app.use('/', index); // Serve the index page.
app.use('/calculate_calories', calculate_calories);
app.listen(1337);
console.log('Server running on port 1337');

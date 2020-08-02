// Dependencies
const express = require('express');
const app = express();
const db = require('./db/index');
const bodyParser = require('body-parser');

// Environment Variables
const PORT = process.env.PORT || 3000;

// <Middleware
app.use(express.urlencoded( { extended: false}));
app.use(bodyParser.json());


// Connect to Database
db.connect();

// Routes
require('./router/index.js')(app);

// Port Listening
app.listen(PORT, () => {
    console.log('Server started at Port: ', PORT);
});

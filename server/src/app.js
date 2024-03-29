const cookieParser = require('cookie-parser');
const logger = require('morgan');
const express = require('express'); // import the library
const heroRoutes = require('./routes/heroRoutes'); // import the router module
const itemRoutes = require('./routes/itemRoutes'); // import the router module
const iconRoutes = require('./routes/iconRoutes'); // import the router module
const apiRoutes = require('./routes/apiRoutes'); // import the router module

const cors = require('cors');

const app = express(); // create the express object

// server configuration
app.use((err, req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'localhost:3000');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next(err);
});
 
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/heros', heroRoutes); // load the router module
app.use('/items', itemRoutes); // load the router module
app.use('/icons', iconRoutes); 
app.use('/api', apiRoutes); // load the api router module

module.exports = app

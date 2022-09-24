const mongoose = require('mongoose');
require('dotenv').config()

// Connect to the database
const CONNECTION_URL = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.yphipax.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;


mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Successfully connected to the database'))
  .catch(err => console.log(err))
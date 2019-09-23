require('dotenv').config();
const mongoose = require('mongoose');
const Test = require('../models/Test');

mongoose

  .connect('mongodb://localhost/airbnb', {useNewUrlParser: true})
  .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
  .catch(err => console.error('Error connecting to mongo', err));

// const test = [
//  {
//   first_name: "Cole",
//   last_name: "Mooney"
//  }
// ]

// Test.create(test);
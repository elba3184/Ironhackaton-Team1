const mongoose = require('mongoose');
const Schema = mongoose.Schema

const testSchema = new Schema({
   first_name: String,
   last_name: String,
});

const Test = mongoose.model('Test', testSchema);
module.exports = Test;
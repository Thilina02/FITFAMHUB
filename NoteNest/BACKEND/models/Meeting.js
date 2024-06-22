// models/Meeting.js
const mongoose = require('mongoose');

const meetingSchema = new mongoose.Schema({
  description: String,
  date: Date,
  time: String,
  venue: String,
  link: String,
  preparationRequirements: String
});

module.exports = mongoose.model('Meeting', meetingSchema);

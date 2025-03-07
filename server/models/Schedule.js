// server/models/Schedule.js
const mongoose = require('mongoose');

const scheduleSchema = new mongoose.Schema({
  class: { type: mongoose.Schema.Types.ObjectId, ref: 'Class' },
  day: { type: String, enum: ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi'], required: true },
  time: { type: String, required: true },
  course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
});

module.exports = mongoose.model('Schedule', scheduleSchema);
// server/models/Attendance.js
const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  date: { type: Date, required: true },
  present: { type: Boolean, default: true },
});

module.exports = mongoose.model('Attendance', attendanceSchema);
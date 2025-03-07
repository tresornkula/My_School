// server/models/Sanction.js
const mongoose = require('mongoose');

const sanctionSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  reason: { type: String, required: true },
  date: { type: Date, required: true },
});

module.exports = mongoose.model('Sanction', sanctionSchema);
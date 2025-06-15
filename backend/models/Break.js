const mongoose = require('mongoose');

const breakSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  reason: { type: String },
  duration: { type: Number, required: true }, // in minutes
  takenAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Break', breakSchema);

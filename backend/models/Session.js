const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  type: { type: String, enum: ['Work', 'Short Break', 'Long Break'], required: true },
  duration: { type: Number, required: true }, // in minutes
  startedAt: { type: Date, required: true },
  endedAt: { type: Date },
  completed: { type: Boolean, default: false }
});

module.exports = mongoose.model('Session', sessionSchema);

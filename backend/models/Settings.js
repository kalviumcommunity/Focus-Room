const mongoose = require('mongoose');

const settingsSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  workDuration: { type: Number, default: 25 },
  shortBreak: { type: Number, default: 5 },
  longBreak: { type: Number, default: 15 },
  autoStartBreaks: { type: Boolean, default: false },
  sound: { type: Boolean, default: true }
});

module.exports = mongoose.model('Settings', settingsSchema);

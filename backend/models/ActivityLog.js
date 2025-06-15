const mongoose = require('mongoose');

const activityLogSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  action: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
  metadata: { type: Object }
});

module.exports = mongoose.model('ActivityLog', activityLogSchema);

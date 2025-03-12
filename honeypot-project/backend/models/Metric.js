const mongoose = require('mongoose');

const MetricSchema = new mongoose.Schema({
  cpu: { type: Number, required: true },
  memory: { type: Number, required: true },
  network: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Metric', MetricSchema);
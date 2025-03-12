const Metric = require('../models/Metric');
const { broadcastMetrics } = require('../server');

// Fetch all metrics
exports.getMetrics = async (req, res) => {
  try {
    const metrics = await Metric.find();
    res.json(metrics);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching metrics', error: err });
  }
};

// Create new metrics
exports.createMetrics = async (req, res) => {
  try {
    const newMetrics = new Metric(req.body);
    await newMetrics.save();

    // Broadcast new metrics to WebSocket clients
    broadcastMetrics(newMetrics);

    res.status(201).json(newMetrics);
  } catch (err) {
    res.status(500).json({ message: 'Error creating metrics', error: err });
  }
};
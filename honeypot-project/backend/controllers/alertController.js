const Alert = require('../models/Alert');

// Fetch all alerts
exports.getAlerts = async (req, res) => {
  try {
    const alerts = await Alert.find();
    res.json(alerts);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching alerts', error: err });
  }
};

// Create a new alert
exports.createAlert = async (req, res) => {
  try {
    const newAlert = new Alert(req.body);
    await newAlert.save();
    res.status(201).json(newAlert);
  } catch (err) {
    res.status(500).json({ message: 'Error creating alert', error: err });
  }
};
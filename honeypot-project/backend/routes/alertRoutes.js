const express = require('express');
const { getAlerts, createAlert } = require('../controllers/alertController');
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');

const router = express.Router();

// Only admins and analysts can view alerts
router.get('/', authMiddleware, roleMiddleware(['admin', 'analyst']), getAlerts);

// Only admins can create alerts
router.post('/', authMiddleware, roleMiddleware(['admin']), createAlert);

module.exports = router;
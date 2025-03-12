const express = require('express');
const { getMetrics } = require('../controllers/metricController');
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');

const router = express.Router();

// Only admins and analysts can view metrics
router.get('/', authMiddleware, roleMiddleware(['admin', 'analyst']), getMetrics);

module.exports = router;
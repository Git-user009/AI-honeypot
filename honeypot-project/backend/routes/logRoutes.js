const express = require('express');
const { getLogs, deleteLog } = require('../controllers/logController');
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');

const router = express.Router();

// Only admins and analysts can view logs
router.get('/', authMiddleware, roleMiddleware(['admin', 'analyst']), getLogs);

// Only admins can delete logs
router.delete('/:logId', authMiddleware, roleMiddleware(['admin']), deleteLog);

module.exports = router;
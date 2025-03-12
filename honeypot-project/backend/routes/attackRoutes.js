const express = require('express');
const router = express.Router();

// Define /api/attacks route
router.get('/', (req, res) => {
  const attackData = [
    { id: 1, type: 'DDoS', source: '192.168.1.1', target: '10.0.0.1', timestamp: new Date() },
    { id: 2, type: 'SQLi', source: '192.168.1.2', target: '10.0.0.2', timestamp: new Date() },
  ];
  res.json(attackData);
});

module.exports = router;
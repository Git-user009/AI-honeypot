// Load environment variables from .env file
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const { connectDB } = require('./config/db');
const logRoutes = require('./routes/logRoutes');
const authRoutes = require('./routes/authRoutes');
const errorHandler = require('./utils/errorHandler');

const app = express();
const attackRoutes = require('./routes/attackRoutes'); // Import attack routes


// Middleware
app.use(cors()); // Enable CORS for cross-origin requests
app.use(express.json()); // Parse incoming JSON requests

// Routes
app.use('/api/logs', logRoutes); // Mount log-related routes
app.use('/api/auth', authRoutes); // Mount authentication routes
app.use('/api/attacks', attackRoutes); // Mount attack-related routes

// Add /api/attacks route
app.get('/api/attacks', (req, res) => {
    const attackData = [
      { id: 1, type: 'DDoS', source: '192.168.1.1', target: '10.0.0.1', timestamp: new Date() },
      { id: 2, type: 'SQLi', source: '192.168.1.2', target: '10.0.0.2', timestamp: new Date() },
    ];
    res.json(attackData);
  });
  

// Error handling middleware
app.use(errorHandler);

// Connect to database
connectDB();

module.exports = app;
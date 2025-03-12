const WebSocket = require('ws');
const app = require('./app'); // Load Express app
const PORT = process.env.PORT || 5000;

// Start HTTP server
const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// WebSocket server
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
  console.log('New client connected');

  ws.on('close', () => {
    console.log('Client disconnected');
  });
});

// Function to broadcast metrics to all connected clients
const broadcastMetrics = (metrics) => {
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify(metrics));
    }
  });
};

module.exports = { server, broadcastMetrics };

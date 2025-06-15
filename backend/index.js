// index.js

const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Root GET endpoint
app.get('/', (req, res) => {
  res.send('Focus Room API is running');
});

// GET endpoint for available modes
app.get('/modes', (req, res) => {
  res.json({
    modes: [
      { name: 'Work', duration: 25 },
      { name: 'Short Break', duration: 5 },
      { name: 'Long Break', duration: 15 }
    ]
  });
});

// POST endpoint for session data
app.post('/sessions', (req, res) => {
  const { mode, duration } = req.body;

  if (!mode || !duration) {
    return res.status(400).json({ message: 'Missing mode or duration' });
  }

  // Simulate saving to database
  res.status(201).json({
    message: 'Session created successfully',
    session: { mode, duration }
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Focus Room backend running at http://localhost:${PORT}`);
});

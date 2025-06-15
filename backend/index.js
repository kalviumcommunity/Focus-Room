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

// POST endpoint to simulate creating a session
app.post('/sessions', (req, res) => {
  const { mode, duration } = req.body;

  if (!mode || !duration) {
    return res.status(400).json({ message: 'Missing mode or duration' });
  }

  // Simulate saving session
  res.status(201).json({
    message: 'Session created successfully',
    session: { mode, duration }
  });
});

// PUT endpoint to simulate updating a session by ID
app.put('/sessions/:id', (req, res) => {
  const { id } = req.params;
  const { mode, duration } = req.body;

  if (!mode || !duration) {
    return res.status(400).json({ message: 'Missing mode or duration' });
  }

  // Simulate updating session
  res.status(200).json({
    message: `Session with ID ${id} updated successfully`,
    updatedSession: { id, mode, duration }
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Focus Room backend running at http://localhost:${PORT}`);
});

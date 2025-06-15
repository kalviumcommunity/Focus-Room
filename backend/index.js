// index.js

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Session = require('./models/Session');

const app = express();
const PORT = 3000;

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB connected'))
.catch((err) => console.error('❌ MongoDB connection failed:', err));

// Middleware
app.use(cors());
app.use(express.json());

// Root route
app.get('/', (req, res) => {
  res.send('Focus Room API is running');
});

// Modes endpoint
app.get('/modes', (req, res) => {
  res.json({
    modes: [
      { name: 'Work', duration: 25 },
      { name: 'Short Break', duration: 5 },
      { name: 'Long Break', duration: 15 }
    ]
  });
});

// Get all sessions
app.get('/sessions', async (req, res) => {
  try {
    const sessions = await Session.find();
    res.status(200).json(sessions);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch sessions', error: err });
  }
});

// Create a session
app.post('/sessions', async (req, res) => {
  const { userId, type, duration, startedAt, endedAt, completed } = req.body;

  if (!userId || !type || !duration || !startedAt) {
    return res.status(400).json({ message: 'Missing required session fields' });
  }

  try {
    const newSession = new Session({ userId, type, duration, startedAt, endedAt, completed });
    const saved = await newSession.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ message: 'Failed to create session', error: err });
  }
});

// Update session by ID
app.put('/sessions/:id', async (req, res) => {
  const { id } = req.params;
  const { type, duration, startedAt, endedAt, completed } = req.body;

  try {
    const updated = await Session.findByIdAndUpdate(
      id,
      { type, duration, startedAt, endedAt, completed },
      { new: true }
    );
    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ message: 'Failed to update session', error: err });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Focus Room backend running at http://localhost:${PORT}`);
});

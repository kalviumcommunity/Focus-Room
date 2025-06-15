const express = require('express');
const app = express();
const PORT = 3000;

// Root GET route
app.get('/', (req, res) => {
  res.send('Focus Room API is running');
});

// Timer modes route
app.get('/modes', (req, res) => {
  res.json([
    { id: 1, name: 'Work', duration: 25 },
    { id: 2, name: 'Short Break', duration: 5 },
    { id: 3, name: 'Long Break', duration: 15 }
  ]);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

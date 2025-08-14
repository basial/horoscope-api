const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Load horoscopes from file
const horoscopes = JSON.parse(fs.readFileSync('horoscopes.json', 'utf8'));

app.use(cors());

// Root endpoint
app.get('/api', (req, res) => {
  res.send('Polish Horoscope API is running! Use /api/horoscope?tone=rude|dramatic|motivational');
});

// Horoscope endpoint
app.get('/api/horoscope', (req, res) => {
  const tone = req.query.tone || 'rude';

  if (!horoscopes[tone]) {
    return res.status(400).json({ error: 'Invalid tone. Use rude, dramatic, or motivational.' });
  }

  const messages = horoscopes[tone];
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];

  res.json({
    tone,
    message: randomMessage
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});

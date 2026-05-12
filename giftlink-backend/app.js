const express = require('express');
const cors = require('cors');
const pinoHttp = require('pino-http');

const connectToDatabase = require('./models/db');
const giftRoutes = require('./routes/giftRoutes');
const searchRoutes = require('./routes/searchRoutes');

const app = express();
const PORT = process.env.PORT || 3060;

app.use(cors());
app.use(express.json());
app.use(pinoHttp());

app.use('/api/gifts', giftRoutes);
app.use('/api/search', searchRoutes);

app.get('/', (req, res) => {
  res.send('GiftLink Backend API is running');
});

app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);

  try {
    await connectToDatabase();
    console.log('Connected to DB');
  } catch (error) {
    console.error('Database connection failed:', error.message);
  }
});

module.exports = app;
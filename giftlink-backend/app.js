const express = require('express');
const cors = require('cors');
const pino = require('pino');
const pinoHttp = require('pino-http');

const giftRoutes = require('./routes/giftRoutes');
const searchRoutes = require('./routes/searchRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();
const logger = pino();

const PORT = process.env.PORT || 3060;

// Middleware
app.use(cors());
app.use(express.json());
app.use(pinoHttp({ logger }));

// Routes
app.use('/api/gifts', giftRoutes);
app.use('/api/search', searchRoutes);
app.use('/api/auth', authRoutes);

// Health check route
app.get('/', (req, res) => {
  res.send('GiftLink Backend API is running');
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    error: `Cannot ${req.method} ${req.originalUrl}`,
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

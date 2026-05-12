const express = require('express');
const router = express.Router();
const connectToDatabase = require('../models/db');

router.get('/', async (req, res) => {
  try {
    const db = await connectToDatabase();

    const { category, condition, age_years, name } = req.query;

    const query = {};

    if (category) {
      query.category = { $regex: category, $options: 'i' };
    }

    if (condition) {
      query.condition = { $regex: condition, $options: 'i' };
    }

    if (age_years) {
      query.age_years = Number(age_years);
    }

    if (name) {
      query.name = { $regex: name, $options: 'i' };
    }

    const gifts = await db.collection('gifts').find(query).toArray();

    res.json(gifts);
  } catch (error) {
    console.error('Error searching gifts:', error);
    res.status(500).json({ error: 'Failed to search gifts' });
  }
});

module.exports = router;
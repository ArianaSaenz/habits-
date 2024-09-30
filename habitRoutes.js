const express = require('express');
const router = express.Router();
const Habit = require('./Habit');

router.post('/habits', async (req, res) => {
  const habit = await Habit.create(req.body);
  res.status(201).json(habit);
});

module.exports = router;

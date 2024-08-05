const express = require('express');
const router = express.Router();
const User = require('../../config/models/User');
const { body, validationResult } = require('express-validator');

//  Route   post  api/users
//  Desc    Register user
//  Access  Public

router.post('/', async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const { id, isReady } = req.body;
    console.log("type ", isReady);


    const user = await User.findOneAndUpdate(
      { _id: id },
      { ReadyForBlood: isReady },
      { new: true, runValidators: true }
    )
    // Save to the database
    console.log("USER", user);
    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;

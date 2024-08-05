const express = require('express');
const router = express.Router();
const mid = require('../../middleware/mid');
const User = require('../../config/models/User');
const jwt = require('jsonwebtoken');

const config = require('config');
const bcrypt = require('bcryptjs');
const { body, validationResult } = require('express-validator');
router.get('/', mid, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    console.log(err);
    res.status(500).send('Server Error');
  }
});

//  Route   post  api/users
//  Desc    Authenticate user
//  Access  Public

router.post(
  '/',
  // Name and pass the second parameter as a custom error message
  [
    body('email', 'Please include a valid email').isEmail(),
    body('password', 'Password is required').exists()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    console.log(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    try {
      //     // see if user exits

      let user = await User.findOne({ email });
      if (!user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Invalid Credentials ' }] });
      }
      // if(password!=user.password)
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Invalid Credentials ' }] });
      }
      const payload = {
        user: { id: user.id }
      };
      // req.session.user = {
      //   username: user.userName,
      //   // Other user information you want to store
      // };

      jwt.sign(
        payload,
        config.get('jwtSecret'),
        // { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);
//  Route   post  api/profile/github/:username
//  Desc    get user repos from Github
//  Access  Public

module.exports = router;

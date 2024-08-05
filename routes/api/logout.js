const express = require('express');
const router = express.Router();
const mid = require('../../middleware/mid');
const User = require('../../config/models/User');
const jwt = require('jsonwebtoken');

const config = require('config');
const bcrypt = require('bcryptjs');
const { body, validationResult } = require('express-validator');

//  Route   post  api/users
//  Desc    Authenticate user
//  Access  Public

router.post('/', mid, async (req, res) => {
  console.log('USER is here ', req);
  const { id } = req.user;
  try {
    //     // see if user exits
    // let user = await User.findOne({ email });
    // if (!user) {
    //   return res
    //     .status(400)
    //     .json({ errors: [{ msg: 'Invalid Credentials ' }] });
    // }
    // user
    //   .updateOne({ email: email }, { isLogin: false })
    //   .then((res) => {
    //     console.log('Logout successfully!');
    //     return res.status(200).json({ msg: 'Logout successfully!' });
    //   })
    //   .catch((err) => {
    //     console.log('error while updating', err);
    //   });

    // Logout can be handled on the client side by simply removing the token.
    // Optionally you can maintain a list of blacklisted tokens on the server.
    res.send('Logout successful');

  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});
//  Route   post  api/profile/github/:username
//  Desc    get user repos from Github
//  Access  Public

module.exports = router;

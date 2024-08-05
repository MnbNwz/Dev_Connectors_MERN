const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
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
    const { id, UserName, Amount, FamilyM, Phone, Cnic, Business, Hospital, Disease, City, HospitalPhone, DOB, InsName, BloodGroup, type } = req.body;
    console.log("type ", type);

    let updates;
    if (type === 'rashanR') {
      updates = {
        type: type,
        userName: UserName,//
        amount: Amount,//
        familyM: FamilyM,//
        phone: Phone,//
        cnic: Cnic,//
        business: Business,//
      };
    } else if (type === 'medicineR') {
      updates = {
        type: type,
        userName: UserName,//
        amount: Amount,//
        phone: Phone,//
        hospital: Hospital,//
        disease: Disease,//
        city: City,//
        hospitalPhone: HospitalPhone,//
      };
    } else if (type === 'educationR') {
      updates = {
        type: type,
        userName: UserName,//
        amount: Amount,//
        phone: Phone,//
        cnic: Cnic,//
        business: Business,//
        city: City,//
        dOB: DOB,//
        insName: InsName,//
      };
    } else if (type === 'bloodR') {
      updates = {
        type: type,
        userName: UserName,
        phone: Phone,
        cnic: Cnic,
        hospital: Hospital,
        disease: Disease,
        city: City,
        bloodGroup: BloodGroup,
      };
    } else {
      updates = {};
    }


    const NewRecord = {
      $push: { MyRequest: updates },
    };

    const user = await User.findOneAndUpdate(
      { _id: id },
      NewRecord,
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

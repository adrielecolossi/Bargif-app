const { validationResult } = require('express-validator/check');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/user');

exports.login = (req, res) => { //email,id
  const email = req.body.email;
  const password = req.body.password;
  let loadedUser;

  //loadedUSer = user
  //compara senhas

 /*
      const token = jwt.sign(
        {
          email: loadedUser.email,
          userId: loadedUser._id.toString()
        },
        'somesupersecretsecret',
        { expiresIn: '1h' }
      );

      res.status(200).json({ token: token});
*/
    };

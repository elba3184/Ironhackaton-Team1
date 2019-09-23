const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/signup', (req, res, next) => {
  res.render('users/signup');
});

router.get('/login', (req, res, next) => {
    res.render('users/login');
  });

module.exports = router;

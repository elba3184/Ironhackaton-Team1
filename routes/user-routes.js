const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/signup', (req, res, next) => {
  res.render('user-views/signup');
});

router.get('/login', (req, res, next) => {
    res.render('user-views/login');
  });

module.exports = router;

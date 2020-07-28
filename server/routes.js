const express = require('express');
const router = express.Router();
const User = require('./models/User');
const passport = require('./passport');

const authController = require('./controllers/authController');

router.get('/', authController.getCurrentUser);
router.post('/', authController.checkAlreadyRegistered, authController.registerUser);
// router.post('/login', authController.logBody, authController.login);
router.post('/logout', authController.logoutUser);

router.post(
  '/login',
  function (req, res, next) {
      console.log('routes/user.js, login, req.body: ');
      console.log(req.body)
      next()
  },
  passport.authenticate('local'),
  (req, res) => {
      console.log('logged in', req.user);
      var userInfo = {
          username: req.user.username
      };
      res.send(userInfo);
  }
)

module.exports = router;
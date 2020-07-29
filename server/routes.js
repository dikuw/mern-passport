const express = require('express');
const router = express.Router();
const User = require('./models/User');
const passport = require('./passport');

const authController = require('./controllers/authController');

router.get('/', authController.getCurrentUser);
router.post('/', authController.checkAlreadyRegistered, authController.registerUser);
router.post('/login', passport.authenticate('local'), authController.login);
router.post('/logout', authController.logoutUser);

module.exports = router;
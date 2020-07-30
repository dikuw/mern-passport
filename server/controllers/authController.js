const mongoose = require('mongoose');
const User = require('../models/User');

exports.getCurrentUser = (req, res) => {
  console.log('current user: ', req.user);
  if (req.user) {
    res.json({ user: req.user });
  } else {
    res.json({ user: null });
  };
};

exports.checkAlreadyRegistered = async (req, res, next) => {
  console.log('Check for existing user', req.body);
  console.log('req.body', req.body);
  const { username } = req.body;
  const registered = await User.find({ username: username });
  if (registered[0] && registered[0]._id) {
    res.json({ error: `Sorry, already a user with the username: ${username}` });
    return;
  }
  next();
}

exports.registerUser = async (req, res, next) => {
  console.log(' register user');
  const { username, password } = req.body;
  const newUser = await (new User({ username, password })).save();
  next();
  // newUser.save((err, savedUser) => {
  //   if (err) return res.json(err);
  //   res.json(savedUser);
  // });
};

exports.logBody = (req, res, next) => {
  console.log('logBody: req.body: ', req.body);
  next();
};

exports.login = (req, res) => {
  var userInfo = { username: req.user.username };
  res.send(userInfo);
};

exports.logoutUser = (req, res) => {
  if (req.user) {
    req.logout();
    res.send({ msg: 'logging out' });
  } else {
    res.send({ msg: 'no user to log out' })
  };
};
var assert = require('assert');

var User = function(args) {
  assert.ok(args.email, 'Email is required');

  var user = {};

  user.email = args.email;
  user.createdAt = args.createdAt || new Date();

  return user;
};

module.exports = User;

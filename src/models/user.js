import assert from 'assert';

export default function(args) {
  assert.ok(args.email, 'Email is required');

  let user = {};

  user.email = args.email;
  user.createdAt = args.createdAt || new Date();

  return user;
};
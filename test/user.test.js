import assert from 'assert';
import User from '../src/models/user';

describe('User', () => {
  let user = {};

  before(() => {
    user = new User({
      email: 'test@test.com'
    });
  });

  it('Email is test@test.com', () => {
    assert.equal(user.email, 'test@test.com');
  });

  it('Has created date', () => {
    assert(user.createdAt);
  });
});
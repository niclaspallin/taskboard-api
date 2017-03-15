import assert from 'assert';
import categoryService from '../src/services/categoryService';

describe('Category', () => {

  it('returns all categories', () => {
    return categoryService.all()
      .then(categories => {
        assert(categories.length > 0, 'length > 0');
      });
  });

  it('returns category of id 1', () => {
    return categoryService.find(1)
      .then(category => {
        assert.equal(category.id, 1);
      });
  });

});
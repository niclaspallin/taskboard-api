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

  it('creates a new category', () => {
    return categoryService.create({name: 'New cat'})
      .then(newCat => {
        assert.equal(newCat.name, 'New cat');
      });
  });

  it('updates category with id of 1', () => {
    return categoryService.update(1, {name: 'updated cat'})
      .then(updateCount => {
        assert.equal(updateCount, 1);
      });
  });

});
import {API_ROOT} from '../store/constants';
import knex from '../db';

export default (() => {
  let getCategories = () => {
    return knex.select(['id', 'name'])
      .from('category')
      .then(categories => {
        return categories.map(cat => {
          cat._link = API_ROOT + cat.id;
          return cat;
        });
      });
  };

  let getCategory = id => {
    return knex.select(['id', 'name'])
      .from('category')
      .where('id', id)
      .then(categories => categories[0]);
  };

  return {
    all: getCategories,
    find: getCategory
  };
})();
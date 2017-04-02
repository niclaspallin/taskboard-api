import { API_ROOT } from '../constants';
import knex from '../db';

let _defaultSelect = ['id', 'name'];

class Category {

  constructor(category) {
    this.data = category;
  }

  create() {
    return knex.insert(this.data).into('category')
      .then(id => Category.findById(id));
  }

  update(id) {
    return knex('task').update(this.data)
      .where('id', id);
  }
}

Category.all = () => {
  return knex.select(_defaultSelect)
    .from('category')
    .then(categories => {
      return categories;
    })
    .each(cat => {
      cat._link = API_ROOT + cat.id;
    });
};

Category.findById = (id) => {
  return knex.select(_defaultSelect)
    .from('category')
    .where('id', id)
    .then(result => result[0]);
};

export default Category;
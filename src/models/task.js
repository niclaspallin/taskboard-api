import knex from '../db';
import { API_ROOT } from '../constants';

let _defaultSelect = ['id', 'name', 'completed', 'starts_at', 'ends_at', 'updated_at', 'category_id'];

class Task {

  constructor(task) {
    this.data = task;
  }

  create() {
   return knex.insert(this.data)
      .into('task')
      .then(result => Task.findById(result[0]));
  }

  update(id) {
    return knex('task')
      .update(this.data)
      .where('id', id)
      .then(() => Task.findById(id));
  }
}

Task.all = () => {
  return knex.select(_defaultSelect)
    .from('task')
    .then(tasks => tasks)
    .each(task => {
      task._link = API_ROOT + task.id;
    });
};

Task.findById = id => {
  return knex.select(_defaultSelect)
    .where('id', id)
    .limit(1)
    .from('task')
    .then(result => result[0]);
};

Task.delete = id => {
  return knex('task')
    .where('id', id)
    .del();
};

export default Task;
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
      .then(id => {
        return Task.findById(id);
      });
  }

  update(id) {
    return knex('task')
      .update(this.data)
      .where('id', id);
  }
}

Task.all = () => {
  return knex.select(_defaultSelect)
    .from('task')
    .then(tasks => {
      return tasks;
    })
    .each(task => {
      task._link = API_ROOT + task.id;
    });
};

Task.findById = id => {
  return knex.select()
    .where('id', id)
    .limit(1)
    .from('task')
    .then(result => result[0]);
};

export default Task;
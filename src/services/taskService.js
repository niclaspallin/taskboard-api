import {API_ROOT} from '../store/constants';
import knex from '../db';

export default (() => {
  let getTasks = () => {
    return knex.select(['id', 'name', 'completed', 'starts_at', 'updated_at', 'category_id'])
      .from('task')
      .then(tasks => {
        return tasks.map(task => {
          task._link = API_ROOT + task.id;
          return task;
        });
      });
  };

  let getTask = id => {
    return knex.select()
      .where('id', id)
      .limit(1)
      .from('task');
  };

  return {
    getTasks: getTasks,
    getTask: getTask
  };
})();
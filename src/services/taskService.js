import {
  tasks
} from '../store/mockData';
import {
  API_ROOT
} from '../store/constants';

module.exports = (function() {
  let getTasks = () => {
    tasks.forEach(task => {
      task._link = API_ROOT + task.id;
    });
    return tasks;
  };

  let getTask = id => tasks.filter(function(task) {
    return task.id === id;
  })[0];

  return {
    getTasks: getTasks,
    getTask: getTask
  };
})();
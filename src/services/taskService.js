import Task from '../models/task';

export default (() => {
  
  let all = () => {
    return Task.all();
  };

  let find = (id) => {
    return Task.findById(id);
  };

  let create = (data, ) => {
    let task = new Task(data);
    return task.create();
  };

  let update = (id, data) => {
    let task = new Task(data);
    return task.update(id);
  };

  return {
    all,
    find,
    create,
    update
  };
})();
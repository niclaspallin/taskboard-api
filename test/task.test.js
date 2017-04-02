import assert from 'assert';
import taskService from '../src/services/taskService';

describe('Task', () => {

  it('returns all tasks', () => {
    return taskService.all()
      .then(tasks => {
        assert(tasks.length > 0, 'length > 0');
      });
  });

  it('returns task of id 1', () => {
    return taskService.find(1)
      .then(task => {
        assert.equal(task.id, 1);
      });
  });

  it('creates a new task', () => {
    return taskService.create({name: 'New task'})
      .then(newTask => {
        assert.equal(newTask.name, 'New task');
      });
  });

  it('updates task with id of 1', () => {
    return taskService.update(1, {name: 'updated task'})
      .then(updateCount => {
        assert.equal(updateCount, 1);
      });
  });

});
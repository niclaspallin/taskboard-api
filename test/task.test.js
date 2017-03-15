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

});
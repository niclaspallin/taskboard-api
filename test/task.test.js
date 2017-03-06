import assert from 'assert';
import Task from '../src/models/task';
import taskService from '../src/services/taskService';

describe('Task', () => {
  let task = {};

  before(() => {
    task = new Task({
      name: 'Task #1'
    });
  });

  it('returns cats', () => {
    assert(taskService.getTasks().length > 0, 'Tasks length > 0');
  });

  it('Name is Task #1', () => {
    assert.equal(task.name, 'Task #1');
  });

  it('Has created date', () => {
    assert(task.createdAt, 'Created at is empty');
  });

  it('Is not completed', () => {
    assert.strictEqual(task.completed, false);
  });
});
import assert from 'assert';

export default function(args) {
  assert.ok(args.name, 'Name required');

  let task = {};

  task.completed = !!args.completed;
  task.createdAt = args.createdAt || new Date();

  task.updatedAt = args.updatedAt || null;
  task.id = args.id || null;
  task.name = args.name || null;
  task.category = args.category || null;

  return task;
};
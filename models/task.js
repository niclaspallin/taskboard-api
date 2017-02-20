var Task = function(args) {
  assert.ok(args.id && args.type, 'Id and type required');
  var task = {};
  task.id = args.id;
  task.type = args.type;
  task.createdAt = args.createdAt || new Date();
  if(args.updatedAt) {
    task.updatedAt = args.updatedAt;
  }
  return task;
};

module.exports = Task;

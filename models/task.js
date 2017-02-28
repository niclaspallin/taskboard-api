var assert = require('assert');

var Task = function(args) {
    assert.ok(args.name, 'Name required');

    var task = {};

    task.id = args.id;
    task.name = args.name;
    task.category = args.category;
    task.completed = !!args.completed;
    task.createdAt = args.createdAt || new Date();

    if (args.updatedAt) {
        task.updatedAt = args.updatedAt;
    }

    if (task.id) {
        task.id = args.id;
    }

    return task;
};

module.exports = Task;
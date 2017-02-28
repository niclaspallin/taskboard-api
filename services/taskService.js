var tasks = require('../store/mockData').tasks;

module.exports = (function() {
    var getTasks = function() {
        return tasks;
    };

    var getTask = function(id) {
        return tasks.filter(function(task) {
            return task.id === id;
        })[0];
    };

    return {
        getTasks: getTasks,
        getTask: getTask
    };
})();
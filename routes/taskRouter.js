var express = require('express');
var router = express.Router();
var taskService = require('../services/taskService');

router.get('/', function(req, res) {
    res.json({
        tasks: taskService.getTasks()
    });
});

router.get('/:id', function(req, res) {
    res.json({
        task: taskService.getTask(parseInt(req.params.id))
    });
});

module.exports = router;
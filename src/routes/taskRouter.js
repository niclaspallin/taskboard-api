import express from 'express';
let router = express.Router();
import taskService from '../services/taskService';

router.get('/', function(req, res) {
  taskService.getTasks().then(result => {
    res.json(result);
  });
});

router.get('/:id', function(req, res) {
  taskService.getTask(parseInt(req.params.id)).then(result => {
    res.json(result);
  });
});

export default router;
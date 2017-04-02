import express from 'express';
let router = express.Router();
import taskService from '../services/taskService';

// GET /tasks
router.get('/', function(req, res) {
  taskService.all()
    .then(tasks => {
      res.send(tasks);
    })
    .catch(err => {
      res.statusCode = 400;
      res.json(err);
    });
});

// GET /tasks/1
router.get('/:id', function(req, res) {
  taskService.find(+req.params.id)
    .then(task => {
      res.send(task);
    })
    .catch(err => {
      res.statusCode = 400;
      res.send(err);
    });
});

// POST /tasks
router.post('/', (req, res) => {
  taskService.create(req.body)
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      res.statusCode = 400;
      res.send(err);
    });
});
// PUT /tasks/1
router.put('/:id', (req, res) => {
  taskService.update(+req.params.id)
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      res.statusCode = 400;
      res.send(err);
    });
});

export default router;
import express from 'express';
let router = express.Router();
import taskService from '../services/taskService';
import responseUtils from '../utils/responseUtils';

// GET /tasks
router.get('/', (req, res) => {
  responseUtils.send(res, taskService.all());
});

// GET /tasks/1
router.get('/:id', (req, res) => {
  responseUtils.send(res, taskService.find(+req.params.id, req.body));
});

// POST /tasks
router.post('/', (req, res) => {
  responseUtils.send(res, taskService.create(req.body));
});

// PUT /tasks/1
router.put('/:id', (req, res) => {
  responseUtils.send(res, taskService.update(+req.params.id, req.body));
});

// DELETE /tasks/1
router.delete('/:id', (req, res) => {
  responseUtils.send(res, taskService.delete(+req.params.id, req.body));
});

export default router;
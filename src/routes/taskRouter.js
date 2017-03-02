import express from 'express';
let router = express.Router();
import taskService from '../services/taskService';
import {
  API_ROOT
} from '../store/constants';

router.get('/', function(req, res) {
  res.json(taskService.getTasks());
});

router.get('/:id', function(req, res) {
  res.json(taskService.getTask(parseInt(req.params.id)));
});

export default router;
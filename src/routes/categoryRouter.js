import express from 'express';
import categoryService from '../services/categoryService';
let router = express.Router();
import responseUtils from '../utils/responseUtils';

// GET /categories
router.get('/', (req, res) => {
  responseUtils.send(res, categoryService.all());
});

// GET /categories/1
router.get('/:id', (req, res) => {
  responseUtils.send(res, categoryService.find(+req.params.id));
});

// POST /categories
router.post('/', (req, res) => {
  responseUtils.send(res, categoryService.create(req.body));
});

// PUT /categories/1
router.put('/:id', (req, res) => {
  responseUtils.send(res, categoryService.update(+req.params.id, req.body));
});

// DELETE /tasks/1
router.delete('/:id', (req, res) => {
  responseUtils.send(res, categoryService.delete(+req.params.id));
});

export default router;
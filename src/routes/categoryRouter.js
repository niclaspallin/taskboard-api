import express from 'express';
import categoryService from '../services/categoryService';
let router = express.Router();

router.get('/', (req, res) => {
  res.json(categoryService.getCategories());
});

router.get('/:id', (req, res) => {
  res.json(categoryService.getCategory(parseInt(req.params.id)));
});

export default router;
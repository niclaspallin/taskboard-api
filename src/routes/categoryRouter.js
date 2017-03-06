import express from 'express';
import categoryService from '../services/categoryService';
let router = express.Router();

router.get('/', (req, res) => {
  categoryService.getCategories()
    .then(result => {
      res.json(result);
    });
});

router.get('/:id', (req, res) => {
  categoryService.getCategory(parseInt(req.params.id))
    .then(result => {
      res.json(result);
    });
});

export default router;
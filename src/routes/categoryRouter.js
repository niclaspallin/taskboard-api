import express from 'express';
import categoryService from '../services/categoryService';
let router = express.Router();

// GET /categories
router.get('/', (req, res) => {
  categoryService.all()
    .then((categories) => {
      res.json(categories);
    })
    .catch(err => {
      res.statusCode = 400;
      res.send(err);
    });
});

// GET /categories/1
router.get('/:id', (req, res) => {
  categoryService.find(+req.params.id)
    .then(category => {
      res.json(category);
    })
    .catch(err => {
      res.statusCode = 400;
      res.send(err);
    });
});

// POST /categories
router.post('/', (req, res) => {
  categoryService.create(req.body)
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      res.statusCode = 400;
      res.json(err);
    });
});

// PUT /categories/1
router.put('/:id', (req, res) => {
  categoryService.update(+req.params.id, req.body)
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      res.statusCode = 400;
      res.json(err);
    });
});

export default router;
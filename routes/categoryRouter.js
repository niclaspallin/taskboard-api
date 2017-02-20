var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.json({categories: []});
});

router.get('/:id', function(req, res) {
  res.json({category: req.params.id});
});

module.exports = router;
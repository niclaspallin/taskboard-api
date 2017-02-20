var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.json({tasks: []});
});

router.get('/:id', function(req, res) {
  res.json({task: req.params.id});
});

module.exports = router;
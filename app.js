var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var port = process.env.PORT || 3000;

var taskRouter = require('./routes/taskRouter');
var categoryRouter = require('./routes/categoryRouter');

app.use(express.static(path.join(__dirname, 'public')));
app.get('/api', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});
app.use(bodyParser.json());

// Routes
app.use('/api/tasks', taskRouter);
app.use('/api/categories', categoryRouter);

app.listen(port, function() {
  console.log('[express]: Listening on port: ' + port);
});

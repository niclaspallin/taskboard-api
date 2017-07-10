import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = process.env.PORT || 8000;

import taskRouter from './routes/taskRouter';
import categoryRouter from './routes/categoryRouter';

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

app.get('/api', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Routes
app.use('/api/tasks', taskRouter);
app.use('/api/categories', categoryRouter);

app.listen(port, function() {
  console.log('[express]: Running at: ' + 'http://localhost:' + port);
});
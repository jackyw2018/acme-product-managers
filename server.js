const path = require('path');
const express = require('express');
const app = express();

const { syncAndSeed } = require('./db');

// Logger middleware
const morgan = require('morgan');
app.use(morgan('dev'));

// Body parising middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', require('./api'));

app.get('/app.js', (req, res, next) =>
  res.sendFile(path.join(__dirname, 'dist', 'main.js'))
);

app.get('/', (req, res, next) =>
  res.sendFile(path.join(__dirname, 'index.html'))
);

const port = process.env.PORT || 3000;

syncAndSeed().then(() => {
  app.listen(port, () => console.log(`listening on port ${port}`));
});

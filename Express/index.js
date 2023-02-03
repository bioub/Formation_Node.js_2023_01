const http = require('http');
const mongoose = require('mongoose');

const config = require('./config');
const app  = require('./app');

const server = http.createServer(app);

server.on('error', (err) => {
  console.log(err.message);
});

mongoose.set('strictQuery', false);
mongoose.connect('mongodb://127.0.0.1:27017/test').then(() => {
  server.listen(config.port, () => {
    console.log('Server started on port ' + config.port);
  });
});


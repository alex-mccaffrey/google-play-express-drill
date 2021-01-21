const app = require('./app');
const express = require('express')
const server = express()

app.listen(8000, () => {
  console.log('Server started on PORT 8000');
});


module.exports = server;
const express = require('express');
const app = express();

// your routes here
app.get('/', (req, res) => {
  res.send("Hello from Express");
});

module.exports = app;


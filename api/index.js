const serverless = require('serverless-http');
const app = require('../server'); // assuming server.js is one level up

module.exports = serverless(app);

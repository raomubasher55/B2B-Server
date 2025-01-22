const morgan = require('morgan');
const fs = require('fs');
const path = require('path');

const logFormat =
  process.env.NODE_ENV === 'development' ? 'dev' : 'combined';

const accessLogStream = fs.createWriteStream(
  path.join(__dirname, '../../logs/access.log'), // Logs directory
  { flags: 'a' }
);


const morganMiddleware = morgan(logFormat, {
  stream: process.env.NODE_ENV === 'production' ? accessLogStream : null,
});

module.exports = morganMiddleware;

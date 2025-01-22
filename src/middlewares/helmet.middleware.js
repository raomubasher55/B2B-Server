const helmet = require('helmet');

const helmetMiddleware = () => {
  const options = process.env.NODE_ENV === 'production'
    ? {}
    : { contentSecurityPolicy: false }; 

  return helmet(options);
};

module.exports = helmetMiddleware;

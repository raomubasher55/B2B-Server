const { RateLimiterMemory } = require('rate-limiter-flexible');

class RateLimiterMiddleware {
  constructor() {
    this.rateLimiter = new RateLimiterMemory({
      points: process.env.RATE_LIMIT_POINTS || 10,  
      duration: process.env.RATE_LIMIT_DURATION || 60, 
    });
  }

  async handle(req, res, next) {
    try {
      await this.rateLimiter.consume(req.ip);
      return next(); 
    } catch (err) {
      res.status(429).json({
        success: false,
        message: 'Too many requests. Please try again later.',
      });
    }
  }
}

module.exports = new RateLimiterMiddleware();

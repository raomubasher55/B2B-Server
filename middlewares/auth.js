const jwt = require('jsonwebtoken');
const {default : status} = require('http-status')

const verifyToken = (req, res, next) => {
    const token = req.cookies.token || req.body.token || req.query.token  || req.headers['authorization'];
    if (!token) {
        return res.status(403).json({
            success: false,
            message: 'A Token is required for authorization'
        });
    }

    // console.log(token);

    try {
        const bearer = token.split(" ");
        const bearerToken = bearer[1];

        const decodedData = jwt.verify(bearerToken, process.env.ACCESS_SECRET_TOKEN);

        req.user = decodedData;
    } catch (error) {
        if (error.name === "TokenExpiredError") {
            return res.status(status.UNAUTHORIZED).json({
              message: "Unauthorized: Token has expired",
              expiredAt: error.expiredAt, 
            });
          }
      
          return res.status(status.UNAUTHORIZED).json({
            message: "Unauthorized: Invalid token",
            error: error.message,
          });
    }

    return next();
}

module.exports = verifyToken;

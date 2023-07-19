const jwt = require('jsonwebtoken');

function grantAccessTo(roles) {
  return function (req, res, next) {
    const token = req.header('auth-token');
    if (!token) {
      return res.status(401).json({ message: 'Authentication failed: Missing token.', status: "Error" });
    }
    try {
      const decodedToken = jwt.verify(token,'secret-newton-school-token');
      if (!roles.includes(decodedToken.role)) {
        return res.status(403).json({ message: 'Access Denied', status: "Error" });
      }
      next();
    } catch (err) {
      return res.status(401).json({ message: 'Authentication failed: Invalid token.', status: "Error" });
    }
  }
}

module.exports = grantAccessTo;


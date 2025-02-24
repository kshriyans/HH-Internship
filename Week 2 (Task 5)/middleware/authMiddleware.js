import jwt from 'jsonwebtoken'

export default function (req, res, next) {
  const token = req.header('Authorization');
  if (!token) return res.status(401).json({error : "Access denied. No token provided"});

  try {
    const decoded = jwt.verify(token, process.env.JWT_PRIVATE_KEY);
    req.user = decoded;
    req.userId = decoded.userId;
    next();
  }
  catch (ex) {
    res.status(400).json({error : "Invalid token"});
  }
}
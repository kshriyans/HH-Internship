export default function (req, res, next) { 
    
    if (req.user.role !== "admin") return res.status(403).json({error : "Access denied. Only Admin is allowed to perform this operation"});
  
    next();
  }
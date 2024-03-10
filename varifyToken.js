const jwt = require("jsonwebtoken");

//created middleware function. Add this function to any route for privatization or protection. Need token to access those routes with this funnction
module.exports = function (req, res, next) {
  const token = req.header("auth-token");
  if (!token) return res.status(401).send("Access denied !");

  try {
    const verified = jwt.verify(token, process.env.TOKEN_SECRET); //if this  is verified ....
    req.user = verified; //req.user is verified
    next();
  } catch (error) {
    res.status(400).send("Invalid Token");
  }
};

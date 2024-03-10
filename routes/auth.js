const router = require("express").Router();
const User = require("../models/User");
const { registerValidation, loginValidation } = require("../validation");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.post("/register", async (req, res) => {
  //validate data before creating user
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //User check for Already existance
  const emailExist = await User.findOne({
    email: req.body.email, //find email with the given email in reqbody
  });
  if (emailExist)
    //if found one respond with this
    return res.status(400).send("User With this Email Already exists !");

  //hash the password
  const salt = await bcrypt.genSalt(10); //complexity of hashing
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
  //user creation
  const user = new User({
    username: req.body.name,
    email: req.body.email,
    password: hashedPassword,
  });
  try {
    const savedUser = await user.save();
    res.send({ user: user._id }); //destructuring SavedUser returning only user id intead of whole info
  } catch (err) {
    res.status(400).send(err);
  }
});

//login route
router.post("/login", async (req, res) => {
  //validate data before Login
  const { error } = loginValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //User check for exist
  const user = await User.findOne({
    email: req.body.email, //find email with the given email in reqbody
  });
  if (!user)
    //if found one respond with this
    return res.status(400).send("User With this Email Does not exists !");

  //check if password is correct
  const validpass = await bcrypt.compare(req.body.password, user.password); //compairing given password with the user(var) email we findOne's password
  if (!validpass) return res.status(400).send("Invalid password");

  //create and assign token to user so make sure hes loggedin and can access requests
  const token = jwt.sign({ id: user._id }, process.env.TOKEN_SECRET);
  res.header("auth-token", token).send(token);
});

module.exports = router;

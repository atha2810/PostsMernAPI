const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const postsRoute = require("./routes/posts");
const authRoute = require("./routes/auth");
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = process.env.PORT || 3000;
//middlewares
app.use(express.json());
app.use(bodyParser.json()); //middleware to use bodyparser to convert request body data into json
app.use("/posts", postsRoute);
app.use("/api/user", authRoute);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

dotenv.config(); // or can directly use require('dotenv').config();
//load env vars from .env into node environment

//connection to DB
mongoose
  .connect(process.env.DB_CONNECT)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch(error => {
    console.error("Error connecting to MongoDB:", error);
  });
//import routes

app.listen(PORT, () => console.log("server is Running"));

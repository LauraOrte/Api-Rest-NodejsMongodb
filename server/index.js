const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

// settings
const app = express();
const port = process.env.PORT || 9000;

// middlewares
app.use(express.json());

// routes
app.get("/", (req, res) => {
    res.send("Welcome to my API");
  });

  // mongodb connection
mongoose
.connect(process.env.MONGODB_URI)
.then(() => console.log("Connected to MongoDB Atlas"))
.catch((error) => console.error(error));
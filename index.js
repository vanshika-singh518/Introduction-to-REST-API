import express from "express";
// const express = require('express');
import bodyParser from "body-parser";

import usersRoutes from './routes/users.js';

// initialise express application
const app = express(); // whole app lies on this variable
const PORT = 5000;

// initialise body parser middleware
app.use(bodyParser.json()); // says that we are going to use json data in our whole application

app.use('/users', usersRoutes);

app.get("/", (req, res) => {
  res.send("Hello from homepage");
});
// listen for incoming requests
app.listen(PORT, () =>
  console.log(`Server Running on port: http://localhost:${PORT}`)
);

import express from "express";
// import { v4 as uuidv4 } from "uuid";

import {
  createUsers,
  deleteUser,
  getUsers,
  updateUser,
} from "../controllers/users.js";

const router = express.Router();

/* mock database
const users = [
  {
    firstName: "John",
    lastName: "Doe",
    age: 25,
  },
  {
    firstName: "Jane",
    lastName: "Doe",
    age: 24,
  },
];*/

// why not const? bcoz we are changing users array
let users = [];

// don't write /users else it will point to /users/users
// all routes in here are starting with /users
router.get("/", (req, res) => {
  res.send(users);
});

// functionality to create users
router.post("/", createUsers);

// /users/2 => req.params{ id: 2 }
router.get("/:id", getUsers);

// router to delete users
router.delete("/:id", deleteUser);

// put is used when we want to completedly overwrite something
// we use patch for partial modification

// update user
router.patch("/:id", updateUser);

export default router;

const express = require("express");
const {
  createUser,
  correctCredentials,
  getIdUser,
} = require("../controllers/userController.js");

const usersRouter = express.Router();

usersRouter.post("/create-user", createUser);
usersRouter.post("/correct-credentials", correctCredentials);
usersRouter.post("/get-id-user", getIdUser);

module.exports = { usersRouter };

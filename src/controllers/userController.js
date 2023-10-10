import db from "../models/index";
import userService from "../services/userService";

const getUsers = async (req, res) => {
  try {
    let data = await db.User.findAll();
    console.log("🚀 ~ file: userController.js:4 ~ getUsers ~ data:", data);
    return res.send(data);
  } catch (error) {
    console.log("🚀 ~ file: userController.js:8 ~ getUsers ~ error:", error);
    return res.send(error.message);
  }
};

const createNewUser = async (req, res) => {
  try {
    console.log(
      "🚀 ~ file: userController.js:16 ~ createNewUser ~ req:",
      req.body
    );

    let message = await userService.createNewUser(req.body);
    console.log(
      "🚀 ~ file: userController.js:17 ~ createNewUser ~ message:",
      message
    );
    return res.send(message);
  } catch (error) {
    console.log(
      "🚀 ~ file: userController.js:16 ~ createNewUser ~ error:",
      error
    );
    return res.send("Failed! " + error?.message);
  }
};

module.exports = { getUsers, createNewUser };

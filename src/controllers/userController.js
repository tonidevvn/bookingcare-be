import db from "../models/index";
import userService from "../services/userService";

const getAllUsers = async (req, res) => {
  try {
    let data = await userService.getAllUsers();
    console.log("🚀 ~ file: userController.js:4 ~ getUsers ~ data:", data);
    return res.send(data);
  } catch (error) {
    console.log("🚀 ~ file: userController.js:8 ~ getUsers ~ error:", error);
    return res.send(error.message);
  }
};

const createNewUser = async (req, res) => {
  try {
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

const getUser = async (req, res) => {
  try {
    let id = req.params.id;
    console.log("get User info with id", id);
    let data = await userService.getUser(id);
    console.log("🚀 ~ file: userController.js:20 ~ getUser ~ data:", data);
    return res.send(data);
  } catch (error) {
    console.log("🚀 ~ file: userController.js:23 ~ getUser ~ error:", error);
    return res.send(error.message);
  }
};

const updateUser = async (req, res) => {
  try {
    //  New data
    console.log(
      "🚀 ~ file: userController.js:48 ~ updateUser ~ req:",
      req.body
    );
    let id = req.params.id;
    console.log("update User info with id", id);
    let message = await userService.updateUser(id, req.body);
    console.log(
      "🚀 ~ file: userController.js:56 ~ updateUser ~ message:",
      message
    );
    return res.send(message);
  } catch (error) {
    console.log("🚀 ~ file: userController.js:59 ~ updateUser ~ error:", error);
    return res.send(error.message);
  }
};

const deleteUser = async (req, res) => {
  try {
    let id = req.params.id;
    console.log("delete User info with id", id);
    let message = await userService.deleteUser(id);
    console.log(
      "🚀 ~ file: userController.js:56 ~ updateUser ~ message:",
      message
    );
    return res.send(message);
  } catch (error) {
    console.log("🚀 ~ file: userController.js:78 ~ deleteUser ~ error:", error);
    return res.send(error.message);
  }
};

module.exports = {
  createNewUser,
  getUser,
  updateUser,
  deleteUser,
  getAllUsers,
};

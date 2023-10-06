import db from "../models/index";
const getUsers = async (req, res) => {
  try {
    let data = await db.User.findAll();
    console.log("🚀 ~ file: userController.js:4 ~ getUsers ~ data:", data);
    return res.send(data);
  } catch (error) {
    console.log("🚀 ~ file: userController.js:8 ~ getUsers ~ error:", error);
  }
};

module.exports = { getUsers };

import bcrypt from "bcrypt";
import db from "../models/index";

const createNewUser = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      console.log("🚀 ~ file: userService.js:5 ~ createNewUser ~ data:", data);

      if (!!data) {
        let hashUPW = await hashUserPassword(data.password);
        console.log(">>> ", data);
        console.log(">>> hashpw", hashUPW);

        let newUser = await db.User.create({
          email: data.email,
          password: hashUPW,
          firstName: data.firstName,
          lastName: data.lastName,
          address: data.address,
          phoneNumber: data.phoneNumber,
          gender: data.gender,
          roleId: data.roleId,
          positionId: data.positionId,
          createdAt: data.createdAt,
          updatedAt: data.updatedAt,
        });
        resolve("Success! Created a new user.");
      }

      reject(
        "Failed! Cannot create a new user because of missing necessary data!!!"
      );
    } catch (error) {
      reject(error);
    }
  });
};

const hashUserPassword = (password) => {
  return new Promise(async (resolve, reject) => {
    const saltRounds = 10;
    try {
      let hashpw = await bcrypt.hash(password, saltRounds);
      console.log(">>> has password", hashpw);
      resolve(hashpw);
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  createNewUser,
};

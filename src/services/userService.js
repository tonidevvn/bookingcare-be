import bcrypt from "bcrypt";
import db from "../models/index";

const getAllUsers = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      let users = await db.User.findAll();
      resolve(users);
    } catch (error) {
      reject(error);
    }
  });
};

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
          createdAt: new Date(),
          updatedAt: new Date(),
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

const getUser = async (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      console.log("🚀 ~ file: userService.js:5 ~ getUser ~ id:", id);

      if (!!id) {
        let user = await db.User.findAll({
          where: {
            id,
          },
        });
        resolve(user);
      }

      reject("Failed! Missing input data!!!");
    } catch (error) {
      reject(error);
    }
  });
};

const updateUser = async (id, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      console.log("🚀 ~ file: userService.js:5 ~ updateUser ~ id:", id);
      console.log("🚀 ~ file: userService.js:72 ~ updateUser ~ data:", data);

      if (!!id && !!data) {
        let user = await db.User.findOne({
          where: {
            id,
          },
        });
        if (user !== null) {
          let updatedUser = {
            ...data,
          };

          if (!!data.password) {
            let hashUPW = await hashUserPassword(data.password);
            console.log(">>> hashpw", hashUPW);
            updatedUser = {
              ...updatedUser,
              password: hashUPW,
            };
          }

          await db.User.update(
            {
              ...updatedUser,
              updatedAt: new Date(),
            },
            {
              where: {
                id,
              },
            }
          );
          resolve("Success! Updated the user with id=" + id);
        } else {
          resolve("Failed! Cannot find the user with id=" + id);
        }
      }

      reject("Failed! Missing input data!!!");
    } catch (error) {
      reject(error);
    }
  });
};

const deleteUser = async (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      console.log("🚀 ~ file: userService.js:124 ~ deleteUser ~ id:", id);

      if (!!id) {
        let user = await db.User.findOne({
          where: {
            id,
          },
        });
        if (user !== null) {
          await db.User.destroy({
            where: {
              id,
            },
          });
          resolve("Success! Deleted the user with id=" + id);
        } else {
          resolve("Failed! Cannot find the user with id=" + id);
        }
      }

      reject("Failed! Missing input data!!!");
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
  getUser,
  updateUser,
  deleteUser,
  getAllUsers,
};

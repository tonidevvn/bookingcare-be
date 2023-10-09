"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Users", [
      {
        email: "tonidevvn@gmail.com",
        password: "1",
        firstName: "Toni",
        lastName: "Pham",
        address: "Ontario, Canada",
        phoneNumber: "+1234567890",
        gender: "Male",
        roleId: "R1",
        positionId: "Professor",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  },
};

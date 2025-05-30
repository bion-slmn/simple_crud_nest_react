'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
       id: {
           type: Sequelize.INTEGER,
           primaryKey: true,
           autoIncrement: true
       },
       firstName: {
           type: Sequelize.STRING,
           allowNull: false
       },
       lastName: {
           type: Sequelize.STRING,
           allowNull: false
       },
       address: {
           type: Sequelize.STRING,
           allowNull: false
       }
    });

  },

  async down (queryInterface, Sequelize) {

     await queryInterface.dropTable('Users');
  }
};

'use strict'

const table = 'clients'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(table, {
      id: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: Sequelize.literal('uuid_generate_v4()')
      },
      name: {
        type: Sequelize.TEXT,
        allowNull: false
      }
    }, {
      schema: 'public'
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable(table, {
      schema: 'public'
    })
  }
}

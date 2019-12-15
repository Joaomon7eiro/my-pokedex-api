module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('pokemon_types', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      pokemon_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: 'pokemons', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      type_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: 'types', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('pokemon_types');
  },
};

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('pokemons', 'user_id', {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: { model: 'users', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    });
  },

  down: queryInterface => {
    return queryInterface.removeColumn('pokemons', 'user_id');
  },
};

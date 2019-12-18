module.exports = {
  up: queryInterface => {
    return queryInterface.removeColumn('pokemons', 'user_id');
  },

  down: queryInterface => {
    return queryInterface.removeColumn('pokemons', 'user_id');
  },
};

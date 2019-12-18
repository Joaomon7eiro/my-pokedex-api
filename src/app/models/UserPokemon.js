import Sequelize, { Model } from 'sequelize';

class UserPokemon extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
      },
      {
        sequelize,
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
    this.belongsTo(models.Pokemon, { foreignKey: 'pokemon_id', as: 'pokemon' });
  }
}

export default UserPokemon;

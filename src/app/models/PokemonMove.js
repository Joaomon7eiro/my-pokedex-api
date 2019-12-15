import Sequelize, { Model } from 'sequelize';

class PokemonMove extends Model {
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
    this.belongsTo(models.Move, { foreignKey: 'move_id', as: 'move' });
    this.belongsTo(models.Pokemon, { foreignKey: 'pokemon_id', as: 'pokemon' });
  }
}

export default PokemonMove;

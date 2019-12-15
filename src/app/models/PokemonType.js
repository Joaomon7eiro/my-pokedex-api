import Sequelize, { Model } from 'sequelize';

class PokemonType extends Model {
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
    this.belongsTo(models.Type, { foreignKey: 'type_id', as: 'type' });
    this.belongsTo(models.Pokemon, { foreignKey: 'pokemon_id', as: 'pokemon' });
  }
}

export default PokemonType;

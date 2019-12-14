import Sequelize, { Model } from 'sequelize';

class Move extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
        },
        name: Sequelize.STRING,
        power: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Type, { foreignKey: 'type_id', as: 'type' });
  }
}

export default Move;

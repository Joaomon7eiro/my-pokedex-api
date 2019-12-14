import Sequelize, { Model } from 'sequelize';

class Pokemon extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
        },
        name: Sequelize.STRING,
        image: Sequelize.STRING,
        height: Sequelize.INTEGER,
        weight: Sequelize.INTEGER,
        capture_date: Sequelize.DATE,
      },
      {
        sequelize,
      }
    );
    return this;
  }
}

export default Pokemon;

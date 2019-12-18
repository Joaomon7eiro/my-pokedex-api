import Sequelize from 'sequelize';

import dbConfig from '../config/database';

import Pokemon from '../app/models/Pokemon';
import Move from '../app/models/Move';
import Type from '../app/models/Type';
import PokemonType from '../app/models/PokemonType';
import PokemonMove from '../app/models/PokemonMove';
import User from '../app/models/User';

const models = [User, Pokemon, Move, Type, PokemonType, PokemonMove];

class Database {
  constructor() {
    this.init();
  }

  init() {
    if (process.env.DATABASE_URL) {
      this.connection = new Sequelize(process.env.DATABASE_URL, {
        dialect: dbConfig.dialect,
        protocol: dbConfig.protocol,
        dialectOptions: {
          ssl: true,
        },
        define: dbConfig.define,
      });
    } else {
      this.connection = new Sequelize(dbConfig);
    }

    models.forEach(model => model.init(this.connection));
    models.forEach(
      model => model.associate && model.associate(this.connection.models)
    );
  }
}

export default new Database();

import * as Yup from 'yup';
import { Op } from 'sequelize';

import Pokemon from '../models/Pokemon';
import PokemonMove from '../models/PokemonMove';
import PokemonType from '../models/PokemonType';
import Move from '../models/Move';
import Type from '../models/Type';

class PokemonController {
  async create(req, res) {
    const schema = Yup.object().shape({
      id: Yup.number().required(),
      name: Yup.string().required(),
      image: Yup.string().required(),
      height: Yup.number().required(),
      weight: Yup.number().required(),
      capture_date: Yup.date().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ message: 'Invalid request body' });
    }

    const pokemon = await Pokemon.findByPk(req.body.id);

    if (pokemon) {
      return res.status(400).json({ message: 'Pokemon already captured' });
    }

    await Pokemon.create(req.body);

    return res.json(req.body);
  }

  async index(req, res) {
    const { page = 1, query } = req.query;
    const limit = 20;

    const queryOptions = {
      limit: 20,
      order: ['id'],
      offset: (page - 1) * limit,
      attributes: ['id', 'name', 'image'],
    };

    let pokemons;

    if (query) {
      pokemons = await Pokemon.findAndCountAll({
        where: { name: { [Op.like]: `%${query}%` } },
        ...queryOptions,
      });
    } else {
      pokemons = await Pokemon.findAndCountAll(queryOptions);
    }

    let totalPagesNumber = 1;

    if (pokemons.count !== 0) {
      if (pokemons.count % limit === 0) {
        totalPagesNumber -= 1;
      }
      totalPagesNumber = Math.floor(pokemons.count / 20) + totalPagesNumber;
    }

    return res.json({
      data: pokemons.rows,
      currentPage: page,
      totalPages: totalPagesNumber,
    });
  }

  async show(req, res) {
    const { id } = req.params;

    const pokemon = await Pokemon.findByPk(id, {
      attributes: ['id', 'name', 'image', 'height', 'weight', 'capture_date'],
    });

    if (!pokemon) {
      res.status(400).json({ error: 'Pokemon does not exists' });
    }

    const moves = await PokemonMove.findAll({
      where: { pokemon_id: id },
      attributes: ['move_id'],
      include: [
        {
          model: Move,
          as: 'move',
          attributes: ['name', 'power'],
          include: [
            {
              model: Type,
              as: 'type',
              attributes: ['name'],
            },
          ],
        },
      ],
    });

    const types = await PokemonType.findAll({
      where: { pokemon_id: id },
      attributes: ['type_id'],
      include: [
        {
          model: Type,
          as: 'type',
          attributes: ['name'],
        },
      ],
    });

    return res.json({ pokemon, moves, types });
  }
}

export default new PokemonController();

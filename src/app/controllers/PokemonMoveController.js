import * as Yup from 'yup';

import PokemonMove from '../models/PokemonMove';

class PokemonMoveController {
  async create(req, res) {
    const schema = Yup.object().shape({
      moves: Yup.array().of(Yup.number().required()),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ message: 'Invalid request body' });
    }

    const { id } = req.params;

    const moves = await PokemonMove.findAll({
      where: { pokemon_id: id },
    });

    if (moves.length > 0) {
      return res.status(200).json({ message: 'Pokemon moves already exists' });
    }

    const pokemonMoves = req.body.moves.map(moveId => {
      return {
        pokemon_id: Number(req.params.id),
        move_id: moveId,
      };
    });

    const pokeMoves = await PokemonMove.bulkCreate(pokemonMoves, {
      ignoreDuplicates: true,
    });

    return res.json(pokeMoves);
  }
}

export default new PokemonMoveController();

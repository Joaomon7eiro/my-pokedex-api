import * as Yup from 'yup';

import UserPokemon from '../models/UserPokemon';

class UserPokemonController {
  async create(req, res) {
    const schema = Yup.object().shape({
      pokemonId: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ message: 'Invalid request body' });
    }

    const userPokemon = await UserPokemon.create({
      pokemon_id: Number(req.body.pokemonId),
      user_id: Number(req.userId),
    });

    return res.json(userPokemon);
  }
}

export default new UserPokemonController();

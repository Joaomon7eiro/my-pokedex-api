import * as Yup from 'yup';

import PokemonType from '../models/PokemonType';

class PokemonTypeController {
  async create(req, res) {
    const schema = Yup.object().shape({
      types: Yup.array().of(Yup.number().required()),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ message: 'Invalid request body' });
    }

    const { id } = req.params;

    const types = await PokemonType.findAll({
      where: { pokemon_id: id },
    });

    if (types.length > 0) {
      return res.status(400).json({ message: 'Pokemon types already exists' });
    }

    const pokemonTypes = req.body.types.map(typeId => {
      return {
        pokemon_id: Number(req.params.id),
        type_id: typeId,
      };
    });

    const pokeTypes = await PokemonType.bulkCreate(pokemonTypes, {
      ignoreDuplicates: true,
    });

    return res.json(pokeTypes);
  }
}

export default new PokemonTypeController();

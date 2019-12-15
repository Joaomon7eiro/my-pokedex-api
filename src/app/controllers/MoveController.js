import * as Yup from 'yup';
import Move from '../models/Move';

class MoveController {
  async create(req, res) {
    const schema = Yup.object().shape({
      moves: Yup.array().of(
        Yup.object().shape({
          id: Yup.number().required(),
          name: Yup.string().required(),
          power: Yup.number().required(),
          type_id: Yup.number().required(),
        })
      ),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ message: 'Invalid request body' });
    }

    const moves = await Move.bulkCreate(req.body.moves, {
      ignoreDuplicates: true,
    });

    return res.json(moves);
  }
}

export default new MoveController();

import * as Yup from 'yup';

import Type from '../models/Type';

class TypeController {
  async create(req, res) {
    const schema = Yup.object().shape({
      types: Yup.array().of(
        Yup.object().shape({
          id: Yup.number().required(),
          name: Yup.string().required(),
        })
      ),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ message: 'Invalid request body' });
    }

    const types = await Type.bulkCreate(req.body.types, {
      ignoreDuplicates: true,
    });

    return res.json(types);
  }
}

export default new TypeController();

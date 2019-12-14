import jwt from 'jsonwebtoken';
import { promisify } from 'util';
import authConfig from '../../config/auth';

export default async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    res.status(400).json({ error: 'Authorization not provided' });
  }

  const [, token] = authHeader.split(' ');

  try {
    const decoded = await promisify(jwt.verify)(token, authConfig.secure);
    req.userId = decoded.id;

    return next();
  } catch (error) {
    return res.status(400).json({ message: 'Invalid Token' });
  }
};

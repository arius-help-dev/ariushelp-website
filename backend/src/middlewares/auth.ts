import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';

import authConfig from '../config/auth';
import User from '../models/user';

export default async function authenticate(request: Request, response: Response, next) {
  const token = request.headers.authorization;

  if (token) {
    try {
      const { user } = await jwt.verify(token, authConfig.SECRET_KEY);

      const userLoged = await User.findById(user);

      return response.json({ userLoged })

      if (!userLoged) {
        return response.status(401).send({ message: 'Usuário não existe' });
      }

      next();
    } catch (error) {
      return response.status(401).send({ message: 'Token inválido' });
    }
  } else {
    return response.status(401).send({ message: 'Token inválido' });
  }
}

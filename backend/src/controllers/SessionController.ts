import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';

import User from '@models/user';
import authConfig from '../config/auth';
import user from '@models/user';

class SessionController {
  async show (request: Request, response: Response){
    const { email, password } = request.body;

    const user = await User.findOne({ email });

    if(await bcrypt.compareSync(password, user.password)){
      return response.status(200).json({
        user: user,
        token: jwt.sign({ user: user._id }, authConfig.SECRET_KEY)
      });
    }
  }
  async store (request: Request, response: Response){
    const { email, password } = request.body;

    const userExists = await User.findOne({ email });

    if (!userExists) {
      const salt = await bcrypt.genSaltSync(10);

      const hashPassword = await bcrypt.hashSync(password, salt);

      const user = await User.create({ email, password: hashPassword });

      return response.status(200).json(user);
    }

    return response.status(400).send({ message: 'Usuário já existe' });
  }
}

export default SessionController;

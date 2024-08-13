// Primeira coisa: Criar a estratégia de validação
//Segunda coisa: Criar middleware para interferir na rota desejada
import { Strategy as LocalStrategy } from 'passport-local'
import { createUserJWT, createUserToken, findUserByEmailAndPassword } from '../services/user';
import { User } from '../types/User';
import { RequestHandler } from 'express';
import passport from 'passport';



type LocalStrategyResponse = {
  auth: {
    token: string;
  },
  user: User;
}

export const locaStrategy = new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
}, async (email, password, done) => {

  const user = await findUserByEmailAndPassword(email, password);

  if (user) {
    const token = createUserJWT(user);
    const response: LocalStrategyResponse = {
      auth: {
        token: token
      },
      user: user
    }

    return done(null, response);
  }
  else {
    return done(null, false);
  }
});

export const localStrategyAuth: RequestHandler = (req, res, next) => {
  const authRequest = passport.authenticate('local', (err: any, response: LocalStrategyResponse | false) => {
    if (response) {
      req.user = response.user;
      req.authInfo = response.auth;
      return next();
    }

    return res.status(401).json({error: 'Acesso negado.'})
  })

  authRequest(req, res, next);
}
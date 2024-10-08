import 'dotenv/config';
import express from 'express';
import helmet from 'helmet';
import path from 'path';
import router from './routes/routes';
import passport from 'passport';
import { locaStrategy } from './libs/passport-local';
import { bearerStrategy } from './libs/passport-bearer';
import { jwtStrategy } from './libs/passport-jwt';

const server = express();

server.use(helmet());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(express.static(path.join(__dirname, '../public')));

passport.use(locaStrategy);
passport.use(bearerStrategy);
passport.use(jwtStrategy);
server.use(passport.initialize());

server.use(router);

server.listen(process.env.PORT, () => {
  console.log(`Servidor rodando: http://localhost:${process.env.PORT}`)
})
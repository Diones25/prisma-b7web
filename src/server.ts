import 'dotenv/config';
import express from 'express';
import helmet from 'helmet';
import path from 'path';
import router from './routes/routes';
import { errorHandler, notFoundRequest } from './routes/errorhandler';

const server = express();

server.use(helmet());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(express.static(path.join(__dirname, '../public')));
server.use(router);

server.use(notFoundRequest);
server.use(errorHandler);

server.listen(process.env.PORT, () => {
  console.log(`Servidor rodando: http://localhost:${process.env.PORT}`)
})
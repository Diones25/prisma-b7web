import { ErrorRequestHandler, RequestHandler } from "express";

export const notFoundRequest:RequestHandler = (req, res) => {
  return res.status(404).json({ error: 'Route not found' });
}

export const errorHandler:ErrorRequestHandler = (err, req, res, next) => {
  console.log("ERRO ===>", err);
  return res.status(500).json({ error: 'Ocorreu um erro' });
}
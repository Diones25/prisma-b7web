import { Request, Response } from "express";

const home = (req: Request, res: Response) => {
  return res.json('Hello world!');
}

const ping = (req: Request, res: Response) => {
  console.log("executou o ping")
  return res.json({ pong: true });
}

export default {
  home,
  ping
}
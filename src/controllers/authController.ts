import { Request, Response } from "express";

const login = async (req: Request, res: Response) => {
  return res.json({
    user: req.user,
    auth: req.authInfo
  })
}

const privateRoute = async (req: Request, res: Response) => {
  return res.json({ msg: 'Acessou' })
}

export default {
  login,
  privateRoute
}
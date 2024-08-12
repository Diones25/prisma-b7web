import { Request, Response } from "express";

const login = async (req: Request, res: Response) => {
  return res.json({
    user: req.user,
    auth: req.authInfo
  })
}

export default {
  login
}
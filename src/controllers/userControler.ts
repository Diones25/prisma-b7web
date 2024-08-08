import { Request, Response } from "express";
import { createUser } from "../services/userService";

const create = async (req: Request, res: Response) => {
  const { name, email } = req.body;
  const user = await createUser({
    name,
    email
  });
  
  return res.status(201).json({ user });
}

export default {
  create
};
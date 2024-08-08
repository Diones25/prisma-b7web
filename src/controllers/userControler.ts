import { Request, Response } from "express";
import { prisma } from "../libs/prisma";

const create = async (req: Request, res: Response) => {
  const { name, email } = req.body;

  try {
    const emailExists = await prisma.user.findUnique({
      where: {
        email: email
      }
    })

    if (emailExists) {
      return res.status(400).json({ error: "Email já existe" })
    }

    const user = await prisma.user.create({
      data: {
        name,
        email
      }
    })
    
    return res.status(201).json({ user });
    
  } catch (error) {
    return res.status(500).json({ error: "Erro interno no servidor" })
  }
}

export default {
  create
};
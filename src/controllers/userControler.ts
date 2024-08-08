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

const createUserAndPosts = async (req: Request, res: Response) => {
  const { name, email, title, body } = req.body;

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
        email,
        posts: {
          create: {
            title,
            body
          }
        }
      }
    })

    return res.status(201).json({ user });

  } catch (error) {
    return res.status(500).json({ error: "Erro interno no servidor" })
  }
}

const getAllUsers = async (req: Request, res: Response) => {

  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        status: true,
        posts: true
      }
    });
    return res.status(200).json({ users });

  } catch (error) {
    return res.status(500).json({ error: "Erro interno no servidor" })
  }
}

export default {
  create,
  createUserAndPosts,
  getAllUsers
};
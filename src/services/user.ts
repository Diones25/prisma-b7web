import { User } from "../types/User";
import { prisma } from "../libs/prisma";
import jwt from 'jsonwebtoken';

export const findUserByEmailAndPassword = async (email: string, password: string) => {
  //consulta BD
  const userDB = await prisma.user.findUnique({
    where: {
      email: email
    }
  })

  if (userDB?.email === email && userDB?.password === password) {
    const user: User = {
      id: userDB.id,
      name: userDB.name
    }
    return user;
  }

  return null;
}

export const createUserToken = (user: User) => {
  return '1234nJNHkuashA&¨%&¨45vdjashdjh';
}

export const findUserByToken = async (token: string) => {
  //consultar DB

  if (token === '1234') {
    const user: User = {
      id: 2,
      name: 'Fulano'
    }
    return user;
  }

  return null;
}

export const createUserJWT = (user: User) => {
  const payload = {
    id: user.id
  }
  return jwt.sign(payload, process.env.JWT_KEY as string);
}

export const findUserById = async (id: number) => {
  //consulta BD
  const userDB = await prisma.user.findUnique({
    where: {
      id: id
    }
  })

  if (userDB?.id === id) {
    const user: User = {
      id: userDB.id,
      name: userDB.name
    }
    return user;
  }

  return null;
}
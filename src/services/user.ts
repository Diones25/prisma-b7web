import { User } from "../types/User";
import { prisma } from "../libs/prisma";

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
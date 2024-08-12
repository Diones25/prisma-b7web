import { User } from "../types/User";
import { prisma } from "../libs/prisma";

export const findUserByEmailAndPassword = async (email: string, password: string) => {
  //consulta BD
  const user = await prisma.user.findUnique({
    where: {
      email: email
    }
  })

  if (user?.email === email && user?.password === password) {
    const user: User = {
      id: '2',
      name: 'Fulano'
    }
    return user;
  }

  return null;
}

export const createUserToken = (user: User) => {
  return '1234nJNHkuashA&¨%&¨45vdjashdjh';
}
import { prisma } from "../libs/prisma"
import { User } from "../types/User";

export const createUser = async ({ name, email }: User) => {
  try {

    const emailExists = await prisma.user.findUnique({
      where: {
        email: email
      }
    })

    if (emailExists) {
      return "Email já existe"
    }

    const user = await prisma.user.create({
      data: {
        name,
        email
      }
    })

    return user;
  } catch (error) {
    return false;
  }
}
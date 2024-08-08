import { prisma } from "../libs/prisma"
import { User } from "../types/User";

export const createUser = async ({ name, email }: User) => {
  const user = await prisma.user.create({
    data: {
      name,
      email
    }
  })

  return user;
}
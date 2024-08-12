import { User } from "../types/User";

export const findUserByEmailAndPassword = async (email: string, password: string) => {
  //consulta BD

  if (email === 'admin@hotmail.com' && password === '1234') {
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
import { Request, Response, Router } from 'express';
import { prisma } from '../libs/prisma';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.json('Hello world!');
})

router.get('/ping', (req: Request, res: Response) => {
  console.log("executou o ping")
  res.json({ pong: true });
})

router.post('/user', async (req: Request, res: Response) => {
  const user = await prisma.user.create({
    data: {
      name: 'Diones',
      email: 'diones@gmail.com'
    }
  });

  return res.status(201).json({ user });
})


export default router;
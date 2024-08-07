import { Request, Response, Router } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.json('Hello world!');
})

router.get('/ping', (req: Request, res: Response) => {
  console.log("executou o ping")
  res.json({ pong: true });
})


export default router;
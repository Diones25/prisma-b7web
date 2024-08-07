import { Request, Response, Router } from 'express';
import interferir from '../middlewares/interferir';
import userController from '../controllers/controller'

const router = Router();

router.use(interferir);

router.get('/', (req: Request, res: Response) => {
  res.json('Hello world!');
})

router.get('/ping', (req: Request, res: Response) => {
  console.log("executou o ping")
  res.json({ pong: true });
})

router.post('/user', userController.createUser);
router.get('/posts', userController.getPosts);

export default router;
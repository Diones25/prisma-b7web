import { Router } from 'express';
import defaultControler from '../controllers/defaultControler';
import userController from '../controllers/userControler';

const router = Router();

router.get('/', defaultControler.home);
router.get('/ping', defaultControler.ping);

router.post('/user', userController.create);
router.post('/userPost', userController.createUserAndPosts);
router.get('/users', userController.getAllUsers);
router.get('/user/:email', userController.getUserByEmail);
router.get('/users/relations', userController.getAllRelationsUsers);


export default router;
import { Router } from 'express';
import defaultControler from '../controllers/defaultControler';
import userController from '../controllers/userControler';
import { privateRequest } from '../middlewares/auth';
import authController from '../controllers/authController';
import { localStrategyAuth } from '../libs/passport-local';
import { bearerStrategyAuth } from '../libs/passport-bearer';
import { jwtStrategyAuth } from '../libs/passport-jwt';
import uploadController from '../controllers/uploadController';
import multer from 'multer';

const router = Router();

const upload = multer({
  dest: 'uploads/'
});

router.get('/', defaultControler.home);
router.get('/ping', defaultControler.ping);

router.post('/user', userController.create);
router.post('/userPost', privateRequest, userController.createUserAndPosts);
router.get('/users', userController.getAllUsers);
router.get('/user/:email', userController.getUserByEmail);
router.get('/users/relations', userController.getAllRelationsUsers);
router.get('/users/count', userController.getAllCountUsers);
router.get('/users/ordena', userController.getAllOrdenaUsers);
router.get('/users/paginacao', userController.getAllPaginacaoUsers);
router.put('/user/:id', userController.updateUser);

router.post('/login', localStrategyAuth, authController.login)
router.get('/private', bearerStrategyAuth, authController.privateRoute)
router.get('/privatejwt', jwtStrategyAuth, authController.privateRouteJwt)

router.post('/upload', upload.single('photo'), uploadController.uploadFile);


export default router;
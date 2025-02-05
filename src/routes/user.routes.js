import { Router } from 'express'
import { 
        updateUser,
        deleteUserById,
        findUserById,
        findAll
    } from '../controllers/user.controller.js';
import { authMiddleware } from "../middlewares/Authmiddlewares.js";

const router = Router();


router.get('/user', findAll);
router.put('/user/:id', authMiddleware ,updateUser);
router.delete('/user/:id', deleteUserById);
router.get('/user/:id', findUserById);

export default router
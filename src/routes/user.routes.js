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
router.get('/user/:id', authMiddleware, findUserById);
router.delete('/user/:id', authMiddleware, deleteUserById)
router.put('/user/:id', authMiddleware,  updateUser)


export default router
import { Router } from 'express'
import { 
        updateUserById,
        deleteUserById,
        findUserById,
        findAll
    } from '../controllers/user.controller.js';

const router = Router();


router.get('/user', findAll);
router.put('/user/:id', updateUserById);
router.delete('/user/:id', deleteUserById);
router.get('/user/:id', findUserById);

export default router
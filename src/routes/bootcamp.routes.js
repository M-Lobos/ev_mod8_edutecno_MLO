import { Router } from 'express'
import { 
    createBootcamp, 
    addUser, 
    findAll,
    findById
} from '../controllers/bootcamp.controller.js'


const router = Router();

router.post('/bootcamp', createBootcamp);
router.post('/bootcamp/:bootcampId', addUser);
router.get('/user', findAll);
router.get('/user/:id', findById);

export default router
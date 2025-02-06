import { Router } from 'express'
import { addUser, 
        createBootcamp, 
        findAll,  
        findById,  
        } from '../controllers/bootcamp.controller.js';



const router = Router();

/* router.post('/bootcamp', createBootcamp);
router.post('/bootcamp/:bootcampId', addUser);
router.get('/user', findAll);
router.get('/user/:id', findById);
 */

router.post('/bootcamps', createBootcamp)
router.post('/bootcamps/addUser', addUser)
router.get('/bootcamps', findAll);
router.get('/bootcamps/:id', findById) 




export default router
import { Router } from "express";
import { renderAboutPage, 
    renderHomePage, 
    renderListProduct, 
    renderRegisterForm, 
    renderRegisterSuccess } from "../controllers/views.controller.js";


const router = Router();

router.get('/', renderHomePage)
router.get('/about', renderAboutPage)
router.get('/products', renderListProduct)
router.get('/user/register', renderRegisterForm)
router.get('/user/register/success', renderRegisterSuccess)

export default router
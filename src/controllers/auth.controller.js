import { registerService } from '../services/auth/register.service.js';
import { User } from '../models/User.model.js';
import { loginService } from '../services/auth/login.service.js';




export const register = async(req, res, next) => {
    try {
        const user = await registerService(req.body, User);
        
        res.status(201).json({
            message: 'Usuario Registrado con éxito',
            status: 201,
            data: user //Solo para fines pedagógicos, no debo mostrar todos los datos del usuario en una respuesta
        });

    } catch (error) {
        next(error);
    }
};

export const login = async(req, res, next) => {
    try {
        const { user, token } = await loginService(req.body);

        res.status(202).json({
            message: 'Usuario autetnicado con éxito',
            status: 202,
            data: { user, token }
        });
    } catch (error) {
        console.error(error);
        next(error);
    }
};


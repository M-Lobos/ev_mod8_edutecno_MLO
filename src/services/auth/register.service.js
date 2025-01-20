import { destructuringUserData, normalizeUserData } from '../../utils/normalize/user.js';
import { ensureEmailNotTaken } from '../../utils/validators/models.js';
import { hashPassword } from './hash.service.js';
import { validatePassword } from '../../utils/validators/password.js';
import { InternalServerError } from '../../errors/TypeError.js';


export const registerService = async(data, Model) => {
    try {  
        const [userGeneralData, email, password] = destructuringUserData(data);

        await ensureEmailNotTaken(Model, email);
        validatePassword(password, userGeneralData);

        const hashedPassword = await hashPassword(password);
        const userData = normalizeUserData(
            email,
            hashedPassword,
            userGeneralData
        );


        const user = await Model.create(userData);
        return user;
        
    } catch (error) {
        throw new InternalServerError('Error al crear el registro solicitado', 500, error);
    }
};
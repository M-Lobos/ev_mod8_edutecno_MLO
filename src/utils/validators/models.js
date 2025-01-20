import { ValidateError } from '../../errors/TypeError.js';

export const ensureEmailNotTaken = async(Model, email) => {
    const existingUser = await Model.findOne({ where: { email } });
    if (existingUser) throw new ValidateError('Ya existe un usuario con este correo', error);
};
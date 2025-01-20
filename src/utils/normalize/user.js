
/**
 * Normaliza la estuctura de datos de una petición con datos de usuario para poder procesarlos y validarlos adecuadamente
 * @param {Object} data - Datos que llegan desde la petición con la información del usuario a destructurar 
 * @returns {Array} - Array con 3 elementos, los datos generales del usuario como objeto, el email en la segunda posición y la contraseña en la ultima
 */
export const destructuringUserData = (data) => {
    const {
        firstName,
        lastName,
        email,
        password,
    } = data;

    const globalDataUser = {
        firstName,
        lastName,
    };

    return [globalDataUser, email, password];
};


export const normalizeUserData = (email, password, generalData = {}) => {
    return {
        email, 
        password,
        ...generalData
    };
};


export const normalizeUserPrivateData = (user) => {
    const { id, firstName, lastName, email } = user;

    return {
        id,
        firstName,
        lastName,
        email
    };
};
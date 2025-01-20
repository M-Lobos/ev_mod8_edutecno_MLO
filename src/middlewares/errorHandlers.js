import { CustomError } from '../errors/CustomError.js';
import { InternalServerError } from '../errors/TypeError.js';


export const errorHandler = (err, req, res, _next) => {
    if (!(err instanceof CustomError)) {
        err = new InternalServerError(
            err.message || 'Error Inesperado',
            500,
            'Error inesperado, por favor contacta con nuestro equipo de Soporte'
        );
    }

    const errorResponse = {
        status: 'Error',
        message: err.message,
        code: err.statusCode,
        details: err.details
    };

    console.error(
        `ERROR: 
            --->${err.message}

            --->Details: ${err.details}

            --->Status: ${err.statusCode}
        `
    );

    res.status(err.statusCode).json(errorResponse);
};
import { NotFound } from '../../errors/TypeError.js';

const isEmpty = (data) => {
    if(!data)  return true;

    if(Array.isArray(data) && data.length === 0) return true;

    if(typeof data === 'object' && Object.keys(data).length === 0) return true;

    return false;
};

export const isNotFound = (data) => {
    if(isEmpty(data)) throw new NotFound('No pudimos encontrar la data solicitada', error);
    process.exit(1);
};
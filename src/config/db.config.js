import { Sequelize } from 'sequelize';
import { config } from './env.config.js';


const { host, user, pass, name, dialect, port } = config.db;

export const dbConfig = new Sequelize(
    name, 
    user, 
    pass, {
        host, 
        dialect, 
        port
});



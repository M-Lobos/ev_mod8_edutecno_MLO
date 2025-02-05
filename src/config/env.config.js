import dotenv from 'dotenv';

dotenv.config();

export const config = {
    port: process.env.PORT || 4000,
    secretKey: process.env.SECRET_KEY || 'defaultSecretKey',

    db: {
        name: process.env.DB_NAME || 'database',
        user: process.env.DB_USER || 'user',
        pass: process.env.DB_PASS || 'pass',
        host: process.env.DB_HOST || 'localhost',
        port: process.env.DB_PORT || 5432,
        dialect: process.env.DB_DIALECT || 'postgres'
    }
};
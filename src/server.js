import express from 'express';
import { engine } from 'express-handlebars';
import cors from 'cors';
import { serverInit } from './services/serverInit.js';

import UserRouter from './routes/user.routes.js';
import BootcampRouter from './routes/bootcamp.routes.js'
import authRouter from './routes/auth.routes.js';
import { errorHandler } from './middlewares/errorHandlers.js';

const app = express()

app.use(cors());

const PORT = process.env.PORT || 3000

//middleware para formatos json y multiformato
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine('.hbs', engine({
    extname: '.hbs',
    defaultLayout: 'main',
    layoutsDir: path.join(process.cwd(), 'src', 'views', 'layouts'),
    partialsDir: path.join(process.cwd(), 'src', 'views', 'partials'),
    /* runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true
    } */
}));


app.set('views', path.join(process.cwd(), 'src', 'views')) //Con esto corremos todas las vistas incluso las que estan fuera de partials
app.set('view engine', '.hbs');


app.use('/api/v1', UserRouter);
app.use('/api/v1', BootcampRouter);
//Agregar configuraciones y middlewares para rutas
app.use('/api/v1', authRouter);
//middleware para errores
app.use(errorHandler);

serverInit(app, PORT)

// db.config.js {importación de sequelize y var de entorno} -- pgAdmin -- vinculamos pgAdmin
// dbConection conexión a la base de datos de pg admin
// server init (usa dbconection para levantar servidor)
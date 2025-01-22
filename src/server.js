import express from 'express';
import { engine } from 'express-handlebars';
import path from 'path';
import  cors from 'cors'

import { serverInit } from './services/serverInit.js';

import router from './routes/routes.js';
import viewsRouter from './routes/view.routes.js';
import { errorHandler } from './middlewares/errorHandlers.js';

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.static(path.join(process.cwd(), 'public')))

app.use(cors())

//middleware para formatos json y multiformato
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine('.hbs', engine({
    extname: '.hbs',
    defaultLayout: 'main',
    layoutsDir: path.join(process.cwd(), 'src', 'views', 'layouts'),
    partialsDir: path.join(process.cwd(), 'src', 'views', 'partials'),
}));


app.set('views', path.join(process.cwd(), 'src', 'views')); //Con esto corremos todas las vistas incluso las que estan fuera de partials
app.set('view engine', '.hbs');

app.use('/api/v1', router)
app.use('', viewsRouter)

//middleware para errores
app.use(errorHandler);

serverInit(app, PORT);

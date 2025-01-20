import { dbConnect } from "./dbConnection.js";
import { InternalServerError } from "../errors/TypeError.js";

export const serverInit = async (app, port) => {
    try {
        console.log('Verificando conexión a la base de datos');
        await dbConnect()
        app.listen(port, () => {
            console.log(`Servidor corriendo en el puerto ${port} 🐺`);
        })
    } catch (error) {
        
        throw new InternalServerError('Error al inicializar el servidor ❌',500, error);
    }
}



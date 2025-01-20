import { dbConfig } from "../config/db.config.js";
import { initModels } from "../utils/db/initModel.js";
import { setupAssociation } from "../utils/db/setupAssociations.js";
import { InternalServerError } from "../errors/TypeError.js";

export const dbConnect = async () => {
    try {
        await dbConfig.authenticate();
        initModels(dbConfig);
        setupAssociation();
        await dbConfig.sync({ alter: true })

        console.log('Conexión a Postgres desde de Sequelize ✔')
    } catch (error) {
        throw new InternalServerError('No pudimos conectarnos a la DB', 500, error);
    }
}



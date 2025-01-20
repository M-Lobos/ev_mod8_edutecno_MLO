import { DataTypes, Model } from "sequelize";

export class Bootcamp extends Model { }
export const initBootcamp = (dbConfig) => {
    Bootcamp.init(
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
            },
            title: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: { msg: "The title cannot be an empty field." },
                    len: {
                        args: [20, 110],
                        msg: "The title must be between 20 and 100 characters long."
                    },
                    is: {
                        args: /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s,.:;!¡¿?&(){}[\]'"-]+$/,
                        msg: "The name can only contain letters from the Spanish and English alphabet, accents, umlauts, and spaces."
                    },
                }
            },

            cue: {
                type: DataTypes.INTEGER,
                allowNull: false,
                validate: {
                    notEmpty: { msg: "The CUE cannot be an empty field." },
                    isInt: { msg: "The CUE must be a valid integer." },
                    min: {
                        args: [5],
                        msg: "The CUE must be at least 5."
                    },
                    max: {
                        args: [100],
                        msg: "The CUE must be no greater than 100."
                    }
                }

            },
            description: {
                type: DataTypes.TEXT,
                allowNull: true,
                validate: {
                    notEmpty: { msg: "The description cannot be an empty field." },
                    len: {
                        args: [10, 500], // Por ejemplo, mínimo 10 caracteres y máximo 500
                        msg: "The description must be between 10 and 500 characters long."
                    },
                },
            },
        },
        {
            sequelize: dbConfig,
            modelName: 'Bootcamp',      //nombre del modelo "B"
            tableName: 'bootcamps',     //nombre de la tabla
            timestamps: true,           //registro modificaciones 
            paranoid: true              //softdelete paranoid
        }
    )
}

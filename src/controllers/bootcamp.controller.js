import { Bootcamp } from "../models/Bootcamp.model.js"
import { User } from "../models/User.model.js"


export const createBootcamp = async (req, res) => {
    try {

        const bootcamp = await Bootcamp.create(req.body)

        res.status(201).json({
            message: 'Bootcamp creado con éxito 🐲',
            status: 201,
            data: bootcamp
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Error al crear un bootcamp 💀',
            status: 500,
            data: null
        })

    }
}

export const addUser = async (req, res) => {
    try {
        const { bootcampId, userId } = req.body;  // Se reciben los IDs de bootcamp y usuario
        const bootcamp = await Bootcamp.findByPk(bootcampId, {
            attributes: ['id', 'title']
        });  // Buscar el bootcamp por su ID
        const user = await User.findByPk(userId, {
            attributes: ['id', 'firstName', 'lastName']
        });  // Buscar el usuario por su ID

        // Validar que los IDs existan y que el bootcamp y el usuario existan en la base de datos
        if (!bootcamp || !user) {
            return res.status(404).json({
                message: "Bootcamp o Usuario no encontrado 💀",
                status: 404,
                data: null,
            });
        }

        // Asociar el usuario al bootcamp
        await bootcamp.addUser(user);  // Utilizando la asociación (JOIN) definida anteriormente

        res.status(200).json({
            message: 'Usuario agregado al Bootcamp con éxito ✔',
            status: 200,
            data: { bootcamp, user },
        });
    }

    catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Error al agregar el usuario al Bootcamp 💀',
            status: 500,
            data: null,
        });
    }
};

export const findById = async (req, res) => {
    try {
        const { id } = req.params;
        const bootcamp = await Bootcamp.findByPk(id)


        res.status(200).json({
            message: "Bootcamp encontrado con éxito",
            status: 200,
            data: bootcamp,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Error al buscar el bootcamp",
            status: 500,
            data: null,
        });
    }
};

export const findAll = async (req, res) => {
    try {
        // Obtener todos los usuarios con sus bootcamps asociados
        const users = await User.findAll({
            attributes: ["id", "firstName", "lastName", "email"], // Seleccionamos los campos de usuario que necesitamos
            include: {
                model: Bootcamp, // Incluir los bootcamps asociados
                as: "bootcamps", // El alias que hemos definido en las asociaciones
                attributes: ["id", "title"], // Seleccionamos los campos que queremos del bootcamp
                through: {
                    attributes: [], // Excluir los campos de la tabla intermedia (createdAt, updatedAt)
                },
            },
        });

        if (users.length === 0) {
            return res.status(404).json({
                message: "No hay usuarios encontrados 👀",
                status: 404,
                data: null,
            });
        }

        res.status(200).json({
            message: "Usuarios obtenidos con éxito 🤞",
            status: 200,
            data: users, // Esto contiene una lista de usuarios con sus bootcamps
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Error al obtener los usuarios 🤔",
            status: 500,
            data: null,
        });
    }
};

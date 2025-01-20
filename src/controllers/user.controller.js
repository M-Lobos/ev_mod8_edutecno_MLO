import { User } from "../models/User.model.js";
import { Bootcamp } from "../models/Bootcamp.model.js";



export const updateUserById = async (req, res) => {
    try {
        const { id } = req.params;

        const user = await User.update(req.body, {
            where: { id },
            returning: true,
        })


        res.status(200).json({
            message: "Usuario actualizado con éxito 🤖",
            status: 200,
            data: user,
        });
    } catch (error) {

        res.status(500).json({
            message: "Error al actualizar el Usuario ☠",
            status: 500,
            data: null,
        });
    }
};

export const deleteUserById = async (req, res) => {
    try {
        const { id } = req.params;
        await User.destroy({ where: { id } });

        res.status(200).json({
            message: "Usuario eliminado con éxito 🤖",
            status: 200,
        });
    } catch (error) {

        res.status(500).json({
            message: "Error al eliminar el usuario ☠",
            status: 500,
        })

    }
};

export const findUserById = async (req, res) => {
    try {
        const { id } = req.params; // Obtén el ID del usuario desde los parámetros de la URL

        const user = await User.findByPk(id, {
            attributes: ["id", "firstName", "lastName"], // Seleccionamos los campos de usuario que necesitamos
            include: {
                model: Bootcamp, // Incluir los bootcamps asociados
                as: "bootcamps", // El alias que hemos definido en las asociaciones
                attributes: ["id", "title"], // Seleccionamos los campos que queremos del bootcamp
                through: {
                    attributes: [], // Excluir los campos de la tabla intermedia (createdAt, updatedAt)
                },
            },
        });

        if (!user) {
            return res.status(404).json({
                message: "Usuario no encontrado ⚰",
                status: 404,
                data: null,
            });
        }

        res.status(200).json({
            message: "Usuario y bootcamps obtenidos con éxito ✨",
            status: 200,
            data: user, // Esto contiene el usuario con sus bootcamps
        });
    }

    catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Error al obtener el usuario y sus bootcamps",
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




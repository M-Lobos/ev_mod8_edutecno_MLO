import { error } from "console";
import { Bootcamp } from "../models/Bootcamp.model.js"
import { User } from "../models/User.model.js"

// Crear un bootcamp
export const createBootcamp = async (req, res) => {
    try {
        const bootcamp = await Bootcamp.create(req.body);

        res.status(201).json({
            message: "Bootcamp creado con éxito",
            status: 201,
            data: bootcamp,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Error al crear un bootcamp 💀',
            status: 500,
            data: null
        })
    }
};

export const findAll = async (req, res, next) => {
    try {
        const bootcamps = await Bootcamp.findAll({
            attributes: ["id", "title"],
            include: {
                model: User,
                as: "users",
                attributes: ["id", "firstName", "lastName"],
                through: {
                    attributes: [],
                },
            },
        });

        res.status(200).json({
            message: "Bootcamps obtenidos con éxito ✔",
            status: 200,
            data: bootcamps,
        });
    } catch (error) {
        next(error);
    }
};

//asignar usario a bootcamp
export const addUser = async (req, res) => {
    try {
        const { bootcampId, userId } = req.body;
        //verificar si el bootcampId y userId están presentes en la DB
        if (!bootcampId || !userId) {
            throw new Error(
                "Ingresar bootcampId y userId"
            );
        };
        // rescata los atributos del bootcamp
        const bootcamp = await Bootcamp.findByPk(bootcampId, {
            attributes: ["id", "title"],
        });
        //rescata los atributos del user
        const user = await User.findByPk(userId, {
            attributes: ["id", "firstName", "lastName"],
        });

        // Validar que el bootcamp y el usuario existan en la base de datos
        if (!bootcamp || !user) {
            throw new Error("Bootcamp o Usuario no encontrado");
        };

        // Asociar el usuario al bootcamp
        await bootcamp.addUser(user);

        res.status(200).json({
            message: "Usuario agregado al Bootcamp con éxito",
            status: 200,
            data: { bootcamp, user },
        });
    } catch (error) {
        throw new Error("Algo malió sal, no pudimos agergar el usuario al Bootcamp ❌");
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



//Additional controllers to complete the CRUD

export const updateBootcamp = async (req, res, next) => {
    try {
        const { id } = req.params;

        const bootcamp = await Bootcamp.update(req.body, {
            where: { id },
            returning: true,
        });

        res.status(200).json({
            message: "Bootcamp actualizado con éxito",
            status: 200,
            data: bootcamp,
        });
    } catch (error) {
        next(error);
    }
};

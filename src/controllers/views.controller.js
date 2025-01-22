import { Bootcamp } from "../models/Bootcamp.model.js"

export const renderHomePage = (req, res) => {
    res.render('pages/home')
}

export const renderAboutPage = (req, res) => {
    res.render('pages/about')
}

export const renderListProduct = async (req, res, next) => {
    try {
        const bootcamps = await Bootcamp.findAll({
            attributes: {
                exclude: ["createdAt", "updatedAt"],
            },
            /* plain: true, */ //Usarlo cuando tengamos un findOne más eficiente
            raw: true //Usarlo cuando tengamos un findAll con muchos datos o en filtros con muchos datos
        });

        /* const productos = bootcamps.map(product => product.get({ plain: true })) */

        res.render('bootcamps/list', { bootcamps })
    } catch (error) {
        next(error)
    }
}

export const renderRegisterForm = (req, res) => {
    res.render('usuarios/register');
}

export const renderRegisterSuccess = (req, res) => {
    res.render('usuarios/successRegister')
}
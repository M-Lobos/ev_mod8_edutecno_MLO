import { Bootcamp } from "./Bootcamp.model.js"
import { User } from "./User.model.js"

//Esto es un caso de Muchos es a Muchos
export const setupUserBootcamp = () => {
    User.belongsToMany(Bootcamp, {
        through: 'UserBootcamp',
        foreignKey: 'userId',
        otherKey: 'bootcampId',
        as: 'bootcamps'
    });

    Bootcamp.belongsToMany(User, {
        through: 'UserBootcamp',
        foreignKey: 'bootcampId',
        otherKey: 'userId',
        as: 'users'
    });
}
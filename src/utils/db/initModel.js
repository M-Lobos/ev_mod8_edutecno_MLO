import { initBootcamp } from "../../models/Bootcamp.model.js"
import { initUser } from "../../models/User.model.js"


export const initModels = (config) => {
    try {
        initUser(config)
        initBootcamp(config)

    } catch (error) {
        console.error(error)
    }
}

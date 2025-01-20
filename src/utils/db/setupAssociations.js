import { setupUserBootcamp } from "../../models/index.js";

export const setupAssociation = () => {
    try {
        setupUserBootcamp();
    } catch (error) {
        console.error('Error al inicializar las relaciones ☠' , error);
    }
}
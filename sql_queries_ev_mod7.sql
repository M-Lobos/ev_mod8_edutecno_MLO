SELECT * FROM users; 

SELECT * FROM bootcamps;

SELECT * FROM "UserBootcamp";

/* • Consultando el Bootcamp por id, incluyendo los usuarios. */

SELECT b.id AS id_bootcamp,
        b.title AS tittle_bootcamp, 
	    b."deletedAt",
        u.id AS id_user, 
        u."firstName",  
        u."lastName"  
FROM bootcamps b
JOIN "UserBootcamp" ub ON b.id = ub."bootcampId"
JOIN users u ON ub."userId" = u.id 
WHERE b.id = 'ad3d81b4-a342-47b6-87eb-e4d0a3e9c627' AND b."deletedAt" IS NULL;

/* • Listar todos los Bootcamp con sus usuarios. */
SELECT b.id AS id_bootcamp,
        b.title AS tittle_bootcamp, 
	b."deletedAt",
        u.id AS id_user, 
        u."firstName",  
        u."lastName"  
FROM bootcamps b
JOIN "UserBootcamp" ub ON b.id = ub."bootcampId"
JOIN users u ON ub."userId" = u.id 
AND b."deletedAt" IS NULL;

/* • Consultar un usuario por id, incluyendo los Bootcamp. */

SELECT  u.id AS id_user,
		u."firstName",  
        u."lastName",
		b.title AS tittle_bootcamp
FROM bootcamps b
JOIN "UserBootcamp" ub ON b.id = ub."bootcampId"
JOIN users u ON ub."userId" = u.id 
WHERE u.id = '554a8982-cb0b-4b40-adcb-b376873b507a' AND b."deletedAt" IS NULL;

/* • Listar los usuarios con sus Bootcamp. */

SELECT  u."firstName",  
        u."lastName",
		b.title AS tittle_bootcamp
FROM bootcamps b
JOIN "UserBootcamp" ub ON b.id = ub."bootcampId"
JOIN users u ON ub."userId" = u.id 
AND b."deletedAt" IS NULL;

/* • Actualizar el usuario según su id; por ejemplo: actualizar el usuario con id=1 por Pedro Sánchez. */
INSERT INTO users ("id", "firstName", "lastName", "email", "createdAt", "updatedAt")
VALUES ('054f4986-53e0-451a-bafd-58bf3e17fa61', 'Juan', 'Perez', 'jperez@correo.com', 
NOW(), NOW());

UPDATE users

SET "firstName" = 'Pedro',
        "lastName" = 'Sanchez',
	"email" = 'p.sanchez@correo.com'

WHERE id = '054f4986-53e0-451a-bafd-58bf3e17fa61';


/* • Eliminar un usuario por id; por ejemplo: el usuario con id=1 */

DELETE from users
WHERE id = 'f41d9d91-1c2f-4b77-b156-674b36ed1241';

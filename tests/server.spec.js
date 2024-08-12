const request = require("supertest");
const server = require("../index");

describe("Operaciones CRUD", () => {

    //pregunta 1. Testea que la ruta GET /cafes devuelve un status code 200 y el tipo de dato recibido es un arreglo con por lo menos 1 objeto. (3 Puntos) 
    //solución 1. Testeamos que la ruta "GET /cafes" nos devuelve un status 200 + que el tipo de dato recibido es un arreglo con por lo menos 1 objeto.
    it("GET /cafes obteniendo status 200 y un array con al menos un (1) objeto", async () => {
        const response = await request(server).get("/cafes");
        expect(response.statusCode).toBe(200); // Verificar status 200
        expect(Array.isArray(response.body)).toBe(true); // Verificar si es un array
        expect(response.body.length).toBeGreaterThan(0); // Verifica que el array tiene al menos un objeto
    });

    // pregunta 2. Comprueba que se obtiene un código 404 al intentar eliminar un café con un id que no existe. (2 Puntos)
    // solución 2. Comprobaremos que se obtiene un código 404 al intentar eliminar un café con un id que no existe.
    it("DELETE /cafes/:id devolve un status 404 si el id no existe", async () => {
        const response = await request(server)
            .delete("/cafes/123")  // Utilizando un ID que no existe
            .set("Authorization", "Bearer test123"); // KEY
        expect(response.statusCode).toBe(404);
        expect(response.body.message).toBe("No se encontró ningún cafe con ese id");
    });

    // pregunta 3. Prueba que la ruta POST /cafes agrega un nuevo café y devuelve un código 201. (2 Puntos)
    // solución 3. Probamos que la ruta POST /cafes agrega un nuevo café y devuelve un código 201.
    it("POST /cafes se suma un nuevo café y devolver un status 201", async () => {
        const newCafe = { id: 5, nombre: "Flat White" };
        const response = await request(server)
            .post("/cafes")
            .send(newCafe);
        expect(response.statusCode).toBe(201); // Verifica 201
        expect(response.body).toContainEqual(newCafe);
    });

    // pregunta 4. Prueba que la ruta PUT /cafes devuelve un status code 400 si intentas actualizar un café enviando un id en los parámetros que sea diferente al id dentro del payload. (3 Puntos)
    // solucion 4. Probamos que la ruta PUT /cafes devuelve un status code 400 si intentas actualizar un café enviando un id en los parámetros que sea diferente al id dentro del payload.
    it("PUT /cafes/:id devuelve un status 400 si los IDs no coinciden", async () => {
        const updatedCafe = { id: 3, nombre: "Flat White" };
        const response = await request(server)
            .put("/cafes/4")
            .send(updatedCafe);
        expect(response.statusCode).toBe(400);
        expect(response.body.message).toBe("El id del parámetro no coincide con el id del café recibido");
    });
});

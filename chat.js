import knex from "knex";
import db from "./db/dbConnection.js"

const Knex = knex(db)


Knex.schema
.createTable("chat", (tabla) => {

    tabla.increments("id");
    tabla.date("fecha");
    tabla.string("correo");
    tabla.string("mensaje");     
})
.then(() => console.log("tabla creada!"))
.catch((e) => {
console.log("error!", e);
throw e;
})
.finally(() => {
Knex.destroy();
});
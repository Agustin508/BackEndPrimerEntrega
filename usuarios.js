import knex from "knex";
import sqliteConfig from "./sqliteConfig.js";
const Knex = knex(sqliteConfig);

Knex.schema
.createTable("usuarios", (tabla) => {
    tabla.increments("id");
    tabla.string("nombre");
    tabla.string("apellido");
    tabla.string("correo");
    tabla.string("chat");
    tabla.date("fecha");    
    tabla.integer("rango");
})
.then(() => console.log("tabla creada!"))
.catch((e) => {
console.log("error!", e);
throw e;
})
.finally(() => {
Knex.destroy();
});
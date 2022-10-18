import db from "./db/dbConnection.js"
import knex from "knex";
const Knex = knex(db)

const productos = [
    {nombre:"Monitor",descripcion:"Grande",codigo:"001",foto:"https://image.shutterstock.com/image-vector/realistic-computer-monitor-screen-isolated-600w-1363396547.jpg",precio:160,stock:1000,timestamp:1664534924249},
    {nombre:"Teclado",descripcion:"Mecanico",codigo:"002",foto:"https://image.shutterstock.com/image-vector/realistic-computer-monitor-screen-isolated-600w-1363396547.jpg",precio:180,stock:1000,timestamp:1664534924249},
    {nombre:"Auricular",descripcion:"Inalambrico",codigo:"003",foto:"https://image.shutterstock.com/image-vector/realistic-computer-monitor-screen-isolated-600w-1363396547.jpg",precio:360,stock:1000,timestamp:1664534924249}
]

Knex('Tproductos').insert(productos)
    .then(()=> console.log("data inserted"))
    .catch((error)=>{console.log(error); throw error})
    .finally(()=>{
        Knex.destroy()
    })
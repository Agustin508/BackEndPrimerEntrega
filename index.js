import express from "express"
import productosDB from "./container.js";
import handlebars from "express-handlebars";
const app = express();
import mariaDB from "./db/dbConnection.js"
import sqliteConfig from './sqliteConfig.js';
sqliteConfig.connection.filename = "./db/ecommerce.sqlite"
const dataBaseProd = new productosDB(mariaDB, "tproductos")
const dataBaseChat = new productosDB(sqliteConfig, "chat")

app.use(express.json());
app.set("json spaces", 2);

app.get("/products", async (req, res) => {
    const menu = await dataBaseProd.getAll();
    res.send(menu);
});
app.get("/products/:id", async (req, res) => {
    const { id } = req.params;
    const menu = await dataBaseProd.getbyId(id);
    res.send(menu);
});  
app.post("/products", async (req, res) => {
    //* nombre, descripcion, precio, stock
    const { body } = req;
    await dataBaseProd.InsertValue(body);
    res.send(body);
});

app.put("/products/:id", async (req, res) => {
    const { body } = req;
    const { id } = req.params;
    const result = await dataBaseProd.updateEntry(body, id);
    res.send({ result });
});

app.delete("/products/:id", async (req, res) => {
const { id } = req.params;
const result = await dataBaseProd.deleteEntry(id);
res.send({ result });
});



// chat

import { Server } from 'socket.io';
import { createServer } from 'http';
const httpServer = createServer(app);
const io = new Server(httpServer);


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("views"));


//Array del chat
let mensajes = [{ email: "bienvenida@chat.com", msg: "Bienvenido al chat", date: "01/01/2021 00:00:00" }];

/////////////////////////
// SOCKET IO ////////////
/////////////////////////

io.on("connection", async (socket) => {
  console.log("Se ha conectado un cliente");
  socket.emit('new-message', mensajes);
  socket.on('new-message', async (data) => {
    await dataBaseChat.add(data);
    mensajes.push(data);
    io.sockets.emit('new-message', mensajes);
  });
  socket.emit('new-product', await dataBaseProd.getAll());
  socket.on('new-product', async (data) => {
    await dataBaseProd.add(data);
    const productos = await dataBaseProd.getAll();
    io.sockets.emit('new-product', productos);
  });
});

/////////////////////////
// HANDLE BARS VIEWS/////
/////////////////////////
app.engine(
  "hbs",
  handlebars.engine({
    extname: "hbs",
    layoutsDir: "./views",
    defaultLayout: "main",
  })
);

app.set("views", "./views");
app.set("view engine", "hbs");

app.get("/", async (req, res) => {
  res.render("root", {
    layout: "root",
    title: "Página principal",
    Precio: "Precio",
    addProd: "Añadir Producto",
    compras: await dataBaseProd.getAll(),
    noProd: "No hay productos",
    partialsPath: "./views/partials",
  });
});

httpServer.listen(3000, () => {
    console.log("Server ON");
  });
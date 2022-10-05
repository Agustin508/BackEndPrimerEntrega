const fs = require('fs')
const filename = '../../files/carritos.json';
const path = require('path');
    

const save = async (newItem)  =>{
    let carrito = [];
    const data = await fs.promises.readFile(path.resolve(__dirname, `${filename}`),"utf-8")
    if(data){
        carrito = JSON.parse(data);
        const id = carrito.length +1;
        newItem.id = id;     
        carrito.push(newItem);
            const carritosString = JSON.stringify(carrito);
            await fs.promises.writeFile(path.resolve(__dirname, `${filename}`), carritosString);
            return newItem;
        }
        else{
            newItem.id = 1;
            carrito.push(carrito);
            const carritosString = JSON.stringify(carrito);
            await fs.promises.writeFile(path.resolve(__dirname, `${filename}`), carritosString);
            return carrito;
        }      
}


const getById = async (id) => {
    if (fs.existsSync(path.resolve(__dirname, `${filename}`))){
        const data = fs.readFileSync(path.resolve(__dirname, `${filename}`), 'utf-8');
        const dataParseada = JSON.parse(data);
        if (dataParseada) {
            const carritoItem = dataParseada.find((carrito) => carrito.id == id);
            if (carritoItem) {
                return carritoItem;
            }
        }
    }
    return {};
}

const getAll = async () =>{
    if (fs.existsSync(__dirname, `${filename}`)){
        const data = fs.readFileSync(path.resolve(__dirname, `${filename}`), 'utf-8');
        if (data) {
            const dataParseada = JSON.parse(data);
            return dataParseada;
        }else{
            return {"mensaje": "No hay carritos"};
        }
    }
    return 'Archivo de Carritos no encontrado'; 
}

const deleteById = async (id) => {
    const data = fs.readFileSync(path.resolve(__dirname, `${filename}`), "utf-8");
    const dataParseada = JSON.parse(data);
    const dataFiltrada = dataParseada.filter((objeto) => objeto.id !== id);
    const dataString = JSON.stringify(dataFiltrada);
    fs.writeFileSync(path.resolve(__dirname, `${filename}`), dataString);
    return dataFiltrada;
}

const deleteProductoById = async (id, usuario, idproducto) => {
    const data = fs.readFileSync(path.resolve(__dirname, `${filename}`), "utf-8");
    const dataParseada = JSON.parse(data);
    const dataFiltrada = dataParseada.filter((objeto) => objeto.id !== id);
    const dataString = JSON.stringify(dataFiltrada);
    fs.writeFileSync(path.resolve(__dirname, `${filename}`), dataString);
    return dataFiltrada;
}

const updateById = async (id, productNew)=> {
    if (fs.existsSync(path.resolve(__dirname, `${filename}`))){
        const data = fs.readFileSync(path.resolve(__dirname, `${filename}`), 'utf-8');
        const dataParseada = JSON.parse(data);
        if (dataParseada) {
            const producto = dataParseada.find((producto) => producto.id == id);
            if (producto) {
                const productToUpdate = { id, ...productNew };
                let productFiltered = dataParseada.filter((objeto) => objeto.id !== id);
                productFiltered.push(productToUpdate);
                const dataString = JSON.stringify(productFiltered);
                console.log(dataString);
                fs.writeFileSync(path.resolve(__dirname, `${filename}`), dataString);
                return productToUpdate;
            }
        }
    }
    return {};
}

module.exports = {
    save,
    getById,
    getAll,
    deleteById,
    updateById,
    deleteProductoById
};
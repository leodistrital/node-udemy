const fs = require('fs')

let listadoporhacer = []
let listdoActualizado = []


const guardarDB = () => {
    let data = JSON.stringify(listadoporhacer)
    const nombre_archivo = './db/data.json';
    fs.writeFile(nombre_archivo, data, (err) => {
        if (err) {
            throw err;
            console.log('algo salio mal');

        } else {
            console.log('archivo creado');
        }

    });
}


const cargarDB = () => {
    try {
        listadoporhacer = require('./db/data.json')
    } catch (error) {
        listadoporhacer = []
    }
}


const crear = (descripcion) => {
    cargarDB();
    let porHacer = {
        descripcion,
        completado: false
    }

    listadoporhacer.push(porHacer);
    guardarDB();
    return porHacer;
}



const getListado = () => {
    cargarDB()
    return listadoporhacer
}


const actualizar = (descripcion, estado) => {
    cargarDB()

    for (let listado of listadoporhacer) {
        if (listado.descripcion == descripcion) {
            listado.completado = estado
        }
    }

    guardarDB();

}


const borrado = (descripcion) => {

    cargarDB()

    for (let listado of listadoporhacer) {
        if (listado.descripcion != descripcion) {
            listdoActualizado.push(listado)
        }
    }
    listadoporhacer = listdoActualizado
    guardarDB();

}


module.exports = {
    crear,
    getListado,
    actualizar,
    borrado
}
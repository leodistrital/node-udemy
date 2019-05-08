const lugar = require('./lugar/lugar')
const clima = require('./clima/clima')

const argv = require('yargs').options({
    direcccion: {
        alias: 'd',
        desc: 'descripcion de la ciudad para obtener el clima',
        deman: true
    }
}).argv;

// lugar.getLugar(argv.direcccion).then((obj) => {
//     clima.getClima(obj.lat, obj.long).then((temperatura) => {
//         console.log(temperatura);

//     }).catch((err) => {
//         console.log('error');
//     });


// }).catch((err) => {
//     console.log(err);

// })



const getInfo = async(direcccion) => {
    try {
        const coordenadas = await lugar.getLugar(direcccion);
        const temperatura = await clima.getClima(coordenadas.lat, coordenadas.long)
        return `El Clima en ${coordenadas.nombre} es de: ${temperatura} `
    } catch (e) {

    }
}


getInfo(argv.direcccion).then(console.log).catch(console.log);
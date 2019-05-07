const { argv } = require('./config/yarm')
const colors = require('colors')
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar')


let base = argv.base;
let limite = argv.limite;
let commando = argv._[0]

switch (commando) {
    case 'listar':
        listarTabla(base, limite);

        break;
    case 'crear':
        console.log('crear');
        crearArchivo(base, limite)
            .then((archivo) => {
                console.log(`Se creo el archivo ${archivo}`.bgGreen);

            }).catch((err) => {
                console.log(err);

            })
        break;

    default:
        console.log('comando no reconocido');
        break;
}
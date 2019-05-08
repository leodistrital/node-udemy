const argv = require('./config/yargs').argv
const colors = require('colors');
const { crear, getListado, actualizar, borrado } = require('./por-hacer')

// console.log(argv._[0]);

let comando = argv._[0];
switch (comando) {
    case 'crear':
        // console.log('crear tarea');
        let tarea = crear(argv.descripcion)
        console.log(tarea);

        break;

    case 'listar':
        console.log('listar tareas');
        let listadoCompleto = getListado()
        for (let listado of listadoCompleto) {
            console.log('============Por hacer: ========'.green);
            console.log(listado.descripcion);
            console.log(`Estado: ${listado.completado}`);
            console.log('==============================='.green);
        }

        break;
    case 'actualizar':
        actualizar(argv.descripcion, argv.completado)
        console.log('actualizar una tarea');
        break;

    case 'borrar':
        borrado(argv.descripcion)
        console.log('tarea borrada');
        break;

    default:
        console.log('comando no reconocido');
        break;
}
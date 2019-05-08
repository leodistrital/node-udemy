const argv = require('yargs')
    .command('crear', 'Crear una tarea', {
        descripcion: {
            demand: true,
            alias: 'd'
        }
    })
    .command('actualizar', 'cambiar el estado de la tarea', {
        descripcion: {
            demand: true,
            alias: 'd'
        },
        completado: {
            default: true,
            alias: 'c'
        }
    })
    .command('borrar', 'borra una tarea tarea', {
        descripcion: {
            demand: true,
            alias: 'd'
        }
    })
    .help()
    .argv


module.exports = {
    argv
}
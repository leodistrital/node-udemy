const parametros = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        default: 10,
        alias: 'l'
    }
}


const argv = require('yargs')
    .command('listar', 'imprime con consla una tabla de multiplicar', parametros)
    .command('crear', 'imprime con consla una tabla de multiplicar', parametros)
    .help()
    .argv



module.exports = {
    argv
}
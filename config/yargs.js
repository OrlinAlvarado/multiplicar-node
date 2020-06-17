const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consulta la tabla de multiplicar', opts)
    .command('crear', 'Genera la tabla de multiplicar en un archivo', opts)
    .help()
    .argv


module.exports = {
    argv
}
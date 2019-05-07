const fs = require('fs');
const colors = require('colors')

let listarTabla = (base, limite = 10) => {
    console.log('==================='.green);
    console.log('==================='.red);

    for (let i = 0; i <= limite; i++) {
        console.log(`${base} X ${limite} = ${base*limite}`);
    }
}



let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`no es un numero: ${base}`)
            return
        }
        let data = ''
        let nombre_archivo = `./03-bases-node/tablas/tabla-${base}.txt`
        for (let i = 1; i <= limite; i++) {
            resultado = base * i
            data += base + ' X ' + i + " = " + resultado + '\n'
        }

        fs.writeFile(nombre_archivo, data, (err) => {
            if (err) {
                throw err;
                reject(err)
            } else {
                resolve(nombre_archivo)
            }

        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}
// setTimeout(() => {
//     console.log('hola mundo')
// }, 2000)

let getUsuarioById = (id, callback) => {
    let usuario = {
        nombre: 'Leonardo',
        // id: id
        id
    }
    if (id === 20) {
        callback('el usuario no existe en la consulta')
    } else {
        callback(null, usuario)
    }
}


getUsuarioById(2, (err, usuario) => {
    if (err) {
        return console.log(err);

    } else {
        console.log('usuario de base de datos es ', usuario)
    }
})
let empleados = [{
        id: 1,
        nombre: 'leonardo'
    },
    {
        id: 2,
        nombre: 'Andres'
    }, {
        id: 3,
        nombre: 'Juan'
    }
];


let salarios = [{
        id: 1,
        salario: 100
    },
    {
        id: 2,
        salario: 2000
    }
];


let getEmpleado = (id, callback) => {
    let empleadoDB = empleados.find(empleado => empleado.id === id)
    if (!empleadoDB) {
        callback(`no existe el empleado con el id: ${id}`)
    } else {
        callback(null, empleadoDB)
    }

}





// let getSalario = function(empleado, callback) {
//     getEmpleado(empleado, (err, empleado) => {
//         if (err) {
//             callback(err);
//         } else {
//             let id_empleado = empleado.id;
//             let salarioDB = salarios.find(function(sueldo) {
//                 if (sueldo.id == id_empleado) {
//                     callback(null, sueldo.salario)
//                 }
//             });
//         }
//     })





// }



let getSalario = function(empleado, callback) {
    let salarioDB = salarios.find(function(salario) {
        return salario.id == empleado.id
    })

    if (!salarioDB) {
        callback('no se encontro un salarario para ' + empleado.nombre);
    } else {
        callback(null, {
            nombre: empleado.nombre,
            salario: salarioDB.salario,
            id: empleado.id
        })
    }
}

getEmpleado(2, (err, empleado) => {
    if (err) {
        return console.log(err);
    }
    // console.log(empleado);
    getSalario(empleado, function(err, respuesta) {
        if (err) {
            return console.log(err);
        }
        console.log(`El salario de ${respuesta.nombre} es de ${respuesta.salario}`);

    })
})





// getSalario(3, function(err, valor) {
//     if (err) {
//         console.log('no se encontro un sueldo');

//     } else {
//         console.log('el empleado se gana:', valor);
//     }
// })
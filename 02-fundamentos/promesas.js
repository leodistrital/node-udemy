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


let getEmpleado = (id) => {

    return new Promise((resolve, reject) => {
        let empleadoDB = empleados.find(empleado => empleado.id === id)
        if (!empleadoDB) {
            reject(`no existe el empleado con el id: ${id}`)
        } else {
            resolve({ empleadoDB })
        }
    });


}


getEmpleado(1).then((empleado) => {
    console.log('Empleado de la DB', empleado);
    getSueldo(empleado).then(respuesta => {
        console.log(respuesta);

    }).then((empleado) => {
        console.log(sueldo);
    }, (err) => console.log(err));
}, (err) => {
    console.log(err);

});




let getSueldo = (empleado) => {
    return new Promise((resolve, reject) => {
        let salarioDB = salarios.find(salario => salario.id === empleado.empleadoDB.id)
        if (!salarioDB) {
            reject('este empleado no tiene sueldo ', salarioDB)
        } else {
            resolve({ sueldo: salarioDB })
        }
    })
}



// getSueldo(3).then((sueldo) => {
//     console.log('desde get sueldo: ' + sueldo.sueldo);

// })
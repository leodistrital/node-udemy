let deadpool = {
    nombre: "Wade",
    Apellido: "Winston",
    poder: 'regeneracion',
    getNombre: function() {
        return `${this.nombre}  ${this.Apellido} - poder  ${this.poder}`
    }
}


// console.log(deadpool.getNombre());

// let nombre = deadpool.nombre;
// let apellido = deadpool.Apellido;
// let poder = deadpool.poder;


let { nombre: nom, Apellido: ape, poder: pod } = deadpool

console.log(nom, ape, pod)
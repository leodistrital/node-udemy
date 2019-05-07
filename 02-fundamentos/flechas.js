// function sumar(a, b) {
//     return a + b;
// }

// let sumar = (a, b) => a + b


// function saludar() {
//     return 'Hola mundo'
// }

// let saludar = () => 'Hola mundo'

// console.log(sumar(10, 20));


// console.log(saludar());



let deadpool = {
    nombre: "Wade",
    Apellido: "Winston",
    poder: 'regeneracion',
    getNombre() {
        return `${this.nombre}  ${this.Apellido} - poder  ${this.poder}`
    }
}

console.log(deadpool.getNombre())
let nombre = 'Deadpool'
let real = 'Leonardo'

console.log(nombre + ' ' + real);
console.log(`${nombre} es: ${real}`);

function getNombre() {
    return `${nombre} ${real}`
}

console.log(`el nombre de ${getNombre()}`);
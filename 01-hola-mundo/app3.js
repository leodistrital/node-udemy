console.log('inicio programa')

setTimeout(function() {
    console.log('primer timeout');

}, 3000)


setTimeout(function() {
    console.log('segundo timeout');

}, 0)


setTimeout(function() {
    console.log('tercer timeout');

}, 1000)

console.log('fin del programa');
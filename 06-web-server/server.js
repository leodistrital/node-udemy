const express = require('express')
const app = express()
const hbs = require('hbs');
require('./hbs/helper')

const port = process.env.PORT || 3000;


app.use(express.static(__dirname + '/public'))
hbs.registerPartials(__dirname + '/views/parciales');

app.set('view engine', 'hbs');




app.get('/', function(req, res) {

    res.render('home', {
        nombre: 'leonarDO cortes suarez DOS'
    })
})


app.get('/about', function(req, res) {

    res.render('about')
})


app.listen(port, () => {
    console.log('escuchando por el puerto ' + port);

})
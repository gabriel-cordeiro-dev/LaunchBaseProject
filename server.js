const express = require('express')// requisitando o express
const nunjucks = require('nunjucks')

const server = express()//inserindo o express no server

server.use(express.static('public'))

//configurando template engine
server.set('view engine', 'njk')

nunjucks.configure('views', {
    express:server
})


server.get('/', function (req,res) {
    return res.render('about')
})

server.get('/certificacoes', function (req,res) {
    return res.render('certificacoes')
})

//configurar servidor na porta 5000
server.listen(5000, function () {
    console.log('server is running')
})
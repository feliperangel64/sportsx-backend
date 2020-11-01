const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

//Iniciando o app
const app = express()

//Permite receber dados json
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//Permite acessos de aplicações externas
app.use(cors())

//Rotas
app.use('/api', require('./src/routes/clientes'))

//Listener
app.listen('3001')

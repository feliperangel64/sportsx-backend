const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const Clientes = require('./clientes')
const dboperations = require('./dboperations')

//Iniciando o app
const app = express()

//Rotas
const router = express.Router()

//Permite receber dados json
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//Permite acessos de aplicações externas
app.use(cors())

//Rotas
app.use('/api', router)

//Middleware
router.use((req, res, next) => {
  console.log('middleware')
  next()
})

router.route('/clientes').get((req, res) => {
  dboperations.getClientes().then((result) => {
    res.json(result[0])
  })
})

router.route('/clientes/:id').get((request, response) => {
  dboperations.getCliente(request.params.id).then((result) => {
    response.json(result[0])
  })
})

router.route('/clientes/:id').delete((request, response) => {
  dboperations.deleteCliente(request.params.id).then((result) => {
    response.json(result[0])
  })
})

router.route('/clientes').post((req, res) => {
  const cliente = { ...req.body }
  dboperations.addCliente(cliente).then((result) => {
    res.status(201).json(result)
  })
})

router.route('/clientes/:id').put((req, res) => {
  dboperations.updateCliente(req.params.id, req.body).then((result) => {
    res.status(200).json(result)
  })
})

//Listener
app.listen('3001')

const express = require('express')
const routes = express.Router()

const Clientes = require('../clientes')
const dboperations = require('../dboperations')

routes.get('/', (req, res) => {
  dboperations.getClientes().then((result) => {
    console.log(result)
  })
  res.send('ok')
})

module.exports = routes

const express = require('express')
const router = express.Router()

const ClienteController = require('../controllers/ClienteController')

router.get('/clientes', ClienteController.findAll)
router.get('/clientes/:id', ClienteController.findById)
router.get('/clientes/busca/:name', ClienteController.findByName)
router.delete('/clientes/:id', ClienteController.remove)
router.post('/clientes/', ClienteController.create)
router.put('/clientes/:id', ClienteController.update)

module.exports = router

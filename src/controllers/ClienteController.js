const config = require('../configs/dbConfig')
const sql = require('mssql')

const Clientes = require('../models/Clientes')

const findAll = async (req, res) => {
  try {
    let pool = await sql.connect(config)
    let clientes = await new Clientes(pool).findAll()
    return res.status(200).json(clientes)
  } catch (error) {
    console.log(error)
    return res.status(500).send('Não foi possível buscar os clientes.')
  }
}

const findById = async (req, res) => {
  try {
    let pool = await sql.connect(config)
    let cliente = await new Clientes(pool).findById(sql.Int, req.params.id)
    return res.status(200).json(cliente)
  } catch (error) {
    console.log(error)
    return res.status(500).send('Não foi possível encontrar o cliente.')
  }
}

const findByName = async (req, res) => {
  try {
    let pool = await sql.connect(config)
    let cliente = await new Clientes(pool).findByName(req.params.name)
    return res.status(200).json(cliente)
  } catch (error) {
    console.log(error)
    return res.status(500).send('Não foi possível encontrar o cliente.')
  }
}

const remove = async (req, res) => {
  try {
    let pool = await sql.connect(config)
    let response = await new Clientes(pool).remove(sql.Int, req.params.id)
    return res.status(204).json(response)
  } catch (error) {
    console.log(error)
    return res.status(500).send('Não foi possível deletar o cliente.')
  }
}

const create = async (req, res) => {
  try {
    let pool = await sql.connect(config)
    let response = await new Clientes(pool).create(req.body)
    return res.status(201).json(response)
  } catch (error) {
    console.log(error)
    return res.status(500).send('Não foi possível inserir o cliente.')
  }
}

const update = async (req, res) => {
  const { id } = req.params
  try {
    let pool = await sql.connect(config)
    let response = await new Clientes(pool).update(sql.Int, id, req.body)
    return res.status(200).json(response)
  } catch (error) {
    console.log(error)
    return res.status(500).send('Não foi possível atualizar o cliente.')
  }
}

module.exports = {
  findAll,
  findById,
  findByName,
  remove,
  create,
  update,
}

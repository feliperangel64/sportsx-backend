const config = require('../configs/dbConfig')
const sql = require('mssql')
const Clientes = require('../models/Clientes')

const findAll = async (req, res) => {
  let pool = await sql.connect(config)
  let clientes = await new Clientes(pool).findAll()
  return res.json(clientes)
}

const findById = async (req, res) => {
  try {
    let pool = await sql.connect(config)
    let cliente = await new Clientes(pool).findById(sql.Int, req.params.id)
    return res.json(cliente)
  } catch (error) {
    console.log(error)
  }
}

const remove = async (req, res) => {
  try {
    let pool = await sql.connect(config)
    let cliente = await new Clientes(pool).remove(sql.Int, req.params.id)
    return res.json(cliente)
  } catch (error) {
    console.log(error)
  }
}

const create = async (req, res) => {
  const {
    TipoPessoa,
    NomeCliente,
    RazaoSocial,
    Cep,
    Email,
    Classificacao,
    TelefoneResidencial,
    TelefoneComercial,
  } = req.body
  try {
    let pool = await sql.connect(config)
    let cliente = await new Clientes(pool).create(
      TipoPessoa,
      NomeCliente,
      RazaoSocial,
      Cep,
      Email,
      Classificacao,
      TelefoneResidencial,
      TelefoneComercial,
    )
    res.status(201).json(cliente)
  } catch (err) {
    console.log(err)
  }
}

const update = async (req, res) => {
  const {
    ClienteId,
    TipoPessoa,
    NomeCliente,
    RazaoSocial,
    Cep,
    Email,
    Classificacao,
    TelefoneResidencial,
    TelefoneComercial,
  } = req.body
  try {
    let pool = await sql.connect(config)
    let cliente = await new Clientes(pool).update(
      sql.Int,
      ClienteId,
      TipoPessoa,
      NomeCliente,
      RazaoSocial,
      Cep,
      Email,
      Classificacao,
      TelefoneResidencial,
      TelefoneComercial,
    )
    res.status(201).json(cliente)
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  findAll,
  findById,
  remove,
  create,
  update,
}

var config = require('./dbconfig')
const sql = require('mssql')

async function getClientes() {
  try {
    let pool = await sql.connect(config)
    let clientes = await pool.request().query('SELECT * from Clientes')
    return clientes.recordsets
  } catch (error) {
    console.log(error)
  }
}

async function getCliente(ClienteId) {
  try {
    let pool = await sql.connect(config)
    let cliente = await pool
      .request()
      .input('input_parameter', sql.Int, ClienteId)
      .query('SELECT * from Clientes where ClienteId = @input_parameter')
    return cliente.recordsets
  } catch (error) {
    console.log(error)
  }
}

async function deleteCliente(ClienteId) {
  try {
    let pool = await sql.connect(config)
    let cliente = await pool
      .request()
      .input('input_parameter', sql.Int, ClienteId)
      .query('DELETE Clientes where ClienteId = @input_parameter')
    return cliente.recordsets
  } catch (error) {
    console.log(error)
  }
}

async function addCliente(cliente) {
  try {
    let pool = await sql.connect(config)
    let insertClient = await pool
      .request()
      .query(
        `INSERT INTO Clientes(ClienteId, TipoPessoa, NomeCliente, RazaoSocial, Cep, Email, Classificacao, TelefoneResidencial, TelefoneComercial) VALUES(${cliente.ClienteId},'${cliente.TipoPessoa}','${cliente.NomeCliente}','${cliente.RazaoSocial}','${cliente.Cep}','${cliente.Email}','${cliente.Classificacao}','${cliente.TelefoneResidencial}','${cliente.TelefoneComercial}')`,
      )
    return insertClient.recordsets
  } catch (err) {
    console.log(err)
  }
}

async function updateCliente(ClienteId, cliente) {
  try {
    let pool = await sql.connect(config)
    let update = await pool
      .request()
      .input('input_parameter', sql.Int, ClienteId)
      .query(
        `UPDATE Clientes SET TipoPessoa='${cliente.TipoPessoa}', NomeCliente='${cliente.NomeCliente}', RazaoSocial='${cliente.RazaoSocial}', Cep='${cliente.Cep}', Email='${cliente.Email}', Classificacao='${cliente.Classificacao}', TelefoneResidencial='${cliente.TelefoneResidencial}', TelefoneComercial='${cliente.TelefoneComercial}' where ClienteId = @input_parameter`,
      )
    return update.recordsets
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  getClientes: getClientes,
  getCliente: getCliente,
  deleteCliente: deleteCliente,
  addCliente: addCliente,
  updateCliente: updateCliente,
}

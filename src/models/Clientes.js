module.exports = class SistemaDAO {
  constructor(connection) {
    this._connection = connection
    this._table = 'Clientes'
  }

  async findAll() {
    try {
      let clientes = await this._connection
        .request()
        .query('SELECT * from Clientes')
      return clientes.recordsets[0]
    } catch (error) {
      console.log(error)
    }
  }

  async findById(type, param) {
    try {
      let cliente = await this._connection
        .request()
        .input('input_parameter', type, param)
        .query('SELECT * from Clientes where ClienteId = @input_parameter')
      return cliente.recordsets[0]
    } catch (error) {
      console.log(error)
    }
  }

  async remove(type, param) {
    try {
      let cliente = await this._connection
        .request()
        .input('input_parameter', type, param)
        .query('DELETE Clientes where ClienteId = @input_parameter')
      return cliente.recordsets[0]
    } catch (error) {
      console.log(error)
    }
  }

  async create(
    ClienteId,
    TipoPessoa,
    NomeCliente,
    RazaoSocial,
    Cep,
    Email,
    Classificacao,
    TelefoneResidencial,
    TelefoneComercial,
  ) {
    try {
      let cliente = await this._connection
        .request()
        .query(
          `INSERT INTO Clientes(ClienteId, TipoPessoa, NomeCliente, RazaoSocial, Cep, Email, Classificacao, TelefoneResidencial, TelefoneComercial) VALUES(${ClienteId},'${TipoPessoa}','${NomeCliente}','${RazaoSocial}','${Cep}','${Email}','${Classificacao}','${TelefoneResidencial}','${TelefoneComercial}')`,
        )
      return cliente.recordsets[0]
    } catch (error) {
      console.log(error)
    }
  }

  async update(
    type,
    ClienteId,
    TipoPessoa,
    NomeCliente,
    RazaoSocial,
    Cep,
    Email,
    Classificacao,
    TelefoneResidencial,
    TelefoneComercial,
  ) {
    try {
      let cliente = await this._connection
        .request()
        .input('input_parameter', type, ClienteId)
        .query(
          `UPDATE Clientes SET TipoPessoa='${TipoPessoa}', NomeCliente='${NomeCliente}', RazaoSocial='${RazaoSocial}', Cep='${Cep}', Email='${Email}', Classificacao='${Classificacao}', TelefoneResidencial='${TelefoneResidencial}', TelefoneComercial='${TelefoneComercial}' where ClienteId = @input_parameter`,
        )
      return cliente.recordsets[0]
    } catch (error) {
      console.log(error)
    }
  }
}

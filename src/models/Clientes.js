module.exports = class SistemaDAO {
  constructor(connection) {
    this._connection = connection
    this._table = 'Clientes'
  }

  async findAll() {
    let clientes = await this._connection
      .request()
      .query(`SELECT * FROM  ${this._table}`)
    return clientes.recordsets[0]
  }

  async findById(type, param) {
    let cliente = await this._connection
      .request()
      .input('input_parameter', type, param)
      .query(`SELECT * FROM ${this._table} WHERE ClienteId = @input_parameter`)
    return cliente.recordsets[0]
  }

  async findByName(param) {
    let cliente = await this._connection
      .request()
      .query(`SELECT * FROM ${this._table} WHERE NomeCliente LIKE '%${param}%'`)
    return cliente.recordsets[0]
  }

  async remove(type, param) {
    let ret = await this._connection
      .request()
      .input('input_parameter', type, param)
      .query(`DELETE ${this._table} WHERE ClienteId = @input_parameter`)
    return ret
  }

  async create({
    TipoPessoa,
    Cpf,
    Cnpj,
    NomeCliente,
    RazaoSocial,
    Cep,
    Email,
    Classificacao,
    TelefoneResidencial,
    TelefoneComercial,
  }) {
    let ret = await this._connection.request().query(
      `INSERT INTO ${this._table} (TipoPessoa, Cpf, Cnpj, NomeCliente, RazaoSocial, Cep, Email, Classificacao, TelefoneResidencial, TelefoneComercial) 
          VALUES('${TipoPessoa}','${Cpf}','${Cnpj}','${NomeCliente}','${RazaoSocial}','${Cep}','${Email}','${Classificacao}','${TelefoneResidencial}','${TelefoneComercial}')`,
    )
    return ret
  }

  async update(type, ClienteId, cliente) {
    const {
      TipoPessoa,
      Cpf,
      Cnpj,
      NomeCliente,
      RazaoSocial,
      Cep,
      Email,
      Classificacao,
      TelefoneResidencial,
      TelefoneComercial,
    } = cliente
    let ret = await this._connection
      .request()
      .input('input_parameter', type, ClienteId)
      .query(
        `UPDATE ${this._table} 
        SET TipoPessoa='${TipoPessoa}', Cpf='${Cpf}', Cnpj='${Cnpj}', NomeCliente='${NomeCliente}', RazaoSocial='${RazaoSocial}', Cep='${Cep}', Email='${Email}', Classificacao='${Classificacao}', TelefoneResidencial='${TelefoneResidencial}', TelefoneComercial='${TelefoneComercial}' 
        WHERE ClienteId = @input_parameter`,
      )
    return ret
  }
}

class Clientes {
  constructor(
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
    this.ClienteId = ClienteId
    this.TipoPessoa = TipoPessoa
    this.NomeCliente = NomeCliente
    this.RazaoSocial = RazaoSocial
    this.Cep = Cep
    this.Email = Email
    this.Classificacao = Classificacao
    this.TelefoneResidencial = TelefoneResidencial
    this.TelefoneComercial = TelefoneComercial
  }
}

module.exports = Clientes

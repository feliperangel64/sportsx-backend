const config = {
  user: 'sa',
  password: '123456',
  server: '127.0.0.1',
  database: 'sportsxdb',
  options: {
    trustedconnection: true,
    enableArithAbort: true,
    instancename: 'SQLEXPRESS',
  },
  port: 1433,
}

module.exports = config

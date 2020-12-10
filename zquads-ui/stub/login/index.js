const getLogin = {
    method: 'POST',
    path: '/login',
    handler: () => ({ token: 'token' })
  }
  
  module.exports = {
    getLogin,
  }
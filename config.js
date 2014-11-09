var path = require('path');
var deepExtend = require('deep-extend');

var defaults = {
  paths: {
    contentPath: path.join(__dirname, 'content'),
  },
  database: {
    client: 'sqlite3',
    connection: {
      filename: path.join(__dirname, 'content/data/aleksey.io.db')
    }
  }
};

var config = module.exports = {

  development: deepExtend(defaults, {
    url: 'http://127.0.0.1:3000',
    server: {
      host: '127.0.0.1',
      port: '3000'
    },
    logging: false
  }),

  production: deepExtend(defaults, {
    url: 'http://aleksey.io',
    server: {
      host: '127.0.0.1',
      port: '3080'
    }
  })

};
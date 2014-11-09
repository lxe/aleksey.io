var path = require('path');

var config = module.exports = {
  development: {
    paths: {
      contentPath: path.join(__dirname, 'content'),
    },
    url: 'http://127.0.0.1:3000',
    database: {
      client: 'sqlite3',
      connection: {
        filename: path.join(__dirname, 'content/data/aleksey.io.db')
      }
    },
    server: {
      host: '127.0.0.1',
      port: '3000'
    },
    logging: false
  }
};
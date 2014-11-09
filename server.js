var path = require('path');
var ghost = require('ghost');

module.exports = startServer;

if (require.main === module) {
  startServer(function noop () {
    // noop;
  });
}

function startServer(callback) {
  ghost({
    config: path.join(__dirname, 'config.js')
  }).then(onGhostInit);
}

function onGhostInit(ghostServer, callback) {
  ghostServer.start(callback);
};


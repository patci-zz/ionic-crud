var os = require('os');
var ifaces = os.networkInterfaces();
var local = ifaces.en0[1].address;

module.exports = {
  SERVER_ADDRESS: local + ':3000'
};

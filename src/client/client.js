const wsManager = require("../ws/manager.js")

class client {
  constructor(token) {
//Connecting to the Discord client.
    new wsManager.connect(token)
  }
}
 //Exporting module
module.exports = client


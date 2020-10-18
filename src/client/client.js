const wsManager = require("../ws/manager.js")

class client {
  constructor(token) {
    wsManager.connect(token)
  }
}
 
module.exports = client


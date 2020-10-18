const ws = require("ws")
let api = new ws("wss://gateway.discord.gg")

class manager {
  connect(token) {
    api.on("message", async message => {
      let req = JSON.parse(message)
  
    let Gateway = {
        "op": 2,
        "d": {
          "token": token,
          "properties": {
          "$os": "linux",
          "$browser": "dishy",
          "$device": "dishy"
        },

}}
   let HeartBeat = { "op":1, "d":null }
   this.api_message = req
   this.heartbeat_interval = req.d.heartbeat_interval

  switch(req.op) {
     case 11 : setInterval(() => {
     api.send(JSON.stringify(HeartBeat))
    }, req.d.heartbeat_interval)
       break;
     case 10 : api.send(JSON.stringify(Gateway))
       break;
     case 9 : throw new Error("[DISHY SESSION ERROR] - ERROR OCCURRED WHEN STARTING SESSION!")
       break;
  }
      
   });
    
api.on("close", (code, reason) => {
  
  switch(code) {
    case 4004 : throw new Error("[DISHY INVALID TOKEN] - AN INVALID TOKEN HAS BEEN INSERTED!")
    break;
  }
  
})
    
  }
}

let wsManager = new manager()

module.exports = wsManager 
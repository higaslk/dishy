const ws = require("ws")
let api = new ws("wss://gateway.discord.gg")

class manager {
  connect(token) {
    api.on("message", async message => {
      let req = JSON.parse(message)
  
//Discord HeartBeat Gateway
    let Gateway = {
        "op": 2,
        "d": {
          "token": token,
          "properties": {
          "$os": "linux",
          "$browser": "your npm name here",
          "$device": "your npm name here"
        },

}}
   let HeartBeat = { "op":1, "d":null }
   this.api_message = req
   this.heartbeat_interval = req.d.heartbeat_interval

  switch(req.op) {
//Sending the HeartBeat.
     case 11 : setInterval(() => {
     api.send(JSON.stringify(HeartBeat))
    }, req.d.heartbeat_interval)
       break;
//Checking if "Hello" is received.
     case 10 : api.send(JSON.stringify(Gateway))
       break;
//Checking if there was an error sending the data to the Gateway.
     case 9 : throw new Error("ERROR OCCURRED WHEN STARTING SESSION!")
       break;
  }
      
   });
 
//Checking if the token is valid. 
//If you want to implement more, see here some status codes.
//https://discord.com/developers/docs/topics/opcodes-and-status-codes
api.on("close", (code, reason) => {
  switch(code) {
    case 4004 : throw new Error("AN INVALID TOKEN HAS BEEN INSERTED!")
    break;
  }
  
})
    
  }
}

//Exprotecting module
module.exports = wsManager 

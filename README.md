# Login example with the discord API
dishy is a discontinued open source npm project.
The purpose of the package was to be a login npm with the discord API with embedded database.
Use the code to log in with the Discord API.
# Example
```javascript
const dishy = require(__dirname + "/src/client.js")
const client = new dishy.client("your bot token HERE")
```
After that the bot will go online!
I am using WS to connect to the Discord API. See more about [WS here](https://npmjs.com/ws)

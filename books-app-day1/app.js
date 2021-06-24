require("dotenv/config")

require("./db")

const express = require("express")
const app = express()

require("./config")(app)

app.locals.title = `Bookaria_`

const index = require("./routes/index")
app.use("/", index)

require("./error-handling")(app)

module.exports = app
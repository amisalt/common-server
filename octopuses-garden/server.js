const express = require("express")
require("dotenv").config()
const gameInfoRouter = require("./routers/gameInfoRouter")
const gamePlayedRouter = require("./routers/gamePlayedRouter")

const PORT = process.env.STATUS === 'production' ? process.env.PORT_PROD : process.env.PORT_DEV
const app = express()

app.use("/image", express.static(__dirname+"/octopuses-garden/static"))
app.use("/gameInfo", gameInfoRouter)
app.use("/game", gamePlayedRouter)

module.exports = app
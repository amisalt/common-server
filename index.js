const express = require("express")
const cookieParser = require("cookie-parser")
require("dotenv").config()

const octopusesGarden = require("./octopuses-garden/server")
const commonAuth = require("./common-auth/authRouter")

const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };
const PORT_DEV = Number(process.env.PORT_DEV)
const PORT_PROD = Number(process.env.PORT_PROD)

const PORT = process.env.STATUS === 'production' ? PORT_PROD : PORT_DEV
const app = express()
const http = require("http")
const server = http.createServer(app)

app.use(express.json())
app.use(express.urlencoded())
app.use(cookieParser())
app.use("/octopuses-garden", octopusesGarden)
app.use("/auth", commonAuth)

const start = async ()=>{
    try{
        server.listen(PORT_DEV, ()=>{
            console.log(`server (${PORT_DEV}) started ><`);
        })
        app.get('/backend', (req, res) => {
            res.send({ express: 'backend is connected ><' })
        });
    }catch(e){
        console.error(e);
        await mongoose.disconnect();
    }
}
start()
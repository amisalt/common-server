const express = require("express")
require("dotenv").config()
const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };
const PORT_DEV = Number(process.env.PORT_DEV)
const PORT_PROD = Number(process.env.PORT_PROD)

const PORT = process.env.STATUS === 'production' ? PORT_PROD : PORT_DEV
const app = express()
const http = require("http")
const server = http.createServer(app)

const start = async ()=>{
    try{
        await mongoose.connect(process.env.URI, clientOptions)
        server.listen(PORT, ()=>{
            console.log(`server (${PORT}) started ><`);
        })
        app.get('/backend', (req, res) => {
            res.send({ express: 'backend is connected ><' })
        });
        await mongoose.connection.db.admin().command({ ping: 1 });
        console.log("database is connected ><");
        io.on('connection', (socket) => {
            console.log(`user connected ${socket.id}`);
            socket.emit("yourID", socket.id)
            socket.on('disconnect', () => {
                console.log('user disconnected');
            });
        });
    }catch(e){
        console.error(e);
        await mongoose.disconnect();
    }
}
start()
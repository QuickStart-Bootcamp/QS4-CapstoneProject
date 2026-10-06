import 'dotenv/config';
import express from 'express'
import cors from 'cors'
import connectToDB from './dbConnetion.js'
import studentsRouter from './routers/studentsRouter.js'
import aiRouter from './routers/aiRouter.js'
import dns from 'dns/promises'
import net from 'net'


const server = express()
server.use(cors())
server.use(express.json())
server.use(express.urlencoded({ extended: true }))


async function testMongoPort() {
  const hosts = [
    'ac-d7zzkoh-shard-00-00.vdch7uj.mongodb.net',
    'ac-d7zzkoh-shard-00-01.vdch7uj.mongodb.net',
    'ac-d7zzkoh-shard-00-02.vdch7uj.mongodb.net'
  ]

  for (const host of hosts) {
    const socket = net.createConnection(27017, host)

    socket.setTimeout(5000)

    socket.on('connect', () => {
      console.log("MongoDB TCP CONNECTED:", host)
      socket.destroy()
    })

    socket.on('timeout', () => {
      console.log("MongoDB TCP TIMEOUT:", host)
      socket.destroy()
    })

    socket.on('error', (error) => {
      console.log("MongoDB TCP ERROR:", host, error.code)
    })
  }
}


testMongoPort()


connectToDB()
server.use("/students", studentsRouter)
server.use("/ai", aiRouter)

server.get ("/", (req,res) => {
  res.send ("This is the server running")
})


const PORT = process.env.PORT || 4000;

server.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});

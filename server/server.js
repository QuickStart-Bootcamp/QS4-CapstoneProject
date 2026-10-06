import 'dotenv/config';
import express from 'express'
import cors from 'cors'
import connectToDB from './dbConnetion.js'
import studentsRouter from './routers/studentsRouter.js'
import aiRouter from './routers/aiRouter.js'
import net from 'net'
import tls from 'tls'

console.log("Node:", process.version)
console.log("OpenSSL:", process.versions.openssl)

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

async function testMongoTLS() {
  const host = 'ac-d7zzkoh-shard-00-00.vdch7uj.mongodb.net'

  const socket = tls.connect({
    host: host,
    port: 27017,
    servername: host,
    minVersion: 'TLSv1.2',
    maxVersion: 'TLSv1.2',
    rejectUnauthorized: true
  })

  socket.on('secureConnect', () => {
    console.log("MongoDB TLS CONNECTED")
    console.log("TLS version:", socket.getProtocol())
    console.log("Cipher:", socket.getCipher())
    socket.destroy()
  })

  socket.on('error', (error) => {
    console.log("MongoDB TLS ERROR:", error.code, error.message)
  })

  socket.setTimeout(10000, () => {
    console.log("MongoDB TLS TIMEOUT")
    socket.destroy()
  })
}

testMongoTLS()
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

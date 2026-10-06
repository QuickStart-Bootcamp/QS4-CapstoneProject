import 'dotenv/config';
import express from 'express'
import cors from 'cors'
import connectToDB from './dbConnetion.js'
import studentsRouter from './routers/studentsRouter.js'
import aiRouter from './routers/aiRouter.js'
import dns from 'dns/promises'


const server = express()
server.use(cors())
server.use(express.json())
server.use(express.urlencoded({ extended: true }))

async function testDNS() {
  try {
    const result = await dns.lookup('ac-d7zzkoh-shard-00-00.vdch7uj.mongodb.net')
    console.log("MongoDB DNS:", result)
  } catch (error) {
    console.log("MongoDB DNS ERROR:", error)
  }
}

testDNS()



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

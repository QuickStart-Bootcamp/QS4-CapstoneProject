import 'dotenv/config';
import express from 'express'
import cors from 'cors'
import connectToDB from './dbConnetion.js'
import studentsRouter from './routers/studentsRouter.js'
import aiRouter from './routers/aiRouter.js'

const server = express()
server.use(cors())
server.use(express.json())
server.use(express.urlencoded({ extended: true }))

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

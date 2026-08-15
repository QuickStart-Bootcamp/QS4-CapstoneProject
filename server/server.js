import express from 'express'
import cors from 'cors'
import connectToDB from './dbConnetion.js'
import studentsRouter from './routers/studentsRouter.js'

const server = express()
server.use (cors())

connectToDB ()
server.use ("/students", studentsRouter)

server.get ("/", (req,res) => {
  res.send ("This is the server running")
})


server.listen (4000, () => {
  console.log ("The server is running at port 4000")
})
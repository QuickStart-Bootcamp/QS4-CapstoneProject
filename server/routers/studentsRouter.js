import express from 'express'
import students from '../models/Students.js'

const router = express.Router ()


router.get ("/", async (req,res)=> {
  console.log ("The request is recived for Listing all students ")
  const allStudents = await students.find()
  console.log (allStudents)

  //res.send ([{name:"farnaz"}, {name:"kien"}, {name:"miles"}])
  res.send (allStudents)
})

router.get ("/id", (req,res)=> {
  console.log ("The ID request is recived")
  res.send ("The ID request for students recived")
})

router.delete ("/:studentID", async (req,res)=> {
  console.log ("The request for deleting student recived ...")
  console.log (req.url)
  console.log (req.method)
  console.log (req.params)
  console.log (req.params.studentID)
  try {
    let response = await students.deleteOne ({_id: req.params.studentID})
    console.log (response)
  }
  catch (error) {
    console.log (error)
  }
})

router.post ("/", async (req,res)=> {
  console.log ("The request for Adding student recived ...")
  console.log (req)
  console.log (req.method)
  console.log (req.params)
  console.log (req.query)
  console.log (req.body)
  const response = await students.create(req.body)
})

export default router;
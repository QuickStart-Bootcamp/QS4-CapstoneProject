import express from 'express'
import students from '../models/Students.js'

const router = express.Router ()


router.get ("/", async (req,res)=> {
  console.log ("The request is recived for Listing all students ")
  const allStudents = await students.find()
  console.log (allStudents)
  res.send (allStudents)
})

router.get ("/:id", (req,res)=> {
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
    res.send ("The data is deleted")
    console.log (response)
  }
  catch (error) {
    console.log (error)
  }
})

router.post ("/", async (req,res)=> {
  console.log ("The request for Adding student recived ...")
  console.log (req.body)
  const response = await students.create(req.body)
})

router.post ("/login/", async (req,res)=> {
  console.log ("The request for login recived ...")
  console.log (req.body)

  const response = await students.find( {
    username: req.body.username,
    password: req.body.password
  })
  console.log (response)
  res.send (response)
})

export default router;
import express from 'express'



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
export default router;
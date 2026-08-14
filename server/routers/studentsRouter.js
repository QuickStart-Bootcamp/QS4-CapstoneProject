import express from 'express'


const router = express.Router ()

router.get ("/kelvin", (req,res)=> {
  console.log ("The request is recived")
  res.send ("kelvin")
})

router.get ("/kien", (req,res)=> {
  console.log ("The request is recived")
  res.send ("Kien")
})

router.get ("/Miles", (req,res)=> {
  console.log ("The request is recived")
  res.send ("Miles")
})

router.get ("/farnaz", (req,res)=> {
  console.log ("finally")
  res.send ("finally")
})

router.get ("/id", (req,res)=> {
  console.log ("The ID request is recived")
  res.send ("The ID request for students recived")
})
export default router;
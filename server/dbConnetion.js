import mongoose from 'mongoose'

async function connectToDB() {
  //await mongoose.connect ("mongodb://localhost:27017/student_support_DB")

  //const uri = process.env.MONGODB_URI
  //console.log("MongoDB host:", new URL(uri).hostname)
  await mongoose.connect (process.env.MONGODB_URI)
  console.log ("Connected to DB")
}


export default connectToDB
import mongoose from 'mongoose'

async function connectToDB() {
  await mongoose.connect ("mongodb://localhost:27017/student_support_DB")
  console.log ("Connected to DB")
}


export default connectToDB
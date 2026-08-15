import mongoose from 'mongoose'

const studentSchema = mongoose.Schema ({
  username: String,
  password: String,
  firstName: String,
  lastName: String,
  email: String,
  age: Number
})

const students = mongoose.model ("students", studentSchema)

export default students;


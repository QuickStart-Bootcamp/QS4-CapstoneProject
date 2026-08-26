import mongoose from 'mongoose'

const servicesSchema = mongoose.Schema ({
  serviceName: String,
  serviceCategory: String,
  serviceDescription: String,
  serviceDuration: String,
  servicePrice: String
})

const services = mongoose.model ("services", servicesSchema)

export default services;
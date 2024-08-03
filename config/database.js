const mongoose = require('mongoose')

// uncomment vvvv this vvvv line to use local env
require('dotenv').config({path: 'config/.env'})
// uncomment ^^^^ this ^^^^ line to use local env

const uri = process.env.MONGODB_URI

const connectDB = async () => {
  try {

    const conn = await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    }) 
    
    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

module.exports = connectDB

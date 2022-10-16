const mongoose = require('mongoose')
const uri = process.env.MONGODB_URI;

const connectDB = async () => {
  try {

    // TO DEPLOY, COMMENT THIS OUT AND UNCOMMENT BELOW
    const conn = await mongoose.connect(process.env.DB_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    }) 
    // const conn = await mongoose.connect(uri, {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    //   useFindAndModify: false,
    //   useCreateIndex: true
    // })


    
    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

module.exports = connectDB

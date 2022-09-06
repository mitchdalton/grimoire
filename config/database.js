const mongoose = require('mongoose')
const uri = process.env.MONGODB_URI;

const connectDB = async () => {
  try {
    console.log(uri);
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

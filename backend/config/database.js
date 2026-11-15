const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    console.log('Make sure MongoDB is running or update MONGODB_URI in .env file');
    // Don't exit the process, allow server to run without DB for testing
  }
};

module.exports = connectDB;

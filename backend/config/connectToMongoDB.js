const mongoose  = require('mongoose');

// Set the `strictQuery` option to true or false
mongoose.set('strictQuery', false); // or true based on your preference

// Your MongoDB connection code
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI , {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected!!');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

module.exports = connectDB;

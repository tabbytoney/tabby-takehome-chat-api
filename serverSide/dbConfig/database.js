const mongoose = require('mongoose');

const dbConnection = async () => {
  // the below line is for this error:
  // Mongoose: the `strictQuery` option will be switched back to `false` by default in Mongoose 7
  mongoose.set('strictQuery', true);
  try {
    const connectn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(
      `Connection to MongoDB is successful: ${connectn.connection.host}`
    );
  } catch (error) {
    console.log(`There's a problem: ${error.message}`);
    process.exit();
  }
};

module.exports = dbConnection;

import mongoose from 'mongoose';

const uri: string = 'mongodb://127.0.0.1:27017/ts-db';

export const connectDB = () => {
  mongoose
    .connect(uri, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      /** ready to use. The `mongoose.connect()` promise resolves to undefined. */
      console.log('Mongo DB is connected');
    })
    .catch(err => {
      console.log(
        `MongoDB connection error. Please make sure MongoDB is running. ${err}`
      );
      process.exit(1);
    });
};

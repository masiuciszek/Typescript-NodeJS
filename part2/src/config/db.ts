import mongoose from 'mongoose';

const uri: string = 'mongodb://127.0.0.1:27017/ts-db-stores';

interface MongoOptions {
  useNewUrlParser: boolean;
  useCreateIndex: boolean;
  useFindAndModify: boolean;
  useUnifiedTopology: boolean;
}

export const connectDb = async () => {
  try {
    await mongoose.connect<MongoOptions>(uri, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB is connected`);
  } catch (error) {
    process.exit(1);
  }
};

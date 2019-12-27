import mongoose from 'mongoose';

const uri: string = 'mongodb://10.0.0.129:27017/ts-server';
let conn: mongoose.Connection = null;
export const connectMongoDb = async (): Promise<mongoose.Connection> => {
  if (conn == null) {
    conn = await mongoose.createConnection(uri, {
      bufferCommands: false, // Disable mongoose buffering
      bufferMaxEntries: 0, // and MongoDB driver buffering
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
  }
  return conn;
};

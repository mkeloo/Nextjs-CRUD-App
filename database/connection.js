const MONGO_URI =
  'mongodb+srv://mkeloo0705:Precal11@cluster0.nvtfty0.mongodb.net/test';

import mongoose from 'mongoose';

const connectMongo = async () => {
  try {
    const { connection } = await mongoose.connect(MONGO_URI);
    if (connection.readyState === 1) {
      console.log('Connected to Mongo Database');
    }
  } catch (err) {
    return Promise.reject(err);
  }
};

export default connectMongo;

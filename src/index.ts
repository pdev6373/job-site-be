import 'reflect-metadata';
import mongoose from 'mongoose';
import { server } from './app';

const PORT = 3500;
const DATABASE_URI =
  'mongodb+srv://adebayoluborode:tUwALrItevvIwtPA@cluster0.dwj72dt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose
  .connect(DATABASE_URI, {
    serverSelectionTimeoutMS: 5000,
    waitQueueTimeoutMS: 10000,
    connectTimeoutMS: 10000,
  })
  .then(() => {
    console.log('Connected to MongoDB');

    server.listen(PORT, () =>
      console.log(`Server also accessible on http://localhost:${PORT}`),
    );
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB', err);
  });

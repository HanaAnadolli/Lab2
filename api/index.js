const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors({
    origin: '*'
}));

const mongoose = require('mongoose');

const mongoURI = "mongodb://127.0.0.1:27017/real-estate"; // MongoDB connection URI
const dbName = "real-estate"; // Name of the database

async function connectToDatabase() {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

// Create the database if it doesn't exist
async function createDatabaseIfNotExists() {
  try {
    const adminDb = mongoose.connection.db.admin();
    const dbNames = await adminDb.listDatabases();
    if (dbNames.databases.some(db => db.name === dbName)) {
      console.log('Database already exists:', dbName);
    } else {
      await adminDb.command({ create: dbName });
      console.log('Database created:', dbName);
    }
  } catch (error) {
    console.error('Error creating database:', error);
  }
}

async function startServer() {
  await connectToDatabase();
  await createDatabaseIfNotExists();

  app.listen(8000, function () {
    console.log('Server is running');
  });
}

startServer();

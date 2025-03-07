const mongoose = require('mongoose');
const express = require('express');
const config = require('config');
const db = config.get('mongoURI');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const app = express();
const connectDB = async () => {
  try {
    // Create a MongoDB session store
    const store = new MongoDBStore({
      uri: 'mongodb+srv://muneebnawaz2018:1234@cluster0.tl4izck.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
      collection: 'sessions'
    });
    // Catch errors in the session store
    store.on('error', function (error) {
      console.error('Session store error:', error);
    });

    // Configure the session middleware
    app.use(
      session({
        secret: 'MYNAMEISMUNEEB',
        resave: false,
        saveUninitialized: false,
        store: store
      })
    );
    await mongoose.connect(db, {
      useNewUrlParser: true
      // useCreateIndex:true
    });
    console.log('Mongo DB Connected');
  } catch (err) {
    console.log(err.message);
    // eXIT PROCESS WITH FAILURE
    process.exit(1);
  }
};
module.exports = connectDB;

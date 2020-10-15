import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import router from './router.js';

const app = express();

// Connect to DB
mongoose.connect('mongodb+srv://admin:admin@digitalent.n9f5m.mongodb.net/jadwalin?retryWrites=true&w=majority',  //process.env.MONGODB_URI
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }, () => {
  console.log('Connect to database success');
});

// Middlewares
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.get('/', (req, res, next) => {
  res.json({
    message: 'success/berhasil',
  });
});

app.use('/api', router);

// const PORT = process.env.PORT || '4000'

app.listen('3000', () => {  //process.env.PORT,
  // console.log(`App listens to port ${process.env.PORT}`);
  console.log('App listens to port 3000');
});
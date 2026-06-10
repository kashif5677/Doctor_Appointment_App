import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';

//app config
const app = express();
const port = process.env.PORT || 8000;
connectDB();
connectCloudinary();

//middleware
app.use(express.json());
app.use(cors());

//api endpoints
app.get('/', (req, res) => res.status(200).send('hello world !'));

//listen
app.listen(port, () => console.log(`listening on localhost:${port}`));
import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import adminRouter from './routes/admin.route.js';

//app config
const app = express();
const port = process.env.PORT || 8000;
connectDB();
connectCloudinary();

//middleware
app.use(express.json());
app.use(cors());

//api endpoints

//localhost:8000/api/admin/add-doctor
app.use('/api/admin', adminRouter);

app.get('/', (req, res) => res.status(200).send('hello world !'));

//listen
app.listen(port, () => console.log(`listening on localhost:${port}`));
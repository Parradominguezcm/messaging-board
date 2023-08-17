import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

dotenv.config({ path: `.env${process.env.NODE_ENV ? `.${process.env.NODE_ENV}` : ''}` });

import { allPeepsRouter } from './src/routes/allPeeps.router.js';
import { loginRouter } from './src/routes/login.router.js';
import { makeAPeepRouter } from './src/routes/makeAPeep.router.js';
import { signUpRouter } from './src/routes/signUp.router.js';


const app = express();
const port = process.env.PORT;
const host = process.env.HOST;


const main = async () => {
    console.log(`Connecting to DB @ ${process.env.DB_URI}`);
    await mongoose.connect(process.env.DB_URI);
    console.log(`Connected to DB @ ${process.env.DB_URI}`);
}

main().catch(err => console.log(err))
app.use(cors())
app.use(bodyParser.json())


app.use('/allPeeps', allPeepsRouter);
app.use('/login', loginRouter);
app.use('/makePeep', makeAPeepRouter);
app.use('/signup', signUpRouter);


export const server = app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
});



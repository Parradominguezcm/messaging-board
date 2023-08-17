import express from 'express';
import { signUpController } from '../controllers/signUp.controller.js'

export const signUpRouter = express.Router();

signUpRouter.post('/', (req, res) => {
    res.send(signUpController);
});
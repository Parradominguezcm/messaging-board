import express from 'express';
import { body } from 'express-validator';
import { login } from '../controllers/logIn.controller.js'


export const loginRouter = express.Router();

loginRouter.post(`/`, [
    body(`userName`).exists().escape(),
    body(`userPassword`).exists().escape(),
], login);



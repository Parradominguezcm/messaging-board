import express from 'express';
import { body } from 'express-validator';
import { signUpController } from '../controllers/signUp.controller.js'
import verifySignUp from '../middlewares/verifySignup.js';

export const signUpRouter = express.Router();

signUpRouter.post("/", [
    body("userName").exists().escape(),
    body("userFirstName").exists().escape(),
    body("userLastName").exists().escape(),
    body(`userEmail`).exists().normalizeEmail().escape().isEmail(),
    body("userPassword").exists().escape(),
    verifySignUp.checkDuplicateUsernameOrEmail,
], signUpController);

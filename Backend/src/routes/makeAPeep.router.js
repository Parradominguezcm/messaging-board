import express from 'express';
import { addPeepController } from '../controllers/addPeep.controller.js'
import { body } from 'express-validator'

export const makeAPeepRouter = express.Router();
makeAPeepRouter.post('/', [
    body("peepMessage").exists().escape(),
    body("peepDate").exists().escape(),
    body("peepAuthor").exists().escape(),
], addPeepController);
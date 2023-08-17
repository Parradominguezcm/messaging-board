import express from 'express';
import { addPeepController } from '../controllers/addPeep.controller.js'
export const makeAPeepRouter = express.Router();

makeAPeepRouter.post('/', (req, res) => {
    res.send(addPeepController);
});
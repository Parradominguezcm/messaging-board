import express from 'express';
import { allPeepsController } from '../controllers/allPeeps.controller.js'
export const allPeepsRouter = express.Router();

allPeepsRouter.get('/', (req, res) => {
    res.send(allPeepsController);
});


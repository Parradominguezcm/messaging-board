import { validationResult } from 'express-validator';
import { addPeepService } from '../services/peep.service.js';


export const addPeepController = async (req, res) => {
    const results = validationResult(req);
    if (results.errors.length !== 0) {
        res.status(422).send(`Adding new Peep failed`);
    }
    try {
        const peep = await addPeepService(req.body);
        res.status(201).json({ peep });
    } catch (error) {
        console.log(error);
        res.status(400).send(`Adding new peep failed`);
    }
};
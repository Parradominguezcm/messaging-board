import { addUserService } from "../services/user.service.js";
import { validationResult } from 'express-validator';

export const signUpController = async (req, res) => {
    const errors = validationResult
    if (!errors.isEmpty()) {
        return res.status(422).send(`Your signup failed`);
    }
    try {
        const user = await addUserService(req.body);
        res.status(201).json({ user });
    } catch (error) {
        console.log(error);
        res.status(400).send(`Your signup failed`);
    }
}
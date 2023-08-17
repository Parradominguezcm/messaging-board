import { getUserService } from "../services/user.service.js";
import { validationResult } from 'express-validator';

export const login = async (req, res) => {
    const results = validationResult(req)
    if (results.errors.length !== 0) {
        return res.status(422).send(`login failed`);
    }
    try {
        const user = await getUserService(req.body);
        res.status(200).json({ user });
    } catch (error) {
        console.log(error);
        res.status(400).send(`login failed`);
    }
}
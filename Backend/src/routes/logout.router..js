import express from 'express';
export const router = express.Router();

router.put('/', (req, res) => {
    res.send({ hello: "clara" });
});
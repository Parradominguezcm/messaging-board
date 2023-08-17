import express from 'express';
const router = express.Router();

router.put('/', (req, res) => {
    res.send({ hello: "clara" });
})

module.exports = router;
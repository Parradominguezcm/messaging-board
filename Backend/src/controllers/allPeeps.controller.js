import { getPeepsService } from '../services/peep.service.js';

export const allPeepsController = async (req, res) => {
    try {
        const peeps = await getPeepsService();
        res.json(peeps)
    } catch (e) {
        res.status(404).send(`Not found`);
    }
}

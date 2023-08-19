import Peep from '../models/peep.model.js';

export const addPeepService = async (newPeepData) => {
    try {
        const newPeep = new Peep(newPeepData);
        return await newPeep.save();
    } catch (e) {
        throw e
    }
}

export const getPeepsService = async () => {
    try {
        return await Peep.find({}).sort({ peepDate: 'desc' });
    }
    catch (e) {
        throw e;
    }
}


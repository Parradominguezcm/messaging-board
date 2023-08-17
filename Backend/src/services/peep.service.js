import Peep from '../models/peep.model.js';

export const addPeepService = async (newPeepData) => {
    try {
        const newPeep = new Peep(newPeepData);
        return await newPeep.save();
    } catch (e) {
        throw e
    }
}

export const getPeepService = async (id) => {
    try {
        return await Peep.findById(id);
    }
    catch (e) {
        throw e;
    }
}

export const getPeepsService = async () => {
    try {
        return await Todo.find({});
    }
    catch (e) {
        throw e;
    }
}


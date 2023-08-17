import User from '../models/user.model.js';

export const addUserService = async (userID, newUserData) => {
    try {
        const newUser = new User(newUserData);
        return await newUser.save();
    } catch (e) {
        throw e
    }
}

export const getUserService = async (userID) => {
    try {
        return await User.findById(userID);
    }
    catch (e) {
        throw e;
    }
}


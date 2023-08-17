import User from '../models/user.model.js';

export const addUserService = async (newUserData) => {
    console.log(newUserData)
    try {
        const newUser = new User(newUserData);
        console.log(newUser)
        return await newUser.save();
    } catch (e) {
        throw e
    }
}

export const getUserService = async ({ userName, userPassword }) => {
    try {
        return await User.find({ userName, userPassword });
    }
    catch (e) {
        throw e;
    }
}


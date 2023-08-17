import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    userName: { type: String, required: true },
    userFirstName: { type: String, required: true },
    userLastName: { type: String, required: true },
    userEmail: { type: String, required: true },
    userPassword: { type: String, required: true },
    userId: { type: Number, required: true },
});

const User = mongoose.model(`User`, userSchema);

export default User;
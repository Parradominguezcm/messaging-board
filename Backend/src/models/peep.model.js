import mongoose from 'mongoose';

const peepSchema = new mongoose.Schema({
    peepMessage: { type: String, required: true },
    peepDate: {
        type: Date,
        default: Date.now,
        required: true
    },
    peepAuthor: { type: String, required: true },
    id: { type: Number },
});

const Peep = mongoose.model(`Peep`, peepSchema);

export default Peep;

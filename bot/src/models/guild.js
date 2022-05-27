import mongoose from 'mongoose';

const guild = mongoose.model('guild', new mongoose.Schema({
    cooldown: Number
}));

export default guild;
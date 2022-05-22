import mongoose from 'mongoose';

const member = mongoose.model("member", new mongoose.Schema({
    user: String,
    guild: String,
    xp: Number,
    ignore: Boolean
}));

export default member;
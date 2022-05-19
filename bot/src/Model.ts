import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    user: String,
    guild: String,
    xp: Number,
    ignore: Boolean
});
const model = mongoose.model("member", schema);

export default model;
import mongoose from 'mongoose';

const StatSchema = new mongoose.Schema({
    _id: Number,
    type: String
});

const StatModel = new mongoose.model('stat', StatSchema);

export default StatModel;
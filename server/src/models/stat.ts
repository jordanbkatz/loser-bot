import mongoose from 'mongoose';

export interface IStat {
    _id: string;
    type: string;
}

const StatSchema = new mongoose.Schema<IStat>({
    _id: Number,
    type: String
});

const StatModel = mongoose.model<IStat>('stat', StatSchema);

export default StatModel;
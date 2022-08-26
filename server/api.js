import dotenv from 'dotenv';
import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';
import Stat from './models/stat';

dotenv.config();

mongoose.connect(process.env.DB_URI);

const app = express();

app.use(cors());

app.get('/stats', async (req, res) => {
    try {
        const count = await Stat.countDocuments({ type: req.query.type });
        res.json({ count });
    }
    catch (err) {
        res.json({ err: err.message });
    }
});

app.listen(process.env.PORT || 6969);
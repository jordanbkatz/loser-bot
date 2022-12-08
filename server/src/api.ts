import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import Stat from './models/stat';

dotenv.config();

mongoose.connect(process.env.DB_URI!);

const app = express();

app.use(cors());

app.get('/getStats', async (req, res) => {
    try {
        const stats = {
            command: await Stat.countDocuments({ type: 'command' }),
            user: await Stat.countDocuments({ type: 'user' }),
            server: await Stat.countDocuments({ type: 'server' })
        };
        res.json(stats);
    }
    catch (err) {
        res.json({ err: (err as Error).message });
    }
});

app.listen(process.env.PORT || 6969);
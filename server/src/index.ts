import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import discord from 'discord.js';
import Bot from './Bot';
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

const bot = new Bot('$L', 3);

bot.on('message', async (msg: discord.Message) => {
    if (!msg.author.bot && msg.content.startsWith(bot.prefix)) {
        const res = new discord.MessageEmbed();
        const gid = msg.guild!.id;
        const assureStat = async (_id: string, type: string) => {
            let stat = await Stat.findOne({ _id, type });
            if (!stat) {
                stat = new Stat({ _id, type });
                await stat.save();
            }
        };
        await assureStat(gid, 'server');
        await assureStat(msg.author.id, 'user');
        await assureStat(Date.now().toString(), 'command');
        if (!Object.keys(bot.cooldowns).includes(gid) || (Date.now() - bot.cooldowns[gid]) / 1000 >= bot.cooldown) {
            let args = msg.content.split(/\s+/);
            args.shift();
            const command = bot.commands[args[0]] || bot.commands.unknown;
            args.shift();
            await command({ msg, args, res });
            bot.cooldowns[gid] = Date.now();
        }
        else {
            const timeRemaining = ((bot.cooldown * 1000 + bot.cooldowns[gid]) - Date.now()) / 1000;
            res.setTitle(`please wait ${timeRemaining} seconds for cooldown to end`);
        }
        res.setColor('#dc143c');
        msg.channel.send(res);
    }
});

bot.login(process.env.BOT_TOKEN!);
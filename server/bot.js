import fs from 'fs';
import path from 'path';
import url from 'url';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import discord from 'discord.js';
import Stat from './models/stat.js';

dotenv.config();

mongoose.connect(process.env.DB_URI);

const bot = new discord.Client();
bot.prefix = '$L';
bot.cooldown = 3;
bot.commands = {};
bot.cooldowns = {};

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
fs.readdirSync(path.join(__dirname, 'commands')).forEach(async command => {
    bot.commands[command.split('.')[0]] = (await import(`./commands/${command}`)).default;
});

bot.on('message', async msg => {
    if (!msg.author.bot && msg.content.startsWith(bot.prefix)) {
        const res = new discord.MessageEmbed();
        const gid = msg.channel.guild.id;
        const assureStat = async (_id, type) => {
            let stat = await Stat.findOne({ _id, type });
            if (!stat) {
                stat = new Stat({ _id, type });
                await stat.save();
            }
        };
        await assureStat(gid, 'server');
        await assureStat(msg.author.id, 'user');
        await assureStat(Date.now(), 'command');
        if (!Object.keys(bot.cooldowns).includes(gid) || (Date.now() - bot.cooldowns[gid]) / 1000 >= bot.cooldown) {
            let args = msg.content.split(/\s+/);
            args.shift();
            const command = bot.commands[args[0]];
            args.shift();
            if (command) {
                await command({ msg, args, res });
            }
            else {
                res.setTitle('invalid command');
            }
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

bot.login(process.env.DISCORD_TOKEN);
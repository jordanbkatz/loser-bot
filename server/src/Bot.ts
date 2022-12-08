import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import discord from 'discord.js';
import Stat from './models/stat';
import { Command } from './models/command';

dotenv.config();

mongoose.connect(process.env.DB_URI!);

class Bot extends discord.Client {
    prefix: string;
    cooldown: number;
    cooldowns: {[gid: string]: number};
    commands: {[name: string]: Command};
    constructor(prefix: string, cooldown: number) {
        super();
        this.prefix = prefix;
        this.cooldown = cooldown;
        this.cooldowns = {};
        this.commands = {};
        fs.readdirSync(path.join(__dirname, './commands')).forEach(command => {
            this.commands[command.split('.')[0]] = require(`./commands/${command}`).default;
        });
    }
}

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
            const command = bot.commands[args[0]] || bot.commands.help;
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
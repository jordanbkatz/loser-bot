import dotenv from 'dotenv';
import mongoose from 'mongoose';
import Discord from 'discord.js';
import Bot from './Bot';
import model from './Model';
import config from './config.json';

dotenv.config();
(async function () {
    try {
        // await mongoose.connect(process.env.DB_URI!);
        console.log("connected to database");
    }
    catch (err) {
        console.log(err);
    }
})();
const bot = new Bot();
let last = Date.now();
bot.on("ready", function () {
    console.log(`logged in as ${bot.user!.tag}`);
});
bot.on("message", async function (msg: Discord.Message) {
    if (msg.author.bot) {
        return;
    }
    if (msg.content.startsWith(config.prefix)) {
        let res = new Discord.MessageEmbed();

        if ((Date.now() - last) / 1000 >= config.cooldown) {
            let args = msg.content.split(/\s+/);
            args.shift();
            let command = bot.commands.get(args[0]);
            args.shift();
            if (command) {
                try {
                    res = await command({ model, bot, msg, args });
                }
                catch (err) {
                    console.log(err);
                }
            }
            else {
                res.setTitle("invalid command");
            }
        }
        else {
            const timeRemaining = ((config.cooldown * 1000 + last) - Date.now()) / 1000;
            res.setTitle(`please wait ${timeRemaining} seconds for cooldown to end`);
        }
        res.setColor("#c71585");
        msg.channel.send(res);
    }
});
bot.login(process.env.DISCORD_TOKEN);
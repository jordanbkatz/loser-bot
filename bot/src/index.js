import mongoose from 'mongoose';
import Discord from 'discord.js';
import dotenv from 'dotenv';
import Client from './client';
import { member } from './models/member.js';

dotenv.config();

(async function () {
    try {
        // await mongoose.connect(config.mongoURI);
        console.log("connected to database");
    }
    catch (err) {
        console.log(err);
    }
})();
const client = new Client();
let last = Date.now();
client.on("ready", function () {
    console.log(`logged in as ${client.user.tag}`);
});
client.on("message", async function (msg) {
    if (msg.author.bot) {
        return;
    }
    if (msg.content.startsWith(process.env.PREFIX)) {
        let res = new Discord.MessageEmbed();

        if ((Date.now() - last) / 1000 >= process.env.COOLDOWN) {
            let args = msg.content.split(/\s+/);
            args.shift();
            let command = client.commands.get(args[0]);
            args.shift();
            if (command) {
                try {
                    res = await command({ member, client, msg, args });
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
            const timeRemaining = ((process.env.COOLDOWN * 1000 + last) - Date.now()) / 1000;
            res.setTitle(`please wait ${timeRemaining} seconds for cooldown to end`);
        }
        res.setColor("#c71585");
        msg.channel.send(res);
    }
});
client.login(config.discordToken);
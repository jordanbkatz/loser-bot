const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const { Client, MessageEmbed } = require('discord.js');

dotenv.config();

// await mongoose.connect(process.env.MONGO_URI);

const bot = new Client();
bot.prefix = '$L';
bot.commands = {};
bot.cooldowns = {};

const categories = fs.readdirSync(path.join(__dirname, 'commands'));
for (let i = 0; i < categories.length; i++) {
    const commands = fs.readdirSync(path.join(__dirname, `commands/${categories[i]}`));
    for (let j = 0; j < commands.length; j++) {
        const command = require(`./commands/${categories[i]}/${commands[j]}`);
        bot.commands[commands[j].split('.')[0]] = command;
    }
}

const cooldown = 3;

bot.on('message', async function (msg) {
    console.log(msg.channel.guild.id);
    if (msg.author.bot) {
        return;
    }
    if (msg.content.startsWith(bot.prefix)) {
        let res = new MessageEmbed();
        const gid = msg.channel.guild.id;
        if (!(gid in bot.cooldowns) || (Date.now() - bot.cooldowns[gid]) / 1000 >= cooldown) {
            let args = msg.content.split(/\s+/);
            args.shift();
            let command = bot.commands[args[0]];
            args.shift();
            if (command) {
                try {
                    res = await command({ msg, args, res });
                }
                catch (err) {
                    res.setTitle('failed to execute command');
                }
            }
            else {
                res.setTitle('invalid command');
            }
            bot.cooldowns[gid] = Date.now();
        }
        else {
            const timeRemaining = ((cooldown * 1000 + bot.cooldowns[gid]) - Date.now()) / 1000;
            res.setTitle(`please wait ${timeRemaining} seconds for cooldown to end`);
        }
        res.setColor('#df208f');
        msg.channel.send(res);
    }
});

bot.login(process.env.DISCORD_TOKEN);
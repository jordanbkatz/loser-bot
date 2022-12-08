import dotenv from 'dotenv';
import discord from 'discord.js';
import Bot from './Bot';

dotenv.config();

const bot = new Bot('$L', 3);

bot.on('message', async (msg: discord.Message) => {
    if (!msg.author.bot && msg.content.startsWith(bot.prefix)) {
        const res = new discord.MessageEmbed();
        const gid = msg.guild!.id;
        if (!Object.keys(bot.cooldowns).includes(gid) || (Date.now() - bot.cooldowns[gid]) / 1000 >= bot.cooldown) {
            let args = msg.content.split(/\s+/);
            args.shift();
            const command = bot.commands.find(command => command.name === args[0]);
            args.shift();
            if (command) {
                await command.run({ msg, args, res });
            }
            else {
                res.setTitle('Unknown Command');
                res.setDescription('Here is a list of commands:');
                res.addFields(bot.commands.map(command => ({
                    name: command.name, 
                    value: command.description 
                })));
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

bot.login(process.env.BOT_TOKEN!);
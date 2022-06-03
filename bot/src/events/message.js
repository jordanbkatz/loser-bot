const { MessageEmbed } = require('discord.js');

function Message({ bot }) {
    return async function (msg) {
        if (msg.author.bot) {
            return;
        }
        if (msg.content.startsWith(bot.prefix)) {
            let res = new MessageEmbed();

            // check cooldown

            let args = msg.content.split(/\s+/);
            args.shift();
            let command = bot.commands[args[0]];
            args.shift();
            if (command) {
                try {
                    res = await command({ msg, args, res });
                }
                catch (err) {
                    console.log(err.message);
                    res.setTitle('failed to execute command');
                }
            }
            else {
                res.setTitle('invalid command');
            }

            res.setColor('#df208f');
            msg.channel.send(res);
        }
    }
}

module.exports = Message;
import Discord from 'discord.js';
import Bot from './Bot';

interface Options {
    bot: Bot;
    msg: Discord.Message;
    args: string[];
};

type Command = (options: Options) => Promise<Discord.MessageEmbed>;

export default Command;
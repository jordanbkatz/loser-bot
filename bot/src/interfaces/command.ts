import Discord from 'discord.js';
import Bot from '../Bot';
import model from '../Model';

interface Options {
    model: typeof model;
    bot: Bot;
    msg: Discord.Message;
    args: string[];
};
type Command = (options: Options) => Promise<Discord.MessageEmbed>;

export default Command;
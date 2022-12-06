import discord from 'discord.js';

export interface ICommandProps {
    msg: discord.Message;
    args: string[];
    res: discord.MessageEmbed;
}

export type Command = (props: ICommandProps) => Promise<void>;
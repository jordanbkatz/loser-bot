import discord from 'discord.js';

interface ICommandRunProps {
    msg: discord.Message;
    args: string[];
    res: discord.MessageEmbed;
}

export interface ICommand {
    name: string;
    description: string;
    run: (props: ICommandRunProps) => Promise<void>;
}
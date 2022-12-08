import fs from 'fs';
import path from 'path';
import discord from 'discord.js';
import { ICommand } from './models/command';

class Bot extends discord.Client {
    prefix: string;
    cooldown: number;
    cooldowns: {[gid: string]: number};
    commands: ICommand[];
    constructor(prefix: string, cooldown: number) {
        super();
        this.prefix = prefix;
        this.cooldown = cooldown;
        this.cooldowns = {};
        this.commands = [];
        fs.readdirSync(path.join(__dirname, './commands')).forEach(command => {
            this.commands.push(require(`./commands/${command}`).default);
        });
    }
}

export default Bot;
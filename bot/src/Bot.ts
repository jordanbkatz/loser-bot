import fs from 'fs';
import path from 'path';
import Discord from 'discord.js';
import Command from './Command';

class Bot extends Discord.Client {
    discord: typeof Discord = Discord;
    commands: Discord.Collection<string, Command> = new Discord.Collection();
    constructor() {
        super({intents: new Discord.Intents(32767)});
        this.on('ready', this.ready);
        this.on('message', this.message)
        this.login(process.env.TOKEN);
    }
    ready() {
        console.log(`logged in as ${this.user?.tag}!`);
    }
    async message(message: Discord.Message) {
        
    }
    async registerCommands() {
        const files = fs.readdirSync(path.join(__dirname, 'commands'));
        for (let i = 0; i < files.length; i++) {
            const command = await import(`../commands/${files[i]}`);
            this.commands.set(files[i].split('.')[0], command);
        }
    }
}

export default Bot;
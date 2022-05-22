import fs from 'fs';
import path from 'path';
import Discord from 'discord.js';

class Client extends Discord.Client {
    discord = Discord;
    commands = new Discord.Collection();
    constructor () {
        super();
        this.registerCommands();
    }
    async registerCommands() {
        const files = fs.readdirSync(path.join(__dirname, "commands")).map(f => f.split(".")[0]);
        for (let i = 0; i < files.length; i++) {
            const command = await import(`./commands/${files[i]}`);
            this.commands.set(files[i], command.default);
        }
    }
}

export default Client;
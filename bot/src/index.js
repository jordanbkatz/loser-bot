const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const { Client } = require('discord.js');

dotenv.config();

(async function () {
    try {
        // await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to database');
    }
    catch (err) {
        console.log(err.message);
    }
})();

const bot = new Client();
bot.commands = {};
bot.cooldowns = {};

const commands = fs.readdirSync(path.join(__dirname, 'commands')).map(f => f.split('.')[0]);
for (let i = 0; i < commands.length; i++) {
    const command = require(`./commands/${commands[i]}`);
    bot.commands[commands[i]] = command;
}

const events = fs.readdirSync(path.join(__dirname, 'events')).map(f => f.split('.')[0]);
for (let i = 0; i < events.length; i++) {
    const event = require(`./events/${events[i]}`);
    bot.on(events[i], event({bot}));
}

bot.login(process.env.DISCORD_TOKEN);
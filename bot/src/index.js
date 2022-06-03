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
bot.prefix = '$L';
bot.commands = {};
bot.cooldowns = {};

function loadir(dir, handler) {
    const files = fs.readdirSync(path.join(__dirname, dir)).map(f => f.split('.')[0]);
    for (let i = 0; i < files.length; i++) {
        const file = require(`./${dir}/${files[i]}`);
        handler(files[i], file);
    }
}

loadir('commands', function (name, command) {
    bot.commands[name] = command;
});

loadir('events', function (name, event) {
    bot.on(name, event({bot}));
});

bot.login(process.env.DISCORD_TOKEN);
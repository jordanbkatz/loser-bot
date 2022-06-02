const mongoose = require('mongoose');

const GuildSchema = new mongoose.Schema({
    cooldown: Number
});

module.exports = mongoose.model('guild', GuildSchema);
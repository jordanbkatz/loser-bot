const mongoose = require('mongoose');

module.exports = mongoose.model('guild', new mongoose.Schema({
    cooldown: Number
}));
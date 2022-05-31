const mongoose = require('mongoose');

module.exports = mongoose.model('member', new mongoose.Schema({
    user: String,
    guild: String,
    xp: Number,
    ignore: Boolean
}));
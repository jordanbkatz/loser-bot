const mongoose = require('mongoose');

const MemberSchema = new mongoose.Schema({
    user: String,
    guild: String,
    xp: Number,
    ignore: Boolean
});

module.exports = mongoose.model('member', MemberSchema);
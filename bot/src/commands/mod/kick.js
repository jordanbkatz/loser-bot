const { Permissions } = require('discord.js');

async function Kick({ msg, res }) {
    const member = msg.mentions.users.first();
    if (!member) {
        return res.setTitle('specify member');
    }
    if (!msg.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) {
        return res.setTitle('you do not have permission to kick');
    }
    const memberTarget = msg.guild.members.cache.get(member.id);
    try {
        await memberTarget.kick();
        return res.setTitle('kicked user');
    }
    catch (err) {
        return res.setTitle('failed to kick user');
    }
}

module.exports = Kick;
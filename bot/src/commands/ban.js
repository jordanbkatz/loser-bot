async function Ban({ client, msg }) {
    const res = new client.discord.MessageEmbed();
    const member = msg.mentions.users.first();
    if (!member) {
        return res.setTitle("specify member");
    }
    if (!msg.member.permissions.has(client.discord.Permissions.FLAGS.ADMINISTRATOR)) {
        return res.setTitle("you dont have permissions");
    }
    const memberTarget = msg.guild.members.cache.get(member.id);
    try {
        await memberTarget.ban();
        return res.setTitle("banned user");
    }
    catch (err) {
        console.log(err);
        return res.setTitle("failed to ban user");
    }
};

export default Ban;
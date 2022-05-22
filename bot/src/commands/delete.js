async function Delete({ client, msg, args }) {
    const res = new client.discord.MessageEmbed();
    if (msg.channel.type == "dm") {
        return res.setTitle("cannot delete messages in this channel");
    }
    else if (args[0]) {
        const amount = parseInt(args[0]);
        if (0 < amount && amount < 100) {
            try {
                await msg.channel.bulkDelete(amount + 1);
                return res.setTitle(`deleted ${amount} messages`);
            }
            catch (err) {
                return res.setTitle("failed to delete messages");
            }
        }
        else {
            return res.setTitle("amount must be between ");
        }
    }
    else {
        return res.setTitle("specify how many messages you want to send");
    }
};

export default Delete;

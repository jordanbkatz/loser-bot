async function Delete({ msg, args, res }) {
    if (msg.channel.type == 'dm') {
        return res.setTitle('cannot delete messages in this channel');
    }
    else if (args[0]) {
        const amount = parseInt(args[0]);
        if (0 < amount && amount < 100) {
            try {
                await msg.channel.bulkDelete(amount + 1);
                return res.setTitle(`deleted ${amount} messages`);
            }
            catch (err) {
                console.log(err.message);
                return res.setTitle("failed to delete messages");
            }
        }
        else {
            return res.setTitle("amount must be between 0 and 100");
        }
    }
    else {
        return res.setTitle("specify how many messages you want to send");
    }
}

module.exports = Delete;
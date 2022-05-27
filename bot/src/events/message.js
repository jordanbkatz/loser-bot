function Message({ client }) {
    return async function (msg) {
        if (msg.author.bot) {
            return;
        }
        if (msg.content.startsWith('$loser')) {
            let res = new client.discord.MessageEmbed();

            

            res.setColor('#df208f');
            msg.channel.send(res);
        }
    };
}

export default Message;
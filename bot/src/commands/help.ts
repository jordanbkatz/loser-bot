import Command from "../Command";

const Help: Command = async function ({ bot }) {
    const res = new bot.discord.MessageEmbed();
    return res.setTitle("need help?").setURL("asdf");
};

export default Help;
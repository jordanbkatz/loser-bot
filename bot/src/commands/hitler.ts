import Command from '../Command';
import axios from 'axios';

const Hitler: Command = async function ({ bot }) {
    const res = new bot.discord.MessageEmbed();
    try {
        const quote = await axios.get("https://hitler-api.herokuapp.com");
        return res.setTitle("Hitler").setDescription(`"${quote.data}"`);
    }
    catch (err) {
        console.log(err);
        return res.setTitle("failed to get hitler quote");
    }
};

export default Hitler;
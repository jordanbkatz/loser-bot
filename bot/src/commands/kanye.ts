import Command from '../Command';
import axios from 'axios';

const Kanye: Command = async function ({ bot }) {
    const res = new bot.discord.MessageEmbed();
    try {
        const quote = await axios.get("https://api.kanye.rest/");
        return res.setTitle("Kanye").setDescription(`"${quote.data.quote}"`);
    }
    catch (err) {
        console.log(err);
        return res.setTitle("failed to fetch Kanye quote");
    }
};

export default Kanye;
import Command from '../Command';
import axios from 'axios';

const Kanye: Command = async function ({ bot }) {
    const res = new bot.discord.MessageEmbed();
    try {
        const quote = await axios.get('https://api.kanye.rest/');
        res.setTitle("Kanye");
        res.setDescription(`"${quote.data.quote}"`);
    }
    catch (err) {
        console.log(err);
        res.setTitle("Error");
    }
    finally {
        return res;
    }
};

export default Kanye;
import axios from 'axios';

async function Kanye({ client }) {
    const res = new client.discord.MessageEmbed();
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
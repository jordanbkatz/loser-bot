import axios from 'axios';

async function Hitler({ client }) {
    const res = new client.discord.MessageEmbed();
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
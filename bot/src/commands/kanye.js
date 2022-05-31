const axios = require('axios');

module.exports = async function ({ res }) {
    try {
        const quote = await axios.get("https://api.kanye.rest/");
        return res.setTitle("Kanye").setDescription(`"${quote.data.quote}"`);
    }
    catch (err) {
        console.log(err);
        return res.setTitle("failed to fetch Kanye quote");
    }
}
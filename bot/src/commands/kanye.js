const axios = require('axios');

async function Kanye({ res }) {
    try {
        const quote = await axios.get('https://api.kanye.rest/');
        return res.setTitle('Kanye').setDescription(`"${quote.data.quote}"`);
    }
    catch (err) {
        console.log(err);
        return res.setTitle('failed to fetch Kanye quote');
    }
}

module.exports = Kanye;
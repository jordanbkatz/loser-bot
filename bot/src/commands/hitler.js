const axios = require('axios');

module.exports = async function ({ res }) {
    try {
        const quote = await axios.get("https://hitler-api.herokuapp.com");
        return res.setTitle("Hitler").setDescription(`"${quote.data}"`);
    }
    catch (err) {
        console.log(err);
        return res.setTitle("failed to get hitler quote");
    }
}
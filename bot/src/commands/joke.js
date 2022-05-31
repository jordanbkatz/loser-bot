const axios = require('axios');

module.exports = async function ({ res }) {
    try {
        const joke = await axios.get("https://v2.jokeapi.dev/joke/Dark");
        return res.setTitle(joke.data.setup).setDescription(joke.data.delivery);
    }
    catch (err) {
        console.log(err);
        return res.setTitle("error");
    }
}
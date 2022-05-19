import Command from '../Command';
import axios from 'axios';

const Joke: Command = async function ({ bot }) {
    const res = new bot.discord.MessageEmbed();
    try {
        const joke = await axios.get("https://v2.jokeapi.dev/joke/Dark");
        return res.setTitle(joke.data.setup).setDescription(joke.data.delivery);
    }
    catch (err) {
        console.log(err);
        return res.setTitle("error");
    }
};

export default Joke;
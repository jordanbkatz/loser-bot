import { Command } from '../models/command';
import axios from 'axios';

const Joke: Command = async ({ res }) => {
    try {
        const { data } = await axios.get("https://v2.jokeapi.dev/joke/Dark");
        res.setTitle(data.setup).setDescription(data.delivery);
    }
    catch (err) {
        res.setTitle("failed to fetch joke");
    }
};

export default Joke;
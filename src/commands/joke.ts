import { ICommand } from '../models/command';
import axios from 'axios';

const Joke: ICommand = {
    name: 'joke',
    description: 'Get an offensive joke',
    run: async ({ res }) => {
        try {
            const { data } = await axios.get("https://v2.jokeapi.dev/joke/Dark");
            res.setTitle(data.setup).setDescription(data.delivery);
        }
        catch (err) {
            res.setTitle("failed to fetch joke");
        }
    }
};

export default Joke;
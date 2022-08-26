import axios from 'axios';

const Joke = async ({ res }) => {
    try {
        const { data } = await axios("https://v2.jokeapi.dev/joke/Dark");
        res.setTitle(data.setup).setDescription(data.delivery);
    }
    catch (err) {
        res.setTitle("error").setDescription(err.message);
    }
};

export default Joke;
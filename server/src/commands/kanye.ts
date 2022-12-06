import { Command } from '../models/command';
import axios from 'axios';

const Kanye: Command = async ({ res }) => {
    try {
        const { data } = await axios.get('https://api.kanye.rest/');
        res.setTitle('Kanye').setDescription(`"${data.quote}"`);
    }
    catch (err) {
        res.setTitle('failed to fetch Kanye quote');
    }
};

export default Kanye;
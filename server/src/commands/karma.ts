import { Command } from '../models/command';
import axios from 'axios';

const Karma: Command = async ({ args, res }) => {
    if (args[0]) {
        try {
            const { data } = await axios.get(`https://karma-api.herokuapp.com/${args[0]}`);
            res.setTitle(`u/${data}`).setDescription(`${data} karma`);
        }
        catch (err) {
            res.setTitle("failed to fetch karma");
        }
    }
    else {
        res.setTitle("specify a reddit user");
    }
};

export default Karma;
import { ICommand } from '../models/command';

const Rand: ICommand = {
    name: 'rand',
    description: 'Get a random number between a minimum and maximum',
    run: async ({ args, res }) => {
        if (!args[0] || !args[1]) {
            res.setTitle('Please specify both minimum and maximum values');
        }
        else {
            const min = parseInt(args[0]);
            const max = parseInt(args[1]);
            const val = Math.floor(Math.random() * (max - min + 1)) + min;
            res.setTitle(val);
        }
    }
};

export default Rand;
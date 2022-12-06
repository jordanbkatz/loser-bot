import { Command } from '../models/command';
import { evaluate } from 'mathjs';

const Math: Command = async ({ args, res }) => {
    if (args[0]) {
        try {
            const answer = evaluate(args.join(' '));
            res.setTitle(answer);
        }
        catch (err) {
            res.setTitle("failed to evaluate mathematical expression");
        }
    }
    else {
        res.setTitle('specify mathematical expression');
    }
};

export default Math;
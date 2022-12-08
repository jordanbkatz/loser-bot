import { ICommand } from '../models/command';
import { evaluate } from 'mathjs';

const Math: ICommand = {
    name: 'math',
    description: 'Evaluate a mathematical expression',
    run: async ({ args, res }) => {
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
    }
};

export default Math;
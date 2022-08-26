import { evaluate } from 'mathjs';

const Math = async ({ args, res }) => {
    if (args[0]) {
        try {
            const answer = evaluate(args.join(' '));
            res.setTitle(answer);
        }
        catch (err) {
            res.setTitle("failed to evaluate mathematical expression").setDescription(err.message);
        }
    }
    else {
        return res.setTitle('specify mathematical expression');
    }
};

export default Math;
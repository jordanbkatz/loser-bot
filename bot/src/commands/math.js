const mathjs = require('mathjs');

async function Math({ args, res }) {
    if (args[0]) {
        try {
            const answer = mathjs.evaluate(args.join(' '));
            return res.setTitle(answer);
        }
        catch (err) {
            res.setTitle(err.message);
        }
    }
    else {
        return res.setTitle('specify mathematical expression');
    }
}

module.exports = Math;
async function Rand({ args, res }) {
    if (!args[0] || !args[1]) {
        return res.setTitle('Please specify both minimum and maximum values');
    }
    const min = parseInt(args[0]);
    const max = parseInt(args[1]);
    const val = Math.floor(Math.random() * (max - min + 1)) + min;
    return res.setTitle(val);
}

module.exports = Rand;
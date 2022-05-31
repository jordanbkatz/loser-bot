module.exports = function ({ bot }) {
    return function () {
        console.log(`Logged in as ${bot.user.tag}`);
    };
}
function Ready({ bot }) {
    return function () {
        console.log(`Logged in as ${bot.user.tag}`);
    }
}

module.exports = Ready;
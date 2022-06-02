function GuildDelete({}) {
    return function (guild) {
        console.log(`Left the guild known as ${guild.name}`);
    }
}

module.exports = GuildDelete;
function GuildCreate({}) {
    return function (guild) {
        console.log(`Joined the guild known as ${guild.name}`);
    }
}

module.exports = GuildCreate;
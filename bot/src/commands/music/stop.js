async function Stop({ msg, res }) {
    const vc = msg.member.voice.channel;
    await vc.leave();
}

module.exports = Stop;
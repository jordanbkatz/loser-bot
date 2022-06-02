const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');

async function Play({ msg, args, res }) {
    const vc = msg.member.voice.channel;
    if (args[0]) {
        const connection = await vc.join();
        const validUrl = function (str) {
            const regEx = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
            if (!regEx.test(str)) {
              return false;
            }
            else {
              return true;
            }
        }
        const videoFinder = async function (query) {
            const result = await ytSearch(query);
            return (result.videos.length > 0) ? result.videos[0] : null;
        }
        const isUrl = validUrl(args[0]);
        const video = await videoFinder(args.join(' '));
        const stream = ytdl((isUrl) ? args[0] : video.url, { filter: 'audioonly', highWaterMark: 1<<25 });
        connection.play(stream, { seek: 0, volume: 1 }).on('finish', async function () {
            await vc.leave();
        });
        return res.setTitle(`Playing: ${(isUrl) ? args[0] : video.title}`);
    }
    else {
        return res.setTitle('specify YouTube video to play');
    }
}

module.exports = Play;
const akaneko = require('akaneko');

module.exports = async function ({ args, res }) {
    if (args[0]) {
        if (!(args[0] in akaneko.nsfw)) {
            return res.setTitle("invalid akaneko nsfw category");
        }
        try {
            const image = await akaneko.nsfw[args[0]]();
            return res.setImage(image);
        }
        catch (err) {
            console.log(err);
            return res.setTitle("failed to get akenko nsfw image");
        }
    }
    else {
        return res.setTitle("specifiy akaneko nsfw category");
    }
}
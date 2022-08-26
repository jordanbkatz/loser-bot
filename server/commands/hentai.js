import akaneko from 'akaneko';

const Hentai = async ({ args, res }) => {
    if (args[0]) {
        if (!(args[0] in akaneko.nsfw)) {
            res.setTitle("invalid akaneko nsfw category");
        }
        try {
            const image = await akaneko.nsfw[args[0]]();
            res.setImage(image);
        }
        catch (err) {
            res.setTitle("failed to get akenko nsfw image").setDescription(err.message);
        }
    }
    else {
        res.setTitle("specifiy akaneko nsfw category");
    }
};

export default Hentai;
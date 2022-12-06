import { Command } from '../models/command';
import akaneko from 'akaneko';

const Hentai: Command = async ({ args, res }) => {
    let success = false;
    const categories = Object.keys(akaneko.nsfw);
    if (args[0]) {
        if (!categories.includes(args[0])) {
            res.setTitle("invalid akaneko nsfw category");
        }
        else {
            try {
                const image = await akaneko.nsfw[args[0] as keyof typeof akaneko.nsfw]();
                res.setImage(image);
                success = true;
            }
            catch (err) {
                res.setTitle("failed to get akenko nsfw image");
            }
        }
    }
    else {
        res.setTitle("specifiy akaneko nsfw category");
    }
    if (!success) {
        res.setDescription(`categories: ${categories.join(', ')}`);
    }
};

export default Hentai;
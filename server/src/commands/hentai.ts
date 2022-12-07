import { Command } from '../models/command';
const Hmtai = require('hmtai');

const Hentai: Command = async ({ args, res }) => {
    let success = false;
    const api = new Hmtai();
    const categories = Object.keys(api.nsfw);
    if (args[0]) {
        if (!categories.includes(args[0])) {
            res.setTitle("invalid akaneko nsfw category");
        }
        else {
            try {
                const image = await api.nsfw[args[0] as keyof typeof api.nsfw]();
                res.setImage(image);
                success = true;
            }
            catch (err) {
                res.setTitle("failed to get akenko nsfw image");
            }
        }
    }
    else {
        res.setTitle("specifiy category");
    }
    if (!success) {
        res.setDescription(`categories: ${categories.join(', ')}`);
    }

};

export default Hentai;
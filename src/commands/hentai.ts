import { ICommand } from '../models/command';
const Hmtai = require('hmtai');

const Hentai: ICommand = {
    name: 'hentai',
    description: 'Get random hentai content',
    run: async ({ args, res }) => {
        const api = new Hmtai();
        const categories = Object.keys(api.nsfw);
        if (args[0]) {
            if (!categories.includes(args[0])) {
                res.setTitle("invalid akaneko nsfw category");
                res.setDescription(`categories: ${categories.join(', ')}`);
            }
            else {
                try {
                    const image = await api.nsfw[args[0] as keyof typeof api.nsfw]();
                    res.setImage(image);
                }
                catch (err) {
                    res.setTitle("failed to get akenko nsfw image");
                }
            }
        }
        else {
            res.setTitle("specifiy category");
            res.setDescription(`categories: ${categories.join(', ')}`);
        }
    }
};

export default Hentai;
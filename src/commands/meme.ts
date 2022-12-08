import { ICommand } from '../models/command';
import axios from 'axios';

const Meme: ICommand = {
    name: 'meme',
    description: 'Get a meme from the dankmemes subreddit',
    run: async ({ res }) => {
        const limit = 100;
        try {
            const { data } = await axios.get(`https://www.reddit.com/r/dankmemes/hot/.json?limit=${limit}`);
            const allowed = data.data.children.filter((meme: any) => meme.data.post_hint == 'image');
            const meme = allowed[Math.floor(Math.random() * (limit - 1)) + 1].data;
            res.setTitle(meme.title).setImage(meme.preview.images[0].source.url.replace('amp;s', 's'));
        }
        catch (err) {
            res.setTitle('failed to fetch meme');
        }
    }
};

export default Meme;
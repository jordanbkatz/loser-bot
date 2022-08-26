import axios from 'axios';

const Meme = async ({ res }) => {
    const limit = 100;
    try {
        const { data } = await axios(`https://www.reddit.com/r/dankmemes/hot/.json?limit=${limit}`);
        const allowed = data.data.children.filter(meme => meme.data.post_hint == 'image');
        const meme = allowed[Math.floor(Math.random() * (limit - 1)) + 1].data;
        res.setTitle(meme.title).setImage(meme.preview.images[0].source.url.replace('amp;s', 's'));
    }
    catch (err) {
        res.setTitle('failed to fetch meme').setDescription(err.message);
    }
};

export default Meme;
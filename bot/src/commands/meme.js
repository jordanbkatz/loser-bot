const axios = require('axios');

async function Meme({ res }) {
    const limit = 100;
    try {
        const memes = await axios.get(`https://www.reddit.com/r/dankmemes/hot/.json?limit=${limit}`);
        const allowed = memes.data.data.children.filter(meme => meme.data.post_hint == 'image');
        const meme = allowed[Math.floor(Math.random() * (limit - 1)) + 1].data;
        return res.setTitle(meme.title).setImage(meme.preview.images[0].source.url.replace('amp;s', 's'));
    }
    catch (err) {
        console.log(err);
        return res.setTitle('failed to fetch meme');
    }
}

module.exports = Meme;
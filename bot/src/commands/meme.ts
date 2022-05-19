import Command from "../Command";
import axios from "axios";

const Meme: Command = async function ({ bot }) {
    const res = new bot.discord.MessageEmbed();
    const limit = 100;
    try {
        const memes = await axios.get(`https://www.reddit.com/r/dankmemes/hot/.json?limit=${limit}`);
        const allowed = memes.data.data.children.filter(function (meme: any) {
            return meme.data.post_hint == "image";
        });
        const meme = allowed[Math.floor(Math.random() * (limit - 1)) + 1].data;
        return res.setTitle(meme.title).setImage(meme.preview.images[0].source.url.replace("amp;s", "s"));
    }
    catch (err) {
        console.log(err);
        return res.setTitle("failed to fetch meme");
    }
};

export default Meme;
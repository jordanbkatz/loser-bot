import axios from 'axios';

const Hitler = async ({ res }) => {
    try {
        const { data } = await axios("https://hitler-api.herokuapp.com");
        res.setTitle("Hitler").setDescription(`"${data}"`);
    }
    catch (err) {
        res.setTitle("failed to get hitler quote").setDescription(err.message);
    }
};

export default Hitler;
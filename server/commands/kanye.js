import axios from 'axios';

const Kanye = async ({ res }) => {
    try {
        const { data } = await axios('https://api.kanye.rest/');
        res.setTitle('Kanye').setDescription(`"${data.quote}"`);
    }
    catch (err) {
        res.setTitle('failed to fetch Kanye quote').setDescription(err.message);
    }
};

export default Kanye;
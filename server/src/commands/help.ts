import { Command } from '../models/command';

const Help: Command = async ({ res }) => {
    res.setTitle("Need help?").setURL("https://loserbot.com/commands");
};

export default Help;
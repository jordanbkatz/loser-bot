import { Command } from '../models/command';

const Unknown: Command = async ({ res }) => {
    res.setTitle("Unknown command").setURL("https://loserbot.com/commands");
};

export default Unknown;
const { Events } = require("discord.js");

module.exports = {
    name:Events.MessageCreate,
    async execute(message,client){
        const prefix = "Cs."
    if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	if (!client.commands.has(command)) return;

	try {
		client.commands.get(command).execute(message,client,args);
	} catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	}
    }
}
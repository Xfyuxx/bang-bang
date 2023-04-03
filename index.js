const { Client, GatewayIntentBits, Collection} = require('discord.js');
const fs = require('node:fs');
const path = require('node:path');
const { token } = require("./config");


const client = new Client({ 
	intents: [
    GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers
] });


client.login(token);



//command handling
client.commands = new Collection();

const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const p = "-----------------------------------------"
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	// Set a new item in the Collection with the key as the command name and the value as the exported module
	if ('name' in command && 'execute' in command) {
		client.commands.set(command.name, command)
	} else {
		console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
		
	}
}

//events
const eventsPath = path.join(__dirname, 'events');
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
	const filePath = path.join(eventsPath, file);
	const event = require(filePath);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args,client));
	} else {
		client.on(event.name, (...args) => event.execute(...args,client));
	}
}

//resgiter slash
//require("./register-slash")

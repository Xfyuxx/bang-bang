```js

const row = new ActionRowBuilder()
	.addComponents(
	new ButtonBuilder()
			.setCustomId('primary')
			.setLabel('Click me!')
			.setStyle(ButtonStyle.Primary),

message.channel.send({components:[row]})

```

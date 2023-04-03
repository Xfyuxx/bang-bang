const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js")


module.exports = {
name:'list',
description:'list produk',
async execute(message,client,command,args){

    const embed = new EmbedBuilder()
    .setColor("Aqua")
    .setTitle(`list produk <#${message.channel.id}>`)
    .setDescription("isi y");

    const button = new ActionRowBuilder()
    .addComponents(
        new ButtonBuilder()
        .setCustomId("nama seller")
        .setLabel("nama seller")
        .setStyle(ButtonStyle.Secondary)

        // merah = ButtonStyle.Danger
        //biru =  ButtonStyle.Primary
        //hijau = ButtonStyle.Success
    )



    message.delete(`${command.name}`)
    await message.channel.send({ embeds: [embed], components:[button], ehpmereal:true})

    const filter = i => i.customId === 'nama seller';
    const p = message.channel.create({
        filter,
        time:15000
    })

    p.on('collect', async m => {
	if (i.customId === 'nama seller') {
		const namaseller = new EmbedBuilder()
    .setColor("Aqua")
    .setTitle(`list produk`)
    .setDescription("isi y");
		await m.channel.send({ embeds:[namaseller], ephmereal:true});

	} else if (i.customId === 'nama seller') {
		const namaseller = new EmbedBuilder()
    .setColor("Aqua")
    .setTitle(`list produk`)
    .setDescription("isi y");
		await m.channel.send({ embeds:[namaseller], ephmereal:true});

	} else if (i.customId === 'nama seller') {
		const namaseller = new EmbedBuilder()
    .setColor("Aqua")
    .setTitle(`list produk`)
    .setDescription("isi y");
		await m.channel.send({ embeds:[namaseller], ehpmereal:true});
	}
});

}
}

p.on('end',console.log(`berhasilll`));
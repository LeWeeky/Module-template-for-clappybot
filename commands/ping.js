const { SlashCommandBuilder } = require("discord.js");

async function parse(interaction, cmd, args)
{
	if (interaction.options)
	{
		// Commande slash (/ping)
		const response = await interaction.reply({ content: "Pong !", withResponse: true });
		const { message } = response.resource;
		const latency = message.createdTimestamp - interaction.createdTimestamp;
		const apiPing = Math.round(interaction.client.ws.ping);
		
		await interaction.editReply(`🏓 Latency : ${latency}ms\n📡 Ping API : ${apiPing}ms`);
	}
	else
	{
		// Commande classique (+ping)
		const message = await interaction.channel.send({ content: "Pong !" });
		const latency = message.createdTimestamp - Date.now();
		const apiPing = Math.round(interaction.client.ws.ping);
		
		message.edit(`🏓 Latency : ${-latency}ms\n📡 Ping API : ${apiPing}ms`);
	}
}

module.exports = {
	parse,
	name: "ping",
	permissions: [],
	builder: new SlashCommandBuilder()
		.setName("ping")
		.setDescription("Display reply and api latency."),
	any_guild: false,
	dm: false
};

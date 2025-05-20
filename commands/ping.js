const { SlashCommandBuilder } = require("discord.js");

async function parse(interaction, cmd, args)
{
	if (interaction.options)
	{
		// Commande slash (/ping)
		const sent = await interaction.reply({ content: "Pong !", fetchReply: true });
		const latency = sent.createdTimestamp - interaction.createdTimestamp;
		const apiPing = Math.round(interaction.client.ws.ping);
		
		await interaction.editReply(`🏓 Latency : ${latency}ms\n📡 Ping API : ${apiPing}ms`);
	}
	else
	{
		// Commande classique (+ping)
		const sent = await interaction.channel.send({ content: "Pong !" });
		const latency = sent.createdTimestamp - Date.now();
		const apiPing = Math.round(interaction.client.ws.ping);
		
		sent.edit(`🏓 Latency : ${-latency}ms\n📡 Ping API : ${apiPing}ms`);
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

const { SlashCommandBuilder } = require("discord.js");

async function parse(interaction, cmd, args)
{
	if (interaction.options)
	{
		// Commande slash (/command)
		interaction.reply({content: "pong!"})
	}
	else
	{
		// Commande classique (+command)
		interaction.channel.send({content: "pong!"})
	}
}

module.exports = {
	parse,
	name: "ping",
	permissions: [],
	builder: new SlashCommandBuilder()
	.setName("ping")
	.setDescription("Empty example command."),
	any_guild: false
}
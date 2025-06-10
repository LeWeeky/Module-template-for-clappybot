const { SlashCommandBuilder } = require("discord.js");
const { clappybot } = require("../../../main");

async function parse(interaction, cmd, args)
{
	if (interaction.options)
	{
		// slashcmd
		const message = interaction.options.getString("message");
		await interaction.reply({ content: message });
	}
	else
	{
		// prefix
		const message = interaction.content.substring(clappybot.prefix.length + cmd.length).trimStart();
		if (message.length == 0) return interaction.channel.send("Please provide a message.");
		await interaction.channel.send(message);
	}
}

module.exports = {
	parse,
	name: "say",
	permissions: [],
	builder: new SlashCommandBuilder()
		.setName("say")
		.setDescription("Make the bot say something.")
		.addStringOption(option =>
			option.setName("message")
				.setDescription("The message to send")
				.setRequired(true)
		),
	any_guild: false,
	dm: false
};

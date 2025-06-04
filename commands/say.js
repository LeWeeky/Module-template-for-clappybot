const { SlashCommandBuilder } = require("discord.js");

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
		const message = args.join(" ");
		if (!message) return interaction.channel.send("Please provide a message.");
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

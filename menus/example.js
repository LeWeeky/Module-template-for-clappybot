const { MessageFlags } = require("discord.js");

async function parse(interaction)
{
	const selection = interaction.values[0]

	interaction.reply({
		content: `Thank you for selecting the option **${selection}**!`,
		flags: [MessageFlags.Ephemeral]
	})
}

module.exports = {
	parse,
	customId: "template-example",
	permissions: [],
	any_guild: false,
	dm: false
}
const { MessageFlags } = require("discord.js");

async function parse(interaction)
{
	const favoriteColor = interaction.fields.getTextInputValue('favoriteColorInput');
	const hobbies = interaction.fields.getTextInputValue('hobbiesInput');

	interaction.reply({
		content: `I'm happy to know that your favorite color is **${favoriteColor}** and your hobbies are **${hobbies}**!`,
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
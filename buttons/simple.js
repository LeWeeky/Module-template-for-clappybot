const { MessageFlags } = require("discord.js");

async function parse(interaction)
{
	interaction.reply({content: "Yes, this simple button works!", flags: [MessageFlags.Ephemeral]})
}

module.exports = {
	parse,
	customId: "template-simple",
	permissions: [],
	any_guild: false,
	dm: false
}